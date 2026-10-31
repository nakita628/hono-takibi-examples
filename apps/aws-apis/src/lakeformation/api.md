<h1 id="aws-lake-formation">AWS Lake Formation v2017-03-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Lake Formation</fullname> <p>Defines the public endpoint for the Lake Formation service.</p>

Base URLs:

* <a href="http://lakeformation.us-east-1.amazonaws.com">http://lakeformation.us-east-1.amazonaws.com</a> - The AWS Lake Formation multi-region endpoint

* <a href="https://lakeformation.us-east-1.amazonaws.com">https://lakeformation.us-east-1.amazonaws.com</a> - The AWS Lake Formation multi-region endpoint

* <a href="http://lakeformation.cn-north-1.amazonaws.com.cn">http://lakeformation.cn-north-1.amazonaws.com.cn</a> - The AWS Lake Formation endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lakeformation.cn-north-1.amazonaws.com.cn">https://lakeformation.cn-north-1.amazonaws.com.cn</a> - The AWS Lake Formation endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lakeformation/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-lake-formation-default">Default</h1>

## AddLFTagsToResource

<a id="opIdAddLFTagsToResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/AddLFTagsToResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "LFTags": [
      {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      }
    ]
  }'
```

`POST /AddLFTagsToResource`

Attaches one or more LF-tags to an existing resource.

> Body parameter

```json
{
  "CatalogId": "string",
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "LFTags": [
    {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    }
  ]
}
```

<h3 id="addlftagstoresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Resource|body|object|true|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» LFTags|body|[[LFTagPair](#schemalftagpair)]|true|The LF-tags to attach to the resource.|

> Example responses

> 200 Response

```json
{
  "Failures": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="addlftagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddLFTagsToResourceResponse](#schemaaddlftagstoresourceresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssumeDecoratedRoleWithSAML

<a id="opIdAssumeDecoratedRoleWithSAML"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/AssumeDecoratedRoleWithSAML \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SAMLAssertion": "string",
    "RoleArn": "string",
    "PrincipalArn": "string",
    "DurationSeconds": 900
  }'
```

`POST /AssumeDecoratedRoleWithSAML`

<p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>

> Body parameter

```json
{
  "SAMLAssertion": "string",
  "RoleArn": "string",
  "PrincipalArn": "string",
  "DurationSeconds": 900
}
```

<h3 id="assumedecoratedrolewithsaml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SAMLAssertion|body|string|true|A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.|
|» RoleArn|body|string|true|The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role. |
|» PrincipalArn|body|string|true|The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.|
|» DurationSeconds|body|integer|false|The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.|

> Example responses

> 200 Response

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="assumedecoratedrolewithsaml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeDecoratedRoleWithSAMLResponse](#schemaassumedecoratedrolewithsamlresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGrantPermissions

<a id="opIdBatchGrantPermissions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/BatchGrantPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Entries": [
      {
        "Id": {},
        "Principal": {
          "DataLakePrincipalIdentifier": {}
        },
        "Resource": {
          "Catalog": {},
          "Database": {
            "CatalogId": {},
            "Name": {}
          },
          "Table": {
            "CatalogId": {},
            "DatabaseName": {},
            "Name": {},
            "TableWildcard": {}
          },
          "TableWithColumns": {
            "CatalogId": {},
            "DatabaseName": {},
            "Name": {},
            "ColumnNames": {},
            "ColumnWildcard": {
              "ExcludedColumnNames": {}
            }
          },
          "DataLocation": {
            "CatalogId": {},
            "ResourceArn": {}
          },
          "DataCellsFilter": {
            "TableCatalogId": {},
            "DatabaseName": {},
            "TableName": {},
            "Name": {}
          },
          "LFTag": {
            "CatalogId": {},
            "TagKey": {},
            "TagValues": {}
          },
          "LFTagPolicy": {
            "CatalogId": {},
            "ResourceType": {},
            "Expression": {}
          }
        },
        "Permissions": {},
        "PermissionsWithGrantOption": {}
      }
    ]
  }'
```

`POST /BatchGrantPermissions`

Batch operation to grant permissions to the principal.

> Body parameter

```json
{
  "CatalogId": "string",
  "Entries": [
    {
      "Id": {},
      "Principal": {
        "DataLakePrincipalIdentifier": {}
      },
      "Resource": {
        "Catalog": {},
        "Database": {
          "CatalogId": {},
          "Name": {}
        },
        "Table": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "TableWildcard": {}
        },
        "TableWithColumns": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "ColumnNames": {},
          "ColumnWildcard": {
            "ExcludedColumnNames": {}
          }
        },
        "DataLocation": {
          "CatalogId": {},
          "ResourceArn": {}
        },
        "DataCellsFilter": {
          "TableCatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Name": {}
        },
        "LFTag": {
          "CatalogId": {},
          "TagKey": {},
          "TagValues": {}
        },
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "Expression": {}
        }
      },
      "Permissions": {},
      "PermissionsWithGrantOption": {}
    }
  ]
}
```

<h3 id="batchgrantpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Entries|body|[[BatchPermissionsRequestEntry](#schemabatchpermissionsrequestentry)]|true|A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.|

> Example responses

> 200 Response

```json
{
  "Failures": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="batchgrantpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGrantPermissionsResponse](#schemabatchgrantpermissionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchRevokePermissions

<a id="opIdBatchRevokePermissions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/BatchRevokePermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Entries": [
      {
        "Id": {},
        "Principal": {
          "DataLakePrincipalIdentifier": {}
        },
        "Resource": {
          "Catalog": {},
          "Database": {
            "CatalogId": {},
            "Name": {}
          },
          "Table": {
            "CatalogId": {},
            "DatabaseName": {},
            "Name": {},
            "TableWildcard": {}
          },
          "TableWithColumns": {
            "CatalogId": {},
            "DatabaseName": {},
            "Name": {},
            "ColumnNames": {},
            "ColumnWildcard": {
              "ExcludedColumnNames": {}
            }
          },
          "DataLocation": {
            "CatalogId": {},
            "ResourceArn": {}
          },
          "DataCellsFilter": {
            "TableCatalogId": {},
            "DatabaseName": {},
            "TableName": {},
            "Name": {}
          },
          "LFTag": {
            "CatalogId": {},
            "TagKey": {},
            "TagValues": {}
          },
          "LFTagPolicy": {
            "CatalogId": {},
            "ResourceType": {},
            "Expression": {}
          }
        },
        "Permissions": {},
        "PermissionsWithGrantOption": {}
      }
    ]
  }'
```

`POST /BatchRevokePermissions`

Batch operation to revoke permissions from the principal.

> Body parameter

```json
{
  "CatalogId": "string",
  "Entries": [
    {
      "Id": {},
      "Principal": {
        "DataLakePrincipalIdentifier": {}
      },
      "Resource": {
        "Catalog": {},
        "Database": {
          "CatalogId": {},
          "Name": {}
        },
        "Table": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "TableWildcard": {}
        },
        "TableWithColumns": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "ColumnNames": {},
          "ColumnWildcard": {
            "ExcludedColumnNames": {}
          }
        },
        "DataLocation": {
          "CatalogId": {},
          "ResourceArn": {}
        },
        "DataCellsFilter": {
          "TableCatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Name": {}
        },
        "LFTag": {
          "CatalogId": {},
          "TagKey": {},
          "TagValues": {}
        },
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "Expression": {}
        }
      },
      "Permissions": {},
      "PermissionsWithGrantOption": {}
    }
  ]
}
```

<h3 id="batchrevokepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Entries|body|[[BatchPermissionsRequestEntry](#schemabatchpermissionsrequestentry)]|true|A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.|

> Example responses

> 200 Response

```json
{
  "Failures": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="batchrevokepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchRevokePermissionsResponse](#schemabatchrevokepermissionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelTransaction

<a id="opIdCancelTransaction"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/CancelTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransactionId": "string"
  }'
```

`POST /CancelTransaction`

Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.

> Body parameter

```json
{
  "TransactionId": "string"
}
```

<h3 id="canceltransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransactionId|body|string|true|The transaction to cancel.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="canceltransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelTransactionResponse](#schemacanceltransactionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|TransactionCommittedException|[TransactionCommittedException](#schematransactioncommittedexception)|
|485|485|TransactionCommitInProgressException|[TransactionCommitInProgressException](#schematransactioncommitinprogressexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CommitTransaction

<a id="opIdCommitTransaction"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/CommitTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransactionId": "string"
  }'
```

`POST /CommitTransaction`

Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.

> Body parameter

```json
{
  "TransactionId": "string"
}
```

<h3 id="committransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransactionId|body|string|true|The transaction to commit.|

> Example responses

> 200 Response

```json
{
  "TransactionStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="committransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CommitTransactionResponse](#schemacommittransactionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataCellsFilter

<a id="opIdCreateDataCellsFilter"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/CreateDataCellsFilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableData": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {},
      "RowFilter": {
        "FilterExpression": {},
        "AllRowsWildcard": {}
      },
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      },
      "VersionId": {}
    }
  }'
```

`POST /CreateDataCellsFilter`

Creates a data cell filter to allow one to grant access to certain columns on certain rows.

> Body parameter

```json
{
  "TableData": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

<h3 id="createdatacellsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableData|body|object|true|A structure that describes certain columns on certain rows.|
|» » TableCatalogId|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » TableName|body|object|false|none|
|» » Name|body|object|false|none|
|» » RowFilter|body|object|false|none|
|» » » FilterExpression|body|object|false|none|
|» » » AllRowsWildcard|body|object|false|none|
|» » ColumnNames|body|object|false|none|
|» » ColumnWildcard|body|object|false|none|
|» » » ExcludedColumnNames|body|object|false|none|
|» » VersionId|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createdatacellsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataCellsFilterResponse](#schemacreatedatacellsfilterresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|ResourceNumberLimitExceededException|[ResourceNumberLimitExceededException](#schemaresourcenumberlimitexceededexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLFTag

<a id="opIdCreateLFTag"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/CreateLFTag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "TagKey": "string",
    "TagValues": [
      "string"
    ]
  }'
```

`POST /CreateLFTag`

Creates an LF-tag with the specified name and values.

> Body parameter

```json
{
  "CatalogId": "string",
  "TagKey": "string",
  "TagValues": [
    "string"
  ]
}
```

<h3 id="createlftag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» TagKey|body|string|true|The key-name for the LF-tag.|
|» TagValues|body|[[LFTagValue](#schemalftagvalue)]|true|A list of possible values an attribute can take.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createlftag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLFTagResponse](#schemacreatelftagresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNumberLimitExceededException|[ResourceNumberLimitExceededException](#schemaresourcenumberlimitexceededexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataCellsFilter

<a id="opIdDeleteDataCellsFilter"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DeleteDataCellsFilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableCatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "Name": "string"
  }'
```

`POST /DeleteDataCellsFilter`

Deletes a data cell filter.

> Body parameter

```json
{
  "TableCatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "Name": "string"
}
```

<h3 id="deletedatacellsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableCatalogId|body|string|false|The ID of the catalog to which the table belongs.|
|» DatabaseName|body|string|false|A database in the Glue Data Catalog.|
|» TableName|body|string|false|A table in the database.|
|» Name|body|string|false|The name given by the user to the data filter cell.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletedatacellsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataCellsFilterResponse](#schemadeletedatacellsfilterresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLFTag

<a id="opIdDeleteLFTag"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DeleteLFTag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "TagKey": "string"
  }'
```

`POST /DeleteLFTag`

Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.

> Body parameter

```json
{
  "CatalogId": "string",
  "TagKey": "string"
}
```

<h3 id="deletelftag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» TagKey|body|string|true|The key-name for the LF-tag to delete.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletelftag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLFTagResponse](#schemadeletelftagresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObjectsOnCancel

<a id="opIdDeleteObjectsOnCancel"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DeleteObjectsOnCancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "TransactionId": "string",
    "Objects": [
      {
        "Uri": {},
        "ETag": {}
      }
    ]
  }'
```

`POST /DeleteObjectsOnCancel`

<p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>

> Body parameter

```json
{
  "CatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "TransactionId": "string",
  "Objects": [
    {
      "Uri": {},
      "ETag": {}
    }
  ]
}
```

