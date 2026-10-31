<h1 id="zeit-api">ZEIT API v2019-01-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.zeit.co">https://api.zeit.co</a>

Email: <a href="mailto:javi@zeit.co">Javi Velasco</a> 
Web: <a href="zeit.co">Javi Velasco</a> 

<a href="https://zeit.co/docs/api/">External documentation</a>

# Authentication

- HTTP Authentication, scheme: bearer

- oAuth2 authentication. This API uses OAuth 2 with the authorizationCode flow

    - Flow: authorizationCode
    - Authorization URL = [https://zeit.co/oauth/authorize](https://zeit.co/oauth/authorize)
    - Token URL = [https://api.zeit.co/v2/oauth/access_token](https://api.zeit.co/v2/oauth/access_token)

<h1 id="zeit-api-domains">domains</h1>

Manage custom domains to use with ZEIT

## Gets a list of domains registered for the authenticating user.

<a id="opIdgetDomains"></a>

> Code samples

```bash
curl https://example.com/v4/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/domains`

<h3 id="gets-a-list-of-domains-registered-for-the-authenticating-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|A team id in case you want to act on behalf of a team|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "boughtAt": 1549492066000,
      "cdnEnabled": false,
      "createdAt": 1549492062697,
      "expiresAt": 1581033599000,
      "id": "Qmf2RSrNz5sqt6nznp4JpAyXgT6pY65qwJJn8gESt2iKoi",
      "intendedNameservers": [
        "b.zeit-world.co.uk",
        "c.zeit-world.org",
        "e.zeit-world.com",
        "f.zeit-world.net"
      ],
      "name": "zeit.rocks",
      "nameservers": [
        "f.zeit-world.net",
        "e.zeit-world.com",
        "b.zeit-world.co.uk",
        "c.zeit-world.org"
      ],
      "nsVerifiedAt": 1549492417256,
      "orderedAt": 1549492057859,
      "serviceType": "zeit.world",
      "txtVerifiedAt": null,
      "verificationRecord": "QmReErtvkKUkogSYEAFJCQVPboxRcrCygaFG8xUKinurD4",
      "verified": true
    }
  ]
}
```

<h3 id="gets-a-list-of-domains-registered-for-the-authenticating-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-domains-registered-for-the-authenticating-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|true|none|An Array of domains for the given account|
|» boughtAt|integer \| null|true|none|A timestamp to tell when the domain was purchase if it was purchased with ZEIT|
|» cdnEnabled|boolean|true|none|Wether the Cloudfare CDN is enabled for the domain or not|
|» createdAt|integer \| null|true|none|A timestamp that shows when the domain was created|
|» expiresAt|integer \| null|true|none|The expiration date for the domain in case it's in ZEIT|
|» id|string|true|none|The unique identifier of the domain.|
|» intendedNameservers|[string]|true|none|The set of nameservers ZEIT requires the user to set to verify the domain with Nameservers|
|» name|string|true|none|The domain name including the TLD|
|» nameservers|[string]|true|none|The current nameservers we have detected for the domain|
|» nsVerifiedAt|integer \| null|true|none|The timestamp of the last time the domain was verified using Nameservers|
|» orderedAt|integer \| null|false|none|A timestamp indicating when the domain was ordered if it was purchased with ZEIT|
|» serviceType|string|true|none|Indicates the current DNS service the domain is using|
|» transferredAt|integer \| null|false|none|If the domain was transferred to ZEIT, it indicates the timestamp for when the transfer was started|
|» txtVerifiedAt|integer \| null|true|none|The timestamp of the last time the domain was verified using a TXT record|
|» verificationRecord|string|true|none|Indicates the verification record that should be used to verify the domain using a TXT record|
|» verified|boolean|true|none|Indicates if the domain ownership was already verified|

#### Enumerated Values

|Property|Value|
|---|---|
|» serviceType|zeit.world|
|» serviceType|external|
|» serviceType|na|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a domain for the authenticated user by name

<a id="opIdgetDomain"></a>

> Code samples

```bash
curl https://example.com/v4/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/domains/{name}`

<h3 id="get-a-domain-for-the-authenticated-user-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A team id in case you want to act on behalf of a team|
|teamId|query|string|false|A team id in case you want to act on behalf of a team|

