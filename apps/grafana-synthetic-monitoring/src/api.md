<h1 id="grafana-secrets-manager-api">Grafana Secrets Manager API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is simple API to store and retrieve secrets. Note that common
operations are supported (add, update, delete list) as well as requesting
the plain text version of a secret. The operations are accessible based on
the scopes of the secret used to access the API.

Base URLs:

* <a href="https://gsm.grafana-dev.net/api/v1">https://gsm.grafana-dev.net/api/v1</a>

<a href="https://grafana.com/legal/terms/">Terms of service</a>
Email: <a href="mailto:info@grafana.com">info@grafana.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://grafana.com/products/cloud/">External documentation for Grafana Cloud products</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="grafana-secrets-manager-api-secrets">secrets</h1>

Secrets management

<a href="https://grafana.com/products/cloud/">Documentation</a>

## Retrieve all secrets

<a id="opIdlistSecrets"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets`

Returns a list of secrets

> Example responses

> 200 Response

```json
{
  "secrets": [
    {
      "name": "my_secret",
      "description": "My secret",
      "labels": [
        {
          "name": "team",
          "value": "development"
        }
      ],
      "uuid": "01543325-00b3-4f69-b124-51f54835a245",
      "org_id": 1,
      "stack_id": 1,
      "created_by": "string",
      "created_at": 0,
      "modified_at": 0
    }
  ]
}
```

<h3 id="retrieve-all-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of secrets with metadata|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|

<h3 id="retrieve-all-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[[SecretWithMetadata](#schemasecretwithmetadata)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Add a new secret

<a id="opIdaddSecret"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my_secret",
    "description": "My secret",
    "labels": [
      {
        "name": "team",
        "value": "development"
      }
    ],
    "plaintext": "my secret value"
  }'
```

`POST /secrets`

Add a new secret

> Body parameter

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "plaintext": "my secret value"
}
```

<h3 id="add-a-new-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Secret](#schemasecret)|true|An object containing the secret to be added or updated.|
|» name|body|string|true|The name of the secret. Immutable after creation.|
|» description|body|string|true|The human readable description of the secret.|
|» labels|body|[[Label](#schemalabel)]|true|Key-value pairs associated with the secret.|
|» plaintext|body|string|false|The secret value. Only used for creation and update, never returned.|

> Example responses

> 201 Response

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0
}
```

<h3 id="add-a-new-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A single secret with metadata|[SecretWithMetadata](#schemasecretwithmetadata)|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|
|422|Unprocessable Entity|Validation exception|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Finds secrets by labels

<a id="opIdfindSecretsByLabels"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets/find_by_labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets/find_by_labels`

Multiple labels can be provided with comma separated strings.

> Example responses

> 200 Response

```json
{
  "secrets": [
    {
      "name": "my_secret",
      "description": "My secret",
      "labels": [
        {
          "name": "team",
          "value": "development"
        }
      ],
      "uuid": "01543325-00b3-4f69-b124-51f54835a245",
      "org_id": 1,
      "stack_id": 1,
      "created_by": "string",
      "created_at": 0,
      "modified_at": 0
    }
  ]
}
```

<h3 id="finds-secrets-by-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of secrets with metadata|Inline|
|400|Bad Request|Invalid tag value|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|

<h3 id="finds-secrets-by-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[[SecretWithMetadata](#schemasecretwithmetadata)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Find secret by ID

<a id="opIdgetSecretById"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets/{id}`

Returns a single secret

<h3 id="find-secret-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of secret to return|

> Example responses

> 200 Response

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0
}
```

<h3 id="find-secret-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single secret with metadata|[SecretWithMetadata](#schemasecretwithmetadata)|
|400|Bad Request|Invalid ID supplied|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|
|404|Not Found|Secret not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Update an existing secret

<a id="opIdupdateSecret"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my_secret",
    "description": "My secret",
    "labels": [
      {
        "name": "team",
        "value": "development"
      }
    ],
    "plaintext": "my secret value"
  }'
```

`PUT /secrets/{id}`

Update an existing secret by Id

> Body parameter

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "plaintext": "my secret value"
}
```

<h3 id="update-an-existing-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of secret to update|
|body|body|[Secret](#schemasecret)|true|An object containing the secret to be added or updated.|
|» name|body|string|true|The name of the secret. Immutable after creation.|
|» description|body|string|true|The human readable description of the secret.|
|» labels|body|[[Label](#schemalabel)]|true|Key-value pairs associated with the secret.|
|» plaintext|body|string|false|The secret value. Only used for creation and update, never returned.|

> Example responses

> 202 Response

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0
}
```

<h3 id="update-an-existing-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A single secret with metadata|[SecretWithMetadata](#schemasecretwithmetadata)|
|400|Bad Request|Invalid ID supplied|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|
|404|Not Found|Secret not found|None|
|422|Unprocessable Entity|Validation exception|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Deletes a secret

