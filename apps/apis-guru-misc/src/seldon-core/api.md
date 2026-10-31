<h1 id="seldon-external-api">Seldon External API v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://seldon.local">http://seldon.local</a>

* <a href="http://localhost:80">http://localhost:80</a>

* <a href="http://localhost:8002">http://localhost:8002</a> - fixed host as swagger UI has bug with variables for auth

Web: <a href="https://github.com/SeldonIO/seldon-core">Seldon Core</a> 

<a href="https://github.com/SeldonIO/seldon-core">Seldon Core Documentation</a>

<h1 id="seldon-external-api-internal">Internal</h1>

## Aggregate

<a id="opIdAggregate"></a>

> Code samples

```bash
curl 'https://example.com/aggregate?seldonMessages=%5B%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D%5D' \
  -H 'Accept: application/json'
```

`GET /aggregate`

<h3 id="aggregate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|query|[SeldonMessageList](#schemaseldonmessagelist)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="aggregate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## Aggregate2

<a id="opIdAggregate2"></a>

> Code samples

```bash
curl https://example.com/aggregate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22seldonMessages%22%3A%5B%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D%5D%7D'
```

`POST /aggregate`

> Body parameter

```yaml
json:
  seldonMessages:
    -
      binData: string
      data:
        names:
          - string
        ndarry:
          - null
        tensor:
          shape:
            - 0
          values:
            - 0
        tftensor:
          bool_val:
            - true
          dcomplex_val:
            - 0
          double_val:
            - 0
          dtype: DT_INVALID
          float_val:
            - 0
          half_val:
            - 0
          int64_val:
            - string
          int_val:
            - 0
          resource_handle_val:
            -
              container: string
              device: string
              hash_code: string
              maybe_type_name: string
              name: string
          scomplex_val:
            - 0
          string_val:
            - string
          tensor_content: string
          tensor_shape:
            dim:
              -
                name: string
                size: string
            unknown_rank: true
          uint32_val:
            - 0
          uint64_val:
            - string
          variant_val:
            - {}
          version_number: 0
      meta:
        metrics:
          -
            key: string
            type: COUNTER
            value: 0
        puid: string
        requestPath:
          classifier: "seldonio/mock_classifier:1.0"
        routing:
          router1: 1
        tags:
          mytag: myvalue
      status:
        code: 0
        info: string
        reason: string
        status: SUCCESS
      strData: string
```

<h3 id="aggregate2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[SeldonMessageList](#schemaseldonmessagelist)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="aggregate2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformInput4

<a id="opIdTransformInput4"></a>

> Code samples

```bash
curl 'https://example.com/predict?json=%7B%22data%22%3A%7B%22names%22%20%3A%20%5B%22feature1%22%5D%2C%22tensor%22%20%3A%20%7B%22shape%22%3A%20%5B1%2C1%5D%2C%22values%22%3A%20%5B1%5D%7D%7D%7D' \
  -H 'Accept: application/json'
```

`GET /predict`

<h3 id="transforminput4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json|query|[SeldonMessage](#schemaseldonmessage)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transforminput4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformInput3

<a id="opIdTransformInput3"></a>

> Code samples

```bash
curl https://example.com/predict \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D'
```

`POST /predict`

> Body parameter

```yaml
json:
  binData: string
  data:
    names:
      - string
    ndarry:
      - null
    tensor:
      shape:
        - 0
      values:
        - 0
    tftensor:
      bool_val:
        - true
      dcomplex_val:
        - 0
      double_val:
        - 0
      dtype: DT_INVALID
      float_val:
        - 0
      half_val:
        - 0
      int64_val:
        - string
      int_val:
        - 0
      resource_handle_val:
        -
          container: string
          device: string
          hash_code: string
          maybe_type_name: string
          name: string
      scomplex_val:
        - 0
      string_val:
        - string
      tensor_content: string
      tensor_shape:
        dim:
          -
            name: string
            size: string
        unknown_rank: true
      uint32_val:
        - 0
      uint64_val:
        - string
      variant_val:
        - {}
      version_number: 0
  meta:
    metrics:
      -
        key: string
        type: COUNTER
        value: 0
    puid: string
    requestPath:
      classifier: "seldonio/mock_classifier:1.0"
    routing:
      router1: 1
    tags:
      mytag: myvalue
  status:
    code: 0
    info: string
    reason: string
    status: SUCCESS
  strData: string
```

<h3 id="transforminput3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[SeldonMessage](#schemaseldonmessage)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transforminput3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## Route2

<a id="opIdRoute2"></a>

> Code samples

```bash
curl 'https://example.com/route?binData=string&data=%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D&meta=%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D&status=%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D&strData=string' \
  -H 'Accept: application/json'
```

`GET /route`

<h3 id="route2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json|query|[SeldonMessage](#schemaseldonmessage)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="route2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## Route

<a id="opIdRoute"></a>

> Code samples

```bash
curl https://example.com/route \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D'
```

`POST /route`

> Body parameter