> Example responses

> 200 Response

```json
{
  "domain": {
    "aliases": [],
    "boughtAt": null,
    "cdnEnabled": false,
    "certs": [],
    "createdAt": 1544658552174,
    "creator": {
      "customerId": "cus_COxSxT1ysva5Xa",
      "email": "demo@zeit.co",
      "id": "ZspSRT4ljIEEmMHgoDwKWDei",
      "username": "zeit_user"
    },
    "expiresAt": null,
    "id": "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    "intendedNameservers": [
      "a.zeit-world.co.uk",
      "c.zeit-world.org",
      "d.zeit-world.com",
      "f.zeit-world.net"
    ],
    "name": "my-zeit-domain.website",
    "nameservers": [
      "ns1.nameserver.net",
      "ns2.nameserver.net"
    ],
    "nsVerifiedAt": null,
    "serviceType": "external",
    "suffix": false,
    "txtVerifiedAt": null,
    "verificationRecord": "YMc9dEJKbAncYtTqSH8dp1j5NXycfEzyjkzBJ3m3UGwR43",
    "verified": false
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "not_found",
    "message": "The domain with name zeit.rocks could not be found",
    "name": "zeit.rocks"
  }
}
```

<h3 id="get-a-domain-for-the-authenticated-user-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="get-a-domain-for-the-authenticated-user-by-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|The domain information|
|» aliases|[object]|true|none|Collection of aliases where the domain is used.|
|» » alias|string|true|none|none|
|» » created|integer|true|none|none|
|» » id|string|true|none|none|
|» boughtAt|integer \| null|true|none|A timestamp to tell when the domain was purchase if it was purchased with ZEIT|
|» cdnEnabled|boolean|true|none|Wether the Cloudfare CDN is enabled for the domain or not|
|» certs|[object]|true|none|Collection of certs for the domain|
|» » cns|[string]|true|none|none|
|» » created|integer|true|none|none|
|» » id|string|true|none|none|
|» createdAt|integer \| null|true|none|A timestamp that shows when the domain was created|
|» creator|object|true|none|Information about who added the domain|
|» » customerId|string|false|none|none|
|» » email|string|true|none|none|
|» » id|string|true|none|none|
|» » isDomainReseller|boolean|false|none|none|
|» » username|string|true|none|none|
|» expiresAt|integer \| null|true|none|The expiration date for the domain in case it's in ZEIT|
|» id|string|true|none|The unique identifier of the domain.|
|» intendedNameservers|[string]|true|none|The set of nameservers ZEIT requires the user to set to verify the domain with Nameservers|
|» name|string|true|none|The domain name including the TLD|
|» nameservers|[string]|true|none|The current nameservers we have detected for the domain|
|» nsVerifiedAt|integer \| null|true|none|The timestamp of the last time the domain was verified using Nameservers|
|» orderedAt|integer \| null|false|none|A timestamp indicating when the domain was ordered if it was purchased with ZEIT|
|» serviceType|string|true|none|Indicates the current DNS service the domain is using|
|» suffix|boolean|true|none|Tells if the domain is being used as a custom suffix for the user or team|
|» transferredAt|integer \| null|false|none|If the domain was transferred to ZEIT, it indicates the timestamp for when the transfer was started|
|» txtVerifiedAt|integer \| null|true|none|The timestamp of the last time the domain was verified using a TXT record|
|» verificationRecord|string|true|none|Indicates the verification record that should be used to verify the domain using a TXT record|
|» verified|boolean|true|none|Indicates if the domain ownership was already verified|

#### Enumerated Values

|Property|Value|
|---|---|
|» serviceType|zeit.world|
|» serviceType|external|
|» serviceType|na|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|» code|string|true|none|none|
|» message|string|true|none|none|
|» name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|not_found|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="zeit-api-webhooks">webhooks</h1>

Manage webhooks where you can receive ZEIT events

## Get a list of existent webhooks

