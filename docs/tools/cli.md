---
sidebar_position: 1
title:  CLI
sidebar_label: CLI
---

`bc-cli` 可以用来管理账户信息，管理存证，以及查看汲取中构成区块链的多种资源，包括不限于联盟，网络等。
该工具包含 `create`, `delete`, `get` 三个主要命令, 用来操作 `account`, `depository` 等资源。

## 快速开始

### 设置配置文件

:::tip
CLI使用时可通过 `--config` 指定配置文件，默认位置为 `~/.bestchains/config.yaml`
:::tip

配置文件如下：

```yaml
auth:
    enable: true
    expiry: 1683440692
    idtoken: eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzYjA4NGIzZmJlZDJiODI2MDg0MDIyOTYwZjJmODhmY2E1NjBkODcifQ.eyJpc3MiOiJodHRwczovL3BvcnRhbC4xNzIuMjIuOTYuMjA5Lm5pcC5pby9vaWRjIiwic3ViIjoiQ2doaWFuZHpkMkZ1WnhJR2F6aHpZM0prIiwiYXVkIjoiYmMtY2xpIiwiZXhwIjoxNjgzNDQwNDc0LCJpYXQiOjE2ODMzNTQwNzQsImF0X2hhc2giOiJqbFFldnVMcGc1cWs1aGFuR2lBXzdRIiwiY19oYXNoIjoiZm1PQ04yb3FGVk96a0c2cU1nTGViQSIsImVtYWlsIjoiYWRtaW5AdGVueGNsb3VkLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsiaWFtLnRlbnhjbG91ZC5jb20iLCJvYnNldmFiaWxpdHkiLCJyZXNvdXJjZS1yZWFkZXIiLCJiZXN0Y2hhaW5zIl0sIm5hbWUiOiJiandzd2FuZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImJqd3N3YW5nIiwicGhvbmUiOiIiLCJ1c2VyaWQiOiJiandzd2FuZyJ9.eY-7kGcsMAJxmZaG2t_Q1ZtaK6PBuvtxodueppkFCpbJ2RDOxhP9zdmm1pE23eClu0oWxgELBsAkVfgVqrs2gSkTjvM1CWOd-p-cWX464hBYgYfnlrFo0bKV3D4v-kdHvrpS-sa02In0N0ZDpQzK2GcJWRzJkdsf3MPzOxoC-M3-B8TK3Egpl1JOIgAAvDaFx50OwGcBxXeHZewe-NXSUiOo7YowBRD7dPyF841Le2gN12O3lUpW3fQ4iEVRo7rL22J49r3t66B1S3qTVyPKWYwrs78kAJJ7a13LA_HkjMGZ6cc70Skr8C4h8wzeBx-TZvn658XUfpU04yfh86mqsA
    issuerurl: https://portal.172.22.96.209.nip.io/oidc
    refreshtoken: ChlkZnVyZXN4am5jMzY3aHd3YXY3aDNrZ3BnEhl0aXM0amI1c2c2ZnB1bm83a2g1Mnl1cmt4
    clientid: bc-cli
    clientsecret: bc-cli-cli
saas:
    depository:
        server: https://bc-saas.172.22.96.209.nip.io
cluster:
  server: https://172.22.96.146:9443
  certificateauthority: ""
  disablecompression: false
  insecureskiptlsverify: false
  locationoforigin: ""
  proxyurl: ""
```

配置详解:

- auth 为认证相关信息
   1. enable：是否启用认证，布尔值，在服务器端启用认证时，CLI 不启用认证，访问请求将会失败，而服务器端没有启用认证时，CLI 启用认证时，认证参数将被服务器端忽略。
   2. expiry：IDToken 的过期时间 unix 时间戳，一般不需要手动配置，认证完成后会自动更新。
   3. idtoken：认证的 IDToken ，一般不需要手动配置，认证完成后会自动更新。
   4. issuerurl：认证的 OIDC 服务器地址，也可通过 `--issuer-url` 参数配置。
   5. refreshtoken：认证的 RefreshToken，一般不需要手动配置，认证完成后会自动更新。
   6. clientid: (不需要更改)用于OIDC Server识别CLI身份，默认为`bc-cli`
   7. clientsecret: (不需要更改)用于OIDC Server识别CLI身份，默认为`bc-cli-cli`
- saas 为 saas 组件相关配置
   1. depository 为存证相关配置
      1. server 为存证服务器配置

:::tip
`auth`认证信息获取步骤如下:

