<h1 id="amazon-cognito-identity">Amazon Cognito Identity v2014-06-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

Base URLs:

* <a href="http://cognito-identity.us-east-1.amazonaws.com">http://cognito-identity.us-east-1.amazonaws.com</a> - The Amazon Cognito Identity multi-region endpoint

* <a href="https://cognito-identity.us-east-1.amazonaws.com">https://cognito-identity.us-east-1.amazonaws.com</a> - The Amazon Cognito Identity multi-region endpoint

* <a href="http://cognito-identity.cn-north-1.amazonaws.com.cn">http://cognito-identity.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Identity endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cognito-identity.cn-north-1.amazonaws.com.cn">https://cognito-identity.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Identity endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cognito-identity/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cognito-identity-default">Default</h1>

## CreateIdentityPool

<a id="opIdCreateIdentityPool"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.CreateIdentityPool' \
  -d '{
    "IdentityPoolName": {},
    "AllowUnauthenticatedIdentities": {},
    "AllowClassicFlow": {},
    "SupportedLoginProviders": {
      "property1": "string",
      "property2": "string"
    },
    "DeveloperProviderName": {},
    "OpenIdConnectProviderARNs": {},
    "CognitoIdentityProviders": {},
    "SamlProviderARNs": {},
    "IdentityPoolTags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool`

<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createidentitypool-parameters">Parameters</h3>

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
|body|body|[CreateIdentityPoolInput](#schemacreateidentitypoolinput)|true|none|
|» IdentityPoolName|body|object|true|none|
|» AllowUnauthenticatedIdentities|body|object|true|none|
|» AllowClassicFlow|body|object|false|none|
|» SupportedLoginProviders|body|object|false|none|
|» » **additionalProperties**|body|[IdentityProviderId](#schemaidentityproviderid)|false|none|
|» DeveloperProviderName|body|object|false|none|
|» OpenIdConnectProviderARNs|body|object|false|none|
|» CognitoIdentityProviders|body|object|false|none|
|» SamlProviderARNs|body|object|false|none|
|» IdentityPoolTags|body|object|false|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.CreateIdentityPool|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
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

<h3 id="createidentitypool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IdentityPool](#schemaidentitypool)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIdentities

<a id="opIdDeleteIdentities"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.DeleteIdentities' \
  -d '{
    "IdentityIdsToDelete": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities`

<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityIdsToDelete": {}
}
```

<h3 id="deleteidentities-parameters">Parameters</h3>

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
|body|body|[DeleteIdentitiesInput](#schemadeleteidentitiesinput)|true|none|
|» IdentityIdsToDelete|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.DeleteIdentities|

> Example responses

> 200 Response

```json
{
  "UnprocessedIdentityIds": {}
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

<h3 id="deleteidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIdentitiesResponse](#schemadeleteidentitiesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIdentityPool

<a id="opIdDeleteIdentityPool"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.DeleteIdentityPool' \
  -d '{
    "IdentityPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool`

<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {}
}
```

<h3 id="deleteidentitypool-parameters">Parameters</h3>

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
|body|body|[DeleteIdentityPoolInput](#schemadeleteidentitypoolinput)|true|none|
|» IdentityPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.DeleteIdentityPool|

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

<h3 id="deleteidentitypool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentity

<a id="opIdDescribeIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.DescribeIdentity' \
  -d '{
    "IdentityId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity`

<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityId": {}
}
```

<h3 id="describeidentity-parameters">Parameters</h3>

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
|body|body|[DescribeIdentityInput](#schemadescribeidentityinput)|true|none|
|» IdentityId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.DescribeIdentity|

> Example responses

> 200 Response

```json
{
  "IdentityId": {},
  "Logins": {},
  "CreationDate": {},
  "LastModifiedDate": {}
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

<h3 id="describeidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IdentityDescription](#schemaidentitydescription)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityPool

<a id="opIdDescribeIdentityPool"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.DescribeIdentityPool' \
  -d '{
    "IdentityPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool`

<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {}
}
```

<h3 id="describeidentitypool-parameters">Parameters</h3>

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
|body|body|[DescribeIdentityPoolInput](#schemadescribeidentitypoolinput)|true|none|
|» IdentityPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.DescribeIdentityPool|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
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

<h3 id="describeidentitypool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IdentityPool](#schemaidentitypool)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCredentialsForIdentity

<a id="opIdGetCredentialsForIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetCredentialsForIdentity' \
  -d '{
    "IdentityId": {},
    "Logins": {
      "property1": "string",
      "property2": "string"
    },
    "CustomRoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity`

<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "CustomRoleArn": {}
}
```

<h3 id="getcredentialsforidentity-parameters">Parameters</h3>

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
|body|body|[GetCredentialsForIdentityInput](#schemagetcredentialsforidentityinput)|true|none|
|» IdentityId|body|object|true|none|
|» Logins|body|object|false|none|
|» » **additionalProperties**|body|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|
|» CustomRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetCredentialsForIdentity|

> Example responses

> 200 Response

```json
{
  "IdentityId": {},
  "Credentials": {
    "AccessKeyId": {},
    "SecretKey": {},
    "SessionToken": {},
    "Expiration": {}
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

> 487 Response

```json
null
```

<h3 id="getcredentialsforidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCredentialsForIdentityResponse](#schemagetcredentialsforidentityresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InvalidIdentityPoolConfigurationException|[InvalidIdentityPoolConfigurationException](#schemainvalididentitypoolconfigurationexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|487|487|ExternalServiceException|[ExternalServiceException](#schemaexternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetId

<a id="opIdGetId"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetId' \
  -d '{
    "AccountId": {},
    "IdentityPoolId": {},
    "Logins": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetId`

<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

> Body parameter

```json
{
  "AccountId": {},
  "IdentityPoolId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getid-parameters">Parameters</h3>

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
|body|body|[GetIdInput](#schemagetidinput)|true|none|
|» AccountId|body|object|false|none|
|» IdentityPoolId|body|object|true|none|
|» Logins|body|object|false|none|
|» » **additionalProperties**|body|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetId|

> Example responses

> 200 Response

```json
{
  "IdentityId": {}
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

<h3 id="getid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdResponse](#schemagetidresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|ExternalServiceException|[ExternalServiceException](#schemaexternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIdentityPoolRoles

<a id="opIdGetIdentityPoolRoles"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetIdentityPoolRoles' \
  -d '{
    "IdentityPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles`

<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {}
}
```

<h3 id="getidentitypoolroles-parameters">Parameters</h3>

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
|body|body|[GetIdentityPoolRolesInput](#schemagetidentitypoolrolesinput)|true|none|
|» IdentityPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetIdentityPoolRoles|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "Roles": {
    "property1": "stringstringstringst",
    "property2": "stringstringstringst"
  },
  "RoleMappings": {
    "property1": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    },
    "property2": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
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

<h3 id="getidentitypoolroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityPoolRolesResponse](#schemagetidentitypoolrolesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOpenIdToken

<a id="opIdGetOpenIdToken"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetOpenIdToken' \
  -d '{
    "IdentityId": {},
    "Logins": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken`

<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getopenidtoken-parameters">Parameters</h3>

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
|body|body|[GetOpenIdTokenInput](#schemagetopenidtokeninput)|true|none|
|» IdentityId|body|object|true|none|
|» Logins|body|object|false|none|
|» » **additionalProperties**|body|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetOpenIdToken|

> Example responses

> 200 Response

```json
{
  "IdentityId": {},
  "Token": {}
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

<h3 id="getopenidtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOpenIdTokenResponse](#schemagetopenidtokenresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|ExternalServiceException|[ExternalServiceException](#schemaexternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOpenIdTokenForDeveloperIdentity

<a id="opIdGetOpenIdTokenForDeveloperIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity' \
  -d '{
    "IdentityPoolId": {},
    "IdentityId": {},
    "Logins": {
      "property1": "string",
      "property2": "string"
    },
    "PrincipalTags": {
      "property1": "string",
      "property2": "string"
    },
    "TokenDuration": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity`

<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {},
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  },
  "TokenDuration": {}
}
```

<h3 id="getopenidtokenfordeveloperidentity-parameters">Parameters</h3>

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
|body|body|[GetOpenIdTokenForDeveloperIdentityInput](#schemagetopenidtokenfordeveloperidentityinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» Logins|body|object|true|none|
|» » **additionalProperties**|body|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|
|» PrincipalTags|body|object|false|none|
|» » **additionalProperties**|body|[PrincipalTagValue](#schemaprincipaltagvalue)|false|none|
|» TokenDuration|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity|

> Example responses

> 200 Response

```json
{
  "IdentityId": {},
  "Token": {}
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

<h3 id="getopenidtokenfordeveloperidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOpenIdTokenForDeveloperIdentityResponse](#schemagetopenidtokenfordeveloperidentityresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|DeveloperUserAlreadyRegisteredException|[DeveloperUserAlreadyRegisteredException](#schemadeveloperuseralreadyregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPrincipalTagAttributeMap

<a id="opIdGetPrincipalTagAttributeMap"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.GetPrincipalTagAttributeMap' \
  -d '{
    "IdentityPoolId": {},
    "IdentityProviderName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap`

Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.

> Body parameter

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {}
}
```

<h3 id="getprincipaltagattributemap-parameters">Parameters</h3>

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
|body|body|[GetPrincipalTagAttributeMapInput](#schemagetprincipaltagattributemapinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» IdentityProviderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.GetPrincipalTagAttributeMap|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
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

<h3 id="getprincipaltagattributemap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPrincipalTagAttributeMapResponse](#schemagetprincipaltagattributemapresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentities

<a id="opIdListIdentities"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.ListIdentities' \
  -d '{
    "IdentityPoolId": {},
    "MaxResults": {},
    "NextToken": {},
    "HideDisabled": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.ListIdentities`

<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {},
  "MaxResults": {},
  "NextToken": {},
  "HideDisabled": {}
}
```

<h3 id="listidentities-parameters">Parameters</h3>

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
|body|body|[ListIdentitiesInput](#schemalistidentitiesinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» MaxResults|body|object|true|none|
|» NextToken|body|object|false|none|
|» HideDisabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.ListIdentities|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "Identities": {},
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

<h3 id="listidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentitiesResponse](#schemalistidentitiesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentityPools

<a id="opIdListIdentityPools"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.ListIdentityPools' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools`

<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listidentitypools-parameters">Parameters</h3>

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
|body|body|[ListIdentityPoolsInput](#schemalistidentitypoolsinput)|true|none|
|» MaxResults|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.ListIdentityPools|

> Example responses

> 200 Response

```json
{
  "IdentityPools": {},
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

<h3 id="listidentitypools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityPoolsResponse](#schemalistidentitypoolsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource`

<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

> Body parameter

```json
{
  "ResourceArn": {}
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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LookupDeveloperIdentity

<a id="opIdLookupDeveloperIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.LookupDeveloperIdentity' \
  -d '{
    "IdentityPoolId": {},
    "IdentityId": {},
    "DeveloperUserIdentifier": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity`

<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {},
  "IdentityId": {},
  "DeveloperUserIdentifier": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="lookupdeveloperidentity-parameters">Parameters</h3>

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
|body|body|[LookupDeveloperIdentityInput](#schemalookupdeveloperidentityinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» IdentityId|body|object|false|none|
|» DeveloperUserIdentifier|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.LookupDeveloperIdentity|

> Example responses

> 200 Response

```json
{
  "IdentityId": {},
  "DeveloperUserIdentifierList": {},
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

> 485 Response

```json
null
```

<h3 id="lookupdeveloperidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LookupDeveloperIdentityResponse](#schemalookupdeveloperidentityresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeDeveloperIdentities

<a id="opIdMergeDeveloperIdentities"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.MergeDeveloperIdentities' \
  -d '{
    "SourceUserIdentifier": {},
    "DestinationUserIdentifier": {},
    "DeveloperProviderName": {},
    "IdentityPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities`

<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "SourceUserIdentifier": {},
  "DestinationUserIdentifier": {},
  "DeveloperProviderName": {},
  "IdentityPoolId": {}
}
```

<h3 id="mergedeveloperidentities-parameters">Parameters</h3>

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
|body|body|[MergeDeveloperIdentitiesInput](#schemamergedeveloperidentitiesinput)|true|none|
|» SourceUserIdentifier|body|object|true|none|
|» DestinationUserIdentifier|body|object|true|none|
|» DeveloperProviderName|body|object|true|none|
|» IdentityPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.MergeDeveloperIdentities|

> Example responses

> 200 Response

```json
{
  "IdentityId": {}
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

<h3 id="mergedeveloperidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergeDeveloperIdentitiesResponse](#schemamergedeveloperidentitiesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetIdentityPoolRoles

<a id="opIdSetIdentityPoolRoles"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.SetIdentityPoolRoles' \
  -d '{
    "IdentityPoolId": {},
    "Roles": {
      "property1": "stringstringstringst",
      "property2": "stringstringstringst"
    },
    "RoleMappings": {
      "property1": {
        "Type": {},
        "AmbiguousRoleResolution": {},
        "RulesConfiguration": {
          "Rules": {}
        }
      },
      "property2": {
        "Type": {},
        "AmbiguousRoleResolution": {},
        "RulesConfiguration": {
          "Rules": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles`

<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {},
  "Roles": {
    "property1": "stringstringstringst",
    "property2": "stringstringstringst"
  },
  "RoleMappings": {
    "property1": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    },
    "property2": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    }
  }
}
```

<h3 id="setidentitypoolroles-parameters">Parameters</h3>

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
|body|body|[SetIdentityPoolRolesInput](#schemasetidentitypoolrolesinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» Roles|body|object|true|none|
|» » **additionalProperties**|body|[ARNString](#schemaarnstring)|false|none|
|» RoleMappings|body|object|false|none|
|» » **additionalProperties**|body|[RoleMapping](#schemarolemapping)|false|A role mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.SetIdentityPoolRoles|

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

<h3 id="setidentitypoolroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetPrincipalTagAttributeMap

<a id="opIdSetPrincipalTagAttributeMap"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.SetPrincipalTagAttributeMap' \
  -d '{
    "IdentityPoolId": {},
    "IdentityProviderName": {},
    "UseDefaults": {},
    "PrincipalTags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap`

You can use this operation to use default (username and clientID) attribute or custom attribute mappings.

> Body parameter

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="setprincipaltagattributemap-parameters">Parameters</h3>

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
|body|body|[SetPrincipalTagAttributeMapInput](#schemasetprincipaltagattributemapinput)|true|none|
|» IdentityPoolId|body|object|true|none|
|» IdentityProviderName|body|object|true|none|
|» UseDefaults|body|object|false|none|
|» PrincipalTags|body|object|false|none|
|» » **additionalProperties**|body|[PrincipalTagValue](#schemaprincipaltagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.SetPrincipalTagAttributeMap|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
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

<h3 id="setprincipaltagattributemap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetPrincipalTagAttributeMapResponse](#schemasetprincipaltagattributemapresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.TagResource`

<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnlinkDeveloperIdentity

<a id="opIdUnlinkDeveloperIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.UnlinkDeveloperIdentity' \
  -d '{
    "IdentityId": {},
    "IdentityPoolId": {},
    "DeveloperProviderName": {},
    "DeveloperUserIdentifier": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity`

<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityId": {},
  "IdentityPoolId": {},
  "DeveloperProviderName": {},
  "DeveloperUserIdentifier": {}
}
```

<h3 id="unlinkdeveloperidentity-parameters">Parameters</h3>

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
|body|body|[UnlinkDeveloperIdentityInput](#schemaunlinkdeveloperidentityinput)|true|none|
|» IdentityId|body|object|true|none|
|» IdentityPoolId|body|object|true|none|
|» DeveloperProviderName|body|object|true|none|
|» DeveloperUserIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.UnlinkDeveloperIdentity|

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

<h3 id="unlinkdeveloperidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnlinkIdentity

<a id="opIdUnlinkIdentity"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.UnlinkIdentity' \
  -d '{
    "IdentityId": {},
    "Logins": {
      "property1": "string",
      "property2": "string"
    },
    "LoginsToRemove": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity`

<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "LoginsToRemove": {}
}
```

<h3 id="unlinkidentity-parameters">Parameters</h3>

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
|body|body|[UnlinkIdentityInput](#schemaunlinkidentityinput)|true|none|
|» IdentityId|body|object|true|none|
|» Logins|body|object|true|none|
|» » **additionalProperties**|body|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|
|» LoginsToRemove|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.UnlinkIdentity|

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

<h3 id="unlinkidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|ExternalServiceException|[ExternalServiceException](#schemaexternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.UntagResource`

Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account

> Body parameter

```json
{
  "ResourceArn": {},
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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIdentityPool

<a id="opIdUpdateIdentityPool"></a>

> Code samples

```bash
curl 'https://cognito-identity.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityService.UpdateIdentityPool' \
  -d '{
    "IdentityPoolId": {},
    "IdentityPoolName": {},
    "AllowUnauthenticatedIdentities": {},
    "AllowClassicFlow": {},
    "SupportedLoginProviders": {
      "property1": "string",
      "property2": "string"
    },
    "DeveloperProviderName": {},
    "OpenIdConnectProviderARNs": {},
    "CognitoIdentityProviders": {},
    "SamlProviderARNs": {},
    "IdentityPoolTags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool`

<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

> Body parameter

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateidentitypool-parameters">Parameters</h3>

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
|body|body|[IdentityPool](#schemaidentitypool)|true|none|
|» IdentityPoolId|body|object|true|none|
|» IdentityPoolName|body|object|true|none|
|» AllowUnauthenticatedIdentities|body|object|true|none|
|» AllowClassicFlow|body|object|false|none|
|» SupportedLoginProviders|body|object|false|none|
|» » **additionalProperties**|body|[IdentityProviderId](#schemaidentityproviderid)|false|none|
|» DeveloperProviderName|body|object|false|none|
|» OpenIdConnectProviderARNs|body|object|false|none|
|» CognitoIdentityProviders|body|object|false|none|
|» SamlProviderARNs|body|object|false|none|
|» IdentityPoolTags|body|object|false|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityService.UpdateIdentityPool|

> Example responses

> 200 Response

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
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

> 487 Response

```json
null
```

<h3 id="updateidentitypool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IdentityPool](#schemaidentitypool)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_IdentityPool">IdentityPool</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypool"></a>
<a id="schema_IdentityPool"></a>
<a id="tocSidentitypool"></a>
<a id="tocsidentitypool"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing an Amazon Cognito identity pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|IdentityPoolName|object|true|none|none|
|AllowUnauthenticatedIdentities|object|true|none|none|
|AllowClassicFlow|object|false|none|none|
|SupportedLoginProviders|object|false|none|none|
|DeveloperProviderName|object|false|none|none|
|OpenIdConnectProviderARNs|object|false|none|none|
|CognitoIdentityProviders|object|false|none|none|
|SamlProviderARNs|object|false|none|none|
|IdentityPoolTags|object|false|none|none|

<h2 id="tocS_CreateIdentityPoolInput">CreateIdentityPoolInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateidentitypoolinput"></a>
<a id="schema_CreateIdentityPoolInput"></a>
<a id="tocScreateidentitypoolinput"></a>
<a id="tocscreateidentitypoolinput"></a>

```json
{
  "IdentityPoolName": {},
  "AllowUnauthenticatedIdentities": {},
  "AllowClassicFlow": {},
  "SupportedLoginProviders": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperProviderName": {},
  "OpenIdConnectProviderARNs": {},
  "CognitoIdentityProviders": {},
  "SamlProviderARNs": {},
  "IdentityPoolTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input to the CreateIdentityPool action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolName|object|true|none|none|
|AllowUnauthenticatedIdentities|object|true|none|none|
|AllowClassicFlow|object|false|none|none|
|SupportedLoginProviders|object|false|none|none|
|DeveloperProviderName|object|false|none|none|
|OpenIdConnectProviderARNs|object|false|none|none|
|CognitoIdentityProviders|object|false|none|none|
|SamlProviderARNs|object|false|none|none|
|IdentityPoolTags|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

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

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

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

<h2 id="tocS_DeleteIdentitiesResponse">DeleteIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentitiesresponse"></a>
<a id="schema_DeleteIdentitiesResponse"></a>
<a id="tocSdeleteidentitiesresponse"></a>
<a id="tocsdeleteidentitiesresponse"></a>

```json
{
  "UnprocessedIdentityIds": {}
}
```

Returned in response to a successful <code>DeleteIdentities</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnprocessedIdentityIds|object|false|none|none|

<h2 id="tocS_DeleteIdentitiesInput">DeleteIdentitiesInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentitiesinput"></a>
<a id="schema_DeleteIdentitiesInput"></a>
<a id="tocSdeleteidentitiesinput"></a>
<a id="tocsdeleteidentitiesinput"></a>

```json
{
  "IdentityIdsToDelete": {}
}
```

Input to the <code>DeleteIdentities</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityIdsToDelete|object|true|none|none|

<h2 id="tocS_DeleteIdentityPoolInput">DeleteIdentityPoolInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentitypoolinput"></a>
<a id="schema_DeleteIdentityPoolInput"></a>
<a id="tocSdeleteidentitypoolinput"></a>
<a id="tocsdeleteidentitypoolinput"></a>

```json
{
  "IdentityPoolId": {}
}
```

Input to the DeleteIdentityPool action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_IdentityDescription">IdentityDescription</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydescription"></a>
<a id="schema_IdentityDescription"></a>
<a id="tocSidentitydescription"></a>
<a id="tocsidentitydescription"></a>

```json
{
  "IdentityId": {},
  "Logins": {},
  "CreationDate": {},
  "LastModifiedDate": {}
}
```

A description of the identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|Logins|object|false|none|none|
|CreationDate|object|false|none|none|
|LastModifiedDate|object|false|none|none|

<h2 id="tocS_DescribeIdentityInput">DescribeIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityinput"></a>
<a id="schema_DescribeIdentityInput"></a>
<a id="tocSdescribeidentityinput"></a>
<a id="tocsdescribeidentityinput"></a>

```json
{
  "IdentityId": {}
}
```

Input to the <code>DescribeIdentity</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|true|none|none|

<h2 id="tocS_DescribeIdentityPoolInput">DescribeIdentityPoolInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentitypoolinput"></a>
<a id="schema_DescribeIdentityPoolInput"></a>
<a id="tocSdescribeidentitypoolinput"></a>
<a id="tocsdescribeidentitypoolinput"></a>

```json
{
  "IdentityPoolId": {}
}
```

Input to the DescribeIdentityPool action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|

<h2 id="tocS_GetCredentialsForIdentityResponse">GetCredentialsForIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcredentialsforidentityresponse"></a>
<a id="schema_GetCredentialsForIdentityResponse"></a>
<a id="tocSgetcredentialsforidentityresponse"></a>
<a id="tocsgetcredentialsforidentityresponse"></a>

```json
{
  "IdentityId": {},
  "Credentials": {
    "AccessKeyId": {},
    "SecretKey": {},
    "SessionToken": {},
    "Expiration": {}
  }
}
```

Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|Credentials|object|false|none|none|

<h2 id="tocS_GetCredentialsForIdentityInput">GetCredentialsForIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcredentialsforidentityinput"></a>
<a id="schema_GetCredentialsForIdentityInput"></a>
<a id="tocSgetcredentialsforidentityinput"></a>
<a id="tocsgetcredentialsforidentityinput"></a>

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "CustomRoleArn": {}
}
```

Input to the <code>GetCredentialsForIdentity</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|true|none|none|
|Logins|object|false|none|none|
|CustomRoleArn|object|false|none|none|

<h2 id="tocS_InvalidIdentityPoolConfigurationException">InvalidIdentityPoolConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalididentitypoolconfigurationexception"></a>
<a id="schema_InvalidIdentityPoolConfigurationException"></a>
<a id="tocSinvalididentitypoolconfigurationexception"></a>
<a id="tocsinvalididentitypoolconfigurationexception"></a>

```json
null
```

<h2 id="tocS_ExternalServiceException">ExternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaexternalserviceexception"></a>
<a id="schema_ExternalServiceException"></a>
<a id="tocSexternalserviceexception"></a>
<a id="tocsexternalserviceexception"></a>

```json
null
```

<h2 id="tocS_GetIdResponse">GetIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidresponse"></a>
<a id="schema_GetIdResponse"></a>
<a id="tocSgetidresponse"></a>
<a id="tocsgetidresponse"></a>

```json
{
  "IdentityId": {}
}
```

Returned in response to a GetId request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|

<h2 id="tocS_GetIdInput">GetIdInput</h2>
<!-- backwards compatibility -->
<a id="schemagetidinput"></a>
<a id="schema_GetIdInput"></a>
<a id="tocSgetidinput"></a>
<a id="tocsgetidinput"></a>

```json
{
  "AccountId": {},
  "IdentityPoolId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input to the GetId action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|IdentityPoolId|object|true|none|none|
|Logins|object|false|none|none|

<h2 id="tocS_GetIdentityPoolRolesResponse">GetIdentityPoolRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoolrolesresponse"></a>
<a id="schema_GetIdentityPoolRolesResponse"></a>
<a id="tocSgetidentitypoolrolesresponse"></a>
<a id="tocsgetidentitypoolrolesresponse"></a>

```json
{
  "IdentityPoolId": {},
  "Roles": {
    "property1": "stringstringstringst",
    "property2": "stringstringstringst"
  },
  "RoleMappings": {
    "property1": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    },
    "property2": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    }
  }
}
```

Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|Roles|object|false|none|none|
|RoleMappings|object|false|none|none|

<h2 id="tocS_GetIdentityPoolRolesInput">GetIdentityPoolRolesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoolrolesinput"></a>
<a id="schema_GetIdentityPoolRolesInput"></a>
<a id="tocSgetidentitypoolrolesinput"></a>
<a id="tocsgetidentitypoolrolesinput"></a>

```json
{
  "IdentityPoolId": {}
}
```

Input to the <code>GetIdentityPoolRoles</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|

<h2 id="tocS_GetOpenIdTokenResponse">GetOpenIdTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetopenidtokenresponse"></a>
<a id="schema_GetOpenIdTokenResponse"></a>
<a id="tocSgetopenidtokenresponse"></a>
<a id="tocsgetopenidtokenresponse"></a>

```json
{
  "IdentityId": {},
  "Token": {}
}
```

Returned in response to a successful GetOpenIdToken request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|Token|object|false|none|none|

<h2 id="tocS_GetOpenIdTokenInput">GetOpenIdTokenInput</h2>
<!-- backwards compatibility -->
<a id="schemagetopenidtokeninput"></a>
<a id="schema_GetOpenIdTokenInput"></a>
<a id="tocSgetopenidtokeninput"></a>
<a id="tocsgetopenidtokeninput"></a>

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input to the GetOpenIdToken action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|true|none|none|
|Logins|object|false|none|none|

<h2 id="tocS_GetOpenIdTokenForDeveloperIdentityResponse">GetOpenIdTokenForDeveloperIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetopenidtokenfordeveloperidentityresponse"></a>
<a id="schema_GetOpenIdTokenForDeveloperIdentityResponse"></a>
<a id="tocSgetopenidtokenfordeveloperidentityresponse"></a>
<a id="tocsgetopenidtokenfordeveloperidentityresponse"></a>

```json
{
  "IdentityId": {},
  "Token": {}
}
```

Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|Token|object|false|none|none|

<h2 id="tocS_GetOpenIdTokenForDeveloperIdentityInput">GetOpenIdTokenForDeveloperIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemagetopenidtokenfordeveloperidentityinput"></a>
<a id="schema_GetOpenIdTokenForDeveloperIdentityInput"></a>
<a id="tocSgetopenidtokenfordeveloperidentityinput"></a>
<a id="tocsgetopenidtokenfordeveloperidentityinput"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  },
  "TokenDuration": {}
}
```

Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|IdentityId|object|false|none|none|
|Logins|object|true|none|none|
|PrincipalTags|object|false|none|none|
|TokenDuration|object|false|none|none|

<h2 id="tocS_DeveloperUserAlreadyRegisteredException">DeveloperUserAlreadyRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperuseralreadyregisteredexception"></a>
<a id="schema_DeveloperUserAlreadyRegisteredException"></a>
<a id="tocSdeveloperuseralreadyregisteredexception"></a>
<a id="tocsdeveloperuseralreadyregisteredexception"></a>

```json
null
```

<h2 id="tocS_GetPrincipalTagAttributeMapResponse">GetPrincipalTagAttributeMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprincipaltagattributemapresponse"></a>
<a id="schema_GetPrincipalTagAttributeMapResponse"></a>
<a id="tocSgetprincipaltagattributemapresponse"></a>
<a id="tocsgetprincipaltagattributemapresponse"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|IdentityProviderName|object|false|none|none|
|UseDefaults|object|false|none|none|
|PrincipalTags|object|false|none|none|

<h2 id="tocS_GetPrincipalTagAttributeMapInput">GetPrincipalTagAttributeMapInput</h2>
<!-- backwards compatibility -->
<a id="schemagetprincipaltagattributemapinput"></a>
<a id="schema_GetPrincipalTagAttributeMapInput"></a>
<a id="tocSgetprincipaltagattributemapinput"></a>
<a id="tocsgetprincipaltagattributemapinput"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|IdentityProviderName|object|true|none|none|

<h2 id="tocS_ListIdentitiesResponse">ListIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitiesresponse"></a>
<a id="schema_ListIdentitiesResponse"></a>
<a id="tocSlistidentitiesresponse"></a>
<a id="tocslistidentitiesresponse"></a>

```json
{
  "IdentityPoolId": {},
  "Identities": {},
  "NextToken": {}
}
```

The response to a ListIdentities request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|Identities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentitiesInput">ListIdentitiesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitiesinput"></a>
<a id="schema_ListIdentitiesInput"></a>
<a id="tocSlistidentitiesinput"></a>
<a id="tocslistidentitiesinput"></a>

```json
{
  "IdentityPoolId": {},
  "MaxResults": {},
  "NextToken": {},
  "HideDisabled": {}
}
```

Input to the ListIdentities action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|MaxResults|object|true|none|none|
|NextToken|object|false|none|none|
|HideDisabled|object|false|none|none|

<h2 id="tocS_ListIdentityPoolsResponse">ListIdentityPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoolsresponse"></a>
<a id="schema_ListIdentityPoolsResponse"></a>
<a id="tocSlistidentitypoolsresponse"></a>
<a id="tocslistidentitypoolsresponse"></a>

```json
{
  "IdentityPools": {},
  "NextToken": {}
}
```

The result of a successful ListIdentityPools action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPools|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityPoolsInput">ListIdentityPoolsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoolsinput"></a>
<a id="schema_ListIdentityPoolsInput"></a>
<a id="tocSlistidentitypoolsinput"></a>
<a id="tocslistidentitypoolsinput"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

Input to the ListIdentityPools action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_LookupDeveloperIdentityResponse">LookupDeveloperIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookupdeveloperidentityresponse"></a>
<a id="schema_LookupDeveloperIdentityResponse"></a>
<a id="tocSlookupdeveloperidentityresponse"></a>
<a id="tocslookupdeveloperidentityresponse"></a>

```json
{
  "IdentityId": {},
  "DeveloperUserIdentifierList": {},
  "NextToken": {}
}
```

Returned in response to a successful <code>LookupDeveloperIdentity</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|DeveloperUserIdentifierList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LookupDeveloperIdentityInput">LookupDeveloperIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemalookupdeveloperidentityinput"></a>
<a id="schema_LookupDeveloperIdentityInput"></a>
<a id="tocSlookupdeveloperidentityinput"></a>
<a id="tocslookupdeveloperidentityinput"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityId": {},
  "DeveloperUserIdentifier": {},
  "MaxResults": {},
  "NextToken": {}
}
```

Input to the <code>LookupDeveloperIdentityInput</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|IdentityId|object|false|none|none|
|DeveloperUserIdentifier|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MergeDeveloperIdentitiesResponse">MergeDeveloperIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamergedeveloperidentitiesresponse"></a>
<a id="schema_MergeDeveloperIdentitiesResponse"></a>
<a id="tocSmergedeveloperidentitiesresponse"></a>
<a id="tocsmergedeveloperidentitiesresponse"></a>

```json
{
  "IdentityId": {}
}
```

Returned in response to a successful <code>MergeDeveloperIdentities</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|

<h2 id="tocS_MergeDeveloperIdentitiesInput">MergeDeveloperIdentitiesInput</h2>
<!-- backwards compatibility -->
<a id="schemamergedeveloperidentitiesinput"></a>
<a id="schema_MergeDeveloperIdentitiesInput"></a>
<a id="tocSmergedeveloperidentitiesinput"></a>
<a id="tocsmergedeveloperidentitiesinput"></a>

```json
{
  "SourceUserIdentifier": {},
  "DestinationUserIdentifier": {},
  "DeveloperProviderName": {},
  "IdentityPoolId": {}
}
```

Input to the <code>MergeDeveloperIdentities</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceUserIdentifier|object|true|none|none|
|DestinationUserIdentifier|object|true|none|none|
|DeveloperProviderName|object|true|none|none|
|IdentityPoolId|object|true|none|none|

<h2 id="tocS_SetIdentityPoolRolesInput">SetIdentityPoolRolesInput</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitypoolrolesinput"></a>
<a id="schema_SetIdentityPoolRolesInput"></a>
<a id="tocSsetidentitypoolrolesinput"></a>
<a id="tocssetidentitypoolrolesinput"></a>

```json
{
  "IdentityPoolId": {},
  "Roles": {
    "property1": "stringstringstringst",
    "property2": "stringstringstringst"
  },
  "RoleMappings": {
    "property1": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    },
    "property2": {
      "Type": {},
      "AmbiguousRoleResolution": {},
      "RulesConfiguration": {
        "Rules": {}
      }
    }
  }
}
```

Input to the <code>SetIdentityPoolRoles</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|Roles|object|true|none|none|
|RoleMappings|object|false|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_SetPrincipalTagAttributeMapResponse">SetPrincipalTagAttributeMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetprincipaltagattributemapresponse"></a>
<a id="schema_SetPrincipalTagAttributeMapResponse"></a>
<a id="tocSsetprincipaltagattributemapresponse"></a>
<a id="tocssetprincipaltagattributemapresponse"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|IdentityProviderName|object|false|none|none|
|UseDefaults|object|false|none|none|
|PrincipalTags|object|false|none|none|

<h2 id="tocS_SetPrincipalTagAttributeMapInput">SetPrincipalTagAttributeMapInput</h2>
<!-- backwards compatibility -->
<a id="schemasetprincipaltagattributemapinput"></a>
<a id="schema_SetPrincipalTagAttributeMapInput"></a>
<a id="tocSsetprincipaltagattributemapinput"></a>
<a id="tocssetprincipaltagattributemapinput"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityProviderName": {},
  "UseDefaults": {},
  "PrincipalTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|true|none|none|
|IdentityProviderName|object|true|none|none|
|UseDefaults|object|false|none|none|
|PrincipalTags|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UnlinkDeveloperIdentityInput">UnlinkDeveloperIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemaunlinkdeveloperidentityinput"></a>
<a id="schema_UnlinkDeveloperIdentityInput"></a>
<a id="tocSunlinkdeveloperidentityinput"></a>
<a id="tocsunlinkdeveloperidentityinput"></a>

```json
{
  "IdentityId": {},
  "IdentityPoolId": {},
  "DeveloperProviderName": {},
  "DeveloperUserIdentifier": {}
}
```

Input to the <code>UnlinkDeveloperIdentity</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|true|none|none|
|IdentityPoolId|object|true|none|none|
|DeveloperProviderName|object|true|none|none|
|DeveloperUserIdentifier|object|true|none|none|

<h2 id="tocS_UnlinkIdentityInput">UnlinkIdentityInput</h2>
<!-- backwards compatibility -->
<a id="schemaunlinkidentityinput"></a>
<a id="schema_UnlinkIdentityInput"></a>
<a id="tocSunlinkidentityinput"></a>
<a id="tocsunlinkidentityinput"></a>

```json
{
  "IdentityId": {},
  "Logins": {
    "property1": "string",
    "property2": "string"
  },
  "LoginsToRemove": {}
}
```

Input to the UnlinkIdentity action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|true|none|none|
|Logins|object|true|none|none|
|LoginsToRemove|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ARNString">ARNString</h2>
<!-- backwards compatibility -->
<a id="schemaarnstring"></a>
<a id="schema_ARNString"></a>
<a id="tocSarnstring"></a>
<a id="tocsarnstring"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AccessKeyString">AccessKeyString</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeystring"></a>
<a id="schema_AccessKeyString"></a>
<a id="tocSaccesskeystring"></a>
<a id="tocsaccesskeystring"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AmbiguousRoleResolutionType">AmbiguousRoleResolutionType</h2>
<!-- backwards compatibility -->
<a id="schemaambiguousroleresolutiontype"></a>
<a id="schema_AmbiguousRoleResolutionType"></a>
<a id="tocSambiguousroleresolutiontype"></a>
<a id="tocsambiguousroleresolutiontype"></a>

```json
"AuthenticatedRole"
```

<h2 id="tocS_ClaimName">ClaimName</h2>
<!-- backwards compatibility -->
<a id="schemaclaimname"></a>
<a id="schema_ClaimName"></a>
<a id="tocSclaimname"></a>
<a id="tocsclaimname"></a>

```json
"string"
```

<h2 id="tocS_ClaimValue">ClaimValue</h2>
<!-- backwards compatibility -->
<a id="schemaclaimvalue"></a>
<a id="schema_ClaimValue"></a>
<a id="tocSclaimvalue"></a>
<a id="tocsclaimvalue"></a>

```json
"string"
```

<h2 id="tocS_ClassicFlow">ClassicFlow</h2>
<!-- backwards compatibility -->
<a id="schemaclassicflow"></a>
<a id="schema_ClassicFlow"></a>
<a id="tocSclassicflow"></a>
<a id="tocsclassicflow"></a>

```json
true
```

<h2 id="tocS_CognitoIdentityProviderName">CognitoIdentityProviderName</h2>
<!-- backwards compatibility -->
<a id="schemacognitoidentityprovidername"></a>
<a id="schema_CognitoIdentityProviderName"></a>
<a id="tocScognitoidentityprovidername"></a>
<a id="tocscognitoidentityprovidername"></a>

```json
"string"
```

<h2 id="tocS_CognitoIdentityProviderClientId">CognitoIdentityProviderClientId</h2>
<!-- backwards compatibility -->
<a id="schemacognitoidentityproviderclientid"></a>
<a id="schema_CognitoIdentityProviderClientId"></a>
<a id="tocScognitoidentityproviderclientid"></a>
<a id="tocscognitoidentityproviderclientid"></a>

```json
"string"
```

<h2 id="tocS_CognitoIdentityProviderTokenCheck">CognitoIdentityProviderTokenCheck</h2>
<!-- backwards compatibility -->
<a id="schemacognitoidentityprovidertokencheck"></a>
<a id="schema_CognitoIdentityProviderTokenCheck"></a>
<a id="tocScognitoidentityprovidertokencheck"></a>
<a id="tocscognitoidentityprovidertokencheck"></a>

```json
true
```

<h2 id="tocS_CognitoIdentityProvider">CognitoIdentityProvider</h2>
<!-- backwards compatibility -->
<a id="schemacognitoidentityprovider"></a>
<a id="schema_CognitoIdentityProvider"></a>
<a id="tocScognitoidentityprovider"></a>
<a id="tocscognitoidentityprovider"></a>

```json
{
  "ProviderName": {},
  "ClientId": {},
  "ServerSideTokenCheck": {}
}
```

A provider representing an Amazon Cognito user pool and its client ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderName|object|false|none|none|
|ClientId|object|false|none|none|
|ServerSideTokenCheck|object|false|none|none|

<h2 id="tocS_CognitoIdentityProviderList">CognitoIdentityProviderList</h2>
<!-- backwards compatibility -->
<a id="schemacognitoidentityproviderlist"></a>
<a id="schema_CognitoIdentityProviderList"></a>
<a id="tocScognitoidentityproviderlist"></a>
<a id="tocscognitoidentityproviderlist"></a>

```json
[
  {
    "ProviderName": {},
    "ClientId": {},
    "ServerSideTokenCheck": {}
  }
]
```

<h2 id="tocS_IdentityPoolName">IdentityPoolName</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolname"></a>
<a id="schema_IdentityPoolName"></a>
<a id="tocSidentitypoolname"></a>
<a id="tocsidentitypoolname"></a>

```json
"string"
```

<h2 id="tocS_IdentityPoolUnauthenticated">IdentityPoolUnauthenticated</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolunauthenticated"></a>
<a id="schema_IdentityPoolUnauthenticated"></a>
<a id="tocSidentitypoolunauthenticated"></a>
<a id="tocsidentitypoolunauthenticated"></a>

```json
true
```

<h2 id="tocS_IdentityProviders">IdentityProviders</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviders"></a>
<a id="schema_IdentityProviders"></a>
<a id="tocSidentityproviders"></a>
<a id="tocsidentityproviders"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityProviderId](#schemaidentityproviderid)|false|none|none|

<h2 id="tocS_DeveloperProviderName">DeveloperProviderName</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperprovidername"></a>
<a id="schema_DeveloperProviderName"></a>
<a id="tocSdeveloperprovidername"></a>
<a id="tocsdeveloperprovidername"></a>

```json
"string"
```

<h2 id="tocS_OIDCProviderList">OIDCProviderList</h2>
<!-- backwards compatibility -->
<a id="schemaoidcproviderlist"></a>
<a id="schema_OIDCProviderList"></a>
<a id="tocSoidcproviderlist"></a>
<a id="tocsoidcproviderlist"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_SAMLProviderList">SAMLProviderList</h2>
<!-- backwards compatibility -->
<a id="schemasamlproviderlist"></a>
<a id="schema_SAMLProviderList"></a>
<a id="tocSsamlproviderlist"></a>
<a id="tocssamlproviderlist"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_IdentityPoolTagsType">IdentityPoolTagsType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypooltagstype"></a>
<a id="schema_IdentityPoolTagsType"></a>
<a id="tocSidentitypooltagstype"></a>
<a id="tocsidentitypooltagstype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValueType](#schematagvaluetype)|false|none|none|

<h2 id="tocS_SecretKeyString">SecretKeyString</h2>
<!-- backwards compatibility -->
<a id="schemasecretkeystring"></a>
<a id="schema_SecretKeyString"></a>
<a id="tocSsecretkeystring"></a>
<a id="tocssecretkeystring"></a>

```json
"string"
```

<h2 id="tocS_SessionTokenString">SessionTokenString</h2>
<!-- backwards compatibility -->
<a id="schemasessiontokenstring"></a>
<a id="schema_SessionTokenString"></a>
<a id="tocSsessiontokenstring"></a>
<a id="tocssessiontokenstring"></a>

```json
"string"
```

<h2 id="tocS_DateType">DateType</h2>
<!-- backwards compatibility -->
<a id="schemadatetype"></a>
<a id="schema_DateType"></a>
<a id="tocSdatetype"></a>
<a id="tocsdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "AccessKeyId": {},
  "SecretKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

Credentials for the provided identity ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|SecretKey|object|false|none|none|
|SessionToken|object|false|none|none|
|Expiration|object|false|none|none|

<h2 id="tocS_IdentityIdList">IdentityIdList</h2>
<!-- backwards compatibility -->
<a id="schemaidentityidlist"></a>
<a id="schema_IdentityIdList"></a>
<a id="tocSidentityidlist"></a>
<a id="tocsidentityidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UnprocessedIdentityIdList">UnprocessedIdentityIdList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedidentityidlist"></a>
<a id="schema_UnprocessedIdentityIdList"></a>
<a id="tocSunprocessedidentityidlist"></a>
<a id="tocsunprocessedidentityidlist"></a>

```json
[
  {
    "IdentityId": {},
    "ErrorCode": {}
  }
]
```

<h2 id="tocS_IdentityPoolId">IdentityPoolId</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolid"></a>
<a id="schema_IdentityPoolId"></a>
<a id="tocSidentitypoolid"></a>
<a id="tocsidentitypoolid"></a>

```json
"string"
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

<h2 id="tocS_DeveloperUserIdentifier">DeveloperUserIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperuseridentifier"></a>
<a id="schema_DeveloperUserIdentifier"></a>
<a id="tocSdeveloperuseridentifier"></a>
<a id="tocsdeveloperuseridentifier"></a>

```json
"string"
```

<h2 id="tocS_DeveloperUserIdentifierList">DeveloperUserIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperuseridentifierlist"></a>
<a id="schema_DeveloperUserIdentifierList"></a>
<a id="tocSdeveloperuseridentifierlist"></a>
<a id="tocsdeveloperuseridentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"AccessDenied"
```

<h2 id="tocS_LoginsMap">LoginsMap</h2>
<!-- backwards compatibility -->
<a id="schemaloginsmap"></a>
<a id="schema_LoginsMap"></a>
<a id="tocSloginsmap"></a>
<a id="tocsloginsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityProviderToken](#schemaidentityprovidertoken)|false|none|none|

<h2 id="tocS_RolesMap">RolesMap</h2>
<!-- backwards compatibility -->
<a id="schemarolesmap"></a>
<a id="schema_RolesMap"></a>
<a id="tocSrolesmap"></a>
<a id="tocsrolesmap"></a>

```json
{
  "property1": "stringstringstringst",
  "property2": "stringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ARNString](#schemaarnstring)|false|none|none|

<h2 id="tocS_RoleMappingMap">RoleMappingMap</h2>
<!-- backwards compatibility -->
<a id="schemarolemappingmap"></a>
<a id="schema_RoleMappingMap"></a>
<a id="tocSrolemappingmap"></a>
<a id="tocsrolemappingmap"></a>

```json
{
  "property1": {
    "Type": {},
    "AmbiguousRoleResolution": {},
    "RulesConfiguration": {
      "Rules": {}
    }
  },
  "property2": {
    "Type": {},
    "AmbiguousRoleResolution": {},
    "RulesConfiguration": {
      "Rules": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RoleMapping](#schemarolemapping)|false|none|A role mapping.|

<h2 id="tocS_PrincipalTags">PrincipalTags</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltags"></a>
<a id="schema_PrincipalTags"></a>
<a id="tocSprincipaltags"></a>
<a id="tocsprincipaltags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PrincipalTagValue](#schemaprincipaltagvalue)|false|none|none|

<h2 id="tocS_TokenDuration">TokenDuration</h2>
<!-- backwards compatibility -->
<a id="schematokenduration"></a>
<a id="schema_TokenDuration"></a>
<a id="tocStokenduration"></a>
<a id="tocstokenduration"></a>

```json
1
```

<h2 id="tocS_OIDCToken">OIDCToken</h2>
<!-- backwards compatibility -->
<a id="schemaoidctoken"></a>
<a id="schema_OIDCToken"></a>
<a id="tocSoidctoken"></a>
<a id="tocsoidctoken"></a>

```json
"string"
```

<h2 id="tocS_IdentityProviderName">IdentityProviderName</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidername"></a>
<a id="schema_IdentityProviderName"></a>
<a id="tocSidentityprovidername"></a>
<a id="tocsidentityprovidername"></a>

```json
"string"
```

<h2 id="tocS_UseDefaults">UseDefaults</h2>
<!-- backwards compatibility -->
<a id="schemausedefaults"></a>
<a id="schema_UseDefaults"></a>
<a id="tocSusedefaults"></a>
<a id="tocsusedefaults"></a>

```json
true
```

<h2 id="tocS_HideDisabled">HideDisabled</h2>
<!-- backwards compatibility -->
<a id="schemahidedisabled"></a>
<a id="schema_HideDisabled"></a>
<a id="tocShidedisabled"></a>
<a id="tocshidedisabled"></a>

```json
true
```

<h2 id="tocS_IdentitiesList">IdentitiesList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitieslist"></a>
<a id="schema_IdentitiesList"></a>
<a id="tocSidentitieslist"></a>
<a id="tocsidentitieslist"></a>

```json
[
  {
    "IdentityId": {},
    "Logins": {},
    "CreationDate": {},
    "LastModifiedDate": {}
  }
]
```

<h2 id="tocS_LoginsList">LoginsList</h2>
<!-- backwards compatibility -->
<a id="schemaloginslist"></a>
<a id="schema_LoginsList"></a>
<a id="tocSloginslist"></a>
<a id="tocsloginslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdentityPoolShortDescription">IdentityPoolShortDescription</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolshortdescription"></a>
<a id="schema_IdentityPoolShortDescription"></a>
<a id="tocSidentitypoolshortdescription"></a>
<a id="tocsidentitypoolshortdescription"></a>

```json
{
  "IdentityPoolId": {},
  "IdentityPoolName": {}
}
```

A description of the identity pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|IdentityPoolName|object|false|none|none|

<h2 id="tocS_TagKeysType">TagKeysType</h2>
<!-- backwards compatibility -->
<a id="schematagkeystype"></a>
<a id="schema_TagKeysType"></a>
<a id="tocStagkeystype"></a>
<a id="tocstagkeystype"></a>

```json
"string"
```

<h2 id="tocS_IdentityPoolTagsListType">IdentityPoolTagsListType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypooltagslisttype"></a>
<a id="schema_IdentityPoolTagsListType"></a>
<a id="tocSidentitypooltagslisttype"></a>
<a id="tocsidentitypooltagslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagValueType">TagValueType</h2>
<!-- backwards compatibility -->
<a id="schematagvaluetype"></a>
<a id="schema_TagValueType"></a>
<a id="tocStagvaluetype"></a>
<a id="tocstagvaluetype"></a>

```json
"string"
```

<h2 id="tocS_IdentityPoolsList">IdentityPoolsList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolslist"></a>
<a id="schema_IdentityPoolsList"></a>
<a id="tocSidentitypoolslist"></a>
<a id="tocsidentitypoolslist"></a>

```json
[
  {
    "IdentityPoolId": {},
    "IdentityPoolName": {}
  }
]
```

<h2 id="tocS_IdentityProviderId">IdentityProviderId</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderid"></a>
<a id="schema_IdentityProviderId"></a>
<a id="tocSidentityproviderid"></a>
<a id="tocsidentityproviderid"></a>

```json
"string"
```

<h2 id="tocS_IdentityProviderToken">IdentityProviderToken</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidertoken"></a>
<a id="schema_IdentityProviderToken"></a>
<a id="tocSidentityprovidertoken"></a>
<a id="tocsidentityprovidertoken"></a>

```json
"string"
```

<h2 id="tocS_QueryLimit">QueryLimit</h2>
<!-- backwards compatibility -->
<a id="schemaquerylimit"></a>
<a id="schema_QueryLimit"></a>
<a id="tocSquerylimit"></a>
<a id="tocsquerylimit"></a>

```json
1
```

<h2 id="tocS_PaginationKey">PaginationKey</h2>
<!-- backwards compatibility -->
<a id="schemapaginationkey"></a>
<a id="schema_PaginationKey"></a>
<a id="tocSpaginationkey"></a>
<a id="tocspaginationkey"></a>

```json
"string"
```

<h2 id="tocS_MappingRuleMatchType">MappingRuleMatchType</h2>
<!-- backwards compatibility -->
<a id="schemamappingrulematchtype"></a>
<a id="schema_MappingRuleMatchType"></a>
<a id="tocSmappingrulematchtype"></a>
<a id="tocsmappingrulematchtype"></a>

```json
"Equals"
```

<h2 id="tocS_MappingRule">MappingRule</h2>
<!-- backwards compatibility -->
<a id="schemamappingrule"></a>
<a id="schema_MappingRule"></a>
<a id="tocSmappingrule"></a>
<a id="tocsmappingrule"></a>

```json
{
  "Claim": {},
  "MatchType": {},
  "Value": {},
  "RoleARN": {}
}
```

A rule that maps a claim name, a claim value, and a match type to a role ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Claim|object|true|none|none|
|MatchType|object|true|none|none|
|Value|object|true|none|none|
|RoleARN|object|true|none|none|

<h2 id="tocS_MappingRulesList">MappingRulesList</h2>
<!-- backwards compatibility -->
<a id="schemamappingruleslist"></a>
<a id="schema_MappingRulesList"></a>
<a id="tocSmappingruleslist"></a>
<a id="tocsmappingruleslist"></a>

```json
[
  {
    "Claim": {},
    "MatchType": {},
    "Value": {},
    "RoleARN": {}
  }
]
```

<h2 id="tocS_PrincipalTagID">PrincipalTagID</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltagid"></a>
<a id="schema_PrincipalTagID"></a>
<a id="tocSprincipaltagid"></a>
<a id="tocsprincipaltagid"></a>

```json
"string"
```

<h2 id="tocS_PrincipalTagValue">PrincipalTagValue</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltagvalue"></a>
<a id="schema_PrincipalTagValue"></a>
<a id="tocSprincipaltagvalue"></a>
<a id="tocsprincipaltagvalue"></a>

```json
"string"
```

<h2 id="tocS_RoleMappingType">RoleMappingType</h2>
<!-- backwards compatibility -->
<a id="schemarolemappingtype"></a>
<a id="schema_RoleMappingType"></a>
<a id="tocSrolemappingtype"></a>
<a id="tocsrolemappingtype"></a>

```json
"Token"
```

<h2 id="tocS_RulesConfigurationType">RulesConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemarulesconfigurationtype"></a>
<a id="schema_RulesConfigurationType"></a>
<a id="tocSrulesconfigurationtype"></a>
<a id="tocsrulesconfigurationtype"></a>

```json
{
  "Rules": {}
}
```

A container for rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|true|none|none|

<h2 id="tocS_RoleMapping">RoleMapping</h2>
<!-- backwards compatibility -->
<a id="schemarolemapping"></a>
<a id="schema_RoleMapping"></a>
<a id="tocSrolemapping"></a>
<a id="tocsrolemapping"></a>

```json
{
  "Type": {},
  "AmbiguousRoleResolution": {},
  "RulesConfiguration": {
    "Rules": {}
  }
}
```

A role mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|AmbiguousRoleResolution|object|false|none|none|
|RulesConfiguration|object|false|none|none|

<h2 id="tocS_RoleType">RoleType</h2>
<!-- backwards compatibility -->
<a id="schemaroletype"></a>
<a id="schema_RoleType"></a>
<a id="tocSroletype"></a>
<a id="tocsroletype"></a>

```json
"string"
```

<h2 id="tocS_UnprocessedIdentityId">UnprocessedIdentityId</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedidentityid"></a>
<a id="schema_UnprocessedIdentityId"></a>
<a id="tocSunprocessedidentityid"></a>
<a id="tocsunprocessedidentityid"></a>

```json
{
  "IdentityId": {},
  "ErrorCode": {}
}
```

An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityId|object|false|none|none|
|ErrorCode|object|false|none|none|
