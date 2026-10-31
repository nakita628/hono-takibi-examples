<h1 id="blockfrostio-api-documentation">Blockfrost.io ~ API Documentation v0.1.93</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Blockfrost is an API as a service that allows users to interact with the Cardano blockchain, Midnight blockchain, and parts of their ecosystems.

## Tokens

After signing up on https://blockfrost.io, a `project_id` token is automatically generated for each project.
HTTP header of your request MUST include this `project_id` in order to authenticate against Blockfrost servers.

## Available networks

At the moment, you can use the following networks. Please, note that each network has its own `project_id`.

<table>
  <tbody>
    <tr>
      <td>
          <b>Network</b>
      </td>
      <td>
          <b>Endpoint</b>
      </td>
    </tr>
    <tr>
        <td>Cardano mainnet</td>
        <td>
            <code>https://cardano-mainnet.blockfrost.io/api/v0</code>
        </td>
    </tr>
    <tr>
        <td>Cardano preprod</td>
        <td>
            <code>https://cardano-preprod.blockfrost.io/api/v0</code>
        </td>
    </tr>
    <tr>
        <td>Cardano preview</td>
        <td>
            <code>https://cardano-preview.blockfrost.io/api/v0</code>
        </td>
    </tr>
    <tr>
        <td>Midnight mainnet</td>
        <td>
            <code>https://midnight-mainnet.blockfrost.io/api/v0</code>
        </td>
    </tr>
    <tr>
        <td>InterPlanetary File System</td>
        <td>
            <code>https://ipfs.blockfrost.io/api/v0</code>
        </td>
    </tr>
  </tbody>
</table>

## Concepts

* All endpoints return either a JSON object or an array.
* Data is returned in *ascending* (oldest first, newest last) order, if not stated otherwise.
  * You might use the `?order=desc` query parameter to reverse this order.
* By default, we return 100 results at a time. You have to use `?page=2` to list through the results.
* All time and timestamp related fields (except `server_time`) are in seconds of UNIX time.
* All amounts are returned in Lovelaces, where 1 ADA = 1 000 000 Lovelaces.
* Addresses, accounts and pool IDs are in Bech32 format.
* All values are case sensitive.
* All hex encoded values are lower case.
* Examples are not based on real data. Any resemblance to actual events is purely coincidental.
* We allow to upload files up to 100MB of size to IPFS. This might increase in the future.
* Only pinned IPFS files are counted towards the IPFS quota.
* Non-pinned IPFS files are subject to regular garbage collection and will be removed unless pinned.
* We allow maximum of 100 queued pins per IPFS user.

## Errors

### HTTP Status codes

The following are HTTP status code your application might receive when reaching Blockfrost endpoints and
it should handle all of these cases.

* HTTP `400` return code is used when the request is not valid.
* HTTP `402` return code is used when the projects exceed their daily request limit.
* HTTP `403` return code is used when the request is not authenticated.
* HTTP `404` return code is used when the resource doesn't exist.
* HTTP `418` return code is used when the user has been auto-banned for flooding too much after previously receiving error code `402` or `429`.
* HTTP `425` return code is used in Cardano networks, when the user has submitted a transaction when the mempool is already full, not accepting new txs straight away.
* HTTP `425` return code is used in IPFS network, when the user has submitted a pin when the pin queue is already full, not accepting new pins straight away.
* HTTP `429` return code is used when the user has sent too many requests in a given amount of time and therefore has been rate-limited.
* HTTP `500` return code is used when our endpoints are having a problem.

### Error codes

An internal error code number is used for better indication of the error in question. It is passed using the following payload.

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```
## Limits

There are two types of limits we are enforcing:

The first depends on your plan and is the number of request we allow per day. We defined the day from midnight to midnight of UTC time.

The second is rate limiting. We limit an end user, distinguished by IP address, to 10 requests per second. On top of that, we allow
each user to send burst of 500 requests, which cools off at rate of 10 requests per second. In essence, a user is allowed to make another
whole burst after (currently) 500/10 = 50 seconds. E.g. if a user attempts to make a call 3 seconds after whole burst, 30 requests will be processed.
We believe this should be sufficient for most of the use cases. If it is not and you have a specific use case, please get in touch with us, and
we will make sure to take it into account as much as we can.

## SDKs

We support a number of SDKs that will help you in developing your application on top of Blockfrost.

<table>
  <tbody>
    <tr>
        <td><b>Programming language</b></td>
        <td><b>SDK</b></td>
    </tr>
    <tr>
        <td>JavaScript</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-js">blockfrost-js</a>
        </td>
    </tr>
    <tr>
        <td>Haskell</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-haskell">blockfrost-haskell</a>
        </td>
    </tr>
    <tr>
        <td>Python</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-python">blockfrost-python</a>
        </td>
    </tr>
    <tr>
        <td>Rust</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-rust">blockfrost-rust</a>
        </td>
    </tr>
    <tr>
        <td>Golang</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-go">blockfrost-go</a>
        </td>
    </tr>
    <tr>
        <td>Ruby</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-ruby">blockfrost-ruby</a>
        </td>
    </tr>
    <tr>
        <td>Java</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-java">blockfrost-java</a>
        </td>
    </tr>
    <tr>
        <td>Scala</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-scala">blockfrost-scala</a>
        </td>
    </tr>
    <tr>
        <td>Swift</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-swift">blockfrost-swift</a>
        </td>
    </tr>
    <tr>
        <td>Kotlin</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-kotlin">blockfrost-kotlin</a>
        </td>
    </tr>
    <tr>
        <td>Elixir</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-elixir">blockfrost-elixir</a>
        </td>
    </tr>
    <tr>
        <td>.NET</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-dotnet">blockfrost-dotnet</a>
        </td>
    </tr>
    <tr>
        <td>Arduino</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-arduino">blockfrost-arduino</a>
        </td>
    </tr>
    <tr>
        <td>PHP</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-php">blockfrost-php</a>
        </td>
    </tr>
    <tr>
        <td>Crystal</td>
        <td>
            <a href="https://github.com/blockfrost/blockfrost-crystal">blockfrost-crystal</a>
        </td>
    </tr>
  </tbody>
</table>


## Midnight API


The Midnight Indexer API exposes a GraphQL API that enables clients to query and subscribe to blockchain data — blocks, transactions, contracts, and wallet-related events — indexed from the Midnight blockchain.

Available networks: `mainnet`, `preprod`, `preview`

| Service | URL | Protocol |
|---------|-----|----------|
| **Indexer HTTP API** | `https://midnight-{network}.blockfrost.io/api/v0` | HTTP POST (GraphQL) |
| **Indexer Subscriptions API** | `wss://midnight-{network}.blockfrost.io/api/v0/ws` | WebSocket |
| **Node RPC** | `https://rpc.midnight-{network}.blockfrost.io` | JSON-RPC |


For the full documentation — queries, mutations, subscriptions, authentication options, and examples — see the Midnight GraphQL API Reference:

