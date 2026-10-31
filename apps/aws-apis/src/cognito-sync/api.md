<h1 id="amazon-cognito-sync">Amazon Cognito Sync v2014-06-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

Base URLs:

* <a href="http://cognito-sync.us-east-1.amazonaws.com">http://cognito-sync.us-east-1.amazonaws.com</a> - The Amazon Cognito Sync multi-region endpoint

* <a href="https://cognito-sync.us-east-1.amazonaws.com">https://cognito-sync.us-east-1.amazonaws.com</a> - The Amazon Cognito Sync multi-region endpoint

* <a href="http://cognito-sync.cn-north-1.amazonaws.com.cn">http://cognito-sync.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Sync endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cognito-sync.cn-north-1.amazonaws.com.cn">https://cognito-sync.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Sync endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cognito-sync/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cognito-sync-default">Default</h1>

## BulkPublish

<a id="opIdBulkPublish"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/bulkpublish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /identitypools/{IdentityPoolId}/bulkpublish`

<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="bulkpublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
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
  "IdentityPoolId": {}
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

<h3 id="bulkpublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkPublishResponse](#schemabulkpublishresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|DuplicateRequestException|[DuplicateRequestException](#schemaduplicaterequestexception)|
|485|485|AlreadyStreamedException|[AlreadyStreamedException](#schemaalreadystreamedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}`

<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

<h3 id="describedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|DatasetName|path|string|true|A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).|
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
  "Dataset": {
    "IdentityId": {},
    "DatasetName": {},
    "CreationDate": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DataStorage": {},
    "NumRecords": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRecords

<a id="opIdUpdateRecords"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceId": "string",
    "RecordPatches": [
      {
        "Op": {},
        "Key": {},
        "Value": {},
        "SyncCount": {},
        "DeviceLastModifiedDate": {}
      }
    ],
    "SyncSessionToken": "string"
  }'
```

`POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}`

<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

> Body parameter

```json
{
  "DeviceId": "string",
  "RecordPatches": [
    {
      "Op": {},
      "Key": {},
      "Value": {},
      "SyncCount": {},
      "DeviceLastModifiedDate": {}
    }
  ],
  "SyncSessionToken": "string"
}
```

<h3 id="updaterecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|DatasetName|path|string|true|A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).|
|x-amz-Client-Context|header|string|false|Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceId|body|string|false|The unique ID generated for this device by Cognito.|
|» RecordPatches|body|[[RecordPatch](#schemarecordpatch)]|false|A list of patch operations.|
|» SyncSessionToken|body|string|true|The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.|

> Example responses

> 200 Response

```json
{
  "Records": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updaterecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRecordsResponse](#schemaupdaterecordsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|485|485|InvalidLambdaFunctionOutputException|[InvalidLambdaFunctionOutputException](#schemainvalidlambdafunctionoutputexception)|
|486|486|LambdaThrottledException|[LambdaThrottledException](#schemalambdathrottledexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}`

<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|DatasetName|path|string|true|A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).|
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
  "Dataset": {
    "IdentityId": {},
    "DatasetName": {},
    "CreationDate": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DataStorage": {},
    "NumRecords": {}
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

> 485 Response

```json
null
```

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDatasetResponse](#schemadeletedatasetresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityPoolUsage

<a id="opIdDescribeIdentityPoolUsage"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}`

<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="describeidentitypoolusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
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
  "IdentityPoolUsage": {
    "IdentityPoolId": {},
    "SyncSessionsCount": {},
    "DataStorage": {},
    "LastModifiedDate": {}
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

<h3 id="describeidentitypoolusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIdentityPoolUsageResponse](#schemadescribeidentitypoolusageresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityUsage

<a id="opIdDescribeIdentityUsage"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/identities/{IdentityId}`

<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

<h3 id="describeidentityusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
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
  "IdentityUsage": {
    "IdentityId": {},
    "IdentityPoolId": {},
    "LastModifiedDate": {},
    "DatasetCount": {},
    "DataStorage": {}
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

<h3 id="describeidentityusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIdentityUsageResponse](#schemadescribeidentityusageresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBulkPublishDetails

<a id="opIdGetBulkPublishDetails"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/getBulkPublishDetails \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /identitypools/{IdentityPoolId}/getBulkPublishDetails`

<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="getbulkpublishdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
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
  "IdentityPoolId": {},
  "BulkPublishStartTime": {},
  "BulkPublishCompleteTime": {},
  "BulkPublishStatus": {},
  "FailureMessage": {}
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

<h3 id="getbulkpublishdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBulkPublishDetailsResponse](#schemagetbulkpublishdetailsresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCognitoEvents

<a id="opIdGetCognitoEvents"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/events`

<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="getcognitoevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|The Cognito Identity Pool ID for the request|
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
  "Events": {
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

<h3 id="getcognitoevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCognitoEventsResponse](#schemagetcognitoeventsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetCognitoEvents

<a id="opIdSetCognitoEvents"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Events": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /identitypools/{IdentityPoolId}/events`

<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

> Body parameter

```json
{
  "Events": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="setcognitoevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|The Cognito Identity Pool to use when configuring Cognito Events|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Events|body|object|true|The events to configure|
|» » **additionalProperties**|body|[LambdaFunctionArn](#schemalambdafunctionarn)|false|none|

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

<h3 id="setcognitoevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIdentityPoolConfiguration

<a id="opIdGetIdentityPoolConfiguration"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/configuration`

<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="getidentitypoolconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.|
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
  "IdentityPoolId": {},
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
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

<h3 id="getidentitypoolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityPoolConfigurationResponse](#schemagetidentitypoolconfigurationresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetIdentityPoolConfiguration

<a id="opIdSetIdentityPoolConfiguration"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/configuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PushSync": {
      "ApplicationArns": {},
      "RoleArn": {}
    },
    "CognitoStreams": {
      "StreamName": {},
      "RoleArn": {},
      "StreamingStatus": {}
    }
  }'
```

`POST /identitypools/{IdentityPoolId}/configuration`

<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

> Body parameter

```json
{
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
  }
}
```

<h3 id="setidentitypoolconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PushSync|body|object|false|Configuration options to be applied to the identity pool.|
|» » ApplicationArns|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» CognitoStreams|body|object|false|Configuration options for configure Cognito streams.|
|» » StreamName|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » StreamingStatus|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
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

> 485 Response

```json
null
```

<h3 id="setidentitypoolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityPoolConfigurationResponse](#schemasetidentitypoolconfigurationresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets`

