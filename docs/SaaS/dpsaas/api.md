---
sidebar_position: 4
title:  API 文档
sidebar_label: API 文档
---

## 前置条件

如果 SAAS 服务使用 OIDC 认证，则需要增加请求头:

```
Authorization: Bearer <oidc-token>
```

## 获取合约的元数据

`API`: GET /hf/metadata

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/hf/metadata
```

`返回`:

```json
{"content":"eyJpbmZvIjp7InRpdGxlIjoidW5kZWZpbmVkIiwidmVyc2lvbiI6ImxhdGVzdCJ9LCJjb250cmFjdHMiOnsib3JnLmJlc3RjaGFpbnMuY29tLkRlcG9zaXRvcnlDb250cmFjdCI6eyJpbmZvIjp7InRpdGxlIjoib3JnLmJlc3RjaGFpbnMuY29tLkRlcG9zaXRvcnlDb250cmFjdCIsInZlcnNpb24iOiJsYXRlc3QifSwibmFtZSI6Im9yZy5iZXN0Y2hhaW5zLmNvbS5EZXBvc2l0b3J5Q29udHJhY3QiLCJ0cmFuc2FjdGlvbnMiOlt7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6InN0cmluZyJ9fX1dLCJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJCYXRjaFB1dFVudHJ1c3RWYWx1ZSIsInJldHVybnMiOnsidHlwZSI6InN0cmluZyJ9fSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fSx7Im5hbWUiOiJwYXJhbTEiLCJzY2hlbWEiOnsidHlwZSI6Im51bWJlciIsImZvcm1hdCI6ImRvdWJsZSIsIm1heGltdW0iOjE4NDQ2NzQ0MDczNzA5NTUyMDAwLCJtaW5pbXVtIjowLCJtdWx0aXBsZU9mIjoxfX1dLCJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJDaGVjayJ9LHsicGFyYW1ldGVycyI6W3sibmFtZSI6InBhcmFtMCIsInNjaGVtYSI6eyJ0eXBlIjoic3RyaW5nIn19XSwidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiQ3VycmVudCIsInJldHVybnMiOnsidHlwZSI6Im51bWJlciIsImZvcm1hdCI6ImRvdWJsZSIsIm1heGltdW0iOjE4NDQ2NzQ0MDczNzA5NTUyMDAwLCJtaW5pbXVtIjowLCJtdWx0aXBsZU9mIjoxfX0seyJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJEaXNhYmxlQUNMIn0seyJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJFbmFibGVBQ0wifSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IkdldFJvbGVBZG1pbiIsInJldHVybnMiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IkdldFZhbHVlQnlJbmRleCIsInJldHVybnMiOnsidHlwZSI6InN0cmluZyJ9fSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IkdldFZhbHVlQnlLSUQiLCJyZXR1cm5zIjp7InR5cGUiOiJzdHJpbmcifX0seyJwYXJhbWV0ZXJzIjpbeyJuYW1lIjoicGFyYW0wIiwic2NoZW1hIjp7InR5cGUiOiJhcnJheSIsIml0ZW1zIjp7InR5cGUiOiJpbnRlZ2VyIiwiZm9ybWF0IjoiaW50MzIiLCJtYXhpbXVtIjoyNTUsIm1pbmltdW0iOjB9fX0seyJuYW1lIjoicGFyYW0xIiwic2NoZW1hIjp7InR5cGUiOiJzdHJpbmcifX1dLCJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJHcmFudFJvbGUifSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fSx7Im5hbWUiOiJwYXJhbTEiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6Ikhhc1JvbGUiLCJyZXR1cm5zIjp7InR5cGUiOiJib29sZWFuIn19LHsicGFyYW1ldGVycyI6W3sibmFtZSI6InBhcmFtMCIsInNjaGVtYSI6eyJ0eXBlIjoic3RyaW5nIn19XSwidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiSW5jcmVtZW50IiwicmV0dXJucyI6eyJ0eXBlIjoibnVtYmVyIiwiZm9ybWF0IjoiZG91YmxlIiwibWF4aW11bSI6MTg0NDY3NDQwNzM3MDk1NTIwMDAsIm1pbmltdW0iOjAsIm11bHRpcGxlT2YiOjF9fSx7InRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IkluaXRpYWxpemUifSx7InRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6Ik93bmVyIiwicmV0dXJucyI6eyJ0eXBlIjoic3RyaW5nIn19LHsicGFyYW1ldGVycyI6W3sibmFtZSI6InBhcmFtMCIsInNjaGVtYSI6eyJ0eXBlIjoic3RyaW5nIn19XSwidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiUHV0VW50cnVzdFZhbHVlIiwicmV0dXJucyI6eyJ0eXBlIjoic3RyaW5nIn19LHsicGFyYW1ldGVycyI6W3sibmFtZSI6InBhcmFtMCIsInNjaGVtYSI6eyIkcmVmIjoiIy9jb21wb25lbnRzL3NjaGVtYXMvTWVzc2FnZSJ9fSx7Im5hbWUiOiJwYXJhbTEiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IlB1dFZhbHVlIiwicmV0dXJucyI6eyJ0eXBlIjoic3RyaW5nIn19LHsidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiUmVub3VuY2VPd25lcnNoaXAifSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsiJHJlZiI6IiMvY29tcG9uZW50cy9zY2hlbWFzL01lc3NhZ2UifX0seyJuYW1lIjoicGFyYW0xIiwic2NoZW1hIjp7InR5cGUiOiJhcnJheSIsIml0ZW1zIjp7InR5cGUiOiJpbnRlZ2VyIiwiZm9ybWF0IjoiaW50MzIiLCJtYXhpbXVtIjoyNTUsIm1pbmltdW0iOjB9fX0seyJuYW1lIjoicGFyYW0yIiwic2NoZW1hIjp7InR5cGUiOiJzdHJpbmcifX1dLCJ0YWciOlsic3VibWl0IiwiU1VCTUlUIl0sIm5hbWUiOiJSZW5vdW5jZVJvbGUifSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fSx7Im5hbWUiOiJwYXJhbTEiLCJzY2hlbWEiOnsidHlwZSI6InN0cmluZyJ9fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IlJldm9rZVJvbGUifSx7InBhcmFtZXRlcnMiOlt7Im5hbWUiOiJwYXJhbTAiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fSx7Im5hbWUiOiJwYXJhbTEiLCJzY2hlbWEiOnsidHlwZSI6ImFycmF5IiwiaXRlbXMiOnsidHlwZSI6ImludGVnZXIiLCJmb3JtYXQiOiJpbnQzMiIsIm1heGltdW0iOjI1NSwibWluaW11bSI6MH19fV0sInRhZyI6WyJzdWJtaXQiLCJTVUJNSVQiXSwibmFtZSI6IlNldFJvbGVBZG1pbiJ9LHsidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiVG90YWwiLCJyZXR1cm5zIjp7InR5cGUiOiJudW1iZXIiLCJmb3JtYXQiOiJkb3VibGUiLCJtYXhpbXVtIjoxODQ0Njc0NDA3MzcwOTU1MjAwMCwibWluaW11bSI6MCwibXVsdGlwbGVPZiI6MX19LHsicGFyYW1ldGVycyI6W3sibmFtZSI6InBhcmFtMCIsInNjaGVtYSI6eyJ0eXBlIjoic3RyaW5nIn19XSwidGFnIjpbInN1Ym1pdCIsIlNVQk1JVCJdLCJuYW1lIjoiVHJhbnNmZXJPd25lcnNoaXAifV0sImRlZmF1bHQiOnRydWV9LCJvcmcuaHlwZXJsZWRnZXIuZmFicmljIjp7ImluZm8iOnsidGl0bGUiOiJvcmcuaHlwZXJsZWRnZXIuZmFicmljIiwidmVyc2lvbiI6ImxhdGVzdCJ9LCJuYW1lIjoib3JnLmh5cGVybGVkZ2VyLmZhYnJpYyIsInRyYW5zYWN0aW9ucyI6W3sidGFnIjpbImV2YWx1YXRlIiwiRVZBTFVBVEUiXSwibmFtZSI6IkdldE1ldGFkYXRhIiwicmV0dXJucyI6eyJ0eXBlIjoic3RyaW5nIn19XSwiZGVmYXVsdCI6ZmFsc2V9fSwiY29tcG9uZW50cyI6eyJzY2hlbWFzIjp7Ik1lc3NhZ2UiOnsiJGlkIjoiTWVzc2FnZSIsInByb3BlcnRpZXMiOnsibm9uY2UiOnsidHlwZSI6Im51bWJlciIsImZvcm1hdCI6ImRvdWJsZSIsIm1heGltdW0iOjE4NDQ2NzQ0MDczNzA5NTUyMDAwLCJtaW5pbXVtIjowLCJtdWx0aXBsZU9mIjoxfSwicHVibGljS2V5Ijp7InR5cGUiOiJzdHJpbmcifSwic2lnbmF0dXJlIjp7InR5cGUiOiJzdHJpbmcifX0sInJlcXVpcmVkIjpbIm5vbmNlIiwicHVibGljS2V5Iiwic2lnbmF0dXJlIl0sImFkZGl0aW9uYWxQcm9wZXJ0aWVzIjpmYWxzZX19fX0="}
```

## 获取用户的 Nonce

`API`： GET /basic/currentNonce

`query参数`:  

| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| account | 账户地址 | 是 |  |

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/basic/currentNonce?account=0x02624bfc011381aa1f4e19db60e3f46673f1f171
```

