---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

Bestchains provides [insaller](https://github.com/bestchains/installer) which helps install `Bestchains` quickly. 
You can follow theses steps.

## Prerequisites

1. Install [Docker](https://docs.docker.com/engine/install/)

2. Install [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation), If you already have a Kubernetes cluster, you do not need to install Kind.

3. Install [helm](https://helm.sh/docs/intro/install/)

4. Install [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

5. Get source code

    ```shell
    git clone https://github.com/bestchains/installer.git
    ```

## Introduction to the basic components

### u4a-component

- **[ingress-nginx](https://github.com/kubernetes/ingress-nginx)**  

    ingress-nginx is an Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer.

- **[cert-manager](https://cert-manager.io/)**  

    cert-manager adds certificates and certificate issuers as resource types in Kubernetes clusters,
    and simplifies the process of obtaining, renewing and using those certificates.

- **bff-server**  

    Provides an operator interface for the user.

- **oidc-server**  

    Is based on a reverse proxy inside Kubernetes that uses OIDC to authenticate requests.

### baas-component

- **[fabric-operator](https://github.com/bestchains/fabric-operator)**  

    fabric-operator is an open-source, cloud-native Operator for managing Hyperledger Fabric networks on Kubernetes.
    The operator follows the CNCF Operator Pattern, reducing the minutia of performing repetitive,
    detailed configuration tasks to automated activities performed under the guidance of software-based controllers.

- **[bc-apis](https://github.com/bestchains/bc-apis)**  

    Provides some combination of APIs to manipulate the resources created by the fabric-operator.

- **[bc-explorer](https://github.com/bestchains/bc-explorer)**  

   Blockchain browser, browse to view transactions, blocks and other data.

- **[minio](https://min.io/)**  

    Object storage services.

- **[tekton-operator](https://tekton.dev/docs/operator/)**  

    Tekton Operator is a Kubernetes extension that to install,
    upgrade and manage TektonCD Pipelines, Dashboard, Triggers (and other components) on any Kubernetes Cluster.

## Quick Start

If you do not currently have a Kubernetes cluster, run the following command to create a cluster using `kind`.

```shell
cd installer
make kind
```

Execute the following command to quickly deploy all services of bestnchains.

```shell
cd installer
make e2e
```

## Manual deployment

> **Note**  
> Some components have a dependency order for installation.
> The u4a-component, which provides the basic services of the platform,
> including authentication, certificate management, etc, needs to be deployed first.
> Then the baas-componet, addon and other components are deployed.

Before installing, first plan the installation nodes for ingress-nginx and kube-oidc-proxy.
**Don't use the same Kubernetes node for both services** and modify `scripts/e2e.sh`.

```shell
ingressNode="<your-ingress-node-name>"
kubeProxyNode="<your-oidc-node-name>"
```

### 1. Install u4a-component

Execute the following command to install it separately.

```shell
./scripts/e2e.sh --u4a
```

To check the Pod status of the service and confirm successful deployment:

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

### 2. Install baas-component

`baas-component` contains the four services `fabric-operator`, `bc-apis`, `minio`, `tekton-operator`.
Where `minio` and `tekton-operator` are dependent components, the two services `fabirc-operator`, `bc-apis` will be deployed together.

Execute the following command to install them:

```shell
./scripts/e2e.sh --baas
```

To check the Pod status of the service and confirm successful deployment:

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

### 3. Install blockchain explorer

Execute the following commands to install the blockchain browser and postgresql.

```shell
./scripts/e2e.sh --explorer
```

To check the Pod status of the service and confirm successful deployment:

```shell
root@macbookpro:~# kubectl get po -nbaas-system
NAME                                              READY   STATUS    RESTARTS      AGE
bc-explorer-6d6c48d57f-h62lx                      3/3     Running   0             38s
bc-explorer-postgresql-0                          1/1     Running   0             3m17s
```

### 4. Install Pipeline

piepline is used to build contract images.

```shell
./scripts/e2e.sh --tekton-task-pipeline
```

Installation complete, view resources after installation.

```shell
root@macbookpro:~# kubectl get pipeline 
NAME                    AGE
chaincodebuild          15s
chaincodebuild-kaniko   14s
```

## Access

After deploying the service via [Quick Start](#quick-start) or [Manual deployment](#manual-deployment)

Find the access address with the following command:

```shell
root@macbookpro:~# kubectl get ingress -nu4a-system
NAME                        CLASS    HOSTS                      ADDRESS      PORTS     AGE
bff-server-ingress          <none>   portal.172.18.0.5.nip.io   172.18.0.5   80, 443   59m
bff-server-ingress-socket   <none>   portal.172.18.0.5.nip.io   172.18.0.5   80, 443   59m
```

Access the `https://portal.172.18.0.5.nip.io` service via your browser.