<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|nextToken|query|string|false|A pagination token for obtaining the next page of results.|
|maxResults|query|integer|false|The maximum number of results to be returned.|
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
  "Datasets": {},
  "Count": {},
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
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentityPoolUsage

<a id="opIdListIdentityPoolUsage"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools`

<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>

<h3 id="listidentitypoolusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A pagination token for obtaining the next page of results.|
|maxResults|query|integer|false|The maximum number of results to be returned.|
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
  "IdentityPoolUsages": {},
  "MaxResults": {},
  "Count": {},
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

<h3 id="listidentitypoolusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityPoolUsageResponse](#schemalistidentitypoolusageresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecords

<a id="opIdListRecords"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string/records \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records`

<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

<h3 id="listrecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|IdentityId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.|
|DatasetName|path|string|true|A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).|
|lastSyncCount|query|integer|false|The last server sync count for this record.|
|nextToken|query|string|false|A pagination token for obtaining the next page of results.|
|maxResults|query|integer|false|The maximum number of results to be returned.|
|syncSessionToken|query|string|false|A token containing a session ID, identity ID, and expiration.|
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
  "Records": {},
  "NextToken": {},
  "Count": {},
  "DatasetSyncCount": {},
  "LastModifiedBy": {},
  "MergedDatasetNames": {},
  "DatasetExists": {},
  "DatasetDeletedAfterRequestedSyncCount": {},
  "SyncSessionToken": {}
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

<h3 id="listrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecordsResponse](#schemalistrecordsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterDevice

<a id="opIdRegisterDevice"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identity/string/device \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Platform": "APNS",
    "Token": "string"
  }'
