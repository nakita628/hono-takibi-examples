<h1 id="crm-pipeline-governance">CRM Pipeline Governance v2026-09</h1>

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
|crm.pipelines.approval.read||
|crm.pipelines.governance.read||
|crm.pipelines.governance.write||
|crm.pipelines.stage_permissions.read||
|crm.pipelines.stage_permissions.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-pipeline-governance-advanced">Advanced</h1>

## Start Approval

<a id="opIdpost-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/start_/crm/pipelines-rules/2026-09-beta/{objectTypeId}/{pipelineId}/approvals/start"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/start' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/start`

Initiate the approval process for a specific pipeline within a given object type. This endpoint is useful for triggering approval workflows that are associated with pipeline stages, ensuring that the necessary approvals are obtained before proceeding with further actions in the pipeline.

> Body parameter

```json
null
```

<h3 id="start-approval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the approval process is being started.|
|pipelineId|path|string|true|The unique identifier of the pipeline for which the approval process is being initiated.|
|body|body|[PublicCreateApprovalRequest](#schemapubliccreateapprovalrequest)|true|none|
|» objectId|body|integer(int64)|true|The unique identifier of the object for which the approval request is being created. It is an integer formatted as int64.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="start-approval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicObjectApprovalStatus](#schemapublicobjectapprovalstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

<h1 id="crm-pipeline-governance-basic">Basic</h1>

## Retrieve rules

<a id="opIdget-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}`

Retrieve the rules associated with a specific pipeline in your HubSpot account. This endpoint allows you to access governance validation rules and approval stages for the specified pipeline. It is useful for understanding the constraints and approval processes applied to the pipeline.

<h3 id="retrieve-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the pipeline rules are being retrieved.|
|pipelineId|path|string|true|The unique identifier of the pipeline whose rules are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPipelineRules](#schemapublicpipelinerules)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.governance.read )
</aside>

## Update rules (Replace)

<a id="opIdput-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}`

Update the rules for a specific pipeline in your HubSpot account. This endpoint allows you to modify governance validation rules and approval stages associated with a pipeline. It requires specifying the object type and pipeline identifiers.

> Body parameter

```json
null
```

<h3 id="update-rules-replace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the pipeline rules are being updated.|
|pipelineId|path|string|true|The unique identifier of the pipeline whose rules are being updated.|
|body|body|[PublicPipelineRulesUpdateRequest](#schemapublicpipelinerulesupdaterequest)|true|none|
|» approvalStage|body|[PublicApprovalStageRuleRequest](#schemapublicapprovalstagerulerequest)|false|none|
|» governanceValidationRules|body|[PublicGovernanceValidationRules](#schemapublicgovernancevalidationrules)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-rules-replace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPipelineRules](#schemapublicpipelinerules)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

## Delete

<a id="opIddelete-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}`

Delete a specific set of pipeline rules associated with a given object type and pipeline ID in your HubSpot account. This operation is useful for removing obsolete or incorrect rules from a pipeline. Ensure that the objectTypeId and pipelineId are correctly specified to avoid unintended deletions.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type associated with the pipeline rules to delete.|
|pipelineId|path|string|true|The unique identifier of the pipeline whose rules are to be deleted.|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

## Update rules (Partial)

<a id="opIdpatch-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}`

Update the rules for a specific pipeline within a given object type in HubSpot. This operation allows you to modify governance validation rules and approval stages for the specified pipeline. It is useful for maintaining or altering the workflow rules associated with your pipelines.

> Body parameter

```json
null
```

<h3 id="update-rules-partial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the pipeline rules are being updated.|
|pipelineId|path|string|true|The unique identifier of the pipeline whose rules are being updated.|
|body|body|[PublicPipelineRulesPatchRequest](#schemapublicpipelinerulespatchrequest)|true|none|
|» approvalStage|body|object|false|A rule that defines the approval process for a specific pipeline stage. It is defined using the PublicApprovalStageRuleRequest schema.|
|» noBackwardsMovementRule|body|object|false|A rule that prevents moving backwards in the pipeline stages. It is defined using the PublicSequenceValidationRule schema.|
|» noSkippingStagesRule|body|object|false|A rule that prevents skipping stages in the pipeline. It is defined using the PublicSequenceValidationRule schema.|
|» objectCreationRule|body|object|false|A rule that specifies conditions for object creation within the pipeline. It is defined using the PublicObjectCreationRule schema.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-rules-partial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPipelineRules](#schemapublicpipelinerules)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.governance.write )
</aside>

## Retrieve Approval

<a id="opIdget-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/{objectId}`

Retrieve the approval status of a specific object within a pipeline. This endpoint is useful for checking the current approval state of an object, which can be critical in workflows that require validation or authorization steps.

<h3 id="retrieve-approval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|integer(int64)|true|The unique identifier of the object for which the approval status is being retrieved.|
|objectTypeId|path|string|true|The unique identifier for the type of object being referenced.|
|pipelineId|path|string|true|The unique identifier of the pipeline containing the object.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-approval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicObjectApprovalStatus](#schemapublicobjectapprovalstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.approval.read )
</aside>

## Retrieve permissions

<a id="opIdget-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions`

Retrieve the stage edit permissions for a specific pipeline in your HubSpot account. This endpoint allows you to view the permissions set for editing stages within a given pipeline, identified by its object type and pipeline ID. This can be useful for managing access and ensuring that only authorized users can modify pipeline stages.

<h3 id="retrieve-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the pipeline stage edit permissions are being retrieved.|
|pipelineId|path|string|true|The unique identifier of the pipeline whose stage edit permissions are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPipelineStagePermissions](#schemapublicpipelinestagepermissions)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.stage_permissions.read )
</aside>

## Update permissions

<a id="opIdput-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions`

Update the stage edit permissions for a specific pipeline in your HubSpot account. This endpoint allows you to modify which users or teams have access to edit stages within a specified pipeline. It is useful for managing access control and ensuring that only authorized personnel can make changes to the pipeline stages.

> Body parameter

```json
null
```

<h3 id="update-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type associated with the pipeline.|
|pipelineId|path|string|true|The unique identifier of the pipeline for which stage edit permissions are being updated.|
|body|body|[PublicPipelineStagePermissionsUpdateRequest](#schemapublicpipelinestagepermissionsupdaterequest)|true|none|
|» stages|body|[[PublicStagePermissionRequest](#schemapublicstagepermissionrequest)]|true|An array of stage permission requests, each defined by the PublicStagePermissionRequest schema. This property specifies the permissions to be updated for each stage in the pipeline.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPipelineStagePermissions](#schemapublicpipelinestagepermissions)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.pipelines.stage_permissions.write )
</aside>

# Schemas

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
|context|object|false|none|An object containing additional context about the error condition, with properties as arrays of strings.|
|correlationId|string(uuid)|true|none|A string that uniquely identifies the request for tracking and debugging purposes.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array of ErrorDetail objects that provide detailed information about each error encountered.|
|links|object|false|none|An object containing related links, where each key is a string and the value is a string representing a URL.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|subCategory|string|false|none|A string providing more specific details about the error category.|

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
|context|object|false|none|Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further details.|
|in|string|false|none|The name of the field or parameter in which the error was found. This is a string property.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a required string property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. This is a string property.|

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
|comparison|string|true|none|A string representing the type of comparison to be made with the timestamp.|
|timestamp|integer(int64)|true|none|An integer representing the specific point in time to be used for the comparison, formatted as a Unix timestamp in milliseconds.|
|type|string|true|none|A string indicating the type of refinement, which is 'ABSOLUTE_COMPARATIVE'.|

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
|lowerTimestamp|integer(int64)|true|none|An integer representing the lower bound of the timestamp range, specified as a Unix timestamp in milliseconds.|
|rangeType|string|true|none|A string representing the type of range being defined.|
|type|string|true|none|A string that specifies the type of refine by operation. The default value is 'ABSOLUTE_RANGED'.|
|upperTimestamp|integer(int64)|true|none|An integer representing the upper bound of the timestamp range, specified as a Unix timestamp in milliseconds.|

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
|adNetwork|string|true|none|A string identifying the ad network where the search is performed.|
|entityType|string|true|none|A string representing the type of entity being filtered.|
|filterType|string|true|none|A string indicating the type of filter being applied. Default value is 'ADS_SEARCH'.|
|operator|string|true|none|A string that specifies the operation or condition applied to the filter.|
|searchTermType|string|true|none|A string specifying the type of search term used in the filter.|
|searchTerms|[string]|true|none|An array of strings containing the terms used to search within the ad network.|

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
|filterType|string|true|none|A string that indicates the type of filter being applied. The default value is 'ADS_TIME'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An object that defines the criteria for refining the filter based on time attributes. It can be one of several types, such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, or various timestamp refine types.|

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
|type|string|true|none|A string representing the type of refinement. The default and only valid value is 'ALL_HISTORY'.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation. The default and only valid value is 'ALL_PROPERTY_TYPES'.|
|operator|string|true|none|A string representing the operator to be used in the operation.|

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
|filterBranchOperator|string|true|none|A string representing the logical operator used in the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. Defaults to 'AND'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, which can include 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', and 'ASSOCIATION' filter branches.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that are applied within this branch. These can include various types of filters such as property filters, event filters, and subscription filters.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|AND|

<h2 id="tocS_PublicApprovalStageRule">PublicApprovalStageRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicapprovalstagerule"></a>
<a id="schema_PublicApprovalStageRule"></a>
<a id="tocSpublicapprovalstagerule"></a>
<a id="tocspublicapprovalstagerule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalComment|string|false|none|A string that allows for an optional comment or note regarding the approval process.|
|approvalMode|string|true|none|Specifies the mode of approval required. It can be either 'ALL', meaning all approvers must approve, or 'ANY', meaning any one approver can approve. It is a string.|
|approverUserIds|[string]|true|none|An array of user IDs representing the users who are designated as approvers for this stage. Each user ID is a string.|
|conditionalApprovalFilterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|Defines the conditions under which the approval is required. It can be one of several filter branch types, such as PublicOrFilterBranch or PublicAndFilterBranch, which determine the logical conditions for approval.|
|pipelineStageId|string|true|none|The unique identifier for the pipeline stage that this approval rule applies to. It is a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvalMode|ALL|
|approvalMode|ANY|

<h2 id="tocS_PublicApprovalStageRuleRequest">PublicApprovalStageRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicapprovalstagerulerequest"></a>
<a id="schema_PublicApprovalStageRuleRequest"></a>
<a id="tocSpublicapprovalstagerulerequest"></a>
<a id="tocspublicapprovalstagerulerequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalComment|string|false|none|A string that allows an optional comment to be added to the approval rule.|
|approvalMode|string|true|none|Specifies the mode of approval required. It can be either 'ALL', meaning all specified users must approve, or 'ANY', meaning any one of the specified users can approve.|
|approverUserIds|[string]|true|none|An array of user IDs representing the users who are authorized to approve the stage transition. Each ID is a string.|
|conditionalApprovalFilterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|Defines conditional logic for the approval process using a filter branch. It can be one of several types, such as PublicOrFilterBranch or PublicAndFilterBranch, to specify complex approval conditions.|
|pipelineStageId|string|true|none|The unique identifier for the pipeline stage that the approval rule applies to. It is a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvalMode|ALL|
|approvalMode|ANY|

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
|associationTypeId|integer(int32)|true|none|An integer representing the ID of the association type.|
|filterBranchOperator|string|true|none|A string representing the operator used to combine the filter branches.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'ASSOCIATION' by default.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types of branches such as OR, AND, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, and ASSOCIATION.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include different types of filters such as property filters, association filters, and various analytics filters.|
|objectTypeId|string|true|none|A string representing the ID of the object type involved in the association.|
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
|associationCategory|string|true|none|A string that specifies the category of the association.|
|associationTypeId|integer(int32)|true|none|An integer that identifies the type of association.|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An object that defines the criteria for refining the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'ASSOCIATION'.|
|listId|string|true|none|A string that identifies the list to which the filter is applied.|
|operator|string|true|none|A string that represents the operator used in the filter.|
|toObjectType|string|false|none|A string that specifies the type of the object to which the association is made.|
|toObjectTypeId|string|false|none|A string that specifies the type ID of the object to which the association is made.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string representing the type of operation. The default value is 'BOOLEAN'.|
|operator|string|true|none|A string indicating the operator used in the boolean operation.|
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
|fiscalYearStart|string|false|none|A string indicating the start month of the fiscal year. Valid values include 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', and 'DECEMBER'.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation, which is always 'CALENDAR_DATE'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|timeUnit|string|true|none|A string specifying the unit of time for the operation.|
|timeUnitCount|integer(int32)|false|none|An integer specifying the count of the time units for the operation.|
|useFiscalYear|boolean|false|none|A boolean indicating whether the fiscal year should be used.|

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
|acceptedOptStates|[string]|true|none|An array of strings representing the accepted opt-in states for the subscription.|
|businessUnitId|string|false|none|A string representing the ID of the business unit associated with the subscription.|
|channel|string|true|none|A string indicating the communication channel associated with the subscription.|
|filterType|string|true|none|A string that indicates the type of filter. The default value is 'COMMUNICATION_SUBSCRIPTION'.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to be filtered.|
|subscriptionType|string|true|none|A string indicating the type of subscription.|

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
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be used for comparison.|
|defaultComparisonValue|string|false|none|A string representing the default value to be used for comparison if no other value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'COMPARATIVE_DATE'.|
|operator|string|true|none|A string representing the operator used for comparison.|

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
|comparisonPropertyName|string|true|none|A string representing the name of the property to compare against.|
|defaultComparisonValue|string|false|none|An optional value used as a default for comparison if the comparison property is not set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a value set for the property should be included in the operation.|
|operationType|string|true|none|A string that specifies the type of operation. The default value is 'COMPARATIVE_PROPERTY_UPDATED'.|
|operator|string|true|none|A string that defines the operator used in the comparison.|

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
|defaultComparisonValue|string|false|none|The default value to be used for comparison if the property value is not set, represented as a string.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation, which is 'COMPARATIVE_STRING' by default.|
|operator|string|true|none|The operator used for the comparison operation. It is a string value.|

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
|filterType|string|true|none|A string indicating the type of filter. It defaults to 'CONSTANT' and must be one of the predefined filter types.|
|shouldAccept|boolean|true|none|A boolean indicating whether the filter should accept the criteria it evaluates.|
|source|string|false|none|A string representing the origin or context from which the filter is applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CONSTANT|

<h2 id="tocS_PublicCreateApprovalRequest">PublicCreateApprovalRequest</h2>
<!-- backwards compatibility -->
<a id="schemapubliccreateapprovalrequest"></a>
<a id="schema_PublicCreateApprovalRequest"></a>
<a id="tocSpubliccreateapprovalrequest"></a>
<a id="tocspubliccreateapprovalrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|integer(int64)|true|none|The unique identifier of the object for which the approval request is being created. It is an integer formatted as int64.|

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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, including occurrences and timestamp comparisons.|
|ctaName|string|true|none|A string representing the name of the Call-To-Action being filtered.|
|filterType|string|true|none|A string that specifies the type of filter, defaulting to 'CTA'.|
|operator|string|true|none|A string that defines the operation to be applied in the filter.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to narrow down data, similar to coalescingRefineBy, with options like occurrences and timestamp comparisons.|

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
|timeType|string|true|none|A string indicating the type of time representation.|
|timezoneSource|string|false|none|A string specifying the source of the timezone information.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|
|zoneId|string|true|none|A string representing the identifier for the timezone.|

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
|day|integer(int32)|true|none|An integer representing the day involved in the date operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a set value should be included in the operation.|
|month|string|true|none|A string representing the month involved in the date operation.|
|operationType|string|true|none|A string indicating the type of operation, which is always 'DATE'.|
|operator|string|true|none|A string representing the operator used in the date operation.|
|year|integer(int32)|true|none|An integer representing the year involved in the date operation.|

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
|operationType|string|true|none|A string indicating the type of operation, which is always 'DATETIME' for this component.|
|operator|string|true|none|A string representing the operator used in the datetime operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean specifying whether the datetime operation requires conversion based on time zones.|
|timestamp|integer(int64)|true|none|An integer representing the timestamp involved in the operation, formatted as an int64.|

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
|appId|string|true|none|A string that identifies the application associated with the email event.|
|clickUrl|string|false|none|A string representing the URL that was clicked in the email event.|
|emailId|string|true|none|A string that uniquely identifies the email associated with the event.|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'EMAIL_EVENT'.|
|level|string|true|none|A string representing the level of the email event.|
|operator|string|true|none|A string that defines the operation or event type for filtering. Valid values include 'LINK_CLICKED', 'MARKED_SPAM', 'OPENED', 'OPENED_BUT_LINK_NOT_CLICKED', 'OPENED_BUT_NOT_REPLIED', 'REPLIED', 'UNSUBSCRIBED', 'BOUNCED', 'RECEIVED', 'RECEIVED_BUT_NOT_OPENED', 'SENT', 'SENT_BUT_LINK_NOT_CLICKED', and 'SENT_BUT_NOT_RECEIVED'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object that specifies additional criteria for refining the filter, which can be one of several types such as 'PublicNumOccurrencesRefineBy', 'PublicSetOccurrencesRefineBy', 'PublicRelativeComparativeTimestampRefineBy', 'PublicRelativeRangedTimestampRefineBy', 'PublicAbsoluteComparativeTimestampRefineBy', 'PublicAbsoluteRangedTimestampRefineBy', 'PublicAllHistoryRefineBy', 'PublicTimePointOperation', or 'PublicRangedTimeOperation'.|

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
|acceptedStatuses|[string]|true|none|An array of strings indicating the statuses that are accepted for the filter.|
|filterType|string|true|none|A string indicating the type of filter, which is 'EMAIL_SUBSCRIPTION' for this component.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to be filtered.|
|subscriptionType|string|false|none|A string representing the type of subscription.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string representing the type of operation, defaulting to 'ENUMERATION'.|
|operator|string|true|none|A string indicating the operator used in the operation.|
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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as occurrences or timestamp comparisons, to further refine the filter results.|
|eventId|string|true|none|A string that uniquely identifies the event to be filtered.|
|filterType|string|true|none|A string indicating the type of filter, which is always 'EVENT' for this component.|
|operator|string|true|none|A string representing the operation or condition applied in the filter.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion similar to coalescingRefineBy, used to prune the filter results based on specific conditions.|

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
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|An object that defines the operation to be performed on the specified property. This operation can be one of several types, such as boolean, number, string, or date operations, among others.|
|property|string|true|none|A string representing the specific property of the event that the filter is targeting.|

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
|day|integer(int32)|true|none|An integer representing the day of the month within the fiscal quarter.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal quarter.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'FISCAL_QUARTER' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

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
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month component of the date.|
|referenceType|string|true|none|A string that specifies the type of reference, defaulting to 'FISCAL_YEAR'.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|

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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object used to refine the filter by coalescing criteria. It can be one of several types, such as occurrences or timestamp-based refinements.|
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'FORM_SUBMISSION'.|
|formId|string|false|none|A string representing the unique identifier of the form.|
|operator|string|true|none|A string that specifies the operation to apply, with valid values being 'FILLED_OUT' or 'NOT_FILLED_OUT'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object used to refine the filter by pruning criteria. It can be one of several types, such as occurrences or timestamp-based refinements.|

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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|Criteria used to refine the filter by coalescing, which can include various timestamp operations.|
|filterType|string|true|none|The type of filter being applied. Defaults to 'FORM_SUBMISSION_ON_PAGE'.|
|formId|string|false|none|The unique identifier of the form being filtered.|
|operator|string|true|none|The operation to apply, which can be either 'FILLED_OUT' or 'NOT_FILLED_OUT'.|
|pageId|string|true|none|The unique identifier of the page where the form submission is being filtered.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|Criteria used to refine the filter by pruning, which can include various timestamp operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|FORM_SUBMISSION_ON_PAGE|
|operator|FILLED_OUT|
|operator|NOT_FILLED_OUT|

<h2 id="tocS_PublicGovernanceValidationRules">PublicGovernanceValidationRules</h2>
<!-- backwards compatibility -->
<a id="schemapublicgovernancevalidationrules"></a>
<a id="schema_PublicGovernanceValidationRules"></a>
<a id="tocSpublicgovernancevalidationrules"></a>
<a id="tocspublicgovernancevalidationrules"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noBackwardsMovementRule|[PublicSequenceValidationRule](#schemapublicsequencevalidationrule)|true|none|none|
|noSkippingStagesRule|[PublicSequenceValidationRule](#schemapublicsequencevalidationrule)|true|none|none|
|objectCreationRule|[PublicObjectCreationRule](#schemapublicobjectcreationrule)|true|none|none|

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
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'IN_LIST'.|
|listId|string|true|none|A string representing the unique identifier of the list to be used in the filter.|
|metadata|[PublicInListFilterMetadata](#schemapublicinlistfiltermetadata)|false|none|none|
|operator|string|true|none|A string that defines the operator used in the filter.|

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
|id|string|true|none|The unique identifier for the list. It is a string that specifies which list the filter is associated with.|
|inListType|string|true|none|A string representing the type of list used in the filter. This property defines the context or category of the list being referenced.|

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
|days|integer(int32)|false|none|An integer representing the number of days for the offset.|
|hours|integer(int32)|false|none|An integer representing the number of hours for the offset.|
|milliseconds|integer(int32)|false|none|An integer representing the number of milliseconds for the offset.|
|minutes|integer(int32)|false|none|An integer representing the number of minutes for the offset.|
|months|integer(int32)|false|none|An integer representing the number of months for the offset.|
|quarters|integer(int32)|false|none|An integer representing the number of quarters for the offset.|
|seconds|integer(int32)|false|none|An integer representing the number of seconds for the offset.|
|weeks|integer(int32)|false|none|An integer representing the number of weeks for the offset.|
|years|integer(int32)|false|none|An integer representing the number of years for the offset.|

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
|indexReference|[PublicNowReference](#schemapublicnowreference) \| [PublicTodayReference](#schemapublictodayreference) \| [PublicWeekReference](#schemapublicweekreference) \| [PublicFiscalQuarterReference](#schemapublicfiscalquarterreference) \| [PublicFiscalYearReference](#schemapublicfiscalyearreference) \| [PublicYearReference](#schemapublicyearreference) \| [PublicQuarterReference](#schemapublicquarterreference) \| [PublicMonthReference](#schemapublicmonthreference)|true|none|A reference point for indexing the time, which can be one of several predefined time references such as 'NOW', 'TODAY', 'WEEK', etc.|
|offset|[PublicIndexOffset](#schemapublicindexoffset)|false|none|none|
|timeType|string|true|none|A string representing the type of time point, which is always 'INDEXED'.|
|timezoneSource|string|false|none|A string indicating the source of the timezone information.|
|zoneId|string|true|none|A string representing the identifier for the timezone.|

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
|eventTypeId|integer(int32)|true|none|A string that uniquely identifies the type of event to be filtered. This property is used to specify which event type the filter applies to.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of filter lines that contain the metadata for the event filter. Each item in the array is a detailed specification of the criteria used to filter events.|
|filterType|string|true|none|A string representing the type of filter. It is a required field and typically has a default value specific to the filter type.|

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
|referenceType|string|true|none|A string indicating the type of reference, which is 'MONTH' by default.|
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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation, which is 'MULTISTRING' by default.|
|operator|string|true|none|A string representing the operator used for the operation.|
|values|[string]|true|none|An array of strings representing the values to be used in the operation.|

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
|filterBranchOperator|string|true|none|A string representing the operator used to combine the filter branches.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'NOT_ALL' for this component.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types of filter branches such as 'OR', 'AND', 'NOT_ALL', etc.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include various types of filters such as property filters, association filters, and more.|

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
|filterBranchOperator|string|true|none|A string representing the logical operator used within the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'NOT_ANY' for this component.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, each of which can be of various types including 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', and 'ASSOCIATION'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include different types such as property filters, association filters, and various analytics filters.|

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
|hour|integer(int32)|false|none|An integer representing the hour of the current time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond of the current time.|
|minute|integer(int32)|false|none|An integer representing the minute of the current time.|
|referenceType|string|true|none|A string that indicates the type of reference, which is always 'NOW' for this component.|
|second|integer(int32)|false|none|An integer representing the second of the current time.|

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
|maxOccurrences|integer(int32)|false|none|An integer specifying the maximum number of occurrences allowed.|
|minOccurrences|integer(int32)|false|none|An integer specifying the minimum number of occurrences required.|
|type|string|true|none|A string indicating the type of refinement, which is 'NUM_OCCURRENCES'.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'NUMBER'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|value|number|true|none|A number representing the value used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NUMBER|

<h2 id="tocS_PublicObjectApprovalStatus">PublicObjectApprovalStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectapprovalstatus"></a>
<a id="schema_PublicObjectApprovalStatus"></a>
<a id="tocSpublicobjectapprovalstatus"></a>
<a id="tocspublicobjectapprovalstatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalId|string|false|none|The unique identifier for the approval process instance associated with this object.|
|approvalStatus|string|true|none|The current approval status of the object. This indicates whether the object is approved, pending approval, or rejected.|
|createdAt|string(date-time)|true|none|The date and time when this approval status record was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this approval status object.|
|objectId|string|true|none|The unique identifier of the object whose approval status is being tracked.|
|objectTypeId|string|true|none|The type identifier of the object, indicating what kind of object is being approved.|
|pipelineId|string|true|none|The unique identifier of the pipeline in which the object is located.|
|pipelineStageId|string|true|none|The unique identifier of the pipeline stage where the object currently resides.|
|updatedAt|string(date-time)|true|none|The date and time when this approval status record was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvalStatus|APPROVED|
|approvalStatus|NO_APPROVAL_NEEDED|
|approvalStatus|NOT_APPLICABLE|
|approvalStatus|PENDING|
|approvalStatus|REJECTED|

<h2 id="tocS_PublicObjectCreationRule">PublicObjectCreationRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectcreationrule"></a>
<a id="schema_PublicObjectCreationRule"></a>
<a id="tocSpublicobjectcreationrule"></a>
<a id="tocspublicobjectcreationrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineStageIds|[string]|true|none|An array of strings representing the IDs of pipeline stages where objects can be created.|

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
|filterBranchOperator|string|true|none|A string representing the operator used in the filter branch.|
|filterBranchType|string|true|none|A string that specifies the type of filter branch, which is 'OR' by default.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types of filter branches such as 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', or 'ASSOCIATION'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include different types of filters such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', and others.|

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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several predefined schemas, used to further refine the filter results.|
|enableTracking|boolean|false|none|A boolean indicating whether tracking is enabled for this filter.|
|filterType|string|true|none|A string representing the type of filter. Default value is 'PAGE_VIEW'.|
|operator|string|true|none|A string representing the operator used in the filter.|
|pageUrl|string|true|none|A string representing the URL of the page to be filtered.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several predefined schemas, used to prune the filter results.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PAGE_VIEW|

<h2 id="tocS_PublicPipelineRules">PublicPipelineRules</h2>
<!-- backwards compatibility -->
<a id="schemapublicpipelinerules"></a>
<a id="schema_PublicPipelineRules"></a>
<a id="tocSpublicpipelinerules"></a>
<a id="tocspublicpipelinerules"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalStage|[PublicApprovalStageRule](#schemapublicapprovalstagerule)|false|none|none|
|createdAt|string(date-time)|true|none|The date and time when the pipeline rule was created.|
|governanceValidationRules|[PublicGovernanceValidationRules](#schemapublicgovernancevalidationrules)|true|none|none|
|id|string|true|none|The unique identifier for the pipeline rule.|
|objectTypeId|string|true|none|The identifier for the type of object the pipeline rule is associated with.|
|pipelineId|string|true|none|The unique identifier for the pipeline to which the rule applies.|
|updatedAt|string(date-time)|true|none|The date and time when the pipeline rule was last updated.|

<h2 id="tocS_PublicPipelineRulesPatchRequest">PublicPipelineRulesPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicpipelinerulespatchrequest"></a>
<a id="schema_PublicPipelineRulesPatchRequest"></a>
<a id="tocSpublicpipelinerulespatchrequest"></a>
<a id="tocspublicpipelinerulespatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalStage|object|false|none|A rule that defines the approval process for a specific pipeline stage. It is defined using the PublicApprovalStageRuleRequest schema.|
|noBackwardsMovementRule|object|false|none|A rule that prevents moving backwards in the pipeline stages. It is defined using the PublicSequenceValidationRule schema.|
|noSkippingStagesRule|object|false|none|A rule that prevents skipping stages in the pipeline. It is defined using the PublicSequenceValidationRule schema.|
|objectCreationRule|object|false|none|A rule that specifies conditions for object creation within the pipeline. It is defined using the PublicObjectCreationRule schema.|

<h2 id="tocS_PublicPipelineRulesUpdateRequest">PublicPipelineRulesUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicpipelinerulesupdaterequest"></a>
<a id="schema_PublicPipelineRulesUpdateRequest"></a>
<a id="tocSpublicpipelinerulesupdaterequest"></a>
<a id="tocspublicpipelinerulesupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalStage|[PublicApprovalStageRuleRequest](#schemapublicapprovalstagerulerequest)|false|none|none|
|governanceValidationRules|[PublicGovernanceValidationRules](#schemapublicgovernancevalidationrules)|true|none|none|

<h2 id="tocS_PublicPipelineStagePermissions">PublicPipelineStagePermissions</h2>
<!-- backwards compatibility -->
<a id="schemapublicpipelinestagepermissions"></a>
<a id="schema_PublicPipelineStagePermissions"></a>
<a id="tocSpublicpipelinestagepermissions"></a>
<a id="tocspublicpipelinestagepermissions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when these permissions were created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this set of pipeline stage permissions.|
|objectTypeId|string|true|none|The identifier for the type of object associated with these permissions.|
|pipelineId|string|true|none|The unique identifier for the pipeline to which these stage permissions apply.|
|stages|[[PublicStagePermission](#schemapublicstagepermission)]|true|none|An array of stage permissions, each defining access rules for a specific stage within the pipeline.|
|updatedAt|string(date-time)|true|none|The date and time when these permissions were last updated, in ISO 8601 format.|

<h2 id="tocS_PublicPipelineStagePermissionsUpdateRequest">PublicPipelineStagePermissionsUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicpipelinestagepermissionsupdaterequest"></a>
<a id="schema_PublicPipelineStagePermissionsUpdateRequest"></a>
<a id="tocSpublicpipelinestagepermissionsupdaterequest"></a>
<a id="tocspublicpipelinestagepermissionsupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stages|[[PublicStagePermissionRequest](#schemapublicstagepermissionrequest)]|true|none|An array of stage permission requests, each defined by the PublicStagePermissionRequest schema. This property specifies the permissions to be updated for each stage in the pipeline.|

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
|filterType|string|true|none|A string indicating the type of filter, which is 'PRIVACY' for this component.|
|operator|string|true|none|A string specifying the operator to be used in conjunction with the privacyName for filtering.|
|privacyName|string|true|none|A string representing the name of the privacy setting to be used in the filter.|

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
|filterType|string|true|none|A string indicating the type of filter. The default value is 'PROPERTY'.|
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|Defines the operation to be performed on the property. This can be one of several operation types, such as boolean, number, string, date, and more, each with its own specific behavior.|
|property|string|true|none|A string representing the name of the property to be filtered.|

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
|property|string|true|none|A string that denotes the property used as the reference for the time operation.|
|referenceType|string|true|none|A string indicating the type of reference used for the property.|
|timeType|string|true|none|A string indicating the type of time reference, which is 'PROPERTY_REFERENCED' by default.|
|timezoneSource|string|false|none|A string representing the source of the timezone information.|
|zoneId|string|true|none|A string specifying the identifier for the timezone.|

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
|referenceType|string|true|none|A string indicating the type of reference, which is 'QUARTER' for this component.|
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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included.|
|lowerBound|integer(int64)|true|none|An integer representing the lower bound of the date range, in int64 format.|
|operationType|string|true|none|A string that specifies the type of operation, with a default value of 'RANGED_DATE'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|
|upperBound|integer(int64)|true|none|An integer representing the upper bound of the date range, in int64 format.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set.|
|lowerBound|integer(int64)|true|none|An integer representing the lower bound of the range.|
|operationType|string|true|none|A string that specifies the type of operation. The default value is 'RANGED_NUMBER'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|upperBound|integer(int64)|true|none|An integer representing the upper bound of the range.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set.|
|lowerBoundEndpointBehavior|string|false|none|A string that specifies the behavior of the lower bound endpoint in the time range.|
|lowerBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object that defines the lower bound time point of the range. It can be a date point, indexed time point, or property-referenced time.|
|operationType|string|true|none|A string that specifies the type of operation being performed.|
|operator|string|true|none|A string that defines the operator used in the time operation.|
|propertyParser|string|false|none|A string that indicates the property parser used in the operation.|
|type|string|true|none|A string that specifies the type of operation, with a default value of 'TIME_RANGED'.|
|upperBoundEndpointBehavior|string|false|none|A string that specifies the behavior of the upper bound endpoint in the time range.|
|upperBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object that defines the upper bound time point of the range. It can be a date point, indexed time point, or property-referenced time.|

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
|comparison|string|true|none|A string representing the comparison operation to be performed.|
|timeOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|
|type|string|true|none|A string indicating the type of refinement, which is 'RELATIVE_COMPARATIVE'.|

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
|rangeType|string|true|none|A string indicating the type of range being used for the timestamp refinement.|
|type|string|true|none|A string that specifies the type of the refine by operation, which is 'RELATIVE_RANGED'.|
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
|filterBranchOperator|string|true|none|A string representing the operator used within the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of the filter branch. Defaults to 'RESTRICTED'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches. Each item can be one of several types, including 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', 'PublicNotAnyFilterBranch', 'PublicRestrictedFilterBranch', 'PublicUnifiedEventsFilterBranch', or 'PublicAssociationFilterBranch'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within this branch. Each filter can be one of several types, such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', 'PublicCtaAnalyticsFilter', 'PublicEventAnalyticsFilter', 'PublicFormSubmissionFilter', 'PublicFormSubmissionOnPageFilter', 'PublicIntegrationEventFilter', 'PublicEmailSubscriptionFilter', 'PublicCommunicationSubscriptionFilter', 'PublicSurveyMonkeyFilter', 'PublicSurveyMonkeyValueFilter', 'PublicWebinarFilter', 'PublicEmailEventFilter', 'PublicPrivacyAnalyticsFilter', 'PublicAdsSearchFilter', 'PublicAdsTimeFilter', 'PublicInListFilter', 'PublicUnifiedEventsFilter', or 'PublicConstantFilter'.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property being operated on.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days that define the rolling date range.|
|operationType|string|true|none|A string indicating the type of operation, which is 'ROLLING_DATE_RANGE' by default.|
|operator|string|true|none|A string representing the operator used in the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires conversion based on time zone.|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days over which the rolling update operation is applied.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'ROLLING_PROPERTY_UPDATED'.|
|operator|string|true|none|A string representing the operator used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ROLLING_PROPERTY_UPDATED|

<h2 id="tocS_PublicSequenceValidationRule">PublicSequenceValidationRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencevalidationrule"></a>
<a id="schema_PublicSequenceValidationRule"></a>
<a id="tocSpublicsequencevalidationrule"></a>
<a id="tocspublicsequencevalidationrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledForAllStages|boolean|true|none|A boolean indicating whether the validation rule is enabled for all stages in the pipeline.|
|pipelineStageIds|[string]|true|none|An array of strings representing the specific pipeline stage IDs for which the validation rule is applicable.|

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
|setType|string|true|none|A string that specifies the set type for the occurrences refinement.|
|type|string|true|none|A string representing the type of refinement. The default value is 'SET_OCCURRENCES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SET_OCCURRENCES|

<h2 id="tocS_PublicStagePermission">PublicStagePermission</h2>
<!-- backwards compatibility -->
<a id="schemapublicstagepermission"></a>
<a id="schema_PublicStagePermission"></a>
<a id="tocSpublicstagepermission"></a>
<a id="tocspublicstagepermission"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|A descriptive label for the stage, used for display purposes. It is a string that helps identify the stage's purpose or function.|
|permissionMode|string|true|none|Defines the mode of permission for the stage. It is a string that can be either 'OPEN' or 'RESTRICTED', indicating whether the stage is accessible to all users or restricted to certain users or teams.|
|pipelineStageId|string|true|none|The unique identifier for the pipeline stage. It is a string that distinguishes this stage from others within the pipeline.|
|superAdmin|boolean|true|none|A boolean value indicating whether super administrators have access to this stage. If true, super admins can access the stage regardless of other permissions.|
|teamIds|[string]|true|none|An array of strings representing the IDs of teams that have access to this stage. This property is used to specify which teams are allowed to interact with the stage.|
|userIds|[string]|true|none|An array of strings representing the IDs of individual users who have access to this stage. This property allows for specifying user-level access control.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionMode|OPEN|
|permissionMode|RESTRICTED|

<h2 id="tocS_PublicStagePermissionRequest">PublicStagePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicstagepermissionrequest"></a>
<a id="schema_PublicStagePermissionRequest"></a>
<a id="tocSpublicstagepermissionrequest"></a>
<a id="tocspublicstagepermissionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionMode|string|true|none|The mode of permission for the stage. It is a string that can be either 'OPEN' or 'RESTRICTED', indicating the level of access allowed.|
|pipelineStageId|string|true|none|The unique identifier for the pipeline stage. It is a string that specifies which stage the permissions apply to.|
|superAdmin|boolean|true|none|A boolean indicating whether super admin users have permission to edit the stage.|
|teamIds|[string]|true|none|An array of strings representing the IDs of teams that have permission to edit the stage.|
|userIds|[string]|true|none|An array of strings representing the IDs of individual users who have permission to edit the stage.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionMode|OPEN|
|permissionMode|RESTRICTED|

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
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects without a value set for the property should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation, which is always 'STRING' for this component.|
|operator|string|true|none|A string representing the operator to be used in the operation. The specific operators are not detailed in the spec.|
|value|string|true|none|A string representing the value to be used in the operation.|

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
|filterType|string|true|none|A string that specifies the type of filter being used. The default value is 'SURVEY_MONKEY', indicating that this filter is for SurveyMonkey data.|
|operator|string|true|none|A string that defines the operation or condition to apply when filtering the survey data.|
|surveyId|string|true|none|A string representing the unique identifier of the SurveyMonkey survey to be filtered.|

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
|filterType|string|true|none|A string indicating the type of filter. Defaults to 'SURVEY_MONKEY_VALUE'.|
|operator|string|true|none|A string that specifies the operator used in the filter, determining how the survey data is evaluated against the filter criteria.|
|surveyAnswerColId|string|false|none|A string representing the column identifier of the survey answer, used for filtering specific responses.|
|surveyAnswerRowId|string|false|none|A string representing the row identifier of the survey answer, used for filtering specific responses.|
|surveyId|string|true|none|A string representing the unique identifier of the SurveyMonkey survey.|
|surveyQuestion|string|true|none|A string specifying the question within the survey to filter responses by.|
|valueComparison|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|An object that defines the operation for comparing survey answer values. It can be one of several types, such as number, string, or date operations.|

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
|amount|integer(int64)|true|none|An integer specifying the amount of time units for the offset.|
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
|endpointBehavior|string|false|none|A string describing the behavior of the endpoint in the context of the time point operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects with no value set in the operation.|
|operationType|string|true|none|A string indicating the type of operation, defaulting to 'TIME_POINT'.|
|operator|string|true|none|A string representing the operator used in the time point operation.|
|propertyParser|string|false|none|A string specifying the parser used for the property in the operation.|
|timePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|Defines the specific time point for the operation. It can be one of several types, including PublicDatePoint, PublicIndexedTimePoint, or PublicPropertyReferencedTime.|
|type|string|true|none|A string representing the type of the time point operation.|

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
|referenceType|string|true|none|A string indicating the type of reference, which is 'TODAY' by default.|
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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object that specifies refinement criteria for coalescing events. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|
|eventTypeId|string|false|none|A string representing the unique identifier for the event type.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of objects, each conforming to the PublicEventFilterMetadata schema, representing the individual filter lines that make up the unified events filter.|
|filterType|string|true|none|A string indicating the type of filter. The default value is 'UNIFIED_EVENTS'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object that specifies refinement criteria for pruning events. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.|

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
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that allows for additional filtering based on coalescing logic. This can be one of several predefined refinement schemas.|
|eventTypeId|string|true|none|A string representing the unique identifier for the event type that this filter branch is targeting.|
|filterBranchOperator|string|true|none|A string that specifies the operator used to combine multiple filter branches within this component.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'UNIFIED_EVENTS' for this component.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, each of which can be a complex filter structure involving various logical operators.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that apply specific conditions to the unified events. Each filter can be one of several types, such as property filters or event analytics filters.|
|operator|string|true|none|A string that specifies the logical operator for the filter branch, with valid values including 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that allows for additional filtering based on pruning logic. This can be one of several predefined refinement schemas.|

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
|filterType|string|true|none|A string that specifies the type of filter. The default value is 'WEBINAR'.|
|operator|string|true|none|A string representing the operator used in the filter.|
|webinarId|string|false|none|A string that uniquely identifies the webinar to be filtered.|

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
|dayOfWeek|string|true|none|A string representing the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'.|
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
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the year.|
|referenceType|string|true|none|A string that indicates the type of reference, which is 'YEAR' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|YEAR|
