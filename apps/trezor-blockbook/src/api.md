<h1 id="blockbook-api">Blockbook API v2.0.0-draft</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

REST and WebSocket API for indexed blockchain data served by Blockbook.

Canonical description of the Blockbook public API, based on
blockbook-api.ts, api/xpub.go, and the api/server handlers.

API V2 is the current Blockbook API. It is available over REST and over
WebSocket using the WsRequest/WsResponse JSON envelope documented below.
The normalized API shapes are shared by all supported coins, while
blockchain-specific payloads remain extensible where Blockbook returns raw
backend JSON.

Amounts are strings in the lowest denomination of the chain, such as
satoshis or wei, without a decimal point. Empty fields are omitted: empty
means null, an empty string, numeric zero, a null object, or an empty array.
Since the same API serves many different chains, this can sometimes hide
otherwise meaningful zero values such as transaction version 0.

Legacy API V1 is a Bitcore Insight-compatible subset for Bitcoin-type
coins. It is provided as-is for compatibility and is not being extended.

Load estimates are qualitative hints for client authors. Low means a small
constant-time lookup or cached metadata. Medium means bounded indexed work
or response size. High means potentially large scans, large payloads,
broadcast/backend work, or external RPC enrichment. Actual cost also
depends on chain speed, backend health, cache warmth, mempool size,
pageSize, gap, and the number of addresses, transactions, tokens, filters,
or timestamps involved.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a> - Current Blockbook instance

License: GNU Affero General Public License v3.0

<h1 id="blockbook-api-status">Status</h1>

Blockbook and backend status.

## Get Blockbook and backend status.

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl http://localhost:9130/api/status \
  -H 'Accept: application/json'
