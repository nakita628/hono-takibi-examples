<h1 id="kong-admin-api">Kong Admin API v3.9.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI 3.0 spec for Kong Gateway's open source Admin API.

You can know more about Kong Gateway at [docs.konghq.com](https://docs.konghq.com)
.Give Kong a star at [Kong/kong](https://github.com/kong/kong) repository.

Base URLs:

* <a href="http://localhost:8001/">http://localhost:8001/</a> - Default Admin API URL

Email: <a href="mailto:docs@konghq.com">Kong Inc</a> 
Web: <a href="https://konghq.com">Kong Inc</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://docs.konghq.com">Kong Gateway Admin API (OSS)</a>

<h1 id="kong-admin-api-services">Services</h1>

Service entities are abstractions of your microservice interfaces or formal APIs. For example, a service could be a data transformation microservice or a billing API.
<br><br>
The main attribute of a service is the destination URL for proxying traffic. This URL can be set as a single string or by specifying its protocol, host, port and path individually. 
<br><br>
Services are associated to routes, and a single service can have many routes associated with it. Routes are entrypoints in Kong Gateway which define rules to match client requests. Once a route is matched, Kong Gateway proxies the request to its associated service. See the [Proxy Reference](https://docs.konghq.com/gateway/latest/how-kong-works/routing-traffic/) for a detailed explanation of how Kong proxies traffic.
<br><br>
Services can be both [tagged and filtered by tags](https://docs.konghq.com/gateway/latest/admin-api/#tags).


## List all services

<a id="opIdlist-service"></a>

> Code samples

```bash
curl http://localhost:8001/services \
  -H 'Accept: application/json'
```

`GET /services`

List all services

<h3 id="list-all-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing services|[Service](#schemaservice)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new service

<a id="opIdcreate-service"></a>

> Code samples

```bash
curl http://localhost:8001/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-service",
    "retries": 5,
    "protocol": "http",
    "host": "example.com",
    "port": 80,
    "path": "/some_api",
    "connect_timeout": 6000,
    "write_timeout": 6000,
    "read_timeout": 6000,
    "tags": [
      "user-level"
    ],
    "client_certificate": {
      "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    },
    "tls_verify": true,
    "tls_verify_depth": null,
    "ca_certificates": [
      "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    ],
    "enabled": true
  }'
```

`POST /services`

Create a new service

> Body parameter

```json
{
  "name": "my-service",
  "retries": 5,
  "protocol": "http",
  "host": "example.com",
  "port": 80,
  "path": "/some_api",
  "connect_timeout": 6000,
  "write_timeout": 6000,
  "read_timeout": 6000,
  "tags": [
    "user-level"
  ],
  "client_certificate": {
    "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  },
  "tls_verify": true,
  "tls_verify_depth": null,
  "ca_certificates": [
    "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  ],
  "enabled": true
}
```

<h3 id="create-a-new-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|The service name.<br>|
|» retries|body|integer|false|The number of retries to execute upon failure to proxy. Default:`5`.<br>|
|» protocol|body|string|true|The protocol used to communicate with the upstream. Accepted values are: "`grpc`", "`grpcs`", "`http`", "`https`", "`tcp`", "`tls`", "`tls_passthrough`", "`udp`", "`ws`"<br>, "`wss`"<br>. Default: "`http`".|
|» host|body|string|true|The host of the upstream server. Note that the host value is case sensitive.<br>|
|» port|body|integer|true|The upstream server port. Default: `80`.<br>|
|» path|body|string|false|The path to be used in requests to the upstream server.<br>|
|» connect_timeout|body|integer|false|The timeout in milliseconds for establishing a connection to the upstream server.|
|» write_timeout|body|integer|false|The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» read_timeout|body|integer|false|The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the service for grouping and filtering.<br>|
|» client_certificate|body|object|false|Certificate to be used as client certificate while TLS handshaking to the upstream server. With form-encoded, the notation is `client_certificate.id=<client_certificate id>`. With JSON, use `"client_certificate":{"id":"<client_certificate id>"}`.|
|» » id|body|string|false|none|
|» tls_verify|body|boolean|false|Whether to enable verification of upstream server TLS certificate. If set to null, then the Nginx default is respected.<br>|
|» tls_verify_depth|body|string \| null|false|Maximum depth of chain while verifying Upstream server's TLS certificate. If set to null, then the Nginx default is respected. Default: null.<br>|
|» ca_certificates|body|[string]|false|Array of CA Certificate object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to null when Nginx default is respected. <br>With form-encoded, the notation is `ca_certificates[]=4e3ad2e4-0bc4-4638-8e34-c84a417ba39b&ca_certificates[]=51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515`. With JSON, use an Array.<br>|
|» enabled|body|boolean|true|Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404). Default: `true`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|grpc|
|» protocol|grpcs|
|» protocol|http|
|» protocol|https|
|» protocol|tcp|
|» protocol|tls |
|» protocol|tls_passthrough|
|» protocol|udp|
|» protocol|ws|
|» protocol|wss|

> Example responses

> 200 Response

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created service|[Service](#schemaservice)|
|400|Bad Request|Invalid service|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a service

<a id="opIdget-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}`

Get a service using ID or name.

<h3 id="fetch-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|

> Example responses

> 200 Response

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched service|[Service](#schemaservice)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a service

<a id="opIdupsert-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-service",
    "retries": 5,
    "protocol": "http",
    "host": "example.com",
    "port": 80,
    "path": "/some_api",
    "connect_timeout": 6000,
    "write_timeout": 6000,
    "read_timeout": 6000,
    "tags": [
      "user-level"
    ],
    "client_certificate": {
      "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    },
    "tls_verify": true,
    "tls_verify_depth": null,
    "ca_certificates": [
      "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    ],
    "enabled": true
  }'
```

`PUT /services/{service_id_or_name}`

Create or Update service using ID or name.

> Body parameter

```json
{
  "name": "my-service",
  "retries": 5,
  "protocol": "http",
  "host": "example.com",
  "port": 80,
  "path": "/some_api",
  "connect_timeout": 6000,
  "write_timeout": 6000,
  "read_timeout": 6000,
  "tags": [
    "user-level"
  ],
  "client_certificate": {
    "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  },
  "tls_verify": true,
  "tls_verify_depth": null,
  "ca_certificates": [
    "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  ],
  "enabled": true
}
```

<h3 id="upsert-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|Name or ID of the service to lookup|
|body|body|object|false|none|
|» name|body|string|false|The service name.<br>|
|» retries|body|integer|false|The number of retries to execute upon failure to proxy. Default:`5`.<br>|
|» protocol|body|string|true|The protocol used to communicate with the upstream. Accepted values are: "`grpc`", "`grpcs`", "`http`", "`https`", "`tcp`", "`tls`", "`tls_passthrough`", "`udp`", "`ws`"<br>, "`wss`"<br>. Default: "`http`".|
|» host|body|string|true|The host of the upstream server. Note that the host value is case sensitive.<br>|
|» port|body|integer|true|The upstream server port. Default: `80`.<br>|
|» path|body|string|false|The path to be used in requests to the upstream server.<br>|
|» connect_timeout|body|integer|false|The timeout in milliseconds for establishing a connection to the upstream server.|
|» write_timeout|body|integer|false|The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» read_timeout|body|integer|false|The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the service for grouping and filtering.<br>|
|» client_certificate|body|object|false|Certificate to be used as client certificate while TLS handshaking to the upstream server. With form-encoded, the notation is `client_certificate.id=<client_certificate id>`. With JSON, use `"client_certificate":{"id":"<client_certificate id>"}`.|
|» » id|body|string|false|none|
|» tls_verify|body|boolean|false|Whether to enable verification of upstream server TLS certificate. If set to null, then the Nginx default is respected.<br>|
|» tls_verify_depth|body|string \| null|false|Maximum depth of chain while verifying Upstream server's TLS certificate. If set to null, then the Nginx default is respected. Default: null.<br>|
|» ca_certificates|body|[string]|false|Array of CA Certificate object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to null when Nginx default is respected. <br>With form-encoded, the notation is `ca_certificates[]=4e3ad2e4-0bc4-4638-8e34-c84a417ba39b&ca_certificates[]=51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515`. With JSON, use an Array.<br>|
|» enabled|body|boolean|true|Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404). Default: `true`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|grpc|
|» protocol|grpcs|
|» protocol|http|
|» protocol|https|
|» protocol|tcp|
|» protocol|tls |
|» protocol|tls_passthrough|
|» protocol|udp|
|» protocol|ws|
|» protocol|wss|

> Example responses

> 200 Response

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted service|[Service](#schemaservice)|
|400|Bad Request|Invalid service|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a service

<a id="opIddelete-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /services/{service_id_or_name}`

Delete a service

<h3 id="delete-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID or name of the service to delete|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted service or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a service

<a id="opIdupdate-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-service",
    "retries": 5,
    "protocol": "http",
    "host": "example.com",
    "port": 80,
    "path": "/some_api",
    "connect_timeout": 6000,
    "write_timeout": 6000,
    "read_timeout": 6000,
    "tags": [
      "user-level"
    ],
    "client_certificate": {
      "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    },
    "tls_verify": true,
    "tls_verify_depth": null,
    "ca_certificates": [
      "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
    ],
    "enabled": true
  }'
```

`PATCH /services/{service_id_or_name}`

Update a service

> Body parameter

```json
{
  "name": "my-service",
  "retries": 5,
  "protocol": "http",
  "host": "example.com",
  "port": 80,
  "path": "/some_api",
  "connect_timeout": 6000,
  "write_timeout": 6000,
  "read_timeout": 6000,
  "tags": [
    "user-level"
  ],
  "client_certificate": {
    "id": "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  },
  "tls_verify": true,
  "tls_verify_depth": null,
  "ca_certificates": [
    "4e3ad2e4-0bc4-4638-8e34-c84a417ba39b"
  ],
  "enabled": true
}
```

<h3 id="update-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID or name of the service to update|
|body|body|object|false|none|
|» name|body|string|false|The service name.<br>|
|» retries|body|integer|false|The number of retries to execute upon failure to proxy. Default:`5`.<br>|
|» protocol|body|string|true|The protocol used to communicate with the upstream. Accepted values are: "`grpc`", "`grpcs`", "`http`", "`https`", "`tcp`", "`tls`", "`tls_passthrough`", "`udp`", "`ws`"<br>, "`wss`"<br>. Default: "`http`".|
|» host|body|string|true|The host of the upstream server. Note that the host value is case sensitive.<br>|
|» port|body|integer|true|The upstream server port. Default: `80`.<br>|
|» path|body|string|false|The path to be used in requests to the upstream server.<br>|
|» connect_timeout|body|integer|false|The timeout in milliseconds for establishing a connection to the upstream server.|
|» write_timeout|body|integer|false|The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» read_timeout|body|integer|false|The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Default: `60000`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the service for grouping and filtering.<br>|
|» client_certificate|body|object|false|Certificate to be used as client certificate while TLS handshaking to the upstream server. With form-encoded, the notation is `client_certificate.id=<client_certificate id>`. With JSON, use `"client_certificate":{"id":"<client_certificate id>"}`.|
|» » id|body|string|false|none|
|» tls_verify|body|boolean|false|Whether to enable verification of upstream server TLS certificate. If set to null, then the Nginx default is respected.<br>|
|» tls_verify_depth|body|string \| null|false|Maximum depth of chain while verifying Upstream server's TLS certificate. If set to null, then the Nginx default is respected. Default: null.<br>|
|» ca_certificates|body|[string]|false|Array of CA Certificate object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to null when Nginx default is respected. <br>With form-encoded, the notation is `ca_certificates[]=4e3ad2e4-0bc4-4638-8e34-c84a417ba39b&ca_certificates[]=51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515`. With JSON, use an Array.<br>|
|» enabled|body|boolean|true|Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404). Default: `true`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|grpc|
|» protocol|grpcs|
|» protocol|http|
|» protocol|https|
|» protocol|tcp|
|» protocol|tls |
|» protocol|tls_passthrough|
|» protocol|udp|
|» protocol|ws|
|» protocol|wss|

> Example responses

> 200 Response

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated service|[Service](#schemaservice)|
|400|Bad Request|Invalid service|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-routes">Routes</h1>

Route entities define rules to match client requests. Each route is associated with a service, and a service may have multiple routes associated to it. Every request matching a given route will be proxied to the associated service. You need at least one matching rule that applies to the protocol being matched by the route.
<br><br>
The combination of routes and services, and the separation of concerns between them, offers a powerful routing mechanism with which it is possible to define fine-grained entrypoints in Kong Gateway leading to different upstream services of your infrastructure.
<br><br>
Depending on the protocol, one of the following attributes must be set:
<br>
* `http`: At least one of `methods`, `hosts`, `headers`, or `paths`
* `https`:  At least one of `methods`, `hosts`, `headers`, `paths`, or `snis`
* `tcp`: At least one of `sources` or `destinations`
* `tls`: at least one of `sources`, `destinations`, or `snis`
* `tls_passthrough`: set `snis`
* `grpc`: At least one of `hosts`, `headers`, or `paths`
* `grpcs`: At least one of `hosts`, `headers`, `paths`, or `snis`
<br>

A route can't have both `tls` and `tls_passthrough` protocols at same time.
<br><br>

Learn more about the router: 
* [Configure routes using expressions](https://docs.konghq.com/gateway/latest/key-concepts/routes/expressions/)
* [Router Expressions language reference](https://docs.konghq.com/gateway/latest/reference/expressions-language/)


## List all routes

<a id="opIdlist-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes \
  -H 'Accept: application/json'
```

`GET /routes`

List all routes

route entities define rules to match client requests. Each route is associated with a service, and a service may have multiple routes associated to it. Every request matching a given route will be proxied to its associated service.

> Note: Path handling algorithms v1 was deprecated in Kong 3.0. From Kong 3.0, when router_flavor is set to expressions, route.path_handling will be unconfigurable and the path handling behavior will be "v0"; when router_flavor is set to traditional_compatible, the path handling behavior will be "v0" regardless of the value of route.path_handling. Only router_flavor = traditional will support path_handling "v1" behavior.

<h3 id="list-all-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "hosts": [
        "foo.example.com",
        "bar.example.com"
      ],
      "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
      "name": "example-route",
      "paths": [
        "/v1",
        "/v2"
      ],
      "service": {
        "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
      }
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing routes|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-routes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Route](#schemaroute)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new route

<a id="opIdcreate-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`POST /routes`

Create a new route

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="create-a-new-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a route

<a id="opIdget-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route \
  -H 'Accept: application/json'
```

`GET /routes/{route_id_or_name}`

Get a route using ID or name.

<h3 id="fetch-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched route|[Route](#schemaroute)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a route

<a id="opIdupsert-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`PUT /routes/{route_id_or_name}`

Create or Update route using ID or name.


> Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="update-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a route

<a id="opIddelete-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /routes/{route_id_or_name}`

Delete a route


> Note: This API is not available in DB-less mode.

<h3 id="delete-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted route or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a route

<a id="opIdupdate-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`PATCH /routes/{route_id_or_name}`

Update a route

> Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="update-a-route-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-route-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all routes associated with a service

<a id="opIdlist-routes-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/string/routes \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}/routes`

List all routes associated with a service

<h3 id="list-all-routes-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID or name of the related service|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "hosts": [
        "foo.example.com",
        "bar.example.com"
      ],
      "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
      "name": "example-route",
      "paths": [
        "/v1",
        "/v2"
      ],
      "service": {
        "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
      }
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-routes-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing routes|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-routes-associated-with-a-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Route](#schemaroute)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new route associated with a service

<a id="opIdcreate-route-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/string/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`POST /services/{service_id_or_name}/routes`

Create a new route associated with a service

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="create-a-new-route-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID or name of the related service|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-route-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a route associated with a service

<a id="opIdfetch-route-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/routes/my-route \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}/routes/{route_id_or_name}`

Get a route associated with a service using ID or name.

<h3 id="fetch-a-route-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-route-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched route|[Route](#schemaroute)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a route associated with a service

<a id="opIdupsert-route-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/routes/my-route \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`PUT /services/{service_id_or_name}/routes/{route_id_or_name}`

Create or Update a route associated with a service using ID or name.

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="upsert-a-route-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-route-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a route associated with a service

<a id="opIddelete-route-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/routes/my-route \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /services/{service_id_or_name}/routes/{route_id_or_name}`

Delete a route associated with a service using ID or name.

<h3 id="delete-a-route-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-route-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted route or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a route associated with a service

<a id="opIdupdate-route-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/routes/my-route \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-route",
    "protocols": [
      "http",
      "https"
    ],
    "methods": [
      "GET",
      "POST"
    ],
    "hosts": [
      "example.com",
      "foo.test"
    ],
    "paths": [
      "/foo",
      "/bar"
    ],
    "headers": {
      "x-my-header": [
        "foo",
        "bar"
      ],
      "x-another-header": [
        "bla"
      ]
    },
    "https_redirect_status_code": 426,
    "regex_priority": 0,
    "strip_path": true,
    "path_handling": "v0",
    "preserve_host": false,
    "request_buffering": true,
    "response_buffering": true,
    "tags": [
      "user-level",
      "low-priority"
    ],
    "service": {
      "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
    }
  }'
```

`PATCH /services/{service_id_or_name}/routes/{route_id_or_name}`

Update a route associated with a service using ID or name.

> Body parameter

```json
{
  "name": "my-route",
  "protocols": [
    "http",
    "https"
  ],
  "methods": [
    "GET",
    "POST"
  ],
  "hosts": [
    "example.com",
    "foo.test"
  ],
  "paths": [
    "/foo",
    "/bar"
  ],
  "headers": {
    "x-my-header": [
      "foo",
      "bar"
    ],
    "x-another-header": [
      "bla"
    ]
  },
  "https_redirect_status_code": 426,
  "regex_priority": 0,
  "strip_path": true,
  "path_handling": "v0",
  "preserve_host": false,
  "request_buffering": true,
  "response_buffering": true,
  "tags": [
    "user-level",
    "low-priority"
  ],
  "service": {
    "id": "af8330d3-dbdc-48bd-b1be-55b98608834b"
  }
}
```

<h3 id="update-a-route-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Route request body|
|» name|body|string|false|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".<br>|
|» protocols|body|[string]|true|An array of the protocols this route should allow|
|» methods|body|[string]|false|A list of HTTP methods that match this route.<br>|
|» hosts|body|[string]|false|A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.|
|» paths|body|[string]|false|A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.|
|» headers|body|object|false|One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.|
|» » x-my-header|body|[string]|false|none|
|» » x-another-header|body|[string]|false|none|
|» https_redirect_status_code|body|integer|true|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`<br>Location header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.|
|» regex_priority|body|integer|false|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|» strip_path|body|boolean|false|When matching a route via one of the paths, strip the matching prefix from the upstream request URL.|
|» path_handling|body|string|false|Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".|
|» preserve_host|body|boolean|true|When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.<br>|
|» request_buffering|body|boolean|true|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.<br>|
|» response_buffering|body|boolean|true|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.<br>|
|» snis|body|[string]|false|A list of SNIs that match this route when using stream routing.<br>|
|» sources|body|[object]|false|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» destinations|body|[object]|false|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".<br>|
|» » ip|body|string|false|none|
|» » port|body|integer|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the route for grouping and filtering.<br>|
|» service|body|object|false|The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|» » id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» https_redirect_status_code|426|
|» https_redirect_status_code|301|
|» https_redirect_status_code|302|
|» https_redirect_status_code|307|
|» https_redirect_status_code|308|
|» path_handling|v1|
|» path_handling|v0|

> Example responses

> 200 Response

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-route-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated route|[Route](#schemaroute)|
|400|Bad Request|Invalid route|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-plugins">Plugins</h1>

A plugin entity represents a plugin configuration that will be executed during the HTTP request/response lifecycle. Plugins let you add functionality to services that run behind a Kong Gateway instance, like authentication or rate limiting.
You can find more information about available plugins and which values each plugin accepts at the [Plugin Hub](https://docs.konghq.com/hub/).
<br><br>
When adding a plugin configuration to a service, the plugin will run on every request made by a client to that service. If a plugin needs to be tuned to different values for some specific consumers, you can do so by creating a separate plugin instance that specifies both the service and the consumer, through the service and consumer fields.
<br><br>
Plugins can be both [tagged and filtered by tags](https://docs.konghq.com/gateway/latest/admin-api/#tags).


## List all plugins associated with a consumer

<a id="opIdlist-plugins-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins \
  -H 'Accept: application/json'
```

`GET /consumers/{consumer_username_or_id}/plugins`

Retrieve a list of all plugins associated with a consumer.

<h3 id="list-all-plugins-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "02621eee-8309-4bf6-b36b-a82017a5393e",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "http",
        "https"
      ],
      "enabled": true,
      "tags": [
        "user-level",
        "low-priority"
      ]
    },
    {
      "id": "66c7b5c4-4aaf-4119-af1e-ee3ad75d0af4",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "tcp",
        "tls"
      ],
      "enabled": true,
      "tags": [
        "admin",
        "high-priority",
        "critical"
      ]
    }
  ],
  "next": "http://localhost:8001/plugins?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

<h3 id="list-all-plugins-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="list-all-plugins-associated-with-a-consumer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|route|string \| null|false|none|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.|
|service|string \| null|false|none|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.|
|consumer|string \| null|false|none|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)|
|instance_name|string|false|none|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|config|object|false|none|The configuration properties for the Plugin|
|» hour|integer|false|none|none|
|» minute|integer|false|none|none|
|protocols|[string]|false|none|A list of the request protocols that will trigger this plugin.|
|enabled|boolean|false|none|Whether the plugin is applied. Default: `true`.<br>|
|tags|[string]|false|none|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|protocols|http|
|protocols|grpc|
|protocols|grpcs|
|protocols|tls|
|protocols|tcp|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Plugin associated with a Consumer

<a id="opIdcreate-plugin-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`POST /consumers/{consumer_username_or_id}/plugins`

Create a new Plugin associated with a Consumer

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-plugin-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-plugin-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Plugin associated with a Consumer

<a id="opIdfetch-plugin-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins/response-ratelimiting \
  -H 'Accept: application/json'
```

`GET /consumers/{consumer_username_or_id}/plugins/{plugin_id}`

Get a Plugin associated with a Consumer using ID.

<h3 id="fetch-a-plugin-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-plugin-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Plugin|[Plugin](#schemaplugin)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Plugin associated with a Consumer

<a id="opIdupsert-plugin-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins/response-ratelimiting \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PUT /consumers/{consumer_username_or_id}/plugins/{plugin_id}`

Create or Update a Plugin associated with a Consumer using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-plugin-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "02621eee-8309-4bf6-b36b-a82017a5393e",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "http",
        "https"
      ],
      "enabled": true,
      "tags": [
        "user-level",
        "low-priority"
      ]
    },
    {
      "id": "66c7b5c4-4aaf-4119-af1e-ee3ad75d0af4",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "tcp",
        "tls"
      ],
      "enabled": true,
      "tags": [
        "admin",
        "high-priority",
        "critical"
      ]
    }
  ],
  "next": "http://localhost:8001/plugins?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-plugin-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="upsert-a-plugin-associated-with-a-consumer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|route|string \| null|false|none|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.|
|service|string \| null|false|none|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.|
|consumer|string \| null|false|none|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)|
|instance_name|string|false|none|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|config|object|false|none|The configuration properties for the Plugin|
|» hour|integer|false|none|none|
|» minute|integer|false|none|none|
|protocols|[string]|false|none|A list of the request protocols that will trigger this plugin.|
|enabled|boolean|false|none|Whether the plugin is applied. Default: `true`.<br>|
|tags|[string]|false|none|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|protocols|http|
|protocols|grpc|
|protocols|grpcs|
|protocols|tls|
|protocols|tcp|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Plugin associated with a Consumer

<a id="opIddelete-plugin-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins/response-ratelimiting \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /consumers/{consumer_username_or_id}/plugins/{plugin_id}`

Delete a Plugin associated with a Consumer using ID.

<h3 id="delete-a-plugin-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-plugin-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Plugin or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Plugin associated with a Consumer

<a id="opIdupdate-plugin-for-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username/plugins/response-ratelimiting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /consumers/{consumer_username_or_id}/plugins/{plugin_id}`

Update a Plugin associated with a consumer using the consumer username or ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-plugin-associated-with-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "02621eee-8309-4bf6-b36b-a82017a5393e",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "http",
        "https"
      ],
      "enabled": true,
      "tags": [
        "user-level",
        "low-priority"
      ]
    },
    {
      "id": "66c7b5c4-4aaf-4119-af1e-ee3ad75d0af4",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "tcp",
        "tls"
      ],
      "enabled": true,
      "tags": [
        "admin",
        "high-priority",
        "critical"
      ]
    }
  ],
  "next": "http://localhost:8001/plugins?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-plugin-associated-with-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<h3 id="update-a-plugin-associated-with-a-consumer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|route|string \| null|false|none|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.|
