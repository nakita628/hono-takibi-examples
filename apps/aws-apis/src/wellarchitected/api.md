<h1 id="aws-well-architected-tool">AWS Well-Architected Tool v2020-03-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Well-Architected Tool</fullname> <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information about the Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

Base URLs:

* <a href="http://wellarchitected.us-east-1.amazonaws.com">http://wellarchitected.us-east-1.amazonaws.com</a> - The Well-Architected multi-region endpoint

* <a href="https://wellarchitected.us-east-1.amazonaws.com">https://wellarchitected.us-east-1.amazonaws.com</a> - The Well-Architected multi-region endpoint

* <a href="http://wellarchitected.cn-north-1.amazonaws.com.cn">http://wellarchitected.cn-north-1.amazonaws.com.cn</a> - The Well-Architected endpoint for China (Beijing) and China (Ningxia)

* <a href="https://wellarchitected.cn-north-1.amazonaws.com.cn">https://wellarchitected.cn-north-1.amazonaws.com.cn</a> - The Well-Architected endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/wellarchitected/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-well-architected-tool-default">Default</h1>

## AssociateLenses

<a id="opIdAssociateLenses"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/associateLenses \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LensAliases": [
      "string"
    ]
  }'
```

`PATCH /workloads/{WorkloadId}/associateLenses`

<p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>

> Body parameter

```json
{
  "LensAliases": [
    "string"
  ]
}
```

<h3 id="associatelenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LensAliases|body|[[LensAlias](#schemalensalias)]|true|<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>|

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

<h3 id="associatelenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLensShares

<a id="opIdListLensShares"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string/shares \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lenses/{LensAlias}/shares`

List the lens shares associated with the lens.

<h3 id="listlensshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|SharedWithPrefix|query|string|false|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the lens is shared.|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
|Status|query|string|false|none|
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
|Status|ACCEPTED|
|Status|REJECTED|
|Status|PENDING|
|Status|REVOKED|
|Status|EXPIRED|
|Status|ASSOCIATING|
|Status|ASSOCIATED|
|Status|FAILED|

> Example responses

> 200 Response

```json
{
  "LensShareSummaries": {},
  "NextToken": "string"
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

<h3 id="listlensshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLensSharesOutput](#schemalistlenssharesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLensShare

<a id="opIdCreateLensShare"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SharedWith": "stringstring",
    "ClientRequestToken": "string"
  }'
```

`POST /lenses/{LensAlias}/shares`

<p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

> Body parameter

```json
{
  "SharedWith": "stringstring",
  "ClientRequestToken": "string"
}
```

<h3 id="createlensshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SharedWith|body|string|true|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

> Example responses

> 200 Response

```json
{
  "ShareId": "string"
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

<h3 id="createlensshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLensShareOutput](#schemacreatelensshareoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLensVersion

<a id="opIdCreateLensVersion"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LensVersion": "string",
    "IsMajorVersion": true,
    "ClientRequestToken": "string"
  }'
```

`POST /lenses/{LensAlias}/versions`

<p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>

> Body parameter

```json
{
  "LensVersion": "string",
  "IsMajorVersion": true,
  "ClientRequestToken": "string"
}
```

<h3 id="createlensversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LensVersion|body|string|true|The version of the lens being created.|
|» IsMajorVersion|body|boolean|false|Set to true if this new major lens version.|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

> Example responses

> 200 Response

```json
{
  "LensArn": {},
  "LensVersion": {}
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

<h3 id="createlensversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLensVersionOutput](#schemacreatelensversionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMilestone

<a id="opIdCreateMilestone"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/milestones \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MilestoneName": "string",
    "ClientRequestToken": "string"
  }'
```

`POST /workloads/{WorkloadId}/milestones`

Create a milestone for an existing workload.

> Body parameter

```json
{
  "MilestoneName": "string",
  "ClientRequestToken": "string"
}
```

<h3 id="createmilestone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MilestoneName|body|string|true|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1
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

<h3 id="createmilestone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMilestoneOutput](#schemacreatemilestoneoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkload

<a id="opIdCreateWorkload"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "PillarPriorities": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "IndustryType": "string",
    "Industry": "string",
    "Lenses": [
      "string"
    ],
    "Notes": "string",
    "ClientRequestToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": [
      "string"
    ]
  }'
```

`POST /workloads`

<p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>

> Body parameter

```json
{
  "WorkloadName": "string",
  "Description": "string",
  "Environment": "PRODUCTION",
  "AccountIds": [
    "string"
  ],
  "AwsRegions": [
    "string"
  ],
  "NonAwsRegions": [
    "string"
  ],
  "PillarPriorities": [
    "string"
  ],
  "ArchitecturalDesign": "string",
  "ReviewOwner": "string",
  "IndustryType": "string",
  "Industry": "string",
  "Lenses": [
    "string"
  ],
  "Notes": "string",
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "DiscoveryConfig": {
    "TrustedAdvisorIntegrationStatus": {}
  },
  "Applications": [
    "string"
  ]
}
```

<h3 id="createworkload-parameters">Parameters</h3>

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
|» WorkloadName|body|string|true|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|» Description|body|string|true|The description for the workload.|
|» Environment|body|string|true|The environment for the workload.|
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The list of Amazon Web Services account IDs associated with the workload.|
|» AwsRegions|body|[[AwsRegion](#schemaawsregion)]|false|The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.|
|» NonAwsRegions|body|[[WorkloadNonAwsRegion](#schemaworkloadnonawsregion)]|false| The list of non-Amazon Web Services Regions associated with the workload.|
|» PillarPriorities|body|[[PillarId](#schemapillarid)]|false|The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.|
|» ArchitecturalDesign|body|string|false|The URL of the architectural design for the workload.|
|» ReviewOwner|body|string|false|The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.|
|» IndustryType|body|string|false|<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>|
|» Industry|body|string|false|The industry for the workload.|
|» Lenses|body|[[LensAlias](#schemalensalias)]|true|The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.|
|» Notes|body|string|false|The notes associated with the workload.|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|
|» Tags|body|object|false|The tags to be associated with the workload.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» DiscoveryConfig|body|object|false|Discovery configuration associated to the workload.|
|» » TrustedAdvisorIntegrationStatus|body|object|false|none|
|» Applications|body|[[ApplicationArn](#schemaapplicationarn)]|false|List of AppRegistry application ARNs associated to the workload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Environment|PRODUCTION|
|» Environment|PREPRODUCTION|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "WorkloadArn": "string"
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

<h3 id="createworkload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkloadOutput](#schemacreateworkloadoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkloadShares

<a id="opIdListWorkloadShares"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/shares \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/shares`

List the workload shares associated with the workload.

<h3 id="listworkloadshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|SharedWithPrefix|query|string|false|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
|Status|query|string|false|none|
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
|Status|ACCEPTED|
|Status|REJECTED|
|Status|PENDING|
|Status|REVOKED|
|Status|EXPIRED|
|Status|ASSOCIATING|
|Status|ASSOCIATED|
|Status|FAILED|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "WorkloadShareSummaries": [
    {
      "ShareId": "string",
      "SharedWith": "stringstring",
      "PermissionType": "READONLY",
      "Status": "ACCEPTED",
      "StatusMessage": {}
    }
  ],
  "NextToken": "string"
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

<h3 id="listworkloadshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkloadSharesOutput](#schemalistworkloadsharesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkloadShare

<a id="opIdCreateWorkloadShare"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SharedWith": "stringstring",
    "PermissionType": "READONLY",
    "ClientRequestToken": "string"
  }'
```

`POST /workloads/{WorkloadId}/shares`

<p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>

> Body parameter

```json
{
  "SharedWith": "stringstring",
  "PermissionType": "READONLY",
  "ClientRequestToken": "string"
}
```

<h3 id="createworkloadshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SharedWith|body|string|true|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|» PermissionType|body|string|true|Permission granted on a workload share.|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PermissionType|READONLY|
|» PermissionType|CONTRIBUTOR|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "ShareId": "string"
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

<h3 id="createworkloadshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkloadShareOutput](#schemacreateworkloadshareoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLens

<a id="opIdDeleteLens"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/lenses/string#ClientRequestToken&LensStatus?ClientRequestToken=string&LensStatus=ALL' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /lenses/{LensAlias}#ClientRequestToken&LensStatus`

<p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

<h3 id="deletelens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|ClientRequestToken|query|string|true|none|
|LensStatus|query|string|true|The status of the lens to be deleted.|
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
|LensStatus|ALL|
|LensStatus|DRAFT|
|LensStatus|PUBLISHED|

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

<h3 id="deletelens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLensShare

<a id="opIdDeleteLensShare"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/lenses/string/shares/string#ClientRequestToken?ClientRequestToken=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /lenses/{LensAlias}/shares/{ShareId}#ClientRequestToken`

<p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

<h3 id="deletelensshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ShareId|path|string|true|none|
|LensAlias|path|string|true|none|
|ClientRequestToken|query|string|true|none|
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

<h3 id="deletelensshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkload

<a id="opIdDeleteWorkload"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/workloads/string#ClientRequestToken?ClientRequestToken=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workloads/{WorkloadId}#ClientRequestToken`

Delete an existing workload.

<h3 id="deleteworkload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|ClientRequestToken|query|string|true|none|
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

<h3 id="deleteworkload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkloadShare

<a id="opIdDeleteWorkloadShare"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/workloads/string/shares/string#ClientRequestToken?ClientRequestToken=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /workloads/{WorkloadId}/shares/{ShareId}#ClientRequestToken`

Delete a workload share.

<h3 id="deleteworkloadshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ShareId|path|string|true|none|
|WorkloadId|path|string|true|none|
|ClientRequestToken|query|string|true|none|
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

<h3 id="deleteworkloadshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateLenses

<a id="opIdDisassociateLenses"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/disassociateLenses \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LensAliases": [
      "string"
    ]
  }'
```

`PATCH /workloads/{WorkloadId}/disassociateLenses`

<p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>

> Body parameter

```json
{
  "LensAliases": [
    "string"
  ]
}
```

<h3 id="disassociatelenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LensAliases|body|[[LensAlias](#schemalensalias)]|true|<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>|

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

<h3 id="disassociatelenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportLens

<a id="opIdExportLens"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string/export \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lenses/{LensAlias}/export`

<p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

<h3 id="exportlens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|LensVersion|query|string|false|The lens version to be exported.|
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
  "LensJSON": {}
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

<h3 id="exportlens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportLensOutput](#schemaexportlensoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnswer

<a id="opIdGetAnswer"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/answers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}`

Get the answer to a specific question in a workload review.

<h3 id="getanswer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|QuestionId|path|string|true|none|
|MilestoneNumber|query|integer|false|none|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "Answer": {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "QuestionDescription": "string",
    "ImprovementPlanUrl": "string",
    "HelpfulResourceUrl": "string",
    "HelpfulResourceDisplayText": {},
    "Choices": [
      {
        "ChoiceId": "string",
        "Title": "string",
        "Description": "string",
        "HelpfulResource": {
          "DisplayText": {},
          "Url": {}
        },
        "ImprovementPlan": {
          "DisplayText": {},
          "Url": {}
        },
        "AdditionalResources": {}
      }
    ],
    "SelectedChoices": [
      "string"
    ],
    "ChoiceAnswers": {},
    "IsApplicable": true,
    "Risk": "UNANSWERED",
    "Notes": "string",
    "Reason": {}
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

<h3 id="getanswer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnswerOutput](#schemagetansweroutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAnswer

<a id="opIdUpdateAnswer"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/answers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SelectedChoices": [
      "string"
    ],
    "ChoiceUpdates": {
      "property1": {
        "Status": {},
        "Reason": {},
        "Notes": {}
      },
      "property2": {
        "Status": {},
        "Reason": {},
        "Notes": {}
      }
    },
    "Notes": "string",
    "IsApplicable": true,
    "Reason": "OUT_OF_SCOPE"
  }'
```

`PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}`

Update the answer to a specific question in a workload review.

> Body parameter

```json
{
  "SelectedChoices": [
    "string"
  ],
  "ChoiceUpdates": {
    "property1": {
      "Status": {},
      "Reason": {},
      "Notes": {}
    },
    "property2": {
      "Status": {},
      "Reason": {},
      "Notes": {}
    }
  },
  "Notes": "string",
  "IsApplicable": true,
  "Reason": "OUT_OF_SCOPE"
}
```

