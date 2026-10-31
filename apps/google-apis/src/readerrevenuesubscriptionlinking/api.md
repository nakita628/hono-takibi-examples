<h1 id="reader-revenue-subscription-linking-api">Reader Revenue Subscription Linking API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

readerrevenuesubscriptionlinking.googleapis.com API.

Base URLs:

* <a href="https://readerrevenuesubscriptionlinking.googleapis.com/">https://readerrevenuesubscriptionlinking.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/news/subscribe/subscription-linking/overview">External documentation</a>

<h1 id="reader-revenue-subscription-linking-api-publications">publications</h1>

## readerrevenuesubscriptionlinking.publications.readers.getEntitlements

<a id="opIdreaderrevenuesubscriptionlinking.publications.readers.getEntitlements"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersgetentitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id}/readers/{reader_id}/entitlements|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entitlements": [
    {
      "detail": "string",
      "expireTime": "string",
      "productId": "string",
      "subscriptionToken": "string"
    }
  ],
  "name": "string"
}
```

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersgetentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReaderEntitlements](#schemareaderentitlements)|

<aside class="success">
This operation does not require authentication
</aside>

## readerrevenuesubscriptionlinking.publications.readers.delete

<a id="opIdreaderrevenuesubscriptionlinking.publications.readers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the reader. Format: publications/{publication_id}/readers/{ppid}|
|force|query|boolean|false|If set to true, any entitlements under the reader will also be purged.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteReaderResponse](#schemadeletereaderresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## readerrevenuesubscriptionlinking.publications.readers.updateEntitlements

<a id="opIdreaderrevenuesubscriptionlinking.publications.readers.updateEntitlements"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entitlements": [
      {
        "detail": "string",
        "expireTime": "string",
        "productId": "string",
        "subscriptionToken": "string"
      }
    ]
  }'
```

`PATCH /v1/{name}`

Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

> Body parameter

```json
{
  "entitlements": [
    {
      "detail": "string",
      "expireTime": "string",
      "productId": "string",
      "subscriptionToken": "string"
    }
  ]
}
```

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersupdateentitlements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the singleton.|
|updateMask|query|string|false|Optional. The list of fields to update. Defaults to all fields.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ReaderEntitlements](#schemareaderentitlements)|false|none|
|» entitlements|body|[[Entitlement](#schemaentitlement)]|false|All of the entitlements for a publication reader.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entitlements": [
    {
      "detail": "string",
      "expireTime": "string",
      "productId": "string",
      "subscriptionToken": "string"
    }
  ],
  "name": "string"
}
```

<h3 id="readerrevenuesubscriptionlinkingpublicationsreadersupdateentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReaderEntitlements](#schemareaderentitlements)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DeleteReaderResponse">DeleteReaderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereaderresponse"></a>
<a id="schema_DeleteReaderResponse"></a>
<a id="tocSdeletereaderresponse"></a>
<a id="tocsdeletereaderresponse"></a>

```json
{}
```

Response to deleting a reader of a publication.

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "detail": "string",
  "expireTime": "string",
  "productId": "string",
  "subscriptionToken": "string"
}
```

A single entitlement for a publication reader

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit.|
|expireTime|string(google-datetime)|false|none|Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age)|
|productId|string|false|none|Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic"|
|subscriptionToken|string|false|none|A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google.|

<h2 id="tocS_Reader">Reader</h2>
<!-- backwards compatibility -->
<a id="schemareader"></a>
<a id="schema_Reader"></a>
<a id="tocSreader"></a>
<a id="tocsreader"></a>

```json
{
  "createTime": "string",
  "name": "string"
}
```

A reader of a publication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the publication reader was created and associated with a Google user.|
|name|string|false|read-only|Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id.|

<h2 id="tocS_ReaderEntitlements">ReaderEntitlements</h2>
<!-- backwards compatibility -->
<a id="schemareaderentitlements"></a>
<a id="schema_ReaderEntitlements"></a>
<a id="tocSreaderentitlements"></a>
<a id="tocsreaderentitlements"></a>

```json
{
  "entitlements": [
    {
      "detail": "string",
      "expireTime": "string",
      "productId": "string",
      "subscriptionToken": "string"
    }
  ],
  "name": "string"
}
```

A singleton containing all of a reader's entitlements for a publication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlements|[[Entitlement](#schemaentitlement)]|false|none|All of the entitlements for a publication reader.|
|name|string|false|read-only|Output only. The resource name of the singleton.|