|service|string \| null|false|none|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.|
|consumer|string \| null|false|none|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)|
|instance_name|string|false|none|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|config|object|false|none|The configuration properties for the Plugin|
|» hour|integer|false|none|none|
|» minute|integer|false|none|none|
|protocols|[string]|false|none|A list of the request protocols that will trigger this plugin.|
|enabled|boolean|false|none|Whether the plugin is applied. Default: `true`.<br>|
|tags|[string]|false|none|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|protocols|http|
|protocols|grpc|
|protocols|grpcs|
|protocols|tls|
|protocols|tcp|

<aside class="success">
This operation does not require authentication
</aside>

## List all Plugins

<a id="opIdlist-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins \
  -H 'Accept: application/json'
```

`GET /plugins`

This endpoint allows you to list all the plugins. You can use query parameters to filter the results by size or tags, for example `/plugins?size=50&tags=enterprise`.

<h3 id="list-all-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "02621eee-8309-4bf6-b36b-a82017a5393e",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "http",
        "https"
      ],
      "enabled": true,
      "tags": [
        "user-level",
        "low-priority"
      ]
    },
    {
      "id": "66c7b5c4-4aaf-4119-af1e-ee3ad75d0af4",
      "name": "rate-limiting",
      "created_at": 1422386534,
      "route": null,
      "service": null,
      "consumer": null,
      "config": {
        "hour": 500,
        "minute": 20
      },
      "protocols": [
        "tcp",
        "tls"
      ],
      "enabled": true,
      "tags": [
        "admin",
        "high-priority",
        "critical"
      ]
    }
  ],
  "next": "http://localhost:8001/plugins?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-plugins-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|route|string \| null|false|none|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.|
|service|string \| null|false|none|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.|
|consumer|string \| null|false|none|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)|
|instance_name|string|false|none|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|config|object|false|none|The configuration properties for the Plugin|
|» hour|integer|false|none|none|
|» minute|integer|false|none|none|
|protocols|[string]|false|none|A list of the request protocols that will trigger this plugin.|
|enabled|boolean|false|none|Whether the plugin is applied. Default: `true`.<br>|
|tags|[string]|false|none|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|protocols|http|
|protocols|grpc|
|protocols|grpcs|
|protocols|tls|
|protocols|tcp|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Plugin

<a id="opIdcreate-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`POST /plugins`

Create a new Plugin

>Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Plugin

<a id="opIdget-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins/response-ratelimiting \
  -H 'Accept: application/json'
```

`GET /plugins/{plugin_id}`

Get a Plugin using ID.

<h3 id="fetch-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Plugin|[Plugin](#schemaplugin)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Plugin

<a id="opIdupsert-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins/response-ratelimiting \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PUT /plugins/{plugin_id}`

Create or Update Plugin using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Plugin

<a id="opIddelete-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins/response-ratelimiting \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /plugins/{plugin_id}`

Delete a Plugin

<h3 id="delete-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Plugin or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Plugin

<a id="opIdupdate-plugin"></a>

> Code samples

```bash
curl http://localhost:8001/plugins/response-ratelimiting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /plugins/{plugin_id}`

Update a Plugin

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Plugins associated with a route

<a id="opIdlist-plugins-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/plugins \
  -H 'Accept: application/json'
```

`GET /routes/{route_id_or_name}/plugins`

List all Plugins associated with a route

<h3 id="list-all-plugins-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "config": {
        "anonymous": null,
        "hide_credentials": false,
        "key_in_body": false,
        "key_in_header": true,
        "key_in_query": true,
        "key_names": [
          "apikey"
        ],
        "run_on_preflight": true
      },
      "enabled": true,
      "id": "3fd1eea1-885a-4011-b986-289943ff8177",
      "name": "key-auth",
      "protocols": [
        "grpc",
        "grpcs",
        "http",
        "https"
      ]
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-plugins-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Plugins|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-plugins-associated-with-a-route-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Plugin](#schemaplugin)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Plugin associated with a route

<a id="opIdcreate-plugin-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/plugins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`POST /routes/{route_id_or_name}/plugins`

Create a new Plugin associated with a route

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-plugin-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-plugin-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Plugin associated with a route

<a id="opIdfetch-plugin-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/string/plugins/string \
  -H 'Accept: application/json'
```

`GET /routes/{route_id_or_name}/plugins/{plugin_id}`

Get a Plugin associated with a route using ID.

<h3 id="fetch-a-plugin-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|ID or name of the related route|
|plugin_id|path|string|true|ID of the route to lookup|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-plugin-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Plugin|[Plugin](#schemaplugin)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Plugin associated with a route

<a id="opIdupsert-plugin-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/plugins/response-ratelimiting \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PUT /routes/{route_id_or_name}/plugins/{plugin_id}`

Create or Update a Plugin associated with a route using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-plugin-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-plugin-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Plugin associated with a route

<a id="opIddelete-plugin-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/plugins/response-ratelimiting \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /routes/{route_id_or_name}/plugins/{plugin_id}`

Delete a Plugin associated with a route using ID.

<h3 id="delete-a-plugin-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-plugin-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Plugin or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Plugin associated with a route

<a id="opIdupdate-plugin-for-route"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/plugins/response-ratelimiting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /routes/{route_id_or_name}/plugins/{plugin_id}`

Update a Plugin associated with a route using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-plugin-associated-with-a-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-plugin-associated-with-a-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Plugins associated with a service

<a id="opIdget-plugins-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-serviceplugins \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}plugins`

List all Plugins associated with a service

<h3 id="list-all-plugins-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "config": {
        "anonymous": null,
        "hide_credentials": false,
        "key_in_body": false,
        "key_in_header": true,
        "key_in_query": true,
        "key_names": [
          "apikey"
        ],
        "run_on_preflight": true
      },
      "enabled": true,
      "id": "3fd1eea1-885a-4011-b986-289943ff8177",
      "name": "key-auth",
      "protocols": [
        "grpc",
        "grpcs",
        "http",
        "https"
      ]
    }
  ],
  "offset": "string"
}
```

<h3 id="list-all-plugins-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Plugins|Inline|

<h3 id="list-all-plugins-associated-with-a-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Plugin](#schemaplugin)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Plugin associated with a service

<a id="opIdcreate-plugin-for-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-serviceplugins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`POST /services/{service_id_or_name}plugins`

Create a new Plugin associated with a service

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-plugin-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-plugin-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Plugin associated with a service

<a id="opIdfetch-plugin-with-a-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/plugins/response-ratelimiting \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}/plugins/{plugin_id}`

Get a Plugin associated with a service using ID.

<h3 id="fetch-a-plugin-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-plugin-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Plugin|[Plugin](#schemaplugin)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a plugin associated with a service

<a id="opIdupsert-plugin-for-a-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/plugins/response-ratelimiting \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PUT /services/{service_id_or_name}/plugins/{plugin_id}`

Create or Update a Plugin associated with a service using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-plugin-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-plugin-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a plugin associated with a service

<a id="opIddelete-plugin-for-a-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/plugins/response-ratelimiting \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /services/{service_id_or_name}/plugins/{plugin_id}`

Delete a Plugin associated with a service using ID.

<h3 id="delete-a-plugin-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-plugin-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Plugin or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a plugin associated with a service

<a id="opIdupdate-plugin-for-a-service"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/plugins/response-ratelimiting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "rate-limiting",
    "route": "string",
    "service": "string",
    "consumer": "string",
    "instance_name": "rate-limiting-foo",
    "config": {
      "hour": 500,
      "minute": 500
    },
    "protocols": [
      "http"
    ],
    "enabled": true,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /services/{service_id_or_name}/plugins/{plugin_id}`

Update a Plugin associated with a service using ID.

> Body parameter

```json
{
  "name": "rate-limiting",
  "route": "string",
  "service": "string",
  "consumer": "string",
  "instance_name": "rate-limiting-foo",
  "config": {
    "hour": 500,
    "minute": 500
  },
  "protocols": [
    "http"
  ],
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-plugin-associated-with-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|plugin_id|path|string|true|The unique identifier of the Plugin to create or update.|
|body|body|object|false|Plugin request body|
|» name|body|string|false|The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.<br>|
|» route|body|string \| null|false|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.<br>|
|» service|body|string \| null|false|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.<br>|
|» consumer|body|string \| null|false|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)<br>|
|» instance_name|body|string|false|An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.<br><br>The instance name shows up in Kong Manager, so it's useful when running the same <br>plugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance<br>via the Kong Admin API.<br><br>An instance name must be unique globally for Kong Gateway OSS.<br>|
|» config|body|object|false|The configuration properties for the Plugin|
|» » hour|body|integer|false|none|
|» » minute|body|integer|false|none|
|» protocols|body|[string]|false|A list of the request protocols that will trigger this plugin.|
|» enabled|body|boolean|false|Whether the plugin is applied. Default: `true`.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Plugin for grouping and filtering.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocols|http|
|» protocols|grpc|
|» protocols|grpcs|
|» protocols|tls|
|» protocols|tcp|

> Example responses

> 200 Response

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-plugin-associated-with-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Plugin|[Plugin](#schemaplugin)|
|400|Bad Request|Invalid Plugin|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-consumers">Consumers</h1>

The consumer object represents a consumer - or a user - of a service. 
You can either rely on Kong Gateway as the primary datastore, or you can map the consumer list with your database to keep consistency between Kong Gateway and your existing primary datastore.


## List all Consumers

<a id="opIdlist-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers \
  -H 'Accept: application/json'
```

`GET /consumers`

Retrieve a list of all consumers.You can use query parameters to filter the results by size or tags, for example `/consumers?size=50&tags=enterprise`.

<h3 id="list-all-consumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "custom_id": "4200",
      "id": "8a388226-80e8-4027-a486-25e4f7db5d21",
      "tags": [
        "silver-tier"
      ],
      "username": "bob-the-builder"
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-consumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Consumers|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-consumers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Consumer](#schemaconsumer)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Consumer

<a id="opIdcreate-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "string",
    "custom_id": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /consumers`

Create a new Consumer

> Body parameter

```json
{
  "username": "string",
  "custom_id": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Consumer request body|
|» username|body|string|true|The unique username of the Consumer. You must send either this field or custom_id with the request.<br>|
|» custom_id|body|string|true|Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or username with the request.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Consumer for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "custom_id": "4200",
  "id": "8a388226-80e8-4027-a486-25e4f7db5d21",
  "tags": [
    "silver-tier"
  ],
  "username": "bob-the-builder"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Consumer|[Consumer](#schemaconsumer)|
|400|Bad Request|Invalid Consumer|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Consumer

<a id="opIdget-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username \
  -H 'Accept: application/json'
```

`GET /consumers/{consumer_username_or_id}`

Retrieve the details of a specific consumer in the system using either the consumer ID or the consumer username. If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.

<h3 id="fetch-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|

> Example responses

> 200 Response

```json
{
  "custom_id": "4200",
  "id": "8a388226-80e8-4027-a486-25e4f7db5d21",
  "tags": [
    "silver-tier"
  ],
  "username": "bob-the-builder"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Consumer|[Consumer](#schemaconsumer)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Consumer

<a id="opIdupsert-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "string",
    "custom_id": "string",
    "tags": [
      "string"
    ]
  }'
```

`PUT /consumers/{consumer_username_or_id}`

Create or Update Consumer using ID or username. The consumer will be identified via the username or id attribute.If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.

When the username or id attribute has the structure of a UUID, the Consumer being inserted/replaced will be identified by its id. Otherwise it will be identified by its username.

When creating a new Consumer without specifying id (neither in the URL nor in the body), then it will be auto-generated.

Notice that specifying a username in the URL and a different one in the request body is not allowed.

> Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "username": "string",
  "custom_id": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|body|body|object|false|Consumer request body|
|» username|body|string|true|The unique username of the Consumer. You must send either this field or custom_id with the request.<br>|
|» custom_id|body|string|true|Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or username with the request.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Consumer for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "a4407883-c166-43fd-80ca-3ca035b0cdb7",
      "created_at": 1422386534,
      "username": "my-username",
      "custom_id": "my-custom-id",
      "tags": [
        "admin"
      ]
    }
  ],
  "next": "http://localhost:8001/consumers?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The consumer object response body|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Not Found|None|

<h3 id="update-a-consumer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» id|string|false|none|The unique identifier or the name attribute of the consumer.|
|» created_at|integer|false|none|Unix epoch when the resource was created.|
|» username|string|false|none|The unique username of the consumer. You must send either this field or` custom_i`d with the request.|
|» custom_id|string|false|none|Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database.|
|» tags|[string]|false|none|An optional set of strings associated with the Consumer for grouping and filtering.<br>|
|next|string|false|none|Pagination information|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Consumer

<a id="opIddelete-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /consumers/{consumer_username_or_id}`

Delete a specific consumer from the system using either the consumer ID or the consumer username. This operation is irreversible and permanently removes all data associated with the specified consumer. If the consumer was deleted succesfully the endpoint will return a 204 response indicating that the resource did not exist.

<h3 id="delete-a-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Consumer or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Consumer

<a id="opIdupdate-consumer"></a>

> Code samples

```bash
curl http://localhost:8001/consumers/my-username \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "string",
    "custom_id": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /consumers/{consumer_username_or_id}`

Update the details of a specific consumer in the system using either the consumer ID or the consumer username.If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.

> Body parameter

```json
{
  "username": "string",
  "custom_id": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-consumer-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumer_username_or_id|path|string|true|The unique identifier or the username of the Consumer to retrieve.|
|body|body|object|false|Consumer request body|
|» username|body|string|true|The unique username of the Consumer. You must send either this field or custom_id with the request.<br>|
|» custom_id|body|string|true|Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or username with the request.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Consumer for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "custom_id": "4200",
  "id": "8a388226-80e8-4027-a486-25e4f7db5d21",
  "tags": [
    "silver-tier"
  ],
  "username": "bob-the-builder"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-consumer-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Consumer|[Consumer](#schemaconsumer)|
|400|Bad Request|Invalid Consumer|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-certificates">Certificates</h1>

A certificate object represents a public certificate, and can be optionally paired with the corresponding private key. These objects are used by Kong Gateway to handle SSL/TLS termination for encrypted requests, or for use as a trusted CA store when validating peer certificate of client/service. 
<br><br>  
Certificates are optionally associated with SNI objects to tie a cert/key pair to one or more hostnames. 
<br><br>
If intermediate certificates are required in addition to the main certificate, they should be concatenated together into one string.


## List all certificates

<a id="opIdlist-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates \
  -H 'Accept: application/json'
```

`GET /certificates`

Retrieve a list of all available CA Certificate Authority (CA) certificates. You can use query parameters to filter the results by size or tags, for example `/certificates?size=50&tags=enterprise`.

<h3 id="list-all-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
      "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
      "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Certificates|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-certificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Certificate](#schemacertificate)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Certificate

<a id="opIdcreate-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\",",
    "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
    "cert_alt": "string",
    "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
    "snis": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "passphrase": "example"
  }'
```

`POST /certificates`

Create a new certificate with the provided details. Use this endpoint to add a new certificate to the system. The request body must include the certificate data and other details required for creating a new certificate.

> Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\",",
  "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
  "cert_alt": "string",
  "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
  "snis": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "passphrase": "example"
}
```

<h3 id="create-a-new-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» cert|body|string|true|PEM-encoded public certificate chain of the SSL key pair.|
|» key|body|string|true|PEM-encoded private key of the SSL key pair.|
|» cert_alt|body|string|false|PEM-encoded public certificate chain of the alternate SSL key pair.|
|» key_alt|body|string|false|PEM-encoded private key of the alternate SSL key pair.|
|» snis|body|[string]|false|An array of zero or more hostnames to associate with this certificate as SNIs.|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.<br>|
|» passphrase|body|string|false|To load an encrypted private key into Kong, specify the passphrase using this attributKong will decrypt the private key and store it in its database. e. Enterprise Only|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
  "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Certificate|[Certificate](#schemacertificate)|
|400|Bad Request|Invalid Certificate|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Certificate

<a id="opIdget-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -H 'Accept: application/json'
```

`GET /certificates/{certificate_id}`

Retrieve details about the specified certificate using the provided path parameter `certificate_id`.

<h3 id="fetch-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
  "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTTP 200 OK|[Certificate](#schemacertificate)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Certificate

<a id="opIdupdate-certificate-put"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\",",
    "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
    "cert_alt": "string",
    "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
    "snis": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "passphrase": "example"
  }'
```

`PUT /certificates/{certificate_id}`

Update details about the specified certificate using the provided path parameter `certificate_id`.

Inserts (or replaces) the certificate under the requested `certificate_id`with the definition specified in the request body. When the `name` or `id` attribute has the structure of a UUID, the certificate being inserted/replaced will be identified by its `id`. Otherwise it will be identified by the `name`.

When creating a new Certificate without specifying `id` (neither in the path or the request body), then it will be auto-generated.



> Note: This API is not available in DB-less mode.


> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\",",
  "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
  "cert_alt": "string",
  "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
  "snis": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "passphrase": "example"
}
```

<h3 id="update-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|
|body|body|object|false|none|
|» cert|body|string|true|PEM-encoded public certificate chain of the SSL key pair.|
|» key|body|string|true|PEM-encoded private key of the SSL key pair.|
|» cert_alt|body|string|false|PEM-encoded public certificate chain of the alternate SSL key pair.|
|» key_alt|body|string|false|PEM-encoded private key of the alternate SSL key pair.|
|» snis|body|[string]|false|An array of zero or more hostnames to associate with this certificate as SNIs.|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.<br>|
|» passphrase|body|string|false|To load an encrypted private key into Kong, specify the passphrase using this attributKong will decrypt the private key and store it in its database. e. Enterprise Only|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
  "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Certificate|[Certificate](#schemacertificate)|
|400|Bad Request|Invalid Certificate|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Certificate

<a id="opIddelete-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /certificates/{certificate_id}`

Delete a Certificate

>Note: This API is not available in DB-less mode.


<h3 id="delete-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|ID of the Certificate to delete|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Certificate or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Certificate

<a id="opIdupdate-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\",",
    "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
    "cert_alt": "string",
    "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
    "snis": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "passphrase": "example"
  }'
```

`PATCH /certificates/{certificate_id}`

Update a Certificate

Inserts (or replaces) the certificate under the requested `certificate_id`with the definition specified in the request body. When the `name` or `id` attribute has the structure of a UUID, the certificate being inserted/replaced will be identified by its `id`. Otherwise it will be identified by the `name`.

When creating a new Certificate without specifying `id` (neither in the path or the request body), then it will be auto-generated.

>Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\",",
  "key": "\"-----BEGIN RSA PRIVATE KEY-----...\"",
  "cert_alt": "string",
  "key_alt": "\"-----BEGIN EC PRIVATE KEY-----...\"",
  "snis": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "passphrase": "example"
}
```

<h3 id="update-a-certificate-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|ID of the Certificate to update|
|body|body|object|false|none|
|» cert|body|string|true|PEM-encoded public certificate chain of the SSL key pair.|
|» key|body|string|true|PEM-encoded private key of the SSL key pair.|
|» cert_alt|body|string|false|PEM-encoded public certificate chain of the alternate SSL key pair.|
|» key_alt|body|string|false|PEM-encoded private key of the alternate SSL key pair.|
|» snis|body|[string]|false|An array of zero or more hostnames to associate with this certificate as SNIs.|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.<br>|
|» passphrase|body|string|false|To load an encrypted private key into Kong, specify the passphrase using this attributKong will decrypt the private key and store it in its database. e. Enterprise Only|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
  "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-certificate-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Certificate|[Certificate](#schemacertificate)|
|400|Bad Request|Invalid Certificate|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-snis">SNIs</h1>

An SNI object represents a many-to-one mapping of hostnames to a certificate. 
<br><br>
A certificate object can have many hostnames associated with it. When Kong Gateway receives an SSL request, it uses the SNI field in the Client Hello to look up the certificate object based on the SNI associated with the certificate.