```

`POST /identitypools/{IdentityPoolId}/identity/{IdentityId}/device`

<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

> Body parameter

```json
{
  "Platform": "APNS",
  "Token": "string"
}
```

<h3 id="registerdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.|
|IdentityId|path|string|true|The unique ID for this identity.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Platform|body|string|true|The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).|
|» Token|body|string|true|The push token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Platform|APNS|
|» Platform|APNS_SANDBOX|
|» Platform|GCM|
|» Platform|ADM|

> Example responses

> 200 Response

```json
{
  "DeviceId": {}
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

<h3 id="registerdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterDeviceResponse](#schemaregisterdeviceresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|InvalidConfigurationException|[InvalidConfigurationException](#schemainvalidconfigurationexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubscribeToDataset

<a id="opIdSubscribeToDataset"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string/subscriptions/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}`

<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

<h3 id="subscribetodataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.|
|IdentityId|path|string|true|Unique ID for this identity.|
|DatasetName|path|string|true|The name of the dataset to subcribe to.|
|DeviceId|path|string|true|The unique ID generated for this device by Cognito.|
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

<h3 id="subscribetodataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubscribeToDatasetResponse](#schemasubscribetodatasetresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|InvalidConfigurationException|[InvalidConfigurationException](#schemainvalidconfigurationexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnsubscribeFromDataset

<a id="opIdUnsubscribeFromDataset"></a>

> Code samples

```bash
curl https://cognito-sync.us-east-1.amazonaws.com/identitypools/string/identities/string/datasets/string/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}`

<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

<h3 id="unsubscribefromdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityPoolId|path|string|true|A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.|
|IdentityId|path|string|true|Unique ID for this identity.|
|DatasetName|path|string|true|The name of the dataset from which to unsubcribe.|
|DeviceId|path|string|true|The unique ID generated for this device by Cognito.|
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

<h3 id="unsubscribefromdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnsubscribeFromDatasetResponse](#schemaunsubscribefromdatasetresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|InvalidConfigurationException|[InvalidConfigurationException](#schemainvalidconfigurationexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BulkPublishResponse">BulkPublishResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkpublishresponse"></a>
<a id="schema_BulkPublishResponse"></a>
<a id="tocSbulkpublishresponse"></a>
<a id="tocsbulkpublishresponse"></a>

```json
{
  "IdentityPoolId": {}
}
```

The output for the BulkPublish operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_DuplicateRequestException">DuplicateRequestException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicaterequestexception"></a>
<a id="schema_DuplicateRequestException"></a>
<a id="tocSduplicaterequestexception"></a>
<a id="tocsduplicaterequestexception"></a>

```json
null
```

<h2 id="tocS_AlreadyStreamedException">AlreadyStreamedException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadystreamedexception"></a>
<a id="schema_AlreadyStreamedException"></a>
<a id="tocSalreadystreamedexception"></a>
<a id="tocsalreadystreamedexception"></a>

```json
null
```

<h2 id="tocS_DeleteDatasetResponse">DeleteDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetresponse"></a>
<a id="schema_DeleteDatasetResponse"></a>
<a id="tocSdeletedatasetresponse"></a>
<a id="tocsdeletedatasetresponse"></a>

```json
{
  "Dataset": {
    "IdentityId": {},
    "DatasetName": {},
    "CreationDate": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DataStorage": {},
    "NumRecords": {}
  }
}
```

Response to a successful DeleteDataset request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dataset|object|false|none|none|

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

