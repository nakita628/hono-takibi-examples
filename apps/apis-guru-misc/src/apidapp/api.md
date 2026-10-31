<h1 id="apidapp">ApiDapp v2019-02-14T16:47:01Z</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://ethereum.apidapp.com/1">https://ethereum.apidapp.com/1</a>

# Authentication

* API Key (Key2)
    - Parameter Name: **X-Api-Key**, in: header.

<h1 id="apidapp-default">Default</h1>

## options/

> Code samples

```bash
curl https://example.com/ \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /`

> Example responses

> 200 Response

```json
{}
```

<h3 id="options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post/account

> Code samples

```bash
curl https://example.com/account \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /account`

Create new account

> Example responses

> 200 Response

```json
{}
```

<h3 id="postaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/account

> Code samples

```bash
curl https://example.com/account \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /account`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/account/{id}

> Code samples

```bash
curl https://example.com/account/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /account/{id}`

Get account balance

<h3 id="getaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/account/{id}

> Code samples

```bash
curl https://example.com/account/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /account/{id}`

<h3 id="optionsaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/block

> Code samples

```bash
curl https://example.com/block \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /block`

Access detailed block information

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/block

> Code samples

```bash
curl https://example.com/block \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /block`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/block/{id}

> Code samples

```bash
curl https://example.com/block/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /block/{id}`

Get information about particular block

<h3 id="getblockid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblockid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/block/{id}

> Code samples

```bash
curl https://example.com/block/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /block/{id}`

<h3 id="optionsblockid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblockid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/block/{id}/transaction

> Code samples

```bash
curl https://example.com/block/string/transaction \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /block/{id}/transaction`

Get transaction count within block

<h3 id="getblockidtransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblockidtransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/block/{id}/transaction

> Code samples

```bash
curl https://example.com/block/string/transaction \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /block/{id}/transaction`

<h3 id="optionsblockidtransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblockidtransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/block/{id}/transaction/{index}

> Code samples

```bash
curl https://example.com/block/string/transaction/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /block/{id}/transaction/{index}`

Get information about particular transaction within block

<h3 id="getblockidtransactionindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblockidtransactionindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/block/{id}/transaction/{index}

> Code samples

```bash
curl https://example.com/block/string/transaction/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /block/{id}/transaction/{index}`

<h3 id="optionsblockidtransactionindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|
|index|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblockidtransactionindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/blockchain

> Code samples

```bash
curl https://example.com/blockchain \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /blockchain`

Get a list of supported blockchains

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblockchain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/blockchain

> Code samples

```bash
curl https://example.com/blockchain \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /blockchain`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblockchain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/blockchain/{id}

> Code samples

```bash
curl https://example.com/blockchain/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /blockchain/{id}`

Get information about blockchain woth given id

<h3 id="getblockchainid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getblockchainid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/blockchain/{id}

> Code samples

```bash
curl https://example.com/blockchain/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /blockchain/{id}`

<h3 id="optionsblockchainid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsblockchainid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post/contract

> Code samples

```bash
curl https://example.com/contract \
  -X POST \
  -H 'Accept: application/json'
```

`POST /contract`

Create a new smart contract

> Example responses

> 200 Response

```json
{}
```

<h3 id="postcontract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/contract

> Code samples

```bash
curl https://example.com/contract \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /contract`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionscontract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/contract/{id}

> Code samples

```bash
curl https://example.com/contract/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /contract/{id}`

Get contract balance

<h3 id="getcontractid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getcontractid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## post/contract/{id}

> Code samples

```bash
curl https://example.com/contract/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /contract/{id}`

Call the contract

<h3 id="postcontractid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postcontractid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/contract/{id}

> Code samples

```bash
curl https://example.com/contract/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /contract/{id}`

<h3 id="optionscontractid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionscontractid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/echo

> Code samples

```bash
curl https://example.com/echo \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /echo`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsecho-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/erc20

> Code samples

```bash
curl https://example.com/erc20 \
  -H 'Accept: application/json'
```

`GET /erc20`

Get token information such as name, total amount in circulation, etc

> Example responses

> 200 Response

```json
{}
```

<h3 id="geterc20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/erc20

> Code samples

```bash
curl https://example.com/erc20 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /erc20`

> Example responses

> 200 Response

```json
{}
```

<h3 id="posterc20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/erc20

> Code samples

```bash
curl https://example.com/erc20 \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /erc20`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionserc20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/erc20/{address}

> Code samples

```bash
curl https://example.com/erc20/string \
  -H 'Accept: application/json'
```

`GET /erc20/{address}`

Get information amout token balance in the account

<h3 id="geterc20address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="geterc20address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/erc20/{address}

> Code samples

```bash
curl https://example.com/erc20/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /erc20/{address}`

Transfer tokens to another account

<h3 id="posterc20address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="posterc20address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/erc20/{address}

> Code samples

```bash
curl https://example.com/erc20/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /erc20/{address}`