```yaml
json:
  binData: string
  data:
    names:
      - string
    ndarry:
      - null
    tensor:
      shape:
        - 0
      values:
        - 0
    tftensor:
      bool_val:
        - true
      dcomplex_val:
        - 0
      double_val:
        - 0
      dtype: DT_INVALID
      float_val:
        - 0
      half_val:
        - 0
      int64_val:
        - string
      int_val:
        - 0
      resource_handle_val:
        -
          container: string
          device: string
          hash_code: string
          maybe_type_name: string
          name: string
      scomplex_val:
        - 0
      string_val:
        - string
      tensor_content: string
      tensor_shape:
        dim:
          -
            name: string
            size: string
        unknown_rank: true
      uint32_val:
        - 0
      uint64_val:
        - string
      variant_val:
        - {}
      version_number: 0
  meta:
    metrics:
      -
        key: string
        type: COUNTER
        value: 0
    puid: string
    requestPath:
      classifier: "seldonio/mock_classifier:1.0"
    routing:
      router1: 1
    tags:
      mytag: myvalue
  status:
    code: 0
    info: string
    reason: string
    status: SUCCESS
  strData: string
```

<h3 id="route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[SeldonMessage](#schemaseldonmessage)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## SendFeedback2

<a id="opIdSendFeedback2"></a>

> Code samples

```bash
curl 'https://example.com/send-feedback?request=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D&response=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D&reward=0&truth=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D' \
  -H 'Accept: application/json'
```

`GET /send-feedback`

<h3 id="sendfeedback2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json|query|[Feedback](#schemafeedback)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="sendfeedback2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## SendFeedback

<a id="opIdSendFeedback"></a>

> Code samples

```bash
curl https://example.com/send-feedback \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22request%22%3A%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D%2C%22response%22%3A%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D%2C%22reward%22%3A0%2C%22truth%22%3A%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D%7D'
```

`POST /send-feedback`

> Body parameter

```yaml
json:
  request:
    binData: string
    data:
      names:
        - string
      ndarry:
        - null
      tensor:
        shape:
          - 0
        values:
          - 0
      tftensor:
        bool_val:
          - true
        dcomplex_val:
          - 0
        double_val:
          - 0
        dtype: DT_INVALID
        float_val:
          - 0
        half_val:
          - 0
        int64_val:
          - string
        int_val:
          - 0
        resource_handle_val:
          -
            container: string
            device: string
            hash_code: string
            maybe_type_name: string
            name: string
        scomplex_val:
          - 0
        string_val:
          - string
        tensor_content: string
        tensor_shape:
          dim:
            -
              name: string
              size: string
          unknown_rank: true
        uint32_val:
          - 0
        uint64_val:
          - string
        variant_val:
          - {}
        version_number: 0
    meta:
      metrics:
        -
          key: string
          type: COUNTER
          value: 0
      puid: string
      requestPath:
        classifier: "seldonio/mock_classifier:1.0"
      routing:
        router1: 1
      tags:
        mytag: myvalue
    status:
      code: 0
      info: string
      reason: string
      status: SUCCESS
    strData: string
  response:
    binData: string
    data:
      names:
        - string
      ndarry:
        - null
      tensor:
        shape:
          - 0
        values:
          - 0
      tftensor:
        bool_val:
          - true
        dcomplex_val:
          - 0
        double_val:
          - 0
        dtype: DT_INVALID
        float_val:
          - 0
        half_val:
          - 0
        int64_val:
          - string
        int_val:
          - 0
        resource_handle_val:
          -
            container: string
            device: string
            hash_code: string
            maybe_type_name: string
            name: string
        scomplex_val:
          - 0
        string_val:
          - string
        tensor_content: string
        tensor_shape:
          dim:
            -
              name: string
              size: string
          unknown_rank: true
        uint32_val:
          - 0
        uint64_val:
          - string
        variant_val:
          - {}
        version_number: 0
    meta:
      metrics:
        -
          key: string
          type: COUNTER
          value: 0
      puid: string
      requestPath:
        classifier: "seldonio/mock_classifier:1.0"
      routing:
        router1: 1
      tags:
        mytag: myvalue
    status:
      code: 0
      info: string
      reason: string
      status: SUCCESS
    strData: string
  reward: 0
  truth:
    binData: string
    data:
      names:
        - string
      ndarry:
        - null
      tensor:
        shape:
          - 0
        values:
          - 0
      tftensor:
        bool_val:
          - true
        dcomplex_val:
          - 0
        double_val:
          - 0
        dtype: DT_INVALID
        float_val:
          - 0
        half_val:
          - 0
        int64_val:
          - string
        int_val:
          - 0
        resource_handle_val:
          -
            container: string
            device: string
            hash_code: string
            maybe_type_name: string
            name: string
        scomplex_val:
          - 0
        string_val:
          - string
        tensor_content: string
        tensor_shape:
          dim:
            -
              name: string
              size: string
          unknown_rank: true
        uint32_val:
          - 0
        uint64_val:
          - string
        variant_val:
          - {}
        version_number: 0
    meta:
      metrics:
        -
          key: string
          type: COUNTER
          value: 0
      puid: string
      requestPath:
        classifier: "seldonio/mock_classifier:1.0"
      routing:
        router1: 1
      tags:
        mytag: myvalue
    status:
      code: 0
      info: string
      reason: string
      status: SUCCESS
    strData: string
```

