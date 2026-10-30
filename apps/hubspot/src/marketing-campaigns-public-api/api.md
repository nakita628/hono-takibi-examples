<h1 id="marketing-campaigns-public-api">Marketing Campaigns Public Api v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|marketing.campaigns.read||
|marketing.campaigns.revenue.full.read||
|marketing.campaigns.revenue.lite.read||
|marketing.campaigns.revenue.read||
|marketing.campaigns.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="marketing-campaigns-public-api-advanced">Advanced</h1>

## Clone a campaign

<a id="opIdpost-/marketing/campaigns/2026-09/clone_/marketing/campaigns/2026-09-beta/clone"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/clone`

Clone a campaign identified by sourceCampaignGuid in the request body. The cloned campaign will have its own GUID and the provided properties. Asset cloning is performed asynchronously. Use the clone-status endpoint to check progress.

> Body parameter

```json
null
```

<h3 id="clone-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicCampaignCloneInput](#schemapubliccampaigncloneinput)|true|none|
|» assetsToClone|body|object|true|A map of asset types to be cloned, where each key is an asset type and the value is an array of asset identifiers. It is an object.|
|» » **additionalProperties**|body|[string]|false|none|
|» audience|body|string|false|The target audience for the cloned campaign. It is a string.|
|» currencyCode|body|string|false|The currency code for the cloned campaign's budget. It is a string. This value is optional.|
|» endDate|body|string|false|The end date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD).  If omitted, this will match the start date of the source campaign.|
|» name|body|string|true|The name for the new cloned campaign. It is a string. The name needs to be unique compared to other campaigns in the portal.|
|» notes|body|string|false|Additional notes or comments about the cloned campaign. It is a string. This value is optional.|
|» shouldCloneDraftNodes|body|boolean|true|A boolean indicating whether draft nodes should be cloned. By default this is true.|
|» shouldCloneEdges|body|boolean|true|A boolean indicating whether edges should be cloned. By default this is true.|
|» shouldCloneStickyNotes|body|boolean|true|A boolean indicating whether sticky notes should be cloned. By default this is true.|
|» shouldCloneTasks|body|boolean|true|A boolean indicating whether tasks should be cloned. By default this is true.|
|» shouldCloneTrackingUrls|body|boolean|true|A boolean indicating whether tracking URLs should be cloned. By default this is true.|
|» sourceCampaignGuid|body|string|true|The unique identifier of the campaign to be cloned. It is a string.|
|» startDate|body|string|false|The start date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD). If omitted, this will match the start date of the source campaign.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="clone-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicCampaignCloneResponse](#schemapubliccampaigncloneresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

<h1 id="marketing-campaigns-public-api-assets">Assets</h1>

## Retrieve asset types

<a id="opIdget-/marketing/campaigns/2026-09/asset-types"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/asset-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/asset-types`

List all supported campaign asset types. This endpoint allows you to retrieve a list of asset types that can be used in campaigns, which is useful for understanding the available options when creating or managing campaign assets.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-asset-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseStringNoPaging](#schemacollectionresponsestringnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Retrieve cloneable asset types

<a id="opIdget-/marketing/campaigns/2026-09/clone/asset-types_/marketing/campaigns/2026-09-beta/clone/asset-types"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/clone/asset-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/clone/asset-types`

List the portal-wide asset types that can be cloned in a campaign clone operation.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-cloneable-asset-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseStringNoPaging](#schemacollectionresponsestringnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Retrieve assets

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}`

List all assets of a specific campaign by asset type. This endpoint allows you to retrieve various assets associated with a campaign, filtered by the type of asset. It supports pagination to handle large sets of results.

<h3 id="retrieve-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetType|path|string|true|The type of asset to filter the list.|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|endDate|query|string|false|The end date for filtering assets, formatted as a string.|
|limit|query|string|false|The maximum number of results to display per page.|
|startDate|query|string|false|The start date for filtering assets, formatted as a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicCampaignAssetForwardPaging](#schemacollectionresponsepubliccampaignassetforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Add asset

<a id="opIdput-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}`

Associate an asset with a specific campaign. This operation links an asset of a specified type and ID to a campaign identified by its unique campaignGuid. It is useful for organizing and managing campaign assets within HubSpot. 

If an asset has just been created, a 400 error may appear in the response when trying to add the new asset. It is recommended to wait a few minutes before trying again. 

<h3 id="add-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The unique identifier of the asset to be associated with the campaign.|
|assetType|path|string|true|The type of asset being associated with the campaign.|
|campaignGuid|path|string|true|The unique identifier of the campaign to which the asset will be associated.|

> Example responses

> default Response

```json
null
```

<h3 id="add-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Remove asset

<a id="opIddelete-/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/campaigns/2026-09/{campaignGuid}/assets/{assetType}/{assetId}`

Disassociate an asset from a specified campaign. This operation removes the link between the asset and the campaign, effectively detaching the asset from the campaign's context.

<h3 id="remove-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The unique identifier of the asset to be disassociated from the campaign.|
|assetType|path|string|true|The type of asset to be disassociated from the campaign.|
|campaignGuid|path|string|true|The unique identifier of the campaign from which the asset will be disassociated.|

> Example responses

> default Response

```json
null
```

<h3 id="remove-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

<h1 id="marketing-campaigns-public-api-basic">Basic</h1>

## Retrieve campaigns

<a id="opIdget-/marketing/campaigns/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09`

Retrieve a page of marketing campaigns from your HubSpot account. This endpoint allows you to sort, filter, and paginate through campaigns, making it useful for managing and analyzing your marketing efforts.

<h3 id="retrieve-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|A string to filter campaigns by name.|
|properties|query|[string]|false|An array of property names to include in the response.|
|sort|query|string|false|A string to specify the sorting order of the results.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicCampaign](#schemacollectionresponsewithtotalpubliccampaign)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Create a campaign

<a id="opIdpost-/marketing/campaigns/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09`

Create a campaign with the specified properties and receive a copy of the object, including its ID. Read-only and non-existent properties will result in a 400 error. Note: The 'hs_goal' property is deprecated and will be ignored if provided.

> Body parameter

```json
null
```

<h3 id="create-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicCampaignInput](#schemapubliccampaigninput)|true|none|
|» properties|body|object|true|An object containing key-value pairs where each key is a property name and each value is a string representing the property's value. This object holds the various attributes of the campaign.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicCampaign](#schemapubliccampaign)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Retrieve clone status

<a id="opIdget-/marketing/campaigns/2026-09/clone/{campaignGuid}/status_/marketing/campaigns/2026-09-beta/clone/{campaignGuid}/status"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/clone/{campaignGuid}/status' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/clone/{campaignGuid}/status`

Check the status of an asynchronous campaign clone operation. The campaignGuid path parameter should be the GUID of the new campaign returned by the clone endpoint.

<h3 id="retrieve-clone-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier (GUID) of the new campaign returned by the clone endpoint.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-clone-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCampaignCloneResponse](#schemapubliccampaigncloneresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Retrieve a campaign

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}`

Retrieve details of a specific marketing campaign identified by its internal ID. This endpoint allows you to access campaign information and associated assets. It is useful for obtaining campaign data for analysis or reporting purposes. If the properties to be returned are not defined with the 'properties' query parameter, the response will include an empty properties map. 

<h3 id="retrieve-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign to retrieve.|
|endDate|query|string|false|The end date for filtering campaign data, formatted as YYYY-MM-DD.|
|properties|query|[string]|false|A comma-separated list of property names to include in the response.|
|startDate|query|string|false|The start date for filtering campaign data, formatted as YYYY-MM-DD.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCampaignWithAssets](#schemapubliccampaignwithassets)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Delete a campaign

<a id="opIddelete-/marketing/campaigns/2026-09/{campaignGuid}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/campaigns/2026-09/{campaignGuid}`