`返回`：

```json
{"nonce":0}
```

## 获取存证总数

`API`: GET /basic/total

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/basic/total
```

`返回`:

```json
{"total":6}
```

## 获取具体存证的内容

`API`: GET /basic/getValue

`query参数`:

| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| index | 索引 | 二选一 |  |
| kid | kid | 二选一 | |

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/basic/getValue?index=1
```

`返回`:

```json
{"index":"1","value":"eyJuYW1lIjoiYWJjIiwiY29udGVudFR5cGUiOiAianNvbiIsImNvbnRlbnRJRCI6ICJpZCIsInRydXN0ZWRUaW1lc3RhbXAiOiAiMTIzNCIsInBsYXRmb3JtIjogImJlc3RjaGFpbnMifQo="}
```

## 新增存证

`API`: POST /basic/putValue

`body参数`:

| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| message | base64编码过的信息，包含nonce，signature，publicKey | 是 |  |
| value | base64编码过的信息，里面包含基本的json字符串 | 是 | |

`测试`:

```
curl -k -XPOST -H'Content-Type: application/json' https://bc-saas.172.22.96.209.nip.io/basic/putValue -d '{"message":"eyJub25jZSI6MCwicHVibGljS2V5IjoiTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFN2p0MURWeG5OUWtBTVBrR3JlTDU3UHRHVVQySDVNS1FjMGkvRHdLamlBbyt0eXAxTW9ZZUZtU3FyenJJckxNY25hNXd5b0l4V3hPbXJhcU01cHFEbVE9PSIsInNpZ25hdHVyZSI6Ik1FWUNJUUNpUlowd3ZYODFwaFYvOVVMQUh0c2d0WkFMSWNOS1l2MUdLZm1OVlJGNEZBSWhBTWorc0NZb2p1WkpBcTVVeWl4eHNqS0owZ2hQU0xRYnZiZUQ1UHBrZVJOciJ9","value":"eyJuYW1lIjoiYWJjIiwiY29udGVudFR5cGUiOiAianNvbiIsImNvbnRlbnRJRCI6ICJpZCIsInRydXN0ZWRUaW1lc3RhbXAiOiAiMTIzNCIsInBsYXRmb3JtIjogImJlc3RjaGFpbnMifQo="}'
```

