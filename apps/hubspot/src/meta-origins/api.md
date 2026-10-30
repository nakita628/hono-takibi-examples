<h1 id="meta-origins">Meta Origins v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|origins.ip_ranges.webhook.read||
|origins.ip_ranges.webhook.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="meta-origins-advanced">Advanced</h1>

## Test webhook subscription

<a id="opIdpost-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test`

Trigger a test for a specific webhook subscription identified by the subscription ID. This endpoint is useful for verifying the configuration and functionality of webhook subscriptions in your application.

<h3 id="test-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|subscription-id|path|integer(int64)|true|The unique identifier of the webhook subscription to test.|

> Example responses

> default Response

```json
null
```

<h3 id="test-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: origins.ip_ranges.webhook.write )
</aside>

<h1 id="meta-origins-basic">Basic</h1>

## Retrieve IP Ranges

<a id="opIdget-/meta/network-origins/2026-09/ip-ranges_/meta/network-origins/2026-09-beta/ip-ranges"></a>

> Code samples

```bash
curl https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges \
  -H 'Accept: application/json'
```

`GET /meta/network-origins/2026-09/ip-ranges`

Retrieve the list of IP ranges associated with different services and directions. This endpoint can be used to obtain IP range information for specific services such as EMAIL, API, DNS, WEB_SCRAPING, and TEST_SERVICE. The results can be filtered by the direction of network traffic, either INGRESS or EGRESS.

<h3 id="retrieve-ip-ranges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|query|[string]|false|An array of directions to filter the IP ranges. Valid values are INGRESS and EGRESS.|
|service|query|[string]|false|An array of services to filter the IP ranges. Valid values are EMAIL, API, DNS, WEB_SCRAPING, and TEST_SERVICE.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|INGRESS|
|direction|EGRESS|
|service|EMAIL|
|service|API|
|service|DNS|
|service|WEB_SCRAPING|
|service|TEST_SERVICE|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-ip-ranges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseIpRangeNoPaging](#schemacollectionresponseiprangenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve IP Ranges

<a id="opIdget-/meta/network-origins/2026-09/ip-ranges/simple_/meta/network-origins/2026-09-beta/ip-ranges/simple"></a>

> Code samples

```bash
curl https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges/simple
```

`GET /meta/network-origins/2026-09/ip-ranges/simple`

Retrieve a simplified list of IP ranges associated with specific network origins in the HubSpot system. This endpoint allows filtering by direction and service type, making it useful for understanding network configurations and managing access controls.

<h3 id="retrieve-ip-ranges-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|query|[string]|false|An array specifying the direction of the IP traffic. Valid values are 'INGRESS' and 'EGRESS'.|
|service|query|[string]|false|An array specifying the service type for which the IP ranges are applicable. Valid values include 'EMAIL', 'API', 'DNS', 'WEB_SCRAPING', and 'TEST_SERVICE'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|INGRESS|
|direction|EGRESS|
|service|EMAIL|
|service|API|
|service|DNS|
|service|WEB_SCRAPING|
|service|TEST_SERVICE|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-ip-ranges-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve subscriptions

<a id="opIdget-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}`

Retrieve the list of webhook subscriptions for a specific app identified by the appId. This endpoint returns the webhook subscription details associated with the provided appId, allowing you to manage and monitor webhook integrations effectively.

<h3 id="retrieve-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWebhookSubscriptionNoPaging](#schemacollectionresponsewebhooksubscriptionnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: origins.ip_ranges.webhook.read ), oauth2 ( Scopes: origins.ip_ranges.webhook.write )
</aside>

## Create webhook subscription

<a id="opIdpost-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}`

Create a new webhook subscription for the specified app in your HubSpot account. This endpoint requires a valid webhook URL in the request body. Upon successful creation, the response includes the details of the new subscription along with a URL to access it.

> Body parameter

```json
null
```

<h3 id="create-webhook-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|[WebhookSubscriptionRequest](#schemawebhooksubscriptionrequest)|true|none|
|» webhookUrl|body|string|true|The URL to which webhook events will be sent. This must be a valid URL in string format.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-webhook-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[WebhookSubscription](#schemawebhooksubscription)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: origins.ip_ranges.webhook.write )
</aside>

## Delete subscription

<a id="opIddelete-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}`

Remove a specific webhook subscription for a given app. This operation is useful when you want to stop receiving webhook events for a particular subscription. The endpoint requires authentication and the subscription ID to identify which subscription to delete.

<h3 id="delete-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|subscription-id|path|integer(int64)|true|The unique identifier of the webhook subscription to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: origins.ip_ranges.webhook.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponseIpRangeNoPaging">CollectionResponseIpRangeNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseiprangenopaging"></a>
<a id="schema_CollectionResponseIpRangeNoPaging"></a>
<a id="tocScollectionresponseiprangenopaging"></a>
<a id="tocscollectionresponseiprangenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[IpRange](#schemaiprange)]|true|none|An array of IpRange objects, each representing a specific IP range with associated metadata such as CIDR, direction, service, and description.|

<h2 id="tocS_CollectionResponseWebhookSubscriptionNoPaging">CollectionResponseWebhookSubscriptionNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewebhooksubscriptionnopaging"></a>
<a id="schema_CollectionResponseWebhookSubscriptionNoPaging"></a>
<a id="tocScollectionresponsewebhooksubscriptionnopaging"></a>
<a id="tocscollectionresponsewebhooksubscriptionnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[WebhookSubscription](#schemawebhooksubscription)]|true|none|An array of webhook subscriptions. Each item in the array is a WebhookSubscription object.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_IpRange">IpRange</h2>
<!-- backwards compatibility -->
<a id="schemaiprange"></a>
<a id="schema_IpRange"></a>
<a id="tocSiprange"></a>
<a id="tocsiprange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cidr|string|true|none|The CIDR notation representing the IP range.|
|description|string|true|none|A description of the IP range.|
|direction|string|true|none|The direction of the IP traffic, which can be INGRESS or EGRESS.|
|service|string|true|none|The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|EGRESS|
|direction|INGRESS|
|service|API|
|service|DNS|
|service|EMAIL|
|service|TEST_SERVICE|
|service|WEB_SCRAPING|

<h2 id="tocS_WebhookSubscription">WebhookSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscription"></a>
<a id="schema_WebhookSubscription"></a>
<a id="tocSwebhooksubscription"></a>
<a id="tocswebhooksubscription"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The unique identifier of the application that owns the webhook subscription. It is an integer.|
|createdAt|integer(int64)|true|none|The timestamp when the webhook subscription was created, represented as an integer in int64 format.|
|createdByUserId|integer(int32)|false|none|The unique identifier of the user who created the webhook subscription. It is an integer.|
|id|integer(int64)|true|none|The unique identifier of the webhook subscription. It is an integer formatted as int64.|
|portalId|integer(int32)|true|none|The unique identifier of the HubSpot portal associated with the webhook subscription. It is an integer.|
|updatedAt|integer(int64)|true|none|The timestamp when the webhook subscription was last updated, represented as an integer in int64 format.|
|webhookUrl|string|true|none|The URL to which the webhook events will be sent. It is a string.|

<h2 id="tocS_WebhookSubscriptionRequest">WebhookSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscriptionrequest"></a>
<a id="schema_WebhookSubscriptionRequest"></a>
<a id="tocSwebhooksubscriptionrequest"></a>
<a id="tocswebhooksubscriptionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookUrl|string|true|none|The URL to which webhook events will be sent. This must be a valid URL in string format.|
