<h1 id="aws-iot-sitewise">AWS IoT SiteWise v2019-12-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.

Base URLs:

* <a href="http://iotsitewise.us-east-1.amazonaws.com">http://iotsitewise.us-east-1.amazonaws.com</a> - The AWS IoT SiteWise multi-region endpoint

* <a href="https://iotsitewise.us-east-1.amazonaws.com">https://iotsitewise.us-east-1.amazonaws.com</a> - The AWS IoT SiteWise multi-region endpoint

* <a href="http://iotsitewise.cn-north-1.amazonaws.com.cn">http://iotsitewise.cn-north-1.amazonaws.com.cn</a> - The AWS IoT SiteWise endpoint for China (Beijing) and China (Ningxia)

* <a href="https://iotsitewise.cn-north-1.amazonaws.com.cn">https://iotsitewise.cn-north-1.amazonaws.com.cn</a> - The AWS IoT SiteWise endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotsitewise/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-sitewise-default">Default</h1>

## AssociateAssets

<a id="opIdAssociateAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hierarchyId": "stringstringstringstringstringstring",
    "childAssetId": "stringstringstringstringstringstring",
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /assets/{assetId}/associate`

Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "hierarchyId": "stringstringstringstringstringstring",
  "childAssetId": "stringstringstringstringstringstring",
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="associateassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the parent asset.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» hierarchyId|body|string|true|The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.|
|» childAssetId|body|string|true|The ID of the child asset to be associated.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

> 486 Response

```json
null
```

<h3 id="associateassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateTimeSeriesToAssetProperty

<a id="opIdAssociateTimeSeriesToAssetProperty"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/timeseries/associate/#alias&assetId&propertyId?alias=string&assetId=stringstringstringstringstringstring&propertyId=stringstringstringstringstringstring' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /timeseries/associate/#alias&assetId&propertyId`

Associates a time series (data stream) with an asset property.

> Body parameter

```json
{
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="associatetimeseriestoassetproperty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|true|The alias that identifies the time series.|
|assetId|query|string|true|The ID of the asset in which the asset property was created.|
|propertyId|query|string|true|The ID of the asset property.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="associatetimeseriestoassetproperty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateProjectAssets

<a id="opIdBatchAssociateProjectAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring/assets/associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetIds": [
      "stringstringstringstringstringstring"
    ],
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /projects/{projectId}/assets/associate`

Associates a group (batch) of assets with an IoT SiteWise Monitor project.

> Body parameter

```json
{
  "assetIds": [
    "stringstringstringstringstringstring"
  ],
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="batchassociateprojectassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project to which to associate the assets.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assetIds|body|[[ID](#schemaid)]|true|The IDs of the assets to be associated to the project.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchassociateprojectassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateProjectAssetsResponse](#schemabatchassociateprojectassetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateProjectAssets

<a id="opIdBatchDisassociateProjectAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring/assets/disassociate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetIds": [
      "stringstringstringstringstringstring"
    ],
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /projects/{projectId}/assets/disassociate`

Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.

> Body parameter

```json
{
  "assetIds": [
    "stringstringstringstringstringstring"
  ],
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="batchdisassociateprojectassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project from which to disassociate the assets.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assetIds|body|[[ID](#schemaid)]|true|The IDs of the assets to be disassociated from the project.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchdisassociateprojectassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateProjectAssetsResponse](#schemabatchdisassociateprojectassetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetAssetPropertyAggregates

<a id="opIdBatchGetAssetPropertyAggregates"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties/batch/aggregates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "entryId": {},
        "assetId": {},
        "propertyId": {},
        "propertyAlias": {},
        "aggregateTypes": {},
        "resolution": {},
        "startDate": {},
        "endDate": {},
        "qualities": {},
        "timeOrdering": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /properties/batch/aggregates`

Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "entries": [
    {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {},
      "aggregateTypes": {},
      "resolution": {},
      "startDate": {},
      "endDate": {},
      "qualities": {},
      "timeOrdering": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="batchgetassetpropertyaggregates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entries|body|[[BatchGetAssetPropertyAggregatesEntry](#schemabatchgetassetpropertyaggregatesentry)]|true|The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.|
|» nextToken|body|string|false|The token to be used for the next set of paginated results.|
|» maxResults|body|integer|false|<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
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

<h3 id="batchgetassetpropertyaggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetAssetPropertyAggregatesResponse](#schemabatchgetassetpropertyaggregatesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetAssetPropertyValue

<a id="opIdBatchGetAssetPropertyValue"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties/batch/latest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "entryId": {},
        "assetId": {},
        "propertyId": {},
        "propertyAlias": {}
      }
    ],
    "nextToken": "string"
  }'
```

`POST /properties/batch/latest`

Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "entries": [
    {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {}
    }
  ],
  "nextToken": "string"
}
```

<h3 id="batchgetassetpropertyvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entries|body|[[BatchGetAssetPropertyValueEntry](#schemabatchgetassetpropertyvalueentry)]|true|The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.|
|» nextToken|body|string|false|The token to be used for the next set of paginated results.|

> Example responses

> 200 Response

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
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

<h3 id="batchgetassetpropertyvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetAssetPropertyValueResponse](#schemabatchgetassetpropertyvalueresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetAssetPropertyValueHistory

<a id="opIdBatchGetAssetPropertyValueHistory"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties/batch/history \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "entryId": {},
        "assetId": {},
        "propertyId": {},
        "propertyAlias": {},
        "startDate": {},
        "endDate": {},
        "qualities": {},
        "timeOrdering": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /properties/batch/history`

Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "entries": [
    {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {},
      "startDate": {},
      "endDate": {},
      "qualities": {},
      "timeOrdering": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="batchgetassetpropertyvaluehistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» entries|body|[[BatchGetAssetPropertyValueHistoryEntry](#schemabatchgetassetpropertyvaluehistoryentry)]|true|The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.|
|» nextToken|body|string|false|The token to be used for the next set of paginated results.|
|» maxResults|body|integer|false|<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
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

<h3 id="batchgetassetpropertyvaluehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetAssetPropertyValueHistoryResponse](#schemabatchgetassetpropertyvaluehistoryresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchPutAssetPropertyValue

<a id="opIdBatchPutAssetPropertyValue"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "entries": [
      {
        "entryId": {},
        "assetId": {},
        "propertyId": {},
        "propertyAlias": {},
        "propertyValues": {}
      }
    ]
  }'
```

`POST /properties`

<p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>

> Body parameter

```json
{
  "entries": [
    {
      "entryId": {},
      "assetId": {},
      "propertyId": {},
      "propertyAlias": {},
      "propertyValues": {}
    }
  ]
}
```

