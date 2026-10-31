<h1 id="circular-reference-examples">Circular reference examples v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://httpbin.org/">https://httpbin.org/</a>

<h1 id="circular-reference-examples-default">Default</h1>

## put/nestedTest

> Code samples

```bash
curl https://example.com/nestedTest \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "foo": "string",
    "arr": [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      "string"
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ],
    "obj": {
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff": {
        "fooa": {
          "foob:": {
            "fooc": "string"
          }
        }
      }
    }
  }'
```

`PUT /nestedTest`

> Body parameter

```json
{
  "foo": "string",
  "arr": [
    [
      [
        [
          [
            [
              [
                [
                  [
                    "string"
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ],
  "obj": {
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff": {
      "fooa": {
        "foob:": {
          "fooc": "string"
        }
      }
    }
  }
}
```

<h3 id="putnestedtest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» foo|body|string|false|none|
|» arr|body|[[[[[[[[[string]]]]]]]]]|false|none|
|» obj|body|object|false|none|
|» » ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff|body|object|false|none|
|» » » fooa|body|object|false|none|
|» » » » foob:|body|object|false|none|
|» » » » » fooc|body|string|false|none|

<h3 id="putnestedtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/circular

> Code samples

```bash
curl https://example.com/circular \
  -X PUT \
  -F 'file=file=@2018-report.pdf' \
  -F 'typename=string'
```

`PUT /circular`

> Body parameter

```yaml
file: "file=@2018-report.pdf"
typename: string
```

<h3 id="putcircular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|API key.|
|body|body|object|false|none|
|» file|body|[FormDataBodyPart](#schemaformdatabodypart)|false|A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do.|
|» typename|body|string|false|none|

<h3 id="putcircular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully processed.|None|
|400|Bad Request|Invalid payload. This can be due to invalid headers or form-data params.|None|
|401|Unauthorized|Permissions error. The Authorization header may be missing, the value may be invalid or the associated organization/user does not have permission to modify the specified typename.|None|
|500|Internal Server Error|Server error. Something unexpected happened while processing the request. Try again later.|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/not-quite-circular

> Code samples

```bash
curl https://example.com/not-quite-circular \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rules": {
      "transitions": [
        {}
      ]
    }
  }'
```

`POST /not-quite-circular`

This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

> Body parameter

```json
{
  "rules": {
    "transitions": [
      {}
    ]
  }
}
```

<h3 id="postnot-quite-circular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» rules|body|[ZoneRules](#schemazonerules)|false|none|

<h3 id="postnot-quite-circular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BodyPart">BodyPart</h2>
<!-- backwards compatibility -->
<a id="schemabodypart"></a>
<a id="schema_BodyPart"></a>
<a id="tocSbodypart"></a>
<a id="tocsbodypart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "modificationDate": "1970-01-01T00:00:00Z",
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "modificationDate": "1970-01-01T00:00:00Z",
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {}
    ],
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|parameterizedHeaders|object|false|none|none|

<h2 id="tocS_ContentDisposition">ContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemacontentdisposition"></a>
<a id="schema_ContentDisposition"></a>
<a id="tocScontentdisposition"></a>
<a id="tocscontentdisposition"></a>

