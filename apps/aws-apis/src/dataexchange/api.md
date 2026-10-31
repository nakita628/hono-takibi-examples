<h1 id="aws-data-exchange">AWS Data Exchange v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p> <p>As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIs to download or copy your entitled data sets to Amazon Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and machine learning services.</p> <p>As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the <i>AWS Data Exchange User Guide</i>.</p> <p>A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set. A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets.</p>

Base URLs:

* <a href="http://dataexchange.us-east-1.amazonaws.com">http://dataexchange.us-east-1.amazonaws.com</a> - The AWS Data Exchange multi-region endpoint

* <a href="https://dataexchange.us-east-1.amazonaws.com">https://dataexchange.us-east-1.amazonaws.com</a> - The AWS Data Exchange multi-region endpoint

* <a href="http://dataexchange.cn-north-1.amazonaws.com.cn">http://dataexchange.cn-north-1.amazonaws.com.cn</a> - The AWS Data Exchange endpoint for China (Beijing) and China (Ningxia)

* <a href="https://dataexchange.cn-north-1.amazonaws.com.cn">https://dataexchange.cn-north-1.amazonaws.com.cn</a> - The AWS Data Exchange endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dataexchange/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-data-exchange-default">Default</h1>

## GetJob

<a id="opIdGetJob"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/jobs/{JobId}`

This operation returns information about a job.

<h3 id="getjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|path|string|true|The unique identifier for a job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {},
      "EventActionArn": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "ApiSpecificationUploadUrl": {},
      "ApiSpecificationUploadUrlExpiresAt": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Errors": {},
  "Id": {},
  "State": {},
  "Type": {},
  "UpdatedAt": {}
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

<h3 id="getjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobResponse](#schemagetjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelJob

<a id="opIdCancelJob"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/jobs/{JobId}`

This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.

<h3 id="canceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|path|string|true|The unique identifier for a job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="canceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartJob

<a id="opIdStartJob"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/jobs/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /v1/jobs/{JobId}`

This operation starts a job.

<h3 id="startjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|path|string|true|The unique identifier for a job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

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

<h3 id="startjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartJobResponse](#schemastartjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataSets

<a id="opIdListDataSets"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets`

This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results returned by a single call.|
|nextToken|query|string|false|The token value retrieved from a previous call to access the next page of results.|
|origin|query|string|false|A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "DataSets": {},
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

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataSetsResponse](#schemalistdatasetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSet

<a id="opIdCreateDataSet"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AssetType": "S3_SNAPSHOT",
    "Description": "string",
    "Name": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/data-sets`

This operation creates a data set.

> Body parameter

```json
{
  "AssetType": "S3_SNAPSHOT",
  "Description": "string",
  "Name": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|» AssetType|body|string|true|The type of asset that is added to a data set.|
|» Description|body|string|true|A description for the data set. This value can be up to 16,348 characters long.|
|» Name|body|string|true|The name of the data set.|
|» Tags|body|object|false|A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AssetType|S3_SNAPSHOT|
|» AssetType|REDSHIFT_DATA_SHARE|
|» AssetType|API_GATEWAY_API|
|» AssetType|S3_DATA_ACCESS|
|» AssetType|LAKE_FORMATION_DATA_PERMISSION|

> Example responses

> 201 Response

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDataSetResponse](#schemacreatedatasetresponse)|
|480|480|ServiceLimitExceededException|[ServiceLimitExceededException](#schemaservicelimitexceededexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventActions

<a id="opIdListEventActions"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/event-actions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/event-actions`

This operation lists your event actions.

<h3 id="listeventactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventSourceId|query|string|false|The unique identifier for the event source.|
|maxResults|query|integer|false|The maximum number of results returned by a single call.|
|nextToken|query|string|false|The token value retrieved from a previous call to access the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "EventActions": {},
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

<h3 id="listeventactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventActionsResponse](#schemalisteventactionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventAction

<a id="opIdCreateEventAction"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/event-actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Action": {
      "ExportRevisionToS3": {
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionDestination": {
          "Bucket": {},
          "KeyPattern": {}
        }
      }
    },
    "Event": {
      "RevisionPublished": {
        "DataSetId": {}
      }
    }
  }'
```

`POST /v1/event-actions`

This operation creates an event action.

> Body parameter

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  }
}
```

<h3 id="createeventaction-parameters">Parameters</h3>

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
|» Action|body|object|true|What occurs after a certain event.|
|» » ExportRevisionToS3|body|object|false|none|
|» » » Encryption|body|object|false|none|
|» » » » KmsKeyArn|body|object|false|none|
|» » » » Type|body|object|true|none|
|» » » RevisionDestination|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » KeyPattern|body|object|false|none|
|» Event|body|object|true|What occurs to start an action.|
|» » RevisionPublished|body|object|false|none|
|» » » DataSetId|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
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

<h3 id="createeventaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateEventActionResponse](#schemacreateeventactionresponse)|
|480|480|ServiceLimitExceededException|[ServiceLimitExceededException](#schemaservicelimitexceededexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/jobs`

This operation lists your jobs sorted by CreatedAt in descending order.

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataSetId|query|string|false|The unique identifier for a data set.|
|maxResults|query|integer|false|The maximum number of results returned by a single call.|
|nextToken|query|string|false|The token value retrieved from a previous call to access the next page of results.|
|revisionId|query|string|false|The unique identifier for a revision.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Jobs": {},
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

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResponse](#schemalistjobsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJob

<a id="opIdCreateJob"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Details": {
      "ExportAssetToSignedUrl": {
        "AssetId": {},
        "DataSetId": {},
        "RevisionId": {}
      },
      "ExportAssetsToS3": {
        "AssetDestinations": {},
        "DataSetId": {},
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionId": {}
      },
      "ExportRevisionsToS3": {
        "DataSetId": {},
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionDestinations": {}
      },
      "ImportAssetFromSignedUrl": {
        "AssetName": {},
        "DataSetId": {},
        "Md5Hash": {},
        "RevisionId": {}
      },
      "ImportAssetsFromS3": {
        "AssetSources": {},
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetsFromRedshiftDataShares": {
        "AssetSources": {},
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetFromApiGatewayApi": {
        "ApiDescription": {},
        "ApiId": {},
        "ApiKey": {},
        "ApiName": {},
        "ApiSpecificationMd5Hash": {},
        "DataSetId": {},
        "ProtocolType": {},
        "RevisionId": {},
        "Stage": {}
      },
      "CreateS3DataAccessFromS3Bucket": {
        "AssetSource": {
          "Bucket": {},
          "KeyPrefixes": {},
          "Keys": {},
          "KmsKeysToGrant": {}
        },
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetsFromLakeFormationTagPolicy": {
        "CatalogId": {},
        "Database": {
          "Expression": {},
          "Permissions": {}
        },
        "Table": {
          "Expression": {},
          "Permissions": {}
        },
        "RoleArn": {},
        "DataSetId": {},
        "RevisionId": {}
      }
    },
    "Type": "IMPORT_ASSETS_FROM_S3"
  }'
```

`POST /v1/jobs`

This operation creates a job.

> Body parameter

```json
{
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Type": "IMPORT_ASSETS_FROM_S3"
}
```

<h3 id="createjob-parameters">Parameters</h3>

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
|» Details|body|object|true|The details for the request.|
|» » ExportAssetToSignedUrl|body|object|false|none|
|» » » AssetId|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ExportAssetsToS3|body|object|false|none|
|» » » AssetDestinations|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » Encryption|body|object|false|none|
|» » » » KmsKeyArn|body|object|false|none|
|» » » » Type|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ExportRevisionsToS3|body|object|false|none|
|» » » DataSetId|body|object|true|none|
|» » » Encryption|body|object|false|none|
|» » » » KmsKeyArn|body|object|false|none|
|» » » » Type|body|object|true|none|
|» » » RevisionDestinations|body|object|true|none|
|» » ImportAssetFromSignedUrl|body|object|false|none|
|» » » AssetName|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » Md5Hash|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ImportAssetsFromS3|body|object|false|none|
|» » » AssetSources|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ImportAssetsFromRedshiftDataShares|body|object|false|none|
|» » » AssetSources|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ImportAssetFromApiGatewayApi|body|object|false|none|
|» » » ApiDescription|body|object|false|none|
|» » » ApiId|body|object|true|none|
|» » » ApiKey|body|object|false|none|
|» » » ApiName|body|object|true|none|
|» » » ApiSpecificationMd5Hash|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » ProtocolType|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » » Stage|body|object|true|none|
|» » CreateS3DataAccessFromS3Bucket|body|object|false|none|
|» » » AssetSource|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » KeyPrefixes|body|object|false|none|
|» » » » Keys|body|object|false|none|
|» » » » KmsKeysToGrant|body|object|false|none|
|» » » DataSetId|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» » ImportAssetsFromLakeFormationTagPolicy|body|object|false|none|
|» » » CatalogId|body|object|true|none|
|» » » Database|body|object|false|none|
|» » » » Expression|body|object|true|none|
|» » » » Permissions|body|object|true|none|
|» » » Table|body|object|false|none|
|» » » » Expression|body|object|true|none|
|» » » » Permissions|body|object|true|none|
|» » » RoleArn|body|object|true|none|
|» » » DataSetId|body|object|true|none|
|» » » RevisionId|body|object|true|none|
|» Type|body|string|true|The type of job to be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|IMPORT_ASSETS_FROM_S3|
|» Type|IMPORT_ASSET_FROM_SIGNED_URL|
|» Type|EXPORT_ASSETS_TO_S3|
|» Type|EXPORT_ASSET_TO_SIGNED_URL|
|» Type|EXPORT_REVISIONS_TO_S3|
|» Type|IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES|
|» Type|IMPORT_ASSET_FROM_API_GATEWAY_API|
|» Type|CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET|
|» Type|IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY|

> Example responses

> 201 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {},
      "EventActionArn": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "ApiSpecificationUploadUrl": {},
      "ApiSpecificationUploadUrlExpiresAt": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Errors": {},
  "Id": {},
  "State": {},
  "Type": {},
  "UpdatedAt": {}
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

<h3 id="createjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateJobResponse](#schemacreatejobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataSetRevisions

<a id="opIdListDataSetRevisions"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets/{DataSetId}/revisions`

This operation lists a data set's revisions sorted by CreatedAt in descending order.

<h3 id="listdatasetrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|maxResults|query|integer|false|The maximum number of results returned by a single call.|
|nextToken|query|string|false|The token value retrieved from a previous call to access the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Revisions": {}
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

<h3 id="listdatasetrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataSetRevisionsResponse](#schemalistdatasetrevisionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRevision

<a id="opIdCreateRevision"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Comment": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/data-sets/{DataSetId}/revisions`

This operation creates a revision for a data set.

> Body parameter

```json
{
  "Comment": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Comment|body|string|false|An optional comment about the revision.|
|» Tags|body|object|false|A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 201 Response

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
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

<h3 id="createrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRevisionResponse](#schemacreaterevisionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAsset

<a id="opIdGetAsset"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}`

This operation returns information about an asset.