## List SNIs associated with a certificate

<a id="opIdget-sni-with-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/name/snis \
  -H 'Accept: application/json'
```

`GET /certificates/{certificate_name_or_id}/snis`

Retrieve a paginated list of all SNIs associated with a certificate. Use this endpoint to retrieve a list of SNIs that are linked to a specific certificate. You can use the optional query parameters to filter the results based on specific criteria. The response will include the list of SNIs and pagination information. See the response schema for details on the expected format of the response body.

<h3 id="list-snis-associated-with-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|
|certificate_name_or_id|path|string|true|The unique identifier or the `name` attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|certificate_name_or_id|a3ad71a8-6685-4b03-a101-980a953544f6|
|certificate_name_or_id|name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-snis-associated-with-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-snis-associated-with-a-certificate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new SNI associated with a Certificate

<a id="opIdcreate-sni-for-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/name/snis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`POST /certificates/{certificate_name_or_id}/snis`

Create a new SNI and associate it with a certificate in the system. Use this endpoint to add a new SNI to the system and link it to a specific certificate.

> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="create-a-new-sni-associated-with-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_name_or_id|path|string|true|The unique identifier or the `name` attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

#### Enumerated Values

|Parameter|Value|
|---|---|
|certificate_name_or_id|a3ad71a8-6685-4b03-a101-980a953544f6|
|certificate_name_or_id|name|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  },
  "id": "36c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "some.example.org"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-sni-associated-with-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created SNI|[SNI](#schemasni)|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch an SNI associated with a certificate

<a id="opIdfetch-sni-with-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41/snis/my-sni \
  -H 'Accept: application/json'
```

`GET /certificates/{certificate_id}/snis/{sni_name_or_id}`

Get an SNI associated with a Certificate using ID or name.

<h3 id="fetch-an-sni-associated-with-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  },
  "id": "36c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "some.example.org"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-an-sni-associated-with-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched SNI|[SNI](#schemasni)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert an SNI associated with a certificate

<a id="opIdupsert-sni-for-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41/snis/my-sni \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`PUT /certificates/{certificate_id}/snis/{sni_name_or_id}`

Create or Update an SNI associated with a Certificate using ID or name.

Inserts (or replaces) the SNI under the requested resource with the definition specified in the body. The SNI will be identified via the name or id attribute.

When the name or id attribute has the structure of a UUID, the SNI being inserted/replaced will be identified by its id. Otherwise it will be identified by its name.

When creating a new SNI without specifying id (neither in the URL nor in the body), then it will be auto-generated.


> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="upsert-an-sni-associated-with-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  },
  "id": "36c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "some.example.org"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-an-sni-associated-with-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted SNI|[SNI](#schemasni)|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a an SNI associated with a Certificate

<a id="opIddelete-sni-for-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41/snis/my-sni \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /certificates/{certificate_id}/snis/{sni_name_or_id}`

Delete a an SNI associated with a Certificate using ID or name.


<h3 id="delete-a-an-sni-associated-with-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-an-sni-associated-with-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted SNI or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update SNI associated to a certificate

<a id="opIdupdate-sni-for-certificate"></a>

> Code samples

```bash
curl http://localhost:8001/certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41/snis/my-sni \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`PATCH /certificates/{certificate_id}/snis/{sni_name_or_id}`




 Update an existing SNI associated with a certificate in the system using the SNI ID or name. The request body should include the fields of the SNI that need to be updated, such as the name, description, or other properties. If the request body contains valid data, the endpoint will update the SNI and return a success response.


> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="update-sni-associated-to-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificate_id|path|string|true|The unique identifier of the Certificate to retrieve.|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

> Example responses

> 200 Response

```json
{
  "certificate": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  },
  "id": "36c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "some.example.org"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-sni-associated-to-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated SNI|[SNI](#schemasni)|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all SNIs

<a id="opIdlist-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis \
  -H 'Accept: application/json'
```

`GET /snis`

List all SNIs

<h3 id="list-all-snis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-snis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-snis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new SNI

<a id="opIdcreate-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`POST /snis`

Create a new SNI

> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="create-a-new-sni-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-sni-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="create-a-new-sni-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch an SNI

<a id="opIdget-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis/my-sni \
  -H 'Accept: application/json'
```

`GET /snis/{sni_name_or_id}`

Get an SNI using ID or name.

<h3 id="fetch-an-sni-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-an-sni-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<h3 id="fetch-an-sni-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Update an SNI

<a id="opIdupsert-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis/my-sni \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`PUT /snis/{sni_name_or_id}`

Create or Update SNI using ID or name.

> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="update-an-sni-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-an-sni-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="update-an-sni-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an SNI

<a id="opIddelete-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis/my-sni \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /snis/{sni_name_or_id}`

Delete an SNI

<h3 id="delete-an-sni-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-an-sni-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted SNI or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an SNI

<a id="opIdupdate-sni"></a>

> Code samples

```bash
curl http://localhost:8001/snis/my-sni \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-sni",
    "tags": [
      "[\"user-level\", \"low-priority\"]"
    ],
    "certificate": {
      "id": "91020192-062d-416f-a275-9addeeaffaf2"
    }
  }'
```

`PATCH /snis/{sni_name_or_id}`

Update an SNI

> Body parameter

```json
{
  "name": "my-sni",
  "tags": [
    "[\"user-level\", \"low-priority\"]"
  ],
  "certificate": {
    "id": "91020192-062d-416f-a275-9addeeaffaf2"
  }
}
```

<h3 id="update-an-sni-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sni_name_or_id|path|string|true|The unique identifier or the name of the SNI to retrieve.|
|body|body|object|false|A JSON object containing the details of the new SNI, including the name, certificate, and tags.|
|» name|body|string|true|The SNI name to associate with the given certificate.|
|» tags|body|[string]|false|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|body|object|true|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.|
|» » id|body|string|false|91020192-062d-416f-a275-9addeeaffaf2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "147f5ef0-1ed6-4711-b77f-489262f8bff7",
      "name": "my-sni",
      "created_at": 1422386534,
      "tags": [
        "string"
      ],
      "certificate": {
        "id": "2e013e8-7623-4494-a347-6d29108ff68b"
      }
    }
  ],
  "next": "http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-an-sni-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SNI response object|Inline|
|400|Bad Request|Invalid SNI|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<h3 id="update-an-sni-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of SNIs|
|» id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.|
|» name|string|false|none|The SNI name to associate with the given certificate.<br>|
|» created_at|integer|false|none|Unix epoch when the resource was created.<br>|
|» tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.<br>|
|» certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.<br>|
|» » id|string|false|none|The unique identifier or the name attribute of the Certificate whose SNIs|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-ca-certificates">CA Certificates</h1>

A CA certificate object represents a trusted certificate authority. 
These objects are used by Kong Gateway to verify the validity of a client or server certificate.


## List all CA certificates

<a id="opIdlist-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates \
  -H 'Accept: application/json'
```

`GET /ca_certificates`

Retrieve a list of all available Certificate Authority (CA) certificates, including the certificate ID, creation date, and other details. You can use query parameters to filter the results by size or tags, for example `/ca-certificates?size=50&tags=enterprise`.

<h3 id="list-all-ca-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

<h3 id="list-all-ca-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing CA Certificates|[CA-Certificate](#schemaca-certificate)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new CA certificate

<a id="opIdcreate-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\"",
    "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
    "tags": [
      "string"
    ]
  }'
```

`POST /ca_certificates`

Create a new Certificate Authority (CA) certificate. The request body must include the `cert` property, the certificate data in PEM format; it can also include `cert_digest`, a digest of the certificate in hex format for verifying the certificates integrity, and `tags`, an optional list of tags to categorize the certificate.

> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\"",
  "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-ca-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|This request body represents a new Certificate Authority (CA) certificate and includes the properties required to create a new certificate.|
|» cert|body|string|true|PEM-encoded public certificate of the CA.<br>|
|» cert_digest|body|string|false|SHA256 hex digest of the public certificate.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created certificate object.|[CA-Certificate](#schemaca-certificate)|
|400|Bad Request|Invalid CA certificate|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a CA certificate

<a id="opIdget-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates/04fbeacf-a9f1-4a5d-ae4a-b0407445db3f \
  -H 'Accept: application/json'
```

`GET /ca_certificates/{ca_certificate_id}`

Retrieve details about the specified Certificate Authority (CA) certificate using the provided path parameter `ca_certificate_id`.

<h3 id="fetch-a-ca-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ca_certificate_id|path|string|true|The unique identifier of the certificate to retrieve.|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The specified CA certificate exists in the system, and the response includes details about the certificate.|[CA-Certificate](#schemaca-certificate)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a CA Certificate

<a id="opIdupdatet-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\"",
    "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
    "tags": [
      "string"
    ]
  }'
```

`PUT /ca_certificates/{ca_certificate_id}`

Create or Update a CA Certificate using the provided path parameter `ca_certificate_id`.

> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\"",
  "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-ca-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ca_certificate_id|path|string|true|ID of the related certificate|
|body|body|object|false|This request body represents a new Certificate Authority (CA) certificate and includes the properties required to create a new certificate.|
|» cert|body|string|true|PEM-encoded public certificate of the CA.<br>|
|» cert_digest|body|string|false|SHA256 hex digest of the public certificate.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted CA Certificate|[CA-Certificate](#schemaca-certificate)|
|400|Bad Request|Invalid CA Certificate|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a CA Certificate

<a id="opIddelete-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /ca_certificates/{ca_certificate_id}`

Delete the specified Certificate Authority (CA) certificate using the provided ca_certificate_id.

<h3 id="delete-a-ca-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ca_certificate_id|path|string|true|ID of the related certificate|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted CA Certificate or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a CA Certificate

<a id="opIdupdate-ca_certificate"></a>

> Code samples

```bash
curl http://localhost:8001/ca_certificates/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cert": "\"-----BEGIN CERTIFICATE-----...\"",
    "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /ca_certificates/{ca_certificate_id}`

Update the specified Certificate Authority (CA) certificate using the provided ca_certificate_id. Use this endpoint to modify an existing CA certificate in the system. The request body should include the fields of the CA certificate that need to be updated.

> This API is not available in DB-less mode.

> Body parameter

```json
{
  "cert": "\"-----BEGIN CERTIFICATE-----...\"",
  "cert_digest": "c641e28d77e93544f2fa87b2cf3f3d51...",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-ca-certificate-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ca_certificate_id|path|string|true|ID of the related certificate|
|body|body|object|false|This request body represents a new Certificate Authority (CA) certificate and includes the properties required to create a new certificate.|
|» cert|body|string|true|PEM-encoded public certificate of the CA.<br>|
|» cert_digest|body|string|false|SHA256 hex digest of the public certificate.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Certificate for grouping and filtering.|

> Example responses

> 200 Response

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-ca-certificate-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated CA Certificate|[CA-Certificate](#schemaca-certificate)|
|400|Bad Request|Invalid CA Certificate|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-upstreams">Upstreams</h1>

The upstream object represents a virtual hostname and can be used to load balance incoming requests over multiple services (targets). 
<br><br>
An upstream also includes a [health checker](https://docs.konghq.com/gateway/latest/how-kong-works/health-checks/), which can enable and disable targets based on their ability or inability to serve requests. 
The configuration for the health checker is stored in the upstream object, and applies to all of its targets.


## List all Upstreams

<a id="opIdlist-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams \
  -H 'Accept: application/json'
```

`GET /upstreams`

List all registered upstreams. You can filter the results by pagination size, offset, or tags like `/upstreams?size=10&offset=0`.


<h3 id="list-all-upstreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "algorithm": "round-robin",
      "hash_fallback": "none",
      "hash_on": "none",
      "hash_on_cookie_path": "/",
      "healthchecks": {
        "active": {
          "concurrency": 10,
          "healthy": {
            "http_statuses": [
              200,
              302
            ],
            "interval": 0,
            "successes": 0
          },
          "http_path": "/",
          "https_verify_certificate": true,
          "timeout": 1,
          "type": "http",
          "unhealthy": {
            "http_failures": 0,
            "http_statuses": [
              429,
              404,
              500,
              501,
              502,
              503,
              504,
              505
            ],
            "interval": 0,
            "tcp_failures": 0,
            "timeouts": 0
          }
        },
        "passive": {
          "healthy": {
            "http_statuses": [
              200,
              201,
              202,
              203,
              204,
              205,
              206,
              207,
              208,
              226,
              300,
              301,
              302,
              303,
              304,
              305,
              306,
              307,
              308
            ],
            "successes": 0
          },
          "type": "http",
          "unhealthy": {
            "http_failures": 0,
            "http_statuses": [
              429,
              500,
              503
            ],
            "tcp_failures": 0,
            "timeouts": 0
          }
        },
        "threshold": 0
      },
      "id": "6eed5e9c-5398-4026-9a4c-d48f18a2431e",
      "name": "api.example.internal",
      "slots": 10000
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-upstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Upstreams|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-upstreams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Upstream](#schemaupstream)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Upstream

<a id="opIdcreate-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-upstream",
    "algorithm": "round-robin",
    "hash_on": "none",
    "hash_fallback": "none",
    "hash_on_cookie_path": "/",
    "slots": 10000,
    "healthchecks": {
      "passive": {
        "type": "http",
        "healthy": {
          "http_statuses": [
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            226,
            300,
            301,
            302,
            303,
            304,
            305,
            306,
            307,
            308
          ],
          "successes": 0
        },
        "unhealthy": {
          "http_statuses": [
            429,
            500,
            503
          ],
          "timeouts": 0,
          "http_failures": 0,
          "tcp_failures": 0
        }
      },
      "active": {
        "https_verify_certificate": true,
        "healthy": {
          "http_statuses": [
            200,
            302
          ],
          "successes": 0,
          "interval": 0
        },
        "unhealthy": {
          "http_failures": 0,
          "http_statuses": [
            429,
            404,
            500,
            501,
            502,
            503,
            504,
            505
          ],
          "timeouts": 0,
          "tcp_failures": 0,
          "interval": 0
        },
        "type": "http",
        "concurrency": 10,
        "headers": {
          "type": "object",
          "properties": {
            "x-my-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-my-header header."
            },
            "x-another-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-another-header header."
            }
          }
        },
        "timeout": 1,
        "http_path": "/",
        "https_sni": "example.com"
      },
      "threshold": 0
    },
    "tags": [
      "user-level",
      "low-priority"
    ],
    "host_header": "example.com",
    "client_certificate": {
      "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
    },
    "use_srv_name": false
  }'
