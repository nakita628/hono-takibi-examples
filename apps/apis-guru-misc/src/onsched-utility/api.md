<h1 id="onsched-api-utility">OnSched API Utility v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Endpoints for system utilities. e.g.Health

Base URLs:

* <a href="https://sandbox-api.onsched.com/">https://sandbox-api.onsched.com/</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://sandbox-identity.onsched.com/connect/token](https://sandbox-identity.onsched.com/connect/token)

|Scope|Scope Description|
|---|---|
|OnSchedApi|Consumer and Setup Interface|
|distance|Travel and Distance calculations|

<h1 id="onsched-api-utility-health">Health</h1>

## get/utility/v1/health/heartbeat

> Code samples

```bash
curl https://example.com/utility/v1/health/heartbeat \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /utility/v1/health/heartbeat`

> Example responses

> 200 Response

```json
"string"
```

<h3 id="getutilityv1healthheartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## get/utility/v1/health/threadinfo

> Code samples

```bash
curl https://example.com/utility/v1/health/threadinfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /utility/v1/health/threadinfo`

> Example responses

> 200 Response

```json
{
  "availableCompletionThreads": 0,
  "availableWorkerThreads": 0,
  "maxCompletionThreads": 0,
  "maxWorkerThreads": 0,
  "minCompletionThreads": 0,
  "minWorkerThreads": 0,
  "occupiedCompletionThreads": 0,
  "occupiedWorkerThreads": 0
}
```

<h3 id="getutilityv1healththreadinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ThreadPoolInfo](#schemathreadpoolinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

# Schemas

<h2 id="tocS_ThreadPoolInfo">ThreadPoolInfo</h2>
<!-- backwards compatibility -->
<a id="schemathreadpoolinfo"></a>
<a id="schema_ThreadPoolInfo"></a>
<a id="tocSthreadpoolinfo"></a>
<a id="tocsthreadpoolinfo"></a>

```json
{
  "availableCompletionThreads": 0,
  "availableWorkerThreads": 0,
  "maxCompletionThreads": 0,
  "maxWorkerThreads": 0,
  "minCompletionThreads": 0,
  "minWorkerThreads": 0,
  "occupiedCompletionThreads": 0,
  "occupiedWorkerThreads": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableCompletionThreads|integer(int32)|false|none|none|
|availableWorkerThreads|integer(int32)|false|none|none|
|maxCompletionThreads|integer(int32)|false|none|none|
|maxWorkerThreads|integer(int32)|false|none|none|
|minCompletionThreads|integer(int32)|false|none|none|
|minWorkerThreads|integer(int32)|false|none|none|
|occupiedCompletionThreads|integer(int32)|false|none|none|
|occupiedWorkerThreads|integer(int32)|false|none|none|