<h3 id="optionserc20address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionserc20address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/key

> Code samples

```bash
curl https://example.com/key \
  -H 'Accept: application/json'
```

`GET /key`

<h3 id="getkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/key

> Code samples

```bash
curl https://example.com/key \
  -X POST \
  -H 'Accept: application/json'
```

`POST /key`

> Example responses

> 200 Response

```json
{}
```

<h3 id="postkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/key

> Code samples

```bash
curl https://example.com/key \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /key`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## delete/key/{key}

> Code samples

```bash
curl https://example.com/key/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /key/{key}`

<h3 id="deletekeykey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="deletekeykey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/key/{key}

> Code samples

```bash
curl https://example.com/key/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /key/{key}`

<h3 id="optionskeykey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionskeykey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post/transaction

> Code samples

```bash
curl https://example.com/transaction \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /transaction`

Create a new transaction. Transfer Ether between accounts

> Example responses

> 200 Response

```json
{}
```

<h3 id="posttransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/transaction

> Code samples

```bash
curl https://example.com/transaction \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /transaction`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/transaction/{hash}

> Code samples

```bash
curl https://example.com/transaction/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /transaction/{hash}`

Get information about transaction by the transaction hash value

<h3 id="gettransactionhash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gettransactionhash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/transaction/{hash}

> Code samples

```bash
curl https://example.com/transaction/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /transaction/{hash}`

<h3 id="optionstransactionhash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransactionhash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/transaction/{hash}/receipt

> Code samples

```bash
curl https://example.com/transaction/string/receipt \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /transaction/{hash}/receipt`

Get receipt detail information

<h3 id="gettransactionhashreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gettransactionhashreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Key2
</aside>

## options/transaction/{hash}/receipt

> Code samples

```bash
curl https://example.com/transaction/string/receipt \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /transaction/{hash}/receipt`

<h3 id="optionstransactionhashreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionstransactionhashreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/version

> Code samples

```bash
curl https://example.com/version \
  -H 'Accept: application/json'
```

`GET /version`

Get API version info

> Example responses

> 200 Response

```json
{}
```

<h3 id="getversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options/version

> Code samples

```bash
curl https://example.com/version \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /version`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionsversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/wallet

> Code samples

```bash
curl https://example.com/wallet \
  -H 'Accept: application/json'
```

`GET /wallet`

Get current account balance

> Example responses

> 200 Response

```json
{}
```

<h3 id="getwallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/wallet

> Code samples

```bash
curl https://example.com/wallet \
  -X POST \
  -H 'Accept: application/json'
```

`POST /wallet`

Create personal wallet

> Example responses

> 200 Response

```json
{}
```

<h3 id="postwallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/wallet

> Code samples

```bash
curl https://example.com/wallet \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /wallet`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionswallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/wallet/account

> Code samples

```bash
curl https://example.com/wallet/account \
  -H 'Accept: application/json'
```

`GET /wallet/account`

> Example responses

> 200 Response

```json
{}
```

<h3 id="getwalletaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/wallet/account

> Code samples

```bash
curl https://example.com/wallet/account \
  -X POST \
  -H 'Accept: application/json'
```

`POST /wallet/account`

> Example responses

> 200 Response

```json
{}
```

<h3 id="postwalletaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/wallet/account

> Code samples

```bash
curl https://example.com/wallet/account \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /wallet/account`

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionswalletaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get/wallet/account/{id}

> Code samples

```bash
curl https://example.com/wallet/account/string \
  -H 'Accept: application/json'
```

`GET /wallet/account/{id}`

Get account balance

<h3 id="getwalletaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getwalletaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/wallet/account/{id}

> Code samples

```bash
curl https://example.com/wallet/account/string \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /wallet/account/{id}`

<h3 id="optionswalletaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionswalletaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post/wallet/account/{id}/contract

> Code samples

```bash
curl https://example.com/wallet/account/string/contract \
  -X POST \
  -H 'Accept: application/json'
```

`POST /wallet/account/{id}/contract`

<h3 id="postwalletaccountidcontract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postwalletaccountidcontract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/wallet/account/{id}/erc20

> Code samples

```bash
curl https://example.com/wallet/account/string/erc20 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /wallet/account/{id}/erc20`

<h3 id="postwalletaccountiderc20-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postwalletaccountiderc20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## post/wallet/account/{id}/pay

> Code samples

```bash
curl https://example.com/wallet/account/string/pay \
  -X POST \
  -H 'Accept: application/json'
```

`POST /wallet/account/{id}/pay`

Send payment from the account held within the wallet

<h3 id="postwalletaccountidpay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postwalletaccountidpay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## options/wallet/account/{id}/pay

> Code samples

```bash
curl https://example.com/wallet/account/string/pay \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /wallet/account/{id}/pay`

<h3 id="optionswalletaccountidpay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="optionswalletaccountidpay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Headers|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Origin|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```
