<h1 id="chaingatewayio">Chaingateway.io v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Chaingateway.io

REST API to build the bridge between Ethereum and the real world

Please check out our [website](https://chaingateway.io?utm_source=postman) for detailed information about this API.

To use our API, you need an API Key (Described as Authorization header in the examples below).
To get one, please create an account on our [website](https://chaingateway.io/register?utm_source=postman).

For our internal documentation, please check out our [Docs Site](https://chaingateway.io/docs?utm_source=postman).

If you need help with integrating our API in your application, you can reach us via [email](mailto:support@chaingateway.io) or join our official [Telegram](https://t.me/chaingateway) group.

Base URLs:

* <a href="https://eu.eth.chaingateway.io/v1">https://eu.eth.chaingateway.io/v1</a>

<h1 id="chaingatewayio-info-requests">Info Requests</h1>

Requests that return information on balances, transactions, gas price, exchange rates, ...

## getBlock

<a id="opIdgetBlock"></a>

> Code samples

```bash
curl https://example.com/getBlock \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "block": "5000000"
  }'
```

`POST /getBlock`

Returns information of an ethereum block with or without transactions

> Body parameter

```json
{
  "block": "5000000"
}
```

<h3 id="getblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getBlockRequest](#schemagetblockrequest)|true|none|
|» block|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "block_number": "5000000",
  "difficulty": "2546613975853490",
  "gas_limit": "8000029",
  "gas_used": "7994053",
  "hash": "0x7d5a4369273c723454ac137f48a4f142b097aa2779464e6505f1b1c5e37b5382",
  "miner": "0xb2930B35844a230f00E51431aCAe96Fe543a0347",
  "ok": true,
  "parent_hash": "0xcae4df80f5862e4321690857eded0d8a40136dafb8155453920bade5bd0c46c0",
  "size_in_bytes": "24017",
  "time_stamp": "2018-01-30 14:41:33",
  "transactions_count": "109"
}
```

<h3 id="getblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getBlock](#schemagetblock)|

<aside class="success">
This operation does not require authentication
</aside>

## getEthereumBalance

<a id="opIdgetEthereumBalance"></a>

> Code samples

```bash
curl https://example.com/getEthereumBalance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
  }'
```

`POST /getEthereumBalance`

Returns the ethereum balance of a given address.

> Body parameter

```json
{
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
}
```

<h3 id="getethereumbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getEthereumBalanceRequest](#schemagetethereumbalancerequest)|true|none|
|» ethereumaddress|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "balance": 0.009956019840987648,
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
  "ok": true
}
```

<h3 id="getethereumbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getEthereumBalance](#schemagetethereumbalance)|

<aside class="success">
This operation does not require authentication
</aside>

## getExchangeRate

<a id="opIdgetExchangeRate"></a>

> Code samples

```bash
curl https://example.com/getExchangeRate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "currency": "eur"
  }'
```

`POST /getExchangeRate`

Returns the current Ethereum price in Euro or US Dollar.

> Body parameter

```json
{
  "currency": "eur"
}
```

<h3 id="getexchangerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getExchangeRateRequest](#schemagetexchangeraterequest)|true|none|
|» currency|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "currency": "eur",
  "ok": true,
  "rate": 321.2
}
```

<h3 id="getexchangerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getExchangeRate](#schemagetexchangerate)|

<aside class="success">
This operation does not require authentication
</aside>

## getGasPrice

<a id="opIdgetGasPrice"></a>

> Code samples

```bash
curl https://example.com/getGasPrice \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getGasPrice`

Returns the current gas price in GWEI.

<h3 id="getgasprice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Authorization|header|string|true|API Key|

> Example responses

> 200 Response

```json
{
  "gasprice": 70,
  "ok": true
}
```

<h3 id="getgasprice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getGasPrice](#schemagetgasprice)|

<aside class="success">
This operation does not require authentication
</aside>

## getLastBlockNumber

<a id="opIdgetLastBlockNumber"></a>

> Code samples

```bash
curl https://example.com/getLastBlockNumber \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getLastBlockNumber`

Returns the block number of the last mined ethereum block.

<h3 id="getlastblocknumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Authorization|header|string|true|API Key|

> Example responses

> 200 Response

```json
{
  "blocknumber": 10892021,
  "ok": true
}
```

<h3 id="getlastblocknumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getLastBlockNumber](#schemagetlastblocknumber)|

<aside class="success">
This operation does not require authentication
</aside>

## getToken

<a id="opIdgetToken"></a>

> Code samples

```bash
curl https://example.com/getToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915"
  }'
```

`POST /getToken`

Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.

> Body parameter

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915"
}
```

<h3 id="gettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getTokenRequest](#schemagettokenrequest)|true|none|
|» contractaddress|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "decimals": 2,
  "name": "Bitfranken",
  "ok": true,
  "supply": 76507131570,
  "symbol": "BIFRA"
}
```

