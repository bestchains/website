---
sidebar_position: 1
title:  CLI 使用介绍
sidebar_label: CLI 使用介绍
---

## 介绍

`bc-cli` 可以用来管理账户信息，管理存证，以及查看汲取中构成区块链的多种资源，包括不限于联盟，网络等。
该工具包含 `create`, `delete`, `get` 三个主要命令, 用来操作 `account`, `depository` 等资源。

## 账户管理

### 添加账户

通过`-h`查看命令定义，`--pk` 用来指定用户自己提供的`ecdsa`私钥，如果未使用该参数，会自动创建一个私钥。 `--wallet` 用来指定生成的用户账户地址以及私钥存储位置，默认是 `$HOME/.bestchains/wallet`。目前数据未做加密处理。

```shell
➜  bc-cli git:(main) ✗ ./bc-cli create account -h
Create an account

Usage:
  bc-cli create account [flags]

Flags:
  -h, --help            help for account
      --pk string       the user's own private key, which is automatically generated if not provided
      --wallet string   wallet path
```

1. 自动生成私钥，将用户信息存储到默认位置

    ```shell
    ➜  bc-cli git:(main) ✗ ./bc-cli create account
    account/0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8 created
    ➜  bc-cli git:(main) ✗ ls $HOME/.bestchains/wallet 
    0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8
    ```

2. 自动生成私钥，并且将账户信息存储到本地的`/tmp/abc`目录

    ```shell
    ➜  bc-cli git:(main) ✗ ./bc-cli create account --wallet=/tmp/abc
    account/0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb created
    ➜  bc-cli git:(main) ✗ ls /tmp/abc 
    0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb
    ```

3. 提供私钥，将用户存储到默认位置

    准备私钥，并存放在文件`pk.pem`中

    ```shell
    ➜  bc-cli git:(main) ✗ cat pk.pem  
    -----BEGIN PRIVATE KEY-----
    MHcCAQEEIDuaob5MQI3tl8H/Z8L+VIiKaER1r/aojZfeRapKpbBhoAoGCCqGSM49
    AwEHoUQDQgAER6bI26M8/6cEwpHNm+wHq/wxU4ISG/2xfcyGeAsghx4hAUjVg9rr
    XYwFcMEK3BTGtx7v6Ai2OhxK4wF6/jibOA==
    -----END PRIVATE KEY-----
    ➜  bc-cli git:(main) ✗ ./bc-cli create account --pk=./pk.pem
    account/0x7f0c733bcdb6721ed266a952ec697d9bea8022ad created
    ➜  bc-cli git:(main) ✗ ls $HOME/.bestchains/wallet 
    0x7f0c733bcdb6721ed266a952ec697d9bea8022ad 0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8
    ```

### 查看账户信息

通过`-h`查看命令定义，通过`--wallet`参数来查看不同`wallet`下的账户列表。

```
➜  bc-cli git:(main) ✗ ./bc-cli get account -h
Display account information according to wallet path

Usage:
  bc-cli get account [flags]

Flags:
  -h, --help            help for account
      --wallet string   wallet path
```

```shell
➜  bc-cli git:(main) ✗ ./bc-cli get account       
ACCOUNT
0x7f0c733bcdb6721ed266a952ec697d9bea8022ad
0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8
➜  bc-cli git:(main) ✗ ./bc-cli get account --wallet=/tmp/abc
ACCOUNT
0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb
```

### 删除账户信息

通过`-h`查看命令定义，通过`--wallet`参数来删除不同`wallet`下的账户列表, 支持一次删除多个。

```
➜  bc-cli git:(main) ✗ ./bc-cli get account -h
Display account information according to wallet path

Usage:
  bc-cli get account [flags]

Flags:
  -h, --help            help for account
      --wallet string   wallet path
```

