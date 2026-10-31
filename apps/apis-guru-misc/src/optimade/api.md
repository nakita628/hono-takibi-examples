<h1 id="optimade-api">OPTIMADE API v1.1.0~develop</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The [Open Databases Integration for Materials Design (OPTIMADE) consortium](https://www.optimade.org/) aims to make materials databases interoperational by developing a common REST API.

This specification is generated using [`optimade-python-tools`](https://github.com/Materials-Consortia/optimade-python-tools/tree/v0.16.0) v0.16.0.

Base URLs:

* <a href="http://optimade.local">http://optimade.local</a>

<h1 id="optimade-api-info">Info</h1>

## Get Info

<a id="opIdget_info_info_get"></a>

> Code samples

```bash
curl https://example.com/info \
  -H 'Accept: application/json'
```

`GET /info`

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "api_version": "string",
      "available_api_versions": [
        {
          "url": "http://example.com",
          "version": "string"
        }
      ],
      "available_endpoints": [
        "string"
      ],
      "entry_types_by_format": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "formats": [
        "json"
      ],
      "is_index": false
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[InfoResponse](#schemainforesponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Entry Info

<a id="opIdget_entry_info_info__entry__get"></a>

> Code samples

```bash
curl https://example.com/info/string \
  -H 'Accept: application/json'
```

`GET /info/{entry}`

<h3 id="get-entry-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entry|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "string",
    "formats": [
      "string"
    ],
    "output_fields_by_format": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "properties": {
      "property1": {
        "description": "string",
        "sortable": true,
        "type": {},
        "unit": "string"
      },
      "property2": {
        "description": "string",
        "sortable": true,
        "type": {},
        "unit": "string"
      }
    }
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-entry-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EntryInfoResponse](#schemaentryinforesponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="optimade-api-links">Links</h1>

## Get Links

<a id="opIdget_links_links_get"></a>

> Code samples

```bash
curl https://example.com/links \
  -H 'Accept: application/json'
```

`GET /links`

<h3 id="get-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A filter string, in the format described in section API Filtering Format Specification of the specification.|
|response_format|query|string|false|The output format requested (see section Response Format).<br>Defaults to the format string 'json', which specifies the standard output format described in this specification.<br>Example: `http://example.com/v1/structures?response_format=xml`|
|email_address|query|string(email)|false|An email address of the user making the request.<br>The email SHOULD be that of a person and not an automatic system.<br>Example: `http://example.com/v1/structures?email_address=user@example.com`|
|response_fields|query|string|false|A comma-delimited set of fields to be provided in the output.<br>If provided, these fields MUST be returned along with the REQUIRED fields.<br>Other OPTIONAL fields MUST NOT be returned when this parameter is present.<br>Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`|
|sort|query|string|false|If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).<br><br>An implementation MAY support multiple sort fields for a single query.<br>If it does, it again MUST conform to the JSON API 1.0 specification.<br><br>If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.<br>If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.<br>The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.<br>The field `sortable` is in addition to each property description and other OPTIONAL fields.<br>An example is shown in the section Entry Listing Info Endpoints.|
|page_limit|query|integer|false|Sets a numerical limit on the number of entries returned.<br>See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).<br>The API implementation MUST return no more than the number specified.<br>It MAY return fewer.<br>The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).<br>The default limit value is up to the API implementation to decide.<br>Example: `http://example.com/optimade/v1/structures?page_limit=100`|
|page_offset|query|integer|false|RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.<br>Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.|
|page_number|query|integer|false|RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.<br>It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.<br>Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.|
|page_cursor|query|integer|false|RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.|
|page_above|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.<br>Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.|
|page_below|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.|
|include|query|string|false|A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).<br><br>All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.<br><br>The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).<br>If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.<br><br>The **default value** for `include` is `references`.<br>This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.<br>Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.<br><br>> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.|
|api_hint|query|string|false|If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "aggregate": "ok",
        "base_url": "http://example.com",
        "description": "string",
        "homepage": "http://example.com",
        "link_type": {},
        "name": "string",
        "no_aggregate_reason": "string"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[LinksResponse](#schemalinksresponse)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="optimade-api-references">References</h1>

## Get References

<a id="opIdget_references_references_get"></a>

> Code samples

```bash
curl https://example.com/references \
  -H 'Accept: application/json'
```

`GET /references`

<h3 id="get-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A filter string, in the format described in section API Filtering Format Specification of the specification.|
|response_format|query|string|false|The output format requested (see section Response Format).<br>Defaults to the format string 'json', which specifies the standard output format described in this specification.<br>Example: `http://example.com/v1/structures?response_format=xml`|
|email_address|query|string(email)|false|An email address of the user making the request.<br>The email SHOULD be that of a person and not an automatic system.<br>Example: `http://example.com/v1/structures?email_address=user@example.com`|
|response_fields|query|string|false|A comma-delimited set of fields to be provided in the output.<br>If provided, these fields MUST be returned along with the REQUIRED fields.<br>Other OPTIONAL fields MUST NOT be returned when this parameter is present.<br>Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`|
|sort|query|string|false|If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).<br><br>An implementation MAY support multiple sort fields for a single query.<br>If it does, it again MUST conform to the JSON API 1.0 specification.<br><br>If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.<br>If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.<br>The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.<br>The field `sortable` is in addition to each property description and other OPTIONAL fields.<br>An example is shown in the section Entry Listing Info Endpoints.|
|page_limit|query|integer|false|Sets a numerical limit on the number of entries returned.<br>See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).<br>The API implementation MUST return no more than the number specified.<br>It MAY return fewer.<br>The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).<br>The default limit value is up to the API implementation to decide.<br>Example: `http://example.com/optimade/v1/structures?page_limit=100`|
|page_offset|query|integer|false|RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.<br>Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.|
|page_number|query|integer|false|RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.<br>It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.<br>Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.|
|page_cursor|query|integer|false|RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.|
|page_above|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.<br>Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.|
|page_below|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.|
|include|query|string|false|A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).<br><br>All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.<br><br>The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).<br>If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.<br><br>The **default value** for `include` is `references`.<br>This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.<br>Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.<br><br>> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.|
|api_hint|query|string|false|If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "address": "string",
        "annote": "string",
        "authors": [
          {
            "firstname": "string",
            "lastname": "string",
            "name": "string"
          }
        ],
        "bib_type": "string",
        "booktitle": "string",
        "chapter": "string",
        "crossref": "string",
        "doi": "string",
        "edition": "string",
        "editors": [
          {
            "firstname": "string",
            "lastname": "string",
            "name": "string"
          }
        ],
        "howpublished": "string",
        "immutable_id": "string",
        "institution": "string",
        "journal": "string",
        "key": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "month": "string",
        "note": "string",
        "number": "string",
        "organization": "string",
        "pages": "string",
        "publisher": "string",
        "school": "string",
        "series": "string",
        "title": "string",
        "url": "http://example.com",
        "volume": "string",
        "year": "string"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReferenceResponseMany](#schemareferenceresponsemany)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Single Reference

<a id="opIdget_single_reference_references__entry_id__get"></a>

> Code samples

```bash
curl https://example.com/references/string \
  -H 'Accept: application/json'
```

`GET /references/{entry_id}`

<h3 id="get-single-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entry_id|path|string|true|none|
|response_format|query|string|false|The output format requested (see section Response Format).<br>Defaults to the format string 'json', which specifies the standard output format described in this specification.<br>Example: `http://example.com/v1/structures?response_format=xml`|
|email_address|query|string(email)|false|An email address of the user making the request.<br>The email SHOULD be that of a person and not an automatic system.<br>Example: `http://example.com/v1/structures?email_address=user@example.com`|
|response_fields|query|string|false|A comma-delimited set of fields to be provided in the output.<br>If provided, these fields MUST be returned along with the REQUIRED fields.<br>Other OPTIONAL fields MUST NOT be returned when this parameter is present.<br>Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`|
|include|query|string|false|A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).<br><br>All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.<br><br>The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).<br>If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.<br><br>The **default value** for `include` is `references`.<br>This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.<br>Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.<br><br>> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.|
|api_hint|query|string|false|If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "address": "string",
      "annote": "string",
      "authors": [
        {
          "firstname": "string",
          "lastname": "string",
          "name": "string"
        }
      ],
      "bib_type": "string",
      "booktitle": "string",
      "chapter": "string",
      "crossref": "string",
      "doi": "string",
      "edition": "string",
      "editors": [
        {
          "firstname": "string",
          "lastname": "string",
          "name": "string"
        }
      ],
      "howpublished": "string",
      "immutable_id": "string",
      "institution": "string",
      "journal": "string",
      "key": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "month": "string",
      "note": "string",
      "number": "string",
      "organization": "string",
      "pages": "string",
      "publisher": "string",
      "school": "string",
      "series": "string",
      "title": "string",
      "url": "http://example.com",
      "volume": "string",
      "year": "string"
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {
      "references": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      },
      "structures": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      }
    },
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-single-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReferenceResponseOne](#schemareferenceresponseone)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="optimade-api-structures">Structures</h1>

## Get Structures

<a id="opIdget_structures_structures_get"></a>

> Code samples

```bash
curl https://example.com/structures \
  -H 'Accept: application/json'
```

`GET /structures`

<h3 id="get-structures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A filter string, in the format described in section API Filtering Format Specification of the specification.|
|response_format|query|string|false|The output format requested (see section Response Format).<br>Defaults to the format string 'json', which specifies the standard output format described in this specification.<br>Example: `http://example.com/v1/structures?response_format=xml`|
|email_address|query|string(email)|false|An email address of the user making the request.<br>The email SHOULD be that of a person and not an automatic system.<br>Example: `http://example.com/v1/structures?email_address=user@example.com`|
|response_fields|query|string|false|A comma-delimited set of fields to be provided in the output.<br>If provided, these fields MUST be returned along with the REQUIRED fields.<br>Other OPTIONAL fields MUST NOT be returned when this parameter is present.<br>Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`|
|sort|query|string|false|If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).<br><br>An implementation MAY support multiple sort fields for a single query.<br>If it does, it again MUST conform to the JSON API 1.0 specification.<br><br>If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.<br>If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.<br>The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.<br>The field `sortable` is in addition to each property description and other OPTIONAL fields.<br>An example is shown in the section Entry Listing Info Endpoints.|
|page_limit|query|integer|false|Sets a numerical limit on the number of entries returned.<br>See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).<br>The API implementation MUST return no more than the number specified.<br>It MAY return fewer.<br>The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).<br>The default limit value is up to the API implementation to decide.<br>Example: `http://example.com/optimade/v1/structures?page_limit=100`|
|page_offset|query|integer|false|RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.<br>Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.|
|page_number|query|integer|false|RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.<br>It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.<br>Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.|
|page_cursor|query|integer|false|RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.|
|page_above|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.<br>Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.|
|page_below|query|integer|false|RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.|
|include|query|string|false|A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).<br><br>All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.<br><br>The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).<br>If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.<br><br>The **default value** for `include` is `references`.<br>This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.<br>Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.<br><br>> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.|
|api_hint|query|string|false|If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "assemblies": [
          {
            "group_probabilities": [
              0
            ],
            "sites_in_groups": [
              [
                0
              ]
            ]
          }
        ],
        "cartesian_site_positions": [
          [
            0,
            0,
            0
          ]
        ],
        "chemical_formula_anonymous": "string",
        "chemical_formula_descriptive": "string",
        "chemical_formula_hill": "string",
        "chemical_formula_reduced": "string",
        "dimension_types": [
          0,
          0,
          0
        ],
        "elements": [
          "string"
        ],
        "elements_ratios": [
          0
        ],
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "lattice_vectors": [
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ]
        ],
        "nelements": 0,
        "nperiodic_dimensions": 0,
        "nsites": 0,
        "species": [
          {
            "attached": [
              "string"
            ],
            "chemical_symbols": [
              "string"
            ],
            "concentration": [
              0
            ],
            "mass": [
              0
            ],
            "name": "string",
            "nattached": [
              0
            ],
            "original_name": "string"
          }
        ],
        "species_at_sites": [
          "string"
        ],
        "structure_features": [
          "disorder"
        ]
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-structures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StructureResponseMany](#schemastructureresponsemany)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Single Structure

<a id="opIdget_single_structure_structures__entry_id__get"></a>

> Code samples

```bash
curl https://example.com/structures/string \
  -H 'Accept: application/json'
```

`GET /structures/{entry_id}`

<h3 id="get-single-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entry_id|path|string|true|none|
|response_format|query|string|false|The output format requested (see section Response Format).<br>Defaults to the format string 'json', which specifies the standard output format described in this specification.<br>Example: `http://example.com/v1/structures?response_format=xml`|
|email_address|query|string(email)|false|An email address of the user making the request.<br>The email SHOULD be that of a person and not an automatic system.<br>Example: `http://example.com/v1/structures?email_address=user@example.com`|
|response_fields|query|string|false|A comma-delimited set of fields to be provided in the output.<br>If provided, these fields MUST be returned along with the REQUIRED fields.<br>Other OPTIONAL fields MUST NOT be returned when this parameter is present.<br>Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`|
|include|query|string|false|A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).<br><br>All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.<br><br>The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).<br>If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.<br><br>The **default value** for `include` is `references`.<br>This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.<br>Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.<br><br>> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.|
|api_hint|query|string|false|If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "assemblies": [
        {
          "group_probabilities": [
            0
          ],
          "sites_in_groups": [
            [
              0
            ]
          ]
        }
      ],
      "cartesian_site_positions": [
        [
          0,
          0,
          0
        ]
      ],
      "chemical_formula_anonymous": "string",
      "chemical_formula_descriptive": "string",
      "chemical_formula_hill": "string",
      "chemical_formula_reduced": "string",
      "dimension_types": [
        0,
        0,
        0
      ],
      "elements": [
        "string"
      ],
      "elements_ratios": [
        0
      ],
      "immutable_id": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "lattice_vectors": [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ],
      "nelements": 0,
      "nperiodic_dimensions": 0,
      "nsites": 0,
      "species": [
        {
          "attached": [
            "string"
          ],
          "chemical_symbols": [
            "string"
          ],
          "concentration": [
            0
          ],
          "mass": [
            0
          ],
          "name": "string",
          "nattached": [
            0
          ],
          "original_name": "string"
        }
      ],
      "species_at_sites": [
        "string"
      ],
      "structure_features": [
        "disorder"
      ]
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {
      "references": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      },
      "structures": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      }
    },
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 501 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

> 553 Response

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="get-single-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StructureResponseOne](#schemastructureresponseone)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not Found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|
|501|Not Implemented|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|553|553|Version Not Supported|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="optimade-api-versions">Versions</h1>

## Get Versions

<a id="opIdget_versions_versions_get"></a>

> Code samples

```bash
curl https://example.com/versions
```

`GET /versions`

Respond with the text/csv representation for the served versions.

<h3 id="get-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Aggregate">Aggregate</h2>
<!-- backwards compatibility -->
<a id="schemaaggregate"></a>
<a id="schema_Aggregate"></a>
<a id="tocSaggregate"></a>
<a id="tocsaggregate"></a>

```json
"ok"
```

Enumeration of aggregate values

<h2 id="tocS_Assembly">Assembly</h2>
<!-- backwards compatibility -->
<a id="schemaassembly"></a>
<a id="schema_Assembly"></a>
<a id="tocSassembly"></a>
<a id="tocsassembly"></a>

```json
{
  "group_probabilities": [
    0
  ],
  "sites_in_groups": [
    [
      0
    ]
  ]
}
```

A description of groups of sites that are statistically correlated.

- **Examples** (for each entry of the assemblies list):
    - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.
      Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.
    - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.
      The second group is formed by the fourth site. Sites of the first group (the second and the third) are never present at the same time as the fourth site.
      30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_probabilities|[number]|true|none|Statistical probability of each group. It MUST have the same length as `sites_in_groups`.<br>It SHOULD sum to one.<br>See below for examples of how to specify the probability of the occurrence of a vacancy.<br>The possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.|
|sites_in_groups|[[integer]]|true|none|Index of the sites (0-based) that belong to each group for each assembly.<br><br>- **Examples**:<br>    - `[[1], [2]]`: two groups, one with the second site, one with the third.<br>    - `[[1,2], [3]]`: one group with the second and third site, one with the fourth.|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{}
```

Members of the attributes object ("attributes") represent information about the resource object in which it's defined.
The keys for Attributes MUST NOT be:
    relationships
    links
    id
    type

<h2 id="tocS_AvailableApiVersion">AvailableApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemaavailableapiversion"></a>
<a id="schema_AvailableApiVersion"></a>
<a id="tocSavailableapiversion"></a>
<a id="tocsavailableapiversion"></a>

```json
{
  "url": "http://example.com",
  "version": "string"
}
```

A JSON object containing information about an available API version

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|A string specifying a versioned base URL that MUST adhere to the rules in section Base URL|
|version|string|true|none|A string containing the full version number of the API served at that versioned base URL.<br>The version number string MUST NOT be prefixed by, e.g., 'v'.<br>Examples: `1.0.0`, `1.0.0-rc.2`.|

<h2 id="tocS_BaseInfoAttributes">BaseInfoAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabaseinfoattributes"></a>
<a id="schema_BaseInfoAttributes"></a>
<a id="tocSbaseinfoattributes"></a>
<a id="tocsbaseinfoattributes"></a>

```json
{
  "api_version": "string",
  "available_api_versions": [
    {
      "url": "http://example.com",
      "version": "string"
    }
  ],
  "available_endpoints": [
    "string"
  ],
  "entry_types_by_format": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "formats": [
    "json"
  ],
  "is_index": false
}
```

Attributes for Base URL Info endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_version|string|true|none|Presently used full version of the OPTIMADE API.<br>The version number string MUST NOT be prefixed by, e.g., "v".<br>Examples: `1.0.0`, `1.0.0-rc.2`.|
|available_api_versions|[[AvailableApiVersion](#schemaavailableapiversion)]|true|none|A list of dictionaries of available API versions at other base URLs|
|available_endpoints|[string]|true|none|List of available endpoints (i.e., the string to be appended to the versioned base URL).|
|entry_types_by_format|object|true|none|Available entry endpoints as a function of output formats.|
|formats|[string]|false|none|List of available output formats.|
|is_index|boolean|false|none|If true, this is an index meta-database base URL (see section Index Meta-Database). If this member is not provided, the client MUST assume this is not an index meta-database base URL (i.e., the default is for `is_index` to be `false`).|

<h2 id="tocS_BaseInfoResource">BaseInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemabaseinforesource"></a>
<a id="schema_BaseInfoResource"></a>
<a id="tocSbaseinforesource"></a>
<a id="tocsbaseinforesource"></a>

```json
{
  "attributes": {
    "api_version": "string",
    "available_api_versions": [
      {
        "url": "http://example.com",
        "version": "string"
      }
    ],
    "available_endpoints": [
      "string"
    ],
    "entry_types_by_format": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "formats": [
      "json"
    ],
    "is_index": false
  },
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {},
  "type": "string"
}
```

Resource objects appear in a JSON API document to represent resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[BaseInfoAttributes](#schemabaseinfoattributes)|true|none|Attributes for Base URL Info endpoint|
|id|string|true|none|none|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|[Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)<br>describing relationships between the resource and other JSON API resources.|
|type|string|true|none|none|

<h2 id="tocS_BaseRelationshipMeta">BaseRelationshipMeta</h2>
<!-- backwards compatibility -->
<a id="schemabaserelationshipmeta"></a>
<a id="schema_BaseRelationshipMeta"></a>
<a id="tocSbaserelationshipmeta"></a>
<a id="tocsbaserelationshipmeta"></a>

```json
{
  "description": "string"
}
```

Specific meta field for base relationship resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|OPTIONAL human-readable description of the relationship|

<h2 id="tocS_BaseRelationshipResource">BaseRelationshipResource</h2>
<!-- backwards compatibility -->
<a id="schemabaserelationshipresource"></a>
<a id="schema_BaseRelationshipResource"></a>
<a id="tocSbaserelationshipresource"></a>
<a id="tocsbaserelationshipresource"></a>

```json
{
  "id": "string",
  "meta": {
    "description": "string"
  },
  "type": "string"
}
```

Minimum requirements to represent a relationship resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Resource ID|
|meta|object|false|none|Relationship meta field. MUST contain 'description' if supplied.|
|type|string|true|none|Resource type|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"string"
```

Optimade Data Types

See the section "Data types" in the OPTIMADE API specification for more information.

<h2 id="tocS_EntryInfoProperty">EntryInfoProperty</h2>
<!-- backwards compatibility -->
<a id="schemaentryinfoproperty"></a>
<a id="schema_EntryInfoProperty"></a>
<a id="tocSentryinfoproperty"></a>
<a id="tocsentryinfoproperty"></a>

```json
{
  "description": "string",
  "sortable": true,
  "type": {},
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A human-readable description of the entry property|
|sortable|boolean|false|none|Defines whether the entry property can be used for sorting with the "sort" parameter.<br>If the entry listing endpoint supports sorting, this key MUST be present for sortable properties with value `true`.|
|type|object|false|none|The type of the property's value.<br>This MUST be any of the types defined in the Data types section.<br>For the purpose of compatibility with future versions of this specification, a client MUST accept values that are not `string` values specifying any of the OPTIMADE Data types, but MUST then also disregard the `type` field.<br>Note, if the value is a nested type, only the outermost type should be reported.<br>E.g., for the entry resource `structures`, the `species` property is defined as a list of dictionaries, hence its `type` value would be `list`.|
|unit|string|false|none|The physical unit of the entry property.<br>This MUST be a valid representation of units according to version 2.1 of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html).<br>It is RECOMMENDED that non-standard (non-SI) units are described in the description for the property.|

<h2 id="tocS_EntryInfoResource">EntryInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemaentryinforesource"></a>
<a id="schema_EntryInfoResource"></a>
<a id="tocSentryinforesource"></a>
<a id="tocsentryinforesource"></a>

```json
{
  "description": "string",
  "formats": [
    "string"
  ],
  "output_fields_by_format": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "properties": {
    "property1": {
      "description": "string",
      "sortable": true,
      "type": {},
      "unit": "string"
    },
    "property2": {
      "description": "string",
      "sortable": true,
      "type": {},
      "unit": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Description of the entry.|
|formats|[string]|true|none|List of output formats available for this type of entry.|
|output_fields_by_format|object|true|none|Dictionary of available output fields for this entry type, where the keys are the values of the `formats` list and the values are the keys of the `properties` dictionary.|
|properties|object|true|none|A dictionary describing queryable properties for this entry type, where each key is a property name.|

<h2 id="tocS_EntryInfoResponse">EntryInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentryinforesponse"></a>
<a id="schema_EntryInfoResponse"></a>
<a id="tocSentryinforesponse"></a>
<a id="tocsentryinforesponse"></a>

```json
{
  "data": {
    "description": "string",
    "formats": [
      "string"
    ],
    "output_fields_by_format": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "properties": {
      "property1": {
        "description": "string",
        "sortable": true,
        "type": {},
        "unit": "string"
      },
      "property2": {
        "description": "string",
        "sortable": true,
        "type": {},
        "unit": "string"
      }
    }
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|OPTIMADE information for an entry endpoint|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[Resource](#schemaresource)]|false|none|A list of unique included resources|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_EntryRelationships">EntryRelationships</h2>
<!-- backwards compatibility -->
<a id="schemaentryrelationships"></a>
<a id="schema_EntryRelationships"></a>
<a id="tocSentryrelationships"></a>
<a id="tocsentryrelationships"></a>

```json
{
  "references": {
    "data": {
      "id": "string",
      "meta": {
        "description": "string"
      },
      "type": "string"
    },
    "links": {
      "related": "http://example.com",
      "self": "http://example.com"
    },
    "meta": {}
  },
  "structures": {
    "data": {
      "id": "string",
      "meta": {
        "description": "string"
      },
      "type": "string"
    },
    "links": {
      "related": "http://example.com",
      "self": "http://example.com"
    },
    "meta": {}
  }
}
```

This model wraps the JSON API Relationships to include type-specific top level keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|references|object|false|none|Object containing links to relationships with entries of the `references` type.|
|structures|object|false|none|Object containing links to relationships with entries of the `structures` type.|

<h2 id="tocS_EntryResource">EntryResource</h2>
<!-- backwards compatibility -->
<a id="schemaentryresource"></a>
<a id="schema_EntryResource"></a>
<a id="tocSentryresource"></a>
<a id="tocsentryresource"></a>

```json
{
  "attributes": {
    "immutable_id": "string",
    "last_modified": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {
    "references": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    },
    "structures": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    }
  },
  "type": "string"
}
```

The base model for an entry resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|A dictionary, containing key-value pairs representing the entry's properties, except for `type` and `id`.<br>Database-provider-specific properties need to include the database-provider-specific prefix (see section on Database-Provider-Specific Namespace Prefixes).|
|id|string|true|none|An entry's ID as defined in section Definition of Terms.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br><br>- **Examples**:<br>    - `"db/1234567"`<br>    - `"cod/2000000"`<br>    - `"cod/2000000@1234567"`<br>    - `"nomad/L1234567890"`<br>    - `"42"`|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).<br>The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.|
|type|string|true|none|The name of the type of an entry.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br>    - MUST be an existing entry type.<br>    - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.<br><br>- **Example**: `"structures"`|

<h2 id="tocS_EntryResourceAttributes">EntryResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaentryresourceattributes"></a>
<a id="schema_EntryResourceAttributes"></a>
<a id="tocSentryresourceattributes"></a>
<a id="tocsentryresourceattributes"></a>

```json
{
  "immutable_id": "string",
  "last_modified": "1970-01-01T00:00:00Z"
}
```

Contains key-value pairs representing the entry's properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|immutable_id|string|false|none|The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br><br>- **Examples**:<br>    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`<br>    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)|
|last_modified|string(date-time)|true|none|Date and time representing when the entry was last modified.<br><br>- **Type**: timestamp.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.<br><br>- **Example**:<br>    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "detail": "string",
  "id": "string",
  "links": {
    "about": "http://example.com"
  },
  "meta": {},
  "source": {
    "parameter": "string",
    "pointer": "string"
  },
  "status": "string",
  "title": "string"
}
```

An error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|an application-specific error code, expressed as a string value.|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|id|string|false|none|A unique identifier for this particular occurrence of the problem.|
|links|object|false|none|A links object storing about|
|meta|object|false|none|a meta object containing non-standard meta-information about the error.|
|source|object|false|none|An object containing references to the source of the error|
|status|string|false|none|the HTTP status code applicable to this problem, expressed as a string value.|
|title|string|false|none|A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.|

<h2 id="tocS_ErrorLinks">ErrorLinks</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlinks"></a>
<a id="schema_ErrorLinks"></a>
<a id="tocSerrorlinks"></a>
<a id="tocserrorlinks"></a>

```json
{
  "about": "http://example.com"
}
```

A Links object specific to Error objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|string(uri) \| [Link](#schemalink)|false|none|A link that leads to further details about this particular occurrence of the problem.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "data": {
    "attributes": {},
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors MUST be present and data MUST be skipped

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Resource](#schemaresource) \| [[Resource](#schemaresource)]|false|none|Outputted Data|
|errors|[[OptimadeError](#schemaoptimadeerror)]|true|none|A list of OPTIMADE-specific JSON API error objects, where the field detail MUST be present.|
|included|[[Resource](#schemaresource)]|false|none|A list of unique included resources|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_ErrorSource">ErrorSource</h2>
<!-- backwards compatibility -->
<a id="schemaerrorsource"></a>
<a id="schema_ErrorSource"></a>
<a id="tocSerrorsource"></a>
<a id="tocserrorsource"></a>

```json
{
  "parameter": "string",
  "pointer": "string"
}
```

an object containing references to the source of the error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameter|string|false|none|a string indicating which URI query parameter caused the error.|
|pointer|string|false|none|a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute].|

<h2 id="tocS_Implementation">Implementation</h2>
<!-- backwards compatibility -->
<a id="schemaimplementation"></a>
<a id="schema_Implementation"></a>
<a id="tocSimplementation"></a>
<a id="tocsimplementation"></a>

```json
{
  "homepage": "http://example.com",
  "issue_tracker": "http://example.com",
  "maintainer": {
    "email": "user@example.com"
  },
  "name": "string",
  "source_url": "http://example.com",
  "version": "string"
}
```

Information on the server implementation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homepage|string(uri) \| [Link](#schemalink)|false|none|A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the homepage of the implementation.|
|issue_tracker|string(uri) \| [Link](#schemalink)|false|none|A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation's issue tracker.|
|maintainer|object|false|none|A dictionary providing details about the maintainer of the implementation.|
|name|string|false|none|name of the implementation|
|source_url|string(uri) \| [Link](#schemalink)|false|none|A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation source, either downloadable archive or version control system.|
|version|string|false|none|version string of the current implementation|

<h2 id="tocS_ImplementationMaintainer">ImplementationMaintainer</h2>
<!-- backwards compatibility -->
<a id="schemaimplementationmaintainer"></a>
<a id="schema_ImplementationMaintainer"></a>
<a id="tocSimplementationmaintainer"></a>
<a id="tocsimplementationmaintainer"></a>

```json
{
  "email": "user@example.com"
}
```

Details about the maintainer of the implementation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|the maintainer's email address|

<h2 id="tocS_InfoResponse">InfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemainforesponse"></a>
<a id="schema_InfoResponse"></a>
<a id="tocSinforesponse"></a>
<a id="tocsinforesponse"></a>

```json
{
  "data": {
    "attributes": {
      "api_version": "string",
      "available_api_versions": [
        {
          "url": "http://example.com",
          "version": "string"
        }
      ],
      "available_endpoints": [
        "string"
      ],
      "entry_types_by_format": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "formats": [
        "json"
      ],
      "is_index": false
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {},
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {},
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {},
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The implementations /info data|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[Resource](#schemaresource)]|false|none|A list of unique included resources|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_JsonApi">JsonApi</h2>
<!-- backwards compatibility -->
<a id="schemajsonapi"></a>
<a id="schema_JsonApi"></a>
<a id="tocSjsonapi"></a>
<a id="tocsjsonapi"></a>

```json
{
  "meta": {},
  "version": "1.0"
}
```

An object describing the server's implementation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|Non-standard meta information|
|version|string|false|none|Version of the json API used|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "http://example.com",
  "meta": {}
}
```

A link **MUST** be represented as either: a string containing the link's URL or a link object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri)|true|none|a string containing the link’s URL.|
|meta|object|false|none|a meta object containing non-standard meta-information about the link.|

<h2 id="tocS_LinkType">LinkType</h2>
<!-- backwards compatibility -->
<a id="schemalinktype"></a>
<a id="schema_LinkType"></a>
<a id="tocSlinktype"></a>
<a id="tocslinktype"></a>

```json
"child"
```

Enumeration of link_type values

<h2 id="tocS_LinksResource">LinksResource</h2>
<!-- backwards compatibility -->
<a id="schemalinksresource"></a>
<a id="schema_LinksResource"></a>
<a id="tocSlinksresource"></a>
<a id="tocslinksresource"></a>

```json
{
  "attributes": {
    "aggregate": "ok",
    "base_url": "http://example.com",
    "description": "string",
    "homepage": "http://example.com",
    "link_type": {},
    "name": "string",
    "no_aggregate_reason": "string"
  },
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {
    "references": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    },
    "structures": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    }
  },
  "type": "string"
}
```

A Links endpoint resource object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|A dictionary containing key-value pairs representing the Links resource's properties.|
|id|string|true|none|An entry's ID as defined in section Definition of Terms.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br><br>- **Examples**:<br>    - `"db/1234567"`<br>    - `"cod/2000000"`<br>    - `"cod/2000000@1234567"`<br>    - `"nomad/L1234567890"`<br>    - `"42"`|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).<br>The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.|
|type|string|true|none|These objects are described in detail in the section Links Endpoint|

<h2 id="tocS_LinksResourceAttributes">LinksResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalinksresourceattributes"></a>
<a id="schema_LinksResourceAttributes"></a>
<a id="tocSlinksresourceattributes"></a>
<a id="tocslinksresourceattributes"></a>

```json
{
  "aggregate": "ok",
  "base_url": "http://example.com",
  "description": "string",
  "homepage": "http://example.com",
  "link_type": {},
  "name": "string",
  "no_aggregate_reason": "string"
}
```

Links endpoint resource object attributes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate|object|false|none|A string indicating whether a client that is following links to aggregate results from different OPTIMADE implementations should follow this link or not.<br>This flag SHOULD NOT be indicated for links where `link_type` is not `child`.<br><br>If not specified, clients MAY assume that the value is `ok`.<br>If specified, and the value is anything different than `ok`, the client MUST assume that the server is suggesting not to follow the link during aggregation by default (also if the value is not among the known ones, in case a future specification adds new accepted values).<br><br>Specific values indicate the reason why the server is providing the suggestion.<br>A client MAY follow the link anyway if it has reason to do so (e.g., if the client is looking for all test databases, it MAY follow the links marked with `aggregate`=`test`).<br><br>If specified, it MUST be one of the values listed in section Link Aggregate Options.|
|base_url|string(uri) \| [Link](#schemalink)|true|none|JSON API links object, pointing to the base URL for this implementation|
|description|string|true|none|Human-readable description for the OPTIMADE API implementation, e.g., for use in clients to show a description to the end-user.|
|homepage|string(uri) \| [Link](#schemalink)|true|none|JSON API links object, pointing to a homepage URL for this implementation|
|link_type|object|true|none|The type of the linked relation.<br>MUST be one of these values: 'child', 'root', 'external', 'providers'.|
|name|string|true|none|Human-readable name for the OPTIMADE API implementation, e.g., for use in clients to show the name to the end-user.|
|no_aggregate_reason|string|false|none|An OPTIONAL human-readable string indicating the reason for suggesting not to aggregate results following the link.<br>It SHOULD NOT be present if `aggregate`=`ok`.|

<h2 id="tocS_LinksResponse">LinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalinksresponse"></a>
<a id="schema_LinksResponse"></a>
<a id="tocSlinksresponse"></a>
<a id="tocslinksresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "aggregate": "ok",
        "base_url": "http://example.com",
        "description": "string",
        "homepage": "http://example.com",
        "link_type": {},
        "name": "string",
        "no_aggregate_reason": "string"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LinksResource](#schemalinksresource)] \| [object]|true|none|List of unique OPTIMADE links resource objects|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[EntryResource](#schemaentryresource)] \| [object]|false|none|none|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{}
```

Non-standard meta-information that can not be represented as an attribute or relationship.

<h2 id="tocS_OptimadeError">OptimadeError</h2>
<!-- backwards compatibility -->
<a id="schemaoptimadeerror"></a>
<a id="schema_OptimadeError"></a>
<a id="tocSoptimadeerror"></a>
<a id="tocsoptimadeerror"></a>

```json
{
  "code": "string",
  "detail": "string",
  "id": "string",
  "links": {
    "about": "http://example.com"
  },
  "meta": {},
  "source": {
    "parameter": "string",
    "pointer": "string"
  },
  "status": "string",
  "title": "string"
}
```

detail MUST be present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|an application-specific error code, expressed as a string value.|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|id|string|false|none|A unique identifier for this particular occurrence of the problem.|
|links|object|false|none|A links object storing about|
|meta|object|false|none|a meta object containing non-standard meta-information about the error.|
|source|object|false|none|An object containing references to the source of the error|
|status|string|false|none|the HTTP status code applicable to this problem, expressed as a string value.|
|title|string|false|none|A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.|

<h2 id="tocS_Periodicity">Periodicity</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicity"></a>
<a id="schema_Periodicity"></a>
<a id="tocSperiodicity"></a>
<a id="tocsperiodicity"></a>

```json
0
```

Integer enumeration of dimension_types values

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "firstname": "string",
  "lastname": "string",
  "name": "string"
}
```

A person, i.e., an author, editor or other.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|First name of the person.|
|lastname|string|false|none|Last name of the person.|
|name|string|true|none|Full name of the person, REQUIRED.|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "description": "string",
  "homepage": "http://example.com",
  "name": "string",
  "prefix": "string"
}
```

Information on the database provider of the implementation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|a longer description of the database provider|
|homepage|string(uri) \| [Link](#schemalink)|false|none|a [JSON API links object](http://jsonapi.org/format/1.0#document-links) pointing to homepage of the database provider, either directly as a string, or as a link object.|
|name|string|true|none|a short name for the database provider|
|prefix|string|true|none|database-provider-specific prefix as found in section Database-Provider-Specific Namespace Prefixes.|

<h2 id="tocS_ReferenceRelationship">ReferenceRelationship</h2>
<!-- backwards compatibility -->
<a id="schemareferencerelationship"></a>
<a id="schema_ReferenceRelationship"></a>
<a id="tocSreferencerelationship"></a>
<a id="tocsreferencerelationship"></a>

```json
{
  "data": {
    "id": "string",
    "meta": {
      "description": "string"
    },
    "type": "string"
  },
  "links": {
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {}
}
```

Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BaseRelationshipResource](#schemabaserelationshipresource) \| [[BaseRelationshipResource](#schemabaserelationshipresource)]|false|none|Resource linkage|
|links|object|false|none|a links object containing at least one of the following: self, related|
|meta|object|false|none|a meta object that contains non-standard meta-information about the relationship.|

<h2 id="tocS_ReferenceResource">ReferenceResource</h2>
<!-- backwards compatibility -->
<a id="schemareferenceresource"></a>
<a id="schema_ReferenceResource"></a>
<a id="tocSreferenceresource"></a>
<a id="tocsreferenceresource"></a>

```json
{
  "attributes": {
    "address": "string",
    "annote": "string",
    "authors": [
      {
        "firstname": "string",
        "lastname": "string",
        "name": "string"
      }
    ],
    "bib_type": "string",
    "booktitle": "string",
    "chapter": "string",
    "crossref": "string",
    "doi": "string",
    "edition": "string",
    "editors": [
      {
        "firstname": "string",
        "lastname": "string",
        "name": "string"
      }
    ],
    "howpublished": "string",
    "immutable_id": "string",
    "institution": "string",
    "journal": "string",
    "key": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "month": "string",
    "note": "string",
    "number": "string",
    "organization": "string",
    "pages": "string",
    "publisher": "string",
    "school": "string",
    "series": "string",
    "title": "string",
    "url": "http://example.com",
    "volume": "string",
    "year": "string"
  },
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {
    "references": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    },
    "structures": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    }
  },
  "type": "string"
}
```

The `references` entries describe bibliographic references.

The following properties are used to provide the bibliographic details:

- **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
- **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
- **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
    - **name**: Full name of the person, REQUIRED.
    - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
- **doi** and **url**: values are strings.
- **Requirements/Conventions**:
    - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
    - **Query**: Support for queries on any of these properties is OPTIONAL.
        If supported, filters MAY support only a subset of comparison operators.
    - Every references entry MUST contain at least one of the properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[ReferenceResourceAttributes](#schemareferenceresourceattributes)|true|none|Model that stores the attributes of a reference.<br><br>Many properties match the meaning described in the<br>[BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).|
|id|string|true|none|An entry's ID as defined in section Definition of Terms.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br><br>- **Examples**:<br>    - `"db/1234567"`<br>    - `"cod/2000000"`<br>    - `"cod/2000000@1234567"`<br>    - `"nomad/L1234567890"`<br>    - `"42"`|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).<br>The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.|
|type|string|true|none|The name of the type of an entry.<br>- **Type**: string.<br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br>    - MUST be an existing entry type.<br>    - The entry of type <type> and ID <id> MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.<br>- **Example**: `"structures"`|

<h2 id="tocS_ReferenceResourceAttributes">ReferenceResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemareferenceresourceattributes"></a>
<a id="schema_ReferenceResourceAttributes"></a>
<a id="tocSreferenceresourceattributes"></a>
<a id="tocsreferenceresourceattributes"></a>

```json
{
  "address": "string",
  "annote": "string",
  "authors": [
    {
      "firstname": "string",
      "lastname": "string",
      "name": "string"
    }
  ],
  "bib_type": "string",
  "booktitle": "string",
  "chapter": "string",
  "crossref": "string",
  "doi": "string",
  "edition": "string",
  "editors": [
    {
      "firstname": "string",
      "lastname": "string",
      "name": "string"
    }
  ],
  "howpublished": "string",
  "immutable_id": "string",
  "institution": "string",
  "journal": "string",
  "key": "string",
  "last_modified": "1970-01-01T00:00:00Z",
  "month": "string",
  "note": "string",
  "number": "string",
  "organization": "string",
  "pages": "string",
  "publisher": "string",
  "school": "string",
  "series": "string",
  "title": "string",
  "url": "http://example.com",
  "volume": "string",
  "year": "string"
}
```

Model that stores the attributes of a reference.

Many properties match the meaning described in the
[BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Meaning of property matches the BiBTeX specification.|
|annote|string|false|none|Meaning of property matches the BiBTeX specification.|
|authors|[[Person](#schemaperson)]|false|none|List of person objects containing the authors of the reference.|
|bib_type|string|false|none|Type of the reference, corresponding to the **type** property in the BiBTeX specification.|
|booktitle|string|false|none|Meaning of property matches the BiBTeX specification.|
|chapter|string|false|none|Meaning of property matches the BiBTeX specification.|
|crossref|string|false|none|Meaning of property matches the BiBTeX specification.|
|doi|string|false|none|The digital object identifier of the reference.|
|edition|string|false|none|Meaning of property matches the BiBTeX specification.|
|editors|[[Person](#schemaperson)]|false|none|List of person objects containing the editors of the reference.|
|howpublished|string|false|none|Meaning of property matches the BiBTeX specification.|
|immutable_id|string|false|none|The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br><br>- **Examples**:<br>    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`<br>    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)|
|institution|string|false|none|Meaning of property matches the BiBTeX specification.|
|journal|string|false|none|Meaning of property matches the BiBTeX specification.|
|key|string|false|none|Meaning of property matches the BiBTeX specification.|
|last_modified|string(date-time)|true|none|Date and time representing when the entry was last modified.<br><br>- **Type**: timestamp.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.<br><br>- **Example**:<br>    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)|
|month|string|false|none|Meaning of property matches the BiBTeX specification.|
|note|string|false|none|Meaning of property matches the BiBTeX specification.|
|number|string|false|none|Meaning of property matches the BiBTeX specification.|
|organization|string|false|none|Meaning of property matches the BiBTeX specification.|
|pages|string|false|none|Meaning of property matches the BiBTeX specification.|
|publisher|string|false|none|Meaning of property matches the BiBTeX specification.|
|school|string|false|none|Meaning of property matches the BiBTeX specification.|
|series|string|false|none|Meaning of property matches the BiBTeX specification.|
|title|string|false|none|Meaning of property matches the BiBTeX specification.|
|url|string(uri)|false|none|The URL of the reference.|
|volume|string|false|none|Meaning of property matches the BiBTeX specification.|
|year|string|false|none|Meaning of property matches the BiBTeX specification.|

<h2 id="tocS_ReferenceResponseMany">ReferenceResponseMany</h2>
<!-- backwards compatibility -->
<a id="schemareferenceresponsemany"></a>
<a id="schema_ReferenceResponseMany"></a>
<a id="tocSreferenceresponsemany"></a>
<a id="tocsreferenceresponsemany"></a>

```json
{
  "data": [
    {
      "attributes": {
        "address": "string",
        "annote": "string",
        "authors": [
          {
            "firstname": "string",
            "lastname": "string",
            "name": "string"
          }
        ],
        "bib_type": "string",
        "booktitle": "string",
        "chapter": "string",
        "crossref": "string",
        "doi": "string",
        "edition": "string",
        "editors": [
          {
            "firstname": "string",
            "lastname": "string",
            "name": "string"
          }
        ],
        "howpublished": "string",
        "immutable_id": "string",
        "institution": "string",
        "journal": "string",
        "key": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "month": "string",
        "note": "string",
        "number": "string",
        "organization": "string",
        "pages": "string",
        "publisher": "string",
        "school": "string",
        "series": "string",
        "title": "string",
        "url": "http://example.com",
        "volume": "string",
        "year": "string"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ReferenceResource](#schemareferenceresource)] \| [object]|true|none|List of unique OPTIMADE references entry resource objects|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[EntryResource](#schemaentryresource)] \| [object]|false|none|none|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_ReferenceResponseOne">ReferenceResponseOne</h2>
<!-- backwards compatibility -->
<a id="schemareferenceresponseone"></a>
<a id="schema_ReferenceResponseOne"></a>
<a id="tocSreferenceresponseone"></a>
<a id="tocsreferenceresponseone"></a>

```json
{
  "data": {
    "attributes": {
      "address": "string",
      "annote": "string",
      "authors": [
        {
          "firstname": "string",
          "lastname": "string",
          "name": "string"
        }
      ],
      "bib_type": "string",
      "booktitle": "string",
      "chapter": "string",
      "crossref": "string",
      "doi": "string",
      "edition": "string",
      "editors": [
        {
          "firstname": "string",
          "lastname": "string",
          "name": "string"
        }
      ],
      "howpublished": "string",
      "immutable_id": "string",
      "institution": "string",
      "journal": "string",
      "key": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "month": "string",
      "note": "string",
      "number": "string",
      "organization": "string",
      "pages": "string",
      "publisher": "string",
      "school": "string",
      "series": "string",
      "title": "string",
      "url": "http://example.com",
      "volume": "string",
      "year": "string"
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {
      "references": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      },
      "structures": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      }
    },
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ReferenceResource](#schemareferenceresource) \| object|true|none|A single references entry resource|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[EntryResource](#schemaentryresource)] \| [object]|false|none|none|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_RelationshipLinks">RelationshipLinks</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiplinks"></a>
<a id="schema_RelationshipLinks"></a>
<a id="tocSrelationshiplinks"></a>
<a id="tocsrelationshiplinks"></a>

```json
{
  "related": "http://example.com",
  "self": "http://example.com"
}
```

A resource object **MAY** contain references to other resource objects ("relationships").
Relationships may be to-one or to-many.
Relationships can be specified by including a member in a resource's links object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|related|string(uri) \| [Link](#schemalink)|false|none|A [related resource link](https://jsonapi.org/format/1.0/#document-resource-object-related-resource-links).|
|self|string(uri) \| [Link](#schemalink)|false|none|A link for the relationship itself (a 'relationship link').<br>This link allows the client to directly manipulate the relationship.<br>When fetched successfully, this link returns the [linkage](https://jsonapi.org/format/1.0/#document-resource-object-linkage) for the related resources as its primary data.<br>(See [Fetching Relationships](https://jsonapi.org/format/1.0/#fetching-relationships).)|

<h2 id="tocS_Relationships">Relationships</h2>
<!-- backwards compatibility -->
<a id="schemarelationships"></a>
<a id="schema_Relationships"></a>
<a id="tocSrelationships"></a>
<a id="tocsrelationships"></a>

```json
{}
```

Members of the relationships object ("relationships") represent references from the resource object in which it's defined to other resource objects.
Keys MUST NOT be:
    type
    id

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "attributes": {},
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {},
  "type": "string"
}
```

Resource objects appear in a JSON API document to represent resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|an attributes object representing some of the resource’s data.|
|id|string|true|none|Resource ID|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|[Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)<br>describing relationships between the resource and other JSON API resources.|
|type|string|true|none|Resource type|

<h2 id="tocS_ResourceLinks">ResourceLinks</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelinks"></a>
<a id="schema_ResourceLinks"></a>
<a id="tocSresourcelinks"></a>
<a id="tocsresourcelinks"></a>

```json
{
  "self": "http://example.com"
}
```

A Resource Links object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri) \| [Link](#schemalink)|false|none|A link that identifies the resource represented by the resource object.|

<h2 id="tocS_ResponseMeta">ResponseMeta</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemeta"></a>
<a id="schema_ResponseMeta"></a>
<a id="tocSresponsemeta"></a>
<a id="tocsresponsemeta"></a>

```json
{
  "api_version": "string",
  "data_available": 0,
  "data_returned": 0,
  "implementation": {
    "homepage": "http://example.com",
    "issue_tracker": "http://example.com",
    "maintainer": {
      "email": "user@example.com"
    },
    "name": "string",
    "source_url": "http://example.com",
    "version": "string"
  },
  "last_id": "string",
  "more_data_available": true,
  "provider": {
    "description": "string",
    "homepage": "http://example.com",
    "name": "string",
    "prefix": "string"
  },
  "query": {
    "representation": "string"
  },
  "response_message": "string",
  "schema": "http://example.com",
  "time_stamp": "1970-01-01T00:00:00Z",
  "warnings": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "title": "string",
      "type": "string"
    }
  ]
}
```

A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
that contains JSON API meta objects of non-standard
meta-information.

OPTIONAL additional information global to the query that is not
specified in this document, MUST start with a
database-provider-specific prefix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_version|string|true|none|Presently used full version of the OPTIMADE API.<br>The version number string MUST NOT be prefixed by, e.g., "v".<br>Examples: `1.0.0`, `1.0.0-rc.2`.|
|data_available|integer|false|none|An integer containing the total number of data resource objects available in the database for the endpoint.|
|data_returned|integer|false|none|An integer containing the total number of data resource objects returned for the current `filter` query, independent of pagination.|
|implementation|object|false|none|a dictionary describing the server implementation|
|last_id|string|false|none|a string containing the last ID returned|
|more_data_available|boolean|true|none|`false` if the response contains all data for the request (e.g., a request issued to a single entry endpoint, or a `filter` query at the last page of a paginated response) and `true` if the response is incomplete in the sense that multiple objects match the request, and not all of them have been included in the response (e.g., a query with multiple pages that is not at the last page).|
|provider|object|false|none|information on the database provider of the implementation.|
|query|object|true|none|Information on the Query that was requested|
|response_message|string|false|none|response string from the server|
|schema|string(uri) \| [Link](#schemalink)|false|none|A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) that points to a schema for the response.<br>If it is a string, or a dictionary containing no `meta` field, the provided URL MUST point at an [OpenAPI](https://swagger.io/specification/) schema.<br>It is possible that future versions of this specification allows for alternative schema types.<br>Hence, if the `meta` field of the JSON API links object is provided and contains a field `schema_type` that is not equal to the string `OpenAPI` the client MUST not handle failures to parse the schema or to validate the response against the schema as errors.|
|time_stamp|string(date-time)|false|none|A timestamp containing the date and time at which the query was executed.|
|warnings|[[Warnings](#schemawarnings)]|false|none|A list of warning resource objects representing non-critical errors or warnings.<br>A warning resource object is defined similarly to a [JSON API error object](http://jsonapi.org/format/1.0/#error-objects), but MUST also include the field `type`, which MUST have the value `"warning"`.<br>The field `detail` MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.<br>The field `status`, representing a HTTP response status code, MUST NOT be present for a warning resource object.<br>This is an exclusive field for error resource objects.|

<h2 id="tocS_ResponseMetaQuery">ResponseMetaQuery</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemetaquery"></a>
<a id="schema_ResponseMetaQuery"></a>
<a id="tocSresponsemetaquery"></a>
<a id="tocsresponsemetaquery"></a>

```json
{
  "representation": "string"
}
```

Information on the query that was requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|representation|string|true|none|A string with the part of the URL following the versioned or unversioned base URL that serves the API.<br>Query parameters that have not been used in processing the request MAY be omitted.<br>In particular, if no query parameters have been involved in processing the request, the query part of the URL MAY be excluded.<br>Example: `/structures?filter=nelements=2`|

<h2 id="tocS_Species">Species</h2>
<!-- backwards compatibility -->
<a id="schemaspecies"></a>
<a id="schema_Species"></a>
<a id="tocSspecies"></a>
<a id="tocsspecies"></a>

```json
{
  "attached": [
    "string"
  ],
  "chemical_symbols": [
    "string"
  ],
  "concentration": [
    0
  ],
  "mass": [
    0
  ],
  "name": "string",
  "nattached": [
    0
  ],
  "original_name": "string"
}
```

A list describing the species of the sites of this structure.

Species can represent pure chemical elements, virtual-crystal atoms representing a
statistical occupation of a given site by multiple chemical elements, and/or a
location to which there are attached atoms, i.e., atoms whose precise location are
unknown beyond that they are attached to that position (frequently used to indicate
hydrogen atoms attached to another element, e.g., a carbon with three attached
hydrogens might represent a methyl group, -CH3).

- **Examples**:
    - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.
    - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.
    - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.
    - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.
    - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.
    - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached|[string]|false|none|If provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element.|
|chemical_symbols|[string]|true|none|MUST be a list of strings of all chemical elements composing this species. Each item of the list MUST be one of the following:<br><br>- a valid chemical-element name, or<br>- the special value `"X"` to represent a non-chemical element, or<br>- the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).<br><br>If any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.|
|concentration|[number]|true|none|MUST be a list of floats, with same length as `chemical_symbols`. The numbers represent the relative concentration of the corresponding chemical symbol in this species. The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:<br><br>- Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.<br>- Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.<br><br>Note that concentrations are uncorrelated between different site (even of the same species).|
|mass|[number]|false|none|If present MUST be a list of floats expressed in a.m.u.<br>Elements denoting vacancies MUST have masses equal to 0.|
|name|string|true|none|Gives the name of the species; the **name** value MUST be unique in the `species` list.|
|nattached|[integer]|false|none|If provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the :field:`attached` key.|
|original_name|string|false|none|Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.<br><br>Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.|

<h2 id="tocS_StructureFeatures">StructureFeatures</h2>
<!-- backwards compatibility -->
<a id="schemastructurefeatures"></a>
<a id="schema_StructureFeatures"></a>
<a id="tocSstructurefeatures"></a>
<a id="tocsstructurefeatures"></a>

```json
"disorder"
```

Enumeration of structure_features values

<h2 id="tocS_StructureRelationship">StructureRelationship</h2>
<!-- backwards compatibility -->
<a id="schemastructurerelationship"></a>
<a id="schema_StructureRelationship"></a>
<a id="tocSstructurerelationship"></a>
<a id="tocsstructurerelationship"></a>

```json
{
  "data": {
    "id": "string",
    "meta": {
      "description": "string"
    },
    "type": "string"
  },
  "links": {
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {}
}
```

Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BaseRelationshipResource](#schemabaserelationshipresource) \| [[BaseRelationshipResource](#schemabaserelationshipresource)]|false|none|Resource linkage|
|links|object|false|none|a links object containing at least one of the following: self, related|
|meta|object|false|none|a meta object that contains non-standard meta-information about the relationship.|

<h2 id="tocS_StructureResource">StructureResource</h2>
<!-- backwards compatibility -->
<a id="schemastructureresource"></a>
<a id="schema_StructureResource"></a>
<a id="tocSstructureresource"></a>
<a id="tocsstructureresource"></a>

```json
{
  "attributes": {
    "assemblies": [
      {
        "group_probabilities": [
          0
        ],
        "sites_in_groups": [
          [
            0
          ]
        ]
      }
    ],
    "cartesian_site_positions": [
      [
        0,
        0,
        0
      ]
    ],
    "chemical_formula_anonymous": "string",
    "chemical_formula_descriptive": "string",
    "chemical_formula_hill": "string",
    "chemical_formula_reduced": "string",
    "dimension_types": [
      0,
      0,
      0
    ],
    "elements": [
      "string"
    ],
    "elements_ratios": [
      0
    ],
    "immutable_id": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "lattice_vectors": [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        0
      ]
    ],
    "nelements": 0,
    "nperiodic_dimensions": 0,
    "nsites": 0,
    "species": [
      {
        "attached": [
          "string"
        ],
        "chemical_symbols": [
          "string"
        ],
        "concentration": [
          0
        ],
        "mass": [
          0
        ],
        "name": "string",
        "nattached": [
          0
        ],
        "original_name": "string"
      }
    ],
    "species_at_sites": [
      "string"
    ],
    "structure_features": [
      "disorder"
    ]
  },
  "id": "string",
  "links": {
    "self": "http://example.com"
  },
  "meta": {},
  "relationships": {
    "references": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    },
    "structures": {
      "data": {
        "id": "string",
        "meta": {
          "description": "string"
        },
        "type": "string"
      },
      "links": {
        "related": "http://example.com",
        "self": "http://example.com"
      },
      "meta": {}
    }
  },
  "type": "string"
}
```

Representing a structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[StructureResourceAttributes](#schemastructureresourceattributes)|true|none|This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.|
|id|string|true|none|An entry's ID as defined in section Definition of Terms.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br><br>- **Examples**:<br>    - `"db/1234567"`<br>    - `"cod/2000000"`<br>    - `"cod/2000000@1234567"`<br>    - `"nomad/L1234567890"`<br>    - `"42"`|
|links|object|false|none|a links object containing links related to the resource.|
|meta|object|false|none|a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.|
|relationships|object|false|none|A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).<br>The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.|
|type|string|true|none|The name of the type of an entry.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response.<br>    - MUST be an existing entry type.<br>    - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.<br><br>- **Examples**:<br>    - `"structures"`|

<h2 id="tocS_StructureResourceAttributes">StructureResourceAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastructureresourceattributes"></a>
<a id="schema_StructureResourceAttributes"></a>
<a id="tocSstructureresourceattributes"></a>
<a id="tocsstructureresourceattributes"></a>

```json
{
  "assemblies": [
    {
      "group_probabilities": [
        0
      ],
      "sites_in_groups": [
        [
          0
        ]
      ]
    }
  ],
  "cartesian_site_positions": [
    [
      0,
      0,
      0
    ]
  ],
  "chemical_formula_anonymous": "string",
  "chemical_formula_descriptive": "string",
  "chemical_formula_hill": "string",
  "chemical_formula_reduced": "string",
  "dimension_types": [
    0,
    0,
    0
  ],
  "elements": [
    "string"
  ],
  "elements_ratios": [
    0
  ],
  "immutable_id": "string",
  "last_modified": "1970-01-01T00:00:00Z",
  "lattice_vectors": [
    [
      0,
      0,
      0
    ],
    [
      0,
      0,
      0
    ],
    [
      0,
      0,
      0
    ]
  ],
  "nelements": 0,
  "nperiodic_dimensions": 0,
  "nsites": 0,
  "species": [
    {
      "attached": [
        "string"
      ],
      "chemical_symbols": [
        "string"
      ],
      "concentration": [
        0
      ],
      "mass": [
        0
      ],
      "name": "string",
      "nattached": [
        0
      ],
      "original_name": "string"
    }
  ],
  "species_at_sites": [
    "string"
  ],
  "structure_features": [
    "disorder"
  ]
}
```

This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assemblies|[[Assembly](#schemaassembly)]|false|none|A description of groups of sites that are statistically correlated.<br><br>- **Type**: list of dictionary with keys:<br>    - `sites_in_groups`: list of list of integers (REQUIRED)<br>    - `group_probabilities`: list of floats (REQUIRED)<br><br>- **Requirements/Conventions**:<br>    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>        If supported, filters MAY support only a subset of comparison operators.<br>    - The property SHOULD be `null` for entries that have no partial occupancies.<br>    - If present, the correct flag MUST be set in the list `structure_features`.<br>    - Client implementations MUST check its presence (as its presence changes the interpretation of the structure).<br>    - If present, it MUST be a list of dictionaries, each of which represents an assembly and MUST have the following two keys:<br>        - **sites_in_groups**: Index of the sites (0-based) that belong to each group for each assembly.<br><br>            Example: `[[1], [2]]`: two groups, one with the second site, one with the third.<br>            Example: `[[1,2], [3]]`: one group with the second and third site, one with the fourth.<br><br>        - **group_probabilities**: Statistical probability of each group. It MUST have the same length as `sites_in_groups`.<br>            It SHOULD sum to one.<br>            See below for examples of how to specify the probability of the occurrence of a vacancy.<br>            The possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.<br><br>    - If a site is not present in any group, it means that it is present with 100 % probability (as if no assembly was specified).<br>    - A site MUST NOT appear in more than one group.<br><br>- **Examples** (for each entry of the assemblies list):<br>    - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.<br>        Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.<br>    - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.<br>        The second group is formed by the fourth site.<br>        Sites of the first group (the second and the third) are never present at the same time as the fourth site.<br>        30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).<br><br>- **Notes**:<br>    - Assemblies are essential to represent, for instance, the situation where an atom can statistically occupy two different positions (sites).<br><br>    - By defining groups, it is possible to represent, e.g., the case where a functional molecule (and not just one atom) is either present or absent (or the case where it it is present in two conformations)<br><br>    - Considerations on virtual alloys and on vacancies: In the special case of a virtual alloy, these specifications allow two different, equivalent ways of specifying them.<br>        For instance, for a site at the origin with 30 % probability of being occupied by Si, 50 % probability of being occupied by Ge, and 20 % of being a vacancy, the following two representations are possible:<br><br>        - Using a single species:<br>            ```json<br>            {<br>              "cartesian_site_positions": [[0,0,0]],<br>              "species_at_sites": ["SiGe-vac"],<br>              "species": [<br>              {<br>                "name": "SiGe-vac",<br>                "chemical_symbols": ["Si", "Ge", "vacancy"],<br>                "concentration": [0.3, 0.5, 0.2]<br>              }<br>              ]<br>              // ...<br>            }<br>            ```<br><br>        - Using multiple species and the assemblies:<br>            ```json<br>            {<br>              "cartesian_site_positions": [ [0,0,0], [0,0,0], [0,0,0] ],<br>              "species_at_sites": ["Si", "Ge", "vac"],<br>              "species": [<br>                { "name": "Si", "chemical_symbols": ["Si"], "concentration": [1.0] },<br>                { "name": "Ge", "chemical_symbols": ["Ge"], "concentration": [1.0] },<br>                { "name": "vac", "chemical_symbols": ["vacancy"], "concentration": [1.0] }<br>              ],<br>              "assemblies": [<br>                {<br>              "sites_in_groups": [ [0], [1], [2] ],<br>              "group_probabilities": [0.3, 0.5, 0.2]<br>                }<br>              ]<br>              // ...<br>            }<br>            ```<br><br>    - It is up to the database provider to decide which representation to use, typically depending on the internal format in which the structure is stored.<br>        However, given a structure identified by a unique ID, the API implementation MUST always provide the same representation for it.<br><br>    - The probabilities of occurrence of different assemblies are uncorrelated.<br>        So, for instance in the following case with two assemblies:<br>        ```json<br>        {<br>          "assemblies": [<br>            {<br>              "sites_in_groups": [ [0], [1] ],<br>              "group_probabilities": [0.2, 0.8],<br>            },<br>            {<br>              "sites_in_groups": [ [2], [3] ],<br>              "group_probabilities": [0.3, 0.7]<br>            }<br>          ]<br>        }<br>        ```<br><br>        Site 0 is present with a probability of 20 % and site 1 with a probability of 80 %. These two sites are correlated (either site 0 or 1 is present). Similarly, site 2 is present with a probability of 30 % and site 3 with a probability of 70 %.<br>        These two sites are correlated (either site 2 or 3 is present).<br>        However, the presence or absence of sites 0 and 1 is not correlated with the presence or absence of sites 2 and 3 (in the specific example, the pair of sites (0, 2) can occur with 0.2*0.3 = 6 % probability; the pair (0, 3) with 0.2*0.7 = 14 % probability; the pair (1, 2) with 0.8*0.3 = 24 % probability; and the pair (1, 3) with 0.8*0.7 = 56 % probability).|
|cartesian_site_positions|[[number]]|true|none|Cartesian positions of each site in the structure.<br>A site is usually used to describe positions of atoms; what atoms can be encountered at a given site is conveyed by the `species_at_sites` property, and the species themselves are described in the `species` property.<br><br>- **Type**: list of list of floats<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>      If supported, filters MAY support only a subset of comparison operators.<br>    - It MUST be a list of length equal to the number of sites in the structure, where every element is a list of the three Cartesian coordinates of a site expressed as float values in the unit angstrom (Å).<br>    - An entry MAY have multiple sites at the same Cartesian position (for a relevant use of this, see e.g., the property `assemblies`).<br><br>- **Examples**:<br>    - `[[0,0,0],[0,0,2]]` indicates a structure with two sites, one sitting at the origin and one along the (positive) *z*-axis, 2 Å away from the origin.|
|chemical_formula_anonymous|string \| null|true|none|The anonymous formula is the `chemical_formula_reduced`, but where the elements are instead first ordered by their chemical proportion number, and then, in order left to right, replaced by anonymous symbols A, B, C, ..., Z, Aa, Ba, ..., Za, Ab, Bb, ... and so on.<br><br>- **Type**: string<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property.<br>      However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).<br><br>- **Examples**:<br>    - `"A2B"`<br>    - `"A42B42C16D12E10F9G5"`<br><br>- **Querying**:<br>    - A filter that matches an exactly given formula is `chemical_formula_anonymous="A2B"`.|
|chemical_formula_descriptive|string \| null|true|none|The chemical formula for a structure as a string in a form chosen by the API implementation.<br><br>- **Type**: string<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - The chemical formula is given as a string consisting of properly capitalized element symbols followed by integers or decimal numbers, balanced parentheses, square, and curly brackets `(`,`)`, `[`,`]`, `{`, `}`, commas, the `+`, `-`, `:` and `=` symbols. The parentheses are allowed to be followed by a number. Spaces are allowed anywhere except within chemical symbols. The order of elements and any groupings indicated by parentheses or brackets are chosen freely by the API implementation.<br>    - The string SHOULD be arithmetically consistent with the element ratios in the `chemical_formula_reduced` property.<br>    - It is RECOMMENDED, but not mandatory, that symbols, parentheses and brackets, if used, are used with the meanings prescribed by [IUPAC's Nomenclature of Organic Chemistry](https://www.qmul.ac.uk/sbcs/iupac/bibliog/blue.html).<br><br>- **Examples**:<br>    - `"(H2O)2 Na"`<br>    - `"NaCl"`<br>    - `"CaCO3"`<br>    - `"CCaO3"`<br>    - `"(CH3)3N+ - [CH2]2-OH = Me3N+ - CH2 - CH2OH"`<br><br>- **Query examples**:<br>    - Note: the free-form nature of this property is likely to make queries on it across different databases inconsistent.<br>    - A filter that matches an exactly given formula: `chemical_formula_descriptive="(H2O)2 Na"`.<br>    - A filter that does a partial match: `chemical_formula_descriptive CONTAINS "H2O"`.|
|chemical_formula_hill|string|false|none|The chemical formula for a structure in [Hill form](https://dx.doi.org/10.1021/ja02046a005) with element symbols followed by integer chemical proportion numbers. The proportion number MUST be omitted if it is 1.<br><br>- **Type**: string<br><br>- **Requirements/Conventions**:<br>    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>      If supported, only a subset of the filter features MAY be supported.<br>    - The overall scale factor of the chemical proportions is chosen such that the resulting values are integers that indicate the most chemically relevant unit of which the system is composed.<br>      For example, if the structure is a repeating unit cell with four hydrogens and four oxygens that represents two hydroperoxide molecules, `chemical_formula_hill` is `"H2O2"` (i.e., not `"HO"`, nor `"H4O4"`).<br>    - If the chemical insight needed to ascribe a Hill formula to the system is not present, the property MUST be handled as unset.<br>    - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").<br>    - Elements MUST be placed in [Hill order](https://dx.doi.org/10.1021/ja02046a005), followed by their integer chemical proportion number.<br>      Hill order means: if carbon is present, it is placed first, and if also present, hydrogen is placed second.<br>      After that, all other elements are ordered alphabetically.<br>      If carbon is not present, all elements are ordered alphabetically.<br>    - If the system has sites with partial occupation and the total occupations of each element do not all sum up to integers, then the Hill formula SHOULD be handled as unset.<br>    - No spaces or separators are allowed.<br><br>- **Examples**:<br>    - `"H2O2"`<br><br>- **Query examples**:<br>    - A filter that matches an exactly given formula is `chemical_formula_hill="H2O2"`.|
|chemical_formula_reduced|string \| null|true|none|The reduced chemical formula for a structure as a string with element symbols and integer chemical proportion numbers.<br>The proportion number MUST be omitted if it is 1.<br><br>- **Type**: string<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property.<br>      However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).<br>      Intricate queries on formula components are instead suggested to be formulated using set-type filter operators on the multi valued `elements` and `elements_ratios` properties.<br>    - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").<br>    - Elements MUST be placed in alphabetical order, followed by their integer chemical proportion number.<br>    - For structures with no partial occupation, the chemical proportion numbers are the smallest integers for which the chemical proportion is exactly correct.<br>    - For structures with partial occupation, the chemical proportion numbers are integers that within reasonable approximation indicate the correct chemical proportions. The precise details of how to perform the rounding is chosen by the API implementation.<br>    - No spaces or separators are allowed.<br><br>- **Examples**:<br>    - `"H2NaO"`<br>    - `"ClNa"`<br>    - `"CCaO3"`<br><br>- **Query examples**:<br>    - A filter that matches an exactly given formula is `chemical_formula_reduced="H2NaO"`.|
|dimension_types|[[Periodicity](#schemaperiodicity)]|true|none|List of three integers.<br>For each of the three directions indicated by the three lattice vectors (see property `lattice_vectors`), this list indicates if the direction is periodic (value `1`) or non-periodic (value `0`).<br>Note: the elements in this list each refer to the direction of the corresponding entry in `lattice_vectors` and *not* the Cartesian x, y, z directions.<br><br>- **Type**: list of integers.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>    - MUST be a list of length 3.<br>    - Each integer element MUST assume only the value 0 or 1.<br><br>- **Examples**:<br>    - For a molecule: `[0, 0, 0]`<br>    - For a wire along the direction specified by the third lattice vector: `[0, 0, 1]`<br>    - For a 2D surface/slab, periodic on the plane defined by the first and third lattice vectors: `[1, 0, 1]`<br>    - For a bulk 3D system: `[1, 1, 1]`|
|elements|[string]|true|none|Symbols of the different elements present in the structure.<br><br>- **Type**: list of strings.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - The strings are the chemical symbols, i.e., either a single uppercase letter or an uppercase letter followed by a number of lowercase letters.<br>    - The order MUST be alphabetical.<br>    - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements_ratios`, if the latter is provided.<br>    - Note: This property SHOULD NOT contain the string "X" to indicate non-chemical elements or "vacancy" to indicate vacancies (in contrast to the field `chemical_symbols` for the `species` property).<br><br>- **Examples**:<br>    - `["Si"]`<br>    - `["Al","O","Si"]`<br><br>- **Query examples**:<br>    - A filter that matches all records of structures that contain Si, Al **and** O, and possibly other elements: `elements HAS ALL "Si", "Al", "O"`.<br>    - To match structures with exactly these three elements, use `elements HAS ALL "Si", "Al", "O" AND elements LENGTH 3`.<br>    - Note: length queries on this property can be equivalently formulated by filtering on the `nelements`_ property directly.|
|elements_ratios|[number]|true|none|Relative proportions of different elements in the structure.<br><br>- **Type**: list of floats<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - Composed by the proportions of elements in the structure as a list of floating point numbers.<br>    - The sum of the numbers MUST be 1.0 (within floating point accuracy)<br>    - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements`, if the latter is provided.<br><br>- **Examples**:<br>    - `[1.0]`<br>    - `[0.3333333333333333, 0.2222222222222222, 0.4444444444444444]`<br><br>- **Query examples**:<br>    - Note: Useful filters can be formulated using the set operator syntax for correlated values.<br>      However, since the values are floating point values, the use of equality comparisons is generally inadvisable.<br>    - OPTIONAL: a filter that matches structures where approximately 1/3 of the atoms in the structure are the element Al is: `elements:elements_ratios HAS ALL "Al":>0.3333, "Al":<0.3334`.|
|immutable_id|string|false|none|The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.<br><br>- **Type**: string.<br><br>- **Requirements/Conventions**:<br>    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br><br>- **Examples**:<br>    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`<br>    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)|
|last_modified|string(date-time) \| null|true|none|Date and time representing when the entry was last modified.<br><br>- **Type**: timestamp.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.<br><br>- **Example**:<br>    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)|
|lattice_vectors|[[number]]|true|none|The three lattice vectors in Cartesian coordinates, in ångström (Å).<br><br>- **Type**: list of list of floats or unknown values.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>      If supported, filters MAY support only a subset of comparison operators.<br>    - MUST be a list of three vectors *a*, *b*, and *c*, where each of the vectors MUST BE a list of the vector's coordinates along the x, y, and z Cartesian coordinates.<br>      (Therefore, the first index runs over the three lattice vectors and the second index runs over the x, y, z Cartesian coordinates).<br>    - For databases that do not define an absolute Cartesian system (e.g., only defining the length and angles between vectors), the first lattice vector SHOULD be set along *x* and the second on the *xy*-plane.<br>    - MUST always contain three vectors of three coordinates each, independently of the elements of property `dimension_types`.<br>      The vectors SHOULD by convention be chosen so the determinant of the `lattice_vectors` matrix is different from zero.<br>      The vectors in the non-periodic directions have no significance beyond fulfilling these requirements.<br>    - The coordinates of the lattice vectors of non-periodic dimensions (i.e., those dimensions for which `dimension_types` is `0`) MAY be given as a list of all `null` values.<br>        If a lattice vector contains the value `null`, all coordinates of that lattice vector MUST be `null`.<br><br>- **Examples**:<br>    - `[[4.0,0.0,0.0],[0.0,4.0,0.0],[0.0,1.0,4.0]]` represents a cell, where the first vector is `(4, 0, 0)`, i.e., a vector aligned along the `x` axis of length 4 Å; the second vector is `(0, 4, 0)`; and the third vector is `(0, 1, 4)`.|
|nelements|integer \| null|true|none|Number of different elements in the structure as an integer.<br><br>- **Type**: integer<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - MUST be equal to the lengths of the list properties `elements` and `elements_ratios`, if they are provided.<br><br>- **Examples**:<br>    - `3`<br><br>- **Querying**:<br>    - Note: queries on this property can equivalently be formulated using `elements LENGTH`.<br>    - A filter that matches structures that have exactly 4 elements: `nelements=4`.<br>    - A filter that matches structures that have between 2 and 7 elements: `nelements>=2 AND nelements<=7`.|
|nperiodic_dimensions|integer \| null|true|none|An integer specifying the number of periodic dimensions in the structure, equivalent to the number of non-zero entries in `dimension_types`.<br><br>- **Type**: integer<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br>    - The integer value MUST be between 0 and 3 inclusive and MUST be equal to the sum of the items in the `dimension_types` property.<br>    - This property only reflects the treatment of the lattice vectors provided for the structure, and not any physical interpretation of the dimensionality of its contents.<br><br>- **Examples**:<br>    - `2` should be indicated in cases where `dimension_types` is any of `[1, 1, 0]`, `[1, 0, 1]`, `[0, 1, 1]`.<br><br>- **Query examples**:<br>    - Match only structures with exactly 3 periodic dimensions: `nperiodic_dimensions=3`<br>    - Match all structures with 2 or fewer periodic dimensions: `nperiodic_dimensions<=2`|
|nsites|integer \| null|true|none|An integer specifying the length of the `cartesian_site_positions` property.<br><br>- **Type**: integer<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: MUST be a queryable property with support for all mandatory filter features.<br><br>- **Examples**:<br>    - `42`<br><br>- **Query examples**:<br>    - Match only structures with exactly 4 sites: `nsites=4`<br>    - Match structures that have between 2 and 7 sites: `nsites>=2 AND nsites<=7`|
|species|[[Species](#schemaspecies)]|true|none|A list describing the species of the sites of this structure.<br>Species can represent pure chemical elements, virtual-crystal atoms representing a statistical occupation of a given site by multiple chemical elements, and/or a location to which there are attached atoms, i.e., atoms whose precise location are unknown beyond that they are attached to that position (frequently used to indicate hydrogen atoms attached to another element, e.g., a carbon with three attached hydrogens might represent a methyl group, -CH3).<br><br>- **Type**: list of dictionary with keys:<br>    - `name`: string (REQUIRED)<br>    - `chemical_symbols`: list of strings (REQUIRED)<br>    - `concentration`: list of float (REQUIRED)<br>    - `attached`: list of strings (REQUIRED)<br>    - `nattached`: list of integers (OPTIONAL)<br>    - `mass`: list of floats (OPTIONAL)<br>    - `original_name`: string (OPTIONAL).<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>        If supported, filters MAY support only a subset of comparison operators.<br>    - Each list member MUST be a dictionary with the following keys:<br>        - **name**: REQUIRED; gives the name of the species; the **name** value MUST be unique in the `species` list;<br>        - **chemical_symbols**: REQUIRED; MUST be a list of strings of all chemical elements composing this species.<br>          Each item of the list MUST be one of the following:<br>            - a valid chemical-element symbol, or<br>            - the special value `"X"` to represent a non-chemical element, or<br>            - the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).<br><br>          If any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.<br><br>        - **concentration**: REQUIRED; MUST be a list of floats, with same length as `chemical_symbols`.<br>          The numbers represent the relative concentration of the corresponding chemical symbol in this species.<br>          The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:<br><br>            - Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.<br>            - Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.<br><br>            Note that concentrations are uncorrelated between different sites (even of the same species).<br><br>        - **attached**: OPTIONAL; if provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element.<br><br>        - **nattached**: OPTIONAL; if provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the `attached` key.<br><br>          The implementation MUST include either both or none of the `attached` and `nattached` keys, and if they are provided, they MUST be of the same length.<br>          Furthermore, if they are provided, the `structure_features` property MUST include the string `site_attachments`.<br><br>        - **mass**: OPTIONAL. If present MUST be a list of floats, with the same length as `chemical_symbols`, providing element masses expressed in a.m.u.<br>          Elements denoting vacancies MUST have masses equal to 0.<br><br>        - **original_name**: OPTIONAL. Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.<br><br>          Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.<br><br>          The main use of this field is for source databases that use species names, containing characters that are not allowed (see description of the list property `species_at_sites`).<br><br>    - For systems that have only species formed by a single chemical symbol, and that have at most one species per chemical symbol, SHOULD use the chemical symbol as species name (e.g., `"Ti"` for titanium, `"O"` for oxygen, etc.)<br>      However, note that this is OPTIONAL, and client implementations MUST NOT assume that the key corresponds to a chemical symbol, nor assume that if the species name is a valid chemical symbol, that it represents a species with that chemical symbol.<br>      This means that a species `{"name": "C", "chemical_symbols": ["Ti"], "concentration": [1.0]}` is valid and represents a titanium species (and *not* a carbon species).<br>    - It is NOT RECOMMENDED that a structure includes species that do not have at least one corresponding site.<br><br>- **Examples**:<br>    - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.<br>    - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.<br>    - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.<br>    - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.<br>    - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.<br>    - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.|
|species_at_sites|[string]|true|none|Name of the species at each site (where values for sites are specified with the same order of the property `cartesian_site_positions`).<br>The properties of the species are found in the property `species`.<br><br>- **Type**: list of strings.<br><br>- **Requirements/Conventions**:<br>    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.<br>    - **Query**: Support for queries on this property is OPTIONAL.<br>      If supported, filters MAY support only a subset of comparison operators.<br>    - MUST have length equal to the number of sites in the structure (first dimension of the list property `cartesian_site_positions`).<br>    - Each species name mentioned in the `species_at_sites` list MUST be described in the list property `species` (i.e. for each value in the `species_at_sites` list there MUST exist exactly one dictionary in the `species` list with the `name` attribute equal to the corresponding `species_at_sites` value).<br>    - Each site MUST be associated only to a single species.<br>      **Note**: However, species can represent mixtures of atoms, and multiple species MAY be defined for the same chemical element.<br>      This latter case is useful when different atoms of the same type need to be grouped or distinguished, for instance in simulation codes to assign different initial spin states.<br><br>- **Examples**:<br>    - `["Ti","O2"]` indicates that the first site is hosting a species labeled `"Ti"` and the second a species labeled `"O2"`.<br>    - `["Ac", "Ac", "Ag", "Ir"]` indicating the first two sites contains the `"Ac"` species, while the third and fourth sites contain the `"Ag"` and `"Ir"` species, respectively.|
|structure_features|[[StructureFeatures](#schemastructurefeatures)]|true|none|A list of strings that flag which special features are used by the structure.<br><br>- **Type**: list of strings<br><br>- **Requirements/Conventions**:<br>    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.<br>    - **Query**: MUST be a queryable property.<br>    Filters on the list MUST support all mandatory HAS-type queries.<br>    Filter operators for comparisons on the string components MUST support equality, support for other comparison operators are OPTIONAL.<br>    - MUST be an empty list if no special features are used.<br>    - MUST be sorted alphabetically.<br>    - If a special feature listed below is used, the list MUST contain the corresponding string.<br>    - If a special feature listed below is not used, the list MUST NOT contain the corresponding string.<br>    - **List of strings used to indicate special structure features**:<br>        - `disorder`: this flag MUST be present if any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element.<br>        - `implicit_atoms`: this flag MUST be present if the structure contains atoms that are not assigned to sites via the property `species_at_sites` (e.g., because their positions are unknown).<br>           When this flag is present, the properties related to the chemical formula will likely not match the type and count of atoms represented by the `species_at_sites`, `species` and `assemblies` properties.<br>        - `site_attachments`: this flag MUST be present if any one entry in the `species` list includes `attached` and `nattached`.<br>        - `assemblies`: this flag MUST be present if the property `assemblies` is present.<br><br>- **Examples**: A structure having implicit atoms and using assemblies: `["assemblies", "implicit_atoms"]`|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension_types|0|
|dimension_types|1|
|structure_features|disorder|
|structure_features|implicit_atoms|
|structure_features|site_attachments|
|structure_features|assemblies|

<h2 id="tocS_StructureResponseMany">StructureResponseMany</h2>
<!-- backwards compatibility -->
<a id="schemastructureresponsemany"></a>
<a id="schema_StructureResponseMany"></a>
<a id="tocSstructureresponsemany"></a>
<a id="tocsstructureresponsemany"></a>

```json
{
  "data": [
    {
      "attributes": {
        "assemblies": [
          {
            "group_probabilities": [
              0
            ],
            "sites_in_groups": [
              [
                0
              ]
            ]
          }
        ],
        "cartesian_site_positions": [
          [
            0,
            0,
            0
          ]
        ],
        "chemical_formula_anonymous": "string",
        "chemical_formula_descriptive": "string",
        "chemical_formula_hill": "string",
        "chemical_formula_reduced": "string",
        "dimension_types": [
          0,
          0,
          0
        ],
        "elements": [
          "string"
        ],
        "elements_ratios": [
          0
        ],
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "lattice_vectors": [
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ]
        ],
        "nelements": 0,
        "nperiodic_dimensions": 0,
        "nsites": 0,
        "species": [
          {
            "attached": [
              "string"
            ],
            "chemical_symbols": [
              "string"
            ],
            "concentration": [
              0
            ],
            "mass": [
              0
            ],
            "name": "string",
            "nattached": [
              0
            ],
            "original_name": "string"
          }
        ],
        "species_at_sites": [
          "string"
        ],
        "structure_features": [
          "disorder"
        ]
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StructureResource](#schemastructureresource)] \| [object]|true|none|List of unique OPTIMADE structures entry resource objects|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[EntryResource](#schemaentryresource)] \| [object]|false|none|none|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_StructureResponseOne">StructureResponseOne</h2>
<!-- backwards compatibility -->
<a id="schemastructureresponseone"></a>
<a id="schema_StructureResponseOne"></a>
<a id="tocSstructureresponseone"></a>
<a id="tocsstructureresponseone"></a>

```json
{
  "data": {
    "attributes": {
      "assemblies": [
        {
          "group_probabilities": [
            0
          ],
          "sites_in_groups": [
            [
              0
            ]
          ]
        }
      ],
      "cartesian_site_positions": [
        [
          0,
          0,
          0
        ]
      ],
      "chemical_formula_anonymous": "string",
      "chemical_formula_descriptive": "string",
      "chemical_formula_hill": "string",
      "chemical_formula_reduced": "string",
      "dimension_types": [
        0,
        0,
        0
      ],
      "elements": [
        "string"
      ],
      "elements_ratios": [
        0
      ],
      "immutable_id": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "lattice_vectors": [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ],
      "nelements": 0,
      "nperiodic_dimensions": 0,
      "nsites": 0,
      "species": [
        {
          "attached": [
            "string"
          ],
          "chemical_symbols": [
            "string"
          ],
          "concentration": [
            0
          ],
          "mass": [
            0
          ],
          "name": "string",
          "nattached": [
            0
          ],
          "original_name": "string"
        }
      ],
      "species_at_sites": [
        "string"
      ],
      "structure_features": [
        "disorder"
      ]
    },
    "id": "string",
    "links": {
      "self": "http://example.com"
    },
    "meta": {},
    "relationships": {
      "references": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      },
      "structures": {
        "data": {
          "id": "string",
          "meta": {
            "description": "string"
          },
          "type": "string"
        },
        "links": {
          "related": "http://example.com",
          "self": "http://example.com"
        },
        "meta": {}
      }
    },
    "type": "string"
  },
  "errors": [
    {
      "code": "string",
      "detail": "string",
      "id": "string",
      "links": {
        "about": "http://example.com"
      },
      "meta": {},
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ],
  "included": [
    {
      "attributes": {
        "immutable_id": "string",
        "last_modified": "1970-01-01T00:00:00Z"
      },
      "id": "string",
      "links": {
        "self": "http://example.com"
      },
      "meta": {},
      "relationships": {
        "references": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        },
        "structures": {
          "data": {
            "id": "string",
            "meta": {
              "description": "string"
            },
            "type": "string"
          },
          "links": {
            "related": "http://example.com",
            "self": "http://example.com"
          },
          "meta": {}
        }
      },
      "type": "string"
    }
  ],
  "jsonapi": {
    "meta": {},
    "version": "1.0"
  },
  "links": {
    "first": "http://example.com",
    "last": "http://example.com",
    "next": "http://example.com",
    "prev": "http://example.com",
    "related": "http://example.com",
    "self": "http://example.com"
  },
  "meta": {
    "api_version": "string",
    "data_available": 0,
    "data_returned": 0,
    "implementation": {
      "homepage": "http://example.com",
      "issue_tracker": "http://example.com",
      "maintainer": {
        "email": "user@example.com"
      },
      "name": "string",
      "source_url": "http://example.com",
      "version": "string"
    },
    "last_id": "string",
    "more_data_available": true,
    "provider": {
      "description": "string",
      "homepage": "http://example.com",
      "name": "string",
      "prefix": "string"
    },
    "query": {
      "representation": "string"
    },
    "response_message": "string",
    "schema": "http://example.com",
    "time_stamp": "1970-01-01T00:00:00Z",
    "warnings": [
      {
        "code": "string",
        "detail": "string",
        "id": "string",
        "links": {
          "about": "http://example.com"
        },
        "meta": {},
        "source": {
          "parameter": "string",
          "pointer": "string"
        },
        "title": "string",
        "type": "string"
      }
    ]
  }
}
```

errors are not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[StructureResource](#schemastructureresource) \| object|true|none|A single structures entry resource|
|errors|[[Error](#schemaerror)]|false|none|A list of unique errors|
|included|[[EntryResource](#schemaentryresource)] \| [object]|false|none|none|
|jsonapi|object|false|none|Information about the JSON API used|
|links|object|false|none|Links associated with the primary data or errors|
|meta|object|true|none|A meta object containing non-standard information|

<h2 id="tocS_ToplevelLinks">ToplevelLinks</h2>
<!-- backwards compatibility -->
<a id="schematoplevellinks"></a>
<a id="schema_ToplevelLinks"></a>
<a id="tocStoplevellinks"></a>
<a id="tocstoplevellinks"></a>

```json
{
  "first": "http://example.com",
  "last": "http://example.com",
  "next": "http://example.com",
  "prev": "http://example.com",
  "related": "http://example.com",
  "self": "http://example.com"
}
```

A set of Links objects, possibly including pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string(uri) \| [Link](#schemalink)|false|none|The first page of data|
|last|string(uri) \| [Link](#schemalink)|false|none|The last page of data|
|next|string(uri) \| [Link](#schemalink)|false|none|The next page of data|
|prev|string(uri) \| [Link](#schemalink)|false|none|The previous page of data|
|related|string(uri) \| [Link](#schemalink)|false|none|A related resource link|
|self|string(uri) \| [Link](#schemalink)|false|none|A link to itself|

<h2 id="tocS_Warnings">Warnings</h2>
<!-- backwards compatibility -->
<a id="schemawarnings"></a>
<a id="schema_Warnings"></a>
<a id="tocSwarnings"></a>
<a id="tocswarnings"></a>

```json
{
  "code": "string",
  "detail": "string",
  "id": "string",
  "links": {
    "about": "http://example.com"
  },
  "meta": {},
  "source": {
    "parameter": "string",
    "pointer": "string"
  },
  "title": "string",
  "type": "string"
}
```

OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.

From the specification:

A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.

Note: Must be named "Warnings", since "Warning" is a built-in Python class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|an application-specific error code, expressed as a string value.|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|id|string|false|none|A unique identifier for this particular occurrence of the problem.|
|links|object|false|none|A links object storing about|
|meta|object|false|none|a meta object containing non-standard meta-information about the error.|
|source|object|false|none|An object containing references to the source of the error|
|title|string|false|none|A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.|
|type|string|true|none|Warnings must be of type "warning"|