<h3 id="getasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AssetId|path|string|true|The unique identifier for an asset.|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "AssetDetails": {
    "S3SnapshotAsset": {
      "Size": {}
    },
    "RedshiftDataShareAsset": {
      "Arn": {}
    },
    "ApiGatewayApiAsset": {
      "ApiDescription": {},
      "ApiEndpoint": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationDownloadUrl": {},
      "ApiSpecificationDownloadUrlExpiresAt": {},
      "ProtocolType": {},
      "Stage": {}
    },
    "S3DataAccessAsset": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "S3AccessPointAlias": {},
      "S3AccessPointArn": {},
      "KmsKeysToGrant": {}
    },
    "LakeFormationDataPermissionAsset": {
      "LakeFormationDataPermissionDetails": {
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "ResourceDetails": {
            "Database": {
              "Expression": {}
            },
            "Table": {
              "Expression": {}
            }
          }
        }
      },
      "LakeFormationDataPermissionType": {},
      "Permissions": {},
      "RoleArn": {}
    }
  },
  "AssetType": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Id": {},
  "Name": {},
  "RevisionId": {},
  "SourceId": {},
  "UpdatedAt": {}
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

<h3 id="getasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssetResponse](#schemagetassetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAsset

<a id="opIdDeleteAsset"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string/assets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}`

This operation deletes an asset.

<h3 id="deleteasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AssetId|path|string|true|The unique identifier for an asset.|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deleteasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAsset

<a id="opIdUpdateAsset"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string/assets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}`

This operation updates an asset.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AssetId|path|string|true|The unique identifier for an asset.|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "AssetDetails": {
    "S3SnapshotAsset": {
      "Size": {}
    },
    "RedshiftDataShareAsset": {
      "Arn": {}
    },
    "ApiGatewayApiAsset": {
      "ApiDescription": {},
      "ApiEndpoint": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationDownloadUrl": {},
      "ApiSpecificationDownloadUrlExpiresAt": {},
      "ProtocolType": {},
      "Stage": {}
    },
    "S3DataAccessAsset": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "S3AccessPointAlias": {},
      "S3AccessPointArn": {},
      "KmsKeysToGrant": {}
    },
    "LakeFormationDataPermissionAsset": {
      "LakeFormationDataPermissionDetails": {
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "ResourceDetails": {
            "Database": {
              "Expression": {}
            },
            "Table": {
              "Expression": {}
            }
          }
        }
      },
      "LakeFormationDataPermissionType": {},
      "Permissions": {},
      "RoleArn": {}
    }
  },
  "AssetType": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Id": {},
  "Name": {},
  "RevisionId": {},
  "SourceId": {},
  "UpdatedAt": {}
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

<h3 id="updateasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssetResponse](#schemaupdateassetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataSet

<a id="opIdGetDataSet"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets/{DataSetId}`

This operation returns information about a data set.

<h3 id="getdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {}
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

<h3 id="getdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataSetResponse](#schemagetdatasetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataSet

<a id="opIdDeleteDataSet"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/data-sets/{DataSetId}`

This operation deletes a data set.

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataSet

<a id="opIdUpdateDataSet"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Name": "string"
  }'
```

`PATCH /v1/data-sets/{DataSetId}`

This operation updates a data set.

> Body parameter

```json
{
  "Description": "string",
  "Name": "string"
}
```

<h3 id="updatedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description for the data set.|
|» Name|body|string|false|The name of the data set.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "UpdatedAt": {}
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

<h3 id="updatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataSetResponse](#schemaupdatedatasetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventAction

<a id="opIdGetEventAction"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/event-actions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/event-actions/{EventActionId}`

This operation retrieves information about an event action.

<h3 id="geteventaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EventActionId|path|string|true|The unique identifier for the event action.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
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

<h3 id="geteventaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventActionResponse](#schemageteventactionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventAction

<a id="opIdDeleteEventAction"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/event-actions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/event-actions/{EventActionId}`

This operation deletes the event action.

<h3 id="deleteeventaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EventActionId|path|string|true|The unique identifier for the event action.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deleteeventaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventAction

<a id="opIdUpdateEventAction"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/event-actions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Action": {
      "ExportRevisionToS3": {
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionDestination": {
          "Bucket": {},
          "KeyPattern": {}
        }
      }
    }
  }'
```

`PATCH /v1/event-actions/{EventActionId}`

This operation updates the event action.

> Body parameter

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  }
}
```

<h3 id="updateeventaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EventActionId|path|string|true|The unique identifier for the event action.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Action|body|object|false|What occurs after a certain event.|
|» » ExportRevisionToS3|body|object|false|none|
|» » » Encryption|body|object|false|none|
|» » » » KmsKeyArn|body|object|false|none|
|» » » » Type|body|object|true|none|
|» » » RevisionDestination|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » KeyPattern|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
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

<h3 id="updateeventaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEventActionResponse](#schemaupdateeventactionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRevision

<a id="opIdGetRevision"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}`

This operation returns information about a revision.

<h3 id="getrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
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

<h3 id="getrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRevisionResponse](#schemagetrevisionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRevision

<a id="opIdDeleteRevision"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}`

This operation deletes a revision.

<h3 id="deleterevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

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

<h3 id="deleterevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRevision

<a id="opIdUpdateRevision"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Comment": "string",
    "Finalized": true
  }'
```

`PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}`

This operation updates a revision.

> Body parameter

```json
{
  "Comment": "string",
  "Finalized": true
}
```

<h3 id="updaterevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Comment|body|string|false|An optional comment about the revision.|
|» Finalized|body|boolean|false|Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
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

<h3 id="updaterevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRevisionResponse](#schemaupdaterevisionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRevisionAssets

<a id="opIdListRevisionAssets"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets`

This operation lists a revision's assets sorted alphabetically in descending order.

<h3 id="listrevisionassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|maxResults|query|integer|false|The maximum number of results returned by a single call.|
|nextToken|query|string|false|The token value retrieved from a previous call to access the next page of results.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Assets": {},
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

<h3 id="listrevisionassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRevisionAssetsResponse](#schemalistrevisionassetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

This operation lists the tags on the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

This operation tags a resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A label that consists of a customer-defined key and an optional value.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeRevision

<a id="opIdRevokeRevision"></a>

> Code samples

```bash
curl https://dataexchange.us-east-1.amazonaws.com/v1/data-sets/string/revisions/string/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RevocationComment": "stringstri"
  }'