<a id="opIdgetWebhooks"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/integrations/webhooks`

<h3 id="get-a-list-of-existent-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|A team id in case you want to act on behalf of a team|

> Example responses

> 200 Response

```json
[
  {
    "configurationId": "string",
    "createdAt": 0,
    "events": [
      "string"
    ],
    "id": "string",
    "name": "string",
    "ownerId": "string",
    "url": "string"
  }
]
```

<h3 id="get-a-list-of-existent-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-list-of-existent-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[webhook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "url": "string"
  }'
```

`POST /v1/integrations/webhooks`

> Body parameter

```json
{
  "name": "string",
  "url": "string"
}
```

<h3 id="create-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|A team id in case you want to act on behalf of a team|
|body|body|object|true|none|
|» name|body|string|true|A name to assign to the webhook|
|» url|body|string|true|The URL ZEIT will post to when events happen|

> Example responses

> 201 Response

```json
{
  "configurationId": "string",
  "createdAt": 0,
  "events": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "url": "string"
}
```

<h3 id="create-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[webhook](#schemawebhook)|

<h3 id="create-a-new-webhook-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|alias|{$request.body#/url}|POST|none|
|deployment|{$request.body#/url}|POST|none|
|deploymentError|{$request.body#/url}|POST|none|
|deploymentReady|{$request.body#/url}|POST|none|
|domain|{$request.body#/url}|POST|none|
|domainDelete|{$request.body#/url}|POST|none|
|domainVerify|{$request.body#/url}|POST|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a webhook by id

<a id="opIddeleteWebhooks"></a>

> Code samples

```bash
curl https://example.com/v1/integrations/webhooks/:id \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/integrations/webhooks/:id`

<h3 id="remove-a-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|query|string|false|A team id in case you want to act on behalf of a team|

<h3 id="remove-a-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_deployment">deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "id": "string",
  "meta": {
    "BK_JOB_ID": "string",
    "BUILD_NUMBER": "string",
    "CIRCLE_BUILD_URL": "string",
    "CIRCLE_COMPARE_URL": "string",
    "COMMIT": "string",
    "GITHUB_SHA": "string",
    "TRAVIS_BUILD_WEB_URL": "string",
    "created-by": "string",
    "created_by": "string",
    "deploymentPrefix": "string",
    "gitSha": "string",
    "githubCommitAuthorLogin": "string",
    "githubCommitAuthorName": "string",
    "githubCommitMessage": "string",
    "githubCommitOrg": "string",
    "githubCommitRef": "string",
    "githubCommitRepo": "string",
    "githubCommitSha": "string",
    "githubDeployment": "string",
    "githubDeploymentAuthorizedBy": "string",
    "githubOrg": "string",
    "githubPrId": "string",
    "githubRepo": "string",
    "gitlabCommitAuthorAvatar": "string",
    "gitlabCommitAuthorLogin": "string",
    "gitlabCommitAuthorName": "string",
    "gitlabCommitMessage": "string",
    "gitlabCommitRef": "string",
    "gitlabCommitSha": "string",
    "gitlabDeployment": "string",
    "gitlabProjectId": "string",
    "gitlabProjectName": "string",
    "gitlabProjectNamespace": "string",
    "gitlabProjectPath": "string",
    "gl": "string",
    "targetDomain": "string",
    "useOldPipeline": "string"
  },
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier of the deployment|
|meta|object|true|none|none|
|name|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_event">event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "created": 0,
  "createdAt": 0,
  "id": "string",
  "ownerId": "string",
  "region": "string",
  "teamId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|integer|true|none|none|
|createdAt|integer|false|none|none|
|id|string|true|none|none|
|ownerId|string|true|none|none|
|region|string|false|none|none|
|teamId|string|false|none|none|
|userId|string|true|none|none|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "configurationId": "string",
  "createdAt": 0,
  "events": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "url": "string"
}
```

A webhook subscription with an URL where ZEIT will POST events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|string|true|none|An id that corresponds to the configuration that generated the token that was used to create the webhook|
|createdAt|integer|true|none|Timestamp that tells when was the webhook created|
|events|[string]|true|none|An array with the event identifiers that the webhook can receive|
|id|string|true|none|Id of the webhook|
|name|string|true|none|A name for the webhook that serves as a canonical description|
|ownerId|string|false|none|Id of the owner which can be a user or a team|
|url|string|true|none|The URL where the POST request will be sent|
