<h1 id="seldon-external-api">Seldon External API v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://seldon.local">http://seldon.local</a>

* <a href="https://localhost:80">https://localhost:80</a>

* <a href="https://localhost:8002">https://localhost:8002</a> - fixed host as swagger UI has bug with variables for auth

Web: <a href="https://github.com/SeldonIO/seldon-core">Seldon Core</a> 

<a href="https://github.com/SeldonIO/seldon-core">Seldon Core Documentation</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="seldon-external-api-external-ambassador-api">External Ambassador API</h1>

## SendFeedback

<a id="opIdSendFeedback"></a>

> Code samples

```bash
curl https://example.com/seldon/string/string/api/v1.0/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request": {
      "binData": "string",
      "data": {
        "names": [
          "string"
        ],
        "ndarray": [
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
        "ndarray": [
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
        "ndarray": [
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
  }'
```

`POST /seldon/{namespace}/{deployment}/api/v1.0/feedback`

> Body parameter

```json
{
  "request": {
    "binData": "string",
    "data": {
      "names": [
        "string"
      ],
      "ndarray": [
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
      "ndarray": [
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
      "ndarray": [
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

<h3 id="sendfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|none|
|deployment|path|string|true|none|
|body|body|[Feedback](#schemafeedback)|true|none|
|» request|body|[SeldonMessage](#schemaseldonmessage)|false|none|
|» response|body|[SeldonMessage](#schemaseldonmessage)|false|none|
|» reward|body|number(float)|false|none|
|» truth|body|[SeldonMessage](#schemaseldonmessage)|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarray": [
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

## Predict

<a id="opIdPredict"></a>

> Code samples

```bash
curl https://example.com/seldon/string/string/api/v1.0/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "names": [
        "feature1"
      ],
      "tensor": {
        "shape": [
          1,
          1
        ],
        "values": [
          1
        ]
      }
    }
  }'
```

`POST /seldon/{namespace}/{deployment}/api/v1.0/predictions`

> Body parameter

```json
{
  "data": {
    "names": [
      "feature1"
    ],
    "tensor": {
      "shape": [
        1,
        1
      ],
      "values": [
        1
      ]
    }
  }
}
```

<h3 id="predict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|none|
|deployment|path|string|true|none|
|body|body|[SeldonMessage](#schemaseldonmessage)|true|none|
|» binData|body|string(byte)|false|none|
|» data|body|[DefaultData](#schemadefaultdata)|false|none|
|» meta|body|[Meta](#schemameta)|false|none|
|» status|body|[Status](#schemastatus)|false|none|
|» strData|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "binData": "string",
  "data": {
    "names": [
      "string"
    ],
    "ndarray": [
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

<h3 id="predict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[SeldonMessage](#schemaseldonmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
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
  "ndarray": [
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
|ndarray|[[AnyValue](#schemaanyvalue)]|false|none|none|
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
      "ndarray": [
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
      "ndarray": [
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
      "ndarray": [
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
    "ndarray": [
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
        "ndarray": [
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
|size|string(int64)|false|none|Size of the tensor in that dimension. This value must be >= -1, but values of -1 are reserved for "unknown" shapes (values of -1 mean "unknown" dimension).  Certain wrappers that work with TensorShapeProto may fail at runtime when deserializing a TensorShapeProto containing a dim value of -1.|

<h2 id="tocS_TensorflowDataType">TensorflowDataType</h2>
<!-- backwards compatibility -->
<a id="schematensorflowdatatype"></a>
<a id="schema_TensorflowDataType"></a>
<a id="tocStensorflowdatatype"></a>
<a id="tocstensorflowdatatype"></a>

```json
"DT_INVALID"
```

- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).

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

Protocol buffer representing a handle to a tensorflow resource. Handles are not valid across executions, but can be serialized back and forth from within a single run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|string|false|none|Container in which this resource is placed.|
|device|string|false|none|Unique name for the device containing the resource.|
|hash_code|string(uint64)|false|none|Hash code for the type of the resource. Is only valid in the same device and in the same execution.|
|maybe_type_name|string|false|none|For debug-only, the name of the type pointed to by this handle, if available.|
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
|dcomplex_val|[number(double)]|false|none|DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real and imaginary parts of i-th double precision complex.|
|double_val|[number(double)]|false|none|DT_DOUBLE.|
|dtype|[TensorflowDataType](#schematensorflowdatatype)|false|none|- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).|
|float_val|[number(float)]|false|none|DT_FLOAT.|
|half_val|[integer(int32)]|false|none|DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll have some pointless zero padding for each value here.|
|int64_val|[string(int64)]|false|none|none|
|int_val|[integer(int32)]|false|none|DT_INT32, DT_INT16, DT_INT8, DT_UINT8.|
|resource_handle_val|[[TensorflowResourceHandleProto](#schematensorflowresourcehandleproto)]|false|none|none|
|scomplex_val|[number(float)]|false|none|DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real and imaginary parts of i-th single precision complex.|
|string_val|[string(byte)]|false|none|none|
|tensor_content|string(byte)|false|none|Serialized raw tensor content from either Tensor::AsProtoTensorContent or memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation can be used for all tensor types. The purpose of this representation is to reduce serialization overhead during RPC call by avoiding serialization of many repeated small items.|
|tensor_shape|[TensorflowTensorShapeProto](#schematensorflowtensorshapeproto)|false|none|Shape of the tensor.  TODO(touts): sort out the 0-rank issues.|
|uint32_val|[integer(int64)]|false|none|none|
|uint64_val|[string(uint64)]|false|none|none|
|variant_val|[[TensorflowVariantTensorDataProto](#schematensorflowvarianttensordataproto)]|false|none|none|
|version_number|integer(int32)|false|none|Version number.<br>In version 0, if the "repeated xxx" representations contain only one element, that element is repeated to fill the shape.  This makes it easy to represent a constant Tensor with a single value.|

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
|dim|[[TensorShapeProtoDim](#schematensorshapeprotodim)]|false|none|Dimensions of the tensor, such as {"input", 30}, {"output", 40} for a 30 x 40 2D tensor.  If an entry has size -1, this corresponds to a dimension of unknown size. The names are optional.<br>The order of entries in "dim" matters: It indicates the layout of the values in the tensor in-memory representation.<br>The first entry in "dim" is the outermost dimension used to layout the values, the last entry is the innermost dimension.  This matches the in-memory layout of RowMajor Eigen tensors.<br>If "dim.size()" > 0, "unknown_rank" must be false.|
|unknown_rank|boolean(boolean)|false|none|If true, the number of dimensions in the shape is unknown.<br>If true, "dim.size()" must be 0.|

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