<h3 id="deleteobjectsoncancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The Glue data catalog that contains the governed table. Defaults to the current account ID.|
|» DatabaseName|body|string|true|The database that contains the governed table.|
|» TableName|body|string|true|The name of the governed table.|
|» TransactionId|body|string|true|ID of the transaction that the writes occur in.|
|» Objects|body|[[VirtualObject](#schemavirtualobject)]|true|A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deleteobjectsoncancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteObjectsOnCancelResponse](#schemadeleteobjectsoncancelresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|TransactionCommittedException|[TransactionCommittedException](#schematransactioncommittedexception)|
|485|485|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|486|486|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterResource

<a id="opIdDeregisterResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DeregisterResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string"
  }'
```

`POST /DeregisterResource`

<p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>

> Body parameter

```json
{
  "ResourceArn": "string"
}
```

<h3 id="deregisterresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource that you want to deregister.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deregisterresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterResourceResponse](#schemaderegisterresourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResource

<a id="opIdDescribeResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DescribeResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string"
  }'
```

`POST /DescribeResource`

Retrieves the current data access role for the given resource registered in Lake Formation.

> Body parameter

```json
{
  "ResourceArn": "string"
}
```

<h3 id="describeresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The resource ARN.|

> Example responses

> 200 Response

```json
{
  "ResourceInfo": {
    "ResourceArn": {},
    "RoleArn": {},
    "LastModified": {},
    "WithFederation": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describeresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourceResponse](#schemadescriberesourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTransaction

<a id="opIdDescribeTransaction"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/DescribeTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransactionId": "string"
  }'
```

`POST /DescribeTransaction`

Returns the details of a single transaction.

> Body parameter

```json
{
  "TransactionId": "string"
}
```

<h3 id="describetransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransactionId|body|string|true|The transaction for which to return status.|

> Example responses

> 200 Response

```json
{
  "TransactionDescription": {
    "TransactionId": {},
    "TransactionStatus": {},
    "TransactionStartTime": {},
    "TransactionEndTime": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describetransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTransactionResponse](#schemadescribetransactionresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExtendTransaction

<a id="opIdExtendTransaction"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ExtendTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransactionId": "string"
  }'
```

`POST /ExtendTransaction`

<p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>

> Body parameter

```json
{
  "TransactionId": "string"
}
```

<h3 id="extendtransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransactionId|body|string|false|The transaction to extend.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="extendtransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExtendTransactionResponse](#schemaextendtransactionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|TransactionCommittedException|[TransactionCommittedException](#schematransactioncommittedexception)|
|485|485|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|486|486|TransactionCommitInProgressException|[TransactionCommitInProgressException](#schematransactioncommitinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataCellsFilter

<a id="opIdGetDataCellsFilter"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetDataCellsFilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableCatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "Name": "string"
  }'
```

`POST /GetDataCellsFilter`

Returns a data cells filter.

> Body parameter

```json
{
  "TableCatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "Name": "string"
}
```

<h3 id="getdatacellsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableCatalogId|body|string|true|The ID of the catalog to which the table belongs.|
|» DatabaseName|body|string|true|A database in the Glue Data Catalog.|
|» TableName|body|string|true|A table in the database.|
|» Name|body|string|true|The name given by the user to the data filter cell.|

> Example responses

> 200 Response

```json
{
  "DataCellsFilter": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getdatacellsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataCellsFilterResponse](#schemagetdatacellsfilterresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataLakeSettings

<a id="opIdGetDataLakeSettings"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetDataLakeSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string"
  }'
```

`POST /GetDataLakeSettings`

Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 

> Body parameter

```json
{
  "CatalogId": "string"
}
```

<h3 id="getdatalakesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |

> Example responses

> 200 Response

```json
{
  "DataLakeSettings": {
    "DataLakeAdmins": {},
    "CreateDatabaseDefaultPermissions": {},
    "CreateTableDefaultPermissions": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "TrustedResourceOwners": {},
    "AllowExternalDataFiltering": {},
    "ExternalDataFilteringAllowList": {},
    "AuthorizedSessionTagValueList": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getdatalakesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataLakeSettingsResponse](#schemagetdatalakesettingsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEffectivePermissionsForPath

<a id="opIdGetEffectivePermissionsForPath"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetEffectivePermissionsForPath \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "ResourceArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /GetEffectivePermissionsForPath`

Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.

> Body parameter

```json
{
  "CatalogId": "string",
  "ResourceArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="geteffectivepermissionsforpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource for which you want to get permissions.|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve this list.|
|» MaxResults|body|integer|false|The maximum number of results to return.|

> Example responses

> 200 Response

```json
{
  "Permissions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="geteffectivepermissionsforpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEffectivePermissionsForPathResponse](#schemageteffectivepermissionsforpathresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLFTag

<a id="opIdGetLFTag"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetLFTag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "TagKey": "string"
  }'
```

`POST /GetLFTag`

Returns an LF-tag definition.

> Body parameter

```json
{
  "CatalogId": "string",
  "TagKey": "string"
}
```

<h3 id="getlftag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» TagKey|body|string|true|The key-name for the LF-tag.|

> Example responses

> 200 Response

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValues": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getlftag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLFTagResponse](#schemagetlftagresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryState

<a id="opIdGetQueryState"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetQueryState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryId": "stringstringstringstringstringstring"
  }'
```

`POST /GetQueryState`

Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.

> Body parameter

```json
{
  "QueryId": "stringstringstringstringstringstring"
}
```

<h3 id="getquerystate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryId|body|string|true|The ID of the plan query operation.|

> Example responses

> 200 Response

```json
{
  "Error": {},
  "State": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getquerystate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryStateResponse](#schemagetquerystateresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryStatistics

<a id="opIdGetQueryStatistics"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetQueryStatistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryId": "stringstringstringstringstringstring"
  }'
```

`POST /GetQueryStatistics`

Retrieves statistics on the planning and execution of a query.

> Body parameter

```json
{
  "QueryId": "stringstringstringstringstringstring"
}
```

<h3 id="getquerystatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryId|body|string|true|The ID of the plan query operation.|

> Example responses

> 200 Response

```json
{
  "ExecutionStatistics": {
    "AverageExecutionTimeMillis": {},
    "DataScannedBytes": {},
    "WorkUnitsExecutedCount": {}
  },
  "PlanningStatistics": {
    "EstimatedDataToScanBytes": {},
    "PlanningTimeMillis": {},
    "QueueTimeMillis": {},
    "WorkUnitsGeneratedCount": {}
  },
  "QuerySubmissionTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getquerystatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryStatisticsResponse](#schemagetquerystatisticsresponse)|
|480|480|StatisticsNotReadyYetException|[StatisticsNotReadyYetException](#schemastatisticsnotreadyyetexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ExpiredException|[ExpiredException](#schemaexpiredexception)|
|485|485|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceLFTags

<a id="opIdGetResourceLFTags"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetResourceLFTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "ShowAssignedLFTags": true
  }'
```

`POST /GetResourceLFTags`

Returns the LF-tags applied to a resource.

> Body parameter

```json
{
  "CatalogId": "string",
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "ShowAssignedLFTags": true
}
```

<h3 id="getresourcelftags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Resource|body|object|true|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» ShowAssignedLFTags|body|boolean|false|Indicates whether to show the assigned LF-tags.|

> Example responses

> 200 Response

```json
{
  "LFTagOnDatabase": {},
  "LFTagsOnTable": {},
  "LFTagsOnColumns": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getresourcelftags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceLFTagsResponse](#schemagetresourcelftagsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|GlueEncryptionException|[GlueEncryptionException](#schemaglueencryptionexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTableObjects

<a id="opIdGetTableObjects"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetTableObjects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "TransactionId": "string",
    "QueryAsOfTime": "1970-01-01T00:00:00Z",
    "PartitionPredicate": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /GetTableObjects`

Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.

> Body parameter

```json
{
  "CatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "TransactionId": "string",
  "QueryAsOfTime": "1970-01-01T00:00:00Z",
  "PartitionPredicate": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="gettableobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The catalog containing the governed table. Defaults to the caller’s account.|
|» DatabaseName|body|string|true|The database containing the governed table.|
|» TableName|body|string|true|The governed table for which to retrieve objects.|
|» TransactionId|body|string|false|The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.|
|» QueryAsOfTime|body|string(date-time)|false|The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.|
|» PartitionPredicate|body|string|false|<p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>|
|» MaxResults|body|integer|false|Specifies how many values to return in a page.|
|» NextToken|body|string|false|A continuation token if this is not the first call to retrieve these objects.|

> Example responses

> 200 Response

```json
{
  "Objects": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="gettableobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTableObjectsResponse](#schemagettableobjectsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|TransactionCommittedException|[TransactionCommittedException](#schematransactioncommittedexception)|
|485|485|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|486|486|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTemporaryGluePartitionCredentials

<a id="opIdGetTemporaryGluePartitionCredentials"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetTemporaryGluePartitionCredentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableArn": "string",
    "Partition": {
      "Values": {}
    },
    "Permissions": [
      "ALL"
    ],
    "DurationSeconds": 900,
    "AuditContext": {
      "AdditionalAuditContext": {}
    },
    "SupportedPermissionTypes": [
      "COLUMN_PERMISSION"
    ]
  }'
```

`POST /GetTemporaryGluePartitionCredentials`

This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.

> Body parameter

```json
{
  "TableArn": "string",
  "Partition": {
    "Values": {}
  },
  "Permissions": [
    "ALL"
  ],
  "DurationSeconds": 900,
  "AuditContext": {
    "AdditionalAuditContext": {}
  },
  "SupportedPermissionTypes": [
    "COLUMN_PERMISSION"
  ]
}
```

<h3 id="gettemporarygluepartitioncredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableArn|body|string|true|The ARN of the partitions' table.|
|» Partition|body|object|true|Contains a list of values defining partitions.|
|» » Values|body|object|false|none|
|» Permissions|body|[[Permission](#schemapermission)]|false|Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).|
|» DurationSeconds|body|integer|false|The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.|
|» AuditContext|body|object|false|A structure used to include auditing information on the privileged API. |
|» » AdditionalAuditContext|body|object|false|none|
|» SupportedPermissionTypes|body|[[PermissionType](#schemapermissiontype)]|true|A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Permissions|ALL|
|» Permissions|SELECT|
|» Permissions|ALTER|
|» Permissions|DROP|
|» Permissions|DELETE|
|» Permissions|INSERT|
|» Permissions|DESCRIBE|
|» Permissions|CREATE_DATABASE|
|» Permissions|CREATE_TABLE|
|» Permissions|DATA_LOCATION_ACCESS|
|» Permissions|CREATE_TAG|
|» Permissions|ASSOCIATE|
|» SupportedPermissionTypes|COLUMN_PERMISSION|
|» SupportedPermissionTypes|CELL_FILTER_PERMISSION|

> Example responses

> 200 Response

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="gettemporarygluepartitioncredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemporaryGluePartitionCredentialsResponse](#schemagettemporarygluepartitioncredentialsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|PermissionTypeMismatchException|[PermissionTypeMismatchException](#schemapermissiontypemismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTemporaryGlueTableCredentials

<a id="opIdGetTemporaryGlueTableCredentials"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetTemporaryGlueTableCredentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableArn": "string",
    "Permissions": [
      "ALL"
    ],
    "DurationSeconds": 900,
    "AuditContext": {
      "AdditionalAuditContext": {}
    },
    "SupportedPermissionTypes": [
      "COLUMN_PERMISSION"
    ]
  }'
```

`POST /GetTemporaryGlueTableCredentials`

Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.

> Body parameter

```json
{
  "TableArn": "string",
  "Permissions": [
    "ALL"
  ],
  "DurationSeconds": 900,
  "AuditContext": {
    "AdditionalAuditContext": {}
  },
  "SupportedPermissionTypes": [
    "COLUMN_PERMISSION"
  ]
}
```

<h3 id="gettemporarygluetablecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableArn|body|string|true|The ARN identifying a table in the Data Catalog for the temporary credentials request.|
|» Permissions|body|[[Permission](#schemapermission)]|false|Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).|
|» DurationSeconds|body|integer|false|The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.|
|» AuditContext|body|object|false|A structure used to include auditing information on the privileged API. |
|» » AdditionalAuditContext|body|object|false|none|
|» SupportedPermissionTypes|body|[[PermissionType](#schemapermissiontype)]|true|A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Permissions|ALL|
|» Permissions|SELECT|
|» Permissions|ALTER|
|» Permissions|DROP|
|» Permissions|DELETE|
|» Permissions|INSERT|
|» Permissions|DESCRIBE|
|» Permissions|CREATE_DATABASE|
|» Permissions|CREATE_TABLE|
|» Permissions|DATA_LOCATION_ACCESS|
|» Permissions|CREATE_TAG|
|» Permissions|ASSOCIATE|
|» SupportedPermissionTypes|COLUMN_PERMISSION|
|» SupportedPermissionTypes|CELL_FILTER_PERMISSION|

> Example responses

> 200 Response

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="gettemporarygluetablecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemporaryGlueTableCredentialsResponse](#schemagettemporarygluetablecredentialsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|PermissionTypeMismatchException|[PermissionTypeMismatchException](#schemapermissiontypemismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkUnitResults

<a id="opIdGetWorkUnitResults"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetWorkUnitResults \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryId": "stringstringstringstringstringstring",
    "WorkUnitId": 0,
    "WorkUnitToken": "password"
  }'
```

`POST /GetWorkUnitResults`

Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 

> Body parameter

```json
{
  "QueryId": "stringstringstringstringstringstring",
  "WorkUnitId": 0,
  "WorkUnitToken": "password"
}
```

<h3 id="getworkunitresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryId|body|string|true|The ID of the plan query operation for which to get results.|
|» WorkUnitId|body|integer|true|The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.|
|» WorkUnitToken|body|string(password)|true|A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.|

> Example responses

> 200 Response

```json
{
  "ResultStream": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getworkunitresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkUnitResultsResponse](#schemagetworkunitresultsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ExpiredException|[ExpiredException](#schemaexpiredexception)|
|484|484|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkUnits

<a id="opIdGetWorkUnits"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GetWorkUnits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "PageSize": 0,
    "QueryId": "stringstringstringstringstringstring"
  }'
```

`POST /GetWorkUnits`

Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.

> Body parameter

```json
{
  "NextToken": "string",
  "PageSize": 0,
  "QueryId": "stringstringstringstringstringstring"
}
```

<h3 id="getworkunits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|A continuation token, if this is a continuation call.|
|» PageSize|body|integer|false|The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.|
|» QueryId|body|string|true|The ID of the plan query operation.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "QueryId": {},
  "WorkUnitRanges": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getworkunits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkUnitsResponse](#schemagetworkunitsresponse)|
|480|480|WorkUnitsNotReadyYetException|[WorkUnitsNotReadyYetException](#schemaworkunitsnotreadyyetexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ExpiredException|[ExpiredException](#schemaexpiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GrantPermissions

<a id="opIdGrantPermissions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/GrantPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "Permissions": [
      "ALL"
    ],
    "PermissionsWithGrantOption": [
      "ALL"
    ]
  }'
```

`POST /GrantPermissions`

<p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

> Body parameter

```json
{
  "CatalogId": "string",
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": [
    "ALL"
  ],
  "PermissionsWithGrantOption": [
    "ALL"
  ]
}
```

<h3 id="grantpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Principal|body|object|true|The Lake Formation principal. Supported principals are IAM users or IAM roles.|
|» » DataLakePrincipalIdentifier|body|object|false|none|
|» Resource|body|object|true|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» Permissions|body|[[Permission](#schemapermission)]|true|The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. |
|» PermissionsWithGrantOption|body|[[Permission](#schemapermission)]|false|Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Permissions|ALL|
|» Permissions|SELECT|
|» Permissions|ALTER|
|» Permissions|DROP|
|» Permissions|DELETE|
|» Permissions|INSERT|
|» Permissions|DESCRIBE|
|» Permissions|CREATE_DATABASE|
|» Permissions|CREATE_TABLE|
|» Permissions|DATA_LOCATION_ACCESS|
|» Permissions|CREATE_TAG|
|» Permissions|ASSOCIATE|
|» PermissionsWithGrantOption|ALL|
|» PermissionsWithGrantOption|SELECT|
|» PermissionsWithGrantOption|ALTER|
|» PermissionsWithGrantOption|DROP|
|» PermissionsWithGrantOption|DELETE|
|» PermissionsWithGrantOption|INSERT|
|» PermissionsWithGrantOption|DESCRIBE|
|» PermissionsWithGrantOption|CREATE_DATABASE|
|» PermissionsWithGrantOption|CREATE_TABLE|
|» PermissionsWithGrantOption|DATA_LOCATION_ACCESS|
|» PermissionsWithGrantOption|CREATE_TAG|
|» PermissionsWithGrantOption|ASSOCIATE|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="grantpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GrantPermissionsResponse](#schemagrantpermissionsresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataCellsFilter

<a id="opIdListDataCellsFilter"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListDataCellsFilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /ListDataCellsFilter`

Lists all the data cell filters on a table.

> Body parameter

```json
{
  "Table": {
    "CatalogId": {},
    "DatabaseName": {},
    "Name": {},
    "TableWildcard": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listdatacellsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Table|body|object|false|A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. |
|» » CatalogId|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » Name|body|object|false|none|
|» » TableWildcard|body|object|false|none|
|» NextToken|body|string|false|A continuation token, if this is a continuation call.|
|» MaxResults|body|integer|false|The maximum size of the response.|

> Example responses

> 200 Response

```json
{
  "DataCellsFilters": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listdatacellsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataCellsFilterResponse](#schemalistdatacellsfilterresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLFTags

<a id="opIdListLFTags"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListLFTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "ResourceShareType": "FOREIGN",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListLFTags`

Lists LF-tags that the requester has permission to view. 

> Body parameter

```json
{
  "CatalogId": "string",
  "ResourceShareType": "FOREIGN",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listlftags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» ResourceShareType|body|string|false|If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve this list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceShareType|FOREIGN|
|» ResourceShareType|ALL|

> Example responses

> 200 Response

```json
{
  "LFTags": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listlftags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLFTagsResponse](#schemalistlftagsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissions

<a id="opIdListPermissions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "ResourceType": "CATALOG",
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "NextToken": "string",
    "MaxResults": 1,
    "IncludeRelated": "strin"
  }'
```

`POST /ListPermissions`

<p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

> Body parameter

```json
{
  "CatalogId": "string",
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "ResourceType": "CATALOG",
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "NextToken": "string",
  "MaxResults": 1,
  "IncludeRelated": "strin"
}
```

<h3 id="listpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Principal|body|object|false|The Lake Formation principal. Supported principals are IAM users or IAM roles.|
|» » DataLakePrincipalIdentifier|body|object|false|none|
|» ResourceType|body|string|false|Specifies a resource type to filter the permissions returned.|
|» Resource|body|object|false|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve this list.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» IncludeRelated|body|string|false|Indicates that related permissions should be included in the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceType|CATALOG|
|» ResourceType|DATABASE|
|» ResourceType|TABLE|
|» ResourceType|DATA_LOCATION|
|» ResourceType|LF_TAG|
|» ResourceType|LF_TAG_POLICY|
|» ResourceType|LF_TAG_POLICY_DATABASE|
|» ResourceType|LF_TAG_POLICY_TABLE|

> Example responses

> 200 Response

```json
{
  "PrincipalResourcePermissions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionsResponse](#schemalistpermissionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResources

<a id="opIdListResources"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListResources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FilterConditionList": [
      {
        "Field": {},
        "ComparisonOperator": {},
        "StringValueList": {}
      }
    ],
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListResources`

Lists the resources registered to be managed by the Data Catalog.

> Body parameter

```json
{
  "FilterConditionList": [
    {
      "Field": {},
      "ComparisonOperator": {},
      "StringValueList": {}
    }
  ],
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FilterConditionList|body|[[FilterCondition](#schemafiltercondition)]|false|Any applicable row-level and/or column-level filtering conditions for the resources.|
|» MaxResults|body|integer|false|The maximum number of resource results.|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve these resources.|

> Example responses

> 200 Response

```json
{
  "ResourceInfoList": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesResponse](#schemalistresourcesresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTableStorageOptimizers

<a id="opIdListTableStorageOptimizers"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListTableStorageOptimizers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "StorageOptimizerType": "COMPACTION",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListTableStorageOptimizers`

Returns the configuration of all storage optimizers associated with a specified table.

> Body parameter

```json
{
  "CatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "StorageOptimizerType": "COMPACTION",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listtablestorageoptimizers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The Catalog ID of the table.|
|» DatabaseName|body|string|true|Name of the database where the table is present.|
|» TableName|body|string|true|Name of the table.|
|» StorageOptimizerType|body|string|false|The specific type of storage optimizers to list. The supported value is <code>compaction</code>.|
|» MaxResults|body|integer|false|The number of storage optimizers to return on each call.|
|» NextToken|body|string|false|A continuation token, if this is a continuation call.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» StorageOptimizerType|COMPACTION|
|» StorageOptimizerType|GARBAGE_COLLECTION|
|» StorageOptimizerType|ALL|

> Example responses

> 200 Response

```json
{
  "StorageOptimizerList": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listtablestorageoptimizers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTableStorageOptimizersResponse](#schemalisttablestorageoptimizersresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTransactions

<a id="opIdListTransactions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/ListTransactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "StatusFilter": "ALL",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListTransactions`

<p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>

> Body parameter

```json
{
  "CatalogId": "string",
  "StatusFilter": "ALL",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listtransactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The catalog for which to list transactions. Defaults to the account ID of the caller.|
|» StatusFilter|body|string|false| A filter indicating the status of transactions to return. Options are ALL \| COMPLETED \| COMMITTED \| ABORTED \| ACTIVE. The default is <code>ALL</code>.|
|» MaxResults|body|integer|false|The maximum number of transactions to return in a single call.|
|» NextToken|body|string|false|A continuation token if this is not the first call to retrieve transactions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» StatusFilter|ALL|
|» StatusFilter|COMPLETED|
|» StatusFilter|ACTIVE|
|» StatusFilter|COMMITTED|
|» StatusFilter|ABORTED|

> Example responses

> 200 Response

```json
{
  "Transactions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTransactionsResponse](#schemalisttransactionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDataLakeSettings

<a id="opIdPutDataLakeSettings"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/PutDataLakeSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DataLakeSettings": {
      "DataLakeAdmins": {},
      "CreateDatabaseDefaultPermissions": {},
      "CreateTableDefaultPermissions": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      },
      "TrustedResourceOwners": {},
      "AllowExternalDataFiltering": {},
      "ExternalDataFilteringAllowList": {},
      "AuthorizedSessionTagValueList": {}
    }
  }'
```

`POST /PutDataLakeSettings`

<p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>

> Body parameter

```json
{
  "CatalogId": "string",
  "DataLakeSettings": {
    "DataLakeAdmins": {},
    "CreateDatabaseDefaultPermissions": {},
    "CreateTableDefaultPermissions": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "TrustedResourceOwners": {},
    "AllowExternalDataFiltering": {},
    "ExternalDataFilteringAllowList": {},
    "AuthorizedSessionTagValueList": {}
  }
}
```

<h3 id="putdatalakesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» DataLakeSettings|body|object|true|A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.|
|» » DataLakeAdmins|body|object|false|none|
|» » CreateDatabaseDefaultPermissions|body|object|false|none|
|» » CreateTableDefaultPermissions|body|object|false|none|
|» » Parameters|body|object|false|none|
|» » » **additionalProperties**|body|[ParametersMapValue](#schemaparametersmapvalue)|false|none|
|» » TrustedResourceOwners|body|object|false|none|
|» » AllowExternalDataFiltering|body|object|false|none|
|» » ExternalDataFilteringAllowList|body|object|false|none|
|» » AuthorizedSessionTagValueList|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="putdatalakesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDataLakeSettingsResponse](#schemaputdatalakesettingsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterResource

<a id="opIdRegisterResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/RegisterResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "UseServiceLinkedRole": true,
    "RoleArn": "string",
    "WithFederation": true
  }'
```

`POST /RegisterResource`

<p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>

> Body parameter

```json
{
  "ResourceArn": "string",
  "UseServiceLinkedRole": true,
  "RoleArn": "string",
  "WithFederation": true
}
```

<h3 id="registerresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource that you want to register.|
|» UseServiceLinkedRole|body|boolean|false|<p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>|
|» RoleArn|body|string|false|The identifier for the role that registers the resource.|
|» WithFederation|body|boolean|false|Whether or not the resource is a federated resource.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="registerresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterResourceResponse](#schemaregisterresourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|484|484|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|485|485|ResourceNumberLimitExceededException|[ResourceNumberLimitExceededException](#schemaresourcenumberlimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveLFTagsFromResource

<a id="opIdRemoveLFTagsFromResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/RemoveLFTagsFromResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "LFTags": [
      {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      }
    ]
  }'
```

`POST /RemoveLFTagsFromResource`

Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.

> Body parameter

```json
{
  "CatalogId": "string",
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "LFTags": [
    {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    }
  ]
}
```

<h3 id="removelftagsfromresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Resource|body|object|true|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» LFTags|body|[[LFTagPair](#schemalftagpair)]|true|The LF-tags to be removed from the resource.|

> Example responses

> 200 Response

```json
{
  "Failures": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="removelftagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveLFTagsFromResourceResponse](#schemaremovelftagsfromresourceresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|GlueEncryptionException|[GlueEncryptionException](#schemaglueencryptionexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokePermissions

<a id="opIdRevokePermissions"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/RevokePermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "Permissions": [
      "ALL"
    ],
    "PermissionsWithGrantOption": [
      "ALL"
    ]
  }'
```

`POST /RevokePermissions`

Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.

> Body parameter

```json
{
  "CatalogId": "string",
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": [
    "ALL"
  ],
  "PermissionsWithGrantOption": [
    "ALL"
  ]
}
```

<h3 id="revokepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Principal|body|object|true|The Lake Formation principal. Supported principals are IAM users or IAM roles.|
|» » DataLakePrincipalIdentifier|body|object|false|none|
|» Resource|body|object|true|A structure for the resource.|
|» » Catalog|body|object|false|none|
|» » Database|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » Name|body|object|true|none|
|» » Table|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » TableWildcard|body|object|false|none|
|» » TableWithColumns|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » Name|body|object|true|none|
|» » » ColumnNames|body|object|false|none|
|» » » ColumnWildcard|body|object|false|none|
|» » » » ExcludedColumnNames|body|object|false|none|
|» » DataLocation|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceArn|body|object|true|none|
|» » DataCellsFilter|body|object|false|none|
|» » » TableCatalogId|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » Name|body|object|false|none|
|» » LFTag|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » TagKey|body|object|true|none|
|» » » TagValues|body|object|true|none|
|» » LFTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » ResourceType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» Permissions|body|[[Permission](#schemapermission)]|true|The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.|
|» PermissionsWithGrantOption|body|[[Permission](#schemapermission)]|false|Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Permissions|ALL|
|» Permissions|SELECT|
|» Permissions|ALTER|
|» Permissions|DROP|
|» Permissions|DELETE|
|» Permissions|INSERT|
|» Permissions|DESCRIBE|
|» Permissions|CREATE_DATABASE|
|» Permissions|CREATE_TABLE|
|» Permissions|DATA_LOCATION_ACCESS|
|» Permissions|CREATE_TAG|
|» Permissions|ASSOCIATE|
|» PermissionsWithGrantOption|ALL|
|» PermissionsWithGrantOption|SELECT|
|» PermissionsWithGrantOption|ALTER|
|» PermissionsWithGrantOption|DROP|
|» PermissionsWithGrantOption|DELETE|
|» PermissionsWithGrantOption|INSERT|
|» PermissionsWithGrantOption|DESCRIBE|
|» PermissionsWithGrantOption|CREATE_DATABASE|
|» PermissionsWithGrantOption|CREATE_TABLE|
|» PermissionsWithGrantOption|DATA_LOCATION_ACCESS|
|» PermissionsWithGrantOption|CREATE_TAG|
|» PermissionsWithGrantOption|ASSOCIATE|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="revokepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokePermissionsResponse](#schemarevokepermissionsresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchDatabasesByLFTags

<a id="opIdSearchDatabasesByLFTags"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/SearchDatabasesByLFTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "CatalogId": "string",
    "Expression": [
      {
        "TagKey": {},
        "TagValues": {}
      }
    ]
  }'
```

`POST /SearchDatabasesByLFTags`

This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "CatalogId": "string",
  "Expression": [
    {
      "TagKey": {},
      "TagValues": {}
    }
  ]
}
```

<h3 id="searchdatabasesbylftags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve this list.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Expression|body|[[LFTag](#schemalftag)]|true|A list of conditions (<code>LFTag</code> structures) to search for in database resources.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DatabaseList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="searchdatabasesbylftags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchDatabasesByLFTagsResponse](#schemasearchdatabasesbylftagsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|GlueEncryptionException|[GlueEncryptionException](#schemaglueencryptionexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchTablesByLFTags

<a id="opIdSearchTablesByLFTags"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/SearchTablesByLFTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "CatalogId": "string",
    "Expression": [
      {
        "TagKey": {},
        "TagValues": {}
      }
    ]
  }'
```

`POST /SearchTablesByLFTags`

This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "CatalogId": "string",
  "Expression": [
    {
      "TagKey": {},
      "TagValues": {}
    }
  ]
}
```

<h3 id="searchtablesbylftags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|A continuation token, if this is not the first call to retrieve this list.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» Expression|body|[[LFTag](#schemalftag)]|true|A list of conditions (<code>LFTag</code> structures) to search for in table resources.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "TableList": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="searchtablesbylftags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchTablesByLFTagsResponse](#schemasearchtablesbylftagsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|GlueEncryptionException|[GlueEncryptionException](#schemaglueencryptionexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartQueryPlanning

<a id="opIdStartQueryPlanning"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/StartQueryPlanning \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryPlanningContext": {
      "CatalogId": {},
      "DatabaseName": {},
      "QueryAsOfTime": {},
      "QueryParameters": {
        "property1": "string",
        "property2": "string"
      },
      "TransactionId": {}
    },
    "QueryString": "password"
  }'
```

`POST /StartQueryPlanning`

<p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>

> Body parameter

```json
{
  "QueryPlanningContext": {
    "CatalogId": {},
    "DatabaseName": {},
    "QueryAsOfTime": {},
    "QueryParameters": {
      "property1": "string",
      "property2": "string"
    },
    "TransactionId": {}
  },
  "QueryString": "password"
}
```

<h3 id="startqueryplanning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryPlanningContext|body|object|true|A structure containing information about the query plan.|
|» » CatalogId|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » QueryAsOfTime|body|object|false|none|
|» » QueryParameters|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » TransactionId|body|object|false|none|
|» QueryString|body|string(password)|true|A PartiQL query statement used as an input to the planner service.|

> Example responses

> 200 Response

```json
{
  "QueryId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="startqueryplanning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartQueryPlanningResponse](#schemastartqueryplanningresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottledException|[ThrottledException](#schemathrottledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTransaction

<a id="opIdStartTransaction"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/StartTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TransactionType": "READ_AND_WRITE"
  }'
```

`POST /StartTransaction`

Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.

> Body parameter

```json
{
  "TransactionType": "READ_AND_WRITE"
}
```

<h3 id="starttransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TransactionType|body|string|false|Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TransactionType|READ_AND_WRITE|
|» TransactionType|READ_ONLY|

> Example responses

> 200 Response

```json
{
  "TransactionId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="starttransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTransactionResponse](#schemastarttransactionresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataCellsFilter

<a id="opIdUpdateDataCellsFilter"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/UpdateDataCellsFilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TableData": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {},
      "RowFilter": {
        "FilterExpression": {},
        "AllRowsWildcard": {}
      },
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      },
      "VersionId": {}
    }
  }'
```

`POST /UpdateDataCellsFilter`

Updates a data cell filter.

> Body parameter

```json
{
  "TableData": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

<h3 id="updatedatacellsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TableData|body|object|true|A structure that describes certain columns on certain rows.|
|» » TableCatalogId|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » TableName|body|object|false|none|
|» » Name|body|object|false|none|
|» » RowFilter|body|object|false|none|
|» » » FilterExpression|body|object|false|none|
|» » » AllRowsWildcard|body|object|false|none|
|» » ColumnNames|body|object|false|none|
|» » ColumnWildcard|body|object|false|none|
|» » » ExcludedColumnNames|body|object|false|none|
|» » VersionId|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatedatacellsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataCellsFilterResponse](#schemaupdatedatacellsfilterresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLFTag

<a id="opIdUpdateLFTag"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/UpdateLFTag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "TagKey": "string",
    "TagValuesToDelete": [
      "string"
    ],
    "TagValuesToAdd": [
      "string"
    ]
  }'
```

`POST /UpdateLFTag`

Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 

> Body parameter

```json
{
  "CatalogId": "string",
  "TagKey": "string",
  "TagValuesToDelete": [
    "string"
  ],
  "TagValuesToAdd": [
    "string"
  ]
}
```

<h3 id="updatelftag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. |
|» TagKey|body|string|true|The key-name for the LF-tag for which to add or delete values.|
|» TagValuesToDelete|body|[[LFTagValue](#schemalftagvalue)]|false|A list of LF-tag values to delete from the LF-tag.|
|» TagValuesToAdd|body|[[LFTagValue](#schemalftagvalue)]|false|A list of LF-tag values to add from the LF-tag.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatelftag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLFTagResponse](#schemaupdatelftagresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResource

<a id="opIdUpdateResource"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/UpdateResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoleArn": "string",
    "ResourceArn": "string",
    "WithFederation": true
  }'
```

`POST /UpdateResource`

Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 

> Body parameter

```json
{
  "RoleArn": "string",
  "ResourceArn": "string",
  "WithFederation": true
}
```

<h3 id="updateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RoleArn|body|string|true|The new role to use for the given resource registered in Lake Formation.|
|» ResourceArn|body|string|true|The resource ARN.|
|» WithFederation|body|boolean|false|Whether or not the resource is a federated resource.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceResponse](#schemaupdateresourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTableObjects

<a id="opIdUpdateTableObjects"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/UpdateTableObjects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "TransactionId": "string",
    "WriteOperations": [
      {
        "AddObject": {
          "Uri": {},
          "ETag": {},
          "Size": {},
          "PartitionValues": {}
        },
        "DeleteObject": {
          "Uri": {},
          "ETag": {},
          "PartitionValues": {}
        }
      }
    ]
  }'
```

`POST /UpdateTableObjects`

Updates the manifest of Amazon S3 objects that make up the specified governed table.

> Body parameter

```json
{
  "CatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "TransactionId": "string",
  "WriteOperations": [
    {
      "AddObject": {
        "Uri": {},
        "ETag": {},
        "Size": {},
        "PartitionValues": {}
      },
      "DeleteObject": {
        "Uri": {},
        "ETag": {},
        "PartitionValues": {}
      }
    }
  ]
}
```

<h3 id="updatetableobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The catalog containing the governed table to update. Defaults to the caller’s account ID.|
|» DatabaseName|body|string|true|The database containing the governed table to update.|
|» TableName|body|string|true|The governed table to update.|
|» TransactionId|body|string|false|The transaction at which to do the write.|
|» WriteOperations|body|[[WriteOperation](#schemawriteoperation)]|true|A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatetableobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTableObjectsResponse](#schemaupdatetableobjectsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|OperationTimeoutException|[OperationTimeoutException](#schemaoperationtimeoutexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|TransactionCommittedException|[TransactionCommittedException](#schematransactioncommittedexception)|
|485|485|TransactionCanceledException|[TransactionCanceledException](#schematransactioncanceledexception)|
|486|486|TransactionCommitInProgressException|[TransactionCommitInProgressException](#schematransactioncommitinprogressexception)|
|487|487|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|488|488|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTableStorageOptimizer

<a id="opIdUpdateTableStorageOptimizer"></a>

> Code samples

```bash
curl https://lakeformation.us-east-1.amazonaws.com/UpdateTableStorageOptimizer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CatalogId": "string",
    "DatabaseName": "string",
    "TableName": "string",
    "StorageOptimizerConfig": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /UpdateTableStorageOptimizer`

Updates the configuration of the storage optimizers for a table.

> Body parameter

```json
{
  "CatalogId": "string",
  "DatabaseName": "string",
  "TableName": "string",
  "StorageOptimizerConfig": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="updatetablestorageoptimizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CatalogId|body|string|false|The Catalog ID of the table.|
|» DatabaseName|body|string|true|Name of the database where the table is present.|
|» TableName|body|string|true|Name of the table for which to enable the storage optimizer.|
|» StorageOptimizerConfig|body|object|true|Name of the table for which to enable the storage optimizer.|
|» » **additionalProperties**|body|[StorageOptimizerConfig](#schemastorageoptimizerconfig)|false|none|

> Example responses

> 200 Response

```json
{
  "Result": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatetablestorageoptimizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTableStorageOptimizerResponse](#schemaupdatetablestorageoptimizerresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddLFTagsToResourceResponse">AddLFTagsToResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddlftagstoresourceresponse"></a>
<a id="schema_AddLFTagsToResourceResponse"></a>
<a id="tocSaddlftagstoresourceresponse"></a>
<a id="tocsaddlftagstoresourceresponse"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_CatalogResource">CatalogResource</h2>
<!-- backwards compatibility -->
<a id="schemacatalogresource"></a>
<a id="schema_CatalogResource"></a>
<a id="tocScatalogresource"></a>
<a id="tocscatalogresource"></a>

```json
{}
```

A structure for the catalog object.

<h2 id="tocS_DatabaseResource">DatabaseResource</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseresource"></a>
<a id="schema_DatabaseResource"></a>
<a id="tocSdatabaseresource"></a>
<a id="tocsdatabaseresource"></a>

```json
{
  "CatalogId": {},
  "Name": {}
}
```

A structure for the database object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_TableResource">TableResource</h2>
<!-- backwards compatibility -->
<a id="schematableresource"></a>
<a id="schema_TableResource"></a>
<a id="tocStableresource"></a>
<a id="tocstableresource"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "Name": {},
  "TableWildcard": {}
}
```

A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|Name|object|false|none|none|
|TableWildcard|object|false|none|none|

<h2 id="tocS_TableWithColumnsResource">TableWithColumnsResource</h2>
<!-- backwards compatibility -->
<a id="schematablewithcolumnsresource"></a>
<a id="schema_TableWithColumnsResource"></a>
<a id="tocStablewithcolumnsresource"></a>
<a id="tocstablewithcolumnsresource"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "Name": {},
  "ColumnNames": {},
  "ColumnWildcard": {
    "ExcludedColumnNames": {}
  }
}
```

<p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|Name|object|true|none|none|
|ColumnNames|object|false|none|none|
|ColumnWildcard|object|false|none|none|

<h2 id="tocS_DataLocationResource">DataLocationResource</h2>
<!-- backwards compatibility -->
<a id="schemadatalocationresource"></a>
<a id="schema_DataLocationResource"></a>
<a id="tocSdatalocationresource"></a>
<a id="tocsdatalocationresource"></a>

```json
{
  "CatalogId": {},
  "ResourceArn": {}
}
```

A structure for a data location object where permissions are granted or revoked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DataCellsFilterResource">DataCellsFilterResource</h2>
<!-- backwards compatibility -->
<a id="schemadatacellsfilterresource"></a>
<a id="schema_DataCellsFilterResource"></a>
<a id="tocSdatacellsfilterresource"></a>
<a id="tocsdatacellsfilterresource"></a>

```json
{
  "TableCatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "Name": {}
}
```

A structure for a data cells filter resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableCatalogId|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_LFTagKeyResource">LFTagKeyResource</h2>
<!-- backwards compatibility -->
<a id="schemalftagkeyresource"></a>
<a id="schema_LFTagKeyResource"></a>
<a id="tocSlftagkeyresource"></a>
<a id="tocslftagkeyresource"></a>

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValues": {}
}
```

A structure containing an LF-tag key and values for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_LFTagPolicyResource">LFTagPolicyResource</h2>
<!-- backwards compatibility -->
<a id="schemalftagpolicyresource"></a>
<a id="schema_LFTagPolicyResource"></a>
<a id="tocSlftagpolicyresource"></a>
<a id="tocslftagpolicyresource"></a>

```json
{
  "CatalogId": {},
  "ResourceType": {},
  "Expression": {}
}
```

A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|ResourceType|object|true|none|none|
|Expression|object|true|none|none|

<h2 id="tocS_LFTagPair">LFTagPair</h2>
<!-- backwards compatibility -->
<a id="schemalftagpair"></a>
<a id="schema_LFTagPair"></a>
<a id="tocSlftagpair"></a>
<a id="tocslftagpair"></a>

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValues": {}
}
```

A structure containing an LF-tag key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_EntityNotFoundException">EntityNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaentitynotfoundexception"></a>
<a id="schema_EntityNotFoundException"></a>
<a id="tocSentitynotfoundexception"></a>
<a id="tocsentitynotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_OperationTimeoutException">OperationTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtimeoutexception"></a>
<a id="schema_OperationTimeoutException"></a>
<a id="tocSoperationtimeoutexception"></a>
<a id="tocsoperationtimeoutexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_AssumeDecoratedRoleWithSAMLResponse">AssumeDecoratedRoleWithSAMLResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassumedecoratedrolewithsamlresponse"></a>
<a id="schema_AssumeDecoratedRoleWithSAMLResponse"></a>
<a id="tocSassumedecoratedrolewithsamlresponse"></a>
<a id="tocsassumedecoratedrolewithsamlresponse"></a>

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|SecretAccessKey|object|false|none|none|
|SessionToken|object|false|none|none|
|Expiration|object|false|none|none|

<h2 id="tocS_BatchGrantPermissionsResponse">BatchGrantPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgrantpermissionsresponse"></a>
<a id="schema_BatchGrantPermissionsResponse"></a>
<a id="tocSbatchgrantpermissionsresponse"></a>
<a id="tocsbatchgrantpermissionsresponse"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_BatchPermissionsRequestEntry">BatchPermissionsRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchpermissionsrequestentry"></a>
<a id="schema_BatchPermissionsRequestEntry"></a>
<a id="tocSbatchpermissionsrequestentry"></a>
<a id="tocsbatchpermissionsrequestentry"></a>

```json
{
  "Id": {},
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": {},
  "PermissionsWithGrantOption": {}
}
```

A permission to a resource granted by batch operation to the principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Principal|object|false|none|none|
|Resource|object|false|none|none|
|Permissions|object|false|none|none|
|PermissionsWithGrantOption|object|false|none|none|

<h2 id="tocS_BatchRevokePermissionsResponse">BatchRevokePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchrevokepermissionsresponse"></a>
<a id="schema_BatchRevokePermissionsResponse"></a>
<a id="tocSbatchrevokepermissionsresponse"></a>
<a id="tocsbatchrevokepermissionsresponse"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_CancelTransactionResponse">CancelTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceltransactionresponse"></a>
<a id="schema_CancelTransactionResponse"></a>
<a id="tocScanceltransactionresponse"></a>
<a id="tocscanceltransactionresponse"></a>

```json
{}
```

<h2 id="tocS_TransactionCommittedException">TransactionCommittedException</h2>
<!-- backwards compatibility -->
<a id="schematransactioncommittedexception"></a>
<a id="schema_TransactionCommittedException"></a>
<a id="tocStransactioncommittedexception"></a>
<a id="tocstransactioncommittedexception"></a>

```json
null
```

<h2 id="tocS_TransactionCommitInProgressException">TransactionCommitInProgressException</h2>
<!-- backwards compatibility -->
<a id="schematransactioncommitinprogressexception"></a>
<a id="schema_TransactionCommitInProgressException"></a>
<a id="tocStransactioncommitinprogressexception"></a>
<a id="tocstransactioncommitinprogressexception"></a>

```json
null
```

<h2 id="tocS_CommitTransactionResponse">CommitTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionresponse"></a>
<a id="schema_CommitTransactionResponse"></a>
<a id="tocScommittransactionresponse"></a>
<a id="tocscommittransactionresponse"></a>

```json
{
  "TransactionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionStatus|object|false|none|none|

<h2 id="tocS_TransactionCanceledException">TransactionCanceledException</h2>
<!-- backwards compatibility -->
<a id="schematransactioncanceledexception"></a>
<a id="schema_TransactionCanceledException"></a>
<a id="tocStransactioncanceledexception"></a>
<a id="tocstransactioncanceledexception"></a>

```json
null
```

<h2 id="tocS_CreateDataCellsFilterResponse">CreateDataCellsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatacellsfilterresponse"></a>
<a id="schema_CreateDataCellsFilterResponse"></a>
<a id="tocScreatedatacellsfilterresponse"></a>
<a id="tocscreatedatacellsfilterresponse"></a>

```json
{}
```

<h2 id="tocS_CatalogIdString">CatalogIdString</h2>
<!-- backwards compatibility -->
<a id="schemacatalogidstring"></a>
<a id="schema_CatalogIdString"></a>
<a id="tocScatalogidstring"></a>
<a id="tocscatalogidstring"></a>

```json
"string"
```

<h2 id="tocS_NameString">NameString</h2>
<!-- backwards compatibility -->
<a id="schemanamestring"></a>
<a id="schema_NameString"></a>
<a id="tocSnamestring"></a>
<a id="tocsnamestring"></a>

```json
"string"
```

<h2 id="tocS_RowFilter">RowFilter</h2>
<!-- backwards compatibility -->
<a id="schemarowfilter"></a>
<a id="schema_RowFilter"></a>
<a id="tocSrowfilter"></a>
<a id="tocsrowfilter"></a>

```json
{
  "FilterExpression": {},
  "AllRowsWildcard": {}
}
```

A PartiQL predicate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterExpression|object|false|none|none|
|AllRowsWildcard|object|false|none|none|

<h2 id="tocS_ColumnNames">ColumnNames</h2>
<!-- backwards compatibility -->
<a id="schemacolumnnames"></a>
<a id="schema_ColumnNames"></a>
<a id="tocScolumnnames"></a>
<a id="tocscolumnnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ColumnWildcard">ColumnWildcard</h2>
<!-- backwards compatibility -->
<a id="schemacolumnwildcard"></a>
<a id="schema_ColumnWildcard"></a>
<a id="tocScolumnwildcard"></a>
<a id="tocscolumnwildcard"></a>

```json
{
  "ExcludedColumnNames": {}
}
```

A wildcard object, consisting of an optional list of excluded column names or indexes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExcludedColumnNames|object|false|none|none|

<h2 id="tocS_VersionString">VersionString</h2>
<!-- backwards compatibility -->
<a id="schemaversionstring"></a>
<a id="schema_VersionString"></a>
<a id="tocSversionstring"></a>
<a id="tocsversionstring"></a>

```json
"string"
```

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ResourceNumberLimitExceededException">ResourceNumberLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenumberlimitexceededexception"></a>
<a id="schema_ResourceNumberLimitExceededException"></a>
<a id="tocSresourcenumberlimitexceededexception"></a>
<a id="tocsresourcenumberlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateLFTagResponse">CreateLFTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelftagresponse"></a>
<a id="schema_CreateLFTagResponse"></a>
<a id="tocScreatelftagresponse"></a>
<a id="tocscreatelftagresponse"></a>

```json
{}
```

<h2 id="tocS_LFTagValue">LFTagValue</h2>
<!-- backwards compatibility -->
<a id="schemalftagvalue"></a>
<a id="schema_LFTagValue"></a>
<a id="tocSlftagvalue"></a>
<a id="tocslftagvalue"></a>

```json
"string"
```

<h2 id="tocS_DeleteDataCellsFilterResponse">DeleteDataCellsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatacellsfilterresponse"></a>
<a id="schema_DeleteDataCellsFilterResponse"></a>
<a id="tocSdeletedatacellsfilterresponse"></a>
<a id="tocsdeletedatacellsfilterresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLFTagResponse">DeleteLFTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelftagresponse"></a>
<a id="schema_DeleteLFTagResponse"></a>
<a id="tocSdeletelftagresponse"></a>
<a id="tocsdeletelftagresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteObjectsOnCancelResponse">DeleteObjectsOnCancelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectsoncancelresponse"></a>
<a id="schema_DeleteObjectsOnCancelResponse"></a>
<a id="tocSdeleteobjectsoncancelresponse"></a>
<a id="tocsdeleteobjectsoncancelresponse"></a>

```json
{}
```

<h2 id="tocS_VirtualObject">VirtualObject</h2>
<!-- backwards compatibility -->
<a id="schemavirtualobject"></a>
<a id="schema_VirtualObject"></a>
<a id="tocSvirtualobject"></a>
<a id="tocsvirtualobject"></a>

```json
{
  "Uri": {},
  "ETag": {}
}
```

An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that <code>VirtualPut</code> was called before writing the object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|
|ETag|object|false|none|none|

<h2 id="tocS_ResourceNotReadyException">ResourceNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotreadyexception"></a>
<a id="schema_ResourceNotReadyException"></a>
<a id="tocSresourcenotreadyexception"></a>
<a id="tocsresourcenotreadyexception"></a>

```json
null
```

<h2 id="tocS_DeregisterResourceResponse">DeregisterResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterresourceresponse"></a>
<a id="schema_DeregisterResourceResponse"></a>
<a id="tocSderegisterresourceresponse"></a>
<a id="tocsderegisterresourceresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeResourceResponse">DescribeResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourceresponse"></a>
<a id="schema_DescribeResourceResponse"></a>
<a id="tocSdescriberesourceresponse"></a>
<a id="tocsdescriberesourceresponse"></a>

```json
{
  "ResourceInfo": {
    "ResourceArn": {},
    "RoleArn": {},
    "LastModified": {},
    "WithFederation": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceInfo|object|false|none|none|

<h2 id="tocS_DescribeTransactionResponse">DescribeTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetransactionresponse"></a>
<a id="schema_DescribeTransactionResponse"></a>
<a id="tocSdescribetransactionresponse"></a>
<a id="tocsdescribetransactionresponse"></a>

```json
{
  "TransactionDescription": {
    "TransactionId": {},
    "TransactionStatus": {},
    "TransactionStartTime": {},
    "TransactionEndTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionDescription|object|false|none|none|

<h2 id="tocS_ExtendTransactionResponse">ExtendTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextendtransactionresponse"></a>
<a id="schema_ExtendTransactionResponse"></a>
<a id="tocSextendtransactionresponse"></a>
<a id="tocsextendtransactionresponse"></a>

```json
{}
```

<h2 id="tocS_GetDataCellsFilterResponse">GetDataCellsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatacellsfilterresponse"></a>
<a id="schema_GetDataCellsFilterResponse"></a>
<a id="tocSgetdatacellsfilterresponse"></a>
<a id="tocsgetdatacellsfilterresponse"></a>

```json
{
  "DataCellsFilter": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataCellsFilter|object|false|none|none|

<h2 id="tocS_GetDataLakeSettingsResponse">GetDataLakeSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatalakesettingsresponse"></a>
<a id="schema_GetDataLakeSettingsResponse"></a>
<a id="tocSgetdatalakesettingsresponse"></a>
<a id="tocsgetdatalakesettingsresponse"></a>

```json
{
  "DataLakeSettings": {
    "DataLakeAdmins": {},
    "CreateDatabaseDefaultPermissions": {},
    "CreateTableDefaultPermissions": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "TrustedResourceOwners": {},
    "AllowExternalDataFiltering": {},
    "ExternalDataFilteringAllowList": {},
    "AuthorizedSessionTagValueList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataLakeSettings|object|false|none|none|

<h2 id="tocS_GetEffectivePermissionsForPathResponse">GetEffectivePermissionsForPathResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteffectivepermissionsforpathresponse"></a>
<a id="schema_GetEffectivePermissionsForPathResponse"></a>
<a id="tocSgeteffectivepermissionsforpathresponse"></a>
<a id="tocsgeteffectivepermissionsforpathresponse"></a>

```json
{
  "Permissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetLFTagResponse">GetLFTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlftagresponse"></a>
<a id="schema_GetLFTagResponse"></a>
<a id="tocSgetlftagresponse"></a>
<a id="tocsgetlftagresponse"></a>

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|false|none|none|
|TagValues|object|false|none|none|

<h2 id="tocS_GetQueryStateResponse">GetQueryStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystateresponse"></a>
<a id="schema_GetQueryStateResponse"></a>
<a id="tocSgetquerystateresponse"></a>
<a id="tocsgetquerystateresponse"></a>

```json
{
  "Error": {},
  "State": {}
}
```

A structure for the output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|false|none|none|
|State|object|true|none|none|

<h2 id="tocS_GetQueryStatisticsResponse">GetQueryStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystatisticsresponse"></a>
<a id="schema_GetQueryStatisticsResponse"></a>
<a id="tocSgetquerystatisticsresponse"></a>
<a id="tocsgetquerystatisticsresponse"></a>

```json
{
  "ExecutionStatistics": {
    "AverageExecutionTimeMillis": {},
    "DataScannedBytes": {},
    "WorkUnitsExecutedCount": {}
  },
  "PlanningStatistics": {
    "EstimatedDataToScanBytes": {},
    "PlanningTimeMillis": {},
    "QueueTimeMillis": {},
    "WorkUnitsGeneratedCount": {}
  },
  "QuerySubmissionTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionStatistics|object|false|none|none|
|PlanningStatistics|object|false|none|none|
|QuerySubmissionTime|object|false|none|none|

<h2 id="tocS_StatisticsNotReadyYetException">StatisticsNotReadyYetException</h2>
<!-- backwards compatibility -->
<a id="schemastatisticsnotreadyyetexception"></a>
<a id="schema_StatisticsNotReadyYetException"></a>
<a id="tocSstatisticsnotreadyyetexception"></a>
<a id="tocsstatisticsnotreadyyetexception"></a>

```json
null
```

<h2 id="tocS_ExpiredException">ExpiredException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredexception"></a>
<a id="schema_ExpiredException"></a>
<a id="tocSexpiredexception"></a>
<a id="tocsexpiredexception"></a>

```json
null
```

<h2 id="tocS_ThrottledException">ThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemathrottledexception"></a>
<a id="schema_ThrottledException"></a>
<a id="tocSthrottledexception"></a>
<a id="tocsthrottledexception"></a>

```json
null
```

<h2 id="tocS_GetResourceLFTagsResponse">GetResourceLFTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcelftagsresponse"></a>
<a id="schema_GetResourceLFTagsResponse"></a>
<a id="tocSgetresourcelftagsresponse"></a>
<a id="tocsgetresourcelftagsresponse"></a>

```json
{
  "LFTagOnDatabase": {},
  "LFTagsOnTable": {},
  "LFTagsOnColumns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LFTagOnDatabase|object|false|none|none|
|LFTagsOnTable|object|false|none|none|
|LFTagsOnColumns|object|false|none|none|

<h2 id="tocS_GlueEncryptionException">GlueEncryptionException</h2>
<!-- backwards compatibility -->
<a id="schemaglueencryptionexception"></a>
<a id="schema_GlueEncryptionException"></a>
<a id="tocSglueencryptionexception"></a>
<a id="tocsglueencryptionexception"></a>

```json
null
```

<h2 id="tocS_GetTableObjectsResponse">GetTableObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettableobjectsresponse"></a>
<a id="schema_GetTableObjectsResponse"></a>
<a id="tocSgettableobjectsresponse"></a>
<a id="tocsgettableobjectsresponse"></a>

```json
{
  "Objects": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Objects|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetTemporaryGluePartitionCredentialsResponse">GetTemporaryGluePartitionCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettemporarygluepartitioncredentialsresponse"></a>
<a id="schema_GetTemporaryGluePartitionCredentialsResponse"></a>
<a id="tocSgettemporarygluepartitioncredentialsresponse"></a>
<a id="tocsgettemporarygluepartitioncredentialsresponse"></a>

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|SecretAccessKey|object|false|none|none|
|SessionToken|object|false|none|none|
|Expiration|object|false|none|none|

<h2 id="tocS_ValueStringList">ValueStringList</h2>
<!-- backwards compatibility -->
<a id="schemavaluestringlist"></a>
<a id="schema_ValueStringList"></a>
<a id="tocSvaluestringlist"></a>
<a id="tocsvaluestringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"ALL"
```

<h2 id="tocS_AuditContextString">AuditContextString</h2>
<!-- backwards compatibility -->
<a id="schemaauditcontextstring"></a>
<a id="schema_AuditContextString"></a>
<a id="tocSauditcontextstring"></a>
<a id="tocsauditcontextstring"></a>

```json
"string"
```

<h2 id="tocS_PermissionType">PermissionType</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontype"></a>
<a id="schema_PermissionType"></a>
<a id="tocSpermissiontype"></a>
<a id="tocspermissiontype"></a>

```json
"COLUMN_PERMISSION"
```

<h2 id="tocS_PermissionTypeMismatchException">PermissionTypeMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontypemismatchexception"></a>
<a id="schema_PermissionTypeMismatchException"></a>
<a id="tocSpermissiontypemismatchexception"></a>
<a id="tocspermissiontypemismatchexception"></a>

```json
null
```

<h2 id="tocS_GetTemporaryGlueTableCredentialsResponse">GetTemporaryGlueTableCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettemporarygluetablecredentialsresponse"></a>
<a id="schema_GetTemporaryGlueTableCredentialsResponse"></a>
<a id="tocSgettemporarygluetablecredentialsresponse"></a>
<a id="tocsgettemporarygluetablecredentialsresponse"></a>

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|SecretAccessKey|object|false|none|none|
|SessionToken|object|false|none|none|
|Expiration|object|false|none|none|

<h2 id="tocS_GetWorkUnitResultsResponse">GetWorkUnitResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitresultsresponse"></a>
<a id="schema_GetWorkUnitResultsResponse"></a>
<a id="tocSgetworkunitresultsresponse"></a>
<a id="tocsgetworkunitresultsresponse"></a>

```json
{
  "ResultStream": {}
}
```

A structure for the output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultStream|object|false|none|none|

<h2 id="tocS_GetWorkUnitsResponse">GetWorkUnitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitsresponse"></a>
<a id="schema_GetWorkUnitsResponse"></a>
<a id="tocSgetworkunitsresponse"></a>
<a id="tocsgetworkunitsresponse"></a>

```json
{
  "NextToken": {},
  "QueryId": {},
  "WorkUnitRanges": {}
}
```

A structure for the output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|QueryId|object|true|none|none|
|WorkUnitRanges|object|true|none|none|

<h2 id="tocS_WorkUnitsNotReadyYetException">WorkUnitsNotReadyYetException</h2>
<!-- backwards compatibility -->
<a id="schemaworkunitsnotreadyyetexception"></a>
<a id="schema_WorkUnitsNotReadyYetException"></a>
<a id="tocSworkunitsnotreadyyetexception"></a>
<a id="tocsworkunitsnotreadyyetexception"></a>

```json
null
```

<h2 id="tocS_GrantPermissionsResponse">GrantPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrantpermissionsresponse"></a>
<a id="schema_GrantPermissionsResponse"></a>
<a id="tocSgrantpermissionsresponse"></a>
<a id="tocsgrantpermissionsresponse"></a>

```json
{}
```

<h2 id="tocS_DataLakePrincipalString">DataLakePrincipalString</h2>
<!-- backwards compatibility -->
<a id="schemadatalakeprincipalstring"></a>
<a id="schema_DataLakePrincipalString"></a>
<a id="tocSdatalakeprincipalstring"></a>
<a id="tocsdatalakeprincipalstring"></a>

```json
"string"
```

<h2 id="tocS_ListDataCellsFilterResponse">ListDataCellsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatacellsfilterresponse"></a>
<a id="schema_ListDataCellsFilterResponse"></a>
<a id="tocSlistdatacellsfilterresponse"></a>
<a id="tocslistdatacellsfilterresponse"></a>

```json
{
  "DataCellsFilters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataCellsFilters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TableWildcard">TableWildcard</h2>
<!-- backwards compatibility -->
<a id="schematablewildcard"></a>
<a id="schema_TableWildcard"></a>
<a id="tocStablewildcard"></a>
<a id="tocstablewildcard"></a>

```json
{}
```

A wildcard object representing every table under a database.

<h2 id="tocS_ListLFTagsResponse">ListLFTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlftagsresponse"></a>
<a id="schema_ListLFTagsResponse"></a>
<a id="tocSlistlftagsresponse"></a>
<a id="tocslistlftagsresponse"></a>

```json
{
  "LFTags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LFTags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPermissionsResponse">ListPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsresponse"></a>
<a id="schema_ListPermissionsResponse"></a>
<a id="tocSlistpermissionsresponse"></a>
<a id="tocslistpermissionsresponse"></a>

```json
{
  "PrincipalResourcePermissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalResourcePermissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourcesResponse">ListResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesresponse"></a>
<a id="schema_ListResourcesResponse"></a>
<a id="tocSlistresourcesresponse"></a>
<a id="tocslistresourcesresponse"></a>

```json
{
  "ResourceInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
{
  "Field": {},
  "ComparisonOperator": {},
  "StringValueList": {}
}
```

This structure describes the filtering of columns in a table based on a filter condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Field|object|false|none|none|
|ComparisonOperator|object|false|none|none|
|StringValueList|object|false|none|none|

<h2 id="tocS_ListTableStorageOptimizersResponse">ListTableStorageOptimizersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablestorageoptimizersresponse"></a>
<a id="schema_ListTableStorageOptimizersResponse"></a>
<a id="tocSlisttablestorageoptimizersresponse"></a>
<a id="tocslisttablestorageoptimizersresponse"></a>

```json
{
  "StorageOptimizerList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageOptimizerList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTransactionsResponse">ListTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransactionsresponse"></a>
<a id="schema_ListTransactionsResponse"></a>
<a id="tocSlisttransactionsresponse"></a>
<a id="tocslisttransactionsresponse"></a>

```json
{
  "Transactions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transactions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutDataLakeSettingsResponse">PutDataLakeSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdatalakesettingsresponse"></a>
<a id="schema_PutDataLakeSettingsResponse"></a>
<a id="tocSputdatalakesettingsresponse"></a>
<a id="tocsputdatalakesettingsresponse"></a>

```json
{}
```

<h2 id="tocS_DataLakePrincipalList">DataLakePrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemadatalakeprincipallist"></a>
<a id="schema_DataLakePrincipalList"></a>
<a id="tocSdatalakeprincipallist"></a>
<a id="tocsdatalakeprincipallist"></a>

```json
[
  {
    "DataLakePrincipalIdentifier": {}
  }
]
```

<h2 id="tocS_PrincipalPermissionsList">PrincipalPermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalpermissionslist"></a>
<a id="schema_PrincipalPermissionsList"></a>
<a id="tocSprincipalpermissionslist"></a>
<a id="tocsprincipalpermissionslist"></a>

```json
[
  {
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Permissions": {}
  }
]
```

<h2 id="tocS_ParametersMap">ParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaparametersmap"></a>
<a id="schema_ParametersMap"></a>
<a id="tocSparametersmap"></a>
<a id="tocsparametersmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParametersMapValue](#schemaparametersmapvalue)|false|none|none|

<h2 id="tocS_TrustedResourceOwners">TrustedResourceOwners</h2>
<!-- backwards compatibility -->
<a id="schematrustedresourceowners"></a>
<a id="schema_TrustedResourceOwners"></a>
<a id="tocStrustedresourceowners"></a>
<a id="tocstrustedresourceowners"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_AuthorizedSessionTagValueList">AuthorizedSessionTagValueList</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedsessiontagvaluelist"></a>
<a id="schema_AuthorizedSessionTagValueList"></a>
<a id="tocSauthorizedsessiontagvaluelist"></a>
<a id="tocsauthorizedsessiontagvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RegisterResourceResponse">RegisterResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterresourceresponse"></a>
<a id="schema_RegisterResourceResponse"></a>
<a id="tocSregisterresourceresponse"></a>
<a id="tocsregisterresourceresponse"></a>

```json
{}
```

<h2 id="tocS_RemoveLFTagsFromResourceResponse">RemoveLFTagsFromResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovelftagsfromresourceresponse"></a>
<a id="schema_RemoveLFTagsFromResourceResponse"></a>
<a id="tocSremovelftagsfromresourceresponse"></a>
<a id="tocsremovelftagsfromresourceresponse"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_RevokePermissionsResponse">RevokePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokepermissionsresponse"></a>
<a id="schema_RevokePermissionsResponse"></a>
<a id="tocSrevokepermissionsresponse"></a>
<a id="tocsrevokepermissionsresponse"></a>

```json
{}
```

<h2 id="tocS_SearchDatabasesByLFTagsResponse">SearchDatabasesByLFTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdatabasesbylftagsresponse"></a>
<a id="schema_SearchDatabasesByLFTagsResponse"></a>
<a id="tocSsearchdatabasesbylftagsresponse"></a>
<a id="tocssearchdatabasesbylftagsresponse"></a>

```json
{
  "NextToken": {},
  "DatabaseList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DatabaseList|object|false|none|none|

<h2 id="tocS_LFTag">LFTag</h2>
<!-- backwards compatibility -->
<a id="schemalftag"></a>
<a id="schema_LFTag"></a>
<a id="tocSlftag"></a>
<a id="tocslftag"></a>

```json
{
  "TagKey": {},
  "TagValues": {}
}
```

A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_SearchTablesByLFTagsResponse">SearchTablesByLFTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchtablesbylftagsresponse"></a>
<a id="schema_SearchTablesByLFTagsResponse"></a>
<a id="tocSsearchtablesbylftagsresponse"></a>
<a id="tocssearchtablesbylftagsresponse"></a>

```json
{
  "NextToken": {},
  "TableList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TableList|object|false|none|none|

<h2 id="tocS_StartQueryPlanningResponse">StartQueryPlanningResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryplanningresponse"></a>
<a id="schema_StartQueryPlanningResponse"></a>
<a id="tocSstartqueryplanningresponse"></a>
<a id="tocsstartqueryplanningresponse"></a>

```json
{
  "QueryId": {}
}
```

A structure for the output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|

<h2 id="tocS_QueryPlanningContextDatabaseNameString">QueryPlanningContextDatabaseNameString</h2>
<!-- backwards compatibility -->
<a id="schemaqueryplanningcontextdatabasenamestring"></a>
<a id="schema_QueryPlanningContextDatabaseNameString"></a>
<a id="tocSqueryplanningcontextdatabasenamestring"></a>
<a id="tocsqueryplanningcontextdatabasenamestring"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_QueryParameterMap">QueryParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparametermap"></a>
<a id="schema_QueryParameterMap"></a>
<a id="tocSqueryparametermap"></a>
<a id="tocsqueryparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_TransactionIdString">TransactionIdString</h2>
<!-- backwards compatibility -->
<a id="schematransactionidstring"></a>
<a id="schema_TransactionIdString"></a>
<a id="tocStransactionidstring"></a>
<a id="tocstransactionidstring"></a>

```json
"string"
```

<h2 id="tocS_StartTransactionResponse">StartTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttransactionresponse"></a>
<a id="schema_StartTransactionResponse"></a>
<a id="tocSstarttransactionresponse"></a>
<a id="tocsstarttransactionresponse"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|

<h2 id="tocS_UpdateDataCellsFilterResponse">UpdateDataCellsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatacellsfilterresponse"></a>
<a id="schema_UpdateDataCellsFilterResponse"></a>
<a id="tocSupdatedatacellsfilterresponse"></a>
<a id="tocsupdatedatacellsfilterresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLFTagResponse">UpdateLFTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelftagresponse"></a>
<a id="schema_UpdateLFTagResponse"></a>
<a id="tocSupdatelftagresponse"></a>
<a id="tocsupdatelftagresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceResponse">UpdateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceresponse"></a>
<a id="schema_UpdateResourceResponse"></a>
<a id="tocSupdateresourceresponse"></a>
<a id="tocsupdateresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateTableObjectsResponse">UpdateTableObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableobjectsresponse"></a>
<a id="schema_UpdateTableObjectsResponse"></a>
<a id="tocSupdatetableobjectsresponse"></a>
<a id="tocsupdatetableobjectsresponse"></a>

```json
{}
```

<h2 id="tocS_WriteOperation">WriteOperation</h2>
<!-- backwards compatibility -->
<a id="schemawriteoperation"></a>
<a id="schema_WriteOperation"></a>
<a id="tocSwriteoperation"></a>
<a id="tocswriteoperation"></a>

```json
{
  "AddObject": {
    "Uri": {},
    "ETag": {},
    "Size": {},
    "PartitionValues": {}
  },
  "DeleteObject": {
    "Uri": {},
    "ETag": {},
    "PartitionValues": {}
  }
}
```

Defines an object to add to or delete from a governed table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddObject|object|false|none|none|
|DeleteObject|object|false|none|none|

<h2 id="tocS_UpdateTableStorageOptimizerResponse">UpdateTableStorageOptimizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablestorageoptimizerresponse"></a>
<a id="schema_UpdateTableStorageOptimizerResponse"></a>
<a id="tocSupdatetablestorageoptimizerresponse"></a>
<a id="tocsupdatetablestorageoptimizerresponse"></a>

```json
{
  "Result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|

<h2 id="tocS_StorageOptimizerConfig">StorageOptimizerConfig</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizerconfig"></a>
<a id="schema_StorageOptimizerConfig"></a>
<a id="tocSstorageoptimizerconfig"></a>
<a id="tocsstorageoptimizerconfig"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StorageOptimizerConfigValue](#schemastorageoptimizerconfigvalue)|false|none|none|

<h2 id="tocS_AccessKeyIdString">AccessKeyIdString</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeyidstring"></a>
<a id="schema_AccessKeyIdString"></a>
<a id="tocSaccesskeyidstring"></a>
<a id="tocsaccesskeyidstring"></a>

```json
"string"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "Catalog": {},
  "Database": {
    "CatalogId": {},
    "Name": {}
  },
  "Table": {
    "CatalogId": {},
    "DatabaseName": {},
    "Name": {},
    "TableWildcard": {}
  },
  "TableWithColumns": {
    "CatalogId": {},
    "DatabaseName": {},
    "Name": {},
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    }
  },
  "DataLocation": {
    "CatalogId": {},
    "ResourceArn": {}
  },
  "DataCellsFilter": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {}
  },
  "LFTag": {
    "CatalogId": {},
    "TagKey": {},
    "TagValues": {}
  },
  "LFTagPolicy": {
    "CatalogId": {},
    "ResourceType": {},
    "Expression": {}
  }
}
```

A structure for the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Catalog|object|false|none|none|
|Database|object|false|none|none|
|Table|object|false|none|none|
|TableWithColumns|object|false|none|none|
|DataLocation|object|false|none|none|
|DataCellsFilter|object|false|none|none|
|LFTag|object|false|none|none|
|LFTagPolicy|object|false|none|none|

<h2 id="tocS_LFTagsList">LFTagsList</h2>
<!-- backwards compatibility -->
<a id="schemalftagslist"></a>
<a id="schema_LFTagsList"></a>
<a id="tocSlftagslist"></a>
<a id="tocslftagslist"></a>

```json
[
  {
    "CatalogId": {},
    "TagKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_AddLFTagsToResourceRequest">AddLFTagsToResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddlftagstoresourcerequest"></a>
<a id="schema_AddLFTagsToResourceRequest"></a>
<a id="tocSaddlftagstoresourcerequest"></a>
<a id="tocsaddlftagstoresourcerequest"></a>

```json
{
  "CatalogId": {},
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "LFTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Resource|object|true|none|none|
|LFTags|object|true|none|none|

<h2 id="tocS_LFTagErrors">LFTagErrors</h2>
<!-- backwards compatibility -->
<a id="schemalftagerrors"></a>
<a id="schema_LFTagErrors"></a>
<a id="tocSlftagerrors"></a>
<a id="tocslftagerrors"></a>

```json
[
  {
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "Error": {
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
]
```

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_ETagString">ETagString</h2>
<!-- backwards compatibility -->
<a id="schemaetagstring"></a>
<a id="schema_ETagString"></a>
<a id="tocSetagstring"></a>
<a id="tocsetagstring"></a>

```json
"string"
```

<h2 id="tocS_ObjectSize">ObjectSize</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsize"></a>
<a id="schema_ObjectSize"></a>
<a id="tocSobjectsize"></a>
<a id="tocsobjectsize"></a>

```json
0
```

<h2 id="tocS_PartitionValuesList">PartitionValuesList</h2>
<!-- backwards compatibility -->
<a id="schemapartitionvalueslist"></a>
<a id="schema_PartitionValuesList"></a>
<a id="tocSpartitionvalueslist"></a>
<a id="tocspartitionvalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AddObjectInput">AddObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddobjectinput"></a>
<a id="schema_AddObjectInput"></a>
<a id="tocSaddobjectinput"></a>
<a id="tocsaddobjectinput"></a>

```json
{
  "Uri": {},
  "ETag": {},
  "Size": {},
  "PartitionValues": {}
}
```

A new object to add to the governed table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|
|ETag|object|true|none|none|
|Size|object|true|none|none|
|PartitionValues|object|false|none|none|

<h2 id="tocS_AllRowsWildcard">AllRowsWildcard</h2>
<!-- backwards compatibility -->
<a id="schemaallrowswildcard"></a>
<a id="schema_AllRowsWildcard"></a>
<a id="tocSallrowswildcard"></a>
<a id="tocsallrowswildcard"></a>

```json
{}
```

A structure that you pass to indicate you want all rows in a filter.

<h2 id="tocS_SAMLAssertionString">SAMLAssertionString</h2>
<!-- backwards compatibility -->
<a id="schemasamlassertionstring"></a>
<a id="schema_SAMLAssertionString"></a>
<a id="tocSsamlassertionstring"></a>
<a id="tocssamlassertionstring"></a>

```json
"string"
```

<h2 id="tocS_IAMRoleArn">IAMRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IAMRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_IAMSAMLProviderArn">IAMSAMLProviderArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamsamlproviderarn"></a>
<a id="schema_IAMSAMLProviderArn"></a>
<a id="tocSiamsamlproviderarn"></a>
<a id="tocsiamsamlproviderarn"></a>

```json
"string"
```

<h2 id="tocS_CredentialTimeoutDurationSecondInteger">CredentialTimeoutDurationSecondInteger</h2>
<!-- backwards compatibility -->
<a id="schemacredentialtimeoutdurationsecondinteger"></a>
<a id="schema_CredentialTimeoutDurationSecondInteger"></a>
<a id="tocScredentialtimeoutdurationsecondinteger"></a>
<a id="tocscredentialtimeoutdurationsecondinteger"></a>

```json
900
```

<h2 id="tocS_AssumeDecoratedRoleWithSAMLRequest">AssumeDecoratedRoleWithSAMLRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassumedecoratedrolewithsamlrequest"></a>
<a id="schema_AssumeDecoratedRoleWithSAMLRequest"></a>
<a id="tocSassumedecoratedrolewithsamlrequest"></a>
<a id="tocsassumedecoratedrolewithsamlrequest"></a>

```json
{
  "SAMLAssertion": {},
  "RoleArn": {},
  "PrincipalArn": {},
  "DurationSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SAMLAssertion|object|true|none|none|
|RoleArn|object|true|none|none|
|PrincipalArn|object|true|none|none|
|DurationSeconds|object|false|none|none|

<h2 id="tocS_SecretAccessKeyString">SecretAccessKeyString</h2>
<!-- backwards compatibility -->
<a id="schemasecretaccesskeystring"></a>
<a id="schema_SecretAccessKeyString"></a>
<a id="tocSsecretaccesskeystring"></a>
<a id="tocssecretaccesskeystring"></a>

```json
"string"
```

<h2 id="tocS_SessionTokenString">SessionTokenString</h2>
<!-- backwards compatibility -->
<a id="schemasessiontokenstring"></a>
<a id="schema_SessionTokenString"></a>
<a id="tocSsessiontokenstring"></a>
<a id="tocssessiontokenstring"></a>

```json
"string"
```

<h2 id="tocS_ExpirationTimestamp">ExpirationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationtimestamp"></a>
<a id="schema_ExpirationTimestamp"></a>
<a id="tocSexpirationtimestamp"></a>
<a id="tocsexpirationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AuditContext">AuditContext</h2>
<!-- backwards compatibility -->
<a id="schemaauditcontext"></a>
<a id="schema_AuditContext"></a>
<a id="tocSauditcontext"></a>
<a id="tocsauditcontext"></a>

```json
{
  "AdditionalAuditContext": {}
}
```

A structure used to include auditing information on the privileged API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalAuditContext|object|false|none|none|

<h2 id="tocS_BatchPermissionsRequestEntryList">BatchPermissionsRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemabatchpermissionsrequestentrylist"></a>
<a id="schema_BatchPermissionsRequestEntryList"></a>
<a id="tocSbatchpermissionsrequestentrylist"></a>
<a id="tocsbatchpermissionsrequestentrylist"></a>

```json
[
  {
    "Id": {},
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "Permissions": {},
    "PermissionsWithGrantOption": {}
  }
]
```

<h2 id="tocS_BatchGrantPermissionsRequest">BatchGrantPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgrantpermissionsrequest"></a>
<a id="schema_BatchGrantPermissionsRequest"></a>
<a id="tocSbatchgrantpermissionsrequest"></a>
<a id="tocsbatchgrantpermissionsrequest"></a>

```json
{
  "CatalogId": {},
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Entries|object|true|none|none|

<h2 id="tocS_BatchPermissionsFailureList">BatchPermissionsFailureList</h2>
<!-- backwards compatibility -->
<a id="schemabatchpermissionsfailurelist"></a>
<a id="schema_BatchPermissionsFailureList"></a>
<a id="tocSbatchpermissionsfailurelist"></a>
<a id="tocsbatchpermissionsfailurelist"></a>

```json
[
  {
    "RequestEntry": {
      "Id": {},
      "Principal": {
        "DataLakePrincipalIdentifier": {}
      },
      "Resource": {
        "Catalog": {},
        "Database": {
          "CatalogId": {},
          "Name": {}
        },
        "Table": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "TableWildcard": {}
        },
        "TableWithColumns": {
          "CatalogId": {},
          "DatabaseName": {},
          "Name": {},
          "ColumnNames": {},
          "ColumnWildcard": {
            "ExcludedColumnNames": {}
          }
        },
        "DataLocation": {
          "CatalogId": {},
          "ResourceArn": {}
        },
        "DataCellsFilter": {
          "TableCatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Name": {}
        },
        "LFTag": {
          "CatalogId": {},
          "TagKey": {},
          "TagValues": {}
        },
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "Expression": {}
        }
      },
      "Permissions": {},
      "PermissionsWithGrantOption": {}
    },
    "Error": {
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
]
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Contains details about an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_BatchPermissionsFailureEntry">BatchPermissionsFailureEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchpermissionsfailureentry"></a>
<a id="schema_BatchPermissionsFailureEntry"></a>
<a id="tocSbatchpermissionsfailureentry"></a>
<a id="tocsbatchpermissionsfailureentry"></a>

```json
{
  "RequestEntry": {
    "Id": {},
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "Permissions": {},
    "PermissionsWithGrantOption": {}
  },
  "Error": {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
}
```

A list of failures when performing a batch grant or batch revoke operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestEntry|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_DataLakePrincipal">DataLakePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemadatalakeprincipal"></a>
<a id="schema_DataLakePrincipal"></a>
<a id="tocSdatalakeprincipal"></a>
<a id="tocsdatalakeprincipal"></a>

```json
{
  "DataLakePrincipalIdentifier": {}
}
```

The Lake Formation principal. Supported principals are IAM users or IAM roles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataLakePrincipalIdentifier|object|false|none|none|

<h2 id="tocS_PermissionList">PermissionList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionlist"></a>
<a id="schema_PermissionList"></a>
<a id="tocSpermissionlist"></a>
<a id="tocspermissionlist"></a>

```json
[
  "ALL"
]
```

<h2 id="tocS_BatchRevokePermissionsRequest">BatchRevokePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchrevokepermissionsrequest"></a>
<a id="schema_BatchRevokePermissionsRequest"></a>
<a id="tocSbatchrevokepermissionsrequest"></a>
<a id="tocsbatchrevokepermissionsrequest"></a>

```json
{
  "CatalogId": {},
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Entries|object|true|none|none|

<h2 id="tocS_BooleanNullable">BooleanNullable</h2>
<!-- backwards compatibility -->
<a id="schemabooleannullable"></a>
<a id="schema_BooleanNullable"></a>
<a id="tocSbooleannullable"></a>
<a id="tocsbooleannullable"></a>

```json
true
```

<h2 id="tocS_CancelTransactionRequest">CancelTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceltransactionrequest"></a>
<a id="schema_CancelTransactionRequest"></a>
<a id="tocScanceltransactionrequest"></a>
<a id="tocscanceltransactionrequest"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|

<h2 id="tocS_ColumnLFTag">ColumnLFTag</h2>
<!-- backwards compatibility -->
<a id="schemacolumnlftag"></a>
<a id="schema_ColumnLFTag"></a>
<a id="tocScolumnlftag"></a>
<a id="tocscolumnlftag"></a>

```json
{
  "Name": {},
  "LFTags": {}
}
```

A structure containing the name of a column resource and the LF-tags attached to it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|LFTags|object|false|none|none|

<h2 id="tocS_ColumnLFTagsList">ColumnLFTagsList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnlftagslist"></a>
<a id="schema_ColumnLFTagsList"></a>
<a id="tocScolumnlftagslist"></a>
<a id="tocscolumnlftagslist"></a>

```json
[
  {
    "Name": {},
    "LFTags": {}
  }
]
```

<h2 id="tocS_CommitTransactionRequest">CommitTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionrequest"></a>
<a id="schema_CommitTransactionRequest"></a>
<a id="tocScommittransactionrequest"></a>
<a id="tocscommittransactionrequest"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"EQ"
```

<h2 id="tocS_DataCellsFilter">DataCellsFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatacellsfilter"></a>
<a id="schema_DataCellsFilter"></a>
<a id="tocSdatacellsfilter"></a>
<a id="tocsdatacellsfilter"></a>

```json
{
  "TableCatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "Name": {},
  "RowFilter": {
    "FilterExpression": {},
    "AllRowsWildcard": {}
  },
  "ColumnNames": {},
  "ColumnWildcard": {
    "ExcludedColumnNames": {}
  },
  "VersionId": {}
}
```

A structure that describes certain columns on certain rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableCatalogId|object|true|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|Name|object|true|none|none|
|RowFilter|object|false|none|none|
|ColumnNames|object|false|none|none|
|ColumnWildcard|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_CreateDataCellsFilterRequest">CreateDataCellsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatacellsfilterrequest"></a>
<a id="schema_CreateDataCellsFilterRequest"></a>
<a id="tocScreatedatacellsfilterrequest"></a>
<a id="tocscreatedatacellsfilterrequest"></a>

```json
{
  "TableData": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableData|object|true|none|none|

<h2 id="tocS_LFTagKey">LFTagKey</h2>
<!-- backwards compatibility -->
<a id="schemalftagkey"></a>
<a id="schema_LFTagKey"></a>
<a id="tocSlftagkey"></a>
<a id="tocslftagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValueList">TagValueList</h2>
<!-- backwards compatibility -->
<a id="schematagvaluelist"></a>
<a id="schema_TagValueList"></a>
<a id="tocStagvaluelist"></a>
<a id="tocstagvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateLFTagRequest">CreateLFTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelftagrequest"></a>
<a id="schema_CreateLFTagRequest"></a>
<a id="tocScreatelftagrequest"></a>
<a id="tocscreatelftagrequest"></a>

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_DataCellsFilterList">DataCellsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadatacellsfilterlist"></a>
<a id="schema_DataCellsFilterList"></a>
<a id="tocSdatacellsfilterlist"></a>
<a id="tocsdatacellsfilterlist"></a>

```json
[
  {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
]
```

<h2 id="tocS_DataLakeResourceType">DataLakeResourceType</h2>
<!-- backwards compatibility -->
<a id="schemadatalakeresourcetype"></a>
<a id="schema_DataLakeResourceType"></a>
<a id="tocSdatalakeresourcetype"></a>
<a id="tocsdatalakeresourcetype"></a>

```json
"CATALOG"
```

<h2 id="tocS_DataLakeSettings">DataLakeSettings</h2>
<!-- backwards compatibility -->
<a id="schemadatalakesettings"></a>
<a id="schema_DataLakeSettings"></a>
<a id="tocSdatalakesettings"></a>
<a id="tocsdatalakesettings"></a>

```json
{
  "DataLakeAdmins": {},
  "CreateDatabaseDefaultPermissions": {},
  "CreateTableDefaultPermissions": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  },
  "TrustedResourceOwners": {},
  "AllowExternalDataFiltering": {},
  "ExternalDataFilteringAllowList": {},
  "AuthorizedSessionTagValueList": {}
}
```

A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataLakeAdmins|object|false|none|none|
|CreateDatabaseDefaultPermissions|object|false|none|none|
|CreateTableDefaultPermissions|object|false|none|none|
|Parameters|object|false|none|none|
|TrustedResourceOwners|object|false|none|none|
|AllowExternalDataFiltering|object|false|none|none|
|ExternalDataFilteringAllowList|object|false|none|none|
|AuthorizedSessionTagValueList|object|false|none|none|

<h2 id="tocS_ResourceArnString">ResourceArnString</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnstring"></a>
<a id="schema_ResourceArnString"></a>
<a id="tocSresourcearnstring"></a>
<a id="tocsresourcearnstring"></a>

```json
"string"
```

<h2 id="tocS_TaggedDatabase">TaggedDatabase</h2>
<!-- backwards compatibility -->
<a id="schemataggeddatabase"></a>
<a id="schema_TaggedDatabase"></a>
<a id="tocStaggeddatabase"></a>
<a id="tocstaggeddatabase"></a>

```json
{
  "Database": {
    "CatalogId": {},
    "Name": {}
  },
  "LFTags": {}
}
```

A structure describing a database resource with LF-tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|
|LFTags|object|false|none|none|

<h2 id="tocS_DatabaseLFTagsList">DatabaseLFTagsList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselftagslist"></a>
<a id="schema_DatabaseLFTagsList"></a>
<a id="tocSdatabaselftagslist"></a>
<a id="tocsdatabaselftagslist"></a>

```json
[
  {
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "LFTags": {}
  }
]
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteDataCellsFilterRequest">DeleteDataCellsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatacellsfilterrequest"></a>
<a id="schema_DeleteDataCellsFilterRequest"></a>
<a id="tocSdeletedatacellsfilterrequest"></a>
<a id="tocsdeletedatacellsfilterrequest"></a>

```json
{
  "TableCatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableCatalogId|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DeleteLFTagRequest">DeleteLFTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelftagrequest"></a>
<a id="schema_DeleteLFTagRequest"></a>
<a id="tocSdeletelftagrequest"></a>
<a id="tocsdeletelftagrequest"></a>

```json
{
  "CatalogId": {},
  "TagKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|

<h2 id="tocS_DeleteObjectInput">DeleteObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectinput"></a>
<a id="schema_DeleteObjectInput"></a>
<a id="tocSdeleteobjectinput"></a>
<a id="tocsdeleteobjectinput"></a>

```json
{
  "Uri": {},
  "ETag": {},
  "PartitionValues": {}
}
```

An object to delete from the governed table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|
|ETag|object|false|none|none|
|PartitionValues|object|false|none|none|

<h2 id="tocS_VirtualObjectList">VirtualObjectList</h2>
<!-- backwards compatibility -->
<a id="schemavirtualobjectlist"></a>
<a id="schema_VirtualObjectList"></a>
<a id="tocSvirtualobjectlist"></a>
<a id="tocsvirtualobjectlist"></a>

```json
[
  {
    "Uri": {},
    "ETag": {}
  }
]
```

<h2 id="tocS_DeleteObjectsOnCancelRequest">DeleteObjectsOnCancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectsoncancelrequest"></a>
<a id="schema_DeleteObjectsOnCancelRequest"></a>
<a id="tocSdeleteobjectsoncancelrequest"></a>
<a id="tocsdeleteobjectsoncancelrequest"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "TransactionId": {},
  "Objects": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|TransactionId|object|true|none|none|
|Objects|object|true|none|none|

<h2 id="tocS_DeregisterResourceRequest">DeregisterResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterresourcerequest"></a>
<a id="schema_DeregisterResourceRequest"></a>
<a id="tocSderegisterresourcerequest"></a>
<a id="tocsderegisterresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DescribeResourceRequest">DescribeResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcerequest"></a>
<a id="schema_DescribeResourceRequest"></a>
<a id="tocSdescriberesourcerequest"></a>
<a id="tocsdescriberesourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ResourceInfo">ResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinfo"></a>
<a id="schema_ResourceInfo"></a>
<a id="tocSresourceinfo"></a>
<a id="tocsresourceinfo"></a>

```json
{
  "ResourceArn": {},
  "RoleArn": {},
  "LastModified": {},
  "WithFederation": {}
}
```

A structure containing information about an Lake Formation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|RoleArn|object|false|none|none|
|LastModified|object|false|none|none|
|WithFederation|object|false|none|none|

<h2 id="tocS_DescribeTransactionRequest">DescribeTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetransactionrequest"></a>
<a id="schema_DescribeTransactionRequest"></a>
<a id="tocSdescribetransactionrequest"></a>
<a id="tocsdescribetransactionrequest"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|

<h2 id="tocS_TransactionDescription">TransactionDescription</h2>
<!-- backwards compatibility -->
<a id="schematransactiondescription"></a>
<a id="schema_TransactionDescription"></a>
<a id="tocStransactiondescription"></a>
<a id="tocstransactiondescription"></a>

```json
{
  "TransactionId": {},
  "TransactionStatus": {},
  "TransactionStartTime": {},
  "TransactionEndTime": {}
}
```

A structure that contains information about a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|
|TransactionStatus|object|false|none|none|
|TransactionStartTime|object|false|none|none|
|TransactionEndTime|object|false|none|none|

<h2 id="tocS_DescriptionString">DescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionstring"></a>
<a id="schema_DescriptionString"></a>
<a id="tocSdescriptionstring"></a>
<a id="tocsdescriptionstring"></a>

```json
"string"
```

<h2 id="tocS_ResourceShareList">ResourceShareList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharelist"></a>
<a id="schema_ResourceShareList"></a>
<a id="tocSresourcesharelist"></a>
<a id="tocsresourcesharelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DetailsMap">DetailsMap</h2>
<!-- backwards compatibility -->
<a id="schemadetailsmap"></a>
<a id="schema_DetailsMap"></a>
<a id="tocSdetailsmap"></a>
<a id="tocsdetailsmap"></a>

```json
{
  "ResourceShare": {}
}
```

<p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceShare|object|false|none|none|

<h2 id="tocS_ErrorMessageString">ErrorMessageString</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessagestring"></a>
<a id="schema_ErrorMessageString"></a>
<a id="tocSerrormessagestring"></a>
<a id="tocserrormessagestring"></a>

```json
"string"
```

<h2 id="tocS_NumberOfMilliseconds">NumberOfMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schemanumberofmilliseconds"></a>
<a id="schema_NumberOfMilliseconds"></a>
<a id="tocSnumberofmilliseconds"></a>
<a id="tocsnumberofmilliseconds"></a>

```json
0
```

<h2 id="tocS_NumberOfBytes">NumberOfBytes</h2>
<!-- backwards compatibility -->
<a id="schemanumberofbytes"></a>
<a id="schema_NumberOfBytes"></a>
<a id="tocSnumberofbytes"></a>
<a id="tocsnumberofbytes"></a>

```json
0
```

<h2 id="tocS_NumberOfItems">NumberOfItems</h2>
<!-- backwards compatibility -->
<a id="schemanumberofitems"></a>
<a id="schema_NumberOfItems"></a>
<a id="tocSnumberofitems"></a>
<a id="tocsnumberofitems"></a>

```json
0
```

<h2 id="tocS_ExecutionStatistics">ExecutionStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatistics"></a>
<a id="schema_ExecutionStatistics"></a>
<a id="tocSexecutionstatistics"></a>
<a id="tocsexecutionstatistics"></a>

```json
{
  "AverageExecutionTimeMillis": {},
  "DataScannedBytes": {},
  "WorkUnitsExecutedCount": {}
}
```

Statistics related to the processing of a query statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AverageExecutionTimeMillis|object|false|none|none|
|DataScannedBytes|object|false|none|none|
|WorkUnitsExecutedCount|object|false|none|none|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
[
  {
    "TagKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_ExtendTransactionRequest">ExtendTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendtransactionrequest"></a>
<a id="schema_ExtendTransactionRequest"></a>
<a id="tocSextendtransactionrequest"></a>
<a id="tocsextendtransactionrequest"></a>

```json
{
  "TransactionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|

<h2 id="tocS_FieldNameString">FieldNameString</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamestring"></a>
<a id="schema_FieldNameString"></a>
<a id="tocSfieldnamestring"></a>
<a id="tocsfieldnamestring"></a>

```json
"RESOURCE_ARN"
```

<h2 id="tocS_StringValueList">StringValueList</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelist"></a>
<a id="schema_StringValueList"></a>
<a id="tocSstringvaluelist"></a>
<a id="tocsstringvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterConditionList">FilterConditionList</h2>
<!-- backwards compatibility -->
<a id="schemafilterconditionlist"></a>
<a id="schema_FilterConditionList"></a>
<a id="tocSfilterconditionlist"></a>
<a id="tocsfilterconditionlist"></a>

```json
[
  {
    "Field": {},
    "ComparisonOperator": {},
    "StringValueList": {}
  }
]
```

<h2 id="tocS_GetDataCellsFilterRequest">GetDataCellsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatacellsfilterrequest"></a>
<a id="schema_GetDataCellsFilterRequest"></a>
<a id="tocSgetdatacellsfilterrequest"></a>
<a id="tocsgetdatacellsfilterrequest"></a>

```json
{
  "TableCatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableCatalogId|object|true|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_GetDataLakeSettingsRequest">GetDataLakeSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatalakesettingsrequest"></a>
<a id="schema_GetDataLakeSettingsRequest"></a>
<a id="tocSgetdatalakesettingsrequest"></a>
<a id="tocsgetdatalakesettingsrequest"></a>

```json
{
  "CatalogId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
```

<h2 id="tocS_GetEffectivePermissionsForPathRequest">GetEffectivePermissionsForPathRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteffectivepermissionsforpathrequest"></a>
<a id="schema_GetEffectivePermissionsForPathRequest"></a>
<a id="tocSgeteffectivepermissionsforpathrequest"></a>
<a id="tocsgeteffectivepermissionsforpathrequest"></a>

```json
{
  "CatalogId": {},
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PrincipalResourcePermissionsList">PrincipalResourcePermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalresourcepermissionslist"></a>
<a id="schema_PrincipalResourcePermissionsList"></a>
<a id="tocSprincipalresourcepermissionslist"></a>
<a id="tocsprincipalresourcepermissionslist"></a>

```json
[
  {
    "Principal": {
      "DataLakePrincipalIdentifier": {}
    },
    "Resource": {
      "Catalog": {},
      "Database": {
        "CatalogId": {},
        "Name": {}
      },
      "Table": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "TableWildcard": {}
      },
      "TableWithColumns": {
        "CatalogId": {},
        "DatabaseName": {},
        "Name": {},
        "ColumnNames": {},
        "ColumnWildcard": {
          "ExcludedColumnNames": {}
        }
      },
      "DataLocation": {
        "CatalogId": {},
        "ResourceArn": {}
      },
      "DataCellsFilter": {
        "TableCatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Name": {}
      },
      "LFTag": {
        "CatalogId": {},
        "TagKey": {},
        "TagValues": {}
      },
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "Expression": {}
      }
    },
    "Permissions": {},
    "PermissionsWithGrantOption": {},
    "AdditionalDetails": {
      "ResourceShare": {}
    }
  }
]
```

<h2 id="tocS_GetLFTagRequest">GetLFTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlftagrequest"></a>
<a id="schema_GetLFTagRequest"></a>
<a id="tocSgetlftagrequest"></a>
<a id="tocsgetlftagrequest"></a>

```json
{
  "CatalogId": {},
  "TagKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|

<h2 id="tocS_GetQueryStateRequestQueryIdString">GetQueryStateRequestQueryIdString</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystaterequestqueryidstring"></a>
<a id="schema_GetQueryStateRequestQueryIdString"></a>
<a id="tocSgetquerystaterequestqueryidstring"></a>
<a id="tocsgetquerystaterequestqueryidstring"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_GetQueryStateRequest">GetQueryStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystaterequest"></a>
<a id="schema_GetQueryStateRequest"></a>
<a id="tocSgetquerystaterequest"></a>
<a id="tocsgetquerystaterequest"></a>

```json
{
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|

<h2 id="tocS_QueryStateString">QueryStateString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatestring"></a>
<a id="schema_QueryStateString"></a>
<a id="tocSquerystatestring"></a>
<a id="tocsquerystatestring"></a>

```json
"PENDING"
```

<h2 id="tocS_GetQueryStatisticsRequestQueryIdString">GetQueryStatisticsRequestQueryIdString</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystatisticsrequestqueryidstring"></a>
<a id="schema_GetQueryStatisticsRequestQueryIdString"></a>
<a id="tocSgetquerystatisticsrequestqueryidstring"></a>
<a id="tocsgetquerystatisticsrequestqueryidstring"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_GetQueryStatisticsRequest">GetQueryStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetquerystatisticsrequest"></a>
<a id="schema_GetQueryStatisticsRequest"></a>
<a id="tocSgetquerystatisticsrequest"></a>
<a id="tocsgetquerystatisticsrequest"></a>

```json
{
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|

<h2 id="tocS_PlanningStatistics">PlanningStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaplanningstatistics"></a>
<a id="schema_PlanningStatistics"></a>
<a id="tocSplanningstatistics"></a>
<a id="tocsplanningstatistics"></a>

```json
{
  "EstimatedDataToScanBytes": {},
  "PlanningTimeMillis": {},
  "QueueTimeMillis": {},
  "WorkUnitsGeneratedCount": {}
}
```

Statistics related to the processing of a query statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedDataToScanBytes|object|false|none|none|
|PlanningTimeMillis|object|false|none|none|
|QueueTimeMillis|object|false|none|none|
|WorkUnitsGeneratedCount|object|false|none|none|

<h2 id="tocS_GetResourceLFTagsRequest">GetResourceLFTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcelftagsrequest"></a>
<a id="schema_GetResourceLFTagsRequest"></a>
<a id="tocSgetresourcelftagsrequest"></a>
<a id="tocsgetresourcelftagsrequest"></a>

```json
{
  "CatalogId": {},
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "ShowAssignedLFTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Resource|object|true|none|none|
|ShowAssignedLFTags|object|false|none|none|

<h2 id="tocS_PredicateString">PredicateString</h2>
<!-- backwards compatibility -->
<a id="schemapredicatestring"></a>
<a id="schema_PredicateString"></a>
<a id="tocSpredicatestring"></a>
<a id="tocspredicatestring"></a>

```json
"string"
```

<h2 id="tocS_TokenString">TokenString</h2>
<!-- backwards compatibility -->
<a id="schematokenstring"></a>
<a id="schema_TokenString"></a>
<a id="tocStokenstring"></a>
<a id="tocstokenstring"></a>

```json
"string"
```

<h2 id="tocS_GetTableObjectsRequest">GetTableObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettableobjectsrequest"></a>
<a id="schema_GetTableObjectsRequest"></a>
<a id="tocSgettableobjectsrequest"></a>
<a id="tocsgettableobjectsrequest"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "TransactionId": {},
  "QueryAsOfTime": {},
  "PartitionPredicate": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|TransactionId|object|false|none|none|
|QueryAsOfTime|object|false|none|none|
|PartitionPredicate|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PartitionedTableObjectsList">PartitionedTableObjectsList</h2>
<!-- backwards compatibility -->
<a id="schemapartitionedtableobjectslist"></a>
<a id="schema_PartitionedTableObjectsList"></a>
<a id="tocSpartitionedtableobjectslist"></a>
<a id="tocspartitionedtableobjectslist"></a>

```json
[
  {
    "PartitionValues": {},
    "Objects": {}
  }
]
```

<h2 id="tocS_PartitionValueList">PartitionValueList</h2>
<!-- backwards compatibility -->
<a id="schemapartitionvaluelist"></a>
<a id="schema_PartitionValueList"></a>
<a id="tocSpartitionvaluelist"></a>
<a id="tocspartitionvaluelist"></a>

```json
{
  "Values": {}
}
```

Contains a list of values defining partitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|true|none|none|

<h2 id="tocS_PermissionTypeList">PermissionTypeList</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontypelist"></a>
<a id="schema_PermissionTypeList"></a>
<a id="tocSpermissiontypelist"></a>
<a id="tocspermissiontypelist"></a>

```json
[
  "COLUMN_PERMISSION"
]
```

<h2 id="tocS_GetTemporaryGluePartitionCredentialsRequest">GetTemporaryGluePartitionCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettemporarygluepartitioncredentialsrequest"></a>
<a id="schema_GetTemporaryGluePartitionCredentialsRequest"></a>
<a id="tocSgettemporarygluepartitioncredentialsrequest"></a>
<a id="tocsgettemporarygluepartitioncredentialsrequest"></a>

```json
{
  "TableArn": {},
  "Partition": {
    "Values": {}
  },
  "Permissions": {},
  "DurationSeconds": {},
  "AuditContext": {
    "AdditionalAuditContext": {}
  },
  "SupportedPermissionTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableArn|object|true|none|none|
|Partition|object|true|none|none|
|Permissions|object|false|none|none|
|DurationSeconds|object|false|none|none|
|AuditContext|object|false|none|none|
|SupportedPermissionTypes|object|true|none|none|

<h2 id="tocS_GetTemporaryGlueTableCredentialsRequest">GetTemporaryGlueTableCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettemporarygluetablecredentialsrequest"></a>
<a id="schema_GetTemporaryGlueTableCredentialsRequest"></a>
<a id="tocSgettemporarygluetablecredentialsrequest"></a>
<a id="tocsgettemporarygluetablecredentialsrequest"></a>

```json
{
  "TableArn": {},
  "Permissions": {},
  "DurationSeconds": {},
  "AuditContext": {
    "AdditionalAuditContext": {}
  },
  "SupportedPermissionTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableArn|object|true|none|none|
|Permissions|object|false|none|none|
|DurationSeconds|object|false|none|none|
|AuditContext|object|false|none|none|
|SupportedPermissionTypes|object|true|none|none|

<h2 id="tocS_GetWorkUnitResultsRequestQueryIdString">GetWorkUnitResultsRequestQueryIdString</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitresultsrequestqueryidstring"></a>
<a id="schema_GetWorkUnitResultsRequestQueryIdString"></a>
<a id="tocSgetworkunitresultsrequestqueryidstring"></a>
<a id="tocsgetworkunitresultsrequestqueryidstring"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_GetWorkUnitResultsRequestWorkUnitIdLong">GetWorkUnitResultsRequestWorkUnitIdLong</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitresultsrequestworkunitidlong"></a>
<a id="schema_GetWorkUnitResultsRequestWorkUnitIdLong"></a>
<a id="tocSgetworkunitresultsrequestworkunitidlong"></a>
<a id="tocsgetworkunitresultsrequestworkunitidlong"></a>

```json
0
```

<h2 id="tocS_SyntheticGetWorkUnitResultsRequestWorkUnitTokenString">SyntheticGetWorkUnitResultsRequestWorkUnitTokenString</h2>
<!-- backwards compatibility -->
<a id="schemasyntheticgetworkunitresultsrequestworkunittokenstring"></a>
<a id="schema_SyntheticGetWorkUnitResultsRequestWorkUnitTokenString"></a>
<a id="tocSsyntheticgetworkunitresultsrequestworkunittokenstring"></a>
<a id="tocssyntheticgetworkunitresultsrequestworkunittokenstring"></a>

```json
"password"
```

<h2 id="tocS_GetWorkUnitResultsRequest">GetWorkUnitResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitresultsrequest"></a>
<a id="schema_GetWorkUnitResultsRequest"></a>
<a id="tocSgetworkunitresultsrequest"></a>
<a id="tocsgetworkunitresultsrequest"></a>

```json
{
  "QueryId": {},
  "WorkUnitId": {},
  "WorkUnitToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|
|WorkUnitId|object|true|none|none|
|WorkUnitToken|object|true|none|none|

<h2 id="tocS_ResultStream">ResultStream</h2>
<!-- backwards compatibility -->
<a id="schemaresultstream"></a>
<a id="schema_ResultStream"></a>
<a id="tocSresultstream"></a>
<a id="tocsresultstream"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_GetWorkUnitsRequestQueryIdString">GetWorkUnitsRequestQueryIdString</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitsrequestqueryidstring"></a>
<a id="schema_GetWorkUnitsRequestQueryIdString"></a>
<a id="tocSgetworkunitsrequestqueryidstring"></a>
<a id="tocsgetworkunitsrequestqueryidstring"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_GetWorkUnitsRequest">GetWorkUnitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkunitsrequest"></a>
<a id="schema_GetWorkUnitsRequest"></a>
<a id="tocSgetworkunitsrequest"></a>
<a id="tocsgetworkunitsrequest"></a>

```json
{
  "NextToken": {},
  "PageSize": {},
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PageSize|object|false|none|none|
|QueryId|object|true|none|none|

<h2 id="tocS_QueryIdString">QueryIdString</h2>
<!-- backwards compatibility -->
<a id="schemaqueryidstring"></a>
<a id="schema_QueryIdString"></a>
<a id="tocSqueryidstring"></a>
<a id="tocsqueryidstring"></a>

```json
"string"
```

<h2 id="tocS_WorkUnitRangeList">WorkUnitRangeList</h2>
<!-- backwards compatibility -->
<a id="schemaworkunitrangelist"></a>
<a id="schema_WorkUnitRangeList"></a>
<a id="tocSworkunitrangelist"></a>
<a id="tocsworkunitrangelist"></a>

```json
[
  {
    "WorkUnitIdMax": {},
    "WorkUnitIdMin": {},
    "WorkUnitToken": {}
  }
]
```

<h2 id="tocS_GrantPermissionsRequest">GrantPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantpermissionsrequest"></a>
<a id="schema_GrantPermissionsRequest"></a>
<a id="tocSgrantpermissionsrequest"></a>
<a id="tocsgrantpermissionsrequest"></a>

```json
{
  "CatalogId": {},
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": {},
  "PermissionsWithGrantOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Principal|object|true|none|none|
|Resource|object|true|none|none|
|Permissions|object|true|none|none|
|PermissionsWithGrantOption|object|false|none|none|

<h2 id="tocS_KeyString">KeyString</h2>
<!-- backwards compatibility -->
<a id="schemakeystring"></a>
<a id="schema_KeyString"></a>
<a id="tocSkeystring"></a>
<a id="tocskeystring"></a>

```json
"string"
```

<h2 id="tocS_LFTagError">LFTagError</h2>
<!-- backwards compatibility -->
<a id="schemalftagerror"></a>
<a id="schema_LFTagError"></a>
<a id="tocSlftagerror"></a>
<a id="tocslftagerror"></a>

```json
{
  "LFTag": {
    "CatalogId": {},
    "TagKey": {},
    "TagValues": {}
  },
  "Error": {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
}
```

A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LFTag|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"DATABASE"
```

<h2 id="tocS_LastModifiedTimestamp">LastModifiedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemalastmodifiedtimestamp"></a>
<a id="schema_LastModifiedTimestamp"></a>
<a id="tocSlastmodifiedtimestamp"></a>
<a id="tocslastmodifiedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ListDataCellsFilterRequest">ListDataCellsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatacellsfilterrequest"></a>
<a id="schema_ListDataCellsFilterRequest"></a>
<a id="tocSlistdatacellsfilterrequest"></a>
<a id="tocslistdatacellsfilterrequest"></a>

```json
{
  "Table": {
    "CatalogId": {},
    "DatabaseName": {},
    "Name": {},
    "TableWildcard": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ResourceShareType">ResourceShareType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharetype"></a>
<a id="schema_ResourceShareType"></a>
<a id="tocSresourcesharetype"></a>
<a id="tocsresourcesharetype"></a>

```json
"FOREIGN"
```

<h2 id="tocS_ListLFTagsRequest">ListLFTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlftagsrequest"></a>
<a id="schema_ListLFTagsRequest"></a>
<a id="tocSlistlftagsrequest"></a>
<a id="tocslistlftagsrequest"></a>

```json
{
  "CatalogId": {},
  "ResourceShareType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|ResourceShareType|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TrueFalseString">TrueFalseString</h2>
<!-- backwards compatibility -->
<a id="schematruefalsestring"></a>
<a id="schema_TrueFalseString"></a>
<a id="tocStruefalsestring"></a>
<a id="tocstruefalsestring"></a>

```json
"strin"
```

<h2 id="tocS_ListPermissionsRequest">ListPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsrequest"></a>
<a id="schema_ListPermissionsRequest"></a>
<a id="tocSlistpermissionsrequest"></a>
<a id="tocslistpermissionsrequest"></a>

```json
{
  "CatalogId": {},
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "ResourceType": {},
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "NextToken": {},
  "MaxResults": {},
  "IncludeRelated": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Principal|object|false|none|none|
|ResourceType|object|false|none|none|
|Resource|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|IncludeRelated|object|false|none|none|

<h2 id="tocS_ListResourcesRequest">ListResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesrequest"></a>
<a id="schema_ListResourcesRequest"></a>
<a id="tocSlistresourcesrequest"></a>
<a id="tocslistresourcesrequest"></a>

```json
{
  "FilterConditionList": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterConditionList|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResourceInfoList">ResourceInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinfolist"></a>
<a id="schema_ResourceInfoList"></a>
<a id="tocSresourceinfolist"></a>
<a id="tocsresourceinfolist"></a>

```json
[
  {
    "ResourceArn": {},
    "RoleArn": {},
    "LastModified": {},
    "WithFederation": {}
  }
]
```

<h2 id="tocS_OptimizerType">OptimizerType</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizertype"></a>
<a id="schema_OptimizerType"></a>
<a id="tocSoptimizertype"></a>
<a id="tocsoptimizertype"></a>

```json
"COMPACTION"
```

<h2 id="tocS_ListTableStorageOptimizersRequest">ListTableStorageOptimizersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablestorageoptimizersrequest"></a>
<a id="schema_ListTableStorageOptimizersRequest"></a>
<a id="tocSlisttablestorageoptimizersrequest"></a>
<a id="tocslisttablestorageoptimizersrequest"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "StorageOptimizerType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|StorageOptimizerType|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StorageOptimizerList">StorageOptimizerList</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizerlist"></a>
<a id="schema_StorageOptimizerList"></a>
<a id="tocSstorageoptimizerlist"></a>
<a id="tocsstorageoptimizerlist"></a>

```json
[
  {
    "StorageOptimizerType": {},
    "Config": {
      "property1": "string",
      "property2": "string"
    },
    "ErrorMessage": {},
    "Warnings": {},
    "LastRunDetails": {}
  }
]
```

<h2 id="tocS_TransactionStatusFilter">TransactionStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatusfilter"></a>
<a id="schema_TransactionStatusFilter"></a>
<a id="tocStransactionstatusfilter"></a>
<a id="tocstransactionstatusfilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListTransactionsRequest">ListTransactionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttransactionsrequest"></a>
<a id="schema_ListTransactionsRequest"></a>
<a id="tocSlisttransactionsrequest"></a>
<a id="tocslisttransactionsrequest"></a>

```json
{
  "CatalogId": {},
  "StatusFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|StatusFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TransactionDescriptionList">TransactionDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schematransactiondescriptionlist"></a>
<a id="schema_TransactionDescriptionList"></a>
<a id="tocStransactiondescriptionlist"></a>
<a id="tocstransactiondescriptionlist"></a>

```json
[
  {
    "TransactionId": {},
    "TransactionStatus": {},
    "TransactionStartTime": {},
    "TransactionEndTime": {}
  }
]
```

<h2 id="tocS_MessageString">MessageString</h2>
<!-- backwards compatibility -->
<a id="schemamessagestring"></a>
<a id="schema_MessageString"></a>
<a id="tocSmessagestring"></a>
<a id="tocsmessagestring"></a>

```json
"string"
```

<h2 id="tocS_ParametersMapValue">ParametersMapValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametersmapvalue"></a>
<a id="schema_ParametersMapValue"></a>
<a id="tocSparametersmapvalue"></a>
<a id="tocsparametersmapvalue"></a>

```json
"string"
```

<h2 id="tocS_TableObjectList">TableObjectList</h2>
<!-- backwards compatibility -->
<a id="schematableobjectlist"></a>
<a id="schema_TableObjectList"></a>
<a id="tocStableobjectlist"></a>
<a id="tocstableobjectlist"></a>

```json
[
  {
    "Uri": {},
    "ETag": {},
    "Size": {}
  }
]
```

<h2 id="tocS_PartitionObjects">PartitionObjects</h2>
<!-- backwards compatibility -->
<a id="schemapartitionobjects"></a>
<a id="schema_PartitionObjects"></a>
<a id="tocSpartitionobjects"></a>
<a id="tocspartitionobjects"></a>

```json
{
  "PartitionValues": {},
  "Objects": {}
}
```

A structure containing a list of partition values and table objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartitionValues|object|false|none|none|
|Objects|object|false|none|none|

<h2 id="tocS_PartitionValueString">PartitionValueString</h2>
<!-- backwards compatibility -->
<a id="schemapartitionvaluestring"></a>
<a id="schema_PartitionValueString"></a>
<a id="tocSpartitionvaluestring"></a>
<a id="tocspartitionvaluestring"></a>

```json
"string"
```

<h2 id="tocS_PrincipalPermissions">PrincipalPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalpermissions"></a>
<a id="schema_PrincipalPermissions"></a>
<a id="tocSprincipalpermissions"></a>
<a id="tocsprincipalpermissions"></a>

```json
{
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Permissions": {}
}
```

Permissions granted to a principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principal|object|false|none|none|
|Permissions|object|false|none|none|

<h2 id="tocS_PrincipalResourcePermissions">PrincipalResourcePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalresourcepermissions"></a>
<a id="schema_PrincipalResourcePermissions"></a>
<a id="tocSprincipalresourcepermissions"></a>
<a id="tocsprincipalresourcepermissions"></a>

```json
{
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": {},
  "PermissionsWithGrantOption": {},
  "AdditionalDetails": {
    "ResourceShare": {}
  }
}
```

The permissions granted or revoked on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principal|object|false|none|none|
|Resource|object|false|none|none|
|Permissions|object|false|none|none|
|PermissionsWithGrantOption|object|false|none|none|
|AdditionalDetails|object|false|none|none|

<h2 id="tocS_PutDataLakeSettingsRequest">PutDataLakeSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdatalakesettingsrequest"></a>
<a id="schema_PutDataLakeSettingsRequest"></a>
<a id="tocSputdatalakesettingsrequest"></a>
<a id="tocsputdatalakesettingsrequest"></a>

```json
{
  "CatalogId": {},
  "DataLakeSettings": {
    "DataLakeAdmins": {},
    "CreateDatabaseDefaultPermissions": {},
    "CreateTableDefaultPermissions": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "TrustedResourceOwners": {},
    "AllowExternalDataFiltering": {},
    "ExternalDataFilteringAllowList": {},
    "AuthorizedSessionTagValueList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DataLakeSettings|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_QueryPlanningContext">QueryPlanningContext</h2>
<!-- backwards compatibility -->
<a id="schemaqueryplanningcontext"></a>
<a id="schema_QueryPlanningContext"></a>
<a id="tocSqueryplanningcontext"></a>
<a id="tocsqueryplanningcontext"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "QueryAsOfTime": {},
  "QueryParameters": {
    "property1": "string",
    "property2": "string"
  },
  "TransactionId": {}
}
```

A structure containing information about the query plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|QueryAsOfTime|object|false|none|none|
|QueryParameters|object|false|none|none|
|TransactionId|object|false|none|none|

<h2 id="tocS_RAMResourceShareArn">RAMResourceShareArn</h2>
<!-- backwards compatibility -->
<a id="schemaramresourcesharearn"></a>
<a id="schema_RAMResourceShareArn"></a>
<a id="tocSramresourcesharearn"></a>
<a id="tocsramresourcesharearn"></a>

```json
"string"
```

<h2 id="tocS_RegisterResourceRequest">RegisterResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterresourcerequest"></a>
<a id="schema_RegisterResourceRequest"></a>
<a id="tocSregisterresourcerequest"></a>
<a id="tocsregisterresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "UseServiceLinkedRole": {},
  "RoleArn": {},
  "WithFederation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|UseServiceLinkedRole|object|false|none|none|
|RoleArn|object|false|none|none|
|WithFederation|object|false|none|none|

<h2 id="tocS_RemoveLFTagsFromResourceRequest">RemoveLFTagsFromResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovelftagsfromresourcerequest"></a>
<a id="schema_RemoveLFTagsFromResourceRequest"></a>
<a id="tocSremovelftagsfromresourcerequest"></a>
<a id="tocsremovelftagsfromresourcerequest"></a>

```json
{
  "CatalogId": {},
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "LFTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Resource|object|true|none|none|
|LFTags|object|true|none|none|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"string"
```

<h2 id="tocS_RevokePermissionsRequest">RevokePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokepermissionsrequest"></a>
<a id="schema_RevokePermissionsRequest"></a>
<a id="tocSrevokepermissionsrequest"></a>
<a id="tocsrevokepermissionsrequest"></a>

```json
{
  "CatalogId": {},
  "Principal": {
    "DataLakePrincipalIdentifier": {}
  },
  "Resource": {
    "Catalog": {},
    "Database": {
      "CatalogId": {},
      "Name": {}
    },
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "TableWithColumns": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "ColumnNames": {},
      "ColumnWildcard": {
        "ExcludedColumnNames": {}
      }
    },
    "DataLocation": {
      "CatalogId": {},
      "ResourceArn": {}
    },
    "DataCellsFilter": {
      "TableCatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Name": {}
    },
    "LFTag": {
      "CatalogId": {},
      "TagKey": {},
      "TagValues": {}
    },
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "Expression": {}
    }
  },
  "Permissions": {},
  "PermissionsWithGrantOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|Principal|object|true|none|none|
|Resource|object|true|none|none|
|Permissions|object|true|none|none|
|PermissionsWithGrantOption|object|false|none|none|

<h2 id="tocS_SearchPageSize">SearchPageSize</h2>
<!-- backwards compatibility -->
<a id="schemasearchpagesize"></a>
<a id="schema_SearchPageSize"></a>
<a id="tocSsearchpagesize"></a>
<a id="tocssearchpagesize"></a>

```json
1
```

<h2 id="tocS_SearchDatabasesByLFTagsRequest">SearchDatabasesByLFTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchdatabasesbylftagsrequest"></a>
<a id="schema_SearchDatabasesByLFTagsRequest"></a>
<a id="tocSsearchdatabasesbylftagsrequest"></a>
<a id="tocssearchdatabasesbylftagsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "CatalogId": {},
  "Expression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|CatalogId|object|false|none|none|
|Expression|object|true|none|none|

<h2 id="tocS_SearchTablesByLFTagsRequest">SearchTablesByLFTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchtablesbylftagsrequest"></a>
<a id="schema_SearchTablesByLFTagsRequest"></a>
<a id="tocSsearchtablesbylftagsrequest"></a>
<a id="tocssearchtablesbylftagsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "CatalogId": {},
  "Expression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|CatalogId|object|false|none|none|
|Expression|object|true|none|none|

<h2 id="tocS_TableLFTagsList">TableLFTagsList</h2>
<!-- backwards compatibility -->
<a id="schematablelftagslist"></a>
<a id="schema_TableLFTagsList"></a>
<a id="tocStablelftagslist"></a>
<a id="tocstablelftagslist"></a>

```json
[
  {
    "Table": {
      "CatalogId": {},
      "DatabaseName": {},
      "Name": {},
      "TableWildcard": {}
    },
    "LFTagOnDatabase": {},
    "LFTagsOnTable": {},
    "LFTagsOnColumns": {}
  }
]
```

<h2 id="tocS_SyntheticStartQueryPlanningRequestQueryString">SyntheticStartQueryPlanningRequestQueryString</h2>
<!-- backwards compatibility -->
<a id="schemasyntheticstartqueryplanningrequestquerystring"></a>
<a id="schema_SyntheticStartQueryPlanningRequestQueryString"></a>
<a id="tocSsyntheticstartqueryplanningrequestquerystring"></a>
<a id="tocssyntheticstartqueryplanningrequestquerystring"></a>

```json
"password"
```

<h2 id="tocS_StartQueryPlanningRequest">StartQueryPlanningRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryplanningrequest"></a>
<a id="schema_StartQueryPlanningRequest"></a>
<a id="tocSstartqueryplanningrequest"></a>
<a id="tocsstartqueryplanningrequest"></a>

```json
{
  "QueryPlanningContext": {
    "CatalogId": {},
    "DatabaseName": {},
    "QueryAsOfTime": {},
    "QueryParameters": {
      "property1": "string",
      "property2": "string"
    },
    "TransactionId": {}
  },
  "QueryString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryPlanningContext|object|true|none|none|
|QueryString|object|true|none|none|

<h2 id="tocS_TransactionType">TransactionType</h2>
<!-- backwards compatibility -->
<a id="schematransactiontype"></a>
<a id="schema_TransactionType"></a>
<a id="tocStransactiontype"></a>
<a id="tocstransactiontype"></a>

```json
"READ_AND_WRITE"
```

<h2 id="tocS_StartTransactionRequest">StartTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttransactionrequest"></a>
<a id="schema_StartTransactionRequest"></a>
<a id="tocSstarttransactionrequest"></a>
<a id="tocsstarttransactionrequest"></a>

```json
{
  "TransactionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionType|object|false|none|none|

<h2 id="tocS_StorageOptimizer">StorageOptimizer</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizer"></a>
<a id="schema_StorageOptimizer"></a>
<a id="tocSstorageoptimizer"></a>
<a id="tocsstorageoptimizer"></a>

```json
{
  "StorageOptimizerType": {},
  "Config": {
    "property1": "string",
    "property2": "string"
  },
  "ErrorMessage": {},
  "Warnings": {},
  "LastRunDetails": {}
}
```

A structure describing the configuration and details of a storage optimizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageOptimizerType|object|false|none|none|
|Config|object|false|none|none|
|ErrorMessage|object|false|none|none|
|Warnings|object|false|none|none|
|LastRunDetails|object|false|none|none|

<h2 id="tocS_StorageOptimizerConfigValue">StorageOptimizerConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizerconfigvalue"></a>
<a id="schema_StorageOptimizerConfigValue"></a>
<a id="tocSstorageoptimizerconfigvalue"></a>
<a id="tocsstorageoptimizerconfigvalue"></a>

```json
"string"
```

<h2 id="tocS_StorageOptimizerConfigKey">StorageOptimizerConfigKey</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizerconfigkey"></a>
<a id="schema_StorageOptimizerConfigKey"></a>
<a id="tocSstorageoptimizerconfigkey"></a>
<a id="tocsstorageoptimizerconfigkey"></a>

```json
"string"
```

<h2 id="tocS_StorageOptimizerConfigMap">StorageOptimizerConfigMap</h2>
<!-- backwards compatibility -->
<a id="schemastorageoptimizerconfigmap"></a>
<a id="schema_StorageOptimizerConfigMap"></a>
<a id="tocSstorageoptimizerconfigmap"></a>
<a id="tocsstorageoptimizerconfigmap"></a>

```json
{
  "property1": {
    "property1": "string",
    "property2": "string"
  },
  "property2": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StorageOptimizerConfig](#schemastorageoptimizerconfig)|false|none|none|

<h2 id="tocS_StringValue">StringValue</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue"></a>
<a id="schema_StringValue"></a>
<a id="tocSstringvalue"></a>
<a id="tocsstringvalue"></a>

```json
"string"
```

<h2 id="tocS_TaggedTable">TaggedTable</h2>
<!-- backwards compatibility -->
<a id="schemataggedtable"></a>
<a id="schema_TaggedTable"></a>
<a id="tocStaggedtable"></a>
<a id="tocstaggedtable"></a>

```json
{
  "Table": {
    "CatalogId": {},
    "DatabaseName": {},
    "Name": {},
    "TableWildcard": {}
  },
  "LFTagOnDatabase": {},
  "LFTagsOnTable": {},
  "LFTagsOnColumns": {}
}
```

A structure describing a table resource with LF-tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|
|LFTagOnDatabase|object|false|none|none|
|LFTagsOnTable|object|false|none|none|
|LFTagsOnColumns|object|false|none|none|

<h2 id="tocS_TableObject">TableObject</h2>
<!-- backwards compatibility -->
<a id="schematableobject"></a>
<a id="schema_TableObject"></a>
<a id="tocStableobject"></a>
<a id="tocstableobject"></a>

```json
{
  "Uri": {},
  "ETag": {},
  "Size": {}
}
```

Specifies the details of a governed table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|false|none|none|
|ETag|object|false|none|none|
|Size|object|false|none|none|

<h2 id="tocS_UpdateDataCellsFilterRequest">UpdateDataCellsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatacellsfilterrequest"></a>
<a id="schema_UpdateDataCellsFilterRequest"></a>
<a id="tocSupdatedatacellsfilterrequest"></a>
<a id="tocsupdatedatacellsfilterrequest"></a>

```json
{
  "TableData": {
    "TableCatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Name": {},
    "RowFilter": {
      "FilterExpression": {},
      "AllRowsWildcard": {}
    },
    "ColumnNames": {},
    "ColumnWildcard": {
      "ExcludedColumnNames": {}
    },
    "VersionId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableData|object|true|none|none|

<h2 id="tocS_UpdateLFTagRequest">UpdateLFTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelftagrequest"></a>
<a id="schema_UpdateLFTagRequest"></a>
<a id="tocSupdatelftagrequest"></a>
<a id="tocsupdatelftagrequest"></a>

```json
{
  "CatalogId": {},
  "TagKey": {},
  "TagValuesToDelete": {},
  "TagValuesToAdd": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|TagKey|object|true|none|none|
|TagValuesToDelete|object|false|none|none|
|TagValuesToAdd|object|false|none|none|

<h2 id="tocS_UpdateResourceRequest">UpdateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcerequest"></a>
<a id="schema_UpdateResourceRequest"></a>
<a id="tocSupdateresourcerequest"></a>
<a id="tocsupdateresourcerequest"></a>

```json
{
  "RoleArn": {},
  "ResourceArn": {},
  "WithFederation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|ResourceArn|object|true|none|none|
|WithFederation|object|false|none|none|

<h2 id="tocS_WriteOperationList">WriteOperationList</h2>
<!-- backwards compatibility -->
<a id="schemawriteoperationlist"></a>
<a id="schema_WriteOperationList"></a>
<a id="tocSwriteoperationlist"></a>
<a id="tocswriteoperationlist"></a>

```json
[
  {
    "AddObject": {
      "Uri": {},
      "ETag": {},
      "Size": {},
      "PartitionValues": {}
    },
    "DeleteObject": {
      "Uri": {},
      "ETag": {},
      "PartitionValues": {}
    }
  }
]
```

<h2 id="tocS_UpdateTableObjectsRequest">UpdateTableObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableobjectsrequest"></a>
<a id="schema_UpdateTableObjectsRequest"></a>
<a id="tocSupdatetableobjectsrequest"></a>
<a id="tocsupdatetableobjectsrequest"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "TransactionId": {},
  "WriteOperations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|TransactionId|object|false|none|none|
|WriteOperations|object|true|none|none|

<h2 id="tocS_UpdateTableStorageOptimizerRequest">UpdateTableStorageOptimizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablestorageoptimizerrequest"></a>
<a id="schema_UpdateTableStorageOptimizerRequest"></a>
<a id="tocSupdatetablestorageoptimizerrequest"></a>
<a id="tocsupdatetablestorageoptimizerrequest"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "StorageOptimizerConfig": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|StorageOptimizerConfig|object|true|none|none|

<h2 id="tocS_ValueString">ValueString</h2>
<!-- backwards compatibility -->
<a id="schemavaluestring"></a>
<a id="schema_ValueString"></a>
<a id="tocSvaluestring"></a>
<a id="tocsvaluestring"></a>

```json
"string"
```

<h2 id="tocS_WorkUnitIdLong">WorkUnitIdLong</h2>
<!-- backwards compatibility -->
<a id="schemaworkunitidlong"></a>
<a id="schema_WorkUnitIdLong"></a>
<a id="tocSworkunitidlong"></a>
<a id="tocsworkunitidlong"></a>

```json
0
```

<h2 id="tocS_WorkUnitTokenString">WorkUnitTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaworkunittokenstring"></a>
<a id="schema_WorkUnitTokenString"></a>
<a id="tocSworkunittokenstring"></a>
<a id="tocsworkunittokenstring"></a>

```json
"string"
```

<h2 id="tocS_WorkUnitRange">WorkUnitRange</h2>
<!-- backwards compatibility -->
<a id="schemaworkunitrange"></a>
<a id="schema_WorkUnitRange"></a>
<a id="tocSworkunitrange"></a>
<a id="tocsworkunitrange"></a>

```json
{
  "WorkUnitIdMax": {},
  "WorkUnitIdMin": {},
  "WorkUnitToken": {}
}
```

Defines the valid range of work unit IDs for querying the execution service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkUnitIdMax|object|true|none|none|
|WorkUnitIdMin|object|true|none|none|
|WorkUnitToken|object|true|none|none|