```json
null
```

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "Dataset": {
    "IdentityId": {},
    "DatasetName": {},
    "CreationDate": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DataStorage": {},
    "NumRecords": {}
  }
}
```

Response to a successful DescribeDataset request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dataset|object|false|none|none|

<h2 id="tocS_DescribeIdentityPoolUsageResponse">DescribeIdentityPoolUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentitypoolusageresponse"></a>
<a id="schema_DescribeIdentityPoolUsageResponse"></a>
<a id="tocSdescribeidentitypoolusageresponse"></a>
<a id="tocsdescribeidentitypoolusageresponse"></a>

```json
{
  "IdentityPoolUsage": {
    "IdentityPoolId": {},
    "SyncSessionsCount": {},
    "DataStorage": {},
    "LastModifiedDate": {}
  }
}
```

Response to a successful DescribeIdentityPoolUsage request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolUsage|object|false|none|none|

<h2 id="tocS_DescribeIdentityUsageResponse">DescribeIdentityUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityusageresponse"></a>
<a id="schema_DescribeIdentityUsageResponse"></a>
<a id="tocSdescribeidentityusageresponse"></a>
<a id="tocsdescribeidentityusageresponse"></a>

```json
{
  "IdentityUsage": {
    "IdentityId": {},
    "IdentityPoolId": {},
    "LastModifiedDate": {},
    "DatasetCount": {},
    "DataStorage": {}
  }
}
```

The response to a successful DescribeIdentityUsage request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityUsage|object|false|none|none|

<h2 id="tocS_GetBulkPublishDetailsResponse">GetBulkPublishDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbulkpublishdetailsresponse"></a>
<a id="schema_GetBulkPublishDetailsResponse"></a>
<a id="tocSgetbulkpublishdetailsresponse"></a>
<a id="tocsgetbulkpublishdetailsresponse"></a>

```json
{
  "IdentityPoolId": {},
  "BulkPublishStartTime": {},
  "BulkPublishCompleteTime": {},
  "BulkPublishStatus": {},
  "FailureMessage": {}
}
```

The output for the GetBulkPublishDetails operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|BulkPublishStartTime|object|false|none|none|
|BulkPublishCompleteTime|object|false|none|none|
|BulkPublishStatus|object|false|none|none|
|FailureMessage|object|false|none|none|

<h2 id="tocS_GetCognitoEventsResponse">GetCognitoEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcognitoeventsresponse"></a>
<a id="schema_GetCognitoEventsResponse"></a>
<a id="tocSgetcognitoeventsresponse"></a>
<a id="tocsgetcognitoeventsresponse"></a>

```json
{
  "Events": {
    "property1": "string",
    "property2": "string"
  }
}
```

The response from the GetCognitoEvents request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|

<h2 id="tocS_GetIdentityPoolConfigurationResponse">GetIdentityPoolConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoolconfigurationresponse"></a>
<a id="schema_GetIdentityPoolConfigurationResponse"></a>
<a id="tocSgetidentitypoolconfigurationresponse"></a>
<a id="tocsgetidentitypoolconfigurationresponse"></a>

```json
{
  "IdentityPoolId": {},
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
  }
}
```

The output for the GetIdentityPoolConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|PushSync|object|false|none|none|
|CognitoStreams|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "Datasets": {},
  "Count": {},
  "NextToken": {}
}
```

Returned for a successful ListDatasets request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Datasets|object|false|none|none|
|Count|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityPoolUsageResponse">ListIdentityPoolUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoolusageresponse"></a>
<a id="schema_ListIdentityPoolUsageResponse"></a>
<a id="tocSlistidentitypoolusageresponse"></a>
<a id="tocslistidentitypoolusageresponse"></a>

```json
{
  "IdentityPoolUsages": {},
  "MaxResults": {},
  "Count": {},
  "NextToken": {}
}
```

Returned for a successful ListIdentityPoolUsage request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolUsages|object|false|none|none|
|MaxResults|object|false|none|none|
|Count|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecordsResponse">ListRecordsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordsresponse"></a>
<a id="schema_ListRecordsResponse"></a>
<a id="tocSlistrecordsresponse"></a>
<a id="tocslistrecordsresponse"></a>

```json
{
  "Records": {},
  "NextToken": {},
  "Count": {},
  "DatasetSyncCount": {},
  "LastModifiedBy": {},
  "MergedDatasetNames": {},
  "DatasetExists": {},
  "DatasetDeletedAfterRequestedSyncCount": {},
  "SyncSessionToken": {}
}
```

Returned for a successful ListRecordsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|false|none|none|
|NextToken|object|false|none|none|
|Count|object|false|none|none|
|DatasetSyncCount|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|MergedDatasetNames|object|false|none|none|
|DatasetExists|object|false|none|none|
|DatasetDeletedAfterRequestedSyncCount|object|false|none|none|
|SyncSessionToken|object|false|none|none|

<h2 id="tocS_RegisterDeviceResponse">RegisterDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdeviceresponse"></a>
<a id="schema_RegisterDeviceResponse"></a>
<a id="tocSregisterdeviceresponse"></a>
<a id="tocsregisterdeviceresponse"></a>

```json
{
  "DeviceId": {}
}
```

Response to a RegisterDevice request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|false|none|none|

<h2 id="tocS_InvalidConfigurationException">InvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationexception"></a>
<a id="schema_InvalidConfigurationException"></a>
<a id="tocSinvalidconfigurationexception"></a>
<a id="tocsinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_LambdaFunctionArn">LambdaFunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionarn"></a>
<a id="schema_LambdaFunctionArn"></a>
<a id="tocSlambdafunctionarn"></a>
<a id="tocslambdafunctionarn"></a>

```json
"string"
```

<h2 id="tocS_SetIdentityPoolConfigurationResponse">SetIdentityPoolConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitypoolconfigurationresponse"></a>
<a id="schema_SetIdentityPoolConfigurationResponse"></a>
<a id="tocSsetidentitypoolconfigurationresponse"></a>
<a id="tocssetidentitypoolconfigurationresponse"></a>