```

`POST /v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke`

This operation revokes subscribers' access to a revision.

> Body parameter

```json
{
  "RevocationComment": "stringstri"
}
```

<h3 id="revokerevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DataSetId|path|string|true|The unique identifier for a data set.|
|RevisionId|path|string|true|The unique identifier for a revision.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RevocationComment|body|string|true|A required comment to inform subscribers of the reason their access to the revision was revoked.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
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

<h3 id="revokerevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeRevisionResponse](#schemarevokerevisionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendApiAsset

<a id="opIdSendApiAsset"></a>

> Code samples

```bash
curl 'https://dataexchange.us-east-1.amazonaws.com/v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amzn-dataexchange-asset-id: string' \
  -H 'x-amzn-dataexchange-data-set-id: string' \
  -H 'x-amzn-dataexchange-revision-id: string' \
  -d '{
    "Body": "string",
    "x-amzn-dataexchange-header-": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id`

This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.

> Body parameter

```json
{
  "Body": "string",
  "x-amzn-dataexchange-header-": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="sendapiasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|QueryStringParameters|query|object|false|Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).|
|x-amzn-dataexchange-asset-id|header|string|true|Asset ID value for the API request.|
|x-amzn-dataexchange-data-set-id|header|string|true|Data set ID value for the API request.|
|x-amzn-dataexchange-http-method|header|string|false|HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.|
|x-amzn-dataexchange-path|header|string|false|URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/{pathValue}.|
|x-amzn-dataexchange-revision-id|header|string|true|Revision ID value for the API request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|false|The request body.|
|» x-amzn-dataexchange-header-|body|object|false|Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Body": {},
  "ResponseHeaders": {
    "property1": "string",
    "property2": "string"
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

<h3 id="sendapiasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendApiAssetResponse](#schemasendapiassetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://dataexchange.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

This operation removes one or more tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.|
|tagKeys|query|[[__string](#schema__string)]|true|The key tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_CreateDataSetResponse">CreateDataSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDataSetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AssetType|object|false|none|none|
|CreatedAt|object|false|none|none|
|Description|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Origin|object|false|none|none|
|OriginDetails|object|false|none|none|
|SourceId|object|false|none|none|
|Tags|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_ServiceLimitExceededException">ServiceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicelimitexceededexception"></a>
<a id="schema_ServiceLimitExceededException"></a>
<a id="tocSservicelimitexceededexception"></a>
<a id="tocsservicelimitexceededexception"></a>

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

<h2 id="tocS_CreateEventActionResponse">CreateEventActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventactionresponse"></a>
<a id="schema_CreateEventActionResponse"></a>
<a id="tocScreateeventactionresponse"></a>
<a id="tocscreateeventactionresponse"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Event|object|false|none|none|
|Id|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_AutoExportRevisionToS3RequestDetails">AutoExportRevisionToS3RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaautoexportrevisiontos3requestdetails"></a>
<a id="schema_AutoExportRevisionToS3RequestDetails"></a>
<a id="tocSautoexportrevisiontos3requestdetails"></a>
<a id="tocsautoexportrevisiontos3requestdetails"></a>

```json
{
  "Encryption": {
    "KmsKeyArn": {},
    "Type": {}
  },
  "RevisionDestination": {
    "Bucket": {},
    "KeyPattern": {}
  }
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|RevisionDestination|object|true|none|none|

<h2 id="tocS_RevisionPublished">RevisionPublished</h2>
<!-- backwards compatibility -->
<a id="schemarevisionpublished"></a>
<a id="schema_RevisionPublished"></a>
<a id="tocSrevisionpublished"></a>
<a id="tocsrevisionpublished"></a>

```json
{
  "DataSetId": {}
}
```

Information about the published revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSetId|object|true|none|none|

<h2 id="tocS_CreateJobResponse">CreateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresponse"></a>
<a id="schema_CreateJobResponse"></a>
<a id="tocScreatejobresponse"></a>
<a id="tocscreatejobresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {},
      "EventActionArn": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "ApiSpecificationUploadUrl": {},
      "ApiSpecificationUploadUrlExpiresAt": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Errors": {},
  "Id": {},
  "State": {},
  "Type": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Details|object|false|none|none|
|Errors|object|false|none|none|
|Id|object|false|none|none|
|State|object|false|none|none|
|Type|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_ExportAssetToSignedUrlRequestDetails">ExportAssetToSignedUrlRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportassettosignedurlrequestdetails"></a>
<a id="schema_ExportAssetToSignedUrlRequestDetails"></a>
<a id="tocSexportassettosignedurlrequestdetails"></a>
<a id="tocsexportassettosignedurlrequestdetails"></a>

```json
{
  "AssetId": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetId|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ExportAssetsToS3RequestDetails">ExportAssetsToS3RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportassetstos3requestdetails"></a>
<a id="schema_ExportAssetsToS3RequestDetails"></a>
<a id="tocSexportassetstos3requestdetails"></a>
<a id="tocsexportassetstos3requestdetails"></a>

```json
{
  "AssetDestinations": {},
  "DataSetId": {},
  "Encryption": {
    "KmsKeyArn": {},
    "Type": {}
  },
  "RevisionId": {}
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetDestinations|object|true|none|none|
|DataSetId|object|true|none|none|
|Encryption|object|false|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ExportRevisionsToS3RequestDetails">ExportRevisionsToS3RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportrevisionstos3requestdetails"></a>
<a id="schema_ExportRevisionsToS3RequestDetails"></a>
<a id="tocSexportrevisionstos3requestdetails"></a>
<a id="tocsexportrevisionstos3requestdetails"></a>

```json
{
  "DataSetId": {},
  "Encryption": {
    "KmsKeyArn": {},
    "Type": {}
  },
  "RevisionDestinations": {}
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSetId|object|true|none|none|
|Encryption|object|false|none|none|
|RevisionDestinations|object|true|none|none|

<h2 id="tocS_ImportAssetFromSignedUrlRequestDetails">ImportAssetFromSignedUrlRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetfromsignedurlrequestdetails"></a>
<a id="schema_ImportAssetFromSignedUrlRequestDetails"></a>
<a id="tocSimportassetfromsignedurlrequestdetails"></a>
<a id="tocsimportassetfromsignedurlrequestdetails"></a>

```json
{
  "AssetName": {},
  "DataSetId": {},
  "Md5Hash": {},
  "RevisionId": {}
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetName|object|true|none|none|
|DataSetId|object|true|none|none|
|Md5Hash|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ImportAssetsFromS3RequestDetails">ImportAssetsFromS3RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfroms3requestdetails"></a>
<a id="schema_ImportAssetsFromS3RequestDetails"></a>
<a id="tocSimportassetsfroms3requestdetails"></a>
<a id="tocsimportassetsfroms3requestdetails"></a>

```json
{
  "AssetSources": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details of the operation to be performed by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSources|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ImportAssetsFromRedshiftDataSharesRequestDetails">ImportAssetsFromRedshiftDataSharesRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfromredshiftdatasharesrequestdetails"></a>
<a id="schema_ImportAssetsFromRedshiftDataSharesRequestDetails"></a>
<a id="tocSimportassetsfromredshiftdatasharesrequestdetails"></a>
<a id="tocsimportassetsfromredshiftdatasharesrequestdetails"></a>

```json
{
  "AssetSources": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details from an import from Amazon Redshift datashare request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSources|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ImportAssetFromApiGatewayApiRequestDetails">ImportAssetFromApiGatewayApiRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetfromapigatewayapirequestdetails"></a>
<a id="schema_ImportAssetFromApiGatewayApiRequestDetails"></a>
<a id="tocSimportassetfromapigatewayapirequestdetails"></a>
<a id="tocsimportassetfromapigatewayapirequestdetails"></a>

```json
{
  "ApiDescription": {},
  "ApiId": {},
  "ApiKey": {},
  "ApiName": {},
  "ApiSpecificationMd5Hash": {},
  "DataSetId": {},
  "ProtocolType": {},
  "RevisionId": {},
  "Stage": {}
}
```

The request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDescription|object|false|none|none|
|ApiId|object|true|none|none|
|ApiKey|object|false|none|none|
|ApiName|object|true|none|none|
|ApiSpecificationMd5Hash|object|true|none|none|
|DataSetId|object|true|none|none|
|ProtocolType|object|true|none|none|
|RevisionId|object|true|none|none|
|Stage|object|true|none|none|

<h2 id="tocS_CreateS3DataAccessFromS3BucketRequestDetails">CreateS3DataAccessFromS3BucketRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemacreates3dataaccessfroms3bucketrequestdetails"></a>
<a id="schema_CreateS3DataAccessFromS3BucketRequestDetails"></a>
<a id="tocScreates3dataaccessfroms3bucketrequestdetails"></a>
<a id="tocscreates3dataaccessfroms3bucketrequestdetails"></a>

```json
{
  "AssetSource": {
    "Bucket": {},
    "KeyPrefixes": {},
    "Keys": {},
    "KmsKeysToGrant": {}
  },
  "DataSetId": {},
  "RevisionId": {}
}
```

Details of the operation to create an Amazon S3 data access from an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSource|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ImportAssetsFromLakeFormationTagPolicyRequestDetails">ImportAssetsFromLakeFormationTagPolicyRequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfromlakeformationtagpolicyrequestdetails"></a>
<a id="schema_ImportAssetsFromLakeFormationTagPolicyRequestDetails"></a>
<a id="tocSimportassetsfromlakeformationtagpolicyrequestdetails"></a>
<a id="tocsimportassetsfromlakeformationtagpolicyrequestdetails"></a>

```json
{
  "CatalogId": {},
  "Database": {
    "Expression": {},
    "Permissions": {}
  },
  "Table": {
    "Expression": {},
    "Permissions": {}
  },
  "RoleArn": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details about the assets imported from an AWS Lake Formation tag policy request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|true|none|none|
|Database|object|false|none|none|
|Table|object|false|none|none|
|RoleArn|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_CreateRevisionResponse">CreateRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterevisionresponse"></a>
<a id="schema_CreateRevisionResponse"></a>
<a id="tocScreaterevisionresponse"></a>
<a id="tocscreaterevisionresponse"></a>

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Comment|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Finalized|object|false|none|none|
|Id|object|false|none|none|
|SourceId|object|false|none|none|
|Tags|object|false|none|none|
|UpdatedAt|object|false|none|none|
|RevocationComment|object|false|none|none|
|Revoked|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_GetAssetResponse">GetAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetresponse"></a>
<a id="schema_GetAssetResponse"></a>
<a id="tocSgetassetresponse"></a>
<a id="tocsgetassetresponse"></a>

```json
{
  "Arn": {},
  "AssetDetails": {
    "S3SnapshotAsset": {
      "Size": {}
    },
    "RedshiftDataShareAsset": {
      "Arn": {}
    },
    "ApiGatewayApiAsset": {
      "ApiDescription": {},
      "ApiEndpoint": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationDownloadUrl": {},
      "ApiSpecificationDownloadUrlExpiresAt": {},
      "ProtocolType": {},
      "Stage": {}
    },
    "S3DataAccessAsset": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "S3AccessPointAlias": {},
      "S3AccessPointArn": {},
      "KmsKeysToGrant": {}
    },
    "LakeFormationDataPermissionAsset": {
      "LakeFormationDataPermissionDetails": {
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "ResourceDetails": {
            "Database": {
              "Expression": {}
            },
            "Table": {
              "Expression": {}
            }
          }
        }
      },
      "LakeFormationDataPermissionType": {},
      "Permissions": {},
      "RoleArn": {}
    }
  },
  "AssetType": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Id": {},
  "Name": {},
  "RevisionId": {},
  "SourceId": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AssetDetails|object|false|none|none|
|AssetType|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|RevisionId|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_GetDataSetResponse">GetDataSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetresponse"></a>
<a id="schema_GetDataSetResponse"></a>
<a id="tocSgetdatasetresponse"></a>
<a id="tocsgetdatasetresponse"></a>

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AssetType|object|false|none|none|
|CreatedAt|object|false|none|none|
|Description|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Origin|object|false|none|none|
|OriginDetails|object|false|none|none|
|SourceId|object|false|none|none|
|Tags|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_GetEventActionResponse">GetEventActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventactionresponse"></a>
<a id="schema_GetEventActionResponse"></a>
<a id="tocSgeteventactionresponse"></a>
<a id="tocsgeteventactionresponse"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Event|object|false|none|none|
|Id|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_GetJobResponse">GetJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetjobresponse"></a>
<a id="schema_GetJobResponse"></a>
<a id="tocSgetjobresponse"></a>
<a id="tocsgetjobresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {},
      "EventActionArn": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "ApiSpecificationUploadUrl": {},
      "ApiSpecificationUploadUrlExpiresAt": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Errors": {},
  "Id": {},
  "State": {},
  "Type": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Details|object|false|none|none|
|Errors|object|false|none|none|
|Id|object|false|none|none|
|State|object|false|none|none|
|Type|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_GetRevisionResponse">GetRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrevisionresponse"></a>
<a id="schema_GetRevisionResponse"></a>
<a id="tocSgetrevisionresponse"></a>
<a id="tocsgetrevisionresponse"></a>

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Comment|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Finalized|object|false|none|none|
|Id|object|false|none|none|
|SourceId|object|false|none|none|
|Tags|object|false|none|none|
|UpdatedAt|object|false|none|none|
|RevocationComment|object|false|none|none|
|Revoked|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_ListDataSetRevisionsResponse">ListDataSetRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetrevisionsresponse"></a>
<a id="schema_ListDataSetRevisionsResponse"></a>
<a id="tocSlistdatasetrevisionsresponse"></a>
<a id="tocslistdatasetrevisionsresponse"></a>

```json
{
  "NextToken": {},
  "Revisions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Revisions|object|false|none|none|

<h2 id="tocS_ListDataSetsResponse">ListDataSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDataSetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "DataSets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventActionsResponse">ListEventActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventactionsresponse"></a>
<a id="schema_ListEventActionsResponse"></a>
<a id="tocSlisteventactionsresponse"></a>
<a id="tocslisteventactionsresponse"></a>

```json
{
  "EventActions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventActions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "Jobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRevisionAssetsResponse">ListRevisionAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrevisionassetsresponse"></a>
<a id="schema_ListRevisionAssetsResponse"></a>
<a id="tocSlistrevisionassetsresponse"></a>
<a id="tocslistrevisionassetsresponse"></a>

```json
{
  "Assets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_RevokeRevisionResponse">RevokeRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokerevisionresponse"></a>
<a id="schema_RevokeRevisionResponse"></a>
<a id="tocSrevokerevisionresponse"></a>
<a id="tocsrevokerevisionresponse"></a>

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Comment|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Finalized|object|false|none|none|
|Id|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|false|none|none|
|RevocationComment|object|false|none|none|
|Revoked|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_SendApiAssetResponse">SendApiAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendapiassetresponse"></a>
<a id="schema_SendApiAssetResponse"></a>
<a id="tocSsendapiassetresponse"></a>
<a id="tocssendapiassetresponse"></a>

```json
{
  "Body": {},
  "ResponseHeaders": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|ResponseHeaders|object|false|none|none|

<h2 id="tocS_StartJobResponse">StartJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartjobresponse"></a>
<a id="schema_StartJobResponse"></a>
<a id="tocSstartjobresponse"></a>
<a id="tocsstartjobresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAssetResponse">UpdateAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetresponse"></a>
<a id="schema_UpdateAssetResponse"></a>
<a id="tocSupdateassetresponse"></a>
<a id="tocsupdateassetresponse"></a>

```json
{
  "Arn": {},
  "AssetDetails": {
    "S3SnapshotAsset": {
      "Size": {}
    },
    "RedshiftDataShareAsset": {
      "Arn": {}
    },
    "ApiGatewayApiAsset": {
      "ApiDescription": {},
      "ApiEndpoint": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationDownloadUrl": {},
      "ApiSpecificationDownloadUrlExpiresAt": {},
      "ProtocolType": {},
      "Stage": {}
    },
    "S3DataAccessAsset": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "S3AccessPointAlias": {},
      "S3AccessPointArn": {},
      "KmsKeysToGrant": {}
    },
    "LakeFormationDataPermissionAsset": {
      "LakeFormationDataPermissionDetails": {
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "ResourceDetails": {
            "Database": {
              "Expression": {}
            },
            "Table": {
              "Expression": {}
            }
          }
        }
      },
      "LakeFormationDataPermissionType": {},
      "Permissions": {},
      "RoleArn": {}
    }
  },
  "AssetType": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Id": {},
  "Name": {},
  "RevisionId": {},
  "SourceId": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AssetDetails|object|false|none|none|
|AssetType|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|RevisionId|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_UpdateDataSetResponse">UpdateDataSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetresponse"></a>
<a id="schema_UpdateDataSetResponse"></a>
<a id="tocSupdatedatasetresponse"></a>
<a id="tocsupdatedatasetresponse"></a>

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|AssetType|object|false|none|none|
|CreatedAt|object|false|none|none|
|Description|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Origin|object|false|none|none|
|OriginDetails|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_UpdateEventActionResponse">UpdateEventActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventactionresponse"></a>
<a id="schema_UpdateEventActionResponse"></a>
<a id="tocSupdateeventactionresponse"></a>
<a id="tocsupdateeventactionresponse"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Event|object|false|none|none|
|Id|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_UpdateRevisionResponse">UpdateRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterevisionresponse"></a>
<a id="schema_UpdateRevisionResponse"></a>
<a id="tocSupdaterevisionresponse"></a>
<a id="tocsupdaterevisionresponse"></a>

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Comment|object|false|none|none|
|CreatedAt|object|false|none|none|
|DataSetId|object|false|none|none|
|Finalized|object|false|none|none|
|Id|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|false|none|none|
|RevocationComment|object|false|none|none|
|Revoked|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "ExportRevisionToS3": {
    "Encryption": {
      "KmsKeyArn": {},
      "Type": {}
    },
    "RevisionDestination": {
      "Bucket": {},
      "KeyPattern": {}
    }
  }
}
```

What occurs after a certain event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportRevisionToS3|object|false|none|none|

<h2 id="tocS_ApiDescription">ApiDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapidescription"></a>
<a id="schema_ApiDescription"></a>
<a id="tocSapidescription"></a>
<a id="tocsapidescription"></a>

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

<h2 id="tocS_ProtocolType">ProtocolType</h2>
<!-- backwards compatibility -->
<a id="schemaprotocoltype"></a>
<a id="schema_ProtocolType"></a>
<a id="tocSprotocoltype"></a>
<a id="tocsprotocoltype"></a>

```json
"REST"
```

<h2 id="tocS_ApiGatewayApiAsset">ApiGatewayApiAsset</h2>
<!-- backwards compatibility -->
<a id="schemaapigatewayapiasset"></a>
<a id="schema_ApiGatewayApiAsset"></a>
<a id="tocSapigatewayapiasset"></a>
<a id="tocsapigatewayapiasset"></a>

```json
{
  "ApiDescription": {},
  "ApiEndpoint": {},
  "ApiId": {},
  "ApiKey": {},
  "ApiName": {},
  "ApiSpecificationDownloadUrl": {},
  "ApiSpecificationDownloadUrlExpiresAt": {},
  "ProtocolType": {},
  "Stage": {}
}
```

The API Gateway API that is the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDescription|object|false|none|none|
|ApiEndpoint|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKey|object|false|none|none|
|ApiName|object|false|none|none|
|ApiSpecificationDownloadUrl|object|false|none|none|
|ApiSpecificationDownloadUrlExpiresAt|object|false|none|none|
|ProtocolType|object|false|none|none|
|Stage|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_AssetDestinationEntry">AssetDestinationEntry</h2>
<!-- backwards compatibility -->
<a id="schemaassetdestinationentry"></a>
<a id="schema_AssetDestinationEntry"></a>
<a id="tocSassetdestinationentry"></a>
<a id="tocsassetdestinationentry"></a>

```json
{
  "AssetId": {},
  "Bucket": {},
  "Key": {}
}
```

The destination for the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetId|object|true|none|none|
|Bucket|object|true|none|none|
|Key|object|false|none|none|

<h2 id="tocS_S3SnapshotAsset">S3SnapshotAsset</h2>
<!-- backwards compatibility -->
<a id="schemas3snapshotasset"></a>
<a id="schema_S3SnapshotAsset"></a>
<a id="tocSs3snapshotasset"></a>
<a id="tocss3snapshotasset"></a>

```json
{
  "Size": {}
}
```

The Amazon S3 object that is the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Size|object|true|none|none|

<h2 id="tocS_RedshiftDataShareAsset">RedshiftDataShareAsset</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatashareasset"></a>
<a id="schema_RedshiftDataShareAsset"></a>
<a id="tocSredshiftdatashareasset"></a>
<a id="tocsredshiftdatashareasset"></a>

```json
{
  "Arn": {}
}
```

The Amazon Redshift datashare asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_S3DataAccessAsset">S3DataAccessAsset</h2>
<!-- backwards compatibility -->
<a id="schemas3dataaccessasset"></a>
<a id="schema_S3DataAccessAsset"></a>
<a id="tocSs3dataaccessasset"></a>
<a id="tocss3dataaccessasset"></a>

```json
{
  "Bucket": {},
  "KeyPrefixes": {},
  "Keys": {},
  "S3AccessPointAlias": {},
  "S3AccessPointArn": {},
  "KmsKeysToGrant": {}
}
```

The Amazon S3 data access that is the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|KeyPrefixes|object|false|none|none|
|Keys|object|false|none|none|
|S3AccessPointAlias|object|false|none|none|
|S3AccessPointArn|object|false|none|none|
|KmsKeysToGrant|object|false|none|none|

<h2 id="tocS_LakeFormationDataPermissionAsset">LakeFormationDataPermissionAsset</h2>
<!-- backwards compatibility -->
<a id="schemalakeformationdatapermissionasset"></a>
<a id="schema_LakeFormationDataPermissionAsset"></a>
<a id="tocSlakeformationdatapermissionasset"></a>
<a id="tocslakeformationdatapermissionasset"></a>

```json
{
  "LakeFormationDataPermissionDetails": {
    "LFTagPolicy": {
      "CatalogId": {},
      "ResourceType": {},
      "ResourceDetails": {
        "Database": {
          "Expression": {}
        },
        "Table": {
          "Expression": {}
        }
      }
    }
  },
  "LakeFormationDataPermissionType": {},
  "Permissions": {},
  "RoleArn": {}
}
```

The AWS Lake Formation data permission asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LakeFormationDataPermissionDetails|object|true|none|none|
|LakeFormationDataPermissionType|object|true|none|none|
|Permissions|object|true|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_AssetDetails">AssetDetails</h2>
<!-- backwards compatibility -->
<a id="schemaassetdetails"></a>
<a id="schema_AssetDetails"></a>
<a id="tocSassetdetails"></a>
<a id="tocsassetdetails"></a>

```json
{
  "S3SnapshotAsset": {
    "Size": {}
  },
  "RedshiftDataShareAsset": {
    "Arn": {}
  },
  "ApiGatewayApiAsset": {
    "ApiDescription": {},
    "ApiEndpoint": {},
    "ApiId": {},
    "ApiKey": {},
    "ApiName": {},
    "ApiSpecificationDownloadUrl": {},
    "ApiSpecificationDownloadUrlExpiresAt": {},
    "ProtocolType": {},
    "Stage": {}
  },
  "S3DataAccessAsset": {
    "Bucket": {},
    "KeyPrefixes": {},
    "Keys": {},
    "S3AccessPointAlias": {},
    "S3AccessPointArn": {},
    "KmsKeysToGrant": {}
  },
  "LakeFormationDataPermissionAsset": {
    "LakeFormationDataPermissionDetails": {
      "LFTagPolicy": {
        "CatalogId": {},
        "ResourceType": {},
        "ResourceDetails": {
          "Database": {
            "Expression": {}
          },
          "Table": {
            "Expression": {}
          }
        }
      }
    },
    "LakeFormationDataPermissionType": {},
    "Permissions": {},
    "RoleArn": {}
  }
}
```

Details about the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3SnapshotAsset|object|false|none|none|
|RedshiftDataShareAsset|object|false|none|none|
|ApiGatewayApiAsset|object|false|none|none|
|S3DataAccessAsset|object|false|none|none|
|LakeFormationDataPermissionAsset|object|false|none|none|

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
"S3_SNAPSHOT"
```

<h2 id="tocS_AssetName">AssetName</h2>
<!-- backwards compatibility -->
<a id="schemaassetname"></a>
<a id="schema_AssetName"></a>
<a id="tocSassetname"></a>
<a id="tocsassetname"></a>

```json
"string"
```

<h2 id="tocS_AssetEntry">AssetEntry</h2>
<!-- backwards compatibility -->
<a id="schemaassetentry"></a>
<a id="schema_AssetEntry"></a>
<a id="tocSassetentry"></a>
<a id="tocsassetentry"></a>

```json
{
  "Arn": {},
  "AssetDetails": {
    "S3SnapshotAsset": {
      "Size": {}
    },
    "RedshiftDataShareAsset": {
      "Arn": {}
    },
    "ApiGatewayApiAsset": {
      "ApiDescription": {},
      "ApiEndpoint": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationDownloadUrl": {},
      "ApiSpecificationDownloadUrlExpiresAt": {},
      "ProtocolType": {},
      "Stage": {}
    },
    "S3DataAccessAsset": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "S3AccessPointAlias": {},
      "S3AccessPointArn": {},
      "KmsKeysToGrant": {}
    },
    "LakeFormationDataPermissionAsset": {
      "LakeFormationDataPermissionDetails": {
        "LFTagPolicy": {
          "CatalogId": {},
          "ResourceType": {},
          "ResourceDetails": {
            "Database": {
              "Expression": {}
            },
            "Table": {
              "Expression": {}
            }
          }
        }
      },
      "LakeFormationDataPermissionType": {},
      "Permissions": {},
      "RoleArn": {}
    }
  },
  "AssetType": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Id": {},
  "Name": {},
  "RevisionId": {},
  "SourceId": {},
  "UpdatedAt": {}
}
```

An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access). The asset can be a structured data file, an image file, or some other data file that can be stored as an Amazon S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or an Amazon S3 data access. When you create an import job for your files, API Gateway APIs, Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access, you create an asset in AWS Data Exchange.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|AssetDetails|object|true|none|none|
|AssetType|object|true|none|none|
|CreatedAt|object|true|none|none|
|DataSetId|object|true|none|none|
|Id|object|true|none|none|
|Name|object|true|none|none|
|RevisionId|object|true|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_AssetSourceEntry">AssetSourceEntry</h2>
<!-- backwards compatibility -->
<a id="schemaassetsourceentry"></a>
<a id="schema_AssetSourceEntry"></a>
<a id="tocSassetsourceentry"></a>
<a id="tocsassetsourceentry"></a>

```json
{
  "Bucket": {},
  "Key": {}
}
```

The source of the assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|true|none|none|

<h2 id="tocS_AutoExportRevisionDestinationEntry">AutoExportRevisionDestinationEntry</h2>
<!-- backwards compatibility -->
<a id="schemaautoexportrevisiondestinationentry"></a>
<a id="schema_AutoExportRevisionDestinationEntry"></a>
<a id="tocSautoexportrevisiondestinationentry"></a>
<a id="tocsautoexportrevisiondestinationentry"></a>

```json
{
  "Bucket": {},
  "KeyPattern": {}
}
```

A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|KeyPattern|object|false|none|none|

<h2 id="tocS_ExportServerSideEncryption">ExportServerSideEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaexportserversideencryption"></a>
<a id="schema_ExportServerSideEncryption"></a>
<a id="tocSexportserversideencryption"></a>
<a id="tocsexportserversideencryption"></a>

```json
{
  "KmsKeyArn": {},
  "Type": {}
}
```

Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKeyArn|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{}
```

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"ACCESS_DENIED_EXCEPTION"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_MapOf__string">MapOf__string</h2>
<!-- backwards compatibility -->
<a id="schemamapof__string"></a>
<a id="schema_MapOf__string"></a>
<a id="tocSmapof__string"></a>
<a id="tocsmapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_CreateDataSetRequest">CreateDataSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDataSetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "AssetType": {},
  "Description": {},
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetType|object|true|none|none|
|Description|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
"OWNED"
```

<h2 id="tocS_OriginDetails">OriginDetails</h2>
<!-- backwards compatibility -->
<a id="schemaorigindetails"></a>
<a id="schema_OriginDetails"></a>
<a id="tocSorigindetails"></a>
<a id="tocsorigindetails"></a>

```json
{
  "ProductId": {}
}
```

Details about the origin of the data set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductId|object|true|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "RevisionPublished": {
    "DataSetId": {}
  }
}
```

What occurs to start an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RevisionPublished|object|false|none|none|

<h2 id="tocS_CreateEventActionRequest">CreateEventActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventactionrequest"></a>
<a id="schema_CreateEventActionRequest"></a>
<a id="tocScreateeventactionrequest"></a>
<a id="tocscreateeventactionrequest"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Event|object|true|none|none|

<h2 id="tocS_RequestDetails">RequestDetails</h2>
<!-- backwards compatibility -->
<a id="schemarequestdetails"></a>
<a id="schema_RequestDetails"></a>
<a id="tocSrequestdetails"></a>
<a id="tocsrequestdetails"></a>

```json
{
  "ExportAssetToSignedUrl": {
    "AssetId": {},
    "DataSetId": {},
    "RevisionId": {}
  },
  "ExportAssetsToS3": {
    "AssetDestinations": {},
    "DataSetId": {},
    "Encryption": {
      "KmsKeyArn": {},
      "Type": {}
    },
    "RevisionId": {}
  },
  "ExportRevisionsToS3": {
    "DataSetId": {},
    "Encryption": {
      "KmsKeyArn": {},
      "Type": {}
    },
    "RevisionDestinations": {}
  },
  "ImportAssetFromSignedUrl": {
    "AssetName": {},
    "DataSetId": {},
    "Md5Hash": {},
    "RevisionId": {}
  },
  "ImportAssetsFromS3": {
    "AssetSources": {},
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetsFromRedshiftDataShares": {
    "AssetSources": {},
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetFromApiGatewayApi": {
    "ApiDescription": {},
    "ApiId": {},
    "ApiKey": {},
    "ApiName": {},
    "ApiSpecificationMd5Hash": {},
    "DataSetId": {},
    "ProtocolType": {},
    "RevisionId": {},
    "Stage": {}
  },
  "CreateS3DataAccessFromS3Bucket": {
    "AssetSource": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "KmsKeysToGrant": {}
    },
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetsFromLakeFormationTagPolicy": {
    "CatalogId": {},
    "Database": {
      "Expression": {},
      "Permissions": {}
    },
    "Table": {
      "Expression": {},
      "Permissions": {}
    },
    "RoleArn": {},
    "DataSetId": {},
    "RevisionId": {}
  }
}
```

The details for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportAssetToSignedUrl|object|false|none|none|
|ExportAssetsToS3|object|false|none|none|
|ExportRevisionsToS3|object|false|none|none|
|ImportAssetFromSignedUrl|object|false|none|none|
|ImportAssetsFromS3|object|false|none|none|
|ImportAssetsFromRedshiftDataShares|object|false|none|none|
|ImportAssetFromApiGatewayApi|object|false|none|none|
|CreateS3DataAccessFromS3Bucket|object|false|none|none|
|ImportAssetsFromLakeFormationTagPolicy|object|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"IMPORT_ASSETS_FROM_S3"
```

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Details|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ResponseDetails">ResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresponsedetails"></a>
<a id="schema_ResponseDetails"></a>
<a id="tocSresponsedetails"></a>
<a id="tocsresponsedetails"></a>

```json
{
  "ExportAssetToSignedUrl": {
    "AssetId": {},
    "DataSetId": {},
    "RevisionId": {},
    "SignedUrl": {},
    "SignedUrlExpiresAt": {}
  },
  "ExportAssetsToS3": {
    "AssetDestinations": {},
    "DataSetId": {},
    "Encryption": {
      "KmsKeyArn": {},
      "Type": {}
    },
    "RevisionId": {}
  },
  "ExportRevisionsToS3": {
    "DataSetId": {},
    "Encryption": {
      "KmsKeyArn": {},
      "Type": {}
    },
    "RevisionDestinations": {},
    "EventActionArn": {}
  },
  "ImportAssetFromSignedUrl": {
    "AssetName": {},
    "DataSetId": {},
    "Md5Hash": {},
    "RevisionId": {},
    "SignedUrl": {},
    "SignedUrlExpiresAt": {}
  },
  "ImportAssetsFromS3": {
    "AssetSources": {},
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetsFromRedshiftDataShares": {
    "AssetSources": {},
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetFromApiGatewayApi": {
    "ApiDescription": {},
    "ApiId": {},
    "ApiKey": {},
    "ApiName": {},
    "ApiSpecificationMd5Hash": {},
    "ApiSpecificationUploadUrl": {},
    "ApiSpecificationUploadUrlExpiresAt": {},
    "DataSetId": {},
    "ProtocolType": {},
    "RevisionId": {},
    "Stage": {}
  },
  "CreateS3DataAccessFromS3Bucket": {
    "AssetSource": {
      "Bucket": {},
      "KeyPrefixes": {},
      "Keys": {},
      "KmsKeysToGrant": {}
    },
    "DataSetId": {},
    "RevisionId": {}
  },
  "ImportAssetsFromLakeFormationTagPolicy": {
    "CatalogId": {},
    "Database": {
      "Expression": {},
      "Permissions": {}
    },
    "Table": {
      "Expression": {},
      "Permissions": {}
    },
    "RoleArn": {},
    "DataSetId": {},
    "RevisionId": {}
  }
}
```

Details for the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportAssetToSignedUrl|object|false|none|none|
|ExportAssetsToS3|object|false|none|none|
|ExportRevisionsToS3|object|false|none|none|
|ImportAssetFromSignedUrl|object|false|none|none|
|ImportAssetsFromS3|object|false|none|none|
|ImportAssetsFromRedshiftDataShares|object|false|none|none|
|ImportAssetFromApiGatewayApi|object|false|none|none|
|CreateS3DataAccessFromS3Bucket|object|false|none|none|
|ImportAssetsFromLakeFormationTagPolicy|object|false|none|none|

<h2 id="tocS_ListOfJobError">ListOfJobError</h2>
<!-- backwards compatibility -->
<a id="schemalistofjoberror"></a>
<a id="schema_ListOfJobError"></a>
<a id="tocSlistofjoberror"></a>
<a id="tocslistofjoberror"></a>

```json
[
  {
    "Code": {},
    "Details": {
      "ImportAssetFromSignedUrlJobErrorDetails": {
        "AssetName": {}
      },
      "ImportAssetsFromS3JobErrorDetails": {}
    },
    "LimitName": {},
    "LimitValue": {},
    "Message": {},
    "ResourceId": {},
    "ResourceType": {}
  }
]
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"WAITING"
```

<h2 id="tocS___stringMin0Max16384">__stringMin0Max16384</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin0max16384"></a>
<a id="schema___stringMin0Max16384"></a>
<a id="tocS__stringmin0max16384"></a>
<a id="tocs__stringmin0max16384"></a>

```json
"string"
```

<h2 id="tocS_CreateRevisionRequest">CreateRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterevisionrequest"></a>
<a id="schema_CreateRevisionRequest"></a>
<a id="tocScreaterevisionrequest"></a>
<a id="tocscreaterevisionrequest"></a>

```json
{
  "Comment": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS___stringMin10Max512">__stringMin10Max512</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin10max512"></a>
<a id="schema___stringMin10Max512"></a>
<a id="tocS__stringmin10max512"></a>
<a id="tocs__stringmin10max512"></a>

```json
"stringstri"
```

<h2 id="tocS_S3DataAccessAssetSourceEntry">S3DataAccessAssetSourceEntry</h2>
<!-- backwards compatibility -->
<a id="schemas3dataaccessassetsourceentry"></a>
<a id="schema_S3DataAccessAssetSourceEntry"></a>
<a id="tocSs3dataaccessassetsourceentry"></a>
<a id="tocss3dataaccessassetsourceentry"></a>

```json
{
  "Bucket": {},
  "KeyPrefixes": {},
  "Keys": {},
  "KmsKeysToGrant": {}
}
```

Source details for an Amazon S3 data access asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|KeyPrefixes|object|false|none|none|
|Keys|object|false|none|none|
|KmsKeysToGrant|object|false|none|none|

<h2 id="tocS_CreateS3DataAccessFromS3BucketResponseDetails">CreateS3DataAccessFromS3BucketResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemacreates3dataaccessfroms3bucketresponsedetails"></a>
<a id="schema_CreateS3DataAccessFromS3BucketResponseDetails"></a>
<a id="tocScreates3dataaccessfroms3bucketresponsedetails"></a>
<a id="tocscreates3dataaccessfroms3bucketresponsedetails"></a>

```json
{
  "AssetSource": {
    "Bucket": {},
    "KeyPrefixes": {},
    "Keys": {},
    "KmsKeysToGrant": {}
  },
  "DataSetId": {},
  "RevisionId": {}
}
```

Details about the response of the operation to create an S3 data access from an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSource|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_DataSetEntry">DataSetEntry</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentry"></a>
<a id="schema_DataSetEntry"></a>
<a id="tocSdatasetentry"></a>
<a id="tocsdatasetentry"></a>

```json
{
  "Arn": {},
  "AssetType": {},
  "CreatedAt": {},
  "Description": {},
  "Id": {},
  "Name": {},
  "Origin": {},
  "OriginDetails": {
    "ProductId": {}
  },
  "SourceId": {},
  "UpdatedAt": {}
}
```

A data set is an AWS resource with one or more revisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|AssetType|object|true|none|none|
|CreatedAt|object|true|none|none|
|Description|object|true|none|none|
|Id|object|true|none|none|
|Name|object|true|none|none|
|Origin|object|true|none|none|
|OriginDetails|object|false|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_ListOfLFTags">ListOfLFTags</h2>
<!-- backwards compatibility -->
<a id="schemalistoflftags"></a>
<a id="schema_ListOfLFTags"></a>
<a id="tocSlistoflftags"></a>
<a id="tocslistoflftags"></a>

```json
[
  {
    "TagKey": {},
    "TagValues": {}
  }
]
```

<h2 id="tocS_DatabaseLFTagPolicy">DatabaseLFTagPolicy</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselftagpolicy"></a>
<a id="schema_DatabaseLFTagPolicy"></a>
<a id="tocSdatabaselftagpolicy"></a>
<a id="tocsdatabaselftagpolicy"></a>

```json
{
  "Expression": {}
}
```

The LF-tag policy for database resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|

<h2 id="tocS_ListOfDatabaseLFTagPolicyPermissions">ListOfDatabaseLFTagPolicyPermissions</h2>
<!-- backwards compatibility -->
<a id="schemalistofdatabaselftagpolicypermissions"></a>
<a id="schema_ListOfDatabaseLFTagPolicyPermissions"></a>
<a id="tocSlistofdatabaselftagpolicypermissions"></a>
<a id="tocslistofdatabaselftagpolicypermissions"></a>

```json
[
  "DESCRIBE"
]
```

<h2 id="tocS_DatabaseLFTagPolicyAndPermissions">DatabaseLFTagPolicyAndPermissions</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselftagpolicyandpermissions"></a>
<a id="schema_DatabaseLFTagPolicyAndPermissions"></a>
<a id="tocSdatabaselftagpolicyandpermissions"></a>
<a id="tocsdatabaselftagpolicyandpermissions"></a>

```json
{
  "Expression": {},
  "Permissions": {}
}
```

The LF-tag policy and permissions for database resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|Permissions|object|true|none|none|

<h2 id="tocS_DatabaseLFTagPolicyPermission">DatabaseLFTagPolicyPermission</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselftagpolicypermission"></a>
<a id="schema_DatabaseLFTagPolicyPermission"></a>
<a id="tocSdatabaselftagpolicypermission"></a>
<a id="tocsdatabaselftagpolicypermission"></a>

```json
"DESCRIBE"
```

<h2 id="tocS_DeleteAssetRequest">DeleteAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetrequest"></a>
<a id="schema_DeleteAssetRequest"></a>
<a id="tocSdeleteassetrequest"></a>
<a id="tocsdeleteassetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDataSetRequest">DeleteDataSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDataSetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteEventActionRequest">DeleteEventActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventactionrequest"></a>
<a id="schema_DeleteEventActionRequest"></a>
<a id="tocSdeleteeventactionrequest"></a>
<a id="tocsdeleteeventactionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRevisionRequest">DeleteRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterevisionrequest"></a>
<a id="schema_DeleteRevisionRequest"></a>
<a id="tocSdeleterevisionrequest"></a>
<a id="tocsdeleterevisionrequest"></a>

```json
{}
```

<h2 id="tocS_ImportAssetFromSignedUrlJobErrorDetails">ImportAssetFromSignedUrlJobErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetfromsignedurljoberrordetails"></a>
<a id="schema_ImportAssetFromSignedUrlJobErrorDetails"></a>
<a id="tocSimportassetfromsignedurljoberrordetails"></a>
<a id="tocsimportassetfromsignedurljoberrordetails"></a>

```json
{
  "AssetName": {}
}
```

Details about the job error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetName|object|true|none|none|

<h2 id="tocS_ListOfAssetSourceEntry">ListOfAssetSourceEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofassetsourceentry"></a>
<a id="schema_ListOfAssetSourceEntry"></a>
<a id="tocSlistofassetsourceentry"></a>
<a id="tocslistofassetsourceentry"></a>

```json
[
  {
    "Bucket": {},
    "Key": {}
  }
]
```

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "ImportAssetFromSignedUrlJobErrorDetails": {
    "AssetName": {}
  },
  "ImportAssetsFromS3JobErrorDetails": {}
}
```

Information about the job error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportAssetFromSignedUrlJobErrorDetails|object|false|none|none|
|ImportAssetsFromS3JobErrorDetails|object|false|none|none|

<h2 id="tocS_EventActionEntry">EventActionEntry</h2>
<!-- backwards compatibility -->
<a id="schemaeventactionentry"></a>
<a id="schema_EventActionEntry"></a>
<a id="tocSeventactionentry"></a>
<a id="tocseventactionentry"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  },
  "Arn": {},
  "CreatedAt": {},
  "Event": {
    "RevisionPublished": {
      "DataSetId": {}
    }
  },
  "Id": {},
  "UpdatedAt": {}
}
```

An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Arn|object|true|none|none|
|CreatedAt|object|true|none|none|
|Event|object|true|none|none|
|Id|object|true|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_ExportAssetToSignedUrlResponseDetails">ExportAssetToSignedUrlResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportassettosignedurlresponsedetails"></a>
<a id="schema_ExportAssetToSignedUrlResponseDetails"></a>
<a id="tocSexportassettosignedurlresponsedetails"></a>
<a id="tocsexportassettosignedurlresponsedetails"></a>

```json
{
  "AssetId": {},
  "DataSetId": {},
  "RevisionId": {},
  "SignedUrl": {},
  "SignedUrlExpiresAt": {}
}
```

The details of the export to signed URL response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetId|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|
|SignedUrl|object|false|none|none|
|SignedUrlExpiresAt|object|false|none|none|

<h2 id="tocS_ListOfAssetDestinationEntry">ListOfAssetDestinationEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofassetdestinationentry"></a>
<a id="schema_ListOfAssetDestinationEntry"></a>
<a id="tocSlistofassetdestinationentry"></a>
<a id="tocslistofassetdestinationentry"></a>

```json
[
  {
    "AssetId": {},
    "Bucket": {},
    "Key": {}
  }
]
```

<h2 id="tocS_ExportAssetsToS3ResponseDetails">ExportAssetsToS3ResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportassetstos3responsedetails"></a>
<a id="schema_ExportAssetsToS3ResponseDetails"></a>
<a id="tocSexportassetstos3responsedetails"></a>
<a id="tocsexportassetstos3responsedetails"></a>

```json
{
  "AssetDestinations": {},
  "DataSetId": {},
  "Encryption": {
    "KmsKeyArn": {},
    "Type": {}
  },
  "RevisionId": {}
}
```

Details about the export to Amazon S3 response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetDestinations|object|true|none|none|
|DataSetId|object|true|none|none|
|Encryption|object|false|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ListOfRevisionDestinationEntry">ListOfRevisionDestinationEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofrevisiondestinationentry"></a>
<a id="schema_ListOfRevisionDestinationEntry"></a>
<a id="tocSlistofrevisiondestinationentry"></a>
<a id="tocslistofrevisiondestinationentry"></a>

```json
[
  {
    "Bucket": {},
    "KeyPattern": {},
    "RevisionId": {}
  }
]
```

<h2 id="tocS_ExportRevisionsToS3ResponseDetails">ExportRevisionsToS3ResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexportrevisionstos3responsedetails"></a>
<a id="schema_ExportRevisionsToS3ResponseDetails"></a>
<a id="tocSexportrevisionstos3responsedetails"></a>
<a id="tocsexportrevisionstos3responsedetails"></a>

```json
{
  "DataSetId": {},
  "Encryption": {
    "KmsKeyArn": {},
    "Type": {}
  },
  "RevisionDestinations": {},
  "EventActionArn": {}
}
```

Details about the export revisions to Amazon S3 response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSetId|object|true|none|none|
|Encryption|object|false|none|none|
|RevisionDestinations|object|true|none|none|
|EventActionArn|object|false|none|none|

<h2 id="tocS_ServerSideEncryptionTypes">ServerSideEncryptionTypes</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptiontypes"></a>
<a id="schema_ServerSideEncryptionTypes"></a>
<a id="tocSserversideencryptiontypes"></a>
<a id="tocsserversideencryptiontypes"></a>

```json
"aws:kms"
```

<h2 id="tocS_GetAssetRequest">GetAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassetrequest"></a>
<a id="schema_GetAssetRequest"></a>
<a id="tocSgetassetrequest"></a>
<a id="tocsgetassetrequest"></a>

```json
{}
```

<h2 id="tocS_GetDataSetRequest">GetDataSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetrequest"></a>
<a id="schema_GetDataSetRequest"></a>
<a id="tocSgetdatasetrequest"></a>
<a id="tocsgetdatasetrequest"></a>

```json
{}
```

<h2 id="tocS_GetEventActionRequest">GetEventActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventactionrequest"></a>
<a id="schema_GetEventActionRequest"></a>
<a id="tocSgeteventactionrequest"></a>
<a id="tocsgeteventactionrequest"></a>

```json
{}
```

<h2 id="tocS_GetJobRequest">GetJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobrequest"></a>
<a id="schema_GetJobRequest"></a>
<a id="tocSgetjobrequest"></a>
<a id="tocsgetjobrequest"></a>

```json
{}
```

<h2 id="tocS_GetRevisionRequest">GetRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrevisionrequest"></a>
<a id="schema_GetRevisionRequest"></a>
<a id="tocSgetrevisionrequest"></a>
<a id="tocsgetrevisionrequest"></a>

```json
{}
```

<h2 id="tocS___stringMin24Max24PatternAZaZ094AZaZ092AZaZ093">__stringMin24Max24PatternAZaZ094AZaZ092AZaZ093</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin24max24patternazaz094azaz092azaz093"></a>
<a id="schema___stringMin24Max24PatternAZaZ094AZaZ092AZaZ093"></a>
<a id="tocS__stringmin24max24patternazaz094azaz092azaz093"></a>
<a id="tocs__stringmin24max24patternazaz094azaz092azaz093"></a>

```json
"stringstringstringstring"
```

<h2 id="tocS_ImportAssetFromApiGatewayApiResponseDetails">ImportAssetFromApiGatewayApiResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetfromapigatewayapiresponsedetails"></a>
<a id="schema_ImportAssetFromApiGatewayApiResponseDetails"></a>
<a id="tocSimportassetfromapigatewayapiresponsedetails"></a>
<a id="tocsimportassetfromapigatewayapiresponsedetails"></a>

```json
{
  "ApiDescription": {},
  "ApiId": {},
  "ApiKey": {},
  "ApiName": {},
  "ApiSpecificationMd5Hash": {},
  "ApiSpecificationUploadUrl": {},
  "ApiSpecificationUploadUrlExpiresAt": {},
  "DataSetId": {},
  "ProtocolType": {},
  "RevisionId": {},
  "Stage": {}
}
```

The response details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiDescription|object|false|none|none|
|ApiId|object|true|none|none|
|ApiKey|object|false|none|none|
|ApiName|object|true|none|none|
|ApiSpecificationMd5Hash|object|true|none|none|
|ApiSpecificationUploadUrl|object|true|none|none|
|ApiSpecificationUploadUrlExpiresAt|object|true|none|none|
|DataSetId|object|true|none|none|
|ProtocolType|object|true|none|none|
|RevisionId|object|true|none|none|
|Stage|object|true|none|none|

<h2 id="tocS_ImportAssetFromSignedUrlResponseDetails">ImportAssetFromSignedUrlResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetfromsignedurlresponsedetails"></a>
<a id="schema_ImportAssetFromSignedUrlResponseDetails"></a>
<a id="tocSimportassetfromsignedurlresponsedetails"></a>
<a id="tocsimportassetfromsignedurlresponsedetails"></a>

```json
{
  "AssetName": {},
  "DataSetId": {},
  "Md5Hash": {},
  "RevisionId": {},
  "SignedUrl": {},
  "SignedUrlExpiresAt": {}
}
```

The details in the response for an import request, including the signed URL and other information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetName|object|true|none|none|
|DataSetId|object|true|none|none|
|Md5Hash|object|false|none|none|
|RevisionId|object|true|none|none|
|SignedUrl|object|false|none|none|
|SignedUrlExpiresAt|object|false|none|none|

<h2 id="tocS_TableLFTagPolicyAndPermissions">TableLFTagPolicyAndPermissions</h2>
<!-- backwards compatibility -->
<a id="schematablelftagpolicyandpermissions"></a>
<a id="schema_TableLFTagPolicyAndPermissions"></a>
<a id="tocStablelftagpolicyandpermissions"></a>
<a id="tocstablelftagpolicyandpermissions"></a>

```json
{
  "Expression": {},
  "Permissions": {}
}
```

The LF-tag policy and permissions that apply to table resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|Permissions|object|true|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ImportAssetsFromLakeFormationTagPolicyResponseDetails">ImportAssetsFromLakeFormationTagPolicyResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfromlakeformationtagpolicyresponsedetails"></a>
<a id="schema_ImportAssetsFromLakeFormationTagPolicyResponseDetails"></a>
<a id="tocSimportassetsfromlakeformationtagpolicyresponsedetails"></a>
<a id="tocsimportassetsfromlakeformationtagpolicyresponsedetails"></a>

```json
{
  "CatalogId": {},
  "Database": {
    "Expression": {},
    "Permissions": {}
  },
  "Table": {
    "Expression": {},
    "Permissions": {}
  },
  "RoleArn": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details from an import AWS Lake Formation tag policy job response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|true|none|none|
|Database|object|false|none|none|
|Table|object|false|none|none|
|RoleArn|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ListOfRedshiftDataShareAssetSourceEntry">ListOfRedshiftDataShareAssetSourceEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofredshiftdatashareassetsourceentry"></a>
<a id="schema_ListOfRedshiftDataShareAssetSourceEntry"></a>
<a id="tocSlistofredshiftdatashareassetsourceentry"></a>
<a id="tocslistofredshiftdatashareassetsourceentry"></a>

```json
[
  {
    "DataShareArn": {}
  }
]
```

<h2 id="tocS_ImportAssetsFromRedshiftDataSharesResponseDetails">ImportAssetsFromRedshiftDataSharesResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfromredshiftdatasharesresponsedetails"></a>
<a id="schema_ImportAssetsFromRedshiftDataSharesResponseDetails"></a>
<a id="tocSimportassetsfromredshiftdatasharesresponsedetails"></a>
<a id="tocsimportassetsfromredshiftdatasharesresponsedetails"></a>

```json
{
  "AssetSources": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details from an import from Amazon Redshift datashare response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSources|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_ImportAssetsFromS3ResponseDetails">ImportAssetsFromS3ResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimportassetsfroms3responsedetails"></a>
<a id="schema_ImportAssetsFromS3ResponseDetails"></a>
<a id="tocSimportassetsfroms3responsedetails"></a>
<a id="tocsimportassetsfroms3responsedetails"></a>

```json
{
  "AssetSources": {},
  "DataSetId": {},
  "RevisionId": {}
}
```

Details from an import from Amazon S3 response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetSources|object|true|none|none|
|DataSetId|object|true|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_JobEntry">JobEntry</h2>
<!-- backwards compatibility -->
<a id="schemajobentry"></a>
<a id="schema_JobEntry"></a>
<a id="tocSjobentry"></a>
<a id="tocsjobentry"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Details": {
    "ExportAssetToSignedUrl": {
      "AssetId": {},
      "DataSetId": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ExportAssetsToS3": {
      "AssetDestinations": {},
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionId": {}
    },
    "ExportRevisionsToS3": {
      "DataSetId": {},
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestinations": {},
      "EventActionArn": {}
    },
    "ImportAssetFromSignedUrl": {
      "AssetName": {},
      "DataSetId": {},
      "Md5Hash": {},
      "RevisionId": {},
      "SignedUrl": {},
      "SignedUrlExpiresAt": {}
    },
    "ImportAssetsFromS3": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromRedshiftDataShares": {
      "AssetSources": {},
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetFromApiGatewayApi": {
      "ApiDescription": {},
      "ApiId": {},
      "ApiKey": {},
      "ApiName": {},
      "ApiSpecificationMd5Hash": {},
      "ApiSpecificationUploadUrl": {},
      "ApiSpecificationUploadUrlExpiresAt": {},
      "DataSetId": {},
      "ProtocolType": {},
      "RevisionId": {},
      "Stage": {}
    },
    "CreateS3DataAccessFromS3Bucket": {
      "AssetSource": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "KmsKeysToGrant": {}
      },
      "DataSetId": {},
      "RevisionId": {}
    },
    "ImportAssetsFromLakeFormationTagPolicy": {
      "CatalogId": {},
      "Database": {
        "Expression": {},
        "Permissions": {}
      },
      "Table": {
        "Expression": {},
        "Permissions": {}
      },
      "RoleArn": {},
      "DataSetId": {},
      "RevisionId": {}
    }
  },
  "Errors": {},
  "Id": {},
  "State": {},
  "Type": {},
  "UpdatedAt": {}
}
```

AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|CreatedAt|object|true|none|none|
|Details|object|true|none|none|
|Errors|object|false|none|none|
|Id|object|true|none|none|
|State|object|true|none|none|
|Type|object|true|none|none|
|UpdatedAt|object|true|none|none|

<h2 id="tocS_JobErrorLimitName">JobErrorLimitName</h2>
<!-- backwards compatibility -->
<a id="schemajoberrorlimitname"></a>
<a id="schema_JobErrorLimitName"></a>
<a id="tocSjoberrorlimitname"></a>
<a id="tocsjoberrorlimitname"></a>

```json
"Assets per revision"
```

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_JobErrorResourceTypes">JobErrorResourceTypes</h2>
<!-- backwards compatibility -->
<a id="schemajoberrorresourcetypes"></a>
<a id="schema_JobErrorResourceTypes"></a>
<a id="tocSjoberrorresourcetypes"></a>
<a id="tocsjoberrorresourcetypes"></a>

```json
"REVISION"
```

<h2 id="tocS_JobError">JobError</h2>
<!-- backwards compatibility -->
<a id="schemajoberror"></a>
<a id="schema_JobError"></a>
<a id="tocSjoberror"></a>
<a id="tocsjoberror"></a>

```json
{
  "Code": {},
  "Details": {
    "ImportAssetFromSignedUrlJobErrorDetails": {
      "AssetName": {}
    },
    "ImportAssetsFromS3JobErrorDetails": {}
  },
  "LimitName": {},
  "LimitValue": {},
  "Message": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

An error that occurred with the job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|true|none|none|
|Details|object|false|none|none|
|LimitName|object|false|none|none|
|LimitValue|object|false|none|none|
|Message|object|true|none|none|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyToGrant">KmsKeyToGrant</h2>
<!-- backwards compatibility -->
<a id="schemakmskeytogrant"></a>
<a id="schema_KmsKeyToGrant"></a>
<a id="tocSkmskeytogrant"></a>
<a id="tocskmskeytogrant"></a>

```json
{
  "KmsKeyArn": {}
}
```

The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3 objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKeyArn|object|true|none|none|

<h2 id="tocS_LFPermission">LFPermission</h2>
<!-- backwards compatibility -->
<a id="schemalfpermission"></a>
<a id="schema_LFPermission"></a>
<a id="tocSlfpermission"></a>
<a id="tocslfpermission"></a>

```json
"DESCRIBE"
```

<h2 id="tocS_TableLFTagPolicy">TableLFTagPolicy</h2>
<!-- backwards compatibility -->
<a id="schematablelftagpolicy"></a>
<a id="schema_TableLFTagPolicy"></a>
<a id="tocStablelftagpolicy"></a>
<a id="tocstablelftagpolicy"></a>

```json
{
  "Expression": {}
}
```

The LF-tag policy for a table resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|

<h2 id="tocS_LFResourceDetails">LFResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemalfresourcedetails"></a>
<a id="schema_LFResourceDetails"></a>
<a id="tocSlfresourcedetails"></a>
<a id="tocslfresourcedetails"></a>

```json
{
  "Database": {
    "Expression": {}
  },
  "Table": {
    "Expression": {}
  }
}
```

Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|
|Table|object|false|none|none|

<h2 id="tocS_LFResourceType">LFResourceType</h2>
<!-- backwards compatibility -->
<a id="schemalfresourcetype"></a>
<a id="schema_LFResourceType"></a>
<a id="tocSlfresourcetype"></a>
<a id="tocslfresourcetype"></a>

```json
"TABLE"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ListOfLFTagValues">ListOfLFTagValues</h2>
<!-- backwards compatibility -->
<a id="schemalistoflftagvalues"></a>
<a id="schema_ListOfLFTagValues"></a>
<a id="tocSlistoflftagvalues"></a>
<a id="tocslistoflftagvalues"></a>

```json
[
  "string"
]
```

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

A structure that allows an LF-admin to grant permissions on certain conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|true|none|none|
|TagValues|object|true|none|none|

<h2 id="tocS_LFTagPolicyDetails">LFTagPolicyDetails</h2>
<!-- backwards compatibility -->
<a id="schemalftagpolicydetails"></a>
<a id="schema_LFTagPolicyDetails"></a>
<a id="tocSlftagpolicydetails"></a>
<a id="tocslftagpolicydetails"></a>

```json
{
  "CatalogId": {},
  "ResourceType": {},
  "ResourceDetails": {
    "Database": {
      "Expression": {}
    },
    "Table": {
      "Expression": {}
    }
  }
}
```

Details about the LF-tag policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceDetails|object|true|none|none|

<h2 id="tocS_LakeFormationDataPermissionDetails">LakeFormationDataPermissionDetails</h2>
<!-- backwards compatibility -->
<a id="schemalakeformationdatapermissiondetails"></a>
<a id="schema_LakeFormationDataPermissionDetails"></a>
<a id="tocSlakeformationdatapermissiondetails"></a>
<a id="tocslakeformationdatapermissiondetails"></a>

```json
{
  "LFTagPolicy": {
    "CatalogId": {},
    "ResourceType": {},
    "ResourceDetails": {
      "Database": {
        "Expression": {}
      },
      "Table": {
        "Expression": {}
      }
    }
  }
}
```

Details about the AWS Lake Formation data permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LFTagPolicy|object|false|none|none|

<h2 id="tocS_LakeFormationDataPermissionType">LakeFormationDataPermissionType</h2>
<!-- backwards compatibility -->
<a id="schemalakeformationdatapermissiontype"></a>
<a id="schema_LakeFormationDataPermissionType"></a>
<a id="tocSlakeformationdatapermissiontype"></a>
<a id="tocslakeformationdatapermissiontype"></a>

```json
"LFTagPolicy"
```

<h2 id="tocS_ListOfLFPermissions">ListOfLFPermissions</h2>
<!-- backwards compatibility -->
<a id="schemalistoflfpermissions"></a>
<a id="schema_ListOfLFPermissions"></a>
<a id="tocSlistoflfpermissions"></a>
<a id="tocslistoflfpermissions"></a>

```json
[
  "DESCRIBE"
]
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListDataSetRevisionsRequest">ListDataSetRevisionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetrevisionsrequest"></a>
<a id="schema_ListDataSetRevisionsRequest"></a>
<a id="tocSlistdatasetrevisionsrequest"></a>
<a id="tocslistdatasetrevisionsrequest"></a>

```json
{}
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListOfRevisionEntry">ListOfRevisionEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofrevisionentry"></a>
<a id="schema_ListOfRevisionEntry"></a>
<a id="tocSlistofrevisionentry"></a>
<a id="tocslistofrevisionentry"></a>

```json
[
  {
    "Arn": {},
    "Comment": {},
    "CreatedAt": {},
    "DataSetId": {},
    "Finalized": {},
    "Id": {},
    "SourceId": {},
    "UpdatedAt": {},
    "RevocationComment": {},
    "Revoked": {},
    "RevokedAt": {}
  }
]
```

<h2 id="tocS_ListDataSetsRequest">ListDataSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDataSetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOfDataSetEntry">ListOfDataSetEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofdatasetentry"></a>
<a id="schema_ListOfDataSetEntry"></a>
<a id="tocSlistofdatasetentry"></a>
<a id="tocslistofdatasetentry"></a>

```json
[
  {
    "Arn": {},
    "AssetType": {},
    "CreatedAt": {},
    "Description": {},
    "Id": {},
    "Name": {},
    "Origin": {},
    "OriginDetails": {
      "ProductId": {}
    },
    "SourceId": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_ListEventActionsRequest">ListEventActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventactionsrequest"></a>
<a id="schema_ListEventActionsRequest"></a>
<a id="tocSlisteventactionsrequest"></a>
<a id="tocslisteventactionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOfEventActionEntry">ListOfEventActionEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofeventactionentry"></a>
<a id="schema_ListOfEventActionEntry"></a>
<a id="tocSlistofeventactionentry"></a>
<a id="tocslistofeventactionentry"></a>

```json
[
  {
    "Action": {
      "ExportRevisionToS3": {
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionDestination": {
          "Bucket": {},
          "KeyPattern": {}
        }
      }
    },
    "Arn": {},
    "CreatedAt": {},
    "Event": {
      "RevisionPublished": {
        "DataSetId": {}
      }
    },
    "Id": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOfJobEntry">ListOfJobEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofjobentry"></a>
<a id="schema_ListOfJobEntry"></a>
<a id="tocSlistofjobentry"></a>
<a id="tocslistofjobentry"></a>

```json
[
  {
    "Arn": {},
    "CreatedAt": {},
    "Details": {
      "ExportAssetToSignedUrl": {
        "AssetId": {},
        "DataSetId": {},
        "RevisionId": {},
        "SignedUrl": {},
        "SignedUrlExpiresAt": {}
      },
      "ExportAssetsToS3": {
        "AssetDestinations": {},
        "DataSetId": {},
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionId": {}
      },
      "ExportRevisionsToS3": {
        "DataSetId": {},
        "Encryption": {
          "KmsKeyArn": {},
          "Type": {}
        },
        "RevisionDestinations": {},
        "EventActionArn": {}
      },
      "ImportAssetFromSignedUrl": {
        "AssetName": {},
        "DataSetId": {},
        "Md5Hash": {},
        "RevisionId": {},
        "SignedUrl": {},
        "SignedUrlExpiresAt": {}
      },
      "ImportAssetsFromS3": {
        "AssetSources": {},
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetsFromRedshiftDataShares": {
        "AssetSources": {},
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetFromApiGatewayApi": {
        "ApiDescription": {},
        "ApiId": {},
        "ApiKey": {},
        "ApiName": {},
        "ApiSpecificationMd5Hash": {},
        "ApiSpecificationUploadUrl": {},
        "ApiSpecificationUploadUrlExpiresAt": {},
        "DataSetId": {},
        "ProtocolType": {},
        "RevisionId": {},
        "Stage": {}
      },
      "CreateS3DataAccessFromS3Bucket": {
        "AssetSource": {
          "Bucket": {},
          "KeyPrefixes": {},
          "Keys": {},
          "KmsKeysToGrant": {}
        },
        "DataSetId": {},
        "RevisionId": {}
      },
      "ImportAssetsFromLakeFormationTagPolicy": {
        "CatalogId": {},
        "Database": {
          "Expression": {},
          "Permissions": {}
        },
        "Table": {
          "Expression": {},
          "Permissions": {}
        },
        "RoleArn": {},
        "DataSetId": {},
        "RevisionId": {}
      }
    },
    "Errors": {},
    "Id": {},
    "State": {},
    "Type": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_ListOfAssetEntry">ListOfAssetEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistofassetentry"></a>
<a id="schema_ListOfAssetEntry"></a>
<a id="tocSlistofassetentry"></a>
<a id="tocslistofassetentry"></a>

```json
[
  {
    "Arn": {},
    "AssetDetails": {
      "S3SnapshotAsset": {
        "Size": {}
      },
      "RedshiftDataShareAsset": {
        "Arn": {}
      },
      "ApiGatewayApiAsset": {
        "ApiDescription": {},
        "ApiEndpoint": {},
        "ApiId": {},
        "ApiKey": {},
        "ApiName": {},
        "ApiSpecificationDownloadUrl": {},
        "ApiSpecificationDownloadUrlExpiresAt": {},
        "ProtocolType": {},
        "Stage": {}
      },
      "S3DataAccessAsset": {
        "Bucket": {},
        "KeyPrefixes": {},
        "Keys": {},
        "S3AccessPointAlias": {},
        "S3AccessPointArn": {},
        "KmsKeysToGrant": {}
      },
      "LakeFormationDataPermissionAsset": {
        "LakeFormationDataPermissionDetails": {
          "LFTagPolicy": {
            "CatalogId": {},
            "ResourceType": {},
            "ResourceDetails": {
              "Database": {
                "Expression": {}
              },
              "Table": {
                "Expression": {}
              }
            }
          }
        },
        "LakeFormationDataPermissionType": {},
        "Permissions": {},
        "RoleArn": {}
      }
    },
    "AssetType": {},
    "CreatedAt": {},
    "DataSetId": {},
    "Id": {},
    "Name": {},
    "RevisionId": {},
    "SourceId": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_ListOfKmsKeysToGrant">ListOfKmsKeysToGrant</h2>
<!-- backwards compatibility -->
<a id="schemalistofkmskeystogrant"></a>
<a id="schema_ListOfKmsKeysToGrant"></a>
<a id="tocSlistofkmskeystogrant"></a>
<a id="tocslistofkmskeystogrant"></a>

```json
[
  {
    "KmsKeyArn": {}
  }
]
```

<h2 id="tocS_RedshiftDataShareAssetSourceEntry">RedshiftDataShareAssetSourceEntry</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatashareassetsourceentry"></a>
<a id="schema_RedshiftDataShareAssetSourceEntry"></a>
<a id="tocSredshiftdatashareassetsourceentry"></a>
<a id="tocsredshiftdatashareassetsourceentry"></a>

```json
{
  "DataShareArn": {}
}
```

The source of the Amazon Redshift datashare asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataShareArn|object|true|none|none|

<h2 id="tocS_RevisionDestinationEntry">RevisionDestinationEntry</h2>
<!-- backwards compatibility -->
<a id="schemarevisiondestinationentry"></a>
<a id="schema_RevisionDestinationEntry"></a>
<a id="tocSrevisiondestinationentry"></a>
<a id="tocsrevisiondestinationentry"></a>

```json
{
  "Bucket": {},
  "KeyPattern": {},
  "RevisionId": {}
}
```

The destination where the assets in the revision will be exported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|KeyPattern|object|false|none|none|
|RevisionId|object|true|none|none|

<h2 id="tocS_RevisionEntry">RevisionEntry</h2>
<!-- backwards compatibility -->
<a id="schemarevisionentry"></a>
<a id="schema_RevisionEntry"></a>
<a id="tocSrevisionentry"></a>
<a id="tocsrevisionentry"></a>

```json
{
  "Arn": {},
  "Comment": {},
  "CreatedAt": {},
  "DataSetId": {},
  "Finalized": {},
  "Id": {},
  "SourceId": {},
  "UpdatedAt": {},
  "RevocationComment": {},
  "Revoked": {},
  "RevokedAt": {}
}
```

A revision is a container for one or more assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Comment|object|false|none|none|
|CreatedAt|object|true|none|none|
|DataSetId|object|true|none|none|
|Finalized|object|false|none|none|
|Id|object|true|none|none|
|SourceId|object|false|none|none|
|UpdatedAt|object|true|none|none|
|RevocationComment|object|false|none|none|
|Revoked|object|false|none|none|
|RevokedAt|object|false|none|none|

<h2 id="tocS_TableTagPolicyLFPermission">TableTagPolicyLFPermission</h2>
<!-- backwards compatibility -->
<a id="schematabletagpolicylfpermission"></a>
<a id="schema_TableTagPolicyLFPermission"></a>
<a id="tocStabletagpolicylfpermission"></a>
<a id="tocstabletagpolicylfpermission"></a>

```json
"DESCRIBE"
```

<h2 id="tocS_ListOfTableTagPolicyLFPermissions">ListOfTableTagPolicyLFPermissions</h2>
<!-- backwards compatibility -->
<a id="schemalistoftabletagpolicylfpermissions"></a>
<a id="schema_ListOfTableTagPolicyLFPermissions"></a>
<a id="tocSlistoftabletagpolicylfpermissions"></a>
<a id="tocslistoftabletagpolicylfpermissions"></a>

```json
[
  "DESCRIBE"
]
```

<h2 id="tocS_ListOf__string">ListOf__string</h2>
<!-- backwards compatibility -->
<a id="schemalistof__string"></a>
<a id="schema_ListOf__string"></a>
<a id="tocSlistof__string"></a>
<a id="tocslistof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListRevisionAssetsRequest">ListRevisionAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrevisionassetsrequest"></a>
<a id="schema_ListRevisionAssetsRequest"></a>
<a id="tocSlistrevisionassetsrequest"></a>
<a id="tocslistrevisionassetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_RevokeRevisionRequest">RevokeRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokerevisionrequest"></a>
<a id="schema_RevokeRevisionRequest"></a>
<a id="tocSrevokerevisionrequest"></a>
<a id="tocsrevokerevisionrequest"></a>

```json
{
  "RevocationComment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RevocationComment|object|true|none|none|

<h2 id="tocS___doubleMin0">__doubleMin0</h2>
<!-- backwards compatibility -->
<a id="schema__doublemin0"></a>
<a id="schema___doubleMin0"></a>
<a id="tocS__doublemin0"></a>
<a id="tocs__doublemin0"></a>

```json
0
```

<h2 id="tocS_SendApiAssetRequest">SendApiAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendapiassetrequest"></a>
<a id="schema_SendApiAssetRequest"></a>
<a id="tocSsendapiassetrequest"></a>
<a id="tocssendapiassetrequest"></a>

```json
{
  "Body": {},
  "RequestHeaders": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|RequestHeaders|object|false|none|none|

<h2 id="tocS_StartJobRequest">StartJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrequest"></a>
<a id="schema_StartJobRequest"></a>
<a id="tocSstartjobrequest"></a>
<a id="tocsstartjobrequest"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAssetRequest">UpdateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetrequest"></a>
<a id="schema_UpdateAssetRequest"></a>
<a id="tocSupdateassetrequest"></a>
<a id="tocsupdateassetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateDataSetRequest">UpdateDataSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetrequest"></a>
<a id="schema_UpdateDataSetRequest"></a>
<a id="tocSupdatedatasetrequest"></a>
<a id="tocsupdatedatasetrequest"></a>

```json
{
  "Description": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateEventActionRequest">UpdateEventActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventactionrequest"></a>
<a id="schema_UpdateEventActionRequest"></a>
<a id="tocSupdateeventactionrequest"></a>
<a id="tocsupdateeventactionrequest"></a>

```json
{
  "Action": {
    "ExportRevisionToS3": {
      "Encryption": {
        "KmsKeyArn": {},
        "Type": {}
      },
      "RevisionDestination": {
        "Bucket": {},
        "KeyPattern": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|

<h2 id="tocS_UpdateRevisionRequest">UpdateRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterevisionrequest"></a>
<a id="schema_UpdateRevisionRequest"></a>
<a id="tocSupdaterevisionrequest"></a>
<a id="tocsupdaterevisionrequest"></a>

```json
{
  "Comment": {},
  "Finalized": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Finalized|object|false|none|none|
