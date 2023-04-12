---
sidebar_position: 1
title: 平台安装
sidebar_label: 平台安装
---

Bestchains平台提供[一站式部署工具](https://github.com/bestchains/installer),可快速完成所有相关组件的安装。下面，详细介绍安装流程

## 预先准备

1. 安装 [Docker](https://docs.docker.com/engine/install/)

2. 安装 [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)，如果已经有 Kubernetes 集群，可以不用安装 Kind 。

3. 安装 [helm](https://helm.sh/docs/intro/install/)

4. 安装 [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

5. 获取部署文件  

    ```shell
    git clone https://github.com/bestchains/installer.git
    ```

## 基本组件介绍

### u4a-component

- **[ingress-nginx](https://github.com/kubernetes/ingress-nginx)**  

    ingress-nginx 是一个用于 Kubernetes 的 Ingress 控制器，使用 NGINX 作为反向代理和负载平衡器。

- **[cert-manager](https://cert-manager.io/)**  

    cert-manager 在 Kubernetes 集群中添加了证书和证书颁发者作为资源类型，并简化了获取、更新和使用这些证书的过程。

- **bff-server**  

    为用户提供操作界面。

- **oidc-server**  

    是基于 Kubernetes 内部的反向代理，它使用 OIDC 对请求进行身份验证。

### baas-component

- **[fabric-operator](https://github.com/bestchains/fabric-operator)**  

    fabric-operator 是一个开源的、云原生的 Operator，用于管理 Kubernetes 上的 Hyperledger Fabric 网络，将执行重复的、详细的配置任务的细枝末节减少到基于软件的控制器指导下的自动化活动。

- **[bc-apis](https://github.com/bestchains/bc-apis)**  

    提供一些组合 API 来操作 fabric-operator 创建的资源。

- **[bc-explorer](https://github.com/bestchains/bc-explorer)**  

    区块链浏览器，浏览查看交易，区块等数据。

- **[minio](https://min.io/)**  

    对象存储服务。

- **[tekton-operator](https://tekton.dev/docs/operator/)**  

    Tekton Operator是一个Kubernetes扩展，用于在任何Kubernetes集群上安装、升级和管理TektonCD管道、仪表板、触发器（和其他组件）。

## 快速部署

如果目前没有一个 Kubernetes 集群，执行下面命令使用 `kind` 创建一个集群。

```shell
cd installer
make kind
```

执行下面的命令，快速部署 bestnchains 的所有服务。

```shell
cd installer
make e2e
```

## 手动部署

> **Note**  
> 部分组件的安装有依赖顺序。需要先部署 u4a-component, 该组件提供平台的基础服务，包括认证， 证书管理等。然后再部署 baas-componet，addon 等组件。

安装之前，首先要规划 ingress-nginx 和 kube-oidc-proxy 的安装节点，
**这两个服务不要使用相同 Kubernetes 节点**，修改 `scripts/e2e.sh` 。

```shell
ingressNode="<your-ingress-node-name>"
kubeProxyNode="<your-oidc-node-name>"
```

### 1. 安装 u4a-component

执行下面命令，单独安装。

```shell
./scripts/e2e.sh --u4a
```

查看服务的Pod状态，确认是否部署成功：

```shell
root@macbookpro:~# kubectl get po -nu4a-system
NAME                                                          READY   STATUS    RESTARTS   AGE
bff-server-76c4567bc4-4p9kt                                   1/1     Running   0          6m40s
capsule-controller-manager-5b9864f9bf-qgfnl                   1/1     Running   0          6m40s
cert-manager-79d7998d9-tjmsm                                  1/1     Running   0          11m
cert-manager-cainjector-57bb7f44dd-7jksz                      1/1     Running   0          11m
cert-manager-webhook-65b494ccf4-7s62c                         1/1     Running   0          11m
cluster-component-ingress-nginx-controller-86685d68f7-sm5qc   1/1     Running   0          11m
kube-oidc-proxy-85ff576b49-d2znt                              1/1     Running   0          6m40s
oidc-server-86c769c5f6-xm6rb                                  2/2     Running   0          6m40s
resource-view-controller-94645667-khwq5                       1/1     Running   0          6m40s
```

### 2. 安装 baas-componet

`baas-component` 包含 `fabric-operator`,`bc-apis`,`minio`, `tekton-operator` 这四个服务。
其中 `minio` 和 `tekton-operator` 是依赖组件，`fabirc-operator`、`bc-apis` 这两个服务会一起部署。

执行下面命令安装。

```shell
./scripts/e2e.sh --baas
```

查看服务的Pod状态，确认是否部署成功：

```shell
root@macbookpro:~# kubectl get po -ntekton-pipelines
NAME                                                READY   STATUS    RESTARTS   AGE
tekton-operator-proxy-webhook-875cf7f97-bx2zp       1/1     Running   0          10m
tekton-pipelines-controller-76b57458b6-44qlh        1/1     Running   0          10m
tekton-pipelines-remote-resolvers-ff696f9b6-zhjbk   1/1     Running   0          10m
tekton-pipelines-webhook-7569bb59c6-6v522           1/1     Running   0          10m
root@macbookpro:~# kubectl get po -nbaas-system
NAME                                              READY   STATUS    RESTARTS      AGE
bff-apis-75486dcfdc-szkff                         1/1     Running   0             23m
controller-manager-5956cdd95b-d5hvn               1/1     Running   1 (11m ago)   14m
fabric-minio-0                                    1/1     Running   0             23m
fabric-minio-1                                    1/1     Running   0             23m
fabric-minio-2                                    1/1     Running   0             23m
fabric-tekton-operator-c99c87f8f-wmbhk            2/2     Running   0             23m
fabric-tekton-operator-webhook-5f88c755db-s58f8   1/1     Running   0             23m
```

### 3. 安装区块链浏览器

执行下面的命令安装区块链浏览器和 postgresql。

```shell
./scripts/e2e.sh --explorer
```

查看服务的Pod状态，确认是否部署成功：

```shell
root@macbookpro:~# kubectl get po -nbaas-system
NAME                                              READY   STATUS    RESTARTS      AGE
bc-explorer-6d6c48d57f-h62lx                      3/3     Running   0             38s
bc-explorer-postgresql-0                          1/1     Running   0             3m17s
```

### 4. 安装 Pipeline

piepline 用来构建合约镜像。

```shell
./scripts/e2e.sh --tekton-task-pipeline
```

安装完成，查看安装后的资源。

```shell
root@macbookpro:~# kubectl get pipeline 
NAME                    AGE
chaincodebuild          15s
chaincodebuild-kaniko   14s
```

## 访问

通过[快速部署](#快速部署)或者[手动部署](#手动部署)部署服务后，
通过下面命令查找访问地址：

```shell
root@macbookpro:~# kubectl get ingress -nu4a-system
NAME                        CLASS    HOSTS                      ADDRESS      PORTS     AGE
bff-server-ingress          <none>   portal.172.18.0.5.nip.io   172.18.0.5   80, 443   59m
bff-server-ingress-socket   <none>   portal.172.18.0.5.nip.io   172.18.0.5   80, 443   59m
```

通过浏览器访问 `https://portal.172.18.0.5.nip.io` 服务。
