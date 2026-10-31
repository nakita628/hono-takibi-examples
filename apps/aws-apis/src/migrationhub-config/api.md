<h1 id="aws-migration-hub-config">AWS Migration Hub Config v2019-06-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>

Base URLs:

* <a href="http://migrationhub-config.us-east-1.amazonaws.com">http://migrationhub-config.us-east-1.amazonaws.com</a> - The AWS Migration Hub Config multi-region endpoint

* <a href="https://migrationhub-config.us-east-1.amazonaws.com">https://migrationhub-config.us-east-1.amazonaws.com</a> - The AWS Migration Hub Config multi-region endpoint

* <a href="http://migrationhub-config.cn-north-1.amazonaws.com.cn">http://migrationhub-config.cn-north-1.amazonaws.com.cn</a> - The AWS Migration Hub Config endpoint for China (Beijing) and China (Ningxia)

* <a href="https://migrationhub-config.cn-north-1.amazonaws.com.cn">https://migrationhub-config.cn-north-1.amazonaws.com.cn</a> - The AWS Migration Hub Config endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/migrationhub-config/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-migration-hub-config-default">Default</h1>

## CreateHomeRegionControl

<a id="opIdCreateHomeRegionControl"></a>

> Code samples

```bash
curl 'https://migrationhub-config.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHubMultiAccountService.CreateHomeRegionControl' \
  -d '{
    "HomeRegion": {},
    "Target": {
      "Type": {},
      "Id": {}
    },
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl`

This API sets up the home region for the calling account only.

> Body parameter

```json
{
  "HomeRegion": {},
  "Target": {
    "Type": {},
    "Id": {}
  },
  "DryRun": {}
}
```