<h3 id="sendfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[Feedback](#schemafeedback)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="sendfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformInput2

<a id="opIdTransformInput2"></a>

> Code samples

```bash
curl 'https://example.com/transform-input?binData=string&data=%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D&meta=%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D&status=%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D&strData=string' \
  -H 'Accept: application/json'
```

`GET /transform-input`

<h3 id="transforminput2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json|query|[SeldonMessage](#schemaseldonmessage)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transforminput2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformInput

<a id="opIdTransformInput"></a>

> Code samples

```bash
curl https://example.com/transform-input \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D'
```

`POST /transform-input`

> Body parameter

```yaml
json:
  binData: string
  data:
    names:
      - string
    ndarry:
      - null
    tensor:
      shape:
        - 0
      values:
        - 0
    tftensor:
      bool_val:
        - true
      dcomplex_val:
        - 0
      double_val:
        - 0
      dtype: DT_INVALID
      float_val:
        - 0
      half_val:
        - 0
      int64_val:
        - string
      int_val:
        - 0
      resource_handle_val:
        -
          container: string
          device: string
          hash_code: string
          maybe_type_name: string
          name: string
      scomplex_val:
        - 0
      string_val:
        - string
      tensor_content: string
      tensor_shape:
        dim:
          -
            name: string
            size: string
        unknown_rank: true
      uint32_val:
        - 0
      uint64_val:
        - string
      variant_val:
        - {}
      version_number: 0
  meta:
    metrics:
      -
        key: string
        type: COUNTER
        value: 0
    puid: string
    requestPath:
      classifier: "seldonio/mock_classifier:1.0"
    routing:
      router1: 1
    tags:
      mytag: myvalue
  status:
    code: 0
    info: string
    reason: string
    status: SUCCESS
  strData: string
```

<h3 id="transforminput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[SeldonMessage](#schemaseldonmessage)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transforminput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformOutput2

<a id="opIdTransformOutput2"></a>

> Code samples

```bash
curl 'https://example.com/transform-output?binData=string&data=%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D&meta=%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D&status=%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D&strData=string' \
  -H 'Accept: application/json'
```

`GET /transform-output`

<h3 id="transformoutput2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|json|query|[SeldonMessage](#schemaseldonmessage)|true|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transformoutput2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

## TransformOutput

<a id="opIdTransformOutput"></a>

> Code samples

```bash
curl https://example.com/transform-output \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'json=%7B%22binData%22%3A%22string%22%2C%22data%22%3A%7B%22names%22%3A%5B%22string%22%5D%2C%22ndarry%22%3A%5Bnull%5D%2C%22tensor%22%3A%7B%22shape%22%3A%5B0%5D%2C%22values%22%3A%5B0%5D%7D%2C%22tftensor%22%3A%7B%22bool_val%22%3A%5Btrue%5D%2C%22dcomplex_val%22%3A%5B0%5D%2C%22double_val%22%3A%5B0%5D%2C%22dtype%22%3A%22DT_INVALID%22%2C%22float_val%22%3A%5B0%5D%2C%22half_val%22%3A%5B0%5D%2C%22int64_val%22%3A%5B%22string%22%5D%2C%22int_val%22%3A%5B0%5D%2C%22resource_handle_val%22%3A%5B%7B%22container%22%3A%22string%22%2C%22device%22%3A%22string%22%2C%22hash_code%22%3A%22string%22%2C%22maybe_type_name%22%3A%22string%22%2C%22name%22%3A%22string%22%7D%5D%2C%22scomplex_val%22%3A%5B0%5D%2C%22string_val%22%3A%5B%22string%22%5D%2C%22tensor_content%22%3A%22string%22%2C%22tensor_shape%22%3A%7B%22dim%22%3A%5B%7B%22name%22%3A%22string%22%2C%22size%22%3A%22string%22%7D%5D%2C%22unknown_rank%22%3Atrue%7D%2C%22uint32_val%22%3A%5B0%5D%2C%22uint64_val%22%3A%5B%22string%22%5D%2C%22variant_val%22%3A%5B%7B%7D%5D%2C%22version_number%22%3A0%7D%7D%2C%22meta%22%3A%7B%22metrics%22%3A%5B%7B%22key%22%3A%22string%22%2C%22type%22%3A%22COUNTER%22%2C%22value%22%3A0%7D%5D%2C%22puid%22%3A%22string%22%2C%22requestPath%22%3A%7B%22classifier%22%3A%22seldonio%2Fmock_classifier%3A1.0%22%7D%2C%22routing%22%3A%7B%22router1%22%3A1%7D%2C%22tags%22%3A%7B%22mytag%22%3A%22myvalue%22%7D%7D%2C%22status%22%3A%7B%22code%22%3A0%2C%22info%22%3A%22string%22%2C%22reason%22%3A%22string%22%2C%22status%22%3A%22SUCCESS%22%7D%2C%22strData%22%3A%22string%22%7D'
```

