<h1 id="neblio-rest-api-suite">Neblio REST API Suite v1.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

APIs for Interacting with NTP1 Tokens & The Neblio Blockchain

Base URLs:

* <a href="https://ntp1node.nebl.io/">https://ntp1node.nebl.io/</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="neblio-rest-api-suite-json-rpc">JSON-RPC</h1>

## Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

<a id="opIdjson_rpc"></a>

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "id": "neblio-apis",
    "jsonrpc": "1.0",
    "method": "getstakinginfo",
    "params": []
  }'
```

`POST /`

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1

> Body parameter

```json
{
  "id": "neblio-apis",
  "jsonrpc": "1.0",
  "method": "getstakinginfo",
  "params": []
}
```

<h3 id="send-a-json-rpc-call-to-a-localhost-neblio-qt-or-nebliod-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rpcRequest](#schemarpcrequest)|true|none|
|» id|body|string|true|Identifier of RCP caller|
|» jsonrpc|body|string|true|JSON-RPC version|
|» method|body|string|true|Name of the Neblio RPC method to call|
|» params|body|[string]|true|Array of string params that should be passed to the RPC method.|

> Example responses

> 200 Response

```json
{
  "error": {},
  "id": "string",
  "result": {}
}
```

<h3 id="send-a-json-rpc-call-to-a-localhost-neblio-qt-or-nebliod-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing the JSON response from the Neblio node.|[rpcResponse](#schemarpcresponse)|
|401|Unauthorized|Authentication information is missing or invalid|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW_Authenticate|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rpcAuth
</aside>

<h1 id="neblio-rest-api-suite-insight">Insight</h1>

## Returns address object

<a id="opIdgetAddress"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}`

Returns NEBL address object containing information on a specific address

<h3 id="returns-address-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
{
  "addrStr": "string",
  "balance": 0,
  "balanceSat": 0,
  "totalReceived": 0,
  "totalReceivedSat": 0,
  "totalSent": 0,
  "totalSentSat": 0,
  "transactions": [
    "string"
  ],
  "txAppearances": 0,
  "unconfirmedBalance": 0,
  "unconfirmedBalanceSat": 0,
  "unconfirmedTxAppearances": 0
}
```

<h3 id="returns-address-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing address info|[getAddressResponse](#schemagetaddressresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns address balance in sats

<a id="opIdgetAddressBalance"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string/balance \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}/balance`

Returns NEBL address balance in satoshis

<h3 id="returns-address-balance-in-sats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-address-balance-in-sats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address balance|[getAddressBalanceResponse](#schemagetaddressbalanceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns total received by address in sats

<a id="opIdgetAddressTotalReceived"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string/totalReceived \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}/totalReceived`

Returns total NEBL received by address in satoshis

<h3 id="returns-total-received-by-address-in-sats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-total-received-by-address-in-sats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Total received by address|[getAddressTotalReceivedResponse](#schemagetaddresstotalreceivedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns total sent by address in sats

<a id="opIdgetAddressTotalSent"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string/totalSent \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}/totalSent`

Returns total NEBL sent by address in satoshis

<h3 id="returns-total-sent-by-address-in-sats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-total-sent-by-address-in-sats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Total sent by address|[getAddressTotalSentResponse](#schemagetaddresstotalsentresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns address unconfirmed balance in sats

<a id="opIdgetAddressUnconfirmedBalance"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string/unconfirmedBalance \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}/unconfirmedBalance`

Returns NEBL address unconfirmed balance in satoshis

<h3 id="returns-address-unconfirmed-balance-in-sats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-address-unconfirmed-balance-in-sats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address unconfirmed balance|[getAddressUnconfirmedBalanceResponse](#schemagetaddressunconfirmedbalanceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all UTXOs at a given address

<a id="opIdgetAddressUtxos"></a>

> Code samples

```bash
curl https://example.com/ins/addr/string/utxo \
  -H 'Accept: application/json'
```

`GET /ins/addr/{address}/utxo`

Returns information on each Unspent Transaction Output contained at an address

<h3 id="returns-all-utxos-at-a-given-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "amount": 0,
    "confirmations": 0,
    "scriptPubKey": "string",
    "ts": 0,
    "txid": "string",
    "vout": 0
  }
]
```

<h3 id="returns-all-utxos-at-a-given-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|UTXOs at an address|[getAddressUtxosResponse](#schemagetaddressutxosresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns block hash of block

<a id="opIdgetBlockIndex"></a>

> Code samples

```bash
curl https://example.com/ins/block-index/0 \
  -H 'Accept: application/json'
```

`GET /ins/block-index/{blockindex}`

Returns the block hash of a block at a given block index

<h3 id="returns-block-hash-of-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockindex|path|number|true|Block Index|

> Example responses

> 200 Response

```json
{
  "blockHash": "string"
}
```

<h3 id="returns-block-hash-of-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing block hash|[getBlockIndexResponse](#schemagetblockindexresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information regarding a Neblio block

<a id="opIdgetBlock"></a>

> Code samples

```bash
curl https://example.com/ins/block/string \
  -H 'Accept: application/json'
```

`GET /ins/block/{blockhash}`

Returns blockchain data for a given block based upon the block hash

<h3 id="returns-information-regarding-a-neblio-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockhash|path|string|true|Block Hash|

> Example responses

> 200 Response

```json
{
  "bits": "string",
  "confirmations": 0,
  "difficulty": 0,
  "hash": "string",
  "height": 0,
  "merkleroot": "string",
  "nextblockhash": "string",
  "nonce": 0,
  "previousblockhash": "string",
  "reward": 0,
  "size": 0,
  "time": 0,
  "tx": [
    "string"
  ],
  "version": 0
}
```

<h3 id="returns-information-regarding-a-neblio-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing all information on a blockchain block|[getBlockResponse](#schemagetblockresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns raw transaction hex

<a id="opIdgetRawTx"></a>

> Code samples

```bash
curl https://example.com/ins/rawtx/string \
  -H 'Accept: application/json'
```

`GET /ins/rawtx/{txid}`

Returns raw transaction hex representing a NEBL transaction

<h3 id="returns-raw-transaction-hex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction ID|

> Example responses

> 200 Response

```json
{
  "rawtx": "string"
}
```

<h3 id="returns-raw-transaction-hex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing raw hex of transaction|[getRawTxResponse](#schemagetrawtxresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Utility API for calling several blockchain node functions

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl https://example.com/ins/status \
  -H 'Accept: application/json'
```

`GET /ins/status`

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

<h3 id="utility-api-for-calling-several-blockchain-node-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash|

> Example responses

> 200 Response

```json
{}
```

<h3 id="utility-api-for-calling-several-blockchain-node-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function Response|[getStatusResponse](#schemagetstatusresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get node sync status

<a id="opIdgetSync"></a>

> Code samples

```bash
curl https://example.com/ins/sync \
  -H 'Accept: application/json'
```

`GET /ins/sync`

Returns information on the node's sync progress

> Example responses

> 200 Response

```json
{
  "blockChainHeight": 0,
  "error": "string",
  "height": 0,
  "status": "string",
  "syncPercentage": 0,
  "type": "string"
}
```

<h3 id="get-node-sync-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sync Info|[getSyncResponse](#schemagetsyncresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcasts a signed raw transaction to the network (not NTP1 specific)

<a id="opIdsendTx"></a>

> Code samples

```bash
curl https://example.com/ins/tx/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rawtx": "string"
  }'
