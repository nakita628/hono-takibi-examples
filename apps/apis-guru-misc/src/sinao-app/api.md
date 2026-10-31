<h1 id="sinao-api">Sinao API v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Sinao API for account management, apps administration and network exploration

Base URLs:

* <a href="https://api.sinao.app/v1">https://api.sinao.app/v1</a> - Production

* <a href="https://api.sinao.dev/v1">https://api.sinao.dev/v1</a> - Staging

* <a href="https://api.sinao.test/v1">https://api.sinao.test/v1</a> - Development

Email: <a href="mailto:contact@sinao.fr">contact@sinao.fr</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

- HTTP Authentication, scheme: basic

<h1 id="sinao-api-applications">Applications</h1>

## List apps

<a id="opIdapp.list"></a>

> Code samples

```bash
curl https://example.com/apps \
  -H 'Accept: application/json'
```

`GET /apps`

Get all apps

<h3 id="list-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  }
]
```

<h3 id="list-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results|Inline|
|400|Bad Request|bad input parameter|None|

<h3 id="list-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[App](#schemaapp)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get an app

<a id="opIdapp.get"></a>

> Code samples

```bash
curl https://example.com/apps/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}`

Get app informations

<h3 id="get-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{
  "admin": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "config": [
    null
  ],
  "hostname_alias": "example.com",
  "id": 0,
  "last_access_at": "1970-01-01T00:00:00Z",
  "last_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "organization": {},
  "policies": [
    {}
  ],
  "subscription": {
    "access_level": "full",
    "id": 0,
    "payment_card": "string",
    "payment_failed_count": 0,
    "period_ending_date": "1970-01-01T00:00:00Z",
    "period_remaining_days": 0,
    "period_starting_date": "1970-01-01T00:00:00Z",
    "plan_color": "string",
    "plan_name": "string",
    "status": "string",
    "stripe_customer_id": "string",
    "stripe_plan_id": "string",
    "stripe_subscription_id": "string"
  },
  "url": "http://example.com"
}
```

<h3 id="get-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[App](#schemaapp)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get all api keys

<a id="opIdapp.apikeys.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/apikeys \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/apikeys`

<h3 id="get-all-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-all-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|App not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Create new API key

<a id="opIdapp.apikeys.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/apikeys?name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/apikeys`

<h3 id="create-new-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|true|Key name|
|api_partner_id|query|integer \| null|false|Partner ID for official connexion|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="create-new-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|404|Not Found|App or key not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Remove an api key

<a id="opIdapp.apikeys.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/apikeys/string \
  -X DELETE
```

`DELETE /apps/{appId}/apikeys/{id}`

<h3 id="remove-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|string|true|Automatically added|

<h3 id="remove-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Get all api parners

<a id="opIdapp.apipartners.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/apipartners \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/apipartners`

<h3 id="get-all-api-parners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-all-api-parners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|App not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get app config

<a id="opIdapp.settings.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/settings \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/settings`

Get a configuration variable by key

<h3 id="get-app-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|key|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-app-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|App or key not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update app config

<a id="opIdapp.settings.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/settings \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/settings`

General settings of an app. Can be modified in app

<h3 id="update-app-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|settings|query|object|false|none|
|key|query|string|false|none|
|value|query|string|false|Value can be a primitive or a file|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="update-app-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|404|Not Found|App or key not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-hidden">hidden</h1>

## Create an app

<a id="opIdapp.create"></a>

> Code samples

```bash
curl 'https://example.com/apps?organization_name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps`

Create a new `App` with their organization profile

<h3 id="create-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_name|query|string|true|Organization name. Minimum 3 characters with 1 alpha|

> Example responses

> 200 Response

```json
{
  "admin": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "config": [
    null
  ],
  "hostname_alias": "example.com",
  "id": 0,
  "last_access_at": "1970-01-01T00:00:00Z",
  "last_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "organization": {},
  "policies": [
    {}
  ],
  "subscription": {
    "access_level": "full",
    "id": 0,
    "payment_card": "string",
    "payment_failed_count": 0,
    "period_ending_date": "1970-01-01T00:00:00Z",
    "period_remaining_days": 0,
    "period_starting_date": "1970-01-01T00:00:00Z",
    "plan_color": "string",
    "plan_name": "string",
    "status": "string",
    "stripe_customer_id": "string",
    "stripe_plan_id": "string",
    "stripe_subscription_id": "string"
  },
  "url": "http://example.com"
}
```

<h3 id="create-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[App](#schemaapp)|
|422|Unprocessable Entity|The organization name format is invalid : minimum 3 characters with 1 alpha|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get invitation informations

<a id="opIdapp.policies.registration.get"></a>

> Code samples

```bash
curl https://example.com/apps/access/invite/string \
  -H 'Accept: application/json'
```

`GET /apps/access/invite/{accessToken}`

Get infos of an invitation request. Returns an `AccessInvitation` object

<h3 id="get-invitation-informations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "app": {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  },
  "id": 0,
  "profile": {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  },
  "recipient_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "sender_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "used_at": "1970-01-01T00:00:00Z",
  "validity": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-invitation-informations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccessInvitation](#schemaaccessinvitation)|
|404|Not Found|Invitation was not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an invitation from token

<a id="opIdapp.policies.registration.delete"></a>

> Code samples

```bash
curl https://example.com/apps/access/invite/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/access/invite/{accessToken}`

Remove an invitation from token

<h3 id="delete-an-invitation-from-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-an-invitation-from-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|401|Unauthorized|Token expired|None|
|404|Not Found|Token was not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create an User by invitation

<a id="opIdapp.policies.registration.register"></a>

> Code samples

```bash
curl 'https://example.com/apps/access/invite/string/register?password=string&cgu=true' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/access/invite/{accessToken}/register`

Registration for an invited user

<h3 id="create-an-user-by-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessToken|path|string|true|none|
|password|query|string|true|Password for account|
|firstname|query|string|false|First name of user before account creation / account link|
|lastname|query|string|false|Last name of user before account creation / account link|
|cgu|query|boolean|true|User has valided CGU ?|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "last_access_at": "1970-01-01T00:00:00Z",
  "password_is_undefined": true,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-an-user-by-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|400|Bad Request|Bad parameters|None|
|401|Unauthorized|Token expired|None|
|404|Not Found|Token not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get policies for an app

<a id="opIdapp.policies.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/access \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/access`

Get all policies for an app. Manage access for users

<h3 id="get-policies-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  }
]
```

<h3 id="get-policies-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|App was not found|None|

<h3 id="get-policies-for-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyProfile](#schemapolicyprofile)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List invitations

<a id="opIdapp.policies.invitations.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/access/invite \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/access/invite`

Get all sent invitations

<h3 id="list-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "app": {
      "admin": {
        "civility": "string",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "firstname": "string",
        "id": 0,
        "image": "http://example.com",
        "lastname": "string",
        "metadata": [
          null
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com",
        "last_access_at": "1970-01-01T00:00:00Z",
        "password_is_undefined": true,
        "updated_at": "1970-01-01T00:00:00Z"
      },
      "config": [
        null
      ],
      "hostname_alias": "example.com",
      "id": 0,
      "last_access_at": "1970-01-01T00:00:00Z",
      "last_user": {
        "civility": "string",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "firstname": "string",
        "id": 0,
        "image": "http://example.com",
        "lastname": "string",
        "metadata": [
          null
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com",
        "last_access_at": "1970-01-01T00:00:00Z",
        "password_is_undefined": true,
        "updated_at": "1970-01-01T00:00:00Z"
      },
      "organization": {},
      "policies": [
        {}
      ],
      "subscription": {
        "access_level": "full",
        "id": 0,
        "payment_card": "string",
        "payment_failed_count": 0,
        "period_ending_date": "1970-01-01T00:00:00Z",
        "period_remaining_days": 0,
        "period_starting_date": "1970-01-01T00:00:00Z",
        "plan_color": "string",
        "plan_name": "string",
        "status": "string",
        "stripe_customer_id": "string",
        "stripe_plan_id": "string",
        "stripe_subscription_id": "string"
      },
      "url": "http://example.com"
    },
    "id": 0,
    "profile": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "restricted": true,
      "rights": [
        "string"
      ],
      "visible": 0
    },
    "recipient_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "sender_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "used_at": "1970-01-01T00:00:00Z",
    "validity": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|App was not found|None|

<h3 id="list-invitations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccessInvitation](#schemaaccessinvitation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Invite an user

<a id="opIdapp.policies.invitations.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/access/invite?email=string&policy_profile_id=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/access/invite`

Invites a user to access the organization panel

<h3 id="invite-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|email|query|string|true|Email for invitation. Will be used to account creation or account matching with an existing user|
|policy_profile_id|query|integer|true|Profile for policies set|
|firstname|query|string|false|First name of user before account creation / account link|
|lastname|query|string|false|Last name of user before account creation / account link|
|civility|query|string|false|Last name of user before account creation / account link|
|password|query|string|false|Password for new user|

> Example responses

> 200 Response

```json
{
  "app": {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  },
  "id": 0,
  "profile": {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  },
  "recipient_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "sender_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "used_at": "1970-01-01T00:00:00Z",
  "validity": "1970-01-01T00:00:00Z"
}
```

<h3 id="invite-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccessInvitation](#schemaaccessinvitation)|
|403|Forbidden|This user already exists, you can not set a password|None|
|404|Not Found|App was not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Delete an invitation

<a id="opIdapp.policies.invitations.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/access/invite/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/access/invite/{id}`

Remove an invitation

<h3 id="delete-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|404|Not Found|Invitation was not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Get profiles

<a id="opIdapp.policies.profiles.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/access/profiles \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/access/profiles`

Get all profiles

<h3 id="get-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  }
]
```

<h3 id="get-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-profiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyProfile](#schemapolicyprofile)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get police for an user

<a id="opIdapp.policies.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/access/string \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/access/{userId}`

Find policy profile for an user on an app

<h3 id="get-police-for-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "homepage": "http://example.com",
  "name": "string",
  "restricted": true,
  "rights": [
    "string"
  ],
  "visible": 0
}
```

<h3 id="get-police-for-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PolicyProfile](#schemapolicyprofile)|
|404|Not Found|App was not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update police for an user

<a id="opIdapp.policies.update"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/access/string?policy_profile_id=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/access/{userId}`

Update police for an user on an app

<h3 id="update-police-for-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|userId|path|string|true|none|
|policy_profile_id|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "homepage": "http://example.com",
  "name": "string",
  "restricted": true,
  "rights": [
    "string"
  ],
  "visible": 0
}
```

<h3 id="update-police-for-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PolicyProfile](#schemapolicyprofile)|
|404|Not Found|App was not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Delete police for an user

<a id="opIdapp.policies.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/access/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/access/{userId}`

Cancel access for an user on an app

<h3 id="delete-police-for-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-police-for-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|404|Not Found|App was not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
is_admin
</aside>

## Create many accounts

<a id="opIdapp.accounting.accounts.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/accounts/batch?data=%7B%22accounting_number%22%3A%22string%22%2C%22description%22%3A%22string%22%2C%22editable%22%3Atrue%2C%22id%22%3A0%2C%22is_associate%22%3Atrue%2C%22is_cashflow%22%3Atrue%2C%22is_purchase%22%3Atrue%2C%22is_sales%22%3Atrue%2C%22is_various%22%3Atrue%2C%22journalcode%22%3A%22string%22%2C%22keywords%22%3A%22string%22%2C%22name%22%3A%22string%22%2C%22need_charge%22%3Atrue%2C%22need_employee%22%3Atrue%2C%22need_invoice%22%3Atrue%2C%22technical_name%22%3A%22string%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/accounts/batch`

Create many accounts

<h3 id="create-many-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Account](#schemaaccount)]|true|List of accounts. Without ID for insert|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "description": "string",
  "editable": true,
  "id": 0,
  "is_associate": true,
  "is_cashflow": true,
  "is_purchase": true,
  "is_sales": true,
  "is_various": true,
  "journalcode": "string",
  "keywords": "string",
  "name": "string",
  "need_charge": true,
  "need_employee": true,
  "need_invoice": true,
  "technical_name": "string"
}
```

<h3 id="create-many-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List banks connected to bankin

<a id="opIdapp.cashflow.banks.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/banks/`

<h3 id="list-banks-connected-to-bankin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="list-banks-connected-to-bankin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a Bankin synchronization

<a id="opIdapp.cashflow.banks.delete"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/banks/?item_id=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/banks/`

The deletion of the account is irreversible, it will not be possible to resume synchronization as it is afterwards. - If transactions have been exported to accounting or used as payment, the CashflowSource will be left as it is. Resuming synchronization will remain impossible. If you re-import the account, a new CashflowSource will be created and transactions will therefore be duplicated. - Otherwise, if the CashflowSource was not used, it as well as its transactions will be deleted

<h3 id="remove-a-bankin-synchronization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|item_id|query|integer|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="remove-a-bankin-synchronization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the link to the funnel to connect a bank with Sinao

<a id="opIdapp.cashflow.banks.connect"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/connect \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/banks/connect`

<h3 id="get-the-link-to-the-funnel-to-connect-a-bank-with-sinao-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com"
}
```

<h3 id="get-the-link-to-the-funnel-to-connect-a-bank-with-sinao-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-the-link-to-the-funnel-to-connect-a-bank-with-sinao-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Triggers synchronization at Bankin then synchronizes transactions with Sinao

<a id="opIdapp.cashflow.banks.synchronize"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/synchronize \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/banks/synchronize`

<h3 id="triggers-synchronization-at-bankin-then-synchronizes-transactions-with-sinao-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|query|integer|false|Optional item id to refresh. If set, triggers a refresh at Bankin before synchronizing transactions|
|is_incremential|query|boolean|false|The value 'false' triggers a non-incremental syncronization of the maximum possible duration. The value 'true' updates the transactions updated by Bankin since a certain date|

> Example responses

> 200 Response

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {},
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="triggers-synchronization-at-bankin-then-synchronizes-transactions-with-sinao-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowSource](#schemacashflowsource)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the link to the funnel to edit password

<a id="opIdapp.cashflow.banks.url_edit"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/0/funnel/edit \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/banks/{id}/funnel/edit`

<h3 id="get-the-link-to-the-funnel-to-edit-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com"
}
```

<h3 id="get-the-link-to-the-funnel-to-edit-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-the-link-to-the-funnel-to-edit-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the link to the funnel to start manually a synchronization (SCA)

<a id="opIdapp.cashflow.banks.url_sync"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/0/funnel/sync \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/banks/{id}/funnel/sync`

<h3 id="get-the-link-to-the-funnel-to-start-manually-a-synchronization-sca-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com"
}
```

<h3 id="get-the-link-to-the-funnel-to-start-manually-a-synchronization-sca-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-the-link-to-the-funnel-to-start-manually-a-synchronization-sca-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the link to the funnel to validate a pro item (SCA)

<a id="opIdapp.cashflow.banks.url_validate"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/0/funnel/validate \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/banks/{id}/funnel/validate`

<h3 id="get-the-link-to-the-funnel-to-validate-a-pro-item-sca-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com"
}
```

<h3 id="get-the-link-to-the-funnel-to-validate-a-pro-item-sca-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-the-link-to-the-funnel-to-validate-a-pro-item-sca-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Select accounts to synchronize

<a id="opIdapp.cashflow.banks.select_accounts"></a>

> Code samples

```bash
curl https://example.com/apps/0/banks/0/select_accounts \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/banks/{id}/select_accounts`

<h3 id="select-accounts-to-synchronize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|bank_account_ids|query|[integer]|false|List of enables accounts|

> Example responses

> 200 Response

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {},
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="select-accounts-to-synchronize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowSource](#schemacashflowsource)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Merge many contacts

<a id="opIdapp.contacts.transform.merge"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/contacts/merge?contacts=%7B%22id%22%3A0%2C%22type%22%3A%22organization%22%7D' \
  -X POST
```

`POST /apps/{appId}/contacts/merge`

<h3 id="merge-many-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|contacts|query|[object(object)]|true|none|

<h3 id="merge-many-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List autoreconciliation logs

<a id="opIdapp.cashflow.logsautoreconciliations.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/logs/autoreconcile/
```

`GET /apps/{appId}/logs/autoreconcile/`

<h3 id="list-autoreconciliation-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

<h3 id="list-autoreconciliation-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Start force autoreconciliation

<a id="opIdapp.cashflow.logsautoreconciliations.start"></a>

> Code samples

```bash
curl https://example.com/apps/0/logs/autoreconcile/ \
  -X POST
```

`POST /apps/{appId}/logs/autoreconcile/`

<h3 id="start-force-autoreconciliation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="start-force-autoreconciliation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Clear autoreconciliation logs

<a id="opIdapp.cashflow.logsautoreconciliations.clear"></a>

> Code samples

```bash
curl https://example.com/apps/0/logs/autoreconcile/ \
  -X DELETE
```

`DELETE /apps/{appId}/logs/autoreconcile/`

<h3 id="clear-autoreconciliation-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="clear-autoreconciliation-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ping app web hostname

<a id="opIdapp.ping"></a>

> Code samples

```bash
curl https://example.com/apps/0/ping
```

`GET /apps/{appId}/ping`

Try if a specific app is online

<h3 id="ping-app-web-hostname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="ping-app-web-hostname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Server error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## List product categories

<a id="opIdapp.catalog.categories.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/productcategory \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/productcategory`

Get list of product categories

<h3 id="list-product-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "image": "string",
    "name": "string",
    "parent": {},
    "products": {}
  }
]
```

<h3 id="list-product-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-product-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductCategory](#schemaproductcategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a product category

<a id="opIdapp.catalog.categories.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/productcategory?name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productcategory`

Create a new product category

<h3 id="create-a-product-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|true|none|
|image|query|string(binary) \| string(uri)|false|none|
|parent_category_id|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "image": "string",
  "name": "string",
  "parent": {},
  "products": {}
}
```

<h3 id="create-a-product-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductCategory](#schemaproductcategory)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a product category

<a id="opIdapp.catalog.categories.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/productcategory/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/productcategory/{id}`

Get a Product category object by Id

<h3 id="get-a-product-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of product category|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "image": "string",
  "name": "string",
  "parent": {},
  "products": {}
}
```

<h3 id="get-a-product-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductCategory](#schemaproductcategory)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a product category

<a id="opIdapp.catalog.categories.update"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/productcategory/0?name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productcategory/{id}`

Update a product category by id

<h3 id="update-a-product-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of product category|
|name|query|string|true|none|
|image|query|string(binary) \| string(uri)|false|none|
|parent_category_id|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "image": "string",
  "name": "string",
  "parent": {},
  "products": {}
}
```

<h3 id="update-a-product-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductCategory](#schemaproductcategory)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a product category

<a id="opIdapp.catalog.categories.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/productcategory/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/productcategory/{id}`

Remove a product category by id

<h3 id="remove-a-product-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of product category|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-product-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/recurringinvoices \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/recurringinvoices`

<h3 id="list-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "content": [
      {}
    ],
    "discount": 0,
    "discount_end_at": "1970-01-01T00:00:00Z",
    "discount_mode": "string",
    "discount_start_at": "1970-01-01T00:00:00Z",
    "end_at": "1970-01-01T00:00:00Z",
    "frequency_count": 0,
    "frequency_duration": "string",
    "id": 0,
    "next_invoice_at": "1970-01-01T00:00:00Z",
    "orders_plan": [
      {
        "end_at": "1970-01-01T00:00:00Z",
        "model": 0
      }
    ],
    "saving_status": "string"
  }
]
```

<h3 id="list-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-recurringinvoice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RecurringInvoice](#schemarecurringinvoice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/recurringinvoices?frequency_count=0&frequency_duration=day' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/recurringinvoices`

<h3 id="create-a-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|contact_infos|query|object \| null|false|none|
|title|query|string \| null|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|currency|query|string|false|none|
|legal_notice|query|string \| null|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|payment_period|query|integer|false|Days count before considere this invoice as late|
|next_invoice_at|query|string(date-time) \| null|false|none|
|end_at|query|string(date-time) \| null|false|none|
|frequency_count|query|integer|true|none|
|frequency_duration|query|string|true|none|
|discount|query|integer|false|none|
|discount_mode|query|string \| null|false|none|
|discount_start_at|query|string(date-time) \| null|false|none|
|discount_end_at|query|string(date-time) \| null|false|none|
|details|query|string \| null|false|none|
|orders_plan|query|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency_duration|day|
|frequency_duration|week|
|frequency_duration|month|
|frequency_duration|trimester|
|frequency_duration|semester|
|frequency_duration|year|
|discount_mode|percent|

> Example responses

> 200 Response

```json
{
  "content": [
    {}
  ],
  "discount": 0,
  "discount_end_at": "1970-01-01T00:00:00Z",
  "discount_mode": "string",
  "discount_start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "frequency_count": 0,
  "frequency_duration": "string",
  "id": 0,
  "next_invoice_at": "1970-01-01T00:00:00Z",
  "orders_plan": [
    {
      "end_at": "1970-01-01T00:00:00Z",
      "model": 0
    }
  ],
  "saving_status": "string"
}
```

<h3 id="create-a-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecurringInvoice](#schemarecurringinvoice)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update many RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/recurringinvoices/batch?data=%7B%22content%22%3A%5B%7B%7D%5D%2C%22discount%22%3A0%2C%22discount_end_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22discount_mode%22%3A%22string%22%2C%22discount_start_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22end_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22frequency_count%22%3A0%2C%22frequency_duration%22%3A%22string%22%2C%22id%22%3A0%2C%22next_invoice_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22orders_plan%22%3A%5B%7B%22end_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22model%22%3A0%7D%5D%2C%22saving_status%22%3A%22string%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/recurringinvoices/batch`

Create or update many RecurringInvoice

<h3 id="create-or-update-many-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[RecurringInvoice](#schemarecurringinvoice)]|true|List of RecurringInvoice. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "content": [
    {}
  ],
  "discount": 0,
  "discount_end_at": "1970-01-01T00:00:00Z",
  "discount_mode": "string",
  "discount_start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "frequency_count": 0,
  "frequency_duration": "string",
  "id": 0,
  "next_invoice_at": "1970-01-01T00:00:00Z",
  "orders_plan": [
    {
      "end_at": "1970-01-01T00:00:00Z",
      "model": 0
    }
  ],
  "saving_status": "string"
}
```

<h3 id="create-or-update-many-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecurringInvoice](#schemarecurringinvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete many RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.batch_delete"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/recurringinvoices/batch?ids=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/recurringinvoices/batch`

Delete many RecurringInvoice

<h3 id="delete-many-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|List of RecurringInvoice ID|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-many-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get json of periods_formats for a date.

<a id="opIdapp.documents.sales.recurringinvoices.getPeriods"></a>

> Code samples

```bash
curl https://example.com/apps/0/recurringinvoices/periods \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/recurringinvoices/periods`

Get json of periods_formats for a date. If request parameter date is null, returns periods_formats for today.

<h3 id="get-json-of-periodsformats-for-a-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|date|query|string(date-time) \| null|false|Date of the invoice|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="get-json-of-periodsformats-for-a-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-json-of-periodsformats-for-a-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/recurringinvoices/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/recurringinvoices/{id}`

<h3 id="get-a-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer(RecurringInvoice)|true|ID of RecurringInvoice|

> Example responses

> 200 Response

```json
{
  "content": [
    {}
  ],
  "discount": 0,
  "discount_end_at": "1970-01-01T00:00:00Z",
  "discount_mode": "string",
  "discount_start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "frequency_count": 0,
  "frequency_duration": "string",
  "id": 0,
  "next_invoice_at": "1970-01-01T00:00:00Z",
  "orders_plan": [
    {
      "end_at": "1970-01-01T00:00:00Z",
      "model": 0
    }
  ],
  "saving_status": "string"
}
```

<h3 id="get-a-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecurringInvoice](#schemarecurringinvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/recurringinvoices/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/recurringinvoices/{id}`

<h3 id="update-a-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of RecurringInvoice|
|contact_infos|query|object \| null|false|none|
|title|query|string \| null|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|currency|query|string|false|none|
|legal_notice|query|string \| null|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|payment_period|query|integer|false|Days count before considere this invoice as late|
|next_invoice_at|query|string(date-time) \| null|false|none|
|end_at|query|string(date-time) \| null|false|none|
|frequency_count|query|integer|false|none|
|frequency_duration|query|string|false|none|
|discount|query|integer|false|none|
|discount_mode|query|string \| null|false|none|
|discount_start_at|query|string(date-time) \| null|false|none|
|discount_end_at|query|string(date-time) \| null|false|none|
|details|query|string \| null|false|none|
|orders_plan|query|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency_duration|day|
|frequency_duration|week|
|frequency_duration|month|
|frequency_duration|trimester|
|frequency_duration|semester|
|frequency_duration|year|
|discount_mode|percent|

> Example responses

> 200 Response

```json
{
  "content": [
    {}
  ],
  "discount": 0,
  "discount_end_at": "1970-01-01T00:00:00Z",
  "discount_mode": "string",
  "discount_start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "frequency_count": 0,
  "frequency_duration": "string",
  "id": 0,
  "next_invoice_at": "1970-01-01T00:00:00Z",
  "orders_plan": [
    {
      "end_at": "1970-01-01T00:00:00Z",
      "model": 0
    }
  ],
  "saving_status": "string"
}
```

