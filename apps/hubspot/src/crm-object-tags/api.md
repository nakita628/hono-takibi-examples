<h1 id="crm-object-tags">CRM Object Tags v2026-09</h1>

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

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-object-tags-basic">Basic</h1>

## Retrieve tags

<a id="opIdget-/crm/object-tags/2026-09/{objectTypeId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}' \
  -H 'Accept: application/json'
```

`GET /crm/object-tags/2026-09/{objectTypeId}`

Retrieve CRM object tags for a specified object type in your HubSpot account. This endpoint allows you to access tags associated with a particular object type, which can be useful for categorizing and managing CRM data effectively.

<h3 id="retrieve-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which to retrieve tags.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicCrmObjectTagNoPaging](#schemacollectionresponsepubliccrmobjecttagnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create tag

<a id="opIdpost-/crm/object-tags/2026-09/{objectTypeId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/object-tags/2026-09/{objectTypeId}`

Create a new CRM object tag for a specified object type in your HubSpot account. This endpoint allows you to define properties such as name, color, and filter criteria for the tag. It is useful for categorizing and organizing CRM objects based on custom criteria.

> Body parameter

```json
null
```

<h3 id="create-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the tag is being created.|
|body|body|[CreatePublicCrmObjectTagRequest](#schemacreatepubliccrmobjecttagrequest)|true|none|
|» color|body|string|true|The color associated with the CRM object tag. It is a string value.|
|» description|body|string|false|A string providing additional information about the CRM object tag.|
|» displayOrder|body|integer(int32)|true|An integer indicating the order in which the tag should be displayed.|
|» filterBranch|body|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|Defines the filter criteria for the CRM object tag. It can be one of several filter branch types.|
|» » *oneOf*|body|[PublicOrFilterBranch](#schemapublicorfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAndFilterBranch](#schemapublicandfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAllFilterBranch](#schemapublicnotallfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch)|false|none|
|» » *oneOf*|body|[PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch)|false|none|
|» » *oneOf*|body|[PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|
|» filterPipelineIds|body|[string]|true|An array of strings representing the IDs of the pipelines to which the tag applies.|
|» name|body|string|true|The name of the CRM object tag. It is a string value.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicCrmObjectTag](#schemapubliccrmobjecttag)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Tag

<a id="opIdget-/crm/object-tags/2026-09/{objectTypeId}/{tagId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}/{tagId}' \
  -H 'Accept: application/json'
```

`GET /crm/object-tags/2026-09/{objectTypeId}/{tagId}`

Retrieve a specific CRM object tag using its unique identifiers. This endpoint is useful for obtaining details about a particular tag associated with a CRM object type, which can help in managing or analyzing tagged data within your HubSpot account.

<h3 id="retrieve-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the CRM object type to which the tag belongs.|
|tagId|path|integer(int64)|true|The unique identifier of the tag to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCrmObjectTag](#schemapubliccrmobjecttag)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update tag (Replace)

<a id="opIdput-/crm/object-tags/2026-09/{objectTypeId}/{tagId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}/{tagId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /crm/object-tags/2026-09/{objectTypeId}/{tagId}`

Update an existing CRM object tag in your HubSpot account. This operation allows you to modify the properties of a tag identified by its objectTypeId and tagId. Use this endpoint to change tag details such as name, color, and associated filters.

> Body parameter

```json
null
```

<h3 id="update-tag-replace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type to which the tag belongs.|
|tagId|path|integer(int64)|true|The unique identifier of the tag to be updated.|
|body|body|[ReplacePublicCrmObjectTagRequest](#schemareplacepubliccrmobjecttagrequest)|true|none|
|» color|body|string|true|A string specifying the color associated with the CRM object tag.|
|» description|body|string|false|A string providing a description of the CRM object tag.|
|» filterBranch|body|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|An object that defines the filter branch for the CRM object tag. It can be one of several filter branch types, such as PublicOrFilterBranch or PublicAndFilterBranch.|
|» » *oneOf*|body|[PublicOrFilterBranch](#schemapublicorfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAndFilterBranch](#schemapublicandfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAllFilterBranch](#schemapublicnotallfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch)|false|none|
|» » *oneOf*|body|[PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch)|false|none|
|» » *oneOf*|body|[PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|
|» filterPipelineIds|body|[string]|true|An array of strings representing the IDs of the pipelines to which the CRM object tag is applicable.|
|» name|body|string|true|A string representing the name of the CRM object tag.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-tag-replace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCrmObjectTag](#schemapubliccrmobjecttag)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete

<a id="opIddelete-/crm/object-tags/2026-09/{objectTypeId}/{tagId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}/{tagId}' \
  -X DELETE
```

`DELETE /crm/object-tags/2026-09/{objectTypeId}/{tagId}`

Delete a specific CRM object tag identified by its object type ID and tag ID. This operation will remove the tag from the system, and it will no longer be available for use or reference.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type to which the tag belongs.|
|tagId|path|integer(int64)|true|The unique identifier of the tag to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update tag (Partial)

<a id="opIdpatch-/crm/object-tags/2026-09/{objectTypeId}/{tagId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/object-tags/2026-09/{objectTypeId}/{tagId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /crm/object-tags/2026-09/{objectTypeId}/{tagId}`

Update an existing CRM object tag in your HubSpot account. This endpoint allows you to modify properties of a specific tag identified by its tagId and objectTypeId. Use this to change tag attributes such as color, description, or associated filters.

> Body parameter

```json
null
```

<h3 id="update-tag-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type associated with the tag.|
|tagId|path|integer(int64)|true|The unique identifier of the tag to be updated.|
|body|body|[PatchPublicCrmObjectTagRequest](#schemapatchpubliccrmobjecttagrequest)|true|none|
|» color|body|object|true|An object representing the new color for the CRM object tag.|
|» description|body|object|true|An object representing the new description for the CRM object tag.|
|» filterBranch|body|object|true|An object representing the new filter branch for the CRM object tag.|
|» filterPipelineIds|body|object|true|An object representing the new set of pipeline IDs associated with the CRM object tag.|
|» name|body|object|true|An object representing the new name for the CRM object tag.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-tag-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCrmObjectTag](#schemapubliccrmobjecttag)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicCrmObjectTagNoPaging">CollectionResponsePublicCrmObjectTagNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepubliccrmobjecttagnopaging"></a>
<a id="schema_CollectionResponsePublicCrmObjectTagNoPaging"></a>
<a id="tocScollectionresponsepubliccrmobjecttagnopaging"></a>
<a id="tocscollectionresponsepubliccrmobjecttagnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicCrmObjectTag](#schemapubliccrmobjecttag)]|true|none|An array of CRM object tags. Each item in the array is a PublicCrmObjectTag object.|

<h2 id="tocS_CreatePublicCrmObjectTagRequest">CreatePublicCrmObjectTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepubliccrmobjecttagrequest"></a>
<a id="schema_CreatePublicCrmObjectTagRequest"></a>
<a id="tocScreatepubliccrmobjecttagrequest"></a>
<a id="tocscreatepubliccrmobjecttagrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|true|none|The color associated with the CRM object tag. It is a string value.|
|description|string|false|none|A string providing additional information about the CRM object tag.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the tag should be displayed.|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|none|Defines the filter criteria for the CRM object tag. It can be one of several filter branch types.|
|filterPipelineIds|[string]|true|none|An array of strings representing the IDs of the pipelines to which the tag applies.|
|name|string|true|none|The name of the CRM object tag. It is a string value.|

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
|category|string|true|none|A string representing the general category of the error.|
|context|object|false|none|An object containing additional context about the error, with properties that are arrays of strings.|
|correlationId|string(uuid)|true|none|A string that acts as a unique identifier for the error instance, useful for tracking and debugging.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array of ErrorDetail objects, each providing additional information about specific issues related to the error.|
|links|object|false|none|An object containing URLs that provide further information or actions related to the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|subCategory|string|false|none|A string providing a more specific classification of the error within its category.|

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
|code|string|false|none|The status code associated with the error detail. This is a string property.|
|context|object|false|none|Context about the error condition. It is an object where each key is a string and each value is an array of strings, providing additional information about the error.|
|in|string|false|none|The name of the field or parameter in which the error was found. This is a string property.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a required string property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. This is a string property.|

<h2 id="tocS_PatchPublicCrmObjectTagRequest">PatchPublicCrmObjectTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchpubliccrmobjecttagrequest"></a>
<a id="schema_PatchPublicCrmObjectTagRequest"></a>
<a id="tocSpatchpubliccrmobjecttagrequest"></a>
<a id="tocspatchpubliccrmobjecttagrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|object|true|none|An object representing the new color for the CRM object tag.|
|description|object|true|none|An object representing the new description for the CRM object tag.|
|filterBranch|object|true|none|An object representing the new filter branch for the CRM object tag.|
|filterPipelineIds|object|true|none|An object representing the new set of pipeline IDs associated with the CRM object tag.|
|name|object|true|none|An object representing the new name for the CRM object tag.|

<h2 id="tocS_PublicAbsoluteComparativeTimestampRefineBy">PublicAbsoluteComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicabsolutecomparativetimestamprefineby"></a>
<a id="schema_PublicAbsoluteComparativeTimestampRefineBy"></a>
<a id="tocSpublicabsolutecomparativetimestamprefineby"></a>
<a id="tocspublicabsolutecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string representing the comparison operation to be performed.|
|timestamp|integer(int64)|true|none|An integer representing the specific timestamp for comparison, formatted as an int64.|
|type|string|true|none|A string indicating the type of refinement, which is 'ABSOLUTE_COMPARATIVE' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABSOLUTE_COMPARATIVE|

<h2 id="tocS_PublicAbsoluteRangedTimestampRefineBy">PublicAbsoluteRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicabsoluterangedtimestamprefineby"></a>
<a id="schema_PublicAbsoluteRangedTimestampRefineBy"></a>
<a id="tocSpublicabsoluterangedtimestamprefineby"></a>
<a id="tocspublicabsoluterangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerTimestamp|integer(int64)|true|none|An integer representing the lower boundary of the timestamp range, specified in Unix time format.|
|rangeType|string|true|none|A string that specifies the type of range being used.|
|type|string|true|none|A string indicating the type of refine by operation. The default value is 'ABSOLUTE_RANGED'.|
|upperTimestamp|integer(int64)|true|none|An integer representing the upper boundary of the timestamp range, specified in Unix time format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABSOLUTE_RANGED|

<h2 id="tocS_PublicAdsSearchFilter">PublicAdsSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicadssearchfilter"></a>
<a id="schema_PublicAdsSearchFilter"></a>
<a id="tocSpublicadssearchfilter"></a>
<a id="tocspublicadssearchfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adNetwork|string|true|none|A string that specifies the ad network where the search is being conducted.|
|entityType|string|true|none|A string that represents the type of entity being searched for in the ads.|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'ADS_SEARCH'.|
|operator|string|true|none|A string that defines the operation or condition applied to the search terms.|
|searchTermType|string|true|none|A string that indicates the type of search term being used in the filter.|
|searchTerms|[string]|true|none|An array of strings containing the search terms used to filter the ads.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ADS_SEARCH|

<h2 id="tocS_PublicAdsTimeFilter">PublicAdsTimeFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicadstimefilter"></a>
<a id="schema_PublicAdsTimeFilter"></a>
<a id="tocSpublicadstimefilter"></a>
<a id="tocspublicadstimefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'ADS_TIME'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An object that defines the criteria for refining the pruning of the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, or various timestamp refine types.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ADS_TIME|

<h2 id="tocS_PublicAllHistoryRefineBy">PublicAllHistoryRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicallhistoryrefineby"></a>
<a id="schema_PublicAllHistoryRefineBy"></a>
<a id="tocSpublicallhistoryrefineby"></a>
<a id="tocspublicallhistoryrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string that specifies the type of refinement. The default and only valid value is 'ALL_HISTORY'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ALL_HISTORY|

<h2 id="tocS_PublicAllPropertyTypesOperation">PublicAllPropertyTypesOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicallpropertytypesoperation"></a>
<a id="schema_PublicAllPropertyTypesOperation"></a>
<a id="tocSpublicallpropertytypesoperation"></a>
<a id="tocspublicallpropertytypesoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. It is expected to be 'ALL_PROPERTY_TYPES'.|
|operator|string|true|none|A string representing the operator used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ALL_PROPERTY|

<h2 id="tocS_PublicAndFilterBranch">PublicAndFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicandfilterbranch"></a>
<a id="schema_PublicAndFilterBranch"></a>
<a id="tocSpublicandfilterbranch"></a>
<a id="tocspublicandfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within this filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. The default value is 'AND'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, each of which can be another AND, OR, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, or ASSOCIATION filter branch.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that must all be satisfied for this branch to evaluate as true. Each filter can be a property filter, association filter, or other types of analytics and event filters.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|AND|

<h2 id="tocS_PublicAssociationFilterBranch">PublicAssociationFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationfilterbranch"></a>
<a id="schema_PublicAssociationFilterBranch"></a>
<a id="tocSpublicassociationfilterbranch"></a>
<a id="tocspublicassociationfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string indicating the category of the association.|
|associationTypeId|integer(int32)|true|none|An integer representing the unique identifier for the type of association.|
|filterBranchOperator|string|true|none|A string representing the operator applied to the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. Defaults to 'ASSOCIATION'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches, each of which can be one of several types, including OR, AND, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, or ASSOCIATION.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include various types such as property filters, association filters, and analytics filters.|
|objectTypeId|string|true|none|A string representing the unique identifier for the object type being filtered.|
|operator|string|true|none|A string representing the operator used in the filter branch.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|ASSOCIATION|

<h2 id="tocS_PublicAssociationInListFilter">PublicAssociationInListFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationinlistfilter"></a>
<a id="schema_PublicAssociationInListFilter"></a>
<a id="tocSpublicassociationinlistfilter"></a>
<a id="tocspublicassociationinlistfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string indicating the category of the association.|
|associationTypeId|integer(int32)|true|none|An integer representing the unique identifier for the type of association.|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An object used to refine the filter by combining multiple criteria. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|
|filterType|string|true|none|A string indicating the type of filter. Defaults to 'ASSOCIATION'.|
|listId|string|true|none|A string representing the unique identifier of the list to filter.|
|operator|string|true|none|A string representing the operator used in the filter.|
|toObjectType|string|false|none|A string representing the type of object that the association points to.|
|toObjectTypeId|string|false|none|A string representing the type ID of the object that the association points to.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ASSOCIATION|

<h2 id="tocS_PublicBoolPropertyOperation">PublicBoolPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicboolpropertyoperation"></a>
<a id="schema_PublicBoolPropertyOperation"></a>
<a id="tocSpublicboolpropertyoperation"></a>
<a id="tocspublicboolpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'BOOLEAN'.|
|operator|string|true|none|A string representing the operator used in the boolean operation.|
|value|boolean|true|none|A boolean representing the value to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|BOOL|

<h2 id="tocS_PublicCalendarDatePropertyOperation">PublicCalendarDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccalendardatepropertyoperation"></a>
<a id="schema_PublicCalendarDatePropertyOperation"></a>
<a id="tocSpubliccalendardatepropertyoperation"></a>
<a id="tocspubliccalendardatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fiscalYearStart|string|false|none|A string specifying the start month of the fiscal year. Valid values include 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', and 'DECEMBER'.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a set value should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation. The default and only valid value is 'CALENDAR_DATE'.|
|operator|string|true|none|A string representing the operator used in the operation. The specific operators available are not detailed in the specification.|
|timeUnit|string|true|none|A string representing the unit of time involved in the operation. The specific time units available are not detailed in the specification.|
|timeUnitCount|integer(int32)|false|none|An integer representing the count of the time units involved in the operation.|
|useFiscalYear|boolean|false|none|A boolean indicating whether the fiscal year should be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|fiscalYearStart|APRIL|
|fiscalYearStart|AUGUST|
|fiscalYearStart|DECEMBER|
|fiscalYearStart|FEBRUARY|
|fiscalYearStart|JANUARY|
|fiscalYearStart|JULY|
|fiscalYearStart|JUNE|
|fiscalYearStart|MARCH|
|fiscalYearStart|MAY|
|fiscalYearStart|NOVEMBER|
|fiscalYearStart|OCTOBER|
|fiscalYearStart|SEPTEMBER|
|operationType|CALENDAR_DATE|

<h2 id="tocS_PublicCommunicationSubscriptionFilter">PublicCommunicationSubscriptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapubliccommunicationsubscriptionfilter"></a>
<a id="schema_PublicCommunicationSubscriptionFilter"></a>
<a id="tocSpubliccommunicationsubscriptionfilter"></a>
<a id="tocspubliccommunicationsubscriptionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedOptStates|[string]|true|none|An array of strings representing the opt-in states that are accepted for the filter.|
|businessUnitId|string|false|none|A string representing the ID of the business unit associated with the subscription.|
|channel|string|true|none|A string indicating the communication channel associated with the subscription.|
|filterType|string|true|none|A string that specifies the type of filter. Default value is 'COMMUNICATION_SUBSCRIPTION'.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to be filtered.|
|subscriptionType|string|true|none|A string indicating the type of subscription being filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|COMMUNICATION_SUBSCRIPTION|

<h2 id="tocS_PublicComparativeDatePropertyOperation">PublicComparativeDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativedatepropertyoperation"></a>
<a id="schema_PublicComparativeDatePropertyOperation"></a>
<a id="tocSpubliccomparativedatepropertyoperation"></a>
<a id="tocspubliccomparativedatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string representing the name of the property to be compared.|
|defaultComparisonValue|string|false|none|A string specifying the default value to use for comparison if the comparison property is not set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a set value for the property should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation, which is always 'COMPARATIVE_DATE'.|
|operator|string|true|none|A string that specifies the comparison operator used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_DATE|

<h2 id="tocS_PublicComparativeNumberPropertyOperation">PublicComparativeNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativenumberpropertyoperation"></a>
<a id="schema_PublicComparativeNumberPropertyOperation"></a>
<a id="tocSpubliccomparativenumberpropertyoperation"></a>
<a id="tocspubliccomparativenumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|none|
|defaultComparisonValue|string|false|none|none|
|includeObjectsWithNoValueSet|boolean|true|none|none|
|operationType|string|true|none|none|
|operator|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_NUMBER|

<h2 id="tocS_PublicComparativePropertyUpdatedOperation">PublicComparativePropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativepropertyupdatedoperation"></a>
<a id="schema_PublicComparativePropertyUpdatedOperation"></a>
<a id="tocSpubliccomparativepropertyupdatedoperation"></a>
<a id="tocspubliccomparativepropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be compared.|
|defaultComparisonValue|string|false|none|A string that provides a default value for comparison if the property value is not set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation.|
|operationType|string|true|none|A string that indicates the type of operation being performed. It defaults to 'COMPARATIVE_STRING'.|
|operator|string|true|none|A string representing the operator used in the comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_PROPERTY_UPDATED|

<h2 id="tocS_PublicComparativeStringPropertyOperation">PublicComparativeStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativestringpropertyoperation"></a>
<a id="schema_PublicComparativeStringPropertyOperation"></a>
<a id="tocSpubliccomparativestringpropertyoperation"></a>
<a id="tocspubliccomparativestringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be compared.|
|defaultComparisonValue|string|false|none|A string providing a default value for comparison if the property being compared has no value.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property being compared.|
|operationType|string|true|none|A string indicating the type of operation, which is 'COMPARATIVE_STRING' for this component.|
|operator|string|true|none|A string representing the operator used in the comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_STRING|

<h2 id="tocS_PublicConstantFilter">PublicConstantFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicconstantfilter"></a>
<a id="schema_PublicConstantFilter"></a>
<a id="tocSpublicconstantfilter"></a>
<a id="tocspublicconstantfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter. The default value is 'CONSTANT'.|
|shouldAccept|boolean|true|none|A boolean indicating whether the filter should accept the criteria. If true, the criteria are accepted; if false, they are rejected.|
|source|string|false|none|A string providing the source of the filter. This property is optional.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CONSTANT|

<h2 id="tocS_PublicCrmObjectTag">PublicCrmObjectTag</h2>
<!-- backwards compatibility -->
<a id="schemapubliccrmobjecttag"></a>
<a id="schema_PublicCrmObjectTag"></a>
<a id="tocSpubliccrmobjecttag"></a>
<a id="tocspubliccrmobjecttag"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|true|none|The color associated with the CRM object tag, represented as a string.|
|createdAt|string(date-time)|true|none|The date and time when the tag was created, in ISO 8601 format.|
|createdBy|integer(int64)|false|none|An integer representing the ID of the user who created the tag.|
|description|string|false|none|A string providing a description of the CRM object tag.|
|displayOrder|integer(int32)|true|none|An integer indicating the display order of the tag.|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|none|A complex object defining the filter branch associated with the tag, which can include various filter types and branches.|
|filterPipelineIds|[string]|true|none|An array of strings representing the pipeline IDs that this tag is associated with.|
|id|string|true|none|The unique identifier for the CRM object tag, represented as a string.|
|lastModifiedBy|integer(int64)|false|none|An integer representing the ID of the user who last modified the tag.|
|name|string|true|none|The name of the CRM object tag, represented as a string.|
|objectTypeId|string|true|none|The identifier for the type of object this tag is associated with, represented as a string.|
|updatedAt|string(date-time)|true|none|The date and time when the tag was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicCtaAnalyticsFilter">PublicCtaAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicctaanalyticsfilter"></a>
<a id="schema_PublicCtaAnalyticsFilter"></a>
<a id="tocSpublicctaanalyticsfilter"></a>
<a id="tocspublicctaanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional parameter that allows further refinement of the filter by combining multiple conditions. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|
|ctaName|string|true|none|A string representing the name of the Call-to-Action (CTA) to be filtered.|
|filterType|string|true|none|A string that specifies the type of filter being used. The default value is 'CTA'.|
|operator|string|true|none|A string that defines the operation to be performed by the filter.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional parameter that allows further refinement of the filter by excluding certain conditions. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CTA|

<h2 id="tocS_PublicDatePoint">PublicDatePoint</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatepoint"></a>
<a id="schema_PublicDatePoint"></a>
<a id="tocSpublicdatepoint"></a>
<a id="tocspublicdatepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month component of the date.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|
|timeType|string|true|none|A string indicating the type of time reference used.|
|timezoneSource|string|false|none|A string specifying the source of the timezone information.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|
|zoneId|string|true|none|A string representing the identifier of the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|DATE|

<h2 id="tocS_PublicDatePropertyOperation">PublicDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatepropertyoperation"></a>
<a id="schema_PublicDatePropertyOperation"></a>
<a id="tocSpublicdatepropertyoperation"></a>
<a id="tocspublicdatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|month|string|true|none|A string representing the month component of the date.|
|operationType|string|true|none|A string that specifies the type of operation. The default and only valid value is 'DATE'.|
|operator|string|true|none|A string representing the operator used in the date operation. The specific operators are not detailed in the spec.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|DATE|

<h2 id="tocS_PublicDateTimePropertyOperation">PublicDateTimePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatetimepropertyoperation"></a>
<a id="schema_PublicDateTimePropertyOperation"></a>
<a id="tocSpublicdatetimepropertyoperation"></a>
<a id="tocspublicdatetimepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a set value should be included in the operation.|
|operationType|string|true|none|A string representing the type of operation. The default and only valid value is 'DATETIME'.|
|operator|string|true|none|A string indicating the operator used in the operation. The specific operators are not detailed in the spec.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires conversion based on time zones.|
|timestamp|integer(int64)|true|none|An integer representing the timestamp for the operation, formatted as an int64.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|DATETIME|

<h2 id="tocS_PublicEmailEventFilter">PublicEmailEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicemaileventfilter"></a>
<a id="schema_PublicEmailEventFilter"></a>
<a id="tocSpublicemaileventfilter"></a>
<a id="tocspublicemaileventfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|A string that uniquely identifies the application associated with the email event.|
|clickUrl|string|false|none|A string representing the URL that was clicked in the email event.|
|emailId|string|true|none|A string that uniquely identifies the email associated with the event.|
|filterType|string|true|none|A string indicating the type of filter. The default value is 'EMAIL_EVENT'.|
|level|string|true|none|A string representing the level of the email event.|
|operator|string|true|none|A string representing the operation type for the filter. Valid values include 'LINK_CLICKED', 'MARKED_SPAM', 'OPENED', 'OPENED_BUT_LINK_NOT_CLICKED', 'OPENED_BUT_NOT_REPLIED', 'REPLIED', 'UNSUBSCRIBED', 'BOUNCED', 'RECEIVED', 'RECEIVED_BUT_NOT_OPENED', 'SENT', 'SENT_BUT_LINK_NOT_CLICKED', and 'SENT_BUT_NOT_RECEIVED'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object that allows further refinement of the filter based on various criteria such as occurrences or time points.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EMAIL_EVENT|
|operator|BOUNCED|
|operator|LINK_CLICKED|
|operator|MARKED_SPAM|
|operator|OPENED|
|operator|OPENED_BUT_LINK_NOT_CLICKED|
|operator|OPENED_BUT_NOT_REPLIED|
|operator|RECEIVED|
|operator|RECEIVED_BUT_NOT_OPENED|
|operator|REPLIED|
|operator|SENT|
|operator|SENT_BUT_LINK_NOT_CLICKED|
|operator|SENT_BUT_NOT_RECEIVED|
|operator|UNSUBSCRIBED|

<h2 id="tocS_PublicEmailSubscriptionFilter">PublicEmailSubscriptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailsubscriptionfilter"></a>
<a id="schema_PublicEmailSubscriptionFilter"></a>
<a id="tocSpublicemailsubscriptionfilter"></a>
<a id="tocspublicemailsubscriptionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedStatuses|[string]|true|none|An array of strings indicating the subscription statuses that are accepted in the filter.|
|filterType|string|true|none|A string indicating the type of filter, which is 'EMAIL_SUBSCRIPTION' for this component.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to be filtered.|
|subscriptionType|string|false|none|A string representing the type of subscription, which may be used to further refine the filter.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EMAIL_SUBSCRIPTION|

<h2 id="tocS_PublicEnumerationPropertyOperation">PublicEnumerationPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicenumerationpropertyoperation"></a>
<a id="schema_PublicEnumerationPropertyOperation"></a>
<a id="tocSpublicenumerationpropertyoperation"></a>
<a id="tocspublicenumerationpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the enumeration property.|
|operationType|string|true|none|A string indicating the type of operation, which is 'ENUMERATION' by default.|
|operator|string|true|none|A string representing the operator to be used in the enumeration operation.|
|values|[string]|true|none|An array of strings representing the values involved in the enumeration operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ENUMERATION|

<h2 id="tocS_PublicEventAnalyticsFilter">PublicEventAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapubliceventanalyticsfilter"></a>
<a id="schema_PublicEventAnalyticsFilter"></a>
<a id="tocSpubliceventanalyticsfilter"></a>
<a id="tocspubliceventanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.|
|eventId|string|true|none|A string representing the unique identifier for the event being filtered.|
|filterType|string|true|none|A string indicating the type of filter. The default value is 'EVENT'.|
|operator|string|true|none|A string representing the operator used in the filter.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to narrow down the filter results, similar to coalescingRefineBy, with options like occurrences or timestamp-based refinements.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EVENT|

<h2 id="tocS_PublicEventFilterMetadata">PublicEventFilterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapubliceventfiltermetadata"></a>
<a id="schema_PublicEventFilterMetadata"></a>
<a id="tocSpubliceventfiltermetadata"></a>
<a id="tocspubliceventfiltermetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|An object that defines the operation to be performed on the property. The specific structure of this object can vary based on the type of operation being applied.|
|property|string|true|none|A string representing the property name associated with the event filter.|

<h2 id="tocS_PublicFiscalQuarterReference">PublicFiscalQuarterReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicfiscalquarterreference"></a>
<a id="schema_PublicFiscalQuarterReference"></a>
<a id="tocSpublicfiscalquarterreference"></a>
<a id="tocspublicfiscalquarterreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond of the second.|
|minute|integer(int32)|false|none|An integer representing the minute of the hour.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal quarter.|
|referenceType|string|true|none|A string that specifies the type of reference, defaulting to 'FISCAL_QUARTER'.|
|second|integer(int32)|false|none|An integer representing the second of the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_QUARTER|

<h2 id="tocS_PublicFiscalYearReference">PublicFiscalYearReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicfiscalyearreference"></a>
<a id="schema_PublicFiscalYearReference"></a>
<a id="tocSpublicfiscalyearreference"></a>
<a id="tocspublicfiscalyearreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal year.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'FISCAL_YEAR' for this component.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_YEAR|

<h2 id="tocS_PublicFormSubmissionFilter">PublicFormSubmissionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicformsubmissionfilter"></a>
<a id="schema_PublicFormSubmissionFilter"></a>
<a id="tocSpublicformsubmissionfilter"></a>
<a id="tocspublicformsubmissionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object used to refine the filter by combining multiple criteria, such as occurrences or timestamps.|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'FORM_SUBMISSION'.|
|formId|string|false|none|A string representing the unique identifier of the form.|
|operator|string|true|none|A string that determines the operation to be performed. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object used to refine the filter by specific criteria, such as occurrences or timestamps.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|FORM_SUBMISSION|
|operator|FILLED_OUT|
|operator|NOT_FILLED_OUT|

<h2 id="tocS_PublicFormSubmissionOnPageFilter">PublicFormSubmissionOnPageFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicformsubmissiononpagefilter"></a>
<a id="schema_PublicFormSubmissionOnPageFilter"></a>
<a id="tocSpublicformsubmissiononpagefilter"></a>
<a id="tocspublicformsubmissiononpagefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'FORM_SUBMISSION_ON_PAGE'.|
|formId|string|false|none|A string representing the unique identifier of the form.|
|operator|string|true|none|A string that determines the operation to be applied. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.|
|pageId|string|true|none|A string representing the unique identifier of the page.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|FORM_SUBMISSION_ON_PAGE|
|operator|FILLED_OUT|
|operator|NOT_FILLED_OUT|

<h2 id="tocS_PublicInListFilter">PublicInListFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicinlistfilter"></a>
<a id="schema_PublicInListFilter"></a>
<a id="tocSpublicinlistfilter"></a>
<a id="tocspublicinlistfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'IN_LIST'.|
|listId|string|true|none|A string representing the unique identifier of the list to filter against.|
|metadata|[PublicInListFilterMetadata](#schemapublicinlistfiltermetadata)|false|none|none|
|operator|string|true|none|A string representing the operator used in the filter.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|IN_LIST|

<h2 id="tocS_PublicInListFilterMetadata">PublicInListFilterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapublicinlistfiltermetadata"></a>
<a id="schema_PublicInListFilterMetadata"></a>
<a id="tocSpublicinlistfiltermetadata"></a>
<a id="tocspublicinlistfiltermetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the list filter. It is a string value.|
|inListType|string|true|none|The type of the list filter, represented as a string.|

<h2 id="tocS_PublicIndexOffset">PublicIndexOffset</h2>
<!-- backwards compatibility -->
<a id="schemapublicindexoffset"></a>
<a id="schema_PublicIndexOffset"></a>
<a id="tocSpublicindexoffset"></a>
<a id="tocspublicindexoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|integer(int32)|false|none|An integer representing the number of days in the time offset.|
|hours|integer(int32)|false|none|An integer representing the number of hours in the time offset.|
|milliseconds|integer(int32)|false|none|An integer representing the number of milliseconds in the time offset.|
|minutes|integer(int32)|false|none|An integer representing the number of minutes in the time offset.|
|months|integer(int32)|false|none|An integer representing the number of months in the time offset.|
|quarters|integer(int32)|false|none|An integer representing the number of quarters in the time offset.|
|seconds|integer(int32)|false|none|An integer representing the number of seconds in the time offset.|
|weeks|integer(int32)|false|none|An integer representing the number of weeks in the time offset.|
|years|integer(int32)|false|none|An integer representing the number of years in the time offset.|

<h2 id="tocS_PublicIndexedTimePoint">PublicIndexedTimePoint</h2>
<!-- backwards compatibility -->
<a id="schemapublicindexedtimepoint"></a>
<a id="schema_PublicIndexedTimePoint"></a>
<a id="tocSpublicindexedtimepoint"></a>
<a id="tocspublicindexedtimepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexReference|[PublicNowReference](#schemapublicnowreference) \| [PublicTodayReference](#schemapublictodayreference) \| [PublicWeekReference](#schemapublicweekreference) \| [PublicFiscalQuarterReference](#schemapublicfiscalquarterreference) \| [PublicFiscalYearReference](#schemapublicfiscalyearreference) \| [PublicYearReference](#schemapublicyearreference) \| [PublicQuarterReference](#schemapublicquarterreference) \| [PublicMonthReference](#schemapublicmonthreference)|true|none|An object that defines the reference point for the indexed time. It can be one of several types such as 'NOW', 'TODAY', 'WEEK', 'FISCAL_QUARTER', 'FISCAL_YEAR', 'YEAR', 'QUARTER', or 'MONTH'.|
|offset|[PublicIndexOffset](#schemapublicindexoffset)|false|none|none|
|timeType|string|true|none|A string indicating the type of time point, which is 'INDEXED' for this component.|
|timezoneSource|string|false|none|A string specifying the source of the timezone information.|
|zoneId|string|true|none|A string representing the identifier for the time zone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|INDEXED|

<h2 id="tocS_PublicIntegrationEventFilter">PublicIntegrationEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicintegrationeventfilter"></a>
<a id="schema_PublicIntegrationEventFilter"></a>
<a id="tocSpublicintegrationeventfilter"></a>
<a id="tocspublicintegrationeventfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeId|integer(int32)|true|none|A string representing the unique identifier of the event type being filtered.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of filter metadata objects that define the specific conditions or criteria for the event filter. Each item in the array is a reference to a PublicEventFilterMetadata schema.|
|filterType|string|true|none|A string that indicates the type of filter being applied. This property has a default value of 'INTEGRATION_EVENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|INTEGRATION_EVENT|

<h2 id="tocS_PublicMonthReference">PublicMonthReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicmonthreference"></a>
<a id="schema_PublicMonthReference"></a>
<a id="tocSpublicmonthreference"></a>
<a id="tocspublicmonthreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which defaults to 'MONTH'.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|MONTH|

<h2 id="tocS_PublicMultiStringPropertyOperation">PublicMultiStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicmultistringpropertyoperation"></a>
<a id="schema_PublicMultiStringPropertyOperation"></a>
<a id="tocSpublicmultistringpropertyoperation"></a>
<a id="tocspublicmultistringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a value set should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation. The default value is 'MULTISTRING'.|
|operator|string|true|none|A string that defines the operator used in the operation.|
|values|[string]|true|none|An array of strings representing the values involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|MULTISTRING|

<h2 id="tocS_PublicNotAllFilterBranch">PublicNotAllFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicnotallfilterbranch"></a>
<a id="schema_PublicNotAllFilterBranch"></a>
<a id="tocSpublicnotallfilterbranch"></a>
<a id="tocspublicnotallfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within this filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. The default value is 'NOT_ALL'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, allowing for complex filter structures. Each item can be one of several filter branch types.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within this branch. Each filter can be one of several types, such as property filters or event analytics filters.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|NOT_ALL|

<h2 id="tocS_PublicNotAnyFilterBranch">PublicNotAnyFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicnotanyfilterbranch"></a>
<a id="schema_PublicNotAnyFilterBranch"></a>
<a id="tocSpublicnotanyfilterbranch"></a>
<a id="tocspublicnotanyfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used in the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. The default value is 'NOT_ANY'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches. Each item can be one of several types of filter branches, such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', or 'PublicNotAnyFilterBranch'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within this branch. Each filter can be one of various types, such as 'PublicPropertyFilter', 'PublicEventAnalyticsFilter', or 'PublicEmailEventFilter'.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|NOT_ANY|

<h2 id="tocS_PublicNowReference">PublicNowReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicnowreference"></a>
<a id="schema_PublicNowReference"></a>
<a id="tocSpublicnowreference"></a>
<a id="tocspublicnowreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the current hour.|
|millisecond|integer(int32)|false|none|An integer representing the current millisecond.|
|minute|integer(int32)|false|none|An integer representing the current minute.|
|referenceType|string|true|none|A string indicating the type of reference, which is always 'NOW'.|
|second|integer(int32)|false|none|An integer representing the current second.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|NOW|

<h2 id="tocS_PublicNumOccurrencesRefineBy">PublicNumOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicnumoccurrencesrefineby"></a>
<a id="schema_PublicNumOccurrencesRefineBy"></a>
<a id="tocSpublicnumoccurrencesrefineby"></a>
<a id="tocspublicnumoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxOccurrences|integer(int32)|false|none|An integer representing the maximum number of occurrences allowed for the refinement.|
|minOccurrences|integer(int32)|false|none|An integer representing the minimum number of occurrences required for the refinement.|
|type|string|true|none|A string that specifies the type of refinement. The default value is 'NUM_OCCURRENCES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NUM_OCCURRENCES|

<h2 id="tocS_PublicNumberPropertyOperation">PublicNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicnumberpropertyoperation"></a>
<a id="schema_PublicNumberPropertyOperation"></a>
<a id="tocSpublicnumberpropertyoperation"></a>
<a id="tocspublicnumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation. The default value is 'NUMBER'.|
|operator|string|true|none|A string representing the operator used in the numeric operation.|
|value|number|true|none|A number representing the value involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NUMBER|

<h2 id="tocS_PublicOrFilterBranch">PublicOrFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicorfilterbranch"></a>
<a id="schema_PublicOrFilterBranch"></a>
<a id="tocSpublicorfilterbranch"></a>
<a id="tocspublicorfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string that represents the operator used within the filter branch.|
|filterBranchType|string|true|none|A string that specifies the type of filter branch. The default value is 'OR'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', and others.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include different types such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', and others.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|OR|

<h2 id="tocS_PublicPageViewAnalyticsFilter">PublicPageViewAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicpageviewanalyticsfilter"></a>
<a id="schema_PublicPageViewAnalyticsFilter"></a>
<a id="tocSpublicpageviewanalyticsfilter"></a>
<a id="tocspublicpageviewanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to coalesce data. It can be one of several predefined schemas, such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|
|enableTracking|boolean|false|none|A boolean indicating whether tracking is enabled for the page view analytics.|
|filterType|string|true|none|A string that specifies the type of filter being applied. For this component, it defaults to 'PAGE_VIEW'.|
|operator|string|true|none|A string representing the operator used in the filter. This determines how the filter criteria are applied.|
|pageUrl|string|true|none|A string representing the URL of the page for which analytics data is being filtered.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to prune data. Similar to coalescingRefineBy, it can be one of several predefined schemas.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PAGE_VIEW|

<h2 id="tocS_PublicPrivacyAnalyticsFilter">PublicPrivacyAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicprivacyanalyticsfilter"></a>
<a id="schema_PublicPrivacyAnalyticsFilter"></a>
<a id="tocSpublicprivacyanalyticsfilter"></a>
<a id="tocspublicprivacyanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string indicating the type of filter, which is 'PRIVACY' for this component. It is a constant value used to identify the filter type.|
|operator|string|true|none|A string specifying the operation or condition to be applied in the filter. The exact operations are not detailed in the specification.|
|privacyName|string|true|none|A string representing the name of the privacy setting or preference that the filter will apply to.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PRIVACY|

<h2 id="tocS_PublicPropertyFilter">PublicPropertyFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyfilter"></a>
<a id="schema_PublicPropertyFilter"></a>
<a id="tocSpublicpropertyfilter"></a>
<a id="tocspublicpropertyfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string indicating the type of filter, which is 'PROPERTY' by default.|
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|Defines the operation to be performed on the property for filtering. This can be one of several operation types, such as boolean, number, string, date, and more, depending on the schema referenced.|
|property|string|true|none|The name of the property to filter by, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PROPERTY|

<h2 id="tocS_PublicPropertyReferencedTime">PublicPropertyReferencedTime</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyreferencedtime"></a>
<a id="schema_PublicPropertyReferencedTime"></a>
<a id="tocSpublicpropertyreferencedtime"></a>
<a id="tocspublicpropertyreferencedtime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|string|true|none|A string indicating the property within the CRM object that is being referenced for time operations.|
|referenceType|string|true|none|A string defining the type of reference being used.|
|timeType|string|true|none|A string indicating the type of time reference, which is 'PROPERTY_REFERENCED' by default.|
|timezoneSource|string|false|none|A string specifying the source of the timezone information.|
|zoneId|string|true|none|A string representing the identifier for the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|PROPERTY_REFERENCED|

<h2 id="tocS_PublicQuarterReference">PublicQuarterReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicquarterreference"></a>
<a id="schema_PublicQuarterReference"></a>
<a id="tocSpublicquarterreference"></a>
<a id="tocspublicquarterreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day within the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month within the quarter.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'QUARTER' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|QUARTER|

<h2 id="tocS_PublicRangedDatePropertyOperation">PublicRangedDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangeddatepropertyoperation"></a>
<a id="schema_PublicRangedDatePropertyOperation"></a>
<a id="tocSpublicrangeddatepropertyoperation"></a>
<a id="tocspublicrangeddatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the date property.|
|lowerBound|integer(int64)|true|none|An integer representing the lower bound of the date range, in Unix timestamp format (int64).|
|operationType|string|true|none|A string indicating the type of operation, which is 'RANGED_DATE' by default.|
|operator|string|true|none|A string representing the operator used in the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|
|upperBound|integer(int64)|true|none|An integer representing the upper bound of the date range, in Unix timestamp format (int64).|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|RANGED_DATE|

<h2 id="tocS_PublicRangedNumberPropertyOperation">PublicRangedNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangednumberpropertyoperation"></a>
<a id="schema_PublicRangedNumberPropertyOperation"></a>
<a id="tocSpublicrangednumberpropertyoperation"></a>
<a id="tocspublicrangednumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property.|
|lowerBound|integer(int64)|true|none|An integer specifying the lower bound of the range, in int64 format.|
|operationType|string|true|none|A string that indicates the type of operation. The default value is 'RANGED_NUMBER'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|upperBound|integer(int64)|true|none|An integer specifying the upper bound of the range, in int64 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NUMBER_RANGED|

<h2 id="tocS_PublicRangedTimeOperation">PublicRangedTimeOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangedtimeoperation"></a>
<a id="schema_PublicRangedTimeOperation"></a>
<a id="tocSpublicrangedtimeoperation"></a>
<a id="tocspublicrangedtimeoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the specified property.|
|lowerBoundEndpointBehavior|string|false|none|A string specifying the behavior at the lower endpoint of the time range.|
|lowerBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|Defines the lower bound of the time range, which can be a date point, indexed time point, or property-referenced time.|
|operationType|string|true|none|A string representing the type of operation being performed.|
|operator|string|true|none|A string representing the operator used in the time-ranged operation.|
|propertyParser|string|false|none|A string indicating the parser used for the property in the operation.|
|type|string|true|none|A string indicating the type of operation, defaulting to 'TIME_RANGED'.|
|upperBoundEndpointBehavior|string|false|none|A string specifying the behavior at the upper endpoint of the time range.|
|upperBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|Defines the upper bound of the time range, which can be a date point, indexed time point, or property-referenced time.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TIME_RANGED|

<h2 id="tocS_PublicRelativeComparativeTimestampRefineBy">PublicRelativeComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicrelativecomparativetimestamprefineby"></a>
<a id="schema_PublicRelativeComparativeTimestampRefineBy"></a>
<a id="tocSpublicrelativecomparativetimestamprefineby"></a>
<a id="tocspublicrelativecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string that specifies the type of comparison to be made with the timestamp.|
|timeOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|
|type|string|true|none|A string that indicates the type of refinement, which is 'RELATIVE_COMPARATIVE' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIVE_COMPARATIVE|

<h2 id="tocS_PublicRelativeRangedTimestampRefineBy">PublicRelativeRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicrelativerangedtimestamprefineby"></a>
<a id="schema_PublicRelativeRangedTimestampRefineBy"></a>
<a id="tocSpublicrelativerangedtimestamprefineby"></a>
<a id="tocspublicrelativerangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerBoundOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|
|rangeType|string|true|none|A string that defines the type of range for the timestamp refinement.|
|type|string|true|none|A string that specifies the type of refine operation. The default value is 'RELATIVE_RANGED'.|
|upperBoundOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIVE_RANGED|

<h2 id="tocS_PublicRestrictedFilterBranch">PublicRestrictedFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicrestrictedfilterbranch"></a>
<a id="schema_PublicRestrictedFilterBranch"></a>
<a id="tocSpublicrestrictedfilterbranch"></a>
<a id="tocspublicrestrictedfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within this filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which defaults to 'RESTRICTED'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, each of which can be of various types such as 'OR', 'AND', 'NOT_ALL', etc.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within this branch, which can include various filter types like property filters, event filters, and more.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|RESTRICTED|

<h2 id="tocS_PublicRollingDateRangePropertyOperation">PublicRollingDateRangePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrollingdaterangepropertyoperation"></a>
<a id="schema_PublicRollingDateRangePropertyOperation"></a>
<a id="tocSpublicrollingdaterangepropertyoperation"></a>
<a id="tocspublicrollingdaterangepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days for the rolling date range.|
|operationType|string|true|none|A string indicating the type of operation, which is 'ROLLING_DATE_RANGE' for this component.|
|operator|string|true|none|A string representing the operator used in the date range operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ROLLING_DATE_RANGE|

<h2 id="tocS_PublicRollingPropertyUpdatedOperation">PublicRollingPropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrollingpropertyupdatedoperation"></a>
<a id="schema_PublicRollingPropertyUpdatedOperation"></a>
<a id="tocSpublicrollingpropertyupdatedoperation"></a>
<a id="tocspublicrollingpropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days over which the rolling update operation applies.|
|operationType|string|true|none|A string indicating the type of operation, which is 'ROLLING_PROPERTY_UPDATED' for this component.|
|operator|string|true|none|A string representing the operator used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ROLLING_PROPERTY_UPDATED|

<h2 id="tocS_PublicSetOccurrencesRefineBy">PublicSetOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicsetoccurrencesrefineby"></a>
<a id="schema_PublicSetOccurrencesRefineBy"></a>
<a id="tocSpublicsetoccurrencesrefineby"></a>
<a id="tocspublicsetoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setType|string|true|none|A string representing the specific set type used for refining occurrences.|
|type|string|true|none|A string that specifies the type of refinement. The default value is 'SET_OCCURRENCES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SET_OCCURRENCES|

<h2 id="tocS_PublicStringPropertyOperation">PublicStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicstringpropertyoperation"></a>
<a id="schema_PublicStringPropertyOperation"></a>
<a id="tocSpublicstringpropertyoperation"></a>
<a id="tocspublicstringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation, defaulting to 'STRING'.|
|operator|string|true|none|A string specifying the operator used in the operation.|
|value|string|true|none|A string representing the value associated with the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|STRING|

<h2 id="tocS_PublicSurveyMonkeyFilter">PublicSurveyMonkeyFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicsurveymonkeyfilter"></a>
<a id="schema_PublicSurveyMonkeyFilter"></a>
<a id="tocSpublicsurveymonkeyfilter"></a>
<a id="tocspublicsurveymonkeyfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter. The default value is 'SURVEY_MONKEY', and it must be 'SURVEY_MONKEY'.|
|operator|string|true|none|A string representing the operation to be applied in the filter. The specific operations available are not detailed in the spec.|
|surveyId|string|true|none|A string that specifies the unique identifier of the SurveyMonkey survey to be filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|SURVEY_MONKEY|

<h2 id="tocS_PublicSurveyMonkeyValueFilter">PublicSurveyMonkeyValueFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicsurveymonkeyvaluefilter"></a>
<a id="schema_PublicSurveyMonkeyValueFilter"></a>
<a id="tocSpublicsurveymonkeyvaluefilter"></a>
<a id="tocspublicsurveymonkeyvaluefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter, which is 'SURVEY_MONKEY_VALUE' for this component.|
|operator|string|true|none|A string representing the operator used in the filter to compare survey response values.|
|surveyAnswerColId|string|false|none|A string identifying the column of the survey answer that the filter evaluates.|
|surveyAnswerRowId|string|false|none|A string identifying the row of the survey answer that the filter evaluates.|
|surveyId|string|true|none|A string that uniquely identifies the SurveyMonkey survey to which the filter is applied.|
|surveyQuestion|string|true|none|A string representing the specific question within the survey that the filter targets.|
|valueComparison|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|An object that defines the criteria for comparing survey response values. It can be one of several types, such as boolean, number, string, or date operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|SURVEY_MONKEY_VALUE|

<h2 id="tocS_PublicTimeOffset">PublicTimeOffset</h2>
<!-- backwards compatibility -->
<a id="schemapublictimeoffset"></a>
<a id="schema_PublicTimeOffset"></a>
<a id="tocSpublictimeoffset"></a>
<a id="tocspublictimeoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|An integer specifying the magnitude of the time offset in the specified time unit.|
|offsetDirection|string|true|none|A string indicating the direction of the time offset. Valid values are 'BEFORE' and 'AFTER'.|
|timeUnit|string|true|none|A string representing the unit of time for the offset, such as 'DAYS', 'HOURS', 'MINUTES', etc.|

<h2 id="tocS_PublicTimePointOperation">PublicTimePointOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublictimepointoperation"></a>
<a id="schema_PublicTimePointOperation"></a>
<a id="tocSpublictimepointoperation"></a>
<a id="tocspublictimepointoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointBehavior|string|false|none|A string describing the behavior of the endpoint.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set.|
|operationType|string|true|none|A string indicating the type of operation, which is 'TIME_POINT' by default.|
|operator|string|true|none|A string representing the operator used in the operation.|
|propertyParser|string|false|none|A string indicating the parser used for the property.|
|timePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object representing the specific time point, which can be a date point, indexed time point, or property-referenced time.|
|type|string|true|none|A string indicating the type of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|TIME_POINT|

<h2 id="tocS_PublicTodayReference">PublicTodayReference</h2>
<!-- backwards compatibility -->
<a id="schemapublictodayreference"></a>
<a id="schema_PublicTodayReference"></a>
<a id="tocSpublictodayreference"></a>
<a id="tocspublictodayreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is always 'TODAY' for this component.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|TODAY|

<h2 id="tocS_PublicUnifiedEventsFilter">PublicUnifiedEventsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicunifiedeventsfilter"></a>
<a id="schema_PublicUnifiedEventsFilter"></a>
<a id="tocSpublicunifiedeventsfilter"></a>
<a id="tocspublicunifiedeventsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several predefined schemas, used to combine multiple conditions for event filtering.|
|eventTypeId|string|false|none|A string representing the unique identifier for the type of event being filtered.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of filter metadata objects, each defining a specific condition or set of conditions to apply to the event data.|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'UNIFIED_EVENTS'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several predefined schemas, used to narrow down the events based on specific conditions.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|UNIFIED_EVENTS|

<h2 id="tocS_PublicUnifiedEventsFilterBranch">PublicUnifiedEventsFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicunifiedeventsfilterbranch"></a>
<a id="schema_PublicUnifiedEventsFilterBranch"></a>
<a id="tocSpublicunifiedeventsfilterbranch"></a>
<a id="tocspublicunifiedeventsfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as 'NUM_OCCURRENCES', 'SET_OCCURRENCES', 'RELATIVE_COMPARATIVE', and others, used to further refine the filter logic.|
|eventTypeId|string|true|none|A string representing the unique identifier of the event type to which the filters apply.|
|filterBranchOperator|string|true|none|A string representing the operator used within the filter branch, allowing for logical operations between filters.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, defaulting to 'UNIFIED_EVENTS'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, each of which can be one of several types, such as 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', or 'ASSOCIATION'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include various types such as property filters, association filters, and others, allowing for detailed and specific filtering criteria.|
|operator|string|true|none|A string specifying the operation to be performed, with valid values including 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion similar to coalescingRefineBy, used to prune or limit the filter results based on additional criteria.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|UNIFIED_EVENTS|
|operator|HAS_COMPLETED|
|operator|HAS_NOT_COMPLETED|

<h2 id="tocS_PublicWebinarFilter">PublicWebinarFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicwebinarfilter"></a>
<a id="schema_PublicWebinarFilter"></a>
<a id="tocSpublicwebinarfilter"></a>
<a id="tocspublicwebinarfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'WEBINAR'.|
|operator|string|true|none|A string representing the operator used in the filter condition.|
|webinarId|string|false|none|A string that uniquely identifies the webinar being filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|WEBINAR|

<h2 id="tocS_PublicWeekReference">PublicWeekReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicweekreference"></a>
<a id="schema_PublicWeekReference"></a>
<a id="tocSpublicweekreference"></a>
<a id="tocspublicweekreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|true|none|A string indicating the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', and 'SUNDAY'.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'WEEK' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|FRIDAY|
|dayOfWeek|MONDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|referenceType|WEEK|

<h2 id="tocS_PublicYearReference">PublicYearReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicyearreference"></a>
<a id="schema_PublicYearReference"></a>
<a id="tocSpublicyearreference"></a>
<a id="tocspublicyearreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month component of the date.|
|referenceType|string|true|none|A string that specifies the type of reference, which is 'YEAR' by default.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|YEAR|

<h2 id="tocS_ReplacePublicCrmObjectTagRequest">ReplacePublicCrmObjectTagRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplacepubliccrmobjecttagrequest"></a>
<a id="schema_ReplacePublicCrmObjectTagRequest"></a>
<a id="tocSreplacepubliccrmobjecttagrequest"></a>
<a id="tocsreplacepubliccrmobjecttagrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|true|none|A string specifying the color associated with the CRM object tag.|
|description|string|false|none|A string providing a description of the CRM object tag.|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|none|An object that defines the filter branch for the CRM object tag. It can be one of several filter branch types, such as PublicOrFilterBranch or PublicAndFilterBranch.|
|filterPipelineIds|[string]|true|none|An array of strings representing the IDs of the pipelines to which the CRM object tag is applicable.|
|name|string|true|none|A string representing the name of the CRM object tag.|
