<h1 id="nexmo-application-api">Nexmo Application API v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
  <h4>Applications V1 is deprecated</h4>
  This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
</div> </div>
A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.

Base URLs:

* <a href="https://api.nexmo.com/v1/applications">https://api.nexmo.com/v1/applications</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@nexmo.com">Nexmo.com</a> 
Web: <a href="https://developer.nexmo.com/">Nexmo.com</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

<a href="https://developer.nexmo.com/api/developer/application">External documentation</a>

<h1 id="nexmo-application-api-default">Default</h1>

## Retrieve all Applications

<a id="opIdretrieveApplications"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/?api_key=string&api_secret=string' \
  -H 'Accept: application/json'
```

`GET /`

You use a `GET` request to retrieve details of all applications associated with your account.

<h3 id="retrieve-all-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)|
|api_secret|query|string|true|You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)|
|page_size|query|integer|false|Set the number of items returned on each call to this endpoint. The default is 10 records.|
|page_index|query|integer|false|Set the offset from the first page. The default value is `0`.|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "applications": [
      {
        "_links": {
          "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
        },
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "keys": {
          "public_key": "PUBLIC_KEY"
        },
        "messages": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/status",
              "endpoint_type": "status_url",
              "http_method": "POST"
            }
          ]
        },
        "name": "My Application",
        "voice": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/answer",
              "endpoint_type": "answer_url",
              "http_method": "GET"
            }
          ]
        }
      }
    ]
  },
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "count": 1,
  "page_index": 1,
  "page_size": 10
}
```

<h3 id="retrieve-all-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[applications](#schemaapplications)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Application

<a id="opIdcreateApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "answer_method": "GET",
    "answer_url": "https://example.com/webhooks/answer",
    "api_key": "ap1k3y",
    "api_secret": "230e6cf0709417176df1b4fc1e083adc",
    "event_method": "POST",
    "event_url": "https://example.com/webhooks/event",
    "inbound_method": "POST",
    "inbound_url": "https://example.com/webhooks/inbound",
    "name": "My Application",
    "status_method": "POST",
    "status_url": "https://example.com/webhooks/status",
    "type": "voice"
  }'
```

`POST /`

You use a `POST` request to create a new application.

> Body parameter

```json
{
  "answer_method": "GET",
  "answer_url": "https://example.com/webhooks/answer",
  "api_key": "ap1k3y",
  "api_secret": "230e6cf0709417176df1b4fc1e083adc",
  "event_method": "POST",
  "event_url": "https://example.com/webhooks/event",
  "inbound_method": "POST",
  "inbound_url": "https://example.com/webhooks/inbound",
  "name": "My Application",
  "status_method": "POST",
  "status_url": "https://example.com/webhooks/status",
  "type": "voice"
}
```

<h3 id="create-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» answer_method|body|string|false|The HTTP method used to make the request to `answer_url`. The default value is `GET`.|
|» answer_url|body|string|false|The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only.|
|» api_key|body|[apiKey](#schemaapikey)|true|You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)|
|» api_secret|body|[apiSecret](#schemaapisecret)|true|You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)|
|» event_method|body|string|false|The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only.|
|» event_url|body|string|false|Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications.|
|» inbound_method|body|string|false|The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only.|
|» inbound_url|body|string|false|Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only.|
|» name|body|string|true|The name of your application.|
|» status_method|body|string|false|The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only.|
|» status_url|body|string|false|Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only.|
|» type|body|string|true|The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|voice|
|» type|messages|

> Example responses

> 201 Response

```json
{
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "keys": {
    "public_key": "PUBLIC_KEY",
    "private_key": "PRIVATE_KEY"
  },
  "messages": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/status",
        "endpoint_type": "status_url",
        "http_method": "POST"
      }
    ]
  },
  "name": "My Application",
  "voice": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/answer",
        "endpoint_type": "answer_url",
        "http_method": "GET"
      }
    ]
  }
}
```

<h3 id="create-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[applicationCreated](#schemaapplicationcreated)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Application

<a id="opIdretrieveApplication"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/aaaaaaaa-bbbb-cccc-dddd-0123456789ab?api_key=string&api_secret=string' \
  -H 'Accept: application/json'
```

`GET /{app_id}`

You use a `GET` request to retrieve details about a single application.

<h3 id="retrieve-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)|
|api_secret|query|string|true|You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)|
|app_id|path|string|true|The ID allocated to your application by Nexmo.|

> Example responses

> 200 Response

