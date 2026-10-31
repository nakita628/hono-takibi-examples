<h1 id="link-example">Link Example v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="link-example-default">Default</h1>

## getUserByName

<a id="opIdgetUserByName"></a>

> Code samples

```bash
curl https://example.com/2.0/users/string \
  -H 'Accept: application/json'
```

`GET /2.0/users/{username}`

<h3 id="getuserbyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "username": "string",
  "uuid": "string"
}
```

<h3 id="getuserbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The User|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## getRepositoriesByOwner

<a id="opIdgetRepositoriesByOwner"></a>

> Code samples

```bash
curl https://example.com/2.0/repositories/string \
  -H 'Accept: application/json'
```

`GET /2.0/repositories/{username}`

<h3 id="getrepositoriesbyowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "slug": "string",
    "owner": {
      "username": "string",
      "uuid": "string"
    }
  }
]
```

<h3 id="getrepositoriesbyowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|repositories owned by the supplied user|Inline|

<h3 id="getrepositoriesbyowner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[repository](#schemarepository)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository

<a id="opIdgetRepository"></a>

> Code samples

```bash
curl https://example.com/2.0/repositories/string/string \
  -H 'Accept: application/json'
```

`GET /2.0/repositories/{username}/{slug}`

<h3 id="getrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "slug": "string",
  "owner": {
    "username": "string",
    "uuid": "string"
  }
}
```

<h3 id="getrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The repository|[repository](#schemarepository)|

<aside class="success">
This operation does not require authentication
</aside>

## getPullRequestsByRepository

<a id="opIdgetPullRequestsByRepository"></a>

> Code samples

```bash
curl https://example.com/2.0/repositories/string/string/pullrequests \
  -H 'Accept: application/json'
```

`GET /2.0/repositories/{username}/{slug}/pullrequests`

<h3 id="getpullrequestsbyrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|slug|path|string|true|none|
|state|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|open|
|state|merged|
|state|declined|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "repository": {
      "slug": "string",
      "owner": {
        "username": "string",
        "uuid": "string"
      }
    },
    "author": {
      "username": "string",
      "uuid": "string"
    }
  }
]
```

<h3 id="getpullrequestsbyrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|an array of pull request objects|Inline|

<h3 id="getpullrequestsbyrepository-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[pullrequest](#schemapullrequest)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPullRequestsById

<a id="opIdgetPullRequestsById"></a>

> Code samples

```bash
curl https://example.com/2.0/repositories/string/string/pullrequests/string \
  -H 'Accept: application/json'
```

`GET /2.0/repositories/{username}/{slug}/pullrequests/{pid}`

<h3 id="getpullrequestsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|slug|path|string|true|none|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "repository": {
    "slug": "string",
    "owner": {
      "username": "string",
      "uuid": "string"
    }
  },
  "author": {
    "username": "string",
    "uuid": "string"
  }
}
```

<h3 id="getpullrequestsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a pull request object|[pullrequest](#schemapullrequest)|

<aside class="success">
This operation does not require authentication
</aside>

## mergePullRequest

<a id="opIdmergePullRequest"></a>

> Code samples

```bash
curl https://example.com/2.0/repositories/string/string/pullrequests/string/merge \
  -X POST
```

`POST /2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge`

<h3 id="mergepullrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|slug|path|string|true|none|
|pid|path|string|true|none|

<h3 id="mergepullrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|the PR was successfully merged|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "username": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|uuid|string|false|none|none|

<h2 id="tocS_repository">repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "slug": "string",
  "owner": {
    "username": "string",
    "uuid": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|false|none|none|
|owner|[user](#schemauser)|false|none|none|

<h2 id="tocS_pullrequest">pullrequest</h2>
<!-- backwards compatibility -->
<a id="schemapullrequest"></a>
<a id="schema_pullrequest"></a>
<a id="tocSpullrequest"></a>
<a id="tocspullrequest"></a>

```json
{
  "id": 0,
  "title": "string",
  "repository": {
    "slug": "string",
    "owner": {
      "username": "string",
      "uuid": "string"
    }
  },
  "author": {
    "username": "string",
    "uuid": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|title|string|false|none|none|
|repository|[repository](#schemarepository)|false|none|none|
|author|[user](#schemauser)|false|none|none|
