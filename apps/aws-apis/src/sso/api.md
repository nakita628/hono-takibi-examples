<h1 id="aws-single-sign-on">AWS Single Sign-On v2019-06-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles assigned to them and get federated into the application.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p>This reference guide describes the IAM Identity Center Portal operations that you can call programatically and includes detailed information on data types and errors.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Base URLs:

* <a href="http://portal.sso.us-east-1.amazonaws.com">http://portal.sso.us-east-1.amazonaws.com</a> - The SSO multi-region endpoint

* <a href="https://portal.sso.us-east-1.amazonaws.com">https://portal.sso.us-east-1.amazonaws.com</a> - The SSO multi-region endpoint

* <a href="http://portal.sso.cn-north-1.amazonaws.com.cn">http://portal.sso.cn-north-1.amazonaws.com.cn</a> - The SSO endpoint for China (Beijing) and China (Ningxia)

* <a href="https://portal.sso.cn-north-1.amazonaws.com.cn">https://portal.sso.cn-north-1.amazonaws.com.cn</a> - The SSO endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sso/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-single-sign-on-default">Default</h1>

## GetRoleCredentials

<a id="opIdGetRoleCredentials"></a>

> Code samples

```bash
curl 'https://sso.us-east-1.amazonaws.com/federation/credentials#role_name&account_id&x-amz-sso_bearer_token?role_name=string&account_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-sso_bearer_token: password'
```

`GET /federation/credentials#role_name&account_id&x-amz-sso_bearer_token`

Returns the STS short-term credentials for a given role name that is assigned to the user.

<h3 id="getrolecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_name|query|string|true|The friendly name of the role that is assigned to the user.|
|account_id|query|string|true|The identifier for the AWS account that is assigned to the user.|
|x-amz-sso_bearer_token|header|string(password)|true|The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.|
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
  "roleCredentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {},
    "expiration": {}
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

<h3 id="getrolecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRoleCredentialsResponse](#schemagetrolecredentialsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountRoles

<a id="opIdListAccountRoles"></a>

> Code samples

```bash
curl 'https://sso.us-east-1.amazonaws.com/assignment/roles#x-amz-sso_bearer_token&account_id?account_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-sso_bearer_token: password'
```

`GET /assignment/roles#x-amz-sso_bearer_token&account_id`

Lists all roles that are assigned to the user for a given AWS account.

<h3 id="listaccountroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next_token|query|string|false|The page token from the previous response output when you request subsequent pages.|
|max_result|query|integer|false|The number of items that clients can request per page.|
|x-amz-sso_bearer_token|header|string(password)|true|The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.|
|account_id|query|string|true|The identifier for the AWS account that is assigned to the user.|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
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
  "nextToken": {},
  "roleList": {}
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

<h3 id="listaccountroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountRolesResponse](#schemalistaccountrolesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccounts

<a id="opIdListAccounts"></a>

> Code samples

```bash
curl 'https://sso.us-east-1.amazonaws.com/assignment/accounts#x-amz-sso_bearer_token' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-sso_bearer_token: password'
```

`GET /assignment/accounts#x-amz-sso_bearer_token`

Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>IAM Identity Center User Guide</i>. This operation returns a paginated response.

<h3 id="listaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next_token|query|string|false|(Optional) When requesting subsequent pages, this is the page token from the previous response output.|
|max_result|query|integer|false|This is the number of items clients can request per page.|
|x-amz-sso_bearer_token|header|string(password)|true|The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
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
  "nextToken": {},
  "accountList": {}
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

<h3 id="listaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountsResponse](#schemalistaccountsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Logout

<a id="opIdLogout"></a>

> Code samples

```bash
curl 'https://sso.us-east-1.amazonaws.com/logout#x-amz-sso_bearer_token' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-sso_bearer_token: password'
```

`POST /logout#x-amz-sso_bearer_token`

<p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in session.</p> <note> <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set. More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user, and the corresponding temporary AWS credentials are returned to the client.</p> <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center permission sets continue based on the duration configured in the permission set. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User authentications</a> in the <i>IAM Identity Center User Guide</i>.</p> </note>

<h3 id="logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-sso_bearer_token|header|string(password)|true|The token issued by the <code>CreateToken</code> API call. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>IAM Identity Center OIDC API Reference Guide</i>.|
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

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetRoleCredentialsResponse">GetRoleCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrolecredentialsresponse"></a>
<a id="schema_GetRoleCredentialsResponse"></a>
<a id="tocSgetrolecredentialsresponse"></a>
<a id="tocsgetrolecredentialsresponse"></a>

