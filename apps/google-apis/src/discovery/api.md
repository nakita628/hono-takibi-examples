<h1 id="api-discovery-service">API Discovery Service v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.

Base URLs:

* <a href="https://www.googleapis.com/discovery/v1">https://www.googleapis.com/discovery/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/discovery/">External documentation</a>

<h1 id="api-discovery-service-apis">apis</h1>

## discovery.apis.list

<a id="opIddiscovery.apis.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/apis \
  -H 'Accept: application/json'
```

`GET /apis`

Retrieve the list of APIs supported at this endpoint.

<h3 id="discoveryapislist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Only include APIs with the given name.|
|preferred|query|boolean|false|Return only the preferred version of an API.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "discoveryVersion": "v1",
  "items": [
    {
      "description": "string",
      "discoveryLink": "string",
      "discoveryRestUrl": "string",
      "documentationLink": "string",
      "icons": {
        "x16": "string",
        "x32": "string"
      },
      "id": "string",
      "kind": "discovery#directoryItem",
      "labels": [
        "string"
      ],
      "name": "string",
      "preferred": true,
      "title": "string",
      "version": "string"
    }
  ],
  "kind": "discovery#directoryList"
}
```

<h3 id="discoveryapislist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DirectoryList](#schemadirectorylist)|

<aside class="success">
This operation does not require authentication
</aside>

## discovery.apis.getRest

<a id="opIddiscovery.apis.getRest"></a>

> Code samples

```bash
curl https://www.googleapis.com/apis/string/string/rest \
  -H 'Accept: application/json'
```

`GET /apis/{api}/{version}/rest`

Retrieve the description of a particular version of an api.