<h3 id="update-a-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RecurringInvoice](#schemarecurringinvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a RecurringInvoice

<a id="opIdapp.documents.sales.recurringinvoices.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/recurringinvoices/0 \
  -X DELETE
```

`DELETE /apps/{appId}/recurringinvoices/{id}`

<h3 id="remove-a-recurringinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of RecurringInvoice|

<h3 id="remove-a-recurringinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Preview next invoices generations

<a id="opIdapp.documents.sales.recurringinvoices.plan"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/recurringinvoices/0/plan?until=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/recurringinvoices/{id}/plan`

<h3 id="preview-next-invoices-generations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Recurring invoice id|
|until|query|string(date-time)|true|Until date to generate plan|

> Example responses

> 200 Response

```json
[
  {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  }
]
```

<h3 id="preview-next-invoices-generations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="preview-next-invoices-generations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Invoice](#schemainvoice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reset all data

<a id="opIdapp.reset"></a>

> Code samples

```bash
curl https://example.com/apps/0/reset \
  -X POST
```

`POST /apps/{appId}/reset`

Reset everything

<h3 id="reset-all-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="reset-all-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Server error|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## List rules

<a id="opIdapp.rules.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/rules/`

<h3 id="list-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "conditions": [
      [
        "string"
      ]
    ],
    "id": 0,
    "on_event": "string",
    "parameter": "string",
    "priority": 0,
    "value": "string"
  }
]
```

<h3 id="list-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Rule](#schemarule)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a rule

<a id="opIdapp.rules.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/ \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/rules/`

<h3 id="create-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|conditions|query|[[string]]|false|none|
|on_event|query|string|false|Event like model.event, event in [saved, created, updated, deleted]|
|parameter|query|string|false|none|
|value|query|string|false|none|
|priority|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "conditions": [
    [
      "string"
    ]
  ],
  "id": 0,
  "on_event": "string",
  "parameter": "string",
  "priority": 0,
  "value": "string"
}
```

<h3 id="create-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Rule](#schemarule)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Execute all rules

<a id="opIdapp.rules.execute_on"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/execute_on \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/rules/execute_on`

<h3 id="execute-all-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|model|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "conditions": [
    [
      "string"
    ]
  ],
  "id": 0,
  "on_event": "string",
  "parameter": "string",
  "priority": 0,
  "value": "string"
}
```

<h3 id="execute-all-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Rule](#schemarule)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a rule

<a id="opIdapp.rules.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/rules/{id}`

<h3 id="get-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "conditions": [
    [
      "string"
    ]
  ],
  "id": 0,
  "on_event": "string",
  "parameter": "string",
  "priority": 0,
  "value": "string"
}
```

<h3 id="get-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Rule](#schemarule)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

<a id="opIdapp.rules.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/rules/{id}`

<h3 id="update-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|conditions|query|[[string]]|false|none|
|on_event|query|string|false|none|
|parameter|query|string|false|none|
|value|query|string|false|none|
|priority|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "conditions": [
    [
      "string"
    ]
  ],
  "id": 0,
  "on_event": "string",
  "parameter": "string",
  "priority": 0,
  "value": "string"
}
```

<h3 id="update-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Rule](#schemarule)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a rule

<a id="opIdapp.rules.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/rules/0 \
  -X DELETE
```

`DELETE /apps/{appId}/rules/{id}`

<h3 id="remove-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|

<h3 id="remove-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List sales documents models

<a id="opIdapp.documents.sales.models.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/salesdocumentmodels \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/salesdocumentmodels`

<h3 id="list-sales-documents-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "json": [
      {
        "account": {},
        "action": "sell",
        "amount": 0,
        "amount_accurately": 0,
        "amount_with_taxes": true,
        "detail": "string",
        "discount": {
          "amount": 0,
          "percent": 0
        },
        "document": {},
        "id": 0,
        "metadata": [
          null
        ],
        "product": {},
        "quantity": 0,
        "stock": {},
        "style": {
          "position": 0,
          "section_id": 0,
          "type": "section"
        },
        "total_quantity": "string",
        "totals": {
          "due": 0,
          "subtotal": 0,
          "taxes": 0
        },
        "unity": "string",
        "vat_percent": 0
      }
    ],
    "name": "string",
    "title": "string"
  }
]
```

<h3 id="list-sales-documents-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-sales-documents-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SalesDocumentModel](#schemasalesdocumentmodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a sales document model

<a id="opIdapp.documents.sales.models.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/salesdocumentmodels \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/salesdocumentmodels`

<h3 id="create-a-sales-document-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|false|none|
|title|query|string|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "json": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "name": "string",
  "title": "string"
}
```

<h3 id="create-a-sales-document-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesDocumentModel](#schemasalesdocumentmodel)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a sales document model

<a id="opIdapp.documents.sales.models.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/salesdocumentmodels/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/salesdocumentmodels/{id}`

<h3 id="get-a-sales-document-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SalesDocumentModel|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "json": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "name": "string",
  "title": "string"
}
```

<h3 id="get-a-sales-document-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesDocumentModel](#schemasalesdocumentmodel)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a sales document model

<a id="opIdapp.documents.sales.models.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/salesdocumentmodels/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/salesdocumentmodels/{id}`

<h3 id="update-a-sales-document-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SalesDocumentModel|
|name|query|string|false|none|
|title|query|string|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "json": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "name": "string",
  "title": "string"
}
```

<h3 id="update-a-sales-document-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SalesDocumentModel](#schemasalesdocumentmodel)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a sales document model

<a id="opIdapp.documents.sales.models.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/salesdocumentmodels/0 \
  -X DELETE
```

`DELETE /apps/{appId}/salesdocumentmodels/{id}`

<h3 id="remove-a-sales-document-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SalesDocumentModel|

<h3 id="remove-a-sales-document-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ping Stripe webhook endpoint

<a id="opIdapp.services.stripe.webhook.ping"></a>

> Code samples

```bash
curl https://example.com/apps/0/services/stripe/webhook
```

`GET /apps/{appId}/services/stripe/webhook`

<h3 id="ping-stripe-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="ping-stripe-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Webhook for Stripe

<a id="opIdapp.services.stripe.webhook.handle"></a>

> Code samples

```bash
curl https://example.com/apps/0/services/stripe/webhook \
  -X POST
```

`POST /apps/{appId}/services/stripe/webhook`

<h3 id="webhook-for-stripe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="webhook-for-stripe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Webhook for Yousign

<a id="opIdapp.services.yousign.webhook.handle"></a>

> Code samples

```bash
curl https://example.com/apps/0/services/yousign/webhook \
  -X POST
```

`POST /apps/{appId}/services/yousign/webhook`

<h3 id="webhook-for-yousign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="webhook-for-yousign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update anchor date

<a id="opIdapp.subscription.anchordate"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/anchordate \
  -X POST
```

`POST /apps/{appId}/subscription/anchordate`

<h3 id="update-anchor-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="update-anchor-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get payment link to Stripe Checkout

<a id="opIdapp.subscription.checkout_add_source"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/checkout_add_source
```

`GET /apps/{appId}/subscription/checkout_add_source`

<h3 id="get-payment-link-to-stripe-checkout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="get-payment-link-to-stripe-checkout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Add coupon

<a id="opIdapp.subscription.coupon"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/subscription/coupon?code=string' \
  -X POST
```

`POST /apps/{appId}/subscription/coupon`

<h3 id="add-coupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|code|query|string|true|none|

<h3 id="add-coupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Extend trial period

<a id="opIdapp.subscription.extend_trial"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/extend_trial \
  -X POST
```

`POST /apps/{appId}/subscription/extend_trial`

<h3 id="extend-trial-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="extend-trial-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Enable plan

<a id="opIdapp.subscription.extra_enable"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/extra/string \
  -X POST
```

`POST /apps/{appId}/subscription/extra/{stripe_plan}`

<h3 id="enable-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_plan|path|string|true|Stripe plan id to update invoice|

<h3 id="enable-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Pay all due invoices

<a id="opIdapp.subscription.pay_all"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/pay_all \
  -X POST
```

`POST /apps/{appId}/subscription/pay_all`

<h3 id="pay-all-due-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="pay-all-due-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get current plan

<a id="opIdapp.subscription.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plan \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/subscription/plan`

<h3 id="get-current-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{
  "extras": [
    "string"
  ],
  "plans": [
    "string"
  ]
}
```

<h3 id="get-current-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-current-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extras|[string]|false|none|none|
|plans|[string]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## End current plan

<a id="opIdapp.subscription.end"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plan \
  -X DELETE
```

`DELETE /apps/{appId}/subscription/plan`

<h3 id="end-current-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="end-current-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get plans

<a id="opIdapp.subscription.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plans \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/subscription/plans`

<h3 id="get-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{
  "extras": [
    "string"
  ],
  "plans": [
    "string"
  ]
}
```

<h3 id="get-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extras|[string]|false|none|none|
|plans|[string]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Simulate a plan

<a id="opIdapp.subscription.upcoming"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plans/string
```

`GET /apps/{appId}/subscription/plans/{stripe_plan}`

<h3 id="simulate-a-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_plan|path|string|true|Stripe plan id to simulate invoice|
|stripe_coupon|query|string \| null|false|Stripe coupon id to simulate invoice|

<h3 id="simulate-a-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Change plan

<a id="opIdapp.subscription.pay"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plans/string \
  -X POST
```

`POST /apps/{appId}/subscription/plans/{stripe_plan}`

<h3 id="change-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_plan|path|string|true|Stripe plan id to update invoice|
|stripe_source|query|string \| null|false|Stripe source to pay|
|stripe_coupon|query|string \| null|false|Stripe coupon id to apply|

<h3 id="change-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get payment link to Stripe Checkout

<a id="opIdapp.subscription.checkout"></a>

> Code samples

```bash
curl https://example.com/apps/0/subscription/plans/string/checkout
```

`GET /apps/{appId}/subscription/plans/{stripe_plan}/checkout`

<h3 id="get-payment-link-to-stripe-checkout-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_plan|path|string|true|Stripe plan id to simulate invoice|
|stripe_coupon|query|string \| null|false|Stripe coupon id to simulate invoice|

<h3 id="get-payment-link-to-stripe-checkout-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Add creditcard or sepadebit

<a id="opIdapp.subscription.add_source"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/subscription/source?stripe_source=string' \
  -X POST
```

`POST /apps/{appId}/subscription/source`

<h3 id="add-creditcard-or-sepadebit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_source|query|string|true|Stripe source to pay|

<h3 id="add-creditcard-or-sepadebit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Remove creditcard or sepadebit

<a id="opIdapp.subscription.remove_source"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/subscription/source?stripe_source=string' \
  -X DELETE
```

`DELETE /apps/{appId}/subscription/source`

<h3 id="remove-creditcard-or-sepadebit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_source|query|string|true|Stripe source to pay|

<h3 id="remove-creditcard-or-sepadebit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Change default source

<a id="opIdapp.subscription.set_default"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/subscription/source/default?stripe_source=string' \
  -X POST
```

`POST /apps/{appId}/subscription/source/default`

<h3 id="change-default-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|stripe_source|query|string|true|Stripe source to set as default source|

<h3 id="change-default-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Get templates

<a id="opIdapp.settings.templates.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/templates
```

`GET /apps/{appId}/templates`

Get all templates

<h3 id="get-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="get-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a template

<a id="opIdapp.settings.templates.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/templates \
  -X POST
```

`POST /apps/{appId}/templates`

Create a template

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple templates

<a id="opIdapp.settings.templates.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/templates/batch?data=' \
  -X POST
```

`POST /apps/{appId}/templates/batch`

Create multiple templates

<h3 id="create-multiple-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[object]|true|List of templates. With ID for update, without for insert|

<h3 id="create-multiple-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get default template

<a id="opIdapp.settings.templates.default_template"></a>

> Code samples

```bash
curl https://example.com/apps/0/templates/default
```

`GET /apps/{appId}/templates/default`

Get the default template

<h3 id="get-default-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="get-default-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a template

<a id="opIdapp.settings.templates.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/templates/string
```

`GET /apps/{appId}/templates/{id}`

Get a template

<h3 id="get-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|string|true|Automatically added|

<h3 id="get-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a template

<a id="opIdapp.settings.templates.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/templates/string \
  -X POST
```

`POST /apps/{appId}/templates/{id}`

Update a template

<h3 id="update-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|string|true|Automatically added|

<h3 id="update-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change password

<a id="opIdauth.changepassword"></a>

> Code samples

```bash
curl 'https://example.com/changepassword?forgotten_password_token=string&password=string' \
  -X POST
```

`POST /changepassword`

Change password by email forgotten_password_token

<h3 id="change-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forgotten_password_token|query|string|true|none|
|password|query|string|true|Password for account|

<h3 id="change-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdauth.logout"></a>

> Code samples

```bash
curl https://example.com/logout \
  -X POST
```

`POST /logout`

Log the user out (Invalidate the token)

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ping server

<a id="opIdauth.ping"></a>

> Code samples

```bash
curl https://example.com/ping
```

`GET /ping`

<h3 id="ping-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|405|Method Not Allowed|Server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create an User

<a id="opIdaccount.create"></a>

> Code samples

```bash
curl 'https://example.com/register?email=user%40example.com&password=string&cgu=true' \
  -X POST
```

`POST /register`

Create a new `User` from the registration form. The user will be created without an application or access, there is nothing he can do without another step such as creating an application or inviting access

<h3 id="create-an-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string(email)|true|Email is the user's login, it must not have been registered|
|password|query|string|true|none|
|cgu|query|boolean|true|The user must have validated the T&Cs|
|firstname|query|string|false|none|
|lastname|query|string|false|none|
|metadata|query|[object]|false|none|

<h3 id="create-an-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="success">
This operation does not require authentication
</aside>

## Password recover by email

<a id="opIdauth.sendpassword"></a>

> Code samples

```bash
curl 'https://example.com/sendpassword?email=user%40example.com' \
  -X POST
```

`POST /sendpassword`

Send a forgotten_password_token by email to recover password

<h3 id="password-recover-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string(email)|true|Email for login|

<h3 id="password-recover-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|None|
|422|Unprocessable Entity|Email does not exists|None|

<aside class="success">
This operation does not require authentication
</aside>

## Push to purchase collector

<a id="opIdadmin.purchaseCollector.push"></a>

> Code samples

```bash
curl 'https://example.com/services/collector?app_identifiant=string&collector_key=string&invoice=string' \
  -X POST
```

`POST /services/collector`

<h3 id="push-to-purchase-collector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_identifiant|query|string|true|none|
|collector_key|query|string|true|none|
|invoice|query|string(binary)|true|Invoice or receipt file (pdf or image)|

<h3 id="push-to-purchase-collector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get VIES database informations from SIREN

<a id="opIdservices.vies.get"></a>

> Code samples

```bash
curl https://example.com/services/vies/string
```

`GET /services/vies/{siren}`

<h3 id="get-vies-database-informations-from-siren-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siren|path|string|true|none|

<h3 id="get-vies-database-informations-from-siren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-accountcategories">AccountCategories</h1>

## List categories

<a id="opIdapp.accounting.categories.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/accountcategories/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/accountcategories/`

<h3 id="list-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": 0,
    "name": "string",
    "type": "string"
  }
]
```

<h3 id="list-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountCategory](#schemaaccountcategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a category

<a id="opIdapp.accounting.categories.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/accountcategories/ \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/accountcategories/`

<h3 id="create-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|false|none|
|description|query|string|false|none|
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "type": "string"
}
```

<h3 id="create-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountCategory](#schemaaccountcategory)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a category

<a id="opIdapp.accounting.categories.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/accountcategories/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/accountcategories/{id}`

<h3 id="get-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "type": "string"
}
```

<h3 id="get-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountCategory](#schemaaccountcategory)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a category

<a id="opIdapp.accounting.categories.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/accountcategories/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/accountcategories/{id}`

<h3 id="update-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID|
|name|query|string|false|none|
|description|query|string|false|none|
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "type": "string"
}
```

<h3 id="update-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountCategory](#schemaaccountcategory)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a category

<a id="opIdapp.accounting.categories.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/accountcategories/0 \
  -X DELETE
```

`DELETE /apps/{appId}/accountcategories/{id}`

<h3 id="remove-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID|

<h3 id="remove-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-entries">Entries</h1>

## List accounting entries

<a id="opIdapp.accounting.entries.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounting_entries/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/accounting_entries/`

<h3 id="list-accounting-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  }
]
```

<h3 id="list-accounting-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-accounting-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-accounts">Accounts</h1>

## List Account

<a id="opIdapp.accounting.accounts.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounts/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/accounts/`

<h3 id="list-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  }
]
```

<h3 id="list-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Account

<a id="opIdapp.accounting.accounts.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounts/ \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/accounts/`

<h3 id="create-a-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|journalcode|query|string|false|none|
|name|query|string|false|none|
|description|query|string|false|none|
|keywords|query|string|false|none|
|accounting_number|query|string|false|none|
|is_cashflow|query|boolean|false|none|
|is_sales|query|boolean|false|none|
|is_purchase|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "description": "string",
  "editable": true,
  "id": 0,
  "is_associate": true,
  "is_cashflow": true,
  "is_purchase": true,
  "is_sales": true,
  "is_various": true,
  "journalcode": "string",
  "keywords": "string",
  "name": "string",
  "need_charge": true,
  "need_employee": true,
  "need_invoice": true,
  "technical_name": "string"
}
```

<h3 id="create-a-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Account

<a id="opIdapp.accounting.accounts.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounts/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/accounts/{id}`

<h3 id="get-a-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Account|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "description": "string",
  "editable": true,
  "id": 0,
  "is_associate": true,
  "is_cashflow": true,
  "is_purchase": true,
  "is_sales": true,
  "is_various": true,
  "journalcode": "string",
  "keywords": "string",
  "name": "string",
  "need_charge": true,
  "need_employee": true,
  "need_invoice": true,
  "technical_name": "string"
}
```

<h3 id="get-a-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Account

<a id="opIdapp.accounting.accounts.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounts/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/accounts/{id}`

<h3 id="update-a-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Account|
|journalcode|query|string|false|none|
|name|query|string|false|none|
|description|query|string|false|none|
|keywords|query|string|false|none|
|accounting_number|query|string|false|none|
|is_cashflow|query|boolean|false|none|
|is_sales|query|boolean|false|none|
|is_purchase|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "description": "string",
  "editable": true,
  "id": 0,
  "is_associate": true,
  "is_cashflow": true,
  "is_purchase": true,
  "is_sales": true,
  "is_various": true,
  "journalcode": "string",
  "keywords": "string",
  "name": "string",
  "need_charge": true,
  "need_employee": true,
  "need_invoice": true,
  "technical_name": "string"
}
```

<h3 id="update-a-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a Account

<a id="opIdapp.accounting.accounts.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/accounts/0 \
  -X DELETE
```

`DELETE /apps/{appId}/accounts/{id}`

<h3 id="remove-a-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Account|

<h3 id="remove-a-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-attachments">Attachments</h1>

## List attachments

<a id="opIdapp.attachments.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/attachments \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/attachments`

Get list of attachments

<h3 id="list-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "attachable_id": "string",
    "attachable_type": "string",
    "file_url": "string",
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="list-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-attachments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Recreate S.A.P attestations

<a id="opIdapp.sapAttestations.generateSapAttestations"></a>

> Code samples

```bash
curl https://example.com/apps/0/attachments \
  -X PUT
```

`PUT /apps/{appId}/attachments`

<h3 id="recreate-sap-attestations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="recreate-sap-attestations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|
|422|Unprocessable Entity|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file on an object

<a id="opIdapp.attachments.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/attachments?type=none' \
  -X POST
```

`POST /apps/{appId}/attachments`

<h3 id="attach-a-file-on-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|type|query|string|true|Object to attach file|
|attachable_id|query|integer|false|Object id|
|file|query|string(binary)|false|File to attach|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|none|
|type|purchase|
|type|invoice|
|type|quote|
|type|transaction|
|type|relationship|

<h3 id="attach-a-file-on-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get attachment by id

<a id="opIdapp.attachments.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/attachments/0
```

`GET /apps/{appId}/attachments/{id}`

<h3 id="get-attachment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Attachment id|

<h3 id="get-attachment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file from id

<a id="opIdapp.attachments.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/attachments/0 \
  -X DELETE
```

`DELETE /apps/{appId}/attachments/{id}`

<h3 id="detach-a-file-from-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Attachment id|

<h3 id="detach-a-file-from-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-attachments-1">attachments</h1>

## Download a list of attachments in pdf into a .zip file

<a id="opIdapp.attachments.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/attachments/download?ids=string&type=sap'
```

`GET /apps/{appId}/attachments/download`

<h3 id="download-a-list-of-attachments-in-pdf-into-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|string|true|Array of attachments id|
|type|query|string|true|Type of attachment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sap|

<h3 id="download-a-list-of-attachments-in-pdf-into-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a list of SAP attestations in pdf into a .zip file

<a id="opIdapp.sapAttestations.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/attachments/sap-download?ids=string&type=sap'
```

`GET /apps/{appId}/attachments/sap-download`

<h3 id="download-a-list-of-sap-attestations-in-pdf-into-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|string|true|Array of attachments id|
|type|query|string|true|Type of attachment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sap|

<h3 id="download-a-list-of-sap-attestations-in-pdf-into-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the attachment as pdf

<a id="opIdapp.attachments.RedirectToPublicUrl"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/attachments/0/pdf?random=0'
```

`GET /apps/{appId}/attachments/{id}/pdf`

<h3 id="download-the-attachment-as-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Attachment id to download|
|random|query|integer|true|random number to force fresh pdf|

<h3 id="download-the-attachment-as-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-bankdetails">BankDetails</h1>

## List BankDetails

<a id="opIdapp.documents.sales.bankdetails.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/bankdetails \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/bankdetails`

<h3 id="list-bankdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "bic": "string",
    "iban": "string",
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="list-bankdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-bankdetails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BankDetails](#schemabankdetails)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a BankDetails

<a id="opIdapp.documents.sales.bankdetails.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/bankdetails \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/bankdetails`