<a id="opIddeleteSecret"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /secrets/{id}`

delete a secret

<h3 id="deletes-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Secret id to delete|

> Example responses

> 200 Response

```json
{
  "message": "Operation succeeded",
  "code": "ok"
}
```

<h3 id="deletes-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Invalid secret value|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

## Decrypt the specified secret

<a id="opIddecryptSecretById"></a>

> Code samples

```bash
curl https://synthetic-monitoring-api.grafana.net/secrets/string/decrypt \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /secrets/{id}/decrypt`

Returns the secret with the plaintext value set

<h3 id="decrypt-the-specified-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of secret to decrypt|

> Example responses

> 200 Response

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0,
  "plaintext": "my secret value"
}
```

<h3 id="decrypt-the-specified-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single secret with metadata and the secret value as plaintext.|[DecryptedSecret](#schemadecryptedsecret)|
|400|Bad Request|Invalid ID supplied|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Not allowed|None|
|404|Not Found|Secret not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
secret_auth
</aside>

# Schemas

<h2 id="tocS_CommonSecretProperties">CommonSecretProperties</h2>
<!-- backwards compatibility -->
<a id="schemacommonsecretproperties"></a>
<a id="schema_CommonSecretProperties"></a>
<a id="tocScommonsecretproperties"></a>
<a id="tocscommonsecretproperties"></a>

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the secret. Immutable after creation.|
|description|string|true|none|The human readable description of the secret.|
|labels|[[Label](#schemalabel)]|true|none|Key-value pairs associated with the secret.|

<h2 id="tocS_SecretMetadata">SecretMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasecretmetadata"></a>
<a id="schema_SecretMetadata"></a>
<a id="tocSsecretmetadata"></a>
<a id="tocssecretmetadata"></a>

```json
{
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string(uuid)|true|read-only|The unique ID of the secret.|
|org_id|integer(int64)|true|read-only|The ID of the organization the secret belongs to.|
|stack_id|integer(int64)|true|read-only|The ID of the stack the secret belongs to.|
|created_by|string|true|read-only|The ID of the user who created the secret.|
|created_at|integer(int64)|true|read-only|The timestamp of secret creation.|
|modified_at|integer(int64)|true|read-only|The timestamp of the last secret modification.|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "plaintext": "my secret value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the secret. Immutable after creation.|
|description|string|true|none|The human readable description of the secret.|
|labels|[[Label](#schemalabel)]|true|none|Key-value pairs associated with the secret.|
|plaintext|string|false|write-only|The secret value. Only used for creation and update, never returned.|

<h2 id="tocS_SecretWithMetadata">SecretWithMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasecretwithmetadata"></a>
<a id="schema_SecretWithMetadata"></a>
<a id="tocSsecretwithmetadata"></a>
<a id="tocssecretwithmetadata"></a>

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the secret. Immutable after creation.|
|description|string|true|none|The human readable description of the secret.|
|labels|[[Label](#schemalabel)]|true|none|Key-value pairs associated with the secret.|
|uuid|string(uuid)|true|read-only|The unique ID of the secret.|
|org_id|integer(int64)|true|read-only|The ID of the organization the secret belongs to.|
|stack_id|integer(int64)|true|read-only|The ID of the stack the secret belongs to.|
|created_by|string|true|read-only|The ID of the user who created the secret.|
|created_at|integer(int64)|true|read-only|The timestamp of secret creation.|
|modified_at|integer(int64)|true|read-only|The timestamp of the last secret modification.|

<h2 id="tocS_DecryptedSecret">DecryptedSecret</h2>
<!-- backwards compatibility -->
<a id="schemadecryptedsecret"></a>
<a id="schema_DecryptedSecret"></a>
<a id="tocSdecryptedsecret"></a>
<a id="tocsdecryptedsecret"></a>

```json
{
  "name": "my_secret",
  "description": "My secret",
  "labels": [
    {
      "name": "team",
      "value": "development"
    }
  ],
  "uuid": "01543325-00b3-4f69-b124-51f54835a245",
  "org_id": 1,
  "stack_id": 1,
  "created_by": "string",
  "created_at": 0,
  "modified_at": 0,
  "plaintext": "my secret value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the secret. Immutable after creation.|
|description|string|true|none|The human readable description of the secret.|
|labels|[[Label](#schemalabel)]|true|none|Key-value pairs associated with the secret.|
|uuid|string(uuid)|true|read-only|The unique ID of the secret.|
|org_id|integer(int64)|true|read-only|The ID of the organization the secret belongs to.|
|stack_id|integer(int64)|true|read-only|The ID of the stack the secret belongs to.|
|created_by|string|true|read-only|The ID of the user who created the secret.|
|created_at|integer(int64)|true|read-only|The timestamp of secret creation.|
|modified_at|integer(int64)|true|read-only|The timestamp of the last secret modification.|
|plaintext|string|false|read-only|The secret value.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "name": "team",
  "value": "development"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the label.|
|value|string|true|none|The value of the label.|

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "message": "Operation succeeded",
  "code": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|code|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|ok|
|code|invalid_name|
|code|invalid_label_name|
|code|invalid_label_value|