```json
{
  "IdentityPoolId": {},
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
  }
}
```

The output for the SetIdentityPoolConfiguration operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|PushSync|object|false|none|none|
|CognitoStreams|object|false|none|none|

<h2 id="tocS_ApplicationArnList">ApplicationArnList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationarnlist"></a>
<a id="schema_ApplicationArnList"></a>
<a id="tocSapplicationarnlist"></a>
<a id="tocsapplicationarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssumeRoleArn">AssumeRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolearn"></a>
<a id="schema_AssumeRoleArn"></a>
<a id="tocSassumerolearn"></a>
<a id="tocsassumerolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_StreamName">StreamName</h2>
<!-- backwards compatibility -->
<a id="schemastreamname"></a>
<a id="schema_StreamName"></a>
<a id="tocSstreamname"></a>
<a id="tocsstreamname"></a>

```json
"string"
```

<h2 id="tocS_StreamingStatus">StreamingStatus</h2>
<!-- backwards compatibility -->
<a id="schemastreamingstatus"></a>
<a id="schema_StreamingStatus"></a>
<a id="tocSstreamingstatus"></a>
<a id="tocsstreamingstatus"></a>

```json
"ENABLED"
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

<h2 id="tocS_SubscribeToDatasetResponse">SubscribeToDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscribetodatasetresponse"></a>
<a id="schema_SubscribeToDatasetResponse"></a>
<a id="tocSsubscribetodatasetresponse"></a>
<a id="tocssubscribetodatasetresponse"></a>

```json
{}
```

Response to a SubscribeToDataset request.

<h2 id="tocS_UnsubscribeFromDatasetResponse">UnsubscribeFromDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribefromdatasetresponse"></a>
<a id="schema_UnsubscribeFromDatasetResponse"></a>
<a id="tocSunsubscribefromdatasetresponse"></a>
<a id="tocsunsubscribefromdatasetresponse"></a>

```json
{}
```

Response to an UnsubscribeFromDataset request.

<h2 id="tocS_UpdateRecordsResponse">UpdateRecordsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecordsresponse"></a>
<a id="schema_UpdateRecordsResponse"></a>
<a id="tocSupdaterecordsresponse"></a>
<a id="tocsupdaterecordsresponse"></a>

```json
{
  "Records": {}
}
```

Returned for a successful UpdateRecordsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|false|none|none|

<h2 id="tocS_RecordPatch">RecordPatch</h2>
<!-- backwards compatibility -->
<a id="schemarecordpatch"></a>
<a id="schema_RecordPatch"></a>
<a id="tocSrecordpatch"></a>
<a id="tocsrecordpatch"></a>

```json
{
  "Op": {},
  "Key": {},
  "Value": {},
  "SyncCount": {},
  "DeviceLastModifiedDate": {}
}
```

An update operation for a record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Op|object|true|none|none|
|Key|object|true|none|none|
|Value|object|false|none|none|
|SyncCount|object|true|none|none|
|DeviceLastModifiedDate|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidLambdaFunctionOutputException">InvalidLambdaFunctionOutputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlambdafunctionoutputexception"></a>
<a id="schema_InvalidLambdaFunctionOutputException"></a>
<a id="tocSinvalidlambdafunctionoutputexception"></a>
<a id="tocsinvalidlambdafunctionoutputexception"></a>

```json
null
```

<h2 id="tocS_LambdaThrottledException">LambdaThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemalambdathrottledexception"></a>
<a id="schema_LambdaThrottledException"></a>
<a id="tocSlambdathrottledexception"></a>
<a id="tocslambdathrottledexception"></a>

```json
null
```

<h2 id="tocS_ApplicationArn">ApplicationArn</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationarn"></a>
<a id="schema_ApplicationArn"></a>
<a id="tocSapplicationarn"></a>
<a id="tocsapplicationarn"></a>

```json
"string"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_IdentityPoolId">IdentityPoolId</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolid"></a>
<a id="schema_IdentityPoolId"></a>
<a id="tocSidentitypoolid"></a>
<a id="tocsidentitypoolid"></a>

```json
"string"
```

<h2 id="tocS_BulkPublishRequest">BulkPublishRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkpublishrequest"></a>
<a id="schema_BulkPublishRequest"></a>
<a id="tocSbulkpublishrequest"></a>
<a id="tocsbulkpublishrequest"></a>

```json
{}
```

The input for the BulkPublish operation.

