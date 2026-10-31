<h1 id="netbox-api">NetBox API v2.8</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to access NetBox

Base URLs:

* <a href="https://netboxdemo.com/api">https://netboxdemo.com/api</a>

<a href="https://github.com/netbox-community/netbox">Terms of service</a>
License: Apache v2 License

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header.

<h1 id="netbox-api-circuits">circuits</h1>

## circuits_circuit-terminations_list

<a id="opIdcircuits_circuit-terminations_list"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuit-terminations/`

Call to super to allow for caching

<h3 id="circuitscircuit-terminationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term_side|query|string|false|none|
|port_speed|query|string|false|none|
|upstream_speed|query|string|false|none|
|xconnect_id|query|string|false|none|
|q|query|string|false|none|
|circuit_id|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|term_side__n|query|string|false|none|
|port_speed__n|query|string|false|none|
|port_speed__lte|query|string|false|none|
|port_speed__lt|query|string|false|none|
|port_speed__gte|query|string|false|none|
|port_speed__gt|query|string|false|none|
|upstream_speed__n|query|string|false|none|
|upstream_speed__lte|query|string|false|none|
|upstream_speed__lt|query|string|false|none|
|upstream_speed__gte|query|string|false|none|
|upstream_speed__gt|query|string|false|none|
|xconnect_id__n|query|string|false|none|
|xconnect_id__ic|query|string|false|none|
|xconnect_id__nic|query|string|false|none|
|xconnect_id__iew|query|string|false|none|
|xconnect_id__niew|query|string|false|none|
|xconnect_id__isw|query|string|false|none|
|xconnect_id__nisw|query|string|false|none|
|xconnect_id__ie|query|string|false|none|
|xconnect_id__nie|query|string|false|none|
|circuit_id__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "circuit": {
        "cid": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "id": 0,
      "port_speed": 0,
      "pp_info": "string",
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "term_side": "A",
      "upstream_speed": 0,
      "xconnect_id": "string"
    }
  ]
}
```

<h3 id="circuitscircuit-terminationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="circuitscircuit-terminationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CircuitTermination](#schemacircuittermination)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-terminations_create

<a id="opIdcircuits_circuit-terminations_create"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "circuit": 0,
    "connection_status": false,
    "description": "string",
    "port_speed": 0,
    "pp_info": "string",
    "site": 0,
    "term_side": "A",
    "upstream_speed": 0,
    "xconnect_id": "string"
  }'
```

`POST /circuits/circuit-terminations/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "circuit": 0,
  "connection_status": false,
  "description": "string",
  "port_speed": 0,
  "pp_info": "string",
  "site": 0,
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableCircuitTermination](#schemawritablecircuittermination)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» circuit|body|integer|true|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» port_speed|body|integer|true|none|
|» pp_info|body|string|false|none|
|» site|body|integer|true|none|
|» term_side|body|string|true|none|
|» upstream_speed|body|integer \| null|false|Upstream speed, if different from port speed|
|» xconnect_id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» term_side|A|
|» term_side|Z|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": {
    "cid": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CircuitTermination](#schemacircuittermination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-terminations_read

<a id="opIdcircuits_circuit-terminations_read"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuit-terminations/{id}/`

Call to super to allow for caching

<h3 id="circuitscircuit-terminationsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit termination.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": {
    "cid": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitTermination](#schemacircuittermination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-terminations_update

<a id="opIdcircuits_circuit-terminations_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "circuit": 0,
    "connection_status": false,
    "description": "string",
    "port_speed": 0,
    "pp_info": "string",
    "site": 0,
    "term_side": "A",
    "upstream_speed": 0,
    "xconnect_id": "string"
  }'
```

`PUT /circuits/circuit-terminations/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "circuit": 0,
  "connection_status": false,
  "description": "string",
  "port_speed": 0,
  "pp_info": "string",
  "site": 0,
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit termination.|
|body|body|[WritableCircuitTermination](#schemawritablecircuittermination)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» circuit|body|integer|true|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» port_speed|body|integer|true|none|
|» pp_info|body|string|false|none|
|» site|body|integer|true|none|
|» term_side|body|string|true|none|
|» upstream_speed|body|integer \| null|false|Upstream speed, if different from port speed|
|» xconnect_id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» term_side|A|
|» term_side|Z|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": {
    "cid": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitTermination](#schemacircuittermination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-terminations_delete

<a id="opIdcircuits_circuit-terminations_delete"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /circuits/circuit-terminations/{id}/`

<h3 id="circuitscircuit-terminationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit termination.|

<h3 id="circuitscircuit-terminationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-terminations_partial_update

<a id="opIdcircuits_circuit-terminations_partial_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-terminations/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "circuit": 0,
    "connection_status": false,
    "description": "string",
    "port_speed": 0,
    "pp_info": "string",
    "site": 0,
    "term_side": "A",
    "upstream_speed": 0,
    "xconnect_id": "string"
  }'
```

`PATCH /circuits/circuit-terminations/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "circuit": 0,
  "connection_status": false,
  "description": "string",
  "port_speed": 0,
  "pp_info": "string",
  "site": 0,
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit termination.|
|body|body|[WritableCircuitTermination](#schemawritablecircuittermination)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» circuit|body|integer|true|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» port_speed|body|integer|true|none|
|» pp_info|body|string|false|none|
|» site|body|integer|true|none|
|» term_side|body|string|true|none|
|» upstream_speed|body|integer \| null|false|Upstream speed, if different from port speed|
|» xconnect_id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» term_side|A|
|» term_side|Z|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": {
    "cid": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

<h3 id="circuitscircuit-terminationspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitTermination](#schemacircuittermination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_list

<a id="opIdcircuits_circuit-types_list"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuit-types/`

Call to super to allow for caching

<h3 id="circuitscircuit-typeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "circuit_count": 0,
      "description": "string",
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="circuitscircuit-typeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="circuitscircuit-typeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CircuitType](#schemacircuittype)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_create

<a id="opIdcircuits_circuit-types_create"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /circuits/circuit-types/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CircuitType](#schemacircuittype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "circuit_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CircuitType](#schemacircuittype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_read

<a id="opIdcircuits_circuit-types_read"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuit-types/{id}/`

Call to super to allow for caching

<h3 id="circuitscircuit-typesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit type.|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitType](#schemacircuittype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_update

<a id="opIdcircuits_circuit-types_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /circuits/circuit-types/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit type.|
|body|body|[CircuitType](#schemacircuittype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitType](#schemacircuittype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_delete

<a id="opIdcircuits_circuit-types_delete"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /circuits/circuit-types/{id}/`

<h3 id="circuitscircuit-typesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit type.|

<h3 id="circuitscircuit-typesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuit-types_partial_update

<a id="opIdcircuits_circuit-types_partial_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuit-types/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /circuits/circuit-types/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit type.|
|body|body|[CircuitType](#schemacircuittype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="circuitscircuit-typespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CircuitType](#schemacircuittype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_list

<a id="opIdcircuits_circuits_list"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuits/`

Call to super to allow for caching

<h3 id="circuitscircuitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|cid|query|string|false|none|
|install_date|query|string|false|none|
|commit_rate|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|provider_id|query|string|false|none|
|provider|query|string|false|none|
|type_id|query|string|false|none|
|type|query|string|false|none|
|status|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|cid__n|query|string|false|none|
|cid__ic|query|string|false|none|
|cid__nic|query|string|false|none|
|cid__iew|query|string|false|none|
|cid__niew|query|string|false|none|
|cid__isw|query|string|false|none|
|cid__nisw|query|string|false|none|
|cid__ie|query|string|false|none|
|cid__nie|query|string|false|none|
|install_date__n|query|string|false|none|
|install_date__lte|query|string|false|none|
|install_date__lt|query|string|false|none|
|install_date__gte|query|string|false|none|
|install_date__gt|query|string|false|none|
|commit_rate__n|query|string|false|none|
|commit_rate__lte|query|string|false|none|
|commit_rate__lt|query|string|false|none|
|commit_rate__gte|query|string|false|none|
|commit_rate__gt|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|provider_id__n|query|string|false|none|
|provider__n|query|string|false|none|
|type_id__n|query|string|false|none|
|type__n|query|string|false|none|
|status__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cid": "string",
      "comments": "string",
      "commit_rate": 0,
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "id": 0,
      "install_date": "1970-01-01",
      "last_updated": "1970-01-01T00:00:00Z",
      "provider": {
        "circuit_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Planned",
        "value": "planned"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "termination_a": {
        "connected_endpoint": {
          "cable": 0,
          "connection_status": {
            "label": "Not Connected",
            "value": false
          },
          "device": {
            "display_name": "string",
            "id": 0,
            "name": "string",
            "url": "http://example.com"
          },
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "port_speed": 0,
        "site": {
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "upstream_speed": 0,
        "url": "http://example.com",
        "xconnect_id": "string"
      },
      "termination_z": {
        "connected_endpoint": {
          "cable": 0,
          "connection_status": {
            "label": "Not Connected",
            "value": false
          },
          "device": {
            "display_name": "string",
            "id": 0,
            "name": "string",
            "url": "http://example.com"
          },
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "port_speed": 0,
        "site": {
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "upstream_speed": 0,
        "url": "http://example.com",
        "xconnect_id": "string"
      },
      "type": {
        "circuit_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="circuitscircuitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="circuitscircuitslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Circuit](#schemacircuit)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_create

<a id="opIdcircuits_circuits_create"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cid": "string",
    "comments": "string",
    "commit_rate": 0,
    "custom_fields": {},
    "description": "string",
    "install_date": "1970-01-01",
    "provider": 0,
    "status": "planned",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`POST /circuits/circuits/`

> Body parameter

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "custom_fields": {},
  "description": "string",
  "install_date": "1970-01-01",
  "provider": 0,
  "status": "planned",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="circuitscircuitscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableCircuit](#schemawritablecircuit)|true|none|
|» cid|body|string|true|none|
|» comments|body|string|false|none|
|» commit_rate|body|integer \| null|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» install_date|body|string(date) \| null|false|none|
|» provider|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|planned|
|» status|provisioning|
|» status|active|
|» status|offline|
|» status|deprovisioning|
|» status|decommissioned|

> Example responses

> 201 Response

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Planned",
    "value": "planned"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "termination_a": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "termination_z": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "type": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="circuitscircuitscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Circuit](#schemacircuit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_read

<a id="opIdcircuits_circuits_read"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/circuits/{id}/`

Call to super to allow for caching

<h3 id="circuitscircuitsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit.|

> Example responses

> 200 Response

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Planned",
    "value": "planned"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "termination_a": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "termination_z": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "type": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="circuitscircuitsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Circuit](#schemacircuit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_update

<a id="opIdcircuits_circuits_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cid": "string",
    "comments": "string",
    "commit_rate": 0,
    "custom_fields": {},
    "description": "string",
    "install_date": "1970-01-01",
    "provider": 0,
    "status": "planned",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`PUT /circuits/circuits/{id}/`

> Body parameter

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "custom_fields": {},
  "description": "string",
  "install_date": "1970-01-01",
  "provider": 0,
  "status": "planned",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="circuitscircuitsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit.|
|body|body|[WritableCircuit](#schemawritablecircuit)|true|none|
|» cid|body|string|true|none|
|» comments|body|string|false|none|
|» commit_rate|body|integer \| null|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» install_date|body|string(date) \| null|false|none|
|» provider|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|planned|
|» status|provisioning|
|» status|active|
|» status|offline|
|» status|deprovisioning|
|» status|decommissioned|

> Example responses

> 200 Response

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Planned",
    "value": "planned"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "termination_a": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "termination_z": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "type": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="circuitscircuitsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Circuit](#schemacircuit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_delete

<a id="opIdcircuits_circuits_delete"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /circuits/circuits/{id}/`

<h3 id="circuitscircuitsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit.|

<h3 id="circuitscircuitsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_circuits_partial_update

<a id="opIdcircuits_circuits_partial_update"></a>

> Code samples

```bash
curl https://example.com/circuits/circuits/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cid": "string",
    "comments": "string",
    "commit_rate": 0,
    "custom_fields": {},
    "description": "string",
    "install_date": "1970-01-01",
    "provider": 0,
    "status": "planned",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`PATCH /circuits/circuits/{id}/`

> Body parameter

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "custom_fields": {},
  "description": "string",
  "install_date": "1970-01-01",
  "provider": 0,
  "status": "planned",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="circuitscircuitspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this circuit.|
|body|body|[WritableCircuit](#schemawritablecircuit)|true|none|
|» cid|body|string|true|none|
|» comments|body|string|false|none|
|» commit_rate|body|integer \| null|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» install_date|body|string(date) \| null|false|none|
|» provider|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|planned|
|» status|provisioning|
|» status|active|
|» status|offline|
|» status|deprovisioning|
|» status|decommissioned|

> Example responses

> 200 Response

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Planned",
    "value": "planned"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "termination_a": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "termination_z": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "type": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="circuitscircuitspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Circuit](#schemacircuit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_list

<a id="opIdcircuits_providers_list"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/providers/`

Call to super to allow for caching

<h3 id="circuitsproviderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|asn|query|string|false|none|
|account|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|asn__n|query|string|false|none|
|asn__lte|query|string|false|none|
|asn__lt|query|string|false|none|
|asn__gte|query|string|false|none|
|asn__gt|query|string|false|none|
|account__n|query|string|false|none|
|account__ic|query|string|false|none|
|account__nic|query|string|false|none|
|account__iew|query|string|false|none|
|account__niew|query|string|false|none|
|account__isw|query|string|false|none|
|account__nisw|query|string|false|none|
|account__ie|query|string|false|none|
|account__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "account": "string",
      "admin_contact": "string",
      "asn": 1,
      "circuit_count": 0,
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "noc_contact": "string",
      "portal_url": "http://example.com",
      "slug": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="circuitsproviderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="circuitsproviderslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Provider](#schemaprovider)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_create

<a id="opIdcircuits_providers_create"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "account": "string",
    "admin_contact": "string",
    "asn": 1,
    "comments": "string",
    "custom_fields": {},
    "name": "string",
    "noc_contact": "string",
    "portal_url": "http://example.com",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /circuits/providers/`

> Body parameter

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "comments": "string",
  "custom_fields": {},
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsproviderscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Provider](#schemaprovider)|true|none|
|» account|body|string|false|none|
|» admin_contact|body|string|false|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» name|body|string|true|none|
|» noc_contact|body|string|false|none|
|» portal_url|body|string(uri)|false|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsproviderscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_read

<a id="opIdcircuits_providers_read"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/providers/{id}/`

Call to super to allow for caching

<h3 id="circuitsprovidersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this provider.|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsprovidersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_update

<a id="opIdcircuits_providers_update"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "account": "string",
    "admin_contact": "string",
    "asn": 1,
    "comments": "string",
    "custom_fields": {},
    "name": "string",
    "noc_contact": "string",
    "portal_url": "http://example.com",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`PUT /circuits/providers/{id}/`

> Body parameter

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "comments": "string",
  "custom_fields": {},
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsprovidersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this provider.|
|body|body|[Provider](#schemaprovider)|true|none|
|» account|body|string|false|none|
|» admin_contact|body|string|false|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» name|body|string|true|none|
|» noc_contact|body|string|false|none|
|» portal_url|body|string(uri)|false|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsprovidersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_delete

<a id="opIdcircuits_providers_delete"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /circuits/providers/{id}/`

<h3 id="circuitsprovidersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this provider.|

<h3 id="circuitsprovidersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_partial_update

<a id="opIdcircuits_providers_partial_update"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "account": "string",
    "admin_contact": "string",
    "asn": 1,
    "comments": "string",
    "custom_fields": {},
    "name": "string",
    "noc_contact": "string",
    "portal_url": "http://example.com",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /circuits/providers/{id}/`

> Body parameter

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "comments": "string",
  "custom_fields": {},
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsproviderspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this provider.|
|body|body|[Provider](#schemaprovider)|true|none|
|» account|body|string|false|none|
|» admin_contact|body|string|false|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» name|body|string|true|none|
|» noc_contact|body|string|false|none|
|» portal_url|body|string(uri)|false|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsproviderspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## circuits_providers_graphs

<a id="opIdcircuits_providers_graphs"></a>

> Code samples

```bash
curl https://example.com/circuits/providers/0/graphs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /circuits/providers/{id}/graphs/`

A convenience method for rendering graphs for a particular provider.

<h3 id="circuitsprovidersgraphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this provider.|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="circuitsprovidersgraphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-dcim">dcim</h1>

## dcim_cables_list

<a id="opIddcim_cables_list"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/cables/`

Call to super to allow for caching

<h3 id="dcimcableslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|label|query|string|false|none|
|length|query|string|false|none|
|length_unit|query|string|false|none|
|q|query|string|false|none|
|type|query|string|false|none|
|status|query|string|false|none|
|color|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|rack_id|query|string|false|none|
|rack|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|label__n|query|string|false|none|
|label__ic|query|string|false|none|
|label__nic|query|string|false|none|
|label__iew|query|string|false|none|
|label__niew|query|string|false|none|
|label__isw|query|string|false|none|
|label__nisw|query|string|false|none|
|label__ie|query|string|false|none|
|label__nie|query|string|false|none|
|length__n|query|string|false|none|
|length__lte|query|string|false|none|
|length__lt|query|string|false|none|
|length__gte|query|string|false|none|
|length__gt|query|string|false|none|
|length_unit__n|query|string|false|none|
|type__n|query|string|false|none|
|status__n|query|string|false|none|
|color__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "color": "string",
      "id": 0,
      "label": "string",
      "length": 0,
      "length_unit": {
        "label": "Meters",
        "value": "m"
      },
      "status": {
        "label": "Connected",
        "value": "connected"
      },
      "termination_a": {
        "property1": "string",
        "property2": "string"
      },
      "termination_a_id": 0,
      "termination_a_type": "string",
      "termination_b": {
        "property1": "string",
        "property2": "string"
      },
      "termination_b_id": 0,
      "termination_b_type": "string",
      "type": "cat3"
    }
  ]
}
```

<h3 id="dcimcableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimcableslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Cable](#schemacable)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_cables_create

<a id="opIddcim_cables_create"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "label": "string",
    "length": 0,
    "length_unit": "m",
    "status": "connected",
    "termination_a_id": 0,
    "termination_a_type": "string",
    "termination_b_id": 0,
    "termination_b_type": "string",
    "type": "cat3"
  }'
```

`POST /dcim/cables/`

> Body parameter

```json
{
  "color": "string",
  "label": "string",
  "length": 0,
  "length_unit": "m",
  "status": "connected",
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableCable](#schemawritablecable)|true|none|
|» color|body|string|false|none|
|» label|body|string|false|none|
|» length|body|integer \| null|false|none|
|» length_unit|body|string|false|none|
|» status|body|string|false|none|
|» termination_a_id|body|integer|true|none|
|» termination_a_type|body|string|true|none|
|» termination_b_id|body|integer|true|none|
|» termination_b_type|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» length_unit|m|
|» length_unit|cm|
|» length_unit|ft|
|» length_unit|in|
|» status|connected|
|» status|planned|
|» status|decommissioning|
|» type|cat3|
|» type|cat5|
|» type|cat5e|
|» type|cat6|
|» type|cat6a|
|» type|cat7|
|» type|dac-active|
|» type|dac-passive|
|» type|mrj21-trunk|
|» type|coaxial|
|» type|mmf|
|» type|mmf-om1|
|» type|mmf-om2|
|» type|mmf-om3|
|» type|mmf-om4|
|» type|smf|
|» type|smf-os1|
|» type|smf-os2|
|» type|aoc|
|» type|power|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": {
    "label": "Meters",
    "value": "m"
  },
  "status": {
    "label": "Connected",
    "value": "connected"
  },
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Cable](#schemacable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_cables_read

<a id="opIddcim_cables_read"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/cables/{id}/`

Call to super to allow for caching

<h3 id="dcimcablesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cable.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": {
    "label": "Meters",
    "value": "m"
  },
  "status": {
    "label": "Connected",
    "value": "connected"
  },
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cable](#schemacable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_cables_update

<a id="opIddcim_cables_update"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "label": "string",
    "length": 0,
    "length_unit": "m",
    "status": "connected",
    "termination_a_id": 0,
    "termination_a_type": "string",
    "termination_b_id": 0,
    "termination_b_type": "string",
    "type": "cat3"
  }'
```

`PUT /dcim/cables/{id}/`

> Body parameter

```json
{
  "color": "string",
  "label": "string",
  "length": 0,
  "length_unit": "m",
  "status": "connected",
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cable.|
|body|body|[WritableCable](#schemawritablecable)|true|none|
|» color|body|string|false|none|
|» label|body|string|false|none|
|» length|body|integer \| null|false|none|
|» length_unit|body|string|false|none|
|» status|body|string|false|none|
|» termination_a_id|body|integer|true|none|
|» termination_a_type|body|string|true|none|
|» termination_b_id|body|integer|true|none|
|» termination_b_type|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» length_unit|m|
|» length_unit|cm|
|» length_unit|ft|
|» length_unit|in|
|» status|connected|
|» status|planned|
|» status|decommissioning|
|» type|cat3|
|» type|cat5|
|» type|cat5e|
|» type|cat6|
|» type|cat6a|
|» type|cat7|
|» type|dac-active|
|» type|dac-passive|
|» type|mrj21-trunk|
|» type|coaxial|
|» type|mmf|
|» type|mmf-om1|
|» type|mmf-om2|
|» type|mmf-om3|
|» type|mmf-om4|
|» type|smf|
|» type|smf-os1|
|» type|smf-os2|
|» type|aoc|
|» type|power|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": {
    "label": "Meters",
    "value": "m"
  },
  "status": {
    "label": "Connected",
    "value": "connected"
  },
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cable](#schemacable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_cables_delete

<a id="opIddcim_cables_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/cables/{id}/`

<h3 id="dcimcablesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cable.|

<h3 id="dcimcablesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_cables_partial_update

<a id="opIddcim_cables_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/cables/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "label": "string",
    "length": 0,
    "length_unit": "m",
    "status": "connected",
    "termination_a_id": 0,
    "termination_a_type": "string",
    "termination_b_id": 0,
    "termination_b_type": "string",
    "type": "cat3"
  }'
```

`PATCH /dcim/cables/{id}/`

> Body parameter

```json
{
  "color": "string",
  "label": "string",
  "length": 0,
  "length_unit": "m",
  "status": "connected",
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cable.|
|body|body|[WritableCable](#schemawritablecable)|true|none|
|» color|body|string|false|none|
|» label|body|string|false|none|
|» length|body|integer \| null|false|none|
|» length_unit|body|string|false|none|
|» status|body|string|false|none|
|» termination_a_id|body|integer|true|none|
|» termination_a_type|body|string|true|none|
|» termination_b_id|body|integer|true|none|
|» termination_b_type|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» length_unit|m|
|» length_unit|cm|
|» length_unit|ft|
|» length_unit|in|
|» status|connected|
|» status|planned|
|» status|decommissioning|
|» type|cat3|
|» type|cat5|
|» type|cat5e|
|» type|cat6|
|» type|cat6a|
|» type|cat7|
|» type|dac-active|
|» type|dac-passive|
|» type|mrj21-trunk|
|» type|coaxial|
|» type|mmf|
|» type|mmf-om1|
|» type|mmf-om2|
|» type|mmf-om3|
|» type|mmf-om4|
|» type|smf|
|» type|smf-os1|
|» type|smf-os2|
|» type|aoc|
|» type|power|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": {
    "label": "Meters",
    "value": "m"
  },
  "status": {
    "label": "Connected",
    "value": "connected"
  },
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

<h3 id="dcimcablespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cable](#schemacable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_connected-device_list

<a id="opIddcim_connected-device_list"></a>

> Code samples

```bash
curl 'https://example.com/dcim/connected-device/?peer_device=string&peer_interface=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/connected-device/`

This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface

<h3 id="dcimconnected-devicelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|peer_device|query|string|true|The name of the peer device|
|peer_interface|query|string|true|The name of the peer interface|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimconnected-devicelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-connections_list

<a id="opIddcim_console-connections_list"></a>

> Code samples

```bash
curl https://example.com/dcim/console-connections/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-connections/`

<h3 id="dcimconsole-connectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|connection_status|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": {
        "label": "DE-9",
        "value": "de-9"
      }
    }
  ]
}
```

<h3 id="dcimconsole-connectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimconsole-connectionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsolePort](#schemaconsoleport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_list

<a id="opIddcim_console-port-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-port-templates/`

Call to super to allow for caching

<h3 id="dcimconsole-port-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "type": {
        "label": "DE-9",
        "value": "de-9"
      }
    }
  ]
}
```

<h3 id="dcimconsole-port-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimconsole-port-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsolePortTemplate](#schemaconsoleporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_create

<a id="opIddcim_console-port-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`POST /dcim/console-port-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-port-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableConsolePortTemplate](#schemawritableconsoleporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-port-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ConsolePortTemplate](#schemaconsoleporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_read

<a id="opIddcim_console-port-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-port-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimconsole-port-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-port-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePortTemplate](#schemaconsoleporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_update

<a id="opIddcim_console-port-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`PUT /dcim/console-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-port-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port template.|
|body|body|[WritableConsolePortTemplate](#schemawritableconsoleporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-port-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePortTemplate](#schemaconsoleporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_delete

<a id="opIddcim_console-port-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/console-port-templates/{id}/`

<h3 id="dcimconsole-port-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port template.|

<h3 id="dcimconsole-port-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-port-templates_partial_update

<a id="opIddcim_console-port-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-port-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`PATCH /dcim/console-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-port-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port template.|
|body|body|[WritableConsolePortTemplate](#schemawritableconsoleporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-port-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePortTemplate](#schemaconsoleporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_list

<a id="opIddcim_console-ports_list"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-ports/`

Call to super to allow for caching

<h3 id="dcimconsole-portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|description|query|string|false|none|
|connection_status|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|type|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|type__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": {
        "label": "DE-9",
        "value": "de-9"
      }
    }
  ]
}
```

<h3 id="dcimconsole-portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimconsole-portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsolePort](#schemaconsoleport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_create

<a id="opIddcim_console-ports_create"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`POST /dcim/console-ports/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-portscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableConsolePort](#schemawritableconsoleport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-portscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ConsolePort](#schemaconsoleport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_read

<a id="opIddcim_console-ports_read"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-ports/{id}/`

Call to super to allow for caching

<h3 id="dcimconsole-portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePort](#schemaconsoleport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_update

<a id="opIddcim_console-ports_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`PUT /dcim/console-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-portsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port.|
|body|body|[WritableConsolePort](#schemawritableconsoleport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-portsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePort](#schemaconsoleport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_delete

<a id="opIddcim_console-ports_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/console-ports/{id}/`

<h3 id="dcimconsole-portsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port.|

<h3 id="dcimconsole-portsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_partial_update

<a id="opIddcim_console-ports_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`PATCH /dcim/console-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-portspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port.|
|body|body|[WritableConsolePort](#schemawritableconsoleport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-portspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePort](#schemaconsoleport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-ports_trace

<a id="opIddcim_console-ports_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/console-ports/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-ports/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimconsole-portstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-portstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsolePort](#schemaconsoleport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_list

<a id="opIddcim_console-server-port-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-server-port-templates/`

Call to super to allow for caching

<h3 id="dcimconsole-server-port-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "type": {
        "label": "DE-9",
        "value": "de-9"
      }
    }
  ]
}
```

<h3 id="dcimconsole-server-port-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimconsole-server-port-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsoleServerPortTemplate](#schemaconsoleserverporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_create

<a id="opIddcim_console-server-port-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`POST /dcim/console-server-port-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-port-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableConsoleServerPortTemplate](#schemawritableconsoleserverporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-port-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ConsoleServerPortTemplate](#schemaconsoleserverporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_read

<a id="opIddcim_console-server-port-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-server-port-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimconsole-server-port-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-port-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPortTemplate](#schemaconsoleserverporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_update

<a id="opIddcim_console-server-port-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`PUT /dcim/console-server-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-port-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port template.|
|body|body|[WritableConsoleServerPortTemplate](#schemawritableconsoleserverporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-port-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPortTemplate](#schemaconsoleserverporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_delete

<a id="opIddcim_console-server-port-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/console-server-port-templates/{id}/`

<h3 id="dcimconsole-server-port-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port template.|

<h3 id="dcimconsole-server-port-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-port-templates_partial_update

<a id="opIddcim_console-server-port-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-port-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "type": "de-9"
  }'
```

`PATCH /dcim/console-server-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-port-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port template.|
|body|body|[WritableConsoleServerPortTemplate](#schemawritableconsoleserverporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-port-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPortTemplate](#schemaconsoleserverporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_list

<a id="opIddcim_console-server-ports_list"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-server-ports/`

Call to super to allow for caching

<h3 id="dcimconsole-server-portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|description|query|string|false|none|
|connection_status|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|type|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|type__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": {
        "label": "DE-9",
        "value": "de-9"
      }
    }
  ]
}
```

<h3 id="dcimconsole-server-portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimconsole-server-portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsoleServerPort](#schemaconsoleserverport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_create

<a id="opIddcim_console-server-ports_create"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`POST /dcim/console-server-ports/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-portscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableConsoleServerPort](#schemawritableconsoleserverport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-portscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ConsoleServerPort](#schemaconsoleserverport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_read

<a id="opIddcim_console-server-ports_read"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-server-ports/{id}/`

Call to super to allow for caching

<h3 id="dcimconsole-server-portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPort](#schemaconsoleserverport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_update

<a id="opIddcim_console-server-ports_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`PUT /dcim/console-server-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-portsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port.|
|body|body|[WritableConsoleServerPort](#schemawritableconsoleserverport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-portsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPort](#schemaconsoleserverport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_delete

<a id="opIddcim_console-server-ports_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/console-server-ports/{id}/`

<h3 id="dcimconsole-server-portsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port.|

<h3 id="dcimconsole-server-portsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_partial_update

<a id="opIddcim_console-server-ports_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "de-9"
  }'
```

`PATCH /dcim/console-server-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

<h3 id="dcimconsole-server-portspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port.|
|body|body|[WritableConsoleServerPort](#schemawritableconsoleserverport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|de-9|
|» type|db-25|
|» type|rj-11|
|» type|rj-12|
|» type|rj-45|
|» type|usb-a|
|» type|usb-b|
|» type|usb-c|
|» type|usb-mini-a|
|» type|usb-mini-b|
|» type|usb-micro-a|
|» type|usb-micro-b|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-portspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPort](#schemaconsoleserverport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_console-server-ports_trace

<a id="opIddcim_console-server-ports_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/console-server-ports/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/console-server-ports/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimconsole-server-portstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this console server port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

<h3 id="dcimconsole-server-portstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsoleServerPort](#schemaconsoleserverport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_list

<a id="opIddcim_device-bay-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-bay-templates/`

Call to super to allow for caching

<h3 id="dcimdevice-bay-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string"
    }
  ]
}
```

<h3 id="dcimdevice-bay-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimdevice-bay-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceBayTemplate](#schemadevicebaytemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_create

<a id="opIddcim_device-bay-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string"
  }'
```

`POST /dcim/device-bay-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableDeviceBayTemplate](#schemawritabledevicebaytemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceBayTemplate](#schemadevicebaytemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_read

<a id="opIddcim_device-bay-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-bay-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimdevice-bay-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBayTemplate](#schemadevicebaytemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_update

<a id="opIddcim_device-bay-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string"
  }'
```

`PUT /dcim/device-bay-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay template.|
|body|body|[WritableDeviceBayTemplate](#schemawritabledevicebaytemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBayTemplate](#schemadevicebaytemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_delete

<a id="opIddcim_device-bay-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/device-bay-templates/{id}/`

<h3 id="dcimdevice-bay-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay template.|

<h3 id="dcimdevice-bay-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bay-templates_partial_update

<a id="opIddcim_device-bay-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bay-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string"
  }'
```

`PATCH /dcim/device-bay-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay template.|
|body|body|[WritableDeviceBayTemplate](#schemawritabledevicebaytemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string"
}
```

<h3 id="dcimdevice-bay-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBayTemplate](#schemadevicebaytemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_list

<a id="opIddcim_device-bays_list"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-bays/`

Call to super to allow for caching

<h3 id="dcimdevice-bayslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "installed_device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "name": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="dcimdevice-bayslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimdevice-bayslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceBay](#schemadevicebay)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_create

<a id="opIddcim_device-bays_create"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "device": 0,
    "installed_device": 0,
    "name": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /dcim/device-bays/`

> Body parameter

```json
{
  "description": "string",
  "device": 0,
  "installed_device": 0,
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-bayscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableDeviceBay](#schemawritabledevicebay)|true|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» installed_device|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "installed_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-bayscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceBay](#schemadevicebay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_read

<a id="opIddcim_device-bays_read"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-bays/{id}/`

Call to super to allow for caching

<h3 id="dcimdevice-baysread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "installed_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-baysread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBay](#schemadevicebay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_update

<a id="opIddcim_device-bays_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "device": 0,
    "installed_device": 0,
    "name": "string",
    "tags": [
      "string"
    ]
  }'
```

`PUT /dcim/device-bays/{id}/`

> Body parameter

```json
{
  "description": "string",
  "device": 0,
  "installed_device": 0,
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-baysupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay.|
|body|body|[WritableDeviceBay](#schemawritabledevicebay)|true|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» installed_device|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "installed_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-baysupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBay](#schemadevicebay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_delete

<a id="opIddcim_device-bays_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/device-bays/{id}/`

<h3 id="dcimdevice-baysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay.|

<h3 id="dcimdevice-baysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-bays_partial_update

<a id="opIddcim_device-bays_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-bays/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "device": 0,
    "installed_device": 0,
    "name": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /dcim/device-bays/{id}/`

> Body parameter

```json
{
  "description": "string",
  "device": 0,
  "installed_device": 0,
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-bayspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device bay.|
|body|body|[WritableDeviceBay](#schemawritabledevicebay)|true|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» installed_device|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "installed_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimdevice-bayspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceBay](#schemadevicebay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_list

<a id="opIddcim_device-roles_list"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-roles/`

Call to super to allow for caching

<h3 id="dcimdevice-roleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|color|query|string|false|none|
|vm_role|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|color__n|query|string|false|none|
|color__ic|query|string|false|none|
|color__nic|query|string|false|none|
|color__iew|query|string|false|none|
|color__niew|query|string|false|none|
|color__isw|query|string|false|none|
|color__nisw|query|string|false|none|
|color__ie|query|string|false|none|
|color__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "color": "string",
      "description": "string",
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "virtualmachine_count": 0,
      "vm_role": true
    }
  ]
}
```

<h3 id="dcimdevice-roleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimdevice-roleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceRole](#schemadevicerole)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_create

<a id="opIddcim_device-roles_create"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string",
    "vm_role": true
  }'
```

`POST /dcim/device-roles/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string",
  "vm_role": true
}
```

<h3 id="dcimdevice-rolescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceRole](#schemadevicerole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» vm_role|body|boolean|false|Virtual machines may be assigned to this role|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "description": "string",
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "virtualmachine_count": 0,
  "vm_role": true
}
```

<h3 id="dcimdevice-rolescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceRole](#schemadevicerole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_read

<a id="opIddcim_device-roles_read"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-roles/{id}/`

Call to super to allow for caching

<h3 id="dcimdevice-rolesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device role.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "virtualmachine_count": 0,
  "vm_role": true
}
```

<h3 id="dcimdevice-rolesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceRole](#schemadevicerole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_update

<a id="opIddcim_device-roles_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string",
    "vm_role": true
  }'
```

`PUT /dcim/device-roles/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string",
  "vm_role": true
}
```

<h3 id="dcimdevice-rolesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device role.|
|body|body|[DeviceRole](#schemadevicerole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» vm_role|body|boolean|false|Virtual machines may be assigned to this role|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "virtualmachine_count": 0,
  "vm_role": true
}
```

<h3 id="dcimdevice-rolesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceRole](#schemadevicerole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_delete

<a id="opIddcim_device-roles_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/device-roles/{id}/`

<h3 id="dcimdevice-rolesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device role.|

<h3 id="dcimdevice-rolesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-roles_partial_update

<a id="opIddcim_device-roles_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-roles/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string",
    "vm_role": true
  }'
```

`PATCH /dcim/device-roles/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string",
  "vm_role": true
}
```

<h3 id="dcimdevice-rolespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device role.|
|body|body|[DeviceRole](#schemadevicerole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» vm_role|body|boolean|false|Virtual machines may be assigned to this role|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "virtualmachine_count": 0,
  "vm_role": true
}
```

<h3 id="dcimdevice-rolespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceRole](#schemadevicerole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_list

<a id="opIddcim_device-types_list"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-types/`

Call to super to allow for caching

<h3 id="dcimdevice-typeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|model|query|string|false|none|
|slug|query|string|false|none|
|part_number|query|string|false|none|
|u_height|query|string|false|none|
|is_full_depth|query|string|false|none|
|subdevice_role|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|manufacturer_id|query|string|false|none|
|manufacturer|query|string|false|none|
|console_ports|query|string|false|none|
|console_server_ports|query|string|false|none|
|power_ports|query|string|false|none|
|power_outlets|query|string|false|none|
|interfaces|query|string|false|none|
|pass_through_ports|query|string|false|none|
|device_bays|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|model__n|query|string|false|none|
|model__ic|query|string|false|none|
|model__nic|query|string|false|none|
|model__iew|query|string|false|none|
|model__niew|query|string|false|none|
|model__isw|query|string|false|none|
|model__nisw|query|string|false|none|
|model__ie|query|string|false|none|
|model__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|part_number__n|query|string|false|none|
|part_number__ic|query|string|false|none|
|part_number__nic|query|string|false|none|
|part_number__iew|query|string|false|none|
|part_number__niew|query|string|false|none|
|part_number__isw|query|string|false|none|
|part_number__nisw|query|string|false|none|
|part_number__ie|query|string|false|none|
|part_number__nie|query|string|false|none|
|u_height__n|query|string|false|none|
|u_height__lte|query|string|false|none|
|u_height__lt|query|string|false|none|
|u_height__gte|query|string|false|none|
|u_height__gt|query|string|false|none|
|subdevice_role__n|query|string|false|none|
|manufacturer_id__n|query|string|false|none|
|manufacturer__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "device_count": 0,
      "display_name": "string",
      "front_image": "http://example.com",
      "id": 0,
      "is_full_depth": true,
      "last_updated": "1970-01-01T00:00:00Z",
      "manufacturer": {
        "devicetype_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "model": "string",
      "part_number": "string",
      "rear_image": "http://example.com",
      "slug": "string",
      "subdevice_role": {
        "label": "Parent",
        "value": "parent"
      },
      "tags": [
        "string"
      ],
      "u_height": 0
    }
  ]
}
```

<h3 id="dcimdevice-typeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimdevice-typeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceType](#schemadevicetype)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_create

<a id="opIddcim_device-types_create"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "is_full_depth": true,
    "manufacturer": 0,
    "model": "string",
    "part_number": "string",
    "slug": "string",
    "subdevice_role": "parent",
    "tags": [
      "string"
    ],
    "u_height": 0
  }'
```

`POST /dcim/device-types/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "is_full_depth": true,
  "manufacturer": 0,
  "model": "string",
  "part_number": "string",
  "slug": "string",
  "subdevice_role": "parent",
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableDeviceType](#schemawritabledevicetype)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» is_full_depth|body|boolean|false|Device consumes both front and rear rack faces|
|» manufacturer|body|integer|true|none|
|» model|body|string|true|none|
|» part_number|body|string|false|Discrete part number (optional)|
|» slug|body|string(slug)|true|none|
|» subdevice_role|body|string|false|Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.|
|» tags|body|[string]|false|none|
|» u_height|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subdevice_role|parent|
|» subdevice_role|child|

> Example responses

> 201 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": {
    "label": "Parent",
    "value": "parent"
  },
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceType](#schemadevicetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_read

<a id="opIddcim_device-types_read"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/device-types/{id}/`

Call to super to allow for caching

<h3 id="dcimdevice-typesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device type.|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": {
    "label": "Parent",
    "value": "parent"
  },
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceType](#schemadevicetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_update

<a id="opIddcim_device-types_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "is_full_depth": true,
    "manufacturer": 0,
    "model": "string",
    "part_number": "string",
    "slug": "string",
    "subdevice_role": "parent",
    "tags": [
      "string"
    ],
    "u_height": 0
  }'
```

`PUT /dcim/device-types/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "is_full_depth": true,
  "manufacturer": 0,
  "model": "string",
  "part_number": "string",
  "slug": "string",
  "subdevice_role": "parent",
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device type.|
|body|body|[WritableDeviceType](#schemawritabledevicetype)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» is_full_depth|body|boolean|false|Device consumes both front and rear rack faces|
|» manufacturer|body|integer|true|none|
|» model|body|string|true|none|
|» part_number|body|string|false|Discrete part number (optional)|
|» slug|body|string(slug)|true|none|
|» subdevice_role|body|string|false|Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.|
|» tags|body|[string]|false|none|
|» u_height|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subdevice_role|parent|
|» subdevice_role|child|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": {
    "label": "Parent",
    "value": "parent"
  },
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceType](#schemadevicetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_delete

<a id="opIddcim_device-types_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/device-types/{id}/`

<h3 id="dcimdevice-typesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device type.|

<h3 id="dcimdevice-typesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_device-types_partial_update

<a id="opIddcim_device-types_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/device-types/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "is_full_depth": true,
    "manufacturer": 0,
    "model": "string",
    "part_number": "string",
    "slug": "string",
    "subdevice_role": "parent",
    "tags": [
      "string"
    ],
    "u_height": 0
  }'
```

`PATCH /dcim/device-types/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "is_full_depth": true,
  "manufacturer": 0,
  "model": "string",
  "part_number": "string",
  "slug": "string",
  "subdevice_role": "parent",
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device type.|
|body|body|[WritableDeviceType](#schemawritabledevicetype)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» is_full_depth|body|boolean|false|Device consumes both front and rear rack faces|
|» manufacturer|body|integer|true|none|
|» model|body|string|true|none|
|» part_number|body|string|false|Discrete part number (optional)|
|» slug|body|string(slug)|true|none|
|» subdevice_role|body|string|false|Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.|
|» tags|body|[string]|false|none|
|» u_height|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subdevice_role|parent|
|» subdevice_role|child|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": {
    "label": "Parent",
    "value": "parent"
  },
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

<h3 id="dcimdevice-typespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceType](#schemadevicetype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_list

<a id="opIddcim_devices_list"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/devices/`

Call to super to allow for caching

<h3 id="dcimdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|asset_tag|query|string|false|none|
|face|query|string|false|none|
|position|query|string|false|none|
|vc_position|query|string|false|none|
|vc_priority|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|local_context_data|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|manufacturer_id|query|string|false|none|
|manufacturer|query|string|false|none|
|device_type_id|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|platform_id|query|string|false|none|
|platform|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|rack_group_id|query|string|false|none|
|rack_id|query|string|false|none|
|cluster_id|query|string|false|none|
|model|query|string|false|none|
|status|query|string|false|none|
|is_full_depth|query|string|false|none|
|mac_address|query|string|false|none|
|serial|query|string|false|none|
|has_primary_ip|query|string|false|none|
|virtual_chassis_id|query|string|false|none|
|virtual_chassis_member|query|string|false|none|
|console_ports|query|string|false|none|
|console_server_ports|query|string|false|none|
|power_ports|query|string|false|none|
|power_outlets|query|string|false|none|
|interfaces|query|string|false|none|
|pass_through_ports|query|string|false|none|
|device_bays|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|asset_tag__n|query|string|false|none|
|asset_tag__ic|query|string|false|none|
|asset_tag__nic|query|string|false|none|
|asset_tag__iew|query|string|false|none|
|asset_tag__niew|query|string|false|none|
|asset_tag__isw|query|string|false|none|
|asset_tag__nisw|query|string|false|none|
|asset_tag__ie|query|string|false|none|
|asset_tag__nie|query|string|false|none|
|face__n|query|string|false|none|
|position__n|query|string|false|none|
|position__lte|query|string|false|none|
|position__lt|query|string|false|none|
|position__gte|query|string|false|none|
|position__gt|query|string|false|none|
|vc_position__n|query|string|false|none|
|vc_position__lte|query|string|false|none|
|vc_position__lt|query|string|false|none|
|vc_position__gte|query|string|false|none|
|vc_position__gt|query|string|false|none|
|vc_priority__n|query|string|false|none|
|vc_priority__lte|query|string|false|none|
|vc_priority__lt|query|string|false|none|
|vc_priority__gte|query|string|false|none|
|vc_priority__gt|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|manufacturer_id__n|query|string|false|none|
|manufacturer__n|query|string|false|none|
|device_type_id__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|platform_id__n|query|string|false|none|
|platform__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|rack_group_id__n|query|string|false|none|
|rack_id__n|query|string|false|none|
|cluster_id__n|query|string|false|none|
|model__n|query|string|false|none|
|status__n|query|string|false|none|
|mac_address__n|query|string|false|none|
|mac_address__ic|query|string|false|none|
|mac_address__nic|query|string|false|none|
|mac_address__iew|query|string|false|none|
|mac_address__niew|query|string|false|none|
|mac_address__isw|query|string|false|none|
|mac_address__nisw|query|string|false|none|
|mac_address__ie|query|string|false|none|
|mac_address__nie|query|string|false|none|
|virtual_chassis_id__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "asset_tag": "string",
      "cluster": {
        "id": 0,
        "name": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "comments": "string",
      "config_context": {
        "property1": "string",
        "property2": "string"
      },
      "created": "1970-01-01",
      "custom_fields": {},
      "device_role": {
        "device_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "display_name": "string",
      "face": {
        "label": "Front",
        "value": "front"
      },
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "local_context_data": "string",
      "name": "string",
      "parent_device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "platform": {
        "device_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "position": 1,
      "primary_ip": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "primary_ip4": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "primary_ip6": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "rack": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "serial": "string",
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Offline",
        "value": "offline"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "vc_position": 0,
      "vc_priority": 0,
      "virtual_chassis": {
        "id": 0,
        "master": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "member_count": 0,
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="dcimdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimdeviceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceWithConfigContext](#schemadevicewithconfigcontext)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_create

<a id="opIddcim_devices_create"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "device_role": 0,
    "device_type": 0,
    "face": "front",
    "local_context_data": "string",
    "name": "string",
    "parent_device": {
      "name": "string"
    },
    "platform": 0,
    "position": 1,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "rack": 0,
    "serial": "string",
    "site": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vc_position": 0,
    "vc_priority": 0,
    "virtual_chassis": 0
  }'
```

`POST /dcim/devices/`

> Body parameter

```json
{
  "asset_tag": "string",
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "device_role": 0,
  "device_type": 0,
  "face": "front",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "name": "string"
  },
  "platform": 0,
  "position": 1,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "rack": 0,
  "serial": "string",
  "site": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": 0
}
```

<h3 id="dcimdevicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableDeviceWithConfigContext](#schemawritabledevicewithconfigcontext)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this device|
|» cluster|body|integer \| null|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» device_role|body|integer|true|none|
|» device_type|body|integer|true|none|
|» face|body|string|false|none|
|» local_context_data|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» parent_device|body|[NestedDevice](#schemanesteddevice)|false|none|
|» platform|body|integer \| null|false|none|
|» position|body|integer \| null|false|The lowest-numbered unit occupied by the device|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» rack|body|integer \| null|false|none|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vc_position|body|integer \| null|false|none|
|» vc_priority|body|integer \| null|false|none|
|» virtual_chassis|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» face|front|
|» face|rear|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|inventory|
|» status|decommissioning|

> Example responses

> 201 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimdevicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceWithConfigContext](#schemadevicewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_read

<a id="opIddcim_devices_read"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/devices/{id}/`

Call to super to allow for caching

<h3 id="dcimdevicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device.|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimdevicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceWithConfigContext](#schemadevicewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_update

<a id="opIddcim_devices_update"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "device_role": 0,
    "device_type": 0,
    "face": "front",
    "local_context_data": "string",
    "name": "string",
    "parent_device": {
      "name": "string"
    },
    "platform": 0,
    "position": 1,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "rack": 0,
    "serial": "string",
    "site": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vc_position": 0,
    "vc_priority": 0,
    "virtual_chassis": 0
  }'
```

`PUT /dcim/devices/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "device_role": 0,
  "device_type": 0,
  "face": "front",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "name": "string"
  },
  "platform": 0,
  "position": 1,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "rack": 0,
  "serial": "string",
  "site": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": 0
}
```

<h3 id="dcimdevicesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device.|
|body|body|[WritableDeviceWithConfigContext](#schemawritabledevicewithconfigcontext)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this device|
|» cluster|body|integer \| null|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» device_role|body|integer|true|none|
|» device_type|body|integer|true|none|
|» face|body|string|false|none|
|» local_context_data|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» parent_device|body|[NestedDevice](#schemanesteddevice)|false|none|
|» platform|body|integer \| null|false|none|
|» position|body|integer \| null|false|The lowest-numbered unit occupied by the device|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» rack|body|integer \| null|false|none|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vc_position|body|integer \| null|false|none|
|» vc_priority|body|integer \| null|false|none|
|» virtual_chassis|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» face|front|
|» face|rear|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|inventory|
|» status|decommissioning|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimdevicesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceWithConfigContext](#schemadevicewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_delete

<a id="opIddcim_devices_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/devices/{id}/`

<h3 id="dcimdevicesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device.|

<h3 id="dcimdevicesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_partial_update

<a id="opIddcim_devices_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "device_role": 0,
    "device_type": 0,
    "face": "front",
    "local_context_data": "string",
    "name": "string",
    "parent_device": {
      "name": "string"
    },
    "platform": 0,
    "position": 1,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "rack": 0,
    "serial": "string",
    "site": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vc_position": 0,
    "vc_priority": 0,
    "virtual_chassis": 0
  }'
```

`PATCH /dcim/devices/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "device_role": 0,
  "device_type": 0,
  "face": "front",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "name": "string"
  },
  "platform": 0,
  "position": 1,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "rack": 0,
  "serial": "string",
  "site": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": 0
}
```

<h3 id="dcimdevicespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device.|
|body|body|[WritableDeviceWithConfigContext](#schemawritabledevicewithconfigcontext)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this device|
|» cluster|body|integer \| null|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» device_role|body|integer|true|none|
|» device_type|body|integer|true|none|
|» face|body|string|false|none|
|» local_context_data|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» parent_device|body|[NestedDevice](#schemanesteddevice)|false|none|
|» platform|body|integer \| null|false|none|
|» position|body|integer \| null|false|The lowest-numbered unit occupied by the device|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» rack|body|integer \| null|false|none|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vc_position|body|integer \| null|false|none|
|» vc_priority|body|integer \| null|false|none|
|» virtual_chassis|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» face|front|
|» face|rear|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|inventory|
|» status|decommissioning|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimdevicespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceWithConfigContext](#schemadevicewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_graphs

<a id="opIddcim_devices_graphs"></a>

> Code samples

```bash
curl https://example.com/dcim/devices/0/graphs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/devices/{id}/graphs/`

A convenience method for rendering graphs for a particular Device.

<h3 id="dcimdevicesgraphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this device.|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="dcimdevicesgraphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceWithConfigContext](#schemadevicewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_devices_napalm

<a id="opIddcim_devices_napalm"></a>

> Code samples

```bash
curl 'https://example.com/dcim/devices/0/napalm/?method=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/devices/{id}/napalm/`

Execute a NAPALM method on a Device

<h3 id="dcimdevicesnapalm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|method|query|string|true|none|
|id|path|integer|true|A unique integer value identifying this device.|

> Example responses

> 200 Response

```json
{
  "method": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="dcimdevicesnapalm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceNAPALM](#schemadevicenapalm)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_list

<a id="opIddcim_front-port-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/front-port-templates/`

Call to super to allow for caching

<h3 id="dcimfront-port-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "rear_port": {
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "rear_port_position": 1,
      "type": {
        "label": "8P8C",
        "value": "8p8c"
      }
    }
  ]
}
```

<h3 id="dcimfront-port-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimfront-port-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[FrontPortTemplate](#schemafrontporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_create

<a id="opIddcim_front-port-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "type": "8p8c"
  }'
```

`POST /dcim/front-port-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "type": "8p8c"
}
```

<h3 id="dcimfront-port-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableFrontPortTemplate](#schemawritablefrontporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-port-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[FrontPortTemplate](#schemafrontporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_read

<a id="opIddcim_front-port-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/front-port-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimfront-port-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-port-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPortTemplate](#schemafrontporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_update

<a id="opIddcim_front-port-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "type": "8p8c"
  }'
```

`PUT /dcim/front-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "type": "8p8c"
}
```

<h3 id="dcimfront-port-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port template.|
|body|body|[WritableFrontPortTemplate](#schemawritablefrontporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-port-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPortTemplate](#schemafrontporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_delete

<a id="opIddcim_front-port-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/front-port-templates/{id}/`

<h3 id="dcimfront-port-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port template.|

<h3 id="dcimfront-port-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-port-templates_partial_update

<a id="opIddcim_front-port-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/front-port-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "type": "8p8c"
  }'
```

`PATCH /dcim/front-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "type": "8p8c"
}
```

<h3 id="dcimfront-port-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port template.|
|body|body|[WritableFrontPortTemplate](#schemawritablefrontporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-port-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPortTemplate](#schemafrontporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_list

<a id="opIddcim_front-ports_list"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/front-ports/`

Call to super to allow for caching

<h3 id="dcimfront-portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "rear_port": {
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "rear_port_position": 1,
      "tags": [
        "string"
      ],
      "type": {
        "label": "8P8C",
        "value": "8p8c"
      }
    }
  ]
}
```

<h3 id="dcimfront-portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimfront-portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[FrontPort](#schemafrontport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_create

<a id="opIddcim_front-ports_create"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`POST /dcim/front-ports/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimfront-portscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableFrontPort](#schemawritablefrontport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-portscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[FrontPort](#schemafrontport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_read

<a id="opIddcim_front-ports_read"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/front-ports/{id}/`

Call to super to allow for caching

<h3 id="dcimfront-portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPort](#schemafrontport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_update

<a id="opIddcim_front-ports_update"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`PUT /dcim/front-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimfront-portsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port.|
|body|body|[WritableFrontPort](#schemawritablefrontport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-portsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPort](#schemafrontport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_delete

<a id="opIddcim_front-ports_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/front-ports/{id}/`

<h3 id="dcimfront-portsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port.|

<h3 id="dcimfront-portsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_partial_update

<a id="opIddcim_front-ports_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "rear_port": 0,
    "rear_port_position": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`PATCH /dcim/front-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimfront-portspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port.|
|body|body|[WritableFrontPort](#schemawritablefrontport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» rear_port|body|integer|true|none|
|» rear_port_position|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-portspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPort](#schemafrontport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_front-ports_trace

<a id="opIddcim_front-ports_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/front-ports/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/front-ports/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimfront-portstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this front port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimfront-portstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FrontPort](#schemafrontport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-connections_list

<a id="opIddcim_interface-connections_list"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-connections/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interface-connections/`

<h3 id="dciminterface-connectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_status|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|connection_status__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "interface_a": {
        "cable": 0,
        "connection_status": {
          "label": "Not Connected",
          "value": false
        },
        "device": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "interface_b": {
        "cable": 0,
        "connection_status": {
          "label": "Not Connected",
          "value": false
        },
        "device": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="dciminterface-connectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dciminterface-connectionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[InterfaceConnection](#schemainterfaceconnection)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_list

<a id="opIddcim_interface-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interface-templates/`

Call to super to allow for caching

<h3 id="dciminterface-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|mgmt_only|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "mgmt_only": true,
      "name": "string",
      "type": {
        "label": "Virtual",
        "value": "virtual"
      }
    }
  ]
}
```

<h3 id="dciminterface-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dciminterface-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[InterfaceTemplate](#schemainterfacetemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_create

<a id="opIddcim_interface-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "mgmt_only": true,
    "name": "string",
    "type": "virtual"
  }'
```

`POST /dcim/interface-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "mgmt_only": true,
  "name": "string",
  "type": "virtual"
}
```

<h3 id="dciminterface-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableInterfaceTemplate](#schemawritableinterfacetemplate)|true|none|
|» device_type|body|integer|true|none|
|» mgmt_only|body|boolean|false|none|
|» name|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": {
    "label": "Virtual",
    "value": "virtual"
  }
}
```

<h3 id="dciminterface-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[InterfaceTemplate](#schemainterfacetemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_read

<a id="opIddcim_interface-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interface-templates/{id}/`

Call to super to allow for caching

<h3 id="dciminterface-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": {
    "label": "Virtual",
    "value": "virtual"
  }
}
```

<h3 id="dciminterface-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InterfaceTemplate](#schemainterfacetemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_update

<a id="opIddcim_interface-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "mgmt_only": true,
    "name": "string",
    "type": "virtual"
  }'
```

`PUT /dcim/interface-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "mgmt_only": true,
  "name": "string",
  "type": "virtual"
}
```

<h3 id="dciminterface-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface template.|
|body|body|[WritableInterfaceTemplate](#schemawritableinterfacetemplate)|true|none|
|» device_type|body|integer|true|none|
|» mgmt_only|body|boolean|false|none|
|» name|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": {
    "label": "Virtual",
    "value": "virtual"
  }
}
```

<h3 id="dciminterface-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InterfaceTemplate](#schemainterfacetemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_delete

<a id="opIddcim_interface-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/interface-templates/{id}/`

<h3 id="dciminterface-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface template.|

<h3 id="dciminterface-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interface-templates_partial_update

<a id="opIddcim_interface-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/interface-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "mgmt_only": true,
    "name": "string",
    "type": "virtual"
  }'
```

`PATCH /dcim/interface-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "mgmt_only": true,
  "name": "string",
  "type": "virtual"
}
```

<h3 id="dciminterface-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface template.|
|body|body|[WritableInterfaceTemplate](#schemawritableinterfacetemplate)|true|none|
|» device_type|body|integer|true|none|
|» mgmt_only|body|boolean|false|none|
|» name|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": {
    "label": "Virtual",
    "value": "virtual"
  }
}
```

<h3 id="dciminterface-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InterfaceTemplate](#schemainterfacetemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_list

<a id="opIddcim_interfaces_list"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interfaces/`

Call to super to allow for caching

<h3 id="dciminterfaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|connection_status|query|string|false|none|
|type|query|string|false|none|
|enabled|query|string|false|none|
|mtu|query|string|false|none|
|mgmt_only|query|string|false|none|
|mode|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|cabled|query|string|false|none|
|kind|query|string|false|none|
|lag_id|query|string|false|none|
|mac_address|query|string|false|none|
|vlan_id|query|string|false|none|
|vlan|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|type__n|query|string|false|none|
|mtu__n|query|string|false|none|
|mtu__lte|query|string|false|none|
|mtu__lt|query|string|false|none|
|mtu__gte|query|string|false|none|
|mtu__gt|query|string|false|none|
|mode__n|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|tag__n|query|string|false|none|
|lag_id__n|query|string|false|none|
|mac_address__n|query|string|false|none|
|mac_address__ic|query|string|false|none|
|mac_address__nic|query|string|false|none|
|mac_address__iew|query|string|false|none|
|mac_address__niew|query|string|false|none|
|mac_address__isw|query|string|false|none|
|mac_address__nisw|query|string|false|none|
|mac_address__ie|query|string|false|none|
|mac_address__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "count_ipaddresses": 0,
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "enabled": true,
      "id": 0,
      "lag": {
        "cable": 0,
        "connection_status": {
          "label": "Not Connected",
          "value": false
        },
        "device": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "mac_address": "string",
      "mgmt_only": true,
      "mode": {
        "label": "Access",
        "value": "access"
      },
      "mtu": 1,
      "name": "string",
      "tagged_vlans": [
        {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com",
          "vid": 1
        }
      ],
      "tags": [
        "string"
      ],
      "type": {
        "label": "Virtual",
        "value": "virtual"
      },
      "untagged_vlan": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com",
        "vid": 1
      }
    }
  ]
}
```

<h3 id="dciminterfaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dciminterfaceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[DeviceInterface](#schemadeviceinterface)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_create

<a id="opIddcim_interfaces_create"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "enabled": true,
    "lag": 0,
    "mac_address": "string",
    "mgmt_only": true,
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0
  }'
```

`POST /dcim/interfaces/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "enabled": true,
  "lag": 0,
  "mac_address": "string",
  "mgmt_only": true,
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0
}
```

<h3 id="dciminterfacescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableDeviceInterface](#schemawritabledeviceinterface)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» enabled|body|boolean|false|none|
|» lag|body|integer \| null|false|none|
|» mac_address|body|string \| null|false|none|
|» mgmt_only|body|boolean|false|This interface is used only for out-of-band management|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_read

<a id="opIddcim_interfaces_read"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interfaces/{id}/`

Call to super to allow for caching

<h3 id="dciminterfacesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_update

<a id="opIddcim_interfaces_update"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "enabled": true,
    "lag": 0,
    "mac_address": "string",
    "mgmt_only": true,
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0
  }'
```

`PUT /dcim/interfaces/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "enabled": true,
  "lag": 0,
  "mac_address": "string",
  "mgmt_only": true,
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0
}
```

<h3 id="dciminterfacesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|
|body|body|[WritableDeviceInterface](#schemawritabledeviceinterface)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» enabled|body|boolean|false|none|
|» lag|body|integer \| null|false|none|
|» mac_address|body|string \| null|false|none|
|» mgmt_only|body|boolean|false|This interface is used only for out-of-band management|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_delete

<a id="opIddcim_interfaces_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/interfaces/{id}/`

<h3 id="dciminterfacesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

<h3 id="dciminterfacesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_partial_update

<a id="opIddcim_interfaces_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "enabled": true,
    "lag": 0,
    "mac_address": "string",
    "mgmt_only": true,
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0
  }'
```

`PATCH /dcim/interfaces/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "enabled": true,
  "lag": 0,
  "mac_address": "string",
  "mgmt_only": true,
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0
}
```

<h3 id="dciminterfacespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|
|body|body|[WritableDeviceInterface](#schemawritabledeviceinterface)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» enabled|body|boolean|false|none|
|» lag|body|integer \| null|false|none|
|» mac_address|body|string \| null|false|none|
|» mgmt_only|body|boolean|false|This interface is used only for out-of-band management|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_graphs

<a id="opIddcim_interfaces_graphs"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/graphs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interfaces/{id}/graphs/`

A convenience method for rendering graphs for a particular interface.

<h3 id="dciminterfacesgraphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacesgraphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_interfaces_trace

<a id="opIddcim_interfaces_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/interfaces/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/interfaces/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dciminterfacestrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

<h3 id="dciminterfacestrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeviceInterface](#schemadeviceinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_list

<a id="opIddcim_inventory-items_list"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/inventory-items/`

Call to super to allow for caching

<h3 id="dciminventory-itemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|part_id|query|string|false|none|
|asset_tag|query|string|false|none|
|discovered|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|parent_id|query|string|false|none|
|manufacturer_id|query|string|false|none|
|manufacturer|query|string|false|none|
|serial|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|part_id__n|query|string|false|none|
|part_id__ic|query|string|false|none|
|part_id__nic|query|string|false|none|
|part_id__iew|query|string|false|none|
|part_id__niew|query|string|false|none|
|part_id__isw|query|string|false|none|
|part_id__nisw|query|string|false|none|
|part_id__ie|query|string|false|none|
|part_id__nie|query|string|false|none|
|asset_tag__n|query|string|false|none|
|asset_tag__ic|query|string|false|none|
|asset_tag__nic|query|string|false|none|
|asset_tag__iew|query|string|false|none|
|asset_tag__niew|query|string|false|none|
|asset_tag__isw|query|string|false|none|
|asset_tag__nisw|query|string|false|none|
|asset_tag__ie|query|string|false|none|
|asset_tag__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|parent_id__n|query|string|false|none|
|manufacturer_id__n|query|string|false|none|
|manufacturer__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "asset_tag": "string",
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "discovered": true,
      "id": 0,
      "manufacturer": {
        "devicetype_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "name": "string",
      "parent": 0,
      "part_id": "string",
      "serial": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="dciminventory-itemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dciminventory-itemslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[InventoryItem](#schemainventoryitem)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_create

<a id="opIddcim_inventory-items_create"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "description": "string",
    "device": 0,
    "discovered": true,
    "manufacturer": 0,
    "name": "string",
    "parent": 0,
    "part_id": "string",
    "serial": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /dcim/inventory-items/`

> Body parameter

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": 0,
  "discovered": true,
  "manufacturer": 0,
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableInventoryItem](#schemawritableinventoryitem)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this item|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» discovered|body|boolean|false|This item was automatically discovered|
|» manufacturer|body|integer \| null|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» part_id|body|string|false|Manufacturer-assigned part identifier|
|» serial|body|string|false|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "discovered": true,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[InventoryItem](#schemainventoryitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_read

<a id="opIddcim_inventory-items_read"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/inventory-items/{id}/`

Call to super to allow for caching

<h3 id="dciminventory-itemsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this inventory item.|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "discovered": true,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InventoryItem](#schemainventoryitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_update

<a id="opIddcim_inventory-items_update"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "description": "string",
    "device": 0,
    "discovered": true,
    "manufacturer": 0,
    "name": "string",
    "parent": 0,
    "part_id": "string",
    "serial": "string",
    "tags": [
      "string"
    ]
  }'
```

`PUT /dcim/inventory-items/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": 0,
  "discovered": true,
  "manufacturer": 0,
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this inventory item.|
|body|body|[WritableInventoryItem](#schemawritableinventoryitem)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this item|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» discovered|body|boolean|false|This item was automatically discovered|
|» manufacturer|body|integer \| null|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» part_id|body|string|false|Manufacturer-assigned part identifier|
|» serial|body|string|false|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "discovered": true,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InventoryItem](#schemainventoryitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_delete

<a id="opIddcim_inventory-items_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/inventory-items/{id}/`

<h3 id="dciminventory-itemsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this inventory item.|

<h3 id="dciminventory-itemsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_inventory-items_partial_update

<a id="opIddcim_inventory-items_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/inventory-items/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "description": "string",
    "device": 0,
    "discovered": true,
    "manufacturer": 0,
    "name": "string",
    "parent": 0,
    "part_id": "string",
    "serial": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /dcim/inventory-items/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": 0,
  "discovered": true,
  "manufacturer": 0,
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this inventory item.|
|body|body|[WritableInventoryItem](#schemawritableinventoryitem)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this item|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» discovered|body|boolean|false|This item was automatically discovered|
|» manufacturer|body|integer \| null|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» part_id|body|string|false|Manufacturer-assigned part identifier|
|» serial|body|string|false|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "discovered": true,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="dciminventory-itemspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InventoryItem](#schemainventoryitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_list

<a id="opIddcim_manufacturers_list"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/manufacturers/`

Call to super to allow for caching

<h3 id="dcimmanufacturerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "devicetype_count": 0,
      "id": 0,
      "inventoryitem_count": 0,
      "name": "string",
      "platform_count": 0,
      "slug": "string"
    }
  ]
}
```

<h3 id="dcimmanufacturerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimmanufacturerslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Manufacturer](#schemamanufacturer)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_create

<a id="opIddcim_manufacturers_create"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /dcim/manufacturers/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimmanufacturerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Manufacturer](#schemamanufacturer)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "devicetype_count": 0,
  "id": 0,
  "inventoryitem_count": 0,
  "name": "string",
  "platform_count": 0,
  "slug": "string"
}
```

<h3 id="dcimmanufacturerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Manufacturer](#schemamanufacturer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_read

<a id="opIddcim_manufacturers_read"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/manufacturers/{id}/`

Call to super to allow for caching

<h3 id="dcimmanufacturersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this manufacturer.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "devicetype_count": 0,
  "id": 0,
  "inventoryitem_count": 0,
  "name": "string",
  "platform_count": 0,
  "slug": "string"
}
```

<h3 id="dcimmanufacturersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Manufacturer](#schemamanufacturer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_update

<a id="opIddcim_manufacturers_update"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /dcim/manufacturers/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimmanufacturersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this manufacturer.|
|body|body|[Manufacturer](#schemamanufacturer)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "devicetype_count": 0,
  "id": 0,
  "inventoryitem_count": 0,
  "name": "string",
  "platform_count": 0,
  "slug": "string"
}
```

<h3 id="dcimmanufacturersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Manufacturer](#schemamanufacturer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_delete

<a id="opIddcim_manufacturers_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/manufacturers/{id}/`

<h3 id="dcimmanufacturersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this manufacturer.|

<h3 id="dcimmanufacturersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_manufacturers_partial_update

<a id="opIddcim_manufacturers_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/manufacturers/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /dcim/manufacturers/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimmanufacturerspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this manufacturer.|
|body|body|[Manufacturer](#schemamanufacturer)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "devicetype_count": 0,
  "id": 0,
  "inventoryitem_count": 0,
  "name": "string",
  "platform_count": 0,
  "slug": "string"
}
```

<h3 id="dcimmanufacturerspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Manufacturer](#schemamanufacturer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_list

<a id="opIddcim_platforms_list"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/platforms/`

Call to super to allow for caching

<h3 id="dcimplatformslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|napalm_driver|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|manufacturer_id|query|string|false|none|
|manufacturer|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|napalm_driver__n|query|string|false|none|
|napalm_driver__ic|query|string|false|none|
|napalm_driver__nic|query|string|false|none|
|napalm_driver__iew|query|string|false|none|
|napalm_driver__niew|query|string|false|none|
|napalm_driver__isw|query|string|false|none|
|napalm_driver__nisw|query|string|false|none|
|napalm_driver__ie|query|string|false|none|
|napalm_driver__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|manufacturer_id__n|query|string|false|none|
|manufacturer__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "device_count": 0,
      "id": 0,
      "manufacturer": {
        "devicetype_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "name": "string",
      "napalm_args": "string",
      "napalm_driver": "string",
      "slug": "string",
      "virtualmachine_count": 0
    }
  ]
}
```

<h3 id="dcimplatformslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimplatformslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Platform](#schemaplatform)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_create

<a id="opIddcim_platforms_create"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "manufacturer": 0,
    "name": "string",
    "napalm_args": "string",
    "napalm_driver": "string",
    "slug": "string"
  }'
```

`POST /dcim/platforms/`

> Body parameter

```json
{
  "description": "string",
  "manufacturer": 0,
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string"
}
```

<h3 id="dcimplatformscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePlatform](#schemawritableplatform)|true|none|
|» description|body|string|false|none|
|» manufacturer|body|integer \| null|false|Optionally limit this platform to devices of a certain manufacturer|
|» name|body|string|true|none|
|» napalm_args|body|string \| null|false|Additional arguments to pass when initiating the NAPALM driver (JSON format)|
|» napalm_driver|body|string|false|The name of the NAPALM driver to use when interacting with devices|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

<h3 id="dcimplatformscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Platform](#schemaplatform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_read

<a id="opIddcim_platforms_read"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/platforms/{id}/`

Call to super to allow for caching

<h3 id="dcimplatformsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this platform.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

<h3 id="dcimplatformsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Platform](#schemaplatform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_update

<a id="opIddcim_platforms_update"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "manufacturer": 0,
    "name": "string",
    "napalm_args": "string",
    "napalm_driver": "string",
    "slug": "string"
  }'
```

`PUT /dcim/platforms/{id}/`

> Body parameter

```json
{
  "description": "string",
  "manufacturer": 0,
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string"
}
```

<h3 id="dcimplatformsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this platform.|
|body|body|[WritablePlatform](#schemawritableplatform)|true|none|
|» description|body|string|false|none|
|» manufacturer|body|integer \| null|false|Optionally limit this platform to devices of a certain manufacturer|
|» name|body|string|true|none|
|» napalm_args|body|string \| null|false|Additional arguments to pass when initiating the NAPALM driver (JSON format)|
|» napalm_driver|body|string|false|The name of the NAPALM driver to use when interacting with devices|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

<h3 id="dcimplatformsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Platform](#schemaplatform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_delete

<a id="opIddcim_platforms_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/platforms/{id}/`

<h3 id="dcimplatformsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this platform.|

<h3 id="dcimplatformsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_platforms_partial_update

<a id="opIddcim_platforms_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/platforms/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "manufacturer": 0,
    "name": "string",
    "napalm_args": "string",
    "napalm_driver": "string",
    "slug": "string"
  }'
```

`PATCH /dcim/platforms/{id}/`

> Body parameter

```json
{
  "description": "string",
  "manufacturer": 0,
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string"
}
```

<h3 id="dcimplatformspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this platform.|
|body|body|[WritablePlatform](#schemawritableplatform)|true|none|
|» description|body|string|false|none|
|» manufacturer|body|integer \| null|false|Optionally limit this platform to devices of a certain manufacturer|
|» name|body|string|true|none|
|» napalm_args|body|string \| null|false|Additional arguments to pass when initiating the NAPALM driver (JSON format)|
|» napalm_driver|body|string|false|The name of the NAPALM driver to use when interacting with devices|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

<h3 id="dcimplatformspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Platform](#schemaplatform)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-connections_list

<a id="opIddcim_power-connections_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-connections/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-connections/`

<h3 id="dcimpower-connectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|connection_status|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "allocated_draw": 1,
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "maximum_draw": 1,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": {
        "label": "C6",
        "value": "iec-60320-c6"
      }
    }
  ]
}
```

<h3 id="dcimpower-connectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-connectionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerPort](#schemapowerport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_list

<a id="opIddcim_power-feeds_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-feeds/`

Call to super to allow for caching

<h3 id="dcimpower-feedslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|status|query|string|false|none|
|type|query|string|false|none|
|supply|query|string|false|none|
|phase|query|string|false|none|
|voltage|query|string|false|none|
|amperage|query|string|false|none|
|max_utilization|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|power_panel_id|query|string|false|none|
|rack_id|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|status__n|query|string|false|none|
|type__n|query|string|false|none|
|supply__n|query|string|false|none|
|phase__n|query|string|false|none|
|voltage__n|query|string|false|none|
|voltage__lte|query|string|false|none|
|voltage__lt|query|string|false|none|
|voltage__gte|query|string|false|none|
|voltage__gt|query|string|false|none|
|amperage__n|query|string|false|none|
|amperage__lte|query|string|false|none|
|amperage__lt|query|string|false|none|
|amperage__gte|query|string|false|none|
|amperage__gt|query|string|false|none|
|max_utilization__n|query|string|false|none|
|max_utilization__lte|query|string|false|none|
|max_utilization__lt|query|string|false|none|
|max_utilization__gte|query|string|false|none|
|max_utilization__gt|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|power_panel_id__n|query|string|false|none|
|rack_id__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "amperage": 1,
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "max_utilization": 1,
      "name": "string",
      "phase": {
        "id": 1,
        "label": "Single phase",
        "value": "single-phase"
      },
      "power_panel": {
        "id": 0,
        "name": "string",
        "powerfeed_count": 0,
        "url": "http://example.com"
      },
      "rack": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "status": {
        "id": 1,
        "label": "Active",
        "value": "active"
      },
      "supply": {
        "id": 1,
        "label": "AC",
        "value": "ac"
      },
      "tags": [
        "string"
      ],
      "type": {
        "id": 1,
        "label": "Primary",
        "value": "primary"
      },
      "voltage": -32768
    }
  ]
}
```

<h3 id="dcimpower-feedslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-feedslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerFeed](#schemapowerfeed)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_create

<a id="opIddcim_power-feeds_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "amperage": 1,
    "comments": "string",
    "custom_fields": {},
    "max_utilization": 1,
    "name": "string",
    "phase": "single-phase",
    "power_panel": 0,
    "rack": 0,
    "status": "offline",
    "supply": "ac",
    "tags": [
      "string"
    ],
    "type": "primary",
    "voltage": -32768
  }'
```

`POST /dcim/power-feeds/`

> Body parameter

```json
{
  "amperage": 1,
  "comments": "string",
  "custom_fields": {},
  "max_utilization": 1,
  "name": "string",
  "phase": "single-phase",
  "power_panel": 0,
  "rack": 0,
  "status": "offline",
  "supply": "ac",
  "tags": [
    "string"
  ],
  "type": "primary",
  "voltage": -32768
}
```

<h3 id="dcimpower-feedscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerFeed](#schemawritablepowerfeed)|true|none|
|» amperage|body|integer|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» max_utilization|body|integer|false|Maximum permissible draw (percentage)|
|» name|body|string|true|none|
|» phase|body|string|false|none|
|» power_panel|body|integer|true|none|
|» rack|body|integer \| null|false|none|
|» status|body|string|false|none|
|» supply|body|string|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|none|
|» voltage|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» phase|single-phase|
|» phase|three-phase|
|» status|offline|
|» status|active|
|» status|planned|
|» status|failed|
|» supply|ac|
|» supply|dc|
|» type|primary|
|» type|redundant|

> Example responses

> 201 Response

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": {
    "id": 1,
    "label": "Single phase",
    "value": "single-phase"
  },
  "power_panel": {
    "id": 0,
    "name": "string",
    "powerfeed_count": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "status": {
    "id": 1,
    "label": "Active",
    "value": "active"
  },
  "supply": {
    "id": 1,
    "label": "AC",
    "value": "ac"
  },
  "tags": [
    "string"
  ],
  "type": {
    "id": 1,
    "label": "Primary",
    "value": "primary"
  },
  "voltage": -32768
}
```

<h3 id="dcimpower-feedscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerFeed](#schemapowerfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_read

<a id="opIddcim_power-feeds_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-feeds/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-feedsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power feed.|

> Example responses

> 200 Response

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": {
    "id": 1,
    "label": "Single phase",
    "value": "single-phase"
  },
  "power_panel": {
    "id": 0,
    "name": "string",
    "powerfeed_count": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "status": {
    "id": 1,
    "label": "Active",
    "value": "active"
  },
  "supply": {
    "id": 1,
    "label": "AC",
    "value": "ac"
  },
  "tags": [
    "string"
  ],
  "type": {
    "id": 1,
    "label": "Primary",
    "value": "primary"
  },
  "voltage": -32768
}
```

<h3 id="dcimpower-feedsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerFeed](#schemapowerfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_update

<a id="opIddcim_power-feeds_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "amperage": 1,
    "comments": "string",
    "custom_fields": {},
    "max_utilization": 1,
    "name": "string",
    "phase": "single-phase",
    "power_panel": 0,
    "rack": 0,
    "status": "offline",
    "supply": "ac",
    "tags": [
      "string"
    ],
    "type": "primary",
    "voltage": -32768
  }'
```

`PUT /dcim/power-feeds/{id}/`

> Body parameter

```json
{
  "amperage": 1,
  "comments": "string",
  "custom_fields": {},
  "max_utilization": 1,
  "name": "string",
  "phase": "single-phase",
  "power_panel": 0,
  "rack": 0,
  "status": "offline",
  "supply": "ac",
  "tags": [
    "string"
  ],
  "type": "primary",
  "voltage": -32768
}
```

<h3 id="dcimpower-feedsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power feed.|
|body|body|[WritablePowerFeed](#schemawritablepowerfeed)|true|none|
|» amperage|body|integer|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» max_utilization|body|integer|false|Maximum permissible draw (percentage)|
|» name|body|string|true|none|
|» phase|body|string|false|none|
|» power_panel|body|integer|true|none|
|» rack|body|integer \| null|false|none|
|» status|body|string|false|none|
|» supply|body|string|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|none|
|» voltage|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» phase|single-phase|
|» phase|three-phase|
|» status|offline|
|» status|active|
|» status|planned|
|» status|failed|
|» supply|ac|
|» supply|dc|
|» type|primary|
|» type|redundant|

> Example responses

> 200 Response

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": {
    "id": 1,
    "label": "Single phase",
    "value": "single-phase"
  },
  "power_panel": {
    "id": 0,
    "name": "string",
    "powerfeed_count": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "status": {
    "id": 1,
    "label": "Active",
    "value": "active"
  },
  "supply": {
    "id": 1,
    "label": "AC",
    "value": "ac"
  },
  "tags": [
    "string"
  ],
  "type": {
    "id": 1,
    "label": "Primary",
    "value": "primary"
  },
  "voltage": -32768
}
```

<h3 id="dcimpower-feedsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerFeed](#schemapowerfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_delete

<a id="opIddcim_power-feeds_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-feeds/{id}/`

<h3 id="dcimpower-feedsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power feed.|

<h3 id="dcimpower-feedsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-feeds_partial_update

<a id="opIddcim_power-feeds_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-feeds/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "amperage": 1,
    "comments": "string",
    "custom_fields": {},
    "max_utilization": 1,
    "name": "string",
    "phase": "single-phase",
    "power_panel": 0,
    "rack": 0,
    "status": "offline",
    "supply": "ac",
    "tags": [
      "string"
    ],
    "type": "primary",
    "voltage": -32768
  }'
```

`PATCH /dcim/power-feeds/{id}/`

> Body parameter

```json
{
  "amperage": 1,
  "comments": "string",
  "custom_fields": {},
  "max_utilization": 1,
  "name": "string",
  "phase": "single-phase",
  "power_panel": 0,
  "rack": 0,
  "status": "offline",
  "supply": "ac",
  "tags": [
    "string"
  ],
  "type": "primary",
  "voltage": -32768
}
```

<h3 id="dcimpower-feedspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power feed.|
|body|body|[WritablePowerFeed](#schemawritablepowerfeed)|true|none|
|» amperage|body|integer|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» max_utilization|body|integer|false|Maximum permissible draw (percentage)|
|» name|body|string|true|none|
|» phase|body|string|false|none|
|» power_panel|body|integer|true|none|
|» rack|body|integer \| null|false|none|
|» status|body|string|false|none|
|» supply|body|string|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|none|
|» voltage|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» phase|single-phase|
|» phase|three-phase|
|» status|offline|
|» status|active|
|» status|planned|
|» status|failed|
|» supply|ac|
|» supply|dc|
|» type|primary|
|» type|redundant|

> Example responses

> 200 Response

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": {
    "id": 1,
    "label": "Single phase",
    "value": "single-phase"
  },
  "power_panel": {
    "id": 0,
    "name": "string",
    "powerfeed_count": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "status": {
    "id": 1,
    "label": "Active",
    "value": "active"
  },
  "supply": {
    "id": 1,
    "label": "AC",
    "value": "ac"
  },
  "tags": [
    "string"
  ],
  "type": {
    "id": 1,
    "label": "Primary",
    "value": "primary"
  },
  "voltage": -32768
}
```

<h3 id="dcimpower-feedspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerFeed](#schemapowerfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_list

<a id="opIddcim_power-outlet-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-outlet-templates/`

Call to super to allow for caching

<h3 id="dcimpower-outlet-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|feed_leg|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|feed_leg__n|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "feed_leg": {
        "label": "A",
        "value": "A"
      },
      "id": 0,
      "name": "string",
      "power_port": {
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "type": {
        "label": "C5",
        "value": "iec-60320-c5"
      }
    }
  ]
}
```

<h3 id="dcimpower-outlet-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-outlet-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerOutletTemplate](#schemapoweroutlettemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_create

<a id="opIddcim_power-outlet-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "type": "iec-60320-c5"
  }'
```

`POST /dcim/power-outlet-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outlet-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerOutletTemplate](#schemawritablepoweroutlettemplate)|true|none|
|» device_type|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outlet-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerOutletTemplate](#schemapoweroutlettemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_read

<a id="opIddcim_power-outlet-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-outlet-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-outlet-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outlet-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutletTemplate](#schemapoweroutlettemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_update

<a id="opIddcim_power-outlet-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "type": "iec-60320-c5"
  }'
```

`PUT /dcim/power-outlet-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outlet-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet template.|
|body|body|[WritablePowerOutletTemplate](#schemawritablepoweroutlettemplate)|true|none|
|» device_type|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outlet-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutletTemplate](#schemapoweroutlettemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_delete

<a id="opIddcim_power-outlet-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-outlet-templates/{id}/`

<h3 id="dcimpower-outlet-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet template.|

<h3 id="dcimpower-outlet-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlet-templates_partial_update

<a id="opIddcim_power-outlet-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlet-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "type": "iec-60320-c5"
  }'
```

`PATCH /dcim/power-outlet-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outlet-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet template.|
|body|body|[WritablePowerOutletTemplate](#schemawritablepoweroutlettemplate)|true|none|
|» device_type|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outlet-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutletTemplate](#schemapoweroutlettemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_list

<a id="opIddcim_power-outlets_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-outlets/`

Call to super to allow for caching

<h3 id="dcimpower-outletslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|feed_leg|query|string|false|none|
|description|query|string|false|none|
|connection_status|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|type|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|feed_leg__n|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|type__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "feed_leg": {
        "label": "A",
        "value": "A"
      },
      "id": 0,
      "name": "string",
      "power_port": {
        "cable": 0,
        "connection_status": {
          "label": "Not Connected",
          "value": false
        },
        "device": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "tags": [
        "string"
      ],
      "type": {
        "label": "C5",
        "value": "iec-60320-c5"
      }
    }
  ]
}
```

<h3 id="dcimpower-outletslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-outletslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerOutlet](#schemapoweroutlet)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_create

<a id="opIddcim_power-outlets_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "tags": [
      "string"
    ],
    "type": "iec-60320-c5"
  }'
```

`POST /dcim/power-outlets/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "tags": [
    "string"
  ],
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outletscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerOutlet](#schemawritablepoweroutlet)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outletscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerOutlet](#schemapoweroutlet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_read

<a id="opIddcim_power-outlets_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-outlets/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-outletsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outletsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutlet](#schemapoweroutlet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_update

<a id="opIddcim_power-outlets_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "tags": [
      "string"
    ],
    "type": "iec-60320-c5"
  }'
```

`PUT /dcim/power-outlets/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "tags": [
    "string"
  ],
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outletsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet.|
|body|body|[WritablePowerOutlet](#schemawritablepoweroutlet)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outletsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutlet](#schemapoweroutlet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_delete

<a id="opIddcim_power-outlets_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-outlets/{id}/`

<h3 id="dcimpower-outletsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet.|

<h3 id="dcimpower-outletsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_partial_update

<a id="opIddcim_power-outlets_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "feed_leg": "A",
    "name": "string",
    "power_port": 0,
    "tags": [
      "string"
    ],
    "type": "iec-60320-c5"
  }'
```

`PATCH /dcim/power-outlets/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "feed_leg": "A",
  "name": "string",
  "power_port": 0,
  "tags": [
    "string"
  ],
  "type": "iec-60320-c5"
}
```

<h3 id="dcimpower-outletspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet.|
|body|body|[WritablePowerOutlet](#schemawritablepoweroutlet)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» feed_leg|body|string|false|Phase (for three-phase feeds)|
|» name|body|string|true|none|
|» power_port|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» feed_leg|A|
|» feed_leg|B|
|» feed_leg|C|
|» type|iec-60320-c5|
|» type|iec-60320-c7|
|» type|iec-60320-c13|
|» type|iec-60320-c15|
|» type|iec-60320-c19|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15r|
|» type|nema-5-15r|
|» type|nema-5-20r|
|» type|nema-5-30r|
|» type|nema-5-50r|
|» type|nema-6-15r|
|» type|nema-6-20r|
|» type|nema-6-30r|
|» type|nema-6-50r|
|» type|nema-10-30r|
|» type|nema-10-50r|
|» type|nema-14-20r|
|» type|nema-14-30r|
|» type|nema-14-50r|
|» type|nema-14-60r|
|» type|nema-l1-15r|
|» type|nema-l5-15r|
|» type|nema-l5-20r|
|» type|nema-l5-30r|
|» type|nema-l5-50r|
|» type|nema-l6-15r|
|» type|nema-l6-20r|
|» type|nema-l6-30r|
|» type|nema-l6-50r|
|» type|nema-l10-30r|
|» type|nema-l14-20r|
|» type|nema-l14-30r|
|» type|nema-l14-50r|
|» type|nema-l14-60r|
|» type|nema-l21-20r|
|» type|nema-l21-30r|
|» type|CS6360C|
|» type|CS6364C|
|» type|CS8164C|
|» type|CS8264C|
|» type|CS8364C|
|» type|CS8464C|
|» type|ita-e|
|» type|ita-f|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|
|» type|hdot-cx|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outletspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutlet](#schemapoweroutlet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-outlets_trace

<a id="opIddcim_power-outlets_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/power-outlets/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-outlets/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimpower-outletstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power outlet.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

<h3 id="dcimpower-outletstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerOutlet](#schemapoweroutlet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_list

<a id="opIddcim_power-panels_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-panels/`

Call to super to allow for caching

<h3 id="dcimpower-panelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|rack_group_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|rack_group_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "name": "string",
      "powerfeed_count": 0,
      "rack_group": {
        "id": 0,
        "name": "string",
        "rack_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="dcimpower-panelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-panelslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerPanel](#schemapowerpanel)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_create

<a id="opIddcim_power-panels_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "rack_group": 0,
    "site": 0
  }'
```

`POST /dcim/power-panels/`

> Body parameter

```json
{
  "name": "string",
  "rack_group": 0,
  "site": 0
}
```

<h3 id="dcimpower-panelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerPanel](#schemawritablepowerpanel)|true|none|
|» name|body|string|true|none|
|» rack_group|body|integer \| null|false|none|
|» site|body|integer|true|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="dcimpower-panelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerPanel](#schemapowerpanel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_read

<a id="opIddcim_power-panels_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-panels/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-panelsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power panel.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="dcimpower-panelsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPanel](#schemapowerpanel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_update

<a id="opIddcim_power-panels_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "rack_group": 0,
    "site": 0
  }'
```

`PUT /dcim/power-panels/{id}/`

> Body parameter

```json
{
  "name": "string",
  "rack_group": 0,
  "site": 0
}
```

<h3 id="dcimpower-panelsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power panel.|
|body|body|[WritablePowerPanel](#schemawritablepowerpanel)|true|none|
|» name|body|string|true|none|
|» rack_group|body|integer \| null|false|none|
|» site|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="dcimpower-panelsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPanel](#schemapowerpanel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_delete

<a id="opIddcim_power-panels_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-panels/{id}/`

<h3 id="dcimpower-panelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power panel.|

<h3 id="dcimpower-panelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-panels_partial_update

<a id="opIddcim_power-panels_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-panels/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "rack_group": 0,
    "site": 0
  }'
```

`PATCH /dcim/power-panels/{id}/`

> Body parameter

```json
{
  "name": "string",
  "rack_group": 0,
  "site": 0
}
```

<h3 id="dcimpower-panelspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power panel.|
|body|body|[WritablePowerPanel](#schemawritablepowerpanel)|true|none|
|» name|body|string|true|none|
|» rack_group|body|integer \| null|false|none|
|» site|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="dcimpower-panelspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPanel](#schemapowerpanel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_list

<a id="opIddcim_power-port-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-port-templates/`

Call to super to allow for caching

<h3 id="dcimpower-port-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|maximum_draw|query|string|false|none|
|allocated_draw|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|maximum_draw__n|query|string|false|none|
|maximum_draw__lte|query|string|false|none|
|maximum_draw__lt|query|string|false|none|
|maximum_draw__gte|query|string|false|none|
|maximum_draw__gt|query|string|false|none|
|allocated_draw__n|query|string|false|none|
|allocated_draw__lte|query|string|false|none|
|allocated_draw__lt|query|string|false|none|
|allocated_draw__gte|query|string|false|none|
|allocated_draw__gt|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "allocated_draw": 1,
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "maximum_draw": 1,
      "name": "string",
      "type": {
        "label": "C6",
        "value": "iec-60320-c6"
      }
    }
  ]
}
```

<h3 id="dcimpower-port-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-port-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerPortTemplate](#schemapowerporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_create

<a id="opIddcim_power-port-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "device_type": 0,
    "maximum_draw": 1,
    "name": "string",
    "type": "iec-60320-c6"
  }'
```

`POST /dcim/power-port-templates/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "device_type": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-port-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerPortTemplate](#schemawritablepowerporttemplate)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» device_type|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 201 Response

```json
{
  "allocated_draw": 1,
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-port-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerPortTemplate](#schemapowerporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_read

<a id="opIddcim_power-port-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-port-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-port-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port template.|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-port-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPortTemplate](#schemapowerporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_update

<a id="opIddcim_power-port-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "device_type": 0,
    "maximum_draw": 1,
    "name": "string",
    "type": "iec-60320-c6"
  }'
```

`PUT /dcim/power-port-templates/{id}/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "device_type": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-port-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port template.|
|body|body|[WritablePowerPortTemplate](#schemawritablepowerporttemplate)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» device_type|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-port-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPortTemplate](#schemapowerporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_delete

<a id="opIddcim_power-port-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-port-templates/{id}/`

<h3 id="dcimpower-port-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port template.|

<h3 id="dcimpower-port-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-port-templates_partial_update

<a id="opIddcim_power-port-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-port-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "device_type": 0,
    "maximum_draw": 1,
    "name": "string",
    "type": "iec-60320-c6"
  }'
```

`PATCH /dcim/power-port-templates/{id}/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "device_type": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-port-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port template.|
|body|body|[WritablePowerPortTemplate](#schemawritablepowerporttemplate)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» device_type|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-port-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPortTemplate](#schemapowerporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_list

<a id="opIddcim_power-ports_list"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-ports/`

Call to super to allow for caching

<h3 id="dcimpower-portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|maximum_draw|query|string|false|none|
|allocated_draw|query|string|false|none|
|description|query|string|false|none|
|connection_status|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|type|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|maximum_draw__n|query|string|false|none|
|maximum_draw__lte|query|string|false|none|
|maximum_draw__lt|query|string|false|none|
|maximum_draw__gte|query|string|false|none|
|maximum_draw__gt|query|string|false|none|
|allocated_draw__n|query|string|false|none|
|allocated_draw__lte|query|string|false|none|
|allocated_draw__lt|query|string|false|none|
|allocated_draw__gte|query|string|false|none|
|allocated_draw__gt|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|connection_status__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|type__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "allocated_draw": 1,
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "connected_endpoint": {
        "property1": "string",
        "property2": "string"
      },
      "connected_endpoint_type": "string",
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "maximum_draw": 1,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": {
        "label": "C6",
        "value": "iec-60320-c6"
      }
    }
  ]
}
```

<h3 id="dcimpower-portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimpower-portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PowerPort](#schemapowerport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_create

<a id="opIddcim_power-ports_create"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "maximum_draw": 1,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "iec-60320-c6"
  }'
```

`POST /dcim/power-ports/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-portscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePowerPort](#schemawritablepowerport)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 201 Response

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-portscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[PowerPort](#schemapowerport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_read

<a id="opIddcim_power-ports_read"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-ports/{id}/`

Call to super to allow for caching

<h3 id="dcimpower-portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port.|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPort](#schemapowerport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_update

<a id="opIddcim_power-ports_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "maximum_draw": 1,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "iec-60320-c6"
  }'
```

`PUT /dcim/power-ports/{id}/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-portsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port.|
|body|body|[WritablePowerPort](#schemawritablepowerport)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-portsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPort](#schemapowerport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_delete

<a id="opIddcim_power-ports_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/power-ports/{id}/`

<h3 id="dcimpower-portsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port.|

<h3 id="dcimpower-portsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_partial_update

<a id="opIddcim_power-ports_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allocated_draw": 1,
    "cable": {
      "label": "string"
    },
    "connection_status": false,
    "description": "string",
    "device": 0,
    "maximum_draw": 1,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "iec-60320-c6"
  }'
```

`PATCH /dcim/power-ports/{id}/`

> Body parameter

```json
{
  "allocated_draw": 1,
  "cable": {
    "label": "string"
  },
  "connection_status": false,
  "description": "string",
  "device": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "iec-60320-c6"
}
```

<h3 id="dcimpower-portspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port.|
|body|body|[WritablePowerPort](#schemawritablepowerport)|true|none|
|» allocated_draw|body|integer \| null|false|Allocated power draw (watts)|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» connection_status|body|boolean|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» maximum_draw|body|integer \| null|false|Maximum power draw (watts)|
|» name|body|string|true|none|
|» tags|body|[string]|false|none|
|» type|body|string|false|Physical port type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|false|
|» connection_status|true|
|» type|iec-60320-c6|
|» type|iec-60320-c8|
|» type|iec-60320-c14|
|» type|iec-60320-c16|
|» type|iec-60320-c20|
|» type|iec-60309-p-n-e-4h|
|» type|iec-60309-p-n-e-6h|
|» type|iec-60309-p-n-e-9h|
|» type|iec-60309-2p-e-4h|
|» type|iec-60309-2p-e-6h|
|» type|iec-60309-2p-e-9h|
|» type|iec-60309-3p-e-4h|
|» type|iec-60309-3p-e-6h|
|» type|iec-60309-3p-e-9h|
|» type|iec-60309-3p-n-e-4h|
|» type|iec-60309-3p-n-e-6h|
|» type|iec-60309-3p-n-e-9h|
|» type|nema-1-15p|
|» type|nema-5-15p|
|» type|nema-5-20p|
|» type|nema-5-30p|
|» type|nema-5-50p|
|» type|nema-6-15p|
|» type|nema-6-20p|
|» type|nema-6-30p|
|» type|nema-6-50p|
|» type|nema-10-30p|
|» type|nema-10-50p|
|» type|nema-14-20p|
|» type|nema-14-30p|
|» type|nema-14-50p|
|» type|nema-14-60p|
|» type|nema-l1-15p|
|» type|nema-l5-15p|
|» type|nema-l5-20p|
|» type|nema-l5-30p|
|» type|nema-l5-50p|
|» type|nema-l6-15p|
|» type|nema-l6-20p|
|» type|nema-l6-30p|
|» type|nema-l6-50p|
|» type|nema-l10-30p|
|» type|nema-l14-20p|
|» type|nema-l14-30p|
|» type|nema-l14-50p|
|» type|nema-l14-60p|
|» type|nema-l21-20p|
|» type|nema-l21-30p|
|» type|cs6361c|
|» type|cs6365c|
|» type|cs8165c|
|» type|cs8265c|
|» type|cs8365c|
|» type|cs8465c|
|» type|ita-e|
|» type|ita-f|
|» type|ita-ef|
|» type|ita-g|
|» type|ita-h|
|» type|ita-i|
|» type|ita-j|
|» type|ita-k|
|» type|ita-l|
|» type|ita-m|
|» type|ita-n|
|» type|ita-o|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-portspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPort](#schemapowerport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_power-ports_trace

<a id="opIddcim_power-ports_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/power-ports/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/power-ports/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimpower-portstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this power port.|

> Example responses

> 200 Response

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

<h3 id="dcimpower-portstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PowerPort](#schemapowerport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_list

<a id="opIddcim_rack-groups_list"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-groups/`

Call to super to allow for caching

<h3 id="dcimrack-groupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|parent_id|query|string|false|none|
|parent|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|parent_id__n|query|string|false|none|
|parent__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "parent": {
        "id": 0,
        "name": "string",
        "rack_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "rack_count": 0,
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "slug": "string"
    }
  ]
}
```

<h3 id="dcimrack-groupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrack-groupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RackGroup](#schemarackgroup)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_create

<a id="opIddcim_rack-groups_create"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "site": 0,
    "slug": "string"
  }'
```

`POST /dcim/rack-groups/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "site": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-groupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRackGroup](#schemawritablerackgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» site|body|integer|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "rack_count": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string"
}
```

<h3 id="dcimrack-groupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RackGroup](#schemarackgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_read

<a id="opIddcim_rack-groups_read"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-groups/{id}/`

Call to super to allow for caching

<h3 id="dcimrack-groupsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack group.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "rack_count": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string"
}
```

<h3 id="dcimrack-groupsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackGroup](#schemarackgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_update

<a id="opIddcim_rack-groups_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "site": 0,
    "slug": "string"
  }'
```

`PUT /dcim/rack-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "site": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-groupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack group.|
|body|body|[WritableRackGroup](#schemawritablerackgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» site|body|integer|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "rack_count": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string"
}
```

<h3 id="dcimrack-groupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackGroup](#schemarackgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_delete

<a id="opIddcim_rack-groups_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/rack-groups/{id}/`

<h3 id="dcimrack-groupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack group.|

<h3 id="dcimrack-groupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-groups_partial_update

<a id="opIddcim_rack-groups_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-groups/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "site": 0,
    "slug": "string"
  }'
```

`PATCH /dcim/rack-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "site": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-groupspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack group.|
|body|body|[WritableRackGroup](#schemawritablerackgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» site|body|integer|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "rack_count": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string"
}
```

<h3 id="dcimrack-groupspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackGroup](#schemarackgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_list

<a id="opIddcim_rack-reservations_list"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-reservations/`

Call to super to allow for caching

<h3 id="dcimrack-reservationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|created|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|q|query|string|false|none|
|rack_id|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|group_id|query|string|false|none|
|group|query|string|false|none|
|user_id|query|string|false|none|
|user|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|created__n|query|string|false|none|
|created__lte|query|string|false|none|
|created__lt|query|string|false|none|
|created__gte|query|string|false|none|
|created__gt|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|rack_id__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|group_id__n|query|string|false|none|
|group__n|query|string|false|none|
|user_id__n|query|string|false|none|
|user__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "description": "string",
      "id": 0,
      "rack": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "units": [
        0
      ],
      "user": {
        "id": 0,
        "username": "string"
      }
    }
  ]
}
```

<h3 id="dcimrack-reservationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrack-reservationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RackReservation](#schemarackreservation)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_create

<a id="opIddcim_rack-reservations_create"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "rack": 0,
    "tenant": 0,
    "units": [
      0
    ],
    "user": 0
  }'
```

`POST /dcim/rack-reservations/`

> Body parameter

```json
{
  "description": "string",
  "rack": 0,
  "tenant": 0,
  "units": [
    0
  ],
  "user": 0
}
```

<h3 id="dcimrack-reservationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRackReservation](#schemawritablerackreservation)|true|none|
|» description|body|string|true|none|
|» rack|body|integer|true|none|
|» tenant|body|integer \| null|false|none|
|» units|body|[integer]|true|none|
|» user|body|integer|true|none|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "units": [
    0
  ],
  "user": {
    "id": 0,
    "username": "string"
  }
}
```

<h3 id="dcimrack-reservationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RackReservation](#schemarackreservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_read

<a id="opIddcim_rack-reservations_read"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-reservations/{id}/`

Call to super to allow for caching

<h3 id="dcimrack-reservationsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack reservation.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "units": [
    0
  ],
  "user": {
    "id": 0,
    "username": "string"
  }
}
```

<h3 id="dcimrack-reservationsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackReservation](#schemarackreservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_update

<a id="opIddcim_rack-reservations_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "rack": 0,
    "tenant": 0,
    "units": [
      0
    ],
    "user": 0
  }'
```

`PUT /dcim/rack-reservations/{id}/`

> Body parameter

```json
{
  "description": "string",
  "rack": 0,
  "tenant": 0,
  "units": [
    0
  ],
  "user": 0
}
```

<h3 id="dcimrack-reservationsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack reservation.|
|body|body|[WritableRackReservation](#schemawritablerackreservation)|true|none|
|» description|body|string|true|none|
|» rack|body|integer|true|none|
|» tenant|body|integer \| null|false|none|
|» units|body|[integer]|true|none|
|» user|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "units": [
    0
  ],
  "user": {
    "id": 0,
    "username": "string"
  }
}
```

<h3 id="dcimrack-reservationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackReservation](#schemarackreservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_delete

<a id="opIddcim_rack-reservations_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/rack-reservations/{id}/`

<h3 id="dcimrack-reservationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack reservation.|

<h3 id="dcimrack-reservationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-reservations_partial_update

<a id="opIddcim_rack-reservations_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-reservations/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "rack": 0,
    "tenant": 0,
    "units": [
      0
    ],
    "user": 0
  }'
```

`PATCH /dcim/rack-reservations/{id}/`

> Body parameter

```json
{
  "description": "string",
  "rack": 0,
  "tenant": 0,
  "units": [
    0
  ],
  "user": 0
}
```

<h3 id="dcimrack-reservationspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack reservation.|
|body|body|[WritableRackReservation](#schemawritablerackreservation)|true|none|
|» description|body|string|true|none|
|» rack|body|integer|true|none|
|» tenant|body|integer \| null|false|none|
|» units|body|[integer]|true|none|
|» user|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "units": [
    0
  ],
  "user": {
    "id": 0,
    "username": "string"
  }
}
```

<h3 id="dcimrack-reservationspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackReservation](#schemarackreservation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_list

<a id="opIddcim_rack-roles_list"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-roles/`

Call to super to allow for caching

<h3 id="dcimrack-roleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|color|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|color__n|query|string|false|none|
|color__ic|query|string|false|none|
|color__nic|query|string|false|none|
|color__iew|query|string|false|none|
|color__niew|query|string|false|none|
|color__isw|query|string|false|none|
|color__nisw|query|string|false|none|
|color__ie|query|string|false|none|
|color__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "color": "string",
      "description": "string",
      "id": 0,
      "name": "string",
      "rack_count": 0,
      "slug": "string"
    }
  ]
}
```

<h3 id="dcimrack-roleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrack-roleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RackRole](#schemarackrole)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_create

<a id="opIddcim_rack-roles_create"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /dcim/rack-roles/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimrack-rolescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RackRole](#schemarackrole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-rolescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RackRole](#schemarackrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_read

<a id="opIddcim_rack-roles_read"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rack-roles/{id}/`

Call to super to allow for caching

<h3 id="dcimrack-rolesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack role.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-rolesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackRole](#schemarackrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_update

<a id="opIddcim_rack-roles_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /dcim/rack-roles/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimrack-rolesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack role.|
|body|body|[RackRole](#schemarackrole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-rolesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackRole](#schemarackrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_delete

<a id="opIddcim_rack-roles_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/rack-roles/{id}/`

<h3 id="dcimrack-rolesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack role.|

<h3 id="dcimrack-rolesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rack-roles_partial_update

<a id="opIddcim_rack-roles_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rack-roles/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /dcim/rack-roles/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="dcimrack-rolespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack role.|
|body|body|[RackRole](#schemarackrole)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string"
}
```

<h3 id="dcimrack-rolespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RackRole](#schemarackrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_list

<a id="opIddcim_racks_list"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/racks/`

Call to super to allow for caching

<h3 id="dcimrackslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|facility_id|query|string|false|none|
|asset_tag|query|string|false|none|
|type|query|string|false|none|
|width|query|string|false|none|
|u_height|query|string|false|none|
|desc_units|query|string|false|none|
|outer_width|query|string|false|none|
|outer_depth|query|string|false|none|
|outer_unit|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|group_id|query|string|false|none|
|group|query|string|false|none|
|status|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|serial|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|facility_id__n|query|string|false|none|
|facility_id__ic|query|string|false|none|
|facility_id__nic|query|string|false|none|
|facility_id__iew|query|string|false|none|
|facility_id__niew|query|string|false|none|
|facility_id__isw|query|string|false|none|
|facility_id__nisw|query|string|false|none|
|facility_id__ie|query|string|false|none|
|facility_id__nie|query|string|false|none|
|asset_tag__n|query|string|false|none|
|asset_tag__ic|query|string|false|none|
|asset_tag__nic|query|string|false|none|
|asset_tag__iew|query|string|false|none|
|asset_tag__niew|query|string|false|none|
|asset_tag__isw|query|string|false|none|
|asset_tag__nisw|query|string|false|none|
|asset_tag__ie|query|string|false|none|
|asset_tag__nie|query|string|false|none|
|type__n|query|string|false|none|
|width__n|query|string|false|none|
|u_height__n|query|string|false|none|
|u_height__lte|query|string|false|none|
|u_height__lt|query|string|false|none|
|u_height__gte|query|string|false|none|
|u_height__gt|query|string|false|none|
|outer_width__n|query|string|false|none|
|outer_width__lte|query|string|false|none|
|outer_width__lt|query|string|false|none|
|outer_width__gte|query|string|false|none|
|outer_width__gt|query|string|false|none|
|outer_depth__n|query|string|false|none|
|outer_depth__lte|query|string|false|none|
|outer_depth__lt|query|string|false|none|
|outer_depth__gte|query|string|false|none|
|outer_depth__gt|query|string|false|none|
|outer_unit__n|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|group_id__n|query|string|false|none|
|group__n|query|string|false|none|
|status__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "asset_tag": "string",
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "desc_units": true,
      "device_count": 0,
      "display_name": "string",
      "facility_id": "string",
      "group": {
        "id": 0,
        "name": "string",
        "rack_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "outer_depth": 0,
      "outer_unit": {
        "label": "Millimeters",
        "value": "mm"
      },
      "outer_width": 0,
      "powerfeed_count": 0,
      "role": {
        "id": 0,
        "name": "string",
        "rack_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "serial": "string",
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Reserved",
        "value": "reserved"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "type": {
        "label": "2-post frame",
        "value": "2-post-frame"
      },
      "u_height": 1,
      "width": {
        "label": "10 inches",
        "value": 10
      }
    }
  ]
}
```

<h3 id="dcimrackslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrackslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Rack](#schemarack)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_create

<a id="opIddcim_racks_create"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "comments": "string",
    "custom_fields": {},
    "desc_units": true,
    "facility_id": "string",
    "group": 0,
    "name": "string",
    "outer_depth": 0,
    "outer_unit": "mm",
    "outer_width": 0,
    "role": 0,
    "serial": "string",
    "site": 0,
    "status": "reserved",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": "2-post-frame",
    "u_height": 1,
    "width": 10
  }'
```

`POST /dcim/racks/`

> Body parameter

```json
{
  "asset_tag": "string",
  "comments": "string",
  "custom_fields": {},
  "desc_units": true,
  "facility_id": "string",
  "group": 0,
  "name": "string",
  "outer_depth": 0,
  "outer_unit": "mm",
  "outer_width": 0,
  "role": 0,
  "serial": "string",
  "site": 0,
  "status": "reserved",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": "2-post-frame",
  "u_height": 1,
  "width": 10
}
```

<h3 id="dcimrackscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRack](#schemawritablerack)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this rack|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» desc_units|body|boolean|false|Units are numbered top-to-bottom|
|» facility_id|body|string \| null|false|Locally-assigned identifier|
|» group|body|integer \| null|false|Assigned group|
|» name|body|string|true|none|
|» outer_depth|body|integer \| null|false|Outer dimension of rack (depth)|
|» outer_unit|body|string|false|none|
|» outer_width|body|integer \| null|false|Outer dimension of rack (width)|
|» role|body|integer \| null|false|Functional role|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|string|false|none|
|» u_height|body|integer|false|Height in rack units|
|» width|body|integer|false|Rail-to-rail width|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» outer_unit|mm|
|» outer_unit|in|
|» status|reserved|
|» status|available|
|» status|planned|
|» status|active|
|» status|deprecated|
|» type|2-post-frame|
|» type|4-post-frame|
|» type|4-post-cabinet|
|» type|wall-frame|
|» type|wall-cabinet|
|» width|10|
|» width|19|
|» width|21|
|» width|23|

> Example responses

> 201 Response

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": {
    "label": "Millimeters",
    "value": "mm"
  },
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Reserved",
    "value": "reserved"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "2-post frame",
    "value": "2-post-frame"
  },
  "u_height": 1,
  "width": {
    "label": "10 inches",
    "value": 10
  }
}
```

<h3 id="dcimrackscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Rack](#schemarack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_read

<a id="opIddcim_racks_read"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/racks/{id}/`

Call to super to allow for caching

<h3 id="dcimracksread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack.|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": {
    "label": "Millimeters",
    "value": "mm"
  },
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Reserved",
    "value": "reserved"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "2-post frame",
    "value": "2-post-frame"
  },
  "u_height": 1,
  "width": {
    "label": "10 inches",
    "value": 10
  }
}
```

<h3 id="dcimracksread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Rack](#schemarack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_update

<a id="opIddcim_racks_update"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "comments": "string",
    "custom_fields": {},
    "desc_units": true,
    "facility_id": "string",
    "group": 0,
    "name": "string",
    "outer_depth": 0,
    "outer_unit": "mm",
    "outer_width": 0,
    "role": 0,
    "serial": "string",
    "site": 0,
    "status": "reserved",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": "2-post-frame",
    "u_height": 1,
    "width": 10
  }'
```

`PUT /dcim/racks/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "comments": "string",
  "custom_fields": {},
  "desc_units": true,
  "facility_id": "string",
  "group": 0,
  "name": "string",
  "outer_depth": 0,
  "outer_unit": "mm",
  "outer_width": 0,
  "role": 0,
  "serial": "string",
  "site": 0,
  "status": "reserved",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": "2-post-frame",
  "u_height": 1,
  "width": 10
}
```

<h3 id="dcimracksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack.|
|body|body|[WritableRack](#schemawritablerack)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this rack|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» desc_units|body|boolean|false|Units are numbered top-to-bottom|
|» facility_id|body|string \| null|false|Locally-assigned identifier|
|» group|body|integer \| null|false|Assigned group|
|» name|body|string|true|none|
|» outer_depth|body|integer \| null|false|Outer dimension of rack (depth)|
|» outer_unit|body|string|false|none|
|» outer_width|body|integer \| null|false|Outer dimension of rack (width)|
|» role|body|integer \| null|false|Functional role|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|string|false|none|
|» u_height|body|integer|false|Height in rack units|
|» width|body|integer|false|Rail-to-rail width|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» outer_unit|mm|
|» outer_unit|in|
|» status|reserved|
|» status|available|
|» status|planned|
|» status|active|
|» status|deprecated|
|» type|2-post-frame|
|» type|4-post-frame|
|» type|4-post-cabinet|
|» type|wall-frame|
|» type|wall-cabinet|
|» width|10|
|» width|19|
|» width|21|
|» width|23|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": {
    "label": "Millimeters",
    "value": "mm"
  },
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Reserved",
    "value": "reserved"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "2-post frame",
    "value": "2-post-frame"
  },
  "u_height": 1,
  "width": {
    "label": "10 inches",
    "value": 10
  }
}
```

<h3 id="dcimracksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Rack](#schemarack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_delete

<a id="opIddcim_racks_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/racks/{id}/`

<h3 id="dcimracksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack.|

<h3 id="dcimracksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_partial_update

<a id="opIddcim_racks_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asset_tag": "string",
    "comments": "string",
    "custom_fields": {},
    "desc_units": true,
    "facility_id": "string",
    "group": 0,
    "name": "string",
    "outer_depth": 0,
    "outer_unit": "mm",
    "outer_width": 0,
    "role": 0,
    "serial": "string",
    "site": 0,
    "status": "reserved",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": "2-post-frame",
    "u_height": 1,
    "width": 10
  }'
```

`PATCH /dcim/racks/{id}/`

> Body parameter

```json
{
  "asset_tag": "string",
  "comments": "string",
  "custom_fields": {},
  "desc_units": true,
  "facility_id": "string",
  "group": 0,
  "name": "string",
  "outer_depth": 0,
  "outer_unit": "mm",
  "outer_width": 0,
  "role": 0,
  "serial": "string",
  "site": 0,
  "status": "reserved",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": "2-post-frame",
  "u_height": 1,
  "width": 10
}
```

<h3 id="dcimrackspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rack.|
|body|body|[WritableRack](#schemawritablerack)|true|none|
|» asset_tag|body|string \| null|false|A unique tag used to identify this rack|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» desc_units|body|boolean|false|Units are numbered top-to-bottom|
|» facility_id|body|string \| null|false|Locally-assigned identifier|
|» group|body|integer \| null|false|Assigned group|
|» name|body|string|true|none|
|» outer_depth|body|integer \| null|false|Outer dimension of rack (depth)|
|» outer_unit|body|string|false|none|
|» outer_width|body|integer \| null|false|Outer dimension of rack (width)|
|» role|body|integer \| null|false|Functional role|
|» serial|body|string|false|none|
|» site|body|integer|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|string|false|none|
|» u_height|body|integer|false|Height in rack units|
|» width|body|integer|false|Rail-to-rail width|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» outer_unit|mm|
|» outer_unit|in|
|» status|reserved|
|» status|available|
|» status|planned|
|» status|active|
|» status|deprecated|
|» type|2-post-frame|
|» type|4-post-frame|
|» type|4-post-cabinet|
|» type|wall-frame|
|» type|wall-cabinet|
|» width|10|
|» width|19|
|» width|21|
|» width|23|

> Example responses

> 200 Response

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": {
    "label": "Millimeters",
    "value": "mm"
  },
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Reserved",
    "value": "reserved"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "2-post frame",
    "value": "2-post-frame"
  },
  "u_height": 1,
  "width": {
    "label": "10 inches",
    "value": 10
  }
}
```

<h3 id="dcimrackspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Rack](#schemarack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_racks_elevation

<a id="opIddcim_racks_elevation"></a>

> Code samples

```bash
curl https://example.com/dcim/racks/0/elevation/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/racks/{id}/elevation/`

Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.

<h3 id="dcimrackselevation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|none|
|face|query|string|false|none|
|render|query|string|false|none|
|unit_width|query|integer|false|none|
|unit_height|query|integer|false|none|
|legend_width|query|integer|false|none|
|exclude|query|integer|false|none|
|expand_devices|query|boolean|false|none|
|include_images|query|boolean|false|none|
|id|path|integer|true|A unique integer value identifying this rack.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|face|front|
|face|rear|
|render|json|
|render|svg|

> Example responses

> 200 Response

```json
[
  {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "face": {
      "label": "Front",
      "value": "front"
    },
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="dcimrackselevation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrackselevation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RackUnit](#schemarackunit)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_list

<a id="opIddcim_rear-port-templates_list"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rear-port-templates/`

Call to super to allow for caching

<h3 id="dcimrear-port-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|positions|query|string|false|none|
|q|query|string|false|none|
|devicetype_id|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|positions__n|query|string|false|none|
|positions__lte|query|string|false|none|
|positions__lt|query|string|false|none|
|positions__gte|query|string|false|none|
|positions__gt|query|string|false|none|
|devicetype_id__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "device_type": {
        "device_count": 0,
        "display_name": "string",
        "id": 0,
        "manufacturer": {
          "devicetype_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        },
        "model": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "positions": 1,
      "type": {
        "label": "8P8C",
        "value": "8p8c"
      }
    }
  ]
}
```

<h3 id="dcimrear-port-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrear-port-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RearPortTemplate](#schemarearporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_create

<a id="opIddcim_rear-port-templates_create"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "positions": 1,
    "type": "8p8c"
  }'
```

`POST /dcim/rear-port-templates/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "positions": 1,
  "type": "8p8c"
}
```

<h3 id="dcimrear-port-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRearPortTemplate](#schemawritablerearporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 201 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-port-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RearPortTemplate](#schemarearporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_read

<a id="opIddcim_rear-port-templates_read"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rear-port-templates/{id}/`

Call to super to allow for caching

<h3 id="dcimrear-port-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port template.|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-port-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPortTemplate](#schemarearporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_update

<a id="opIddcim_rear-port-templates_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "positions": 1,
    "type": "8p8c"
  }'
```

`PUT /dcim/rear-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "positions": 1,
  "type": "8p8c"
}
```

<h3 id="dcimrear-port-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port template.|
|body|body|[WritableRearPortTemplate](#schemawritablerearporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-port-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPortTemplate](#schemarearporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_delete

<a id="opIddcim_rear-port-templates_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/rear-port-templates/{id}/`

<h3 id="dcimrear-port-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port template.|

<h3 id="dcimrear-port-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-port-templates_partial_update

<a id="opIddcim_rear-port-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-port-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "device_type": 0,
    "name": "string",
    "positions": 1,
    "type": "8p8c"
  }'
```

`PATCH /dcim/rear-port-templates/{id}/`

> Body parameter

```json
{
  "device_type": 0,
  "name": "string",
  "positions": 1,
  "type": "8p8c"
}
```

<h3 id="dcimrear-port-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port template.|
|body|body|[WritableRearPortTemplate](#schemawritablerearporttemplate)|true|none|
|» device_type|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-port-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPortTemplate](#schemarearporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_list

<a id="opIddcim_rear-ports_list"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rear-ports/`

Call to super to allow for caching

<h3 id="dcimrear-portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|type|query|string|false|none|
|positions|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|cabled|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|type__n|query|string|false|none|
|positions__n|query|string|false|none|
|positions__lte|query|string|false|none|
|positions__lt|query|string|false|none|
|positions__gte|query|string|false|none|
|positions__gt|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cable": {
        "id": 0,
        "label": "string",
        "url": "http://example.com"
      },
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "positions": 1,
      "tags": [
        "string"
      ],
      "type": {
        "label": "8P8C",
        "value": "8p8c"
      }
    }
  ]
}
```

<h3 id="dcimrear-portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimrear-portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RearPort](#schemarearport)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_create

<a id="opIddcim_rear-ports_create"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "positions": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`POST /dcim/rear-ports/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimrear-portscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRearPort](#schemawritablerearport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 201 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-portscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RearPort](#schemarearport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_read

<a id="opIddcim_rear-ports_read"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rear-ports/{id}/`

Call to super to allow for caching

<h3 id="dcimrear-portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPort](#schemarearport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_update

<a id="opIddcim_rear-ports_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "positions": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`PUT /dcim/rear-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimrear-portsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port.|
|body|body|[WritableRearPort](#schemawritablerearport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-portsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPort](#schemarearport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_delete

<a id="opIddcim_rear-ports_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/rear-ports/{id}/`

<h3 id="dcimrear-portsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port.|

<h3 id="dcimrear-portsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_partial_update

<a id="opIddcim_rear-ports_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cable": {
      "label": "string"
    },
    "description": "string",
    "device": 0,
    "name": "string",
    "positions": 1,
    "tags": [
      "string"
    ],
    "type": "8p8c"
  }'
```

`PATCH /dcim/rear-ports/{id}/`

> Body parameter

```json
{
  "cable": {
    "label": "string"
  },
  "description": "string",
  "device": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

<h3 id="dcimrear-portspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port.|
|body|body|[WritableRearPort](#schemawritablerearport)|true|none|
|» cable|body|[NestedCable](#schemanestedcable)|false|none|
|» description|body|string|false|none|
|» device|body|integer|true|none|
|» name|body|string|true|none|
|» positions|body|integer|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|8p8c|
|» type|110-punch|
|» type|bnc|
|» type|mrj21|
|» type|fc|
|» type|lc|
|» type|lc-apc|
|» type|lsh|
|» type|lsh-apc|
|» type|mpo|
|» type|mtrj|
|» type|sc|
|» type|sc-apc|
|» type|st|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-portspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPort](#schemarearport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_rear-ports_trace

<a id="opIddcim_rear-ports_trace"></a>

> Code samples

```bash
curl https://example.com/dcim/rear-ports/0/trace/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/rear-ports/{id}/trace/`

Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).

<h3 id="dcimrear-portstrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rear port.|

> Example responses

> 200 Response

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

<h3 id="dcimrear-portstrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RearPort](#schemarearport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_list

<a id="opIddcim_regions_list"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/regions/`

Call to super to allow for caching

<h3 id="dcimregionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|parent_id|query|string|false|none|
|parent|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|parent_id__n|query|string|false|none|
|parent__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "parent": {
        "id": 0,
        "name": "string",
        "site_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "site_count": 0,
      "slug": "string"
    }
  ]
}
```

<h3 id="dcimregionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimregionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Region](#schemaregion)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_create

<a id="opIddcim_regions_create"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`POST /dcim/regions/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="dcimregionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableRegion](#schemawritableregion)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site_count": 0,
  "slug": "string"
}
```

<h3 id="dcimregionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Region](#schemaregion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_read

<a id="opIddcim_regions_read"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/regions/{id}/`

Call to super to allow for caching

<h3 id="dcimregionsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this region.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site_count": 0,
  "slug": "string"
}
```

<h3 id="dcimregionsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Region](#schemaregion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_update

<a id="opIddcim_regions_update"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`PUT /dcim/regions/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="dcimregionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this region.|
|body|body|[WritableRegion](#schemawritableregion)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site_count": 0,
  "slug": "string"
}
```

<h3 id="dcimregionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Region](#schemaregion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_delete

<a id="opIddcim_regions_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/regions/{id}/`

<h3 id="dcimregionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this region.|

<h3 id="dcimregionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_regions_partial_update

<a id="opIddcim_regions_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/regions/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`PATCH /dcim/regions/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="dcimregionspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this region.|
|body|body|[WritableRegion](#schemawritableregion)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site_count": 0,
  "slug": "string"
}
```

<h3 id="dcimregionspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Region](#schemaregion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_list

<a id="opIddcim_sites_list"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/sites/`

Call to super to allow for caching

<h3 id="dcimsiteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|facility|query|string|false|none|
|asn|query|string|false|none|
|latitude|query|string|false|none|
|longitude|query|string|false|none|
|contact_name|query|string|false|none|
|contact_phone|query|string|false|none|
|contact_email|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|status|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|facility__n|query|string|false|none|
|facility__ic|query|string|false|none|
|facility__nic|query|string|false|none|
|facility__iew|query|string|false|none|
|facility__niew|query|string|false|none|
|facility__isw|query|string|false|none|
|facility__nisw|query|string|false|none|
|facility__ie|query|string|false|none|
|facility__nie|query|string|false|none|
|asn__n|query|string|false|none|
|asn__lte|query|string|false|none|
|asn__lt|query|string|false|none|
|asn__gte|query|string|false|none|
|asn__gt|query|string|false|none|
|latitude__n|query|string|false|none|
|latitude__lte|query|string|false|none|
|latitude__lt|query|string|false|none|
|latitude__gte|query|string|false|none|
|latitude__gt|query|string|false|none|
|longitude__n|query|string|false|none|
|longitude__lte|query|string|false|none|
|longitude__lt|query|string|false|none|
|longitude__gte|query|string|false|none|
|longitude__gt|query|string|false|none|
|contact_name__n|query|string|false|none|
|contact_name__ic|query|string|false|none|
|contact_name__nic|query|string|false|none|
|contact_name__iew|query|string|false|none|
|contact_name__niew|query|string|false|none|
|contact_name__isw|query|string|false|none|
|contact_name__nisw|query|string|false|none|
|contact_name__ie|query|string|false|none|
|contact_name__nie|query|string|false|none|
|contact_phone__n|query|string|false|none|
|contact_phone__ic|query|string|false|none|
|contact_phone__nic|query|string|false|none|
|contact_phone__iew|query|string|false|none|
|contact_phone__niew|query|string|false|none|
|contact_phone__isw|query|string|false|none|
|contact_phone__nisw|query|string|false|none|
|contact_phone__ie|query|string|false|none|
|contact_phone__nie|query|string|false|none|
|contact_email__n|query|string|false|none|
|contact_email__ic|query|string|false|none|
|contact_email__nic|query|string|false|none|
|contact_email__iew|query|string|false|none|
|contact_email__niew|query|string|false|none|
|contact_email__isw|query|string|false|none|
|contact_email__nisw|query|string|false|none|
|contact_email__ie|query|string|false|none|
|contact_email__nie|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|status__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "asn": 1,
      "circuit_count": 0,
      "comments": "string",
      "contact_email": "user@example.com",
      "contact_name": "string",
      "contact_phone": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "device_count": 0,
      "facility": "string",
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "latitude": "string",
      "longitude": "string",
      "name": "string",
      "physical_address": "string",
      "prefix_count": 0,
      "rack_count": 0,
      "region": {
        "id": 0,
        "name": "string",
        "site_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "shipping_address": "string",
      "slug": "string",
      "status": {
        "label": "Active",
        "value": "active"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "time_zone": "string",
      "virtualmachine_count": 0,
      "vlan_count": 0
    }
  ]
}
```

<h3 id="dcimsiteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimsiteslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Site](#schemasite)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_create

<a id="opIddcim_sites_create"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asn": 1,
    "comments": "string",
    "contact_email": "user@example.com",
    "contact_name": "string",
    "contact_phone": "string",
    "custom_fields": {},
    "description": "string",
    "facility": "string",
    "latitude": "string",
    "longitude": "string",
    "name": "string",
    "physical_address": "string",
    "region": 0,
    "shipping_address": "string",
    "slug": "string",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "time_zone": "string"
  }'
```

`POST /dcim/sites/`

> Body parameter

```json
{
  "asn": 1,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "custom_fields": {},
  "description": "string",
  "facility": "string",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "region": 0,
  "shipping_address": "string",
  "slug": "string",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "time_zone": "string"
}
```

<h3 id="dcimsitescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableSite](#schemawritablesite)|true|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» contact_email|body|string(email)|false|none|
|» contact_name|body|string|false|none|
|» contact_phone|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» facility|body|string|false|Local facility ID or description|
|» latitude|body|string(decimal) \| null|false|GPS coordinate (latitude)|
|» longitude|body|string(decimal) \| null|false|GPS coordinate (longitude)|
|» name|body|string|true|none|
|» physical_address|body|string|false|none|
|» region|body|integer \| null|false|none|
|» shipping_address|body|string|false|none|
|» slug|body|string(slug)|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» time_zone|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|planned|
|» status|retired|

> Example responses

> 201 Response

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

<h3 id="dcimsitescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_read

<a id="opIddcim_sites_read"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/sites/{id}/`

Call to super to allow for caching

<h3 id="dcimsitesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this site.|

> Example responses

> 200 Response

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

<h3 id="dcimsitesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_update

<a id="opIddcim_sites_update"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asn": 1,
    "comments": "string",
    "contact_email": "user@example.com",
    "contact_name": "string",
    "contact_phone": "string",
    "custom_fields": {},
    "description": "string",
    "facility": "string",
    "latitude": "string",
    "longitude": "string",
    "name": "string",
    "physical_address": "string",
    "region": 0,
    "shipping_address": "string",
    "slug": "string",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "time_zone": "string"
  }'
```

`PUT /dcim/sites/{id}/`

> Body parameter

```json
{
  "asn": 1,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "custom_fields": {},
  "description": "string",
  "facility": "string",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "region": 0,
  "shipping_address": "string",
  "slug": "string",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "time_zone": "string"
}
```

<h3 id="dcimsitesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this site.|
|body|body|[WritableSite](#schemawritablesite)|true|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» contact_email|body|string(email)|false|none|
|» contact_name|body|string|false|none|
|» contact_phone|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» facility|body|string|false|Local facility ID or description|
|» latitude|body|string(decimal) \| null|false|GPS coordinate (latitude)|
|» longitude|body|string(decimal) \| null|false|GPS coordinate (longitude)|
|» name|body|string|true|none|
|» physical_address|body|string|false|none|
|» region|body|integer \| null|false|none|
|» shipping_address|body|string|false|none|
|» slug|body|string(slug)|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» time_zone|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|planned|
|» status|retired|

> Example responses

> 200 Response

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

<h3 id="dcimsitesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_delete

<a id="opIddcim_sites_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/sites/{id}/`

<h3 id="dcimsitesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this site.|

<h3 id="dcimsitesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_partial_update

<a id="opIddcim_sites_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "asn": 1,
    "comments": "string",
    "contact_email": "user@example.com",
    "contact_name": "string",
    "contact_phone": "string",
    "custom_fields": {},
    "description": "string",
    "facility": "string",
    "latitude": "string",
    "longitude": "string",
    "name": "string",
    "physical_address": "string",
    "region": 0,
    "shipping_address": "string",
    "slug": "string",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "time_zone": "string"
  }'
```

`PATCH /dcim/sites/{id}/`

> Body parameter

```json
{
  "asn": 1,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "custom_fields": {},
  "description": "string",
  "facility": "string",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "region": 0,
  "shipping_address": "string",
  "slug": "string",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "time_zone": "string"
}
```

<h3 id="dcimsitespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this site.|
|body|body|[WritableSite](#schemawritablesite)|true|none|
|» asn|body|integer \| null|false|32-bit autonomous system number|
|» comments|body|string|false|none|
|» contact_email|body|string(email)|false|none|
|» contact_name|body|string|false|none|
|» contact_phone|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» facility|body|string|false|Local facility ID or description|
|» latitude|body|string(decimal) \| null|false|GPS coordinate (latitude)|
|» longitude|body|string(decimal) \| null|false|GPS coordinate (longitude)|
|» name|body|string|true|none|
|» physical_address|body|string|false|none|
|» region|body|integer \| null|false|none|
|» shipping_address|body|string|false|none|
|» slug|body|string(slug)|true|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» time_zone|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|planned|
|» status|retired|

> Example responses

> 200 Response

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

<h3 id="dcimsitespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_sites_graphs

<a id="opIddcim_sites_graphs"></a>

> Code samples

```bash
curl https://example.com/dcim/sites/0/graphs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/sites/{id}/graphs/`

A convenience method for rendering graphs for a particular site.

<h3 id="dcimsitesgraphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this site.|

> Example responses

> 200 Response

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

<h3 id="dcimsitesgraphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_list

<a id="opIddcim_virtual-chassis_list"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/virtual-chassis/`

Call to super to allow for caching

<h3 id="dcimvirtual-chassislist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|domain|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|domain__n|query|string|false|none|
|domain__ic|query|string|false|none|
|domain__nic|query|string|false|none|
|domain__iew|query|string|false|none|
|domain__niew|query|string|false|none|
|domain__isw|query|string|false|none|
|domain__nisw|query|string|false|none|
|domain__ie|query|string|false|none|
|domain__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "domain": "string",
      "id": 0,
      "master": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "member_count": 0,
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="dcimvirtual-chassislist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dcimvirtual-chassislist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VirtualChassis](#schemavirtualchassis)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_create

<a id="opIddcim_virtual-chassis_create"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domain": "string",
    "master": 0,
    "tags": [
      "string"
    ]
  }'
```

`POST /dcim/virtual-chassis/`

> Body parameter

```json
{
  "domain": "string",
  "master": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassiscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVirtualChassis](#schemawritablevirtualchassis)|true|none|
|» domain|body|string|false|none|
|» master|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "domain": "string",
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassiscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VirtualChassis](#schemavirtualchassis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_read

<a id="opIddcim_virtual-chassis_read"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dcim/virtual-chassis/{id}/`

Call to super to allow for caching

<h3 id="dcimvirtual-chassisread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual chassis.|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassisread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualChassis](#schemavirtualchassis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_update

<a id="opIddcim_virtual-chassis_update"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domain": "string",
    "master": 0,
    "tags": [
      "string"
    ]
  }'
```

`PUT /dcim/virtual-chassis/{id}/`

> Body parameter

```json
{
  "domain": "string",
  "master": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassisupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual chassis.|
|body|body|[WritableVirtualChassis](#schemawritablevirtualchassis)|true|none|
|» domain|body|string|false|none|
|» master|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassisupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualChassis](#schemavirtualchassis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_delete

<a id="opIddcim_virtual-chassis_delete"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dcim/virtual-chassis/{id}/`

<h3 id="dcimvirtual-chassisdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual chassis.|

<h3 id="dcimvirtual-chassisdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## dcim_virtual-chassis_partial_update

<a id="opIddcim_virtual-chassis_partial_update"></a>

> Code samples

```bash
curl https://example.com/dcim/virtual-chassis/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domain": "string",
    "master": 0,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /dcim/virtual-chassis/{id}/`

> Body parameter

```json
{
  "domain": "string",
  "master": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassispartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual chassis.|
|body|body|[WritableVirtualChassis](#schemawritablevirtualchassis)|true|none|
|» domain|body|string|false|none|
|» master|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="dcimvirtual-chassispartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualChassis](#schemavirtualchassis)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-extras">extras</h1>

## extras__custom_field_choices_list

<a id="opIdextras__custom_field_choices_list"></a>

> Code samples

```bash
curl https://example.com/extras/_custom_field_choices/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/_custom_field_choices/`

<h3 id="extrascustomfieldchoiceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras__custom_field_choices_read

<a id="opIdextras__custom_field_choices_read"></a>

> Code samples

```bash
curl https://example.com/extras/_custom_field_choices/string/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/_custom_field_choices/{id}/`

<h3 id="extrascustomfieldchoicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="extrascustomfieldchoicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_list

<a id="opIdextras_config-contexts_list"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/config-contexts/`

Call to super to allow for caching

<h3 id="extrasconfig-contextslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|is_active|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|platform_id|query|string|false|none|
|platform|query|string|false|none|
|cluster_group_id|query|string|false|none|
|cluster_group|query|string|false|none|
|cluster_id|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|platform_id__n|query|string|false|none|
|platform__n|query|string|false|none|
|cluster_group_id__n|query|string|false|none|
|cluster_group__n|query|string|false|none|
|cluster_id__n|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cluster_groups": [
        {
          "cluster_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        }
      ],
      "clusters": [
        {
          "id": 0,
          "name": "string",
          "url": "http://example.com",
          "virtualmachine_count": 0
        }
      ],
      "data": "string",
      "description": "string",
      "id": 0,
      "is_active": true,
      "name": "string",
      "platforms": [
        {
          "device_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com",
          "virtualmachine_count": 0
        }
      ],
      "regions": [
        {
          "id": 0,
          "name": "string",
          "site_count": 0,
          "slug": "string",
          "url": "http://example.com"
        }
      ],
      "roles": [
        {
          "device_count": 0,
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com",
          "virtualmachine_count": 0
        }
      ],
      "sites": [
        {
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        }
      ],
      "tags": [
        "string"
      ],
      "tenant_groups": [
        {
          "id": 0,
          "name": "string",
          "slug": "string",
          "tenant_count": 0,
          "url": "http://example.com"
        }
      ],
      "tenants": [
        {
          "id": 0,
          "name": "string",
          "slug": "string",
          "url": "http://example.com"
        }
      ],
      "weight": 0
    }
  ]
}
```

<h3 id="extrasconfig-contextslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrasconfig-contextslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConfigContext](#schemaconfigcontext)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_create

<a id="opIdextras_config-contexts_create"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster_groups": [
      0
    ],
    "clusters": [
      0
    ],
    "data": "string",
    "description": "string",
    "is_active": true,
    "name": "string",
    "platforms": [
      0
    ],
    "regions": [
      0
    ],
    "roles": [
      0
    ],
    "sites": [
      0
    ],
    "tags": [
      "string"
    ],
    "tenant_groups": [
      0
    ],
    "tenants": [
      0
    ],
    "weight": 0
  }'
```

`POST /extras/config-contexts/`

> Body parameter

```json
{
  "cluster_groups": [
    0
  ],
  "clusters": [
    0
  ],
  "data": "string",
  "description": "string",
  "is_active": true,
  "name": "string",
  "platforms": [
    0
  ],
  "regions": [
    0
  ],
  "roles": [
    0
  ],
  "sites": [
    0
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    0
  ],
  "tenants": [
    0
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableConfigContext](#schemawritableconfigcontext)|true|none|
|» cluster_groups|body|[integer]|false|none|
|» clusters|body|[integer]|false|none|
|» data|body|string|true|none|
|» description|body|string|false|none|
|» is_active|body|boolean|false|none|
|» name|body|string|true|none|
|» platforms|body|[integer]|false|none|
|» regions|body|[integer]|false|none|
|» roles|body|[integer]|false|none|
|» sites|body|[integer]|false|none|
|» tags|body|[string(slug)]|false|none|
|» tenant_groups|body|[integer]|false|none|
|» tenants|body|[integer]|false|none|
|» weight|body|integer|false|none|

> Example responses

> 201 Response

```json
{
  "cluster_groups": [
    {
      "cluster_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "clusters": [
    {
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "regions": [
    {
      "id": 0,
      "name": "string",
      "site_count": 0,
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "roles": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "sites": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "tenant_count": 0,
      "url": "http://example.com"
    }
  ],
  "tenants": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ConfigContext](#schemaconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_read

<a id="opIdextras_config-contexts_read"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/config-contexts/{id}/`

Call to super to allow for caching

<h3 id="extrasconfig-contextsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this config context.|

> Example responses

> 200 Response

```json
{
  "cluster_groups": [
    {
      "cluster_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "clusters": [
    {
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "regions": [
    {
      "id": 0,
      "name": "string",
      "site_count": 0,
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "roles": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "sites": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "tenant_count": 0,
      "url": "http://example.com"
    }
  ],
  "tenants": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConfigContext](#schemaconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_update

<a id="opIdextras_config-contexts_update"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster_groups": [
      0
    ],
    "clusters": [
      0
    ],
    "data": "string",
    "description": "string",
    "is_active": true,
    "name": "string",
    "platforms": [
      0
    ],
    "regions": [
      0
    ],
    "roles": [
      0
    ],
    "sites": [
      0
    ],
    "tags": [
      "string"
    ],
    "tenant_groups": [
      0
    ],
    "tenants": [
      0
    ],
    "weight": 0
  }'
```

`PUT /extras/config-contexts/{id}/`

> Body parameter

```json
{
  "cluster_groups": [
    0
  ],
  "clusters": [
    0
  ],
  "data": "string",
  "description": "string",
  "is_active": true,
  "name": "string",
  "platforms": [
    0
  ],
  "regions": [
    0
  ],
  "roles": [
    0
  ],
  "sites": [
    0
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    0
  ],
  "tenants": [
    0
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this config context.|
|body|body|[WritableConfigContext](#schemawritableconfigcontext)|true|none|
|» cluster_groups|body|[integer]|false|none|
|» clusters|body|[integer]|false|none|
|» data|body|string|true|none|
|» description|body|string|false|none|
|» is_active|body|boolean|false|none|
|» name|body|string|true|none|
|» platforms|body|[integer]|false|none|
|» regions|body|[integer]|false|none|
|» roles|body|[integer]|false|none|
|» sites|body|[integer]|false|none|
|» tags|body|[string(slug)]|false|none|
|» tenant_groups|body|[integer]|false|none|
|» tenants|body|[integer]|false|none|
|» weight|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "cluster_groups": [
    {
      "cluster_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "clusters": [
    {
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "regions": [
    {
      "id": 0,
      "name": "string",
      "site_count": 0,
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "roles": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "sites": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "tenant_count": 0,
      "url": "http://example.com"
    }
  ],
  "tenants": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConfigContext](#schemaconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_delete

<a id="opIdextras_config-contexts_delete"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /extras/config-contexts/{id}/`

<h3 id="extrasconfig-contextsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this config context.|

<h3 id="extrasconfig-contextsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_config-contexts_partial_update

<a id="opIdextras_config-contexts_partial_update"></a>

> Code samples

```bash
curl https://example.com/extras/config-contexts/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster_groups": [
      0
    ],
    "clusters": [
      0
    ],
    "data": "string",
    "description": "string",
    "is_active": true,
    "name": "string",
    "platforms": [
      0
    ],
    "regions": [
      0
    ],
    "roles": [
      0
    ],
    "sites": [
      0
    ],
    "tags": [
      "string"
    ],
    "tenant_groups": [
      0
    ],
    "tenants": [
      0
    ],
    "weight": 0
  }'
```

`PATCH /extras/config-contexts/{id}/`

> Body parameter

```json
{
  "cluster_groups": [
    0
  ],
  "clusters": [
    0
  ],
  "data": "string",
  "description": "string",
  "is_active": true,
  "name": "string",
  "platforms": [
    0
  ],
  "regions": [
    0
  ],
  "roles": [
    0
  ],
  "sites": [
    0
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    0
  ],
  "tenants": [
    0
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this config context.|
|body|body|[WritableConfigContext](#schemawritableconfigcontext)|true|none|
|» cluster_groups|body|[integer]|false|none|
|» clusters|body|[integer]|false|none|
|» data|body|string|true|none|
|» description|body|string|false|none|
|» is_active|body|boolean|false|none|
|» name|body|string|true|none|
|» platforms|body|[integer]|false|none|
|» regions|body|[integer]|false|none|
|» roles|body|[integer]|false|none|
|» sites|body|[integer]|false|none|
|» tags|body|[string(slug)]|false|none|
|» tenant_groups|body|[integer]|false|none|
|» tenants|body|[integer]|false|none|
|» weight|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "cluster_groups": [
    {
      "cluster_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "clusters": [
    {
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "regions": [
    {
      "id": 0,
      "name": "string",
      "site_count": 0,
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "roles": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "sites": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "tenant_count": 0,
      "url": "http://example.com"
    }
  ],
  "tenants": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "weight": 0
}
```

<h3 id="extrasconfig-contextspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConfigContext](#schemaconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_list

<a id="opIdextras_export-templates_list"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/export-templates/`

Call to super to allow for caching

<h3 id="extrasexport-templateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|content_type|query|string|false|none|
|name|query|string|false|none|
|template_language|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|content_type__n|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|template_language__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "content_type": "string",
      "description": "string",
      "file_extension": "string",
      "id": 0,
      "mime_type": "string",
      "name": "string",
      "template_code": "string",
      "template_language": {
        "id": 20,
        "label": "Jinja2",
        "value": "jinja2"
      }
    }
  ]
}
```

<h3 id="extrasexport-templateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrasexport-templateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ExportTemplate](#schemaexporttemplate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_create

<a id="opIdextras_export-templates_create"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "description": "string",
    "file_extension": "string",
    "mime_type": "string",
    "name": "string",
    "template_code": "string",
    "template_language": "django"
  }'
```

`POST /extras/export-templates/`

> Body parameter

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": "django"
}
```

<h3 id="extrasexport-templatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableExportTemplate](#schemawritableexporttemplate)|true|none|
|» content_type|body|string|true|none|
|» description|body|string|false|none|
|» file_extension|body|string|false|Extension to append to the rendered filename|
|» mime_type|body|string|false|Defaults to <code>text/plain</code>|
|» name|body|string|true|none|
|» template_code|body|string|true|The list of objects being exported is passed as a context variable named <code>queryset</code>.|
|» template_language|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 201 Response

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": {
    "id": 20,
    "label": "Jinja2",
    "value": "jinja2"
  }
}
```

<h3 id="extrasexport-templatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ExportTemplate](#schemaexporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_read

<a id="opIdextras_export-templates_read"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/export-templates/{id}/`

Call to super to allow for caching

<h3 id="extrasexport-templatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this export template.|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": {
    "id": 20,
    "label": "Jinja2",
    "value": "jinja2"
  }
}
```

<h3 id="extrasexport-templatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExportTemplate](#schemaexporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_update

<a id="opIdextras_export-templates_update"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "description": "string",
    "file_extension": "string",
    "mime_type": "string",
    "name": "string",
    "template_code": "string",
    "template_language": "django"
  }'
```

`PUT /extras/export-templates/{id}/`

> Body parameter

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": "django"
}
```

<h3 id="extrasexport-templatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this export template.|
|body|body|[WritableExportTemplate](#schemawritableexporttemplate)|true|none|
|» content_type|body|string|true|none|
|» description|body|string|false|none|
|» file_extension|body|string|false|Extension to append to the rendered filename|
|» mime_type|body|string|false|Defaults to <code>text/plain</code>|
|» name|body|string|true|none|
|» template_code|body|string|true|The list of objects being exported is passed as a context variable named <code>queryset</code>.|
|» template_language|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": {
    "id": 20,
    "label": "Jinja2",
    "value": "jinja2"
  }
}
```

<h3 id="extrasexport-templatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExportTemplate](#schemaexporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_delete

<a id="opIdextras_export-templates_delete"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /extras/export-templates/{id}/`

<h3 id="extrasexport-templatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this export template.|

<h3 id="extrasexport-templatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_export-templates_partial_update

<a id="opIdextras_export-templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/extras/export-templates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "description": "string",
    "file_extension": "string",
    "mime_type": "string",
    "name": "string",
    "template_code": "string",
    "template_language": "django"
  }'
```

`PATCH /extras/export-templates/{id}/`

> Body parameter

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": "django"
}
```

<h3 id="extrasexport-templatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this export template.|
|body|body|[WritableExportTemplate](#schemawritableexporttemplate)|true|none|
|» content_type|body|string|true|none|
|» description|body|string|false|none|
|» file_extension|body|string|false|Extension to append to the rendered filename|
|» mime_type|body|string|false|Defaults to <code>text/plain</code>|
|» name|body|string|true|none|
|» template_code|body|string|true|The list of objects being exported is passed as a context variable named <code>queryset</code>.|
|» template_language|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": {
    "id": 20,
    "label": "Jinja2",
    "value": "jinja2"
  }
}
```

<h3 id="extrasexport-templatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExportTemplate](#schemaexporttemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_list

<a id="opIdextras_graphs_list"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/graphs/`

Call to super to allow for caching

<h3 id="extrasgraphslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|type|query|string|false|none|
|name|query|string|false|none|
|template_language|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|type__n|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|template_language__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "link": "http://example.com",
      "name": "string",
      "source": "string",
      "template_language": "django",
      "type": "string",
      "weight": 0
    }
  ]
}
```

<h3 id="extrasgraphslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrasgraphslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Graph](#schemagraph)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_create

<a id="opIdextras_graphs_create"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "link": "http://example.com",
    "name": "string",
    "source": "string",
    "template_language": "django",
    "type": "string",
    "weight": 0
  }'
```

`POST /extras/graphs/`

> Body parameter

```json
{
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Graph](#schemagraph)|true|none|
|» link|body|string(uri)|false|none|
|» name|body|string|true|none|
|» source|body|string|true|none|
|» template_language|body|string|false|none|
|» type|body|string|true|none|
|» weight|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Graph](#schemagraph)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_read

<a id="opIdextras_graphs_read"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/graphs/{id}/`

Call to super to allow for caching

<h3 id="extrasgraphsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this graph.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Graph](#schemagraph)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_update

<a id="opIdextras_graphs_update"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "link": "http://example.com",
    "name": "string",
    "source": "string",
    "template_language": "django",
    "type": "string",
    "weight": 0
  }'
```

`PUT /extras/graphs/{id}/`

> Body parameter

```json
{
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this graph.|
|body|body|[Graph](#schemagraph)|true|none|
|» link|body|string(uri)|false|none|
|» name|body|string|true|none|
|» source|body|string|true|none|
|» template_language|body|string|false|none|
|» type|body|string|true|none|
|» weight|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Graph](#schemagraph)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_delete

<a id="opIdextras_graphs_delete"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /extras/graphs/{id}/`

<h3 id="extrasgraphsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this graph.|

<h3 id="extrasgraphsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_graphs_partial_update

<a id="opIdextras_graphs_partial_update"></a>

> Code samples

```bash
curl https://example.com/extras/graphs/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "link": "http://example.com",
    "name": "string",
    "source": "string",
    "template_language": "django",
    "type": "string",
    "weight": 0
  }'
```

`PATCH /extras/graphs/{id}/`

> Body parameter

```json
{
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this graph.|
|body|body|[Graph](#schemagraph)|true|none|
|» link|body|string(uri)|false|none|
|» name|body|string|true|none|
|» source|body|string|true|none|
|» template_language|body|string|false|none|
|» type|body|string|true|none|
|» weight|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template_language|django|
|» template_language|jinja2|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

<h3 id="extrasgraphspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Graph](#schemagraph)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_list

<a id="opIdextras_image-attachments_list"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/image-attachments/`

Call to super to allow for caching

<h3 id="extrasimage-attachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "content_type": "string",
      "created": "1970-01-01T00:00:00Z",
      "id": 0,
      "image": "http://example.com",
      "image_height": 0,
      "image_width": 0,
      "name": "string",
      "object_id": 0,
      "parent": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

<h3 id="extrasimage-attachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrasimage-attachmentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ImageAttachment](#schemaimageattachment)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_create

<a id="opIdextras_image-attachments_create"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "image_height": 0,
    "image_width": 0,
    "name": "string",
    "object_id": 0
  }'
```

`POST /extras/image-attachments/`

> Body parameter

```json
{
  "content_type": "string",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0
}
```

<h3 id="extrasimage-attachmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageAttachment](#schemaimageattachment)|true|none|
|» content_type|body|string|true|none|
|» image_height|body|integer|true|none|
|» image_width|body|integer|true|none|
|» name|body|string|false|none|
|» object_id|body|integer|true|none|

> Example responses

> 201 Response

```json
{
  "content_type": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0,
  "parent": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="extrasimage-attachmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ImageAttachment](#schemaimageattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_read

<a id="opIdextras_image-attachments_read"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/image-attachments/{id}/`

Call to super to allow for caching

<h3 id="extrasimage-attachmentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this image attachment.|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0,
  "parent": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="extrasimage-attachmentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ImageAttachment](#schemaimageattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_update

<a id="opIdextras_image-attachments_update"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "image_height": 0,
    "image_width": 0,
    "name": "string",
    "object_id": 0
  }'
```

`PUT /extras/image-attachments/{id}/`

> Body parameter

```json
{
  "content_type": "string",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0
}
```

<h3 id="extrasimage-attachmentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this image attachment.|
|body|body|[ImageAttachment](#schemaimageattachment)|true|none|
|» content_type|body|string|true|none|
|» image_height|body|integer|true|none|
|» image_width|body|integer|true|none|
|» name|body|string|false|none|
|» object_id|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0,
  "parent": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="extrasimage-attachmentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ImageAttachment](#schemaimageattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_delete

<a id="opIdextras_image-attachments_delete"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /extras/image-attachments/{id}/`

<h3 id="extrasimage-attachmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this image attachment.|

<h3 id="extrasimage-attachmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_image-attachments_partial_update

<a id="opIdextras_image-attachments_partial_update"></a>

> Code samples

```bash
curl https://example.com/extras/image-attachments/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content_type": "string",
    "image_height": 0,
    "image_width": 0,
    "name": "string",
    "object_id": 0
  }'
```

`PATCH /extras/image-attachments/{id}/`

> Body parameter

```json
{
  "content_type": "string",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0
}
```

<h3 id="extrasimage-attachmentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this image attachment.|
|body|body|[ImageAttachment](#schemaimageattachment)|true|none|
|» content_type|body|string|true|none|
|» image_height|body|integer|true|none|
|» image_width|body|integer|true|none|
|» name|body|string|false|none|
|» object_id|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "content_type": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0,
  "parent": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="extrasimage-attachmentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ImageAttachment](#schemaimageattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_object-changes_list

<a id="opIdextras_object-changes_list"></a>

> Code samples

```bash
curl https://example.com/extras/object-changes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/object-changes/`

Retrieve a list of recent changes.

<h3 id="extrasobject-changeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|user|query|string|false|none|
|user_name|query|string|false|none|
|request_id|query|string|false|none|
|action|query|string|false|none|
|changed_object_type|query|string|false|none|
|changed_object_id|query|string|false|none|
|object_repr|query|string|false|none|
|q|query|string|false|none|
|time|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|user__n|query|string|false|none|
|user_name__n|query|string|false|none|
|user_name__ic|query|string|false|none|
|user_name__nic|query|string|false|none|
|user_name__iew|query|string|false|none|
|user_name__niew|query|string|false|none|
|user_name__isw|query|string|false|none|
|user_name__nisw|query|string|false|none|
|user_name__ie|query|string|false|none|
|user_name__nie|query|string|false|none|
|action__n|query|string|false|none|
|changed_object_type__n|query|string|false|none|
|changed_object_id__n|query|string|false|none|
|changed_object_id__lte|query|string|false|none|
|changed_object_id__lt|query|string|false|none|
|changed_object_id__gte|query|string|false|none|
|changed_object_id__gt|query|string|false|none|
|object_repr__n|query|string|false|none|
|object_repr__ic|query|string|false|none|
|object_repr__nic|query|string|false|none|
|object_repr__iew|query|string|false|none|
|object_repr__niew|query|string|false|none|
|object_repr__isw|query|string|false|none|
|object_repr__nisw|query|string|false|none|
|object_repr__ie|query|string|false|none|
|object_repr__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "action": {
        "label": "Created",
        "value": "create"
      },
      "changed_object": {
        "property1": "string",
        "property2": "string"
      },
      "changed_object_id": 0,
      "changed_object_type": "string",
      "id": 0,
      "object_data": "string",
      "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "time": "1970-01-01T00:00:00Z",
      "user": {
        "id": 0,
        "username": "string"
      },
      "user_name": "string"
    }
  ]
}
```

<h3 id="extrasobject-changeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrasobject-changeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ObjectChange](#schemaobjectchange)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_object-changes_read

<a id="opIdextras_object-changes_read"></a>

> Code samples

```bash
curl https://example.com/extras/object-changes/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/object-changes/{id}/`

Retrieve a list of recent changes.

<h3 id="extrasobject-changesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this object change.|

> Example responses

> 200 Response

```json
{
  "action": {
    "label": "Created",
    "value": "create"
  },
  "changed_object": {
    "property1": "string",
    "property2": "string"
  },
  "changed_object_id": 0,
  "changed_object_type": "string",
  "id": 0,
  "object_data": "string",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "time": "1970-01-01T00:00:00Z",
  "user": {
    "id": 0,
    "username": "string"
  },
  "user_name": "string"
}
```

<h3 id="extrasobject-changesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ObjectChange](#schemaobjectchange)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_reports_list

<a id="opIdextras_reports_list"></a>

> Code samples

```bash
curl https://example.com/extras/reports/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/reports/`

Compile all reports and their related results (if any). Result data is deferred in the list view.

<h3 id="extrasreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_reports_read

<a id="opIdextras_reports_read"></a>

> Code samples

```bash
curl https://example.com/extras/reports/string/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/reports/{id}/`

Retrieve a single Report identified as "<module>.<report>".

<h3 id="extrasreportsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="extrasreportsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_reports_run

<a id="opIdextras_reports_run"></a>

> Code samples

```bash
curl https://example.com/extras/reports/string/run/ \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /extras/reports/{id}/run/`

Run a Report and create a new ReportResult, overwriting any previous result for the Report.

<h3 id="extrasreportsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="extrasreportsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_scripts_list

<a id="opIdextras_scripts_list"></a>

> Code samples

```bash
curl https://example.com/extras/scripts/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/scripts/`

<h3 id="extrasscriptslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_scripts_read

<a id="opIdextras_scripts_read"></a>

> Code samples

```bash
curl https://example.com/extras/scripts/string/ \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/scripts/{id}/`

<h3 id="extrasscriptsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="extrasscriptsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_list

<a id="opIdextras_tags_list"></a>

> Code samples

```bash
curl https://example.com/extras/tags/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/tags/`

Call to super to allow for caching

<h3 id="extrastagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|color|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|color__n|query|string|false|none|
|color__ic|query|string|false|none|
|color__nic|query|string|false|none|
|color__iew|query|string|false|none|
|color__niew|query|string|false|none|
|color__isw|query|string|false|none|
|color__nisw|query|string|false|none|
|color__ie|query|string|false|none|
|color__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "color": "string",
      "description": "string",
      "id": 0,
      "name": "string",
      "slug": "string",
      "tagged_items": 0
    }
  ]
}
```

<h3 id="extrastagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="extrastagslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Tag](#schematag)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_create

<a id="opIdextras_tags_create"></a>

> Code samples

```bash
curl https://example.com/extras/tags/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /extras/tags/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="extrastagscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Tag](#schematag)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "tagged_items": 0
}
```

<h3 id="extrastagscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_read

<a id="opIdextras_tags_read"></a>

> Code samples

```bash
curl https://example.com/extras/tags/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extras/tags/{id}/`

Call to super to allow for caching

<h3 id="extrastagsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tag.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "tagged_items": 0
}
```

<h3 id="extrastagsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_update

<a id="opIdextras_tags_update"></a>

> Code samples

```bash
curl https://example.com/extras/tags/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /extras/tags/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="extrastagsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tag.|
|body|body|[Tag](#schematag)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "tagged_items": 0
}
```

<h3 id="extrastagsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_delete

<a id="opIdextras_tags_delete"></a>

> Code samples

```bash
curl https://example.com/extras/tags/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /extras/tags/{id}/`

<h3 id="extrastagsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tag.|

<h3 id="extrastagsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## extras_tags_partial_update

<a id="opIdextras_tags_partial_update"></a>

> Code samples

```bash
curl https://example.com/extras/tags/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "color": "string",
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /extras/tags/{id}/`

> Body parameter

```json
{
  "color": "string",
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="extrastagspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tag.|
|body|body|[Tag](#schematag)|true|none|
|» color|body|string|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "tagged_items": 0
}
```

<h3 id="extrastagspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-ipam">ipam</h1>

## ipam_aggregates_list

<a id="opIdipam_aggregates_list"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/aggregates/`

Call to super to allow for caching

<h3 id="ipamaggregateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|date_added|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|family|query|number|false|none|
|prefix|query|string|false|none|
|rir_id|query|string|false|none|
|rir|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|date_added__n|query|string|false|none|
|date_added__lte|query|string|false|none|
|date_added__lt|query|string|false|none|
|date_added__gte|query|string|false|none|
|date_added__gt|query|string|false|none|
|rir_id__n|query|string|false|none|
|rir__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "date_added": "1970-01-01",
      "description": "string",
      "family": {
        "label": "IPv4",
        "value": 4
      },
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "prefix": "string",
      "rir": {
        "aggregate_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="ipamaggregateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamaggregateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Aggregate](#schemaaggregate)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_aggregates_create

<a id="opIdipam_aggregates_create"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "date_added": "1970-01-01",
    "description": "string",
    "prefix": "string",
    "rir": 0,
    "tags": [
      "string"
    ]
  }'
```

`POST /ipam/aggregates/`

> Body parameter

```json
{
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "prefix": "string",
  "rir": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableAggregate](#schemawritableaggregate)|true|none|
|» custom_fields|body|object|false|none|
|» date_added|body|string(date) \| null|false|none|
|» description|body|string|false|none|
|» prefix|body|string|true|none|
|» rir|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": {
    "aggregate_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Aggregate](#schemaaggregate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_aggregates_read

<a id="opIdipam_aggregates_read"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/aggregates/{id}/`

Call to super to allow for caching

<h3 id="ipamaggregatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this aggregate.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": {
    "aggregate_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Aggregate](#schemaaggregate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_aggregates_update

<a id="opIdipam_aggregates_update"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "date_added": "1970-01-01",
    "description": "string",
    "prefix": "string",
    "rir": 0,
    "tags": [
      "string"
    ]
  }'
```

`PUT /ipam/aggregates/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "prefix": "string",
  "rir": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this aggregate.|
|body|body|[WritableAggregate](#schemawritableaggregate)|true|none|
|» custom_fields|body|object|false|none|
|» date_added|body|string(date) \| null|false|none|
|» description|body|string|false|none|
|» prefix|body|string|true|none|
|» rir|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": {
    "aggregate_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Aggregate](#schemaaggregate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_aggregates_delete

<a id="opIdipam_aggregates_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/aggregates/{id}/`

<h3 id="ipamaggregatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this aggregate.|

<h3 id="ipamaggregatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_aggregates_partial_update

<a id="opIdipam_aggregates_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/aggregates/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "date_added": "1970-01-01",
    "description": "string",
    "prefix": "string",
    "rir": 0,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /ipam/aggregates/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "prefix": "string",
  "rir": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this aggregate.|
|body|body|[WritableAggregate](#schemawritableaggregate)|true|none|
|» custom_fields|body|object|false|none|
|» date_added|body|string(date) \| null|false|none|
|» description|body|string|false|none|
|» prefix|body|string|true|none|
|» rir|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": {
    "aggregate_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="ipamaggregatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Aggregate](#schemaaggregate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_list

<a id="opIdipam_ip-addresses_list"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/ip-addresses/`

Call to super to allow for caching

<h3 id="ipamip-addresseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|dns_name|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|family|query|number|false|none|
|parent|query|string|false|none|
|address|query|string|false|none|
|mask_length|query|number|false|none|
|vrf_id|query|string|false|none|
|vrf|query|string|false|none|
|device|query|string|false|none|
|device_id|query|string|false|none|
|virtual_machine_id|query|string|false|none|
|virtual_machine|query|string|false|none|
|interface|query|string|false|none|
|interface_id|query|string|false|none|
|assigned_to_interface|query|string|false|none|
|status|query|string|false|none|
|role|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|dns_name__n|query|string|false|none|
|dns_name__ic|query|string|false|none|
|dns_name__nic|query|string|false|none|
|dns_name__iew|query|string|false|none|
|dns_name__niew|query|string|false|none|
|dns_name__isw|query|string|false|none|
|dns_name__nisw|query|string|false|none|
|dns_name__ie|query|string|false|none|
|dns_name__nie|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|vrf_id__n|query|string|false|none|
|vrf__n|query|string|false|none|
|virtual_machine_id__n|query|string|false|none|
|virtual_machine__n|query|string|false|none|
|interface__n|query|string|false|none|
|interface_id__n|query|string|false|none|
|status__n|query|string|false|none|
|role__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "address": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "dns_name": "string",
      "family": {
        "label": "IPv4",
        "value": 4
      },
      "id": 0,
      "interface": {
        "device": {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "id": 0,
        "name": "string",
        "url": "string",
        "virtual_machine": {
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        }
      },
      "last_updated": "1970-01-01T00:00:00Z",
      "nat_inside": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "nat_outside": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "role": {
        "label": "Loopback",
        "value": "loopback"
      },
      "status": {
        "label": "Active",
        "value": "active"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "vrf": {
        "id": 0,
        "name": "string",
        "prefix_count": 0,
        "rd": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="ipamip-addresseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamip-addresseslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[IPAddress](#schemaipaddress)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_create

<a id="opIdipam_ip-addresses_create"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "address": "string",
    "custom_fields": {},
    "description": "string",
    "dns_name": "string",
    "interface": 0,
    "nat_inside": 0,
    "nat_outside": 0,
    "role": "loopback",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vrf": 0
  }'
```

`POST /ipam/ip-addresses/`

> Body parameter

```json
{
  "address": "string",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "interface": 0,
  "nat_inside": 0,
  "nat_outside": 0,
  "role": "loopback",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vrf": 0
}
```

<h3 id="ipamip-addressescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableIPAddress](#schemawritableipaddress)|true|none|
|» address|body|string|true|IPv4 or IPv6 address (with mask)|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» dns_name|body|string|false|Hostname or FQDN (not case-sensitive)|
|» interface|body|integer \| null|false|none|
|» nat_inside|body|integer \| null|false|The IP for which this address is the "outside" IP|
|» nat_outside|body|integer|true|none|
|» role|body|string|false|The functional role of this IP|
|» status|body|string|false|The operational status of this IP|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|loopback|
|» role|secondary|
|» role|anycast|
|» role|vip|
|» role|vrrp|
|» role|hsrp|
|» role|glbp|
|» role|carp|
|» status|active|
|» status|reserved|
|» status|deprecated|
|» status|dhcp|

> Example responses

> 201 Response

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "interface": {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "string",
    "virtual_machine": {
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "nat_outside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "label": "Loopback",
    "value": "loopback"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamip-addressescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[IPAddress](#schemaipaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_read

<a id="opIdipam_ip-addresses_read"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/ip-addresses/{id}/`

Call to super to allow for caching

<h3 id="ipamip-addressesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this IP address.|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "interface": {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "string",
    "virtual_machine": {
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "nat_outside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "label": "Loopback",
    "value": "loopback"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamip-addressesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPAddress](#schemaipaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_update

<a id="opIdipam_ip-addresses_update"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "address": "string",
    "custom_fields": {},
    "description": "string",
    "dns_name": "string",
    "interface": 0,
    "nat_inside": 0,
    "nat_outside": 0,
    "role": "loopback",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vrf": 0
  }'
```

`PUT /ipam/ip-addresses/{id}/`

> Body parameter

```json
{
  "address": "string",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "interface": 0,
  "nat_inside": 0,
  "nat_outside": 0,
  "role": "loopback",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vrf": 0
}
```

<h3 id="ipamip-addressesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this IP address.|
|body|body|[WritableIPAddress](#schemawritableipaddress)|true|none|
|» address|body|string|true|IPv4 or IPv6 address (with mask)|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» dns_name|body|string|false|Hostname or FQDN (not case-sensitive)|
|» interface|body|integer \| null|false|none|
|» nat_inside|body|integer \| null|false|The IP for which this address is the "outside" IP|
|» nat_outside|body|integer|true|none|
|» role|body|string|false|The functional role of this IP|
|» status|body|string|false|The operational status of this IP|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|loopback|
|» role|secondary|
|» role|anycast|
|» role|vip|
|» role|vrrp|
|» role|hsrp|
|» role|glbp|
|» role|carp|
|» status|active|
|» status|reserved|
|» status|deprecated|
|» status|dhcp|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "interface": {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "string",
    "virtual_machine": {
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "nat_outside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "label": "Loopback",
    "value": "loopback"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamip-addressesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPAddress](#schemaipaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_delete

<a id="opIdipam_ip-addresses_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/ip-addresses/{id}/`

<h3 id="ipamip-addressesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this IP address.|

<h3 id="ipamip-addressesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_ip-addresses_partial_update

<a id="opIdipam_ip-addresses_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/ip-addresses/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "address": "string",
    "custom_fields": {},
    "description": "string",
    "dns_name": "string",
    "interface": 0,
    "nat_inside": 0,
    "nat_outside": 0,
    "role": "loopback",
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vrf": 0
  }'
```

`PATCH /ipam/ip-addresses/{id}/`

> Body parameter

```json
{
  "address": "string",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "interface": 0,
  "nat_inside": 0,
  "nat_outside": 0,
  "role": "loopback",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vrf": 0
}
```

<h3 id="ipamip-addressespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this IP address.|
|body|body|[WritableIPAddress](#schemawritableipaddress)|true|none|
|» address|body|string|true|IPv4 or IPv6 address (with mask)|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» dns_name|body|string|false|Hostname or FQDN (not case-sensitive)|
|» interface|body|integer \| null|false|none|
|» nat_inside|body|integer \| null|false|The IP for which this address is the "outside" IP|
|» nat_outside|body|integer|true|none|
|» role|body|string|false|The functional role of this IP|
|» status|body|string|false|The operational status of this IP|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|loopback|
|» role|secondary|
|» role|anycast|
|» role|vip|
|» role|vrrp|
|» role|hsrp|
|» role|glbp|
|» role|carp|
|» status|active|
|» status|reserved|
|» status|deprecated|
|» status|dhcp|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "interface": {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "string",
    "virtual_machine": {
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "nat_outside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "label": "Loopback",
    "value": "loopback"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamip-addressespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPAddress](#schemaipaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_list

<a id="opIdipam_prefixes_list"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/prefixes/`

Call to super to allow for caching

<h3 id="ipamprefixeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|is_pool|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|family|query|number|false|none|
|prefix|query|string|false|none|
|within|query|string|false|none|
|within_include|query|string|false|none|
|contains|query|string|false|none|
|mask_length|query|number|false|none|
|vrf_id|query|string|false|none|
|vrf|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|vlan_id|query|string|false|none|
|vlan_vid|query|number|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|status|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|vrf_id__n|query|string|false|none|
|vrf__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|vlan_id__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|status__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "family": {
        "label": "IPv4",
        "value": 4
      },
      "id": 0,
      "is_pool": true,
      "last_updated": "1970-01-01T00:00:00Z",
      "prefix": "string",
      "role": {
        "id": 0,
        "name": "string",
        "prefix_count": 0,
        "slug": "string",
        "url": "http://example.com",
        "vlan_count": 0
      },
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Container",
        "value": "container"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "vlan": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com",
        "vid": 1
      },
      "vrf": {
        "id": 0,
        "name": "string",
        "prefix_count": 0,
        "rd": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="ipamprefixeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamprefixeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Prefix](#schemaprefix)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_create

<a id="opIdipam_prefixes_create"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "is_pool": true,
    "prefix": "string",
    "role": 0,
    "site": 0,
    "status": "container",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vlan": 0,
    "vrf": 0
  }'
```

`POST /ipam/prefixes/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "is_pool": true,
  "prefix": "string",
  "role": 0,
  "site": 0,
  "status": "container",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vlan": 0,
  "vrf": 0
}
```

<h3 id="ipamprefixescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritablePrefix](#schemawritableprefix)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» is_pool|body|boolean|false|All IP addresses within this prefix are considered usable|
|» prefix|body|string|true|IPv4 or IPv6 network with mask|
|» role|body|integer \| null|false|The primary function of this prefix|
|» site|body|integer \| null|false|none|
|» status|body|string|false|Operational status of this prefix|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vlan|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|container|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Container",
    "value": "container"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamprefixescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Prefix](#schemaprefix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_read

<a id="opIdipam_prefixes_read"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/prefixes/{id}/`

Call to super to allow for caching

<h3 id="ipamprefixesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Container",
    "value": "container"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamprefixesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prefix](#schemaprefix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_update

<a id="opIdipam_prefixes_update"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "is_pool": true,
    "prefix": "string",
    "role": 0,
    "site": 0,
    "status": "container",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vlan": 0,
    "vrf": 0
  }'
```

`PUT /ipam/prefixes/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "is_pool": true,
  "prefix": "string",
  "role": 0,
  "site": 0,
  "status": "container",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vlan": 0,
  "vrf": 0
}
```

<h3 id="ipamprefixesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|
|body|body|[WritablePrefix](#schemawritableprefix)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» is_pool|body|boolean|false|All IP addresses within this prefix are considered usable|
|» prefix|body|string|true|IPv4 or IPv6 network with mask|
|» role|body|integer \| null|false|The primary function of this prefix|
|» site|body|integer \| null|false|none|
|» status|body|string|false|Operational status of this prefix|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vlan|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|container|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Container",
    "value": "container"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamprefixesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prefix](#schemaprefix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_delete

<a id="opIdipam_prefixes_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/prefixes/{id}/`

<h3 id="ipamprefixesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|

<h3 id="ipamprefixesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_partial_update

<a id="opIdipam_prefixes_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "is_pool": true,
    "prefix": "string",
    "role": 0,
    "site": 0,
    "status": "container",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vlan": 0,
    "vrf": 0
  }'
```

`PATCH /ipam/prefixes/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "is_pool": true,
  "prefix": "string",
  "role": 0,
  "site": 0,
  "status": "container",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vlan": 0,
  "vrf": 0
}
```

<h3 id="ipamprefixespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|
|body|body|[WritablePrefix](#schemawritableprefix)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» is_pool|body|boolean|false|All IP addresses within this prefix are considered usable|
|» prefix|body|string|true|IPv4 or IPv6 network with mask|
|» role|body|integer \| null|false|The primary function of this prefix|
|» site|body|integer \| null|false|none|
|» status|body|string|false|Operational status of this prefix|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vlan|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|container|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Container",
    "value": "container"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamprefixespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prefix](#schemaprefix)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_available-ips_read

<a id="opIdipam_prefixes_available-ips_read"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/available-ips/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/prefixes/{id}/available-ips/`

A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.

<h3 id="ipamprefixesavailable-ipsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "family": 0,
    "vrf": {
      "id": 0,
      "name": "string",
      "prefix_count": 0,
      "rd": "string",
      "url": "http://example.com"
    }
  }
]
```

<h3 id="ipamprefixesavailable-ipsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamprefixesavailable-ipsread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AvailableIP](#schemaavailableip)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_prefixes_available-ips_create

<a id="opIdipam_prefixes_available-ips_create"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/available-ips/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /ipam/prefixes/{id}/available-ips/`

A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.

> Body parameter

```json
{}
```

<h3 id="ipamprefixesavailable-ipscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|
|body|body|[WritableAvailableIP](#schemawritableavailableip)|true|none|

> Example responses

> 201 Response

```json
[
  {
    "address": "string",
    "family": 0,
    "vrf": {
      "id": 0,
      "name": "string",
      "prefix_count": 0,
      "rd": "string",
      "url": "http://example.com"
    }
  }
]
```

<h3 id="ipamprefixesavailable-ipscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="ipamprefixesavailable-ipscreate-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AvailableIP](#schemaavailableip)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## A convenience method for returning available child prefixes within a parent.

<a id="opIdipam_prefixes_available-prefixes_read"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/available-prefixes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/prefixes/{id}/available-prefixes/`

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|

> Example responses

> 200 Response

```json
[
  {
    "family": 0,
    "prefix": "string",
    "vrf": {
      "id": 0,
      "name": "string",
      "prefix_count": 0,
      "rd": "string",
      "url": "http://example.com"
    }
  }
]
```

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AvailablePrefix](#schemaavailableprefix)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## A convenience method for returning available child prefixes within a parent.

<a id="opIdipam_prefixes_available-prefixes_create"></a>

> Code samples

```bash
curl https://example.com/ipam/prefixes/0/available-prefixes/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "is_pool": true,
    "prefix": "string",
    "role": 0,
    "site": 0,
    "status": "container",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vlan": 0,
    "vrf": 0
  }'
```

`POST /ipam/prefixes/{id}/available-prefixes/`

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "is_pool": true,
  "prefix": "string",
  "role": 0,
  "site": 0,
  "status": "container",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vlan": 0,
  "vrf": 0
}
```

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this prefix.|
|body|body|[WritablePrefix](#schemawritableprefix)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» is_pool|body|boolean|false|All IP addresses within this prefix are considered usable|
|» prefix|body|string|true|IPv4 or IPv6 network with mask|
|» role|body|integer \| null|false|The primary function of this prefix|
|» site|body|integer \| null|false|none|
|» status|body|string|false|Operational status of this prefix|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vlan|body|integer \| null|false|none|
|» vrf|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|container|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 201 Response

```json
[
  {
    "family": 0,
    "prefix": "string",
    "vrf": {
      "id": 0,
      "name": "string",
      "prefix_count": 0,
      "rd": "string",
      "url": "http://example.com"
    }
  }
]
```

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="a-convenience-method-for-returning-available-child-prefixes-within-a-parent-1-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AvailablePrefix](#schemaavailableprefix)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_list

<a id="opIdipam_rirs_list"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/rirs/`

Call to super to allow for caching

<h3 id="ipamrirslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|is_private|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "aggregate_count": 0,
      "description": "string",
      "id": 0,
      "is_private": true,
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="ipamrirslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamrirslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RIR](#schemarir)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_create

<a id="opIdipam_rirs_create"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "is_private": true,
    "name": "string",
    "slug": "string"
  }'
```

`POST /ipam/rirs/`

> Body parameter

```json
{
  "description": "string",
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RIR](#schemarir)|true|none|
|» description|body|string|false|none|
|» is_private|body|boolean|false|IP space managed by this RIR is considered private|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "aggregate_count": 0,
  "description": "string",
  "id": 0,
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RIR](#schemarir)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_read

<a id="opIdipam_rirs_read"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/rirs/{id}/`

Call to super to allow for caching

<h3 id="ipamrirsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this RIR.|

> Example responses

> 200 Response

```json
{
  "aggregate_count": 0,
  "description": "string",
  "id": 0,
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RIR](#schemarir)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_update

<a id="opIdipam_rirs_update"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "is_private": true,
    "name": "string",
    "slug": "string"
  }'
```

`PUT /ipam/rirs/{id}/`

> Body parameter

```json
{
  "description": "string",
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this RIR.|
|body|body|[RIR](#schemarir)|true|none|
|» description|body|string|false|none|
|» is_private|body|boolean|false|IP space managed by this RIR is considered private|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "aggregate_count": 0,
  "description": "string",
  "id": 0,
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RIR](#schemarir)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_delete

<a id="opIdipam_rirs_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/rirs/{id}/`

<h3 id="ipamrirsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this RIR.|

<h3 id="ipamrirsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_rirs_partial_update

<a id="opIdipam_rirs_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/rirs/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "is_private": true,
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /ipam/rirs/{id}/`

> Body parameter

```json
{
  "description": "string",
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this RIR.|
|body|body|[RIR](#schemarir)|true|none|
|» description|body|string|false|none|
|» is_private|body|boolean|false|IP space managed by this RIR is considered private|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "aggregate_count": 0,
  "description": "string",
  "id": 0,
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

<h3 id="ipamrirspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RIR](#schemarir)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_list

<a id="opIdipam_roles_list"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/roles/`

Call to super to allow for caching

<h3 id="ipamroleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "prefix_count": 0,
      "slug": "string",
      "vlan_count": 0,
      "weight": 0
    }
  ]
}
```

<h3 id="ipamroleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamroleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Role](#schemarole)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_create

<a id="opIdipam_roles_create"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string",
    "weight": 0
  }'
```

`POST /ipam/roles/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string",
  "weight": 0
}
```

<h3 id="ipamrolescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Role](#schemarole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» weight|body|integer|false|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "vlan_count": 0,
  "weight": 0
}
```

<h3 id="ipamrolescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_read

<a id="opIdipam_roles_read"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/roles/{id}/`

Call to super to allow for caching

<h3 id="ipamrolesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this role.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "vlan_count": 0,
  "weight": 0
}
```

<h3 id="ipamrolesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_update

<a id="opIdipam_roles_update"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string",
    "weight": 0
  }'
```

`PUT /ipam/roles/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string",
  "weight": 0
}
```

<h3 id="ipamrolesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this role.|
|body|body|[Role](#schemarole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» weight|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "vlan_count": 0,
  "weight": 0
}
```

<h3 id="ipamrolesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_delete

<a id="opIdipam_roles_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/roles/{id}/`

<h3 id="ipamrolesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this role.|

<h3 id="ipamrolesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_roles_partial_update

<a id="opIdipam_roles_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/roles/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string",
    "weight": 0
  }'
```

`PATCH /ipam/roles/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string",
  "weight": 0
}
```

<h3 id="ipamrolespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this role.|
|body|body|[Role](#schemarole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» weight|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "vlan_count": 0,
  "weight": 0
}
```

<h3 id="ipamrolespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_list

<a id="opIdipam_services_list"></a>

> Code samples

```bash
curl https://example.com/ipam/services/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/services/`

Call to super to allow for caching

<h3 id="ipamserviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|protocol|query|string|false|none|
|port|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|virtual_machine_id|query|string|false|none|
|virtual_machine|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|protocol__n|query|string|false|none|
|port__n|query|string|false|none|
|port__lte|query|string|false|none|
|port__lt|query|string|false|none|
|port__gte|query|string|false|none|
|port__gt|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|virtual_machine_id__n|query|string|false|none|
|virtual_machine__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "ipaddresses": [
        {
          "address": "string",
          "family": "string",
          "id": 0,
          "url": "http://example.com"
        }
      ],
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "port": 1,
      "protocol": {
        "label": "TCP",
        "value": "tcp"
      },
      "tags": [
        "string"
      ],
      "virtual_machine": {
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="ipamserviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamserviceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Service](#schemaservice)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_create

<a id="opIdipam_services_create"></a>

> Code samples

```bash
curl https://example.com/ipam/services/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "device": 0,
    "ipaddresses": [
      0
    ],
    "name": "string",
    "port": 1,
    "protocol": "tcp",
    "tags": [
      "string"
    ],
    "virtual_machine": 0
  }'
```

`POST /ipam/services/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "device": 0,
  "ipaddresses": [
    0
  ],
  "name": "string",
  "port": 1,
  "protocol": "tcp",
  "tags": [
    "string"
  ],
  "virtual_machine": 0
}
```

<h3 id="ipamservicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableService](#schemawritableservice)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» device|body|integer \| null|false|none|
|» ipaddresses|body|[integer]|false|none|
|» name|body|string|true|none|
|» port|body|integer|true|none|
|» protocol|body|string|true|none|
|» tags|body|[string]|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|tcp|
|» protocol|udp|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddresses": [
    {
      "address": "string",
      "family": "string",
      "id": 0,
      "url": "http://example.com"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": {
    "label": "TCP",
    "value": "tcp"
  },
  "tags": [
    "string"
  ],
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamservicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_read

<a id="opIdipam_services_read"></a>

> Code samples

```bash
curl https://example.com/ipam/services/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/services/{id}/`

Call to super to allow for caching

<h3 id="ipamservicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this service.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddresses": [
    {
      "address": "string",
      "family": "string",
      "id": 0,
      "url": "http://example.com"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": {
    "label": "TCP",
    "value": "tcp"
  },
  "tags": [
    "string"
  ],
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamservicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_update

<a id="opIdipam_services_update"></a>

> Code samples

```bash
curl https://example.com/ipam/services/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "device": 0,
    "ipaddresses": [
      0
    ],
    "name": "string",
    "port": 1,
    "protocol": "tcp",
    "tags": [
      "string"
    ],
    "virtual_machine": 0
  }'
```

`PUT /ipam/services/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "device": 0,
  "ipaddresses": [
    0
  ],
  "name": "string",
  "port": 1,
  "protocol": "tcp",
  "tags": [
    "string"
  ],
  "virtual_machine": 0
}
```

<h3 id="ipamservicesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this service.|
|body|body|[WritableService](#schemawritableservice)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» device|body|integer \| null|false|none|
|» ipaddresses|body|[integer]|false|none|
|» name|body|string|true|none|
|» port|body|integer|true|none|
|» protocol|body|string|true|none|
|» tags|body|[string]|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|tcp|
|» protocol|udp|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddresses": [
    {
      "address": "string",
      "family": "string",
      "id": 0,
      "url": "http://example.com"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": {
    "label": "TCP",
    "value": "tcp"
  },
  "tags": [
    "string"
  ],
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamservicesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_delete

<a id="opIdipam_services_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/services/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/services/{id}/`

<h3 id="ipamservicesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this service.|

<h3 id="ipamservicesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_services_partial_update

<a id="opIdipam_services_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/services/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "device": 0,
    "ipaddresses": [
      0
    ],
    "name": "string",
    "port": 1,
    "protocol": "tcp",
    "tags": [
      "string"
    ],
    "virtual_machine": 0
  }'
```

`PATCH /ipam/services/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "device": 0,
  "ipaddresses": [
    0
  ],
  "name": "string",
  "port": 1,
  "protocol": "tcp",
  "tags": [
    "string"
  ],
  "virtual_machine": 0
}
```

<h3 id="ipamservicespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this service.|
|body|body|[WritableService](#schemawritableservice)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» device|body|integer \| null|false|none|
|» ipaddresses|body|[integer]|false|none|
|» name|body|string|true|none|
|» port|body|integer|true|none|
|» protocol|body|string|true|none|
|» tags|body|[string]|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|tcp|
|» protocol|udp|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddresses": [
    {
      "address": "string",
      "family": "string",
      "id": 0,
      "url": "http://example.com"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": {
    "label": "TCP",
    "value": "tcp"
  },
  "tags": [
    "string"
  ],
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamservicespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_list

<a id="opIdipam_vlan-groups_list"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vlan-groups/`

Call to super to allow for caching

<h3 id="ipamvlan-groupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "slug": "string",
      "vlan_count": 0
    }
  ]
}
```

<h3 id="ipamvlan-groupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamvlan-groupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VLANGroup](#schemavlangroup)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_create

<a id="opIdipam_vlan-groups_create"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "site": 0,
    "slug": "string"
  }'
```

`POST /ipam/vlan-groups/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "site": 0,
  "slug": "string"
}
```

<h3 id="ipamvlan-groupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVLANGroup](#schemawritablevlangroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string",
  "vlan_count": 0
}
```

<h3 id="ipamvlan-groupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VLANGroup](#schemavlangroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_read

<a id="opIdipam_vlan-groups_read"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vlan-groups/{id}/`

Call to super to allow for caching

<h3 id="ipamvlan-groupsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN group.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string",
  "vlan_count": 0
}
```

<h3 id="ipamvlan-groupsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLANGroup](#schemavlangroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_update

<a id="opIdipam_vlan-groups_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "site": 0,
    "slug": "string"
  }'
```

`PUT /ipam/vlan-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "site": 0,
  "slug": "string"
}
```

<h3 id="ipamvlan-groupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN group.|
|body|body|[WritableVLANGroup](#schemawritablevlangroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string",
  "vlan_count": 0
}
```

<h3 id="ipamvlan-groupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLANGroup](#schemavlangroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_delete

<a id="opIdipam_vlan-groups_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/vlan-groups/{id}/`

<h3 id="ipamvlan-groupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN group.|

<h3 id="ipamvlan-groupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlan-groups_partial_update

<a id="opIdipam_vlan-groups_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vlan-groups/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "site": 0,
    "slug": "string"
  }'
```

`PATCH /ipam/vlan-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "site": 0,
  "slug": "string"
}
```

<h3 id="ipamvlan-groupspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN group.|
|body|body|[WritableVLANGroup](#schemawritablevlangroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string",
  "vlan_count": 0
}
```

<h3 id="ipamvlan-groupspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLANGroup](#schemavlangroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_list

<a id="opIdipam_vlans_list"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vlans/`

Call to super to allow for caching

<h3 id="ipamvlanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|vid|query|string|false|none|
|name|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|group_id|query|string|false|none|
|group|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|status|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|vid__n|query|string|false|none|
|vid__lte|query|string|false|none|
|vid__lt|query|string|false|none|
|vid__gte|query|string|false|none|
|vid__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|group_id__n|query|string|false|none|
|group__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|status__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "display_name": "string",
      "group": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com",
        "vlan_count": 0
      },
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "prefix_count": 0,
      "role": {
        "id": 0,
        "name": "string",
        "prefix_count": 0,
        "slug": "string",
        "url": "http://example.com",
        "vlan_count": 0
      },
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Active",
        "value": "active"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "vid": 1
    }
  ]
}
```

<h3 id="ipamvlanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamvlanslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VLAN](#schemavlan)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_create

<a id="opIdipam_vlans_create"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "role": 0,
    "site": 0,
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vid": 1
  }'
```

`POST /ipam/vlans/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "role": 0,
  "site": 0,
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vid": 1
}
```

<h3 id="ipamvlanscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVLAN](#schemawritablevlan)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» role|body|integer \| null|false|none|
|» site|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vid|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vid": 1
}
```

<h3 id="ipamvlanscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VLAN](#schemavlan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_read

<a id="opIdipam_vlans_read"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vlans/{id}/`

Call to super to allow for caching

<h3 id="ipamvlansread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vid": 1
}
```

<h3 id="ipamvlansread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLAN](#schemavlan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_update

<a id="opIdipam_vlans_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "role": 0,
    "site": 0,
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vid": 1
  }'
```

`PUT /ipam/vlans/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "role": 0,
  "site": 0,
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vid": 1
}
```

<h3 id="ipamvlansupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN.|
|body|body|[WritableVLAN](#schemawritablevlan)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» role|body|integer \| null|false|none|
|» site|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vid|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vid": 1
}
```

<h3 id="ipamvlansupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLAN](#schemavlan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_delete

<a id="opIdipam_vlans_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/vlans/{id}/`

<h3 id="ipamvlansdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN.|

<h3 id="ipamvlansdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vlans_partial_update

<a id="opIdipam_vlans_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vlans/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "role": 0,
    "site": 0,
    "status": "active",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vid": 1
  }'
```

`PATCH /ipam/vlans/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "role": 0,
  "site": 0,
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vid": 1
}
```

<h3 id="ipamvlanspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VLAN.|
|body|body|[WritableVLAN](#schemawritablevlan)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» role|body|integer \| null|false|none|
|» site|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vid|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|reserved|
|» status|deprecated|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vid": 1
}
```

<h3 id="ipamvlanspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VLAN](#schemavlan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_list

<a id="opIdipam_vrfs_list"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vrfs/`

Call to super to allow for caching

<h3 id="ipamvrfslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|rd|query|string|false|none|
|enforce_unique|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|rd__n|query|string|false|none|
|rd__ic|query|string|false|none|
|rd__nic|query|string|false|none|
|rd__iew|query|string|false|none|
|rd__niew|query|string|false|none|
|rd__isw|query|string|false|none|
|rd__nisw|query|string|false|none|
|rd__ie|query|string|false|none|
|rd__nie|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "display_name": "string",
      "enforce_unique": true,
      "id": 0,
      "ipaddress_count": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "prefix_count": 0,
      "rd": "string",
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="ipamvrfslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="ipamvrfslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VRF](#schemavrf)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_create

<a id="opIdipam_vrfs_create"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "enforce_unique": true,
    "name": "string",
    "rd": "string",
    "tags": [
      "string"
    ],
    "tenant": 0
  }'
```

`POST /ipam/vrfs/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "enforce_unique": true,
  "name": "string",
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": 0
}
```

<h3 id="ipamvrfscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVRF](#schemawritablevrf)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» enforce_unique|body|boolean|false|Prevent duplicate prefixes/IP addresses within this VRF|
|» name|body|string|true|none|
|» rd|body|string \| null|false|Unique route distinguisher (as defined in RFC 4364)|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamvrfscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VRF](#schemavrf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_read

<a id="opIdipam_vrfs_read"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ipam/vrfs/{id}/`

Call to super to allow for caching

<h3 id="ipamvrfsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VRF.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamvrfsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VRF](#schemavrf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_update

<a id="opIdipam_vrfs_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "enforce_unique": true,
    "name": "string",
    "rd": "string",
    "tags": [
      "string"
    ],
    "tenant": 0
  }'
```

`PUT /ipam/vrfs/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "enforce_unique": true,
  "name": "string",
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": 0
}
```

<h3 id="ipamvrfsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VRF.|
|body|body|[WritableVRF](#schemawritablevrf)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» enforce_unique|body|boolean|false|Prevent duplicate prefixes/IP addresses within this VRF|
|» name|body|string|true|none|
|» rd|body|string \| null|false|Unique route distinguisher (as defined in RFC 4364)|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamvrfsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VRF](#schemavrf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_delete

<a id="opIdipam_vrfs_delete"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ipam/vrfs/{id}/`

<h3 id="ipamvrfsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VRF.|

<h3 id="ipamvrfsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ipam_vrfs_partial_update

<a id="opIdipam_vrfs_partial_update"></a>

> Code samples

```bash
curl https://example.com/ipam/vrfs/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "description": "string",
    "enforce_unique": true,
    "name": "string",
    "rd": "string",
    "tags": [
      "string"
    ],
    "tenant": 0
  }'
```

`PATCH /ipam/vrfs/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "description": "string",
  "enforce_unique": true,
  "name": "string",
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": 0
}
```

<h3 id="ipamvrfspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this VRF.|
|body|body|[WritableVRF](#schemawritablevrf)|true|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» enforce_unique|body|boolean|false|Prevent duplicate prefixes/IP addresses within this VRF|
|» name|body|string|true|none|
|» rd|body|string \| null|false|Unique route distinguisher (as defined in RFC 4364)|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="ipamvrfspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VRF](#schemavrf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-secrets">secrets</h1>

## This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.

<a id="opIdsecrets_generate-rsa-key-pair_list"></a>

> Code samples

```bash
curl https://example.com/secrets/generate-rsa-key-pair/ \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/generate-rsa-key-pair/`

{
        "public_key": "<public key>",
        "private_key": "<private key>"
    }

<h3 id="this-endpoint-can-be-used-to-generate-a-new-rsa-key-pair-the-keys-are-returned-in-pem-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_get-session-key_create

<a id="opIdsecrets_get-session-key_create"></a>

> Code samples

```bash
curl https://example.com/secrets/get-session-key/ \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /secrets/get-session-key/`

Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
key is POSTed with the name `private_key`. An example:

    curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
    --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/

This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:

    {
        "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
    }

This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
key will be returned instead of a new one.

<h3 id="secretsget-session-keycreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_list

<a id="opIdsecrets_secret-roles_list"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/secret-roles/`

Call to super to allow for caching

<h3 id="secretssecret-roleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "secret_count": 0,
      "slug": "string"
    }
  ]
}
```

<h3 id="secretssecret-roleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="secretssecret-roleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[SecretRole](#schemasecretrole)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_create

<a id="opIdsecrets_secret-roles_create"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /secrets/secret-roles/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="secretssecret-rolescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SecretRole](#schemasecretrole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string"
}
```

<h3 id="secretssecret-rolescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SecretRole](#schemasecretrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_read

<a id="opIdsecrets_secret-roles_read"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/secret-roles/{id}/`

Call to super to allow for caching

<h3 id="secretssecret-rolesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret role.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string"
}
```

<h3 id="secretssecret-rolesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SecretRole](#schemasecretrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_update

<a id="opIdsecrets_secret-roles_update"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /secrets/secret-roles/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="secretssecret-rolesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret role.|
|body|body|[SecretRole](#schemasecretrole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string"
}
```

<h3 id="secretssecret-rolesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SecretRole](#schemasecretrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_delete

<a id="opIdsecrets_secret-roles_delete"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /secrets/secret-roles/{id}/`

<h3 id="secretssecret-rolesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret role.|

<h3 id="secretssecret-rolesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secret-roles_partial_update

<a id="opIdsecrets_secret-roles_partial_update"></a>

> Code samples

```bash
curl https://example.com/secrets/secret-roles/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /secrets/secret-roles/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="secretssecret-rolespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret role.|
|body|body|[SecretRole](#schemasecretrole)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string"
}
```

<h3 id="secretssecret-rolespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SecretRole](#schemasecretrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_list

<a id="opIdsecrets_secrets_list"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/secrets/`

<h3 id="secretssecretslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|device_id|query|string|false|none|
|device|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|device_id__n|query|string|false|none|
|device__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "created": "1970-01-01",
      "custom_fields": {},
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "hash": "string",
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "plaintext": "string",
      "role": {
        "id": 0,
        "name": "string",
        "secret_count": 0,
        "slug": "string",
        "url": "http://example.com"
      },
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="secretssecretslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="secretssecretslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Secret](#schemasecret)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_create

<a id="opIdsecrets_secrets_create"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "device": 0,
    "name": "string",
    "plaintext": "string",
    "role": 0,
    "tags": [
      "string"
    ]
  }'
```

`POST /secrets/secrets/`

> Body parameter

```json
{
  "custom_fields": {},
  "device": 0,
  "name": "string",
  "plaintext": "string",
  "role": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableSecret](#schemawritablesecret)|true|none|
|» custom_fields|body|object|false|none|
|» device|body|integer|true|none|
|» name|body|string|false|none|
|» plaintext|body|string|true|none|
|» role|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": {
    "id": 0,
    "name": "string",
    "secret_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_read

<a id="opIdsecrets_secrets_read"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/secrets/{id}/`

<h3 id="secretssecretsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": {
    "id": 0,
    "name": "string",
    "secret_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_update

<a id="opIdsecrets_secrets_update"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "device": 0,
    "name": "string",
    "plaintext": "string",
    "role": 0,
    "tags": [
      "string"
    ]
  }'
```

`PUT /secrets/secrets/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "device": 0,
  "name": "string",
  "plaintext": "string",
  "role": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret.|
|body|body|[WritableSecret](#schemawritablesecret)|true|none|
|» custom_fields|body|object|false|none|
|» device|body|integer|true|none|
|» name|body|string|false|none|
|» plaintext|body|string|true|none|
|» role|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": {
    "id": 0,
    "name": "string",
    "secret_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_delete

<a id="opIdsecrets_secrets_delete"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /secrets/secrets/{id}/`

<h3 id="secretssecretsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret.|

<h3 id="secretssecretsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## secrets_secrets_partial_update

<a id="opIdsecrets_secrets_partial_update"></a>

> Code samples

```bash
curl https://example.com/secrets/secrets/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "device": 0,
    "name": "string",
    "plaintext": "string",
    "role": 0,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /secrets/secrets/{id}/`

> Body parameter

```json
{
  "custom_fields": {},
  "device": 0,
  "name": "string",
  "plaintext": "string",
  "role": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this secret.|
|body|body|[WritableSecret](#schemawritablesecret)|true|none|
|» custom_fields|body|object|false|none|
|» device|body|integer|true|none|
|» name|body|string|false|none|
|» plaintext|body|string|true|none|
|» role|body|integer|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": {
    "id": 0,
    "name": "string",
    "secret_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

<h3 id="secretssecretspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Secret](#schemasecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-tenancy">tenancy</h1>

## tenancy_tenant-groups_list

<a id="opIdtenancy_tenant-groups_list"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tenancy/tenant-groups/`

Call to super to allow for caching

<h3 id="tenancytenant-groupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|parent_id|query|string|false|none|
|parent|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|parent_id__n|query|string|false|none|
|parent__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "id": 0,
      "name": "string",
      "parent": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "tenant_count": 0,
        "url": "http://example.com"
      },
      "slug": "string",
      "tenant_count": 0
    }
  ]
}
```

<h3 id="tenancytenant-groupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="tenancytenant-groupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[TenantGroup](#schematenantgroup)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenant-groups_create

<a id="opIdtenancy_tenant-groups_create"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`POST /tenancy/tenant-groups/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="tenancytenant-groupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableTenantGroup](#schemawritabletenantgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "slug": "string",
  "tenant_count": 0
}
```

<h3 id="tenancytenant-groupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[TenantGroup](#schematenantgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenant-groups_read

<a id="opIdtenancy_tenant-groups_read"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tenancy/tenant-groups/{id}/`

Call to super to allow for caching

<h3 id="tenancytenant-groupsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant group.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "slug": "string",
  "tenant_count": 0
}
```

<h3 id="tenancytenant-groupsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TenantGroup](#schematenantgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenant-groups_update

<a id="opIdtenancy_tenant-groups_update"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`PUT /tenancy/tenant-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="tenancytenant-groupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant group.|
|body|body|[WritableTenantGroup](#schemawritabletenantgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "slug": "string",
  "tenant_count": 0
}
```

<h3 id="tenancytenant-groupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TenantGroup](#schematenantgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenant-groups_delete

<a id="opIdtenancy_tenant-groups_delete"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tenancy/tenant-groups/{id}/`

<h3 id="tenancytenant-groupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant group.|

<h3 id="tenancytenant-groupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenant-groups_partial_update

<a id="opIdtenancy_tenant-groups_partial_update"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenant-groups/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "parent": 0,
    "slug": "string"
  }'
```

`PATCH /tenancy/tenant-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "parent": 0,
  "slug": "string"
}
```

<h3 id="tenancytenant-groupspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant group.|
|body|body|[WritableTenantGroup](#schemawritabletenantgroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» parent|body|integer \| null|false|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "slug": "string",
  "tenant_count": 0
}
```

<h3 id="tenancytenant-groupspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TenantGroup](#schematenantgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_list

<a id="opIdtenancy_tenants_list"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tenancy/tenants/`

Call to super to allow for caching

<h3 id="tenancytenantslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|group_id|query|string|false|none|
|group|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|group_id__n|query|string|false|none|
|group__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "circuit_count": 0,
      "cluster_count": 0,
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "description": "string",
      "device_count": 0,
      "group": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "tenant_count": 0,
        "url": "http://example.com"
      },
      "id": 0,
      "ipaddress_count": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "prefix_count": 0,
      "rack_count": 0,
      "site_count": 0,
      "slug": "string",
      "tags": [
        "string"
      ],
      "virtualmachine_count": 0,
      "vlan_count": 0,
      "vrf_count": 0
    }
  ]
}
```

<h3 id="tenancytenantslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="tenancytenantslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Tenant](#schematenant)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_create

<a id="opIdtenancy_tenants_create"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /tenancy/tenants/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="tenancytenantscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableTenant](#schemawritabletenant)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 201 Response

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

<h3 id="tenancytenantscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Tenant](#schematenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_read

<a id="opIdtenancy_tenants_read"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tenancy/tenants/{id}/`

Call to super to allow for caching

<h3 id="tenancytenantsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant.|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

<h3 id="tenancytenantsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tenant](#schematenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_update

<a id="opIdtenancy_tenants_update"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`PUT /tenancy/tenants/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="tenancytenantsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant.|
|body|body|[WritableTenant](#schemawritabletenant)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

<h3 id="tenancytenantsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tenant](#schematenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_delete

<a id="opIdtenancy_tenants_delete"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tenancy/tenants/{id}/`

<h3 id="tenancytenantsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant.|

<h3 id="tenancytenantsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## tenancy_tenants_partial_update

<a id="opIdtenancy_tenants_partial_update"></a>

> Code samples

```bash
curl https://example.com/tenancy/tenants/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "description": "string",
    "group": 0,
    "name": "string",
    "slug": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /tenancy/tenants/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "description": "string",
  "group": 0,
  "name": "string",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="tenancytenantspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this tenant.|
|body|body|[WritableTenant](#schemawritabletenant)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» description|body|string|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

<h3 id="tenancytenantspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tenant](#schematenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="netbox-api-virtualization">virtualization</h1>

## virtualization_cluster-groups_list

<a id="opIdvirtualization_cluster-groups_list"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/cluster-groups/`

Call to super to allow for caching

<h3 id="virtualizationcluster-groupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cluster_count": 0,
      "description": "string",
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="virtualizationcluster-groupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="virtualizationcluster-groupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ClusterGroup](#schemaclustergroup)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-groups_create

<a id="opIdvirtualization_cluster-groups_create"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /virtualization/cluster-groups/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClusterGroup](#schemaclustergroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ClusterGroup](#schemaclustergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-groups_read

<a id="opIdvirtualization_cluster-groups_read"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/cluster-groups/{id}/`

Call to super to allow for caching

<h3 id="virtualizationcluster-groupsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster group.|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterGroup](#schemaclustergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-groups_update

<a id="opIdvirtualization_cluster-groups_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /virtualization/cluster-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster group.|
|body|body|[ClusterGroup](#schemaclustergroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterGroup](#schemaclustergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-groups_delete

<a id="opIdvirtualization_cluster-groups_delete"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualization/cluster-groups/{id}/`

<h3 id="virtualizationcluster-groupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster group.|

<h3 id="virtualizationcluster-groupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-groups_partial_update

<a id="opIdvirtualization_cluster-groups_partial_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-groups/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /virtualization/cluster-groups/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster group.|
|body|body|[ClusterGroup](#schemaclustergroup)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-groupspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterGroup](#schemaclustergroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_list

<a id="opIdvirtualization_cluster-types_list"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/cluster-types/`

Call to super to allow for caching

<h3 id="virtualizationcluster-typeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|slug|query|string|false|none|
|description|query|string|false|none|
|q|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|slug__n|query|string|false|none|
|slug__ic|query|string|false|none|
|slug__nic|query|string|false|none|
|slug__iew|query|string|false|none|
|slug__niew|query|string|false|none|
|slug__isw|query|string|false|none|
|slug__nisw|query|string|false|none|
|slug__ie|query|string|false|none|
|slug__nie|query|string|false|none|
|description__n|query|string|false|none|
|description__ic|query|string|false|none|
|description__nic|query|string|false|none|
|description__iew|query|string|false|none|
|description__niew|query|string|false|none|
|description__isw|query|string|false|none|
|description__nisw|query|string|false|none|
|description__ie|query|string|false|none|
|description__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cluster_count": 0,
      "description": "string",
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="virtualizationcluster-typeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="virtualizationcluster-typeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ClusterType](#schemaclustertype)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_create

<a id="opIdvirtualization_cluster-types_create"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`POST /virtualization/cluster-types/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClusterType](#schemaclustertype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 201 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ClusterType](#schemaclustertype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_read

<a id="opIdvirtualization_cluster-types_read"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/cluster-types/{id}/`

Call to super to allow for caching

<h3 id="virtualizationcluster-typesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster type.|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterType](#schemaclustertype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_update

<a id="opIdvirtualization_cluster-types_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PUT /virtualization/cluster-types/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster type.|
|body|body|[ClusterType](#schemaclustertype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterType](#schemaclustertype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_delete

<a id="opIdvirtualization_cluster-types_delete"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualization/cluster-types/{id}/`

<h3 id="virtualizationcluster-typesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster type.|

<h3 id="virtualizationcluster-typesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_cluster-types_partial_update

<a id="opIdvirtualization_cluster-types_partial_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/cluster-types/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "slug": "string"
  }'
```

`PATCH /virtualization/cluster-types/{id}/`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster type.|
|body|body|[ClusterType](#schemaclustertype)|true|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» slug|body|string(slug)|true|none|

> Example responses

> 200 Response

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

<h3 id="virtualizationcluster-typespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ClusterType](#schemaclustertype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_list

<a id="opIdvirtualization_clusters_list"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/clusters/`

Call to super to allow for caching

<h3 id="virtualizationclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|group_id|query|string|false|none|
|group|query|string|false|none|
|type_id|query|string|false|none|
|type|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|group_id__n|query|string|false|none|
|group__n|query|string|false|none|
|type_id__n|query|string|false|none|
|type__n|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "comments": "string",
      "created": "1970-01-01",
      "custom_fields": {},
      "device_count": 0,
      "group": {
        "cluster_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "name": "string",
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "type": {
        "cluster_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "virtualmachine_count": 0
    }
  ]
}
```

<h3 id="virtualizationclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="virtualizationclusterslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Cluster](#schemacluster)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_create

<a id="opIdvirtualization_clusters_create"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "group": 0,
    "name": "string",
    "site": 0,
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`POST /virtualization/clusters/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "group": 0,
  "name": "string",
  "site": 0,
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="virtualizationclusterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableCluster](#schemawritablecluster)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

> Example responses

> 201 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "virtualmachine_count": 0
}
```

<h3 id="virtualizationclusterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_read

<a id="opIdvirtualization_clusters_read"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/clusters/{id}/`

Call to super to allow for caching

<h3 id="virtualizationclustersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster.|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "virtualmachine_count": 0
}
```

<h3 id="virtualizationclustersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_update

<a id="opIdvirtualization_clusters_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "group": 0,
    "name": "string",
    "site": 0,
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`PUT /virtualization/clusters/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "group": 0,
  "name": "string",
  "site": 0,
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="virtualizationclustersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster.|
|body|body|[WritableCluster](#schemawritablecluster)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "virtualmachine_count": 0
}
```

<h3 id="virtualizationclustersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_delete

<a id="opIdvirtualization_clusters_delete"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualization/clusters/{id}/`

<h3 id="virtualizationclustersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster.|

<h3 id="virtualizationclustersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_clusters_partial_update

<a id="opIdvirtualization_clusters_partial_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/clusters/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comments": "string",
    "custom_fields": {},
    "group": 0,
    "name": "string",
    "site": 0,
    "tags": [
      "string"
    ],
    "tenant": 0,
    "type": 0
  }'
```

`PATCH /virtualization/clusters/{id}/`

> Body parameter

```json
{
  "comments": "string",
  "custom_fields": {},
  "group": 0,
  "name": "string",
  "site": 0,
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0
}
```

<h3 id="virtualizationclusterspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cluster.|
|body|body|[WritableCluster](#schemawritablecluster)|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» group|body|integer \| null|false|none|
|» name|body|string|true|none|
|» site|body|integer \| null|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» type|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "virtualmachine_count": 0
}
```

<h3 id="virtualizationclusterspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Cluster](#schemacluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_list

<a id="opIdvirtualization_interfaces_list"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/interfaces/`

Call to super to allow for caching

<h3 id="virtualizationinterfaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|enabled|query|string|false|none|
|mtu|query|string|false|none|
|q|query|string|false|none|
|virtual_machine_id|query|string|false|none|
|virtual_machine|query|string|false|none|
|mac_address|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|mtu__n|query|string|false|none|
|mtu__lte|query|string|false|none|
|mtu__lt|query|string|false|none|
|mtu__gte|query|string|false|none|
|mtu__gt|query|string|false|none|
|virtual_machine_id__n|query|string|false|none|
|virtual_machine__n|query|string|false|none|
|mac_address__n|query|string|false|none|
|mac_address__ic|query|string|false|none|
|mac_address__nic|query|string|false|none|
|mac_address__iew|query|string|false|none|
|mac_address__niew|query|string|false|none|
|mac_address__isw|query|string|false|none|
|mac_address__nisw|query|string|false|none|
|mac_address__ie|query|string|false|none|
|mac_address__nie|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "description": "string",
      "enabled": true,
      "id": 0,
      "mac_address": "string",
      "mode": {
        "label": "Access",
        "value": "access"
      },
      "mtu": 1,
      "name": "string",
      "tagged_vlans": [
        {
          "display_name": "string",
          "id": 0,
          "name": "string",
          "url": "http://example.com",
          "vid": 1
        }
      ],
      "tags": [
        "string"
      ],
      "type": {
        "label": "Virtual",
        "value": "virtual"
      },
      "untagged_vlan": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com",
        "vid": 1
      },
      "virtual_machine": {
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="virtualizationinterfaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="virtualizationinterfaceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VirtualMachineInterface](#schemavirtualmachineinterface)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_create

<a id="opIdvirtualization_interfaces_create"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enabled": true,
    "mac_address": "string",
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0,
    "virtual_machine": 0
  }'
```

`POST /virtualization/interfaces/`

> Body parameter

```json
{
  "description": "string",
  "enabled": true,
  "mac_address": "string",
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0,
  "virtual_machine": 0
}
```

<h3 id="virtualizationinterfacescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVirtualMachineInterface](#schemawritablevirtualmachineinterface)|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|false|none|
|» mac_address|body|string \| null|false|none|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="virtualizationinterfacescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VirtualMachineInterface](#schemavirtualmachineinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_read

<a id="opIdvirtualization_interfaces_read"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/interfaces/{id}/`

Call to super to allow for caching

<h3 id="virtualizationinterfacesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="virtualizationinterfacesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineInterface](#schemavirtualmachineinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_update

<a id="opIdvirtualization_interfaces_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enabled": true,
    "mac_address": "string",
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0,
    "virtual_machine": 0
  }'
```

`PUT /virtualization/interfaces/{id}/`

> Body parameter

```json
{
  "description": "string",
  "enabled": true,
  "mac_address": "string",
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0,
  "virtual_machine": 0
}
```

<h3 id="virtualizationinterfacesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|
|body|body|[WritableVirtualMachineInterface](#schemawritablevirtualmachineinterface)|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|false|none|
|» mac_address|body|string \| null|false|none|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="virtualizationinterfacesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineInterface](#schemavirtualmachineinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_delete

<a id="opIdvirtualization_interfaces_delete"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualization/interfaces/{id}/`

<h3 id="virtualizationinterfacesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|

<h3 id="virtualizationinterfacesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_interfaces_partial_update

<a id="opIdvirtualization_interfaces_partial_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/interfaces/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enabled": true,
    "mac_address": "string",
    "mode": "access",
    "mtu": 1,
    "name": "string",
    "tagged_vlans": [
      0
    ],
    "tags": [
      "string"
    ],
    "type": "virtual",
    "untagged_vlan": 0,
    "virtual_machine": 0
  }'
```

`PATCH /virtualization/interfaces/{id}/`

> Body parameter

```json
{
  "description": "string",
  "enabled": true,
  "mac_address": "string",
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0,
  "virtual_machine": 0
}
```

<h3 id="virtualizationinterfacespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this interface.|
|body|body|[WritableVirtualMachineInterface](#schemawritablevirtualmachineinterface)|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|false|none|
|» mac_address|body|string \| null|false|none|
|» mode|body|string|false|none|
|» mtu|body|integer \| null|false|none|
|» name|body|string|true|none|
|» tagged_vlans|body|[integer]|false|none|
|» tags|body|[string]|false|none|
|» type|body|string|true|none|
|» untagged_vlan|body|integer \| null|false|none|
|» virtual_machine|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|access|
|» mode|tagged|
|» mode|tagged-all|
|» type|virtual|
|» type|lag|
|» type|100base-tx|
|» type|1000base-t|
|» type|2.5gbase-t|
|» type|5gbase-t|
|» type|10gbase-t|
|» type|10gbase-cx4|
|» type|1000base-x-gbic|
|» type|1000base-x-sfp|
|» type|10gbase-x-sfpp|
|» type|10gbase-x-xfp|
|» type|10gbase-x-xenpak|
|» type|10gbase-x-x2|
|» type|25gbase-x-sfp28|
|» type|40gbase-x-qsfpp|
|» type|50gbase-x-sfp28|
|» type|100gbase-x-cfp|
|» type|100gbase-x-cfp2|
|» type|200gbase-x-cfp2|
|» type|100gbase-x-cfp4|
|» type|100gbase-x-cpak|
|» type|100gbase-x-qsfp28|
|» type|200gbase-x-qsfp56|
|» type|400gbase-x-qsfpdd|
|» type|400gbase-x-osfp|
|» type|ieee802.11a|
|» type|ieee802.11g|
|» type|ieee802.11n|
|» type|ieee802.11ac|
|» type|ieee802.11ad|
|» type|ieee802.11ax|
|» type|gsm|
|» type|cdma|
|» type|lte|
|» type|sonet-oc3|
|» type|sonet-oc12|
|» type|sonet-oc48|
|» type|sonet-oc192|
|» type|sonet-oc768|
|» type|sonet-oc1920|
|» type|sonet-oc3840|
|» type|1gfc-sfp|
|» type|2gfc-sfp|
|» type|4gfc-sfp|
|» type|8gfc-sfpp|
|» type|16gfc-sfpp|
|» type|32gfc-sfp28|
|» type|128gfc-sfp28|
|» type|infiniband-sdr|
|» type|infiniband-ddr|
|» type|infiniband-qdr|
|» type|infiniband-fdr10|
|» type|infiniband-fdr|
|» type|infiniband-edr|
|» type|infiniband-hdr|
|» type|infiniband-ndr|
|» type|infiniband-xdr|
|» type|t1|
|» type|e1|
|» type|t3|
|» type|e3|
|» type|cisco-stackwise|
|» type|cisco-stackwise-plus|
|» type|cisco-flexstack|
|» type|cisco-flexstack-plus|
|» type|juniper-vcp|
|» type|extreme-summitstack|
|» type|extreme-summitstack-128|
|» type|extreme-summitstack-256|
|» type|extreme-summitstack-512|
|» type|other|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

<h3 id="virtualizationinterfacespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineInterface](#schemavirtualmachineinterface)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_list

<a id="opIdvirtualization_virtual-machines_list"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/virtual-machines/`

Call to super to allow for caching

<h3 id="virtualizationvirtual-machineslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|none|
|name|query|string|false|none|
|cluster|query|string|false|none|
|vcpus|query|string|false|none|
|memory|query|string|false|none|
|disk|query|string|false|none|
|local_context_data|query|string|false|none|
|tenant_group_id|query|string|false|none|
|tenant_group|query|string|false|none|
|tenant_id|query|string|false|none|
|tenant|query|string|false|none|
|created|query|string|false|none|
|created__gte|query|string|false|none|
|created__lte|query|string|false|none|
|last_updated|query|string|false|none|
|last_updated__gte|query|string|false|none|
|last_updated__lte|query|string|false|none|
|q|query|string|false|none|
|status|query|string|false|none|
|cluster_group_id|query|string|false|none|
|cluster_group|query|string|false|none|
|cluster_type_id|query|string|false|none|
|cluster_type|query|string|false|none|
|cluster_id|query|string|false|none|
|region_id|query|string|false|none|
|region|query|string|false|none|
|site_id|query|string|false|none|
|site|query|string|false|none|
|role_id|query|string|false|none|
|role|query|string|false|none|
|platform_id|query|string|false|none|
|platform|query|string|false|none|
|mac_address|query|string|false|none|
|tag|query|string|false|none|
|id__n|query|string|false|none|
|id__lte|query|string|false|none|
|id__lt|query|string|false|none|
|id__gte|query|string|false|none|
|id__gt|query|string|false|none|
|name__n|query|string|false|none|
|name__ic|query|string|false|none|
|name__nic|query|string|false|none|
|name__iew|query|string|false|none|
|name__niew|query|string|false|none|
|name__isw|query|string|false|none|
|name__nisw|query|string|false|none|
|name__ie|query|string|false|none|
|name__nie|query|string|false|none|
|cluster__n|query|string|false|none|
|vcpus__n|query|string|false|none|
|vcpus__lte|query|string|false|none|
|vcpus__lt|query|string|false|none|
|vcpus__gte|query|string|false|none|
|vcpus__gt|query|string|false|none|
|memory__n|query|string|false|none|
|memory__lte|query|string|false|none|
|memory__lt|query|string|false|none|
|memory__gte|query|string|false|none|
|memory__gt|query|string|false|none|
|disk__n|query|string|false|none|
|disk__lte|query|string|false|none|
|disk__lt|query|string|false|none|
|disk__gte|query|string|false|none|
|disk__gt|query|string|false|none|
|tenant_group_id__n|query|string|false|none|
|tenant_group__n|query|string|false|none|
|tenant_id__n|query|string|false|none|
|tenant__n|query|string|false|none|
|status__n|query|string|false|none|
|cluster_group_id__n|query|string|false|none|
|cluster_group__n|query|string|false|none|
|cluster_type_id__n|query|string|false|none|
|cluster_type__n|query|string|false|none|
|cluster_id__n|query|string|false|none|
|region_id__n|query|string|false|none|
|region__n|query|string|false|none|
|site_id__n|query|string|false|none|
|site__n|query|string|false|none|
|role_id__n|query|string|false|none|
|role__n|query|string|false|none|
|platform_id__n|query|string|false|none|
|platform__n|query|string|false|none|
|mac_address__n|query|string|false|none|
|mac_address__ic|query|string|false|none|
|mac_address__nic|query|string|false|none|
|mac_address__iew|query|string|false|none|
|mac_address__niew|query|string|false|none|
|mac_address__isw|query|string|false|none|
|mac_address__nisw|query|string|false|none|
|mac_address__ie|query|string|false|none|
|mac_address__nie|query|string|false|none|
|tag__n|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "cluster": {
        "id": 0,
        "name": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "comments": "string",
      "config_context": {
        "property1": "string",
        "property2": "string"
      },
      "created": "1970-01-01",
      "custom_fields": {},
      "disk": 0,
      "id": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "local_context_data": "string",
      "memory": 0,
      "name": "string",
      "platform": {
        "device_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "primary_ip": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "primary_ip4": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "primary_ip6": {
        "address": "string",
        "family": "string",
        "id": 0,
        "url": "http://example.com"
      },
      "role": {
        "device_count": 0,
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com",
        "virtualmachine_count": 0
      },
      "site": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "status": {
        "label": "Offline",
        "value": "offline"
      },
      "tags": [
        "string"
      ],
      "tenant": {
        "id": 0,
        "name": "string",
        "slug": "string",
        "url": "http://example.com"
      },
      "vcpus": 0
    }
  ]
}
```

<h3 id="virtualizationvirtual-machineslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="virtualizationvirtual-machineslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[VirtualMachineWithConfigContext](#schemavirtualmachinewithconfigcontext)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_create

<a id="opIdvirtualization_virtual-machines_create"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "disk": 0,
    "local_context_data": "string",
    "memory": 0,
    "name": "string",
    "platform": 0,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "role": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vcpus": 0
  }'
```

`POST /virtualization/virtual-machines/`

> Body parameter

```json
{
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "disk": 0,
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": 0,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "role": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WritableVirtualMachineWithConfigContext](#schemawritablevirtualmachinewithconfigcontext)|true|none|
|» cluster|body|integer|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» disk|body|integer \| null|false|none|
|» local_context_data|body|string \| null|false|none|
|» memory|body|integer \| null|false|none|
|» name|body|string|true|none|
|» platform|body|integer \| null|false|none|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» role|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vcpus|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|decommissioning|

> Example responses

> 201 Response

```json
{
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[VirtualMachineWithConfigContext](#schemavirtualmachinewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_read

<a id="opIdvirtualization_virtual-machines_read"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/0/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualization/virtual-machines/{id}/`

Call to super to allow for caching

<h3 id="virtualizationvirtual-machinesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual machine.|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineWithConfigContext](#schemavirtualmachinewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_update

<a id="opIdvirtualization_virtual-machines_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/0/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "disk": 0,
    "local_context_data": "string",
    "memory": 0,
    "name": "string",
    "platform": 0,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "role": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vcpus": 0
  }'
```

`PUT /virtualization/virtual-machines/{id}/`

> Body parameter

```json
{
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "disk": 0,
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": 0,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "role": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual machine.|
|body|body|[WritableVirtualMachineWithConfigContext](#schemawritablevirtualmachinewithconfigcontext)|true|none|
|» cluster|body|integer|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» disk|body|integer \| null|false|none|
|» local_context_data|body|string \| null|false|none|
|» memory|body|integer \| null|false|none|
|» name|body|string|true|none|
|» platform|body|integer \| null|false|none|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» role|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vcpus|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|decommissioning|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineWithConfigContext](#schemavirtualmachinewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_delete

<a id="opIdvirtualization_virtual-machines_delete"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/0/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualization/virtual-machines/{id}/`

<h3 id="virtualizationvirtual-machinesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual machine.|

<h3 id="virtualizationvirtual-machinesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## virtualization_virtual-machines_partial_update

<a id="opIdvirtualization_virtual-machines_partial_update"></a>

> Code samples

```bash
curl https://example.com/virtualization/virtual-machines/0/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cluster": 0,
    "comments": "string",
    "custom_fields": {},
    "disk": 0,
    "local_context_data": "string",
    "memory": 0,
    "name": "string",
    "platform": 0,
    "primary_ip4": 0,
    "primary_ip6": 0,
    "role": 0,
    "status": "offline",
    "tags": [
      "string"
    ],
    "tenant": 0,
    "vcpus": 0
  }'
```

`PATCH /virtualization/virtual-machines/{id}/`

> Body parameter

```json
{
  "cluster": 0,
  "comments": "string",
  "custom_fields": {},
  "disk": 0,
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": 0,
  "primary_ip4": 0,
  "primary_ip6": 0,
  "role": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this virtual machine.|
|body|body|[WritableVirtualMachineWithConfigContext](#schemawritablevirtualmachinewithconfigcontext)|true|none|
|» cluster|body|integer|true|none|
|» comments|body|string|false|none|
|» custom_fields|body|object|false|none|
|» disk|body|integer \| null|false|none|
|» local_context_data|body|string \| null|false|none|
|» memory|body|integer \| null|false|none|
|» name|body|string|true|none|
|» platform|body|integer \| null|false|none|
|» primary_ip4|body|integer \| null|false|none|
|» primary_ip6|body|integer \| null|false|none|
|» role|body|integer \| null|false|none|
|» status|body|string|false|none|
|» tags|body|[string]|false|none|
|» tenant|body|integer \| null|false|none|
|» vcpus|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|offline|
|» status|active|
|» status|planned|
|» status|staged|
|» status|failed|
|» status|decommissioning|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vcpus": 0
}
```

<h3 id="virtualizationvirtual-machinespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VirtualMachineWithConfigContext](#schemavirtualmachinewithconfigcontext)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_Aggregate">Aggregate</h2>
<!-- backwards compatibility -->
<a id="schemaaggregate"></a>
<a id="schema_Aggregate"></a>
<a id="tocSaggregate"></a>
<a id="tocsaggregate"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": {
    "aggregate_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|date_added|string(date) \| null|false|none|none|
|description|string|false|none|none|
|family|object|false|read-only|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|prefix|string|true|none|none|
|rir|[NestedRIR](#schemanestedrir)|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_AvailableIP">AvailableIP</h2>
<!-- backwards compatibility -->
<a id="schemaavailableip"></a>
<a id="schema_AvailableIP"></a>
<a id="tocSavailableip"></a>
<a id="tocsavailableip"></a>

```json
{
  "address": "string",
  "family": 0,
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|read-only|none|
|family|integer|false|read-only|none|
|vrf|[NestedVRF](#schemanestedvrf)|false|none|none|

<h2 id="tocS_AvailablePrefix">AvailablePrefix</h2>
<!-- backwards compatibility -->
<a id="schemaavailableprefix"></a>
<a id="schema_AvailablePrefix"></a>
<a id="tocSavailableprefix"></a>
<a id="tocsavailableprefix"></a>

```json
{
  "family": 0,
  "prefix": "string",
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|family|integer|false|read-only|none|
|prefix|string|false|read-only|none|
|vrf|[NestedVRF](#schemanestedvrf)|false|none|none|

<h2 id="tocS_Cable">Cable</h2>
<!-- backwards compatibility -->
<a id="schemacable"></a>
<a id="schema_Cable"></a>
<a id="tocScable"></a>
<a id="tocscable"></a>

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": {
    "label": "Meters",
    "value": "m"
  },
  "status": {
    "label": "Connected",
    "value": "connected"
  },
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|id|integer|false|read-only|none|
|label|string|false|none|none|
|length|integer \| null|false|none|none|
|length_unit|object|false|none|none|
|status|object|false|none|none|
|termination_a|object|false|read-only|none|
|termination_a_id|integer|true|none|none|
|termination_a_type|string|true|none|none|
|termination_b|object|false|read-only|none|
|termination_b_id|integer|true|none|none|
|termination_b_type|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cat3|
|type|cat5|
|type|cat5e|
|type|cat6|
|type|cat6a|
|type|cat7|
|type|dac-active|
|type|dac-passive|
|type|mrj21-trunk|
|type|coaxial|
|type|mmf|
|type|mmf-om1|
|type|mmf-om2|
|type|mmf-om3|
|type|mmf-om4|
|type|smf|
|type|smf-os1|
|type|smf-os2|
|type|aoc|
|type|power|

<h2 id="tocS_Circuit">Circuit</h2>
<!-- backwards compatibility -->
<a id="schemacircuit"></a>
<a id="schema_Circuit"></a>
<a id="tocScircuit"></a>
<a id="tocscircuit"></a>

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Planned",
    "value": "planned"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "termination_a": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "termination_z": {
    "connected_endpoint": {
      "cable": 0,
      "connection_status": {
        "label": "Not Connected",
        "value": false
      },
      "device": {
        "display_name": "string",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "port_speed": 0,
    "site": {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "upstream_speed": 0,
    "url": "http://example.com",
    "xconnect_id": "string"
  },
  "type": {
    "circuit_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|true|none|none|
|comments|string|false|none|none|
|commit_rate|integer \| null|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|install_date|string(date) \| null|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|provider|[NestedProvider](#schemanestedprovider)|true|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|termination_a|[CircuitCircuitTermination](#schemacircuitcircuittermination)|false|none|none|
|termination_z|[CircuitCircuitTermination](#schemacircuitcircuittermination)|false|none|none|
|type|[NestedCircuitType](#schemanestedcircuittype)|true|none|none|

<h2 id="tocS_CircuitCircuitTermination">CircuitCircuitTermination</h2>
<!-- backwards compatibility -->
<a id="schemacircuitcircuittermination"></a>
<a id="schema_CircuitCircuitTermination"></a>
<a id="tocScircuitcircuittermination"></a>
<a id="tocscircuitcircuittermination"></a>

```json
{
  "connected_endpoint": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "port_speed": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "upstream_speed": 0,
  "url": "http://example.com",
  "xconnect_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connected_endpoint|[NestedInterface](#schemanestedinterface)|true|none|none|
|id|integer|false|read-only|none|
|port_speed|integer|true|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|upstream_speed|integer \| null|false|none|Upstream speed, if different from port speed|
|url|string(uri)|false|read-only|none|
|xconnect_id|string|false|none|none|

<h2 id="tocS_CircuitTermination">CircuitTermination</h2>
<!-- backwards compatibility -->
<a id="schemacircuittermination"></a>
<a id="schema_CircuitTermination"></a>
<a id="tocScircuittermination"></a>
<a id="tocscircuittermination"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": {
    "cid": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|circuit|[NestedCircuit](#schemanestedcircuit)|true|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|port_speed|integer|true|none|none|
|pp_info|string|false|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|term_side|string|true|none|none|
|upstream_speed|integer \| null|false|none|Upstream speed, if different from port speed|
|xconnect_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|term_side|A|
|term_side|Z|

<h2 id="tocS_CircuitType">CircuitType</h2>
<!-- backwards compatibility -->
<a id="schemacircuittype"></a>
<a id="schema_CircuitType"></a>
<a id="tocScircuittype"></a>
<a id="tocscircuittype"></a>

```json
{
  "circuit_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circuit_count|integer|false|read-only|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "cluster_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_count|integer|false|read-only|none|
|group|[NestedClusterGroup](#schemanestedclustergroup)|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|site|[NestedSite](#schemanestedsite)|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|type|[NestedClusterType](#schemanestedclustertype)|true|none|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_ClusterGroup">ClusterGroup</h2>
<!-- backwards compatibility -->
<a id="schemaclustergroup"></a>
<a id="schema_ClusterGroup"></a>
<a id="tocSclustergroup"></a>
<a id="tocsclustergroup"></a>

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_count|integer|false|read-only|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_ClusterType">ClusterType</h2>
<!-- backwards compatibility -->
<a id="schemaclustertype"></a>
<a id="schema_ClusterType"></a>
<a id="tocSclustertype"></a>
<a id="tocsclustertype"></a>

```json
{
  "cluster_count": 0,
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_count|integer|false|read-only|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_ConfigContext">ConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemaconfigcontext"></a>
<a id="schema_ConfigContext"></a>
<a id="tocSconfigcontext"></a>
<a id="tocsconfigcontext"></a>

```json
{
  "cluster_groups": [
    {
      "cluster_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "clusters": [
    {
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "regions": [
    {
      "id": 0,
      "name": "string",
      "site_count": 0,
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "roles": [
    {
      "device_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com",
      "virtualmachine_count": 0
    }
  ],
  "sites": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "tenant_count": 0,
      "url": "http://example.com"
    }
  ],
  "tenants": [
    {
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    }
  ],
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_groups|[[NestedClusterGroup](#schemanestedclustergroup)]|false|none|none|
|clusters|[[NestedCluster](#schemanestedcluster)]|false|none|none|
|data|string|true|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|is_active|boolean|false|none|none|
|name|string|true|none|none|
|platforms|[[NestedPlatform](#schemanestedplatform)]|false|none|none|
|regions|[[NestedRegion](#schemanestedregion)]|false|none|none|
|roles|[[NestedDeviceRole](#schemanesteddevicerole)]|false|none|none|
|sites|[[NestedSite](#schemanestedsite)]|false|none|none|
|tags|[string(slug)]|false|none|none|
|tenant_groups|[[NestedTenantGroup](#schemanestedtenantgroup)]|false|none|none|
|tenants|[[NestedTenant](#schemanestedtenant)]|false|none|none|
|weight|integer|false|none|none|

<h2 id="tocS_ConsolePort">ConsolePort</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleport"></a>
<a id="schema_ConsolePort"></a>
<a id="tocSconsoleport"></a>
<a id="tocsconsoleport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_ConsolePortTemplate">ConsolePortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleporttemplate"></a>
<a id="schema_ConsolePortTemplate"></a>
<a id="tocSconsoleporttemplate"></a>
<a id="tocsconsoleporttemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|type|object|false|none|none|

<h2 id="tocS_ConsoleServerPort">ConsoleServerPort</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleserverport"></a>
<a id="schema_ConsoleServerPort"></a>
<a id="tocSconsoleserverport"></a>
<a id="tocsconsoleserverport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_ConsoleServerPortTemplate">ConsoleServerPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleserverporttemplate"></a>
<a id="schema_ConsoleServerPortTemplate"></a>
<a id="tocSconsoleserverporttemplate"></a>
<a id="tocsconsoleserverporttemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "type": {
    "label": "DE-9",
    "value": "de-9"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|type|object|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this device|
|cluster|[NestedCluster](#schemanestedcluster)|false|none|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_role|[NestedDeviceRole](#schemanesteddevicerole)|true|none|none|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|display_name|string|false|read-only|none|
|face|object|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|local_context_data|string \| null|false|none|none|
|name|string \| null|false|none|none|
|parent_device|[NestedDevice](#schemanesteddevice)|false|none|none|
|platform|[NestedPlatform](#schemanestedplatform)|false|none|none|
|position|integer \| null|false|none|The lowest-numbered unit occupied by the device|
|primary_ip|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip4|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip6|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|rack|[NestedRack](#schemanestedrack)|false|none|none|
|serial|string|false|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vc_position|integer \| null|false|none|none|
|vc_priority|integer \| null|false|none|none|
|virtual_chassis|[NestedVirtualChassis](#schemanestedvirtualchassis)|false|none|none|

<h2 id="tocS_DeviceBay">DeviceBay</h2>
<!-- backwards compatibility -->
<a id="schemadevicebay"></a>
<a id="schema_DeviceBay"></a>
<a id="tocSdevicebay"></a>
<a id="tocsdevicebay"></a>

```json
{
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "installed_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|installed_device|[NestedDevice](#schemanesteddevice)|false|none|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_DeviceBayTemplate">DeviceBayTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadevicebaytemplate"></a>
<a id="schema_DeviceBayTemplate"></a>
<a id="tocSdevicebaytemplate"></a>
<a id="tocsdevicebaytemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|

<h2 id="tocS_DeviceInterface">DeviceInterface</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinterface"></a>
<a id="schema_DeviceInterface"></a>
<a id="tocSdeviceinterface"></a>
<a id="tocsdeviceinterface"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "count_ipaddresses": 0,
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "enabled": true,
  "id": 0,
  "lag": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "mac_address": "string",
  "mgmt_only": true,
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|count_ipaddresses|integer|false|read-only|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|enabled|boolean|false|none|none|
|id|integer|false|read-only|none|
|lag|[NestedInterface](#schemanestedinterface)|false|none|none|
|mac_address|string \| null|false|none|none|
|mgmt_only|boolean|false|none|This interface is used only for out-of-band management|
|mode|object|false|none|none|
|mtu|integer \| null|false|none|none|
|name|string|true|none|none|
|tagged_vlans|[[NestedVLAN](#schemanestedvlan)]|false|none|none|
|tags|[string]|false|none|none|
|type|object|true|none|none|
|untagged_vlan|[NestedVLAN](#schemanestedvlan)|false|none|none|

<h2 id="tocS_DeviceNAPALM">DeviceNAPALM</h2>
<!-- backwards compatibility -->
<a id="schemadevicenapalm"></a>
<a id="schema_DeviceNAPALM"></a>
<a id="tocSdevicenapalm"></a>
<a id="tocsdevicenapalm"></a>

```json
{
  "method": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|object|true|none|none|

<h2 id="tocS_DeviceRole">DeviceRole</h2>
<!-- backwards compatibility -->
<a id="schemadevicerole"></a>
<a id="schema_DeviceRole"></a>
<a id="tocSdevicerole"></a>
<a id="tocsdevicerole"></a>

```json
{
  "color": "string",
  "description": "string",
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "virtualmachine_count": 0,
  "vm_role": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|virtualmachine_count|integer|false|read-only|none|
|vm_role|boolean|false|none|Virtual machines may be assigned to this role|

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": {
    "label": "Parent",
    "value": "parent"
  },
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|front_image|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|is_full_depth|boolean|false|none|Device consumes both front and rear rack faces|
|last_updated|string(date-time)|false|read-only|none|
|manufacturer|[NestedManufacturer](#schemanestedmanufacturer)|true|none|none|
|model|string|true|none|none|
|part_number|string|false|none|Discrete part number (optional)|
|rear_image|string(uri)|false|read-only|none|
|slug|string(slug)|true|none|none|
|subdevice_role|object|false|none|none|
|tags|[string]|false|none|none|
|u_height|integer|false|none|none|

<h2 id="tocS_DeviceWithConfigContext">DeviceWithConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemadevicewithconfigcontext"></a>
<a id="schema_DeviceWithConfigContext"></a>
<a id="tocSdevicewithconfigcontext"></a>
<a id="tocsdevicewithconfigcontext"></a>

```json
{
  "asset_tag": "string",
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "display_name": "string",
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "position": 1,
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": {
    "id": 0,
    "master": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "member_count": 0,
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this device|
|cluster|[NestedCluster](#schemanestedcluster)|false|none|none|
|comments|string|false|none|none|
|config_context|object|false|read-only|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_role|[NestedDeviceRole](#schemanesteddevicerole)|true|none|none|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|display_name|string|false|read-only|none|
|face|object|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|local_context_data|string \| null|false|none|none|
|name|string \| null|false|none|none|
|parent_device|[NestedDevice](#schemanesteddevice)|false|none|none|
|platform|[NestedPlatform](#schemanestedplatform)|false|none|none|
|position|integer \| null|false|none|The lowest-numbered unit occupied by the device|
|primary_ip|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip4|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip6|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|rack|[NestedRack](#schemanestedrack)|false|none|none|
|serial|string|false|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vc_position|integer \| null|false|none|none|
|vc_priority|integer \| null|false|none|none|
|virtual_chassis|[NestedVirtualChassis](#schemanestedvirtualchassis)|false|none|none|

<h2 id="tocS_ExportTemplate">ExportTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaexporttemplate"></a>
<a id="schema_ExportTemplate"></a>
<a id="tocSexporttemplate"></a>
<a id="tocsexporttemplate"></a>

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": {
    "id": 20,
    "label": "Jinja2",
    "value": "jinja2"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|none|
|description|string|false|none|none|
|file_extension|string|false|none|Extension to append to the rendered filename|
|id|integer|false|read-only|none|
|mime_type|string|false|none|Defaults to <code>text/plain</code>|
|name|string|true|none|none|
|template_code|string|true|none|The list of objects being exported is passed as a context variable named <code>queryset</code>.|
|template_language|object|false|none|none|

<h2 id="tocS_FrontPort">FrontPort</h2>
<!-- backwards compatibility -->
<a id="schemafrontport"></a>
<a id="schema_FrontPort"></a>
<a id="tocSfrontport"></a>
<a id="tocsfrontport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rear_port|[FrontPortRearPort](#schemafrontportrearport)|true|none|none|
|rear_port_position|integer|false|none|none|
|tags|[string]|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_FrontPortRearPort">FrontPortRearPort</h2>
<!-- backwards compatibility -->
<a id="schemafrontportrearport"></a>
<a id="schema_FrontPortRearPort"></a>
<a id="tocSfrontportrearport"></a>
<a id="tocsfrontportrearport"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_FrontPortTemplate">FrontPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemafrontporttemplate"></a>
<a id="schema_FrontPortTemplate"></a>
<a id="tocSfrontporttemplate"></a>
<a id="tocsfrontporttemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "rear_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "rear_port_position": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rear_port|[NestedRearPortTemplate](#schemanestedrearporttemplate)|true|none|none|
|rear_port_position|integer|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_Graph">Graph</h2>
<!-- backwards compatibility -->
<a id="schemagraph"></a>
<a id="schema_Graph"></a>
<a id="tocSgraph"></a>
<a id="tocsgraph"></a>

```json
{
  "id": 0,
  "link": "http://example.com",
  "name": "string",
  "source": "string",
  "template_language": "django",
  "type": "string",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|link|string(uri)|false|none|none|
|name|string|true|none|none|
|source|string|true|none|none|
|template_language|string|false|none|none|
|type|string|true|none|none|
|weight|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|template_language|django|
|template_language|jinja2|

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "interface": {
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "string",
    "virtual_machine": {
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "nat_outside": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "label": "Loopback",
    "value": "loopback"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 address (with mask)|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|dns_name|string|false|none|Hostname or FQDN (not case-sensitive)|
|family|object|false|read-only|none|
|id|integer|false|read-only|none|
|interface|[IPAddressInterface](#schemaipaddressinterface)|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|nat_inside|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|nat_outside|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|role|object|false|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vrf|[NestedVRF](#schemanestedvrf)|false|none|none|

<h2 id="tocS_IPAddressInterface">IPAddressInterface</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressinterface"></a>
<a id="schema_IPAddressInterface"></a>
<a id="tocSipaddressinterface"></a>
<a id="tocsipaddressinterface"></a>

```json
{
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "url": "string",
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[NestedDevice](#schemanesteddevice)|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string|false|read-only|none|
|virtual_machine|[NestedVirtualMachine](#schemanestedvirtualmachine)|false|none|none|

<h2 id="tocS_ImageAttachment">ImageAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaimageattachment"></a>
<a id="schema_ImageAttachment"></a>
<a id="tocSimageattachment"></a>
<a id="tocsimageattachment"></a>

```json
{
  "content_type": "string",
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "image_height": 0,
  "image_width": 0,
  "name": "string",
  "object_id": 0,
  "parent": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|none|
|created|string(date-time)|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|image_height|integer|true|none|none|
|image_width|integer|true|none|none|
|name|string|false|none|none|
|object_id|integer|true|none|none|
|parent|object|false|read-only|none|

<h2 id="tocS_InterfaceConnection">InterfaceConnection</h2>
<!-- backwards compatibility -->
<a id="schemainterfaceconnection"></a>
<a id="schema_InterfaceConnection"></a>
<a id="tocSinterfaceconnection"></a>
<a id="tocsinterfaceconnection"></a>

```json
{
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "interface_a": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "interface_b": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_status|object|false|none|none|
|interface_a|[NestedInterface](#schemanestedinterface)|false|none|none|
|interface_b|[NestedInterface](#schemanestedinterface)|true|none|none|

<h2 id="tocS_InterfaceTemplate">InterfaceTemplate</h2>
<!-- backwards compatibility -->
<a id="schemainterfacetemplate"></a>
<a id="schema_InterfaceTemplate"></a>
<a id="tocSinterfacetemplate"></a>
<a id="tocsinterfacetemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": {
    "label": "Virtual",
    "value": "virtual"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|mgmt_only|boolean|false|none|none|
|name|string|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_InventoryItem">InventoryItem</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitem"></a>
<a id="schema_InventoryItem"></a>
<a id="tocSinventoryitem"></a>
<a id="tocsinventoryitem"></a>

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "discovered": true,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this item|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|discovered|boolean|false|none|This item was automatically discovered|
|id|integer|false|read-only|none|
|manufacturer|[NestedManufacturer](#schemanestedmanufacturer)|false|none|none|
|name|string|true|none|none|
|parent|integer \| null|false|none|none|
|part_id|string|false|none|Manufacturer-assigned part identifier|
|serial|string|false|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_Manufacturer">Manufacturer</h2>
<!-- backwards compatibility -->
<a id="schemamanufacturer"></a>
<a id="schema_Manufacturer"></a>
<a id="tocSmanufacturer"></a>
<a id="tocsmanufacturer"></a>

```json
{
  "description": "string",
  "devicetype_count": 0,
  "id": 0,
  "inventoryitem_count": 0,
  "name": "string",
  "platform_count": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|devicetype_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|inventoryitem_count|integer|false|read-only|none|
|name|string|true|none|none|
|platform_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_NestedCable">NestedCable</h2>
<!-- backwards compatibility -->
<a id="schemanestedcable"></a>
<a id="schema_NestedCable"></a>
<a id="tocSnestedcable"></a>
<a id="tocsnestedcable"></a>

```json
{
  "id": 0,
  "label": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|label|string|false|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedCircuit">NestedCircuit</h2>
<!-- backwards compatibility -->
<a id="schemanestedcircuit"></a>
<a id="schema_NestedCircuit"></a>
<a id="tocSnestedcircuit"></a>
<a id="tocsnestedcircuit"></a>

```json
{
  "cid": "string",
  "id": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|true|none|none|
|id|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedCircuitType">NestedCircuitType</h2>
<!-- backwards compatibility -->
<a id="schemanestedcircuittype"></a>
<a id="schema_NestedCircuitType"></a>
<a id="tocSnestedcircuittype"></a>
<a id="tocsnestedcircuittype"></a>

```json
{
  "circuit_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circuit_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedCluster">NestedCluster</h2>
<!-- backwards compatibility -->
<a id="schemanestedcluster"></a>
<a id="schema_NestedCluster"></a>
<a id="tocSnestedcluster"></a>
<a id="tocsnestedcluster"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "http://example.com",
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_NestedClusterGroup">NestedClusterGroup</h2>
<!-- backwards compatibility -->
<a id="schemanestedclustergroup"></a>
<a id="schema_NestedClusterGroup"></a>
<a id="tocSnestedclustergroup"></a>
<a id="tocsnestedclustergroup"></a>

```json
{
  "cluster_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedClusterType">NestedClusterType</h2>
<!-- backwards compatibility -->
<a id="schemanestedclustertype"></a>
<a id="schema_NestedClusterType"></a>
<a id="tocSnestedclustertype"></a>
<a id="tocsnestedclustertype"></a>

```json
{
  "cluster_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedDevice">NestedDevice</h2>
<!-- backwards compatibility -->
<a id="schemanesteddevice"></a>
<a id="schema_NestedDevice"></a>
<a id="tocSnesteddevice"></a>
<a id="tocsnesteddevice"></a>

```json
{
  "display_name": "string",
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string \| null|false|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedDeviceRole">NestedDeviceRole</h2>
<!-- backwards compatibility -->
<a id="schemanesteddevicerole"></a>
<a id="schema_NestedDeviceRole"></a>
<a id="tocSnesteddevicerole"></a>
<a id="tocsnesteddevicerole"></a>

```json
{
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com",
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_NestedDeviceType">NestedDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemanesteddevicetype"></a>
<a id="schema_NestedDeviceType"></a>
<a id="tocSnesteddevicetype"></a>
<a id="tocsnesteddevicetype"></a>

```json
{
  "device_count": 0,
  "display_name": "string",
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "model": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|id|integer|false|read-only|none|
|manufacturer|[NestedManufacturer](#schemanestedmanufacturer)|false|none|none|
|model|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedIPAddress">NestedIPAddress</h2>
<!-- backwards compatibility -->
<a id="schemanestedipaddress"></a>
<a id="schema_NestedIPAddress"></a>
<a id="tocSnestedipaddress"></a>
<a id="tocsnestedipaddress"></a>

```json
{
  "address": "string",
  "family": "string",
  "id": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 address (with mask)|
|family|string|false|read-only|none|
|id|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedInterface">NestedInterface</h2>
<!-- backwards compatibility -->
<a id="schemanestedinterface"></a>
<a id="schema_NestedInterface"></a>
<a id="tocSnestedinterface"></a>
<a id="tocsnestedinterface"></a>

```json
{
  "cable": 0,
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|integer \| null|false|none|none|
|connection_status|object|false|read-only|none|
|device|[NestedDevice](#schemanesteddevice)|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedManufacturer">NestedManufacturer</h2>
<!-- backwards compatibility -->
<a id="schemanestedmanufacturer"></a>
<a id="schema_NestedManufacturer"></a>
<a id="tocSnestedmanufacturer"></a>
<a id="tocsnestedmanufacturer"></a>

```json
{
  "devicetype_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicetype_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedPlatform">NestedPlatform</h2>
<!-- backwards compatibility -->
<a id="schemanestedplatform"></a>
<a id="schema_NestedPlatform"></a>
<a id="tocSnestedplatform"></a>
<a id="tocsnestedplatform"></a>

```json
{
  "device_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com",
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_NestedPowerPanel">NestedPowerPanel</h2>
<!-- backwards compatibility -->
<a id="schemanestedpowerpanel"></a>
<a id="schema_NestedPowerPanel"></a>
<a id="tocSnestedpowerpanel"></a>
<a id="tocsnestedpowerpanel"></a>

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|powerfeed_count|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedPowerPort">NestedPowerPort</h2>
<!-- backwards compatibility -->
<a id="schemanestedpowerport"></a>
<a id="schema_NestedPowerPort"></a>
<a id="tocSnestedpowerport"></a>
<a id="tocsnestedpowerport"></a>

```json
{
  "cable": 0,
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|integer \| null|false|none|none|
|connection_status|object|false|read-only|none|
|device|[NestedDevice](#schemanesteddevice)|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedPowerPortTemplate">NestedPowerPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemanestedpowerporttemplate"></a>
<a id="schema_NestedPowerPortTemplate"></a>
<a id="tocSnestedpowerporttemplate"></a>
<a id="tocsnestedpowerporttemplate"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedProvider">NestedProvider</h2>
<!-- backwards compatibility -->
<a id="schemanestedprovider"></a>
<a id="schema_NestedProvider"></a>
<a id="tocSnestedprovider"></a>
<a id="tocsnestedprovider"></a>

```json
{
  "circuit_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circuit_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRIR">NestedRIR</h2>
<!-- backwards compatibility -->
<a id="schemanestedrir"></a>
<a id="schema_NestedRIR"></a>
<a id="tocSnestedrir"></a>
<a id="tocsnestedrir"></a>

```json
{
  "aggregate_count": 0,
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRack">NestedRack</h2>
<!-- backwards compatibility -->
<a id="schemanestedrack"></a>
<a id="schema_NestedRack"></a>
<a id="tocSnestedrack"></a>
<a id="tocsnestedrack"></a>

```json
{
  "device_count": 0,
  "display_name": "string",
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRackGroup">NestedRackGroup</h2>
<!-- backwards compatibility -->
<a id="schemanestedrackgroup"></a>
<a id="schema_NestedRackGroup"></a>
<a id="tocSnestedrackgroup"></a>
<a id="tocsnestedrackgroup"></a>

```json
{
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rack_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRackRole">NestedRackRole</h2>
<!-- backwards compatibility -->
<a id="schemanestedrackrole"></a>
<a id="schema_NestedRackRole"></a>
<a id="tocSnestedrackrole"></a>
<a id="tocsnestedrackrole"></a>

```json
{
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rack_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRearPortTemplate">NestedRearPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemanestedrearporttemplate"></a>
<a id="schema_NestedRearPortTemplate"></a>
<a id="tocSnestedrearporttemplate"></a>
<a id="tocsnestedrearporttemplate"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRegion">NestedRegion</h2>
<!-- backwards compatibility -->
<a id="schemanestedregion"></a>
<a id="schema_NestedRegion"></a>
<a id="tocSnestedregion"></a>
<a id="tocsnestedregion"></a>

```json
{
  "id": 0,
  "name": "string",
  "site_count": 0,
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|site_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedRole">NestedRole</h2>
<!-- backwards compatibility -->
<a id="schemanestedrole"></a>
<a id="schema_NestedRole"></a>
<a id="tocSnestedrole"></a>
<a id="tocsnestedrole"></a>

```json
{
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "url": "http://example.com",
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|
|vlan_count|integer|false|read-only|none|

<h2 id="tocS_NestedSecretRole">NestedSecretRole</h2>
<!-- backwards compatibility -->
<a id="schemanestedsecretrole"></a>
<a id="schema_NestedSecretRole"></a>
<a id="tocSnestedsecretrole"></a>
<a id="tocsnestedsecretrole"></a>

```json
{
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|secret_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedSite">NestedSite</h2>
<!-- backwards compatibility -->
<a id="schemanestedsite"></a>
<a id="schema_NestedSite"></a>
<a id="tocSnestedsite"></a>
<a id="tocsnestedsite"></a>

```json
{
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedTenant">NestedTenant</h2>
<!-- backwards compatibility -->
<a id="schemanestedtenant"></a>
<a id="schema_NestedTenant"></a>
<a id="tocSnestedtenant"></a>
<a id="tocsnestedtenant"></a>

```json
{
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedTenantGroup">NestedTenantGroup</h2>
<!-- backwards compatibility -->
<a id="schemanestedtenantgroup"></a>
<a id="schema_NestedTenantGroup"></a>
<a id="tocSnestedtenantgroup"></a>
<a id="tocsnestedtenantgroup"></a>

```json
{
  "id": 0,
  "name": "string",
  "slug": "string",
  "tenant_count": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|tenant_count|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedUser">NestedUser</h2>
<!-- backwards compatibility -->
<a id="schemanesteduser"></a>
<a id="schema_NestedUser"></a>
<a id="tocSnesteduser"></a>
<a id="tocsnesteduser"></a>

```json
{
  "id": 0,
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|

<h2 id="tocS_NestedVLAN">NestedVLAN</h2>
<!-- backwards compatibility -->
<a id="schemanestedvlan"></a>
<a id="schema_NestedVLAN"></a>
<a id="tocSnestedvlan"></a>
<a id="tocsnestedvlan"></a>

```json
{
  "display_name": "string",
  "id": 0,
  "name": "string",
  "url": "http://example.com",
  "vid": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|
|vid|integer|true|none|none|

<h2 id="tocS_NestedVLANGroup">NestedVLANGroup</h2>
<!-- backwards compatibility -->
<a id="schemanestedvlangroup"></a>
<a id="schema_NestedVLANGroup"></a>
<a id="tocSnestedvlangroup"></a>
<a id="tocsnestedvlangroup"></a>

```json
{
  "id": 0,
  "name": "string",
  "slug": "string",
  "url": "http://example.com",
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|url|string(uri)|false|read-only|none|
|vlan_count|integer|false|read-only|none|

<h2 id="tocS_NestedVRF">NestedVRF</h2>
<!-- backwards compatibility -->
<a id="schemanestedvrf"></a>
<a id="schema_NestedVRF"></a>
<a id="tocSnestedvrf"></a>
<a id="tocsnestedvrf"></a>

```json
{
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|rd|string \| null|false|none|Unique route distinguisher (as defined in RFC 4364)|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedVirtualChassis">NestedVirtualChassis</h2>
<!-- backwards compatibility -->
<a id="schemanestedvirtualchassis"></a>
<a id="schema_NestedVirtualChassis"></a>
<a id="tocSnestedvirtualchassis"></a>
<a id="tocsnestedvirtualchassis"></a>

```json
{
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|master|[NestedDevice](#schemanesteddevice)|true|none|none|
|member_count|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_NestedVirtualMachine">NestedVirtualMachine</h2>
<!-- backwards compatibility -->
<a id="schemanestedvirtualmachine"></a>
<a id="schema_NestedVirtualMachine"></a>
<a id="tocSnestedvirtualmachine"></a>
<a id="tocsnestedvirtualmachine"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_ObjectChange">ObjectChange</h2>
<!-- backwards compatibility -->
<a id="schemaobjectchange"></a>
<a id="schema_ObjectChange"></a>
<a id="tocSobjectchange"></a>
<a id="tocsobjectchange"></a>

```json
{
  "action": {
    "label": "Created",
    "value": "create"
  },
  "changed_object": {
    "property1": "string",
    "property2": "string"
  },
  "changed_object_id": 0,
  "changed_object_type": "string",
  "id": 0,
  "object_data": "string",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "time": "1970-01-01T00:00:00Z",
  "user": {
    "id": 0,
    "username": "string"
  },
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|read-only|none|
|changed_object|object|false|read-only|<br>Serialize a nested representation of the changed object.<br>|
|changed_object_id|integer|true|none|none|
|changed_object_type|string|false|read-only|none|
|id|integer|false|read-only|none|
|object_data|string|false|read-only|none|
|request_id|string(uuid)|false|read-only|none|
|time|string(date-time)|false|read-only|none|
|user|[NestedUser](#schemanesteduser)|false|none|none|
|user_name|string|false|read-only|none|

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": {
    "devicetype_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|manufacturer|[NestedManufacturer](#schemanestedmanufacturer)|false|none|none|
|name|string|true|none|none|
|napalm_args|string \| null|false|none|Additional arguments to pass when initiating the NAPALM driver (JSON format)|
|napalm_driver|string|false|none|The name of the NAPALM driver to use when interacting with devices|
|slug|string(slug)|true|none|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_PowerFeed">PowerFeed</h2>
<!-- backwards compatibility -->
<a id="schemapowerfeed"></a>
<a id="schema_PowerFeed"></a>
<a id="tocSpowerfeed"></a>
<a id="tocspowerfeed"></a>

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": {
    "id": 1,
    "label": "Single phase",
    "value": "single-phase"
  },
  "power_panel": {
    "id": 0,
    "name": "string",
    "powerfeed_count": 0,
    "url": "http://example.com"
  },
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "status": {
    "id": 1,
    "label": "Active",
    "value": "active"
  },
  "supply": {
    "id": 1,
    "label": "AC",
    "value": "ac"
  },
  "tags": [
    "string"
  ],
  "type": {
    "id": 1,
    "label": "Primary",
    "value": "primary"
  },
  "voltage": -32768
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amperage|integer|false|none|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|max_utilization|integer|false|none|Maximum permissible draw (percentage)|
|name|string|true|none|none|
|phase|object|false|none|none|
|power_panel|[NestedPowerPanel](#schemanestedpowerpanel)|true|none|none|
|rack|[NestedRack](#schemanestedrack)|false|none|none|
|status|object|false|none|none|
|supply|object|false|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|
|voltage|integer|false|none|none|

<h2 id="tocS_PowerOutlet">PowerOutlet</h2>
<!-- backwards compatibility -->
<a id="schemapoweroutlet"></a>
<a id="schema_PowerOutlet"></a>
<a id="tocSpoweroutlet"></a>
<a id="tocspoweroutlet"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "cable": 0,
    "connection_status": {
      "label": "Not Connected",
      "value": false
    },
    "device": {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ],
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|feed_leg|object|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|power_port|[NestedPowerPort](#schemanestedpowerport)|false|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_PowerOutletTemplate">PowerOutletTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapoweroutlettemplate"></a>
<a id="schema_PowerOutletTemplate"></a>
<a id="tocSpoweroutlettemplate"></a>
<a id="tocspoweroutlettemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "feed_leg": {
    "label": "A",
    "value": "A"
  },
  "id": 0,
  "name": "string",
  "power_port": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "C5",
    "value": "iec-60320-c5"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|feed_leg|object|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|power_port|[NestedPowerPortTemplate](#schemanestedpowerporttemplate)|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_PowerPanel">PowerPanel</h2>
<!-- backwards compatibility -->
<a id="schemapowerpanel"></a>
<a id="schema_PowerPanel"></a>
<a id="tocSpowerpanel"></a>
<a id="tocspowerpanel"></a>

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|powerfeed_count|integer|false|read-only|none|
|rack_group|[NestedRackGroup](#schemanestedrackgroup)|false|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|

<h2 id="tocS_PowerPort">PowerPort</h2>
<!-- backwards compatibility -->
<a id="schemapowerport"></a>
<a id="schema_PowerPort"></a>
<a id="tocSpowerport"></a>
<a id="tocspowerport"></a>

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": {
    "label": "Not Connected",
    "value": false
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocated_draw|integer \| null|false|none|Allocated power draw (watts)|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|object|false|read-only|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|maximum_draw|integer \| null|false|none|Maximum power draw (watts)|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_PowerPortTemplate">PowerPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapowerporttemplate"></a>
<a id="schema_PowerPortTemplate"></a>
<a id="tocSpowerporttemplate"></a>
<a id="tocspowerporttemplate"></a>

```json
{
  "allocated_draw": 1,
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": {
    "label": "C6",
    "value": "iec-60320-c6"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocated_draw|integer \| null|false|none|Allocated power draw (watts)|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|maximum_draw|integer \| null|false|none|Maximum power draw (watts)|
|name|string|true|none|none|
|type|object|false|none|none|

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": {
    "label": "IPv4",
    "value": 4
  },
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Container",
    "value": "container"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "vrf": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "rd": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|family|object|false|read-only|none|
|id|integer|false|read-only|none|
|is_pool|boolean|false|none|All IP addresses within this prefix are considered usable|
|last_updated|string(date-time)|false|read-only|none|
|prefix|string|true|none|IPv4 or IPv6 network with mask|
|role|[NestedRole](#schemanestedrole)|false|none|none|
|site|[NestedSite](#schemanestedsite)|false|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vlan|[NestedVLAN](#schemanestedvlan)|false|none|none|
|vrf|[NestedVRF](#schemanestedvrf)|false|none|none|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "account": "string",
  "admin_contact": "string",
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "noc_contact": "string",
  "portal_url": "http://example.com",
  "slug": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|none|
|admin_contact|string|false|none|none|
|asn|integer \| null|false|none|32-bit autonomous system number|
|circuit_count|integer|false|read-only|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|noc_contact|string|false|none|none|
|portal_url|string(uri)|false|none|none|
|slug|string(slug)|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_RIR">RIR</h2>
<!-- backwards compatibility -->
<a id="schemarir"></a>
<a id="schema_RIR"></a>
<a id="tocSrir"></a>
<a id="tocsrir"></a>

```json
{
  "aggregate_count": 0,
  "description": "string",
  "id": 0,
  "is_private": true,
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate_count|integer|false|read-only|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|is_private|boolean|false|none|IP space managed by this RIR is considered private|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_Rack">Rack</h2>
<!-- backwards compatibility -->
<a id="schemarack"></a>
<a id="schema_Rack"></a>
<a id="tocSrack"></a>
<a id="tocsrack"></a>

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": {
    "label": "Millimeters",
    "value": "mm"
  },
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "serial": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Reserved",
    "value": "reserved"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "type": {
    "label": "2-post frame",
    "value": "2-post-frame"
  },
  "u_height": 1,
  "width": {
    "label": "10 inches",
    "value": 10
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this rack|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|desc_units|boolean|false|none|Units are numbered top-to-bottom|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|facility_id|string \| null|false|none|Locally-assigned identifier|
|group|[NestedRackGroup](#schemanestedrackgroup)|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|outer_depth|integer \| null|false|none|Outer dimension of rack (depth)|
|outer_unit|object|false|none|none|
|outer_width|integer \| null|false|none|Outer dimension of rack (width)|
|powerfeed_count|integer|false|read-only|none|
|role|[NestedRackRole](#schemanestedrackrole)|false|none|none|
|serial|string|false|none|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|type|object|false|none|none|
|u_height|integer|false|none|Height in rack units|
|width|object|false|none|none|

<h2 id="tocS_RackGroup">RackGroup</h2>
<!-- backwards compatibility -->
<a id="schemarackgroup"></a>
<a id="schema_RackGroup"></a>
<a id="tocSrackgroup"></a>
<a id="tocsrackgroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "rack_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "rack_count": 0,
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|[NestedRackGroup](#schemanestedrackgroup)|false|none|none|
|rack_count|integer|false|read-only|none|
|site|[NestedSite](#schemanestedsite)|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_RackReservation">RackReservation</h2>
<!-- backwards compatibility -->
<a id="schemarackreservation"></a>
<a id="schema_RackReservation"></a>
<a id="tocSrackreservation"></a>
<a id="tocsrackreservation"></a>

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "units": [
    0
  ],
  "user": {
    "id": 0,
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|description|string|true|none|none|
|id|integer|false|read-only|none|
|rack|[NestedRack](#schemanestedrack)|true|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|units|[integer]|true|none|none|
|user|[NestedUser](#schemanesteduser)|true|none|none|

<h2 id="tocS_RackRole">RackRole</h2>
<!-- backwards compatibility -->
<a id="schemarackrole"></a>
<a id="schema_RackRole"></a>
<a id="tocSrackrole"></a>
<a id="tocsrackrole"></a>

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "rack_count": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rack_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_RackUnit">RackUnit</h2>
<!-- backwards compatibility -->
<a id="schemarackunit"></a>
<a id="schema_RackUnit"></a>
<a id="tocSrackunit"></a>
<a id="tocsrackunit"></a>

```json
{
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "face": {
    "label": "Front",
    "value": "front"
  },
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[NestedDevice](#schemanesteddevice)|false|none|none|
|face|object|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|

<h2 id="tocS_RearPort">RearPort</h2>
<!-- backwards compatibility -->
<a id="schemarearport"></a>
<a id="schema_RearPort"></a>
<a id="tocSrearport"></a>
<a id="tocsrearport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|positions|integer|false|none|none|
|tags|[string]|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_RearPortTemplate">RearPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemarearporttemplate"></a>
<a id="schema_RearPortTemplate"></a>
<a id="tocSrearporttemplate"></a>
<a id="tocsrearporttemplate"></a>

```json
{
  "device_type": {
    "device_count": 0,
    "display_name": "string",
    "id": 0,
    "manufacturer": {
      "devicetype_count": 0,
      "id": 0,
      "name": "string",
      "slug": "string",
      "url": "http://example.com"
    },
    "model": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": {
    "label": "8P8C",
    "value": "8p8c"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|[NestedDeviceType](#schemanesteddevicetype)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|positions|integer|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "site_count": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|[NestedRegion](#schemanestedregion)|false|none|none|
|site_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "prefix_count": 0,
  "slug": "string",
  "vlan_count": 0,
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|vlan_count|integer|false|read-only|none|
|weight|integer|false|none|none|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": {
    "id": 0,
    "name": "string",
    "secret_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|true|none|none|
|hash|string|false|read-only|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|false|none|none|
|plaintext|string|true|none|none|
|role|[NestedSecretRole](#schemanestedsecretrole)|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_SecretRole">SecretRole</h2>
<!-- backwards compatibility -->
<a id="schemasecretrole"></a>
<a id="schema_SecretRole"></a>
<a id="tocSsecretrole"></a>
<a id="tocssecretrole"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "secret_count": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|secret_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddresses": [
    {
      "address": "string",
      "family": "string",
      "id": 0,
      "url": "http://example.com"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": {
    "label": "TCP",
    "value": "tcp"
  },
  "tags": [
    "string"
  ],
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device|[NestedDevice](#schemanesteddevice)|false|none|none|
|id|integer|false|read-only|none|
|ipaddresses|[[NestedIPAddress](#schemanestedipaddress)]|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|port|integer|true|none|none|
|protocol|object|false|none|none|
|tags|[string]|false|none|none|
|virtual_machine|[NestedVirtualMachine](#schemanestedvirtualmachine)|false|none|none|

<h2 id="tocS_Site">Site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_Site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": {
    "id": 0,
    "name": "string",
    "site_count": 0,
    "slug": "string",
    "url": "http://example.com"
  },
  "shipping_address": "string",
  "slug": "string",
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|integer \| null|false|none|32-bit autonomous system number|
|circuit_count|integer|false|read-only|none|
|comments|string|false|none|none|
|contact_email|string(email)|false|none|none|
|contact_name|string|false|none|none|
|contact_phone|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|facility|string|false|none|Local facility ID or description|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|latitude|string(decimal) \| null|false|none|GPS coordinate (latitude)|
|longitude|string(decimal) \| null|false|none|GPS coordinate (longitude)|
|name|string|true|none|none|
|physical_address|string|false|none|none|
|prefix_count|integer|false|read-only|none|
|rack_count|integer|false|read-only|none|
|region|[NestedRegion](#schemanestedregion)|false|none|none|
|shipping_address|string|false|none|none|
|slug|string(slug)|true|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|time_zone|string|false|none|none|
|virtualmachine_count|integer|false|read-only|none|
|vlan_count|integer|false|read-only|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "color": "string",
  "description": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "tagged_items": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|true|none|none|
|tagged_items|integer|false|read-only|none|

<h2 id="tocS_Tenant">Tenant</h2>
<!-- backwards compatibility -->
<a id="schematenant"></a>
<a id="schema_Tenant"></a>
<a id="tocStenant"></a>
<a id="tocstenant"></a>

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circuit_count|integer|false|read-only|none|
|cluster_count|integer|false|read-only|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|group|[NestedTenantGroup](#schemanestedtenantgroup)|false|none|none|
|id|integer|false|read-only|none|
|ipaddress_count|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|rack_count|integer|false|read-only|none|
|site_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|tags|[string]|false|none|none|
|virtualmachine_count|integer|false|read-only|none|
|vlan_count|integer|false|read-only|none|
|vrf_count|integer|false|read-only|none|

<h2 id="tocS_TenantGroup">TenantGroup</h2>
<!-- backwards compatibility -->
<a id="schematenantgroup"></a>
<a id="schema_TenantGroup"></a>
<a id="tocStenantgroup"></a>
<a id="tocstenantgroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "tenant_count": 0,
    "url": "http://example.com"
  },
  "slug": "string",
  "tenant_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|[NestedTenantGroup](#schemanestedtenantgroup)|false|none|none|
|slug|string(slug)|true|none|none|
|tenant_count|integer|false|read-only|none|

<h2 id="tocS_VLAN">VLAN</h2>
<!-- backwards compatibility -->
<a id="schemavlan"></a>
<a id="schema_VLAN"></a>
<a id="tocSvlan"></a>
<a id="tocsvlan"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": {
    "id": 0,
    "name": "string",
    "prefix_count": 0,
    "slug": "string",
    "url": "http://example.com",
    "vlan_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Active",
    "value": "active"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vid": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|display_name|string|false|read-only|none|
|group|[NestedVLANGroup](#schemanestedvlangroup)|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|role|[NestedRole](#schemanestedrole)|false|none|none|
|site|[NestedSite](#schemanestedsite)|false|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vid|integer|true|none|none|

<h2 id="tocS_VLANGroup">VLANGroup</h2>
<!-- backwards compatibility -->
<a id="schemavlangroup"></a>
<a id="schema_VLANGroup"></a>
<a id="tocSvlangroup"></a>
<a id="tocsvlangroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "slug": "string",
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|site|[NestedSite](#schemanestedsite)|false|none|none|
|slug|string(slug)|true|none|none|
|vlan_count|integer|false|read-only|none|

<h2 id="tocS_VRF">VRF</h2>
<!-- backwards compatibility -->
<a id="schemavrf"></a>
<a id="schema_VRF"></a>
<a id="tocSvrf"></a>
<a id="tocsvrf"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|display_name|string|false|read-only|none|
|enforce_unique|boolean|false|none|Prevent duplicate prefixes/IP addresses within this VRF|
|id|integer|false|read-only|none|
|ipaddress_count|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|rd|string \| null|false|none|Unique route distinguisher (as defined in RFC 4364)|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|

<h2 id="tocS_VirtualChassis">VirtualChassis</h2>
<!-- backwards compatibility -->
<a id="schemavirtualchassis"></a>
<a id="schema_VirtualChassis"></a>
<a id="tocSvirtualchassis"></a>
<a id="tocsvirtualchassis"></a>

```json
{
  "domain": "string",
  "id": 0,
  "master": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|id|integer|false|read-only|none|
|master|[NestedDevice](#schemanesteddevice)|true|none|none|
|member_count|integer|false|read-only|none|
|tags|[string]|false|none|none|

<h2 id="tocS_VirtualMachineInterface">VirtualMachineInterface</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachineinterface"></a>
<a id="schema_VirtualMachineInterface"></a>
<a id="tocSvirtualmachineinterface"></a>
<a id="tocsvirtualmachineinterface"></a>

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": {
    "label": "Access",
    "value": "access"
  },
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    {
      "display_name": "string",
      "id": 0,
      "name": "string",
      "url": "http://example.com",
      "vid": 1
    }
  ],
  "tags": [
    "string"
  ],
  "type": {
    "label": "Virtual",
    "value": "virtual"
  },
  "untagged_vlan": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "vid": 1
  },
  "virtual_machine": {
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|enabled|boolean|false|none|none|
|id|integer|false|read-only|none|
|mac_address|string \| null|false|none|none|
|mode|object|false|none|none|
|mtu|integer \| null|false|none|none|
|name|string|true|none|none|
|tagged_vlans|[[NestedVLAN](#schemanestedvlan)]|false|none|none|
|tags|[string]|false|none|none|
|type|object|false|none|none|
|untagged_vlan|[NestedVLAN](#schemanestedvlan)|false|none|none|
|virtual_machine|[NestedVirtualMachine](#schemanestedvirtualmachine)|true|none|none|

<h2 id="tocS_VirtualMachineWithConfigContext">VirtualMachineWithConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinewithconfigcontext"></a>
<a id="schema_VirtualMachineWithConfigContext"></a>
<a id="tocSvirtualmachinewithconfigcontext"></a>
<a id="tocsvirtualmachinewithconfigcontext"></a>

```json
{
  "cluster": {
    "id": 0,
    "name": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "primary_ip": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip4": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "primary_ip6": {
    "address": "string",
    "family": "string",
    "id": 0,
    "url": "http://example.com"
  },
  "role": {
    "device_count": 0,
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com",
    "virtualmachine_count": 0
  },
  "site": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "status": {
    "label": "Offline",
    "value": "offline"
  },
  "tags": [
    "string"
  ],
  "tenant": {
    "id": 0,
    "name": "string",
    "slug": "string",
    "url": "http://example.com"
  },
  "vcpus": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[NestedCluster](#schemanestedcluster)|true|none|none|
|comments|string|false|none|none|
|config_context|object|false|read-only|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|disk|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|local_context_data|string \| null|false|none|none|
|memory|integer \| null|false|none|none|
|name|string|true|none|none|
|platform|[NestedPlatform](#schemanestedplatform)|false|none|none|
|primary_ip|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip4|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|primary_ip6|[NestedIPAddress](#schemanestedipaddress)|false|none|none|
|role|[NestedDeviceRole](#schemanesteddevicerole)|false|none|none|
|site|[NestedSite](#schemanestedsite)|false|none|none|
|status|object|false|none|none|
|tags|[string]|false|none|none|
|tenant|[NestedTenant](#schemanestedtenant)|false|none|none|
|vcpus|integer \| null|false|none|none|

<h2 id="tocS_WritableAggregate">WritableAggregate</h2>
<!-- backwards compatibility -->
<a id="schemawritableaggregate"></a>
<a id="schema_WritableAggregate"></a>
<a id="tocSwritableaggregate"></a>
<a id="tocswritableaggregate"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "date_added": "1970-01-01",
  "description": "string",
  "family": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "rir": 0,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|date_added|string(date) \| null|false|none|none|
|description|string|false|none|none|
|family|string|false|read-only|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|prefix|string|true|none|none|
|rir|integer|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_WritableAvailableIP">WritableAvailableIP</h2>
<!-- backwards compatibility -->
<a id="schemawritableavailableip"></a>
<a id="schema_WritableAvailableIP"></a>
<a id="tocSwritableavailableip"></a>
<a id="tocswritableavailableip"></a>

```json
{
  "address": "string",
  "family": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|read-only|none|
|family|integer|false|read-only|none|

<h2 id="tocS_WritableCable">WritableCable</h2>
<!-- backwards compatibility -->
<a id="schemawritablecable"></a>
<a id="schema_WritableCable"></a>
<a id="tocSwritablecable"></a>
<a id="tocswritablecable"></a>

```json
{
  "color": "string",
  "id": 0,
  "label": "string",
  "length": 0,
  "length_unit": "m",
  "status": "connected",
  "termination_a": {
    "property1": "string",
    "property2": "string"
  },
  "termination_a_id": 0,
  "termination_a_type": "string",
  "termination_b": {
    "property1": "string",
    "property2": "string"
  },
  "termination_b_id": 0,
  "termination_b_type": "string",
  "type": "cat3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|none|
|id|integer|false|read-only|none|
|label|string|false|none|none|
|length|integer \| null|false|none|none|
|length_unit|string|false|none|none|
|status|string|false|none|none|
|termination_a|object|false|read-only|none|
|termination_a_id|integer|true|none|none|
|termination_a_type|string|true|none|none|
|termination_b|object|false|read-only|none|
|termination_b_id|integer|true|none|none|
|termination_b_type|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|length_unit|m|
|length_unit|cm|
|length_unit|ft|
|length_unit|in|
|status|connected|
|status|planned|
|status|decommissioning|
|type|cat3|
|type|cat5|
|type|cat5e|
|type|cat6|
|type|cat6a|
|type|cat7|
|type|dac-active|
|type|dac-passive|
|type|mrj21-trunk|
|type|coaxial|
|type|mmf|
|type|mmf-om1|
|type|mmf-om2|
|type|mmf-om3|
|type|mmf-om4|
|type|smf|
|type|smf-os1|
|type|smf-os2|
|type|aoc|
|type|power|

<h2 id="tocS_WritableCircuit">WritableCircuit</h2>
<!-- backwards compatibility -->
<a id="schemawritablecircuit"></a>
<a id="schema_WritableCircuit"></a>
<a id="tocSwritablecircuit"></a>
<a id="tocswritablecircuit"></a>

```json
{
  "cid": "string",
  "comments": "string",
  "commit_rate": 0,
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "id": 0,
  "install_date": "1970-01-01",
  "last_updated": "1970-01-01T00:00:00Z",
  "provider": 0,
  "status": "planned",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "termination_a": "string",
  "termination_z": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|true|none|none|
|comments|string|false|none|none|
|commit_rate|integer \| null|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|install_date|string(date) \| null|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|provider|integer|true|none|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|termination_a|string|false|read-only|none|
|termination_z|string|false|read-only|none|
|type|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|planned|
|status|provisioning|
|status|active|
|status|offline|
|status|deprovisioning|
|status|decommissioned|

<h2 id="tocS_WritableCircuitTermination">WritableCircuitTermination</h2>
<!-- backwards compatibility -->
<a id="schemawritablecircuittermination"></a>
<a id="schema_WritableCircuitTermination"></a>
<a id="tocSwritablecircuittermination"></a>
<a id="tocswritablecircuittermination"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "circuit": 0,
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "description": "string",
  "id": 0,
  "port_speed": 0,
  "pp_info": "string",
  "site": 0,
  "term_side": "A",
  "upstream_speed": 0,
  "xconnect_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|circuit|integer|true|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|port_speed|integer|true|none|none|
|pp_info|string|false|none|none|
|site|integer|true|none|none|
|term_side|string|true|none|none|
|upstream_speed|integer \| null|false|none|Upstream speed, if different from port speed|
|xconnect_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|term_side|A|
|term_side|Z|

<h2 id="tocS_WritableCluster">WritableCluster</h2>
<!-- backwards compatibility -->
<a id="schemawritablecluster"></a>
<a id="schema_WritableCluster"></a>
<a id="tocSwritablecluster"></a>
<a id="tocswritablecluster"></a>

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "group": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "site": 0,
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": 0,
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_count|integer|false|read-only|none|
|group|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|site|integer \| null|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|type|integer|true|none|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_WritableConfigContext">WritableConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemawritableconfigcontext"></a>
<a id="schema_WritableConfigContext"></a>
<a id="tocSwritableconfigcontext"></a>
<a id="tocswritableconfigcontext"></a>

```json
{
  "cluster_groups": [
    0
  ],
  "clusters": [
    0
  ],
  "data": "string",
  "description": "string",
  "id": 0,
  "is_active": true,
  "name": "string",
  "platforms": [
    0
  ],
  "regions": [
    0
  ],
  "roles": [
    0
  ],
  "sites": [
    0
  ],
  "tags": [
    "string"
  ],
  "tenant_groups": [
    0
  ],
  "tenants": [
    0
  ],
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_groups|[integer]|false|none|none|
|clusters|[integer]|false|none|none|
|data|string|true|none|none|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|is_active|boolean|false|none|none|
|name|string|true|none|none|
|platforms|[integer]|false|none|none|
|regions|[integer]|false|none|none|
|roles|[integer]|false|none|none|
|sites|[integer]|false|none|none|
|tags|[string(slug)]|false|none|none|
|tenant_groups|[integer]|false|none|none|
|tenants|[integer]|false|none|none|
|weight|integer|false|none|none|

<h2 id="tocS_WritableConsolePort">WritableConsolePort</h2>
<!-- backwards compatibility -->
<a id="schemawritableconsoleport"></a>
<a id="schema_WritableConsolePort"></a>
<a id="tocSwritableconsoleport"></a>
<a id="tocswritableconsoleport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "description": "string",
  "device": 0,
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|string|false|none|Physical port type|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|type|de-9|
|type|db-25|
|type|rj-11|
|type|rj-12|
|type|rj-45|
|type|usb-a|
|type|usb-b|
|type|usb-c|
|type|usb-mini-a|
|type|usb-mini-b|
|type|usb-micro-a|
|type|usb-micro-b|
|type|other|

<h2 id="tocS_WritableConsolePortTemplate">WritableConsolePortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritableconsoleporttemplate"></a>
<a id="schema_WritableConsolePortTemplate"></a>
<a id="tocSwritableconsoleporttemplate"></a>
<a id="tocswritableconsoleporttemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "name": "string",
  "type": "de-9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|de-9|
|type|db-25|
|type|rj-11|
|type|rj-12|
|type|rj-45|
|type|usb-a|
|type|usb-b|
|type|usb-c|
|type|usb-mini-a|
|type|usb-mini-b|
|type|usb-micro-a|
|type|usb-micro-b|
|type|other|

<h2 id="tocS_WritableConsoleServerPort">WritableConsoleServerPort</h2>
<!-- backwards compatibility -->
<a id="schemawritableconsoleserverport"></a>
<a id="schema_WritableConsoleServerPort"></a>
<a id="tocSwritableconsoleserverport"></a>
<a id="tocswritableconsoleserverport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "description": "string",
  "device": 0,
  "id": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "de-9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|string|false|none|Physical port type|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|type|de-9|
|type|db-25|
|type|rj-11|
|type|rj-12|
|type|rj-45|
|type|usb-a|
|type|usb-b|
|type|usb-c|
|type|usb-mini-a|
|type|usb-mini-b|
|type|usb-micro-a|
|type|usb-micro-b|
|type|other|

<h2 id="tocS_WritableConsoleServerPortTemplate">WritableConsoleServerPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritableconsoleserverporttemplate"></a>
<a id="schema_WritableConsoleServerPortTemplate"></a>
<a id="tocSwritableconsoleserverporttemplate"></a>
<a id="tocswritableconsoleserverporttemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "name": "string",
  "type": "de-9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|de-9|
|type|db-25|
|type|rj-11|
|type|rj-12|
|type|rj-45|
|type|usb-a|
|type|usb-b|
|type|usb-c|
|type|usb-mini-a|
|type|usb-mini-b|
|type|usb-micro-a|
|type|usb-micro-b|
|type|other|

<h2 id="tocS_WritableDeviceBay">WritableDeviceBay</h2>
<!-- backwards compatibility -->
<a id="schemawritabledevicebay"></a>
<a id="schema_WritableDeviceBay"></a>
<a id="tocSwritabledevicebay"></a>
<a id="tocswritabledevicebay"></a>

```json
{
  "description": "string",
  "device": 0,
  "id": 0,
  "installed_device": 0,
  "name": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|installed_device|integer \| null|false|none|none|
|name|string|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_WritableDeviceBayTemplate">WritableDeviceBayTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritabledevicebaytemplate"></a>
<a id="schema_WritableDeviceBayTemplate"></a>
<a id="tocSwritabledevicebaytemplate"></a>
<a id="tocswritabledevicebaytemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|

<h2 id="tocS_WritableDeviceInterface">WritableDeviceInterface</h2>
<!-- backwards compatibility -->
<a id="schemawritabledeviceinterface"></a>
<a id="schema_WritableDeviceInterface"></a>
<a id="tocSwritabledeviceinterface"></a>
<a id="tocswritabledeviceinterface"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "count_ipaddresses": 0,
  "description": "string",
  "device": 0,
  "enabled": true,
  "id": 0,
  "lag": 0,
  "mac_address": "string",
  "mgmt_only": true,
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|count_ipaddresses|integer|false|read-only|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|enabled|boolean|false|none|none|
|id|integer|false|read-only|none|
|lag|integer \| null|false|none|none|
|mac_address|string \| null|false|none|none|
|mgmt_only|boolean|false|none|This interface is used only for out-of-band management|
|mode|string|false|none|none|
|mtu|integer \| null|false|none|none|
|name|string|true|none|none|
|tagged_vlans|[integer]|false|none|none|
|tags|[string]|false|none|none|
|type|string|true|none|none|
|untagged_vlan|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|mode|access|
|mode|tagged|
|mode|tagged-all|
|type|virtual|
|type|lag|
|type|100base-tx|
|type|1000base-t|
|type|2.5gbase-t|
|type|5gbase-t|
|type|10gbase-t|
|type|10gbase-cx4|
|type|1000base-x-gbic|
|type|1000base-x-sfp|
|type|10gbase-x-sfpp|
|type|10gbase-x-xfp|
|type|10gbase-x-xenpak|
|type|10gbase-x-x2|
|type|25gbase-x-sfp28|
|type|40gbase-x-qsfpp|
|type|50gbase-x-sfp28|
|type|100gbase-x-cfp|
|type|100gbase-x-cfp2|
|type|200gbase-x-cfp2|
|type|100gbase-x-cfp4|
|type|100gbase-x-cpak|
|type|100gbase-x-qsfp28|
|type|200gbase-x-qsfp56|
|type|400gbase-x-qsfpdd|
|type|400gbase-x-osfp|
|type|ieee802.11a|
|type|ieee802.11g|
|type|ieee802.11n|
|type|ieee802.11ac|
|type|ieee802.11ad|
|type|ieee802.11ax|
|type|gsm|
|type|cdma|
|type|lte|
|type|sonet-oc3|
|type|sonet-oc12|
|type|sonet-oc48|
|type|sonet-oc192|
|type|sonet-oc768|
|type|sonet-oc1920|
|type|sonet-oc3840|
|type|1gfc-sfp|
|type|2gfc-sfp|
|type|4gfc-sfp|
|type|8gfc-sfpp|
|type|16gfc-sfpp|
|type|32gfc-sfp28|
|type|128gfc-sfp28|
|type|infiniband-sdr|
|type|infiniband-ddr|
|type|infiniband-qdr|
|type|infiniband-fdr10|
|type|infiniband-fdr|
|type|infiniband-edr|
|type|infiniband-hdr|
|type|infiniband-ndr|
|type|infiniband-xdr|
|type|t1|
|type|e1|
|type|t3|
|type|e3|
|type|cisco-stackwise|
|type|cisco-stackwise-plus|
|type|cisco-flexstack|
|type|cisco-flexstack-plus|
|type|juniper-vcp|
|type|extreme-summitstack|
|type|extreme-summitstack-128|
|type|extreme-summitstack-256|
|type|extreme-summitstack-512|
|type|other|

<h2 id="tocS_WritableDeviceType">WritableDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemawritabledevicetype"></a>
<a id="schema_WritableDeviceType"></a>
<a id="tocSwritabledevicetype"></a>
<a id="tocswritabledevicetype"></a>

```json
{
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "device_count": 0,
  "display_name": "string",
  "front_image": "http://example.com",
  "id": 0,
  "is_full_depth": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "manufacturer": 0,
  "model": "string",
  "part_number": "string",
  "rear_image": "http://example.com",
  "slug": "string",
  "subdevice_role": "parent",
  "tags": [
    "string"
  ],
  "u_height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|front_image|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|is_full_depth|boolean|false|none|Device consumes both front and rear rack faces|
|last_updated|string(date-time)|false|read-only|none|
|manufacturer|integer|true|none|none|
|model|string|true|none|none|
|part_number|string|false|none|Discrete part number (optional)|
|rear_image|string(uri)|false|read-only|none|
|slug|string(slug)|true|none|none|
|subdevice_role|string|false|none|Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.|
|tags|[string]|false|none|none|
|u_height|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|subdevice_role|parent|
|subdevice_role|child|

<h2 id="tocS_WritableDeviceWithConfigContext">WritableDeviceWithConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemawritabledevicewithconfigcontext"></a>
<a id="schema_WritableDeviceWithConfigContext"></a>
<a id="tocSwritabledevicewithconfigcontext"></a>
<a id="tocswritabledevicewithconfigcontext"></a>

```json
{
  "asset_tag": "string",
  "cluster": 0,
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "device_role": 0,
  "device_type": 0,
  "display_name": "string",
  "face": "front",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "name": "string",
  "parent_device": {
    "display_name": "string",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "platform": 0,
  "position": 1,
  "primary_ip": "string",
  "primary_ip4": 0,
  "primary_ip6": 0,
  "rack": 0,
  "serial": "string",
  "site": 0,
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vc_position": 0,
  "vc_priority": 0,
  "virtual_chassis": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this device|
|cluster|integer \| null|false|none|none|
|comments|string|false|none|none|
|config_context|object|false|read-only|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device_role|integer|true|none|none|
|device_type|integer|true|none|none|
|display_name|string|false|read-only|none|
|face|string|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|local_context_data|string \| null|false|none|none|
|name|string \| null|false|none|none|
|parent_device|[NestedDevice](#schemanesteddevice)|false|none|none|
|platform|integer \| null|false|none|none|
|position|integer \| null|false|none|The lowest-numbered unit occupied by the device|
|primary_ip|string|false|read-only|none|
|primary_ip4|integer \| null|false|none|none|
|primary_ip6|integer \| null|false|none|none|
|rack|integer \| null|false|none|none|
|serial|string|false|none|none|
|site|integer|true|none|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|vc_position|integer \| null|false|none|none|
|vc_priority|integer \| null|false|none|none|
|virtual_chassis|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|face|front|
|face|rear|
|status|offline|
|status|active|
|status|planned|
|status|staged|
|status|failed|
|status|inventory|
|status|decommissioning|

<h2 id="tocS_WritableExportTemplate">WritableExportTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritableexporttemplate"></a>
<a id="schema_WritableExportTemplate"></a>
<a id="tocSwritableexporttemplate"></a>
<a id="tocswritableexporttemplate"></a>

```json
{
  "content_type": "string",
  "description": "string",
  "file_extension": "string",
  "id": 0,
  "mime_type": "string",
  "name": "string",
  "template_code": "string",
  "template_language": "django"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|none|
|description|string|false|none|none|
|file_extension|string|false|none|Extension to append to the rendered filename|
|id|integer|false|read-only|none|
|mime_type|string|false|none|Defaults to <code>text/plain</code>|
|name|string|true|none|none|
|template_code|string|true|none|The list of objects being exported is passed as a context variable named <code>queryset</code>.|
|template_language|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|template_language|django|
|template_language|jinja2|

<h2 id="tocS_WritableFrontPort">WritableFrontPort</h2>
<!-- backwards compatibility -->
<a id="schemawritablefrontport"></a>
<a id="schema_WritableFrontPort"></a>
<a id="tocSwritablefrontport"></a>
<a id="tocswritablefrontport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": 0,
  "id": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rear_port|integer|true|none|none|
|rear_port_position|integer|false|none|none|
|tags|[string]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|8p8c|
|type|110-punch|
|type|bnc|
|type|mrj21|
|type|fc|
|type|lc|
|type|lc-apc|
|type|lsh|
|type|lsh-apc|
|type|mpo|
|type|mtrj|
|type|sc|
|type|sc-apc|
|type|st|

<h2 id="tocS_WritableFrontPortTemplate">WritableFrontPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritablefrontporttemplate"></a>
<a id="schema_WritableFrontPortTemplate"></a>
<a id="tocSwritablefrontporttemplate"></a>
<a id="tocswritablefrontporttemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "name": "string",
  "rear_port": 0,
  "rear_port_position": 1,
  "type": "8p8c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|rear_port|integer|true|none|none|
|rear_port_position|integer|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|8p8c|
|type|110-punch|
|type|bnc|
|type|mrj21|
|type|fc|
|type|lc|
|type|lc-apc|
|type|lsh|
|type|lsh-apc|
|type|mpo|
|type|mtrj|
|type|sc|
|type|sc-apc|
|type|st|

<h2 id="tocS_WritableIPAddress">WritableIPAddress</h2>
<!-- backwards compatibility -->
<a id="schemawritableipaddress"></a>
<a id="schema_WritableIPAddress"></a>
<a id="tocSwritableipaddress"></a>
<a id="tocswritableipaddress"></a>

```json
{
  "address": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "dns_name": "string",
  "family": "string",
  "id": 0,
  "interface": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "nat_inside": 0,
  "nat_outside": 0,
  "role": "loopback",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vrf": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 address (with mask)|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|dns_name|string|false|none|Hostname or FQDN (not case-sensitive)|
|family|string|false|read-only|none|
|id|integer|false|read-only|none|
|interface|integer \| null|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|nat_inside|integer \| null|false|none|The IP for which this address is the "outside" IP|
|nat_outside|integer|true|none|none|
|role|string|false|none|The functional role of this IP|
|status|string|false|none|The operational status of this IP|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|vrf|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|loopback|
|role|secondary|
|role|anycast|
|role|vip|
|role|vrrp|
|role|hsrp|
|role|glbp|
|role|carp|
|status|active|
|status|reserved|
|status|deprecated|
|status|dhcp|

<h2 id="tocS_WritableInterfaceTemplate">WritableInterfaceTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritableinterfacetemplate"></a>
<a id="schema_WritableInterfaceTemplate"></a>
<a id="tocSwritableinterfacetemplate"></a>
<a id="tocswritableinterfacetemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "mgmt_only": true,
  "name": "string",
  "type": "virtual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|mgmt_only|boolean|false|none|none|
|name|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|virtual|
|type|lag|
|type|100base-tx|
|type|1000base-t|
|type|2.5gbase-t|
|type|5gbase-t|
|type|10gbase-t|
|type|10gbase-cx4|
|type|1000base-x-gbic|
|type|1000base-x-sfp|
|type|10gbase-x-sfpp|
|type|10gbase-x-xfp|
|type|10gbase-x-xenpak|
|type|10gbase-x-x2|
|type|25gbase-x-sfp28|
|type|40gbase-x-qsfpp|
|type|50gbase-x-sfp28|
|type|100gbase-x-cfp|
|type|100gbase-x-cfp2|
|type|200gbase-x-cfp2|
|type|100gbase-x-cfp4|
|type|100gbase-x-cpak|
|type|100gbase-x-qsfp28|
|type|200gbase-x-qsfp56|
|type|400gbase-x-qsfpdd|
|type|400gbase-x-osfp|
|type|ieee802.11a|
|type|ieee802.11g|
|type|ieee802.11n|
|type|ieee802.11ac|
|type|ieee802.11ad|
|type|ieee802.11ax|
|type|gsm|
|type|cdma|
|type|lte|
|type|sonet-oc3|
|type|sonet-oc12|
|type|sonet-oc48|
|type|sonet-oc192|
|type|sonet-oc768|
|type|sonet-oc1920|
|type|sonet-oc3840|
|type|1gfc-sfp|
|type|2gfc-sfp|
|type|4gfc-sfp|
|type|8gfc-sfpp|
|type|16gfc-sfpp|
|type|32gfc-sfp28|
|type|128gfc-sfp28|
|type|infiniband-sdr|
|type|infiniband-ddr|
|type|infiniband-qdr|
|type|infiniband-fdr10|
|type|infiniband-fdr|
|type|infiniband-edr|
|type|infiniband-hdr|
|type|infiniband-ndr|
|type|infiniband-xdr|
|type|t1|
|type|e1|
|type|t3|
|type|e3|
|type|cisco-stackwise|
|type|cisco-stackwise-plus|
|type|cisco-flexstack|
|type|cisco-flexstack-plus|
|type|juniper-vcp|
|type|extreme-summitstack|
|type|extreme-summitstack-128|
|type|extreme-summitstack-256|
|type|extreme-summitstack-512|
|type|other|

<h2 id="tocS_WritableInventoryItem">WritableInventoryItem</h2>
<!-- backwards compatibility -->
<a id="schemawritableinventoryitem"></a>
<a id="schema_WritableInventoryItem"></a>
<a id="tocSwritableinventoryitem"></a>
<a id="tocswritableinventoryitem"></a>

```json
{
  "asset_tag": "string",
  "description": "string",
  "device": 0,
  "discovered": true,
  "id": 0,
  "manufacturer": 0,
  "name": "string",
  "parent": 0,
  "part_id": "string",
  "serial": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this item|
|description|string|false|none|none|
|device|integer|true|none|none|
|discovered|boolean|false|none|This item was automatically discovered|
|id|integer|false|read-only|none|
|manufacturer|integer \| null|false|none|none|
|name|string|true|none|none|
|parent|integer \| null|false|none|none|
|part_id|string|false|none|Manufacturer-assigned part identifier|
|serial|string|false|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_WritablePlatform">WritablePlatform</h2>
<!-- backwards compatibility -->
<a id="schemawritableplatform"></a>
<a id="schema_WritablePlatform"></a>
<a id="tocSwritableplatform"></a>
<a id="tocswritableplatform"></a>

```json
{
  "description": "string",
  "device_count": 0,
  "id": 0,
  "manufacturer": 0,
  "name": "string",
  "napalm_args": "string",
  "napalm_driver": "string",
  "slug": "string",
  "virtualmachine_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|manufacturer|integer \| null|false|none|Optionally limit this platform to devices of a certain manufacturer|
|name|string|true|none|none|
|napalm_args|string \| null|false|none|Additional arguments to pass when initiating the NAPALM driver (JSON format)|
|napalm_driver|string|false|none|The name of the NAPALM driver to use when interacting with devices|
|slug|string(slug)|true|none|none|
|virtualmachine_count|integer|false|read-only|none|

<h2 id="tocS_WritablePowerFeed">WritablePowerFeed</h2>
<!-- backwards compatibility -->
<a id="schemawritablepowerfeed"></a>
<a id="schema_WritablePowerFeed"></a>
<a id="tocSwritablepowerfeed"></a>
<a id="tocswritablepowerfeed"></a>

```json
{
  "amperage": 1,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "max_utilization": 1,
  "name": "string",
  "phase": "single-phase",
  "power_panel": 0,
  "rack": 0,
  "status": "offline",
  "supply": "ac",
  "tags": [
    "string"
  ],
  "type": "primary",
  "voltage": -32768
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amperage|integer|false|none|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|max_utilization|integer|false|none|Maximum permissible draw (percentage)|
|name|string|true|none|none|
|phase|string|false|none|none|
|power_panel|integer|true|none|none|
|rack|integer \| null|false|none|none|
|status|string|false|none|none|
|supply|string|false|none|none|
|tags|[string]|false|none|none|
|type|string|false|none|none|
|voltage|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|single-phase|
|phase|three-phase|
|status|offline|
|status|active|
|status|planned|
|status|failed|
|supply|ac|
|supply|dc|
|type|primary|
|type|redundant|

<h2 id="tocS_WritablePowerOutlet">WritablePowerOutlet</h2>
<!-- backwards compatibility -->
<a id="schemawritablepoweroutlet"></a>
<a id="schema_WritablePowerOutlet"></a>
<a id="tocSwritablepoweroutlet"></a>
<a id="tocswritablepoweroutlet"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "description": "string",
  "device": 0,
  "feed_leg": "A",
  "id": 0,
  "name": "string",
  "power_port": 0,
  "tags": [
    "string"
  ],
  "type": "iec-60320-c5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|feed_leg|string|false|none|Phase (for three-phase feeds)|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|power_port|integer \| null|false|none|none|
|tags|[string]|false|none|none|
|type|string|false|none|Physical port type|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|feed_leg|A|
|feed_leg|B|
|feed_leg|C|
|type|iec-60320-c5|
|type|iec-60320-c7|
|type|iec-60320-c13|
|type|iec-60320-c15|
|type|iec-60320-c19|
|type|iec-60309-p-n-e-4h|
|type|iec-60309-p-n-e-6h|
|type|iec-60309-p-n-e-9h|
|type|iec-60309-2p-e-4h|
|type|iec-60309-2p-e-6h|
|type|iec-60309-2p-e-9h|
|type|iec-60309-3p-e-4h|
|type|iec-60309-3p-e-6h|
|type|iec-60309-3p-e-9h|
|type|iec-60309-3p-n-e-4h|
|type|iec-60309-3p-n-e-6h|
|type|iec-60309-3p-n-e-9h|
|type|nema-1-15r|
|type|nema-5-15r|
|type|nema-5-20r|
|type|nema-5-30r|
|type|nema-5-50r|
|type|nema-6-15r|
|type|nema-6-20r|
|type|nema-6-30r|
|type|nema-6-50r|
|type|nema-10-30r|
|type|nema-10-50r|
|type|nema-14-20r|
|type|nema-14-30r|
|type|nema-14-50r|
|type|nema-14-60r|
|type|nema-l1-15r|
|type|nema-l5-15r|
|type|nema-l5-20r|
|type|nema-l5-30r|
|type|nema-l5-50r|
|type|nema-l6-15r|
|type|nema-l6-20r|
|type|nema-l6-30r|
|type|nema-l6-50r|
|type|nema-l10-30r|
|type|nema-l14-20r|
|type|nema-l14-30r|
|type|nema-l14-50r|
|type|nema-l14-60r|
|type|nema-l21-20r|
|type|nema-l21-30r|
|type|CS6360C|
|type|CS6364C|
|type|CS8164C|
|type|CS8264C|
|type|CS8364C|
|type|CS8464C|
|type|ita-e|
|type|ita-f|
|type|ita-g|
|type|ita-h|
|type|ita-i|
|type|ita-j|
|type|ita-k|
|type|ita-l|
|type|ita-m|
|type|ita-n|
|type|ita-o|
|type|hdot-cx|

<h2 id="tocS_WritablePowerOutletTemplate">WritablePowerOutletTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritablepoweroutlettemplate"></a>
<a id="schema_WritablePowerOutletTemplate"></a>
<a id="tocSwritablepoweroutlettemplate"></a>
<a id="tocswritablepoweroutlettemplate"></a>

```json
{
  "device_type": 0,
  "feed_leg": "A",
  "id": 0,
  "name": "string",
  "power_port": 0,
  "type": "iec-60320-c5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|feed_leg|string|false|none|Phase (for three-phase feeds)|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|power_port|integer \| null|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feed_leg|A|
|feed_leg|B|
|feed_leg|C|
|type|iec-60320-c5|
|type|iec-60320-c7|
|type|iec-60320-c13|
|type|iec-60320-c15|
|type|iec-60320-c19|
|type|iec-60309-p-n-e-4h|
|type|iec-60309-p-n-e-6h|
|type|iec-60309-p-n-e-9h|
|type|iec-60309-2p-e-4h|
|type|iec-60309-2p-e-6h|
|type|iec-60309-2p-e-9h|
|type|iec-60309-3p-e-4h|
|type|iec-60309-3p-e-6h|
|type|iec-60309-3p-e-9h|
|type|iec-60309-3p-n-e-4h|
|type|iec-60309-3p-n-e-6h|
|type|iec-60309-3p-n-e-9h|
|type|nema-1-15r|
|type|nema-5-15r|
|type|nema-5-20r|
|type|nema-5-30r|
|type|nema-5-50r|
|type|nema-6-15r|
|type|nema-6-20r|
|type|nema-6-30r|
|type|nema-6-50r|
|type|nema-10-30r|
|type|nema-10-50r|
|type|nema-14-20r|
|type|nema-14-30r|
|type|nema-14-50r|
|type|nema-14-60r|
|type|nema-l1-15r|
|type|nema-l5-15r|
|type|nema-l5-20r|
|type|nema-l5-30r|
|type|nema-l5-50r|
|type|nema-l6-15r|
|type|nema-l6-20r|
|type|nema-l6-30r|
|type|nema-l6-50r|
|type|nema-l10-30r|
|type|nema-l14-20r|
|type|nema-l14-30r|
|type|nema-l14-50r|
|type|nema-l14-60r|
|type|nema-l21-20r|
|type|nema-l21-30r|
|type|CS6360C|
|type|CS6364C|
|type|CS8164C|
|type|CS8264C|
|type|CS8364C|
|type|CS8464C|
|type|ita-e|
|type|ita-f|
|type|ita-g|
|type|ita-h|
|type|ita-i|
|type|ita-j|
|type|ita-k|
|type|ita-l|
|type|ita-m|
|type|ita-n|
|type|ita-o|
|type|hdot-cx|

<h2 id="tocS_WritablePowerPanel">WritablePowerPanel</h2>
<!-- backwards compatibility -->
<a id="schemawritablepowerpanel"></a>
<a id="schema_WritablePowerPanel"></a>
<a id="tocSwritablepowerpanel"></a>
<a id="tocswritablepowerpanel"></a>

```json
{
  "id": 0,
  "name": "string",
  "powerfeed_count": 0,
  "rack_group": 0,
  "site": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|powerfeed_count|integer|false|read-only|none|
|rack_group|integer \| null|false|none|none|
|site|integer|true|none|none|

<h2 id="tocS_WritablePowerPort">WritablePowerPort</h2>
<!-- backwards compatibility -->
<a id="schemawritablepowerport"></a>
<a id="schema_WritablePowerPort"></a>
<a id="tocSwritablepowerport"></a>
<a id="tocswritablepowerport"></a>

```json
{
  "allocated_draw": 1,
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "connected_endpoint": {
    "property1": "string",
    "property2": "string"
  },
  "connected_endpoint_type": "string",
  "connection_status": false,
  "description": "string",
  "device": 0,
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "iec-60320-c6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocated_draw|integer \| null|false|none|Allocated power draw (watts)|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|connected_endpoint|object|false|read-only|<br>Return the appropriate serializer for the type of connected object.<br>|
|connected_endpoint_type|string|false|read-only|none|
|connection_status|boolean|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|maximum_draw|integer \| null|false|none|Maximum power draw (watts)|
|name|string|true|none|none|
|tags|[string]|false|none|none|
|type|string|false|none|Physical port type|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|false|
|connection_status|true|
|type|iec-60320-c6|
|type|iec-60320-c8|
|type|iec-60320-c14|
|type|iec-60320-c16|
|type|iec-60320-c20|
|type|iec-60309-p-n-e-4h|
|type|iec-60309-p-n-e-6h|
|type|iec-60309-p-n-e-9h|
|type|iec-60309-2p-e-4h|
|type|iec-60309-2p-e-6h|
|type|iec-60309-2p-e-9h|
|type|iec-60309-3p-e-4h|
|type|iec-60309-3p-e-6h|
|type|iec-60309-3p-e-9h|
|type|iec-60309-3p-n-e-4h|
|type|iec-60309-3p-n-e-6h|
|type|iec-60309-3p-n-e-9h|
|type|nema-1-15p|
|type|nema-5-15p|
|type|nema-5-20p|
|type|nema-5-30p|
|type|nema-5-50p|
|type|nema-6-15p|
|type|nema-6-20p|
|type|nema-6-30p|
|type|nema-6-50p|
|type|nema-10-30p|
|type|nema-10-50p|
|type|nema-14-20p|
|type|nema-14-30p|
|type|nema-14-50p|
|type|nema-14-60p|
|type|nema-l1-15p|
|type|nema-l5-15p|
|type|nema-l5-20p|
|type|nema-l5-30p|
|type|nema-l5-50p|
|type|nema-l6-15p|
|type|nema-l6-20p|
|type|nema-l6-30p|
|type|nema-l6-50p|
|type|nema-l10-30p|
|type|nema-l14-20p|
|type|nema-l14-30p|
|type|nema-l14-50p|
|type|nema-l14-60p|
|type|nema-l21-20p|
|type|nema-l21-30p|
|type|cs6361c|
|type|cs6365c|
|type|cs8165c|
|type|cs8265c|
|type|cs8365c|
|type|cs8465c|
|type|ita-e|
|type|ita-f|
|type|ita-ef|
|type|ita-g|
|type|ita-h|
|type|ita-i|
|type|ita-j|
|type|ita-k|
|type|ita-l|
|type|ita-m|
|type|ita-n|
|type|ita-o|

<h2 id="tocS_WritablePowerPortTemplate">WritablePowerPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritablepowerporttemplate"></a>
<a id="schema_WritablePowerPortTemplate"></a>
<a id="tocSwritablepowerporttemplate"></a>
<a id="tocswritablepowerporttemplate"></a>

```json
{
  "allocated_draw": 1,
  "device_type": 0,
  "id": 0,
  "maximum_draw": 1,
  "name": "string",
  "type": "iec-60320-c6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocated_draw|integer \| null|false|none|Allocated power draw (watts)|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|maximum_draw|integer \| null|false|none|Maximum power draw (watts)|
|name|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|iec-60320-c6|
|type|iec-60320-c8|
|type|iec-60320-c14|
|type|iec-60320-c16|
|type|iec-60320-c20|
|type|iec-60309-p-n-e-4h|
|type|iec-60309-p-n-e-6h|
|type|iec-60309-p-n-e-9h|
|type|iec-60309-2p-e-4h|
|type|iec-60309-2p-e-6h|
|type|iec-60309-2p-e-9h|
|type|iec-60309-3p-e-4h|
|type|iec-60309-3p-e-6h|
|type|iec-60309-3p-e-9h|
|type|iec-60309-3p-n-e-4h|
|type|iec-60309-3p-n-e-6h|
|type|iec-60309-3p-n-e-9h|
|type|nema-1-15p|
|type|nema-5-15p|
|type|nema-5-20p|
|type|nema-5-30p|
|type|nema-5-50p|
|type|nema-6-15p|
|type|nema-6-20p|
|type|nema-6-30p|
|type|nema-6-50p|
|type|nema-10-30p|
|type|nema-10-50p|
|type|nema-14-20p|
|type|nema-14-30p|
|type|nema-14-50p|
|type|nema-14-60p|
|type|nema-l1-15p|
|type|nema-l5-15p|
|type|nema-l5-20p|
|type|nema-l5-30p|
|type|nema-l5-50p|
|type|nema-l6-15p|
|type|nema-l6-20p|
|type|nema-l6-30p|
|type|nema-l6-50p|
|type|nema-l10-30p|
|type|nema-l14-20p|
|type|nema-l14-30p|
|type|nema-l14-50p|
|type|nema-l14-60p|
|type|nema-l21-20p|
|type|nema-l21-30p|
|type|cs6361c|
|type|cs6365c|
|type|cs8165c|
|type|cs8265c|
|type|cs8365c|
|type|cs8465c|
|type|ita-e|
|type|ita-f|
|type|ita-ef|
|type|ita-g|
|type|ita-h|
|type|ita-i|
|type|ita-j|
|type|ita-k|
|type|ita-l|
|type|ita-m|
|type|ita-n|
|type|ita-o|

<h2 id="tocS_WritablePrefix">WritablePrefix</h2>
<!-- backwards compatibility -->
<a id="schemawritableprefix"></a>
<a id="schema_WritablePrefix"></a>
<a id="tocSwritableprefix"></a>
<a id="tocswritableprefix"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "family": "string",
  "id": 0,
  "is_pool": true,
  "last_updated": "1970-01-01T00:00:00Z",
  "prefix": "string",
  "role": 0,
  "site": 0,
  "status": "container",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vlan": 0,
  "vrf": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|family|string|false|read-only|none|
|id|integer|false|read-only|none|
|is_pool|boolean|false|none|All IP addresses within this prefix are considered usable|
|last_updated|string(date-time)|false|read-only|none|
|prefix|string|true|none|IPv4 or IPv6 network with mask|
|role|integer \| null|false|none|The primary function of this prefix|
|site|integer \| null|false|none|none|
|status|string|false|none|Operational status of this prefix|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|vlan|integer \| null|false|none|none|
|vrf|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|container|
|status|active|
|status|reserved|
|status|deprecated|

<h2 id="tocS_WritableRack">WritableRack</h2>
<!-- backwards compatibility -->
<a id="schemawritablerack"></a>
<a id="schema_WritableRack"></a>
<a id="tocSwritablerack"></a>
<a id="tocswritablerack"></a>

```json
{
  "asset_tag": "string",
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "desc_units": true,
  "device_count": 0,
  "display_name": "string",
  "facility_id": "string",
  "group": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "outer_depth": 0,
  "outer_unit": "mm",
  "outer_width": 0,
  "powerfeed_count": 0,
  "role": 0,
  "serial": "string",
  "site": 0,
  "status": "reserved",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "type": "2-post-frame",
  "u_height": 1,
  "width": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_tag|string \| null|false|none|A unique tag used to identify this rack|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|desc_units|boolean|false|none|Units are numbered top-to-bottom|
|device_count|integer|false|read-only|none|
|display_name|string|false|read-only|none|
|facility_id|string \| null|false|none|Locally-assigned identifier|
|group|integer \| null|false|none|Assigned group|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|outer_depth|integer \| null|false|none|Outer dimension of rack (depth)|
|outer_unit|string|false|none|none|
|outer_width|integer \| null|false|none|Outer dimension of rack (width)|
|powerfeed_count|integer|false|read-only|none|
|role|integer \| null|false|none|Functional role|
|serial|string|false|none|none|
|site|integer|true|none|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|type|string|false|none|none|
|u_height|integer|false|none|Height in rack units|
|width|integer|false|none|Rail-to-rail width|

#### Enumerated Values

|Property|Value|
|---|---|
|outer_unit|mm|
|outer_unit|in|
|status|reserved|
|status|available|
|status|planned|
|status|active|
|status|deprecated|
|type|2-post-frame|
|type|4-post-frame|
|type|4-post-cabinet|
|type|wall-frame|
|type|wall-cabinet|
|width|10|
|width|19|
|width|21|
|width|23|

<h2 id="tocS_WritableRackGroup">WritableRackGroup</h2>
<!-- backwards compatibility -->
<a id="schemawritablerackgroup"></a>
<a id="schema_WritableRackGroup"></a>
<a id="tocSwritablerackgroup"></a>
<a id="tocswritablerackgroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": 0,
  "rack_count": 0,
  "site": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|integer \| null|false|none|none|
|rack_count|integer|false|read-only|none|
|site|integer|true|none|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_WritableRackReservation">WritableRackReservation</h2>
<!-- backwards compatibility -->
<a id="schemawritablerackreservation"></a>
<a id="schema_WritableRackReservation"></a>
<a id="tocSwritablerackreservation"></a>
<a id="tocswritablerackreservation"></a>

```json
{
  "created": "1970-01-01",
  "description": "string",
  "id": 0,
  "rack": 0,
  "tenant": 0,
  "units": [
    0
  ],
  "user": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|description|string|true|none|none|
|id|integer|false|read-only|none|
|rack|integer|true|none|none|
|tenant|integer \| null|false|none|none|
|units|[integer]|true|none|none|
|user|integer|true|none|none|

<h2 id="tocS_WritableRearPort">WritableRearPort</h2>
<!-- backwards compatibility -->
<a id="schemawritablerearport"></a>
<a id="schema_WritableRearPort"></a>
<a id="tocSwritablerearport"></a>
<a id="tocswritablerearport"></a>

```json
{
  "cable": {
    "id": 0,
    "label": "string",
    "url": "http://example.com"
  },
  "description": "string",
  "device": 0,
  "id": 0,
  "name": "string",
  "positions": 1,
  "tags": [
    "string"
  ],
  "type": "8p8c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cable|[NestedCable](#schemanestedcable)|false|none|none|
|description|string|false|none|none|
|device|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|positions|integer|false|none|none|
|tags|[string]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|8p8c|
|type|110-punch|
|type|bnc|
|type|mrj21|
|type|fc|
|type|lc|
|type|lc-apc|
|type|lsh|
|type|lsh-apc|
|type|mpo|
|type|mtrj|
|type|sc|
|type|sc-apc|
|type|st|

<h2 id="tocS_WritableRearPortTemplate">WritableRearPortTemplate</h2>
<!-- backwards compatibility -->
<a id="schemawritablerearporttemplate"></a>
<a id="schema_WritableRearPortTemplate"></a>
<a id="tocSwritablerearporttemplate"></a>
<a id="tocswritablerearporttemplate"></a>

```json
{
  "device_type": 0,
  "id": 0,
  "name": "string",
  "positions": 1,
  "type": "8p8c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_type|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|positions|integer|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|8p8c|
|type|110-punch|
|type|bnc|
|type|mrj21|
|type|fc|
|type|lc|
|type|lc-apc|
|type|lsh|
|type|lsh-apc|
|type|mpo|
|type|mtrj|
|type|sc|
|type|sc-apc|
|type|st|

<h2 id="tocS_WritableRegion">WritableRegion</h2>
<!-- backwards compatibility -->
<a id="schemawritableregion"></a>
<a id="schema_WritableRegion"></a>
<a id="tocSwritableregion"></a>
<a id="tocswritableregion"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": 0,
  "site_count": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|integer \| null|false|none|none|
|site_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|

<h2 id="tocS_WritableSecret">WritableSecret</h2>
<!-- backwards compatibility -->
<a id="schemawritablesecret"></a>
<a id="schema_WritableSecret"></a>
<a id="tocSwritablesecret"></a>
<a id="tocswritablesecret"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "device": 0,
  "hash": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "plaintext": "string",
  "role": 0,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|device|integer|true|none|none|
|hash|string|false|read-only|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|false|none|none|
|plaintext|string|true|none|none|
|role|integer|true|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_WritableService">WritableService</h2>
<!-- backwards compatibility -->
<a id="schemawritableservice"></a>
<a id="schema_WritableService"></a>
<a id="tocSwritableservice"></a>
<a id="tocswritableservice"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device": 0,
  "id": 0,
  "ipaddresses": [
    0
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "port": 1,
  "protocol": "tcp",
  "tags": [
    "string"
  ],
  "virtual_machine": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|ipaddresses|[integer]|false|none|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|port|integer|true|none|none|
|protocol|string|true|none|none|
|tags|[string]|false|none|none|
|virtual_machine|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|tcp|
|protocol|udp|

<h2 id="tocS_WritableSite">WritableSite</h2>
<!-- backwards compatibility -->
<a id="schemawritablesite"></a>
<a id="schema_WritableSite"></a>
<a id="tocSwritablesite"></a>
<a id="tocswritablesite"></a>

```json
{
  "asn": 1,
  "circuit_count": 0,
  "comments": "string",
  "contact_email": "user@example.com",
  "contact_name": "string",
  "contact_phone": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "facility": "string",
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "physical_address": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "region": 0,
  "shipping_address": "string",
  "slug": "string",
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "time_zone": "string",
  "virtualmachine_count": 0,
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|integer \| null|false|none|32-bit autonomous system number|
|circuit_count|integer|false|read-only|none|
|comments|string|false|none|none|
|contact_email|string(email)|false|none|none|
|contact_name|string|false|none|none|
|contact_phone|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|facility|string|false|none|Local facility ID or description|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|latitude|string(decimal) \| null|false|none|GPS coordinate (latitude)|
|longitude|string(decimal) \| null|false|none|GPS coordinate (longitude)|
|name|string|true|none|none|
|physical_address|string|false|none|none|
|prefix_count|integer|false|read-only|none|
|rack_count|integer|false|read-only|none|
|region|integer \| null|false|none|none|
|shipping_address|string|false|none|none|
|slug|string(slug)|true|none|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|time_zone|string|false|none|none|
|virtualmachine_count|integer|false|read-only|none|
|vlan_count|integer|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|planned|
|status|retired|

<h2 id="tocS_WritableTenant">WritableTenant</h2>
<!-- backwards compatibility -->
<a id="schemawritabletenant"></a>
<a id="schema_WritableTenant"></a>
<a id="tocSwritabletenant"></a>
<a id="tocswritabletenant"></a>

```json
{
  "circuit_count": 0,
  "cluster_count": 0,
  "comments": "string",
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "device_count": 0,
  "group": 0,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rack_count": 0,
  "site_count": 0,
  "slug": "string",
  "tags": [
    "string"
  ],
  "virtualmachine_count": 0,
  "vlan_count": 0,
  "vrf_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|circuit_count|integer|false|read-only|none|
|cluster_count|integer|false|read-only|none|
|comments|string|false|none|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|device_count|integer|false|read-only|none|
|group|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|ipaddress_count|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|rack_count|integer|false|read-only|none|
|site_count|integer|false|read-only|none|
|slug|string(slug)|true|none|none|
|tags|[string]|false|none|none|
|virtualmachine_count|integer|false|read-only|none|
|vlan_count|integer|false|read-only|none|
|vrf_count|integer|false|read-only|none|

<h2 id="tocS_WritableTenantGroup">WritableTenantGroup</h2>
<!-- backwards compatibility -->
<a id="schemawritabletenantgroup"></a>
<a id="schema_WritableTenantGroup"></a>
<a id="tocSwritabletenantgroup"></a>
<a id="tocswritabletenantgroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "parent": 0,
  "slug": "string",
  "tenant_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|parent|integer \| null|false|none|none|
|slug|string(slug)|true|none|none|
|tenant_count|integer|false|read-only|none|

<h2 id="tocS_WritableVLAN">WritableVLAN</h2>
<!-- backwards compatibility -->
<a id="schemawritablevlan"></a>
<a id="schema_WritableVLAN"></a>
<a id="tocSwritablevlan"></a>
<a id="tocswritablevlan"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "group": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "role": 0,
  "site": 0,
  "status": "active",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vid": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|display_name|string|false|read-only|none|
|group|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|role|integer \| null|false|none|none|
|site|integer \| null|false|none|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|vid|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|reserved|
|status|deprecated|

<h2 id="tocS_WritableVLANGroup">WritableVLANGroup</h2>
<!-- backwards compatibility -->
<a id="schemawritablevlangroup"></a>
<a id="schema_WritableVLANGroup"></a>
<a id="tocSwritablevlangroup"></a>
<a id="tocswritablevlangroup"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string",
  "site": 0,
  "slug": "string",
  "vlan_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|site|integer \| null|false|none|none|
|slug|string(slug)|true|none|none|
|vlan_count|integer|false|read-only|none|

<h2 id="tocS_WritableVRF">WritableVRF</h2>
<!-- backwards compatibility -->
<a id="schemawritablevrf"></a>
<a id="schema_WritableVRF"></a>
<a id="tocSwritablevrf"></a>
<a id="tocswritablevrf"></a>

```json
{
  "created": "1970-01-01",
  "custom_fields": {},
  "description": "string",
  "display_name": "string",
  "enforce_unique": true,
  "id": 0,
  "ipaddress_count": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "prefix_count": 0,
  "rd": "string",
  "tags": [
    "string"
  ],
  "tenant": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|display_name|string|false|read-only|none|
|enforce_unique|boolean|false|none|Prevent duplicate prefixes/IP addresses within this VRF|
|id|integer|false|read-only|none|
|ipaddress_count|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|name|string|true|none|none|
|prefix_count|integer|false|read-only|none|
|rd|string \| null|false|none|Unique route distinguisher (as defined in RFC 4364)|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|

<h2 id="tocS_WritableVirtualChassis">WritableVirtualChassis</h2>
<!-- backwards compatibility -->
<a id="schemawritablevirtualchassis"></a>
<a id="schema_WritableVirtualChassis"></a>
<a id="tocSwritablevirtualchassis"></a>
<a id="tocswritablevirtualchassis"></a>

```json
{
  "domain": "string",
  "id": 0,
  "master": 0,
  "member_count": 0,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|id|integer|false|read-only|none|
|master|integer|true|none|none|
|member_count|integer|false|read-only|none|
|tags|[string]|false|none|none|

<h2 id="tocS_WritableVirtualMachineInterface">WritableVirtualMachineInterface</h2>
<!-- backwards compatibility -->
<a id="schemawritablevirtualmachineinterface"></a>
<a id="schema_WritableVirtualMachineInterface"></a>
<a id="tocSwritablevirtualmachineinterface"></a>
<a id="tocswritablevirtualmachineinterface"></a>

```json
{
  "description": "string",
  "enabled": true,
  "id": 0,
  "mac_address": "string",
  "mode": "access",
  "mtu": 1,
  "name": "string",
  "tagged_vlans": [
    0
  ],
  "tags": [
    "string"
  ],
  "type": "virtual",
  "untagged_vlan": 0,
  "virtual_machine": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|enabled|boolean|false|none|none|
|id|integer|false|read-only|none|
|mac_address|string \| null|false|none|none|
|mode|string|false|none|none|
|mtu|integer \| null|false|none|none|
|name|string|true|none|none|
|tagged_vlans|[integer]|false|none|none|
|tags|[string]|false|none|none|
|type|string|true|none|none|
|untagged_vlan|integer \| null|false|none|none|
|virtual_machine|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|access|
|mode|tagged|
|mode|tagged-all|
|type|virtual|
|type|lag|
|type|100base-tx|
|type|1000base-t|
|type|2.5gbase-t|
|type|5gbase-t|
|type|10gbase-t|
|type|10gbase-cx4|
|type|1000base-x-gbic|
|type|1000base-x-sfp|
|type|10gbase-x-sfpp|
|type|10gbase-x-xfp|
|type|10gbase-x-xenpak|
|type|10gbase-x-x2|
|type|25gbase-x-sfp28|
|type|40gbase-x-qsfpp|
|type|50gbase-x-sfp28|
|type|100gbase-x-cfp|
|type|100gbase-x-cfp2|
|type|200gbase-x-cfp2|
|type|100gbase-x-cfp4|
|type|100gbase-x-cpak|
|type|100gbase-x-qsfp28|
|type|200gbase-x-qsfp56|
|type|400gbase-x-qsfpdd|
|type|400gbase-x-osfp|
|type|ieee802.11a|
|type|ieee802.11g|
|type|ieee802.11n|
|type|ieee802.11ac|
|type|ieee802.11ad|
|type|ieee802.11ax|
|type|gsm|
|type|cdma|
|type|lte|
|type|sonet-oc3|
|type|sonet-oc12|
|type|sonet-oc48|
|type|sonet-oc192|
|type|sonet-oc768|
|type|sonet-oc1920|
|type|sonet-oc3840|
|type|1gfc-sfp|
|type|2gfc-sfp|
|type|4gfc-sfp|
|type|8gfc-sfpp|
|type|16gfc-sfpp|
|type|32gfc-sfp28|
|type|128gfc-sfp28|
|type|infiniband-sdr|
|type|infiniband-ddr|
|type|infiniband-qdr|
|type|infiniband-fdr10|
|type|infiniband-fdr|
|type|infiniband-edr|
|type|infiniband-hdr|
|type|infiniband-ndr|
|type|infiniband-xdr|
|type|t1|
|type|e1|
|type|t3|
|type|e3|
|type|cisco-stackwise|
|type|cisco-stackwise-plus|
|type|cisco-flexstack|
|type|cisco-flexstack-plus|
|type|juniper-vcp|
|type|extreme-summitstack|
|type|extreme-summitstack-128|
|type|extreme-summitstack-256|
|type|extreme-summitstack-512|
|type|other|

<h2 id="tocS_WritableVirtualMachineWithConfigContext">WritableVirtualMachineWithConfigContext</h2>
<!-- backwards compatibility -->
<a id="schemawritablevirtualmachinewithconfigcontext"></a>
<a id="schema_WritableVirtualMachineWithConfigContext"></a>
<a id="tocSwritablevirtualmachinewithconfigcontext"></a>
<a id="tocswritablevirtualmachinewithconfigcontext"></a>

```json
{
  "cluster": 0,
  "comments": "string",
  "config_context": {
    "property1": "string",
    "property2": "string"
  },
  "created": "1970-01-01",
  "custom_fields": {},
  "disk": 0,
  "id": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "local_context_data": "string",
  "memory": 0,
  "name": "string",
  "platform": 0,
  "primary_ip": "string",
  "primary_ip4": 0,
  "primary_ip6": 0,
  "role": 0,
  "site": "string",
  "status": "offline",
  "tags": [
    "string"
  ],
  "tenant": 0,
  "vcpus": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|integer|true|none|none|
|comments|string|false|none|none|
|config_context|object|false|read-only|none|
|created|string(date)|false|read-only|none|
|custom_fields|object|false|none|none|
|disk|integer \| null|false|none|none|
|id|integer|false|read-only|none|
|last_updated|string(date-time)|false|read-only|none|
|local_context_data|string \| null|false|none|none|
|memory|integer \| null|false|none|none|
|name|string|true|none|none|
|platform|integer \| null|false|none|none|
|primary_ip|string|false|read-only|none|
|primary_ip4|integer \| null|false|none|none|
|primary_ip6|integer \| null|false|none|none|
|role|integer \| null|false|none|none|
|site|string|false|read-only|none|
|status|string|false|none|none|
|tags|[string]|false|none|none|
|tenant|integer \| null|false|none|none|
|vcpus|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|offline|
|status|active|
|status|planned|
|status|staged|
|status|failed|
|status|decommissioning|