`POST /transform-output`

> Body parameter

```yaml
json:
  binData: string
  data:
    names:
      - string
    ndarry:
      - null
    tensor:
      shape:
        - 0
      values:
        - 0
    tftensor:
      bool_val:
        - true
      dcomplex_val:
        - 0
      double_val:
        - 0
      dtype: DT_INVALID
      float_val:
        - 0
      half_val:
        - 0
      int64_val:
        - string
      int_val:
        - 0
      resource_handle_val:
        -
          container: string
          device: string
          hash_code: string
          maybe_type_name: string
          name: string
      scomplex_val:
        - 0
      string_val:
        - string
      tensor_content: string
      tensor_shape:
        dim:
          -
            name: string
            size: string
        unknown_rank: true
      uint32_val:
        - 0
      uint64_val:
        - string
      variant_val:
        - {}
      version_number: 0
  meta:
    metrics:
      -
        key: string
        type: COUNTER
        value: 0
    puid: string
    requestPath:
      classifier: "seldonio/mock_classifier:1.0"
    routing:
      router1: 1
    tags:
      mytag: myvalue
  status:
    code: 0
    info: string
    reason: string
    status: SUCCESS
  strData: string
```

<h3 id="transformoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» json|body|[SeldonMessage](#schemaseldonmessage)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

<h3 id="transformoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnyValue">AnyValue</h2>
<!-- backwards compatibility -->
<a id="schemaanyvalue"></a>
<a id="schema_AnyValue"></a>
<a id="tocSanyvalue"></a>
<a id="tocsanyvalue"></a>

```json
null
```

Can be anything: string, number, array, object, etc.

<h2 id="tocS_DefaultData">DefaultData</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdata"></a>
<a id="schema_DefaultData"></a>
<a id="tocSdefaultdata"></a>
<a id="tocsdefaultdata"></a>