<h3 id="gettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getToken](#schemagettoken)|

<aside class="success">
This operation does not require authentication
</aside>

## getTokenBalance

<a id="opIdgetTokenBalance"></a>

> Code samples

```bash
curl https://example.com/getTokenBalance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
    "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
  }'
```

`POST /getTokenBalance`

Returns the token balance of a given address.

> Body parameter

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
}
```

<h3 id="gettokenbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getTokenBalanceRequest](#schemagettokenbalancerequest)|true|none|
|» contractaddress|body|string|true|none|
|» ethereumaddress|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "balance": 9980,
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
  "ok": true
}
```

<h3 id="gettokenbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getTokenBalance](#schemagettokenbalance)|

<aside class="success">
This operation does not require authentication
</aside>

## getTransactions

<a id="opIdgetTransactions"></a>

> Code samples

```bash
curl https://example.com/getTransactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b"
  }'
```

`POST /getTransactions`

Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.

> Body parameter

```json
{
  "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b"
}
```

<h3 id="gettransactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[getTransactionsRequest](#schemagettransactionsrequest)|true|none|
|» txid|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "transactions": [
    {
      "amount": "10",
      "block_number": "6432816",
      "contract_address": "0x9E2B71e87d9304c4773674584EB9D0c838643568",
      "from": "0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0",
      "gas": "90000",
      "gas_price": "9",
      "to": "0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861",
      "token_decimals": "18",
      "token_name": "Shopiblock",
      "token_supply": "1000000000",
      "token_symbol": "SHB",
      "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b",
      "type": "ERC20"
    }
  ]
}
```

<h3 id="gettransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[getTransactions](#schemagettransactions)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chaingatewayio-address-requests">Address Requests</h1>

Requests to create, list and delete addresses

## deleteAddress

<a id="opIddeleteAddress"></a>

> Code samples

```bash
curl https://example.com/deleteAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ethereumaddress": "0x71892689ed0d79d88ab6ea3783b571b8ece9bee3",
    "password": "padN39QkRA2hJ"
  }'
```

`POST /deleteAddress`

Deletes an existing ethereum address. Be careful when using this function.

> Body parameter

```json
{
  "ethereumaddress": "0x71892689ed0d79d88ab6ea3783b571b8ece9bee3",
  "password": "padN39QkRA2hJ"
}
```

<h3 id="deleteaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[deleteAddressRequest](#schemadeleteaddressrequest)|true|none|
|» ethereumaddress|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": true,
  "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

<h3 id="deleteaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[deleteAddress](#schemadeleteaddress)|

<aside class="success">
This operation does not require authentication
</aside>

## exportAddress

<a id="opIdexportAddress"></a>

> Code samples

```bash
curl https://example.com/exportAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ethaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
    "password": "padN39QkRA2hJ"
  }'
```

`POST /exportAddress`

Returns all ethereum addresses created with an account.

> Body parameter

```json
{
  "ethaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "password": "padN39QkRA2hJ"
}
```

<h3 id="exportaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[exportAddressRequest](#schemaexportaddressrequest)|true|none|
|» ethaddress|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "content": "{'version':3,'id':'85b790ff-408e-42b8-b123-bec9523964dc','address':'71892889ed4d79d88ab6ea3783b571b8ece9bef4','crypto':{'ciphertext':'9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f','cipherparams':{'iv':'76e6f2497b9f2a8e024fc752a5418a6d'},'cipher':'aes-128-ctr','kdf':'scrypt','kdfparams':{'dklen':32,'salt':'d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4','n':131072,'r':8,'p':1},'mac':'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9'}}",
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

<h3 id="exportaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[exportAddress](#schemaexportaddress)|

<aside class="success">
This operation does not require authentication
</aside>

## importAddress

<a id="opIdimportAddress"></a>

> Code samples

```bash
curl https://example.com/importAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": {
      "address": "71892889ed4d79d88ab6ea3783b571b8ece9bef4",
      "crypto": {
        "cipher": "aes-128-ctr",
        "cipherparams": {
          "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
        },
        "ciphertext": "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "n": 131072,
          "p": 1,
          "r": 8,
          "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
        },
        "mac": "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"
      },
      "id": "85b790ff-408e-42b8-b123-bec9523964dc",
      "version": 3
    },
    "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
    "password": "padN39QkRA2hJ"
  }'