关于测试数据的生成

```go
// arg.json: {"name":"abc","contentType": "json","contentID": "id","trustedTimestamp": "1234","platform": "bestchains"}
package main

import (
    "crypto/ecdsa"
    "crypto/elliptic"
    "crypto/rand"
    "encoding/base64"
    "encoding/json"
    "fmt"
    "log"
    "os"

    "github.com/bestchains/bestchains-contracts/library/context"
)

func main() {
    arg, _ := os.ReadFile("./arg.json")
    value := base64.StdEncoding.EncodeToString(arg)

    priKey, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
    if err != nil {
        log.Fatal(err)
    }

    msg := &context.Message{
        Nonce: 0,
    }
    if err := msg.GenerateSignature(priKey, value); err != nil {
        log.Fatal(err)
    }

    if _, err := msg.VerifyAgainstArgs(value); err != nil {
        log.Fatal(err)
    }

    msgBytes, _ := json.Marshal(msg)
    msgValue := base64.StdEncoding.EncodeToString(msgBytes)
    fmt.Printf("value: '%s'\n", value)
    fmt.Printf("message: '%s'\n", msgValue)
}
```

`返回`:

```json
{"kid":"18b682430b2ee5cdcb17c0ea678a52223056d256"}
```

## 新增存增(不需要二次身份验证)