[![Explore the Midnight API →](https://img.shields.io/badge/Explore_the_Midnight_API_→-0033AD?style=for-the-badge)](./midnight/)

Base URLs:

* <a href="https://cardano-mainnet.blockfrost.io/api/v0">https://cardano-mainnet.blockfrost.io/api/v0</a> - Cardano Mainnet network

* <a href="https://cardano-preprod.blockfrost.io/api/v0">https://cardano-preprod.blockfrost.io/api/v0</a> - Cardano Preprod network

* <a href="https://cardano-preview.blockfrost.io/api/v0">https://cardano-preview.blockfrost.io/api/v0</a> - Cardano Preview network

* <a href="https://localhost:3000">https://localhost:3000</a> - local

<a href="https://blockfrost.io/terms">Terms of service</a>
Email: <a href="mailto:contact@blockfrost.io">Blockfrost Team</a> 
Web: <a href="https://blockfrost.io">Blockfrost Team</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

# Authentication

* API Key (project_id)
    - Parameter Name: **project_id**, in: header. There are multiple token types available based on network you choose
when creating a Blockfrost a project, for a list of token types
see available networks.

<h1 id="blockfrostio-api-documentation-health">Health</h1>

## Root endpoint

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /`

Root endpoint has no other function than to point end users to documentation.


> Example responses

> 200 Response

```json
{
  "url": "https://blockfrost.io/",
  "version": "0.1.0"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="root-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information pointing to the documentation.|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="root-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|version|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Backend health status

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/health \
  -H 'Accept: application/json'
```

`GET /health`

Return backend status as a boolean. Your application should handle situations when backend for the given chain is unavailable.


> Example responses

> 200 Response

```json
{
  "is_healthy": true
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="backend-health-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the boolean indicating the health of the backend.|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="backend-health-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_healthy|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Current backend time

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/health/clock \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /health/clock`

This endpoint provides the current UNIX time. Your application might
use this to verify if the client clock is not out of sync.


> Example responses

> 200 Response

```json
{
  "server_time": 1603400958947
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="current-backend-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the current UNIX time in milliseconds.|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="current-backend-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server_time|integer(int64)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-metrics">Metrics</h1>

## Blockfrost usage metrics

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/metrics \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /metrics`

History of your Blockfrost usage metrics in the past 30 days.

> Example responses

> 200 Response

```json
[
  {
    "time": 1612543884,
    "calls": 42
  },
  {
    "time": 1614523884,
    "calls": 6942
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="blockfrost-usage-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the last 30 days of metrics|[metrics](#schemametrics)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="blockfrost-usage-metrics-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Blockfrost endpoint usage metrics

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/metrics/endpoints \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /metrics/endpoints`

History of your Blockfrost usage metrics per endpoint in the past 30 days.


> Example responses

> 200 Response

```json
[
  {
    "time": 1612543814,
    "calls": 182,
    "endpoint": "block"
  },
  {
    "time": 1612543814,
    "calls": 42,
    "endpoint": "epoch"
  },
  {
    "time": 1612543812,
    "calls": 775,
    "endpoint": "block"
  },
  {
    "time": 1612523884,
    "calls": 4,
    "endpoint": "epoch"
  },
  {
    "time": 1612553884,
    "calls": 89794,
    "endpoint": "block"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="blockfrost-endpoint-usage-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the last 30 days of metrics|[metrics_endpoints](#schemametrics_endpoints)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="blockfrost-endpoint-usage-metrics-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-accounts">Cardano » Accounts</h1>

## Specific account address

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}`

Obtain information about a specific stake account.


<h3 id="specific-account-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|

> Example responses

> 200 Response

```json
{
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "active": true,
  "registered": true,
  "active_epoch": 412,
  "controlled_amount": "619154618165",
  "rewards_sum": "319154618165",
  "withdrawals_sum": "12125369253",
  "reserves_sum": "319154618165",
  "treasury_sum": "12000000",
  "withdrawable_amount": "319154618165",
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-account-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account content.|[account_content](#schemaaccount_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-account-address-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account reward history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/rewards \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/rewards`

Obtain information about the reward history of a specific account.


<h3 id="account-reward-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "epoch": 215,
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 216,
    "amount": "3586329",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 217,
    "amount": "1",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 217,
    "amount": "1337",
    "pool_id": "pool1cytwr0n7eas6du2h2xshl8ypa1yqr18f0erlhhjcuczysiunjcs",
    "type": "leader"
  },
  {
    "epoch": 218,
    "amount": "1395265",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 218,
    "amount": "500000000",
    "pool_id": "pool1cytwr0n7eas6du2h2xshl8ypa1yqr18f0erlhhjcuczysiunjcs",
    "type": "pool_deposit_refund"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-reward-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account content.|[account_reward_content](#schemaaccount_reward_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-reward-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/history \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/history`

Obtain information about the history of a specific account.


<h3 id="account-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "active_epoch": 210,
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
  },
  {
    "active_epoch": 211,
    "amount": "22695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account content.|[account_history_content](#schemaaccount_history_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account delegation history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/delegations \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/delegations`

Obtain information about the delegation of a specific account.

<h3 id="account-delegation-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "active_epoch": 210,
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "active_epoch": 242,
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "amount": "12691385",
    "pool_id": "pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-delegation-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account delegations content|[account_delegation_content](#schemaaccount_delegation_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-delegation-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account registration history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/registrations \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/registrations`

Obtain information about the registrations and deregistrations of a specific account.


<h3 id="account-registration-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "action": "registered",
    "deposit": "2000000",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "action": "deregistered",
    "deposit": null,
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-registration-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account registration content.|[account_registration_content](#schemaaccount_registration_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-registration-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account withdrawal history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/withdrawals \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/withdrawals`

Obtain information about the withdrawals of a specific account.


<h3 id="account-withdrawal-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "48a9625c841eea0dd2bb6cf551eabe6523b7290c9ce34be74eedef2dd8f7ecc5",
    "amount": "454541212442",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "4230b0cbccf6f449f0847d8ad1d634a7a49df60d8c142bb8cc2dbc8ca03d9e34",
    "amount": "97846969",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-withdrawal-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account withdrawal content.|[account_withdrawal_content](#schemaaccount_withdrawal_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-withdrawal-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account MIR history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/mirs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/mirs`

Obtain information about the MIRs of a specific account.


<h3 id="account-mir-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "69705bba1d687a816ff5a04ec0c358a1f1ef075ab7f9c6cc2763e792581cec6d",
    "amount": "2193707473",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "baaa77b63d4d7d2bb3ab02c9b85978c2092c336dede7f59e31ad65452d510c13",
    "amount": "14520198574",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-mir-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account MIR content.|[account_mir_content](#schemaaccount_mir_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-mir-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account associated addresses

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/addresses \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/addresses`

Obtain information about the addresses of a specific account.
<b>Be careful</b>, as an account could be part of a mangled address and does not necessarily mean the addresses are owned by user as the account.


<h3 id="account-associated-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qx2kd28nq8ac5prwg32hhvudlwggpgfp8utlyqxu6wqgz62f79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sy0f4qd"
  },
  {
    "address": "addr1qys3czp8s9thc6u2fqed9yq3h24nyw28uk0m6mkgn9dkckjf79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9suth4w4"
  },
  {
    "address": "addr1q8j55h253zcvl326sk5qdt2n8z7eghzspe0ekxgncr796s2f79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sjmd35m"
  },
  {
    "address": "addr1q8f7gxrprank3drhx8k5grlux7ene0nlwun8y9thu8mc3yjf79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sls6vnt"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-associated-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account addresses content|[account_addresses_content](#schemaaccount_addresses_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-associated-addresses-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Assets associated with the account addresses

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/addresses/assets \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/addresses/assets`

Obtain information about assets associated with addresses of a specific account.
<b>Be careful</b>, as an account could be part of a mangled address and does not necessarily mean the addresses are owned by user as the account.


<h3 id="assets-associated-with-the-account-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "unit": "d5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756433343132",
    "quantity": "1"
  },
  {
    "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "125"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="assets-associated-with-the-account-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account addresses content|[account_addresses_assets](#schemaaccount_addresses_assets)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="assets-associated-with-the-account-addresses-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Detailed information about account associated addresses

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/addresses/total \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/addresses/total`

Obtain summed details about all addresses associated with a given account.
<b>Be careful</b>, as an account could be part of a mangled address and does not necessarily mean the addresses are owned by user as the account.


<h3 id="detailed-information-about-account-associated-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 address.|

> Example responses

> 200 Response

```json
{
  "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
  "received_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "sent_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "tx_count": 12
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="detailed-information-about-account-associated-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the Address details.|[account_addresses_total](#schemaaccount_addresses_total)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="detailed-information-about-account-associated-addresses-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account UTXOs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/utxos \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/utxos`

UTXOs associated with the account.


<h3 id="account-utxos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "729235000"
      }
    ],
    "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    "output_index": 1,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-utxos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account UTXOs content|[account_utxo_content](#schemaaccount_utxo_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-utxos-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Account transactions

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1u9ylzsgxaa6xctf4juup682ar3juj85n8tx3hthnljg47zctvm3rc/transactions \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /accounts/{stake_address}/transactions`

Transactions associated with the stake address.

<h3 id="account-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stake_address|path|string|true|Bech32 stake address.|
|count|query|integer|false|The number of transactions per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|
|from|query|string|false|The block number and optionally also index from which (inclusive) to start search for results, concatenated using colon.<br>Has to be lower than or equal to `to` parameter.<br>|
|to|query|string|false|The block number and optionally also index where (inclusive) to end the search for results, concatenated using colon.<br>Has to be higher than or equal to `from` parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
    "tx_hash": "bd78e0e73fb1691f08746a331bd764d11552c3a36ef766d4f1a3bbdc7f29918d",
    "tx_index": 34,
    "block_height": 7900364,
    "block_time": 1666114079
  },
  {
    "address": "addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
    "tx_hash": "67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696",
    "tx_index": 6,
    "block_height": 7900557,
    "block_time": 1666118180
  },
  {
    "address": "addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq",
    "tx_hash": "67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696",
    "tx_index": 6,
    "block_height": 7900557,
    "block_time": 1666118180
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="account-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the list of account transactions|[account_transactions_content](#schemaaccount_transactions_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="account-transactions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-addresses">Cardano » Addresses</h1>

## Specific address

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}`

Obtain information about a specific address.

<h3 id="specific-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|

> Example responses

> 200 Response

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "type": "shelley",
  "script": false
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content.|[address_content](#schemaaddress_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-address-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Extended information of a specific address

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/extended \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/extended`

Obtain extended information about a specific address.


<h3 id="extended-information-of-a-specific-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|

> Example responses

> 200 Response

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000",
      "decimals": 6,
      "has_nft_onchain_metadata": false
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12",
      "decimals": null,
      "has_nft_onchain_metadata": true
    }
  ],
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "type": "shelley",
  "script": false
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="extended-information-of-a-specific-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content.|[address_content_extended](#schemaaddress_content_extended)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="extended-information-of-a-specific-address-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Address details

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/total \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/total`

Obtain details about an address.

<h3 id="address-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|

> Example responses

> 200 Response

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "received_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "sent_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "tx_count": 12
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="address-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the Address details.|[address_content_total](#schemaaddress_content_total)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="address-details-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Address UTXOs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/utxos \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/utxos`

UTXOs of the address.

<h3 id="address-utxos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "729235000"
      }
    ],
    "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    "output_index": 1,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="address-utxos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content|[address_utxo_content](#schemaaddress_utxo_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="address-utxos-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Address UTXOs of a given asset

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/utxos/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/utxos/{asset}`

UTXOs of the address.

<h3 id="address-utxos-of-a-given-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "729235000"
      }
    ],
    "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    "output_index": 1,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="address-utxos-of-a-given-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content|[address_utxo_content](#schemaaddress_utxo_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="address-utxos-of-a-given-asset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Address txs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/txs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/txs`

<aside class="warning">
This operation is deprecated
</aside>

Transactions on the address.

<h3 id="address-txs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|
|count|query|integer|false|The number of transactions per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
  "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="address-txs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content|[address_txs_content](#schemaaddress_txs_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="address-txs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Address transactions

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz/transactions \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /addresses/{address}/transactions`

Transactions on the address.

<h3 id="address-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|Bech32 address.|
|count|query|integer|false|The number of transactions per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|
|from|query|string|false|The block number and optionally also index from which (inclusive) to start search for results, concatenated using colon.<br>Has to be lower than or equal to `to` parameter.<br>|
|to|query|string|false|The block number and optionally also index where (inclusive) to end the search for results, concatenated using colon.<br>Has to be higher than or equal to `from` parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "tx_index": 6,
    "block_height": 69,
    "block_time": 1635505891
  },
  {
    "tx_hash": "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
    "tx_index": 9,
    "block_height": 4547,
    "block_time": 1635505987
  },
  {
    "tx_hash": "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b",
    "tx_index": 0,
    "block_height": 564654,
    "block_time": 1834505492
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="address-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the address content|[address_transactions_content](#schemaaddress_transactions_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="address-transactions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-assets">Cardano » Assets</h1>

## Assets

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets`

List of assets. If an asset is completely burned,
it will stay on the list with quantity 0 (order of assets is immutable).


<h3 id="assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>Ordering in this case is based on the time of the first mint transaction.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "1"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e75d",
    "quantity": "100000"
  },
  {
    "asset": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
    "quantity": "18605647"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return list of assets|[assets](#schemaassets)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="assets-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific asset

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}`

Information about a specific asset

<h3 id="specific-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|

> Example responses

> 200 Response

```json
{
  "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
  "policy_id": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a7",
  "asset_name": "6e7574636f696e",
  "fingerprint": "asset1pkpwyknlvul7az0xx8czhl60pyel45rpje4z8w",
  "quantity": "12000",
  "initial_mint_tx_hash": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
  "mint_or_burn_count": 1,
  "onchain_metadata": {},
  "onchain_metadata_standard": "CIP25v1",
  "onchain_metadata_extra": "string",
  "metadata": {
    "name": "nutcoin",
    "description": "The Nut Coin",
    "ticker": "nutc",
    "url": "https://www.stakenuts.com/",
    "logo": "iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QITCDUPjqwFHwAAB9xJREFUWMPVWXtsU9cZ/8499/r6dZ3E9rUdO7ZDEgglFWO8KaOsJW0pCLRKrN1AqqYVkqoqrYo0ja7bpElru1WairStFKY9WzaE1E1tx+jokKqwtqFNyhKahEJJyJNgJ37E9r1+3HvO/sFR4vhx7SBtfH/F3/l93/f7ne/4PBxEKYU72dj/ZfH772v1TU+HtqbTaX8wOO01GPQpRVH7JEm+vGHDuq6z7/8jUSoHKtaBKkEUFUXdajDy1hUrmrs6zn/wWS7m7pZVjMUirKGUTnzc+e9xLcTrPPVfZzDz06Sc2lyQGEIyAPzT7Xa+dvE/3e+XLaCxoflHsVj8MAAYs74aa/WHoenwvpkZKeFy2Z5NJlOPUkqXZccFwSSrKjlyffjLH+TL6XTUGTGL/6hklD3ldIrj2M5MRmkLBMcvaRLQ1Nj88sxM/HCBfMP+eu/OYGDqe6l0WmpoqJ/88upgrU7HrQNA/cFg6MlkKiLlBtVUO40cx54BgHvLIT/HJLvdeqh/4NKxogKWN7fsCoUi7xTLxLJ4vLq6ak//wKVOrdXtttrTDMPsqJA8AAAwDErdu3VL3alTf5ma9eWCpoKhn5dKpCiqJxicPucQPVu0FHaInn35yHMcKwPAa4SQ3QCwFgDWUko3qSr5vqqSgTypuEg4Mo/zvA74/Y0rZSnZU8akSHV17k2fXfy0txjI5224kEym1s/1EUI7LBbztweHrkzkizn49LP6U6feepFSeggAQK/n04SQZ8bGrxdeQjZrbRvGzLH5hcibRqOhPplMfS1fIY5jz4xPDBdcGggho2h3z9sOLRazdG3wqp9SMgUlzGZ17SSEPsRx7J8CwfGu3PF57WhqqjfN/VxVJUxKUrIdITAXKpDJKFscosdfaFy0u+/K9aXTmXe0kAcAmA5Nng5Hbj6Tj/wCAYFAcN7uEY3GXGazMSHLqVVFapgBoMPna9yqhRAAgCTJMa3YUjZPgNFkSlWYx5eUkx+0tKx83V3rF+cVYJjruWCe133DIXqMmrNrFSDabRcWkywYmG5XFOW6aHcfb9324CoAgMmbo9MIoXkneCajiAihV/c/8eSiBSw4BxyiZxQA6m7H7FBKT2CMn2MY5jFFUX6ZO+5w2j8aHZ7YH40FByrJD5DnHGAY5uTtIA8AgBDaR4F2Yxb3WizCgmtA4ObUPSazodduqz3Suu0hf0U1cjvgdNSJ1dWWveFwdDUAtAiC2Uopdcdi8c9Zlh3GmDGl05mtAKAvo47EcdwThJCjqqpWFxALlNITomg73tff21GRAJez7iVK4WGGYfoJIQduBsbm7UrLm1ueCoUiv65kpiilw1ZbzcFoZOYoIcRTAn6eYZgXJm+Oni+Vd3YJbdyweSch9HlK6SpVVfcyDDq7Yf3m2XPBIXraKyV/a4b9UkLawbLsZgB4rwR8CyGkw13r+5fX27BckwBAEJ47oKpk8+DgUIdod7fV1vqOAMDrlZLPmqKoB+rrvXIgOP6w0WjYy3Ls5RL4bUk52bVm9fqnCk7M3CXU2ND8+MxM7BcIIftiyRYyntcdHh0bmr0wfmXl6p2SJB2KRmP3l4j7zejYUFtRAQAAgslm1Bv4nyGEDpYiIwjmjw0G/RjP866JiclNqqqWfKLq9fyZkdHBBXcnl9O71GDgD8bj0ncRQqZ8sRgzL9yYHH2pqICsOUTPLgA4CXNeZFmzWIS/YhYfjUZmvqPjuceSckrz25pS2h2cmlhbaBwhzr6kfsnL8Xhif55YYFl23Y3Jkdl7EVMoUSA4/q6qqNsBIPd11e52u45FwtG3CSH7yiEPAGC1Vt9dXGBmanDoygFLlbAjtzZCCMyC6VeaOpA1l9N7l1kwtauKaozHE28YTQaQpeR7+TqjxXheR0fHhhgt2CX1S3clEtKC16HL5djYe+niBU0CcmYA2W21/Qih5ZqDcoxlMZ24MaJJAABA87IVJ8Lh6N65Pr1B/+LIyLUfAhRZQvnM6ah7ZDHkAQB0vK6/HHxNTc2ruT5Zkldn/y5LACFk+2LIAwAwCGl6yGSt88KHXbmrBCHkqEgAz+vWLFZALJb4qNwYhFDhCSknkSwnQ4sVgDFeWg7+gQe2r1tAmkGTFQlACHWVg89nhJA9ot3dphV/eeCLp/Pw6K5IQP0S39uLFXCLwDG7zf1cKZxD9LSlUunHc/12u/2t2Vzl/rzu8zb8PZlM7bwdQgDgPK/nX2nddt+53//ht3LW2dS0fF0iLj2vquojuQFmwXRucPBKa8UCmpe1iOFwpAsAfLdJBFBKwVIlXJ2JxqKCxbwyHkvoCkAlv9/71U+7Oq+UJWDZ0hViJBL1cRynbNq0sSeeiPl6ei4NqIqq6TSmlB7X6bjuTEY5pgWfzwxGPZhMpt39/b3vzvWXFGCzulZjjM/DrauDwcAr8bjcgzGjZUuVBMH8k2uDX7wCAFDr8n2LEPI7SqmhTP6SzVbz6MDlz0/nDpT8EmOM22HOvUeWU2wp8iyLgRL6hk7Hrc2SBwC4MTlykmXZRozxn00mbVcphNA5jJmV+chr6oDd5l6jN/A/TqfSuwEAGITGMIsvGo3GTwTB3Dc2NjGSxdZYq4VIOOoNBANnKE0XPXE3brjHOTQ08k2MmVZOxzVJCbkFIQSCYEphzPaFQuGzTpfjb319PZ8UFXin/5OvrHPg/9HueAH/BSUqOuNZm4fyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTE5VDA4OjUyOjI1KzAwOjAwCmFGlgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0xOVQwODo1MjoyMyswMDowMBjsyxAAAAAASUVORK5CYII=",
    "decimals": 6
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about a specific asset|[asset](#schemaasset)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-asset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Asset history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e/history \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}/history`

History of a specific asset

<h3 id="asset-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "amount": "10",
    "action": "minted"
  },
  {
    "tx_hash": "9c190bc1ac88b2ab0c05a82d7de8b71b67a9316377e865748a89d4426c0d3005",
    "amount": "5",
    "action": "burned"
  },
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "amount": "5",
    "action": "burned"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="asset-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about the history of a specific asset|[asset_history](#schemaasset_history)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="asset-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Asset txs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e/txs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}/txs`

<aside class="warning">
This operation is deprecated
</aside>

List of a specific asset transactions

<h3 id="asset-txs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
  "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
  "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="asset-txs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about the history of a specific asset|[asset_txs](#schemaasset_txs)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="asset-txs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Asset transactions

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e/transactions \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}/transactions`

List of a specific asset transactions

<h3 id="asset-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|
|from|query|string|false|The block number and optionally also index from which (inclusive) to start search for results, concatenated using colon.<br>Has to be lower than or equal to `to` parameter.<br>|
|to|query|string|false|The block number and optionally also index where (inclusive) to end the search for results, concatenated using colon.<br>Has to be higher than or equal to `from` parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "tx_index": 6,
    "block_height": 69,
    "block_time": 1635505891
  },
  {
    "tx_hash": "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
    "tx_index": 9,
    "block_height": 4547,
    "block_time": 1635505987
  },
  {
    "tx_hash": "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b",
    "tx_index": 0,
    "block_height": 564654,
    "block_time": 1834505492
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="asset-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about the history of a specific asset|[asset_transactions](#schemaasset_transactions)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="asset-transactions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Asset addresses

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e/addresses \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}/addresses`

List of a addresses containing a specific asset

<h3 id="asset-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "quantity": "1"
  },
  {
    "address": "addr1qyhr4exrgavdcn3qhfcc9f939fzsch2re5ry9cwvcdyh4x4re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qdpvhza",
    "quantity": "100000"
  },
  {
    "address": "addr1q8zup8m9ue3p98kxlxl9q8rnyan8hw3ul282tsl9s326dfj088lvedv4zckcj24arcpasr0gua4c5gq4zw2rpcpjk2lq8cmd9l",
    "quantity": "18605647"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="asset-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about the history of a specific asset|[asset_addresses](#schemaasset_addresses)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="asset-addresses-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Asset UTXOs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501424f4f4b/utxos \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/{asset}/utxos`

List of unspent UTxOs containing the specified native asset.

<h3 id="asset-utxos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|path|string|true|Concatenation of the policy_id and hex-encoded asset_name|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|
|from|query|string|false|The block height from which (inclusive) to start search for results.<br>Has to be lower than or equal to `to` parameter.<br>|
|to|query|string|false|The block height where (inclusive) to end the search for results.<br>Has to be higher than or equal to `from` parameter.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxfdlum57a0083mnth9y583jvdcv5a9nwj5lzv9v34t9tl7wmz90ahznykuhr4ykwvfrge8yc63c6lpf7345yd5h59nq885d05",
    "tx_hash": "47abf925faa462fe7ddbf906e65b4f8a27da52c3638ec4ee4fffb2298096aced",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "1444443"
      },
      {
        "unit": "750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501424f4f4b",
        "quantity": "1000"
      }
    ],
    "block": "8dadf03917c51b36c7580a49162224f71845a5492976e0449319da6e8eea243e",
    "block_height": 5804427,
    "block_time": 1622754311,
    "data_hash": null,
    "inline_datum": null,
    "inline_datum_json": null,
    "reference_script_hash": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="asset-utxos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the UTXOs containing the specified asset|[asset_utxo_content](#schemaasset_utxo_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="asset-utxos-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Assets of a specific policy

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/476039a0949cf0b22f6a800f56780184c44533887ca6e821007840c3 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /assets/policy/{policy_id}`

List of asset minted under a specific policy

<h3 id="assets-of-a-specific-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policy_id|path|string|true|Specific policy_id|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "1"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a766e",
    "quantity": "100000"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb574636f696e",
    "quantity": "18605647"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="assets-of-a-specific-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about a specific asset|[asset_policy](#schemaasset_policy)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="assets-of-a-specific-policy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-blocks">Cardano » Blocks</h1>

## Latest block

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/latest`

Return the latest block available to the backends, also known as the
tip of the blockchain.


> Example responses

> 200 Response

```json
{
  "time": 1641338934,
  "height": 15243593,
  "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
  "slot": 412162133,
  "epoch": 425,
  "epoch_slot": 12,
  "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
  "size": 3,
  "tx_count": 1,
  "output": "128314491794",
  "fees": "592661",
  "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
  "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
  "op_cert_counter": "18",
  "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
  "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
  "confirmations": 4698
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="latest-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content](#schemablock_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="latest-block-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Latest block transactions

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest/txs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/latest/txs`

Return the transactions within the latest block.

<h3 id="latest-block-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by tx index in the block.<br>The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
  "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
  "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
  "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="latest-block-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content_txs](#schemablock_content_txs)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="latest-block-transactions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Latest block transactions with CBOR data

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest/txs/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/latest/txs/cbor`

Return the transactions within the latest block, including CBOR representations.

<h3 id="latest-block-transactions-with-cbor-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by tx index in the block.<br>The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "cbor": "a10081825820cccfe2be401c85342497f6e1e4a241629790b0fb7f2af5f18441779d11f25b1f5840c38a93d63faac9335ecc2f24ead7ca2d46a6637f354ee707bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  },
  {
    "tx_hash": "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
    "cbor": "bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="latest-block-transactions-with-cbor-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block with CBOR data|[block_content_txs_cbor](#schemablock_content_txs_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="latest-block-transactions-with-cbor-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific block

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}`

Return the content of a requested block.


<h3 id="specific-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash or number of the requested block.|

> Example responses

> 200 Response

```json
{
  "time": 1641338934,
  "height": 15243593,
  "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
  "slot": 412162133,
  "epoch": 425,
  "epoch_slot": 12,
  "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
  "size": 3,
  "tx_count": 1,
  "output": "128314491794",
  "fees": "592661",
  "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
  "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
  "op_cert_counter": "18",
  "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
  "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
  "confirmations": 4698
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content](#schemablock_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-block-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Listing of next blocks

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/5ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a/next \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}/next`

Return the list of blocks following a specific block.


<h3 id="listing-of-next-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash of the requested block.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "time": 1641338934,
    "height": 15243593,
    "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
    "slot": 412162133,
    "epoch": 425,
    "epoch_slot": 12,
    "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
    "size": 3,
    "tx_count": 1,
    "output": "128314491794",
    "fees": "592661",
    "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
    "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
    "op_cert_counter": "18",
    "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
    "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
    "confirmations": 4698
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="listing-of-next-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content_array](#schemablock_content_array)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="listing-of-next-blocks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Listing of previous blocks

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/4873401/previous \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}/previous`

Return the list of blocks preceding a specific block.


<h3 id="listing-of-previous-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash of the requested block|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "time": 1641338934,
    "height": 15243593,
    "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
    "slot": 412162133,
    "epoch": 425,
    "epoch_slot": 12,
    "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
    "size": 3,
    "tx_count": 1,
    "output": "128314491794",
    "fees": "592661",
    "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
    "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
    "op_cert_counter": "18",
    "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
    "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
    "confirmations": 4698
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="listing-of-previous-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content_array](#schemablock_content_array)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="listing-of-previous-blocks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific block in a slot

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/slot/30895909 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/slot/{slot_number}`

Return the content of a requested block for a specific slot.


<h3 id="specific-block-in-a-slot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slot_number|path|integer(slot number)|true|Slot position for requested block.|

> Example responses

> 200 Response

```json
{
  "time": 1641338934,
  "height": 15243593,
  "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
  "slot": 412162133,
  "epoch": 425,
  "epoch_slot": 12,
  "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
  "size": 3,
  "tx_count": 1,
  "output": "128314491794",
  "fees": "592661",
  "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
  "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
  "op_cert_counter": "18",
  "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
  "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
  "confirmations": 4698
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-block-in-a-slot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content](#schemablock_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-block-in-a-slot-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific block in a slot in an epoch

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/epoch/219/slot/30895909 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/epoch/{epoch_number}/slot/{slot_number}`

Return the content of a requested block for a specific slot in an epoch.


<h3 id="specific-block-in-a-slot-in-an-epoch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|epoch_number|path|integer(slot number)|true|Epoch for specific epoch slot.|
|slot_number|path|integer(slot number)|true|Slot position for requested block.|

> Example responses

> 200 Response

```json
{
  "time": 1641338934,
  "height": 15243593,
  "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
  "slot": 412162133,
  "epoch": 425,
  "epoch_slot": 12,
  "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
  "size": 3,
  "tx_count": 1,
  "output": "128314491794",
  "fees": "592661",
  "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
  "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
  "op_cert_counter": "18",
  "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
  "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
  "confirmations": 4698
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-block-in-a-slot-in-an-epoch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content](#schemablock_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-block-in-a-slot-in-an-epoch-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Block transactions

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/4873401/txs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}/txs`

Return the transactions within the block.

<h3 id="block-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash of the requested block.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by tx index in the block.<br>The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
  "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
  "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
  "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="block-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content_txs](#schemablock_content_txs)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="block-transactions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Block transactions with CBOR data

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/4873401/txs/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}/txs/cbor`

Return the transactions within the block, including CBOR representations.

<h3 id="block-transactions-with-cbor-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash of the requested block.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by tx index in the block.<br>The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "cbor": "a10081825820cccfe2be401c85342497f6e1e4a241629790b0fb7f2af5f18441779d11f25b1f5840c38a93d63faac9335ecc2f24ead7ca2d46a6637f354ee707bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  },
  {
    "tx_hash": "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
    "cbor": "bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="block-transactions-with-cbor-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block with CBOR data|[block_content_txs_cbor](#schemablock_content_txs_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="block-transactions-with-cbor-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Addresses affected in a specific block

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/blocks/4873401/addresses \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /blocks/{hash_or_number}/addresses`

Return list of addresses affected in the specified block with additional information, sorted by the bech32 address, ascending.

<h3 id="addresses-affected-in-a-specific-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash_or_number|path|string(64-character case-sensitive hexadecimal string or block number.)|true|Hash of the requested block.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
    "transactions": [
      {
        "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
      }
    ]
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "transactions": [
      {
        "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157d0"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="addresses-affected-in-a-specific-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the block|[block_content_addresses](#schemablock_content_addresses)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addresses-affected-in-a-specific-block-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-epochs">Cardano » Epochs</h1>

## Latest epoch

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/latest`

Return the information about the latest, therefore current, epoch.

> Example responses

> 200 Response

```json
{
  "epoch": 225,
  "start_time": 1603403091,
  "end_time": 1603835086,
  "first_block_time": 1603403092,
  "last_block_time": 1603835084,
  "block_count": 21298,
  "tx_count": 17856,
  "output": "7849943934049314",
  "fees": "4203312194",
  "active_stake": "784953934049314"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="latest-epoch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_content](#schemaepoch_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="latest-epoch-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Latest epoch protocol parameters

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest/parameters \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/latest/parameters`

Return the protocol parameters for the latest epoch.

> Example responses

> 200 Response

```json
{
  "epoch": 225,
  "min_fee_a": 44,
  "min_fee_b": 155381,
  "max_block_size": 65536,
  "max_tx_size": 16384,
  "max_block_header_size": 1100,
  "key_deposit": "2000000",
  "pool_deposit": "500000000",
  "e_max": 18,
  "n_opt": 150,
  "a0": 0.3,
  "rho": 0.003,
  "tau": 0.2,
  "decentralisation_param": 0.5,
  "extra_entropy": null,
  "protocol_major_ver": 2,
  "protocol_minor_ver": 0,
  "min_utxo": "1000000",
  "min_pool_cost": "340000000",
  "nonce": "1a3be38bcbb7911969283716ad7aa550250226b76a61fc51cc9a9a35d9276d81",
  "cost_models": {
    "PlutusV1": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    },
    "PlutusV2": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    }
  },
  "cost_models_raw": {
    "PlutusV1": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV2": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV3": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ]
  },
  "price_mem": 0.0577,
  "price_step": 0.0000721,
  "max_tx_ex_mem": "10000000",
  "max_tx_ex_steps": "10000000000",
  "max_block_ex_mem": "50000000",
  "max_block_ex_steps": "40000000000",
  "max_val_size": "5000",
  "collateral_percent": 150,
  "max_collateral_inputs": 3,
  "coins_per_utxo_size": "34482",
  "coins_per_utxo_word": "34482",
  "pvt_motion_no_confidence": 0,
  "pvt_committee_normal": 0,
  "pvt_committee_no_confidence": 0,
  "pvt_hard_fork_initiation": 0,
  "dvt_motion_no_confidence": 0,
  "dvt_committee_normal": 0,
  "dvt_committee_no_confidence": 0,
  "dvt_update_to_constitution": 0,
  "dvt_hard_fork_initiation": 0,
  "dvt_p_p_network_group": 0,
  "dvt_p_p_economic_group": 0,
  "dvt_p_p_technical_group": 0,
  "dvt_p_p_gov_group": 0,
  "dvt_treasury_withdrawal": 0,
  "committee_min_size": "string",
  "committee_max_term_length": "string",
  "gov_action_lifetime": "string",
  "gov_action_deposit": "string",
  "drep_deposit": "string",
  "drep_activity": "string",
  "pvtpp_security_group": 0,
  "pvt_p_p_security_group": 0,
  "min_fee_ref_script_cost_per_byte": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="latest-epoch-protocol-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_param_content](#schemaepoch_param_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="latest-epoch-protocol-parameters-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific epoch

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}`

Return the content of the requested epoch.

<h3 id="specific-epoch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|

> Example responses

> 200 Response

```json
{
  "epoch": 225,
  "start_time": 1603403091,
  "end_time": 1603835086,
  "first_block_time": 1603403092,
  "last_block_time": 1603835084,
  "block_count": 21298,
  "tx_count": 17856,
  "output": "7849943934049314",
  "fees": "4203312194",
  "active_stake": "784953934049314"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-epoch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the epoch data.|[epoch_content](#schemaepoch_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-epoch-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Listing of next epochs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/next \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/next`

Return the list of epochs following a specific epoch.

<h3 id="listing-of-next-epochs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the requested epoch.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "epoch": 225,
    "start_time": 1603403091,
    "end_time": 1603835086,
    "first_block_time": 1603403092,
    "last_block_time": 1603835084,
    "block_count": 21298,
    "tx_count": 17856,
    "output": "7849943934049314",
    "fees": "4203312194",
    "active_stake": "784953934049314"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="listing-of-next-epochs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_content_array](#schemaepoch_content_array)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="listing-of-next-epochs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Listing of previous epochs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/previous \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/previous`

Return the list of epochs preceding a specific epoch.

<h3 id="listing-of-previous-epochs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results|

> Example responses

> 200 Response

```json
[
  {
    "epoch": 225,
    "start_time": 1603403091,
    "end_time": 1603835086,
    "first_block_time": 1603403092,
    "last_block_time": 1603835084,
    "block_count": 21298,
    "tx_count": 17856,
    "output": "7849943934049314",
    "fees": "4203312194",
    "active_stake": "784953934049314"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="listing-of-previous-epochs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the epoch data|[epoch_content_array](#schemaepoch_content_array)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="listing-of-previous-epochs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake distribution

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/stakes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/stakes`

Return the active stake distribution for the specified epoch.

<h3 id="stake-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "amount": "4440295078"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_stake_content](#schemaepoch_stake_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-distribution-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake distribution by pool

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/stakes/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/stakes/{pool_id}`

Return the active stake distribution for the epoch specified by stake pool.

<h3 id="stake-distribution-by-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|
|pool_id|path|string|true|Stake pool ID to filter|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|

> Example responses

> 200 Response

```json
[
  {
    "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
    "amount": "4440295078"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-distribution-by-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_stake_pool_content](#schemaepoch_stake_pool_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-distribution-by-pool-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Block distribution

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/blocks \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/blocks`

Return the blocks minted for the epoch specified.

<h3 id="block-distribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "d0fa315687e99ccdc96b14cc2ea74a767405d64427b648c470731a9b69e4606e",
  "38bc6efb92a830a0ed22a64f979d120d26483fd3c811f6622a8c62175f530878",
  "f3258fcd8b975c061b4fcdcfcbb438807134d6961ec278c200151274893b6b7d"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="block-distribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_block_content](#schemaepoch_block_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="block-distribution-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Block distribution by pool

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/blocks/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/blocks/{pool_id}`

Return the block minted for the epoch specified by stake pool.

<h3 id="block-distribution-by-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|
|pool_id|path|string|true|Stake pool ID to filter|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "d0fa315687e99ccdc96b14cc2ea74a767405d64427b648c470731a9b69e4606e",
  "38bc6efb92a830a0ed22a64f979d120d26483fd3c811f6622a8c62175f530878",
  "f3258fcd8b975c061b4fcdcfcbb438807134d6961ec278c200151274893b6b7d"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="block-distribution-by-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_block_content](#schemaepoch_block_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="block-distribution-by-pool-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Protocol parameters

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/epochs/225/parameters \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /epochs/{number}/parameters`

Return the protocol parameters for the epoch specified.

<h3 id="protocol-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|integer|true|Number of the epoch|

> Example responses

> 200 Response

```json
{
  "epoch": 225,
  "min_fee_a": 44,
  "min_fee_b": 155381,
  "max_block_size": 65536,
  "max_tx_size": 16384,
  "max_block_header_size": 1100,
  "key_deposit": "2000000",
  "pool_deposit": "500000000",
  "e_max": 18,
  "n_opt": 150,
  "a0": 0.3,
  "rho": 0.003,
  "tau": 0.2,
  "decentralisation_param": 0.5,
  "extra_entropy": null,
  "protocol_major_ver": 2,
  "protocol_minor_ver": 0,
  "min_utxo": "1000000",
  "min_pool_cost": "340000000",
  "nonce": "1a3be38bcbb7911969283716ad7aa550250226b76a61fc51cc9a9a35d9276d81",
  "cost_models": {
    "PlutusV1": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    },
    "PlutusV2": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    }
  },
  "cost_models_raw": {
    "PlutusV1": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV2": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV3": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ]
  },
  "price_mem": 0.0577,
  "price_step": 0.0000721,
  "max_tx_ex_mem": "10000000",
  "max_tx_ex_steps": "10000000000",
  "max_block_ex_mem": "50000000",
  "max_block_ex_steps": "40000000000",
  "max_val_size": "5000",
  "collateral_percent": 150,
  "max_collateral_inputs": 3,
  "coins_per_utxo_size": "34482",
  "coins_per_utxo_word": "34482",
  "pvt_motion_no_confidence": 0,
  "pvt_committee_normal": 0,
  "pvt_committee_no_confidence": 0,
  "pvt_hard_fork_initiation": 0,
  "dvt_motion_no_confidence": 0,
  "dvt_committee_normal": 0,
  "dvt_committee_no_confidence": 0,
  "dvt_update_to_constitution": 0,
  "dvt_hard_fork_initiation": 0,
  "dvt_p_p_network_group": 0,
  "dvt_p_p_economic_group": 0,
  "dvt_p_p_technical_group": 0,
  "dvt_p_p_gov_group": 0,
  "dvt_treasury_withdrawal": 0,
  "committee_min_size": "string",
  "committee_max_term_length": "string",
  "gov_action_lifetime": "string",
  "gov_action_deposit": "string",
  "drep_deposit": "string",
  "drep_activity": "string",
  "pvtpp_security_group": 0,
  "pvt_p_p_security_group": 0,
  "min_fee_ref_script_cost_per_byte": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="protocol-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the data about the epoch|[epoch_param_content](#schemaepoch_param_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="protocol-parameters-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-governance">Cardano » Governance</h1>

## Constitutional committee

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/committee \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/committee`

Information about the currently active constitutional committee

When `is_dissolved` is `true`, the committee has been removed by an enacted `NoConfidence` governance action; `quorum` and `members` still describe the last seated committee for historical reference.


> Example responses

> 200 Response

```json
{
  "proposal_tx_hash": null,
  "proposal_index": null,
  "gov_action_id": null,
  "is_dissolved": false,
  "quorum": {
    "numerator": 2,
    "denominator": 3
  },
  "members": [
    {
      "cc_cold_id": "cc_cold1zgkfeeu07qq9smfqfn0nrf2cqgr5x6jpu8x6lxgxay85t6cmt54xz",
      "cc_cold_hex": "12c9ce78ff8005436901336f8d2ac0411a1b520f0e6d7e6066907a2f",
      "cc_cold_has_script": false,
      "cc_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
      "cc_hot_hex": "0269808bbf8fb495a3b8e290a5f626362236c1abf853eddf08d79a930",
      "cc_hot_has_script": false,
      "status": "authorized",
      "expiration_epoch": 580
    },
    {
      "cc_cold_id": "cc_cold1zgxxx2trz0vyl5ksetnsrct5n5gznn3jmkj6dlpu4lz6lecz5h",
      "cc_cold_hex": "8cc6529626c4c9fa5a195ce03c2e93a204e7193b76967e8794fc59d6",
      "cc_cold_has_script": false,
      "cc_hot_id": null,
      "cc_hot_hex": null,
      "cc_hot_has_script": null,
      "status": "not_authorized",
      "expiration_epoch": 580
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="constitutional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the active constitutional committee|[committee](#schemacommittee)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="constitutional-committee-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Constitutional committee votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/committee/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/committee/votes`

History of all votes cast by constitutional committee members across all committees (current and past). Not scoped to the currently active committee.

<h3 id="constitutional-committee-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1k2jertppnnndejjcglszfqq4yzw8evzrd2nt66rr6rqlz54xp0zsq05ecsn",
    "proposal_tx_hash": "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
    "proposal_index": 0,
    "governance_type": "parameter_change",
    "vote": "yes",
    "metadata_url": "https://my.cc-member/rationale.jsonld",
    "metadata_hash": "a4b7d5d34f5d8c5b71a0a5c34b7e7f8a3d2e1c0b9a8f7e6d5c4b3a2918f7e6d5",
    "block_height": 11045358,
    "block_time": 1746037200
  },
  {
    "tx_hash": "8a91b32ec2a7bdfde2ab7a1bc5e4d3a2f1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "proposal_tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "proposal_index": 1,
    "governance_type": "new_constitution",
    "vote": "abstain",
    "metadata_url": null,
    "metadata_hash": null,
    "block_height": 11045890,
    "block_time": 1746070800
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="constitutional-committee-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return constitutional committee votes|[committee_votes](#schemacommittee_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="constitutional-committee-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Constitutional committee member votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/committee/cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/committee/{cc_id}/votes`

Votes cast under a given constitutional committee credential. Accepts both the CIP-129 hot bech32 (`cc_hot1...`) and the cold bech32 (`cc_cold1...`).
When queried by a cold credential, this returns votes cast by any hot key that the cold key has authorized over time (so the result aggregates across hot-key rotations).

<h3 id="constitutional-committee-member-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cc_id|path|string|true|CIP-129 bech32 committee credential (`cc_hot1...` or `cc_cold1...`).|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1k2jertppnnndejjcglszfqq4yzw8evzrd2nt66rr6rqlz54xp0zsq05ecsn",
    "proposal_tx_hash": "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
    "proposal_index": 0,
    "governance_type": "parameter_change",
    "vote": "yes",
    "metadata_url": "https://my.cc-member/rationale.jsonld",
    "metadata_hash": "a4b7d5d34f5d8c5b71a0a5c34b7e7f8a3d2e1c0b9a8f7e6d5c4b3a2918f7e6d5",
    "block_height": 11045358,
    "block_time": 1746037200
  },
  {
    "tx_hash": "8a91b32ec2a7bdfde2ab7a1bc5e4d3a2f1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "proposal_tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "proposal_index": 1,
    "governance_type": "new_constitution",
    "vote": "abstain",
    "metadata_url": null,
    "metadata_hash": null,
    "block_height": 11045890,
    "block_time": 1746070800
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="constitutional-committee-member-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return votes for the given committee credential|[committee_votes](#schemacommittee_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="constitutional-committee-member-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Delegate Representatives (DReps)

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps`

Return the information about Delegate Representatives (DReps)

<h3 id="delegate-representatives-dreps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items. Direction applied to whichever sort key is selected by `order_by`.<br>By default, when sorting by registration order, we return oldest first, newest last.<br>|
|order_by|query|string|false|Optional sort key. When omitted, DReps are ordered by their internal registration order<br>(the current default). Set to `amount` to sort by voting power.<br>|
|retired|query|boolean|false|Optional filter. When `true`, only returns DReps that have been deregistered.<br>When `false`, only returns DReps that are currently registered.<br>When omitted, both are returned.<br>|
|expired|query|boolean|false|Optional filter. When `true`, only returns DReps that have been inactive for longer than<br>the `drep_activity` protocol parameter. When `false`, only returns DReps that are not<br>expired. When omitted, both are returned.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|order_by|amount|

> Example responses

> 200 Response

```json
[
  {
    "drep_id": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "hex": "db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23",
    "amount": "2000000",
    "has_script": false,
    "retired": false,
    "expired": false,
    "last_active_epoch": 509,
    "metadata": {
      "url": "https://aaa.xyz/drep.json",
      "hash": "a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de",
      "json_metadata": {
        "@context": {
          "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
          "CIP119": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#"
        },
        "hashAlgorithm": "blake2b-256",
        "body": {
          "givenName": "Ryan Williams",
          "objectives": "Buy myself an island.",
          "motivations": "I really would like to own an island.",
          "qualifications": "I have my 100m swimming badge."
        }
      },
      "bytes": "\\x7b0a20202240636f6e74657874223a..."
    }
  },
  {
    "drep_id": "drep1cxayn4fgy27yaucvhamsvqj3v6835mh3tjjx6x8hdnr4",
    "hex": "c1ba49d52822bc4ef30cbf77060251668f1a6ef15ca46d18f76cc758",
    "amount": "0",
    "has_script": false,
    "retired": true,
    "expired": false,
    "last_active_epoch": 480,
    "metadata": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="delegate-representatives-dreps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated array with the Delegate Representatives (DReps) data|[dreps](#schemadreps)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="delegate-representatives-dreps-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific DRep

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps/drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps/{drep_id}`

DRep information.

<h3 id="specific-drep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drep_id|path|string|true|Bech32 DRep ID (legacy or CIP-129).|

> Example responses

> 200 Response

```json
{
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc",
  "hex": "a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d",
  "amount": "2000000",
  "active": true,
  "active_epoch": 420,
  "has_script": true,
  "last_active_epoch": 509,
  "retired": false,
  "expired": false
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-drep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the DRep information content|[drep](#schemadrep)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-drep-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## DRep delegators

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/delegators \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps/{drep_id}/delegators`

List of Drep delegators.

<h3 id="drep-delegators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drep_id|path|string|true|Bech32 DRep ID (legacy or CIP-129).|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha",
    "amount": "1137959159981411"
  },
  {
    "address": "stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u",
    "amount": "16958865648"
  },
  {
    "address": "stake1u8lr2pnrgf8f7vrs9lt79hc3sxm8s2w4rwvgpncks3axx6q93d4ck",
    "amount": "18605647"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="drep-delegators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the DRep delegations|[drep_delegators](#schemadrep_delegators)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="drep-delegators-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## DRep metadata

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps/drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc/metadata \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps/{drep_id}/metadata`

DRep metadata information.

<h3 id="drep-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drep_id|path|string|true|Bech32 DRep ID (legacy or CIP-129).|

> Example responses

> 200 Response

```json
{
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc",
  "hex": "a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d",
  "url": "https://aaa.xyz/drep.json",
  "hash": "a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de",
  "json_metadata": {
    "@context": {
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP119": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#",
      "hashAlgorithm": "CIP100:hashAlgorithm",
      "body": {
        "@id": "CIP119:body",
        "@context": {
          "references": {
            "@id": "CIP119:references",
            "@container": "@set",
            "@context": {
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "uri": "CIP100:reference-uri"
            }
          },
          "paymentAddress": "CIP119:paymentAddress",
          "givenName": "CIP119:givenName",
          "image": {
            "@id": "CIP119:image",
            "@context": {
              "ImageObject": "https://schema.org/ImageObject"
            }
          },
          "objectives": "CIP119:objectives",
          "motivations": "CIP119:motivations",
          "qualifications": "CIP119:qualifications"
        }
      }
    },
    "hashAlgorithm": "blake2b-256",
    "body": {
      "paymentAddress": "addr1q86dnpkva4mm859c8ur7tjxn57zgsu6vg8pdetkdve3fsacnq7twy06u2ev5759vutpjgzfryx0ud8hzedhzerava35qwh3x34",
      "givenName": "Ryan Williams",
      "image": {
        "@type": "ImageObject",
        "contentUrl": "https://avatars.githubusercontent.com/u/44342099?v=4",
        "sha256": "2a21e4f7b20c8c72f573707b068fb8fc6d8c64d5035c4e18ecae287947fe2b2e"
      },
      "objectives": "Buy myself an island.",
      "motivations": "I really would like to own an island.",
      "qualifications": "I have my 100m swimming badge, so I would be qualified to be able to swim around island.",
      "references": [
        {
          "@type": "Other",
          "label": "A cool island for Ryan",
          "uri": "https://www.google.com/maps/place/World's+only+5th+order+recursive+island/@62.6511465,-97.7946829,15.75z/data=!4m14!1m7!3m6!1s0x5216a167810cee39:0x11431abdfe4c7421!2sWorld's+only+5th+order+recursive+island!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n!3m5!1s0x5216a167810cee39:0x11431abdfe4c7421!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n?authuser=0&entry=ttu"
        },
        {
          "@type": "Link",
          "label": "Ryan's Twitter",
          "uri": "https://twitter.com/Ryun1_"
        }
      ]
    }
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="drep-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the DRep metadata content.|[drep_metadata](#schemadrep_metadata)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="drep-metadata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## DRep updates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps/drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc/updates \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps/{drep_id}/updates`

List of certificate updates to the DRep.

<h3 id="drep-updates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drep_id|path|string|true|Bech32 DRep ID (legacy or CIP-129).|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "f4097fbdb87ab7c7ab44b30d4e2b81713a058488975d1ab8b05c381dd946a393",
    "cert_index": 0,
    "action": "registered",
    "deposit": "500000000"
  },
  {
    "tx_hash": "dd3243af975be4b5bedce4e5f5b483b2386d5ad207d05e0289c1df0eb261447e",
    "cert_index": 0,
    "action": "deregistered",
    "deposit": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="drep-updates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the Drep updates history|[drep_updates](#schemadrep_updates)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="drep-updates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## DRep votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/dreps/drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/dreps/{drep_id}/votes`

History of Drep votes.

<h3 id="drep-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drep_id|path|string|true|Bech32 DRep ID (legacy or CIP-129).|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "proposal_id": "gov_action1k2jertppnnndejjcglszfqq4yzw8evzrd2nt66rr6rqlz54xp0zsq05ecsn",
    "proposal_tx_hash": "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
    "proposal_cert_index": 0,
    "vote": "yes"
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 3,
    "proposal_id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "proposal_tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "proposal_cert_index": 1,
    "vote": "abstain"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="drep-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the DRep votes|[drep_votes](#schemadrep_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="drep-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Proposals

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals`

Return the information about Proposals

<h3 id="proposals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>Ordering in this case is based on the time of the first mint transaction.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "cert_index": 1,
    "governance_type": "treasury_withdrawals"
  },
  {
    "id": "gov_action1zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3",
    "tx_hash": "71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60",
    "cert_index": 4,
    "governance_type": "no_confidence"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="proposals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated array with the proposal data|[proposals](#schemaproposals)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="proposals-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific proposal

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{tx_hash}/{cert_index}`

Proposal information.

<h3 id="specific-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tx_hash|path|string|true|Transaction hash.|
|cert_index|path|integer|true|Index of the certificate within the proposal transaction.|

> Example responses

> 200 Response

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
  "cert_index": 1,
  "governance_type": "treasury_withdrawals",
  "deposit": "12000",
  "return_address": "stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz",
  "governance_description": {
    "tag": "InfoAction"
  },
  "ratified_epoch": null,
  "enacted_epoch": 123,
  "dropped_epoch": null,
  "expired_epoch": null,
  "expiration": 120
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal information content|[proposal](#schemaproposal)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-proposal-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific parameters proposal

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/parameters \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{tx_hash}/{cert_index}/parameters`

Parameters proposal details.

<h3 id="specific-parameters-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tx_hash|path|string|true|Transaction hash.|
|cert_index|path|integer|true|Index of the certificate within the proposal transaction.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "tx_hash": "string",
  "cert_index": 0,
  "parameters": {
    "epoch": 225,
    "min_fee_a": 44,
    "min_fee_b": 155381,
    "max_block_size": 65536,
    "max_tx_size": 16384,
    "max_block_header_size": 1100,
    "key_deposit": "2000000",
    "pool_deposit": "500000000",
    "e_max": 18,
    "n_opt": 150,
    "a0": 0.3,
    "rho": 0.003,
    "tau": 0.2,
    "decentralisation_param": 0.5,
    "extra_entropy": null,
    "protocol_major_ver": 2,
    "protocol_minor_ver": 0,
    "min_utxo": "1000000",
    "min_pool_cost": "340000000",
    "cost_models": {
      "PlutusV1": [
        197209,
        0
      ],
      "PlutusV2": [
        197209,
        0
      ]
    },
    "price_mem": 0.0577,
    "price_step": 0.0000721,
    "max_tx_ex_mem": "10000000",
    "max_tx_ex_steps": "10000000000",
    "max_block_ex_mem": "50000000",
    "max_block_ex_steps": "40000000000",
    "max_val_size": "5000",
    "collateral_percent": 150,
    "max_collateral_inputs": 3,
    "coins_per_utxo_size": "34482",
    "coins_per_utxo_word": "34482",
    "pvt_motion_no_confidence": 0,
    "pvt_committee_normal": 0,
    "pvt_committee_no_confidence": 0,
    "pvt_hard_fork_initiation": 0,
    "dvt_motion_no_confidence": 0,
    "dvt_committee_normal": 0,
    "dvt_committee_no_confidence": 0,
    "dvt_update_to_constitution": 0,
    "dvt_hard_fork_initiation": 0,
    "dvt_p_p_network_group": 0,
    "dvt_p_p_economic_group": 0,
    "dvt_p_p_technical_group": 0,
    "dvt_p_p_gov_group": 0,
    "dvt_treasury_withdrawal": 0,
    "committee_min_size": "string",
    "committee_max_term_length": "string",
    "gov_action_lifetime": "string",
    "gov_action_deposit": "string",
    "drep_deposit": "string",
    "drep_activity": "string",
    "pvtpp_security_group": 0,
    "pvt_p_p_security_group": 0,
    "min_fee_ref_script_cost_per_byte": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-parameters-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal parameters content|[proposal_parameters](#schemaproposal_parameters)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-parameters-proposal-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific withdrawals proposal

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/withdrawals \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{tx_hash}/{cert_index}/withdrawals`

Withdrawal proposal details.

<h3 id="specific-withdrawals-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tx_hash|path|string|true|Transaction hash.|
|cert_index|path|integer|true|Index of the certificate within the proposal transaction.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
    "amount": "454541212442"
  },
  {
    "stake_address": "stake1xx2g2c9dx2nhhehyrezyxpkstoppcqmu9hk63qgfkccw5rqttygt2",
    "amount": "97846969"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-withdrawals-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal withdrawals content|[proposal_withdrawals](#schemaproposal_withdrawals)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-withdrawals-proposal-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Proposal votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531/1/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{tx_hash}/{cert_index}/votes`

History of Proposal votes.

<h3 id="proposal-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tx_hash|path|string|true|Transaction hash.|
|cert_index|path|integer|true|Index of the certificate within the proposal transaction.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "144a086c58a7b7324fba98be44a9c1560f78970ec777ede701d097936591aa4b",
    "cert_index": 0,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "no",
    "counted": false
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "yes",
    "counted": true
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 3,
    "voter_role": "constitutional_committee",
    "voter": "cc_hot1q0wzkpcxzzfs4mf4yk6yx7d075vqtyx2tnxsr256he6gnwq6yfy5w",
    "vote": "abstain",
    "counted": true
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="proposal-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the Proposal votes|[proposal_votes](#schemaproposal_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="proposal-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific proposal metadata

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/2403339d2f344202fb3583353e11a693a82860e59e65939dcb0e2ac72336d631/0/metadata \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{tx_hash}/{cert_index}/metadata`

Proposal metadata information.

If this endpoint returns `404` or empty metadata for a known proposal, the off-chain metadata could not be fetched (e.g. unreachable URL or hash mismatch). Use the [`/governance/proposals/{gov_action_id}/metadata`](#tag/cardano--governance/GET/governance/proposals/{gov_action_id}/metadata) variant instead — it always returns the anchor `url` and `hash` along with an `error` object describing the fetch failure, so you can retrieve the metadata manually if needed.


<h3 id="specific-proposal-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tx_hash|path|string|true|Transaction hash of the proposal.|
|cert_index|path|integer|true|Index of the certificate within the proposal transaction.|

> Example responses

> 200 Response

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
  "cert_index": 2,
  "url": "https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json",
  "hash": "ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81",
  "json_metadata": {
    "body": {
      "title": "Hardfork to Protocol version 10",
      "abstract": "Let's have sanchoNet in full governance as soon as possible",
      "rationale": "Let's keep testing stuff",
      "motivation": "PV9 is not as fun as PV10",
      "references": [
        {
          "uri": "",
          "@type": "Other",
          "label": "Hardfork to PV10"
        }
      ]
    },
    "authors": [
      {
        "name": "Carlos",
        "witness": {
          "publicKey": "7ea09a34aebb13c9841c71397b1cabfec5ddf950405293dee496cac2f437480a",
          "signature": "a476985b4cc0d457f247797611799a6f6a80fc8cb7ec9dcb5a8223888d0618e30de165f3d869c4a0d9107d8a5b612ad7c5e42441907f5b91796f0d7187d64a01",
          "witnessAlgorithm": "ed25519"
        }
      }
    ],
    "@context": {
      "body": {
        "@id": "CIP108:body",
        "@context": {
          "title": "CIP108:title",
          "abstract": "CIP108:abstract",
          "rationale": "CIP108:rationale",
          "motivation": "CIP108:motivation",
          "references": {
            "@id": "CIP108:references",
            "@context": {
              "uri": "CIP100:reference-uri",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "referenceHash": {
                "@id": "CIP108:referenceHash",
                "@context": {
                  "hashDigest": "CIP108:hashDigest",
                  "hashAlgorithm": "CIP100:hashAlgorithm"
                }
              },
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference"
            },
            "@container": "@set"
          }
        }
      },
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP108": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0108/README.md#",
      "authors": {
        "@id": "CIP100:authors",
        "@context": {
          "name": "http://xmlns.com/foaf/0.1/name",
          "witness": {
            "@id": "CIP100:witness",
            "@context": {
              "publicKey": "CIP100:publicKey",
              "signature": "CIP100:signature",
              "witnessAlgorithm": "CIP100:witnessAlgorithm"
            }
          }
        },
        "@container": "@set"
      },
      "@language": "en-us",
      "hashAlgorithm": "CIP100:hashAlgorithm"
    },
    "hashAlgorithm": "blake2b-256"
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6d6423222c0a2020202022434950313038223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130382f524541444d452e6d6423222c0a202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d222c0a2020202022626f6479223a207b0a20202020202022406964223a20224349503130383a626f6479222c0a2020202020202240636f6e74657874223a207b0a2020202020202020227265666572656e636573223a207b0a2020202020202020202022406964223a20224349503130383a7265666572656e636573222c0a202020202020202020202240636f6e7461696e6572223a202240736574222c0a202020202020202020202240636f6e74657874223a207b0a20202020202020202020202022476f7665726e616e63654d65746164617461223a20224349503130303a476f7665726e616e63654d657461646174615265666572656e6365222c0a202020202020202020202020224f74686572223a20224349503130303a4f746865725265666572656e6365222c0a202020202020202020202020226c6162656c223a20224349503130303a7265666572656e63652d6c6162656c222c0a20202020202020202020202022757269223a20224349503130303a7265666572656e63652d757269222c0a202020202020202020202020227265666572656e636548617368223a207b0a202020202020202020202020202022406964223a20224349503130383a7265666572656e636548617368222c0a20202020202020202020202020202240636f6e74657874223a207b0a202020202020202020202020202020202268617368446967657374223a20224349503130383a68617368446967657374222c0a202020202020202020202020202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d220a20202020202020202020202020207d0a2020202020202020202020207d0a202020202020202020207d0a20202020202020207d2c0a2020202020202020227469746c65223a20224349503130383a7469746c65222c0a2020202020202020226162737472616374223a20224349503130383a6162737472616374222c0a2020202020202020226d6f7469766174696f6e223a20224349503130383a6d6f7469766174696f6e222c0a202020202020202022726174696f6e616c65223a20224349503130383a726174696f6e616c65220a2020202020207d0a202020207d2c0a2020202022617574686f7273223a207b0a20202020202022406964223a20224349503130303a617574686f7273222c0a2020202020202240636f6e7461696e6572223a202240736574222c0a2020202020202240636f6e74657874223a207b0a2020202020202020226e616d65223a2022687474703a2f2f786d6c6e732e636f6d2f666f61662f302e312f6e616d65222c0a2020202020202020227769746e657373223a207b0a2020202020202020202022406964223a20224349503130303a7769746e657373222c0a202020202020202020202240636f6e74657874223a207b0a202020202020202020202020227769746e657373416c676f726974686d223a20224349503130303a7769746e657373416c676f726974686d222c0a202020202020202020202020227075626c69634b6579223a20224349503130303a7075626c69634b6579222c0a202020202020202020202020227369676e6174757265223a20224349503130303a7369676e6174757265220a202020202020202020207d0a20202020202020207d0a2020202020207d0a202020207d0a20207d2c0a20202268617368416c676f726974686d223a2022626c616b6532622d323536222c0a202022626f6479223a207b0a20202020227469746c65223a202248617264666f726b20746f2050726f746f636f6c2076657273696f6e203130222c0a20202020226162737472616374223a20224c6574277320686176652073616e63686f4e657420696e2066756c6c20676f7665726e616e636520617320736f6f6e20617320706f737369626c65222c0a20202020226d6f7469766174696f6e223a2022505639206973206e6f742061732066756e2061732050563130222c0a2020202022726174696f6e616c65223a20224c65742773206b6565702074657374696e67207374756666222c0a20202020227265666572656e636573223a205b0a2020202020207b0a2020202020202020224074797065223a20224f74686572222c0a2020202020202020226c6162656c223a202248617264666f726b20746f2050563130222c0a202020202020202022757269223a2022220a2020202020207d0a202020205d0a20207d2c0a202022617574686f7273223a205b0a202020207b0a202020202020226e616d65223a20224361726c6f73222c0a202020202020227769746e657373223a207b0a2020202020202020227769746e657373416c676f726974686d223a202265643235353139222c0a2020202020202020227075626c69634b6579223a202237656130396133346165626231336339383431633731333937623163616266656335646466393530343035323933646565343936636163326634333734383061222c0a2020202020202020227369676e6174757265223a20226134373639383562346363306434353766323437373937363131373939613666366138306663386362376563396463623561383232333838386430363138653330646531363566336438363963346130643931303764386135623631326164376335653432343431393037663562393137393666306437313837643634613031220a2020202020207d0a202020207d0a20205d0a7d"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-proposal-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal information content|[proposal_metadata](#schemaproposal_metadata)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-proposal-metadata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## GovActionID proposal

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{gov_action_id}`

Proposal information.

<h3 id="govactionid-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gov_action_id|path|string|true|Governance Action Identifier (CIP-0129)|

> Example responses

> 200 Response

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
  "cert_index": 1,
  "governance_type": "treasury_withdrawals",
  "deposit": "12000",
  "return_address": "stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz",
  "governance_description": {
    "tag": "InfoAction"
  },
  "ratified_epoch": null,
  "enacted_epoch": 123,
  "dropped_epoch": null,
  "expired_epoch": null,
  "expiration": 120
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="govactionid-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal information content|[proposal](#schemaproposal)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="govactionid-proposal-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## GovActionID Proposal parameters

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/parameters \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{gov_action_id}/parameters`

Parameters proposal details.

<h3 id="govactionid-proposal-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gov_action_id|path|string|true|Governance Action Identifier (CIP-0129)|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "tx_hash": "string",
  "cert_index": 0,
  "parameters": {
    "epoch": 225,
    "min_fee_a": 44,
    "min_fee_b": 155381,
    "max_block_size": 65536,
    "max_tx_size": 16384,
    "max_block_header_size": 1100,
    "key_deposit": "2000000",
    "pool_deposit": "500000000",
    "e_max": 18,
    "n_opt": 150,
    "a0": 0.3,
    "rho": 0.003,
    "tau": 0.2,
    "decentralisation_param": 0.5,
    "extra_entropy": null,
    "protocol_major_ver": 2,
    "protocol_minor_ver": 0,
    "min_utxo": "1000000",
    "min_pool_cost": "340000000",
    "cost_models": {
      "PlutusV1": [
        197209,
        0
      ],
      "PlutusV2": [
        197209,
        0
      ]
    },
    "price_mem": 0.0577,
    "price_step": 0.0000721,
    "max_tx_ex_mem": "10000000",
    "max_tx_ex_steps": "10000000000",
    "max_block_ex_mem": "50000000",
    "max_block_ex_steps": "40000000000",
    "max_val_size": "5000",
    "collateral_percent": 150,
    "max_collateral_inputs": 3,
    "coins_per_utxo_size": "34482",
    "coins_per_utxo_word": "34482",
    "pvt_motion_no_confidence": 0,
    "pvt_committee_normal": 0,
    "pvt_committee_no_confidence": 0,
    "pvt_hard_fork_initiation": 0,
    "dvt_motion_no_confidence": 0,
    "dvt_committee_normal": 0,
    "dvt_committee_no_confidence": 0,
    "dvt_update_to_constitution": 0,
    "dvt_hard_fork_initiation": 0,
    "dvt_p_p_network_group": 0,
    "dvt_p_p_economic_group": 0,
    "dvt_p_p_technical_group": 0,
    "dvt_p_p_gov_group": 0,
    "dvt_treasury_withdrawal": 0,
    "committee_min_size": "string",
    "committee_max_term_length": "string",
    "gov_action_lifetime": "string",
    "gov_action_deposit": "string",
    "drep_deposit": "string",
    "drep_activity": "string",
    "pvtpp_security_group": 0,
    "pvt_p_p_security_group": 0,
    "min_fee_ref_script_cost_per_byte": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="govactionid-proposal-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal parameters content|[proposal_parameters](#schemaproposal_parameters)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="govactionid-proposal-parameters-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## GovActionID Proposal withdrawals

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/withdrawals \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{gov_action_id}/withdrawals`

Withdrawal proposal details.

<h3 id="govactionid-proposal-withdrawals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gov_action_id|path|string|true|Governance Action Identifier (CIP-0129)|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
    "amount": "454541212442"
  },
  {
    "stake_address": "stake1xx2g2c9dx2nhhehyrezyxpkstoppcqmu9hk63qgfkccw5rqttygt2",
    "amount": "97846969"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="govactionid-proposal-withdrawals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal withdrawals content|[proposal_withdrawals](#schemaproposal_withdrawals)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="govactionid-proposal-withdrawals-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## GovActionID Proposal votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{gov_action_id}/votes`

History of Proposal votes.

<h3 id="govactionid-proposal-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gov_action_id|path|string|true|Governance Action Identifier (CIP-0129)|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "144a086c58a7b7324fba98be44a9c1560f78970ec777ede701d097936591aa4b",
    "cert_index": 0,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "no",
    "counted": false
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "yes",
    "counted": true
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 3,
    "voter_role": "constitutional_committee",
    "voter": "cc_hot1q0wzkpcxzzfs4mf4yk6yx7d075vqtyx2tnxsr256he6gnwq6yfy5w",
    "vote": "abstain",
    "counted": true
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="govactionid-proposal-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the Proposal votes|[proposal_votes](#schemaproposal_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="govactionid-proposal-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## GovActionID proposal metadata

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/governance/proposals/gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn/metadata \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /governance/proposals/{gov_action_id}/metadata`

Proposal metadata information.

<h3 id="govactionid-proposal-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gov_action_id|path|string|true|Governance Action Identifier (CIP-0129)|

> Example responses

> 200 Response

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
  "cert_index": 2,
  "url": "https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json",
  "hash": "ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81",
  "json_metadata": {
    "body": {
      "title": "Hardfork to Protocol version 10",
      "abstract": "Let's have sanchoNet in full governance as soon as possible",
      "rationale": "Let's keep testing stuff",
      "motivation": "PV9 is not as fun as PV10",
      "references": [
        {
          "uri": "",
          "@type": "Other",
          "label": "Hardfork to PV10"
        }
      ]
    },
    "authors": [
      {
        "name": "Carlos",
        "witness": {
          "publicKey": "7ea09a34aebb13c9841c71397b1cabfec5ddf950405293dee496cac2f437480a",
          "signature": "a476985b4cc0d457f247797611799a6f6a80fc8cb7ec9dcb5a8223888d0618e30de165f3d869c4a0d9107d8a5b612ad7c5e42441907f5b91796f0d7187d64a01",
          "witnessAlgorithm": "ed25519"
        }
      }
    ],
    "@context": {
      "body": {
        "@id": "CIP108:body",
        "@context": {
          "title": "CIP108:title",
          "abstract": "CIP108:abstract",
          "rationale": "CIP108:rationale",
          "motivation": "CIP108:motivation",
          "references": {
            "@id": "CIP108:references",
            "@context": {
              "uri": "CIP100:reference-uri",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "referenceHash": {
                "@id": "CIP108:referenceHash",
                "@context": {
                  "hashDigest": "CIP108:hashDigest",
                  "hashAlgorithm": "CIP100:hashAlgorithm"
                }
              },
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference"
            },
            "@container": "@set"
          }
        }
      },
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP108": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0108/README.md#",
      "authors": {
        "@id": "CIP100:authors",
        "@context": {
          "name": "http://xmlns.com/foaf/0.1/name",
          "witness": {
            "@id": "CIP100:witness",
            "@context": {
              "publicKey": "CIP100:publicKey",
              "signature": "CIP100:signature",
              "witnessAlgorithm": "CIP100:witnessAlgorithm"
            }
          }
        },
        "@container": "@set"
      },
      "@language": "en-us",
      "hashAlgorithm": "CIP100:hashAlgorithm"
    },
    "hashAlgorithm": "blake2b-256"
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6d6423222c0a2020202022434950313038223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130382f524541444d452e6d6423222c0a202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d222c0a2020202022626f6479223a207b0a20202020202022406964223a20224349503130383a626f6479222c0a2020202020202240636f6e74657874223a207b0a2020202020202020227265666572656e636573223a207b0a2020202020202020202022406964223a20224349503130383a7265666572656e636573222c0a202020202020202020202240636f6e7461696e6572223a202240736574222c0a202020202020202020202240636f6e74657874223a207b0a20202020202020202020202022476f7665726e616e63654d65746164617461223a20224349503130303a476f7665726e616e63654d657461646174615265666572656e6365222c0a202020202020202020202020224f74686572223a20224349503130303a4f746865725265666572656e6365222c0a202020202020202020202020226c6162656c223a20224349503130303a7265666572656e63652d6c6162656c222c0a20202020202020202020202022757269223a20224349503130303a7265666572656e63652d757269222c0a202020202020202020202020227265666572656e636548617368223a207b0a202020202020202020202020202022406964223a20224349503130383a7265666572656e636548617368222c0a20202020202020202020202020202240636f6e74657874223a207b0a202020202020202020202020202020202268617368446967657374223a20224349503130383a68617368446967657374222c0a202020202020202020202020202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d220a20202020202020202020202020207d0a2020202020202020202020207d0a202020202020202020207d0a20202020202020207d2c0a2020202020202020227469746c65223a20224349503130383a7469746c65222c0a2020202020202020226162737472616374223a20224349503130383a6162737472616374222c0a2020202020202020226d6f7469766174696f6e223a20224349503130383a6d6f7469766174696f6e222c0a202020202020202022726174696f6e616c65223a20224349503130383a726174696f6e616c65220a2020202020207d0a202020207d2c0a2020202022617574686f7273223a207b0a20202020202022406964223a20224349503130303a617574686f7273222c0a2020202020202240636f6e7461696e6572223a202240736574222c0a2020202020202240636f6e74657874223a207b0a2020202020202020226e616d65223a2022687474703a2f2f786d6c6e732e636f6d2f666f61662f302e312f6e616d65222c0a2020202020202020227769746e657373223a207b0a2020202020202020202022406964223a20224349503130303a7769746e657373222c0a202020202020202020202240636f6e74657874223a207b0a202020202020202020202020227769746e657373416c676f726974686d223a20224349503130303a7769746e657373416c676f726974686d222c0a202020202020202020202020227075626c69634b6579223a20224349503130303a7075626c69634b6579222c0a202020202020202020202020227369676e6174757265223a20224349503130303a7369676e6174757265220a202020202020202020207d0a20202020202020207d0a2020202020207d0a202020207d0a20207d2c0a20202268617368416c676f726974686d223a2022626c616b6532622d323536222c0a202022626f6479223a207b0a20202020227469746c65223a202248617264666f726b20746f2050726f746f636f6c2076657273696f6e203130222c0a20202020226162737472616374223a20224c6574277320686176652073616e63686f4e657420696e2066756c6c20676f7665726e616e636520617320736f6f6e20617320706f737369626c65222c0a20202020226d6f7469766174696f6e223a2022505639206973206e6f742061732066756e2061732050563130222c0a2020202022726174696f6e616c65223a20224c65742773206b6565702074657374696e67207374756666222c0a20202020227265666572656e636573223a205b0a2020202020207b0a2020202020202020224074797065223a20224f74686572222c0a2020202020202020226c6162656c223a202248617264666f726b20746f2050563130222c0a202020202020202022757269223a2022220a2020202020207d0a202020205d0a20207d2c0a202022617574686f7273223a205b0a202020207b0a202020202020226e616d65223a20224361726c6f73222c0a202020202020227769746e657373223a207b0a2020202020202020227769746e657373416c676f726974686d223a202265643235353139222c0a2020202020202020227075626c69634b6579223a202237656130396133346165626231336339383431633731333937623163616266656335646466393530343035323933646565343936636163326634333734383061222c0a2020202020202020227369676e6174757265223a20226134373639383562346363306434353766323437373937363131373939613666366138306663386362376563396463623561383232333838386430363138653330646531363566336438363963346130643931303764386135623631326164376335653432343431393037663562393137393666306437313837643634613031220a2020202020207d0a202020207d0a20205d0a7d"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="govactionid-proposal-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the proposal information content|[proposal_metadata_v2](#schemaproposal_metadata_v2)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="govactionid-proposal-metadata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-ledger">Cardano » Ledger</h1>

## Blockchain genesis

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/genesis \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /genesis`

Return the information about blockchain genesis.

> Example responses

> 200 Response

```json
{
  "active_slots_coefficient": 0.05,
  "update_quorum": 5,
  "max_lovelace_supply": "45000000000000000",
  "network_magic": 764824073,
  "epoch_length": 432000,
  "system_start": 1506203091,
  "slots_per_kes_period": 129600,
  "slot_length": 1,
  "max_kes_evolutions": 62,
  "security_param": 2160
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="blockchain-genesis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the genesis parameters.|[genesis_content](#schemagenesis_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="blockchain-genesis-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-mempool">Cardano » Mempool</h1>

## Mempool

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/mempool \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /mempool`

Return transactions that are currently stored in Blockfrost mempool,
waiting to be included in a newly minted block.
Shows only transactions submitted via Blockfrost.io.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="mempool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by the time of transaction submission.<br>By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="mempool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the mempool|[mempool_content](#schemamempool_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="mempool-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific transaction in the mempool

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/mempool/6e5f825c42c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /mempool/{hash}`

Return content of the requested transaction.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="specific-transaction-in-the-mempool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
{
  "tx": {
    "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
    "output_amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "fees": "182485",
    "deposit": "0",
    "size": 433,
    "invalid_before": null,
    "invalid_hereafter": "13885913",
    "utxo_count": 4,
    "withdrawal_count": 0,
    "mir_cert_count": 0,
    "delegation_count": 0,
    "stake_cert_count": 0,
    "pool_update_count": 0,
    "pool_retire_count": 0,
    "asset_mint_or_burn_count": 0,
    "redeemer_count": 0,
    "valid_contract": true
  },
  "inputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
      "output_index": 0,
      "collateral": false,
      "reference": false
    }
  ],
  "outputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "collateral": false,
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
    }
  ],
  "redeemers": [
    {
      "tx_index": 0,
      "purpose": "spend",
      "unit_mem": "1700",
      "unit_steps": "476468"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-transaction-in-the-mempool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the transaction.|[mempool_tx_content](#schemamempool_tx_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-transaction-in-the-mempool-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Mempool by address

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/mempool/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /mempool/addresses/{address}`

List of mempool transactions where at least one of the transaction inputs or outputs belongs to the address.
Shows only transactions submitted via Blockfrost.io.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="mempool-by-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string(64-character case-sensitive hexadecimal string.)|true|Bech32 address.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|Ordered by the time of transaction submission.<br>By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="mempool-by-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the mempool|[mempool_addresses_content](#schemamempool_addresses_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="mempool-by-address-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-metadata">Cardano » Metadata</h1>

## Transaction metadata labels

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/metadata/txs/labels \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /metadata/txs/labels`

List of all used transaction metadata labels.


<h3 id="transaction-metadata-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "label": "1990",
    "cip10": null,
    "count": "1"
  },
  {
    "label": "1967",
    "cip10": "nut.link metadata oracles registry",
    "count": "3"
  },
  {
    "label": "1968",
    "cip10": "nut.link metadata oracles data points",
    "count": "16321"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-metadata-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account metadata content in CBOR|[tx_metadata_labels](#schematx_metadata_labels)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-metadata-labels-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction metadata content in JSON

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/metadata/txs/labels/1990 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /metadata/txs/labels/{label}`

Transaction metadata per label.

<h3 id="transaction-metadata-content-in-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|path|string|true|Metadata label|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.10409800535729975",
          "source": "ergoOracles"
        }
      ]
    }
  },
  {
    "tx_hash": "e865f2cc01ca7381cf98dcdc4de07a5e8674b8ea16e6a18e3ed60c186fde2b9c",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.15409850555139935",
          "source": "ergoOracles"
        }
      ]
    }
  },
  {
    "tx_hash": "4237501da3cfdd53ade91e8911e764bd0699d88fd43b12f44a1f459b89bc91be",
    "json_metadata": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-metadata-content-in-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account metadata content|[tx_metadata_label_json](#schematx_metadata_label_json)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-metadata-content-in-json-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction metadata content in CBOR

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/metadata/txs/labels/1990/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /metadata/txs/labels/{label}/cbor`

Transaction metadata per label.

<h3 id="transaction-metadata-content-in-cbor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|path|string|true|Metadata label|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
    "cbor_metadata": null,
    "metadata": null
  },
  {
    "tx_hash": "e865f2cc01ca7381cf98dcdc4de07a5e8674b8ea16e6a18e3ed60c186fde2b9c",
    "cbor_metadata": null,
    "metadata": null
  },
  {
    "tx_hash": "4237501da3cfdd53ade91e8911e764bd0699d88fd43b12f44a1f459b89bc91be",
    "cbor_metadata": "\\xa100a16b436f6d62696e6174696f6e8601010101010c",
    "metadata": "a100a16b436f6d62696e6174696f6e8601010101010c"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-metadata-content-in-cbor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the account metadata content in CBOR|[tx_metadata_label_cbor](#schematx_metadata_label_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-metadata-content-in-cbor-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-network">Cardano » Network</h1>

## Network information

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/network \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /network`

Return detailed network information.

> Example responses

> 200 Response

```json
{
  "supply": {
    "max": "45000000000000000",
    "total": "32890715183299160",
    "circulating": "32412601976210393",
    "locked": "125006953355",
    "treasury": "98635632000000",
    "reserves": "46635632000000"
  },
  "stake": {
    "live": "23204950463991654",
    "active": "22210233523456321"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="network-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return detailed network information.|[network](#schemanetwork)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="network-information-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Query summary of blockchain eras

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/network/eras \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /network/eras`

Returns start and end of each era along with
parameters that can vary between hard forks.


> Example responses

> 200 Response

```json
[
  {
    "start": {
      "time": 0,
      "slot": 0,
      "epoch": 0
    },
    "end": {
      "time": 89856000,
      "slot": 4492800,
      "epoch": 208
    },
    "parameters": {
      "epoch_length": 21600,
      "slot_length": 20,
      "safe_zone": 4320
    }
  },
  {
    "start": {
      "time": 89856000,
      "slot": 4492800,
      "epoch": 208
    },
    "end": {
      "time": 101952000,
      "slot": 16588800,
      "epoch": 236
    },
    "parameters": {
      "epoch_length": 432000,
      "slot_length": 1,
      "safe_zone": 129600
    }
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 425 Response

```json
{
  "status_code": 425,
  "error": "Mempool Full",
  "message": "Mempool is full, please try resubmitting again later."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="query-summary-of-blockchain-eras-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns era summaries content.|[network-eras](#schemanetwork-eras)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|425|Too Early|Mempool is already full, not accepting new txs straight away|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="query-summary-of-blockchain-eras-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **425**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-pools">Cardano » Pools</h1>

## List of stake pools

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools`

List of registered stake pools.

<h3 id="list-of-stake-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of pools per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "pool1hn7hlwrschqykupwwrtdfkvt2u4uaxvsgxyh6z63703p2knj288",
  "pool1ztjyjfsh432eqetadf82uwuxklh28xc85zcphpwq6mmezavzad2"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="list-of-stake-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the list of pools.|[pool_list](#schemapool_list)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="list-of-stake-pools-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## List of stake pools with additional information

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/extended \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/extended`

List of registered stake pools with additional information.

<h3 id="list-of-stake-pools-with-additional-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of pools per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "pool_id": "pool19u64770wqp6s95gkajc8udheske5e6ljmpq33awxk326zjaza0q",
    "hex": "2f355f79ee007502d116ecb07e36f985b34cebf2d84118f5c6b455a1",
    "active_stake": "1541200000",
    "live_stake": "1541400000",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "nullable": true,
          "example": "https://stakenuts.com/mainnet.json",
          "description": "URL to the stake pool metadata"
        },
        "hash": {
          "type": "string",
          "nullable": true,
          "example": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
          "description": "Hash of the metadata file"
        },
        "ticker": {
          "type": "string",
          "nullable": true,
          "example": "NUTS",
          "description": "Ticker of the stake pool"
        },
        "name": {
          "type": "string",
          "nullable": true,
          "example": "Stake Nuts",
          "description": "Name of the stake pool"
        },
        "description": {
          "type": "string",
          "nullable": true,
          "example": "The best pool ever",
          "description": "Description of the stake pool"
        },
        "homepage": {
          "type": "string",
          "nullable": true,
          "example": "https://stakentus.com/",
          "description": "Home page of the stake pool"
        }
      }
    }
  },
  {
    "pool_id": "pool1dvla4zq98hpvacv20snndupjrqhuc79zl6gjap565nku6et5zdx",
    "hex": "6b3fda88053dc2cee18a7c2736f032182fcc78a2fe912e869aa4edcd",
    "active_stake": "22200000",
    "live_stake": "48955550",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": null
  },
  {
    "pool_id": "pool1wvccajt4eugjtf3k0ja3exjqdj7t8egsujwhcw4tzj4rzsxzw5w",
    "hex": "73318ec975cf1125a6367cbb1c9a406cbcb3e510e49d7c3aab14aa31",
    "active_stake": "9989541215",
    "live_stake": "168445464878",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": null
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="list-of-stake-pools-with-additional-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the list of pools.|[pool_list_extended](#schemapool_list_extended)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="list-of-stake-pools-with-additional-information-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## List of retired stake pools

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/retired \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/retired`

List of already retired pools.

<h3 id="list-of-retired-stake-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of pools per page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "pool_id": "pool19u64770wqp6s95gkajc8udheske5e6ljmpq33awxk326zjaza0q",
    "epoch": 225
  },
  {
    "pool_id": "pool1dvla4zq98hpvacv20snndupjrqhuc79zl6gjap565nku6et5zdx",
    "epoch": 215
  },
  {
    "pool_id": "pool1wvccajt4eugjtf3k0ja3exjqdj7t8egsujwhcw4tzj4rzsxzw5w",
    "epoch": 231
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="list-of-retired-stake-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool information content|[pool_list_retire](#schemapool_list_retire)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="list-of-retired-stake-pools-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## List of retiring stake pools

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/retiring \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/retiring`

List of stake pools retiring in the upcoming epochs

<h3 id="list-of-retiring-stake-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "pool_id": "pool19u64770wqp6s95gkajc8udheske5e6ljmpq33awxk326zjaza0q",
    "epoch": 225
  },
  {
    "pool_id": "pool1dvla4zq98hpvacv20snndupjrqhuc79zl6gjap565nku6et5zdx",
    "epoch": 215
  },
  {
    "pool_id": "pool1wvccajt4eugjtf3k0ja3exjqdj7t8egsujwhcw4tzj4rzsxzw5w",
    "epoch": 231
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="list-of-retiring-stake-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool information content|[pool_list_retire](#schemapool_list_retire)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="list-of-retiring-stake-pools-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific stake pool

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}`

Pool information.

<h3 id="specific-stake-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|

> Example responses

> 200 Response

```json
{
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "hex": "0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735",
  "vrf_key": "0b5245f9934ec2151116fb8ec00f35fd00e0aa3b075c4ed12cce440f999d8233",
  "blocks_minted": 69,
  "blocks_epoch": 4,
  "live_stake": "6900000000",
  "live_size": 0.42,
  "live_saturation": 0.93,
  "live_delegators": 127,
  "active_stake": "4200000000",
  "active_size": 0.43,
  "declared_pledge": "5000000000",
  "live_pledge": "5000000001",
  "margin_cost": 0.05,
  "fixed_cost": "340000000",
  "reward_account": "stake1uxkptsa4lkr55jleztw43t37vgdn88l6ghclfwuxld2eykgpgvg3f",
  "owners": [
    "stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v"
  ],
  "registration": [
    "9f83e5484f543e05b52e99988272a31da373f3aab4c064c76db96643a355d9dc",
    "7ce3b8c433bf401a190d58c8c483d8e3564dfd29ae8633c8b1b3e6c814403e95",
    "3e6e1200ce92977c3fe5996bd4d7d7e192bcb7e231bc762f9f240c76766535b9"
  ],
  "retirement": [
    "252f622976d39e646815db75a77289cf16df4ad2b287dd8e3a889ce14c13d1a8"
  ],
  "calidus_key": {
    "id": "calidus15yt3nqapz799tvp2lt8adttt29k6xa2xnltahn655tu4sgcph42p7",
    "pub_key": "57758911253f6b31df2a87c10eb08a2c9b8450768cb8dd0d378d93f7c2e220f0",
    "nonce": 149292000,
    "tx_hash": "f45ed21c6bc1832cf7f11f4bd6ee47ca9684b4f6f8ff8a398aa2df065eac0ba8",
    "block_height": 11548408,
    "block_time": 1740858988,
    "epoch": 543
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-stake-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool information content|[pool](#schemapool)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-stake-pool-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool history

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/history \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/history`

History of stake pool parameters over epochs.


<h3 id="stake-pool-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "epoch": 233,
    "blocks": 22,
    "active_stake": "20485965693569",
    "active_size": 1.2345,
    "delegators_count": 115,
    "rewards": "206936253674159",
    "fees": "1290968354"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool information content.|[pool_history](#schemapool_history)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-history-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool metadata

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/metadata \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/metadata`

Stake pool registration metadata.


<h3 id="stake-pool-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|

> Example responses

> 200 Response

```json
{
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "hex": "0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735",
  "url": "https://stakenuts.com/mainnet.json",
  "hash": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
  "error": {
    "code": "HASH_MISMATCH",
    "message": "string"
  },
  "ticker": "NUTS",
  "name": "Stake Nuts",
  "description": "The best pool ever",
  "homepage": "https://stakentus.com/"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool metadata content.|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[pool_metadata](#schemapool_metadata)|false|none|none|
|*anyOf*|[empty_object](#schemaempty_object)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool relays

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/relays \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/relays`

Relays of a stake pool.

<h3 id="stake-pool-relays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|

> Example responses

> 200 Response

```json
[
  {
    "ipv4": "4.4.4.4",
    "ipv6": "https://stakenuts.com/mainnet.json",
    "dns": "relay1.stakenuts.com",
    "dns_srv": "_relays._tcp.relays.stakenuts.com",
    "port": 3001
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-relays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool relays information content.|[pool_relays](#schemapool_relays)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-relays-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool delegators

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/delegators \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/delegators`

List of current stake pools delegators.

<h3 id="stake-pool-delegators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha",
    "live_stake": "1137959159981411"
  },
  {
    "address": "stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u",
    "live_stake": "16958865648"
  },
  {
    "address": "stake1u8lr2pnrgf8f7vrs9lt79hc3sxm8s2w4rwvgpncks3axx6q93d4ck",
    "live_stake": "18605647"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-delegators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool delegations.|[pool_delegators](#schemapool_delegators)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-delegators-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool blocks

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/blocks \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/blocks`

List of stake pools blocks.

<h3 id="stake-pool-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  "d8982ca42cfe76b747cc681d35d671050a9e41e9cfe26573eb214e94fe6ff21d",
  "026436c539e2ce84c7f77ffe669f4e4bbbb3b9c53512e5857dcba8bb0b4e9a8c",
  "bcc8487f419b8c668a18ea2120822a05df6dfe1de1f0fac3feba88cf760f303c",
  "86bf7b4a274e0f8ec9816171667c1b4a0cfc661dc21563f271acea9482b62df7"
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool block list|[pool_blocks](#schemapool_blocks)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-blocks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool updates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/updates \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/updates`

List of certificate updates to the stake pool.

<h3 id="stake-pool-updates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
    "cert_index": 0,
    "action": "registered"
  },
  {
    "tx_hash": "9c190bc1ac88b2ab0c05a82d7de8b71b67a9316377e865748a89d4426c0d3005",
    "cert_index": 0,
    "action": "deregistered"
  },
  {
    "tx_hash": "e14a75b0eb2625de7055f1f580d70426311b78e0d36dd695a6bdc96c7b3d80e0",
    "cert_index": 1,
    "action": "registered"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-updates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool updates history|[pool_updates](#schemapool_updates)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-updates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Stake pool votes

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy/votes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /pools/{pool_id}/votes`

History of stake pools votes.

<h3 id="stake-pool-votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_id|path|string|true|Bech32 or hexadecimal pool ID.|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "vote": "yes"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="stake-pool-votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the pool votes.|[pool_votes](#schemapool_votes)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="stake-pool-votes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-scripts">Cardano » Scripts</h1>

## Scripts

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts`

List of scripts.

<h3 id="scripts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
  },
  {
    "script_hash": "e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e"
  },
  {
    "script_hash": "a6e63c0ff05c96943d1cc30bf53112ffff0f34b45986021ca058ec54"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="scripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return list of scripts|[scripts](#schemascripts)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="scripts-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Specific script

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/{script_hash}`

Information about a specific script

<h3 id="specific-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script_hash|path|string|true|Hash of the script|

> Example responses

> 200 Response

```json
{
  "script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
  "type": "plutusV1",
  "serialised_size": 3119
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about a specific script|[script](#schemascript)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-script-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Script JSON

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e/json \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/{script_hash}/json`

JSON representation of a `timelock` script

<h3 id="script-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script_hash|path|string|true|Hash of the script|

> Example responses

> 200 Response

```json
{
  "json": {
    "type": "atLeast",
    "scripts": [
      {
        "type": "sig",
        "keyHash": "654891a4db2ea44b5263f4079a33efa0358ba90769e3d8f86a4a0f81"
      },
      {
        "type": "sig",
        "keyHash": "8685ad48f9bebb8fdb6447abbe140645e0bf743ff98da62e63e2147f"
      },
      {
        "type": "sig",
        "keyHash": "cb0f3b3f91693374ff7ce1d473cf6e721c7bab52b0737f04164e5a2d"
      }
    ],
    "required": 2
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="script-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the JSON representation of a `timelock` script|[script_json](#schemascript_json)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="script-json-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Script CBOR

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/{script_hash}/cbor`

CBOR representation of a `plutus` script

<h3 id="script-cbor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script_hash|path|string|true|Hash of the script|

> Example responses

> 200 Response

```json
{
  "cbor": "4e4d01000033222220051200120011"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="script-cbor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the CBOR representation of a `plutus` script|[script_cbor](#schemascript_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="script-cbor-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Redeemers of a specific script

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e/redeemers \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/{script_hash}/redeemers`

List of redeemers of a specific script

<h3 id="redeemers-of-a-specific-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script_hash|path|string|true|Hash of the script|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
    "tx_index": 0,
    "purpose": "spend",
    "redeemer_data_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "datum_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "unit_mem": "1700",
    "unit_steps": "476468",
    "fee": "172033"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="redeemers-of-a-specific-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the information about redeemers of a specific script|[script_redeemers](#schemascript_redeemers)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="redeemers-of-a-specific-script-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## UTXOs holding the script as a reference script

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e/utxos \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/{script_hash}/utxos`

List of UTXOs that hold the given script as a reference script (CIP-33).
These outputs can be used as reference inputs (CIP-31) in a transaction to
execute the script without including its full bytes. A single script may be
held by multiple UTXOs, potentially at different addresses.


<h3 id="utxos-holding-the-script-as-a-reference-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|script_hash|path|string|true|Hash of the script|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="utxos-holding-the-script-as-a-reference-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the UTXOs holding the script as a reference script|[script_utxos](#schemascript_utxos)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="utxos-holding-the-script-as-a-reference-script-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Datum value

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/datum/db583ad85881a96c73fbb26ab9e24d1120bb38f45385664bb9c797a2ea8d9a2d \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/datum/{datum_hash}`

Query JSON value of a datum by its hash

<h3 id="datum-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datum_hash|path|string|true|Hash of the datum|

> Example responses

> 200 Response

```json
{
  "json_value": {
    "int": 42
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="datum-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the datum value|[script_datum](#schemascript_datum)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="datum-value-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Datum CBOR value

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/scripts/datum/db583ad85881a96c73fbb26ab9e24d1120bb38f45385664bb9c797a2ea8d9a2d/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /scripts/datum/{datum_hash}/cbor`

Query CBOR serialised datum by its hash

<h3 id="datum-cbor-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datum_hash|path|string|true|Hash of the datum|

> Example responses

> 200 Response

```json
{
  "cbor": "19a6aa"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="datum-cbor-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the CBOR serialised datum value|[script_datum_cbor](#schemascript_datum_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="datum-cbor-value-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-transactions">Cardano » Transactions</h1>

## Specific transaction

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c42c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}`

Return content of the requested transaction.

<h3 id="specific-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
{
  "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
  "block": "356b7d7dbb696ccd12775c016941057a9dc70898d87a63fc752271bb46856940",
  "block_height": 123456,
  "block_time": 1635505891,
  "slot": 42000000,
  "index": 1,
  "output_amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "fees": "182485",
  "deposit": "0",
  "size": 433,
  "invalid_before": null,
  "invalid_hereafter": "13885913",
  "utxo_count": 4,
  "withdrawal_count": 0,
  "mir_cert_count": 0,
  "delegation_count": 0,
  "stake_cert_count": 0,
  "pool_update_count": 0,
  "pool_retire_count": 0,
  "asset_mint_or_burn_count": 0,
  "redeemer_count": 0,
  "valid_contract": true,
  "treasury_donation": "0"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="specific-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the transaction.|[tx_content](#schematx_content)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="specific-transaction-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction UTXOs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/utxos \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/utxos`

Return the inputs and UTXOs of the specific transaction.

<h3 id="transaction-utxos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
{
  "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
  "inputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
      "collateral": false,
      "reference": false
    }
  ],
  "outputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "collateral": false,
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
      "consumed_by_tx": "66c29b56952f6085afac3b0632d781af78d020b080063bcfd6c54b8e2b8fed41"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-utxos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the contents of the transaction.|[tx_content_utxo](#schematx_content_utxo)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-utxos-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction stake addresses certificates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/stakes \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/stakes`

Obtain information about (de)registration of stake addresses within a transaction.


<h3 id="transaction-stake-addresses-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction.|

> Example responses

> 200 Response

```json
[
  {
    "cert_index": 0,
    "address": "stake1u9t3a0tcwune5xrnfjg4q7cpvjlgx9lcv0cuqf5mhfjwrvcwrulda",
    "registration": true
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-stake-addresses-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about (de)registration of stake addresses within a transaction.<br>|[tx_content_stake_addr](#schematx_content_stake_addr)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-stake-addresses-certificates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction delegation certificates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/delegations \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/delegations`

Obtain information about delegation certificates of a specific transaction.


<h3 id="transaction-delegation-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string)|true|Hash of the requested transaction.|

> Example responses

> 200 Response

```json
[
  {
    "index": 0,
    "cert_index": 0,
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "active_epoch": 210
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-delegation-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about delegation certificates of a specific transaction|[tx_content_delegations](#schematx_content_delegations)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-delegation-certificates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction withdrawal

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/withdrawals \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/withdrawals`

Obtain information about withdrawals of a specific transaction.

<h3 id="transaction-withdrawal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string)|true|Hash of the requested transaction.|

> Example responses

> 200 Response

```json
[
  {
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "amount": "431833601"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-withdrawal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about withdrawals of a specific transaction.|[tx_content_withdrawals](#schematx_content_withdrawals)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-withdrawal-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction MIRs

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/mirs \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/mirs`

Obtain information about Move Instantaneous Rewards (MIRs) of a specific transaction.

<h3 id="transaction-mirs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string)|true|Hash of the requested transaction.|

> Example responses

> 200 Response

```json
[
  {
    "pot": "reserve",
    "cert_index": 0,
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "amount": "431833601"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-mirs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about Move Instantaneous Rewards (MIRs) of a specific transaction.|[tx_content_mirs](#schematx_content_mirs)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-mirs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction stake pool registration and update certificates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/pool_updates \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/pool_updates`

Obtain information about stake pool registration and update certificates of a specific transaction.


<h3 id="transaction-stake-pool-registration-and-update-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
[
  {
    "cert_index": 0,
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "vrf_key": "0b5245f9934ec2151116fb8ec00f35fd00e0aa3b075c4ed12cce440f999d8233",
    "pledge": "5000000000",
    "margin_cost": 0.05,
    "fixed_cost": "340000000",
    "reward_account": "stake1uxkptsa4lkr55jleztw43t37vgdn88l6ghclfwuxld2eykgpgvg3f",
    "owners": [
      "stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v"
    ],
    "metadata": {
      "url": "https://stakenuts.com/mainnet.json",
      "hash": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
      "ticker": "NUTS",
      "name": "Stake Nuts",
      "description": "The best pool ever",
      "homepage": "https://stakentus.com/"
    },
    "relays": [
      {
        "ipv4": "4.4.4.4",
        "ipv6": "https://stakenuts.com/mainnet.json",
        "dns": "relay1.stakenuts.com",
        "dns_srv": "_relays._tcp.relays.stakenuts.com",
        "port": 3001
      }
    ],
    "active_epoch": 210
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-stake-pool-registration-and-update-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about stake pool certificates of a specific transaction|[tx_content_pool_certs](#schematx_content_pool_certs)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-stake-pool-registration-and-update-certificates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction stake pool retirement certificates

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/pool_retires \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/pool_retires`

Obtain information about stake pool retirements within a specific transaction.


<h3 id="transaction-stake-pool-retirement-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
[
  {
    "cert_index": 0,
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "retiring_epoch": 216
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-stake-pool-retirement-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about stake pool retirements within a specific transaction.<br>|[tx_content_pool_retires](#schematx_content_pool_retires)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-stake-pool-retirement-certificates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction metadata

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/metadata \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/metadata`

Obtain the transaction metadata.

<h3 id="transaction-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
[
  {
    "label": "1967",
    "json_metadata": {
      "metadata": "https://nut.link/metadata.json",
      "hash": "6bf124f217d0e5a0a8adb1dbd8540e1334280d49ab861127868339f43b3948af"
    }
  },
  {
    "label": "1968",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.10409800535729975",
          "source": "ergoOracles"
        }
      ]
    }
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain metadata information associated with a specific transaction.|[tx_content_metadata](#schematx_content_metadata)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-metadata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction metadata in CBOR

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/metadata/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/metadata/cbor`

Obtain the transaction metadata in CBOR.

<h3 id="transaction-metadata-in-cbor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
[
  {
    "label": "1968",
    "cbor_metadata": "\\xa100a16b436f6d62696e6174696f6e8601010101010c",
    "metadata": "a100a16b436f6d62696e6174696f6e8601010101010c"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-metadata-in-cbor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain metadata information associated with a specific transaction.|[tx_content_metadata_cbor](#schematx_content_metadata_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-metadata-in-cbor-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction redeemers

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/redeemers \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/redeemers`

Obtain the transaction redeemers.

<h3 id="transaction-redeemers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the requested transaction|

> Example responses

> 200 Response

```json
[
  {
    "tx_index": 0,
    "purpose": "spend",
    "script_hash": "ec26b89af41bef0f7585353831cb5da42b5b37185e0c8a526143b824",
    "redeemer_data_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "datum_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "unit_mem": "1700",
    "unit_steps": "476468",
    "fee": "172033"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-redeemers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain information about redeemers within a specific transaction.|[tx_content_redeemers](#schematx_content_redeemers)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-redeemers-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction required signers

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/required_signers \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/required_signers`

Obtain the extra transaction witnesses.

<h3 id="transaction-required-signers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the transaction|

> Example responses

> 200 Response

```json
[
  {
    "witness_hash": "d52e11f3e48436dd42dbec6d88c239732e503b8b7a32af58e5f87625"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-required-signers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query required signers (extra transaction witnesses)|[tx_content_required_signers](#schematx_content_required_signers)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-required-signers-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Transaction CBOR

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/txs/6e5f825c82c1c6d6b77f2a14092f3b78c8f1b66db6f4cf8caec1555b6f967b3b/cbor \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /txs/{hash}/cbor`

Obtain the CBOR serialized transaction

<h3 id="transaction-cbor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string(64-character case-sensitive hexadecimal string.)|true|Hash of the transaction|

> Example responses

> 200 Response

```json
{
  "cbor": "84a40081825820203e5b61e0949ffc8fe594727cf7ed73c7396cc2bd212af9a680c9423b5880eb00018282583900f0c60254ecb0addd4c7e40c28fd05b65014ab4c8ecece06c7dcee5a0724bf93336a8225e7ef152b41aea955173be91af19250edea1ddafab1a000f42408258390014beadb876d0a2a593fe2f1b539389e00731290910170e9a1be78e847d2ccdc7af469706878018739bcfde9ae23f009c4ae38aee0a4b4f3a1b0000000253fa0f93021a0002922d031a0303c827a100818258207d3ae39f9a1c916ac7c13f10c7d67c70b870c286a1af71485455c5022a3f391d5840e2f481acd1601a3f39fa976317bba685ddd774621a92611edaaa3df9f48a3b13d8b25ecb2f28b031c1602512418efed3033e463a0dcd22a856c808033cc9e00ff5f6"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="transaction-cbor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query transaction CBOR|[tx_content_cbor](#schematx_content_cbor)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="transaction-cbor-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Submit a transaction

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/tx/submit \
  -X POST \
  -H 'Content-Type: application/cbor' \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}" \
  -d '83a400818258208911f640d452c3be4ff3d89db63b41ce048c056951286e2e28bbf8a51588ab44000181825839009493315cd92eb5d8c4304e67b7e16ae36d61d34502694657811a2c8e32c728d3861e164cab28cb8f006448139c8f1740ffb8e7aa9e5232dc1a10b2531f021a00029519075820cb798b0bce50604eaf2e0dc89367896b18f0a6ef6b32b57e3c9f83f8ee71e608a1008182582073fea80d424276ad0978d4fe5310e8bc2d485f5f6bb3bf87612989f112ad5a7d5840c40425229749a9434763cf01b492057fd56d7091a6372eaa777a1c9b1ca508c914e6a4ee9c0d40fc10952ed668e9ad65378a28b149de6bd4204bd9f095b0a902a11907b0a1667469636b657281a266736f757263656b736f757263655f6e616d656576616c7565736675676961742076656e69616d206d696e7573
'
```

`POST /tx/submit`

Submit an already serialized transaction to the network.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


> Body parameter

```text
83a400818258208911f640d452c3be4ff3d89db63b41ce048c056951286e2e28bbf8a51588ab44000181825839009493315cd92eb5d8c4304e67b7e16ae36d61d34502694657811a2c8e32c728d3861e164cab28cb8f006448139c8f1740ffb8e7aa9e5232dc1a10b2531f021a00029519075820cb798b0bce50604eaf2e0dc89367896b18f0a6ef6b32b57e3c9f83f8ee71e608a1008182582073fea80d424276ad0978d4fe5310e8bc2d485f5f6bb3bf87612989f112ad5a7d5840c40425229749a9434763cf01b492057fd56d7091a6372eaa777a1c9b1ca508c914e6a4ee9c0d40fc10952ed668e9ad65378a28b149de6bd4204bd9f095b0a902a11907b0a1667469636b657281a266736f757263656b736f757263655f6e616d656576616c7565736675676961742076656e69616d206d696e7573

```

<h3 id="submit-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|The transaction to submit, serialized in CBOR.<br>|

> Example responses

> 200 Response

```json
"d1662b24fa9fe985fc2dce47455df399cb2e31e1e1819339e885801cc3578908"
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 425 Response

```json
{
  "status_code": 425,
  "error": "Mempool Full",
  "message": "Mempool is full, please try resubmitting again later."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="submit-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the ID of the submitted transaction.|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|425|Too Early|Mempool is already full, not accepting new txs straight away|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="submit-a-transaction-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **425**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-cardano-utilities">Cardano » Utilities</h1>

## Derive an address

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/utils/addresses/xpub/d507c8f866691bd96e131334c355188b1a1d0b2fa0ab11545075aab332d77d9eb19657ad13ee581b56b0f8d744d66ca356b93d42fe176b3de007d53e9c4c4e7a/0/2 \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /utils/addresses/xpub/{xpub}/{role}/{index}`

Derive Shelley address from an xpub

<h3 id="derive-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xpub|path|string|true|Hex xpub|
|role|path|integer|true|Account role|
|index|path|integer|true|Address index|

> Example responses

> 200 Response

```json
[
  {
    "xpub": "d507c8f866691bd96e131334c355188b1a1d0b2fa0ab11545075aab332d77d9eb19657ad13ee581b56b0f8d744d66ca356b93d42fe176b3de007d53e9c4c4e7a",
    "role": 0,
    "index": 0,
    "address": "addr1q90sqnljxky88s0jsnps48jd872p7znzwym0jpzqnax6qs5nfrlkaatu28n0qzmqh7f2cpksxhpc9jefx3wrl0a2wu8q5amen7"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="derive-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return derivated Shelley address|[utils_addresses_xpub](#schemautils_addresses_xpub)|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="derive-an-address-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Submit a transaction for execution units evaluation

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/utils/txs/evaluate \
  -X POST \
  -H 'Content-Type: application/cbor' \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}" \
  -d '83a400818258208911f640d452c3be4ff3d89db63b41ce048c056951286e2e28bbf8a51588ab44000181825839009493315cd92eb5d8c4304e67b7e16ae36d61d34502694657811a2c8e32c728d3861e164cab28cb8f006448139c8f1740ffb8e7aa9e5232dc1a10b2531f021a00029519075820cb798b0bce50604eaf2e0dc89367896b18f0a6ef6b32b57e3c9f83f8ee71e608a1008182582073fea80d424276ad0978d4fe5310e8bc2d485f5f6bb3bf87612989f112ad5a7d5840c40425229749a9434763cf01b492057fd56d7091a6372eaa777a1c9b1ca508c914e6a4ee9c0d40fc10952ed668e9ad65378a28b149de6bd4204bd9f095b0a902a11907b0a1667469636b657281a266736f757263656b736f757263655f6e616d656576616c7565736675676961742076656e69616d206d696e7573
'
```

`POST /utils/txs/evaluate`

Submit an already serialized transaction to evaluate how much execution units it requires.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


> Body parameter

```text
83a400818258208911f640d452c3be4ff3d89db63b41ce048c056951286e2e28bbf8a51588ab44000181825839009493315cd92eb5d8c4304e67b7e16ae36d61d34502694657811a2c8e32c728d3861e164cab28cb8f006448139c8f1740ffb8e7aa9e5232dc1a10b2531f021a00029519075820cb798b0bce50604eaf2e0dc89367896b18f0a6ef6b32b57e3c9f83f8ee71e608a1008182582073fea80d424276ad0978d4fe5310e8bc2d485f5f6bb3bf87612989f112ad5a7d5840c40425229749a9434763cf01b492057fd56d7091a6372eaa777a1c9b1ca508c914e6a4ee9c0d40fc10952ed668e9ad65378a28b149de6bd4204bd9f095b0a902a11907b0a1667469636b657281a266736f757263656b736f757263655f6e616d656576616c7565736675676961742076656e69616d206d696e7573

```

<h3 id="submit-a-transaction-for-execution-units-evaluation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|version|query|number|false|Optional parameter to specify the version of the Ogmios service to use. Default is `5`. Set to `6` to use Ogmios version 6.<br>|
|body|body|string|true|The transaction to submit, serialized in CBOR.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/cbor|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 425 Response

```json
{
  "status_code": 425,
  "error": "Mempool Full",
  "message": "Mempool is full, please try resubmitting again later."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="submit-a-transaction-for-execution-units-evaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<p><br>  <div class="custom-paragraph"><br>    Returns result of EvaluateTx function from Ogmios see <a class="custom-link" href="https://ogmios.dev/mini-protocols/local-tx-submission/#evaluatetx">EvaluateTx</a><br>    and<a href="https://ogmios.dev/http-api/"> API reference (EvaluateTxResponse)</a> for related errors.<br>  </div><br></p><br>|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|425|Too Early|Mempool is already full, not accepting new txs straight away|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="submit-a-transaction-for-execution-units-evaluation-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **425**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Submit a transaction for execution units evaluation (additional UTXO set)

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/utils/txs/evaluate/utxos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}" \
  -d '{
    "cbor": "string",
    "additionalUtxoSet": [
      [
        {
          "txId": "string",
          "index": 0
        },
        {
          "txId": "string",
          "index": 0
        }
      ]
    ]
  }'
```

`POST /utils/txs/evaluate/utxos`

Submit a JSON payload with transaction CBOR and additional UTXO set to evaluate how much execution units it requires.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


> Body parameter

```json
{
  "cbor": "string",
  "additionalUtxoSet": [
    [
      {
        "txId": "string",
        "index": 0
      },
      {
        "txId": "string",
        "index": 0
      }
    ]
  ]
}
```

<h3 id="submit-a-transaction-for-execution-units-evaluation-additional-utxo-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|version|query|number|false|Optional parameter to specify the version of the Ogmios service to use. Default is `5`. Set to `6` to use Ogmios version 6.<br>|
|body|body|object|true|JSON payload|
|» cbor|body|string|true|Transaction CBOR (encoded using base64 or base16).|
|» additionalUtxoSet|body|[[object]]|false|Additional UTXO as an array of tuples [TxIn, TxOut]. See https://ogmios.dev/mini-protocols/local-tx-submission/#additional-utxo-set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 425 Response

```json
{
  "status_code": 425,
  "error": "Mempool Full",
  "message": "Mempool is full, please try resubmitting again later."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="submit-a-transaction-for-execution-units-evaluation-additional-utxo-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|<p><br>  <div class="custom-paragraph"><br>    Returns result of EvaluateTx function from Ogmios see <a class="custom-link" href="https://ogmios.dev/mini-protocols/local-tx-submission/#evaluatetx">EvaluateTx</a><br>    and<a href="https://ogmios.dev/api/"> API reference (EvaluateTxResponse)</a> for related errors.<br>  </div><br></p><br>|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|425|Too Early|Mempool is already full, not accepting new txs straight away|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="submit-a-transaction-for-execution-units-evaluation-additional-utxo-set-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **425**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-ipfs-add">IPFS » Add</h1>

## Add a file to IPFS

<a id="opIdipfs_add"></a>

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/add \
  -X POST \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /ipfs/add`

You need to `/ipfs/pin/add` an object to avoid it being garbage collected. This usage
is being counted in your user account quota.

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


> Body parameter

```yaml
file: string
```

<h3 id="add-a-file-to-ipfs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "name": "README.md",
  "ipfs_hash": "QmZbHqiCxKEVX7QfijzJTkZiSi3WEVTcvANgNAWzDYgZDr",
  "size": "125297"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="add-a-file-to-ipfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns information about added IPFS object|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="add-a-file-to-ipfs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the file|
|ipfs_hash|string|true|none|IPFS hash of the file|
|size|string|true|none|IPFS node size in Bytes|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-ipfs-gateway">IPFS » Gateway</h1>

## Relay to an IPFS gateway

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/gateway/string \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /ipfs/gateway/{IPFS_path}`

Retrieve an object from the IPFS gateway (useful if you do not want to rely on a public gateway, such as `ipfs.blockfrost.dev`).

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="relay-to-an-ipfs-gateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IPFS_path|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="relay-to-an-ipfs-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the object content|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="relay-to-an-ipfs-gateway-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

<h1 id="blockfrostio-api-documentation-ipfs-pins">IPFS » Pins</h1>

## Pin an object

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/pin/add/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`POST /ipfs/pin/add/{IPFS_path}`

Pinning is necessary to avoid regular garbage collection (deletion) of IPFS objects. Non-pinned objects are regularly being removed without prior notice. Pinned objects are counted in your user storage quota.

**Note:** If the object was pinned to Filecoin (using `filecoin=true`), it cannot be removed or unpinned due to Filecoin's immutable and persistent storage guarantees. Please ensure careful consideration when pinning objects to Filecoin, as the action is irreversible.


<h3 id="pin-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IPFS_path|path|string|true|none|
|filecoin|query|boolean|false|If set to true, the object will be pinned to Filecoin as well. If not specified, the object will only be pinned to IPFS. Objects pinned to Filecoin cannot be unpinned due to its long-term storage guarantees.<br>|

> Example responses

> 200 Response

```json
{
  "ipfs_hash": "QmPojRfAXYAXV92Dof7gtSgaVuxEk64xx9CKvprqu9VwA8",
  "state": "queued",
  "filecoin": true
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 425 Response

```json
{
  "status_code": 425,
  "error": "Pin Queue Full",
  "message": "Your pin queue is currently full, please try pinning again later."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="pin-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pinned object|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|425|Too Early|Pin queue is currently full, not accepting new txs straight away|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="pin-an-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipfs_hash|string|true|none|IPFS hash of the pinned object|
|state|string|true|none|State of the pin action|
|filecoin|boolean|true|none|Whether filecoin was used to pin the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|queued|
|state|pinned|
|state|unpinned|
|state|failed|
|state|gc|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **425**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## List pinned objects

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/pin/list \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /ipfs/pin/list`

List objects pinned to local storage

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="list-pinned-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|The number of results displayed on one page.|
|page|query|integer|false|The page number for listing the results.|
|order|query|string|false|The ordering of items from the point of view of the blockchain,<br>not the page listing itself. By default, we return oldest first, newest last.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "time_created": 1615551024,
    "time_pinned": 1615551024,
    "ipfs_hash": "QmdVMnULrY95mth2XkwjxDtMHvzuzmvUPTotKE1tgqKbCx",
    "size": "1615551024",
    "state": "pinned",
    "filecoin": true
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="list-pinned-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pinned objects|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="list-pinned-objects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» time_created|integer|true|none|Creation time of the IPFS object on our backends|
|» time_pinned|integer|true|none|Pin time of the IPFS object on our backends|
|» ipfs_hash|string|true|none|IPFS hash of the pinned object|
|» size|string|true|none|Size of the object in Bytes|
|» state|string|true|none|State of the pinned object, which is `queued` when we are retriving object. If this<br>is successful the state is changed to `pinned` or `failed` if not. The state `gc` means the<br>pinned item has been garbage collected due to account being over storage quota or after it has<br>been moved to `unpinned` state by removing the object pin.<br>|
|» filecoin|boolean|true|none|Whether filecoin was used to pin the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|» state|queued|
|» state|pinned|
|» state|unpinned|
|» state|failed|
|» state|gc|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Get details about pinned object

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/pin/list/string \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`GET /ipfs/pin/list/{IPFS_path}`

Get information about locally pinned IPFS object

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>


<h3 id="get-details-about-pinned-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IPFS_path|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "time_created": 1615551024,
  "time_pinned": 1615551024,
  "ipfs_hash": "QmdVMnULrY95mth2XkwjxDtMHvzuzmvUPTotKE1tgqKbCx",
  "size": "1615551024",
  "state": "pinned",
  "filecoin": true
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="get-details-about-pinned-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the pins pinned|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-details-about-pinned-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time_created|integer|true|none|Time of the creation of the IPFS object on our backends|
|time_pinned|integer|true|none|Time of the pin of the IPFS object on our backends|
|ipfs_hash|string|true|none|IPFS hash of the pinned object|
|size|string|true|none|Size of the object in Bytes|
|state|string|true|none|State of the pinned object. We define 5 states: `queued`, `pinned`, `unpinned`, `failed`, `gc`.<br>When the object is pending retrieval (i.e. after `/ipfs/pin/add/{IPFS_path}`), the state is `queued`.<br>If the object is already successfully retrieved, state is changed to `pinned` or `failed` otherwise.<br>When object is unpinned (i.e. after `/ipfs/pin/remove/{IPFS_path}`) it is marked for garbage collection.<br>State `gc` means that a previously `unpinned` item has been garbage collected due to account being over storage quota.<br>|
|filecoin|boolean|true|none|Whether filecoin was used to pin the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|queued|
|state|pinned|
|state|unpinned|
|state|failed|
|state|gc|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

## Remove a IPFS pin

> Code samples

```bash
curl https://cardano-mainnet.blockfrost.io/api/v0/ipfs/pin/remove/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "project_id: ${API_KEY}"
```

`POST /ipfs/pin/remove/{IPFS_path}`

Remove pinned objects from local storage

<p>
  <span class="hosted">Hosted</span> Endpoint only available for hosted variant.
</p>

**Note:** If the object was pinned to Filecoin (using `filecoin=true`), it cannot be removed or unpinned due to Filecoin's immutable and persistent storage guarantees. Please ensure careful consideration when pinning objects to Filecoin, as the action is irreversible.


<h3 id="remove-a-ipfs-pin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IPFS_path|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ipfs_hash": "QmPojRfAXYAXV92Dof7gtSgaVuxEk64xx9CKvprqu9VwA8",
  "state": "unpinned"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "error": "Bad Request",
  "message": "Backend did not understand your request."
}
```

> 403 Response

```json
{
  "status_code": 403,
  "error": "Forbidden",
  "message": "Invalid project token."
}
```

> 404 Response

```json
{
  "status_code": 404,
  "error": "Not Found",
  "message": "The requested component has not been found."
}
```

> 418 Response

```json
{
  "status_code": 418,
  "error": "Requested Banned",
  "message": "IP has been auto-banned for flooding."
}
```

> 429 Response

```json
{
  "status_code": 429,
  "error": "Project Over Limit",
  "message": "Usage is over limit."
}
```

> 500 Response

```json
{
  "status_code": 500,
  "error": "Internal Server Error",
  "message": "An unexpected response was received from the backend."
}
```

<h3 id="remove-a-ipfs-pin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the pins removed|Inline|
|400|Bad Request|Bad request|Inline|
|403|Forbidden|Authentication secret is missing or invalid|Inline|
|404|Not Found|Component not found|Inline|
|418|I'm a Teapot|IP has been auto-banned for extensive sending of requests after usage limit has been reached|Inline|
|429|Too Many Requests|Usage limit reached|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="remove-a-ipfs-pin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipfs_hash|string|true|none|IPFS hash of the pinned object|
|state|string|true|none|State of the pin action|

#### Enumerated Values

|Property|Value|
|---|---|
|state|queued|
|state|pinned|
|state|unpinned|
|state|failed|
|state|gc|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **418**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|none|
|error|string|true|none|none|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
project_id
</aside>

# Schemas

<h2 id="tocS_onchain_metadata_cip25">onchain_metadata_cip25</h2>
<!-- backwards compatibility -->
<a id="schemaonchain_metadata_cip25"></a>
<a id="schema_onchain_metadata_cip25"></a>
<a id="tocSonchain_metadata_cip25"></a>
<a id="tocsonchain_metadata_cip25"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the minting transaction under label 721,
which adheres to https://cips.cardano.org/cips/cip25/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string \| [string]|true|none|URI(s) of the associated asset|
|description|string \| [string]|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|files|[object]|false|none|none|

<h2 id="tocS_onchain_metadata_cip68_ft_333">onchain_metadata_cip68_ft_333</h2>
<!-- backwards compatibility -->
<a id="schemaonchain_metadata_cip68_ft_333"></a>
<a id="schema_onchain_metadata_cip68_ft_333"></a>
<a id="tocSonchain_metadata_cip68_ft_333"></a>
<a id="tocsonchain_metadata_cip68_ft_333"></a>

```json
{
  "name": "My FT token",
  "description": "My FT token description",
  "logo": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "ticker": "TOK",
  "decimals": 8
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 333 FT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|description|string|true|none|Additional description|
|logo|string|false|none|URI(s) of the associated asset|
|ticker|string|false|none|Ticker|
|decimals|number|false|none|Number of decimals|

<h2 id="tocS_onchain_metadata_cip68_nft_222">onchain_metadata_cip68_nft_222</h2>
<!-- backwards compatibility -->
<a id="schemaonchain_metadata_cip68_nft_222"></a>
<a id="schema_onchain_metadata_cip68_nft_222"></a>
<a id="tocSonchain_metadata_cip68_nft_222"></a>
<a id="tocsonchain_metadata_cip68_nft_222"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 222 NFT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string|true|none|URI(s) of the associated asset|
|description|string|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|files|[object]|false|none|none|

<h2 id="tocS_onchain_metadata_cip68_rft_444">onchain_metadata_cip68_rft_444</h2>
<!-- backwards compatibility -->
<a id="schemaonchain_metadata_cip68_rft_444"></a>
<a id="schema_onchain_metadata_cip68_rft_444"></a>
<a id="tocSonchain_metadata_cip68_rft_444"></a>
<a id="tocsonchain_metadata_cip68_rft_444"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "decimals": 8,
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 222 NFT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string|true|none|URI(s) of the associated asset|
|description|string|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|decimals|number|false|none|Number of decimals|
|files|[object]|false|none|none|

<h2 id="tocS_block_content">block_content</h2>
<!-- backwards compatibility -->
<a id="schemablock_content"></a>
<a id="schema_block_content"></a>
<a id="tocSblock_content"></a>
<a id="tocsblock_content"></a>

```json
{
  "time": 1641338934,
  "height": 15243593,
  "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
  "slot": 412162133,
  "epoch": 425,
  "epoch_slot": 12,
  "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
  "size": 3,
  "tx_count": 1,
  "output": "128314491794",
  "fees": "592661",
  "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
  "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
  "op_cert_counter": "18",
  "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
  "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
  "confirmations": 4698
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|integer|true|none|Block creation time in UNIX time|
|height|integer \| null|true|none|Block number|
|hash|string|true|none|Hash of the block|
|slot|integer \| null|true|none|Slot number|
|epoch|integer \| null|true|none|Epoch number|
|epoch_slot|integer \| null|true|none|Slot within the epoch|
|slot_leader|string|true|none|Bech32 ID of the slot leader or specific block description in case there is no slot leader|
|size|integer|true|none|Block size in Bytes|
|tx_count|integer|true|none|Number of transactions in the block|
|output|string \| null|true|none|Total output within the block in Lovelaces|
|fees|string \| null|true|none|Total fees within the block in Lovelaces|
|block_vrf|string \| null|true|none|VRF key of the block|
|op_cert|string \| null|true|none|The hash of the operational certificate of the block producer|
|op_cert_counter|string \| null|true|none|The value of the counter used to produce the operational certificate|
|previous_block|string \| null|true|none|Hash of the previous block|
|next_block|string \| null|true|none|Hash of the next block|
|confirmations|integer|true|none|Number of block confirmations|

<h2 id="tocS_block_content_txs">block_content_txs</h2>
<!-- backwards compatibility -->
<a id="schemablock_content_txs"></a>
<a id="schema_block_content_txs"></a>
<a id="tocSblock_content_txs"></a>
<a id="tocsblock_content_txs"></a>

```json
[
  "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
  "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
  "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
  "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b"
]
```

<h2 id="tocS_block_content_txs_cbor">block_content_txs_cbor</h2>
<!-- backwards compatibility -->
<a id="schemablock_content_txs_cbor"></a>
<a id="schema_block_content_txs_cbor"></a>
<a id="tocSblock_content_txs_cbor"></a>
<a id="tocsblock_content_txs_cbor"></a>

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "cbor": "a10081825820cccfe2be401c85342497f6e1e4a241629790b0fb7f2af5f18441779d11f25b1f5840c38a93d63faac9335ecc2f24ead7ca2d46a6637f354ee707bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  },
  {
    "tx_hash": "4eef6bb7755d8afbeac526b799f3e32a624691d166657e9d862aaeb66682c036",
    "cbor": "bb06eb8192af2fa6a676fb72f8772cd1c42b491ec6dfc798c76b61c55dc4eecab362e71ffab26305"
  }
]
```

<h2 id="tocS_block_content_array">block_content_array</h2>
<!-- backwards compatibility -->
<a id="schemablock_content_array"></a>
<a id="schema_block_content_array"></a>
<a id="tocSblock_content_array"></a>
<a id="tocsblock_content_array"></a>

```json
[
  {
    "time": 1641338934,
    "height": 15243593,
    "hash": "4ea1ba291e8eef538635a53e59fddba7810d1679631cc3aed7c8e6c4091a516a",
    "slot": 412162133,
    "epoch": 425,
    "epoch_slot": 12,
    "slot_leader": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2qnikdy",
    "size": 3,
    "tx_count": 1,
    "output": "128314491794",
    "fees": "592661",
    "block_vrf": "vrf_vk1wf2k6lhujezqcfe00l6zetxpnmh9n6mwhpmhm0dvfh3fxgmdnrfqkms8ty",
    "op_cert": "da905277534faf75dae41732650568af545134ee08a3c0392dbefc8096ae177c",
    "op_cert_counter": "18",
    "previous_block": "43ebccb3ac72c7cebd0d9b755a4b08412c9f5dcb81b8a0ad1e3c197d29d47b05",
    "next_block": "8367f026cf4b03e116ff8ee5daf149b55ba5a6ec6dec04803b8dc317721d15fa",
    "confirmations": 4698
  }
]
```

<h2 id="tocS_block_content_addresses">block_content_addresses</h2>
<!-- backwards compatibility -->
<a id="schemablock_content_addresses"></a>
<a id="schema_block_content_addresses"></a>
<a id="tocSblock_content_addresses"></a>
<a id="tocsblock_content_addresses"></a>

```json
[
  {
    "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
    "transactions": [
      {
        "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
      }
    ]
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "transactions": [
      {
        "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157d0"
      }
    ]
  }
]
```

<h2 id="tocS_genesis_content">genesis_content</h2>
<!-- backwards compatibility -->
<a id="schemagenesis_content"></a>
<a id="schema_genesis_content"></a>
<a id="tocSgenesis_content"></a>
<a id="tocsgenesis_content"></a>

```json
{
  "active_slots_coefficient": 0.05,
  "update_quorum": 5,
  "max_lovelace_supply": "45000000000000000",
  "network_magic": 764824073,
  "epoch_length": 432000,
  "system_start": 1506203091,
  "slots_per_kes_period": 129600,
  "slot_length": 1,
  "max_kes_evolutions": 62,
  "security_param": 2160
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_slots_coefficient|number|true|none|The proportion of slots in which blocks should be issued|
|update_quorum|integer|true|none|Determines the quorum needed for votes on the protocol parameter updates|
|max_lovelace_supply|string|true|none|The total number of lovelace in the system|
|network_magic|integer|true|none|Network identifier|
|epoch_length|integer|true|none|Number of slots in an epoch|
|system_start|integer|true|none|Time of slot 0 in UNIX time|
|slots_per_kes_period|integer|true|none|Number of slots in an KES period|
|slot_length|integer|true|none|Duration of one slot in seconds|
|max_kes_evolutions|integer|true|none|The maximum number of time a KES key can be evolved before a pool operator must create a new operational certificate|
|security_param|integer|true|none|Security parameter k|

<h2 id="tocS_committee">committee</h2>
<!-- backwards compatibility -->
<a id="schemacommittee"></a>
<a id="schema_committee"></a>
<a id="tocScommittee"></a>
<a id="tocscommittee"></a>

```json
{
  "proposal_tx_hash": null,
  "proposal_index": null,
  "gov_action_id": null,
  "is_dissolved": false,
  "quorum": {
    "numerator": 2,
    "denominator": 3
  },
  "members": [
    {
      "cc_cold_id": "cc_cold1zgkfeeu07qq9smfqfn0nrf2cqgr5x6jpu8x6lxgxay85t6cmt54xz",
      "cc_cold_hex": "12c9ce78ff8005436901336f8d2ac0411a1b520f0e6d7e6066907a2f",
      "cc_cold_has_script": false,
      "cc_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
      "cc_hot_hex": "0269808bbf8fb495a3b8e290a5f626362236c1abf853eddf08d79a930",
      "cc_hot_has_script": false,
      "status": "authorized",
      "expiration_epoch": 580
    },
    {
      "cc_cold_id": "cc_cold1zgxxx2trz0vyl5ksetnsrct5n5gznn3jmkj6dlpu4lz6lecz5h",
      "cc_cold_hex": "8cc6529626c4c9fa5a195ce03c2e93a204e7193b76967e8794fc59d6",
      "cc_cold_has_script": false,
      "cc_hot_id": null,
      "cc_hot_hex": null,
      "cc_hot_has_script": null,
      "status": "not_authorized",
      "expiration_epoch": 580
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gov_action_id|string \| null|true|none|CIP-129 Governance Action Identifier of the `NewCommittee` action that seated this committee. `null` for the Conway-genesis committee.|
|proposal_tx_hash|string \| null|true|none|Hash of the transaction containing the `NewCommittee` action that seated this committee. `null` for the Conway-genesis committee.|
|proposal_index|integer \| null|true|none|Index of the proposal within its transaction. `null` for the Conway-genesis committee.|
|is_dissolved|boolean|true|none|True iff an enacted `NoConfidence` governance action has dissolved this committee.|
|quorum|object|true|none|Voting threshold of the committee.|
|members|[object]|true|none|Members of the committee.|

<h2 id="tocS_committee_votes">committee_votes</h2>
<!-- backwards compatibility -->
<a id="schemacommittee_votes"></a>
<a id="schema_committee_votes"></a>
<a id="tocScommittee_votes"></a>
<a id="tocscommittee_votes"></a>

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1k2jertppnnndejjcglszfqq4yzw8evzrd2nt66rr6rqlz54xp0zsq05ecsn",
    "proposal_tx_hash": "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
    "proposal_index": 0,
    "governance_type": "parameter_change",
    "vote": "yes",
    "metadata_url": "https://my.cc-member/rationale.jsonld",
    "metadata_hash": "a4b7d5d34f5d8c5b71a0a5c34b7e7f8a3d2e1c0b9a8f7e6d5c4b3a2918f7e6d5",
    "block_height": 11045358,
    "block_time": 1746037200
  },
  {
    "tx_hash": "8a91b32ec2a7bdfde2ab7a1bc5e4d3a2f1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6",
    "voter_hot_id": "cc_hot1qf4xq9mlra5j68w8zjz2lvf3kc3rtsdtu98ka7zx4u6jvqyy39ww0",
    "proposal_id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "proposal_tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "proposal_index": 1,
    "governance_type": "new_constitution",
    "vote": "abstain",
    "metadata_url": null,
    "metadata_hash": null,
    "block_height": 11045890,
    "block_time": 1746070800
  }
]
```

<h2 id="tocS_dreps">dreps</h2>
<!-- backwards compatibility -->
<a id="schemadreps"></a>
<a id="schema_dreps"></a>
<a id="tocSdreps"></a>
<a id="tocsdreps"></a>

```json
[
  {
    "drep_id": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "hex": "db1bc3c3f99ce68977ceaf27ab4dd917123ef9e73f85c304236eab23",
    "amount": "2000000",
    "has_script": false,
    "retired": false,
    "expired": false,
    "last_active_epoch": 509,
    "metadata": {
      "url": "https://aaa.xyz/drep.json",
      "hash": "a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de",
      "json_metadata": {
        "@context": {
          "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
          "CIP119": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#"
        },
        "hashAlgorithm": "blake2b-256",
        "body": {
          "givenName": "Ryan Williams",
          "objectives": "Buy myself an island.",
          "motivations": "I really would like to own an island.",
          "qualifications": "I have my 100m swimming badge."
        }
      },
      "bytes": "\\x7b0a20202240636f6e74657874223a..."
    }
  },
  {
    "drep_id": "drep1cxayn4fgy27yaucvhamsvqj3v6835mh3tjjx6x8hdnr4",
    "hex": "c1ba49d52822bc4ef30cbf77060251668f1a6ef15ca46d18f76cc758",
    "amount": "0",
    "has_script": false,
    "retired": true,
    "expired": false,
    "last_active_epoch": 480,
    "metadata": null
  }
]
```

<h2 id="tocS_drep">drep</h2>
<!-- backwards compatibility -->
<a id="schemadrep"></a>
<a id="schema_drep"></a>
<a id="tocSdrep"></a>
<a id="tocsdrep"></a>

```json
{
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc",
  "hex": "a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d",
  "amount": "2000000",
  "active": true,
  "active_epoch": 420,
  "has_script": true,
  "last_active_epoch": 509,
  "retired": false,
  "expired": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drep_id|string|true|none|Bech32 encoded DRep address|
|hex|string|true|none|The raw bytes of the DRep|
|amount|string|true|none|The total amount of voting power this DRep is delegated.|
|active|boolean|true|none|**Deprecated.** Registration state of the DRep|
|active_epoch|integer \| null|true|none|**Deprecated.** Epoch of the most recent registration|
|has_script|boolean|true|none|Flag indicating whether this DRep's credential is a script hash|
|retired|boolean|true|none|Registration state of the DRep. Set to `true` if the DRep has been deregistered; otherwise, `false`.|
|expired|boolean|true|none|Whether the DRep has been inactive for a consecutive number of epochs (determined by an epoch parameter `drep_activity`)|
|last_active_epoch|integer \| null|true|none|Epoch of the most recent action - registration, update, deregistration or voting|

<h2 id="tocS_drep_delegators">drep_delegators</h2>
<!-- backwards compatibility -->
<a id="schemadrep_delegators"></a>
<a id="schema_drep_delegators"></a>
<a id="tocSdrep_delegators"></a>
<a id="tocsdrep_delegators"></a>

```json
[
  {
    "address": "stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha",
    "amount": "1137959159981411"
  },
  {
    "address": "stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u",
    "amount": "16958865648"
  },
  {
    "address": "stake1u8lr2pnrgf8f7vrs9lt79hc3sxm8s2w4rwvgpncks3axx6q93d4ck",
    "amount": "18605647"
  }
]
```

<h2 id="tocS_drep_metadata">drep_metadata</h2>
<!-- backwards compatibility -->
<a id="schemadrep_metadata"></a>
<a id="schema_drep_metadata"></a>
<a id="tocSdrep_metadata"></a>
<a id="tocsdrep_metadata"></a>

```json
{
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc",
  "hex": "a61261172624e8333ceff098648d90f8e404e2e36d5b5f5985cbd35d",
  "url": "https://aaa.xyz/drep.json",
  "hash": "a14a5ad4f36bddc00f92ddb39fd9ac633c0fd43f8bfa57758f9163d10ef916de",
  "json_metadata": {
    "@context": {
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP119": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0119/README.md#",
      "hashAlgorithm": "CIP100:hashAlgorithm",
      "body": {
        "@id": "CIP119:body",
        "@context": {
          "references": {
            "@id": "CIP119:references",
            "@container": "@set",
            "@context": {
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "uri": "CIP100:reference-uri"
            }
          },
          "paymentAddress": "CIP119:paymentAddress",
          "givenName": "CIP119:givenName",
          "image": {
            "@id": "CIP119:image",
            "@context": {
              "ImageObject": "https://schema.org/ImageObject"
            }
          },
          "objectives": "CIP119:objectives",
          "motivations": "CIP119:motivations",
          "qualifications": "CIP119:qualifications"
        }
      }
    },
    "hashAlgorithm": "blake2b-256",
    "body": {
      "paymentAddress": "addr1q86dnpkva4mm859c8ur7tjxn57zgsu6vg8pdetkdve3fsacnq7twy06u2ev5759vutpjgzfryx0ud8hzedhzerava35qwh3x34",
      "givenName": "Ryan Williams",
      "image": {
        "@type": "ImageObject",
        "contentUrl": "https://avatars.githubusercontent.com/u/44342099?v=4",
        "sha256": "2a21e4f7b20c8c72f573707b068fb8fc6d8c64d5035c4e18ecae287947fe2b2e"
      },
      "objectives": "Buy myself an island.",
      "motivations": "I really would like to own an island.",
      "qualifications": "I have my 100m swimming badge, so I would be qualified to be able to swim around island.",
      "references": [
        {
          "@type": "Other",
          "label": "A cool island for Ryan",
          "uri": "https://www.google.com/maps/place/World's+only+5th+order+recursive+island/@62.6511465,-97.7946829,15.75z/data=!4m14!1m7!3m6!1s0x5216a167810cee39:0x11431abdfe4c7421!2sWorld's+only+5th+order+recursive+island!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n!3m5!1s0x5216a167810cee39:0x11431abdfe4c7421!8m2!3d62.651114!4d-97.7872244!16s%2Fg%2F11spwk2b6n?authuser=0&entry=ttu"
        },
        {
          "@type": "Link",
          "label": "Ryan's Twitter",
          "uri": "https://twitter.com/Ryun1_"
        }
      ]
    }
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drep_id|string|true|none|Bech32 encoded addresses|
|hex|string|true|none|The raw bytes of the DRep|
|url|string|true|none|URL to the drep metadata|
|hash|string|true|none|Hash of the metadata file|
|json_metadata|string \| object \| [object] \| integer \| number \| boolean \| null|true|none|Content of the JSON metadata (validated CIP-119)|
|bytes|string \| null|true|none|Content of the metadata (raw)|
|error|object|false|none|Present when metadata could not be fetched or validated.|

<h2 id="tocS_drep_updates">drep_updates</h2>
<!-- backwards compatibility -->
<a id="schemadrep_updates"></a>
<a id="schema_drep_updates"></a>
<a id="tocSdrep_updates"></a>
<a id="tocsdrep_updates"></a>

```json
[
  {
    "tx_hash": "f4097fbdb87ab7c7ab44b30d4e2b81713a058488975d1ab8b05c381dd946a393",
    "cert_index": 0,
    "action": "registered",
    "deposit": "500000000"
  },
  {
    "tx_hash": "dd3243af975be4b5bedce4e5f5b483b2386d5ad207d05e0289c1df0eb261447e",
    "cert_index": 0,
    "action": "deregistered",
    "deposit": null
  }
]
```

<h2 id="tocS_drep_votes">drep_votes</h2>
<!-- backwards compatibility -->
<a id="schemadrep_votes"></a>
<a id="schema_drep_votes"></a>
<a id="tocSdrep_votes"></a>
<a id="tocsdrep_votes"></a>

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "proposal_id": "gov_action1k2jertppnnndejjcglszfqq4yzw8evzrd2nt66rr6rqlz54xp0zsq05ecsn",
    "proposal_tx_hash": "b2a591ac219ce6dcca5847e0248015209c7cb0436aa6bd6863d0c1f152a60bc5",
    "proposal_cert_index": 0,
    "vote": "yes"
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 3,
    "proposal_id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "proposal_tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "proposal_cert_index": 1,
    "vote": "abstain"
  }
]
```

<h2 id="tocS_proposals">proposals</h2>
<!-- backwards compatibility -->
<a id="schemaproposals"></a>
<a id="schema_proposals"></a>
<a id="tocSproposals"></a>
<a id="tocsproposals"></a>

```json
[
  {
    "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "cert_index": 1,
    "governance_type": "treasury_withdrawals"
  },
  {
    "id": "gov_action1zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3zyx3",
    "tx_hash": "71317e951b20aa46e9fbf45a46a6e950d5723a481225519655bf6c60",
    "cert_index": 4,
    "governance_type": "no_confidence"
  }
]
```

<h2 id="tocS_proposal">proposal</h2>
<!-- backwards compatibility -->
<a id="schemaproposal"></a>
<a id="schema_proposal"></a>
<a id="tocSproposal"></a>
<a id="tocsproposal"></a>

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
  "cert_index": 1,
  "governance_type": "treasury_withdrawals",
  "deposit": "12000",
  "return_address": "stake_test1urd3hs7rlxwwdzthe6hj026dmyt3y0heuulctscyydh2kgck6nkmz",
  "governance_description": {
    "tag": "InfoAction"
  },
  "ratified_epoch": null,
  "enacted_epoch": 123,
  "dropped_epoch": null,
  "expired_epoch": null,
  "expiration": 120
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Governance Action Identifier (CIP-0129)|
|tx_hash|string|true|none|Hash of the proposal transaction.|
|cert_index|integer|true|none|Index of the certificate within the proposal transaction.|
|governance_type|string|true|none|Type of proposal.|
|governance_description|object \| null|true|none|An object describing the content of this GovActionProposal in a readable way.|
|deposit|string|true|none|The deposit amount paid for this proposal.|
|return_address|string|true|none|Bech32 stake address of the reward address to receive the deposit when it is repaid.|
|ratified_epoch|integer \| null|true|none|The epoch at which the proposal was ratified. Null if the proposal has not been ratified.|
|enacted_epoch|integer \| null|true|none|The epoch at which the proposal was enacted. Null if the proposal has not been enacted.|
|dropped_epoch|integer \| null|true|none|The epoch at which the proposal was dropped. A proposal is dropped if it expires or if any of its dependencies expire.|
|expired_epoch|integer \| null|true|none|The epoch at which the proposal expired. Null if the proposal has not expired.|
|expiration|integer|true|none|The epoch at which this governance action will expire.|

#### Enumerated Values

|Property|Value|
|---|---|
|governance_type|hard_fork_initiation|
|governance_type|new_committee|
|governance_type|new_constitution|
|governance_type|info_action|
|governance_type|no_confidence|
|governance_type|parameter_change|
|governance_type|treasury_withdrawals|

<h2 id="tocS_proposal_parameters">proposal_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_parameters"></a>
<a id="schema_proposal_parameters"></a>
<a id="tocSproposal_parameters"></a>
<a id="tocsproposal_parameters"></a>

```json
{
  "id": "string",
  "tx_hash": "string",
  "cert_index": 0,
  "parameters": {
    "epoch": 225,
    "min_fee_a": 44,
    "min_fee_b": 155381,
    "max_block_size": 65536,
    "max_tx_size": 16384,
    "max_block_header_size": 1100,
    "key_deposit": "2000000",
    "pool_deposit": "500000000",
    "e_max": 18,
    "n_opt": 150,
    "a0": 0.3,
    "rho": 0.003,
    "tau": 0.2,
    "decentralisation_param": 0.5,
    "extra_entropy": null,
    "protocol_major_ver": 2,
    "protocol_minor_ver": 0,
    "min_utxo": "1000000",
    "min_pool_cost": "340000000",
    "cost_models": {
      "PlutusV1": [
        197209,
        0
      ],
      "PlutusV2": [
        197209,
        0
      ]
    },
    "price_mem": 0.0577,
    "price_step": 0.0000721,
    "max_tx_ex_mem": "10000000",
    "max_tx_ex_steps": "10000000000",
    "max_block_ex_mem": "50000000",
    "max_block_ex_steps": "40000000000",
    "max_val_size": "5000",
    "collateral_percent": 150,
    "max_collateral_inputs": 3,
    "coins_per_utxo_size": "34482",
    "coins_per_utxo_word": "34482",
    "pvt_motion_no_confidence": 0,
    "pvt_committee_normal": 0,
    "pvt_committee_no_confidence": 0,
    "pvt_hard_fork_initiation": 0,
    "dvt_motion_no_confidence": 0,
    "dvt_committee_normal": 0,
    "dvt_committee_no_confidence": 0,
    "dvt_update_to_constitution": 0,
    "dvt_hard_fork_initiation": 0,
    "dvt_p_p_network_group": 0,
    "dvt_p_p_economic_group": 0,
    "dvt_p_p_technical_group": 0,
    "dvt_p_p_gov_group": 0,
    "dvt_treasury_withdrawal": 0,
    "committee_min_size": "string",
    "committee_max_term_length": "string",
    "gov_action_lifetime": "string",
    "gov_action_deposit": "string",
    "drep_deposit": "string",
    "drep_activity": "string",
    "pvtpp_security_group": 0,
    "pvt_p_p_security_group": 0,
    "min_fee_ref_script_cost_per_byte": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Governance Action Identifier (CIP-0129)|
|tx_hash|string|true|none|Off-chain metadata of a proposal with a specific transaction hash|
|cert_index|integer|true|none|Off-chain metadata of a proposal with a specific transaction cert_index|
|parameters|object|true|none|none|

<h2 id="tocS_proposal_withdrawals">proposal_withdrawals</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_withdrawals"></a>
<a id="schema_proposal_withdrawals"></a>
<a id="tocSproposal_withdrawals"></a>
<a id="tocsproposal_withdrawals"></a>

```json
[
  {
    "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
    "amount": "454541212442"
  },
  {
    "stake_address": "stake1xx2g2c9dx2nhhehyrezyxpkstoppcqmu9hk63qgfkccw5rqttygt2",
    "amount": "97846969"
  }
]
```

<h2 id="tocS_proposal_votes">proposal_votes</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_votes"></a>
<a id="schema_proposal_votes"></a>
<a id="tocSproposal_votes"></a>
<a id="tocsproposal_votes"></a>

```json
[
  {
    "tx_hash": "144a086c58a7b7324fba98be44a9c1560f78970ec777ede701d097936591aa4b",
    "cert_index": 0,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "no",
    "counted": false
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "voter_role": "drep",
    "voter": "drep1mvdu8slennngja7w4un6knwezufra70887zuxpprd64jxfveahn",
    "vote": "yes",
    "counted": true
  },
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 3,
    "voter_role": "constitutional_committee",
    "voter": "cc_hot1q0wzkpcxzzfs4mf4yk6yx7d075vqtyx2tnxsr256he6gnwq6yfy5w",
    "vote": "abstain",
    "counted": true
  }
]
```

<h2 id="tocS_proposal_metadata">proposal_metadata</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_metadata"></a>
<a id="schema_proposal_metadata"></a>
<a id="tocSproposal_metadata"></a>
<a id="tocsproposal_metadata"></a>

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
  "cert_index": 2,
  "url": "https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json",
  "hash": "ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81",
  "json_metadata": {
    "body": {
      "title": "Hardfork to Protocol version 10",
      "abstract": "Let's have sanchoNet in full governance as soon as possible",
      "rationale": "Let's keep testing stuff",
      "motivation": "PV9 is not as fun as PV10",
      "references": [
        {
          "uri": "",
          "@type": "Other",
          "label": "Hardfork to PV10"
        }
      ]
    },
    "authors": [
      {
        "name": "Carlos",
        "witness": {
          "publicKey": "7ea09a34aebb13c9841c71397b1cabfec5ddf950405293dee496cac2f437480a",
          "signature": "a476985b4cc0d457f247797611799a6f6a80fc8cb7ec9dcb5a8223888d0618e30de165f3d869c4a0d9107d8a5b612ad7c5e42441907f5b91796f0d7187d64a01",
          "witnessAlgorithm": "ed25519"
        }
      }
    ],
    "@context": {
      "body": {
        "@id": "CIP108:body",
        "@context": {
          "title": "CIP108:title",
          "abstract": "CIP108:abstract",
          "rationale": "CIP108:rationale",
          "motivation": "CIP108:motivation",
          "references": {
            "@id": "CIP108:references",
            "@context": {
              "uri": "CIP100:reference-uri",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "referenceHash": {
                "@id": "CIP108:referenceHash",
                "@context": {
                  "hashDigest": "CIP108:hashDigest",
                  "hashAlgorithm": "CIP100:hashAlgorithm"
                }
              },
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference"
            },
            "@container": "@set"
          }
        }
      },
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP108": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0108/README.md#",
      "authors": {
        "@id": "CIP100:authors",
        "@context": {
          "name": "http://xmlns.com/foaf/0.1/name",
          "witness": {
            "@id": "CIP100:witness",
            "@context": {
              "publicKey": "CIP100:publicKey",
              "signature": "CIP100:signature",
              "witnessAlgorithm": "CIP100:witnessAlgorithm"
            }
          }
        },
        "@container": "@set"
      },
      "@language": "en-us",
      "hashAlgorithm": "CIP100:hashAlgorithm"
    },
    "hashAlgorithm": "blake2b-256"
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6d6423222c0a2020202022434950313038223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130382f524541444d452e6d6423222c0a202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d222c0a2020202022626f6479223a207b0a20202020202022406964223a20224349503130383a626f6479222c0a2020202020202240636f6e74657874223a207b0a2020202020202020227265666572656e636573223a207b0a2020202020202020202022406964223a20224349503130383a7265666572656e636573222c0a202020202020202020202240636f6e7461696e6572223a202240736574222c0a202020202020202020202240636f6e74657874223a207b0a20202020202020202020202022476f7665726e616e63654d65746164617461223a20224349503130303a476f7665726e616e63654d657461646174615265666572656e6365222c0a202020202020202020202020224f74686572223a20224349503130303a4f746865725265666572656e6365222c0a202020202020202020202020226c6162656c223a20224349503130303a7265666572656e63652d6c6162656c222c0a20202020202020202020202022757269223a20224349503130303a7265666572656e63652d757269222c0a202020202020202020202020227265666572656e636548617368223a207b0a202020202020202020202020202022406964223a20224349503130383a7265666572656e636548617368222c0a20202020202020202020202020202240636f6e74657874223a207b0a202020202020202020202020202020202268617368446967657374223a20224349503130383a68617368446967657374222c0a202020202020202020202020202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d220a20202020202020202020202020207d0a2020202020202020202020207d0a202020202020202020207d0a20202020202020207d2c0a2020202020202020227469746c65223a20224349503130383a7469746c65222c0a2020202020202020226162737472616374223a20224349503130383a6162737472616374222c0a2020202020202020226d6f7469766174696f6e223a20224349503130383a6d6f7469766174696f6e222c0a202020202020202022726174696f6e616c65223a20224349503130383a726174696f6e616c65220a2020202020207d0a202020207d2c0a2020202022617574686f7273223a207b0a20202020202022406964223a20224349503130303a617574686f7273222c0a2020202020202240636f6e7461696e6572223a202240736574222c0a2020202020202240636f6e74657874223a207b0a2020202020202020226e616d65223a2022687474703a2f2f786d6c6e732e636f6d2f666f61662f302e312f6e616d65222c0a2020202020202020227769746e657373223a207b0a2020202020202020202022406964223a20224349503130303a7769746e657373222c0a202020202020202020202240636f6e74657874223a207b0a202020202020202020202020227769746e657373416c676f726974686d223a20224349503130303a7769746e657373416c676f726974686d222c0a202020202020202020202020227075626c69634b6579223a20224349503130303a7075626c69634b6579222c0a202020202020202020202020227369676e6174757265223a20224349503130303a7369676e6174757265220a202020202020202020207d0a20202020202020207d0a2020202020207d0a202020207d0a20207d2c0a20202268617368416c676f726974686d223a2022626c616b6532622d323536222c0a202022626f6479223a207b0a20202020227469746c65223a202248617264666f726b20746f2050726f746f636f6c2076657273696f6e203130222c0a20202020226162737472616374223a20224c6574277320686176652073616e63686f4e657420696e2066756c6c20676f7665726e616e636520617320736f6f6e20617320706f737369626c65222c0a20202020226d6f7469766174696f6e223a2022505639206973206e6f742061732066756e2061732050563130222c0a2020202022726174696f6e616c65223a20224c65742773206b6565702074657374696e67207374756666222c0a20202020227265666572656e636573223a205b0a2020202020207b0a2020202020202020224074797065223a20224f74686572222c0a2020202020202020226c6162656c223a202248617264666f726b20746f2050563130222c0a202020202020202022757269223a2022220a2020202020207d0a202020205d0a20207d2c0a202022617574686f7273223a205b0a202020207b0a202020202020226e616d65223a20224361726c6f73222c0a202020202020227769746e657373223a207b0a2020202020202020227769746e657373416c676f726974686d223a202265643235353139222c0a2020202020202020227075626c69634b6579223a202237656130396133346165626231336339383431633731333937623163616266656335646466393530343035323933646565343936636163326634333734383061222c0a2020202020202020227369676e6174757265223a20226134373639383562346363306434353766323437373937363131373939613666366138306663386362376563396463623561383232333838386430363138653330646531363566336438363963346130643931303764386135623631326164376335653432343431393037663562393137393666306437313837643634613031220a2020202020207d0a202020207d0a20205d0a7d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Governance Action Identifier (CIP-0129)|
|tx_hash|string|true|none|Off-chain metadata of a proposal with a specific transaction hash|
|cert_index|integer|true|none|Off-chain metadata of a proposal with a specific transaction cert_index|
|url|string|true|none|URL to the proposal metadata|
|hash|string|true|none|Hash of the metadata file|
|json_metadata|string \| object \| [object] \| integer \| number \| boolean \| null|true|none|Content of the JSON metadata (validated CIP-108)|
|bytes|string|true|none|Content of the metadata (raw)|

<h2 id="tocS_proposal_metadata_v2">proposal_metadata_v2</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_metadata_v2"></a>
<a id="schema_proposal_metadata_v2"></a>
<a id="tocSproposal_metadata_v2"></a>
<a id="tocsproposal_metadata_v2"></a>

```json
{
  "id": "gov_action1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygsq6dmejn",
  "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
  "cert_index": 2,
  "url": "https://raw.githubusercontent.com/carloslodelar/proposals/main/pv10.json",
  "hash": "ffa226f3863aca006172d559cf46bb8b883a47233962ae2fc94c158d7de6fa81",
  "json_metadata": {
    "body": {
      "title": "Hardfork to Protocol version 10",
      "abstract": "Let's have sanchoNet in full governance as soon as possible",
      "rationale": "Let's keep testing stuff",
      "motivation": "PV9 is not as fun as PV10",
      "references": [
        {
          "uri": "",
          "@type": "Other",
          "label": "Hardfork to PV10"
        }
      ]
    },
    "authors": [
      {
        "name": "Carlos",
        "witness": {
          "publicKey": "7ea09a34aebb13c9841c71397b1cabfec5ddf950405293dee496cac2f437480a",
          "signature": "a476985b4cc0d457f247797611799a6f6a80fc8cb7ec9dcb5a8223888d0618e30de165f3d869c4a0d9107d8a5b612ad7c5e42441907f5b91796f0d7187d64a01",
          "witnessAlgorithm": "ed25519"
        }
      }
    ],
    "@context": {
      "body": {
        "@id": "CIP108:body",
        "@context": {
          "title": "CIP108:title",
          "abstract": "CIP108:abstract",
          "rationale": "CIP108:rationale",
          "motivation": "CIP108:motivation",
          "references": {
            "@id": "CIP108:references",
            "@context": {
              "uri": "CIP100:reference-uri",
              "Other": "CIP100:OtherReference",
              "label": "CIP100:reference-label",
              "referenceHash": {
                "@id": "CIP108:referenceHash",
                "@context": {
                  "hashDigest": "CIP108:hashDigest",
                  "hashAlgorithm": "CIP100:hashAlgorithm"
                }
              },
              "GovernanceMetadata": "CIP100:GovernanceMetadataReference"
            },
            "@container": "@set"
          }
        }
      },
      "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
      "CIP108": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0108/README.md#",
      "authors": {
        "@id": "CIP100:authors",
        "@context": {
          "name": "http://xmlns.com/foaf/0.1/name",
          "witness": {
            "@id": "CIP100:witness",
            "@context": {
              "publicKey": "CIP100:publicKey",
              "signature": "CIP100:signature",
              "witnessAlgorithm": "CIP100:witnessAlgorithm"
            }
          }
        },
        "@container": "@set"
      },
      "@language": "en-us",
      "hashAlgorithm": "CIP100:hashAlgorithm"
    },
    "hashAlgorithm": "blake2b-256"
  },
  "bytes": "\\x7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6d6423222c0a2020202022434950313038223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130382f524541444d452e6d6423222c0a202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d222c0a2020202022626f6479223a207b0a20202020202022406964223a20224349503130383a626f6479222c0a2020202020202240636f6e74657874223a207b0a2020202020202020227265666572656e636573223a207b0a2020202020202020202022406964223a20224349503130383a7265666572656e636573222c0a202020202020202020202240636f6e7461696e6572223a202240736574222c0a202020202020202020202240636f6e74657874223a207b0a20202020202020202020202022476f7665726e616e63654d65746164617461223a20224349503130303a476f7665726e616e63654d657461646174615265666572656e6365222c0a202020202020202020202020224f74686572223a20224349503130303a4f746865725265666572656e6365222c0a202020202020202020202020226c6162656c223a20224349503130303a7265666572656e63652d6c6162656c222c0a20202020202020202020202022757269223a20224349503130303a7265666572656e63652d757269222c0a202020202020202020202020227265666572656e636548617368223a207b0a202020202020202020202020202022406964223a20224349503130383a7265666572656e636548617368222c0a20202020202020202020202020202240636f6e74657874223a207b0a202020202020202020202020202020202268617368446967657374223a20224349503130383a68617368446967657374222c0a202020202020202020202020202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d220a20202020202020202020202020207d0a2020202020202020202020207d0a202020202020202020207d0a20202020202020207d2c0a2020202020202020227469746c65223a20224349503130383a7469746c65222c0a2020202020202020226162737472616374223a20224349503130383a6162737472616374222c0a2020202020202020226d6f7469766174696f6e223a20224349503130383a6d6f7469766174696f6e222c0a202020202020202022726174696f6e616c65223a20224349503130383a726174696f6e616c65220a2020202020207d0a202020207d2c0a2020202022617574686f7273223a207b0a20202020202022406964223a20224349503130303a617574686f7273222c0a2020202020202240636f6e7461696e6572223a202240736574222c0a2020202020202240636f6e74657874223a207b0a2020202020202020226e616d65223a2022687474703a2f2f786d6c6e732e636f6d2f666f61662f302e312f6e616d65222c0a2020202020202020227769746e657373223a207b0a2020202020202020202022406964223a20224349503130303a7769746e657373222c0a202020202020202020202240636f6e74657874223a207b0a202020202020202020202020227769746e657373416c676f726974686d223a20224349503130303a7769746e657373416c676f726974686d222c0a202020202020202020202020227075626c69634b6579223a20224349503130303a7075626c69634b6579222c0a202020202020202020202020227369676e6174757265223a20224349503130303a7369676e6174757265220a202020202020202020207d0a20202020202020207d0a2020202020207d0a202020207d0a20207d2c0a20202268617368416c676f726974686d223a2022626c616b6532622d323536222c0a202022626f6479223a207b0a20202020227469746c65223a202248617264666f726b20746f2050726f746f636f6c2076657273696f6e203130222c0a20202020226162737472616374223a20224c6574277320686176652073616e63686f4e657420696e2066756c6c20676f7665726e616e636520617320736f6f6e20617320706f737369626c65222c0a20202020226d6f7469766174696f6e223a2022505639206973206e6f742061732066756e2061732050563130222c0a2020202022726174696f6e616c65223a20224c65742773206b6565702074657374696e67207374756666222c0a20202020227265666572656e636573223a205b0a2020202020207b0a2020202020202020224074797065223a20224f74686572222c0a2020202020202020226c6162656c223a202248617264666f726b20746f2050563130222c0a202020202020202022757269223a2022220a2020202020207d0a202020205d0a20207d2c0a202022617574686f7273223a205b0a202020207b0a202020202020226e616d65223a20224361726c6f73222c0a202020202020227769746e657373223a207b0a2020202020202020227769746e657373416c676f726974686d223a202265643235353139222c0a2020202020202020227075626c69634b6579223a202237656130396133346165626231336339383431633731333937623163616266656335646466393530343035323933646565343936636163326634333734383061222c0a2020202020202020227369676e6174757265223a20226134373639383562346363306434353766323437373937363131373939613666366138306663386362376563396463623561383232333838386430363138653330646531363566336438363963346130643931303764386135623631326164376335653432343431393037663562393137393666306437313837643634613031220a2020202020207d0a202020207d0a20205d0a7d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Governance Action Identifier (CIP-0129)|
|tx_hash|string|true|none|Off-chain metadata of a proposal with a specific transaction hash|
|cert_index|integer|true|none|Off-chain metadata of a proposal with a specific transaction cert_index|
|url|string|true|none|URL to the proposal metadata|
|hash|string|true|none|Hash of the metadata file|
|json_metadata|string \| object \| [object] \| integer \| number \| boolean \| null|true|none|Content of the JSON metadata (validated CIP-108)|
|bytes|string \| null|true|none|Content of the metadata (raw)|
|error|object|false|none|Present when metadata could not be fetched or validated.|

<h2 id="tocS_epoch_content">epoch_content</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_content"></a>
<a id="schema_epoch_content"></a>
<a id="tocSepoch_content"></a>
<a id="tocsepoch_content"></a>

```json
{
  "epoch": 225,
  "start_time": 1603403091,
  "end_time": 1603835086,
  "first_block_time": 1603403092,
  "last_block_time": 1603835084,
  "block_count": 21298,
  "tx_count": 17856,
  "output": "7849943934049314",
  "fees": "4203312194",
  "active_stake": "784953934049314"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch|integer|true|none|Epoch number|
|start_time|integer|true|none|Unix time of the start of the epoch|
|end_time|integer|true|none|Unix time of the end of the epoch|
|first_block_time|integer|true|none|Unix time of the first block of the epoch|
|last_block_time|integer|true|none|Unix time of the last block of the epoch|
|block_count|integer|true|none|Number of blocks within the epoch|
|tx_count|integer|true|none|Number of transactions within the epoch|
|output|string|true|none|Sum of all the transactions within the epoch in Lovelaces|
|fees|string|true|none|Sum of all the fees within the epoch in Lovelaces|
|active_stake|string \| null|true|none|Sum of all the active stakes within the epoch in Lovelaces|

<h2 id="tocS_epoch_param_content">epoch_param_content</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_param_content"></a>
<a id="schema_epoch_param_content"></a>
<a id="tocSepoch_param_content"></a>
<a id="tocsepoch_param_content"></a>

```json
{
  "epoch": 225,
  "min_fee_a": 44,
  "min_fee_b": 155381,
  "max_block_size": 65536,
  "max_tx_size": 16384,
  "max_block_header_size": 1100,
  "key_deposit": "2000000",
  "pool_deposit": "500000000",
  "e_max": 18,
  "n_opt": 150,
  "a0": 0.3,
  "rho": 0.003,
  "tau": 0.2,
  "decentralisation_param": 0.5,
  "extra_entropy": null,
  "protocol_major_ver": 2,
  "protocol_minor_ver": 0,
  "min_utxo": "1000000",
  "min_pool_cost": "340000000",
  "nonce": "1a3be38bcbb7911969283716ad7aa550250226b76a61fc51cc9a9a35d9276d81",
  "cost_models": {
    "PlutusV1": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    },
    "PlutusV2": {
      "addInteger-cpu-arguments-intercept": 197209,
      "addInteger-cpu-arguments-slope": 0
    }
  },
  "cost_models_raw": {
    "PlutusV1": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV2": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ],
    "PlutusV3": [
      100788,
      420,
      1,
      1,
      1000,
      173,
      0,
      1,
      1000,
      59957,
      4,
      1,
      11183,
      32,
      201305,
      8356,
      "..."
    ]
  },
  "price_mem": 0.0577,
  "price_step": 0.0000721,
  "max_tx_ex_mem": "10000000",
  "max_tx_ex_steps": "10000000000",
  "max_block_ex_mem": "50000000",
  "max_block_ex_steps": "40000000000",
  "max_val_size": "5000",
  "collateral_percent": 150,
  "max_collateral_inputs": 3,
  "coins_per_utxo_size": "34482",
  "coins_per_utxo_word": "34482",
  "pvt_motion_no_confidence": 0,
  "pvt_committee_normal": 0,
  "pvt_committee_no_confidence": 0,
  "pvt_hard_fork_initiation": 0,
  "dvt_motion_no_confidence": 0,
  "dvt_committee_normal": 0,
  "dvt_committee_no_confidence": 0,
  "dvt_update_to_constitution": 0,
  "dvt_hard_fork_initiation": 0,
  "dvt_p_p_network_group": 0,
  "dvt_p_p_economic_group": 0,
  "dvt_p_p_technical_group": 0,
  "dvt_p_p_gov_group": 0,
  "dvt_treasury_withdrawal": 0,
  "committee_min_size": "string",
  "committee_max_term_length": "string",
  "gov_action_lifetime": "string",
  "gov_action_deposit": "string",
  "drep_deposit": "string",
  "drep_activity": "string",
  "pvtpp_security_group": 0,
  "pvt_p_p_security_group": 0,
  "min_fee_ref_script_cost_per_byte": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch|integer|true|none|Epoch number|
|min_fee_a|integer|true|none|The linear factor for the minimum fee calculation for given epoch|
|min_fee_b|integer|true|none|The constant factor for the minimum fee calculation|
|max_block_size|integer|true|none|Maximum block body size in Bytes|
|max_tx_size|integer|true|none|Maximum transaction size|
|max_block_header_size|integer|true|none|Maximum block header size|
|key_deposit|string|true|none|The amount of a key registration deposit in Lovelaces|
|pool_deposit|string|true|none|The amount of a pool registration deposit in Lovelaces|
|e_max|integer|true|none|Epoch bound on pool retirement|
|n_opt|integer|true|none|Desired number of pools|
|a0|number|true|none|Pool pledge influence|
|rho|number|true|none|Monetary expansion|
|tau|number|true|none|Treasury expansion|
|decentralisation_param|number|true|none|Percentage of blocks produced by federated nodes|
|extra_entropy|string \| null|true|none|Seed for extra entropy|
|protocol_major_ver|integer|true|none|Accepted protocol major version|
|protocol_minor_ver|integer|true|none|Accepted protocol minor version|
|min_utxo|string|true|none|**Deprecated.** Minimum UTXO value. Use `coins_per_utxo_size` for Alonzo and later eras|
|min_pool_cost|string|true|none|Minimum stake cost forced on the pool|
|nonce|string|true|none|Epoch number only used once|
|cost_models|object \| null|true|none|**Deprecated.** Cost models parameters for Plutus Core scripts. Deprecated, use `cost_models_raw` instead.|
|cost_models_raw|object \| null|false|none|Cost models parameters for Plutus Core scripts in raw list form|
|price_mem|number \| null|true|none|The per word cost of script memory usage|
|price_step|number \| null|true|none|The cost of script execution step usage|
|max_tx_ex_mem|string \| null|true|none|The maximum number of execution memory allowed to be used in a single transaction|
|max_tx_ex_steps|string \| null|true|none|The maximum number of execution steps allowed to be used in a single transaction|
|max_block_ex_mem|string \| null|true|none|The maximum number of execution memory allowed to be used in a single block|
|max_block_ex_steps|string \| null|true|none|The maximum number of execution steps allowed to be used in a single block|
|max_val_size|string \| null|true|none|The maximum Val size|
|collateral_percent|integer \| null|true|none|The percentage of the transactions fee which must be provided as collateral when including non-native scripts|
|max_collateral_inputs|integer \| null|true|none|The maximum number of collateral inputs allowed in a transaction|
|coins_per_utxo_size|string \| null|true|none|Cost per UTxO word for Alonzo. Cost per UTxO byte for Babbage and later.|
|coins_per_utxo_word|string \| null|true|none|**Deprecated.** Cost per UTxO word for Alonzo. Cost per UTxO byte for Babbage and later.|
|pvt_motion_no_confidence|number \| null|true|none|Pool Voting threshold for motion of no-confidence.|
|pvt_committee_normal|number \| null|true|none|Pool Voting threshold for new committee/threshold (normal state).|
|pvt_committee_no_confidence|number \| null|true|none|Pool Voting threshold for new committee/threshold (state of no-confidence).|
|pvt_hard_fork_initiation|number \| null|true|none|Pool Voting threshold for hard-fork initiation.|
|dvt_motion_no_confidence|number \| null|true|none|DRep Vote threshold for motion of no-confidence.|
|dvt_committee_normal|number \| null|true|none|DRep Vote threshold for new committee/threshold (normal state).|
|dvt_committee_no_confidence|number \| null|true|none|DRep Vote threshold for new committee/threshold (state of no-confidence).|
|dvt_update_to_constitution|number \| null|true|none|DRep Vote threshold for update to the Constitution.|
|dvt_hard_fork_initiation|number \| null|true|none|DRep Vote threshold for hard-fork initiation.|
|dvt_p_p_network_group|number \| null|true|none|DRep Vote threshold for protocol parameter changes, network group.|
|dvt_p_p_economic_group|number \| null|true|none|DRep Vote threshold for protocol parameter changes, economic group.|
|dvt_p_p_technical_group|number \| null|true|none|DRep Vote threshold for protocol parameter changes, technical group.|
|dvt_p_p_gov_group|number \| null|true|none|DRep Vote threshold for protocol parameter changes, governance group.|
|dvt_treasury_withdrawal|number \| null|true|none|DRep Vote threshold for treasury withdrawal.|
|committee_min_size|string \| null|true|none|Minimal constitutional committee size.|
|committee_max_term_length|string \| null|true|none|Constitutional committee term limits.|
|gov_action_lifetime|string \| null|true|none|Governance action expiration.|
|gov_action_deposit|string \| null|true|none|Governance action deposit.|
|drep_deposit|string \| null|true|none|DRep deposit amount.|
|drep_activity|string \| null|true|none|DRep activity period.|
|pvtpp_security_group|number \| null|true|none|**Deprecated.** Pool Voting threshold for security-relevant protocol parameters changes. Renamed to pvt_p_p_security_group.|
|pvt_p_p_security_group|number \| null|true|none|Pool Voting threshold for security-relevant protocol parameters changes.|
|min_fee_ref_script_cost_per_byte|number \| null|true|none|none|

<h2 id="tocS_epoch_content_array">epoch_content_array</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_content_array"></a>
<a id="schema_epoch_content_array"></a>
<a id="tocSepoch_content_array"></a>
<a id="tocsepoch_content_array"></a>

```json
[
  {
    "epoch": 225,
    "start_time": 1603403091,
    "end_time": 1603835086,
    "first_block_time": 1603403092,
    "last_block_time": 1603835084,
    "block_count": 21298,
    "tx_count": 17856,
    "output": "7849943934049314",
    "fees": "4203312194",
    "active_stake": "784953934049314"
  }
]
```

<h2 id="tocS_epoch_stake_content">epoch_stake_content</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_stake_content"></a>
<a id="schema_epoch_stake_content"></a>
<a id="tocSepoch_stake_content"></a>
<a id="tocsepoch_stake_content"></a>

```json
[
  {
    "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "amount": "4440295078"
  }
]
```

<h2 id="tocS_epoch_stake_pool_content">epoch_stake_pool_content</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_stake_pool_content"></a>
<a id="schema_epoch_stake_pool_content"></a>
<a id="tocSepoch_stake_pool_content"></a>
<a id="tocsepoch_stake_pool_content"></a>

```json
[
  {
    "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
    "amount": "4440295078"
  }
]
```

<h2 id="tocS_epoch_block_content">epoch_block_content</h2>
<!-- backwards compatibility -->
<a id="schemaepoch_block_content"></a>
<a id="schema_epoch_block_content"></a>
<a id="tocSepoch_block_content"></a>
<a id="tocsepoch_block_content"></a>

```json
[
  "d0fa315687e99ccdc96b14cc2ea74a767405d64427b648c470731a9b69e4606e",
  "38bc6efb92a830a0ed22a64f979d120d26483fd3c811f6622a8c62175f530878",
  "f3258fcd8b975c061b4fcdcfcbb438807134d6961ec278c200151274893b6b7d"
]
```

<h2 id="tocS_tx_content">tx_content</h2>
<!-- backwards compatibility -->
<a id="schematx_content"></a>
<a id="schema_tx_content"></a>
<a id="tocStx_content"></a>
<a id="tocstx_content"></a>

```json
{
  "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
  "block": "356b7d7dbb696ccd12775c016941057a9dc70898d87a63fc752271bb46856940",
  "block_height": 123456,
  "block_time": 1635505891,
  "slot": 42000000,
  "index": 1,
  "output_amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "fees": "182485",
  "deposit": "0",
  "size": 433,
  "invalid_before": null,
  "invalid_hereafter": "13885913",
  "utxo_count": 4,
  "withdrawal_count": 0,
  "mir_cert_count": 0,
  "delegation_count": 0,
  "stake_cert_count": 0,
  "pool_update_count": 0,
  "pool_retire_count": 0,
  "asset_mint_or_burn_count": 0,
  "redeemer_count": 0,
  "valid_contract": true,
  "treasury_donation": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|Transaction hash|
|block|string|true|none|Block hash|
|block_height|integer|true|none|Block number|
|block_time|integer|true|none|Block creation time in UNIX time|
|slot|integer|true|none|Slot number|
|index|integer|true|none|Transaction index within the block|
|output_amount|[object]|true|none|none|
|fees|string|true|none|Fees of the transaction in Lovelaces|
|deposit|string|true|none|Deposit within the transaction in Lovelaces|
|size|integer|true|none|Size of the transaction in Bytes|
|invalid_before|string \| null|true|none|Left (included) endpoint of the timelock validity intervals|
|invalid_hereafter|string \| null|true|none|Right (excluded) endpoint of the timelock validity intervals|
|utxo_count|integer|true|none|Count of UTXOs within the transaction|
|withdrawal_count|integer|true|none|Count of the withdrawals within the transaction|
|mir_cert_count|integer|true|none|Count of the MIR certificates within the transaction|
|delegation_count|integer|true|none|Count of the delegations within the transaction|
|stake_cert_count|integer|true|none|Count of the stake keys (de)registration within the transaction|
|pool_update_count|integer|true|none|Count of the stake pool registration and update certificates within the transaction|
|pool_retire_count|integer|true|none|Count of the stake pool retirement certificates within the transaction|
|asset_mint_or_burn_count|integer|true|none|Count of asset mints and burns within the transaction|
|redeemer_count|integer|true|none|Count of redeemers within the transaction|
|valid_contract|boolean|true|none|True if contract script passed validation|
|treasury_donation|string|true|none|Treasury donation in Lovelaces|

<h2 id="tocS_tx_content_utxo">tx_content_utxo</h2>
<!-- backwards compatibility -->
<a id="schematx_content_utxo"></a>
<a id="schema_tx_content_utxo"></a>
<a id="tocStx_content_utxo"></a>
<a id="tocstx_content_utxo"></a>

```json
{
  "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
  "inputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
      "collateral": false,
      "reference": false
    }
  ],
  "outputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "collateral": false,
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
      "consumed_by_tx": "66c29b56952f6085afac3b0632d781af78d020b080063bcfd6c54b8e2b8fed41"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|Transaction hash|
|inputs|[object]|true|none|none|
|outputs|[object]|true|none|none|

<h2 id="tocS_tx_content_stake_addr">tx_content_stake_addr</h2>
<!-- backwards compatibility -->
<a id="schematx_content_stake_addr"></a>
<a id="schema_tx_content_stake_addr"></a>
<a id="tocStx_content_stake_addr"></a>
<a id="tocstx_content_stake_addr"></a>

```json
[
  {
    "cert_index": 0,
    "address": "stake1u9t3a0tcwune5xrnfjg4q7cpvjlgx9lcv0cuqf5mhfjwrvcwrulda",
    "registration": true
  }
]
```

<h2 id="tocS_tx_content_delegations">tx_content_delegations</h2>
<!-- backwards compatibility -->
<a id="schematx_content_delegations"></a>
<a id="schema_tx_content_delegations"></a>
<a id="tocStx_content_delegations"></a>
<a id="tocstx_content_delegations"></a>

```json
[
  {
    "index": 0,
    "cert_index": 0,
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "active_epoch": 210
  }
]
```

<h2 id="tocS_tx_content_withdrawals">tx_content_withdrawals</h2>
<!-- backwards compatibility -->
<a id="schematx_content_withdrawals"></a>
<a id="schema_tx_content_withdrawals"></a>
<a id="tocStx_content_withdrawals"></a>
<a id="tocstx_content_withdrawals"></a>

```json
[
  {
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "amount": "431833601"
  }
]
```

<h2 id="tocS_tx_content_mirs">tx_content_mirs</h2>
<!-- backwards compatibility -->
<a id="schematx_content_mirs"></a>
<a id="schema_tx_content_mirs"></a>
<a id="tocStx_content_mirs"></a>
<a id="tocstx_content_mirs"></a>

```json
[
  {
    "pot": "reserve",
    "cert_index": 0,
    "address": "stake1u9r76ypf5fskppa0cmttas05cgcswrttn6jrq4yd7jpdnvc7gt0yc",
    "amount": "431833601"
  }
]
```

<h2 id="tocS_tx_content_pool_certs">tx_content_pool_certs</h2>
<!-- backwards compatibility -->
<a id="schematx_content_pool_certs"></a>
<a id="schema_tx_content_pool_certs"></a>
<a id="tocStx_content_pool_certs"></a>
<a id="tocstx_content_pool_certs"></a>

```json
[
  {
    "cert_index": 0,
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "vrf_key": "0b5245f9934ec2151116fb8ec00f35fd00e0aa3b075c4ed12cce440f999d8233",
    "pledge": "5000000000",
    "margin_cost": 0.05,
    "fixed_cost": "340000000",
    "reward_account": "stake1uxkptsa4lkr55jleztw43t37vgdn88l6ghclfwuxld2eykgpgvg3f",
    "owners": [
      "stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v"
    ],
    "metadata": {
      "url": "https://stakenuts.com/mainnet.json",
      "hash": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
      "ticker": "NUTS",
      "name": "Stake Nuts",
      "description": "The best pool ever",
      "homepage": "https://stakentus.com/"
    },
    "relays": [
      {
        "ipv4": "4.4.4.4",
        "ipv6": "https://stakenuts.com/mainnet.json",
        "dns": "relay1.stakenuts.com",
        "dns_srv": "_relays._tcp.relays.stakenuts.com",
        "port": 3001
      }
    ],
    "active_epoch": 210
  }
]
```

<h2 id="tocS_tx_content_pool_retires">tx_content_pool_retires</h2>
<!-- backwards compatibility -->
<a id="schematx_content_pool_retires"></a>
<a id="schema_tx_content_pool_retires"></a>
<a id="tocStx_content_pool_retires"></a>
<a id="tocstx_content_pool_retires"></a>

```json
[
  {
    "cert_index": 0,
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "retiring_epoch": 216
  }
]
```

<h2 id="tocS_tx_content_metadata">tx_content_metadata</h2>
<!-- backwards compatibility -->
<a id="schematx_content_metadata"></a>
<a id="schema_tx_content_metadata"></a>
<a id="tocStx_content_metadata"></a>
<a id="tocstx_content_metadata"></a>

```json
[
  {
    "label": "1967",
    "json_metadata": {
      "metadata": "https://nut.link/metadata.json",
      "hash": "6bf124f217d0e5a0a8adb1dbd8540e1334280d49ab861127868339f43b3948af"
    }
  },
  {
    "label": "1968",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.10409800535729975",
          "source": "ergoOracles"
        }
      ]
    }
  }
]
```

<h2 id="tocS_tx_content_metadata_cbor">tx_content_metadata_cbor</h2>
<!-- backwards compatibility -->
<a id="schematx_content_metadata_cbor"></a>
<a id="schema_tx_content_metadata_cbor"></a>
<a id="tocStx_content_metadata_cbor"></a>
<a id="tocstx_content_metadata_cbor"></a>

```json
[
  {
    "label": "1968",
    "cbor_metadata": "\\xa100a16b436f6d62696e6174696f6e8601010101010c",
    "metadata": "a100a16b436f6d62696e6174696f6e8601010101010c"
  }
]
```

<h2 id="tocS_tx_content_redeemers">tx_content_redeemers</h2>
<!-- backwards compatibility -->
<a id="schematx_content_redeemers"></a>
<a id="schema_tx_content_redeemers"></a>
<a id="tocStx_content_redeemers"></a>
<a id="tocstx_content_redeemers"></a>

```json
[
  {
    "tx_index": 0,
    "purpose": "spend",
    "script_hash": "ec26b89af41bef0f7585353831cb5da42b5b37185e0c8a526143b824",
    "redeemer_data_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "datum_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "unit_mem": "1700",
    "unit_steps": "476468",
    "fee": "172033"
  }
]
```

<h2 id="tocS_tx_content_required_signers">tx_content_required_signers</h2>
<!-- backwards compatibility -->
<a id="schematx_content_required_signers"></a>
<a id="schema_tx_content_required_signers"></a>
<a id="tocStx_content_required_signers"></a>
<a id="tocstx_content_required_signers"></a>

```json
[
  {
    "witness_hash": "d52e11f3e48436dd42dbec6d88c239732e503b8b7a32af58e5f87625"
  }
]
```

<h2 id="tocS_tx_content_cbor">tx_content_cbor</h2>
<!-- backwards compatibility -->
<a id="schematx_content_cbor"></a>
<a id="schema_tx_content_cbor"></a>
<a id="tocStx_content_cbor"></a>
<a id="tocstx_content_cbor"></a>

```json
{
  "cbor": "84a40081825820203e5b61e0949ffc8fe594727cf7ed73c7396cc2bd212af9a680c9423b5880eb00018282583900f0c60254ecb0addd4c7e40c28fd05b65014ab4c8ecece06c7dcee5a0724bf93336a8225e7ef152b41aea955173be91af19250edea1ddafab1a000f42408258390014beadb876d0a2a593fe2f1b539389e00731290910170e9a1be78e847d2ccdc7af469706878018739bcfde9ae23f009c4ae38aee0a4b4f3a1b0000000253fa0f93021a0002922d031a0303c827a100818258207d3ae39f9a1c916ac7c13f10c7d67c70b870c286a1af71485455c5022a3f391d5840e2f481acd1601a3f39fa976317bba685ddd774621a92611edaaa3df9f48a3b13d8b25ecb2f28b031c1602512418efed3033e463a0dcd22a856c808033cc9e00ff5f6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cbor|string|true|none|CBOR serialized transaction|

<h2 id="tocS_account_content">account_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_content"></a>
<a id="schema_account_content"></a>
<a id="tocSaccount_content"></a>
<a id="tocsaccount_content"></a>

```json
{
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "active": true,
  "registered": true,
  "active_epoch": 412,
  "controlled_amount": "619154618165",
  "rewards_sum": "319154618165",
  "withdrawals_sum": "12125369253",
  "reserves_sum": "319154618165",
  "treasury_sum": "12000000",
  "withdrawable_amount": "319154618165",
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "drep_id": "drep15cfxz9exyn5rx0807zvxfrvslrjqfchrd4d47kv9e0f46uedqtc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stake_address|string|true|none|Bech32 stake address|
|active|boolean|true|none|Delegation state of the account. **Note:** For registration state, use the `registered` field instead.|
|registered|boolean|true|none|Registration state of an account|
|active_epoch|integer \| null|true|none|Epoch of the most recent action - registration or deregistration|
|controlled_amount|string|true|none|Balance of the account in Lovelaces|
|rewards_sum|string|true|none|Sum of all rewards for the account in the Lovelaces|
|withdrawals_sum|string|true|none|Sum of all the withdrawals for the account in Lovelaces|
|reserves_sum|string|true|none|Sum of all  funds from reserves for the account in the Lovelaces|
|treasury_sum|string|true|none|Sum of all funds from treasury for the account in the Lovelaces|
|withdrawable_amount|string|true|none|Sum of available rewards that haven't been withdrawn yet for the account in the Lovelaces|
|pool_id|string \| null|true|none|Bech32 pool ID to which this account is delegated|
|drep_id|string \| null|true|none|Bech32 drep ID to which this account is delegated|

<h2 id="tocS_account_reward_content">account_reward_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_reward_content"></a>
<a id="schema_account_reward_content"></a>
<a id="tocSaccount_reward_content"></a>
<a id="tocsaccount_reward_content"></a>

```json
[
  {
    "epoch": 215,
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 216,
    "amount": "3586329",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 217,
    "amount": "1",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 217,
    "amount": "1337",
    "pool_id": "pool1cytwr0n7eas6du2h2xshl8ypa1yqr18f0erlhhjcuczysiunjcs",
    "type": "leader"
  },
  {
    "epoch": 218,
    "amount": "1395265",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "type": "member"
  },
  {
    "epoch": 218,
    "amount": "500000000",
    "pool_id": "pool1cytwr0n7eas6du2h2xshl8ypa1yqr18f0erlhhjcuczysiunjcs",
    "type": "pool_deposit_refund"
  }
]
```

<h2 id="tocS_account_history_content">account_history_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_history_content"></a>
<a id="schema_account_history_content"></a>
<a id="tocSaccount_history_content"></a>
<a id="tocsaccount_history_content"></a>

```json
[
  {
    "active_epoch": 210,
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
  },
  {
    "active_epoch": 211,
    "amount": "22695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
  }
]
```

<h2 id="tocS_account_delegation_content">account_delegation_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_delegation_content"></a>
<a id="schema_account_delegation_content"></a>
<a id="tocSaccount_delegation_content"></a>
<a id="tocsaccount_delegation_content"></a>

```json
[
  {
    "active_epoch": 210,
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "amount": "12695385",
    "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "active_epoch": 242,
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "amount": "12691385",
    "pool_id": "pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

<h2 id="tocS_account_registration_content">account_registration_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_registration_content"></a>
<a id="schema_account_registration_content"></a>
<a id="tocSaccount_registration_content"></a>
<a id="tocsaccount_registration_content"></a>

```json
[
  {
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "action": "registered",
    "deposit": "2000000",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "action": "deregistered",
    "deposit": null,
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

<h2 id="tocS_account_withdrawal_content">account_withdrawal_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_withdrawal_content"></a>
<a id="schema_account_withdrawal_content"></a>
<a id="tocSaccount_withdrawal_content"></a>
<a id="tocsaccount_withdrawal_content"></a>

```json
[
  {
    "tx_hash": "48a9625c841eea0dd2bb6cf551eabe6523b7290c9ce34be74eedef2dd8f7ecc5",
    "amount": "454541212442",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "4230b0cbccf6f449f0847d8ad1d634a7a49df60d8c142bb8cc2dbc8ca03d9e34",
    "amount": "97846969",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

<h2 id="tocS_account_mir_content">account_mir_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_mir_content"></a>
<a id="schema_account_mir_content"></a>
<a id="tocSaccount_mir_content"></a>
<a id="tocsaccount_mir_content"></a>

```json
[
  {
    "tx_hash": "69705bba1d687a816ff5a04ec0c358a1f1ef075ab7f9c6cc2763e792581cec6d",
    "amount": "2193707473",
    "tx_slot": 45093580,
    "block_time": 1646437200,
    "block_height": 6745358
  },
  {
    "tx_hash": "baaa77b63d4d7d2bb3ab02c9b85978c2092c336dede7f59e31ad65452d510c13",
    "amount": "14520198574",
    "tx_slot": 48093580,
    "block_time": 1649033600,
    "block_height": 7126896
  }
]
```

<h2 id="tocS_account_addresses_content">account_addresses_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_addresses_content"></a>
<a id="schema_account_addresses_content"></a>
<a id="tocSaccount_addresses_content"></a>
<a id="tocsaccount_addresses_content"></a>

```json
[
  {
    "address": "addr1qx2kd28nq8ac5prwg32hhvudlwggpgfp8utlyqxu6wqgz62f79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sy0f4qd"
  },
  {
    "address": "addr1qys3czp8s9thc6u2fqed9yq3h24nyw28uk0m6mkgn9dkckjf79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9suth4w4"
  },
  {
    "address": "addr1q8j55h253zcvl326sk5qdt2n8z7eghzspe0ekxgncr796s2f79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sjmd35m"
  },
  {
    "address": "addr1q8f7gxrprank3drhx8k5grlux7ene0nlwun8y9thu8mc3yjf79qsdmm5dsknt9ecr5w468r9ey0fxwkdrwh08ly3tu9sls6vnt"
  }
]
```

<h2 id="tocS_account_addresses_assets">account_addresses_assets</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_addresses_assets"></a>
<a id="schema_account_addresses_assets"></a>
<a id="tocSaccount_addresses_assets"></a>
<a id="tocsaccount_addresses_assets"></a>

```json
[
  {
    "unit": "d5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756433343132",
    "quantity": "1"
  },
  {
    "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "125"
  }
]
```

<h2 id="tocS_account_addresses_total">account_addresses_total</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_addresses_total"></a>
<a id="schema_account_addresses_total"></a>
<a id="tocSaccount_addresses_total"></a>
<a id="tocsaccount_addresses_total"></a>

```json
{
  "stake_address": "stake1u9l5q5jwgelgagzyt6nuaasefgmn8pd25c8e9qpeprq0tdcp0e3uk",
  "received_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "sent_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "tx_count": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stake_address|string|true|none|Bech32 encoded stake address|
|received_sum|[object]|true|none|none|
|sent_sum|[object]|true|none|none|
|tx_count|integer|true|none|Count of all transactions for all addresses associated with the account|

<h2 id="tocS_account_utxo_content">account_utxo_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_utxo_content"></a>
<a id="schema_account_utxo_content"></a>
<a id="tocSaccount_utxo_content"></a>
<a id="tocsaccount_utxo_content"></a>

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "729235000"
      }
    ],
    "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    "output_index": 1,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  }
]
```

<h2 id="tocS_account_transactions_content">account_transactions_content</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_transactions_content"></a>
<a id="schema_account_transactions_content"></a>
<a id="tocSaccount_transactions_content"></a>
<a id="tocsaccount_transactions_content"></a>

```json
[
  {
    "address": "addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
    "tx_hash": "bd78e0e73fb1691f08746a331bd764d11552c3a36ef766d4f1a3bbdc7f29918d",
    "tx_index": 34,
    "block_height": 7900364,
    "block_time": 1666114079
  },
  {
    "address": "addr1q8zsjx7vxkl4esfejafhxthyew8c54c9ch95gkv3nz37sxrc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgq3jd3w2",
    "tx_hash": "67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696",
    "tx_index": 6,
    "block_height": 7900557,
    "block_time": 1666118180
  },
  {
    "address": "addr1qxrrzqsqnzqx3p8sxxsry936h6c78ml4rdl224f33l7pmcnc9ty742qncmffaesxqarvqjmxmy36d9aht2duhmhvekgqr735lq",
    "tx_hash": "67e9a201bc08a92bcc6f447a4ed032300d933545ccd7f1da94ec1e8dbeb4a696",
    "tx_index": 6,
    "block_height": 7900557,
    "block_time": 1666118180
  }
]
```

<h2 id="tocS_mempool_content">mempool_content</h2>
<!-- backwards compatibility -->
<a id="schemamempool_content"></a>
<a id="schema_mempool_content"></a>
<a id="tocSmempool_content"></a>
<a id="tocsmempool_content"></a>

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
  }
]
```

<h2 id="tocS_mempool_tx_content">mempool_tx_content</h2>
<!-- backwards compatibility -->
<a id="schemamempool_tx_content"></a>
<a id="schema_mempool_tx_content"></a>
<a id="tocSmempool_tx_content"></a>
<a id="tocsmempool_tx_content"></a>

```json
{
  "tx": {
    "hash": "1e043f100dce12d107f679685acd2fc0610e10f72a92d412794c9773d11d8477",
    "output_amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "fees": "182485",
    "deposit": "0",
    "size": 433,
    "invalid_before": null,
    "invalid_hereafter": "13885913",
    "utxo_count": 4,
    "withdrawal_count": 0,
    "mir_cert_count": 0,
    "delegation_count": 0,
    "stake_cert_count": 0,
    "pool_update_count": 0,
    "pool_retire_count": 0,
    "asset_mint_or_burn_count": 0,
    "redeemer_count": 0,
    "valid_contract": true
  },
  "inputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
      "output_index": 0,
      "collateral": false,
      "reference": false
    }
  ],
  "outputs": [
    {
      "address": "addr1q9ld26v2lv8wvrxxmvg90pn8n8n5k6tdst06q2s856rwmvnueldzuuqmnsye359fqrk8hwvenjnqultn7djtrlft7jnq7dy7wv",
      "amount": [
        {
          "unit": "lovelace",
          "quantity": "42000000"
        },
        {
          "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
          "quantity": "12"
        }
      ],
      "output_index": 0,
      "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
      "inline_datum": "19a6aa",
      "collateral": false,
      "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
    }
  ],
  "redeemers": [
    {
      "tx_index": 0,
      "purpose": "spend",
      "unit_mem": "1700",
      "unit_steps": "476468"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tx|object|true|none|none|
|inputs|[object]|true|none|none|
|outputs|[object]|true|none|none|
|redeemers|[object]|false|none|none|

<h2 id="tocS_mempool_addresses_content">mempool_addresses_content</h2>
<!-- backwards compatibility -->
<a id="schemamempool_addresses_content"></a>
<a id="schema_mempool_addresses_content"></a>
<a id="tocSmempool_addresses_content"></a>
<a id="tocsmempool_addresses_content"></a>

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0"
  }
]
```

<h2 id="tocS_tx_metadata_labels">tx_metadata_labels</h2>
<!-- backwards compatibility -->
<a id="schematx_metadata_labels"></a>
<a id="schema_tx_metadata_labels"></a>
<a id="tocStx_metadata_labels"></a>
<a id="tocstx_metadata_labels"></a>

```json
[
  {
    "label": "1990",
    "cip10": null,
    "count": "1"
  },
  {
    "label": "1967",
    "cip10": "nut.link metadata oracles registry",
    "count": "3"
  },
  {
    "label": "1968",
    "cip10": "nut.link metadata oracles data points",
    "count": "16321"
  }
]
```

<h2 id="tocS_tx_metadata_label_json">tx_metadata_label_json</h2>
<!-- backwards compatibility -->
<a id="schematx_metadata_label_json"></a>
<a id="schema_tx_metadata_label_json"></a>
<a id="tocStx_metadata_label_json"></a>
<a id="tocstx_metadata_label_json"></a>

```json
[
  {
    "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.10409800535729975",
          "source": "ergoOracles"
        }
      ]
    }
  },
  {
    "tx_hash": "e865f2cc01ca7381cf98dcdc4de07a5e8674b8ea16e6a18e3ed60c186fde2b9c",
    "json_metadata": {
      "ADAUSD": [
        {
          "value": "0.15409850555139935",
          "source": "ergoOracles"
        }
      ]
    }
  },
  {
    "tx_hash": "4237501da3cfdd53ade91e8911e764bd0699d88fd43b12f44a1f459b89bc91be",
    "json_metadata": null
  }
]
```

<h2 id="tocS_tx_metadata_label_cbor">tx_metadata_label_cbor</h2>
<!-- backwards compatibility -->
<a id="schematx_metadata_label_cbor"></a>
<a id="schema_tx_metadata_label_cbor"></a>
<a id="tocStx_metadata_label_cbor"></a>
<a id="tocstx_metadata_label_cbor"></a>

```json
[
  {
    "tx_hash": "257d75c8ddb0434e9b63e29ebb6241add2b835a307aa33aedba2effe09ed4ec8",
    "cbor_metadata": null,
    "metadata": null
  },
  {
    "tx_hash": "e865f2cc01ca7381cf98dcdc4de07a5e8674b8ea16e6a18e3ed60c186fde2b9c",
    "cbor_metadata": null,
    "metadata": null
  },
  {
    "tx_hash": "4237501da3cfdd53ade91e8911e764bd0699d88fd43b12f44a1f459b89bc91be",
    "cbor_metadata": "\\xa100a16b436f6d62696e6174696f6e8601010101010c",
    "metadata": "a100a16b436f6d62696e6174696f6e8601010101010c"
  }
]
```

<h2 id="tocS_address_content">address_content</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_content"></a>
<a id="schema_address_content"></a>
<a id="tocSaddress_content"></a>
<a id="tocsaddress_content"></a>

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "type": "shelley",
  "script": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Bech32 encoded addresses|
|amount|[object]|true|none|none|
|stake_address|string \| null|true|none|Stake address that controls the key|
|type|string|true|none|Address era|
|script|boolean|true|none|True if this is a script address|

#### Enumerated Values

|Property|Value|
|---|---|
|type|byron|
|type|shelley|

<h2 id="tocS_address_content_extended">address_content_extended</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_content_extended"></a>
<a id="schema_address_content_extended"></a>
<a id="tocSaddress_content_extended"></a>
<a id="tocsaddress_content_extended"></a>

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "amount": [
    {
      "unit": "lovelace",
      "quantity": "42000000",
      "decimals": 6,
      "has_nft_onchain_metadata": false
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12",
      "decimals": null,
      "has_nft_onchain_metadata": true
    }
  ],
  "stake_address": "stake1ux3g2c9dx2nhhehyrezyxpkstartcqmu9hk63qgfkccw5rqttygt7",
  "type": "shelley",
  "script": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Bech32 encoded addresses|
|amount|[object]|true|none|none|
|stake_address|string \| null|true|none|Stake address that controls the key|
|type|string|true|none|Address era|
|script|boolean|true|none|True if this is a script address|

#### Enumerated Values

|Property|Value|
|---|---|
|type|byron|
|type|shelley|

<h2 id="tocS_address_content_total">address_content_total</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_content_total"></a>
<a id="schema_address_content_total"></a>
<a id="tocSaddress_content_total"></a>
<a id="tocsaddress_content_total"></a>

```json
{
  "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
  "received_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "sent_sum": [
    {
      "unit": "lovelace",
      "quantity": "42000000"
    },
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ],
  "tx_count": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Bech32 encoded address|
|received_sum|[object]|true|none|none|
|sent_sum|[object]|true|none|none|
|tx_count|integer|true|none|Count of all transactions on the address|

<h2 id="tocS_address_utxo_content">address_utxo_content</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_utxo_content"></a>
<a id="schema_address_utxo_content"></a>
<a id="tocSaddress_utxo_content"></a>
<a id="tocsaddress_utxo_content"></a>

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "729235000"
      }
    ],
    "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  },
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    "output_index": 1,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      },
      {
        "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
        "quantity": "12"
      }
    ],
    "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": null
  }
]
```

<h2 id="tocS_address_txs_content">address_txs_content</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_txs_content"></a>
<a id="schema_address_txs_content"></a>
<a id="tocSaddress_txs_content"></a>
<a id="tocsaddress_txs_content"></a>

```json
[
  "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
  "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0"
]
```

<h2 id="tocS_address_transactions_content">address_transactions_content</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_transactions_content"></a>
<a id="schema_address_transactions_content"></a>
<a id="tocSaddress_transactions_content"></a>
<a id="tocsaddress_transactions_content"></a>

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "tx_index": 6,
    "block_height": 69,
    "block_time": 1635505891
  },
  {
    "tx_hash": "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
    "tx_index": 9,
    "block_height": 4547,
    "block_time": 1635505987
  },
  {
    "tx_hash": "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b",
    "tx_index": 0,
    "block_height": 564654,
    "block_time": 1834505492
  }
]
```

<h2 id="tocS_pool_list">pool_list</h2>
<!-- backwards compatibility -->
<a id="schemapool_list"></a>
<a id="schema_pool_list"></a>
<a id="tocSpool_list"></a>
<a id="tocspool_list"></a>

```json
[
  "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "pool1hn7hlwrschqykupwwrtdfkvt2u4uaxvsgxyh6z63703p2knj288",
  "pool1ztjyjfsh432eqetadf82uwuxklh28xc85zcphpwq6mmezavzad2"
]
```

<h2 id="tocS_pool_list_extended">pool_list_extended</h2>
<!-- backwards compatibility -->
<a id="schemapool_list_extended"></a>
<a id="schema_pool_list_extended"></a>
<a id="tocSpool_list_extended"></a>
<a id="tocspool_list_extended"></a>

```json
[
  {
    "pool_id": "pool19u64770wqp6s95gkajc8udheske5e6ljmpq33awxk326zjaza0q",
    "hex": "2f355f79ee007502d116ecb07e36f985b34cebf2d84118f5c6b455a1",
    "active_stake": "1541200000",
    "live_stake": "1541400000",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "nullable": true,
          "example": "https://stakenuts.com/mainnet.json",
          "description": "URL to the stake pool metadata"
        },
        "hash": {
          "type": "string",
          "nullable": true,
          "example": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
          "description": "Hash of the metadata file"
        },
        "ticker": {
          "type": "string",
          "nullable": true,
          "example": "NUTS",
          "description": "Ticker of the stake pool"
        },
        "name": {
          "type": "string",
          "nullable": true,
          "example": "Stake Nuts",
          "description": "Name of the stake pool"
        },
        "description": {
          "type": "string",
          "nullable": true,
          "example": "The best pool ever",
          "description": "Description of the stake pool"
        },
        "homepage": {
          "type": "string",
          "nullable": true,
          "example": "https://stakentus.com/",
          "description": "Home page of the stake pool"
        }
      }
    }
  },
  {
    "pool_id": "pool1dvla4zq98hpvacv20snndupjrqhuc79zl6gjap565nku6et5zdx",
    "hex": "6b3fda88053dc2cee18a7c2736f032182fcc78a2fe912e869aa4edcd",
    "active_stake": "22200000",
    "live_stake": "48955550",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": null
  },
  {
    "pool_id": "pool1wvccajt4eugjtf3k0ja3exjqdj7t8egsujwhcw4tzj4rzsxzw5w",
    "hex": "73318ec975cf1125a6367cbb1c9a406cbcb3e510e49d7c3aab14aa31",
    "active_stake": "9989541215",
    "live_stake": "168445464878",
    "blocks_minted": {
      "type": "integer",
      "example": 69,
      "description": "Total minted blocks"
    },
    "live_saturation": {
      "type": "number",
      "example": 0.93
    },
    "declared_pledge": {
      "type": "string",
      "example": "5000000000",
      "description": "Stake pool certificate pledge"
    },
    "margin_cost": {
      "type": "number",
      "example": 0.05,
      "description": "Margin tax cost of the stake pool"
    },
    "fixed_cost": {
      "type": "string",
      "example": "340000000",
      "description": "Fixed tax cost of the stake pool"
    },
    "metadata": null
  }
]
```

<h2 id="tocS_pool_list_retire">pool_list_retire</h2>
<!-- backwards compatibility -->
<a id="schemapool_list_retire"></a>
<a id="schema_pool_list_retire"></a>
<a id="tocSpool_list_retire"></a>
<a id="tocspool_list_retire"></a>

```json
[
  {
    "pool_id": "pool19u64770wqp6s95gkajc8udheske5e6ljmpq33awxk326zjaza0q",
    "epoch": 225
  },
  {
    "pool_id": "pool1dvla4zq98hpvacv20snndupjrqhuc79zl6gjap565nku6et5zdx",
    "epoch": 215
  },
  {
    "pool_id": "pool1wvccajt4eugjtf3k0ja3exjqdj7t8egsujwhcw4tzj4rzsxzw5w",
    "epoch": 231
  }
]
```

<h2 id="tocS_pool">pool</h2>
<!-- backwards compatibility -->
<a id="schemapool"></a>
<a id="schema_pool"></a>
<a id="tocSpool"></a>
<a id="tocspool"></a>

```json
{
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "hex": "0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735",
  "vrf_key": "0b5245f9934ec2151116fb8ec00f35fd00e0aa3b075c4ed12cce440f999d8233",
  "blocks_minted": 69,
  "blocks_epoch": 4,
  "live_stake": "6900000000",
  "live_size": 0.42,
  "live_saturation": 0.93,
  "live_delegators": 127,
  "active_stake": "4200000000",
  "active_size": 0.43,
  "declared_pledge": "5000000000",
  "live_pledge": "5000000001",
  "margin_cost": 0.05,
  "fixed_cost": "340000000",
  "reward_account": "stake1uxkptsa4lkr55jleztw43t37vgdn88l6ghclfwuxld2eykgpgvg3f",
  "owners": [
    "stake1u98nnlkvkk23vtvf9273uq7cph5ww6u2yq2389psuqet90sv4xv9v"
  ],
  "registration": [
    "9f83e5484f543e05b52e99988272a31da373f3aab4c064c76db96643a355d9dc",
    "7ce3b8c433bf401a190d58c8c483d8e3564dfd29ae8633c8b1b3e6c814403e95",
    "3e6e1200ce92977c3fe5996bd4d7d7e192bcb7e231bc762f9f240c76766535b9"
  ],
  "retirement": [
    "252f622976d39e646815db75a77289cf16df4ad2b287dd8e3a889ce14c13d1a8"
  ],
  "calidus_key": {
    "id": "calidus15yt3nqapz799tvp2lt8adttt29k6xa2xnltahn655tu4sgcph42p7",
    "pub_key": "57758911253f6b31df2a87c10eb08a2c9b8450768cb8dd0d378d93f7c2e220f0",
    "nonce": 149292000,
    "tx_hash": "f45ed21c6bc1832cf7f11f4bd6ee47ca9684b4f6f8ff8a398aa2df065eac0ba8",
    "block_height": 11548408,
    "block_time": 1740858988,
    "epoch": 543
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool_id|string|true|none|Bech32 pool ID|
|hex|string|true|none|Hexadecimal pool ID.|
|vrf_key|string|true|none|VRF key hash|
|blocks_minted|integer|true|none|Total minted blocks|
|blocks_epoch|integer|true|none|Number of blocks minted in the current epoch|
|live_stake|string|true|none|none|
|live_size|number|true|none|none|
|live_saturation|number|true|none|none|
|live_delegators|number|true|none|none|
|active_stake|string|true|none|none|
|active_size|number|true|none|none|
|declared_pledge|string|true|none|Stake pool certificate pledge|
|live_pledge|string|true|none|Stake pool current pledge|
|margin_cost|number|true|none|Margin tax cost of the stake pool|
|fixed_cost|string|true|none|Fixed tax cost of the stake pool|
|reward_account|string|true|none|Bech32 reward account of the stake pool|
|owners|[string]|true|none|none|
|registration|[string]|true|none|none|
|retirement|[string]|true|none|none|
|calidus_key|object \| null|true|none|Last valid Calidus key for the pool|

<h2 id="tocS_pool_history">pool_history</h2>
<!-- backwards compatibility -->
<a id="schemapool_history"></a>
<a id="schema_pool_history"></a>
<a id="tocSpool_history"></a>
<a id="tocspool_history"></a>

```json
[
  {
    "epoch": 233,
    "blocks": 22,
    "active_stake": "20485965693569",
    "active_size": 1.2345,
    "delegators_count": 115,
    "rewards": "206936253674159",
    "fees": "1290968354"
  }
]
```

<h2 id="tocS_pool_metadata">pool_metadata</h2>
<!-- backwards compatibility -->
<a id="schemapool_metadata"></a>
<a id="schema_pool_metadata"></a>
<a id="tocSpool_metadata"></a>
<a id="tocspool_metadata"></a>

```json
{
  "pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "hex": "0f292fcaa02b8b2f9b3c8f9fd8e0bb21abedb692a6d5058df3ef2735",
  "url": "https://stakenuts.com/mainnet.json",
  "hash": "47c0c68cb57f4a5b4a87bad896fc274678e7aea98e200fa14a1cb40c0cab1d8c",
  "error": {
    "code": "HASH_MISMATCH",
    "message": "string"
  },
  "ticker": "NUTS",
  "name": "Stake Nuts",
  "description": "The best pool ever",
  "homepage": "https://stakentus.com/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool_id|string|true|none|Bech32 pool ID|
|hex|string|true|none|Hexadecimal pool ID|
|url|string \| null|true|none|URL to the stake pool metadata|
|hash|string \| null|true|none|Hash of the metadata file|
|error|object|false|none|Present when metadata could not be fetched or validated.|
|ticker|string \| null|true|none|Ticker of the stake pool|
|name|string \| null|true|none|Name of the stake pool|
|description|string \| null|true|none|Description of the stake pool|
|homepage|string \| null|true|none|Home page of the stake pool|

<h2 id="tocS_empty_object">empty_object</h2>
<!-- backwards compatibility -->
<a id="schemaempty_object"></a>
<a id="schema_empty_object"></a>
<a id="tocSempty_object"></a>
<a id="tocsempty_object"></a>

```json
{}
```

<h2 id="tocS_pool_relays">pool_relays</h2>
<!-- backwards compatibility -->
<a id="schemapool_relays"></a>
<a id="schema_pool_relays"></a>
<a id="tocSpool_relays"></a>
<a id="tocspool_relays"></a>

```json
[
  {
    "ipv4": "4.4.4.4",
    "ipv6": "https://stakenuts.com/mainnet.json",
    "dns": "relay1.stakenuts.com",
    "dns_srv": "_relays._tcp.relays.stakenuts.com",
    "port": 3001
  }
]
```

<h2 id="tocS_pool_delegators">pool_delegators</h2>
<!-- backwards compatibility -->
<a id="schemapool_delegators"></a>
<a id="schema_pool_delegators"></a>
<a id="tocSpool_delegators"></a>
<a id="tocspool_delegators"></a>

```json
[
  {
    "address": "stake1ux4vspfvwuus9uwyp5p3f0ky7a30jq5j80jxse0fr7pa56sgn8kha",
    "live_stake": "1137959159981411"
  },
  {
    "address": "stake1uylayej7esmarzd4mk4aru37zh9yz0luj3g9fsvgpfaxulq564r5u",
    "live_stake": "16958865648"
  },
  {
    "address": "stake1u8lr2pnrgf8f7vrs9lt79hc3sxm8s2w4rwvgpncks3axx6q93d4ck",
    "live_stake": "18605647"
  }
]
```

<h2 id="tocS_pool_blocks">pool_blocks</h2>
<!-- backwards compatibility -->
<a id="schemapool_blocks"></a>
<a id="schema_pool_blocks"></a>
<a id="tocSpool_blocks"></a>
<a id="tocspool_blocks"></a>

```json
[
  "d8982ca42cfe76b747cc681d35d671050a9e41e9cfe26573eb214e94fe6ff21d",
  "026436c539e2ce84c7f77ffe669f4e4bbbb3b9c53512e5857dcba8bb0b4e9a8c",
  "bcc8487f419b8c668a18ea2120822a05df6dfe1de1f0fac3feba88cf760f303c",
  "86bf7b4a274e0f8ec9816171667c1b4a0cfc661dc21563f271acea9482b62df7"
]
```

<h2 id="tocS_pool_updates">pool_updates</h2>
<!-- backwards compatibility -->
<a id="schemapool_updates"></a>
<a id="schema_pool_updates"></a>
<a id="tocSpool_updates"></a>
<a id="tocspool_updates"></a>

```json
[
  {
    "tx_hash": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
    "cert_index": 0,
    "action": "registered"
  },
  {
    "tx_hash": "9c190bc1ac88b2ab0c05a82d7de8b71b67a9316377e865748a89d4426c0d3005",
    "cert_index": 0,
    "action": "deregistered"
  },
  {
    "tx_hash": "e14a75b0eb2625de7055f1f580d70426311b78e0d36dd695a6bdc96c7b3d80e0",
    "cert_index": 1,
    "action": "registered"
  }
]
```

<h2 id="tocS_pool_votes">pool_votes</h2>
<!-- backwards compatibility -->
<a id="schemapool_votes"></a>
<a id="schema_pool_votes"></a>
<a id="tocSpool_votes"></a>
<a id="tocspool_votes"></a>

```json
[
  {
    "tx_hash": "b302de601defdf11a5261ed31a263804dac4a582a888c998ce24dec5",
    "cert_index": 2,
    "vote": "yes"
  }
]
```

<h2 id="tocS_assets">assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
[
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "1"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e75d",
    "quantity": "100000"
  },
  {
    "asset": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
    "quantity": "18605647"
  }
]
```

<h2 id="tocS_asset">asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
  "policy_id": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a7",
  "asset_name": "6e7574636f696e",
  "fingerprint": "asset1pkpwyknlvul7az0xx8czhl60pyel45rpje4z8w",
  "quantity": "12000",
  "initial_mint_tx_hash": "6804edf9712d2b619edb6ac86861fe93a730693183a262b165fcc1ba1bc99cad",
  "mint_or_burn_count": 1,
  "onchain_metadata": {},
  "onchain_metadata_standard": "CIP25v1",
  "onchain_metadata_extra": "string",
  "metadata": {
    "name": "nutcoin",
    "description": "The Nut Coin",
    "ticker": "nutc",
    "url": "https://www.stakenuts.com/",
    "logo": "iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QITCDUPjqwFHwAAB9xJREFUWMPVWXtsU9cZ/8499/r6dZ3E9rUdO7ZDEgglFWO8KaOsJW0pCLRKrN1AqqYVkqoqrYo0ja7bpElru1WairStFKY9WzaE1E1tx+jokKqwtqFNyhKahEJJyJNgJ37E9r1+3HvO/sFR4vhx7SBtfH/F3/l93/f7ne/4PBxEKYU72dj/ZfH772v1TU+HtqbTaX8wOO01GPQpRVH7JEm+vGHDuq6z7/8jUSoHKtaBKkEUFUXdajDy1hUrmrs6zn/wWS7m7pZVjMUirKGUTnzc+e9xLcTrPPVfZzDz06Sc2lyQGEIyAPzT7Xa+dvE/3e+XLaCxoflHsVj8MAAYs74aa/WHoenwvpkZKeFy2Z5NJlOPUkqXZccFwSSrKjlyffjLH+TL6XTUGTGL/6hklD3ldIrj2M5MRmkLBMcvaRLQ1Nj88sxM/HCBfMP+eu/OYGDqe6l0WmpoqJ/88upgrU7HrQNA/cFg6MlkKiLlBtVUO40cx54BgHvLIT/HJLvdeqh/4NKxogKWN7fsCoUi7xTLxLJ4vLq6ak//wKVOrdXtttrTDMPsqJA8AAAwDErdu3VL3alTf5ma9eWCpoKhn5dKpCiqJxicPucQPVu0FHaInn35yHMcKwPAa4SQ3QCwFgDWUko3qSr5vqqSgTypuEg4Mo/zvA74/Y0rZSnZU8akSHV17k2fXfy0txjI5224kEym1s/1EUI7LBbztweHrkzkizn49LP6U6feepFSeggAQK/n04SQZ8bGrxdeQjZrbRvGzLH5hcibRqOhPplMfS1fIY5jz4xPDBdcGggho2h3z9sOLRazdG3wqp9SMgUlzGZ17SSEPsRx7J8CwfGu3PF57WhqqjfN/VxVJUxKUrIdITAXKpDJKFscosdfaFy0u+/K9aXTmXe0kAcAmA5Nng5Hbj6Tj/wCAYFAcN7uEY3GXGazMSHLqVVFapgBoMPna9yqhRAAgCTJMa3YUjZPgNFkSlWYx5eUkx+0tKx83V3rF+cVYJjruWCe133DIXqMmrNrFSDabRcWkywYmG5XFOW6aHcfb9324CoAgMmbo9MIoXkneCajiAihV/c/8eSiBSw4BxyiZxQA6m7H7FBKT2CMn2MY5jFFUX6ZO+5w2j8aHZ7YH40FByrJD5DnHGAY5uTtIA8AgBDaR4F2Yxb3WizCgmtA4ObUPSazodduqz3Suu0hf0U1cjvgdNSJ1dWWveFwdDUAtAiC2Uopdcdi8c9Zlh3GmDGl05mtAKAvo47EcdwThJCjqqpWFxALlNITomg73tff21GRAJez7iVK4WGGYfoJIQduBsbm7UrLm1ueCoUiv65kpiilw1ZbzcFoZOYoIcRTAn6eYZgXJm+Oni+Vd3YJbdyweSch9HlK6SpVVfcyDDq7Yf3m2XPBIXraKyV/a4b9UkLawbLsZgB4rwR8CyGkw13r+5fX27BckwBAEJ47oKpk8+DgUIdod7fV1vqOAMDrlZLPmqKoB+rrvXIgOP6w0WjYy3Ls5RL4bUk52bVm9fqnCk7M3CXU2ND8+MxM7BcIIftiyRYyntcdHh0bmr0wfmXl6p2SJB2KRmP3l4j7zejYUFtRAQAAgslm1Bv4nyGEDpYiIwjmjw0G/RjP866JiclNqqqWfKLq9fyZkdHBBXcnl9O71GDgD8bj0ncRQqZ8sRgzL9yYHH2pqICsOUTPLgA4CXNeZFmzWIS/YhYfjUZmvqPjuceSckrz25pS2h2cmlhbaBwhzr6kfsnL8Xhif55YYFl23Y3Jkdl7EVMoUSA4/q6qqNsBIPd11e52u45FwtG3CSH7yiEPAGC1Vt9dXGBmanDoygFLlbAjtzZCCMyC6VeaOpA1l9N7l1kwtauKaozHE28YTQaQpeR7+TqjxXheR0fHhhgt2CX1S3clEtKC16HL5djYe+niBU0CcmYA2W21/Qih5ZqDcoxlMZ24MaJJAABA87IVJ8Lh6N65Pr1B/+LIyLUfAhRZQvnM6ah7ZDHkAQB0vK6/HHxNTc2ruT5Zkldn/y5LACFk+2LIAwAwCGl6yGSt88KHXbmrBCHkqEgAz+vWLFZALJb4qNwYhFDhCSknkSwnQ4sVgDFeWg7+gQe2r1tAmkGTFQlACHWVg89nhJA9ot3dphV/eeCLp/Pw6K5IQP0S39uLFXCLwDG7zf1cKZxD9LSlUunHc/12u/2t2Vzl/rzu8zb8PZlM7bwdQgDgPK/nX2nddt+53//ht3LW2dS0fF0iLj2vquojuQFmwXRucPBKa8UCmpe1iOFwpAsAfLdJBFBKwVIlXJ2JxqKCxbwyHkvoCkAlv9/71U+7Oq+UJWDZ0hViJBL1cRynbNq0sSeeiPl6ei4NqIqq6TSmlB7X6bjuTEY5pgWfzwxGPZhMpt39/b3vzvWXFGCzulZjjM/DrauDwcAr8bjcgzGjZUuVBMH8k2uDX7wCAFDr8n2LEPI7SqmhTP6SzVbz6MDlz0/nDpT8EmOM22HOvUeWU2wp8iyLgRL6hk7Hrc2SBwC4MTlykmXZRozxn00mbVcphNA5jJmV+chr6oDd5l6jN/A/TqfSuwEAGITGMIsvGo3GTwTB3Dc2NjGSxdZYq4VIOOoNBANnKE0XPXE3brjHOTQ08k2MmVZOxzVJCbkFIQSCYEphzPaFQuGzTpfjb319PZ8UFXin/5OvrHPg/9HueAH/BSUqOuNZm4fyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTE5VDA4OjUyOjI1KzAwOjAwCmFGlgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0xOVQwODo1MjoyMyswMDowMBjsyxAAAAAASUVORK5CYII=",
    "decimals": 6
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|true|none|Hex-encoded asset full name|
|policy_id|string|true|none|Policy ID of the asset|
|asset_name|string \| null|true|none|Hex-encoded asset name of the asset|
|fingerprint|string|true|none|CIP14 based user-facing fingerprint|
|quantity|string|true|none|Current asset quantity|
|initial_mint_tx_hash|string|true|none|ID of the initial minting transaction|
|mint_or_burn_count|integer|true|none|Count of mint and burn transactions|
|onchain_metadata|object \| null|true|none|On-chain metadata which SHOULD adhere to the valid standards,<br>based on which we perform the look up and display the asset<br>(best effort)<br>|
|onchain_metadata_standard|string \| null|false|none|If on-chain metadata passes validation, we display the standard<br>under which it is valid<br>|
|onchain_metadata_extra|string \| null|false|none|Arbitrary plutus data (CIP68).<br>|
|metadata|object \| null|true|none|Off-chain metadata fetched from GitHub based on network.<br>Mainnet: https://github.com/cardano-foundation/cardano-token-registry/<br>Testnet: https://github.com/input-output-hk/metadata-registry-testnet/<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|onchain_metadata_standard|CIP25v1|
|onchain_metadata_standard|CIP25v2|
|onchain_metadata_standard|CIP68v1|
|onchain_metadata_standard|CIP68v2|
|onchain_metadata_standard|CIP68v3|

<h2 id="tocS_asset_history">asset_history</h2>
<!-- backwards compatibility -->
<a id="schemaasset_history"></a>
<a id="schema_asset_history"></a>
<a id="tocSasset_history"></a>
<a id="tocsasset_history"></a>

```json
[
  {
    "tx_hash": "2dd15e0ef6e6a17841cb9541c27724072ce4d4b79b91e58432fbaa32d9572531",
    "amount": "10",
    "action": "minted"
  },
  {
    "tx_hash": "9c190bc1ac88b2ab0c05a82d7de8b71b67a9316377e865748a89d4426c0d3005",
    "amount": "5",
    "action": "burned"
  },
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dde628516157f0",
    "amount": "5",
    "action": "burned"
  }
]
```

<h2 id="tocS_asset_txs">asset_txs</h2>
<!-- backwards compatibility -->
<a id="schemaasset_txs"></a>
<a id="schema_asset_txs"></a>
<a id="tocSasset_txs"></a>
<a id="tocsasset_txs"></a>

```json
[
  "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
  "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
  "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b"
]
```

<h2 id="tocS_asset_transactions">asset_transactions</h2>
<!-- backwards compatibility -->
<a id="schemaasset_transactions"></a>
<a id="schema_asset_transactions"></a>
<a id="tocSasset_transactions"></a>
<a id="tocsasset_transactions"></a>

```json
[
  {
    "tx_hash": "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
    "tx_index": 6,
    "block_height": 69,
    "block_time": 1635505891
  },
  {
    "tx_hash": "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
    "tx_index": 9,
    "block_height": 4547,
    "block_time": 1635505987
  },
  {
    "tx_hash": "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b",
    "tx_index": 0,
    "block_height": 564654,
    "block_time": 1834505492
  }
]
```

<h2 id="tocS_asset_addresses">asset_addresses</h2>
<!-- backwards compatibility -->
<a id="schemaasset_addresses"></a>
<a id="schema_asset_addresses"></a>
<a id="tocSasset_addresses"></a>
<a id="tocsasset_addresses"></a>

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "quantity": "1"
  },
  {
    "address": "addr1qyhr4exrgavdcn3qhfcc9f939fzsch2re5ry9cwvcdyh4x4re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qdpvhza",
    "quantity": "100000"
  },
  {
    "address": "addr1q8zup8m9ue3p98kxlxl9q8rnyan8hw3ul282tsl9s326dfj088lvedv4zckcj24arcpasr0gua4c5gq4zw2rpcpjk2lq8cmd9l",
    "quantity": "18605647"
  }
]
```

<h2 id="tocS_asset_utxo_content">asset_utxo_content</h2>
<!-- backwards compatibility -->
<a id="schemaasset_utxo_content"></a>
<a id="schema_asset_utxo_content"></a>
<a id="tocSasset_utxo_content"></a>
<a id="tocsasset_utxo_content"></a>

```json
[
  {
    "address": "addr1qxfdlum57a0083mnth9y583jvdcv5a9nwj5lzv9v34t9tl7wmz90ahznykuhr4ykwvfrge8yc63c6lpf7345yd5h59nq885d05",
    "tx_hash": "47abf925faa462fe7ddbf906e65b4f8a27da52c3638ec4ee4fffb2298096aced",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "1444443"
      },
      {
        "unit": "750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501424f4f4b",
        "quantity": "1000"
      }
    ],
    "block": "8dadf03917c51b36c7580a49162224f71845a5492976e0449319da6e8eea243e",
    "block_height": 5804427,
    "block_time": 1622754311,
    "data_hash": null,
    "inline_datum": null,
    "inline_datum_json": null,
    "reference_script_hash": null
  }
]
```

<h2 id="tocS_asset_policy">asset_policy</h2>
<!-- backwards compatibility -->
<a id="schemaasset_policy"></a>
<a id="schema_asset_policy"></a>
<a id="tocSasset_policy"></a>
<a id="tocsasset_policy"></a>

```json
[
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
    "quantity": "1"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a766e",
    "quantity": "100000"
  },
  {
    "asset": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb574636f696e",
    "quantity": "18605647"
  }
]
```

<h2 id="tocS_scripts">scripts</h2>
<!-- backwards compatibility -->
<a id="schemascripts"></a>
<a id="schema_scripts"></a>
<a id="tocSscripts"></a>
<a id="tocsscripts"></a>

```json
[
  {
    "script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
  },
  {
    "script_hash": "e1457a0c47dfb7a2f6b8fbb059bdceab163c05d34f195b87b9f2b30e"
  },
  {
    "script_hash": "a6e63c0ff05c96943d1cc30bf53112ffff0f34b45986021ca058ec54"
  }
]
```

<h2 id="tocS_script">script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1",
  "type": "plutusV1",
  "serialised_size": 3119
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_hash|string|true|none|Script hash|
|type|string|true|none|Type of the script language|
|serialised_size|integer \| null|true|none|The size of the CBOR serialised script, if a Plutus script|

#### Enumerated Values

|Property|Value|
|---|---|
|type|timelock|
|type|plutusV1|
|type|plutusV2|
|type|plutusV3|

<h2 id="tocS_script_json">script_json</h2>
<!-- backwards compatibility -->
<a id="schemascript_json"></a>
<a id="schema_script_json"></a>
<a id="tocSscript_json"></a>
<a id="tocsscript_json"></a>

```json
{
  "json": {
    "type": "atLeast",
    "scripts": [
      {
        "type": "sig",
        "keyHash": "654891a4db2ea44b5263f4079a33efa0358ba90769e3d8f86a4a0f81"
      },
      {
        "type": "sig",
        "keyHash": "8685ad48f9bebb8fdb6447abbe140645e0bf743ff98da62e63e2147f"
      },
      {
        "type": "sig",
        "keyHash": "cb0f3b3f91693374ff7ce1d473cf6e721c7bab52b0737f04164e5a2d"
      }
    ],
    "required": 2
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|json|string \| object \| [object] \| integer \| number \| boolean \| null|true|none|JSON contents of the `timelock` script, null for `plutus` scripts|

<h2 id="tocS_script_cbor">script_cbor</h2>
<!-- backwards compatibility -->
<a id="schemascript_cbor"></a>
<a id="schema_script_cbor"></a>
<a id="tocSscript_cbor"></a>
<a id="tocsscript_cbor"></a>

```json
{
  "cbor": "4e4d01000033222220051200120011"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cbor|string \| null|true|none|CBOR contents of the `plutus` script, null for `timelocks`|

<h2 id="tocS_script_redeemers">script_redeemers</h2>
<!-- backwards compatibility -->
<a id="schemascript_redeemers"></a>
<a id="schema_script_redeemers"></a>
<a id="tocSscript_redeemers"></a>
<a id="tocsscript_redeemers"></a>

```json
[
  {
    "tx_hash": "1a0570af966fb355a7160e4f82d5a80b8681b7955f5d44bec0dce628516157f0",
    "tx_index": 0,
    "purpose": "spend",
    "redeemer_data_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "datum_hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
    "unit_mem": "1700",
    "unit_steps": "476468",
    "fee": "172033"
  }
]
```

<h2 id="tocS_script_utxos">script_utxos</h2>
<!-- backwards compatibility -->
<a id="schemascript_utxos"></a>
<a id="schema_script_utxos"></a>
<a id="tocSscript_utxos"></a>
<a id="tocsscript_utxos"></a>

```json
[
  {
    "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    "output_index": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "42000000"
      }
    ],
    "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    "data_hash": null,
    "inline_datum": null,
    "reference_script_hash": "13a3efd825703a352a8f71f4e2758d08c28c564e8dfcce9f77776ad1"
  }
]
```

<h2 id="tocS_script_datum">script_datum</h2>
<!-- backwards compatibility -->
<a id="schemascript_datum"></a>
<a id="schema_script_datum"></a>
<a id="tocSscript_datum"></a>
<a id="tocsscript_datum"></a>

```json
{
  "json_value": {
    "int": 42
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|json_value|object|true|none|JSON content of the datum|

<h2 id="tocS_script_datum_cbor">script_datum_cbor</h2>
<!-- backwards compatibility -->
<a id="schemascript_datum_cbor"></a>
<a id="schema_script_datum_cbor"></a>
<a id="tocSscript_datum_cbor"></a>
<a id="tocsscript_datum_cbor"></a>

```json
{
  "cbor": "19a6aa"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cbor|string|true|none|CBOR serialized datum|

<h2 id="tocS_utils_addresses_xpub">utils_addresses_xpub</h2>
<!-- backwards compatibility -->
<a id="schemautils_addresses_xpub"></a>
<a id="schema_utils_addresses_xpub"></a>
<a id="tocSutils_addresses_xpub"></a>
<a id="tocsutils_addresses_xpub"></a>

```json
[
  {
    "xpub": "d507c8f866691bd96e131334c355188b1a1d0b2fa0ab11545075aab332d77d9eb19657ad13ee581b56b0f8d744d66ca356b93d42fe176b3de007d53e9c4c4e7a",
    "role": 0,
    "index": 0,
    "address": "addr1q90sqnljxky88s0jsnps48jd872p7znzwym0jpzqnax6qs5nfrlkaatu28n0qzmqh7f2cpksxhpc9jefx3wrl0a2wu8q5amen7"
  }
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xpub|string|true|none|Script hash|
|role|integer|true|none|Account role|
|index|integer|true|none|Address index|
|address|string|true|none|Derived address|

<h2 id="tocS_metrics">metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
[
  {
    "time": 1612543884,
    "calls": 42
  },
  {
    "time": 1614523884,
    "calls": 6942
  }
]
```

<h2 id="tocS_metrics_endpoints">metrics_endpoints</h2>
<!-- backwards compatibility -->
<a id="schemametrics_endpoints"></a>
<a id="schema_metrics_endpoints"></a>
<a id="tocSmetrics_endpoints"></a>
<a id="tocsmetrics_endpoints"></a>

```json
[
  {
    "time": 1612543814,
    "calls": 182,
    "endpoint": "block"
  },
  {
    "time": 1612543814,
    "calls": 42,
    "endpoint": "epoch"
  },
  {
    "time": 1612543812,
    "calls": 775,
    "endpoint": "block"
  },
  {
    "time": 1612523884,
    "calls": 4,
    "endpoint": "epoch"
  },
  {
    "time": 1612553884,
    "calls": 89794,
    "endpoint": "block"
  }
]
```

<h2 id="tocS_network">network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "supply": {
    "max": "45000000000000000",
    "total": "32890715183299160",
    "circulating": "32412601976210393",
    "locked": "125006953355",
    "treasury": "98635632000000",
    "reserves": "46635632000000"
  },
  "stake": {
    "live": "23204950463991654",
    "active": "22210233523456321"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supply|object|true|none|none|
|stake|object|true|none|none|

<h2 id="tocS_network-eras">network-eras</h2>
<!-- backwards compatibility -->
<a id="schemanetwork-eras"></a>
<a id="schema_network-eras"></a>
<a id="tocSnetwork-eras"></a>
<a id="tocsnetwork-eras"></a>

```json
[
  {
    "start": {
      "time": 0,
      "slot": 0,
      "epoch": 0
    },
    "end": {
      "time": 89856000,
      "slot": 4492800,
      "epoch": 208
    },
    "parameters": {
      "epoch_length": 21600,
      "slot_length": 20,
      "safe_zone": 4320
    }
  },
  {
    "start": {
      "time": 89856000,
      "slot": 4492800,
      "epoch": 208
    },
    "end": {
      "time": 101952000,
      "slot": 16588800,
      "epoch": 236
    },
    "parameters": {
      "epoch_length": 432000,
      "slot_length": 1,
      "safe_zone": 129600
    }
  }
]
```

<h2 id="tocS_asset_onchain_metadata_cip25">asset_onchain_metadata_cip25</h2>
<!-- backwards compatibility -->
<a id="schemaasset_onchain_metadata_cip25"></a>
<a id="schema_asset_onchain_metadata_cip25"></a>
<a id="tocSasset_onchain_metadata_cip25"></a>
<a id="tocsasset_onchain_metadata_cip25"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the minting transaction under label 721,
which adheres to https://cips.cardano.org/cips/cip25/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string \| [string]|true|none|URI(s) of the associated asset|
|description|string \| [string]|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|files|[object]|false|none|none|

<h2 id="tocS_asset_onchain_metadata_cip68_ft_333">asset_onchain_metadata_cip68_ft_333</h2>
<!-- backwards compatibility -->
<a id="schemaasset_onchain_metadata_cip68_ft_333"></a>
<a id="schema_asset_onchain_metadata_cip68_ft_333"></a>
<a id="tocSasset_onchain_metadata_cip68_ft_333"></a>
<a id="tocsasset_onchain_metadata_cip68_ft_333"></a>

```json
{
  "name": "My FT token",
  "description": "My FT token description",
  "logo": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "ticker": "TOK",
  "decimals": 8
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 333 FT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|description|string|true|none|Additional description|
|logo|string|false|none|URI(s) of the associated asset|
|ticker|string|false|none|Ticker|
|decimals|number|false|none|Number of decimals|

<h2 id="tocS_asset_onchain_metadata_cip68_nft_222">asset_onchain_metadata_cip68_nft_222</h2>
<!-- backwards compatibility -->
<a id="schemaasset_onchain_metadata_cip68_nft_222"></a>
<a id="schema_asset_onchain_metadata_cip68_nft_222"></a>
<a id="tocSasset_onchain_metadata_cip68_nft_222"></a>
<a id="tocsasset_onchain_metadata_cip68_nft_222"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 222 NFT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string|true|none|URI(s) of the associated asset|
|description|string|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|files|[object]|false|none|none|

<h2 id="tocS_asset_onchain_metadata_cip68_rft_444">asset_onchain_metadata_cip68_rft_444</h2>
<!-- backwards compatibility -->
<a id="schemaasset_onchain_metadata_cip68_rft_444"></a>
<a id="schema_asset_onchain_metadata_cip68_rft_444"></a>
<a id="tocSasset_onchain_metadata_cip68_rft_444"></a>
<a id="tocsasset_onchain_metadata_cip68_rft_444"></a>

```json
{
  "name": "My NFT token",
  "image": "ipfs://ipfs/QmfKyJ4tuvHowwKQCbCHj4L5T3fSj8cjs7Aau8V7BWv226",
  "description": "My NFT token description",
  "mediaType": "image/jpeg",
  "decimals": 8,
  "files": [
    {
      "name": "myimage",
      "mediaType": "image/jpeg",
      "src": "My NFT token description"
    }
  ]
}
```

On-chain metadata stored in the datum of the reference NFT output
which adheres to 222 NFT Standard https://cips.cardano.org/cips/cip68/

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the asset|
|image|string|true|none|URI(s) of the associated asset|
|description|string|false|none|Additional description|
|mediaType|string|false|none|Mime sub-type of image|
|decimals|number|false|none|Number of decimals|
|files|[object]|false|none|none|