1. 设置配置文件中 `auth.enable` 的值为 `true` 或者使用 `--enable-auth` 参数可以开启 OIDC 认证模式
2. 通过配置配置文件中 `auth.issuerurl` 的值或者使用 `--issuer-url` 参数来指定认证 OIDC 服务器的地址
3. 运行任何有效的`CLI`命令,触发获取认证信息处理。

处理流程如下:

1. 读取配置文件中的认证信息，验证认证信息是否有效。如果认证过期，将会首先尝试后台自动刷新IDToken认证信息
2. 如果后台刷新失效时将自动跳转到OIDC认证页面，认证成功后，自动更新配置文件，填充`auth`信息。如下图所示:

![认证展示](../img/bc-cli-auth.gif)

:::tips

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

通过`-h`查看命令定义

```
Usage:
  bc-cli create depository NAME [args] [flags]

Flags:
  -a, --account string       account to be used
      --contentID string     depot file ID
  -t, --contentType string   depot file type
  -h, --help                 help for depository
  -o, --host string          host URL
  -n, --name string          depot name
  -p, --platform string      depot source platform
      --untrusted            put untrusted value (default true)
  -w, --wallet string        wallet path
```

1. 创建未受信任存证（无需账号信息），返回存证 id：
`name`：存证名称；`contentID`：存证文件ID；`type`：存证文件类型；`platform`：存证来源平台

  ```
  ./bc-cli create depository -n dep1 --contentID 123456789 -t file -p bestchains --host https://bc-saas.172.22.96.209.nip.io
  {"kid":"2afbb84dc8d19cd8c10264a8b72e7975385d169b"}
  ```

2. 创建存证（需要账号信息），返回存证 id：
`name`：存证名称；`contentID`：存证文件ID；`type`：存证文件类型；`platform`：存证来源平台；`untrusted`：是否存储未受信任存证（此处为否）；`account`：账号区块链地址，格式为`0x0000000000000000000000000000000000000000`

  ```
  ./bc-cli create depository -n dep1 --contentID 1234567890 -t file -p bestchains --host https://bc-saas.172.22.96.209.nip.io --untrusted=false -a 0x6b72ee599c570831ceb41809cb49805eb58e6f59
  {"kid":"2636d287351f1f51f35e98602c055ede1fdeb966"}
  ```

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

## Bestchains 资源管理

### 获取组织列表

获取组织列表，支持获取一个，多个，以及全部的用户可见的组织。如果没有权限，会返回错误信息。  
支持 `kubectl get` 的展示性参数，例如 `-oyaml`, `-ojson`, `--showlabels` 等，以及通过 `labelselector` 和 `fieldselector` 选择资源。

1. 获取全部组织信息

    ```shell
    ➜  bc-cli git:(org) ✗ ./bc-cli get org
    NAME        AGE
    2345        20d
    dayu        24d
    tenxcloud   24d
    testorg1    24d
    testorg2    24d
    ```

2. 获取一个，多个组织信息

    ```shell
    ➜  bc-cli git:(org) ✗ ./bc-cli get org dayu
    NAME   AGE
    dayu   24d
    ➜  bc-cli git:(org) ✗ ./bc-cli get org dayu testorg2
    NAME       AGE
    dayu       24d
    testorg2   24d
    ```

3. 通过标签选择组织

    ```shell
    ➜  bc-cli git:(org) ✗ ./bc-cli get org -l=bestchains.organization.admin=marsdawe --show-labels
    NAME       AGE   LABELS
    testorg1   24d   bestchains.organization.admin=marsdawe
    testorg2   24d   bestchains.organization.admin=marsdawe
    ```

4. 以 yaml 方式展示内容

    ```shell
    ➜  bc-cli git:(org) ✗ ./bc-cli get org -l=bestchains.organization.admin=marsdawe -oyaml              
    apiVersion: v1
    items:
    - apiVersion: ibp.com/v1beta1
      kind: Organization
      metadata:
        creationTimestamp: "2023-04-17T09:04:39Z"
        generation: 1
        labels:
          bestchains.organization.admin: marsdawe
        name: testorg1
        resourceVersion: "574846745"
        uid: 68877e3a-0411-40fb-a0cf-11a6fe9fcf8c
      # ...
    - apiVersion: ibp.com/v1beta1
      kind: Organization
      metadata:
        creationTimestamp: "2023-04-17T09:26:25Z"
        generation: 1
        labels:
          bestchains.organization.admin: marsdawe
        name: testorg2
        resourceVersion: "568602322"
        uid: 4740807c-9575-478d-8578-f8fe394dd704
      # ...
    kind: List
    metadata: {}
    ```
  