```

`POST /upstreams`

Create a new Upstream


> Body parameter

```json
{
  "name": "my-upstream",
  "algorithm": "round-robin",
  "hash_on": "none",
  "hash_fallback": "none",
  "hash_on_cookie_path": "/",
  "slots": 10000,
  "healthchecks": {
    "passive": {
      "type": "http",
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "unhealthy": {
        "http_statuses": [
          429,
          500,
          503
        ],
        "timeouts": 0,
        "http_failures": 0,
        "tcp_failures": 0
      }
    },
    "active": {
      "https_verify_certificate": true,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "successes": 0,
        "interval": 0
      },
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "timeouts": 0,
        "tcp_failures": 0,
        "interval": 0
      },
      "type": "http",
      "concurrency": 10,
      "headers": {
        "type": "object",
        "properties": {
          "x-my-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-my-header header."
          },
          "x-another-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-another-header header."
          }
        }
      },
      "timeout": 1,
      "http_path": "/",
      "https_sni": "example.com"
    },
    "threshold": 0
  },
  "tags": [
    "user-level",
    "low-priority"
  ],
  "host_header": "example.com",
  "client_certificate": {
    "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
  },
  "use_srv_name": false
}
```

<h3 id="create-a-new-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|This is a hostname, which must be equal to the `host` of a service.|
|» algorithm|body|string|false|Which load balancing algorithm to use. Accepted values are: `"consistent-hashing"`, `"least-connections"`,` "round-robin"`. Default: `"round-robin"`.<br>|
|» hash_on|body|string|false|What to use as hashing input. Using none results in a weighted-round-robin scheme with no hashing|
|» hash_fallback|body|string|false|What to use as hashing input if the primary hash_on does not return a hash (eg. header is missing, or no Consumer identified). Not available if hash_on is set to cookie.|
|» hash_on_header|body|string|false|The header name to take the value from as hash input. Only required when `hash_on` is set to header.|
|» hash_fallback_header|body|string|false|The header name to take the value from as hash input. Only required when hash_fallback is set to header.|
|» hash_on_cookie|body|string|false|The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.|
|» hash_on_cookie_path|body|string|false|The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.|
|» hash_on_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.|
|» hash_fallback_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.|
|» hash_on_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.|
|» hash_fallback_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.|
|» slots|body|integer|false|The number of slots in the load balancer algorithm. If the algorithm is set to `round-robin`, this setting determines the maximum number of slots. If the algorithm is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range 10-65536.|
|» healthchecks|body|object|false|none|
|» » passive|body|object|false|none|
|» » » type|body|string|false|Whether to perform passive health checks interpreting HTTP/HTTPS statuses, or just check for TCP connection success. In passive checks, http and https options are equivalent. Accepted values are `tcp`, `http`, `https`, `grpc`, `grpcs`.|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent healthiness when produced by proxied traffic, as observed by passive health checks.  With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=201`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in proxied traffic (as defined by `healthchecks.passive.healthy.http_statuses`) to consider a target healthy, as observed by passive health checks.|
|» » » unhealthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent unhealthiness when produced by proxied traffic, as observed by passive health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=500`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.|
|» » » » http_failures|body|integer|false|Number of HTTP failures in proxied traffic (as defined by `healthchecks.passive.unhealthy.http_statuses`) to consider a target unhealthy, as observed by passive health checks.|
|» » » » tcp_failures|body|integer|false|Number of TCP connection failures to consider a target unhealthy, as observed by passive health checks.|
|» » active|body|object|false|none|
|» » » https_verify_certificate|body|boolean|false|none|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=302`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in active probes (as defined by `healthchecks.active.healthy.http_statuses`) to consider a target healthy.|
|» » » » interval|body|integer|false|Interval between active health checks for healthy targets (in seconds). A value of zero indicates that active probes for healthy targets should not be performed.|
|» » » unhealthy|body|object|false|none|
|» » » » http_failures|body|integer|false|Number of HTTP failures in active probes (as defined by `healthchecks.active.unhealthy.http_statuses`) to consider a target unhealthy.|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a failure, indicating unhealthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=404`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in active probes to consider a target unhealthy.|
|» » » » tcp_failures|body|integer|false|Number of TCP failures in active probes to consider a target unhealthy.|
|» » » » interval|body|integer|false|Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.|
|» » » type|body|string|false|Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection.|
|» » » concurrency|body|integer|false|Number of targets to check concurrently in active health checks.|
|» » » headers|body|object|false|One or more lists of values indexed by header name to use in GET HTTP request to run as a probe on active health checks. Values must be pre-formatted.|
|» » » timeout|body|integer|false|Socket timeout for active health checks (in seconds).|
|» » » http_path|body|string|false|Path to use in GET HTTP request to run as a probe on active health checks.|
|» » » https_sni|body|string|false|The hostname to use as an SNI (Server Name Identification) when performing active health checks using HTTPS. This is particularly useful when Targets are configured using IPs, so that the target host's certificate can be verified with the proper SNI.|
|» » threshold|body|integer|false|The minimum percentage of the upstream's targets' weight that must be available for the whole upstream to be considered healthy.|
|» tags|body|[string]|false|An optional set of strings associated with the Upstream for grouping and filtering.|
|» host_header|body|string|false|The hostname to be used as Host header when proxying requests through Kong.|
|» client_certificate|body|object|false|If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.|
|» » id|body|string|false|none|
|» use_srv_name|body|boolean|false|If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream Host.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|consistent-hashing|
|» algorithm|least-connections|
|» algorithm|round-robin|
|» algorithm|latency|
|» hash_on|none|
|» hash_on|consumer|
|» hash_on|ip|
|» hash_on|cookie|
|» hash_on|uri_capture|
|» hash_on|path|
|» hash_on|query_arg|
|» hash_fallback|none|
|» hash_fallback|consumer|
|» hash_fallback|ip|
|» hash_fallback|cookie|
|» hash_fallback|uri_capture|
|» hash_fallback|path|
|» hash_fallback|query_arg|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|
|» » » » http_statuses|200|
|» » » » http_statuses|201|
|» » » » http_statuses|202|
|» » » » http_statuses|203|
|» » » » http_statuses|204|
|» » » » http_statuses|205|
|» » » » http_statuses|206|
|» » » » http_statuses|207|
|» » » » http_statuses|208|
|» » » » http_statuses|226|
|» » » » http_statuses|300|
|» » » » http_statuses|301|
|» » » » http_statuses|302|
|» » » » http_statuses|303|
|» » » » http_statuses|304|
|» » » » http_statuses|305|
|» » » » http_statuses|306|
|» » » » http_statuses|307|
|» » » » http_statuses|308|
|» » » » http_statuses|429|
|» » » » http_statuses|500|
|» » » » http_statuses|503|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|

> Example responses

> 200 Response

```json
{
  "algorithm": "round-robin",
  "hash_fallback": "none",
  "hash_on": "none",
  "hash_on_cookie_path": "/",
  "healthchecks": {
    "active": {
      "concurrency": 10,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "interval": 0,
        "successes": 0
      },
      "http_path": "/",
      "https_verify_certificate": true,
      "timeout": 1,
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "interval": 0,
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "passive": {
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          500,
          503
        ],
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "threshold": 0
  },
  "id": "6eed5e9c-5398-4026-9a4c-d48f18a2431e",
  "name": "api.example.internal",
  "slots": 10000
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Upstream|[Upstream](#schemaupstream)|
|400|Bad Request|Invalid Upstream|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch an Upstream

<a id="opIdget-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -H 'Accept: application/json'
```

`GET /upstreams/{upstream_id_or_name}`

Get an Upstream using ID or name.

<h3 id="fetch-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|

> Example responses

> 200 Response

```json
{
  "algorithm": "round-robin",
  "hash_fallback": "none",
  "hash_on": "none",
  "hash_on_cookie_path": "/",
  "healthchecks": {
    "active": {
      "concurrency": 10,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "interval": 0,
        "successes": 0
      },
      "http_path": "/",
      "https_verify_certificate": true,
      "timeout": 1,
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "interval": 0,
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "passive": {
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          500,
          503
        ],
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "threshold": 0
  },
  "id": "6eed5e9c-5398-4026-9a4c-d48f18a2431e",
  "name": "api.example.internal",
  "slots": 10000
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Upstream|[Upstream](#schemaupstream)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Upstream

<a id="opIdupsert-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-upstream",
    "algorithm": "round-robin",
    "hash_on": "none",
    "hash_fallback": "none",
    "hash_on_cookie_path": "/",
    "slots": 10000,
    "healthchecks": {
      "passive": {
        "type": "http",
        "healthy": {
          "http_statuses": [
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            226,
            300,
            301,
            302,
            303,
            304,
            305,
            306,
            307,
            308
          ],
          "successes": 0
        },
        "unhealthy": {
          "http_statuses": [
            429,
            500,
            503
          ],
          "timeouts": 0,
          "http_failures": 0,
          "tcp_failures": 0
        }
      },
      "active": {
        "https_verify_certificate": true,
        "healthy": {
          "http_statuses": [
            200,
            302
          ],
          "successes": 0,
          "interval": 0
        },
        "unhealthy": {
          "http_failures": 0,
          "http_statuses": [
            429,
            404,
            500,
            501,
            502,
            503,
            504,
            505
          ],
          "timeouts": 0,
          "tcp_failures": 0,
          "interval": 0
        },
        "type": "http",
        "concurrency": 10,
        "headers": {
          "type": "object",
          "properties": {
            "x-my-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-my-header header."
            },
            "x-another-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-another-header header."
            }
          }
        },
        "timeout": 1,
        "http_path": "/",
        "https_sni": "example.com"
      },
      "threshold": 0
    },
    "tags": [
      "user-level",
      "low-priority"
    ],
    "host_header": "example.com",
    "client_certificate": {
      "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
    },
    "use_srv_name": false
  }'
```

`PUT /upstreams/{upstream_id_or_name}`

Create or Update Upstream using ID or name.

> Body parameter

```json
{
  "name": "my-upstream",
  "algorithm": "round-robin",
  "hash_on": "none",
  "hash_fallback": "none",
  "hash_on_cookie_path": "/",
  "slots": 10000,
  "healthchecks": {
    "passive": {
      "type": "http",
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "unhealthy": {
        "http_statuses": [
          429,
          500,
          503
        ],
        "timeouts": 0,
        "http_failures": 0,
        "tcp_failures": 0
      }
    },
    "active": {
      "https_verify_certificate": true,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "successes": 0,
        "interval": 0
      },
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "timeouts": 0,
        "tcp_failures": 0,
        "interval": 0
      },
      "type": "http",
      "concurrency": 10,
      "headers": {
        "type": "object",
        "properties": {
          "x-my-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-my-header header."
          },
          "x-another-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-another-header header."
          }
        }
      },
      "timeout": 1,
      "http_path": "/",
      "https_sni": "example.com"
    },
    "threshold": 0
  },
  "tags": [
    "user-level",
    "low-priority"
  ],
  "host_header": "example.com",
  "client_certificate": {
    "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
  },
  "use_srv_name": false
}
```

<h3 id="update-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|body|body|object|false|none|
|» name|body|string|true|This is a hostname, which must be equal to the `host` of a service.|
|» algorithm|body|string|false|Which load balancing algorithm to use. Accepted values are: `"consistent-hashing"`, `"least-connections"`,` "round-robin"`. Default: `"round-robin"`.<br>|
|» hash_on|body|string|false|What to use as hashing input. Using none results in a weighted-round-robin scheme with no hashing|
|» hash_fallback|body|string|false|What to use as hashing input if the primary hash_on does not return a hash (eg. header is missing, or no Consumer identified). Not available if hash_on is set to cookie.|
|» hash_on_header|body|string|false|The header name to take the value from as hash input. Only required when `hash_on` is set to header.|
|» hash_fallback_header|body|string|false|The header name to take the value from as hash input. Only required when hash_fallback is set to header.|
|» hash_on_cookie|body|string|false|The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.|
|» hash_on_cookie_path|body|string|false|The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.|
|» hash_on_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.|
|» hash_fallback_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.|
|» hash_on_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.|
|» hash_fallback_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.|
|» slots|body|integer|false|The number of slots in the load balancer algorithm. If the algorithm is set to `round-robin`, this setting determines the maximum number of slots. If the algorithm is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range 10-65536.|
|» healthchecks|body|object|false|none|
|» » passive|body|object|false|none|
|» » » type|body|string|false|Whether to perform passive health checks interpreting HTTP/HTTPS statuses, or just check for TCP connection success. In passive checks, http and https options are equivalent. Accepted values are `tcp`, `http`, `https`, `grpc`, `grpcs`.|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent healthiness when produced by proxied traffic, as observed by passive health checks.  With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=201`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in proxied traffic (as defined by `healthchecks.passive.healthy.http_statuses`) to consider a target healthy, as observed by passive health checks.|
|» » » unhealthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent unhealthiness when produced by proxied traffic, as observed by passive health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=500`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.|
|» » » » http_failures|body|integer|false|Number of HTTP failures in proxied traffic (as defined by `healthchecks.passive.unhealthy.http_statuses`) to consider a target unhealthy, as observed by passive health checks.|
|» » » » tcp_failures|body|integer|false|Number of TCP connection failures to consider a target unhealthy, as observed by passive health checks.|
|» » active|body|object|false|none|
|» » » https_verify_certificate|body|boolean|false|none|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=302`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in active probes (as defined by `healthchecks.active.healthy.http_statuses`) to consider a target healthy.|
|» » » » interval|body|integer|false|Interval between active health checks for healthy targets (in seconds). A value of zero indicates that active probes for healthy targets should not be performed.|
|» » » unhealthy|body|object|false|none|
|» » » » http_failures|body|integer|false|Number of HTTP failures in active probes (as defined by `healthchecks.active.unhealthy.http_statuses`) to consider a target unhealthy.|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a failure, indicating unhealthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=404`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in active probes to consider a target unhealthy.|
|» » » » tcp_failures|body|integer|false|Number of TCP failures in active probes to consider a target unhealthy.|
|» » » » interval|body|integer|false|Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.|
|» » » type|body|string|false|Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection.|
|» » » concurrency|body|integer|false|Number of targets to check concurrently in active health checks.|
|» » » headers|body|object|false|One or more lists of values indexed by header name to use in GET HTTP request to run as a probe on active health checks. Values must be pre-formatted.|
|» » » timeout|body|integer|false|Socket timeout for active health checks (in seconds).|
|» » » http_path|body|string|false|Path to use in GET HTTP request to run as a probe on active health checks.|
|» » » https_sni|body|string|false|The hostname to use as an SNI (Server Name Identification) when performing active health checks using HTTPS. This is particularly useful when Targets are configured using IPs, so that the target host's certificate can be verified with the proper SNI.|
|» » threshold|body|integer|false|The minimum percentage of the upstream's targets' weight that must be available for the whole upstream to be considered healthy.|
|» tags|body|[string]|false|An optional set of strings associated with the Upstream for grouping and filtering.|
|» host_header|body|string|false|The hostname to be used as Host header when proxying requests through Kong.|
|» client_certificate|body|object|false|If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.|
|» » id|body|string|false|none|
|» use_srv_name|body|boolean|false|If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream Host.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|consistent-hashing|
|» algorithm|least-connections|
|» algorithm|round-robin|
|» algorithm|latency|
|» hash_on|none|
|» hash_on|consumer|
|» hash_on|ip|
|» hash_on|cookie|
|» hash_on|uri_capture|
|» hash_on|path|
|» hash_on|query_arg|
|» hash_fallback|none|
|» hash_fallback|consumer|
|» hash_fallback|ip|
|» hash_fallback|cookie|
|» hash_fallback|uri_capture|
|» hash_fallback|path|
|» hash_fallback|query_arg|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|
|» » » » http_statuses|200|
|» » » » http_statuses|201|
|» » » » http_statuses|202|
|» » » » http_statuses|203|
|» » » » http_statuses|204|
|» » » » http_statuses|205|
|» » » » http_statuses|206|
|» » » » http_statuses|207|
|» » » » http_statuses|208|
|» » » » http_statuses|226|
|» » » » http_statuses|300|
|» » » » http_statuses|301|
|» » » » http_statuses|302|
|» » » » http_statuses|303|
|» » » » http_statuses|304|
|» » » » http_statuses|305|
|» » » » http_statuses|306|
|» » » » http_statuses|307|
|» » » » http_statuses|308|
|» » » » http_statuses|429|
|» » » » http_statuses|500|
|» » » » http_statuses|503|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|

> Example responses

> 200 Response

```json
{
  "id": "58c8ccbb-eafb-4566-991f-2ed4f678fa70",
  "created_at": 1422386534,
  "name": "my-upstream",
  "algorithm": "round-robin",
  "hash_on": "none",
  "hash_fallback": "none",
  "hash_on_cookie_path": "/",
  "slots": 10000,
  "healthchecks": {
    "passive": {
      "type": "http",
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "unhealthy": {
        "http_statuses": [
          429,
          500,
          503
        ],
        "timeouts": 0,
        "http_failures": 0,
        "tcp_failures": 0
      }
    },
    "active": {
      "https_verify_certificate": true,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "successes": 0,
        "interval": 0
      },
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "timeouts": 0,
        "tcp_failures": 0,
        "interval": 0
      },
      "type": "http",
      "concurrency": 10,
      "headers": {
        "type": "object",
        "properties": {
          "x-my-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-my-header header."
          },
          "x-another-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-another-header header."
          }
        }
      },
      "timeout": 1,
      "http_path": "/",
      "https_sni": "example.com"
    },
    "threshold": 0
  },
  "tags": [
    "user-level",
    "low-priority"
  ],
  "host_header": "example.com",
  "client_certificate": {
    "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
  },
  "use_srv_name": false
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Upstream|[Upstream](#schemaupstream)|
|400|Bad Request|Invalid Upstream|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Upstream

<a id="opIddelete-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /upstreams/{upstream_id_or_name}`

Delete an Upstream

<h3 id="delete-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Upstream or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Upstream

<a id="opIdupdate-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-upstream",
    "algorithm": "round-robin",
    "hash_on": "none",
    "hash_fallback": "none",
    "hash_on_cookie_path": "/",
    "slots": 10000,
    "healthchecks": {
      "passive": {
        "type": "http",
        "healthy": {
          "http_statuses": [
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            226,
            300,
            301,
            302,
            303,
            304,
            305,
            306,
            307,
            308
          ],
          "successes": 0
        },
        "unhealthy": {
          "http_statuses": [
            429,
            500,
            503
          ],
          "timeouts": 0,
          "http_failures": 0,
          "tcp_failures": 0
        }
      },
      "active": {
        "https_verify_certificate": true,
        "healthy": {
          "http_statuses": [
            200,
            302
          ],
          "successes": 0,
          "interval": 0
        },
        "unhealthy": {
          "http_failures": 0,
          "http_statuses": [
            429,
            404,
            500,
            501,
            502,
            503,
            504,
            505
          ],
          "timeouts": 0,
          "tcp_failures": 0,
          "interval": 0
        },
        "type": "http",
        "concurrency": 10,
        "headers": {
          "type": "object",
          "properties": {
            "x-my-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-my-header header."
            },
            "x-another-header": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The value(s) of the x-another-header header."
            }
          }
        },
        "timeout": 1,
        "http_path": "/",
        "https_sni": "example.com"
      },
      "threshold": 0
    },
    "tags": [
      "user-level",
      "low-priority"
    ],
    "host_header": "example.com",
    "client_certificate": {
      "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
    },
    "use_srv_name": false
  }'
