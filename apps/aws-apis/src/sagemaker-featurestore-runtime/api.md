<h1 id="amazon-sagemaker-feature-store-runtime">Amazon SageMaker Feature Store Runtime v2020-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store.</p> <p>Use the following operations to configure your <code>OnlineStore</code> and <code>OfflineStore</code> features, and to create and manage feature groups:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a> </p> </li> </ul>

Base URLs:

* <a href="http://featurestore-runtime.sagemaker.us-east-1.amazonaws.com">http://featurestore-runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon SageMaker Feature Store Runtime multi-region endpoint

* <a href="https://featurestore-runtime.sagemaker.us-east-1.amazonaws.com">https://featurestore-runtime.sagemaker.us-east-1.amazonaws.com</a> - The Amazon SageMaker Feature Store Runtime multi-region endpoint

* <a href="http://featurestore-runtime.sagemaker.cn-north-1.amazonaws.com.cn">http://featurestore-runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon SageMaker Feature Store Runtime endpoint for China (Beijing) and China (Ningxia)

* <a href="https://featurestore-runtime.sagemaker.cn-north-1.amazonaws.com.cn">https://featurestore-runtime.sagemaker.cn-north-1.amazonaws.com.cn</a> - The Amazon SageMaker Feature Store Runtime endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sagemaker/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-sagemaker-feature-store-runtime-default">Default</h1>

## BatchGetRecord

<a id="opIdBatchGetRecord"></a>

> Code samples

```bash
curl https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com/BatchGetRecord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Identifiers": [
      {
        "FeatureGroupName": {},
        "RecordIdentifiersValueAsString": {},
        "FeatureNames": {}
      }
    ]
  }'
```

`POST /BatchGetRecord`

Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.

> Body parameter

```json
{
  "Identifiers": [
    {
      "FeatureGroupName": {},
      "RecordIdentifiersValueAsString": {},
      "FeatureNames": {}
    }
  ]
}
```

