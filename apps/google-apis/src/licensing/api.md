<h1 id="enterprise-license-manager-api">Enterprise License Manager API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Enterprise License Manager API lets you manage Google Workspace and related licenses for all users of a customer that you manage.

Base URLs:

* <a href="https://licensing.googleapis.com/">https://licensing.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/admin-sdk/licensing/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.licensing|View and manage G Suite licenses for your domain|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.licensing|View and manage G Suite licenses for your domain|

<h1 id="enterprise-license-manager-api-licenseassignments">licenseAssignments</h1>

## licensing.licenseAssignments.insert

<a id="opIdlicensing.licenseAssignments.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "userId": "string"
  }'
```

`POST /apps/licensing/v1/product/{productId}/sku/{skuId}/user`

Assign a license.

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
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
|body|body|[LicenseAssignmentInsert](#schemalicenseassignmentinsert)|false|none|
|» userId|body|string|false|Email id of the user|

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
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignment](#schemalicenseassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.get

<a id="opIdlicensing.licenseAssignments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/user/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}`

Get a specific user's license by product SKU.

<h3 id="licensinglicenseassignmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|userId|path|string|true|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|
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
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignment](#schemalicenseassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.update

<a id="opIdlicensing.licenseAssignments.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/user/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etags": "string",
    "kind": "licensing#licenseAssignment",
    "productId": "string",
    "productName": "string",
    "selfLink": "string",
    "skuId": "string",
    "skuName": "string",
    "userId": "string"
  }'
```

`PUT /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}`

Reassign a user's product SKU with a different SKU in the same product.

> Body parameter

```json
{
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|userId|path|string|true|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|
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
|body|body|[LicenseAssignment](#schemalicenseassignment)|false|none|
|» etags|body|string|false|ETag of the resource.|
|» kind|body|string|false|Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.|
|» productId|body|string|false|A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.|
|» productName|body|string|false|Display Name of the product.|
|» selfLink|body|string|false|Link to this page.|
|» skuId|body|string|false|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|» skuName|body|string|false|Display Name of the sku of the product.|
|» userId|body|string|false|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|

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
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignment](#schemalicenseassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.delete

<a id="opIdlicensing.licenseAssignments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/user/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}`

Revoke a license.

<h3 id="licensinglicenseassignmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|userId|path|string|true|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|
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

<h3 id="licensinglicenseassignmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.patch

<a id="opIdlicensing.licenseAssignments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/user/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etags": "string",
    "kind": "licensing#licenseAssignment",
    "productId": "string",
    "productName": "string",
    "selfLink": "string",
    "skuId": "string",
    "skuName": "string",
    "userId": "string"
  }'
```

`PATCH /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}`

Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

> Body parameter

```json
{
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|userId|path|string|true|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|
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
|body|body|[LicenseAssignment](#schemalicenseassignment)|false|none|
|» etags|body|string|false|ETag of the resource.|
|» kind|body|string|false|Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.|
|» productId|body|string|false|A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.|
|» productName|body|string|false|Display Name of the product.|
|» selfLink|body|string|false|Link to this page.|
|» skuId|body|string|false|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|» skuName|body|string|false|Display Name of the sku of the product.|
|» userId|body|string|false|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|

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
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

<h3 id="licensinglicenseassignmentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignment](#schemalicenseassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.listForProductAndSku

<a id="opIdlicensing.licenseAssignments.listForProductAndSku"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/apps/licensing/v1/product/string/sku/string/users?customerId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/licensing/v1/product/{productId}/sku/{skuId}/users`

List all users assigned licenses for a specific product SKU.

<h3 id="licensinglicenseassignmentslistforproductandsku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|skuId|path|string|true|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|customerId|query|string|true|The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.|
|maxResults|query|integer|false|The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.|
|pageToken|query|string|false|Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.|
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
  "etag": "string",
  "items": [
    {
      "etags": "string",
      "kind": "licensing#licenseAssignment",
      "productId": "string",
      "productName": "string",
      "selfLink": "string",
      "skuId": "string",
      "skuName": "string",
      "userId": "string"
    }
  ],
  "kind": "licensing#licenseAssignmentList",
  "nextPageToken": "string"
}
```

<h3 id="licensinglicenseassignmentslistforproductandsku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignmentList](#schemalicenseassignmentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

## licensing.licenseAssignments.listForProduct

<a id="opIdlicensing.licenseAssignments.listForProduct"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/apps/licensing/v1/product/string/users?customerId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/licensing/v1/product/{productId}/users`

List all users assigned licenses for a specific product SKU.

<h3 id="licensinglicenseassignmentslistforproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.|
|customerId|query|string|true|The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.|
|maxResults|query|integer|false|The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.|
|pageToken|query|string|false|Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.|
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
  "etag": "string",
  "items": [
    {
      "etags": "string",
      "kind": "licensing#licenseAssignment",
      "productId": "string",
      "productName": "string",
      "selfLink": "string",
      "skuId": "string",
      "skuName": "string",
      "userId": "string"
    }
  ],
  "kind": "licensing#licenseAssignmentList",
  "nextPageToken": "string"
}
```

<h3 id="licensinglicenseassignmentslistforproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LicenseAssignmentList](#schemalicenseassignmentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.licensing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.licensing )
</aside>

# Schemas

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_LicenseAssignment">LicenseAssignment</h2>
<!-- backwards compatibility -->
<a id="schemalicenseassignment"></a>
<a id="schema_LicenseAssignment"></a>
<a id="tocSlicenseassignment"></a>
<a id="tocslicenseassignment"></a>

```json
{
  "etags": "string",
  "kind": "licensing#licenseAssignment",
  "productId": "string",
  "productName": "string",
  "selfLink": "string",
  "skuId": "string",
  "skuName": "string",
  "userId": "string"
}
```

Representation of a license assignment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etags|string|false|none|ETag of the resource.|
|kind|string|false|none|Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.|
|productId|string|false|none|A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.|
|productName|string|false|none|Display Name of the product.|
|selfLink|string|false|none|Link to this page.|
|skuId|string|false|none|A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.|
|skuName|string|false|none|Display Name of the sku of the product.|
|userId|string|false|none|The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.|

<h2 id="tocS_LicenseAssignmentInsert">LicenseAssignmentInsert</h2>
<!-- backwards compatibility -->
<a id="schemalicenseassignmentinsert"></a>
<a id="schema_LicenseAssignmentInsert"></a>
<a id="tocSlicenseassignmentinsert"></a>
<a id="tocslicenseassignmentinsert"></a>

```json
{
  "userId": "string"
}
```

Representation of a license assignment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|Email id of the user|

<h2 id="tocS_LicenseAssignmentList">LicenseAssignmentList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseassignmentlist"></a>
<a id="schema_LicenseAssignmentList"></a>
<a id="tocSlicenseassignmentlist"></a>
<a id="tocslicenseassignmentlist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etags": "string",
      "kind": "licensing#licenseAssignment",
      "productId": "string",
      "productName": "string",
      "selfLink": "string",
      "skuId": "string",
      "skuName": "string",
      "userId": "string"
    }
  ],
  "kind": "licensing#licenseAssignmentList",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[LicenseAssignment](#schemalicenseassignment)]|false|none|The LicenseAssignments in this page of results.|
|kind|string|false|none|Identifies the resource as a collection of LicenseAssignments.|
|nextPageToken|string|false|none|The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page.|