```

`POST /ins/tx/send`

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


> Body parameter

```json
{
  "rawtx": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-not-ntp1-specific-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sendTxRequest](#schemasendtxrequest)|true|Object representing a transaction to broadcast|
|» rawtx|body|string|true|Signed raw tx hex to broadcast|

> Example responses

> 200 Response

```json
{
  "txid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-not-ntp1-specific-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the TXID if the broadcast was successful|[broadcastTxResponse](#schemabroadcasttxresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns transaction object

<a id="opIdgetTx"></a>

> Code samples

```bash
curl https://example.com/ins/tx/string \
  -H 'Accept: application/json'
```

`GET /ins/tx/{txid}`

Returns NEBL transaction object representing a NEBL transaction

<h3 id="returns-transaction-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction ID|

> Example responses

> 200 Response

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "fees": 0,
  "locktime": 0,
  "size": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "valueIn": 0,
  "valueOut": 0,
  "version": 0,
  "vin": [
    {
      "n": 0,
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "txid": "string",
      "value": 0,
      "valueSat": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

<h3 id="returns-transaction-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing transaction info|[getTxResponse](#schemagettxresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions by block or address

<a id="opIdgetTxs"></a>

> Code samples

```bash
curl https://example.com/ins/txs \
  -H 'Accept: application/json'
```

`GET /ins/txs`

Returns all transactions by block or address

<h3 id="get-transactions-by-block-or-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|false|Address|
|block|query|string|false|Block Hash|
|pageNum|query|number|false|Page number to display|

> Example responses

> 200 Response

```json
{
  "pagesTotal": 0,
  "txs": [
    {
      "blockhash": "string",
      "blockheight": 0,
      "blocktime": 0,
      "confirmations": 0,
      "fee": 0,
      "fees": 0,
      "locktime": 0,
      "size": 0,
      "time": 0,
      "totalsent": 0,
      "txid": "string",
      "valueIn": 0,
      "valueOut": 0,
      "version": 0,
      "vin": [
        {
          "n": 0,
          "scriptSig": {
            "asm": "string",
            "hex": "string"
          },
          "sequence": 0,
          "txid": "string",
          "value": 0,
          "valueSat": 0,
          "vout": 0
        }
      ],
      "vout": [
        {
          "blockheight": 0,
          "n": 0,
          "scriptPubKey": {
            "addresses": [
              "string"
            ],
            "asm": "string",
            "hex": "string",
            "reqSigs": 0,
            "type": "string"
          },
          "used": true,
          "usedBlockheight": 0,
          "usedTxid": "string",
          "value": 0
        }
      ]
    }
  ]
}
```

<h3 id="get-transactions-by-block-or-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of transactions|[getTxsResponse](#schemagettxsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neblio-rest-api-suite-ntp1">NTP1</h1>

## Information On a Neblio Address

<a id="opIdgetAddressInfo"></a>

> Code samples

```bash
curl https://example.com/ntp1/addressinfo/string \
  -H 'Accept: application/json'
```

`GET /ntp1/addressinfo/{address}`

Returns both NEBL and NTP1 token UTXOs held at the given address.


<h3 id="information-on-a-neblio-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Neblio Address to get information on.|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "utxos": [
    {
      "blockheight": 0,
      "blocktime": 0,
      "index": 0,
      "scriptPubKey": {},
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "used": true,
      "value": 0
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="information-on-a-neblio-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with an array of UTXOs for this address|[getAddressInfoResponse](#schemagetaddressinforesponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcasts a signed raw transaction to the network

<a id="opIdbroadcastTx"></a>

> Code samples

```bash
curl https://example.com/ntp1/broadcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "txHex": "string"
  }'
```

`POST /ntp1/broadcast`

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


> Body parameter

```json
{
  "txHex": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[broadcastTxRequest](#schemabroadcasttxrequest)|true|Object representing a transaction to broadcast|
|» txHex|body|string|true|Signed raw tx hex to broadcast|

> Example responses

> 200 Response

```json
{
  "txid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the TXID if the broadcast was successful|[broadcastTxResponse](#schemabroadcasttxresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that burns an NTP1 Token

<a id="opIdburnToken"></a>

> Code samples

```bash
curl https://example.com/ntp1/burntoken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "burn": [
      {
        "amount": 0,
        "tokenId": "string"
      }
    ],
    "fee": 0,
    "from": [
      "string"
    ],
    "transfer": [
      {
        "address": "string",
        "amount": 0,
        "tokenId": "string"
      }
    ]
  }'
```

`POST /ntp1/burntoken`

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "burn": [
    {
      "amount": 0,
      "tokenId": "string"
    }
  ],
  "fee": 0,
  "from": [
    "string"
  ],
  "transfer": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

<h3 id="builds-a-transaction-that-burns-an-ntp1-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[burnTokenRequest](#schemaburntokenrequest)|true|Object representing the token to be burned|
|» burn|body|[object]|true|Array of objects representing tokens to be burned|
|» » amount|body|number|false|Amount of tokens to burn|
|» » tokenId|body|string|false|Unique token id we are burning|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|» from|body|[string]|false|Array of addresses to send the token from|
|» transfer|body|[object]|false|none|
|» » address|body|string|false|Address to transfer tokens to|
|» » amount|body|number|false|Number of tokens to send|
|» » tokenId|body|string|false|ID of token we are sending|

> Example responses

> 200 Response

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-burns-an-ntp1-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the tx to burn the token|[burnTokenResponse](#schemaburntokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that issues a new NTP1 Token

<a id="opIdissueToken"></a>

> Code samples

```bash
curl https://example.com/ntp1/issue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": 0,
    "divisibility": 0,
    "fee": 0,
    "flags": {
      "splitChange": true
    },
    "issueAddress": "string",
    "metadata": {
      "description": "string",
      "encryptions": [
        {
          "format": "string",
          "key": "string",
          "pubkey": "string",
          "type": "string"
        }
      ],
      "issuer": "string",
      "rules": {
        "expiration": {
          "locked": true,
          "validUntil": 0
        },
        "fees": {
          "items": [
            {
              "address": "string",
              "tokenId": "string",
              "value": "string"
            }
          ],
          "locked": true
        },
        "holders": [
          {
            "address": "string",
            "locked": true
          }
        ]
      },
      "tokenName": "string",
      "urls": [
        {
          "dataHash": "string",
          "mimeType": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "reissuable": true,
    "transfer": [
      {
        "address": "string",
        "amount": 0
      }
    ]
  }'
```

`POST /ntp1/issue`

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "amount": 0,
  "divisibility": 0,
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "issueAddress": "string",
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "reissuable": true,
  "transfer": [
    {
      "address": "string",
      "amount": 0
    }
  ]
}
```

<h3 id="builds-a-transaction-that-issues-a-new-ntp1-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[issueTokenRequest](#schemaissuetokenrequest)|true|Object representing the token to be created|
|» amount|body|number|true|Number of tokens to issue|
|» divisibility|body|number|true|Number of decimal places the token should be divisble by (0-7)|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)|
|» flags|body|object|false|Object representing flags that potentialy modify this transaction|
|» » splitChange|body|boolean|false|If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)|
|» issueAddress|body|string|true|Address issuing the token|
|» metadata|body|object|false|Object representing all metadata at token issuance|
|» » description|body|string|false|Long name or description of token (ex. Nibble)|
|» » encryptions|body|[object]|false|Array of encryption instruction objects for encrypting userData|
|» » » format|body|string|false|key format (pem or der)|
|» » » key|body|string|false|userData key to encrypt|
|» » » pubkey|body|string|false|RSA public key used for encryption|
|» » » type|body|string|false|pkcs1 or pkcs8|
|» » issuer|body|string|false|Name of token issuer|
|» » rules|body|object|false|Object describing token rules|
|» » » expiration|body|object|false|Object describing expiration rules of the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » » validUntil|body|number|false|Blockheight at wh|
|» » » fees|body|object|false|none|
|» » » » items|body|[object]|false|Array of objects describing fee rules|
|» » » » » address|body|string|false|Address fee is auto sent to|
|» » » » » tokenId|body|string|false|How fee should be paid, either with a tokenId, or with NEBL if null|
|» » » » » value|body|string|false|Amount of NTP1 token, or NEBL (in satoshi) to pay as fee|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » holders|body|[object]|false|Array of objects describing what addresses can hold the token|
|» » » » address|body|string|false|Address that can hold the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » tokenName|body|string|false|Token Symbol it will be identified by (ex. NIBBL)|
|» » urls|body|[object]|false|none|
|» » » dataHash|body|string|false|Hash of data at the URL, used for verification|
|» » » mimeType|body|string|false|mimeType of URL content|
|» » » name|body|string|false|Name of the URL|
|» » » url|body|string|false|Actual URL|
|» » userData|body|object|false|Metadata set by user on token|
|» » » meta|body|[object]|false|none|
|» » » » key|body|string|false|none|
|» » » » value|body|string|false|none|
|» reissuable|body|boolean|true|whether the token should be reissuable|
|» transfer|body|[object]|true|none|
|» » address|body|string|false|Address to send the amount of issued tokens to|
|» » amount|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "tokenId": "string",
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-issues-a-new-ntp1-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the token created|[issueTokenResponse](#schemaissuetokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that sends an NTP1 Token

<a id="opIdsendToken"></a>

> Code samples

```bash
curl https://example.com/ntp1/sendtoken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fee": 0,
    "flags": {
      "splitChange": true
    },
    "from": [
      "string"
    ],
    "metadata": {
      "description": "string",
      "encryptions": [
        {
          "format": "string",
          "key": "string",
          "pubkey": "string",
          "type": "string"
        }
      ],
      "issuer": "string",
      "rules": {
        "expiration": {
          "locked": true,
          "validUntil": 0
        },
        "fees": {
          "items": [
            {
              "address": "string",
              "tokenId": "string",
              "value": "string"
            }
          ],
          "locked": true
        },
        "holders": [
          {
            "address": "string",
            "locked": true
          }
        ]
      },
      "tokenName": "string",
      "urls": [
        {
          "dataHash": "string",
          "mimeType": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "sendutxo": [
      "string"
    ],
    "to": [
      {
        "address": "string",
        "amount": 0,
        "tokenId": "string"
      }
    ]
  }'
```

`POST /ntp1/sendtoken`

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "from": [
    "string"
  ],
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "sendutxo": [
    "string"
  ],
  "to": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

<h3 id="builds-a-transaction-that-sends-an-ntp1-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sendTokenRequest](#schemasendtokenrequest)|true|Object representing the token to be sent|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|» flags|body|object|false|Object representing flags that potentialy modify this transaction|
|» » splitChange|body|boolean|false|If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)|
|» from|body|[string]|false|Array of addresses to send the token from|
|» metadata|body|object|false|Object representing all metadata at token issuance|
|» » description|body|string|false|Long name or description of token (ex. Nibble)|
|» » encryptions|body|[object]|false|Array of encryption instruction objects for encrypting userData|
|» » » format|body|string|false|key format (pem or der)|
|» » » key|body|string|false|userData key to encrypt|
|» » » pubkey|body|string|false|RSA public key used for encryption|
|» » » type|body|string|false|pkcs1 or pkcs8|
|» » issuer|body|string|false|Name of token issuer|
|» » rules|body|object|false|Object describing token rules|
|» » » expiration|body|object|false|Object describing expiration rules of the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » » validUntil|body|number|false|Blockheight at wh|
|» » » fees|body|object|false|none|
|» » » » items|body|[object]|false|Array of objects describing fee rules|
|» » » » » address|body|string|false|Address fee is auto sent to|
|» » » » » tokenId|body|string|false|How fee should be paid, either with a tokenId, or with NEBL if null|
|» » » » » value|body|string|false|Amount of NTP1 token, or NEBL (in satoshi) to pay as fee|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » holders|body|[object]|false|Array of objects describing what addresses can hold the token|
|» » » » address|body|string|false|Address that can hold the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » tokenName|body|string|false|Token Symbol it will be identified by (ex. NIBBL)|
|» » urls|body|[object]|false|none|
|» » » dataHash|body|string|false|Hash of data at the URL, used for verification|
|» » » mimeType|body|string|false|mimeType of URL content|
|» » » name|body|string|false|Name of the URL|
|» » » url|body|string|false|Actual URL|
|» » userData|body|object|false|Metadata set by user on token|
|» » » meta|body|[object]|false|none|
|» » » » key|body|string|false|none|
|» » » » value|body|string|false|none|
|» sendutxo|body|[string]|false|Array of UTXOs to send the token from|
|» to|body|[object]|true|none|
|» » address|body|string|false|Address to transfer tokens to|
|» » amount|body|number|false|Number of tokens to send|
|» » tokenId|body|string|false|ID of token we are sending|

