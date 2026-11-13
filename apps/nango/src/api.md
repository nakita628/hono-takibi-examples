<h1 id="nango-api">Nango API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Nango API specs used to authorize & sync data with external APIs.

Base URLs:

* <a href="https://api.nango.dev">https://api.nango.dev</a> - Production server

* <a href="http://localhost:3003">http://localhost:3003</a> - Local server

<a href="https://nango.dev/docs/reference/backend/http-api/authentication">External documentation</a>

# Authentication

- HTTP Authentication, scheme: bearer An Environment API key from your Nango environment, or an Account API key for account-level endpoints.

<h1 id="nango-api-default">Default</h1>

## List all providers

> Code samples

```bash
curl https://api.nango.dev/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /providers`

Returns a list of all available providers

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "display_name": "string",
      "auth_mode": "OAUTH1",
      "proxy": {
        "base_url": "string",
        "headers": {},
        "query": {
          "api_key": "string"
        },
        "retry": {
          "at": "string",
          "after": "string"
        },
        "decompress": true,
        "paginate": null,
        "verification": {
          "method": "string",
          "endpoint": "string",
          "base_url_override": "string",
          "headers": {}
        }
      },
      "authorization_url": "string",
      "authorization_url_encode": true,
      "access_token_url": "string",
      "token_url_encode": true,
      "authorization_params": {},
      "scope_separator": "string",
      "default_scopes": [
        "string"
      ],
      "token_url": "string",
      "token_params": {},
      "authorization_url_replacements": {},
      "authorization_url_fragment": "string",
      "redirect_uri_metadata": [
        "string"
      ],
      "token_response_metadata": [
        "string"
      ],
      "docs": "string",
      "token_expiration_buffer": 0,
      "webhook_routing_script": "string",
      "webhook_user_defined_secret": true,
      "post_connection_script": "string",
      "pre_connection_deletion_script": "string",
      "categories": [
        "string"
      ],
      "connection_configuration": [
        "string"
      ],
      "connection_config": {
        "type": "string",
        "title": "string",
        "description": "string",
        "example": "string",
        "pattern": "string",
        "format": "hostname",
        "optional": true,
        "order": 0,
        "default_value": "string",
        "hidden": true,
        "prefix": "string",
        "suffix": "string",
        "doc_section": "string",
        "secret": true,
        "automated": true,
        "enum": [
          "string"
        ],
        "warnings": {
          "property1": "string",
          "property2": "string"
        },
        "visible_when": {
          "field": "string",
          "equals": "string"
        }
      },
      "credentials": {
        "apiKey": {
          "type": "string",
          "title": "string",
          "description": "string",
          "example": "string",
          "pattern": "string",
          "format": "hostname",
          "optional": true,
          "order": 0,
          "default_value": "string",
          "hidden": true,
          "prefix": "string",
          "suffix": "string",
          "doc_section": "string",
          "secret": true,
          "automated": true,
          "enum": [
            "string"
          ],
          "warnings": {
            "property1": "string",
            "property2": "string"
          },
          "visible_when": {
            "field": "string",
            "equals": "string"
          }
        }
      },
      "integration_config": {
        "property1": {
          "type": "string",
          "title": "string",
          "description": "string",
          "example": "string",
          "pattern": "string",
          "format": "hostname",
          "optional": true,
          "order": 0,
          "default_value": "string",
          "hidden": true,
          "prefix": "string",
          "suffix": "string",
          "doc_section": "string",
          "secret": true,
          "automated": true,
          "enum": [
            "string"
          ],
          "warnings": {
            "property1": "string",
            "property2": "string"
          },
          "visible_when": {
            "field": "string",
            "equals": "string"
          }
        },
        "property2": {
          "type": "string",
          "title": "string",
          "description": "string",
          "example": "string",
          "pattern": "string",
          "format": "hostname",
          "optional": true,
          "order": 0,
          "default_value": "string",
          "hidden": true,
          "prefix": "string",
          "suffix": "string",
          "doc_section": "string",
          "secret": true,
          "automated": true,
          "enum": [
            "string"
          ],
          "warnings": {
            "property1": "string",
            "property2": "string"
          },
          "visible_when": {
            "field": "string",
            "equals": "string"
          }
        }
      },
      "client_registration": "dynamic"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-all-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a list of available providers|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="list-all-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Provider](#schemaprovider)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a provider

> Code samples

```bash
curl https://api.nango.dev/providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /providers/{provider}`

Returns a specific provider

<h3 id="get-a-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The provider name|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "display_name": "string",
    "auth_mode": "OAUTH1",
    "proxy": {
      "base_url": "string",
      "headers": {},
      "query": {
        "api_key": "string"
      },
      "retry": {
        "at": "string",
        "after": "string"
      },
      "decompress": true,
      "paginate": null,
      "verification": {
        "method": "string",
        "endpoint": "string",
        "base_url_override": "string",
        "headers": {}
      }
    },
    "authorization_url": "string",
    "authorization_url_encode": true,
    "access_token_url": "string",
    "token_url_encode": true,
    "authorization_params": {},
    "scope_separator": "string",
    "default_scopes": [
      "string"
    ],
    "token_url": "string",
    "token_params": {},
    "authorization_url_replacements": {},
    "authorization_url_fragment": "string",
    "redirect_uri_metadata": [
      "string"
    ],
    "token_response_metadata": [
      "string"
    ],
    "docs": "string",
    "token_expiration_buffer": 0,
    "webhook_routing_script": "string",
    "webhook_user_defined_secret": true,
    "post_connection_script": "string",
    "pre_connection_deletion_script": "string",
    "categories": [
      "string"
    ],
    "connection_configuration": [
      "string"
    ],
    "connection_config": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    },
    "credentials": {
      "apiKey": {
        "type": "string",
        "title": "string",
        "description": "string",
        "example": "string",
        "pattern": "string",
        "format": "hostname",
        "optional": true,
        "order": 0,
        "default_value": "string",
        "hidden": true,
        "prefix": "string",
        "suffix": "string",
        "doc_section": "string",
        "secret": true,
        "automated": true,
        "enum": [
          "string"
        ],
        "warnings": {
          "property1": "string",
          "property2": "string"
        },
        "visible_when": {
          "field": "string",
          "equals": "string"
        }
      }
    },
    "integration_config": {
      "property1": {
        "type": "string",
        "title": "string",
        "description": "string",
        "example": "string",
        "pattern": "string",
        "format": "hostname",
        "optional": true,
        "order": 0,
        "default_value": "string",
        "hidden": true,
        "prefix": "string",
        "suffix": "string",
        "doc_section": "string",
        "secret": true,
        "automated": true,
        "enum": [
          "string"
        ],
        "warnings": {
          "property1": "string",
          "property2": "string"
        },
        "visible_when": {
          "field": "string",
          "equals": "string"
        }
      },
      "property2": {
        "type": "string",
        "title": "string",
        "description": "string",
        "example": "string",
        "pattern": "string",
        "format": "hostname",
        "optional": true,
        "order": 0,
        "default_value": "string",
        "hidden": true,
        "prefix": "string",
        "suffix": "string",
        "doc_section": "string",
        "secret": true,
        "automated": true,
        "enum": [
          "string"
        ],
        "warnings": {
          "property1": "string",
          "property2": "string"
        },
        "visible_when": {
          "field": "string",
          "equals": "string"
        }
      }
    },
    "client_registration": "dynamic"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-a-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a specific provider|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="get-a-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Provider](#schemaprovider)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List provider templates

> Code samples

```bash
curl https://api.nango.dev/providers/string/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /providers/{provider}/templates`

Returns the template functions available in the catalog for a provider. Requires a valid API key (no specific scope).

<h3 id="list-provider-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|The provider name.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "scopes": [
        "string"
      ],
      "type": "sync",
      "input": "string",
      "returns": [
        "string"
      ],
      "json_schema": {},
      "runs": "string",
      "auto_start": true,
      "track_deletes": true
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-provider-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the provider's template functions|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="list-provider-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ProviderTemplateFunction](#schemaprovidertemplatefunction)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List integrations

> Code samples

```bash
curl https://api.nango.dev/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations`

Returns a list of integrations

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "unique_key": "string",
      "display_name": "string",
      "provider": "string",
      "logo": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "forward_webhooks": true,
      "missing_fields": [
        "string"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="list-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Integration](#schemaintegration)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an integration

> Code samples

```bash
curl https://api.nango.dev/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "unique_key": "string",
    "provider": "string",
    "display_name": "string",
    "forward_webhooks": true,
    "credentials": {
      "type": "OAUTH1",
      "client_id": "string",
      "client_secret": "string",
      "scopes": "string",
      "webhook_secret": "string"
    },
    "integration_config": {
      "property1": "string",
      "property2": "string"
    },
    "custom": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /integrations`

Create an integration

> Body parameter

```json
{
  "unique_key": "string",
  "provider": "string",
  "display_name": "string",
  "forward_webhooks": true,
  "credentials": {
    "type": "OAUTH1",
    "client_id": "string",
    "client_secret": "string",
    "scopes": "string",
    "webhook_secret": "string"
  },
  "integration_config": {
    "property1": "string",
    "property2": "string"
  },
  "custom": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» unique_key|body|string|true|A unique integration ID, which you will use in the other API calls to reference this integration.|
|» provider|body|string|true|The provider unique name.|
|» display_name|body|string|false|The integration display name.|
|» forward_webhooks|body|boolean|false|Whether to forward webhooks received for this integration. Defaults to true.|
|» credentials|body|[IntegrationCredentialsInput](#schemaintegrationcredentialsinput) \| [IntegrationNangoManagedCredentialsInput](#schemaintegrationnangomanagedcredentialsinput)|false|Developer app credentials for the integration. Omit them to create the integration without credentials and provide them later, either with an update request or per connection at connection time. Set `type` to `NANGO_MANAGED` to use a Nango-managed developer app instead.<br>|
|» » *oneOf*|body|[IntegrationCredentialsInput](#schemaintegrationcredentialsinput)|false|Integration credentials schema accepted in create/update request bodies. Only `type` is required: developer app credentials can be omitted at creation and supplied later, either with an update request or per connection at connection time. Fields left out of an update are kept as-is rather than cleared. MCP_OAUTH2 is the exception — static creation requires both client_id and client_secret, while dynamic and CIMD providers reject those fields because Nango manages them. Optional fields must not be null.<br>|
|» » *oneOf*|body|[IntegrationNangoManagedCredentialsInput](#schemaintegrationnangomanagedcredentialsinput)|false|Uses a Nango-managed developer app instead of your own credentials. Only available when creating an integration for an `OAUTH1`, `OAUTH2`, or `APP` provider that Nango has a managed app for. Can't be combined with `integration_config` or `custom`, and the credentials can't be edited afterwards.<br>|
|» integration_config|body|object|false|Provider-specific configuration for providers that declare an `integration_config` schema (e.g. `private-api-generic`, `aws-sigv4`). Keys and required fields depend on the provider; values are validated against the provider schema.<br>|
|» » **additionalProperties**|body|string|false|none|
|» custom|body|object|false|Free-form key-value settings stored on the integration, for providers without an `integration_config` schema. Rejected for providers that declare one; use `integration_config` instead.<br>|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "unique_key": "string",
    "display_name": "string",
    "provider": "string",
    "logo": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "forward_webhooks": true,
    "missing_fields": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="create-an-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Integration](#schemaintegration)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a quickstart integration

> Code samples

```bash
curl https://api.nango.dev/integrations/quickstart \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "unique_key": "string",
    "provider": "string",
    "display_name": "string",
    "forward_webhooks": true
  }'
```

`POST /integrations/quickstart`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: use `POST /integrations` with `credentials: { "type": "NANGO_MANAGED" }` instead. Creates an integration that uses a Nango-managed OAuth app for providers that require a developer app. Returns a 400 error if no Nango-managed app is configured for the provider.


> Body parameter

```json
{
  "unique_key": "string",
  "provider": "string",
  "display_name": "string",
  "forward_webhooks": true
}
```

<h3 id="create-a-quickstart-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» unique_key|body|string|true|A unique integration ID, which you will use in the other API calls to reference this integration.|
|» provider|body|string|true|The provider unique name.|
|» display_name|body|string|false|The integration display name.|
|» forward_webhooks|body|boolean|false|Whether to forward webhooks for this integration.|

> Example responses

> 200 Response

```json
{
  "data": {
    "unique_key": "string",
    "display_name": "string",
    "provider": "string",
    "logo": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "forward_webhooks": true,
    "missing_fields": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-a-quickstart-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="create-a-quickstart-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Integration](#schemaintegration)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get an integration

> Code samples

```bash
curl https://api.nango.dev/integrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/{uniqueKey}`

Returns a specific integration

<h3 id="get-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|include|query|[string]|false|Include additional sensitive data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|webhook|
|include|credentials|

> Example responses

> 200 Response

```json
{
  "data": {
    "unique_key": "string",
    "display_name": "string",
    "provider": "string",
    "logo": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "forward_webhooks": true,
    "missing_fields": [
      "string"
    ],
    "webhook_url": "string",
    "credentials": {
      "type": "OAUTH1",
      "client_id": "string",
      "client_secret": "string",
      "scopes": "string",
      "webhook_secret": "string"
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="get-an-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IntegrationFull](#schemaintegrationfull)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an integration

> Code samples

```bash
curl https://api.nango.dev/integrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /integrations/{uniqueKey}`

Deletes a specific integration.

<h3 id="delete-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="delete-an-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit an integration

> Code samples

```bash
curl https://api.nango.dev/integrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "unique_key": "string",
    "display_name": "string",
    "forward_webhooks": true,
    "credentials": {
      "type": "OAUTH1",
      "client_id": "string",
      "client_secret": "string",
      "scopes": "string",
      "webhook_secret": "string"
    },
    "integration_config": {
      "property1": "string",
      "property2": "string"
    },
    "custom": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /integrations/{uniqueKey}`

Edit an integration

> Body parameter

```json
{
  "unique_key": "string",
  "display_name": "string",
  "forward_webhooks": true,
  "credentials": {
    "type": "OAUTH1",
    "client_id": "string",
    "client_secret": "string",
    "scopes": "string",
    "webhook_secret": "string"
  },
  "integration_config": {
    "property1": "string",
    "property2": "string"
  },
  "custom": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="edit-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|body|body|object|true|none|
|» unique_key|body|string|false|A unique integration ID, which you will use in the other API calls to reference this integration.|
|» display_name|body|string|false|The integration display name.|
|» forward_webhooks|body|boolean|false|Whether to forward webhooks received for this integration.|
|» credentials|body|[IntegrationCredentialsInput](#schemaintegrationcredentialsinput)|false|Developer app credentials for the integration. Only the fields you pass are updated; the ones you leave out keep their current value.<br>|
|» integration_config|body|object|false|Provider-specific configuration for providers that declare an `integration_config` schema (e.g. `private-api-generic`, `aws-sigv4`). Only the fields you pass are updated.<br>|
|» » **additionalProperties**|body|string|false|none|
|» custom|body|object|false|Free-form key-value settings stored on the integration, for providers without an `integration_config` schema. Merged with existing values. Rejected for providers that declare one; use `integration_config` instead.<br>|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "unique_key": "string",
    "display_name": "string",
    "provider": "string",
    "logo": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "forward_webhooks": true,
    "missing_fields": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="edit-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated an integration|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="edit-an-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Integration](#schemaintegration)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List functions

> Code samples

```bash
curl https://api.nango.dev/integrations/string/functions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/{uniqueKey}/functions`

Returns the functions available to an integration, including Nango catalog tools when available. Requires an API key with the `environment:functions:list` scope.

<h3 id="list-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|type|query|string|false|Filter by function type.|
|search|query|string|false|Case-insensitive filter on the function name.|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sync|
|type|on-event|
|type|tool|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "scopes": [
        "string"
      ],
      "type": "sync",
      "input": "string",
      "returns": [
        "string"
      ],
      "json_schema": {},
      "runs": "string",
      "auto_start": true,
      "track_deletes": true,
      "id": 0,
      "enabled": true,
      "last_deployed": "1970-01-01T00:00:00Z",
      "source": "catalog"
    }
  ],
  "pagination": {
    "total": 0,
    "page": 0,
    "limit": 0
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the integration's functions|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="list-functions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ListedNangoFunction](#schemalistednangofunction)]|true|none|none|
|pagination|object|true|none|none|
|» total|integer|true|none|none|
|» page|integer|true|none|none|
|» limit|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a function

> Code samples

```bash
curl https://api.nango.dev/integrations/string/functions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/{uniqueKey}/functions/{name}`

Returns a single function available to an integration, including HTTP-triggered tools and Nango catalog tools. Use the type filter to select a function type. Requires an API key with the `environment:functions:read` scope.

<h3 id="get-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|name|path|string|true|The name of the function.|
|type|query|string|false|Filter by function type. When omitted and several functions share the name, tools are returned first, then on-event and sync functions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sync|
|type|on-event|
|type|tool|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "scopes": [
      "string"
    ],
    "type": "sync",
    "input": "string",
    "returns": [
      "string"
    ],
    "json_schema": {},
    "runs": "string",
    "auto_start": true,
    "track_deletes": true,
    "id": 0,
    "enabled": true,
    "last_deployed": "1970-01-01T00:00:00Z",
    "source": "catalog"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the function|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="get-a-function-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ListedNangoFunction](#schemalistednangofunction)|true|none|A listed function (sync, deprecated action, on-event, or tool) merged with its availability metadata.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a function

> Code samples

```bash
curl 'https://api.nango.dev/integrations/string/functions/string?type=action' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /integrations/{uniqueKey}/functions/{name}`

Deletes a deployed function and enqueues its async teardown. Supports standalone native functions, tools, syncs, and deprecated actions. Functions managed by `nango deploy` (repo source) and catalog functions cannot be deleted through this endpoint. Requires an API key with the `environment:functions:delete` scope.

<h3 id="delete-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|name|path|string|true|The name of the function.|
|type|query|string|true|Required to disambiguate functions that share a name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|action|
|type|sync|
|type|tool|
|type|function|

> Example responses

> 200 Response

```json
{
  "data": {
    "success": true
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "function_managed_by_deploy",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function deletion accepted|Inline|
|400|Bad Request|Invalid request, or the function is managed by `nango deploy` or the tools catalog.|Inline|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="delete-a-function-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|function_managed_by_deploy|
|» code|invalid_request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a function's source code

> Code samples

```bash
curl https://api.nango.dev/integrations/string/functions/string/code \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/{uniqueKey}/functions/{name}/code`

Returns the TypeScript source code of a function for a given integration. Requires an API key with the `environment:functions:read` scope.

<h3 id="get-a-functions-source-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uniqueKey|path|string|true|The integration ID (unique_key) that you created in Nango.|
|name|path|string|true|The name of the function.|
|type|query|string|false|Filter by function type. When omitted and several functions share the name, tools are returned first, then on-event and sync functions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sync|
|type|on-event|
|type|tool|

> Example responses

> 200 Response

```json
{
  "type": "sync",
  "code": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-a-functions-source-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the function source code|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="get-a-functions-source-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The function type. `action` is deprecated.|
|code|string|true|none|The TypeScript source code of the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sync|
|type|action|
|type|on-event|
|type|tool|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List connections (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connection`

Returns a list of connections without credentials. This endpoint is deprecated, use the /connections endpoint instead.

<h3 id="list-connections-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|query|string|false|Will exactly match a given connectionId. Can return multiple connections with the same ID across integrations|
|search|query|string|false|Will partially match connection IDs or end user profiles.|
|endUserId|query|string|false|**Deprecated.** Deprecated. Prefer filtering connections by tag (e.g. `tags[end_user_id]=...`).|
|endUserOrganizationId|query|string|false|**Deprecated.** Deprecated. Prefer filtering connections by tag (e.g. `tags[organization_id]=...`).|
|tags|query|[Tags](#schematags)|false|Filter the list of connections based on connection tags. All provided tags must match.|
|limit|query|integer|false|Limit the number of connections returned|
|page|query|integer|false|Page number for paginated results|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "id": 0,
      "connection_id": "string",
      "provider": "string",
      "provider_config_key": "string",
      "created": "string",
      "metadata": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "errors": [
        {
          "type": "auth",
          "log_id": "VrnbtykXJFckCm3HP93t"
        }
      ],
      "end_user": {
        "id": "string",
        "email": "string",
        "display_name": "string",
        "tags": {},
        "organization": {
          "id": "string",
          "display_name": "string"
        }
      }
    }
  ]
}
```

<h3 id="list-connections-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a list of connections|Inline|

<h3 id="list-connections-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[object]|true|none|none|
|» id|integer|true|none|The internal Nango ID used for the connection.|
|» connection_id|string|true|none|The connection ID used to create the connection.|
|» provider|string|true|none|The Nango API Configuration.|
|» provider_config_key|string|true|none|The integration ID used to create the connection (aka Unique Key, Provider Config Key).|
|» created|string|true|none|Connection creation date.|
|» metadata|object \| null|true|none|Custom metadata attached to the connection|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|null|false|none|none|
|» tags|[Tags](#schematags)|true|none|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» errors|[[ConnectionError](#schemaconnectionerror)]|true|none|List of connection errors. Ex:<br>- Connection credentials are invalid (type=auth)<br>- Last sync for the connection has failed (type=sync)<br>|
|» end_user|[ConnectionEndUser](#schemaconnectionenduser) \| null|false|none|**Deprecated.**|
|» » *anyOf*|[ConnectionEndUser](#schemaconnectionenduser)|false|none|**Deprecated.**|
|» » *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add a connection (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "provider_config_key": "string",
    "access_token": "string",
    "refresh_token": "string",
    "expires_at": "1970-01-01",
    "expires_in": 0,
    "no_expiration": true,
    "oauth_client_id_override": "string",
    "oauth_client_secret_override": "string",
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "metadata": {},
    "connection_config": {},
    "username": "string",
    "password": "string",
    "api_key": "string"
  }'
```