<h3 id="createhomeregioncontrol-parameters">Parameters</h3>

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
|body|body|[CreateHomeRegionControlRequest](#schemacreatehomeregioncontrolrequest)|true|none|
|» HomeRegion|body|object|true|none|
|» Target|body|object|true|none|
|» » Type|body|object|true|none|
|» » Id|body|object|false|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHubMultiAccountService.CreateHomeRegionControl|

> Example responses

> 200 Response

```json
{
  "HomeRegionControl": {
    "ControlId": {},
    "HomeRegion": {},
    "Target": {
      "Type": {},
      "Id": {}
    },
    "RequestedTime": {}
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

<h3 id="createhomeregioncontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHomeRegionControlResult](#schemacreatehomeregioncontrolresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|DryRunOperation|[DryRunOperation](#schemadryrunoperation)|
|485|485|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHomeRegionControls

<a id="opIdDescribeHomeRegionControls"></a>

> Code samples

```bash
curl 'https://migrationhub-config.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHubMultiAccountService.DescribeHomeRegionControls' \
  -d '{
    "ControlId": {},
    "HomeRegion": {},
    "Target": {
      "Type": {},
      "Id": {}
    },
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls`

This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.

> Body parameter

```json
{
  "ControlId": {},
  "HomeRegion": {},
  "Target": {
    "Type": {},
    "Id": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describehomeregioncontrols-parameters">Parameters</h3>

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
|body|body|[DescribeHomeRegionControlsRequest](#schemadescribehomeregioncontrolsrequest)|true|none|
|» ControlId|body|object|false|none|
|» HomeRegion|body|object|false|none|
|» Target|body|object|false|none|
|» » Type|body|object|true|none|
|» » Id|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHubMultiAccountService.DescribeHomeRegionControls|

> Example responses

> 200 Response

```json
{
  "HomeRegionControls": {},
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

<h3 id="describehomeregioncontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHomeRegionControlsResult](#schemadescribehomeregioncontrolsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHomeRegion

<a id="opIdGetHomeRegion"></a>

> Code samples

```bash
curl 'https://migrationhub-config.us-east-1.amazonaws.com/#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMigrationHubMultiAccountService.GetHomeRegion' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion`

Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

> Body parameter

```json
{}
```

<h3 id="gethomeregion-parameters">Parameters</h3>

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
|body|body|[GetHomeRegionRequest](#schemagethomeregionrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMigrationHubMultiAccountService.GetHomeRegion|

> Example responses

> 200 Response

```json
{
  "HomeRegion": {}
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

<h3 id="gethomeregion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHomeRegionResult](#schemagethomeregionresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateHomeRegionControlResult">CreateHomeRegionControlResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatehomeregioncontrolresult"></a>
<a id="schema_CreateHomeRegionControlResult"></a>
<a id="tocScreatehomeregioncontrolresult"></a>
<a id="tocscreatehomeregioncontrolresult"></a>

```json
{
  "HomeRegionControl": {
    "ControlId": {},
    "HomeRegion": {},
    "Target": {
      "Type": {},
      "Id": {}
    },
    "RequestedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeRegionControl|object|false|none|none|

<h2 id="tocS_CreateHomeRegionControlRequest">CreateHomeRegionControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehomeregioncontrolrequest"></a>
<a id="schema_CreateHomeRegionControlRequest"></a>
<a id="tocScreatehomeregioncontrolrequest"></a>
<a id="tocscreatehomeregioncontrolrequest"></a>

```json
{
  "HomeRegion": {},
  "Target": {
    "Type": {},
    "Id": {}
  },
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeRegion|object|true|none|none|
|Target|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_DryRunOperation">DryRunOperation</h2>
<!-- backwards compatibility -->
<a id="schemadryrunoperation"></a>
<a id="schema_DryRunOperation"></a>
<a id="tocSdryrunoperation"></a>
<a id="tocsdryrunoperation"></a>

```json
null
```

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_DescribeHomeRegionControlsResult">DescribeHomeRegionControlsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribehomeregioncontrolsresult"></a>
<a id="schema_DescribeHomeRegionControlsResult"></a>
<a id="tocSdescribehomeregioncontrolsresult"></a>
<a id="tocsdescribehomeregioncontrolsresult"></a>

```json
{
  "HomeRegionControls": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeRegionControls|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeHomeRegionControlsRequest">DescribeHomeRegionControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehomeregioncontrolsrequest"></a>
<a id="schema_DescribeHomeRegionControlsRequest"></a>
<a id="tocSdescribehomeregioncontrolsrequest"></a>
<a id="tocsdescribehomeregioncontrolsrequest"></a>

```json
{
  "ControlId": {},
  "HomeRegion": {},
  "Target": {
    "Type": {},
    "Id": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ControlId|object|false|none|none|
|HomeRegion|object|false|none|none|
|Target|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetHomeRegionResult">GetHomeRegionResult</h2>
<!-- backwards compatibility -->
<a id="schemagethomeregionresult"></a>
<a id="schema_GetHomeRegionResult"></a>
<a id="tocSgethomeregionresult"></a>
<a id="tocsgethomeregionresult"></a>

```json
{
  "HomeRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HomeRegion|object|false|none|none|

<h2 id="tocS_GetHomeRegionRequest">GetHomeRegionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethomeregionrequest"></a>
<a id="schema_GetHomeRegionRequest"></a>
<a id="tocSgethomeregionrequest"></a>
<a id="tocsgethomeregionrequest"></a>

```json
{}
```

<h2 id="tocS_ControlId">ControlId</h2>
<!-- backwards compatibility -->
<a id="schemacontrolid"></a>
<a id="schema_ControlId"></a>
<a id="tocScontrolid"></a>
<a id="tocscontrolid"></a>

```json
"string"
```

<h2 id="tocS_HomeRegion">HomeRegion</h2>
<!-- backwards compatibility -->
<a id="schemahomeregion"></a>
<a id="schema_HomeRegion"></a>
<a id="tocShomeregion"></a>
<a id="tocshomeregion"></a>

```json
"string"
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "Type": {},
  "Id": {}
}
```

The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Id|object|false|none|none|

<h2 id="tocS_DryRun">DryRun</h2>
<!-- backwards compatibility -->
<a id="schemadryrun"></a>
<a id="schema_DryRun"></a>
<a id="tocSdryrun"></a>
<a id="tocsdryrun"></a>

```json
true
```

<h2 id="tocS_HomeRegionControl">HomeRegionControl</h2>
<!-- backwards compatibility -->
<a id="schemahomeregioncontrol"></a>
<a id="schema_HomeRegionControl"></a>
<a id="tocShomeregioncontrol"></a>
<a id="tocshomeregioncontrol"></a>

```json
{
  "ControlId": {},
  "HomeRegion": {},
  "Target": {
    "Type": {},
    "Id": {}
  },
  "RequestedTime": {}
}
```

A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ControlId|object|false|none|none|
|HomeRegion|object|false|none|none|
|Target|object|false|none|none|
|RequestedTime|object|false|none|none|

<h2 id="tocS_DescribeHomeRegionControlsMaxResults">DescribeHomeRegionControlsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribehomeregioncontrolsmaxresults"></a>
<a id="schema_DescribeHomeRegionControlsMaxResults"></a>
<a id="tocSdescribehomeregioncontrolsmaxresults"></a>
<a id="tocsdescribehomeregioncontrolsmaxresults"></a>

```json
1
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_HomeRegionControls">HomeRegionControls</h2>
<!-- backwards compatibility -->
<a id="schemahomeregioncontrols"></a>
<a id="schema_HomeRegionControls"></a>
<a id="tocShomeregioncontrols"></a>
<a id="tocshomeregioncontrols"></a>

```json
[
  {
    "ControlId": {},
    "HomeRegion": {},
    "Target": {
      "Type": {},
      "Id": {}
    },
    "RequestedTime": {}
  }
]
```

<h2 id="tocS_RequestedTime">RequestedTime</h2>
<!-- backwards compatibility -->
<a id="schemarequestedtime"></a>
<a id="schema_RequestedTime"></a>
<a id="tocSrequestedtime"></a>
<a id="tocsrequestedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"stringstring"
```