<h3 id="discoveryapisgetrest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api|path|string|true|The name of the API.|
|version|path|string|true|The version of the API.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "auth": {
    "oauth2": {
      "scopes": {
        "property1": {
          "description": "string"
        },
        "property2": {
          "description": "string"
        }
      }
    }
  },
  "basePath": "string",
  "baseUrl": "string",
  "batchPath": "string",
  "canonicalName": "string",
  "description": "string",
  "discoveryVersion": "v1",
  "documentationLink": "string",
  "etag": "string",
  "exponentialBackoffDefault": true,
  "features": [
    "string"
  ],
  "icons": {
    "x16": "string",
    "x32": "string"
  },
  "id": "string",
  "kind": "discovery#restDescription",
  "labels": [
    "string"
  ],
  "methods": {
    "property1": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    },
    "property2": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    }
  },
  "name": "string",
  "ownerDomain": "string",
  "ownerName": "string",
  "packagePath": "string",
  "parameters": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "protocol": "rest",
  "resources": {
    "property1": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    },
    "property2": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    }
  },
  "revision": "string",
  "rootUrl": "string",
  "schemas": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "servicePath": "string",
  "title": "string",
  "version": "string",
  "version_module": true
}
```

<h3 id="discoveryapisgetrest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RestDescription](#schemarestdescription)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DirectoryList">DirectoryList</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylist"></a>
<a id="schema_DirectoryList"></a>
<a id="tocSdirectorylist"></a>
<a id="tocsdirectorylist"></a>

```json
{
  "discoveryVersion": "v1",
  "items": [
    {
      "description": "string",
      "discoveryLink": "string",
      "discoveryRestUrl": "string",
      "documentationLink": "string",
      "icons": {
        "x16": "string",
        "x32": "string"
      },
      "id": "string",
      "kind": "discovery#directoryItem",
      "labels": [
        "string"
      ],
      "name": "string",
      "preferred": true,
      "title": "string",
      "version": "string"
    }
  ],
  "kind": "discovery#directoryList"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discoveryVersion|string|false|none|Indicate the version of the Discovery API used to generate this doc.|
|items|[object]|false|none|The individual directory entries. One entry per api/version pair.|
|kind|string|false|none|The kind for this response.|

<h2 id="tocS_JsonSchema">JsonSchema</h2>
<!-- backwards compatibility -->
<a id="schemajsonschema"></a>
<a id="schema_JsonSchema"></a>
<a id="tocSjsonschema"></a>
<a id="tocsjsonschema"></a>

```json
{
  "$ref": "string",
  "additionalProperties": {
    "$ref": "string",
    "additionalProperties": {},
    "annotations": {
      "required": [
        "string"
      ]
    },
    "description": "string",
    "enum": [
      "string"
    ],
    "enumDescriptions": [
      "string"
    ],
    "format": "string",
    "id": "string",
    "items": {},
    "location": "string",
    "maximum": "string",
    "minimum": "string",
    "pattern": "string",
    "properties": {
      "property1": {},
      "property2": {}
    },
    "readOnly": true,
    "repeated": true,
    "required": true,
    "type": "string",
    "variant": {
      "discriminant": "string",
      "map": [
        {
          "$ref": "string",
          "type_value": "string"
        }
      ]
    }
  },
  "annotations": {
    "required": [
      "string"
    ]
  },
  "description": "string",
  "enum": [
    "string"
  ],
  "enumDescriptions": [
    "string"
  ],
  "format": "string",
  "id": "string",
  "items": {
    "$ref": "string",
    "additionalProperties": {},
    "annotations": {
      "required": [
        "string"
      ]
    },
    "description": "string",
    "enum": [
      "string"
    ],
    "enumDescriptions": [
      "string"
    ],
    "format": "string",
    "id": "string",
    "items": {},
    "location": "string",
    "maximum": "string",
    "minimum": "string",
    "pattern": "string",
    "properties": {
      "property1": {},
      "property2": {}
    },
    "readOnly": true,
    "repeated": true,
    "required": true,
    "type": "string",
    "variant": {
      "discriminant": "string",
      "map": [
        {
          "$ref": "string",
          "type_value": "string"
        }
      ]
    }
  },
  "location": "string",
  "maximum": "string",
  "minimum": "string",
  "pattern": "string",
  "properties": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "readOnly": true,
  "repeated": true,
  "required": true,
  "type": "string",
  "variant": {
    "discriminant": "string",
    "map": [
      {
        "$ref": "string",
        "type_value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$ref|string|false|none|A reference to another schema. The value of this property is the "id" of another schema.|
|additionalProperties|[JsonSchema](#schemajsonschema)|false|none|If this is a schema for an object, this property is the schema for any additional properties with dynamic keys on this object.|
|annotations|object|false|none|Additional information about this property.|
|description|string|false|none|A description of this object.|
|enum|[string]|false|none|Values this parameter may take (if it is an enum).|
|enumDescriptions|[string]|false|none|The descriptions for the enums. Each position maps to the corresponding value in the "enum" array.|
|format|string|false|none|An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23|
|id|string|false|none|Unique identifier for this schema.|
|items|[JsonSchema](#schemajsonschema)|false|none|If this is a schema for an array, this property is the schema for each element in the array.|
|location|string|false|none|Whether this parameter goes in the query or the path for REST requests.|
|maximum|string|false|none|The maximum value of this parameter.|
|minimum|string|false|none|The minimum value of this parameter.|
|pattern|string|false|none|The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html|
|properties|object|false|none|If this is a schema for an object, list the schema for each property of this object.|
|readOnly|boolean|false|none|The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service.|
|repeated|boolean|false|none|Whether this parameter may appear multiple times.|
|required|boolean|false|none|Whether the parameter is required.|
|type|string|false|none|The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1|
|variant|object|false|none|In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.|

<h2 id="tocS_RestDescription">RestDescription</h2>
<!-- backwards compatibility -->
<a id="schemarestdescription"></a>
<a id="schema_RestDescription"></a>
<a id="tocSrestdescription"></a>
<a id="tocsrestdescription"></a>

```json
{
  "auth": {
    "oauth2": {
      "scopes": {
        "property1": {
          "description": "string"
        },
        "property2": {
          "description": "string"
        }
      }
    }
  },
  "basePath": "string",
  "baseUrl": "string",
  "batchPath": "string",
  "canonicalName": "string",
  "description": "string",
  "discoveryVersion": "v1",
  "documentationLink": "string",
  "etag": "string",
  "exponentialBackoffDefault": true,
  "features": [
    "string"
  ],
  "icons": {
    "x16": "string",
    "x32": "string"
  },
  "id": "string",
  "kind": "discovery#restDescription",
  "labels": [
    "string"
  ],
  "methods": {
    "property1": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    },
    "property2": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    }
  },
  "name": "string",
  "ownerDomain": "string",
  "ownerName": "string",
  "packagePath": "string",
  "parameters": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "protocol": "rest",
  "resources": {
    "property1": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    },
    "property2": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    }
  },
  "revision": "string",
  "rootUrl": "string",
  "schemas": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "servicePath": "string",
  "title": "string",
  "version": "string",
  "version_module": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|object|false|none|Authentication information.|