```json
{
  "roleCredentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {},
    "expiration": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleCredentials|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_ListAccountRolesResponse">ListAccountRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountrolesresponse"></a>
<a id="schema_ListAccountRolesResponse"></a>
<a id="tocSlistaccountrolesresponse"></a>
<a id="tocslistaccountrolesresponse"></a>

```json
{
  "nextToken": {},
  "roleList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|roleList|object|false|none|none|

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "nextToken": {},
  "accountList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|accountList|object|false|none|none|

<h2 id="tocS_AccessKeyType">AccessKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeytype"></a>
<a id="schema_AccessKeyType"></a>
<a id="tocSaccesskeytype"></a>
<a id="tocsaccesskeytype"></a>

```json
"string"
```

<h2 id="tocS_AccessTokenType">AccessTokenType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokentype"></a>
<a id="schema_AccessTokenType"></a>
<a id="tocSaccesstokentype"></a>
<a id="tocsaccesstokentype"></a>

```json
"password"
```

<h2 id="tocS_AccountIdType">AccountIdType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidtype"></a>
<a id="schema_AccountIdType"></a>
<a id="tocSaccountidtype"></a>
<a id="tocsaccountidtype"></a>

```json
"string"
```

<h2 id="tocS_AccountNameType">AccountNameType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnametype"></a>
<a id="schema_AccountNameType"></a>
<a id="tocSaccountnametype"></a>
<a id="tocsaccountnametype"></a>

```json
"string"
```

<h2 id="tocS_EmailAddressType">EmailAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddresstype"></a>
<a id="schema_EmailAddressType"></a>
<a id="tocSemailaddresstype"></a>
<a id="tocsemailaddresstype"></a>

```json
"string"
```

<h2 id="tocS_AccountInfo">AccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinfo"></a>
<a id="schema_AccountInfo"></a>
<a id="tocSaccountinfo"></a>
<a id="tocsaccountinfo"></a>

```json
{
  "accountId": {},
  "accountName": {},
  "emailAddress": {}
}
```

Provides information about your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|accountName|object|false|none|none|
|emailAddress|object|false|none|none|

<h2 id="tocS_AccountListType">AccountListType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlisttype"></a>
<a id="schema_AccountListType"></a>
<a id="tocSaccountlisttype"></a>
<a id="tocsaccountlisttype"></a>

```json
[
  {
    "accountId": {},
    "accountName": {},
    "emailAddress": {}
  }
]
```

<h2 id="tocS_ExpirationTimestampType">ExpirationTimestampType</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationtimestamptype"></a>
<a id="schema_ExpirationTimestampType"></a>
<a id="tocSexpirationtimestamptype"></a>
<a id="tocsexpirationtimestamptype"></a>

```json
0
```

<h2 id="tocS_RoleNameType">RoleNameType</h2>
<!-- backwards compatibility -->
<a id="schemarolenametype"></a>
<a id="schema_RoleNameType"></a>
<a id="tocSrolenametype"></a>
<a id="tocsrolenametype"></a>

```json
"string"
```

<h2 id="tocS_GetRoleCredentialsRequest">GetRoleCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrolecredentialsrequest"></a>
<a id="schema_GetRoleCredentialsRequest"></a>
<a id="tocSgetrolecredentialsrequest"></a>
<a id="tocsgetrolecredentialsrequest"></a>

```json
{}
```

<h2 id="tocS_RoleCredentials">RoleCredentials</h2>
<!-- backwards compatibility -->
<a id="schemarolecredentials"></a>
<a id="schema_RoleCredentials"></a>
<a id="tocSrolecredentials"></a>
<a id="tocsrolecredentials"></a>

```json
{
  "accessKeyId": {},
  "secretAccessKey": {},
  "sessionToken": {},
  "expiration": {}
}
```

Provides information about the role credentials that are assigned to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|secretAccessKey|object|false|none|none|
|sessionToken|object|false|none|none|
|expiration|object|false|none|none|

<h2 id="tocS_NextTokenType">NextTokenType</h2>
<!-- backwards compatibility -->
<a id="schemanexttokentype"></a>
<a id="schema_NextTokenType"></a>
<a id="tocSnexttokentype"></a>
<a id="tocsnexttokentype"></a>

```json
"string"
```

<h2 id="tocS_MaxResultType">MaxResultType</h2>
<!-- backwards compatibility -->
<a id="schemamaxresulttype"></a>
<a id="schema_MaxResultType"></a>
<a id="tocSmaxresulttype"></a>
<a id="tocsmaxresulttype"></a>

```json
1
```

<h2 id="tocS_ListAccountRolesRequest">ListAccountRolesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountrolesrequest"></a>
<a id="schema_ListAccountRolesRequest"></a>
<a id="tocSlistaccountrolesrequest"></a>
<a id="tocslistaccountrolesrequest"></a>

```json
{}
```

<h2 id="tocS_RoleListType">RoleListType</h2>
<!-- backwards compatibility -->
<a id="schemarolelisttype"></a>
<a id="schema_RoleListType"></a>
<a id="tocSrolelisttype"></a>
<a id="tocsrolelisttype"></a>

```json
[
  {
    "roleName": {},
    "accountId": {}
  }
]
```

<h2 id="tocS_ListAccountsRequest">ListAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsrequest"></a>
<a id="schema_ListAccountsRequest"></a>
<a id="tocSlistaccountsrequest"></a>
<a id="tocslistaccountsrequest"></a>

```json
{}
```

<h2 id="tocS_LogoutRequest">LogoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemalogoutrequest"></a>
<a id="schema_LogoutRequest"></a>
<a id="tocSlogoutrequest"></a>
<a id="tocslogoutrequest"></a>

```json
{}
```

<h2 id="tocS_SecretAccessKeyType">SecretAccessKeyType</h2>
<!-- backwards compatibility -->
<a id="schemasecretaccesskeytype"></a>
<a id="schema_SecretAccessKeyType"></a>
<a id="tocSsecretaccesskeytype"></a>
<a id="tocssecretaccesskeytype"></a>

```json
"password"
```

<h2 id="tocS_SessionTokenType">SessionTokenType</h2>
<!-- backwards compatibility -->
<a id="schemasessiontokentype"></a>
<a id="schema_SessionTokenType"></a>
<a id="tocSsessiontokentype"></a>
<a id="tocssessiontokentype"></a>

```json
"password"
```

<h2 id="tocS_RoleInfo">RoleInfo</h2>
<!-- backwards compatibility -->
<a id="schemaroleinfo"></a>
<a id="schema_RoleInfo"></a>
<a id="tocSroleinfo"></a>
<a id="tocsroleinfo"></a>

```json
{
  "roleName": {},
  "accountId": {}
}
```

Provides information about the role that is assigned to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleName|object|false|none|none|
|accountId|object|false|none|none|