<h3 id="create-a-bankdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|false|none|
|iban|query|string|false|none|
|bic|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "bic": "string",
  "iban": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-bankdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankDetails](#schemabankdetails)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a BankDetails

<a id="opIdapp.documents.sales.bankdetails.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/bankdetails/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/bankdetails/{id}`

<h3 id="get-a-bankdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of BankDetails|

> Example responses

> 200 Response

```json
{
  "bic": "string",
  "iban": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="get-a-bankdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankDetails](#schemabankdetails)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a BankDetails

<a id="opIdapp.documents.sales.bankdetails.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/bankdetails/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/bankdetails/{id}`

<h3 id="update-a-bankdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of BankDetails|
|name|query|string|false|none|
|iban|query|string|false|none|
|bic|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "bic": "string",
  "iban": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-bankdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankDetails](#schemabankdetails)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a BankDetails

<a id="opIdapp.documents.sales.bankdetails.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/bankdetails/0 \
  -X DELETE
```

`DELETE /apps/{appId}/bankdetails/{id}`

<h3 id="remove-a-bankdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of BankDetails|

<h3 id="remove-a-bankdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-sources">Sources</h1>

## List CashflowSource

<a id="opIdapp.cashflow.cashflowsources.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/cashflowsources/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/cashflowsources/`

<h3 id="list-cashflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-cashflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-cashflowsource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CashflowSource](#schemacashflowsource)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a CashflowSource

<a id="opIdapp.cashflow.cashflowsources.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/cashflowsources/ \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/cashflowsources/`

<h3 id="create-a-cashflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|false|none|
|identifiant|query|string|false|none|
|type|query|string|false|none|
|balance_amount|query|integer|false|none|
|account_type|query|string|false|none|
|parent_cashflow_source_id|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|bank|
|type|cashdesk|
|type|waiting|
|account_type|checking|
|account_type|card|
|account_type|savings|
|account_type|special|
|account_type|securities|
|account_type|loan|
|account_type|life_insurance|
|account_type|unknown|
|account_type|pending|
|account_type|share_savings_plan|

> Example responses

> 200 Response

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {},
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-cashflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowSource](#schemacashflowsource)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a CashflowSource

<a id="opIdapp.cashflow.cashflowsources.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/cashflowsources/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/cashflowsources/{id}`

<h3 id="get-a-cashflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of CashflowSource|

> Example responses

> 200 Response

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {},
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-cashflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowSource](#schemacashflowsource)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a CashflowSource

<a id="opIdapp.cashflow.cashflowsources.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/cashflowsources/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/cashflowsources/{id}`

<h3 id="update-a-cashflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of CashflowSource|
|name|query|string|false|none|
|identifiant|query|string|false|none|
|type|query|string|false|none|
|balance_amount|query|integer|false|none|
|account_type|query|string|false|none|
|parent_cashflow_source_id|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|bank|
|type|cashdesk|
|type|waiting|
|account_type|checking|
|account_type|card|
|account_type|savings|
|account_type|special|
|account_type|securities|
|account_type|loan|
|account_type|life_insurance|
|account_type|unknown|
|account_type|pending|
|account_type|share_savings_plan|

> Example responses

> 200 Response

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {},
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-cashflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowSource](#schemacashflowsource)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a CashflowSource

<a id="opIdapp.cashflow.cashflowsources.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/cashflowsources/0 \
  -X DELETE
```

`DELETE /apps/{appId}/cashflowsources/{id}`

<h3 id="remove-a-cashflowsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of CashflowSource|

<h3 id="remove-a-cashflowsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-emails">Emails</h1>

## Send emails

<a id="opIdapp.contacts.email.batch"></a>

> Code samples

```bash
curl https://example.com/apps/0/email/batch \
  -X POST
```

`POST /apps/{appId}/email/batch`

<h3 id="send-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|from|query|string(email)|false|none|
|messages|query|[object]|false|none|
|need_copy_bcc|query|boolean|false|none|

<h3 id="send-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send an email

<a id="opIdapp.contacts.email.send"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/email/document?recipients=user%40example.com&documents=%7B%22id%22%3A0%2C%22type%22%3A%22invoice%22%7D' \
  -X POST
```

`POST /apps/{appId}/email/document`

<h3 id="send-an-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|from|query|string(email)|false|none|
|recipients|query|[string(email)]|true|none|
|recipients_cc|query|[string(email)]|false|none|
|recipients_bcc|query|[string(email)]|false|none|
|title|query|string|false|none|
|body|query|string|false|none|
|documents|query|[object]|true|none|
|need_copy_bcc|query|boolean|false|none|

<h3 id="send-an-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-establishments">Establishments</h1>

## Get an establishment

<a id="opIdapp.contacts.establishments.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/establishments/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/establishments/{id}`

Get an establishment by id

<h3 id="get-an-establishment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of an establishment|

> Example responses

> 200 Response

```json
{
  "emails": [
    "user@example.com"
  ],
  "id": 0,
  "name": "string",
  "nic": "string",
  "phones": [
    "string"
  ],
  "place": {
    "administrative_area_level1": "string",
    "administrative_area_level2": "string",
    "administrative_area_level3": "string",
    "country": "string",
    "countryiso2": "string",
    "formatted_address": "string",
    "id": 0,
    "latitude": 0,
    "locality": "string",
    "longitude": 0,
    "postal_code": "string",
    "route": "string",
    "route2": "string",
    "street_number": "string",
    "sublocality": "string"
  }
}
```

<h3 id="get-an-establishment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EstablishmentIdentity](#schemaestablishmentidentity)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an establishment

<a id="opIdapp.contacts.establishments.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/establishments/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/establishments/{id}`

Update an establishment by id

<h3 id="update-an-establishment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of an establishment|
|name|query|string|false|none|
|phones|query|[string]|false|none|
|emails|query|[string]|false|none|
|nic|query|string \| null|false|Establishment number (french NIC)|
|place|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "emails": [
    "user@example.com"
  ],
  "id": 0,
  "name": "string",
  "nic": "string",
  "phones": [
    "string"
  ],
  "place": {
    "administrative_area_level1": "string",
    "administrative_area_level2": "string",
    "administrative_area_level3": "string",
    "country": "string",
    "countryiso2": "string",
    "formatted_address": "string",
    "id": 0,
    "latitude": 0,
    "locality": "string",
    "longitude": 0,
    "postal_code": "string",
    "route": "string",
    "route2": "string",
    "street_number": "string",
    "sublocality": "string"
  }
}
```

<h3 id="update-an-establishment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EstablishmentIdentity](#schemaestablishmentidentity)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an establishment

<a id="opIdapp.contacts.establishments.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/establishments/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/establishments/{id}`

Remove an establishment

<h3 id="remove-an-establishment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of establishment|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-an-establishment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-exports">Exports</h1>

## List ExportEntity

<a id="opIdapp.accounting.export.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/exports`

<h3 id="list-exportentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "entries_count": 0,
    "id": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "period_start": "1970-01-01T00:00:00Z",
    "status": "string",
    "total_credit": 0,
    "total_debit": 0,
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-exportentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-exportentity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportEntity](#schemaexportentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a ExportEntity

<a id="opIdapp.accounting.export.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/exports?until=1970-01-01T00%3A00%3A00Z' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/exports`

<h3 id="create-a-exportentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|until|query|string(date-time)|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "entries_count": 0,
  "id": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "period_start": "1970-01-01T00:00:00Z",
  "status": "string",
  "total_credit": 0,
  "total_debit": 0,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-exportentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportEntity](#schemaexportentity)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the ACD UUID for authentification

<a id="opIdapp.accounting.export.AcdComptaGetUuid"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports/acd_compta \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/exports/acd_compta`

If response UUID is empty, you must register your identifiants.

<h3 id="get-the-acd-uuid-for-authentification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
{
  "uuid": "string"
}
```

<h3 id="get-the-acd-uuid-for-authentification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="get-the-acd-uuid-for-authentification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register ACD identifiants

<a id="opIdapp.accounting.export.AcdComptaSetUuid"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/exports/acd_compta?login=string&password=string&base=string&cnx=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/exports/acd_compta`

Sinao will try to connect ACD authentification with your ids. If succed, Sinao will store your ids.

<h3 id="register-acd-identifiants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|login|query|string|true|the login provided by ACD Compta|
|password|query|string|true|the password provided by ACD Compta|
|base|query|string|true|Your ACD account number (3XXXX)|
|cnx|query|string|true|your CNX by ACD Compta|

> Example responses

> 200 Response

```json
{
  "uuid": "string"
}
```

<h3 id="register-acd-identifiants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="register-acd-identifiants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download the export entity as zip

<a id="opIdapp.accounting.export.download"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports/download
```

`GET /apps/{appId}/exports/download`

<h3 id="download-the-export-entity-as-zip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|format|query|string|false|The export format can be a FEC (universal - similar to the French legal file 'Fichier des Ecritures Comptables') or specific for accounting software|
|export_entities_ids|query|[integer]|false|none|
|start_at|query|string(date-time)|false|Automatically find export entities from a date range|
|end_at|query|string(date-time)|false|Automatically find export entities from a date range|
|since|query|string(date-time)|false|Automatically find export entities since a date|
|since_last|query|boolean|false|Automatically find the export entities since the last export downloaded|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|universal|
|format|quadra|
|format|fiducial|
|format|acd|

<h3 id="download-the-export-entity-as-zip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List ExportEntity

<a id="opIdapp.accounting.export.list_by_months"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports/months \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/exports/months`

<h3 id="list-exportentity-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "entries_count": 0,
    "id": 0,
    "period_end": "1970-01-01T00:00:00Z",
    "period_start": "1970-01-01T00:00:00Z",
    "status": "string",
    "total_credit": 0,
    "total_debit": 0,
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-exportentity-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-exportentity-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportEntity](#schemaexportentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a ExportEntity

<a id="opIdapp.accounting.export.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/exports/{id}`

<h3 id="get-a-exportentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of ExportEntity|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "entries_count": 0,
  "id": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "period_start": "1970-01-01T00:00:00Z",
  "status": "string",
  "total_credit": 0,
  "total_debit": 0,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-exportentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportEntity](#schemaexportentity)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a ExportEntity

<a id="opIdapp.accounting.export.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/exports/0 \
  -X DELETE
```

`DELETE /apps/{appId}/exports/{id}`

<h3 id="remove-a-exportentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of ExportEntity|

<h3 id="remove-a-exportentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-invoices">Invoices</h1>

## List invoices

<a id="opIdapp.documents.sales.invoices.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/invoices`

Get list of invoices

<h3 id="list-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  }
]
```

<h3 id="list-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-invoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Invoice](#schemainvoice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create an invoice

<a id="opIdapp.documents.sales.invoices.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/invoices`

Create a new invoice with an Organization or a Person. Relationship store notes, metadata and accounting settings parameters

<h3 id="create-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|contact_infos|query|object \| null|false|none|
|third_account|query|object \| null|false|none|
|title|query|string \| null|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|reference|query|string \| null|false|Free variable not display in document|
|discount|query|object|false|none|
|currency|query|string|false|none|
|legal_notice|query|string \| null|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|downpayments|query|[integer]|false|none|
|downpayment_cash|query|integer \| null|false|none|
|avoid_of|query|integer \| null|false|none|
|delivered_at|query|string(date-time) \| null|false|none|
|payment_period|query|integer \| null|false|Days count before considere this invoice as late|
|payment_methods|query|string|false|Accepted methods of payment for this invoice. Methods comma separated|
|number_from_other_software|query|string|false|Invoices imported from another software are not counted in the numbering and are not locked|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="create-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update many invoices

<a id="opIdapp.documents.sales.invoices.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/invoices/batch?data=%7B%22avoid_of%22%3A%7B%7D%2C%22delivered_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22downpayments%22%3A%5B%7B%7D%5D%2C%22invoice_of%22%3A%7B%7D%2C%22paid_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22payment_methods%22%3A%22string%22%2C%22payment_period%22%3A0%2C%22related_recurring_invoice%22%3A%7B%7D%2C%22sepa_direct_debit_exported_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22status%22%3A%22draft%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/invoices/batch`

Create or update many invoices

<h3 id="create-or-update-many-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Invoice](#schemainvoice)]|true|List of invoices. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="create-or-update-many-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete many invoices

<a id="opIdapp.documents.sales.invoices.batch_delete"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/invoices/batch?ids=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/invoices/batch`

Delete many invoices

<h3 id="delete-many-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|List of invoices ID|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-many-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a list of invoices in pdf into a .zip file

<a id="opIdapp.documents.sales.invoices.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/invoices/download?ids=0'
```

`GET /apps/{appId}/invoices/download`

<h3 id="download-a-list-of-invoices-in-pdf-into-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of invoices id|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-a-list-of-invoices-in-pdf-into-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate pdf and recalcul amounts of invoice

<a id="opIdapp.documents.sales.invoices.fresh"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/invoices/fresh?ids=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/invoices/fresh`

<h3 id="regenerate-pdf-and-recalcul-amounts-of-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of invoices id|

> Example responses

> 200 Response

```json
{}
```

<h3 id="regenerate-pdf-and-recalcul-amounts-of-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the next invoice number for preview

<a id="opIdapp.documents.sales.invoices.nextnumber"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/nextnumber
```

`GET /apps/{appId}/invoices/nextnumber`

<h3 id="get-the-next-invoice-number-for-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|written_at|query|string(date-time)|false|Write date|

<h3 id="get-the-next-invoice-number-for-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about invoices

<a id="opIdapp.documents.sales.invoices.statistics"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/statistics \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/invoices/statistics`

<h3 id="obtain-statistics-about-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="obtain-statistics-about-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get an invoice

<a id="opIdapp.documents.sales.invoices.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/invoices/{id}`

Get an Sales/Invoice object by Id

<h3 id="get-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of invoice|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="get-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an invoice

<a id="opIdapp.documents.sales.invoices.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/invoices/{id}`

Update an invoice by id

<h3 id="update-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of invoice|
|contact_infos|query|object \| null|false|none|
|third_account|query|object \| null|false|none|
|title|query|string \| null|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|reference|query|string \| null|false|Free variable not display in document|
|discount|query|object|false|none|
|currency|query|string|false|none|
|legal_notice|query|string \| null|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|downpayments|query|[integer]|false|none|
|downpayment_cash|query|integer \| null|false|none|
|avoid_of|query|integer \| null|false|none|
|delivered_at|query|string(date-time) \| null|false|none|
|payment_period|query|integer \| null|false|Days count before considere this invoice as late|
|payment_methods|query|string|false|Accepted methods of payment for this invoice. Methods comma separated|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="update-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an invoice

<a id="opIdapp.documents.sales.invoices.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/invoices/{id}`

Remove an invoice by id : only for draft

<h3 id="remove-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of invoice|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file at an invoice

<a id="opIdapp.documents.sales.invoices.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/attach \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/attach`

<h3 id="attach-a-file-at-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-at-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file at an invoice

<a id="opIdapp.documents.sales.invoices.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/invoices/{id}/attach`

<h3 id="detach-a-file-at-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-at-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a creditnote on an invoice

<a id="opIdapp.documents.sales.invoices.avoid"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/avoid \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/avoid`

<h3 id="create-a-creditnote-on-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to create a credit note|

<h3 id="create-a-creditnote-on-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Duplicate an invoice

<a id="opIdapp.documents.sales.invoices.duplicate"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/duplicate \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/duplicate`

<h3 id="duplicate-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to duplicate|

<h3 id="duplicate-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Finalize an invoice

<a id="opIdapp.documents.sales.invoices.finalize"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/finalize \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/finalize`

<h3 id="finalize-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to finalize|
|force_date|query|boolean|false|Automatically updates the date if earlier than the last invoice|

<h3 id="finalize-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the invoice as pdf

<a id="opIdapp.documents.sales.invoices.pdf"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/pdf
```

`GET /apps/{appId}/invoices/{id}/pdf`

<h3 id="download-the-invoice-as-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to download|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-the-invoice-as-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download invoice as jpeg

<a id="opIdapp.documents.sales.invoices.preview"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/preview.jpg
```

`GET /apps/{appId}/invoices/{id}/preview.jpg`

<h3 id="download-invoice-as-jpeg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to download|
|template|query|string \| null|false|Template name to generate document|
|disable_cache|query|boolean \| null|false|Force the regeneration of the preview|
|base64|query|boolean \| null|false|Get the image in base64|

<h3 id="download-invoice-as-jpeg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a tag on an invoice

<a id="opIdapp.documents.sales.invoices.tag"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/tag \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/tag`

<h3 id="add-a-tag-on-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id|
|tag|query|string|false|Tag to add|

<h3 id="add-a-tag-on-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag on an invoice

<a id="opIdapp.documents.sales.invoices.untag"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/tag \
  -X DELETE
```

`DELETE /apps/{appId}/invoices/{id}/tag`

<h3 id="delete-a-tag-on-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id|
|tag|query|string|false|Tag to delete|

<h3 id="delete-a-tag-on-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update the status of an invoice

<a id="opIdapp.documents.sales.invoices.updatestatus"></a>

> Code samples

```bash
curl https://example.com/apps/0/invoices/0/updatestatus \
  -X POST
```

`POST /apps/{appId}/invoices/{id}/updatestatus`

<h3 id="update-the-status-of-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id|
|status|query|string|false|Status to update|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|final|
|status|paid|

<h3 id="update-the-status-of-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-organization-profile">Organization profile</h1>

## Get organization profile for current app

<a id="opIdapp.organization.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/organization \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/organization`

<h3 id="get-organization-profile-for-current-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

> Example responses

> 200 Response

```json
[
  {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string",
    "app": {}
  }
]
```

<h3 id="get-organization-profile-for-current-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="get-organization-profile-for-current-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SinaoOrganization](#schemasinaoorganization)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
always_allowed
</aside>

## Update organization profile for current app

<a id="opIdapp.organization.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/organization \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/organization`

<h3 id="update-organization-profile-for-current-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|false|Company name visible on the app|
|billing_name|query|string|false|Company name for billing|
|logo|query|string(byte) \| string(uri)|false|none|
|legal_form|query|string|false|none|
|country_iso2|query|string(ISO 3166-1 alpha-2)|false|none|
|founding_date|query|string(date)|false|none|
|founding_location|query|string|false|none|
|dissolution_date|query|string(date)|false|none|
|closeaccounting_period|query|string|false|none|
|national_id|query|string|false|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|trade_directory_registration|query|string|false|France Directory Registration : Unique national ID SIRET [0-9]{9} + 'RM' + CMA identification number [0-9a-z]{2,}|
|vat_id|query|string \| null|false|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|code_naf|query|string \| null|false|French NAF Code|
|number_of_employees|query|string|false|none|
|industry|query|string|false|none|
|slogan|query|string|false|none|
|rcs|query|string|false|French. Registre du Commerce et des Sociétés|
|greffe|query|string|false|French. Tribunal de commerce|
|sap_number_registration|query|string \| null|false|NOVA agreement/registration number|
|sap_activities|query|string \| null|false|Organisation activities displayed in annual taxes customer attestation|
|sap_date_registration|query|string \| null|false|NOVA agreement/registration date|
|capital|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string",
  "app": {}
}
```

<h3 id="update-organization-profile-for-current-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SinaoOrganization](#schemasinaoorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-organizations">Organizations</h1>

## List organizations

<a id="opIdapp.contacts.organizations.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/organizations \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/organizations`

List all organizations

<h3 id="list-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  }
]
```

<h3 id="list-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="list-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ContactOrganization](#schemacontactorganization)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create an organization

<a id="opIdapp.contacts.organizations.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/organizations?name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/organizations`

Create a contact organization. This organization will be automatically completed and updated by public data. The public profile will be automatically find by NationalID

<h3 id="create-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|true|Company name visible on the app|
|billing_name|query|string|false|Company name for billing|
|logo|query|string(byte) \| string(uri)|false|none|
|legal_form|query|string|false|none|
|country_iso2|query|string(ISO 3166-1 alpha-2)|false|none|
|founding_date|query|string(date)|false|none|
|founding_location|query|string|false|none|
|dissolution_date|query|string(date)|false|none|
|vat_system|query|string|false|none|
|closeaccounting_period|query|string|false|none|
|national_id|query|string|false|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|vat_id|query|string \| null|false|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|code_naf|query|string \| null|false|French NAF Code|
|number_of_employees|query|string|false|none|
|slogan|query|string|false|none|
|rcs|query|string|false|French. Registre du Commerce et des Sociétés|
|greffe|query|string|false|French. Tribunal de commerce|
|capital|query|integer|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

<h3 id="create-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactOrganization](#schemacontactorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple organizations

<a id="opIdapp.contacts.organizations.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/organizations/batch?data=%7B%22billing_name%22%3A%22string%22%2C%22capital%22%3A0%2C%22closeaccounting_period%22%3A%22string%22%2C%22code_naf%22%3A%22string%22%2C%22country_iso2%22%3A%22string%22%2C%22dissolution_date%22%3A%221970-01-01%22%2C%22establishments%22%3A%5B%7B%22emails%22%3A%5B%22user%40example.com%22%5D%2C%22id%22%3A0%2C%22name%22%3A%22string%22%2C%22nic%22%3A%22string%22%2C%22phones%22%3A%5B%22string%22%5D%2C%22place%22%3A%7B%22administrative_area_level1%22%3A%22string%22%2C%22administrative_area_level2%22%3A%22string%22%2C%22administrative_area_level3%22%3A%22string%22%2C%22country%22%3A%22string%22%2C%22countryiso2%22%3A%22string%22%2C%22formatted_address%22%3A%22string%22%2C%22id%22%3A0%2C%22latitude%22%3A0%2C%22locality%22%3A%22string%22%2C%22longitude%22%3A0%2C%22postal_code%22%3A%22string%22%2C%22route%22%3A%22string%22%2C%22route2%22%3A%22string%22%2C%22street_number%22%3A%22string%22%2C%22sublocality%22%3A%22string%22%7D%7D%5D%2C%22founding_date%22%3A%221970-01-01%22%2C%22founding_location%22%3A%22string%22%2C%22greffe%22%3A%22string%22%2C%22id%22%3A0%2C%22legal_form%22%3A%22string%22%2C%22logo%22%3A%22http%3A%2F%2Fexample.com%22%2C%22name%22%3A%22string%22%2C%22national_id%22%3A%22string%22%2C%22number_of_employees%22%3A%22string%22%2C%22rcs%22%3A%22string%22%2C%22slogan%22%3A%22string%22%2C%22tax_id%22%3A%22string%22%2C%22vat_id%22%3A%22string%22%2C%22vat_system%22%3A%22string%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/organizations/batch`

Create a contact organization. This organization will be automatically completed and updated by public data. The public profile will be automatically find by NationalID

<h3 id="create-multiple-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[ContactOrganization](#schemacontactorganization)]|true|List of invoices. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

<h3 id="create-multiple-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactOrganization](#schemacontactorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get an organization

<a id="opIdapp.contacts.organizations.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/organizations/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/organizations/{id}`

Get an organization by id

<h3 id="get-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of organization|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

<h3 id="get-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactOrganization](#schemacontactorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an organization

<a id="opIdapp.contacts.organizations.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/organizations/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/organizations/{id}`

Update an organization by id

<h3 id="update-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of organization|
|name|query|string|false|Company name visible on the app|
|billing_name|query|string|false|Company name for billing|
|logo|query|string(byte) \| string(uri)|false|none|
|legal_form|query|string|false|none|
|country_iso2|query|string(ISO 3166-1 alpha-2)|false|none|
|founding_date|query|string(date)|false|none|
|founding_location|query|string|false|none|
|dissolution_date|query|string(date)|false|none|
|vat_system|query|string|false|none|
|closeaccounting_period|query|string|false|none|
|national_id|query|string|false|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|vat_id|query|string \| null|false|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|code_naf|query|string \| null|false|French NAF Code|
|number_of_employees|query|string|false|none|
|slogan|query|string|false|none|
|rcs|query|string|false|French. Registre du Commerce et des Sociétés|
|greffe|query|string|false|French. Tribunal de commerce|
|capital|query|integer|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

<h3 id="update-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactOrganization](#schemacontactorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an organization

<a id="opIdapp.contacts.organizations.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/organizations/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/organizations/{id}`

Remove an organization

<h3 id="remove-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of organization|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Restore an organization

<a id="opIdapp.contacts.organizations.restore"></a>

> Code samples

```bash
curl https://example.com/apps/0/organizations/0/restore \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/organizations/{id}/restore`

Restore an organization by id

<h3 id="restore-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of organization|

> Example responses

> 200 Response

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

<h3 id="restore-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactOrganization](#schemacontactorganization)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-payments">Payments</h1>

## List payments

<a id="opIdapp.payments.payments.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/payments \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/payments`

Get list of payments