```json
{
  "names": [
    "string"
  ],
  "ndarry": [
    null
  ],
  "tensor": {
    "shape": [
      0
    ],
    "values": [
      0
    ]
  },
  "tftensor": {
    "bool_val": [
      true
    ],
    "dcomplex_val": [
      0
    ],
    "double_val": [
      0
    ],
    "dtype": "DT_INVALID",
    "float_val": [
      0
    ],
    "half_val": [
      0
    ],
    "int64_val": [
      "string"
    ],
    "int_val": [
      0
    ],
    "resource_handle_val": [
      {
        "container": "string",
        "device": "string",
        "hash_code": "string",
        "maybe_type_name": "string",
        "name": "string"
      }
    ],
    "scomplex_val": [
      0
    ],
    "string_val": [
      "string"
    ],
    "tensor_content": "string",
    "tensor_shape": {
      "dim": [
        {
          "name": "string",
          "size": "string"
        }
      ],
      "unknown_rank": true
    },
    "uint32_val": [
      0
    ],
    "uint64_val": [
      "string"
    ],
    "variant_val": [
      {}
    ],
    "version_number": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|
|ndarry|[[AnyValue](#schemaanyvalue)]|false|none|none|
|tensor|[Tensor](#schematensor)|false|none|none|
|tftensor|[TensorflowTensorProto](#schematensorflowtensorproto)|false|none|Protocol buffer representing a tensor.|

<h2 id="tocS_Feedback">Feedback</h2>
<!-- backwards compatibility -->
<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
{
  "request": {
    "binData": "string",
    "data": {
      "names": [
        "string"
      ],
      "ndarry": [
        null
      ],
      "tensor": {
        "shape": [
          0
        ],
        "values": [
          0
        ]
      },
      "tftensor": {
        "bool_val": [
          true
        ],
        "dcomplex_val": [
          0
        ],
        "double_val": [
          0
        ],
        "dtype": "DT_INVALID",
        "float_val": [
          0
        ],
        "half_val": [
          0
        ],
        "int64_val": [
          "string"
        ],
        "int_val": [
          0
        ],
        "resource_handle_val": [
          {
            "container": "string",
            "device": "string",
            "hash_code": "string",
            "maybe_type_name": "string",
            "name": "string"
          }
        ],
        "scomplex_val": [
          0
        ],
        "string_val": [
          "string"
        ],
        "tensor_content": "string",
        "tensor_shape": {
          "dim": [
            {
              "name": "string",
              "size": "string"
            }
          ],
          "unknown_rank": true
        },
        "uint32_val": [
          0
        ],
        "uint64_val": [
          "string"
        ],
        "variant_val": [
          {}
        ],
        "version_number": 0
      }
    },
    "meta": {
      "metrics": [
        {
          "key": "string",
          "type": "COUNTER",
          "value": 0
        }
      ],
      "puid": "string",
      "requestPath": {
        "classifier": "seldonio/mock_classifier:1.0"
      },
      "routing": {
        "router1": 1
      },
      "tags": {
        "mytag": "myvalue"
      }
    },
    "status": {
      "code": 0,
      "info": "string",
      "reason": "string",
      "status": "SUCCESS"
    },
    "strData": "string"
  },
  "response": {
    "binData": "string",
    "data": {
      "names": [
        "string"
      ],
      "ndarry": [
        null
      ],
      "tensor": {
        "shape": [
          0
        ],
        "values": [
          0
        ]
      },
      "tftensor": {
        "bool_val": [
          true
        ],
        "dcomplex_val": [
          0
        ],
        "double_val": [
          0
        ],
        "dtype": "DT_INVALID",
        "float_val": [
          0
        ],
        "half_val": [
          0
        ],
        "int64_val": [
          "string"
        ],
        "int_val": [
          0
        ],
        "resource_handle_val": [
          {
            "container": "string",
            "device": "string",
            "hash_code": "string",
            "maybe_type_name": "string",
            "name": "string"
          }
        ],
        "scomplex_val": [
          0
        ],
        "string_val": [
          "string"
        ],
        "tensor_content": "string",
        "tensor_shape": {
          "dim": [
            {
              "name": "string",
              "size": "string"
            }
          ],
          "unknown_rank": true
        },
        "uint32_val": [
          0
        ],
        "uint64_val": [
          "string"
        ],
        "variant_val": [
          {}
        ],
        "version_number": 0
      }
    },
    "meta": {
      "metrics": [
        {
          "key": "string",
          "type": "COUNTER",
          "value": 0
        }
      ],
      "puid": "string",
      "requestPath": {
        "classifier": "seldonio/mock_classifier:1.0"
      },
      "routing": {
        "router1": 1
      },
      "tags": {
        "mytag": "myvalue"
      }
    },
    "status": {
      "code": 0,
      "info": "string",
      "reason": "string",
      "status": "SUCCESS"
    },
    "strData": "string"
  },
  "reward": 0,
  "truth": {
    "binData": "string",
    "data": {
      "names": [
        "string"
      ],
      "ndarry": [
        null
      ],
      "tensor": {
        "shape": [
          0
        ],
        "values": [
          0
        ]
      },
      "tftensor": {
        "bool_val": [
          true
        ],
        "dcomplex_val": [
          0
        ],
        "double_val": [
          0
        ],
        "dtype": "DT_INVALID",
        "float_val": [
          0
        ],
        "half_val": [
          0
        ],
        "int64_val": [
          "string"
        ],
        "int_val": [
          0
        ],
        "resource_handle_val": [
          {
            "container": "string",
            "device": "string",
            "hash_code": "string",
            "maybe_type_name": "string",
            "name": "string"
          }
        ],
        "scomplex_val": [
          0
        ],
        "string_val": [
          "string"
        ],
        "tensor_content": "string",
        "tensor_shape": {
          "dim": [
            {
              "name": "string",
              "size": "string"
            }
          ],
          "unknown_rank": true
        },
        "uint32_val": [
          0
        ],
        "uint64_val": [
          "string"
        ],
        "variant_val": [
          {}
        ],
        "version_number": 0
      }
    },
    "meta": {
      "metrics": [
        {
          "key": "string",
          "type": "COUNTER",
          "value": 0
        }
      ],
      "puid": "string",
      "requestPath": {
        "classifier": "seldonio/mock_classifier:1.0"
      },
      "routing": {
        "router1": 1
      },
      "tags": {
        "mytag": "myvalue"
      }
    },
    "status": {
      "code": 0,
      "info": "string",
      "reason": "string",
      "status": "SUCCESS"
    },
    "strData": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[SeldonMessage](#schemaseldonmessage)|false|none|none|
|response|[SeldonMessage](#schemaseldonmessage)|false|none|none|
|reward|number(float)|false|none|none|
|truth|[SeldonMessage](#schemaseldonmessage)|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "metrics": [
    {
      "key": "string",
      "type": "COUNTER",
      "value": 0
    }
  ],
  "puid": "string",
  "requestPath": {
    "classifier": "seldonio/mock_classifier:1.0"
  },
  "routing": {
    "router1": 1
  },
  "tags": {
    "mytag": "myvalue"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[Metric](#schemametric)]|false|none|none|
|puid|string|false|none|none|
|requestPath|object|false|none|none|
|routing|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "key": "string",
  "type": "COUNTER",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|type|[MetricType](#schemametrictype)|false|none|none|
|value|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COUNTER|
|type|GAUGE|
|type|TIMER|

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"COUNTER"
```

