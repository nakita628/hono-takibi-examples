<h1 id="amazon-workmail">Amazon WorkMail v2017-10-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

Base URLs:

* <a href="http://workmail.us-east-1.amazonaws.com">http://workmail.us-east-1.amazonaws.com</a> - The Amazon WorkMail multi-region endpoint

* <a href="https://workmail.us-east-1.amazonaws.com">https://workmail.us-east-1.amazonaws.com</a> - The Amazon WorkMail multi-region endpoint

* <a href="http://workmail.cn-north-1.amazonaws.com.cn">http://workmail.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkMail endpoint for China (Beijing) and China (Ningxia)

* <a href="https://workmail.cn-north-1.amazonaws.com.cn">https://workmail.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkMail endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/workmail/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-workmail-default">Default</h1>

## AssociateDelegateToResource

<a id="opIdAssociateDelegateToResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.AssociateDelegateToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.AssociateDelegateToResource' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {},
    "EntityId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.AssociateDelegateToResource`

Adds a member (user or group) to the resource's set of delegates.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "EntityId": {}
}
```

<h3 id="associatedelegatetoresource-parameters">Parameters</h3>

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
|body|body|[AssociateDelegateToResourceRequest](#schemaassociatedelegatetoresourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» EntityId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.AssociateDelegateToResource|

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

<h3 id="associatedelegatetoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDelegateToResourceResponse](#schemaassociatedelegatetoresourceresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateMemberToGroup

<a id="opIdAssociateMemberToGroup"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.AssociateMemberToGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.AssociateMemberToGroup' \
  -d '{
    "OrganizationId": {},
    "GroupId": {},
    "MemberId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.AssociateMemberToGroup`

Adds a member (user or group) to the group's set.

> Body parameter

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "MemberId": {}
}
```

<h3 id="associatemembertogroup-parameters">Parameters</h3>

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
|body|body|[AssociateMemberToGroupRequest](#schemaassociatemembertogrouprequest)|true|none|
|» OrganizationId|body|object|true|none|
|» GroupId|body|object|true|none|
|» MemberId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.AssociateMemberToGroup|

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

<h3 id="associatemembertogroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateMemberToGroupResponse](#schemaassociatemembertogroupresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|486|486|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssumeImpersonationRole

<a id="opIdAssumeImpersonationRole"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.AssumeImpersonationRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.AssumeImpersonationRole' \
  -d '{
    "OrganizationId": {},
    "ImpersonationRoleId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.AssumeImpersonationRole`

Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.

> Body parameter

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