<h3 id="list-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 0,
    "date": "1970-01-01T00:00:00Z",
    "document": {
      "avoid_of": {},
      "delivered_at": "1970-01-01T00:00:00Z",
      "downpayments": [
        {}
      ],
      "invoice_of": {},
      "paid_at": "1970-01-01T00:00:00Z",
      "payment_methods": "string",
      "payment_period": 0,
      "related_recurring_invoice": {},
      "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
      "status": "draft"
    },
    "document_type": "sales",
    "id": 0,
    "source": "bank",
    "transaction": {
      "amount": 0,
      "author": {
        "civility": "string",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "firstname": "string",
        "id": 0,
        "image": "http://example.com",
        "lastname": "string",
        "metadata": [
          null
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com",
        "last_access_at": "1970-01-01T00:00:00Z",
        "password_is_undefined": true,
        "updated_at": "1970-01-01T00:00:00Z"
      },
      "cashflow_source": {
        "account_type": "string",
        "balance_amount": 0,
        "created_at": "1970-01-01T00:00:00Z",
        "disabled": 0,
        "id": 0,
        "identifiant": "string",
        "name": "string",
        "parent_cashflow_source": {},
        "status": "string",
        "type": "string",
        "updated_at": "1970-01-01T00:00:00Z"
      },
      "contact": {
        "civility": "string",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "firstname": "string",
        "id": 0,
        "image": "http://example.com",
        "lastname": "string",
        "metadata": [
          null
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "details": 0,
      "id": 0,
      "label": 0,
      "lettered_at": "1970-01-01T00:00:00Z",
      "metadata": [
        null
      ],
      "method": 0,
      "received_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  }
]
```

<h3 id="list-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-payments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Payment](#schemapayment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the recipe book

<a id="opIdapp.payments.payments.recipe_book"></a>

> Code samples

```bash
curl https://example.com/apps/0/payments/recipe_book
```

`GET /apps/{appId}/payments/recipe_book`

Get a Payment object by Id

<h3 id="get-the-recipe-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="get-the-recipe-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a payment

<a id="opIdapp.payments.payments.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/payments/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/payments/{id}`

Get a Payment object by Id

<h3 id="get-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of payment|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "date": "1970-01-01T00:00:00Z",
  "document": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "document_type": "sales",
  "id": 0,
  "source": "bank",
  "transaction": {
    "amount": 0,
    "author": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "cashflow_source": {
      "account_type": "string",
      "balance_amount": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "disabled": 0,
      "id": 0,
      "identifiant": "string",
      "name": "string",
      "parent_cashflow_source": {},
      "status": "string",
      "type": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "contact": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ]
    },
    "created_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "details": 0,
    "id": 0,
    "label": 0,
    "lettered_at": "1970-01-01T00:00:00Z",
    "metadata": [
      null
    ],
    "method": 0,
    "received_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Payment](#schemapayment)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a payment

<a id="opIdapp.payments.payments.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/payments/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/payments/{id}`

Remove a payment by id

<h3 id="remove-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of quote|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reconcile a transaction or a document

<a id="opIdapp.payments.reconciliation.reconcile"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/reconcile?type=transaction&id=0&amount=0&id=0&type=account' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/reconcile`

Create a new payments and categorizations by one-to-many

<h3 id="reconcile-a-transaction-or-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|replace_all|query|boolean|false|Remove all previous reconciliations|
|type|query|string|true|Object to pay with these payments and categorizations|
|id|query|integer|true|Transaction, sales invoice or purchase invoice id to reconcile|
|movements|query|object|true|none|
|paid_at|query|string(date-time)|false|Payment date for cashdesk or waiting entries|
|rule|query|object|false|Create an auto-reconciliation rule|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|transaction|
|type|sales|
|type|purchase|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "date": "1970-01-01T00:00:00Z",
  "document": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "document_type": "sales",
  "id": 0,
  "source": "bank",
  "transaction": {
    "amount": 0,
    "author": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "cashflow_source": {
      "account_type": "string",
      "balance_amount": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "disabled": 0,
      "id": 0,
      "identifiant": "string",
      "name": "string",
      "parent_cashflow_source": {},
      "status": "string",
      "type": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "contact": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ]
    },
    "created_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "details": 0,
    "id": 0,
    "label": 0,
    "lettered_at": "1970-01-01T00:00:00Z",
    "metadata": [
      null
    ],
    "method": 0,
    "received_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="reconcile-a-transaction-or-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Payment](#schemapayment)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove payments by an object

<a id="opIdapp.payments.reconciliation.unreconcile"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/reconcile?type=transaction&id=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/reconcile`

Remove all payments of a parent object

<h3 id="remove-payments-by-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|type|query|string|true|Object to unpay with this payment|
|id|query|integer|true|Transaction, sales invoice or purchase invoice id to unreconcile|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|transaction|
|type|sales|
|type|purchase|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-payments-by-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reconcile several transactions

<a id="opIdapp.payments.reconciliation.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/reconcile/batch?data=%7B%22id%22%3A0%2C%22movements%22%3A%5B%7B%22amount%22%3A0%2C%22id%22%3A0%2C%22type%22%3A%22account%22%7D%5D%2C%22replace_all%22%3Atrue%2C%22type%22%3A%22transaction%22%7D' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/{appId}/reconcile/batch`

Create new payments and categorizations by one-to-many

<h3 id="reconcile-several-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Reconciliation](#schemareconciliation)]|true|array of reconciliation params|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="reconcile-several-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List SEPAMandate

<a id="opIdapp.payments.sepamandates.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/sepamandates/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/sepamandates/`

<h3 id="list-sepamandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "author": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "bic": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "customer": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ]
    },
    "customer_name": "string",
    "electronic_signature": "string",
    "iban": "string",
    "id": 0,
    "is_first": 0,
    "last_debit_amount": 0,
    "last_debit_at": "1970-01-01T00:00:00Z",
    "last_debit_id": 0,
    "logs_sepa_direct_debits": "string",
    "mandate_id": 0,
    "old_mandate_id": 0,
    "signed_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-sepamandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-sepamandate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SEPAMandate](#schemasepamandate)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a SEPAMandate

<a id="opIdapp.payments.sepamandates.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/sepamandates/?mandate_id=string&signed_at=1970-01-01T00%3A00%3A00Z&iban=string&bic=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/sepamandates/`

<h3 id="create-a-sepamandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|customer_organization_id|query|integer|false|none|
|customer_person_id|query|integer|false|none|
|old_mandate_id|query|integer|false|none|
|mandate_id|query|string|true|none|
|signed_at|query|string(date-time)|true|none|
|electronic_signature|query|string|false|none|
|customer_name|query|string|false|none|
|iban|query|string|true|none|
|bic|query|string|true|none|
|is_first|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "bic": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "customer_name": "string",
  "electronic_signature": "string",
  "iban": "string",
  "id": 0,
  "is_first": 0,
  "last_debit_amount": 0,
  "last_debit_at": "1970-01-01T00:00:00Z",
  "last_debit_id": 0,
  "logs_sepa_direct_debits": "string",
  "mandate_id": 0,
  "old_mandate_id": 0,
  "signed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-sepamandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SEPAMandate](#schemasepamandate)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Preview sepa credit transfer file

<a id="opIdapp.payments.sepacredittransfer.preview"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/sepamandates/credittransfer?ids=0' \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/sepamandates/credittransfer`

<h3 id="preview-sepa-credit-transfer-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="preview-sepa-credit-transfer-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Preview sepa credit transfer file

<a id="opIdapp.payments.sepacredittransfer.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/sepamandates/credittransfer?ids=0' \
  -X POST
```

`POST /apps/{appId}/sepamandates/credittransfer`

<h3 id="preview-sepa-credit-transfer-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|none|
|amounts|query|[integer]|false|Optional array with amounts (keys must to correspond to ids)|
|debtor_name|query|string|false|none|
|debtor_iban|query|string|false|none|
|debtor_bic|query|string|false|none|
|btchBookg|query|integer|false|none|

<h3 id="preview-sepa-credit-transfer-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Preview sepa direct debit file

<a id="opIdapp.payments.sepadirectdebit.preview"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/sepamandates/directdebit?invoices_ids=0' \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/sepamandates/directdebit`

<h3 id="preview-sepa-direct-debit-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|invoices_ids|query|[integer]|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="preview-sepa-direct-debit-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download sepa direct debit file

<a id="opIdapp.payments.sepadirectdebit.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/sepamandates/directdebit?invoices_ids=0' \
  -X POST
```

`POST /apps/{appId}/sepamandates/directdebit`

<h3 id="download-sepa-direct-debit-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|invoices_ids|query|[integer]|true|none|
|amounts|query|[integer]|false|Optional array with amounts (keys must to correspond to invoices_ids)|
|creditor_name|query|string|false|none|
|creditor_iban|query|string|false|none|
|creditor_bic|query|string|false|none|
|creditor_ics|query|string|false|none|
|date|query|string(date-time)|false|none|

<h3 id="download-sepa-direct-debit-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a SEPAMandate

<a id="opIdapp.payments.sepamandates.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/sepamandates/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/sepamandates/{id}`

<h3 id="get-a-sepamandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SEPAMandate|

> Example responses

> 200 Response

```json
{
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "bic": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "customer_name": "string",
  "electronic_signature": "string",
  "iban": "string",
  "id": 0,
  "is_first": 0,
  "last_debit_amount": 0,
  "last_debit_at": "1970-01-01T00:00:00Z",
  "last_debit_id": 0,
  "logs_sepa_direct_debits": "string",
  "mandate_id": 0,
  "old_mandate_id": 0,
  "signed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-sepamandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SEPAMandate](#schemasepamandate)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a SEPAMandate

<a id="opIdapp.payments.sepamandates.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/sepamandates/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/sepamandates/{id}`

<h3 id="update-a-sepamandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SEPAMandate|
|customer_organization_id|query|integer|false|none|
|customer_person_id|query|integer|false|none|
|old_mandate_id|query|integer|false|none|
|mandate_id|query|string|false|none|
|signed_at|query|string(date-time)|false|none|
|electronic_signature|query|string|false|none|
|customer_name|query|string|false|none|
|iban|query|string|false|none|
|bic|query|string|false|none|
|is_first|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "bic": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "customer_name": "string",
  "electronic_signature": "string",
  "iban": "string",
  "id": 0,
  "is_first": 0,
  "last_debit_amount": 0,
  "last_debit_at": "1970-01-01T00:00:00Z",
  "last_debit_id": 0,
  "logs_sepa_direct_debits": "string",
  "mandate_id": 0,
  "old_mandate_id": 0,
  "signed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-sepamandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SEPAMandate](#schemasepamandate)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a SEPAMandate

<a id="opIdapp.payments.sepamandates.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/sepamandates/0 \
  -X DELETE
```

`DELETE /apps/{appId}/sepamandates/{id}`

<h3 id="remove-a-sepamandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of SEPAMandate|

<h3 id="remove-a-sepamandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Login URSSAF

<a id="opIdapp.payments.urssaftiers.auth"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/urssaf/auth?client_id=string&client_secret=string' \
  -X POST
```

`POST /apps/{appId}/urssaf/auth`

<h3 id="login-urssaf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|client_id|query|string|true|none|
|client_secret|query|string|true|none|

<h3 id="login-urssaf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully logged, credentials has been saved|None|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Invalid credentials|None|
|404|Not Found|App was not found|None|
|422|Unprocessable Entity|All fields are required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get status of a payment

<a id="opIdapp.payments.urssaftiers.get_status"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/urssaf/payment?invoices_ids=0' \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/urssaf/payment`

<h3 id="get-status-of-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|invoices_ids|query|[integer]|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-status-of-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send URSSAF request payment

<a id="opIdapp.payments.urssaftiers.send_payments"></a>

> Code samples

```bash
curl https://example.com/apps/0/urssaf/payment \
  -X POST
```

`POST /apps/{appId}/urssaf/payment`

<h3 id="send-urssaf-request-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="send-urssaf-request-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Preview URSSAF request payment

<a id="opIdapp.payments.urssaftiers.preview"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/urssaf/preview?type=invoice&ids=0' \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/urssaf/preview`

<h3 id="preview-urssaf-request-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|type|query|string|true|none|
|ids|query|[integer]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|invoice|
|type|quote|
|type|contact|

> Example responses

> 200 Response

```json
{}
```

<h3 id="preview-urssaf-request-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Register a person to URSSAF and create him a mandate

<a id="opIdapp.payments.urssaftiers.register_customer"></a>

> Code samples

```bash
curl https://example.com/apps/0/urssaf/register_customer \
  -X POST
```

`POST /apps/{appId}/urssaf/register_customer`

<h3 id="register-a-person-to-urssaf-and-create-him-a-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|

<h3 id="register-a-person-to-urssaf-and-create-him-a-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-persons">Persons</h1>

## List persons

<a id="opIdapp.contacts.persons.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/persons \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/persons`

Get all persons

<h3 id="list-persons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  }
]
```

<h3 id="list-persons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="list-persons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ContactPerson](#schemacontactperson)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a person

<a id="opIdapp.contacts.persons.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/persons?lastname=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/persons`

Create a new person. Represent a private contact

<h3 id="create-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|civility|query|string|false|Civility is the lastname prefix|
|lastname|query|string|true|none|
|firstname|query|string|false|none|
|picture|query|string(byte) \| string(uri)|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

<h3 id="create-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactPerson](#schemacontactperson)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple persons

<a id="opIdapp.contacts.persons.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/persons/batch?data=%7B%22civility%22%3A%22string%22%2C%22establishments%22%3A%5B%7B%22emails%22%3A%5B%22user%40example.com%22%5D%2C%22id%22%3A0%2C%22name%22%3A%22string%22%2C%22nic%22%3A%22string%22%2C%22phones%22%3A%5B%22string%22%5D%2C%22place%22%3A%7B%22administrative_area_level1%22%3A%22string%22%2C%22administrative_area_level2%22%3A%22string%22%2C%22administrative_area_level3%22%3A%22string%22%2C%22country%22%3A%22string%22%2C%22countryiso2%22%3A%22string%22%2C%22formatted_address%22%3A%22string%22%2C%22id%22%3A0%2C%22latitude%22%3A0%2C%22locality%22%3A%22string%22%2C%22longitude%22%3A0%2C%22postal_code%22%3A%22string%22%2C%22route%22%3A%22string%22%2C%22route2%22%3A%22string%22%2C%22street_number%22%3A%22string%22%2C%22sublocality%22%3A%22string%22%7D%7D%5D%2C%22firstname%22%3A%22string%22%2C%22image%22%3A%22http%3A%2F%2Fexample.com%22%2C%22lastname%22%3A%22string%22%2C%22metadata%22%3A%5Bnull%5D%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/persons/batch`

Create a new person. Represent a private contact

<h3 id="create-multiple-persons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[ContactPerson](#schemacontactperson)]|true|List of persons. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

<h3 id="create-multiple-persons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactPerson](#schemacontactperson)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a person

<a id="opIdapp.contacts.persons.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/persons/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/persons/{id}`

Get a person by id

<h3 id="get-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of a person|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

<h3 id="get-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactPerson](#schemacontactperson)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a person

<a id="opIdapp.contacts.persons.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/persons/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/persons/{id}`

Update a person by id

<h3 id="update-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of a person|
|civility|query|string \| null|false|Civility is the lastname prefix|
|lastname|query|string|false|none|
|firstname|query|string|false|none|
|picture|query|string(byte) \| string(uri)|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

<h3 id="update-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactPerson](#schemacontactperson)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a person

<a id="opIdapp.contacts.persons.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/persons/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/persons/{id}`

Remove an person

<h3 id="remove-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of person|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Restore a person

<a id="opIdapp.contacts.persons.restore"></a>

> Code samples

```bash
curl https://example.com/apps/0/persons/0/restore \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/persons/{id}/restore`

Restore a person by id

<h3 id="restore-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of a person|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

<h3 id="restore-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactPerson](#schemacontactperson)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-products">Products</h1>

## List products

<a id="opIdapp.catalog.products.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/products \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/products`

Get list of products

<h3 id="list-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "accounting_number": "string",
    "amount_accurately": 0,
    "category": {},
    "currency": "string",
    "description": "string",
    "id": 0,
    "image": "string",
    "intangible": true,
    "lifetime": 0,
    "metadata": [
      null
    ],
    "name": "string",
    "quantity_name": "string",
    "reference": "string",
    "tags": [
      "string"
    ],
    "unity": "string",
    "vat_percent": 0
  }
]
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Product](#schemaproduct)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a product

<a id="opIdapp.catalog.products.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/products?name=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/products`

Create a new product

<h3 id="create-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|name|query|string|true|none|
|amount|query|integer|false|Price without taxes in cents|
|amount_accurately|query|integer|false|Price without taxes in cents / 1000|
|vat_percent|query|integer|false|Taxe rate in cents|
|image|query|string(binary) \| string(uri)|false|none|
|lifetime|query|integer|false|Product life time in seconds|
|description|query|string|false|Product description|
|type|query|string|false|Is a service or a product ?|
|quantity_name|query|string|false|Name of the quantity: days, liters, m2, m3...|
|reference|query|string|false|none|
|account_id|query|string|false|none|
|tags|query|[object(string)]|false|none|
|category_id|query|integer|false|none|
|metadata|query|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|product|
|type|service|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "amount_accurately": 0,
  "category": {},
  "currency": "string",
  "description": "string",
  "id": 0,
  "image": "string",
  "intangible": true,
  "lifetime": 0,
  "metadata": [
    null
  ],
  "name": "string",
  "quantity_name": "string",
  "reference": "string",
  "tags": [
    "string"
  ],
  "unity": "string",
  "vat_percent": 0
}
```

<h3 id="create-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Product](#schemaproduct)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple products

<a id="opIdapp.catalog.products.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/products/batch?data=%7B%22accounting_number%22%3A%22string%22%2C%22amount_accurately%22%3A0%2C%22category%22%3A%7B%7D%2C%22currency%22%3A%22string%22%2C%22description%22%3A%22string%22%2C%22image%22%3A%22string%22%2C%22intangible%22%3Atrue%2C%22lifetime%22%3A0%2C%22metadata%22%3A%5Bnull%5D%2C%22name%22%3A%22string%22%2C%22quantity_name%22%3A%22string%22%2C%22reference%22%3A%22string%22%2C%22tags%22%3A%5B%22string%22%5D%2C%22unity%22%3A%22string%22%2C%22vat_percent%22%3A0%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/products/batch`

Create a new product

<h3 id="create-multiple-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Product](#schemaproduct)]|true|List of products. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "amount_accurately": 0,
  "category": {},
  "currency": "string",
  "description": "string",
  "id": 0,
  "image": "string",
  "intangible": true,
  "lifetime": 0,
  "metadata": [
    null
  ],
  "name": "string",
  "quantity_name": "string",
  "reference": "string",
  "tags": [
    "string"
  ],
  "unity": "string",
  "vat_percent": 0
}
```

<h3 id="create-multiple-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Product](#schemaproduct)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a product

<a id="opIdapp.catalog.products.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/products/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/products/{id}`

Get a Product object by Id

<h3 id="get-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of product|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "amount_accurately": 0,
  "category": {},
  "currency": "string",
  "description": "string",
  "id": 0,
  "image": "string",
  "intangible": true,
  "lifetime": 0,
  "metadata": [
    null
  ],
  "name": "string",
  "quantity_name": "string",
  "reference": "string",
  "tags": [
    "string"
  ],
  "unity": "string",
  "vat_percent": 0
}
```

<h3 id="get-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Product](#schemaproduct)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a product

<a id="opIdapp.catalog.products.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/products/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/products/{id}`

Update a product by id

<h3 id="update-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of product|
|name|query|string|false|none|
|amount|query|integer|false|Price without taxes in cents|
|amount_accurately|query|integer|false|Price without taxes in cents / 1000|
|vat_percent|query|integer|false|Taxe rate in cents|
|image|query|string(binary) \| string(uri)|false|none|
|lifetime|query|integer|false|Product life time in seconds|
|description|query|string|false|Product description|
|type|query|string|false|Is a service or a product ?|
|quantity_name|query|string|false|Name of the quantity: days, liters, m2, m3...|
|reference|query|string|false|none|
|account_id|query|string|false|none|
|tags|query|[object(string)]|false|none|
|category_id|query|integer|false|none|
|metadata|query|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|product|
|type|service|

> Example responses

> 200 Response

```json
{
  "accounting_number": "string",
  "amount_accurately": 0,
  "category": {},
  "currency": "string",
  "description": "string",
  "id": 0,
  "image": "string",
  "intangible": true,
  "lifetime": 0,
  "metadata": [
    null
  ],
  "name": "string",
  "quantity_name": "string",
  "reference": "string",
  "tags": [
    "string"
  ],
  "unity": "string",
  "vat_percent": 0
}
```

<h3 id="update-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Product](#schemaproduct)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a product

<a id="opIdapp.catalog.products.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/products/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/products/{id}`

Remove a product by id

<h3 id="remove-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of quote|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file

<a id="opIdapp.catalog.products.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/products/0/attach \
  -X POST
```

`POST /apps/{appId}/products/{id}/attach`

<h3 id="attach-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file

<a id="opIdapp.catalog.products.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/products/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/products/{id}/attach`

<h3 id="detach-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-stocks">Stocks</h1>

## List stocks

<a id="opIdapp.catalog.stocks.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/productstocks`

Get list of stocks

<h3 id="list-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "bar_code": 0,
    "cost_amount": 0,
    "entered_at": 0,
    "expired_at": 0,
    "id": 0,
    "initial_quantity": 0,
    "location": 0,
    "product": {},
    "product_stocks_movements": [
      {}
    ],
    "purchase": {
      "account": {
        "accounting_number": "string",
        "description": "string",
        "editable": true,
        "id": 0,
        "is_associate": true,
        "is_cashflow": true,
        "is_purchase": true,
        "is_sales": true,
        "is_various": true,
        "journalcode": "string",
        "keywords": "string",
        "name": "string",
        "need_charge": true,
        "need_employee": true,
        "need_invoice": true,
        "technical_name": "string"
      },
      "accounted_at": "1970-01-01T00:00:00Z",
      "amount": 0,
      "amount_net_foreign_currency": 0,
      "amount_tax": 0,
      "balance": {
        "completed": true,
        "due": 0,
        "meaning": "completed",
        "paid": 0,
        "remaining": 0
      },
      "billed_at": "1970-01-01T00:00:00Z",
      "comment": "string",
      "completed_at": "1970-01-01T00:00:00Z",
      "foreign_currency": "string",
      "id": 0,
      "is_late": true,
      "md5": "string",
      "paid_at": "1970-01-01T00:00:00Z",
      "payment_account_number": "string",
      "payment_deadline_at": "1970-01-01T00:00:00Z",
      "payment_iban": "string",
      "payment_routing_number": "string",
      "payment_swift": "string",
      "picture": "string",
      "status": "new",
      "supplier": {
        "billing_name": "string",
        "capital": 0,
        "closeaccounting_period": "string",
        "code_naf": "string",
        "country_iso2": "string",
        "dissolution_date": "1970-01-01",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "founding_date": "1970-01-01",
        "founding_location": "string",
        "greffe": "string",
        "id": 0,
        "legal_form": "string",
        "logo": "http://example.com",
        "name": "string",
        "national_id": "string",
        "number_of_employees": "string",
        "rcs": "string",
        "slogan": "string",
        "tax_id": "string",
        "vat_id": "string",
        "vat_system": "string"
      },
      "supplier_name": "string",
      "tags": [
        "string"
      ],
      "title": "string",
      "vat_detail": {},
      "vat_repayment": "payment",
      "will_be_late_at": "1970-01-01T00:00:00Z"
    },
    "quantity_in": 0,
    "quantity_out": 0,
    "sales_lines": [
      {}
    ],
    "use_duration": 0
  }
]
```

<h3 id="list-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-stocks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductStock](#schemaproductstock)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a stocks

<a id="opIdapp.catalog.stocks.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/productstocks?product_id=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productstocks`

Create a new stocks

<h3 id="create-a-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|product_id|query|integer|true|Parent object|
|purchase_id|query|integer|false|Purchase that generated the stock if exists|
|quantity|query|integer|false|The initial quantity will no longer be modifiable. To change the quantity manually, use the `destruct` endpoint|
|bar_code|query|string|false|none|
|location|query|string|false|none|
|entered_at|query|string(date-time)|false|none|
|expired_at|query|string(date-time)|false|none|
|cost_amount|query|integer|false|none|
|use_duration|query|integer|false|Use duration in seconds|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="create-a-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a stocks

<a id="opIdapp.catalog.stocks.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/productstocks/{id}`

Get a Product object by Id

<h3 id="get-a-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="get-a-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a stocks

<a id="opIdapp.catalog.stocks.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productstocks/{id}`

Update a stocks by id

<h3 id="update-a-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|
|purchase_id|query|integer|false|Purchase that generated the stock if exists|
|bar_code|query|string|false|none|
|location|query|string|false|none|
|entered_at|query|string(date-time)|false|none|
|expired_at|query|string(date-time)|false|none|
|cost_amount|query|integer|false|none|
|use_duration|query|integer|false|Use duration in seconds|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="update-a-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a stocks

<a id="opIdapp.catalog.stocks.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/productstocks/{id}`

Remove a stocks by id

<h3 id="remove-a-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Destruct a quantity of stock (forgotten, destructed, expirated stock...)

<a id="opIdapp.catalog.stocks.destruct"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks/0/destruct \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productstocks/{id}/destruct`

Update a stocks by id to reduce quantity of stocks

<h3 id="destruct-a-quantity-of-stock-forgotten-destructed-expirated-stock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|
|quantity|query|integer|false|Quantity to destruct|
|comment|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="destruct-a-quantity-of-stock-forgotten-destructed-expirated-stock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Consider part of the stock as back

<a id="opIdapp.catalog.stocks.rental_back"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/productstocks/0/rental/back?quantity=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productstocks/{id}/rental/back`

Update the amount of stocks available through the return of rented stocks

<h3 id="consider-part-of-the-stock-as-back-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|
|quantity|query|integer|true|Quantity to return in stocks|
|current_return_date|query|string(date-time)|false|none|
|use_duration|query|integer|false|Usage duration in seconds|
|comment|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="consider-part-of-the-stock-as-back-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Consider part of the stock as rented

<a id="opIdapp.catalog.stocks.rental_exit"></a>

> Code samples

```bash
curl https://example.com/apps/0/productstocks/0/rental/exit \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/productstocks/{id}/rental/exit`

Updates the quantity of available stocks and provides for a stocks return date

<h3 id="consider-part-of-the-stock-as-rented-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of stocks|
|quantity|query|integer|false|Quantity to rent|
|future_return_date|query|string(date-time)|false|none|
|comment|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {},
  "product_stocks_movements": [
    {}
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {}
  ],
  "use_duration": 0
}
```

<h3 id="consider-part-of-the-stock-as-rented-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProductStock](#schemaproductstock)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-purchases">Purchases</h1>

## List purchases

<a id="opIdapp.documents.purchases.purchases.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/purchases`

Get list of purchases

<h3 id="list-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|
|expand|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|account|
|expand|supplier|
|expand|balance|

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-purchases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Purchase](#schemapurchase)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a purchase

<a id="opIdapp.documents.purchases.purchases.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/purchases`

Create a new purchase with an Organization. Relationship store notes, metadata and accounting settings parameters

<h3 id="create-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|invoice|query|string(binary)|false|Invoice or receipt file (pdf or image)|
|account_id|query|integer|false|none|
|supplier_organization_id|query|integer|false|none|
|title|query|string|false|none|
|supplier_name|query|string|false|none|
|amount|query|integer|false|none|
|amount_tax|query|integer|false|none|
|currency|query|string|false|none|
|vat_detail|query|object|false|none|
|billed_at|query|string(date)|false|none|
|comment|query|integer|false|none|
|tags|query|[object(string)]|false|none|
|vat_repayment|query|string|false|none|
|payment_deadline_at|query|string(date) \| null|false|none|
|payment_account_number|query|string \| null|false|none|
|payment_routing_number|query|string \| null|false|none|
|payment_swift|query|string \| null|false|none|
|payment_iban|query|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vat_repayment|payment|
|vat_repayment|billing|

> Example responses

> 200 Response

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "accounted_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "amount_net_foreign_currency": 0,
  "amount_tax": 0,
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "billed_at": "1970-01-01T00:00:00Z",
  "comment": "string",
  "completed_at": "1970-01-01T00:00:00Z",
  "foreign_currency": "string",
  "id": 0,
  "is_late": true,
  "md5": "string",
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_account_number": "string",
  "payment_deadline_at": "1970-01-01T00:00:00Z",
  "payment_iban": "string",
  "payment_routing_number": "string",
  "payment_swift": "string",
  "picture": "string",
  "status": "new",
  "supplier": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  },
  "supplier_name": "string",
  "tags": [
    "string"
  ],
  "title": "string",
  "vat_detail": {},
  "vat_repayment": "payment",
  "will_be_late_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Purchase](#schemapurchase)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update many purchases