|basePath|string|false|none|[DEPRECATED] The base path for REST requests.|
|baseUrl|string|false|none|[DEPRECATED] The base URL for REST requests.|
|batchPath|string|false|none|The path for REST batch requests.|
|canonicalName|string|false|none|Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names.|
|description|string|false|none|The description of this API.|
|discoveryVersion|string|false|none|Indicate the version of the Discovery API used to generate this doc.|
|documentationLink|string|false|none|A link to human readable documentation for the API.|
|etag|string|false|read-only|The ETag for this response.|
|exponentialBackoffDefault|boolean|false|none|Enable exponential backoff for suitable methods in the generated clients.|
|features|[string]|false|none|A list of supported features for this API.|
|icons|object|false|none|Links to 16x16 and 32x32 icons representing the API.|
|id|string|false|none|The ID of this API.|
|kind|string|false|none|The kind for this response.|
|labels|[string]|false|none|Labels for the status of this API, such as labs or deprecated.|
|methods|object|false|none|API-level methods for this API.|
|name|string|false|none|The name of this API.|
|ownerDomain|string|false|none|The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name.|
|ownerName|string|false|none|The name of the owner of this API. See ownerDomain.|
|packagePath|string|false|none|The package of the owner of this API. See ownerDomain.|
|parameters|object|false|none|Common parameters that apply across all apis.|
|protocol|string|false|none|The protocol described by this document.|
|resources|object|false|none|The resources in this API.|
|revision|string|false|none|The version of this API.|
|rootUrl|string|false|none|The root URL under which all API services live.|
|schemas|object|false|none|The schemas for this API.|
|servicePath|string|false|none|The base path for all REST requests.|
|title|string|false|none|The title of this API.|
|version|string|false|none|The version of this API.|
|version_module|boolean|false|none|none|

<h2 id="tocS_RestMethod">RestMethod</h2>
<!-- backwards compatibility -->
<a id="schemarestmethod"></a>
<a id="schema_RestMethod"></a>
<a id="tocSrestmethod"></a>
<a id="tocsrestmethod"></a>

