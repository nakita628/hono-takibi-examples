<h1 id="aws-cloudtrail">AWS CloudTrail v2013-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p> </note> <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>

Base URLs:

* <a href="http://cloudtrail.us-east-1.amazonaws.com">http://cloudtrail.us-east-1.amazonaws.com</a> - The CloudTrail multi-region endpoint

* <a href="https://cloudtrail.us-east-1.amazonaws.com">https://cloudtrail.us-east-1.amazonaws.com</a> - The CloudTrail multi-region endpoint

* <a href="http://cloudtrail.cn-north-1.amazonaws.com.cn">http://cloudtrail.cn-north-1.amazonaws.com.cn</a> - The CloudTrail endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudtrail.cn-north-1.amazonaws.com.cn">https://cloudtrail.cn-north-1.amazonaws.com.cn</a> - The CloudTrail endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudtrail/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cloudtrail-default">Default</h1>

## AddTags

<a id="opIdAddTags"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags' \
  -d '{
    "ResourceId": {},
    "TagsList": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags`

Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).

> Body parameter

```json
{
  "ResourceId": {},
  "TagsList": {}
}
```

<h3 id="addtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AddTagsRequest](#schemaaddtagsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagsList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="addtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsResponse](#schemaaddtagsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|482|482|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|483|483|TagsLimitExceededException|[TagsLimitExceededException](#schematagslimitexceededexception)|
|484|484|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|485|485|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|486|486|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|487|487|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|488|488|ChannelNotFoundException|[ChannelNotFoundException](#schemachannelnotfoundexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|491|491|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|492|492|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|493|493|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelQuery

<a id="opIdCancelQuery"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery' \
  -d '{
    "EventDataStore": {},
    "QueryId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery`

Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.

> Body parameter

```json
{
  "EventDataStore": {},
  "QueryId": {}
}
```

<h3 id="cancelquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CancelQueryRequest](#schemacancelqueryrequest)|true|none|
|» EventDataStore|body|object|false|none|
|» QueryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery|

> Example responses

> 200 Response

```json
{
  "QueryId": {},
  "QueryStatus": {}
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

> 489 Response

```json
null
```

<h3 id="cancelquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelQueryResponse](#schemacancelqueryresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|483|483|InactiveQueryException|[InactiveQueryException](#schemainactivequeryexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|QueryIdNotFoundException|[QueryIdNotFoundException](#schemaqueryidnotfoundexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|488|488|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|489|489|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel' \
  -d '{
    "Name": {},
    "Source": {},
    "Destinations": {},
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel`

Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.

> Body parameter

```json
{
  "Name": {},
  "Source": {},
  "Destinations": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateChannelRequest](#schemacreatechannelrequest)|true|none|
|» Name|body|object|true|none|
|» Source|body|object|true|none|
|» Destinations|body|object|true|none|
|» Tags|body|[TagsList](#schematagslist)|false|A list of tags.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "Destinations": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
|480|480|ChannelMaxLimitExceededException|[ChannelMaxLimitExceededException](#schemachannelmaxlimitexceededexception)|
|481|481|InvalidSourceException|[InvalidSourceException](#schemainvalidsourceexception)|
|482|482|ChannelAlreadyExistsException|[ChannelAlreadyExistsException](#schemachannelalreadyexistsexception)|
|483|483|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|484|484|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|485|485|InvalidEventDataStoreCategoryException|[InvalidEventDataStoreCategoryException](#schemainvalideventdatastorecategoryexception)|
|486|486|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|487|487|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|488|488|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|489|489|TagsLimitExceededException|[TagsLimitExceededException](#schematagslimitexceededexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|491|491|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventDataStore

<a id="opIdCreateEventDataStore"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore' \
  -d '{
    "Name": {},
    "AdvancedEventSelectors": {},
    "MultiRegionEnabled": {},
    "OrganizationEnabled": {},
    "RetentionPeriod": {},
    "TerminationProtectionEnabled": {},
    "TagsList": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "KmsKeyId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore`

Creates a new event data store.

> Body parameter

```json
{
  "Name": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "KmsKeyId": {}
}
```

<h3 id="createeventdatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateEventDataStoreRequest](#schemacreateeventdatastorerequest)|true|none|
|» Name|body|object|true|none|
|» AdvancedEventSelectors|body|object|false|none|
|» MultiRegionEnabled|body|object|false|none|
|» OrganizationEnabled|body|object|false|none|
|» RetentionPeriod|body|object|false|none|
|» TerminationProtectionEnabled|body|object|false|none|
|» TagsList|body|[TagsList](#schematagslist)|false|A list of tags.|
|» KmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore|

> Example responses

> 200 Response

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

<h3 id="createeventdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventDataStoreResponse](#schemacreateeventdatastoreresponse)|
|480|480|EventDataStoreAlreadyExistsException|[EventDataStoreAlreadyExistsException](#schemaeventdatastorealreadyexistsexception)|
|481|481|EventDataStoreMaxLimitExceededException|[EventDataStoreMaxLimitExceededException](#schemaeventdatastoremaxlimitexceededexception)|
|482|482|InvalidEventSelectorsException|[InvalidEventSelectorsException](#schemainvalideventselectorsexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|
|488|488|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|489|489|InvalidKmsKeyIdException|[InvalidKmsKeyIdException](#schemainvalidkmskeyidexception)|
|490|490|KmsKeyNotFoundException|[KmsKeyNotFoundException](#schemakmskeynotfoundexception)|
|491|491|KmsException|[KmsException](#schemakmsexception)|
|492|492|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|493|493|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|494|494|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|495|495|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|496|496|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|497|497|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrail

<a id="opIdCreateTrail"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail' \
  -d '{
    "Name": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "SnsTopicName": {},
    "IncludeGlobalServiceEvents": {},
    "IsMultiRegionTrail": {},
    "EnableLogFileValidation": {},
    "CloudWatchLogsLogGroupArn": {},
    "CloudWatchLogsRoleArn": {},
    "KmsKeyId": {},
    "IsOrganizationTrail": {},
    "TagsList": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail`

Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 

> Body parameter

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "EnableLogFileValidation": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createtrail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateTrailRequest](#schemacreatetrailrequest)|true|none|
|» Name|body|object|true|none|
|» S3BucketName|body|object|true|none|
|» S3KeyPrefix|body|object|false|none|
|» SnsTopicName|body|object|false|none|
|» IncludeGlobalServiceEvents|body|object|false|none|
|» IsMultiRegionTrail|body|object|false|none|
|» EnableLogFileValidation|body|object|false|none|
|» CloudWatchLogsLogGroupArn|body|object|false|none|
|» CloudWatchLogsRoleArn|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» IsOrganizationTrail|body|object|false|none|
|» TagsList|body|[TagsList](#schematagslist)|false|A list of tags.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "SnsTopicARN": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "TrailARN": {},
  "LogFileValidationEnabled": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

<h3 id="createtrail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTrailResponse](#schemacreatetrailresponse)|
|480|480|MaximumNumberOfTrailsExceededException|[MaximumNumberOfTrailsExceededException](#schemamaximumnumberoftrailsexceededexception)|
|481|481|TrailAlreadyExistsException|[TrailAlreadyExistsException](#schematrailalreadyexistsexception)|
|482|482|S3BucketDoesNotExistException|[S3BucketDoesNotExistException](#schemas3bucketdoesnotexistexception)|
|483|483|InsufficientS3BucketPolicyException|[InsufficientS3BucketPolicyException](#schemainsufficients3bucketpolicyexception)|
|484|484|InsufficientSnsTopicPolicyException|[InsufficientSnsTopicPolicyException](#schemainsufficientsnstopicpolicyexception)|
|485|485|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|486|486|InvalidS3BucketNameException|[InvalidS3BucketNameException](#schemainvalids3bucketnameexception)|
|487|487|InvalidS3PrefixException|[InvalidS3PrefixException](#schemainvalids3prefixexception)|
|488|488|InvalidSnsTopicNameException|[InvalidSnsTopicNameException](#schemainvalidsnstopicnameexception)|
|489|489|InvalidKmsKeyIdException|[InvalidKmsKeyIdException](#schemainvalidkmskeyidexception)|
|490|490|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|491|491|TrailNotProvidedException|[TrailNotProvidedException](#schematrailnotprovidedexception)|
|492|492|TagsLimitExceededException|[TagsLimitExceededException](#schematagslimitexceededexception)|
|493|493|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|494|494|KmsKeyNotFoundException|[KmsKeyNotFoundException](#schemakmskeynotfoundexception)|
|495|495|KmsKeyDisabledException|[KmsKeyDisabledException](#schemakmskeydisabledexception)|
|496|496|KmsException|[KmsException](#schemakmsexception)|
|497|497|InvalidCloudWatchLogsLogGroupArnException|[InvalidCloudWatchLogsLogGroupArnException](#schemainvalidcloudwatchlogsloggrouparnexception)|
|498|498|InvalidCloudWatchLogsRoleArnException|[InvalidCloudWatchLogsRoleArnException](#schemainvalidcloudwatchlogsrolearnexception)|
|499|499|CloudWatchLogsDeliveryUnavailableException|[CloudWatchLogsDeliveryUnavailableException](#schemacloudwatchlogsdeliveryunavailableexception)|
|500|Internal Server Error|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|501|Not Implemented|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|502|Bad Gateway|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|503|Service Unavailable|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|504|Gateway Timeout|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|505|HTTP Version Not Supported|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|506|Variant Also Negotiates|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|507|Insufficient Storage|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|508|Loop Detected|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|509|Bandwidth Limit Exceeded|CloudTrailInvalidClientTokenIdException|[CloudTrailInvalidClientTokenIdException](#schemacloudtrailinvalidclienttokenidexception)|
|510|Not Extended|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel' \
  -d '{
    "Channel": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel`

Deletes a channel.

> Body parameter

```json
{
  "Channel": {}
}
```

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteChannelRequest](#schemadeletechannelrequest)|true|none|
|» Channel|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel|

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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteChannelResponse](#schemadeletechannelresponse)|
|480|480|ChannelARNInvalidException|[ChannelARNInvalidException](#schemachannelarninvalidexception)|
|481|481|ChannelNotFoundException|[ChannelNotFoundException](#schemachannelnotfoundexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventDataStore

<a id="opIdDeleteEventDataStore"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore' \
  -d '{
    "EventDataStore": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore`

<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>

> Body parameter

```json
{
  "EventDataStore": {}
}
```

<h3 id="deleteeventdatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteEventDataStoreRequest](#schemadeleteeventdatastorerequest)|true|none|
|» EventDataStore|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="deleteeventdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventDataStoreResponse](#schemadeleteeventdatastoreresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|EventDataStoreTerminationProtectedException|[EventDataStoreTerminationProtectedException](#schemaeventdatastoreterminationprotectedexception)|
|483|483|EventDataStoreHasOngoingImportException|[EventDataStoreHasOngoingImportException](#schemaeventdatastorehasongoingimportexception)|
|484|484|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|488|488|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|489|489|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|490|490|ChannelExistsForEDSException|[ChannelExistsForEDSException](#schemachannelexistsforedsexception)|
|491|491|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy`

 Deletes the resource-based policy attached to the CloudTrail channel. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|ResourceARNNotValidException|[ResourceARNNotValidException](#schemaresourcearnnotvalidexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePolicyNotFoundException|[ResourcePolicyNotFoundException](#schemaresourcepolicynotfoundexception)|
|483|483|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTrail

<a id="opIdDeleteTrail"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail`

Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletetrail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTrailRequest](#schemadeletetrailrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail|

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

> 489 Response

```json
null
```

<h3 id="deletetrail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrailResponse](#schemadeletetrailresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|488|488|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|489|489|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterOrganizationDelegatedAdmin

<a id="opIdDeregisterOrganizationDelegatedAdmin"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin' \
  -d '{
    "DelegatedAdminAccountId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin`

Removes CloudTrail delegated administrator permissions from a member account in an organization.

> Body parameter

```json
{
  "DelegatedAdminAccountId": {}
}
```

<h3 id="deregisterorganizationdelegatedadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterOrganizationDelegatedAdminRequest](#schemaderegisterorganizationdelegatedadminrequest)|true|none|
|» DelegatedAdminAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="deregisterorganizationdelegatedadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterOrganizationDelegatedAdminResponse](#schemaderegisterorganizationdelegatedadminresponse)|
|480|480|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|481|481|AccountNotRegisteredException|[AccountNotRegisteredException](#schemaaccountnotregisteredexception)|
|482|482|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|NotOrganizationManagementAccountException|[NotOrganizationManagementAccountException](#schemanotorganizationmanagementaccountexception)|
|487|487|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|488|488|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQuery

<a id="opIdDescribeQuery"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery' \
  -d '{
    "EventDataStore": {},
    "QueryId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery`

Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.

> Body parameter

```json
{
  "EventDataStore": {},
  "QueryId": {}
}
```

<h3 id="describequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeQueryRequest](#schemadescribequeryrequest)|true|none|
|» EventDataStore|body|object|false|none|
|» QueryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery|

> Example responses

> 200 Response

```json
{
  "QueryId": {},
  "QueryString": {},
  "QueryStatus": {},
  "QueryStatistics": {
    "EventsMatched": {},
    "EventsScanned": {},
    "BytesScanned": {},
    "ExecutionTimeInMillis": {},
    "CreationTime": {}
  },
  "ErrorMessage": {},
  "DeliveryS3Uri": {},
  "DeliveryStatus": {}
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

<h3 id="describequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQueryResponse](#schemadescribequeryresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|QueryIdNotFoundException|[QueryIdNotFoundException](#schemaqueryidnotfoundexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|487|487|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrails

<a id="opIdDescribeTrails"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails' \
  -d '{
    "trailNameList": {},
    "includeShadowTrails": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails`

Retrieves settings for one or more trails associated with the current region for your account.

> Body parameter

```json
{
  "trailNameList": {},
  "includeShadowTrails": {}
}
```

<h3 id="describetrails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTrailsRequest](#schemadescribetrailsrequest)|true|none|
|» trailNameList|body|object|false|none|
|» includeShadowTrails|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails|

> Example responses

> 200 Response

```json
{
  "trailList": {}
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

<h3 id="describetrails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrailsResponse](#schemadescribetrailsresponse)|
|480|480|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|483|483|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChannel

<a id="opIdGetChannel"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel' \
  -d '{
    "Channel": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel`

 Returns information about a specific channel. 

> Body parameter

```json
{
  "Channel": {}
}
```

<h3 id="getchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetChannelRequest](#schemagetchannelrequest)|true|none|
|» Channel|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "SourceConfig": {
    "ApplyToAllRegions": {},
    "AdvancedEventSelectors": {}
  },
  "Destinations": {},
  "IngestionStatus": {
    "LatestIngestionSuccessTime": {},
    "LatestIngestionSuccessEventID": {},
    "LatestIngestionErrorCode": {},
    "LatestIngestionAttemptTime": {},
    "LatestIngestionAttemptEventID": {}
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

<h3 id="getchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChannelResponse](#schemagetchannelresponse)|
|480|480|ChannelARNInvalidException|[ChannelARNInvalidException](#schemachannelarninvalidexception)|
|481|481|ChannelNotFoundException|[ChannelNotFoundException](#schemachannelnotfoundexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventDataStore

<a id="opIdGetEventDataStore"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore' \
  -d '{
    "EventDataStore": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore`

Returns information about an event data store specified as either an ARN or the ID portion of the ARN.

> Body parameter

```json
{
  "EventDataStore": {}
}
```

<h3 id="geteventdatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetEventDataStoreRequest](#schemageteventdatastorerequest)|true|none|
|» EventDataStore|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore|

> Example responses

> 200 Response

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
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

<h3 id="geteventdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventDataStoreResponse](#schemageteventdatastoreresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventSelectors

<a id="opIdGetEventSelectors"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors' \
  -d '{
    "TrailName": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors`

<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>

> Body parameter

```json
{
  "TrailName": {}
}
```

<h3 id="geteventselectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetEventSelectorsRequest](#schemageteventselectorsrequest)|true|none|
|» TrailName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors|

> Example responses

> 200 Response

```json
{
  "TrailARN": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
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

<h3 id="geteventselectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventSelectorsResponse](#schemageteventselectorsresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImport

<a id="opIdGetImport"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport' \
  -d '{
    "ImportId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport`

 Returns information about a specific import. 

> Body parameter

```json
{
  "ImportId": {}
}
```

<h3 id="getimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetImportRequest](#schemagetimportrequest)|true|none|
|» ImportId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport|

> Example responses

> 200 Response

```json
{
  "ImportId": {},
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "ImportStatistics": {
    "PrefixesFound": {},
    "PrefixesCompleted": {},
    "FilesCompleted": {},
    "EventsCompleted": {},
    "FailedEntries": {}
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

<h3 id="getimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImportResponse](#schemagetimportresponse)|
|480|480|ImportNotFoundException|[ImportNotFoundException](#schemaimportnotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInsightSelectors

<a id="opIdGetInsightSelectors"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors' \
  -d '{
    "TrailName": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors`

<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>

> Body parameter

```json
{
  "TrailName": {}
}
```

<h3 id="getinsightselectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetInsightSelectorsRequest](#schemagetinsightselectorsrequest)|true|none|
|» TrailName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors|

> Example responses

> 200 Response

```json
{
  "TrailARN": {},
  "InsightSelectors": {}
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

<h3 id="getinsightselectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightSelectorsResponse](#schemagetinsightselectorsresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|InsightNotEnabledException|[InsightNotEnabledException](#schemainsightnotenabledexception)|
|486|486|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryResults

<a id="opIdGetQueryResults"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults' \
  -d '{
    "EventDataStore": {},
    "QueryId": {},
    "NextToken": {},
    "MaxQueryResults": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults`

Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.

> Body parameter

```json
{
  "EventDataStore": {},
  "QueryId": {},
  "NextToken": {},
  "MaxQueryResults": {}
}
```

<h3 id="getqueryresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetQueryResultsRequest](#schemagetqueryresultsrequest)|true|none|
|» EventDataStore|body|object|false|none|
|» QueryId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxQueryResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults|

> Example responses

> 200 Response

```json
{
  "QueryStatus": {},
  "QueryStatistics": {
    "ResultsCount": {},
    "TotalResultsCount": {},
    "BytesScanned": {}
  },
  "QueryResultRows": {},
  "NextToken": {},
  "ErrorMessage": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="getqueryresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryResultsResponse](#schemagetqueryresultsresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|483|483|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|484|484|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|QueryIdNotFoundException|[QueryIdNotFoundException](#schemaqueryidnotfoundexception)|
|487|487|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|488|488|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|490|490|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy`

 Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourcePolicyRequest](#schemagetresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
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

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyResponse](#schemagetresourcepolicyresponse)|
|480|480|ResourceARNNotValidException|[ResourceARNNotValidException](#schemaresourcearnnotvalidexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePolicyNotFoundException|[ResourcePolicyNotFoundException](#schemaresourcepolicynotfoundexception)|
|483|483|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrail

<a id="opIdGetTrail"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail`

Returns settings information for a specified trail.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="gettrail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTrailRequest](#schemagettrailrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail|

> Example responses

> 200 Response

```json
{
  "Trail": {
    "Name": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "SnsTopicName": {},
    "SnsTopicARN": {},
    "IncludeGlobalServiceEvents": {},
    "IsMultiRegionTrail": {},
    "HomeRegion": {},
    "TrailARN": {},
    "LogFileValidationEnabled": {},
    "CloudWatchLogsLogGroupArn": {},
    "CloudWatchLogsRoleArn": {},
    "KmsKeyId": {},
    "HasCustomEventSelectors": {},
    "HasInsightSelectors": {},
    "IsOrganizationTrail": {}
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

<h3 id="gettrail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrailResponse](#schemagettrailresponse)|
|480|480|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|481|481|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|482|482|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrailStatus

<a id="opIdGetTrailStatus"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus`

Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="gettrailstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTrailStatusRequest](#schemagettrailstatusrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus|

> Example responses

> 200 Response

```json
{
  "IsLogging": {},
  "LatestDeliveryError": {},
  "LatestNotificationError": {},
  "LatestDeliveryTime": {},
  "LatestNotificationTime": {},
  "StartLoggingTime": {},
  "StopLoggingTime": {},
  "LatestCloudWatchLogsDeliveryError": {},
  "LatestCloudWatchLogsDeliveryTime": {},
  "LatestDigestDeliveryTime": {},
  "LatestDigestDeliveryError": {},
  "LatestDeliveryAttemptTime": {},
  "LatestNotificationAttemptTime": {},
  "LatestNotificationAttemptSucceeded": {},
  "LatestDeliveryAttemptSucceeded": {},
  "TimeLoggingStarted": {},
  "TimeLoggingStopped": {}
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

<h3 id="gettrailstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrailStatusResponse](#schemagettrailstatusresponse)|
|480|480|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|481|481|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|482|482|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels`

 Lists the channels in the current account, and their source names. 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListChannelsRequest](#schemalistchannelsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels|

> Example responses

> 200 Response

```json
{
  "Channels": {},
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventDataStores

<a id="opIdListEventDataStores"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores`

Returns information about all event data stores in the account, in the current region.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listeventdatastores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEventDataStoresRequest](#schemalisteventdatastoresrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores|

> Example responses

> 200 Response

```json
{
  "EventDataStores": {},
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

<h3 id="listeventdatastores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventDataStoresResponse](#schemalisteventdatastoresresponse)|
|480|480|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|484|484|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImportFailures

<a id="opIdListImportFailures"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures' \
  -d '{
    "ImportId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures`

 Returns a list of failures for the specified import. 

> Body parameter

```json
{
  "ImportId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listimportfailures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListImportFailuresRequest](#schemalistimportfailuresrequest)|true|none|
|» ImportId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures|

> Example responses

> 200 Response

```json
{
  "Failures": {},
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

<h3 id="listimportfailures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportFailuresResponse](#schemalistimportfailuresresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImports

<a id="opIdListImports"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports' \
  -d '{
    "MaxResults": {},
    "Destination": {},
    "ImportStatus": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports`

 Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 

> Body parameter

```json
{
  "MaxResults": {},
  "Destination": {},
  "ImportStatus": {},
  "NextToken": {}
}
```

<h3 id="listimports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListImportsRequest](#schemalistimportsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» Destination|body|object|false|none|
|» ImportStatus|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports|

> Example responses

> 200 Response

```json
{
  "Imports": {},
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

<h3 id="listimports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportsResponse](#schemalistimportsresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPublicKeys

<a id="opIdListPublicKeys"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys' \
  -d '{
    "StartTime": {},
    "EndTime": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys`

<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>

> Body parameter

```json
{
  "StartTime": {},
  "EndTime": {},
  "NextToken": {}
}
```

<h3 id="listpublickeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPublicKeysRequest](#schemalistpublickeysrequest)|true|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys|

> Example responses

> 200 Response

```json
{
  "PublicKeyList": {},
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

<h3 id="listpublickeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPublicKeysResponse](#schemalistpublickeysresponse)|
|480|480|InvalidTimeRangeException|[InvalidTimeRangeException](#schemainvalidtimerangeexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueries

<a id="opIdListQueries"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries' \
  -d '{
    "EventDataStore": {},
    "NextToken": {},
    "MaxResults": {},
    "StartTime": {},
    "EndTime": {},
    "QueryStatus": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries`

Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.

> Body parameter

```json
{
  "EventDataStore": {},
  "NextToken": {},
  "MaxResults": {},
  "StartTime": {},
  "EndTime": {},
  "QueryStatus": {}
}
```

<h3 id="listqueries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListQueriesRequest](#schemalistqueriesrequest)|true|none|
|» EventDataStore|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» QueryStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries|

> Example responses

> 200 Response

```json
{
  "Queries": {},
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="listqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueriesResponse](#schemalistqueriesresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|483|483|InvalidDateRangeException|[InvalidDateRangeException](#schemainvaliddaterangeexception)|
|484|484|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|485|485|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|487|487|InvalidQueryStatusException|[InvalidQueryStatusException](#schemainvalidquerystatusexception)|
|488|488|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|490|490|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags' \
  -d '{
    "ResourceIdList": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags`

Lists the tags for the trail, event data store, or channel in the current region.

> Body parameter

```json
{
  "ResourceIdList": {},
  "NextToken": {}
}
```

<h3 id="listtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsRequest](#schemalisttagsrequest)|true|none|
|» ResourceIdList|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags|

> Example responses

> 200 Response

```json
{
  "ResourceTagList": {},
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|482|482|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|483|483|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|484|484|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|485|485|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|487|487|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|488|488|InvalidTokenException|[InvalidTokenException](#schemainvalidtokenexception)|
|489|489|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrails

<a id="opIdListTrails"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails' \
  -d '{
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails`

Lists trails that are in the current account.

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="listtrails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTrailsRequest](#schemalisttrailsrequest)|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails|

> Example responses

> 200 Response

```json
{
  "Trails": {},
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

<h3 id="listtrails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrailsResponse](#schemalisttrailsresponse)|
|480|480|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LookupEvents

<a id="opIdLookupEvents"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents' \
  -d '{
    "LookupAttributes": {},
    "StartTime": {},
    "EndTime": {},
    "EventCategory": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents`

<p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>

> Body parameter

```json
{
  "LookupAttributes": {},
  "StartTime": {},
  "EndTime": {},
  "EventCategory": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="lookupevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[LookupEventsRequest](#schemalookupeventsrequest)|true|none|
|» LookupAttributes|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» EventCategory|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents|

> Example responses

> 200 Response

```json
{
  "Events": {},
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

<h3 id="lookupevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LookupEventsResponse](#schemalookupeventsresponse)|
|480|480|InvalidLookupAttributesException|[InvalidLookupAttributesException](#schemainvalidlookupattributesexception)|
|481|481|InvalidTimeRangeException|[InvalidTimeRangeException](#schemainvalidtimerangeexception)|
|482|482|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|InvalidEventCategoryException|[InvalidEventCategoryException](#schemainvalideventcategoryexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEventSelectors

<a id="opIdPutEventSelectors"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors' \
  -d '{
    "TrailName": {},
    "EventSelectors": {},
    "AdvancedEventSelectors": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors`

<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>

> Body parameter

```json
{
  "TrailName": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
}
```

<h3 id="puteventselectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutEventSelectorsRequest](#schemaputeventselectorsrequest)|true|none|
|» TrailName|body|object|true|none|
|» EventSelectors|body|object|false|none|
|» AdvancedEventSelectors|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors|

> Example responses

> 200 Response

```json
{
  "TrailARN": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
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

> 489 Response

```json
null
```

<h3 id="puteventselectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEventSelectorsResponse](#schemaputeventselectorsresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|484|484|InvalidEventSelectorsException|[InvalidEventSelectorsException](#schemainvalideventselectorsexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|488|488|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|489|489|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInsightSelectors

<a id="opIdPutInsightSelectors"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors' \
  -d '{
    "TrailName": {},
    "InsightSelectors": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors`

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.

> Body parameter

```json
{
  "TrailName": {},
  "InsightSelectors": {}
}
```

<h3 id="putinsightselectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutInsightSelectorsRequest](#schemaputinsightselectorsrequest)|true|none|
|» TrailName|body|object|true|none|
|» InsightSelectors|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors|

> Example responses

> 200 Response

```json
{
  "TrailARN": {},
  "InsightSelectors": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="putinsightselectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInsightSelectorsResponse](#schemaputinsightselectorsresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|484|484|InvalidInsightSelectorsException|[InvalidInsightSelectorsException](#schemainvalidinsightselectorsexception)|
|485|485|InsufficientS3BucketPolicyException|[InsufficientS3BucketPolicyException](#schemainsufficients3bucketpolicyexception)|
|486|486|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|487|487|S3BucketDoesNotExistException|[S3BucketDoesNotExistException](#schemas3bucketdoesnotexistexception)|
|488|488|KmsException|[KmsException](#schemakmsexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|491|491|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|492|492|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "ResourcePolicy": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy`

 Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 

> Body parameter

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» ResourcePolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|ResourceARNNotValidException|[ResourceARNNotValidException](#schemaresourcearnnotvalidexception)|
|481|481|ResourcePolicyNotValidException|[ResourcePolicyNotValidException](#schemaresourcepolicynotvalidexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterOrganizationDelegatedAdmin

<a id="opIdRegisterOrganizationDelegatedAdmin"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin' \
  -d '{
    "MemberAccountId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin`

Registers an organization’s member account as the CloudTrail delegated administrator.

> Body parameter

```json
{
  "MemberAccountId": {}
}
```

<h3 id="registerorganizationdelegatedadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterOrganizationDelegatedAdminRequest](#schemaregisterorganizationdelegatedadminrequest)|true|none|
|» MemberAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="registerorganizationdelegatedadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterOrganizationDelegatedAdminResponse](#schemaregisterorganizationdelegatedadminresponse)|
|480|480|AccountRegisteredException|[AccountRegisteredException](#schemaaccountregisteredexception)|
|481|481|AccountNotFoundException|[AccountNotFoundException](#schemaaccountnotfoundexception)|
|482|482|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|CannotDelegateManagementAccountException|[CannotDelegateManagementAccountException](#schemacannotdelegatemanagementaccountexception)|
|485|485|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|
|487|487|DelegatedAdminAccountLimitExceededException|[DelegatedAdminAccountLimitExceededException](#schemadelegatedadminaccountlimitexceededexception)|
|488|488|NotOrganizationManagementAccountException|[NotOrganizationManagementAccountException](#schemanotorganizationmanagementaccountexception)|
|489|489|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|490|490|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|491|491|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|492|492|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTags

<a id="opIdRemoveTags"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags' \
  -d '{
    "ResourceId": {},
    "TagsList": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags`

Removes the specified tags from a trail, event data store, or channel.

> Body parameter

```json
{
  "ResourceId": {},
  "TagsList": {}
}
```

<h3 id="removetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RemoveTagsRequest](#schemaremovetagsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» TagsList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="removetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsResponse](#schemaremovetagsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|482|482|ResourceTypeNotSupportedException|[ResourceTypeNotSupportedException](#schemaresourcetypenotsupportedexception)|
|483|483|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|484|484|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|485|485|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|486|486|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|487|487|ChannelNotFoundException|[ChannelNotFoundException](#schemachannelnotfoundexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|489|489|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|490|490|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|491|491|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreEventDataStore

<a id="opIdRestoreEventDataStore"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore' \
  -d '{
    "EventDataStore": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore`

Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.

> Body parameter

```json
{
  "EventDataStore": {}
}
```

<h3 id="restoreeventdatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RestoreEventDataStoreRequest](#schemarestoreeventdatastorerequest)|true|none|
|» EventDataStore|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore|

> Example responses

> 200 Response

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="restoreeventdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreEventDataStoreResponse](#schemarestoreeventdatastoreresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|EventDataStoreMaxLimitExceededException|[EventDataStoreMaxLimitExceededException](#schemaeventdatastoremaxlimitexceededexception)|
|483|483|InvalidEventDataStoreStatusException|[InvalidEventDataStoreStatusException](#schemainvalideventdatastorestatusexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|487|487|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|488|488|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|489|489|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|490|490|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|491|491|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|492|492|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImport

<a id="opIdStartImport"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport' \
  -d '{
    "Destinations": {},
    "ImportSource": {
      "S3": {
        "S3LocationUri": {},
        "S3BucketRegion": {},
        "S3BucketAccessRoleArn": {}
      }
    },
    "StartEventTime": {},
    "EndEventTime": {},
    "ImportId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport`

<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>

> Body parameter

```json
{
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportId": {}
}
```

<h3 id="startimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartImportRequest](#schemastartimportrequest)|true|none|
|» Destinations|body|object|false|none|
|» ImportSource|body|object|false|none|
|» » S3|body|object|true|none|
|» » » S3LocationUri|body|object|true|none|
|» » » S3BucketRegion|body|object|true|none|
|» » » S3BucketAccessRoleArn|body|object|true|none|
|» StartEventTime|body|object|false|none|
|» EndEventTime|body|object|false|none|
|» ImportId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport|

> Example responses

> 200 Response

```json
{
  "ImportId": {},
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="startimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartImportResponse](#schemastartimportresponse)|
|480|480|AccountHasOngoingImportException|[AccountHasOngoingImportException](#schemaaccounthasongoingimportexception)|
|481|481|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|482|482|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|483|483|InvalidEventDataStoreStatusException|[InvalidEventDataStoreStatusException](#schemainvalideventdatastorestatusexception)|
|484|484|InvalidEventDataStoreCategoryException|[InvalidEventDataStoreCategoryException](#schemainvalideventdatastorecategoryexception)|
|485|485|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|486|486|InvalidImportSourceException|[InvalidImportSourceException](#schemainvalidimportsourceexception)|
|487|487|ImportNotFoundException|[ImportNotFoundException](#schemaimportnotfoundexception)|
|488|488|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|489|489|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|490|490|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|491|491|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|492|492|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|493|493|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartLogging

<a id="opIdStartLogging"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging`

Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="startlogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartLoggingRequest](#schemastartloggingrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging|

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

> 489 Response

```json
null
```

<h3 id="startlogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartLoggingResponse](#schemastartloggingresponse)|
|480|480|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|483|483|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|484|484|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|488|488|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|489|489|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartQuery

<a id="opIdStartQuery"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery' \
  -d '{
    "QueryStatement": {},
    "DeliveryS3Uri": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery`

Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.

> Body parameter

```json
{
  "QueryStatement": {},
  "DeliveryS3Uri": {}
}
```

<h3 id="startquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartQueryRequest](#schemastartqueryrequest)|true|none|
|» QueryStatement|body|object|true|none|
|» DeliveryS3Uri|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery|

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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="startquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartQueryResponse](#schemastartqueryresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InvalidQueryStatementException|[InvalidQueryStatementException](#schemainvalidquerystatementexception)|
|485|485|MaxConcurrentQueriesException|[MaxConcurrentQueriesException](#schemamaxconcurrentqueriesexception)|
|486|486|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|487|487|InvalidS3PrefixException|[InvalidS3PrefixException](#schemainvalids3prefixexception)|
|488|488|InvalidS3BucketNameException|[InvalidS3BucketNameException](#schemainvalids3bucketnameexception)|
|489|489|InsufficientS3BucketPolicyException|[InsufficientS3BucketPolicyException](#schemainsufficients3bucketpolicyexception)|
|490|490|S3BucketDoesNotExistException|[S3BucketDoesNotExistException](#schemas3bucketdoesnotexistexception)|
|491|491|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|492|492|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|493|493|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopImport

<a id="opIdStopImport"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport' \
  -d '{
    "ImportId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport`

 Stops a specified import. 

> Body parameter

```json
{
  "ImportId": {}
}
```

<h3 id="stopimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopImportRequest](#schemastopimportrequest)|true|none|
|» ImportId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport|

> Example responses

> 200 Response

```json
{
  "ImportId": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "Destinations": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatistics": {
    "PrefixesFound": {},
    "PrefixesCompleted": {},
    "FilesCompleted": {},
    "EventsCompleted": {},
    "FailedEntries": {}
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

<h3 id="stopimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopImportResponse](#schemastopimportresponse)|
|480|480|ImportNotFoundException|[ImportNotFoundException](#schemaimportnotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopLogging

<a id="opIdStopLogging"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging`

Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="stoplogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopLoggingRequest](#schemastoploggingrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging|

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

> 489 Response

```json
null
```

<h3 id="stoplogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopLoggingResponse](#schemastoploggingresponse)|
|480|480|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|481|481|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|482|482|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|488|488|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|489|489|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel' \
  -d '{
    "Channel": {},
    "Destinations": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel`

Updates a channel specified by a required channel ARN or UUID.

> Body parameter

```json
{
  "Channel": {},
  "Destinations": {},
  "Name": {}
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateChannelRequest](#schemaupdatechannelrequest)|true|none|
|» Channel|body|object|true|none|
|» Destinations|body|object|false|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel|

> Example responses

> 200 Response

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "Destinations": {}
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

> 489 Response

```json
null
```

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|
|480|480|ChannelARNInvalidException|[ChannelARNInvalidException](#schemachannelarninvalidexception)|
|481|481|ChannelNotFoundException|[ChannelNotFoundException](#schemachannelnotfoundexception)|
|482|482|ChannelAlreadyExistsException|[ChannelAlreadyExistsException](#schemachannelalreadyexistsexception)|
|483|483|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|484|484|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|485|485|InvalidEventDataStoreCategoryException|[InvalidEventDataStoreCategoryException](#schemainvalideventdatastorecategoryexception)|
|486|486|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|487|487|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|488|488|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|489|489|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventDataStore

<a id="opIdUpdateEventDataStore"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore' \
  -d '{
    "EventDataStore": {},
    "Name": {},
    "AdvancedEventSelectors": {},
    "MultiRegionEnabled": {},
    "OrganizationEnabled": {},
    "RetentionPeriod": {},
    "TerminationProtectionEnabled": {},
    "KmsKeyId": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore`

<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>

> Body parameter

```json
{
  "EventDataStore": {},
  "Name": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "KmsKeyId": {}
}
```

<h3 id="updateeventdatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateEventDataStoreRequest](#schemaupdateeventdatastorerequest)|true|none|
|» EventDataStore|body|object|true|none|
|» Name|body|object|false|none|
|» AdvancedEventSelectors|body|object|false|none|
|» MultiRegionEnabled|body|object|false|none|
|» OrganizationEnabled|body|object|false|none|
|» RetentionPeriod|body|object|false|none|
|» TerminationProtectionEnabled|body|object|false|none|
|» KmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore|

> Example responses

> 200 Response

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

<h3 id="updateeventdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEventDataStoreResponse](#schemaupdateeventdatastoreresponse)|
|480|480|EventDataStoreARNInvalidException|[EventDataStoreARNInvalidException](#schemaeventdatastorearninvalidexception)|
|481|481|EventDataStoreNotFoundException|[EventDataStoreNotFoundException](#schemaeventdatastorenotfoundexception)|
|482|482|InvalidEventSelectorsException|[InvalidEventSelectorsException](#schemainvalideventselectorsexception)|
|483|483|EventDataStoreHasOngoingImportException|[EventDataStoreHasOngoingImportException](#schemaeventdatastorehasongoingimportexception)|
|484|484|InactiveEventDataStoreException|[InactiveEventDataStoreException](#schemainactiveeventdatastoreexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|488|488|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|489|489|InvalidKmsKeyIdException|[InvalidKmsKeyIdException](#schemainvalidkmskeyidexception)|
|490|490|KmsKeyNotFoundException|[KmsKeyNotFoundException](#schemakmskeynotfoundexception)|
|491|491|KmsException|[KmsException](#schemakmsexception)|
|492|492|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|493|493|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|494|494|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|495|495|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|496|496|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|497|497|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTrail

<a id="opIdUpdateTrail"></a>

> Code samples

```bash
curl 'https://cloudtrail.us-east-1.amazonaws.com/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail' \
  -d '{
    "Name": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "SnsTopicName": {},
    "IncludeGlobalServiceEvents": {},
    "IsMultiRegionTrail": {},
    "EnableLogFileValidation": {},
    "CloudWatchLogsLogGroupArn": {},
    "CloudWatchLogsRoleArn": {},
    "KmsKeyId": {},
    "IsOrganizationTrail": {}
  }'
```

`POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail`

Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

> Body parameter

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "EnableLogFileValidation": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
}
```

<h3 id="updatetrail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTrailRequest](#schemaupdatetrailrequest)|true|none|
|» Name|body|object|true|none|
|» S3BucketName|body|object|false|none|
|» S3KeyPrefix|body|object|false|none|
|» SnsTopicName|body|object|false|none|
|» IncludeGlobalServiceEvents|body|object|false|none|
|» IsMultiRegionTrail|body|object|false|none|
|» EnableLogFileValidation|body|object|false|none|
|» CloudWatchLogsLogGroupArn|body|object|false|none|
|» CloudWatchLogsRoleArn|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» IsOrganizationTrail|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "SnsTopicARN": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "TrailARN": {},
  "LogFileValidationEnabled": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

<h3 id="updatetrail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrailResponse](#schemaupdatetrailresponse)|
|480|480|S3BucketDoesNotExistException|[S3BucketDoesNotExistException](#schemas3bucketdoesnotexistexception)|
|481|481|InsufficientS3BucketPolicyException|[InsufficientS3BucketPolicyException](#schemainsufficients3bucketpolicyexception)|
|482|482|InsufficientSnsTopicPolicyException|[InsufficientSnsTopicPolicyException](#schemainsufficientsnstopicpolicyexception)|
|483|483|InsufficientEncryptionPolicyException|[InsufficientEncryptionPolicyException](#schemainsufficientencryptionpolicyexception)|
|484|484|TrailNotFoundException|[TrailNotFoundException](#schematrailnotfoundexception)|
|485|485|InvalidS3BucketNameException|[InvalidS3BucketNameException](#schemainvalids3bucketnameexception)|
|486|486|InvalidS3PrefixException|[InvalidS3PrefixException](#schemainvalids3prefixexception)|
|487|487|InvalidSnsTopicNameException|[InvalidSnsTopicNameException](#schemainvalidsnstopicnameexception)|
|488|488|InvalidKmsKeyIdException|[InvalidKmsKeyIdException](#schemainvalidkmskeyidexception)|
|489|489|InvalidTrailNameException|[InvalidTrailNameException](#schemainvalidtrailnameexception)|
|490|490|TrailNotProvidedException|[TrailNotProvidedException](#schematrailnotprovidedexception)|
|491|491|InvalidEventSelectorsException|[InvalidEventSelectorsException](#schemainvalideventselectorsexception)|
|492|492|CloudTrailARNInvalidException|[CloudTrailARNInvalidException](#schemacloudtrailarninvalidexception)|
|493|493|ConflictException|[ConflictException](#schemaconflictexception)|
|494|494|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|495|495|InvalidHomeRegionException|[InvalidHomeRegionException](#schemainvalidhomeregionexception)|
|496|496|KmsKeyNotFoundException|[KmsKeyNotFoundException](#schemakmskeynotfoundexception)|
|497|497|KmsKeyDisabledException|[KmsKeyDisabledException](#schemakmskeydisabledexception)|
|498|498|KmsException|[KmsException](#schemakmsexception)|
|499|499|InvalidCloudWatchLogsLogGroupArnException|[InvalidCloudWatchLogsLogGroupArnException](#schemainvalidcloudwatchlogsloggrouparnexception)|
|500|Internal Server Error|InvalidCloudWatchLogsRoleArnException|[InvalidCloudWatchLogsRoleArnException](#schemainvalidcloudwatchlogsrolearnexception)|
|501|Not Implemented|CloudWatchLogsDeliveryUnavailableException|[CloudWatchLogsDeliveryUnavailableException](#schemacloudwatchlogsdeliveryunavailableexception)|
|502|Bad Gateway|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|503|Service Unavailable|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|504|Gateway Timeout|CloudTrailAccessNotEnabledException|[CloudTrailAccessNotEnabledException](#schemacloudtrailaccessnotenabledexception)|
|505|HTTP Version Not Supported|InsufficientDependencyServiceAccessPermissionException|[InsufficientDependencyServiceAccessPermissionException](#schemainsufficientdependencyserviceaccesspermissionexception)|
|506|Variant Also Negotiates|OrganizationsNotInUseException|[OrganizationsNotInUseException](#schemaorganizationsnotinuseexception)|
|507|Insufficient Storage|NotOrganizationMasterAccountException|[NotOrganizationMasterAccountException](#schemanotorganizationmasteraccountexception)|
|508|Loop Detected|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|509|Bandwidth Limit Exceeded|NoManagementAccountSLRExistsException|[NoManagementAccountSLRExistsException](#schemanomanagementaccountslrexistsexception)|
|510|Not Extended|CloudTrailInvalidClientTokenIdException|[CloudTrailInvalidClientTokenIdException](#schemacloudtrailinvalidclienttokenidexception)|
|511|Network Authentication Required|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsResponse">AddTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsresponse"></a>
<a id="schema_AddTagsResponse"></a>
<a id="tocSaddtagsresponse"></a>
<a id="tocsaddtagsresponse"></a>

```json
{}
```

Returns the objects or data if successful. Otherwise, returns an error.

<h2 id="tocS_AddTagsRequest">AddTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsrequest"></a>
<a id="schema_AddTagsRequest"></a>
<a id="tocSaddtagsrequest"></a>
<a id="tocsaddtagsrequest"></a>

```json
{
  "ResourceId": {},
  "TagsList": {}
}
```

Specifies the tags to add to a trail, event data store, or channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagsList|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CloudTrailARNInvalidException">CloudTrailARNInvalidException</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailarninvalidexception"></a>
<a id="schema_CloudTrailARNInvalidException"></a>
<a id="tocScloudtrailarninvalidexception"></a>
<a id="tocscloudtrailarninvalidexception"></a>

```json
null
```

<h2 id="tocS_ResourceTypeNotSupportedException">ResourceTypeNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypenotsupportedexception"></a>
<a id="schema_ResourceTypeNotSupportedException"></a>
<a id="tocSresourcetypenotsupportedexception"></a>
<a id="tocsresourcetypenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_TagsLimitExceededException">TagsLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematagslimitexceededexception"></a>
<a id="schema_TagsLimitExceededException"></a>
<a id="tocStagslimitexceededexception"></a>
<a id="tocstagslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidTrailNameException">InvalidTrailNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtrailnameexception"></a>
<a id="schema_InvalidTrailNameException"></a>
<a id="tocSinvalidtrailnameexception"></a>
<a id="tocsinvalidtrailnameexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagParameterException">InvalidTagParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagparameterexception"></a>
<a id="schema_InvalidTagParameterException"></a>
<a id="tocSinvalidtagparameterexception"></a>
<a id="tocsinvalidtagparameterexception"></a>

```json
null
```

<h2 id="tocS_InactiveEventDataStoreException">InactiveEventDataStoreException</h2>
<!-- backwards compatibility -->
<a id="schemainactiveeventdatastoreexception"></a>
<a id="schema_InactiveEventDataStoreException"></a>
<a id="tocSinactiveeventdatastoreexception"></a>
<a id="tocsinactiveeventdatastoreexception"></a>

```json
null
```

<h2 id="tocS_EventDataStoreNotFoundException">EventDataStoreNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorenotfoundexception"></a>
<a id="schema_EventDataStoreNotFoundException"></a>
<a id="tocSeventdatastorenotfoundexception"></a>
<a id="tocseventdatastorenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ChannelNotFoundException">ChannelNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemachannelnotfoundexception"></a>
<a id="schema_ChannelNotFoundException"></a>
<a id="tocSchannelnotfoundexception"></a>
<a id="tocschannelnotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_OperationNotPermittedException">OperationNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotpermittedexception"></a>
<a id="schema_OperationNotPermittedException"></a>
<a id="tocSoperationnotpermittedexception"></a>
<a id="tocsoperationnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_NotOrganizationMasterAccountException">NotOrganizationMasterAccountException</h2>
<!-- backwards compatibility -->
<a id="schemanotorganizationmasteraccountexception"></a>
<a id="schema_NotOrganizationMasterAccountException"></a>
<a id="tocSnotorganizationmasteraccountexception"></a>
<a id="tocsnotorganizationmasteraccountexception"></a>

```json
null
```

<h2 id="tocS_NoManagementAccountSLRExistsException">NoManagementAccountSLRExistsException</h2>
<!-- backwards compatibility -->
<a id="schemanomanagementaccountslrexistsexception"></a>
<a id="schema_NoManagementAccountSLRExistsException"></a>
<a id="tocSnomanagementaccountslrexistsexception"></a>
<a id="tocsnomanagementaccountslrexistsexception"></a>

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

<h2 id="tocS_CancelQueryResponse">CancelQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelqueryresponse"></a>
<a id="schema_CancelQueryResponse"></a>
<a id="tocScancelqueryresponse"></a>
<a id="tocscancelqueryresponse"></a>

```json
{
  "QueryId": {},
  "QueryStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|true|none|none|
|QueryStatus|object|true|none|none|

<h2 id="tocS_CancelQueryRequest">CancelQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelqueryrequest"></a>
<a id="schema_CancelQueryRequest"></a>
<a id="tocScancelqueryrequest"></a>
<a id="tocscancelqueryrequest"></a>

```json
{
  "EventDataStore": {},
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|false|none|none|
|QueryId|object|true|none|none|

<h2 id="tocS_EventDataStoreARNInvalidException">EventDataStoreARNInvalidException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorearninvalidexception"></a>
<a id="schema_EventDataStoreARNInvalidException"></a>
<a id="tocSeventdatastorearninvalidexception"></a>
<a id="tocseventdatastorearninvalidexception"></a>

```json
null
```

<h2 id="tocS_InactiveQueryException">InactiveQueryException</h2>
<!-- backwards compatibility -->
<a id="schemainactivequeryexception"></a>
<a id="schema_InactiveQueryException"></a>
<a id="tocSinactivequeryexception"></a>
<a id="tocsinactivequeryexception"></a>

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

<h2 id="tocS_QueryIdNotFoundException">QueryIdNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaqueryidnotfoundexception"></a>
<a id="schema_QueryIdNotFoundException"></a>
<a id="tocSqueryidnotfoundexception"></a>
<a id="tocsqueryidnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "Destinations": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Name|object|false|none|none|
|Source|object|false|none|none|
|Destinations|object|false|none|none|
|Tags|[TagsList](#schematagslist)|false|none|A list of tags.|

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "Name": {},
  "Source": {},
  "Destinations": {},
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Source|object|true|none|none|
|Destinations|object|true|none|none|
|Tags|[TagsList](#schematagslist)|false|none|A list of tags.|

<h2 id="tocS_ChannelMaxLimitExceededException">ChannelMaxLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemachannelmaxlimitexceededexception"></a>
<a id="schema_ChannelMaxLimitExceededException"></a>
<a id="tocSchannelmaxlimitexceededexception"></a>
<a id="tocschannelmaxlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidSourceException">InvalidSourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsourceexception"></a>
<a id="schema_InvalidSourceException"></a>
<a id="tocSinvalidsourceexception"></a>
<a id="tocsinvalidsourceexception"></a>

```json
null
```

<h2 id="tocS_ChannelAlreadyExistsException">ChannelAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemachannelalreadyexistsexception"></a>
<a id="schema_ChannelAlreadyExistsException"></a>
<a id="tocSchannelalreadyexistsexception"></a>
<a id="tocschannelalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidEventDataStoreCategoryException">InvalidEventDataStoreCategoryException</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventdatastorecategoryexception"></a>
<a id="schema_InvalidEventDataStoreCategoryException"></a>
<a id="tocSinvalideventdatastorecategoryexception"></a>
<a id="tocsinvalideventdatastorecategoryexception"></a>

```json
null
```

<h2 id="tocS_CreateEventDataStoreResponse">CreateEventDataStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventdatastoreresponse"></a>
<a id="schema_CreateEventDataStoreResponse"></a>
<a id="tocScreateeventdatastoreresponse"></a>
<a id="tocscreateeventdatastoreresponse"></a>

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStoreArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|TagsList|[TagsList](#schematagslist)|false|none|A list of tags.|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_CreateEventDataStoreRequest">CreateEventDataStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventdatastorerequest"></a>
<a id="schema_CreateEventDataStoreRequest"></a>
<a id="tocScreateeventdatastorerequest"></a>
<a id="tocscreateeventdatastorerequest"></a>

```json
{
  "Name": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|TagsList|[TagsList](#schematagslist)|false|none|A list of tags.|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_EventDataStoreAlreadyExistsException">EventDataStoreAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorealreadyexistsexception"></a>
<a id="schema_EventDataStoreAlreadyExistsException"></a>
<a id="tocSeventdatastorealreadyexistsexception"></a>
<a id="tocseventdatastorealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_EventDataStoreMaxLimitExceededException">EventDataStoreMaxLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastoremaxlimitexceededexception"></a>
<a id="schema_EventDataStoreMaxLimitExceededException"></a>
<a id="tocSeventdatastoremaxlimitexceededexception"></a>
<a id="tocseventdatastoremaxlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidEventSelectorsException">InvalidEventSelectorsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventselectorsexception"></a>
<a id="schema_InvalidEventSelectorsException"></a>
<a id="tocSinvalideventselectorsexception"></a>
<a id="tocsinvalideventselectorsexception"></a>

```json
null
```

<h2 id="tocS_InsufficientEncryptionPolicyException">InsufficientEncryptionPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientencryptionpolicyexception"></a>
<a id="schema_InsufficientEncryptionPolicyException"></a>
<a id="tocSinsufficientencryptionpolicyexception"></a>
<a id="tocsinsufficientencryptionpolicyexception"></a>

```json
null
```

<h2 id="tocS_InvalidKmsKeyIdException">InvalidKmsKeyIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkmskeyidexception"></a>
<a id="schema_InvalidKmsKeyIdException"></a>
<a id="tocSinvalidkmskeyidexception"></a>
<a id="tocsinvalidkmskeyidexception"></a>

```json
null
```

<h2 id="tocS_KmsKeyNotFoundException">KmsKeyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemakmskeynotfoundexception"></a>
<a id="schema_KmsKeyNotFoundException"></a>
<a id="tocSkmskeynotfoundexception"></a>
<a id="tocskmskeynotfoundexception"></a>

```json
null
```

<h2 id="tocS_KmsException">KmsException</h2>
<!-- backwards compatibility -->
<a id="schemakmsexception"></a>
<a id="schema_KmsException"></a>
<a id="tocSkmsexception"></a>
<a id="tocskmsexception"></a>

```json
null
```

<h2 id="tocS_CloudTrailAccessNotEnabledException">CloudTrailAccessNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailaccessnotenabledexception"></a>
<a id="schema_CloudTrailAccessNotEnabledException"></a>
<a id="tocScloudtrailaccessnotenabledexception"></a>
<a id="tocscloudtrailaccessnotenabledexception"></a>

```json
null
```

<h2 id="tocS_InsufficientDependencyServiceAccessPermissionException">InsufficientDependencyServiceAccessPermissionException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientdependencyserviceaccesspermissionexception"></a>
<a id="schema_InsufficientDependencyServiceAccessPermissionException"></a>
<a id="tocSinsufficientdependencyserviceaccesspermissionexception"></a>
<a id="tocsinsufficientdependencyserviceaccesspermissionexception"></a>

```json
null
```

<h2 id="tocS_OrganizationsNotInUseException">OrganizationsNotInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsnotinuseexception"></a>
<a id="schema_OrganizationsNotInUseException"></a>
<a id="tocSorganizationsnotinuseexception"></a>
<a id="tocsorganizationsnotinuseexception"></a>

```json
null
```

<h2 id="tocS_OrganizationNotInAllFeaturesModeException">OrganizationNotInAllFeaturesModeException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnotinallfeaturesmodeexception"></a>
<a id="schema_OrganizationNotInAllFeaturesModeException"></a>
<a id="tocSorganizationnotinallfeaturesmodeexception"></a>
<a id="tocsorganizationnotinallfeaturesmodeexception"></a>

```json
null
```

<h2 id="tocS_CreateTrailResponse">CreateTrailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrailresponse"></a>
<a id="schema_CreateTrailResponse"></a>
<a id="tocScreatetrailresponse"></a>
<a id="tocscreatetrailresponse"></a>

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "SnsTopicARN": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "TrailARN": {},
  "LogFileValidationEnabled": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|SnsTopicName|object|false|none|none|
|SnsTopicARN|object|false|none|none|
|IncludeGlobalServiceEvents|object|false|none|none|
|IsMultiRegionTrail|object|false|none|none|
|TrailARN|object|false|none|none|
|LogFileValidationEnabled|object|false|none|none|
|CloudWatchLogsLogGroupArn|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|IsOrganizationTrail|object|false|none|none|

<h2 id="tocS_CreateTrailRequest">CreateTrailRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrailrequest"></a>
<a id="schema_CreateTrailRequest"></a>
<a id="tocScreatetrailrequest"></a>
<a id="tocscreatetrailrequest"></a>

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "EnableLogFileValidation": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {},
  "TagsList": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

Specifies the settings for each trail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|S3BucketName|object|true|none|none|
|S3KeyPrefix|object|false|none|none|
|SnsTopicName|object|false|none|none|
|IncludeGlobalServiceEvents|object|false|none|none|
|IsMultiRegionTrail|object|false|none|none|
|EnableLogFileValidation|object|false|none|none|
|CloudWatchLogsLogGroupArn|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|IsOrganizationTrail|object|false|none|none|
|TagsList|[TagsList](#schematagslist)|false|none|A list of tags.|

<h2 id="tocS_MaximumNumberOfTrailsExceededException">MaximumNumberOfTrailsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumnumberoftrailsexceededexception"></a>
<a id="schema_MaximumNumberOfTrailsExceededException"></a>
<a id="tocSmaximumnumberoftrailsexceededexception"></a>
<a id="tocsmaximumnumberoftrailsexceededexception"></a>

```json
null
```

<h2 id="tocS_TrailAlreadyExistsException">TrailAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schematrailalreadyexistsexception"></a>
<a id="schema_TrailAlreadyExistsException"></a>
<a id="tocStrailalreadyexistsexception"></a>
<a id="tocstrailalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_S3BucketDoesNotExistException">S3BucketDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketdoesnotexistexception"></a>
<a id="schema_S3BucketDoesNotExistException"></a>
<a id="tocSs3bucketdoesnotexistexception"></a>
<a id="tocss3bucketdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InsufficientS3BucketPolicyException">InsufficientS3BucketPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficients3bucketpolicyexception"></a>
<a id="schema_InsufficientS3BucketPolicyException"></a>
<a id="tocSinsufficients3bucketpolicyexception"></a>
<a id="tocsinsufficients3bucketpolicyexception"></a>

```json
null
```

<h2 id="tocS_InsufficientSnsTopicPolicyException">InsufficientSnsTopicPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientsnstopicpolicyexception"></a>
<a id="schema_InsufficientSnsTopicPolicyException"></a>
<a id="tocSinsufficientsnstopicpolicyexception"></a>
<a id="tocsinsufficientsnstopicpolicyexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3BucketNameException">InvalidS3BucketNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3bucketnameexception"></a>
<a id="schema_InvalidS3BucketNameException"></a>
<a id="tocSinvalids3bucketnameexception"></a>
<a id="tocsinvalids3bucketnameexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3PrefixException">InvalidS3PrefixException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3prefixexception"></a>
<a id="schema_InvalidS3PrefixException"></a>
<a id="tocSinvalids3prefixexception"></a>
<a id="tocsinvalids3prefixexception"></a>

```json
null
```

<h2 id="tocS_InvalidSnsTopicNameException">InvalidSnsTopicNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnstopicnameexception"></a>
<a id="schema_InvalidSnsTopicNameException"></a>
<a id="tocSinvalidsnstopicnameexception"></a>
<a id="tocsinvalidsnstopicnameexception"></a>

```json
null
```

<h2 id="tocS_TrailNotProvidedException">TrailNotProvidedException</h2>
<!-- backwards compatibility -->
<a id="schematrailnotprovidedexception"></a>
<a id="schema_TrailNotProvidedException"></a>
<a id="tocStrailnotprovidedexception"></a>
<a id="tocstrailnotprovidedexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterCombinationException">InvalidParameterCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametercombinationexception"></a>
<a id="schema_InvalidParameterCombinationException"></a>
<a id="tocSinvalidparametercombinationexception"></a>
<a id="tocsinvalidparametercombinationexception"></a>

```json
null
```

<h2 id="tocS_KmsKeyDisabledException">KmsKeyDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemakmskeydisabledexception"></a>
<a id="schema_KmsKeyDisabledException"></a>
<a id="tocSkmskeydisabledexception"></a>
<a id="tocskmskeydisabledexception"></a>

```json
null
```

<h2 id="tocS_InvalidCloudWatchLogsLogGroupArnException">InvalidCloudWatchLogsLogGroupArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcloudwatchlogsloggrouparnexception"></a>
<a id="schema_InvalidCloudWatchLogsLogGroupArnException"></a>
<a id="tocSinvalidcloudwatchlogsloggrouparnexception"></a>
<a id="tocsinvalidcloudwatchlogsloggrouparnexception"></a>

```json
null
```

<h2 id="tocS_InvalidCloudWatchLogsRoleArnException">InvalidCloudWatchLogsRoleArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcloudwatchlogsrolearnexception"></a>
<a id="schema_InvalidCloudWatchLogsRoleArnException"></a>
<a id="tocSinvalidcloudwatchlogsrolearnexception"></a>
<a id="tocsinvalidcloudwatchlogsrolearnexception"></a>

```json
null
```

<h2 id="tocS_CloudWatchLogsDeliveryUnavailableException">CloudWatchLogsDeliveryUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsdeliveryunavailableexception"></a>
<a id="schema_CloudWatchLogsDeliveryUnavailableException"></a>
<a id="tocScloudwatchlogsdeliveryunavailableexception"></a>
<a id="tocscloudwatchlogsdeliveryunavailableexception"></a>

```json
null
```

<h2 id="tocS_CloudTrailInvalidClientTokenIdException">CloudTrailInvalidClientTokenIdException</h2>
<!-- backwards compatibility -->
<a id="schemacloudtrailinvalidclienttokenidexception"></a>
<a id="schema_CloudTrailInvalidClientTokenIdException"></a>
<a id="tocScloudtrailinvalidclienttokenidexception"></a>
<a id="tocscloudtrailinvalidclienttokenidexception"></a>

```json
null
```

<h2 id="tocS_DeleteChannelResponse">DeleteChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelresponse"></a>
<a id="schema_DeleteChannelResponse"></a>
<a id="tocSdeletechannelresponse"></a>
<a id="tocsdeletechannelresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{
  "Channel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|true|none|none|

<h2 id="tocS_ChannelARNInvalidException">ChannelARNInvalidException</h2>
<!-- backwards compatibility -->
<a id="schemachannelarninvalidexception"></a>
<a id="schema_ChannelARNInvalidException"></a>
<a id="tocSchannelarninvalidexception"></a>
<a id="tocschannelarninvalidexception"></a>

```json
null
```

<h2 id="tocS_DeleteEventDataStoreResponse">DeleteEventDataStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventdatastoreresponse"></a>
<a id="schema_DeleteEventDataStoreResponse"></a>
<a id="tocSdeleteeventdatastoreresponse"></a>
<a id="tocsdeleteeventdatastoreresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteEventDataStoreRequest">DeleteEventDataStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventdatastorerequest"></a>
<a id="schema_DeleteEventDataStoreRequest"></a>
<a id="tocSdeleteeventdatastorerequest"></a>
<a id="tocsdeleteeventdatastorerequest"></a>

```json
{
  "EventDataStore": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|true|none|none|

<h2 id="tocS_EventDataStoreTerminationProtectedException">EventDataStoreTerminationProtectedException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastoreterminationprotectedexception"></a>
<a id="schema_EventDataStoreTerminationProtectedException"></a>
<a id="tocSeventdatastoreterminationprotectedexception"></a>
<a id="tocseventdatastoreterminationprotectedexception"></a>

```json
null
```

<h2 id="tocS_EventDataStoreHasOngoingImportException">EventDataStoreHasOngoingImportException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorehasongoingimportexception"></a>
<a id="schema_EventDataStoreHasOngoingImportException"></a>
<a id="tocSeventdatastorehasongoingimportexception"></a>
<a id="tocseventdatastorehasongoingimportexception"></a>

```json
null
```

<h2 id="tocS_ChannelExistsForEDSException">ChannelExistsForEDSException</h2>
<!-- backwards compatibility -->
<a id="schemachannelexistsforedsexception"></a>
<a id="schema_ChannelExistsForEDSException"></a>
<a id="tocSchannelexistsforedsexception"></a>
<a id="tocschannelexistsforedsexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ResourceARNNotValidException">ResourceARNNotValidException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnnotvalidexception"></a>
<a id="schema_ResourceARNNotValidException"></a>
<a id="tocSresourcearnnotvalidexception"></a>
<a id="tocsresourcearnnotvalidexception"></a>

```json
null
```

<h2 id="tocS_ResourcePolicyNotFoundException">ResourcePolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicynotfoundexception"></a>
<a id="schema_ResourcePolicyNotFoundException"></a>
<a id="tocSresourcepolicynotfoundexception"></a>
<a id="tocsresourcepolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteTrailResponse">DeleteTrailResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrailresponse"></a>
<a id="schema_DeleteTrailResponse"></a>
<a id="tocSdeletetrailresponse"></a>
<a id="tocsdeletetrailresponse"></a>

```json
{}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

<h2 id="tocS_DeleteTrailRequest">DeleteTrailRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrailrequest"></a>
<a id="schema_DeleteTrailRequest"></a>
<a id="tocSdeletetrailrequest"></a>
<a id="tocsdeletetrailrequest"></a>

```json
{
  "Name": {}
}
```

The request that specifies the name of a trail to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_TrailNotFoundException">TrailNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematrailnotfoundexception"></a>
<a id="schema_TrailNotFoundException"></a>
<a id="tocStrailnotfoundexception"></a>
<a id="tocstrailnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidHomeRegionException">InvalidHomeRegionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidhomeregionexception"></a>
<a id="schema_InvalidHomeRegionException"></a>
<a id="tocSinvalidhomeregionexception"></a>
<a id="tocsinvalidhomeregionexception"></a>

```json
null
```

<h2 id="tocS_DeregisterOrganizationDelegatedAdminResponse">DeregisterOrganizationDelegatedAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterorganizationdelegatedadminresponse"></a>
<a id="schema_DeregisterOrganizationDelegatedAdminResponse"></a>
<a id="tocSderegisterorganizationdelegatedadminresponse"></a>
<a id="tocsderegisterorganizationdelegatedadminresponse"></a>

```json
{}
```

Returns the following response if successful. Otherwise, returns an error.

<h2 id="tocS_DeregisterOrganizationDelegatedAdminRequest">DeregisterOrganizationDelegatedAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterorganizationdelegatedadminrequest"></a>
<a id="schema_DeregisterOrganizationDelegatedAdminRequest"></a>
<a id="tocSderegisterorganizationdelegatedadminrequest"></a>
<a id="tocsderegisterorganizationdelegatedadminrequest"></a>

```json
{
  "DelegatedAdminAccountId": {}
}
```

Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegatedAdminAccountId|object|true|none|none|

<h2 id="tocS_AccountNotFoundException">AccountNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnotfoundexception"></a>
<a id="schema_AccountNotFoundException"></a>
<a id="tocSaccountnotfoundexception"></a>
<a id="tocsaccountnotfoundexception"></a>

```json
null
```

<h2 id="tocS_AccountNotRegisteredException">AccountNotRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnotregisteredexception"></a>
<a id="schema_AccountNotRegisteredException"></a>
<a id="tocSaccountnotregisteredexception"></a>
<a id="tocsaccountnotregisteredexception"></a>

```json
null
```

<h2 id="tocS_NotOrganizationManagementAccountException">NotOrganizationManagementAccountException</h2>
<!-- backwards compatibility -->
<a id="schemanotorganizationmanagementaccountexception"></a>
<a id="schema_NotOrganizationManagementAccountException"></a>
<a id="tocSnotorganizationmanagementaccountexception"></a>
<a id="tocsnotorganizationmanagementaccountexception"></a>

```json
null
```

<h2 id="tocS_DescribeQueryResponse">DescribeQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeryresponse"></a>
<a id="schema_DescribeQueryResponse"></a>
<a id="tocSdescribequeryresponse"></a>
<a id="tocsdescribequeryresponse"></a>

```json
{
  "QueryId": {},
  "QueryString": {},
  "QueryStatus": {},
  "QueryStatistics": {
    "EventsMatched": {},
    "EventsScanned": {},
    "BytesScanned": {},
    "ExecutionTimeInMillis": {},
    "CreationTime": {}
  },
  "ErrorMessage": {},
  "DeliveryS3Uri": {},
  "DeliveryStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|false|none|none|
|QueryString|object|false|none|none|
|QueryStatus|object|false|none|none|
|QueryStatistics|object|false|none|none|
|ErrorMessage|object|false|none|none|
|DeliveryS3Uri|object|false|none|none|
|DeliveryStatus|object|false|none|none|

<h2 id="tocS_DescribeQueryRequest">DescribeQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeryrequest"></a>
<a id="schema_DescribeQueryRequest"></a>
<a id="tocSdescribequeryrequest"></a>
<a id="tocsdescribequeryrequest"></a>

```json
{
  "EventDataStore": {},
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|false|none|none|
|QueryId|object|true|none|none|

<h2 id="tocS_DescribeTrailsResponse">DescribeTrailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrailsresponse"></a>
<a id="schema_DescribeTrailsResponse"></a>
<a id="tocSdescribetrailsresponse"></a>
<a id="tocsdescribetrailsresponse"></a>

```json
{
  "trailList": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trailList|object|false|none|none|

<h2 id="tocS_DescribeTrailsRequest">DescribeTrailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrailsrequest"></a>
<a id="schema_DescribeTrailsRequest"></a>
<a id="tocSdescribetrailsrequest"></a>
<a id="tocsdescribetrailsrequest"></a>

```json
{
  "trailNameList": {},
  "includeShadowTrails": {}
}
```

Returns information about the trail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trailNameList|object|false|none|none|
|includeShadowTrails|object|false|none|none|

<h2 id="tocS_GetChannelResponse">GetChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelresponse"></a>
<a id="schema_GetChannelResponse"></a>
<a id="tocSgetchannelresponse"></a>
<a id="tocsgetchannelresponse"></a>

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "SourceConfig": {
    "ApplyToAllRegions": {},
    "AdvancedEventSelectors": {}
  },
  "Destinations": {},
  "IngestionStatus": {
    "LatestIngestionSuccessTime": {},
    "LatestIngestionSuccessEventID": {},
    "LatestIngestionErrorCode": {},
    "LatestIngestionAttemptTime": {},
    "LatestIngestionAttemptEventID": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Name|object|false|none|none|
|Source|object|false|none|none|
|SourceConfig|object|false|none|none|
|Destinations|object|false|none|none|
|IngestionStatus|object|false|none|none|

<h2 id="tocS_GetChannelRequest">GetChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelrequest"></a>
<a id="schema_GetChannelRequest"></a>
<a id="tocSgetchannelrequest"></a>
<a id="tocsgetchannelrequest"></a>

```json
{
  "Channel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|true|none|none|

<h2 id="tocS_GetEventDataStoreResponse">GetEventDataStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventdatastoreresponse"></a>
<a id="schema_GetEventDataStoreResponse"></a>
<a id="tocSgeteventdatastoreresponse"></a>
<a id="tocsgeteventdatastoreresponse"></a>

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStoreArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_GetEventDataStoreRequest">GetEventDataStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventdatastorerequest"></a>
<a id="schema_GetEventDataStoreRequest"></a>
<a id="tocSgeteventdatastorerequest"></a>
<a id="tocsgeteventdatastorerequest"></a>

```json
{
  "EventDataStore": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|true|none|none|

<h2 id="tocS_GetEventSelectorsResponse">GetEventSelectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventselectorsresponse"></a>
<a id="schema_GetEventSelectorsResponse"></a>
<a id="tocSgeteventselectorsresponse"></a>
<a id="tocsgeteventselectorsresponse"></a>

```json
{
  "TrailARN": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailARN|object|false|none|none|
|EventSelectors|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|

<h2 id="tocS_GetEventSelectorsRequest">GetEventSelectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventselectorsrequest"></a>
<a id="schema_GetEventSelectorsRequest"></a>
<a id="tocSgeteventselectorsrequest"></a>
<a id="tocsgeteventselectorsrequest"></a>

```json
{
  "TrailName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailName|object|true|none|none|

<h2 id="tocS_GetImportResponse">GetImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimportresponse"></a>
<a id="schema_GetImportResponse"></a>
<a id="tocSgetimportresponse"></a>
<a id="tocsgetimportresponse"></a>

```json
{
  "ImportId": {},
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "ImportStatistics": {
    "PrefixesFound": {},
    "PrefixesCompleted": {},
    "FilesCompleted": {},
    "EventsCompleted": {},
    "FailedEntries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|false|none|none|
|Destinations|object|false|none|none|
|ImportSource|object|false|none|none|
|StartEventTime|object|false|none|none|
|EndEventTime|object|false|none|none|
|ImportStatus|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|ImportStatistics|object|false|none|none|

<h2 id="tocS_GetImportRequest">GetImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimportrequest"></a>
<a id="schema_GetImportRequest"></a>
<a id="tocSgetimportrequest"></a>
<a id="tocsgetimportrequest"></a>

```json
{
  "ImportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|true|none|none|

<h2 id="tocS_ImportNotFoundException">ImportNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaimportnotfoundexception"></a>
<a id="schema_ImportNotFoundException"></a>
<a id="tocSimportnotfoundexception"></a>
<a id="tocsimportnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetInsightSelectorsResponse">GetInsightSelectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightselectorsresponse"></a>
<a id="schema_GetInsightSelectorsResponse"></a>
<a id="tocSgetinsightselectorsresponse"></a>
<a id="tocsgetinsightselectorsresponse"></a>

```json
{
  "TrailARN": {},
  "InsightSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailARN|object|false|none|none|
|InsightSelectors|object|false|none|none|

<h2 id="tocS_GetInsightSelectorsRequest">GetInsightSelectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightselectorsrequest"></a>
<a id="schema_GetInsightSelectorsRequest"></a>
<a id="tocSgetinsightselectorsrequest"></a>
<a id="tocsgetinsightselectorsrequest"></a>

```json
{
  "TrailName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailName|object|true|none|none|

<h2 id="tocS_InsightNotEnabledException">InsightNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemainsightnotenabledexception"></a>
<a id="schema_InsightNotEnabledException"></a>
<a id="tocSinsightnotenabledexception"></a>
<a id="tocsinsightnotenabledexception"></a>

```json
null
```

<h2 id="tocS_GetQueryResultsResponse">GetQueryResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsresponse"></a>
<a id="schema_GetQueryResultsResponse"></a>
<a id="tocSgetqueryresultsresponse"></a>
<a id="tocsgetqueryresultsresponse"></a>

```json
{
  "QueryStatus": {},
  "QueryStatistics": {
    "ResultsCount": {},
    "TotalResultsCount": {},
    "BytesScanned": {}
  },
  "QueryResultRows": {},
  "NextToken": {},
  "ErrorMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryStatus|object|false|none|none|
|QueryStatistics|object|false|none|none|
|QueryResultRows|object|false|none|none|
|NextToken|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_GetQueryResultsRequest">GetQueryResultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsrequest"></a>
<a id="schema_GetQueryResultsRequest"></a>
<a id="tocSgetqueryresultsrequest"></a>
<a id="tocsgetqueryresultsrequest"></a>

```json
{
  "EventDataStore": {},
  "QueryId": {},
  "NextToken": {},
  "MaxQueryResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|false|none|none|
|QueryId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxQueryResults|object|false|none|none|

<h2 id="tocS_InvalidMaxResultsException">InvalidMaxResultsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmaxresultsexception"></a>
<a id="schema_InvalidMaxResultsException"></a>
<a id="tocSinvalidmaxresultsexception"></a>
<a id="tocsinvalidmaxresultsexception"></a>

```json
null
```

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_GetResourcePolicyResponse">GetResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyresponse"></a>
<a id="schema_GetResourcePolicyResponse"></a>
<a id="tocSgetresourcepolicyresponse"></a>
<a id="tocsgetresourcepolicyresponse"></a>

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_GetResourcePolicyRequest">GetResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyrequest"></a>
<a id="schema_GetResourcePolicyRequest"></a>
<a id="tocSgetresourcepolicyrequest"></a>
<a id="tocsgetresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetTrailResponse">GetTrailResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrailresponse"></a>
<a id="schema_GetTrailResponse"></a>
<a id="tocSgettrailresponse"></a>
<a id="tocsgettrailresponse"></a>

```json
{
  "Trail": {
    "Name": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "SnsTopicName": {},
    "SnsTopicARN": {},
    "IncludeGlobalServiceEvents": {},
    "IsMultiRegionTrail": {},
    "HomeRegion": {},
    "TrailARN": {},
    "LogFileValidationEnabled": {},
    "CloudWatchLogsLogGroupArn": {},
    "CloudWatchLogsRoleArn": {},
    "KmsKeyId": {},
    "HasCustomEventSelectors": {},
    "HasInsightSelectors": {},
    "IsOrganizationTrail": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Trail|[Trail](#schematrail)|false|none|The settings for a trail.|

<h2 id="tocS_GetTrailRequest">GetTrailRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrailrequest"></a>
<a id="schema_GetTrailRequest"></a>
<a id="tocSgettrailrequest"></a>
<a id="tocsgettrailrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_GetTrailStatusResponse">GetTrailStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrailstatusresponse"></a>
<a id="schema_GetTrailStatusResponse"></a>
<a id="tocSgettrailstatusresponse"></a>
<a id="tocsgettrailstatusresponse"></a>

```json
{
  "IsLogging": {},
  "LatestDeliveryError": {},
  "LatestNotificationError": {},
  "LatestDeliveryTime": {},
  "LatestNotificationTime": {},
  "StartLoggingTime": {},
  "StopLoggingTime": {},
  "LatestCloudWatchLogsDeliveryError": {},
  "LatestCloudWatchLogsDeliveryTime": {},
  "LatestDigestDeliveryTime": {},
  "LatestDigestDeliveryError": {},
  "LatestDeliveryAttemptTime": {},
  "LatestNotificationAttemptTime": {},
  "LatestNotificationAttemptSucceeded": {},
  "LatestDeliveryAttemptSucceeded": {},
  "TimeLoggingStarted": {},
  "TimeLoggingStopped": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsLogging|object|false|none|none|
|LatestDeliveryError|object|false|none|none|
|LatestNotificationError|object|false|none|none|
|LatestDeliveryTime|object|false|none|none|
|LatestNotificationTime|object|false|none|none|
|StartLoggingTime|object|false|none|none|
|StopLoggingTime|object|false|none|none|
|LatestCloudWatchLogsDeliveryError|object|false|none|none|
|LatestCloudWatchLogsDeliveryTime|object|false|none|none|
|LatestDigestDeliveryTime|object|false|none|none|
|LatestDigestDeliveryError|object|false|none|none|
|LatestDeliveryAttemptTime|object|false|none|none|
|LatestNotificationAttemptTime|object|false|none|none|
|LatestNotificationAttemptSucceeded|object|false|none|none|
|LatestDeliveryAttemptSucceeded|object|false|none|none|
|TimeLoggingStarted|object|false|none|none|
|TimeLoggingStopped|object|false|none|none|

<h2 id="tocS_GetTrailStatusRequest">GetTrailStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrailstatusrequest"></a>
<a id="schema_GetTrailStatusRequest"></a>
<a id="tocSgettrailstatusrequest"></a>
<a id="tocsgettrailstatusrequest"></a>

```json
{
  "Name": {}
}
```

The name of a trail about which you want the current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventDataStoresResponse">ListEventDataStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventdatastoresresponse"></a>
<a id="schema_ListEventDataStoresResponse"></a>
<a id="tocSlisteventdatastoresresponse"></a>
<a id="tocslisteventdatastoresresponse"></a>

```json
{
  "EventDataStores": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStores|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventDataStoresRequest">ListEventDataStoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventdatastoresrequest"></a>
<a id="schema_ListEventDataStoresRequest"></a>
<a id="tocSlisteventdatastoresrequest"></a>
<a id="tocslisteventdatastoresrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListImportFailuresResponse">ListImportFailuresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportfailuresresponse"></a>
<a id="schema_ListImportFailuresResponse"></a>
<a id="tocSlistimportfailuresresponse"></a>
<a id="tocslistimportfailuresresponse"></a>

```json
{
  "Failures": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportFailuresRequest">ListImportFailuresRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimportfailuresrequest"></a>
<a id="schema_ListImportFailuresRequest"></a>
<a id="tocSlistimportfailuresrequest"></a>
<a id="tocslistimportfailuresrequest"></a>

```json
{
  "ImportId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportsResponse">ListImportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsresponse"></a>
<a id="schema_ListImportsResponse"></a>
<a id="tocSlistimportsresponse"></a>
<a id="tocslistimportsresponse"></a>

```json
{
  "Imports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Imports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportsRequest">ListImportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsrequest"></a>
<a id="schema_ListImportsRequest"></a>
<a id="tocSlistimportsrequest"></a>
<a id="tocslistimportsrequest"></a>

```json
{
  "MaxResults": {},
  "Destination": {},
  "ImportStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|Destination|object|false|none|none|
|ImportStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPublicKeysResponse">ListPublicKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublickeysresponse"></a>
<a id="schema_ListPublicKeysResponse"></a>
<a id="tocSlistpublickeysresponse"></a>
<a id="tocslistpublickeysresponse"></a>

```json
{
  "PublicKeyList": {},
  "NextToken": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPublicKeysRequest">ListPublicKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpublickeysrequest"></a>
<a id="schema_ListPublicKeysRequest"></a>
<a id="tocSlistpublickeysrequest"></a>
<a id="tocslistpublickeysrequest"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "NextToken": {}
}
```

Requests the public keys for a specified time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidTimeRangeException">InvalidTimeRangeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtimerangeexception"></a>
<a id="schema_InvalidTimeRangeException"></a>
<a id="tocSinvalidtimerangeexception"></a>
<a id="tocsinvalidtimerangeexception"></a>

```json
null
```

<h2 id="tocS_InvalidTokenException">InvalidTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtokenexception"></a>
<a id="schema_InvalidTokenException"></a>
<a id="tocSinvalidtokenexception"></a>
<a id="tocsinvalidtokenexception"></a>

```json
null
```

<h2 id="tocS_ListQueriesResponse">ListQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueriesresponse"></a>
<a id="schema_ListQueriesResponse"></a>
<a id="tocSlistqueriesresponse"></a>
<a id="tocslistqueriesresponse"></a>

```json
{
  "Queries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListQueriesRequest">ListQueriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueriesrequest"></a>
<a id="schema_ListQueriesRequest"></a>
<a id="tocSlistqueriesrequest"></a>
<a id="tocslistqueriesrequest"></a>

```json
{
  "EventDataStore": {},
  "NextToken": {},
  "MaxResults": {},
  "StartTime": {},
  "EndTime": {},
  "QueryStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|QueryStatus|object|false|none|none|

<h2 id="tocS_InvalidDateRangeException">InvalidDateRangeException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddaterangeexception"></a>
<a id="schema_InvalidDateRangeException"></a>
<a id="tocSinvaliddaterangeexception"></a>
<a id="tocsinvaliddaterangeexception"></a>

```json
null
```

<h2 id="tocS_InvalidQueryStatusException">InvalidQueryStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidquerystatusexception"></a>
<a id="schema_InvalidQueryStatusException"></a>
<a id="tocSinvalidquerystatusexception"></a>
<a id="tocsinvalidquerystatusexception"></a>

```json
null
```

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "ResourceTagList": {},
  "NextToken": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTagList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{
  "ResourceIdList": {},
  "NextToken": {}
}
```

Specifies a list of tags to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrailsResponse">ListTrailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrailsresponse"></a>
<a id="schema_ListTrailsResponse"></a>
<a id="tocSlisttrailsresponse"></a>
<a id="tocslisttrailsresponse"></a>

```json
{
  "Trails": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Trails|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrailsRequest">ListTrailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrailsrequest"></a>
<a id="schema_ListTrailsRequest"></a>
<a id="tocSlisttrailsrequest"></a>
<a id="tocslisttrailsrequest"></a>

```json
{
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_LookupEventsResponse">LookupEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookupeventsresponse"></a>
<a id="schema_LookupEventsResponse"></a>
<a id="tocSlookupeventsresponse"></a>
<a id="tocslookupeventsresponse"></a>

```json
{
  "Events": {},
  "NextToken": {}
}
```

Contains a response to a LookupEvents action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LookupEventsRequest">LookupEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalookupeventsrequest"></a>
<a id="schema_LookupEventsRequest"></a>
<a id="tocSlookupeventsrequest"></a>
<a id="tocslookupeventsrequest"></a>

```json
{
  "LookupAttributes": {},
  "StartTime": {},
  "EndTime": {},
  "EventCategory": {},
  "MaxResults": {},
  "NextToken": {}
}
```

Contains a request for LookupEvents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LookupAttributes|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|EventCategory|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidLookupAttributesException">InvalidLookupAttributesException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlookupattributesexception"></a>
<a id="schema_InvalidLookupAttributesException"></a>
<a id="tocSinvalidlookupattributesexception"></a>
<a id="tocsinvalidlookupattributesexception"></a>

```json
null
```

<h2 id="tocS_InvalidEventCategoryException">InvalidEventCategoryException</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventcategoryexception"></a>
<a id="schema_InvalidEventCategoryException"></a>
<a id="tocSinvalideventcategoryexception"></a>
<a id="tocsinvalideventcategoryexception"></a>

```json
null
```

<h2 id="tocS_PutEventSelectorsResponse">PutEventSelectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputeventselectorsresponse"></a>
<a id="schema_PutEventSelectorsResponse"></a>
<a id="tocSputeventselectorsresponse"></a>
<a id="tocsputeventselectorsresponse"></a>

```json
{
  "TrailARN": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailARN|object|false|none|none|
|EventSelectors|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|

<h2 id="tocS_PutEventSelectorsRequest">PutEventSelectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputeventselectorsrequest"></a>
<a id="schema_PutEventSelectorsRequest"></a>
<a id="tocSputeventselectorsrequest"></a>
<a id="tocsputeventselectorsrequest"></a>

```json
{
  "TrailName": {},
  "EventSelectors": {},
  "AdvancedEventSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailName|object|true|none|none|
|EventSelectors|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|

<h2 id="tocS_PutInsightSelectorsResponse">PutInsightSelectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputinsightselectorsresponse"></a>
<a id="schema_PutInsightSelectorsResponse"></a>
<a id="tocSputinsightselectorsresponse"></a>
<a id="tocsputinsightselectorsresponse"></a>

```json
{
  "TrailARN": {},
  "InsightSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailARN|object|false|none|none|
|InsightSelectors|object|false|none|none|

<h2 id="tocS_PutInsightSelectorsRequest">PutInsightSelectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinsightselectorsrequest"></a>
<a id="schema_PutInsightSelectorsRequest"></a>
<a id="tocSputinsightselectorsrequest"></a>
<a id="tocsputinsightselectorsrequest"></a>

```json
{
  "TrailName": {},
  "InsightSelectors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailName|object|true|none|none|
|InsightSelectors|object|true|none|none|

<h2 id="tocS_InvalidInsightSelectorsException">InvalidInsightSelectorsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinsightselectorsexception"></a>
<a id="schema_InvalidInsightSelectorsException"></a>
<a id="tocSinvalidinsightselectorsexception"></a>
<a id="tocsinvalidinsightselectorsexception"></a>

```json
null
```

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourcePolicy|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|ResourcePolicy|object|true|none|none|

<h2 id="tocS_ResourcePolicyNotValidException">ResourcePolicyNotValidException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicynotvalidexception"></a>
<a id="schema_ResourcePolicyNotValidException"></a>
<a id="tocSresourcepolicynotvalidexception"></a>
<a id="tocsresourcepolicynotvalidexception"></a>

```json
null
```

<h2 id="tocS_RegisterOrganizationDelegatedAdminResponse">RegisterOrganizationDelegatedAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterorganizationdelegatedadminresponse"></a>
<a id="schema_RegisterOrganizationDelegatedAdminResponse"></a>
<a id="tocSregisterorganizationdelegatedadminresponse"></a>
<a id="tocsregisterorganizationdelegatedadminresponse"></a>

```json
{}
```

Returns the following response if successful. Otherwise, returns an error.

<h2 id="tocS_RegisterOrganizationDelegatedAdminRequest">RegisterOrganizationDelegatedAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterorganizationdelegatedadminrequest"></a>
<a id="schema_RegisterOrganizationDelegatedAdminRequest"></a>
<a id="tocSregisterorganizationdelegatedadminrequest"></a>
<a id="tocsregisterorganizationdelegatedadminrequest"></a>

```json
{
  "MemberAccountId": {}
}
```

Specifies an organization member account ID as a CloudTrail delegated administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberAccountId|object|true|none|none|

<h2 id="tocS_AccountRegisteredException">AccountRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountregisteredexception"></a>
<a id="schema_AccountRegisteredException"></a>
<a id="tocSaccountregisteredexception"></a>
<a id="tocsaccountregisteredexception"></a>

```json
null
```

<h2 id="tocS_CannotDelegateManagementAccountException">CannotDelegateManagementAccountException</h2>
<!-- backwards compatibility -->
<a id="schemacannotdelegatemanagementaccountexception"></a>
<a id="schema_CannotDelegateManagementAccountException"></a>
<a id="tocScannotdelegatemanagementaccountexception"></a>
<a id="tocscannotdelegatemanagementaccountexception"></a>

```json
null
```

<h2 id="tocS_DelegatedAdminAccountLimitExceededException">DelegatedAdminAccountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemadelegatedadminaccountlimitexceededexception"></a>
<a id="schema_DelegatedAdminAccountLimitExceededException"></a>
<a id="tocSdelegatedadminaccountlimitexceededexception"></a>
<a id="tocsdelegatedadminaccountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_RemoveTagsResponse">RemoveTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsresponse"></a>
<a id="schema_RemoveTagsResponse"></a>
<a id="tocSremovetagsresponse"></a>
<a id="tocsremovetagsresponse"></a>

```json
{}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

<h2 id="tocS_RemoveTagsRequest">RemoveTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsrequest"></a>
<a id="schema_RemoveTagsRequest"></a>
<a id="tocSremovetagsrequest"></a>
<a id="tocsremovetagsrequest"></a>

```json
{
  "ResourceId": {},
  "TagsList": {}
}
```

Specifies the tags to remove from a trail, event data store, or channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagsList|object|true|none|none|

<h2 id="tocS_RestoreEventDataStoreResponse">RestoreEventDataStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestoreeventdatastoreresponse"></a>
<a id="schema_RestoreEventDataStoreResponse"></a>
<a id="tocSrestoreeventdatastoreresponse"></a>
<a id="tocsrestoreeventdatastoreresponse"></a>

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStoreArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_RestoreEventDataStoreRequest">RestoreEventDataStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreeventdatastorerequest"></a>
<a id="schema_RestoreEventDataStoreRequest"></a>
<a id="tocSrestoreeventdatastorerequest"></a>
<a id="tocsrestoreeventdatastorerequest"></a>

```json
{
  "EventDataStore": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|true|none|none|

<h2 id="tocS_InvalidEventDataStoreStatusException">InvalidEventDataStoreStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalideventdatastorestatusexception"></a>
<a id="schema_InvalidEventDataStoreStatusException"></a>
<a id="tocSinvalideventdatastorestatusexception"></a>
<a id="tocsinvalideventdatastorestatusexception"></a>

```json
null
```

<h2 id="tocS_StartImportResponse">StartImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimportresponse"></a>
<a id="schema_StartImportResponse"></a>
<a id="tocSstartimportresponse"></a>
<a id="tocsstartimportresponse"></a>

```json
{
  "ImportId": {},
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|false|none|none|
|Destinations|object|false|none|none|
|ImportSource|object|false|none|none|
|StartEventTime|object|false|none|none|
|EndEventTime|object|false|none|none|
|ImportStatus|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_StartImportRequest">StartImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimportrequest"></a>
<a id="schema_StartImportRequest"></a>
<a id="tocSstartimportrequest"></a>
<a id="tocsstartimportrequest"></a>

```json
{
  "Destinations": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destinations|object|false|none|none|
|ImportSource|object|false|none|none|
|StartEventTime|object|false|none|none|
|EndEventTime|object|false|none|none|
|ImportId|object|false|none|none|

<h2 id="tocS_AccountHasOngoingImportException">AccountHasOngoingImportException</h2>
<!-- backwards compatibility -->
<a id="schemaaccounthasongoingimportexception"></a>
<a id="schema_AccountHasOngoingImportException"></a>
<a id="tocSaccounthasongoingimportexception"></a>
<a id="tocsaccounthasongoingimportexception"></a>

```json
null
```

<h2 id="tocS_InvalidImportSourceException">InvalidImportSourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidimportsourceexception"></a>
<a id="schema_InvalidImportSourceException"></a>
<a id="tocSinvalidimportsourceexception"></a>
<a id="tocsinvalidimportsourceexception"></a>

```json
null
```

<h2 id="tocS_StartLoggingResponse">StartLoggingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartloggingresponse"></a>
<a id="schema_StartLoggingResponse"></a>
<a id="tocSstartloggingresponse"></a>
<a id="tocsstartloggingresponse"></a>

```json
{}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

<h2 id="tocS_StartLoggingRequest">StartLoggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartloggingrequest"></a>
<a id="schema_StartLoggingRequest"></a>
<a id="tocSstartloggingrequest"></a>
<a id="tocsstartloggingrequest"></a>

```json
{
  "Name": {}
}
```

The request to CloudTrail to start logging Amazon Web Services API calls for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_StartQueryResponse">StartQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryresponse"></a>
<a id="schema_StartQueryResponse"></a>
<a id="tocSstartqueryresponse"></a>
<a id="tocsstartqueryresponse"></a>

```json
{
  "QueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|false|none|none|

<h2 id="tocS_StartQueryRequest">StartQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryrequest"></a>
<a id="schema_StartQueryRequest"></a>
<a id="tocSstartqueryrequest"></a>
<a id="tocsstartqueryrequest"></a>

```json
{
  "QueryStatement": {},
  "DeliveryS3Uri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryStatement|object|true|none|none|
|DeliveryS3Uri|object|false|none|none|

<h2 id="tocS_InvalidQueryStatementException">InvalidQueryStatementException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidquerystatementexception"></a>
<a id="schema_InvalidQueryStatementException"></a>
<a id="tocSinvalidquerystatementexception"></a>
<a id="tocsinvalidquerystatementexception"></a>

```json
null
```

<h2 id="tocS_MaxConcurrentQueriesException">MaxConcurrentQueriesException</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrentqueriesexception"></a>
<a id="schema_MaxConcurrentQueriesException"></a>
<a id="tocSmaxconcurrentqueriesexception"></a>
<a id="tocsmaxconcurrentqueriesexception"></a>

```json
null
```

<h2 id="tocS_StopImportResponse">StopImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopimportresponse"></a>
<a id="schema_StopImportResponse"></a>
<a id="tocSstopimportresponse"></a>
<a id="tocsstopimportresponse"></a>

```json
{
  "ImportId": {},
  "ImportSource": {
    "S3": {
      "S3LocationUri": {},
      "S3BucketRegion": {},
      "S3BucketAccessRoleArn": {}
    }
  },
  "Destinations": {},
  "ImportStatus": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "StartEventTime": {},
  "EndEventTime": {},
  "ImportStatistics": {
    "PrefixesFound": {},
    "PrefixesCompleted": {},
    "FilesCompleted": {},
    "EventsCompleted": {},
    "FailedEntries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|false|none|none|
|ImportSource|object|false|none|none|
|Destinations|object|false|none|none|
|ImportStatus|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|StartEventTime|object|false|none|none|
|EndEventTime|object|false|none|none|
|ImportStatistics|object|false|none|none|

<h2 id="tocS_StopImportRequest">StopImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopimportrequest"></a>
<a id="schema_StopImportRequest"></a>
<a id="tocSstopimportrequest"></a>
<a id="tocsstopimportrequest"></a>

```json
{
  "ImportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|true|none|none|

<h2 id="tocS_StopLoggingResponse">StopLoggingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoploggingresponse"></a>
<a id="schema_StopLoggingResponse"></a>
<a id="tocSstoploggingresponse"></a>
<a id="tocsstoploggingresponse"></a>

```json
{}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

<h2 id="tocS_StopLoggingRequest">StopLoggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoploggingrequest"></a>
<a id="schema_StopLoggingRequest"></a>
<a id="tocSstoploggingrequest"></a>
<a id="tocsstoploggingrequest"></a>

```json
{
  "Name": {}
}
```

Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "ChannelArn": {},
  "Name": {},
  "Source": {},
  "Destinations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Name|object|false|none|none|
|Source|object|false|none|none|
|Destinations|object|false|none|none|

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "Channel": {},
  "Destinations": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|true|none|none|
|Destinations|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateEventDataStoreResponse">UpdateEventDataStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventdatastoreresponse"></a>
<a id="schema_UpdateEventDataStoreResponse"></a>
<a id="tocSupdateeventdatastoreresponse"></a>
<a id="tocsupdateeventdatastoreresponse"></a>

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStoreArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_UpdateEventDataStoreRequest">UpdateEventDataStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventdatastorerequest"></a>
<a id="schema_UpdateEventDataStoreRequest"></a>
<a id="tocSupdateeventdatastorerequest"></a>
<a id="tocsupdateeventdatastorerequest"></a>

```json
{
  "EventDataStore": {},
  "Name": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "TerminationProtectionEnabled": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStore|object|true|none|none|
|Name|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_UpdateTrailResponse">UpdateTrailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrailresponse"></a>
<a id="schema_UpdateTrailResponse"></a>
<a id="tocSupdatetrailresponse"></a>
<a id="tocsupdatetrailresponse"></a>

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "SnsTopicARN": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "TrailARN": {},
  "LogFileValidationEnabled": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
}
```

Returns the objects or data listed below if successful. Otherwise, returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|SnsTopicName|object|false|none|none|
|SnsTopicARN|object|false|none|none|
|IncludeGlobalServiceEvents|object|false|none|none|
|IsMultiRegionTrail|object|false|none|none|
|TrailARN|object|false|none|none|
|LogFileValidationEnabled|object|false|none|none|
|CloudWatchLogsLogGroupArn|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|IsOrganizationTrail|object|false|none|none|

<h2 id="tocS_UpdateTrailRequest">UpdateTrailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrailrequest"></a>
<a id="schema_UpdateTrailRequest"></a>
<a id="tocSupdatetrailrequest"></a>
<a id="tocsupdatetrailrequest"></a>

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "EnableLogFileValidation": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "IsOrganizationTrail": {}
}
```

Specifies settings to update for the trail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|SnsTopicName|object|false|none|none|
|IncludeGlobalServiceEvents|object|false|none|none|
|IsMultiRegionTrail|object|false|none|none|
|EnableLogFileValidation|object|false|none|none|
|CloudWatchLogsLogGroupArn|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|IsOrganizationTrail|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
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

<h2 id="tocS_TagsList">TagsList</h2>
<!-- backwards compatibility -->
<a id="schematagslist"></a>
<a id="schema_TagsList"></a>
<a id="tocStagslist"></a>
<a id="tocstagslist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

A list of tags.

<h2 id="tocS_SelectorName">SelectorName</h2>
<!-- backwards compatibility -->
<a id="schemaselectorname"></a>
<a id="schema_SelectorName"></a>
<a id="tocSselectorname"></a>
<a id="tocsselectorname"></a>

```json
"string"
```

<h2 id="tocS_AdvancedFieldSelectors">AdvancedFieldSelectors</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedfieldselectors"></a>
<a id="schema_AdvancedFieldSelectors"></a>
<a id="tocSadvancedfieldselectors"></a>
<a id="tocsadvancedfieldselectors"></a>

```json
[
  {
    "Field": {},
    "Equals": {},
    "StartsWith": {},
    "EndsWith": {},
    "NotEquals": {},
    "NotStartsWith": {},
    "NotEndsWith": {}
  }
]
```

<h2 id="tocS_AdvancedEventSelector">AdvancedEventSelector</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedeventselector"></a>
<a id="schema_AdvancedEventSelector"></a>
<a id="tocSadvancedeventselector"></a>
<a id="tocsadvancedeventselector"></a>

```json
{
  "Name": {},
  "FieldSelectors": {}
}
```

<p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|FieldSelectors|object|true|none|none|

<h2 id="tocS_AdvancedEventSelectors">AdvancedEventSelectors</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedeventselectors"></a>
<a id="schema_AdvancedEventSelectors"></a>
<a id="tocSadvancedeventselectors"></a>
<a id="tocsadvancedeventselectors"></a>

```json
[
  {
    "Name": {},
    "FieldSelectors": {}
  }
]
```

<h2 id="tocS_SelectorField">SelectorField</h2>
<!-- backwards compatibility -->
<a id="schemaselectorfield"></a>
<a id="schema_SelectorField"></a>
<a id="tocSselectorfield"></a>
<a id="tocsselectorfield"></a>

```json
"string"
```

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AdvancedFieldSelector">AdvancedFieldSelector</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedfieldselector"></a>
<a id="schema_AdvancedFieldSelector"></a>
<a id="tocSadvancedfieldselector"></a>
<a id="tocsadvancedfieldselector"></a>

```json
{
  "Field": {},
  "Equals": {},
  "StartsWith": {},
  "EndsWith": {},
  "NotEquals": {},
  "NotStartsWith": {},
  "NotEndsWith": {}
}
```

A single selector statement in an advanced event selector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Field|object|true|none|none|
|Equals|object|false|none|none|
|StartsWith|object|false|none|none|
|EndsWith|object|false|none|none|
|NotEquals|object|false|none|none|
|NotStartsWith|object|false|none|none|
|NotEndsWith|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ByteBuffer">ByteBuffer</h2>
<!-- backwards compatibility -->
<a id="schemabytebuffer"></a>
<a id="schema_ByteBuffer"></a>
<a id="tocSbytebuffer"></a>
<a id="tocsbytebuffer"></a>

```json
"string"
```

<h2 id="tocS_EventDataStoreArn">EventDataStoreArn</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorearn"></a>
<a id="schema_EventDataStoreArn"></a>
<a id="tocSeventdatastorearn"></a>
<a id="tocseventdatastorearn"></a>

```json
"string"
```

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_QueryStatus">QueryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatus"></a>
<a id="schema_QueryStatus"></a>
<a id="tocSquerystatus"></a>
<a id="tocsquerystatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_ChannelArn">ChannelArn</h2>
<!-- backwards compatibility -->
<a id="schemachannelarn"></a>
<a id="schema_ChannelArn"></a>
<a id="tocSchannelarn"></a>
<a id="tocschannelarn"></a>

```json
"string"
```

<h2 id="tocS_ChannelName">ChannelName</h2>
<!-- backwards compatibility -->
<a id="schemachannelname"></a>
<a id="schema_ChannelName"></a>
<a id="tocSchannelname"></a>
<a id="tocschannelname"></a>

```json
"string"
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "ChannelArn": {},
  "Name": {}
}
```

Contains information about a returned CloudTrail channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelArn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_Channels">Channels</h2>
<!-- backwards compatibility -->
<a id="schemachannels"></a>
<a id="schema_Channels"></a>
<a id="tocSchannels"></a>
<a id="tocschannels"></a>

```json
[
  {
    "ChannelArn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"string"
```

<h2 id="tocS_Destinations">Destinations</h2>
<!-- backwards compatibility -->
<a id="schemadestinations"></a>
<a id="schema_Destinations"></a>
<a id="tocSdestinations"></a>
<a id="tocsdestinations"></a>

```json
[
  {
    "Type": {},
    "Location": {}
  }
]
```

<h2 id="tocS_EventDataStoreName">EventDataStoreName</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorename"></a>
<a id="schema_EventDataStoreName"></a>
<a id="tocSeventdatastorename"></a>
<a id="tocseventdatastorename"></a>

```json
"string"
```

<h2 id="tocS_RetentionPeriod">RetentionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiod"></a>
<a id="schema_RetentionPeriod"></a>
<a id="tocSretentionperiod"></a>
<a id="tocsretentionperiod"></a>

```json
7
```

<h2 id="tocS_TerminationProtectionEnabled">TerminationProtectionEnabled</h2>
<!-- backwards compatibility -->
<a id="schematerminationprotectionenabled"></a>
<a id="schema_TerminationProtectionEnabled"></a>
<a id="tocSterminationprotectionenabled"></a>
<a id="tocsterminationprotectionenabled"></a>

```json
true
```

<h2 id="tocS_EventDataStoreKmsKeyId">EventDataStoreKmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorekmskeyid"></a>
<a id="schema_EventDataStoreKmsKeyId"></a>
<a id="tocSeventdatastorekmskeyid"></a>
<a id="tocseventdatastorekmskeyid"></a>

```json
"string"
```

<h2 id="tocS_EventDataStoreStatus">EventDataStoreStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastorestatus"></a>
<a id="schema_EventDataStoreStatus"></a>
<a id="tocSeventdatastorestatus"></a>
<a id="tocseventdatastorestatus"></a>

```json
"CREATED"
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

<h2 id="tocS_DataResourceValues">DataResourceValues</h2>
<!-- backwards compatibility -->
<a id="schemadataresourcevalues"></a>
<a id="schema_DataResourceValues"></a>
<a id="tocSdataresourcevalues"></a>
<a id="tocsdataresourcevalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataResource">DataResource</h2>
<!-- backwards compatibility -->
<a id="schemadataresource"></a>
<a id="schema_DataResource"></a>
<a id="tocSdataresource"></a>
<a id="tocsdataresource"></a>

```json
{
  "Type": {},
  "Values": {}
}
```

<p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.</p> <p>If you are using advanced event selectors, the maximum total number of values for all conditions, across all advanced event selectors for the trail, is 500.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_DataResources">DataResources</h2>
<!-- backwards compatibility -->
<a id="schemadataresources"></a>
<a id="schema_DataResources"></a>
<a id="tocSdataresources"></a>
<a id="tocsdataresources"></a>

```json
[
  {
    "Type": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_DeliveryS3Uri">DeliveryS3Uri</h2>
<!-- backwards compatibility -->
<a id="schemadeliverys3uri"></a>
<a id="schema_DeliveryS3Uri"></a>
<a id="tocSdeliverys3uri"></a>
<a id="tocsdeliverys3uri"></a>

```json
"string"
```

<h2 id="tocS_DeliveryStatus">DeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystatus"></a>
<a id="schema_DeliveryStatus"></a>
<a id="tocSdeliverystatus"></a>
<a id="tocsdeliverystatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_QueryStatement">QueryStatement</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatement"></a>
<a id="schema_QueryStatement"></a>
<a id="tocSquerystatement"></a>
<a id="tocsquerystatement"></a>

```json
"string"
```

<h2 id="tocS_QueryStatisticsForDescribeQuery">QueryStatisticsForDescribeQuery</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatisticsfordescribequery"></a>
<a id="schema_QueryStatisticsForDescribeQuery"></a>
<a id="tocSquerystatisticsfordescribequery"></a>
<a id="tocsquerystatisticsfordescribequery"></a>

```json
{
  "EventsMatched": {},
  "EventsScanned": {},
  "BytesScanned": {},
  "ExecutionTimeInMillis": {},
  "CreationTime": {}
}
```

Gets metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventsMatched|object|false|none|none|
|EventsScanned|object|false|none|none|
|BytesScanned|object|false|none|none|
|ExecutionTimeInMillis|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_TrailNameList">TrailNameList</h2>
<!-- backwards compatibility -->
<a id="schematrailnamelist"></a>
<a id="schema_TrailNameList"></a>
<a id="tocStrailnamelist"></a>
<a id="tocstrailnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TrailList">TrailList</h2>
<!-- backwards compatibility -->
<a id="schematraillist"></a>
<a id="schema_TrailList"></a>
<a id="tocStraillist"></a>
<a id="tocstraillist"></a>

```json
[
  {
    "Name": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "SnsTopicName": {},
    "SnsTopicARN": {},
    "IncludeGlobalServiceEvents": {},
    "IsMultiRegionTrail": {},
    "HomeRegion": {},
    "TrailARN": {},
    "LogFileValidationEnabled": {},
    "CloudWatchLogsLogGroupArn": {},
    "CloudWatchLogsRoleArn": {},
    "KmsKeyId": {},
    "HasCustomEventSelectors": {},
    "HasInsightSelectors": {},
    "IsOrganizationTrail": {}
  }
]
```

<h2 id="tocS_DestinationType">DestinationType</h2>
<!-- backwards compatibility -->
<a id="schemadestinationtype"></a>
<a id="schema_DestinationType"></a>
<a id="tocSdestinationtype"></a>
<a id="tocsdestinationtype"></a>

```json
"EVENT_DATA_STORE"
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "Type": {},
  "Location": {}
}
```

Contains information about the destination receiving events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  {
    "ResourceType": {},
    "ResourceName": {}
  }
]
```

A list of resources referenced by the event returned.

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "EventId": {},
  "EventName": {},
  "ReadOnly": {},
  "AccessKeyId": {},
  "EventTime": {},
  "EventSource": {},
  "Username": {},
  "Resources": {},
  "CloudTrailEvent": {}
}
```

Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventId|object|false|none|none|
|EventName|object|false|none|none|
|ReadOnly|object|false|none|none|
|AccessKeyId|object|false|none|none|
|EventTime|object|false|none|none|
|EventSource|object|false|none|none|
|Username|object|false|none|none|
|Resources|object|false|none|none|
|CloudTrailEvent|object|false|none|none|

<h2 id="tocS_EventCategory">EventCategory</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategory"></a>
<a id="schema_EventCategory"></a>
<a id="tocSeventcategory"></a>
<a id="tocseventcategory"></a>

```json
"insight"
```

<h2 id="tocS_EventDataStore">EventDataStore</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastore"></a>
<a id="schema_EventDataStore"></a>
<a id="tocSeventdatastore"></a>
<a id="tocseventdatastore"></a>

```json
{
  "EventDataStoreArn": {},
  "Name": {},
  "TerminationProtectionEnabled": {},
  "Status": {},
  "AdvancedEventSelectors": {},
  "MultiRegionEnabled": {},
  "OrganizationEnabled": {},
  "RetentionPeriod": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2557 days (about three months to up to seven years). To select events for an event data store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDataStoreArn|object|false|none|none|
|Name|object|false|none|none|
|TerminationProtectionEnabled|object|false|none|none|
|Status|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|
|MultiRegionEnabled|object|false|none|none|
|OrganizationEnabled|object|false|none|none|
|RetentionPeriod|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_EventDataStores">EventDataStores</h2>
<!-- backwards compatibility -->
<a id="schemaeventdatastores"></a>
<a id="schema_EventDataStores"></a>
<a id="tocSeventdatastores"></a>
<a id="tocseventdatastores"></a>

```json
[
  {
    "EventDataStoreArn": {},
    "Name": {},
    "TerminationProtectionEnabled": {},
    "Status": {},
    "AdvancedEventSelectors": {},
    "MultiRegionEnabled": {},
    "OrganizationEnabled": {},
    "RetentionPeriod": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ReadWriteType">ReadWriteType</h2>
<!-- backwards compatibility -->
<a id="schemareadwritetype"></a>
<a id="schema_ReadWriteType"></a>
<a id="tocSreadwritetype"></a>
<a id="tocsreadwritetype"></a>

```json
"ReadOnly"
```

<h2 id="tocS_ExcludeManagementEventSources">ExcludeManagementEventSources</h2>
<!-- backwards compatibility -->
<a id="schemaexcludemanagementeventsources"></a>
<a id="schema_ExcludeManagementEventSources"></a>
<a id="tocSexcludemanagementeventsources"></a>
<a id="tocsexcludemanagementeventsources"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventSelector">EventSelector</h2>
<!-- backwards compatibility -->
<a id="schemaeventselector"></a>
<a id="schema_EventSelector"></a>
<a id="tocSeventselector"></a>
<a id="tocseventselector"></a>

```json
{
  "ReadWriteType": {},
  "IncludeManagementEvents": {},
  "DataResources": {},
  "ExcludeManagementEventSources": {}
}
```

<p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReadWriteType|object|false|none|none|
|IncludeManagementEvents|object|false|none|none|
|DataResources|object|false|none|none|
|ExcludeManagementEventSources|object|false|none|none|

<h2 id="tocS_EventSelectors">EventSelectors</h2>
<!-- backwards compatibility -->
<a id="schemaeventselectors"></a>
<a id="schema_EventSelectors"></a>
<a id="tocSeventselectors"></a>
<a id="tocseventselectors"></a>

```json
[
  {
    "ReadWriteType": {},
    "IncludeManagementEvents": {},
    "DataResources": {},
    "ExcludeManagementEventSources": {}
  }
]
```

<h2 id="tocS_EventsList">EventsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventslist"></a>
<a id="schema_EventsList"></a>
<a id="tocSeventslist"></a>
<a id="tocseventslist"></a>

```json
[
  {
    "EventId": {},
    "EventName": {},
    "ReadOnly": {},
    "AccessKeyId": {},
    "EventTime": {},
    "EventSource": {},
    "Username": {},
    "Resources": {},
    "CloudTrailEvent": {}
  }
]
```

<h2 id="tocS_SourceConfig">SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfig"></a>
<a id="schema_SourceConfig"></a>
<a id="tocSsourceconfig"></a>
<a id="tocssourceconfig"></a>

```json
{
  "ApplyToAllRegions": {},
  "AdvancedEventSelectors": {}
}
```

 Contains configuration information about the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplyToAllRegions|object|false|none|none|
|AdvancedEventSelectors|object|false|none|none|

<h2 id="tocS_IngestionStatus">IngestionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaingestionstatus"></a>
<a id="schema_IngestionStatus"></a>
<a id="tocSingestionstatus"></a>
<a id="tocsingestionstatus"></a>

```json
{
  "LatestIngestionSuccessTime": {},
  "LatestIngestionSuccessEventID": {},
  "LatestIngestionErrorCode": {},
  "LatestIngestionAttemptTime": {},
  "LatestIngestionAttemptEventID": {}
}
```

A table showing information about the most recent successful and failed attempts to ingest events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LatestIngestionSuccessTime|object|false|none|none|
|LatestIngestionSuccessEventID|object|false|none|none|
|LatestIngestionErrorCode|object|false|none|none|
|LatestIngestionAttemptTime|object|false|none|none|
|LatestIngestionAttemptEventID|object|false|none|none|

<h2 id="tocS_ImportDestinations">ImportDestinations</h2>
<!-- backwards compatibility -->
<a id="schemaimportdestinations"></a>
<a id="schema_ImportDestinations"></a>
<a id="tocSimportdestinations"></a>
<a id="tocsimportdestinations"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImportSource">ImportSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportsource"></a>
<a id="schema_ImportSource"></a>
<a id="tocSimportsource"></a>
<a id="tocsimportsource"></a>

```json
{
  "S3": {
    "S3LocationUri": {},
    "S3BucketRegion": {},
    "S3BucketAccessRoleArn": {}
  }
}
```

 The import source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3|object|true|none|none|

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
"INITIALIZING"
```

<h2 id="tocS_ImportStatistics">ImportStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatistics"></a>
<a id="schema_ImportStatistics"></a>
<a id="tocSimportstatistics"></a>
<a id="tocsimportstatistics"></a>

```json
{
  "PrefixesFound": {},
  "PrefixesCompleted": {},
  "FilesCompleted": {},
  "EventsCompleted": {},
  "FailedEntries": {}
}
```

 Provides statistics for the specified <code>ImportID</code>. CloudTrail does not update import statistics in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrefixesFound|object|false|none|none|
|PrefixesCompleted|object|false|none|none|
|FilesCompleted|object|false|none|none|
|EventsCompleted|object|false|none|none|
|FailedEntries|object|false|none|none|

<h2 id="tocS_InsightSelectors">InsightSelectors</h2>
<!-- backwards compatibility -->
<a id="schemainsightselectors"></a>
<a id="schema_InsightSelectors"></a>
<a id="tocSinsightselectors"></a>
<a id="tocsinsightselectors"></a>

```json
[
  {
    "InsightType": {}
  }
]
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MaxQueryResults">MaxQueryResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxqueryresults"></a>
<a id="schema_MaxQueryResults"></a>
<a id="tocSmaxqueryresults"></a>
<a id="tocsmaxqueryresults"></a>

```json
1
```

<h2 id="tocS_QueryStatistics">QueryStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaquerystatistics"></a>
<a id="schema_QueryStatistics"></a>
<a id="tocSquerystatistics"></a>
<a id="tocsquerystatistics"></a>

```json
{
  "ResultsCount": {},
  "TotalResultsCount": {},
  "BytesScanned": {}
}
```

Metadata about a query, such as the number of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultsCount|object|false|none|none|
|TotalResultsCount|object|false|none|none|
|BytesScanned|object|false|none|none|

<h2 id="tocS_QueryResultRows">QueryResultRows</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultrows"></a>
<a id="schema_QueryResultRows"></a>
<a id="tocSqueryresultrows"></a>
<a id="tocsqueryresultrows"></a>

```json
[
  [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
]
```

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
"string"
```

<h2 id="tocS_Trail">Trail</h2>
<!-- backwards compatibility -->
<a id="schematrail"></a>
<a id="schema_Trail"></a>
<a id="tocStrail"></a>
<a id="tocstrail"></a>

```json
{
  "Name": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "SnsTopicName": {},
  "SnsTopicARN": {},
  "IncludeGlobalServiceEvents": {},
  "IsMultiRegionTrail": {},
  "HomeRegion": {},
  "TrailARN": {},
  "LogFileValidationEnabled": {},
  "CloudWatchLogsLogGroupArn": {},
  "CloudWatchLogsRoleArn": {},
  "KmsKeyId": {},
  "HasCustomEventSelectors": {},
  "HasInsightSelectors": {},
  "IsOrganizationTrail": {}
}
```

The settings for a trail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|SnsTopicName|object|false|none|none|
|SnsTopicARN|object|false|none|none|
|IncludeGlobalServiceEvents|object|false|none|none|
|IsMultiRegionTrail|object|false|none|none|
|HomeRegion|object|false|none|none|
|TrailARN|object|false|none|none|
|LogFileValidationEnabled|object|false|none|none|
|CloudWatchLogsLogGroupArn|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|KmsKeyId|object|false|none|none|
|HasCustomEventSelectors|object|false|none|none|
|HasInsightSelectors|object|false|none|none|
|IsOrganizationTrail|object|false|none|none|

<h2 id="tocS_ImportFailureListItem">ImportFailureListItem</h2>
<!-- backwards compatibility -->
<a id="schemaimportfailurelistitem"></a>
<a id="schema_ImportFailureListItem"></a>
<a id="tocSimportfailurelistitem"></a>
<a id="tocsimportfailurelistitem"></a>

```json
{
  "Location": {},
  "Status": {},
  "ErrorType": {},
  "ErrorMessage": {},
  "LastUpdatedTime": {}
}
```

 Provides information about an import failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|
|Status|object|false|none|none|
|ErrorType|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_ImportFailureList">ImportFailureList</h2>
<!-- backwards compatibility -->
<a id="schemaimportfailurelist"></a>
<a id="schema_ImportFailureList"></a>
<a id="tocSimportfailurelist"></a>
<a id="tocsimportfailurelist"></a>

```json
[
  {
    "Location": {},
    "Status": {},
    "ErrorType": {},
    "ErrorMessage": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_ImportFailureStatus">ImportFailureStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportfailurestatus"></a>
<a id="schema_ImportFailureStatus"></a>
<a id="tocSimportfailurestatus"></a>
<a id="tocsimportfailurestatus"></a>

```json
"FAILED"
```

<h2 id="tocS_S3ImportSource">S3ImportSource</h2>
<!-- backwards compatibility -->
<a id="schemas3importsource"></a>
<a id="schema_S3ImportSource"></a>
<a id="tocSs3importsource"></a>
<a id="tocss3importsource"></a>

```json
{
  "S3LocationUri": {},
  "S3BucketRegion": {},
  "S3BucketAccessRoleArn": {}
}
```

 The settings for the source S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3LocationUri|object|true|none|none|
|S3BucketRegion|object|true|none|none|
|S3BucketAccessRoleArn|object|true|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ImportsListItem">ImportsListItem</h2>
<!-- backwards compatibility -->
<a id="schemaimportslistitem"></a>
<a id="schema_ImportsListItem"></a>
<a id="tocSimportslistitem"></a>
<a id="tocsimportslistitem"></a>

```json
{
  "ImportId": {},
  "ImportStatus": {},
  "Destinations": {},
  "CreatedTimestamp": {},
  "UpdatedTimestamp": {}
}
```

 Contains information about an import that was returned by a lookup request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportId|object|false|none|none|
|ImportStatus|object|false|none|none|
|Destinations|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|UpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ImportsList">ImportsList</h2>
<!-- backwards compatibility -->
<a id="schemaimportslist"></a>
<a id="schema_ImportsList"></a>
<a id="tocSimportslist"></a>
<a id="tocsimportslist"></a>

```json
[
  {
    "ImportId": {},
    "ImportStatus": {},
    "Destinations": {},
    "CreatedTimestamp": {},
    "UpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_InsightType">InsightType</h2>
<!-- backwards compatibility -->
<a id="schemainsighttype"></a>
<a id="schema_InsightType"></a>
<a id="tocSinsighttype"></a>
<a id="tocsinsighttype"></a>

```json
"ApiCallRateInsight"
```

<h2 id="tocS_InsightSelector">InsightSelector</h2>
<!-- backwards compatibility -->
<a id="schemainsightselector"></a>
<a id="schema_InsightSelector"></a>
<a id="tocSinsightselector"></a>
<a id="tocsinsightselector"></a>

```json
{
  "InsightType": {}
}
```

A JSON string that contains a list of insight types that are logged on a trail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsightType|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ListChannelsMaxResultsCount">ListChannelsMaxResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsmaxresultscount"></a>
<a id="schema_ListChannelsMaxResultsCount"></a>
<a id="tocSlistchannelsmaxresultscount"></a>
<a id="tocslistchannelsmaxresultscount"></a>

```json
1
```

<h2 id="tocS_ListEventDataStoresMaxResultsCount">ListEventDataStoresMaxResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemalisteventdatastoresmaxresultscount"></a>
<a id="schema_ListEventDataStoresMaxResultsCount"></a>
<a id="tocSlisteventdatastoresmaxresultscount"></a>
<a id="tocslisteventdatastoresmaxresultscount"></a>

```json
1
```

<h2 id="tocS_ListImportFailuresMaxResultsCount">ListImportFailuresMaxResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemalistimportfailuresmaxresultscount"></a>
<a id="schema_ListImportFailuresMaxResultsCount"></a>
<a id="tocSlistimportfailuresmaxresultscount"></a>
<a id="tocslistimportfailuresmaxresultscount"></a>

```json
1
```

<h2 id="tocS_ListImportsMaxResultsCount">ListImportsMaxResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemalistimportsmaxresultscount"></a>
<a id="schema_ListImportsMaxResultsCount"></a>
<a id="tocSlistimportsmaxresultscount"></a>
<a id="tocslistimportsmaxresultscount"></a>

```json
1
```

<h2 id="tocS_PublicKeyList">PublicKeyList</h2>
<!-- backwards compatibility -->
<a id="schemapublickeylist"></a>
<a id="schema_PublicKeyList"></a>
<a id="tocSpublickeylist"></a>
<a id="tocspublickeylist"></a>

```json
[
  {
    "Value": {},
    "ValidityStartTime": {},
    "ValidityEndTime": {},
    "Fingerprint": {}
  }
]
```

<h2 id="tocS_ListQueriesMaxResultsCount">ListQueriesMaxResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemalistqueriesmaxresultscount"></a>
<a id="schema_ListQueriesMaxResultsCount"></a>
<a id="tocSlistqueriesmaxresultscount"></a>
<a id="tocslistqueriesmaxresultscount"></a>

```json
1
```

<h2 id="tocS_Queries">Queries</h2>
<!-- backwards compatibility -->
<a id="schemaqueries"></a>
<a id="schema_Queries"></a>
<a id="tocSqueries"></a>
<a id="tocsqueries"></a>

```json
[
  {
    "QueryId": {},
    "QueryStatus": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_ResourceIdList">ResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidlist"></a>
<a id="schema_ResourceIdList"></a>
<a id="tocSresourceidlist"></a>
<a id="tocsresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceTagList">ResourceTagList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetaglist"></a>
<a id="schema_ResourceTagList"></a>
<a id="tocSresourcetaglist"></a>
<a id="tocsresourcetaglist"></a>

```json
[
  {
    "ResourceId": {},
    "TagsList": {}
  }
]
```

<h2 id="tocS_Trails">Trails</h2>
<!-- backwards compatibility -->
<a id="schematrails"></a>
<a id="schema_Trails"></a>
<a id="tocStrails"></a>
<a id="tocstrails"></a>

```json
[
  {
    "TrailARN": {},
    "Name": {},
    "HomeRegion": {}
  }
]
```

<h2 id="tocS_LookupAttributeKey">LookupAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemalookupattributekey"></a>
<a id="schema_LookupAttributeKey"></a>
<a id="tocSlookupattributekey"></a>
<a id="tocslookupattributekey"></a>

```json
"EventId"
```

<h2 id="tocS_LookupAttributeValue">LookupAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemalookupattributevalue"></a>
<a id="schema_LookupAttributeValue"></a>
<a id="tocSlookupattributevalue"></a>
<a id="tocslookupattributevalue"></a>

```json
"string"
```

<h2 id="tocS_LookupAttribute">LookupAttribute</h2>
<!-- backwards compatibility -->
<a id="schemalookupattribute"></a>
<a id="schema_LookupAttribute"></a>
<a id="tocSlookupattribute"></a>
<a id="tocslookupattribute"></a>

```json
{
  "AttributeKey": {},
  "AttributeValue": {}
}
```

Specifies an attribute and value that filter the events returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeKey|object|true|none|none|
|AttributeValue|object|true|none|none|

<h2 id="tocS_LookupAttributesList">LookupAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemalookupattributeslist"></a>
<a id="schema_LookupAttributesList"></a>
<a id="tocSlookupattributeslist"></a>
<a id="tocslookupattributeslist"></a>

```json
[
  {
    "AttributeKey": {},
    "AttributeValue": {}
  }
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_OperatorValue">OperatorValue</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorvalue"></a>
<a id="schema_OperatorValue"></a>
<a id="tocSoperatorvalue"></a>
<a id="tocsoperatorvalue"></a>

```json
"string"
```

<h2 id="tocS_PublicKey">PublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapublickey"></a>
<a id="schema_PublicKey"></a>
<a id="tocSpublickey"></a>
<a id="tocspublickey"></a>

```json
{
  "Value": {},
  "ValidityStartTime": {},
  "ValidityEndTime": {},
  "Fingerprint": {}
}
```

Contains information about a returned public key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|ValidityStartTime|object|false|none|none|
|ValidityEndTime|object|false|none|none|
|Fingerprint|object|false|none|none|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "QueryId": {},
  "QueryStatus": {},
  "CreationTime": {}
}
```

A SQL string of criteria about events that you want to collect in an event data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|false|none|none|
|QueryStatus|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_QueryResultValue">QueryResultValue</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultvalue"></a>
<a id="schema_QueryResultValue"></a>
<a id="tocSqueryresultvalue"></a>
<a id="tocsqueryresultvalue"></a>

```json
"string"
```

<h2 id="tocS_QueryResultColumn">QueryResultColumn</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultcolumn"></a>
<a id="schema_QueryResultColumn"></a>
<a id="tocSqueryresultcolumn"></a>
<a id="tocsqueryresultcolumn"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[QueryResultValue](#schemaqueryresultvalue)|false|none|none|

<h2 id="tocS_QueryResultKey">QueryResultKey</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultkey"></a>
<a id="schema_QueryResultKey"></a>
<a id="tocSqueryresultkey"></a>
<a id="tocsqueryresultkey"></a>

```json
"string"
```

<h2 id="tocS_QueryResultRow">QueryResultRow</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultrow"></a>
<a id="schema_QueryResultRow"></a>
<a id="tocSqueryresultrow"></a>
<a id="tocsqueryresultrow"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "ResourceType": {},
  "ResourceName": {}
}
```

Specifies the type and name of a resource referenced by an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_ResourceTag">ResourceTag</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetag"></a>
<a id="schema_ResourceTag"></a>
<a id="tocSresourcetag"></a>
<a id="tocsresourcetag"></a>

```json
{
  "ResourceId": {},
  "TagsList": {}
}
```

A resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|TagsList|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, or channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TrailInfo">TrailInfo</h2>
<!-- backwards compatibility -->
<a id="schematrailinfo"></a>
<a id="schema_TrailInfo"></a>
<a id="tocStrailinfo"></a>
<a id="tocstrailinfo"></a>

```json
{
  "TrailARN": {},
  "Name": {},
  "HomeRegion": {}
}
```

Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrailARN|object|false|none|none|
|Name|object|false|none|none|
|HomeRegion|object|false|none|none|