<h3 id="assumeimpersonationrole-parameters">Parameters</h3>

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
|body|body|[AssumeImpersonationRoleRequest](#schemaassumeimpersonationrolerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.AssumeImpersonationRole|

> Example responses

> 200 Response

```json
{
  "Token": {},
  "ExpiresIn": {}
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

<h3 id="assumeimpersonationrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeImpersonationRoleResponse](#schemaassumeimpersonationroleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelMailboxExportJob

<a id="opIdCancelMailboxExportJob"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CancelMailboxExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CancelMailboxExportJob' \
  -d '{
    "ClientToken": {},
    "JobId": {},
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CancelMailboxExportJob`

<p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>

> Body parameter

```json
{
  "ClientToken": {},
  "JobId": {},
  "OrganizationId": {}
}
```

<h3 id="cancelmailboxexportjob-parameters">Parameters</h3>

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
|body|body|[CancelMailboxExportJobRequest](#schemacancelmailboxexportjobrequest)|true|none|
|» ClientToken|body|object|true|none|
|» JobId|body|object|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CancelMailboxExportJob|

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

<h3 id="cancelmailboxexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelMailboxExportJobResponse](#schemacancelmailboxexportjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateAlias' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "Alias": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateAlias`

Adds an alias to the set of a given member (user or group) of WorkMail.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Alias": {}
}
```

<h3 id="createalias-parameters">Parameters</h3>

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
|body|body|[CreateAliasRequest](#schemacreatealiasrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» Alias|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateAlias|

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

<h3 id="createalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAliasResponse](#schemacreatealiasresponse)|
|480|480|EmailAddressInUseException|[EmailAddressInUseException](#schemaemailaddressinuseexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|485|485|MailDomainStateException|[MailDomainStateException](#schemamaildomainstateexception)|
|486|486|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|487|487|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|488|488|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAvailabilityConfiguration

<a id="opIdCreateAvailabilityConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateAvailabilityConfiguration' \
  -d '{
    "ClientToken": {},
    "OrganizationId": {},
    "DomainName": {},
    "EwsProvider": {
      "EwsEndpoint": {},
      "EwsUsername": {},
      "EwsPassword": {}
    },
    "LambdaProvider": {
      "LambdaArn": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration`

Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

> Body parameter

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

<h3 id="createavailabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateAvailabilityConfigurationRequest](#schemacreateavailabilityconfigurationrequest)|true|none|
|» ClientToken|body|object|false|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|
|» EwsProvider|body|object|false|none|
|» » EwsEndpoint|body|object|true|none|
|» » EwsUsername|body|object|true|none|
|» » EwsPassword|body|object|true|none|
|» LambdaProvider|body|object|false|none|
|» » LambdaArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateAvailabilityConfiguration|

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

<h3 id="createavailabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAvailabilityConfigurationResponse](#schemacreateavailabilityconfigurationresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|482|482|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateGroup' \
  -d '{
    "OrganizationId": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateGroup`

Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

> Body parameter

```json
{
  "OrganizationId": {},
  "Name": {}
}
```

<h3 id="creategroup-parameters">Parameters</h3>

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
|body|body|[CreateGroupRequest](#schemacreategrouprequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateGroup|

> Example responses

> 200 Response

```json
{
  "GroupId": {}
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResponse](#schemacreategroupresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|
|484|484|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|485|485|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|486|486|ReservedNameException|[ReservedNameException](#schemareservednameexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImpersonationRole

<a id="opIdCreateImpersonationRole"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateImpersonationRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateImpersonationRole' \
  -d '{
    "ClientToken": {},
    "OrganizationId": {},
    "Name": {},
    "Type": {},
    "Description": {},
    "Rules": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateImpersonationRole`

<p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>

> Body parameter

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {}
}
```

<h3 id="createimpersonationrole-parameters">Parameters</h3>

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
|body|body|[CreateImpersonationRoleRequest](#schemacreateimpersonationrolerequest)|true|none|
|» ClientToken|body|object|false|none|
|» OrganizationId|body|object|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateImpersonationRole|

> Example responses

> 200 Response

```json
{
  "ImpersonationRoleId": {}
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

<h3 id="createimpersonationrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImpersonationRoleResponse](#schemacreateimpersonationroleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMobileDeviceAccessRule

<a id="opIdCreateMobileDeviceAccessRule"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateMobileDeviceAccessRule' \
  -d '{
    "OrganizationId": {},
    "ClientToken": {},
    "Name": {},
    "Description": {},
    "Effect": {},
    "DeviceTypes": {},
    "NotDeviceTypes": {},
    "DeviceModels": {},
    "NotDeviceModels": {},
    "DeviceOperatingSystems": {},
    "NotDeviceOperatingSystems": {},
    "DeviceUserAgents": {},
    "NotDeviceUserAgents": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule`

Creates a new mobile device access rule for the specified WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "ClientToken": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "DeviceTypes": {},
  "NotDeviceTypes": {},
  "DeviceModels": {},
  "NotDeviceModels": {},
  "DeviceOperatingSystems": {},
  "NotDeviceOperatingSystems": {},
  "DeviceUserAgents": {},
  "NotDeviceUserAgents": {}
}
```

<h3 id="createmobiledeviceaccessrule-parameters">Parameters</h3>

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
|body|body|[CreateMobileDeviceAccessRuleRequest](#schemacreatemobiledeviceaccessrulerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ClientToken|body|object|false|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» Effect|body|object|true|none|
|» DeviceTypes|body|object|false|none|
|» NotDeviceTypes|body|object|false|none|
|» DeviceModels|body|object|false|none|
|» NotDeviceModels|body|object|false|none|
|» DeviceOperatingSystems|body|object|false|none|
|» NotDeviceOperatingSystems|body|object|false|none|
|» DeviceUserAgents|body|object|false|none|
|» NotDeviceUserAgents|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateMobileDeviceAccessRule|

> Example responses

> 200 Response

```json
{
  "MobileDeviceAccessRuleId": {}
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

<h3 id="createmobiledeviceaccessrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMobileDeviceAccessRuleResponse](#schemacreatemobiledeviceaccessruleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOrganization

<a id="opIdCreateOrganization"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateOrganization' \
  -d '{
    "DirectoryId": {},
    "Alias": {},
    "ClientToken": {},
    "Domains": {},
    "KmsKeyArn": {},
    "EnableInteroperability": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateOrganization`

<p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>

> Body parameter

```json
{
  "DirectoryId": {},
  "Alias": {},
  "ClientToken": {},
  "Domains": {},
  "KmsKeyArn": {},
  "EnableInteroperability": {}
}
```

<h3 id="createorganization-parameters">Parameters</h3>

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
|body|body|[CreateOrganizationRequest](#schemacreateorganizationrequest)|true|none|
|» DirectoryId|body|object|false|none|
|» Alias|body|object|true|none|
|» ClientToken|body|object|false|none|
|» Domains|body|object|false|none|
|» KmsKeyArn|body|object|false|none|
|» EnableInteroperability|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateOrganization|

> Example responses

> 200 Response

```json
{
  "OrganizationId": {}
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

<h3 id="createorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOrganizationResponse](#schemacreateorganizationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DirectoryInUseException|[DirectoryInUseException](#schemadirectoryinuseexception)|
|482|482|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResource

<a id="opIdCreateResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateResource' \
  -d '{
    "OrganizationId": {},
    "Name": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateResource`

Creates a new WorkMail resource.

> Body parameter

```json
{
  "OrganizationId": {},
  "Name": {},
  "Type": {}
}
```

<h3 id="createresource-parameters">Parameters</h3>

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
|body|body|[CreateResourceRequest](#schemacreateresourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateResource|

> Example responses

> 200 Response

```json
{
  "ResourceId": {}
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

<h3 id="createresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceResponse](#schemacreateresourceresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|
|484|484|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|485|485|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|486|486|ReservedNameException|[ReservedNameException](#schemareservednameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.CreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.CreateUser' \
  -d '{
    "OrganizationId": {},
    "Name": {},
    "DisplayName": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.CreateUser`

Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

> Body parameter

```json
{
  "OrganizationId": {},
  "Name": {},
  "DisplayName": {},
  "Password": {}
}
```

<h3 id="createuser-parameters">Parameters</h3>

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
|body|body|[CreateUserRequest](#schemacreateuserrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Name|body|object|true|none|
|» DisplayName|body|object|true|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.CreateUser|

> Example responses

> 200 Response

```json
{
  "UserId": {}
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|484|484|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|
|485|485|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|486|486|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|487|487|ReservedNameException|[ReservedNameException](#schemareservednameexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessControlRule

<a id="opIdDeleteAccessControlRule"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteAccessControlRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteAccessControlRule' \
  -d '{
    "OrganizationId": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteAccessControlRule`

<p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

> Body parameter

```json
{
  "OrganizationId": {},
  "Name": {}
}
```

<h3 id="deleteaccesscontrolrule-parameters">Parameters</h3>

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
|body|body|[DeleteAccessControlRuleRequest](#schemadeleteaccesscontrolrulerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteAccessControlRule|

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

<h3 id="deleteaccesscontrolrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccessControlRuleResponse](#schemadeleteaccesscontrolruleresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlias

<a id="opIdDeleteAlias"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteAlias' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "Alias": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteAlias`

Remove one or more specified aliases from a set of aliases for a given user.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Alias": {}
}
```

<h3 id="deletealias-parameters">Parameters</h3>

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
|body|body|[DeleteAliasRequest](#schemadeletealiasrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» Alias|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteAlias|

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

<h3 id="deletealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAliasResponse](#schemadeletealiasresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAvailabilityConfiguration

<a id="opIdDeleteAvailabilityConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteAvailabilityConfiguration' \
  -d '{
    "OrganizationId": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration`

Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

<h3 id="deleteavailabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAvailabilityConfigurationRequest](#schemadeleteavailabilityconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteAvailabilityConfiguration|

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

<h3 id="deleteavailabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAvailabilityConfigurationResponse](#schemadeleteavailabilityconfigurationresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEmailMonitoringConfiguration

<a id="opIdDeleteEmailMonitoringConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteEmailMonitoringConfiguration' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration`

Deletes the email monitoring configuration for a specified organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="deleteemailmonitoringconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteEmailMonitoringConfigurationRequest](#schemadeleteemailmonitoringconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteEmailMonitoringConfiguration|

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

<h3 id="deleteemailmonitoringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEmailMonitoringConfigurationResponse](#schemadeleteemailmonitoringconfigurationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteGroup' \
  -d '{
    "OrganizationId": {},
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteGroup`

Deletes a group from WorkMail.

> Body parameter

```json
{
  "OrganizationId": {},
  "GroupId": {}
}
```

<h3 id="deletegroup-parameters">Parameters</h3>

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
|body|body|[DeleteGroupRequest](#schemadeletegrouprequest)|true|none|
|» OrganizationId|body|object|true|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteGroup|

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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupResponse](#schemadeletegroupresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|485|485|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImpersonationRole

<a id="opIdDeleteImpersonationRole"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteImpersonationRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteImpersonationRole' \
  -d '{
    "OrganizationId": {},
    "ImpersonationRoleId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteImpersonationRole`

Deletes an impersonation role for the given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

<h3 id="deleteimpersonationrole-parameters">Parameters</h3>

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
|body|body|[DeleteImpersonationRoleRequest](#schemadeleteimpersonationrolerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteImpersonationRole|

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

<h3 id="deleteimpersonationrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImpersonationRoleResponse](#schemadeleteimpersonationroleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMailboxPermissions

<a id="opIdDeleteMailboxPermissions"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteMailboxPermissions' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "GranteeId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteMailboxPermissions`

Deletes permissions granted to a member (user or group).

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "GranteeId": {}
}
```

<h3 id="deletemailboxpermissions-parameters">Parameters</h3>

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
|body|body|[DeleteMailboxPermissionsRequest](#schemadeletemailboxpermissionsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» GranteeId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteMailboxPermissions|

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

<h3 id="deletemailboxpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMailboxPermissionsResponse](#schemadeletemailboxpermissionsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMobileDeviceAccessOverride

<a id="opIdDeleteMobileDeviceAccessOverride"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteMobileDeviceAccessOverride' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "DeviceId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride`

<p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {}
}
```

<h3 id="deletemobiledeviceaccessoverride-parameters">Parameters</h3>

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
|body|body|[DeleteMobileDeviceAccessOverrideRequest](#schemadeletemobiledeviceaccessoverriderequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|
|» DeviceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteMobileDeviceAccessOverride|

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

<h3 id="deletemobiledeviceaccessoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMobileDeviceAccessOverrideResponse](#schemadeletemobiledeviceaccessoverrideresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMobileDeviceAccessRule

<a id="opIdDeleteMobileDeviceAccessRule"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteMobileDeviceAccessRule' \
  -d '{
    "OrganizationId": {},
    "MobileDeviceAccessRuleId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule`

<p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

> Body parameter

```json
{
  "OrganizationId": {},
  "MobileDeviceAccessRuleId": {}
}
```

<h3 id="deletemobiledeviceaccessrule-parameters">Parameters</h3>

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
|body|body|[DeleteMobileDeviceAccessRuleRequest](#schemadeletemobiledeviceaccessrulerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» MobileDeviceAccessRuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteMobileDeviceAccessRule|

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

<h3 id="deletemobiledeviceaccessrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMobileDeviceAccessRuleResponse](#schemadeletemobiledeviceaccessruleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOrganization

<a id="opIdDeleteOrganization"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteOrganization' \
  -d '{
    "ClientToken": {},
    "OrganizationId": {},
    "DeleteDirectory": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteOrganization`

Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.

> Body parameter

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DeleteDirectory": {}
}
```

<h3 id="deleteorganization-parameters">Parameters</h3>

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
|body|body|[DeleteOrganizationRequest](#schemadeleteorganizationrequest)|true|none|
|» ClientToken|body|object|false|none|
|» OrganizationId|body|object|true|none|
|» DeleteDirectory|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteOrganization|

> Example responses

> 200 Response

```json
{
  "OrganizationId": {},
  "State": {}
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

<h3 id="deleteorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteOrganizationResponse](#schemadeleteorganizationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResource

<a id="opIdDeleteResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteResource' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteResource`

Deletes the specified resource.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {}
}
```

<h3 id="deleteresource-parameters">Parameters</h3>

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
|body|body|[DeleteResourceRequest](#schemadeleteresourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteResource|

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

<h3 id="deleteresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourceResponse](#schemadeleteresourceresponse)|
|480|480|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRetentionPolicy

<a id="opIdDeleteRetentionPolicy"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteRetentionPolicy' \
  -d '{
    "OrganizationId": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteRetentionPolicy`

Deletes the specified retention policy from the specified organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "Id": {}
}
```

<h3 id="deleteretentionpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteRetentionPolicyRequest](#schemadeleteretentionpolicyrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteRetentionPolicy|

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

<h3 id="deleteretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRetentionPolicyResponse](#schemadeleteretentionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeleteUser' \
  -d '{
    "OrganizationId": {},
    "UserId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeleteUser`

<p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

<h3 id="deleteuser-parameters">Parameters</h3>

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
|body|body|[DeleteUserRequest](#schemadeleteuserrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeleteUser|

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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserResponse](#schemadeleteuserresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|485|485|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|486|486|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterFromWorkMail

<a id="opIdDeregisterFromWorkMail"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeregisterFromWorkMail' \
  -d '{
    "OrganizationId": {},
    "EntityId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeregisterFromWorkMail`

Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {}
}
```

<h3 id="deregisterfromworkmail-parameters">Parameters</h3>

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
|body|body|[DeregisterFromWorkMailRequest](#schemaderegisterfromworkmailrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeregisterFromWorkMail|

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

<h3 id="deregisterfromworkmail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterFromWorkMailResponse](#schemaderegisterfromworkmailresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterMailDomain

<a id="opIdDeregisterMailDomain"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DeregisterMailDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DeregisterMailDomain' \
  -d '{
    "OrganizationId": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DeregisterMailDomain`

Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

<h3 id="deregistermaildomain-parameters">Parameters</h3>

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
|body|body|[DeregisterMailDomainRequest](#schemaderegistermaildomainrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DeregisterMailDomain|

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

<h3 id="deregistermaildomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterMailDomainResponse](#schemaderegistermaildomainresponse)|
|480|480|MailDomainInUseException|[MailDomainInUseException](#schemamaildomaininuseexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InvalidCustomSesConfigurationException|[InvalidCustomSesConfigurationException](#schemainvalidcustomsesconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEmailMonitoringConfiguration

<a id="opIdDescribeEmailMonitoringConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeEmailMonitoringConfiguration' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration`

Describes the current email monitoring configuration for a specified organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="describeemailmonitoringconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeEmailMonitoringConfigurationRequest](#schemadescribeemailmonitoringconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeEmailMonitoringConfiguration|

> Example responses

> 200 Response

```json
{
  "RoleArn": {},
  "LogGroupArn": {}
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

<h3 id="describeemailmonitoringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEmailMonitoringConfigurationResponse](#schemadescribeemailmonitoringconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGroup

<a id="opIdDescribeGroup"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeGroup' \
  -d '{
    "OrganizationId": {},
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeGroup`

Returns the data available for the group.

> Body parameter

```json
{
  "OrganizationId": {},
  "GroupId": {}
}
```

<h3 id="describegroup-parameters">Parameters</h3>

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
|body|body|[DescribeGroupRequest](#schemadescribegrouprequest)|true|none|
|» OrganizationId|body|object|true|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeGroup|

> Example responses

> 200 Response

```json
{
  "GroupId": {},
  "Name": {},
  "Email": {},
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
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

<h3 id="describegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGroupResponse](#schemadescribegroupresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInboundDmarcSettings

<a id="opIdDescribeInboundDmarcSettings"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeInboundDmarcSettings' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings`

Lists the settings in a DMARC policy for a specified organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="describeinbounddmarcsettings-parameters">Parameters</h3>

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
|body|body|[DescribeInboundDmarcSettingsRequest](#schemadescribeinbounddmarcsettingsrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeInboundDmarcSettings|

> Example responses

> 200 Response

```json
{
  "Enforced": {}
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

<h3 id="describeinbounddmarcsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInboundDmarcSettingsResponse](#schemadescribeinbounddmarcsettingsresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMailboxExportJob

<a id="opIdDescribeMailboxExportJob"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeMailboxExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeMailboxExportJob' \
  -d '{
    "JobId": {},
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeMailboxExportJob`

Describes the current status of a mailbox export job.

> Body parameter

```json
{
  "JobId": {},
  "OrganizationId": {}
}
```

<h3 id="describemailboxexportjob-parameters">Parameters</h3>

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
|body|body|[DescribeMailboxExportJobRequest](#schemadescribemailboxexportjobrequest)|true|none|
|» JobId|body|object|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeMailboxExportJob|

> Example responses

> 200 Response

```json
{
  "EntityId": {},
  "Description": {},
  "RoleArn": {},
  "KmsKeyArn": {},
  "S3BucketName": {},
  "S3Prefix": {},
  "S3Path": {},
  "EstimatedProgress": {},
  "State": {},
  "ErrorInfo": {},
  "StartTime": {},
  "EndTime": {}
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

<h3 id="describemailboxexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMailboxExportJobResponse](#schemadescribemailboxexportjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganization

<a id="opIdDescribeOrganization"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeOrganization' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeOrganization`

Provides more information regarding a given organization based on its identifier.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="describeorganization-parameters">Parameters</h3>

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
|body|body|[DescribeOrganizationRequest](#schemadescribeorganizationrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeOrganization|

> Example responses

> 200 Response

```json
{
  "OrganizationId": {},
  "Alias": {},
  "State": {},
  "DirectoryId": {},
  "DirectoryType": {},
  "DefaultMailDomain": {},
  "CompletedDate": {},
  "ErrorMessage": {},
  "ARN": {}
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

<h3 id="describeorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationResponse](#schemadescribeorganizationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResource

<a id="opIdDescribeResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeResource' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeResource`

Returns the data available for the resource.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {}
}
```

<h3 id="describeresource-parameters">Parameters</h3>

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
|body|body|[DescribeResourceRequest](#schemadescriberesourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeResource|

> Example responses

> 200 Response

```json
{
  "ResourceId": {},
  "Email": {},
  "Name": {},
  "Type": {},
  "BookingOptions": {
    "AutoAcceptRequests": {},
    "AutoDeclineRecurringRequests": {},
    "AutoDeclineConflictingRequests": {}
  },
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
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

<h3 id="describeresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourceResponse](#schemadescriberesourceresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUser

<a id="opIdDescribeUser"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DescribeUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DescribeUser' \
  -d '{
    "OrganizationId": {},
    "UserId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DescribeUser`

Provides information regarding the user.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

<h3 id="describeuser-parameters">Parameters</h3>

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
|body|body|[DescribeUserRequest](#schemadescribeuserrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DescribeUser|

> Example responses

> 200 Response

```json
{
  "UserId": {},
  "Name": {},
  "Email": {},
  "DisplayName": {},
  "State": {},
  "UserRole": {},
  "EnabledDate": {},
  "DisabledDate": {}
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

<h3 id="describeuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserResponse](#schemadescribeuserresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDelegateFromResource

<a id="opIdDisassociateDelegateFromResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DisassociateDelegateFromResource' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {},
    "EntityId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource`

Removes a member from the resource's set of delegates.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "EntityId": {}
}
```

<h3 id="disassociatedelegatefromresource-parameters">Parameters</h3>

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
|body|body|[DisassociateDelegateFromResourceRequest](#schemadisassociatedelegatefromresourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» EntityId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DisassociateDelegateFromResource|

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

<h3 id="disassociatedelegatefromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDelegateFromResourceResponse](#schemadisassociatedelegatefromresourceresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMemberFromGroup

<a id="opIdDisassociateMemberFromGroup"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.DisassociateMemberFromGroup' \
  -d '{
    "OrganizationId": {},
    "GroupId": {},
    "MemberId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup`

Removes a member from a group.

> Body parameter

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "MemberId": {}
}
```

<h3 id="disassociatememberfromgroup-parameters">Parameters</h3>

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
|body|body|[DisassociateMemberFromGroupRequest](#schemadisassociatememberfromgrouprequest)|true|none|
|» OrganizationId|body|object|true|none|
|» GroupId|body|object|true|none|
|» MemberId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.DisassociateMemberFromGroup|

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

<h3 id="disassociatememberfromgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateMemberFromGroupResponse](#schemadisassociatememberfromgroupresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|486|486|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessControlEffect

<a id="opIdGetAccessControlEffect"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetAccessControlEffect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetAccessControlEffect' \
  -d '{
    "OrganizationId": {},
    "IpAddress": {},
    "Action": {},
    "UserId": {},
    "ImpersonationRoleId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetAccessControlEffect`

Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.

> Body parameter

```json
{
  "OrganizationId": {},
  "IpAddress": {},
  "Action": {},
  "UserId": {},
  "ImpersonationRoleId": {}
}
```

<h3 id="getaccesscontroleffect-parameters">Parameters</h3>

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
|body|body|[GetAccessControlEffectRequest](#schemagetaccesscontroleffectrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» IpAddress|body|object|true|none|
|» Action|body|object|true|none|
|» UserId|body|object|false|none|
|» ImpersonationRoleId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetAccessControlEffect|

> Example responses

> 200 Response

```json
{
  "Effect": {},
  "MatchedRules": {}
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

<h3 id="getaccesscontroleffect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessControlEffectResponse](#schemagetaccesscontroleffectresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDefaultRetentionPolicy

<a id="opIdGetDefaultRetentionPolicy"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetDefaultRetentionPolicy' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy`

Gets the default retention policy details for the specified organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="getdefaultretentionpolicy-parameters">Parameters</h3>

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
|body|body|[GetDefaultRetentionPolicyRequest](#schemagetdefaultretentionpolicyrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetDefaultRetentionPolicy|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "FolderConfigurations": {}
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

<h3 id="getdefaultretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDefaultRetentionPolicyResponse](#schemagetdefaultretentionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImpersonationRole

<a id="opIdGetImpersonationRole"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetImpersonationRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetImpersonationRole' \
  -d '{
    "OrganizationId": {},
    "ImpersonationRoleId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetImpersonationRole`

Gets the impersonation role details for the given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

<h3 id="getimpersonationrole-parameters">Parameters</h3>

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
|body|body|[GetImpersonationRoleRequest](#schemagetimpersonationrolerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetImpersonationRole|

> Example responses

> 200 Response

```json
{
  "ImpersonationRoleId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {},
  "DateCreated": {},
  "DateModified": {}
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

<h3 id="getimpersonationrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImpersonationRoleResponse](#schemagetimpersonationroleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImpersonationRoleEffect

<a id="opIdGetImpersonationRoleEffect"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetImpersonationRoleEffect' \
  -d '{
    "OrganizationId": {},
    "ImpersonationRoleId": {},
    "TargetUser": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect`

Tests whether the given impersonation role can impersonate a target user.

> Body parameter

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {},
  "TargetUser": {}
}
```

<h3 id="getimpersonationroleeffect-parameters">Parameters</h3>

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
|body|body|[GetImpersonationRoleEffectRequest](#schemagetimpersonationroleeffectrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleId|body|object|true|none|
|» TargetUser|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetImpersonationRoleEffect|

> Example responses

> 200 Response

```json
{
  "Type": {},
  "Effect": {},
  "MatchedRules": {}
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

<h3 id="getimpersonationroleeffect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImpersonationRoleEffectResponse](#schemagetimpersonationroleeffectresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|485|485|EntityStateException|[EntityStateException](#schemaentitystateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMailDomain

<a id="opIdGetMailDomain"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetMailDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetMailDomain' \
  -d '{
    "OrganizationId": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetMailDomain`

Gets details for a mail domain, including domain records required to configure your domain with recommended security.

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

<h3 id="getmaildomain-parameters">Parameters</h3>

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
|body|body|[GetMailDomainRequest](#schemagetmaildomainrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetMailDomain|

> Example responses

> 200 Response

```json
{
  "Records": {},
  "IsTestDomain": {},
  "IsDefault": {},
  "OwnershipVerificationStatus": {},
  "DkimVerificationStatus": {}
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

<h3 id="getmaildomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMailDomainResponse](#schemagetmaildomainresponse)|
|480|480|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMailboxDetails

<a id="opIdGetMailboxDetails"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetMailboxDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetMailboxDetails' \
  -d '{
    "OrganizationId": {},
    "UserId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetMailboxDetails`

Requests a user's mailbox details for a specified organization and user.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

<h3 id="getmailboxdetails-parameters">Parameters</h3>

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
|body|body|[GetMailboxDetailsRequest](#schemagetmailboxdetailsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetMailboxDetails|

> Example responses

> 200 Response

```json
{
  "MailboxQuota": {},
  "MailboxSize": {}
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

<h3 id="getmailboxdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMailboxDetailsResponse](#schemagetmailboxdetailsresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMobileDeviceAccessEffect

<a id="opIdGetMobileDeviceAccessEffect"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetMobileDeviceAccessEffect' \
  -d '{
    "OrganizationId": {},
    "DeviceType": {},
    "DeviceModel": {},
    "DeviceOperatingSystem": {},
    "DeviceUserAgent": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect`

Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.

> Body parameter

```json
{
  "OrganizationId": {},
  "DeviceType": {},
  "DeviceModel": {},
  "DeviceOperatingSystem": {},
  "DeviceUserAgent": {}
}
```

<h3 id="getmobiledeviceaccesseffect-parameters">Parameters</h3>

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
|body|body|[GetMobileDeviceAccessEffectRequest](#schemagetmobiledeviceaccesseffectrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DeviceType|body|object|false|none|
|» DeviceModel|body|object|false|none|
|» DeviceOperatingSystem|body|object|false|none|
|» DeviceUserAgent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetMobileDeviceAccessEffect|

> Example responses

> 200 Response

```json
{
  "Effect": {},
  "MatchedRules": {}
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

<h3 id="getmobiledeviceaccesseffect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMobileDeviceAccessEffectResponse](#schemagetmobiledeviceaccesseffectresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMobileDeviceAccessOverride

<a id="opIdGetMobileDeviceAccessOverride"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.GetMobileDeviceAccessOverride' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "DeviceId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride`

Gets the mobile device access override for the given WorkMail organization, user, and device.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {}
}
```

<h3 id="getmobiledeviceaccessoverride-parameters">Parameters</h3>

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
|body|body|[GetMobileDeviceAccessOverrideRequest](#schemagetmobiledeviceaccessoverriderequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|
|» DeviceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.GetMobileDeviceAccessOverride|

> Example responses

> 200 Response

```json
{
  "UserId": {},
  "DeviceId": {},
  "Effect": {},
  "Description": {},
  "DateCreated": {},
  "DateModified": {}
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

<h3 id="getmobiledeviceaccessoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMobileDeviceAccessOverrideResponse](#schemagetmobiledeviceaccessoverrideresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessControlRules

<a id="opIdListAccessControlRules"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListAccessControlRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListAccessControlRules' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListAccessControlRules`

Lists the access control rules for the specified organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="listaccesscontrolrules-parameters">Parameters</h3>

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
|body|body|[ListAccessControlRulesRequest](#schemalistaccesscontrolrulesrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListAccessControlRules|

> Example responses

> 200 Response

```json
{
  "Rules": {}
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

<h3 id="listaccesscontrolrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessControlRulesResponse](#schemalistaccesscontrolrulesresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAliases

<a id="opIdListAliases"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListAliases' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListAliases`

Creates a paginated call to list the aliases associated with a given entity.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listaliases-parameters">Parameters</h3>

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
|body|body|[ListAliasesRequest](#schemalistaliasesrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": {},
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

<h3 id="listaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAliasesResponse](#schemalistaliasesresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAvailabilityConfigurations

<a id="opIdListAvailabilityConfigurations"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListAvailabilityConfigurations' \
  -d '{
    "OrganizationId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations`

List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listavailabilityconfigurations-parameters">Parameters</h3>

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
|body|body|[ListAvailabilityConfigurationsRequest](#schemalistavailabilityconfigurationsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListAvailabilityConfigurations|

> Example responses

> 200 Response

```json
{
  "AvailabilityConfigurations": {},
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

<h3 id="listavailabilityconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAvailabilityConfigurationsResponse](#schemalistavailabilityconfigurationsresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupMembers

<a id="opIdListGroupMembers"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListGroupMembers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListGroupMembers' \
  -d '{
    "OrganizationId": {},
    "GroupId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListGroupMembers`

Returns an overview of the members of a group. Users and groups can be members of a group.

> Body parameter

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listgroupmembers-parameters">Parameters</h3>

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
|body|body|[ListGroupMembersRequest](#schemalistgroupmembersrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» GroupId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListGroupMembers|

> Example responses

> 200 Response

```json
{
  "Members": {},
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

<h3 id="listgroupmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupMembersResponse](#schemalistgroupmembersresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListGroups' \
  -d '{
    "OrganizationId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListGroups`

Returns summaries of the organization's groups.

> Body parameter

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listgroups-parameters">Parameters</h3>

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
|body|body|[ListGroupsRequest](#schemalistgroupsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListGroups|

> Example responses

> 200 Response

```json
{
  "Groups": {},
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

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsResponse](#schemalistgroupsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImpersonationRoles

<a id="opIdListImpersonationRoles"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListImpersonationRoles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListImpersonationRoles' \
  -d '{
    "OrganizationId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListImpersonationRoles`

Lists all the impersonation roles for the given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listimpersonationroles-parameters">Parameters</h3>

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
|body|body|[ListImpersonationRolesRequest](#schemalistimpersonationrolesrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListImpersonationRoles|

> Example responses

> 200 Response

```json
{
  "Roles": {},
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

<h3 id="listimpersonationroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImpersonationRolesResponse](#schemalistimpersonationrolesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMailDomains

<a id="opIdListMailDomains"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListMailDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListMailDomains' \
  -d '{
    "OrganizationId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListMailDomains`

Lists the mail domains in a given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listmaildomains-parameters">Parameters</h3>

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
|body|body|[ListMailDomainsRequest](#schemalistmaildomainsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListMailDomains|

> Example responses

> 200 Response

```json
{
  "MailDomains": {},
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

<h3 id="listmaildomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMailDomainsResponse](#schemalistmaildomainsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMailboxExportJobs

<a id="opIdListMailboxExportJobs"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListMailboxExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListMailboxExportJobs' \
  -d '{
    "OrganizationId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListMailboxExportJobs`

Lists the mailbox export jobs started for the specified organization within the last seven days.

> Body parameter

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listmailboxexportjobs-parameters">Parameters</h3>

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
|body|body|[ListMailboxExportJobsRequest](#schemalistmailboxexportjobsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListMailboxExportJobs|

> Example responses

> 200 Response

```json
{
  "Jobs": {},
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

<h3 id="listmailboxexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMailboxExportJobsResponse](#schemalistmailboxexportjobsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMailboxPermissions

<a id="opIdListMailboxPermissions"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListMailboxPermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListMailboxPermissions' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListMailboxPermissions`

Lists the mailbox permissions associated with a user, group, or resource mailbox.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listmailboxpermissions-parameters">Parameters</h3>

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
|body|body|[ListMailboxPermissionsRequest](#schemalistmailboxpermissionsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListMailboxPermissions|

> Example responses

> 200 Response

```json
{
  "Permissions": {},
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

<h3 id="listmailboxpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMailboxPermissionsResponse](#schemalistmailboxpermissionsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMobileDeviceAccessOverrides

<a id="opIdListMobileDeviceAccessOverrides"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListMobileDeviceAccessOverrides' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "DeviceId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides`

Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listmobiledeviceaccessoverrides-parameters">Parameters</h3>

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
|body|body|[ListMobileDeviceAccessOverridesRequest](#schemalistmobiledeviceaccessoverridesrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|false|none|
|» DeviceId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListMobileDeviceAccessOverrides|

> Example responses

> 200 Response

```json
{
  "Overrides": {},
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

<h3 id="listmobiledeviceaccessoverrides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMobileDeviceAccessOverridesResponse](#schemalistmobiledeviceaccessoverridesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMobileDeviceAccessRules

<a id="opIdListMobileDeviceAccessRules"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListMobileDeviceAccessRules' \
  -d '{
    "OrganizationId": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules`

Lists the mobile device access rules for the specified WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {}
}
```

<h3 id="listmobiledeviceaccessrules-parameters">Parameters</h3>

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
|body|body|[ListMobileDeviceAccessRulesRequest](#schemalistmobiledeviceaccessrulesrequest)|true|none|
|» OrganizationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListMobileDeviceAccessRules|

> Example responses

> 200 Response

```json
{
  "Rules": {}
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

<h3 id="listmobiledeviceaccessrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMobileDeviceAccessRulesResponse](#schemalistmobiledeviceaccessrulesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizations

<a id="opIdListOrganizations"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListOrganizations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListOrganizations' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListOrganizations`

Returns summaries of the customer's organizations.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listorganizations-parameters">Parameters</h3>

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
|body|body|[ListOrganizationsRequest](#schemalistorganizationsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListOrganizations|

> Example responses

> 200 Response

```json
{
  "OrganizationSummaries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationsResponse](#schemalistorganizationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceDelegates

<a id="opIdListResourceDelegates"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListResourceDelegates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListResourceDelegates' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListResourceDelegates`

Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresourcedelegates-parameters">Parameters</h3>

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
|body|body|[ListResourceDelegatesRequest](#schemalistresourcedelegatesrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListResourceDelegates|

> Example responses

> 200 Response

```json
{
  "Delegates": {},
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

<h3 id="listresourcedelegates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceDelegatesResponse](#schemalistresourcedelegatesresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResources

<a id="opIdListResources"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListResources' \
  -d '{
    "OrganizationId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListResources`

Returns summaries of the organization's resources.

> Body parameter

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresources-parameters">Parameters</h3>

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
|body|body|[ListResourcesRequest](#schemalistresourcesrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListResources|

> Example responses

> 200 Response

```json
{
  "Resources": {},
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

<h3 id="listresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesResponse](#schemalistresourcesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListTagsForResource`

Lists the tags applied to an WorkMail organization resource.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ListUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ListUsers' \
  -d '{
    "OrganizationId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ListUsers`

Returns summaries of the organization's users.

> Body parameter

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listusers-parameters">Parameters</h3>

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
|body|body|[ListUsersRequest](#schemalistusersrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ListUsers|

> Example responses

> 200 Response

```json
{
  "Users": {},
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccessControlRule

<a id="opIdPutAccessControlRule"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutAccessControlRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutAccessControlRule' \
  -d '{
    "Name": {},
    "Effect": {},
    "Description": {},
    "IpRanges": {},
    "NotIpRanges": {},
    "Actions": {},
    "NotActions": {},
    "UserIds": {},
    "NotUserIds": {},
    "OrganizationId": {},
    "ImpersonationRoleIds": {},
    "NotImpersonationRoleIds": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutAccessControlRule`

Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.

> Body parameter

```json
{
  "Name": {},
  "Effect": {},
  "Description": {},
  "IpRanges": {},
  "NotIpRanges": {},
  "Actions": {},
  "NotActions": {},
  "UserIds": {},
  "NotUserIds": {},
  "OrganizationId": {},
  "ImpersonationRoleIds": {},
  "NotImpersonationRoleIds": {}
}
```

<h3 id="putaccesscontrolrule-parameters">Parameters</h3>

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
|body|body|[PutAccessControlRuleRequest](#schemaputaccesscontrolrulerequest)|true|none|
|» Name|body|object|true|none|
|» Effect|body|object|true|none|
|» Description|body|object|true|none|
|» IpRanges|body|object|false|none|
|» NotIpRanges|body|object|false|none|
|» Actions|body|object|false|none|
|» NotActions|body|object|false|none|
|» UserIds|body|object|false|none|
|» NotUserIds|body|object|false|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleIds|body|object|false|none|
|» NotImpersonationRoleIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutAccessControlRule|

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

<h3 id="putaccesscontrolrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccessControlRuleResponse](#schemaputaccesscontrolruleresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|485|485|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailMonitoringConfiguration

<a id="opIdPutEmailMonitoringConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutEmailMonitoringConfiguration' \
  -d '{
    "OrganizationId": {},
    "RoleArn": {},
    "LogGroupArn": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration`

Creates or updates the email monitoring configuration for a specified organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "RoleArn": {},
  "LogGroupArn": {}
}
```

<h3 id="putemailmonitoringconfiguration-parameters">Parameters</h3>

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
|body|body|[PutEmailMonitoringConfigurationRequest](#schemaputemailmonitoringconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» RoleArn|body|object|true|none|
|» LogGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutEmailMonitoringConfiguration|

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

<h3 id="putemailmonitoringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailMonitoringConfigurationResponse](#schemaputemailmonitoringconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInboundDmarcSettings

<a id="opIdPutInboundDmarcSettings"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutInboundDmarcSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutInboundDmarcSettings' \
  -d '{
    "OrganizationId": {},
    "Enforced": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutInboundDmarcSettings`

Enables or disables a DMARC policy for a given organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "Enforced": {}
}
```

<h3 id="putinbounddmarcsettings-parameters">Parameters</h3>

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
|body|body|[PutInboundDmarcSettingsRequest](#schemaputinbounddmarcsettingsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Enforced|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutInboundDmarcSettings|

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

<h3 id="putinbounddmarcsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInboundDmarcSettingsResponse](#schemaputinbounddmarcsettingsresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMailboxPermissions

<a id="opIdPutMailboxPermissions"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutMailboxPermissions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutMailboxPermissions' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "GranteeId": {},
    "PermissionValues": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutMailboxPermissions`

Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "GranteeId": {},
  "PermissionValues": {}
}
```

<h3 id="putmailboxpermissions-parameters">Parameters</h3>

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
|body|body|[PutMailboxPermissionsRequest](#schemaputmailboxpermissionsrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» GranteeId|body|object|true|none|
|» PermissionValues|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutMailboxPermissions|

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

<h3 id="putmailboxpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMailboxPermissionsResponse](#schemaputmailboxpermissionsresponse)|
|480|480|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|481|481|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|484|484|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMobileDeviceAccessOverride

<a id="opIdPutMobileDeviceAccessOverride"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutMobileDeviceAccessOverride' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "DeviceId": {},
    "Effect": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride`

Creates or updates a mobile device access override for the given WorkMail organization, user, and device.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {},
  "Effect": {},
  "Description": {}
}
```

<h3 id="putmobiledeviceaccessoverride-parameters">Parameters</h3>

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
|body|body|[PutMobileDeviceAccessOverrideRequest](#schemaputmobiledeviceaccessoverriderequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|
|» DeviceId|body|object|true|none|
|» Effect|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutMobileDeviceAccessOverride|

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

<h3 id="putmobiledeviceaccessoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMobileDeviceAccessOverrideResponse](#schemaputmobiledeviceaccessoverrideresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|EntityStateException|[EntityStateException](#schemaentitystateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRetentionPolicy

<a id="opIdPutRetentionPolicy"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.PutRetentionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.PutRetentionPolicy' \
  -d '{
    "OrganizationId": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "FolderConfigurations": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.PutRetentionPolicy`

Puts a retention policy to the specified organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "FolderConfigurations": {}
}
```

<h3 id="putretentionpolicy-parameters">Parameters</h3>

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
|body|body|[PutRetentionPolicyRequest](#schemaputretentionpolicyrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» Id|body|object|false|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» FolderConfigurations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.PutRetentionPolicy|

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

<h3 id="putretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRetentionPolicyResponse](#schemaputretentionpolicyresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterMailDomain

<a id="opIdRegisterMailDomain"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.RegisterMailDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.RegisterMailDomain' \
  -d '{
    "ClientToken": {},
    "OrganizationId": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.RegisterMailDomain`

Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.

> Body parameter

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DomainName": {}
}
```

<h3 id="registermaildomain-parameters">Parameters</h3>

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
|body|body|[RegisterMailDomainRequest](#schemaregistermaildomainrequest)|true|none|
|» ClientToken|body|object|false|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.RegisterMailDomain|

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

<h3 id="registermaildomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterMailDomainResponse](#schemaregistermaildomainresponse)|
|480|480|MailDomainInUseException|[MailDomainInUseException](#schemamaildomaininuseexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterToWorkMail

<a id="opIdRegisterToWorkMail"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.RegisterToWorkMail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.RegisterToWorkMail' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "Email": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.RegisterToWorkMail`

<p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Email": {}
}
```

<h3 id="registertoworkmail-parameters">Parameters</h3>

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
|body|body|[RegisterToWorkMailRequest](#schemaregistertoworkmailrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» Email|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.RegisterToWorkMail|

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

<h3 id="registertoworkmail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterToWorkMailResponse](#schemaregistertoworkmailresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EmailAddressInUseException|[EmailAddressInUseException](#schemaemailaddressinuseexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|485|485|EntityAlreadyRegisteredException|[EntityAlreadyRegisteredException](#schemaentityalreadyregisteredexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|487|487|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|488|488|MailDomainStateException|[MailDomainStateException](#schemamaildomainstateexception)|
|489|489|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|490|490|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetPassword

<a id="opIdResetPassword"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.ResetPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.ResetPassword' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.ResetPassword`

Allows the administrator to reset the password for a user.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "Password": {}
}
```

<h3 id="resetpassword-parameters">Parameters</h3>

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
|body|body|[ResetPasswordRequest](#schemaresetpasswordrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.ResetPassword|

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

<h3 id="resetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetPasswordResponse](#schemaresetpasswordresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|483|483|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|486|486|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|487|487|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|488|488|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMailboxExportJob

<a id="opIdStartMailboxExportJob"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.StartMailboxExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.StartMailboxExportJob' \
  -d '{
    "ClientToken": {},
    "OrganizationId": {},
    "EntityId": {},
    "Description": {},
    "RoleArn": {},
    "KmsKeyArn": {},
    "S3BucketName": {},
    "S3Prefix": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.StartMailboxExportJob`

Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.

> Body parameter

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "EntityId": {},
  "Description": {},
  "RoleArn": {},
  "KmsKeyArn": {},
  "S3BucketName": {},
  "S3Prefix": {}
}
```

<h3 id="startmailboxexportjob-parameters">Parameters</h3>

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
|body|body|[StartMailboxExportJobRequest](#schemastartmailboxexportjobrequest)|true|none|
|» ClientToken|body|object|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|true|none|
|» KmsKeyArn|body|object|true|none|
|» S3BucketName|body|object|true|none|
|» S3Prefix|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.StartMailboxExportJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="startmailboxexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMailboxExportJobResponse](#schemastartmailboxexportjobresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.TagResource`

Applies the specified tags to the specified WorkMailorganization resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestAvailabilityConfiguration

<a id="opIdTestAvailabilityConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.TestAvailabilityConfiguration' \
  -d '{
    "OrganizationId": {},
    "DomainName": {},
    "EwsProvider": {
      "EwsEndpoint": {},
      "EwsUsername": {},
      "EwsPassword": {}
    },
    "LambdaProvider": {
      "LambdaArn": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration`

<p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

<h3 id="testavailabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[TestAvailabilityConfigurationRequest](#schematestavailabilityconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|false|none|
|» EwsProvider|body|[EwsAvailabilityProvider](#schemaewsavailabilityprovider)|false|Describes an EWS based availability provider. This is only used as input to the service.|
|» LambdaProvider|body|[LambdaAvailabilityProvider](#schemalambdaavailabilityprovider)|false|Describes a Lambda based availability provider.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.TestAvailabilityConfiguration|

> Example responses

> 200 Response

```json
{
  "TestPassed": {},
  "FailureReason": {}
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

<h3 id="testavailabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestAvailabilityConfigurationResponse](#schematestavailabilityconfigurationresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UntagResource`

Untags the specified tags from the specified WorkMail organization resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAvailabilityConfiguration

<a id="opIdUpdateAvailabilityConfiguration"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateAvailabilityConfiguration' \
  -d '{
    "OrganizationId": {},
    "DomainName": {},
    "EwsProvider": {
      "EwsEndpoint": {},
      "EwsUsername": {},
      "EwsPassword": {}
    },
    "LambdaProvider": {
      "LambdaArn": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration`

Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

<h3 id="updateavailabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateAvailabilityConfigurationRequest](#schemaupdateavailabilityconfigurationrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|
|» EwsProvider|body|object|false|none|
|» » EwsEndpoint|body|object|true|none|
|» » EwsUsername|body|object|true|none|
|» » EwsPassword|body|object|true|none|
|» LambdaProvider|body|object|false|none|
|» » LambdaArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateAvailabilityConfiguration|

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

<h3 id="updateavailabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAvailabilityConfigurationResponse](#schemaupdateavailabilityconfigurationresponse)|
|480|480|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|481|481|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDefaultMailDomain

<a id="opIdUpdateDefaultMailDomain"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateDefaultMailDomain' \
  -d '{
    "OrganizationId": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain`

Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.

> Body parameter

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

<h3 id="updatedefaultmaildomain-parameters">Parameters</h3>

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
|body|body|[UpdateDefaultMailDomainRequest](#schemaupdatedefaultmaildomainrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateDefaultMailDomain|

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

<h3 id="updatedefaultmaildomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDefaultMailDomainResponse](#schemaupdatedefaultmaildomainresponse)|
|480|480|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|481|481|MailDomainStateException|[MailDomainStateException](#schemamaildomainstateexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateImpersonationRole

<a id="opIdUpdateImpersonationRole"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateImpersonationRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateImpersonationRole' \
  -d '{
    "OrganizationId": {},
    "ImpersonationRoleId": {},
    "Name": {},
    "Type": {},
    "Description": {},
    "Rules": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateImpersonationRole`

Updates an impersonation role for the given WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {}
}
```

<h3 id="updateimpersonationrole-parameters">Parameters</h3>

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
|body|body|[UpdateImpersonationRoleRequest](#schemaupdateimpersonationrolerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ImpersonationRoleId|body|object|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» Rules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateImpersonationRole|

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

<h3 id="updateimpersonationrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateImpersonationRoleResponse](#schemaupdateimpersonationroleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|485|485|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMailboxQuota

<a id="opIdUpdateMailboxQuota"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateMailboxQuota' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateMailboxQuota' \
  -d '{
    "OrganizationId": {},
    "UserId": {},
    "MailboxQuota": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateMailboxQuota`

Updates a user's current mailbox quota for a specified organization and user.

> Body parameter

```json
{
  "OrganizationId": {},
  "UserId": {},
  "MailboxQuota": {}
}
```

<h3 id="updatemailboxquota-parameters">Parameters</h3>

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
|body|body|[UpdateMailboxQuotaRequest](#schemaupdatemailboxquotarequest)|true|none|
|» OrganizationId|body|object|true|none|
|» UserId|body|object|true|none|
|» MailboxQuota|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateMailboxQuota|

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

<h3 id="updatemailboxquota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMailboxQuotaResponse](#schemaupdatemailboxquotaresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|482|482|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|EntityStateException|[EntityStateException](#schemaentitystateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMobileDeviceAccessRule

<a id="opIdUpdateMobileDeviceAccessRule"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateMobileDeviceAccessRule' \
  -d '{
    "OrganizationId": {},
    "MobileDeviceAccessRuleId": {},
    "Name": {},
    "Description": {},
    "Effect": {},
    "DeviceTypes": {},
    "NotDeviceTypes": {},
    "DeviceModels": {},
    "NotDeviceModels": {},
    "DeviceOperatingSystems": {},
    "NotDeviceOperatingSystems": {},
    "DeviceUserAgents": {},
    "NotDeviceUserAgents": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule`

Updates a mobile device access rule for the specified WorkMail organization.

> Body parameter

```json
{
  "OrganizationId": {},
  "MobileDeviceAccessRuleId": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "DeviceTypes": {},
  "NotDeviceTypes": {},
  "DeviceModels": {},
  "NotDeviceModels": {},
  "DeviceOperatingSystems": {},
  "NotDeviceOperatingSystems": {},
  "DeviceUserAgents": {},
  "NotDeviceUserAgents": {}
}
```

<h3 id="updatemobiledeviceaccessrule-parameters">Parameters</h3>

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
|body|body|[UpdateMobileDeviceAccessRuleRequest](#schemaupdatemobiledeviceaccessrulerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» MobileDeviceAccessRuleId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» Effect|body|object|true|none|
|» DeviceTypes|body|object|false|none|
|» NotDeviceTypes|body|object|false|none|
|» DeviceModels|body|object|false|none|
|» NotDeviceModels|body|object|false|none|
|» DeviceOperatingSystems|body|object|false|none|
|» NotDeviceOperatingSystems|body|object|false|none|
|» DeviceUserAgents|body|object|false|none|
|» NotDeviceUserAgents|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateMobileDeviceAccessRule|

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

<h3 id="updatemobiledeviceaccessrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMobileDeviceAccessRuleResponse](#schemaupdatemobiledeviceaccessruleresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|483|483|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePrimaryEmailAddress

<a id="opIdUpdatePrimaryEmailAddress"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdatePrimaryEmailAddress' \
  -d '{
    "OrganizationId": {},
    "EntityId": {},
    "Email": {}
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress`

Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.

> Body parameter

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Email": {}
}
```

<h3 id="updateprimaryemailaddress-parameters">Parameters</h3>

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
|body|body|[UpdatePrimaryEmailAddressRequest](#schemaupdateprimaryemailaddressrequest)|true|none|
|» OrganizationId|body|object|true|none|
|» EntityId|body|object|true|none|
|» Email|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdatePrimaryEmailAddress|

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

<h3 id="updateprimaryemailaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePrimaryEmailAddressResponse](#schemaupdateprimaryemailaddressresponse)|
|480|480|DirectoryServiceAuthenticationFailedException|[DirectoryServiceAuthenticationFailedException](#schemadirectoryserviceauthenticationfailedexception)|
|481|481|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|482|482|EmailAddressInUseException|[EmailAddressInUseException](#schemaemailaddressinuseexception)|
|483|483|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|484|484|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|487|487|MailDomainStateException|[MailDomainStateException](#schemamaildomainstateexception)|
|488|488|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|489|489|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|490|490|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|
|491|491|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResource

<a id="opIdUpdateResource"></a>

> Code samples

```bash
curl 'https://workmail.us-east-1.amazonaws.com/#X-Amz-Target=WorkMailService.UpdateResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: WorkMailService.UpdateResource' \
  -d '{
    "OrganizationId": {},
    "ResourceId": {},
    "Name": {},
    "BookingOptions": {
      "AutoAcceptRequests": {},
      "AutoDeclineRecurringRequests": {},
      "AutoDeclineConflictingRequests": {}
    }
  }'
```

`POST /#X-Amz-Target=WorkMailService.UpdateResource`

Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

> Body parameter

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "Name": {},
  "BookingOptions": {
    "AutoAcceptRequests": {},
    "AutoDeclineRecurringRequests": {},
    "AutoDeclineConflictingRequests": {}
  }
}
```

<h3 id="updateresource-parameters">Parameters</h3>

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
|body|body|[UpdateResourceRequest](#schemaupdateresourcerequest)|true|none|
|» OrganizationId|body|object|true|none|
|» ResourceId|body|object|true|none|
|» Name|body|object|false|none|
|» BookingOptions|body|object|false|none|
|» » AutoAcceptRequests|body|object|false|none|
|» » AutoDeclineRecurringRequests|body|object|false|none|
|» » AutoDeclineConflictingRequests|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|WorkMailService.UpdateResource|

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

<h3 id="updateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceResponse](#schemaupdateresourceresponse)|
|480|480|DirectoryUnavailableException|[DirectoryUnavailableException](#schemadirectoryunavailableexception)|
|481|481|EntityNotFoundException|[EntityNotFoundException](#schemaentitynotfoundexception)|
|482|482|EntityStateException|[EntityStateException](#schemaentitystateexception)|
|483|483|InvalidConfigurationException|[InvalidConfigurationException](#schemainvalidconfigurationexception)|
|484|484|EmailAddressInUseException|[EmailAddressInUseException](#schemaemailaddressinuseexception)|
|485|485|MailDomainNotFoundException|[MailDomainNotFoundException](#schemamaildomainnotfoundexception)|
|486|486|MailDomainStateException|[MailDomainStateException](#schemamaildomainstateexception)|
|487|487|NameAvailabilityException|[NameAvailabilityException](#schemanameavailabilityexception)|
|488|488|OrganizationNotFoundException|[OrganizationNotFoundException](#schemaorganizationnotfoundexception)|
|489|489|OrganizationStateException|[OrganizationStateException](#schemaorganizationstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateDelegateToResourceResponse">AssociateDelegateToResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedelegatetoresourceresponse"></a>
<a id="schema_AssociateDelegateToResourceResponse"></a>
<a id="tocSassociatedelegatetoresourceresponse"></a>
<a id="tocsassociatedelegatetoresourceresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateDelegateToResourceRequest">AssociateDelegateToResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedelegatetoresourcerequest"></a>
<a id="schema_AssociateDelegateToResourceRequest"></a>
<a id="tocSassociatedelegatetoresourcerequest"></a>
<a id="tocsassociatedelegatetoresourcerequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "EntityId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|
|EntityId|object|true|none|none|

<h2 id="tocS_EntityNotFoundException">EntityNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaentitynotfoundexception"></a>
<a id="schema_EntityNotFoundException"></a>
<a id="tocSentitynotfoundexception"></a>
<a id="tocsentitynotfoundexception"></a>

```json
null
```

<h2 id="tocS_EntityStateException">EntityStateException</h2>
<!-- backwards compatibility -->
<a id="schemaentitystateexception"></a>
<a id="schema_EntityStateException"></a>
<a id="tocSentitystateexception"></a>
<a id="tocsentitystateexception"></a>

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

<h2 id="tocS_OrganizationNotFoundException">OrganizationNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnotfoundexception"></a>
<a id="schema_OrganizationNotFoundException"></a>
<a id="tocSorganizationnotfoundexception"></a>
<a id="tocsorganizationnotfoundexception"></a>

```json
null
```

<h2 id="tocS_OrganizationStateException">OrganizationStateException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationstateexception"></a>
<a id="schema_OrganizationStateException"></a>
<a id="tocSorganizationstateexception"></a>
<a id="tocsorganizationstateexception"></a>

```json
null
```

<h2 id="tocS_AssociateMemberToGroupResponse">AssociateMemberToGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemembertogroupresponse"></a>
<a id="schema_AssociateMemberToGroupResponse"></a>
<a id="tocSassociatemembertogroupresponse"></a>
<a id="tocsassociatemembertogroupresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateMemberToGroupRequest">AssociateMemberToGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemembertogrouprequest"></a>
<a id="schema_AssociateMemberToGroupRequest"></a>
<a id="tocSassociatemembertogrouprequest"></a>
<a id="tocsassociatemembertogrouprequest"></a>

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "MemberId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|GroupId|object|true|none|none|
|MemberId|object|true|none|none|

<h2 id="tocS_DirectoryServiceAuthenticationFailedException">DirectoryServiceAuthenticationFailedException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryserviceauthenticationfailedexception"></a>
<a id="schema_DirectoryServiceAuthenticationFailedException"></a>
<a id="tocSdirectoryserviceauthenticationfailedexception"></a>
<a id="tocsdirectoryserviceauthenticationfailedexception"></a>

```json
null
```

<h2 id="tocS_DirectoryUnavailableException">DirectoryUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryunavailableexception"></a>
<a id="schema_DirectoryUnavailableException"></a>
<a id="tocSdirectoryunavailableexception"></a>
<a id="tocsdirectoryunavailableexception"></a>

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

<h2 id="tocS_AssumeImpersonationRoleResponse">AssumeImpersonationRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassumeimpersonationroleresponse"></a>
<a id="schema_AssumeImpersonationRoleResponse"></a>
<a id="tocSassumeimpersonationroleresponse"></a>
<a id="tocsassumeimpersonationroleresponse"></a>

```json
{
  "Token": {},
  "ExpiresIn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Token|object|false|none|none|
|ExpiresIn|object|false|none|none|

<h2 id="tocS_AssumeImpersonationRoleRequest">AssumeImpersonationRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassumeimpersonationrolerequest"></a>
<a id="schema_AssumeImpersonationRoleRequest"></a>
<a id="tocSassumeimpersonationrolerequest"></a>
<a id="tocsassumeimpersonationrolerequest"></a>

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ImpersonationRoleId|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CancelMailboxExportJobResponse">CancelMailboxExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelmailboxexportjobresponse"></a>
<a id="schema_CancelMailboxExportJobResponse"></a>
<a id="tocScancelmailboxexportjobresponse"></a>
<a id="tocscancelmailboxexportjobresponse"></a>

```json
{}
```

<h2 id="tocS_CancelMailboxExportJobRequest">CancelMailboxExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelmailboxexportjobrequest"></a>
<a id="schema_CancelMailboxExportJobRequest"></a>
<a id="tocScancelmailboxexportjobrequest"></a>
<a id="tocscancelmailboxexportjobrequest"></a>

```json
{
  "ClientToken": {},
  "JobId": {},
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|JobId|object|true|none|none|
|OrganizationId|object|true|none|none|

<h2 id="tocS_CreateAliasResponse">CreateAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasresponse"></a>
<a id="schema_CreateAliasResponse"></a>
<a id="tocScreatealiasresponse"></a>
<a id="tocscreatealiasresponse"></a>

```json
{}
```

<h2 id="tocS_CreateAliasRequest">CreateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasrequest"></a>
<a id="schema_CreateAliasRequest"></a>
<a id="tocScreatealiasrequest"></a>
<a id="tocscreatealiasrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Alias": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|Alias|object|true|none|none|

<h2 id="tocS_EmailAddressInUseException">EmailAddressInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddressinuseexception"></a>
<a id="schema_EmailAddressInUseException"></a>
<a id="tocSemailaddressinuseexception"></a>
<a id="tocsemailaddressinuseexception"></a>

```json
null
```

<h2 id="tocS_MailDomainNotFoundException">MailDomainNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemamaildomainnotfoundexception"></a>
<a id="schema_MailDomainNotFoundException"></a>
<a id="tocSmaildomainnotfoundexception"></a>
<a id="tocsmaildomainnotfoundexception"></a>

```json
null
```

<h2 id="tocS_MailDomainStateException">MailDomainStateException</h2>
<!-- backwards compatibility -->
<a id="schemamaildomainstateexception"></a>
<a id="schema_MailDomainStateException"></a>
<a id="tocSmaildomainstateexception"></a>
<a id="tocsmaildomainstateexception"></a>

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

<h2 id="tocS_CreateAvailabilityConfigurationResponse">CreateAvailabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateavailabilityconfigurationresponse"></a>
<a id="schema_CreateAvailabilityConfigurationResponse"></a>
<a id="tocScreateavailabilityconfigurationresponse"></a>
<a id="tocscreateavailabilityconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_CreateAvailabilityConfigurationRequest">CreateAvailabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateavailabilityconfigurationrequest"></a>
<a id="schema_CreateAvailabilityConfigurationRequest"></a>
<a id="tocScreateavailabilityconfigurationrequest"></a>
<a id="tocscreateavailabilityconfigurationrequest"></a>

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|
|EwsProvider|object|false|none|none|
|LambdaProvider|object|false|none|none|

<h2 id="tocS_NameAvailabilityException">NameAvailabilityException</h2>
<!-- backwards compatibility -->
<a id="schemanameavailabilityexception"></a>
<a id="schema_NameAvailabilityException"></a>
<a id="tocSnameavailabilityexception"></a>
<a id="tocsnameavailabilityexception"></a>

```json
null
```

<h2 id="tocS_CreateGroupResponse">CreateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresponse"></a>
<a id="schema_CreateGroupResponse"></a>
<a id="tocScreategroupresponse"></a>
<a id="tocscreategroupresponse"></a>

```json
{
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "OrganizationId": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_ReservedNameException">ReservedNameException</h2>
<!-- backwards compatibility -->
<a id="schemareservednameexception"></a>
<a id="schema_ReservedNameException"></a>
<a id="tocSreservednameexception"></a>
<a id="tocsreservednameexception"></a>

```json
null
```

<h2 id="tocS_CreateImpersonationRoleResponse">CreateImpersonationRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimpersonationroleresponse"></a>
<a id="schema_CreateImpersonationRoleResponse"></a>
<a id="tocScreateimpersonationroleresponse"></a>
<a id="tocscreateimpersonationroleresponse"></a>

```json
{
  "ImpersonationRoleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImpersonationRoleId|object|false|none|none|

<h2 id="tocS_CreateImpersonationRoleRequest">CreateImpersonationRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimpersonationrolerequest"></a>
<a id="schema_CreateImpersonationRoleRequest"></a>
<a id="tocScreateimpersonationrolerequest"></a>
<a id="tocscreateimpersonationrolerequest"></a>

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|OrganizationId|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_CreateMobileDeviceAccessRuleResponse">CreateMobileDeviceAccessRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemobiledeviceaccessruleresponse"></a>
<a id="schema_CreateMobileDeviceAccessRuleResponse"></a>
<a id="tocScreatemobiledeviceaccessruleresponse"></a>
<a id="tocscreatemobiledeviceaccessruleresponse"></a>

```json
{
  "MobileDeviceAccessRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MobileDeviceAccessRuleId|object|false|none|none|

<h2 id="tocS_CreateMobileDeviceAccessRuleRequest">CreateMobileDeviceAccessRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemobiledeviceaccessrulerequest"></a>
<a id="schema_CreateMobileDeviceAccessRuleRequest"></a>
<a id="tocScreatemobiledeviceaccessrulerequest"></a>
<a id="tocscreatemobiledeviceaccessrulerequest"></a>

```json
{
  "OrganizationId": {},
  "ClientToken": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "DeviceTypes": {},
  "NotDeviceTypes": {},
  "DeviceModels": {},
  "NotDeviceModels": {},
  "DeviceOperatingSystems": {},
  "NotDeviceOperatingSystems": {},
  "DeviceUserAgents": {},
  "NotDeviceUserAgents": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ClientToken|object|false|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Effect|object|true|none|none|
|DeviceTypes|object|false|none|none|
|NotDeviceTypes|object|false|none|none|
|DeviceModels|object|false|none|none|
|NotDeviceModels|object|false|none|none|
|DeviceOperatingSystems|object|false|none|none|
|NotDeviceOperatingSystems|object|false|none|none|
|DeviceUserAgents|object|false|none|none|
|NotDeviceUserAgents|object|false|none|none|

<h2 id="tocS_CreateOrganizationResponse">CreateOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationresponse"></a>
<a id="schema_CreateOrganizationResponse"></a>
<a id="tocScreateorganizationresponse"></a>
<a id="tocscreateorganizationresponse"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|

<h2 id="tocS_CreateOrganizationRequest">CreateOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationrequest"></a>
<a id="schema_CreateOrganizationRequest"></a>
<a id="tocScreateorganizationrequest"></a>
<a id="tocscreateorganizationrequest"></a>

```json
{
  "DirectoryId": {},
  "Alias": {},
  "ClientToken": {},
  "Domains": {},
  "KmsKeyArn": {},
  "EnableInteroperability": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryId|object|false|none|none|
|Alias|object|true|none|none|
|ClientToken|object|false|none|none|
|Domains|object|false|none|none|
|KmsKeyArn|object|false|none|none|
|EnableInteroperability|object|false|none|none|

<h2 id="tocS_DirectoryInUseException">DirectoryInUseException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryinuseexception"></a>
<a id="schema_DirectoryInUseException"></a>
<a id="tocSdirectoryinuseexception"></a>
<a id="tocsdirectoryinuseexception"></a>

```json
null
```

<h2 id="tocS_CreateResourceResponse">CreateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourceresponse"></a>
<a id="schema_CreateResourceResponse"></a>
<a id="tocScreateresourceresponse"></a>
<a id="tocscreateresourceresponse"></a>

```json
{
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|

<h2 id="tocS_CreateResourceRequest">CreateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcerequest"></a>
<a id="schema_CreateResourceRequest"></a>
<a id="tocScreateresourcerequest"></a>
<a id="tocscreateresourcerequest"></a>

```json
{
  "OrganizationId": {},
  "Name": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "OrganizationId": {},
  "Name": {},
  "DisplayName": {},
  "Password": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Name|object|true|none|none|
|DisplayName|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_InvalidPasswordException">InvalidPasswordException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpasswordexception"></a>
<a id="schema_InvalidPasswordException"></a>
<a id="tocSinvalidpasswordexception"></a>
<a id="tocsinvalidpasswordexception"></a>

```json
null
```

<h2 id="tocS_DeleteAccessControlRuleResponse">DeleteAccessControlRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesscontrolruleresponse"></a>
<a id="schema_DeleteAccessControlRuleResponse"></a>
<a id="tocSdeleteaccesscontrolruleresponse"></a>
<a id="tocsdeleteaccesscontrolruleresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAccessControlRuleRequest">DeleteAccessControlRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesscontrolrulerequest"></a>
<a id="schema_DeleteAccessControlRuleRequest"></a>
<a id="tocSdeleteaccesscontrolrulerequest"></a>
<a id="tocsdeleteaccesscontrolrulerequest"></a>

```json
{
  "OrganizationId": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_DeleteAliasResponse">DeleteAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasresponse"></a>
<a id="schema_DeleteAliasResponse"></a>
<a id="tocSdeletealiasresponse"></a>
<a id="tocsdeletealiasresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAliasRequest">DeleteAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasrequest"></a>
<a id="schema_DeleteAliasRequest"></a>
<a id="tocSdeletealiasrequest"></a>
<a id="tocsdeletealiasrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Alias": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|Alias|object|true|none|none|

<h2 id="tocS_DeleteAvailabilityConfigurationResponse">DeleteAvailabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteavailabilityconfigurationresponse"></a>
<a id="schema_DeleteAvailabilityConfigurationResponse"></a>
<a id="tocSdeleteavailabilityconfigurationresponse"></a>
<a id="tocsdeleteavailabilityconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAvailabilityConfigurationRequest">DeleteAvailabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteavailabilityconfigurationrequest"></a>
<a id="schema_DeleteAvailabilityConfigurationRequest"></a>
<a id="tocSdeleteavailabilityconfigurationrequest"></a>
<a id="tocsdeleteavailabilityconfigurationrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_DeleteEmailMonitoringConfigurationResponse">DeleteEmailMonitoringConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailmonitoringconfigurationresponse"></a>
<a id="schema_DeleteEmailMonitoringConfigurationResponse"></a>
<a id="tocSdeleteemailmonitoringconfigurationresponse"></a>
<a id="tocsdeleteemailmonitoringconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteEmailMonitoringConfigurationRequest">DeleteEmailMonitoringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailmonitoringconfigurationrequest"></a>
<a id="schema_DeleteEmailMonitoringConfigurationRequest"></a>
<a id="tocSdeleteemailmonitoringconfigurationrequest"></a>
<a id="tocsdeleteemailmonitoringconfigurationrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_DeleteGroupResponse">DeleteGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupresponse"></a>
<a id="schema_DeleteGroupResponse"></a>
<a id="tocSdeletegroupresponse"></a>
<a id="tocsdeletegroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{
  "OrganizationId": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|GroupId|object|true|none|none|

<h2 id="tocS_DeleteImpersonationRoleResponse">DeleteImpersonationRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimpersonationroleresponse"></a>
<a id="schema_DeleteImpersonationRoleResponse"></a>
<a id="tocSdeleteimpersonationroleresponse"></a>
<a id="tocsdeleteimpersonationroleresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteImpersonationRoleRequest">DeleteImpersonationRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimpersonationrolerequest"></a>
<a id="schema_DeleteImpersonationRoleRequest"></a>
<a id="tocSdeleteimpersonationrolerequest"></a>
<a id="tocsdeleteimpersonationrolerequest"></a>

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ImpersonationRoleId|object|true|none|none|

<h2 id="tocS_DeleteMailboxPermissionsResponse">DeleteMailboxPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemailboxpermissionsresponse"></a>
<a id="schema_DeleteMailboxPermissionsResponse"></a>
<a id="tocSdeletemailboxpermissionsresponse"></a>
<a id="tocsdeletemailboxpermissionsresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteMailboxPermissionsRequest">DeleteMailboxPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemailboxpermissionsrequest"></a>
<a id="schema_DeleteMailboxPermissionsRequest"></a>
<a id="tocSdeletemailboxpermissionsrequest"></a>
<a id="tocsdeletemailboxpermissionsrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "GranteeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|GranteeId|object|true|none|none|

<h2 id="tocS_DeleteMobileDeviceAccessOverrideResponse">DeleteMobileDeviceAccessOverrideResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemobiledeviceaccessoverrideresponse"></a>
<a id="schema_DeleteMobileDeviceAccessOverrideResponse"></a>
<a id="tocSdeletemobiledeviceaccessoverrideresponse"></a>
<a id="tocsdeletemobiledeviceaccessoverrideresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteMobileDeviceAccessOverrideRequest">DeleteMobileDeviceAccessOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemobiledeviceaccessoverriderequest"></a>
<a id="schema_DeleteMobileDeviceAccessOverrideRequest"></a>
<a id="tocSdeletemobiledeviceaccessoverriderequest"></a>
<a id="tocsdeletemobiledeviceaccessoverriderequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|
|DeviceId|object|true|none|none|

<h2 id="tocS_DeleteMobileDeviceAccessRuleResponse">DeleteMobileDeviceAccessRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemobiledeviceaccessruleresponse"></a>
<a id="schema_DeleteMobileDeviceAccessRuleResponse"></a>
<a id="tocSdeletemobiledeviceaccessruleresponse"></a>
<a id="tocsdeletemobiledeviceaccessruleresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteMobileDeviceAccessRuleRequest">DeleteMobileDeviceAccessRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemobiledeviceaccessrulerequest"></a>
<a id="schema_DeleteMobileDeviceAccessRuleRequest"></a>
<a id="tocSdeletemobiledeviceaccessrulerequest"></a>
<a id="tocsdeletemobiledeviceaccessrulerequest"></a>

```json
{
  "OrganizationId": {},
  "MobileDeviceAccessRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|MobileDeviceAccessRuleId|object|true|none|none|

<h2 id="tocS_DeleteOrganizationResponse">DeleteOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationresponse"></a>
<a id="schema_DeleteOrganizationResponse"></a>
<a id="tocSdeleteorganizationresponse"></a>
<a id="tocsdeleteorganizationresponse"></a>

```json
{
  "OrganizationId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DeleteOrganizationRequest">DeleteOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationrequest"></a>
<a id="schema_DeleteOrganizationRequest"></a>
<a id="tocSdeleteorganizationrequest"></a>
<a id="tocsdeleteorganizationrequest"></a>

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DeleteDirectory": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|OrganizationId|object|true|none|none|
|DeleteDirectory|object|true|none|none|

<h2 id="tocS_DeleteResourceResponse">DeleteResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourceresponse"></a>
<a id="schema_DeleteResourceResponse"></a>
<a id="tocSdeleteresourceresponse"></a>
<a id="tocsdeleteresourceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourceRequest">DeleteResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcerequest"></a>
<a id="schema_DeleteResourceRequest"></a>
<a id="tocSdeleteresourcerequest"></a>
<a id="tocsdeleteresourcerequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DeleteRetentionPolicyResponse">DeleteRetentionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteretentionpolicyresponse"></a>
<a id="schema_DeleteRetentionPolicyResponse"></a>
<a id="tocSdeleteretentionpolicyresponse"></a>
<a id="tocsdeleteretentionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRetentionPolicyRequest">DeleteRetentionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteretentionpolicyrequest"></a>
<a id="schema_DeleteRetentionPolicyRequest"></a>
<a id="tocSdeleteretentionpolicyrequest"></a>
<a id="tocsdeleteretentionpolicyrequest"></a>

```json
{
  "OrganizationId": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DeleteUserResponse">DeleteUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserresponse"></a>
<a id="schema_DeleteUserResponse"></a>
<a id="tocSdeleteuserresponse"></a>
<a id="tocsdeleteuserresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|

<h2 id="tocS_DeregisterFromWorkMailResponse">DeregisterFromWorkMailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterfromworkmailresponse"></a>
<a id="schema_DeregisterFromWorkMailResponse"></a>
<a id="tocSderegisterfromworkmailresponse"></a>
<a id="tocsderegisterfromworkmailresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterFromWorkMailRequest">DeregisterFromWorkMailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterfromworkmailrequest"></a>
<a id="schema_DeregisterFromWorkMailRequest"></a>
<a id="tocSderegisterfromworkmailrequest"></a>
<a id="tocsderegisterfromworkmailrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|

<h2 id="tocS_DeregisterMailDomainResponse">DeregisterMailDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegistermaildomainresponse"></a>
<a id="schema_DeregisterMailDomainResponse"></a>
<a id="tocSderegistermaildomainresponse"></a>
<a id="tocsderegistermaildomainresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterMailDomainRequest">DeregisterMailDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistermaildomainrequest"></a>
<a id="schema_DeregisterMailDomainRequest"></a>
<a id="tocSderegistermaildomainrequest"></a>
<a id="tocsderegistermaildomainrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_MailDomainInUseException">MailDomainInUseException</h2>
<!-- backwards compatibility -->
<a id="schemamaildomaininuseexception"></a>
<a id="schema_MailDomainInUseException"></a>
<a id="tocSmaildomaininuseexception"></a>
<a id="tocsmaildomaininuseexception"></a>

```json
null
```

<h2 id="tocS_InvalidCustomSesConfigurationException">InvalidCustomSesConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcustomsesconfigurationexception"></a>
<a id="schema_InvalidCustomSesConfigurationException"></a>
<a id="tocSinvalidcustomsesconfigurationexception"></a>
<a id="tocsinvalidcustomsesconfigurationexception"></a>

```json
null
```

<h2 id="tocS_DescribeEmailMonitoringConfigurationResponse">DescribeEmailMonitoringConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeemailmonitoringconfigurationresponse"></a>
<a id="schema_DescribeEmailMonitoringConfigurationResponse"></a>
<a id="tocSdescribeemailmonitoringconfigurationresponse"></a>
<a id="tocsdescribeemailmonitoringconfigurationresponse"></a>

```json
{
  "RoleArn": {},
  "LogGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|LogGroupArn|object|false|none|none|

<h2 id="tocS_DescribeEmailMonitoringConfigurationRequest">DescribeEmailMonitoringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeemailmonitoringconfigurationrequest"></a>
<a id="schema_DescribeEmailMonitoringConfigurationRequest"></a>
<a id="tocSdescribeemailmonitoringconfigurationrequest"></a>
<a id="tocsdescribeemailmonitoringconfigurationrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_DescribeGroupResponse">DescribeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupresponse"></a>
<a id="schema_DescribeGroupResponse"></a>
<a id="tocSdescribegroupresponse"></a>
<a id="tocsdescribegroupresponse"></a>

```json
{
  "GroupId": {},
  "Name": {},
  "Email": {},
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|
|Name|object|false|none|none|
|Email|object|false|none|none|
|State|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

<h2 id="tocS_DescribeGroupRequest">DescribeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegrouprequest"></a>
<a id="schema_DescribeGroupRequest"></a>
<a id="tocSdescribegrouprequest"></a>
<a id="tocsdescribegrouprequest"></a>

```json
{
  "OrganizationId": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|GroupId|object|true|none|none|

<h2 id="tocS_DescribeInboundDmarcSettingsResponse">DescribeInboundDmarcSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinbounddmarcsettingsresponse"></a>
<a id="schema_DescribeInboundDmarcSettingsResponse"></a>
<a id="tocSdescribeinbounddmarcsettingsresponse"></a>
<a id="tocsdescribeinbounddmarcsettingsresponse"></a>

```json
{
  "Enforced": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enforced|object|false|none|none|

<h2 id="tocS_DescribeInboundDmarcSettingsRequest">DescribeInboundDmarcSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinbounddmarcsettingsrequest"></a>
<a id="schema_DescribeInboundDmarcSettingsRequest"></a>
<a id="tocSdescribeinbounddmarcsettingsrequest"></a>
<a id="tocsdescribeinbounddmarcsettingsrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_DescribeMailboxExportJobResponse">DescribeMailboxExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemailboxexportjobresponse"></a>
<a id="schema_DescribeMailboxExportJobResponse"></a>
<a id="tocSdescribemailboxexportjobresponse"></a>
<a id="tocsdescribemailboxexportjobresponse"></a>

```json
{
  "EntityId": {},
  "Description": {},
  "RoleArn": {},
  "KmsKeyArn": {},
  "S3BucketName": {},
  "S3Prefix": {},
  "S3Path": {},
  "EstimatedProgress": {},
  "State": {},
  "ErrorInfo": {},
  "StartTime": {},
  "EndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|KmsKeyArn|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3Prefix|object|false|none|none|
|S3Path|object|false|none|none|
|EstimatedProgress|object|false|none|none|
|State|object|false|none|none|
|ErrorInfo|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_DescribeMailboxExportJobRequest">DescribeMailboxExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemailboxexportjobrequest"></a>
<a id="schema_DescribeMailboxExportJobRequest"></a>
<a id="tocSdescribemailboxexportjobrequest"></a>
<a id="tocsdescribemailboxexportjobrequest"></a>

```json
{
  "JobId": {},
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|OrganizationId|object|true|none|none|

<h2 id="tocS_DescribeOrganizationResponse">DescribeOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationresponse"></a>
<a id="schema_DescribeOrganizationResponse"></a>
<a id="tocSdescribeorganizationresponse"></a>
<a id="tocsdescribeorganizationresponse"></a>

```json
{
  "OrganizationId": {},
  "Alias": {},
  "State": {},
  "DirectoryId": {},
  "DirectoryType": {},
  "DefaultMailDomain": {},
  "CompletedDate": {},
  "ErrorMessage": {},
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|
|Alias|object|false|none|none|
|State|object|false|none|none|
|DirectoryId|object|false|none|none|
|DirectoryType|object|false|none|none|
|DefaultMailDomain|object|false|none|none|
|CompletedDate|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_DescribeOrganizationRequest">DescribeOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationrequest"></a>
<a id="schema_DescribeOrganizationRequest"></a>
<a id="tocSdescribeorganizationrequest"></a>
<a id="tocsdescribeorganizationrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_DescribeResourceResponse">DescribeResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourceresponse"></a>
<a id="schema_DescribeResourceResponse"></a>
<a id="tocSdescriberesourceresponse"></a>
<a id="tocsdescriberesourceresponse"></a>

```json
{
  "ResourceId": {},
  "Email": {},
  "Name": {},
  "Type": {},
  "BookingOptions": {
    "AutoAcceptRequests": {},
    "AutoDeclineRecurringRequests": {},
    "AutoDeclineConflictingRequests": {}
  },
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|BookingOptions|object|false|none|none|
|State|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

<h2 id="tocS_DescribeResourceRequest">DescribeResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcerequest"></a>
<a id="schema_DescribeResourceRequest"></a>
<a id="tocSdescriberesourcerequest"></a>
<a id="tocsdescriberesourcerequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DescribeUserResponse">DescribeUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserresponse"></a>
<a id="schema_DescribeUserResponse"></a>
<a id="tocSdescribeuserresponse"></a>
<a id="tocsdescribeuserresponse"></a>

```json
{
  "UserId": {},
  "Name": {},
  "Email": {},
  "DisplayName": {},
  "State": {},
  "UserRole": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|Name|object|false|none|none|
|Email|object|false|none|none|
|DisplayName|object|false|none|none|
|State|object|false|none|none|
|UserRole|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

<h2 id="tocS_DescribeUserRequest">DescribeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserrequest"></a>
<a id="schema_DescribeUserRequest"></a>
<a id="tocSdescribeuserrequest"></a>
<a id="tocsdescribeuserrequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|

<h2 id="tocS_DisassociateDelegateFromResourceResponse">DisassociateDelegateFromResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedelegatefromresourceresponse"></a>
<a id="schema_DisassociateDelegateFromResourceResponse"></a>
<a id="tocSdisassociatedelegatefromresourceresponse"></a>
<a id="tocsdisassociatedelegatefromresourceresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateDelegateFromResourceRequest">DisassociateDelegateFromResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedelegatefromresourcerequest"></a>
<a id="schema_DisassociateDelegateFromResourceRequest"></a>
<a id="tocSdisassociatedelegatefromresourcerequest"></a>
<a id="tocsdisassociatedelegatefromresourcerequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "EntityId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|
|EntityId|object|true|none|none|

<h2 id="tocS_DisassociateMemberFromGroupResponse">DisassociateMemberFromGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatememberfromgroupresponse"></a>
<a id="schema_DisassociateMemberFromGroupResponse"></a>
<a id="tocSdisassociatememberfromgroupresponse"></a>
<a id="tocsdisassociatememberfromgroupresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateMemberFromGroupRequest">DisassociateMemberFromGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatememberfromgrouprequest"></a>
<a id="schema_DisassociateMemberFromGroupRequest"></a>
<a id="tocSdisassociatememberfromgrouprequest"></a>
<a id="tocsdisassociatememberfromgrouprequest"></a>

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "MemberId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|GroupId|object|true|none|none|
|MemberId|object|true|none|none|

<h2 id="tocS_GetAccessControlEffectResponse">GetAccessControlEffectResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesscontroleffectresponse"></a>
<a id="schema_GetAccessControlEffectResponse"></a>
<a id="tocSgetaccesscontroleffectresponse"></a>
<a id="tocsgetaccesscontroleffectresponse"></a>

```json
{
  "Effect": {},
  "MatchedRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Effect|object|false|none|none|
|MatchedRules|object|false|none|none|

<h2 id="tocS_GetAccessControlEffectRequest">GetAccessControlEffectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesscontroleffectrequest"></a>
<a id="schema_GetAccessControlEffectRequest"></a>
<a id="tocSgetaccesscontroleffectrequest"></a>
<a id="tocsgetaccesscontroleffectrequest"></a>

```json
{
  "OrganizationId": {},
  "IpAddress": {},
  "Action": {},
  "UserId": {},
  "ImpersonationRoleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|IpAddress|object|true|none|none|
|Action|object|true|none|none|
|UserId|object|false|none|none|
|ImpersonationRoleId|object|false|none|none|

<h2 id="tocS_GetDefaultRetentionPolicyResponse">GetDefaultRetentionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultretentionpolicyresponse"></a>
<a id="schema_GetDefaultRetentionPolicyResponse"></a>
<a id="tocSgetdefaultretentionpolicyresponse"></a>
<a id="tocsgetdefaultretentionpolicyresponse"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "FolderConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|FolderConfigurations|object|false|none|none|

<h2 id="tocS_GetDefaultRetentionPolicyRequest">GetDefaultRetentionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultretentionpolicyrequest"></a>
<a id="schema_GetDefaultRetentionPolicyRequest"></a>
<a id="tocSgetdefaultretentionpolicyrequest"></a>
<a id="tocsgetdefaultretentionpolicyrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_GetImpersonationRoleResponse">GetImpersonationRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimpersonationroleresponse"></a>
<a id="schema_GetImpersonationRoleResponse"></a>
<a id="tocSgetimpersonationroleresponse"></a>
<a id="tocsgetimpersonationroleresponse"></a>

```json
{
  "ImpersonationRoleId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {},
  "DateCreated": {},
  "DateModified": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImpersonationRoleId|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|Rules|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_GetImpersonationRoleRequest">GetImpersonationRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimpersonationrolerequest"></a>
<a id="schema_GetImpersonationRoleRequest"></a>
<a id="tocSgetimpersonationrolerequest"></a>
<a id="tocsgetimpersonationrolerequest"></a>

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ImpersonationRoleId|object|true|none|none|

<h2 id="tocS_GetImpersonationRoleEffectResponse">GetImpersonationRoleEffectResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimpersonationroleeffectresponse"></a>
<a id="schema_GetImpersonationRoleEffectResponse"></a>
<a id="tocSgetimpersonationroleeffectresponse"></a>
<a id="tocsgetimpersonationroleeffectresponse"></a>

```json
{
  "Type": {},
  "Effect": {},
  "MatchedRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Effect|object|false|none|none|
|MatchedRules|object|false|none|none|

<h2 id="tocS_GetImpersonationRoleEffectRequest">GetImpersonationRoleEffectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimpersonationroleeffectrequest"></a>
<a id="schema_GetImpersonationRoleEffectRequest"></a>
<a id="tocSgetimpersonationroleeffectrequest"></a>
<a id="tocsgetimpersonationroleeffectrequest"></a>

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {},
  "TargetUser": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ImpersonationRoleId|object|true|none|none|
|TargetUser|object|true|none|none|

<h2 id="tocS_GetMailDomainResponse">GetMailDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmaildomainresponse"></a>
<a id="schema_GetMailDomainResponse"></a>
<a id="tocSgetmaildomainresponse"></a>
<a id="tocsgetmaildomainresponse"></a>

```json
{
  "Records": {},
  "IsTestDomain": {},
  "IsDefault": {},
  "OwnershipVerificationStatus": {},
  "DkimVerificationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|false|none|none|
|IsTestDomain|object|false|none|none|
|IsDefault|object|false|none|none|
|OwnershipVerificationStatus|object|false|none|none|
|DkimVerificationStatus|object|false|none|none|

<h2 id="tocS_GetMailDomainRequest">GetMailDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaildomainrequest"></a>
<a id="schema_GetMailDomainRequest"></a>
<a id="tocSgetmaildomainrequest"></a>
<a id="tocsgetmaildomainrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_GetMailboxDetailsResponse">GetMailboxDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmailboxdetailsresponse"></a>
<a id="schema_GetMailboxDetailsResponse"></a>
<a id="tocSgetmailboxdetailsresponse"></a>
<a id="tocsgetmailboxdetailsresponse"></a>

```json
{
  "MailboxQuota": {},
  "MailboxSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailboxQuota|object|false|none|none|
|MailboxSize|object|false|none|none|

<h2 id="tocS_GetMailboxDetailsRequest">GetMailboxDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmailboxdetailsrequest"></a>
<a id="schema_GetMailboxDetailsRequest"></a>
<a id="tocSgetmailboxdetailsrequest"></a>
<a id="tocsgetmailboxdetailsrequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|

<h2 id="tocS_GetMobileDeviceAccessEffectResponse">GetMobileDeviceAccessEffectResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmobiledeviceaccesseffectresponse"></a>
<a id="schema_GetMobileDeviceAccessEffectResponse"></a>
<a id="tocSgetmobiledeviceaccesseffectresponse"></a>
<a id="tocsgetmobiledeviceaccesseffectresponse"></a>

```json
{
  "Effect": {},
  "MatchedRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Effect|object|false|none|none|
|MatchedRules|object|false|none|none|

<h2 id="tocS_GetMobileDeviceAccessEffectRequest">GetMobileDeviceAccessEffectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmobiledeviceaccesseffectrequest"></a>
<a id="schema_GetMobileDeviceAccessEffectRequest"></a>
<a id="tocSgetmobiledeviceaccesseffectrequest"></a>
<a id="tocsgetmobiledeviceaccesseffectrequest"></a>

```json
{
  "OrganizationId": {},
  "DeviceType": {},
  "DeviceModel": {},
  "DeviceOperatingSystem": {},
  "DeviceUserAgent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DeviceType|object|false|none|none|
|DeviceModel|object|false|none|none|
|DeviceOperatingSystem|object|false|none|none|
|DeviceUserAgent|object|false|none|none|

<h2 id="tocS_GetMobileDeviceAccessOverrideResponse">GetMobileDeviceAccessOverrideResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmobiledeviceaccessoverrideresponse"></a>
<a id="schema_GetMobileDeviceAccessOverrideResponse"></a>
<a id="tocSgetmobiledeviceaccessoverrideresponse"></a>
<a id="tocsgetmobiledeviceaccessoverrideresponse"></a>

```json
{
  "UserId": {},
  "DeviceId": {},
  "Effect": {},
  "Description": {},
  "DateCreated": {},
  "DateModified": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|DeviceId|object|false|none|none|
|Effect|object|false|none|none|
|Description|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_GetMobileDeviceAccessOverrideRequest">GetMobileDeviceAccessOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmobiledeviceaccessoverriderequest"></a>
<a id="schema_GetMobileDeviceAccessOverrideRequest"></a>
<a id="tocSgetmobiledeviceaccessoverriderequest"></a>
<a id="tocsgetmobiledeviceaccessoverriderequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|
|DeviceId|object|true|none|none|

<h2 id="tocS_ListAccessControlRulesResponse">ListAccessControlRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesscontrolrulesresponse"></a>
<a id="schema_ListAccessControlRulesResponse"></a>
<a id="tocSlistaccesscontrolrulesresponse"></a>
<a id="tocslistaccesscontrolrulesresponse"></a>

```json
{
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_ListAccessControlRulesRequest">ListAccessControlRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesscontrolrulesrequest"></a>
<a id="schema_ListAccessControlRulesRequest"></a>
<a id="tocSlistaccesscontrolrulesrequest"></a>
<a id="tocslistaccesscontrolrulesrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_ListAliasesResponse">ListAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesresponse"></a>
<a id="schema_ListAliasesResponse"></a>
<a id="tocSlistaliasesresponse"></a>
<a id="tocslistaliasesresponse"></a>

```json
{
  "Aliases": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAliasesRequest">ListAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesrequest"></a>
<a id="schema_ListAliasesRequest"></a>
<a id="tocSlistaliasesrequest"></a>
<a id="tocslistaliasesrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListAvailabilityConfigurationsResponse">ListAvailabilityConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailabilityconfigurationsresponse"></a>
<a id="schema_ListAvailabilityConfigurationsResponse"></a>
<a id="tocSlistavailabilityconfigurationsresponse"></a>
<a id="tocslistavailabilityconfigurationsresponse"></a>

```json
{
  "AvailabilityConfigurations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityConfigurations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAvailabilityConfigurationsRequest">ListAvailabilityConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistavailabilityconfigurationsrequest"></a>
<a id="schema_ListAvailabilityConfigurationsRequest"></a>
<a id="tocSlistavailabilityconfigurationsrequest"></a>
<a id="tocslistavailabilityconfigurationsrequest"></a>

```json
{
  "OrganizationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupMembersResponse">ListGroupMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembersresponse"></a>
<a id="schema_ListGroupMembersResponse"></a>
<a id="tocSlistgroupmembersresponse"></a>
<a id="tocslistgroupmembersresponse"></a>

```json
{
  "Members": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Members|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupMembersRequest">ListGroupMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembersrequest"></a>
<a id="schema_ListGroupMembersRequest"></a>
<a id="tocSlistgroupmembersrequest"></a>
<a id="tocslistgroupmembersrequest"></a>

```json
{
  "OrganizationId": {},
  "GroupId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|GroupId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupsRequest">ListGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsrequest"></a>
<a id="schema_ListGroupsRequest"></a>
<a id="tocSlistgroupsrequest"></a>
<a id="tocslistgroupsrequest"></a>

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListImpersonationRolesResponse">ListImpersonationRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimpersonationrolesresponse"></a>
<a id="schema_ListImpersonationRolesResponse"></a>
<a id="tocSlistimpersonationrolesresponse"></a>
<a id="tocslistimpersonationrolesresponse"></a>

```json
{
  "Roles": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Roles|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImpersonationRolesRequest">ListImpersonationRolesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimpersonationrolesrequest"></a>
<a id="schema_ListImpersonationRolesRequest"></a>
<a id="tocSlistimpersonationrolesrequest"></a>
<a id="tocslistimpersonationrolesrequest"></a>

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMailDomainsResponse">ListMailDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmaildomainsresponse"></a>
<a id="schema_ListMailDomainsResponse"></a>
<a id="tocSlistmaildomainsresponse"></a>
<a id="tocslistmaildomainsresponse"></a>

```json
{
  "MailDomains": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailDomains|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMailDomainsRequest">ListMailDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmaildomainsrequest"></a>
<a id="schema_ListMailDomainsRequest"></a>
<a id="tocSlistmaildomainsrequest"></a>
<a id="tocslistmaildomainsrequest"></a>

```json
{
  "OrganizationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMailboxExportJobsResponse">ListMailboxExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmailboxexportjobsresponse"></a>
<a id="schema_ListMailboxExportJobsResponse"></a>
<a id="tocSlistmailboxexportjobsresponse"></a>
<a id="tocslistmailboxexportjobsresponse"></a>

```json
{
  "Jobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMailboxExportJobsRequest">ListMailboxExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmailboxexportjobsrequest"></a>
<a id="schema_ListMailboxExportJobsRequest"></a>
<a id="tocSlistmailboxexportjobsrequest"></a>
<a id="tocslistmailboxexportjobsrequest"></a>

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMailboxPermissionsResponse">ListMailboxPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmailboxpermissionsresponse"></a>
<a id="schema_ListMailboxPermissionsResponse"></a>
<a id="tocSlistmailboxpermissionsresponse"></a>
<a id="tocslistmailboxpermissionsresponse"></a>

```json
{
  "Permissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMailboxPermissionsRequest">ListMailboxPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmailboxpermissionsrequest"></a>
<a id="schema_ListMailboxPermissionsRequest"></a>
<a id="tocSlistmailboxpermissionsrequest"></a>
<a id="tocslistmailboxpermissionsrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMobileDeviceAccessOverridesResponse">ListMobileDeviceAccessOverridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmobiledeviceaccessoverridesresponse"></a>
<a id="schema_ListMobileDeviceAccessOverridesResponse"></a>
<a id="tocSlistmobiledeviceaccessoverridesresponse"></a>
<a id="tocslistmobiledeviceaccessoverridesresponse"></a>

```json
{
  "Overrides": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Overrides|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMobileDeviceAccessOverridesRequest">ListMobileDeviceAccessOverridesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmobiledeviceaccessoverridesrequest"></a>
<a id="schema_ListMobileDeviceAccessOverridesRequest"></a>
<a id="tocSlistmobiledeviceaccessoverridesrequest"></a>
<a id="tocslistmobiledeviceaccessoverridesrequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|false|none|none|
|DeviceId|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMobileDeviceAccessRulesResponse">ListMobileDeviceAccessRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmobiledeviceaccessrulesresponse"></a>
<a id="schema_ListMobileDeviceAccessRulesResponse"></a>
<a id="tocSlistmobiledeviceaccessrulesresponse"></a>
<a id="tocslistmobiledeviceaccessrulesresponse"></a>

```json
{
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_ListMobileDeviceAccessRulesRequest">ListMobileDeviceAccessRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmobiledeviceaccessrulesrequest"></a>
<a id="schema_ListMobileDeviceAccessRulesRequest"></a>
<a id="tocSlistmobiledeviceaccessrulesrequest"></a>
<a id="tocslistmobiledeviceaccessrulesrequest"></a>

```json
{
  "OrganizationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|

<h2 id="tocS_ListOrganizationsResponse">ListOrganizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationsresponse"></a>
<a id="schema_ListOrganizationsResponse"></a>
<a id="tocSlistorganizationsresponse"></a>
<a id="tocslistorganizationsresponse"></a>

```json
{
  "OrganizationSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationsRequest">ListOrganizationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationsrequest"></a>
<a id="schema_ListOrganizationsRequest"></a>
<a id="tocSlistorganizationsrequest"></a>
<a id="tocslistorganizationsrequest"></a>

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

<h2 id="tocS_ListResourceDelegatesResponse">ListResourceDelegatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedelegatesresponse"></a>
<a id="schema_ListResourceDelegatesResponse"></a>
<a id="tocSlistresourcedelegatesresponse"></a>
<a id="tocslistresourcedelegatesresponse"></a>

```json
{
  "Delegates": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delegates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceDelegatesRequest">ListResourceDelegatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedelegatesrequest"></a>
<a id="schema_ListResourceDelegatesRequest"></a>
<a id="tocSlistresourcedelegatesrequest"></a>
<a id="tocslistresourcedelegatesrequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListResourcesResponse">ListResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesresponse"></a>
<a id="schema_ListResourcesResponse"></a>
<a id="tocSlistresourcesresponse"></a>
<a id="tocslistresourcesresponse"></a>

```json
{
  "Resources": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resources|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourcesRequest">ListResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesrequest"></a>
<a id="schema_ListResourcesRequest"></a>
<a id="tocSlistresourcesrequest"></a>
<a id="tocslistresourcesrequest"></a>

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "Users": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{
  "OrganizationId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PutAccessControlRuleResponse">PutAccessControlRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccesscontrolruleresponse"></a>
<a id="schema_PutAccessControlRuleResponse"></a>
<a id="tocSputaccesscontrolruleresponse"></a>
<a id="tocsputaccesscontrolruleresponse"></a>

```json
{}
```

<h2 id="tocS_PutAccessControlRuleRequest">PutAccessControlRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccesscontrolrulerequest"></a>
<a id="schema_PutAccessControlRuleRequest"></a>
<a id="tocSputaccesscontrolrulerequest"></a>
<a id="tocsputaccesscontrolrulerequest"></a>

```json
{
  "Name": {},
  "Effect": {},
  "Description": {},
  "IpRanges": {},
  "NotIpRanges": {},
  "Actions": {},
  "NotActions": {},
  "UserIds": {},
  "NotUserIds": {},
  "OrganizationId": {},
  "ImpersonationRoleIds": {},
  "NotImpersonationRoleIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Effect|object|true|none|none|
|Description|object|true|none|none|
|IpRanges|object|false|none|none|
|NotIpRanges|object|false|none|none|
|Actions|object|false|none|none|
|NotActions|object|false|none|none|
|UserIds|object|false|none|none|
|NotUserIds|object|false|none|none|
|OrganizationId|object|true|none|none|
|ImpersonationRoleIds|object|false|none|none|
|NotImpersonationRoleIds|object|false|none|none|

<h2 id="tocS_PutEmailMonitoringConfigurationResponse">PutEmailMonitoringConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailmonitoringconfigurationresponse"></a>
<a id="schema_PutEmailMonitoringConfigurationResponse"></a>
<a id="tocSputemailmonitoringconfigurationresponse"></a>
<a id="tocsputemailmonitoringconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_PutEmailMonitoringConfigurationRequest">PutEmailMonitoringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailmonitoringconfigurationrequest"></a>
<a id="schema_PutEmailMonitoringConfigurationRequest"></a>
<a id="tocSputemailmonitoringconfigurationrequest"></a>
<a id="tocsputemailmonitoringconfigurationrequest"></a>

```json
{
  "OrganizationId": {},
  "RoleArn": {},
  "LogGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|RoleArn|object|true|none|none|
|LogGroupArn|object|true|none|none|

<h2 id="tocS_PutInboundDmarcSettingsResponse">PutInboundDmarcSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputinbounddmarcsettingsresponse"></a>
<a id="schema_PutInboundDmarcSettingsResponse"></a>
<a id="tocSputinbounddmarcsettingsresponse"></a>
<a id="tocsputinbounddmarcsettingsresponse"></a>

```json
{}
```

<h2 id="tocS_PutInboundDmarcSettingsRequest">PutInboundDmarcSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinbounddmarcsettingsrequest"></a>
<a id="schema_PutInboundDmarcSettingsRequest"></a>
<a id="tocSputinbounddmarcsettingsrequest"></a>
<a id="tocsputinbounddmarcsettingsrequest"></a>

```json
{
  "OrganizationId": {},
  "Enforced": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Enforced|object|true|none|none|

<h2 id="tocS_PutMailboxPermissionsResponse">PutMailboxPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputmailboxpermissionsresponse"></a>
<a id="schema_PutMailboxPermissionsResponse"></a>
<a id="tocSputmailboxpermissionsresponse"></a>
<a id="tocsputmailboxpermissionsresponse"></a>

```json
{}
```

<h2 id="tocS_PutMailboxPermissionsRequest">PutMailboxPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmailboxpermissionsrequest"></a>
<a id="schema_PutMailboxPermissionsRequest"></a>
<a id="tocSputmailboxpermissionsrequest"></a>
<a id="tocsputmailboxpermissionsrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "GranteeId": {},
  "PermissionValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|GranteeId|object|true|none|none|
|PermissionValues|object|true|none|none|

<h2 id="tocS_PutMobileDeviceAccessOverrideResponse">PutMobileDeviceAccessOverrideResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputmobiledeviceaccessoverrideresponse"></a>
<a id="schema_PutMobileDeviceAccessOverrideResponse"></a>
<a id="tocSputmobiledeviceaccessoverrideresponse"></a>
<a id="tocsputmobiledeviceaccessoverrideresponse"></a>

```json
{}
```

<h2 id="tocS_PutMobileDeviceAccessOverrideRequest">PutMobileDeviceAccessOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmobiledeviceaccessoverriderequest"></a>
<a id="schema_PutMobileDeviceAccessOverrideRequest"></a>
<a id="tocSputmobiledeviceaccessoverriderequest"></a>
<a id="tocsputmobiledeviceaccessoverriderequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "DeviceId": {},
  "Effect": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|
|DeviceId|object|true|none|none|
|Effect|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_PutRetentionPolicyResponse">PutRetentionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionpolicyresponse"></a>
<a id="schema_PutRetentionPolicyResponse"></a>
<a id="tocSputretentionpolicyresponse"></a>
<a id="tocsputretentionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_PutRetentionPolicyRequest">PutRetentionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputretentionpolicyrequest"></a>
<a id="schema_PutRetentionPolicyRequest"></a>
<a id="tocSputretentionpolicyrequest"></a>
<a id="tocsputretentionpolicyrequest"></a>

```json
{
  "OrganizationId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "FolderConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|Id|object|false|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|FolderConfigurations|object|true|none|none|

<h2 id="tocS_RegisterMailDomainResponse">RegisterMailDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregistermaildomainresponse"></a>
<a id="schema_RegisterMailDomainResponse"></a>
<a id="tocSregistermaildomainresponse"></a>
<a id="tocsregistermaildomainresponse"></a>

```json
{}
```

<h2 id="tocS_RegisterMailDomainRequest">RegisterMailDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistermaildomainrequest"></a>
<a id="schema_RegisterMailDomainRequest"></a>
<a id="tocSregistermaildomainrequest"></a>
<a id="tocsregistermaildomainrequest"></a>

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_RegisterToWorkMailResponse">RegisterToWorkMailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregistertoworkmailresponse"></a>
<a id="schema_RegisterToWorkMailResponse"></a>
<a id="tocSregistertoworkmailresponse"></a>
<a id="tocsregistertoworkmailresponse"></a>

```json
{}
```

<h2 id="tocS_RegisterToWorkMailRequest">RegisterToWorkMailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistertoworkmailrequest"></a>
<a id="schema_RegisterToWorkMailRequest"></a>
<a id="tocSregistertoworkmailrequest"></a>
<a id="tocsregistertoworkmailrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Email": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|Email|object|true|none|none|

<h2 id="tocS_EntityAlreadyRegisteredException">EntityAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemaentityalreadyregisteredexception"></a>
<a id="schema_EntityAlreadyRegisteredException"></a>
<a id="tocSentityalreadyregisteredexception"></a>
<a id="tocsentityalreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_ResetPasswordResponse">ResetPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetpasswordresponse"></a>
<a id="schema_ResetPasswordResponse"></a>
<a id="tocSresetpasswordresponse"></a>
<a id="tocsresetpasswordresponse"></a>

```json
{}
```

<h2 id="tocS_ResetPasswordRequest">ResetPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetpasswordrequest"></a>
<a id="schema_ResetPasswordRequest"></a>
<a id="tocSresetpasswordrequest"></a>
<a id="tocsresetpasswordrequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "Password": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_StartMailboxExportJobResponse">StartMailboxExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmailboxexportjobresponse"></a>
<a id="schema_StartMailboxExportJobResponse"></a>
<a id="tocSstartmailboxexportjobresponse"></a>
<a id="tocsstartmailboxexportjobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartMailboxExportJobRequest">StartMailboxExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmailboxexportjobrequest"></a>
<a id="schema_StartMailboxExportJobRequest"></a>
<a id="tocSstartmailboxexportjobrequest"></a>
<a id="tocsstartmailboxexportjobrequest"></a>

```json
{
  "ClientToken": {},
  "OrganizationId": {},
  "EntityId": {},
  "Description": {},
  "RoleArn": {},
  "KmsKeyArn": {},
  "S3BucketName": {},
  "S3Prefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|true|none|none|
|KmsKeyArn|object|true|none|none|
|S3BucketName|object|true|none|none|
|S3Prefix|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_TestAvailabilityConfigurationResponse">TestAvailabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schematestavailabilityconfigurationresponse"></a>
<a id="schema_TestAvailabilityConfigurationResponse"></a>
<a id="tocStestavailabilityconfigurationresponse"></a>
<a id="tocstestavailabilityconfigurationresponse"></a>

```json
{
  "TestPassed": {},
  "FailureReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TestPassed|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_TestAvailabilityConfigurationRequest">TestAvailabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schematestavailabilityconfigurationrequest"></a>
<a id="schema_TestAvailabilityConfigurationRequest"></a>
<a id="tocStestavailabilityconfigurationrequest"></a>
<a id="tocstestavailabilityconfigurationrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|false|none|none|
|EwsProvider|[EwsAvailabilityProvider](#schemaewsavailabilityprovider)|false|none|Describes an EWS based availability provider. This is only used as input to the service.|
|LambdaProvider|[LambdaAvailabilityProvider](#schemalambdaavailabilityprovider)|false|none|Describes a Lambda based availability provider.|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAvailabilityConfigurationResponse">UpdateAvailabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityconfigurationresponse"></a>
<a id="schema_UpdateAvailabilityConfigurationResponse"></a>
<a id="tocSupdateavailabilityconfigurationresponse"></a>
<a id="tocsupdateavailabilityconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAvailabilityConfigurationRequest">UpdateAvailabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityconfigurationrequest"></a>
<a id="schema_UpdateAvailabilityConfigurationRequest"></a>
<a id="tocSupdateavailabilityconfigurationrequest"></a>
<a id="tocsupdateavailabilityconfigurationrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {},
    "EwsPassword": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|
|EwsProvider|object|false|none|none|
|LambdaProvider|object|false|none|none|

<h2 id="tocS_UpdateDefaultMailDomainResponse">UpdateDefaultMailDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedefaultmaildomainresponse"></a>
<a id="schema_UpdateDefaultMailDomainResponse"></a>
<a id="tocSupdatedefaultmaildomainresponse"></a>
<a id="tocsupdatedefaultmaildomainresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDefaultMailDomainRequest">UpdateDefaultMailDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedefaultmaildomainrequest"></a>
<a id="schema_UpdateDefaultMailDomainRequest"></a>
<a id="tocSupdatedefaultmaildomainrequest"></a>
<a id="tocsupdatedefaultmaildomainrequest"></a>

```json
{
  "OrganizationId": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_UpdateImpersonationRoleResponse">UpdateImpersonationRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimpersonationroleresponse"></a>
<a id="schema_UpdateImpersonationRoleResponse"></a>
<a id="tocSupdateimpersonationroleresponse"></a>
<a id="tocsupdateimpersonationroleresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateImpersonationRoleRequest">UpdateImpersonationRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimpersonationrolerequest"></a>
<a id="schema_UpdateImpersonationRoleRequest"></a>
<a id="tocSupdateimpersonationrolerequest"></a>
<a id="tocsupdateimpersonationrolerequest"></a>

```json
{
  "OrganizationId": {},
  "ImpersonationRoleId": {},
  "Name": {},
  "Type": {},
  "Description": {},
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ImpersonationRoleId|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_UpdateMailboxQuotaResponse">UpdateMailboxQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemailboxquotaresponse"></a>
<a id="schema_UpdateMailboxQuotaResponse"></a>
<a id="tocSupdatemailboxquotaresponse"></a>
<a id="tocsupdatemailboxquotaresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateMailboxQuotaRequest">UpdateMailboxQuotaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemailboxquotarequest"></a>
<a id="schema_UpdateMailboxQuotaRequest"></a>
<a id="tocSupdatemailboxquotarequest"></a>
<a id="tocsupdatemailboxquotarequest"></a>

```json
{
  "OrganizationId": {},
  "UserId": {},
  "MailboxQuota": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|UserId|object|true|none|none|
|MailboxQuota|object|true|none|none|

<h2 id="tocS_UpdateMobileDeviceAccessRuleResponse">UpdateMobileDeviceAccessRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemobiledeviceaccessruleresponse"></a>
<a id="schema_UpdateMobileDeviceAccessRuleResponse"></a>
<a id="tocSupdatemobiledeviceaccessruleresponse"></a>
<a id="tocsupdatemobiledeviceaccessruleresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateMobileDeviceAccessRuleRequest">UpdateMobileDeviceAccessRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemobiledeviceaccessrulerequest"></a>
<a id="schema_UpdateMobileDeviceAccessRuleRequest"></a>
<a id="tocSupdatemobiledeviceaccessrulerequest"></a>
<a id="tocsupdatemobiledeviceaccessrulerequest"></a>

```json
{
  "OrganizationId": {},
  "MobileDeviceAccessRuleId": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "DeviceTypes": {},
  "NotDeviceTypes": {},
  "DeviceModels": {},
  "NotDeviceModels": {},
  "DeviceOperatingSystems": {},
  "NotDeviceOperatingSystems": {},
  "DeviceUserAgents": {},
  "NotDeviceUserAgents": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|MobileDeviceAccessRuleId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Effect|object|true|none|none|
|DeviceTypes|object|false|none|none|
|NotDeviceTypes|object|false|none|none|
|DeviceModels|object|false|none|none|
|NotDeviceModels|object|false|none|none|
|DeviceOperatingSystems|object|false|none|none|
|NotDeviceOperatingSystems|object|false|none|none|
|DeviceUserAgents|object|false|none|none|
|NotDeviceUserAgents|object|false|none|none|

<h2 id="tocS_UpdatePrimaryEmailAddressResponse">UpdatePrimaryEmailAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprimaryemailaddressresponse"></a>
<a id="schema_UpdatePrimaryEmailAddressResponse"></a>
<a id="tocSupdateprimaryemailaddressresponse"></a>
<a id="tocsupdateprimaryemailaddressresponse"></a>

```json
{}
```

<h2 id="tocS_UpdatePrimaryEmailAddressRequest">UpdatePrimaryEmailAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprimaryemailaddressrequest"></a>
<a id="schema_UpdatePrimaryEmailAddressRequest"></a>
<a id="tocSupdateprimaryemailaddressrequest"></a>
<a id="tocsupdateprimaryemailaddressrequest"></a>

```json
{
  "OrganizationId": {},
  "EntityId": {},
  "Email": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|EntityId|object|true|none|none|
|Email|object|true|none|none|

<h2 id="tocS_UpdateResourceResponse">UpdateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceresponse"></a>
<a id="schema_UpdateResourceResponse"></a>
<a id="tocSupdateresourceresponse"></a>
<a id="tocsupdateresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceRequest">UpdateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcerequest"></a>
<a id="schema_UpdateResourceRequest"></a>
<a id="tocSupdateresourcerequest"></a>
<a id="tocsupdateresourcerequest"></a>

```json
{
  "OrganizationId": {},
  "ResourceId": {},
  "Name": {},
  "BookingOptions": {
    "AutoAcceptRequests": {},
    "AutoDeclineRecurringRequests": {},
    "AutoDeclineConflictingRequests": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|ResourceId|object|true|none|none|
|Name|object|false|none|none|
|BookingOptions|object|false|none|none|

<h2 id="tocS_InvalidConfigurationException">InvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationexception"></a>
<a id="schema_InvalidConfigurationException"></a>
<a id="tocSinvalidconfigurationexception"></a>
<a id="tocsinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_AccessControlRuleName">AccessControlRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolrulename"></a>
<a id="schema_AccessControlRuleName"></a>
<a id="tocSaccesscontrolrulename"></a>
<a id="tocsaccesscontrolrulename"></a>

```json
"string"
```

<h2 id="tocS_AccessControlRuleEffect">AccessControlRuleEffect</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolruleeffect"></a>
<a id="schema_AccessControlRuleEffect"></a>
<a id="tocSaccesscontrolruleeffect"></a>
<a id="tocsaccesscontrolruleeffect"></a>

```json
"ALLOW"
```

<h2 id="tocS_AccessControlRuleDescription">AccessControlRuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolruledescription"></a>
<a id="schema_AccessControlRuleDescription"></a>
<a id="tocSaccesscontrolruledescription"></a>
<a id="tocsaccesscontrolruledescription"></a>

```json
"string"
```

<h2 id="tocS_IpRangeList">IpRangeList</h2>
<!-- backwards compatibility -->
<a id="schemaiprangelist"></a>
<a id="schema_IpRangeList"></a>
<a id="tocSiprangelist"></a>
<a id="tocsiprangelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ActionsList">ActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaactionslist"></a>
<a id="schema_ActionsList"></a>
<a id="tocSactionslist"></a>
<a id="tocsactionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserIdList">UserIdList</h2>
<!-- backwards compatibility -->
<a id="schemauseridlist"></a>
<a id="schema_UserIdList"></a>
<a id="tocSuseridlist"></a>
<a id="tocsuseridlist"></a>

```json
[
  "stringstring"
]
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

<h2 id="tocS_ImpersonationRoleIdList">ImpersonationRoleIdList</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationroleidlist"></a>
<a id="schema_ImpersonationRoleIdList"></a>
<a id="tocSimpersonationroleidlist"></a>
<a id="tocsimpersonationroleidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccessControlRule">AccessControlRule</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolrule"></a>
<a id="schema_AccessControlRule"></a>
<a id="tocSaccesscontrolrule"></a>
<a id="tocsaccesscontrolrule"></a>

```json
{
  "Name": {},
  "Effect": {},
  "Description": {},
  "IpRanges": {},
  "NotIpRanges": {},
  "Actions": {},
  "NotActions": {},
  "UserIds": {},
  "NotUserIds": {},
  "DateCreated": {},
  "DateModified": {},
  "ImpersonationRoleIds": {},
  "NotImpersonationRoleIds": {}
}
```

A rule that controls access to an WorkMail organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Effect|object|false|none|none|
|Description|object|false|none|none|
|IpRanges|object|false|none|none|
|NotIpRanges|object|false|none|none|
|Actions|object|false|none|none|
|NotActions|object|false|none|none|
|UserIds|object|false|none|none|
|NotUserIds|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|
|ImpersonationRoleIds|object|false|none|none|
|NotImpersonationRoleIds|object|false|none|none|

<h2 id="tocS_AccessControlRuleAction">AccessControlRuleAction</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolruleaction"></a>
<a id="schema_AccessControlRuleAction"></a>
<a id="tocSaccesscontrolruleaction"></a>
<a id="tocsaccesscontrolruleaction"></a>

```json
"string"
```

<h2 id="tocS_AccessControlRuleNameList">AccessControlRuleNameList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolrulenamelist"></a>
<a id="schema_AccessControlRuleNameList"></a>
<a id="tocSaccesscontrolrulenamelist"></a>
<a id="tocsaccesscontrolrulenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccessControlRulesList">AccessControlRulesList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolruleslist"></a>
<a id="schema_AccessControlRulesList"></a>
<a id="tocSaccesscontrolruleslist"></a>
<a id="tocsaccesscontrolruleslist"></a>

```json
[
  {
    "Name": {},
    "Effect": {},
    "Description": {},
    "IpRanges": {},
    "NotIpRanges": {},
    "Actions": {},
    "NotActions": {},
    "UserIds": {},
    "NotUserIds": {},
    "DateCreated": {},
    "DateModified": {},
    "ImpersonationRoleIds": {},
    "NotImpersonationRoleIds": {}
  }
]
```

<h2 id="tocS_AccessEffect">AccessEffect</h2>
<!-- backwards compatibility -->
<a id="schemaaccesseffect"></a>
<a id="schema_AccessEffect"></a>
<a id="tocSaccesseffect"></a>
<a id="tocsaccesseffect"></a>

```json
"ALLOW"
```

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_Aliases">Aliases</h2>
<!-- backwards compatibility -->
<a id="schemaaliases"></a>
<a id="schema_Aliases"></a>
<a id="tocSaliases"></a>
<a id="tocsaliases"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_OrganizationId">OrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_OrganizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"stringstringstringstringstringstri"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"stringstringstringstringstringstri"
```

<h2 id="tocS_WorkMailIdentifier">WorkMailIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaworkmailidentifier"></a>
<a id="schema_WorkMailIdentifier"></a>
<a id="tocSworkmailidentifier"></a>
<a id="tocsworkmailidentifier"></a>

```json
"stringstring"
```

<h2 id="tocS_ImpersonationRoleId">ImpersonationRoleId</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationroleid"></a>
<a id="schema_ImpersonationRoleId"></a>
<a id="tocSimpersonationroleid"></a>
<a id="tocsimpersonationroleid"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationToken">ImpersonationToken</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationtoken"></a>
<a id="schema_ImpersonationToken"></a>
<a id="tocSimpersonationtoken"></a>
<a id="tocsimpersonationtoken"></a>

```json
"string"
```

<h2 id="tocS_ExpiresIn">ExpiresIn</h2>
<!-- backwards compatibility -->
<a id="schemaexpiresin"></a>
<a id="schema_ExpiresIn"></a>
<a id="tocSexpiresin"></a>
<a id="tocsexpiresin"></a>

```json
0
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_AvailabilityProviderType">AvailabilityProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityprovidertype"></a>
<a id="schema_AvailabilityProviderType"></a>
<a id="tocSavailabilityprovidertype"></a>
<a id="tocsavailabilityprovidertype"></a>

```json
"EWS"
```

<h2 id="tocS_RedactedEwsAvailabilityProvider">RedactedEwsAvailabilityProvider</h2>
<!-- backwards compatibility -->
<a id="schemaredactedewsavailabilityprovider"></a>
<a id="schema_RedactedEwsAvailabilityProvider"></a>
<a id="tocSredactedewsavailabilityprovider"></a>
<a id="tocsredactedewsavailabilityprovider"></a>

```json
{
  "EwsEndpoint": {},
  "EwsUsername": {}
}
```

Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EwsEndpoint|object|false|none|none|
|EwsUsername|object|false|none|none|

<h2 id="tocS_LambdaAvailabilityProvider">LambdaAvailabilityProvider</h2>
<!-- backwards compatibility -->
<a id="schemalambdaavailabilityprovider"></a>
<a id="schema_LambdaAvailabilityProvider"></a>
<a id="tocSlambdaavailabilityprovider"></a>
<a id="tocslambdaavailabilityprovider"></a>

```json
{
  "LambdaArn": {}
}
```

Describes a Lambda based availability provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaArn|object|true|none|none|

<h2 id="tocS_AvailabilityConfiguration">AvailabilityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityconfiguration"></a>
<a id="schema_AvailabilityConfiguration"></a>
<a id="tocSavailabilityconfiguration"></a>
<a id="tocsavailabilityconfiguration"></a>

```json
{
  "DomainName": {},
  "ProviderType": {},
  "EwsProvider": {
    "EwsEndpoint": {},
    "EwsUsername": {}
  },
  "LambdaProvider": {
    "LambdaArn": {}
  },
  "DateCreated": {},
  "DateModified": {}
}
```

List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|ProviderType|object|false|none|none|
|EwsProvider|object|false|none|none|
|LambdaProvider|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_AvailabilityConfigurationList">AvailabilityConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityconfigurationlist"></a>
<a id="schema_AvailabilityConfigurationList"></a>
<a id="tocSavailabilityconfigurationlist"></a>
<a id="tocsavailabilityconfigurationlist"></a>

```json
[
  {
    "DomainName": {},
    "ProviderType": {},
    "EwsProvider": {
      "EwsEndpoint": {},
      "EwsUsername": {}
    },
    "LambdaProvider": {
      "LambdaArn": {}
    },
    "DateCreated": {},
    "DateModified": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BookingOptions">BookingOptions</h2>
<!-- backwards compatibility -->
<a id="schemabookingoptions"></a>
<a id="schema_BookingOptions"></a>
<a id="tocSbookingoptions"></a>
<a id="tocsbookingoptions"></a>

```json
{
  "AutoAcceptRequests": {},
  "AutoDeclineRecurringRequests": {},
  "AutoDeclineConflictingRequests": {}
}
```

At least one delegate must be associated to the resource to disable automatic replies from the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoAcceptRequests|object|false|none|none|
|AutoDeclineRecurringRequests|object|false|none|none|
|AutoDeclineConflictingRequests|object|false|none|none|

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_IdempotencyClientToken">IdempotencyClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencyclienttoken"></a>
<a id="schema_IdempotencyClientToken"></a>
<a id="tocSidempotencyclienttoken"></a>
<a id="tocsidempotencyclienttoken"></a>

```json
"string"
```

<h2 id="tocS_MailboxExportJobId">MailboxExportJobId</h2>
<!-- backwards compatibility -->
<a id="schemamailboxexportjobid"></a>
<a id="schema_MailboxExportJobId"></a>
<a id="tocSmailboxexportjobid"></a>
<a id="tocsmailboxexportjobid"></a>

```json
"string"
```

<h2 id="tocS_EwsAvailabilityProvider">EwsAvailabilityProvider</h2>
<!-- backwards compatibility -->
<a id="schemaewsavailabilityprovider"></a>
<a id="schema_EwsAvailabilityProvider"></a>
<a id="tocSewsavailabilityprovider"></a>
<a id="tocsewsavailabilityprovider"></a>

```json
{
  "EwsEndpoint": {},
  "EwsUsername": {},
  "EwsPassword": {}
}
```

Describes an EWS based availability provider. This is only used as input to the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EwsEndpoint|object|true|none|none|
|EwsUsername|object|true|none|none|
|EwsPassword|object|true|none|none|

<h2 id="tocS_GroupName">GroupName</h2>
<!-- backwards compatibility -->
<a id="schemagroupname"></a>
<a id="schema_GroupName"></a>
<a id="tocSgroupname"></a>
<a id="tocsgroupname"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationRoleName">ImpersonationRoleName</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrolename"></a>
<a id="schema_ImpersonationRoleName"></a>
<a id="tocSimpersonationrolename"></a>
<a id="tocsimpersonationrolename"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationRoleType">ImpersonationRoleType</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationroletype"></a>
<a id="schema_ImpersonationRoleType"></a>
<a id="tocSimpersonationroletype"></a>
<a id="tocsimpersonationroletype"></a>

```json
"FULL_ACCESS"
```

<h2 id="tocS_ImpersonationRoleDescription">ImpersonationRoleDescription</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationroledescription"></a>
<a id="schema_ImpersonationRoleDescription"></a>
<a id="tocSimpersonationroledescription"></a>
<a id="tocsimpersonationroledescription"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationRuleList">ImpersonationRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrulelist"></a>
<a id="schema_ImpersonationRuleList"></a>
<a id="tocSimpersonationrulelist"></a>
<a id="tocsimpersonationrulelist"></a>

```json
[
  {
    "ImpersonationRuleId": {},
    "Name": {},
    "Description": {},
    "Effect": {},
    "TargetUsers": {},
    "NotTargetUsers": {}
  }
]
```

<h2 id="tocS_MobileDeviceAccessRuleName">MobileDeviceAccessRuleName</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessrulename"></a>
<a id="schema_MobileDeviceAccessRuleName"></a>
<a id="tocSmobiledeviceaccessrulename"></a>
<a id="tocsmobiledeviceaccessrulename"></a>

```json
"string"
```

<h2 id="tocS_MobileDeviceAccessRuleDescription">MobileDeviceAccessRuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessruledescription"></a>
<a id="schema_MobileDeviceAccessRuleDescription"></a>
<a id="tocSmobiledeviceaccessruledescription"></a>
<a id="tocsmobiledeviceaccessruledescription"></a>

```json
"string"
```

<h2 id="tocS_MobileDeviceAccessRuleEffect">MobileDeviceAccessRuleEffect</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessruleeffect"></a>
<a id="schema_MobileDeviceAccessRuleEffect"></a>
<a id="tocSmobiledeviceaccessruleeffect"></a>
<a id="tocsmobiledeviceaccessruleeffect"></a>

```json
"ALLOW"
```

<h2 id="tocS_DeviceTypeList">DeviceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemadevicetypelist"></a>
<a id="schema_DeviceTypeList"></a>
<a id="tocSdevicetypelist"></a>
<a id="tocsdevicetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceModelList">DeviceModelList</h2>
<!-- backwards compatibility -->
<a id="schemadevicemodellist"></a>
<a id="schema_DeviceModelList"></a>
<a id="tocSdevicemodellist"></a>
<a id="tocsdevicemodellist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceOperatingSystemList">DeviceOperatingSystemList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoperatingsystemlist"></a>
<a id="schema_DeviceOperatingSystemList"></a>
<a id="tocSdeviceoperatingsystemlist"></a>
<a id="tocsdeviceoperatingsystemlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeviceUserAgentList">DeviceUserAgentList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceuseragentlist"></a>
<a id="schema_DeviceUserAgentList"></a>
<a id="tocSdeviceuseragentlist"></a>
<a id="tocsdeviceuseragentlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MobileDeviceAccessRuleId">MobileDeviceAccessRuleId</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessruleid"></a>
<a id="schema_MobileDeviceAccessRuleId"></a>
<a id="tocSmobiledeviceaccessruleid"></a>
<a id="tocsmobiledeviceaccessruleid"></a>

```json
"string"
```

<h2 id="tocS_DirectoryId">DirectoryId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryid"></a>
<a id="schema_DirectoryId"></a>
<a id="tocSdirectoryid"></a>
<a id="tocsdirectoryid"></a>

```json
"stringstring"
```

<h2 id="tocS_OrganizationName">OrganizationName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationname"></a>
<a id="schema_OrganizationName"></a>
<a id="tocSorganizationname"></a>
<a id="tocsorganizationname"></a>

```json
"string"
```

<h2 id="tocS_Domains">Domains</h2>
<!-- backwards compatibility -->
<a id="schemadomains"></a>
<a id="schema_Domains"></a>
<a id="tocSdomains"></a>
<a id="tocsdomains"></a>

```json
[
  {
    "DomainName": {},
    "HostedZoneId": {}
  }
]
```

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

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
"ROOM"
```

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

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

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_MemberType">MemberType</h2>
<!-- backwards compatibility -->
<a id="schemamembertype"></a>
<a id="schema_MemberType"></a>
<a id="tocSmembertype"></a>
<a id="tocsmembertype"></a>

```json
"GROUP"
```

<h2 id="tocS_Delegate">Delegate</h2>
<!-- backwards compatibility -->
<a id="schemadelegate"></a>
<a id="schema_Delegate"></a>
<a id="tocSdelegate"></a>
<a id="tocsdelegate"></a>

```json
{
  "Id": {},
  "Type": {}
}
```

The name of the attribute, which is one of the values defined in the UserAttribute enumeration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_EntityIdentifier">EntityIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaentityidentifier"></a>
<a id="schema_EntityIdentifier"></a>
<a id="tocSentityidentifier"></a>
<a id="tocsentityidentifier"></a>

```json
"string"
```

<h2 id="tocS_DeviceId">DeviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_DeviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
"string"
```

<h2 id="tocS_ShortString">ShortString</h2>
<!-- backwards compatibility -->
<a id="schemashortstring"></a>
<a id="schema_ShortString"></a>
<a id="tocSshortstring"></a>
<a id="tocsshortstring"></a>

```json
"string"
```

<h2 id="tocS_WorkMailDomainName">WorkMailDomainName</h2>
<!-- backwards compatibility -->
<a id="schemaworkmaildomainname"></a>
<a id="schema_WorkMailDomainName"></a>
<a id="tocSworkmaildomainname"></a>
<a id="tocsworkmaildomainname"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_LogGroupArn">LogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaloggrouparn"></a>
<a id="schema_LogGroupArn"></a>
<a id="tocSloggrouparn"></a>
<a id="tocsloggrouparn"></a>

```json
"stringstringstringstringstringstringstringstrin"
```

<h2 id="tocS_EntityState">EntityState</h2>
<!-- backwards compatibility -->
<a id="schemaentitystate"></a>
<a id="schema_EntityState"></a>
<a id="tocSentitystate"></a>
<a id="tocsentitystate"></a>

```json
"ENABLED"
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

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_MailboxExportJobState">MailboxExportJobState</h2>
<!-- backwards compatibility -->
<a id="schemamailboxexportjobstate"></a>
<a id="schema_MailboxExportJobState"></a>
<a id="tocSmailboxexportjobstate"></a>
<a id="tocsmailboxexportjobstate"></a>

```json
"RUNNING"
```

<h2 id="tocS_MailboxExportErrorInfo">MailboxExportErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemamailboxexporterrorinfo"></a>
<a id="schema_MailboxExportErrorInfo"></a>
<a id="tocSmailboxexporterrorinfo"></a>
<a id="tocsmailboxexporterrorinfo"></a>

```json
"string"
```

<h2 id="tocS_UserRole">UserRole</h2>
<!-- backwards compatibility -->
<a id="schemauserrole"></a>
<a id="schema_UserRole"></a>
<a id="tocSuserrole"></a>
<a id="tocsuserrole"></a>

```json
"USER"
```

<h2 id="tocS_DeviceModel">DeviceModel</h2>
<!-- backwards compatibility -->
<a id="schemadevicemodel"></a>
<a id="schema_DeviceModel"></a>
<a id="tocSdevicemodel"></a>
<a id="tocsdevicemodel"></a>

```json
"string"
```

<h2 id="tocS_DeviceOperatingSystem">DeviceOperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoperatingsystem"></a>
<a id="schema_DeviceOperatingSystem"></a>
<a id="tocSdeviceoperatingsystem"></a>
<a id="tocsdeviceoperatingsystem"></a>

```json
"string"
```

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"string"
```

<h2 id="tocS_DeviceUserAgent">DeviceUserAgent</h2>
<!-- backwards compatibility -->
<a id="schemadeviceuseragent"></a>
<a id="schema_DeviceUserAgent"></a>
<a id="tocSdeviceuseragent"></a>
<a id="tocsdeviceuseragent"></a>

```json
"string"
```

<h2 id="tocS_DnsRecord">DnsRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_DnsRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
{
  "Type": {},
  "Hostname": {},
  "Value": {}
}
```

A DNS record uploaded to your DNS provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Hostname|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_DnsRecordVerificationStatus">DnsRecordVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordverificationstatus"></a>
<a id="schema_DnsRecordVerificationStatus"></a>
<a id="tocSdnsrecordverificationstatus"></a>
<a id="tocsdnsrecordverificationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_DnsRecords">DnsRecords</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecords"></a>
<a id="schema_DnsRecords"></a>
<a id="tocSdnsrecords"></a>
<a id="tocsdnsrecords"></a>

```json
[
  {
    "Type": {},
    "Hostname": {},
    "Value": {}
  }
]
```

<h2 id="tocS_HostedZoneId">HostedZoneId</h2>
<!-- backwards compatibility -->
<a id="schemahostedzoneid"></a>
<a id="schema_HostedZoneId"></a>
<a id="tocShostedzoneid"></a>
<a id="tocshostedzoneid"></a>

```json
"string"
```

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "DomainName": {},
  "HostedZoneId": {}
}
```

<p>The domain to associate with an WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|HostedZoneId|object|false|none|none|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_ExternalUserName">ExternalUserName</h2>
<!-- backwards compatibility -->
<a id="schemaexternalusername"></a>
<a id="schema_ExternalUserName"></a>
<a id="tocSexternalusername"></a>
<a id="tocsexternalusername"></a>

```json
"string"
```

<h2 id="tocS_FolderName">FolderName</h2>
<!-- backwards compatibility -->
<a id="schemafoldername"></a>
<a id="schema_FolderName"></a>
<a id="tocSfoldername"></a>
<a id="tocsfoldername"></a>

```json
"INBOX"
```

<h2 id="tocS_RetentionAction">RetentionAction</h2>
<!-- backwards compatibility -->
<a id="schemaretentionaction"></a>
<a id="schema_RetentionAction"></a>
<a id="tocSretentionaction"></a>
<a id="tocsretentionaction"></a>

```json
"NONE"
```

<h2 id="tocS_RetentionPeriod">RetentionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiod"></a>
<a id="schema_RetentionPeriod"></a>
<a id="tocSretentionperiod"></a>
<a id="tocsretentionperiod"></a>

```json
1
```

<h2 id="tocS_FolderConfiguration">FolderConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafolderconfiguration"></a>
<a id="schema_FolderConfiguration"></a>
<a id="tocSfolderconfiguration"></a>
<a id="tocsfolderconfiguration"></a>

```json
{
  "Name": {},
  "Action": {},
  "Period": {}
}
```

The configuration applied to an organization's folders by its retention policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Action|object|true|none|none|
|Period|object|false|none|none|

<h2 id="tocS_FolderConfigurations">FolderConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemafolderconfigurations"></a>
<a id="schema_FolderConfigurations"></a>
<a id="tocSfolderconfigurations"></a>
<a id="tocsfolderconfigurations"></a>

```json
[
  {
    "Name": {},
    "Action": {},
    "Period": {}
  }
]
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationMatchedRuleList">ImpersonationMatchedRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationmatchedrulelist"></a>
<a id="schema_ImpersonationMatchedRuleList"></a>
<a id="tocSimpersonationmatchedrulelist"></a>
<a id="tocsimpersonationmatchedrulelist"></a>

```json
[
  {
    "ImpersonationRuleId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_MailboxQuota">MailboxQuota</h2>
<!-- backwards compatibility -->
<a id="schemamailboxquota"></a>
<a id="schema_MailboxQuota"></a>
<a id="tocSmailboxquota"></a>
<a id="tocsmailboxquota"></a>

```json
1
```

<h2 id="tocS_MailboxSize">MailboxSize</h2>
<!-- backwards compatibility -->
<a id="schemamailboxsize"></a>
<a id="schema_MailboxSize"></a>
<a id="tocSmailboxsize"></a>
<a id="tocsmailboxsize"></a>

```json
0
```

<h2 id="tocS_MobileDeviceAccessMatchedRuleList">MobileDeviceAccessMatchedRuleList</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessmatchedrulelist"></a>
<a id="schema_MobileDeviceAccessMatchedRuleList"></a>
<a id="tocSmobiledeviceaccessmatchedrulelist"></a>
<a id="tocsmobiledeviceaccessmatchedrulelist"></a>

```json
[
  {
    "MobileDeviceAccessRuleId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "Id": {},
  "Email": {},
  "Name": {},
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

The representation of an WorkMail group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  {
    "Id": {},
    "Email": {},
    "Name": {},
    "State": {},
    "EnabledDate": {},
    "DisabledDate": {}
  }
]
```

<h2 id="tocS_ImpersonationRuleId">ImpersonationRuleId</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationruleid"></a>
<a id="schema_ImpersonationRuleId"></a>
<a id="tocSimpersonationruleid"></a>
<a id="tocsimpersonationruleid"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationRuleName">ImpersonationRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrulename"></a>
<a id="schema_ImpersonationRuleName"></a>
<a id="tocSimpersonationrulename"></a>
<a id="tocsimpersonationrulename"></a>

```json
"string"
```

<h2 id="tocS_ImpersonationMatchedRule">ImpersonationMatchedRule</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationmatchedrule"></a>
<a id="schema_ImpersonationMatchedRule"></a>
<a id="tocSimpersonationmatchedrule"></a>
<a id="tocsimpersonationmatchedrule"></a>

```json
{
  "ImpersonationRuleId": {},
  "Name": {}
}
```

The impersonation rule that matched the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImpersonationRuleId|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_ImpersonationRole">ImpersonationRole</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrole"></a>
<a id="schema_ImpersonationRole"></a>
<a id="tocSimpersonationrole"></a>
<a id="tocsimpersonationrole"></a>

```json
{
  "ImpersonationRoleId": {},
  "Name": {},
  "Type": {},
  "DateCreated": {},
  "DateModified": {}
}
```

An impersonation role for the given WorkMail organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImpersonationRoleId|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_ImpersonationRoleList">ImpersonationRoleList</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrolelist"></a>
<a id="schema_ImpersonationRoleList"></a>
<a id="tocSimpersonationrolelist"></a>
<a id="tocsimpersonationrolelist"></a>

```json
[
  {
    "ImpersonationRoleId": {},
    "Name": {},
    "Type": {},
    "DateCreated": {},
    "DateModified": {}
  }
]
```

<h2 id="tocS_ImpersonationRuleDescription">ImpersonationRuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationruledescription"></a>
<a id="schema_ImpersonationRuleDescription"></a>
<a id="tocSimpersonationruledescription"></a>
<a id="tocsimpersonationruledescription"></a>

```json
"string"
```

<h2 id="tocS_TargetUsers">TargetUsers</h2>
<!-- backwards compatibility -->
<a id="schematargetusers"></a>
<a id="schema_TargetUsers"></a>
<a id="tocStargetusers"></a>
<a id="tocstargetusers"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImpersonationRule">ImpersonationRule</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonationrule"></a>
<a id="schema_ImpersonationRule"></a>
<a id="tocSimpersonationrule"></a>
<a id="tocsimpersonationrule"></a>

```json
{
  "ImpersonationRuleId": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "TargetUsers": {},
  "NotTargetUsers": {}
}
```

The rules for the given impersonation role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImpersonationRuleId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Effect|object|true|none|none|
|TargetUsers|object|false|none|none|
|NotTargetUsers|object|false|none|none|

<h2 id="tocS_IpRange">IpRange</h2>
<!-- backwards compatibility -->
<a id="schemaiprange"></a>
<a id="schema_IpRange"></a>
<a id="tocSiprange"></a>
<a id="tocsiprange"></a>

```json
"string"
```

<h2 id="tocS_MailboxExportJob">MailboxExportJob</h2>
<!-- backwards compatibility -->
<a id="schemamailboxexportjob"></a>
<a id="schema_MailboxExportJob"></a>
<a id="tocSmailboxexportjob"></a>
<a id="tocsmailboxexportjob"></a>

```json
{
  "JobId": {},
  "EntityId": {},
  "Description": {},
  "S3BucketName": {},
  "S3Path": {},
  "EstimatedProgress": {},
  "State": {},
  "StartTime": {},
  "EndTime": {}
}
```

The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|EntityId|object|false|none|none|
|Description|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3Path|object|false|none|none|
|EstimatedProgress|object|false|none|none|
|State|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_Jobs">Jobs</h2>
<!-- backwards compatibility -->
<a id="schemajobs"></a>
<a id="schema_Jobs"></a>
<a id="tocSjobs"></a>
<a id="tocsjobs"></a>

```json
[
  {
    "JobId": {},
    "EntityId": {},
    "Description": {},
    "S3BucketName": {},
    "S3Path": {},
    "EstimatedProgress": {},
    "State": {},
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_LambdaArn">LambdaArn</h2>
<!-- backwards compatibility -->
<a id="schemalambdaarn"></a>
<a id="schema_LambdaArn"></a>
<a id="tocSlambdaarn"></a>
<a id="tocslambdaarn"></a>

```json
"stringstringstringstringstringstringstringstrings"
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Type": {},
    "State": {},
    "EnabledDate": {},
    "DisabledDate": {}
  }
]
```

<h2 id="tocS_MailDomains">MailDomains</h2>
<!-- backwards compatibility -->
<a id="schemamaildomains"></a>
<a id="schema_MailDomains"></a>
<a id="tocSmaildomains"></a>
<a id="tocsmaildomains"></a>

```json
[
  {
    "DomainName": {},
    "DefaultDomain": {}
  }
]
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
[
  {
    "GranteeId": {},
    "GranteeType": {},
    "PermissionValues": {}
  }
]
```

<h2 id="tocS_MobileDeviceAccessOverridesList">MobileDeviceAccessOverridesList</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessoverrideslist"></a>
<a id="schema_MobileDeviceAccessOverridesList"></a>
<a id="tocSmobiledeviceaccessoverrideslist"></a>
<a id="tocsmobiledeviceaccessoverrideslist"></a>

```json
[
  {
    "UserId": {},
    "DeviceId": {},
    "Effect": {},
    "Description": {},
    "DateCreated": {},
    "DateModified": {}
  }
]
```

<h2 id="tocS_MobileDeviceAccessRulesList">MobileDeviceAccessRulesList</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessruleslist"></a>
<a id="schema_MobileDeviceAccessRulesList"></a>
<a id="tocSmobiledeviceaccessruleslist"></a>
<a id="tocsmobiledeviceaccessruleslist"></a>

```json
[
  {
    "MobileDeviceAccessRuleId": {},
    "Name": {},
    "Description": {},
    "Effect": {},
    "DeviceTypes": {},
    "NotDeviceTypes": {},
    "DeviceModels": {},
    "NotDeviceModels": {},
    "DeviceOperatingSystems": {},
    "NotDeviceOperatingSystems": {},
    "DeviceUserAgents": {},
    "NotDeviceUserAgents": {},
    "DateCreated": {},
    "DateModified": {}
  }
]
```

<h2 id="tocS_OrganizationSummaries">OrganizationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsummaries"></a>
<a id="schema_OrganizationSummaries"></a>
<a id="tocSorganizationsummaries"></a>
<a id="tocsorganizationsummaries"></a>

```json
[
  {
    "OrganizationId": {},
    "Alias": {},
    "DefaultMailDomain": {},
    "ErrorMessage": {},
    "State": {}
  }
]
```

<h2 id="tocS_ResourceDelegates">ResourceDelegates</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedelegates"></a>
<a id="schema_ResourceDelegates"></a>
<a id="tocSresourcedelegates"></a>
<a id="tocsresourcedelegates"></a>

```json
[
  {
    "Id": {},
    "Type": {}
  }
]
```

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  {
    "Id": {},
    "Email": {},
    "Name": {},
    "Type": {},
    "State": {},
    "EnabledDate": {},
    "DisabledDate": {}
  }
]
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
[
  {
    "Id": {},
    "Email": {},
    "Name": {},
    "DisplayName": {},
    "State": {},
    "UserRole": {},
    "EnabledDate": {},
    "DisabledDate": {}
  }
]
```

<h2 id="tocS_MailDomainSummary">MailDomainSummary</h2>
<!-- backwards compatibility -->
<a id="schemamaildomainsummary"></a>
<a id="schema_MailDomainSummary"></a>
<a id="tocSmaildomainsummary"></a>
<a id="tocsmaildomainsummary"></a>

```json
{
  "DomainName": {},
  "DefaultDomain": {}
}
```

The data for a given domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|DefaultDomain|object|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "Id": {},
  "Name": {},
  "Type": {},
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

The representation of a user or group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|State|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

<h2 id="tocS_MobileDeviceAccessMatchedRule">MobileDeviceAccessMatchedRule</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessmatchedrule"></a>
<a id="schema_MobileDeviceAccessMatchedRule"></a>
<a id="tocSmobiledeviceaccessmatchedrule"></a>
<a id="tocsmobiledeviceaccessmatchedrule"></a>

```json
{
  "MobileDeviceAccessRuleId": {},
  "Name": {}
}
```

The rule that a simulated user matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MobileDeviceAccessRuleId|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_MobileDeviceAccessOverride">MobileDeviceAccessOverride</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessoverride"></a>
<a id="schema_MobileDeviceAccessOverride"></a>
<a id="tocSmobiledeviceaccessoverride"></a>
<a id="tocsmobiledeviceaccessoverride"></a>

```json
{
  "UserId": {},
  "DeviceId": {},
  "Effect": {},
  "Description": {},
  "DateCreated": {},
  "DateModified": {}
}
```

The override object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|DeviceId|object|false|none|none|
|Effect|object|false|none|none|
|Description|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_MobileDeviceAccessRule">MobileDeviceAccessRule</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaccessrule"></a>
<a id="schema_MobileDeviceAccessRule"></a>
<a id="tocSmobiledeviceaccessrule"></a>
<a id="tocsmobiledeviceaccessrule"></a>

```json
{
  "MobileDeviceAccessRuleId": {},
  "Name": {},
  "Description": {},
  "Effect": {},
  "DeviceTypes": {},
  "NotDeviceTypes": {},
  "DeviceModels": {},
  "NotDeviceModels": {},
  "DeviceOperatingSystems": {},
  "NotDeviceOperatingSystems": {},
  "DeviceUserAgents": {},
  "NotDeviceUserAgents": {},
  "DateCreated": {},
  "DateModified": {}
}
```

A rule that controls access to mobile devices for an WorkMail group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MobileDeviceAccessRuleId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Effect|object|false|none|none|
|DeviceTypes|object|false|none|none|
|NotDeviceTypes|object|false|none|none|
|DeviceModels|object|false|none|none|
|NotDeviceModels|object|false|none|none|
|DeviceOperatingSystems|object|false|none|none|
|NotDeviceOperatingSystems|object|false|none|none|
|DeviceUserAgents|object|false|none|none|
|NotDeviceUserAgents|object|false|none|none|
|DateCreated|object|false|none|none|
|DateModified|object|false|none|none|

<h2 id="tocS_OrganizationSummary">OrganizationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsummary"></a>
<a id="schema_OrganizationSummary"></a>
<a id="tocSorganizationsummary"></a>
<a id="tocsorganizationsummary"></a>

```json
{
  "OrganizationId": {},
  "Alias": {},
  "DefaultMailDomain": {},
  "ErrorMessage": {},
  "State": {}
}
```

The representation of an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|
|Alias|object|false|none|none|
|DefaultMailDomain|object|false|none|none|
|ErrorMessage|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_PermissionValues">PermissionValues</h2>
<!-- backwards compatibility -->
<a id="schemapermissionvalues"></a>
<a id="schema_PermissionValues"></a>
<a id="tocSpermissionvalues"></a>
<a id="tocspermissionvalues"></a>

```json
[
  "FULL_ACCESS"
]
```

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "GranteeId": {},
  "GranteeType": {},
  "PermissionValues": {}
}
```

Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GranteeId|object|true|none|none|
|GranteeType|object|true|none|none|
|PermissionValues|object|true|none|none|

<h2 id="tocS_PermissionType">PermissionType</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontype"></a>
<a id="schema_PermissionType"></a>
<a id="tocSpermissiontype"></a>
<a id="tocspermissiontype"></a>

```json
"FULL_ACCESS"
```

<h2 id="tocS_PolicyDescription">PolicyDescription</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescription"></a>
<a id="schema_PolicyDescription"></a>
<a id="tocSpolicydescription"></a>
<a id="tocspolicydescription"></a>

```json
"password"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "Id": {},
  "Email": {},
  "Name": {},
  "Type": {},
  "State": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

The representation of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|State|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|

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

Describes a tag applied to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "Id": {},
  "Email": {},
  "Name": {},
  "DisplayName": {},
  "State": {},
  "UserRole": {},
  "EnabledDate": {},
  "DisabledDate": {}
}
```

The representation of an WorkMail user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Email|object|false|none|none|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|State|object|false|none|none|
|UserRole|object|false|none|none|
|EnabledDate|object|false|none|none|
|DisabledDate|object|false|none|none|