<h3 id="batchputassetpropertyvalue-parameters">Parameters</h3>

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
|» entries|body|[[PutAssetPropertyValueEntry](#schemaputassetpropertyvalueentry)]|true|The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.|

> Example responses

> 200 Response

```json
{
  "errorEntries": {}
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

<h3 id="batchputassetpropertyvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutAssetPropertyValueResponse](#schemabatchputassetpropertyvalueresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessPolicies

<a id="opIdListAccessPolicies"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/access-policies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /access-policies`

Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).

<h3 id="listaccesspolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identityType|query|string|false|The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify <code>identityId</code>.|
|identityId|query|string|false|The ID of the identity. This parameter is required if you specify <code>USER</code> or <code>GROUP</code> for <code>identityType</code>.|
|resourceType|query|string|false|The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.|
|resourceId|query|string|false|The ID of the resource. This parameter is required if you specify <code>resourceType</code>.|
|iamArn|query|string|false|The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>. This parameter is required if you specify <code>IAM</code> for <code>identityType</code>.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
|identityType|USER|
|identityType|GROUP|
|identityType|IAM|
|resourceType|PORTAL|
|resourceType|PROJECT|

> Example responses

> 200 Response

```json
{
  "accessPolicySummaries": {},
  "nextToken": {}
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

<h3 id="listaccesspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessPoliciesResponse](#schemalistaccesspoliciesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessPolicy

<a id="opIdCreateAccessPolicy"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/access-policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accessPolicyIdentity": {
      "user": {
        "id": {}
      },
      "group": {
        "id": {}
      },
      "iamUser": {
        "arn": {}
      },
      "iamRole": {
        "arn": {}
      }
    },
    "accessPolicyResource": {
      "portal": {
        "id": {}
      },
      "project": {
        "id": {}
      }
    },
    "accessPolicyPermission": "ADMINISTRATOR",
    "clientToken": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /access-policies`

Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.

> Body parameter

```json
{
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": "ADMINISTRATOR",
  "clientToken": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createaccesspolicy-parameters">Parameters</h3>

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
|» accessPolicyIdentity|body|object|true|<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>|
|» » user|body|object|false|none|
|» » » id|body|object|true|none|
|» » group|body|object|false|none|
|» » » id|body|object|true|none|
|» » iamUser|body|object|false|none|
|» » » arn|body|object|true|none|
|» » iamRole|body|object|false|none|
|» » » arn|body|object|true|none|
|» accessPolicyResource|body|object|true|Contains an IoT SiteWise Monitor resource ID for a portal or project.|
|» » portal|body|object|false|none|
|» » » id|body|object|true|none|
|» » project|body|object|false|none|
|» » » id|body|object|true|none|
|» accessPolicyPermission|body|string|true|The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessPolicyPermission|ADMINISTRATOR|
|» accessPolicyPermission|VIEWER|

> Example responses

> 201 Response

```json
{
  "accessPolicyId": {},
  "accessPolicyArn": {}
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

<h3 id="createaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAccessPolicyResponse](#schemacreateaccesspolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssets

<a id="opIdListAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets`

<p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>

<h3 id="listassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
|assetModelId|query|string|false|The ID of the asset model by which to filter the list of assets. This parameter is required if you choose <code>ALL</code> for <code>filter</code>.|
|filter|query|string|false|<p>The filter for the requested list of assets. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul> <p>Default: <code>ALL</code> </p>|
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
|filter|ALL|
|filter|TOP_LEVEL|

> Example responses

> 200 Response

```json
{
  "assetSummaries": {},
  "nextToken": {}
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

<h3 id="listassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetsResponse](#schemalistassetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAsset

<a id="opIdCreateAsset"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetName": "string",
    "assetModelId": "stringstringstringstringstringstring",
    "clientToken": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "assetDescription": "string"
  }'
```

`POST /assets`

Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "assetName": "string",
  "assetModelId": "stringstringstringstringstringstring",
  "clientToken": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "assetDescription": "string"
}
```

<h3 id="createasset-parameters">Parameters</h3>

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
|» assetName|body|string|true|A friendly name for the asset.|
|» assetModelId|body|string|true|The ID of the asset model from which to create the asset.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» assetDescription|body|string|false|A description for the asset.|

> Example responses

> 202 Response

```json
{
  "assetId": {},
  "assetArn": {},
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

> 486 Response

```json
null
```

<h3 id="createasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateAssetResponse](#schemacreateassetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssetModels

<a id="opIdListAssetModels"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /asset-models`

Retrieves a paginated list of summaries of all asset models.

<h3 id="listassetmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "assetModelSummaries": {},
  "nextToken": {}
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

<h3 id="listassetmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetModelsResponse](#schemalistassetmodelsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssetModel

<a id="opIdCreateAssetModel"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetModelName": "string",
    "assetModelDescription": "string",
    "assetModelProperties": [
      {
        "name": {},
        "dataType": {},
        "dataTypeSpec": {},
        "unit": {},
        "type": {
          "attribute": {
            "defaultValue": {}
          },
          "measurement": {
            "processingConfig": {
              "forwardingConfig": {
                "state": {}
              }
            }
          },
          "transform": {
            "expression": {},
            "variables": {},
            "processingConfig": {
              "computeLocation": {},
              "forwardingConfig": {
                "state": {}
              }
            }
          },
          "metric": {
            "expression": {},
            "variables": {},
            "window": {
              "tumbling": {
                "interval": {},
                "offset": {}
              }
            },
            "processingConfig": {
              "computeLocation": {}
            }
          }
        }
      }
    ],
    "assetModelHierarchies": [
      {
        "name": {},
        "childAssetModelId": {}
      }
    ],
    "assetModelCompositeModels": [
      {
        "name": {},
        "description": {},
        "type": {},
        "properties": null
      }
    ],
    "clientToken": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /asset-models`

Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "assetModelName": "string",
  "assetModelDescription": "string",
  "assetModelProperties": [
    {
      "name": {},
      "dataType": {},
      "dataTypeSpec": {},
      "unit": {},
      "type": {
        "attribute": {
          "defaultValue": {}
        },
        "measurement": {
          "processingConfig": {
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "transform": {
          "expression": {},
          "variables": {},
          "processingConfig": {
            "computeLocation": {},
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "metric": {
          "expression": {},
          "variables": {},
          "window": {
            "tumbling": {
              "interval": {},
              "offset": {}
            }
          },
          "processingConfig": {
            "computeLocation": {}
          }
        }
      }
    }
  ],
  "assetModelHierarchies": [
    {
      "name": {},
      "childAssetModelId": {}
    }
  ],
  "assetModelCompositeModels": [
    {
      "name": {},
      "description": {},
      "type": {},
      "properties": null
    }
  ],
  "clientToken": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createassetmodel-parameters">Parameters</h3>

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
|» assetModelName|body|string|true|A unique, friendly name for the asset model.|
|» assetModelDescription|body|string|false|A description for the asset model.|
|» assetModelProperties|body|[[AssetModelPropertyDefinition](#schemaassetmodelpropertydefinition)]|false|<p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|» assetModelHierarchies|body|[[AssetModelHierarchyDefinition](#schemaassetmodelhierarchydefinition)]|false|<p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|» assetModelCompositeModels|body|[[AssetModelCompositeModelDefinition](#schemaassetmodelcompositemodeldefinition)]|false|The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 202 Response

```json
{
  "assetModelId": {},
  "assetModelArn": {},
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

> 486 Response

```json
null
```

<h3 id="createassetmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateAssetModelResponse](#schemacreateassetmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBulkImportJobs

<a id="opIdListBulkImportJobs"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs`

Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.

<h3 id="listbulkimportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request.|
|filter|query|string|false|You can use a filter to select the bulk import jobs that you want to retrieve.|
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
|filter|ALL|
|filter|PENDING|
|filter|RUNNING|
|filter|CANCELLED|
|filter|FAILED|
|filter|COMPLETED_WITH_FAILURES|
|filter|COMPLETED|

> Example responses

> 200 Response

```json
{
  "jobSummaries": {},
  "nextToken": {}
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

<h3 id="listbulkimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBulkImportJobsResponse](#schemalistbulkimportjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBulkImportJob

<a id="opIdCreateBulkImportJob"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobName": "string",
    "jobRoleArn": "string",
    "files": [
      {
        "bucket": {},
        "key": {},
        "versionId": {}
      }
    ],
    "errorReportLocation": {
      "bucket": {},
      "prefix": {}
    },
    "jobConfiguration": {
      "fileFormat": {
        "csv": {
          "columnNames": {}
        }
      }
    }
  }'
```

`POST /jobs`

<p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>

> Body parameter

```json
{
  "jobName": "string",
  "jobRoleArn": "string",
  "files": [
    {
      "bucket": {},
      "key": {},
      "versionId": {}
    }
  ],
  "errorReportLocation": {
    "bucket": {},
    "prefix": {}
  },
  "jobConfiguration": {
    "fileFormat": {
      "csv": {
        "columnNames": {}
      }
    }
  }
}
```

<h3 id="createbulkimportjob-parameters">Parameters</h3>

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
|» jobName|body|string|true|The unique name that helps identify the job request.|
|» jobRoleArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.|
|» files|body|[[File](#schemafile)]|true|The files in the specified Amazon S3 bucket that contain your data.|
|» errorReportLocation|body|object|true|The Amazon S3 destination where errors associated with the job creation request are saved.|
|» » bucket|body|object|false|none|
|» » prefix|body|object|false|none|
|» jobConfiguration|body|object|true|Contains the configuration information of a job, such as the file format used to save data in Amazon S3.|
|» » fileFormat|body|object|false|none|
|» » » csv|body|object|false|none|
|» » » » columnNames|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "jobId": {},
  "jobName": {},
  "jobStatus": {}
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

<h3 id="createbulkimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateBulkImportJobResponse](#schemacreatebulkimportjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDashboard

<a id="opIdCreateDashboard"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/dashboards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "projectId": "stringstringstringstringstringstring",
    "dashboardName": "string",
    "dashboardDescription": "string",
    "dashboardDefinition": "string",
    "clientToken": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /dashboards`

Creates a dashboard in an IoT SiteWise Monitor project.

> Body parameter

```json
{
  "projectId": "stringstringstringstringstringstring",
  "dashboardName": "string",
  "dashboardDescription": "string",
  "dashboardDefinition": "string",
  "clientToken": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdashboard-parameters">Parameters</h3>

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
|» projectId|body|string|true|The ID of the project in which to create the dashboard.|
|» dashboardName|body|string|true|A friendly name for the dashboard.|
|» dashboardDescription|body|string|false|A description for the dashboard.|
|» dashboardDefinition|body|string|true|The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "dashboardId": {},
  "dashboardArn": {}
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

<h3 id="createdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDashboardResponse](#schemacreatedashboardresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGateways

<a id="opIdListGateways"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /20200301/gateways`

Retrieves a paginated list of gateways.

<h3 id="listgateways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "gatewaySummaries": {},
  "nextToken": {}
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

<h3 id="listgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewaysResponse](#schemalistgatewaysresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGateway

<a id="opIdCreateGateway"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "gatewayName": "string",
    "gatewayPlatform": {
      "greengrass": {
        "groupArn": {}
      },
      "greengrassV2": {
        "coreDeviceThingName": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /20200301/gateways`

Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "gatewayName": "string",
  "gatewayPlatform": {
    "greengrass": {
      "groupArn": {}
    },
    "greengrassV2": {
      "coreDeviceThingName": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creategateway-parameters">Parameters</h3>

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
|» gatewayName|body|string|true|A unique, friendly name for the gateway.|
|» gatewayPlatform|body|object|true|Contains a gateway's platform information.|
|» » greengrass|body|object|false|none|
|» » » groupArn|body|object|true|none|
|» » greengrassV2|body|object|false|none|
|» » » coreDeviceThingName|body|object|true|none|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "gatewayId": {},
  "gatewayArn": {}
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

<h3 id="creategateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateGatewayResponse](#schemacreategatewayresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPortals

<a id="opIdListPortals"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/portals \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /portals`

Retrieves a paginated list of IoT SiteWise Monitor portals.

<h3 id="listportals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "portalSummaries": {},
  "nextToken": {}
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

<h3 id="listportals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPortalsResponse](#schemalistportalsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePortal

<a id="opIdCreatePortal"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/portals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "portalName": "string",
    "portalDescription": "string",
    "portalContactEmail": "string",
    "clientToken": "stringstringstringstringstringstring",
    "portalLogoImageFile": {
      "data": {},
      "type": {}
    },
    "roleArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "portalAuthMode": "IAM",
    "notificationSenderEmail": "string",
    "alarms": {
      "alarmRoleArn": {},
      "notificationLambdaArn": {}
    }
  }'
```

`POST /portals`

<p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>

> Body parameter

```json
{
  "portalName": "string",
  "portalDescription": "string",
  "portalContactEmail": "string",
  "clientToken": "stringstringstringstringstringstring",
  "portalLogoImageFile": {
    "data": {},
    "type": {}
  },
  "roleArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "portalAuthMode": "IAM",
  "notificationSenderEmail": "string",
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
  }
}
```

<h3 id="createportal-parameters">Parameters</h3>

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
|» portalName|body|string|true|A friendly name for the portal.|
|» portalDescription|body|string|false|A description for the portal.|
|» portalContactEmail|body|string|true|The Amazon Web Services administrator's contact email address.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» portalLogoImageFile|body|object|false|Contains an image file.|
|» » data|body|object|false|none|
|» » type|body|object|false|none|
|» roleArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» portalAuthMode|body|string|false|<p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage user permissions.</p> </li> </ul> <p>You can't change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p>|
|» notificationSenderEmail|body|string|false|<p>The email address that sends alarm notifications.</p> <important> <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email address in Amazon SES</a>.</p> </important>|
|» alarms|body|object|false|Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.|
|» » alarmRoleArn|body|object|false|none|
|» » notificationLambdaArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» portalAuthMode|IAM|
|» portalAuthMode|SSO|

> Example responses

> 202 Response

```json
{
  "portalId": {},
  "portalArn": {},
  "portalStartUrl": {},
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "ssoApplicationId": {}
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

<h3 id="createportal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreatePortalResponse](#schemacreateportalresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "portalId": "stringstringstringstringstringstring",
    "projectName": "string",
    "projectDescription": "string",
    "clientToken": "stringstringstringstringstringstring",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /projects`

<p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>

> Body parameter

```json
{
  "portalId": "stringstringstringstringstringstring",
  "projectName": "string",
  "projectDescription": "string",
  "clientToken": "stringstringstringstringstringstring",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

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
|» portalId|body|string|true|The ID of the portal in which to create the project.|
|» projectName|body|string|true|A friendly name for the project.|
|» projectDescription|body|string|false|A description for the project.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» tags|body|object|false|A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 201 Response

```json
{
  "projectId": {},
  "projectArn": {}
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

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateProjectResponse](#schemacreateprojectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccessPolicy

<a id="opIdDescribeAccessPolicy"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/access-policies/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /access-policies/{accessPolicyId}`

Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.

<h3 id="describeaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessPolicyId|path|string|true|The ID of the access policy.|
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
  "accessPolicyId": {},
  "accessPolicyArn": {},
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": {},
  "accessPolicyCreationDate": {},
  "accessPolicyLastUpdateDate": {}
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

<h3 id="describeaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessPolicyResponse](#schemadescribeaccesspolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccessPolicy

<a id="opIdUpdateAccessPolicy"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/access-policies/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accessPolicyIdentity": {
      "user": {
        "id": {}
      },
      "group": {
        "id": {}
      },
      "iamUser": {
        "arn": {}
      },
      "iamRole": {
        "arn": {}
      }
    },
    "accessPolicyResource": {
      "portal": {
        "id": {}
      },
      "project": {
        "id": {}
      }
    },
    "accessPolicyPermission": "ADMINISTRATOR",
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`PUT /access-policies/{accessPolicyId}`

Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.

> Body parameter

```json
{
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": "ADMINISTRATOR",
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="updateaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessPolicyId|path|string|true|The ID of the access policy.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accessPolicyIdentity|body|object|true|<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>|
|» » user|body|object|false|none|
|» » » id|body|object|true|none|
|» » group|body|object|false|none|
|» » » id|body|object|true|none|
|» » iamUser|body|object|false|none|
|» » » arn|body|object|true|none|
|» » iamRole|body|object|false|none|
|» » » arn|body|object|true|none|
|» accessPolicyResource|body|object|true|Contains an IoT SiteWise Monitor resource ID for a portal or project.|
|» » portal|body|object|false|none|
|» » » id|body|object|true|none|
|» » project|body|object|false|none|
|» » » id|body|object|true|none|
|» accessPolicyPermission|body|string|true|The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accessPolicyPermission|ADMINISTRATOR|
|» accessPolicyPermission|VIEWER|

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

<h3 id="updateaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccessPolicyResponse](#schemaupdateaccesspolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPolicy

<a id="opIdDeleteAccessPolicy"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/access-policies/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /access-policies/{accessPolicyId}`

Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.

<h3 id="deleteaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessPolicyId|path|string|true|The ID of the access policy to be deleted.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deleteaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteAccessPolicyResponse](#schemadeleteaccesspolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAsset

<a id="opIdDescribeAsset"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{assetId}`

Retrieves information about an asset.

<h3 id="describeasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|
|excludeProperties|query|boolean|false| Whether or not to exclude asset properties from the response. |
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
  "assetId": {},
  "assetArn": {},
  "assetName": {},
  "assetModelId": {},
  "assetProperties": {},
  "assetHierarchies": {},
  "assetCompositeModels": {},
  "assetCreationDate": {},
  "assetLastUpdateDate": {},
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  },
  "assetDescription": {}
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

<h3 id="describeasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssetResponse](#schemadescribeassetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAsset

<a id="opIdUpdateAsset"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetName": "string",
    "clientToken": "stringstringstringstringstringstring",
    "assetDescription": "string"
  }'
```

`PUT /assets/{assetId}`

Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "assetName": "string",
  "clientToken": "stringstringstringstringstringstring",
  "assetDescription": "string"
}
```

<h3 id="updateasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assetName|body|string|true|A friendly name for the asset.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» assetDescription|body|string|false|A description for the asset.|

> Example responses

> 202 Response

```json
{
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

<h3 id="updateasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateAssetResponse](#schemaupdateassetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAsset

<a id="opIdDeleteAsset"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assets/{assetId}`

<p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>

<h3 id="deleteasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset to delete.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
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
{
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

<h3 id="deleteasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteAssetResponse](#schemadeleteassetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAssetModel

<a id="opIdDescribeAssetModel"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /asset-models/{assetModelId}`

Retrieves information about an asset model.

<h3 id="describeassetmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetModelId|path|string|true|The ID of the asset model.|
|excludeProperties|query|boolean|false| Whether or not to exclude asset model properties from the response. |
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
  "assetModelId": {},
  "assetModelArn": {},
  "assetModelName": {},
  "assetModelDescription": {},
  "assetModelProperties": {},
  "assetModelHierarchies": {},
  "assetModelCompositeModels": {},
  "assetModelCreationDate": {},
  "assetModelLastUpdateDate": {},
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

<h3 id="describeassetmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssetModelResponse](#schemadescribeassetmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssetModel

<a id="opIdUpdateAssetModel"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assetModelName": "string",
    "assetModelDescription": "string",
    "assetModelProperties": [
      {
        "id": {},
        "name": {},
        "dataType": {},
        "dataTypeSpec": {},
        "unit": {},
        "type": {
          "attribute": {
            "defaultValue": {}
          },
          "measurement": {
            "processingConfig": {
              "forwardingConfig": {
                "state": {}
              }
            }
          },
          "transform": {
            "expression": {},
            "variables": {},
            "processingConfig": {
              "computeLocation": {},
              "forwardingConfig": {
                "state": {}
              }
            }
          },
          "metric": {
            "expression": {},
            "variables": {},
            "window": {
              "tumbling": {
                "interval": {},
                "offset": {}
              }
            },
            "processingConfig": {
              "computeLocation": {}
            }
          }
        }
      }
    ],
    "assetModelHierarchies": [
      {
        "id": {},
        "name": {},
        "childAssetModelId": {}
      }
    ],
    "assetModelCompositeModels": [
      {
        "name": {},
        "description": {},
        "type": {},
        "properties": null,
        "id": {}
      }
    ],
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`PUT /asset-models/{assetModelId}`

<p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>

> Body parameter

```json
{
  "assetModelName": "string",
  "assetModelDescription": "string",
  "assetModelProperties": [
    {
      "id": {},
      "name": {},
      "dataType": {},
      "dataTypeSpec": {},
      "unit": {},
      "type": {
        "attribute": {
          "defaultValue": {}
        },
        "measurement": {
          "processingConfig": {
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "transform": {
          "expression": {},
          "variables": {},
          "processingConfig": {
            "computeLocation": {},
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "metric": {
          "expression": {},
          "variables": {},
          "window": {
            "tumbling": {
              "interval": {},
              "offset": {}
            }
          },
          "processingConfig": {
            "computeLocation": {}
          }
        }
      }
    }
  ],
  "assetModelHierarchies": [
    {
      "id": {},
      "name": {},
      "childAssetModelId": {}
    }
  ],
  "assetModelCompositeModels": [
    {
      "name": {},
      "description": {},
      "type": {},
      "properties": null,
      "id": {}
    }
  ],
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="updateassetmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetModelId|path|string|true|The ID of the asset model to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assetModelName|body|string|true|A unique, friendly name for the asset model.|
|» assetModelDescription|body|string|false|A description for the asset model.|
|» assetModelProperties|body|[[AssetModelProperty](#schemaassetmodelproperty)]|false|<p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|» assetModelHierarchies|body|[[AssetModelHierarchy](#schemaassetmodelhierarchy)]|false|<p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|» assetModelCompositeModels|body|[[AssetModelCompositeModel](#schemaassetmodelcompositemodel)]|false|The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

> Example responses

> 202 Response

```json
{
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

> 486 Response

```json
null
```

<h3 id="updateassetmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateAssetModelResponse](#schemaupdateassetmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssetModel

<a id="opIdDeleteAssetModel"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /asset-models/{assetModelId}`

Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.

<h3 id="deleteassetmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetModelId|path|string|true|The ID of the asset model to delete.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
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
{
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
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

<h3 id="deleteassetmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteAssetModelResponse](#schemadeleteassetmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDashboard

<a id="opIdDescribeDashboard"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/dashboards/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dashboards/{dashboardId}`

Retrieves information about a dashboard.

<h3 id="describedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|The ID of the dashboard.|
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
  "dashboardId": {},
  "dashboardArn": {},
  "dashboardName": {},
  "projectId": {},
  "dashboardDescription": {},
  "dashboardDefinition": {},
  "dashboardCreationDate": {},
  "dashboardLastUpdateDate": {}
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

<h3 id="describedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDashboardResponse](#schemadescribedashboardresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDashboard

<a id="opIdUpdateDashboard"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/dashboards/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dashboardName": "string",
    "dashboardDescription": "string",
    "dashboardDefinition": "string",
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`PUT /dashboards/{dashboardId}`

Updates an IoT SiteWise Monitor dashboard.

> Body parameter

```json
{
  "dashboardName": "string",
  "dashboardDescription": "string",
  "dashboardDefinition": "string",
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="updatedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|The ID of the dashboard to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» dashboardName|body|string|true|A new friendly name for the dashboard.|
|» dashboardDescription|body|string|false|A new description for the dashboard.|
|» dashboardDefinition|body|string|true|The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="updatedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDashboardResponse](#schemaupdatedashboardresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDashboard

<a id="opIdDeleteDashboard"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/dashboards/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /dashboards/{dashboardId}`

Deletes a dashboard from IoT SiteWise Monitor.

<h3 id="deletedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|The ID of the dashboard to delete.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deletedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteDashboardResponse](#schemadeletedashboardresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGateway

<a id="opIdDescribeGateway"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /20200301/gateways/{gatewayId}`

Retrieves information about a gateway.

<h3 id="describegateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayId|path|string|true|The ID of the gateway device.|
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
  "gatewayId": {},
  "gatewayName": {},
  "gatewayArn": {},
  "gatewayPlatform": {
    "greengrass": {
      "groupArn": {}
    },
    "greengrassV2": {
      "coreDeviceThingName": {}
    }
  },
  "gatewayCapabilitySummaries": {},
  "creationDate": {},
  "lastUpdateDate": {}
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

<h3 id="describegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayResponse](#schemadescribegatewayresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGateway

<a id="opIdUpdateGateway"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "gatewayName": "string"
  }'
```

`PUT /20200301/gateways/{gatewayId}`

Updates a gateway's name.

> Body parameter

```json
{
  "gatewayName": "string"
}
```

<h3 id="updategateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayId|path|string|true|The ID of the gateway to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» gatewayName|body|string|true|A unique, friendly name for the gateway.|

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

<h3 id="updategateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGateway

<a id="opIdDeleteGateway"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /20200301/gateways/{gatewayId}`

Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.

<h3 id="deletegateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayId|path|string|true|The ID of the gateway to delete.|
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

<h3 id="deletegateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePortal

<a id="opIdDescribePortal"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/portals/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /portals/{portalId}`

Retrieves information about a portal.

<h3 id="describeportal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|path|string|true|The ID of the portal.|
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
  "portalId": {},
  "portalArn": {},
  "portalName": {},
  "portalDescription": {},
  "portalClientId": {},
  "portalStartUrl": {},
  "portalContactEmail": {},
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "portalCreationDate": {},
  "portalLastUpdateDate": {},
  "portalLogoImageLocation": {
    "id": {},
    "url": {}
  },
  "roleArn": {},
  "portalAuthMode": {},
  "notificationSenderEmail": {},
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
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

<h3 id="describeportal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePortalResponse](#schemadescribeportalresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePortal

<a id="opIdUpdatePortal"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/portals/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "portalName": "string",
    "portalDescription": "string",
    "portalContactEmail": "string",
    "portalLogoImage": {
      "id": {},
      "file": {
        "data": {},
        "type": {}
      }
    },
    "roleArn": "string",
    "clientToken": "stringstringstringstringstringstring",
    "notificationSenderEmail": "string",
    "alarms": {
      "alarmRoleArn": {},
      "notificationLambdaArn": {}
    }
  }'
```

`PUT /portals/{portalId}`

Updates an IoT SiteWise Monitor portal.

> Body parameter

```json
{
  "portalName": "string",
  "portalDescription": "string",
  "portalContactEmail": "string",
  "portalLogoImage": {
    "id": {},
    "file": {
      "data": {},
      "type": {}
    }
  },
  "roleArn": "string",
  "clientToken": "stringstringstringstringstringstring",
  "notificationSenderEmail": "string",
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
  }
}
```

<h3 id="updateportal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|path|string|true|The ID of the portal to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» portalName|body|string|true|A new friendly name for the portal.|
|» portalDescription|body|string|false|A new description for the portal.|
|» portalContactEmail|body|string|true|The Amazon Web Services administrator's contact email address.|
|» portalLogoImage|body|object|false|<p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>|
|» » id|body|object|false|none|
|» » file|body|[ImageFile](#schemaimagefile)|false|Contains an image file.|
|» roleArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» notificationSenderEmail|body|string|false|The email address that sends alarm notifications.|
|» alarms|body|object|false|Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.|
|» » alarmRoleArn|body|object|false|none|
|» » notificationLambdaArn|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
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

<h3 id="updateportal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdatePortalResponse](#schemaupdateportalresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePortal

<a id="opIdDeletePortal"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/portals/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /portals/{portalId}`

Deletes a portal from IoT SiteWise Monitor.

<h3 id="deleteportal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|path|string|true|The ID of the portal to delete.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
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
{
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
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

<h3 id="deleteportal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeletePortalResponse](#schemadeleteportalresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectId}`

Retrieves information about a project.

<h3 id="describeproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project.|
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
  "projectId": {},
  "projectArn": {},
  "projectName": {},
  "portalId": {},
  "projectDescription": {},
  "projectCreationDate": {},
  "projectLastUpdateDate": {}
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

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResponse](#schemadescribeprojectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "projectName": "string",
    "projectDescription": "string",
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`PUT /projects/{projectId}`

Updates an IoT SiteWise Monitor project.

> Body parameter

```json
{
  "projectName": "string",
  "projectDescription": "string",
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» projectName|body|string|true|A new friendly name for the project.|
|» projectDescription|body|string|false|A new description for the project.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResponse](#schemaupdateprojectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{projectId}`

Deletes a project from IoT SiteWise Monitor.

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project.|
|clientToken|query|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteProjectResponse](#schemadeleteprojectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTimeSeries

<a id="opIdDeleteTimeSeries"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/timeseries/delete/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /timeseries/delete/`

<p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

> Body parameter

```json
{
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="deletetimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|false|The alias that identifies the time series.|
|assetId|query|string|false|The ID of the asset in which the asset property was created.|
|propertyId|query|string|false|The ID of the asset property.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="deletetimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAssetProperty

<a id="opIdDescribeAssetProperty"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/properties/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{assetId}/properties/{propertyId}`

<p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>

<h3 id="describeassetproperty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|
|propertyId|path|string|true|The ID of the asset property.|
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
  "assetId": {},
  "assetName": {},
  "assetModelId": {},
  "assetProperty": {
    "id": {},
    "name": {},
    "alias": {},
    "notification": {
      "topic": {},
      "state": {}
    },
    "dataType": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    }
  },
  "compositeModel": {
    "name": {},
    "type": {},
    "assetProperty": {
      "id": {},
      "name": {},
      "alias": {},
      "notification": {
        "topic": {},
        "state": {}
      },
      "dataType": {},
      "unit": {},
      "type": {
        "attribute": {
          "defaultValue": {}
        },
        "measurement": {
          "processingConfig": {
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "transform": {
          "expression": {},
          "variables": {},
          "processingConfig": {
            "computeLocation": {},
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "metric": {
          "expression": {},
          "variables": {},
          "window": {
            "tumbling": {
              "interval": {},
              "offset": {}
            }
          },
          "processingConfig": {
            "computeLocation": {}
          }
        }
      }
    },
    "id": {}
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

<h3 id="describeassetproperty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssetPropertyResponse](#schemadescribeassetpropertyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssetProperty

<a id="opIdUpdateAssetProperty"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/properties/stringstringstringstringstringstring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "propertyAlias": "string",
    "propertyNotificationState": "ENABLED",
    "clientToken": "stringstringstringstringstringstring",
    "propertyUnit": "string"
  }'
```

`PUT /assets/{assetId}/properties/{propertyId}`

<p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>

> Body parameter

```json
{
  "propertyAlias": "string",
  "propertyNotificationState": "ENABLED",
  "clientToken": "stringstringstringstringstringstring",
  "propertyUnit": "string"
}
```

<h3 id="updateassetproperty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset to be updated.|
|propertyId|path|string|true|The ID of the asset property to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» propertyAlias|body|string|false|<p>The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>|
|» propertyNotificationState|body|string|false|<p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|
|» propertyUnit|body|string|false|The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the <code>assetModelProperty</code> in the asset model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» propertyNotificationState|ENABLED|
|» propertyNotificationState|DISABLED|

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

<h3 id="updateassetproperty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBulkImportJob

<a id="opIdDescribeBulkImportJob"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/jobs/stringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs/{jobId}`

Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.

<h3 id="describebulkimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the job.|
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
  "jobId": {},
  "jobName": {},
  "jobStatus": {},
  "jobRoleArn": {},
  "files": {},
  "errorReportLocation": {
    "bucket": {},
    "prefix": {}
  },
  "jobConfiguration": {
    "fileFormat": {
      "csv": {
        "columnNames": {}
      }
    }
  },
  "jobCreationDate": {},
  "jobLastUpdateDate": {}
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

<h3 id="describebulkimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBulkImportJobResponse](#schemadescribebulkimportjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDefaultEncryptionConfiguration

<a id="opIdDescribeDefaultEncryptionConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/configuration/account/encryption \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /configuration/account/encryption`

Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

<h3 id="describedefaultencryptionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "encryptionType": {},
  "kmsKeyArn": {},
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
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

<h3 id="describedefaultencryptionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDefaultEncryptionConfigurationResponse](#schemadescribedefaultencryptionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDefaultEncryptionConfiguration

<a id="opIdPutDefaultEncryptionConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/configuration/account/encryption \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "encryptionType": "SITEWISE_DEFAULT_ENCRYPTION",
    "kmsKeyId": "string"
  }'
```

`POST /configuration/account/encryption`

Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.

> Body parameter

```json
{
  "encryptionType": "SITEWISE_DEFAULT_ENCRYPTION",
  "kmsKeyId": "string"
}
```

<h3 id="putdefaultencryptionconfiguration-parameters">Parameters</h3>

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
|» encryptionType|body|string|true|The type of encryption used for the encryption configuration.|
|» kmsKeyId|body|string|false|The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encryptionType|SITEWISE_DEFAULT_ENCRYPTION|
|» encryptionType|KMS_BASED_ENCRYPTION|

> Example responses

> 200 Response

```json
{
  "encryptionType": {},
  "kmsKeyArn": {},
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
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

<h3 id="putdefaultencryptionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDefaultEncryptionConfigurationResponse](#schemaputdefaultencryptionconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGatewayCapabilityConfiguration

<a id="opIdDescribeGatewayCapabilityConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways/stringstringstringstringstringstring/capability/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /20200301/gateways/{gatewayId}/capability/{capabilityNamespace}`

Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

<h3 id="describegatewaycapabilityconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayId|path|string|true|The ID of the gateway that defines the capability configuration.|
|capabilityNamespace|path|string|true|The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.|
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
  "gatewayId": {},
  "capabilityNamespace": {},
  "capabilityConfiguration": {},
  "capabilitySyncStatus": {}
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

<h3 id="describegatewaycapabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGatewayCapabilityConfigurationResponse](#schemadescribegatewaycapabilityconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoggingOptions

<a id="opIdDescribeLoggingOptions"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/logging \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /logging`

Retrieves the current IoT SiteWise logging options.

<h3 id="describeloggingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "loggingOptions": {
    "level": {}
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

<h3 id="describeloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoggingOptionsResponse](#schemadescribeloggingoptionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLoggingOptions

<a id="opIdPutLoggingOptions"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/logging \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "loggingOptions": {
      "level": {}
    }
  }'
```

`PUT /logging`

Sets logging options for IoT SiteWise.

> Body parameter

```json
{
  "loggingOptions": {
    "level": {}
  }
}
```

<h3 id="putloggingoptions-parameters">Parameters</h3>

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
|» loggingOptions|body|object|true|Contains logging options.|
|» » level|body|object|false|none|

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

<h3 id="putloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLoggingOptionsResponse](#schemaputloggingoptionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStorageConfiguration

<a id="opIdDescribeStorageConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/configuration/account/storage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /configuration/account/storage`

Retrieves information about the storage configuration for IoT SiteWise.

<h3 id="describestorageconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "storageType": {},
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": {},
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  },
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "lastUpdateDate": {}
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

<h3 id="describestorageconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStorageConfigurationResponse](#schemadescribestorageconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutStorageConfiguration

<a id="opIdPutStorageConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/configuration/account/storage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "storageType": "SITEWISE_DEFAULT_STORAGE",
    "multiLayerStorage": {
      "customerManagedS3Storage": {
        "s3ResourceArn": {},
        "roleArn": {}
      }
    },
    "disassociatedDataStorage": "ENABLED",
    "retentionPeriod": {
      "numberOfDays": {},
      "unlimited": {}
    }
  }'
```

`POST /configuration/account/storage`

Configures storage settings for IoT SiteWise.

> Body parameter

```json
{
  "storageType": "SITEWISE_DEFAULT_STORAGE",
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": "ENABLED",
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  }
}
```

<h3 id="putstorageconfiguration-parameters">Parameters</h3>

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
|» storageType|body|string|true|<p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>|
|» multiLayerStorage|body|object|false|Contains information about the storage destination.|
|» » customerManagedS3Storage|body|object|false|none|
|» » » s3ResourceArn|body|object|true|none|
|» » » roleArn|body|object|true|none|
|» disassociatedDataStorage|body|string|false|<p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|» retentionPeriod|body|object|false|How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.|
|» » numberOfDays|body|object|false|none|
|» » unlimited|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storageType|SITEWISE_DEFAULT_STORAGE|
|» storageType|MULTI_LAYER_STORAGE|
|» disassociatedDataStorage|ENABLED|
|» disassociatedDataStorage|DISABLED|

> Example responses

> 200 Response

```json
{
  "storageType": {},
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": {},
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  },
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
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

> 486 Response

```json
null
```

<h3 id="putstorageconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutStorageConfigurationResponse](#schemaputstorageconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTimeSeries

<a id="opIdDescribeTimeSeries"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/timeseries/describe/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /timeseries/describe/`

<p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>

<h3 id="describetimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|false|The alias that identifies the time series.|
|assetId|query|string|false|The ID of the asset in which the asset property was created.|
|propertyId|query|string|false|The ID of the asset property.|
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
  "assetId": {},
  "propertyId": {},
  "alias": {},
  "timeSeriesId": {},
  "dataType": {},
  "dataTypeSpec": {},
  "timeSeriesCreationDate": {},
  "timeSeriesLastUpdateDate": {},
  "timeSeriesArn": {}
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

<h3 id="describetimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTimeSeriesResponse](#schemadescribetimeseriesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateAssets

<a id="opIdDisassociateAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/disassociate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hierarchyId": "stringstringstringstringstringstring",
    "childAssetId": "stringstringstringstringstringstring",
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /assets/{assetId}/disassociate`

Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.

> Body parameter

```json
{
  "hierarchyId": "stringstringstringstringstringstring",
  "childAssetId": "stringstringstringstringstringstring",
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="disassociateassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the parent asset from which to disassociate the child asset.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» hierarchyId|body|string|true|The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.|
|» childAssetId|body|string|true|The ID of the child asset to disassociate.|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="disassociateassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateTimeSeriesFromAssetProperty

<a id="opIdDisassociateTimeSeriesFromAssetProperty"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/timeseries/disassociate/#alias&assetId&propertyId?alias=string&assetId=stringstringstringstringstringstring&propertyId=stringstringstringstringstringstring' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "stringstringstringstringstringstring"
  }'
```

`POST /timeseries/disassociate/#alias&assetId&propertyId`

Disassociates a time series (data stream) from an asset property.

> Body parameter

```json
{
  "clientToken": "stringstringstringstringstringstring"
}
```

<h3 id="disassociatetimeseriesfromassetproperty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|true|The alias that identifies the time series.|
|assetId|query|string|true|The ID of the asset in which the asset property was created.|
|propertyId|query|string|true|The ID of the asset property.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.|

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

<h3 id="disassociatetimeseriesfromassetproperty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssetPropertyAggregates

<a id="opIdGetAssetPropertyAggregates"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/properties/aggregates#aggregateTypes&resolution&startDate&endDate?aggregateTypes=AVERAGE&resolution=st&startDate=1970-01-01T00%3A00%3A00Z&endDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /properties/aggregates#aggregateTypes&resolution&startDate&endDate`

<p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

<h3 id="getassetpropertyaggregates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|query|string|false|The ID of the asset.|
|propertyId|query|string|false|The ID of the asset property.|
|propertyAlias|query|string|false|The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.|
|aggregateTypes|query|[[AggregateType](#schemaaggregatetype)]|true|The data aggregating function.|
|resolution|query|string|true|The time interval over which to aggregate data.|
|qualities|query|[[Quality](#schemaquality)]|false|The quality by which to filter asset data.|
|startDate|query|string(date-time)|true|The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.|
|endDate|query|string(date-time)|true|The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.|
|timeOrdering|query|string|false|<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 100</p>|
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
|aggregateTypes|AVERAGE|
|aggregateTypes|COUNT|
|aggregateTypes|MAXIMUM|
|aggregateTypes|MINIMUM|
|aggregateTypes|SUM|
|aggregateTypes|STANDARD_DEVIATION|
|qualities|GOOD|
|qualities|BAD|
|qualities|UNCERTAIN|
|timeOrdering|ASCENDING|
|timeOrdering|DESCENDING|

> Example responses

> 200 Response

```json
{
  "aggregatedValues": {},
  "nextToken": {}
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

<h3 id="getassetpropertyaggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssetPropertyAggregatesResponse](#schemagetassetpropertyaggregatesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssetPropertyValue

<a id="opIdGetAssetPropertyValue"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties/latest \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /properties/latest`

<p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

<h3 id="getassetpropertyvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|query|string|false|The ID of the asset.|
|propertyId|query|string|false|The ID of the asset property.|
|propertyAlias|query|string|false|The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.|
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
  "propertyValue": {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
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

<h3 id="getassetpropertyvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssetPropertyValueResponse](#schemagetassetpropertyvalueresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssetPropertyValueHistory

<a id="opIdGetAssetPropertyValueHistory"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/properties/history \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /properties/history`

<p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

<h3 id="getassetpropertyvaluehistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|query|string|false|The ID of the asset.|
|propertyId|query|string|false|The ID of the asset property.|
|propertyAlias|query|string|false|The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.|
|startDate|query|string(date-time)|false|The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.|
|endDate|query|string(date-time)|false|The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.|
|qualities|query|[[Quality](#schemaquality)]|false|The quality by which to filter asset data.|
|timeOrdering|query|string|false|<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 100</p>|
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
|qualities|GOOD|
|qualities|BAD|
|qualities|UNCERTAIN|
|timeOrdering|ASCENDING|
|timeOrdering|DESCENDING|

> Example responses

> 200 Response

```json
{
  "assetPropertyValueHistory": {},
  "nextToken": {}
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

<h3 id="getassetpropertyvaluehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssetPropertyValueHistoryResponse](#schemagetassetpropertyvaluehistoryresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInterpolatedAssetPropertyValues

<a id="opIdGetInterpolatedAssetPropertyValues"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type?startTimeInSeconds=1&endTimeInSeconds=1&quality=GOOD&intervalInSeconds=1&type=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type`

<p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

<h3 id="getinterpolatedassetpropertyvalues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|query|string|false|The ID of the asset.|
|propertyId|query|string|false|The ID of the asset property.|
|propertyAlias|query|string|false|The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.|
|startTimeInSeconds|query|integer|true|The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.|
|startTimeOffsetInNanos|query|integer|false|The nanosecond offset converted from <code>startTimeInSeconds</code>.|
|endTimeInSeconds|query|integer|true|The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.|
|endTimeOffsetInNanos|query|integer|false|The nanosecond offset converted from <code>endTimeInSeconds</code>.|
|quality|query|string|true|The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.|
|intervalInSeconds|query|integer|true|The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request. If not specified, the default value is 10.|
|type|query|string|true|<p>The interpolation type.</p> <p>Valid values: <code>LINEAR_INTERPOLATION \| LOCF_INTERPOLATION</code> </p> <ul> <li> <p> <code>LINEAR_INTERPOLATION</code> – Estimates missing data using <a href="https://en.wikipedia.org/wiki/Linear_interpolation">linear interpolation</a>.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.</p> </li> <li> <p> <code>LOCF_INTERPOLATION</code> – Estimates missing data using last observation carried forward interpolation</p> <p>If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found.</p> <p>For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.</p> </li> </ul>|
|intervalWindowInSeconds|query|integer|false|<p>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.</p> <note> <ul> <li> <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter, the value for the <code>type</code> parameter must be <code>LINEAR_INTERPOLATION</code>.</p> </li> <li> <p>If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.</p> </li> </ul> </note> <p>For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on. </p>|
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
|quality|GOOD|
|quality|BAD|
|quality|UNCERTAIN|

> Example responses

> 200 Response

```json
{
  "interpolatedAssetPropertyValues": {},
  "nextToken": {}
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

<h3 id="getinterpolatedassetpropertyvalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInterpolatedAssetPropertyValuesResponse](#schemagetinterpolatedassetpropertyvaluesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssetModelProperties

<a id="opIdListAssetModelProperties"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/asset-models/stringstringstringstringstringstring/properties \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /asset-models/{assetModelId}/properties`

Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

<h3 id="listassetmodelproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetModelId|path|string|true|The ID of the asset model.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request. If not specified, the default value is 50.|
|filter|query|string|false|<p> Filters the requested list of asset model properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset model properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset model properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>|
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
|filter|ALL|
|filter|BASE|

> Example responses

> 200 Response

```json
{
  "assetModelPropertySummaries": {},
  "nextToken": {}
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

<h3 id="listassetmodelproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetModelPropertiesResponse](#schemalistassetmodelpropertiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssetProperties

<a id="opIdListAssetProperties"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/properties \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{assetId}/properties`

Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.

<h3 id="listassetproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request. If not specified, the default value is 50.|
|filter|query|string|false|<p> Filters the requested list of asset properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>|
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
|filter|ALL|
|filter|BASE|

> Example responses

> 200 Response

```json
{
  "assetPropertySummaries": {},
  "nextToken": {}
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

<h3 id="listassetproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetPropertiesResponse](#schemalistassetpropertiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssetRelationships

<a id="opIdListAssetRelationships"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/assetRelationships#traversalType?traversalType=PATH_TO_ROOT' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{assetId}/assetRelationships#traversalType`

Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.

<h3 id="listassetrelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|
|traversalType|query|string|true|<p>The type of traversal to use to identify asset relationships. Choose the following option:</p> <ul> <li> <p> <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root asset. The asset that you specify in <code>assetId</code> is the first result in the list of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p> </li> </ul>|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request.|
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
|traversalType|PATH_TO_ROOT|

> Example responses

> 200 Response

```json
{
  "assetRelationshipSummaries": {},
  "nextToken": {}
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

<h3 id="listassetrelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetRelationshipsResponse](#schemalistassetrelationshipsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedAssets

<a id="opIdListAssociatedAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/assets/stringstringstringstringstringstring/hierarchies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{assetId}/hierarchies`

<p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>

<h3 id="listassociatedassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset to query.|
|hierarchyId|query|string|false|<p>The ID of the hierarchy by which child assets are associated to the asset. To find a hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> operations. This parameter is required if you choose <code>CHILD</code> for <code>traversalDirection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>|
|traversalDirection|query|string|false|<p>The direction to list associated assets. Choose one of the following options:</p> <ul> <li> <p> <code>CHILD</code> – The list includes all child assets associated to the asset. The <code>hierarchyId</code> parameter is required if you choose <code>CHILD</code>.</p> </li> <li> <p> <code>PARENT</code> – The list includes the asset's parent asset.</p> </li> </ul> <p>Default: <code>CHILD</code> </p>|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
|traversalDirection|PARENT|
|traversalDirection|CHILD|

> Example responses

> 200 Response

```json
{
  "assetSummaries": {},
  "nextToken": {}
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

<h3 id="listassociatedassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedAssetsResponse](#schemalistassociatedassetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDashboards

<a id="opIdListDashboards"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/dashboards#projectId?projectId=stringstringstringstringstringstring' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /dashboards#projectId`

Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.

<h3 id="listdashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|The ID of the project.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "dashboardSummaries": {},
  "nextToken": {}
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

<h3 id="listdashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDashboardsResponse](#schemalistdashboardsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjectAssets

<a id="opIdListProjectAssets"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/projects/stringstringstringstringstringstring/assets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{projectId}/assets`

Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.

<h3 id="listprojectassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the project.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "assetIds": {},
  "nextToken": {}
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

<h3 id="listprojectassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectAssetsResponse](#schemalistprojectassetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/projects#portalId?portalId=stringstringstringstringstringstring' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects#portalId`

Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|portalId|query|string|true|The ID of the portal.|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>|
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
  "projectSummaries": {},
  "nextToken": {}
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

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResponse](#schemalistprojectsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags#resourceArn`

Retrieves the list of tags for an IoT SiteWise resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.|
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
  "tags": {
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags#resourceArn`

Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.

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
|resourceArn|query|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|487|487|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTimeSeries

<a id="opIdListTimeSeries"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/timeseries/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /timeseries/`

Retrieves a paginated list of time series (data streams).

<h3 id="listtimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to be used for the next set of paginated results.|
|maxResults|query|integer|false|The maximum number of results to return for each paginated request.|
|assetId|query|string|false|The ID of the asset in which the asset property was created.|
|aliasPrefix|query|string|false|The alias prefix of the time series.|
|timeSeriesType|query|string|false|<p>The type of the time series. The time series type can be one of the following values:</p> <ul> <li> <p> <code>ASSOCIATED</code> – The time series is associated with an asset property.</p> </li> <li> <p> <code>DISASSOCIATED</code> – The time series isn't associated with any asset property.</p> </li> </ul>|
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
|timeSeriesType|ASSOCIATED|
|timeSeriesType|DISASSOCIATED|

> Example responses

> 200 Response

```json
{
  "TimeSeriesSummaries": {},
  "nextToken": {}
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

<h3 id="listtimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTimeSeriesResponse](#schemalisttimeseriesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotsitewise.us-east-1.amazonaws.com/tags#resourceArn&tagKeys?resourceArn=string&tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags#resourceArn&tagKeys`

Removes a tag from an IoT SiteWise resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of keys for tags to remove from the resource.|
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

> 486 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayCapabilityConfiguration

<a id="opIdUpdateGatewayCapabilityConfiguration"></a>

> Code samples

```bash
curl https://iotsitewise.us-east-1.amazonaws.com/20200301/gateways/stringstringstringstringstringstring/capability \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "capabilityNamespace": "string",
    "capabilityConfiguration": "string"
  }'
```

`POST /20200301/gateways/{gatewayId}/capability`

Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.

> Body parameter

```json
{
  "capabilityNamespace": "string",
  "capabilityConfiguration": "string"
}
```

<h3 id="updategatewaycapabilityconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gatewayId|path|string|true|The ID of the gateway to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» capabilityNamespace|body|string|true|The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.|
|» capabilityConfiguration|body|string|true|The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.|

> Example responses

> 201 Response

```json
{
  "capabilityNamespace": {},
  "capabilitySyncStatus": {}
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

<h3 id="updategatewaycapabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[UpdateGatewayCapabilityConfigurationResponse](#schemaupdategatewaycapabilityconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_ConflictingOperationException">ConflictingOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingoperationexception"></a>
<a id="schema_ConflictingOperationException"></a>
<a id="tocSconflictingoperationexception"></a>
<a id="tocsconflictingoperationexception"></a>

```json
null
```

<h2 id="tocS_BatchAssociateProjectAssetsResponse">BatchAssociateProjectAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateprojectassetsresponse"></a>
<a id="schema_BatchAssociateProjectAssetsResponse"></a>
<a id="tocSbatchassociateprojectassetsresponse"></a>
<a id="tocsbatchassociateprojectassetsresponse"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_BatchDisassociateProjectAssetsResponse">BatchDisassociateProjectAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateprojectassetsresponse"></a>
<a id="schema_BatchDisassociateProjectAssetsResponse"></a>
<a id="tocSbatchdisassociateprojectassetsresponse"></a>
<a id="tocsbatchdisassociateprojectassetsresponse"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesResponse">BatchGetAssetPropertyAggregatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesresponse"></a>
<a id="schema_BatchGetAssetPropertyAggregatesResponse"></a>
<a id="tocSbatchgetassetpropertyaggregatesresponse"></a>
<a id="tocsbatchgetassetpropertyaggregatesresponse"></a>

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|true|none|none|
|successEntries|object|true|none|none|
|skippedEntries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesEntry">BatchGetAssetPropertyAggregatesEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesentry"></a>
<a id="schema_BatchGetAssetPropertyAggregatesEntry"></a>
<a id="tocSbatchgetassetpropertyaggregatesentry"></a>
<a id="tocsbatchgetassetpropertyaggregatesentry"></a>

```json
{
  "entryId": {},
  "assetId": {},
  "propertyId": {},
  "propertyAlias": {},
  "aggregateTypes": {},
  "resolution": {},
  "startDate": {},
  "endDate": {},
  "qualities": {},
  "timeOrdering": {}
}
```

<p>Contains information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|propertyAlias|object|false|none|none|
|aggregateTypes|object|true|none|none|
|resolution|object|true|none|none|
|startDate|object|true|none|none|
|endDate|object|true|none|none|
|qualities|object|false|none|none|
|timeOrdering|object|false|none|none|

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_BatchGetAssetPropertyValueResponse">BatchGetAssetPropertyValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueresponse"></a>
<a id="schema_BatchGetAssetPropertyValueResponse"></a>
<a id="tocSbatchgetassetpropertyvalueresponse"></a>
<a id="tocsbatchgetassetpropertyvalueresponse"></a>

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|true|none|none|
|successEntries|object|true|none|none|
|skippedEntries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueEntry">BatchGetAssetPropertyValueEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueentry"></a>
<a id="schema_BatchGetAssetPropertyValueEntry"></a>
<a id="tocSbatchgetassetpropertyvalueentry"></a>
<a id="tocsbatchgetassetpropertyvalueentry"></a>

```json
{
  "entryId": {},
  "assetId": {},
  "propertyId": {},
  "propertyAlias": {}
}
```

<p>Contains information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|propertyAlias|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistoryResponse">BatchGetAssetPropertyValueHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryresponse"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryResponse"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryresponse"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryresponse"></a>

```json
{
  "errorEntries": {},
  "successEntries": {},
  "skippedEntries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|true|none|none|
|successEntries|object|true|none|none|
|skippedEntries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistoryEntry">BatchGetAssetPropertyValueHistoryEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryentry"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryEntry"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryentry"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryentry"></a>

```json
{
  "entryId": {},
  "assetId": {},
  "propertyId": {},
  "propertyAlias": {},
  "startDate": {},
  "endDate": {},
  "qualities": {},
  "timeOrdering": {}
}
```

<p>Contains information for an asset property historical value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|propertyAlias|object|false|none|none|
|startDate|object|false|none|none|
|endDate|object|false|none|none|
|qualities|object|false|none|none|
|timeOrdering|object|false|none|none|

<h2 id="tocS_BatchPutAssetPropertyValueResponse">BatchPutAssetPropertyValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyvalueresponse"></a>
<a id="schema_BatchPutAssetPropertyValueResponse"></a>
<a id="tocSbatchputassetpropertyvalueresponse"></a>
<a id="tocsbatchputassetpropertyvalueresponse"></a>

```json
{
  "errorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEntries|object|true|none|none|

<h2 id="tocS_PutAssetPropertyValueEntry">PutAssetPropertyValueEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputassetpropertyvalueentry"></a>
<a id="schema_PutAssetPropertyValueEntry"></a>
<a id="tocSputassetpropertyvalueentry"></a>
<a id="tocsputassetpropertyvalueentry"></a>

```json
{
  "entryId": {},
  "assetId": {},
  "propertyId": {},
  "propertyAlias": {},
  "propertyValues": {}
}
```

Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|propertyAlias|object|false|none|none|
|propertyValues|object|true|none|none|

<h2 id="tocS_CreateAccessPolicyResponse">CreateAccessPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspolicyresponse"></a>
<a id="schema_CreateAccessPolicyResponse"></a>
<a id="tocScreateaccesspolicyresponse"></a>
<a id="tocscreateaccesspolicyresponse"></a>

```json
{
  "accessPolicyId": {},
  "accessPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicyId|object|true|none|none|
|accessPolicyArn|object|true|none|none|

<h2 id="tocS_UserIdentity">UserIdentity</h2>
<!-- backwards compatibility -->
<a id="schemauseridentity"></a>
<a id="schema_UserIdentity"></a>
<a id="tocSuseridentity"></a>
<a id="tocsuseridentity"></a>

```json
{
  "id": {}
}
```

Contains information for a user identity in an access policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_GroupIdentity">GroupIdentity</h2>
<!-- backwards compatibility -->
<a id="schemagroupidentity"></a>
<a id="schema_GroupIdentity"></a>
<a id="tocSgroupidentity"></a>
<a id="tocsgroupidentity"></a>

```json
{
  "id": {}
}
```

Contains information for a group identity in an access policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_IAMUserIdentity">IAMUserIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaiamuseridentity"></a>
<a id="schema_IAMUserIdentity"></a>
<a id="tocSiamuseridentity"></a>
<a id="tocsiamuseridentity"></a>

```json
{
  "arn": {}
}
```

Contains information about an Identity and Access Management user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_IAMRoleIdentity">IAMRoleIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaiamroleidentity"></a>
<a id="schema_IAMRoleIdentity"></a>
<a id="tocSiamroleidentity"></a>
<a id="tocsiamroleidentity"></a>

```json
{
  "arn": {}
}
```

Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_PortalResource">PortalResource</h2>
<!-- backwards compatibility -->
<a id="schemaportalresource"></a>
<a id="schema_PortalResource"></a>
<a id="tocSportalresource"></a>
<a id="tocsportalresource"></a>

```json
{
  "id": {}
}
```

Identifies an IoT SiteWise Monitor portal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_ProjectResource">ProjectResource</h2>
<!-- backwards compatibility -->
<a id="schemaprojectresource"></a>
<a id="schema_ProjectResource"></a>
<a id="tocSprojectresource"></a>
<a id="tocsprojectresource"></a>

```json
{
  "id": {}
}
```

Identifies a specific IoT SiteWise Monitor project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateAssetResponse">CreateAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetresponse"></a>
<a id="schema_CreateAssetResponse"></a>
<a id="tocScreateassetresponse"></a>
<a id="tocscreateassetresponse"></a>

```json
{
  "assetId": {},
  "assetArn": {},
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|true|none|none|
|assetArn|object|true|none|none|
|assetStatus|object|true|none|none|

<h2 id="tocS_CreateAssetModelResponse">CreateAssetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetmodelresponse"></a>
<a id="schema_CreateAssetModelResponse"></a>
<a id="tocScreateassetmodelresponse"></a>
<a id="tocscreateassetmodelresponse"></a>

```json
{
  "assetModelId": {},
  "assetModelArn": {},
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelId|object|true|none|none|
|assetModelArn|object|true|none|none|
|assetModelStatus|object|true|none|none|

<h2 id="tocS_AssetModelPropertyDefinition">AssetModelPropertyDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelpropertydefinition"></a>
<a id="schema_AssetModelPropertyDefinition"></a>
<a id="tocSassetmodelpropertydefinition"></a>
<a id="tocsassetmodelpropertydefinition"></a>

```json
{
  "name": {},
  "dataType": {},
  "dataTypeSpec": {},
  "unit": {},
  "type": {
    "attribute": {
      "defaultValue": {}
    },
    "measurement": {
      "processingConfig": {
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "transform": {
      "expression": {},
      "variables": {},
      "processingConfig": {
        "computeLocation": {},
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "metric": {
      "expression": {},
      "variables": {},
      "window": {
        "tumbling": {
          "interval": {},
          "offset": {}
        }
      },
      "processingConfig": {
        "computeLocation": {}
      }
    }
  }
}
```

Contains an asset model property definition. This property definition is applied to all assets created from the asset model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|unit|object|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_AssetModelHierarchyDefinition">AssetModelHierarchyDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelhierarchydefinition"></a>
<a id="schema_AssetModelHierarchyDefinition"></a>
<a id="tocSassetmodelhierarchydefinition"></a>
<a id="tocsassetmodelhierarchydefinition"></a>

```json
{
  "name": {},
  "childAssetModelId": {}
}
```

Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|childAssetModelId|object|true|none|none|

<h2 id="tocS_AssetModelCompositeModelDefinition">AssetModelCompositeModelDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelcompositemodeldefinition"></a>
<a id="schema_AssetModelCompositeModelDefinition"></a>
<a id="tocSassetmodelcompositemodeldefinition"></a>
<a id="tocsassetmodelcompositemodeldefinition"></a>

```json
{
  "name": {},
  "description": {},
  "type": {},
  "properties": null
}
```

Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|properties|object|false|none|The asset property definitions for this composite model.|

<h2 id="tocS_CreateBulkImportJobResponse">CreateBulkImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebulkimportjobresponse"></a>
<a id="schema_CreateBulkImportJobResponse"></a>
<a id="tocScreatebulkimportjobresponse"></a>
<a id="tocscreatebulkimportjobresponse"></a>

```json
{
  "jobId": {},
  "jobName": {},
  "jobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|jobName|object|true|none|none|
|jobStatus|object|true|none|none|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "bucket": {},
  "key": {},
  "versionId": {}
}
```

The file in Amazon S3 where your data is saved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|
|versionId|object|false|none|none|

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
"string"
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

<h2 id="tocS_FileFormat">FileFormat</h2>
<!-- backwards compatibility -->
<a id="schemafileformat"></a>
<a id="schema_FileFormat"></a>
<a id="tocSfileformat"></a>
<a id="tocsfileformat"></a>

```json
{
  "csv": {
    "columnNames": {}
  }
}
```

The file format of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv|object|false|none|none|

<h2 id="tocS_CreateDashboardResponse">CreateDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedashboardresponse"></a>
<a id="schema_CreateDashboardResponse"></a>
<a id="tocScreatedashboardresponse"></a>
<a id="tocscreatedashboardresponse"></a>

```json
{
  "dashboardId": {},
  "dashboardArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboardId|object|true|none|none|
|dashboardArn|object|true|none|none|

<h2 id="tocS_CreateGatewayResponse">CreateGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayresponse"></a>
<a id="schema_CreateGatewayResponse"></a>
<a id="tocScreategatewayresponse"></a>
<a id="tocscreategatewayresponse"></a>

```json
{
  "gatewayId": {},
  "gatewayArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayId|object|true|none|none|
|gatewayArn|object|true|none|none|

<h2 id="tocS_Greengrass">Greengrass</h2>
<!-- backwards compatibility -->
<a id="schemagreengrass"></a>
<a id="schema_Greengrass"></a>
<a id="tocSgreengrass"></a>
<a id="tocsgreengrass"></a>

```json
{
  "groupArn": {}
}
```

Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupArn|object|true|none|none|

<h2 id="tocS_GreengrassV2">GreengrassV2</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassv2"></a>
<a id="schema_GreengrassV2"></a>
<a id="tocSgreengrassv2"></a>
<a id="tocsgreengrassv2"></a>

```json
{
  "coreDeviceThingName": {}
}
```

Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coreDeviceThingName|object|true|none|none|

<h2 id="tocS_CreatePortalResponse">CreatePortalResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateportalresponse"></a>
<a id="schema_CreatePortalResponse"></a>
<a id="tocScreateportalresponse"></a>
<a id="tocscreateportalresponse"></a>

```json
{
  "portalId": {},
  "portalArn": {},
  "portalStartUrl": {},
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "ssoApplicationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalId|object|true|none|none|
|portalArn|object|true|none|none|
|portalStartUrl|object|true|none|none|
|portalStatus|object|true|none|none|
|ssoApplicationId|object|true|none|none|

<h2 id="tocS_ImageFileData">ImageFileData</h2>
<!-- backwards compatibility -->
<a id="schemaimagefiledata"></a>
<a id="schema_ImageFileData"></a>
<a id="tocSimagefiledata"></a>
<a id="tocsimagefiledata"></a>

```json
"string"
```

<h2 id="tocS_ImageFileType">ImageFileType</h2>
<!-- backwards compatibility -->
<a id="schemaimagefiletype"></a>
<a id="schema_ImageFileType"></a>
<a id="tocSimagefiletype"></a>
<a id="tocsimagefiletype"></a>

```json
"PNG"
```

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_CreateProjectResponse">CreateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponse"></a>
<a id="schema_CreateProjectResponse"></a>
<a id="tocScreateprojectresponse"></a>
<a id="tocscreateprojectresponse"></a>

```json
{
  "projectId": {},
  "projectArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|projectArn|object|true|none|none|

<h2 id="tocS_DeleteAccessPolicyResponse">DeleteAccessPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspolicyresponse"></a>
<a id="schema_DeleteAccessPolicyResponse"></a>
<a id="tocSdeleteaccesspolicyresponse"></a>
<a id="tocsdeleteaccesspolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAssetResponse">DeleteAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetresponse"></a>
<a id="schema_DeleteAssetResponse"></a>
<a id="tocSdeleteassetresponse"></a>
<a id="tocsdeleteassetresponse"></a>

```json
{
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetStatus|object|true|none|none|

<h2 id="tocS_DeleteAssetModelResponse">DeleteAssetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetmodelresponse"></a>
<a id="schema_DeleteAssetModelResponse"></a>
<a id="tocSdeleteassetmodelresponse"></a>
<a id="tocsdeleteassetmodelresponse"></a>

```json
{
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelStatus|object|true|none|none|

<h2 id="tocS_DeleteDashboardResponse">DeleteDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedashboardresponse"></a>
<a id="schema_DeleteDashboardResponse"></a>
<a id="tocSdeletedashboardresponse"></a>
<a id="tocsdeletedashboardresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePortalResponse">DeletePortalResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportalresponse"></a>
<a id="schema_DeletePortalResponse"></a>
<a id="tocSdeleteportalresponse"></a>
<a id="tocsdeleteportalresponse"></a>

```json
{
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalStatus|object|true|none|none|

<h2 id="tocS_DeleteProjectResponse">DeleteProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresponse"></a>
<a id="schema_DeleteProjectResponse"></a>
<a id="tocSdeleteprojectresponse"></a>
<a id="tocsdeleteprojectresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAccessPolicyResponse">DescribeAccessPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspolicyresponse"></a>
<a id="schema_DescribeAccessPolicyResponse"></a>
<a id="tocSdescribeaccesspolicyresponse"></a>
<a id="tocsdescribeaccesspolicyresponse"></a>

```json
{
  "accessPolicyId": {},
  "accessPolicyArn": {},
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": {},
  "accessPolicyCreationDate": {},
  "accessPolicyLastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicyId|object|true|none|none|
|accessPolicyArn|object|true|none|none|
|accessPolicyIdentity|object|true|none|none|
|accessPolicyResource|object|true|none|none|
|accessPolicyPermission|object|true|none|none|
|accessPolicyCreationDate|object|true|none|none|
|accessPolicyLastUpdateDate|object|true|none|none|

<h2 id="tocS_DescribeAssetResponse">DescribeAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetresponse"></a>
<a id="schema_DescribeAssetResponse"></a>
<a id="tocSdescribeassetresponse"></a>
<a id="tocsdescribeassetresponse"></a>

```json
{
  "assetId": {},
  "assetArn": {},
  "assetName": {},
  "assetModelId": {},
  "assetProperties": {},
  "assetHierarchies": {},
  "assetCompositeModels": {},
  "assetCreationDate": {},
  "assetLastUpdateDate": {},
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  },
  "assetDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|true|none|none|
|assetArn|object|true|none|none|
|assetName|object|true|none|none|
|assetModelId|object|true|none|none|
|assetProperties|object|true|none|none|
|assetHierarchies|object|true|none|none|
|assetCompositeModels|object|false|none|none|
|assetCreationDate|object|true|none|none|
|assetLastUpdateDate|object|true|none|none|
|assetStatus|object|true|none|none|
|assetDescription|object|false|none|none|

<h2 id="tocS_DescribeAssetModelResponse">DescribeAssetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetmodelresponse"></a>
<a id="schema_DescribeAssetModelResponse"></a>
<a id="tocSdescribeassetmodelresponse"></a>
<a id="tocsdescribeassetmodelresponse"></a>

```json
{
  "assetModelId": {},
  "assetModelArn": {},
  "assetModelName": {},
  "assetModelDescription": {},
  "assetModelProperties": {},
  "assetModelHierarchies": {},
  "assetModelCompositeModels": {},
  "assetModelCreationDate": {},
  "assetModelLastUpdateDate": {},
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelId|object|true|none|none|
|assetModelArn|object|true|none|none|
|assetModelName|object|true|none|none|
|assetModelDescription|object|true|none|none|
|assetModelProperties|object|true|none|none|
|assetModelHierarchies|object|true|none|none|
|assetModelCompositeModels|object|false|none|none|
|assetModelCreationDate|object|true|none|none|
|assetModelLastUpdateDate|object|true|none|none|
|assetModelStatus|object|true|none|none|

<h2 id="tocS_DescribeAssetPropertyResponse">DescribeAssetPropertyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetpropertyresponse"></a>
<a id="schema_DescribeAssetPropertyResponse"></a>
<a id="tocSdescribeassetpropertyresponse"></a>
<a id="tocsdescribeassetpropertyresponse"></a>

```json
{
  "assetId": {},
  "assetName": {},
  "assetModelId": {},
  "assetProperty": {
    "id": {},
    "name": {},
    "alias": {},
    "notification": {
      "topic": {},
      "state": {}
    },
    "dataType": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    }
  },
  "compositeModel": {
    "name": {},
    "type": {},
    "assetProperty": {
      "id": {},
      "name": {},
      "alias": {},
      "notification": {
        "topic": {},
        "state": {}
      },
      "dataType": {},
      "unit": {},
      "type": {
        "attribute": {
          "defaultValue": {}
        },
        "measurement": {
          "processingConfig": {
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "transform": {
          "expression": {},
          "variables": {},
          "processingConfig": {
            "computeLocation": {},
            "forwardingConfig": {
              "state": {}
            }
          }
        },
        "metric": {
          "expression": {},
          "variables": {},
          "window": {
            "tumbling": {
              "interval": {},
              "offset": {}
            }
          },
          "processingConfig": {
            "computeLocation": {}
          }
        }
      }
    },
    "id": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|true|none|none|
|assetName|object|true|none|none|
|assetModelId|object|true|none|none|
|assetProperty|object|false|none|none|
|compositeModel|object|false|none|none|

<h2 id="tocS_DescribeBulkImportJobResponse">DescribeBulkImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebulkimportjobresponse"></a>
<a id="schema_DescribeBulkImportJobResponse"></a>
<a id="tocSdescribebulkimportjobresponse"></a>
<a id="tocsdescribebulkimportjobresponse"></a>

```json
{
  "jobId": {},
  "jobName": {},
  "jobStatus": {},
  "jobRoleArn": {},
  "files": {},
  "errorReportLocation": {
    "bucket": {},
    "prefix": {}
  },
  "jobConfiguration": {
    "fileFormat": {
      "csv": {
        "columnNames": {}
      }
    }
  },
  "jobCreationDate": {},
  "jobLastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|jobName|object|true|none|none|
|jobStatus|object|true|none|none|
|jobRoleArn|object|true|none|none|
|files|object|true|none|none|
|errorReportLocation|object|true|none|none|
|jobConfiguration|object|true|none|none|
|jobCreationDate|object|true|none|none|
|jobLastUpdateDate|object|true|none|none|

<h2 id="tocS_DescribeDashboardResponse">DescribeDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedashboardresponse"></a>
<a id="schema_DescribeDashboardResponse"></a>
<a id="tocSdescribedashboardresponse"></a>
<a id="tocsdescribedashboardresponse"></a>

```json
{
  "dashboardId": {},
  "dashboardArn": {},
  "dashboardName": {},
  "projectId": {},
  "dashboardDescription": {},
  "dashboardDefinition": {},
  "dashboardCreationDate": {},
  "dashboardLastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboardId|object|true|none|none|
|dashboardArn|object|true|none|none|
|dashboardName|object|true|none|none|
|projectId|object|true|none|none|
|dashboardDescription|object|false|none|none|
|dashboardDefinition|object|true|none|none|
|dashboardCreationDate|object|true|none|none|
|dashboardLastUpdateDate|object|true|none|none|

<h2 id="tocS_DescribeDefaultEncryptionConfigurationResponse">DescribeDefaultEncryptionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedefaultencryptionconfigurationresponse"></a>
<a id="schema_DescribeDefaultEncryptionConfigurationResponse"></a>
<a id="tocSdescribedefaultencryptionconfigurationresponse"></a>
<a id="tocsdescribedefaultencryptionconfigurationresponse"></a>

```json
{
  "encryptionType": {},
  "kmsKeyArn": {},
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|object|true|none|none|
|kmsKeyArn|object|false|none|none|
|configurationStatus|object|true|none|none|

<h2 id="tocS_DescribeGatewayResponse">DescribeGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayresponse"></a>
<a id="schema_DescribeGatewayResponse"></a>
<a id="tocSdescribegatewayresponse"></a>
<a id="tocsdescribegatewayresponse"></a>

```json
{
  "gatewayId": {},
  "gatewayName": {},
  "gatewayArn": {},
  "gatewayPlatform": {
    "greengrass": {
      "groupArn": {}
    },
    "greengrassV2": {
      "coreDeviceThingName": {}
    }
  },
  "gatewayCapabilitySummaries": {},
  "creationDate": {},
  "lastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayId|object|true|none|none|
|gatewayName|object|true|none|none|
|gatewayArn|object|true|none|none|
|gatewayPlatform|object|false|none|none|
|gatewayCapabilitySummaries|object|true|none|none|
|creationDate|object|true|none|none|
|lastUpdateDate|object|true|none|none|

<h2 id="tocS_DescribeGatewayCapabilityConfigurationResponse">DescribeGatewayCapabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewaycapabilityconfigurationresponse"></a>
<a id="schema_DescribeGatewayCapabilityConfigurationResponse"></a>
<a id="tocSdescribegatewaycapabilityconfigurationresponse"></a>
<a id="tocsdescribegatewaycapabilityconfigurationresponse"></a>

```json
{
  "gatewayId": {},
  "capabilityNamespace": {},
  "capabilityConfiguration": {},
  "capabilitySyncStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayId|object|true|none|none|
|capabilityNamespace|object|true|none|none|
|capabilityConfiguration|object|true|none|none|
|capabilitySyncStatus|object|true|none|none|

<h2 id="tocS_DescribeLoggingOptionsResponse">DescribeLoggingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsresponse"></a>
<a id="schema_DescribeLoggingOptionsResponse"></a>
<a id="tocSdescribeloggingoptionsresponse"></a>
<a id="tocsdescribeloggingoptionsresponse"></a>

```json
{
  "loggingOptions": {
    "level": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|true|none|none|

<h2 id="tocS_DescribePortalResponse">DescribePortalResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportalresponse"></a>
<a id="schema_DescribePortalResponse"></a>
<a id="tocSdescribeportalresponse"></a>
<a id="tocsdescribeportalresponse"></a>

```json
{
  "portalId": {},
  "portalArn": {},
  "portalName": {},
  "portalDescription": {},
  "portalClientId": {},
  "portalStartUrl": {},
  "portalContactEmail": {},
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "portalCreationDate": {},
  "portalLastUpdateDate": {},
  "portalLogoImageLocation": {
    "id": {},
    "url": {}
  },
  "roleArn": {},
  "portalAuthMode": {},
  "notificationSenderEmail": {},
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalId|object|true|none|none|
|portalArn|object|true|none|none|
|portalName|object|true|none|none|
|portalDescription|object|false|none|none|
|portalClientId|object|true|none|none|
|portalStartUrl|object|true|none|none|
|portalContactEmail|object|true|none|none|
|portalStatus|object|true|none|none|
|portalCreationDate|object|true|none|none|
|portalLastUpdateDate|object|true|none|none|
|portalLogoImageLocation|object|false|none|none|
|roleArn|object|false|none|none|
|portalAuthMode|object|false|none|none|
|notificationSenderEmail|object|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_DescribeProjectResponse">DescribeProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresponse"></a>
<a id="schema_DescribeProjectResponse"></a>
<a id="tocSdescribeprojectresponse"></a>
<a id="tocsdescribeprojectresponse"></a>

```json
{
  "projectId": {},
  "projectArn": {},
  "projectName": {},
  "portalId": {},
  "projectDescription": {},
  "projectCreationDate": {},
  "projectLastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|projectArn|object|true|none|none|
|projectName|object|true|none|none|
|portalId|object|true|none|none|
|projectDescription|object|false|none|none|
|projectCreationDate|object|true|none|none|
|projectLastUpdateDate|object|true|none|none|

<h2 id="tocS_DescribeStorageConfigurationResponse">DescribeStorageConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribestorageconfigurationresponse"></a>
<a id="schema_DescribeStorageConfigurationResponse"></a>
<a id="tocSdescribestorageconfigurationresponse"></a>
<a id="tocsdescribestorageconfigurationresponse"></a>

```json
{
  "storageType": {},
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": {},
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  },
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  },
  "lastUpdateDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|object|true|none|none|
|multiLayerStorage|object|false|none|none|
|disassociatedDataStorage|object|false|none|none|
|retentionPeriod|object|false|none|none|
|configurationStatus|[ConfigurationStatus](#schemaconfigurationstatus)|true|none|Contains current status information for the configuration.|
|lastUpdateDate|object|false|none|none|

<h2 id="tocS_DescribeTimeSeriesResponse">DescribeTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimeseriesresponse"></a>
<a id="schema_DescribeTimeSeriesResponse"></a>
<a id="tocSdescribetimeseriesresponse"></a>
<a id="tocsdescribetimeseriesresponse"></a>

```json
{
  "assetId": {},
  "propertyId": {},
  "alias": {},
  "timeSeriesId": {},
  "dataType": {},
  "dataTypeSpec": {},
  "timeSeriesCreationDate": {},
  "timeSeriesLastUpdateDate": {},
  "timeSeriesArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|alias|object|false|none|none|
|timeSeriesId|object|true|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|timeSeriesCreationDate|object|true|none|none|
|timeSeriesLastUpdateDate|object|true|none|none|
|timeSeriesArn|object|true|none|none|

<h2 id="tocS_GetAssetPropertyAggregatesResponse">GetAssetPropertyAggregatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyaggregatesresponse"></a>
<a id="schema_GetAssetPropertyAggregatesResponse"></a>
<a id="tocSgetassetpropertyaggregatesresponse"></a>
<a id="tocsgetassetpropertyaggregatesresponse"></a>

```json
{
  "aggregatedValues": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregatedValues|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_AggregateType">AggregateType</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatetype"></a>
<a id="schema_AggregateType"></a>
<a id="tocSaggregatetype"></a>
<a id="tocsaggregatetype"></a>

```json
"AVERAGE"
```

<h2 id="tocS_Quality">Quality</h2>
<!-- backwards compatibility -->
<a id="schemaquality"></a>
<a id="schema_Quality"></a>
<a id="tocSquality"></a>
<a id="tocsquality"></a>

```json
"GOOD"
```

<h2 id="tocS_GetAssetPropertyValueResponse">GetAssetPropertyValueResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyvalueresponse"></a>
<a id="schema_GetAssetPropertyValueResponse"></a>
<a id="tocSgetassetpropertyvalueresponse"></a>
<a id="tocsgetassetpropertyvalueresponse"></a>

```json
{
  "propertyValue": {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyValue|object|false|none|none|

<h2 id="tocS_GetAssetPropertyValueHistoryResponse">GetAssetPropertyValueHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyvaluehistoryresponse"></a>
<a id="schema_GetAssetPropertyValueHistoryResponse"></a>
<a id="tocSgetassetpropertyvaluehistoryresponse"></a>
<a id="tocsgetassetpropertyvaluehistoryresponse"></a>

```json
{
  "assetPropertyValueHistory": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetPropertyValueHistory|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetInterpolatedAssetPropertyValuesResponse">GetInterpolatedAssetPropertyValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinterpolatedassetpropertyvaluesresponse"></a>
<a id="schema_GetInterpolatedAssetPropertyValuesResponse"></a>
<a id="tocSgetinterpolatedassetpropertyvaluesresponse"></a>
<a id="tocsgetinterpolatedassetpropertyvaluesresponse"></a>

```json
{
  "interpolatedAssetPropertyValues": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interpolatedAssetPropertyValues|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAccessPoliciesResponse">ListAccessPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspoliciesresponse"></a>
<a id="schema_ListAccessPoliciesResponse"></a>
<a id="tocSlistaccesspoliciesresponse"></a>
<a id="tocslistaccesspoliciesresponse"></a>

```json
{
  "accessPolicySummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicySummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssetModelPropertiesResponse">ListAssetModelPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetmodelpropertiesresponse"></a>
<a id="schema_ListAssetModelPropertiesResponse"></a>
<a id="tocSlistassetmodelpropertiesresponse"></a>
<a id="tocslistassetmodelpropertiesresponse"></a>

```json
{
  "assetModelPropertySummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelPropertySummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssetModelsResponse">ListAssetModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetmodelsresponse"></a>
<a id="schema_ListAssetModelsResponse"></a>
<a id="tocSlistassetmodelsresponse"></a>
<a id="tocslistassetmodelsresponse"></a>

```json
{
  "assetModelSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssetPropertiesResponse">ListAssetPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetpropertiesresponse"></a>
<a id="schema_ListAssetPropertiesResponse"></a>
<a id="tocSlistassetpropertiesresponse"></a>
<a id="tocslistassetpropertiesresponse"></a>

```json
{
  "assetPropertySummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetPropertySummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssetRelationshipsResponse">ListAssetRelationshipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetrelationshipsresponse"></a>
<a id="schema_ListAssetRelationshipsResponse"></a>
<a id="tocSlistassetrelationshipsresponse"></a>
<a id="tocslistassetrelationshipsresponse"></a>

```json
{
  "assetRelationshipSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetRelationshipSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssetsResponse">ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsresponse"></a>
<a id="schema_ListAssetsResponse"></a>
<a id="tocSlistassetsresponse"></a>
<a id="tocslistassetsresponse"></a>

```json
{
  "assetSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedAssetsResponse">ListAssociatedAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedassetsresponse"></a>
<a id="schema_ListAssociatedAssetsResponse"></a>
<a id="tocSlistassociatedassetsresponse"></a>
<a id="tocslistassociatedassetsresponse"></a>

```json
{
  "assetSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBulkImportJobsResponse">ListBulkImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkimportjobsresponse"></a>
<a id="schema_ListBulkImportJobsResponse"></a>
<a id="tocSlistbulkimportjobsresponse"></a>
<a id="tocslistbulkimportjobsresponse"></a>

```json
{
  "jobSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDashboardsResponse">ListDashboardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdashboardsresponse"></a>
<a id="schema_ListDashboardsResponse"></a>
<a id="tocSlistdashboardsresponse"></a>
<a id="tocslistdashboardsresponse"></a>

```json
{
  "dashboardSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboardSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListGatewaysResponse">ListGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysresponse"></a>
<a id="schema_ListGatewaysResponse"></a>
<a id="tocSlistgatewaysresponse"></a>
<a id="tocslistgatewaysresponse"></a>

```json
{
  "gatewaySummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewaySummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPortalsResponse">ListPortalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistportalsresponse"></a>
<a id="schema_ListPortalsResponse"></a>
<a id="tocSlistportalsresponse"></a>
<a id="tocslistportalsresponse"></a>

```json
{
  "portalSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectAssetsResponse">ListProjectAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectassetsresponse"></a>
<a id="schema_ListProjectAssetsResponse"></a>
<a id="tocSlistprojectassetsresponse"></a>
<a id="tocslistprojectassetsresponse"></a>

```json
{
  "assetIds": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetIds|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsResponse">ListProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresponse"></a>
<a id="schema_ListProjectsResponse"></a>
<a id="tocSlistprojectsresponse"></a>
<a id="tocslistprojectsresponse"></a>

```json
{
  "projectSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_ListTimeSeriesResponse">ListTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttimeseriesresponse"></a>
<a id="schema_ListTimeSeriesResponse"></a>
<a id="tocSlisttimeseriesresponse"></a>
<a id="tocslisttimeseriesresponse"></a>

```json
{
  "TimeSeriesSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesSummaries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_PutDefaultEncryptionConfigurationResponse">PutDefaultEncryptionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdefaultencryptionconfigurationresponse"></a>
<a id="schema_PutDefaultEncryptionConfigurationResponse"></a>
<a id="tocSputdefaultencryptionconfigurationresponse"></a>
<a id="tocsputdefaultencryptionconfigurationresponse"></a>

```json
{
  "encryptionType": {},
  "kmsKeyArn": {},
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|object|true|none|none|
|kmsKeyArn|object|false|none|none|
|configurationStatus|object|true|none|none|

<h2 id="tocS_PutLoggingOptionsResponse">PutLoggingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingoptionsresponse"></a>
<a id="schema_PutLoggingOptionsResponse"></a>
<a id="tocSputloggingoptionsresponse"></a>
<a id="tocsputloggingoptionsresponse"></a>

```json
{}
```

<h2 id="tocS_LoggingLevel">LoggingLevel</h2>
<!-- backwards compatibility -->
<a id="schemalogginglevel"></a>
<a id="schema_LoggingLevel"></a>
<a id="tocSlogginglevel"></a>
<a id="tocslogginglevel"></a>

```json
"ERROR"
```

<h2 id="tocS_PutStorageConfigurationResponse">PutStorageConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputstorageconfigurationresponse"></a>
<a id="schema_PutStorageConfigurationResponse"></a>
<a id="tocSputstorageconfigurationresponse"></a>
<a id="tocsputstorageconfigurationresponse"></a>

```json
{
  "storageType": {},
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": {},
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  },
  "configurationStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|object|true|none|none|
|multiLayerStorage|object|false|none|none|
|disassociatedDataStorage|object|false|none|none|
|retentionPeriod|[RetentionPeriod](#schemaretentionperiod)|false|none|How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.|
|configurationStatus|[ConfigurationStatus](#schemaconfigurationstatus)|true|none|Contains current status information for the configuration.|

<h2 id="tocS_CustomerManagedS3Storage">CustomerManagedS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanageds3storage"></a>
<a id="schema_CustomerManagedS3Storage"></a>
<a id="tocScustomermanageds3storage"></a>
<a id="tocscustomermanageds3storage"></a>

```json
{
  "s3ResourceArn": {},
  "roleArn": {}
}
```

Contains information about a customer managed Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3ResourceArn|object|true|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_NumberOfDays">NumberOfDays</h2>
<!-- backwards compatibility -->
<a id="schemanumberofdays"></a>
<a id="schema_NumberOfDays"></a>
<a id="tocSnumberofdays"></a>
<a id="tocsnumberofdays"></a>

```json
30
```

<h2 id="tocS_Unlimited">Unlimited</h2>
<!-- backwards compatibility -->
<a id="schemaunlimited"></a>
<a id="schema_Unlimited"></a>
<a id="tocSunlimited"></a>
<a id="tocsunlimited"></a>

```json
true
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateAccessPolicyResponse">UpdateAccessPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccesspolicyresponse"></a>
<a id="schema_UpdateAccessPolicyResponse"></a>
<a id="tocSupdateaccesspolicyresponse"></a>
<a id="tocsupdateaccesspolicyresponse"></a>

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
  "assetStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetStatus|object|true|none|none|

<h2 id="tocS_UpdateAssetModelResponse">UpdateAssetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetmodelresponse"></a>
<a id="schema_UpdateAssetModelResponse"></a>
<a id="tocSupdateassetmodelresponse"></a>
<a id="tocsupdateassetmodelresponse"></a>

```json
{
  "assetModelStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelStatus|object|true|none|none|

<h2 id="tocS_AssetModelProperty">AssetModelProperty</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelproperty"></a>
<a id="schema_AssetModelProperty"></a>
<a id="tocSassetmodelproperty"></a>
<a id="tocsassetmodelproperty"></a>

```json
{
  "id": {},
  "name": {},
  "dataType": {},
  "dataTypeSpec": {},
  "unit": {},
  "type": {
    "attribute": {
      "defaultValue": {}
    },
    "measurement": {
      "processingConfig": {
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "transform": {
      "expression": {},
      "variables": {},
      "processingConfig": {
        "computeLocation": {},
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "metric": {
      "expression": {},
      "variables": {},
      "window": {
        "tumbling": {
          "interval": {},
          "offset": {}
        }
      },
      "processingConfig": {
        "computeLocation": {}
      }
    }
  }
}
```

Contains information about an asset model property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|true|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|unit|object|false|none|none|
|type|object|true|none|none|

<h2 id="tocS_AssetModelHierarchy">AssetModelHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelhierarchy"></a>
<a id="schema_AssetModelHierarchy"></a>
<a id="tocSassetmodelhierarchy"></a>
<a id="tocsassetmodelhierarchy"></a>

```json
{
  "id": {},
  "name": {},
  "childAssetModelId": {}
}
```

Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|true|none|none|
|childAssetModelId|object|true|none|none|

<h2 id="tocS_AssetModelCompositeModel">AssetModelCompositeModel</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelcompositemodel"></a>
<a id="schema_AssetModelCompositeModel"></a>
<a id="tocSassetmodelcompositemodel"></a>
<a id="tocsassetmodelcompositemodel"></a>

```json
{
  "name": {},
  "description": {},
  "type": {},
  "properties": null,
  "id": {}
}
```

Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|properties|object|false|none|The asset property definitions for this composite model.|
|id|object|false|none|none|

<h2 id="tocS_UpdateDashboardResponse">UpdateDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedashboardresponse"></a>
<a id="schema_UpdateDashboardResponse"></a>
<a id="tocSupdatedashboardresponse"></a>
<a id="tocsupdatedashboardresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGatewayCapabilityConfigurationResponse">UpdateGatewayCapabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaycapabilityconfigurationresponse"></a>
<a id="schema_UpdateGatewayCapabilityConfigurationResponse"></a>
<a id="tocSupdategatewaycapabilityconfigurationresponse"></a>
<a id="tocsupdategatewaycapabilityconfigurationresponse"></a>

```json
{
  "capabilityNamespace": {},
  "capabilitySyncStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilityNamespace|object|true|none|none|
|capabilitySyncStatus|object|true|none|none|

<h2 id="tocS_UpdatePortalResponse">UpdatePortalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportalresponse"></a>
<a id="schema_UpdatePortalResponse"></a>
<a id="tocSupdateportalresponse"></a>
<a id="tocsupdateportalresponse"></a>

```json
{
  "portalStatus": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalStatus|object|true|none|none|

<h2 id="tocS_ImageFile">ImageFile</h2>
<!-- backwards compatibility -->
<a id="schemaimagefile"></a>
<a id="schema_ImageFile"></a>
<a id="tocSimagefile"></a>
<a id="tocsimagefile"></a>

```json
{
  "data": {},
  "type": {}
}
```

Contains an image file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_UpdateProjectResponse">UpdateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresponse"></a>
<a id="schema_UpdateProjectResponse"></a>
<a id="tocSupdateprojectresponse"></a>
<a id="tocsupdateprojectresponse"></a>

```json
{}
```

<h2 id="tocS_AccessPolicySummary">AccessPolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicysummary"></a>
<a id="schema_AccessPolicySummary"></a>
<a id="tocSaccesspolicysummary"></a>
<a id="tocsaccesspolicysummary"></a>

```json
{
  "id": {},
  "identity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "resource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "permission": {},
  "creationDate": {},
  "lastUpdateDate": {}
}
```

Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|identity|object|true|none|none|
|resource|object|true|none|none|
|permission|object|true|none|none|
|creationDate|object|false|none|none|
|lastUpdateDate|object|false|none|none|

<h2 id="tocS_AccessPolicySummaries">AccessPolicySummaries</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicysummaries"></a>
<a id="schema_AccessPolicySummaries"></a>
<a id="tocSaccesspolicysummaries"></a>
<a id="tocsaccesspolicysummaries"></a>

```json
[
  {
    "id": {},
    "identity": {
      "user": {
        "id": {}
      },
      "group": {
        "id": {}
      },
      "iamUser": {
        "arn": {}
      },
      "iamRole": {
        "arn": {}
      }
    },
    "resource": {
      "portal": {
        "id": {}
      },
      "project": {
        "id": {}
      }
    },
    "permission": {},
    "creationDate": {},
    "lastUpdateDate": {}
  }
]
```

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "user": {
    "id": {}
  },
  "group": {
    "id": {}
  },
  "iamUser": {
    "arn": {}
  },
  "iamRole": {
    "arn": {}
  }
}
```

<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|group|object|false|none|none|
|iamUser|object|false|none|none|
|iamRole|object|false|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "portal": {
    "id": {}
  },
  "project": {
    "id": {}
  }
}
```

Contains an IoT SiteWise Monitor resource ID for a portal or project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portal|object|false|none|none|
|project|object|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"ADMINISTRATOR"
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

<h2 id="tocS_AggregateTypes">AggregateTypes</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatetypes"></a>
<a id="schema_AggregateTypes"></a>
<a id="tocSaggregatetypes"></a>
<a id="tocsaggregatetypes"></a>

```json
[
  "AVERAGE"
]
```

<h2 id="tocS_AggregatedDoubleValue">AggregatedDoubleValue</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateddoublevalue"></a>
<a id="schema_AggregatedDoubleValue"></a>
<a id="tocSaggregateddoublevalue"></a>
<a id="tocsaggregateddoublevalue"></a>

```json
0
```

<h2 id="tocS_Aggregates">Aggregates</h2>
<!-- backwards compatibility -->
<a id="schemaaggregates"></a>
<a id="schema_Aggregates"></a>
<a id="tocSaggregates"></a>
<a id="tocsaggregates"></a>

```json
{
  "average": {},
  "count": {},
  "maximum": {},
  "minimum": {},
  "sum": {},
  "standardDeviation": {}
}
```

Contains the (pre-calculated) aggregate values for an asset property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|object|false|none|none|
|count|object|false|none|none|
|maximum|object|false|none|none|
|minimum|object|false|none|none|
|sum|object|false|none|none|
|standardDeviation|object|false|none|none|

<h2 id="tocS_AggregatedValue">AggregatedValue</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedvalue"></a>
<a id="schema_AggregatedValue"></a>
<a id="tocSaggregatedvalue"></a>
<a id="tocsaggregatedvalue"></a>

```json
{
  "timestamp": {},
  "quality": {},
  "value": {
    "average": {},
    "count": {},
    "maximum": {},
    "minimum": {},
    "sum": {},
    "standardDeviation": {}
  }
}
```

Contains aggregated asset property values (for example, average, minimum, and maximum).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|object|true|none|none|
|quality|object|false|none|none|
|value|object|true|none|none|

<h2 id="tocS_AggregatedValues">AggregatedValues</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedvalues"></a>
<a id="schema_AggregatedValues"></a>
<a id="tocSaggregatedvalues"></a>
<a id="tocsaggregatedvalues"></a>

```json
[
  {
    "timestamp": {},
    "quality": {},
    "value": {
      "average": {},
      "count": {},
      "maximum": {},
      "minimum": {},
      "sum": {},
      "standardDeviation": {}
    }
  }
]
```

<h2 id="tocS_Alarms">Alarms</h2>
<!-- backwards compatibility -->
<a id="schemaalarms"></a>
<a id="schema_Alarms"></a>
<a id="tocSalarms"></a>
<a id="tocsalarms"></a>

```json
{
  "alarmRoleArn": {},
  "notificationLambdaArn": {}
}
```

Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmRoleArn|object|true|none|none|
|notificationLambdaArn|object|false|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

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

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_AssetCompositeModel">AssetCompositeModel</h2>
<!-- backwards compatibility -->
<a id="schemaassetcompositemodel"></a>
<a id="schema_AssetCompositeModel"></a>
<a id="tocSassetcompositemodel"></a>
<a id="tocsassetcompositemodel"></a>

```json
{
  "name": {},
  "description": {},
  "type": {},
  "properties": null,
  "id": {}
}
```

Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|properties|object|true|none|The asset properties that this composite model defines.|
|id|object|false|none|none|

<h2 id="tocS_AssetCompositeModels">AssetCompositeModels</h2>
<!-- backwards compatibility -->
<a id="schemaassetcompositemodels"></a>
<a id="schema_AssetCompositeModels"></a>
<a id="tocSassetcompositemodels"></a>
<a id="tocsassetcompositemodels"></a>

```json
[
  {
    "name": {},
    "description": {},
    "type": {},
    "properties": null,
    "id": {}
  }
]
```

<h2 id="tocS_AssetErrorCode">AssetErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaasseterrorcode"></a>
<a id="schema_AssetErrorCode"></a>
<a id="tocSasseterrorcode"></a>
<a id="tocsasseterrorcode"></a>

```json
"INTERNAL_FAILURE"
```

<h2 id="tocS_AssetErrorMessage">AssetErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaasseterrormessage"></a>
<a id="schema_AssetErrorMessage"></a>
<a id="tocSasseterrormessage"></a>
<a id="tocsasseterrormessage"></a>

```json
"string"
```

<h2 id="tocS_AssetErrorDetails">AssetErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaasseterrordetails"></a>
<a id="schema_AssetErrorDetails"></a>
<a id="tocSasseterrordetails"></a>
<a id="tocsasseterrordetails"></a>

```json
{
  "assetId": {},
  "code": {},
  "message": {}
}
```

Contains error details for the requested associate project asset action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|true|none|none|
|code|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_AssetHierarchy">AssetHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemaassethierarchy"></a>
<a id="schema_AssetHierarchy"></a>
<a id="tocSassethierarchy"></a>
<a id="tocsassethierarchy"></a>

```json
{
  "id": {},
  "name": {}
}
```

Describes an asset hierarchy that contains a hierarchy's name and ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_AssetHierarchies">AssetHierarchies</h2>
<!-- backwards compatibility -->
<a id="schemaassethierarchies"></a>
<a id="schema_AssetHierarchies"></a>
<a id="tocSassethierarchies"></a>
<a id="tocsassethierarchies"></a>

```json
[
  {
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS_AssetHierarchyInfo">AssetHierarchyInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassethierarchyinfo"></a>
<a id="schema_AssetHierarchyInfo"></a>
<a id="tocSassethierarchyinfo"></a>
<a id="tocsassethierarchyinfo"></a>

```json
{
  "parentAssetId": {},
  "childAssetId": {}
}
```

Contains information about a parent asset and a child asset that are related through an asset hierarchy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentAssetId|object|false|none|none|
|childAssetId|object|false|none|none|

<h2 id="tocS_AssetIDs">AssetIDs</h2>
<!-- backwards compatibility -->
<a id="schemaassetids"></a>
<a id="schema_AssetIDs"></a>
<a id="tocSassetids"></a>
<a id="tocsassetids"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_AssetModelCompositeModelDefinitions">AssetModelCompositeModelDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelcompositemodeldefinitions"></a>
<a id="schema_AssetModelCompositeModelDefinitions"></a>
<a id="tocSassetmodelcompositemodeldefinitions"></a>
<a id="tocsassetmodelcompositemodeldefinitions"></a>

```json
[
  {
    "name": {},
    "description": {},
    "type": {},
    "properties": null
  }
]
```

<h2 id="tocS_AssetModelCompositeModels">AssetModelCompositeModels</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelcompositemodels"></a>
<a id="schema_AssetModelCompositeModels"></a>
<a id="tocSassetmodelcompositemodels"></a>
<a id="tocsassetmodelcompositemodels"></a>

```json
[
  {
    "name": {},
    "description": {},
    "type": {},
    "properties": null,
    "id": {}
  }
]
```

<h2 id="tocS_AssetModelHierarchies">AssetModelHierarchies</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelhierarchies"></a>
<a id="schema_AssetModelHierarchies"></a>
<a id="tocSassetmodelhierarchies"></a>
<a id="tocsassetmodelhierarchies"></a>

```json
[
  {
    "id": {},
    "name": {},
    "childAssetModelId": {}
  }
]
```

<h2 id="tocS_AssetModelHierarchyDefinitions">AssetModelHierarchyDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelhierarchydefinitions"></a>
<a id="schema_AssetModelHierarchyDefinitions"></a>
<a id="tocSassetmodelhierarchydefinitions"></a>
<a id="tocsassetmodelhierarchydefinitions"></a>

```json
[
  {
    "name": {},
    "childAssetModelId": {}
  }
]
```

<h2 id="tocS_AssetModelProperties">AssetModelProperties</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelproperties"></a>
<a id="schema_AssetModelProperties"></a>
<a id="tocSassetmodelproperties"></a>
<a id="tocsassetmodelproperties"></a>

```json
[
  {
    "id": {},
    "name": {},
    "dataType": {},
    "dataTypeSpec": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_PropertyDataType">PropertyDataType</h2>
<!-- backwards compatibility -->
<a id="schemapropertydatatype"></a>
<a id="schema_PropertyDataType"></a>
<a id="tocSpropertydatatype"></a>
<a id="tocspropertydatatype"></a>

```json
"STRING"
```

<h2 id="tocS_PropertyUnit">PropertyUnit</h2>
<!-- backwards compatibility -->
<a id="schemapropertyunit"></a>
<a id="schema_PropertyUnit"></a>
<a id="tocSpropertyunit"></a>
<a id="tocspropertyunit"></a>

```json
"string"
```

<h2 id="tocS_PropertyType">PropertyType</h2>
<!-- backwards compatibility -->
<a id="schemapropertytype"></a>
<a id="schema_PropertyType"></a>
<a id="tocSpropertytype"></a>
<a id="tocspropertytype"></a>

```json
{
  "attribute": {
    "defaultValue": {}
  },
  "measurement": {
    "processingConfig": {
      "forwardingConfig": {
        "state": {}
      }
    }
  },
  "transform": {
    "expression": {},
    "variables": {},
    "processingConfig": {
      "computeLocation": {},
      "forwardingConfig": {
        "state": {}
      }
    }
  },
  "metric": {
    "expression": {},
    "variables": {},
    "window": {
      "tumbling": {
        "interval": {},
        "offset": {}
      }
    },
    "processingConfig": {
      "computeLocation": {}
    }
  }
}
```

Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|object|false|none|none|
|measurement|object|false|none|none|
|transform|object|false|none|none|
|metric|object|false|none|none|

<h2 id="tocS_AssetModelPropertyDefinitions">AssetModelPropertyDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelpropertydefinitions"></a>
<a id="schema_AssetModelPropertyDefinitions"></a>
<a id="tocSassetmodelpropertydefinitions"></a>
<a id="tocsassetmodelpropertydefinitions"></a>

```json
[
  {
    "name": {},
    "dataType": {},
    "dataTypeSpec": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_AssetModelPropertySummary">AssetModelPropertySummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelpropertysummary"></a>
<a id="schema_AssetModelPropertySummary"></a>
<a id="tocSassetmodelpropertysummary"></a>
<a id="tocsassetmodelpropertysummary"></a>

```json
{
  "id": {},
  "name": {},
  "dataType": {},
  "dataTypeSpec": {},
  "unit": {},
  "type": {
    "attribute": {
      "defaultValue": {}
    },
    "measurement": {
      "processingConfig": {
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "transform": {
      "expression": {},
      "variables": {},
      "processingConfig": {
        "computeLocation": {},
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "metric": {
      "expression": {},
      "variables": {},
      "window": {
        "tumbling": {
          "interval": {},
          "offset": {}
        }
      },
      "processingConfig": {
        "computeLocation": {}
      }
    }
  },
  "assetModelCompositeModelId": {}
}
```

Contains a summary of a property associated with a model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|true|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|unit|object|false|none|none|
|type|[PropertyType](#schemapropertytype)|true|none|Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.|
|assetModelCompositeModelId|object|false|none|none|

<h2 id="tocS_AssetModelPropertySummaries">AssetModelPropertySummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelpropertysummaries"></a>
<a id="schema_AssetModelPropertySummaries"></a>
<a id="tocSassetmodelpropertysummaries"></a>
<a id="tocsassetmodelpropertysummaries"></a>

```json
[
  {
    "id": {},
    "name": {},
    "dataType": {},
    "dataTypeSpec": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    },
    "assetModelCompositeModelId": {}
  }
]
```

<h2 id="tocS_AssetModelState">AssetModelState</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelstate"></a>
<a id="schema_AssetModelState"></a>
<a id="tocSassetmodelstate"></a>
<a id="tocsassetmodelstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
{
  "code": {},
  "message": {},
  "details": {}
}
```

Contains the details of an IoT SiteWise error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|
|message|object|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_AssetModelStatus">AssetModelStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelstatus"></a>
<a id="schema_AssetModelStatus"></a>
<a id="tocSassetmodelstatus"></a>
<a id="tocsassetmodelstatus"></a>

```json
{
  "state": {},
  "error": {
    "code": {},
    "message": {},
    "details": {}
  }
}
```

Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|error|object|false|none|none|

<h2 id="tocS_AssetModelSummary">AssetModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelsummary"></a>
<a id="schema_AssetModelSummary"></a>
<a id="tocSassetmodelsummary"></a>
<a id="tocsassetmodelsummary"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationDate": {},
  "lastUpdateDate": {},
  "status": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  }
}
```

Contains a summary of an asset model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|arn|object|true|none|none|
|name|object|true|none|none|
|description|object|true|none|none|
|creationDate|object|true|none|none|
|lastUpdateDate|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_AssetModelSummaries">AssetModelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassetmodelsummaries"></a>
<a id="schema_AssetModelSummaries"></a>
<a id="tocSassetmodelsummaries"></a>
<a id="tocsassetmodelsummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationDate": {},
    "lastUpdateDate": {},
    "status": {
      "state": {},
      "error": {
        "code": {},
        "message": {},
        "details": {}
      }
    }
  }
]
```

<h2 id="tocS_AssetProperty">AssetProperty</h2>
<!-- backwards compatibility -->
<a id="schemaassetproperty"></a>
<a id="schema_AssetProperty"></a>
<a id="tocSassetproperty"></a>
<a id="tocsassetproperty"></a>

```json
{
  "id": {},
  "name": {},
  "alias": {},
  "notification": {
    "topic": {},
    "state": {}
  },
  "dataType": {},
  "dataTypeSpec": {},
  "unit": {}
}
```

Contains asset property information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|alias|object|false|none|none|
|notification|object|false|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|unit|object|false|none|none|

<h2 id="tocS_AssetProperties">AssetProperties</h2>
<!-- backwards compatibility -->
<a id="schemaassetproperties"></a>
<a id="schema_AssetProperties"></a>
<a id="tocSassetproperties"></a>
<a id="tocsassetproperties"></a>

```json
[
  {
    "id": {},
    "name": {},
    "alias": {},
    "notification": {
      "topic": {},
      "state": {}
    },
    "dataType": {},
    "dataTypeSpec": {},
    "unit": {}
  }
]
```

<h2 id="tocS_PropertyAlias">PropertyAlias</h2>
<!-- backwards compatibility -->
<a id="schemapropertyalias"></a>
<a id="schema_PropertyAlias"></a>
<a id="tocSpropertyalias"></a>
<a id="tocspropertyalias"></a>

```json
"string"
```

<h2 id="tocS_PropertyNotification">PropertyNotification</h2>
<!-- backwards compatibility -->
<a id="schemapropertynotification"></a>
<a id="schema_PropertyNotification"></a>
<a id="tocSpropertynotification"></a>
<a id="tocspropertynotification"></a>

```json
{
  "topic": {},
  "state": {}
}
```

Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|object|true|none|none|
|state|object|true|none|none|

<h2 id="tocS_AssetPropertyAlias">AssetPropertyAlias</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyalias"></a>
<a id="schema_AssetPropertyAlias"></a>
<a id="tocSassetpropertyalias"></a>
<a id="tocsassetpropertyalias"></a>

```json
"string"
```

<h2 id="tocS_AssetPropertySummary">AssetPropertySummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertysummary"></a>
<a id="schema_AssetPropertySummary"></a>
<a id="tocSassetpropertysummary"></a>
<a id="tocsassetpropertysummary"></a>

```json
{
  "id": {},
  "alias": {},
  "unit": {},
  "notification": {
    "topic": {},
    "state": {}
  },
  "assetCompositeModelId": {}
}
```

Contains a summary of a property associated with an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|alias|object|false|none|none|
|unit|object|false|none|none|
|notification|[PropertyNotification](#schemapropertynotification)|false|none|Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.|
|assetCompositeModelId|object|false|none|none|

<h2 id="tocS_AssetPropertySummaries">AssetPropertySummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertysummaries"></a>
<a id="schema_AssetPropertySummaries"></a>
<a id="tocSassetpropertysummaries"></a>
<a id="tocsassetpropertysummaries"></a>

```json
[
  {
    "id": {},
    "alias": {},
    "unit": {},
    "notification": {
      "topic": {},
      "state": {}
    },
    "assetCompositeModelId": {}
  }
]
```

<h2 id="tocS_Variant">Variant</h2>
<!-- backwards compatibility -->
<a id="schemavariant"></a>
<a id="schema_Variant"></a>
<a id="tocSvariant"></a>
<a id="tocsvariant"></a>

```json
{
  "stringValue": {},
  "integerValue": {},
  "doubleValue": {},
  "booleanValue": {}
}
```

Contains an asset property value (of a single type only).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stringValue|object|false|none|none|
|integerValue|object|false|none|none|
|doubleValue|object|false|none|none|
|booleanValue|object|false|none|none|

<h2 id="tocS_TimeInNanos">TimeInNanos</h2>
<!-- backwards compatibility -->
<a id="schematimeinnanos"></a>
<a id="schema_TimeInNanos"></a>
<a id="tocStimeinnanos"></a>
<a id="tocstimeinnanos"></a>

```json
{
  "timeInSeconds": {},
  "offsetInNanos": {}
}
```

Contains a timestamp with optional nanosecond granularity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeInSeconds|object|true|none|none|
|offsetInNanos|object|false|none|none|

<h2 id="tocS_AssetPropertyValue">AssetPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyvalue"></a>
<a id="schema_AssetPropertyValue"></a>
<a id="tocSassetpropertyvalue"></a>
<a id="tocsassetpropertyvalue"></a>

```json
{
  "value": {
    "stringValue": {},
    "integerValue": {},
    "doubleValue": {},
    "booleanValue": {}
  },
  "timestamp": {
    "timeInSeconds": {},
    "offsetInNanos": {}
  },
  "quality": {}
}
```

Contains asset property value information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|timestamp|object|true|none|none|
|quality|object|false|none|none|

<h2 id="tocS_AssetPropertyValueHistory">AssetPropertyValueHistory</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyvaluehistory"></a>
<a id="schema_AssetPropertyValueHistory"></a>
<a id="tocSassetpropertyvaluehistory"></a>
<a id="tocsassetpropertyvaluehistory"></a>

```json
[
  {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
  }
]
```

<h2 id="tocS_AssetPropertyValues">AssetPropertyValues</h2>
<!-- backwards compatibility -->
<a id="schemaassetpropertyvalues"></a>
<a id="schema_AssetPropertyValues"></a>
<a id="tocSassetpropertyvalues"></a>
<a id="tocsassetpropertyvalues"></a>

```json
[
  {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
  }
]
```

<h2 id="tocS_AssetRelationshipSummary">AssetRelationshipSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetrelationshipsummary"></a>
<a id="schema_AssetRelationshipSummary"></a>
<a id="tocSassetrelationshipsummary"></a>
<a id="tocsassetrelationshipsummary"></a>

```json
{
  "hierarchyInfo": {
    "parentAssetId": {},
    "childAssetId": {}
  },
  "relationshipType": {}
}
```

Contains information about assets that are related to one another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hierarchyInfo|object|false|none|none|
|relationshipType|object|true|none|none|

<h2 id="tocS_AssetRelationshipSummaries">AssetRelationshipSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassetrelationshipsummaries"></a>
<a id="schema_AssetRelationshipSummaries"></a>
<a id="tocSassetrelationshipsummaries"></a>
<a id="tocsassetrelationshipsummaries"></a>

```json
[
  {
    "hierarchyInfo": {
      "parentAssetId": {},
      "childAssetId": {}
    },
    "relationshipType": {}
  }
]
```

<h2 id="tocS_AssetRelationshipType">AssetRelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemaassetrelationshiptype"></a>
<a id="schema_AssetRelationshipType"></a>
<a id="tocSassetrelationshiptype"></a>
<a id="tocsassetrelationshiptype"></a>

```json
"HIERARCHY"
```

<h2 id="tocS_AssetState">AssetState</h2>
<!-- backwards compatibility -->
<a id="schemaassetstate"></a>
<a id="schema_AssetState"></a>
<a id="tocSassetstate"></a>
<a id="tocsassetstate"></a>

```json
"CREATING"
```

<h2 id="tocS_AssetStatus">AssetStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatus"></a>
<a id="schema_AssetStatus"></a>
<a id="tocSassetstatus"></a>
<a id="tocsassetstatus"></a>

```json
{
  "state": {},
  "error": {
    "code": {},
    "message": {},
    "details": {}
  }
}
```

Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|error|object|false|none|none|

<h2 id="tocS_AssetSummary">AssetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetsummary"></a>
<a id="schema_AssetSummary"></a>
<a id="tocSassetsummary"></a>
<a id="tocsassetsummary"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "assetModelId": {},
  "creationDate": {},
  "lastUpdateDate": {},
  "status": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  },
  "hierarchies": {},
  "description": {}
}
```

Contains a summary of an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|arn|object|true|none|none|
|name|object|true|none|none|
|assetModelId|object|true|none|none|
|creationDate|object|true|none|none|
|lastUpdateDate|object|true|none|none|
|status|object|true|none|none|
|hierarchies|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_AssetSummaries">AssetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassetsummaries"></a>
<a id="schema_AssetSummaries"></a>
<a id="tocSassetsummaries"></a>
<a id="tocsassetsummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "assetModelId": {},
    "creationDate": {},
    "lastUpdateDate": {},
    "status": {
      "state": {},
      "error": {
        "code": {},
        "message": {},
        "details": {}
      }
    },
    "hierarchies": {},
    "description": {}
  }
]
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_AssociateAssetsRequest">AssociateAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateassetsrequest"></a>
<a id="schema_AssociateAssetsRequest"></a>
<a id="tocSassociateassetsrequest"></a>
<a id="tocsassociateassetsrequest"></a>

```json
{
  "hierarchyId": {},
  "childAssetId": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hierarchyId|object|true|none|none|
|childAssetId|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_AssociateTimeSeriesToAssetPropertyRequest">AssociateTimeSeriesToAssetPropertyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetimeseriestoassetpropertyrequest"></a>
<a id="schema_AssociateTimeSeriesToAssetPropertyRequest"></a>
<a id="tocSassociatetimeseriestoassetpropertyrequest"></a>
<a id="tocsassociatetimeseriestoassetpropertyrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_AssociatedAssetsSummary">AssociatedAssetsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedassetssummary"></a>
<a id="schema_AssociatedAssetsSummary"></a>
<a id="tocSassociatedassetssummary"></a>
<a id="tocsassociatedassetssummary"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "assetModelId": {},
  "creationDate": {},
  "lastUpdateDate": {},
  "status": {
    "state": {},
    "error": {
      "code": {},
      "message": {},
      "details": {}
    }
  },
  "hierarchies": {},
  "description": {}
}
```

Contains a summary of an associated asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|arn|object|true|none|none|
|name|object|true|none|none|
|assetModelId|object|true|none|none|
|creationDate|object|true|none|none|
|lastUpdateDate|object|true|none|none|
|status|object|true|none|none|
|hierarchies|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_AssociatedAssetsSummaries">AssociatedAssetsSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedassetssummaries"></a>
<a id="schema_AssociatedAssetsSummaries"></a>
<a id="tocSassociatedassetssummaries"></a>
<a id="tocsassociatedassetssummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "assetModelId": {},
    "creationDate": {},
    "lastUpdateDate": {},
    "status": {
      "state": {},
      "error": {
        "code": {},
        "message": {},
        "details": {}
      }
    },
    "hierarchies": {},
    "description": {}
  }
]
```

<h2 id="tocS_DefaultValue">DefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvalue"></a>
<a id="schema_DefaultValue"></a>
<a id="tocSdefaultvalue"></a>
<a id="tocsdefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "defaultValue": {}
}
```

Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|object|false|none|none|

<h2 id="tocS_AuthMode">AuthMode</h2>
<!-- backwards compatibility -->
<a id="schemaauthmode"></a>
<a id="schema_AuthMode"></a>
<a id="tocSauthmode"></a>
<a id="tocsauthmode"></a>

```json
"IAM"
```

<h2 id="tocS_BatchAssociateProjectAssetsErrors">BatchAssociateProjectAssetsErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateprojectassetserrors"></a>
<a id="schema_BatchAssociateProjectAssetsErrors"></a>
<a id="tocSbatchassociateprojectassetserrors"></a>
<a id="tocsbatchassociateprojectassetserrors"></a>

```json
[
  {
    "assetId": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_IDs">IDs</h2>
<!-- backwards compatibility -->
<a id="schemaids"></a>
<a id="schema_IDs"></a>
<a id="tocSids"></a>
<a id="tocsids"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_BatchAssociateProjectAssetsRequest">BatchAssociateProjectAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateprojectassetsrequest"></a>
<a id="schema_BatchAssociateProjectAssetsRequest"></a>
<a id="tocSbatchassociateprojectassetsrequest"></a>
<a id="tocsbatchassociateprojectassetsrequest"></a>

```json
{
  "assetIds": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetIds|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_BatchDisassociateProjectAssetsErrors">BatchDisassociateProjectAssetsErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateprojectassetserrors"></a>
<a id="schema_BatchDisassociateProjectAssetsErrors"></a>
<a id="tocSbatchdisassociateprojectassetserrors"></a>
<a id="tocsbatchdisassociateprojectassetserrors"></a>

```json
[
  {
    "assetId": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_BatchDisassociateProjectAssetsRequest">BatchDisassociateProjectAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateprojectassetsrequest"></a>
<a id="schema_BatchDisassociateProjectAssetsRequest"></a>
<a id="tocSbatchdisassociateprojectassetsrequest"></a>
<a id="tocsbatchdisassociateprojectassetsrequest"></a>

```json
{
  "assetIds": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetIds|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_BatchEntryCompletionStatus">BatchEntryCompletionStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchentrycompletionstatus"></a>
<a id="schema_BatchEntryCompletionStatus"></a>
<a id="tocSbatchentrycompletionstatus"></a>
<a id="tocsbatchentrycompletionstatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesEntries">BatchGetAssetPropertyAggregatesEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesentries"></a>
<a id="schema_BatchGetAssetPropertyAggregatesEntries"></a>
<a id="tocSbatchgetassetpropertyaggregatesentries"></a>
<a id="tocsbatchgetassetpropertyaggregatesentries"></a>

```json
[
  {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {},
    "aggregateTypes": {},
    "resolution": {},
    "startDate": {},
    "endDate": {},
    "qualities": {},
    "timeOrdering": {}
  }
]
```

<h2 id="tocS_EntryId">EntryId</h2>
<!-- backwards compatibility -->
<a id="schemaentryid"></a>
<a id="schema_EntryId"></a>
<a id="tocSentryid"></a>
<a id="tocsentryid"></a>

```json
"string"
```

<h2 id="tocS_Resolution">Resolution</h2>
<!-- backwards compatibility -->
<a id="schemaresolution"></a>
<a id="schema_Resolution"></a>
<a id="tocSresolution"></a>
<a id="tocsresolution"></a>

```json
"st"
```

<h2 id="tocS_Qualities">Qualities</h2>
<!-- backwards compatibility -->
<a id="schemaqualities"></a>
<a id="schema_Qualities"></a>
<a id="tocSqualities"></a>
<a id="tocsqualities"></a>

```json
[
  "GOOD"
]
```

<h2 id="tocS_TimeOrdering">TimeOrdering</h2>
<!-- backwards compatibility -->
<a id="schematimeordering"></a>
<a id="schema_TimeOrdering"></a>
<a id="tocStimeordering"></a>
<a id="tocstimeordering"></a>

```json
"ASCENDING"
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesErrorCode">BatchGetAssetPropertyAggregatesErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregateserrorcode"></a>
<a id="schema_BatchGetAssetPropertyAggregatesErrorCode"></a>
<a id="tocSbatchgetassetpropertyaggregateserrorcode"></a>
<a id="tocsbatchgetassetpropertyaggregateserrorcode"></a>

```json
"ResourceNotFoundException"
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesErrorEntry">BatchGetAssetPropertyAggregatesErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregateserrorentry"></a>
<a id="schema_BatchGetAssetPropertyAggregatesErrorEntry"></a>
<a id="tocSbatchgetassetpropertyaggregateserrorentry"></a>
<a id="tocsbatchgetassetpropertyaggregateserrorentry"></a>

```json
{
  "errorCode": {},
  "errorMessage": {},
  "entryId": {}
}
```

Contains error information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorMessage|object|true|none|none|
|entryId|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesErrorEntries">BatchGetAssetPropertyAggregatesErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregateserrorentries"></a>
<a id="schema_BatchGetAssetPropertyAggregatesErrorEntries"></a>
<a id="tocSbatchgetassetpropertyaggregateserrorentries"></a>
<a id="tocsbatchgetassetpropertyaggregateserrorentries"></a>

```json
[
  {
    "errorCode": {},
    "errorMessage": {},
    "entryId": {}
  }
]
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesErrorInfo">BatchGetAssetPropertyAggregatesErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregateserrorinfo"></a>
<a id="schema_BatchGetAssetPropertyAggregatesErrorInfo"></a>
<a id="tocSbatchgetassetpropertyaggregateserrorinfo"></a>
<a id="tocsbatchgetassetpropertyaggregateserrorinfo"></a>

```json
{
  "errorCode": {},
  "errorTimestamp": {}
}
```

Contains the error code and the timestamp for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorTimestamp|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesMaxResults">BatchGetAssetPropertyAggregatesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesmaxresults"></a>
<a id="schema_BatchGetAssetPropertyAggregatesMaxResults"></a>
<a id="tocSbatchgetassetpropertyaggregatesmaxresults"></a>
<a id="tocsbatchgetassetpropertyaggregatesmaxresults"></a>

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

<h2 id="tocS_BatchGetAssetPropertyAggregatesRequest">BatchGetAssetPropertyAggregatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesrequest"></a>
<a id="schema_BatchGetAssetPropertyAggregatesRequest"></a>
<a id="tocSbatchgetassetpropertyaggregatesrequest"></a>
<a id="tocsbatchgetassetpropertyaggregatesrequest"></a>

```json
{
  "entries": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesSuccessEntries">BatchGetAssetPropertyAggregatesSuccessEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatessuccessentries"></a>
<a id="schema_BatchGetAssetPropertyAggregatesSuccessEntries"></a>
<a id="tocSbatchgetassetpropertyaggregatessuccessentries"></a>
<a id="tocsbatchgetassetpropertyaggregatessuccessentries"></a>

```json
[
  {
    "entryId": {},
    "aggregatedValues": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesSkippedEntries">BatchGetAssetPropertyAggregatesSkippedEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesskippedentries"></a>
<a id="schema_BatchGetAssetPropertyAggregatesSkippedEntries"></a>
<a id="tocSbatchgetassetpropertyaggregatesskippedentries"></a>
<a id="tocsbatchgetassetpropertyaggregatesskippedentries"></a>

```json
[
  {
    "entryId": {},
    "completionStatus": {},
    "errorInfo": {
      "errorCode": {},
      "errorTimestamp": {}
    }
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyAggregatesSkippedEntry">BatchGetAssetPropertyAggregatesSkippedEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatesskippedentry"></a>
<a id="schema_BatchGetAssetPropertyAggregatesSkippedEntry"></a>
<a id="tocSbatchgetassetpropertyaggregatesskippedentry"></a>
<a id="tocsbatchgetassetpropertyaggregatesskippedentry"></a>

```json
{
  "entryId": {},
  "completionStatus": {},
  "errorInfo": {
    "errorCode": {},
    "errorTimestamp": {}
  }
}
```

Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|completionStatus|object|true|none|none|
|errorInfo|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyAggregatesSuccessEntry">BatchGetAssetPropertyAggregatesSuccessEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyaggregatessuccessentry"></a>
<a id="schema_BatchGetAssetPropertyAggregatesSuccessEntry"></a>
<a id="tocSbatchgetassetpropertyaggregatessuccessentry"></a>
<a id="tocsbatchgetassetpropertyaggregatessuccessentry"></a>

```json
{
  "entryId": {},
  "aggregatedValues": {}
}
```

Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|aggregatedValues|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueEntries">BatchGetAssetPropertyValueEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueentries"></a>
<a id="schema_BatchGetAssetPropertyValueEntries"></a>
<a id="tocSbatchgetassetpropertyvalueentries"></a>
<a id="tocsbatchgetassetpropertyvalueentries"></a>

```json
[
  {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueErrorCode">BatchGetAssetPropertyValueErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueerrorcode"></a>
<a id="schema_BatchGetAssetPropertyValueErrorCode"></a>
<a id="tocSbatchgetassetpropertyvalueerrorcode"></a>
<a id="tocsbatchgetassetpropertyvalueerrorcode"></a>

```json
"ResourceNotFoundException"
```

<h2 id="tocS_BatchGetAssetPropertyValueErrorEntry">BatchGetAssetPropertyValueErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueerrorentry"></a>
<a id="schema_BatchGetAssetPropertyValueErrorEntry"></a>
<a id="tocSbatchgetassetpropertyvalueerrorentry"></a>
<a id="tocsbatchgetassetpropertyvalueerrorentry"></a>

```json
{
  "errorCode": {},
  "errorMessage": {},
  "entryId": {}
}
```

Contains error information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorMessage|object|true|none|none|
|entryId|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueErrorEntries">BatchGetAssetPropertyValueErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueerrorentries"></a>
<a id="schema_BatchGetAssetPropertyValueErrorEntries"></a>
<a id="tocSbatchgetassetpropertyvalueerrorentries"></a>
<a id="tocsbatchgetassetpropertyvalueerrorentries"></a>

```json
[
  {
    "errorCode": {},
    "errorMessage": {},
    "entryId": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueErrorInfo">BatchGetAssetPropertyValueErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueerrorinfo"></a>
<a id="schema_BatchGetAssetPropertyValueErrorInfo"></a>
<a id="tocSbatchgetassetpropertyvalueerrorinfo"></a>
<a id="tocsbatchgetassetpropertyvalueerrorinfo"></a>

```json
{
  "errorCode": {},
  "errorTimestamp": {}
}
```

The error information, such as the error code and the timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorTimestamp|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistoryEntries">BatchGetAssetPropertyValueHistoryEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryentries"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryEntries"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryentries"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryentries"></a>

```json
[
  {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {},
    "startDate": {},
    "endDate": {},
    "qualities": {},
    "timeOrdering": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueHistoryErrorCode">BatchGetAssetPropertyValueHistoryErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryerrorcode"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryErrorCode"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryerrorcode"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryerrorcode"></a>

```json
"ResourceNotFoundException"
```

<h2 id="tocS_BatchGetAssetPropertyValueHistoryErrorEntry">BatchGetAssetPropertyValueHistoryErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryerrorentry"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryErrorEntry"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryerrorentry"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryerrorentry"></a>

```json
{
  "errorCode": {},
  "errorMessage": {},
  "entryId": {}
}
```

A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorMessage|object|true|none|none|
|entryId|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistoryErrorEntries">BatchGetAssetPropertyValueHistoryErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryerrorentries"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryErrorEntries"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryerrorentries"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryerrorentries"></a>

```json
[
  {
    "errorCode": {},
    "errorMessage": {},
    "entryId": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueHistoryErrorInfo">BatchGetAssetPropertyValueHistoryErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryerrorinfo"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryErrorInfo"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryerrorinfo"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryerrorinfo"></a>

```json
{
  "errorCode": {},
  "errorTimestamp": {}
}
```

The error information, such as the error code and the timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorTimestamp|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistoryMaxResults">BatchGetAssetPropertyValueHistoryMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistorymaxresults"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryMaxResults"></a>
<a id="tocSbatchgetassetpropertyvaluehistorymaxresults"></a>
<a id="tocsbatchgetassetpropertyvaluehistorymaxresults"></a>

```json
1
```

<h2 id="tocS_BatchGetAssetPropertyValueHistoryRequest">BatchGetAssetPropertyValueHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryrequest"></a>
<a id="schema_BatchGetAssetPropertyValueHistoryRequest"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryrequest"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryrequest"></a>

```json
{
  "entries": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistorySuccessEntries">BatchGetAssetPropertyValueHistorySuccessEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistorysuccessentries"></a>
<a id="schema_BatchGetAssetPropertyValueHistorySuccessEntries"></a>
<a id="tocSbatchgetassetpropertyvaluehistorysuccessentries"></a>
<a id="tocsbatchgetassetpropertyvaluehistorysuccessentries"></a>

```json
[
  {
    "entryId": {},
    "assetPropertyValueHistory": {}
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueHistorySkippedEntries">BatchGetAssetPropertyValueHistorySkippedEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryskippedentries"></a>
<a id="schema_BatchGetAssetPropertyValueHistorySkippedEntries"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryskippedentries"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryskippedentries"></a>

```json
[
  {
    "entryId": {},
    "completionStatus": {},
    "errorInfo": {
      "errorCode": {},
      "errorTimestamp": {}
    }
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueHistorySkippedEntry">BatchGetAssetPropertyValueHistorySkippedEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistoryskippedentry"></a>
<a id="schema_BatchGetAssetPropertyValueHistorySkippedEntry"></a>
<a id="tocSbatchgetassetpropertyvaluehistoryskippedentry"></a>
<a id="tocsbatchgetassetpropertyvaluehistoryskippedentry"></a>

```json
{
  "entryId": {},
  "completionStatus": {},
  "errorInfo": {
    "errorCode": {},
    "errorTimestamp": {}
  }
}
```

Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|completionStatus|object|true|none|none|
|errorInfo|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueHistorySuccessEntry">BatchGetAssetPropertyValueHistorySuccessEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluehistorysuccessentry"></a>
<a id="schema_BatchGetAssetPropertyValueHistorySuccessEntry"></a>
<a id="tocSbatchgetassetpropertyvaluehistorysuccessentry"></a>
<a id="tocsbatchgetassetpropertyvaluehistorysuccessentry"></a>

```json
{
  "entryId": {},
  "assetPropertyValueHistory": {}
}
```

Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetPropertyValueHistory|object|true|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueRequest">BatchGetAssetPropertyValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluerequest"></a>
<a id="schema_BatchGetAssetPropertyValueRequest"></a>
<a id="tocSbatchgetassetpropertyvaluerequest"></a>
<a id="tocsbatchgetassetpropertyvaluerequest"></a>

```json
{
  "entries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueSuccessEntries">BatchGetAssetPropertyValueSuccessEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluesuccessentries"></a>
<a id="schema_BatchGetAssetPropertyValueSuccessEntries"></a>
<a id="tocSbatchgetassetpropertyvaluesuccessentries"></a>
<a id="tocsbatchgetassetpropertyvaluesuccessentries"></a>

```json
[
  {
    "entryId": {},
    "assetPropertyValue": {
      "value": {
        "stringValue": {},
        "integerValue": {},
        "doubleValue": {},
        "booleanValue": {}
      },
      "timestamp": {
        "timeInSeconds": {},
        "offsetInNanos": {}
      },
      "quality": {}
    }
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueSkippedEntries">BatchGetAssetPropertyValueSkippedEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueskippedentries"></a>
<a id="schema_BatchGetAssetPropertyValueSkippedEntries"></a>
<a id="tocSbatchgetassetpropertyvalueskippedentries"></a>
<a id="tocsbatchgetassetpropertyvalueskippedentries"></a>

```json
[
  {
    "entryId": {},
    "completionStatus": {},
    "errorInfo": {
      "errorCode": {},
      "errorTimestamp": {}
    }
  }
]
```

<h2 id="tocS_BatchGetAssetPropertyValueSkippedEntry">BatchGetAssetPropertyValueSkippedEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvalueskippedentry"></a>
<a id="schema_BatchGetAssetPropertyValueSkippedEntry"></a>
<a id="tocSbatchgetassetpropertyvalueskippedentry"></a>
<a id="tocsbatchgetassetpropertyvalueskippedentry"></a>

```json
{
  "entryId": {},
  "completionStatus": {},
  "errorInfo": {
    "errorCode": {},
    "errorTimestamp": {}
  }
}
```

Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|completionStatus|object|true|none|none|
|errorInfo|object|false|none|none|

<h2 id="tocS_BatchGetAssetPropertyValueSuccessEntry">BatchGetAssetPropertyValueSuccessEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetassetpropertyvaluesuccessentry"></a>
<a id="schema_BatchGetAssetPropertyValueSuccessEntry"></a>
<a id="tocSbatchgetassetpropertyvaluesuccessentry"></a>
<a id="tocsbatchgetassetpropertyvaluesuccessentry"></a>

```json
{
  "entryId": {},
  "assetPropertyValue": {
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    },
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "quality": {}
  }
}
```

Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|assetPropertyValue|[AssetPropertyValue](#schemaassetpropertyvalue)|false|none|Contains asset property value information.|

<h2 id="tocS_BatchPutAssetPropertyValueErrorCode">BatchPutAssetPropertyValueErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyvalueerrorcode"></a>
<a id="schema_BatchPutAssetPropertyValueErrorCode"></a>
<a id="tocSbatchputassetpropertyvalueerrorcode"></a>
<a id="tocsbatchputassetpropertyvalueerrorcode"></a>

```json
"ResourceNotFoundException"
```

<h2 id="tocS_Timestamps">Timestamps</h2>
<!-- backwards compatibility -->
<a id="schematimestamps"></a>
<a id="schema_Timestamps"></a>
<a id="tocStimestamps"></a>
<a id="tocstimestamps"></a>

```json
[
  {
    "timeInSeconds": {},
    "offsetInNanos": {}
  }
]
```

<h2 id="tocS_BatchPutAssetPropertyError">BatchPutAssetPropertyError</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyerror"></a>
<a id="schema_BatchPutAssetPropertyError"></a>
<a id="tocSbatchputassetpropertyerror"></a>
<a id="tocsbatchputassetpropertyerror"></a>

```json
{
  "errorCode": {},
  "errorMessage": {},
  "timestamps": {}
}
```

Contains error information from updating a batch of asset property values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|true|none|none|
|errorMessage|object|true|none|none|
|timestamps|object|true|none|none|

<h2 id="tocS_BatchPutAssetPropertyErrorEntry">BatchPutAssetPropertyErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyerrorentry"></a>
<a id="schema_BatchPutAssetPropertyErrorEntry"></a>
<a id="tocSbatchputassetpropertyerrorentry"></a>
<a id="tocsbatchputassetpropertyerrorentry"></a>

```json
{
  "entryId": {},
  "errors": {}
}
```

Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryId|object|true|none|none|
|errors|object|true|none|none|

<h2 id="tocS_BatchPutAssetPropertyErrorEntries">BatchPutAssetPropertyErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyerrorentries"></a>
<a id="schema_BatchPutAssetPropertyErrorEntries"></a>
<a id="tocSbatchputassetpropertyerrorentries"></a>
<a id="tocsbatchputassetpropertyerrorentries"></a>

```json
[
  {
    "entryId": {},
    "errors": {}
  }
]
```

<h2 id="tocS_BatchPutAssetPropertyErrors">BatchPutAssetPropertyErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyerrors"></a>
<a id="schema_BatchPutAssetPropertyErrors"></a>
<a id="tocSbatchputassetpropertyerrors"></a>
<a id="tocsbatchputassetpropertyerrors"></a>

```json
[
  {
    "errorCode": {},
    "errorMessage": {},
    "timestamps": {}
  }
]
```

<h2 id="tocS_PutAssetPropertyValueEntries">PutAssetPropertyValueEntries</h2>
<!-- backwards compatibility -->
<a id="schemaputassetpropertyvalueentries"></a>
<a id="schema_PutAssetPropertyValueEntries"></a>
<a id="tocSputassetpropertyvalueentries"></a>
<a id="tocsputassetpropertyvalueentries"></a>

```json
[
  {
    "entryId": {},
    "assetId": {},
    "propertyId": {},
    "propertyAlias": {},
    "propertyValues": {}
  }
]
```

<h2 id="tocS_BatchPutAssetPropertyValueRequest">BatchPutAssetPropertyValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputassetpropertyvaluerequest"></a>
<a id="schema_BatchPutAssetPropertyValueRequest"></a>
<a id="tocSbatchputassetpropertyvaluerequest"></a>
<a id="tocsbatchputassetpropertyvaluerequest"></a>

```json
{
  "entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|true|none|none|

<h2 id="tocS_CapabilityConfiguration">CapabilityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityconfiguration"></a>
<a id="schema_CapabilityConfiguration"></a>
<a id="tocScapabilityconfiguration"></a>
<a id="tocscapabilityconfiguration"></a>

```json
"string"
```

<h2 id="tocS_CapabilityNamespace">CapabilityNamespace</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitynamespace"></a>
<a id="schema_CapabilityNamespace"></a>
<a id="tocScapabilitynamespace"></a>
<a id="tocscapabilitynamespace"></a>

```json
"string"
```

<h2 id="tocS_CapabilitySyncStatus">CapabilitySyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitysyncstatus"></a>
<a id="schema_CapabilitySyncStatus"></a>
<a id="tocScapabilitysyncstatus"></a>
<a id="tocscapabilitysyncstatus"></a>

```json
"IN_SYNC"
```

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"ALIAS"
```

<h2 id="tocS_ColumnNames">ColumnNames</h2>
<!-- backwards compatibility -->
<a id="schemacolumnnames"></a>
<a id="schema_ColumnNames"></a>
<a id="tocScolumnnames"></a>
<a id="tocscolumnnames"></a>

```json
[
  "ALIAS"
]
```

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "id": {},
  "name": {},
  "alias": {},
  "notification": {
    "topic": {},
    "state": {}
  },
  "dataType": {},
  "unit": {},
  "type": {
    "attribute": {
      "defaultValue": {}
    },
    "measurement": {
      "processingConfig": {
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "transform": {
      "expression": {},
      "variables": {},
      "processingConfig": {
        "computeLocation": {},
        "forwardingConfig": {
          "state": {}
        }
      }
    },
    "metric": {
      "expression": {},
      "variables": {},
      "window": {
        "tumbling": {
          "interval": {},
          "offset": {}
        }
      },
      "processingConfig": {
        "computeLocation": {}
      }
    }
  }
}
```

Contains asset property information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|alias|object|false|none|none|
|notification|object|false|none|none|
|dataType|object|true|none|none|
|unit|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_CompositeModelProperty">CompositeModelProperty</h2>
<!-- backwards compatibility -->
<a id="schemacompositemodelproperty"></a>
<a id="schema_CompositeModelProperty"></a>
<a id="tocScompositemodelproperty"></a>
<a id="tocscompositemodelproperty"></a>

```json
{
  "name": {},
  "type": {},
  "assetProperty": {
    "id": {},
    "name": {},
    "alias": {},
    "notification": {
      "topic": {},
      "state": {}
    },
    "dataType": {},
    "unit": {},
    "type": {
      "attribute": {
        "defaultValue": {}
      },
      "measurement": {
        "processingConfig": {
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "transform": {
        "expression": {},
        "variables": {},
        "processingConfig": {
          "computeLocation": {},
          "forwardingConfig": {
            "state": {}
          }
        }
      },
      "metric": {
        "expression": {},
        "variables": {},
        "window": {
          "tumbling": {
            "interval": {},
            "offset": {}
          }
        },
        "processingConfig": {
          "computeLocation": {}
        }
      }
    }
  },
  "id": {}
}
```

Contains information about a composite model property on an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|
|assetProperty|[Property](#schemaproperty)|true|none|Contains asset property information.|
|id|object|false|none|none|

<h2 id="tocS_ComputeLocation">ComputeLocation</h2>
<!-- backwards compatibility -->
<a id="schemacomputelocation"></a>
<a id="schema_ComputeLocation"></a>
<a id="tocScomputelocation"></a>
<a id="tocscomputelocation"></a>

```json
"EDGE"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"VALIDATION_ERROR"
```

<h2 id="tocS_ConfigurationErrorDetails">ConfigurationErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationerrordetails"></a>
<a id="schema_ConfigurationErrorDetails"></a>
<a id="tocSconfigurationerrordetails"></a>
<a id="tocsconfigurationerrordetails"></a>

```json
{
  "code": {},
  "message": {}
}
```

Contains the details of an IoT SiteWise configuration error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_ConfigurationState">ConfigurationState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstate"></a>
<a id="schema_ConfigurationState"></a>
<a id="tocSconfigurationstate"></a>
<a id="tocsconfigurationstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ConfigurationStatus">ConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstatus"></a>
<a id="schema_ConfigurationStatus"></a>
<a id="tocSconfigurationstatus"></a>
<a id="tocsconfigurationstatus"></a>

```json
{
  "state": {},
  "error": {
    "code": {},
    "message": {}
  }
}
```

Contains current status information for the configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|error|object|false|none|none|

<h2 id="tocS_CoreDeviceThingName">CoreDeviceThingName</h2>
<!-- backwards compatibility -->
<a id="schemacoredevicethingname"></a>
<a id="schema_CoreDeviceThingName"></a>
<a id="tocScoredevicethingname"></a>
<a id="tocscoredevicethingname"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateAccessPolicyRequest">CreateAccessPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspolicyrequest"></a>
<a id="schema_CreateAccessPolicyRequest"></a>
<a id="tocScreateaccesspolicyrequest"></a>
<a id="tocscreateaccesspolicyrequest"></a>

```json
{
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicyIdentity|object|true|none|none|
|accessPolicyResource|object|true|none|none|
|accessPolicyPermission|object|true|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateAssetModelRequest">CreateAssetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetmodelrequest"></a>
<a id="schema_CreateAssetModelRequest"></a>
<a id="tocScreateassetmodelrequest"></a>
<a id="tocscreateassetmodelrequest"></a>

```json
{
  "assetModelName": {},
  "assetModelDescription": {},
  "assetModelProperties": {},
  "assetModelHierarchies": {},
  "assetModelCompositeModels": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelName|object|true|none|none|
|assetModelDescription|object|false|none|none|
|assetModelProperties|object|false|none|none|
|assetModelHierarchies|object|false|none|none|
|assetModelCompositeModels|object|false|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateAssetRequest">CreateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetrequest"></a>
<a id="schema_CreateAssetRequest"></a>
<a id="tocScreateassetrequest"></a>
<a id="tocscreateassetrequest"></a>

```json
{
  "assetName": {},
  "assetModelId": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "assetDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetName|object|true|none|none|
|assetModelId|object|true|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|
|assetDescription|object|false|none|none|

<h2 id="tocS_Files">Files</h2>
<!-- backwards compatibility -->
<a id="schemafiles"></a>
<a id="schema_Files"></a>
<a id="tocSfiles"></a>
<a id="tocsfiles"></a>

```json
[
  {
    "bucket": {},
    "key": {},
    "versionId": {}
  }
]
```

<h2 id="tocS_ErrorReportLocation">ErrorReportLocation</h2>
<!-- backwards compatibility -->
<a id="schemaerrorreportlocation"></a>
<a id="schema_ErrorReportLocation"></a>
<a id="tocSerrorreportlocation"></a>
<a id="tocserrorreportlocation"></a>

```json
{
  "bucket": {},
  "prefix": {}
}
```

The Amazon S3 destination where errors associated with the job creation request are saved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|prefix|object|true|none|none|

<h2 id="tocS_JobConfiguration">JobConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajobconfiguration"></a>
<a id="schema_JobConfiguration"></a>
<a id="tocSjobconfiguration"></a>
<a id="tocsjobconfiguration"></a>

```json
{
  "fileFormat": {
    "csv": {
      "columnNames": {}
    }
  }
}
```

Contains the configuration information of a job, such as the file format used to save data in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileFormat|object|true|none|none|

<h2 id="tocS_CreateBulkImportJobRequest">CreateBulkImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebulkimportjobrequest"></a>
<a id="schema_CreateBulkImportJobRequest"></a>
<a id="tocScreatebulkimportjobrequest"></a>
<a id="tocscreatebulkimportjobrequest"></a>

```json
{
  "jobName": {},
  "jobRoleArn": {},
  "files": {},
  "errorReportLocation": {
    "bucket": {},
    "prefix": {}
  },
  "jobConfiguration": {
    "fileFormat": {
      "csv": {
        "columnNames": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|jobRoleArn|object|true|none|none|
|files|object|true|none|none|
|errorReportLocation|object|true|none|none|
|jobConfiguration|object|true|none|none|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_DashboardDefinition">DashboardDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadashboarddefinition"></a>
<a id="schema_DashboardDefinition"></a>
<a id="tocSdashboarddefinition"></a>
<a id="tocsdashboarddefinition"></a>

```json
"string"
```

<h2 id="tocS_CreateDashboardRequest">CreateDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedashboardrequest"></a>
<a id="schema_CreateDashboardRequest"></a>
<a id="tocScreatedashboardrequest"></a>
<a id="tocscreatedashboardrequest"></a>

```json
{
  "projectId": {},
  "dashboardName": {},
  "dashboardDescription": {},
  "dashboardDefinition": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|dashboardName|object|true|none|none|
|dashboardDescription|object|false|none|none|
|dashboardDefinition|object|true|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GatewayPlatform">GatewayPlatform</h2>
<!-- backwards compatibility -->
<a id="schemagatewayplatform"></a>
<a id="schema_GatewayPlatform"></a>
<a id="tocSgatewayplatform"></a>
<a id="tocsgatewayplatform"></a>

```json
{
  "greengrass": {
    "groupArn": {}
  },
  "greengrassV2": {
    "coreDeviceThingName": {}
  }
}
```

Contains a gateway's platform information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|greengrass|object|false|none|none|
|greengrassV2|object|false|none|none|

<h2 id="tocS_CreateGatewayRequest">CreateGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewayrequest"></a>
<a id="schema_CreateGatewayRequest"></a>
<a id="tocScreategatewayrequest"></a>
<a id="tocscreategatewayrequest"></a>

```json
{
  "gatewayName": {},
  "gatewayPlatform": {
    "greengrass": {
      "groupArn": {}
    },
    "greengrassV2": {
      "coreDeviceThingName": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayName|object|true|none|none|
|gatewayPlatform|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

<h2 id="tocS_CreatePortalRequest">CreatePortalRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateportalrequest"></a>
<a id="schema_CreatePortalRequest"></a>
<a id="tocScreateportalrequest"></a>
<a id="tocscreateportalrequest"></a>

```json
{
  "portalName": {},
  "portalDescription": {},
  "portalContactEmail": {},
  "clientToken": {},
  "portalLogoImageFile": {
    "data": {},
    "type": {}
  },
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "portalAuthMode": {},
  "notificationSenderEmail": {},
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalName|object|true|none|none|
|portalDescription|object|false|none|none|
|portalContactEmail|object|true|none|none|
|clientToken|object|false|none|none|
|portalLogoImageFile|object|false|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|
|portalAuthMode|object|false|none|none|
|notificationSenderEmail|object|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_PortalStatus">PortalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaportalstatus"></a>
<a id="schema_PortalStatus"></a>
<a id="tocSportalstatus"></a>
<a id="tocsportalstatus"></a>

```json
{
  "state": {},
  "error": {
    "code": {},
    "message": {}
  }
}
```

Contains information about the current status of a portal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|error|object|false|none|none|

<h2 id="tocS_SSOApplicationId">SSOApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemassoapplicationid"></a>
<a id="schema_SSOApplicationId"></a>
<a id="tocSssoapplicationid"></a>
<a id="tocsssoapplicationid"></a>

```json
"string"
```

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "portalId": {},
  "projectName": {},
  "projectDescription": {},
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalId|object|true|none|none|
|projectName|object|true|none|none|
|projectDescription|object|false|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Csv">Csv</h2>
<!-- backwards compatibility -->
<a id="schemacsv"></a>
<a id="schema_Csv"></a>
<a id="tocScsv"></a>
<a id="tocscsv"></a>

```json
{
  "columnNames": {}
}
```

A .csv file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnNames|object|false|none|none|

<h2 id="tocS_DashboardSummary">DashboardSummary</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsummary"></a>
<a id="schema_DashboardSummary"></a>
<a id="tocSdashboardsummary"></a>
<a id="tocsdashboardsummary"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "creationDate": {},
  "lastUpdateDate": {}
}
```

Contains a dashboard summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|creationDate|object|false|none|none|
|lastUpdateDate|object|false|none|none|

<h2 id="tocS_DashboardSummaries">DashboardSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsummaries"></a>
<a id="schema_DashboardSummaries"></a>
<a id="tocSdashboardsummaries"></a>
<a id="tocsdashboardsummaries"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "creationDate": {},
    "lastUpdateDate": {}
  }
]
```

<h2 id="tocS_DeleteAccessPolicyRequest">DeleteAccessPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspolicyrequest"></a>
<a id="schema_DeleteAccessPolicyRequest"></a>
<a id="tocSdeleteaccesspolicyrequest"></a>
<a id="tocsdeleteaccesspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAssetModelRequest">DeleteAssetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetmodelrequest"></a>
<a id="schema_DeleteAssetModelRequest"></a>
<a id="tocSdeleteassetmodelrequest"></a>
<a id="tocsdeleteassetmodelrequest"></a>

```json
{}
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

<h2 id="tocS_DeleteDashboardRequest">DeleteDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedashboardrequest"></a>
<a id="schema_DeleteDashboardRequest"></a>
<a id="tocSdeletedashboardrequest"></a>
<a id="tocsdeletedashboardrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteGatewayRequest">DeleteGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayrequest"></a>
<a id="schema_DeleteGatewayRequest"></a>
<a id="tocSdeletegatewayrequest"></a>
<a id="tocsdeletegatewayrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePortalRequest">DeletePortalRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportalrequest"></a>
<a id="schema_DeletePortalRequest"></a>
<a id="tocSdeleteportalrequest"></a>
<a id="tocsdeleteportalrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTimeSeriesRequest">DeleteTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetimeseriesrequest"></a>
<a id="schema_DeleteTimeSeriesRequest"></a>
<a id="tocSdeletetimeseriesrequest"></a>
<a id="tocsdeletetimeseriesrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_DescribeAccessPolicyRequest">DescribeAccessPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesspolicyrequest"></a>
<a id="schema_DescribeAccessPolicyRequest"></a>
<a id="tocSdescribeaccesspolicyrequest"></a>
<a id="tocsdescribeaccesspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_ExcludeProperties">ExcludeProperties</h2>
<!-- backwards compatibility -->
<a id="schemaexcludeproperties"></a>
<a id="schema_ExcludeProperties"></a>
<a id="tocSexcludeproperties"></a>
<a id="tocsexcludeproperties"></a>

```json
true
```

<h2 id="tocS_DescribeAssetModelRequest">DescribeAssetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetmodelrequest"></a>
<a id="schema_DescribeAssetModelRequest"></a>
<a id="tocSdescribeassetmodelrequest"></a>
<a id="tocsdescribeassetmodelrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAssetPropertyRequest">DescribeAssetPropertyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetpropertyrequest"></a>
<a id="schema_DescribeAssetPropertyRequest"></a>
<a id="tocSdescribeassetpropertyrequest"></a>
<a id="tocsdescribeassetpropertyrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAssetRequest">DescribeAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetrequest"></a>
<a id="schema_DescribeAssetRequest"></a>
<a id="tocSdescribeassetrequest"></a>
<a id="tocsdescribeassetrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeBulkImportJobRequest">DescribeBulkImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebulkimportjobrequest"></a>
<a id="schema_DescribeBulkImportJobRequest"></a>
<a id="tocSdescribebulkimportjobrequest"></a>
<a id="tocsdescribebulkimportjobrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDashboardRequest">DescribeDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedashboardrequest"></a>
<a id="schema_DescribeDashboardRequest"></a>
<a id="tocSdescribedashboardrequest"></a>
<a id="tocsdescribedashboardrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDefaultEncryptionConfigurationRequest">DescribeDefaultEncryptionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedefaultencryptionconfigurationrequest"></a>
<a id="schema_DescribeDefaultEncryptionConfigurationRequest"></a>
<a id="tocSdescribedefaultencryptionconfigurationrequest"></a>
<a id="tocsdescribedefaultencryptionconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"SITEWISE_DEFAULT_ENCRYPTION"
```

<h2 id="tocS_DescribeGatewayCapabilityConfigurationRequest">DescribeGatewayCapabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewaycapabilityconfigurationrequest"></a>
<a id="schema_DescribeGatewayCapabilityConfigurationRequest"></a>
<a id="tocSdescribegatewaycapabilityconfigurationrequest"></a>
<a id="tocsdescribegatewaycapabilityconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeGatewayRequest">DescribeGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegatewayrequest"></a>
<a id="schema_DescribeGatewayRequest"></a>
<a id="tocSdescribegatewayrequest"></a>
<a id="tocsdescribegatewayrequest"></a>

```json
{}
```

<h2 id="tocS_GatewayCapabilitySummaries">GatewayCapabilitySummaries</h2>
<!-- backwards compatibility -->
<a id="schemagatewaycapabilitysummaries"></a>
<a id="schema_GatewayCapabilitySummaries"></a>
<a id="tocSgatewaycapabilitysummaries"></a>
<a id="tocsgatewaycapabilitysummaries"></a>

```json
[
  {
    "capabilityNamespace": {},
    "capabilitySyncStatus": {}
  }
]
```

<h2 id="tocS_DescribeLoggingOptionsRequest">DescribeLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsrequest"></a>
<a id="schema_DescribeLoggingOptionsRequest"></a>
<a id="tocSdescribeloggingoptionsrequest"></a>
<a id="tocsdescribeloggingoptionsrequest"></a>

```json
{}
```

<h2 id="tocS_LoggingOptions">LoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaloggingoptions"></a>
<a id="schema_LoggingOptions"></a>
<a id="tocSloggingoptions"></a>
<a id="tocsloggingoptions"></a>

```json
{
  "level": {}
}
```

Contains logging options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|object|true|none|none|

<h2 id="tocS_DescribePortalRequest">DescribePortalRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportalrequest"></a>
<a id="schema_DescribePortalRequest"></a>
<a id="tocSdescribeportalrequest"></a>
<a id="tocsdescribeportalrequest"></a>

```json
{}
```

<h2 id="tocS_PortalClientId">PortalClientId</h2>
<!-- backwards compatibility -->
<a id="schemaportalclientid"></a>
<a id="schema_PortalClientId"></a>
<a id="tocSportalclientid"></a>
<a id="tocsportalclientid"></a>

```json
"string"
```

<h2 id="tocS_ImageLocation">ImageLocation</h2>
<!-- backwards compatibility -->
<a id="schemaimagelocation"></a>
<a id="schema_ImageLocation"></a>
<a id="tocSimagelocation"></a>
<a id="tocsimagelocation"></a>

```json
{
  "id": {},
  "url": {}
}
```

Contains an image that is uploaded to IoT SiteWise and available at a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|url|object|true|none|none|

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeStorageConfigurationRequest">DescribeStorageConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestorageconfigurationrequest"></a>
<a id="schema_DescribeStorageConfigurationRequest"></a>
<a id="tocSdescribestorageconfigurationrequest"></a>
<a id="tocsdescribestorageconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"SITEWISE_DEFAULT_STORAGE"
```

<h2 id="tocS_MultiLayerStorage">MultiLayerStorage</h2>
<!-- backwards compatibility -->
<a id="schemamultilayerstorage"></a>
<a id="schema_MultiLayerStorage"></a>
<a id="tocSmultilayerstorage"></a>
<a id="tocsmultilayerstorage"></a>

```json
{
  "customerManagedS3Storage": {
    "s3ResourceArn": {},
    "roleArn": {}
  }
}
```

Contains information about the storage destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerManagedS3Storage|object|true|none|none|

<h2 id="tocS_DisassociatedDataStorageState">DisassociatedDataStorageState</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateddatastoragestate"></a>
<a id="schema_DisassociatedDataStorageState"></a>
<a id="tocSdisassociateddatastoragestate"></a>
<a id="tocsdisassociateddatastoragestate"></a>

```json
"ENABLED"
```

<h2 id="tocS_RetentionPeriod">RetentionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiod"></a>
<a id="schema_RetentionPeriod"></a>
<a id="tocSretentionperiod"></a>
<a id="tocsretentionperiod"></a>

```json
{
  "numberOfDays": {},
  "unlimited": {}
}
```

How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfDays|object|false|none|none|
|unlimited|object|false|none|none|

<h2 id="tocS_DescribeTimeSeriesRequest">DescribeTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetimeseriesrequest"></a>
<a id="schema_DescribeTimeSeriesRequest"></a>
<a id="tocSdescribetimeseriesrequest"></a>
<a id="tocsdescribetimeseriesrequest"></a>

```json
{}
```

<h2 id="tocS_TimeSeriesId">TimeSeriesId</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesid"></a>
<a id="schema_TimeSeriesId"></a>
<a id="tocStimeseriesid"></a>
<a id="tocstimeseriesid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_DetailedErrorCode">DetailedErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemadetailederrorcode"></a>
<a id="schema_DetailedErrorCode"></a>
<a id="tocSdetailederrorcode"></a>
<a id="tocsdetailederrorcode"></a>

```json
"INCOMPATIBLE_COMPUTE_LOCATION"
```

<h2 id="tocS_DetailedErrorMessage">DetailedErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemadetailederrormessage"></a>
<a id="schema_DetailedErrorMessage"></a>
<a id="tocSdetailederrormessage"></a>
<a id="tocsdetailederrormessage"></a>

```json
"string"
```

<h2 id="tocS_DetailedError">DetailedError</h2>
<!-- backwards compatibility -->
<a id="schemadetailederror"></a>
<a id="schema_DetailedError"></a>
<a id="tocSdetailederror"></a>
<a id="tocsdetailederror"></a>

```json
{
  "code": {},
  "message": {}
}
```

Contains detailed error information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_DetailedErrors">DetailedErrors</h2>
<!-- backwards compatibility -->
<a id="schemadetailederrors"></a>
<a id="schema_DetailedErrors"></a>
<a id="tocSdetailederrors"></a>
<a id="tocsdetailederrors"></a>

```json
[
  {
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_DisassociateAssetsRequest">DisassociateAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateassetsrequest"></a>
<a id="schema_DisassociateAssetsRequest"></a>
<a id="tocSdisassociateassetsrequest"></a>
<a id="tocsdisassociateassetsrequest"></a>

```json
{
  "hierarchyId": {},
  "childAssetId": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hierarchyId|object|true|none|none|
|childAssetId|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_DisassociateTimeSeriesFromAssetPropertyRequest">DisassociateTimeSeriesFromAssetPropertyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetimeseriesfromassetpropertyrequest"></a>
<a id="schema_DisassociateTimeSeriesFromAssetPropertyRequest"></a>
<a id="tocSdisassociatetimeseriesfromassetpropertyrequest"></a>
<a id="tocsdisassociatetimeseriesfromassetpropertyrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
"string"
```

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
```

<h2 id="tocS_VariableValue">VariableValue</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalue"></a>
<a id="schema_VariableValue"></a>
<a id="tocSvariablevalue"></a>
<a id="tocsvariablevalue"></a>

```json
{
  "propertyId": {},
  "hierarchyId": {}
}
```

Identifies a property value used in an expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|object|true|none|none|
|hierarchyId|object|false|none|none|

<h2 id="tocS_ExpressionVariable">ExpressionVariable</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionvariable"></a>
<a id="schema_ExpressionVariable"></a>
<a id="tocSexpressionvariable"></a>
<a id="tocsexpressionvariable"></a>

```json
{
  "name": {},
  "value": {
    "propertyId": {},
    "hierarchyId": {}
  }
}
```

Contains expression variable information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ExpressionVariables">ExpressionVariables</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionvariables"></a>
<a id="schema_ExpressionVariables"></a>
<a id="tocSexpressionvariables"></a>
<a id="tocsexpressionvariables"></a>

```json
[
  {
    "name": {},
    "value": {
      "propertyId": {},
      "hierarchyId": {}
    }
  }
]
```

<h2 id="tocS_ForwardingConfigState">ForwardingConfigState</h2>
<!-- backwards compatibility -->
<a id="schemaforwardingconfigstate"></a>
<a id="schema_ForwardingConfigState"></a>
<a id="tocSforwardingconfigstate"></a>
<a id="tocsforwardingconfigstate"></a>

```json
"DISABLED"
```

<h2 id="tocS_ForwardingConfig">ForwardingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaforwardingconfig"></a>
<a id="schema_ForwardingConfig"></a>
<a id="tocSforwardingconfig"></a>
<a id="tocsforwardingconfig"></a>

```json
{
  "state": {}
}
```

The forwarding configuration for a given property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|

<h2 id="tocS_GatewayCapabilitySummary">GatewayCapabilitySummary</h2>
<!-- backwards compatibility -->
<a id="schemagatewaycapabilitysummary"></a>
<a id="schema_GatewayCapabilitySummary"></a>
<a id="tocSgatewaycapabilitysummary"></a>
<a id="tocsgatewaycapabilitysummary"></a>

```json
{
  "capabilityNamespace": {},
  "capabilitySyncStatus": {}
}
```

Contains a summary of a gateway capability configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilityNamespace|object|true|none|none|
|capabilitySyncStatus|object|true|none|none|

<h2 id="tocS_GatewaySummary">GatewaySummary</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysummary"></a>
<a id="schema_GatewaySummary"></a>
<a id="tocSgatewaysummary"></a>
<a id="tocsgatewaysummary"></a>

```json
{
  "gatewayId": {},
  "gatewayName": {},
  "gatewayPlatform": {
    "greengrass": {
      "groupArn": {}
    },
    "greengrassV2": {
      "coreDeviceThingName": {}
    }
  },
  "gatewayCapabilitySummaries": {},
  "creationDate": {},
  "lastUpdateDate": {}
}
```

Contains a summary of a gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayId|object|true|none|none|
|gatewayName|object|true|none|none|
|gatewayPlatform|[GatewayPlatform](#schemagatewayplatform)|false|none|Contains a gateway's platform information.|
|gatewayCapabilitySummaries|object|false|none|none|
|creationDate|object|true|none|none|
|lastUpdateDate|object|true|none|none|

<h2 id="tocS_GatewaySummaries">GatewaySummaries</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysummaries"></a>
<a id="schema_GatewaySummaries"></a>
<a id="tocSgatewaysummaries"></a>
<a id="tocsgatewaysummaries"></a>

```json
[
  {
    "gatewayId": {},
    "gatewayName": {},
    "gatewayPlatform": {
      "greengrass": {
        "groupArn": {}
      },
      "greengrassV2": {
        "coreDeviceThingName": {}
      }
    },
    "gatewayCapabilitySummaries": {},
    "creationDate": {},
    "lastUpdateDate": {}
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

<h2 id="tocS_GetAssetPropertyAggregatesRequest">GetAssetPropertyAggregatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyaggregatesrequest"></a>
<a id="schema_GetAssetPropertyAggregatesRequest"></a>
<a id="tocSgetassetpropertyaggregatesrequest"></a>
<a id="tocsgetassetpropertyaggregatesrequest"></a>

```json
{}
```

<h2 id="tocS_GetAssetPropertyValueHistoryRequest">GetAssetPropertyValueHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyvaluehistoryrequest"></a>
<a id="schema_GetAssetPropertyValueHistoryRequest"></a>
<a id="tocSgetassetpropertyvaluehistoryrequest"></a>
<a id="tocsgetassetpropertyvaluehistoryrequest"></a>

```json
{}
```

<h2 id="tocS_GetAssetPropertyValueRequest">GetAssetPropertyValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassetpropertyvaluerequest"></a>
<a id="schema_GetAssetPropertyValueRequest"></a>
<a id="tocSgetassetpropertyvaluerequest"></a>
<a id="tocsgetassetpropertyvaluerequest"></a>

```json
{}
```

<h2 id="tocS_TimeInSeconds">TimeInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematimeinseconds"></a>
<a id="schema_TimeInSeconds"></a>
<a id="tocStimeinseconds"></a>
<a id="tocstimeinseconds"></a>

```json
1
```

<h2 id="tocS_OffsetInNanos">OffsetInNanos</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetinnanos"></a>
<a id="schema_OffsetInNanos"></a>
<a id="tocSoffsetinnanos"></a>
<a id="tocsoffsetinnanos"></a>

```json
0
```

<h2 id="tocS_IntervalInSeconds">IntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaintervalinseconds"></a>
<a id="schema_IntervalInSeconds"></a>
<a id="tocSintervalinseconds"></a>
<a id="tocsintervalinseconds"></a>

```json
1
```

<h2 id="tocS_MaxInterpolatedResults">MaxInterpolatedResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxinterpolatedresults"></a>
<a id="schema_MaxInterpolatedResults"></a>
<a id="tocSmaxinterpolatedresults"></a>
<a id="tocsmaxinterpolatedresults"></a>

```json
1
```

<h2 id="tocS_InterpolationType">InterpolationType</h2>
<!-- backwards compatibility -->
<a id="schemainterpolationtype"></a>
<a id="schema_InterpolationType"></a>
<a id="tocSinterpolationtype"></a>
<a id="tocsinterpolationtype"></a>

```json
"string"
```

<h2 id="tocS_IntervalWindowInSeconds">IntervalWindowInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaintervalwindowinseconds"></a>
<a id="schema_IntervalWindowInSeconds"></a>
<a id="tocSintervalwindowinseconds"></a>
<a id="tocsintervalwindowinseconds"></a>

```json
1
```

<h2 id="tocS_GetInterpolatedAssetPropertyValuesRequest">GetInterpolatedAssetPropertyValuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinterpolatedassetpropertyvaluesrequest"></a>
<a id="schema_GetInterpolatedAssetPropertyValuesRequest"></a>
<a id="tocSgetinterpolatedassetpropertyvaluesrequest"></a>
<a id="tocsgetinterpolatedassetpropertyvaluesrequest"></a>

```json
{}
```

<h2 id="tocS_InterpolatedAssetPropertyValues">InterpolatedAssetPropertyValues</h2>
<!-- backwards compatibility -->
<a id="schemainterpolatedassetpropertyvalues"></a>
<a id="schema_InterpolatedAssetPropertyValues"></a>
<a id="tocSinterpolatedassetpropertyvalues"></a>
<a id="tocsinterpolatedassetpropertyvalues"></a>

```json
[
  {
    "timestamp": {
      "timeInSeconds": {},
      "offsetInNanos": {}
    },
    "value": {
      "stringValue": {},
      "integerValue": {},
      "doubleValue": {},
      "booleanValue": {}
    }
  }
]
```

<h2 id="tocS_IdentityId">IdentityId</h2>
<!-- backwards compatibility -->
<a id="schemaidentityid"></a>
<a id="schema_IdentityId"></a>
<a id="tocSidentityid"></a>
<a id="tocsidentityid"></a>

```json
"string"
```

<h2 id="tocS_IdentityType">IdentityType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytype"></a>
<a id="schema_IdentityType"></a>
<a id="tocSidentitytype"></a>
<a id="tocsidentitytype"></a>

```json
"USER"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "id": {},
  "file": {
    "data": {},
    "type": {}
  }
}
```

<p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|file|[ImageFile](#schemaimagefile)|false|none|Contains an image file.|

<h2 id="tocS_InterpolatedAssetPropertyValue">InterpolatedAssetPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemainterpolatedassetpropertyvalue"></a>
<a id="schema_InterpolatedAssetPropertyValue"></a>
<a id="tocSinterpolatedassetpropertyvalue"></a>
<a id="tocsinterpolatedassetpropertyvalue"></a>

```json
{
  "timestamp": {
    "timeInSeconds": {},
    "offsetInNanos": {}
  },
  "value": {
    "stringValue": {},
    "integerValue": {},
    "doubleValue": {},
    "booleanValue": {}
  }
}
```

Contains information about an interpolated asset property value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|[TimeInNanos](#schematimeinnanos)|true|none|Contains a timestamp with optional nanosecond granularity.|
|value|[Variant](#schemavariant)|true|none|Contains an asset property value (of a single type only).|

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
"string"
```

<h2 id="tocS_JobSummary">JobSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobsummary"></a>
<a id="schema_JobSummary"></a>
<a id="tocSjobsummary"></a>
<a id="tocsjobsummary"></a>

```json
{
  "id": {},
  "name": {},
  "status": {}
}
```

Contains a job summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_JobSummaries">JobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemajobsummaries"></a>
<a id="schema_JobSummaries"></a>
<a id="tocSjobsummaries"></a>
<a id="tocsjobsummaries"></a>

```json
[
  {
    "id": {},
    "name": {},
    "status": {}
  }
]
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"PORTAL"
```

<h2 id="tocS_ListAccessPoliciesRequest">ListAccessPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspoliciesrequest"></a>
<a id="schema_ListAccessPoliciesRequest"></a>
<a id="tocSlistaccesspoliciesrequest"></a>
<a id="tocslistaccesspoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssetModelPropertiesFilter">ListAssetModelPropertiesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistassetmodelpropertiesfilter"></a>
<a id="schema_ListAssetModelPropertiesFilter"></a>
<a id="tocSlistassetmodelpropertiesfilter"></a>
<a id="tocslistassetmodelpropertiesfilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListAssetModelPropertiesRequest">ListAssetModelPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetmodelpropertiesrequest"></a>
<a id="schema_ListAssetModelPropertiesRequest"></a>
<a id="tocSlistassetmodelpropertiesrequest"></a>
<a id="tocslistassetmodelpropertiesrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssetModelsRequest">ListAssetModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetmodelsrequest"></a>
<a id="schema_ListAssetModelsRequest"></a>
<a id="tocSlistassetmodelsrequest"></a>
<a id="tocslistassetmodelsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssetPropertiesFilter">ListAssetPropertiesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistassetpropertiesfilter"></a>
<a id="schema_ListAssetPropertiesFilter"></a>
<a id="tocSlistassetpropertiesfilter"></a>
<a id="tocslistassetpropertiesfilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListAssetPropertiesRequest">ListAssetPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetpropertiesrequest"></a>
<a id="schema_ListAssetPropertiesRequest"></a>
<a id="tocSlistassetpropertiesrequest"></a>
<a id="tocslistassetpropertiesrequest"></a>

```json
{}
```

<h2 id="tocS_TraversalType">TraversalType</h2>
<!-- backwards compatibility -->
<a id="schematraversaltype"></a>
<a id="schema_TraversalType"></a>
<a id="tocStraversaltype"></a>
<a id="tocstraversaltype"></a>

```json
"PATH_TO_ROOT"
```

<h2 id="tocS_ListAssetRelationshipsRequest">ListAssetRelationshipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetrelationshipsrequest"></a>
<a id="schema_ListAssetRelationshipsRequest"></a>
<a id="tocSlistassetrelationshipsrequest"></a>
<a id="tocslistassetrelationshipsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssetsFilter">ListAssetsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsfilter"></a>
<a id="schema_ListAssetsFilter"></a>
<a id="tocSlistassetsfilter"></a>
<a id="tocslistassetsfilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListAssetsRequest">ListAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsrequest"></a>
<a id="schema_ListAssetsRequest"></a>
<a id="tocSlistassetsrequest"></a>
<a id="tocslistassetsrequest"></a>

```json
{}
```

<h2 id="tocS_TraversalDirection">TraversalDirection</h2>
<!-- backwards compatibility -->
<a id="schematraversaldirection"></a>
<a id="schema_TraversalDirection"></a>
<a id="tocStraversaldirection"></a>
<a id="tocstraversaldirection"></a>

```json
"PARENT"
```

<h2 id="tocS_ListAssociatedAssetsRequest">ListAssociatedAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedassetsrequest"></a>
<a id="schema_ListAssociatedAssetsRequest"></a>
<a id="tocSlistassociatedassetsrequest"></a>
<a id="tocslistassociatedassetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListBulkImportJobsFilter">ListBulkImportJobsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkimportjobsfilter"></a>
<a id="schema_ListBulkImportJobsFilter"></a>
<a id="tocSlistbulkimportjobsfilter"></a>
<a id="tocslistbulkimportjobsfilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListBulkImportJobsRequest">ListBulkImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbulkimportjobsrequest"></a>
<a id="schema_ListBulkImportJobsRequest"></a>
<a id="tocSlistbulkimportjobsrequest"></a>
<a id="tocslistbulkimportjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDashboardsRequest">ListDashboardsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdashboardsrequest"></a>
<a id="schema_ListDashboardsRequest"></a>
<a id="tocSlistdashboardsrequest"></a>
<a id="tocslistdashboardsrequest"></a>

```json
{}
```

<h2 id="tocS_ListGatewaysRequest">ListGatewaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysrequest"></a>
<a id="schema_ListGatewaysRequest"></a>
<a id="tocSlistgatewaysrequest"></a>
<a id="tocslistgatewaysrequest"></a>

```json
{}
```

<h2 id="tocS_ListPortalsRequest">ListPortalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistportalsrequest"></a>
<a id="schema_ListPortalsRequest"></a>
<a id="tocSlistportalsrequest"></a>
<a id="tocslistportalsrequest"></a>

```json
{}
```

<h2 id="tocS_PortalSummaries">PortalSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaportalsummaries"></a>
<a id="schema_PortalSummaries"></a>
<a id="tocSportalsummaries"></a>
<a id="tocsportalsummaries"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "startUrl": {},
    "creationDate": {},
    "lastUpdateDate": {},
    "roleArn": {},
    "status": {
      "state": {},
      "error": {
        "code": {},
        "message": {}
      }
    }
  }
]
```

<h2 id="tocS_ListProjectAssetsRequest">ListProjectAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectassetsrequest"></a>
<a id="schema_ListProjectAssetsRequest"></a>
<a id="tocSlistprojectassetsrequest"></a>
<a id="tocslistprojectassetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{}
```

<h2 id="tocS_ProjectSummaries">ProjectSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummaries"></a>
<a id="schema_ProjectSummaries"></a>
<a id="tocSprojectsummaries"></a>
<a id="tocsprojectsummaries"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "creationDate": {},
    "lastUpdateDate": {}
  }
]
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

<h2 id="tocS_ListTimeSeriesType">ListTimeSeriesType</h2>
<!-- backwards compatibility -->
<a id="schemalisttimeseriestype"></a>
<a id="schema_ListTimeSeriesType"></a>
<a id="tocSlisttimeseriestype"></a>
<a id="tocslisttimeseriestype"></a>

```json
"ASSOCIATED"
```

<h2 id="tocS_ListTimeSeriesRequest">ListTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttimeseriesrequest"></a>
<a id="schema_ListTimeSeriesRequest"></a>
<a id="tocSlisttimeseriesrequest"></a>
<a id="tocslisttimeseriesrequest"></a>

```json
{}
```

<h2 id="tocS_TimeSeriesSummaries">TimeSeriesSummaries</h2>
<!-- backwards compatibility -->
<a id="schematimeseriessummaries"></a>
<a id="schema_TimeSeriesSummaries"></a>
<a id="tocStimeseriessummaries"></a>
<a id="tocstimeseriessummaries"></a>

```json
[
  {
    "assetId": {},
    "propertyId": {},
    "alias": {},
    "timeSeriesId": {},
    "dataType": {},
    "dataTypeSpec": {},
    "timeSeriesCreationDate": {},
    "timeSeriesLastUpdateDate": {},
    "timeSeriesArn": {}
  }
]
```

<h2 id="tocS_Macro">Macro</h2>
<!-- backwards compatibility -->
<a id="schemamacro"></a>
<a id="schema_Macro"></a>
<a id="tocSmacro"></a>
<a id="tocsmacro"></a>

```json
"string"
```

<h2 id="tocS_MeasurementProcessingConfig">MeasurementProcessingConfig</h2>
<!-- backwards compatibility -->
<a id="schemameasurementprocessingconfig"></a>
<a id="schema_MeasurementProcessingConfig"></a>
<a id="tocSmeasurementprocessingconfig"></a>
<a id="tocsmeasurementprocessingconfig"></a>

```json
{
  "forwardingConfig": {
    "state": {}
  }
}
```

The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardingConfig|object|true|none|none|

<h2 id="tocS_Measurement">Measurement</h2>
<!-- backwards compatibility -->
<a id="schemameasurement"></a>
<a id="schema_Measurement"></a>
<a id="tocSmeasurement"></a>
<a id="tocsmeasurement"></a>

```json
{
  "processingConfig": {
    "forwardingConfig": {
      "state": {}
    }
  }
}
```

Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processingConfig|object|false|none|none|

<h2 id="tocS_MetricWindow">MetricWindow</h2>
<!-- backwards compatibility -->
<a id="schemametricwindow"></a>
<a id="schema_MetricWindow"></a>
<a id="tocSmetricwindow"></a>
<a id="tocsmetricwindow"></a>

```json
{
  "tumbling": {
    "interval": {},
    "offset": {}
  }
}
```

Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tumbling|object|false|none|none|

<h2 id="tocS_MetricProcessingConfig">MetricProcessingConfig</h2>
<!-- backwards compatibility -->
<a id="schemametricprocessingconfig"></a>
<a id="schema_MetricProcessingConfig"></a>
<a id="tocSmetricprocessingconfig"></a>
<a id="tocsmetricprocessingconfig"></a>

```json
{
  "computeLocation": {}
}
```

The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeLocation|object|true|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "expression": {},
  "variables": {},
  "window": {
    "tumbling": {
      "interval": {},
      "offset": {}
    }
  },
  "processingConfig": {
    "computeLocation": {}
  }
}
```

<p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|object|true|none|none|
|variables|object|true|none|none|
|window|object|true|none|none|
|processingConfig|object|false|none|none|

<h2 id="tocS_TumblingWindow">TumblingWindow</h2>
<!-- backwards compatibility -->
<a id="schematumblingwindow"></a>
<a id="schema_TumblingWindow"></a>
<a id="tocStumblingwindow"></a>
<a id="tocstumblingwindow"></a>

```json
{
  "interval": {},
  "offset": {}
}
```

<p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.</p> <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you specify an interval or offset. Note that <code>m</code> represents minutes, <code>h</code> represents hours, <code>d</code> represents days, and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds in <code>offset</code>.</p> <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example, <code>PT5S</code> represents 5 seconds, <code>PT5M</code> represents 5 minutes, and <code>PT5H</code> represents 5 hours.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|object|true|none|none|
|offset|object|false|none|none|

<h2 id="tocS_MonitorErrorCode">MonitorErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemamonitorerrorcode"></a>
<a id="schema_MonitorErrorCode"></a>
<a id="tocSmonitorerrorcode"></a>
<a id="tocsmonitorerrorcode"></a>

```json
"INTERNAL_FAILURE"
```

<h2 id="tocS_MonitorErrorMessage">MonitorErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemamonitorerrormessage"></a>
<a id="schema_MonitorErrorMessage"></a>
<a id="tocSmonitorerrormessage"></a>
<a id="tocsmonitorerrormessage"></a>

```json
"string"
```

<h2 id="tocS_MonitorErrorDetails">MonitorErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemamonitorerrordetails"></a>
<a id="schema_MonitorErrorDetails"></a>
<a id="tocSmonitorerrordetails"></a>
<a id="tocsmonitorerrordetails"></a>

```json
{
  "code": {},
  "message": {}
}
```

Contains IoT SiteWise Monitor error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_Offset">Offset</h2>
<!-- backwards compatibility -->
<a id="schemaoffset"></a>
<a id="schema_Offset"></a>
<a id="tocSoffset"></a>
<a id="tocsoffset"></a>

```json
"string"
```

<h2 id="tocS_PortalState">PortalState</h2>
<!-- backwards compatibility -->
<a id="schemaportalstate"></a>
<a id="schema_PortalState"></a>
<a id="tocSportalstate"></a>
<a id="tocsportalstate"></a>

```json
"CREATING"
```

<h2 id="tocS_PortalSummary">PortalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaportalsummary"></a>
<a id="schema_PortalSummary"></a>
<a id="tocSportalsummary"></a>
<a id="tocsportalsummary"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "startUrl": {},
  "creationDate": {},
  "lastUpdateDate": {},
  "roleArn": {},
  "status": {
    "state": {},
    "error": {
      "code": {},
      "message": {}
    }
  }
}
```

Contains a portal summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|startUrl|object|true|none|none|
|creationDate|object|false|none|none|
|lastUpdateDate|object|false|none|none|
|roleArn|object|false|none|none|
|status|[PortalStatus](#schemaportalstatus)|true|none|Contains information about the current status of a portal.|

<h2 id="tocS_ProjectSummary">ProjectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummary"></a>
<a id="schema_ProjectSummary"></a>
<a id="tocSprojectsummary"></a>
<a id="tocsprojectsummary"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "creationDate": {},
  "lastUpdateDate": {}
}
```

Contains project summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|creationDate|object|false|none|none|
|lastUpdateDate|object|false|none|none|

<h2 id="tocS_PropertyNotificationTopic">PropertyNotificationTopic</h2>
<!-- backwards compatibility -->
<a id="schemapropertynotificationtopic"></a>
<a id="schema_PropertyNotificationTopic"></a>
<a id="tocSpropertynotificationtopic"></a>
<a id="tocspropertynotificationtopic"></a>

```json
"string"
```

<h2 id="tocS_PropertyNotificationState">PropertyNotificationState</h2>
<!-- backwards compatibility -->
<a id="schemapropertynotificationstate"></a>
<a id="schema_PropertyNotificationState"></a>
<a id="tocSpropertynotificationstate"></a>
<a id="tocspropertynotificationstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_Transform">Transform</h2>
<!-- backwards compatibility -->
<a id="schematransform"></a>
<a id="schema_Transform"></a>
<a id="tocStransform"></a>
<a id="tocstransform"></a>

```json
{
  "expression": {},
  "variables": {},
  "processingConfig": {
    "computeLocation": {},
    "forwardingConfig": {
      "state": {}
    }
  }
}
```

<p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|object|true|none|none|
|variables|object|true|none|none|
|processingConfig|object|false|none|none|

<h2 id="tocS_PropertyValueBooleanValue">PropertyValueBooleanValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvaluebooleanvalue"></a>
<a id="schema_PropertyValueBooleanValue"></a>
<a id="tocSpropertyvaluebooleanvalue"></a>
<a id="tocspropertyvaluebooleanvalue"></a>

```json
true
```

<h2 id="tocS_PropertyValueDoubleValue">PropertyValueDoubleValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvaluedoublevalue"></a>
<a id="schema_PropertyValueDoubleValue"></a>
<a id="tocSpropertyvaluedoublevalue"></a>
<a id="tocspropertyvaluedoublevalue"></a>

```json
0
```

<h2 id="tocS_PropertyValueIntegerValue">PropertyValueIntegerValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalueintegervalue"></a>
<a id="schema_PropertyValueIntegerValue"></a>
<a id="tocSpropertyvalueintegervalue"></a>
<a id="tocspropertyvalueintegervalue"></a>

```json
0
```

<h2 id="tocS_PropertyValueStringValue">PropertyValueStringValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvaluestringvalue"></a>
<a id="schema_PropertyValueStringValue"></a>
<a id="tocSpropertyvaluestringvalue"></a>
<a id="tocspropertyvaluestringvalue"></a>

```json
"string"
```

<h2 id="tocS_PutDefaultEncryptionConfigurationRequest">PutDefaultEncryptionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdefaultencryptionconfigurationrequest"></a>
<a id="schema_PutDefaultEncryptionConfigurationRequest"></a>
<a id="tocSputdefaultencryptionconfigurationrequest"></a>
<a id="tocsputdefaultencryptionconfigurationrequest"></a>

```json
{
  "encryptionType": {},
  "kmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|object|true|none|none|
|kmsKeyId|object|false|none|none|

<h2 id="tocS_PutLoggingOptionsRequest">PutLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingoptionsrequest"></a>
<a id="schema_PutLoggingOptionsRequest"></a>
<a id="tocSputloggingoptionsrequest"></a>
<a id="tocsputloggingoptionsrequest"></a>

```json
{
  "loggingOptions": {
    "level": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|true|none|none|

<h2 id="tocS_PutStorageConfigurationRequest">PutStorageConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputstorageconfigurationrequest"></a>
<a id="schema_PutStorageConfigurationRequest"></a>
<a id="tocSputstorageconfigurationrequest"></a>
<a id="tocsputstorageconfigurationrequest"></a>

```json
{
  "storageType": {},
  "multiLayerStorage": {
    "customerManagedS3Storage": {
      "s3ResourceArn": {},
      "roleArn": {}
    }
  },
  "disassociatedDataStorage": {},
  "retentionPeriod": {
    "numberOfDays": {},
    "unlimited": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageType|object|true|none|none|
|multiLayerStorage|object|false|none|none|
|disassociatedDataStorage|object|false|none|none|
|retentionPeriod|[RetentionPeriod](#schemaretentionperiod)|false|none|How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TimeSeriesSummary">TimeSeriesSummary</h2>
<!-- backwards compatibility -->
<a id="schematimeseriessummary"></a>
<a id="schema_TimeSeriesSummary"></a>
<a id="tocStimeseriessummary"></a>
<a id="tocstimeseriessummary"></a>

```json
{
  "assetId": {},
  "propertyId": {},
  "alias": {},
  "timeSeriesId": {},
  "dataType": {},
  "dataTypeSpec": {},
  "timeSeriesCreationDate": {},
  "timeSeriesLastUpdateDate": {},
  "timeSeriesArn": {}
}
```

Contains a summary of a time series (data stream).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|object|false|none|none|
|propertyId|object|false|none|none|
|alias|object|false|none|none|
|timeSeriesId|object|true|none|none|
|dataType|object|true|none|none|
|dataTypeSpec|object|false|none|none|
|timeSeriesCreationDate|object|true|none|none|
|timeSeriesLastUpdateDate|object|true|none|none|
|timeSeriesArn|object|true|none|none|

<h2 id="tocS_TransformProcessingConfig">TransformProcessingConfig</h2>
<!-- backwards compatibility -->
<a id="schematransformprocessingconfig"></a>
<a id="schema_TransformProcessingConfig"></a>
<a id="tocStransformprocessingconfig"></a>
<a id="tocstransformprocessingconfig"></a>

```json
{
  "computeLocation": {},
  "forwardingConfig": {
    "state": {}
  }
}
```

The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeLocation|object|true|none|none|
|forwardingConfig|[ForwardingConfig](#schemaforwardingconfig)|false|none|The forwarding configuration for a given property.|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAccessPolicyRequest">UpdateAccessPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccesspolicyrequest"></a>
<a id="schema_UpdateAccessPolicyRequest"></a>
<a id="tocSupdateaccesspolicyrequest"></a>
<a id="tocsupdateaccesspolicyrequest"></a>

```json
{
  "accessPolicyIdentity": {
    "user": {
      "id": {}
    },
    "group": {
      "id": {}
    },
    "iamUser": {
      "arn": {}
    },
    "iamRole": {
      "arn": {}
    }
  },
  "accessPolicyResource": {
    "portal": {
      "id": {}
    },
    "project": {
      "id": {}
    }
  },
  "accessPolicyPermission": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicyIdentity|object|true|none|none|
|accessPolicyResource|object|true|none|none|
|accessPolicyPermission|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateAssetModelRequest">UpdateAssetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetmodelrequest"></a>
<a id="schema_UpdateAssetModelRequest"></a>
<a id="tocSupdateassetmodelrequest"></a>
<a id="tocsupdateassetmodelrequest"></a>

```json
{
  "assetModelName": {},
  "assetModelDescription": {},
  "assetModelProperties": {},
  "assetModelHierarchies": {},
  "assetModelCompositeModels": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetModelName|object|true|none|none|
|assetModelDescription|object|false|none|none|
|assetModelProperties|object|false|none|none|
|assetModelHierarchies|object|false|none|none|
|assetModelCompositeModels|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateAssetPropertyRequest">UpdateAssetPropertyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetpropertyrequest"></a>
<a id="schema_UpdateAssetPropertyRequest"></a>
<a id="tocSupdateassetpropertyrequest"></a>
<a id="tocsupdateassetpropertyrequest"></a>

```json
{
  "propertyAlias": {},
  "propertyNotificationState": {},
  "clientToken": {},
  "propertyUnit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyAlias|object|false|none|none|
|propertyNotificationState|object|false|none|none|
|clientToken|object|false|none|none|
|propertyUnit|object|false|none|none|

<h2 id="tocS_UpdateAssetRequest">UpdateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetrequest"></a>
<a id="schema_UpdateAssetRequest"></a>
<a id="tocSupdateassetrequest"></a>
<a id="tocsupdateassetrequest"></a>

```json
{
  "assetName": {},
  "clientToken": {},
  "assetDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetName|object|true|none|none|
|clientToken|object|false|none|none|
|assetDescription|object|false|none|none|

<h2 id="tocS_UpdateDashboardRequest">UpdateDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedashboardrequest"></a>
<a id="schema_UpdateDashboardRequest"></a>
<a id="tocSupdatedashboardrequest"></a>
<a id="tocsupdatedashboardrequest"></a>

```json
{
  "dashboardName": {},
  "dashboardDescription": {},
  "dashboardDefinition": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboardName|object|true|none|none|
|dashboardDescription|object|false|none|none|
|dashboardDefinition|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateGatewayCapabilityConfigurationRequest">UpdateGatewayCapabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaycapabilityconfigurationrequest"></a>
<a id="schema_UpdateGatewayCapabilityConfigurationRequest"></a>
<a id="tocSupdategatewaycapabilityconfigurationrequest"></a>
<a id="tocsupdategatewaycapabilityconfigurationrequest"></a>

```json
{
  "capabilityNamespace": {},
  "capabilityConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilityNamespace|object|true|none|none|
|capabilityConfiguration|object|true|none|none|

<h2 id="tocS_UpdateGatewayRequest">UpdateGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayrequest"></a>
<a id="schema_UpdateGatewayRequest"></a>
<a id="tocSupdategatewayrequest"></a>
<a id="tocsupdategatewayrequest"></a>

```json
{
  "gatewayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewayName|object|true|none|none|

<h2 id="tocS_UpdatePortalRequest">UpdatePortalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportalrequest"></a>
<a id="schema_UpdatePortalRequest"></a>
<a id="tocSupdateportalrequest"></a>
<a id="tocsupdateportalrequest"></a>

```json
{
  "portalName": {},
  "portalDescription": {},
  "portalContactEmail": {},
  "portalLogoImage": {
    "id": {},
    "file": {
      "data": {},
      "type": {}
    }
  },
  "roleArn": {},
  "clientToken": {},
  "notificationSenderEmail": {},
  "alarms": {
    "alarmRoleArn": {},
    "notificationLambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalName|object|true|none|none|
|portalDescription|object|false|none|none|
|portalContactEmail|object|true|none|none|
|portalLogoImage|[Image](#schemaimage)|false|none|<p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>|
|roleArn|object|true|none|none|
|clientToken|object|false|none|none|
|notificationSenderEmail|object|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "projectName": {},
  "projectDescription": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|object|true|none|none|
|projectDescription|object|false|none|none|
|clientToken|object|false|none|none|
