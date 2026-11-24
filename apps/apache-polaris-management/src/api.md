<h1 id="polaris-management-service">Polaris Management Service v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Defines the management APIs for using Polaris to create and manage Iceberg catalogs and their principals

Base URLs:

* <a href="https://localhost/api/management/v1">https://localhost/api/management/v1</a> - Server URL when the port can be inferred from the scheme

# Authentication

- oAuth2 authentication. Uses OAuth 2 with client credentials flow

    - Flow: implicit
    - Authorization URL = [{scheme}://{host}/api/v1/oauth/tokens]({scheme}://{host}/api/v1/oauth/tokens)

<h1 id="polaris-management-service-default">Default</h1>

## listCatalogs

<a id="opIdlistCatalogs"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs`

List all catalogs in this polaris service

> Example responses

> 200 Response

```json
{
  "catalogs": [
    {
      "type": "INTERNAL",
      "name": "string",
      "properties": {
        "default-base-location": "string",
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0,
      "storageConfigInfo": {
        "storageType": "S3",
        "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
        "storageName": "string"
      }
    }
  ]
}
```

<h3 id="listcatalogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of catalogs in the polaris service|[Catalogs](#schemacatalogs)|
|403|Forbidden|The caller does not have permission to list catalog details|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## createCatalog

<a id="opIdcreateCatalog"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "catalog": {
      "type": "INTERNAL",
      "name": "string",
      "properties": {
        "default-base-location": "string",
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0,
      "storageConfigInfo": {
        "storageType": "S3",
        "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
        "storageName": "string"
      }
    }
  }'
```

`POST /catalogs`

Add a new Catalog

> Body parameter

```json
{
  "catalog": {
    "type": "INTERNAL",
    "name": "string",
    "properties": {
      "default-base-location": "string",
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0,
    "storageConfigInfo": {
      "storageType": "S3",
      "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
      "storageName": "string"
    }
  }
}
```

<h3 id="createcatalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCatalogRequest](#schemacreatecatalogrequest)|true|The Catalog to create|
|» catalog|body|[Catalog](#schemacatalog)|true|A catalog object. A catalog may be internal or external. External catalogs are managed entirely by an external catalog interface. Third party catalogs may be other Iceberg REST implementations or other services with their own proprietary APIs|

> Example responses

> 201 Response

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

<h3 id="createcatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|[Catalog](#schemacatalog)|
|400|Bad Request|The request is invalid, for example an unsupported or incomplete storage or connection configuration|None|
|403|Forbidden|The caller does not have permission to create a catalog|None|
|404|Not Found|The catalog does not exist|None|
|409|Conflict|A catalog with the specified name already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getCatalog

<a id="opIdgetCatalog"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs/{catalogName}`

Get the details of a catalog

<h3 id="getcatalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog|

> Example responses

> 200 Response

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

<h3 id="getcatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog details|[Catalog](#schemacatalog)|
|403|Forbidden|The caller does not have permission to read catalog details|None|
|404|Not Found|The catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## updateCatalog

<a id="opIdupdateCatalog"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentEntityVersion": 0,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "storageConfigInfo": {
      "storageType": "S3",
      "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
      "storageName": "string"
    }
  }'
```

`PUT /catalogs/{catalogName}`

Update an existing catalog

> Body parameter

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

<h3 id="updatecatalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog|
|body|body|[UpdateCatalogRequest](#schemaupdatecatalogrequest)|true|The catalog details to use in the update|
|» currentEntityVersion|body|integer|false|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|» properties|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» storageConfigInfo|body|[StorageConfigInfo](#schemastorageconfiginfo)|false|A storage configuration used by catalogs|

> Example responses

> 200 Response

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

<h3 id="updatecatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog details|[Catalog](#schemacatalog)|
|403|Forbidden|The caller does not have permission to update catalog details|None|
|404|Not Found|The catalog does not exist|None|
|409|Conflict|The entity version doesn't match the currentEntityVersion; retry after fetching latest version|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## deleteCatalog

<a id="opIddeleteCatalog"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /catalogs/{catalogName}`

Delete an existing catalog. The catalog must be empty.

<h3 id="deletecatalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog|

<h3 id="deletecatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The caller does not have permission to delete a catalog|None|
|404|Not Found|The catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listPrincipals

<a id="opIdlistPrincipals"></a>

> Code samples

```bash
curl http://localhost:8181/principals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principals`

List the principals for the current catalog

> Example responses

> 200 Response

```json
{
  "principals": [
    {
      "name": "string",
      "clientId": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listprincipals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of principals for this catalog|[Principals](#schemaprincipals)|
|403|Forbidden|The caller does not have permission to list catalog admins|None|
|404|Not Found|The catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## createPrincipal

<a id="opIdcreatePrincipal"></a>

> Code samples

```bash
curl http://localhost:8181/principals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "principal": {
      "name": "alice",
      "properties": {
        "department": "engineering"
      }
    },
    "credentialRotationRequired": false
  }'
```

`POST /principals`

Create a principal

> Body parameter

```json
{
  "principal": {
    "name": "alice",
    "properties": {
      "department": "engineering"
    }
  },
  "credentialRotationRequired": false
}
```

<h3 id="createprincipal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePrincipalRequest](#schemacreateprincipalrequest)|true|The principal to create|
|» principal|body|[Principal](#schemaprincipal)|false|A Polaris principal.|
|» credentialRotationRequired|body|boolean|false|If true, the initial credentials can only be used to call rotateCredentials|

> Example responses

> 201 Response

```json
{
  "principal": {
    "name": "string",
    "clientId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  },
  "credentials": {
    "clientId": "string",
    "clientSecret": "password"
  }
}
```

<h3 id="createprincipal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|[PrincipalWithCredentials](#schemaprincipalwithcredentials)|
|403|Forbidden|The caller does not have permission to add a principal|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getPrincipal

<a id="opIdgetPrincipal"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principals/{principalName}`

Get the principal details

<h3 id="getprincipal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The principal name|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "clientId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="getprincipal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested principal|[Principal](#schemaprincipal)|
|403|Forbidden|The caller does not have permission to get principal details|None|
|404|Not Found|The catalog or principal does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## updatePrincipal

<a id="opIdupdatePrincipal"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentEntityVersion": 0,
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /principals/{principalName}`

Update an existing principal

> Body parameter

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateprincipal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The principal name|
|body|body|[UpdatePrincipalRequest](#schemaupdateprincipalrequest)|true|The principal details to use in the update|
|» currentEntityVersion|body|integer|true|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|» properties|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "clientId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="updateprincipal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated principal|[Principal](#schemaprincipal)|
|403|Forbidden|The caller does not have permission to update principal details|None|
|404|Not Found|The principal does not exist|None|
|409|Conflict|The entity version doesn't match the currentEntityVersion; retry after fetching latest version|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## deletePrincipal

<a id="opIddeletePrincipal"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /principals/{principalName}`

Remove a principal from polaris

<h3 id="deleteprincipal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The principal name|

<h3 id="deleteprincipal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The caller does not have permission to delete a principal|None|
|404|Not Found|The principal does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## rotateCredentials

<a id="opIdrotateCredentials"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /principals/{principalName}/rotate`

Rotate a principal's credentials. The new credentials will be returned in the response. This is the only API, aside from createPrincipal, that returns the user's credentials. This API is *not* idempotent.

<h3 id="rotatecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The user name|

> Example responses

> 200 Response

```json
{
  "principal": {
    "name": "string",
    "clientId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  },
  "credentials": {
    "clientId": "string",
    "clientSecret": "password"
  }
}
```

<h3 id="rotatecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The principal details along with the newly rotated credentials|[PrincipalWithCredentials](#schemaprincipalwithcredentials)|
|403|Forbidden|The caller does not have permission to rotate credentials|None|
|404|Not Found|The principal does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## resetCredentials

<a id="opIdresetCredentials"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "string",
    "clientSecret": "password"
  }'
```

`POST /principals/{principalName}/reset`

Reset a principal's credentials to a new set. By default, the system generates random credentials unless explicitly allowed to accept user-provided credentials via configuration.   This API is *not* idempotent and will return the newly created credentials.

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "password"
}
```

<h3 id="resetcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The principal's name|
|body|body|[ResetPrincipalRequest](#schemaresetprincipalrequest)|false|none|
|» clientId|body|string|false|Optional client ID to set for the principal. Must be a valid client ID previously generated by this service.<br>|
|» clientSecret|body|string(password)|false|Optional client secret to set for the principal. Polaris service implementations may impose extra requirements on what is accepted as a secret (special chars, length, etc.)<br>|

> Example responses

> 200 Response

```json
{
  "principal": {
    "name": "string",
    "clientId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  },
  "credentials": {
    "clientId": "string",
    "clientSecret": "password"
  }
}
```

<h3 id="resetcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The principal details along with the newly reset credentials|[PrincipalWithCredentials](#schemaprincipalwithcredentials)|
|403|Forbidden|The caller does not have permission to reset credentials|None|
|404|Not Found|The principal does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listPrincipalRolesAssigned

<a id="opIdlistPrincipalRolesAssigned"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string/principal-roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principals/{principalName}/principal-roles`

List the roles assigned to the principal

<h3 id="listprincipalrolesassigned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The name of the target principal|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listprincipalrolesassigned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of roles assigned to this principal|[PrincipalRoles](#schemaprincipalroles)|
|403|Forbidden|The caller does not have permission to list roles|None|
|404|Not Found|The principal or catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## assignPrincipalRole

<a id="opIdassignPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string/principal-roles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "principalRole": {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  }'
```

`PUT /principals/{principalName}/principal-roles`

Add a role to the principal

> Body parameter

```json
{
  "principalRole": {
    "name": "string",
    "federated": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

<h3 id="assignprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The name of the target principal|
|body|body|[GrantPrincipalRoleRequest](#schemagrantprincipalrolerequest)|true|The principal role to assign|
|» principalRole|body|[PrincipalRole](#schemaprincipalrole)|false|none|

<h3 id="assignprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|None|
|403|Forbidden|The caller does not have permission to add assign a role to the principal|None|
|404|Not Found|The catalog, the principal, or the role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## revokePrincipalRole

<a id="opIdrevokePrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principals/string/principal-roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /principals/{principalName}/principal-roles/{principalRoleName}`

Remove a role from a catalog principal

<h3 id="revokeprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalName|path|string|true|The name of the target principal|
|principalRoleName|path|string|true|The name of the role|

<h3 id="revokeprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The caller does not have permission to remove a role from the principal|None|
|404|Not Found|The catalog or principal does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listPrincipalRoles

<a id="opIdlistPrincipalRoles"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principal-roles`

List the principal roles

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listprincipalroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of principal roles|[PrincipalRoles](#schemaprincipalroles)|
|403|Forbidden|The caller does not have permission to list principal roles|None|
|404|Not Found|The catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## createPrincipalRole

<a id="opIdcreatePrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "principalRole": {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  }'
```

`POST /principal-roles`

Create a principal role

> Body parameter

```json
{
  "principalRole": {
    "name": "string",
    "federated": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

<h3 id="createprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePrincipalRoleRequest](#schemacreateprincipalrolerequest)|true|The principal to create|
|» principalRole|body|[PrincipalRole](#schemaprincipalrole)|false|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "federated": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="createprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|[PrincipalRole](#schemaprincipalrole)|
|403|Forbidden|The caller does not have permission to add a principal role|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getPrincipalRole

<a id="opIdgetPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principal-roles/{principalRoleName}`

Get the principal role details

<h3 id="getprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "federated": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="getprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested principal role|[PrincipalRole](#schemaprincipalrole)|
|403|Forbidden|The caller does not have permission to get principal role details|None|
|404|Not Found|The principal role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## updatePrincipalRole

<a id="opIdupdatePrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentEntityVersion": 0,
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /principal-roles/{principalRoleName}`

Update an existing principalRole

> Body parameter

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|
|body|body|[UpdatePrincipalRoleRequest](#schemaupdateprincipalrolerequest)|true|The principalRole details to use in the update|
|» currentEntityVersion|body|integer|true|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|» properties|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "federated": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="updateprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated principal role|[PrincipalRole](#schemaprincipalrole)|
|403|Forbidden|The caller does not have permission to update principal role details|None|
|404|Not Found|The principal role does not exist|None|
|409|Conflict|The entity version doesn't match the currentEntityVersion; retry after fetching latest version|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## deletePrincipalRole

<a id="opIddeletePrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /principal-roles/{principalRoleName}`

Remove a principal role from polaris

<h3 id="deleteprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|

<h3 id="deleteprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The caller does not have permission to delete a principal role|None|
|404|Not Found|The principal role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listAssigneePrincipalsForPrincipalRole

<a id="opIdlistAssigneePrincipalsForPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string/principals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principal-roles/{principalRoleName}/principals`

List the Principals to whom the target principal role has been assigned

<h3 id="listassigneeprincipalsforprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|

> Example responses

> 200 Response

```json
{
  "principals": [
    {
      "name": "string",
      "clientId": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listassigneeprincipalsforprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List the Principals to whom the target principal role has been assigned|[Principals](#schemaprincipals)|
|403|Forbidden|The caller does not have permission to list principals|None|
|404|Not Found|The principal role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listCatalogRolesForPrincipalRole

<a id="opIdlistCatalogRolesForPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string/catalog-roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /principal-roles/{principalRoleName}/catalog-roles/{catalogName}`

Get the catalog roles mapped to the principal role

<h3 id="listcatalogrolesforprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|
|catalogName|path|string|true|The name of the catalog where the catalogRoles reside|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "name": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listcatalogrolesforprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of catalog roles mapped to the principal role|[CatalogRoles](#schemacatalogroles)|
|403|Forbidden|The caller does not have permission to list catalog roles|None|
|404|Not Found|The principal role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## assignCatalogRoleToPrincipalRole

<a id="opIdassignCatalogRoleToPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string/catalog-roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "catalogRole": {
      "name": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  }'
```

`PUT /principal-roles/{principalRoleName}/catalog-roles/{catalogName}`

Assign a catalog role to a principal role

> Body parameter

```json
{
  "catalogRole": {
    "name": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

<h3 id="assigncatalogroletoprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|
|catalogName|path|string|true|The name of the catalog where the catalogRoles reside|
|body|body|[GrantCatalogRoleRequest](#schemagrantcatalogrolerequest)|true|The principal to create|
|» catalogRole|body|[CatalogRole](#schemacatalogrole)|false|none|

<h3 id="assigncatalogroletoprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|None|
|403|Forbidden|The caller does not have permission to assign a catalog role|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## revokeCatalogRoleFromPrincipalRole

<a id="opIdrevokeCatalogRoleFromPrincipalRole"></a>

> Code samples

```bash
curl http://localhost:8181/principal-roles/string/catalog-roles/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /principal-roles/{principalRoleName}/catalog-roles/{catalogName}/{catalogRoleName}`

Remove a catalog role from a principal role

<h3 id="revokecatalogrolefromprincipalrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principalRoleName|path|string|true|The principal role name|
|catalogName|path|string|true|The name of the catalog that contains the role to revoke|
|catalogRoleName|path|string|true|The name of the catalog role that should be revoked|

<h3 id="revokecatalogrolefromprincipalrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The caller does not have permission to revoke a catalog role|None|
|404|Not Found|The principal role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listCatalogRoles

<a id="opIdlistCatalogRoles"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs/{catalogName}/catalog-roles`

List existing roles in the catalog

<h3 id="listcatalogroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The catalog for which we are reading/updating roles|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "name": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listcatalogroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of roles that exist in this catalog|[CatalogRoles](#schemacatalogroles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## createCatalogRole

<a id="opIdcreateCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "catalogRole": {
      "name": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  }'
```

`POST /catalogs/{catalogName}/catalog-roles`

Create a new role in the catalog

> Body parameter

```json
{
  "catalogRole": {
    "name": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

<h3 id="createcatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The catalog for which we are reading/updating roles|
|body|body|[CreateCatalogRoleRequest](#schemacreatecatalogrolerequest)|false|none|
|» catalogRole|body|[CatalogRole](#schemacatalogrole)|false|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="createcatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|[CatalogRole](#schemacatalogrole)|
|403|Forbidden|The principal is not authorized to create roles|None|
|404|Not Found|The catalog does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## getCatalogRole

<a id="opIdgetCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs/{catalogName}/catalog-roles/{catalogRoleName}`

Get the details of an existing role

<h3 id="getcatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The catalog for which we are retrieving roles|
|catalogRoleName|path|string|true|The name of the role|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="getcatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The specified role details|[CatalogRole](#schemacatalogrole)|
|403|Forbidden|The principal is not authorized to read role data|None|
|404|Not Found|The catalog or the role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## updateCatalogRole

<a id="opIdupdateCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentEntityVersion": 0,
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /catalogs/{catalogName}/catalog-roles/{catalogRoleName}`

Update an existing role in the catalog

> Body parameter

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatecatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The catalog for which we are retrieving roles|
|catalogRoleName|path|string|true|The name of the role|
|body|body|[UpdateCatalogRoleRequest](#schemaupdatecatalogrolerequest)|false|none|
|» currentEntityVersion|body|integer|true|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|» properties|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

<h3 id="updatecatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The specified role details|[CatalogRole](#schemacatalogrole)|
|403|Forbidden|The principal is not authorized to update roles|None|
|404|Not Found|The catalog or the role does not exist|None|
|409|Conflict|The entity version doesn't match the currentEntityVersion; retry after fetching latest version|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## deleteCatalogRole

<a id="opIddeleteCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /catalogs/{catalogName}/catalog-roles/{catalogRoleName}`

Delete an existing role from the catalog. All associated grants will also be deleted

<h3 id="deletecatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The catalog for which we are retrieving roles|
|catalogRoleName|path|string|true|The name of the role|

<h3 id="deletecatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success, no content|None|
|403|Forbidden|The principal is not authorized to delete roles|None|
|404|Not Found|The catalog or the role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listAssigneePrincipalRolesForCatalogRole

<a id="opIdlistAssigneePrincipalRolesForCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string/principal-roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs/{catalogName}/catalog-roles/{catalogRoleName}/principal-roles`

List the PrincipalRoles to which the target catalog role has been assigned

<h3 id="listassigneeprincipalrolesforcatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog where the catalog role resides|
|catalogRoleName|path|string|true|The name of the catalog role|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

<h3 id="listassigneeprincipalrolesforcatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List the PrincipalRoles to which the target catalog role has been assigned|[PrincipalRoles](#schemaprincipalroles)|
|403|Forbidden|The caller does not have permission to list principal roles|None|
|404|Not Found|The catalog or catalog role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## listGrantsForCatalogRole

<a id="opIdlistGrantsForCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string/grants \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants`

List the grants the catalog role holds

<h3 id="listgrantsforcatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog where the role will receive the grant|
|catalogRoleName|path|string|true|The name of the role receiving the grant (must exist)|

> Example responses

> 200 Response

```json
{
  "grants": [
    {
      "type": "catalog"
    }
  ]
}
```

<h3 id="listgrantsforcatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all grants given to the role in this catalog|[GrantResources](#schemagrantresources)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## addGrantToCatalogRole

<a id="opIdaddGrantToCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string/grants \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "grant": {
      "type": "catalog"
    }
  }'
```

`PUT /catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants`

Add a new grant to the catalog role

> Body parameter

```json
{
  "grant": {
    "type": "catalog"
  }
}
```

<h3 id="addgranttocatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogName|path|string|true|The name of the catalog where the role will receive the grant|
|catalogRoleName|path|string|true|The name of the role receiving the grant (must exist)|
|body|body|[AddGrantRequest](#schemaaddgrantrequest)|false|none|
|» grant|body|[GrantResource](#schemagrantresource)|false|none|

<h3 id="addgranttocatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|None|
|403|Forbidden|The principal is not authorized to create grants|None|
|404|Not Found|The catalog or the role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## revokeGrantFromCatalogRole

<a id="opIdrevokeGrantFromCatalogRole"></a>

> Code samples

```bash
curl http://localhost:8181/catalogs/string/catalog-roles/string/grants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "grant": {
      "type": "catalog"
    }
  }'
```

`POST /catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants`

Delete a specific grant from the role. This may be a subset or a superset of the grants the role has. In case of a subset, the role will retain the grants not specified. If the `cascade` parameter is true, grant revocation will have a cascading effect - that is, if a principal has specific grants on a subresource, and grants are revoked on a parent resource, the grants present on the subresource will be revoked as well. By default, this behavior is disabled and grant revocation only affects the specified resource.

> Body parameter

```json
{
  "grant": {
    "type": "catalog"
  }
}
```

<h3 id="revokegrantfromcatalogrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cascade|query|boolean|false|If true, the grant revocation cascades to all subresources.|
|catalogName|path|string|true|The name of the catalog where the role will receive the grant|
|catalogRoleName|path|string|true|The name of the role receiving the grant (must exist)|
|body|body|[RevokeGrantRequest](#schemarevokegrantrequest)|false|none|
|» grant|body|[GrantResource](#schemagrantresource)|false|none|

<h3 id="revokegrantfromcatalogrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|None|
|403|Forbidden|The principal is not authorized to create grants|None|
|404|Not Found|The catalog or the role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_Catalogs">Catalogs</h2>
<!-- backwards compatibility -->
<a id="schemacatalogs"></a>
<a id="schema_Catalogs"></a>
<a id="tocScatalogs"></a>
<a id="tocscatalogs"></a>

```json
{
  "catalogs": [
    {
      "type": "INTERNAL",
      "name": "string",
      "properties": {
        "default-base-location": "string",
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0,
      "storageConfigInfo": {
        "storageType": "S3",
        "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
        "storageName": "string"
      }
    }
  ]
}
```

A list of Catalog objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[Catalog](#schemacatalog)]|true|none|none|

<h2 id="tocS_CreateCatalogRequest">CreateCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalogrequest"></a>
<a id="schema_CreateCatalogRequest"></a>
<a id="tocScreatecatalogrequest"></a>
<a id="tocscreatecatalogrequest"></a>

```json
{
  "catalog": {
    "type": "INTERNAL",
    "name": "string",
    "properties": {
      "default-base-location": "string",
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0,
    "storageConfigInfo": {
      "storageType": "S3",
      "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
      "storageName": "string"
    }
  }
}
```

Request to create a new catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog|[Catalog](#schemacatalog)|true|none|A catalog object. A catalog may be internal or external. External catalogs are managed entirely by an external catalog interface. Third party catalogs may be other Iceberg REST implementations or other services with their own proprietary APIs|

<h2 id="tocS_Catalog">Catalog</h2>
<!-- backwards compatibility -->
<a id="schemacatalog"></a>
<a id="schema_Catalog"></a>
<a id="tocScatalog"></a>
<a id="tocscatalog"></a>

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

A catalog object. A catalog may be internal or external. External catalogs are managed entirely by an external catalog interface. Third party catalogs may be other Iceberg REST implementations or other services with their own proprietary APIs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|the type of catalog - internal or external|
|name|string|true|none|The name of the catalog|
|properties|object|true|none|none|
|createTimestamp|integer(int64)|false|none|The creation time represented as unix epoch timestamp in milliseconds|
|lastUpdateTimestamp|integer(int64)|false|none|The last update time represented as unix epoch timestamp in milliseconds|
|entityVersion|integer|false|none|The version of the catalog object used to determine if the catalog metadata has changed|
|storageConfigInfo|[StorageConfigInfo](#schemastorageconfiginfo)|true|none|A storage configuration used by catalogs|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTERNAL|
|type|EXTERNAL|

<h2 id="tocS_PolarisCatalog">PolarisCatalog</h2>
<!-- backwards compatibility -->
<a id="schemapolariscatalog"></a>
<a id="schema_PolarisCatalog"></a>
<a id="tocSpolariscatalog"></a>
<a id="tocspolariscatalog"></a>

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

The base catalog type - this contains all the fields necessary to construct an INTERNAL catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|the type of catalog - internal or external|
|name|string|true|none|The name of the catalog|
|properties|object|true|none|none|
|createTimestamp|integer(int64)|false|none|The creation time represented as unix epoch timestamp in milliseconds|
|lastUpdateTimestamp|integer(int64)|false|none|The last update time represented as unix epoch timestamp in milliseconds|
|entityVersion|integer|false|none|The version of the catalog object used to determine if the catalog metadata has changed|
|storageConfigInfo|[StorageConfigInfo](#schemastorageconfiginfo)|true|none|A storage configuration used by catalogs|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTERNAL|
|type|EXTERNAL|

<h2 id="tocS_ExternalCatalog">ExternalCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcatalog"></a>
<a id="schema_ExternalCatalog"></a>
<a id="tocSexternalcatalog"></a>
<a id="tocsexternalcatalog"></a>

```json
{
  "type": "INTERNAL",
  "name": "string",
  "properties": {
    "default-base-location": "string",
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0,
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  },
  "connectionConfigInfo": {
    "connectionType": "ICEBERG_REST",
    "uri": "string",
    "authenticationParameters": {
      "authenticationType": "OAUTH"
    },
    "serviceIdentity": {
      "identityType": "AWS_IAM"
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

An externally managed catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|the type of catalog - internal or external|
|name|string|true|none|The name of the catalog|
|properties|object|true|none|none|
|createTimestamp|integer(int64)|false|none|The creation time represented as unix epoch timestamp in milliseconds|
|lastUpdateTimestamp|integer(int64)|false|none|The last update time represented as unix epoch timestamp in milliseconds|
|entityVersion|integer|false|none|The version of the catalog object used to determine if the catalog metadata has changed|
|storageConfigInfo|[StorageConfigInfo](#schemastorageconfiginfo)|true|none|A storage configuration used by catalogs|
|connectionConfigInfo|[ConnectionConfigInfo](#schemaconnectionconfiginfo)|false|none|A connection configuration representing a remote catalog service. IMPORTANT - Specifying a ConnectionConfigInfo in an ExternalCatalog is currently an experimental API and is subject to change. The authenticationParameters field is required when creating an external catalog; a request without it is rejected with HTTP 400.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTERNAL|
|type|EXTERNAL|

<h2 id="tocS_ConnectionConfigInfo">ConnectionConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionconfiginfo"></a>
<a id="schema_ConnectionConfigInfo"></a>
<a id="tocSconnectionconfiginfo"></a>
<a id="tocsconnectionconfiginfo"></a>

```json
{
  "connectionType": "ICEBERG_REST",
  "uri": "string",
  "authenticationParameters": {
    "authenticationType": "OAUTH"
  },
  "serviceIdentity": {
    "identityType": "AWS_IAM"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

A connection configuration representing a remote catalog service. IMPORTANT - Specifying a ConnectionConfigInfo in an ExternalCatalog is currently an experimental API and is subject to change. The authenticationParameters field is required when creating an external catalog; a request without it is rejected with HTTP 400.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|true|none|The type of remote catalog service represented by this connection|
|uri|string|false|none|URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for<br>BIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.<br>|
|authenticationParameters|[AuthenticationParameters](#schemaauthenticationparameters)|false|none|Authentication-specific information for a connection|
|serviceIdentity|[ServiceIdentityInfo](#schemaserviceidentityinfo)|false|read-only|Identity metadata for the Polaris service used to access external resources.|
|properties|object|false|none|Additional connection properties|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|ICEBERG_REST|
|connectionType|HADOOP|
|connectionType|HIVE|
|connectionType|BIGQUERY|

<h2 id="tocS_IcebergRestConnectionConfigInfo">IcebergRestConnectionConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemaicebergrestconnectionconfiginfo"></a>
<a id="schema_IcebergRestConnectionConfigInfo"></a>
<a id="tocSicebergrestconnectionconfiginfo"></a>
<a id="tocsicebergrestconnectionconfiginfo"></a>

```json
{
  "connectionType": "ICEBERG_REST",
  "uri": "string",
  "authenticationParameters": {
    "authenticationType": "OAUTH"
  },
  "serviceIdentity": {
    "identityType": "AWS_IAM"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "remoteCatalogName": "string"
}
```

Configuration necessary for connecting to an Iceberg REST Catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|true|none|The type of remote catalog service represented by this connection|
|uri|string|false|none|URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for<br>BIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.<br>|
|authenticationParameters|[AuthenticationParameters](#schemaauthenticationparameters)|false|none|Authentication-specific information for a connection|
|serviceIdentity|[ServiceIdentityInfo](#schemaserviceidentityinfo)|false|read-only|Identity metadata for the Polaris service used to access external resources.|
|properties|object|false|none|Additional connection properties|
|remoteCatalogName|string|false|none|The name of a remote catalog instance within the remote catalog service; in some older systems this is specified as the 'warehouse' when multiple logical catalogs are served under the same base uri, and often translates into a 'prefix' added to all REST resource paths|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|ICEBERG_REST|
|connectionType|HADOOP|
|connectionType|HIVE|
|connectionType|BIGQUERY|

<h2 id="tocS_HadoopConnectionConfigInfo">HadoopConnectionConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemahadoopconnectionconfiginfo"></a>
<a id="schema_HadoopConnectionConfigInfo"></a>
<a id="tocShadoopconnectionconfiginfo"></a>
<a id="tocshadoopconnectionconfiginfo"></a>

```json
{
  "connectionType": "ICEBERG_REST",
  "uri": "string",
  "authenticationParameters": {
    "authenticationType": "OAUTH"
  },
  "serviceIdentity": {
    "identityType": "AWS_IAM"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "warehouse": "string"
}
```

Configuration necessary for connecting to a Hadoop Catalog. The catalog is initialized from
`warehouse`; `uri` is ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|true|none|The type of remote catalog service represented by this connection|
|uri|string|false|none|URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for<br>BIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.<br>|
|authenticationParameters|[AuthenticationParameters](#schemaauthenticationparameters)|false|none|Authentication-specific information for a connection|
|serviceIdentity|[ServiceIdentityInfo](#schemaserviceidentityinfo)|false|read-only|Identity metadata for the Polaris service used to access external resources.|
|properties|object|false|none|Additional connection properties|
|warehouse|string|false|none|The file path to where this catalog should store tables|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|ICEBERG_REST|
|connectionType|HADOOP|
|connectionType|HIVE|
|connectionType|BIGQUERY|

<h2 id="tocS_HiveConnectionConfigInfo">HiveConnectionConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemahiveconnectionconfiginfo"></a>
<a id="schema_HiveConnectionConfigInfo"></a>
<a id="tocShiveconnectionconfiginfo"></a>
<a id="tocshiveconnectionconfiginfo"></a>

```json
{
  "connectionType": "ICEBERG_REST",
  "uri": "string",
  "authenticationParameters": {
    "authenticationType": "OAUTH"
  },
  "serviceIdentity": {
    "identityType": "AWS_IAM"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "warehouse": "string"
}
```

Configuration necessary for connecting to a Hive Catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|true|none|The type of remote catalog service represented by this connection|
|uri|string|false|none|URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for<br>BIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.<br>|
|authenticationParameters|[AuthenticationParameters](#schemaauthenticationparameters)|false|none|Authentication-specific information for a connection|
|serviceIdentity|[ServiceIdentityInfo](#schemaserviceidentityinfo)|false|read-only|Identity metadata for the Polaris service used to access external resources.|
|properties|object|false|none|Additional connection properties|
|warehouse|string|false|none|The warehouse location for the hive catalog.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|ICEBERG_REST|
|connectionType|HADOOP|
|connectionType|HIVE|
|connectionType|BIGQUERY|

<h2 id="tocS_BigQueryMetastoreConnectionConfigInfo">BigQueryMetastoreConnectionConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigquerymetastoreconnectionconfiginfo"></a>
<a id="schema_BigQueryMetastoreConnectionConfigInfo"></a>
<a id="tocSbigquerymetastoreconnectionconfiginfo"></a>
<a id="tocsbigquerymetastoreconnectionconfiginfo"></a>

```json
{
  "connectionType": "ICEBERG_REST",
  "uri": "string",
  "authenticationParameters": {
    "authenticationType": "OAUTH"
  },
  "serviceIdentity": {
    "identityType": "AWS_IAM"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Configuration necessary for connecting to a BigQuery Metastore Catalog.
Required properties in the properties map:
- gcp.bigquery.project-id: The GCP project ID
- warehouse: The warehouse location for the BigQuery Metastore Catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionType|string|true|none|The type of remote catalog service represented by this connection|
|uri|string|false|none|URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for<br>BIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.<br>|
|authenticationParameters|[AuthenticationParameters](#schemaauthenticationparameters)|false|none|Authentication-specific information for a connection|
|serviceIdentity|[ServiceIdentityInfo](#schemaserviceidentityinfo)|false|read-only|Identity metadata for the Polaris service used to access external resources.|
|properties|object|false|none|Additional connection properties|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|ICEBERG_REST|
|connectionType|HADOOP|
|connectionType|HIVE|
|connectionType|BIGQUERY|

<h2 id="tocS_AuthenticationParameters">AuthenticationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationparameters"></a>
<a id="schema_AuthenticationParameters"></a>
<a id="tocSauthenticationparameters"></a>
<a id="tocsauthenticationparameters"></a>

```json
{
  "authenticationType": "OAUTH"
}
```

Authentication-specific information for a connection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_GcpAuthenticationParameters">GcpAuthenticationParameters</h2>
<!-- backwards compatibility -->
<a id="schemagcpauthenticationparameters"></a>
<a id="schema_GcpAuthenticationParameters"></a>
<a id="tocSgcpauthenticationparameters"></a>
<a id="tocsgcpauthenticationparameters"></a>

```json
{
  "authenticationType": "OAUTH"
}
```

Uses GCP authentication from the Iceberg codebase

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_OAuthClientCredentialsParameters">OAuthClientCredentialsParameters</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclientcredentialsparameters"></a>
<a id="schema_OAuthClientCredentialsParameters"></a>
<a id="tocSoauthclientcredentialsparameters"></a>
<a id="tocsoauthclientcredentialsparameters"></a>

```json
{
  "authenticationType": "OAUTH",
  "tokenUri": "string",
  "clientId": "string",
  "clientSecret": "password",
  "scopes": [
    "string"
  ]
}
```

OAuth authentication based on client_id/client_secret

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|
|tokenUri|string|false|none|Token server URI|
|clientId|string|false|none|oauth client id|
|clientSecret|string(password)|false|none|oauth client secret (input-only)|
|scopes|[string]|false|none|oauth scopes to specify when exchanging for a short-lived access token|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_BearerAuthenticationParameters">BearerAuthenticationParameters</h2>
<!-- backwards compatibility -->
<a id="schemabearerauthenticationparameters"></a>
<a id="schema_BearerAuthenticationParameters"></a>
<a id="tocSbearerauthenticationparameters"></a>
<a id="tocsbearerauthenticationparameters"></a>

```json
{
  "authenticationType": "OAUTH",
  "bearerToken": "password"
}
```

Bearer authentication directly embedded in request auth headers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|
|bearerToken|string(password)|false|none|Bearer token (input-only)|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_SigV4AuthenticationParameters">SigV4AuthenticationParameters</h2>
<!-- backwards compatibility -->
<a id="schemasigv4authenticationparameters"></a>
<a id="schema_SigV4AuthenticationParameters"></a>
<a id="tocSsigv4authenticationparameters"></a>
<a id="tocssigv4authenticationparameters"></a>

```json
{
  "authenticationType": "OAUTH",
  "roleArn": "arn:aws:iam::123456789001:role/role-that-has-remote-catalog-access",
  "storageName": "my-sigv4-catalog",
  "roleSessionName": "polaris-remote-catalog-access",
  "externalId": "external-id-1234",
  "signingRegion": "us-west-2",
  "signingName": "glue",
  "sessionPolicy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"glue:*\",\"s3:GetObject\",\"s3:ListBucket\"],\"Resource\":\"*\"}]}",
  "stsEndpoint": "https://sts.example.com:1234"
}
```

AWS Signature Version 4 authentication

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|
|roleArn|string|false|none|The AWS IAM role ARN assumed by Polaris when signing requests through STS.|
|storageName|string|false|none|The name of a server-side AWS credential. Polaris uses it to sign requests directly when roleArn is missing. It is ignored when roleArn is set. Applies to any SigV4 Iceberg REST catalog, including AWS services such as Glue.|
|roleSessionName|string|false|none|The role session name to be used by the SigV4 protocol for signing requests|
|externalId|string|false|none|An optional external id used to establish a trust relationship with AWS in the trust policy|
|signingRegion|string|true|none|Region to be used by the SigV4 protocol for signing requests|
|signingName|string|false|none|The service name to be used by the SigV4 protocol for signing requests, the default signing name is "execute-api" is if not provided|
|sessionPolicy|string|false|none|An optional IAM session policy (JSON) attached to the STS AssumeRole request. This policy intersects with the IAM role's permissions to further restrict the vended credentials. When omitted, no session policy is applied and the credentials inherit the full permissions of the assumed role.|
|stsEndpoint|string|false|none|An optional STS endpoint URI used by Polaris to call AWS STS AssumeRole for this connection. When omitted, the default AWS STS endpoint for the signing region is used. Must be an absolute http or https URI.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_ImplicitAuthenticationParameters">ImplicitAuthenticationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaimplicitauthenticationparameters"></a>
<a id="schema_ImplicitAuthenticationParameters"></a>
<a id="tocSimplicitauthenticationparameters"></a>
<a id="tocsimplicitauthenticationparameters"></a>

```json
{
  "authenticationType": "OAUTH"
}
```

Polaris does not explicitly accept any authentication parameters for the connection. Authentication parameters found in the environment and/or configuration files will be used for this connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|true|none|The type of authentication to use when connecting to the remote rest service|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|OAUTH|
|authenticationType|BEARER|
|authenticationType|SIGV4|
|authenticationType|IMPLICIT|
|authenticationType|GCP|

<h2 id="tocS_StorageConfigInfo">StorageConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfiginfo"></a>
<a id="schema_StorageConfigInfo"></a>
<a id="tocSstorageconfiginfo"></a>
<a id="tocsstorageconfiginfo"></a>

```json
{
  "storageType": "S3",
  "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
  "storageName": "string"
}
```

A storage configuration used by catalogs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|string|true|none|The cloud provider type this storage is built on. FILE is supported for testing purposes only|
|allowedLocations|[string]|false|none|none|
|storageName|string|false|none|An optional name referencing a server-side storage configuration|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|S3|
|storageType|GCS|
|storageType|AZURE|
|storageType|FILE|

<h2 id="tocS_AwsStorageConfigInfo">AwsStorageConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemaawsstorageconfiginfo"></a>
<a id="schema_AwsStorageConfigInfo"></a>
<a id="tocSawsstorageconfiginfo"></a>
<a id="tocsawsstorageconfiginfo"></a>

```json
{
  "storageType": "S3",
  "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
  "storageName": "string",
  "roleArn": "arn:aws:iam::123456789001:principal/abc1-b-self1234",
  "externalId": "string",
  "userArn": "arn:aws:iam::123456789001:user/abc1-b-self1234",
  "currentKmsKey": "arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012",
  "allowedKmsKeys": [
    "arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012"
  ],
  "encryptionKeys": [
    "arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012"
  ],
  "decryptionKeys": [
    "arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012"
  ],
  "region": "us-east-2",
  "endpoint": "https://s3.example.com:1234",
  "stsEndpoint": "https://sts.example.com:1234",
  "stsUnavailable": true,
  "endpointInternal": "https://s3.internal.example.com:1234",
  "pathStyleAccess": true,
  "kmsUnavailable": true,
  "credentialVendingMechanism": "STS"
}
```

aws storage configuration info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|string|true|none|The cloud provider type this storage is built on. FILE is supported for testing purposes only|
|allowedLocations|[string]|false|none|none|
|storageName|string|false|none|An optional name referencing a server-side storage configuration|
|roleArn|string|false|none|the aws role arn that grants privileges on the S3 buckets|
|externalId|string|false|none|an optional external id used to establish a trust relationship with AWS in the trust policy|
|userArn|string|false|none|the aws user arn used to assume the aws role|
|currentKmsKey|string|false|none|**Deprecated.** Deprecated. Use encryptionKeys instead. The AWS KMS key ARN used to encrypt and decrypt S3 data.|
|allowedKmsKeys|[string]|false|none|**Deprecated.** Deprecated. Use encryptionKeys instead. The list of KMS keys that this catalog and its clients may use to encrypt and decrypt S3 data.|
|encryptionKeys|[string]|false|none|A list of KMS keys that can be used to encrypt S3 data. These keys are also granted decryption permissions.|
|decryptionKeys|[string]|false|none|A list of KMS keys that can be used to decrypt S3 data. Keeping this list separate from encryptionKeys is recommended, though overlapping keys are allowed.|
|region|string|false|none|the aws region where data is stored|
|endpoint|string|false|none|endpoint for S3 requests (optional). Clients always see this value (if it is set). Polaris Servers may be configured to use a different endpoint URI via the `endpointInternal` property.|
|stsEndpoint|string|false|none|endpoint for STS requests made by the Polaris Server (optional). If not set, defaults to 'endpointInternal' (which in turn defaults to `endpoint`).|
|stsUnavailable|boolean|false|none|if set to `true`, instructs Polaris Servers to avoid using the STS endpoints when obtaining credentials for accessing data and metadata files within the related catalog. Setting this property to `true` effectively disables vending storage credentials to clients. This setting is intended for configuring catalogs with S3-compatible storage implementations that do not support STS.|
|endpointInternal|string|false|none|endpoint for S3 requests made by the Polaris Server (optional). If set, Polaris Service will use this value instead of `endpoint`. If not set, defaults to `endpoint`. Iceberg REST API clients never see this value.|
|pathStyleAccess|boolean|false|none|Whether S3 requests to files in this catalog should use 'path-style addressing for buckets'.|
|kmsUnavailable|boolean|false|none|if set to `true`, instructs Polaris Servers to avoid adding KMS key policies.|
|credentialVendingMechanism|string|false|none|How Polaris vends subscoped storage credentials for this catalog. Leave the field empty<br>to use the server's default mechanism, which is STS in Apache Polaris.<br><br>Apache Polaris supports these values:<br>- `STS`: STS AssumeRole against the configured role.<br>- `R2_LOCAL_SIGNING`: temporary Cloudflare R2 credentials that the server signs<br>  locally, scoped to the table's location.<br><br>Later releases may add values. The server returns HTTP 400 for a value it does not<br>support.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|S3|
|storageType|GCS|
|storageType|AZURE|
|storageType|FILE|

<h2 id="tocS_AzureStorageConfigInfo">AzureStorageConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemaazurestorageconfiginfo"></a>
<a id="schema_AzureStorageConfigInfo"></a>
<a id="tocSazurestorageconfiginfo"></a>
<a id="tocsazurestorageconfiginfo"></a>

```json
{
  "storageType": "S3",
  "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
  "storageName": "string",
  "tenantId": "string",
  "multiTenantAppName": "string",
  "consentUrl": "string",
  "hierarchical": true
}
```

azure storage configuration info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|string|true|none|The cloud provider type this storage is built on. FILE is supported for testing purposes only|
|allowedLocations|[string]|false|none|none|
|storageName|string|false|none|An optional name referencing a server-side storage configuration|
|tenantId|string|true|none|the tenant id that the storage accounts belong to|
|multiTenantAppName|string|false|none|the name of the azure client application|
|consentUrl|string|false|none|URL to the Azure permissions request page|
|hierarchical|boolean|false|none|If set to `true`, instructs Polaris Servers to scope SAS tokens down to the most specific path in the storage container (in most cases the table's base location). This flag should be set only if hierarchical namespace is enabled in the Azure storage account. Using this feature with  non-hierarchical storage will lead to storage authorization errors in runtime in most cases.|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|S3|
|storageType|GCS|
|storageType|AZURE|
|storageType|FILE|

<h2 id="tocS_GcpStorageConfigInfo">GcpStorageConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemagcpstorageconfiginfo"></a>
<a id="schema_GcpStorageConfigInfo"></a>
<a id="tocSgcpstorageconfiginfo"></a>
<a id="tocsgcpstorageconfiginfo"></a>

```json
{
  "storageType": "S3",
  "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
  "storageName": "string",
  "gcsServiceAccount": "string"
}
```

gcp storage configuration info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|string|true|none|The cloud provider type this storage is built on. FILE is supported for testing purposes only|
|allowedLocations|[string]|false|none|none|
|storageName|string|false|none|An optional name referencing a server-side storage configuration|
|gcsServiceAccount|string|false|none|a Google cloud storage service account|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|S3|
|storageType|GCS|
|storageType|AZURE|
|storageType|FILE|

<h2 id="tocS_FileStorageConfigInfo">FileStorageConfigInfo</h2>
<!-- backwards compatibility -->
<a id="schemafilestorageconfiginfo"></a>
<a id="schema_FileStorageConfigInfo"></a>
<a id="tocSfilestorageconfiginfo"></a>
<a id="tocsfilestorageconfiginfo"></a>

```json
{
  "storageType": "S3",
  "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
  "storageName": "string"
}
```

file storage configuration info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|string|true|none|The cloud provider type this storage is built on. FILE is supported for testing purposes only|
|allowedLocations|[string]|false|none|none|
|storageName|string|false|none|An optional name referencing a server-side storage configuration|

#### Enumerated Values

|Property|Value|
|---|---|
|storageType|S3|
|storageType|GCS|
|storageType|AZURE|
|storageType|FILE|

<h2 id="tocS_ServiceIdentityInfo">ServiceIdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceidentityinfo"></a>
<a id="schema_ServiceIdentityInfo"></a>
<a id="tocSserviceidentityinfo"></a>
<a id="tocsserviceidentityinfo"></a>

```json
{
  "identityType": "AWS_IAM"
}
```

Identity metadata for the Polaris service used to access external resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityType|string|true|none|The type of identity used to access external resources|

#### Enumerated Values

|Property|Value|
|---|---|
|identityType|AWS_IAM|

<h2 id="tocS_AwsIamServiceIdentityInfo">AwsIamServiceIdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaawsiamserviceidentityinfo"></a>
<a id="schema_AwsIamServiceIdentityInfo"></a>
<a id="tocSawsiamserviceidentityinfo"></a>
<a id="tocsawsiamserviceidentityinfo"></a>

```json
{
  "identityType": "AWS_IAM",
  "iamArn": "arn:aws:iam::111122223333:user/polaris-service-user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityType|string|true|none|The type of identity used to access external resources|
|iamArn|string|true|none|The ARN of the IAM user or IAM role Polaris uses to assume roles and then access external resources.|

#### Enumerated Values

|Property|Value|
|---|---|
|identityType|AWS_IAM|

<h2 id="tocS_UpdateCatalogRequest">UpdateCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecatalogrequest"></a>
<a id="schema_UpdateCatalogRequest"></a>
<a id="tocSupdatecatalogrequest"></a>
<a id="tocsupdatecatalogrequest"></a>

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storageConfigInfo": {
    "storageType": "S3",
    "allowedLocations": "For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]",
    "storageName": "string"
  }
}
```

Updates to apply to a Catalog. Any fields which are required in the Catalog will remain unaltered if omitted from the contents of this Update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEntityVersion|integer|false|none|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|properties|object|false|none|none|
|storageConfigInfo|[StorageConfigInfo](#schemastorageconfiginfo)|false|none|A storage configuration used by catalogs|

<h2 id="tocS_Principals">Principals</h2>
<!-- backwards compatibility -->
<a id="schemaprincipals"></a>
<a id="schema_Principals"></a>
<a id="tocSprincipals"></a>
<a id="tocsprincipals"></a>

```json
{
  "principals": [
    {
      "name": "string",
      "clientId": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

A list of Principals

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principals|[[Principal](#schemaprincipal)]|true|none|none|

<h2 id="tocS_PrincipalWithCredentials">PrincipalWithCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalwithcredentials"></a>
<a id="schema_PrincipalWithCredentials"></a>
<a id="tocSprincipalwithcredentials"></a>
<a id="tocsprincipalwithcredentials"></a>

```json
{
  "principal": {
    "name": "string",
    "clientId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  },
  "credentials": {
    "clientId": "string",
    "clientSecret": "password"
  }
}
```

A user with its client id and secret. This type is returned when a new principal is created or when its credentials are rotated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principal|[Principal](#schemaprincipal)|true|none|A Polaris principal.|
|credentials|object|true|none|none|

<h2 id="tocS_CreatePrincipalRequest">CreatePrincipalRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprincipalrequest"></a>
<a id="schema_CreatePrincipalRequest"></a>
<a id="tocScreateprincipalrequest"></a>
<a id="tocscreateprincipalrequest"></a>

```json
{
  "principal": {
    "name": "string",
    "clientId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  },
  "credentialRotationRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principal|[Principal](#schemaprincipal)|false|none|A Polaris principal.|
|credentialRotationRequired|boolean|false|none|If true, the initial credentials can only be used to call rotateCredentials|

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "name": "string",
  "clientId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

A Polaris principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|clientId|string|false|none|The output-only OAuth clientId associated with this principal if applicable|
|properties|object|false|none|none|
|createTimestamp|integer(int64)|false|none|none|
|lastUpdateTimestamp|integer(int64)|false|none|none|
|entityVersion|integer|false|none|The version of the principal object used to determine if the principal metadata has changed|

<h2 id="tocS_UpdatePrincipalRequest">UpdatePrincipalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprincipalrequest"></a>
<a id="schema_UpdatePrincipalRequest"></a>
<a id="tocSupdateprincipalrequest"></a>
<a id="tocsupdateprincipalrequest"></a>

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Updates to apply to a Principal

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEntityVersion|integer|true|none|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|properties|object|true|none|none|

<h2 id="tocS_ResetPrincipalRequest">ResetPrincipalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetprincipalrequest"></a>
<a id="schema_ResetPrincipalRequest"></a>
<a id="tocSresetprincipalrequest"></a>
<a id="tocsresetprincipalrequest"></a>

```json
{
  "clientId": "string",
  "clientSecret": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|Optional client ID to set for the principal. Must be a valid client ID previously generated by this service.<br>|
|clientSecret|string(password)|false|none|Optional client secret to set for the principal. Polaris service implementations may impose extra requirements on what is accepted as a secret (special chars, length, etc.)<br>|

<h2 id="tocS_PrincipalRoles">PrincipalRoles</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalroles"></a>
<a id="schema_PrincipalRoles"></a>
<a id="tocSprincipalroles"></a>
<a id="tocsprincipalroles"></a>

```json
{
  "roles": [
    {
      "name": "string",
      "federated": false,
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[PrincipalRole](#schemaprincipalrole)]|true|none|none|

<h2 id="tocS_GrantPrincipalRoleRequest">GrantPrincipalRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantprincipalrolerequest"></a>
<a id="schema_GrantPrincipalRoleRequest"></a>
<a id="tocSgrantprincipalrolerequest"></a>
<a id="tocsgrantprincipalrolerequest"></a>

```json
{
  "principalRole": {
    "name": "string",
    "federated": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalRole|[PrincipalRole](#schemaprincipalrole)|false|none|none|

<h2 id="tocS_CreatePrincipalRoleRequest">CreatePrincipalRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprincipalrolerequest"></a>
<a id="schema_CreatePrincipalRoleRequest"></a>
<a id="tocScreateprincipalrolerequest"></a>
<a id="tocscreateprincipalrolerequest"></a>

```json
{
  "principalRole": {
    "name": "string",
    "federated": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalRole|[PrincipalRole](#schemaprincipalrole)|false|none|none|

<h2 id="tocS_PrincipalRole">PrincipalRole</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalrole"></a>
<a id="schema_PrincipalRole"></a>
<a id="tocSprincipalrole"></a>
<a id="tocsprincipalrole"></a>

```json
{
  "name": "string",
  "federated": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role|
|federated|boolean|false|none|Whether the principal role is a federated role (that is, managed by an external identity provider)|
|properties|object|false|none|none|
|createTimestamp|integer(int64)|false|none|none|
|lastUpdateTimestamp|integer(int64)|false|none|none|
|entityVersion|integer|false|none|The version of the principal role object used to determine if the principal role metadata has changed|

<h2 id="tocS_UpdatePrincipalRoleRequest">UpdatePrincipalRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprincipalrolerequest"></a>
<a id="schema_UpdatePrincipalRoleRequest"></a>
<a id="tocSupdateprincipalrolerequest"></a>
<a id="tocsupdateprincipalrolerequest"></a>

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Updates to apply to a Principal Role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEntityVersion|integer|true|none|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|properties|object|true|none|none|

<h2 id="tocS_CatalogRoles">CatalogRoles</h2>
<!-- backwards compatibility -->
<a id="schemacatalogroles"></a>
<a id="schema_CatalogRoles"></a>
<a id="tocScatalogroles"></a>
<a id="tocscatalogroles"></a>

```json
{
  "roles": [
    {
      "name": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "createTimestamp": 0,
      "lastUpdateTimestamp": 0,
      "entityVersion": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[CatalogRole](#schemacatalogrole)]|true|none|The list of catalog roles|

<h2 id="tocS_GrantCatalogRoleRequest">GrantCatalogRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantcatalogrolerequest"></a>
<a id="schema_GrantCatalogRoleRequest"></a>
<a id="tocSgrantcatalogrolerequest"></a>
<a id="tocsgrantcatalogrolerequest"></a>

```json
{
  "catalogRole": {
    "name": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogRole|[CatalogRole](#schemacatalogrole)|false|none|none|

<h2 id="tocS_CreateCatalogRoleRequest">CreateCatalogRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalogrolerequest"></a>
<a id="schema_CreateCatalogRoleRequest"></a>
<a id="tocScreatecatalogrolerequest"></a>
<a id="tocscreatecatalogrolerequest"></a>

```json
{
  "catalogRole": {
    "name": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "createTimestamp": 0,
    "lastUpdateTimestamp": 0,
    "entityVersion": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogRole|[CatalogRole](#schemacatalogrole)|false|none|none|

<h2 id="tocS_CatalogRole">CatalogRole</h2>
<!-- backwards compatibility -->
<a id="schemacatalogrole"></a>
<a id="schema_CatalogRole"></a>
<a id="tocScatalogrole"></a>
<a id="tocscatalogrole"></a>

```json
{
  "name": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "createTimestamp": 0,
  "lastUpdateTimestamp": 0,
  "entityVersion": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role|
|properties|object|false|none|none|
|createTimestamp|integer(int64)|false|none|none|
|lastUpdateTimestamp|integer(int64)|false|none|none|
|entityVersion|integer|false|none|The version of the catalog role object used to determine if the catalog role metadata has changed|

<h2 id="tocS_UpdateCatalogRoleRequest">UpdateCatalogRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecatalogrolerequest"></a>
<a id="schema_UpdateCatalogRoleRequest"></a>
<a id="tocSupdatecatalogrolerequest"></a>
<a id="tocsupdatecatalogrolerequest"></a>

```json
{
  "currentEntityVersion": 0,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Updates to apply to a Catalog Role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentEntityVersion|integer|true|none|The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.|
|properties|object|true|none|none|

<h2 id="tocS_ViewPrivilege">ViewPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemaviewprivilege"></a>
<a id="schema_ViewPrivilege"></a>
<a id="tocSviewprivilege"></a>
<a id="tocsviewprivilege"></a>

```json
"CATALOG_MANAGE_ACCESS"
```

<h2 id="tocS_TablePrivilege">TablePrivilege</h2>
<!-- backwards compatibility -->
<a id="schematableprivilege"></a>
<a id="schema_TablePrivilege"></a>
<a id="tocStableprivilege"></a>
<a id="tocstableprivilege"></a>

```json
"CATALOG_MANAGE_ACCESS"
```

<h2 id="tocS_SemanticModelPrivilege">SemanticModelPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemasemanticmodelprivilege"></a>
<a id="schema_SemanticModelPrivilege"></a>
<a id="tocSsemanticmodelprivilege"></a>
<a id="tocssemanticmodelprivilege"></a>

```json
"CATALOG_MANAGE_ACCESS"
```

<h2 id="tocS_PolicyPrivilege">PolicyPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemapolicyprivilege"></a>
<a id="schema_PolicyPrivilege"></a>
<a id="tocSpolicyprivilege"></a>
<a id="tocspolicyprivilege"></a>

```json
"CATALOG_MANAGE_ACCESS"
```

<h2 id="tocS_NamespacePrivilege">NamespacePrivilege</h2>
<!-- backwards compatibility -->
<a id="schemanamespaceprivilege"></a>
<a id="schema_NamespacePrivilege"></a>
<a id="tocSnamespaceprivilege"></a>
<a id="tocsnamespaceprivilege"></a>

```json
"SEMANTIC_MODEL_LIST"
```

<h2 id="tocS_CatalogPrivilege">CatalogPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemacatalogprivilege"></a>
<a id="schema_CatalogPrivilege"></a>
<a id="tocScatalogprivilege"></a>
<a id="tocscatalogprivilege"></a>

```json
"SEMANTIC_MODEL_LIST"
```

<h2 id="tocS_AddGrantRequest">AddGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddgrantrequest"></a>
<a id="schema_AddGrantRequest"></a>
<a id="tocSaddgrantrequest"></a>
<a id="tocsaddgrantrequest"></a>

```json
{
  "grant": {
    "type": "catalog"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant|[GrantResource](#schemagrantresource)|false|none|none|

<h2 id="tocS_RevokeGrantRequest">RevokeGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokegrantrequest"></a>
<a id="schema_RevokeGrantRequest"></a>
<a id="tocSrevokegrantrequest"></a>
<a id="tocsrevokegrantrequest"></a>

```json
{
  "grant": {
    "type": "catalog"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant|[GrantResource](#schemagrantresource)|false|none|none|

<h2 id="tocS_ViewGrant">ViewGrant</h2>
<!-- backwards compatibility -->
<a id="schemaviewgrant"></a>
<a id="schema_ViewGrant"></a>
<a id="tocSviewgrant"></a>
<a id="tocsviewgrant"></a>

```json
{
  "type": "catalog",
  "namespace": [
    "string"
  ],
  "viewName": "string",
  "privilege": "CATALOG_MANAGE_ACCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|namespace|[string]|true|none|none|
|viewName|string|true|none|none|
|privilege|[ViewPrivilege](#schemaviewprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|VIEW_DROP|
|privilege|VIEW_LIST|
|privilege|VIEW_READ_PROPERTIES|
|privilege|VIEW_WRITE_PROPERTIES|
|privilege|VIEW_FULL_METADATA|
|privilege|VIEW_READ_LINEAGE|
|privilege|VIEW_INGEST_LINEAGE|

<h2 id="tocS_TableGrant">TableGrant</h2>
<!-- backwards compatibility -->
<a id="schematablegrant"></a>
<a id="schema_TableGrant"></a>
<a id="tocStablegrant"></a>
<a id="tocstablegrant"></a>

```json
{
  "type": "catalog",
  "namespace": [
    "string"
  ],
  "tableName": "string",
  "privilege": "CATALOG_MANAGE_ACCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|namespace|[string]|true|none|none|
|tableName|string|true|none|none|
|privilege|[TablePrivilege](#schematableprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|TABLE_DROP|
|privilege|TABLE_LIST|
|privilege|TABLE_READ_PROPERTIES|
|privilege|TABLE_WRITE_PROPERTIES|
|privilege|TABLE_READ_DATA|
|privilege|TABLE_WRITE_DATA|
|privilege|TABLE_READ_METRICS|
|privilege|TABLE_FULL_METADATA|
|privilege|TABLE_ATTACH_POLICY|
|privilege|TABLE_DETACH_POLICY|
|privilege|TABLE_ASSIGN_UUID|
|privilege|TABLE_UPGRADE_FORMAT_VERSION|
|privilege|TABLE_ADD_SCHEMA|
|privilege|TABLE_SET_CURRENT_SCHEMA|
|privilege|TABLE_ADD_PARTITION_SPEC|
|privilege|TABLE_ADD_SORT_ORDER|
|privilege|TABLE_SET_DEFAULT_SORT_ORDER|
|privilege|TABLE_ADD_SNAPSHOT|
|privilege|TABLE_SET_SNAPSHOT_REF|
|privilege|TABLE_REMOVE_SNAPSHOTS|
|privilege|TABLE_REMOVE_SNAPSHOT_REF|
|privilege|TABLE_SET_LOCATION|
|privilege|TABLE_SET_PROPERTIES|
|privilege|TABLE_REMOVE_PROPERTIES|
|privilege|TABLE_SET_STATISTICS|
|privilege|TABLE_REMOVE_STATISTICS|
|privilege|TABLE_REMOVE_PARTITION_SPECS|
|privilege|TABLE_MANAGE_STRUCTURE|
|privilege|TABLE_READ_LINEAGE|
|privilege|TABLE_INGEST_LINEAGE|

<h2 id="tocS_SemanticModelGrant">SemanticModelGrant</h2>
<!-- backwards compatibility -->
<a id="schemasemanticmodelgrant"></a>
<a id="schema_SemanticModelGrant"></a>
<a id="tocSsemanticmodelgrant"></a>
<a id="tocssemanticmodelgrant"></a>

```json
{
  "type": "catalog",
  "namespace": [
    "string"
  ],
  "semanticModelName": "string",
  "privilege": "CATALOG_MANAGE_ACCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|namespace|[string]|true|none|none|
|semanticModelName|string|true|none|none|
|privilege|[SemanticModelPrivilege](#schemasemanticmodelprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|SEMANTIC_MODEL_READ|
|privilege|SEMANTIC_MODEL_WRITE|
|privilege|SEMANTIC_MODEL_DROP|
|privilege|SEMANTIC_MODEL_FULL_METADATA|
|privilege|SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE|

<h2 id="tocS_PolicyGrant">PolicyGrant</h2>
<!-- backwards compatibility -->
<a id="schemapolicygrant"></a>
<a id="schema_PolicyGrant"></a>
<a id="tocSpolicygrant"></a>
<a id="tocspolicygrant"></a>

```json
{
  "type": "catalog",
  "namespace": [
    "string"
  ],
  "policyName": "string",
  "privilege": "CATALOG_MANAGE_ACCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|namespace|[string]|true|none|none|
|policyName|string|true|none|none|
|privilege|[PolicyPrivilege](#schemapolicyprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|POLICY_READ|
|privilege|POLICY_DROP|
|privilege|POLICY_WRITE|
|privilege|POLICY_LIST|
|privilege|POLICY_FULL_METADATA|
|privilege|POLICY_ATTACH|
|privilege|POLICY_DETACH|

<h2 id="tocS_NamespaceGrant">NamespaceGrant</h2>
<!-- backwards compatibility -->
<a id="schemanamespacegrant"></a>
<a id="schema_NamespaceGrant"></a>
<a id="tocSnamespacegrant"></a>
<a id="tocsnamespacegrant"></a>

```json
{
  "type": "catalog",
  "namespace": [
    "string"
  ],
  "privilege": "SEMANTIC_MODEL_LIST"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|namespace|[string]|true|none|none|
|privilege|[NamespacePrivilege](#schemanamespaceprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|SEMANTIC_MODEL_LIST|
|privilege|SEMANTIC_MODEL_CREATE|
|privilege|SEMANTIC_MODEL_READ|
|privilege|SEMANTIC_MODEL_WRITE|
|privilege|SEMANTIC_MODEL_DROP|
|privilege|SEMANTIC_MODEL_FULL_METADATA|
|privilege|SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|CATALOG_MANAGE_CONTENT|
|privilege|CATALOG_MANAGE_METADATA|
|privilege|NAMESPACE_CREATE|
|privilege|TABLE_CREATE|
|privilege|VIEW_CREATE|
|privilege|NAMESPACE_DROP|
|privilege|TABLE_DROP|
|privilege|VIEW_DROP|
|privilege|NAMESPACE_LIST|
|privilege|TABLE_LIST|
|privilege|VIEW_LIST|
|privilege|NAMESPACE_READ_PROPERTIES|
|privilege|TABLE_READ_PROPERTIES|
|privilege|VIEW_READ_PROPERTIES|
|privilege|NAMESPACE_WRITE_PROPERTIES|
|privilege|TABLE_WRITE_PROPERTIES|
|privilege|VIEW_WRITE_PROPERTIES|
|privilege|TABLE_READ_DATA|
|privilege|TABLE_WRITE_DATA|
|privilege|TABLE_READ_METRICS|
|privilege|NAMESPACE_FULL_METADATA|
|privilege|TABLE_FULL_METADATA|
|privilege|VIEW_FULL_METADATA|
|privilege|POLICY_CREATE|
|privilege|POLICY_WRITE|
|privilege|POLICY_READ|
|privilege|POLICY_DROP|
|privilege|POLICY_LIST|
|privilege|POLICY_FULL_METADATA|
|privilege|NAMESPACE_ATTACH_POLICY|
|privilege|NAMESPACE_DETACH_POLICY|
|privilege|TABLE_ASSIGN_UUID|
|privilege|TABLE_UPGRADE_FORMAT_VERSION|
|privilege|TABLE_ADD_SCHEMA|
|privilege|TABLE_SET_CURRENT_SCHEMA|
|privilege|TABLE_ADD_PARTITION_SPEC|
|privilege|TABLE_ADD_SORT_ORDER|
|privilege|TABLE_SET_DEFAULT_SORT_ORDER|
|privilege|TABLE_ADD_SNAPSHOT|
|privilege|TABLE_SET_SNAPSHOT_REF|
|privilege|TABLE_REMOVE_SNAPSHOTS|
|privilege|TABLE_REMOVE_SNAPSHOT_REF|
|privilege|TABLE_SET_LOCATION|
|privilege|TABLE_SET_PROPERTIES|
|privilege|TABLE_REMOVE_PROPERTIES|
|privilege|TABLE_SET_STATISTICS|
|privilege|TABLE_REMOVE_STATISTICS|
|privilege|TABLE_REMOVE_PARTITION_SPECS|
|privilege|TABLE_MANAGE_STRUCTURE|
|privilege|TABLE_READ_LINEAGE|
|privilege|TABLE_INGEST_LINEAGE|
|privilege|VIEW_READ_LINEAGE|
|privilege|VIEW_INGEST_LINEAGE|

<h2 id="tocS_CatalogGrant">CatalogGrant</h2>
<!-- backwards compatibility -->
<a id="schemacataloggrant"></a>
<a id="schema_CatalogGrant"></a>
<a id="tocScataloggrant"></a>
<a id="tocscataloggrant"></a>

```json
{
  "type": "catalog",
  "privilege": "SEMANTIC_MODEL_LIST"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|privilege|[CatalogPrivilege](#schemacatalogprivilege)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|
|privilege|SEMANTIC_MODEL_LIST|
|privilege|SEMANTIC_MODEL_CREATE|
|privilege|SEMANTIC_MODEL_READ|
|privilege|SEMANTIC_MODEL_WRITE|
|privilege|SEMANTIC_MODEL_DROP|
|privilege|SEMANTIC_MODEL_FULL_METADATA|
|privilege|SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE|
|privilege|CATALOG_MANAGE_ACCESS|
|privilege|CATALOG_MANAGE_CONTENT|
|privilege|CATALOG_MANAGE_METADATA|
|privilege|CATALOG_READ_PROPERTIES|
|privilege|CATALOG_READ_CONFIG|
|privilege|CATALOG_WRITE_PROPERTIES|
|privilege|NAMESPACE_CREATE|
|privilege|TABLE_CREATE|
|privilege|VIEW_CREATE|
|privilege|NAMESPACE_DROP|
|privilege|TABLE_DROP|
|privilege|VIEW_DROP|
|privilege|NAMESPACE_LIST|
|privilege|TABLE_LIST|
|privilege|VIEW_LIST|
|privilege|NAMESPACE_READ_PROPERTIES|
|privilege|TABLE_READ_PROPERTIES|
|privilege|VIEW_READ_PROPERTIES|
|privilege|NAMESPACE_WRITE_PROPERTIES|
|privilege|TABLE_WRITE_PROPERTIES|
|privilege|VIEW_WRITE_PROPERTIES|
|privilege|TABLE_READ_DATA|
|privilege|TABLE_WRITE_DATA|
|privilege|TABLE_READ_METRICS|
|privilege|NAMESPACE_FULL_METADATA|
|privilege|TABLE_FULL_METADATA|
|privilege|VIEW_FULL_METADATA|
|privilege|POLICY_CREATE|
|privilege|POLICY_WRITE|
|privilege|POLICY_READ|
|privilege|POLICY_DROP|
|privilege|POLICY_LIST|
|privilege|POLICY_FULL_METADATA|
|privilege|CATALOG_ATTACH_POLICY|
|privilege|CATALOG_DETACH_POLICY|
|privilege|TABLE_ASSIGN_UUID|
|privilege|TABLE_UPGRADE_FORMAT_VERSION|
|privilege|TABLE_ADD_SCHEMA|
|privilege|TABLE_SET_CURRENT_SCHEMA|
|privilege|TABLE_ADD_PARTITION_SPEC|
|privilege|TABLE_ADD_SORT_ORDER|
|privilege|TABLE_SET_DEFAULT_SORT_ORDER|
|privilege|TABLE_ADD_SNAPSHOT|
|privilege|TABLE_SET_SNAPSHOT_REF|
|privilege|TABLE_REMOVE_SNAPSHOTS|
|privilege|TABLE_REMOVE_SNAPSHOT_REF|
|privilege|TABLE_SET_LOCATION|
|privilege|TABLE_SET_PROPERTIES|
|privilege|TABLE_REMOVE_PROPERTIES|
|privilege|TABLE_SET_STATISTICS|
|privilege|TABLE_REMOVE_STATISTICS|
|privilege|TABLE_REMOVE_PARTITION_SPECS|
|privilege|TABLE_MANAGE_STRUCTURE|
|privilege|TABLE_READ_LINEAGE|
|privilege|TABLE_INGEST_LINEAGE|
|privilege|VIEW_READ_LINEAGE|
|privilege|VIEW_INGEST_LINEAGE|

<h2 id="tocS_GrantResource">GrantResource</h2>
<!-- backwards compatibility -->
<a id="schemagrantresource"></a>
<a id="schema_GrantResource"></a>
<a id="tocSgrantresource"></a>
<a id="tocsgrantresource"></a>

```json
{
  "type": "catalog"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|catalog|
|type|namespace|
|type|table|
|type|view|
|type|policy|
|type|semantic-model|

<h2 id="tocS_GrantResources">GrantResources</h2>
<!-- backwards compatibility -->
<a id="schemagrantresources"></a>
<a id="schema_GrantResources"></a>
<a id="tocSgrantresources"></a>
<a id="tocsgrantresources"></a>

```json
{
  "grants": [
    {
      "type": "catalog"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grants|[[GrantResource](#schemagrantresource)]|true|none|none|