```json
{
  "description": "string",
  "etagRequired": true,
  "flatPath": "string",
  "httpMethod": "string",
  "id": "string",
  "mediaUpload": {
    "accept": [
      "string"
    ],
    "maxSize": "string",
    "protocols": {
      "resumable": {
        "multipart": true,
        "path": "string"
      },
      "simple": {
        "multipart": true,
        "path": "string"
      }
    }
  },
  "parameterOrder": [
    "string"
  ],
  "parameters": {
    "property1": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    },
    "property2": {
      "$ref": "string",
      "additionalProperties": {},
      "annotations": {
        "required": [
          "string"
        ]
      },
      "description": "string",
      "enum": [
        "string"
      ],
      "enumDescriptions": [
        "string"
      ],
      "format": "string",
      "id": "string",
      "items": {},
      "location": "string",
      "maximum": "string",
      "minimum": "string",
      "pattern": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "readOnly": true,
      "repeated": true,
      "required": true,
      "type": "string",
      "variant": {
        "discriminant": "string",
        "map": [
          {
            "$ref": "string",
            "type_value": "string"
          }
        ]
      }
    }
  },
  "path": "string",
  "request": {
    "$ref": "string",
    "parameterName": "string"
  },
  "response": {
    "$ref": "string"
  },
  "scopes": [
    "string"
  ],
  "supportsMediaDownload": true,
  "supportsMediaUpload": true,
  "supportsSubscription": true,
  "useMediaDownloadService": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of this method.|
|etagRequired|boolean|false|none|Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header.|
|flatPath|string|false|none|The URI path of this REST method in (RFC 6570) format without level 2 features ({+var}). Supplementary to the path property.|
|httpMethod|string|false|none|HTTP method used by this method.|
|id|string|false|none|A unique ID for this method. This property can be used to match methods between different versions of Discovery.|
|mediaUpload|object|false|none|Media upload parameters.|
|parameterOrder|[string]|false|none|Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first.|
|parameters|object|false|none|Details for all parameters in this method.|
|path|string|false|none|The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level.|
|request|object|false|none|The schema for the request.|
|response|object|false|none|The schema for the response.|
|scopes|[string]|false|none|OAuth 2.0 scopes applicable to this method.|
|supportsMediaDownload|boolean|false|none|Whether this method supports media downloads.|
|supportsMediaUpload|boolean|false|none|Whether this method supports media uploads.|
|supportsSubscription|boolean|false|none|Whether this method supports subscriptions.|
|useMediaDownloadService|boolean|false|none|Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download.|

<h2 id="tocS_RestResource">RestResource</h2>
<!-- backwards compatibility -->
<a id="schemarestresource"></a>
<a id="schema_RestResource"></a>
<a id="tocSrestresource"></a>
<a id="tocsrestresource"></a>

```json
{
  "methods": {
    "property1": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    },
    "property2": {
      "description": "string",
      "etagRequired": true,
      "flatPath": "string",
      "httpMethod": "string",
      "id": "string",
      "mediaUpload": {
        "accept": [
          "string"
        ],
        "maxSize": "string",
        "protocols": {
          "resumable": {
            "multipart": true,
            "path": "string"
          },
          "simple": {
            "multipart": true,
            "path": "string"
          }
        }
      },
      "parameterOrder": [
        "string"
      ],
      "parameters": {
        "property1": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        },
        "property2": {
          "$ref": "string",
          "additionalProperties": {},
          "annotations": {
            "required": [
              "string"
            ]
          },
          "description": "string",
          "enum": [
            "string"
          ],
          "enumDescriptions": [
            "string"
          ],
          "format": "string",
          "id": "string",
          "items": {},
          "location": "string",
          "maximum": "string",
          "minimum": "string",
          "pattern": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "readOnly": true,
          "repeated": true,
          "required": true,
          "type": "string",
          "variant": {
            "discriminant": "string",
            "map": [
              {
                "$ref": "string",
                "type_value": "string"
              }
            ]
          }
        }
      },
      "path": "string",
      "request": {
        "$ref": "string",
        "parameterName": "string"
      },
      "response": {
        "$ref": "string"
      },
      "scopes": [
        "string"
      ],
      "supportsMediaDownload": true,
      "supportsMediaUpload": true,
      "supportsSubscription": true,
      "useMediaDownloadService": true
    }
  },
  "resources": {
    "property1": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    },
    "property2": {
      "methods": {
        "property1": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        },
        "property2": {
          "description": "string",
          "etagRequired": true,
          "flatPath": "string",
          "httpMethod": "string",
          "id": "string",
          "mediaUpload": {
            "accept": [
              "string"
            ],
            "maxSize": "string",
            "protocols": {
              "resumable": {
                "multipart": true,
                "path": "string"
              },
              "simple": {
                "multipart": true,
                "path": "string"
              }
            }
          },
          "parameterOrder": [
            "string"
          ],
          "parameters": {
            "property1": {},
            "property2": {}
          },
          "path": "string",
          "request": {
            "$ref": "string",
            "parameterName": "string"
          },
          "response": {
            "$ref": "string"
          },
          "scopes": [
            "string"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "supportsSubscription": true,
          "useMediaDownloadService": true
        }
      },
      "resources": {
        "property1": {},
        "property2": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|object|false|none|Methods on this resource.|
|resources|object|false|none|Sub-resources on this resource.|