<h3 id="updateanswer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|QuestionId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SelectedChoices|body|[[ChoiceId](#schemachoiceid)]|false|<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>|
|» ChoiceUpdates|body|object|false|A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.|
|» » **additionalProperties**|body|[ChoiceUpdate](#schemachoiceupdate)|false|A list of choices to be updated.|
|» Notes|body|string|false|The notes associated with the workload.|
|» IsApplicable|body|boolean|false|Defines whether this question is applicable to a lens review.|
|» Reason|body|string|false|The reason why a question is not applicable to your workload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Reason|OUT_OF_SCOPE|
|» Reason|BUSINESS_PRIORITIES|
|» Reason|ARCHITECTURE_CONSTRAINTS|
|» Reason|OTHER|
|» Reason|NONE|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "LensAlias": "string",
  "LensArn": {},
  "Answer": {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "QuestionDescription": "string",
    "ImprovementPlanUrl": "string",
    "HelpfulResourceUrl": "string",
    "HelpfulResourceDisplayText": {},
    "Choices": [
      {
        "ChoiceId": "string",
        "Title": "string",
        "Description": "string",
        "HelpfulResource": {
          "DisplayText": {},
          "Url": {}
        },
        "ImprovementPlan": {
          "DisplayText": {},
          "Url": {}
        },
        "AdditionalResources": {}
      }
    ],
    "SelectedChoices": [
      "string"
    ],
    "ChoiceAnswers": {},
    "IsApplicable": true,
    "Risk": "UNANSWERED",
    "Notes": "string",
    "Reason": {}
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

<h3 id="updateanswer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAnswerOutput](#schemaupdateansweroutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConsolidatedReport

<a id="opIdGetConsolidatedReport"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/consolidatedReport#Format?Format=PDF' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /consolidatedReport#Format`

<p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>

<h3 id="getconsolidatedreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Format|query|string|true|<p>The format of the consolidated report.</p> <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>, <code>Metrics</code> is returned.</p>|
|IncludeSharedResources|query|boolean|false|Set to <code>true</code> to have shared resources included in the report.|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
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
|Format|PDF|
|Format|JSON|

> Example responses

> 200 Response

```json
{
  "Metrics": {},
  "NextToken": "string",
  "Base64String": "string"
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

<h3 id="getconsolidatedreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConsolidatedReportOutput](#schemagetconsolidatedreportoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLens

<a id="opIdGetLens"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lenses/{LensAlias}`

Get an existing lens.

<h3 id="getlens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|LensVersion|query|string|false|The lens version to be retrieved.|
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
  "Lens": {
    "LensArn": {},
    "LensVersion": {},
    "Name": "string",
    "Description": "string",
    "Owner": {},
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getlens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLensOutput](#schemagetlensoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLensReview

<a id="opIdGetLensReview"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews/{LensAlias}`

Get lens review.

<h3 id="getlensreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|MilestoneNumber|query|integer|false|none|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReview": {
    "LensAlias": "string",
    "LensArn": {},
    "LensVersion": {},
    "LensName": "string",
    "LensStatus": {},
    "PillarReviewSummaries": [
      {
        "PillarId": "string",
        "PillarName": "string",
        "Notes": "string",
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Notes": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "NextToken": "string"
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

<h3 id="getlensreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLensReviewOutput](#schemagetlensreviewoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLensReview

<a id="opIdUpdateLensReview"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LensNotes": "string",
    "PillarNotes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}`

Update lens review for a particular workload.

> Body parameter

```json
{
  "LensNotes": "string",
  "PillarNotes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatelensreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LensNotes|body|string|false|The notes associated with the workload.|
|» PillarNotes|body|object|false|List of pillar notes of a lens review in a workload.|
|» » **additionalProperties**|body|[Notes](#schemanotes)|false|The notes associated with the workload.|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "LensReview": {
    "LensAlias": "string",
    "LensArn": {},
    "LensVersion": {},
    "LensName": "string",
    "LensStatus": {},
    "PillarReviewSummaries": [
      {
        "PillarId": "string",
        "PillarName": "string",
        "Notes": "string",
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Notes": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "NextToken": "string"
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

<h3 id="updatelensreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLensReviewOutput](#schemaupdatelensreviewoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLensReviewReport

<a id="opIdGetLensReviewReport"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/report \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/report`

Get lens review report.

<h3 id="getlensreviewreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|MilestoneNumber|query|integer|false|none|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReviewReport": {
    "LensAlias": "string",
    "LensArn": {},
    "Base64String": "string"
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

<h3 id="getlensreviewreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLensReviewReportOutput](#schemagetlensreviewreportoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLensVersionDifference

<a id="opIdGetLensVersionDifference"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses/string/versionDifference \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lenses/{LensAlias}/versionDifference`

Get lens version differences.

<h3 id="getlensversiondifference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LensAlias|path|string|true|none|
|BaseLensVersion|query|string|false|The base version of the lens.|
|TargetLensVersion|query|string|false|The lens version to target a difference for.|
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
  "LensAlias": "string",
  "LensArn": {},
  "BaseLensVersion": {},
  "TargetLensVersion": {},
  "LatestLensVersion": {},
  "VersionDifferences": {
    "PillarDifferences": {}
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

<h3 id="getlensversiondifference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLensVersionDifferenceOutput](#schemagetlensversiondifferenceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMilestone

<a id="opIdGetMilestone"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/milestones/1 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/milestones/{MilestoneNumber}`

Get a milestone for an existing workload.

<h3 id="getmilestone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|MilestoneNumber|path|integer|true|none|
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
  "WorkloadId": "string",
  "Milestone": {
    "MilestoneNumber": 1,
    "MilestoneName": "string",
    "RecordedAt": "1970-01-01T00:00:00Z",
    "Workload": {
      "WorkloadId": "string",
      "WorkloadArn": "string",
      "WorkloadName": "string",
      "Description": "string",
      "Environment": "PRODUCTION",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "AccountIds": [
        "string"
      ],
      "AwsRegions": [
        "string"
      ],
      "NonAwsRegions": [
        "string"
      ],
      "ArchitecturalDesign": "string",
      "ReviewOwner": "string",
      "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
      "IsReviewOwnerUpdateAcknowledged": {},
      "IndustryType": "string",
      "Industry": "string",
      "Notes": "string",
      "ImprovementStatus": "NOT_APPLICABLE",
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      },
      "PillarPriorities": [
        "string"
      ],
      "Lenses": [
        "string"
      ],
      "Owner": "string",
      "ShareInvitationId": {},
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "DiscoveryConfig": {
        "TrustedAdvisorIntegrationStatus": {}
      },
      "Applications": {}
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

<h3 id="getmilestone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMilestoneOutput](#schemagetmilestoneoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkload

<a id="opIdGetWorkload"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}`

Get an existing workload.

<h3 id="getworkload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
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
  "Workload": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
    "IsReviewOwnerUpdateAcknowledged": {},
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "PillarPriorities": [
      "string"
    ],
    "Lenses": [
      "string"
    ],
    "Owner": "string",
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": {}
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

<h3 id="getworkload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkloadOutput](#schemagetworkloadoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkload

<a id="opIdUpdateWorkload"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "PillarPriorities": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "IsReviewOwnerUpdateAcknowledged": true,
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": [
      "string"
    ]
  }'
```

`PATCH /workloads/{WorkloadId}`

Update an existing workload.

> Body parameter

```json
{
  "WorkloadName": "string",
  "Description": "string",
  "Environment": "PRODUCTION",
  "AccountIds": [
    "string"
  ],
  "AwsRegions": [
    "string"
  ],
  "NonAwsRegions": [
    "string"
  ],
  "PillarPriorities": [
    "string"
  ],
  "ArchitecturalDesign": "string",
  "ReviewOwner": "string",
  "IsReviewOwnerUpdateAcknowledged": true,
  "IndustryType": "string",
  "Industry": "string",
  "Notes": "string",
  "ImprovementStatus": "NOT_APPLICABLE",
  "DiscoveryConfig": {
    "TrustedAdvisorIntegrationStatus": {}
  },
  "Applications": [
    "string"
  ]
}
```

<h3 id="updateworkload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WorkloadName|body|string|false|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|» Description|body|string|false|The description for the workload.|
|» Environment|body|string|false|The environment for the workload.|
|» AccountIds|body|[[AwsAccountId](#schemaawsaccountid)]|false|The list of Amazon Web Services account IDs associated with the workload.|
|» AwsRegions|body|[[AwsRegion](#schemaawsregion)]|false|The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.|
|» NonAwsRegions|body|[[WorkloadNonAwsRegion](#schemaworkloadnonawsregion)]|false| The list of non-Amazon Web Services Regions associated with the workload.|
|» PillarPriorities|body|[[PillarId](#schemapillarid)]|false|The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.|
|» ArchitecturalDesign|body|string|false|The URL of the architectural design for the workload.|
|» ReviewOwner|body|string|false|The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.|
|» IsReviewOwnerUpdateAcknowledged|body|boolean|false|<p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>|
|» IndustryType|body|string|false|<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>|
|» Industry|body|string|false|The industry for the workload.|
|» Notes|body|string|false|The notes associated with the workload.|
|» ImprovementStatus|body|string|false|The improvement status for a workload.|
|» DiscoveryConfig|body|object|false|Discovery configuration associated to the workload.|
|» » TrustedAdvisorIntegrationStatus|body|object|false|none|
|» Applications|body|[[ApplicationArn](#schemaapplicationarn)]|false|List of AppRegistry application ARNs to associate to the workload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Environment|PRODUCTION|
|» Environment|PREPRODUCTION|
|» ImprovementStatus|NOT_APPLICABLE|
|» ImprovementStatus|NOT_STARTED|
|» ImprovementStatus|IN_PROGRESS|
|» ImprovementStatus|COMPLETE|
|» ImprovementStatus|RISK_ACKNOWLEDGED|

> Example responses

> 200 Response

```json
{
  "Workload": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
    "IsReviewOwnerUpdateAcknowledged": {},
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "PillarPriorities": [
      "string"
    ],
    "Lenses": [
      "string"
    ],
    "Owner": "string",
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": {}
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

<h3 id="updateworkload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorkloadOutput](#schemaupdateworkloadoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportLens

<a id="opIdImportLens"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/importLens \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LensAlias": "string",
    "JSONString": "string",
    "ClientRequestToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /importLens`

<p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

> Body parameter

```json
{
  "LensAlias": "string",
  "JSONString": "string",
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="importlens-parameters">Parameters</h3>

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
|» LensAlias|body|string|false|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|» JSONString|body|string|true|The JSON representation of a lens.|
|» ClientRequestToken|body|string|true|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|
|» Tags|body|object|false|Tags to associate to a lens.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "LensArn": {},
  "Status": {}
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

<h3 id="importlens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportLensOutput](#schemaimportlensoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnswers

<a id="opIdListAnswers"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/answers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers`

List of answers for a particular workload and lens.

<h3 id="listanswers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|PillarId|query|string|false|none|
|MilestoneNumber|query|integer|false|none|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "AnswerSummaries": [
    {
      "QuestionId": "string",
      "PillarId": "string",
      "QuestionTitle": "string",
      "Choices": [
        {
          "ChoiceId": "string",
          "Title": "string",
          "Description": "string",
          "HelpfulResource": {
            "DisplayText": {},
            "Url": {}
          },
          "ImprovementPlan": {
            "DisplayText": {},
            "Url": {}
          },
          "AdditionalResources": {}
        }
      ],
      "SelectedChoices": [
        "string"
      ],
      "ChoiceAnswerSummaries": {},
      "IsApplicable": true,
      "Risk": "UNANSWERED",
      "Reason": {}
    }
  ],
  "NextToken": "string"
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

<h3 id="listanswers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnswersOutput](#schemalistanswersoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCheckDetails

<a id="opIdListCheckDetails"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/checks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "LensArn": "string",
    "PillarId": "string",
    "QuestionId": "string",
    "ChoiceId": "string"
  }'
```

`POST /workloads/{WorkloadId}/checks`

List of Trusted Advisor check details by account related to the workload.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "LensArn": "string",
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string"
}
```

<h3 id="listcheckdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
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
|» NextToken|body|string|false|The token to use to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return for this request.|
|» LensArn|body|string|true|Well-Architected Lens ARN.|
|» PillarId|body|string|true|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|» QuestionId|body|string|true|The ID of the question.|
|» ChoiceId|body|string|true|The ID of a choice.|

> Example responses

> 200 Response

```json
{
  "CheckDetails": {},
  "NextToken": "string"
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

<h3 id="listcheckdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCheckDetailsOutput](#schemalistcheckdetailsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCheckSummaries

<a id="opIdListCheckSummaries"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/checkSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "LensArn": "string",
    "PillarId": "string",
    "QuestionId": "string",
    "ChoiceId": "string"
  }'
```

`POST /workloads/{WorkloadId}/checkSummaries`

List of Trusted Advisor checks summarized for all accounts related to the workload.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "LensArn": "string",
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string"
}
```

<h3 id="listchecksummaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
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
|» NextToken|body|string|false|The token to use to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return for this request.|
|» LensArn|body|string|true|Well-Architected Lens ARN.|
|» PillarId|body|string|true|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|» QuestionId|body|string|true|The ID of the question.|
|» ChoiceId|body|string|true|The ID of a choice.|

> Example responses

> 200 Response

```json
{
  "CheckSummaries": {},
  "NextToken": "string"
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

<h3 id="listchecksummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCheckSummariesOutput](#schemalistchecksummariesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLensReviewImprovements

<a id="opIdListLensReviewImprovements"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/improvements \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements`

List lens review improvements.

<h3 id="listlensreviewimprovements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|PillarId|query|string|false|none|
|MilestoneNumber|query|integer|false|none|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "ImprovementSummaries": [
    {
      "QuestionId": "string",
      "PillarId": "string",
      "QuestionTitle": "string",
      "Risk": "UNANSWERED",
      "ImprovementPlanUrl": "string",
      "ImprovementPlans": {}
    }
  ],
  "NextToken": "string"
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

<h3 id="listlensreviewimprovements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLensReviewImprovementsOutput](#schemalistlensreviewimprovementsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLensReviews

<a id="opIdListLensReviews"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workloads/{WorkloadId}/lensReviews`

List lens reviews for a particular workload.

<h3 id="listlensreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|MilestoneNumber|query|integer|false|none|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
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
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReviewSummaries": [
    {
      "LensAlias": "string",
      "LensArn": {},
      "LensVersion": {},
      "LensName": "string",
      "LensStatus": {},
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "NextToken": "string"
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

<h3 id="listlensreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLensReviewsOutput](#schemalistlensreviewsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLenses

<a id="opIdListLenses"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/lenses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lenses`

List the available lenses.

<h3 id="listlenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|none|
|LensType|query|string|false|The type of lenses to be returned.|
|LensStatus|query|string|false|The status of lenses to be returned.|
|LensName|query|string|false|none|
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
|LensType|AWS_OFFICIAL|
|LensType|CUSTOM_SHARED|
|LensType|CUSTOM_SELF|
|LensStatus|ALL|
|LensStatus|DRAFT|
|LensStatus|PUBLISHED|

> Example responses

> 200 Response

```json
{
  "LensSummaries": [
    {
      "LensArn": {},
      "LensAlias": "string",
      "LensName": "string",
      "LensType": {},
      "Description": "string",
      "CreatedAt": "1970-01-01T00:00:00Z",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "LensVersion": {},
      "Owner": "string",
      "LensStatus": {}
    }
  ],
  "NextToken": "string"
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

<h3 id="listlenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLensesOutput](#schemalistlensesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMilestones

<a id="opIdListMilestones"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/milestonesSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /workloads/{WorkloadId}/milestonesSummaries`

List all milestones for an existing workload.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listmilestones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
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
|» NextToken|body|string|false|The token to use to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return for this request.|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "MilestoneSummaries": [
    {
      "MilestoneNumber": 1,
      "MilestoneName": "string",
      "RecordedAt": "1970-01-01T00:00:00Z",
      "WorkloadSummary": {
        "WorkloadId": "string",
        "WorkloadArn": "string",
        "WorkloadName": "string",
        "Owner": "string",
        "UpdatedAt": "1970-01-01T00:00:00Z",
        "Lenses": [
          "string"
        ],
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        },
        "ImprovementStatus": "NOT_APPLICABLE"
      }
    }
  ],
  "NextToken": "string"
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

<h3 id="listmilestones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMilestonesOutput](#schemalistmilestonesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotifications

<a id="opIdListNotifications"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkloadId": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /notifications`

List lens notifications.

> Body parameter

```json
{
  "WorkloadId": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listnotifications-parameters">Parameters</h3>

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
|» WorkloadId|body|string|false|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|» NextToken|body|string|false|The token to use to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return for this request.|

> Example responses

> 200 Response

```json
{
  "NotificationSummaries": {},
  "NextToken": "string"
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

<h3 id="listnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotificationsOutput](#schemalistnotificationsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListShareInvitations

<a id="opIdListShareInvitations"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/shareInvitations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /shareInvitations`

List the workload invitations.

<h3 id="listshareinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadNamePrefix|query|string|false|none|
|LensNamePrefix|query|string|false|An optional string added to the beginning of each lens name returned in the results.|
|ShareResourceType|query|string|false|The type of share invitations to be returned.|
|NextToken|query|string|false|none|
|MaxResults|query|integer|false|The maximum number of results to return for this request.|
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
|ShareResourceType|WORKLOAD|
|ShareResourceType|LENS|

> Example responses

> 200 Response

```json
{
  "ShareInvitationSummaries": {},
  "NextToken": "string"
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

<h3 id="listshareinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListShareInvitationsOutput](#schemalistshareinvitationsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{WorkloadArn}`

<p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadArn|path|string|true|none|
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

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{WorkloadArn}`

<p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadArn|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags for the resource.|
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkloads

<a id="opIdListWorkloads"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloadsSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WorkloadNamePrefix": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /workloadsSummaries`

Paginated list of workloads.

> Body parameter

```json
{
  "WorkloadNamePrefix": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listworkloads-parameters">Parameters</h3>

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
|» WorkloadNamePrefix|body|string|false|An optional string added to the beginning of each workload name returned in the results.|
|» NextToken|body|string|false|The token to use to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return for this request.|

> Example responses

> 200 Response

```json
{
  "WorkloadSummaries": [
    {
      "WorkloadId": "string",
      "WorkloadArn": "string",
      "WorkloadName": "string",
      "Owner": "string",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "Lenses": [
        "string"
      ],
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      },
      "ImprovementStatus": "NOT_APPLICABLE"
    }
  ],
  "NextToken": "string"
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

<h3 id="listworkloads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkloadsOutput](#schemalistworkloadsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://wellarchitected.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{WorkloadArn}#tagKeys`

<p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadArn|path|string|true|none|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGlobalSettings

<a id="opIdUpdateGlobalSettings"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/global-settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OrganizationSharingStatus": "ENABLED"
  }'
```

`PATCH /global-settings`

Updates whether the Amazon Web Services account is opted into organization sharing features.

> Body parameter

```json
{
  "OrganizationSharingStatus": "ENABLED"
}
```

<h3 id="updateglobalsettings-parameters">Parameters</h3>

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
|» OrganizationSharingStatus|body|string|false|The status of organization sharing settings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» OrganizationSharingStatus|ENABLED|
|» OrganizationSharingStatus|DISABLED|

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

<h3 id="updateglobalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateShareInvitation

<a id="opIdUpdateShareInvitation"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/shareInvitations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ShareInvitationAction": "ACCEPT"
  }'
```

`PATCH /shareInvitations/{ShareInvitationId}`

<p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>

> Body parameter

```json
{
  "ShareInvitationAction": "ACCEPT"
}
```

<h3 id="updateshareinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ShareInvitationId|path|string|true|The ID assigned to the share invitation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ShareInvitationAction|body|string|true|Share invitation action taken by contributor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ShareInvitationAction|ACCEPT|
|» ShareInvitationAction|REJECT|

> Example responses

> 200 Response

```json
{
  "ShareInvitation": {
    "ShareInvitationId": {},
    "ShareResourceType": {},
    "WorkloadId": "string",
    "LensAlias": "string",
    "LensArn": {}
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

<h3 id="updateshareinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateShareInvitationOutput](#schemaupdateshareinvitationoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkloadShare

<a id="opIdUpdateWorkloadShare"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/shares/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PermissionType": "READONLY"
  }'
```

`PATCH /workloads/{WorkloadId}/shares/{ShareId}`

Update a workload share.

> Body parameter

```json
{
  "PermissionType": "READONLY"
}
```

<h3 id="updateworkloadshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ShareId|path|string|true|none|
|WorkloadId|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PermissionType|body|string|true|Permission granted on a workload share.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PermissionType|READONLY|
|» PermissionType|CONTRIBUTOR|

> Example responses

> 200 Response

```json
{
  "WorkloadId": "string",
  "WorkloadShare": {
    "ShareId": "string",
    "SharedBy": "string",
    "SharedWith": "stringstring",
    "PermissionType": "READONLY",
    "Status": "ACCEPTED",
    "WorkloadName": "string",
    "WorkloadId": "string"
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

<h3 id="updateworkloadshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorkloadShareOutput](#schemaupdateworkloadshareoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpgradeLensReview

<a id="opIdUpgradeLensReview"></a>

> Code samples

```bash
curl https://wellarchitected.us-east-1.amazonaws.com/workloads/string/lensReviews/string/upgrade \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MilestoneName": "string",
    "ClientRequestToken": "string"
  }'
```

`PUT /workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade`

Upgrade lens review for a particular workload.

> Body parameter

```json
{
  "MilestoneName": "string",
  "ClientRequestToken": "string"
}
```

<h3 id="upgradelensreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WorkloadId|path|string|true|none|
|LensAlias|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MilestoneName|body|string|true|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|» ClientRequestToken|body|string|false|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

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

<h3 id="upgradelensreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_LensAlias">LensAlias</h2>
<!-- backwards compatibility -->
<a id="schemalensalias"></a>
<a id="schema_LensAlias"></a>
<a id="tocSlensalias"></a>
<a id="tocslensalias"></a>

```json
"string"
```

<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_CreateLensShareOutput">CreateLensShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelensshareoutput"></a>
<a id="schema_CreateLensShareOutput"></a>
<a id="tocScreatelensshareoutput"></a>
<a id="tocscreatelensshareoutput"></a>

```json
{
  "ShareId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareId|[ShareId](#schemashareid)|false|none|The ID associated with the workload share.|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateLensVersionOutput">CreateLensVersionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelensversionoutput"></a>
<a id="schema_CreateLensVersionOutput"></a>
<a id="tocScreatelensversionoutput"></a>
<a id="tocscreatelensversionoutput"></a>

```json
{
  "LensArn": {},
  "LensVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensArn|object|false|none|none|
|LensVersion|object|false|none|none|

<h2 id="tocS_CreateMilestoneOutput">CreateMilestoneOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemilestoneoutput"></a>
<a id="schema_CreateMilestoneOutput"></a>
<a id="tocScreatemilestoneoutput"></a>
<a id="tocscreatemilestoneoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1
}
```

Output of a create milestone call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|

<h2 id="tocS_CreateWorkloadOutput">CreateWorkloadOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkloadoutput"></a>
<a id="schema_CreateWorkloadOutput"></a>
<a id="tocScreateworkloadoutput"></a>
<a id="tocscreateworkloadoutput"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadArn": "string"
}
```

Output of a create workload call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadArn|[WorkloadArn](#schemaworkloadarn)|false|none|The ARN for the workload.|

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

An Amazon Web Services account ID.

<h2 id="tocS_AwsRegion">AwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AwsRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"string"
```

An Amazon Web Services Region, for example, <code>us-west-2</code> or <code>ap-northeast-1</code>.

<h2 id="tocS_WorkloadNonAwsRegion">WorkloadNonAwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadnonawsregion"></a>
<a id="schema_WorkloadNonAwsRegion"></a>
<a id="tocSworkloadnonawsregion"></a>
<a id="tocsworkloadnonawsregion"></a>

```json
"string"
```

<h2 id="tocS_PillarId">PillarId</h2>
<!-- backwards compatibility -->
<a id="schemapillarid"></a>
<a id="schema_PillarId"></a>
<a id="tocSpillarid"></a>
<a id="tocspillarid"></a>

```json
"string"
```

<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TrustedAdvisorIntegrationStatus">TrustedAdvisorIntegrationStatus</h2>
<!-- backwards compatibility -->
<a id="schematrustedadvisorintegrationstatus"></a>
<a id="schema_TrustedAdvisorIntegrationStatus"></a>
<a id="tocStrustedadvisorintegrationstatus"></a>
<a id="tocstrustedadvisorintegrationstatus"></a>

```json
"ENABLED"
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

<h2 id="tocS_CreateWorkloadShareOutput">CreateWorkloadShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkloadshareoutput"></a>
<a id="schema_CreateWorkloadShareOutput"></a>
<a id="tocScreateworkloadshareoutput"></a>
<a id="tocscreateworkloadshareoutput"></a>

```json
{
  "WorkloadId": "string",
  "ShareId": "string"
}
```

Input for Create Workload Share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|ShareId|[ShareId](#schemashareid)|false|none|The ID associated with the workload share.|

<h2 id="tocS_ExportLensOutput">ExportLensOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexportlensoutput"></a>
<a id="schema_ExportLensOutput"></a>
<a id="tocSexportlensoutput"></a>
<a id="tocsexportlensoutput"></a>

```json
{
  "LensJSON": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensJSON|object|false|none|none|

<h2 id="tocS_GetAnswerOutput">GetAnswerOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetansweroutput"></a>
<a id="schema_GetAnswerOutput"></a>
<a id="tocSgetansweroutput"></a>
<a id="tocsgetansweroutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "Answer": {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "QuestionDescription": "string",
    "ImprovementPlanUrl": "string",
    "HelpfulResourceUrl": "string",
    "HelpfulResourceDisplayText": {},
    "Choices": [
      {
        "ChoiceId": "string",
        "Title": "string",
        "Description": "string",
        "HelpfulResource": {
          "DisplayText": {},
          "Url": {}
        },
        "ImprovementPlan": {
          "DisplayText": {},
          "Url": {}
        },
        "AdditionalResources": {}
      }
    ],
    "SelectedChoices": [
      "string"
    ],
    "ChoiceAnswers": {},
    "IsApplicable": true,
    "Risk": "UNANSWERED",
    "Notes": "string",
    "Reason": {}
  }
}
```

Output of a get answer call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|Answer|[Answer](#schemaanswer)|false|none|An answer of the question.|

<h2 id="tocS_GetConsolidatedReportOutput">GetConsolidatedReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetconsolidatedreportoutput"></a>
<a id="schema_GetConsolidatedReportOutput"></a>
<a id="tocSgetconsolidatedreportoutput"></a>
<a id="tocsgetconsolidatedreportoutput"></a>

```json
{
  "Metrics": {},
  "NextToken": "string",
  "Base64String": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metrics|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|Base64String|[Base64String](#schemabase64string)|false|none|<p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>|

<h2 id="tocS_GetLensOutput">GetLensOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensoutput"></a>
<a id="schema_GetLensOutput"></a>
<a id="tocSgetlensoutput"></a>
<a id="tocsgetlensoutput"></a>

```json
{
  "Lens": {
    "LensArn": {},
    "LensVersion": {},
    "Name": "string",
    "Description": "string",
    "Owner": {},
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lens|object|false|none|none|

<h2 id="tocS_GetLensReviewOutput">GetLensReviewOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensreviewoutput"></a>
<a id="schema_GetLensReviewOutput"></a>
<a id="tocSgetlensreviewoutput"></a>
<a id="tocsgetlensreviewoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReview": {
    "LensAlias": "string",
    "LensArn": {},
    "LensVersion": {},
    "LensName": "string",
    "LensStatus": {},
    "PillarReviewSummaries": [
      {
        "PillarId": "string",
        "PillarName": "string",
        "Notes": "string",
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Notes": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "NextToken": "string"
  }
}
```

Output of a get lens review call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensReview|[LensReview](#schemalensreview)|false|none|A lens review of a question.|

<h2 id="tocS_GetLensReviewReportOutput">GetLensReviewReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensreviewreportoutput"></a>
<a id="schema_GetLensReviewReportOutput"></a>
<a id="tocSgetlensreviewreportoutput"></a>
<a id="tocsgetlensreviewreportoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReviewReport": {
    "LensAlias": "string",
    "LensArn": {},
    "Base64String": "string"
  }
}
```

Output of a get lens review report call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensReviewReport|[LensReviewReport](#schemalensreviewreport)|false|none|A report of a lens review.|

<h2 id="tocS_GetLensVersionDifferenceOutput">GetLensVersionDifferenceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensversiondifferenceoutput"></a>
<a id="schema_GetLensVersionDifferenceOutput"></a>
<a id="tocSgetlensversiondifferenceoutput"></a>
<a id="tocsgetlensversiondifferenceoutput"></a>

```json
{
  "LensAlias": "string",
  "LensArn": {},
  "BaseLensVersion": {},
  "TargetLensVersion": {},
  "LatestLensVersion": {},
  "VersionDifferences": {
    "PillarDifferences": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|BaseLensVersion|object|false|none|none|
|TargetLensVersion|object|false|none|none|
|LatestLensVersion|object|false|none|none|
|VersionDifferences|[VersionDifferences](#schemaversiondifferences)|false|none|The differences between the base and latest versions of the lens.|

<h2 id="tocS_GetMilestoneOutput">GetMilestoneOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmilestoneoutput"></a>
<a id="schema_GetMilestoneOutput"></a>
<a id="tocSgetmilestoneoutput"></a>
<a id="tocsgetmilestoneoutput"></a>

```json
{
  "WorkloadId": "string",
  "Milestone": {
    "MilestoneNumber": 1,
    "MilestoneName": "string",
    "RecordedAt": "1970-01-01T00:00:00Z",
    "Workload": {
      "WorkloadId": "string",
      "WorkloadArn": "string",
      "WorkloadName": "string",
      "Description": "string",
      "Environment": "PRODUCTION",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "AccountIds": [
        "string"
      ],
      "AwsRegions": [
        "string"
      ],
      "NonAwsRegions": [
        "string"
      ],
      "ArchitecturalDesign": "string",
      "ReviewOwner": "string",
      "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
      "IsReviewOwnerUpdateAcknowledged": {},
      "IndustryType": "string",
      "Industry": "string",
      "Notes": "string",
      "ImprovementStatus": "NOT_APPLICABLE",
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      },
      "PillarPriorities": [
        "string"
      ],
      "Lenses": [
        "string"
      ],
      "Owner": "string",
      "ShareInvitationId": {},
      "Tags": {
        "property1": "string",
        "property2": "string"
      },
      "DiscoveryConfig": {
        "TrustedAdvisorIntegrationStatus": {}
      },
      "Applications": {}
    }
  }
}
```

Output of a get milestone call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|Milestone|[Milestone](#schemamilestone)|false|none|A milestone return object.|

<h2 id="tocS_GetWorkloadOutput">GetWorkloadOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetworkloadoutput"></a>
<a id="schema_GetWorkloadOutput"></a>
<a id="tocSgetworkloadoutput"></a>
<a id="tocsgetworkloadoutput"></a>

```json
{
  "Workload": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
    "IsReviewOwnerUpdateAcknowledged": {},
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "PillarPriorities": [
      "string"
    ],
    "Lenses": [
      "string"
    ],
    "Owner": "string",
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": {}
  }
}
```

Output of a get workload call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Workload|[Workload](#schemaworkload)|false|none|A workload return object.|

<h2 id="tocS_ImportLensOutput">ImportLensOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimportlensoutput"></a>
<a id="schema_ImportLensOutput"></a>
<a id="tocSimportlensoutput"></a>
<a id="tocsimportlensoutput"></a>

```json
{
  "LensArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListAnswersOutput">ListAnswersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistanswersoutput"></a>
<a id="schema_ListAnswersOutput"></a>
<a id="tocSlistanswersoutput"></a>
<a id="tocslistanswersoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "AnswerSummaries": [
    {
      "QuestionId": "string",
      "PillarId": "string",
      "QuestionTitle": "string",
      "Choices": [
        {
          "ChoiceId": "string",
          "Title": "string",
          "Description": "string",
          "HelpfulResource": {
            "DisplayText": {},
            "Url": {}
          },
          "ImprovementPlan": {
            "DisplayText": {},
            "Url": {}
          },
          "AdditionalResources": {}
        }
      ],
      "SelectedChoices": [
        "string"
      ],
      "ChoiceAnswerSummaries": {},
      "IsApplicable": true,
      "Risk": "UNANSWERED",
      "Reason": {}
    }
  ],
  "NextToken": "string"
}
```

Output of a list answers call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|AnswerSummaries|[AnswerSummaries](#schemaanswersummaries)|false|none|List of answer summaries of lens review in a workload.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListCheckDetailsOutput">ListCheckDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcheckdetailsoutput"></a>
<a id="schema_ListCheckDetailsOutput"></a>
<a id="tocSlistcheckdetailsoutput"></a>
<a id="tocslistcheckdetailsoutput"></a>

```json
{
  "CheckDetails": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckDetails|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListCheckSummariesOutput">ListCheckSummariesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistchecksummariesoutput"></a>
<a id="schema_ListCheckSummariesOutput"></a>
<a id="tocSlistchecksummariesoutput"></a>
<a id="tocslistchecksummariesoutput"></a>

```json
{
  "CheckSummaries": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckSummaries|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListLensReviewImprovementsOutput">ListLensReviewImprovementsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensreviewimprovementsoutput"></a>
<a id="schema_ListLensReviewImprovementsOutput"></a>
<a id="tocSlistlensreviewimprovementsoutput"></a>
<a id="tocslistlensreviewimprovementsoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensAlias": "string",
  "LensArn": {},
  "ImprovementSummaries": [
    {
      "QuestionId": "string",
      "PillarId": "string",
      "QuestionTitle": "string",
      "Risk": "UNANSWERED",
      "ImprovementPlanUrl": "string",
      "ImprovementPlans": {}
    }
  ],
  "NextToken": "string"
}
```

Output of a list lens review improvements call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|ImprovementSummaries|[ImprovementSummaries](#schemaimprovementsummaries)|false|none|List of improvement summaries of lens review in a workload.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListLensReviewsOutput">ListLensReviewsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensreviewsoutput"></a>
<a id="schema_ListLensReviewsOutput"></a>
<a id="tocSlistlensreviewsoutput"></a>
<a id="tocslistlensreviewsoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneNumber": 1,
  "LensReviewSummaries": [
    {
      "LensAlias": "string",
      "LensArn": {},
      "LensVersion": {},
      "LensName": "string",
      "LensStatus": {},
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "NextToken": "string"
}
```

Output of a list lens reviews call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|LensReviewSummaries|[LensReviewSummaries](#schemalensreviewsummaries)|false|none|List of lens summaries of lens reviews of a workload.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListLensSharesOutput">ListLensSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlenssharesoutput"></a>
<a id="schema_ListLensSharesOutput"></a>
<a id="tocSlistlenssharesoutput"></a>
<a id="tocslistlenssharesoutput"></a>

```json
{
  "LensShareSummaries": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensShareSummaries|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListLensesOutput">ListLensesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensesoutput"></a>
<a id="schema_ListLensesOutput"></a>
<a id="tocSlistlensesoutput"></a>
<a id="tocslistlensesoutput"></a>

```json
{
  "LensSummaries": [
    {
      "LensArn": {},
      "LensAlias": "string",
      "LensName": "string",
      "LensType": {},
      "Description": "string",
      "CreatedAt": "1970-01-01T00:00:00Z",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "LensVersion": {},
      "Owner": "string",
      "LensStatus": {}
    }
  ],
  "NextToken": "string"
}
```

Output of a list lenses call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensSummaries|[LensSummaries](#schemalenssummaries)|false|none|List of lens summaries of available lenses.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListMilestonesOutput">ListMilestonesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmilestonesoutput"></a>
<a id="schema_ListMilestonesOutput"></a>
<a id="tocSlistmilestonesoutput"></a>
<a id="tocslistmilestonesoutput"></a>

```json
{
  "WorkloadId": "string",
  "MilestoneSummaries": [
    {
      "MilestoneNumber": 1,
      "MilestoneName": "string",
      "RecordedAt": "1970-01-01T00:00:00Z",
      "WorkloadSummary": {
        "WorkloadId": "string",
        "WorkloadArn": "string",
        "WorkloadName": "string",
        "Owner": "string",
        "UpdatedAt": "1970-01-01T00:00:00Z",
        "Lenses": [
          "string"
        ],
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        },
        "ImprovementStatus": "NOT_APPLICABLE"
      }
    }
  ],
  "NextToken": "string"
}
```

Output of a list milestones call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|MilestoneSummaries|[MilestoneSummaries](#schemamilestonesummaries)|false|none|A list of milestone summaries.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListNotificationsOutput">ListNotificationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsoutput"></a>
<a id="schema_ListNotificationsOutput"></a>
<a id="tocSlistnotificationsoutput"></a>
<a id="tocslistnotificationsoutput"></a>

```json
{
  "NotificationSummaries": {},
  "NextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationSummaries|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListShareInvitationsOutput">ListShareInvitationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistshareinvitationsoutput"></a>
<a id="schema_ListShareInvitationsOutput"></a>
<a id="tocSlistshareinvitationsoutput"></a>
<a id="tocslistshareinvitationsoutput"></a>

```json
{
  "ShareInvitationSummaries": {},
  "NextToken": "string"
}
```

Input for List Share Invitations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareInvitationSummaries|object|false|none|none|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

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

<h2 id="tocS_ListWorkloadSharesOutput">ListWorkloadSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsharesoutput"></a>
<a id="schema_ListWorkloadSharesOutput"></a>
<a id="tocSlistworkloadsharesoutput"></a>
<a id="tocslistworkloadsharesoutput"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadShareSummaries": [
    {
      "ShareId": "string",
      "SharedWith": "stringstring",
      "PermissionType": "READONLY",
      "Status": "ACCEPTED",
      "StatusMessage": {}
    }
  ],
  "NextToken": "string"
}
```

Input for List Workload Share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadShareSummaries|[WorkloadShareSummaries](#schemaworkloadsharesummaries)|false|none|A list of workload share summaries.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_ListWorkloadsOutput">ListWorkloadsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsoutput"></a>
<a id="schema_ListWorkloadsOutput"></a>
<a id="tocSlistworkloadsoutput"></a>
<a id="tocslistworkloadsoutput"></a>

```json
{
  "WorkloadSummaries": [
    {
      "WorkloadId": "string",
      "WorkloadArn": "string",
      "WorkloadName": "string",
      "Owner": "string",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "Lenses": [
        "string"
      ],
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      },
      "ImprovementStatus": "NOT_APPLICABLE"
    }
  ],
  "NextToken": "string"
}
```

Output of a list workloads call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadSummaries|[WorkloadSummaries](#schemaworkloadsummaries)|false|none|A list of workload summaries.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

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

<h2 id="tocS_UpdateAnswerOutput">UpdateAnswerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateansweroutput"></a>
<a id="schema_UpdateAnswerOutput"></a>
<a id="tocSupdateansweroutput"></a>
<a id="tocsupdateansweroutput"></a>

```json
{
  "WorkloadId": "string",
  "LensAlias": "string",
  "LensArn": {},
  "Answer": {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "QuestionDescription": "string",
    "ImprovementPlanUrl": "string",
    "HelpfulResourceUrl": "string",
    "HelpfulResourceDisplayText": {},
    "Choices": [
      {
        "ChoiceId": "string",
        "Title": "string",
        "Description": "string",
        "HelpfulResource": {
          "DisplayText": {},
          "Url": {}
        },
        "ImprovementPlan": {
          "DisplayText": {},
          "Url": {}
        },
        "AdditionalResources": {}
      }
    ],
    "SelectedChoices": [
      "string"
    ],
    "ChoiceAnswers": {},
    "IsApplicable": true,
    "Risk": "UNANSWERED",
    "Notes": "string",
    "Reason": {}
  }
}
```

Output of a update answer call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|Answer|[Answer](#schemaanswer)|false|none|An answer of the question.|

<h2 id="tocS_ChoiceId">ChoiceId</h2>
<!-- backwards compatibility -->
<a id="schemachoiceid"></a>
<a id="schema_ChoiceId"></a>
<a id="tocSchoiceid"></a>
<a id="tocschoiceid"></a>

```json
"string"
```

The ID of a choice.

<h2 id="tocS_ChoiceUpdate">ChoiceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemachoiceupdate"></a>
<a id="schema_ChoiceUpdate"></a>
<a id="tocSchoiceupdate"></a>
<a id="tocschoiceupdate"></a>

```json
{
  "Status": {},
  "Reason": {},
  "Notes": {}
}
```

A list of choices to be updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Reason|object|false|none|none|
|Notes|object|false|none|none|

<h2 id="tocS_UpdateLensReviewOutput">UpdateLensReviewOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelensreviewoutput"></a>
<a id="schema_UpdateLensReviewOutput"></a>
<a id="tocSupdatelensreviewoutput"></a>
<a id="tocsupdatelensreviewoutput"></a>

```json
{
  "WorkloadId": "string",
  "LensReview": {
    "LensAlias": "string",
    "LensArn": {},
    "LensVersion": {},
    "LensName": "string",
    "LensStatus": {},
    "PillarReviewSummaries": [
      {
        "PillarId": "string",
        "PillarName": "string",
        "Notes": "string",
        "RiskCounts": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Notes": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "NextToken": "string"
  }
}
```

Output of a update lens review call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|LensReview|[LensReview](#schemalensreview)|false|none|A lens review of a question.|

<h2 id="tocS_Notes">Notes</h2>
<!-- backwards compatibility -->
<a id="schemanotes"></a>
<a id="schema_Notes"></a>
<a id="tocSnotes"></a>
<a id="tocsnotes"></a>

```json
"string"
```

The notes associated with the workload.

<h2 id="tocS_UpdateShareInvitationOutput">UpdateShareInvitationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshareinvitationoutput"></a>
<a id="schema_UpdateShareInvitationOutput"></a>
<a id="tocSupdateshareinvitationoutput"></a>
<a id="tocsupdateshareinvitationoutput"></a>

```json
{
  "ShareInvitation": {
    "ShareInvitationId": {},
    "ShareResourceType": {},
    "WorkloadId": "string",
    "LensAlias": "string",
    "LensArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareInvitation|object|false|none|none|

<h2 id="tocS_UpdateWorkloadOutput">UpdateWorkloadOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkloadoutput"></a>
<a id="schema_UpdateWorkloadOutput"></a>
<a id="tocSupdateworkloadoutput"></a>
<a id="tocsupdateworkloadoutput"></a>

```json
{
  "Workload": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
    "IsReviewOwnerUpdateAcknowledged": {},
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "PillarPriorities": [
      "string"
    ],
    "Lenses": [
      "string"
    ],
    "Owner": "string",
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": {}
  }
}
```

Output of an update workload call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Workload|[Workload](#schemaworkload)|false|none|A workload return object.|

<h2 id="tocS_UpdateWorkloadShareOutput">UpdateWorkloadShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkloadshareoutput"></a>
<a id="schema_UpdateWorkloadShareOutput"></a>
<a id="tocSupdateworkloadshareoutput"></a>
<a id="tocsupdateworkloadshareoutput"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadShare": {
    "ShareId": "string",
    "SharedBy": "string",
    "SharedWith": "stringstring",
    "PermissionType": "READONLY",
    "Status": "ACCEPTED",
    "WorkloadName": "string",
    "WorkloadId": "string"
  }
}
```

Input for Update Workload Share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadShare|[WorkloadShare](#schemaworkloadshare)|false|none|A workload share return object.|

<h2 id="tocS_CheckStatusCount">CheckStatusCount</h2>
<!-- backwards compatibility -->
<a id="schemacheckstatuscount"></a>
<a id="schema_CheckStatusCount"></a>
<a id="tocScheckstatuscount"></a>
<a id="tocscheckstatuscount"></a>

```json
1
```

<h2 id="tocS_AccountSummary">AccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsummary"></a>
<a id="schema_AccountSummary"></a>
<a id="tocSaccountsummary"></a>
<a id="tocsaccountsummary"></a>

```json
{
  "property1": 1,
  "property2": 1
}
```

Account summary for a Well-Architected best practice in relation to Trusted Advisor checks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CheckStatusCount](#schemacheckstatuscount)|false|none|none|

<h2 id="tocS_AdditionalResourceType">AdditionalResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresourcetype"></a>
<a id="schema_AdditionalResourceType"></a>
<a id="tocSadditionalresourcetype"></a>
<a id="tocsadditionalresourcetype"></a>

```json
"HELPFUL_RESOURCE"
```

<h2 id="tocS_Urls">Urls</h2>
<!-- backwards compatibility -->
<a id="schemaurls"></a>
<a id="schema_Urls"></a>
<a id="tocSurls"></a>
<a id="tocsurls"></a>

```json
[
  {
    "DisplayText": {},
    "Url": {}
  }
]
```

<h2 id="tocS_AdditionalResources">AdditionalResources</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresources"></a>
<a id="schema_AdditionalResources"></a>
<a id="tocSadditionalresources"></a>
<a id="tocsadditionalresources"></a>

```json
{
  "Type": {},
  "Content": {}
}
```

<p>The choice level additional resources for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_AdditionalResourcesList">AdditionalResourcesList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresourceslist"></a>
<a id="schema_AdditionalResourcesList"></a>
<a id="tocSadditionalresourceslist"></a>
<a id="tocsadditionalresourceslist"></a>

```json
[
  {
    "Type": {},
    "Content": {}
  }
]
```

<h2 id="tocS_QuestionId">QuestionId</h2>
<!-- backwards compatibility -->
<a id="schemaquestionid"></a>
<a id="schema_QuestionId"></a>
<a id="tocSquestionid"></a>
<a id="tocsquestionid"></a>

```json
"string"
```

The ID of the question.

<h2 id="tocS_QuestionTitle">QuestionTitle</h2>
<!-- backwards compatibility -->
<a id="schemaquestiontitle"></a>
<a id="schema_QuestionTitle"></a>
<a id="tocSquestiontitle"></a>
<a id="tocsquestiontitle"></a>

```json
"string"
```

The title of the question.

<h2 id="tocS_QuestionDescription">QuestionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaquestiondescription"></a>
<a id="schema_QuestionDescription"></a>
<a id="tocSquestiondescription"></a>
<a id="tocsquestiondescription"></a>

```json
"string"
```

The description of the question.

<h2 id="tocS_ImprovementPlanUrl">ImprovementPlanUrl</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementplanurl"></a>
<a id="schema_ImprovementPlanUrl"></a>
<a id="tocSimprovementplanurl"></a>
<a id="tocsimprovementplanurl"></a>

```json
"string"
```

<p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>

<h2 id="tocS_HelpfulResourceUrl">HelpfulResourceUrl</h2>
<!-- backwards compatibility -->
<a id="schemahelpfulresourceurl"></a>
<a id="schema_HelpfulResourceUrl"></a>
<a id="tocShelpfulresourceurl"></a>
<a id="tocshelpfulresourceurl"></a>

```json
"string"
```

<p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>

<h2 id="tocS_DisplayText">DisplayText</h2>
<!-- backwards compatibility -->
<a id="schemadisplaytext"></a>
<a id="schema_DisplayText"></a>
<a id="tocSdisplaytext"></a>
<a id="tocsdisplaytext"></a>

```json
"string"
```

<h2 id="tocS_Choices">Choices</h2>
<!-- backwards compatibility -->
<a id="schemachoices"></a>
<a id="schema_Choices"></a>
<a id="tocSchoices"></a>
<a id="tocschoices"></a>

```json
[
  {
    "ChoiceId": "string",
    "Title": "string",
    "Description": "string",
    "HelpfulResource": {
      "DisplayText": {},
      "Url": {}
    },
    "ImprovementPlan": {
      "DisplayText": {},
      "Url": {}
    },
    "AdditionalResources": {}
  }
]
```

List of choices available for a question.

<h2 id="tocS_SelectedChoices">SelectedChoices</h2>
<!-- backwards compatibility -->
<a id="schemaselectedchoices"></a>
<a id="schema_SelectedChoices"></a>
<a id="tocSselectedchoices"></a>
<a id="tocsselectedchoices"></a>

```json
[
  "string"
]
```

<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>

<h2 id="tocS_ChoiceAnswers">ChoiceAnswers</h2>
<!-- backwards compatibility -->
<a id="schemachoiceanswers"></a>
<a id="schema_ChoiceAnswers"></a>
<a id="tocSchoiceanswers"></a>
<a id="tocschoiceanswers"></a>

```json
[
  {
    "ChoiceId": "string",
    "Status": {},
    "Reason": {},
    "Notes": {}
  }
]
```

<h2 id="tocS_IsApplicable">IsApplicable</h2>
<!-- backwards compatibility -->
<a id="schemaisapplicable"></a>
<a id="schema_IsApplicable"></a>
<a id="tocSisapplicable"></a>
<a id="tocsisapplicable"></a>

```json
true
```

Defines whether this question is applicable to a lens review.

<h2 id="tocS_Risk">Risk</h2>
<!-- backwards compatibility -->
<a id="schemarisk"></a>
<a id="schema_Risk"></a>
<a id="tocSrisk"></a>
<a id="tocsrisk"></a>

```json
"UNANSWERED"
```

The risk for a given workload, lens review, pillar, or question.

<h2 id="tocS_AnswerReason">AnswerReason</h2>
<!-- backwards compatibility -->
<a id="schemaanswerreason"></a>
<a id="schema_AnswerReason"></a>
<a id="tocSanswerreason"></a>
<a id="tocsanswerreason"></a>

```json
"OUT_OF_SCOPE"
```

<h2 id="tocS_Answer">Answer</h2>
<!-- backwards compatibility -->
<a id="schemaanswer"></a>
<a id="schema_Answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
{
  "QuestionId": "string",
  "PillarId": "string",
  "QuestionTitle": "string",
  "QuestionDescription": "string",
  "ImprovementPlanUrl": "string",
  "HelpfulResourceUrl": "string",
  "HelpfulResourceDisplayText": {},
  "Choices": [
    {
      "ChoiceId": "string",
      "Title": "string",
      "Description": "string",
      "HelpfulResource": {
        "DisplayText": {},
        "Url": {}
      },
      "ImprovementPlan": {
        "DisplayText": {},
        "Url": {}
      },
      "AdditionalResources": {}
    }
  ],
  "SelectedChoices": [
    "string"
  ],
  "ChoiceAnswers": {},
  "IsApplicable": true,
  "Risk": "UNANSWERED",
  "Notes": "string",
  "Reason": {}
}
```

An answer of the question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionTitle|[QuestionTitle](#schemaquestiontitle)|false|none|The title of the question.|
|QuestionDescription|[QuestionDescription](#schemaquestiondescription)|false|none|The description of the question.|
|ImprovementPlanUrl|[ImprovementPlanUrl](#schemaimprovementplanurl)|false|none|<p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>|
|HelpfulResourceUrl|[HelpfulResourceUrl](#schemahelpfulresourceurl)|false|none|<p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>|
|HelpfulResourceDisplayText|object|false|none|none|
|Choices|[Choices](#schemachoices)|false|none|List of choices available for a question.|
|SelectedChoices|[SelectedChoices](#schemaselectedchoices)|false|none|<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>|
|ChoiceAnswers|object|false|none|none|
|IsApplicable|[IsApplicable](#schemaisapplicable)|false|none|Defines whether this question is applicable to a lens review.|
|Risk|[Risk](#schemarisk)|false|none|The risk for a given workload, lens review, pillar, or question.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|Reason|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Risk|UNANSWERED|
|Risk|HIGH|
|Risk|MEDIUM|
|Risk|NONE|
|Risk|NOT_APPLICABLE|

<h2 id="tocS_AnswerSummary">AnswerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanswersummary"></a>
<a id="schema_AnswerSummary"></a>
<a id="tocSanswersummary"></a>
<a id="tocsanswersummary"></a>

```json
{
  "QuestionId": "string",
  "PillarId": "string",
  "QuestionTitle": "string",
  "Choices": [
    {
      "ChoiceId": "string",
      "Title": "string",
      "Description": "string",
      "HelpfulResource": {
        "DisplayText": {},
        "Url": {}
      },
      "ImprovementPlan": {
        "DisplayText": {},
        "Url": {}
      },
      "AdditionalResources": {}
    }
  ],
  "SelectedChoices": [
    "string"
  ],
  "ChoiceAnswerSummaries": {},
  "IsApplicable": true,
  "Risk": "UNANSWERED",
  "Reason": {}
}
```

An answer summary of a lens review in a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionTitle|[QuestionTitle](#schemaquestiontitle)|false|none|The title of the question.|
|Choices|[Choices](#schemachoices)|false|none|List of choices available for a question.|
|SelectedChoices|[SelectedChoices](#schemaselectedchoices)|false|none|<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>|
|ChoiceAnswerSummaries|object|false|none|none|
|IsApplicable|[IsApplicable](#schemaisapplicable)|false|none|Defines whether this question is applicable to a lens review.|
|Risk|[Risk](#schemarisk)|false|none|The risk for a given workload, lens review, pillar, or question.|
|Reason|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Risk|UNANSWERED|
|Risk|HIGH|
|Risk|MEDIUM|
|Risk|NONE|
|Risk|NOT_APPLICABLE|

<h2 id="tocS_AnswerSummaries">AnswerSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaanswersummaries"></a>
<a id="schema_AnswerSummaries"></a>
<a id="tocSanswersummaries"></a>
<a id="tocsanswersummaries"></a>

```json
[
  {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "Choices": [
      {
        "ChoiceId": "string",
        "Title": "string",
        "Description": "string",
        "HelpfulResource": {
          "DisplayText": {},
          "Url": {}
        },
        "ImprovementPlan": {
          "DisplayText": {},
          "Url": {}
        },
        "AdditionalResources": {}
      }
    ],
    "SelectedChoices": [
      "string"
    ],
    "ChoiceAnswerSummaries": {},
    "IsApplicable": true,
    "Risk": "UNANSWERED",
    "Reason": {}
  }
]
```

List of answer summaries of lens review in a workload.

<h2 id="tocS_ChoiceAnswerSummaries">ChoiceAnswerSummaries</h2>
<!-- backwards compatibility -->
<a id="schemachoiceanswersummaries"></a>
<a id="schema_ChoiceAnswerSummaries"></a>
<a id="tocSchoiceanswersummaries"></a>
<a id="tocschoiceanswersummaries"></a>

```json
[
  {
    "ChoiceId": "string",
    "Status": {},
    "Reason": {}
  }
]
```

<h2 id="tocS_WorkloadId">WorkloadId</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadid"></a>
<a id="schema_WorkloadId"></a>
<a id="tocSworkloadid"></a>
<a id="tocsworkloadid"></a>

```json
"string"
```

The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.

<h2 id="tocS_LensAliases">LensAliases</h2>
<!-- backwards compatibility -->
<a id="schemalensaliases"></a>
<a id="schema_LensAliases"></a>
<a id="tocSlensaliases"></a>
<a id="tocslensaliases"></a>

```json
[
  "string"
]
```

<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>

<h2 id="tocS_AssociateLensesInput">AssociateLensesInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelensesinput"></a>
<a id="schema_AssociateLensesInput"></a>
<a id="tocSassociatelensesinput"></a>
<a id="tocsassociatelensesinput"></a>

```json
{
  "LensAliases": [
    "string"
  ]
}
```

Input to associate lens reviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAliases|[LensAliases](#schemalensaliases)|true|none|<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>|

<h2 id="tocS_Base64String">Base64String</h2>
<!-- backwards compatibility -->
<a id="schemabase64string"></a>
<a id="schema_Base64String"></a>
<a id="tocSbase64string"></a>
<a id="tocsbase64string"></a>

```json
"string"
```

<p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>

<h2 id="tocS_ChoiceTitle">ChoiceTitle</h2>
<!-- backwards compatibility -->
<a id="schemachoicetitle"></a>
<a id="schema_ChoiceTitle"></a>
<a id="tocSchoicetitle"></a>
<a id="tocschoicetitle"></a>

```json
"string"
```

The title of a choice.

<h2 id="tocS_BestPractice">BestPractice</h2>
<!-- backwards compatibility -->
<a id="schemabestpractice"></a>
<a id="schema_BestPractice"></a>
<a id="tocSbestpractice"></a>
<a id="tocsbestpractice"></a>

```json
{
  "ChoiceId": "string",
  "ChoiceTitle": "string"
}
```

A best practice, or question choice, that has been identified as a risk in this question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|ChoiceTitle|[ChoiceTitle](#schemachoicetitle)|false|none|The title of a choice.|

<h2 id="tocS_BestPractices">BestPractices</h2>
<!-- backwards compatibility -->
<a id="schemabestpractices"></a>
<a id="schema_BestPractices"></a>
<a id="tocSbestpractices"></a>
<a id="tocsbestpractices"></a>

```json
[
  {
    "ChoiceId": "string",
    "ChoiceTitle": "string"
  }
]
```

<h2 id="tocS_CheckDescription">CheckDescription</h2>
<!-- backwards compatibility -->
<a id="schemacheckdescription"></a>
<a id="schema_CheckDescription"></a>
<a id="tocScheckdescription"></a>
<a id="tocscheckdescription"></a>

```json
"string"
```

<h2 id="tocS_CheckId">CheckId</h2>
<!-- backwards compatibility -->
<a id="schemacheckid"></a>
<a id="schema_CheckId"></a>
<a id="tocScheckid"></a>
<a id="tocscheckid"></a>

```json
"string"
```

<h2 id="tocS_CheckName">CheckName</h2>
<!-- backwards compatibility -->
<a id="schemacheckname"></a>
<a id="schema_CheckName"></a>
<a id="tocScheckname"></a>
<a id="tocscheckname"></a>

```json
"string"
```

<h2 id="tocS_CheckProvider">CheckProvider</h2>
<!-- backwards compatibility -->
<a id="schemacheckprovider"></a>
<a id="schema_CheckProvider"></a>
<a id="tocScheckprovider"></a>
<a id="tocscheckprovider"></a>

```json
"TRUSTED_ADVISOR"
```

<h2 id="tocS_LensArn">LensArn</h2>
<!-- backwards compatibility -->
<a id="schemalensarn"></a>
<a id="schema_LensArn"></a>
<a id="tocSlensarn"></a>
<a id="tocslensarn"></a>

```json
"string"
```

<h2 id="tocS_CheckStatus">CheckStatus</h2>
<!-- backwards compatibility -->
<a id="schemacheckstatus"></a>
<a id="schema_CheckStatus"></a>
<a id="tocScheckstatus"></a>
<a id="tocscheckstatus"></a>

```json
"OKAY"
```

<h2 id="tocS_FlaggedResources">FlaggedResources</h2>
<!-- backwards compatibility -->
<a id="schemaflaggedresources"></a>
<a id="schema_FlaggedResources"></a>
<a id="tocSflaggedresources"></a>
<a id="tocsflaggedresources"></a>

```json
1
```

<h2 id="tocS_CheckFailureReason">CheckFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemacheckfailurereason"></a>
<a id="schema_CheckFailureReason"></a>
<a id="tocScheckfailurereason"></a>
<a id="tocscheckfailurereason"></a>

```json
"ASSUME_ROLE_ERROR"
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

The date and time recorded.

<h2 id="tocS_CheckDetail">CheckDetail</h2>
<!-- backwards compatibility -->
<a id="schemacheckdetail"></a>
<a id="schema_CheckDetail"></a>
<a id="tocScheckdetail"></a>
<a id="tocscheckdetail"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "Provider": {},
  "LensArn": {},
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string",
  "Status": {},
  "AccountId": "string",
  "FlaggedResources": {},
  "Reason": {},
  "UpdatedAt": "1970-01-01T00:00:00Z"
}
```

Account details for a Well-Architected best practice in relation to Trusted Advisor checks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Provider|object|false|none|none|
|LensArn|object|false|none|none|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|Status|object|false|none|none|
|AccountId|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|FlaggedResources|object|false|none|none|
|Reason|object|false|none|none|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|

<h2 id="tocS_CheckDetails">CheckDetails</h2>
<!-- backwards compatibility -->
<a id="schemacheckdetails"></a>
<a id="schema_CheckDetails"></a>
<a id="tocScheckdetails"></a>
<a id="tocscheckdetails"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "Provider": {},
    "LensArn": {},
    "PillarId": "string",
    "QuestionId": "string",
    "ChoiceId": "string",
    "Status": {},
    "AccountId": "string",
    "FlaggedResources": {},
    "Reason": {},
    "UpdatedAt": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_CheckSummary">CheckSummary</h2>
<!-- backwards compatibility -->
<a id="schemachecksummary"></a>
<a id="schema_CheckSummary"></a>
<a id="tocSchecksummary"></a>
<a id="tocschecksummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Provider": {},
  "Description": {},
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "LensArn": {},
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string",
  "Status": {},
  "AccountSummary": {
    "property1": 1,
    "property2": 1
  }
}
```

Trusted Advisor check summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Provider|object|false|none|none|
|Description|object|false|none|none|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|LensArn|object|false|none|none|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|Status|object|false|none|none|
|AccountSummary|object|false|none|none|

<h2 id="tocS_CheckSummaries">CheckSummaries</h2>
<!-- backwards compatibility -->
<a id="schemachecksummaries"></a>
<a id="schema_CheckSummaries"></a>
<a id="tocSchecksummaries"></a>
<a id="tocschecksummaries"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Provider": {},
    "Description": {},
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "LensArn": {},
    "PillarId": "string",
    "QuestionId": "string",
    "ChoiceId": "string",
    "Status": {},
    "AccountSummary": {
      "property1": 1,
      "property2": 1
    }
  }
]
```

<h2 id="tocS_ChoiceDescription">ChoiceDescription</h2>
<!-- backwards compatibility -->
<a id="schemachoicedescription"></a>
<a id="schema_ChoiceDescription"></a>
<a id="tocSchoicedescription"></a>
<a id="tocschoicedescription"></a>

```json
"string"
```

The description of a choice.

<h2 id="tocS_ChoiceContent">ChoiceContent</h2>
<!-- backwards compatibility -->
<a id="schemachoicecontent"></a>
<a id="schema_ChoiceContent"></a>
<a id="tocSchoicecontent"></a>
<a id="tocschoicecontent"></a>

```json
{
  "DisplayText": {},
  "Url": {}
}
```

The choice content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayText|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_Choice">Choice</h2>
<!-- backwards compatibility -->
<a id="schemachoice"></a>
<a id="schema_Choice"></a>
<a id="tocSchoice"></a>
<a id="tocschoice"></a>

```json
{
  "ChoiceId": "string",
  "Title": "string",
  "Description": "string",
  "HelpfulResource": {
    "DisplayText": {},
    "Url": {}
  },
  "ImprovementPlan": {
    "DisplayText": {},
    "Url": {}
  },
  "AdditionalResources": {}
}
```

A choice available to answer question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|Title|[ChoiceTitle](#schemachoicetitle)|false|none|The title of a choice.|
|Description|[ChoiceDescription](#schemachoicedescription)|false|none|The description of a choice.|
|HelpfulResource|object|false|none|none|
|ImprovementPlan|object|false|none|none|
|AdditionalResources|object|false|none|none|

<h2 id="tocS_ChoiceStatus">ChoiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemachoicestatus"></a>
<a id="schema_ChoiceStatus"></a>
<a id="tocSchoicestatus"></a>
<a id="tocschoicestatus"></a>

```json
"SELECTED"
```

<h2 id="tocS_ChoiceReason">ChoiceReason</h2>
<!-- backwards compatibility -->
<a id="schemachoicereason"></a>
<a id="schema_ChoiceReason"></a>
<a id="tocSchoicereason"></a>
<a id="tocschoicereason"></a>

```json
"OUT_OF_SCOPE"
```

<h2 id="tocS_ChoiceNotes">ChoiceNotes</h2>
<!-- backwards compatibility -->
<a id="schemachoicenotes"></a>
<a id="schema_ChoiceNotes"></a>
<a id="tocSchoicenotes"></a>
<a id="tocschoicenotes"></a>

```json
"string"
```

<h2 id="tocS_ChoiceAnswer">ChoiceAnswer</h2>
<!-- backwards compatibility -->
<a id="schemachoiceanswer"></a>
<a id="schema_ChoiceAnswer"></a>
<a id="tocSchoiceanswer"></a>
<a id="tocschoiceanswer"></a>

```json
{
  "ChoiceId": "string",
  "Status": {},
  "Reason": {},
  "Notes": {}
}
```

A choice that has been answered on a question in your workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|Status|object|false|none|none|
|Reason|object|false|none|none|
|Notes|object|false|none|none|

<h2 id="tocS_ChoiceAnswerSummary">ChoiceAnswerSummary</h2>
<!-- backwards compatibility -->
<a id="schemachoiceanswersummary"></a>
<a id="schema_ChoiceAnswerSummary"></a>
<a id="tocSchoiceanswersummary"></a>
<a id="tocschoiceanswersummary"></a>

```json
{
  "ChoiceId": "string",
  "Status": {},
  "Reason": {}
}
```

A choice summary that has been answered on a question in your workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|Status|object|false|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_ChoiceContentDisplayText">ChoiceContentDisplayText</h2>
<!-- backwards compatibility -->
<a id="schemachoicecontentdisplaytext"></a>
<a id="schema_ChoiceContentDisplayText"></a>
<a id="tocSchoicecontentdisplaytext"></a>
<a id="tocschoicecontentdisplaytext"></a>

```json
"string"
```

<h2 id="tocS_ChoiceContentUrl">ChoiceContentUrl</h2>
<!-- backwards compatibility -->
<a id="schemachoicecontenturl"></a>
<a id="schema_ChoiceContentUrl"></a>
<a id="tocSchoicecontenturl"></a>
<a id="tocschoicecontenturl"></a>

```json
"string"
```

<h2 id="tocS_ChoiceImprovementPlan">ChoiceImprovementPlan</h2>
<!-- backwards compatibility -->
<a id="schemachoiceimprovementplan"></a>
<a id="schema_ChoiceImprovementPlan"></a>
<a id="tocSchoiceimprovementplan"></a>
<a id="tocschoiceimprovementplan"></a>

```json
{
  "ChoiceId": "string",
  "DisplayText": {},
  "ImprovementPlanUrl": "string"
}
```

The choice level improvement plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChoiceId|[ChoiceId](#schemachoiceid)|false|none|The ID of a choice.|
|DisplayText|object|false|none|none|
|ImprovementPlanUrl|[ImprovementPlanUrl](#schemaimprovementplanurl)|false|none|<p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>|

<h2 id="tocS_ChoiceImprovementPlans">ChoiceImprovementPlans</h2>
<!-- backwards compatibility -->
<a id="schemachoiceimprovementplans"></a>
<a id="schema_ChoiceImprovementPlans"></a>
<a id="tocSchoiceimprovementplans"></a>
<a id="tocschoiceimprovementplans"></a>

```json
[
  {
    "ChoiceId": "string",
    "DisplayText": {},
    "ImprovementPlanUrl": "string"
  }
]
```

<h2 id="tocS_ChoiceUpdates">ChoiceUpdates</h2>
<!-- backwards compatibility -->
<a id="schemachoiceupdates"></a>
<a id="schema_ChoiceUpdates"></a>
<a id="tocSchoiceupdates"></a>
<a id="tocschoiceupdates"></a>

```json
{
  "property1": {
    "Status": {},
    "Reason": {},
    "Notes": {}
  },
  "property2": {
    "Status": {},
    "Reason": {},
    "Notes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ChoiceUpdate](#schemachoiceupdate)|false|none|A list of choices to be updated.|

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"WORKLOAD"
```

<h2 id="tocS_RiskCounts">RiskCounts</h2>
<!-- backwards compatibility -->
<a id="schemariskcounts"></a>
<a id="schema_RiskCounts"></a>
<a id="tocSriskcounts"></a>
<a id="tocsriskcounts"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

A map from risk names to the count of how many questions have that rating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Count](#schemacount)|false|none|A non-negative integer that denotes how many.|

<h2 id="tocS_WorkloadName">WorkloadName</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadname"></a>
<a id="schema_WorkloadName"></a>
<a id="tocSworkloadname"></a>
<a id="tocsworkloadname"></a>

```json
"string"
```

<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>

<h2 id="tocS_WorkloadArn">WorkloadArn</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadarn"></a>
<a id="schema_WorkloadArn"></a>
<a id="tocSworkloadarn"></a>
<a id="tocsworkloadarn"></a>

```json
"string"
```

The ARN for the workload.

<h2 id="tocS_LensMetrics">LensMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalensmetrics"></a>
<a id="schema_LensMetrics"></a>
<a id="tocSlensmetrics"></a>
<a id="tocslensmetrics"></a>

```json
[
  {
    "LensArn": {},
    "Pillars": {},
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h2 id="tocS_LensesAppliedCount">LensesAppliedCount</h2>
<!-- backwards compatibility -->
<a id="schemalensesappliedcount"></a>
<a id="schema_LensesAppliedCount"></a>
<a id="tocSlensesappliedcount"></a>
<a id="tocslensesappliedcount"></a>

```json
0
```

<h2 id="tocS_ConsolidatedReportMetric">ConsolidatedReportMetric</h2>
<!-- backwards compatibility -->
<a id="schemaconsolidatedreportmetric"></a>
<a id="schema_ConsolidatedReportMetric"></a>
<a id="tocSconsolidatedreportmetric"></a>
<a id="tocsconsolidatedreportmetric"></a>

```json
{
  "MetricType": {},
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  },
  "WorkloadId": "string",
  "WorkloadName": "string",
  "WorkloadArn": "string",
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "Lenses": {},
  "LensesAppliedCount": {}
}
```

A metric that contributes to the consolidated report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricType|object|false|none|none|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|WorkloadArn|[WorkloadArn](#schemaworkloadarn)|false|none|The ARN for the workload.|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|Lenses|object|false|none|none|
|LensesAppliedCount|object|false|none|none|

<h2 id="tocS_ConsolidatedReportMetrics">ConsolidatedReportMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaconsolidatedreportmetrics"></a>
<a id="schema_ConsolidatedReportMetrics"></a>
<a id="tocSconsolidatedreportmetrics"></a>
<a id="tocsconsolidatedreportmetrics"></a>

```json
[
  {
    "MetricType": {},
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "WorkloadId": "string",
    "WorkloadName": "string",
    "WorkloadArn": "string",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Lenses": {},
    "LensesAppliedCount": {}
  }
]
```

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

A non-negative integer that denotes how many.

<h2 id="tocS_SharedWith">SharedWith</h2>
<!-- backwards compatibility -->
<a id="schemasharedwith"></a>
<a id="schema_SharedWith"></a>
<a id="tocSsharedwith"></a>
<a id="tocssharedwith"></a>

```json
"stringstring"
```

The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.

<h2 id="tocS_CreateLensShareInput">CreateLensShareInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelensshareinput"></a>
<a id="schema_CreateLensShareInput"></a>
<a id="tocScreatelensshareinput"></a>
<a id="tocscreatelensshareinput"></a>

```json
{
  "SharedWith": "stringstring",
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedWith|[SharedWith](#schemasharedwith)|true|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

<h2 id="tocS_ShareId">ShareId</h2>
<!-- backwards compatibility -->
<a id="schemashareid"></a>
<a id="schema_ShareId"></a>
<a id="tocSshareid"></a>
<a id="tocsshareid"></a>

```json
"string"
```

The ID associated with the workload share.

<h2 id="tocS_LensVersion">LensVersion</h2>
<!-- backwards compatibility -->
<a id="schemalensversion"></a>
<a id="schema_LensVersion"></a>
<a id="tocSlensversion"></a>
<a id="tocslensversion"></a>

```json
"string"
```

<h2 id="tocS_IsMajorVersion">IsMajorVersion</h2>
<!-- backwards compatibility -->
<a id="schemaismajorversion"></a>
<a id="schema_IsMajorVersion"></a>
<a id="tocSismajorversion"></a>
<a id="tocsismajorversion"></a>

```json
true
```

<h2 id="tocS_CreateLensVersionInput">CreateLensVersionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelensversioninput"></a>
<a id="schema_CreateLensVersionInput"></a>
<a id="tocScreatelensversioninput"></a>
<a id="tocscreatelensversioninput"></a>

```json
{
  "LensVersion": {},
  "IsMajorVersion": {},
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensVersion|object|true|none|none|
|IsMajorVersion|object|false|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

<h2 id="tocS_MilestoneName">MilestoneName</h2>
<!-- backwards compatibility -->
<a id="schemamilestonename"></a>
<a id="schema_MilestoneName"></a>
<a id="tocSmilestonename"></a>
<a id="tocsmilestonename"></a>

```json
"string"
```

<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>

<h2 id="tocS_CreateMilestoneInput">CreateMilestoneInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemilestoneinput"></a>
<a id="schema_CreateMilestoneInput"></a>
<a id="tocScreatemilestoneinput"></a>
<a id="tocscreatemilestoneinput"></a>

```json
{
  "MilestoneName": "string",
  "ClientRequestToken": "string"
}
```

Input for milestone creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MilestoneName|[MilestoneName](#schemamilestonename)|true|none|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

<h2 id="tocS_MilestoneNumber">MilestoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemamilestonenumber"></a>
<a id="schema_MilestoneNumber"></a>
<a id="tocSmilestonenumber"></a>
<a id="tocsmilestonenumber"></a>

```json
1
```

<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>

<h2 id="tocS_WorkloadDescription">WorkloadDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkloaddescription"></a>
<a id="schema_WorkloadDescription"></a>
<a id="tocSworkloaddescription"></a>
<a id="tocsworkloaddescription"></a>

```json
"string"
```

The description for the workload.

<h2 id="tocS_WorkloadEnvironment">WorkloadEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadenvironment"></a>
<a id="schema_WorkloadEnvironment"></a>
<a id="tocSworkloadenvironment"></a>
<a id="tocsworkloadenvironment"></a>

```json
"PRODUCTION"
```

The environment for the workload.

<h2 id="tocS_WorkloadAccountIds">WorkloadAccountIds</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadaccountids"></a>
<a id="schema_WorkloadAccountIds"></a>
<a id="tocSworkloadaccountids"></a>
<a id="tocsworkloadaccountids"></a>

```json
[
  "string"
]
```

The list of Amazon Web Services account IDs associated with the workload.

<h2 id="tocS_WorkloadAwsRegions">WorkloadAwsRegions</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadawsregions"></a>
<a id="schema_WorkloadAwsRegions"></a>
<a id="tocSworkloadawsregions"></a>
<a id="tocsworkloadawsregions"></a>

```json
[
  "string"
]
```

The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.

<h2 id="tocS_WorkloadNonAwsRegions">WorkloadNonAwsRegions</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadnonawsregions"></a>
<a id="schema_WorkloadNonAwsRegions"></a>
<a id="tocSworkloadnonawsregions"></a>
<a id="tocsworkloadnonawsregions"></a>

```json
[
  "string"
]
```

 The list of non-Amazon Web Services Regions associated with the workload.

<h2 id="tocS_WorkloadPillarPriorities">WorkloadPillarPriorities</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadpillarpriorities"></a>
<a id="schema_WorkloadPillarPriorities"></a>
<a id="tocSworkloadpillarpriorities"></a>
<a id="tocsworkloadpillarpriorities"></a>

```json
[
  "string"
]
```

The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.

<h2 id="tocS_WorkloadArchitecturalDesign">WorkloadArchitecturalDesign</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadarchitecturaldesign"></a>
<a id="schema_WorkloadArchitecturalDesign"></a>
<a id="tocSworkloadarchitecturaldesign"></a>
<a id="tocsworkloadarchitecturaldesign"></a>

```json
"string"
```

The URL of the architectural design for the workload.

<h2 id="tocS_WorkloadReviewOwner">WorkloadReviewOwner</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadreviewowner"></a>
<a id="schema_WorkloadReviewOwner"></a>
<a id="tocSworkloadreviewowner"></a>
<a id="tocsworkloadreviewowner"></a>

```json
"string"
```

The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.

<h2 id="tocS_WorkloadIndustryType">WorkloadIndustryType</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadindustrytype"></a>
<a id="schema_WorkloadIndustryType"></a>
<a id="tocSworkloadindustrytype"></a>
<a id="tocsworkloadindustrytype"></a>

```json
"string"
```

<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>

<h2 id="tocS_WorkloadIndustry">WorkloadIndustry</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadindustry"></a>
<a id="schema_WorkloadIndustry"></a>
<a id="tocSworkloadindustry"></a>
<a id="tocsworkloadindustry"></a>

```json
"string"
```

The industry for the workload.

<h2 id="tocS_WorkloadLenses">WorkloadLenses</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadlenses"></a>
<a id="schema_WorkloadLenses"></a>
<a id="tocSworkloadlenses"></a>
<a id="tocsworkloadlenses"></a>

```json
[
  "string"
]
```

The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.

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

<h2 id="tocS_WorkloadDiscoveryConfig">WorkloadDiscoveryConfig</h2>
<!-- backwards compatibility -->
<a id="schemaworkloaddiscoveryconfig"></a>
<a id="schema_WorkloadDiscoveryConfig"></a>
<a id="tocSworkloaddiscoveryconfig"></a>
<a id="tocsworkloaddiscoveryconfig"></a>

```json
{
  "TrustedAdvisorIntegrationStatus": {}
}
```

Discovery configuration associated to the workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrustedAdvisorIntegrationStatus|object|false|none|none|

<h2 id="tocS_WorkloadApplications">WorkloadApplications</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadapplications"></a>
<a id="schema_WorkloadApplications"></a>
<a id="tocSworkloadapplications"></a>
<a id="tocsworkloadapplications"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateWorkloadInput">CreateWorkloadInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkloadinput"></a>
<a id="schema_CreateWorkloadInput"></a>
<a id="tocScreateworkloadinput"></a>
<a id="tocscreateworkloadinput"></a>

```json
{
  "WorkloadName": "string",
  "Description": "string",
  "Environment": "PRODUCTION",
  "AccountIds": [
    "string"
  ],
  "AwsRegions": [
    "string"
  ],
  "NonAwsRegions": [
    "string"
  ],
  "PillarPriorities": [
    "string"
  ],
  "ArchitecturalDesign": "string",
  "ReviewOwner": "string",
  "IndustryType": "string",
  "Industry": "string",
  "Lenses": [
    "string"
  ],
  "Notes": "string",
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "DiscoveryConfig": {
    "TrustedAdvisorIntegrationStatus": {}
  },
  "Applications": {}
}
```

Input for workload creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadName|[WorkloadName](#schemaworkloadname)|true|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|Description|[WorkloadDescription](#schemaworkloaddescription)|true|none|The description for the workload.|
|Environment|[WorkloadEnvironment](#schemaworkloadenvironment)|true|none|The environment for the workload.|
|AccountIds|[WorkloadAccountIds](#schemaworkloadaccountids)|false|none|The list of Amazon Web Services account IDs associated with the workload.|
|AwsRegions|[WorkloadAwsRegions](#schemaworkloadawsregions)|false|none|The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.|
|NonAwsRegions|[WorkloadNonAwsRegions](#schemaworkloadnonawsregions)|false|none| The list of non-Amazon Web Services Regions associated with the workload.|
|PillarPriorities|[WorkloadPillarPriorities](#schemaworkloadpillarpriorities)|false|none|The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.|
|ArchitecturalDesign|[WorkloadArchitecturalDesign](#schemaworkloadarchitecturaldesign)|false|none|The URL of the architectural design for the workload.|
|ReviewOwner|[WorkloadReviewOwner](#schemaworkloadreviewowner)|false|none|The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.|
|IndustryType|[WorkloadIndustryType](#schemaworkloadindustrytype)|false|none|<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>|
|Industry|[WorkloadIndustry](#schemaworkloadindustry)|false|none|The industry for the workload.|
|Lenses|[WorkloadLenses](#schemaworkloadlenses)|true|none|The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|
|Tags|object|false|none|none|
|DiscoveryConfig|object|false|none|none|
|Applications|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Environment|PRODUCTION|
|Environment|PREPRODUCTION|

<h2 id="tocS_PermissionType">PermissionType</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontype"></a>
<a id="schema_PermissionType"></a>
<a id="tocSpermissiontype"></a>
<a id="tocspermissiontype"></a>

```json
"READONLY"
```

Permission granted on a workload share.

<h2 id="tocS_CreateWorkloadShareInput">CreateWorkloadShareInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkloadshareinput"></a>
<a id="schema_CreateWorkloadShareInput"></a>
<a id="tocScreateworkloadshareinput"></a>
<a id="tocscreateworkloadshareinput"></a>

```json
{
  "SharedWith": "stringstring",
  "PermissionType": "READONLY",
  "ClientRequestToken": "string"
}
```

Input for Create Workload Share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharedWith|[SharedWith](#schemasharedwith)|true|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|PermissionType|[PermissionType](#schemapermissiontype)|true|none|Permission granted on a workload share.|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionType|READONLY|
|PermissionType|CONTRIBUTOR|

<h2 id="tocS_LensStatusType">LensStatusType</h2>
<!-- backwards compatibility -->
<a id="schemalensstatustype"></a>
<a id="schema_LensStatusType"></a>
<a id="tocSlensstatustype"></a>
<a id="tocslensstatustype"></a>

```json
"ALL"
```

<h2 id="tocS_DeleteLensInput">DeleteLensInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelensinput"></a>
<a id="schema_DeleteLensInput"></a>
<a id="tocSdeletelensinput"></a>
<a id="tocsdeletelensinput"></a>

```json
{}
```

<h2 id="tocS_DeleteLensShareInput">DeleteLensShareInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelensshareinput"></a>
<a id="schema_DeleteLensShareInput"></a>
<a id="tocSdeletelensshareinput"></a>
<a id="tocsdeletelensshareinput"></a>

```json
{}
```

<h2 id="tocS_DeleteWorkloadInput">DeleteWorkloadInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkloadinput"></a>
<a id="schema_DeleteWorkloadInput"></a>
<a id="tocSdeleteworkloadinput"></a>
<a id="tocsdeleteworkloadinput"></a>

```json
{}
```

Input for workload deletion.

<h2 id="tocS_DeleteWorkloadShareInput">DeleteWorkloadShareInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkloadshareinput"></a>
<a id="schema_DeleteWorkloadShareInput"></a>
<a id="tocSdeleteworkloadshareinput"></a>
<a id="tocsdeleteworkloadshareinput"></a>

```json
{}
```

Input for Delete Workload Share

<h2 id="tocS_DifferenceStatus">DifferenceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadifferencestatus"></a>
<a id="schema_DifferenceStatus"></a>
<a id="tocSdifferencestatus"></a>
<a id="tocsdifferencestatus"></a>

```json
"UPDATED"
```

<h2 id="tocS_DisassociateLensesInput">DisassociateLensesInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatelensesinput"></a>
<a id="schema_DisassociateLensesInput"></a>
<a id="tocSdisassociatelensesinput"></a>
<a id="tocsdisassociatelensesinput"></a>

```json
{
  "LensAliases": [
    "string"
  ]
}
```

Input to disassociate lens reviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAliases|[LensAliases](#schemalensaliases)|true|none|<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>|

<h2 id="tocS_ExportLensInput">ExportLensInput</h2>
<!-- backwards compatibility -->
<a id="schemaexportlensinput"></a>
<a id="schema_ExportLensInput"></a>
<a id="tocSexportlensinput"></a>
<a id="tocsexportlensinput"></a>

```json
{}
```

<h2 id="tocS_LensJSON">LensJSON</h2>
<!-- backwards compatibility -->
<a id="schemalensjson"></a>
<a id="schema_LensJSON"></a>
<a id="tocSlensjson"></a>
<a id="tocslensjson"></a>

```json
"string"
```

<h2 id="tocS_GetAnswerInput">GetAnswerInput</h2>
<!-- backwards compatibility -->
<a id="schemagetanswerinput"></a>
<a id="schema_GetAnswerInput"></a>
<a id="tocSgetanswerinput"></a>
<a id="tocsgetanswerinput"></a>

```json
{}
```

Input to get answer.

<h2 id="tocS_ReportFormat">ReportFormat</h2>
<!-- backwards compatibility -->
<a id="schemareportformat"></a>
<a id="schema_ReportFormat"></a>
<a id="tocSreportformat"></a>
<a id="tocsreportformat"></a>

```json
"PDF"
```

<h2 id="tocS_IncludeSharedResources">IncludeSharedResources</h2>
<!-- backwards compatibility -->
<a id="schemaincludesharedresources"></a>
<a id="schema_IncludeSharedResources"></a>
<a id="tocSincludesharedresources"></a>
<a id="tocsincludesharedresources"></a>

```json
true
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

The token to use to retrieve the next set of results.

<h2 id="tocS_GetConsolidatedReportMaxResults">GetConsolidatedReportMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetconsolidatedreportmaxresults"></a>
<a id="schema_GetConsolidatedReportMaxResults"></a>
<a id="tocSgetconsolidatedreportmaxresults"></a>
<a id="tocsgetconsolidatedreportmaxresults"></a>

```json
1
```

<h2 id="tocS_GetConsolidatedReportInput">GetConsolidatedReportInput</h2>
<!-- backwards compatibility -->
<a id="schemagetconsolidatedreportinput"></a>
<a id="schema_GetConsolidatedReportInput"></a>
<a id="tocSgetconsolidatedreportinput"></a>
<a id="tocsgetconsolidatedreportinput"></a>

```json
{}
```

<h2 id="tocS_GetLensInput">GetLensInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensinput"></a>
<a id="schema_GetLensInput"></a>
<a id="tocSgetlensinput"></a>
<a id="tocsgetlensinput"></a>

```json
{}
```

<h2 id="tocS_Lens">Lens</h2>
<!-- backwards compatibility -->
<a id="schemalens"></a>
<a id="schema_Lens"></a>
<a id="tocSlens"></a>
<a id="tocslens"></a>

```json
{
  "LensArn": {},
  "LensVersion": {},
  "Name": "string",
  "Description": "string",
  "Owner": {},
  "ShareInvitationId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A lens return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensArn|object|false|none|none|
|LensVersion|object|false|none|none|
|Name|[LensName](#schemalensname)|false|none|The full name of the lens.|
|Description|[LensDescription](#schemalensdescription)|false|none|The description of the lens.|
|Owner|object|false|none|none|
|ShareInvitationId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetLensReviewInput">GetLensReviewInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensreviewinput"></a>
<a id="schema_GetLensReviewInput"></a>
<a id="tocSgetlensreviewinput"></a>
<a id="tocsgetlensreviewinput"></a>

```json
{}
```

Input to get lens review.

<h2 id="tocS_LensReview">LensReview</h2>
<!-- backwards compatibility -->
<a id="schemalensreview"></a>
<a id="schema_LensReview"></a>
<a id="tocSlensreview"></a>
<a id="tocslensreview"></a>

```json
{
  "LensAlias": "string",
  "LensArn": {},
  "LensVersion": {},
  "LensName": "string",
  "LensStatus": {},
  "PillarReviewSummaries": [
    {
      "PillarId": "string",
      "PillarName": "string",
      "Notes": "string",
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  },
  "NextToken": "string"
}
```

A lens review of a question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|LensVersion|object|false|none|none|
|LensName|[LensName](#schemalensname)|false|none|The full name of the lens.|
|LensStatus|object|false|none|none|
|PillarReviewSummaries|[PillarReviewSummaries](#schemapillarreviewsummaries)|false|none|List of pillar review summaries of lens review in a workload.|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|

<h2 id="tocS_GetLensReviewReportInput">GetLensReviewReportInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensreviewreportinput"></a>
<a id="schema_GetLensReviewReportInput"></a>
<a id="tocSgetlensreviewreportinput"></a>
<a id="tocsgetlensreviewreportinput"></a>

```json
{}
```

Input to get lens review report.

<h2 id="tocS_LensReviewReport">LensReviewReport</h2>
<!-- backwards compatibility -->
<a id="schemalensreviewreport"></a>
<a id="schema_LensReviewReport"></a>
<a id="tocSlensreviewreport"></a>
<a id="tocslensreviewreport"></a>

```json
{
  "LensAlias": "string",
  "LensArn": {},
  "Base64String": "string"
}
```

A report of a lens review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|Base64String|[Base64String](#schemabase64string)|false|none|<p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>|

<h2 id="tocS_GetLensVersionDifferenceInput">GetLensVersionDifferenceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlensversiondifferenceinput"></a>
<a id="schema_GetLensVersionDifferenceInput"></a>
<a id="tocSgetlensversiondifferenceinput"></a>
<a id="tocsgetlensversiondifferenceinput"></a>

```json
{}
```

<h2 id="tocS_VersionDifferences">VersionDifferences</h2>
<!-- backwards compatibility -->
<a id="schemaversiondifferences"></a>
<a id="schema_VersionDifferences"></a>
<a id="tocSversiondifferences"></a>
<a id="tocsversiondifferences"></a>

```json
{
  "PillarDifferences": {}
}
```

The differences between the base and latest versions of the lens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PillarDifferences|object|false|none|none|

<h2 id="tocS_GetMilestoneInput">GetMilestoneInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmilestoneinput"></a>
<a id="schema_GetMilestoneInput"></a>
<a id="tocSgetmilestoneinput"></a>
<a id="tocsgetmilestoneinput"></a>

```json
{}
```

Input to get a milestone.

<h2 id="tocS_Milestone">Milestone</h2>
<!-- backwards compatibility -->
<a id="schemamilestone"></a>
<a id="schema_Milestone"></a>
<a id="tocSmilestone"></a>
<a id="tocsmilestone"></a>

```json
{
  "MilestoneNumber": 1,
  "MilestoneName": "string",
  "RecordedAt": "1970-01-01T00:00:00Z",
  "Workload": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Description": "string",
    "Environment": "PRODUCTION",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "AccountIds": [
      "string"
    ],
    "AwsRegions": [
      "string"
    ],
    "NonAwsRegions": [
      "string"
    ],
    "ArchitecturalDesign": "string",
    "ReviewOwner": "string",
    "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
    "IsReviewOwnerUpdateAcknowledged": {},
    "IndustryType": "string",
    "Industry": "string",
    "Notes": "string",
    "ImprovementStatus": "NOT_APPLICABLE",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "PillarPriorities": [
      "string"
    ],
    "Lenses": [
      "string"
    ],
    "Owner": "string",
    "ShareInvitationId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DiscoveryConfig": {
      "TrustedAdvisorIntegrationStatus": {}
    },
    "Applications": {}
  }
}
```

A milestone return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|MilestoneName|[MilestoneName](#schemamilestonename)|false|none|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|RecordedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|Workload|[Workload](#schemaworkload)|false|none|A workload return object.|

<h2 id="tocS_GetWorkloadInput">GetWorkloadInput</h2>
<!-- backwards compatibility -->
<a id="schemagetworkloadinput"></a>
<a id="schema_GetWorkloadInput"></a>
<a id="tocSgetworkloadinput"></a>
<a id="tocsgetworkloadinput"></a>

```json
{}
```

Input to get a workload.

<h2 id="tocS_Workload">Workload</h2>
<!-- backwards compatibility -->
<a id="schemaworkload"></a>
<a id="schema_Workload"></a>
<a id="tocSworkload"></a>
<a id="tocsworkload"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadArn": "string",
  "WorkloadName": "string",
  "Description": "string",
  "Environment": "PRODUCTION",
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "AccountIds": [
    "string"
  ],
  "AwsRegions": [
    "string"
  ],
  "NonAwsRegions": [
    "string"
  ],
  "ArchitecturalDesign": "string",
  "ReviewOwner": "string",
  "ReviewRestrictionDate": "1970-01-01T00:00:00Z",
  "IsReviewOwnerUpdateAcknowledged": {},
  "IndustryType": "string",
  "Industry": "string",
  "Notes": "string",
  "ImprovementStatus": "NOT_APPLICABLE",
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  },
  "PillarPriorities": [
    "string"
  ],
  "Lenses": [
    "string"
  ],
  "Owner": "string",
  "ShareInvitationId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "DiscoveryConfig": {
    "TrustedAdvisorIntegrationStatus": {}
  },
  "Applications": {}
}
```

A workload return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadArn|[WorkloadArn](#schemaworkloadarn)|false|none|The ARN for the workload.|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|Description|[WorkloadDescription](#schemaworkloaddescription)|false|none|The description for the workload.|
|Environment|[WorkloadEnvironment](#schemaworkloadenvironment)|false|none|The environment for the workload.|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|AccountIds|[WorkloadAccountIds](#schemaworkloadaccountids)|false|none|The list of Amazon Web Services account IDs associated with the workload.|
|AwsRegions|[WorkloadAwsRegions](#schemaworkloadawsregions)|false|none|The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.|
|NonAwsRegions|[WorkloadNonAwsRegions](#schemaworkloadnonawsregions)|false|none| The list of non-Amazon Web Services Regions associated with the workload.|
|ArchitecturalDesign|[WorkloadArchitecturalDesign](#schemaworkloadarchitecturaldesign)|false|none|The URL of the architectural design for the workload.|
|ReviewOwner|[WorkloadReviewOwner](#schemaworkloadreviewowner)|false|none|The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.|
|ReviewRestrictionDate|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|IsReviewOwnerUpdateAcknowledged|object|false|none|none|
|IndustryType|[WorkloadIndustryType](#schemaworkloadindustrytype)|false|none|<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>|
|Industry|[WorkloadIndustry](#schemaworkloadindustry)|false|none|The industry for the workload.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|ImprovementStatus|[WorkloadImprovementStatus](#schemaworkloadimprovementstatus)|false|none|The improvement status for a workload.|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|
|PillarPriorities|[WorkloadPillarPriorities](#schemaworkloadpillarpriorities)|false|none|The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.|
|Lenses|[WorkloadLenses](#schemaworkloadlenses)|false|none|The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.|
|Owner|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|ShareInvitationId|object|false|none|none|
|Tags|object|false|none|none|
|DiscoveryConfig|object|false|none|none|
|Applications|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Environment|PRODUCTION|
|Environment|PREPRODUCTION|
|ImprovementStatus|NOT_APPLICABLE|
|ImprovementStatus|NOT_STARTED|
|ImprovementStatus|IN_PROGRESS|
|ImprovementStatus|COMPLETE|
|ImprovementStatus|RISK_ACKNOWLEDGED|

<h2 id="tocS_ImportLensInput">ImportLensInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportlensinput"></a>
<a id="schema_ImportLensInput"></a>
<a id="tocSimportlensinput"></a>
<a id="tocsimportlensinput"></a>

```json
{
  "LensAlias": "string",
  "JSONString": {},
  "ClientRequestToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|JSONString|object|true|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|
|Tags|object|false|none|none|

<h2 id="tocS_ImportLensStatus">ImportLensStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportlensstatus"></a>
<a id="schema_ImportLensStatus"></a>
<a id="tocSimportlensstatus"></a>
<a id="tocsimportlensstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ImprovementSummary">ImprovementSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementsummary"></a>
<a id="schema_ImprovementSummary"></a>
<a id="tocSimprovementsummary"></a>
<a id="tocsimprovementsummary"></a>

```json
{
  "QuestionId": "string",
  "PillarId": "string",
  "QuestionTitle": "string",
  "Risk": "UNANSWERED",
  "ImprovementPlanUrl": "string",
  "ImprovementPlans": {}
}
```

An improvement summary of a lens review in a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionTitle|[QuestionTitle](#schemaquestiontitle)|false|none|The title of the question.|
|Risk|[Risk](#schemarisk)|false|none|The risk for a given workload, lens review, pillar, or question.|
|ImprovementPlanUrl|[ImprovementPlanUrl](#schemaimprovementplanurl)|false|none|<p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>|
|ImprovementPlans|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Risk|UNANSWERED|
|Risk|HIGH|
|Risk|MEDIUM|
|Risk|NONE|
|Risk|NOT_APPLICABLE|

<h2 id="tocS_ImprovementSummaries">ImprovementSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementsummaries"></a>
<a id="schema_ImprovementSummaries"></a>
<a id="tocSimprovementsummaries"></a>
<a id="tocsimprovementsummaries"></a>

```json
[
  {
    "QuestionId": "string",
    "PillarId": "string",
    "QuestionTitle": "string",
    "Risk": "UNANSWERED",
    "ImprovementPlanUrl": "string",
    "ImprovementPlans": {}
  }
]
```

List of improvement summaries of lens review in a workload.

<h2 id="tocS_IsReviewOwnerUpdateAcknowledged">IsReviewOwnerUpdateAcknowledged</h2>
<!-- backwards compatibility -->
<a id="schemaisreviewownerupdateacknowledged"></a>
<a id="schema_IsReviewOwnerUpdateAcknowledged"></a>
<a id="tocSisreviewownerupdateacknowledged"></a>
<a id="tocsisreviewownerupdateacknowledged"></a>

```json
true
```

<h2 id="tocS_LensName">LensName</h2>
<!-- backwards compatibility -->
<a id="schemalensname"></a>
<a id="schema_LensName"></a>
<a id="tocSlensname"></a>
<a id="tocslensname"></a>

```json
"string"
```

The full name of the lens.

<h2 id="tocS_LensDescription">LensDescription</h2>
<!-- backwards compatibility -->
<a id="schemalensdescription"></a>
<a id="schema_LensDescription"></a>
<a id="tocSlensdescription"></a>
<a id="tocslensdescription"></a>

```json
"string"
```

The description of the lens.

<h2 id="tocS_LensOwner">LensOwner</h2>
<!-- backwards compatibility -->
<a id="schemalensowner"></a>
<a id="schema_LensOwner"></a>
<a id="tocSlensowner"></a>
<a id="tocslensowner"></a>

```json
"string"
```

<h2 id="tocS_ShareInvitationId">ShareInvitationId</h2>
<!-- backwards compatibility -->
<a id="schemashareinvitationid"></a>
<a id="schema_ShareInvitationId"></a>
<a id="tocSshareinvitationid"></a>
<a id="tocsshareinvitationid"></a>

```json
"string"
```

<h2 id="tocS_PillarMetrics">PillarMetrics</h2>
<!-- backwards compatibility -->
<a id="schemapillarmetrics"></a>
<a id="schema_PillarMetrics"></a>
<a id="tocSpillarmetrics"></a>
<a id="tocspillarmetrics"></a>

```json
[
  {
    "PillarId": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "Questions": {}
  }
]
```

<h2 id="tocS_LensMetric">LensMetric</h2>
<!-- backwards compatibility -->
<a id="schemalensmetric"></a>
<a id="schema_LensMetric"></a>
<a id="tocSlensmetric"></a>
<a id="tocslensmetric"></a>

```json
{
  "LensArn": {},
  "Pillars": {},
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

A metric for a particular lens in a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensArn|object|false|none|none|
|Pillars|object|false|none|none|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|

<h2 id="tocS_LensNamePrefix">LensNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemalensnameprefix"></a>
<a id="schema_LensNamePrefix"></a>
<a id="tocSlensnameprefix"></a>
<a id="tocslensnameprefix"></a>

```json
"string"
```

<h2 id="tocS_LensStatus">LensStatus</h2>
<!-- backwards compatibility -->
<a id="schemalensstatus"></a>
<a id="schema_LensStatus"></a>
<a id="tocSlensstatus"></a>
<a id="tocslensstatus"></a>

```json
"CURRENT"
```

<h2 id="tocS_PillarReviewSummaries">PillarReviewSummaries</h2>
<!-- backwards compatibility -->
<a id="schemapillarreviewsummaries"></a>
<a id="schema_PillarReviewSummaries"></a>
<a id="tocSpillarreviewsummaries"></a>
<a id="tocspillarreviewsummaries"></a>

```json
[
  {
    "PillarId": "string",
    "PillarName": "string",
    "Notes": "string",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

List of pillar review summaries of lens review in a workload.

<h2 id="tocS_LensReviewSummary">LensReviewSummary</h2>
<!-- backwards compatibility -->
<a id="schemalensreviewsummary"></a>
<a id="schema_LensReviewSummary"></a>
<a id="tocSlensreviewsummary"></a>
<a id="tocslensreviewsummary"></a>

```json
{
  "LensAlias": "string",
  "LensArn": {},
  "LensVersion": {},
  "LensName": "string",
  "LensStatus": {},
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

A lens review summary of a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|LensVersion|object|false|none|none|
|LensName|[LensName](#schemalensname)|false|none|The full name of the lens.|
|LensStatus|object|false|none|none|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|

<h2 id="tocS_LensReviewSummaries">LensReviewSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalensreviewsummaries"></a>
<a id="schema_LensReviewSummaries"></a>
<a id="tocSlensreviewsummaries"></a>
<a id="tocslensreviewsummaries"></a>

```json
[
  {
    "LensAlias": "string",
    "LensArn": {},
    "LensVersion": {},
    "LensName": "string",
    "LensStatus": {},
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

List of lens summaries of lens reviews of a workload.

<h2 id="tocS_LensShareSummary">LensShareSummary</h2>
<!-- backwards compatibility -->
<a id="schemalenssharesummary"></a>
<a id="schema_LensShareSummary"></a>
<a id="tocSlenssharesummary"></a>
<a id="tocslenssharesummary"></a>

```json
{
  "ShareId": "string",
  "SharedWith": "stringstring",
  "Status": "ACCEPTED",
  "StatusMessage": {}
}
```

A lens share summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareId|[ShareId](#schemashareid)|false|none|The ID associated with the workload share.|
|SharedWith|[SharedWith](#schemasharedwith)|false|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|Status|[ShareStatus](#schemasharestatus)|false|none|The status of a workload share.|
|StatusMessage|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|ACCEPTED|
|Status|REJECTED|
|Status|PENDING|
|Status|REVOKED|
|Status|EXPIRED|
|Status|ASSOCIATING|
|Status|ASSOCIATED|
|Status|FAILED|

<h2 id="tocS_LensShareSummaries">LensShareSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalenssharesummaries"></a>
<a id="schema_LensShareSummaries"></a>
<a id="tocSlenssharesummaries"></a>
<a id="tocslenssharesummaries"></a>

```json
[
  {
    "ShareId": "string",
    "SharedWith": "stringstring",
    "Status": "ACCEPTED",
    "StatusMessage": {}
  }
]
```

<h2 id="tocS_ShareStatus">ShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharestatus"></a>
<a id="schema_ShareStatus"></a>
<a id="tocSsharestatus"></a>
<a id="tocssharestatus"></a>

```json
"ACCEPTED"
```

The status of a workload share.

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_LensSummary">LensSummary</h2>
<!-- backwards compatibility -->
<a id="schemalenssummary"></a>
<a id="schema_LensSummary"></a>
<a id="tocSlenssummary"></a>
<a id="tocslenssummary"></a>

```json
{
  "LensArn": {},
  "LensAlias": "string",
  "LensName": "string",
  "LensType": {},
  "Description": "string",
  "CreatedAt": "1970-01-01T00:00:00Z",
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "LensVersion": {},
  "Owner": "string",
  "LensStatus": {}
}
```

A lens summary of a lens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensArn|object|false|none|none|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensName|[LensName](#schemalensname)|false|none|The full name of the lens.|
|LensType|object|false|none|none|
|Description|[LensDescription](#schemalensdescription)|false|none|The description of the lens.|
|CreatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|LensVersion|object|false|none|none|
|Owner|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|LensStatus|object|false|none|none|

<h2 id="tocS_LensSummaries">LensSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalenssummaries"></a>
<a id="schema_LensSummaries"></a>
<a id="tocSlenssummaries"></a>
<a id="tocslenssummaries"></a>

```json
[
  {
    "LensArn": {},
    "LensAlias": "string",
    "LensName": "string",
    "LensType": {},
    "Description": "string",
    "CreatedAt": "1970-01-01T00:00:00Z",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "LensVersion": {},
    "Owner": "string",
    "LensStatus": {}
  }
]
```

List of lens summaries of available lenses.

<h2 id="tocS_LensType">LensType</h2>
<!-- backwards compatibility -->
<a id="schemalenstype"></a>
<a id="schema_LensType"></a>
<a id="tocSlenstype"></a>
<a id="tocslenstype"></a>

```json
"AWS_OFFICIAL"
```

<h2 id="tocS_LensUpgradeSummary">LensUpgradeSummary</h2>
<!-- backwards compatibility -->
<a id="schemalensupgradesummary"></a>
<a id="schema_LensUpgradeSummary"></a>
<a id="tocSlensupgradesummary"></a>
<a id="tocslensupgradesummary"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadName": "string",
  "LensAlias": "string",
  "LensArn": {},
  "CurrentLensVersion": {},
  "LatestLensVersion": {}
}
```

Lens upgrade summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|
|CurrentLensVersion|object|false|none|none|
|LatestLensVersion|object|false|none|none|

<h2 id="tocS_ListAnswersMaxResults">ListAnswersMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistanswersmaxresults"></a>
<a id="schema_ListAnswersMaxResults"></a>
<a id="tocSlistanswersmaxresults"></a>
<a id="tocslistanswersmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAnswersInput">ListAnswersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistanswersinput"></a>
<a id="schema_ListAnswersInput"></a>
<a id="tocSlistanswersinput"></a>
<a id="tocslistanswersinput"></a>

```json
{}
```

Input to list answers.

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

The maximum number of results to return for this request.

<h2 id="tocS_ListCheckDetailsInput">ListCheckDetailsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcheckdetailsinput"></a>
<a id="schema_ListCheckDetailsInput"></a>
<a id="tocSlistcheckdetailsinput"></a>
<a id="tocslistcheckdetailsinput"></a>

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "LensArn": {},
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of results to return for this request.|
|LensArn|object|true|none|none|
|PillarId|[PillarId](#schemapillarid)|true|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionId|[QuestionId](#schemaquestionid)|true|none|The ID of the question.|
|ChoiceId|[ChoiceId](#schemachoiceid)|true|none|The ID of a choice.|

<h2 id="tocS_ListCheckSummariesInput">ListCheckSummariesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistchecksummariesinput"></a>
<a id="schema_ListCheckSummariesInput"></a>
<a id="tocSlistchecksummariesinput"></a>
<a id="tocslistchecksummariesinput"></a>

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "LensArn": {},
  "PillarId": "string",
  "QuestionId": "string",
  "ChoiceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of results to return for this request.|
|LensArn|object|true|none|none|
|PillarId|[PillarId](#schemapillarid)|true|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|QuestionId|[QuestionId](#schemaquestionid)|true|none|The ID of the question.|
|ChoiceId|[ChoiceId](#schemachoiceid)|true|none|The ID of a choice.|

<h2 id="tocS_ListLensReviewImprovementsMaxResults">ListLensReviewImprovementsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistlensreviewimprovementsmaxresults"></a>
<a id="schema_ListLensReviewImprovementsMaxResults"></a>
<a id="tocSlistlensreviewimprovementsmaxresults"></a>
<a id="tocslistlensreviewimprovementsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListLensReviewImprovementsInput">ListLensReviewImprovementsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensreviewimprovementsinput"></a>
<a id="schema_ListLensReviewImprovementsInput"></a>
<a id="tocSlistlensreviewimprovementsinput"></a>
<a id="tocslistlensreviewimprovementsinput"></a>

```json
{}
```

Input to list lens review improvements.

<h2 id="tocS_ListLensReviewsInput">ListLensReviewsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensreviewsinput"></a>
<a id="schema_ListLensReviewsInput"></a>
<a id="tocSlistlensreviewsinput"></a>
<a id="tocslistlensreviewsinput"></a>

```json
{}
```

Input to list lens reviews.

<h2 id="tocS_SharedWithPrefix">SharedWithPrefix</h2>
<!-- backwards compatibility -->
<a id="schemasharedwithprefix"></a>
<a id="schema_SharedWithPrefix"></a>
<a id="tocSsharedwithprefix"></a>
<a id="tocssharedwithprefix"></a>

```json
"string"
```

<h2 id="tocS_ListWorkloadSharesMaxResults">ListWorkloadSharesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsharesmaxresults"></a>
<a id="schema_ListWorkloadSharesMaxResults"></a>
<a id="tocSlistworkloadsharesmaxresults"></a>
<a id="tocslistworkloadsharesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListLensSharesInput">ListLensSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlenssharesinput"></a>
<a id="schema_ListLensSharesInput"></a>
<a id="tocSlistlenssharesinput"></a>
<a id="tocslistlenssharesinput"></a>

```json
{}
```

<h2 id="tocS_ListLensesInput">ListLensesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlensesinput"></a>
<a id="schema_ListLensesInput"></a>
<a id="tocSlistlensesinput"></a>
<a id="tocslistlensesinput"></a>

```json
{}
```

Input to list lenses.

<h2 id="tocS_ListMilestonesInput">ListMilestonesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmilestonesinput"></a>
<a id="schema_ListMilestonesInput"></a>
<a id="tocSlistmilestonesinput"></a>
<a id="tocslistmilestonesinput"></a>

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

Input to list all milestones for a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of results to return for this request.|

<h2 id="tocS_MilestoneSummaries">MilestoneSummaries</h2>
<!-- backwards compatibility -->
<a id="schemamilestonesummaries"></a>
<a id="schema_MilestoneSummaries"></a>
<a id="tocSmilestonesummaries"></a>
<a id="tocsmilestonesummaries"></a>

```json
[
  {
    "MilestoneNumber": 1,
    "MilestoneName": "string",
    "RecordedAt": "1970-01-01T00:00:00Z",
    "WorkloadSummary": {
      "WorkloadId": "string",
      "WorkloadArn": "string",
      "WorkloadName": "string",
      "Owner": "string",
      "UpdatedAt": "1970-01-01T00:00:00Z",
      "Lenses": [
        "string"
      ],
      "RiskCounts": {
        "property1": 0,
        "property2": 0
      },
      "ImprovementStatus": "NOT_APPLICABLE"
    }
  }
]
```

A list of milestone summaries.

<h2 id="tocS_ListNotificationsMaxResults">ListNotificationsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsmaxresults"></a>
<a id="schema_ListNotificationsMaxResults"></a>
<a id="tocSlistnotificationsmaxresults"></a>
<a id="tocslistnotificationsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListNotificationsInput">ListNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsinput"></a>
<a id="schema_ListNotificationsInput"></a>
<a id="tocSlistnotificationsinput"></a>
<a id="tocslistnotificationsinput"></a>

```json
{
  "WorkloadId": "string",
  "NextToken": "string",
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|MaxResults|object|false|none|none|

<h2 id="tocS_NotificationSummaries">NotificationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsummaries"></a>
<a id="schema_NotificationSummaries"></a>
<a id="tocSnotificationsummaries"></a>
<a id="tocsnotificationsummaries"></a>

```json
[
  {
    "Type": {},
    "LensUpgradeSummary": {
      "WorkloadId": "string",
      "WorkloadName": "string",
      "LensAlias": "string",
      "LensArn": {},
      "CurrentLensVersion": {},
      "LatestLensVersion": {}
    }
  }
]
```

<h2 id="tocS_WorkloadNamePrefix">WorkloadNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadnameprefix"></a>
<a id="schema_WorkloadNamePrefix"></a>
<a id="tocSworkloadnameprefix"></a>
<a id="tocsworkloadnameprefix"></a>

```json
"string"
```

An optional string added to the beginning of each workload name returned in the results.

<h2 id="tocS_ShareResourceType">ShareResourceType</h2>
<!-- backwards compatibility -->
<a id="schemashareresourcetype"></a>
<a id="schema_ShareResourceType"></a>
<a id="tocSshareresourcetype"></a>
<a id="tocsshareresourcetype"></a>

```json
"WORKLOAD"
```

<h2 id="tocS_ListShareInvitationsMaxResults">ListShareInvitationsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistshareinvitationsmaxresults"></a>
<a id="schema_ListShareInvitationsMaxResults"></a>
<a id="tocSlistshareinvitationsmaxresults"></a>
<a id="tocslistshareinvitationsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListShareInvitationsInput">ListShareInvitationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistshareinvitationsinput"></a>
<a id="schema_ListShareInvitationsInput"></a>
<a id="tocSlistshareinvitationsinput"></a>
<a id="tocslistshareinvitationsinput"></a>

```json
{}
```

Input for List Share Invitations

<h2 id="tocS_ShareInvitationSummaries">ShareInvitationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemashareinvitationsummaries"></a>
<a id="schema_ShareInvitationSummaries"></a>
<a id="tocSshareinvitationsummaries"></a>
<a id="tocsshareinvitationsummaries"></a>

```json
[
  {
    "ShareInvitationId": {},
    "SharedBy": "string",
    "SharedWith": "stringstring",
    "PermissionType": "READONLY",
    "ShareResourceType": {},
    "WorkloadName": "string",
    "WorkloadId": "string",
    "LensName": "string",
    "LensArn": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{}
```

<h2 id="tocS_ListWorkloadSharesInput">ListWorkloadSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsharesinput"></a>
<a id="schema_ListWorkloadSharesInput"></a>
<a id="tocSlistworkloadsharesinput"></a>
<a id="tocslistworkloadsharesinput"></a>

```json
{}
```

Input for List Workload Share

<h2 id="tocS_WorkloadShareSummaries">WorkloadShareSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadsharesummaries"></a>
<a id="schema_WorkloadShareSummaries"></a>
<a id="tocSworkloadsharesummaries"></a>
<a id="tocsworkloadsharesummaries"></a>

```json
[
  {
    "ShareId": "string",
    "SharedWith": "stringstring",
    "PermissionType": "READONLY",
    "Status": "ACCEPTED",
    "StatusMessage": {}
  }
]
```

A list of workload share summaries.

<h2 id="tocS_ListWorkloadsMaxResults">ListWorkloadsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsmaxresults"></a>
<a id="schema_ListWorkloadsMaxResults"></a>
<a id="tocSlistworkloadsmaxresults"></a>
<a id="tocslistworkloadsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListWorkloadsInput">ListWorkloadsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkloadsinput"></a>
<a id="schema_ListWorkloadsInput"></a>
<a id="tocSlistworkloadsinput"></a>
<a id="tocslistworkloadsinput"></a>

```json
{
  "WorkloadNamePrefix": "string",
  "NextToken": "string",
  "MaxResults": {}
}
```

Input to list all workloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadNamePrefix|[WorkloadNamePrefix](#schemaworkloadnameprefix)|false|none|An optional string added to the beginning of each workload name returned in the results.|
|NextToken|[NextToken](#schemanexttoken)|false|none|The token to use to retrieve the next set of results.|
|MaxResults|object|false|none|none|

<h2 id="tocS_WorkloadSummaries">WorkloadSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadsummaries"></a>
<a id="schema_WorkloadSummaries"></a>
<a id="tocSworkloadsummaries"></a>
<a id="tocsworkloadsummaries"></a>

```json
[
  {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Owner": "string",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Lenses": [
      "string"
    ],
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "ImprovementStatus": "NOT_APPLICABLE"
  }
]
```

A list of workload summaries.

<h2 id="tocS_MilestoneSummary">MilestoneSummary</h2>
<!-- backwards compatibility -->
<a id="schemamilestonesummary"></a>
<a id="schema_MilestoneSummary"></a>
<a id="tocSmilestonesummary"></a>
<a id="tocsmilestonesummary"></a>

```json
{
  "MilestoneNumber": 1,
  "MilestoneName": "string",
  "RecordedAt": "1970-01-01T00:00:00Z",
  "WorkloadSummary": {
    "WorkloadId": "string",
    "WorkloadArn": "string",
    "WorkloadName": "string",
    "Owner": "string",
    "UpdatedAt": "1970-01-01T00:00:00Z",
    "Lenses": [
      "string"
    ],
    "RiskCounts": {
      "property1": 0,
      "property2": 0
    },
    "ImprovementStatus": "NOT_APPLICABLE"
  }
}
```

A milestone summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MilestoneNumber|[MilestoneNumber](#schemamilestonenumber)|false|none|<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>|
|MilestoneName|[MilestoneName](#schemamilestonename)|false|none|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|RecordedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|WorkloadSummary|[WorkloadSummary](#schemaworkloadsummary)|false|none|A workload summary return object.|

<h2 id="tocS_WorkloadSummary">WorkloadSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadsummary"></a>
<a id="schema_WorkloadSummary"></a>
<a id="tocSworkloadsummary"></a>
<a id="tocsworkloadsummary"></a>

```json
{
  "WorkloadId": "string",
  "WorkloadArn": "string",
  "WorkloadName": "string",
  "Owner": "string",
  "UpdatedAt": "1970-01-01T00:00:00Z",
  "Lenses": [
    "string"
  ],
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  },
  "ImprovementStatus": "NOT_APPLICABLE"
}
```

A workload summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|WorkloadArn|[WorkloadArn](#schemaworkloadarn)|false|none|The ARN for the workload.|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|Owner|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|UpdatedAt|[Timestamp](#schematimestamp)|false|none|The date and time recorded.|
|Lenses|[WorkloadLenses](#schemaworkloadlenses)|false|none|The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|
|ImprovementStatus|[WorkloadImprovementStatus](#schemaworkloadimprovementstatus)|false|none|The improvement status for a workload.|

#### Enumerated Values

|Property|Value|
|---|---|
|ImprovementStatus|NOT_APPLICABLE|
|ImprovementStatus|NOT_STARTED|
|ImprovementStatus|IN_PROGRESS|
|ImprovementStatus|COMPLETE|
|ImprovementStatus|RISK_ACKNOWLEDGED|

<h2 id="tocS_NotificationSummary">NotificationSummary</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsummary"></a>
<a id="schema_NotificationSummary"></a>
<a id="tocSnotificationsummary"></a>
<a id="tocsnotificationsummary"></a>

```json
{
  "Type": {},
  "LensUpgradeSummary": {
    "WorkloadId": "string",
    "WorkloadName": "string",
    "LensAlias": "string",
    "LensArn": {},
    "CurrentLensVersion": {},
    "LatestLensVersion": {}
  }
}
```

A notification summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|LensUpgradeSummary|object|false|none|none|

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
"LENS_VERSION_UPGRADED"
```

<h2 id="tocS_OrganizationSharingStatus">OrganizationSharingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsharingstatus"></a>
<a id="schema_OrganizationSharingStatus"></a>
<a id="tocSorganizationsharingstatus"></a>
<a id="tocsorganizationsharingstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_PillarName">PillarName</h2>
<!-- backwards compatibility -->
<a id="schemapillarname"></a>
<a id="schema_PillarName"></a>
<a id="tocSpillarname"></a>
<a id="tocspillarname"></a>

```json
"string"
```

The name of the pillar.

<h2 id="tocS_QuestionDifferences">QuestionDifferences</h2>
<!-- backwards compatibility -->
<a id="schemaquestiondifferences"></a>
<a id="schema_QuestionDifferences"></a>
<a id="tocSquestiondifferences"></a>
<a id="tocsquestiondifferences"></a>

```json
[
  {
    "QuestionId": "string",
    "QuestionTitle": "string",
    "DifferenceStatus": {}
  }
]
```

<h2 id="tocS_PillarDifference">PillarDifference</h2>
<!-- backwards compatibility -->
<a id="schemapillardifference"></a>
<a id="schema_PillarDifference"></a>
<a id="tocSpillardifference"></a>
<a id="tocspillardifference"></a>

```json
{
  "PillarId": "string",
  "PillarName": "string",
  "DifferenceStatus": {},
  "QuestionDifferences": {}
}
```

A pillar difference return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|PillarName|[PillarName](#schemapillarname)|false|none|The name of the pillar.|
|DifferenceStatus|object|false|none|none|
|QuestionDifferences|object|false|none|none|

<h2 id="tocS_PillarDifferences">PillarDifferences</h2>
<!-- backwards compatibility -->
<a id="schemapillardifferences"></a>
<a id="schema_PillarDifferences"></a>
<a id="tocSpillardifferences"></a>
<a id="tocspillardifferences"></a>

```json
[
  {
    "PillarId": "string",
    "PillarName": "string",
    "DifferenceStatus": {},
    "QuestionDifferences": {}
  }
]
```

<h2 id="tocS_QuestionMetrics">QuestionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaquestionmetrics"></a>
<a id="schema_QuestionMetrics"></a>
<a id="tocSquestionmetrics"></a>
<a id="tocsquestionmetrics"></a>

```json
[
  {
    "QuestionId": "string",
    "Risk": "UNANSWERED",
    "BestPractices": {}
  }
]
```

<h2 id="tocS_PillarMetric">PillarMetric</h2>
<!-- backwards compatibility -->
<a id="schemapillarmetric"></a>
<a id="schema_PillarMetric"></a>
<a id="tocSpillarmetric"></a>
<a id="tocspillarmetric"></a>

```json
{
  "PillarId": "string",
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  },
  "Questions": {}
}
```

A metric for a particular pillar in a lens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|
|Questions|object|false|none|none|

<h2 id="tocS_PillarNotes">PillarNotes</h2>
<!-- backwards compatibility -->
<a id="schemapillarnotes"></a>
<a id="schema_PillarNotes"></a>
<a id="tocSpillarnotes"></a>
<a id="tocspillarnotes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

List of pillar notes of a lens review in a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Notes](#schemanotes)|false|none|The notes associated with the workload.|

<h2 id="tocS_PillarReviewSummary">PillarReviewSummary</h2>
<!-- backwards compatibility -->
<a id="schemapillarreviewsummary"></a>
<a id="schema_PillarReviewSummary"></a>
<a id="tocSpillarreviewsummary"></a>
<a id="tocspillarreviewsummary"></a>

```json
{
  "PillarId": "string",
  "PillarName": "string",
  "Notes": "string",
  "RiskCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

A pillar review summary of a lens review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PillarId|[PillarId](#schemapillarid)|false|none|<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>|
|PillarName|[PillarName](#schemapillarname)|false|none|The name of the pillar.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|RiskCounts|[RiskCounts](#schemariskcounts)|false|none|A map from risk names to the count of how many questions have that rating.|

<h2 id="tocS_QuestionDifference">QuestionDifference</h2>
<!-- backwards compatibility -->
<a id="schemaquestiondifference"></a>
<a id="schema_QuestionDifference"></a>
<a id="tocSquestiondifference"></a>
<a id="tocsquestiondifference"></a>

```json
{
  "QuestionId": "string",
  "QuestionTitle": "string",
  "DifferenceStatus": {}
}
```

A question difference return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|QuestionTitle|[QuestionTitle](#schemaquestiontitle)|false|none|The title of the question.|
|DifferenceStatus|object|false|none|none|

<h2 id="tocS_QuestionMetric">QuestionMetric</h2>
<!-- backwards compatibility -->
<a id="schemaquestionmetric"></a>
<a id="schema_QuestionMetric"></a>
<a id="tocSquestionmetric"></a>
<a id="tocsquestionmetric"></a>

```json
{
  "QuestionId": "string",
  "Risk": "UNANSWERED",
  "BestPractices": {}
}
```

A metric for a particular question in the pillar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuestionId|[QuestionId](#schemaquestionid)|false|none|The ID of the question.|
|Risk|[Risk](#schemarisk)|false|none|The risk for a given workload, lens review, pillar, or question.|
|BestPractices|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Risk|UNANSWERED|
|Risk|HIGH|
|Risk|MEDIUM|
|Risk|NONE|
|Risk|NOT_APPLICABLE|

<h2 id="tocS_ShareInvitation">ShareInvitation</h2>
<!-- backwards compatibility -->
<a id="schemashareinvitation"></a>
<a id="schema_ShareInvitation"></a>
<a id="tocSshareinvitation"></a>
<a id="tocsshareinvitation"></a>

```json
{
  "ShareInvitationId": {},
  "ShareResourceType": {},
  "WorkloadId": "string",
  "LensAlias": "string",
  "LensArn": {}
}
```

The share invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareInvitationId|object|false|none|none|
|ShareResourceType|object|false|none|none|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|LensAlias|[LensAlias](#schemalensalias)|false|none|<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>|
|LensArn|object|false|none|none|

<h2 id="tocS_ShareInvitationAction">ShareInvitationAction</h2>
<!-- backwards compatibility -->
<a id="schemashareinvitationaction"></a>
<a id="schema_ShareInvitationAction"></a>
<a id="tocSshareinvitationaction"></a>
<a id="tocsshareinvitationaction"></a>

```json
"ACCEPT"
```

Share invitation action taken by contributor.

<h2 id="tocS_ShareInvitationSummary">ShareInvitationSummary</h2>
<!-- backwards compatibility -->
<a id="schemashareinvitationsummary"></a>
<a id="schema_ShareInvitationSummary"></a>
<a id="tocSshareinvitationsummary"></a>
<a id="tocsshareinvitationsummary"></a>

```json
{
  "ShareInvitationId": {},
  "SharedBy": "string",
  "SharedWith": "stringstring",
  "PermissionType": "READONLY",
  "ShareResourceType": {},
  "WorkloadName": "string",
  "WorkloadId": "string",
  "LensName": "string",
  "LensArn": {}
}
```

A share invitation summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareInvitationId|object|false|none|none|
|SharedBy|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|SharedWith|[SharedWith](#schemasharedwith)|false|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|PermissionType|[PermissionType](#schemapermissiontype)|false|none|Permission granted on a workload share.|
|ShareResourceType|object|false|none|none|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|
|LensName|[LensName](#schemalensname)|false|none|The full name of the lens.|
|LensArn|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionType|READONLY|
|PermissionType|CONTRIBUTOR|

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

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{}
```

<h2 id="tocS_UpdateAnswerInput">UpdateAnswerInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanswerinput"></a>
<a id="schema_UpdateAnswerInput"></a>
<a id="tocSupdateanswerinput"></a>
<a id="tocsupdateanswerinput"></a>

```json
{
  "SelectedChoices": [
    "string"
  ],
  "ChoiceUpdates": {
    "property1": {
      "Status": {},
      "Reason": {},
      "Notes": {}
    },
    "property2": {
      "Status": {},
      "Reason": {},
      "Notes": {}
    }
  },
  "Notes": "string",
  "IsApplicable": true,
  "Reason": {}
}
```

Input to update answer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectedChoices|[SelectedChoices](#schemaselectedchoices)|false|none|<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>|
|ChoiceUpdates|object|false|none|none|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|IsApplicable|[IsApplicable](#schemaisapplicable)|false|none|Defines whether this question is applicable to a lens review.|
|Reason|object|false|none|none|

<h2 id="tocS_UpdateGlobalSettingsInput">UpdateGlobalSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateglobalsettingsinput"></a>
<a id="schema_UpdateGlobalSettingsInput"></a>
<a id="tocSupdateglobalsettingsinput"></a>
<a id="tocsupdateglobalsettingsinput"></a>

```json
{
  "OrganizationSharingStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationSharingStatus|object|false|none|none|

<h2 id="tocS_UpdateLensReviewInput">UpdateLensReviewInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelensreviewinput"></a>
<a id="schema_UpdateLensReviewInput"></a>
<a id="tocSupdatelensreviewinput"></a>
<a id="tocsupdatelensreviewinput"></a>

```json
{
  "LensNotes": "string",
  "PillarNotes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input for update lens review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LensNotes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|PillarNotes|[PillarNotes](#schemapillarnotes)|false|none|List of pillar notes of a lens review in a workload.|

<h2 id="tocS_UpdateShareInvitationInput">UpdateShareInvitationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshareinvitationinput"></a>
<a id="schema_UpdateShareInvitationInput"></a>
<a id="tocSupdateshareinvitationinput"></a>
<a id="tocsupdateshareinvitationinput"></a>

```json
{
  "ShareInvitationAction": "ACCEPT"
}
```

Input for Update Share Invitation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareInvitationAction|[ShareInvitationAction](#schemashareinvitationaction)|true|none|Share invitation action taken by contributor.|

#### Enumerated Values

|Property|Value|
|---|---|
|ShareInvitationAction|ACCEPT|
|ShareInvitationAction|REJECT|

<h2 id="tocS_WorkloadImprovementStatus">WorkloadImprovementStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadimprovementstatus"></a>
<a id="schema_WorkloadImprovementStatus"></a>
<a id="tocSworkloadimprovementstatus"></a>
<a id="tocsworkloadimprovementstatus"></a>

```json
"NOT_APPLICABLE"
```

The improvement status for a workload.

<h2 id="tocS_UpdateWorkloadInput">UpdateWorkloadInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkloadinput"></a>
<a id="schema_UpdateWorkloadInput"></a>
<a id="tocSupdateworkloadinput"></a>
<a id="tocsupdateworkloadinput"></a>

```json
{
  "WorkloadName": "string",
  "Description": "string",
  "Environment": "PRODUCTION",
  "AccountIds": [
    "string"
  ],
  "AwsRegions": [
    "string"
  ],
  "NonAwsRegions": [
    "string"
  ],
  "PillarPriorities": [
    "string"
  ],
  "ArchitecturalDesign": "string",
  "ReviewOwner": "string",
  "IsReviewOwnerUpdateAcknowledged": {},
  "IndustryType": "string",
  "Industry": "string",
  "Notes": "string",
  "ImprovementStatus": "NOT_APPLICABLE",
  "DiscoveryConfig": {
    "TrustedAdvisorIntegrationStatus": {}
  },
  "Applications": {}
}
```

Input to update a workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|Description|[WorkloadDescription](#schemaworkloaddescription)|false|none|The description for the workload.|
|Environment|[WorkloadEnvironment](#schemaworkloadenvironment)|false|none|The environment for the workload.|
|AccountIds|[WorkloadAccountIds](#schemaworkloadaccountids)|false|none|The list of Amazon Web Services account IDs associated with the workload.|
|AwsRegions|[WorkloadAwsRegions](#schemaworkloadawsregions)|false|none|The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.|
|NonAwsRegions|[WorkloadNonAwsRegions](#schemaworkloadnonawsregions)|false|none| The list of non-Amazon Web Services Regions associated with the workload.|
|PillarPriorities|[WorkloadPillarPriorities](#schemaworkloadpillarpriorities)|false|none|The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.|
|ArchitecturalDesign|[WorkloadArchitecturalDesign](#schemaworkloadarchitecturaldesign)|false|none|The URL of the architectural design for the workload.|
|ReviewOwner|[WorkloadReviewOwner](#schemaworkloadreviewowner)|false|none|The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.|
|IsReviewOwnerUpdateAcknowledged|object|false|none|none|
|IndustryType|[WorkloadIndustryType](#schemaworkloadindustrytype)|false|none|<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>|
|Industry|[WorkloadIndustry](#schemaworkloadindustry)|false|none|The industry for the workload.|
|Notes|[Notes](#schemanotes)|false|none|The notes associated with the workload.|
|ImprovementStatus|[WorkloadImprovementStatus](#schemaworkloadimprovementstatus)|false|none|The improvement status for a workload.|
|DiscoveryConfig|object|false|none|none|
|Applications|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Environment|PRODUCTION|
|Environment|PREPRODUCTION|
|ImprovementStatus|NOT_APPLICABLE|
|ImprovementStatus|NOT_STARTED|
|ImprovementStatus|IN_PROGRESS|
|ImprovementStatus|COMPLETE|
|ImprovementStatus|RISK_ACKNOWLEDGED|

<h2 id="tocS_UpdateWorkloadShareInput">UpdateWorkloadShareInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkloadshareinput"></a>
<a id="schema_UpdateWorkloadShareInput"></a>
<a id="tocSupdateworkloadshareinput"></a>
<a id="tocsupdateworkloadshareinput"></a>

```json
{
  "PermissionType": "READONLY"
}
```

Input for Update Workload Share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionType|[PermissionType](#schemapermissiontype)|true|none|Permission granted on a workload share.|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionType|READONLY|
|PermissionType|CONTRIBUTOR|

<h2 id="tocS_WorkloadShare">WorkloadShare</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadshare"></a>
<a id="schema_WorkloadShare"></a>
<a id="tocSworkloadshare"></a>
<a id="tocsworkloadshare"></a>

```json
{
  "ShareId": "string",
  "SharedBy": "string",
  "SharedWith": "stringstring",
  "PermissionType": "READONLY",
  "Status": "ACCEPTED",
  "WorkloadName": "string",
  "WorkloadId": "string"
}
```

A workload share return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareId|[ShareId](#schemashareid)|false|none|The ID associated with the workload share.|
|SharedBy|[AwsAccountId](#schemaawsaccountid)|false|none|An Amazon Web Services account ID.|
|SharedWith|[SharedWith](#schemasharedwith)|false|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|PermissionType|[PermissionType](#schemapermissiontype)|false|none|Permission granted on a workload share.|
|Status|[ShareStatus](#schemasharestatus)|false|none|The status of a workload share.|
|WorkloadName|[WorkloadName](#schemaworkloadname)|false|none|<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>|
|WorkloadId|[WorkloadId](#schemaworkloadid)|false|none|The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionType|READONLY|
|PermissionType|CONTRIBUTOR|
|Status|ACCEPTED|
|Status|REJECTED|
|Status|PENDING|
|Status|REVOKED|
|Status|EXPIRED|
|Status|ASSOCIATING|
|Status|ASSOCIATED|
|Status|FAILED|

<h2 id="tocS_UpgradeLensReviewInput">UpgradeLensReviewInput</h2>
<!-- backwards compatibility -->
<a id="schemaupgradelensreviewinput"></a>
<a id="schema_UpgradeLensReviewInput"></a>
<a id="tocSupgradelensreviewinput"></a>
<a id="tocsupgradelensreviewinput"></a>

```json
{
  "MilestoneName": "string",
  "ClientRequestToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MilestoneName|[MilestoneName](#schemamilestonename)|true|none|<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|false|none|<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>|

<h2 id="tocS_WorkloadShareSummary">WorkloadShareSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadsharesummary"></a>
<a id="schema_WorkloadShareSummary"></a>
<a id="tocSworkloadsharesummary"></a>
<a id="tocsworkloadsharesummary"></a>

```json
{
  "ShareId": "string",
  "SharedWith": "stringstring",
  "PermissionType": "READONLY",
  "Status": "ACCEPTED",
  "StatusMessage": {}
}
```

A workload share summary return object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareId|[ShareId](#schemashareid)|false|none|The ID associated with the workload share.|
|SharedWith|[SharedWith](#schemasharedwith)|false|none|The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.|
|PermissionType|[PermissionType](#schemapermissiontype)|false|none|Permission granted on a workload share.|
|Status|[ShareStatus](#schemasharestatus)|false|none|The status of a workload share.|
|StatusMessage|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionType|READONLY|
|PermissionType|CONTRIBUTOR|
|Status|ACCEPTED|
|Status|REJECTED|
|Status|PENDING|
|Status|REVOKED|
|Status|EXPIRED|
|Status|ASSOCIATING|
|Status|ASSOCIATED|
|Status|FAILED|
