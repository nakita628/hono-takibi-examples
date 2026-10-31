<h1 id="net-api">Net API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://eos.local">http://eos.local</a>

* <a href="http://localhost:8080/v1/">http://localhost:8080/v1/</a>

Web: <a href="https://eos.io">https://eos.io</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<h1 id="net-api-default">Default</h1>

## connect

<a id="opIdconnect"></a>

> Code samples

```bash
curl https://example.com/net/connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "endpoint": "string"
  }'
```

`POST /net/connect`

Initiate a connection to a specified peer.

> Body parameter

```json
{
  "endpoint": "string"
}
```

<h3 id="connect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» endpoint|body|string|true|the endpoint to connect to expressed as either IP address or URL|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="connect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## connections

<a id="opIdconnections"></a>

> Code samples

```bash
curl https://example.com/net/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /net/connections`

Returns an array of all peer connection statuses.

> Body parameter

```json
{}
```

<h3 id="connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
[
  {
    "connecting": true,
    "last_handshake": {
      "agent": "string",
      "chain_id": "string",
      "generation": 0,
      "head_id": "string",
      "head_num": 0,
      "key": "string",
      "last_irreversible_block_id": "string",
      "last_irreversible_block_num": 0,
      "network_version": 0,
      "node_id": "string",
      "os": "string",
      "p2p_address": "string",
      "sig": "string",
      "time": "string",
      "token": "string"
    },
    "peer": "string",
    "syncing": true
  }
]
```

<h3 id="connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» connecting|boolean|false|none|True if the peer is connecting, otherwise false|
|» last_handshake|object|false|none|Structure holding detailed information about the connection|
|» » agent|string|false|none|Agent name|
|» » chain_id|string|false|none|none|
|» » generation|integer|false|none|Generation number|
|» » head_id|string|false|none|none|
|» » head_num|integer|false|none|Head number|
|» » key|string|false|none|Base58 encoded EOSIO public key|
|» » last_irreversible_block_id|string|false|none|none|
|» » last_irreversible_block_num|integer|false|none|Last irreversible block number|
|» » network_version|integer|false|none|Incremental value above a computed base|
|» » node_id|string|false|none|none|
|» » os|string|false|none|Operating system name|
|» » p2p_address|string|false|none|IP address or URL of the peer|
|» » sig|string|false|none|Base58 encoded EOSIO cryptographic signature|
|» » time|string|false|none|Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss|
|» » token|string|false|none|none|
|» peer|string|false|none|The IP address or URL of the peer|
|» syncing|boolean|false|none|True if the peer is syncing, otherwise false|

<aside class="success">
This operation does not require authentication
</aside>

## disconnect

<a id="opIddisconnect"></a>

> Code samples

```bash
curl https://example.com/net/disconnect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "endpoint": "string"
  }'
```

`POST /net/disconnect`

Initiate disconnection from a specified peer.

> Body parameter

```json
{
  "endpoint": "string"
}
```

<h3 id="disconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» endpoint|body|string|true|the endpoint to disconnect from, expressed as either IP address or URL|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="disconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## status

<a id="opIdstatus"></a>

> Code samples

```bash
curl https://example.com/net/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "endpoint": "string"
  }'
```

`POST /net/status`

Retrieves the connection status for a specified peer.

> Body parameter

```json
{
  "endpoint": "string"
}
```

<h3 id="status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» endpoint|body|string|true|the endpoint to get the status for, to expressed as either IP address or URL|

> Example responses

> 200 Response

```json
{
  "connecting": true,
  "last_handshake": {
    "agent": "string",
    "chain_id": "string",
    "generation": 0,
    "head_id": "string",
    "head_num": 0,
    "key": "string",
    "last_irreversible_block_id": "string",
    "last_irreversible_block_num": 0,
    "network_version": 0,
    "node_id": "string",
    "os": "string",
    "p2p_address": "string",
    "sig": "string",
    "time": "string",
    "token": "string"
  },
  "peer": "string",
  "syncing": true
}
```

<h3 id="status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connecting|boolean|false|none|True if the peer is connecting, otherwise false|
|last_handshake|object|false|none|Structure holding detailed information about the connection|
|» agent|string|false|none|Agent name|
|» chain_id|string|false|none|none|
|» generation|integer|false|none|Generation number|
|» head_id|string|false|none|none|
|» head_num|integer|false|none|Head number|
|» key|string|false|none|Base58 encoded EOSIO public key|
|» last_irreversible_block_id|string|false|none|none|
|» last_irreversible_block_num|integer|false|none|Last irreversible block number|
|» network_version|integer|false|none|Incremental value above a computed base|
|» node_id|string|false|none|none|
|» os|string|false|none|Operating system name|
|» p2p_address|string|false|none|IP address or URL of the peer|
|» sig|string|false|none|Base58 encoded EOSIO cryptographic signature|
|» time|string|false|none|Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss|
|» token|string|false|none|none|
|peer|string|false|none|The IP address or URL of the peer|
|syncing|boolean|false|none|True if the peer is syncing, otherwise false|

<aside class="success">
This operation does not require authentication
</aside>