```

`POST /importAddress`

Returns all ethereum addresses created with an account.

> Body parameter

```json
{
  "content": {
    "address": "71892889ed4d79d88ab6ea3783b571b8ece9bef4",
    "crypto": {
      "cipher": "aes-128-ctr",
      "cipherparams": {
        "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
      },
      "ciphertext": "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f",
      "kdf": "scrypt",
      "kdfparams": {
        "dklen": 32,
        "n": 131072,
        "p": 1,
        "r": 8,
        "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
      },
      "mac": "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"
    },
    "id": "85b790ff-408e-42b8-b123-bec9523964dc",
    "version": 3
  },
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "password": "padN39QkRA2hJ"
}
```

<h3 id="importaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[importAddressRequest](#schemaimportaddressrequest)|true|none|
|» content|body|[Content](#schemacontent)|true|none|
|» filename|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "ethaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

<h3 id="importaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[importAddress](#schemaimportaddress)|

<aside class="success">
This operation does not require authentication
</aside>

## listAddresses

<a id="opIdlistAddresses"></a>

> Code samples

```bash
curl https://example.com/listAddresses \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listAddresses`

Returns all ethereum addresses created with an account.

<h3 id="listaddresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Authorization|header|string|true|API Key|

> Example responses

> 200 Response

```json
{
  "addresses": [
    {
      "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4"
    }
  ],
  "ok": true
}
```

<h3 id="listaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[listAddresses](#schemalistaddresses)|

<aside class="success">
This operation does not require authentication
</aside>

## newAddress

<a id="opIdnewAddress"></a>

> Code samples

```bash
curl https://example.com/newAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "padN39QkRA2hJ"
  }'
```

`POST /newAddress`

Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.

> Body parameter

```json
{
  "password": "padN39QkRA2hJ"
}
```

<h3 id="newaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[newAddressRequest](#schemanewaddressrequest)|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true,
  "password": "padN39QkRA2hJ"
}
```

<h3 id="newaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[newAddress](#schemanewaddress)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chaingatewayio-subscriptionipn-requests">Subscription/IPN Requests</h1>

Requests for creating, deleting and listing existing subscriptions

## listFailedIPNs

<a id="opIdlistFailedIPNs"></a>

> Code samples

```bash
curl https://example.com/listFailedIPNs \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listFailedIPNs`

Returns all subscriptions/IPNs created with an account.

<h3 id="listfailedipns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Authorization|header|string|true|API Key|

> Example responses

> 200 Response

```json
{
  "failed_ipns": [
    {
      "action": "deposit",
      "amount": "496588.7771277759",
      "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "id": "17766",
      "timestamp": "2020-09-19 14:33:01",
      "url": "https://yoururl.com/ipnreceiver.php"
    }
  ],
  "ok": true
}
```

<h3 id="listfailedipns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[listFailedIPNs](#schemalistfailedipns)|

<aside class="success">
This operation does not require authentication
</aside>

## listSubscribedAddresses

<a id="opIdlistSubscribedAddresses"></a>

> Code samples

```bash
curl https://example.com/listSubscribedAddresses \
  -X POST \
  -H 'Accept: application/json'
```

`POST /listSubscribedAddresses`

Returns all subscriptions/IPNs created with an account.

<h3 id="listsubscribedaddresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Authorization|header|string|true|API Key|

> Example responses

> 200 Response

```json
{
  "ipns": [
    {
      "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "url": "https://yoururl.com/ipnreceiver.php"
    }
  ],
  "ok": true
}
```

<h3 id="listsubscribedaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[listSubscribedAddresses](#schemalistsubscribedaddresses)|

<aside class="success">
This operation does not require authentication
</aside>

## resendFailedIPN

<a id="opIdresendFailedIPN"></a>

> Code samples

```bash
curl https://example.com/resendFailedIPN \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 17766
  }'
```

`POST /resendFailedIPN`

Returns all subscriptions/IPNs created with an account.

> Body parameter

```json
{
  "id": 17766
}
```

<h3 id="resendfailedipn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[resendFailedIPNRequest](#schemaresendfailedipnrequest)|true|none|
|» id|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 17766,
  "ok": true
}
```

<h3 id="resendfailedipn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[resendFailedIPN](#schemaresendfailedipn)|

<aside class="success">
This operation does not require authentication
</aside>

## subscribeAddress

<a id="opIdsubscribeAddress"></a>

> Code samples

```bash
curl https://example.com/subscribeAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
    "url": "https://yoururl.com/ipnreceiver.php"
  }'
```

`POST /subscribeAddress`

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


> Body parameter

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

<h3 id="subscribeaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[subscribeAddressRequest](#schemasubscribeaddressrequest)|true|none|
|» contractaddress|body|string|true|none|
|» ethereumaddress|body|string|true|none|
|» url|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "ok": true,
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

<h3 id="subscribeaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[subscribeAddress](#schemasubscribeaddress)|

<aside class="success">
This operation does not require authentication
</aside>

## unsubscribeAddress

<a id="opIdunsubscribeAddress"></a>

> Code samples

```bash
curl https://example.com/unsubscribeAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
    "url": "https://yoururl.com/ipnreceiver.php"
  }'