<a id="opIdapp.documents.purchases.purchases.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/purchases/batch?data=%7B%22account%22%3A%7B%22accounting_number%22%3A%22string%22%2C%22description%22%3A%22string%22%2C%22editable%22%3Atrue%2C%22id%22%3A0%2C%22is_associate%22%3Atrue%2C%22is_cashflow%22%3Atrue%2C%22is_purchase%22%3Atrue%2C%22is_sales%22%3Atrue%2C%22is_various%22%3Atrue%2C%22journalcode%22%3A%22string%22%2C%22keywords%22%3A%22string%22%2C%22name%22%3A%22string%22%2C%22need_charge%22%3Atrue%2C%22need_employee%22%3Atrue%2C%22need_invoice%22%3Atrue%2C%22technical_name%22%3A%22string%22%7D%2C%22accounted_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22amount%22%3A0%2C%22amount_tax%22%3A0%2C%22balance%22%3A%7B%22completed%22%3Atrue%2C%22due%22%3A0%2C%22meaning%22%3A%22completed%22%2C%22paid%22%3A0%2C%22remaining%22%3A0%7D%2C%22billed_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22comment%22%3A%22string%22%2C%22completed_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22id%22%3A0%2C%22is_late%22%3Atrue%2C%22md5%22%3A%22string%22%2C%22paid_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22payment_account_number%22%3A%22string%22%2C%22payment_deadline_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22payment_iban%22%3A%22string%22%2C%22payment_routing_number%22%3A%22string%22%2C%22payment_swift%22%3A%22string%22%2C%22picture%22%3A%22string%22%2C%22status%22%3A%22new%22%2C%22supplier%22%3A%7B%22billing_name%22%3A%22string%22%2C%22capital%22%3A0%2C%22closeaccounting_period%22%3A%22string%22%2C%22code_naf%22%3A%22string%22%2C%22country_iso2%22%3A%22string%22%2C%22dissolution_date%22%3A%221970-01-01%22%2C%22establishments%22%3A%5B%7B%22emails%22%3A%5B%22user%40example.com%22%5D%2C%22id%22%3A0%2C%22name%22%3A%22string%22%2C%22nic%22%3A%22string%22%2C%22phones%22%3A%5B%22string%22%5D%2C%22place%22%3A%7B%22administrative_area_level1%22%3A%22string%22%2C%22administrative_area_level2%22%3A%22string%22%2C%22administrative_area_level3%22%3A%22string%22%2C%22country%22%3A%22string%22%2C%22countryiso2%22%3A%22string%22%2C%22formatted_address%22%3A%22string%22%2C%22id%22%3A0%2C%22latitude%22%3A0%2C%22locality%22%3A%22string%22%2C%22longitude%22%3A0%2C%22postal_code%22%3A%22string%22%2C%22route%22%3A%22string%22%2C%22route2%22%3A%22string%22%2C%22street_number%22%3A%22string%22%2C%22sublocality%22%3A%22string%22%7D%7D%5D%2C%22founding_date%22%3A%221970-01-01%22%2C%22founding_location%22%3A%22string%22%2C%22greffe%22%3A%22string%22%2C%22id%22%3A0%2C%22legal_form%22%3A%22string%22%2C%22logo%22%3A%22http%3A%2F%2Fexample.com%22%2C%22name%22%3A%22string%22%2C%22national_id%22%3A%22string%22%2C%22number_of_employees%22%3A%22string%22%2C%22rcs%22%3A%22string%22%2C%22slogan%22%3A%22string%22%2C%22tax_id%22%3A%22string%22%2C%22vat_id%22%3A%22string%22%2C%22vat_system%22%3A%22string%22%7D%2C%22supplier_name%22%3A%22string%22%2C%22tags%22%3A%5B%22string%22%5D%2C%22title%22%3A%22string%22%2C%22vat_detail%22%3A%7B%7D%2C%22vat_repayment%22%3A%22payment%22%2C%22will_be_late_at%22%3A%221970-01-01T00%3A00%3A00Z%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/purchases/batch`

Create or update many purchases

<h3 id="create-or-update-many-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Purchase](#schemapurchase)]|true|List of purchases. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "accounted_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "amount_net_foreign_currency": 0,
  "amount_tax": 0,
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "billed_at": "1970-01-01T00:00:00Z",
  "comment": "string",
  "completed_at": "1970-01-01T00:00:00Z",
  "foreign_currency": "string",
  "id": 0,
  "is_late": true,
  "md5": "string",
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_account_number": "string",
  "payment_deadline_at": "1970-01-01T00:00:00Z",
  "payment_iban": "string",
  "payment_routing_number": "string",
  "payment_swift": "string",
  "picture": "string",
  "status": "new",
  "supplier": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  },
  "supplier_name": "string",
  "tags": [
    "string"
  ],
  "title": "string",
  "vat_detail": {},
  "vat_repayment": "payment",
  "will_be_late_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-or-update-many-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Purchase](#schemapurchase)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete many purchases

<a id="opIdapp.documents.purchases.purchases.batch_delete"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/purchases/batch?ids=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/purchases/batch`

Delete many purchases

<h3 id="delete-many-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|List of purchases ID|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-many-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a list of purchases in pdf into a .zip file

<a id="opIdapp.documents.purchases.purchases.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/purchases/download?ids=0'
```

`GET /apps/{appId}/purchases/download`

<h3 id="download-a-list-of-purchases-in-pdf-into-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of purchases id|

<h3 id="download-a-list-of-purchases-in-pdf-into-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about purchases

<a id="opIdapp.documents.purchases.purchases.statistics"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/statistics \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/purchases/statistics`

<h3 id="obtain-statistics-about-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="obtain-statistics-about-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a purchase

<a id="opIdapp.documents.purchases.purchases.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/purchases/{id}`

Get an Purchase/Purchase object by Id

<h3 id="get-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of purchase|

> Example responses

> 200 Response

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "accounted_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "amount_net_foreign_currency": 0,
  "amount_tax": 0,
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "billed_at": "1970-01-01T00:00:00Z",
  "comment": "string",
  "completed_at": "1970-01-01T00:00:00Z",
  "foreign_currency": "string",
  "id": 0,
  "is_late": true,
  "md5": "string",
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_account_number": "string",
  "payment_deadline_at": "1970-01-01T00:00:00Z",
  "payment_iban": "string",
  "payment_routing_number": "string",
  "payment_swift": "string",
  "picture": "string",
  "status": "new",
  "supplier": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  },
  "supplier_name": "string",
  "tags": [
    "string"
  ],
  "title": "string",
  "vat_detail": {},
  "vat_repayment": "payment",
  "will_be_late_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Purchase](#schemapurchase)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a purchase

<a id="opIdapp.documents.purchases.purchases.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/purchases/{id}`

Update a purchase by id

<h3 id="update-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of purchase|
|account_id|query|integer|false|Auto-calculated by sales_lines total|
|supplier_organization_id|query|integer|false|none|
|title|query|string|false|none|
|supplier_name|query|string|false|none|
|amount|query|integer|false|Auto-calculated by sales_lines total|
|amount_tax|query|integer|false|none|
|currency|query|string|false|none|
|vat_detail|query|object|false|none|
|billed_at|query|string(date)|false|none|
|comment|query|integer|false|none|
|tags|query|[object(string)]|false|none|
|vat_repayment|query|string|false|none|
|payment_deadline_at|query|string(date) \| null|false|none|
|payment_account_number|query|string \| null|false|none|
|payment_routing_number|query|string \| null|false|none|
|payment_swift|query|string \| null|false|none|
|payment_iban|query|string \| null|false|none|
|purchase_lines|query|[object(object)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vat_repayment|payment|
|vat_repayment|billing|

> Example responses

> 200 Response

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "accounted_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "amount_net_foreign_currency": 0,
  "amount_tax": 0,
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "billed_at": "1970-01-01T00:00:00Z",
  "comment": "string",
  "completed_at": "1970-01-01T00:00:00Z",
  "foreign_currency": "string",
  "id": 0,
  "is_late": true,
  "md5": "string",
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_account_number": "string",
  "payment_deadline_at": "1970-01-01T00:00:00Z",
  "payment_iban": "string",
  "payment_routing_number": "string",
  "payment_swift": "string",
  "picture": "string",
  "status": "new",
  "supplier": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  },
  "supplier_name": "string",
  "tags": [
    "string"
  ],
  "title": "string",
  "vat_detail": {},
  "vat_repayment": "payment",
  "will_be_late_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Purchase](#schemapurchase)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a purchase

<a id="opIdapp.documents.purchases.purchases.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/purchases/{id}`

Remove a purchase by id

<h3 id="remove-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of purchase|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file at a purchase

<a id="opIdapp.documents.purchases.purchases.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/attach \
  -X POST
```

`POST /apps/{appId}/purchases/{id}/attach`

<h3 id="attach-a-file-at-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-at-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file at a purchase

<a id="opIdapp.documents.purchases.purchases.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/purchases/{id}/attach`

<h3 id="detach-a-file-at-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-at-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the purchase as pdf

<a id="opIdapp.documents.purchases.purchases.original"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/original
```

`GET /apps/{appId}/purchases/{id}/original`

<h3 id="download-the-purchase-as-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id to download|

<h3 id="download-the-purchase-as-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download purchase as jpeg

<a id="opIdapp.documents.purchases.purchases.preview"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/preview.jpg
```

`GET /apps/{appId}/purchases/{id}/preview.jpg`

<h3 id="download-purchase-as-jpeg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id to download|

<h3 id="download-purchase-as-jpeg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a tag on a purchase

<a id="opIdapp.documents.purchases.purchases.tag"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/tag \
  -X POST
```

`POST /apps/{appId}/purchases/{id}/tag`

<h3 id="add-a-tag-on-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id|
|tag|query|string|false|Tag to add|

<h3 id="add-a-tag-on-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag on a purchase

<a id="opIdapp.documents.purchases.purchases.untag"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/tag \
  -X DELETE
```

`DELETE /apps/{appId}/purchases/{id}/tag`

<h3 id="delete-a-tag-on-a-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id|
|tag|query|string|false|Tag to delete|

<h3 id="delete-a-tag-on-a-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show purchase thumbnail as jpeg

<a id="opIdapp.documents.purchases.purchases.thumbnail"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/thumbnail.jpg
```

`GET /apps/{appId}/purchases/{id}/thumbnail.jpg`

<h3 id="show-purchase-thumbnail-as-jpeg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Purchase id to download|

<h3 id="show-purchase-thumbnail-as-jpeg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update the status of an invoice

<a id="opIdapp.documents.purchases.purchases.updatestatus"></a>

> Code samples

```bash
curl https://example.com/apps/0/purchases/0/updatestatus \
  -X POST
```

`POST /apps/{appId}/purchases/{id}/updatestatus`

<h3 id="update-the-status-of-an-invoice-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of purchase|
|status|query|string|false|Status to update|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|completed|
|status|paid|

<h3 id="update-the-status-of-an-invoice-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-quotes">Quotes</h1>

## List quotes

<a id="opIdapp.documents.sales.quotes.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/quotes`

Get list of quotes

<h3 id="list-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
    "status": "draft"
  }
]
```

<h3 id="list-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-quotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Quote](#schemaquote)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a quote

<a id="opIdapp.documents.sales.quotes.create"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes`

Create a new quote with an Organization or a Person. Relationship store notes, metadata and accounting settings parameters

<h3 id="create-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|contact_infos|query|object \| null|false|none|
|third_account|query|object \| null|false|none|
|title|query|string|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|reference|query|string|false|Free variable not display in document|
|discount|query|object|false|none|
|currency|query|string|false|none|
|legal_notice|query|string|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|downpayment_request|query|object|false|none|
|commercialvalidity_deadline|query|string(date-time) \| null|false|none|
|number_from_other_software|query|string|false|Invoices imported from another software are not counted in the numbering and are not locked|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="create-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update many quotes

<a id="opIdapp.documents.sales.quotes.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/batch?data=%7B%22commercialvalidity_deadline%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22status%22%3A%22draft%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/batch`

Create or update many quotes

<h3 id="create-or-update-many-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Quote](#schemaquote)]|true|List of quotes. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="create-or-update-many-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete many quotes

<a id="opIdapp.documents.sales.quotes.batch_delete"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/batch?ids=0' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/quotes/batch`

Delete many quotes

<h3 id="delete-many-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|List of quotes ID|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="delete-many-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a list of quotes in pdf into a .zip file

<a id="opIdapp.documents.sales.quotes.download"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/download?ids=0'
```

`GET /apps/{appId}/quotes/download`

<h3 id="download-a-list-of-quotes-in-pdf-into-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of quotes id|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-a-list-of-quotes-in-pdf-into-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate pdf and recalcul amounts of quote

<a id="opIdapp.documents.sales.quotes.fresh"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/fresh?ids=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/fresh`

<h3 id="regenerate-pdf-and-recalcul-amounts-of-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of quotes id|

> Example responses

> 200 Response

```json
{}
```

<h3 id="regenerate-pdf-and-recalcul-amounts-of-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update many quotes

<a id="opIdapp.documents.sales.quotes.invoices"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/invoice?ids=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/invoice`

Create or update many quotes

<h3 id="create-or-update-many-quotes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|ids|query|[integer]|true|Array of quotes id|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="create-or-update-many-quotes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the next quote number for preview

<a id="opIdapp.documents.sales.quotes.nextnumber"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/nextnumber
```

`GET /apps/{appId}/quotes/nextnumber`

<h3 id="get-the-next-quote-number-for-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|written_at|query|string(date-time)|false|Write date|

<h3 id="get-the-next-quote-number-for-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about quotes

<a id="opIdapp.documents.sales.quotes.statistics"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/statistics \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/quotes/statistics`

<h3 id="obtain-statistics-about-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="obtain-statistics-about-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a quote

<a id="opIdapp.documents.sales.quotes.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/quotes/{id}`

Get a Sales/Quote object by Id

<h3 id="get-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of quote|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="get-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a quote

<a id="opIdapp.documents.sales.quotes.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/{id}`

Update a quote by id

<h3 id="update-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of quote|
|contact_infos|query|object \| null|false|none|
|third_account|query|object \| null|false|none|
|title|query|string|false|none|
|content|query|[[SalesLine](#schemasalesline)]|false|none|
|columns|query|object|false|List columns to display|
|reference|query|string|false|Free variable not display in document|
|discount|query|object|false|none|
|currency|query|string|false|none|
|legal_notice|query|string|false|Legal mentions|
|bank_details_id|query|integer \| null|false|none|
|vat_exemption|query|object|false|none|
|tags|query|[object(string)]|false|none|
|metadata|query|[object]|false|none|
|downpayment_request|query|object|false|none|
|commercialvalidity_deadline|query|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="update-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a quote

<a id="opIdapp.documents.sales.quotes.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{appId}/quotes/{id}`

Remove a quote by id : only for draft

<h3 id="remove-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of quote|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

<h3 id="remove-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file at a quote

<a id="opIdapp.documents.sales.quotes.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/attach \
  -X POST
```

`POST /apps/{appId}/quotes/{id}/attach`

<h3 id="attach-a-file-at-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-at-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file at a quote

<a id="opIdapp.documents.sales.quotes.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/quotes/{id}/attach`

<h3 id="detach-a-file-at-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-at-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform the quote in a downpayment invoice

<a id="opIdapp.documents.sales.quotes.downpayment"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/0/downpayment?percent=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/{id}/downpayment`

<h3 id="transform-the-quote-in-a-downpayment-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|percent|query|integer|true|Percentage of downpayment in cents (100 = 1%)|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="transform-the-quote-in-a-downpayment-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Duplicate a quote

<a id="opIdapp.documents.sales.quotes.duplicate"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/duplicate \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/{id}/duplicate`

<h3 id="duplicate-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to duplicate|

> Example responses

> 200 Response

```json
{
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="duplicate-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Quote](#schemaquote)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Finalize a quote

<a id="opIdapp.documents.sales.quotes.finalize"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/finalize \
  -X POST
```

`POST /apps/{appId}/quotes/{id}/finalize`

<h3 id="finalize-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to finalize|

<h3 id="finalize-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform the quote in invoice

<a id="opIdapp.documents.sales.quotes.invoice"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/invoice \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/{id}/invoice`

<h3 id="transform-the-quote-in-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to transform|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="transform-the-quote-in-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the quote as pdf

<a id="opIdapp.documents.sales.quotes.pdf"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/pdf
```

`GET /apps/{appId}/quotes/{id}/pdf`

<h3 id="download-the-quote-as-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to download|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-the-quote-as-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download quote as jpeg

<a id="opIdapp.documents.sales.quotes.preview"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/preview.jpg
```

`GET /apps/{appId}/quotes/{id}/preview.jpg`

<h3 id="download-quote-as-jpeg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to download|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-quote-as-jpeg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform the quote into a situation invoice

<a id="opIdapp.documents.sales.quotes.situation_invoice"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/quotes/0/situation_invoice?progress=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/quotes/{id}/situation_invoice`

<h3 id="transform-the-quote-into-a-situation-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to transform|
|progress|query|integer|true|Percentage of progress in cents (100 = 1%)|

> Example responses

> 200 Response

```json
{
  "avoid_of": {},
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {}
  ],
  "invoice_of": {},
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {},
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

<h3 id="transform-the-quote-into-a-situation-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Invoice](#schemainvoice)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a tag on an quote

<a id="opIdapp.documents.sales.quotes.tag"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/tag \
  -X POST
```

`POST /apps/{appId}/quotes/{id}/tag`

<h3 id="add-a-tag-on-an-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id|
|tag|query|string|false|Tag to add|

<h3 id="add-a-tag-on-an-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag on a quote

<a id="opIdapp.documents.sales.quotes.untag"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/tag \
  -X DELETE
```

`DELETE /apps/{appId}/quotes/{id}/tag`

<h3 id="delete-a-tag-on-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id|
|tag|query|string|false|Tag to delete|

<h3 id="delete-a-tag-on-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update the status of a quote

<a id="opIdapp.documents.sales.quotes.updatestatus"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/updatestatus \
  -X POST
```

`POST /apps/{appId}/quotes/{id}/updatestatus`

<h3 id="update-the-status-of-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Invoice id to finalize|
|status|query|string|false|Status to update|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|waiting|
|status|goodforagreement|
|status|refused|
|status|transformed|
|status|deleted|

<h3 id="update-the-status-of-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download quote as jpeg

<a id="opIdapp.documents.sales.quotes.yousign_preview"></a>

> Code samples

```bash
curl https://example.com/apps/0/quotes/0/yousign/preview.jpg
```

`GET /apps/{appId}/quotes/{id}/yousign/preview.jpg`

<h3 id="download-quote-as-jpeg-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|Quote id to download|
|template|query|string \| null|false|Template name to generate document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|template|delivery|
|template|command|

<h3 id="download-quote-as-jpeg-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-relationships">Relationships</h1>

## List relationships

<a id="opIdapp.contacts.relationships.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/relationships \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/relationships`

List all relationships

<h3 id="list-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "accounting_infos": {
      "balance_initial_amount": 0,
      "customer_id": "string",
      "reference": "string",
      "supplier_id": "string"
    },
    "id": 0,
    "importance_level": 0,
    "is_customer": true,
    "is_notifying": true,
    "is_prospect": true,
    "is_supplier": true,
    "metadata": [
      null
    ],
    "note": "string",
    "rating": 0
  }
]
```

<h3 id="list-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="list-relationships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Relationship](#schemarelationship)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a relationship

<a id="opIdapp.contacts.relationships.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/relationships/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/relationships/{id}`

Get a relationship by id

<h3 id="get-a-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Relationship|

> Example responses

> 200 Response

```json
{
  "accounting_infos": {
    "balance_initial_amount": 0,
    "customer_id": "string",
    "reference": "string",
    "supplier_id": "string"
  },
  "id": 0,
  "importance_level": 0,
  "is_customer": true,
  "is_notifying": true,
  "is_prospect": true,
  "is_supplier": true,
  "metadata": [
    null
  ],
  "note": "string",
  "rating": 0
}
```

<h3 id="get-a-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Relationship](#schemarelationship)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a relationship

<a id="opIdapp.contacts.relationships.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/relationships/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/relationships/{id}`

Update a relationship by id

<h3 id="update-a-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Relationship|
|is_customer|query|boolean|false|none|
|is_supplier|query|boolean|false|none|
|is_prospect|query|boolean|false|none|
|importance_level|query|integer|false|none|
|rating|query|integer|false|none|
|balance_initial_amount|query|integer|false|none|
|is_notifying|query|boolean|false|none|
|note|query|string|false|none|
|reference|query|string \| null|false|Accounting number if it's specific|
|tags|query|string \| null|false|none|
|discount|query|string \| null|false|none|
|details|query|string \| null|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "accounting_infos": {
    "balance_initial_amount": 0,
    "customer_id": "string",
    "reference": "string",
    "supplier_id": "string"
  },
  "id": 0,
  "importance_level": 0,
  "is_customer": true,
  "is_notifying": true,
  "is_prospect": true,
  "is_supplier": true,
  "metadata": [
    null
  ],
  "note": "string",
  "rating": 0
}
```

<h3 id="update-a-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Relationship](#schemarelationship)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file

<a id="opIdapp.contacts.relationships.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/relationships/0/attach \
  -X POST
```

`POST /apps/{appId}/relationships/{id}/attach`

<h3 id="attach-a-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file

<a id="opIdapp.contacts.relationships.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/relationships/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/relationships/{id}/attach`

<h3 id="detach-a-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-signature">Signature</h1>

## Create a signature

<a id="opIdapp.documents.sales.signature.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/signature?documentId=0&email=string&firstname=string&lastname=string&phone=string' \
  -X POST
```

`POST /apps/{appId}/signature`

Create a new signature

<h3 id="create-a-signature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|documentId|query|integer|true|none|
|email|query|string|true|none|
|firstname|query|string|true|none|
|lastname|query|string|true|none|
|phone|query|string|true|none|

<h3 id="create-a-signature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-statistics">Statistics</h1>

## Obtain statistics about sales

<a id="opIdapp.statistics.charts.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/statistics/charts/string \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/statistics/charts/{type}`

<h3 id="obtain-statistics-about-sales-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|type|path|string|true|none|
|count|query|integer|false|none|
|period|query|string|false|none|
|start_at|query|string(date-time)|false|none|
|object|query|string|false|none|
|object_property|query|string|false|none|
|calcul|query|string|false|none|
|methods|query|[[string]]|false|Array of [object_property, calcul]|
|object_date_property|query|string|false|none|
|group_by|query|[string]|false|none|
|group_by_object_name|query|string|false|none|
|exclude_keys|query|[integer]|false|none|
|search|query|string|false|none|
|filters|query|object|false|none|
|show_details|query|boolean|false|Recovers the details of the calculations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|hourly|
|period|daily|
|period|weekly|
|period|monthly|
|period|quarterly|
|period|yearly|
|object|invoice|
|object|quote|
|object|purchase|
|object|transaction|
|object|payment|
|object|relationship|
|calcul|sum|
|calcul|avg|
|calcul|count|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="obtain-statistics-about-sales-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="obtain-statistics-about-sales-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about timetable purchases

<a id="opIdapp.statistics.timetable.purchases"></a>

> Code samples

```bash
curl https://example.com/apps/0/statistics/timetable/purchases \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/statistics/timetable/purchases`