<h2 id="tocS_BulkPublishStatus">BulkPublishStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkpublishstatus"></a>
<a id="schema_BulkPublishStatus"></a>
<a id="tocSbulkpublishstatus"></a>
<a id="tocsbulkpublishstatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_ClientContext">ClientContext</h2>
<!-- backwards compatibility -->
<a id="schemaclientcontext"></a>
<a id="schema_ClientContext"></a>
<a id="tocSclientcontext"></a>
<a id="tocsclientcontext"></a>

```json
"string"
```

<h2 id="tocS_CognitoEventType">CognitoEventType</h2>
<!-- backwards compatibility -->
<a id="schemacognitoeventtype"></a>
<a id="schema_CognitoEventType"></a>
<a id="tocScognitoeventtype"></a>
<a id="tocscognitoeventtype"></a>

```json
"string"
```

<h2 id="tocS_CognitoStreams">CognitoStreams</h2>
<!-- backwards compatibility -->
<a id="schemacognitostreams"></a>
<a id="schema_CognitoStreams"></a>
<a id="tocScognitostreams"></a>
<a id="tocscognitostreams"></a>

```json
{
  "StreamName": {},
  "RoleArn": {},
  "StreamingStatus": {}
}
```

Configuration options for configure Cognito streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|RoleArn|object|false|none|none|
|StreamingStatus|object|false|none|none|

<h2 id="tocS_IdentityId">IdentityId</h2>
<!-- backwards compatibility -->
<a id="schemaidentityid"></a>
<a id="schema_IdentityId"></a>
<a id="tocSidentityid"></a>
<a id="tocsidentityid"></a>

```json
"string"
```

<h2 id="tocS_DatasetName">DatasetName</h2>
<!-- backwards compatibility -->
<a id="schemadatasetname"></a>
<a id="schema_DatasetName"></a>
<a id="tocSdatasetname"></a>
<a id="tocsdatasetname"></a>

```json
"string"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "IdentityId": {},
  "DatasetName": {},
  "CreationDate": {},
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "DataStorage": {},
  "NumRecords": {}
}
```

A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|DatasetName|object|false|none|none|
|CreationDate|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|DataStorage|object|false|none|none|
|NumRecords|object|false|none|none|

<h2 id="tocS_DatasetList">DatasetList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlist"></a>
<a id="schema_DatasetList"></a>
<a id="tocSdatasetlist"></a>
<a id="tocsdatasetlist"></a>

```json
[
  {
    "IdentityId": {},
    "DatasetName": {},
    "CreationDate": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DataStorage": {},
    "NumRecords": {}
  }
]
```

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{}
```

A request to delete the specific dataset.

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{}
```

A request for meta data about a dataset (creation date, number of records, size) by owner and dataset name.

<h2 id="tocS_DescribeIdentityPoolUsageRequest">DescribeIdentityPoolUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentitypoolusagerequest"></a>
<a id="schema_DescribeIdentityPoolUsageRequest"></a>
<a id="tocSdescribeidentitypoolusagerequest"></a>
<a id="tocsdescribeidentitypoolusagerequest"></a>

```json
{}
```

A request for usage information about the identity pool.

<h2 id="tocS_IdentityPoolUsage">IdentityPoolUsage</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolusage"></a>
<a id="schema_IdentityPoolUsage"></a>
<a id="tocSidentitypoolusage"></a>
<a id="tocsidentitypoolusage"></a>

```json
{
  "IdentityPoolId": {},
  "SyncSessionsCount": {},
  "DataStorage": {},
  "LastModifiedDate": {}
}
```

Usage information for the identity pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|SyncSessionsCount|object|false|none|none|
|DataStorage|object|false|none|none|
|LastModifiedDate|object|false|none|none|

<h2 id="tocS_DescribeIdentityUsageRequest">DescribeIdentityUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityusagerequest"></a>
<a id="schema_DescribeIdentityUsageRequest"></a>
<a id="tocSdescribeidentityusagerequest"></a>
<a id="tocsdescribeidentityusagerequest"></a>

```json
{}
```

A request for information about the usage of an identity pool.

<h2 id="tocS_IdentityUsage">IdentityUsage</h2>
<!-- backwards compatibility -->
<a id="schemaidentityusage"></a>
<a id="schema_IdentityUsage"></a>
<a id="tocSidentityusage"></a>
<a id="tocsidentityusage"></a>