`API`: POST /basic/putUntrustValue

`body参数`:
| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| value | base64编码过的信息，里面包含基本的json字符串 | 是 | |

`测试`:

```
curl -k -XPOST -H'Content-Type: application/json' https://bc-saas.172.22.96.209.nip.io/basic/putUntrustValue -d '{"value":"eyJuYW1lIjoiYWJjIiwiY29udGVudFR5cGUiOiAianNvbiIsImNvbnRlbnRJRCI6ICJpZCIsInRydXN0ZWRUaW1lc3RhbXAiOiAiMTIzNCIsInBsYXRmb3JtIjogImJlc3RjaGFpbnMifQo="}'
```

`返回`:

```json
{"kid":"fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba"}
```

## 验证存证

`API`: POST /basic/verifyValue

`body参数`:

| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| index | 索引 | 与 kid 二选一 |  |
| kid | kid | 与 index 二选一  | |
| value | base64 编码过的内容 | 是  |

`测试`:

```
curl -k -XPOST -H'Content-Type: application/json' https://bc-saas.172.22.96.209.nip.io/basic/verifyValue -d '{"kid":"18b682430b2ee5cdcb17c0ea678a52223056d256","value":"eyJuYW1lIjoiYWJjIiwiY29udGVudFR5cGUiOiAianNvbiIsImNvbnRlbnRJRCI6ICJpZCIsInRydXN0ZWRUaW1lc3RhbXAiOiAiMTIzNCIsInBsYXRmb3JtIjogImJlc3RjaGFpbnMifQo="}'
```

`返回`:
```json
{"status":true,"reason":"value match"}
```

## 获取存证列表

`API`: GET /basic/depositories

`query参数`:

| 参数名称 | 参数描述 | 必填 | 默认值 |
| :--: | :--: | :--: | :--: |
| from | 数据库中的偏移，利用from作分页，from=0, from=10, from=20 ...| 否 | 0 |
| size | 分页每一页的条目数量 | 否  | 10 |
| startTime | 开始时间, 单位是秒 | 否 | |
| endTime | 结束时间，单位秒 | 否 | |
| name | 存证名称 | 否 | | 
| contentName | 文件名称或者其他的描述信息 | 否 | |
| kid | 存证 kid | 否 | |

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/basic/depositories?from=0&size=1
```

`返回`:

```json
{"count":9,"data":[{"index":"6","kid":"18b682430b2ee5cdcb17c0ea678a52223056d256","platform":"bestchains","operator":"0x02624bfc011381aa1f4e19db60e3f46673f1f171","owner":"0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2","blockNumber":72,"name":"abc","contentName":"","contentID":"id","contentType":"id","trustedTimestamp":"1683343692"}]}
```

## 根据存证 kid 获取单个存证信息

`API`: GET /basic/depositories/:kid

`测试`:

```
curl -k https://bc-saas.172.22.96.209.nip.io/basic/depositories/18b682430b2ee5cdcb17c0ea678a52223056d256
```

`返回`:

```json
{"index":"6","kid":"18b682430b2ee5cdcb17c0ea678a52223056d256","platform":"bestchains","operator":"0x02624bfc011381aa1f4e19db60e3f46673f1f171","owner":"0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2","blockNumber":72,"name":"abc","contentName":"","contentID":"id","contentType":"id","trustedTimestamp":"1683343692"}
```