```json
{
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "keys": {
    "public_key": "PUBLIC_KEY"
  },
  "messages": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/status",
        "endpoint_type": "status_url",
        "http_method": "POST"
      }
    ]
  },
  "name": "My Application",
  "voice": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/answer",
        "endpoint_type": "answer_url",
        "http_method": "GET"
      }
    ]
  }
}
```

<h3 id="retrieve-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Application

<a id="opIdupdateApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "answer_method": "GET",
    "answer_url": "https://example.com/webhooks/answer",
    "api_key": "ap1k3y",
    "api_secret": "230e6cf0709417176df1b4fc1e083adc",
    "event_method": "POST",
    "event_url": "https://example.com/webhooks/event",
    "name": "UpdatedApplication",
    "type": "voice"
  }'
```

`PUT /{app_id}`

You use a `PUT` request to update an existing application.

> Body parameter

```json
{
  "answer_method": "GET",
  "answer_url": "https://example.com/webhooks/answer",
  "api_key": "ap1k3y",
  "api_secret": "230e6cf0709417176df1b4fc1e083adc",
  "event_method": "POST",
  "event_url": "https://example.com/webhooks/event",
  "name": "UpdatedApplication",
  "type": "voice"
}
```

<h3 id="update-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The ID allocated to your application by Nexmo.|
|body|body|object|false|none|
|» answer_method|body|string|false|The HTTP method used to make the request to `answer_url`. The default value is `GET`.|
|» answer_url|body|string(url)|false|The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`.|
|» api_key|body|[apiKey](#schemaapikey)|true|You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)|
|» api_secret|body|[apiSecret](#schemaapisecret)|true|You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)|
|» event_method|body|string|false|The HTTP method used to send event information to `event_url`. The default value is POST.|
|» event_url|body|string(url)|false|Nexmo sends event information asynchronously to this URL when status changes.|
|» name|body|string|true|The name of your application.|
|» type|body|string|true|The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|voice|
|» type|messages|

> Example responses

> 200 Response

```json
{
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "keys": {
    "public_key": "PUBLIC_KEY"
  },
  "messages": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/status",
        "endpoint_type": "status_url",
        "http_method": "POST"
      }
    ]
  },
  "name": "My Application",
  "voice": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/answer",
        "endpoint_type": "answer_url",
        "http_method": "GET"
      }
    ]
  }
}
```

<h3 id="update-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## Destroy Application

<a id="opIddeleteApplication"></a>

> Code samples

```bash
curl https://api.nexmo.com/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -X DELETE
```

`DELETE /{app_id}`

You use a `DELETE` request to delete a single application.

<h3 id="destroy-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|The ID allocated to your application by Nexmo.|

<h3 id="destroy-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_apiKey">apiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_apiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
"ap1k3y"
```

You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)

<h2 id="tocS_apiSecret">apiSecret</h2>
<!-- backwards compatibility -->
<a id="schemaapisecret"></a>
<a id="schema_apiSecret"></a>
<a id="tocSapisecret"></a>
<a id="tocsapisecret"></a>

```json
"230e6cf0709417176df1b4fc1e083adc"
```

You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)

<h2 id="tocS_application">application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "keys": {
    "public_key": "PUBLIC_KEY"
  },
  "messages": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/status",
        "endpoint_type": "status_url",
        "http_method": "POST"
      }
    ]
  },
  "name": "My Application",
  "voice": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/answer",
        "endpoint_type": "answer_url",
        "http_method": "GET"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[links](#schemalinks)|false|none|A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).|
|id|string|false|none|The ID allocated to your application by Nexmo.|
|keys|[keys](#schemakeys)|false|none|The Nexmo product that you access with this application.|
|messages|[messages](#schemamessages)|true|none|The Nexmo product that you access with this application.|
|name|string|true|none|The name of your application|
|voice|[voice](#schemavoice)|true|none|The Nexmo product that you access with this application.|

<h2 id="tocS_applicationBase">applicationBase</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationbase"></a>
<a id="schema_applicationBase"></a>
<a id="tocSapplicationbase"></a>
<a id="tocsapplicationbase"></a>

```json
{
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "name": "My Application"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID allocated to your application by Nexmo.|
|name|string|false|none|The name of your application|

<h2 id="tocS_applicationCreated">applicationCreated</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcreated"></a>
<a id="schema_applicationCreated"></a>
<a id="tocSapplicationcreated"></a>
<a id="tocsapplicationcreated"></a>

```json
{
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "keys": {
    "public_key": "PUBLIC_KEY",
    "private_key": "PRIVATE_KEY"
  },
  "messages": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/status",
        "endpoint_type": "status_url",
        "http_method": "POST"
      }
    ]
  },
  "name": "My Application",
  "voice": {
    "webhooks": [
      {
        "endpoint": "https://example.com/webhooks/answer",
        "endpoint_type": "answer_url",
        "http_method": "GET"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[links](#schemalinks)|false|none|A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).|
|id|string|false|none|The ID allocated to your application by Nexmo.|
|keys|[keys](#schemakeys)|false|none|The Nexmo product that you access with this application.|
|messages|[messages](#schemamessages)|true|none|The Nexmo product that you access with this application.|
|name|string|true|none|The name of your application|
|voice|[voice](#schemavoice)|true|none|The Nexmo product that you access with this application.|
|keys|[keysWithPrivateKey](#schemakeyswithprivatekey)|false|none|none|

<h2 id="tocS_applications">applications</h2>
<!-- backwards compatibility -->
<a id="schemaapplications"></a>
<a id="schema_applications"></a>
<a id="tocSapplications"></a>
<a id="tocsapplications"></a>

```json
{
  "_embedded": {
    "applications": [
      {
        "_links": {
          "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
        },
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "keys": {
          "public_key": "PUBLIC_KEY"
        },
        "messages": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/status",
              "endpoint_type": "status_url",
              "http_method": "POST"
            }
          ]
        },
        "name": "My Application",
        "voice": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/answer",
              "endpoint_type": "answer_url",
              "http_method": "GET"
            }
          ]
        }
      }
    ]
  },
  "_links": {
    "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "count": 1,
  "page_index": 1,
  "page_size": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|true|none|none|
|_links|[links](#schemalinks)|true|none|A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).|
|count|integer|true|none|The number of items associated with your account.|
|page_index|integer|true|none|The offset from the first page.|
|page_size|integer|true|none|The number of items returned on each call to this endpoint. The default is 10 records.|

<h2 id="tocS_applicationsBase">applicationsBase</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsbase"></a>
<a id="schema_applicationsBase"></a>
<a id="tocSapplicationsbase"></a>
<a id="tocsapplicationsbase"></a>

```json
{
  "_embedded": {
    "applications": [
      {
        "_links": {
          "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
        },
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "keys": {
          "public_key": "PUBLIC_KEY"
        },
        "messages": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/status",
              "endpoint_type": "status_url",
              "http_method": "POST"
            }
          ]
        },
        "name": "My Application",
        "voice": {
          "webhooks": [
            {
              "endpoint": "https://example.com/webhooks/answer",
              "endpoint_type": "answer_url",
              "http_method": "GET"
            }
          ]
        }
      }
    ]
  },
  "count": 1,
  "page_index": 1,
  "page_size": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|count|integer|false|none|The number of items associated with your account.|
|page_index|integer|false|none|The offset from the first page.|
|page_size|integer|false|none|The number of items returned on each call to this endpoint. The default is 10 records.|

<h2 id="tocS_keys">keys</h2>
<!-- backwards compatibility -->
<a id="schemakeys"></a>
<a id="schema_keys"></a>
<a id="tocSkeys"></a>
<a id="tocskeys"></a>

```json
{
  "public_key": "PUBLIC_KEY"
}
```

The Nexmo product that you access with this application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|false|none|The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).|

<h2 id="tocS_keysWithPrivateKey">keysWithPrivateKey</h2>
<!-- backwards compatibility -->
<a id="schemakeyswithprivatekey"></a>
<a id="schema_keysWithPrivateKey"></a>
<a id="tocSkeyswithprivatekey"></a>
<a id="tocskeyswithprivatekey"></a>

```json
{
  "public_key": "PUBLIC_KEY",
  "private_key": "PRIVATE_KEY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|false|none|The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).|
|private_key|string|false|none|The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API.|

<h2 id="tocS_links">links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "href": "/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(url)|false|none|The link URL.|

<h2 id="tocS_messages">messages</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_messages"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
{
  "webhooks": [
    {
      "endpoint": "https://example.com/webhooks/status",
      "endpoint_type": "status_url",
      "http_method": "POST"
    }
  ]
}
```

The Nexmo product that you access with this application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[object]|false|none|none|

<h2 id="tocS_voice">voice</h2>
<!-- backwards compatibility -->
<a id="schemavoice"></a>
<a id="schema_voice"></a>
<a id="tocSvoice"></a>
<a id="tocsvoice"></a>

```json
{
  "webhooks": [
    {
      "endpoint": "https://example.com/webhooks/answer",
      "endpoint_type": "answer_url",
      "http_method": "GET"
    }
  ]
}
```

The Nexmo product that you access with this application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[object]|false|none|none|