```json
{
  "IdentityId": {},
  "IdentityPoolId": {},
  "LastModifiedDate": {},
  "DatasetCount": {},
  "DataStorage": {}
}
```

Usage information for the identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|IdentityPoolId|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|DatasetCount|object|false|none|none|
|DataStorage|object|false|none|none|

<h2 id="tocS_DeviceId">DeviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_DeviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
"string"
```

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LambdaFunctionArn](#schemalambdafunctionarn)|false|none|none|

<h2 id="tocS_GetBulkPublishDetailsRequest">GetBulkPublishDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbulkpublishdetailsrequest"></a>
<a id="schema_GetBulkPublishDetailsRequest"></a>
<a id="tocSgetbulkpublishdetailsrequest"></a>
<a id="tocsgetbulkpublishdetailsrequest"></a>

```json
{}
```

The input for the GetBulkPublishDetails operation.

<h2 id="tocS_GetCognitoEventsRequest">GetCognitoEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcognitoeventsrequest"></a>
<a id="schema_GetCognitoEventsRequest"></a>
<a id="tocSgetcognitoeventsrequest"></a>
<a id="tocsgetcognitoeventsrequest"></a>

```json
{}
```

A request for a list of the configured Cognito Events

<h2 id="tocS_GetIdentityPoolConfigurationRequest">GetIdentityPoolConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoolconfigurationrequest"></a>
<a id="schema_GetIdentityPoolConfigurationRequest"></a>
<a id="tocSgetidentitypoolconfigurationrequest"></a>
<a id="tocsgetidentitypoolconfigurationrequest"></a>

```json
{}
```

The input for the GetIdentityPoolConfiguration operation.

<h2 id="tocS_PushSync">PushSync</h2>
<!-- backwards compatibility -->
<a id="schemapushsync"></a>
<a id="schema_PushSync"></a>
<a id="tocSpushsync"></a>
<a id="tocspushsync"></a>

```json
{
  "ApplicationArns": {},
  "RoleArn": {}
}
```

Configuration options to be applied to the identity pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationArns|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_IdentityPoolUsageList">IdentityPoolUsageList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolusagelist"></a>
<a id="schema_IdentityPoolUsageList"></a>
<a id="tocSidentitypoolusagelist"></a>
<a id="tocsidentitypoolusagelist"></a>

```json
[
  {
    "IdentityPoolId": {},
    "SyncSessionsCount": {},
    "DataStorage": {},
    "LastModifiedDate": {}
  }
]
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

<h2 id="tocS_IntegerString">IntegerString</h2>
<!-- backwards compatibility -->
<a id="schemaintegerstring"></a>
<a id="schema_IntegerString"></a>
<a id="tocSintegerstring"></a>
<a id="tocsintegerstring"></a>

```json
0
```

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{}
```

Request for a list of datasets for an identity.

<h2 id="tocS_ListIdentityPoolUsageRequest">ListIdentityPoolUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoolusagerequest"></a>
<a id="schema_ListIdentityPoolUsageRequest"></a>
<a id="tocSlistidentitypoolusagerequest"></a>
<a id="tocslistidentitypoolusagerequest"></a>

```json
{}
```

A request for usage information on an identity pool.

<h2 id="tocS_SyncSessionToken">SyncSessionToken</h2>
<!-- backwards compatibility -->
<a id="schemasyncsessiontoken"></a>
<a id="schema_SyncSessionToken"></a>
<a id="tocSsyncsessiontoken"></a>
<a id="tocssyncsessiontoken"></a>

```json
"string"
```

<h2 id="tocS_ListRecordsRequest">ListRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordsrequest"></a>
<a id="schema_ListRecordsRequest"></a>
<a id="tocSlistrecordsrequest"></a>
<a id="tocslistrecordsrequest"></a>

```json
{}
```

A request for a list of records.

<h2 id="tocS_RecordList">RecordList</h2>
<!-- backwards compatibility -->
<a id="schemarecordlist"></a>
<a id="schema_RecordList"></a>
<a id="tocSrecordlist"></a>
<a id="tocsrecordlist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "SyncCount": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "DeviceLastModifiedDate": {}
  }
]
```

<h2 id="tocS_MergedDatasetNameList">MergedDatasetNameList</h2>
<!-- backwards compatibility -->
<a id="schemamergeddatasetnamelist"></a>
<a id="schema_MergedDatasetNameList"></a>
<a id="tocSmergeddatasetnamelist"></a>
<a id="tocsmergeddatasetnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
"replace"
```

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"APNS"
```