`POST /connection`

Adds a connection for which you already have credentials. This endpoint is deprecated, use the /connections endpoint instead.

> Body parameter

```json
{
  "connection_id": "string",
  "provider_config_key": "string",
  "access_token": "string",
  "refresh_token": "string",
  "expires_at": "1970-01-01",
  "expires_in": 0,
  "no_expiration": true,
  "oauth_client_id_override": "string",
  "oauth_client_secret_override": "string",
  "oauth_token": "string",
  "oauth_token_secret": "string",
  "metadata": {},
  "connection_config": {},
  "username": "string",
  "password": "string",
  "api_key": "string"
}
```

<h3 id="add-a-connection-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connection_id|body|string|false|The connection ID used to create the connection.|
|» provider_config_key|body|string|true|The integration ID that you created on Nango.|
|» access_token|body|string|false|(OAuth 2, required) Existing access token.|
|» refresh_token|body|string|false|(OAuth 2, optional) Pass the refresh token if you have it.|
|» expires_at|body|string(date)|false|(OAuth 2, optional) Safer and preferred.|
|» expires_in|body|integer|false|(OAuth 2, optional) In seconds.|
|» no_expiration|body|boolean|false|(OAuth2, optional) If the provider gives access tokens that don't expire, pass in `true` to avoid an import validation error.|
|» oauth_client_id_override|body|string|false|(OAuth2, optional) Override the integration's OAuth client id|
|» oauth_client_secret_override|body|string|false|(OAuth2, optional) Override the integration's OAuth client secret|
|» oauth_token|body|string|false|(OAuth 1, required) The client token to be attached to the connection.|
|» oauth_token_secret|body|string|false|(OAuth 1, required) The client token secret to be attached to the connection.|
|» metadata|body|object|false|(OAuth, required for some APIs) Metadata to be attached to the connection.|
|» connection_config|body|object|false|(OAuth, required for some APIs) Additional configuration to be attached to the connection.|
|» username|body|string|false|(Basic, required) username to be attached to the connection.|
|» password|body|string|false|(Basic, required) password to be attached to the connection.|
|» api_key|body|string|false|(API Key, required) API key to be attached to the connection.|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="add-a-connection-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an integrations|None|
|400|Bad Request|Invalid request|Inline|

<h3 id="add-a-connection-deprecated-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a connection (deprecated)

> Code samples

```bash
curl 'https://api.nango.dev/connection/string?provider_config_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connection/{connectionId}`

Returns a specific connection with credentials. This endpoint is deprecated, use the /connections/{connectionId} endpoint instead.

