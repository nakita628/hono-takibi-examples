<h1 id="amazon-macie">Amazon Macie v2017-12-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic has been discontinued and is no longer available.</p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User Guide</a>.</p>

Base URLs:

* <a href="http://macie.us-east-1.amazonaws.com">http://macie.us-east-1.amazonaws.com</a> - The Amazon Macie multi-region endpoint

* <a href="https://macie.us-east-1.amazonaws.com">https://macie.us-east-1.amazonaws.com</a> - The Amazon Macie multi-region endpoint

* <a href="http://macie.cn-north-1.amazonaws.com.cn">http://macie.cn-north-1.amazonaws.com.cn</a> - The Amazon Macie endpoint for China (Beijing) and China (Ningxia)

* <a href="https://macie.cn-north-1.amazonaws.com.cn">https://macie.cn-north-1.amazonaws.com.cn</a> - The Amazon Macie endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/macie/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-macie-default">Default</h1>

## AssociateMemberAccount

<a id="opIdAssociateMemberAccount"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.AssociateMemberAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.AssociateMemberAccount' \
  -d '{
    "memberAccountId": {}
  }'
```

`POST /#X-Amz-Target=MacieService.AssociateMemberAccount`

(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.

> Body parameter

```json
{
  "memberAccountId": {}
}
```

<h3 id="associatememberaccount-parameters">Parameters</h3>

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
|body|body|[AssociateMemberAccountRequest](#schemaassociatememberaccountrequest)|true|none|
|» memberAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.AssociateMemberAccount|

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

<h3 id="associatememberaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateS3Resources

<a id="opIdAssociateS3Resources"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.AssociateS3Resources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.AssociateS3Resources' \
  -d '{
    "memberAccountId": {},
    "s3Resources": {}
  }'
```

`POST /#X-Amz-Target=MacieService.AssociateS3Resources`

(Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.

> Body parameter

```json
{
  "memberAccountId": {},
  "s3Resources": {}
}
```

<h3 id="associates3resources-parameters">Parameters</h3>

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
|body|body|[AssociateS3ResourcesRequest](#schemaassociates3resourcesrequest)|true|none|
|» memberAccountId|body|object|false|none|
|» s3Resources|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.AssociateS3Resources|

> Example responses

> 200 Response

```json
{
  "failedS3Resources": {}
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

<h3 id="associates3resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateS3ResourcesResult](#schemaassociates3resourcesresult)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMemberAccount

<a id="opIdDisassociateMemberAccount"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.DisassociateMemberAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.DisassociateMemberAccount' \
  -d '{
    "memberAccountId": {}
  }'
```

`POST /#X-Amz-Target=MacieService.DisassociateMemberAccount`

(Discontinued) Removes the specified member account from Amazon Macie Classic.

> Body parameter

```json
{
  "memberAccountId": {}
}
```

<h3 id="disassociatememberaccount-parameters">Parameters</h3>

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
|body|body|[DisassociateMemberAccountRequest](#schemadisassociatememberaccountrequest)|true|none|
|» memberAccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.DisassociateMemberAccount|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="disassociatememberaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateS3Resources

<a id="opIdDisassociateS3Resources"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.DisassociateS3Resources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.DisassociateS3Resources' \
  -d '{
    "memberAccountId": {},
    "associatedS3Resources": {}
  }'
```

`POST /#X-Amz-Target=MacieService.DisassociateS3Resources`

(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.

> Body parameter

```json
{
  "memberAccountId": {},
  "associatedS3Resources": {}
}
```

<h3 id="disassociates3resources-parameters">Parameters</h3>

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
|body|body|[DisassociateS3ResourcesRequest](#schemadisassociates3resourcesrequest)|true|none|
|» memberAccountId|body|object|false|none|
|» associatedS3Resources|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.DisassociateS3Resources|

> Example responses

> 200 Response

```json
{
  "failedS3Resources": {}
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

<h3 id="disassociates3resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateS3ResourcesResult](#schemadisassociates3resourcesresult)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMemberAccounts

<a id="opIdListMemberAccounts"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.ListMemberAccounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.ListMemberAccounts' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=MacieService.ListMemberAccounts`

(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listmemberaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListMemberAccountsRequest](#schemalistmemberaccountsrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.ListMemberAccounts|

> Example responses

> 200 Response

```json
{
  "memberAccounts": {},
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

<h3 id="listmemberaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMemberAccountsResult](#schemalistmemberaccountsresult)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListS3Resources

<a id="opIdListS3Resources"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.ListS3Resources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.ListS3Resources' \
  -d '{
    "memberAccountId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=MacieService.ListS3Resources`

(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 

> Body parameter

```json
{
  "memberAccountId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="lists3resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListS3ResourcesRequest](#schemalists3resourcesrequest)|true|none|
|» memberAccountId|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.ListS3Resources|

> Example responses

> 200 Response

```json
{
  "s3Resources": {},
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

<h3 id="lists3resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListS3ResourcesResult](#schemalists3resourcesresult)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateS3Resources

<a id="opIdUpdateS3Resources"></a>

> Code samples

```bash
curl 'https://macie.us-east-1.amazonaws.com/#X-Amz-Target=MacieService.UpdateS3Resources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MacieService.UpdateS3Resources' \
  -d '{
    "memberAccountId": {},
    "s3ResourcesUpdate": {}
  }'
```

`POST /#X-Amz-Target=MacieService.UpdateS3Resources`

(Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

> Body parameter

```json
{
  "memberAccountId": {},
  "s3ResourcesUpdate": {}
}
```

<h3 id="updates3resources-parameters">Parameters</h3>

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
|body|body|[UpdateS3ResourcesRequest](#schemaupdates3resourcesrequest)|true|none|
|» memberAccountId|body|object|false|none|
|» s3ResourcesUpdate|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MacieService.UpdateS3Resources|

> Example responses

> 200 Response

```json
{
  "failedS3Resources": {}
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

<h3 id="updates3resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateS3ResourcesResult](#schemaupdates3resourcesresult)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateMemberAccountRequest">AssociateMemberAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatememberaccountrequest"></a>
<a id="schema_AssociateMemberAccountRequest"></a>
<a id="tocSassociatememberaccountrequest"></a>
<a id="tocsassociatememberaccountrequest"></a>

```json
{
  "memberAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|true|none|none|

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

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

<h2 id="tocS_InternalException">InternalException</h2>
<!-- backwards compatibility -->
<a id="schemainternalexception"></a>
<a id="schema_InternalException"></a>
<a id="tocSinternalexception"></a>
<a id="tocsinternalexception"></a>

```json
null
```

<h2 id="tocS_AssociateS3ResourcesResult">AssociateS3ResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociates3resourcesresult"></a>
<a id="schema_AssociateS3ResourcesResult"></a>
<a id="tocSassociates3resourcesresult"></a>
<a id="tocsassociates3resourcesresult"></a>

```json
{
  "failedS3Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedS3Resources|object|false|none|none|

<h2 id="tocS_AssociateS3ResourcesRequest">AssociateS3ResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociates3resourcesrequest"></a>
<a id="schema_AssociateS3ResourcesRequest"></a>
<a id="tocSassociates3resourcesrequest"></a>
<a id="tocsassociates3resourcesrequest"></a>

```json
{
  "memberAccountId": {},
  "s3Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|false|none|none|
|s3Resources|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_DisassociateMemberAccountRequest">DisassociateMemberAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatememberaccountrequest"></a>
<a id="schema_DisassociateMemberAccountRequest"></a>
<a id="tocSdisassociatememberaccountrequest"></a>
<a id="tocsdisassociatememberaccountrequest"></a>

```json
{
  "memberAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|true|none|none|

<h2 id="tocS_DisassociateS3ResourcesResult">DisassociateS3ResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociates3resourcesresult"></a>
<a id="schema_DisassociateS3ResourcesResult"></a>
<a id="tocSdisassociates3resourcesresult"></a>
<a id="tocsdisassociates3resourcesresult"></a>

```json
{
  "failedS3Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedS3Resources|object|false|none|none|

<h2 id="tocS_DisassociateS3ResourcesRequest">DisassociateS3ResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociates3resourcesrequest"></a>
<a id="schema_DisassociateS3ResourcesRequest"></a>
<a id="tocSdisassociates3resourcesrequest"></a>
<a id="tocsdisassociates3resourcesrequest"></a>

```json
{
  "memberAccountId": {},
  "associatedS3Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|false|none|none|
|associatedS3Resources|object|true|none|none|

<h2 id="tocS_ListMemberAccountsResult">ListMemberAccountsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistmemberaccountsresult"></a>
<a id="schema_ListMemberAccountsResult"></a>
<a id="tocSlistmemberaccountsresult"></a>
<a id="tocslistmemberaccountsresult"></a>

```json
{
  "memberAccounts": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccounts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMemberAccountsRequest">ListMemberAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmemberaccountsrequest"></a>
<a id="schema_ListMemberAccountsRequest"></a>
<a id="tocSlistmemberaccountsrequest"></a>
<a id="tocslistmemberaccountsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListS3ResourcesResult">ListS3ResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemalists3resourcesresult"></a>
<a id="schema_ListS3ResourcesResult"></a>
<a id="tocSlists3resourcesresult"></a>
<a id="tocslists3resourcesresult"></a>

```json
{
  "s3Resources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Resources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListS3ResourcesRequest">ListS3ResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalists3resourcesrequest"></a>
<a id="schema_ListS3ResourcesRequest"></a>
<a id="tocSlists3resourcesrequest"></a>
<a id="tocslists3resourcesrequest"></a>

```json
{
  "memberAccountId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_UpdateS3ResourcesResult">UpdateS3ResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdates3resourcesresult"></a>
<a id="schema_UpdateS3ResourcesResult"></a>
<a id="tocSupdates3resourcesresult"></a>
<a id="tocsupdates3resourcesresult"></a>

```json
{
  "failedS3Resources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedS3Resources|object|false|none|none|

<h2 id="tocS_UpdateS3ResourcesRequest">UpdateS3ResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdates3resourcesrequest"></a>
<a id="schema_UpdateS3ResourcesRequest"></a>
<a id="tocSupdates3resourcesrequest"></a>
<a id="tocsupdates3resourcesrequest"></a>

```json
{
  "memberAccountId": {},
  "s3ResourcesUpdate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberAccountId|object|false|none|none|
|s3ResourcesUpdate|object|true|none|none|

<h2 id="tocS_AWSAccountId">AWSAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AWSAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_S3ResourcesClassification">S3ResourcesClassification</h2>
<!-- backwards compatibility -->
<a id="schemas3resourcesclassification"></a>
<a id="schema_S3ResourcesClassification"></a>
<a id="tocSs3resourcesclassification"></a>
<a id="tocss3resourcesclassification"></a>

```json
[
  {
    "bucketName": {},
    "prefix": {},
    "classificationType": {
      "oneTime": {},
      "continuous": {}
    }
  }
]
```

<h2 id="tocS_FailedS3Resources">FailedS3Resources</h2>
<!-- backwards compatibility -->
<a id="schemafaileds3resources"></a>
<a id="schema_FailedS3Resources"></a>
<a id="tocSfaileds3resources"></a>
<a id="tocsfaileds3resources"></a>

```json
[
  {
    "failedItem": {
      "bucketName": {},
      "prefix": {}
    },
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_S3OneTimeClassificationType">S3OneTimeClassificationType</h2>
<!-- backwards compatibility -->
<a id="schemas3onetimeclassificationtype"></a>
<a id="schema_S3OneTimeClassificationType"></a>
<a id="tocSs3onetimeclassificationtype"></a>
<a id="tocss3onetimeclassificationtype"></a>

```json
"FULL"
```

<h2 id="tocS_S3ContinuousClassificationType">S3ContinuousClassificationType</h2>
<!-- backwards compatibility -->
<a id="schemas3continuousclassificationtype"></a>
<a id="schema_S3ContinuousClassificationType"></a>
<a id="tocSs3continuousclassificationtype"></a>
<a id="tocss3continuousclassificationtype"></a>

```json
"FULL"
```

<h2 id="tocS_ClassificationType">ClassificationType</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationtype"></a>
<a id="schema_ClassificationType"></a>
<a id="tocSclassificationtype"></a>
<a id="tocsclassificationtype"></a>

```json
{
  "oneTime": {},
  "continuous": {}
}
```

(Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oneTime|object|true|none|none|
|continuous|object|true|none|none|

<h2 id="tocS_ClassificationTypeUpdate">ClassificationTypeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationtypeupdate"></a>
<a id="schema_ClassificationTypeUpdate"></a>
<a id="tocSclassificationtypeupdate"></a>
<a id="tocsclassificationtypeupdate"></a>

```json
{
  "oneTime": {},
  "continuous": {}
}
```

(Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oneTime|object|false|none|none|
|continuous|object|false|none|none|

<h2 id="tocS_S3Resources">S3Resources</h2>
<!-- backwards compatibility -->
<a id="schemas3resources"></a>
<a id="schema_S3Resources"></a>
<a id="tocSs3resources"></a>
<a id="tocss3resources"></a>

```json
[
  {
    "bucketName": {},
    "prefix": {}
  }
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

Error code for the exception

<h2 id="tocS_ExceptionMessage">ExceptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionmessage"></a>
<a id="schema_ExceptionMessage"></a>
<a id="tocSexceptionmessage"></a>
<a id="tocsexceptionmessage"></a>

```json
"string"
```

<h2 id="tocS_S3Resource">S3Resource</h2>
<!-- backwards compatibility -->
<a id="schemas3resource"></a>
<a id="schema_S3Resource"></a>
<a id="tocSs3resource"></a>
<a id="tocss3resource"></a>

```json
{
  "bucketName": {},
  "prefix": {}
}
```

(Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_FailedS3Resource">FailedS3Resource</h2>
<!-- backwards compatibility -->
<a id="schemafaileds3resource"></a>
<a id="schema_FailedS3Resource"></a>
<a id="tocSfaileds3resource"></a>
<a id="tocsfaileds3resource"></a>

```json
{
  "failedItem": {
    "bucketName": {},
    "prefix": {}
  },
  "errorCode": {},
  "errorMessage": {}
}
```

(Discontinued) Includes details about the failed S3 resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedItem|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_MemberAccounts">MemberAccounts</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccounts"></a>
<a id="schema_MemberAccounts"></a>
<a id="tocSmemberaccounts"></a>
<a id="tocsmemberaccounts"></a>

```json
[
  {
    "accountId": {}
  }
]
```

<h2 id="tocS_MemberAccount">MemberAccount</h2>
<!-- backwards compatibility -->
<a id="schemamemberaccount"></a>
<a id="schema_MemberAccount"></a>
<a id="tocSmemberaccount"></a>
<a id="tocsmemberaccount"></a>

```json
{
  "accountId": {}
}
```

(Discontinued) Contains information about the Amazon Macie Classic member account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_S3ResourceClassification">S3ResourceClassification</h2>
<!-- backwards compatibility -->
<a id="schemas3resourceclassification"></a>
<a id="schema_S3ResourceClassification"></a>
<a id="tocSs3resourceclassification"></a>
<a id="tocss3resourceclassification"></a>

```json
{
  "bucketName": {},
  "prefix": {},
  "classificationType": {
    "oneTime": {},
    "continuous": {}
  }
}
```

(Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|prefix|object|false|none|none|
|classificationType|object|true|none|none|

<h2 id="tocS_S3ResourceClassificationUpdate">S3ResourceClassificationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3resourceclassificationupdate"></a>
<a id="schema_S3ResourceClassificationUpdate"></a>
<a id="tocSs3resourceclassificationupdate"></a>
<a id="tocss3resourceclassificationupdate"></a>

```json
{
  "bucketName": {},
  "prefix": {},
  "classificationTypeUpdate": {
    "oneTime": {},
    "continuous": {}
  }
}
```

(Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|prefix|object|false|none|none|
|classificationTypeUpdate|object|true|none|none|

<h2 id="tocS_S3ResourcesClassificationUpdate">S3ResourcesClassificationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3resourcesclassificationupdate"></a>
<a id="schema_S3ResourcesClassificationUpdate"></a>
<a id="tocSs3resourcesclassificationupdate"></a>
<a id="tocss3resourcesclassificationupdate"></a>

```json
[
  {
    "bucketName": {},
    "prefix": {},
    "classificationTypeUpdate": {
      "oneTime": {},
      "continuous": {}
    }
  }
]
```