```

`PATCH /upstreams/{upstream_id_or_name}`

Update an Upstream

> Body parameter

```json
{
  "name": "my-upstream",
  "algorithm": "round-robin",
  "hash_on": "none",
  "hash_fallback": "none",
  "hash_on_cookie_path": "/",
  "slots": 10000,
  "healthchecks": {
    "passive": {
      "type": "http",
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "unhealthy": {
        "http_statuses": [
          429,
          500,
          503
        ],
        "timeouts": 0,
        "http_failures": 0,
        "tcp_failures": 0
      }
    },
    "active": {
      "https_verify_certificate": true,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "successes": 0,
        "interval": 0
      },
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "timeouts": 0,
        "tcp_failures": 0,
        "interval": 0
      },
      "type": "http",
      "concurrency": 10,
      "headers": {
        "type": "object",
        "properties": {
          "x-my-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-my-header header."
          },
          "x-another-header": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The value(s) of the x-another-header header."
          }
        }
      },
      "timeout": 1,
      "http_path": "/",
      "https_sni": "example.com"
    },
    "threshold": 0
  },
  "tags": [
    "user-level",
    "low-priority"
  ],
  "host_header": "example.com",
  "client_certificate": {
    "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
  },
  "use_srv_name": false
}
```

<h3 id="update-an-upstream-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|body|body|object|false|none|
|» name|body|string|true|This is a hostname, which must be equal to the `host` of a service.|
|» algorithm|body|string|false|Which load balancing algorithm to use. Accepted values are: `"consistent-hashing"`, `"least-connections"`,` "round-robin"`. Default: `"round-robin"`.<br>|
|» hash_on|body|string|false|What to use as hashing input. Using none results in a weighted-round-robin scheme with no hashing|
|» hash_fallback|body|string|false|What to use as hashing input if the primary hash_on does not return a hash (eg. header is missing, or no Consumer identified). Not available if hash_on is set to cookie.|
|» hash_on_header|body|string|false|The header name to take the value from as hash input. Only required when `hash_on` is set to header.|
|» hash_fallback_header|body|string|false|The header name to take the value from as hash input. Only required when hash_fallback is set to header.|
|» hash_on_cookie|body|string|false|The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.|
|» hash_on_cookie_path|body|string|false|The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.|
|» hash_on_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.|
|» hash_fallback_query_arg|body|string|false|The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.|
|» hash_on_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.|
|» hash_fallback_uri_capture|body|string|false|The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.|
|» slots|body|integer|false|The number of slots in the load balancer algorithm. If the algorithm is set to `round-robin`, this setting determines the maximum number of slots. If the algorithm is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range 10-65536.|
|» healthchecks|body|object|false|none|
|» » passive|body|object|false|none|
|» » » type|body|string|false|Whether to perform passive health checks interpreting HTTP/HTTPS statuses, or just check for TCP connection success. In passive checks, http and https options are equivalent. Accepted values are `tcp`, `http`, `https`, `grpc`, `grpcs`.|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent healthiness when produced by proxied traffic, as observed by passive health checks.  With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=201`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in proxied traffic (as defined by `healthchecks.passive.healthy.http_statuses`) to consider a target healthy, as observed by passive health checks.|
|» » » unhealthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses which represent unhealthiness when produced by proxied traffic, as observed by passive health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=500`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.|
|» » » » http_failures|body|integer|false|Number of HTTP failures in proxied traffic (as defined by `healthchecks.passive.unhealthy.http_statuses`) to consider a target unhealthy, as observed by passive health checks.|
|» » » » tcp_failures|body|integer|false|Number of TCP connection failures to consider a target unhealthy, as observed by passive health checks.|
|» » active|body|object|false|none|
|» » » https_verify_certificate|body|boolean|false|none|
|» » » healthy|body|object|false|none|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=302`. With JSON, use an array.|
|» » » » successes|body|integer|false|Number of successes in active probes (as defined by `healthchecks.active.healthy.http_statuses`) to consider a target healthy.|
|» » » » interval|body|integer|false|Interval between active health checks for healthy targets (in seconds). A value of zero indicates that active probes for healthy targets should not be performed.|
|» » » unhealthy|body|object|false|none|
|» » » » http_failures|body|integer|false|Number of HTTP failures in active probes (as defined by `healthchecks.active.unhealthy.http_statuses`) to consider a target unhealthy.|
|» » » » http_statuses|body|[integer]|false|An array of HTTP statuses to consider a failure, indicating unhealthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=404`. With JSON, use an array.|
|» » » » timeouts|body|integer|false|Number of timeouts in active probes to consider a target unhealthy.|
|» » » » tcp_failures|body|integer|false|Number of TCP failures in active probes to consider a target unhealthy.|
|» » » » interval|body|integer|false|Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.|
|» » » type|body|string|false|Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection.|
|» » » concurrency|body|integer|false|Number of targets to check concurrently in active health checks.|
|» » » headers|body|object|false|One or more lists of values indexed by header name to use in GET HTTP request to run as a probe on active health checks. Values must be pre-formatted.|
|» » » timeout|body|integer|false|Socket timeout for active health checks (in seconds).|
|» » » http_path|body|string|false|Path to use in GET HTTP request to run as a probe on active health checks.|
|» » » https_sni|body|string|false|The hostname to use as an SNI (Server Name Identification) when performing active health checks using HTTPS. This is particularly useful when Targets are configured using IPs, so that the target host's certificate can be verified with the proper SNI.|
|» » threshold|body|integer|false|The minimum percentage of the upstream's targets' weight that must be available for the whole upstream to be considered healthy.|
|» tags|body|[string]|false|An optional set of strings associated with the Upstream for grouping and filtering.|
|» host_header|body|string|false|The hostname to be used as Host header when proxying requests through Kong.|
|» client_certificate|body|object|false|If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.|
|» » id|body|string|false|none|
|» use_srv_name|body|boolean|false|If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream Host.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|consistent-hashing|
|» algorithm|least-connections|
|» algorithm|round-robin|
|» algorithm|latency|
|» hash_on|none|
|» hash_on|consumer|
|» hash_on|ip|
|» hash_on|cookie|
|» hash_on|uri_capture|
|» hash_on|path|
|» hash_on|query_arg|
|» hash_fallback|none|
|» hash_fallback|consumer|
|» hash_fallback|ip|
|» hash_fallback|cookie|
|» hash_fallback|uri_capture|
|» hash_fallback|path|
|» hash_fallback|query_arg|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|
|» » » » http_statuses|200|
|» » » » http_statuses|201|
|» » » » http_statuses|202|
|» » » » http_statuses|203|
|» » » » http_statuses|204|
|» » » » http_statuses|205|
|» » » » http_statuses|206|
|» » » » http_statuses|207|
|» » » » http_statuses|208|
|» » » » http_statuses|226|
|» » » » http_statuses|300|
|» » » » http_statuses|301|
|» » » » http_statuses|302|
|» » » » http_statuses|303|
|» » » » http_statuses|304|
|» » » » http_statuses|305|
|» » » » http_statuses|306|
|» » » » http_statuses|307|
|» » » » http_statuses|308|
|» » » » http_statuses|429|
|» » » » http_statuses|500|
|» » » » http_statuses|503|
|» » » type|tcp|
|» » » type|http|
|» » » type|https|
|» » » type|grpc|
|» » » type|grpcs|

> Example responses

> 200 Response

```json
{
  "id": "58c8ccbb-eafb-4566-991f-2ed4f678fa70",
  "created_at": 1422386534,
  "name": "my-upstream",
  "algorithm": "round-robin",
  "hash_on": "none",
  "hash_fallback": "none",
  "hash_on_cookie_path": "/",
  "slots": 10000,
  "healthchecks": {
    "passive": {
      "type": "http",
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "unhealthy": {
        "http_statuses": [
          429,
          500,
          503
        ],
        "timeouts": 0,
        "http_failures": 0,
        "tcp_failures": 0
      }
    },
    "active": {
      "https_verify_certificate": true,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "successes": 0,
        "interval": 0
      },
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "timeouts": 0,
        "tcp_failures": 0,
        "interval": 0
      },
      "type": "http",
      "concurrency": 10,
      "headers": {
        "x-my-header": [
          "foo",
          "bar"
        ],
        "x-another-header": [
          "bla"
        ]
      },
      "timeout": 1,
      "http_path": "/",
      "https_sni": "example.com"
    },
    "threshold": 0
  },
  "tags": [
    "user-level",
    "low-priority"
  ],
  "host_header": "example.com",
  "client_certificate": {
    "id": "ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6"
  },
  "use_srv_name": false
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-an-upstream-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Upstream|[Upstream](#schemaupstream)|
|400|Bad Request|Invalid Upstream|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-vaults">Vaults</h1>

Vault objects are used to configure different vault connectors for [managing secrets](https://docs.konghq.com/gateway/latest/kong-enterprise/secrets-management/). 
Configuring a vault lets you reference secrets from other entities.
This allows for a proper separation of secrets and configuration and prevents secret sprawl. 
<br><br>
For example, you could store a certificate and a key in a vault, then reference them from a certificate entity. This way, the certificate and key are not stored in the entity directly and are more secure.
<br><br>
Secrets rotation can be managed using [TTLs](https://docs.konghq.com/gateway/latest/kong-enterprise/secrets-management/advanced-usage/).


## List all Vaults

<a id="opIdlist-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults \
  -H 'Accept: application/json'
```

`GET /vaults`

List all Vaults

<h3 id="list-all-vaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "config": {
        "prefix": "vaults.config.resurrect_ttl"
      },
      "description": "environment variable based vault",
      "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
      "name": "env",
      "tags": [
        "foo",
        "bar"
      ]
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-vaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Vaults|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-vaults-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Vault](#schemavault)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Vault

<a id="opIdcreate-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "prefix": "env",
    "name": "env",
    "description": "This vault is used to retrieve redis database access credentials",
    "config": {
      "prefix": "SSL_"
    },
    "tags": [
      "database-credentials",
      "data-plane"
    ]
  }'
```

`POST /vaults`

Create a new Vault

> Body parameter

```json
{
  "prefix": "env",
  "name": "env",
  "description": "This vault is used to retrieve redis database access credentials",
  "config": {
    "prefix": "SSL_"
  },
  "tags": [
    "database-credentials",
    "data-plane"
  ]
}
```

<h3 id="create-a-new-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» prefix|body|string|false|The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.<br>|
|» name|body|string|false|The name of the Vault that's going to be added. Currently, the Vault implementation must be installed in every Kong instance.<br>|
|» description|body|string|false|The description of the Vault object.<br>|
|» config|body|object|false|The configuration properties for the Vault which can be found on the vaults' documentation page.<br>|
|» » prefix|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Vault for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Vault|[Vault](#schemavault)|
|400|Bad Request|Invalid Vault|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Vault

<a id="opIdget-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults/env \
  -H 'Accept: application/json'
```

`GET /vaults/{vault_id_or_prefix}`

Get a Vault using ID or prefix.

Vault entities are used to configure different Vault connectors.

<h3 id="fetch-a-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_id_or_prefix|path|string|true|The unique identifier or the prefix of the Vault to retrieve.|

> Example responses

> 200 Response

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Vault|[Vault](#schemavault)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Vault

<a id="opIdupsert-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "prefix": "env",
    "name": "env",
    "description": "This vault is used to retrieve redis database access credentials",
    "config": {
      "prefix": "SSL_"
    },
    "tags": [
      "database-credentials",
      "data-plane"
    ]
  }'
```

`PUT /vaults/{vault_id_or_prefix}`

Create or Update Vault using ID or prefix.

> Body parameter

```json
{
  "prefix": "env",
  "name": "env",
  "description": "This vault is used to retrieve redis database access credentials",
  "config": {
    "prefix": "SSL_"
  },
  "tags": [
    "database-credentials",
    "data-plane"
  ]
}
```

<h3 id="upsert-a-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_id_or_prefix|path|string|true|Name or ID of the Vault to lookup|
|body|body|object|false|none|
|» prefix|body|string|false|The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.<br>|
|» name|body|string|false|The name of the Vault that's going to be added. Currently, the Vault implementation must be installed in every Kong instance.<br>|
|» description|body|string|false|The description of the Vault object.<br>|
|» config|body|object|false|The configuration properties for the Vault which can be found on the vaults' documentation page.<br>|
|» » prefix|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Vault for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Vault|[Vault](#schemavault)|
|400|Bad Request|Invalid Vault|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Vault

<a id="opIddelete-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /vaults/{vault_id_or_prefix}`

Delete a Vault

<h3 id="delete-a-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_id_or_prefix|path|string|true|ID or prefix of the Vault to delete|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Vault or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Vault

<a id="opIdupdate-vault"></a>

> Code samples

```bash
curl http://localhost:8001/vaults/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "prefix": "env",
    "name": "env",
    "description": "This vault is used to retrieve redis database access credentials",
    "config": {
      "prefix": "SSL_"
    },
    "tags": [
      "database-credentials",
      "data-plane"
    ]
  }'
```

`PATCH /vaults/{vault_id_or_prefix}`

Update a Vault

> Body parameter

```json
{
  "prefix": "env",
  "name": "env",
  "description": "This vault is used to retrieve redis database access credentials",
  "config": {
    "prefix": "SSL_"
  },
  "tags": [
    "database-credentials",
    "data-plane"
  ]
}
```

<h3 id="update-a-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_id_or_prefix|path|string|true|ID or prefix of the Vault to update|
|body|body|object|false|none|
|» prefix|body|string|false|The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.<br>|
|» name|body|string|false|The name of the Vault that's going to be added. Currently, the Vault implementation must be installed in every Kong instance.<br>|
|» description|body|string|false|The description of the Vault object.<br>|
|» config|body|object|false|The configuration properties for the Vault which can be found on the vaults' documentation page.<br>|
|» » prefix|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Vault for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Vault|[Vault](#schemavault)|
|400|Bad Request|Invalid Vault|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-keys">Keys</h1>

A key object holds a representation of asymmetric keys in various formats. When Kong Gateway or a Kong plugin requires a specific public or private key to perform certain operations, it can use this entity.


## List all Keys

<a id="opIdlist-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys \
  -H 'Accept: application/json'
```

`GET /keys`

List all Keys

<h3 id="list-all-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "d958f66b-8e99-44d2-b0b4-edd5bbf24658",
      "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
      "kid": "42",
      "name": "a-key",
      "pem": {
        "private_key": "-----BEGIN",
        "public_key": "-----BEGIN"
      },
      "set": {
        "id": "b86b331c-dcd0-4b3e-97ce-47c5a9543031"
      }
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Keys|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Key](#schemakey)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Key

<a id="opIdcreate-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "set": {
      "id": "string"
    },
    "name": "my-key",
    "kid": "42",
    "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
    "pem": {
      "private_key": "private_key\": \"-----BEGIN",
      "public_key": "public_key\": \"-----BEGIN"
    },
    "tags": [
      "string"
    ]
  }'
```

`POST /keys`

This API endpoint allows you to create a new key. When the request is successful, the API will respond with a 200 status code and a JSON object that represents the newly created key. If the request is invalid, the API will respond with a `400` status code and an error message in the response body.

> Note: This API is not available in DB-less mode.


> Body parameter

```json
{
  "set": {
    "id": "string"
  },
  "name": "my-key",
  "kid": "42",
  "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
  "pem": {
    "private_key": "private_key\": \"-----BEGIN",
    "public_key": "public_key\": \"-----BEGIN"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» set|body|object|false|The id (an UUID) of the key-set with which to associate the key .With form-encoded, the notation is `set.id=<set id>` or `set.name=<set name>`. With JSON, use `"set":{"id":"<set id>"}` or `"set":{"name":"<set name>"}.`|
|» » id|body|string|false|46CA83EE-671C-11ED-BFAB-2FE47512C77A|
|» name|body|string|false|The name to associate with the given keys.<br>|
|» kid|body|string|true|A unique identifier for a key.<br>|
|» jwk|body|string|false|A JSON Web Key represented as a string.|
|» pem|body|object|false|A keypair in PEM format.<br>|
|» » private_key|body|string|false|none|
|» » public_key|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "d958f66b-8e99-44d2-b0b4-edd5bbf24658",
  "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
  "kid": "42",
  "name": "a-key",
  "pem": {
    "private_key": "-----BEGIN",
    "public_key": "-----BEGIN"
  },
  "set": {
    "id": "b86b331c-dcd0-4b3e-97ce-47c5a9543031"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Key|[Key](#schemakey)|
|400|Bad Request|Invalid Key|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Key

<a id="opIdget-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys/24D0DBDA-671C-11ED-BA0B-EF1DCCD3725 \
  -H 'Accept: application/json'
```

`GET /keys/{key_id_or_name}`

Get a Key using ID or name.

<h3 id="fetch-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id_or_name|path|string|true|The unique identifier or the name of the Key to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "d958f66b-8e99-44d2-b0b4-edd5bbf24658",
  "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
  "kid": "42",
  "name": "a-key",
  "pem": {
    "private_key": "-----BEGIN",
    "public_key": "-----BEGIN"
  },
  "set": {
    "id": "b86b331c-dcd0-4b3e-97ce-47c5a9543031"
  }
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Key|[Key](#schemakey)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Key

<a id="opIdupsert-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys/24D0DBDA-671C-11ED-BA0B-EF1DCCD3725 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "set": {
      "id": "string"
    },
    "name": "my-key",
    "kid": "42",
    "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
    "pem": {
      "private_key": "private_key\": \"-----BEGIN",
      "public_key": "public_key\": \"-----BEGIN"
    },
    "tags": [
      "string"
    ]
  }'
```

`PUT /keys/{key_id_or_name}`

Create or Update Key using ID or name.

> Body parameter

```json
{
  "set": {
    "id": "string"
  },
  "name": "my-key",
  "kid": "42",
  "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
  "pem": {
    "private_key": "private_key\": \"-----BEGIN",
    "public_key": "public_key\": \"-----BEGIN"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id_or_name|path|string|true|The unique identifier or the name of the Key to retrieve.|
|body|body|object|false|none|
|» set|body|object|false|The id (an UUID) of the key-set with which to associate the key .With form-encoded, the notation is `set.id=<set id>` or `set.name=<set name>`. With JSON, use `"set":{"id":"<set id>"}` or `"set":{"name":"<set name>"}.`|
|» » id|body|string|false|46CA83EE-671C-11ED-BFAB-2FE47512C77A|
|» name|body|string|false|The name to associate with the given keys.<br>|
|» kid|body|string|true|A unique identifier for a key.<br>|
|» jwk|body|string|false|A JSON Web Key represented as a string.|
|» pem|body|object|false|A keypair in PEM format.<br>|
|» » private_key|body|string|false|none|
|» » public_key|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "d958f66b-8e99-44d2-b0b4-edd5bbf24658",
  "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
  "kid": "42",
  "name": "a-key",
  "pem": {
    "private_key": "-----BEGIN",
    "public_key": "-----BEGIN"
  },
  "set": {
    "id": "b86b331c-dcd0-4b3e-97ce-47c5a9543031"
  }
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Key|[Key](#schemakey)|
|400|Bad Request|Invalid Key|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Key

<a id="opIddelete-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys/24D0DBDA-671C-11ED-BA0B-EF1DCCD3725 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /keys/{key_id_or_name}`

Delete a Key

<h3 id="delete-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id_or_name|path|string|true|The unique identifier or the name of the Key to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Key or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Key

<a id="opIdupdate-key"></a>

> Code samples

```bash
curl http://localhost:8001/keys/24D0DBDA-671C-11ED-BA0B-EF1DCCD3725 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "set": {
      "id": "string"
    },
    "name": "my-key",
    "kid": "42",
    "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
    "pem": {
      "private_key": "private_key\": \"-----BEGIN",
      "public_key": "public_key\": \"-----BEGIN"
    },
    "tags": [
      "string"
    ]
  }'
```

`PATCH /keys/{key_id_or_name}`

Update a Key

> Body parameter

```json
{
  "set": {
    "id": "string"
  },
  "name": "my-key",
  "kid": "42",
  "jwk": "{\\\"alg\\\":\\\"RSA\\\",  \\\"kid\\\": \\\"42\\\",  ...}",
  "pem": {
    "private_key": "private_key\": \"-----BEGIN",
    "public_key": "public_key\": \"-----BEGIN"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id_or_name|path|string|true|The unique identifier or the name of the Key to retrieve.|
|body|body|object|false|none|
|» set|body|object|false|The id (an UUID) of the key-set with which to associate the key .With form-encoded, the notation is `set.id=<set id>` or `set.name=<set name>`. With JSON, use `"set":{"id":"<set id>"}` or `"set":{"name":"<set name>"}.`|
|» » id|body|string|false|46CA83EE-671C-11ED-BFAB-2FE47512C77A|
|» name|body|string|false|The name to associate with the given keys.<br>|
|» kid|body|string|true|A unique identifier for a key.<br>|
|» jwk|body|string|false|A JSON Web Key represented as a string.|
|» pem|body|object|false|A keypair in PEM format.<br>|
|» » private_key|body|string|false|none|
|» » public_key|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "24D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "set": {
    "id": "46CA83EE-671C-11ED-BFAB-2FE47512C77A"
  },
  "name": "my-key",
  "kid": "42",
  "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
  "pem": {
    "private_key": "-----BEGIN",
    "public_key": "-----BEGIN"
  },
  "tags": [
    "application-a",
    "public-key-xyz"
  ],
  "created_at": 1422386534,
  "updated_at": 1422386534
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Key|[Key](#schemakey)|
|400|Bad Request|Invalid Key|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-key-sets">Key-sets</h1>

A JSON Web key set. Key sets are the preferred way to expose keys to plugins because they tell the plugin where to look for keys or have a scoping mechanism to restrict plugins to specific keys.


## List all Key-sets

<a id="opIdlist-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets \
  -H 'Accept: application/json'
```

`GET /key-sets`

Retrieve a list of all Key-sets in the system. A Key Set object holds a collection of asymmetric key objects. This entity allows to logically group keys by their purpose. Key Sets can be both tagged and filtered by tags.


<h3 id="list-all-key-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "id": "4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "my-key_set",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "tags": [
    "string"
  ],
  "next": "http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-key-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key set object response body|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-key-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name to associate with the given key-set.<br>|
|created_at|integer|false|none|Unix epoch when the resource was last created.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.<br>|
|tags|[string]|false|none|The name to associate with the given key-set.<br>|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Key-set

<a id="opIdcreate-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-key_set",
    "tags": [
      "string"
    ]
  }'
```

`POST /key-sets`

This endpoint allows creating a new Key-set by sending a JSON object that describes the Key-set to be created.The request body must contain all the fields required to create a new Key-set.

> Body parameter

```json
{
  "name": "my-key_set",
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|The name to associate with the given key-set.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "my-key_set",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "tags": [
    "string"
  ],
  "next": "http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key set object response body|Inline|
|400|Bad Request|Returned if the request contains invalid data.|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="create-a-new-key-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name to associate with the given key-set.<br>|
|created_at|integer|false|none|Unix epoch when the resource was last created.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.<br>|
|tags|[string]|false|none|The name to associate with the given key-set.<br>|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Key-set

<a id="opIdget-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets/46CA83EE-671C-11ED-BFAB-2FE47512C77A \
  -H 'Accept: application/json'
```

`GET /key-sets/{key-set_id_or_name}`

This endpoint retrieves information about a specific key-set based on its ID or name.

<h3 id="fetch-a-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key-set_id_or_name|path|string|true|The unique identifier or the `name` attribute of the Key Set that should be associated to the newly-created Key.|

> Example responses

> 200 Response

```json
{
  "id": "4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "my-key_set",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "tags": [
    "string"
  ],
  "next": "http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key set object response body|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<h3 id="fetch-a-key-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name to associate with the given key-set.<br>|
|created_at|integer|false|none|Unix epoch when the resource was last created.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.<br>|
|tags|[string]|false|none|The name to associate with the given key-set.<br>|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Key-set

<a id="opIdupsert-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets/46CA83EE-671C-11ED-BFAB-2FE47512C77A \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-key_set",
    "tags": [
      "string"
    ]
  }'
```

`PUT /key-sets/{key-set_id_or_name}`

Update a Key-set using ID or name.

> Note: This API is not available in DB-less mode.

> Body parameter

```json
{
  "name": "my-key_set",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key-set_id_or_name|path|string|true|The unique identifier or the `name` attribute of the Key Set that should be associated to the newly-created Key.|
|body|body|object|false|none|
|» name|body|string|false|The name to associate with the given key-set.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "my-key_set",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "tags": [
    "string"
  ],
  "next": "http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key set object response body|Inline|
|400|Bad Request|Invalid Key-set|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="update-a-key-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name to associate with the given key-set.<br>|
|created_at|integer|false|none|Unix epoch when the resource was last created.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.<br>|
|tags|[string]|false|none|The name to associate with the given key-set.<br>|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Key-set

<a id="opIddelete-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets/46CA83EE-671C-11ED-BFAB-2FE47512C77A \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /key-sets/{key-set_id_or_name}`

Delete a Key-set

> Note: This API is not available in DB-less mode.

<h3 id="delete-a-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key-set_id_or_name|path|string|true|The unique identifier or the `name` attribute of the Key Set that should be associated to the newly-created Key.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Key-set or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Key-set

<a id="opIdupdate-key-set"></a>

> Code samples

```bash
curl http://localhost:8001/key-sets/46CA83EE-671C-11ED-BFAB-2FE47512C77A \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "my-key_set",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /key-sets/{key-set_id_or_name}`

Update a Key-set using ID or name.

> Note: This API is not available in DB-less mode.

Inserts (or replaces) the Key Set under the requested resource with the definition specified in the body. The Key Set will be identified via the name or id attribute.

When the name or id attribute has the structure of a UUID, the Key Set being inserted/replaced will be identified by its id. Otherwise it will be identified by its name.

When creating a new Key Set without specifying id (neither in the URL nor in the body), then it will be auto-generated.

Notice that specifying a name in the URL and a different one in the request body is not allowed.

> Body parameter

```json
{
  "name": "my-key_set",
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-key-set-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key-set_id_or_name|path|string|true|The unique identifier or the `name` attribute of the Key Set that should be associated to the newly-created Key.|
|body|body|object|false|none|
|» name|body|string|false|The name to associate with the given key-set.<br>|
|» tags|body|[string]|false|An optional set of strings associated with the Key for grouping and filtering.<br>|

> Example responses

> 200 Response

```json
{
  "id": "4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "my-key_set",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "tags": [
    "string"
  ],
  "next": "http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969"
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-key-set-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key set object response body|Inline|
|400|Bad Request|Invalid Key-set|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<h3 id="update-a-key-set-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name to associate with the given key-set.<br>|
|created_at|integer|false|none|Unix epoch when the resource was last created.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.<br>|
|tags|[string]|false|none|The name to associate with the given key-set.<br>|
|next|string|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-information">Information</h1>

Information routes

## Get Kong's instance information

<a id="opIdgeInfo"></a>

> Code samples

```bash
curl http://localhost:8001/ \
  -H 'Accept: application/json'
```

`GET /`

Returns detailed information about the Kong gateway instance, including the full Kong configuration, available and unavailable plugins, version, edition (enterprise or community), a tagline, the unique node identifier, and other metadata.


> Example responses

> 200 Response

```json
{
  "configuration": {
    "_debug_pg_ttl_cleanup_interval": 300,
    "admin_acc_logs": "/usr/local/kong/logs/admin_access.log",
    "admin_access_log": "/dev/stdout"
  },
  "edition": "community",
  "hostname": "b8f553cfbd0c",
  "lua_version": "LuaJIT 2.1.0-20230410",
  "node_id": "39bfa49d-3394-4f8e-b9db-94b786bc4e5f",
  "pids": {
    "master": 1,
    "workers": [
      1278,
      1279,
      1280,
      1281,
      1282,
      1283,
      1284,
      1285
    ]
  },
  "plugins": {
    "available_on_server": {
      "acl": {
        "priority": 950,
        "version": "3.6.0"
      }
    },
    "enabled_in_cluster": []
  },
  "tagline": "Welcome to kong",
  "timers": {
    "pending": 1,
    "running": 145
  },
  "version": "3.6.0"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

> 405 Response

```json
{
  "status": 0,
  "message": "string"
}
```

<h3 id="get-kongs-instance-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|405|Method Not Allowed|Method Not Allowed|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="get-kongs-instance-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|The version number of the Kong instance.|
|edition|string|false|none|Indicates whether the Kong instance is the Community or Enterprise edition.|
|tagline|string|false|none|A tagline or slogan for the Kong instance.|
|node_id|string(uuid)|false|none|A unique identifier for the node, in UUID format.|
|hostname|string|false|none|The hostname of the Kong node.|
|timers|object|false|none|Information about running and pending timers.|
|» running|integer|false|none|The number of running timers.|
|» pending|integer|false|none|The number of pending timers.|
|plugins|object|false|none|Information about plugins.|
|» available_on_server|object|false|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » » version|string|false|none|The version of the plugin.|
|» » » priority|integer|false|none|The priority of the plugin.|
|» enabled_in_cluster|[string]|false|none|A list of distinct plugin names enabled in the cluster.|
|lua_version|string|false|none|The version of Lua used by the Kong instance.|
|configuration|object|false|none|A sanitized version of the Kong configuration, excluding sensitive values.|
|pids|object|false|none|Process IDs for the master process and worker processes.|
|» master|integer|false|none|The PID of the master process.|
|» workers|[integer]|false|none|An array of worker process PIDs.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Server|string||Kong's server tokens.|

<aside class="success">
This operation does not require authentication
</aside>

## List all endpoints

<a id="opIdget-endpoints"></a>

> Code samples

```bash
curl http://localhost:8001/endpoints \
  -H 'Accept: application/json'
```

`GET /endpoints`

List all available endpoints provided by the Admin API.

> Example responses

> 200 Response

```json
{
  "data": [
    "/",
    "/acls",
    "/acls/{acls}",
    "/acls/{acls}/consumer",
    "/acme",
    "/acme/certificates",
    "/acme/certificates/{certificates}",
    "/acme_storage",
    "/acme_storage/{acme_storage}",
    "/applications",
    "/applications/{applications}",
    "/applications/{applications}/application_instances",
    "/applications/{applications}/application_instances/{application_instances}",
    "/applications/{applications}/consumer",
    "/applications/{applications}/credentials/{plugin}",
    "/applications/{applications}/credentials/{plugin}/{credential_id}",
    "/applications/{applications}/developer",
    "/auth",
    "/basic-auths",
    "/basic-auths/{basicauth_credentials}",
    "/basic-auths/{basicauth_credentials}/consumer",
    "/ca_certificates",
    "/ca_certificates/{ca_certificates}",
    "/ca_certificates/{ca_certificates}/mtls_auth_credentials",
    "/ca_certificates/{ca_certificates}/mtls_auth_credentials/{mtls_auth_credentials}",
    "/cache",
    "/cache/{key}",
    "/certificates",
    "/certificates/{certificates}",
    "/certificates/{certificates}/services",
    "/certificates/{certificates}/services/{services}",
    "/certificates/{certificates}/snis",
    "/certificates/{certificates}/snis/{snis}",
    "/certificates/{certificates}/upstreams",
    "/certificates/{certificates}/upstreams/{upstreams}",
    "/clustering/data-planes",
    "/clustering/status",
    "/config",
    "/consumers",
    "/consumers/{consumers}",
    "/consumers/{consumers}/acls",
    "/consumers/{consumers}/acls/{acls}",
    "/consumers/{consumers}/admins",
    "/consumers/{consumers}/admins/{admins}",
    "/consumers/{consumers}/applications",
    "/consumers/{consumers}/applications/{applications}",
    "/consumers/{consumers}/basic-auth",
    "/consumers/{consumers}/basic-auth/{basicauth_credentials}",
    "/consumers/{consumers}/developers",
    "/consumers/{consumers}/developers/{developers}",
    "/consumers/{consumers}/hmac-auth",
    "/consumers/{consumers}/hmac-auth/{hmacauth_credentials}",
    "/consumers/{consumers}/jwt",
    "/consumers/{consumers}/jwt/{jwt_secrets}",
    "/consumers/{consumers}/key-auth",
    "/consumers/{consumers}/key-auth/{keyauth_credentials}",
    "/consumers/{consumers}/key-auth-enc",
    "/consumers/{consumers}/key-auth-enc/{keyauth_enc_credentials}",
    "/consumers/{consumers}/login_attempts",
    "/consumers/{consumers}/login_attempts/{login_attempts}",
    "/consumers/{consumers}/mtls-auth",
    "/consumers/{consumers}/mtls-auth/{mtls_auth_credentials}",
    "/consumers/{consumers}/mtls_auth_credentials",
    "/consumers/{consumers}/mtls_auth_credentials/{mtls_auth_credentials}",
    "/consumers/{consumers}/oauth2",
    "/consumers/{consumers}/oauth2/{oauth2_credentials}",
    "/consumers/{consumers}/plugins",
    "/consumers/{consumers}/plugins/{plugins}",
    "/debug/cluster/log-level/{log_level}",
    "/debug/node/log-level",
    "/debug/node/log-level/{log_level}",
    "/debug/profiling/cpu",
    "/debug/profiling/gc-snapshot",
    "/debug/profiling/memory",
    "/degraphql_routes",
    "/degraphql_routes/{degraphql_routes}",
    "/degraphql_routes/{degraphql_routes}/service",
    "/endpoints",
    "/entities/migrate",
    "/event-hooks",
    "/event-hooks/sources",
    "/event-hooks/sources/{source}",
    "/event-hooks/sources/{source}/{event}",
    "/event-hooks/{event_hooks}",
    "/event-hooks/{event_hooks}/ping",
    "/event-hooks/{event_hooks}/test",
    "/files",
    "/files/*",
    "/files/partials/*",
    "/files/{files}",
    "/filter-chains",
    "/filter-chains/{filter_chains}",
    "/filter-chains/{filter_chains}/route",
    "/filter-chains/{filter_chains}/service",
    "/graphql-proxy-cache-advanced",
    "/graphql-proxy-cache-advanced/{cache_key}",
    "/graphql-proxy-cache-advanced/{plugin_id}/caches/{cache_key}",
    "/graphql-rate-limiting-advanced/costs",
    "/graphql-rate-limiting-advanced/costs/{graphql_ratelimiting_advanced_cost_decoration}",
    "/graphql_ratelimiting_advanced_cost_decoration",
    "/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}",
    "/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}/service",
    "/groups",
    "/groups/{groups}",
    "/groups/{groups}/roles",
    "/hmac-auths",
    "/hmac-auths/{hmacauth_credentials}",
    "/hmac-auths/{hmacauth_credentials}/consumer",
    "/jwt-signer/jwks",
    "/jwt-signer/jwks/{jwt_signer_jwks}",
    "/jwt-signer/jwks/{jwt_signer_jwks}/rotate",
    "/jwts",
    "/jwts/{jwt_secrets}",
    "/jwts/{jwt_secrets}/consumer",
    "/key-auths",
    "/key-auths/{keyauth_credentials}",
    "/key-auths/{keyauth_credentials}/consumer",
    "/key-auths-enc",
    "/key-auths-enc/{keyauth_enc_credentials}",
    "/key-auths-enc/{keyauth_enc_credentials}/consumer",
    "/key-sets",
    "/key-sets/{key_sets}",
    "/key-sets/{key_sets}/keys",
    "/key-sets/{key_sets}/keys/{keys}",
    "/keys",
    "/keys/{keys}",
    "/keys/{keys}/set",
    "/konnect_applications",
    "/konnect_applications/{konnect_applications}",
    "/license/report",
    "/licenses",
    "/licenses/{licenses}",
    "/login_attempts",
    "/login_attempts/{login_attempts}",
    "/login_attempts/{login_attempts}/consumer",
    "/metrics",
    "/mtls-auths",
    "/mtls-auths/{mtls_auth_credentials}/consumer",
    "/mtls_auth_credentials",
    "/mtls_auth_credentials/{mtls_auth_credentials}",
    "/mtls_auth_credentials/{mtls_auth_credentials}/ca_certificate",
    "/mtls_auth_credentials/{mtls_auth_credentials}/consumer",
    "/oauth2",
    "/oauth2/{oauth2_credentials}",
    "/oauth2/{oauth2_credentials}/consumer",
    "/oauth2/{oauth2_credentials}/oauth2_tokens",
    "/oauth2/{oauth2_credentials}/oauth2_tokens/{oauth2_tokens}",
    "/oauth2_tokens",
    "/oauth2_tokens/{oauth2_tokens}",
    "/oauth2_tokens/{oauth2_tokens}/credential",
    "/oauth2_tokens/{oauth2_tokens}/service",
    "/openid-connect/issuers",
    "/openid-connect/issuers/{oic_issuers}",
    "/openid-connect/jwks",
    "/plugins",
    "/plugins/enabled",
    "/plugins/schema/{name}",
    "/plugins/{plugins}",
    "/plugins/{plugins}/consumer",
    "/plugins/{plugins}/route",
    "/plugins/{plugins}/service",
    "/proxy-cache",
    "/proxy-cache/{cache_key}",
    "/proxy-cache/{plugin_id}/caches/{cache_key}",
    "/proxy-cache-advanced",
    "/proxy-cache-advanced/{cache_key}",
    "/proxy-cache-advanced/{plugin_id}/caches/{cache_key}",
    "/routes",
    "/routes/{routes}",
    "/routes/{routes}/filter-chains",
    "/routes/{routes}/filter-chains/{filter_chains}",
    "/routes/{routes}/filters/all",
    "/routes/{routes}/filters/disabled",
    "/routes/{routes}/filters/enabled",
    "/routes/{routes}/plugins",
    "/routes/{routes}/plugins/{plugins}",
    "/routes/{routes}/service",
    "/schemas/plugins/validate",
    "/schemas/plugins/{name}",
    "/schemas/{db_entity_name}/validate",
    "/schemas/{name}",
    "/services",
    "/services/{services}",
    "/services/{services}/application_instances",
    "/services/{services}/application_instances/{application_instances}",
    "/services/{services}/applications",
    "/services/{services}/client_certificate",
    "/services/{services}/degraphql/routes",
    "/services/{services}/degraphql/routes/{degraphql_routes}",
    "/services/{services}/degraphql_routes",
    "/services/{services}/degraphql_routes/{degraphql_routes}",
    "/services/{services}/filter-chains",
    "/services/{services}/filter-chains/{filter_chains}",
    "/services/{services}/graphql-rate-limiting-advanced/costs",
    "/services/{services}/graphql_ratelimiting_advanced_cost_decoration",
    "/services/{services}/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}",
    "/services/{services}/oauth2_tokens",
    "/services/{services}/oauth2_tokens/{oauth2_tokens}",
    "/services/{services}/plugins",
    "/services/{services}/plugins/{plugins}",
    "/services/{services}/routes",
    "/services/{services}/routes/{routes}",
    "/sessions",
    "/sessions/{sessions}",
    "/snis",
    "/snis/{snis}",
    "/snis/{snis}/certificate",
    "/status",
    "/tags",
    "/tags/{tags}",
    "/targets",
    "/targets/{targets}",
    "/targets/{targets}/upstream",
    "/timers",
    "/upstreams",
    "/upstreams/{upstreams}",
    "/upstreams/{upstreams}/client_certificate",
    "/upstreams/{upstreams}/health",
    "/upstreams/{upstreams}/targets",
    "/upstreams/{upstreams}/targets/all",
    "/upstreams/{upstreams}/targets/{targets}",
    "/upstreams/{upstreams}/targets/{targets}/healthy",
    "/upstreams/{upstreams}/targets/{targets}/unhealthy",
    "/upstreams/{upstreams}/targets/{targets}/{address}/healthy",
    "/upstreams/{upstreams}/targets/{targets}/{address}/unhealthy",
    "/userinfo",
    "/vault-auth",
    "/vault-auth/{vault_auth_vaults}",
    "/vault-auth/{vault}/credentials",
    "/vault-auth/{vault}/credentials/token/{access_token}",
    "/vault-auth/{vault}/credentials/{consumer}",
    "/vaults",
    "/vaults/{vaults}",
    "/vitals/",
    "/vitals/cluster",
    "/vitals/cluster/status_codes",
    "/vitals/consumers/{consumer_id}/cluster",
    "/vitals/nodes/",
    "/vitals/nodes/{node_id}",
    "/vitals/reports/{entity_type}",
    "/vitals/status_code_classes",
    "/vitals/status_codes/by_consumer",
    "/vitals/status_codes/by_consumer_and_route",
    "/vitals/status_codes/by_route",
    "/vitals/status_codes/by_service"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-endpoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List method by endpoint

<a id="opIdoptions-endpoint"></a>

> Code samples

```bash
curl http://localhost:8001/key \
  -X OPTIONS \
  -H 'Accept: application/json'
```

`OPTIONS /{endpoint}`

List all the supported HTTP methods by an endpoint. This can also be used with a CORS preflight request.


<h3 id="list-method-by-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpoint|path|string|true|Any available endpoint|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-method-by-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Date|string||The date and time at which the message was originated|
|204|Connection|string||Indicates whether the connection will be closed after the message is completed|
|204|Access-Control-Allow-Origin|string||Indicates whether the resource can be accessed by any origin|
|204|Access-Control-Allow-Headers|string||Used in response to a preflight request to indicate which HTTP headers can be used during the actual request|
|204|X-Kong-Admin-Request-ID|string||A unique identifier for the request, generated by Kong|
|204|Allow|string||Lists the HTTP methods that are supported for the resource|
|204|Access-Control-Allow-Methods|string||Indicates the methods allowed when accessing the resource in response to a preflight request|
|204|X-Kong-Admin-Latency|integer||The time taken to process the request on the server, in milliseconds|
|204|Server|string||The software used by the origin server to handle the request|

<aside class="success">
This operation does not require authentication
</aside>

## Check endpoint or entity existence

<a id="opIdhead-endpoints"></a>

> Code samples

```bash
curl http://localhost:8001/key \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /{endpoint}`

Similar to `HTTP` GET, but does not return the body. Returns HTTP 200 when the endpoint exits or HTTP 404 when it does not. Other status codes are possible.


<h3 id="check-endpoint-or-entity-existence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpoint|path|string|true|Any available endpoint|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="check-endpoint-or-entity-existence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Endpoint does not exist|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Date|string||The date and time at which the message was originated|
|204|Content-Type|string||The media type of the message content|
|204|Connection|string||Indicates whether the connection will be closed after the message is completed|
|204|Access-Control-Allow-Origin|string||Indicates whether the resource can be accessed by any origin|
|204|X-Kong-Admin-Request-ID|string||A unique identifier for the request, generated by Kong|
|204|X-Kong-Admin-Latency|integer||The time taken to process the request on the server, in milliseconds|
|204|Server|string||The software used by the origin server to handle the request|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve entity schema

<a id="opIdget-schemas-entity"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/string \
  -H 'Accept: application/json'
```

`GET /schemas/{entity}`

Retrieve the schema of an entity. This is useful to understand what fields an entity accepts, and can be used for building third-party integrations with Kong.

<h3 id="retrieve-entity-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "id": {
        "auto": true,
        "type": "string",
        "uuid": true
      }
    },
    {
      "created_at": {
        "auto": true,
        "timestamp": true,
        "type": "integer"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-entity-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="retrieve-entity-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|false|none|A value of a schema|
|» id|object|false|none|A value of a schema|
|» » auto|boolean|false|none|A value of a schema|
|» » type|string|false|none|A value of a schema|
|» » uuid|boolean|false|none|A value of a schema|

<aside class="success">
This operation does not require authentication
</aside>

## Validate a configuration against a schema

<a id="opIdpost-schemas-entity-validate"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/string/validate \
  -X POST \
  -H 'Accept: application/json'
```

`POST /schemas/{entity}/validate`

Check validity of a configuration against its entity schema. This allows you to test your input before submitting a request to the entity endpoints of the Admin API.

A requests to the entity endpoint using the given configuration may still fail due to other reasons, such as invalid foreign key relationships or uniqueness check failures against the contents of the data store.

<h3 id="validate-a-configuration-against-a-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "schema validation successful"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="validate-a-configuration-against-a-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="validate-a-configuration-against-a-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|A success message|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Proxy-Wasm Filter JSON Schema

<a id="opIdget-schemas-filters-filter_name"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/filters/go-rate-limiting \
  -H 'Accept: application/json'
```

`GET /schemas/filters/{filter_name}`

Retrieve the JSON Schema of a Proxy-Wasm filter's configuration. This is useful to understand what fields a filter accepts, and can be used for building third-party integrations to the Kong's filter chain system.


<h3 id="retrieve-proxy-wasm-filter-json-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_name|path|string|true|The name of a Proxy-Wasm filter|

> Example responses

> 200 Response

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "add": {
      "type": "object",
      "properties": {
        "headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "headers"
      ]
    }
  },
  "required": [
    "add"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-proxy-wasm-filter-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Plugin Schema

<a id="opIdget-schemas-plugins-plugin_name"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/plugins/basic-auth \
  -H 'Accept: application/json'
```

`GET /schemas/plugins/{plugin_name}`

Retrieve the schema of a plugin's configuration. This is useful to understand what fields a plugin accepts, and can be used for building third-party integrations to the Kong's plugin system.


<h3 id="retrieve-plugin-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plugin_name|path|string|true|The name of a Kong plugin|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-plugin-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate plugin schema

<a id="opIdpost-schemas-plugins-validate"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/plugins/validate \
  -X POST \
  -H 'Accept: application/json'
```

`POST /schemas/plugins/validate`

Check validity of a plugin configuration against the plugins entity schema. This allows you to test your input before submitting a request to the entity endpoints of the Admin API.


This only performs the schema validation checks, checking that the input configuration is well-formed. A requests to the entity endpoint using the given configuration may still fail due to other reasons, such as invalid foreign key relationships or uniqueness check failures against the contents of the data store.

> Example responses

> 200 Response

```json
{
  "message": "schema validation successful"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="validate-plugin-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="validate-plugin-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A successful message|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Runtime Debugging Info of Kong's Timers

<a id="opIdget-timers"></a>

> Code samples

```bash
curl http://localhost:8001/timers \
  -H 'Accept: application/json'
```

`GET /timers`

Retrieve runtime stats data from [lua-resty-timer-ng](https://github.com/Kong/lua-resty-timer-ng).

> Example responses

> 200 Response

```json
{
  "stats": {
    "sys": {
      "total": 7,
      "waiting": 7,
      "runs": 7,
      "pending": 0,
      "running": 0
    },
    "flamegraph": {
      "pending": "@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 0\n",
      "running": "@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 0\n",
      "elapsed_time": "@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 17\n"
    },
    "timers": {
      "meta": {
        "name": "@/build/luarocks/share/lua/5.1/resty/counter.lua:71:new()"
      }
    }
  },
  "worker": {
    "id": 0,
    "count": 0
  }
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-runtime-debugging-info-of-kongs-timers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="retrieve-runtime-debugging-info-of-kongs-timers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|object|false|none|Statistics about the worker|
|» sys|object|false|none|List of the number of different type of timers|
|» » total|integer|false|none|The total number of timers (running + pending + waiting)|
|» » waiting|integer|false|none|The number of unexpired timers|
|» » runs|integer|false|none|The total number of runs for the timers|
|» » pending|integer|false|none|The number of pending timers|
|» » running|integer|false|none|The number of running timers|
|» flamegraph|object|false|none|String-encoded timer-related flamegraph data|
|» » pending|string|false|none|The number of pending timers for the flamegraph|
|» » running|string|false|none|The number of running timers for the flamegraph|
|» » elapsed_time|string|false|none|The elapsed time for the flamegraph|
|» timers|object|false|none|Timer statistics for the worker|
|» » meta|object|false|none|Program callstack of created timers|
|» » » name|string|false|none|The name of the timer's metadata|
|worker|object|false|none|none|
|» id|integer|false|none|The ordinal number of the current Nginx worker processes (starting from number 0).|
|» count|integer|false|none|The total number of the Nginx worker processes.|

<aside class="success">
This operation does not require authentication
</aside>

## Health Routes

<a id="opIdget-status"></a>

> Code samples

```bash
curl http://localhost:8001/status \
  -H 'Accept: application/json'
```

`GET /status`

Retrieve usage information about a node, with some basic information about the connections being processed by the underlying nginx process, the status of the database connection, and node's memory usage.

If you want to monitor the Kong process, since Kong is built on top of nginx, every existing nginx monitoring tool or agent can be used.

> Example responses

> 200 Response

```json
{
  "memory": {
    "lua_shared_dicts": {
      "kong_core_db_cache": {
        "capacity": "128.00 MiB",
        "allocated_slabs": "0.76 MiB"
      },
      "kong_core_db_cache_miss": {
        "capacity": "12.00 MiB",
        "allocated_slabs": "0.08 MiB"
      },
      "kong_db_cache": {
        "capacity": "128.00 MiB",
        "allocated_slabs": "0.78 MiB"
      },
      "kong_db_cache_miss": {
        "capacity": "12.00 MiB",
        "allocated_slabs": "0.08 MiB"
      },
      "kong_vitals_counters": {
        "capacity": "50.00 MiB",
        "allocated_slabs": "0.30 MiB"
      },
      "kong_vitals_lists": {
        "capacity": "1.00 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "kong_vitals": {
        "capacity": "1.00 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "kong_counters": {
        "capacity": "1.00 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "kong_reports_consumers": {
        "capacity": "10.00 MiB",
        "allocated_slabs": "0.07 MiB"
      },
      "kong_reports_routes": {
        "capacity": "1.00 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "kong_reports_services": {
        "capacity": "1.00 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "kong_profiling_state": {
        "capacity": "1.50 MiB",
        "allocated_slabs": "0.02 MiB"
      },
      "prometheus_metrics": {
        "capacity": "5.00 MiB",
        "allocated_slabs": "0.04 MiB"
      },
      "kong": {
        "capacity": "5.00 MiB",
        "allocated_slabs": "0.04 MiB"
      },
      "kong_locks": {
        "capacity": "8.00 MiB",
        "allocated_slabs": "0.06 MiB"
      },
      "kong_healthchecks": {
        "capacity": "5.00 MiB",
        "allocated_slabs": "0.04 MiB"
      },
      "kong_process_events": {
        "capacity": "5.00 MiB",
        "allocated_slabs": "0.04 MiB"
      },
      "kong_cluster_events": {
        "capacity": "5.00 MiB",
        "allocated_slabs": "0.04 MiB"
      },
      "kong_rate_limiting_counters": {
        "capacity": "12.00 MiB",
        "allocated_slabs": "0.08 MiB"
      }
    },
    "workers_lua_vms": [
      {
        "http_allocated_gc": "51.92 MiB",
        "pid": 2323
      },
      {
        "http_allocated_gc": "51.48 MiB",
        "pid": 2324
      },
      {
        "http_allocated_gc": "51.48 MiB",
        "pid": 2325
      },
      {
        "http_allocated_gc": "51.48 MiB",
        "pid": 2326
      },
      {
        "http_allocated_gc": "51.48 MiB",
        "pid": 2327
      }
    ]
  },
  "database": {
    "reachable": true
  },
  "server": {
    "connections_reading": 0,
    "connections_writing": 6,
    "total_requests": 28,
    "connections_waiting": 0,
    "connections_handled": 15,
    "connections_active": 6,
    "connections_accepted": 15
  }
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="health-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="health-routes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|object|false|none|Metrics about the memory usage.|
|» lua_shared_dicts|object|false|none|An array of information about dictionaries that are shared with all workers in a Kong node, where each array node contains how much memory is dedicated for the specific shared dictionary (capacity) and how much of said memory is in use (allocated_slabs).|
|» » kong_core_db_cache|object|false|none|none|
|» » » capacity|string|false|none|Memory capacity|
|» » » allocated_slabs|string|false|none|Total allocated memory|
|» workers_lua_vms|[object]|false|none|An array with all workers of the Kong node, each entry contains a `http_allocated_gc` string and a `pid`.|
|» » http_allocated_gc|string|false|none|HTTP submodule's Lua virtual machine's memory usage information, as reported by<br>|
|» » pid|integer|false|none|worker's process identification number.|
|database|object|false|none|Metrics about the database|
|» reachable|boolean|false|none|A boolean value reflecting the state of the database connection. Please note that this flag does not reflect the health of the database itself.|
|server|object|false|none|Metrics about the nginx HTTP/S server|
|» connections_reading|integer|false|none|The current number of connections where Kong is reading the request header.|
|» connections_writing|integer|false|none|The current number of connections where nginx is writing the response back to the client.|
|» total_requests|integer|false|none|The total number of client requests.|
|» connections_waiting|integer|false|none|The current number of idle client connections waiting for a request.|
|» connections_handled|integer|false|none|The total number of handled connections. Generally, the parameter value is the same as accepts unless some resource limits have been reached.|
|» connections_active|integer|false|none|The current number of active client connections including Waiting connections.|
|» connections_accepted|integer|false|none|The total number of accepted client connections.|

<aside class="success">
This operation does not require authentication
</aside>

## DNS Status

<a id="opIdgetDnsStatus"></a>

> Code samples

```bash
curl http://localhost:8001/status/dns \
  -H 'Accept: application/json'
```

`GET /status/dns`

Retrieve DNS worker and stats information. If the legacy DNS client is in use, it returns a 501 status with a message.


> Example responses

> 200 Response

```json
{
  "worker": {
    "id": 1,
    "count": 4
  },
  "stats": {}
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

> 501 Response

```json
{
  "message": "not implemented with the legacy DNS client"
}
```

<h3 id="dns-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|DNS worker and stats information|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|501|Not Implemented|Legacy DNS client in use|Inline|

<h3 id="dns-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|worker|object|false|none|Worker information.|
|» id|integer|false|none|The worker ID.|
|» count|integer|false|none|The total number of workers.|
|stats|object|false|none|DNS stats information (specific details depend on the Kong instance).|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Message indicating that the endpoint is not implemented with the legacy DNS client.|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Vault Schema

<a id="opIdget-schemas-vaults-vault_name"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/vaults/string \
  -H 'Accept: application/json'
```

`GET /schemas/vaults/{vault_name}`

Retrieve the schema of a vault.

<h3 id="retrieve-vault-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_name|path|string|true|The vault schema to be returned|

> Example responses

> 200 Response

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-vault-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Vault](#schemavault)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|No vault named|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-debug">Debug</h1>

Debug routes

## Set Node Log Level of All Control Plane Nodes

<a id="opIdput-debug-cluster-control-planes-nodes-log-level-log_level"></a>

> Code samples

```bash
curl http://localhost:8001/debug/cluster/control-planes-nodes/log-level/warn \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /debug/cluster/control-planes-nodes/log-level/{log_level}`

Change the log level of all control plane nodes deployed in a hybrid (CP/DP) cluster.

See the [NGINX docs](http://nginx.org/en/docs/ngx_core_module.html#error_log) for a list of accepted values.

Care must be taken when changing the log level of a node to `debug` in a production environment because the disk could fill up quickly. As soon as the debug logging finishes, revert back to a higher level such as notice.

It's currently not possible to change the log level of DP and DB-less nodes.


<h3 id="set-node-log-level-of-all-control-plane-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_level|path|string|true|Log levels are set in Kong's configuration. Log levels increase in order of their severity|

#### Enumerated Values

|Parameter|Value|
|---|---|
|log_level|info|
|log_level|notice|
|log_level|warn|
|log_level|error|
|log_level|crit|

> Example responses

> 200 Response

```json
{
  "message": "log level changed"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="set-node-log-level-of-all-control-plane-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="set-node-log-level-of-all-control-plane-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Response message|

<aside class="success">
This operation does not require authentication
</aside>

## Set Node Log Level of All Nodes

<a id="opIdput-debug-cluster-log-level-log_level"></a>

> Code samples

```bash
curl http://localhost:8001/debug/cluster/log-level/warn \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /debug/cluster/log-level/{log_level}`

Change the log level of all nodes in a cluster.



See the [NGINX docs](http://nginx.org/en/docs/ngx_core_module.html#error_log) for a list of accepted values.

It's currently not possible to change the log level of DP and DB-less nodes.

Currently, when a user dynamically changes the log level for the entire cluster, if a new node joins a cluster the new node will run at the previous log level, not at the log level that was previously set dynamically for the entire cluster.


<h3 id="set-node-log-level-of-all-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_level|path|string|true|Log levels are set in Kong's configuration. Log levels increase in order of their severity|

#### Enumerated Values

|Parameter|Value|
|---|---|
|log_level|info|
|log_level|notice|
|log_level|warn|
|log_level|error|
|log_level|crit|

> Example responses

> 200 Response

```json
{
  "message": "log level changed"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="set-node-log-level-of-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="set-node-log-level-of-all-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message containing information about the log level|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Node Log Level of A Node

<a id="opIdget-debug-node-log-level"></a>

> Code samples

```bash
curl http://localhost:8001/debug/node/log-level \
  -H 'Accept: application/json'
```

`GET /debug/node/log-level`

Retrieve the current log level of a node.

See the [NGINX documentation](http://nginx.org/en/docs/ngx_core_module.html#error_log) for the list of possible return values.

> Example responses

> 200 Response

```json
{
  "message": "log level: debug"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="retrieve-node-log-level-of-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="retrieve-node-log-level-of-a-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message containing the current log level of the node.|

<aside class="success">
This operation does not require authentication
</aside>

## Set log level of a single node

<a id="opIdput-debug-node-log-level-log_level"></a>

> Code samples

```bash
curl http://localhost:8001/debug/node/log-level/warn \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /debug/node/log-level/{log_level}`

Change the log level of a node.

See the [NGINX documentation](http://nginx.org/en/docs/ngx_core_module.html#error_log) for the list of possible return values.


<h3 id="set-log-level-of-a-single-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_level|path|string|true|Log levels are set in Kong's configuration. Log levels increase in order of their severity|

#### Enumerated Values

|Parameter|Value|
|---|---|
|log_level|info|
|log_level|notice|
|log_level|warn|
|log_level|error|
|log_level|crit|

> Example responses

> 200 Response

```json
{
  "message": "log level changed"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="set-log-level-of-a-single-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="set-log-level-of-a-single-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A message confirming the log level change|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-targets">Targets</h1>

A target is an IP address or hostname with a port that identifies an instance of a backend service. Every upstream can have many targets, and the targets can be dynamically added, modified, or deleted. Changes take effect on the fly.
<br><br>
To disable a target, post a new one with `weight=0`, or use the `DELETE` method to accomplish the same.


## List all Targets associated with an Upstream

<a id="opIdlist-targets-for-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/string/targets \
  -H 'Accept: application/json'
```

`GET /upstreams/{upstream_id_or_name}/targets`

List all Targets associated with a an Upstream

<h3 id="list-all-targets-associated-with-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|ID or name of the related Upstream|
|size|query|integer|false|Number of resources to be returned.|
|offset|query|string|false|Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources|
|tags|query|string|false|A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "089292a7-ba3d-4d88-acf0-97b4b2e2621a",
      "target": "203.0.113.42",
      "upstream": {
        "id": "5f1d7e76-2fed-4806-a6af-869984f025cb"
      },
      "weight": 100
    }
  ],
  "offset": "string"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-targets-associated-with-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response listing Targets|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-targets-associated-with-an-upstream-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Target](#schematarget)]|false|none|none|
|offset|[pagination-offset-response](#schemapagination-offset-response)|false|none|Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Target associated with an Upstream

<a id="opIdcreate-target-for-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/string/targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "target": "example.com:8000",
    "weight": 100,
    "tags": [
      "string"
    ]
  }'
```

`POST /upstreams/{upstream_id_or_name}/targets`

Create a new Target associated with an Upstream

> Body parameter

```json
{
  "target": "example.com:8000",
  "weight": 100,
  "tags": [
    "string"
  ]
}
```

<h3 id="create-a-new-target-associated-with-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|ID or name of the related Upstream|
|body|body|object|false|none|
|» target|body|string|false|The target for the upstream|
|» weight|body|integer|false|The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.|
|» tags|body|[string]|false|An optional set of strings associated with the Target for grouping and filtering.|

> Example responses

> 200 Response

```json
{
  "id": "173a6cee-90d1-40a7-89cf-0329eca780a6",
  "created_at": 1422386534,
  "upstream": {
    "id": "bdab0e47-4e37-4f0b-8fd0-87d95cc4addc"
  },
  "target": "example.com:8000",
  "weight": 100,
  "tags": [
    "user-level",
    "low-priority"
  ]
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-a-new-target-associated-with-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created Target|[Target](#schematarget)|
|400|Bad Request|Invalid Target|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a Target associated with an Upstream

<a id="opIdfetch-target-for-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41/targets/example.com%3A8000 \
  -H 'Accept: application/json'
```

`GET /upstreams/{upstream_id_or_name}/targets/{target_id_or_target}`

Get a Target associated with an Upstream using ID or target.

<h3 id="fetch-a-target-associated-with-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|target_id_or_target|path|string|true|The host/port combination element of the target to set as unhealthy, or the `id` of an existing target entry.|

> Example responses

> 200 Response

```json
{
  "id": "089292a7-ba3d-4d88-acf0-97b4b2e2621a",
  "target": "203.0.113.42",
  "upstream": {
    "id": "5f1d7e76-2fed-4806-a6af-869984f025cb"
  },
  "weight": 100
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="fetch-a-target-associated-with-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully fetched Target|[Target](#schematarget)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert a Target associated with an Upstream

<a id="opIdupsert-target-for-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41/targets/example.com%3A8000 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "target": "example.com:8000",
    "weight": 100,
    "tags": [
      "string"
    ]
  }'
```

`PUT /upstreams/{upstream_id_or_name}/targets/{target_id_or_target}`

Create or Update a Target associated with an Upstream using ID or target.

> Body parameter

```json
{
  "target": "example.com:8000",
  "weight": 100,
  "tags": [
    "string"
  ]
}
```

<h3 id="upsert-a-target-associated-with-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|target_id_or_target|path|string|true|The host/port combination element of the target to set as unhealthy, or the `id` of an existing target entry.|
|body|body|object|false|none|
|» target|body|string|false|The target for the upstream|
|» weight|body|integer|false|The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.|
|» tags|body|[string]|false|An optional set of strings associated with the Target for grouping and filtering.|

> Example responses

> 200 Response

```json
{
  "id": "089292a7-ba3d-4d88-acf0-97b4b2e2621a",
  "target": "203.0.113.42",
  "upstream": {
    "id": "5f1d7e76-2fed-4806-a6af-869984f025cb"
  },
  "weight": 100
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="upsert-a-target-associated-with-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully upserted Target|[Target](#schematarget)|
|400|Bad Request|Invalid Target|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Target associated with a an Upstream

<a id="opIddelete-upstream-target"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41/targets/example.com%3A8000 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /upstreams/{upstream_id_or_name}/targets/{target_id_or_target}`

Delete a Target associated with a an Upstream using ID or target.

<h3 id="delete-a-target-associated-with-a-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|target_id_or_target|path|string|true|The host/port combination element of the target to set as unhealthy, or the `id` of an existing target entry.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-a-target-associated-with-a-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Target or the resource didn't exist|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a target associated with an Upstream

<a id="opIdupdate-target-for-upstream"></a>

> Code samples

```bash
curl http://localhost:8001/upstreams/7fca84d6-7d37-4a74-a7b0-93e576089a41/targets/example.com%3A8000 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "target": "example.com:8000",
    "weight": 100,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /upstreams/{upstream_id_or_name}/targets/{target_id_or_target}`

Update a Target associated with a an Upstream using ID or target.

> Body parameter

```json
{
  "target": "example.com:8000",
  "weight": 100,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-target-associated-with-an-upstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstream_id_or_name|path|string|true|The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.|
|target_id_or_target|path|string|true|The host/port combination element of the target to set as unhealthy, or the `id` of an existing target entry.|
|body|body|object|false|none|
|» target|body|string|false|The target for the upstream|
|» weight|body|integer|false|The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.|
|» tags|body|[string]|false|An optional set of strings associated with the Target for grouping and filtering.|

> Example responses

> 200 Response

```json
{
  "id": "089292a7-ba3d-4d88-acf0-97b4b2e2621a",
  "target": "203.0.113.42",
  "upstream": {
    "id": "5f1d7e76-2fed-4806-a6af-869984f025cb"
  },
  "weight": 100
}
```

> 400 Response

```json
{}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-a-target-associated-with-an-upstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Target|[Target](#schematarget)|
|400|Bad Request|Invalid Target|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|
|404|Not Found|Resource does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-tags">Tags</h1>

Tags are strings associated to entities in Kong Gateway. Tags can contain almost all UTF-8 characters, with the following exceptions: `,`,`/`, and non-printable ASCII (for example, the space character). 
<br><br>
Most core entities can be tagged via the tags attribute upon creation or modification.


## List all tags

<a id="opIdget-tags"></a>

> Code samples

```bash
curl http://localhost:8001/tags \
  -H 'Accept: application/json'
```

`GET /tags`

Returns a paginated list of all the tags in the system.

The list of entities will not be restricted to a single entity type: all the entities tagged with tags will be present on this list.

If an entity is tagged with more than one tag, the entity_id for that entity will appear more than once in the resulting list. Similarly, if several entities have been tagged with the same tag, the tag will appear in several items of this list.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entity_name": "services",
      "entity_id": "c87440e1-0496-420b-b06f-dac59544bb6c",
      "tag": "example"
    }
  ],
  "offset": "1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9",
  "next": "/tags/example?offset=1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags response body|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-all-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» entity_name|string|false|none|The name of the entity that corresponds to a tag|
|» entity_id|string|false|none|The unique ID for the entity that is attached to the tag|
|» tag|string|false|none|The tag|
|offset|string|false|none|Pagination information|
|next|string|false|none|Pagination information|

<aside class="success">
This operation does not require authentication
</aside>

## List entity by tag

<a id="opIdget-tags-tags"></a>

> Code samples

```bash
curl http://localhost:8001/tags/example \
  -H 'Accept: application/json'
```

`GET /tags/{tags}`

Returns the entities that have been tagged with the specified tag.

The list of entities will not be restricted to a single entity type: all the entities tagged with tags will be present on this list.

<h3 id="list-entity-by-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|Tags are strings associated to entities in Kong.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entity_name": "services",
      "entity_id": "c87440e1-0496-420b-b06f-dac59544bb6c",
      "tag": "example"
    }
  ],
  "offset": "1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9",
  "next": "/tags/example?offset=1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9"
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-entity-by-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags response body|Inline|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<h3 id="list-entity-by-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» entity_name|string|false|none|The name of the entity that corresponds to a tag|
|» entity_id|string|false|none|The unique ID for the entity that is attached to the tag|
|» tag|string|false|none|The tag|
|offset|string|false|none|Pagination information|
|next|string|false|none|Pagination information|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-clustering">clustering</h1>

Retrieve information about the status of data planes when Kong Gateway is configured in hybrid mode.


## Retrieve connected data planes

<a id="opIdgetDataPlanes"></a>

> Code samples

```bash
curl http://localhost:8001/clustering/data-planes \
  -H 'Accept: application/json'
```

`GET /clustering/data-planes`

Retrieve a list of all data planes connected to the control plane. This endpoint is only accessible when Kong Gateway is running in hybrid mode.


> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ip": "string",
      "updated_at": 0,
      "config_hash": "string",
      "sync_status": "string",
      "version": "string",
      "id": "string",
      "hostname": "string",
      "ttl": 0,
      "last_seen": 0,
      "labels": {
        "deployment": "string",
        "region": "string"
      },
      "cert_details": {
        "expiry_timestamp": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "This endpoint is only available when Kong is running as a control plane for the cluster."
}
```

<h3 id="retrieve-connected-data-planes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of connected data planes.|Inline|
|400|Bad Request|Kong is not running as a control plane.|Inline|

<h3 id="retrieve-connected-data-planes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» ip|string|false|none|The IP address of the data plane.|
|» updated_at|integer|false|none|Unix timestamp of the last update.|
|» config_hash|string|false|none|The hash of the current configuration on the data plane.|
|» sync_status|string|false|none|The sync status of the data plane.|
|» version|string|false|none|The version of Kong running on the data plane.|
|» id|string|false|none|Unique identifier of the data plane.|
|» hostname|string|false|none|The hostname of the data plane.|
|» ttl|integer|false|none|Time-to-live for the connection.|
|» last_seen|integer|false|none|Unix timestamp when the data plane was last seen by the control plane.|
|» labels|object|false|none|Metadata labels attached to the data plane.|
|» » deployment|string|false|none|The deployment name.|
|» » region|string|false|none|The region of the data plane.|
|» cert_details|object|false|none|none|
|» » expiry_timestamp|integer|false|none|Timestamp for when the certificate expires.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the status of connected data planes

<a id="opIdgetDataPlaneStatus"></a>

> Code samples

```bash
curl http://localhost:8001/clustering/status \
  -H 'Accept: application/json'
```

`GET /clustering/status`

Retrieve a status report for all data planes connected to the control plane. It includes information like the config hash, hostname, IP address, and last seen timestamp. This endpoint is only accessible when Kong Gateway is running in hybrid mode.


> Example responses

> 200 Response

```json
{
  "property1": {
    "config_hash": "string",
    "hostname": "string",
    "ip": "string",
    "last_seen": 0
  },
  "property2": {
    "config_hash": "string",
    "hostname": "string",
    "ip": "string",
    "last_seen": 0
  }
}
```

> 400 Response

```json
{
  "message": "This endpoint is only available when Kong is running as a control plane for the cluster."
}
```

<h3 id="retrieve-the-status-of-connected-data-planes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The status of all connected data planes.|Inline|
|400|Bad Request|Kong is not running as a control plane.|Inline|

<h3 id="retrieve-the-status-of-connected-data-planes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
|» config_hash|string|false|none|Hash of the configuration running on the data plane.|
|» hostname|string|false|none|Hostname of the data plane.|
|» ip|string|false|none|The IP address of the data plane.|
|» last_seen|integer|false|none|Unix timestamp of the last interaction between the data plane and control plane.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Deprecation|string||Indicates that the endpoint may be deprecated in the future.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-cache">cache</h1>

Querying and managing cache entries.


## Get cache value by key

<a id="opIdgetCacheByKey"></a>

> Code samples

```bash
curl http://localhost:8001/cache/string \
  -H 'Accept: application/json'
```

`GET /cache/{key}`

Retrieve the cached value for a specific key. This endpoint probes both `kong.cache` and `kong.core_cache`.  If the key exists, it returns the associated value and TTL. If not found, it returns a 404.


<h3 id="get-cache-value-by-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The cache key to retrieve.|

> Example responses

> 200 Response

```json
{
  "ttl": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "Not found"
}
```

<h3 id="get-cache-value-by-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cached value found.|Inline|
|404|Not Found|Cache key not found.|Inline|

<h3 id="get-cache-value-by-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|integer|false|none|Time-to-live (TTL) of the cached entry.|
|message|string|false|none|Cached value or a message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Invalidate cache by key

<a id="opIddeleteCacheByKey"></a>

> Code samples

```bash
curl http://localhost:8001/cache/string \
  -X DELETE
```

`DELETE /cache/{key}`

Invalidate the cache for a specific key in both `kong.cache` and `kong.core_cache`.


<h3 id="invalidate-cache-by-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The cache key to invalidate.|

<h3 id="invalidate-cache-by-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cache invalidated successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Purge all cache entries

<a id="opIdpurgeAllCache"></a>

> Code samples

```bash
curl http://localhost:8001/cache \
  -X DELETE
```

`DELETE /cache`

Purge all cache entries in both `kong.cache` and `kong.core_cache`.


<h3 id="purge-all-cache-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|All cache entries purged successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-config">config</h1>

Apply and retrieve declarative configuration when using DB-less mode.


## Get Declarative Config

<a id="opIdget-config"></a>

> Code samples

```bash
curl http://localhost:8001/config \
  -H 'Accept: application/json'
```

`GET /config`

Get the current configuration. Note: This API is only available in DB-less mode.


> Example responses

> 200 Response

```json
{
  "config": "string"
}
```

<h3 id="get-declarative-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-declarative-config-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Apply Declarative Config

<a id="opIdpost-config"></a>

> Code samples

```bash
curl http://localhost:8001/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /config`

Apply a configuration from a declarative JSON or YAML file. Any existing configuration will be overwritten. Note: This API is only available in DB-less mode.


> Body parameter

```json
{}
```

<h3 id="apply-declarative-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 201 Response

```json
{}
```

<h3 id="apply-declarative-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-validation">Validation</h1>

## Validate Vault Schema

<a id="opIdpost-schemas-vaults-validate"></a>

> Code samples

```bash
curl http://localhost:8001/schemas/vaults/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "schemaData": "string"
  }'
```

`POST /schemas/vaults/{vault_name}`

Validates the given vault schema data against predefined validation rules.

> Body parameter

```json
{
  "schemaData": "string"
}
```

<h3 id="validate-vault-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vault_name|path|string|true|The vault schema to be returned|
|body|body|object|true|Payload containing the schema data to validate|
|» schemaData|body|string|false|JSON string containing the vault schema data|

> Example responses

> 200 Response

```json
{
  "validation": true
}
```

<h3 id="validate-vault-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Validation successful|Inline|
|400|Bad Request|Bad request due to invalid schema data|None|
|405|Method Not Allowed|Method Not Allowed|None|

<h3 id="validate-vault-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validation|boolean|false|none|Indicates if the schema is valid|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kong-admin-api-filter-chains">filter-chains</h1>

## List Filter Chains

<a id="opIdget-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains \
  -H 'Accept: application/json'
```

`GET /filter-chains`

List All Filter Chains


> Example responses

> 200 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-filter-chains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Filter Chain

<a id="opIdpost-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`POST /filter-chains`

Create Filter Chain
Note: This API is not available in DB-less mode.


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="add-filter-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="add-filter-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Filter Chains Associated to a Specific Route

<a id="opIdget-routes-route_id_or_name-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/filter-chains \
  -H 'Accept: application/json'
```

`GET /routes/{route_id_or_name}/filter-chains`

List Filter Chains Associated to a Specific Route


<h3 id="list-filter-chains-associated-to-a-specific-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

<h3 id="list-filter-chains-associated-to-a-specific-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Filter-chains](#schemafilter-chains)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Filter Chain

<a id="opIdget-routes-route_name_or_id-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/filter-chains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`POST /routes/{route_id_or_name}/filter-chains`

Create Filter Chain Associated to a Specific Route


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="add-filter-chain-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="add-filter-chain-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Filter Chain Associated to a Specific Route

<a id="opIdpatch-routes-route_id_or_name-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/filter-chains \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`PATCH /routes/{route_id_or_name}/filter-chains`

Update Filter Chain Associated to a Specific Route


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="update-filter-chain-associated-to-a-specific-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-filter-chain-associated-to-a-specific-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Filter Chains Associated to a Specific Service

<a id="opIdget-service_id_or_name-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/filter-chains \
  -H 'Accept: application/json'
```

`GET /services/{service_id_or_name}/filter-chains`

List Filter Chains Associated to a Specific Service


<h3 id="list-filter-chains-associated-to-a-specific-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|

> Example responses

> 200 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-filter-chains-associated-to-a-specific-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Filter Chain Associated to a Specific Service

<a id="opIdget-services-service_id_or_name-filter-chains"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/filter-chains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`POST /services/{service_id_or_name}/filter-chains`

Add filter chain Associated to a Specific Service


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="create-filter-chain-associated-to-a-specific-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-filter-chain-associated-to-a-specific-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Filter Chain

<a id="opIdget-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains/string \
  -H 'Accept: application/json'
```

`GET /filter-chains/{filter_chain_id}`

Retrieve Filter Chain
'401':
  $ref: '#/components/responses/HTTP401Error'


<h3 id="retrieve-filter-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

<h3 id="retrieve-filter-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Filter-chains](#schemafilter-chains)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Or Create Filter Chain

<a id="opIdput-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`PUT /filter-chains/{filter_chain_id}`

Inserts (or replaces) the filter chain under the requested resource with the definition specified in the body. The filter chain is identified via the name or ID attribute.

When the name or ID attribute has the structure of a UUID, the filter chain being inserted or replaced is identified by its ID. Otherwise, it is identified by its name.

When creating a new filter chain without specifying an ID (neither in the URL nor in the body), the ID will be auto-generated.

Notice that specifying a name in the URL and a different one in the request body is not allowed.

> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="update-or-create-filter-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-or-create-filter-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Filter Chain

<a id="opIddelete-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /filter-chains/{filter_chain_id}`

Delete filter chain.


<h3 id="delete-filter-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-filter-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Filter Chain

<a id="opIdpatch-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/filter-chains/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`PATCH /filter-chains/{filter_chain_id}`

Update Filter Chain
Note: This API is not available in DB-less mode.


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="update-filter-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 201 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="update-filter-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Filter Chains Associated to a Specific Route

<a id="opIdget-routes-route_id_or_name-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/filter-chains/string \
  -H 'Accept: application/json'
```

`GET /routes/{route_id_or_name}/filter-chains/{filter_chain_id}`

Retrieve filter chain associated to a specific route.


<h3 id="list-filter-chains-associated-to-a-specific-route-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="list-filter-chains-associated-to-a-specific-route-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Filter-chains](#schemafilter-chains)|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Or Update Filter Chain Associated to a Specific Route

<a id="opIdput-routes-route_id_or_name-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/filter-chains/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
    "name": "my-filter-chain",
    "enabled": true,
    "route": null,
    "service": "20487393-41ed-47f6-93a8-3407cade2002",
    "filters": [
      {
        "name": "go-rate-limiting",
        "enabled": true,
        "config": "{ \"minute\": 30 }"
      },
      {
        "name": "rust-response-transformer",
        "enabled": true,
        "config": "{ \"remove_header\": \"X-Example\" }"
      }
    ],
    "tags": [
      "my-tag"
    ]
  }'
```

`PUT /routes/{route_id_or_name}/filter-chains/{filter_chain_id}`

Create or update filter chain associated to a specific route.


> Body parameter

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

<h3 id="create-or-update-filter-chain-associated-to-a-specific-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|
|body|body|object|false|Filter Chain request body|
|» enabled|body|boolean|false|Whether the filter chain is applied.|
|» filters|body|[object]|false|An array of filter definitions that will be executed in order.|
|» » name|body|string|false|The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.|
|» » config|body|string|false|The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.|
|» » enabled|body|boolean|false|Whether the filter is to be applied.|
|» id|body|string|false|none|
|» name|body|string|false|The name of the filter chain.|
|» route|body|object|false|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» service|body|object|false|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|» » id|body|string|false|none|
|» tags|body|[string]|false|An optional set of strings associated with the Filter Chain for grouping and filtering.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="create-or-update-filter-chain-associated-to-a-specific-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Filter Chain Associated to a Specific Route

<a id="opIdget-routes-route_id_or_name-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/routes/my-route/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /routes/{route_id_or_name}/{filter_chain_id}`

Delete filter chain associated to a specific route.


<h3 id="delete-filter-chain-associated-to-a-specific-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|
|route_id_or_name|path|string|true|The unique identifier or the name of the route to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-filter-chain-associated-to-a-specific-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Filter Chain Associated to a Specific Service

<a id="opIddelete-services-service_id_or_name-filter-chains-filter_chain_id"></a>

> Code samples

```bash
curl http://localhost:8001/services/test-service/filter-chains/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /services/{service_id_or_name}/filter-chains/{filter_chain_id}`

Delete filter chain associated to a specific service.


<h3 id="delete-filter-chain-associated-to-a-specific-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id_or_name|path|string|true|ID **or** name of the service to lookup|
|filter_chain_id|path|string|true|The unique identifier of the filter chain to retrieve.|

> Example responses

> 401 Response

```json
{
  "message": "Duplicate API key found",
  "status": 401
}
```

<h3 id="delete-filter-chain-associated-to-a-specific-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|[UnauthorizedError](#schemaunauthorizederror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_UnauthorizedError">UnauthorizedError</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizederror"></a>
<a id="schema_UnauthorizedError"></a>
<a id="tocSunauthorizederror"></a>
<a id="tocsunauthorizederror"></a>

```json
{
  "status": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_CA-Certificate">CA-Certificate</h2>
<!-- backwards compatibility -->
<a id="schemaca-certificate"></a>
<a id="schema_CA-Certificate"></a>
<a id="tocSca-certificate"></a>
<a id="tocsca-certificate"></a>

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f260"
}
```

A CA certificate object represents a trusted CA. These objects are used by Kong to verify the validity of a client or server certificate. CA Certificates can be both tagged and filtered by tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert|string|false|none|PEM-encoded public certificate of the CA.|
|cert_digest|string|false|none|SHA256 hex digest of the public certificate.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|id|string(uuid)|false|none|none|
|tags|[string]|false|none|An optional set of strings associated with the Certificate for grouping and filtering.|

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "cert": "-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----",
  "id": "b2f34145-0343-41a4-9602-4c69dec2f269",
  "key": "-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----"
}
```

A certificate object represents a public certificate. These fields are _referenceable_, and can be stored as [secrets](http://docs.konqhq.com/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert|string|false|none|PEM-encoded public certificate chain of the SSL key This field is referenceable and can be stored in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).|
|cert_alt|string|false|none|PEM-encoded public certificate chain of the alternate SSL key pair. This should only be set if you have both RSA and ECDSA types of certificate available and would like Kong to prefer serving using ECDSA certs.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|id|string(uuid)|false|none|The UUID representation of the certificate object.|
|key|string|false|none|PEM-encoded private key of the SSL key pair. This field is _referenceable_, which means it can be securely stored as a [secret](/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).|
|key_alt|string|false|none|PEM-encoded private key of the alternate SSL key pair. This should only be set if you have both RSA and ECDSA types of certificate available and would like Kong to prefer serving using ECDSA certs when client advertises support for it. This field is _referenceable_, which means it can be securely stored as a [secret](/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).|
|tags|[string]|false|none|An optional set of strings associated with the Certificate for grouping and filtering.|
|snis|[string(host)]|false|none|A list of SNIs associated with the certificate.<br>|

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "custom_id": "4200",
  "id": "8a388226-80e8-4027-a486-25e4f7db5d21",
  "tags": [
    "silver-tier"
  ],
  "username": "bob-the-builder"
}
```

The Consumer object represents a consumer - or a user - of a service. You can either rely on Kong as the primary datastore, or you can map the consumer list with your database to keep consistency between Kong and your existing primary datastore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|custom_id|string|false|none|Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or `username` with the request.|
|id|string|false|none|none|
|tags|[string]|false|none|An optional set of strings associated with the Consumer for grouping and filtering.|
|username|string|false|none|The unique username of the Consumer. You must send either this field or `custom_id` with the request.|

<h2 id="tocS_Filter-chain">Filter-chain</h2>
<!-- backwards compatibility -->
<a id="schemafilter-chain"></a>
<a id="schema_Filter-chain"></a>
<a id="tocSfilter-chain"></a>
<a id="tocsfilter-chain"></a>

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-filter-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \"minute\": 30 }"
    },
    {
      "name": "rust-response-transformer",
      "enabled": true,
      "config": "{ \"remove_header\": \"X-Example\" }"
    }
  ],
  "tags": [
    "my-tag"
  ]
}
```

A Filter Chain entity represents a list of one or more WebAssembly filters that will be executed during the HTTP request/response lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|enabled|boolean|false|none|Whether the filter chain is applied.|
|filters|[object]|false|none|An array of filter definitions that will be executed in order.|
|id|string|false|none|none|
|name|string|false|none|The name of the filter chain.|
|route|object|false|none|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|service|object|false|none|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.|
|tags|[string]|false|none|An optional set of strings associated with the Filter Chain for grouping and filtering.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "id": "d958f66b-8e99-44d2-b0b4-edd5bbf24658",
  "jwk": "{\"alg\":\"RSA\",  \"kid\": \"42\",  ...}",
  "kid": "42",
  "name": "a-key",
  "pem": {
    "private_key": "-----BEGIN",
    "public_key": "-----BEGIN"
  },
  "set": {
    "id": "b86b331c-dcd0-4b3e-97ce-47c5a9543031"
  }
}
```

A Key object holds a representation of asymmetric keys in various formats. When Kong or a Kong plugin requires a specific public or private key to perform certain operations, it can use this entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|id|string|false|none|The unique identifier or the prefix of the Vault to delete.|
|jwk|string|false|none|A JSON Web Key represented as a string.|
|kid|string|false|none|A unique identifier for a key.|
|name|string|false|none|The name to associate with the given keys.|
|pem|object|false|none|A keypair in PEM format.|
|set|object|false|none|The id (an UUID) of the key-set with which to associate the key.|
|tags|[string]|false|none|An optional set of strings associated with the Key for grouping and filtering.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_Key-set">Key-set</h2>
<!-- backwards compatibility -->
<a id="schemakey-set"></a>
<a id="schema_Key-set"></a>
<a id="tocSkey-set"></a>
<a id="tocskey-set"></a>

```json
{
  "created_at": 0,
  "id": "24D0DBDA-671C-11ED-BA0B-EF1DCCD3725F",
  "name": "\"example-key-set\"",
  "tags": [
    "[\"google-keys\", \"mozilla-keys\"]"
  ],
  "updated_at": 0
}
```

A Key Set object holds a collection of asymmetric key objects. This entity allows to logically group keys by their purpose.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|id|string|false|none|The unique identifier or the name of the Key to delete.|
|name|string|false|none|The name to associate with the given key-set.|
|tags|[string]|false|none|An optional set of strings associated with the Key for grouping and filtering|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "config": {
    "anonymous": null,
    "hide_credentials": false,
    "key_in_body": false,
    "key_in_header": true,
    "key_in_query": true,
    "key_names": [
      "apikey"
    ],
    "run_on_preflight": true
  },
  "enabled": true,
  "id": "3fd1eea1-885a-4011-b986-289943ff8177",
  "name": "key-auth",
  "protocols": [
    "grpc",
    "grpcs",
    "http",
    "https"
  ]
}
```

A Plugin entity represents a plugin configuration that will be executed during the HTTP request/response lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The configuration properties for the Plugin which can be found on the plugins documentation page in the [Kong Hub](https://docs.konghq.com/hub/).|
|consumer|object|false|none|If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|enabled|boolean|false|none|Whether the plugin is applied.|
|id|string|false|none|none|
|instance_name|string|false|none|none|
|name|string|false|none|The name of the Plugin thats going to be added. Currently, the Plugin must be installed in every Kong instance separately.|
|protocols|[string]|false|none|A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support `"tcp"` and `"tls"`.|
|route|object|false|none|If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.|
|service|object|false|none|If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service. Leave unset for the plugin to activate regardless of the service being matched.|
|tags|[string]|false|none|An optional set of strings associated with the Plugin for grouping and filtering.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "hosts": [
    "foo.example.com",
    "bar.example.com"
  ],
  "id": "56c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "example-route",
  "paths": [
    "/v1",
    "/v2"
  ],
  "service": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  }
}
```

Route entities define rules to match client requests. Every request matching a given route will be proxied to its associated service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|destinations|[object]|false|none|A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".|
|headers|object|false|none|One or more lists of values indexed by header name that will cause this route to match if present in the request. The `Host` header cannot be used with this hosts should be specified using the `hosts` attribute. When `headers` contains only one value and that value starts with the special prefix `~*`, the value is interpreted as a regular expression.|
|hosts|[string]|false|none|A list of domain names that match this route. Note that the hosts value is case sensitive.|
|https_redirect_status_code|integer|false|none|The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`. `Location` header is injected by Kong if the field is set to 301, 302, 307 or 308. This config applies only if the route is configured to only accept the `https` protocol.|
|id|string|false|none|none|
|methods|[string]|false|none|A list of HTTP methods that match this route.|
|name|string|false|none|The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".|
|path_handling|string|false|none|Controls how the service path, route path and requested path are combined when sending a request to the upstream. See above for a detailed description of each behavior.|
|paths|[string]|false|none|A list of paths that match this route.|
|preserve_host|boolean|false|none|When matching a route via one of the `hosts` domain names, use the request `Host` header in the upstream request headers. If set to `false`, the upstream `Host` header will be that of the services `host`.|
|protocols|[string]|false|none|An array of the protocols this route should allow. See the [route Object](#route-object) section for a list of accepted protocols. When set to only `"https"`, HTTP requests are answered with an upgrade error. When set to only `"http"`, HTTPS requests are answered with an error.|
|regex_priority|integer|false|none|A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same `regex_priority`, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).|
|request_buffering|boolean|false|none|Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding.|
|response_buffering|boolean|false|none|Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding.|
|service|object|false|none|The service this route is associated to. This is where the route proxies traffic to.|
|expression|string|false|none|The route expression used for advanced routing scenarios. This field is used to evaluate route matches based on complex criteria beyond the standard routing fields.|
|priority|integer|false|none|A number used to specify the matching order for expression routes. The higher the `priority`, the sooner a route will be evaluated. This field is ignored unless `expression` field is set. The value must be between 0 and 2^46 - 1.|
|snis|[string]|false|none|A list of SNIs that match this route when using stream routing.|
|sources|[object]|false|none|A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".|
|strip_path|boolean|false|none|When matching a route via one of the `paths`, strip the matching prefix from the upstream request URL.|
|tags|[string]|false|none|An optional set of strings associated with the route for grouping and filtering.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_SNI">SNI</h2>
<!-- backwards compatibility -->
<a id="schemasni"></a>
<a id="schema_SNI"></a>
<a id="tocSsni"></a>
<a id="tocssni"></a>

```json
{
  "certificate": {
    "id": "bd380f99-659d-415e-b0e7-72ea05df3218"
  },
  "id": "36c4566c-14cc-4132-9011-4139fcbbe50a",
  "name": "some.example.org"
}
```

An SNI object represents a many-to-one mapping of hostnames to a certificate. That is, a certificate object can have many hostnames associated with it; when Kong receives an SSL request, it uses the SNI field in the Client Hello to lookup the certificate object based on the SNI associated with the certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|object|false|none|The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|id|string|false|none|none|
|name|string|false|none|The SNI name to associate with the given certificate.|
|tags|[string]|false|none|An optional set of strings associated with the SNIs for grouping and filtering.|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "host": "example.internal",
  "id": "49fd316e-c457-481c-9fc7-8079153e4f3c",
  "name": "example-service",
  "path": "/",
  "port": 80,
  "protocol": "http"
}
```

service entities are abstractions of upstream services. The main attribute of a service is its URL which can be set as a single string or by specifying the `protocol`, `host`, `port` and `path` individually.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ca_certificates|[string]|false|none|Array of `CA Certificate` object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to `null` when Nginx default is respected. If default CA list in Nginx are not specified and TLS verification is enabled, then handshake with upstream server will always fail (because no CA are trusted).|
|client_certificate|object|false|none|Certificate to be used as client certificate while TLS handshaking to the upstream server.|
|connect_timeout|integer|false|none|The timeout in milliseconds for establishing a connection to the upstream server.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|enabled|boolean|false|none|Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404).|
|host|string|false|none|The host of the upstream server. Note that the host value is case sensitive.|
|id|string|false|none|none|
|name|string|false|none|The service name.|
|path|string|false|none|The path to be used in requests to the upstream server.|
|port|integer|false|none|The upstream server port.|
|protocol|string|false|none|The protocol used to communicate with the upstream.|
|read_timeout|integer|false|none|The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server.|
|retries|integer|false|none|The number of retries to execute upon failure to proxy.|
|tags|[string]|false|none|An optional set of strings associated with the service for grouping and filtering.|
|tls_verify|boolean|false|none|Whether to enable verification of upstream server TLS certificate. If set to `null`, then the Nginx default is respected.|
|tls_verify_depth|integer|false|none|Maximum depth of chain while verifying Upstream server's TLS certificate. If set to `null`, then the Nginx default is respected.'|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|
|url|string|false|none|Helper field to set `protocol`, `host`, `port` and `path` using a URL. This field is write-only and is not returned in responses.|
|write_timeout|integer|false|none|The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server.|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "id": "089292a7-ba3d-4d88-acf0-97b4b2e2621a",
  "target": "203.0.113.42",
  "upstream": {
    "id": "5f1d7e76-2fed-4806-a6af-869984f025cb"
  },
  "weight": 100
}
```

A target is an ip address/hostname with a port that identifies an instance of a backend service. Every upstream can have many targets, and the targets can be dynamically added, modified, or deleted. Changes take effect on the fly. To disable a target, post a new one with `weight=0`; alternatively, use the `DELETE` convenience method to accomplish the same. The current target object definition is the one with the latest `created_at`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|number|false|none|Unix epoch when the resource was created.|
|id|string|false|none|The unique identifier or the name of the upstream for which to update the target.|
|tags|[string]|false|none|An optional set of strings associated with the Target for grouping and filtering.|
|target|string|false|none|The target address (ip or hostname) and port. If the hostname resolves to an SRV record, the `port` value will be overridden by the value from the DNS record.|
|upstream|object|false|none|The unique identifier or the name of the upstream for which to update the target.|
|weight|integer|false|none|The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.|

<h2 id="tocS_Upstream">Upstream</h2>
<!-- backwards compatibility -->
<a id="schemaupstream"></a>
<a id="schema_Upstream"></a>
<a id="tocSupstream"></a>
<a id="tocsupstream"></a>

```json
{
  "algorithm": "round-robin",
  "hash_fallback": "none",
  "hash_on": "none",
  "hash_on_cookie_path": "/",
  "healthchecks": {
    "active": {
      "concurrency": 10,
      "healthy": {
        "http_statuses": [
          200,
          302
        ],
        "interval": 0,
        "successes": 0
      },
      "http_path": "/",
      "https_verify_certificate": true,
      "timeout": 1,
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          404,
          500,
          501,
          502,
          503,
          504,
          505
        ],
        "interval": 0,
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "passive": {
      "healthy": {
        "http_statuses": [
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          226,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ],
        "successes": 0
      },
      "type": "http",
      "unhealthy": {
        "http_failures": 0,
        "http_statuses": [
          429,
          500,
          503
        ],
        "tcp_failures": 0,
        "timeouts": 0
      }
    },
    "threshold": 0
  },
  "id": "6eed5e9c-5398-4026-9a4c-d48f18a2431e",
  "name": "api.example.internal",
  "slots": 10000
}
```

The upstream object represents a virtual hostname and can be used to loadbalance incoming requests over multiple services (targets). So for example an upstream named `service.v1.xyz` for a service object whose `host` is `service.v1.xyz`. Requests for this service would be proxied to the targets defined within the upstream. An upstream also includes a health check, which is able to enable and disable targets based on their ability or inability to serve requests. The configuration for the health checker is stored in the upstream object, and applies to all of its targets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Which load balancing algorithm to use.|
|client_certificate|object|false|none|If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|hash_fallback|string|false|none|What to use as hashing input if the primary `hash_on` does not return a hash (eg. header is missing, or no Consumer identified). Not available if `hash_on` is set to `cookie`.|
|hash_fallback_header|string|false|none|The header name to take the value from as hash input. Only required when `hash_fallback` is set to `header`.|
|hash_fallback_query_arg|string|false|none|The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.|
|hash_fallback_uri_capture|string|false|none|The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.|
|hash_on|string|false|none|What to use as hashing input. Using `none` results in a weighted-round-robin scheme with no hashing.|
|hash_on_cookie|string|false|none|The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.|
|hash_on_cookie_path|string|false|none|The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.|
|hash_on_header|string|false|none|The header name to take the value from as hash input. Only required when `hash_on` is set to `header`.|
|hash_on_query_arg|string|false|none|The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.|
|hash_on_uri_capture|string|false|none|The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.|
|healthchecks|object|false|none|none|
|host_header|string|false|none|The hostname to be used as `Host` header when proxying requests through Kong.|
|id|string|false|none|none|
|name|string|false|none|This is a hostname, which must be equal to the `host` of a service.|
|slots|integer|false|none|The number of slots in the load balancer algorithm. If `algorithm` is set to `round-robin`, this setting determines the maximum number of slots. If `algorithm` is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range `10`-`65536`.|
|tags|[string]|false|none|An optional set of strings associated with the Upstream for grouping and filtering.|
|use_srv_name|boolean|false|none|If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream `Host`.|

<h2 id="tocS_Vault">Vault</h2>
<!-- backwards compatibility -->
<a id="schemavault"></a>
<a id="schema_Vault"></a>
<a id="tocSvault"></a>
<a id="tocsvault"></a>

```json
{
  "config": {
    "prefix": "vaults.config.resurrect_ttl"
  },
  "description": "environment variable based vault",
  "id": "2747d1e5-8246-4f65-a939-b392f1ee17f8",
  "name": "env",
  "tags": [
    "foo",
    "bar"
  ]
}
```

Vault entities are used to configure different Vault connectors. Examples of Vaults are Environment Variables, HashiCorp Vault and AWS Secrets Manager. Configuring a Vault allows referencing the secrets with other entities. For example a certificate entity can store a reference to a certificate and key, stored in a vault, instead of storing the certificate and key within the entity. This allows a proper separation of secrets and configuration and prevents secret sprawl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|The configuration properties for the Vault which can be found on the [vaults' documentation page](https://docs.konghq.com/gateway/latest/kong-enterprise/secrets-management/advanced-usage/).|
|created_at|integer|false|none|Unix epoch when the resource was created.|
|description|string|false|none|The description of the Vault entity.|
|id|string|false|none|none|
|name|string|false|none|The name of the Vault thats going to be added. Currently, the Vault implementation must be installed in every Kong instance.|
|prefix|string|false|none|The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.|
|tags|[string]|false|none|An optional set of strings associated with the Vault for grouping and filtering.|
|updated_at|integer|false|none|Unix epoch when the resource was last updated.|

<h2 id="tocS_Filter-chains">Filter-chains</h2>
<!-- backwards compatibility -->
<a id="schemafilter-chains"></a>
<a id="schema_Filter-chains"></a>
<a id="tocSfilter-chains"></a>
<a id="tocsfilter-chains"></a>

```json
{
  "id": "ce44eef5-41ed-47f6-baab-f725cecf98c7",
  "name": "my-chain",
  "created_at": 1422386534,
  "updated_at": 1422386534,
  "enabled": true,
  "route": null,
  "service": "20487393-41ed-47f6-93a8-3407cade2002",
  "filters": [
    {
      "name": "go-rate-limiting",
      "enabled": true,
      "config": "{ \\\"minute\\\": 30 }"
    }
  ],
  "tags": [
    "string"
  ]
}
```

A filter chain is the database entity representing one or more WebAssembly filters executed for each request to a particular service or route, each one with its configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The unique identifier or the name attribute of the route that should be associated to the newly created filter chain.|
|name|string|false|none|The name of the filter chain.<br>|
|created_at|integer|false|none|none|
|updated_at|integer|false|none|none|
|enabled|boolean|false|none|Whether the filter chain is applied. Default: true.<br>|
|route|object \| null|false|none|The route to which this chain is applied. A filter chain must be applied to either a single route or a single service. Default `null`. In form-encoded format, the notation is `route.id=<route id>` or `route.name=<route name>`. In JSON format, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.|
|service|string|false|none|The service to which this chain is applied. A filter chain must be applied to either a single route or a single service. Default `null`. In form-encoded format, the notation is `service.id=<service id>` or `service.name=<service name>`. In JSON format, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.|
|filters|[object]|false|none|An array of filter definitions. Each filter is an object containing a mandatory name, an optional config, and a boolean enabled setting.|
|tags|[string]|false|none|none|

<h2 id="tocS_pagination-offset-response">pagination-offset-response</h2>
<!-- backwards compatibility -->
<a id="schemapagination-offset-response"></a>
<a id="schema_pagination-offset-response"></a>
<a id="tocSpagination-offset-response"></a>
<a id="tocspagination-offset-response"></a>

```json
"string"
```

Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page