```

`POST /unsubscribeAddress`

Deletes an existing subscription/IPN for the given address (and contractaddress).

> Body parameter

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

<h3 id="unsubscribeaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[unsubscribeAddressRequest](#schemaunsubscribeaddressrequest)|true|none|
|» contractaddress|body|string|true|none|
|» ethereumaddress|body|string|true|none|
|» url|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "deleted": true,
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "ok": true,
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

<h3 id="unsubscribeaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unsubscribeAddress](#schemaunsubscribeaddress)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="chaingatewayio-transaction-requests">Transaction Requests</h1>

Requests to send Tokens, Ethereum and clear addresses

## clearAddress

<a id="opIdclearAddress"></a>

> Code samples

```bash
curl https://example.com/clearAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ethereumaddress": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
    "newaddress": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
    "password": "padN39QkRA2hJ"
  }'
```

`POST /clearAddress`

Sends all available ethereum funds of an address to a specified receiver address.

> Body parameter

```json
{
  "ethereumaddress": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "newaddress": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "password": "padN39QkRA2hJ"
}
```

<h3 id="clearaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[clearAddressRequest](#schemaclearaddressrequest)|true|none|
|» ethereumaddress|body|string|true|none|
|» newaddress|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 0.02300916225,
  "ethereumaddress": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "gas": 0.0025199999999999997,
  "newaddress": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "ok": true,
  "total": "0.025529162250000000",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

<h3 id="clearaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[clearAddress](#schemaclearaddress)|

<aside class="success">
This operation does not require authentication
</aside>

## sendEthereum

<a id="opIdsendEthereum"></a>

> Code samples

```bash
curl https://example.com/sendEthereum \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": 0.01,
    "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
    "password": "padN39QkRA2hJ",
    "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
  }'
```

`POST /sendEthereum`

Sends ethereum from an address controlled by the account to a specified receiver address.

> Body parameter

```json
{
  "amount": 0.01,
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "password": "padN39QkRA2hJ",
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
}
```

<h3 id="sendethereum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[sendEthereumRequest](#schemasendethereumrequest)|true|none|
|» amount|body|number|true|none|
|» from|body|string|true|none|
|» password|body|string|true|none|
|» to|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": "0.010000000000000000",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "ok": true,
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

<h3 id="sendethereum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[sendEthereum](#schemasendethereum)|

<aside class="success">
This operation does not require authentication
</aside>

## sendToken

<a id="opIdsendToken"></a>

> Code samples

```bash
curl https://example.com/sendToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": 5,
    "contractaddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
    "identifier": "CN562",
    "password": "padN39QkRA2hJ",
    "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
  }'