<h3 id="batchgetrecord-parameters">Parameters</h3>

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
|» Identifiers|body|[[BatchGetRecordIdentifier](#schemabatchgetrecordidentifier)]|true|A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name that have been requested to be retrieved in batch.|

> Example responses

> 200 Response

```json
{
  "Records": {},
  "Errors": {},
  "UnprocessedIdentifiers": {}
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

<h3 id="batchgetrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetRecordResponse](#schemabatchgetrecordresponse)|
|480|480|ValidationError|[ValidationError](#schemavalidationerror)|
|481|481|InternalFailure|[InternalFailure](#schemainternalfailure)|
|482|482|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|483|483|AccessForbidden|[AccessForbidden](#schemaaccessforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRecord

<a id="opIdDeleteRecord"></a>

> Code samples

```bash
curl 'https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com/FeatureGroup/string#RecordIdentifierValueAsString&EventTime?RecordIdentifierValueAsString=string&EventTime=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString&EventTime`

<p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>

<h3 id="deleterecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FeatureGroupName|path|string|true|The name of the feature group to delete the record from. |
|RecordIdentifierValueAsString|query|string|true|The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in string format. |
|EventTime|query|string|true|Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be used to query data at a certain point in time.|
|TargetStores|query|[[TargetStore](#schematargetstore)]|false|A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the <code>FeatureGroup</code>.|
|DeletionMode|query|string|false|The name of the deletion mode for deleting the record. By default, the deletion mode is set to <code>SoftDelete</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TargetStores|OnlineStore|
|TargetStores|OfflineStore|
|DeletionMode|SoftDelete|
|DeletionMode|HardDelete|

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

<h3 id="deleterecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationError|[ValidationError](#schemavalidationerror)|
|481|481|InternalFailure|[InternalFailure](#schemainternalfailure)|
|482|482|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|483|483|AccessForbidden|[AccessForbidden](#schemaaccessforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecord

<a id="opIdGetRecord"></a>

> Code samples

```bash
curl 'https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com/FeatureGroup/string#RecordIdentifierValueAsString?RecordIdentifierValueAsString=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString`

Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 

<h3 id="getrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FeatureGroupName|path|string|true|The name of the feature group from which you want to retrieve a record.|
|RecordIdentifierValueAsString|query|string|true|The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies the record in the <code>FeatureGroup</code>. |
|FeatureName|query|[[FeatureName](#schemafeaturename)]|false|List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.|
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
  "Record": {}
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

<h3 id="getrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecordResponse](#schemagetrecordresponse)|
|480|480|ValidationError|[ValidationError](#schemavalidationerror)|
|481|481|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|482|482|InternalFailure|[InternalFailure](#schemainternalfailure)|
|483|483|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|484|484|AccessForbidden|[AccessForbidden](#schemaaccessforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecord

<a id="opIdPutRecord"></a>

> Code samples

```bash
curl https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com/FeatureGroup/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Record": [
      {
        "FeatureName": {},
        "ValueAsString": {}
      }
    ],
    "TargetStores": [
      "OnlineStore"
    ]
  }'
```

`PUT /FeatureGroup/{FeatureGroupName}`

Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.

> Body parameter

```json
{
  "Record": [
    {
      "FeatureName": {},
      "ValueAsString": {}
    }
  ],
  "TargetStores": [
    "OnlineStore"
  ]
}
```

<h3 id="putrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FeatureGroupName|path|string|true|The name of the feature group that you want to insert the record into.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Record|body|[[FeatureValue](#schemafeaturevalue)]|true|<p>List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:</p> <ul> <li> <p>Use <code>GetRecord</code> to retrieve the latest record.</p> </li> <li> <p>Update the record returned from <code>GetRecord</code>. </p> </li> <li> <p>Use <code>PutRecord</code> to update feature values.</p> </li> </ul>|
|» TargetStores|body|[[TargetStore](#schematargetstore)]|false|A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TargetStores|OnlineStore|
|» TargetStores|OfflineStore|

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

<h3 id="putrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationError|[ValidationError](#schemavalidationerror)|
|481|481|InternalFailure|[InternalFailure](#schemainternalfailure)|
|482|482|ServiceUnavailable|[ServiceUnavailable](#schemaserviceunavailable)|
|483|483|AccessForbidden|[AccessForbidden](#schemaaccessforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchGetRecordResponse">BatchGetRecordResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordresponse"></a>
<a id="schema_BatchGetRecordResponse"></a>
<a id="tocSbatchgetrecordresponse"></a>
<a id="tocsbatchgetrecordresponse"></a>

```json
{
  "Records": {},
  "Errors": {},
  "UnprocessedIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|true|none|none|
|Errors|object|true|none|none|
|UnprocessedIdentifiers|object|true|none|none|

<h2 id="tocS_BatchGetRecordIdentifier">BatchGetRecordIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordidentifier"></a>
<a id="schema_BatchGetRecordIdentifier"></a>
<a id="tocSbatchgetrecordidentifier"></a>
<a id="tocsbatchgetrecordidentifier"></a>

```json
{
  "FeatureGroupName": {},
  "RecordIdentifiersValueAsString": {},
  "FeatureNames": {}
}
```

The identifier that identifies the batch of Records you are retrieving in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeatureGroupName|object|true|none|none|
|RecordIdentifiersValueAsString|object|true|none|none|
|FeatureNames|object|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
null
```

<h2 id="tocS_InternalFailure">InternalFailure</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailure"></a>
<a id="schema_InternalFailure"></a>
<a id="tocSinternalfailure"></a>
<a id="tocsinternalfailure"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailable">ServiceUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailable"></a>
<a id="schema_ServiceUnavailable"></a>
<a id="tocSserviceunavailable"></a>
<a id="tocsserviceunavailable"></a>

```json
null
```

<h2 id="tocS_AccessForbidden">AccessForbidden</h2>
<!-- backwards compatibility -->
<a id="schemaaccessforbidden"></a>
<a id="schema_AccessForbidden"></a>
<a id="tocSaccessforbidden"></a>
<a id="tocsaccessforbidden"></a>

```json
null
```

<h2 id="tocS_TargetStore">TargetStore</h2>
<!-- backwards compatibility -->
<a id="schematargetstore"></a>
<a id="schema_TargetStore"></a>
<a id="tocStargetstore"></a>
<a id="tocstargetstore"></a>

```json
"OnlineStore"
```

<h2 id="tocS_GetRecordResponse">GetRecordResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordresponse"></a>
<a id="schema_GetRecordResponse"></a>
<a id="tocSgetrecordresponse"></a>
<a id="tocsgetrecordresponse"></a>

```json
{
  "Record": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Record|object|false|none|none|

<h2 id="tocS_FeatureName">FeatureName</h2>
<!-- backwards compatibility -->
<a id="schemafeaturename"></a>
<a id="schema_FeatureName"></a>
<a id="tocSfeaturename"></a>
<a id="tocsfeaturename"></a>

```json
"string"
```

<h2 id="tocS_ResourceNotFound">ResourceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfound"></a>
<a id="schema_ResourceNotFound"></a>
<a id="tocSresourcenotfound"></a>
<a id="tocsresourcenotfound"></a>

```json
null
```

<h2 id="tocS_FeatureValue">FeatureValue</h2>
<!-- backwards compatibility -->
<a id="schemafeaturevalue"></a>
<a id="schema_FeatureValue"></a>
<a id="tocSfeaturevalue"></a>
<a id="tocsfeaturevalue"></a>

```json
{
  "FeatureName": {},
  "ValueAsString": {}
}
```

The value associated with a feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeatureName|object|true|none|none|
|ValueAsString|object|true|none|none|

<h2 id="tocS_ValueAsString">ValueAsString</h2>
<!-- backwards compatibility -->
<a id="schemavalueasstring"></a>
<a id="schema_ValueAsString"></a>
<a id="tocSvalueasstring"></a>
<a id="tocsvalueasstring"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_BatchGetRecordError">BatchGetRecordError</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecorderror"></a>
<a id="schema_BatchGetRecordError"></a>
<a id="tocSbatchgetrecorderror"></a>
<a id="tocsbatchgetrecorderror"></a>

```json
{
  "FeatureGroupName": {},
  "RecordIdentifierValueAsString": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

The error that has occurred when attempting to retrieve a batch of Records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeatureGroupName|object|true|none|none|
|RecordIdentifierValueAsString|object|true|none|none|
|ErrorCode|object|true|none|none|
|ErrorMessage|object|true|none|none|

<h2 id="tocS_BatchGetRecordErrors">BatchGetRecordErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecorderrors"></a>
<a id="schema_BatchGetRecordErrors"></a>
<a id="tocSbatchgetrecorderrors"></a>
<a id="tocsbatchgetrecorderrors"></a>

```json
[
  {
    "FeatureGroupName": {},
    "RecordIdentifierValueAsString": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FeatureGroupName">FeatureGroupName</h2>
<!-- backwards compatibility -->
<a id="schemafeaturegroupname"></a>
<a id="schema_FeatureGroupName"></a>
<a id="tocSfeaturegroupname"></a>
<a id="tocsfeaturegroupname"></a>

```json
"string"
```

<h2 id="tocS_RecordIdentifiers">RecordIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemarecordidentifiers"></a>
<a id="schema_RecordIdentifiers"></a>
<a id="tocSrecordidentifiers"></a>
<a id="tocsrecordidentifiers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FeatureNames">FeatureNames</h2>
<!-- backwards compatibility -->
<a id="schemafeaturenames"></a>
<a id="schema_FeatureNames"></a>
<a id="tocSfeaturenames"></a>
<a id="tocsfeaturenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetRecordIdentifiers">BatchGetRecordIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordidentifiers"></a>
<a id="schema_BatchGetRecordIdentifiers"></a>
<a id="tocSbatchgetrecordidentifiers"></a>
<a id="tocsbatchgetrecordidentifiers"></a>

```json
[
  {
    "FeatureGroupName": {},
    "RecordIdentifiersValueAsString": {},
    "FeatureNames": {}
  }
]
```

<h2 id="tocS_BatchGetRecordRequest">BatchGetRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordrequest"></a>
<a id="schema_BatchGetRecordRequest"></a>
<a id="tocSbatchgetrecordrequest"></a>
<a id="tocsbatchgetrecordrequest"></a>

```json
{
  "Identifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identifiers|object|true|none|none|

<h2 id="tocS_BatchGetRecordResultDetails">BatchGetRecordResultDetails</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordresultdetails"></a>
<a id="schema_BatchGetRecordResultDetails"></a>
<a id="tocSbatchgetrecordresultdetails"></a>
<a id="tocsbatchgetrecordresultdetails"></a>

```json
[
  {
    "FeatureGroupName": {},
    "RecordIdentifierValueAsString": {},
    "Record": {}
  }
]
```

<h2 id="tocS_UnprocessedIdentifiers">UnprocessedIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedidentifiers"></a>
<a id="schema_UnprocessedIdentifiers"></a>
<a id="tocSunprocessedidentifiers"></a>
<a id="tocsunprocessedidentifiers"></a>

```json
[
  {
    "FeatureGroupName": {},
    "RecordIdentifiersValueAsString": {},
    "FeatureNames": {}
  }
]
```

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
[
  {
    "FeatureName": {},
    "ValueAsString": {}
  }
]
```

<h2 id="tocS_BatchGetRecordResultDetail">BatchGetRecordResultDetail</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrecordresultdetail"></a>
<a id="schema_BatchGetRecordResultDetail"></a>
<a id="tocSbatchgetrecordresultdetail"></a>
<a id="tocsbatchgetrecordresultdetail"></a>

```json
{
  "FeatureGroupName": {},
  "RecordIdentifierValueAsString": {},
  "Record": {}
}
```

The output of Records that have been retrieved in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeatureGroupName|object|true|none|none|
|RecordIdentifierValueAsString|object|true|none|none|
|Record|object|true|none|none|

<h2 id="tocS_TargetStores">TargetStores</h2>
<!-- backwards compatibility -->
<a id="schematargetstores"></a>
<a id="schema_TargetStores"></a>
<a id="tocStargetstores"></a>
<a id="tocstargetstores"></a>

```json
[
  "OnlineStore"
]
```

<h2 id="tocS_DeletionMode">DeletionMode</h2>
<!-- backwards compatibility -->
<a id="schemadeletionmode"></a>
<a id="schema_DeletionMode"></a>
<a id="tocSdeletionmode"></a>
<a id="tocsdeletionmode"></a>

```json
"SoftDelete"
```

<h2 id="tocS_DeleteRecordRequest">DeleteRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecordrequest"></a>
<a id="schema_DeleteRecordRequest"></a>
<a id="tocSdeleterecordrequest"></a>
<a id="tocsdeleterecordrequest"></a>

```json
{}
```

<h2 id="tocS_GetRecordRequest">GetRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordrequest"></a>
<a id="schema_GetRecordRequest"></a>
<a id="tocSgetrecordrequest"></a>
<a id="tocsgetrecordrequest"></a>

```json
{}
```

<h2 id="tocS_PutRecordRequest">PutRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordrequest"></a>
<a id="schema_PutRecordRequest"></a>
<a id="tocSputrecordrequest"></a>
<a id="tocsputrecordrequest"></a>

```json
{
  "Record": {},
  "TargetStores": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Record|object|true|none|none|
|TargetStores|object|false|none|none|
