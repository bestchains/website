---
sidebar_position: 1
title: 产品概述
sidebar_label: 产品概述
---

Bestchain 是完全开源、全栈式的Web3解决方案。

![产品矩阵](../img/bestchains_stack.png)

### Layer1基础设施层

通过[Kubebb](https://github.com/kubebb)部署和管理基础设施，包括:

- [Kubernetes](https://kubernetes.io/)，容器编排平台
- [U4A组件](https://github.com/kubebb/building-base)，提供身份认证授权、访问控制
- [Nginx Ingress](https://docs.nginx.com/nginx-ingress-controller/)组件，提供外部访问平台内部服务的负载均衡、SSL加密等能力
- Addons扩展组件，如：
  - [Kubernetes Dashboard](https://github.com/kubernetes/dashboard)
  - [kubelogin](https://github.com/int128/kubelogin)

### Layer2区块链平台层

提供平台化的区块链管理能力，包括:

- 组织管理
- 联盟管理
- 网络管理
- 通道管理
- 合约管理

以及相应的：

- 内部区块链浏览器
- 实时日志
- 监控

等能力

### Layer3解决方案层

围绕区块链网络，我们准备从以下几个方向入手：

#### 1. DIDaaS

基于BESTCHAIN平台能力，实现一套DID(去中心化数字身份)解决方案，并以DIDaaS的形式提供去中心化数字身份的：

- 身份管理
- 身份认证
- 授权
- 访问控制

并广泛应用到我们其他的SaaS服务中，甚至考虑与云原生平台结合，优化云原生平台的管理机制，使其权限管理上更加公平透明。

#### 2. SaaS软件及服务

基于BESTCHAIN平台能力，赋能传统、新兴的应用场景。目前，我们考虑从两个方向入手:

- Depository as a Service(存证即服务)，优化通用的去中心化数字存证服务，强化数字存证的防篡改、可追溯、数据来源可信等能力

- NFT as a Service(数藏即服务)，提供简捷、全面的数字藏品服务，降低普通商户接入数字藏品门槛

#### 3. Explorer开放区块链浏览器

以可视化的方式开放区块链网络数据，同时支持BESTCHAINS平台内部和平台外部的区块链网络，并且支持多种异构链

- Fabric
- Cosmos生态链
- Ethereum生态链

#### 4. Contract Library

提供合约开发仓库，目前主要支持Fabric Chaincode

#### 5. Tools

目前，主要考虑提供:

- installer: 提供平台组件快速部署
- CLI: 提供适合开发人员的命令行工具