<h3 id="get-a-connection-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|provider_config_key|query|string|true|The integration ID used to create the connection (aka Unique Key).|
|force_refresh|query|boolean|false|If true, Nango will attempt to refresh the access access token regardless of its expiration status (false by default).|
|refresh_token|query|boolean|false|If true, return the refresh token as part of the response (false by default).|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "connection_id": "string",
  "provider_config_key": "string",
  "provider": "string",
  "errors": [
    {
      "type": "auth",
      "log_id": "VrnbtykXJFckCm3HP93t"
    }
  ],
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {},
    "organization": {
      "id": "string",
      "display_name": "string"
    }
  },
  "metadata": {},
  "connection_config": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "string",
  "updated_at": "string",
  "last_fetched_at": "string",
  "credentials": {
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "type": "OAUTH1",
    "raw": {}
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 424 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-connection-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a connection|[ConnectionFull](#schemaconnectionfull)|
|400|Bad Request|Invalid request|Inline|
|404|Not Found|Unknown Connection|Inline|
|424|Failed Dependency|Connection refresh exhausted|Inline|

<h3 id="get-a-connection-deprecated-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **424**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|The error code|
|» message|string|false|none|A human-readable error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a connection (deprecated)

> Code samples

```bash
curl 'https://api.nango.dev/connection/string?provider_config_key=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /connection/{connectionId}`

Deletes a specific connection. This endpoint is deprecated, use the /connections/{connectionId} endpoint instead.

<h3 id="delete-a-connection-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|provider_config_key|query|string|true|The integration ID used to create the connection (aka Unique Key).|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-a-connection-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted an connection|Inline|
|400|Bad Request|Invalid request|Inline|
|404|Not Found|Unknown connection|Inline|

<h3 id="delete-a-connection-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set connection metadata (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "connection-123",
    "provider_config_key": "string",
    "metadata": {}
  }'
```

`POST /connection/metadata`

Set custom metadata for the connection or connections. If updating multiple connections pass in an array of connection ids instead of a string. This endpoint is deprecated, use the /connections/metadata endpoint instead.

> Body parameter

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

<h3 id="set-connection-metadata-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connection_id|body|string \| [string]|true|none|
|» » *oneOf*|body|string|false|The connection ID used to set the metadata on.|
|» » *oneOf*|body|[string]|false|The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|» provider_config_key|body|string|true|The integration ID used to create the connection (aka Unique Key).|
|» metadata|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="set-connection-metadata-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully set the metadata for the connections|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="set-connection-metadata-deprecated-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string \| [string]|false|none|none|
|» *oneOf*|string|false|none|The connection ID used to set the metadata on. Returns an array of connection ids if an array is passed in.|
|» *oneOf*|[string]|false|none|The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|*anonymous*|[string]|false|none|none|
|provider_config_key|string|false|none|The integration ID used to create the connection (aka Unique Key).|
|metadata|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit connection metadata (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "connection-123",
    "provider_config_key": "string",
    "metadata": {}
  }'
```

`PATCH /connection/metadata`

Edit custom metadata for the connection or connections (only overrides specified properties, not the entire metadata). If updating multiple connections pass in an array of connection ids instead of a string. This endpoint is deprecated, use the /connections/metadata endpoint instead.

> Body parameter

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

<h3 id="edit-connection-metadata-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connection_id|body|string \| [string]|true|none|
|» » *oneOf*|body|string|false|The connection ID used to update the metadata on. Accepts an array of connection ids as well|
|» » *oneOf*|body|[string]|false|The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|» provider_config_key|body|string|true|The integration ID used to create the connection (aka Unique Key).|
|» metadata|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="edit-connection-metadata-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the metadata for the connections|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|

<h3 id="edit-connection-metadata-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string \| [string]|false|none|none|
|» *oneOf*|string|false|none|The connection ID used to update the metadata on. Returns an array of connection ids if an array is passed in.|
|» *oneOf*|[string]|false|none|The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|*anonymous*|[string]|false|none|none|
|provider_config_key|string|false|none|The integration ID used to create the connection (aka Unique Key).|
|metadata|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set connection metadata (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection/string/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Provider-Config-Key: string' \
  -d '{}'
```

`POST /connection/{connectionId}/metadata`

<aside class="warning">
This operation is deprecated
</aside>

Set custom metadata for the connection.

> Body parameter

```json
{}
```

<h3 id="set-connection-metadata-deprecated-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|body|body|object|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="set-connection-metadata-deprecated-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created an integrations|None|
|400|Bad Request|Bad request|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit connection metadata (deprecated)

> Code samples

```bash
curl https://api.nango.dev/connection/string/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Provider-Config-Key: string' \
  -d '{}'
```

`PATCH /connection/{connectionId}/metadata`

<aside class="warning">
This operation is deprecated
</aside>

Edit custom metadata for the connection (only overrides specified properties, not the entire metadata).

> Body parameter

```json
{}
```

<h3 id="edit-connection-metadata-deprecated-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="edit-connection-metadata-deprecated-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the metadata|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List connections

> Code samples

```bash
curl https://api.nango.dev/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections`

Returns a list of connections without credentials

<h3 id="list-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|query|string|false|Will exactly match a given connectionId. Can return multiple connections with the same ID across integrations|
|search|query|string|false|**Deprecated.** Deprecated. No direct replacement for partial matching; prefer exact filtering via `connectionId` or connection tags (e.g. `tags[end_user_id]=...`).|
|endUserId|query|string|false|**Deprecated.** Deprecated. Prefer filtering connections by tag (e.g. `tags[end_user_id]=...`).|
|endUserOrganizationId|query|string|false|**Deprecated.** Deprecated. Prefer filtering connections by tag (e.g. `tags[organization_id]=...`).|
|tags|query|[Tags](#schematags)|false|Filter the list of connections based on connection tags. All provided tags must match.|
|limit|query|integer|false|Limit the number of connections returned|
|page|query|integer|false|Page number for paginated results|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "id": 0,
      "connection_id": "string",
      "provider": "string",
      "provider_config_key": "string",
      "created": "string",
      "metadata": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "errors": [
        {
          "type": "auth",
          "log_id": "VrnbtykXJFckCm3HP93t"
        }
      ],
      "end_user": {
        "id": "string",
        "email": "string",
        "display_name": "string",
        "tags": {},
        "organization": {
          "id": "string",
          "display_name": "string"
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a list of connections|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|

<h3 id="list-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[object]|true|none|none|
|» id|integer|true|none|The internal Nango ID used for the connection.|
|» connection_id|string|true|none|The connection ID used to create the connection.|
|» provider|string|true|none|The Nango API Configuration.|
|» provider_config_key|string|true|none|The integration ID used to create the connection (aka Unique Key, Provider Config Key).|
|» created|string|true|none|Connection creation date.|
|» metadata|object \| null|true|none|Custom metadata attached to the connection|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|null|false|none|none|
|» tags|[Tags](#schematags)|true|none|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» errors|[[ConnectionError](#schemaconnectionerror)]|true|none|List of connection errors. Ex:<br>- Connection credentials are invalid (type=auth)<br>- Last sync for the connection has failed (type=sync)<br>|
|» end_user|[ConnectionEndUser](#schemaconnectionenduser) \| null|false|none|**Deprecated.**|
|» » *anyOf*|[ConnectionEndUser](#schemaconnectionenduser)|false|none|**Deprecated.**|
|» » *anyOf*|null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upsert a connection

> Code samples

```bash
curl https://api.nango.dev/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "metadata": {},
    "connection_id": "string",
    "connection_config": {},
    "credentials": {
      "oauth_token": "string",
      "oauth_token_secret": "string",
      "type": "OAUTH1"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "end_user": {
      "id": "string",
      "email": "string",
      "display_name": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /connections`

Upserts a connection for which you already have credentials.

> Body parameter

```json
{
  "provider_config_key": "string",
  "metadata": {},
  "connection_id": "string",
  "connection_config": {},
  "credentials": {
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "type": "OAUTH1"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="upsert-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» provider_config_key|body|string|true|The integration ID that you created on Nango.|
|» metadata|body|object|false|(OAuth, required for some APIs) Metadata to be attached to the connection.|
|» connection_id|body|string|false|The connection ID used to create the connection.|
|» connection_config|body|object|false|(OAuth, required for some APIs) Additional configuration to be attached to the connection.|
|» credentials|body|object|true|The credentials to be attached to the connection.|
|» » *anyOf*|body|[OAuth1Credentials](#schemaoauth1credentials)|false|none|
|» » *anyOf*|body|[OAuth2Credentials](#schemaoauth2credentials)|false|none|
|» » *anyOf*|body|[BasicApiCredentials](#schemabasicapicredentials)|false|none|
|» » *anyOf*|body|[ApiKeyCredentials](#schemaapikeycredentials)|false|none|
|» » *anyOf*|body|[OAuth2ClientCredentials](#schemaoauth2clientcredentials)|false|none|
|» » *anyOf*|body|[UnauthCredentialsWithType](#schemaunauthcredentialswithtype)|false|none|
|» » *anyOf*|body|[TbaCredentials](#schematbacredentials)|false|none|
|» » *anyOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » app_id|body|string|true|none|
|» » installation_id|body|string|true|none|
|» tags|body|[Tags](#schematags)|false|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» end_user|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|**Deprecated.** Uniquely identifies the end user.|
|» » email|body|string|false|**Deprecated.**|
|» » display_name|body|string|false|**Deprecated.**|
|» » tags|body|object|false|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|
|» » » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|APP|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "connection_id": "string",
  "provider_config_key": "string",
  "provider": "string",
  "errors": [
    {
      "type": "auth",
      "log_id": "VrnbtykXJFckCm3HP93t"
    }
  ],
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {},
    "organization": {
      "id": "string",
      "display_name": "string"
    }
  },
  "metadata": {},
  "connection_config": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "string",
  "updated_at": "string",
  "last_fetched_at": "string",
  "credentials": {
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "type": "OAUTH1",
    "raw": {}
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="upsert-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an integrations|[ConnectionFull](#schemaconnectionfull)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a connection

> Code samples

```bash
curl 'https://api.nango.dev/connections/string?provider_config_key=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections/{connectionId}`

Returns a specific connection with credentials

<h3 id="get-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|provider_config_key|query|string|true|The integration ID used to create the connection (aka Unique Key).|
|force_refresh|query|boolean|false|If true, Nango will attempt to refresh the access access token regardless of its expiration status (false by default).|
|refresh_token|query|boolean|false|If true, return the refresh token as part of the response (false by default).|
|refresh_github_app_jwt_token|query|boolean|false|If true, this will refresh the JWT token for GitHub App / Github App OAuth connections|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "connection_id": "string",
  "provider_config_key": "string",
  "provider": "string",
  "errors": [
    {
      "type": "auth",
      "log_id": "VrnbtykXJFckCm3HP93t"
    }
  ],
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {},
    "organization": {
      "id": "string",
      "display_name": "string"
    }
  },
  "metadata": {},
  "connection_config": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "string",
  "updated_at": "string",
  "last_fetched_at": "string",
  "credentials": {
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "type": "OAUTH1",
    "raw": {}
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 424 Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a connection|[ConnectionFull](#schemaconnectionfull)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|424|Failed Dependency|Connection refresh exhausted|Inline|

<h3 id="get-a-connection-responseschema">Response Schema</h3>

Status Code **424**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|The error code|
|» message|string|false|none|A human-readable error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a connection

> Code samples

```bash
curl 'https://api.nango.dev/connections/string?provider_config_key=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /connections/{connectionId}`

Deletes a specific connection

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|provider_config_key|query|string|true|The integration ID used to create the connection (aka Unique Key).|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted an connection|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="delete-a-connection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit a connection

> Code samples

```bash
curl 'https://api.nango.dev/connections/string?provider_config_key=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "webhook_url_override": "string",
    "end_user": {
      "id": "string",
      "email": "string",
      "display_name": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`PATCH /connections/{connectionId}`

Edit a connection

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "webhook_url_override": "string",
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="edit-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID used to create the connection.|
|provider_config_key|query|string|true|The integration ID used to create the connection (aka Unique Key).|
|body|body|object|true|none|
|» tags|body|[Tags](#schematags)|false|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» webhook_url_override|body|string|false|Override the environment's webhook URLs for this connection. When set, this connection's webhooks are sent only to this URL. Pass an empty string to clear the override.<br>|
|» end_user|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|**Deprecated.** Uniquely identifies the end user.|
|» » email|body|string|false|**Deprecated.**|
|» » display_name|body|string|false|**Deprecated.**|
|» » tags|body|object|false|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|
|» » » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="edit-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the connection|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="edit-a-connection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set connection metadata

> Code samples

```bash
curl https://api.nango.dev/connections/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "connection-123",
    "provider_config_key": "string",
    "metadata": {}
  }'
```

`POST /connections/metadata`

Set custom metadata for the connection or connections. If updating multiple connections pass in an array of connection ids instead of a string.

> Body parameter

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

<h3 id="set-connection-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connection_id|body|string \| [string]|true|none|
|» » *oneOf*|body|string|false|The connection ID used to set the metadata on.|
|» » *oneOf*|body|[string]|false|The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|» provider_config_key|body|string|true|The integration ID used to create the connection (aka Unique Key).|
|» metadata|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="set-connection-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully set the metadata for the connections|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="set-connection-metadata-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string \| [string]|false|none|none|
|» *oneOf*|string|false|none|The connection ID used to set the metadata on. Returns an array of connection ids if an array is passed in.|
|» *oneOf*|[string]|false|none|The connection IDs used to set the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|*anonymous*|[string]|false|none|none|
|provider_config_key|string|false|none|The integration ID used to create the connection (aka Unique Key).|
|metadata|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit connection metadata

> Code samples

```bash
curl https://api.nango.dev/connections/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "connection-123",
    "provider_config_key": "string",
    "metadata": {}
  }'
```

`PATCH /connections/metadata`

Edit custom metadata for the connection or connections (only overrides specified properties, not the entire metadata). If updating multiple connections pass in an array of connection ids instead of a string.

> Body parameter

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

<h3 id="edit-connection-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connection_id|body|string \| [string]|true|none|
|» » *oneOf*|body|string|false|The connection ID used to update the metadata on. Accepts an array of connection ids as well|
|» » *oneOf*|body|[string]|false|The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|» provider_config_key|body|string|true|The integration ID used to create the connection (aka Unique Key).|
|» metadata|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "connection_id": "connection-123",
  "provider_config_key": "string",
  "metadata": {}
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="edit-connection-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the metadata for the connections|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="edit-connection-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string \| [string]|false|none|none|
|» *oneOf*|string|false|none|The connection ID used to update the metadata on. Returns an array of connection ids if an array is passed in.|
|» *oneOf*|[string]|false|none|The connection IDs used to update the metadata on. If one connection id is invalid in the array the entire operation is aborted with no changes made.|
|*anonymous*|[string]|false|none|none|
|provider_config_key|string|false|none|The integration ID used to create the connection (aka Unique Key).|
|metadata|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get scripts configuration

> Code samples

```bash
curl https://api.nango.dev/scripts/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/config`

Return the configuration for all integration functions.

<h3 id="get-scripts-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The output type of the script configuration|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|nango|
|format|openai|

> Example responses

> 200 Response

```json
{
  "providerConfigKey": "string",
  "syncs": [
    {
      "id": 0,
      "name": "github-issues",
      "enabled": true,
      "type": "sync",
      "json_schema": {},
      "runs": "every 30 minutes",
      "track_deletes": true,
      "auto_start": true,
      "last_deployed": "2024-02-01T09:09:03.502Z",
      "is_public": true,
      "pre_built": true,
      "version": "0.0.3",
      "attributes": {},
      "input": {},
      "returns": [
        "GithubIssue"
      ],
      "description": "Fetches the Github issues from all a user's repositories.\nDetails: doesn't track deletes, metadata is not required.\n",
      "scopes": [
        "public_repo"
      ],
      "endpoints": [
        {}
      ],
      "webhookSubscriptions": [
        "string"
      ],
      "models": [
        {
          "name": "string",
          "fields": []
        }
      ]
    }
  ],
  "actions": [
    {
      "id": 0,
      "name": "github-issues",
      "type": "action",
      "last_deployed": "2024-02-28T20:16:38.052Z",
      "is_public": false,
      "pre_built": false,
      "version": "4",
      "attributes": {},
      "input": {},
      "returns": {},
      "description": "Fetches the Github issues from all a user's repositories.\nDetails: doesn't track deletes, metadata is not required.\n",
      "scopes": [
        "public_repo"
      ],
      "endpoints": [
        {}
      ],
      "models": [
        {
          "name": "string",
          "fields": []
        }
      ]
    }
  ],
  "on-events": [
    "string"
  ],
  "provider": "github"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-scripts-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned integration functions config|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="get-scripts-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerConfigKey|string|false|none|none|
|syncs|[object]|false|none|none|
|» id|number|false|none|none|
|» name|string|false|none|none|
|» enabled|boolean|false|none|none|
|» type|string|false|none|none|
|» json_schema|object|false|none|none|
|» runs|string|false|none|none|
|» track_deletes|boolean|false|none|none|
|» auto_start|boolean|false|none|none|
|» last_deployed|string|false|none|none|
|» is_public|boolean|false|none|none|
|» pre_built|boolean|false|none|none|
|» version|string|false|none|none|
|» attributes|object|false|none|none|
|» input|object|false|none|none|
|» returns|[string]|false|none|none|
|» description|string|false|none|none|
|» scopes|[string]|false|none|none|
|» endpoints|[object]|false|none|none|
|» webhookSubscriptions|[string]|false|none|none|
|» models|[object]|false|none|none|
|» » name|string|true|none|none|
|» » fields|array|false|none|none|
|actions|[object]|false|none|Deprecated action definitions. Use tools for new on-demand functions.|
|» id|number|false|none|none|
|» name|string|false|none|none|
|» type|string|false|none|none|
|» last_deployed|string|false|none|none|
|» is_public|boolean|false|none|none|
|» pre_built|boolean|false|none|none|
|» version|string|false|none|none|
|» attributes|object|false|none|none|
|» input|object|false|none|none|
|» returns|object|false|none|none|
|» description|string|false|none|none|
|» scopes|[string]|false|none|none|
|» endpoints|[object]|false|none|none|
|» models|[object]|false|none|none|
|» » name|string|true|none|none|
|» » fields|array|false|none|none|
|on-events|[string]|false|none|none|
|provider|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Compile a function

<a id="opIdcompileFunction"></a>

> Code samples

```bash
curl https://api.nango.dev/functions/compile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string"
  }'
```

`POST /functions/compile`

Compiles TypeScript function source code and returns the bundled JavaScript.

> Body parameter

```json
{
  "code": "string"
}
```

<h3 id="compile-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunctionCompileRequest](#schemafunctioncompilerequest)|true|none|
|» code|body|string|true|The TypeScript source code for the function.|

> Example responses

> 200 Response

```json
{
  "bundle_size_bytes": 0,
  "bundled_js": "string",
  "compiled_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="compile-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully compiled the function.|[FunctionCompileResponse](#schemafunctioncompileresponse)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|
|503|Service Unavailable|Service unavailable|[StdError](#schemastderror)|
|504|Gateway Timeout|Gateway timeout|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Dry run a function

<a id="opIdcreateFunctionDryrun"></a>

> Code samples

```bash
curl https://api.nango.dev/functions/dryruns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "integration_id": "string",
    "function_type": "action",
    "code": "string",
    "connection_id": "string",
    "input": null,
    "metadata": {},
    "checkpoint": {},
    "last_sync_date": "1970-01-01T00:00:00Z"
  }'
```

`POST /functions/dryruns`

Starts an asynchronous dry run for TypeScript function source code against a connection without deploying it.

> Body parameter

```json
{
  "integration_id": "string",
  "function_type": "action",
  "code": "string",
  "connection_id": "string",
  "input": null,
  "metadata": {},
  "checkpoint": {},
  "last_sync_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="dry-run-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunctionDryrunRequest](#schemafunctiondryrunrequest)|true|none|
|» integration_id|body|string|true|The integration ID (unique_key) that you created in Nango.|
|» function_type|body|[RunnableFunctionType](#schemarunnablefunctiontype)|true|Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.|
|» code|body|string|true|The TypeScript source code for the function.|
|» connection_id|body|string|true|The connection ID to use for the dry run.|
|» input|body|object|false|Optional JSON input payload passed to the function.|
|» metadata|body|object|false|Optional metadata available to the function during the dry run.|
|» checkpoint|body|object|false|Optional checkpoint payload available to sync functions during the dry run.|
|» last_sync_date|body|string(date-time)|false|Optional last sync date available to sync functions during the dry run.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» function_type|action|
|» function_type|sync|
|» function_type|tool|
|» function_type|function|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="dry-run-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully started the dry run.|[FunctionDryrunCreateResponse](#schemafunctiondryruncreateresponse)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|
|503|Service Unavailable|Service unavailable|[StdError](#schemastderror)|
|504|Gateway Timeout|Gateway timeout|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get dry run results

<a id="opIdgetFunctionDryrun"></a>

> Code samples

```bash
curl https://api.nango.dev/functions/dryruns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /functions/dryruns/{id}`

Returns the status and result of an asynchronous function dry run.

<h3 id="get-dry-run-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "integration_id": "string",
  "function_type": "action",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "started_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "output": "string",
  "result": null,
  "error": {
    "code": "string",
    "message": "string",
    "payload": null
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-dry-run-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the dry run.|[FunctionDryrunResponse](#schemafunctiondryrunresponse)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a function deployment

<a id="opIdcreateFunctionDeployment"></a>

> Code samples

```bash
curl https://api.nango.dev/functions/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "function",
    "integration_id": "string",
    "function_name": "string",
    "function_type": "action",
    "code": "string",
    "version": "string",
    "allow_destructive": true
  }'
```

`POST /functions/deployments`

Deploys a function to an existing integration. Use `type: function` to deploy submitted TypeScript
source code, or `type: template` to deploy a template from the provider catalog. Requires an API key with the
`environment:deploy` scope.


> Body parameter

```json
{
  "type": "function",
  "integration_id": "string",
  "function_name": "string",
  "function_type": "action",
  "code": "string",
  "version": "string",
  "allow_destructive": true
}
```

<h3 id="create-a-function-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunctionDeploymentRequest](#schemafunctiondeploymentrequest)|true|none|
|» *oneOf*|body|[FunctionDeploymentCodeRequest](#schemafunctiondeploymentcoderequest)|false|none|
|» *oneOf*|body|[FunctionDeploymentTemplateRequest](#schemafunctiondeploymenttemplaterequest)|false|none|

> Example responses

> 202 Response

```json
{
  "id": "string",
  "status": "waiting",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "template_already_deployed",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-a-function-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment record. `status` may be any of `waiting`, `running`, `success`, or `failed`. If it is not<br>`success`, poll `GET /functions/deployments/{id}` for the final status and details.<br>|[FunctionDeploymentResponse](#schemafunctiondeploymentresponse)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|409|Conflict|The template is already deployed, or the template name is ambiguous and `function_type` is required.|Inline|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|
|503|Service Unavailable|Service unavailable|[StdError](#schemastderror)|
|504|Gateway Timeout|Gateway timeout|[StdError](#schemastderror)|

<h3 id="create-a-function-deployment-responseschema">Response Schema</h3>

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|template_already_deployed|
|» code|ambiguous_function|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a function deployment

<a id="opIdgetFunctionDeployment"></a>

> Code samples

```bash
curl https://api.nango.dev/functions/deployments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /functions/deployments/{id}`

Returns the status and result of an asynchronous function deployment.

<h3 id="get-a-function-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "integration_id": "string",
  "function_name": "string",
  "function_type": "action",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "started_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "deployed": true,
  "deployed_functions": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "output": "string",
  "error": {
    "code": "string",
    "message": "string",
    "payload": null
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-a-function-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the deployment.|[FunctionDeploymentResultResponse](#schemafunctiondeploymentresultresponse)|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get synced records

> Code samples

```bash
curl 'https://api.nango.dev/records?model=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string'
```

`GET /records`

Returns data synced with Nango Sync

<h3 id="get-synced-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model|query|string|true|The data model to fetch|
|cursor|query|string|false|A marker used to fetch records modified after a specific point in time. If not provided, all records are returned. Each record includes a cursor value found in _nango_metadata.cursor. Save the cursor from the last record retrieved to track your sync progress. Use the cursor parameter together with the limit parameter to paginate through records. The cursor is more precise than modified_after, as it can differentiate between records with the same modification timestamp.<br>|
|limit|query|integer|false|The maximum number of records to return. Defaults to 100. A response may contain fewer records than `limit` when records have a large size. Always check `next_cursor` and continue paginating until it is `null`.<br>|
|filter|query|string|false|Filter to only show results that have been added or updated or deleted.|
|modified_after|query|string(date-time)|false|A timestamp (e.g., 2023-05-31T11:46:13.390Z) used to fetch records modified after this date and time. If not provided, all records are returned. The modified_after parameter is less precise than cursor, as multiple records may share the same modification timestamp.|
|delta|query|string|false|**Deprecated.** DEPRECATED (use modified_after) Timestamp, e.g. 2023-05-31T11:46:13.390Z. If passed, only records modified after this timestamp are returned, otherwise all records are returned.|
|ids|query|[string]|false|An array of string containing a list of your records IDs. The list will be filtered to include only the records with a matching ID.|
|variant|query|string|false|The variant of the model to fetch|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|added|
|filter|updated|
|filter|deleted|

> Example responses

> 200 Response

```json
{
  "records": [
    {
      "your-properties": "Your synced data, in the schema you (or Nango) defined in script",
      "_nango_metadata": {
        "deleted_at": "1970-01-01T00:00:00Z",
        "last_action": "ADDED",
        "first_seen_at": "2023-09-18T15:20:35.941305+00:00",
        "last_modified_at": "2023-09-18T15:20:35.941305+00:00",
        "cursor": "MjAyNC0wMy0wNFQwNjo1OTo1MS40NzE0NDEtMDU6MDB8fDE1Y2NjODA1LTY0ZDUtNDk0MC1hN2UwLTQ1ZmM3MDQ5OTdhMQ==",
        "pruned_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "next_cursor": "MjAyMy0xMS0xN1QxMTo0NzoxNC40NDcrMDI6MDB8fDAzZTA1NzIxLWNiZmQtNGYxNS1iYTNhLWFlNjM2Y2MwNmEw=="
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-synced-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned records|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="get-synced-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|[object]|false|none|none|
|» your-properties|string|false|none|The data Nango synced in for you|
|» _nango_metadata|object|false|none|none|
|» » deleted_at|string(date-time) \| null|false|none|The timestamp at which Nango detected the record as deleted|
|» » » *anyOf*|string(date-time)|false|none|none|
|» » » *anyOf*|null|false|none|none|
|» » last_action|string|false|none|The last action seen on this record|
|» » first_seen_at|string(date-time)|false|none|The timestamp at which Nango first saw this record|
|» » last_modified_at|string(date-time)|false|none|The timestamp at which Nango last detected a change to this record|
|» » cursor|string|false|none|The current cursor of the record. Use this to fetch records updated after this record|
|» » pruned_at|string(date-time) \| null|false|none|The timestamp at which the record payload was pruned (emptied)|
|» » » *anyOf*|string(date-time)|false|none|none|
|» » » *anyOf*|null|false|none|none|
|next_cursor|string|false|none|The base64-encoded cursor for pagination|

#### Enumerated Values

|Property|Value|
|---|---|
|» » last_action|ADDED|
|» » last_action|UPDATED|
|» » last_action|DELETED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Prune records

> Code samples

```bash
curl https://api.nango.dev/records/prune \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string' \
  -d '{
    "model": "string",
    "variant": "string",
    "until_cursor": "string",
    "limit": 1
  }'
```

`PATCH /records/prune`

Prunes synced records for a given connection and model using cursor-based pagination.

**What is pruning:**
Pruning empties the record payload while preserving the record metadata.

**Cursor behavior:**
Records are pruned up to and including the specified cursor.

> Body parameter

```json
{
  "model": "string",
  "variant": "string",
  "until_cursor": "string",
  "limit": 1
}
```

<h3 id="prune-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|body|body|object|true|none|
|» model|body|string|true|The data model to prune records from|
|» variant|body|string|false|The variant of the model|
|» until_cursor|body|string|true|Prune all records up to and including this cursor. Use the cursor value from _nango_metadata.cursor of the record you want to prune up to.|
|» limit|body|integer|false|The maximum number of records to prune in this request. Defaults to 1000.|

> Example responses

> 200 Response

```json
{
  "count": 150,
  "has_more": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="prune-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully pruned records|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="prune-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The number of records pruned in this request|
|has_more|boolean|true|none|Indicates if there are potentially more records to prune.<br>- `true`: There may be more records that need pruning<br>- `false`: All records up to the cursor have been pruned|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger a sync

> Code samples

```bash
curl https://api.nango.dev/sync/trigger \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string",
    "syncs": [
      "github-issues"
    ],
    "opts": {
      "reset": true,
      "emptyCache": true
    }
  }'
```

`POST /sync/trigger`

Triggers an additional, one-off execution of specified sync(s) (for a given connection or all applicable connections if no connection is specified).

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string",
  "syncs": [
    "github-issues"
  ],
  "opts": {
    "reset": true,
    "emptyCache": true
  }
}
```

<h3 id="trigger-a-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» provider_config_key|body|string|true|The ID of the integration that you established within Nango.|
|» connection_id|body|string|false|The ID of the connection. If omitted, the syncs will be triggered for all relevant connections.|
|» syncs|body|[string] \| [object]|true|none|
|» » *oneOf*|body|[string]|false|A list of sync names that you wish to pause. If empty, all syncs are triggered|
|» » *oneOf*|body|[object]|false|A list of sync object (with a name and variant properties) that you wish to trigger. If empty, all syncs are triggered|
|» name|body|string|true|The name of the sync|
|» variant|body|string|false|The variant name|
|» opts|body|object|false|Options for triggering the sync.|
|» » reset|body|boolean|false|If true, clears the checkpoint and lastSyncDate before triggering the sync, causing it to start fresh.|
|» » emptyCache|body|boolean|false|If true, deletes all cached records associated with the sync before triggering. Must be used with reset=true.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="trigger-a-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully triggered the sync|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="trigger-a-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Start a sync

> Code samples

```bash
curl https://api.nango.dev/sync/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string",
    "syncs": [
      "github-issues"
    ]
  }'
```

`POST /sync/start`

Starts the schedule of specified sync(s) for a given connection or all applicable connections if no connection is specified. Upon starting the schedule, the sync will execute immediately and then continue to run at the specified frequency. If the schedule was already started, this will have no effect.

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string",
  "syncs": [
    "github-issues"
  ]
}
```

<h3 id="start-a-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» provider_config_key|body|string|true|The ID of the integration that you established within Nango.|
|» connection_id|body|string|false|The ID of the connection. If omitted, the syncs will be started for all relevant connections.|
|» syncs|body|[string] \| [object]|true|none|
|» » *oneOf*|body|[string]|false|A list of sync names that you wish to start. If empty, all syncs are triggered|
|» » *oneOf*|body|[object]|false|A list of sync object (with a name and variant properties) that you wish to start.|
|» name|body|string|true|The name of the sync|
|» variant|body|string|false|The variant name|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="start-a-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully started the sync|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="start-a-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Pause a sync

> Code samples

```bash
curl https://api.nango.dev/sync/pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string",
    "syncs": [
      "github-issues"
    ]
  }'
```

`POST /sync/pause`

Pauses the schedule of specified sync(s) for a given connection or all applicable connections if no connection is specified.

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string",
  "syncs": [
    "github-issues"
  ]
}
```

<h3 id="pause-a-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» provider_config_key|body|string|true|The ID of the integration that you established within Nango.|
|» connection_id|body|string|false|The ID of the connection. If omitted, the syncs will be paused for all relevant connections.|
|» syncs|body|[string] \| [object]|true|none|
|» » *oneOf*|body|[string]|false|A list of sync names that you wish to pause. If empty, all syncs are triggered|
|» » *oneOf*|body|[object]|false|A list of sync object (with a name and variant properties) that you wish to start.|
|» name|body|string|true|The name of the sync|
|» variant|body|string|false|The variant name|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="pause-a-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully paused the sync|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="pause-a-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get sync status

> Code samples

```bash
curl 'https://api.nango.dev/sync/status?provider_config_key=string&syncs=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/status`

Get the status of specified sync(s) (for a given connection or all applicable connections if no connection is specified)

<h3 id="get-sync-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider_config_key|query|string|true|The ID of the integration you established within Nango|
|syncs|query|string|true|The name of the syncs you want to fetch a status for, as a comma-separated list. Pass in "*" to return all syncs for the integration. For variants, use the format "syncName::variantName".|
|connection_id|query|string|false|The ID of the connection. If omitted, all connections will be surfaced.|

> Example responses

> 200 Response

```json
{
  "syncs": [
    {
      "id": "string",
      "connection_id": "string",
      "name": "string",
      "variant": "string",
      "status": "RUNNING",
      "type": "INCREMENTAL",
      "finishedAt": "string",
      "nextScheduledSyncAt": "string",
      "frequency": "string",
      "latestResult": {},
      "recordCount": {},
      "checkpoint": {}
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-sync-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned a list of syncs and their status|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="get-sync-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|syncs|[object]|false|none|none|
|» id|string|false|none|The unique identifier for the sync.|
|» connection_id|string|false|none|The ID of the connection|
|» name|string|false|none|The name of the sync.|
|» variant|string|false|none|The variant of the sync.|
|» status|string|false|none|The current status of the sync.|
|» type|string|false|none|**Deprecated.** The most recent sync type completed|
|» finishedAt|string|false|none|ISO string of the most recently completed sync|
|» nextScheduledSyncAt|string|false|none|ISO string of the next scheduled sync time|
|» frequency|string|false|none|The execution frequency of the sync|
|» latestResult|object|false|none|Additional information regarding the latest result of the sync. Contains a model name with added, updated and deleted records|
|» recordCount|object|false|none|Total count of records for each model synced by the sync|
|» checkpoint|object \| null|false|none|Last checkpoint saved during sync execution. Null if no checkpoint exists.|
|» » *anyOf*|object|false|none|none|
|» » *anyOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|RUNNING|
|» status|PAUSED|
|» status|STOPPED|
|» status|SUCCESS|
|» status|ERROR|
|» type|INCREMENTAL|
|» type|INITIAL|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create sync variant

> Code samples

```bash
curl https://api.nango.dev/sync/string/variant/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string"
  }'
```

`POST /sync/{name}/variant/{variant}`

Creates a new sync variant for a specific connection

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string"
}
```

<h3 id="create-sync-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the sync|
|variant|path|string|true|The name of the variant to create. Cannot be "base" (protected name).|
|body|body|object|true|none|
|» provider_config_key|body|string|true|The integration ID used when creating the connection|
|» connection_id|body|string|true|The ID of the connection to create the sync variant for|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "variant": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "invalid_body",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "failed_sync_variant_creation",
    "message": "string"
  }
}
```

<h3 id="create-sync-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the sync variant|Inline|
|400|Bad Request|Invalid request|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="create-sync-variant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the created sync variant|
|name|string|true|none|The name of the sync|
|variant|string|true|none|The name of the variant|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|
|» errors|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|invalid_body|
|» code|invalid_uri_params|
|» code|invalid_query_params|
|» code|invalid_variant|
|» code|unknown_connection|
|» code|unknown_provider_config|
|» code|unknown_sync|
|» code|sync_variant_already_exists|
|» code|resource_capped|
|» code|feature_disabled|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|failed_sync_variant_creation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete sync variant

> Code samples

```bash
curl https://api.nango.dev/sync/string/variant/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string"
  }'
```

`DELETE /sync/{name}/variant/{variant}`

Deletes a sync variant for a specific connection

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string"
}
```

<h3 id="delete-sync-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the sync|
|variant|path|string|true|The name of the variant to delete. Cannot be "base" (protected name).|
|body|body|object|true|none|
|» provider_config_key|body|string|true|The integration ID used when creating the connection|
|» connection_id|body|string|true|The ID of the connection the sync variant belongs to|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "invalid_body",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "not_found"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "failed_sync_variant_deletion",
    "message": "string"
  }
}
```

<h3 id="delete-sync-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted the sync variant|Inline|
|400|Bad Request|Invalid request|Inline|
|404|Not Found|Sync variant not found|Inline|
|500|Internal Server Error|Server error|Inline|

<h3 id="delete-sync-variant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates if the deletion was successful|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|
|» errors|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|invalid_body|
|» code|invalid_uri_params|
|» code|invalid_query_params|
|» code|invalid_variant|
|» code|unknown_connection|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|not_found|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» code|string|false|none|none|
|» message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|failed_sync_variant_deletion|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get action result (deprecated)

> Code samples

```bash
curl https://api.nango.dev/action/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/{actionId}`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves the result of an asynchronous action. See [Asynchronous action documentation](/guides/functions/action-functions#trigger-asynchronously) for more details.

<h3 id="get-action-result-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actionId|path|string|true|The ID of the asynchronous action (returned from triggering an action with X-Async header)|

> Example responses

> 200 Response

```json
{
  "your-properties": "The data returned by the action"
}
```

> 404 Response

```json
{
  "error": {
    "message": "Action not completed yet"
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "string",
    "code": "string",
    "payload": {}
  }
}
```

<h3 id="get-action-result-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The action has completed successfully (output cannot exceed 2MB)|Inline|
|404|Not Found|No results. The action has not completed yet|Inline|
|500|Internal Server Error|The action has completed with an error|Inline|

<h3 id="get-action-result-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|your-properties|string|false|none|The data returned by the action|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» message|string|false|none|none|
|» code|string|false|none|none|
|» payload|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update sync frequency

> Code samples

```bash
curl https://api.nango.dev/sync/update-connection-frequency \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_config_key": "string",
    "connection_id": "string",
    "sync_name": "string",
    "sync_variant": "string",
    "frequency": "string"
  }'
```

`PUT /sync/update-connection-frequency`

Override a sync's default frequency for a specific connection, or revert to the default frequency.

> Body parameter

```json
{
  "provider_config_key": "string",
  "connection_id": "string",
  "sync_name": "string",
  "sync_variant": "string",
  "frequency": "string"
}
```

<h3 id="update-sync-frequency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» provider_config_key|body|string|true|The ID of the integration you established within Nango|
|» connection_id|body|string|true|The ID of the connection|
|» sync_name|body|string|true|The name of the sync you want to update|
|» sync_variant|body|string|false|The variant of the sync you want to update|
|» frequency|body|string \| null|true|The frequency you want to set (ex: 'every hour'). Set null to revert to the default frequency. Uses the https://github.com/vercel/ms notations. Min frequency: 30 seconds.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "frequency": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="update-sync-frequency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the frequency|Inline|
|400|Bad Request|Invalid request|Inline|

<h3 id="update-sync-frequency-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string|false|none|The updated frequency value|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Call a tool

<a id="opIdcallTool"></a>

> Code samples

```bash
curl https://api.nango.dev/connections/string/tools/string/calls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": {
      "owner": "NangoHQ",
      "repo": "interactive-demo",
      "title": "Bug report"
    }
  }'
```

`POST /connections/{connectionId}/tools/{name}/calls`

Calls an enabled tool synchronously and returns its JSON output directly.
Requires the `environment:tools:call` scope.


> Body parameter

```json
{
  "input": {
    "owner": "NangoHQ",
    "repo": "interactive-demo",
    "title": "Bug report"
  }
}
```

<h3 id="call-a-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The connection ID to execute the tool for.|
|name|path|string|true|The tool name on the integration.|
|Provider-Config-Key|header|string|false|Integration ID. Required when multiple integrations share the connection ID.|
|body|body|object|true|none|
|» input|body|object|false|Input matching the tool's schema. Omit for tools that take no input.|

> Example responses

> 200 Response

```json
null
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="call-a-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tool's JSON output, returned directly without a data wrapper.|Inline|
|400|Bad Request|Invalid request, invalid tool input, invalid invocation, or ambiguous connection ID. Supply Provider-Config-Key to disambiguate.|None|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Missing permissions or function disabled during invocation.|None|
|404|Not Found|Connection or enabled tool not found.|None|
|500|Internal Server Error|Tool execution failed or a server error occurred.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger an action (deprecated)

> Code samples

```bash
curl https://api.nango.dev/action/trigger \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string' \
  -d '{
    "action_name": "string",
    "input": {}
  }'
```

`POST /action/trigger`

<aside class="warning">
This operation is deprecated
</aside>

Legacy action execution. Use POST /connections/{connectionId}/tools/{name}/calls for new synchronous callers. Existing async callers can continue using this endpoint.

> Body parameter

```json
{
  "action_name": "string",
  "input": {}
}
```

<h3 id="trigger-an-action-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|X-Async|header|boolean|false|Set to true to trigger the action asynchronously. When true, the response will include a status URL and ID for retrieving the action result later. See [Asynchronous action documentation](/guides/functions/action-functions#trigger-asynchronously) for more details.|
|X-Max-Retries|header|integer|false|The maximum number of retries in case of failure (between 0 and 5). Only applicable when X-Async is true. Default to 0 if not specified.|
|body|body|object|true|none|
|» action_name|body|string|true|The name of the action to trigger.|
|» input|body|object|false|The necessary input for your action's 'exec' function.|

> Example responses

> 200 Response

```json
{
  "your-properties": "The data returned by the action"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 424 Response

```json
{
  "error": {
    "message": "string",
    "code": "string",
    "payload": {},
    "upstream": {
      "status": 0,
      "headers": {
        "content-type": "string"
      },
      "body": {}
    }
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "string",
    "code": "string",
    "payload": {}
  }
}
```

<h3 id="trigger-an-action-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The result of the action.|Inline|
|400|Bad Request|Invalid request|Inline|
|424|Failed Dependency|Action http error|Inline|
|500|Internal Server Error|Action error|Inline|

<h3 id="trigger-an-action-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|The result of the legacy action when triggered synchronously (cannot exceed 2 MB).|
|your-properties|object|false|none|The data returned by the action|
|*oneOf*|object|false|none|The ID and the status URL of the action to poll for the result when triggered asynchronously.|
|statusUrl|string|true|none|URL to poll for the action result|
|id|string|true|none|Unique identifier for the asynchronous action|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **424**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|» message|string|true|none|none|
|» code|string|true|none|none|
|» payload|object|true|none|none|
|» upstream|object|false|none|none|
|» » status|integer|false|none|none|
|» » headers|object|false|none|none|
|» » » content-type|string|false|none|none|
|» » body|object|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|» message|string|true|none|none|
|» code|string|true|none|none|
|» payload|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List environments

> Code samples

```bash
curl https://api.nango.dev/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /environments`

List environments in the authenticated account. Optionally filter by an exact environment name.

<h3 id="list-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Exact environment name to find.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 123,
      "uuid": "123e4567-e89b-12d3-a456-426614174000",
      "name": "staging",
      "is_production": true
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully listed environments|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|

<h3 id="list-environments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|integer|true|none|Numeric environment ID.|
|» uuid|string(uuid)|true|none|Environment UUID. Use this in account-level API calls for this environment.|
|» name|string|true|none|The environment name.|
|» is_production|boolean|true|none|Whether the environment is production.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an environment

> Code samples

```bash
curl https://api.nango.dev/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "staging",
    "is_production": true,
    "callback_url": "http://example.com",
    "hmac_key": "string",
    "hmac_enabled": true,
    "slack_notifications": true,
    "otlp_endpoint": "string",
    "otlp_headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "webhooks": {
      "primary_url": "string",
      "secondary_url": "string",
      "on_sync_completion_always": true,
      "on_auth_creation": true,
      "on_auth_refresh_error": true,
      "on_sync_error": true,
      "on_async_action_completion": true,
      "on_connection_deletion": true,
      "signing_key": "5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f"
    }
  }'
```

`POST /environments`

Create a new environment

> Body parameter

```json
{
  "name": "staging",
  "is_production": true,
  "callback_url": "http://example.com",
  "hmac_key": "string",
  "hmac_enabled": true,
  "slack_notifications": true,
  "otlp_endpoint": "string",
  "otlp_headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "webhooks": {
    "primary_url": "string",
    "secondary_url": "string",
    "on_sync_completion_always": true,
    "on_auth_creation": true,
    "on_auth_refresh_error": true,
    "on_sync_error": true,
    "on_async_action_completion": true,
    "on_connection_deletion": true,
    "signing_key": "5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f"
  }
}
```

<h3 id="create-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Environment name. Lowercase letters, digits, hyphens, and underscores only. Max 255 characters. The reserved name `prod` is always treated as production.|
|» is_production|body|boolean|false|Whether to mark the environment as production. Defaults to false, except for the reserved name `prod`.|
|» callback_url|body|string(uri)|false|Custom OAuth callback URL for this environment.|
|» hmac_key|body|string|false|**Deprecated.** Legacy public-key authorization HMAC key. Use [Connect sessions](/guides/auth/auth-guide#guide) instead.|
|» hmac_enabled|body|boolean|false|**Deprecated.** Whether legacy public-key authorization HMAC verification is enabled. Use [Connect sessions](/guides/auth/auth-guide#guide) instead.|
|» slack_notifications|body|boolean|false|Whether Slack notifications are enabled for this environment.|
|» otlp_endpoint|body|string|false|OpenTelemetry collector endpoint. Requires a plan with OpenTelemetry export. Pass an empty string to set an empty endpoint.|
|» otlp_headers|body|[object]|false|Headers sent with OpenTelemetry export requests. Requires a plan with OpenTelemetry export. Maximum 100 headers.|
|» » name|body|string|true|none|
|» » value|body|string|true|none|
|» webhooks|body|object|false|Initial webhook settings. Omitted URLs default to null; omitted subscription flags default to true.|
|» » primary_url|body|string|false|First webhook destination. Use an empty string for no destination.|
|» » secondary_url|body|string|false|Second webhook destination. Webhooks are sent to both configured URLs. Use an empty string for no destination.|
|» » on_sync_completion_always|body|boolean|false|Send sync completion webhooks even when no records were added, updated, or deleted.|
|» » on_auth_creation|body|boolean|false|Send webhooks when connections are created.|
|» » on_auth_refresh_error|body|boolean|false|Send webhooks when refreshing connection credentials fails.|
|» » on_sync_error|body|boolean|false|Send webhooks when sync functions fail.|
|» » on_async_action_completion|body|boolean|false|Send webhooks when deprecated asynchronous action functions complete.|
|» » on_connection_deletion|body|boolean|false|Send webhooks when connections are deleted.|
|» » signing_key|body|string(uuid)|false|Key used to sign webhooks sent from this environment. Must be a UUID. Defaults to a randomly generated UUID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 123,
    "uuid": "123e4567-e89b-12d3-a456-426614174000",
    "name": "staging",
    "is_production": true,
    "callback_url": "http://example.com",
    "slack_notifications": true,
    "otlp_endpoint": "string",
    "otlp_headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "webhooks": {
      "primary_url": "string",
      "secondary_url": "string",
      "on_sync_completion_always": true,
      "on_auth_creation": true,
      "on_auth_refresh_error": true,
      "on_sync_error": true,
      "on_async_action_completion": true,
      "on_connection_deletion": true,
      "signing_key": "5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f"
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an environment|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|409|Conflict|An environment with this name already exists.|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="create-an-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» id|integer|true|none|none|
|» uuid|string(uuid)|true|none|none|
|» name|string|true|none|none|
|» is_production|boolean|true|none|none|
|» callback_url|string(uri)|true|none|none|
|» slack_notifications|boolean|true|none|none|
|» otlp_endpoint|string \| null|true|none|none|
|» otlp_headers|[object]|true|none|none|
|» » name|string|true|none|none|
|» » value|string|true|none|none|
|» webhooks|object|true|none|none|
|» » primary_url|string \| null|true|none|none|
|» » secondary_url|string \| null|true|none|none|
|» » on_sync_completion_always|boolean|true|none|none|
|» » on_auth_creation|boolean|true|none|none|
|» » on_auth_refresh_error|boolean|true|none|none|
|» » on_sync_error|boolean|true|none|none|
|» » on_async_action_completion|boolean|true|none|none|
|» » on_connection_deletion|boolean|true|none|none|
|» » signing_key|string(uuid)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get an environment

> Code samples

```bash
curl https://api.nango.dev/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /environments/{environmentUuid}`

Retrieve an environment's configuration.

<h3 id="get-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID.|
|with_secrets|query|boolean|false|Include the webhook signing key and OpenTelemetry headers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 123,
    "uuid": "123e4567-e89b-12d3-a456-426614174000",
    "name": "staging",
    "is_production": true,
    "callback_url": "http://example.com",
    "slack_notifications": true,
    "otlp_endpoint": "string",
    "otlp_headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "webhooks": {
      "primary_url": "string",
      "secondary_url": "string",
      "on_sync_completion_always": true,
      "on_auth_creation": true,
      "on_auth_refresh_error": true,
      "on_sync_error": true,
      "on_async_action_completion": true,
      "on_connection_deletion": true,
      "signing_key": "5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f"
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved an environment|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="get-an-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» id|integer|true|none|none|
|» uuid|string(uuid)|true|none|none|
|» name|string|true|none|none|
|» is_production|boolean|true|none|none|
|» callback_url|string(uri)|true|none|none|
|» slack_notifications|boolean|true|none|none|
|» otlp_endpoint|string \| null|true|none|none|
|» otlp_headers|[object]|false|none|Only included when with_secrets=true.|
|» » name|string|true|none|none|
|» » value|string|true|none|none|
|» webhooks|object|true|none|none|
|» » primary_url|string \| null|true|none|none|
|» » secondary_url|string \| null|true|none|none|
|» » on_sync_completion_always|boolean|true|none|none|
|» » on_auth_creation|boolean|true|none|none|
|» » on_auth_refresh_error|boolean|true|none|none|
|» » on_sync_error|boolean|true|none|none|
|» » on_async_action_completion|boolean|true|none|none|
|» » on_connection_deletion|boolean|true|none|none|
|» » signing_key|string|false|none|Current webhook signing key. Only included when with_secrets=true.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an environment

> Code samples

```bash
curl https://api.nango.dev/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /environments/{environmentUuid}`

Delete an environment

<h3 id="delete-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID returned when the environment was created.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the environment|None|
|400|Bad Request|Cannot delete the reserved `prod` environment.|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an environment

<a id="opIdupdateEnvironment"></a>

> Code samples

```bash
curl https://api.nango.dev/environments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "staging",
    "is_production": true,
    "callback_url": "http://example.com",
    "slack_notifications": true,
    "otlp_endpoint": "string",
    "otlp_headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "webhooks": {
      "primary_url": "string",
      "secondary_url": "string",
      "on_sync_completion_always": true,
      "on_auth_creation": true,
      "on_auth_refresh_error": true,
      "on_sync_error": true,
      "on_async_action_completion": true,
      "on_connection_deletion": true
    }
  }'
```

`PATCH /environments/{environmentUuid}`

Update an environment

> Body parameter

```json
{
  "name": "staging",
  "is_production": true,
  "callback_url": "http://example.com",
  "slack_notifications": true,
  "otlp_endpoint": "string",
  "otlp_headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "webhooks": {
    "primary_url": "string",
    "secondary_url": "string",
    "on_sync_completion_always": true,
    "on_auth_creation": true,
    "on_auth_refresh_error": true,
    "on_sync_error": true,
    "on_async_action_completion": true,
    "on_connection_deletion": true
  }
}
```

<h3 id="update-an-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID.|
|body|body|object|true|none|
|» name|body|string|false|Environment name. Lowercase letters, digits, hyphens, and underscores only. Max 255 characters. The reserved prod environment cannot be renamed.|
|» is_production|body|boolean|false|Change the production flag. Requires account:environments:set_production in addition to account:environments:update. The reserved prod environment cannot have its production flag changed.|
|» callback_url|body|string(uri)|false|Custom OAuth callback URL for this environment.|
|» slack_notifications|body|boolean|false|Whether Slack notifications are enabled for this environment.|
|» otlp_endpoint|body|string|false|OpenTelemetry collector endpoint. Requires a plan with OpenTelemetry export. Pass an empty string to set an empty endpoint.|
|» otlp_headers|body|[object]|false|Headers sent with OpenTelemetry export requests. Requires a plan with OpenTelemetry export. Replaces the entire header set; pass an empty array to clear it. Omitted headers are preserved. Maximum 100 headers.|
|» » name|body|string|true|none|
|» » value|body|string|true|none|
|» webhooks|body|object|false|Partial webhook settings. Omitted fields retain their existing values.|
|» » primary_url|body|string \| null|false|First webhook destination. Use an empty string for no destination. Pass null to clear the URL.|
|» » secondary_url|body|string \| null|false|Second webhook destination. Webhooks are sent to both configured URLs. Use an empty string for no destination. Pass null to clear the URL.|
|» » on_sync_completion_always|body|boolean|false|Send sync completion webhooks even when no records were added, updated, or deleted.|
|» » on_auth_creation|body|boolean|false|Send webhooks when connections are created.|
|» » on_auth_refresh_error|body|boolean|false|Send webhooks when refreshing connection credentials fails.|
|» » on_sync_error|body|boolean|false|Send webhooks when sync functions fail.|
|» » on_async_action_completion|body|boolean|false|Send webhooks when asynchronous action functions complete.|
|» » on_connection_deletion|body|boolean|false|Send webhooks when connections are deleted.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="update-an-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the environment.|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|409|Conflict|An environment with this name already exists.|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="update-an-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List environment API keys

> Code samples

```bash
curl https://api.nango.dev/environments/123e4567-e89b-12d3-a456-426614174000/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /environments/{environmentUuid}/api-keys`

Returns a list of Environment API keys in an environment.

<h3 id="list-environment-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID that owns the keys.|
|display_name|query|string|false|Exact API-key display name to find.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 456,
      "uuid": "123e4567-e89b-12d3-a456-426614174001",
      "display_name": "provisioned-ci",
      "scopes": [
        "string"
      ],
      "last_used_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="list-environment-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully listed Environment API keys|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="list-environment-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» id|integer|true|none|Numeric API-key ID.|
|» uuid|string(uuid)|true|none|API-key UUID.|
|» display_name|string|true|none|none|
|» scopes|[string]|true|none|none|
|» last_used_at|string \| null(date-time)|true|none|none|
|» created_at|string(date-time)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an environment API key

> Code samples

```bash
curl https://api.nango.dev/environments/123e4567-e89b-12d3-a456-426614174000/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "provisioned-ci",
    "scopes": [
      "environment:deploy"
    ]
  }'
```

`POST /environments/{environmentUuid}/api-keys`

Create a new environment API key

> Body parameter

```json
{
  "display_name": "provisioned-ci",
  "scopes": [
    "environment:deploy"
  ]
}
```

<h3 id="create-an-environment-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID that will own the key.|
|body|body|object|true|none|
|» display_name|body|string|true|Display name for the key. Must be unique within the environment.|
|» scopes|body|[string]|false|Environment scopes to grant the key, such as `environment:deploy` or `environment:*`. Defaults to `environment:*` (full access).|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 456,
    "uuid": "123e4567-e89b-12d3-a456-426614174001",
    "display_name": "provisioned-ci",
    "scopes": [
      "environment:deploy"
    ],
    "secret": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-an-environment-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created an Environment API key|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|409|Conflict|A key with this display name already exists in the environment.|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="create-an-environment-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» id|integer|true|none|Numeric key ID.|
|» uuid|string(uuid)|true|none|API key UUID. Use this to delete the key later.|
|» display_name|string|true|none|none|
|» scopes|[string]|true|none|Scopes granted to the key. `environment:*` when no scopes were specified.|
|» secret|string|true|none|The API key secret. Store it now; it is not returned again.|
|» created_at|string(date-time)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get an environment API key

> Code samples

```bash
curl https://api.nango.dev/environments/123e4567-e89b-12d3-a456-426614174000/api-keys/123e4567-e89b-12d3-a456-426614174001 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /environments/{environmentUuid}/api-keys/{keyUuid}`

Retrieve an Environment API key, including its secret.

<h3 id="get-an-environment-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID that owns the key.|
|keyUuid|path|string(uuid)|true|API-key UUID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 456,
    "uuid": "123e4567-e89b-12d3-a456-426614174001",
    "display_name": "provisioned-ci",
    "scopes": [
      "string"
    ],
    "secret": "string",
    "last_used_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-an-environment-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the Environment API key|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="get-an-environment-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» id|integer|true|none|none|
|» uuid|string(uuid)|true|none|none|
|» display_name|string|true|none|none|
|» scopes|[string]|true|none|none|
|» secret|string|true|none|The Environment API-key secret.|
|» last_used_at|string \| null(date-time)|true|none|none|
|» created_at|string(date-time)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an environment API key

> Code samples

```bash
curl https://api.nango.dev/environments/123e4567-e89b-12d3-a456-426614174000/api-keys/123e4567-e89b-12d3-a456-426614174001 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /environments/{environmentUuid}/api-keys/{keyUuid}`

Delete an environment API key

<h3 id="delete-an-environment-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID that owns the key.|
|keyUuid|path|string(uuid)|true|API key UUID returned when the key was created.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-an-environment-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted the Environment API key|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="delete-an-environment-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an environment API key

> Code samples

```bash
curl https://api.nango.dev/environments/123e4567-e89b-12d3-a456-426614174000/api-keys/123e4567-e89b-12d3-a456-426614174001 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "provisioned-ci",
    "scopes": [
      "environment:deploy"
    ]
  }'
```

`PATCH /environments/{environmentUuid}/api-keys/{keyUuid}`

Change the display name and/or scopes of an Environment API key. Requires an Account API key with the `account:environments:api_keys:update` scope.

> Body parameter

```json
{
  "display_name": "provisioned-ci",
  "scopes": [
    "environment:deploy"
  ]
}
```

<h3 id="update-an-environment-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environmentUuid|path|string(uuid)|true|Environment UUID that owns the key.|
|keyUuid|path|string(uuid)|true|API-key UUID.|
|body|body|object|true|none|
|» display_name|body|string|false|New display name for the key. Must be unique within the environment.|
|» scopes|body|[string]|false|Environment scopes that replace the key's current scopes, such as `environment:deploy` or `environment:*`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 456,
    "uuid": "123e4567-e89b-12d3-a456-426614174001",
    "display_name": "provisioned-ci",
    "scopes": [
      "environment:deploy"
    ],
    "last_used_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="update-an-environment-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the Environment API key|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|409|Conflict|A key with this display name already exists in the environment.|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="update-an-environment-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» id|integer|true|none|none|
|» uuid|string(uuid)|true|none|none|
|» display_name|string|true|none|none|
|» scopes|[string]|true|none|none|
|» last_used_at|string \| null(date-time)|true|none|none|
|» created_at|string(date-time)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get environment variables

> Code samples

```bash
curl https://api.nango.dev/environment-variables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /environment-variables`

Retrieve the environment variables as added in the Nango dashboard

> Example responses

> 200 Response

```json
[
  {
    "name": "MY_SECRET_KEY",
    "value": "SK_373892NSHFNCOWFO..."
  }
]
```

<h3 id="get-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve the environment variables as added in the Nango dashboard|Inline|

<h3 id="get-environment-variables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» name|string|false|none|The name of the environment variable|
|» value|string|false|none|The value of the environment variable|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotate the webhook signing key

> Code samples

```bash
curl https://api.nango.dev/environment/webhook-signing-key/rotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhook_signing_key": "8a27fe09-327c-43ec-8f75-b1f212904f45"
  }'
```

`POST /environment/webhook-signing-key/rotate`

Replace the key Nango signs its webhooks with. The previous key stops being used within 5 minutes,
so verify against both during that window.


> Body parameter

```json
{
  "webhook_signing_key": "8a27fe09-327c-43ec-8f75-b1f212904f45"
}
```

<h3 id="rotate-the-webhook-signing-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» webhook_signing_key|body|string(uuid)|false|Optional UUID v4 signing key to import. If omitted, Nango generates a random key.|

> Example responses

> 200 Response

```json
{
  "data": {
    "webhook_signing_key": "5f1c0d2e-6a1b-4f3c-9d8e-7b6a5c4d3e2f"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="rotate-the-webhook-signing-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new webhook signing key|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|403|Forbidden|Forbidden|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|
|409|Conflict|The environment has more than one webhook signing key and cannot be rotated automatically.|[StdError](#schemastderror)|
|500|Internal Server Error|Server error|[StdError](#schemastderror)|

<h3 id="rotate-the-webhook-signing-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» webhook_signing_key|string|true|none|The new webhook signing key|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Proxy GET request

> Code samples

```bash
curl 'https://api.nango.dev/proxy/string?%24ANY_QUERY_PARAMS=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string'
```

`GET /proxy/{anyPath}`

Make a GET request with the Proxy.

<h3 id="proxy-get-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anyPath|path|string|true|none|
|$ANY_QUERY_PARAMS|query|string|true|none|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|Retries|header|string|false|The number of retries in case of failure (with exponential back-off). Optional, default 0.|
|Retry-On|header|string|false|Comma separated status codes to explicitly retry on in addition to the default 5xx and 429.|
|Base-Url-Override|header|string|false|Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional|
|Decompress|header|string|false|Override the decompress option when making requests. Optional, defaults to false|
|nango-proxy-$ANY_HEADER|header|string|false|Any other headers you send are passed on to the external API|

<h3 id="proxy-get-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response exactly as returned by the external API|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Proxy PUT request

> Code samples

```bash
curl https://api.nango.dev/proxy/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string' \
  -d '{
    "$ANY_BODY_PARAMS": "string"
  }'
```

`PUT /proxy/{anyPath}`

Make a PUT request with the Proxy.

> Body parameter

```json
{
  "$ANY_BODY_PARAMS": "string"
}
```

<h3 id="proxy-put-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anyPath|path|string|true|none|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|Retries|header|string|false|The number of retries in case of failure (with exponential back-off). Optional, default 0.|
|Base-Url-Override|header|string|false|Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional|
|Decompress|header|string|false|Override the decompress option when making requests. Optional, defaults to false|
|nango-proxy-$ANY_HEADER|header|string|false|Any other headers you send are passed on to the external API|
|body|body|object|false|none|
|» $ANY_BODY_PARAMS|body|string|false|none|

<h3 id="proxy-put-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response exactly as returned by the external API|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Proxy POST request

> Code samples

```bash
curl https://api.nango.dev/proxy/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string' \
  -d '{
    "$ANY_BODY_PARAMS": "string"
  }'
```

`POST /proxy/{anyPath}`

Make a POST request with the Proxy.

> Body parameter

```json
{
  "$ANY_BODY_PARAMS": "string"
}
```

<h3 id="proxy-post-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anyPath|path|string|true|none|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|Retries|header|string|false|The number of retries in case of failure (with exponential back-off). Optional, default 0.|
|Base-Url-Override|header|string|false|Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional|
|Decompress|header|string|false|Override the decompress option when making requests. Optional, defaults to false|
|nango-proxy-$ANY_HEADER|header|string|false|Any other headers you send are passed on to the external API|
|body|body|object|false|none|
|» $ANY_BODY_PARAMS|body|string|false|none|

<h3 id="proxy-post-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response exactly as returned by the external API|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Proxy DELETE request

> Code samples

```bash
curl 'https://api.nango.dev/proxy/string?%24ANY_QUERY_PARAMS=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string'
```

`DELETE /proxy/{anyPath}`

Make a DELETE request with the Proxy.

<h3 id="proxy-delete-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anyPath|path|string|true|none|
|$ANY_QUERY_PARAMS|query|string|true|none|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|Retries|header|string|false|The number of retries in case of failure (with exponential back-off). Optional, default 0.|
|Base-Url-Override|header|string|false|Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional|
|Decompress|header|string|false|Override the decompress option when making requests. Optional, defaults to false|
|nango-proxy-$ANY_HEADER|header|string|false|Any other headers you send are passed on to the external API|

<h3 id="proxy-delete-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response exactly as returned by the external API|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Proxy PATCH request

> Code samples

```bash
curl https://api.nango.dev/proxy/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Connection-Id: string' \
  -H 'Provider-Config-Key: string' \
  -d '{
    "$ANY_BODY_PARAMS": "string"
  }'
```

`PATCH /proxy/{anyPath}`

Make a PATCH request with the Proxy.

> Body parameter

```json
{
  "$ANY_BODY_PARAMS": "string"
}
```

<h3 id="proxy-patch-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anyPath|path|string|true|none|
|Connection-Id|header|string|true|The connection ID used to create the connection.|
|Provider-Config-Key|header|string|true|The integration ID used to create the connection (aka Unique Key).|
|Retries|header|string|false|The number of retries in case of failure (with exponential back-off). Optional, default 0.|
|Base-Url-Override|header|string|false|Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional|
|Decompress|header|string|false|Override the decompress option when making requests. Optional, defaults to false|
|nango-proxy-$ANY_HEADER|header|string|false|Any other headers you send are passed on to the external API|
|body|body|object|false|none|
|» $ANY_BODY_PARAMS|body|string|false|none|

<h3 id="proxy-patch-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response exactly as returned by the external API|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create connect session

> Code samples

```bash
curl https://api.nango.dev/connect/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "end_user": {
      "id": "string",
      "email": "string",
      "display_name": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "organization": {
      "id": "string",
      "display_name": "string"
    },
    "allowed_integrations": [
      "string"
    ],
    "integrations_config_defaults": {
      "property1": {
        "user_scopes": "string",
        "authorization_params": {},
        "connection_config": {
          "oauth_scopes_override": "string",
          "oauth_client_id_override": "string",
          "oauth_client_secret_override": "string"
        }
      },
      "property2": {
        "user_scopes": "string",
        "authorization_params": {},
        "connection_config": {
          "oauth_scopes_override": "string",
          "oauth_client_id_override": "string",
          "oauth_client_secret_override": "string"
        }
      }
    },
    "overrides": {
      "property1": {
        "docs_connect": "string"
      },
      "property2": {
        "docs_connect": "string"
      }
    },
    "webhook_url_override": "string"
  }'
```

`POST /connect/sessions`

Create a new connect session

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "organization": {
    "id": "string",
    "display_name": "string"
  },
  "allowed_integrations": [
    "string"
  ],
  "integrations_config_defaults": {
    "property1": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    },
    "property2": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    }
  },
  "overrides": {
    "property1": {
      "docs_connect": "string"
    },
    "property2": {
      "docs_connect": "string"
    }
  },
  "webhook_url_override": "string"
}
```

<h3 id="create-connect-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectSessionInput](#schemaconnectsessioninput)|true|none|
|» tags|body|[Tags](#schematags)|false|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» end_user|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|**Deprecated.** Uniquely identifies the end user.|
|» » email|body|string|false|**Deprecated.**|
|» » display_name|body|string|false|**Deprecated.**|
|» » tags|body|object|false|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|
|» » » **additionalProperties**|body|string|false|none|
|» organization|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|Uniquely identifies the organization the end user belongs to|
|» » display_name|body|string|false|none|
|» allowed_integrations|body|[string]|false|Filters which integrations the end user can interact with|
|» integrations_config_defaults|body|object|false|none|
|» » **additionalProperties**|body|object|false|the unique name of an integration|
|» » » user_scopes|body|string|false|User scopes (for Slack only)|
|» » » authorization_params|body|object|false|Query params passed to the OAuth flow (for OAuth2 only)|
|» » » connection_config|body|object|false|none|
|» » » » oauth_scopes_override|body|string|false|Override oauth scopes|
|» » » » oauth_client_id_override|body|string|false|Set to empty string to allow end-users to provide their own OAuth client ID in Connect UI|
|» » » » oauth_client_secret_override|body|string|false|Set to empty string to allow end-users to provide their own OAuth client secret in Connect UI|
|» overrides|body|object|false|none|
|» » **additionalProperties**|body|object|false|The unique name of an integration|
|» » » docs_connect|body|string|false|Override the url of the docs we point to in the connect flow|
|» webhook_url_override|body|string|false|Override the environment's webhook URLs for the connection created by this session. When set, that connection's webhooks are sent only to this URL (the environment's primary and secondary URLs are bypassed).|

> Example responses

> 201 Response

```json
{
  "data": {
    "token": "string",
    "connect_link": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="create-connect-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created a connect session|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="create-connect-session-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ConnectSession](#schemaconnectsession)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reconnect with connect session

> Code samples

```bash
curl https://api.nango.dev/connect/sessions/reconnect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "integration_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "end_user": {
      "id": "string",
      "email": "string",
      "display_name": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "organization": {
      "id": "string",
      "display_name": "string"
    },
    "integrations_config_defaults": {
      "property1": {
        "user_scopes": "string",
        "authorization_params": {},
        "connection_config": {
          "oauth_scopes_override": "string",
          "oauth_client_id_override": "string",
          "oauth_client_secret_override": "string"
        }
      },
      "property2": {
        "user_scopes": "string",
        "authorization_params": {},
        "connection_config": {
          "oauth_scopes_override": "string",
          "oauth_client_id_override": "string",
          "oauth_client_secret_override": "string"
        }
      }
    },
    "overrides": {
      "property1": {
        "docs_connect": "string"
      },
      "property2": {
        "docs_connect": "string"
      }
    },
    "webhook_url_override": "string"
  }'
```

`POST /connect/sessions/reconnect`

Create a new connect session to reconnect to a specific integration. The token is used like a standard connect session.
Only connections created with a connect session are compatible with this endpoint.
Use this method when a user needs to input new credentials or to manually refresh token.
The connection keeps its connection ID. When the user authorizes, the connection's tags are replaced by the ones built from `tags` and `end_user`. If that leaves no tags, for example when neither is passed or `tags` is `{}`, the connection keeps its existing tags.


> Body parameter

```json
{
  "connection_id": "string",
  "integration_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "organization": {
    "id": "string",
    "display_name": "string"
  },
  "integrations_config_defaults": {
    "property1": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    },
    "property2": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    }
  },
  "overrides": {
    "property1": {
      "docs_connect": "string"
    },
    "property2": {
      "docs_connect": "string"
    }
  },
  "webhook_url_override": "string"
}
```

<h3 id="reconnect-with-connect-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectSessionReconnectInput](#schemaconnectsessionreconnectinput)|true|none|
|» connection_id|body|string|true|none|
|» integration_id|body|string|true|none|
|» tags|body|[Tags](#schematags)|false|Connection tags (key/value strings). Keys are normalized to lowercase.|
|» end_user|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|**Deprecated.** Uniquely identifies the end user.|
|» » email|body|string|false|**Deprecated.**|
|» » display_name|body|string|false|**Deprecated.**|
|» » tags|body|object|false|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|
|» » » **additionalProperties**|body|string|false|none|
|» organization|body|object|false|**Deprecated.** Deprecated, use tags instead|
|» » id|body|string|true|Uniquely identifies the organization the end user belongs to|
|» » display_name|body|string|false|none|
|» integrations_config_defaults|body|object|false|none|
|» » **additionalProperties**|body|object|false|the unique name of an integration|
|» » » user_scopes|body|string|false|User scopes (for Slack only)|
|» » » authorization_params|body|object|false|Query params passed to the OAuth flow (for OAuth2 only)|
|» » » connection_config|body|object|false|none|
|» » » » oauth_scopes_override|body|string|false|Override oauth scopes|
|» » » » oauth_client_id_override|body|string|false|Set to empty string to allow end-users to provide their own OAuth client ID in Connect UI|
|» » » » oauth_client_secret_override|body|string|false|Set to empty string to allow end-users to provide their own OAuth client secret in Connect UI|
|» overrides|body|object|false|none|
|» » **additionalProperties**|body|object|false|The unique name of an integration|
|» » » docs_connect|body|string|false|Override the url of the docs we point to in the connect flow|
|» webhook_url_override|body|string|false|Override the environment's webhook URLs for the connection created by this session. When set, that connection's webhooks are sent only to this URL (the environment's primary and secondary URLs are bypassed).|

> Example responses

> 201 Response

```json
{
  "data": {
    "token": "string",
    "connect_link": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="reconnect-with-connect-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created a connect session|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|

<h3 id="reconnect-with-connect-session-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ConnectSession](#schemaconnectsession)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get connect session

> Code samples

```bash
curl https://api.nango.dev/connect/session \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connect/session`

Retrieve a connect session

> Example responses

> 200 Response

```json
{
  "data": {
    "token": "string",
    "connect_link": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="get-connect-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved a connect session|Inline|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<h3 id="get-connect-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ConnectSession](#schemaconnectsession)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete connect session

> Code samples

```bash
curl https://api.nango.dev/connect/session \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /connect/session`

Delete a connect session

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

<h3 id="delete-connect-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted a connect session|None|
|400|Bad Request|Bad request|[StdError](#schemastderror)|
|401|Unauthorized|Unauthorized|[StdError](#schemastderror)|
|404|Not Found|Not Found|[StdError](#schemastderror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_StdError">StdError</h2>
<!-- backwards compatibility -->
<a id="schemastderror"></a>
<a id="schema_StdError"></a>
<a id="tocSstderror"></a>
<a id="tocsstderror"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "errors": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_RunnableFunctionType">RunnableFunctionType</h2>
<!-- backwards compatibility -->
<a id="schemarunnablefunctiontype"></a>
<a id="schema_RunnableFunctionType"></a>
<a id="tocSrunnablefunctiontype"></a>
<a id="tocsrunnablefunctiontype"></a>

```json
"action"
```

Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.

<h2 id="tocS_FunctionAvailability">FunctionAvailability</h2>
<!-- backwards compatibility -->
<a id="schemafunctionavailability"></a>
<a id="schema_FunctionAvailability"></a>
<a id="tocSfunctionavailability"></a>
<a id="tocsfunctionavailability"></a>

```json
{
  "id": 0,
  "enabled": true,
  "last_deployed": "1970-01-01T00:00:00Z",
  "source": "catalog"
}
```

Availability metadata attached to a listed function. Catalog tools have `id: null`, `last_deployed: null`, `enabled: true`, and `source: tools-catalog`. Deployed functions have an id and a `last_deployed` timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number \| null|true|none|Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.|
|enabled|boolean|true|none|Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.|
|last_deployed|string \| null(date-time)|true|none|ISO-8601 timestamp. `null` for a Nango catalog tool.|
|source|string|true|none|`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|catalog|
|source|standalone|
|source|repo|
|source|tools-catalog|

<h2 id="tocS_NangoSyncFunction">NangoSyncFunction</h2>
<!-- backwards compatibility -->
<a id="schemanangosyncfunction"></a>
<a id="schema_NangoSyncFunction"></a>
<a id="tocSnangosyncfunction"></a>
<a id="tocsnangosyncfunction"></a>

```json
{
  "name": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "type": "sync",
  "input": "string",
  "returns": [
    "string"
  ],
  "json_schema": {},
  "runs": "string",
  "auto_start": true,
  "track_deletes": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|input|string|false|none|none|
|returns|[string]|true|none|none|
|json_schema|object \| null|true|none|none|
|runs|string \| null|true|none|Schedule expression, e.g. `every day`.|
|auto_start|boolean|true|none|none|
|track_deletes|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sync|

<h2 id="tocS_NangoActionFunction">NangoActionFunction</h2>
<!-- backwards compatibility -->
<a id="schemanangoactionfunction"></a>
<a id="schema_NangoActionFunction"></a>
<a id="tocSnangoactionfunction"></a>
<a id="tocsnangoactionfunction"></a>

```json
{
  "name": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "type": "action",
  "input": "string",
  "returns": [
    "string"
  ],
  "json_schema": {}
}
```

Deprecated action definition format, also used by some catalog tools. Use createTool for new custom implementations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|input|string|false|none|none|
|returns|[string]|true|none|none|
|json_schema|object \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|action|

<h2 id="tocS_NangoOnEventFunction">NangoOnEventFunction</h2>
<!-- backwards compatibility -->
<a id="schemanangooneventfunction"></a>
<a id="schema_NangoOnEventFunction"></a>
<a id="tocSnangooneventfunction"></a>
<a id="tocsnangooneventfunction"></a>

```json
{
  "name": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "type": "on-event",
  "event": "post-connection-creation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|event|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|on-event|
|event|post-connection-creation|
|event|pre-connection-deletion|
|event|validate-connection|

<h2 id="tocS_NangoToolFunction">NangoToolFunction</h2>
<!-- backwards compatibility -->
<a id="schemanangotoolfunction"></a>
<a id="schema_NangoToolFunction"></a>
<a id="tocSnangotoolfunction"></a>
<a id="tocsnangotoolfunction"></a>

```json
{
  "name": "string",
  "type": "tool",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "integration_id": "string",
  "provider": "string",
  "description": "string",
  "input_json_schema": {},
  "output_json_schema": {},
  "meta": {
    "instructions": "string",
    "required_scopes": {
      "all": [
        "string"
      ]
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

An HTTP-triggered function with resolved input and output schemas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|uuid|string(uuid)|true|none|none|
|integration_id|string|true|none|none|
|provider|string|true|none|none|
|description|string|true|none|none|
|input_json_schema|object \| null|true|none|Input JSON Schema with its referenced definitions, or null when absent or unresolved.|
|output_json_schema|object \| null|true|none|Output JSON Schema with its referenced definitions, or null when absent or unresolved.|
|meta|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tool|

<h2 id="tocS_ProviderTemplateFunction">ProviderTemplateFunction</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertemplatefunction"></a>
<a id="schema_ProviderTemplateFunction"></a>
<a id="tocSprovidertemplatefunction"></a>
<a id="tocsprovidertemplatefunction"></a>

```json
{
  "name": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "type": "sync",
  "input": "string",
  "returns": [
    "string"
  ],
  "json_schema": {},
  "runs": "string",
  "auto_start": true,
  "track_deletes": true
}
```

A sync template or catalog tool definition (no deployment metadata). Catalog tool templates currently use deprecated action definitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NangoSyncFunction](#schemanangosyncfunction)|false|none|none|
|*oneOf*|[NangoActionFunction](#schemanangoactionfunction)|false|none|**Deprecated.** Deprecated action definition format, also used by some catalog tools. Use createTool for new custom implementations.|

<h2 id="tocS_ListedNangoFunction">ListedNangoFunction</h2>
<!-- backwards compatibility -->
<a id="schemalistednangofunction"></a>
<a id="schema_ListedNangoFunction"></a>
<a id="tocSlistednangofunction"></a>
<a id="tocslistednangofunction"></a>

```json
{
  "name": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "type": "sync",
  "input": "string",
  "returns": [
    "string"
  ],
  "json_schema": {},
  "runs": "string",
  "auto_start": true,
  "track_deletes": true,
  "id": 0,
  "enabled": true,
  "last_deployed": "1970-01-01T00:00:00Z",
  "source": "catalog"
}
```

A listed function (sync, deprecated action, on-event, or tool) merged with its availability metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|input|string|false|none|none|
|returns|[string]|true|none|none|
|json_schema|object \| null|true|none|none|
|runs|string \| null|true|none|Schedule expression, e.g. `every day`.|
|auto_start|boolean|true|none|none|
|track_deletes|boolean|true|none|none|
|id|number \| null|true|none|Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.|
|enabled|boolean|true|none|Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.|
|last_deployed|string \| null(date-time)|true|none|ISO-8601 timestamp. `null` for a Nango catalog tool.|
|source|string|true|none|`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|input|string|false|none|none|
|returns|[string]|true|none|none|
|json_schema|object \| null|true|none|none|
|id|number \| null|true|none|Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.|
|enabled|boolean|true|none|Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.|
|last_deployed|string \| null(date-time)|true|none|ISO-8601 timestamp. `null` for a Nango catalog tool.|
|source|string|true|none|`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|description|string|false|none|none|
|scopes|[string]|false|none|none|
|type|string|true|none|none|
|event|string|true|none|none|
|id|number \| null|true|none|Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.|
|enabled|boolean|true|none|Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.|
|last_deployed|string \| null(date-time)|true|none|ISO-8601 timestamp. `null` for a Nango catalog tool.|
|source|string|true|none|`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|uuid|string(uuid)|true|none|none|
|integration_id|string|true|none|none|
|provider|string|true|none|none|
|description|string|true|none|none|
|input_json_schema|object \| null|true|none|Input JSON Schema with its referenced definitions, or null when absent or unresolved.|
|output_json_schema|object \| null|true|none|Output JSON Schema with its referenced definitions, or null when absent or unresolved.|
|meta|object|true|none|none|
|id|number \| null|true|none|Deployed function id. `null` for a Nango catalog tool and for a tool, which is identified by its `uuid`.|
|enabled|boolean|true|none|Whether the function is enabled. Always `true` for deprecated action definitions, including a deployed action whose stored configuration is disabled. Syncs, on-event functions, and tools report the stored value.|
|last_deployed|string \| null(date-time)|true|none|ISO-8601 timestamp. `null` for a Nango catalog tool.|
|source|string|true|none|`tools-catalog` is a Nango catalog tool that has not been deployed. `catalog`, `standalone`, and `repo` are deployed functions.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sync|
|source|catalog|
|source|standalone|
|source|repo|
|source|tools-catalog|
|type|action|
|source|catalog|
|source|standalone|
|source|repo|
|source|tools-catalog|
|type|on-event|
|event|post-connection-creation|
|event|pre-connection-deletion|
|event|validate-connection|
|source|catalog|
|source|standalone|
|source|repo|
|source|tools-catalog|
|type|tool|
|source|catalog|
|source|standalone|
|source|repo|
|source|tools-catalog|

<h2 id="tocS_FunctionCompileRequest">FunctionCompileRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncompilerequest"></a>
<a id="schema_FunctionCompileRequest"></a>
<a id="tocSfunctioncompilerequest"></a>
<a id="tocsfunctioncompilerequest"></a>

```json
{
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The TypeScript source code for the function.|

<h2 id="tocS_FunctionCompileResponse">FunctionCompileResponse</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncompileresponse"></a>
<a id="schema_FunctionCompileResponse"></a>
<a id="tocSfunctioncompileresponse"></a>
<a id="tocsfunctioncompileresponse"></a>

```json
{
  "bundle_size_bytes": 0,
  "bundled_js": "string",
  "compiled_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_size_bytes|integer|true|none|none|
|bundled_js|string|true|none|The bundled JavaScript output.|
|compiled_at|string(date-time)|true|none|none|

<h2 id="tocS_FunctionDryrunRequest">FunctionDryrunRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondryrunrequest"></a>
<a id="schema_FunctionDryrunRequest"></a>
<a id="tocSfunctiondryrunrequest"></a>
<a id="tocsfunctiondryrunrequest"></a>

```json
{
  "integration_id": "string",
  "function_type": "action",
  "code": "string",
  "connection_id": "string",
  "input": null,
  "metadata": {},
  "checkpoint": {},
  "last_sync_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration_id|string|true|none|The integration ID (unique_key) that you created in Nango.|
|function_type|[RunnableFunctionType](#schemarunnablefunctiontype)|true|none|Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.|
|code|string|true|none|The TypeScript source code for the function.|
|connection_id|string|true|none|The connection ID to use for the dry run.|
|input|object|false|none|Optional JSON input payload passed to the function.|
|metadata|object|false|none|Optional metadata available to the function during the dry run.|
|checkpoint|object|false|none|Optional checkpoint payload available to sync functions during the dry run.|
|last_sync_date|string(date-time)|false|none|Optional last sync date available to sync functions during the dry run.|

#### Enumerated Values

|Property|Value|
|---|---|
|function_type|action|
|function_type|sync|
|function_type|tool|
|function_type|function|

<h2 id="tocS_FunctionDryrunStatus">FunctionDryrunStatus</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondryrunstatus"></a>
<a id="schema_FunctionDryrunStatus"></a>
<a id="tocSfunctiondryrunstatus"></a>
<a id="tocsfunctiondryrunstatus"></a>

```json
"waiting"
```

<h2 id="tocS_FunctionDryrunCreateResponse">FunctionDryrunCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondryruncreateresponse"></a>
<a id="schema_FunctionDryrunCreateResponse"></a>
<a id="tocSfunctiondryruncreateresponse"></a>
<a id="tocsfunctiondryruncreateresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|status|string|true|none|none|
|created_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting|
|status|running|

<h2 id="tocS_FunctionDryrunResponse">FunctionDryrunResponse</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondryrunresponse"></a>
<a id="schema_FunctionDryrunResponse"></a>
<a id="tocSfunctiondryrunresponse"></a>
<a id="tocsfunctiondryrunresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "integration_id": "string",
  "function_type": "action",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "started_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "output": "string",
  "result": null,
  "error": {
    "code": "string",
    "message": "string",
    "payload": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|status|[FunctionDryrunStatus](#schemafunctiondryrunstatus)|true|none|none|
|integration_id|string|true|none|none|
|function_type|[RunnableFunctionType](#schemarunnablefunctiontype)|true|none|Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|started_at|string(date-time)|false|none|none|
|completed_at|string(date-time)|false|none|none|
|duration_ms|integer|false|none|none|
|output|string|false|none|Dry run command output.|
|result|object|false|none|The function result, when the dry run emits one.|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting|
|status|running|
|status|success|
|status|failed|
|function_type|action|
|function_type|sync|
|function_type|tool|
|function_type|function|

<h2 id="tocS_FunctionDeploymentRequest">FunctionDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploymentrequest"></a>
<a id="schema_FunctionDeploymentRequest"></a>
<a id="tocSfunctiondeploymentrequest"></a>
<a id="tocsfunctiondeploymentrequest"></a>

```json
{
  "type": "function",
  "integration_id": "string",
  "function_name": "string",
  "function_type": "action",
  "code": "string",
  "version": "string",
  "allow_destructive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[FunctionDeploymentCodeRequest](#schemafunctiondeploymentcoderequest)|false|none|none|
|*oneOf*|[FunctionDeploymentTemplateRequest](#schemafunctiondeploymenttemplaterequest)|false|none|none|

<h2 id="tocS_FunctionDeploymentCodeRequest">FunctionDeploymentCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploymentcoderequest"></a>
<a id="schema_FunctionDeploymentCodeRequest"></a>
<a id="tocSfunctiondeploymentcoderequest"></a>
<a id="tocsfunctiondeploymentcoderequest"></a>

```json
{
  "type": "function",
  "integration_id": "string",
  "function_name": "string",
  "function_type": "action",
  "code": "string",
  "version": "string",
  "allow_destructive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Deploy submitted function source code.|
|integration_id|string|true|none|The integration ID (unique_key) that you created in Nango.|
|function_name|string|true|none|The function name.|
|function_type|[RunnableFunctionType](#schemarunnablefunctiontype)|true|none|Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.|
|code|string|true|none|The TypeScript source code for the function.|
|version|string|false|none|Optional version tag for this deployment. Ignored for tools and functions.|
|allow_destructive|boolean|false|none|Allow overwriting an existing standalone function with the same name.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|
|function_type|action|
|function_type|sync|
|function_type|tool|
|function_type|function|

<h2 id="tocS_FunctionDeploymentTemplateRequest">FunctionDeploymentTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploymenttemplaterequest"></a>
<a id="schema_FunctionDeploymentTemplateRequest"></a>
<a id="tocSfunctiondeploymenttemplaterequest"></a>
<a id="tocsfunctiondeploymenttemplaterequest"></a>

```json
{
  "type": "template",
  "integration_id": "string",
  "template": "string",
  "function_type": "action"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Deploy a template from the provider catalog onto the integration.|
|integration_id|string|true|none|The integration ID (unique_key) that you created in Nango.|
|template|string|true|none|The template name to deploy, as listed by `GET /providers/{provider}/templates`.|
|function_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|template|
|function_type|action|
|function_type|sync|

<h2 id="tocS_FunctionDeploymentResponse">FunctionDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploymentresponse"></a>
<a id="schema_FunctionDeploymentResponse"></a>
<a id="tocSfunctiondeploymentresponse"></a>
<a id="tocsfunctiondeploymentresponse"></a>

```json
{
  "id": "string",
  "status": "waiting",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|status|string|true|none|The status of the function deployment. Poll `GET /functions/deployments/{id}` to get the final status.|
|created_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting|
|status|running|
|status|success|
|status|failed|

<h2 id="tocS_FunctionDeploymentResultResponse">FunctionDeploymentResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeploymentresultresponse"></a>
<a id="schema_FunctionDeploymentResultResponse"></a>
<a id="tocSfunctiondeploymentresultresponse"></a>
<a id="tocsfunctiondeploymentresultresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "waiting",
  "integration_id": "string",
  "function_name": "string",
  "function_type": "action",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "started_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "deployed": true,
  "deployed_functions": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "output": "string",
  "error": {
    "code": "string",
    "message": "string",
    "payload": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|status|string|true|none|The status of the function deployment.|
|integration_id|string|true|none|The integration ID (unique_key) that you created in Nango.|
|function_name|string|true|none|The function name.|
|function_type|[RunnableFunctionType](#schemarunnablefunctiontype)|true|none|Function type for code deployments and dry runs. The `action` value is deprecated; use `tool` for new tools.|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|started_at|string(date-time)|false|none|none|
|completed_at|string(date-time)|false|none|none|
|duration_ms|integer|false|none|none|
|deployed|boolean|false|none|Whether the deployment updated any functions.|
|deployed_functions|[object]|false|none|Functions updated by the deployment.|
|output|string|false|none|Deployment command output.|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting|
|status|running|
|status|success|
|status|failed|
|function_type|action|
|function_type|sync|
|function_type|tool|
|function_type|function|

<h2 id="tocS_TokenUrlObject">TokenUrlObject</h2>
<!-- backwards compatibility -->
<a id="schematokenurlobject"></a>
<a id="schema_TokenUrlObject"></a>
<a id="tocStokenurlobject"></a>
<a id="tocstokenurlobject"></a>

```json
{
  "OAUTH1": "string",
  "OAUTH2": "string",
  "OAUTH2CC": "string",
  "BASIC": "string",
  "API_KEY": "string",
  "APP_STORE": "string",
  "CUSTOM": "string",
  "APP": "string",
  "NONE": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OAUTH1|string|false|none|none|
|OAUTH2|string|false|none|none|
|OAUTH2CC|string|false|none|none|
|BASIC|string|false|none|none|
|API_KEY|string|false|none|none|
|APP_STORE|string|false|none|none|
|CUSTOM|string|false|none|none|
|APP|string|false|none|none|
|NONE|string|false|none|none|

<h2 id="tocS_SimplifiedJSONSchema">SimplifiedJSONSchema</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedjsonschema"></a>
<a id="schema_SimplifiedJSONSchema"></a>
<a id="tocSsimplifiedjsonschema"></a>
<a id="tocssimplifiedjsonschema"></a>

```json
{
  "type": "string",
  "title": "string",
  "description": "string",
  "example": "string",
  "pattern": "string",
  "format": "hostname",
  "optional": true,
  "order": 0,
  "default_value": "string",
  "hidden": true,
  "prefix": "string",
  "suffix": "string",
  "doc_section": "string",
  "secret": true,
  "automated": true,
  "enum": [
    "string"
  ],
  "warnings": {
    "property1": "string",
    "property2": "string"
  },
  "visible_when": {
    "field": "string",
    "equals": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|example|string|false|none|none|
|pattern|string|false|none|none|
|format|string|false|none|none|
|optional|boolean|false|none|none|
|order|number|false|none|none|
|default_value|string|false|none|none|
|hidden|boolean|false|none|none|
|prefix|string|false|none|none|
|suffix|string|false|none|none|
|doc_section|string|false|none|none|
|secret|boolean|false|none|The value is sensitive and is masked once saved.|
|automated|boolean|false|none|The value is set by Nango, not entered by the user.|
|enum|[string]|false|none|none|
|warnings|object|false|none|Warning shown when the field is set to a given value, keyed by that value.|
|visible_when|object|false|none|Only show and validate this field when another field holds the given value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|format|hostname|
|format|uri|
|format|uuid|
|format|email|

<h2 id="tocS_BaseProvider">BaseProvider</h2>
<!-- backwards compatibility -->
<a id="schemabaseprovider"></a>
<a id="schema_BaseProvider"></a>
<a id="tocSbaseprovider"></a>
<a id="tocsbaseprovider"></a>

```json
{
  "name": "string",
  "display_name": "string",
  "auth_mode": "OAUTH1",
  "proxy": {
    "base_url": "string",
    "headers": {},
    "query": {
      "api_key": "string"
    },
    "retry": {
      "at": "string",
      "after": "string"
    },
    "decompress": true,
    "paginate": null,
    "verification": {
      "method": "string",
      "endpoint": "string",
      "base_url_override": "string",
      "headers": {}
    }
  },
  "authorization_url": "string",
  "authorization_url_encode": true,
  "access_token_url": "string",
  "token_url_encode": true,
  "authorization_params": {},
  "scope_separator": "string",
  "default_scopes": [
    "string"
  ],
  "token_url": "string",
  "token_params": {},
  "authorization_url_replacements": {},
  "authorization_url_fragment": "string",
  "redirect_uri_metadata": [
    "string"
  ],
  "token_response_metadata": [
    "string"
  ],
  "docs": "string",
  "token_expiration_buffer": 0,
  "webhook_routing_script": "string",
  "webhook_user_defined_secret": true,
  "post_connection_script": "string",
  "pre_connection_deletion_script": "string",
  "categories": [
    "string"
  ],
  "connection_configuration": [
    "string"
  ],
  "connection_config": {
    "type": "string",
    "title": "string",
    "description": "string",
    "example": "string",
    "pattern": "string",
    "format": "hostname",
    "optional": true,
    "order": 0,
    "default_value": "string",
    "hidden": true,
    "prefix": "string",
    "suffix": "string",
    "doc_section": "string",
    "secret": true,
    "automated": true,
    "enum": [
      "string"
    ],
    "warnings": {
      "property1": "string",
      "property2": "string"
    },
    "visible_when": {
      "field": "string",
      "equals": "string"
    }
  },
  "credentials": {
    "apiKey": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    }
  },
  "integration_config": {
    "property1": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    },
    "property2": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    }
  },
  "client_registration": "dynamic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|display_name|string|true|none|none|
|auth_mode|string|true|none|none|
|proxy|object|false|none|none|
|authorization_url|string|false|none|none|
|authorization_url_encode|boolean|false|none|none|
|access_token_url|string|false|none|none|
|token_url_encode|boolean|false|none|none|
|authorization_params|object|false|none|none|
|scope_separator|string|false|none|none|
|default_scopes|[string]|false|none|none|
|token_url|string \| [TokenUrlObject](#schematokenurlobject)|false|none|none|
|token_params|object|false|none|none|
|authorization_url_replacements|object|false|none|none|
|authorization_url_fragment|string|false|none|none|
|redirect_uri_metadata|[string]|false|none|none|
|token_response_metadata|[string]|false|none|none|
|docs|string|true|none|none|
|token_expiration_buffer|number|false|none|none|
|webhook_routing_script|string|false|none|none|
|webhook_user_defined_secret|boolean|false|none|none|
|post_connection_script|string|false|none|none|
|pre_connection_deletion_script|string|false|none|none|
|categories|[string]|false|none|none|
|connection_configuration|[string]|false|none|none|
|connection_config|[SimplifiedJSONSchema](#schemasimplifiedjsonschema)|false|none|none|
|credentials|object|false|none|none|
|integration_config|object|false|none|Fields set on the integration (in `integration_config` on create or update) rather than on each connection, keyed by field name.<br>|
|client_registration|string|false|none|MCP_OAUTH2 providers only. How the OAuth client is registered: `static` requires `client_id` and `client_secret` in the integration credentials; `dynamic` and `cimd` are registered by Nango.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_mode|OAUTH1|
|auth_mode|OAUTH2|
|auth_mode|OAUTH2_CC|
|auth_mode|BASIC|
|auth_mode|API_KEY|
|auth_mode|CUSTOM|
|auth_mode|APP|
|auth_mode|NONE|
|auth_mode|TBA|
|auth_mode|JWT|
|auth_mode|BILL|
|auth_mode|TWO_STEP|
|auth_mode|SIGNATURE|
|auth_mode|MCP_OAUTH2|
|auth_mode|MCP_OAUTH2_GENERIC|
|auth_mode|INSTALL_PLUGIN|
|auth_mode|AWS_SIGV4|
|client_registration|dynamic|
|client_registration|static|
|client_registration|cimd|

<h2 id="tocS_ProviderOAuth2">ProviderOAuth2</h2>
<!-- backwards compatibility -->
<a id="schemaprovideroauth2"></a>
<a id="schema_ProviderOAuth2"></a>
<a id="tocSprovideroauth2"></a>
<a id="tocsprovideroauth2"></a>

```json
{
  "auth_mode": "OAUTH2",
  "token_params": {
    "grant_type": "authorization_code"
  },
  "disable_pkce": true,
  "refresh_params": {
    "grant_type": "refresh_token"
  },
  "authorization_method": "body",
  "body_format": "form",
  "refresh_url": "string",
  "expires_in_unit": "milliseconds",
  "token_request_auth_method": "basic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_mode|string|true|none|none|
|token_params|object|false|none|none|
|disable_pkce|boolean|false|none|none|
|refresh_params|object|false|none|none|
|authorization_method|string|false|none|none|
|body_format|string|false|none|none|
|refresh_url|string|false|none|none|
|expires_in_unit|string|false|none|none|
|token_request_auth_method|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_mode|OAUTH2|
|auth_mode|CUSTOM|
|authorization_method|body|
|authorization_method|header|
|body_format|form|
|body_format|json|
|expires_in_unit|milliseconds|
|token_request_auth_method|basic|
|token_request_auth_method|custom|
|token_request_auth_method|private_key_jwt|
|token_request_auth_method|none|

<h2 id="tocS_ProviderOAuth1">ProviderOAuth1</h2>
<!-- backwards compatibility -->
<a id="schemaprovideroauth1"></a>
<a id="schema_ProviderOAuth1"></a>
<a id="tocSprovideroauth1"></a>
<a id="tocsprovideroauth1"></a>

```json
{
  "auth_mode": "OAUTH1",
  "request_url": "string",
  "request_params": {},
  "request_http_method": "GET",
  "token_http_method": "GET",
  "signature_method": "HMAC-SHA1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_mode|string|true|none|none|
|request_url|string|true|none|none|
|request_params|object|false|none|none|
|request_http_method|string|false|none|none|
|token_http_method|string|false|none|none|
|signature_method|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_mode|OAUTH1|
|request_http_method|GET|
|request_http_method|PUT|
|request_http_method|POST|
|token_http_method|GET|
|token_http_method|PUT|
|token_http_method|POST|
|signature_method|HMAC-SHA1|
|signature_method|RSA-SHA1|
|signature_method|PLAINTEXT|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "name": "string",
  "display_name": "string",
  "auth_mode": "OAUTH1",
  "proxy": {
    "base_url": "string",
    "headers": {},
    "query": {
      "api_key": "string"
    },
    "retry": {
      "at": "string",
      "after": "string"
    },
    "decompress": true,
    "paginate": null,
    "verification": {
      "method": "string",
      "endpoint": "string",
      "base_url_override": "string",
      "headers": {}
    }
  },
  "authorization_url": "string",
  "authorization_url_encode": true,
  "access_token_url": "string",
  "token_url_encode": true,
  "authorization_params": {},
  "scope_separator": "string",
  "default_scopes": [
    "string"
  ],
  "token_url": "string",
  "token_params": {},
  "authorization_url_replacements": {},
  "authorization_url_fragment": "string",
  "redirect_uri_metadata": [
    "string"
  ],
  "token_response_metadata": [
    "string"
  ],
  "docs": "string",
  "token_expiration_buffer": 0,
  "webhook_routing_script": "string",
  "webhook_user_defined_secret": true,
  "post_connection_script": "string",
  "pre_connection_deletion_script": "string",
  "categories": [
    "string"
  ],
  "connection_configuration": [
    "string"
  ],
  "connection_config": {
    "type": "string",
    "title": "string",
    "description": "string",
    "example": "string",
    "pattern": "string",
    "format": "hostname",
    "optional": true,
    "order": 0,
    "default_value": "string",
    "hidden": true,
    "prefix": "string",
    "suffix": "string",
    "doc_section": "string",
    "secret": true,
    "automated": true,
    "enum": [
      "string"
    ],
    "warnings": {
      "property1": "string",
      "property2": "string"
    },
    "visible_when": {
      "field": "string",
      "equals": "string"
    }
  },
  "credentials": {
    "apiKey": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    }
  },
  "integration_config": {
    "property1": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    },
    "property2": {
      "type": "string",
      "title": "string",
      "description": "string",
      "example": "string",
      "pattern": "string",
      "format": "hostname",
      "optional": true,
      "order": 0,
      "default_value": "string",
      "hidden": true,
      "prefix": "string",
      "suffix": "string",
      "doc_section": "string",
      "secret": true,
      "automated": true,
      "enum": [
        "string"
      ],
      "warnings": {
        "property1": "string",
        "property2": "string"
      },
      "visible_when": {
        "field": "string",
        "equals": "string"
      }
    }
  },
  "client_registration": "dynamic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[BaseProvider](#schemabaseprovider)|false|none|none|
|*anyOf*|[ProviderOAuth1](#schemaprovideroauth1)|false|none|none|
|*anyOf*|[ProviderOAuth2](#schemaprovideroauth2)|false|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "unique_key": "string",
  "display_name": "string",
  "provider": "string",
  "logo": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "forward_webhooks": true,
  "missing_fields": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unique_key|string|true|none|The integration ID that you created in Nango.|
|display_name|string|true|none|The provider display name.|
|provider|string|true|none|The Nango API Configuration.|
|logo|string|false|none|Absolute path to the logo of this integration (svg)|
|created_at|string(date-time)|true|none|When it was created|
|updated_at|string(date-time)|true|none|Last time it was updated|
|forward_webhooks|boolean|false|none|Whether webhooks received from this integration's provider are forwarded to your backend.|
|missing_fields|[string]|false|none|Credential fields the integration is missing, e.g. `oauth_client_id`. Empty when the integration is fully configured, when it uses Nango-provided credentials, or when the auth mode collects everything at connection time. Field names only, never values.<br>|

<h2 id="tocS_IntegrationFull">IntegrationFull</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationfull"></a>
<a id="schema_IntegrationFull"></a>
<a id="tocSintegrationfull"></a>
<a id="tocsintegrationfull"></a>

```json
{
  "unique_key": "string",
  "display_name": "string",
  "provider": "string",
  "logo": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "forward_webhooks": true,
  "missing_fields": [
    "string"
  ],
  "webhook_url": "string",
  "credentials": {
    "type": "OAUTH1",
    "client_id": "string",
    "client_secret": "string",
    "scopes": "string",
    "webhook_secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unique_key|string|true|none|The integration ID that you created in Nango.|
|display_name|string|true|none|The provider display name.|
|provider|string|true|none|The Nango API Configuration.|
|logo|string|false|none|Absolute path to the logo of this integration (svg)|
|created_at|string(date-time)|true|none|When it was created|
|updated_at|string(date-time)|true|none|Last time it was updated|
|forward_webhooks|boolean|false|none|Whether webhooks received from this integration's provider are forwarded to your backend.|
|missing_fields|[string]|false|none|Credential fields the integration is missing, e.g. `oauth_client_id`. Empty when the integration is fully configured, when it uses Nango-provided credentials, or when the auth mode collects everything at connection time. Field names only, never values.<br>|
|webhook_url|string \| null|false|none|Configure your integration webhooks to point to this URL|
|credentials|[IntegrationCredentialsWithConfig](#schemaintegrationcredentialswithconfig) \| null|false|none|none|

<h2 id="tocS_ConnectSessionInput">ConnectSessionInput</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsessioninput"></a>
<a id="schema_ConnectSessionInput"></a>
<a id="tocSconnectsessioninput"></a>
<a id="tocsconnectsessioninput"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "organization": {
    "id": "string",
    "display_name": "string"
  },
  "allowed_integrations": [
    "string"
  ],
  "integrations_config_defaults": {
    "property1": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    },
    "property2": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    }
  },
  "overrides": {
    "property1": {
      "docs_connect": "string"
    },
    "property2": {
      "docs_connect": "string"
    }
  },
  "webhook_url_override": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[Tags](#schematags)|false|none|Connection tags (key/value strings). Keys are normalized to lowercase.|
|end_user|object|false|none|**Deprecated.** Deprecated, use tags instead|
|organization|object|false|none|**Deprecated.** Deprecated, use tags instead|
|allowed_integrations|[string]|false|none|Filters which integrations the end user can interact with|
|integrations_config_defaults|object|false|none|none|
|overrides|object|false|none|none|
|webhook_url_override|string|false|none|Override the environment's webhook URLs for the connection created by this session. When set, that connection's webhooks are sent only to this URL (the environment's primary and secondary URLs are bypassed).|

<h2 id="tocS_ConnectSessionReconnectInput">ConnectSessionReconnectInput</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsessionreconnectinput"></a>
<a id="schema_ConnectSessionReconnectInput"></a>
<a id="tocSconnectsessionreconnectinput"></a>
<a id="tocsconnectsessionreconnectinput"></a>

```json
{
  "connection_id": "string",
  "integration_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "organization": {
    "id": "string",
    "display_name": "string"
  },
  "integrations_config_defaults": {
    "property1": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    },
    "property2": {
      "user_scopes": "string",
      "authorization_params": {},
      "connection_config": {
        "oauth_scopes_override": "string",
        "oauth_client_id_override": "string",
        "oauth_client_secret_override": "string"
      }
    }
  },
  "overrides": {
    "property1": {
      "docs_connect": "string"
    },
    "property2": {
      "docs_connect": "string"
    }
  },
  "webhook_url_override": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string|true|none|none|
|integration_id|string|true|none|none|
|tags|[Tags](#schematags)|false|none|Connection tags (key/value strings). Keys are normalized to lowercase.|
|end_user|object|false|none|**Deprecated.** Deprecated, use tags instead|
|organization|object|false|none|**Deprecated.** Deprecated, use tags instead|
|integrations_config_defaults|object|false|none|none|
|overrides|object|false|none|none|
|webhook_url_override|string|false|none|Override the environment's webhook URLs for the connection created by this session. When set, that connection's webhooks are sent only to this URL (the environment's primary and secondary URLs are bypassed).|

<h2 id="tocS_ConnectSession">ConnectSession</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsession"></a>
<a id="schema_ConnectSession"></a>
<a id="tocSconnectsession"></a>
<a id="tocsconnectsession"></a>

```json
{
  "token": "string",
  "connect_link": "string",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The connect session token|
|connect_link|string|false|none|The URL to directly connect the user to the integration. This can be used as a magic link.|
|expires_at|string(date-time)|true|none|When the token expires|

<h2 id="tocS_AllAuthCredentials">AllAuthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaallauthcredentials"></a>
<a id="schema_AllAuthCredentials"></a>
<a id="tocSallauthcredentials"></a>
<a id="tocsallauthcredentials"></a>

```json
{
  "oauth_token": "string",
  "oauth_token_secret": "string",
  "type": "OAUTH1",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[OAuth1CredentialsWithRaw](#schemaoauth1credentialswithraw)|false|none|none|
|*anyOf*|[OAuth2CredentialsWithRaw](#schemaoauth2credentialswithraw)|false|none|none|
|*anyOf*|[BasicApiCredentials](#schemabasicapicredentials)|false|none|none|
|*anyOf*|[ApiKeyCredentials](#schemaapikeycredentials)|false|none|none|
|*anyOf*|[AppCredentials](#schemaappcredentials)|false|none|none|
|*anyOf*|[JwtCredentials](#schemajwtcredentials)|false|none|none|
|*anyOf*|[OAuth2ClientCredentialsWithRaw](#schemaoauth2clientcredentialswithraw)|false|none|none|
|*anyOf*|[AppStoreCredentialsWithRaw](#schemaappstorecredentialswithraw)|false|none|none|
|*anyOf*|[UnauthCredentials](#schemaunauthcredentials)|false|none|none|
|*anyOf*|[CustomCredentials](#schemacustomcredentials)|false|none|none|
|*anyOf*|[TbaCredentials](#schematbacredentials)|false|none|none|
|*anyOf*|[BillCredentialsWithRaw](#schemabillcredentialswithraw)|false|none|none|
|*anyOf*|[TwoStepCredentials](#schematwostepcredentials)|false|none|none|
|*anyOf*|[SignatureCredentials](#schemasignaturecredentials)|false|none|none|

<h2 id="tocS_ApiKeyCredentials">ApiKeyCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycredentials"></a>
<a id="schema_ApiKeyCredentials"></a>
<a id="tocSapikeycredentials"></a>
<a id="tocsapikeycredentials"></a>

```json
{
  "apiKey": "string",
  "type": "API_KEY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|API_KEY|

<h2 id="tocS_AppCredentials">AppCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaappcredentials"></a>
<a id="schema_AppCredentials"></a>
<a id="tocSappcredentials"></a>
<a id="tocsappcredentials"></a>

```json
{
  "access_token": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "raw": {},
  "type": "APP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|raw|object|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|APP|

<h2 id="tocS_AppStoreCredentials">AppStoreCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaappstorecredentials"></a>
<a id="schema_AppStoreCredentials"></a>
<a id="tocSappstorecredentials"></a>
<a id="tocsappstorecredentials"></a>

```json
{
  "access_token": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "private_key": "string",
  "type": "APP_STORE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|private_key|string|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|APP_STORE|

<h2 id="tocS_AppStoreCredentialsWithRaw">AppStoreCredentialsWithRaw</h2>
<!-- backwards compatibility -->
<a id="schemaappstorecredentialswithraw"></a>
<a id="schema_AppStoreCredentialsWithRaw"></a>
<a id="tocSappstorecredentialswithraw"></a>
<a id="tocsappstorecredentialswithraw"></a>

```json
{
  "access_token": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "private_key": "string",
  "type": "APP_STORE",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|private_key|string|true|none|none|
|type|string|false|none|none|
|raw|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|APP_STORE|

<h2 id="tocS_BasicApiCredentials">BasicApiCredentials</h2>
<!-- backwards compatibility -->
<a id="schemabasicapicredentials"></a>
<a id="schema_BasicApiCredentials"></a>
<a id="tocSbasicapicredentials"></a>
<a id="tocsbasicapicredentials"></a>

```json
{
  "password": "string",
  "type": "BASIC",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|type|string|true|none|none|
|username|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BASIC|

<h2 id="tocS_BillCredentials">BillCredentials</h2>
<!-- backwards compatibility -->
<a id="schemabillcredentials"></a>
<a id="schema_BillCredentials"></a>
<a id="tocSbillcredentials"></a>
<a id="tocsbillcredentials"></a>

```json
{
  "dev_key": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "password": "string",
  "session_id": "string",
  "type": "BILL",
  "user_id": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dev_key|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|organization_id|string|true|none|none|
|password|string|true|none|none|
|session_id|string|false|none|none|
|type|string|true|none|none|
|user_id|string|false|none|none|
|username|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BILL|

<h2 id="tocS_BillCredentialsWithRaw">BillCredentialsWithRaw</h2>
<!-- backwards compatibility -->
<a id="schemabillcredentialswithraw"></a>
<a id="schema_BillCredentialsWithRaw"></a>
<a id="tocSbillcredentialswithraw"></a>
<a id="tocsbillcredentialswithraw"></a>

```json
{
  "dev_key": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "password": "string",
  "session_id": "string",
  "type": "BILL",
  "user_id": "string",
  "username": "string",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dev_key|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|organization_id|string|true|none|none|
|password|string|true|none|none|
|session_id|string|false|none|none|
|type|string|true|none|none|
|user_id|string|false|none|none|
|username|string|true|none|none|
|raw|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BILL|

<h2 id="tocS_CustomCredentials">CustomCredentials</h2>
<!-- backwards compatibility -->
<a id="schemacustomcredentials"></a>
<a id="schema_CustomCredentials"></a>
<a id="tocScustomcredentials"></a>
<a id="tocscustomcredentials"></a>

```json
{
  "raw": {},
  "type": "CUSTOM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|raw|object|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CUSTOM|

<h2 id="tocS_JwtCredentials">JwtCredentials</h2>
<!-- backwards compatibility -->
<a id="schemajwtcredentials"></a>
<a id="schema_JwtCredentials"></a>
<a id="tocSjwtcredentials"></a>
<a id="tocsjwtcredentials"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "issuerId": "string",
  "privateKey": {
    "id": "string",
    "secret": "string"
  },
  "privateKeyId": "string",
  "token": "string",
  "type": "JWT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|none|
|issuerId|string|false|none|none|
|privateKey|object \| string|true|none|none|
|privateKeyId|string|false|none|none|
|token|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|JWT|

<h2 id="tocS_OAuth1Credentials">OAuth1Credentials</h2>
<!-- backwards compatibility -->
<a id="schemaoauth1credentials"></a>
<a id="schema_OAuth1Credentials"></a>
<a id="tocSoauth1credentials"></a>
<a id="tocsoauth1credentials"></a>

```json
{
  "oauth_token": "string",
  "oauth_token_secret": "string",
  "type": "OAUTH1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_token|string|true|none|none|
|oauth_token_secret|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH1|

<h2 id="tocS_OAuth1CredentialsWithRaw">OAuth1CredentialsWithRaw</h2>
<!-- backwards compatibility -->
<a id="schemaoauth1credentialswithraw"></a>
<a id="schema_OAuth1CredentialsWithRaw"></a>
<a id="tocSoauth1credentialswithraw"></a>
<a id="tocsoauth1credentialswithraw"></a>

```json
{
  "oauth_token": "string",
  "oauth_token_secret": "string",
  "type": "OAUTH1",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_token|string|true|none|none|
|oauth_token_secret|string|true|none|none|
|type|string|true|none|none|
|raw|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH1|

<h2 id="tocS_OAuth2ClientCredentials">OAuth2ClientCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clientcredentials"></a>
<a id="schema_OAuth2ClientCredentials"></a>
<a id="tocSoauth2clientcredentials"></a>
<a id="tocsoauth2clientcredentials"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "token": "string",
  "type": "OAUTH2_CC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|token|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2_CC|

<h2 id="tocS_OAuth2ClientCredentialsWithRaw">OAuth2ClientCredentialsWithRaw</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clientcredentialswithraw"></a>
<a id="schema_OAuth2ClientCredentialsWithRaw"></a>
<a id="tocSoauth2clientcredentialswithraw"></a>
<a id="tocsoauth2clientcredentialswithraw"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "token": "string",
  "type": "OAUTH2_CC",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|expires_at|string(date-time)|false|none|none|
|token|string|true|none|none|
|type|string|true|none|none|
|raw|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2_CC|

<h2 id="tocS_OAuth2Credentials">OAuth2Credentials</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2credentials"></a>
<a id="schema_OAuth2Credentials"></a>
<a id="tocSoauth2credentials"></a>
<a id="tocsoauth2credentials"></a>

```json
{
  "access_token": "string",
  "config_override": {
    "client_id": "string",
    "client_secret": "string"
  },
  "expires_at": "1970-01-01T00:00:00Z",
  "refresh_token": "string",
  "type": "OAUTH2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|config_override|object|false|none|none|
|expires_at|string(date-time)|false|none|none|
|refresh_token|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2|

<h2 id="tocS_OAuth2CredentialsWithRaw">OAuth2CredentialsWithRaw</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2credentialswithraw"></a>
<a id="schema_OAuth2CredentialsWithRaw"></a>
<a id="tocSoauth2credentialswithraw"></a>
<a id="tocsoauth2credentialswithraw"></a>

```json
{
  "access_token": "string",
  "config_override": {
    "client_id": "string",
    "client_secret": "string"
  },
  "expires_at": "1970-01-01T00:00:00Z",
  "refresh_token": "string",
  "type": "OAUTH2",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|config_override|object|false|none|none|
|expires_at|string(date-time)|false|none|none|
|refresh_token|string|false|none|none|
|type|string|true|none|none|
|raw|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2|

<h2 id="tocS_SignatureCredentials">SignatureCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasignaturecredentials"></a>
<a id="schema_SignatureCredentials"></a>
<a id="tocSsignaturecredentials"></a>
<a id="tocssignaturecredentials"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "password": "string",
  "token": "string",
  "type": "SIGNATURE",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|none|
|password|string|true|none|none|
|token|string|false|none|none|
|type|string|true|none|none|
|username|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SIGNATURE|

<h2 id="tocS_TbaCredentials">TbaCredentials</h2>
<!-- backwards compatibility -->
<a id="schematbacredentials"></a>
<a id="schema_TbaCredentials"></a>
<a id="tocStbacredentials"></a>
<a id="tocstbacredentials"></a>

```json
{
  "config_override": {
    "client_id": "string",
    "client_secret": "string"
  },
  "token_id": "string",
  "token_secret": "string",
  "type": "TBA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_override|object|true|none|none|
|token_id|string|true|none|none|
|token_secret|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TBA|

<h2 id="tocS_TwoStepCredentials">TwoStepCredentials</h2>
<!-- backwards compatibility -->
<a id="schematwostepcredentials"></a>
<a id="schema_TwoStepCredentials"></a>
<a id="tocStwostepcredentials"></a>
<a id="tocstwostepcredentials"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "raw": {},
  "token": "string",
  "type": "TWO_STEP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|none|
|raw|object|true|none|none|
|token|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TWO_STEP|

<h2 id="tocS_UnauthCredentials">UnauthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaunauthcredentials"></a>
<a id="schema_UnauthCredentials"></a>
<a id="tocSunauthcredentials"></a>
<a id="tocsunauthcredentials"></a>

```json
{}
```

<h2 id="tocS_UnauthCredentialsWithType">UnauthCredentialsWithType</h2>
<!-- backwards compatibility -->
<a id="schemaunauthcredentialswithtype"></a>
<a id="schema_UnauthCredentialsWithType"></a>
<a id="tocSunauthcredentialswithtype"></a>
<a id="tocsunauthcredentialswithtype"></a>

```json
{
  "type": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NONE|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Connection tags (key/value strings). Keys are normalized to lowercase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_ConnectionEndUser">ConnectionEndUser</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionenduser"></a>
<a id="schema_ConnectionEndUser"></a>
<a id="tocSconnectionenduser"></a>
<a id="tocsconnectionenduser"></a>

```json
{
  "id": "string",
  "email": "string",
  "display_name": "string",
  "tags": {},
  "organization": {
    "id": "string",
    "display_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|**Deprecated.** Uniquely identifies the end user.|
|email|string \| null|false|none|**Deprecated.**|
|display_name|string \| null|false|none|**Deprecated.**|
|tags|object|false|none|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|
|organization|object \| null|false|none|**Deprecated.**|

<h2 id="tocS_EndUser">EndUser</h2>
<!-- backwards compatibility -->
<a id="schemaenduser"></a>
<a id="schema_EndUser"></a>
<a id="tocSenduser"></a>
<a id="tocsenduser"></a>

```json
{
  "id": "string",
  "email": "string",
  "display_name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|**Deprecated.** Uniquely identifies the end user.|
|email|string|false|none|**Deprecated.**|
|display_name|string|false|none|**Deprecated.**|
|tags|object|false|none|**Deprecated.** Tags associated with the end user. Only accepts strings values, up to 64 keys.|

<h2 id="tocS_ConnectionError">ConnectionError</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionerror"></a>
<a id="schema_ConnectionError"></a>
<a id="tocSconnectionerror"></a>
<a id="tocsconnectionerror"></a>

```json
{
  "type": "auth",
  "log_id": "VrnbtykXJFckCm3HP93t"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|log_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auth|
|type|sync|

<h2 id="tocS_ConnectionFull">ConnectionFull</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionfull"></a>
<a id="schema_ConnectionFull"></a>
<a id="tocSconnectionfull"></a>
<a id="tocsconnectionfull"></a>

```json
{
  "id": 0,
  "connection_id": "string",
  "provider_config_key": "string",
  "provider": "string",
  "errors": [
    {
      "type": "auth",
      "log_id": "VrnbtykXJFckCm3HP93t"
    }
  ],
  "end_user": {
    "id": "string",
    "email": "string",
    "display_name": "string",
    "tags": {},
    "organization": {
      "id": "string",
      "display_name": "string"
    }
  },
  "metadata": {},
  "connection_config": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "string",
  "updated_at": "string",
  "last_fetched_at": "string",
  "credentials": {
    "oauth_token": "string",
    "oauth_token_secret": "string",
    "type": "OAUTH1",
    "raw": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|connection_id|string|true|none|none|
|provider_config_key|string|true|none|none|
|provider|string|true|none|none|
|errors|[[ConnectionError](#schemaconnectionerror)]|true|none|none|
|end_user|[ConnectionEndUser](#schemaconnectionenduser) \| null|false|none|**Deprecated.**|
|metadata|object|true|none|none|
|connection_config|object|true|none|none|
|tags|[Tags](#schematags)|true|none|Connection tags (key/value strings). Keys are normalized to lowercase.|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|
|last_fetched_at|string|true|none|none|
|credentials|[AllAuthCredentials](#schemaallauthcredentials)|true|none|none|

<h2 id="tocS_NangoModel">NangoModel</h2>
<!-- backwards compatibility -->
<a id="schemanangomodel"></a>
<a id="schema_NangoModel"></a>
<a id="tocSnangomodel"></a>
<a id="tocsnangomodel"></a>

```json
{
  "fields": [
    {
      "array": true,
      "dynamic": true,
      "model": true,
      "name": "string",
      "optional": true,
      "tsType": true,
      "union": true,
      "value": "string"
    }
  ],
  "isAnon": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[NangoModelField](#schemanangomodelfield)]|true|none|none|
|isAnon|boolean|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_NangoModelField">NangoModelField</h2>
<!-- backwards compatibility -->
<a id="schemanangomodelfield"></a>
<a id="schema_NangoModelField"></a>
<a id="tocSnangomodelfield"></a>
<a id="tocsnangomodelfield"></a>

```json
{
  "array": true,
  "dynamic": true,
  "model": true,
  "name": "string",
  "optional": true,
  "tsType": true,
  "union": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|array|boolean|false|none|none|
|dynamic|boolean|false|none|none|
|model|boolean|false|none|none|
|name|string|true|none|none|
|optional|boolean|false|none|none|
|tsType|boolean|false|none|none|
|union|boolean|false|none|none|
|value|string \| number \| boolean \| [[NangoModelField](#schemanangomodelfield)]|true|none|none|

<h2 id="tocS_IntegrationCredentials">IntegrationCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationcredentials"></a>
<a id="schema_IntegrationCredentials"></a>
<a id="tocSintegrationcredentials"></a>
<a id="tocsintegrationcredentials"></a>

```json
{
  "type": "OAUTH1",
  "client_id": "string",
  "client_secret": "string",
  "scopes": "string",
  "webhook_secret": "string"
}
```

Integration credentials schema for different authentication types, as returned in API responses (fields may be null).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|scopes|string \| null|false|none|none|
|webhook_secret|string \| null|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|app_id|string|true|none|none|
|app_link|string|true|none|none|
|private_key|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|app_id|string|true|none|none|
|app_link|string|true|none|none|
|private_key|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_name|string \| null|false|none|none|
|client_uri|string \| null|false|none|none|
|client_logo_uri|string \| null|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string \| null|false|none|none|
|client_secret|string \| null|false|none|none|
|scopes|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH1|
|type|OAUTH2|
|type|TBA|
|type|APP|
|type|CUSTOM|
|type|MCP_OAUTH2_GENERIC|
|type|MCP_OAUTH2|

<h2 id="tocS_IntegrationCredentialsWithConfig">IntegrationCredentialsWithConfig</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationcredentialswithconfig"></a>
<a id="schema_IntegrationCredentialsWithConfig"></a>
<a id="tocSintegrationcredentialswithconfig"></a>
<a id="tocsintegrationcredentialswithconfig"></a>

```json
{
  "type": "OAUTH1",
  "client_id": "string",
  "client_secret": "string",
  "scopes": "string",
  "webhook_secret": "string"
}
```

Same as IntegrationCredentials, plus the shape returned for providers that declare an `integration_config` schema (e.g. aws-sigv4, epic, private-api-generic), alongside or instead of fixed credential fields. This variant is response-only -- it can't be submitted on create or update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[IntegrationCredentials](#schemaintegrationcredentials)|false|none|Integration credentials schema for different authentication types, as returned in API responses (fields may be null).|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|auth_mode|string|true|none|The provider's actual auth mode (e.g. AWS_SIGV4, TWO_STEP, API_KEY).|
|integration_config|object|true|none|The provider's `integration_config` values, keyed by the fields it declares.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTEGRATION_CONFIG|

<h2 id="tocS_IntegrationNangoManagedCredentialsInput">IntegrationNangoManagedCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationnangomanagedcredentialsinput"></a>
<a id="schema_IntegrationNangoManagedCredentialsInput"></a>
<a id="tocSintegrationnangomanagedcredentialsinput"></a>
<a id="tocsintegrationnangomanagedcredentialsinput"></a>

```json
{
  "type": "NANGO_MANAGED"
}
```

Uses a Nango-managed developer app instead of your own credentials. Only available when creating an integration for an `OAUTH1`, `OAUTH2`, or `APP` provider that Nango has a managed app for. Can't be combined with `integration_config` or `custom`, and the credentials can't be edited afterwards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NANGO_MANAGED|

<h2 id="tocS_IntegrationCredentialsInput">IntegrationCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationcredentialsinput"></a>
<a id="schema_IntegrationCredentialsInput"></a>
<a id="tocSintegrationcredentialsinput"></a>
<a id="tocsintegrationcredentialsinput"></a>

```json
{
  "type": "OAUTH1",
  "client_id": "string",
  "client_secret": "string",
  "scopes": "string",
  "webhook_secret": "string"
}
```

Integration credentials schema accepted in create/update request bodies. Only `type` is required: developer app credentials can be omitted at creation and supplied later, either with an update request or per connection at connection time. Fields left out of an update are kept as-is rather than cleared. MCP_OAUTH2 is the exception — static creation requires both client_id and client_secret, while dynamic and CIMD providers reject those fields because Nango manages them. Optional fields must not be null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|scopes|string|false|none|none|
|webhook_secret|string|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|app_id|string|false|none|none|
|app_link|string|false|none|none|
|private_key|string|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|app_id|string|false|none|none|
|app_link|string|false|none|none|
|private_key|string|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_name|string|false|none|none|
|client_uri|string|false|none|A URL, or an empty string.|
|client_logo_uri|string(uri)|false|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|scopes|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH1|
|type|OAUTH2|
|type|TBA|
|type|APP|
|type|CUSTOM|
|type|MCP_OAUTH2_GENERIC|
|type|MCP_OAUTH2|