Delete a specified campaign from the system. This operation will remove the campaign identified by the given campaignGuid from your HubSpot account.

<h3 id="delete-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Update a campaign

<a id="opIdpatch-/marketing/campaigns/2026-09/{campaignGuid}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /marketing/campaigns/2026-09/{campaignGuid}`

Perform a partial update of a campaign identified by the specified ID. Provided property values will be overwritten. Read-only and non-existent properties will result in a 400 error. Property values can be cleared by passing an empty string. Note: The 'hs_goal' property is deprecated and will be ignored if provided.

> Body parameter

```json
null
```

<h3 id="update-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign to update.|
|body|body|[PublicCampaignInput](#schemapubliccampaigninput)|true|none|
|» properties|body|object|true|An object containing key-value pairs where each key is a property name and each value is a string representing the property's value. This object holds the various attributes of the campaign.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCampaign](#schemapubliccampaign)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

<h1 id="marketing-campaigns-public-api-batch">Batch</h1>

## Batch archive campaigns

<a id="opIdpost-/marketing/campaigns/2026-09/batch/archive"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/batch/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/batch/archive`

Delete a batch of campaigns using their identifiers. This endpoint allows you to efficiently remove multiple campaigns at once, streamlining the process of managing campaign data. It is particularly useful for cleaning up outdated or unnecessary campaigns in bulk.

> Body parameter

```json
null
```

<h3 id="batch-archive-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicCampaignDeleteInput](#schemabatchinputpubliccampaigndeleteinput)|true|none|
|» inputs|body|[[PublicCampaignDeleteInput](#schemapubliccampaigndeleteinput)]|true|An array of PublicCampaignDeleteInput objects, each representing a campaign to be deleted. Each object must include the campaign's unique identifier.|

> Example responses

> default Response

```json
null
```

<h3 id="batch-archive-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Batch create campaigns

<a id="opIdpost-/marketing/campaigns/2026-09/batch/create"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/batch/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/batch/create`

Create a batch of marketing campaigns with specified properties. This endpoint allows for the creation of multiple campaigns in a single request. Note that the 'hs_goal' property is deprecated and will be ignored if included in the request.

> Body parameter

```json
null
```

<h3 id="batch-create-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicCampaignInput](#schemabatchinputpubliccampaigninput)|true|none|
|» inputs|body|[[PublicCampaignInput](#schemapubliccampaigninput)]|true|An array of PublicCampaignInput objects, each representing the properties of a campaign to be created. This is a required field.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-create-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponsePublicCampaign](#schemabatchresponsepubliccampaign)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicCampaignWithErrors](#schemabatchresponsepubliccampaignwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Batch retrieve campaigns

<a id="opIdpost-/marketing/campaigns/2026-09/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/batch/read`

Retrieve a batch of campaigns using specified parameters. This endpoint allows you to filter campaigns by date range and select specific properties to include in the response. It is useful for obtaining detailed information about multiple campaigns at once.

> Body parameter

```json
null
```

<h3 id="batch-retrieve-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endDate|query|string|false|The end date for filtering campaigns, formatted as a string.|
|properties|query|[string]|false|A comma-separated list of property names to include in the response.|
|startDate|query|string|false|The start date for filtering campaigns, formatted as a string.|
|body|body|[BatchInputPublicCampaignReadInput](#schemabatchinputpubliccampaignreadinput)|true|none|
|» inputs|body|[[PublicCampaignReadInput](#schemapubliccampaignreadinput)]|true|An array of PublicCampaignReadInput objects, each containing the ID of a campaign to be read. This property is required.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-retrieve-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicCampaignWithAssets](#schemabatchresponsepubliccampaignwithassets)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicCampaignWithAssetsWithErrors](#schemabatchresponsepubliccampaignwithassetswitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Batch update campaigns

<a id="opIdpost-/marketing/campaigns/2026-09/batch/update"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/campaigns/2026-09/batch/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/batch/update`

Update a batch of campaigns with the specified properties. This endpoint allows you to modify multiple campaigns in a single request. Note: The 'hs_goal' property is deprecated and will be ignored if provided.

> Body parameter

```json
null
```

<h3 id="batch-update-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicCampaignBatchUpdateItem](#schemabatchinputpubliccampaignbatchupdateitem)|true|none|
|» inputs|body|[[PublicCampaignBatchUpdateItem](#schemapubliccampaignbatchupdateitem)]|true|An array of PublicCampaignBatchUpdateItem objects, each containing the details required to update a specific campaign.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-update-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicCampaign](#schemabatchresponsepubliccampaign)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicCampaignWithErrors](#schemabatchresponsepubliccampaignwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

<h1 id="marketing-campaigns-public-api-budget">Budget</h1>

## Add budget item

<a id="opIdpost-/marketing/campaigns/2026-09/{campaignGuid}/budget"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/budget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/{campaignGuid}/budget`

Add a new budget item to the specified campaign. This endpoint allows you to associate financial allocations with a campaign, enabling better tracking and management of campaign budgets.

> Body parameter

```json
null
```

<h3 id="add-budget-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign to which the budget item will be added.|
|body|body|[PublicBudgetItemInput](#schemapublicbudgetiteminput)|true|none|
|» amount|body|number|true|The monetary value of the budget item, represented as a number.|
|» description|body|string|false|A string providing additional details about the budget item.|
|» name|body|string|true|The name of the budget item. It is a string that identifies the budget item.|
|» order|body|integer(int32)|true|An integer indicating the order or sequence of the budget item.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-budget-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicBudgetItem](#schemapublicbudgetitem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Retrieve budget details

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/budget/totals"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/budget/totals' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/budget/totals`

Retrieve detailed budget and spending information, including totals, for a specific marketing campaign. This endpoint provides insights into the financial aspects of a campaign, helping users to manage and analyze budget allocations and spending patterns effectively.

<h3 id="retrieve-budget-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign for which budget totals are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-budget-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicBudgetTotals](#schemapublicbudgettotals)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Retrieve budget item

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}`

Retrieve a specific budget item associated with a campaign using its unique budget ID. This endpoint is useful for accessing detailed information about a particular budget item within a campaign, allowing for review and analysis of budget allocations.

<h3 id="retrieve-budget-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budgetId|path|integer(int64)|true|The unique identifier of the budget item, represented as an integer.|
|campaignGuid|path|string|true|The unique identifier of the campaign.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-budget-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicBudgetItem](#schemapublicbudgetitem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Update budget item

<a id="opIdput-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}`

Update a specific budget item by ID within a marketing campaign. This endpoint allows you to modify the details of a budget item associated with a campaign, identified by its unique campaignGuid and budgetId. Use this to adjust budget allocations or update budget-related information for a campaign.

> Body parameter

```json
null
```

<h3 id="update-budget-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budgetId|path|integer(int64)|true|The unique identifier of the budget item to update.|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|body|body|[PublicBudgetItemInput](#schemapublicbudgetiteminput)|true|none|
|» amount|body|number|true|The monetary value of the budget item, represented as a number.|
|» description|body|string|false|A string providing additional details about the budget item.|
|» name|body|string|true|The name of the budget item. It is a string that identifies the budget item.|
|» order|body|integer(int32)|true|An integer indicating the order or sequence of the budget item.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-budget-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicBudgetItem](#schemapublicbudgetitem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Delete budget item

<a id="opIddelete-/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/campaigns/2026-09/{campaignGuid}/budget/{budgetId}`

Delete a specific budget item by its ID from a campaign. This operation is useful for removing budget allocations that are no longer needed or were added in error.

<h3 id="delete-budget-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budgetId|path|integer(int64)|true|The unique identifier of the budget item to be deleted.|
|campaignGuid|path|string|true|The unique identifier of the campaign from which the budget item will be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-budget-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

<h1 id="marketing-campaigns-public-api-reports">Reports</h1>

## Retrieve contact IDs

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/reports/contacts/{contactType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/reports/contacts/{contactType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/reports/contacts/{contactType}`

Fetch the list of contact IDs for the specified campaign and contact type. This endpoint allows you to retrieve contact information associated with a particular campaign, filtered by the type of contact. It supports pagination and date filtering to manage large sets of data effectively.

<h3 id="retrieve-contact-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|contactType|path|string|true|The type of contact to filter the list.|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field.|
|endDate|query|string|false|The end date for filtering contact data, formatted as YYYY-MM-DD.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|startDate|query|string|false|The start date for filtering contact data, formatted as YYYY-MM-DD.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-contact-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseContactReferenceForwardPaging](#schemacollectionresponsecontactreferenceforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Retrieve metrics

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/reports/metrics"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/reports/metrics' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/reports/metrics`

Fetch the metrics of a specific marketing campaign using its unique identifier. This endpoint allows you to gather insights into campaign performance over a specified date range.

<h3 id="retrieve-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|endDate|query|string|false|The end date for fetching campaign metrics, formatted as YYYY-MM-DD.|
|startDate|query|string|false|The start date for fetching campaign metrics, formatted as YYYY-MM-DD.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MetricsCounters](#schemametricscounters)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Retrieve revenue report

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/reports/revenue"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/reports/revenue' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/reports/revenue`

Fetch revenue attribution report data for a specific campaign. This endpoint allows you to retrieve detailed revenue attribution metrics, which can be filtered by attribution model and date range. This data is useful for analyzing the financial impact of marketing campaigns.

<h3 id="retrieve-revenue-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|attributionModel|query|string|false|The attribution model to use for the revenue report. Specify the model to filter the data accordingly.|
|endDate|query|string|false|End date to fetch attribution data, in the format YYYY-MM-DD.|
|startDate|query|string|false|Start date to fetch attribution data, in the format YYYY-MM-DD.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-revenue-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[RevenueAttributionAggregate](#schemarevenueattributionaggregate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.revenue.read ), oauth2 ( Scopes: marketing.campaigns.revenue.lite.read ), oauth2 ( Scopes: marketing.campaigns.revenue.full.read )
</aside>

<h1 id="marketing-campaigns-public-api-spend">Spend</h1>

## Create spend item

<a id="opIdpost-/marketing/campaigns/2026-09/{campaignGuid}/spend"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/spend' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/campaigns/2026-09/{campaignGuid}/spend`

Create a new campaign spend item for a specified campaign. This endpoint allows you to add financial details related to campaign expenditures, which can help in tracking and managing marketing budgets effectively.

> Body parameter

```json
null
```

<h3 id="create-spend-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign for which the spend item is being created.|
|body|body|[PublicSpendItemInput](#schemapublicspenditeminput)|true|none|
|» amount|body|number|true|The monetary value of the spend item, represented as a number.|
|» description|body|string|false|A string providing additional details or context about the spend item.|
|» name|body|string|true|The name of the spend item, represented as a string.|
|» order|body|integer(int32)|true|An integer indicating the order or sequence of the spend item within a list.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-spend-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicSpendItem](#schemapublicspenditem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Retrieve spend Item

<a id="opIdget-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}`

Retrieve a specific campaign spend item using its unique spendId. This endpoint allows you to access detailed information about a particular spend item associated with a campaign, which can be useful for tracking and managing campaign expenses.

<h3 id="retrieve-spend-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|spendId|path|integer(int64)|true|The unique identifier of the spend item to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-spend-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSpendItem](#schemapublicspenditem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.read )
</aside>

## Update spend item

<a id="opIdput-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}`

Update a specific campaign spend item by its unique spendId. This operation allows you to modify the details of an existing spend item associated with a campaign, such as its amount or description.

> Body parameter

```json
null
```

<h3 id="update-spend-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|spendId|path|integer(int64)|true|The unique identifier of the spend item to update.|
|body|body|[PublicSpendItemInput](#schemapublicspenditeminput)|true|none|
|» amount|body|number|true|The monetary value of the spend item, represented as a number.|
|» description|body|string|false|A string providing additional details or context about the spend item.|
|» name|body|string|true|The name of the spend item, represented as a string.|
|» order|body|integer(int32)|true|An integer indicating the order or sequence of the spend item within a list.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-spend-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSpendItem](#schemapublicspenditem)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

## Delete spend item

<a id="opIddelete-/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/campaigns/2026-09/{campaignGuid}/spend/{spendId}`

Delete a specific campaign spend item by its ID. This operation is useful for managing and cleaning up spend records associated with a particular marketing campaign.

<h3 id="delete-spend-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaignGuid|path|string|true|The unique identifier of the campaign.|
|spendId|path|integer(int64)|true|The unique identifier of the spend item to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-spend-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.campaigns.write )
</aside>

# Schemas

<h2 id="tocS_BatchInputPublicCampaignBatchUpdateItem">BatchInputPublicCampaignBatchUpdateItem</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpubliccampaignbatchupdateitem"></a>
<a id="schema_BatchInputPublicCampaignBatchUpdateItem"></a>
<a id="tocSbatchinputpubliccampaignbatchupdateitem"></a>
<a id="tocsbatchinputpubliccampaignbatchupdateitem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicCampaignBatchUpdateItem](#schemapubliccampaignbatchupdateitem)]|true|none|An array of PublicCampaignBatchUpdateItem objects, each containing the details required to update a specific campaign.|

<h2 id="tocS_BatchInputPublicCampaignDeleteInput">BatchInputPublicCampaignDeleteInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpubliccampaigndeleteinput"></a>
<a id="schema_BatchInputPublicCampaignDeleteInput"></a>
<a id="tocSbatchinputpubliccampaigndeleteinput"></a>
<a id="tocsbatchinputpubliccampaigndeleteinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicCampaignDeleteInput](#schemapubliccampaigndeleteinput)]|true|none|An array of PublicCampaignDeleteInput objects, each representing a campaign to be deleted. Each object must include the campaign's unique identifier.|

<h2 id="tocS_BatchInputPublicCampaignInput">BatchInputPublicCampaignInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpubliccampaigninput"></a>
<a id="schema_BatchInputPublicCampaignInput"></a>
<a id="tocSbatchinputpubliccampaigninput"></a>
<a id="tocsbatchinputpubliccampaigninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicCampaignInput](#schemapubliccampaigninput)]|true|none|An array of PublicCampaignInput objects, each representing the properties of a campaign to be created. This is a required field.|

<h2 id="tocS_BatchInputPublicCampaignReadInput">BatchInputPublicCampaignReadInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpubliccampaignreadinput"></a>
<a id="schema_BatchInputPublicCampaignReadInput"></a>
<a id="tocSbatchinputpubliccampaignreadinput"></a>
<a id="tocsbatchinputpubliccampaignreadinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicCampaignReadInput](#schemapubliccampaignreadinput)]|true|none|An array of PublicCampaignReadInput objects, each containing the ID of a campaign to be read. This property is required.|

<h2 id="tocS_BatchResponsePublicCampaign">BatchResponsePublicCampaign</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepubliccampaign"></a>
<a id="schema_BatchResponsePublicCampaign"></a>
<a id="tocSbatchresponsepubliccampaign"></a>
<a id="tocsbatchresponsepubliccampaign"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs that provide additional information related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicCampaign](#schemapubliccampaign)]|true|none|An array of public campaign objects that represent the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicCampaignWithAssets">BatchResponsePublicCampaignWithAssets</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepubliccampaignwithassets"></a>
<a id="schema_BatchResponsePublicCampaignWithAssets"></a>
<a id="tocSbatchresponsepubliccampaignwithassets"></a>
<a id="tocsbatchresponsepubliccampaignwithassets"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicCampaignWithAssets](#schemapubliccampaignwithassets)]|true|none|An array of PublicCampaignWithAssets objects, representing the campaigns involved in the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicCampaignWithAssetsWithErrors">BatchResponsePublicCampaignWithAssetsWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepubliccampaignwithassetswitherrors"></a>
<a id="schema_BatchResponsePublicCampaignWithAssetsWithErrors"></a>
<a id="tocSbatchresponsepubliccampaignwithassetswitherrors"></a>
<a id="tocsbatchresponsepubliccampaignwithassetswitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors that occurred during the batch operation, each described by a standard error object.|
|links|object|false|none|A map of link names to associated URIs that provide additional information about the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicCampaignWithAssets](#schemapubliccampaignwithassets)]|true|none|An array of campaigns with their associated assets that were processed in the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicCampaignWithErrors">BatchResponsePublicCampaignWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepubliccampaignwitherrors"></a>
<a id="schema_BatchResponsePublicCampaignWithErrors"></a>
<a id="tocSbatchresponsepubliccampaignwitherrors"></a>
<a id="tocsbatchresponsepubliccampaignwitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of standard error objects detailing any errors that occurred during the batch operation.|
|links|object|false|none|A map of link names to associated URIs, providing additional information or actions related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[PublicCampaign](#schemapubliccampaign)]|true|none|An array of public campaign objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponseContactReferenceForwardPaging">CollectionResponseContactReferenceForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsecontactreferenceforwardpaging"></a>
<a id="schema_CollectionResponseContactReferenceForwardPaging"></a>
<a id="tocScollectionresponsecontactreferenceforwardpaging"></a>
<a id="tocscollectionresponsecontactreferenceforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[ContactReference](#schemacontactreference)]|true|none|An array of contact references, each representing a contact associated with the campaign. Each item in the array is a ContactReference object.|

<h2 id="tocS_CollectionResponsePublicCampaignAsset">CollectionResponsePublicCampaignAsset</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepubliccampaignasset"></a>
<a id="schema_CollectionResponsePublicCampaignAsset"></a>
<a id="tocScollectionresponsepubliccampaignasset"></a>
<a id="tocscollectionresponsepubliccampaignasset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicCampaignAsset](#schemapubliccampaignasset)]|true|none|An array of PublicCampaignAsset objects, each representing an individual campaign asset.|

<h2 id="tocS_CollectionResponsePublicCampaignAssetForwardPaging">CollectionResponsePublicCampaignAssetForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepubliccampaignassetforwardpaging"></a>
<a id="schema_CollectionResponsePublicCampaignAssetForwardPaging"></a>
<a id="tocScollectionresponsepubliccampaignassetforwardpaging"></a>
<a id="tocscollectionresponsepubliccampaignassetforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicCampaignAsset](#schemapubliccampaignasset)]|true|none|An array of PublicCampaignAsset objects, each representing a campaign asset.|

<h2 id="tocS_CollectionResponseStringNoPaging">CollectionResponseStringNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsestringnopaging"></a>
<a id="schema_CollectionResponseStringNoPaging"></a>
<a id="tocScollectionresponsestringnopaging"></a>
<a id="tocscollectionresponsestringnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[string]|true|none|An array of strings representing the collection of results returned by the API. Each item in the array is a string.|

<h2 id="tocS_CollectionResponseWithTotalPublicCampaign">CollectionResponseWithTotalPublicCampaign</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpubliccampaign"></a>
<a id="schema_CollectionResponseWithTotalPublicCampaign"></a>
<a id="tocScollectionresponsewithtotalpubliccampaign"></a>
<a id="tocscollectionresponsewithtotalpubliccampaign"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicCampaign](#schemapubliccampaign)]|true|none|An array of PublicCampaign objects, each representing a campaign with its associated details.|
|total|integer(int32)|true|none|An integer representing the total number of campaigns available.|

<h2 id="tocS_ContactReference">ContactReference</h2>
<!-- backwards compatibility -->
<a id="schemacontactreference"></a>
<a id="schema_ContactReference"></a>
<a id="tocScontactreference"></a>
<a id="tocscontactreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the contact reference, represented as a string.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|An object providing context about the error condition, where each key is a string and each value is an array of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string values.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error, represented as a string.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail. This is a string.|
|context|object|false|none|Context about the error condition, provided as an object where each key is a context name and the value is an array of strings providing additional information.|
|in|string|false|none|The name of the field or parameter in which the error was found. This is a string.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. This is a string.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_MetricsCounters">MetricsCounters</h2>
<!-- backwards compatibility -->
<a id="schemametricscounters"></a>
<a id="schema_MetricsCounters"></a>
<a id="tocSmetricscounters"></a>
<a id="tocsmetricscounters"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|influencedContacts|integer(int32)|true|none|The number of contacts that were influenced by the campaign. This is an integer value.|
|newContactsFirstTouch|integer(int32)|true|none|The number of new contacts that had their first interaction with the campaign. This is an integer value.|
|newContactsLastTouch|integer(int32)|true|none|The number of new contacts that had their last interaction with the campaign. This is an integer value.|
|sessions|integer(int32)|true|none|The number of sessions associated with the campaign. This is an integer value.|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token that serves as the paging cursor, indicating the position after the last successfully read resource.|
|link|string|false|none|A string URL that provides a link to the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used to identify the position before the current page in the paginated results.|
|link|string|false|none|A URL string that provides a link to the previous page of results.|

<h2 id="tocS_PublicBudgetItem">PublicBudgetItem</h2>
<!-- backwards compatibility -->
<a id="schemapublicbudgetitem"></a>
<a id="schema_PublicBudgetItem"></a>
<a id="tocSpublicbudgetitem"></a>
<a id="tocspublicbudgetitem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|The financial amount allocated to this budget item, represented as a number.|
|createdAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when this budget item was created.|
|description|string|false|none|A description of the budget item, represented as a string.|
|id|string|true|none|The unique identifier for this budget item, represented as a string.|
|name|string|true|none|The name of the budget item, represented as a string.|
|order|integer(int32)|true|none|An integer representing the order or sequence of this budget item within the campaign.|
|updatedAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when this budget item was last updated.|

<h2 id="tocS_PublicBudgetItemInput">PublicBudgetItemInput</h2>
<!-- backwards compatibility -->
<a id="schemapublicbudgetiteminput"></a>
<a id="schema_PublicBudgetItemInput"></a>
<a id="tocSpublicbudgetiteminput"></a>
<a id="tocspublicbudgetiteminput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|The monetary value of the budget item, represented as a number.|
|description|string|false|none|A string providing additional details about the budget item.|
|name|string|true|none|The name of the budget item. It is a string that identifies the budget item.|
|order|integer(int32)|true|none|An integer indicating the order or sequence of the budget item.|

<h2 id="tocS_PublicBudgetTotals">PublicBudgetTotals</h2>
<!-- backwards compatibility -->
<a id="schemapublicbudgettotals"></a>
<a id="schema_PublicBudgetTotals"></a>
<a id="tocSpublicbudgettotals"></a>
<a id="tocspublicbudgettotals"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetItems|[[PublicBudgetItem](#schemapublicbudgetitem)]|true|none|An array of budget items associated with the campaign, each represented by a PublicBudgetItem object.|
|budgetTotal|number|false|none|The total amount of the budget allocated for the campaign, expressed as a number.|
|currencyCode|string|true|none|The currency code used for the budget and spending amounts, represented as a string. Valid values include standard currency codes such as 'USD', 'EUR', 'JPY', etc.|
|remainingBudget|number|false|none|The remaining budget available for the campaign, calculated as the difference between the budgetTotal and spendTotal, expressed as a number.|
|spendItems|[[PublicSpendItem](#schemapublicspenditem)]|true|none|An array of spend items associated with the campaign, each represented by a PublicSpendItem object.|
|spendTotal|number|false|none|The total amount spent in the campaign, expressed as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyCode|AED|
|currencyCode|AFN|
|currencyCode|ALL|
|currencyCode|AMD|
|currencyCode|ANG|
|currencyCode|AOA|
|currencyCode|ARS|
|currencyCode|AUD|
|currencyCode|AWG|
|currencyCode|AZN|
|currencyCode|BAM|
|currencyCode|BBD|
|currencyCode|BDT|
|currencyCode|BGN|
|currencyCode|BHD|
|currencyCode|BIF|
|currencyCode|BMD|
|currencyCode|BND|
|currencyCode|BOB|
|currencyCode|BOV|
|currencyCode|BRL|
|currencyCode|BSD|
|currencyCode|BTN|
|currencyCode|BWP|
|currencyCode|BYN|
|currencyCode|BZD|
|currencyCode|CAD|
|currencyCode|CDF|
|currencyCode|CHE|
|currencyCode|CHF|
|currencyCode|CHW|
|currencyCode|CLF|
|currencyCode|CLP|
|currencyCode|CNY|
|currencyCode|COP|
|currencyCode|COU|
|currencyCode|CRC|
|currencyCode|CUC|
|currencyCode|CUP|
|currencyCode|CVE|
|currencyCode|CZK|
|currencyCode|DJF|
|currencyCode|DKK|
|currencyCode|DOP|
|currencyCode|DZD|
|currencyCode|EGP|
|currencyCode|ERN|
|currencyCode|ETB|
|currencyCode|EUR|
|currencyCode|FJD|
|currencyCode|FKP|
|currencyCode|GBP|
|currencyCode|GEL|
|currencyCode|GHS|
|currencyCode|GIP|
|currencyCode|GMD|
|currencyCode|GNF|
|currencyCode|GTQ|
|currencyCode|GYD|
|currencyCode|HKD|
|currencyCode|HNL|
|currencyCode|HRK|
|currencyCode|HTG|
|currencyCode|HUF|
|currencyCode|IDR|
|currencyCode|ILS|
|currencyCode|INR|
|currencyCode|IQD|
|currencyCode|IRR|
|currencyCode|ISK|
|currencyCode|JMD|
|currencyCode|JOD|
|currencyCode|JPY|
|currencyCode|KES|
|currencyCode|KGS|
|currencyCode|KHR|
|currencyCode|KMF|
|currencyCode|KPW|
|currencyCode|KRW|
|currencyCode|KWD|
|currencyCode|KYD|
|currencyCode|KZT|
|currencyCode|LAK|
|currencyCode|LBP|
|currencyCode|LKR|
|currencyCode|LRD|
|currencyCode|LSL|
|currencyCode|LYD|
|currencyCode|MAD|
|currencyCode|MDL|
|currencyCode|MGA|
|currencyCode|MKD|
|currencyCode|MMK|
|currencyCode|MNT|
|currencyCode|MOP|
|currencyCode|MRU|
|currencyCode|MUR|
|currencyCode|MVR|
|currencyCode|MWK|
|currencyCode|MXN|
|currencyCode|MXV|
|currencyCode|MYR|
|currencyCode|MZN|
|currencyCode|NAD|
|currencyCode|NGN|
|currencyCode|NIO|
|currencyCode|NOK|
|currencyCode|NPR|
|currencyCode|NZD|
|currencyCode|OMR|
|currencyCode|PAB|
|currencyCode|PEN|
|currencyCode|PGK|
|currencyCode|PHP|
|currencyCode|PKR|
|currencyCode|PLN|
|currencyCode|PYG|
|currencyCode|QAR|
|currencyCode|RON|
|currencyCode|RSD|
|currencyCode|RUB|
|currencyCode|RWF|
|currencyCode|SAR|
|currencyCode|SBD|
|currencyCode|SCR|
|currencyCode|SDG|
|currencyCode|SEK|
|currencyCode|SGD|
|currencyCode|SHP|
|currencyCode|SLL|
|currencyCode|SOS|
|currencyCode|SRD|
|currencyCode|SSP|
|currencyCode|STN|
|currencyCode|SVC|
|currencyCode|SYP|
|currencyCode|SZL|
|currencyCode|THB|
|currencyCode|TJS|
|currencyCode|TMT|
|currencyCode|TND|
|currencyCode|TOP|
|currencyCode|TRY|
|currencyCode|TTD|
|currencyCode|TWD|
|currencyCode|TZS|
|currencyCode|UAH|
|currencyCode|UGX|
|currencyCode|USD|
|currencyCode|USN|
|currencyCode|UYI|
|currencyCode|UYU|
|currencyCode|UZS|
|currencyCode|VEF|
|currencyCode|VND|
|currencyCode|VUV|
|currencyCode|WST|
|currencyCode|XAF|
|currencyCode|XAG|
|currencyCode|XAU|
|currencyCode|XBA|
|currencyCode|XBB|
|currencyCode|XBC|
|currencyCode|XBD|
|currencyCode|XCD|
|currencyCode|XDR|
|currencyCode|XOF|
|currencyCode|XPD|
|currencyCode|XPF|
|currencyCode|XPT|
|currencyCode|XSU|
|currencyCode|XUA|
|currencyCode|YER|
|currencyCode|ZAR|
|currencyCode|ZMW|
|currencyCode|ZWL|

<h2 id="tocS_PublicBusinessUnit">PublicBusinessUnit</h2>
<!-- backwards compatibility -->
<a id="schemapublicbusinessunit"></a>
<a id="schema_PublicBusinessUnit"></a>
<a id="tocSpublicbusinessunit"></a>
<a id="tocspublicbusinessunit"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The unique identifier for the business unit, represented as a 64-bit integer.|

<h2 id="tocS_PublicCampaign">PublicCampaign</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaign"></a>
<a id="schema_PublicCampaign"></a>
<a id="tocSpubliccampaign"></a>
<a id="tocspubliccampaign"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessUnits|[[PublicBusinessUnit](#schemapublicbusinessunit)]|true|none|An array of business units associated with the campaign, where each business unit is represented by its unique identifier.|
|createdAt|string(date-time)|true|none|The date and time when the campaign was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the campaign.|
|properties|object|true|none|A map of custom property names to their values, representing specific attributes of the campaign.|
|updatedAt|string(date-time)|true|none|The date and time when the campaign was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicCampaignAsset">PublicCampaignAsset</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaignasset"></a>
<a id="schema_PublicCampaignAsset"></a>
<a id="tocSpubliccampaignasset"></a>
<a id="tocspubliccampaignasset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the campaign asset, represented as a string.|
|metrics|object|false|none|A collection of performance metrics for the campaign asset, represented as a map where each key is a metric name and each value is a number.|
|name|string|false|none|The name of the campaign asset, represented as a string.|

<h2 id="tocS_PublicCampaignBatchUpdateItem">PublicCampaignBatchUpdateItem</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaignbatchupdateitem"></a>
<a id="schema_PublicCampaignBatchUpdateItem"></a>
<a id="tocSpubliccampaignbatchupdateitem"></a>
<a id="tocspubliccampaignbatchupdateitem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the campaign to be updated. It is a string.|
|properties|object|true|none|An object containing key-value pairs of the campaign properties to be updated. Each key is a property name, and each value is the new value for that property, represented as a string.|

<h2 id="tocS_PublicCampaignCloneInput">PublicCampaignCloneInput</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaigncloneinput"></a>
<a id="schema_PublicCampaignCloneInput"></a>
<a id="tocSpubliccampaigncloneinput"></a>
<a id="tocspubliccampaigncloneinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsToClone|object|true|none|A map of asset types to be cloned, where each key is an asset type and the value is an array of asset identifiers. It is an object.|
|audience|string|false|none|The target audience for the cloned campaign. It is a string.|
|currencyCode|string|false|none|The currency code for the cloned campaign's budget. It is a string. This value is optional.|
|endDate|string|false|none|The end date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD).  If omitted, this will match the start date of the source campaign.|
|name|string|true|none|The name for the new cloned campaign. It is a string. The name needs to be unique compared to other campaigns in the portal.|
|notes|string|false|none|Additional notes or comments about the cloned campaign. It is a string. This value is optional.|
|shouldCloneDraftNodes|boolean|true|none|A boolean indicating whether draft nodes should be cloned. By default this is true.|
|shouldCloneEdges|boolean|true|none|A boolean indicating whether edges should be cloned. By default this is true.|
|shouldCloneStickyNotes|boolean|true|none|A boolean indicating whether sticky notes should be cloned. By default this is true.|
|shouldCloneTasks|boolean|true|none|A boolean indicating whether tasks should be cloned. By default this is true.|
|shouldCloneTrackingUrls|boolean|true|none|A boolean indicating whether tracking URLs should be cloned. By default this is true.|
|sourceCampaignGuid|string|true|none|The unique identifier of the campaign to be cloned. It is a string.|
|startDate|string|false|none|The start date for the cloned campaign. It is a string in ISO 8601 format (YYYY-MM-DD). If omitted, this will match the start date of the source campaign.|

<h2 id="tocS_PublicCampaignCloneResponse">PublicCampaignCloneResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaigncloneresponse"></a>
<a id="schema_PublicCampaignCloneResponse"></a>
<a id="tocSpubliccampaigncloneresponse"></a>
<a id="tocspubliccampaigncloneresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignGuid|string|true|none|The unique identifier for the newly cloned campaign.|
|status|string|true|none|The status of the cloning operation. Valid values include 'PENDING', 'COMPLETE', 'FAILED', and 'PARTIAL_FAILURE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETE|
|status|FAILED|
|status|PARTIAL_FAILURE|
|status|PENDING|

<h2 id="tocS_PublicCampaignDeleteInput">PublicCampaignDeleteInput</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaigndeleteinput"></a>
<a id="schema_PublicCampaignDeleteInput"></a>
<a id="tocSpubliccampaigndeleteinput"></a>
<a id="tocspubliccampaigndeleteinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the campaign to be deleted. It is a string.|

<h2 id="tocS_PublicCampaignInput">PublicCampaignInput</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaigninput"></a>
<a id="schema_PublicCampaignInput"></a>
<a id="tocSpubliccampaigninput"></a>
<a id="tocspubliccampaigninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|An object containing key-value pairs where each key is a property name and each value is a string representing the property's value. This object holds the various attributes of the campaign.|

<h2 id="tocS_PublicCampaignReadInput">PublicCampaignReadInput</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaignreadinput"></a>
<a id="schema_PublicCampaignReadInput"></a>
<a id="tocSpubliccampaignreadinput"></a>
<a id="tocspubliccampaignreadinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the campaign. It is a string and is required to retrieve the campaign details.|

<h2 id="tocS_PublicCampaignWithAssets">PublicCampaignWithAssets</h2>
<!-- backwards compatibility -->
<a id="schemapubliccampaignwithassets"></a>
<a id="schema_PublicCampaignWithAssets"></a>
<a id="tocSpubliccampaignwithassets"></a>
<a id="tocspubliccampaignwithassets"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|object|true|none|A map of asset types to their respective collections of campaign assets, represented by CollectionResponsePublicCampaignAsset objects.|
|businessUnits|[[PublicBusinessUnit](#schemapublicbusinessunit)]|true|none|An array of business units associated with the campaign, each represented by a PublicBusinessUnit object.|
|createdAt|string(date-time)|true|none|The date and time when the campaign was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the campaign, represented as a string.|
|properties|object|true|none|A map of custom property names to their values, where each value is a string.|
|updatedAt|string(date-time)|true|none|The date and time when the campaign was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicSpendItem">PublicSpendItem</h2>
<!-- backwards compatibility -->
<a id="schemapublicspenditem"></a>
<a id="schema_PublicSpendItem"></a>
<a id="tocSpublicspenditem"></a>
<a id="tocspublicspenditem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|The financial amount associated with the spend item, represented as a number.|
|createdAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the spend item was created.|
|description|string|false|none|A string providing additional details about the spend item.|
|id|string|true|none|The unique identifier for the spend item, represented as a string.|
|name|string|true|none|The name of the spend item, represented as a string.|
|order|integer(int32)|true|none|An integer indicating the order or sequence of the spend item.|
|updatedAt|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the spend item was last updated.|

<h2 id="tocS_PublicSpendItemInput">PublicSpendItemInput</h2>
<!-- backwards compatibility -->
<a id="schemapublicspenditeminput"></a>
<a id="schema_PublicSpendItemInput"></a>
<a id="tocSpublicspenditeminput"></a>
<a id="tocspublicspenditeminput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|The monetary value of the spend item, represented as a number.|
|description|string|false|none|A string providing additional details or context about the spend item.|
|name|string|true|none|The name of the spend item, represented as a string.|
|order|integer(int32)|true|none|An integer indicating the order or sequence of the spend item within a list.|

<h2 id="tocS_RevenueAttributionAggregate">RevenueAttributionAggregate</h2>
<!-- backwards compatibility -->
<a id="schemarevenueattributionaggregate"></a>
<a id="schema_RevenueAttributionAggregate"></a>
<a id="tocSrevenueattributionaggregate"></a>
<a id="tocsrevenueattributionaggregate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactsNumber|integer(int32)|false|none|An integer representing the number of contacts associated with the campaign.|
|currencyCode|string|false|none|A string representing the currency code for the financial amounts, following ISO 4217 standards. Valid values include currency codes like 'USD', 'EUR', 'JPY', etc.|
|dealAmount|number|false|none|A number representing the total amount from deals associated with the campaign.|
|dealsNumber|integer(int32)|false|none|An integer indicating the number of deals associated with the campaign.|
|revenueAmount|number|false|none|A number indicating the total revenue amount attributed to the campaign.|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyCode|AED|
|currencyCode|AFN|
|currencyCode|ALL|
|currencyCode|AMD|
|currencyCode|ANG|
|currencyCode|AOA|
|currencyCode|ARS|
|currencyCode|AUD|
|currencyCode|AWG|
|currencyCode|AZN|
|currencyCode|BAM|
|currencyCode|BBD|
|currencyCode|BDT|
|currencyCode|BGN|
|currencyCode|BHD|
|currencyCode|BIF|
|currencyCode|BMD|
|currencyCode|BND|
|currencyCode|BOB|
|currencyCode|BOV|
|currencyCode|BRL|
|currencyCode|BSD|
|currencyCode|BTN|
|currencyCode|BWP|
|currencyCode|BYN|
|currencyCode|BZD|
|currencyCode|CAD|
|currencyCode|CDF|
|currencyCode|CHE|
|currencyCode|CHF|
|currencyCode|CHW|
|currencyCode|CLF|
|currencyCode|CLP|
|currencyCode|CNY|
|currencyCode|COP|
|currencyCode|COU|
|currencyCode|CRC|
|currencyCode|CUC|
|currencyCode|CUP|
|currencyCode|CVE|
|currencyCode|CZK|
|currencyCode|DJF|
|currencyCode|DKK|
|currencyCode|DOP|
|currencyCode|DZD|
|currencyCode|EGP|
|currencyCode|ERN|
|currencyCode|ETB|
|currencyCode|EUR|
|currencyCode|FJD|
|currencyCode|FKP|
|currencyCode|GBP|
|currencyCode|GEL|
|currencyCode|GHS|
|currencyCode|GIP|
|currencyCode|GMD|
|currencyCode|GNF|
|currencyCode|GTQ|
|currencyCode|GYD|
|currencyCode|HKD|
|currencyCode|HNL|
|currencyCode|HRK|
|currencyCode|HTG|
|currencyCode|HUF|
|currencyCode|IDR|
|currencyCode|ILS|
|currencyCode|INR|
|currencyCode|IQD|
|currencyCode|IRR|
|currencyCode|ISK|
|currencyCode|JMD|
|currencyCode|JOD|
|currencyCode|JPY|
|currencyCode|KES|
|currencyCode|KGS|
|currencyCode|KHR|
|currencyCode|KMF|
|currencyCode|KPW|
|currencyCode|KRW|
|currencyCode|KWD|
|currencyCode|KYD|
|currencyCode|KZT|
|currencyCode|LAK|
|currencyCode|LBP|
|currencyCode|LKR|
|currencyCode|LRD|
|currencyCode|LSL|
|currencyCode|LYD|
|currencyCode|MAD|
|currencyCode|MDL|
|currencyCode|MGA|
|currencyCode|MKD|
|currencyCode|MMK|
|currencyCode|MNT|
|currencyCode|MOP|
|currencyCode|MRU|
|currencyCode|MUR|
|currencyCode|MVR|
|currencyCode|MWK|
|currencyCode|MXN|
|currencyCode|MXV|
|currencyCode|MYR|
|currencyCode|MZN|
|currencyCode|NAD|
|currencyCode|NGN|
|currencyCode|NIO|
|currencyCode|NOK|
|currencyCode|NPR|
|currencyCode|NZD|
|currencyCode|OMR|
|currencyCode|PAB|
|currencyCode|PEN|
|currencyCode|PGK|
|currencyCode|PHP|
|currencyCode|PKR|
|currencyCode|PLN|
|currencyCode|PYG|
|currencyCode|QAR|
|currencyCode|RON|
|currencyCode|RSD|
|currencyCode|RUB|
|currencyCode|RWF|
|currencyCode|SAR|
|currencyCode|SBD|
|currencyCode|SCR|
|currencyCode|SDG|
|currencyCode|SEK|
|currencyCode|SGD|
|currencyCode|SHP|
|currencyCode|SLL|
|currencyCode|SOS|
|currencyCode|SRD|
|currencyCode|SSP|
|currencyCode|STN|
|currencyCode|SVC|
|currencyCode|SYP|
|currencyCode|SZL|
|currencyCode|THB|
|currencyCode|TJS|
|currencyCode|TMT|
|currencyCode|TND|
|currencyCode|TOP|
|currencyCode|TRY|
|currencyCode|TTD|
|currencyCode|TWD|
|currencyCode|TZS|
|currencyCode|UAH|
|currencyCode|UGX|
|currencyCode|USD|
|currencyCode|USN|
|currencyCode|UYI|
|currencyCode|UYU|
|currencyCode|UZS|
|currencyCode|VEF|
|currencyCode|VND|
|currencyCode|VUV|
|currencyCode|WST|
|currencyCode|XAF|
|currencyCode|XAG|
|currencyCode|XAU|
|currencyCode|XBA|
|currencyCode|XBB|
|currencyCode|XBC|
|currencyCode|XBD|
|currencyCode|XCD|
|currencyCode|XDR|
|currencyCode|XOF|
|currencyCode|XPD|
|currencyCode|XPF|
|currencyCode|XPT|
|currencyCode|XSU|
|currencyCode|XUA|
|currencyCode|YER|
|currencyCode|ZAR|
|currencyCode|ZMW|
|currencyCode|ZWL|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string categorizing the type of error.|
|context|object|true|none|An object containing additional context about the error, with keys as context names and values as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string representing a unique identifier for the error.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation or remediation steps related to the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific categorization of the error.|
