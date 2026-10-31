<h1 id="webhooklisteners">webhook_listeners v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Send notifications to external services whenever something important happens, like when files are changed or updated.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="webhooklisteners-webhooks">webhooks</h1>

## List registered webhooks

<a id="opIdwebhooks-index"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks`

This endpoint requires admin access

<h3 id="list-registered-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|query|string \| null|false|The callback URI to filter by|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      {
        "id": "string",
        "userId": "string",
        "httpMethod": "string",
        "uri": "string",
        "event": "string",
        "eventFilter": {
          "property1": {},
          "property2": {}
        },
        "userIdFilter": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "authMethod": "string",
        "authData": {
          "property1": {},
          "property2": {}
        },
        "tokenNeeded": {
          "user_ids": {
            "property1": "string",
            "property2": "string"
          },
          "user_roles": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="list-registered-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook registrations returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="list-registered-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[WebhookInfo](#schemawebhookinfo)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a new webhook

<a id="opIdwebhooks-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "httpMethod": "string",
    "uri": "string",
    "event": "string",
    "eventFilter": {
      "property1": {},
      "property2": {}
    },
    "userIdFilter": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "authMethod": "none",
    "authData": {
      "property1": {},
      "property2": {}
    },
    "tokenNeeded": null
  }'
```

`POST /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks`

This endpoint requires admin access

> Body parameter

```json
{
  "httpMethod": "string",
  "uri": "string",
  "event": "string",
  "eventFilter": {
    "property1": {},
    "property2": {}
  },
  "userIdFilter": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "authMethod": "none",
  "authData": {
    "property1": {},
    "property2": {}
  },
  "tokenNeeded": null
}
```

<h3 id="register-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» httpMethod|body|string|true|HTTP method to use to contact the webhook|
|» uri|body|string|true|Webhook URI endpoint|
|» event|body|string|true|Event class name to listen to|
|» eventFilter|body|object \| null|false|Mongo filter to apply to the serialized data to decide if firing|
|» » **additionalProperties**|body|object|false|none|
|» userIdFilter|body|string \| null|false|User id to filter on. The webhook will only be called by requests from this user. Empty or null means no filtering.|
|» headers|body|object \| null|false|Array of headers to send|
|» » **additionalProperties**|body|string|false|none|
|» authMethod|body|string \| null|false|Authentication method to use|
|» authData|body|object \| null|false|Array of data for authentication|
|» » **additionalProperties**|body|object|false|none|
|» tokenNeeded|body|object \| null|false|List of user ids for which to include auth tokens in the event. Has two fields: "user_ids" list of user uids for which tokens are needed, "user_roles" list of roles (users not defined by their ID but by the role they have in the webhook event) for which tokens can be included. Possible roles: "owner" for the user creating the webhook, "trigger" for the user triggering the webhook call. Requested auth tokens are valid for 1 hour after receiving them in the event call request.|
|» » user_ids|body|[string]|false|none|
|» » user_roles|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authMethod|none|
|» authMethod|header|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": "string",
      "userId": "string",
      "httpMethod": "string",
      "uri": "string",
      "event": "string",
      "eventFilter": {
        "property1": {},
        "property2": {}
      },
      "userIdFilter": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "authMethod": "string",
      "authData": {
        "property1": {},
        "property2": {}
      },
      "tokenNeeded": {
        "user_ids": {
          "property1": "string",
          "property2": "string"
        },
        "user_roles": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook registration returned|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Insufficient permissions|Inline|

<h3 id="register-a-new-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[WebhookInfo](#schemawebhookinfo)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get details on a registered webhook

<a id="opIdwebhooks-show"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}`

This endpoint requires admin access

<h3 id="get-details-on-a-registered-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|id of the webhook|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": "string",
      "userId": "string",
      "httpMethod": "string",
      "uri": "string",
      "event": "string",
      "eventFilter": {
        "property1": {},
        "property2": {}
      },
      "userIdFilter": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "authMethod": "string",
      "authData": {
        "property1": {},
        "property2": {}
      },
      "tokenNeeded": {
        "user_ids": {
          "property1": "string",
          "property2": "string"
        },
        "user_roles": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-details-on-a-registered-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook registration returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Webhook not found|Inline|

<h3 id="get-details-on-a-registered-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[WebhookInfo](#schemawebhookinfo)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update an existing webhook registration

<a id="opIdwebhooks-update"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "httpMethod": "string",
    "uri": "string",
    "event": "string",
    "eventFilter": {
      "property1": {},
      "property2": {}
    },
    "userIdFilter": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "authMethod": "none",
    "authData": {
      "property1": {},
      "property2": {}
    },
    "tokenNeeded": null
  }'
```