1. 删除 `/tmp/abc` 下面的账户信息

    ```shell
    ➜  bc-cli git:(main) ✗ ./bc-cli delete account --wallet=/tmp/abc 0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb
    account "0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb" deleted
    ➜  bc-cli git:(main) ✗ ./bc-cli get account --wallet=/tmp/abc                                              
    ACCOUNT
    ```

2. 删除默认位置的多个账户信息

    可以注意到，在删除的命令后面多一个`abc`账户，但是这账户信息并不存在。所以给出报错信息。

    ```shell
    ➜  bc-cli git:(main) ✗ ./bc-cli get account                  
    ACCOUNT
    0x7f0c733bcdb6721ed266a952ec697d9bea8022ad
    0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8
    ➜  bc-cli git:(main) ✗ ./bc-cli delete account 0x7f0c733bcdb6721ed266a952ec697d9bea8022ad 0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8 abc
    account "0x7f0c733bcdb6721ed266a952ec697d9bea8022ad" deleted
    account "0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8" deleted
    Error: account "abc" remove /home/digua/.bestchains/wallet/abc: no such file or directory
    ```

## 存证管理

### 创建存证

TODO

### 存证列表

通过`-h`查看命令定义

```
➜  bc-cli git:(main) ✗ ./bc-cli get depository -h
Get one or more depositories

Usage:
  bc-cli get depository [KID] [flags]

Flags:
  -c, --contentName string   search depository by content name
  -f, --from int             pagination
  -h, --help                 help for depository
      --host string          bc-saas server
  -k, --kid string           search depository by kid
  -n, --name string          search depository by name
  -s, --size int             pagination size (default 10)
```

1. 获取全部存证信息

    ```
    ➜  bc-cli git:(main) ✗ ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io
    INDEX    KID                                         PLATFORM      OPERATOR                                      OWNER                                         BLOCKNUMBER    TIME
    7        fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  73             2023-05-06T13:24:53
    6        18b682430b2ee5cdcb17c0ea678a52223056d256    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171    0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2    72             2023-05-06T11:28:12
    28       d2a61f5d32cb5c8e73e7b36b4011b63c9bc5af68    bestchains                                                                                                55             2023-04-27T10:34:33
    27       1da7b7b3ae76706bf16b7a094593650c93696b0f    bestchains                                                                                                54             2023-04-27T09:38:09
    5        93b81217a6c96da33729f54eadc57a7e3ae848e0    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  53             2023-04-26T19:07:40
    4        ac5eb9848caa1c8002b019493294f86c74e63bba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  52             2023-04-26T19:00:30
    3        60d7b8f15a48617fd9879815293db9cab1d5bdc6    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  51             2023-04-26T18:52:17
    2        e29afb7686ba0fa465295624f43b97df5505b665    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  50             2023-04-26T18:51:15
    1        a86d95ee04f272aa9bcb619196a6a59efd97a6b1    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  49             2023-04-26T18:51:12
    0        18d714ab63365b4c198479a6607ad652fd0c9d56    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  48             2023-04-26T18:51:09
    ```

2. 根据kid获取存证

    ```
    ➜  bc-cli git:(main) ✗ ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io -k=fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba
    INDEX    KID                                         PLATFORM      OPERATOR                                      OWNER    BLOCKNUMBER    TIME
    7        fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171             73             2023-05-06T13:24:53
    ```

3. 使用 `from`, `size` 控制返回数量以及偏移数据

    ```
    ➜  bc-cli git:(main) ✗ ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io -f=1 -s=3
    INDEX    KID                                         PLATFORM      OPERATOR                                      OWNER                                         BLOCKNUMBER    TIME
    6        18b682430b2ee5cdcb17c0ea678a52223056d256    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171    0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2    72             2023-05-06T11:28:12
    28       d2a61f5d32cb5c8e73e7b36b4011b63c9bc5af68    bestchains                                                                                                55             2023-04-27T10:34:33
    27       1da7b7b3ae76706bf16b7a094593650c93696b0f    bestchains                                                                                                54             2023-04-27T09:38:09
    ```
