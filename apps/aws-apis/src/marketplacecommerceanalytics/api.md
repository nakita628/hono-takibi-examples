<h1 id="aws-marketplace-commerce-analytics">AWS Marketplace Commerce Analytics v2015-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides AWS Marketplace business intelligence data on-demand.

Base URLs:

* <a href="http://marketplacecommerceanalytics.us-east-1.amazonaws.com">http://marketplacecommerceanalytics.us-east-1.amazonaws.com</a> - The AWS Marketplace Commerce Analytics multi-region endpoint

* <a href="https://marketplacecommerceanalytics.us-east-1.amazonaws.com">https://marketplacecommerceanalytics.us-east-1.amazonaws.com</a> - The AWS Marketplace Commerce Analytics multi-region endpoint

* <a href="http://marketplacecommerceanalytics.cn-north-1.amazonaws.com.cn">http://marketplacecommerceanalytics.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Commerce Analytics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://marketplacecommerceanalytics.cn-north-1.amazonaws.com.cn">https://marketplacecommerceanalytics.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Commerce Analytics endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/marketplacecommerceanalytics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-marketplace-commerce-analytics-default">Default</h1>

## GenerateDataSet

<a id="opIdGenerateDataSet"></a>

> Code samples

```bash
curl 'https://marketplacecommerceanalytics.us-east-1.amazonaws.com/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MarketplaceCommerceAnalytics20150701.GenerateDataSet' \
  -d '{
    "dataSetType": {},
    "dataSetPublicationDate": {},
    "roleNameArn": {},
    "destinationS3BucketName": {},
    "destinationS3Prefix": {},
    "snsTopicArn": {},
    "customerDefinedValues": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet`

Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

> Body parameter