<h3 id="obtain-statistics-about-timetable-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|detailed|query|boolean|false|none|
|groups|query|[[integer]]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "balance": 0,
    "count": 0,
    "data": [
      {
        "account": {
          "accounting_number": "string",
          "description": "string",
          "editable": true,
          "id": 0,
          "is_associate": true,
          "is_cashflow": true,
          "is_purchase": true,
          "is_sales": true,
          "is_various": true,
          "journalcode": "string",
          "keywords": "string",
          "name": "string",
          "need_charge": true,
          "need_employee": true,
          "need_invoice": true,
          "technical_name": "string"
        },
        "accounted_at": "1970-01-01T00:00:00Z",
        "amount": 0,
        "amount_net_foreign_currency": 0,
        "amount_tax": 0,
        "balance": {
          "completed": true,
          "due": 0,
          "meaning": "completed",
          "paid": 0,
          "remaining": 0
        },
        "billed_at": "1970-01-01T00:00:00Z",
        "comment": "string",
        "completed_at": "1970-01-01T00:00:00Z",
        "foreign_currency": "string",
        "id": 0,
        "is_late": true,
        "md5": "string",
        "paid_at": "1970-01-01T00:00:00Z",
        "payment_account_number": "string",
        "payment_deadline_at": "1970-01-01T00:00:00Z",
        "payment_iban": "string",
        "payment_routing_number": "string",
        "payment_swift": "string",
        "picture": "string",
        "status": "new",
        "supplier": {
          "billing_name": "string",
          "capital": 0,
          "closeaccounting_period": "string",
          "code_naf": "string",
          "country_iso2": "string",
          "dissolution_date": "1970-01-01",
          "establishments": [
            {
              "emails": [
                "user@example.com"
              ],
              "id": 0,
              "name": "string",
              "nic": "string",
              "phones": [
                "string"
              ],
              "place": {
                "administrative_area_level1": "string",
                "administrative_area_level2": "string",
                "administrative_area_level3": "string",
                "country": "string",
                "countryiso2": "string",
                "formatted_address": "string",
                "id": 0,
                "latitude": 0,
                "locality": "string",
                "longitude": 0,
                "postal_code": "string",
                "route": "string",
                "route2": "string",
                "street_number": "string",
                "sublocality": "string"
              }
            }
          ],
          "founding_date": "1970-01-01",
          "founding_location": "string",
          "greffe": "string",
          "id": 0,
          "legal_form": "string",
          "logo": "http://example.com",
          "name": "string",
          "national_id": "string",
          "number_of_employees": "string",
          "rcs": "string",
          "slogan": "string",
          "tax_id": "string",
          "vat_id": "string",
          "vat_system": "string"
        },
        "supplier_name": "string",
        "tags": [
          "string"
        ],
        "title": "string",
        "vat_detail": {},
        "vat_repayment": "payment",
        "will_be_late_at": "1970-01-01T00:00:00Z"
      }
    ],
    "interval": [
      "1970-01-01T00:00:00Z"
    ]
  }
]
```

<h3 id="obtain-statistics-about-timetable-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="obtain-statistics-about-timetable-purchases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» balance|integer|false|none|none|
|» count|integer|false|none|none|
|» data|[[Purchase](#schemapurchase)]|false|none|none|
|» interval|[string(date-time)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about sales

<a id="opIdapp.statistics.timetable.sales"></a>

> Code samples

```bash
curl https://example.com/apps/0/statistics/timetable/sales \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/statistics/timetable/sales`

<h3 id="obtain-statistics-about-sales-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|detailed|query|boolean|false|none|
|groups|query|[[integer]]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "balance": 0,
    "count": 0,
    "data": [
      {
        "avoid_of": {},
        "delivered_at": "1970-01-01T00:00:00Z",
        "downpayments": [
          {}
        ],
        "invoice_of": {},
        "paid_at": "1970-01-01T00:00:00Z",
        "payment_methods": "string",
        "payment_period": 0,
        "related_recurring_invoice": {},
        "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
        "status": "draft"
      }
    ],
    "interval": [
      "1970-01-01T00:00:00Z"
    ]
  }
]
```

<h3 id="obtain-statistics-about-sales-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="obtain-statistics-about-sales-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» balance|integer|false|none|none|
|» count|integer|false|none|none|
|» data|[[Invoice](#schemainvoice)]|false|none|none|
|» interval|[string(date-time)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Obtain statistics about vat

<a id="opIdapp.statistics.vat.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/statistics/vat \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/statistics/vat`

<h3 id="obtain-statistics-about-vat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|detailed|query|boolean|false|none|
|start_at|query|string(date-time)|false|none|
|period|query|string|false|none|
|end_at|query|string(date-time)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|monthly|
|period|quarterly|
|period|half-yearly|
|period|yearly|

> Example responses

> 200 Response

```json
{}
```

<h3 id="obtain-statistics-about-vat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all existants tags

<a id="opIdapp.statistics.tags.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/tags \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/tags`

<h3 id="get-all-existants-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|object|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|object|invoice|
|object|quote|
|object|purchase|
|object|product|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-all-existants-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<h3 id="get-all-existants-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-transactions">Transactions</h1>

## List Transaction

<a id="opIdapp.cashflow.transactions.list"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/ \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/transactions/`

<h3 id="list-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|offset|query|integer|false|The number of items to skip before starting to collect the result set.|
|limit|query|integer|false|The numbers of items to return.|
|search|query|string|false|A string to search for in objects.|
|filters|query|[object]|false|List of filters to apply to the query.|
|order|query|[object]|false|List in order of priority of the variables by which to order the result.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 0,
    "author": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "cashflow_source": {
      "account_type": "string",
      "balance_amount": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "disabled": 0,
      "id": 0,
      "identifiant": "string",
      "name": "string",
      "parent_cashflow_source": {},
      "status": "string",
      "type": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "contact": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ]
    },
    "created_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "details": 0,
    "id": 0,
    "label": 0,
    "lettered_at": "1970-01-01T00:00:00Z",
    "metadata": [
      null
    ],
    "method": 0,
    "received_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Not found|None|

<h3 id="list-transaction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Transaction](#schematransaction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Transaction

<a id="opIdapp.cashflow.transactions.create"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/transactions/?cashflow_source_id=0&amount=0&received_at=1970-01-01T00%3A00%3A00Z' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/transactions/`

<h3 id="create-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|contact_organization_id|query|integer|false|none|
|contact_person_id|query|integer|false|none|
|account_id|query|integer|false|none|
|cashflow_source_id|query|integer|true|none|
|contact_name|query|string|false|none|
|amount|query|integer|true|none|
|method|query|string|false|none|
|received_at|query|string(date-time)|true|none|
|label|query|string|false|none|
|details|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|check|
|method|transfer|
|method|cash|
|method|creditcard|
|method|automatic_debit|
|method|creditnote|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "contact": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "details": 0,
  "id": 0,
  "label": 0,
  "lettered_at": "1970-01-01T00:00:00Z",
  "metadata": [
    null
  ],
  "method": 0,
  "received_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple transactions

<a id="opIdapp.cashflow.transactions.batch"></a>

> Code samples

```bash
curl 'https://example.com/apps/0/transactions/batch?data=%7B%22amount%22%3A0%2C%22author%22%3A%7B%22civility%22%3A%22string%22%2C%22establishments%22%3A%5B%7B%22emails%22%3A%5B%22user%40example.com%22%5D%2C%22id%22%3A0%2C%22name%22%3A%22string%22%2C%22nic%22%3A%22string%22%2C%22phones%22%3A%5B%22string%22%5D%2C%22place%22%3A%7B%22administrative_area_level1%22%3A%22string%22%2C%22administrative_area_level2%22%3A%22string%22%2C%22administrative_area_level3%22%3A%22string%22%2C%22country%22%3A%22string%22%2C%22countryiso2%22%3A%22string%22%2C%22formatted_address%22%3A%22string%22%2C%22id%22%3A0%2C%22latitude%22%3A0%2C%22locality%22%3A%22string%22%2C%22longitude%22%3A0%2C%22postal_code%22%3A%22string%22%2C%22route%22%3A%22string%22%2C%22route2%22%3A%22string%22%2C%22street_number%22%3A%22string%22%2C%22sublocality%22%3A%22string%22%7D%7D%5D%2C%22firstname%22%3A%22string%22%2C%22image%22%3A%22http%3A%2F%2Fexample.com%22%2C%22lastname%22%3A%22string%22%2C%22metadata%22%3A%5Bnull%5D%2C%22password%22%3A%22password%22%7D%2C%22cashflow_source%22%3A%7B%22account_type%22%3A%22string%22%2C%22balance_amount%22%3A0%2C%22disabled%22%3A0%2C%22id%22%3A0%2C%22identifiant%22%3A%22string%22%2C%22name%22%3A%22string%22%2C%22parent_cashflow_source%22%3A%7B%7D%2C%22status%22%3A%22string%22%2C%22type%22%3A%22string%22%7D%2C%22contact%22%3A%7B%22civility%22%3A%22string%22%2C%22establishments%22%3A%5B%7B%22emails%22%3A%5B%22user%40example.com%22%5D%2C%22id%22%3A0%2C%22name%22%3A%22string%22%2C%22nic%22%3A%22string%22%2C%22phones%22%3A%5B%22string%22%5D%2C%22place%22%3A%7B%22administrative_area_level1%22%3A%22string%22%2C%22administrative_area_level2%22%3A%22string%22%2C%22administrative_area_level3%22%3A%22string%22%2C%22country%22%3A%22string%22%2C%22countryiso2%22%3A%22string%22%2C%22formatted_address%22%3A%22string%22%2C%22id%22%3A0%2C%22latitude%22%3A0%2C%22locality%22%3A%22string%22%2C%22longitude%22%3A0%2C%22postal_code%22%3A%22string%22%2C%22route%22%3A%22string%22%2C%22route2%22%3A%22string%22%2C%22street_number%22%3A%22string%22%2C%22sublocality%22%3A%22string%22%7D%7D%5D%2C%22firstname%22%3A%22string%22%2C%22image%22%3A%22http%3A%2F%2Fexample.com%22%2C%22lastname%22%3A%22string%22%2C%22metadata%22%3A%5Bnull%5D%7D%2C%22details%22%3A0%2C%22id%22%3A0%2C%22label%22%3A0%2C%22lettered_at%22%3A%221970-01-01T00%3A00%3A00Z%22%2C%22metadata%22%3A%5Bnull%5D%2C%22method%22%3A0%2C%22received_at%22%3A%221970-01-01T00%3A00%3A00Z%22%7D' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/transactions/batch`

<h3 id="create-multiple-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|data|query|[[Transaction](#schematransaction)]|true|List of transactions. With ID for update, without for insert|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "contact": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "details": 0,
  "id": 0,
  "label": 0,
  "lettered_at": "1970-01-01T00:00:00Z",
  "metadata": [
    null
  ],
  "method": 0,
  "received_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-multiple-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Transaction

<a id="opIdapp.cashflow.transactions.get"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/0 \
  -H 'Accept: application/json'
```

`GET /apps/{appId}/transactions/{id}`

<h3 id="get-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Transaction|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "contact": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "details": 0,
  "id": 0,
  "label": 0,
  "lettered_at": "1970-01-01T00:00:00Z",
  "metadata": [
    null
  ],
  "method": 0,
  "received_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Transaction

<a id="opIdapp.cashflow.transactions.update"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/0 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{appId}/transactions/{id}`

<h3 id="update-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Transaction|
|contact_organization_id|query|integer|false|none|
|contact_person_id|query|integer|false|none|
|account_id|query|integer|false|none|
|cashflow_source_id|query|integer|false|none|
|contact_name|query|string|false|none|
|amount|query|integer|false|none|
|method|query|string|false|none|
|received_at|query|string(date-time)|false|none|
|label|query|string|false|none|
|details|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|method|check|
|method|transfer|
|method|cash|
|method|creditcard|
|method|automatic_debit|
|method|creditnote|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "contact": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "details": 0,
  "id": 0,
  "label": 0,
  "lettered_at": "1970-01-01T00:00:00Z",
  "metadata": [
    null
  ],
  "method": 0,
  "received_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a Transaction

<a id="opIdapp.cashflow.transactions.delete"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/0 \
  -X DELETE
```

`DELETE /apps/{appId}/transactions/{id}`

<h3 id="remove-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|ID of Transaction|

<h3 id="remove-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Attach a file

<a id="opIdapp.cashflow.transactions.attach"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/0/attach \
  -X POST
```

`POST /apps/{appId}/transactions/{id}/attach`

<h3 id="attach-a-file-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file|query|string(binary)|false|File to attach|

<h3 id="attach-a-file-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Detach a file

<a id="opIdapp.cashflow.transactions.detach"></a>

> Code samples

```bash
curl https://example.com/apps/0/transactions/0/attach \
  -X DELETE
```

`DELETE /apps/{appId}/transactions/{id}/attach`

<h3 id="detach-a-file-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer|true|The identifier of the Sinao application you are using. Each application corresponds to a company and an accounting. A user can have several Sinao applications. To retrieve the identifiers of its applications, you must call the endpoint `/apps`.|
|id|path|integer|true|none|
|file_id|query|integer|false|File to detach|

<h3 id="detach-a-file-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-authentication">Authentication</h1>

## Login

<a id="opIdauth.login"></a>

> Code samples

```bash
curl 'https://example.com/login?email=user%40example.com&password=string' \
  -X POST
```

`POST /login`

User login by email and password. Used only on Sinao API. CloudAccounting API needs a different API key

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string(email)|true|Email for login|
|password|query|string|true|Password for login in clear text|

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|None|
|401|Unauthorized|Invalid password|None|
|404|Not Found|Email address not found|None|
|422|Unprocessable Entity|No password defined|None|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh a token

<a id="opIdauth.refresh"></a>

> Code samples

```bash
curl https://example.com/refresh \
  -H 'Accept: application/json'
```

`GET /refresh`

Refresh token without relogin

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "string"
}
```

<h3 id="refresh-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JsonWebToken](#schemajsonwebtoken)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sinao-api-account">Account</h1>

## Get current user

<a id="opIdaccount.get"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json'
```

`GET /me`

Get current logged user, as `User` object

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "last_access_at": "1970-01-01T00:00:00Z",
  "password_is_undefined": true,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Update current user

<a id="opIdaccount.update"></a>

> Code samples

```bash
curl https://example.com/me \
  -X POST \
  -H 'Accept: application/json'
```

`POST /me`

Update current user informations

<h3 id="update-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|civility|query|string|false|none|
|firstname|query|string|false|none|
|lastname|query|string|false|none|
|password|query|string|false|none|
|email|query|string(email)|false|none|
|image|query|string(binary)|false|none|
|metadata|query|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "last_access_at": "1970-01-01T00:00:00Z",
  "password_is_undefined": true,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessInvitation">AccessInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaaccessinvitation"></a>
<a id="schema_AccessInvitation"></a>
<a id="tocSaccessinvitation"></a>
<a id="tocsaccessinvitation"></a>