<h2 id="tocS_SeldonMessage">SeldonMessage</h2>
<!-- backwards compatibility -->
<a id="schemaseldonmessage"></a>
<a id="schema_SeldonMessage"></a>
<a id="tocSseldonmessage"></a>
<a id="tocsseldonmessage"></a>

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarry": [
      null
    ],
    "tensor": {
      "shape": [
        0
      ],
      "values": [
        0
      ]
    },
    "tftensor": {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  },
  "meta": {
    "metrics": [
      {
        "key": "string",
        "type": "COUNTER",
        "value": 0
      }
    ],
    "puid": "string",
    "requestPath": {
      "classifier": "seldonio/mock_classifier:1.0"
    },
    "routing": {
      "router1": 1
    },
    "tags": {
      "mytag": "myvalue"
    }
  },
  "status": {
    "code": 0,
    "info": "string",
    "reason": "string",
    "status": "SUCCESS"
  },
  "strData": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binData|string(byte)|false|none|none|
|data|[DefaultData](#schemadefaultdata)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|status|[Status](#schemastatus)|false|none|none|
|strData|string|false|none|none|

<h2 id="tocS_SeldonMessageList">SeldonMessageList</h2>
<!-- backwards compatibility -->
<a id="schemaseldonmessagelist"></a>
<a id="schema_SeldonMessageList"></a>
<a id="tocSseldonmessagelist"></a>
<a id="tocsseldonmessagelist"></a>

```json
{
  "seldonMessages": [
    {
      "binData": "string",
      "data": {
        "names": [
          "string"
        ],
        "ndarry": [
          null
        ],
        "tensor": {
          "shape": [
            0
          ],
          "values": [
            0
          ]
        },
        "tftensor": {
          "bool_val": [
            true
          ],
          "dcomplex_val": [
            0
          ],
          "double_val": [
            0
          ],
          "dtype": "DT_INVALID",
          "float_val": [
            0
          ],
          "half_val": [
            0
          ],
          "int64_val": [
            "string"
          ],
          "int_val": [
            0
          ],
          "resource_handle_val": [
            {
              "container": "string",
              "device": "string",
              "hash_code": "string",
              "maybe_type_name": "string",
              "name": "string"
            }
          ],
          "scomplex_val": [
            0
          ],
          "string_val": [
            "string"
          ],
          "tensor_content": "string",
          "tensor_shape": {
            "dim": [
              {
                "name": "string",
                "size": "string"
              }
            ],
            "unknown_rank": true
          },
          "uint32_val": [
            0
          ],
          "uint64_val": [
            "string"
          ],
          "variant_val": [
            {}
          ],
          "version_number": 0
        }
      },
      "meta": {
        "metrics": [
          {
            "key": "string",
            "type": "COUNTER",
            "value": 0
          }
        ],
        "puid": "string",
        "requestPath": {
          "classifier": "seldonio/mock_classifier:1.0"
        },
        "routing": {
          "router1": 1
        },
        "tags": {
          "mytag": "myvalue"
        }
      },
      "status": {
        "code": 0,
        "info": "string",
        "reason": "string",
        "status": "SUCCESS"
      },
      "strData": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seldonMessages|[[SeldonMessage](#schemaseldonmessage)]|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "info": "string",
  "reason": "string",
  "status": "SUCCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|info|string|false|none|none|
|reason|string|false|none|none|
|status|[StatusStatusFlag](#schemastatusstatusflag)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|SUCCESS|
|status|FAILURE|

<h2 id="tocS_StatusStatusFlag">StatusStatusFlag</h2>
<!-- backwards compatibility -->
<a id="schemastatusstatusflag"></a>
<a id="schema_StatusStatusFlag"></a>
<a id="tocSstatusstatusflag"></a>
<a id="tocsstatusstatusflag"></a>

```json
"SUCCESS"
```

<h2 id="tocS_Tensor">Tensor</h2>
<!-- backwards compatibility -->
<a id="schematensor"></a>
<a id="schema_Tensor"></a>
<a id="tocStensor"></a>
<a id="tocstensor"></a>

```json
{
  "shape": [
    0
  ],
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shape|[integer(int32)]|false|none|none|
|values|[number(double)]|false|none|none|

<h2 id="tocS_TensorShapeProtoDim">TensorShapeProtoDim</h2>
<!-- backwards compatibility -->
<a id="schematensorshapeprotodim"></a>
<a id="schema_TensorShapeProtoDim"></a>
<a id="tocStensorshapeprotodim"></a>
<a id="tocstensorshapeprotodim"></a>

```json
{
  "name": "string",
  "size": "string"
}
```

One dimension of the tensor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional name of the tensor dimension.|
|size|string(int64)|false|none|Size of the tensor in that dimension.<br>This value must be >= -1, but values of -1 are reserved for "unknown"<br>shapes (values of -1 mean "unknown" dimension).  Certain wrappers<br>that work with TensorShapeProto may fail at runtime when deserializing<br>a TensorShapeProto containing a dim value of -1.|

<h2 id="tocS_TensorflowDataType">TensorflowDataType</h2>
<!-- backwards compatibility -->
<a id="schematensorflowdatatype"></a>
<a id="schema_TensorflowDataType"></a>
<a id="tocStensorflowdatatype"></a>
<a id="tocstensorflowdatatype"></a>

```json
"DT_INVALID"
```

- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
has not been set.
 - DT_FLOAT: Data types that all computation devices are expected to be
capable to support.
 - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
should have a corresponding value below (verified by types_test).

<h2 id="tocS_TensorflowResourceHandleProto">TensorflowResourceHandleProto</h2>
<!-- backwards compatibility -->
<a id="schematensorflowresourcehandleproto"></a>
<a id="schema_TensorflowResourceHandleProto"></a>
<a id="tocStensorflowresourcehandleproto"></a>
<a id="tocstensorflowresourcehandleproto"></a>

```json
{
  "container": "string",
  "device": "string",
  "hash_code": "string",
  "maybe_type_name": "string",
  "name": "string"
}
```

Protocol buffer representing a handle to a tensorflow resource. Handles are
not valid across executions, but can be serialized back and forth from within
a single run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|string|false|none|Container in which this resource is placed.|
|device|string|false|none|Unique name for the device containing the resource.|
|hash_code|string(uint64)|false|none|Hash code for the type of the resource. Is only valid in the same device<br>and in the same execution.|
|maybe_type_name|string|false|none|For debug-only, the name of the type pointed to by this handle, if<br>available.|
|name|string|false|none|Unique name of this resource.|

<h2 id="tocS_TensorflowTensorProto">TensorflowTensorProto</h2>
<!-- backwards compatibility -->
<a id="schematensorflowtensorproto"></a>
<a id="schema_TensorflowTensorProto"></a>
<a id="tocStensorflowtensorproto"></a>
<a id="tocstensorflowtensorproto"></a>

```json
{
  "bool_val": [
    true
  ],
  "dcomplex_val": [
    0
  ],
  "double_val": [
    0
  ],
  "dtype": "DT_INVALID",
  "float_val": [
    0
  ],
  "half_val": [
    0
  ],
  "int64_val": [
    "string"
  ],
  "int_val": [
    0
  ],
  "resource_handle_val": [
    {
      "container": "string",
      "device": "string",
      "hash_code": "string",
      "maybe_type_name": "string",
      "name": "string"
    }
  ],
  "scomplex_val": [
    0
  ],
  "string_val": [
    "string"
  ],
  "tensor_content": "string",
  "tensor_shape": {
    "dim": [
      {
        "name": "string",
        "size": "string"
      }
    ],
    "unknown_rank": true
  },
  "uint32_val": [
    0
  ],
  "uint64_val": [
    "string"
  ],
  "variant_val": [
    {
      "metadata": "string",
      "tensors": [
        {}
      ],
      "type_name": "string"
    }
  ],
  "version_number": 0
}
```

Protocol buffer representing a tensor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bool_val|[boolean(boolean)]|false|none|none|
|dcomplex_val|[number(double)]|false|none|DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real<br>and imaginary parts of i-th double precision complex.|
|double_val|[number(double)]|false|none|DT_DOUBLE.|
|dtype|[TensorflowDataType](#schematensorflowdatatype)|false|none|- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field<br>has not been set.<br> - DT_FLOAT: Data types that all computation devices are expected to be<br>capable to support.<br> - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above<br>should have a corresponding value below (verified by types_test).|
|float_val|[number(float)]|false|none|DT_FLOAT.|
|half_val|[integer(int32)]|false|none|DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll<br>have some pointless zero padding for each value here.|
|int64_val|[string(int64)]|false|none|none|
|int_val|[integer(int32)]|false|none|DT_INT32, DT_INT16, DT_INT8, DT_UINT8.|
|resource_handle_val|[[TensorflowResourceHandleProto](#schematensorflowresourcehandleproto)]|false|none|none|
|scomplex_val|[number(float)]|false|none|DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real<br>and imaginary parts of i-th single precision complex.|
|string_val|[string(byte)]|false|none|none|
|tensor_content|string(byte)|false|none|Serialized raw tensor content from either Tensor::AsProtoTensorContent or<br>memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation<br>can be used for all tensor types. The purpose of this representation is to<br>reduce serialization overhead during RPC call by avoiding serialization of<br>many repeated small items.|
|tensor_shape|[TensorflowTensorShapeProto](#schematensorflowtensorshapeproto)|false|none|Shape of the tensor.  TODO(touts): sort out the 0-rank issues.|
|uint32_val|[integer(int64)]|false|none|none|
|uint64_val|[string(uint64)]|false|none|none|
|variant_val|[[TensorflowVariantTensorDataProto](#schematensorflowvarianttensordataproto)]|false|none|none|
|version_number|integer(int32)|false|none|Version number.<br><br>In version 0, if the "repeated xxx" representations contain only one<br>element, that element is repeated to fill the shape.  This makes it easy<br>to represent a constant Tensor with a single value.|

#### Enumerated Values

|Property|Value|
|---|---|
|dtype|DT_INVALID|
|dtype|DT_FLOAT|
|dtype|DT_DOUBLE|
|dtype|DT_INT32|
|dtype|DT_UINT8|
|dtype|DT_INT16|
|dtype|DT_INT8|
|dtype|DT_STRING|
|dtype|DT_COMPLEX64|
|dtype|DT_INT64|
|dtype|DT_BOOL|
|dtype|DT_QINT8|
|dtype|DT_QUINT8|
|dtype|DT_QINT32|
|dtype|DT_BFLOAT16|
|dtype|DT_QINT16|
|dtype|DT_QUINT16|
|dtype|DT_UINT16|
|dtype|DT_COMPLEX128|
|dtype|DT_HALF|
|dtype|DT_RESOURCE|
|dtype|DT_VARIANT|
|dtype|DT_UINT32|
|dtype|DT_UINT64|
|dtype|DT_FLOAT_REF|
|dtype|DT_DOUBLE_REF|
|dtype|DT_INT32_REF|
|dtype|DT_UINT8_REF|
|dtype|DT_INT16_REF|
|dtype|DT_INT8_REF|
|dtype|DT_STRING_REF|
|dtype|DT_COMPLEX64_REF|
|dtype|DT_INT64_REF|
|dtype|DT_BOOL_REF|
|dtype|DT_QINT8_REF|
|dtype|DT_QUINT8_REF|
|dtype|DT_QINT32_REF|
|dtype|DT_BFLOAT16_REF|
|dtype|DT_QINT16_REF|
|dtype|DT_QUINT16_REF|
|dtype|DT_UINT16_REF|
|dtype|DT_COMPLEX128_REF|
|dtype|DT_HALF_REF|
|dtype|DT_RESOURCE_REF|
|dtype|DT_VARIANT_REF|
|dtype|DT_UINT32_REF|
|dtype|DT_UINT64_REF|

<h2 id="tocS_TensorflowTensorShapeProto">TensorflowTensorShapeProto</h2>
<!-- backwards compatibility -->
<a id="schematensorflowtensorshapeproto"></a>
<a id="schema_TensorflowTensorShapeProto"></a>
<a id="tocStensorflowtensorshapeproto"></a>
<a id="tocstensorflowtensorshapeproto"></a>

```json
{
  "dim": [
    {
      "name": "string",
      "size": "string"
    }
  ],
  "unknown_rank": true
}
```

Dimensions of a tensor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dim|[[TensorShapeProtoDim](#schematensorshapeprotodim)]|false|none|Dimensions of the tensor, such as {"input", 30}, {"output", 40}<br>for a 30 x 40 2D tensor.  If an entry has size -1, this<br>corresponds to a dimension of unknown size. The names are<br>optional.<br><br>The order of entries in "dim" matters: It indicates the layout of the<br>values in the tensor in-memory representation.<br><br>The first entry in "dim" is the outermost dimension used to layout the<br>values, the last entry is the innermost dimension.  This matches the<br>in-memory layout of RowMajor Eigen tensors.<br><br>If "dim.size()" > 0, "unknown_rank" must be false.|
|unknown_rank|boolean(boolean)|false|none|If true, the number of dimensions in the shape is unknown.<br><br>If true, "dim.size()" must be 0.|

<h2 id="tocS_TensorflowVariantTensorDataProto">TensorflowVariantTensorDataProto</h2>
<!-- backwards compatibility -->
<a id="schematensorflowvarianttensordataproto"></a>
<a id="schema_TensorflowVariantTensorDataProto"></a>
<a id="tocStensorflowvarianttensordataproto"></a>
<a id="tocstensorflowvarianttensordataproto"></a>

```json
{
  "metadata": "string",
  "tensors": [
    {
      "bool_val": [
        true
      ],
      "dcomplex_val": [
        0
      ],
      "double_val": [
        0
      ],
      "dtype": "DT_INVALID",
      "float_val": [
        0
      ],
      "half_val": [
        0
      ],
      "int64_val": [
        "string"
      ],
      "int_val": [
        0
      ],
      "resource_handle_val": [
        {
          "container": "string",
          "device": "string",
          "hash_code": "string",
          "maybe_type_name": "string",
          "name": "string"
        }
      ],
      "scomplex_val": [
        0
      ],
      "string_val": [
        "string"
      ],
      "tensor_content": "string",
      "tensor_shape": {
        "dim": [
          {
            "name": "string",
            "size": "string"
          }
        ],
        "unknown_rank": true
      },
      "uint32_val": [
        0
      ],
      "uint64_val": [
        "string"
      ],
      "variant_val": [
        {}
      ],
      "version_number": 0
    }
  ],
  "type_name": "string"
}
```

Protocol buffer representing the serialization format of DT_VARIANT tensors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|string(byte)|false|none|Portions of the object that are not Tensors.|
|tensors|[[TensorflowTensorProto](#schematensorflowtensorproto)]|false|none|Tensors contained within objects being serialized.|
|type_name|string|false|none|Name of the type of objects being serialized.|
