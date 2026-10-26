<h1 id="payment-experience-web-profiles">Payment Experience Web Profiles v1.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Payment Experience API to create seamless payment experience profiles. For information about how to create a PayPal payment with a web experience profile, see <a href="/docs/integration/direct/payment-experience/">Web experience profiles</a>.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/payment-experience/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/payments/payment|New special privileged scope available for payment and manage payment experience profiles. Available to internal clients only.|
|https://uri.paypal.com/services/payments/realtimepayment|Permission to do any real-time payment and manage-payment experience profiles with support for sale, authorize, and order intents.|

<h1 id="payment-experience-web-profiles-web-profiles">web-profiles</h1>

Use the `/payment-experience/web-profiles` resource to create, show details for, list, update, partially update, and delete web experience profiles.

## List web experience profiles

<a id="opIdweb-profile.get-list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payment-experience/web-profiles`

Lists the latest 20 web experience profiles for a merchant or subject. To show details for these or additional profiles, you can show web experience profile details by ID.

> Example responses

> 200 Response

```json
[
  {
    "id": "stringstringstringstri",
    "name": "string",
    "temporary": true,
    "flow_config": {
      "landing_page_type": "login",
      "bank_txn_pending_url": "http://example.com",
      "user_action": "COMMIT",
      "return_uri_http_method": "GET"
    },
    "input_fields": {
      "no_shipping": 0,
      "address_override": 0
    },
    "presentation": {
      "brand_name": "string",
      "logo_image": "string",
      "locale_code": "strin"
    }
  }
]
```

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="list-web-experience-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists the latest 20 profiles that the merchant owns, with details. To show details for these or additional profiles, you can show web experience profile details by ID.|[web_profile_list](#schemaweb_profile_list)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

## Create web experience profile

<a id="opIdweb-profile.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'PayPal-Request-Id: string' \
  -d '{
    "name": "string",
    "temporary": true,
    "flow_config": {
      "landing_page_type": "login",
      "bank_txn_pending_url": "http://example.com",
      "user_action": "COMMIT",
      "return_uri_http_method": "GET"
    },
    "input_fields": {
      "no_shipping": 0,
      "address_override": 0
    },
    "presentation": {
      "brand_name": "string",
      "logo_image": "string",
      "locale_code": "strin"
    }
  }'
