---
sidebar_position: 2
title:  合约库
sidebar_label: 合约库
---

目前，`bestchains` 合约库中共有 6 种合约，其详细信息分列如下：

## Nonce 合约

- 开发状态：已完成
- 用途：提供账户 nonce 值赋值、自增及比对功能，可在[智能合约开发](https://github.com/bestchains/website/blob/main/docs/DevGuide/contract_dev.md)中用于核验操作有效性。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/nonce/nonce.go)
- 核心功能：
    1. 查询指定账户当前 nonce 值
    2. 使指定账户 nonce 值自增
    3. 查询指定账户 nonce 值与给定期望值是否相同

## 访问控制合约（Access Control）

- 开发状态：已完成
- 用途：提供基于角色（Role）的访问控制管理功能，如账户角色管理、合约所有权移交等。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/access/access_control.go)
- 核心功能：
    1. 赋予及删除账户的角色
    2. 管理合约所有权
    3. 查询指定账号的角色及权限

## 存证合约（Depository）

- 开发状态：已完成
- 用途：基于 Nonce 合约及访问控制合约的权限管理能力，提供存证信息的键值对形式链上存储、读写删管理等功能。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/depository/depository.go)
- 核心功能：
    1. 账号读写权限认证
    2. 存证信息的存储
    3. 非可信存证信息的存储
    4. 依据存证序号或 ID 读取存证信息

## 时间锁合约（Timelock）

- 开发状态：已完成
- 用途：时间锁代码库的示范样例合约，提供键值对读写操作定时执行功能。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/timelock/timelock.go)
- 核心功能：
    1. 接收键值对信息，对其设置存储操作定时器
    2. 定时器释放后执行存储操作
    3. 查询键值对信息

## ERC-20 合约

- 开发状态：正在开发（WIP）
- 用途：提供符合 ERC-20 协议的同质化代币的链上发行及交易功能。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/token/erc20/erc20.go)
- 核心功能：
    1. ERC-20 协议代币的铸币、授权、交易、销毁

## ERC-1155 合约

- 开发状态：正在开发（WIP）
- 用途：提供符合 ERC-1155 协议的非同质化代币（NFT）的链上发行及交易功能。
- [合约代码链接](https://github.com/bestchains/bestchains-contracts/blob/main/contracts/token/erc1155/erc1155.go)
- 核心功能：
    1. ERC-1155 协议代币的铸币、授权、交易、销毁