```json
{
  "dataSetType": {},
  "dataSetPublicationDate": {},
  "roleNameArn": {},
  "destinationS3BucketName": {},
  "destinationS3Prefix": {},
  "snsTopicArn": {},
  "customerDefinedValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="generatedataset-parameters">Parameters</h3>

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
|body|body|[GenerateDataSetRequest](#schemageneratedatasetrequest)|true|none|
|» dataSetType|body|object|true|none|
|» dataSetPublicationDate|body|object|true|none|
|» roleNameArn|body|object|true|none|
|» destinationS3BucketName|body|object|true|none|
|» destinationS3Prefix|body|object|false|none|
|» snsTopicArn|body|object|true|none|
|» customerDefinedValues|body|object|false|none|
|» » **additionalProperties**|body|[OptionalValue](#schemaoptionalvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MarketplaceCommerceAnalytics20150701.GenerateDataSet|

> Example responses

> 200 Response

```json
{
  "dataSetRequestId": {}
}
```

> 480 Response

```json
null
```

<h3 id="generatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateDataSetResult](#schemageneratedatasetresult)|
|480|480|MarketplaceCommerceAnalyticsException|[MarketplaceCommerceAnalyticsException](#schemamarketplacecommerceanalyticsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSupportDataExport

<a id="opIdStartSupportDataExport"></a>

> Code samples

```bash
curl 'https://marketplacecommerceanalytics.us-east-1.amazonaws.com/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MarketplaceCommerceAnalytics20150701.StartSupportDataExport' \
  -d '{
    "dataSetType": {},
    "fromDate": {},
    "roleNameArn": {},
    "destinationS3BucketName": {},
    "destinationS3Prefix": {},
    "snsTopicArn": {},
    "customerDefinedValues": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport`

Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

> Body parameter

```json
{
  "dataSetType": {},
  "fromDate": {},
  "roleNameArn": {},
  "destinationS3BucketName": {},
  "destinationS3Prefix": {},
  "snsTopicArn": {},
  "customerDefinedValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startsupportdataexport-parameters">Parameters</h3>

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
|body|body|[StartSupportDataExportRequest](#schemastartsupportdataexportrequest)|true|none|
|» dataSetType|body|object|true|none|
|» fromDate|body|object|true|none|
|» roleNameArn|body|object|true|none|
|» destinationS3BucketName|body|object|true|none|
|» destinationS3Prefix|body|object|false|none|
|» snsTopicArn|body|object|true|none|
|» customerDefinedValues|body|object|false|none|
|» » **additionalProperties**|body|[OptionalValue](#schemaoptionalvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MarketplaceCommerceAnalytics20150701.StartSupportDataExport|

> Example responses

> 200 Response

```json
{
  "dataSetRequestId": {}
}
```

> 480 Response

```json
null
```

<h3 id="startsupportdataexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSupportDataExportResult](#schemastartsupportdataexportresult)|
|480|480|MarketplaceCommerceAnalyticsException|[MarketplaceCommerceAnalyticsException](#schemamarketplacecommerceanalyticsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GenerateDataSetResult">GenerateDataSetResult</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatasetresult"></a>
<a id="schema_GenerateDataSetResult"></a>
<a id="tocSgeneratedatasetresult"></a>
<a id="tocsgeneratedatasetresult"></a>

```json
{
  "dataSetRequestId": {}
}
```

Container for the result of the GenerateDataSet operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSetRequestId|object|false|none|none|

<h2 id="tocS_GenerateDataSetRequest">GenerateDataSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratedatasetrequest"></a>
<a id="schema_GenerateDataSetRequest"></a>
<a id="tocSgeneratedatasetrequest"></a>
<a id="tocsgeneratedatasetrequest"></a>

```json
{
  "dataSetType": {},
  "dataSetPublicationDate": {},
  "roleNameArn": {},
  "destinationS3BucketName": {},
  "destinationS3Prefix": {},
  "snsTopicArn": {},
  "customerDefinedValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

Container for the parameters to the GenerateDataSet operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSetType|object|true|none|none|
|dataSetPublicationDate|object|true|none|none|
|roleNameArn|object|true|none|none|
|destinationS3BucketName|object|true|none|none|
|destinationS3Prefix|object|false|none|none|
|snsTopicArn|object|true|none|none|
|customerDefinedValues|object|false|none|none|

<h2 id="tocS_MarketplaceCommerceAnalyticsException">MarketplaceCommerceAnalyticsException</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacecommerceanalyticsexception"></a>
<a id="schema_MarketplaceCommerceAnalyticsException"></a>
<a id="tocSmarketplacecommerceanalyticsexception"></a>
<a id="tocsmarketplacecommerceanalyticsexception"></a>

```json
null
```

<h2 id="tocS_StartSupportDataExportResult">StartSupportDataExportResult</h2>
<!-- backwards compatibility -->
<a id="schemastartsupportdataexportresult"></a>
<a id="schema_StartSupportDataExportResult"></a>
<a id="tocSstartsupportdataexportresult"></a>
<a id="tocsstartsupportdataexportresult"></a>

```json
{
  "dataSetRequestId": {}
}
```

Container for the result of the StartSupportDataExport operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSetRequestId|object|false|none|none|

<h2 id="tocS_StartSupportDataExportRequest">StartSupportDataExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsupportdataexportrequest"></a>
<a id="schema_StartSupportDataExportRequest"></a>
<a id="tocSstartsupportdataexportrequest"></a>
<a id="tocsstartsupportdataexportrequest"></a>

```json
{
  "dataSetType": {},
  "fromDate": {},
  "roleNameArn": {},
  "destinationS3BucketName": {},
  "destinationS3Prefix": {},
  "snsTopicArn": {},
  "customerDefinedValues": {
    "property1": "string",
    "property2": "string"
  }
}
```

Container for the parameters to the StartSupportDataExport operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSetType|object|true|none|none|
|fromDate|object|true|none|none|
|roleNameArn|object|true|none|none|
|destinationS3BucketName|object|true|none|none|
|destinationS3Prefix|object|false|none|none|
|snsTopicArn|object|true|none|none|
|customerDefinedValues|object|false|none|none|

<h2 id="tocS_OptionalValue">OptionalValue</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalvalue"></a>
<a id="schema_OptionalValue"></a>
<a id="tocSoptionalvalue"></a>
<a id="tocsoptionalvalue"></a>

```json
"string"
```

<h2 id="tocS_CustomerDefinedValues">CustomerDefinedValues</h2>
<!-- backwards compatibility -->
<a id="schemacustomerdefinedvalues"></a>
<a id="schema_CustomerDefinedValues"></a>
<a id="tocScustomerdefinedvalues"></a>
<a id="tocscustomerdefinedvalues"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OptionalValue](#schemaoptionalvalue)|false|none|none|

<h2 id="tocS_DataSetPublicationDate">DataSetPublicationDate</h2>
<!-- backwards compatibility -->
<a id="schemadatasetpublicationdate"></a>
<a id="schema_DataSetPublicationDate"></a>
<a id="tocSdatasetpublicationdate"></a>
<a id="tocsdatasetpublicationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DataSetRequestId">DataSetRequestId</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrequestid"></a>
<a id="schema_DataSetRequestId"></a>
<a id="tocSdatasetrequestid"></a>
<a id="tocsdatasetrequestid"></a>

```json
"string"
```

<h2 id="tocS_DataSetType">DataSetType</h2>
<!-- backwards compatibility -->
<a id="schemadatasettype"></a>
<a id="schema_DataSetType"></a>
<a id="tocSdatasettype"></a>
<a id="tocsdatasettype"></a>

```json
"customer_subscriber_hourly_monthly_subscriptions"
```

<h2 id="tocS_DestinationS3BucketName">DestinationS3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemadestinations3bucketname"></a>
<a id="schema_DestinationS3BucketName"></a>
<a id="tocSdestinations3bucketname"></a>
<a id="tocsdestinations3bucketname"></a>

```json
"string"
```

<h2 id="tocS_DestinationS3Prefix">DestinationS3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemadestinations3prefix"></a>
<a id="schema_DestinationS3Prefix"></a>
<a id="tocSdestinations3prefix"></a>
<a id="tocsdestinations3prefix"></a>

```json
"string"
```

<h2 id="tocS_FromDate">FromDate</h2>
<!-- backwards compatibility -->
<a id="schemafromdate"></a>
<a id="schema_FromDate"></a>
<a id="tocSfromdate"></a>
<a id="tocsfromdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RoleNameArn">RoleNameArn</h2>
<!-- backwards compatibility -->
<a id="schemarolenamearn"></a>
<a id="schema_RoleNameArn"></a>
<a id="tocSrolenamearn"></a>
<a id="tocsrolenamearn"></a>

```json
"string"
```

<h2 id="tocS_SnsTopicArn">SnsTopicArn</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarn"></a>
<a id="schema_SnsTopicArn"></a>
<a id="tocSsnstopicarn"></a>
<a id="tocssnstopicarn"></a>

```json
"string"
```

<h2 id="tocS_OptionalKey">OptionalKey</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalkey"></a>
<a id="schema_OptionalKey"></a>
<a id="tocSoptionalkey"></a>
<a id="tocsoptionalkey"></a>

```json
"string"
```

<h2 id="tocS_SupportDataSetType">SupportDataSetType</h2>
<!-- backwards compatibility -->
<a id="schemasupportdatasettype"></a>
<a id="schema_SupportDataSetType"></a>
<a id="tocSsupportdatasettype"></a>
<a id="tocssupportdatasettype"></a>

```json
"customer_support_contacts_data"
```