```

`GET /api/status`

Returns Blockbook sync state and connected backend metadata.

Load estimate: Low; constant-size status metadata.

> Example responses

> 200 Response

```json
{
  "blockbook": {
    "coin": "Bitcoin",
    "network": "BTC",
    "host": "backend5",
    "version": "0.5.1",
    "gitCommit": "a0960c8e",
    "buildTime": "2024-08-08T12:32:50+00:00",
    "syncMode": true,
    "initialSync": false,
    "inSync": true,
    "bestHeight": 860730,
    "lastBlockTime": "2024-09-10T08:19:04.471017534Z",
    "inSyncMempool": true,
    "lastMempoolTime": "2024-09-10T08:42:39.38871351Z",
    "mempoolSize": 232021,
    "decimals": 8,
    "dbSize": 761283489075,
    "hasFiatRates": true,
    "currentFiatRatesTime": "2024-09-10T08:42:00.898792419Z",
    "historicalFiatRatesTime": "2024-09-10T00:00:00Z",
    "about": "Blockbook - blockchain indexer for Trezor Suite."
  },
  "backend": {
    "chain": "main",
    "blocks": 860730,
    "headers": 860730,
    "bestBlockHash": "00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5",
    "difficulty": "89471664776970.77",
    "sizeOnDisk": 681584532221,
    "version": "270100",
    "subversion": "/Satoshi:27.1.0/",
    "protocolVersion": "70016"
  }
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-blockbook-and-backend-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current Blockbook and backend status.|[SystemInfo](#schemasysteminfo)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status from the API index handler.

<a id="opIdgetApiIndexStatus"></a>

> Code samples

```bash
curl http://localhost:9130/api/ \
  -H 'Accept: application/json'
```

`GET /api/`

Alias served by the same handler as /api/status on full public
interfaces.

Load estimate: Low; constant-size status metadata.

> Example responses

> 200 Response

```json
{
  "blockbook": {
    "coin": "Bitcoin",
    "network": "BTC",
    "host": "backend5",
    "version": "0.5.1",
    "gitCommit": "a0960c8e",
    "buildTime": "2024-08-08T12:32:50+00:00",
    "syncMode": true,
    "initialSync": false,
    "inSync": true,
    "bestHeight": 860730,
    "lastBlockTime": "2024-09-10T08:19:04.471017534Z",
    "inSyncMempool": true,
    "lastMempoolTime": "2024-09-10T08:42:39.38871351Z",
    "mempoolSize": 232021,
    "decimals": 8,
    "dbSize": 761283489075,
    "hasFiatRates": true,
    "currentFiatRatesTime": "2024-09-10T08:42:00.898792419Z",
    "historicalFiatRatesTime": "2024-09-10T00:00:00Z",
    "about": "Blockbook - blockchain indexer for Trezor Suite."
  },
  "backend": {
    "chain": "main",
    "blocks": 860730,
    "headers": 860730,
    "bestBlockHash": "00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5",
    "difficulty": "89471664776970.77",
    "sizeOnDisk": 681584532221,
    "version": "270100",
    "subversion": "/Satoshi:27.1.0/",
    "protocolVersion": "70016"
  }
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-status-from-the-api-index-handler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current Blockbook and backend status.|[SystemInfo](#schemasysteminfo)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-blocks">Blocks</h1>

Block, block hash, raw block, and filter endpoints.

## Get a block hash by height.

<a id="opIdgetBlockHashByHeight"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/block-index/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/block-index/{height}`

Returns the block hash for a height on the backend main chain.
Blockbook follows the backend main chain; after a rollback or reorg,
height lookups resolve to the current main-chain block.

Load estimate: Low; indexed height-to-hash lookup.

<h3 id="get-a-block-hash-by-height-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|path|integer|true|Block height on the backend main chain.|

> Example responses

> 200 Response

```json
{
  "blockHash": "0000000000000000000b7b8574bc6fd285825ec2dbcbeca149121fc05b0c828c"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-a-block-hash-by-height-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Block hash at the requested height.|[BlockHashResponse](#schemablockhashresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a block by height or hash.

<a id="opIdgetBlock"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/block/string \
  -H 'Accept: application/json'
```

`GET /api/v2/block/{blockId}`

Returns block information with paged transactions. When full
transaction details are unavailable, the response can contain only
transaction ids.

Blockbook follows the backend main chain. Height lookups always return
the current main-chain block. Hash lookups can return a block from
another fork only if the backend still keeps it.

Load estimate: Medium; grows mainly with block transaction count and
requested page.

<h3 id="get-a-block-by-height-or-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockId|path|string|true|Block height or block hash.|
|page|query|integer|false|1-based page index. Values outside safe bounds are sanitized to the closest possible page.|
|pageSize|query|integer|false|Number of transactions per block page. The default and maximum is 1000.|

> Example responses

> 200 Response

```json
{
  "page": 1,
  "totalPages": 1,
  "itemsOnPage": 1000,
  "hash": "760f8ed32894ccce9c1ea11c8a019cadaa82bcb434b25c30102dd7e43f326217",
  "previousBlockHash": "786a1f9f38493d32fd9f9c104d748490a070bc74a83809103bcadd93ae98288f",
  "nextBlockHash": "151615691b209de41dda4798a07e62db8429488554077552ccb1c4f8c7e9f57a",
  "height": 2648059,
  "confirmations": 47,
  "size": 951,
  "time": 1553096617,
  "version": "6422787",
  "merkleRoot": "6783f6083788c4f69b8af23bd2e4a194cf36ac34d590dfd97e510fe7aebc72c8",
  "nonce": "0",
  "bits": "1a063f3b",
  "difficulty": "2685605.260733312",
  "txCount": 2,
  "txs": [
    {
      "txid": "2b9fc57aaa8d01975631a703b0fc3f11d70671953fc769533b8078a04d029bf9",
      "vin": [
        {
          "n": 0,
          "isAddress": false,
          "value": "0"
        }
      ],
      "vout": [
        {
          "value": "1000100000000",
          "n": 0,
          "addresses": [
            "D6ravJL6Fgxtgp8k2XZZt1QfUmwwGuLwQJ"
          ],
          "isAddress": true
        }
      ],
      "blockHash": "760f8ed32894ccce9c1ea11c8a019cadaa82bcb434b25c30102dd7e43f326217",
      "blockHeight": 2648059,
      "confirmations": 47,
      "blockTime": 1553096617,
      "value": "1000100000000",
      "valueIn": "0",
      "fees": "0"
    }
  ]
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-a-block-by-height-or-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Block details.|[Block](#schemablock)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get raw block hex.

<a id="opIdgetRawBlock"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/rawblock/string \
  -H 'Accept: application/json'
```

`GET /api/v2/rawblock/{blockId}`

Returns raw serialized block data.

Load estimate: High for large blocks; payload size grows with the raw
block size.

<h3 id="get-raw-block-hex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockId|path|string|true|Block height or block hash.|

> Example responses

> 200 Response

```json
{
  "hex": "00000020f3e9..."
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-raw-block-hex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Raw block data.|[BlockRaw](#schemablockraw)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get compact block filters.

<a id="opIdgetBlockFilters"></a>

> Code samples

```bash
curl 'http://localhost:9130/api/v2/block-filters/?scriptType=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/block-filters/`

Returns compact block filters for the script type configured on this
Blockbook instance. Provide either lastN or a from/to range. When to is
omitted for a range, the current best height is used.

Load estimate: High for wide ranges; work and payload grow linearly
with the number of requested filters.

<h3 id="get-compact-block-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptType|query|string|true|Script type configured for block filters on this instance, for example taproot.|
|lastN|query|integer|false|Return filters for the last N blocks.|
|from|query|integer|false|First block height in the requested range.|
|to|query|integer|false|Last block height in the requested range. Defaults to the current best height when omitted.|

> Example responses

> 200 Response

```json
{
  "P": 19,
  "M": 784931,
  "zeroedKey": false,
  "blockFilters": {
    "860730": {
      "blockHash": "00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5",
      "filter": "0286f0..."
    }
  }
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-compact-block-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Block filters keyed by block height.|[BlockFilters](#schemablockfilters)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-transactions">Transactions</h1>

Transaction lookup and broadcast endpoints.

## Get a normalized transaction.

<a id="opIdgetTransaction"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/tx/string \
  -H 'Accept: application/json'
```

`GET /api/v2/tx/{txid}`

Returns normalized transaction data with the same general structure for
all supported coins. Coin-specific fields that do not fit the common
shape are omitted here; use getTransactionSpecific for backend-native
JSON.

Bitcoin-like confirmed transactions include blockHash, confirmations,
blockTime, size/vsize, value/valueIn, fees, and hex. Unconfirmed
transactions can include confirmationETABlocks and
confirmationETASeconds.

Ethereum-like transactions have one vin and one vout, tokenTransfers,
ethereumSpecific execution data, and optional addressAliases. Parsed
input data is included when the 4byte signature can be resolved.

For mined transactions, blockTime is the block timestamp. For mempool
transactions, blockTime is when this Blockbook instance first learned
about the transaction and can differ between instances.

Load estimate: Medium; grows with inputs, outputs, token transfers,
address aliases, and spending=true extra lookups.

<h3 id="get-a-normalized-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction id/hash.|
|spending|query|boolean|false|Include spending transaction metadata for UTXO outputs when available.|

> Example responses

> 200 Response

```json
{
  "txid": "8c1e3dec662d1f2a5e322ccef5eca263f98eb16723c6f990be0c88c1db113fb1",
  "version": 2,
  "lockTime": 860729,
  "vin": [
    {
      "txid": "0eb7b574373de2c88d0dc1444f49947c681d0437d21361f9ebb4dd09c62f2a66",
      "vout": 1,
      "sequence": 4294967293,
      "n": 0,
      "addresses": [
        "bc1qmgwnfjlda4ns3g6g3yz74w6scnn9yu2ts82yyc"
      ],
      "isAddress": true,
      "value": "10106300"
    }
  ],
  "vout": [
    {
      "value": "175000",
      "n": 0,
      "hex": "76a914ecc999d554eaa3efa5e871c28f58b549c36ec51788ac",
      "addresses": [
        "1Nb1ykSD7J5k4RFjJQGsrD9gxBE6jzfNa9"
      ],
      "isAddress": true
    },
    {
      "value": "9888100",
      "n": 1,
      "hex": "001496f152a0919487624bf4f13f46f0d20fa10d9acc",
      "addresses": [
        "bc1qjmc49gy3jjrkyjl57yl5duxjp7ssmxkvh5t2q5"
      ],
      "isAddress": true
    }
  ],
  "blockHash": "00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5",
  "blockHeight": 860730,
  "confirmations": 1,
  "blockTime": 1725956288,
  "size": 225,
  "vsize": 144,
  "value": "10063100",
  "valueIn": "10106300",
  "fees": "43200",
  "hex": "02000000000101662a..."
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-a-normalized-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Normalized transaction.|[Tx](#schematx)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get blockchain-specific transaction JSON.

<a id="opIdgetTransactionSpecific"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/tx-specific/string \
  -H 'Accept: application/json'
```

`GET /api/v2/tx-specific/{txid}`

Returns transaction data in the exact backend-specific format. Use this
when a chain exposes fields that are intentionally absent from the
normalized Tx schema.

Load estimate: Medium; payload size depends on chain-specific fields
and transaction complexity.

<h3 id="get-blockchain-specific-transaction-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction id/hash.|

> Example responses

> 200 Response

```json
{
  "hex": "040000808...8e6e73cb009",
  "txid": "7a0a0ff6f67bac2a856c7296382b69151949878de6fb0d01a8efa197182b2913",
  "size": 1809,
  "overwintered": true,
  "version": 4,
  "versiongroupid": "892f2085",
  "locktime": 0,
  "expiryheight": 495680,
  "vin": [],
  "vout": [],
  "blockhash": "0000000001c4aa394e796dd1b82e358f114535204f6f5b6cf4ad58dc439c47af",
  "height": 495665,
  "confirmations": 2145803,
  "time": 1552301566,
  "blocktime": 1552301566
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-blockchain-specific-transaction-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chain-specific transaction payload.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get raw transaction hex.

<a id="opIdgetRawTransaction"></a>

> Code samples

```bash
curl http://localhost:9130/api/rawtx/string \
  -H 'Accept: application/json'
```

`GET /api/rawtx/{txid}`

Unversioned public endpoint exposed by Blockbook for raw transaction
data.

Load estimate: Medium; payload size grows with raw transaction size.

<h3 id="get-raw-transaction-hex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction id/hash.|

> Example responses

> 200 Response

```json
"02000000000101662a2fc609ddb4eb..."
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-raw-transaction-hex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Raw transaction hex as a JSON string.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcast a raw transaction using the path.

<a id="opIdsendTransactionByGet"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/sendtx/string \
  -H 'Accept: application/json'
```

`GET /api/v2/sendtx/{hex}`

Broadcasts hex-encoded raw transaction data. Prefer POST for large
payloads.

Load estimate: High; validates and forwards to the backend, with cost
growing with transaction size and backend mempool policy checks.

<h3 id="broadcast-a-raw-transaction-using-the-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hex|path|string|true|Raw transaction.|

> Example responses

> 200 Response

```json
{
  "result": "7c3be24063f268aaa1ed81b64776798f56088757641a34fb156c4f51ed2e9d25"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="broadcast-a-raw-transaction-using-the-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Broadcast result.|[SendTransactionResponse](#schemasendtransactionresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Broadcast a raw transaction using the request body.

<a id="opIdsendTransactionByPost"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/sendtx/ \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d 'string'
```

`POST /api/v2/sendtx/`

Broadcasts hex-encoded raw transaction data from the request body. The
trailing slash is mandatory in the Blockbook handler. POST bodies are
limited to 8 MiB.

Load estimate: High; validates and forwards to the backend, with cost
growing with transaction size and backend mempool policy checks.

> Body parameter

```text
string
```

<h3 id="broadcast-a-raw-transaction-using-the-request-body-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": "7c3be24063f268aaa1ed81b64776798f56088757641a34fb156c4f51ed2e9d25"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="broadcast-a-raw-transaction-using-the-request-body-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Broadcast result.|[SendTransactionResponse](#schemasendtransactionresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-accounts">Accounts</h1>

Address, XPUB, UTXO, and balance history endpoints.

## Get address/account details.

<a id="opIdgetAddress"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/address/string \
  -H 'Accept: application/json'
```

`GET /api/v2/address/{address}`

Returns balances and transactions of an address. Transactions are
sorted by block height with newest blocks first. Response size is
controlled by the details parameter.

At details=basic, mempool transactions are not aggregated:
unconfirmedBalance, unconfirmedSending, and unconfirmedReceiving are
omitted, and unconfirmedTxs reports the raw mempool index size for the
address.

Load estimate: Variable; basic is low, token/tokenBalances and
txids/txslight are medium, and txs can be high as it grows with
pageSize, transactions, token rows, filters, and protocol enrichment.

<h3 id="get-addressaccount-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Chain address.|
|page|query|integer|false|1-based page index. Values outside safe bounds are sanitized to the closest possible page.|
|pageSize|query|integer|false|Number of history items per page. The default and maximum for REST account endpoints is 1000. Unconfirmed transactions take the first slots of the paged history and count towards both pageSize and totalPages, so a page is never longer than pageSize and, as long as the account's pending set does not change between page requests, walking all pages returns every transaction exactly once. A pending transaction that is replaced or evicted mid-walk shifts the following pages; for a walk that is consistent under mempool churn, set the to parameter to the current best height, which pages only the confirmed history.|
|from|query|integer|false|First block height included in account transaction filtering.|
|to|query|integer|false|Last block height included in account transaction filtering.|
|details|query|string|false|Controls how much account data is returned.<br>basic returns balances and counts only.<br>tokens adds known token rows.<br>tokenBalances returns token rows with balances.<br>txids adds paged transaction ids.<br>txslight adds limited transaction details from the index.<br>txs adds full transaction details.|
|filter|query|string \| integer|false|Filter account history by input/output side, or by numeric token/internal filter id.|
|contract|query|string|false|Contract address used to filter token data.|
|protocols|query|[string]|false|Optional protocol enrichments, comma-separated or repeated. Currently supported value: erc4626. Unknown values are rejected.|
|secondary|query|string|false|Secondary currency code used to populate fiat values.|
|confirmedNonce|query|boolean|false|If true, additionally return the confirmed nonce for Ethereum-like<br>addresses (the confirmedNonce response field). This triggers an extra<br>eth_getTransactionCount("latest") backend call, so it is off by default.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|details|basic|
|details|tokens|
|details|tokenBalances|
|details|txids|
|details|txslight|
|details|txs|

> Example responses

> 200 Response

```json
{
  "page": 1,
  "totalPages": 1,
  "itemsOnPage": 1000,
  "address": "bc1q0wd209cv5k9pd9mhk7nspacywcj038xxdhnt5u",
  "balance": "4225100",
  "totalReceived": "4225100",
  "totalSent": "0",
  "unconfirmedBalance": "0",
  "unconfirmedTxs": 0,
  "txs": 2,
  "txids": [
    "0db6010dc0815a4bdaa505bd1ccc851056b0d53c7e4ea7af39c4d648a2c0c019",
    "7532920ddc506218337cceac978cce9c7f98e27ad3226dee55f3e934e0b32e80"
  ]
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-addressaccount-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address/account details.|[Address](#schemaaddress)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get XPUB or descriptor account details.

<a id="opIdgetXpub"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/xpub/string \
  -H 'Accept: application/json'
```

`GET /api/v2/xpub/{xpub}`

Returns balances and transactions of an XPUB or output descriptor for
Bitcoin-type coins. Transactions are sorted by block height with newest
blocks first. URL-encode descriptors before placing them after /xpub/.

Blockbook expects XPUBs at level 3 of the derivation path, for example
m/purpose'/coin_type'/account'. It derives the remaining
change/address_index path. The BIP scheme is inferred from the XPUB
prefix; unknown prefixes default to BIP44.

Supported descriptors are pkh(xpub), sh(wpkh(xpub)), wpkh(xpub), and
tr(xpub). Descriptors can include origin paths and change selectors
such as <0;1> or {0,1}; when change is omitted, Blockbook defaults to
<0;1>.

Note: usedTokens always reports the total number of used addresses for
the XPUB, regardless of the tokens query filter.

Load estimate: High for broad accounts; grows with derived addresses,
gap, used address count, pageSize, transaction history, token rows, and
protocol enrichment.

<h3 id="get-xpub-or-descriptor-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xpub|path|string|true|XPUB or supported descriptor.|
|page|query|integer|false|1-based page index. Values outside safe bounds are sanitized to the closest possible page.|
|pageSize|query|integer|false|Number of history items per page. The default and maximum for REST account endpoints is 1000. Unconfirmed transactions take the first slots of the paged history and count towards both pageSize and totalPages, so a page is never longer than pageSize and, as long as the account's pending set does not change between page requests, walking all pages returns every transaction exactly once. A pending transaction that is replaced or evicted mid-walk shifts the following pages; for a walk that is consistent under mempool churn, set the to parameter to the current best height, which pages only the confirmed history.|
|from|query|integer|false|First block height included in account transaction filtering.|
|to|query|integer|false|Last block height included in account transaction filtering.|
|details|query|string|false|Controls how much account data is returned.<br>basic returns balances and counts only.<br>tokens adds known token rows.<br>tokenBalances returns token rows with balances.<br>txids adds paged transaction ids.<br>txslight adds limited transaction details from the index.<br>txs adds full transaction details.|
|tokens|query|string|false|Controls which XPUB-derived address rows are included: nonzero returns<br>only addresses with nonzero balance, used returns addresses with at<br>least one transaction, and derived returns all derived addresses.|
|filter|query|string \| integer|false|Filter account history by input/output side, or by numeric token/internal filter id.|
|contract|query|string|false|Contract address used to filter token data.|
|protocols|query|[string]|false|Optional protocol enrichments, comma-separated or repeated. Currently supported value: erc4626. Unknown values are rejected.|
|secondary|query|string|false|Secondary currency code used to populate fiat values.|
|gap|query|integer|false|XPUB/address derivation gap limit. Values are capped by the server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|details|basic|
|details|tokens|
|details|tokenBalances|
|details|txids|
|details|txslight|
|details|txs|
|tokens|nonzero|
|tokens|used|
|tokens|derived|

> Example responses

> 200 Response

```json
{
  "page": 1,
  "totalPages": 1,
  "itemsOnPage": 1000,
  "address": "dgub8sbe5Mi8LA4dXB9zPfLZW8arm...9Vjp2HHx91xdDEmWYpmD49fpoUYF",
  "balance": "90000000",
  "totalReceived": "3093381250",
  "totalSent": "3083381250",
  "unconfirmedBalance": "0",
  "unconfirmedTxs": 0,
  "txs": 5,
  "txids": [
    "383ccb5da16fccad294e24a2ef77bdee5810573bb1b252d8b2af4f0ac8c4e04c"
  ],
  "usedTokens": 2,
  "tokens": [
    {
      "type": "XPUBAddress",
      "standard": "XPUBAddress",
      "name": "DUCd1B3YBiXL5By15yXgSLZtEkvwsgEdqS",
      "path": "m/44'/3'/0'/0/0",
      "transfers": 3,
      "decimals": 8,
      "balance": "90000000",
      "totalReceived": "2903986975",
      "totalSent": "2803986975"
    }
  ],
  "secondaryValue": 21195.47633568
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-xpub-or-descriptor-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|XPUB/descriptor account details.|[Address](#schemaaddress)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get UTXOs for an address, XPUB, or descriptor.

<a id="opIdgetUtxo"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/utxo/string \
  -H 'Accept: application/json'
```

`GET /api/v2/utxo/{descriptor}`

Returns unspent outputs for an address, XPUB, or descriptor on
Bitcoin-type coins. By default both confirmed and unconfirmed UTXOs are
returned; confirmed=true filters out unconfirmed entries. Results are
sorted by block height with newest entries first.

Unconfirmed UTXOs omit height, have confirmations set to 0, and can
include lockTime. XPUB and descriptor UTXOs also include address and
derivation path when available. Coinbase UTXOs include coinbase=true
only up to the coinbase confirmation limit, currently 100 blocks.

Load estimate: Variable; address lookups are usually medium, while
XPUB/descriptor lookups grow with gap, derived addresses, and UTXO
count.

<h3 id="get-utxos-for-an-address-xpub-or-descriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|descriptor|path|string|true|Address, XPUB, or supported descriptor. URL-encode descriptors.|
|confirmed|query|boolean|false|When true, return only confirmed UTXOs.|
|gap|query|integer|false|XPUB/address derivation gap limit. Values are capped by the server.|

> Example responses

> 200 Response

```json
[
  {
    "txid": "13d26cd939bf5d155b1c60054e02d9c9b832a85e6ec4f2411be44b6b5a2842e9",
    "vout": 0,
    "value": "1422303206539",
    "confirmations": 0,
    "lockTime": 2648100
  },
  {
    "txid": "a79e396a32e10856c97b95f43da7e9d2b9a11d446f7638dbd75e5e7603128cac",
    "vout": 1,
    "value": "39748685",
    "height": 2648043,
    "confirmations": 47,
    "coinbase": true
  }
]
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-utxos-for-an-address-xpub-or-descriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|UTXO list.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-utxos-for-an-address-xpub-or-descriptor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Utxo](#schemautxo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get account balance history.

<a id="opIdgetBalanceHistory"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/balancehistory/string \
  -H 'Accept: application/json'
```

`GET /api/v2/balancehistory/{descriptor}`

Returns balance history points for an address, XPUB, or descriptor.
from and to are Unix timestamps. groupBy is an aggregation interval in
seconds and defaults to 3600. When fiatcurrency is omitted, rates can
contain all available currencies. sentToSelf is the amount sent from an
address to itself or within addresses of the same XPUB.

Load estimate: High; grows with account transaction history, time span,
grouping cardinality, fiat rate lookups, and XPUB/descriptor gap.

<h3 id="get-account-balance-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|descriptor|path|string|true|Address, XPUB, or supported descriptor. URL-encode descriptors.|
|from|query|integer(int64)|false|Unix timestamp lower bound.|
|to|query|integer(int64)|false|Unix timestamp upper bound.|
|fiatcurrency|query|string|false|Optional fiat currency code to include in rates.|
|groupBy|query|integer|false|Aggregation interval in seconds. Defaults to 3600.|
|gap|query|integer|false|XPUB/address derivation gap limit. Values are capped by the server.|

> Example responses

> 200 Response

```json
[
  {
    "time": 1578391200,
    "txs": 5,
    "received": "5000000",
    "sent": "0",
    "sentToSelf": "100000",
    "rates": {
      "usd": 7855.9,
      "eur": 6838.13
    }
  },
  {
    "time": 1578488400,
    "txs": 1,
    "received": "0",
    "sent": "5000000",
    "sentToSelf": "0",
    "rates": {
      "usd": 8283.11,
      "eur": 7464.45
    }
  }
]
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-account-balance-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balance history points.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-account-balance-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BalanceHistory](#schemabalancehistory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-contracts">Contracts</h1>

Smart contract and token metadata endpoints.

## Get contract metadata.

<a id="opIdgetContractInfo"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/contract/string \
  -H 'Accept: application/json'
```

`GET /api/v2/contract/{contract}`

Returns indexed token/contract metadata and optional current protocol
enrichments such as ERC4626.

blockHeight reflects the indexer's best block at request time.
ERC4626 fields under protocols.erc4626 are fetched through JSON-RPC
calls pinned to that exact blockHeight, so the ERC4626 values are a
consistent snapshot. If a vault is detected but the underlying asset
metadata cannot be resolved, protocols.erc4626 contains error and omits
asset; callers must not derive fiat rates or human-unit exchange rates
from such a partial response.

Load estimate: Medium; indexed metadata is cheap, but optional protocol
enrichment can add backend RPC calls and token metadata lookups.

<h3 id="get-contract-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contract|path|string|true|Smart contract address.|
|currency|query|string|false|Secondary currency code for rates.|
|protocols|query|[string]|false|Optional protocol enrichments, comma-separated or repeated. Currently supported value: erc4626. Unknown values are rejected.|

> Example responses

> 200 Response

```json
{
  "type": "ERC20",
  "standard": "ERC20",
  "contract": "0x0000000000000000000000000000000000000001",
  "name": "Vault Share",
  "symbol": "vETH",
  "decimals": 18,
  "rates": {
    "baseRate": 0.000523,
    "currency": "usd",
    "secondaryRate": 1.24
  },
  "protocols": {
    "erc4626": {
      "asset": {
        "contract": "0x0000000000000000000000000000000000000002",
        "name": "Wrapped Ether",
        "symbol": "WETH",
        "decimals": 18
      },
      "share": {
        "contract": "0x0000000000000000000000000000000000000001",
        "name": "Vault Share",
        "symbol": "vETH",
        "decimals": 18
      },
      "totalAssets": "123456789",
      "convertToAssets1Share": "1000000000000000000",
      "convertToShares1Asset": "1000000000000000000",
      "previewDeposit1Asset": "999999999999999999",
      "previewRedeem1Share": "1000000000000000000"
    }
  },
  "blockHeight": 12345678
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-contract-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contract metadata.|[ContractInfoResult](#schemacontractinforesult)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-fees">Fees</h1>

Fee estimation and fee statistics endpoints.

## Estimate a fee target.

<a id="opIdestimateFee"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/estimatefee/1 \
  -H 'Accept: application/json'
```

`GET /api/v2/estimatefee/{blocks}`

Returns backend fee estimation for the requested confirmation target.

Load estimate: Low; a small backend fee estimate lookup.

<h3 id="estimate-a-fee-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blocks|path|integer|true|Confirmation target in blocks.|
|conservative|query|boolean|false|Use conservative smart fee estimation where supported.|

> Example responses

> 200 Response

```json
{
  "result": "0.00002460"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="estimate-a-fee-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decimal fee estimate in chain base currency.|[ResultStringResponse](#schemaresultstringresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get fee statistics for a block.

<a id="opIdgetFeeStats"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/feestats/string \
  -H 'Accept: application/json'
```

`GET /api/v2/feestats/{blockId}`

Returns fee statistics for transactions in one block.

Load estimate: Medium to high; grows with the number of transactions
in the requested block.

<h3 id="get-fee-statistics-for-a-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockId|path|string|true|Block height or block hash.|

> Example responses

> 200 Response

```json
{
  "txCount": 1820,
  "totalFeesSat": "182000000",
  "averageFeePerKb": 23.41,
  "decilesFeePerKb": [
    3.1,
    5.4,
    8.8,
    11.2,
    15.7,
    20.3,
    26.8,
    35.1,
    48.4,
    91.6
  ]
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-fee-statistics-for-a-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fee statistics.|[FeeStats](#schemafeestats)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-fiat">Fiat</h1>

Fiat and token rate endpoints.

## Get current or historical fiat rates.

<a id="opIdgetFiatTicker"></a>

> Code samples

```bash
curl http://localhost:9130/api/v2/tickers/ \
  -H 'Accept: application/json'
```

`GET /api/v2/tickers/`

Returns currency rates for the requested currency and date. If a rate
is unavailable for the exact timestamp, the closest available rate can
be returned. Responses include the actual rate timestamp. Without a
currency parameter, all available currencies can be returned. A rate of
-1 marks an unavailable or invalid currency for that timestamp.

Load estimate: Low to medium; specific currency lookups are cheap,
while omitted currency and token lookups increase response size.

<h3 id="get-current-or-historical-fiat-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|currency|query|string|false|Optional currency code. When omitted, all available rates can be returned.|
|timestamp|query|integer(int64)|false|Unix timestamp for historical rates.|
|block|query|string|false|Block height or hash whose timestamp should be used for historical rates.|
|token|query|string|false|Optional token symbol or contract/address key for token-specific rates.|

> Example responses

> 200 Response

```json
{
  "ts": 1574346615,
  "rates": {
    "eur": 7134.1,
    "usd": 7914.5
  }
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-current-or-historical-fiat-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fiat rate ticker.|[FiatTicker](#schemafiatticker)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get fiat rates for multiple timestamps.

<a id="opIdgetFiatTickersForTimestamps"></a>

> Code samples

```bash
curl 'http://localhost:9130/api/v2/multi-tickers/?timestamp=1710000000%2C1720000000' \
  -H 'Accept: application/json'
```

`GET /api/v2/multi-tickers/`

Returns fiat rate tickers for a comma-separated list of Unix
timestamps.

Load estimate: Medium; work and payload grow linearly with timestamp
count, plus token/currency selection.

<h3 id="get-fiat-rates-for-multiple-timestamps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|true|Comma-separated Unix timestamps.|
|currency|query|string|false|Optional currency code.|
|token|query|string|false|Optional token symbol or contract/address key.|

> Example responses

> 200 Response

```json
[
  {
    "ts": 1574346615,
    "rates": {
      "usd": 7914.5
    }
  },
  {
    "ts": 1574433015,
    "rates": {
      "usd": 7344.2
    }
  }
]
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-fiat-rates-for-multiple-timestamps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fiat rate tickers.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-fiat-rates-for-multiple-timestamps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FiatTicker](#schemafiatticker)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get currencies available for a timestamp.

<a id="opIdgetFiatTickersList"></a>

> Code samples

```bash
curl 'http://localhost:9130/api/v2/tickers-list/?timestamp=0' \
  -H 'Accept: application/json'
```

`GET /api/v2/tickers-list/`

Returns available secondary currencies for a date together with the
actual rate timestamp.

Load estimate: Low to medium; token lookups and wide currency lists
increase response size.

<h3 id="get-currencies-available-for-a-timestamp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|integer(int64)|true|Unix timestamp for the requested currency list.|
|token|query|string|false|Optional token symbol or contract/address key.|

> Example responses

> 200 Response

```json
{
  "ts": 1574346615,
  "available_currencies": [
    "eur",
    "usd"
  ]
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="get-currencies-available-for-a-timestamp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available currencies.|[AvailableVsCurrencies](#schemaavailablevscurrencies)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-websocket">WebSocket</h1>

WebSocket upgrade endpoint and message schemas.

## WebSocket upgrade endpoint.

<a id="opIdconnectWebSocket"></a>

> Code samples

```bash
curl http://localhost:9130/websocket
```

`GET /websocket`

Connect with a WebSocket client and exchange JSON messages using the
WsRequest/WsResponse schemas. The endpoint can also be explored through
/test-websocket.html on a Blockbook instance.

During a backend reorg, new-block notifications can contain a block
hash at the same or even smaller height.

Load estimate: Variable; idle connections are low, request methods
cost roughly like their REST equivalents, and subscriptions grow with
connection count, subscribed addresses, and event frequency.

<h3 id="websocket-upgrade-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|101|Switching Protocols|WebSocket protocol upgrade.|None|
|400|Bad Request|Bad WebSocket upgrade request.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="blockbook-api-legacy">Legacy</h1>

Bitcore Insight-compatible V1 routes for Bitcoin-type coins.

## Legacy get block hash by height.

<a id="opIdgetLegacyBlockHashByHeight"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/block-index/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/block-index/{height}`

Bitcore Insight-compatible V1 route for Bitcoin-type coins.

Load estimate: Low; indexed height-to-hash lookup.

<h3 id="legacy-get-block-hash-by-height-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|path|integer|true|Block height on the backend main chain.|

> Example responses

> 200 Response

```json
{
  "blockHash": "0000000000000000000b7b8574bc6fd285825ec2dbcbeca149121fc05b0c828c"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-get-block-hash-by-height-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Block hash at the requested height.|[BlockHashResponse](#schemablockhashresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy get transaction.

<a id="opIdgetLegacyTransaction"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/tx/string \
  -H 'Accept: application/json'
```

`GET /api/v1/tx/{txid}`

Bitcore Insight-compatible V1 transaction shape for Bitcoin-type
coins.

Load estimate: Medium; grows with inputs, outputs, scripts, and raw
transaction size.

<h3 id="legacy-get-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|Transaction id/hash.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-get-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legacy transaction payload.|[LegacyObject](#schemalegacyobject)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy get address.

<a id="opIdgetLegacyAddress"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/address/string \
  -H 'Accept: application/json'
```

`GET /api/v1/address/{address}`

Bitcore Insight-compatible V1 address shape for Bitcoin-type coins.

Load estimate: Variable; grows with address transaction count and
legacy response expansion.

<h3 id="legacy-get-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Chain address.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-get-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legacy address payload.|[LegacyObject](#schemalegacyobject)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy get address UTXOs.

<a id="opIdgetLegacyUtxo"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/utxo/string \
  -H 'Accept: application/json'
```

`GET /api/v1/utxo/{address}`

Bitcore Insight-compatible V1 UTXO list for Bitcoin-type coins.

Load estimate: Medium; grows with the number of unspent outputs.

<h3 id="legacy-get-address-utxos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Chain address.|

> Example responses

> 200 Response

```json
[
  {}
]
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-get-address-utxos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legacy UTXO list.|Inline|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="legacy-get-address-utxos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LegacyObject](#schemalegacyobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy get block by height or hash.

<a id="opIdgetLegacyBlock"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/block/string \
  -H 'Accept: application/json'
```

`GET /api/v1/block/{blockId}`

Bitcore Insight-compatible V1 block shape for Bitcoin-type coins.

Load estimate: Medium to high; grows with block transaction count and
legacy payload size.

<h3 id="legacy-get-block-by-height-or-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blockId|path|string|true|Block height or block hash.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-get-block-by-height-or-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legacy block payload.|[LegacyObject](#schemalegacyobject)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy estimate fee target.

<a id="opIdestimateLegacyFee"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/estimatefee/1 \
  -H 'Accept: application/json'
```

`GET /api/v1/estimatefee/{blocks}`

Bitcore Insight-compatible V1 fee estimate for Bitcoin-type coins.

Load estimate: Low; a small backend fee estimate lookup.

<h3 id="legacy-estimate-fee-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blocks|path|integer|true|Confirmation target in blocks.|

> Example responses

> 200 Response

```json
{
  "result": "0.00002460"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-estimate-fee-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decimal fee estimate in chain base currency.|[ResultStringResponse](#schemaresultstringresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy broadcast transaction using the path.

<a id="opIdsendLegacyTransactionByGet"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/sendtx/string \
  -H 'Accept: application/json'
```

`GET /api/v1/sendtx/{hex}`

Bitcore Insight-compatible V1 broadcast route for Bitcoin-type coins.

Load estimate: High; validates and forwards to the backend, with cost
growing with transaction size and backend mempool policy checks.

<h3 id="legacy-broadcast-transaction-using-the-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hex|path|string|true|Raw transaction.|

> Example responses

> 200 Response

```json
{
  "result": "7c3be24063f268aaa1ed81b64776798f56088757641a34fb156c4f51ed2e9d25"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-broadcast-transaction-using-the-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Broadcast result.|[SendTransactionResponse](#schemasendtransactionresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Legacy broadcast transaction using the request body.

<a id="opIdsendLegacyTransactionByPost"></a>

> Code samples

```bash
curl http://localhost:9130/api/v1/sendtx/ \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d 'string'
```

`POST /api/v1/sendtx/`

Bitcore Insight-compatible V1 broadcast route for Bitcoin-type coins.

Load estimate: High; validates and forwards to the backend, with cost
growing with transaction size and backend mempool policy checks.

> Body parameter

```text
string
```

<h3 id="legacy-broadcast-transaction-using-the-request-body-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": "7c3be24063f268aaa1ed81b64776798f56088757641a34fb156c4f51ed2e9d25"
}
```

> default Response

```json
{
  "error": "Transaction 'missing-txid' not found"
}
```

<h3 id="legacy-broadcast-transaction-using-the-request-body-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Broadcast result.|[SendTransactionResponse](#schemasendtransactionresponse)|
|default|Default|Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_LegacyObject">LegacyObject</h2>
<!-- backwards compatibility -->
<a id="schemalegacyobject"></a>
<a id="schema_LegacyObject"></a>
<a id="tocSlegacyobject"></a>
<a id="tocslegacyobject"></a>

```json
{}
```

Legacy Bitcore Insight-compatible payload. Use API V2 for stable typed schemas.

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Human-readable error message.|

<h2 id="tocS_AmountString">AmountString</h2>
<!-- backwards compatibility -->
<a id="schemaamountstring"></a>
<a id="schema_AmountString"></a>
<a id="tocSamountstring"></a>
<a id="tocsamountstring"></a>

```json
"100000000"
```

Integer amount in the lowest chain denomination, encoded as a string.

<h2 id="tocS_TokenStandard">TokenStandard</h2>
<!-- backwards compatibility -->
<a id="schematokenstandard"></a>
<a id="schema_TokenStandard"></a>
<a id="tocStokenstandard"></a>
<a id="tocstokenstandard"></a>

```json
""
```

Token standard name. Empty string means no token standard is known.

<h2 id="tocS_BlockHashResponse">BlockHashResponse</h2>
<!-- backwards compatibility -->
<a id="schemablockhashresponse"></a>
<a id="schema_BlockHashResponse"></a>
<a id="tocSblockhashresponse"></a>
<a id="tocsblockhashresponse"></a>

```json
{
  "blockHash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockHash|string|true|none|none|

<h2 id="tocS_ResultStringResponse">ResultStringResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresultstringresponse"></a>
<a id="schema_ResultStringResponse"></a>
<a id="tocSresultstringresponse"></a>
<a id="tocsresultstringresponse"></a>

```json
{
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|Result string, usually a decimal amount in chain base currency.|

<h2 id="tocS_SendTransactionResponse">SendTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendtransactionresponse"></a>
<a id="schema_SendTransactionResponse"></a>
<a id="tocSsendtransactionresponse"></a>
<a id="tocssendtransactionresponse"></a>

```json
{
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|Broadcast transaction id/hash.|

<h2 id="tocS_AddressAlias">AddressAlias</h2>
<!-- backwards compatibility -->
<a id="schemaaddressalias"></a>
<a id="schema_AddressAlias"></a>
<a id="tocSaddressalias"></a>
<a id="tocsaddressalias"></a>

```json
{
  "Type": "string",
  "Alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|string|false|none|none|
|Alias|string|false|none|none|

<h2 id="tocS_AddressAliases">AddressAliases</h2>
<!-- backwards compatibility -->
<a id="schemaaddressaliases"></a>
<a id="schema_AddressAliases"></a>
<a id="tocSaddressaliases"></a>
<a id="tocsaddressaliases"></a>

```json
{
  "property1": {
    "Type": "string",
    "Alias": "string"
  },
  "property2": {
    "Type": "string",
    "Alias": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AddressAlias](#schemaaddressalias)|false|none|none|

<h2 id="tocS_MultiTokenValue">MultiTokenValue</h2>
<!-- backwards compatibility -->
<a id="schemamultitokenvalue"></a>
<a id="schema_MultiTokenValue"></a>
<a id="tocSmultitokenvalue"></a>
<a id="tocsmultitokenvalue"></a>

```json
{
  "id": "100000000",
  "value": "100000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|

<h2 id="tocS_TokenTransfer">TokenTransfer</h2>
<!-- backwards compatibility -->
<a id="schematokentransfer"></a>
<a id="schema_TokenTransfer"></a>
<a id="tocStokentransfer"></a>
<a id="tocstokentransfer"></a>

```json
{
  "type": "",
  "standard": "",
  "from": "string",
  "to": "string",
  "contract": "string",
  "name": "string",
  "symbol": "string",
  "decimals": 0,
  "value": "100000000",
  "multiTokenValues": [
    {
      "id": "100000000",
      "value": "100000000"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TokenStandard](#schematokenstandard)|true|none|**Deprecated.** Token standard name. Empty string means no token standard is known.|
|standard|[TokenStandard](#schematokenstandard)|true|none|Token standard name. Empty string means no token standard is known.|
|from|string|true|none|none|
|to|string|true|none|none|
|contract|string|true|none|none|
|name|string|false|none|none|
|symbol|string|false|none|none|
|decimals|integer|true|none|none|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|multiTokenValues|[[MultiTokenValue](#schemamultitokenvalue)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|""|
|type|XPUBAddress|
|type|ERC20|
|type|ERC721|
|type|ERC1155|
|type|BEP20|
|type|BEP721|
|type|BEP1155|
|type|TRC20|
|type|TRC721|
|type|TRC1155|
|standard|""|
|standard|XPUBAddress|
|standard|ERC20|
|standard|ERC721|
|standard|ERC1155|
|standard|BEP20|
|standard|BEP721|
|standard|BEP1155|
|standard|TRC20|
|standard|TRC721|
|standard|TRC1155|

<h2 id="tocS_Vin">Vin</h2>
<!-- backwards compatibility -->
<a id="schemavin"></a>
<a id="schema_Vin"></a>
<a id="tocSvin"></a>
<a id="tocsvin"></a>

```json
{
  "txid": "string",
  "vout": 0,
  "sequence": 0,
  "n": 0,
  "addresses": [
    "string"
  ],
  "isAddress": true,
  "isOwn": true,
  "value": "100000000",
  "hex": "string",
  "asm": "string",
  "coinbase": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|false|none|none|
|vout|integer|false|none|none|
|sequence|integer|false|none|none|
|n|integer|true|none|none|
|addresses|[string]|false|none|none|
|isAddress|boolean|true|none|none|
|isOwn|boolean|false|none|none|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|hex|string|false|none|none|
|asm|string|false|none|none|
|coinbase|string|false|none|none|

<h2 id="tocS_Vout">Vout</h2>
<!-- backwards compatibility -->
<a id="schemavout"></a>
<a id="schema_Vout"></a>
<a id="tocSvout"></a>
<a id="tocsvout"></a>

```json
{
  "value": "100000000",
  "n": 0,
  "spent": true,
  "spentTxId": "string",
  "spentIndex": 0,
  "spentHeight": 0,
  "hex": "string",
  "asm": "string",
  "addresses": [
    "string"
  ],
  "isAddress": true,
  "isOwn": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|n|integer|true|none|none|
|spent|boolean|false|none|none|
|spentTxId|string|false|none|none|
|spentIndex|integer|false|none|none|
|spentHeight|integer|false|none|none|
|hex|string|false|none|none|
|asm|string|false|none|none|
|addresses|[string] \| null|true|none|none|
|isAddress|boolean|true|none|none|
|isOwn|boolean|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_EthereumInternalTransfer">EthereumInternalTransfer</h2>
<!-- backwards compatibility -->
<a id="schemaethereuminternaltransfer"></a>
<a id="schema_EthereumInternalTransfer"></a>
<a id="tocSethereuminternaltransfer"></a>
<a id="tocsethereuminternaltransfer"></a>

```json
{
  "type": 0,
  "from": "string",
  "to": "string",
  "value": "100000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|integer|true|none|none|
|from|string|true|none|none|
|to|string|true|none|none|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|

<h2 id="tocS_EthereumParsedInputParam">EthereumParsedInputParam</h2>
<!-- backwards compatibility -->
<a id="schemaethereumparsedinputparam"></a>
<a id="schema_EthereumParsedInputParam"></a>
<a id="tocSethereumparsedinputparam"></a>
<a id="tocsethereumparsedinputparam"></a>

```json
{
  "type": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|values|[string]|false|none|none|

<h2 id="tocS_EthereumParsedInputData">EthereumParsedInputData</h2>
<!-- backwards compatibility -->
<a id="schemaethereumparsedinputdata"></a>
<a id="schema_EthereumParsedInputData"></a>
<a id="tocSethereumparsedinputdata"></a>
<a id="tocsethereumparsedinputdata"></a>

```json
{
  "methodId": "string",
  "name": "string",
  "function": "string",
  "params": [
    {
      "type": "string",
      "values": [
        "string"
      ]
    }
  ],
  "parsedDataTruncated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methodId|string|true|none|First 4 bytes of the input data.|
|name|string|true|none|Parsed function name when recognized.|
|function|string|false|none|Full function signature when recognized.|
|params|[[EthereumParsedInputParam](#schemaethereumparsedinputparam)]|false|none|none|
|parsedDataTruncated|boolean|false|none|True when input data exceeded the parse-size budget and parameters were not decoded.|

<h2 id="tocS_EthereumSpecific">EthereumSpecific</h2>
<!-- backwards compatibility -->
<a id="schemaethereumspecific"></a>
<a id="schema_EthereumSpecific"></a>
<a id="tocSethereumspecific"></a>
<a id="tocsethereumspecific"></a>

```json
{
  "type": 0,
  "createdContract": "string",
  "status": 0,
  "error": "string",
  "nonce": 0,
  "gasLimit": 0,
  "gasUsed": 0,
  "gasPrice": "100000000",
  "effectiveGasPrice": "100000000",
  "maxPriorityFeePerGas": "100000000",
  "maxFeePerGas": "100000000",
  "baseFeePerGas": "100000000",
  "l1Fee": 0,
  "l1FeeScalar": "string",
  "l1GasPrice": "100000000",
  "l1GasUsed": 0,
  "data": "string",
  "parsedData": {
    "methodId": "string",
    "name": "string",
    "function": "string",
    "params": [
      {
        "type": "string",
        "values": [
          "string"
        ]
      }
    ],
    "parsedDataTruncated": true
  },
  "internalTransfers": [
    {
      "type": 0,
      "from": "string",
      "to": "string",
      "value": "100000000"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|integer|false|none|none|
|createdContract|string|false|none|none|
|status|integer|true|none|1 success, 0 failed, -1 pending.|
|error|string|false|none|none|
|nonce|integer(int64)|true|none|none|
|gasLimit|integer(int64)|false|none|none|
|gasUsed|integer(int64)|false|none|none|
|gasPrice|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|effectiveGasPrice|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|maxPriorityFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|maxFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|baseFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|l1Fee|integer(int64)|false|none|none|
|l1FeeScalar|string|false|none|none|
|l1GasPrice|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|l1GasUsed|integer(int64)|false|none|none|
|data|string|false|none|none|
|parsedData|[EthereumParsedInputData](#schemaethereumparsedinputdata)|false|none|none|
|internalTransfers|[[EthereumInternalTransfer](#schemaethereuminternaltransfer)]|false|none|none|

<h2 id="tocS_TxChainExtraData">TxChainExtraData</h2>
<!-- backwards compatibility -->
<a id="schematxchainextradata"></a>
<a id="schema_TxChainExtraData"></a>
<a id="tocStxchainextradata"></a>
<a id="tocstxchainextradata"></a>

```json
{
  "payloadType": "string",
  "payload": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadType|string|true|none|Discriminator for normalized chain-specific payloads, for example tron.|
|payload|object|false|none|none|

<h2 id="tocS_AccountChainExtraData">AccountChainExtraData</h2>
<!-- backwards compatibility -->
<a id="schemaaccountchainextradata"></a>
<a id="schema_AccountChainExtraData"></a>
<a id="tocSaccountchainextradata"></a>
<a id="tocsaccountchainextradata"></a>

```json
{
  "payloadType": "string",
  "payload": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadType|string|true|none|none|
|payload|object|false|none|none|

<h2 id="tocS_Tx">Tx</h2>
<!-- backwards compatibility -->
<a id="schematx"></a>
<a id="schema_Tx"></a>
<a id="tocStx"></a>
<a id="tocstx"></a>

```json
{
  "txid": "string",
  "version": 0,
  "lockTime": 0,
  "vin": [
    {
      "txid": "string",
      "vout": 0,
      "sequence": 0,
      "n": 0,
      "addresses": [
        "string"
      ],
      "isAddress": true,
      "isOwn": true,
      "value": "100000000",
      "hex": "string",
      "asm": "string",
      "coinbase": "string"
    }
  ],
  "vout": [
    {
      "value": "100000000",
      "n": 0,
      "spent": true,
      "spentTxId": "string",
      "spentIndex": 0,
      "spentHeight": 0,
      "hex": "string",
      "asm": "string",
      "addresses": [
        "string"
      ],
      "isAddress": true,
      "isOwn": true,
      "type": "string"
    }
  ],
  "blockHash": "string",
  "blockHeight": 0,
  "confirmations": 0,
  "confirmationETABlocks": 0,
  "confirmationETASeconds": 0,
  "blockTime": 0,
  "size": 0,
  "vsize": 0,
  "value": "100000000",
  "valueIn": "100000000",
  "fees": "100000000",
  "hex": "string",
  "rbf": true,
  "coinSpecificData": null,
  "chainExtraData": {
    "payloadType": "string",
    "payload": null
  },
  "tokenTransfers": [
    {
      "type": "",
      "standard": "",
      "from": "string",
      "to": "string",
      "contract": "string",
      "name": "string",
      "symbol": "string",
      "decimals": 0,
      "value": "100000000",
      "multiTokenValues": [
        {
          "id": "100000000",
          "value": "100000000"
        }
      ]
    }
  ],
  "ethereumSpecific": {
    "type": 0,
    "createdContract": "string",
    "status": 0,
    "error": "string",
    "nonce": 0,
    "gasLimit": 0,
    "gasUsed": 0,
    "gasPrice": "100000000",
    "effectiveGasPrice": "100000000",
    "maxPriorityFeePerGas": "100000000",
    "maxFeePerGas": "100000000",
    "baseFeePerGas": "100000000",
    "l1Fee": 0,
    "l1FeeScalar": "string",
    "l1GasPrice": "100000000",
    "l1GasUsed": 0,
    "data": "string",
    "parsedData": {
      "methodId": "string",
      "name": "string",
      "function": "string",
      "params": [
        {
          "type": "string",
          "values": [
            "string"
          ]
        }
      ],
      "parsedDataTruncated": true
    },
    "internalTransfers": [
      {
        "type": 0,
        "from": "string",
        "to": "string",
        "value": "100000000"
      }
    ]
  },
  "addressAliases": {
    "property1": {
      "Type": "string",
      "Alias": "string"
    },
    "property2": {
      "Type": "string",
      "Alias": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|true|none|none|
|version|integer|false|none|none|
|lockTime|integer|false|none|none|
|vin|[[Vin](#schemavin)]|true|none|none|
|vout|[[Vout](#schemavout)]|true|none|none|
|blockHash|string|false|none|none|
|blockHeight|integer|true|none|-1 for unconfirmed transactions.|
|confirmations|integer|true|none|none|
|confirmationETABlocks|integer|false|none|none|
|confirmationETASeconds|integer(int64)|false|none|none|
|blockTime|integer(int64)|true|none|none|
|size|integer|false|none|none|
|vsize|integer|false|none|none|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|valueIn|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|fees|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|hex|string|false|none|none|
|rbf|boolean|false|none|none|
|coinSpecificData|object|false|none|Raw blockchain-specific transaction data.|
|chainExtraData|[TxChainExtraData](#schematxchainextradata)|false|none|none|
|tokenTransfers|[[TokenTransfer](#schematokentransfer)]|false|none|none|
|ethereumSpecific|[EthereumSpecific](#schemaethereumspecific)|false|none|none|
|addressAliases|[AddressAliases](#schemaaddressaliases)|false|none|none|

<h2 id="tocS_FeeStats">FeeStats</h2>
<!-- backwards compatibility -->
<a id="schemafeestats"></a>
<a id="schema_FeeStats"></a>
<a id="tocSfeestats"></a>
<a id="tocsfeestats"></a>

```json
{
  "txCount": 0,
  "totalFeesSat": "100000000",
  "averageFeePerKb": 0,
  "decilesFeePerKb": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txCount|integer|true|none|none|
|totalFeesSat|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|averageFeePerKb|number|true|none|none|
|decilesFeePerKb|[number]|true|none|none|

<h2 id="tocS_Erc4626TokenMetadata">Erc4626TokenMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaerc4626tokenmetadata"></a>
<a id="schema_Erc4626TokenMetadata"></a>
<a id="tocSerc4626tokenmetadata"></a>
<a id="tocserc4626tokenmetadata"></a>

```json
{
  "contract": "string",
  "name": "string",
  "symbol": "string",
  "decimals": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|true|none|none|
|name|string|false|none|none|
|symbol|string|false|none|none|
|decimals|integer|true|none|none|

<h2 id="tocS_Erc4626Token">Erc4626Token</h2>
<!-- backwards compatibility -->
<a id="schemaerc4626token"></a>
<a id="schema_Erc4626Token"></a>
<a id="tocSerc4626token"></a>
<a id="tocserc4626token"></a>

```json
{
  "asset": {
    "contract": "string",
    "name": "string",
    "symbol": "string",
    "decimals": 0
  },
  "share": {
    "contract": "string",
    "name": "string",
    "symbol": "string",
    "decimals": 0
  },
  "totalAssets": "100000000",
  "convertToAssets1Share": "100000000",
  "convertToShares1Asset": "100000000",
  "previewDeposit1Asset": "100000000",
  "previewRedeem1Share": "100000000",
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Erc4626TokenMetadata](#schemaerc4626tokenmetadata)|false|none|none|
|share|[Erc4626TokenMetadata](#schemaerc4626tokenmetadata)|false|none|none|
|totalAssets|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|convertToAssets1Share|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|convertToShares1Asset|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|previewDeposit1Asset|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|previewRedeem1Share|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|error|string|false|none|none|

<h2 id="tocS_ContractInfoProtocols">ContractInfoProtocols</h2>
<!-- backwards compatibility -->
<a id="schemacontractinfoprotocols"></a>
<a id="schema_ContractInfoProtocols"></a>
<a id="tocScontractinfoprotocols"></a>
<a id="tocscontractinfoprotocols"></a>

```json
{
  "erc4626": {
    "asset": {
      "contract": "string",
      "name": "string",
      "symbol": "string",
      "decimals": 0
    },
    "share": {
      "contract": "string",
      "name": "string",
      "symbol": "string",
      "decimals": 0
    },
    "totalAssets": "100000000",
    "convertToAssets1Share": "100000000",
    "convertToShares1Asset": "100000000",
    "previewDeposit1Asset": "100000000",
    "previewRedeem1Share": "100000000",
    "error": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|erc4626|[Erc4626Token](#schemaerc4626token)|false|none|none|

<h2 id="tocS_ContractInfoRates">ContractInfoRates</h2>
<!-- backwards compatibility -->
<a id="schemacontractinforates"></a>
<a id="schema_ContractInfoRates"></a>
<a id="tocScontractinforates"></a>
<a id="tocscontractinforates"></a>

```json
{
  "baseRate": 0,
  "currency": "string",
  "secondaryRate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseRate|number|false|none|none|
|currency|string|false|none|none|
|secondaryRate|number|false|none|none|

<h2 id="tocS_ContractInfoResult">ContractInfoResult</h2>
<!-- backwards compatibility -->
<a id="schemacontractinforesult"></a>
<a id="schema_ContractInfoResult"></a>
<a id="tocScontractinforesult"></a>
<a id="tocscontractinforesult"></a>

```json
{
  "type": "",
  "standard": "",
  "contract": "string",
  "name": "string",
  "symbol": "string",
  "decimals": 0,
  "createdInBlock": 0,
  "destructedInBlock": 0,
  "rates": {
    "baseRate": 0,
    "currency": "string",
    "secondaryRate": 0
  },
  "protocols": {
    "erc4626": {
      "asset": {
        "contract": "string",
        "name": "string",
        "symbol": "string",
        "decimals": 0
      },
      "share": {
        "contract": "string",
        "name": "string",
        "symbol": "string",
        "decimals": 0
      },
      "totalAssets": "100000000",
      "convertToAssets1Share": "100000000",
      "convertToShares1Asset": "100000000",
      "previewDeposit1Asset": "100000000",
      "previewRedeem1Share": "100000000",
      "error": "string"
    }
  },
  "blockHeight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TokenStandard](#schematokenstandard)|true|none|**Deprecated.** Token standard name. Empty string means no token standard is known.|
|standard|[TokenStandard](#schematokenstandard)|true|none|Token standard name. Empty string means no token standard is known.|
|contract|string|true|none|none|
|name|string|true|none|none|
|symbol|string|true|none|none|
|decimals|integer|true|none|none|
|createdInBlock|integer|false|none|none|
|destructedInBlock|integer|false|none|none|
|rates|[ContractInfoRates](#schemacontractinforates)|false|none|none|
|protocols|[ContractInfoProtocols](#schemacontractinfoprotocols)|false|none|none|
|blockHeight|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|""|
|type|XPUBAddress|
|type|ERC20|
|type|ERC721|
|type|ERC1155|
|type|BEP20|
|type|BEP721|
|type|BEP1155|
|type|TRC20|
|type|TRC721|
|type|TRC1155|
|standard|""|
|standard|XPUBAddress|
|standard|ERC20|
|standard|ERC721|
|standard|ERC1155|
|standard|BEP20|
|standard|BEP721|
|standard|BEP1155|
|standard|TRC20|
|standard|TRC721|
|standard|TRC1155|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "type": "",
  "standard": "",
  "name": "string",
  "path": "string",
  "contract": "string",
  "transfers": 0,
  "symbol": "string",
  "decimals": 0,
  "balance": "100000000",
  "baseValue": 0,
  "secondaryValue": 0,
  "ids": [
    "100000000"
  ],
  "multiTokenValues": [
    {
      "id": "100000000",
      "value": "100000000"
    }
  ],
  "totalReceived": "100000000",
  "totalSent": "100000000",
  "protocols": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TokenStandard](#schematokenstandard)|true|none|**Deprecated.** Token standard name. Empty string means no token standard is known.|
|standard|[TokenStandard](#schematokenstandard)|true|none|Token standard name. Empty string means no token standard is known.|
|name|string|true|none|none|
|path|string|false|none|none|
|contract|string|false|none|none|
|transfers|integer|true|none|none|
|symbol|string|false|none|none|
|decimals|integer|true|none|none|
|balance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|baseValue|number|false|none|none|
|secondaryValue|number|false|none|none|
|ids|[[AmountString](#schemaamountstring)]|false|none|none|
|multiTokenValues|[[MultiTokenValue](#schemamultitokenvalue)]|false|none|none|
|totalReceived|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|totalSent|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|protocols|[string]|false|none|Indexed protocol identifiers such as erc4626.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|""|
|type|XPUBAddress|
|type|ERC20|
|type|ERC721|
|type|ERC1155|
|type|BEP20|
|type|BEP721|
|type|BEP1155|
|type|TRC20|
|type|TRC721|
|type|TRC1155|
|standard|""|
|standard|XPUBAddress|
|standard|ERC20|
|standard|ERC721|
|standard|ERC1155|
|standard|BEP20|
|standard|BEP721|
|standard|BEP1155|
|standard|TRC20|
|standard|TRC721|
|standard|TRC1155|

<h2 id="tocS_StakingPool">StakingPool</h2>
<!-- backwards compatibility -->
<a id="schemastakingpool"></a>
<a id="schema_StakingPool"></a>
<a id="tocSstakingpool"></a>
<a id="tocsstakingpool"></a>

```json
{
  "contract": "string",
  "name": "string",
  "pendingBalance": "100000000",
  "pendingDepositedBalance": "100000000",
  "depositedBalance": "100000000",
  "withdrawTotalAmount": "100000000",
  "claimableAmount": "100000000",
  "restakedReward": "100000000",
  "autocompoundBalance": "100000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|true|none|none|
|name|string|true|none|none|
|pendingBalance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|pendingDepositedBalance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|depositedBalance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|withdrawTotalAmount|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|claimableAmount|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|restakedReward|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|autocompoundBalance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "page": 0,
  "totalPages": 0,
  "itemsOnPage": 0,
  "address": "string",
  "balance": "100000000",
  "totalReceived": "100000000",
  "totalSent": "100000000",
  "unconfirmedBalance": "100000000",
  "unconfirmedTxs": 0,
  "unconfirmedSending": "100000000",
  "unconfirmedReceiving": "100000000",
  "txs": 0,
  "addrTxCount": 0,
  "nonTokenTxs": 0,
  "internalTxs": 0,
  "transactions": [
    {
      "txid": "string",
      "version": 0,
      "lockTime": 0,
      "vin": [
        {
          "txid": "string",
          "vout": 0,
          "sequence": 0,
          "n": 0,
          "addresses": [
            "string"
          ],
          "isAddress": true,
          "isOwn": true,
          "value": "100000000",
          "hex": "string",
          "asm": "string",
          "coinbase": "string"
        }
      ],
      "vout": [
        {
          "value": "100000000",
          "n": 0,
          "spent": true,
          "spentTxId": "string",
          "spentIndex": 0,
          "spentHeight": 0,
          "hex": "string",
          "asm": "string",
          "addresses": [
            "string"
          ],
          "isAddress": true,
          "isOwn": true,
          "type": "string"
        }
      ],
      "blockHash": "string",
      "blockHeight": 0,
      "confirmations": 0,
      "confirmationETABlocks": 0,
      "confirmationETASeconds": 0,
      "blockTime": 0,
      "size": 0,
      "vsize": 0,
      "value": "100000000",
      "valueIn": "100000000",
      "fees": "100000000",
      "hex": "string",
      "rbf": true,
      "coinSpecificData": null,
      "chainExtraData": {
        "payloadType": "string",
        "payload": null
      },
      "tokenTransfers": [
        {
          "type": "",
          "standard": "",
          "from": "string",
          "to": "string",
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0,
          "value": "100000000",
          "multiTokenValues": [
            {
              "id": "100000000",
              "value": "100000000"
            }
          ]
        }
      ],
      "ethereumSpecific": {
        "type": 0,
        "createdContract": "string",
        "status": 0,
        "error": "string",
        "nonce": 0,
        "gasLimit": 0,
        "gasUsed": 0,
        "gasPrice": "100000000",
        "effectiveGasPrice": "100000000",
        "maxPriorityFeePerGas": "100000000",
        "maxFeePerGas": "100000000",
        "baseFeePerGas": "100000000",
        "l1Fee": 0,
        "l1FeeScalar": "string",
        "l1GasPrice": "100000000",
        "l1GasUsed": 0,
        "data": "string",
        "parsedData": {
          "methodId": "string",
          "name": "string",
          "function": "string",
          "params": [
            {
              "type": "string",
              "values": [
                "string"
              ]
            }
          ],
          "parsedDataTruncated": true
        },
        "internalTransfers": [
          {
            "type": 0,
            "from": "string",
            "to": "string",
            "value": "100000000"
          }
        ]
      },
      "addressAliases": {
        "property1": {
          "Type": "string",
          "Alias": "string"
        },
        "property2": {
          "Type": "string",
          "Alias": "string"
        }
      }
    }
  ],
  "txids": [
    "string"
  ],
  "nonce": "string",
  "confirmedNonce": "string",
  "usedTokens": 0,
  "tokens": [
    {
      "type": "",
      "standard": "",
      "name": "string",
      "path": "string",
      "contract": "string",
      "transfers": 0,
      "symbol": "string",
      "decimals": 0,
      "balance": "100000000",
      "baseValue": 0,
      "secondaryValue": 0,
      "ids": [
        "100000000"
      ],
      "multiTokenValues": [
        {
          "id": "100000000",
          "value": "100000000"
        }
      ],
      "totalReceived": "100000000",
      "totalSent": "100000000",
      "protocols": [
        "string"
      ]
    }
  ],
  "secondaryValue": 0,
  "tokensBaseValue": 0,
  "tokensSecondaryValue": 0,
  "totalBaseValue": 0,
  "totalSecondaryValue": 0,
  "contractInfo": {
    "type": "",
    "standard": "",
    "contract": "string",
    "name": "string",
    "symbol": "string",
    "decimals": 0,
    "createdInBlock": 0,
    "destructedInBlock": 0,
    "rates": {
      "baseRate": 0,
      "currency": "string",
      "secondaryRate": 0
    },
    "protocols": {
      "erc4626": {
        "asset": {
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0
        },
        "share": {
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0
        },
        "totalAssets": "100000000",
        "convertToAssets1Share": "100000000",
        "convertToShares1Asset": "100000000",
        "previewDeposit1Asset": "100000000",
        "previewRedeem1Share": "100000000",
        "error": "string"
      }
    },
    "blockHeight": 0
  },
  "erc20Contract": {
    "type": "",
    "standard": "",
    "contract": "string",
    "name": "string",
    "symbol": "string",
    "decimals": 0,
    "createdInBlock": 0,
    "destructedInBlock": 0,
    "rates": {
      "baseRate": 0,
      "currency": "string",
      "secondaryRate": 0
    },
    "protocols": {
      "erc4626": {
        "asset": {
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0
        },
        "share": {
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0
        },
        "totalAssets": "100000000",
        "convertToAssets1Share": "100000000",
        "convertToShares1Asset": "100000000",
        "previewDeposit1Asset": "100000000",
        "previewRedeem1Share": "100000000",
        "error": "string"
      }
    },
    "blockHeight": 0
  },
  "addressAliases": {
    "property1": {
      "Type": "string",
      "Alias": "string"
    },
    "property2": {
      "Type": "string",
      "Alias": "string"
    }
  },
  "stakingPools": [
    {
      "contract": "string",
      "name": "string",
      "pendingBalance": "100000000",
      "pendingDepositedBalance": "100000000",
      "depositedBalance": "100000000",
      "withdrawTotalAmount": "100000000",
      "claimableAmount": "100000000",
      "restakedReward": "100000000",
      "autocompoundBalance": "100000000"
    }
  ],
  "chainExtraData": {
    "payloadType": "string",
    "payload": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|totalPages|integer|false|none|none|
|itemsOnPage|integer|false|none|none|
|address|string|true|none|none|
|balance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|totalReceived|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|totalSent|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|unconfirmedBalance|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|unconfirmedTxs|integer|true|none|none|
|unconfirmedSending|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|unconfirmedReceiving|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|txs|integer|true|none|none|
|addrTxCount|integer|false|none|none|
|nonTokenTxs|integer|false|none|none|
|internalTxs|integer|false|none|none|
|transactions|[[Tx](#schematx)]|false|none|none|
|txids|[string]|false|none|none|
|nonce|string|false|none|none|
|confirmedNonce|string|false|none|none|
|usedTokens|integer|false|none|none|
|tokens|[[Token](#schematoken)]|false|none|none|
|secondaryValue|number|false|none|none|
|tokensBaseValue|number|false|none|none|
|tokensSecondaryValue|number|false|none|none|
|totalBaseValue|number|false|none|none|
|totalSecondaryValue|number|false|none|none|
|contractInfo|[ContractInfoResult](#schemacontractinforesult)|false|none|none|
|erc20Contract|[ContractInfoResult](#schemacontractinforesult)|false|none|**Deprecated.**|
|addressAliases|[AddressAliases](#schemaaddressaliases)|false|none|none|
|stakingPools|[[StakingPool](#schemastakingpool)]|false|none|none|
|chainExtraData|[AccountChainExtraData](#schemaaccountchainextradata)|false|none|none|

<h2 id="tocS_Utxo">Utxo</h2>
<!-- backwards compatibility -->
<a id="schemautxo"></a>
<a id="schema_Utxo"></a>
<a id="tocSutxo"></a>
<a id="tocsutxo"></a>

```json
{
  "txid": "string",
  "vout": 0,
  "value": "100000000",
  "height": 0,
  "confirmations": 0,
  "address": "string",
  "path": "string",
  "lockTime": 0,
  "coinbase": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|true|none|none|
|vout|integer|true|none|none|
|value|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|height|integer|false|none|none|
|confirmations|integer|true|none|none|
|address|string|false|none|none|
|path|string|false|none|none|
|lockTime|integer|false|none|none|
|coinbase|boolean|false|none|none|

<h2 id="tocS_BalanceHistory">BalanceHistory</h2>
<!-- backwards compatibility -->
<a id="schemabalancehistory"></a>
<a id="schema_BalanceHistory"></a>
<a id="tocSbalancehistory"></a>
<a id="tocsbalancehistory"></a>

```json
{
  "time": 0,
  "txs": 0,
  "received": "100000000",
  "sent": "100000000",
  "sentToSelf": "100000000",
  "rates": {
    "property1": 0,
    "property2": 0
  },
  "txid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|integer(int64)|true|none|none|
|txs|integer|true|none|none|
|received|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|sent|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|sentToSelf|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|rates|object|false|none|none|
|txid|string|false|none|none|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "page": 0,
  "totalPages": 0,
  "itemsOnPage": 0,
  "hash": "string",
  "previousBlockHash": "string",
  "nextBlockHash": "string",
  "height": 0,
  "confirmations": 0,
  "size": 0,
  "time": 0,
  "version": "string",
  "merkleRoot": "string",
  "nonce": "string",
  "bits": "string",
  "difficulty": "string",
  "tx": [
    "string"
  ],
  "txCount": 0,
  "txs": [
    {
      "txid": "string",
      "version": 0,
      "lockTime": 0,
      "vin": [
        {
          "txid": "string",
          "vout": 0,
          "sequence": 0,
          "n": 0,
          "addresses": [
            "string"
          ],
          "isAddress": true,
          "isOwn": true,
          "value": "100000000",
          "hex": "string",
          "asm": "string",
          "coinbase": "string"
        }
      ],
      "vout": [
        {
          "value": "100000000",
          "n": 0,
          "spent": true,
          "spentTxId": "string",
          "spentIndex": 0,
          "spentHeight": 0,
          "hex": "string",
          "asm": "string",
          "addresses": [
            "string"
          ],
          "isAddress": true,
          "isOwn": true,
          "type": "string"
        }
      ],
      "blockHash": "string",
      "blockHeight": 0,
      "confirmations": 0,
      "confirmationETABlocks": 0,
      "confirmationETASeconds": 0,
      "blockTime": 0,
      "size": 0,
      "vsize": 0,
      "value": "100000000",
      "valueIn": "100000000",
      "fees": "100000000",
      "hex": "string",
      "rbf": true,
      "coinSpecificData": null,
      "chainExtraData": {
        "payloadType": "string",
        "payload": null
      },
      "tokenTransfers": [
        {
          "type": "",
          "standard": "",
          "from": "string",
          "to": "string",
          "contract": "string",
          "name": "string",
          "symbol": "string",
          "decimals": 0,
          "value": "100000000",
          "multiTokenValues": [
            {
              "id": "100000000",
              "value": "100000000"
            }
          ]
        }
      ],
      "ethereumSpecific": {
        "type": 0,
        "createdContract": "string",
        "status": 0,
        "error": "string",
        "nonce": 0,
        "gasLimit": 0,
        "gasUsed": 0,
        "gasPrice": "100000000",
        "effectiveGasPrice": "100000000",
        "maxPriorityFeePerGas": "100000000",
        "maxFeePerGas": "100000000",
        "baseFeePerGas": "100000000",
        "l1Fee": 0,
        "l1FeeScalar": "string",
        "l1GasPrice": "100000000",
        "l1GasUsed": 0,
        "data": "string",
        "parsedData": {
          "methodId": "string",
          "name": "string",
          "function": "string",
          "params": [
            {
              "type": "string",
              "values": [
                "string"
              ]
            }
          ],
          "parsedDataTruncated": true
        },
        "internalTransfers": [
          {
            "type": 0,
            "from": "string",
            "to": "string",
            "value": "100000000"
          }
        ]
      },
      "addressAliases": {
        "property1": {
          "Type": "string",
          "Alias": "string"
        },
        "property2": {
          "Type": "string",
          "Alias": "string"
        }
      }
    }
  ],
  "addressAliases": {
    "property1": {
      "Type": "string",
      "Alias": "string"
    },
    "property2": {
      "Type": "string",
      "Alias": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|totalPages|integer|false|none|none|
|itemsOnPage|integer|false|none|none|
|hash|string|true|none|none|
|previousBlockHash|string|false|none|none|
|nextBlockHash|string|false|none|none|
|height|integer|true|none|none|
|confirmations|integer|true|none|none|
|size|integer|false|none|none|
|time|integer(int64)|false|none|none|
|version|string \| integer|false|none|none|
|merkleRoot|string|false|none|none|
|nonce|string|false|none|none|
|bits|string|false|none|none|
|difficulty|string|false|none|none|
|tx|[string]|false|none|Transaction ids when full transactions are not returned.|
|txCount|integer|true|none|none|
|txs|[[Tx](#schematx)]|false|none|Full transaction details for this page.|
|addressAliases|[AddressAliases](#schemaaddressaliases)|false|none|none|

<h2 id="tocS_BlockRaw">BlockRaw</h2>
<!-- backwards compatibility -->
<a id="schemablockraw"></a>
<a id="schema_BlockRaw"></a>
<a id="tocSblockraw"></a>
<a id="tocsblockraw"></a>

```json
{
  "hex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hex|string|true|none|none|

<h2 id="tocS_BlockFilters">BlockFilters</h2>
<!-- backwards compatibility -->
<a id="schemablockfilters"></a>
<a id="schema_BlockFilters"></a>
<a id="tocSblockfilters"></a>
<a id="tocsblockfilters"></a>

```json
{
  "P": 0,
  "M": 0,
  "zeroedKey": true,
  "blockFilters": {
    "property1": {
      "blockHash": "string",
      "filter": "string"
    },
    "property2": {
      "blockHash": "string",
      "filter": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|P|integer|true|none|none|
|M|integer(int64)|true|none|none|
|zeroedKey|boolean|true|none|none|
|blockFilters|object|true|none|none|

<h2 id="tocS_BackendInfo">BackendInfo</h2>
<!-- backwards compatibility -->
<a id="schemabackendinfo"></a>
<a id="schema_BackendInfo"></a>
<a id="tocSbackendinfo"></a>
<a id="tocsbackendinfo"></a>

```json
{
  "error": "string",
  "chain": "string",
  "blocks": 0,
  "headers": 0,
  "bestBlockHash": "string",
  "difficulty": "string",
  "sizeOnDisk": 0,
  "version": "string",
  "subversion": "string",
  "protocolVersion": "string",
  "timeOffset": 0,
  "warnings": "string",
  "consensus_version": "string",
  "consensus": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|chain|string|false|none|none|
|blocks|integer|false|none|none|
|headers|integer|false|none|none|
|bestBlockHash|string|false|none|none|
|difficulty|string|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|version|string|false|none|none|
|subversion|string|false|none|none|
|protocolVersion|string|false|none|none|
|timeOffset|integer|false|none|none|
|warnings|string|false|none|none|
|consensus_version|string|false|none|none|
|consensus|object|false|none|Chain-specific consensus data.|

<h2 id="tocS_InternalStateColumn">InternalStateColumn</h2>
<!-- backwards compatibility -->
<a id="schemainternalstatecolumn"></a>
<a id="schema_InternalStateColumn"></a>
<a id="tocSinternalstatecolumn"></a>
<a id="tocsinternalstatecolumn"></a>

```json
{
  "name": "string",
  "version": 0,
  "rows": 0,
  "keyBytes": 0,
  "valueBytes": 0,
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|version|integer|false|none|none|
|rows|integer|false|none|none|
|keyBytes|integer(int64)|false|none|none|
|valueBytes|integer(int64)|false|none|none|
|updated|string|false|none|none|

<h2 id="tocS_BlockbookInfo">BlockbookInfo</h2>
<!-- backwards compatibility -->
<a id="schemablockbookinfo"></a>
<a id="schema_BlockbookInfo"></a>
<a id="tocSblockbookinfo"></a>
<a id="tocsblockbookinfo"></a>

```json
{
  "coin": "string",
  "network": "string",
  "host": "string",
  "version": "string",
  "gitCommit": "string",
  "buildTime": "string",
  "syncMode": true,
  "initialSync": true,
  "inSync": true,
  "bestHeight": 0,
  "lastBlockTime": "string",
  "inSyncMempool": true,
  "lastMempoolTime": "string",
  "mempoolSize": 0,
  "decimals": 0,
  "dbSize": 0,
  "hasFiatRates": true,
  "hasTokenFiatRates": true,
  "currentFiatRatesTime": "string",
  "historicalFiatRatesTime": "string",
  "historicalTokenFiatRatesTime": "string",
  "supportedStakingPools": [
    "string"
  ],
  "dbSizeFromColumns": 0,
  "dbColumns": [
    {
      "name": "string",
      "version": 0,
      "rows": 0,
      "keyBytes": 0,
      "valueBytes": 0,
      "updated": "string"
    }
  ],
  "about": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coin|string|true|none|none|
|network|string|true|none|none|
|host|string|true|none|none|
|version|string|true|none|none|
|gitCommit|string|true|none|none|
|buildTime|string|true|none|none|
|syncMode|boolean|true|none|none|
|initialSync|boolean|true|none|none|
|inSync|boolean|true|none|none|
|bestHeight|integer|true|none|none|
|lastBlockTime|string|false|none|none|
|inSyncMempool|boolean|false|none|none|
|lastMempoolTime|string|false|none|none|
|mempoolSize|integer|false|none|none|
|decimals|integer|true|none|none|
|dbSize|integer(int64)|false|none|none|
|hasFiatRates|boolean|false|none|none|
|hasTokenFiatRates|boolean|false|none|none|
|currentFiatRatesTime|string|false|none|none|
|historicalFiatRatesTime|string|false|none|none|
|historicalTokenFiatRatesTime|string|false|none|none|
|supportedStakingPools|[string]|false|none|none|
|dbSizeFromColumns|integer(int64)|false|none|none|
|dbColumns|[[InternalStateColumn](#schemainternalstatecolumn)]|false|none|none|
|about|string|true|none|none|

<h2 id="tocS_SystemInfo">SystemInfo</h2>
<!-- backwards compatibility -->
<a id="schemasysteminfo"></a>
<a id="schema_SystemInfo"></a>
<a id="tocSsysteminfo"></a>
<a id="tocssysteminfo"></a>

```json
{
  "blockbook": {
    "coin": "string",
    "network": "string",
    "host": "string",
    "version": "string",
    "gitCommit": "string",
    "buildTime": "string",
    "syncMode": true,
    "initialSync": true,
    "inSync": true,
    "bestHeight": 0,
    "lastBlockTime": "string",
    "inSyncMempool": true,
    "lastMempoolTime": "string",
    "mempoolSize": 0,
    "decimals": 0,
    "dbSize": 0,
    "hasFiatRates": true,
    "hasTokenFiatRates": true,
    "currentFiatRatesTime": "string",
    "historicalFiatRatesTime": "string",
    "historicalTokenFiatRatesTime": "string",
    "supportedStakingPools": [
      "string"
    ],
    "dbSizeFromColumns": 0,
    "dbColumns": [
      {
        "name": "string",
        "version": 0,
        "rows": 0,
        "keyBytes": 0,
        "valueBytes": 0,
        "updated": "string"
      }
    ],
    "about": "string"
  },
  "backend": {
    "error": "string",
    "chain": "string",
    "blocks": 0,
    "headers": 0,
    "bestBlockHash": "string",
    "difficulty": "string",
    "sizeOnDisk": 0,
    "version": "string",
    "subversion": "string",
    "protocolVersion": "string",
    "timeOffset": 0,
    "warnings": "string",
    "consensus_version": "string",
    "consensus": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockbook|[BlockbookInfo](#schemablockbookinfo)|false|none|none|
|backend|[BackendInfo](#schemabackendinfo)|false|none|none|

<h2 id="tocS_FiatTicker">FiatTicker</h2>
<!-- backwards compatibility -->
<a id="schemafiatticker"></a>
<a id="schema_FiatTicker"></a>
<a id="tocSfiatticker"></a>
<a id="tocsfiatticker"></a>

```json
{
  "ts": 0,
  "rates": {
    "property1": 0,
    "property2": 0
  },
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer(int64)|false|none|none|
|rates|object|true|none|none|
|error|string|false|none|none|

<h2 id="tocS_AvailableVsCurrencies">AvailableVsCurrencies</h2>
<!-- backwards compatibility -->
<a id="schemaavailablevscurrencies"></a>
<a id="schema_AvailableVsCurrencies"></a>
<a id="tocSavailablevscurrencies"></a>
<a id="tocsavailablevscurrencies"></a>

```json
{
  "ts": 0,
  "available_currencies": [
    "string"
  ],
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer(int64)|false|none|none|
|available_currencies|[string]|true|none|none|
|error|string|false|none|none|

<h2 id="tocS_WsRequest">WsRequest</h2>
<!-- backwards compatibility -->
<a id="schemawsrequest"></a>
<a id="schema_WsRequest"></a>
<a id="tocSwsrequest"></a>
<a id="tocswsrequest"></a>

```json
{
  "id": "string",
  "method": "getAccountInfo",
  "params": {
    "descriptor": "string",
    "details": "basic",
    "tokens": "derived",
    "protocols": [
      "string"
    ],
    "pageSize": 0,
    "page": 0,
    "from": 0,
    "to": 0,
    "contractFilter": "string",
    "secondaryCurrency": "string",
    "gap": 0,
    "confirmedNonce": true,
    "privatePending": {
      "nonces": [
        0
      ],
      "txids": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Client-chosen request id echoed by the response.|
|method|string|true|none|none|
|params|[WsAccountInfoReq](#schemawsaccountinforeq) \| [WsContractInfoReq](#schemawscontractinforeq) \| [WsBlockHashReq](#schemawsblockhashreq) \| [WsBlockReq](#schemawsblockreq) \| [WsAccountUtxoReq](#schemawsaccountutxoreq) \| [WsBalanceHistoryReq](#schemawsbalancehistoryreq) \| [WsTransactionReq](#schemawstransactionreq) \| [WsTransactionSpecificReq](#schemawstransactionspecificreq) \| [WsEstimateFeeReq](#schemawsestimatefeereq) \| [WsSendTransactionReq](#schemawssendtransactionreq) \| [WsMempoolFiltersReq](#schemawsmempoolfiltersreq) \| [WsBlockFilterReq](#schemawsblockfilterreq) \| [WsBlockFiltersBatchReq](#schemawsblockfiltersbatchreq) \| [WsRpcCallReq](#schemawsrpccallreq) \| [WsSubscribeAddressesReq](#schemawssubscribeaddressesreq) \| [WsSubscribeFiatRatesReq](#schemawssubscribefiatratesreq) \| [WsCurrentFiatRatesReq](#schemawscurrentfiatratesreq) \| [WsFiatRatesForTimestampsReq](#schemawsfiatratesfortimestampsreq) \| [WsFiatRatesTickersListReq](#schemawsfiatratestickerslistreq) \| object|false|none|Method-specific request parameters.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|getAccountInfo|
|method|getContractInfo|
|method|getInfo|
|method|getBlockHash|
|method|getBlock|
|method|getAccountUtxo|
|method|getBalanceHistory|
|method|getTransaction|
|method|getTransactionSpecific|
|method|estimateFee|
|method|longTermFeeRate|
|method|sendTransaction|
|method|getMempoolFilters|
|method|getBlockFilter|
|method|getBlockFiltersBatch|
|method|rpcCall|
|method|subscribeNewBlock|
|method|unsubscribeNewBlock|
|method|subscribeNewTransaction|
|method|unsubscribeNewTransaction|
|method|subscribeAddresses|
|method|unsubscribeAddresses|
|method|subscribeFiatRates|
|method|unsubscribeFiatRates|
|method|ping|
|method|getCurrentFiatRates|
|method|getFiatRatesForTimestamps|
|method|getFiatRatesTickersList|

<h2 id="tocS_WsResponse">WsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawsresponse"></a>
<a id="schema_WsResponse"></a>
<a id="tocSwsresponse"></a>
<a id="tocswsresponse"></a>

```json
{
  "id": "string",
  "data": {
    "name": "string",
    "shortcut": "string",
    "network": "string",
    "decimals": 0,
    "version": "string",
    "bestHeight": 0,
    "bestHash": "string",
    "block0Hash": "string",
    "testnet": true,
    "backend": {
      "version": "string",
      "subversion": "string",
      "consensus_version": "string",
      "consensus": null
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|data|[WsInfoRes](#schemawsinfores) \| [WsBlockHashRes](#schemawsblockhashres) \| [Block](#schemablock) \| [Address](#schemaaddress) \| [[Utxo](#schemautxo)] \| [Tx](#schematx) \| [WsEstimateFeeRes](#schemawsestimatefeeres) \| [ResultStringResponse](#schemaresultstringresponse) \| [FiatTicker](#schemafiatticker) \| [FiatTickers](#schemafiattickers) \| [AvailableVsCurrencies](#schemaavailablevscurrencies) \| [WsRpcCallRes](#schemawsrpccallres) \| [MempoolTxidFilterEntries](#schemamempooltxidfilterentries) \| [WsErrorData](#schemawserrordata) \| object|true|none|Method-specific result, or WsErrorData on failure.|

<h2 id="tocS_WsErrorData">WsErrorData</h2>
<!-- backwards compatibility -->
<a id="schemawserrordata"></a>
<a id="schema_WsErrorData"></a>
<a id="tocSwserrordata"></a>
<a id="tocswserrordata"></a>

```json
{
  "error": {
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WsAccountInfoReq">WsAccountInfoReq</h2>
<!-- backwards compatibility -->
<a id="schemawsaccountinforeq"></a>
<a id="schema_WsAccountInfoReq"></a>
<a id="tocSwsaccountinforeq"></a>
<a id="tocswsaccountinforeq"></a>

```json
{
  "descriptor": "string",
  "details": "basic",
  "tokens": "derived",
  "protocols": [
    "string"
  ],
  "pageSize": 0,
  "page": 0,
  "from": 0,
  "to": 0,
  "contractFilter": "string",
  "secondaryCurrency": "string",
  "gap": 0,
  "confirmedNonce": true,
  "privatePending": {
    "nonces": [
      0
    ],
    "txids": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptor|string|true|none|none|
|details|string|false|none|none|
|tokens|string|false|none|none|
|protocols|[string]|false|none|none|
|pageSize|integer|false|none|none|
|page|integer|false|none|none|
|from|integer|false|none|none|
|to|integer|false|none|none|
|contractFilter|string|false|none|none|
|secondaryCurrency|string|false|none|none|
|gap|integer|false|none|none|
|confirmedNonce|boolean|false|none|none|
|privatePending|[WsPrivatePending](#schemawsprivatepending)|false|none|Ethereum-like only: the private (alternative send-tx / relay) transactions the wallet knows are in flight for the queried address. Only nonces drive behavior; txids are reserved for future use. See docs/evm-send.md.|

#### Enumerated Values

|Property|Value|
|---|---|
|details|basic|
|details|tokens|
|details|tokenBalances|
|details|txids|
|details|txslight|
|details|txs|
|tokens|derived|
|tokens|used|
|tokens|nonzero|

<h2 id="tocS_WsPrivatePending">WsPrivatePending</h2>
<!-- backwards compatibility -->
<a id="schemawsprivatepending"></a>
<a id="schema_WsPrivatePending"></a>
<a id="tocSwsprivatepending"></a>
<a id="tocswsprivatepending"></a>

```json
{
  "nonces": [
    0
  ],
  "txids": [
    "string"
  ]
}
```

Ethereum-like only: the private (alternative send-tx / relay) transactions the wallet knows are in flight for the queried address. Only nonces drive behavior; txids are reserved for future use. See docs/evm-send.md.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonces|[integer(int64)]|false|none|none|
|txids|[string]|false|none|none|

<h2 id="tocS_WsContractInfoReq">WsContractInfoReq</h2>
<!-- backwards compatibility -->
<a id="schemawscontractinforeq"></a>
<a id="schema_WsContractInfoReq"></a>
<a id="tocSwscontractinforeq"></a>
<a id="tocswscontractinforeq"></a>

```json
{
  "contract": "string",
  "currency": "string",
  "protocols": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|true|none|none|
|currency|string|false|none|none|
|protocols|[string]|false|none|none|

<h2 id="tocS_WsBackendInfo">WsBackendInfo</h2>
<!-- backwards compatibility -->
<a id="schemawsbackendinfo"></a>
<a id="schema_WsBackendInfo"></a>
<a id="tocSwsbackendinfo"></a>
<a id="tocswsbackendinfo"></a>

```json
{
  "version": "string",
  "subversion": "string",
  "consensus_version": "string",
  "consensus": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|
|subversion|string|false|none|none|
|consensus_version|string|false|none|none|
|consensus|object|false|none|Chain-specific consensus data.|

<h2 id="tocS_WsInfoRes">WsInfoRes</h2>
<!-- backwards compatibility -->
<a id="schemawsinfores"></a>
<a id="schema_WsInfoRes"></a>
<a id="tocSwsinfores"></a>
<a id="tocswsinfores"></a>

```json
{
  "name": "string",
  "shortcut": "string",
  "network": "string",
  "decimals": 0,
  "version": "string",
  "bestHeight": 0,
  "bestHash": "string",
  "block0Hash": "string",
  "testnet": true,
  "backend": {
    "version": "string",
    "subversion": "string",
    "consensus_version": "string",
    "consensus": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|shortcut|string|true|none|none|
|network|string|true|none|none|
|decimals|integer|true|none|none|
|version|string|true|none|none|
|bestHeight|integer|true|none|none|
|bestHash|string|true|none|none|
|block0Hash|string|true|none|none|
|testnet|boolean|true|none|none|
|backend|[WsBackendInfo](#schemawsbackendinfo)|true|none|none|

<h2 id="tocS_WsBlockHashReq">WsBlockHashReq</h2>
<!-- backwards compatibility -->
<a id="schemawsblockhashreq"></a>
<a id="schema_WsBlockHashReq"></a>
<a id="tocSwsblockhashreq"></a>
<a id="tocswsblockhashreq"></a>

```json
{
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|true|none|none|

<h2 id="tocS_WsBlockHashRes">WsBlockHashRes</h2>
<!-- backwards compatibility -->
<a id="schemawsblockhashres"></a>
<a id="schema_WsBlockHashRes"></a>
<a id="tocSwsblockhashres"></a>
<a id="tocswsblockhashres"></a>

```json
{
  "hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|

<h2 id="tocS_WsBlockReq">WsBlockReq</h2>
<!-- backwards compatibility -->
<a id="schemawsblockreq"></a>
<a id="schema_WsBlockReq"></a>
<a id="tocSwsblockreq"></a>
<a id="tocswsblockreq"></a>

```json
{
  "id": "string",
  "pageSize": 0,
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|pageSize|integer|false|none|none|
|page|integer|false|none|none|

<h2 id="tocS_WsAccountUtxoReq">WsAccountUtxoReq</h2>
<!-- backwards compatibility -->
<a id="schemawsaccountutxoreq"></a>
<a id="schema_WsAccountUtxoReq"></a>
<a id="tocSwsaccountutxoreq"></a>
<a id="tocswsaccountutxoreq"></a>

```json
{
  "descriptor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptor|string|true|none|none|

<h2 id="tocS_WsBalanceHistoryReq">WsBalanceHistoryReq</h2>
<!-- backwards compatibility -->
<a id="schemawsbalancehistoryreq"></a>
<a id="schema_WsBalanceHistoryReq"></a>
<a id="tocSwsbalancehistoryreq"></a>
<a id="tocswsbalancehistoryreq"></a>

```json
{
  "descriptor": "string",
  "from": 0,
  "to": 0,
  "currencies": [
    "string"
  ],
  "gap": 0,
  "groupBy": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptor|string|true|none|none|
|from|integer(int64)|false|none|none|
|to|integer(int64)|false|none|none|
|currencies|[string]|false|none|none|
|gap|integer|false|none|none|
|groupBy|integer|false|none|none|

<h2 id="tocS_WsTransactionReq">WsTransactionReq</h2>
<!-- backwards compatibility -->
<a id="schemawstransactionreq"></a>
<a id="schema_WsTransactionReq"></a>
<a id="tocSwstransactionreq"></a>
<a id="tocswstransactionreq"></a>

```json
{
  "txid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|true|none|none|

<h2 id="tocS_WsTransactionSpecificReq">WsTransactionSpecificReq</h2>
<!-- backwards compatibility -->
<a id="schemawstransactionspecificreq"></a>
<a id="schema_WsTransactionSpecificReq"></a>
<a id="tocSwstransactionspecificreq"></a>
<a id="tocswstransactionspecificreq"></a>

```json
{
  "txid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txid|string|true|none|none|

<h2 id="tocS_WsEstimateFeeReq">WsEstimateFeeReq</h2>
<!-- backwards compatibility -->
<a id="schemawsestimatefeereq"></a>
<a id="schema_WsEstimateFeeReq"></a>
<a id="tocSwsestimatefeereq"></a>
<a id="tocswsestimatefeereq"></a>

```json
{
  "blocks": [
    0
  ],
  "specific": {
    "conservative": true,
    "txsize": 0,
    "from": "string",
    "to": "string",
    "data": "string",
    "value": "string",
    "privatePending": {
      "nonces": [
        0
      ],
      "txids": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[integer]|false|none|none|
|specific|object|false|none|none|

<h2 id="tocS_Eip1559Fee">Eip1559Fee</h2>
<!-- backwards compatibility -->
<a id="schemaeip1559fee"></a>
<a id="schema_Eip1559Fee"></a>
<a id="tocSeip1559fee"></a>
<a id="tocseip1559fee"></a>

```json
{
  "maxFeePerGas": "100000000",
  "maxPriorityFeePerGas": "100000000",
  "minWaitTimeEstimate": 0,
  "maxWaitTimeEstimate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|maxPriorityFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|minWaitTimeEstimate|number|false|none|none|
|maxWaitTimeEstimate|number|false|none|none|

<h2 id="tocS_Eip1559Fees">Eip1559Fees</h2>
<!-- backwards compatibility -->
<a id="schemaeip1559fees"></a>
<a id="schema_Eip1559Fees"></a>
<a id="tocSeip1559fees"></a>
<a id="tocseip1559fees"></a>

```json
{
  "baseFeePerGas": "100000000",
  "low": {
    "maxFeePerGas": "100000000",
    "maxPriorityFeePerGas": "100000000",
    "minWaitTimeEstimate": 0,
    "maxWaitTimeEstimate": 0
  },
  "medium": {
    "maxFeePerGas": "100000000",
    "maxPriorityFeePerGas": "100000000",
    "minWaitTimeEstimate": 0,
    "maxWaitTimeEstimate": 0
  },
  "high": {
    "maxFeePerGas": "100000000",
    "maxPriorityFeePerGas": "100000000",
    "minWaitTimeEstimate": 0,
    "maxWaitTimeEstimate": 0
  },
  "instant": {
    "maxFeePerGas": "100000000",
    "maxPriorityFeePerGas": "100000000",
    "minWaitTimeEstimate": 0,
    "maxWaitTimeEstimate": 0
  },
  "networkCongestion": 0,
  "latestPriorityFeeRange": [
    "100000000"
  ],
  "historicalPriorityFeeRange": [
    "100000000"
  ],
  "historicalBaseFeeRange": [
    "100000000"
  ],
  "priorityFeeTrend": "up",
  "baseFeeTrend": "up"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|low|[Eip1559Fee](#schemaeip1559fee)|false|none|none|
|medium|[Eip1559Fee](#schemaeip1559fee)|false|none|none|
|high|[Eip1559Fee](#schemaeip1559fee)|false|none|none|
|instant|[Eip1559Fee](#schemaeip1559fee)|false|none|none|
|networkCongestion|number|false|none|none|
|latestPriorityFeeRange|[[AmountString](#schemaamountstring)]|false|none|none|
|historicalPriorityFeeRange|[[AmountString](#schemaamountstring)]|false|none|none|
|historicalBaseFeeRange|[[AmountString](#schemaamountstring)]|false|none|none|
|priorityFeeTrend|string|false|none|none|
|baseFeeTrend|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priorityFeeTrend|up|
|priorityFeeTrend|down|
|baseFeeTrend|up|
|baseFeeTrend|down|

<h2 id="tocS_EthereumGasData">EthereumGasData</h2>
<!-- backwards compatibility -->
<a id="schemaethereumgasdata"></a>
<a id="schema_EthereumGasData"></a>
<a id="tocSethereumgasdata"></a>
<a id="tocsethereumgasdata"></a>

```json
{
  "baseFeePerGas": "100000000",
  "blockGasUsed": "100000000",
  "blockGasLimit": "100000000"
}
```

EVM block-level gas figures pushed with subscribeNewBlock notifications, used by the frontend to deterministically project the next block's EIP-1559 base fee. Decimal strings, omitted for pre-London blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseFeePerGas|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|blockGasUsed|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|blockGasLimit|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|

<h2 id="tocS_WsNewBlock">WsNewBlock</h2>
<!-- backwards compatibility -->
<a id="schemawsnewblock"></a>
<a id="schema_WsNewBlock"></a>
<a id="tocSwsnewblock"></a>
<a id="tocswsnewblock"></a>

```json
{
  "height": 0,
  "hash": "string",
  "evmData": {
    "baseFeePerGas": "100000000",
    "blockGasUsed": "100000000",
    "blockGasLimit": "100000000"
  }
}
```

Pushed to subscribeNewBlock subscribers when a new block is connected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number|true|none|none|
|hash|string|true|none|none|
|evmData|[EthereumGasData](#schemaethereumgasdata) \| null|true|none|EVM gas data for the EIP-1559 base-fee projection; null on non-EVM chains.|

<h2 id="tocS_WsEstimateFeeRes">WsEstimateFeeRes</h2>
<!-- backwards compatibility -->
<a id="schemawsestimatefeeres"></a>
<a id="schema_WsEstimateFeeRes"></a>
<a id="tocSwsestimatefeeres"></a>
<a id="tocswsestimatefeeres"></a>

```json
{
  "feePerTx": "100000000",
  "feePerUnit": "100000000",
  "feeLimit": "100000000",
  "eip1559": {
    "baseFeePerGas": "100000000",
    "low": {
      "maxFeePerGas": "100000000",
      "maxPriorityFeePerGas": "100000000",
      "minWaitTimeEstimate": 0,
      "maxWaitTimeEstimate": 0
    },
    "medium": {
      "maxFeePerGas": "100000000",
      "maxPriorityFeePerGas": "100000000",
      "minWaitTimeEstimate": 0,
      "maxWaitTimeEstimate": 0
    },
    "high": {
      "maxFeePerGas": "100000000",
      "maxPriorityFeePerGas": "100000000",
      "minWaitTimeEstimate": 0,
      "maxWaitTimeEstimate": 0
    },
    "instant": {
      "maxFeePerGas": "100000000",
      "maxPriorityFeePerGas": "100000000",
      "minWaitTimeEstimate": 0,
      "maxWaitTimeEstimate": 0
    },
    "networkCongestion": 0,
    "latestPriorityFeeRange": [
      "100000000"
    ],
    "historicalPriorityFeeRange": [
      "100000000"
    ],
    "historicalBaseFeeRange": [
      "100000000"
    ],
    "priorityFeeTrend": "up",
    "baseFeeTrend": "up"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feePerTx|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|feePerUnit|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|feeLimit|[AmountString](#schemaamountstring)|false|none|Integer amount in the lowest chain denomination, encoded as a string.|
|eip1559|[Eip1559Fees](#schemaeip1559fees)|false|none|none|

<h2 id="tocS_WsSendTransactionReq">WsSendTransactionReq</h2>
<!-- backwards compatibility -->
<a id="schemawssendtransactionreq"></a>
<a id="schema_WsSendTransactionReq"></a>
<a id="tocSwssendtransactionreq"></a>
<a id="tocswssendtransactionreq"></a>

```json
{
  "hex": "string",
  "disableAlternativeRpc": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hex|string|false|none|none|
|disableAlternativeRpc|boolean|false|none|none|

<h2 id="tocS_WsMempoolFiltersReq">WsMempoolFiltersReq</h2>
<!-- backwards compatibility -->
<a id="schemawsmempoolfiltersreq"></a>
<a id="schema_WsMempoolFiltersReq"></a>
<a id="tocSwsmempoolfiltersreq"></a>
<a id="tocswsmempoolfiltersreq"></a>

```json
{
  "scriptType": "string",
  "fromTimestamp": 0,
  "M": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scriptType|string|true|none|none|
|fromTimestamp|integer|true|none|none|
|M|integer(int64)|false|none|none|

<h2 id="tocS_WsBlockFilterReq">WsBlockFilterReq</h2>
<!-- backwards compatibility -->
<a id="schemawsblockfilterreq"></a>
<a id="schema_WsBlockFilterReq"></a>
<a id="tocSwsblockfilterreq"></a>
<a id="tocswsblockfilterreq"></a>

```json
{
  "scriptType": "string",
  "blockHash": "string",
  "M": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scriptType|string|true|none|none|
|blockHash|string|true|none|none|
|M|integer(int64)|false|none|none|

<h2 id="tocS_WsBlockFiltersBatchReq">WsBlockFiltersBatchReq</h2>
<!-- backwards compatibility -->
<a id="schemawsblockfiltersbatchreq"></a>
<a id="schema_WsBlockFiltersBatchReq"></a>
<a id="tocSwsblockfiltersbatchreq"></a>
<a id="tocswsblockfiltersbatchreq"></a>

```json
{
  "scriptType": "string",
  "bestKnownBlockHash": "string",
  "pageSize": 0,
  "M": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scriptType|string|true|none|none|
|bestKnownBlockHash|string|true|none|none|
|pageSize|integer|false|none|none|
|M|integer(int64)|false|none|none|

<h2 id="tocS_WsRpcCallReq">WsRpcCallReq</h2>
<!-- backwards compatibility -->
<a id="schemawsrpccallreq"></a>
<a id="schema_WsRpcCallReq"></a>
<a id="tocSwsrpccallreq"></a>
<a id="tocswsrpccallreq"></a>

```json
{
  "from": "string",
  "to": "string",
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|none|
|to|string|true|none|none|
|data|string|true|none|none|

<h2 id="tocS_WsRpcCallRes">WsRpcCallRes</h2>
<!-- backwards compatibility -->
<a id="schemawsrpccallres"></a>
<a id="schema_WsRpcCallRes"></a>
<a id="tocSwsrpccallres"></a>
<a id="tocswsrpccallres"></a>

```json
{
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|none|

<h2 id="tocS_WsSubscribeAddressesReq">WsSubscribeAddressesReq</h2>
<!-- backwards compatibility -->
<a id="schemawssubscribeaddressesreq"></a>
<a id="schema_WsSubscribeAddressesReq"></a>
<a id="tocSwssubscribeaddressesreq"></a>
<a id="tocswssubscribeaddressesreq"></a>

```json
{
  "addresses": [
    "string"
  ],
  "newBlockTxs": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|true|none|none|
|newBlockTxs|boolean|false|none|none|

<h2 id="tocS_WsSubscribeFiatRatesReq">WsSubscribeFiatRatesReq</h2>
<!-- backwards compatibility -->
<a id="schemawssubscribefiatratesreq"></a>
<a id="schema_WsSubscribeFiatRatesReq"></a>
<a id="tocSwssubscribefiatratesreq"></a>
<a id="tocswssubscribefiatratesreq"></a>

```json
{
  "currency": "string",
  "tokens": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|tokens|[string]|false|none|none|

<h2 id="tocS_WsCurrentFiatRatesReq">WsCurrentFiatRatesReq</h2>
<!-- backwards compatibility -->
<a id="schemawscurrentfiatratesreq"></a>
<a id="schema_WsCurrentFiatRatesReq"></a>
<a id="tocSwscurrentfiatratesreq"></a>
<a id="tocswscurrentfiatratesreq"></a>

```json
{
  "currencies": [
    "string"
  ],
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencies|[string]|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_WsFiatRatesForTimestampsReq">WsFiatRatesForTimestampsReq</h2>
<!-- backwards compatibility -->
<a id="schemawsfiatratesfortimestampsreq"></a>
<a id="schema_WsFiatRatesForTimestampsReq"></a>
<a id="tocSwsfiatratesfortimestampsreq"></a>
<a id="tocswsfiatratesfortimestampsreq"></a>

```json
{
  "timestamps": [
    0
  ],
  "currencies": [
    "string"
  ],
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamps|[integer(int64)]|true|none|none|
|currencies|[string]|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_WsFiatRatesTickersListReq">WsFiatRatesTickersListReq</h2>
<!-- backwards compatibility -->
<a id="schemawsfiatratestickerslistreq"></a>
<a id="schema_WsFiatRatesTickersListReq"></a>
<a id="tocSwsfiatratestickerslistreq"></a>
<a id="tocswsfiatratestickerslistreq"></a>

```json
{
  "timestamp": 0,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer(int64)|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_FiatTickers">FiatTickers</h2>
<!-- backwards compatibility -->
<a id="schemafiattickers"></a>
<a id="schema_FiatTickers"></a>
<a id="tocSfiattickers"></a>
<a id="tocsfiattickers"></a>

```json
{
  "tickers": [
    {
      "ts": 0,
      "rates": {
        "property1": 0,
        "property2": 0
      },
      "error": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tickers|[[FiatTicker](#schemafiatticker)]|true|none|none|

<h2 id="tocS_MempoolTxidFilterEntries">MempoolTxidFilterEntries</h2>
<!-- backwards compatibility -->
<a id="schemamempooltxidfilterentries"></a>
<a id="schema_MempoolTxidFilterEntries"></a>
<a id="tocSmempooltxidfilterentries"></a>
<a id="tocsmempooltxidfilterentries"></a>

```json
{
  "entries": {
    "property1": "string",
    "property2": "string"
  },
  "usedZeroedKey": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|false|none|none|
|usedZeroedKey|boolean|false|none|none|