```

`POST /sendToken`

Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.

> Body parameter

```json
{
  "amount": 5,
  "contractaddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "identifier": "CN562",
  "password": "padN39QkRA2hJ",
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
}
```

<h3 id="sendtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API Key|
|body|body|[sendTokenRequest](#schemasendtokenrequest)|true|none|
|» amount|body|integer(int32)|true|none|
|» contractaddress|body|string|true|none|
|» from|body|string|true|none|
|» identifier|body|string|true|none|
|» password|body|string|true|none|
|» to|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 5,
  "contractaddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "identifier": "CN562",
  "ok": true,
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

<h3 id="sendtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[sendToken](#schemasendtoken)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethereumaddress|string|true|none|none|

<h2 id="tocS_Cipherparams">Cipherparams</h2>
<!-- backwards compatibility -->
<a id="schemacipherparams"></a>
<a id="schema_Cipherparams"></a>
<a id="tocScipherparams"></a>
<a id="tocscipherparams"></a>

```json
{
  "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iv|string|true|none|none|

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
{
  "address": "71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "crypto": {
    "cipher": "aes-128-ctr",
    "cipherparams": {
      "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
    },
    "ciphertext": "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f",
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 131072,
      "p": 1,
      "r": 8,
      "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
    },
    "mac": "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"
  },
  "id": "85b790ff-408e-42b8-b123-bec9523964dc",
  "version": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|crypto|[Crypto](#schemacrypto)|true|none|none|
|id|string|true|none|none|
|version|integer(int32)|true|none|none|

<h2 id="tocS_Crypto">Crypto</h2>
<!-- backwards compatibility -->
<a id="schemacrypto"></a>
<a id="schema_Crypto"></a>
<a id="tocScrypto"></a>
<a id="tocscrypto"></a>

```json
{
  "cipher": "aes-128-ctr",
  "cipherparams": {
    "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
  },
  "ciphertext": "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f",
  "kdf": "scrypt",
  "kdfparams": {
    "dklen": 32,
    "n": 131072,
    "p": 1,
    "r": 8,
    "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
  },
  "mac": "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cipher|string|true|none|none|
|cipherparams|[Cipherparams](#schemacipherparams)|true|none|none|
|ciphertext|string|true|none|none|
|kdf|string|true|none|none|
|kdfparams|[Kdfparams](#schemakdfparams)|true|none|none|
|mac|string|true|none|none|

<h2 id="tocS_FailedIpn">FailedIpn</h2>
<!-- backwards compatibility -->
<a id="schemafailedipn"></a>
<a id="schema_FailedIpn"></a>
<a id="tocSfailedipn"></a>
<a id="tocsfailedipn"></a>

```json
{
  "action": "deposit",
  "amount": "496588.7771277759",
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "id": "17766",
  "timestamp": "2020-09-19 14:33:01",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|amount|string|true|none|none|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|id|string|true|none|none|
|timestamp|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_Ipn">Ipn</h2>
<!-- backwards compatibility -->
<a id="schemaipn"></a>
<a id="schema_Ipn"></a>
<a id="tocSipn"></a>
<a id="tocsipn"></a>

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_Kdfparams">Kdfparams</h2>
<!-- backwards compatibility -->
<a id="schemakdfparams"></a>
<a id="schema_Kdfparams"></a>
<a id="tocSkdfparams"></a>
<a id="tocskdfparams"></a>

```json
{
  "dklen": 32,
  "n": 131072,
  "p": 1,
  "r": 8,
  "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dklen|integer(int32)|true|none|none|
|n|integer(int32)|true|none|none|
|p|integer(int32)|true|none|none|
|r|integer(int32)|true|none|none|
|salt|string|true|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": "10",
  "block_number": "6432816",
  "contract_address": "0x9E2B71e87d9304c4773674584EB9D0c838643568",
  "from": "0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0",
  "gas": "90000",
  "gas_price": "9",
  "to": "0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861",
  "token_decimals": "18",
  "token_name": "Shopiblock",
  "token_supply": "1000000000",
  "token_symbol": "SHB",
  "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b",
  "type": "ERC20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|none|
|block_number|string|true|none|none|
|contract_address|string|true|none|none|
|from|string|true|none|none|
|gas|string|true|none|none|
|gas_price|string|true|none|none|
|to|string|true|none|none|
|token_decimals|string|true|none|none|
|token_name|string|true|none|none|
|token_supply|string|true|none|none|
|token_symbol|string|true|none|none|
|txid|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_clearAddress">clearAddress</h2>
<!-- backwards compatibility -->
<a id="schemaclearaddress"></a>
<a id="schema_clearAddress"></a>
<a id="tocSclearaddress"></a>
<a id="tocsclearaddress"></a>

```json
{
  "amount": 0.02300916225,
  "ethereumaddress": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "gas": 0.0025199999999999997,
  "newaddress": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "ok": true,
  "total": "0.025529162250000000",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|ethereumaddress|string|true|none|none|
|gas|number|true|none|none|
|newaddress|string|true|none|none|
|ok|boolean|true|none|none|
|total|string|true|none|none|
|txid|string|true|none|none|

<h2 id="tocS_clearAddressRequest">clearAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclearaddressrequest"></a>
<a id="schema_clearAddressRequest"></a>
<a id="tocSclearaddressrequest"></a>
<a id="tocsclearaddressrequest"></a>

```json
{
  "ethereumaddress": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "newaddress": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethereumaddress|string|true|none|none|
|newaddress|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_deleteAddress">deleteAddress</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddress"></a>
<a id="schema_deleteAddress"></a>
<a id="tocSdeleteaddress"></a>
<a id="tocsdeleteaddress"></a>

```json
{
  "deleted": true,
  "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|none|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_deleteAddressRequest">deleteAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddressrequest"></a>
<a id="schema_deleteAddressRequest"></a>
<a id="tocSdeleteaddressrequest"></a>
<a id="tocsdeleteaddressrequest"></a>

```json
{
  "ethereumaddress": "0x71892689ed0d79d88ab6ea3783b571b8ece9bee3",
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethereumaddress|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_exportAddress">exportAddress</h2>
<!-- backwards compatibility -->
<a id="schemaexportaddress"></a>
<a id="schema_exportAddress"></a>
<a id="tocSexportaddress"></a>
<a id="tocsexportaddress"></a>

```json
{
  "content": "{'version':3,'id':'85b790ff-408e-42b8-b123-bec9523964dc','address':'71892889ed4d79d88ab6ea3783b571b8ece9bef4','crypto':{'ciphertext':'9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f','cipherparams':{'iv':'76e6f2497b9f2a8e024fc752a5418a6d'},'cipher':'aes-128-ctr','kdf':'scrypt','kdfparams':{'dklen':32,'salt':'d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4','n':131072,'r':8,'p':1},'mac':'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9'}}",
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|
|filename|string|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_exportAddressRequest">exportAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportaddressrequest"></a>
<a id="schema_exportAddressRequest"></a>
<a id="tocSexportaddressrequest"></a>
<a id="tocsexportaddressrequest"></a>

```json
{
  "ethaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethaddress|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_getBlock">getBlock</h2>
<!-- backwards compatibility -->
<a id="schemagetblock"></a>
<a id="schema_getBlock"></a>
<a id="tocSgetblock"></a>
<a id="tocsgetblock"></a>

```json
{
  "block_number": "5000000",
  "difficulty": "2546613975853490",
  "gas_limit": "8000029",
  "gas_used": "7994053",
  "hash": "0x7d5a4369273c723454ac137f48a4f142b097aa2779464e6505f1b1c5e37b5382",
  "miner": "0xb2930B35844a230f00E51431aCAe96Fe543a0347",
  "ok": true,
  "parent_hash": "0xcae4df80f5862e4321690857eded0d8a40136dafb8155453920bade5bd0c46c0",
  "size_in_bytes": "24017",
  "time_stamp": "2018-01-30 14:41:33",
  "transactions_count": "109"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_number|string|true|none|none|
|difficulty|string|true|none|none|
|gas_limit|string|true|none|none|
|gas_used|string|true|none|none|
|hash|string|true|none|none|
|miner|string|true|none|none|
|ok|boolean|true|none|none|
|parent_hash|string|true|none|none|
|size_in_bytes|string|true|none|none|
|time_stamp|string|true|none|none|
|transactions_count|string|true|none|none|

<h2 id="tocS_getBlockRequest">getBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetblockrequest"></a>
<a id="schema_getBlockRequest"></a>
<a id="tocSgetblockrequest"></a>
<a id="tocsgetblockrequest"></a>

```json
{
  "block": "5000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block|string|true|none|none|

<h2 id="tocS_getEthereumBalance">getEthereumBalance</h2>
<!-- backwards compatibility -->
<a id="schemagetethereumbalance"></a>
<a id="schema_getEthereumBalance"></a>
<a id="tocSgetethereumbalance"></a>
<a id="tocsgetethereumbalance"></a>

```json
{
  "balance": 0.009956019840987648,
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number|true|none|none|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_getEthereumBalanceRequest">getEthereumBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetethereumbalancerequest"></a>
<a id="schema_getEthereumBalanceRequest"></a>
<a id="tocSgetethereumbalancerequest"></a>
<a id="tocsgetethereumbalancerequest"></a>

```json
{
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethereumaddress|string|true|none|none|

<h2 id="tocS_getExchangeRate">getExchangeRate</h2>
<!-- backwards compatibility -->
<a id="schemagetexchangerate"></a>
<a id="schema_getExchangeRate"></a>
<a id="tocSgetexchangerate"></a>
<a id="tocsgetexchangerate"></a>

```json
{
  "currency": "eur",
  "ok": true,
  "rate": 321.2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|none|
|ok|boolean|true|none|none|
|rate|number|true|none|none|

<h2 id="tocS_getExchangeRateRequest">getExchangeRateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexchangeraterequest"></a>
<a id="schema_getExchangeRateRequest"></a>
<a id="tocSgetexchangeraterequest"></a>
<a id="tocsgetexchangeraterequest"></a>

```json
{
  "currency": "eur"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|none|

<h2 id="tocS_getGasPrice">getGasPrice</h2>
<!-- backwards compatibility -->
<a id="schemagetgasprice"></a>
<a id="schema_getGasPrice"></a>
<a id="tocSgetgasprice"></a>
<a id="tocsgetgasprice"></a>

```json
{
  "gasprice": 70,
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gasprice|integer(int32)|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_getLastBlockNumber">getLastBlockNumber</h2>
<!-- backwards compatibility -->
<a id="schemagetlastblocknumber"></a>
<a id="schema_getLastBlockNumber"></a>
<a id="tocSgetlastblocknumber"></a>
<a id="tocsgetlastblocknumber"></a>

```json
{
  "blocknumber": 10892021,
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocknumber|integer(int32)|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_getToken">getToken</h2>
<!-- backwards compatibility -->
<a id="schemagettoken"></a>
<a id="schema_getToken"></a>
<a id="tocSgettoken"></a>
<a id="tocsgettoken"></a>

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "decimals": 2,
  "name": "Bitfranken",
  "ok": true,
  "supply": 76507131570,
  "symbol": "BIFRA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|decimals|integer(int32)|true|none|none|
|name|string|true|none|none|
|ok|boolean|true|none|none|
|supply|integer(int64)|true|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_getTokenBalance">getTokenBalance</h2>
<!-- backwards compatibility -->
<a id="schemagettokenbalance"></a>
<a id="schema_getTokenBalance"></a>
<a id="tocSgettokenbalance"></a>
<a id="tocsgettokenbalance"></a>

```json
{
  "balance": 9980,
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int32)|true|none|none|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_getTokenBalanceRequest">getTokenBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettokenbalancerequest"></a>
<a id="schema_getTokenBalanceRequest"></a>
<a id="tocSgettokenbalancerequest"></a>
<a id="tocsgettokenbalancerequest"></a>

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915",
  "ethereumaddress": "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|

<h2 id="tocS_getTokenRequest">getTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettokenrequest"></a>
<a id="schema_getTokenRequest"></a>
<a id="tocSgettokenrequest"></a>
<a id="tocsgettokenrequest"></a>

```json
{
  "contractaddress": "0x5b86a33f0c232fe909eb4602a9d039072869d915"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|

<h2 id="tocS_getTransactions">getTransactions</h2>
<!-- backwards compatibility -->
<a id="schemagettransactions"></a>
<a id="schema_getTransactions"></a>
<a id="tocSgettransactions"></a>
<a id="tocsgettransactions"></a>

```json
{
  "ok": true,
  "transactions": [
    {
      "amount": "10",
      "block_number": "6432816",
      "contract_address": "0x9E2B71e87d9304c4773674584EB9D0c838643568",
      "from": "0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0",
      "gas": "90000",
      "gas_price": "9",
      "to": "0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861",
      "token_decimals": "18",
      "token_name": "Shopiblock",
      "token_supply": "1000000000",
      "token_symbol": "SHB",
      "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b",
      "type": "ERC20"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|transactions|[[Transaction](#schematransaction)]|true|none|none|

<h2 id="tocS_getTransactionsRequest">getTransactionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettransactionsrequest"></a>
<a id="schema_getTransactionsRequest"></a>
<a id="tocSgettransactionsrequest"></a>
<a id="tocsgettransactionsrequest"></a>

```json
{
  "txid": "0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|true|none|none|

<h2 id="tocS_importAddress">importAddress</h2>
<!-- backwards compatibility -->
<a id="schemaimportaddress"></a>
<a id="schema_importAddress"></a>
<a id="tocSimportaddress"></a>
<a id="tocsimportaddress"></a>

```json
{
  "ethaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethaddress|string|true|none|none|
|filename|string|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_importAddressRequest">importAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportaddressrequest"></a>
<a id="schema_importAddressRequest"></a>
<a id="tocSimportaddressrequest"></a>
<a id="tocsimportaddressrequest"></a>

```json
{
  "content": {
    "address": "71892889ed4d79d88ab6ea3783b571b8ece9bef4",
    "crypto": {
      "cipher": "aes-128-ctr",
      "cipherparams": {
        "iv": "76e6f2497b9f2a8e024fc752a5418a6d"
      },
      "ciphertext": "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f",
      "kdf": "scrypt",
      "kdfparams": {
        "dklen": 32,
        "n": 131072,
        "p": 1,
        "r": 8,
        "salt": "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"
      },
      "mac": "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"
    },
    "id": "85b790ff-408e-42b8-b123-bec9523964dc",
    "version": 3
  },
  "filename": "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[Content](#schemacontent)|true|none|none|
|filename|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_listAddresses">listAddresses</h2>
<!-- backwards compatibility -->
<a id="schemalistaddresses"></a>
<a id="schema_listAddresses"></a>
<a id="tocSlistaddresses"></a>
<a id="tocslistaddresses"></a>

```json
{
  "addresses": [
    {
      "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4"
    }
  ],
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_listFailedIPNs">listFailedIPNs</h2>
<!-- backwards compatibility -->
<a id="schemalistfailedipns"></a>
<a id="schema_listFailedIPNs"></a>
<a id="tocSlistfailedipns"></a>
<a id="tocslistfailedipns"></a>

```json
{
  "failed_ipns": [
    {
      "action": "deposit",
      "amount": "496588.7771277759",
      "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "id": "17766",
      "timestamp": "2020-09-19 14:33:01",
      "url": "https://yoururl.com/ipnreceiver.php"
    }
  ],
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failed_ipns|[[FailedIpn](#schemafailedipn)]|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_listSubscribedAddresses">listSubscribedAddresses</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscribedaddresses"></a>
<a id="schema_listSubscribedAddresses"></a>
<a id="tocSlistsubscribedaddresses"></a>
<a id="tocslistsubscribedaddresses"></a>

```json
{
  "ipns": [
    {
      "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "url": "https://yoururl.com/ipnreceiver.php"
    }
  ],
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipns|[[Ipn](#schemaipn)]|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_newAddress">newAddress</h2>
<!-- backwards compatibility -->
<a id="schemanewaddress"></a>
<a id="schema_newAddress"></a>
<a id="tocSnewaddress"></a>
<a id="tocsnewaddress"></a>

```json
{
  "ethereumaddress": "0x71892889ed4d79d88ab6ea3783b571b8ece9bef4",
  "ok": true,
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_newAddressRequest">newAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewaddressrequest"></a>
<a id="schema_newAddressRequest"></a>
<a id="tocSnewaddressrequest"></a>
<a id="tocsnewaddressrequest"></a>

```json
{
  "password": "padN39QkRA2hJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|

<h2 id="tocS_resendFailedIPN">resendFailedIPN</h2>
<!-- backwards compatibility -->
<a id="schemaresendfailedipn"></a>
<a id="schema_resendFailedIPN"></a>
<a id="tocSresendfailedipn"></a>
<a id="tocsresendfailedipn"></a>

```json
{
  "id": 17766,
  "ok": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|ok|boolean|true|none|none|

<h2 id="tocS_resendFailedIPNRequest">resendFailedIPNRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendfailedipnrequest"></a>
<a id="schema_resendFailedIPNRequest"></a>
<a id="tocSresendfailedipnrequest"></a>
<a id="tocsresendfailedipnrequest"></a>

```json
{
  "id": 17766
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|

<h2 id="tocS_sendEthereum">sendEthereum</h2>
<!-- backwards compatibility -->
<a id="schemasendethereum"></a>
<a id="schema_sendEthereum"></a>
<a id="tocSsendethereum"></a>
<a id="tocssendethereum"></a>

```json
{
  "amount": "0.010000000000000000",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "ok": true,
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|none|
|from|string|true|none|none|
|ok|boolean|true|none|none|
|to|string|true|none|none|
|txid|string|true|none|none|

<h2 id="tocS_sendEthereumRequest">sendEthereumRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendethereumrequest"></a>
<a id="schema_sendEthereumRequest"></a>
<a id="tocSsendethereumrequest"></a>
<a id="tocssendethereumrequest"></a>

```json
{
  "amount": 0.01,
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "password": "padN39QkRA2hJ",
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|from|string|true|none|none|
|password|string|true|none|none|
|to|string|true|none|none|

<h2 id="tocS_sendToken">sendToken</h2>
<!-- backwards compatibility -->
<a id="schemasendtoken"></a>
<a id="schema_sendToken"></a>
<a id="tocSsendtoken"></a>
<a id="tocssendtoken"></a>

```json
{
  "amount": 5,
  "contractaddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "identifier": "CN562",
  "ok": true,
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48",
  "txid": "0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int32)|true|none|none|
|contractaddress|string|true|none|none|
|from|string|true|none|none|
|identifier|string|true|none|none|
|ok|boolean|true|none|none|
|to|string|true|none|none|
|txid|string|true|none|none|

<h2 id="tocS_sendTokenRequest">sendTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendtokenrequest"></a>
<a id="schema_sendTokenRequest"></a>
<a id="tocSsendtokenrequest"></a>
<a id="tocssendtokenrequest"></a>

```json
{
  "amount": 5,
  "contractaddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "from": "0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8",
  "identifier": "CN562",
  "password": "padN39QkRA2hJ",
  "to": "0xef4943d727e34280a2efa0b3352dfd61f508ee48"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int32)|true|none|none|
|contractaddress|string|true|none|none|
|from|string|true|none|none|
|identifier|string|true|none|none|
|password|string|true|none|none|
|to|string|true|none|none|

<h2 id="tocS_subscribeAddress">subscribeAddress</h2>
<!-- backwards compatibility -->
<a id="schemasubscribeaddress"></a>
<a id="schema_subscribeAddress"></a>
<a id="tocSsubscribeaddress"></a>
<a id="tocssubscribeaddress"></a>

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "ok": true,
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_subscribeAddressRequest">subscribeAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscribeaddressrequest"></a>
<a id="schema_subscribeAddressRequest"></a>
<a id="tocSsubscribeaddressrequest"></a>
<a id="tocssubscribeaddressrequest"></a>

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_unsubscribeAddress">unsubscribeAddress</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeaddress"></a>
<a id="schema_unsubscribeAddress"></a>
<a id="tocSunsubscribeaddress"></a>
<a id="tocsunsubscribeaddress"></a>

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "deleted": true,
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "ok": true,
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|deleted|boolean|true|none|none|
|ethereumaddress|string|true|none|none|
|ok|boolean|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_unsubscribeAddressRequest">unsubscribeAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeaddressrequest"></a>
<a id="schema_unsubscribeAddressRequest"></a>
<a id="tocSunsubscribeaddressrequest"></a>
<a id="tocsunsubscribeaddressrequest"></a>

```json
{
  "contractaddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "ethereumaddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "url": "https://yoururl.com/ipnreceiver.php"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractaddress|string|true|none|none|
|ethereumaddress|string|true|none|none|
|url|string|true|none|none|