```json
{
  "app": {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  },
  "id": 0,
  "profile": {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  },
  "recipient_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "sender_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "used_at": "1970-01-01T00:00:00Z",
  "validity": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|id|integer|false|none|none|
|profile|[PolicyProfile](#schemapolicyprofile)|false|none|none|
|recipient_user|[User](#schemauser)|false|none|none|
|sender_user|[User](#schemauser)|false|none|none|
|used_at|string(date-time)|false|none|none|
|validity|string(date-time)|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accounting_number": "string",
  "description": "string",
  "editable": true,
  "id": 0,
  "is_associate": true,
  "is_cashflow": true,
  "is_purchase": true,
  "is_sales": true,
  "is_various": true,
  "journalcode": "string",
  "keywords": "string",
  "name": "string",
  "need_charge": true,
  "need_employee": true,
  "need_invoice": true,
  "technical_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounting_number|string|false|none|none|
|description|string|false|none|none|
|editable|boolean|false|none|none|
|id|integer|false|none|none|
|is_associate|boolean|false|none|none|
|is_cashflow|boolean|false|none|none|
|is_purchase|boolean|false|none|none|
|is_sales|boolean|false|none|none|
|is_various|boolean|false|none|none|
|journalcode|string|false|none|none|
|keywords|string|false|none|keywords comma separated|
|name|string|false|none|none|
|need_charge|boolean|false|none|none|
|need_employee|boolean|false|none|none|
|need_invoice|boolean|false|none|none|
|technical_name|string|false|none|none|

<h2 id="tocS_AccountCategory">AccountCategory</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcategory"></a>
<a id="schema_AccountCategory"></a>
<a id="tocSaccountcategory"></a>
<a id="tocsaccountcategory"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "code": 0,
  "message": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|message|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "admin": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "config": [
    null
  ],
  "hostname_alias": "example.com",
  "id": 0,
  "last_access_at": "1970-01-01T00:00:00Z",
  "last_user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "organization": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string",
    "app": {}
  },
  "policies": [
    {
      "app": {},
      "policy_profile": {
        "description": "string",
        "homepage": "http://example.com",
        "name": "string",
        "restricted": true,
        "rights": [
          "string"
        ],
        "visible": 0
      },
      "user": {
        "civility": "string",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "firstname": "string",
        "id": 0,
        "image": "http://example.com",
        "lastname": "string",
        "metadata": [
          null
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com",
        "last_access_at": "1970-01-01T00:00:00Z",
        "password": "password",
        "password_is_undefined": true,
        "updated_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "subscription": {
    "access_level": "full",
    "id": 0,
    "payment_card": "string",
    "payment_failed_count": 0,
    "period_ending_date": "1970-01-01T00:00:00Z",
    "period_remaining_days": 0,
    "period_starting_date": "1970-01-01T00:00:00Z",
    "plan_color": "string",
    "plan_name": "string",
    "status": "string",
    "stripe_customer_id": "string",
    "stripe_plan_id": "string",
    "stripe_subscription_id": "string"
  },
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|[User](#schemauser)|false|none|none|
|config|[object]|false|none|none|
|hostname_alias|string(hostname) \| null|false|none|Specific hostname for this app. To use default URI, null this param|
|id|integer|false|read-only|none|
|last_access_at|string(date-time)|false|read-only|none|
|last_user|[User](#schemauser)|false|none|none|
|organization|[SinaoOrganization](#schemasinaoorganization)|false|none|none|
|policies|[[UserPolicy](#schemauserpolicy)]|false|none|none|
|subscription|[Subscription](#schemasubscription)|false|none|none|
|url|string(uri)|false|read-only|URI to this app. Can be overwrited by hostname_alias param|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "attachable_id": "string",
  "attachable_type": "string",
  "file_url": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachable_id|string|false|none|none|
|attachable_type|string|false|none|none|
|file_url|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "completed": true,
  "due": 0,
  "meaning": "completed",
  "paid": 0,
  "remaining": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|none|
|due|integer|false|none|Initial balance total due|
|meaning|string|false|none|none|
|paid|integer|false|none|none|
|remaining|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|meaning|completed|
|meaning|remaining|
|meaning|overpaid|

<h2 id="tocS_BankDetails">BankDetails</h2>
<!-- backwards compatibility -->
<a id="schemabankdetails"></a>
<a id="schema_BankDetails"></a>
<a id="tocSbankdetails"></a>
<a id="tocsbankdetails"></a>

```json
{
  "bic": "string",
  "iban": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|none|
|iban|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_CashflowSource">CashflowSource</h2>
<!-- backwards compatibility -->
<a id="schemacashflowsource"></a>
<a id="schema_CashflowSource"></a>
<a id="tocScashflowsource"></a>
<a id="tocscashflowsource"></a>

```json
{
  "account_type": "string",
  "balance_amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "disabled": 0,
  "id": 0,
  "identifiant": "string",
  "name": "string",
  "parent_cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": "string",
  "type": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_type|string|false|none|none|
|balance_amount|integer|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|disabled|integer|false|none|none|
|id|integer|false|none|none|
|identifiant|string|false|none|none|
|name|string|false|none|none|
|parent_cashflow_source|[CashflowSource](#schemacashflowsource)|false|none|none|
|status|string|false|none|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ContactOrganization">ContactOrganization</h2>
<!-- backwards compatibility -->
<a id="schemacontactorganization"></a>
<a id="schema_ContactOrganization"></a>
<a id="tocScontactorganization"></a>
<a id="tocscontactorganization"></a>

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_name|string|false|none|Company name for billing|
|capital|integer|false|none|Capital in cents|
|closeaccounting_period|string|false|none|none|
|code_naf|string|false|none|French NAF Code|
|country_iso2|string(ISO 3166-1 alpha-2)|false|none|none|
|dissolution_date|string(date)|false|none|none|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|List of contact establishments. Some establishments come from the public database (INSEE), they cannot be edited and have no ID|
|founding_date|string(date)|false|none|none|
|founding_location|string|false|none|none|
|greffe|string|false|none|French. Tribunal de commerce|
|id|integer|false|none|none|
|legal_form|string|false|none|none|
|logo|string(uri)|false|none|none|
|name|string|false|none|Company name visible on the app|
|national_id|string|false|none|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|number_of_employees|string|false|none|none|
|rcs|string|false|none|French. Registre du Commerce et des Sociétés|
|slogan|string|false|none|Free variable|
|tax_id|string|false|none|International Tax Id|
|vat_id|string|false|none|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|vat_system|string|false|none|none|

<h2 id="tocS_ContactPerson">ContactPerson</h2>
<!-- backwards compatibility -->
<a id="schemacontactperson"></a>
<a id="schema_ContactPerson"></a>
<a id="tocScontactperson"></a>
<a id="tocscontactperson"></a>

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|civility|string \| null|false|none|Civility is the lastname prefix|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|none|
|firstname|string|false|none|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|none|none|
|lastname|string|false|none|none|
|metadata|[object]|false|none|none|

<h2 id="tocS_EstablishmentIdentity">EstablishmentIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaestablishmentidentity"></a>
<a id="schema_EstablishmentIdentity"></a>
<a id="tocSestablishmentidentity"></a>
<a id="tocsestablishmentidentity"></a>

```json
{
  "emails": [
    "user@example.com"
  ],
  "id": 0,
  "name": "string",
  "nic": "string",
  "phones": [
    "string"
  ],
  "place": {
    "administrative_area_level1": "string",
    "administrative_area_level2": "string",
    "administrative_area_level3": "string",
    "country": "string",
    "countryiso2": "string",
    "formatted_address": "string",
    "id": 0,
    "latitude": 0,
    "locality": "string",
    "longitude": 0,
    "postal_code": "string",
    "route": "string",
    "route2": "string",
    "street_number": "string",
    "sublocality": "string"
  }
}
```

A card for an establishment contact informations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string(email)]|false|none|none|
|id|integer \| null|false|none|The identifier of the establishment can be absent if the data comes from the INSEE database. In this case, it is not editable|
|name|string|false|none|Establishment name|
|nic|string \| null|false|none|Establishment number (french NIC)|
|phones|[string(phone)]|false|none|none|
|place|object|false|none|none|

<h2 id="tocS_ExportEntity">ExportEntity</h2>
<!-- backwards compatibility -->
<a id="schemaexportentity"></a>
<a id="schema_ExportEntity"></a>
<a id="tocSexportentity"></a>
<a id="tocsexportentity"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "entries_count": 0,
  "id": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "period_start": "1970-01-01T00:00:00Z",
  "status": "string",
  "total_credit": 0,
  "total_debit": 0,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|none|
|entries_count|integer|false|none|none|
|id|integer|false|none|none|
|period_end|string(date-time)|false|none|none|
|period_start|string(date-time)|false|none|none|
|status|string|false|none|none|
|total_credit|integer|false|none|none|
|total_debit|integer|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_ExportFile">ExportFile</h2>
<!-- backwards compatibility -->
<a id="schemaexportfile"></a>
<a id="schema_ExportFile"></a>
<a id="tocSexportfile"></a>
<a id="tocsexportfile"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "downloaded_at": "1970-01-01T00:00:00Z",
  "entries_count": 0,
  "file_size": 0,
  "file_url": "string",
  "format": "string",
  "id": 0,
  "period_end": "1970-01-01T00:00:00Z",
  "period_start": "1970-01-01T00:00:00Z",
  "status": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|none|
|downloaded_at|string(date-time)|false|read-only|none|
|entries_count|integer|false|none|none|
|file_size|integer|false|none|none|
|file_url|string|false|none|none|
|format|string|false|none|none|
|id|integer|false|none|none|
|period_end|string(date-time)|false|none|none|
|period_start|string(date-time)|false|none|none|
|status|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "attachments": [
    "http://example.com"
  ],
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "bank_detail": {
    "bic": "string",
    "iban": "string",
    "id": 0,
    "name": "string"
  },
  "columns": {
    "amount": "string",
    "designation": "string",
    "discount": "string",
    "due": "string",
    "info_total_quantity": "string",
    "quantity": "string",
    "quantity_name": "string",
    "subtotal": "string",
    "vat_percent": "string"
  },
  "contact_infos": {
    "address": "string",
    "address2": "string",
    "details": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "content": [
    {}
  ],
  "currency": "string",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "discount": {
    "amount": 0,
    "name": "string",
    "percent": 0,
    "value": 0
  },
  "downpayment_request": {
    "amount": 0,
    "percent": 0
  },
  "email_sent_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "imported_at": "1970-01-01T00:00:00Z",
  "legal_notice": "string",
  "metadata": [
    null
  ],
  "note": "string",
  "number": "string",
  "reference": "string",
  "tags": [
    null
  ],
  "third_account": {
    "address": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "title": "string",
  "totals": {
    "due": 0,
    "subtotal": {
      "by_account": [
        {}
      ],
      "by_vat": [
        {}
      ],
      "total": 0
    },
    "taxes": {
      "total": 0,
      "vat": {
        "by_account": [
          {}
        ],
        "by_vat": [
          {}
        ],
        "total": 0
      }
    }
  },
  "validated_at": "1970-01-01T00:00:00Z",
  "vat_exemption": {
    "article": "string",
    "exempted": true,
    "reason": "string"
  },
  "written_at": "1970-01-01T00:00:00Z",
  "avoid_of": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "delivered_at": "1970-01-01T00:00:00Z",
  "downpayments": [
    {
      "avoid_of": {},
      "delivered_at": "1970-01-01T00:00:00Z",
      "downpayments": [
        {}
      ],
      "invoice_of": {},
      "paid_at": "1970-01-01T00:00:00Z",
      "payment_methods": "string",
      "payment_period": 0,
      "related_recurring_invoice": {},
      "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
      "status": "draft"
    }
  ],
  "invoice_of": {
    "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_methods": "string",
  "payment_period": 0,
  "related_recurring_invoice": {
    "content": [
      {}
    ],
    "discount": 0,
    "discount_end_at": "1970-01-01T00:00:00Z",
    "discount_mode": "string",
    "discount_start_at": "1970-01-01T00:00:00Z",
    "end_at": "1970-01-01T00:00:00Z",
    "frequency_count": 0,
    "frequency_duration": "string",
    "id": 0,
    "next_invoice_at": "1970-01-01T00:00:00Z",
    "orders_plan": [
      {
        "end_at": "1970-01-01T00:00:00Z",
        "model": 0
      }
    ],
    "saving_status": "string"
  },
  "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[string(uri)]|false|none|none|
|author|[User](#schemauser)|false|none|none|
|balance|[Balance](#schemabalance)|false|none|none|
|bank_detail|[BankDetails](#schemabankdetails)|false|none|none|
|columns|object|false|none|Columns titles. Remove or NULL a property to hide a column|
|contact_infos|object|false|none|none|
|content|[[SalesLine](#schemasalesline)]|false|none|none|
|currency|string|false|none|none|
|customer|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|discount|object|false|none|none|
|downpayment_request|object|false|none|Amount of deposit required on the quote. On an invoice, this deposit represents a cash advance to be deducted from the payment but not from the amount of the invoice|
|email_sent_at|string(date-time) \| null|false|none|none|
|id|integer|false|none|none|
|imported_at|string(date-time) \| null|false|none|none|
|legal_notice|string|false|none|Legal mentions|
|metadata|[object]|false|none|none|
|note|string \| null|false|none|Private note|
|number|string|false|read-only|none|
|reference|string|false|none|Free variable not display in document|
|tags|[object(string)]|false|none|none|
|third_account|object|false|none|none|
|title|string|false|none|none|
|totals|object|false|none|none|
|validated_at|string(date-time) \| null|false|none|none|
|vat_exemption|object|false|none|none|
|written_at|string(date-time)|false|none|none|
|avoid_of|[Invoice](#schemainvoice)|false|none|none|
|delivered_at|string(date-time) \| null|false|none|none|
|downpayments|[[Invoice](#schemainvoice)]|false|none|none|
|invoice_of|[Quote](#schemaquote)|false|none|none|
|paid_at|string(date-time)|false|none|none|
|payment_methods|string|false|none|Accepted methods of payment for this invoice. Methods comma separated|
|payment_period|integer|false|none|Days count before considere this invoice as late|
|related_recurring_invoice|[RecurringInvoice](#schemarecurringinvoice)|false|none|none|
|sepa_direct_debit_exported_at|string(date-time) \| null|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|final|
|status|paid|

<h2 id="tocS_JsonWebToken">JsonWebToken</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebtoken"></a>
<a id="schema_JsonWebToken"></a>
<a id="tocSjsonwebtoken"></a>
<a id="tocsjsonwebtoken"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|expires_in|integer|false|none|none|
|token_type|string|false|none|none|

<h2 id="tocS_OrganizationIdentity">OrganizationIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationidentity"></a>
<a id="schema_OrganizationIdentity"></a>
<a id="tocSorganizationidentity"></a>
<a id="tocsorganizationidentity"></a>

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_name|string|false|none|Company name for billing|
|capital|integer|false|none|Capital in cents|
|closeaccounting_period|string|false|none|none|
|code_naf|string|false|none|French NAF Code|
|country_iso2|string(ISO 3166-1 alpha-2)|false|none|none|
|dissolution_date|string(date)|false|none|none|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|List of contact establishments. Some establishments come from the public database (INSEE), they cannot be edited and have no ID|
|founding_date|string(date)|false|none|none|
|founding_location|string|false|none|none|
|greffe|string|false|none|French. Tribunal de commerce|
|id|integer|false|none|none|
|legal_form|string|false|none|none|
|logo|string(uri)|false|none|none|
|name|string|false|none|Company name visible on the app|
|national_id|string|false|none|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|number_of_employees|string|false|none|none|
|rcs|string|false|none|French. Registre du Commerce et des Sociétés|
|slogan|string|false|none|Free variable|
|tax_id|string|false|none|International Tax Id|
|vat_id|string|false|none|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|vat_system|string|false|none|none|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "amount": 0,
  "date": "1970-01-01T00:00:00Z",
  "document": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "document_type": "sales",
  "id": 0,
  "source": "bank",
  "transaction": {
    "amount": 0,
    "author": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "cashflow_source": {
      "account_type": "string",
      "balance_amount": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "disabled": 0,
      "id": 0,
      "identifiant": "string",
      "name": "string",
      "parent_cashflow_source": {},
      "status": "string",
      "type": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "contact": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ]
    },
    "created_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "details": 0,
    "id": 0,
    "label": 0,
    "lettered_at": "1970-01-01T00:00:00Z",
    "metadata": [
      null
    ],
    "method": 0,
    "received_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|false|none|none|
|date|string(date-time)|false|none|none|
|document|[Invoice](#schemainvoice) \| [Purchase](#schemapurchase)|false|none|none|
|document_type|string|false|none|none|
|id|integer|false|none|none|
|source|string|false|none|none|
|transaction|[Transaction](#schematransaction)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|document_type|sales|
|document_type|purchase|
|source|bank|
|source|cashdesk|
|source|creditnote|

<h2 id="tocS_PersonIdentity">PersonIdentity</h2>
<!-- backwards compatibility -->
<a id="schemapersonidentity"></a>
<a id="schema_PersonIdentity"></a>
<a id="tocSpersonidentity"></a>
<a id="tocspersonidentity"></a>

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|civility|string \| null|false|none|Civility is the lastname prefix|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|none|
|firstname|string|false|none|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|none|none|
|lastname|string|false|none|none|
|metadata|[object]|false|none|none|

<h2 id="tocS_PolicyProfile">PolicyProfile</h2>
<!-- backwards compatibility -->
<a id="schemapolicyprofile"></a>
<a id="schema_PolicyProfile"></a>
<a id="tocSpolicyprofile"></a>
<a id="tocspolicyprofile"></a>

```json
{
  "description": "string",
  "homepage": "http://example.com",
  "name": "string",
  "restricted": true,
  "rights": [
    "string"
  ],
  "visible": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|homepage|string(uri)|false|none|none|
|name|string|false|none|none|
|restricted|boolean|false|none|none|
|rights|[string]|false|none|Routes list|
|visible|integer|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "accounting_number": "string",
  "amount_accurately": 0,
  "category": {
    "id": 0,
    "image": "string",
    "name": "string",
    "parent": {},
    "products": {}
  },
  "currency": "string",
  "description": "string",
  "id": 0,
  "image": "string",
  "intangible": true,
  "lifetime": 0,
  "metadata": [
    null
  ],
  "name": "string",
  "quantity_name": "string",
  "reference": "string",
  "tags": [
    "string"
  ],
  "unity": "string",
  "vat_percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounting_number|string|false|none|none|
|amount_accurately|integer|false|none|Price without taxes in milli-cents|
|category|[ProductCategory](#schemaproductcategory)|false|none|none|
|currency|string|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|image|string(binary) \| string(uri)|false|none|none|
|intangible|boolean|false|none|Is a service or a product ?|
|lifetime|integer|false|none|Product life time in seconds|
|metadata|[object]|false|none|none|
|name|string|false|none|none|
|quantity_name|string|false|none|Name of the quantity: days, liters, m2, m3...|
|reference|string|false|none|none|
|tags|[string]|false|none|none|
|unity|string|false|none|Unity, hours, days, meters, liters..|
|vat_percent|integer|false|none|VAT rate in cents|

<h2 id="tocS_ProductCategory">ProductCategory</h2>
<!-- backwards compatibility -->
<a id="schemaproductcategory"></a>
<a id="schema_ProductCategory"></a>
<a id="tocSproductcategory"></a>
<a id="tocsproductcategory"></a>

```json
{
  "id": 0,
  "image": "string",
  "name": "string",
  "parent": {
    "id": 0,
    "image": "string",
    "name": "string",
    "parent": {},
    "products": {}
  },
  "products": {
    "accounting_number": "string",
    "amount_accurately": 0,
    "category": {},
    "currency": "string",
    "description": "string",
    "id": 0,
    "image": "string",
    "intangible": true,
    "lifetime": 0,
    "metadata": [
      null
    ],
    "name": "string",
    "quantity_name": "string",
    "reference": "string",
    "tags": [
      "string"
    ],
    "unity": "string",
    "vat_percent": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|image|string(binary) \| string(uri)|false|none|none|
|name|string|false|none|none|
|parent|[ProductCategory](#schemaproductcategory)|false|none|none|
|products|[Product](#schemaproduct)|false|none|none|

<h2 id="tocS_ProductStock">ProductStock</h2>
<!-- backwards compatibility -->
<a id="schemaproductstock"></a>
<a id="schema_ProductStock"></a>
<a id="tocSproductstock"></a>
<a id="tocsproductstock"></a>

```json
{
  "bar_code": 0,
  "cost_amount": 0,
  "entered_at": 0,
  "expired_at": 0,
  "id": 0,
  "initial_quantity": 0,
  "location": 0,
  "product": {
    "accounting_number": "string",
    "amount_accurately": 0,
    "category": {},
    "currency": "string",
    "description": "string",
    "id": 0,
    "image": "string",
    "intangible": true,
    "lifetime": 0,
    "metadata": [
      null
    ],
    "name": "string",
    "quantity_name": "string",
    "reference": "string",
    "tags": [
      "string"
    ],
    "unity": "string",
    "vat_percent": 0
  },
  "product_stocks_movements": [
    {
      "description": "string",
      "future_return_date": "1970-01-01T00:00:00Z",
      "id": 0,
      "invoice": {},
      "moved_at": "1970-01-01T00:00:00Z",
      "product_stock": {},
      "quantity": 0,
      "type": "buy",
      "use_duration": 0
    }
  ],
  "purchase": {
    "account": {
      "accounting_number": "string",
      "description": "string",
      "editable": true,
      "id": 0,
      "is_associate": true,
      "is_cashflow": true,
      "is_purchase": true,
      "is_sales": true,
      "is_various": true,
      "journalcode": "string",
      "keywords": "string",
      "name": "string",
      "need_charge": true,
      "need_employee": true,
      "need_invoice": true,
      "technical_name": "string"
    },
    "accounted_at": "1970-01-01T00:00:00Z",
    "amount": 0,
    "amount_net_foreign_currency": 0,
    "amount_tax": 0,
    "balance": {
      "completed": true,
      "due": 0,
      "meaning": "completed",
      "paid": 0,
      "remaining": 0
    },
    "billed_at": "1970-01-01T00:00:00Z",
    "comment": "string",
    "completed_at": "1970-01-01T00:00:00Z",
    "foreign_currency": "string",
    "id": 0,
    "is_late": true,
    "md5": "string",
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_account_number": "string",
    "payment_deadline_at": "1970-01-01T00:00:00Z",
    "payment_iban": "string",
    "payment_routing_number": "string",
    "payment_swift": "string",
    "picture": "string",
    "status": "new",
    "supplier": {
      "billing_name": "string",
      "capital": 0,
      "closeaccounting_period": "string",
      "code_naf": "string",
      "country_iso2": "string",
      "dissolution_date": "1970-01-01",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "founding_date": "1970-01-01",
      "founding_location": "string",
      "greffe": "string",
      "id": 0,
      "legal_form": "string",
      "logo": "http://example.com",
      "name": "string",
      "national_id": "string",
      "number_of_employees": "string",
      "rcs": "string",
      "slogan": "string",
      "tax_id": "string",
      "vat_id": "string",
      "vat_system": "string"
    },
    "supplier_name": "string",
    "tags": [
      "string"
    ],
    "title": "string",
    "vat_detail": {},
    "vat_repayment": "payment",
    "will_be_late_at": "1970-01-01T00:00:00Z"
  },
  "quantity_in": 0,
  "quantity_out": 0,
  "sales_lines": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "use_duration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bar_code|integer|false|none|none|
|cost_amount|integer|false|none|none|
|entered_at|integer|false|none|none|
|expired_at|integer|false|none|none|
|id|integer|false|read-only|none|
|initial_quantity|integer|false|read-only|none|
|location|integer|false|none|none|
|product|[Product](#schemaproduct)|false|none|none|
|product_stocks_movements|[[ProductStocksMovement](#schemaproductstocksmovement)]|false|none|none|
|purchase|[Purchase](#schemapurchase)|false|none|none|
|quantity_in|integer|false|read-only|none|
|quantity_out|integer|false|read-only|none|
|sales_lines|[[SalesLine](#schemasalesline)]|false|none|none|
|use_duration|integer|false|none|none|

<h2 id="tocS_ProductStocksMovement">ProductStocksMovement</h2>
<!-- backwards compatibility -->
<a id="schemaproductstocksmovement"></a>
<a id="schema_ProductStocksMovement"></a>
<a id="tocSproductstocksmovement"></a>
<a id="tocsproductstocksmovement"></a>

```json
{
  "description": "string",
  "future_return_date": "1970-01-01T00:00:00Z",
  "id": 0,
  "invoice": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "moved_at": "1970-01-01T00:00:00Z",
  "product_stock": {
    "bar_code": 0,
    "cost_amount": 0,
    "entered_at": 0,
    "expired_at": 0,
    "id": 0,
    "initial_quantity": 0,
    "location": 0,
    "product": {},
    "product_stocks_movements": [
      {}
    ],
    "purchase": {
      "account": {
        "accounting_number": "string",
        "description": "string",
        "editable": true,
        "id": 0,
        "is_associate": true,
        "is_cashflow": true,
        "is_purchase": true,
        "is_sales": true,
        "is_various": true,
        "journalcode": "string",
        "keywords": "string",
        "name": "string",
        "need_charge": true,
        "need_employee": true,
        "need_invoice": true,
        "technical_name": "string"
      },
      "accounted_at": "1970-01-01T00:00:00Z",
      "amount": 0,
      "amount_net_foreign_currency": 0,
      "amount_tax": 0,
      "balance": {
        "completed": true,
        "due": 0,
        "meaning": "completed",
        "paid": 0,
        "remaining": 0
      },
      "billed_at": "1970-01-01T00:00:00Z",
      "comment": "string",
      "completed_at": "1970-01-01T00:00:00Z",
      "foreign_currency": "string",
      "id": 0,
      "is_late": true,
      "md5": "string",
      "paid_at": "1970-01-01T00:00:00Z",
      "payment_account_number": "string",
      "payment_deadline_at": "1970-01-01T00:00:00Z",
      "payment_iban": "string",
      "payment_routing_number": "string",
      "payment_swift": "string",
      "picture": "string",
      "status": "new",
      "supplier": {
        "billing_name": "string",
        "capital": 0,
        "closeaccounting_period": "string",
        "code_naf": "string",
        "country_iso2": "string",
        "dissolution_date": "1970-01-01",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "founding_date": "1970-01-01",
        "founding_location": "string",
        "greffe": "string",
        "id": 0,
        "legal_form": "string",
        "logo": "http://example.com",
        "name": "string",
        "national_id": "string",
        "number_of_employees": "string",
        "rcs": "string",
        "slogan": "string",
        "tax_id": "string",
        "vat_id": "string",
        "vat_system": "string"
      },
      "supplier_name": "string",
      "tags": [
        "string"
      ],
      "title": "string",
      "vat_detail": {},
      "vat_repayment": "payment",
      "will_be_late_at": "1970-01-01T00:00:00Z"
    },
    "quantity_in": 0,
    "quantity_out": 0,
    "sales_lines": [
      {}
    ],
    "use_duration": 0
  },
  "quantity": 0,
  "type": "buy",
  "use_duration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|future_return_date|string(date-time)|false|none|none|
|id|integer|false|read-only|none|
|invoice|[Invoice](#schemainvoice)|false|none|none|
|moved_at|string(date-time)|false|none|none|
|product_stock|[ProductStock](#schemaproductstock)|false|none|none|
|quantity|integer|false|read-only|none|
|type|string|false|read-only|none|
|use_duration|integer|false|read-only|Usage duration in seconds|

#### Enumerated Values

|Property|Value|
|---|---|
|type|buy|
|type|sell|
|type|back|
|type|temporaryexit|
|type|destruct|

<h2 id="tocS_Purchase">Purchase</h2>
<!-- backwards compatibility -->
<a id="schemapurchase"></a>
<a id="schema_Purchase"></a>
<a id="tocSpurchase"></a>
<a id="tocspurchase"></a>

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "accounted_at": "1970-01-01T00:00:00Z",
  "amount": 0,
  "amount_net_foreign_currency": 0,
  "amount_tax": 0,
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "billed_at": "1970-01-01T00:00:00Z",
  "comment": "string",
  "completed_at": "1970-01-01T00:00:00Z",
  "foreign_currency": "string",
  "id": 0,
  "is_late": true,
  "md5": "string",
  "paid_at": "1970-01-01T00:00:00Z",
  "payment_account_number": "string",
  "payment_deadline_at": "1970-01-01T00:00:00Z",
  "payment_iban": "string",
  "payment_routing_number": "string",
  "payment_swift": "string",
  "picture": "string",
  "status": "new",
  "supplier": {
    "billing_name": "string",
    "capital": 0,
    "closeaccounting_period": "string",
    "code_naf": "string",
    "country_iso2": "string",
    "dissolution_date": "1970-01-01",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "founding_date": "1970-01-01",
    "founding_location": "string",
    "greffe": "string",
    "id": 0,
    "legal_form": "string",
    "logo": "http://example.com",
    "name": "string",
    "national_id": "string",
    "number_of_employees": "string",
    "rcs": "string",
    "slogan": "string",
    "tax_id": "string",
    "vat_id": "string",
    "vat_system": "string"
  },
  "supplier_name": "string",
  "tags": [
    "string"
  ],
  "title": "string",
  "vat_detail": {},
  "vat_repayment": "payment",
  "will_be_late_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|none|
|accounted_at|string(date-time)|false|none|Date on which the accounting entries were generated|
|amount|integer|false|none|Amount without taxes in cents|
|amount_net_foreign_currency|integer|false|read-only|Amount without taxes in cents|
|amount_tax|integer|false|none|Amount of taxes in cents|
|balance|[Balance](#schemabalance)|false|none|none|
|billed_at|string(date-time)|false|none|Date of invoice|
|comment|string|false|none|free field|
|completed_at|string(date-time)|false|none|Date on which the account, supplier, amount and billed_at fields were completed|
|foreign_currency|string|false|read-only|Amount of taxes in cents|
|id|integer|false|none|none|
|is_late|boolean|false|none|The payment deadline has passed and full payment has not been received|
|md5|string|false|none|Md5 hash of the initial file sent|
|paid_at|string(date-time)|false|none|Date on which the invoice was fully paid|
|payment_account_number|string|false|none|Payment Account number|
|payment_deadline_at|string(date-time)|false|none|Payment deadline|
|payment_iban|string|false|none|Payment IBAN|
|payment_routing_number|string|false|none|Payment Routing number|
|payment_swift|string|false|none|Payment SWIFT|
|picture|string|false|none|Purchase picture|
|status|string|false|none|none|
|supplier|[ContactOrganization](#schemacontactorganization)|false|none|none|
|supplier_name|string|false|none|none|
|tags|[string]|false|none|none|
|title|string|false|none|Name visible on the accounting entries of the purchase|
|vat_detail|object|false|none|VAT breakdown|
|vat_repayment|string|false|none|In France, depending on the type of purchase (product or service), VAT is not payable at the same time. VAT on products is due on the date of the invoice, while VAT on services is due on the date of payment thereof|
|will_be_late_at|string(date-time)|false|none|Date the payment will be late. Is `false` if payment has been made|

#### Enumerated Values

|Property|Value|
|---|---|
|status|new|
|status|completed|
|status|paid|
|vat_repayment|payment|
|vat_repayment|billing|

<h2 id="tocS_PurchaseLine">PurchaseLine</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseline"></a>
<a id="schema_PurchaseLine"></a>
<a id="tocSpurchaseline"></a>
<a id="tocspurchaseline"></a>

```json
{
  "account": {
    "accounting_number": "string",
    "description": "string",
    "editable": true,
    "id": 0,
    "is_associate": true,
    "is_cashflow": true,
    "is_purchase": true,
    "is_sales": true,
    "is_various": true,
    "journalcode": "string",
    "keywords": "string",
    "name": "string",
    "need_charge": true,
    "need_employee": true,
    "need_invoice": true,
    "technical_name": "string"
  },
  "amount": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "product": {
    "accounting_number": "string",
    "amount_accurately": 0,
    "category": {},
    "currency": "string",
    "description": "string",
    "id": 0,
    "image": "string",
    "intangible": true,
    "lifetime": 0,
    "metadata": [
      null
    ],
    "name": "string",
    "quantity_name": "string",
    "reference": "string",
    "tags": [
      "string"
    ],
    "unity": "string",
    "vat_percent": 0
  },
  "title": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|none|
|amount|integer|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|id|integer|false|none|none|
|product|[Product](#schemaproduct)|false|none|none|
|title|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_Quote">Quote</h2>
<!-- backwards compatibility -->
<a id="schemaquote"></a>
<a id="schema_Quote"></a>
<a id="tocSquote"></a>
<a id="tocsquote"></a>

```json
{
  "attachments": [
    "http://example.com"
  ],
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "bank_detail": {
    "bic": "string",
    "iban": "string",
    "id": 0,
    "name": "string"
  },
  "columns": {
    "amount": "string",
    "designation": "string",
    "discount": "string",
    "due": "string",
    "info_total_quantity": "string",
    "quantity": "string",
    "quantity_name": "string",
    "subtotal": "string",
    "vat_percent": "string"
  },
  "contact_infos": {
    "address": "string",
    "address2": "string",
    "details": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "content": [
    {}
  ],
  "currency": "string",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "discount": {
    "amount": 0,
    "name": "string",
    "percent": 0,
    "value": 0
  },
  "downpayment_request": {
    "amount": 0,
    "percent": 0
  },
  "email_sent_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "imported_at": "1970-01-01T00:00:00Z",
  "legal_notice": "string",
  "metadata": [
    null
  ],
  "note": "string",
  "number": "string",
  "reference": "string",
  "tags": [
    null
  ],
  "third_account": {
    "address": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "title": "string",
  "totals": {
    "due": 0,
    "subtotal": {
      "by_account": [
        {}
      ],
      "by_vat": [
        {}
      ],
      "total": 0
    },
    "taxes": {
      "total": 0,
      "vat": {
        "by_account": [
          {}
        ],
        "by_vat": [
          {}
        ],
        "total": 0
      }
    }
  },
  "validated_at": "1970-01-01T00:00:00Z",
  "vat_exemption": {
    "article": "string",
    "exempted": true,
    "reason": "string"
  },
  "written_at": "1970-01-01T00:00:00Z",
  "commercialvalidity_deadline": "1970-01-01T00:00:00Z",
  "status": "draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[string(uri)]|false|none|none|
|author|[User](#schemauser)|false|none|none|
|balance|[Balance](#schemabalance)|false|none|none|
|bank_detail|[BankDetails](#schemabankdetails)|false|none|none|
|columns|object|false|none|Columns titles. Remove or NULL a property to hide a column|
|contact_infos|object|false|none|none|
|content|[[SalesLine](#schemasalesline)]|false|none|none|
|currency|string|false|none|none|
|customer|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|discount|object|false|none|none|
|downpayment_request|object|false|none|Amount of deposit required on the quote. On an invoice, this deposit represents a cash advance to be deducted from the payment but not from the amount of the invoice|
|email_sent_at|string(date-time) \| null|false|none|none|
|id|integer|false|none|none|
|imported_at|string(date-time) \| null|false|none|none|
|legal_notice|string|false|none|Legal mentions|
|metadata|[object]|false|none|none|
|note|string \| null|false|none|Private note|
|number|string|false|read-only|none|
|reference|string|false|none|Free variable not display in document|
|tags|[object(string)]|false|none|none|
|third_account|object|false|none|none|
|title|string|false|none|none|
|totals|object|false|none|none|
|validated_at|string(date-time) \| null|false|none|none|
|vat_exemption|object|false|none|none|
|written_at|string(date-time)|false|none|none|
|commercialvalidity_deadline|string(date-time) \| null|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|waiting|
|status|goodforagreement|
|status|refused|
|status|transformed|
|status|deleted|

<h2 id="tocS_Reconciliation">Reconciliation</h2>
<!-- backwards compatibility -->
<a id="schemareconciliation"></a>
<a id="schema_Reconciliation"></a>
<a id="tocSreconciliation"></a>
<a id="tocsreconciliation"></a>

```json
{
  "id": 0,
  "movements": [
    {
      "amount": 0,
      "id": 0,
      "type": "account"
    }
  ],
  "replace_all": true,
  "type": "transaction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|transaction id|
|movements|[object]|false|none|none|
|replace_all|boolean|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|transaction|

<h2 id="tocS_RecurringInvoice">RecurringInvoice</h2>
<!-- backwards compatibility -->
<a id="schemarecurringinvoice"></a>
<a id="schema_RecurringInvoice"></a>
<a id="tocSrecurringinvoice"></a>
<a id="tocsrecurringinvoice"></a>

```json
{
  "attachments": [
    "http://example.com"
  ],
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "bank_detail": {
    "bic": "string",
    "iban": "string",
    "id": 0,
    "name": "string"
  },
  "columns": {
    "amount": "string",
    "designation": "string",
    "discount": "string",
    "due": "string",
    "info_total_quantity": "string",
    "quantity": "string",
    "quantity_name": "string",
    "subtotal": "string",
    "vat_percent": "string"
  },
  "contact_infos": {
    "address": "string",
    "address2": "string",
    "details": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "content": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "currency": "string",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "discount": 0,
  "downpayment_request": {
    "amount": 0,
    "percent": 0
  },
  "email_sent_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "imported_at": "1970-01-01T00:00:00Z",
  "legal_notice": "string",
  "metadata": [
    null
  ],
  "note": "string",
  "number": "string",
  "reference": "string",
  "tags": [
    null
  ],
  "third_account": {
    "address": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "title": "string",
  "totals": {
    "due": 0,
    "subtotal": {
      "by_account": [
        {}
      ],
      "by_vat": [
        {}
      ],
      "total": 0
    },
    "taxes": {
      "total": 0,
      "vat": {
        "by_account": [
          {}
        ],
        "by_vat": [
          {}
        ],
        "total": 0
      }
    }
  },
  "validated_at": "1970-01-01T00:00:00Z",
  "vat_exemption": {
    "article": "string",
    "exempted": true,
    "reason": "string"
  },
  "written_at": "1970-01-01T00:00:00Z",
  "discount_end_at": "1970-01-01T00:00:00Z",
  "discount_mode": "string",
  "discount_start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "frequency_count": 0,
  "frequency_duration": "string",
  "next_invoice_at": "1970-01-01T00:00:00Z",
  "orders_plan": [
    {
      "end_at": "1970-01-01T00:00:00Z",
      "model": 0
    }
  ],
  "saving_status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[string(uri)]|false|none|none|
|author|[User](#schemauser)|false|none|none|
|balance|[Balance](#schemabalance)|false|none|none|
|bank_detail|[BankDetails](#schemabankdetails)|false|none|none|
|columns|object|false|none|Columns titles. Remove or NULL a property to hide a column|
|contact_infos|object|false|none|none|
|content|[[SalesLine](#schemasalesline)]|false|none|none|
|currency|string|false|none|none|
|customer|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|discount|object|false|none|none|
|downpayment_request|object|false|none|Amount of deposit required on the quote. On an invoice, this deposit represents a cash advance to be deducted from the payment but not from the amount of the invoice|
|email_sent_at|string(date-time) \| null|false|none|none|
|id|integer|false|none|none|
|imported_at|string(date-time) \| null|false|none|none|
|legal_notice|string|false|none|Legal mentions|
|metadata|[object]|false|none|none|
|note|string \| null|false|none|Private note|
|number|string|false|read-only|none|
|reference|string|false|none|Free variable not display in document|
|tags|[object(string)]|false|none|none|
|third_account|object|false|none|none|
|title|string|false|none|none|
|totals|object|false|none|none|
|validated_at|string(date-time) \| null|false|none|none|
|vat_exemption|object|false|none|none|
|written_at|string(date-time)|false|none|none|
|content|[[SalesLine](#schemasalesline)]|false|none|none|
|discount|integer|false|none|none|
|discount_end_at|string(date-time) \| null|false|none|none|
|discount_mode|string|false|none|none|
|discount_start_at|string(date-time) \| null|false|none|none|
|end_at|string(date-time) \| null|false|none|none|
|frequency_count|integer|false|none|none|
|frequency_duration|string|false|none|none|
|id|integer|false|none|none|
|next_invoice_at|string(date-time) \| null|false|none|none|
|orders_plan|[object]|false|none|none|
|saving_status|string|false|none|none|

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "accounting_infos": {
    "balance_initial_amount": 0,
    "customer_id": "string",
    "reference": "string",
    "supplier_id": "string"
  },
  "id": 0,
  "importance_level": 0,
  "is_customer": true,
  "is_notifying": true,
  "is_prospect": true,
  "is_supplier": true,
  "metadata": [
    null
  ],
  "note": "string",
  "rating": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounting_infos|object|false|none|none|
|id|integer|false|none|none|
|importance_level|integer \| null|false|none|none|
|is_customer|boolean|false|none|none|
|is_notifying|boolean|false|none|none|
|is_prospect|boolean|false|none|none|
|is_supplier|boolean|false|none|none|
|metadata|[object]|false|none|none|
|note|string \| null|false|none|none|
|rating|integer \| null|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "conditions": [
    [
      "string"
    ]
  ],
  "id": 0,
  "on_event": "string",
  "parameter": "string",
  "priority": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[string]]|false|none|[ [property, comparator, value], ... ]|
|id|integer|false|none|none|
|on_event|string|false|none|none|
|parameter|string|false|none|none|
|priority|integer|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_SEPAMandate">SEPAMandate</h2>
<!-- backwards compatibility -->
<a id="schemasepamandate"></a>
<a id="schema_SEPAMandate"></a>
<a id="tocSsepamandate"></a>
<a id="tocssepamandate"></a>

```json
{
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "bic": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "customer_name": "string",
  "electronic_signature": "string",
  "iban": "string",
  "id": 0,
  "is_first": 0,
  "last_debit_amount": 0,
  "last_debit_at": "1970-01-01T00:00:00Z",
  "last_debit_id": 0,
  "logs_sepa_direct_debits": "string",
  "mandate_id": 0,
  "old_mandate_id": 0,
  "signed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[User](#schemauser)|false|none|none|
|bic|string|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|customer|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|customer_name|string|false|none|none|
|electronic_signature|string|false|none|none|
|iban|string|false|none|none|
|id|integer|false|none|none|
|is_first|integer|false|none|none|
|last_debit_amount|integer|false|none|none|
|last_debit_at|string(date-time)|false|none|none|
|last_debit_id|integer|false|none|none|
|logs_sepa_direct_debits|string|false|none|none|
|mandate_id|integer|false|none|none|
|old_mandate_id|integer|false|none|none|
|signed_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_SalesDocumentContract">SalesDocumentContract</h2>
<!-- backwards compatibility -->
<a id="schemasalesdocumentcontract"></a>
<a id="schema_SalesDocumentContract"></a>
<a id="tocSsalesdocumentcontract"></a>
<a id="tocssalesdocumentcontract"></a>

```json
{
  "attachments": [
    "http://example.com"
  ],
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "balance": {
    "completed": true,
    "due": 0,
    "meaning": "completed",
    "paid": 0,
    "remaining": 0
  },
  "bank_detail": {
    "bic": "string",
    "iban": "string",
    "id": 0,
    "name": "string"
  },
  "columns": {
    "amount": "string",
    "designation": "string",
    "discount": "string",
    "due": "string",
    "info_total_quantity": "string",
    "quantity": "string",
    "quantity_name": "string",
    "subtotal": "string",
    "vat_percent": "string"
  },
  "contact_infos": {
    "address": "string",
    "address2": "string",
    "details": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "content": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "currency": "string",
  "customer": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "discount": {
    "amount": 0,
    "name": "string",
    "percent": 0,
    "value": 0
  },
  "downpayment_request": {
    "amount": 0,
    "percent": 0
  },
  "email_sent_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "imported_at": "1970-01-01T00:00:00Z",
  "legal_notice": "string",
  "metadata": [
    null
  ],
  "note": "string",
  "number": "string",
  "reference": "string",
  "tags": [
    null
  ],
  "third_account": {
    "address": "string",
    "id": 0,
    "location": "string",
    "name": "string",
    "type": "organization"
  },
  "title": "string",
  "totals": {
    "due": 0,
    "subtotal": {
      "by_account": [
        {}
      ],
      "by_vat": [
        {}
      ],
      "total": 0
    },
    "taxes": {
      "total": 0,
      "vat": {
        "by_account": [
          {}
        ],
        "by_vat": [
          {}
        ],
        "total": 0
      }
    }
  },
  "validated_at": "1970-01-01T00:00:00Z",
  "vat_exemption": {
    "article": "string",
    "exempted": true,
    "reason": "string"
  },
  "written_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[string(uri)]|false|none|none|
|author|[User](#schemauser)|false|none|none|
|balance|[Balance](#schemabalance)|false|none|none|
|bank_detail|[BankDetails](#schemabankdetails)|false|none|none|
|columns|object|false|none|Columns titles. Remove or NULL a property to hide a column|
|contact_infos|object|false|none|none|
|content|[[SalesLine](#schemasalesline)]|false|none|none|
|currency|string|false|none|none|
|customer|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|discount|object|false|none|none|
|downpayment_request|object|false|none|Amount of deposit required on the quote. On an invoice, this deposit represents a cash advance to be deducted from the payment but not from the amount of the invoice|
|email_sent_at|string(date-time) \| null|false|none|none|
|id|integer|false|none|none|
|imported_at|string(date-time) \| null|false|none|none|
|legal_notice|string|false|none|Legal mentions|
|metadata|[object]|false|none|none|
|note|string \| null|false|none|Private note|
|number|string|false|read-only|none|
|reference|string|false|none|Free variable not display in document|
|tags|[object(string)]|false|none|none|
|third_account|object|false|none|none|
|title|string|false|none|none|
|totals|object|false|none|none|
|validated_at|string(date-time) \| null|false|none|none|
|vat_exemption|object|false|none|none|
|written_at|string(date-time)|false|none|none|

<h2 id="tocS_SalesDocumentModel">SalesDocumentModel</h2>
<!-- backwards compatibility -->
<a id="schemasalesdocumentmodel"></a>
<a id="schema_SalesDocumentModel"></a>
<a id="tocSsalesdocumentmodel"></a>
<a id="tocssalesdocumentmodel"></a>

```json
{
  "id": 0,
  "json": [
    {
      "account": {},
      "action": "sell",
      "amount": 0,
      "amount_accurately": 0,
      "amount_with_taxes": true,
      "detail": "string",
      "discount": {
        "amount": 0,
        "percent": 0
      },
      "document": {},
      "id": 0,
      "metadata": [
        null
      ],
      "product": {},
      "quantity": 0,
      "stock": {},
      "style": {
        "position": 0,
        "section_id": 0,
        "type": "section"
      },
      "total_quantity": "string",
      "totals": {
        "due": 0,
        "subtotal": 0,
        "taxes": 0
      },
      "unity": "string",
      "vat_percent": 0
    }
  ],
  "name": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|json|[[SalesLine](#schemasalesline)]|false|none|none|
|name|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_SalesLine">SalesLine</h2>
<!-- backwards compatibility -->
<a id="schemasalesline"></a>
<a id="schema_SalesLine"></a>
<a id="tocSsalesline"></a>
<a id="tocssalesline"></a>

```json
{
  "account": {},
  "action": "sell",
  "amount": 0,
  "amount_accurately": 0,
  "amount_with_taxes": true,
  "detail": "string",
  "discount": {
    "amount": 0,
    "percent": 0
  },
  "document": {
    "avoid_of": {},
    "delivered_at": "1970-01-01T00:00:00Z",
    "downpayments": [
      {}
    ],
    "invoice_of": {},
    "paid_at": "1970-01-01T00:00:00Z",
    "payment_methods": "string",
    "payment_period": 0,
    "related_recurring_invoice": {},
    "sepa_direct_debit_exported_at": "1970-01-01T00:00:00Z",
    "status": "draft"
  },
  "id": 0,
  "metadata": [
    null
  ],
  "product": {
    "accounting_number": "string",
    "amount_accurately": 0,
    "category": {},
    "currency": "string",
    "description": "string",
    "id": 0,
    "image": "string",
    "intangible": true,
    "lifetime": 0,
    "metadata": [
      null
    ],
    "name": "string",
    "quantity_name": "string",
    "reference": "string",
    "tags": [
      "string"
    ],
    "unity": "string",
    "vat_percent": 0
  },
  "quantity": 0,
  "stock": {
    "bar_code": 0,
    "cost_amount": 0,
    "entered_at": 0,
    "expired_at": 0,
    "id": 0,
    "initial_quantity": 0,
    "location": 0,
    "product": {},
    "product_stocks_movements": [
      {}
    ],
    "purchase": {
      "account": {
        "accounting_number": "string",
        "description": "string",
        "editable": true,
        "id": 0,
        "is_associate": true,
        "is_cashflow": true,
        "is_purchase": true,
        "is_sales": true,
        "is_various": true,
        "journalcode": "string",
        "keywords": "string",
        "name": "string",
        "need_charge": true,
        "need_employee": true,
        "need_invoice": true,
        "technical_name": "string"
      },
      "accounted_at": "1970-01-01T00:00:00Z",
      "amount": 0,
      "amount_net_foreign_currency": 0,
      "amount_tax": 0,
      "balance": {
        "completed": true,
        "due": 0,
        "meaning": "completed",
        "paid": 0,
        "remaining": 0
      },
      "billed_at": "1970-01-01T00:00:00Z",
      "comment": "string",
      "completed_at": "1970-01-01T00:00:00Z",
      "foreign_currency": "string",
      "id": 0,
      "is_late": true,
      "md5": "string",
      "paid_at": "1970-01-01T00:00:00Z",
      "payment_account_number": "string",
      "payment_deadline_at": "1970-01-01T00:00:00Z",
      "payment_iban": "string",
      "payment_routing_number": "string",
      "payment_swift": "string",
      "picture": "string",
      "status": "new",
      "supplier": {
        "billing_name": "string",
        "capital": 0,
        "closeaccounting_period": "string",
        "code_naf": "string",
        "country_iso2": "string",
        "dissolution_date": "1970-01-01",
        "establishments": [
          {
            "emails": [
              "user@example.com"
            ],
            "id": 0,
            "name": "string",
            "nic": "string",
            "phones": [
              "string"
            ],
            "place": {
              "administrative_area_level1": "string",
              "administrative_area_level2": "string",
              "administrative_area_level3": "string",
              "country": "string",
              "countryiso2": "string",
              "formatted_address": "string",
              "id": 0,
              "latitude": 0,
              "locality": "string",
              "longitude": 0,
              "postal_code": "string",
              "route": "string",
              "route2": "string",
              "street_number": "string",
              "sublocality": "string"
            }
          }
        ],
        "founding_date": "1970-01-01",
        "founding_location": "string",
        "greffe": "string",
        "id": 0,
        "legal_form": "string",
        "logo": "http://example.com",
        "name": "string",
        "national_id": "string",
        "number_of_employees": "string",
        "rcs": "string",
        "slogan": "string",
        "tax_id": "string",
        "vat_id": "string",
        "vat_system": "string"
      },
      "supplier_name": "string",
      "tags": [
        "string"
      ],
      "title": "string",
      "vat_detail": {},
      "vat_repayment": "payment",
      "will_be_late_at": "1970-01-01T00:00:00Z"
    },
    "quantity_in": 0,
    "quantity_out": 0,
    "sales_lines": [
      {}
    ],
    "use_duration": 0
  },
  "style": {
    "position": 0,
    "section_id": 0,
    "type": "section"
  },
  "total_quantity": "string",
  "totals": {
    "due": 0,
    "subtotal": 0,
    "taxes": 0
  },
  "unity": "string",
  "vat_percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|object|false|none|none|
|action|string|false|none|none|
|amount|integer|false|none|Price without taxes in cents|
|amount_accurately|integer|false|none|Price without taxes in cents + 3 decimales, example : 9899000 = 98,99€ \|\| 1 = 0,00001€|
|amount_with_taxes|boolean|false|none|Used when there is a difference of 1 cent when starting from the amount with taxes|
|detail|string|false|none|Description of the product or service|
|discount|object|false|none|none|
|document|[Invoice](#schemainvoice) \| [Quote](#schemaquote)|false|none|none|
|id|integer|false|none|none|
|metadata|[object]|false|none|none|
|product|[Product](#schemaproduct)|false|none|none|
|quantity|number(double)|false|none|Quantity of product or service|
|stock|[ProductStock](#schemaproductstock)|false|none|none|
|style|object|false|none|none|
|total_quantity|string|false|none|Information about total quantity to sell, only for display|
|totals|object|false|none|none|
|unity|string|false|none|Unity, hours, days, meters, liters..|
|vat_percent|integer|false|none|VAT rate in cents|

#### Enumerated Values

|Property|Value|
|---|---|
|action|sell|
|action|rent|

<h2 id="tocS_SinaoOrganization">SinaoOrganization</h2>
<!-- backwards compatibility -->
<a id="schemasinaoorganization"></a>
<a id="schema_SinaoOrganization"></a>
<a id="tocSsinaoorganization"></a>
<a id="tocssinaoorganization"></a>

```json
{
  "billing_name": "string",
  "capital": 0,
  "closeaccounting_period": "string",
  "code_naf": "string",
  "country_iso2": "string",
  "dissolution_date": "1970-01-01",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "founding_date": "1970-01-01",
  "founding_location": "string",
  "greffe": "string",
  "id": 0,
  "legal_form": "string",
  "logo": "http://example.com",
  "name": "string",
  "national_id": "string",
  "number_of_employees": "string",
  "rcs": "string",
  "slogan": "string",
  "tax_id": "string",
  "vat_id": "string",
  "vat_system": "string",
  "app": {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_name|string|false|none|Company name for billing|
|capital|integer|false|none|Capital in cents|
|closeaccounting_period|string|false|none|none|
|code_naf|string|false|none|French NAF Code|
|country_iso2|string(ISO 3166-1 alpha-2)|false|none|none|
|dissolution_date|string(date)|false|none|none|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|List of contact establishments. Some establishments come from the public database (INSEE), they cannot be edited and have no ID|
|founding_date|string(date)|false|none|none|
|founding_location|string|false|none|none|
|greffe|string|false|none|French. Tribunal de commerce|
|id|integer|false|none|none|
|legal_form|string|false|none|none|
|logo|string(uri)|false|none|none|
|name|string|false|none|Company name visible on the app|
|national_id|string|false|none|Unique National Id, format by country. **In France : [0-9]{9} with last number as security key.**|
|number_of_employees|string|false|none|none|
|rcs|string|false|none|French. Registre du Commerce et des Sociétés|
|slogan|string|false|none|Free variable|
|tax_id|string|false|none|International Tax Id|
|vat_id|string|false|none|European VAT Id. **In France : FR [0-9]{2} [0-9]{9}**|
|vat_system|string|false|none|none|
|app|[App](#schemaapp)|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "access_level": "full",
  "id": 0,
  "payment_card": "string",
  "payment_failed_count": 0,
  "period_ending_date": "1970-01-01T00:00:00Z",
  "period_remaining_days": 0,
  "period_starting_date": "1970-01-01T00:00:00Z",
  "plan_color": "string",
  "plan_name": "string",
  "status": "string",
  "stripe_customer_id": "string",
  "stripe_plan_id": "string",
  "stripe_subscription_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_level|string|false|read-only|none|
|id|integer|false|read-only|none|
|payment_card|string|false|read-only|none|
|payment_failed_count|integer|false|read-only|none|
|period_ending_date|string(date-time)|false|read-only|none|
|period_remaining_days|integer|false|read-only|none|
|period_starting_date|string(date-time)|false|read-only|none|
|plan_color|string|false|read-only|none|
|plan_name|string|false|read-only|none|
|status|string|false|read-only|none|
|stripe_customer_id|string|false|read-only|none|
|stripe_plan_id|string|false|read-only|none|
|stripe_subscription_id|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|access_level|full|
|access_level|start|
|access_level|pro|
|access_level|restricted|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": 0,
  "author": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "cashflow_source": {
    "account_type": "string",
    "balance_amount": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "disabled": 0,
    "id": 0,
    "identifiant": "string",
    "name": "string",
    "parent_cashflow_source": {},
    "status": "string",
    "type": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "contact": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "details": 0,
  "id": 0,
  "label": 0,
  "lettered_at": "1970-01-01T00:00:00Z",
  "metadata": [
    null
  ],
  "method": 0,
  "received_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|false|none|none|
|author|[User](#schemauser)|false|none|none|
|cashflow_source|[CashflowSource](#schemacashflowsource)|false|none|none|
|contact|[ContactPerson](#schemacontactperson) \| [ContactOrganization](#schemacontactorganization)|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|deleted_at|string(date-time)|false|read-only|none|
|details|integer|false|none|none|
|id|integer|false|none|none|
|label|integer|false|none|none|
|lettered_at|string(date-time)|false|none|none|
|metadata|[object]|false|none|none|
|method|integer|false|none|none|
|received_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_URSSAFMandate">URSSAFMandate</h2>
<!-- backwards compatibility -->
<a id="schemaurssafmandate"></a>
<a id="schema_URSSAFMandate"></a>
<a id="tocSurssafmandate"></a>
<a id="tocsurssafmandate"></a>

```json
{
  "bic": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "iban": "string",
  "id": 0,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|iban|string|false|none|none|
|id|integer|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "civility": "string",
  "establishments": [
    {
      "emails": [
        "user@example.com"
      ],
      "id": 0,
      "name": "string",
      "nic": "string",
      "phones": [
        "string"
      ],
      "place": {
        "administrative_area_level1": "string",
        "administrative_area_level2": "string",
        "administrative_area_level3": "string",
        "country": "string",
        "countryiso2": "string",
        "formatted_address": "string",
        "id": 0,
        "latitude": 0,
        "locality": "string",
        "longitude": 0,
        "postal_code": "string",
        "route": "string",
        "route2": "string",
        "street_number": "string",
        "sublocality": "string"
      }
    }
  ],
  "firstname": "string",
  "id": 0,
  "image": "http://example.com",
  "lastname": "string",
  "metadata": [
    null
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "last_access_at": "1970-01-01T00:00:00Z",
  "password": "password",
  "password_is_undefined": true,
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|civility|string \| null|false|none|Civility is the lastname prefix|
|establishments|[[EstablishmentIdentity](#schemaestablishmentidentity)]|false|none|none|
|firstname|string|false|none|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|none|none|
|lastname|string|false|none|none|
|metadata|[object]|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|email|string(email)|false|read-only|Email used as login|
|id|integer|false|read-only|none|
|last_access_at|string(date-time)|false|read-only|none|
|metadata|[object]|false|none|none|
|password|string(password)|false|write-only|none|
|password_is_undefined|boolean|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_UserPolicy">UserPolicy</h2>
<!-- backwards compatibility -->
<a id="schemauserpolicy"></a>
<a id="schema_UserPolicy"></a>
<a id="tocSuserpolicy"></a>
<a id="tocsuserpolicy"></a>

```json
{
  "app": {
    "admin": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "config": [
      null
    ],
    "hostname_alias": "example.com",
    "id": 0,
    "last_access_at": "1970-01-01T00:00:00Z",
    "last_user": {
      "civility": "string",
      "establishments": [
        {
          "emails": [
            "user@example.com"
          ],
          "id": 0,
          "name": "string",
          "nic": "string",
          "phones": [
            "string"
          ],
          "place": {
            "administrative_area_level1": "string",
            "administrative_area_level2": "string",
            "administrative_area_level3": "string",
            "country": "string",
            "countryiso2": "string",
            "formatted_address": "string",
            "id": 0,
            "latitude": 0,
            "locality": "string",
            "longitude": 0,
            "postal_code": "string",
            "route": "string",
            "route2": "string",
            "street_number": "string",
            "sublocality": "string"
          }
        }
      ],
      "firstname": "string",
      "id": 0,
      "image": "http://example.com",
      "lastname": "string",
      "metadata": [
        null
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "last_access_at": "1970-01-01T00:00:00Z",
      "password": "password",
      "password_is_undefined": true,
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "organization": {},
    "policies": [
      {}
    ],
    "subscription": {
      "access_level": "full",
      "id": 0,
      "payment_card": "string",
      "payment_failed_count": 0,
      "period_ending_date": "1970-01-01T00:00:00Z",
      "period_remaining_days": 0,
      "period_starting_date": "1970-01-01T00:00:00Z",
      "plan_color": "string",
      "plan_name": "string",
      "status": "string",
      "stripe_customer_id": "string",
      "stripe_plan_id": "string",
      "stripe_subscription_id": "string"
    },
    "url": "http://example.com"
  },
  "policy_profile": {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "restricted": true,
    "rights": [
      "string"
    ],
    "visible": 0
  },
  "user": {
    "civility": "string",
    "establishments": [
      {
        "emails": [
          "user@example.com"
        ],
        "id": 0,
        "name": "string",
        "nic": "string",
        "phones": [
          "string"
        ],
        "place": {
          "administrative_area_level1": "string",
          "administrative_area_level2": "string",
          "administrative_area_level3": "string",
          "country": "string",
          "countryiso2": "string",
          "formatted_address": "string",
          "id": 0,
          "latitude": 0,
          "locality": "string",
          "longitude": 0,
          "postal_code": "string",
          "route": "string",
          "route2": "string",
          "street_number": "string",
          "sublocality": "string"
        }
      }
    ],
    "firstname": "string",
    "id": 0,
    "image": "http://example.com",
    "lastname": "string",
    "metadata": [
      null
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "email": "user@example.com",
    "last_access_at": "1970-01-01T00:00:00Z",
    "password": "password",
    "password_is_undefined": true,
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|none|
|policy_profile|[PolicyProfile](#schemapolicyprofile)|false|none|none|
|user|[User](#schemauser)|false|none|none|