> Example responses

> 200 Response

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-sends-an-ntp1-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the tx to send the token|[sendTokenResponse](#schemasendtokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Addresses Holding a Token

<a id="opIdgetTokenHolders"></a>

> Code samples

```bash
curl https://example.com/ntp1/stakeholders/string \
  -H 'Accept: application/json'
```

`GET /ntp1/stakeholders/{tokenid}`

Returns the the the addresses holding a token and how many tokens are held


<h3 id="get-addresses-holding-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divibility": 0,
  "holders": [
    {
      "address": "string",
      "amount": 0
    }
  ],
  "lockStatus": true,
  "someUtxo": "string",
  "tokenId": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-addresses-holding-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing all of the addresses holding a token|[getTokenHoldersResponse](#schemagettokenholdersresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the tokenId representing a token

<a id="opIdgetTokenId"></a>

> Code samples

```bash
curl https://example.com/ntp1/tokenid/string \
  -H 'Accept: application/json'
```

`GET /ntp1/tokenid/{tokensymbol}`

Translates a token symbol to a tokenId if a token exists with that symbol on the network


<h3 id="returns-the-tokenid-representing-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokensymbol|path|string|true|Token symbol|

> Example responses

> 200 Response

```json
{
  "tokenId": "string",
  "tokenName": "string"
}
```

<h3 id="returns-the-tokenid-representing-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.|[getTokenIdResponse](#schemagettokenidresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Metadata of Token

<a id="opIdgetTokenMetadata"></a>

> Code samples

```bash
curl https://example.com/ntp1/tokenmetadata/string \
  -H 'Accept: application/json'
```

`GET /ntp1/tokenmetadata/{tokenid}`

Returns the metadata associated with a token.


<h3 id="get-metadata-of-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|
|verbosity|query|number|false|0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divisibility": 0,
  "firstBlock": 0,
  "initialIssuanceAmount": 0,
  "issuanceTxid": "string",
  "issueAddress": "string",
  "lockStatus": true,
  "metadataOfIssuance": {
    "data": {
      "description": "string",
      "issuer": "string",
      "tokenName": "string",
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "metadataOfUtxo": {
    "userData": {
      "meta": [
        {}
      ]
    }
  },
  "numOfBurns": 0,
  "numOfHolders": 0,
  "numOfIssuance": 0,
  "numOfTransfers": 0,
  "someUtxo": "string",
  "tokenId": "string",
  "totalSupply": 0
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-metadata-of-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the metadata of a token|[getTokenMetadataResponse](#schemagettokenmetadataresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get UTXO Metadata of Token

<a id="opIdgetTokenMetadataOfUtxo"></a>

> Code samples

```bash
curl https://example.com/ntp1/tokenmetadata/string/string \
  -H 'Accept: application/json'
```

`GET /ntp1/tokenmetadata/{tokenid}/{utxo}`

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


<h3 id="get-utxo-metadata-of-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|
|utxo|path|string|true|Specific UTXO to request metadata for|
|verbosity|query|number|false|0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divisibility": 0,
  "firstBlock": 0,
  "initialIssuanceAmount": 0,
  "issuanceTxid": "string",
  "issueAddress": "string",
  "lockStatus": true,
  "metadataOfIssuance": {
    "data": {
      "description": "string",
      "issuer": "string",
      "tokenName": "string",
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "metadataOfUtxo": {
    "userData": {
      "meta": [
        {}
      ]
    }
  },
  "numOfBurns": 0,
  "numOfHolders": 0,
  "numOfIssuance": 0,
  "numOfTransfers": 0,
  "someUtxo": "string",
  "tokenId": "string",
  "totalSupply": 0
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-utxo-metadata-of-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the metadata of a token for a UTXO|[getTokenMetadataResponse](#schemagettokenmetadataresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Information On an NTP1 Transaction

<a id="opIdgetTransactionInfo"></a>

> Code samples

```bash
curl https://example.com/ntp1/transactioninfo/string \
  -H 'Accept: application/json'
```

`GET /ntp1/transactioninfo/{txid}`

Returns detailed information regarding an NTP1 transaction.


<h3 id="information-on-an-ntp1-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Neblio txid to get information on.|

> Example responses

> 200 Response

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "hex": "string",
  "locktime": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "version": 0,
  "vin": [
    {
      "previousOutput": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "value": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="information-on-an-ntp1-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object represending this transaction|[getTransactionInfoResponse](#schemagettransactioninforesponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neblio-rest-api-suite-testnet-faucet">Testnet-Faucet</h1>

## Withdraws testnet NEBL to the specified address

<a id="opIdtestnet_getFaucet"></a>

> Code samples

```bash
curl 'https://example.com/testnet/faucet?address=string' \
  -H 'Accept: application/json'
```

`GET /testnet/faucet`

Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.


<h3 id="withdraws-testnet-nebl-to-the-specified-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|true|Your Neblio Testnet Address|
|amount|query|number|false|Amount of NEBL to withdrawal in satoshis|

> Example responses

> 200 Response

```json
{
  "data": {
    "txId": "string"
  },
  "status": "string"
}
```

<h3 id="withdraws-testnet-nebl-to-the-specified-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing the transaction ID of the withdrawal.|[getFaucetResponse](#schemagetfaucetresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neblio-rest-api-suite-testnet-insight">Testnet-Insight</h1>

## Returns address object

<a id="opIdtestnet_getAddress"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}`

Returns NEBL address object containing information on a specific address

<h3 id="returns-address-object-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
{
  "addrStr": "string",
  "balance": 0,
  "balanceSat": 0,
  "totalReceived": 0,
  "totalReceivedSat": 0,
  "totalSent": 0,
  "totalSentSat": 0,
  "transactions": [
    "string"
  ],
  "txAppearances": 0,
  "unconfirmedBalance": 0,
  "unconfirmedBalanceSat": 0,
  "unconfirmedTxAppearances": 0
}
```

<h3 id="returns-address-object-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing address info|[getAddressResponse](#schemagetaddressresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns address balance in sats

<a id="opIdtestnet_getAddressBalance"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string/balance \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}/balance`

Returns NEBL address balance in satoshis

<h3 id="returns-address-balance-in-sats-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-address-balance-in-sats-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address balance|[getAddressBalanceResponse](#schemagetaddressbalanceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns total received by address in sats

<a id="opIdtestnet_getAddressTotalReceived"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string/totalReceived \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}/totalReceived`

Returns total NEBL received by address in satoshis

<h3 id="returns-total-received-by-address-in-sats-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-total-received-by-address-in-sats-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Total received by address|[getAddressTotalReceivedResponse](#schemagetaddresstotalreceivedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns total sent by address in sats

<a id="opIdtestnet_getAddressTotalSent"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string/totalSent \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}/totalSent`

Returns total NEBL sent by address in satoshis

<h3 id="returns-total-sent-by-address-in-sats-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-total-sent-by-address-in-sats-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Total sent by address|[getAddressTotalSentResponse](#schemagetaddresstotalsentresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns address unconfirmed balance in sats

<a id="opIdtestnet_getAddressUnconfirmedBalance"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string/unconfirmedBalance \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}/unconfirmedBalance`

Returns NEBL address unconfirmed balance in satoshis

<h3 id="returns-address-unconfirmed-balance-in-sats-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
0
```

<h3 id="returns-address-unconfirmed-balance-in-sats-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address unconfirmed balance|[getAddressUnconfirmedBalanceResponse](#schemagetaddressunconfirmedbalanceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all UTXOs at a given address

<a id="opIdtestnet_getAddressUtxos"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/addr/string/utxo \
  -H 'Accept: application/json'
```

`GET /testnet/ins/addr/{address}/utxo`

Returns information on each Unspent Transaction Output contained at an address

<h3 id="returns-all-utxos-at-a-given-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Address|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "amount": 0,
    "confirmations": 0,
    "scriptPubKey": "string",
    "ts": 0,
    "txid": "string",
    "vout": 0
  }
]
```

<h3 id="returns-all-utxos-at-a-given-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|UTXOs at an address|[getAddressUtxosResponse](#schemagetaddressutxosresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns block hash of block

<a id="opIdtestnet_getBlockIndex"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/block-index/0 \
  -H 'Accept: application/json'
```

`GET /testnet/ins/block-index/{blockindex}`

Returns the block hash of a block at a given block index

<h3 id="returns-block-hash-of-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockindex|path|number|true|Block Index|

> Example responses

> 200 Response

```json
{
  "blockHash": "string"
}
```

<h3 id="returns-block-hash-of-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing block hash|[getBlockIndexResponse](#schemagetblockindexresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information regarding a Neblio block

<a id="opIdtestnet_getBlock"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/block/string \
  -H 'Accept: application/json'
```

`GET /testnet/ins/block/{blockhash}`

Returns blockchain data for a given block based upon the block hash

<h3 id="returns-information-regarding-a-neblio-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockhash|path|string|true|Block Hash|

> Example responses

> 200 Response

```json
{
  "bits": "string",
  "confirmations": 0,
  "difficulty": 0,
  "hash": "string",
  "height": 0,
  "merkleroot": "string",
  "nextblockhash": "string",
  "nonce": 0,
  "previousblockhash": "string",
  "reward": 0,
  "size": 0,
  "time": 0,
  "tx": [
    "string"
  ],
  "version": 0
}
```

<h3 id="returns-information-regarding-a-neblio-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing all information on a blockchain block|[getBlockResponse](#schemagetblockresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns raw transaction hex

<a id="opIdtestnet_getRawTx"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/rawtx/string \
  -H 'Accept: application/json'
```

`GET /testnet/ins/rawtx/{txid}`

Returns raw transaction hex representing a NEBL transaction

<h3 id="returns-raw-transaction-hex-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction ID|

> Example responses

> 200 Response

```json
{
  "rawtx": "string"
}
```

<h3 id="returns-raw-transaction-hex-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing raw hex of transaction|[getRawTxResponse](#schemagetrawtxresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Utility API for calling several blockchain node functions

<a id="opIdtestnet_getStatus"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/status \
  -H 'Accept: application/json'
```

`GET /testnet/ins/status`

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

<h3 id="utility-api-for-calling-several-blockchain-node-functions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash|

> Example responses

> 200 Response

```json
{}
```

<h3 id="utility-api-for-calling-several-blockchain-node-functions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function Response|[getStatusResponse](#schemagetstatusresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get node sync status

<a id="opIdtestnet_getSync"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/sync \
  -H 'Accept: application/json'
```

`GET /testnet/ins/sync`

Returns information on the node's sync progress

> Example responses

> 200 Response

```json
{
  "blockChainHeight": 0,
  "error": "string",
  "height": 0,
  "status": "string",
  "syncPercentage": 0,
  "type": "string"
}
```

<h3 id="get-node-sync-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sync Info|[getSyncResponse](#schemagetsyncresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcasts a signed raw transaction to the network (not NTP1 specific)

<a id="opIdtestnet_sendTx"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/tx/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rawtx": "string"
  }'
```

`POST /testnet/ins/tx/send`

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


> Body parameter

```json
{
  "rawtx": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-not-ntp1-specific-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sendTxRequest](#schemasendtxrequest)|true|Object representing a transaction to broadcast|
|» rawtx|body|string|true|Signed raw tx hex to broadcast|

> Example responses

> 200 Response

```json
{
  "txid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-not-ntp1-specific-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the TXID if the broadcast was successful|[broadcastTxResponse](#schemabroadcasttxresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns transaction object

<a id="opIdtestnet_getTx"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/tx/string \
  -H 'Accept: application/json'
```

`GET /testnet/ins/tx/{txid}`

Returns NEBL transaction object representing a NEBL transaction

<h3 id="returns-transaction-object-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction ID|

> Example responses

> 200 Response

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "fees": 0,
  "locktime": 0,
  "size": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "valueIn": 0,
  "valueOut": 0,
  "version": 0,
  "vin": [
    {
      "n": 0,
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "txid": "string",
      "value": 0,
      "valueSat": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

<h3 id="returns-transaction-object-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing transaction info|[getTxResponse](#schemagettxresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transactions by block or address

<a id="opIdtestnet_getTxs"></a>

> Code samples

```bash
curl https://example.com/testnet/ins/txs \
  -H 'Accept: application/json'
```

`GET /testnet/ins/txs`

Returns all transactions by block or address

<h3 id="get-transactions-by-block-or-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|false|Address|
|block|query|string|false|Block Hash|
|pageNum|query|number|false|Page number to display|

> Example responses

> 200 Response

```json
{
  "pagesTotal": 0,
  "txs": [
    {
      "blockhash": "string",
      "blockheight": 0,
      "blocktime": 0,
      "confirmations": 0,
      "fee": 0,
      "fees": 0,
      "locktime": 0,
      "size": 0,
      "time": 0,
      "totalsent": 0,
      "txid": "string",
      "valueIn": 0,
      "valueOut": 0,
      "version": 0,
      "vin": [
        {
          "n": 0,
          "scriptSig": {
            "asm": "string",
            "hex": "string"
          },
          "sequence": 0,
          "txid": "string",
          "value": 0,
          "valueSat": 0,
          "vout": 0
        }
      ],
      "vout": [
        {
          "blockheight": 0,
          "n": 0,
          "scriptPubKey": {
            "addresses": [
              "string"
            ],
            "asm": "string",
            "hex": "string",
            "reqSigs": 0,
            "type": "string"
          },
          "used": true,
          "usedBlockheight": 0,
          "usedTxid": "string",
          "value": 0
        }
      ]
    }
  ]
}
```

<h3 id="get-transactions-by-block-or-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of transactions|[getTxsResponse](#schemagettxsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neblio-rest-api-suite-testnet-ntp1">Testnet-NTP1</h1>

## Information On a Neblio Address

<a id="opIdtestnet_getAddressInfo"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/addressinfo/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/addressinfo/{address}`

Returns both NEBL and NTP1 token UTXOs held at the given address.


<h3 id="information-on-a-neblio-address-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Neblio Address to get information on.|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "utxos": [
    {
      "blockheight": 0,
      "blocktime": 0,
      "index": 0,
      "scriptPubKey": {},
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "used": true,
      "value": 0
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="information-on-a-neblio-address-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with an array of UTXOs for this address|[getAddressInfoResponse](#schemagetaddressinforesponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcasts a signed raw transaction to the network

<a id="opIdtestnet_broadcastTx"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/broadcast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "txHex": "string"
  }'
```

`POST /testnet/ntp1/broadcast`

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


> Body parameter

```json
{
  "txHex": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[broadcastTxRequest](#schemabroadcasttxrequest)|true|Object representing a transaction to broadcast|
|» txHex|body|string|true|Signed raw tx hex to broadcast|

> Example responses

> 200 Response

```json
{
  "txid": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="broadcasts-a-signed-raw-transaction-to-the-network-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the TXID if the broadcast was successful|[broadcastTxResponse](#schemabroadcasttxresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that burns an NTP1 Token

<a id="opIdtestnet_burnToken"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/burntoken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "burn": [
      {
        "amount": 0,
        "tokenId": "string"
      }
    ],
    "fee": 0,
    "from": [
      "string"
    ],
    "transfer": [
      {
        "address": "string",
        "amount": 0,
        "tokenId": "string"
      }
    ]
  }'
```

`POST /testnet/ntp1/burntoken`

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "burn": [
    {
      "amount": 0,
      "tokenId": "string"
    }
  ],
  "fee": 0,
  "from": [
    "string"
  ],
  "transfer": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

<h3 id="builds-a-transaction-that-burns-an-ntp1-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[burnTokenRequest](#schemaburntokenrequest)|true|Object representing the token to be burned|
|» burn|body|[object]|true|Array of objects representing tokens to be burned|
|» » amount|body|number|false|Amount of tokens to burn|
|» » tokenId|body|string|false|Unique token id we are burning|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|» from|body|[string]|false|Array of addresses to send the token from|
|» transfer|body|[object]|false|none|
|» » address|body|string|false|Address to transfer tokens to|
|» » amount|body|number|false|Number of tokens to send|
|» » tokenId|body|string|false|ID of token we are sending|

> Example responses

> 200 Response

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-burns-an-ntp1-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the tx to burn the token|[burnTokenResponse](#schemaburntokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that issues a new NTP1 Token

<a id="opIdtestnet_issueToken"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/issue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": 0,
    "divisibility": 0,
    "fee": 0,
    "flags": {
      "splitChange": true
    },
    "issueAddress": "string",
    "metadata": {
      "description": "string",
      "encryptions": [
        {
          "format": "string",
          "key": "string",
          "pubkey": "string",
          "type": "string"
        }
      ],
      "issuer": "string",
      "rules": {
        "expiration": {
          "locked": true,
          "validUntil": 0
        },
        "fees": {
          "items": [
            {
              "address": "string",
              "tokenId": "string",
              "value": "string"
            }
          ],
          "locked": true
        },
        "holders": [
          {
            "address": "string",
            "locked": true
          }
        ]
      },
      "tokenName": "string",
      "urls": [
        {
          "dataHash": "string",
          "mimeType": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "reissuable": true,
    "transfer": [
      {
        "address": "string",
        "amount": 0
      }
    ]
  }'
```

`POST /testnet/ntp1/issue`

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "amount": 0,
  "divisibility": 0,
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "issueAddress": "string",
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "reissuable": true,
  "transfer": [
    {
      "address": "string",
      "amount": 0
    }
  ]
}
```

<h3 id="builds-a-transaction-that-issues-a-new-ntp1-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[issueTokenRequest](#schemaissuetokenrequest)|true|Object representing the token to be created|
|» amount|body|number|true|Number of tokens to issue|
|» divisibility|body|number|true|Number of decimal places the token should be divisble by (0-7)|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)|
|» flags|body|object|false|Object representing flags that potentialy modify this transaction|
|» » splitChange|body|boolean|false|If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)|
|» issueAddress|body|string|true|Address issuing the token|
|» metadata|body|object|false|Object representing all metadata at token issuance|
|» » description|body|string|false|Long name or description of token (ex. Nibble)|
|» » encryptions|body|[object]|false|Array of encryption instruction objects for encrypting userData|
|» » » format|body|string|false|key format (pem or der)|
|» » » key|body|string|false|userData key to encrypt|
|» » » pubkey|body|string|false|RSA public key used for encryption|
|» » » type|body|string|false|pkcs1 or pkcs8|
|» » issuer|body|string|false|Name of token issuer|
|» » rules|body|object|false|Object describing token rules|
|» » » expiration|body|object|false|Object describing expiration rules of the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » » validUntil|body|number|false|Blockheight at wh|
|» » » fees|body|object|false|none|
|» » » » items|body|[object]|false|Array of objects describing fee rules|
|» » » » » address|body|string|false|Address fee is auto sent to|
|» » » » » tokenId|body|string|false|How fee should be paid, either with a tokenId, or with NEBL if null|
|» » » » » value|body|string|false|Amount of NTP1 token, or NEBL (in satoshi) to pay as fee|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » holders|body|[object]|false|Array of objects describing what addresses can hold the token|
|» » » » address|body|string|false|Address that can hold the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » tokenName|body|string|false|Token Symbol it will be identified by (ex. NIBBL)|
|» » urls|body|[object]|false|none|
|» » » dataHash|body|string|false|Hash of data at the URL, used for verification|
|» » » mimeType|body|string|false|mimeType of URL content|
|» » » name|body|string|false|Name of the URL|
|» » » url|body|string|false|Actual URL|
|» » userData|body|object|false|Metadata set by user on token|
|» » » meta|body|[object]|false|none|
|» » » » key|body|string|false|none|
|» » » » value|body|string|false|none|
|» reissuable|body|boolean|true|whether the token should be reissuable|
|» transfer|body|[object]|true|none|
|» » address|body|string|false|Address to send the amount of issued tokens to|
|» » amount|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "tokenId": "string",
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-issues-a-new-ntp1-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the token created|[issueTokenResponse](#schemaissuetokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Builds a transaction that sends an NTP1 Token

<a id="opIdtestnet_sendToken"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/sendtoken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fee": 0,
    "flags": {
      "splitChange": true
    },
    "from": [
      "string"
    ],
    "metadata": {
      "description": "string",
      "encryptions": [
        {
          "format": "string",
          "key": "string",
          "pubkey": "string",
          "type": "string"
        }
      ],
      "issuer": "string",
      "rules": {
        "expiration": {
          "locked": true,
          "validUntil": 0
        },
        "fees": {
          "items": [
            {
              "address": "string",
              "tokenId": "string",
              "value": "string"
            }
          ],
          "locked": true
        },
        "holders": [
          {
            "address": "string",
            "locked": true
          }
        ]
      },
      "tokenName": "string",
      "urls": [
        {
          "dataHash": "string",
          "mimeType": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    },
    "sendutxo": [
      "string"
    ],
    "to": [
      {
        "address": "string",
        "amount": 0,
        "tokenId": "string"
      }
    ]
  }'
```

`POST /testnet/ntp1/sendtoken`

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


> Body parameter

```json
{
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "from": [
    "string"
  ],
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "sendutxo": [
    "string"
  ],
  "to": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

<h3 id="builds-a-transaction-that-sends-an-ntp1-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sendTokenRequest](#schemasendtokenrequest)|true|Object representing the token to be sent|
|» fee|body|number|true|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|» flags|body|object|false|Object representing flags that potentialy modify this transaction|
|» » splitChange|body|boolean|false|If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)|
|» from|body|[string]|false|Array of addresses to send the token from|
|» metadata|body|object|false|Object representing all metadata at token issuance|
|» » description|body|string|false|Long name or description of token (ex. Nibble)|
|» » encryptions|body|[object]|false|Array of encryption instruction objects for encrypting userData|
|» » » format|body|string|false|key format (pem or der)|
|» » » key|body|string|false|userData key to encrypt|
|» » » pubkey|body|string|false|RSA public key used for encryption|
|» » » type|body|string|false|pkcs1 or pkcs8|
|» » issuer|body|string|false|Name of token issuer|
|» » rules|body|object|false|Object describing token rules|
|» » » expiration|body|object|false|Object describing expiration rules of the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » » validUntil|body|number|false|Blockheight at wh|
|» » » fees|body|object|false|none|
|» » » » items|body|[object]|false|Array of objects describing fee rules|
|» » » » » address|body|string|false|Address fee is auto sent to|
|» » » » » tokenId|body|string|false|How fee should be paid, either with a tokenId, or with NEBL if null|
|» » » » » value|body|string|false|Amount of NTP1 token, or NEBL (in satoshi) to pay as fee|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » » holders|body|[object]|false|Array of objects describing what addresses can hold the token|
|» » » » address|body|string|false|Address that can hold the token|
|» » » » locked|body|boolean|false|Whether this rule can be modified in future transactions|
|» » tokenName|body|string|false|Token Symbol it will be identified by (ex. NIBBL)|
|» » urls|body|[object]|false|none|
|» » » dataHash|body|string|false|Hash of data at the URL, used for verification|
|» » » mimeType|body|string|false|mimeType of URL content|
|» » » name|body|string|false|Name of the URL|
|» » » url|body|string|false|Actual URL|
|» » userData|body|object|false|Metadata set by user on token|
|» » » meta|body|[object]|false|none|
|» » » » key|body|string|false|none|
|» » » » value|body|string|false|none|
|» sendutxo|body|[string]|false|Array of UTXOs to send the token from|
|» to|body|[object]|true|none|
|» » address|body|string|false|Address to transfer tokens to|
|» » amount|body|number|false|Number of tokens to send|
|» » tokenId|body|string|false|ID of token we are sending|

> Example responses

> 200 Response

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="builds-a-transaction-that-sends-an-ntp1-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object representing the tx to send the token|[sendTokenResponse](#schemasendtokenresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Addresses Holding a Token

<a id="opIdtestnet_getTokenHolders"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/stakeholders/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/stakeholders/{tokenid}`

Returns the the the addresses holding a token and how many tokens are held


<h3 id="get-addresses-holding-a-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divibility": 0,
  "holders": [
    {
      "address": "string",
      "amount": 0
    }
  ],
  "lockStatus": true,
  "someUtxo": "string",
  "tokenId": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-addresses-holding-a-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing all of the addresses holding a token|[getTokenHoldersResponse](#schemagettokenholdersresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the tokenId representing a token

<a id="opIdtestnet_getTokenId"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/tokenid/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/tokenid/{tokensymbol}`

Translates a token symbol to a tokenId if a token exists with that symbol on the network


<h3 id="returns-the-tokenid-representing-a-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokensymbol|path|string|true|Token symbol|

> Example responses

> 200 Response

```json
{
  "tokenId": "string",
  "tokenName": "string"
}
```

<h3 id="returns-the-tokenid-representing-a-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.|[getTokenIdResponse](#schemagettokenidresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Metadata of Token

<a id="opIdtestnet_getTokenMetadata"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/tokenmetadata/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/tokenmetadata/{tokenid}`

Returns the metadata associated with a token.


<h3 id="get-metadata-of-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|
|verbosity|query|number|false|0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divisibility": 0,
  "firstBlock": 0,
  "initialIssuanceAmount": 0,
  "issuanceTxid": "string",
  "issueAddress": "string",
  "lockStatus": true,
  "metadataOfIssuance": {
    "data": {
      "description": "string",
      "issuer": "string",
      "tokenName": "string",
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "metadataOfUtxo": {
    "userData": {
      "meta": [
        {}
      ]
    }
  },
  "numOfBurns": 0,
  "numOfHolders": 0,
  "numOfIssuance": 0,
  "numOfTransfers": 0,
  "someUtxo": "string",
  "tokenId": "string",
  "totalSupply": 0
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-metadata-of-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the metadata of a token|[getTokenMetadataResponse](#schemagettokenmetadataresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get UTXO Metadata of Token

<a id="opIdtestnet_getTokenMetadataOfUtxo"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/tokenmetadata/string/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/tokenmetadata/{tokenid}/{utxo}`

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


<h3 id="get-utxo-metadata-of-token-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenid|path|string|true|TokenId to request metadata for|
|utxo|path|string|true|Specific UTXO to request metadata for|
|verbosity|query|number|false|0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses|

> Example responses

> 200 Response

```json
{
  "aggregationPolicy": "string",
  "divisibility": 0,
  "firstBlock": 0,
  "initialIssuanceAmount": 0,
  "issuanceTxid": "string",
  "issueAddress": "string",
  "lockStatus": true,
  "metadataOfIssuance": {
    "data": {
      "description": "string",
      "issuer": "string",
      "tokenName": "string",
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "metadataOfUtxo": {
    "userData": {
      "meta": [
        {}
      ]
    }
  },
  "numOfBurns": 0,
  "numOfHolders": 0,
  "numOfIssuance": 0,
  "numOfTransfers": 0,
  "someUtxo": "string",
  "tokenId": "string",
  "totalSupply": 0
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="get-utxo-metadata-of-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing the metadata of a token for a UTXO|[getTokenMetadataResponse](#schemagettokenmetadataresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Information On an NTP1 Transaction

<a id="opIdtestnet_getTransactionInfo"></a>

> Code samples

```bash
curl https://example.com/testnet/ntp1/transactioninfo/string \
  -H 'Accept: application/json'
```

`GET /testnet/ntp1/transactioninfo/{txid}`

Returns detailed information regarding an NTP1 transaction.


<h3 id="information-on-an-ntp1-transaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Neblio txid to get information on.|

> Example responses

> 200 Response

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "hex": "string",
  "locktime": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "version": 0,
  "vin": [
    {
      "previousOutput": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "value": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

<h3 id="information-on-an-ntp1-transaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object represending this transaction|[getTransactionInfoResponse](#schemagettransactioninforesponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "fields": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|fields|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_broadcastTxRequest">broadcastTxRequest</h2>
<!-- backwards compatibility -->
<a id="schemabroadcasttxrequest"></a>
<a id="schema_broadcastTxRequest"></a>
<a id="tocSbroadcasttxrequest"></a>
<a id="tocsbroadcasttxrequest"></a>

```json
{
  "txHex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txHex|string|true|none|Signed raw tx hex to broadcast|

<h2 id="tocS_broadcastTxResponse">broadcastTxResponse</h2>
<!-- backwards compatibility -->
<a id="schemabroadcasttxresponse"></a>
<a id="schema_broadcastTxResponse"></a>
<a id="tocSbroadcasttxresponse"></a>
<a id="tocsbroadcasttxresponse"></a>

```json
{
  "txid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|false|none|Txid of successfully broadcasted transaction|

<h2 id="tocS_burnTokenRequest">burnTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaburntokenrequest"></a>
<a id="schema_burnTokenRequest"></a>
<a id="tocSburntokenrequest"></a>
<a id="tocsburntokenrequest"></a>

```json
{
  "burn": [
    {
      "amount": 0,
      "tokenId": "string"
    }
  ],
  "fee": 0,
  "from": [
    "string"
  ],
  "transfer": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|burn|[object]|true|none|Array of objects representing tokens to be burned|
|fee|number|true|none|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|from|[string]|false|none|Array of addresses to send the token from|
|transfer|[object]|false|none|none|

<h2 id="tocS_burnTokenResponse">burnTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaburntokenresponse"></a>
<a id="schema_burnTokenResponse"></a>
<a id="tocSburntokenresponse"></a>
<a id="tocsburntokenresponse"></a>

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multisigOutputs|[number]|false|none|Array of indexes of multisig outputs|
|ntp1OutputIndexes|[number]|false|none|Array of indexes transfering NTP1 tokens|
|txHex|string|false|none|Unsigned, raw transaction hex of the transaction to burn the token|

<h2 id="tocS_getAddressBalanceResponse">getAddressBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressbalanceresponse"></a>
<a id="schema_getAddressBalanceResponse"></a>
<a id="tocSgetaddressbalanceresponse"></a>
<a id="tocsgetaddressbalanceresponse"></a>

```json
0
```

Address balance in satoshis

<h2 id="tocS_getAddressInfoResponse">getAddressInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressinforesponse"></a>
<a id="schema_getAddressInfoResponse"></a>
<a id="tocSgetaddressinforesponse"></a>
<a id="tocsgetaddressinforesponse"></a>

```json
{
  "address": "string",
  "utxos": [
    {
      "blockheight": 0,
      "blocktime": 0,
      "index": 0,
      "scriptPubKey": {},
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "used": true,
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The Neblio Address|
|utxos|[object]|false|none|Array of UTXOs held at this address.|

<h2 id="tocS_getAddressResponse">getAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressresponse"></a>
<a id="schema_getAddressResponse"></a>
<a id="tocSgetaddressresponse"></a>
<a id="tocsgetaddressresponse"></a>

```json
{
  "addrStr": "string",
  "balance": 0,
  "balanceSat": 0,
  "totalReceived": 0,
  "totalReceivedSat": 0,
  "totalSent": 0,
  "totalSentSat": 0,
  "transactions": [
    "string"
  ],
  "txAppearances": 0,
  "unconfirmedBalance": 0,
  "unconfirmedBalanceSat": 0,
  "unconfirmedTxAppearances": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addrStr|string|false|none|Address in string form|
|balance|number|false|none|NEBL balance|
|balanceSat|number|false|none|NEBL balance in satoshis|
|totalReceived|number|false|none|Total NEBL received|
|totalReceivedSat|number|false|none|Total NEBL received in satoshis|
|totalSent|number|false|none|Total NEBL sent|
|totalSentSat|number|false|none|Total NEBL sent satoshis|
|transactions|[string]|false|none|Array of transaction ids for this address|
|txAppearances|number|false|none|Number of transactions for this address|
|unconfirmedBalance|number|false|none|Unconfirmed NEBL balance|
|unconfirmedBalanceSat|number|false|none|Unconfirmed NEBL balance in satoshis|
|unconfirmedTxAppearances|number|false|none|Number of unconfirmed transactions for this address|

<h2 id="tocS_getAddressTotalReceivedResponse">getAddressTotalReceivedResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddresstotalreceivedresponse"></a>
<a id="schema_getAddressTotalReceivedResponse"></a>
<a id="tocSgetaddresstotalreceivedresponse"></a>
<a id="tocsgetaddresstotalreceivedresponse"></a>

```json
0
```

Address total received in satoshis

<h2 id="tocS_getAddressTotalSentResponse">getAddressTotalSentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddresstotalsentresponse"></a>
<a id="schema_getAddressTotalSentResponse"></a>
<a id="tocSgetaddresstotalsentresponse"></a>
<a id="tocsgetaddresstotalsentresponse"></a>

```json
0
```

Address total sent in satoshis

<h2 id="tocS_getAddressUnconfirmedBalanceResponse">getAddressUnconfirmedBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressunconfirmedbalanceresponse"></a>
<a id="schema_getAddressUnconfirmedBalanceResponse"></a>
<a id="tocSgetaddressunconfirmedbalanceresponse"></a>
<a id="tocsgetaddressunconfirmedbalanceresponse"></a>

```json
0
```

Address unconfirmed balance in satoshis

<h2 id="tocS_getAddressUtxosResponse">getAddressUtxosResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressutxosresponse"></a>
<a id="schema_getAddressUtxosResponse"></a>
<a id="tocSgetaddressutxosresponse"></a>
<a id="tocsgetaddressutxosresponse"></a>

```json
[
  {
    "address": "string",
    "amount": 0,
    "confirmations": 0,
    "scriptPubKey": "string",
    "ts": 0,
    "txid": "string",
    "vout": 0
  }
]
```

Array of objects representing this address' UTXOs

<h2 id="tocS_getBlockIndexResponse">getBlockIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetblockindexresponse"></a>
<a id="schema_getBlockIndexResponse"></a>
<a id="tocSgetblockindexresponse"></a>
<a id="tocsgetblockindexresponse"></a>

```json
{
  "blockHash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockHash|string|false|none|Hash of the requested block|

<h2 id="tocS_getBlockResponse">getBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetblockresponse"></a>
<a id="schema_getBlockResponse"></a>
<a id="tocSgetblockresponse"></a>
<a id="tocsgetblockresponse"></a>

```json
{
  "bits": "string",
  "confirmations": 0,
  "difficulty": 0,
  "hash": "string",
  "height": 0,
  "merkleroot": "string",
  "nextblockhash": "string",
  "nonce": 0,
  "previousblockhash": "string",
  "reward": 0,
  "size": 0,
  "time": 0,
  "tx": [
    "string"
  ],
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bits|string|false|none|Block bits|
|confirmations|number|false|none|Number of confirmations block has|
|difficulty|number|false|none|Block difficulty|
|hash|string|false|none|Block hash|
|height|number|false|none|Block height|
|merkleroot|string|false|none|Merkleroot of block|
|nextblockhash|string|false|none|Hash of the next block on the chain|
|nonce|number|false|none|Block nonce|
|previousblockhash|string|false|none|Hash of the previous block on the chain|
|reward|number|false|none|Number of NEBL awarded in this block|
|size|number|false|none|Block size in bytes|
|time|number|false|none|Block time relative to epoch|
|tx|[string]|false|none|Array of tx ids in the block|
|version|number|false|none|Block version|

<h2 id="tocS_getFaucetResponse">getFaucetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfaucetresponse"></a>
<a id="schema_getFaucetResponse"></a>
<a id="tocSgetfaucetresponse"></a>
<a id="tocsgetfaucetresponse"></a>

```json
{
  "data": {
    "txId": "string"
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|status|string|false|none|Whether the withdrawal was successful|

<h2 id="tocS_getRawTxResponse">getRawTxResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrawtxresponse"></a>
<a id="schema_getRawTxResponse"></a>
<a id="tocSgetrawtxresponse"></a>
<a id="tocsgetrawtxresponse"></a>

```json
{
  "rawtx": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawtx|string|false|none|Raw hex representing the transaction|

<h2 id="tocS_getStatusResponse">getStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstatusresponse"></a>
<a id="schema_getStatusResponse"></a>
<a id="tocSgetstatusresponse"></a>
<a id="tocsgetstatusresponse"></a>

```json
{}
```

Depending on the function called, the structure and information contained in this object will vary

<h2 id="tocS_getSyncResponse">getSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsyncresponse"></a>
<a id="schema_getSyncResponse"></a>
<a id="tocSgetsyncresponse"></a>
<a id="tocsgetsyncresponse"></a>

```json
{
  "blockChainHeight": 0,
  "error": "string",
  "height": 0,
  "status": "string",
  "syncPercentage": 0,
  "type": "string"
}
```

Object containing node sync status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockChainHeight|number|false|none|Current blockchain height|
|error|string|false|none|Recent sync error messages|
|height|number|false|none|Height node is synced to|
|status|string|false|none|Current sync status|
|syncPercentage|number|false|none|Current sync percentage|
|type|string|false|none|Node type|

<h2 id="tocS_getTokenHoldersResponse">getTokenHoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettokenholdersresponse"></a>
<a id="schema_getTokenHoldersResponse"></a>
<a id="tocSgettokenholdersresponse"></a>
<a id="tocsgettokenholdersresponse"></a>

```json
{
  "aggregationPolicy": "string",
  "divibility": 0,
  "holders": [
    {
      "address": "string",
      "amount": 0
    }
  ],
  "lockStatus": true,
  "someUtxo": "string",
  "tokenId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationPolicy|string|false|none|Whether the tokesn are aggregatable|
|divibility|number|false|none|How many decimal points the token is divisble to|
|holders|[object]|false|none|none|
|lockStatus|boolean|false|none|Whether new issuances of this token are locked|
|someUtxo|string|false|none|A UTXO of this token|
|tokenId|string|false|none|TokenId of the token|

<h2 id="tocS_getTokenIdResponse">getTokenIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettokenidresponse"></a>
<a id="schema_getTokenIdResponse"></a>
<a id="tocSgettokenidresponse"></a>
<a id="tocsgettokenidresponse"></a>

```json
{
  "tokenId": "string",
  "tokenName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenId|string|false|none|Unique ID of the token|
|tokenName|string|false|none|String representing the token Symbol|

<h2 id="tocS_getTokenMetadataResponse">getTokenMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettokenmetadataresponse"></a>
<a id="schema_getTokenMetadataResponse"></a>
<a id="tocSgettokenmetadataresponse"></a>
<a id="tocsgettokenmetadataresponse"></a>

```json
{
  "aggregationPolicy": "string",
  "divisibility": 0,
  "firstBlock": 0,
  "initialIssuanceAmount": 0,
  "issuanceTxid": "string",
  "issueAddress": "string",
  "lockStatus": true,
  "metadataOfIssuance": {
    "data": {
      "description": "string",
      "issuer": "string",
      "tokenName": "string",
      "userData": {
        "meta": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "metadataOfUtxo": {
    "userData": {
      "meta": [
        {}
      ]
    }
  },
  "numOfBurns": 0,
  "numOfHolders": 0,
  "numOfIssuance": 0,
  "numOfTransfers": 0,
  "someUtxo": "string",
  "tokenId": "string",
  "totalSupply": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationPolicy|string|false|none|Whether the tokens are aggregatable|
|divisibility|number|false|none|Decimal places the token is divisible to|
|firstBlock|number|false|none|Block number token was issued in|
|initialIssuanceAmount|number|false|none|Total tokens issued in initial issuance|
|issuanceTxid|string|false|none|TXID the token was issued with|
|issueAddress|string|false|none|Address that issued the tokens|
|lockStatus|boolean|false|none|Whether issuance of more tokens is locked|
|metadataOfIssuance|object|false|none|Metadata set at issuance|
|metadataOfUtxo|object|false|none|Metadata set for UTXO|
|numOfBurns|number|false|none|Number of times tokens have been burned|
|numOfHolders|number|false|none|Total number of addresses this token is held at|
|numOfIssuance|number|false|none|Total number of times this token has been issued|
|numOfTransfers|number|false|none|Total number of transactions of this token|
|someUtxo|string|false|none|Example UTXO containing this token.|
|tokenId|string|false|none|ID of the token|
|totalSupply|number|false|none|Total number of tokens in supply|

<h2 id="tocS_getTransactionInfoResponse">getTransactionInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransactioninforesponse"></a>
<a id="schema_getTransactionInfoResponse"></a>
<a id="tocSgettransactioninforesponse"></a>
<a id="tocsgettransactioninforesponse"></a>

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "hex": "string",
  "locktime": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "version": 0,
  "vin": [
    {
      "previousOutput": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "txid": "string",
      "value": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "tokens": [
        {
          "aggregationPolicy": "string",
          "amount": 0,
          "divisibility": 0,
          "issueTxid": "string",
          "lockStatus": true,
          "tokenId": "string"
        }
      ],
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|false|none|Hash of the block this transaction is in|
|blockheight|number|false|none|Block height of this transaction|
|blocktime|number|false|none|Block time of this transaction|
|confirmations|number|false|none|Number of transaction confirmations|
|fee|number|false|none|Total NEBL used as fee for this transcation in satoshis|
|hex|string|false|none|Transaction in raw hex|
|locktime|number|false|none|Transaction locktime|
|time|number|false|none|Transaction time|
|totalsent|number|false|none|Total NEBL sent in this transaction in satoshis|
|txid|string|false|none|TXID of transaction|
|version|number|false|none|Transaction version|
|vin|[object]|false|none|Array of transaction inputs|
|vout|[object]|false|none|Array of transaction outputs|

<h2 id="tocS_getTxResponse">getTxResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettxresponse"></a>
<a id="schema_getTxResponse"></a>
<a id="tocSgettxresponse"></a>
<a id="tocsgettxresponse"></a>

```json
{
  "blockhash": "string",
  "blockheight": 0,
  "blocktime": 0,
  "confirmations": 0,
  "fee": 0,
  "fees": 0,
  "locktime": 0,
  "size": 0,
  "time": 0,
  "totalsent": 0,
  "txid": "string",
  "valueIn": 0,
  "valueOut": 0,
  "version": 0,
  "vin": [
    {
      "n": 0,
      "scriptSig": {
        "asm": "string",
        "hex": "string"
      },
      "sequence": 0,
      "txid": "string",
      "value": 0,
      "valueSat": 0,
      "vout": 0
    }
  ],
  "vout": [
    {
      "blockheight": 0,
      "n": 0,
      "scriptPubKey": {
        "addresses": [
          "string"
        ],
        "asm": "string",
        "hex": "string",
        "reqSigs": 0,
        "type": "string"
      },
      "used": true,
      "usedBlockheight": 0,
      "usedTxid": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|false|none|Hash of the block this transaction is in|
|blockheight|number|false|none|Block height of this transaction|
|blocktime|number|false|none|Block time of this transaction|
|confirmations|number|false|none|Number of transaction confirmations|
|fee|number|false|none|Total NEBL used as fee for this transcation in satoshis|
|fees|number|false|none|Total NEBL used in fees for this transaction|
|locktime|number|false|none|Transaction locktime|
|size|number|false|none|Transcation size in bytes|
|time|number|false|none|Transaction time|
|totalsent|number|false|none|Total NEBL sent in this transaction in satoshis|
|txid|string|false|none|TXID of transaction|
|valueIn|number|false|none|Total NEBL input in this transaction|
|valueOut|number|false|none|Total NEBL output in this transaction|
|version|number|false|none|Transaction version|
|vin|[object]|false|none|Array of transaction inputs|
|vout|[object]|false|none|Array of transaction outputs|

<h2 id="tocS_getTxsResponse">getTxsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettxsresponse"></a>
<a id="schema_getTxsResponse"></a>
<a id="tocSgettxsresponse"></a>
<a id="tocsgettxsresponse"></a>

```json
{
  "pagesTotal": 0,
  "txs": [
    {
      "blockhash": "string",
      "blockheight": 0,
      "blocktime": 0,
      "confirmations": 0,
      "fee": 0,
      "fees": 0,
      "locktime": 0,
      "size": 0,
      "time": 0,
      "totalsent": 0,
      "txid": "string",
      "valueIn": 0,
      "valueOut": 0,
      "version": 0,
      "vin": [
        {
          "n": 0,
          "scriptSig": {
            "asm": "string",
            "hex": "string"
          },
          "sequence": 0,
          "txid": "string",
          "value": 0,
          "valueSat": 0,
          "vout": 0
        }
      ],
      "vout": [
        {
          "blockheight": 0,
          "n": 0,
          "scriptPubKey": {
            "addresses": [
              "string"
            ],
            "asm": "string",
            "hex": "string",
            "reqSigs": 0,
            "type": "string"
          },
          "used": true,
          "usedBlockheight": 0,
          "usedTxid": "string",
          "value": 0
        }
      ]
    }
  ]
}
```

Object containing an array of transaction objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagesTotal|number|false|none|Number of pages of transactions|
|txs|[[getTxResponse](#schemagettxresponse)]|false|none|Array of transaction objects|

<h2 id="tocS_issueTokenRequest">issueTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuetokenrequest"></a>
<a id="schema_issueTokenRequest"></a>
<a id="tocSissuetokenrequest"></a>
<a id="tocsissuetokenrequest"></a>

```json
{
  "amount": 0,
  "divisibility": 0,
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "issueAddress": "string",
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "reissuable": true,
  "transfer": [
    {
      "address": "string",
      "amount": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|Number of tokens to issue|
|divisibility|number|true|none|Number of decimal places the token should be divisble by (0-7)|
|fee|number|true|none|Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)|
|flags|object|false|none|Object representing flags that potentialy modify this transaction|
|issueAddress|string|true|none|Address issuing the token|
|metadata|object|false|none|Object representing all metadata at token issuance|
|reissuable|boolean|true|none|whether the token should be reissuable|
|transfer|[object]|true|none|none|

<h2 id="tocS_issueTokenResponse">issueTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuetokenresponse"></a>
<a id="schema_issueTokenResponse"></a>
<a id="tocSissuetokenresponse"></a>
<a id="tocsissuetokenresponse"></a>

```json
{
  "tokenId": "string",
  "txHex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenId|string|false|none|TokenId of the to be issued token|
|txHex|string|false|none|Unsigned, raw transaction hex of the transaction to issue the token|

<h2 id="tocS_rpcRequest">rpcRequest</h2>
<!-- backwards compatibility -->
<a id="schemarpcrequest"></a>
<a id="schema_rpcRequest"></a>
<a id="tocSrpcrequest"></a>
<a id="tocsrpcrequest"></a>

```json
{
  "id": "neblio-apis",
  "jsonrpc": "1.0",
  "method": "getstakinginfo",
  "params": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Identifier of RCP caller|
|jsonrpc|string|true|none|JSON-RPC version|
|method|string|true|none|Name of the Neblio RPC method to call|
|params|[string]|true|none|Array of string params that should be passed to the RPC method.|

<h2 id="tocS_rpcResponse">rpcResponse</h2>
<!-- backwards compatibility -->
<a id="schemarpcresponse"></a>
<a id="schema_rpcResponse"></a>
<a id="tocSrpcresponse"></a>
<a id="tocsrpcresponse"></a>

```json
{
  "error": {},
  "id": "string",
  "result": {}
}
```

Object containing the JSON response from the Neblio node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|Object containing any error information.|
|id|string|false|none|Identifier of RCP caller|
|result|object|false|none|Object containing the response output.|

<h2 id="tocS_sendTokenRequest">sendTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendtokenrequest"></a>
<a id="schema_sendTokenRequest"></a>
<a id="tocSsendtokenrequest"></a>
<a id="tocssendtokenrequest"></a>

```json
{
  "fee": 0,
  "flags": {
    "splitChange": true
  },
  "from": [
    "string"
  ],
  "metadata": {
    "description": "string",
    "encryptions": [
      {
        "format": "string",
        "key": "string",
        "pubkey": "string",
        "type": "string"
      }
    ],
    "issuer": "string",
    "rules": {
      "expiration": {
        "locked": true,
        "validUntil": 0
      },
      "fees": {
        "items": [
          {
            "address": "string",
            "tokenId": "string",
            "value": "string"
          }
        ],
        "locked": true
      },
      "holders": [
        {
          "address": "string",
          "locked": true
        }
      ]
    },
    "tokenName": "string",
    "urls": [
      {
        "dataHash": "string",
        "mimeType": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "userData": {
      "meta": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  },
  "sendutxo": [
    "string"
  ],
  "to": [
    {
      "address": "string",
      "amount": 0,
      "tokenId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fee|number|true|none|Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)|
|flags|object|false|none|Object representing flags that potentialy modify this transaction|
|from|[string]|false|none|Array of addresses to send the token from|
|metadata|object|false|none|Object representing all metadata at token issuance|
|sendutxo|[string]|false|none|Array of UTXOs to send the token from|
|to|[object]|true|none|none|

<h2 id="tocS_sendTokenResponse">sendTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendtokenresponse"></a>
<a id="schema_sendTokenResponse"></a>
<a id="tocSsendtokenresponse"></a>
<a id="tocssendtokenresponse"></a>

```json
{
  "multisigOutputs": [
    0
  ],
  "ntp1OutputIndexes": [
    0
  ],
  "txHex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multisigOutputs|[number]|false|none|Array of indexes of multisig outputs|
|ntp1OutputIndexes|[number]|false|none|Array of indexes transfering NTP1 tokens|
|txHex|string|false|none|Unsigned, raw transaction hex of the transaction to send the token|

<h2 id="tocS_sendTxRequest">sendTxRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendtxrequest"></a>
<a id="schema_sendTxRequest"></a>
<a id="tocSsendtxrequest"></a>
<a id="tocssendtxrequest"></a>

```json
{
  "rawtx": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawtx|string|true|none|Signed raw tx hex to broadcast|