`POST /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}`

This endpoint requires admin access

> Body parameter

```json
{
  "httpMethod": "string",
  "uri": "string",
  "event": "string",
  "eventFilter": {
    "property1": {},
    "property2": {}
  },
  "userIdFilter": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "authMethod": "none",
  "authData": {
    "property1": {},
    "property2": {}
  },
  "tokenNeeded": null
}
```

<h3 id="update-an-existing-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|id of the webhook|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» httpMethod|body|string|true|HTTP method to use to contact the webhook|
|» uri|body|string|true|Webhook URI endpoint|
|» event|body|string|true|Event class name to listen to|
|» eventFilter|body|object \| null|false|Mongo filter to apply to the serialized data to decide if firing|
|» » **additionalProperties**|body|object|false|none|
|» userIdFilter|body|string \| null|false|User id to filter on. The webhook will only be called by requests from this user. Empty or null means no filtering.|
|» headers|body|object \| null|false|Array of headers to send|
|» » **additionalProperties**|body|string|false|none|
|» authMethod|body|string \| null|false|Authentication method to use|
|» authData|body|object \| null|false|Array of data for authentication|
|» » **additionalProperties**|body|object|false|none|
|» tokenNeeded|body|object \| null|false|List of user ids for which to include auth tokens in the event. Has two fields: "user_ids" list of user uids for which tokens are needed, "user_roles" list of roles (users not defined by their ID but by the role they have in the webhook event) for which tokens can be included. Possible roles: "owner" for the user creating the webhook, "trigger" for the user triggering the webhook call. Requested auth tokens are valid for 1 hour after receiving them in the event call request.|
|» » user_ids|body|[string]|false|none|
|» » user_roles|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authMethod|none|
|» authMethod|header|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": "string",
      "userId": "string",
      "httpMethod": "string",
      "uri": "string",
      "event": "string",
      "eventFilter": {
        "property1": {},
        "property2": {}
      },
      "userIdFilter": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "authMethod": "string",
      "authData": {
        "property1": {},
        "property2": {}
      },
      "tokenNeeded": {
        "user_ids": {
          "property1": "string",
          "property2": "string"
        },
        "user_roles": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-an-existing-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook registration returned|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Insufficient permissions|Inline|

<h3 id="update-an-existing-webhook-registration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[WebhookInfo](#schemawebhookinfo)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove an existing webhook registration

<a id="opIdwebhooks-destroy"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}`

This endpoint requires admin access

<h3 id="remove-an-existing-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|id of the webhook|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": true
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="remove-an-existing-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Boolean returned whether something was deleted|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Insufficient permissions|Inline|

<h3 id="remove-an-existing-webhook-registration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove all existing webhook registration mapped to an AppAPI app id

<a id="opIdwebhooks-delete-by-app-id"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/{appid}`

This endpoint requires admin access

<h3 id="remove-all-existing-webhook-registration-mapped-to-an-appapi-app-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appid|path|string|true|id of the app, as in the ex-app-id for creation|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": 0
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="remove-all-existing-webhook-registration-mapped-to-an-appapi-app-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Integer number of registrations deleted|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Insufficient permissions|Inline|

<h3 id="remove-all-existing-webhook-registration-mapped-to-an-appapi-app-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|integer(int64)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_WebhookInfo">WebhookInfo</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinfo"></a>
<a id="schema_WebhookInfo"></a>
<a id="tocSwebhookinfo"></a>
<a id="tocswebhookinfo"></a>

```json
{
  "id": "string",
  "userId": "string",
  "httpMethod": "string",
  "uri": "string",
  "event": "string",
  "eventFilter": {
    "property1": {},
    "property2": {}
  },
  "userIdFilter": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "authMethod": "string",
  "authData": {
    "property1": {},
    "property2": {}
  },
  "tokenNeeded": {
    "user_ids": {
      "property1": "string",
      "property2": "string"
    },
    "user_roles": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|userId|string|true|none|none|
|httpMethod|string|true|none|none|
|uri|string|true|none|none|
|event|string|false|none|none|
|eventFilter|object|false|none|none|
|userIdFilter|string|false|none|none|
|headers|object|false|none|none|
|authMethod|string|true|none|none|
|authData|object|false|none|none|
|tokenNeeded|object \| null|false|none|none|