```

`POST /v1/payment-experience/web-profiles`

Creates a web experience profile. In the JSON request body, specify the profile name and details.

> Body parameter

```json
{
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

<h3 id="create-web-experience-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayPal-Request-Id|header|string|true|The server stores keys for three hours.|
|body|body|[web_profile](#schemaweb_profile)|false|none|
|» name|body|string|true|The web experience profile name. Must be unique for a set of profiles for a merchant.|
|» temporary|body|boolean|false|Indicates whether the profile persists for three hours or permanently. To persist the profile permanently, set to `false`. To persist the profile for three hours, set to `true`.|
|» flow_config|body|[flow_config](#schemaflow_config)|false|The flow configuration parameters.|
|» input_fields|body|[input_fields](#schemainput_fields)|false|The input field customization parameters.|
|» presentation|body|[presentation](#schemapresentation)|false|The style and presentation parameters.|

> Example responses

> 200 Response

```json
{
  "id": "stringstringstringstri",
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

> 201 Response

```json
{
  "id": "stringstringstringstri",
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="create-web-experience-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request, with or without the optional <code>PayPal-Request-Id</code> request header, returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the profile details and the ID of the profile. Any subsequent calls with the same <code>PayPal-Request-Id</code> request header value within a three-hour window returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the profile details and the ID of the profile.|[web_profile](#schemaweb_profile)|
|201|Created|A successful request, with or without the optional <code>PayPal-Request-Id</code> request header, returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the profile details and the ID of the profile. Any subsequent calls with the same <code>PayPal-Request-Id</code> request header value within a three-hour window returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the profile details and the ID of the profile.|[web_profile](#schemaweb_profile)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

## Show web experience profile details by ID

<a id="opIdweb-profile.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payment-experience/web-profiles/{id}`

Shows details for a web experience profile, by ID.

<h3 id="show-web-experience-profile-details-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the profile to delete.|

> Example responses

> 200 Response

```json
{
  "id": "stringstringstringstri",
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="show-web-experience-profile-details-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the profile details.|[web_profile](#schemaweb_profile)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

## Update web experience profile

<a id="opIdweb-profile.update"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "temporary": true,
    "flow_config": {
      "landing_page_type": "login",
      "bank_txn_pending_url": "http://example.com",
      "user_action": "COMMIT",
      "return_uri_http_method": "GET"
    },
    "input_fields": {
      "no_shipping": 0,
      "address_override": 0
    },
    "presentation": {
      "brand_name": "string",
      "logo_image": "string",
      "locale_code": "strin"
    }
  }'
```

`PUT /v1/payment-experience/web-profiles/{id}`

Updates a web experience profile, by ID. In the JSON request body, specify the profile details. If your request omits any profile parameters, any previously set values for those parameters are removed.

> Body parameter

```json
{
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

<h3 id="update-web-experience-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the profile to delete.|
|body|body|[web_profile](#schemaweb_profile)|false|none|
|» name|body|string|true|The web experience profile name. Must be unique for a set of profiles for a merchant.|
|» temporary|body|boolean|false|Indicates whether the profile persists for three hours or permanently. To persist the profile permanently, set to `false`. To persist the profile for three hours, set to `true`.|
|» flow_config|body|[flow_config](#schemaflow_config)|false|The flow configuration parameters.|
|» input_fields|body|[input_fields](#schemainput_fields)|false|The input field customization parameters.|
|» presentation|body|[presentation](#schemapresentation)|false|The style and presentation parameters.|

> Example responses

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="update-web-experience-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

## Delete web experience profile

<a id="opIdweb-profile.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/payment-experience/web-profiles/{id}`

Deletes a web experience profile, by ID.

<h3 id="delete-web-experience-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the profile to delete.|

> Example responses

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="delete-web-experience-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

## Partially update web experience profile

<a id="opIdweb-profile.partial-update"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payment-experience/web-profiles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "op": "add",
      "path": "/presentation/brand_name",
      "value": "new_brand_name"
    },
    {
      "op": "remove",
      "path": "/flow_config/landing_page_type"
    }
  ]'
```

`PATCH /v1/payment-experience/web-profiles/{id}`

Partially-updates a web experience profile, by ID. In the JSON request body, specify a patch object, the path of the profile location to update, and a new value.

> Body parameter

```json
[
  {
    "op": "add",
    "path": "/presentation/brand_name",
    "value": "new_brand_name"
  },
  {
    "op": "remove",
    "path": "/flow_config/landing_page_type"
  }
]
```

<h3 id="partially-update-web-experience-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the profile to delete.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 500 Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

<h3 id="partially-update-web-experience-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/payments/payment ), Oauth2 ( Scopes: https://uri.paypal.com/services/payments/realtimepayment )
</aside>

# Schemas

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "name": "string",
  "debug_id": "string",
  "message": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "issue": "string"
    }
  ]
}
```

The error information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|read-only|The human-readable, unique name of the error.|
|debug_id|string|false|read-only|The PayPal internal ID. Used for correlation purposes.|
|message|string|true|read-only|The message that describes the error.|
|information_link|string|true|read-only|The URI to detailed information related to this error for the developer.|
|details|[error_details_list](#schemaerror_details_list)|false|read-only|An array of additional details for the error.|

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_default">error_default</h2>
<!-- backwards compatibility -->
<a id="schemaerror_default"></a>
<a id="schema_error_default"></a>
<a id="tocSerror_default"></a>
<a id="tocserror_default"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The default error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_400](#schemaerror_400)|false|none|Request is not well-formed, syntactically incorrect, or violates schema.|
|*oneOf*|[error_401](#schemaerror_401)|false|none|Authentication failed due to missing Authorization header, or invalid authentication credentials.|
|*oneOf*|[error_403](#schemaerror_403)|false|none|The client is not authorized to access this resource, although it may have valid credentials. |
|*oneOf*|[error_404](#schemaerror_404)|false|none|The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.|
|*oneOf*|[error_409](#schemaerror_409)|false|none|The server has detected a conflict while processing this request.|
|*oneOf*|[error_415](#schemaerror_415)|false|none|The server does not support the request payload's media type.|
|*oneOf*|[error_422](#schemaerror_422)|false|none|The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.|
|*oneOf*|[error_500](#schemaerror_500)|false|none|This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.|
|*oneOf*|[error_503](#schemaerror_503)|false|none|The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_details-2">error_details-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details-2"></a>
<a id="schema_error_details-2"></a>
<a id="tocSerror_details-2"></a>
<a id="tocserror_details-2"></a>

```json
{
  "field": "string",
  "issue": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|The name of the field that caused the error.|
|issue|string|true|none|The reason for the error.|

<h2 id="tocS_error_details_list">error_details_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details_list"></a>
<a id="schema_error_details_list"></a>
<a id="tocSerror_details_list"></a>
<a id="tocserror_details_list"></a>

```json
[
  {
    "field": "string",
    "issue": "string"
  }
]
```

An array of additional details for the error.

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_flow_config">flow_config</h2>
<!-- backwards compatibility -->
<a id="schemaflow_config"></a>
<a id="schema_flow_config"></a>
<a id="tocSflow_config"></a>
<a id="tocsflow_config"></a>

```json
{
  "landing_page_type": "login",
  "bank_txn_pending_url": "http://example.com",
  "user_action": "COMMIT",
  "return_uri_http_method": "GET"
}
```

The flow configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|landing_page_type|string|false|none|The type of landing page to display on the PayPal site for user checkout. To use the non-PayPal account landing page, set to `Billing`. To use the PayPal account login landing page, set to `Login`.|
|bank_txn_pending_url|string(uri)|false|none|The merchant site URL to display after a bank transfer payment. In Germany, valid only for the Giropay payment method or bank transfer payment method.|
|user_action|string|false|none|Presents either the **Continue** or **Pay Now** checkout flow to the customer.<br/><br/>Default is **Continue**, or `user_action=continue`. When you do not know the final payment amount, accept this default flow, which redirects the customer to the PayPal payment page with the **Continue** button. When the customer clicks **Continue**, the customer can change the payment amount.<br/><br/> When you know the final payment amount, set `user_action=commit` to choose the **Pay Now** flow, which redirects the customer to the PayPal payment page with the **Pay Now** button. When the customer clicks **Pay Now**, the payment is processed immediately.|
|return_uri_http_method|string|false|none|The HTTP method to use to redirect the customer to a return URL. Value is `GET` or `POST`.|

#### Enumerated Values

|Property|Value|
|---|---|
|landing_page_type|login|
|landing_page_type|billing|
|user_action|COMMIT|
|return_uri_http_method|GET|
|return_uri_http_method|POST|

<h2 id="tocS_input_fields">input_fields</h2>
<!-- backwards compatibility -->
<a id="schemainput_fields"></a>
<a id="schema_input_fields"></a>
<a id="tocSinput_fields"></a>
<a id="tocsinput_fields"></a>

```json
{
  "no_shipping": 0,
  "address_override": 0
}
```

The input field customization parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|no_shipping|integer|false|none|Indicates whether PayPal displays shipping address fields on the experience pages. Value is:<ul><li><code>0</code>. Displays the shipping address on the PayPal pages.</li><li><code>1</code>. Redacts shipping address fields from the PayPal pages. For digital goods, this field is required and must be <code>1</code>.</li><li><code>2</code>. Gets the shipping address from the customer's account profile.</li></ul>|
|address_override|integer|false|none|Indicates whether to display the shipping address that is passed to this call rather than the one on file for this buyer on the PayPal experience pages. Value is:<ul><li><code>0</code>. Displays the shipping address on file.</li><li><code>1</code>. Displays the shipping address specified in this call. the customer cannot edit this shipping address.</li></ul>|

<h2 id="tocS_patch">patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "op": "add",
  "path": "string",
  "value": 0,
  "from": "string"
}
```

The JSON patch object to apply partial updates to resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|true|none|The operation.|
|path|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.|
|value|number \| integer \| string \| boolean \| null \| array \| object|false|none|The value to apply. The <code>remove</code> operation does not require a value.|
|from|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_patch_request">patch_request</h2>
<!-- backwards compatibility -->
<a id="schemapatch_request"></a>
<a id="schema_patch_request"></a>
<a id="tocSpatch_request"></a>
<a id="tocspatch_request"></a>

```json
[
  {
    "op": "add",
    "path": "string",
    "value": 0,
    "from": "string"
  }
]
```

An array of JSON patch objects to apply partial updates to resources.

<h2 id="tocS_presentation">presentation</h2>
<!-- backwards compatibility -->
<a id="schemapresentation"></a>
<a id="schema_presentation"></a>
<a id="tocSpresentation"></a>
<a id="tocspresentation"></a>

```json
{
  "brand_name": "string",
  "logo_image": "string",
  "locale_code": "strin"
}
```

The style and presentation parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand_name|string|false|none|A label that overrides the business name in the PayPal account on the PayPal pages. Character length and limitations: 127 single-byte alphanumeric characters.|
|logo_image|string|false|none|A URL to the logo image. A valid media type is `.gif`, `.jpg`, or `.png`. The image's maximum width is 190 pixels and maximum height is 60 pixels. PayPal crops images that are larger. PayPal places your logo image at the top of the cart review area. PayPal recommends that you store the image on a secure (HTTPS) server. Otherwise, web browsers display a message that checkout pages contain non-secure items. Character length and limitations: 127 single-byte alphanumeric characters.|
|locale_code|string|false|none|The locale of pages that the PayPal payment experience displays. A valid value is `AU`, `AT`, `BE`, `BR`, `CA`, `CH`, `CN`, `DE`, `ES`, `GB`, `FR`, `IT`, `NL`, `PL`, `PT`, `RU`, or `US`. A 5-character code is also valid for languages in these countries: `da_DK`, `he_IL`, `id_ID`, `ja_JP`, `no_NO`, `pt_BR`, `ru_RU`, `sv_SE`, `th_TH`, `zh_CN`, `zh_HK`, or `zh_TW`.|

<h2 id="tocS_web_profile">web_profile</h2>
<!-- backwards compatibility -->
<a id="schemaweb_profile"></a>
<a id="schema_web_profile"></a>
<a id="tocSweb_profile"></a>
<a id="tocsweb_profile"></a>

```json
{
  "id": "stringstringstringstri",
  "name": "string",
  "temporary": true,
  "flow_config": {
    "landing_page_type": "login",
    "bank_txn_pending_url": "http://example.com",
    "user_action": "COMMIT",
    "return_uri_http_method": "GET"
  },
  "input_fields": {
    "no_shipping": 0,
    "address_override": 0
  },
  "presentation": {
    "brand_name": "string",
    "logo_image": "string",
    "locale_code": "strin"
  }
}
```

A payment web experience profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the web experience profile.|
|name|string|true|none|The web experience profile name. Must be unique for a set of profiles for a merchant.|
|temporary|boolean|false|none|Indicates whether the profile persists for three hours or permanently. To persist the profile permanently, set to `false`. To persist the profile for three hours, set to `true`.|
|flow_config|[flow_config](#schemaflow_config)|false|none|The flow configuration parameters.|
|input_fields|[input_fields](#schemainput_fields)|false|none|The input field customization parameters.|
|presentation|[presentation](#schemapresentation)|false|none|The style and presentation parameters.|

<h2 id="tocS_web_profile_list">web_profile_list</h2>
<!-- backwards compatibility -->
<a id="schemaweb_profile_list"></a>
<a id="schema_web_profile_list"></a>
<a id="tocSweb_profile_list"></a>
<a id="tocsweb_profile_list"></a>

```json
[
  {
    "id": "stringstringstringstri",
    "name": "string",
    "temporary": true,
    "flow_config": {
      "landing_page_type": "login",
      "bank_txn_pending_url": "http://example.com",
      "user_action": "COMMIT",
      "return_uri_http_method": "GET"
    },
    "input_fields": {
      "no_shipping": 0,
      "address_override": 0
    },
    "presentation": {
      "brand_name": "string",
      "logo_image": "string",
      "locale_code": "strin"
    }
  }
]
```

An array of web profiles.