```json
{
  "type": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "fileName": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "modificationDate": "1970-01-01T00:00:00Z",
  "readDate": "1970-01-01T00:00:00Z",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|parameters|object|false|none|none|
|fileName|string|false|none|none|
|creationDate|string(date-time)|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_FormDataBodyPart">FormDataBodyPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatabodypart"></a>
<a id="schema_FormDataBodyPart"></a>
<a id="tocSformdatabodypart"></a>
<a id="tocsformdatabodypart"></a>

```json
"file=@2018-report.pdf"
```

A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|name|string|false|none|none|
|value|string|false|none|none|
|formDataContentDisposition|[FormDataContentDisposition](#schemaformdatacontentdisposition)|false|none|none|
|simple|boolean|false|none|none|
|parameterizedHeaders|object|false|none|none|

<h2 id="tocS_FormDataContentDisposition">FormDataContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemaformdatacontentdisposition"></a>
<a id="schema_FormDataContentDisposition"></a>
<a id="tocSformdatacontentdisposition"></a>
<a id="tocsformdatacontentdisposition"></a>

```json
{
  "type": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "fileName": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "modificationDate": "1970-01-01T00:00:00Z",
  "readDate": "1970-01-01T00:00:00Z",
  "size": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|parameters|object|false|none|none|
|fileName|string|false|none|none|
|creationDate|string(date-time)|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_MessageBodyWorkers">MessageBodyWorkers</h2>
<!-- backwards compatibility -->
<a id="schemamessagebodyworkers"></a>
<a id="schema_MessageBodyWorkers"></a>
<a id="tocSmessagebodyworkers"></a>
<a id="tocsmessagebodyworkers"></a>

```json
{}
```

<h2 id="tocS_MultiPart">MultiPart</h2>
<!-- backwards compatibility -->
<a id="schemamultipart"></a>
<a id="schema_MultiPart"></a>
<a id="tocSmultipart"></a>
<a id="tocsmultipart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "modificationDate": "1970-01-01T00:00:00Z",
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "modificationDate": "1970-01-01T00:00:00Z",
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {}
    ],
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "bodyParts": [
    {
      "contentDisposition": {
        "type": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "fileName": "string",
        "creationDate": "1970-01-01T00:00:00Z",
        "modificationDate": "1970-01-01T00:00:00Z",
        "readDate": "1970-01-01T00:00:00Z",
        "size": 0
      },
      "entity": {},
      "headers": {
        "empty": true,
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "type": "string",
        "subtype": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "wildcardType": true,
        "wildcardSubtype": true
      },
      "messageBodyWorkers": {},
      "parent": {},
      "providers": {},
      "parameterizedHeaders": {
        "empty": true,
        "property1": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "property2": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ]
      }
    }
  ],
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|bodyParts|[[BodyPart](#schemabodypart)]|false|none|none|
|parameterizedHeaders|object|false|none|none|

<h2 id="tocS_ParameterizedHeader">ParameterizedHeader</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedheader"></a>
<a id="schema_ParameterizedHeader"></a>
<a id="tocSparameterizedheader"></a>
<a id="tocsparameterizedheader"></a>

```json
{
  "value": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_ZoneId">ZoneId</h2>
<!-- backwards compatibility -->
<a id="schemazoneid"></a>
<a id="schema_ZoneId"></a>
<a id="tocSzoneid"></a>
<a id="tocszoneid"></a>

```json
{
  "rules": {
    "transitions": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[ZoneRules](#schemazonerules)|false|none|none|

<h2 id="tocS_ZoneOffset">ZoneOffset</h2>
<!-- backwards compatibility -->
<a id="schemazoneoffset"></a>
<a id="schema_ZoneOffset"></a>
<a id="tocSzoneoffset"></a>
<a id="tocszoneoffset"></a>

```json
{
  "id": "string",
  "rules": {
    "transitions": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|rules|[ZoneRules](#schemazonerules)|false|none|none|

<h2 id="tocS_ZoneOffsetTransition">ZoneOffsetTransition</h2>
<!-- backwards compatibility -->
<a id="schemazoneoffsettransition"></a>
<a id="schema_ZoneOffsetTransition"></a>
<a id="tocSzoneoffsettransition"></a>
<a id="tocszoneoffsettransition"></a>

```json
{
  "offsetBefore": {
    "id": "string",
    "rules": {}
  },
  "offsetAfter": {
    "id": "string",
    "rules": {}
  },
  "dateTimeAfter": "1970-01-01T00:00:00Z",
  "dateTimeBefore": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offsetBefore|[ZoneOffset](#schemazoneoffset)|false|none|none|
|offsetAfter|[ZoneOffset](#schemazoneoffset)|false|none|none|
|dateTimeAfter|string(date-time)|false|none|none|
|dateTimeBefore|string(date-time)|false|none|none|

<h2 id="tocS_ZoneRules">ZoneRules</h2>
<!-- backwards compatibility -->
<a id="schemazonerules"></a>
<a id="schema_ZoneRules"></a>
<a id="tocSzonerules"></a>
<a id="tocszonerules"></a>

```json
{
  "transitions": [
    {
      "offsetBefore": {},
      "offsetAfter": {},
      "dateTimeAfter": "1970-01-01T00:00:00Z",
      "dateTimeBefore": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transitions|[[ZoneOffsetTransition](#schemazoneoffsettransition)]|false|none|none|