<h2 id="tocS_PushToken">PushToken</h2>
<!-- backwards compatibility -->
<a id="schemapushtoken"></a>
<a id="schema_PushToken"></a>
<a id="tocSpushtoken"></a>
<a id="tocspushtoken"></a>

```json
"string"
```

<h2 id="tocS_RecordKey">RecordKey</h2>
<!-- backwards compatibility -->
<a id="schemarecordkey"></a>
<a id="schema_RecordKey"></a>
<a id="tocSrecordkey"></a>
<a id="tocsrecordkey"></a>

```json
"string"
```

<h2 id="tocS_RecordValue">RecordValue</h2>
<!-- backwards compatibility -->
<a id="schemarecordvalue"></a>
<a id="schema_RecordValue"></a>
<a id="tocSrecordvalue"></a>
<a id="tocsrecordvalue"></a>

```json
"string"
```

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "Key": {},
  "Value": {},
  "SyncCount": {},
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "DeviceLastModifiedDate": {}
}
```

The basic data structure of a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|SyncCount|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|DeviceLastModifiedDate|object|false|none|none|

<h2 id="tocS_RecordPatchList">RecordPatchList</h2>
<!-- backwards compatibility -->
<a id="schemarecordpatchlist"></a>
<a id="schema_RecordPatchList"></a>
<a id="tocSrecordpatchlist"></a>
<a id="tocsrecordpatchlist"></a>

```json
[
  {
    "Op": {},
    "Key": {},
    "Value": {},
    "SyncCount": {},
    "DeviceLastModifiedDate": {}
  }
]
```

<h2 id="tocS_RegisterDeviceRequest">RegisterDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdevicerequest"></a>
<a id="schema_RegisterDeviceRequest"></a>
<a id="tocSregisterdevicerequest"></a>
<a id="tocsregisterdevicerequest"></a>

```json
{
  "Platform": {},
  "Token": {}
}
```

A request to RegisterDevice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Platform|object|true|none|none|
|Token|object|true|none|none|

<h2 id="tocS_SetCognitoEventsRequest">SetCognitoEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetcognitoeventsrequest"></a>
<a id="schema_SetCognitoEventsRequest"></a>
<a id="tocSsetcognitoeventsrequest"></a>
<a id="tocssetcognitoeventsrequest"></a>

```json
{
  "Events": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>A request to configure Cognito Events"</p>"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|true|none|none|

<h2 id="tocS_SetIdentityPoolConfigurationRequest">SetIdentityPoolConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitypoolconfigurationrequest"></a>
<a id="schema_SetIdentityPoolConfigurationRequest"></a>
<a id="tocSsetidentitypoolconfigurationrequest"></a>
<a id="tocssetidentitypoolconfigurationrequest"></a>

```json
{
  "PushSync": {
    "ApplicationArns": {},
    "RoleArn": {}
  },
  "CognitoStreams": {
    "StreamName": {},
    "RoleArn": {},
    "StreamingStatus": {}
  }
}
```

The input for the SetIdentityPoolConfiguration operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PushSync|object|false|none|none|
|CognitoStreams|object|false|none|none|

<h2 id="tocS_SubscribeToDatasetRequest">SubscribeToDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscribetodatasetrequest"></a>
<a id="schema_SubscribeToDatasetRequest"></a>
<a id="tocSsubscribetodatasetrequest"></a>
<a id="tocssubscribetodatasetrequest"></a>

```json
{}
```

A request to SubscribeToDatasetRequest.

<h2 id="tocS_UnsubscribeFromDatasetRequest">UnsubscribeFromDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribefromdatasetrequest"></a>
<a id="schema_UnsubscribeFromDatasetRequest"></a>
<a id="tocSunsubscribefromdatasetrequest"></a>
<a id="tocsunsubscribefromdatasetrequest"></a>

```json
{}
```

A request to UnsubscribeFromDataset.

<h2 id="tocS_UpdateRecordsRequest">UpdateRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecordsrequest"></a>
<a id="schema_UpdateRecordsRequest"></a>
<a id="tocSupdaterecordsrequest"></a>
<a id="tocsupdaterecordsrequest"></a>

```json
{
  "DeviceId": {},
  "RecordPatches": {},
  "SyncSessionToken": {}
}
```

A request to post updates to records or add and delete records for a dataset and user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|false|none|none|
|RecordPatches|object|false|none|none|
|SyncSessionToken|object|true|none|none|
