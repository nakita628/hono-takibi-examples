<h1 id="amazon-cognito-identity-provider">Amazon Cognito Identity Provider v2016-04-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>With the Amazon Cognito user pools API, you can set up user pools and app clients, and authenticate users. To authenticate users from third-party identity providers (IdPs) in this API, you can <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">link IdP users to native user profiles</a>. Learn more about the authentication and authorization of federated users in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p> <p>This API reference provides detailed information about API operations and object types in Amazon Cognito. At the bottom of the page for each API operation and object, under <i>See Also</i>, you can learn how to use it in an Amazon Web Services SDK in the language of your choice.</p> <p>Along with resource management operations, the Amazon Cognito user pools API includes classes of operations and authorization models for client-side and server-side user operations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a> in the <i>Amazon Cognito Developer Guide</i>.</p> <p>You can also start reading about the <code>CognitoIdentityProvider</code> client in the following SDK guides.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/cognito-idp/index.html#cli-aws-cognito-idp">Amazon Web Services Command Line Interface</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/CognitoIdentityProvider/TCognitoIdentityProviderClient.html">Amazon Web Services SDK for .NET</a> </p> </li> <li> <p> <a href="https://sdk.amazonaws.com/cpp/api/LATEST/aws-cpp-sdk-cognito-idp/html/class_aws_1_1_cognito_identity_provider_1_1_cognito_identity_provider_client.html">Amazon Web Services SDK for C++</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-go/api/service/cognitoidentityprovider/#CognitoIdentityProvider">Amazon Web Services SDK for Go</a> </p> </li> <li> <p> <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/cognitoidentityprovider/CognitoIdentityProviderClient.html">Amazon Web Services SDK for Java V2</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html">Amazon Web Services SDK for JavaScript</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-cognito-idp-2016-04-18.html">Amazon Web Services SDK for PHP V3</a> </p> </li> <li> <p> <a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cognito-idp.html">Amazon Web Services SDK for Python</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/CognitoIdentityProvider/Client.html">Amazon Web Services SDK for Ruby V3</a> </p> </li> </ul> <p>To get started with an Amazon Web Services SDK, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>. For example actions and scenarios, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/service_code_examples_cognito-identity-provider.html">Code examples for Amazon Cognito Identity Provider using Amazon Web Services SDKs</a>.</p>

Base URLs:

* <a href="http://cognito-idp.us-east-1.amazonaws.com">http://cognito-idp.us-east-1.amazonaws.com</a> - The Amazon Cognito Identity Provider multi-region endpoint

* <a href="https://cognito-idp.us-east-1.amazonaws.com">https://cognito-idp.us-east-1.amazonaws.com</a> - The Amazon Cognito Identity Provider multi-region endpoint

* <a href="http://cognito-idp.cn-north-1.amazonaws.com.cn">http://cognito-idp.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Identity Provider endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cognito-idp.cn-north-1.amazonaws.com.cn">https://cognito-idp.cn-north-1.amazonaws.com.cn</a> - The Amazon Cognito Identity Provider endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cognito-idp/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cognito-identity-provider-default">Default</h1>

## AddCustomAttributes

<a id="opIdAddCustomAttributes"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AddCustomAttributes' \
  -d '{
    "UserPoolId": {},
    "CustomAttributes": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes`

<p>Adds additional user attributes to the user pool schema.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "CustomAttributes": {}
}
```

<h3 id="addcustomattributes-parameters">Parameters</h3>

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
|body|body|[AddCustomAttributesRequest](#schemaaddcustomattributesrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» CustomAttributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AddCustomAttributes|

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

<h3 id="addcustomattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddCustomAttributesResponse](#schemaaddcustomattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserImportInProgressException|[UserImportInProgressException](#schemauserimportinprogressexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminAddUserToGroup

<a id="opIdAdminAddUserToGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminAddUserToGroup' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "GroupName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup`

<p>Adds the specified user to the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "GroupName": {}
}
```

<h3 id="adminaddusertogroup-parameters">Parameters</h3>

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
|body|body|[AdminAddUserToGroupRequest](#schemaadminaddusertogrouprequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» GroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminAddUserToGroup|

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

<h3 id="adminaddusertogroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminConfirmSignUp

<a id="opIdAdminConfirmSignUp"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminConfirmSignUp' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp`

<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="adminconfirmsignup-parameters">Parameters</h3>

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
|body|body|[AdminConfirmSignUpRequest](#schemaadminconfirmsignuprequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminConfirmSignUp|

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

<h3 id="adminconfirmsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminConfirmSignUpResponse](#schemaadminconfirmsignupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|TooManyFailedAttemptsException|[TooManyFailedAttemptsException](#schematoomanyfailedattemptsexception)|
|486|486|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|489|489|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|490|490|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminCreateUser

<a id="opIdAdminCreateUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminCreateUser' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "UserAttributes": {},
    "ValidationData": {},
    "TemporaryPassword": {},
    "ForceAliasCreation": {},
    "MessageAction": {},
    "DesiredDeliveryMediums": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser`

<p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributes": {},
  "ValidationData": {},
  "TemporaryPassword": {},
  "ForceAliasCreation": {},
  "MessageAction": {},
  "DesiredDeliveryMediums": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="admincreateuser-parameters">Parameters</h3>

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
|body|body|[AdminCreateUserRequest](#schemaadmincreateuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» UserAttributes|body|object|false|none|
|» ValidationData|body|object|false|none|
|» TemporaryPassword|body|object|false|none|
|» ForceAliasCreation|body|object|false|none|
|» MessageAction|body|object|false|none|
|» DesiredDeliveryMediums|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminCreateUser|

> Example responses

> 200 Response

```json
{
  "User": {
    "Username": {},
    "Attributes": {},
    "UserCreateDate": {},
    "UserLastModifiedDate": {},
    "Enabled": {},
    "UserStatus": {},
    "MFAOptions": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="admincreateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminCreateUserResponse](#schemaadmincreateuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|483|483|UsernameExistsException|[UsernameExistsException](#schemausernameexistsexception)|
|484|484|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|485|485|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|486|486|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|487|487|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|488|488|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|489|489|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|490|490|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|491|491|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|492|492|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|493|493|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|494|494|UnsupportedUserStateException|[UnsupportedUserStateException](#schemaunsupporteduserstateexception)|
|495|495|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminDeleteUser

<a id="opIdAdminDeleteUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminDeleteUser' \
  -d '{
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser`

<p>Deletes a user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="admindeleteuser-parameters">Parameters</h3>

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
|body|body|[AdminDeleteUserRequest](#schemaadmindeleteuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminDeleteUser|

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

<h3 id="admindeleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminDeleteUserAttributes

<a id="opIdAdminDeleteUserAttributes"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminDeleteUserAttributes' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "UserAttributeNames": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes`

<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributeNames": {}
}
```

<h3 id="admindeleteuserattributes-parameters">Parameters</h3>

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
|body|body|[AdminDeleteUserAttributesRequest](#schemaadmindeleteuserattributesrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» UserAttributeNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminDeleteUserAttributes|

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

<h3 id="admindeleteuserattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminDeleteUserAttributesResponse](#schemaadmindeleteuserattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminDisableProviderForUser

<a id="opIdAdminDisableProviderForUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminDisableProviderForUser' \
  -d '{
    "UserPoolId": {},
    "User": {
      "ProviderName": {},
      "ProviderAttributeName": {},
      "ProviderAttributeValue": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser`

<p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "User": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  }
}
```

<h3 id="admindisableproviderforuser-parameters">Parameters</h3>

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
|body|body|[AdminDisableProviderForUserRequest](#schemaadmindisableproviderforuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» User|body|object|true|none|
|» » ProviderName|body|object|false|none|
|» » ProviderAttributeName|body|object|false|none|
|» » ProviderAttributeValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminDisableProviderForUser|

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

<h3 id="admindisableproviderforuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminDisableProviderForUserResponse](#schemaadmindisableproviderforuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminDisableUser

<a id="opIdAdminDisableUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminDisableUser' \
  -d '{
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser`

<p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="admindisableuser-parameters">Parameters</h3>

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
|body|body|[AdminDisableUserRequest](#schemaadmindisableuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminDisableUser|

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

<h3 id="admindisableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminDisableUserResponse](#schemaadmindisableuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminEnableUser

<a id="opIdAdminEnableUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminEnableUser' \
  -d '{
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser`

<p>Enables the specified user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="adminenableuser-parameters">Parameters</h3>

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
|body|body|[AdminEnableUserRequest](#schemaadminenableuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminEnableUser|

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

<h3 id="adminenableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminEnableUserResponse](#schemaadminenableuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminForgetDevice

<a id="opIdAdminForgetDevice"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminForgetDevice' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "DeviceKey": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice`

<p>Forgets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "DeviceKey": {}
}
```

<h3 id="adminforgetdevice-parameters">Parameters</h3>

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
|body|body|[AdminForgetDeviceRequest](#schemaadminforgetdevicerequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» DeviceKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminForgetDevice|

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

<h3 id="adminforgetdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminGetDevice

<a id="opIdAdminGetDevice"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminGetDevice' \
  -d '{
    "DeviceKey": {},
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice`

<p>Gets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "DeviceKey": {},
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="admingetdevice-parameters">Parameters</h3>

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
|body|body|[AdminGetDeviceRequest](#schemaadmingetdevicerequest)|true|none|
|» DeviceKey|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminGetDevice|

> Example responses

> 200 Response

```json
{
  "Device": {
    "DeviceKey": {},
    "DeviceAttributes": {},
    "DeviceCreateDate": {},
    "DeviceLastModifiedDate": {},
    "DeviceLastAuthenticatedDate": {}
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

<h3 id="admingetdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminGetDeviceResponse](#schemaadmingetdeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminGetUser

<a id="opIdAdminGetUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminGetUser' \
  -d '{
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser`

<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="admingetuser-parameters">Parameters</h3>

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
|body|body|[AdminGetUserRequest](#schemaadmingetuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminGetUser|

> Example responses

> 200 Response

```json
{
  "Username": {},
  "UserAttributes": {},
  "UserCreateDate": {},
  "UserLastModifiedDate": {},
  "Enabled": {},
  "UserStatus": {},
  "MFAOptions": {},
  "PreferredMfaSetting": {},
  "UserMFASettingList": {}
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

<h3 id="admingetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminGetUserResponse](#schemaadmingetuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminInitiateAuth

<a id="opIdAdminInitiateAuth"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminInitiateAuth' \
  -d '{
    "UserPoolId": {},
    "ClientId": {},
    "AuthFlow": {},
    "AuthParameters": {
      "property1": "string",
      "property2": "string"
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "ContextData": {
      "IpAddress": {},
      "ServerName": {},
      "ServerPath": {},
      "HttpHeaders": {},
      "EncodedData": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth`

<p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "AuthFlow": {},
  "AuthParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ContextData": {
    "IpAddress": {},
    "ServerName": {},
    "ServerPath": {},
    "HttpHeaders": {},
    "EncodedData": {}
  }
}
```

<h3 id="admininitiateauth-parameters">Parameters</h3>

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
|body|body|[AdminInitiateAuthRequest](#schemaadmininitiateauthrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|true|none|
|» AuthFlow|body|object|true|none|
|» AuthParameters|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» ContextData|body|object|false|none|
|» » IpAddress|body|object|true|none|
|» » ServerName|body|object|true|none|
|» » ServerPath|body|object|true|none|
|» » HttpHeaders|body|object|true|none|
|» » EncodedData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminInitiateAuth|

> Example responses

> 200 Response

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="admininitiateauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminInitiateAuthResponse](#schemaadmininitiateauthresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|486|486|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|487|487|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|488|488|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|489|489|MFAMethodNotFoundException|[MFAMethodNotFoundException](#schemamfamethodnotfoundexception)|
|490|490|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|491|491|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|492|492|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|493|493|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|494|494|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminLinkProviderForUser

<a id="opIdAdminLinkProviderForUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminLinkProviderForUser' \
  -d '{
    "UserPoolId": {},
    "DestinationUser": {
      "ProviderName": {},
      "ProviderAttributeName": {},
      "ProviderAttributeValue": {}
    },
    "SourceUser": {
      "ProviderName": {},
      "ProviderAttributeName": {},
      "ProviderAttributeValue": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser`

<p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "DestinationUser": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  },
  "SourceUser": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  }
}
```

<h3 id="adminlinkproviderforuser-parameters">Parameters</h3>

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
|body|body|[AdminLinkProviderForUserRequest](#schemaadminlinkproviderforuserrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» DestinationUser|body|object|true|none|
|» » ProviderName|body|object|false|none|
|» » ProviderAttributeName|body|object|false|none|
|» » ProviderAttributeValue|body|object|false|none|
|» SourceUser|body|object|true|none|
|» » ProviderName|body|object|false|none|
|» » ProviderAttributeName|body|object|false|none|
|» » ProviderAttributeValue|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminLinkProviderForUser|

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

<h3 id="adminlinkproviderforuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminLinkProviderForUserResponse](#schemaadminlinkproviderforuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminListDevices

<a id="opIdAdminListDevices"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminListDevices' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "Limit": {},
    "PaginationToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices`

<p>Lists devices, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "Limit": {},
  "PaginationToken": {}
}
```

<h3 id="adminlistdevices-parameters">Parameters</h3>

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
|body|body|[AdminListDevicesRequest](#schemaadminlistdevicesrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» Limit|body|object|false|none|
|» PaginationToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminListDevices|

> Example responses

> 200 Response

```json
{
  "Devices": {},
  "PaginationToken": {}
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

<h3 id="adminlistdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminListDevicesResponse](#schemaadminlistdevicesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminListGroupsForUser

<a id="opIdAdminListGroupsForUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminListGroupsForUser' \
  -d '{
    "Username": {},
    "UserPoolId": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser`

<p>Lists the groups that the user belongs to.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "Username": {},
  "UserPoolId": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="adminlistgroupsforuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AdminListGroupsForUserRequest](#schemaadminlistgroupsforuserrequest)|true|none|
|» Username|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminListGroupsForUser|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="adminlistgroupsforuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminListGroupsForUserResponse](#schemaadminlistgroupsforuserresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminListUserAuthEvents

<a id="opIdAdminListUserAuthEvents"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminListUserAuthEvents' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents`

<p>A history of user activity and any risks detected as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="adminlistuserauthevents-parameters">Parameters</h3>

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
|body|body|[AdminListUserAuthEventsRequest](#schemaadminlistuserautheventsrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminListUserAuthEvents|

> Example responses

> 200 Response

```json
{
  "AuthEvents": {},
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

> 486 Response

```json
null
```

<h3 id="adminlistuserauthevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminListUserAuthEventsResponse](#schemaadminlistuserautheventsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserPoolAddOnNotEnabledException|[UserPoolAddOnNotEnabledException](#schemauserpooladdonnotenabledexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminRemoveUserFromGroup

<a id="opIdAdminRemoveUserFromGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "GroupName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup`

<p>Removes the specified user from the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "GroupName": {}
}
```

<h3 id="adminremoveuserfromgroup-parameters">Parameters</h3>

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
|body|body|[AdminRemoveUserFromGroupRequest](#schemaadminremoveuserfromgrouprequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» GroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup|

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

<h3 id="adminremoveuserfromgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminResetUserPassword

<a id="opIdAdminResetUserPassword"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminResetUserPassword' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword`

<p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Deactivates a user's password, requiring them to change it. If a user tries to sign in after the API is called, Amazon Cognito responds with a <code>PasswordResetRequiredException</code> error. Your app must then perform the actions that reset your user's password: the forgot-password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="adminresetuserpassword-parameters">Parameters</h3>

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
|body|body|[AdminResetUserPasswordRequest](#schemaadminresetuserpasswordrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminResetUserPassword|

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

> 492 Response

```json
null
```

<h3 id="adminresetuserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminResetUserPasswordResponse](#schemaadminresetuserpasswordresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|488|488|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|489|489|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|490|490|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|491|491|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|492|492|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminRespondToAuthChallenge

<a id="opIdAdminRespondToAuthChallenge"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge' \
  -d '{
    "UserPoolId": {},
    "ClientId": {},
    "ChallengeName": {},
    "ChallengeResponses": {
      "property1": "string",
      "property2": "string"
    },
    "Session": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "ContextData": {
      "IpAddress": {},
      "ServerName": {},
      "ServerPath": {},
      "HttpHeaders": {},
      "EncodedData": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge`

<p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "ChallengeName": {},
  "ChallengeResponses": {
    "property1": "string",
    "property2": "string"
  },
  "Session": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ContextData": {
    "IpAddress": {},
    "ServerName": {},
    "ServerPath": {},
    "HttpHeaders": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="adminrespondtoauthchallenge-parameters">Parameters</h3>

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
|body|body|[AdminRespondToAuthChallengeRequest](#schemaadminrespondtoauthchallengerequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|true|none|
|» ChallengeName|body|object|true|none|
|» ChallengeResponses|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» Session|body|object|false|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» ContextData|body|object|false|none|
|» » IpAddress|body|object|true|none|
|» » ServerName|body|object|true|none|
|» » ServerPath|body|object|true|none|
|» » HttpHeaders|body|object|true|none|
|» » EncodedData|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge|

> Example responses

> 200 Response

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

<h3 id="adminrespondtoauthchallenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminRespondToAuthChallengeResponse](#schemaadminrespondtoauthchallengeresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|484|484|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|485|485|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|486|486|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|487|487|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|488|488|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|491|491|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|492|492|MFAMethodNotFoundException|[MFAMethodNotFoundException](#schemamfamethodnotfoundexception)|
|493|493|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|494|494|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|495|495|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|496|496|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|497|497|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|498|498|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|499|499|SoftwareTokenMFANotFoundException|[SoftwareTokenMFANotFoundException](#schemasoftwaretokenmfanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminSetUserMFAPreference

<a id="opIdAdminSetUserMFAPreference"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminSetUserMFAPreference' \
  -d '{
    "SMSMfaSettings": {
      "Enabled": {},
      "PreferredMfa": {}
    },
    "SoftwareTokenMfaSettings": {
      "Enabled": {},
      "PreferredMfa": {}
    },
    "Username": {},
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference`

<p>The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "SMSMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "SoftwareTokenMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "Username": {},
  "UserPoolId": {}
}
```

<h3 id="adminsetusermfapreference-parameters">Parameters</h3>

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
|body|body|[AdminSetUserMFAPreferenceRequest](#schemaadminsetusermfapreferencerequest)|true|none|
|» SMSMfaSettings|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » PreferredMfa|body|object|false|none|
|» SoftwareTokenMfaSettings|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » PreferredMfa|body|object|false|none|
|» Username|body|object|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminSetUserMFAPreference|

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

<h3 id="adminsetusermfapreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminSetUserMFAPreferenceResponse](#schemaadminsetusermfapreferenceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminSetUserPassword

<a id="opIdAdminSetUserPassword"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminSetUserPassword' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "Password": {},
    "Permanent": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword`

<p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p> <p> <code>AdminSetUserPassword</code> can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from <code>EXTERNAL_PROVIDER</code> to <code>CONFIRMED</code>. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like <code>ChangePassword</code> and <code>UpdateUserAttributes</code>. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">Linking federated users to an existing user profile</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "Password": {},
  "Permanent": {}
}
```

<h3 id="adminsetuserpassword-parameters">Parameters</h3>

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
|body|body|[AdminSetUserPasswordRequest](#schemaadminsetuserpasswordrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» Password|body|object|true|none|
|» Permanent|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminSetUserPassword|

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

<h3 id="adminsetuserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminSetUserPasswordResponse](#schemaadminsetuserpasswordresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminSetUserSettings

<a id="opIdAdminSetUserSettings"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminSetUserSettings' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "MFAOptions": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings`

<p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "MFAOptions": {}
}
```

<h3 id="adminsetusersettings-parameters">Parameters</h3>

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
|body|body|[AdminSetUserSettingsRequest](#schemaadminsetusersettingsrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» MFAOptions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminSetUserSettings|

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

<h3 id="adminsetusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminSetUserSettingsResponse](#schemaadminsetusersettingsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminUpdateAuthEventFeedback

<a id="opIdAdminUpdateAuthEventFeedback"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "EventId": {},
    "FeedbackValue": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback`

<p>Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "EventId": {},
  "FeedbackValue": {}
}
```

<h3 id="adminupdateautheventfeedback-parameters">Parameters</h3>

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
|body|body|[AdminUpdateAuthEventFeedbackRequest](#schemaadminupdateautheventfeedbackrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» EventId|body|object|true|none|
|» FeedbackValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback|

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

<h3 id="adminupdateautheventfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminUpdateAuthEventFeedbackResponse](#schemaadminupdateautheventfeedbackresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserPoolAddOnNotEnabledException|[UserPoolAddOnNotEnabledException](#schemauserpooladdonnotenabledexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminUpdateDeviceStatus

<a id="opIdAdminUpdateDeviceStatus"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "DeviceKey": {},
    "DeviceRememberedStatus": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus`

<p>Updates the device status as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "DeviceKey": {},
  "DeviceRememberedStatus": {}
}
```

<h3 id="adminupdatedevicestatus-parameters">Parameters</h3>

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
|body|body|[AdminUpdateDeviceStatusRequest](#schemaadminupdatedevicestatusrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» DeviceKey|body|object|true|none|
|» DeviceRememberedStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus|

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

<h3 id="adminupdatedevicestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminUpdateDeviceStatusResponse](#schemaadminupdatedevicestatusresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminUpdateUserAttributes

<a id="opIdAdminUpdateUserAttributes"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminUpdateUserAttributes' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "UserAttributes": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes`

<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributes": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="adminupdateuserattributes-parameters">Parameters</h3>

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
|body|body|[AdminUpdateUserAttributesRequest](#schemaadminupdateuserattributesrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» UserAttributes|body|object|true|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminUpdateUserAttributes|

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

> 492 Response

```json
null
```

<h3 id="adminupdateuserattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminUpdateUserAttributesResponse](#schemaadminupdateuserattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|485|485|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|488|488|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|489|489|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|490|490|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|491|491|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|492|492|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AdminUserGlobalSignOut

<a id="opIdAdminUserGlobalSignOut"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AdminUserGlobalSignOut' \
  -d '{
    "UserPoolId": {},
    "Username": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut`

<p>Signs out a user from all devices. <code>AdminUserGlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn't aware that a user's access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

<h3 id="adminuserglobalsignout-parameters">Parameters</h3>

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
|body|body|[AdminUserGlobalSignOutRequest](#schemaadminuserglobalsignoutrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AdminUserGlobalSignOut|

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

<h3 id="adminuserglobalsignout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminUserGlobalSignOutResponse](#schemaadminuserglobalsignoutresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSoftwareToken

<a id="opIdAssociateSoftwareToken"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.AssociateSoftwareToken' \
  -d '{
    "AccessToken": {},
    "Session": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken`

<p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "Session": {}
}
```

<h3 id="associatesoftwaretoken-parameters">Parameters</h3>

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
|body|body|[AssociateSoftwareTokenRequest](#schemaassociatesoftwaretokenrequest)|true|none|
|» AccessToken|body|object|false|none|
|» Session|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.AssociateSoftwareToken|

> Example responses

> 200 Response

```json
{
  "SecretCode": {},
  "Session": {}
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

<h3 id="associatesoftwaretoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSoftwareTokenResponse](#schemaassociatesoftwaretokenresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|485|485|SoftwareTokenMFANotFoundException|[SoftwareTokenMFANotFoundException](#schemasoftwaretokenmfanotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ChangePassword

<a id="opIdChangePassword"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ChangePassword' \
  -d '{
    "PreviousPassword": {},
    "ProposedPassword": {},
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword`

<p>Changes the password for a specified user in a user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "PreviousPassword": {},
  "ProposedPassword": {},
  "AccessToken": {}
}
```

<h3 id="changepassword-parameters">Parameters</h3>

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
|body|body|[ChangePasswordRequest](#schemachangepasswordrequest)|true|none|
|» PreviousPassword|body|object|true|none|
|» ProposedPassword|body|object|true|none|
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ChangePassword|

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

<h3 id="changepassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangePasswordResponse](#schemachangepasswordresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|487|487|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|488|488|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|489|489|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|490|490|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmDevice

<a id="opIdConfirmDevice"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ConfirmDevice' \
  -d '{
    "AccessToken": {},
    "DeviceKey": {},
    "DeviceSecretVerifierConfig": {
      "PasswordVerifier": {},
      "Salt": {}
    },
    "DeviceName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice`

<p>Confirms tracking of the device. This API call is the call that begins device tracking.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "DeviceKey": {},
  "DeviceSecretVerifierConfig": {
    "PasswordVerifier": {},
    "Salt": {}
  },
  "DeviceName": {}
}
```

<h3 id="confirmdevice-parameters">Parameters</h3>

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
|body|body|[ConfirmDeviceRequest](#schemaconfirmdevicerequest)|true|none|
|» AccessToken|body|object|true|none|
|» DeviceKey|body|object|true|none|
|» DeviceSecretVerifierConfig|body|object|false|none|
|» » PasswordVerifier|body|object|false|none|
|» » Salt|body|object|false|none|
|» DeviceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ConfirmDevice|

> Example responses

> 200 Response

```json
{
  "UserConfirmationNecessary": {}
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

> 492 Response

```json
null
```

<h3 id="confirmdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmDeviceResponse](#schemaconfirmdeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|484|484|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|485|485|UsernameExistsException|[UsernameExistsException](#schemausernameexistsexception)|
|486|486|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|487|487|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|488|488|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|489|489|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|490|490|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|491|491|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|492|492|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmForgotPassword

<a id="opIdConfirmForgotPassword"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ConfirmForgotPassword' \
  -d '{
    "ClientId": {},
    "SecretHash": {},
    "Username": {},
    "ConfirmationCode": {},
    "Password": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword`

<p>Allows a user to enter a confirmation code to reset a forgotten password.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "ConfirmationCode": {},
  "Password": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="confirmforgotpassword-parameters">Parameters</h3>

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
|body|body|[ConfirmForgotPasswordRequest](#schemaconfirmforgotpasswordrequest)|true|none|
|» ClientId|body|object|true|none|
|» SecretHash|body|object|false|none|
|» Username|body|object|true|none|
|» ConfirmationCode|body|object|true|none|
|» Password|body|object|true|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ConfirmForgotPassword|

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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="confirmforgotpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmForgotPasswordResponse](#schemaconfirmforgotpasswordresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|482|482|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|486|486|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|487|487|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|488|488|TooManyFailedAttemptsException|[TooManyFailedAttemptsException](#schematoomanyfailedattemptsexception)|
|489|489|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|490|490|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|492|492|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|493|493|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|494|494|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|495|495|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ConfirmSignUp

<a id="opIdConfirmSignUp"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ConfirmSignUp' \
  -d '{
    "ClientId": {},
    "SecretHash": {},
    "Username": {},
    "ConfirmationCode": {},
    "ForceAliasCreation": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp`

<p>Confirms registration of a new user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "ConfirmationCode": {},
  "ForceAliasCreation": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="confirmsignup-parameters">Parameters</h3>

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
|body|body|[ConfirmSignUpRequest](#schemaconfirmsignuprequest)|true|none|
|» ClientId|body|object|true|none|
|» SecretHash|body|object|false|none|
|» Username|body|object|true|none|
|» ConfirmationCode|body|object|true|none|
|» ForceAliasCreation|body|object|false|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ConfirmSignUp|

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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="confirmsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfirmSignUpResponse](#schemaconfirmsignupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|TooManyFailedAttemptsException|[TooManyFailedAttemptsException](#schematoomanyfailedattemptsexception)|
|486|486|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|487|487|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|488|488|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|489|489|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|490|490|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|492|492|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|493|493|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|494|494|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateGroup' \
  -d '{
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup`

<p>Creates a new group in the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "GroupName": {},
  "UserPoolId": {},
  "Description": {},
  "RoleArn": {},
  "Precedence": {}
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
|» GroupName|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|false|none|
|» Precedence|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateGroup|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResponse](#schemacreategroupresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|GroupExistsException|[GroupExistsException](#schemagroupexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIdentityProvider

<a id="opIdCreateIdentityProvider"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateIdentityProvider' \
  -d '{
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider`

<p>Creates an IdP for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ProviderName": {},
  "ProviderType": {},
  "ProviderDetails": {
    "property1": "string",
    "property2": "string"
  },
  "AttributeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "IdpIdentifiers": {}
}
```

<h3 id="createidentityprovider-parameters">Parameters</h3>

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
|body|body|[CreateIdentityProviderRequest](#schemacreateidentityproviderrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ProviderName|body|object|true|none|
|» ProviderType|body|object|true|none|
|» ProviderDetails|body|object|true|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» AttributeMapping|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» IdpIdentifiers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateIdentityProvider|

> Example responses

> 200 Response

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="createidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIdentityProviderResponse](#schemacreateidentityproviderresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|DuplicateProviderException|[DuplicateProviderException](#schemaduplicateproviderexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResourceServer

<a id="opIdCreateResourceServer"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateResourceServer' \
  -d '{
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer`

<p>Creates a new OAuth2.0 resource server and defines custom scopes within it.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Identifier": {},
  "Name": {},
  "Scopes": {}
}
```

<h3 id="createresourceserver-parameters">Parameters</h3>

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
|body|body|[CreateResourceServerRequest](#schemacreateresourceserverrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Identifier|body|object|true|none|
|» Name|body|object|true|none|
|» Scopes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateResourceServer|

> Example responses

> 200 Response

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
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

<h3 id="createresourceserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceServerResponse](#schemacreateresourceserverresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserImportJob

<a id="opIdCreateUserImportJob"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateUserImportJob' \
  -d '{
    "JobName": {},
    "UserPoolId": {},
    "CloudWatchLogsRoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob`

<p>Creates a user import job.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "JobName": {},
  "UserPoolId": {},
  "CloudWatchLogsRoleArn": {}
}
```

<h3 id="createuserimportjob-parameters">Parameters</h3>

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
|body|body|[CreateUserImportJobRequest](#schemacreateuserimportjobrequest)|true|none|
|» JobName|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» CloudWatchLogsRoleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateUserImportJob|

> Example responses

> 200 Response

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
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

<h3 id="createuserimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserImportJobResponse](#schemacreateuserimportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserPool

<a id="opIdCreateUserPool"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateUserPool' \
  -d '{
    "PoolName": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "AutoVerifiedAttributes": {},
    "AliasAttributes": {},
    "UsernameAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "MfaConfiguration": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "Schema": {},
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "UsernameConfiguration": {
      "CaseSensitive": {}
    },
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool`

<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "PoolName": {},
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": {},
      "RequireUppercase": {},
      "RequireLowercase": {},
      "RequireNumbers": {},
      "RequireSymbols": {},
      "TemporaryPasswordValidityDays": {}
    }
  },
  "DeletionProtection": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "AutoVerifiedAttributes": {},
  "AliasAttributes": {},
  "UsernameAttributes": {},
  "SmsVerificationMessage": {},
  "EmailVerificationMessage": {},
  "EmailVerificationSubject": {},
  "VerificationMessageTemplate": {
    "SmsMessage": {},
    "EmailMessage": {},
    "EmailSubject": {},
    "EmailMessageByLink": {},
    "EmailSubjectByLink": {},
    "DefaultEmailOption": {}
  },
  "SmsAuthenticationMessage": {},
  "MfaConfiguration": {},
  "UserAttributeUpdateSettings": {
    "AttributesRequireVerificationBeforeUpdate": {}
  },
  "DeviceConfiguration": {
    "ChallengeRequiredOnNewDevice": {},
    "DeviceOnlyRememberedOnUserPrompt": {}
  },
  "EmailConfiguration": {
    "SourceArn": {},
    "ReplyToEmailAddress": {},
    "EmailSendingAccount": {},
    "From": {},
    "ConfigurationSet": {}
  },
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  },
  "UserPoolTags": {
    "property1": "string",
    "property2": "string"
  },
  "AdminCreateUserConfig": {
    "AllowAdminCreateUserOnly": {},
    "UnusedAccountValidityDays": {},
    "InviteMessageTemplate": {
      "SMSMessage": {},
      "EmailMessage": {},
      "EmailSubject": {}
    }
  },
  "Schema": {},
  "UserPoolAddOns": {
    "AdvancedSecurityMode": {}
  },
  "UsernameConfiguration": {
    "CaseSensitive": {}
  },
  "AccountRecoverySetting": {
    "RecoveryMechanisms": {}
  }
}
```

<h3 id="createuserpool-parameters">Parameters</h3>

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
|body|body|[CreateUserPoolRequest](#schemacreateuserpoolrequest)|true|none|
|» PoolName|body|object|true|none|
|» Policies|body|object|false|none|
|» » PasswordPolicy|body|object|false|none|
|» » » MinimumLength|body|object|false|none|
|» » » RequireUppercase|body|object|false|none|
|» » » RequireLowercase|body|object|false|none|
|» » » RequireNumbers|body|object|false|none|
|» » » RequireSymbols|body|object|false|none|
|» » » TemporaryPasswordValidityDays|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» LambdaConfig|body|object|false|none|
|» » PreSignUp|body|object|false|none|
|» » CustomMessage|body|object|false|none|
|» » PostConfirmation|body|object|false|none|
|» » PreAuthentication|body|object|false|none|
|» » PostAuthentication|body|object|false|none|
|» » DefineAuthChallenge|body|object|false|none|
|» » CreateAuthChallenge|body|object|false|none|
|» » VerifyAuthChallengeResponse|body|object|false|none|
|» » PreTokenGeneration|body|object|false|none|
|» » UserMigration|body|object|false|none|
|» » CustomSMSSender|body|object|false|none|
|» » » LambdaVersion|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» » CustomEmailSender|body|object|false|none|
|» » » LambdaVersion|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» » KMSKeyID|body|object|false|none|
|» AutoVerifiedAttributes|body|object|false|none|
|» AliasAttributes|body|object|false|none|
|» UsernameAttributes|body|object|false|none|
|» SmsVerificationMessage|body|object|false|none|
|» EmailVerificationMessage|body|object|false|none|
|» EmailVerificationSubject|body|object|false|none|
|» VerificationMessageTemplate|body|object|false|none|
|» » SmsMessage|body|object|false|none|
|» » EmailMessage|body|object|false|none|
|» » EmailSubject|body|object|false|none|
|» » EmailMessageByLink|body|object|false|none|
|» » EmailSubjectByLink|body|object|false|none|
|» » DefaultEmailOption|body|object|false|none|
|» SmsAuthenticationMessage|body|object|false|none|
|» MfaConfiguration|body|object|false|none|
|» UserAttributeUpdateSettings|body|object|false|none|
|» » AttributesRequireVerificationBeforeUpdate|body|object|false|none|
|» DeviceConfiguration|body|object|false|none|
|» » ChallengeRequiredOnNewDevice|body|object|false|none|
|» » DeviceOnlyRememberedOnUserPrompt|body|object|false|none|
|» EmailConfiguration|body|object|false|none|
|» » SourceArn|body|object|false|none|
|» » ReplyToEmailAddress|body|object|false|none|
|» » EmailSendingAccount|body|object|false|none|
|» » From|body|object|false|none|
|» » ConfigurationSet|body|object|false|none|
|» SmsConfiguration|body|object|false|none|
|» » SnsCallerArn|body|object|true|none|
|» » ExternalId|body|object|false|none|
|» » SnsRegion|body|object|false|none|
|» UserPoolTags|body|object|false|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|
|» AdminCreateUserConfig|body|object|false|none|
|» » AllowAdminCreateUserOnly|body|object|false|none|
|» » UnusedAccountValidityDays|body|object|false|none|
|» » InviteMessageTemplate|body|object|false|none|
|» » » SMSMessage|body|object|false|none|
|» » » EmailMessage|body|object|false|none|
|» » » EmailSubject|body|object|false|none|
|» Schema|body|object|false|none|
|» UserPoolAddOns|body|object|false|none|
|» » AdvancedSecurityMode|body|object|true|none|
|» UsernameConfiguration|body|object|false|none|
|» » CaseSensitive|body|object|true|none|
|» AccountRecoverySetting|body|object|false|none|
|» » RecoveryMechanisms|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateUserPool|

> Example responses

> 200 Response

```json
{
  "UserPool": {
    "Id": {},
    "Name": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "Status": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "SchemaAttributes": {},
    "AutoVerifiedAttributes": {},
    "AliasAttributes": {},
    "UsernameAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "MfaConfiguration": {},
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EstimatedNumberOfUsers": {},
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "SmsConfigurationFailure": {},
    "EmailConfigurationFailure": {},
    "Domain": {},
    "CustomDomain": {},
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "UsernameConfiguration": {
      "CaseSensitive": {}
    },
    "Arn": {},
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createuserpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserPoolResponse](#schemacreateuserpoolresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|484|484|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|485|485|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|486|486|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|487|487|UserPoolTaggingException|[UserPoolTaggingException](#schemauserpooltaggingexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserPoolClient

<a id="opIdCreateUserPoolClient"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateUserPoolClient' \
  -d '{
    "UserPoolId": {},
    "ClientName": {},
    "GenerateSecret": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient`

<p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientName": {},
  "GenerateSecret": {},
  "RefreshTokenValidity": {},
  "AccessTokenValidity": {},
  "IdTokenValidity": {},
  "TokenValidityUnits": {
    "AccessToken": {},
    "IdToken": {},
    "RefreshToken": {}
  },
  "ReadAttributes": {},
  "WriteAttributes": {},
  "ExplicitAuthFlows": {},
  "SupportedIdentityProviders": {},
  "CallbackURLs": {},
  "LogoutURLs": {},
  "DefaultRedirectURI": {},
  "AllowedOAuthFlows": {},
  "AllowedOAuthScopes": {},
  "AllowedOAuthFlowsUserPoolClient": {},
  "AnalyticsConfiguration": {
    "ApplicationId": {},
    "ApplicationArn": {},
    "RoleArn": {},
    "ExternalId": {},
    "UserDataShared": {}
  },
  "PreventUserExistenceErrors": {},
  "EnableTokenRevocation": {},
  "EnablePropagateAdditionalUserContextData": {},
  "AuthSessionValidity": {}
}
```

<h3 id="createuserpoolclient-parameters">Parameters</h3>

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
|body|body|[CreateUserPoolClientRequest](#schemacreateuserpoolclientrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientName|body|object|true|none|
|» GenerateSecret|body|object|false|none|
|» RefreshTokenValidity|body|object|false|none|
|» AccessTokenValidity|body|object|false|none|
|» IdTokenValidity|body|object|false|none|
|» TokenValidityUnits|body|object|false|none|
|» » AccessToken|body|object|false|none|
|» » IdToken|body|object|false|none|
|» » RefreshToken|body|object|false|none|
|» ReadAttributes|body|object|false|none|
|» WriteAttributes|body|object|false|none|
|» ExplicitAuthFlows|body|object|false|none|
|» SupportedIdentityProviders|body|object|false|none|
|» CallbackURLs|body|object|false|none|
|» LogoutURLs|body|object|false|none|
|» DefaultRedirectURI|body|object|false|none|
|» AllowedOAuthFlows|body|object|false|none|
|» AllowedOAuthScopes|body|object|false|none|
|» AllowedOAuthFlowsUserPoolClient|body|object|false|none|
|» AnalyticsConfiguration|body|object|false|none|
|» » ApplicationId|body|object|false|none|
|» » ApplicationArn|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » ExternalId|body|object|false|none|
|» » UserDataShared|body|object|false|none|
|» PreventUserExistenceErrors|body|object|false|none|
|» EnableTokenRevocation|body|object|false|none|
|» EnablePropagateAdditionalUserContextData|body|object|false|none|
|» AuthSessionValidity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateUserPoolClient|

> Example responses

> 200 Response

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
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

<h3 id="createuserpoolclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserPoolClientResponse](#schemacreateuserpoolclientresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|ScopeDoesNotExistException|[ScopeDoesNotExistException](#schemascopedoesnotexistexception)|
|486|486|InvalidOAuthFlowException|[InvalidOAuthFlowException](#schemainvalidoauthflowexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserPoolDomain

<a id="opIdCreateUserPoolDomain"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.CreateUserPoolDomain' \
  -d '{
    "Domain": {},
    "UserPoolId": {},
    "CustomDomainConfig": {
      "CertificateArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain`

<p>Creates a new domain for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "Domain": {},
  "UserPoolId": {},
  "CustomDomainConfig": {
    "CertificateArn": {}
  }
}
```

<h3 id="createuserpooldomain-parameters">Parameters</h3>

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
|body|body|[CreateUserPoolDomainRequest](#schemacreateuserpooldomainrequest)|true|none|
|» Domain|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» CustomDomainConfig|body|object|false|none|
|» » CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.CreateUserPoolDomain|

> Example responses

> 200 Response

```json
{
  "CloudFrontDomain": {}
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

<h3 id="createuserpooldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserPoolDomainResponse](#schemacreateuserpooldomainresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteGroup' \
  -d '{
    "GroupName": {},
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup`

<p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>

> Body parameter

```json
{
  "GroupName": {},
  "UserPoolId": {}
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
|» GroupName|body|object|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteGroup|

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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIdentityProvider

<a id="opIdDeleteIdentityProvider"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteIdentityProvider' \
  -d '{
    "UserPoolId": {},
    "ProviderName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider`

Deletes an IdP for a user pool.

> Body parameter

```json
{
  "UserPoolId": {},
  "ProviderName": {}
}
```

<h3 id="deleteidentityprovider-parameters">Parameters</h3>

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
|body|body|[DeleteIdentityProviderRequest](#schemadeleteidentityproviderrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ProviderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteIdentityProvider|

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

<h3 id="deleteidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|UnsupportedIdentityProviderException|[UnsupportedIdentityProviderException](#schemaunsupportedidentityproviderexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceServer

<a id="opIdDeleteResourceServer"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteResourceServer' \
  -d '{
    "UserPoolId": {},
    "Identifier": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer`

Deletes a resource server.

> Body parameter

```json
{
  "UserPoolId": {},
  "Identifier": {}
}
```

<h3 id="deleteresourceserver-parameters">Parameters</h3>

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
|body|body|[DeleteResourceServerRequest](#schemadeleteresourceserverrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Identifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteResourceServer|

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

<h3 id="deleteresourceserver-responses">Responses</h3>

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

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteUser' \
  -d '{
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser`

<p>Allows a user to delete their own user profile.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {}
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
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteUser|

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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|485|485|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|486|486|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|488|488|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserAttributes

<a id="opIdDeleteUserAttributes"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteUserAttributes' \
  -d '{
    "UserAttributeNames": {},
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes`

<p>Deletes the attributes for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "UserAttributeNames": {},
  "AccessToken": {}
}
```

<h3 id="deleteuserattributes-parameters">Parameters</h3>

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
|body|body|[DeleteUserAttributesRequest](#schemadeleteuserattributesrequest)|true|none|
|» UserAttributeNames|body|object|true|none|
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteUserAttributes|

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

<h3 id="deleteuserattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserAttributesResponse](#schemadeleteuserattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|485|485|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|486|486|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|488|488|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserPool

<a id="opIdDeleteUserPool"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteUserPool' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool`

Deletes the specified Amazon Cognito user pool.

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="deleteuserpool-parameters">Parameters</h3>

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
|body|body|[DeleteUserPoolRequest](#schemadeleteuserpoolrequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteUserPool|

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

<h3 id="deleteuserpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserImportInProgressException|[UserImportInProgressException](#schemauserimportinprogressexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserPoolClient

<a id="opIdDeleteUserPoolClient"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteUserPoolClient' \
  -d '{
    "UserPoolId": {},
    "ClientId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient`

Allows the developer to delete the user pool client.

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

<h3 id="deleteuserpoolclient-parameters">Parameters</h3>

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
|body|body|[DeleteUserPoolClientRequest](#schemadeleteuserpoolclientrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteUserPoolClient|

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

<h3 id="deleteuserpoolclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserPoolDomain

<a id="opIdDeleteUserPoolDomain"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DeleteUserPoolDomain' \
  -d '{
    "Domain": {},
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain`

Deletes a domain for a user pool.

> Body parameter

```json
{
  "Domain": {},
  "UserPoolId": {}
}
```

<h3 id="deleteuserpooldomain-parameters">Parameters</h3>

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
|body|body|[DeleteUserPoolDomainRequest](#schemadeleteuserpooldomainrequest)|true|none|
|» Domain|body|object|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DeleteUserPoolDomain|

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

<h3 id="deleteuserpooldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserPoolDomainResponse](#schemadeleteuserpooldomainresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityProvider

<a id="opIdDescribeIdentityProvider"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeIdentityProvider' \
  -d '{
    "UserPoolId": {},
    "ProviderName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider`

Gets information about a specific IdP.

> Body parameter

```json
{
  "UserPoolId": {},
  "ProviderName": {}
}
```

<h3 id="describeidentityprovider-parameters">Parameters</h3>

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
|body|body|[DescribeIdentityProviderRequest](#schemadescribeidentityproviderrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ProviderName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeIdentityProvider|

> Example responses

> 200 Response

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="describeidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIdentityProviderResponse](#schemadescribeidentityproviderresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourceServer

<a id="opIdDescribeResourceServer"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeResourceServer' \
  -d '{
    "UserPoolId": {},
    "Identifier": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer`

Describes a resource server.

> Body parameter

```json
{
  "UserPoolId": {},
  "Identifier": {}
}
```

<h3 id="describeresourceserver-parameters">Parameters</h3>

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
|body|body|[DescribeResourceServerRequest](#schemadescriberesourceserverrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Identifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeResourceServer|

> Example responses

> 200 Response

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
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

<h3 id="describeresourceserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourceServerResponse](#schemadescriberesourceserverresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRiskConfiguration

<a id="opIdDescribeRiskConfiguration"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeRiskConfiguration' \
  -d '{
    "UserPoolId": {},
    "ClientId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration`

Describes the risk configuration.

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

<h3 id="describeriskconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeRiskConfigurationRequest](#schemadescriberiskconfigurationrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeRiskConfiguration|

> Example responses

> 200 Response

```json
{
  "RiskConfiguration": {
    "UserPoolId": {},
    "ClientId": {},
    "CompromisedCredentialsRiskConfiguration": {
      "EventFilter": {},
      "Actions": {
        "EventAction": {}
      }
    },
    "AccountTakeoverRiskConfiguration": {
      "NotifyConfiguration": {
        "From": {},
        "ReplyTo": {},
        "SourceArn": {},
        "BlockEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "NoActionEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "MfaEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        }
      },
      "Actions": {
        "LowAction": {
          "Notify": {},
          "EventAction": {}
        },
        "MediumAction": {
          "Notify": {},
          "EventAction": {}
        },
        "HighAction": {
          "Notify": {},
          "EventAction": {}
        }
      }
    },
    "RiskExceptionConfiguration": {
      "BlockedIPRangeList": {},
      "SkippedIPRangeList": {}
    },
    "LastModifiedDate": {}
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

<h3 id="describeriskconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRiskConfigurationResponse](#schemadescriberiskconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserPoolAddOnNotEnabledException|[UserPoolAddOnNotEnabledException](#schemauserpooladdonnotenabledexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserImportJob

<a id="opIdDescribeUserImportJob"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeUserImportJob' \
  -d '{
    "UserPoolId": {},
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob`

Describes the user import job.

> Body parameter

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

<h3 id="describeuserimportjob-parameters">Parameters</h3>

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
|body|body|[DescribeUserImportJobRequest](#schemadescribeuserimportjobrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeUserImportJob|

> Example responses

> 200 Response

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
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

<h3 id="describeuserimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserImportJobResponse](#schemadescribeuserimportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserPool

<a id="opIdDescribeUserPool"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeUserPool' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool`

<p>Returns the configuration information and metadata of the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="describeuserpool-parameters">Parameters</h3>

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
|body|body|[DescribeUserPoolRequest](#schemadescribeuserpoolrequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeUserPool|

> Example responses

> 200 Response

```json
{
  "UserPool": {
    "Id": {},
    "Name": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "Status": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "SchemaAttributes": {},
    "AutoVerifiedAttributes": {},
    "AliasAttributes": {},
    "UsernameAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "MfaConfiguration": {},
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EstimatedNumberOfUsers": {},
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "SmsConfigurationFailure": {},
    "EmailConfigurationFailure": {},
    "Domain": {},
    "CustomDomain": {},
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "UsernameConfiguration": {
      "CaseSensitive": {}
    },
    "Arn": {},
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
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

<h3 id="describeuserpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserPoolResponse](#schemadescribeuserpoolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserPoolTaggingException|[UserPoolTaggingException](#schemauserpooltaggingexception)|
|485|485|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserPoolClient

<a id="opIdDescribeUserPoolClient"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeUserPoolClient' \
  -d '{
    "UserPoolId": {},
    "ClientId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient`

<p>Client method for returning the configuration information and metadata of the specified user pool app client.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

<h3 id="describeuserpoolclient-parameters">Parameters</h3>

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
|body|body|[DescribeUserPoolClientRequest](#schemadescribeuserpoolclientrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeUserPoolClient|

> Example responses

> 200 Response

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
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

<h3 id="describeuserpoolclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserPoolClientResponse](#schemadescribeuserpoolclientresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserPoolDomain

<a id="opIdDescribeUserPoolDomain"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.DescribeUserPoolDomain' \
  -d '{
    "Domain": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain`

Gets information about a domain.

> Body parameter

```json
{
  "Domain": {}
}
```

<h3 id="describeuserpooldomain-parameters">Parameters</h3>

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
|body|body|[DescribeUserPoolDomainRequest](#schemadescribeuserpooldomainrequest)|true|none|
|» Domain|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.DescribeUserPoolDomain|

> Example responses

> 200 Response

```json
{
  "DomainDescription": {
    "UserPoolId": {},
    "AWSAccountId": {},
    "Domain": {},
    "S3Bucket": {},
    "CloudFrontDistribution": {},
    "Version": {},
    "Status": {},
    "CustomDomainConfig": {
      "CertificateArn": {}
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

<h3 id="describeuserpooldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserPoolDomainResponse](#schemadescribeuserpooldomainresponse)|
|480|480|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ForgetDevice

<a id="opIdForgetDevice"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ForgetDevice' \
  -d '{
    "AccessToken": {},
    "DeviceKey": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice`

<p>Forgets the specified device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "DeviceKey": {}
}
```

<h3 id="forgetdevice-parameters">Parameters</h3>

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
|body|body|[ForgetDeviceRequest](#schemaforgetdevicerequest)|true|none|
|» AccessToken|body|object|false|none|
|» DeviceKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ForgetDevice|

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

<h3 id="forgetdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|485|485|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|486|486|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|487|487|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|489|489|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ForgotPassword

<a id="opIdForgotPassword"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ForgotPassword' \
  -d '{
    "ClientId": {},
    "SecretHash": {},
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "Username": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword`

<p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <p>If neither a verified phone number nor a verified email exists, this API returns <code>InvalidParameterException</code>. If your app client has a client secret and you don't provide a <code>SECRET_HASH</code> parameter, this API returns <code>NotAuthorizedException</code>.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "SecretHash": {},
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "Username": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="forgotpassword-parameters">Parameters</h3>

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
|body|body|[ForgotPasswordRequest](#schemaforgotpasswordrequest)|true|none|
|» ClientId|body|object|true|none|
|» SecretHash|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» Username|body|object|true|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ForgotPassword|

> Example responses

> 200 Response

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="forgotpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ForgotPasswordResponse](#schemaforgotpasswordresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|488|488|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|489|489|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|490|490|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|491|491|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|492|492|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|493|493|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|494|494|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCSVHeader

<a id="opIdGetCSVHeader"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetCSVHeader' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader`

Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="getcsvheader-parameters">Parameters</h3>

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
|body|body|[GetCSVHeaderRequest](#schemagetcsvheaderrequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetCSVHeader|

> Example responses

> 200 Response

```json
{
  "UserPoolId": {},
  "CSVHeader": {}
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

<h3 id="getcsvheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCSVHeaderResponse](#schemagetcsvheaderresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevice

<a id="opIdGetDevice"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetDevice' \
  -d '{
    "DeviceKey": {},
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice`

<p>Gets the device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "DeviceKey": {},
  "AccessToken": {}
}
```

<h3 id="getdevice-parameters">Parameters</h3>

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
|body|body|[GetDeviceRequest](#schemagetdevicerequest)|true|none|
|» DeviceKey|body|object|true|none|
|» AccessToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetDevice|

> Example responses

> 200 Response

```json
{
  "Device": {
    "DeviceKey": {},
    "DeviceAttributes": {},
    "DeviceCreateDate": {},
    "DeviceLastModifiedDate": {},
    "DeviceLastAuthenticatedDate": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="getdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceResponse](#schemagetdeviceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|486|486|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|487|487|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|489|489|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroup

<a id="opIdGetGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetGroup' \
  -d '{
    "GroupName": {},
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup`

<p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>

> Body parameter

```json
{
  "GroupName": {},
  "UserPoolId": {}
}
```

<h3 id="getgroup-parameters">Parameters</h3>

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
|body|body|[GetGroupRequest](#schemagetgrouprequest)|true|none|
|» GroupName|body|object|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetGroup|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="getgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupResponse](#schemagetgroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIdentityProviderByIdentifier

<a id="opIdGetIdentityProviderByIdentifier"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier' \
  -d '{
    "UserPoolId": {},
    "IdpIdentifier": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier`

Gets the specified IdP.

> Body parameter

```json
{
  "UserPoolId": {},
  "IdpIdentifier": {}
}
```

<h3 id="getidentityproviderbyidentifier-parameters">Parameters</h3>

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
|body|body|[GetIdentityProviderByIdentifierRequest](#schemagetidentityproviderbyidentifierrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» IdpIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier|

> Example responses

> 200 Response

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="getidentityproviderbyidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityProviderByIdentifierResponse](#schemagetidentityproviderbyidentifierresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLogDeliveryConfiguration

<a id="opIdGetLogDeliveryConfiguration"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration`

Gets the detailed activity logging configuration for a user pool.

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="getlogdeliveryconfiguration-parameters">Parameters</h3>

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
|body|body|[GetLogDeliveryConfigurationRequest](#schemagetlogdeliveryconfigurationrequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration|

> Example responses

> 200 Response

```json
{
  "LogDeliveryConfiguration": {
    "UserPoolId": {},
    "LogConfigurations": {}
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

<h3 id="getlogdeliveryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLogDeliveryConfigurationResponse](#schemagetlogdeliveryconfigurationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSigningCertificate

<a id="opIdGetSigningCertificate"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetSigningCertificate' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate`

<p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="getsigningcertificate-parameters">Parameters</h3>

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
|body|body|[GetSigningCertificateRequest](#schemagetsigningcertificaterequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetSigningCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {}
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

<h3 id="getsigningcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSigningCertificateResponse](#schemagetsigningcertificateresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUICustomization

<a id="opIdGetUICustomization"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetUICustomization' \
  -d '{
    "UserPoolId": {},
    "ClientId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization`

Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

<h3 id="getuicustomization-parameters">Parameters</h3>

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
|body|body|[GetUICustomizationRequest](#schemagetuicustomizationrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetUICustomization|

> Example responses

> 200 Response

```json
{
  "UICustomization": {
    "UserPoolId": {},
    "ClientId": {},
    "ImageUrl": {},
    "CSS": {},
    "CSSVersion": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="getuicustomization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUICustomizationResponse](#schemagetuicustomizationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUser

<a id="opIdGetUser"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetUser' \
  -d '{
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser`

<p>Gets the user attributes and metadata for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {}
}
```

<h3 id="getuser-parameters">Parameters</h3>

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
|body|body|[GetUserRequest](#schemagetuserrequest)|true|none|
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetUser|

> Example responses

> 200 Response

```json
{
  "Username": {},
  "UserAttributes": {},
  "MFAOptions": {},
  "PreferredMfaSetting": {},
  "UserMFASettingList": {}
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

<h3 id="getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserResponse](#schemagetuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|485|485|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|486|486|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|488|488|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUserAttributeVerificationCode

<a id="opIdGetUserAttributeVerificationCode"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode' \
  -d '{
    "AccessToken": {},
    "AttributeName": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode`

<p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "AttributeName": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getuserattributeverificationcode-parameters">Parameters</h3>

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
|body|body|[GetUserAttributeVerificationCodeRequest](#schemagetuserattributeverificationcoderequest)|true|none|
|» AccessToken|body|object|true|none|
|» AttributeName|body|object|true|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode|

> Example responses

> 200 Response

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

<h3 id="getuserattributeverificationcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserAttributeVerificationCodeResponse](#schemagetuserattributeverificationcoderesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|485|485|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|486|486|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|487|487|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|488|488|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|489|489|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|490|490|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|491|491|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|492|492|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|493|493|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|494|494|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|495|495|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|496|496|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUserPoolMfaConfig

<a id="opIdGetUserPoolMfaConfig"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GetUserPoolMfaConfig' \
  -d '{
    "UserPoolId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig`

Gets the user pool multi-factor authentication (MFA) configuration.

> Body parameter

```json
{
  "UserPoolId": {}
}
```

<h3 id="getuserpoolmfaconfig-parameters">Parameters</h3>

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
|body|body|[GetUserPoolMfaConfigRequest](#schemagetuserpoolmfaconfigrequest)|true|none|
|» UserPoolId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GetUserPoolMfaConfig|

> Example responses

> 200 Response

```json
{
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
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

<h3 id="getuserpoolmfaconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserPoolMfaConfigResponse](#schemagetuserpoolmfaconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GlobalSignOut

<a id="opIdGlobalSignOut"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.GlobalSignOut' \
  -d '{
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut`

<p>Signs out a user from all devices. <code>GlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn't aware that a user's access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {}
}
```

<h3 id="globalsignout-parameters">Parameters</h3>

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
|body|body|[GlobalSignOutRequest](#schemaglobalsignoutrequest)|true|none|
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.GlobalSignOut|

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

<h3 id="globalsignout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GlobalSignOutResponse](#schemaglobalsignoutresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|485|485|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|487|487|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateAuth

<a id="opIdInitiateAuth"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
  -d '{
    "AuthFlow": {},
    "AuthParameters": {
      "property1": "string",
      "property2": "string"
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "ClientId": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth`

<p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "AuthFlow": {},
  "AuthParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "ClientId": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  }
}
```

<h3 id="initiateauth-parameters">Parameters</h3>

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
|body|body|[InitiateAuthRequest](#schemainitiateauthrequest)|true|none|
|» AuthFlow|body|object|true|none|
|» AuthParameters|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» ClientId|body|object|true|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.InitiateAuth|

> Example responses

> 200 Response

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="initiateauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InitiateAuthResponse](#schemainitiateauthresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|485|485|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|486|486|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|487|487|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|488|488|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|489|489|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|490|490|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|491|491|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|492|492|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|493|493|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|494|494|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevices

<a id="opIdListDevices"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListDevices' \
  -d '{
    "AccessToken": {},
    "Limit": {},
    "PaginationToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices`

<p>Lists the sign-in devices that Amazon Cognito has registered to the current user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "Limit": {},
  "PaginationToken": {}
}
```

<h3 id="listdevices-parameters">Parameters</h3>

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
|body|body|[ListDevicesRequest](#schemalistdevicesrequest)|true|none|
|» AccessToken|body|object|true|none|
|» Limit|body|object|false|none|
|» PaginationToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListDevices|

> Example responses

> 200 Response

```json
{
  "Devices": {},
  "PaginationToken": {}
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

> 489 Response

```json
null
```

<h3 id="listdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicesResponse](#schemalistdevicesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|486|486|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|487|487|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|489|489|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListGroups' \
  -d '{
    "UserPoolId": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups`

<p>Lists the groups associated with a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
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
|» UserPoolId|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListGroups|

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

> 484 Response

```json
null
```

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsResponse](#schemalistgroupsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentityProviders

<a id="opIdListIdentityProviders"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListIdentityProviders' \
  -d '{
    "UserPoolId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders`

<p>Lists information about all IdPs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listidentityproviders-parameters">Parameters</h3>

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
|body|body|[ListIdentityProvidersRequest](#schemalistidentityprovidersrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListIdentityProviders|

> Example responses

> 200 Response

```json
{
  "Providers": {},
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

<h3 id="listidentityproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityProvidersResponse](#schemalistidentityprovidersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceServers

<a id="opIdListResourceServers"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListResourceServers' \
  -d '{
    "UserPoolId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers`

<p>Lists the resource servers for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listresourceservers-parameters">Parameters</h3>

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
|body|body|[ListResourceServersRequest](#schemalistresourceserversrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListResourceServers|

> Example responses

> 200 Response

```json
{
  "ResourceServers": {},
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

<h3 id="listresourceservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceServersResponse](#schemalistresourceserversresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource`

<p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListTagsForResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUserImportJobs

<a id="opIdListUserImportJobs"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListUserImportJobs' \
  -d '{
    "UserPoolId": {},
    "MaxResults": {},
    "PaginationToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs`

<p>Lists user import jobs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "PaginationToken": {}
}
```

<h3 id="listuserimportjobs-parameters">Parameters</h3>

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
|body|body|[ListUserImportJobsRequest](#schemalistuserimportjobsrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» MaxResults|body|object|true|none|
|» PaginationToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListUserImportJobs|

> Example responses

> 200 Response

```json
{
  "UserImportJobs": {},
  "PaginationToken": {}
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

<h3 id="listuserimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUserImportJobsResponse](#schemalistuserimportjobsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUserPoolClients

<a id="opIdListUserPoolClients"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListUserPoolClients' \
  -d '{
    "UserPoolId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients`

<p>Lists the clients that have been created for the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listuserpoolclients-parameters">Parameters</h3>

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
|body|body|[ListUserPoolClientsRequest](#schemalistuserpoolclientsrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListUserPoolClients|

> Example responses

> 200 Response

```json
{
  "UserPoolClients": {},
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

<h3 id="listuserpoolclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUserPoolClientsResponse](#schemalistuserpoolclientsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUserPools

<a id="opIdListUserPools"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListUserPools' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools`

<p>Lists the user pools associated with an Amazon Web Services account.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listuserpools-parameters">Parameters</h3>

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
|body|body|[ListUserPoolsRequest](#schemalistuserpoolsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListUserPools|

> Example responses

> 200 Response

```json
{
  "UserPools": {},
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

<h3 id="listuserpools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUserPoolsResponse](#schemalistuserpoolsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListUsers' \
  -d '{
    "UserPoolId": {},
    "AttributesToGet": {},
    "Limit": {},
    "PaginationToken": {},
    "Filter": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers`

<p>Lists users and their basic details in a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "AttributesToGet": {},
  "Limit": {},
  "PaginationToken": {},
  "Filter": {}
}
```

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|PaginationToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListUsersRequest](#schemalistusersrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» AttributesToGet|body|object|false|none|
|» Limit|body|object|false|none|
|» PaginationToken|body|object|false|none|
|» Filter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListUsers|

> Example responses

> 200 Response

```json
{
  "Users": {},
  "PaginationToken": {}
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsersInGroup

<a id="opIdListUsersInGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ListUsersInGroup' \
  -d '{
    "UserPoolId": {},
    "GroupName": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup`

<p>Lists the users in the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "GroupName": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listusersingroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListUsersInGroupRequest](#schemalistusersingrouprequest)|true|none|
|» UserPoolId|body|object|true|none|
|» GroupName|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ListUsersInGroup|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listusersingroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersInGroupResponse](#schemalistusersingroupresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResendConfirmationCode

<a id="opIdResendConfirmationCode"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.ResendConfirmationCode' \
  -d '{
    "ClientId": {},
    "SecretHash": {},
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "Username": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode`

<p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "SecretHash": {},
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "Username": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="resendconfirmationcode-parameters">Parameters</h3>

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
|body|body|[ResendConfirmationCodeRequest](#schemaresendconfirmationcoderequest)|true|none|
|» ClientId|body|object|true|none|
|» SecretHash|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» Username|body|object|true|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.ResendConfirmationCode|

> Example responses

> 200 Response

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="resendconfirmationcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResendConfirmationCodeResponse](#schemaresendconfirmationcoderesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|488|488|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|489|489|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|490|490|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|491|491|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|492|492|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|493|493|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|494|494|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RespondToAuthChallenge

<a id="opIdRespondToAuthChallenge"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.RespondToAuthChallenge' \
  -d '{
    "ClientId": {},
    "ChallengeName": {},
    "Session": {},
    "ChallengeResponses": {
      "property1": "string",
      "property2": "string"
    },
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge`

<p>Responds to the authentication challenge.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "ChallengeName": {},
  "Session": {},
  "ChallengeResponses": {
    "property1": "string",
    "property2": "string"
  },
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="respondtoauthchallenge-parameters">Parameters</h3>

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
|body|body|[RespondToAuthChallengeRequest](#schemarespondtoauthchallengerequest)|true|none|
|» ClientId|body|object|true|none|
|» ChallengeName|body|object|true|none|
|» Session|body|object|false|none|
|» ChallengeResponses|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.RespondToAuthChallenge|

> Example responses

> 200 Response

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

<h3 id="respondtoauthchallenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RespondToAuthChallengeResponse](#schemarespondtoauthchallengeresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|484|484|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|485|485|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|486|486|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|487|487|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|488|488|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|489|489|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|490|490|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|491|491|MFAMethodNotFoundException|[MFAMethodNotFoundException](#schemamfamethodnotfoundexception)|
|492|492|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|493|493|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|494|494|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|495|495|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|496|496|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|497|497|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|498|498|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|499|499|SoftwareTokenMFANotFoundException|[SoftwareTokenMFANotFoundException](#schemasoftwaretokenmfanotfoundexception)|
|500|Internal Server Error|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeToken

<a id="opIdRevokeToken"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.RevokeToken' \
  -d '{
    "Token": {},
    "ClientId": {},
    "ClientSecret": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken`

<p>Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "Token": {},
  "ClientId": {},
  "ClientSecret": {}
}
```

<h3 id="revoketoken-parameters">Parameters</h3>

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
|body|body|[RevokeTokenRequest](#schemarevoketokenrequest)|true|none|
|» Token|body|object|true|none|
|» ClientId|body|object|true|none|
|» ClientSecret|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.RevokeToken|

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

<h3 id="revoketoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeTokenResponse](#schemarevoketokenresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|UnsupportedTokenTypeException|[UnsupportedTokenTypeException](#schemaunsupportedtokentypeexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetLogDeliveryConfiguration

<a id="opIdSetLogDeliveryConfiguration"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration' \
  -d '{
    "UserPoolId": {},
    "LogConfigurations": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration`

Sets up or modifies the detailed activity logging configuration of a user pool.

> Body parameter

```json
{
  "UserPoolId": {},
  "LogConfigurations": {}
}
```

<h3 id="setlogdeliveryconfiguration-parameters">Parameters</h3>

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
|body|body|[SetLogDeliveryConfigurationRequest](#schemasetlogdeliveryconfigurationrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» LogConfigurations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration|

> Example responses

> 200 Response

```json
{
  "LogDeliveryConfiguration": {
    "UserPoolId": {},
    "LogConfigurations": {}
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

<h3 id="setlogdeliveryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetLogDeliveryConfigurationResponse](#schemasetlogdeliveryconfigurationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetRiskConfiguration

<a id="opIdSetRiskConfiguration"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetRiskConfiguration' \
  -d '{
    "UserPoolId": {},
    "ClientId": {},
    "CompromisedCredentialsRiskConfiguration": {
      "EventFilter": {},
      "Actions": {
        "EventAction": {}
      }
    },
    "AccountTakeoverRiskConfiguration": {
      "NotifyConfiguration": {
        "From": {},
        "ReplyTo": {},
        "SourceArn": {},
        "BlockEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "NoActionEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "MfaEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        }
      },
      "Actions": {
        "LowAction": {
          "Notify": {},
          "EventAction": {}
        },
        "MediumAction": {
          "Notify": {},
          "EventAction": {}
        },
        "HighAction": {
          "Notify": {},
          "EventAction": {}
        }
      }
    },
    "RiskExceptionConfiguration": {
      "BlockedIPRangeList": {},
      "SkippedIPRangeList": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration`

<p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "CompromisedCredentialsRiskConfiguration": {
    "EventFilter": {},
    "Actions": {
      "EventAction": {}
    }
  },
  "AccountTakeoverRiskConfiguration": {
    "NotifyConfiguration": {
      "From": {},
      "ReplyTo": {},
      "SourceArn": {},
      "BlockEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "NoActionEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "MfaEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      }
    },
    "Actions": {
      "LowAction": {
        "Notify": {},
        "EventAction": {}
      },
      "MediumAction": {
        "Notify": {},
        "EventAction": {}
      },
      "HighAction": {
        "Notify": {},
        "EventAction": {}
      }
    }
  },
  "RiskExceptionConfiguration": {
    "BlockedIPRangeList": {},
    "SkippedIPRangeList": {}
  }
}
```

<h3 id="setriskconfiguration-parameters">Parameters</h3>

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
|body|body|[SetRiskConfigurationRequest](#schemasetriskconfigurationrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|false|none|
|» CompromisedCredentialsRiskConfiguration|body|object|false|none|
|» » EventFilter|body|object|false|none|
|» » Actions|body|object|true|none|
|» » » EventAction|body|object|true|none|
|» AccountTakeoverRiskConfiguration|body|object|false|none|
|» » NotifyConfiguration|body|object|false|none|
|» » » From|body|object|false|none|
|» » » ReplyTo|body|object|false|none|
|» » » SourceArn|body|object|true|none|
|» » » BlockEmail|body|object|false|none|
|» » » » Subject|body|object|true|none|
|» » » » HtmlBody|body|object|false|none|
|» » » » TextBody|body|object|false|none|
|» » » NoActionEmail|body|object|false|none|
|» » » » Subject|body|object|true|none|
|» » » » HtmlBody|body|object|false|none|
|» » » » TextBody|body|object|false|none|
|» » » MfaEmail|body|object|false|none|
|» » » » Subject|body|object|true|none|
|» » » » HtmlBody|body|object|false|none|
|» » » » TextBody|body|object|false|none|
|» » Actions|body|object|true|none|
|» » » LowAction|body|object|false|none|
|» » » » Notify|body|object|true|none|
|» » » » EventAction|body|object|true|none|
|» » » MediumAction|body|object|false|none|
|» » » » Notify|body|object|true|none|
|» » » » EventAction|body|object|true|none|
|» » » HighAction|body|object|false|none|
|» » » » Notify|body|object|true|none|
|» » » » EventAction|body|object|true|none|
|» RiskExceptionConfiguration|body|object|false|none|
|» » BlockedIPRangeList|body|object|false|none|
|» » SkippedIPRangeList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetRiskConfiguration|

> Example responses

> 200 Response

```json
{
  "RiskConfiguration": {
    "UserPoolId": {},
    "ClientId": {},
    "CompromisedCredentialsRiskConfiguration": {
      "EventFilter": {},
      "Actions": {
        "EventAction": {}
      }
    },
    "AccountTakeoverRiskConfiguration": {
      "NotifyConfiguration": {
        "From": {},
        "ReplyTo": {},
        "SourceArn": {},
        "BlockEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "NoActionEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "MfaEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        }
      },
      "Actions": {
        "LowAction": {
          "Notify": {},
          "EventAction": {}
        },
        "MediumAction": {
          "Notify": {},
          "EventAction": {}
        },
        "HighAction": {
          "Notify": {},
          "EventAction": {}
        }
      }
    },
    "RiskExceptionConfiguration": {
      "BlockedIPRangeList": {},
      "SkippedIPRangeList": {}
    },
    "LastModifiedDate": {}
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

<h3 id="setriskconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetRiskConfigurationResponse](#schemasetriskconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserPoolAddOnNotEnabledException|[UserPoolAddOnNotEnabledException](#schemauserpooladdonnotenabledexception)|
|485|485|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|486|486|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetUICustomization

<a id="opIdSetUICustomization"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetUICustomization' \
  -d '{
    "UserPoolId": {},
    "ClientId": {},
    "CSS": {},
    "ImageFile": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization`

<p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "CSS": {},
  "ImageFile": {}
}
```

<h3 id="setuicustomization-parameters">Parameters</h3>

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
|body|body|[SetUICustomizationRequest](#schemasetuicustomizationrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|false|none|
|» CSS|body|object|false|none|
|» ImageFile|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetUICustomization|

> Example responses

> 200 Response

```json
{
  "UICustomization": {
    "UserPoolId": {},
    "ClientId": {},
    "ImageUrl": {},
    "CSS": {},
    "CSSVersion": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="setuicustomization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetUICustomizationResponse](#schemasetuicustomizationresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetUserMFAPreference

<a id="opIdSetUserMFAPreference"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetUserMFAPreference' \
  -d '{
    "SMSMfaSettings": {
      "Enabled": {},
      "PreferredMfa": {}
    },
    "SoftwareTokenMfaSettings": {
      "Enabled": {},
      "PreferredMfa": {}
    },
    "AccessToken": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference`

<p>Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "SMSMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "SoftwareTokenMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "AccessToken": {}
}
```

<h3 id="setusermfapreference-parameters">Parameters</h3>

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
|body|body|[SetUserMFAPreferenceRequest](#schemasetusermfapreferencerequest)|true|none|
|» SMSMfaSettings|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » PreferredMfa|body|object|false|none|
|» SoftwareTokenMfaSettings|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » PreferredMfa|body|object|false|none|
|» AccessToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetUserMFAPreference|

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

<h3 id="setusermfapreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetUserMFAPreferenceResponse](#schemasetusermfapreferenceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|487|487|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetUserPoolMfaConfig

<a id="opIdSetUserPoolMfaConfig"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetUserPoolMfaConfig' \
  -d '{
    "UserPoolId": {},
    "SmsMfaConfiguration": {
      "SmsAuthenticationMessage": {},
      "SmsConfiguration": {
        "SnsCallerArn": {},
        "ExternalId": {},
        "SnsRegion": {}
      }
    },
    "SoftwareTokenMfaConfiguration": {
      "Enabled": {}
    },
    "MfaConfiguration": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig`

<p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
}
```

<h3 id="setuserpoolmfaconfig-parameters">Parameters</h3>

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
|body|body|[SetUserPoolMfaConfigRequest](#schemasetuserpoolmfaconfigrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» SmsMfaConfiguration|body|object|false|none|
|» » SmsAuthenticationMessage|body|object|false|none|
|» » SmsConfiguration|body|object|false|none|
|» » » SnsCallerArn|body|object|true|none|
|» » » ExternalId|body|object|false|none|
|» » » SnsRegion|body|object|false|none|
|» SoftwareTokenMfaConfiguration|body|object|false|none|
|» » Enabled|body|object|false|none|
|» MfaConfiguration|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetUserPoolMfaConfig|

> Example responses

> 200 Response

```json
{
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
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

<h3 id="setuserpoolmfaconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetUserPoolMfaConfigResponse](#schemasetuserpoolmfaconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|484|484|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetUserSettings

<a id="opIdSetUserSettings"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SetUserSettings' \
  -d '{
    "AccessToken": {},
    "MFAOptions": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings`

<p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "MFAOptions": {}
}
```

<h3 id="setusersettings-parameters">Parameters</h3>

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
|body|body|[SetUserSettingsRequest](#schemasetusersettingsrequest)|true|none|
|» AccessToken|body|object|true|none|
|» MFAOptions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SetUserSettings|

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

<h3 id="setusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetUserSettingsResponse](#schemasetusersettingsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|487|487|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SignUp

<a id="opIdSignUp"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.SignUp' \
  -d '{
    "ClientId": {},
    "SecretHash": {},
    "Username": {},
    "Password": {},
    "UserAttributes": {},
    "ValidationData": {},
    "AnalyticsMetadata": {
      "AnalyticsEndpointId": {}
    },
    "UserContextData": {
      "IpAddress": {},
      "EncodedData": {}
    },
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp`

<p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "Password": {},
  "UserAttributes": {},
  "ValidationData": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="signup-parameters">Parameters</h3>

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
|body|body|[SignUpRequest](#schemasignuprequest)|true|none|
|» ClientId|body|object|true|none|
|» SecretHash|body|object|false|none|
|» Username|body|object|true|none|
|» Password|body|object|true|none|
|» UserAttributes|body|object|false|none|
|» ValidationData|body|object|false|none|
|» AnalyticsMetadata|body|object|false|none|
|» » AnalyticsEndpointId|body|object|false|none|
|» UserContextData|body|object|false|none|
|» » IpAddress|body|object|false|none|
|» » EncodedData|body|object|false|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.SignUp|

> Example responses

> 200 Response

```json
{
  "UserConfirmed": {},
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  },
  "UserSub": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SignUpResponse](#schemasignupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|483|483|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|486|486|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|487|487|UsernameExistsException|[UsernameExistsException](#schemausernameexistsexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|489|489|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|490|490|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|491|491|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|492|492|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|493|493|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|494|494|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartUserImportJob

<a id="opIdStartUserImportJob"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.StartUserImportJob' \
  -d '{
    "UserPoolId": {},
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob`

Starts the user import.

> Body parameter

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

<h3 id="startuserimportjob-parameters">Parameters</h3>

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
|body|body|[StartUserImportJobRequest](#schemastartuserimportjobrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.StartUserImportJob|

> Example responses

> 200 Response

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
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

<h3 id="startuserimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartUserImportJobResponse](#schemastartuserimportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopUserImportJob

<a id="opIdStopUserImportJob"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.StopUserImportJob' \
  -d '{
    "UserPoolId": {},
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob`

Stops the user import job.

> Body parameter

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

<h3 id="stopuserimportjob-parameters">Parameters</h3>

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
|body|body|[StopUserImportJobRequest](#schemastopuserimportjobrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.StopUserImportJob|

> Example responses

> 200 Response

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
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

<h3 id="stopuserimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopUserImportJobResponse](#schemastopuserimportjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|484|484|PreconditionNotMetException|[PreconditionNotMetException](#schemapreconditionnotmetexception)|
|485|485|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource`

<p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.TagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource`

Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAuthEventFeedback

<a id="opIdUpdateAuthEventFeedback"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateAuthEventFeedback' \
  -d '{
    "UserPoolId": {},
    "Username": {},
    "EventId": {},
    "FeedbackToken": {},
    "FeedbackValue": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback`

<p>Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Username": {},
  "EventId": {},
  "FeedbackToken": {},
  "FeedbackValue": {}
}
```

<h3 id="updateautheventfeedback-parameters">Parameters</h3>

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
|body|body|[UpdateAuthEventFeedbackRequest](#schemaupdateautheventfeedbackrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Username|body|object|true|none|
|» EventId|body|object|true|none|
|» FeedbackToken|body|object|true|none|
|» FeedbackValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateAuthEventFeedback|

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

<h3 id="updateautheventfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAuthEventFeedbackResponse](#schemaupdateautheventfeedbackresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|485|485|UserPoolAddOnNotEnabledException|[UserPoolAddOnNotEnabledException](#schemauserpooladdonnotenabledexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeviceStatus

<a id="opIdUpdateDeviceStatus"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateDeviceStatus' \
  -d '{
    "AccessToken": {},
    "DeviceKey": {},
    "DeviceRememberedStatus": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus`

<p>Updates the device status.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "DeviceKey": {},
  "DeviceRememberedStatus": {}
}
```

<h3 id="updatedevicestatus-parameters">Parameters</h3>

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
|body|body|[UpdateDeviceStatusRequest](#schemaupdatedevicestatusrequest)|true|none|
|» AccessToken|body|object|true|none|
|» DeviceKey|body|object|true|none|
|» DeviceRememberedStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateDeviceStatus|

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

<h3 id="updatedevicestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceStatusResponse](#schemaupdatedevicestatusresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|486|486|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|487|487|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|489|489|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroup

<a id="opIdUpdateGroup"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateGroup' \
  -d '{
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup`

<p>Updates the specified group with the specified attributes.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "GroupName": {},
  "UserPoolId": {},
  "Description": {},
  "RoleArn": {},
  "Precedence": {}
}
```

<h3 id="updategroup-parameters">Parameters</h3>

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
|body|body|[UpdateGroupRequest](#schemaupdategrouprequest)|true|none|
|» GroupName|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|false|none|
|» Precedence|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateGroup|

> Example responses

> 200 Response

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupResponse](#schemaupdategroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIdentityProvider

<a id="opIdUpdateIdentityProvider"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateIdentityProvider' \
  -d '{
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider`

<p>Updates IdP information for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ProviderName": {},
  "ProviderDetails": {
    "property1": "string",
    "property2": "string"
  },
  "AttributeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "IdpIdentifiers": {}
}
```

<h3 id="updateidentityprovider-parameters">Parameters</h3>

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
|body|body|[UpdateIdentityProviderRequest](#schemaupdateidentityproviderrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ProviderName|body|object|true|none|
|» ProviderDetails|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» AttributeMapping|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|
|» IdpIdentifiers|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateIdentityProvider|

> Example responses

> 200 Response

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
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

<h3 id="updateidentityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIdentityProviderResponse](#schemaupdateidentityproviderresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|UnsupportedIdentityProviderException|[UnsupportedIdentityProviderException](#schemaunsupportedidentityproviderexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceServer

<a id="opIdUpdateResourceServer"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateResourceServer' \
  -d '{
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer`

<p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Identifier": {},
  "Name": {},
  "Scopes": {}
}
```

<h3 id="updateresourceserver-parameters">Parameters</h3>

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
|body|body|[UpdateResourceServerRequest](#schemaupdateresourceserverrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Identifier|body|object|true|none|
|» Name|body|object|true|none|
|» Scopes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateResourceServer|

> Example responses

> 200 Response

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
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

<h3 id="updateresourceserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceServerResponse](#schemaupdateresourceserverresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserAttributes

<a id="opIdUpdateUserAttributes"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserAttributes' \
  -d '{
    "UserAttributes": {},
    "AccessToken": {},
    "ClientMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes`

<p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "UserAttributes": {},
  "AccessToken": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updateuserattributes-parameters">Parameters</h3>

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
|body|body|[UpdateUserAttributesRequest](#schemaupdateuserattributesrequest)|true|none|
|» UserAttributes|body|object|true|none|
|» AccessToken|body|object|true|none|
|» ClientMetadata|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateUserAttributes|

> Example responses

> 200 Response

```json
{
  "CodeDeliveryDetailsList": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

<h3 id="updateuserattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserAttributesResponse](#schemaupdateuserattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|483|483|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|UnexpectedLambdaException|[UnexpectedLambdaException](#schemaunexpectedlambdaexception)|
|486|486|UserLambdaValidationException|[UserLambdaValidationException](#schemauserlambdavalidationexception)|
|487|487|InvalidLambdaResponseException|[InvalidLambdaResponseException](#schemainvalidlambdaresponseexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|489|489|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|490|490|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|491|491|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|492|492|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|
|493|493|CodeDeliveryFailureException|[CodeDeliveryFailureException](#schemacodedeliveryfailureexception)|
|494|494|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|495|495|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|496|496|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|497|497|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|498|498|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserPool

<a id="opIdUpdateUserPool"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserPool' \
  -d '{
    "UserPoolId": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "AutoVerifiedAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "MfaConfiguration": {},
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool`

<note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": {},
      "RequireUppercase": {},
      "RequireLowercase": {},
      "RequireNumbers": {},
      "RequireSymbols": {},
      "TemporaryPasswordValidityDays": {}
    }
  },
  "DeletionProtection": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "AutoVerifiedAttributes": {},
  "SmsVerificationMessage": {},
  "EmailVerificationMessage": {},
  "EmailVerificationSubject": {},
  "VerificationMessageTemplate": {
    "SmsMessage": {},
    "EmailMessage": {},
    "EmailSubject": {},
    "EmailMessageByLink": {},
    "EmailSubjectByLink": {},
    "DefaultEmailOption": {}
  },
  "SmsAuthenticationMessage": {},
  "UserAttributeUpdateSettings": {
    "AttributesRequireVerificationBeforeUpdate": {}
  },
  "MfaConfiguration": {},
  "DeviceConfiguration": {
    "ChallengeRequiredOnNewDevice": {},
    "DeviceOnlyRememberedOnUserPrompt": {}
  },
  "EmailConfiguration": {
    "SourceArn": {},
    "ReplyToEmailAddress": {},
    "EmailSendingAccount": {},
    "From": {},
    "ConfigurationSet": {}
  },
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  },
  "UserPoolTags": {
    "property1": "string",
    "property2": "string"
  },
  "AdminCreateUserConfig": {
    "AllowAdminCreateUserOnly": {},
    "UnusedAccountValidityDays": {},
    "InviteMessageTemplate": {
      "SMSMessage": {},
      "EmailMessage": {},
      "EmailSubject": {}
    }
  },
  "UserPoolAddOns": {
    "AdvancedSecurityMode": {}
  },
  "AccountRecoverySetting": {
    "RecoveryMechanisms": {}
  }
}
```

<h3 id="updateuserpool-parameters">Parameters</h3>

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
|body|body|[UpdateUserPoolRequest](#schemaupdateuserpoolrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» Policies|body|object|false|none|
|» » PasswordPolicy|body|object|false|none|
|» » » MinimumLength|body|object|false|none|
|» » » RequireUppercase|body|object|false|none|
|» » » RequireLowercase|body|object|false|none|
|» » » RequireNumbers|body|object|false|none|
|» » » RequireSymbols|body|object|false|none|
|» » » TemporaryPasswordValidityDays|body|object|false|none|
|» DeletionProtection|body|object|false|none|
|» LambdaConfig|body|object|false|none|
|» » PreSignUp|body|object|false|none|
|» » CustomMessage|body|object|false|none|
|» » PostConfirmation|body|object|false|none|
|» » PreAuthentication|body|object|false|none|
|» » PostAuthentication|body|object|false|none|
|» » DefineAuthChallenge|body|object|false|none|
|» » CreateAuthChallenge|body|object|false|none|
|» » VerifyAuthChallengeResponse|body|object|false|none|
|» » PreTokenGeneration|body|object|false|none|
|» » UserMigration|body|object|false|none|
|» » CustomSMSSender|body|object|false|none|
|» » » LambdaVersion|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» » CustomEmailSender|body|object|false|none|
|» » » LambdaVersion|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» » KMSKeyID|body|object|false|none|
|» AutoVerifiedAttributes|body|object|false|none|
|» SmsVerificationMessage|body|object|false|none|
|» EmailVerificationMessage|body|object|false|none|
|» EmailVerificationSubject|body|object|false|none|
|» VerificationMessageTemplate|body|object|false|none|
|» » SmsMessage|body|object|false|none|
|» » EmailMessage|body|object|false|none|
|» » EmailSubject|body|object|false|none|
|» » EmailMessageByLink|body|object|false|none|
|» » EmailSubjectByLink|body|object|false|none|
|» » DefaultEmailOption|body|object|false|none|
|» SmsAuthenticationMessage|body|object|false|none|
|» UserAttributeUpdateSettings|body|object|false|none|
|» » AttributesRequireVerificationBeforeUpdate|body|object|false|none|
|» MfaConfiguration|body|object|false|none|
|» DeviceConfiguration|body|object|false|none|
|» » ChallengeRequiredOnNewDevice|body|object|false|none|
|» » DeviceOnlyRememberedOnUserPrompt|body|object|false|none|
|» EmailConfiguration|body|object|false|none|
|» » SourceArn|body|object|false|none|
|» » ReplyToEmailAddress|body|object|false|none|
|» » EmailSendingAccount|body|object|false|none|
|» » From|body|object|false|none|
|» » ConfigurationSet|body|object|false|none|
|» SmsConfiguration|body|object|false|none|
|» » SnsCallerArn|body|object|true|none|
|» » ExternalId|body|object|false|none|
|» » SnsRegion|body|object|false|none|
|» UserPoolTags|body|object|false|none|
|» » **additionalProperties**|body|[TagValueType](#schematagvaluetype)|false|none|
|» AdminCreateUserConfig|body|object|false|none|
|» » AllowAdminCreateUserOnly|body|object|false|none|
|» » UnusedAccountValidityDays|body|object|false|none|
|» » InviteMessageTemplate|body|object|false|none|
|» » » SMSMessage|body|object|false|none|
|» » » EmailMessage|body|object|false|none|
|» » » EmailSubject|body|object|false|none|
|» UserPoolAddOns|body|object|false|none|
|» » AdvancedSecurityMode|body|object|true|none|
|» AccountRecoverySetting|body|object|false|none|
|» » RecoveryMechanisms|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateUserPool|

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

<h3 id="updateuserpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserPoolResponse](#schemaupdateuserpoolresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|UserImportInProgressException|[UserImportInProgressException](#schemauserimportinprogressexception)|
|486|486|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|487|487|InvalidSmsRoleAccessPolicyException|[InvalidSmsRoleAccessPolicyException](#schemainvalidsmsroleaccesspolicyexception)|
|488|488|InvalidSmsRoleTrustRelationshipException|[InvalidSmsRoleTrustRelationshipException](#schemainvalidsmsroletrustrelationshipexception)|
|489|489|UserPoolTaggingException|[UserPoolTaggingException](#schemauserpooltaggingexception)|
|490|490|InvalidEmailRoleAccessPolicyException|[InvalidEmailRoleAccessPolicyException](#schemainvalidemailroleaccesspolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserPoolClient

<a id="opIdUpdateUserPoolClient"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserPoolClient' \
  -d '{
    "UserPoolId": {},
    "ClientId": {},
    "ClientName": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient`

<p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "ClientName": {},
  "RefreshTokenValidity": {},
  "AccessTokenValidity": {},
  "IdTokenValidity": {},
  "TokenValidityUnits": {
    "AccessToken": {},
    "IdToken": {},
    "RefreshToken": {}
  },
  "ReadAttributes": {},
  "WriteAttributes": {},
  "ExplicitAuthFlows": {},
  "SupportedIdentityProviders": {},
  "CallbackURLs": {},
  "LogoutURLs": {},
  "DefaultRedirectURI": {},
  "AllowedOAuthFlows": {},
  "AllowedOAuthScopes": {},
  "AllowedOAuthFlowsUserPoolClient": {},
  "AnalyticsConfiguration": {
    "ApplicationId": {},
    "ApplicationArn": {},
    "RoleArn": {},
    "ExternalId": {},
    "UserDataShared": {}
  },
  "PreventUserExistenceErrors": {},
  "EnableTokenRevocation": {},
  "EnablePropagateAdditionalUserContextData": {},
  "AuthSessionValidity": {}
}
```

<h3 id="updateuserpoolclient-parameters">Parameters</h3>

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
|body|body|[UpdateUserPoolClientRequest](#schemaupdateuserpoolclientrequest)|true|none|
|» UserPoolId|body|object|true|none|
|» ClientId|body|object|true|none|
|» ClientName|body|object|false|none|
|» RefreshTokenValidity|body|object|false|none|
|» AccessTokenValidity|body|object|false|none|
|» IdTokenValidity|body|object|false|none|
|» TokenValidityUnits|body|object|false|none|
|» » AccessToken|body|object|false|none|
|» » IdToken|body|object|false|none|
|» » RefreshToken|body|object|false|none|
|» ReadAttributes|body|object|false|none|
|» WriteAttributes|body|object|false|none|
|» ExplicitAuthFlows|body|object|false|none|
|» SupportedIdentityProviders|body|object|false|none|
|» CallbackURLs|body|object|false|none|
|» LogoutURLs|body|object|false|none|
|» DefaultRedirectURI|body|object|false|none|
|» AllowedOAuthFlows|body|object|false|none|
|» AllowedOAuthScopes|body|object|false|none|
|» AllowedOAuthFlowsUserPoolClient|body|object|false|none|
|» AnalyticsConfiguration|body|object|false|none|
|» » ApplicationId|body|object|false|none|
|» » ApplicationArn|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » ExternalId|body|object|false|none|
|» » UserDataShared|body|object|false|none|
|» PreventUserExistenceErrors|body|object|false|none|
|» EnableTokenRevocation|body|object|false|none|
|» EnablePropagateAdditionalUserContextData|body|object|false|none|
|» AuthSessionValidity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateUserPoolClient|

> Example responses

> 200 Response

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
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

<h3 id="updateuserpoolclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserPoolClientResponse](#schemaupdateuserpoolclientresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|ScopeDoesNotExistException|[ScopeDoesNotExistException](#schemascopedoesnotexistexception)|
|486|486|InvalidOAuthFlowException|[InvalidOAuthFlowException](#schemainvalidoauthflowexception)|
|487|487|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserPoolDomain

<a id="opIdUpdateUserPoolDomain"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.UpdateUserPoolDomain' \
  -d '{
    "Domain": {},
    "UserPoolId": {},
    "CustomDomainConfig": {
      "CertificateArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain`

<p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>

> Body parameter

```json
{
  "Domain": {},
  "UserPoolId": {},
  "CustomDomainConfig": {
    "CertificateArn": {}
  }
}
```

<h3 id="updateuserpooldomain-parameters">Parameters</h3>

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
|body|body|[UpdateUserPoolDomainRequest](#schemaupdateuserpooldomainrequest)|true|none|
|» Domain|body|object|true|none|
|» UserPoolId|body|object|true|none|
|» CustomDomainConfig|body|object|true|none|
|» » CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.UpdateUserPoolDomain|

> Example responses

> 200 Response

```json
{
  "CloudFrontDomain": {}
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

<h3 id="updateuserpooldomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserPoolDomainResponse](#schemaupdateuserpooldomainresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## VerifySoftwareToken

<a id="opIdVerifySoftwareToken"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.VerifySoftwareToken' \
  -d '{
    "AccessToken": {},
    "Session": {},
    "UserCode": {},
    "FriendlyDeviceName": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken`

<p>Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "Session": {},
  "UserCode": {},
  "FriendlyDeviceName": {}
}
```

<h3 id="verifysoftwaretoken-parameters">Parameters</h3>

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
|body|body|[VerifySoftwareTokenRequest](#schemaverifysoftwaretokenrequest)|true|none|
|» AccessToken|body|object|false|none|
|» Session|body|object|false|none|
|» UserCode|body|object|true|none|
|» FriendlyDeviceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.VerifySoftwareToken|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "Session": {}
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

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="verifysoftwaretoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifySoftwareTokenResponse](#schemaverifysoftwaretokenresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidUserPoolConfigurationException|[InvalidUserPoolConfigurationException](#schemainvaliduserpoolconfigurationexception)|
|483|483|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|486|486|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|487|487|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|488|488|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|489|489|EnableSoftwareTokenMFAException|[EnableSoftwareTokenMFAException](#schemaenablesoftwaretokenmfaexception)|
|490|490|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|491|491|SoftwareTokenMFANotFoundException|[SoftwareTokenMFANotFoundException](#schemasoftwaretokenmfanotfoundexception)|
|492|492|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|493|493|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## VerifyUserAttribute

<a id="opIdVerifyUserAttribute"></a>

> Code samples

```bash
curl 'https://cognito-idp.us-east-1.amazonaws.com/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSCognitoIdentityProviderService.VerifyUserAttribute' \
  -d '{
    "AccessToken": {},
    "AttributeName": {},
    "Code": {}
  }'
```

`POST /#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute`

<p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>

> Body parameter

```json
{
  "AccessToken": {},
  "AttributeName": {},
  "Code": {}
}
```

<h3 id="verifyuserattribute-parameters">Parameters</h3>

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
|body|body|[VerifyUserAttributeRequest](#schemaverifyuserattributerequest)|true|none|
|» AccessToken|body|object|true|none|
|» AttributeName|body|object|true|none|
|» Code|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSCognitoIdentityProviderService.VerifyUserAttribute|

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

> 492 Response

```json
null
```

<h3 id="verifyuserattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyUserAttributeResponse](#schemaverifyuserattributeresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|CodeMismatchException|[CodeMismatchException](#schemacodemismatchexception)|
|483|483|ExpiredCodeException|[ExpiredCodeException](#schemaexpiredcodeexception)|
|484|484|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|PasswordResetRequiredException|[PasswordResetRequiredException](#schemapasswordresetrequiredexception)|
|488|488|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|489|489|UserNotConfirmedException|[UserNotConfirmedException](#schemausernotconfirmedexception)|
|490|490|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|491|491|AliasExistsException|[AliasExistsException](#schemaaliasexistsexception)|
|492|492|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddCustomAttributesResponse">AddCustomAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddcustomattributesresponse"></a>
<a id="schema_AddCustomAttributesResponse"></a>
<a id="tocSaddcustomattributesresponse"></a>
<a id="tocsaddcustomattributesresponse"></a>

```json
{}
```

Represents the response from the server for the request to add custom attributes.

<h2 id="tocS_AddCustomAttributesRequest">AddCustomAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddcustomattributesrequest"></a>
<a id="schema_AddCustomAttributesRequest"></a>
<a id="tocSaddcustomattributesrequest"></a>
<a id="tocsaddcustomattributesrequest"></a>

```json
{
  "UserPoolId": {},
  "CustomAttributes": {}
}
```

Represents the request to add custom attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|CustomAttributes|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_UserImportInProgressException">UserImportInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemauserimportinprogressexception"></a>
<a id="schema_UserImportInProgressException"></a>
<a id="tocSuserimportinprogressexception"></a>
<a id="tocsuserimportinprogressexception"></a>

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

<h2 id="tocS_AdminAddUserToGroupRequest">AdminAddUserToGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminaddusertogrouprequest"></a>
<a id="schema_AdminAddUserToGroupRequest"></a>
<a id="tocSadminaddusertogrouprequest"></a>
<a id="tocsadminaddusertogrouprequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "GroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|GroupName|object|true|none|none|

<h2 id="tocS_UserNotFoundException">UserNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemausernotfoundexception"></a>
<a id="schema_UserNotFoundException"></a>
<a id="tocSusernotfoundexception"></a>
<a id="tocsusernotfoundexception"></a>

```json
null
```

<h2 id="tocS_AdminConfirmSignUpResponse">AdminConfirmSignUpResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminconfirmsignupresponse"></a>
<a id="schema_AdminConfirmSignUpResponse"></a>
<a id="tocSadminconfirmsignupresponse"></a>
<a id="tocsadminconfirmsignupresponse"></a>

```json
{}
```

Represents the response from the server for the request to confirm registration.

<h2 id="tocS_AdminConfirmSignUpRequest">AdminConfirmSignUpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminconfirmsignuprequest"></a>
<a id="schema_AdminConfirmSignUpRequest"></a>
<a id="tocSadminconfirmsignuprequest"></a>
<a id="tocsadminconfirmsignuprequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Confirm a user's registration as a user pool administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_UnexpectedLambdaException">UnexpectedLambdaException</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectedlambdaexception"></a>
<a id="schema_UnexpectedLambdaException"></a>
<a id="tocSunexpectedlambdaexception"></a>
<a id="tocsunexpectedlambdaexception"></a>

```json
null
```

<h2 id="tocS_UserLambdaValidationException">UserLambdaValidationException</h2>
<!-- backwards compatibility -->
<a id="schemauserlambdavalidationexception"></a>
<a id="schema_UserLambdaValidationException"></a>
<a id="tocSuserlambdavalidationexception"></a>
<a id="tocsuserlambdavalidationexception"></a>

```json
null
```

<h2 id="tocS_TooManyFailedAttemptsException">TooManyFailedAttemptsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfailedattemptsexception"></a>
<a id="schema_TooManyFailedAttemptsException"></a>
<a id="tocStoomanyfailedattemptsexception"></a>
<a id="tocstoomanyfailedattemptsexception"></a>

```json
null
```

<h2 id="tocS_InvalidLambdaResponseException">InvalidLambdaResponseException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlambdaresponseexception"></a>
<a id="schema_InvalidLambdaResponseException"></a>
<a id="tocSinvalidlambdaresponseexception"></a>
<a id="tocsinvalidlambdaresponseexception"></a>

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

<h2 id="tocS_AdminCreateUserResponse">AdminCreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreateuserresponse"></a>
<a id="schema_AdminCreateUserResponse"></a>
<a id="tocSadmincreateuserresponse"></a>
<a id="tocsadmincreateuserresponse"></a>

```json
{
  "User": {
    "Username": {},
    "Attributes": {},
    "UserCreateDate": {},
    "UserLastModifiedDate": {},
    "Enabled": {},
    "UserStatus": {},
    "MFAOptions": {}
  }
}
```

Represents the response from the server to the request to create the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_AdminCreateUserRequest">AdminCreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreateuserrequest"></a>
<a id="schema_AdminCreateUserRequest"></a>
<a id="tocSadmincreateuserrequest"></a>
<a id="tocsadmincreateuserrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributes": {},
  "ValidationData": {},
  "TemporaryPassword": {},
  "ForceAliasCreation": {},
  "MessageAction": {},
  "DesiredDeliveryMediums": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to create a user in the specified user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|UserAttributes|object|false|none|none|
|ValidationData|object|false|none|none|
|TemporaryPassword|object|false|none|none|
|ForceAliasCreation|object|false|none|none|
|MessageAction|object|false|none|none|
|DesiredDeliveryMediums|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_UsernameExistsException">UsernameExistsException</h2>
<!-- backwards compatibility -->
<a id="schemausernameexistsexception"></a>
<a id="schema_UsernameExistsException"></a>
<a id="tocSusernameexistsexception"></a>
<a id="tocsusernameexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidPasswordException">InvalidPasswordException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpasswordexception"></a>
<a id="schema_InvalidPasswordException"></a>
<a id="tocSinvalidpasswordexception"></a>
<a id="tocsinvalidpasswordexception"></a>

```json
null
```

<h2 id="tocS_CodeDeliveryFailureException">CodeDeliveryFailureException</h2>
<!-- backwards compatibility -->
<a id="schemacodedeliveryfailureexception"></a>
<a id="schema_CodeDeliveryFailureException"></a>
<a id="tocScodedeliveryfailureexception"></a>
<a id="tocscodedeliveryfailureexception"></a>

```json
null
```

<h2 id="tocS_PreconditionNotMetException">PreconditionNotMetException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionnotmetexception"></a>
<a id="schema_PreconditionNotMetException"></a>
<a id="tocSpreconditionnotmetexception"></a>
<a id="tocspreconditionnotmetexception"></a>

```json
null
```

<h2 id="tocS_InvalidSmsRoleAccessPolicyException">InvalidSmsRoleAccessPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsmsroleaccesspolicyexception"></a>
<a id="schema_InvalidSmsRoleAccessPolicyException"></a>
<a id="tocSinvalidsmsroleaccesspolicyexception"></a>
<a id="tocsinvalidsmsroleaccesspolicyexception"></a>

```json
null
```

<h2 id="tocS_InvalidSmsRoleTrustRelationshipException">InvalidSmsRoleTrustRelationshipException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsmsroletrustrelationshipexception"></a>
<a id="schema_InvalidSmsRoleTrustRelationshipException"></a>
<a id="tocSinvalidsmsroletrustrelationshipexception"></a>
<a id="tocsinvalidsmsroletrustrelationshipexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedUserStateException">UnsupportedUserStateException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupporteduserstateexception"></a>
<a id="schema_UnsupportedUserStateException"></a>
<a id="tocSunsupporteduserstateexception"></a>
<a id="tocsunsupporteduserstateexception"></a>

```json
null
```

<h2 id="tocS_AdminDeleteUserRequest">AdminDeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindeleteuserrequest"></a>
<a id="schema_AdminDeleteUserRequest"></a>
<a id="tocSadmindeleteuserrequest"></a>
<a id="tocsadmindeleteuserrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

Represents the request to delete a user as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AdminDeleteUserAttributesResponse">AdminDeleteUserAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmindeleteuserattributesresponse"></a>
<a id="schema_AdminDeleteUserAttributesResponse"></a>
<a id="tocSadmindeleteuserattributesresponse"></a>
<a id="tocsadmindeleteuserattributesresponse"></a>

```json
{}
```

Represents the response received from the server for a request to delete user attributes.

<h2 id="tocS_AdminDeleteUserAttributesRequest">AdminDeleteUserAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindeleteuserattributesrequest"></a>
<a id="schema_AdminDeleteUserAttributesRequest"></a>
<a id="tocSadmindeleteuserattributesrequest"></a>
<a id="tocsadmindeleteuserattributesrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributeNames": {}
}
```

Represents the request to delete user attributes as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|UserAttributeNames|object|true|none|none|

<h2 id="tocS_AdminDisableProviderForUserResponse">AdminDisableProviderForUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmindisableproviderforuserresponse"></a>
<a id="schema_AdminDisableProviderForUserResponse"></a>
<a id="tocSadmindisableproviderforuserresponse"></a>
<a id="tocsadmindisableproviderforuserresponse"></a>

```json
{}
```

<h2 id="tocS_AdminDisableProviderForUserRequest">AdminDisableProviderForUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindisableproviderforuserrequest"></a>
<a id="schema_AdminDisableProviderForUserRequest"></a>
<a id="tocSadmindisableproviderforuserrequest"></a>
<a id="tocsadmindisableproviderforuserrequest"></a>

```json
{
  "UserPoolId": {},
  "User": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|User|object|true|none|none|

<h2 id="tocS_AliasExistsException">AliasExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaaliasexistsexception"></a>
<a id="schema_AliasExistsException"></a>
<a id="tocSaliasexistsexception"></a>
<a id="tocsaliasexistsexception"></a>

```json
null
```

<h2 id="tocS_AdminDisableUserResponse">AdminDisableUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmindisableuserresponse"></a>
<a id="schema_AdminDisableUserResponse"></a>
<a id="tocSadmindisableuserresponse"></a>
<a id="tocsadmindisableuserresponse"></a>

```json
{}
```

Represents the response received from the server to disable the user as an administrator.

<h2 id="tocS_AdminDisableUserRequest">AdminDisableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindisableuserrequest"></a>
<a id="schema_AdminDisableUserRequest"></a>
<a id="tocSadmindisableuserrequest"></a>
<a id="tocsadmindisableuserrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

Represents the request to disable the user as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AdminEnableUserResponse">AdminEnableUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminenableuserresponse"></a>
<a id="schema_AdminEnableUserResponse"></a>
<a id="tocSadminenableuserresponse"></a>
<a id="tocsadminenableuserresponse"></a>

```json
{}
```

Represents the response from the server for the request to enable a user as an administrator.

<h2 id="tocS_AdminEnableUserRequest">AdminEnableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminenableuserrequest"></a>
<a id="schema_AdminEnableUserRequest"></a>
<a id="tocSadminenableuserrequest"></a>
<a id="tocsadminenableuserrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

Represents the request that enables the user as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AdminForgetDeviceRequest">AdminForgetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminforgetdevicerequest"></a>
<a id="schema_AdminForgetDeviceRequest"></a>
<a id="tocSadminforgetdevicerequest"></a>
<a id="tocsadminforgetdevicerequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "DeviceKey": {}
}
```

Sends the forgot device request, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|DeviceKey|object|true|none|none|

<h2 id="tocS_InvalidUserPoolConfigurationException">InvalidUserPoolConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliduserpoolconfigurationexception"></a>
<a id="schema_InvalidUserPoolConfigurationException"></a>
<a id="tocSinvaliduserpoolconfigurationexception"></a>
<a id="tocsinvaliduserpoolconfigurationexception"></a>

```json
null
```

<h2 id="tocS_AdminGetDeviceResponse">AdminGetDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetdeviceresponse"></a>
<a id="schema_AdminGetDeviceResponse"></a>
<a id="tocSadmingetdeviceresponse"></a>
<a id="tocsadmingetdeviceresponse"></a>

```json
{
  "Device": {
    "DeviceKey": {},
    "DeviceAttributes": {},
    "DeviceCreateDate": {},
    "DeviceLastModifiedDate": {},
    "DeviceLastAuthenticatedDate": {}
  }
}
```

Gets the device response, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|true|none|none|

<h2 id="tocS_AdminGetDeviceRequest">AdminGetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetdevicerequest"></a>
<a id="schema_AdminGetDeviceRequest"></a>
<a id="tocSadmingetdevicerequest"></a>
<a id="tocsadmingetdevicerequest"></a>

```json
{
  "DeviceKey": {},
  "UserPoolId": {},
  "Username": {}
}
```

Represents the request to get the device, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceKey|object|true|none|none|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AdminGetUserResponse">AdminGetUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetuserresponse"></a>
<a id="schema_AdminGetUserResponse"></a>
<a id="tocSadmingetuserresponse"></a>
<a id="tocsadmingetuserresponse"></a>

```json
{
  "Username": {},
  "UserAttributes": {},
  "UserCreateDate": {},
  "UserLastModifiedDate": {},
  "Enabled": {},
  "UserStatus": {},
  "MFAOptions": {},
  "PreferredMfaSetting": {},
  "UserMFASettingList": {}
}
```

Represents the response from the server from the request to get the specified user as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|true|none|none|
|UserAttributes|object|false|none|none|
|UserCreateDate|object|false|none|none|
|UserLastModifiedDate|object|false|none|none|
|Enabled|object|false|none|none|
|UserStatus|object|false|none|none|
|MFAOptions|object|false|none|none|
|PreferredMfaSetting|object|false|none|none|
|UserMFASettingList|object|false|none|none|

<h2 id="tocS_AdminGetUserRequest">AdminGetUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetuserrequest"></a>
<a id="schema_AdminGetUserRequest"></a>
<a id="tocSadmingetuserrequest"></a>
<a id="tocsadmingetuserrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

Represents the request to get the specified user as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AdminInitiateAuthResponse">AdminInitiateAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadmininitiateauthresponse"></a>
<a id="schema_AdminInitiateAuthResponse"></a>
<a id="tocSadmininitiateauthresponse"></a>
<a id="tocsadmininitiateauthresponse"></a>

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
    }
  }
}
```

Initiates the authentication response, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeName|object|false|none|none|
|Session|object|false|none|none|
|ChallengeParameters|object|false|none|none|
|AuthenticationResult|object|false|none|none|

<h2 id="tocS_AdminInitiateAuthRequest">AdminInitiateAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmininitiateauthrequest"></a>
<a id="schema_AdminInitiateAuthRequest"></a>
<a id="tocSadmininitiateauthrequest"></a>
<a id="tocsadmininitiateauthrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "AuthFlow": {},
  "AuthParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ContextData": {
    "IpAddress": {},
    "ServerName": {},
    "ServerPath": {},
    "HttpHeaders": {},
    "EncodedData": {}
  }
}
```

Initiates the authorization request, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|true|none|none|
|AuthFlow|object|true|none|none|
|AuthParameters|object|false|none|none|
|ClientMetadata|object|false|none|none|
|AnalyticsMetadata|object|false|none|none|
|ContextData|object|false|none|none|

<h2 id="tocS_MFAMethodNotFoundException">MFAMethodNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemamfamethodnotfoundexception"></a>
<a id="schema_MFAMethodNotFoundException"></a>
<a id="tocSmfamethodnotfoundexception"></a>
<a id="tocsmfamethodnotfoundexception"></a>

```json
null
```

<h2 id="tocS_PasswordResetRequiredException">PasswordResetRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetrequiredexception"></a>
<a id="schema_PasswordResetRequiredException"></a>
<a id="tocSpasswordresetrequiredexception"></a>
<a id="tocspasswordresetrequiredexception"></a>

```json
null
```

<h2 id="tocS_UserNotConfirmedException">UserNotConfirmedException</h2>
<!-- backwards compatibility -->
<a id="schemausernotconfirmedexception"></a>
<a id="schema_UserNotConfirmedException"></a>
<a id="tocSusernotconfirmedexception"></a>
<a id="tocsusernotconfirmedexception"></a>

```json
null
```

<h2 id="tocS_AdminLinkProviderForUserResponse">AdminLinkProviderForUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminlinkproviderforuserresponse"></a>
<a id="schema_AdminLinkProviderForUserResponse"></a>
<a id="tocSadminlinkproviderforuserresponse"></a>
<a id="tocsadminlinkproviderforuserresponse"></a>

```json
{}
```

<h2 id="tocS_AdminLinkProviderForUserRequest">AdminLinkProviderForUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminlinkproviderforuserrequest"></a>
<a id="schema_AdminLinkProviderForUserRequest"></a>
<a id="tocSadminlinkproviderforuserrequest"></a>
<a id="tocsadminlinkproviderforuserrequest"></a>

```json
{
  "UserPoolId": {},
  "DestinationUser": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  },
  "SourceUser": {
    "ProviderName": {},
    "ProviderAttributeName": {},
    "ProviderAttributeValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|DestinationUser|object|true|none|none|
|SourceUser|object|true|none|none|

<h2 id="tocS_AdminListDevicesResponse">AdminListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistdevicesresponse"></a>
<a id="schema_AdminListDevicesResponse"></a>
<a id="tocSadminlistdevicesresponse"></a>
<a id="tocsadminlistdevicesresponse"></a>

```json
{
  "Devices": {},
  "PaginationToken": {}
}
```

Lists the device's response, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_AdminListDevicesRequest">AdminListDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistdevicesrequest"></a>
<a id="schema_AdminListDevicesRequest"></a>
<a id="tocSadminlistdevicesrequest"></a>
<a id="tocsadminlistdevicesrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "Limit": {},
  "PaginationToken": {}
}
```

Represents the request to list devices, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|Limit|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_AdminListGroupsForUserResponse">AdminListGroupsForUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistgroupsforuserresponse"></a>
<a id="schema_AdminListGroupsForUserResponse"></a>
<a id="tocSadminlistgroupsforuserresponse"></a>
<a id="tocsadminlistgroupsforuserresponse"></a>

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

<h2 id="tocS_AdminListGroupsForUserRequest">AdminListGroupsForUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistgroupsforuserrequest"></a>
<a id="schema_AdminListGroupsForUserRequest"></a>
<a id="tocSadminlistgroupsforuserrequest"></a>
<a id="tocsadminlistgroupsforuserrequest"></a>

```json
{
  "Username": {},
  "UserPoolId": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|true|none|none|
|UserPoolId|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AdminListUserAuthEventsResponse">AdminListUserAuthEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistuserautheventsresponse"></a>
<a id="schema_AdminListUserAuthEventsResponse"></a>
<a id="tocSadminlistuserautheventsresponse"></a>
<a id="tocsadminlistuserautheventsresponse"></a>

```json
{
  "AuthEvents": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AdminListUserAuthEventsRequest">AdminListUserAuthEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminlistuserautheventsrequest"></a>
<a id="schema_AdminListUserAuthEventsRequest"></a>
<a id="tocSadminlistuserautheventsrequest"></a>
<a id="tocsadminlistuserautheventsrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UserPoolAddOnNotEnabledException">UserPoolAddOnNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemauserpooladdonnotenabledexception"></a>
<a id="schema_UserPoolAddOnNotEnabledException"></a>
<a id="tocSuserpooladdonnotenabledexception"></a>
<a id="tocsuserpooladdonnotenabledexception"></a>

```json
null
```

<h2 id="tocS_AdminRemoveUserFromGroupRequest">AdminRemoveUserFromGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminremoveuserfromgrouprequest"></a>
<a id="schema_AdminRemoveUserFromGroupRequest"></a>
<a id="tocSadminremoveuserfromgrouprequest"></a>
<a id="tocsadminremoveuserfromgrouprequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "GroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|GroupName|object|true|none|none|

<h2 id="tocS_AdminResetUserPasswordResponse">AdminResetUserPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminresetuserpasswordresponse"></a>
<a id="schema_AdminResetUserPasswordResponse"></a>
<a id="tocSadminresetuserpasswordresponse"></a>
<a id="tocsadminresetuserpasswordresponse"></a>

```json
{}
```

Represents the response from the server to reset a user password as an administrator.

<h2 id="tocS_AdminResetUserPasswordRequest">AdminResetUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminresetuserpasswordrequest"></a>
<a id="schema_AdminResetUserPasswordRequest"></a>
<a id="tocSadminresetuserpasswordrequest"></a>
<a id="tocsadminresetuserpasswordrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to reset a user's password as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_InvalidEmailRoleAccessPolicyException">InvalidEmailRoleAccessPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidemailroleaccesspolicyexception"></a>
<a id="schema_InvalidEmailRoleAccessPolicyException"></a>
<a id="tocSinvalidemailroleaccesspolicyexception"></a>
<a id="tocsinvalidemailroleaccesspolicyexception"></a>

```json
null
```

<h2 id="tocS_AdminRespondToAuthChallengeResponse">AdminRespondToAuthChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminrespondtoauthchallengeresponse"></a>
<a id="schema_AdminRespondToAuthChallengeResponse"></a>
<a id="tocSadminrespondtoauthchallengeresponse"></a>
<a id="tocsadminrespondtoauthchallengeresponse"></a>

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
    }
  }
}
```

Responds to the authentication challenge, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeName|object|false|none|none|
|Session|object|false|none|none|
|ChallengeParameters|object|false|none|none|
|AuthenticationResult|object|false|none|none|

<h2 id="tocS_AdminRespondToAuthChallengeRequest">AdminRespondToAuthChallengeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminrespondtoauthchallengerequest"></a>
<a id="schema_AdminRespondToAuthChallengeRequest"></a>
<a id="tocSadminrespondtoauthchallengerequest"></a>
<a id="tocsadminrespondtoauthchallengerequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "ChallengeName": {},
  "ChallengeResponses": {
    "property1": "string",
    "property2": "string"
  },
  "Session": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ContextData": {
    "IpAddress": {},
    "ServerName": {},
    "ServerPath": {},
    "HttpHeaders": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The request to respond to the authentication challenge, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|true|none|none|
|ChallengeName|object|true|none|none|
|ChallengeResponses|object|false|none|none|
|Session|object|false|none|none|
|AnalyticsMetadata|object|false|none|none|
|ContextData|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_CodeMismatchException">CodeMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemacodemismatchexception"></a>
<a id="schema_CodeMismatchException"></a>
<a id="tocScodemismatchexception"></a>
<a id="tocscodemismatchexception"></a>

```json
null
```

<h2 id="tocS_ExpiredCodeException">ExpiredCodeException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredcodeexception"></a>
<a id="schema_ExpiredCodeException"></a>
<a id="tocSexpiredcodeexception"></a>
<a id="tocsexpiredcodeexception"></a>

```json
null
```

<h2 id="tocS_SoftwareTokenMFANotFoundException">SoftwareTokenMFANotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasoftwaretokenmfanotfoundexception"></a>
<a id="schema_SoftwareTokenMFANotFoundException"></a>
<a id="tocSsoftwaretokenmfanotfoundexception"></a>
<a id="tocssoftwaretokenmfanotfoundexception"></a>

```json
null
```

<h2 id="tocS_AdminSetUserMFAPreferenceResponse">AdminSetUserMFAPreferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetusermfapreferenceresponse"></a>
<a id="schema_AdminSetUserMFAPreferenceResponse"></a>
<a id="tocSadminsetusermfapreferenceresponse"></a>
<a id="tocsadminsetusermfapreferenceresponse"></a>

```json
{}
```

<h2 id="tocS_AdminSetUserMFAPreferenceRequest">AdminSetUserMFAPreferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetusermfapreferencerequest"></a>
<a id="schema_AdminSetUserMFAPreferenceRequest"></a>
<a id="tocSadminsetusermfapreferencerequest"></a>
<a id="tocsadminsetusermfapreferencerequest"></a>

```json
{
  "SMSMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "SoftwareTokenMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "Username": {},
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SMSMfaSettings|object|false|none|none|
|SoftwareTokenMfaSettings|object|false|none|none|
|Username|object|true|none|none|
|UserPoolId|object|true|none|none|

<h2 id="tocS_AdminSetUserPasswordResponse">AdminSetUserPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetuserpasswordresponse"></a>
<a id="schema_AdminSetUserPasswordResponse"></a>
<a id="tocSadminsetuserpasswordresponse"></a>
<a id="tocsadminsetuserpasswordresponse"></a>

```json
{}
```

<h2 id="tocS_AdminSetUserPasswordRequest">AdminSetUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetuserpasswordrequest"></a>
<a id="schema_AdminSetUserPasswordRequest"></a>
<a id="tocSadminsetuserpasswordrequest"></a>
<a id="tocsadminsetuserpasswordrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "Password": {},
  "Permanent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|Password|object|true|none|none|
|Permanent|object|false|none|none|

<h2 id="tocS_AdminSetUserSettingsResponse">AdminSetUserSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetusersettingsresponse"></a>
<a id="schema_AdminSetUserSettingsResponse"></a>
<a id="tocSadminsetusersettingsresponse"></a>
<a id="tocsadminsetusersettingsresponse"></a>

```json
{}
```

Represents the response from the server to set user settings as an administrator.

<h2 id="tocS_AdminSetUserSettingsRequest">AdminSetUserSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminsetusersettingsrequest"></a>
<a id="schema_AdminSetUserSettingsRequest"></a>
<a id="tocSadminsetusersettingsrequest"></a>
<a id="tocsadminsetusersettingsrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "MFAOptions": {}
}
```

You can use this parameter to set an MFA configuration that uses the SMS delivery medium.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|MFAOptions|object|true|none|none|

<h2 id="tocS_AdminUpdateAuthEventFeedbackResponse">AdminUpdateAuthEventFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdateautheventfeedbackresponse"></a>
<a id="schema_AdminUpdateAuthEventFeedbackResponse"></a>
<a id="tocSadminupdateautheventfeedbackresponse"></a>
<a id="tocsadminupdateautheventfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_AdminUpdateAuthEventFeedbackRequest">AdminUpdateAuthEventFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdateautheventfeedbackrequest"></a>
<a id="schema_AdminUpdateAuthEventFeedbackRequest"></a>
<a id="tocSadminupdateautheventfeedbackrequest"></a>
<a id="tocsadminupdateautheventfeedbackrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "EventId": {},
  "FeedbackValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|EventId|object|true|none|none|
|FeedbackValue|object|true|none|none|

<h2 id="tocS_AdminUpdateDeviceStatusResponse">AdminUpdateDeviceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdatedevicestatusresponse"></a>
<a id="schema_AdminUpdateDeviceStatusResponse"></a>
<a id="tocSadminupdatedevicestatusresponse"></a>
<a id="tocsadminupdatedevicestatusresponse"></a>

```json
{}
```

The status response to the request to update the device, as an administrator.

<h2 id="tocS_AdminUpdateDeviceStatusRequest">AdminUpdateDeviceStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdatedevicestatusrequest"></a>
<a id="schema_AdminUpdateDeviceStatusRequest"></a>
<a id="tocSadminupdatedevicestatusrequest"></a>
<a id="tocsadminupdatedevicestatusrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "DeviceKey": {},
  "DeviceRememberedStatus": {}
}
```

The request to update the device status, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|DeviceKey|object|true|none|none|
|DeviceRememberedStatus|object|false|none|none|

<h2 id="tocS_AdminUpdateUserAttributesResponse">AdminUpdateUserAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdateuserattributesresponse"></a>
<a id="schema_AdminUpdateUserAttributesResponse"></a>
<a id="tocSadminupdateuserattributesresponse"></a>
<a id="tocsadminupdateuserattributesresponse"></a>

```json
{}
```

Represents the response from the server for the request to update user attributes as an administrator.

<h2 id="tocS_AdminUpdateUserAttributesRequest">AdminUpdateUserAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdateuserattributesrequest"></a>
<a id="schema_AdminUpdateUserAttributesRequest"></a>
<a id="tocSadminupdateuserattributesrequest"></a>
<a id="tocsadminupdateuserattributesrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "UserAttributes": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to update the user's attributes as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|UserAttributes|object|true|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_AdminUserGlobalSignOutResponse">AdminUserGlobalSignOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminuserglobalsignoutresponse"></a>
<a id="schema_AdminUserGlobalSignOutResponse"></a>
<a id="tocSadminuserglobalsignoutresponse"></a>
<a id="tocsadminuserglobalsignoutresponse"></a>

```json
{}
```

The global sign-out response, as an administrator.

<h2 id="tocS_AdminUserGlobalSignOutRequest">AdminUserGlobalSignOutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminuserglobalsignoutrequest"></a>
<a id="schema_AdminUserGlobalSignOutRequest"></a>
<a id="tocSadminuserglobalsignoutrequest"></a>
<a id="tocsadminuserglobalsignoutrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {}
}
```

The request to sign out of all devices, as an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|

<h2 id="tocS_AssociateSoftwareTokenResponse">AssociateSoftwareTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesoftwaretokenresponse"></a>
<a id="schema_AssociateSoftwareTokenResponse"></a>
<a id="tocSassociatesoftwaretokenresponse"></a>
<a id="tocsassociatesoftwaretokenresponse"></a>

```json
{
  "SecretCode": {},
  "Session": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretCode|object|false|none|none|
|Session|object|false|none|none|

<h2 id="tocS_AssociateSoftwareTokenRequest">AssociateSoftwareTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesoftwaretokenrequest"></a>
<a id="schema_AssociateSoftwareTokenRequest"></a>
<a id="tocSassociatesoftwaretokenrequest"></a>
<a id="tocsassociatesoftwaretokenrequest"></a>

```json
{
  "AccessToken": {},
  "Session": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|Session|object|false|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_ChangePasswordResponse">ChangePasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemachangepasswordresponse"></a>
<a id="schema_ChangePasswordResponse"></a>
<a id="tocSchangepasswordresponse"></a>
<a id="tocschangepasswordresponse"></a>

```json
{}
```

The response from the server to the change password request.

<h2 id="tocS_ChangePasswordRequest">ChangePasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangepasswordrequest"></a>
<a id="schema_ChangePasswordRequest"></a>
<a id="tocSchangepasswordrequest"></a>
<a id="tocschangepasswordrequest"></a>

```json
{
  "PreviousPassword": {},
  "ProposedPassword": {},
  "AccessToken": {}
}
```

Represents the request to change a user password.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreviousPassword|object|true|none|none|
|ProposedPassword|object|true|none|none|
|AccessToken|object|true|none|none|

<h2 id="tocS_ConfirmDeviceResponse">ConfirmDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmdeviceresponse"></a>
<a id="schema_ConfirmDeviceResponse"></a>
<a id="tocSconfirmdeviceresponse"></a>
<a id="tocsconfirmdeviceresponse"></a>

```json
{
  "UserConfirmationNecessary": {}
}
```

Confirms the device response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserConfirmationNecessary|object|false|none|none|

<h2 id="tocS_ConfirmDeviceRequest">ConfirmDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmdevicerequest"></a>
<a id="schema_ConfirmDeviceRequest"></a>
<a id="tocSconfirmdevicerequest"></a>
<a id="tocsconfirmdevicerequest"></a>

```json
{
  "AccessToken": {},
  "DeviceKey": {},
  "DeviceSecretVerifierConfig": {
    "PasswordVerifier": {},
    "Salt": {}
  },
  "DeviceName": {}
}
```

Confirms the device request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|DeviceKey|object|true|none|none|
|DeviceSecretVerifierConfig|object|false|none|none|
|DeviceName|object|false|none|none|

<h2 id="tocS_ConfirmForgotPasswordResponse">ConfirmForgotPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmforgotpasswordresponse"></a>
<a id="schema_ConfirmForgotPasswordResponse"></a>
<a id="tocSconfirmforgotpasswordresponse"></a>
<a id="tocsconfirmforgotpasswordresponse"></a>

```json
{}
```

The response from the server that results from a user's request to retrieve a forgotten password.

<h2 id="tocS_ConfirmForgotPasswordRequest">ConfirmForgotPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmforgotpasswordrequest"></a>
<a id="schema_ConfirmForgotPasswordRequest"></a>
<a id="tocSconfirmforgotpasswordrequest"></a>
<a id="tocsconfirmforgotpasswordrequest"></a>

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "ConfirmationCode": {},
  "Password": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The request representing the confirmation for a password reset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|SecretHash|object|false|none|none|
|Username|object|true|none|none|
|ConfirmationCode|object|true|none|none|
|Password|object|true|none|none|
|AnalyticsMetadata|object|false|none|none|
|UserContextData|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_ConfirmSignUpResponse">ConfirmSignUpResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmsignupresponse"></a>
<a id="schema_ConfirmSignUpResponse"></a>
<a id="tocSconfirmsignupresponse"></a>
<a id="tocsconfirmsignupresponse"></a>

```json
{}
```

Represents the response from the server for the registration confirmation.

<h2 id="tocS_ConfirmSignUpRequest">ConfirmSignUpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmsignuprequest"></a>
<a id="schema_ConfirmSignUpRequest"></a>
<a id="tocSconfirmsignuprequest"></a>
<a id="tocsconfirmsignuprequest"></a>

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "ConfirmationCode": {},
  "ForceAliasCreation": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to confirm registration of a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|SecretHash|object|false|none|none|
|Username|object|true|none|none|
|ConfirmationCode|object|true|none|none|
|ForceAliasCreation|object|false|none|none|
|AnalyticsMetadata|object|false|none|none|
|UserContextData|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_CreateGroupResponse">CreateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresponse"></a>
<a id="schema_CreateGroupResponse"></a>
<a id="tocScreategroupresponse"></a>
<a id="tocscreategroupresponse"></a>

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "GroupName": {},
  "UserPoolId": {},
  "Description": {},
  "RoleArn": {},
  "Precedence": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|UserPoolId|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|Precedence|object|false|none|none|

<h2 id="tocS_GroupExistsException">GroupExistsException</h2>
<!-- backwards compatibility -->
<a id="schemagroupexistsexception"></a>
<a id="schema_GroupExistsException"></a>
<a id="tocSgroupexistsexception"></a>
<a id="tocsgroupexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateIdentityProviderResponse">CreateIdentityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateidentityproviderresponse"></a>
<a id="schema_CreateIdentityProviderResponse"></a>
<a id="tocScreateidentityproviderresponse"></a>
<a id="tocscreateidentityproviderresponse"></a>

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityProvider|object|true|none|none|

<h2 id="tocS_CreateIdentityProviderRequest">CreateIdentityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateidentityproviderrequest"></a>
<a id="schema_CreateIdentityProviderRequest"></a>
<a id="tocScreateidentityproviderrequest"></a>
<a id="tocscreateidentityproviderrequest"></a>

```json
{
  "UserPoolId": {},
  "ProviderName": {},
  "ProviderType": {},
  "ProviderDetails": {
    "property1": "string",
    "property2": "string"
  },
  "AttributeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "IdpIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ProviderName|object|true|none|none|
|ProviderType|object|true|none|none|
|ProviderDetails|object|true|none|none|
|AttributeMapping|object|false|none|none|
|IdpIdentifiers|object|false|none|none|

<h2 id="tocS_DuplicateProviderException">DuplicateProviderException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateproviderexception"></a>
<a id="schema_DuplicateProviderException"></a>
<a id="tocSduplicateproviderexception"></a>
<a id="tocsduplicateproviderexception"></a>

```json
null
```

<h2 id="tocS_CreateResourceServerResponse">CreateResourceServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourceserverresponse"></a>
<a id="schema_CreateResourceServerResponse"></a>
<a id="tocScreateresourceserverresponse"></a>
<a id="tocscreateresourceserverresponse"></a>

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceServer|object|true|none|none|

<h2 id="tocS_CreateResourceServerRequest">CreateResourceServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourceserverrequest"></a>
<a id="schema_CreateResourceServerRequest"></a>
<a id="tocScreateresourceserverrequest"></a>
<a id="tocscreateresourceserverrequest"></a>

```json
{
  "UserPoolId": {},
  "Identifier": {},
  "Name": {},
  "Scopes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Identifier|object|true|none|none|
|Name|object|true|none|none|
|Scopes|object|false|none|none|

<h2 id="tocS_CreateUserImportJobResponse">CreateUserImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserimportjobresponse"></a>
<a id="schema_CreateUserImportJobResponse"></a>
<a id="tocScreateuserimportjobresponse"></a>
<a id="tocscreateuserimportjobresponse"></a>

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
  }
}
```

Represents the response from the server to the request to create the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserImportJob|object|false|none|none|

<h2 id="tocS_CreateUserImportJobRequest">CreateUserImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserimportjobrequest"></a>
<a id="schema_CreateUserImportJobRequest"></a>
<a id="tocScreateuserimportjobrequest"></a>
<a id="tocscreateuserimportjobrequest"></a>

```json
{
  "JobName": {},
  "UserPoolId": {},
  "CloudWatchLogsRoleArn": {}
}
```

Represents the request to create the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|true|none|none|
|UserPoolId|object|true|none|none|
|CloudWatchLogsRoleArn|object|true|none|none|

<h2 id="tocS_CreateUserPoolResponse">CreateUserPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpoolresponse"></a>
<a id="schema_CreateUserPoolResponse"></a>
<a id="tocScreateuserpoolresponse"></a>
<a id="tocscreateuserpoolresponse"></a>

```json
{
  "UserPool": {
    "Id": {},
    "Name": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "Status": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "SchemaAttributes": {},
    "AutoVerifiedAttributes": {},
    "AliasAttributes": {},
    "UsernameAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "MfaConfiguration": {},
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EstimatedNumberOfUsers": {},
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "SmsConfigurationFailure": {},
    "EmailConfigurationFailure": {},
    "Domain": {},
    "CustomDomain": {},
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "UsernameConfiguration": {
      "CaseSensitive": {}
    },
    "Arn": {},
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
    }
  }
}
```

Represents the response from the server for the request to create a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPool|object|false|none|none|

<h2 id="tocS_CreateUserPoolRequest">CreateUserPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpoolrequest"></a>
<a id="schema_CreateUserPoolRequest"></a>
<a id="tocScreateuserpoolrequest"></a>
<a id="tocscreateuserpoolrequest"></a>

```json
{
  "PoolName": {},
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": {},
      "RequireUppercase": {},
      "RequireLowercase": {},
      "RequireNumbers": {},
      "RequireSymbols": {},
      "TemporaryPasswordValidityDays": {}
    }
  },
  "DeletionProtection": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "AutoVerifiedAttributes": {},
  "AliasAttributes": {},
  "UsernameAttributes": {},
  "SmsVerificationMessage": {},
  "EmailVerificationMessage": {},
  "EmailVerificationSubject": {},
  "VerificationMessageTemplate": {
    "SmsMessage": {},
    "EmailMessage": {},
    "EmailSubject": {},
    "EmailMessageByLink": {},
    "EmailSubjectByLink": {},
    "DefaultEmailOption": {}
  },
  "SmsAuthenticationMessage": {},
  "MfaConfiguration": {},
  "UserAttributeUpdateSettings": {
    "AttributesRequireVerificationBeforeUpdate": {}
  },
  "DeviceConfiguration": {
    "ChallengeRequiredOnNewDevice": {},
    "DeviceOnlyRememberedOnUserPrompt": {}
  },
  "EmailConfiguration": {
    "SourceArn": {},
    "ReplyToEmailAddress": {},
    "EmailSendingAccount": {},
    "From": {},
    "ConfigurationSet": {}
  },
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  },
  "UserPoolTags": {
    "property1": "string",
    "property2": "string"
  },
  "AdminCreateUserConfig": {
    "AllowAdminCreateUserOnly": {},
    "UnusedAccountValidityDays": {},
    "InviteMessageTemplate": {
      "SMSMessage": {},
      "EmailMessage": {},
      "EmailSubject": {}
    }
  },
  "Schema": {},
  "UserPoolAddOns": {
    "AdvancedSecurityMode": {}
  },
  "UsernameConfiguration": {
    "CaseSensitive": {}
  },
  "AccountRecoverySetting": {
    "RecoveryMechanisms": {}
  }
}
```

Represents the request to create a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolName|object|true|none|none|
|Policies|object|false|none|none|
|DeletionProtection|object|false|none|none|
|LambdaConfig|object|false|none|none|
|AutoVerifiedAttributes|object|false|none|none|
|AliasAttributes|object|false|none|none|
|UsernameAttributes|object|false|none|none|
|SmsVerificationMessage|object|false|none|none|
|EmailVerificationMessage|object|false|none|none|
|EmailVerificationSubject|object|false|none|none|
|VerificationMessageTemplate|object|false|none|none|
|SmsAuthenticationMessage|object|false|none|none|
|MfaConfiguration|object|false|none|none|
|UserAttributeUpdateSettings|object|false|none|none|
|DeviceConfiguration|object|false|none|none|
|EmailConfiguration|object|false|none|none|
|SmsConfiguration|object|false|none|none|
|UserPoolTags|object|false|none|none|
|AdminCreateUserConfig|object|false|none|none|
|Schema|object|false|none|none|
|UserPoolAddOns|object|false|none|none|
|UsernameConfiguration|object|false|none|none|
|AccountRecoverySetting|object|false|none|none|

<h2 id="tocS_UserPoolTaggingException">UserPoolTaggingException</h2>
<!-- backwards compatibility -->
<a id="schemauserpooltaggingexception"></a>
<a id="schema_UserPoolTaggingException"></a>
<a id="tocSuserpooltaggingexception"></a>
<a id="tocsuserpooltaggingexception"></a>

```json
null
```

<h2 id="tocS_CreateUserPoolClientResponse">CreateUserPoolClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpoolclientresponse"></a>
<a id="schema_CreateUserPoolClientResponse"></a>
<a id="tocScreateuserpoolclientresponse"></a>
<a id="tocscreateuserpoolclientresponse"></a>

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
  }
}
```

Represents the response from the server to create a user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolClient|object|false|none|none|

<h2 id="tocS_CreateUserPoolClientRequest">CreateUserPoolClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpoolclientrequest"></a>
<a id="schema_CreateUserPoolClientRequest"></a>
<a id="tocScreateuserpoolclientrequest"></a>
<a id="tocscreateuserpoolclientrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientName": {},
  "GenerateSecret": {},
  "RefreshTokenValidity": {},
  "AccessTokenValidity": {},
  "IdTokenValidity": {},
  "TokenValidityUnits": {
    "AccessToken": {},
    "IdToken": {},
    "RefreshToken": {}
  },
  "ReadAttributes": {},
  "WriteAttributes": {},
  "ExplicitAuthFlows": {},
  "SupportedIdentityProviders": {},
  "CallbackURLs": {},
  "LogoutURLs": {},
  "DefaultRedirectURI": {},
  "AllowedOAuthFlows": {},
  "AllowedOAuthScopes": {},
  "AllowedOAuthFlowsUserPoolClient": {},
  "AnalyticsConfiguration": {
    "ApplicationId": {},
    "ApplicationArn": {},
    "RoleArn": {},
    "ExternalId": {},
    "UserDataShared": {}
  },
  "PreventUserExistenceErrors": {},
  "EnableTokenRevocation": {},
  "EnablePropagateAdditionalUserContextData": {},
  "AuthSessionValidity": {}
}
```

Represents the request to create a user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientName|object|true|none|none|
|GenerateSecret|object|false|none|none|
|RefreshTokenValidity|object|false|none|none|
|AccessTokenValidity|object|false|none|none|
|IdTokenValidity|object|false|none|none|
|TokenValidityUnits|object|false|none|none|
|ReadAttributes|object|false|none|none|
|WriteAttributes|object|false|none|none|
|ExplicitAuthFlows|object|false|none|none|
|SupportedIdentityProviders|object|false|none|none|
|CallbackURLs|object|false|none|none|
|LogoutURLs|object|false|none|none|
|DefaultRedirectURI|object|false|none|none|
|AllowedOAuthFlows|object|false|none|none|
|AllowedOAuthScopes|object|false|none|none|
|AllowedOAuthFlowsUserPoolClient|object|false|none|none|
|AnalyticsConfiguration|object|false|none|none|
|PreventUserExistenceErrors|object|false|none|none|
|EnableTokenRevocation|object|false|none|none|
|EnablePropagateAdditionalUserContextData|object|false|none|none|
|AuthSessionValidity|object|false|none|none|

<h2 id="tocS_ScopeDoesNotExistException">ScopeDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemascopedoesnotexistexception"></a>
<a id="schema_ScopeDoesNotExistException"></a>
<a id="tocSscopedoesnotexistexception"></a>
<a id="tocsscopedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidOAuthFlowException">InvalidOAuthFlowException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoauthflowexception"></a>
<a id="schema_InvalidOAuthFlowException"></a>
<a id="tocSinvalidoauthflowexception"></a>
<a id="tocsinvalidoauthflowexception"></a>

```json
null
```

<h2 id="tocS_CreateUserPoolDomainResponse">CreateUserPoolDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpooldomainresponse"></a>
<a id="schema_CreateUserPoolDomainResponse"></a>
<a id="tocScreateuserpooldomainresponse"></a>
<a id="tocscreateuserpooldomainresponse"></a>

```json
{
  "CloudFrontDomain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontDomain|object|false|none|none|

<h2 id="tocS_CreateUserPoolDomainRequest">CreateUserPoolDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserpooldomainrequest"></a>
<a id="schema_CreateUserPoolDomainRequest"></a>
<a id="tocScreateuserpooldomainrequest"></a>
<a id="tocscreateuserpooldomainrequest"></a>

```json
{
  "Domain": {},
  "UserPoolId": {},
  "CustomDomainConfig": {
    "CertificateArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|
|UserPoolId|object|true|none|none|
|CustomDomainConfig|object|false|none|none|

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{
  "GroupName": {},
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|UserPoolId|object|true|none|none|

<h2 id="tocS_DeleteIdentityProviderRequest">DeleteIdentityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentityproviderrequest"></a>
<a id="schema_DeleteIdentityProviderRequest"></a>
<a id="tocSdeleteidentityproviderrequest"></a>
<a id="tocsdeleteidentityproviderrequest"></a>

```json
{
  "UserPoolId": {},
  "ProviderName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ProviderName|object|true|none|none|

<h2 id="tocS_UnsupportedIdentityProviderException">UnsupportedIdentityProviderException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedidentityproviderexception"></a>
<a id="schema_UnsupportedIdentityProviderException"></a>
<a id="tocSunsupportedidentityproviderexception"></a>
<a id="tocsunsupportedidentityproviderexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourceServerRequest">DeleteResourceServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourceserverrequest"></a>
<a id="schema_DeleteResourceServerRequest"></a>
<a id="tocSdeleteresourceserverrequest"></a>
<a id="tocsdeleteresourceserverrequest"></a>

```json
{
  "UserPoolId": {},
  "Identifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Identifier|object|true|none|none|

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "AccessToken": {}
}
```

Represents the request to delete a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|

<h2 id="tocS_DeleteUserAttributesResponse">DeleteUserAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserattributesresponse"></a>
<a id="schema_DeleteUserAttributesResponse"></a>
<a id="tocSdeleteuserattributesresponse"></a>
<a id="tocsdeleteuserattributesresponse"></a>

```json
{}
```

Represents the response from the server to delete user attributes.

<h2 id="tocS_DeleteUserAttributesRequest">DeleteUserAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserattributesrequest"></a>
<a id="schema_DeleteUserAttributesRequest"></a>
<a id="tocSdeleteuserattributesrequest"></a>
<a id="tocsdeleteuserattributesrequest"></a>

```json
{
  "UserAttributeNames": {},
  "AccessToken": {}
}
```

Represents the request to delete user attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserAttributeNames|object|true|none|none|
|AccessToken|object|true|none|none|

<h2 id="tocS_DeleteUserPoolRequest">DeleteUserPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserpoolrequest"></a>
<a id="schema_DeleteUserPoolRequest"></a>
<a id="tocSdeleteuserpoolrequest"></a>
<a id="tocsdeleteuserpoolrequest"></a>

```json
{
  "UserPoolId": {}
}
```

Represents the request to delete a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_DeleteUserPoolClientRequest">DeleteUserPoolClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserpoolclientrequest"></a>
<a id="schema_DeleteUserPoolClientRequest"></a>
<a id="tocSdeleteuserpoolclientrequest"></a>
<a id="tocsdeleteuserpoolclientrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

Represents the request to delete a user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|true|none|none|

<h2 id="tocS_DeleteUserPoolDomainResponse">DeleteUserPoolDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserpooldomainresponse"></a>
<a id="schema_DeleteUserPoolDomainResponse"></a>
<a id="tocSdeleteuserpooldomainresponse"></a>
<a id="tocsdeleteuserpooldomainresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteUserPoolDomainRequest">DeleteUserPoolDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserpooldomainrequest"></a>
<a id="schema_DeleteUserPoolDomainRequest"></a>
<a id="tocSdeleteuserpooldomainrequest"></a>
<a id="tocsdeleteuserpooldomainrequest"></a>

```json
{
  "Domain": {},
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|
|UserPoolId|object|true|none|none|

<h2 id="tocS_DescribeIdentityProviderResponse">DescribeIdentityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderresponse"></a>
<a id="schema_DescribeIdentityProviderResponse"></a>
<a id="tocSdescribeidentityproviderresponse"></a>
<a id="tocsdescribeidentityproviderresponse"></a>

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityProvider|object|true|none|none|

<h2 id="tocS_DescribeIdentityProviderRequest">DescribeIdentityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderrequest"></a>
<a id="schema_DescribeIdentityProviderRequest"></a>
<a id="tocSdescribeidentityproviderrequest"></a>
<a id="tocsdescribeidentityproviderrequest"></a>

```json
{
  "UserPoolId": {},
  "ProviderName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ProviderName|object|true|none|none|

<h2 id="tocS_DescribeResourceServerResponse">DescribeResourceServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourceserverresponse"></a>
<a id="schema_DescribeResourceServerResponse"></a>
<a id="tocSdescriberesourceserverresponse"></a>
<a id="tocsdescriberesourceserverresponse"></a>

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceServer|object|true|none|none|

<h2 id="tocS_DescribeResourceServerRequest">DescribeResourceServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourceserverrequest"></a>
<a id="schema_DescribeResourceServerRequest"></a>
<a id="tocSdescriberesourceserverrequest"></a>
<a id="tocsdescriberesourceserverrequest"></a>

```json
{
  "UserPoolId": {},
  "Identifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Identifier|object|true|none|none|

<h2 id="tocS_DescribeRiskConfigurationResponse">DescribeRiskConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberiskconfigurationresponse"></a>
<a id="schema_DescribeRiskConfigurationResponse"></a>
<a id="tocSdescriberiskconfigurationresponse"></a>
<a id="tocsdescriberiskconfigurationresponse"></a>

```json
{
  "RiskConfiguration": {
    "UserPoolId": {},
    "ClientId": {},
    "CompromisedCredentialsRiskConfiguration": {
      "EventFilter": {},
      "Actions": {
        "EventAction": {}
      }
    },
    "AccountTakeoverRiskConfiguration": {
      "NotifyConfiguration": {
        "From": {},
        "ReplyTo": {},
        "SourceArn": {},
        "BlockEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "NoActionEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "MfaEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        }
      },
      "Actions": {
        "LowAction": {
          "Notify": {},
          "EventAction": {}
        },
        "MediumAction": {
          "Notify": {},
          "EventAction": {}
        },
        "HighAction": {
          "Notify": {},
          "EventAction": {}
        }
      }
    },
    "RiskExceptionConfiguration": {
      "BlockedIPRangeList": {},
      "SkippedIPRangeList": {}
    },
    "LastModifiedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RiskConfiguration|object|true|none|none|

<h2 id="tocS_DescribeRiskConfigurationRequest">DescribeRiskConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberiskconfigurationrequest"></a>
<a id="schema_DescribeRiskConfigurationRequest"></a>
<a id="tocSdescriberiskconfigurationrequest"></a>
<a id="tocsdescriberiskconfigurationrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|false|none|none|

<h2 id="tocS_DescribeUserImportJobResponse">DescribeUserImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserimportjobresponse"></a>
<a id="schema_DescribeUserImportJobResponse"></a>
<a id="tocSdescribeuserimportjobresponse"></a>
<a id="tocsdescribeuserimportjobresponse"></a>

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
  }
}
```

Represents the response from the server to the request to describe the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserImportJob|object|false|none|none|

<h2 id="tocS_DescribeUserImportJobRequest">DescribeUserImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserimportjobrequest"></a>
<a id="schema_DescribeUserImportJobRequest"></a>
<a id="tocSdescribeuserimportjobrequest"></a>
<a id="tocsdescribeuserimportjobrequest"></a>

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

Represents the request to describe the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeUserPoolResponse">DescribeUserPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpoolresponse"></a>
<a id="schema_DescribeUserPoolResponse"></a>
<a id="tocSdescribeuserpoolresponse"></a>
<a id="tocsdescribeuserpoolresponse"></a>

```json
{
  "UserPool": {
    "Id": {},
    "Name": {},
    "Policies": {
      "PasswordPolicy": {
        "MinimumLength": {},
        "RequireUppercase": {},
        "RequireLowercase": {},
        "RequireNumbers": {},
        "RequireSymbols": {},
        "TemporaryPasswordValidityDays": {}
      }
    },
    "DeletionProtection": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "Status": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "SchemaAttributes": {},
    "AutoVerifiedAttributes": {},
    "AliasAttributes": {},
    "UsernameAttributes": {},
    "SmsVerificationMessage": {},
    "EmailVerificationMessage": {},
    "EmailVerificationSubject": {},
    "VerificationMessageTemplate": {
      "SmsMessage": {},
      "EmailMessage": {},
      "EmailSubject": {},
      "EmailMessageByLink": {},
      "EmailSubjectByLink": {},
      "DefaultEmailOption": {}
    },
    "SmsAuthenticationMessage": {},
    "UserAttributeUpdateSettings": {
      "AttributesRequireVerificationBeforeUpdate": {}
    },
    "MfaConfiguration": {},
    "DeviceConfiguration": {
      "ChallengeRequiredOnNewDevice": {},
      "DeviceOnlyRememberedOnUserPrompt": {}
    },
    "EstimatedNumberOfUsers": {},
    "EmailConfiguration": {
      "SourceArn": {},
      "ReplyToEmailAddress": {},
      "EmailSendingAccount": {},
      "From": {},
      "ConfigurationSet": {}
    },
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    },
    "UserPoolTags": {
      "property1": "string",
      "property2": "string"
    },
    "SmsConfigurationFailure": {},
    "EmailConfigurationFailure": {},
    "Domain": {},
    "CustomDomain": {},
    "AdminCreateUserConfig": {
      "AllowAdminCreateUserOnly": {},
      "UnusedAccountValidityDays": {},
      "InviteMessageTemplate": {
        "SMSMessage": {},
        "EmailMessage": {},
        "EmailSubject": {}
      }
    },
    "UserPoolAddOns": {
      "AdvancedSecurityMode": {}
    },
    "UsernameConfiguration": {
      "CaseSensitive": {}
    },
    "Arn": {},
    "AccountRecoverySetting": {
      "RecoveryMechanisms": {}
    }
  }
}
```

Represents the response to describe the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPool|object|false|none|none|

<h2 id="tocS_DescribeUserPoolRequest">DescribeUserPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpoolrequest"></a>
<a id="schema_DescribeUserPoolRequest"></a>
<a id="tocSdescribeuserpoolrequest"></a>
<a id="tocsdescribeuserpoolrequest"></a>

```json
{
  "UserPoolId": {}
}
```

Represents the request to describe the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_DescribeUserPoolClientResponse">DescribeUserPoolClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpoolclientresponse"></a>
<a id="schema_DescribeUserPoolClientResponse"></a>
<a id="tocSdescribeuserpoolclientresponse"></a>
<a id="tocsdescribeuserpoolclientresponse"></a>

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
  }
}
```

Represents the response from the server from a request to describe the user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolClient|object|false|none|none|

<h2 id="tocS_DescribeUserPoolClientRequest">DescribeUserPoolClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpoolclientrequest"></a>
<a id="schema_DescribeUserPoolClientRequest"></a>
<a id="tocSdescribeuserpoolclientrequest"></a>
<a id="tocsdescribeuserpoolclientrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

Represents the request to describe a user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|true|none|none|

<h2 id="tocS_DescribeUserPoolDomainResponse">DescribeUserPoolDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpooldomainresponse"></a>
<a id="schema_DescribeUserPoolDomainResponse"></a>
<a id="tocSdescribeuserpooldomainresponse"></a>
<a id="tocsdescribeuserpooldomainresponse"></a>

```json
{
  "DomainDescription": {
    "UserPoolId": {},
    "AWSAccountId": {},
    "Domain": {},
    "S3Bucket": {},
    "CloudFrontDistribution": {},
    "Version": {},
    "Status": {},
    "CustomDomainConfig": {
      "CertificateArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainDescription|object|false|none|none|

<h2 id="tocS_DescribeUserPoolDomainRequest">DescribeUserPoolDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserpooldomainrequest"></a>
<a id="schema_DescribeUserPoolDomainRequest"></a>
<a id="tocSdescribeuserpooldomainrequest"></a>
<a id="tocsdescribeuserpooldomainrequest"></a>

```json
{
  "Domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|

<h2 id="tocS_ForgetDeviceRequest">ForgetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforgetdevicerequest"></a>
<a id="schema_ForgetDeviceRequest"></a>
<a id="tocSforgetdevicerequest"></a>
<a id="tocsforgetdevicerequest"></a>

```json
{
  "AccessToken": {},
  "DeviceKey": {}
}
```

Represents the request to forget the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|DeviceKey|object|true|none|none|

<h2 id="tocS_ForgotPasswordResponse">ForgotPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforgotpasswordresponse"></a>
<a id="schema_ForgotPasswordResponse"></a>
<a id="tocSforgotpasswordresponse"></a>
<a id="tocsforgotpasswordresponse"></a>

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  }
}
```

The response from Amazon Cognito to a request to reset a password.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeDeliveryDetails|object|false|none|none|

<h2 id="tocS_ForgotPasswordRequest">ForgotPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforgotpasswordrequest"></a>
<a id="schema_ForgotPasswordRequest"></a>
<a id="tocSforgotpasswordrequest"></a>
<a id="tocsforgotpasswordrequest"></a>

```json
{
  "ClientId": {},
  "SecretHash": {},
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "Username": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to reset a user's password.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|SecretHash|object|false|none|none|
|UserContextData|object|false|none|none|
|Username|object|true|none|none|
|AnalyticsMetadata|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_GetCSVHeaderResponse">GetCSVHeaderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcsvheaderresponse"></a>
<a id="schema_GetCSVHeaderResponse"></a>
<a id="tocSgetcsvheaderresponse"></a>
<a id="tocsgetcsvheaderresponse"></a>

```json
{
  "UserPoolId": {},
  "CSVHeader": {}
}
```

Represents the response from the server to the request to get the header information of the CSV file for the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|CSVHeader|object|false|none|none|

<h2 id="tocS_GetCSVHeaderRequest">GetCSVHeaderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcsvheaderrequest"></a>
<a id="schema_GetCSVHeaderRequest"></a>
<a id="tocSgetcsvheaderrequest"></a>
<a id="tocsgetcsvheaderrequest"></a>

```json
{
  "UserPoolId": {}
}
```

Represents the request to get the header information of the CSV file for the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_GetDeviceResponse">GetDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceresponse"></a>
<a id="schema_GetDeviceResponse"></a>
<a id="tocSgetdeviceresponse"></a>
<a id="tocsgetdeviceresponse"></a>

```json
{
  "Device": {
    "DeviceKey": {},
    "DeviceAttributes": {},
    "DeviceCreateDate": {},
    "DeviceLastModifiedDate": {},
    "DeviceLastAuthenticatedDate": {}
  }
}
```

Gets the device response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|true|none|none|

<h2 id="tocS_GetDeviceRequest">GetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicerequest"></a>
<a id="schema_GetDeviceRequest"></a>
<a id="tocSgetdevicerequest"></a>
<a id="tocsgetdevicerequest"></a>

```json
{
  "DeviceKey": {},
  "AccessToken": {}
}
```

Represents the request to get the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceKey|object|true|none|none|
|AccessToken|object|false|none|none|

<h2 id="tocS_GetGroupResponse">GetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupresponse"></a>
<a id="schema_GetGroupResponse"></a>
<a id="tocSgetgroupresponse"></a>
<a id="tocsgetgroupresponse"></a>

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_GetGroupRequest">GetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgrouprequest"></a>
<a id="schema_GetGroupRequest"></a>
<a id="tocSgetgrouprequest"></a>
<a id="tocsgetgrouprequest"></a>

```json
{
  "GroupName": {},
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|UserPoolId|object|true|none|none|

<h2 id="tocS_GetIdentityProviderByIdentifierResponse">GetIdentityProviderByIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityproviderbyidentifierresponse"></a>
<a id="schema_GetIdentityProviderByIdentifierResponse"></a>
<a id="tocSgetidentityproviderbyidentifierresponse"></a>
<a id="tocsgetidentityproviderbyidentifierresponse"></a>

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityProvider|object|true|none|none|

<h2 id="tocS_GetIdentityProviderByIdentifierRequest">GetIdentityProviderByIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityproviderbyidentifierrequest"></a>
<a id="schema_GetIdentityProviderByIdentifierRequest"></a>
<a id="tocSgetidentityproviderbyidentifierrequest"></a>
<a id="tocsgetidentityproviderbyidentifierrequest"></a>

```json
{
  "UserPoolId": {},
  "IdpIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|IdpIdentifier|object|true|none|none|

<h2 id="tocS_GetLogDeliveryConfigurationResponse">GetLogDeliveryConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlogdeliveryconfigurationresponse"></a>
<a id="schema_GetLogDeliveryConfigurationResponse"></a>
<a id="tocSgetlogdeliveryconfigurationresponse"></a>
<a id="tocsgetlogdeliveryconfigurationresponse"></a>

```json
{
  "LogDeliveryConfiguration": {
    "UserPoolId": {},
    "LogConfigurations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogDeliveryConfiguration|object|false|none|none|

<h2 id="tocS_GetLogDeliveryConfigurationRequest">GetLogDeliveryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlogdeliveryconfigurationrequest"></a>
<a id="schema_GetLogDeliveryConfigurationRequest"></a>
<a id="tocSgetlogdeliveryconfigurationrequest"></a>
<a id="tocsgetlogdeliveryconfigurationrequest"></a>

```json
{
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_GetSigningCertificateResponse">GetSigningCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningcertificateresponse"></a>
<a id="schema_GetSigningCertificateResponse"></a>
<a id="tocSgetsigningcertificateresponse"></a>
<a id="tocsgetsigningcertificateresponse"></a>

```json
{
  "Certificate": {}
}
```

Response from Amazon Cognito for a signing certificate request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|

<h2 id="tocS_GetSigningCertificateRequest">GetSigningCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningcertificaterequest"></a>
<a id="schema_GetSigningCertificateRequest"></a>
<a id="tocSgetsigningcertificaterequest"></a>
<a id="tocsgetsigningcertificaterequest"></a>

```json
{
  "UserPoolId": {}
}
```

Request to get a signing certificate from Amazon Cognito.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_GetUICustomizationResponse">GetUICustomizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuicustomizationresponse"></a>
<a id="schema_GetUICustomizationResponse"></a>
<a id="tocSgetuicustomizationresponse"></a>
<a id="tocsgetuicustomizationresponse"></a>

```json
{
  "UICustomization": {
    "UserPoolId": {},
    "ClientId": {},
    "ImageUrl": {},
    "CSS": {},
    "CSSVersion": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UICustomization|object|true|none|none|

<h2 id="tocS_GetUICustomizationRequest">GetUICustomizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuicustomizationrequest"></a>
<a id="schema_GetUICustomizationRequest"></a>
<a id="tocSgetuicustomizationrequest"></a>
<a id="tocsgetuicustomizationrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|false|none|none|

<h2 id="tocS_GetUserResponse">GetUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserresponse"></a>
<a id="schema_GetUserResponse"></a>
<a id="tocSgetuserresponse"></a>
<a id="tocsgetuserresponse"></a>

```json
{
  "Username": {},
  "UserAttributes": {},
  "MFAOptions": {},
  "PreferredMfaSetting": {},
  "UserMFASettingList": {}
}
```

Represents the response from the server from the request to get information about the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|true|none|none|
|UserAttributes|object|true|none|none|
|MFAOptions|object|false|none|none|
|PreferredMfaSetting|object|false|none|none|
|UserMFASettingList|object|false|none|none|

<h2 id="tocS_GetUserRequest">GetUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuserrequest"></a>
<a id="schema_GetUserRequest"></a>
<a id="tocSgetuserrequest"></a>
<a id="tocsgetuserrequest"></a>

```json
{
  "AccessToken": {}
}
```

Represents the request to get information about the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|

<h2 id="tocS_GetUserAttributeVerificationCodeResponse">GetUserAttributeVerificationCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserattributeverificationcoderesponse"></a>
<a id="schema_GetUserAttributeVerificationCodeResponse"></a>
<a id="tocSgetuserattributeverificationcoderesponse"></a>
<a id="tocsgetuserattributeverificationcoderesponse"></a>

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  }
}
```

The verification code response returned by the server response to get the user attribute verification code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeDeliveryDetails|object|false|none|none|

<h2 id="tocS_GetUserAttributeVerificationCodeRequest">GetUserAttributeVerificationCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuserattributeverificationcoderequest"></a>
<a id="schema_GetUserAttributeVerificationCodeRequest"></a>
<a id="tocSgetuserattributeverificationcoderequest"></a>
<a id="tocsgetuserattributeverificationcoderequest"></a>

```json
{
  "AccessToken": {},
  "AttributeName": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to get user attribute verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|AttributeName|object|true|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_GetUserPoolMfaConfigResponse">GetUserPoolMfaConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserpoolmfaconfigresponse"></a>
<a id="schema_GetUserPoolMfaConfigResponse"></a>
<a id="tocSgetuserpoolmfaconfigresponse"></a>
<a id="tocsgetuserpoolmfaconfigresponse"></a>

```json
{
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmsMfaConfiguration|object|false|none|none|
|SoftwareTokenMfaConfiguration|object|false|none|none|
|MfaConfiguration|object|false|none|none|

<h2 id="tocS_GetUserPoolMfaConfigRequest">GetUserPoolMfaConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuserpoolmfaconfigrequest"></a>
<a id="schema_GetUserPoolMfaConfigRequest"></a>
<a id="tocSgetuserpoolmfaconfigrequest"></a>
<a id="tocsgetuserpoolmfaconfigrequest"></a>

```json
{
  "UserPoolId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|

<h2 id="tocS_GlobalSignOutResponse">GlobalSignOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsignoutresponse"></a>
<a id="schema_GlobalSignOutResponse"></a>
<a id="tocSglobalsignoutresponse"></a>
<a id="tocsglobalsignoutresponse"></a>

```json
{}
```

The response to the request to sign out all devices.

<h2 id="tocS_GlobalSignOutRequest">GlobalSignOutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsignoutrequest"></a>
<a id="schema_GlobalSignOutRequest"></a>
<a id="tocSglobalsignoutrequest"></a>
<a id="tocsglobalsignoutrequest"></a>

```json
{
  "AccessToken": {}
}
```

Represents the request to sign out all devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|

<h2 id="tocS_InitiateAuthResponse">InitiateAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitiateauthresponse"></a>
<a id="schema_InitiateAuthResponse"></a>
<a id="tocSinitiateauthresponse"></a>
<a id="tocsinitiateauthresponse"></a>

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
    }
  }
}
```

Initiates the authentication response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeName|object|false|none|none|
|Session|object|false|none|none|
|ChallengeParameters|object|false|none|none|
|AuthenticationResult|object|false|none|none|

<h2 id="tocS_InitiateAuthRequest">InitiateAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitiateauthrequest"></a>
<a id="schema_InitiateAuthRequest"></a>
<a id="tocSinitiateauthrequest"></a>
<a id="tocsinitiateauthrequest"></a>

```json
{
  "AuthFlow": {},
  "AuthParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "ClientId": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  }
}
```

Initiates the authentication request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthFlow|object|true|none|none|
|AuthParameters|object|false|none|none|
|ClientMetadata|object|false|none|none|
|ClientId|object|true|none|none|
|AnalyticsMetadata|object|false|none|none|
|UserContextData|object|false|none|none|

<h2 id="tocS_ListDevicesResponse">ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresponse"></a>
<a id="schema_ListDevicesResponse"></a>
<a id="tocSlistdevicesresponse"></a>
<a id="tocslistdevicesresponse"></a>

```json
{
  "Devices": {},
  "PaginationToken": {}
}
```

Represents the response to list devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_ListDevicesRequest">ListDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesrequest"></a>
<a id="schema_ListDevicesRequest"></a>
<a id="tocSlistdevicesrequest"></a>
<a id="tocslistdevicesrequest"></a>

```json
{
  "AccessToken": {},
  "Limit": {},
  "PaginationToken": {}
}
```

Represents the request to list the devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|Limit|object|false|none|none|
|PaginationToken|object|false|none|none|

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
  "UserPoolId": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityProvidersResponse">ListIdentityProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityprovidersresponse"></a>
<a id="schema_ListIdentityProvidersResponse"></a>
<a id="tocSlistidentityprovidersresponse"></a>
<a id="tocslistidentityprovidersresponse"></a>

```json
{
  "Providers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Providers|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityProvidersRequest">ListIdentityProvidersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityprovidersrequest"></a>
<a id="schema_ListIdentityProvidersRequest"></a>
<a id="tocSlistidentityprovidersrequest"></a>
<a id="tocslistidentityprovidersrequest"></a>

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceServersResponse">ListResourceServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceserversresponse"></a>
<a id="schema_ListResourceServersResponse"></a>
<a id="tocSlistresourceserversresponse"></a>
<a id="tocslistresourceserversresponse"></a>

```json
{
  "ResourceServers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceServers|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceServersRequest">ListResourceServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceserversrequest"></a>
<a id="schema_ListResourceServersRequest"></a>
<a id="tocSlistresourceserversrequest"></a>
<a id="tocslistresourceserversrequest"></a>

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|MaxResults|object|false|none|none|
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

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListUserImportJobsResponse">ListUserImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserimportjobsresponse"></a>
<a id="schema_ListUserImportJobsResponse"></a>
<a id="tocSlistuserimportjobsresponse"></a>
<a id="tocslistuserimportjobsresponse"></a>

```json
{
  "UserImportJobs": {},
  "PaginationToken": {}
}
```

Represents the response from the server to the request to list the user import jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserImportJobs|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_ListUserImportJobsRequest">ListUserImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuserimportjobsrequest"></a>
<a id="schema_ListUserImportJobsRequest"></a>
<a id="tocSlistuserimportjobsrequest"></a>
<a id="tocslistuserimportjobsrequest"></a>

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "PaginationToken": {}
}
```

Represents the request to list the user import jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|MaxResults|object|true|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_ListUserPoolClientsResponse">ListUserPoolClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpoolclientsresponse"></a>
<a id="schema_ListUserPoolClientsResponse"></a>
<a id="tocSlistuserpoolclientsresponse"></a>
<a id="tocslistuserpoolclientsresponse"></a>

```json
{
  "UserPoolClients": {},
  "NextToken": {}
}
```

Represents the response from the server that lists user pool clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolClients|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUserPoolClientsRequest">ListUserPoolClientsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpoolclientsrequest"></a>
<a id="schema_ListUserPoolClientsRequest"></a>
<a id="tocSlistuserpoolclientsrequest"></a>
<a id="tocslistuserpoolclientsrequest"></a>

```json
{
  "UserPoolId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

Represents the request to list the user pool clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUserPoolsResponse">ListUserPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpoolsresponse"></a>
<a id="schema_ListUserPoolsResponse"></a>
<a id="tocSlistuserpoolsresponse"></a>
<a id="tocslistuserpoolsresponse"></a>

```json
{
  "UserPools": {},
  "NextToken": {}
}
```

Represents the response to list user pools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPools|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUserPoolsRequest">ListUserPoolsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpoolsrequest"></a>
<a id="schema_ListUserPoolsRequest"></a>
<a id="tocSlistuserpoolsrequest"></a>
<a id="tocslistuserpoolsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

Represents the request to list user pools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|true|none|none|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "Users": {},
  "PaginationToken": {}
}
```

The response from the request to list users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|PaginationToken|object|false|none|none|

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{
  "UserPoolId": {},
  "AttributesToGet": {},
  "Limit": {},
  "PaginationToken": {},
  "Filter": {}
}
```

Represents the request to list users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|AttributesToGet|object|false|none|none|
|Limit|object|false|none|none|
|PaginationToken|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_ListUsersInGroupResponse">ListUsersInGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersingroupresponse"></a>
<a id="schema_ListUsersInGroupResponse"></a>
<a id="tocSlistusersingroupresponse"></a>
<a id="tocslistusersingroupresponse"></a>

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

<h2 id="tocS_ListUsersInGroupRequest">ListUsersInGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersingrouprequest"></a>
<a id="schema_ListUsersInGroupRequest"></a>
<a id="tocSlistusersingrouprequest"></a>
<a id="tocslistusersingrouprequest"></a>

```json
{
  "UserPoolId": {},
  "GroupName": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|GroupName|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ResendConfirmationCodeResponse">ResendConfirmationCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresendconfirmationcoderesponse"></a>
<a id="schema_ResendConfirmationCodeResponse"></a>
<a id="tocSresendconfirmationcoderesponse"></a>
<a id="tocsresendconfirmationcoderesponse"></a>

```json
{
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  }
}
```

The response from the server when Amazon Cognito makes the request to resend a confirmation code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeDeliveryDetails|object|false|none|none|

<h2 id="tocS_ResendConfirmationCodeRequest">ResendConfirmationCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendconfirmationcoderequest"></a>
<a id="schema_ResendConfirmationCodeRequest"></a>
<a id="tocSresendconfirmationcoderequest"></a>
<a id="tocsresendconfirmationcoderequest"></a>

```json
{
  "ClientId": {},
  "SecretHash": {},
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "Username": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to resend the confirmation code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|SecretHash|object|false|none|none|
|UserContextData|object|false|none|none|
|Username|object|true|none|none|
|AnalyticsMetadata|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_RespondToAuthChallengeResponse">RespondToAuthChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemarespondtoauthchallengeresponse"></a>
<a id="schema_RespondToAuthChallengeResponse"></a>
<a id="tocSrespondtoauthchallengeresponse"></a>
<a id="tocsrespondtoauthchallengeresponse"></a>

```json
{
  "ChallengeName": {},
  "Session": {},
  "ChallengeParameters": {
    "property1": "string",
    "property2": "string"
  },
  "AuthenticationResult": {
    "AccessToken": {},
    "ExpiresIn": {},
    "TokenType": {},
    "RefreshToken": {},
    "IdToken": {},
    "NewDeviceMetadata": {
      "DeviceKey": {},
      "DeviceGroupKey": {}
    }
  }
}
```

The response to respond to the authentication challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeName|object|false|none|none|
|Session|object|false|none|none|
|ChallengeParameters|object|false|none|none|
|AuthenticationResult|object|false|none|none|

<h2 id="tocS_RespondToAuthChallengeRequest">RespondToAuthChallengeRequest</h2>
<!-- backwards compatibility -->
<a id="schemarespondtoauthchallengerequest"></a>
<a id="schema_RespondToAuthChallengeRequest"></a>
<a id="tocSrespondtoauthchallengerequest"></a>
<a id="tocsrespondtoauthchallengerequest"></a>

```json
{
  "ClientId": {},
  "ChallengeName": {},
  "Session": {},
  "ChallengeResponses": {
    "property1": "string",
    "property2": "string"
  },
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The request to respond to an authentication challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|ChallengeName|object|true|none|none|
|Session|object|false|none|none|
|ChallengeResponses|object|false|none|none|
|AnalyticsMetadata|object|false|none|none|
|UserContextData|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_RevokeTokenResponse">RevokeTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevoketokenresponse"></a>
<a id="schema_RevokeTokenResponse"></a>
<a id="tocSrevoketokenresponse"></a>
<a id="tocsrevoketokenresponse"></a>

```json
{}
```

<h2 id="tocS_RevokeTokenRequest">RevokeTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevoketokenrequest"></a>
<a id="schema_RevokeTokenRequest"></a>
<a id="tocSrevoketokenrequest"></a>
<a id="tocsrevoketokenrequest"></a>

```json
{
  "Token": {},
  "ClientId": {},
  "ClientSecret": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Token|object|true|none|none|
|ClientId|object|true|none|none|
|ClientSecret|object|false|none|none|

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

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

<h2 id="tocS_UnsupportedTokenTypeException">UnsupportedTokenTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedtokentypeexception"></a>
<a id="schema_UnsupportedTokenTypeException"></a>
<a id="tocSunsupportedtokentypeexception"></a>
<a id="tocsunsupportedtokentypeexception"></a>

```json
null
```

<h2 id="tocS_SetLogDeliveryConfigurationResponse">SetLogDeliveryConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetlogdeliveryconfigurationresponse"></a>
<a id="schema_SetLogDeliveryConfigurationResponse"></a>
<a id="tocSsetlogdeliveryconfigurationresponse"></a>
<a id="tocssetlogdeliveryconfigurationresponse"></a>

```json
{
  "LogDeliveryConfiguration": {
    "UserPoolId": {},
    "LogConfigurations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogDeliveryConfiguration|object|false|none|none|

<h2 id="tocS_SetLogDeliveryConfigurationRequest">SetLogDeliveryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetlogdeliveryconfigurationrequest"></a>
<a id="schema_SetLogDeliveryConfigurationRequest"></a>
<a id="tocSsetlogdeliveryconfigurationrequest"></a>
<a id="tocssetlogdeliveryconfigurationrequest"></a>

```json
{
  "UserPoolId": {},
  "LogConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|LogConfigurations|object|true|none|none|

<h2 id="tocS_SetRiskConfigurationResponse">SetRiskConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetriskconfigurationresponse"></a>
<a id="schema_SetRiskConfigurationResponse"></a>
<a id="tocSsetriskconfigurationresponse"></a>
<a id="tocssetriskconfigurationresponse"></a>

```json
{
  "RiskConfiguration": {
    "UserPoolId": {},
    "ClientId": {},
    "CompromisedCredentialsRiskConfiguration": {
      "EventFilter": {},
      "Actions": {
        "EventAction": {}
      }
    },
    "AccountTakeoverRiskConfiguration": {
      "NotifyConfiguration": {
        "From": {},
        "ReplyTo": {},
        "SourceArn": {},
        "BlockEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "NoActionEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        },
        "MfaEmail": {
          "Subject": {},
          "HtmlBody": {},
          "TextBody": {}
        }
      },
      "Actions": {
        "LowAction": {
          "Notify": {},
          "EventAction": {}
        },
        "MediumAction": {
          "Notify": {},
          "EventAction": {}
        },
        "HighAction": {
          "Notify": {},
          "EventAction": {}
        }
      }
    },
    "RiskExceptionConfiguration": {
      "BlockedIPRangeList": {},
      "SkippedIPRangeList": {}
    },
    "LastModifiedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RiskConfiguration|object|true|none|none|

<h2 id="tocS_SetRiskConfigurationRequest">SetRiskConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetriskconfigurationrequest"></a>
<a id="schema_SetRiskConfigurationRequest"></a>
<a id="tocSsetriskconfigurationrequest"></a>
<a id="tocssetriskconfigurationrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "CompromisedCredentialsRiskConfiguration": {
    "EventFilter": {},
    "Actions": {
      "EventAction": {}
    }
  },
  "AccountTakeoverRiskConfiguration": {
    "NotifyConfiguration": {
      "From": {},
      "ReplyTo": {},
      "SourceArn": {},
      "BlockEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "NoActionEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "MfaEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      }
    },
    "Actions": {
      "LowAction": {
        "Notify": {},
        "EventAction": {}
      },
      "MediumAction": {
        "Notify": {},
        "EventAction": {}
      },
      "HighAction": {
        "Notify": {},
        "EventAction": {}
      }
    }
  },
  "RiskExceptionConfiguration": {
    "BlockedIPRangeList": {},
    "SkippedIPRangeList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|false|none|none|
|CompromisedCredentialsRiskConfiguration|object|false|none|none|
|AccountTakeoverRiskConfiguration|object|false|none|none|
|RiskExceptionConfiguration|object|false|none|none|

<h2 id="tocS_SetUICustomizationResponse">SetUICustomizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetuicustomizationresponse"></a>
<a id="schema_SetUICustomizationResponse"></a>
<a id="tocSsetuicustomizationresponse"></a>
<a id="tocssetuicustomizationresponse"></a>

```json
{
  "UICustomization": {
    "UserPoolId": {},
    "ClientId": {},
    "ImageUrl": {},
    "CSS": {},
    "CSSVersion": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UICustomization|object|true|none|none|

<h2 id="tocS_SetUICustomizationRequest">SetUICustomizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetuicustomizationrequest"></a>
<a id="schema_SetUICustomizationRequest"></a>
<a id="tocSsetuicustomizationrequest"></a>
<a id="tocssetuicustomizationrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "CSS": {},
  "ImageFile": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|false|none|none|
|CSS|object|false|none|none|
|ImageFile|object|false|none|none|

<h2 id="tocS_SetUserMFAPreferenceResponse">SetUserMFAPreferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetusermfapreferenceresponse"></a>
<a id="schema_SetUserMFAPreferenceResponse"></a>
<a id="tocSsetusermfapreferenceresponse"></a>
<a id="tocssetusermfapreferenceresponse"></a>

```json
{}
```

<h2 id="tocS_SetUserMFAPreferenceRequest">SetUserMFAPreferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetusermfapreferencerequest"></a>
<a id="schema_SetUserMFAPreferenceRequest"></a>
<a id="tocSsetusermfapreferencerequest"></a>
<a id="tocssetusermfapreferencerequest"></a>

```json
{
  "SMSMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "SoftwareTokenMfaSettings": {
    "Enabled": {},
    "PreferredMfa": {}
  },
  "AccessToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SMSMfaSettings|object|false|none|none|
|SoftwareTokenMfaSettings|object|false|none|none|
|AccessToken|object|true|none|none|

<h2 id="tocS_SetUserPoolMfaConfigResponse">SetUserPoolMfaConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetuserpoolmfaconfigresponse"></a>
<a id="schema_SetUserPoolMfaConfigResponse"></a>
<a id="tocSsetuserpoolmfaconfigresponse"></a>
<a id="tocssetuserpoolmfaconfigresponse"></a>

```json
{
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmsMfaConfiguration|object|false|none|none|
|SoftwareTokenMfaConfiguration|object|false|none|none|
|MfaConfiguration|object|false|none|none|

<h2 id="tocS_SetUserPoolMfaConfigRequest">SetUserPoolMfaConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetuserpoolmfaconfigrequest"></a>
<a id="schema_SetUserPoolMfaConfigRequest"></a>
<a id="tocSsetuserpoolmfaconfigrequest"></a>
<a id="tocssetuserpoolmfaconfigrequest"></a>

```json
{
  "UserPoolId": {},
  "SmsMfaConfiguration": {
    "SmsAuthenticationMessage": {},
    "SmsConfiguration": {
      "SnsCallerArn": {},
      "ExternalId": {},
      "SnsRegion": {}
    }
  },
  "SoftwareTokenMfaConfiguration": {
    "Enabled": {}
  },
  "MfaConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|SmsMfaConfiguration|object|false|none|none|
|SoftwareTokenMfaConfiguration|object|false|none|none|
|MfaConfiguration|object|false|none|none|

<h2 id="tocS_SetUserSettingsResponse">SetUserSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetusersettingsresponse"></a>
<a id="schema_SetUserSettingsResponse"></a>
<a id="tocSsetusersettingsresponse"></a>
<a id="tocssetusersettingsresponse"></a>

```json
{}
```

The response from the server for a set user settings request.

<h2 id="tocS_SetUserSettingsRequest">SetUserSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetusersettingsrequest"></a>
<a id="schema_SetUserSettingsRequest"></a>
<a id="tocSsetusersettingsrequest"></a>
<a id="tocssetusersettingsrequest"></a>

```json
{
  "AccessToken": {},
  "MFAOptions": {}
}
```

Represents the request to set user settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|MFAOptions|object|true|none|none|

<h2 id="tocS_SignUpResponse">SignUpResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignupresponse"></a>
<a id="schema_SignUpResponse"></a>
<a id="tocSsignupresponse"></a>
<a id="tocssignupresponse"></a>

```json
{
  "UserConfirmed": {},
  "CodeDeliveryDetails": {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  },
  "UserSub": {}
}
```

The response from the server for a registration request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserConfirmed|object|true|none|none|
|CodeDeliveryDetails|object|false|none|none|
|UserSub|object|true|none|none|

<h2 id="tocS_SignUpRequest">SignUpRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignuprequest"></a>
<a id="schema_SignUpRequest"></a>
<a id="tocSsignuprequest"></a>
<a id="tocssignuprequest"></a>

```json
{
  "ClientId": {},
  "SecretHash": {},
  "Username": {},
  "Password": {},
  "UserAttributes": {},
  "ValidationData": {},
  "AnalyticsMetadata": {
    "AnalyticsEndpointId": {}
  },
  "UserContextData": {
    "IpAddress": {},
    "EncodedData": {}
  },
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to register a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|SecretHash|object|false|none|none|
|Username|object|true|none|none|
|Password|object|true|none|none|
|UserAttributes|object|false|none|none|
|ValidationData|object|false|none|none|
|AnalyticsMetadata|object|false|none|none|
|UserContextData|object|false|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_StartUserImportJobResponse">StartUserImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartuserimportjobresponse"></a>
<a id="schema_StartUserImportJobResponse"></a>
<a id="tocSstartuserimportjobresponse"></a>
<a id="tocsstartuserimportjobresponse"></a>

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
  }
}
```

Represents the response from the server to the request to start the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserImportJob|object|false|none|none|

<h2 id="tocS_StartUserImportJobRequest">StartUserImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartuserimportjobrequest"></a>
<a id="schema_StartUserImportJobRequest"></a>
<a id="tocSstartuserimportjobrequest"></a>
<a id="tocsstartuserimportjobrequest"></a>

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

Represents the request to start the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|JobId|object|true|none|none|

<h2 id="tocS_StopUserImportJobResponse">StopUserImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopuserimportjobresponse"></a>
<a id="schema_StopUserImportJobResponse"></a>
<a id="tocSstopuserimportjobresponse"></a>
<a id="tocsstopuserimportjobresponse"></a>

```json
{
  "UserImportJob": {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
  }
}
```

Represents the response from the server to the request to stop the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserImportJob|object|false|none|none|

<h2 id="tocS_StopUserImportJobRequest">StopUserImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopuserimportjobrequest"></a>
<a id="schema_StopUserImportJobRequest"></a>
<a id="tocSstopuserimportjobrequest"></a>
<a id="tocsstopuserimportjobrequest"></a>

```json
{
  "UserPoolId": {},
  "JobId": {}
}
```

Represents the request to stop the user import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|JobId|object|true|none|none|

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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAuthEventFeedbackResponse">UpdateAuthEventFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautheventfeedbackresponse"></a>
<a id="schema_UpdateAuthEventFeedbackResponse"></a>
<a id="tocSupdateautheventfeedbackresponse"></a>
<a id="tocsupdateautheventfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAuthEventFeedbackRequest">UpdateAuthEventFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautheventfeedbackrequest"></a>
<a id="schema_UpdateAuthEventFeedbackRequest"></a>
<a id="tocSupdateautheventfeedbackrequest"></a>
<a id="tocsupdateautheventfeedbackrequest"></a>

```json
{
  "UserPoolId": {},
  "Username": {},
  "EventId": {},
  "FeedbackToken": {},
  "FeedbackValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Username|object|true|none|none|
|EventId|object|true|none|none|
|FeedbackToken|object|true|none|none|
|FeedbackValue|object|true|none|none|

<h2 id="tocS_UpdateDeviceStatusResponse">UpdateDeviceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicestatusresponse"></a>
<a id="schema_UpdateDeviceStatusResponse"></a>
<a id="tocSupdatedevicestatusresponse"></a>
<a id="tocsupdatedevicestatusresponse"></a>

```json
{}
```

The response to the request to update the device status.

<h2 id="tocS_UpdateDeviceStatusRequest">UpdateDeviceStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicestatusrequest"></a>
<a id="schema_UpdateDeviceStatusRequest"></a>
<a id="tocSupdatedevicestatusrequest"></a>
<a id="tocsupdatedevicestatusrequest"></a>

```json
{
  "AccessToken": {},
  "DeviceKey": {},
  "DeviceRememberedStatus": {}
}
```

Represents the request to update the device status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|DeviceKey|object|true|none|none|
|DeviceRememberedStatus|object|false|none|none|

<h2 id="tocS_UpdateGroupResponse">UpdateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupresponse"></a>
<a id="schema_UpdateGroupResponse"></a>
<a id="tocSupdategroupresponse"></a>
<a id="tocsupdategroupresponse"></a>

```json
{
  "Group": {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|object|false|none|none|

<h2 id="tocS_UpdateGroupRequest">UpdateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategrouprequest"></a>
<a id="schema_UpdateGroupRequest"></a>
<a id="tocSupdategrouprequest"></a>
<a id="tocsupdategrouprequest"></a>

```json
{
  "GroupName": {},
  "UserPoolId": {},
  "Description": {},
  "RoleArn": {},
  "Precedence": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|true|none|none|
|UserPoolId|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|Precedence|object|false|none|none|

<h2 id="tocS_UpdateIdentityProviderResponse">UpdateIdentityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateidentityproviderresponse"></a>
<a id="schema_UpdateIdentityProviderResponse"></a>
<a id="tocSupdateidentityproviderresponse"></a>
<a id="tocsupdateidentityproviderresponse"></a>

```json
{
  "IdentityProvider": {
    "UserPoolId": {},
    "ProviderName": {},
    "ProviderType": {},
    "ProviderDetails": {
      "property1": "string",
      "property2": "string"
    },
    "AttributeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "IdpIdentifiers": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityProvider|object|true|none|none|

<h2 id="tocS_UpdateIdentityProviderRequest">UpdateIdentityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateidentityproviderrequest"></a>
<a id="schema_UpdateIdentityProviderRequest"></a>
<a id="tocSupdateidentityproviderrequest"></a>
<a id="tocsupdateidentityproviderrequest"></a>

```json
{
  "UserPoolId": {},
  "ProviderName": {},
  "ProviderDetails": {
    "property1": "string",
    "property2": "string"
  },
  "AttributeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "IdpIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ProviderName|object|true|none|none|
|ProviderDetails|object|false|none|none|
|AttributeMapping|object|false|none|none|
|IdpIdentifiers|object|false|none|none|

<h2 id="tocS_UpdateResourceServerResponse">UpdateResourceServerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceserverresponse"></a>
<a id="schema_UpdateResourceServerResponse"></a>
<a id="tocSupdateresourceserverresponse"></a>
<a id="tocsupdateresourceserverresponse"></a>

```json
{
  "ResourceServer": {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceServer|object|true|none|none|

<h2 id="tocS_UpdateResourceServerRequest">UpdateResourceServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceserverrequest"></a>
<a id="schema_UpdateResourceServerRequest"></a>
<a id="tocSupdateresourceserverrequest"></a>
<a id="tocsupdateresourceserverrequest"></a>

```json
{
  "UserPoolId": {},
  "Identifier": {},
  "Name": {},
  "Scopes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Identifier|object|true|none|none|
|Name|object|true|none|none|
|Scopes|object|false|none|none|

<h2 id="tocS_UpdateUserAttributesResponse">UpdateUserAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserattributesresponse"></a>
<a id="schema_UpdateUserAttributesResponse"></a>
<a id="tocSupdateuserattributesresponse"></a>
<a id="tocsupdateuserattributesresponse"></a>

```json
{
  "CodeDeliveryDetailsList": {}
}
```

Represents the response from the server for the request to update user attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeDeliveryDetailsList|object|false|none|none|

<h2 id="tocS_UpdateUserAttributesRequest">UpdateUserAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserattributesrequest"></a>
<a id="schema_UpdateUserAttributesRequest"></a>
<a id="tocSupdateuserattributesrequest"></a>
<a id="tocsupdateuserattributesrequest"></a>

```json
{
  "UserAttributes": {},
  "AccessToken": {},
  "ClientMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the request to update user attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserAttributes|object|true|none|none|
|AccessToken|object|true|none|none|
|ClientMetadata|object|false|none|none|

<h2 id="tocS_UpdateUserPoolResponse">UpdateUserPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpoolresponse"></a>
<a id="schema_UpdateUserPoolResponse"></a>
<a id="tocSupdateuserpoolresponse"></a>
<a id="tocsupdateuserpoolresponse"></a>

```json
{}
```

Represents the response from the server when you make a request to update the user pool.

<h2 id="tocS_UpdateUserPoolRequest">UpdateUserPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpoolrequest"></a>
<a id="schema_UpdateUserPoolRequest"></a>
<a id="tocSupdateuserpoolrequest"></a>
<a id="tocsupdateuserpoolrequest"></a>

```json
{
  "UserPoolId": {},
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": {},
      "RequireUppercase": {},
      "RequireLowercase": {},
      "RequireNumbers": {},
      "RequireSymbols": {},
      "TemporaryPasswordValidityDays": {}
    }
  },
  "DeletionProtection": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "AutoVerifiedAttributes": {},
  "SmsVerificationMessage": {},
  "EmailVerificationMessage": {},
  "EmailVerificationSubject": {},
  "VerificationMessageTemplate": {
    "SmsMessage": {},
    "EmailMessage": {},
    "EmailSubject": {},
    "EmailMessageByLink": {},
    "EmailSubjectByLink": {},
    "DefaultEmailOption": {}
  },
  "SmsAuthenticationMessage": {},
  "UserAttributeUpdateSettings": {
    "AttributesRequireVerificationBeforeUpdate": {}
  },
  "MfaConfiguration": {},
  "DeviceConfiguration": {
    "ChallengeRequiredOnNewDevice": {},
    "DeviceOnlyRememberedOnUserPrompt": {}
  },
  "EmailConfiguration": {
    "SourceArn": {},
    "ReplyToEmailAddress": {},
    "EmailSendingAccount": {},
    "From": {},
    "ConfigurationSet": {}
  },
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  },
  "UserPoolTags": {
    "property1": "string",
    "property2": "string"
  },
  "AdminCreateUserConfig": {
    "AllowAdminCreateUserOnly": {},
    "UnusedAccountValidityDays": {},
    "InviteMessageTemplate": {
      "SMSMessage": {},
      "EmailMessage": {},
      "EmailSubject": {}
    }
  },
  "UserPoolAddOns": {
    "AdvancedSecurityMode": {}
  },
  "AccountRecoverySetting": {
    "RecoveryMechanisms": {}
  }
}
```

Represents the request to update the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|Policies|object|false|none|none|
|DeletionProtection|object|false|none|none|
|LambdaConfig|object|false|none|none|
|AutoVerifiedAttributes|object|false|none|none|
|SmsVerificationMessage|object|false|none|none|
|EmailVerificationMessage|object|false|none|none|
|EmailVerificationSubject|object|false|none|none|
|VerificationMessageTemplate|object|false|none|none|
|SmsAuthenticationMessage|object|false|none|none|
|UserAttributeUpdateSettings|object|false|none|none|
|MfaConfiguration|object|false|none|none|
|DeviceConfiguration|object|false|none|none|
|EmailConfiguration|object|false|none|none|
|SmsConfiguration|object|false|none|none|
|UserPoolTags|object|false|none|none|
|AdminCreateUserConfig|object|false|none|none|
|UserPoolAddOns|object|false|none|none|
|AccountRecoverySetting|object|false|none|none|

<h2 id="tocS_UpdateUserPoolClientResponse">UpdateUserPoolClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpoolclientresponse"></a>
<a id="schema_UpdateUserPoolClientResponse"></a>
<a id="tocSupdateuserpoolclientresponse"></a>
<a id="tocsupdateuserpoolclientresponse"></a>

```json
{
  "UserPoolClient": {
    "UserPoolId": {},
    "ClientName": {},
    "ClientId": {},
    "ClientSecret": {},
    "LastModifiedDate": {},
    "CreationDate": {},
    "RefreshTokenValidity": {},
    "AccessTokenValidity": {},
    "IdTokenValidity": {},
    "TokenValidityUnits": {
      "AccessToken": {},
      "IdToken": {},
      "RefreshToken": {}
    },
    "ReadAttributes": {},
    "WriteAttributes": {},
    "ExplicitAuthFlows": {},
    "SupportedIdentityProviders": {},
    "CallbackURLs": {},
    "LogoutURLs": {},
    "DefaultRedirectURI": {},
    "AllowedOAuthFlows": {},
    "AllowedOAuthScopes": {},
    "AllowedOAuthFlowsUserPoolClient": {},
    "AnalyticsConfiguration": {
      "ApplicationId": {},
      "ApplicationArn": {},
      "RoleArn": {},
      "ExternalId": {},
      "UserDataShared": {}
    },
    "PreventUserExistenceErrors": {},
    "EnableTokenRevocation": {},
    "EnablePropagateAdditionalUserContextData": {},
    "AuthSessionValidity": {}
  }
}
```

Represents the response from the server to the request to update the user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolClient|object|false|none|none|

<h2 id="tocS_UpdateUserPoolClientRequest">UpdateUserPoolClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpoolclientrequest"></a>
<a id="schema_UpdateUserPoolClientRequest"></a>
<a id="tocSupdateuserpoolclientrequest"></a>
<a id="tocsupdateuserpoolclientrequest"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "ClientName": {},
  "RefreshTokenValidity": {},
  "AccessTokenValidity": {},
  "IdTokenValidity": {},
  "TokenValidityUnits": {
    "AccessToken": {},
    "IdToken": {},
    "RefreshToken": {}
  },
  "ReadAttributes": {},
  "WriteAttributes": {},
  "ExplicitAuthFlows": {},
  "SupportedIdentityProviders": {},
  "CallbackURLs": {},
  "LogoutURLs": {},
  "DefaultRedirectURI": {},
  "AllowedOAuthFlows": {},
  "AllowedOAuthScopes": {},
  "AllowedOAuthFlowsUserPoolClient": {},
  "AnalyticsConfiguration": {
    "ApplicationId": {},
    "ApplicationArn": {},
    "RoleArn": {},
    "ExternalId": {},
    "UserDataShared": {}
  },
  "PreventUserExistenceErrors": {},
  "EnableTokenRevocation": {},
  "EnablePropagateAdditionalUserContextData": {},
  "AuthSessionValidity": {}
}
```

Represents the request to update the user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|ClientId|object|true|none|none|
|ClientName|object|false|none|none|
|RefreshTokenValidity|object|false|none|none|
|AccessTokenValidity|object|false|none|none|
|IdTokenValidity|object|false|none|none|
|TokenValidityUnits|object|false|none|none|
|ReadAttributes|object|false|none|none|
|WriteAttributes|object|false|none|none|
|ExplicitAuthFlows|object|false|none|none|
|SupportedIdentityProviders|object|false|none|none|
|CallbackURLs|object|false|none|none|
|LogoutURLs|object|false|none|none|
|DefaultRedirectURI|object|false|none|none|
|AllowedOAuthFlows|object|false|none|none|
|AllowedOAuthScopes|object|false|none|none|
|AllowedOAuthFlowsUserPoolClient|object|false|none|none|
|AnalyticsConfiguration|object|false|none|none|
|PreventUserExistenceErrors|object|false|none|none|
|EnableTokenRevocation|object|false|none|none|
|EnablePropagateAdditionalUserContextData|object|false|none|none|
|AuthSessionValidity|object|false|none|none|

<h2 id="tocS_UpdateUserPoolDomainResponse">UpdateUserPoolDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpooldomainresponse"></a>
<a id="schema_UpdateUserPoolDomainResponse"></a>
<a id="tocSupdateuserpooldomainresponse"></a>
<a id="tocsupdateuserpooldomainresponse"></a>

```json
{
  "CloudFrontDomain": {}
}
```

The UpdateUserPoolDomain response output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontDomain|object|false|none|none|

<h2 id="tocS_UpdateUserPoolDomainRequest">UpdateUserPoolDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpooldomainrequest"></a>
<a id="schema_UpdateUserPoolDomainRequest"></a>
<a id="tocSupdateuserpooldomainrequest"></a>
<a id="tocsupdateuserpooldomainrequest"></a>

```json
{
  "Domain": {},
  "UserPoolId": {},
  "CustomDomainConfig": {
    "CertificateArn": {}
  }
}
```

The UpdateUserPoolDomain request input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|
|UserPoolId|object|true|none|none|
|CustomDomainConfig|object|true|none|none|

<h2 id="tocS_VerifySoftwareTokenResponse">VerifySoftwareTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifysoftwaretokenresponse"></a>
<a id="schema_VerifySoftwareTokenResponse"></a>
<a id="tocSverifysoftwaretokenresponse"></a>
<a id="tocsverifysoftwaretokenresponse"></a>

```json
{
  "Status": {},
  "Session": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Session|object|false|none|none|

<h2 id="tocS_VerifySoftwareTokenRequest">VerifySoftwareTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifysoftwaretokenrequest"></a>
<a id="schema_VerifySoftwareTokenRequest"></a>
<a id="tocSverifysoftwaretokenrequest"></a>
<a id="tocsverifysoftwaretokenrequest"></a>

```json
{
  "AccessToken": {},
  "Session": {},
  "UserCode": {},
  "FriendlyDeviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|Session|object|false|none|none|
|UserCode|object|true|none|none|
|FriendlyDeviceName|object|false|none|none|

<h2 id="tocS_EnableSoftwareTokenMFAException">EnableSoftwareTokenMFAException</h2>
<!-- backwards compatibility -->
<a id="schemaenablesoftwaretokenmfaexception"></a>
<a id="schema_EnableSoftwareTokenMFAException"></a>
<a id="tocSenablesoftwaretokenmfaexception"></a>
<a id="tocsenablesoftwaretokenmfaexception"></a>

```json
null
```

<h2 id="tocS_VerifyUserAttributeResponse">VerifyUserAttributeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyuserattributeresponse"></a>
<a id="schema_VerifyUserAttributeResponse"></a>
<a id="tocSverifyuserattributeresponse"></a>
<a id="tocsverifyuserattributeresponse"></a>

```json
{}
```

A container representing the response from the server from the request to verify user attributes.

<h2 id="tocS_VerifyUserAttributeRequest">VerifyUserAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyuserattributerequest"></a>
<a id="schema_VerifyUserAttributeRequest"></a>
<a id="tocSverifyuserattributerequest"></a>
<a id="tocsverifyuserattributerequest"></a>

```json
{
  "AccessToken": {},
  "AttributeName": {},
  "Code": {}
}
```

Represents the request to verify user attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|true|none|none|
|AttributeName|object|true|none|none|
|Code|object|true|none|none|

<h2 id="tocS_AWSAccountIdType">AWSAccountIdType</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidtype"></a>
<a id="schema_AWSAccountIdType"></a>
<a id="tocSawsaccountidtype"></a>
<a id="tocsawsaccountidtype"></a>

```json
"string"
```

<h2 id="tocS_AccessTokenValidityType">AccessTokenValidityType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenvaliditytype"></a>
<a id="schema_AccessTokenValidityType"></a>
<a id="tocSaccesstokenvaliditytype"></a>
<a id="tocsaccesstokenvaliditytype"></a>

```json
1
```

<h2 id="tocS_RecoveryMechanismsType">RecoveryMechanismsType</h2>
<!-- backwards compatibility -->
<a id="schemarecoverymechanismstype"></a>
<a id="schema_RecoveryMechanismsType"></a>
<a id="tocSrecoverymechanismstype"></a>
<a id="tocsrecoverymechanismstype"></a>

```json
[
  {
    "Priority": {},
    "Name": {}
  }
]
```

<h2 id="tocS_AccountRecoverySettingType">AccountRecoverySettingType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountrecoverysettingtype"></a>
<a id="schema_AccountRecoverySettingType"></a>
<a id="tocSaccountrecoverysettingtype"></a>
<a id="tocsaccountrecoverysettingtype"></a>

```json
{
  "RecoveryMechanisms": {}
}
```

The data type for <code>AccountRecoverySetting</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecoveryMechanisms|object|false|none|none|

<h2 id="tocS_AccountTakeoverActionNotifyType">AccountTakeoverActionNotifyType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttakeoveractionnotifytype"></a>
<a id="schema_AccountTakeoverActionNotifyType"></a>
<a id="tocSaccounttakeoveractionnotifytype"></a>
<a id="tocsaccounttakeoveractionnotifytype"></a>

```json
true
```

<h2 id="tocS_AccountTakeoverEventActionType">AccountTakeoverEventActionType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttakeovereventactiontype"></a>
<a id="schema_AccountTakeoverEventActionType"></a>
<a id="tocSaccounttakeovereventactiontype"></a>
<a id="tocsaccounttakeovereventactiontype"></a>

```json
"BLOCK"
```

<h2 id="tocS_AccountTakeoverActionType">AccountTakeoverActionType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttakeoveractiontype"></a>
<a id="schema_AccountTakeoverActionType"></a>
<a id="tocSaccounttakeoveractiontype"></a>
<a id="tocsaccounttakeoveractiontype"></a>

```json
{
  "Notify": {},
  "EventAction": {}
}
```

Account takeover action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notify|object|true|none|none|
|EventAction|object|true|none|none|

<h2 id="tocS_AccountTakeoverActionsType">AccountTakeoverActionsType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttakeoveractionstype"></a>
<a id="schema_AccountTakeoverActionsType"></a>
<a id="tocSaccounttakeoveractionstype"></a>
<a id="tocsaccounttakeoveractionstype"></a>

```json
{
  "LowAction": {
    "Notify": {},
    "EventAction": {}
  },
  "MediumAction": {
    "Notify": {},
    "EventAction": {}
  },
  "HighAction": {
    "Notify": {},
    "EventAction": {}
  }
}
```

Account takeover actions type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LowAction|object|false|none|none|
|MediumAction|object|false|none|none|
|HighAction|object|false|none|none|

<h2 id="tocS_NotifyConfigurationType">NotifyConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemanotifyconfigurationtype"></a>
<a id="schema_NotifyConfigurationType"></a>
<a id="tocSnotifyconfigurationtype"></a>
<a id="tocsnotifyconfigurationtype"></a>

```json
{
  "From": {},
  "ReplyTo": {},
  "SourceArn": {},
  "BlockEmail": {
    "Subject": {},
    "HtmlBody": {},
    "TextBody": {}
  },
  "NoActionEmail": {
    "Subject": {},
    "HtmlBody": {},
    "TextBody": {}
  },
  "MfaEmail": {
    "Subject": {},
    "HtmlBody": {},
    "TextBody": {}
  }
}
```

The notify configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|From|object|false|none|none|
|ReplyTo|object|false|none|none|
|SourceArn|object|true|none|none|
|BlockEmail|object|false|none|none|
|NoActionEmail|object|false|none|none|
|MfaEmail|object|false|none|none|

<h2 id="tocS_AccountTakeoverRiskConfigurationType">AccountTakeoverRiskConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttakeoverriskconfigurationtype"></a>
<a id="schema_AccountTakeoverRiskConfigurationType"></a>
<a id="tocSaccounttakeoverriskconfigurationtype"></a>
<a id="tocsaccounttakeoverriskconfigurationtype"></a>

```json
{
  "NotifyConfiguration": {
    "From": {},
    "ReplyTo": {},
    "SourceArn": {},
    "BlockEmail": {
      "Subject": {},
      "HtmlBody": {},
      "TextBody": {}
    },
    "NoActionEmail": {
      "Subject": {},
      "HtmlBody": {},
      "TextBody": {}
    },
    "MfaEmail": {
      "Subject": {},
      "HtmlBody": {},
      "TextBody": {}
    }
  },
  "Actions": {
    "LowAction": {
      "Notify": {},
      "EventAction": {}
    },
    "MediumAction": {
      "Notify": {},
      "EventAction": {}
    },
    "HighAction": {
      "Notify": {},
      "EventAction": {}
    }
  }
}
```

Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotifyConfiguration|object|false|none|none|
|Actions|object|true|none|none|

<h2 id="tocS_UserPoolIdType">UserPoolIdType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolidtype"></a>
<a id="schema_UserPoolIdType"></a>
<a id="tocSuserpoolidtype"></a>
<a id="tocsuserpoolidtype"></a>

```json
"string"
```

<h2 id="tocS_CustomAttributesListType">CustomAttributesListType</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributeslisttype"></a>
<a id="schema_CustomAttributesListType"></a>
<a id="tocScustomattributeslisttype"></a>
<a id="tocscustomattributeslisttype"></a>

```json
[
  {
    "Name": {},
    "AttributeDataType": {},
    "DeveloperOnlyAttribute": {},
    "Mutable": {},
    "Required": {},
    "NumberAttributeConstraints": {
      "MinValue": {},
      "MaxValue": {}
    },
    "StringAttributeConstraints": {
      "MinLength": {},
      "MaxLength": {}
    }
  }
]
```

<h2 id="tocS_UsernameType">UsernameType</h2>
<!-- backwards compatibility -->
<a id="schemausernametype"></a>
<a id="schema_UsernameType"></a>
<a id="tocSusernametype"></a>
<a id="tocsusernametype"></a>

```json
"password"
```

<h2 id="tocS_GroupNameType">GroupNameType</h2>
<!-- backwards compatibility -->
<a id="schemagroupnametype"></a>
<a id="schema_GroupNameType"></a>
<a id="tocSgroupnametype"></a>
<a id="tocsgroupnametype"></a>

```json
"string"
```

<h2 id="tocS_ClientMetadataType">ClientMetadataType</h2>
<!-- backwards compatibility -->
<a id="schemaclientmetadatatype"></a>
<a id="schema_ClientMetadataType"></a>
<a id="tocSclientmetadatatype"></a>
<a id="tocsclientmetadatatype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_BooleanType">BooleanType</h2>
<!-- backwards compatibility -->
<a id="schemabooleantype"></a>
<a id="schema_BooleanType"></a>
<a id="tocSbooleantype"></a>
<a id="tocsbooleantype"></a>

```json
true
```

<h2 id="tocS_AdminCreateUserUnusedAccountValidityDaysType">AdminCreateUserUnusedAccountValidityDaysType</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreateuserunusedaccountvaliditydaystype"></a>
<a id="schema_AdminCreateUserUnusedAccountValidityDaysType"></a>
<a id="tocSadmincreateuserunusedaccountvaliditydaystype"></a>
<a id="tocsadmincreateuserunusedaccountvaliditydaystype"></a>

```json
0
```

<h2 id="tocS_MessageTemplateType">MessageTemplateType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetemplatetype"></a>
<a id="schema_MessageTemplateType"></a>
<a id="tocSmessagetemplatetype"></a>
<a id="tocsmessagetemplatetype"></a>

```json
{
  "SMSMessage": {},
  "EmailMessage": {},
  "EmailSubject": {}
}
```

The message template structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SMSMessage|object|false|none|none|
|EmailMessage|object|false|none|none|
|EmailSubject|object|false|none|none|

<h2 id="tocS_AdminCreateUserConfigType">AdminCreateUserConfigType</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreateuserconfigtype"></a>
<a id="schema_AdminCreateUserConfigType"></a>
<a id="tocSadmincreateuserconfigtype"></a>
<a id="tocsadmincreateuserconfigtype"></a>

```json
{
  "AllowAdminCreateUserOnly": {},
  "UnusedAccountValidityDays": {},
  "InviteMessageTemplate": {
    "SMSMessage": {},
    "EmailMessage": {},
    "EmailSubject": {}
  }
}
```

The configuration for creating a new user profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowAdminCreateUserOnly|object|false|none|none|
|UnusedAccountValidityDays|object|false|none|none|
|InviteMessageTemplate|object|false|none|none|

<h2 id="tocS_AttributeListType">AttributeListType</h2>
<!-- backwards compatibility -->
<a id="schemaattributelisttype"></a>
<a id="schema_AttributeListType"></a>
<a id="tocSattributelisttype"></a>
<a id="tocsattributelisttype"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_PasswordType">PasswordType</h2>
<!-- backwards compatibility -->
<a id="schemapasswordtype"></a>
<a id="schema_PasswordType"></a>
<a id="tocSpasswordtype"></a>
<a id="tocspasswordtype"></a>

```json
"password"
```

<h2 id="tocS_ForceAliasCreation">ForceAliasCreation</h2>
<!-- backwards compatibility -->
<a id="schemaforcealiascreation"></a>
<a id="schema_ForceAliasCreation"></a>
<a id="tocSforcealiascreation"></a>
<a id="tocsforcealiascreation"></a>

```json
true
```

<h2 id="tocS_MessageActionType">MessageActionType</h2>
<!-- backwards compatibility -->
<a id="schemamessageactiontype"></a>
<a id="schema_MessageActionType"></a>
<a id="tocSmessageactiontype"></a>
<a id="tocsmessageactiontype"></a>

```json
"RESEND"
```

<h2 id="tocS_DeliveryMediumListType">DeliveryMediumListType</h2>
<!-- backwards compatibility -->
<a id="schemadeliverymediumlisttype"></a>
<a id="schema_DeliveryMediumListType"></a>
<a id="tocSdeliverymediumlisttype"></a>
<a id="tocsdeliverymediumlisttype"></a>

```json
[
  "SMS"
]
```

<h2 id="tocS_UserType">UserType</h2>
<!-- backwards compatibility -->
<a id="schemausertype"></a>
<a id="schema_UserType"></a>
<a id="tocSusertype"></a>
<a id="tocsusertype"></a>

```json
{
  "Username": {},
  "Attributes": {},
  "UserCreateDate": {},
  "UserLastModifiedDate": {},
  "Enabled": {},
  "UserStatus": {},
  "MFAOptions": {}
}
```

A user profile in a Amazon Cognito user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Attributes|object|false|none|none|
|UserCreateDate|object|false|none|none|
|UserLastModifiedDate|object|false|none|none|
|Enabled|object|false|none|none|
|UserStatus|object|false|none|none|
|MFAOptions|object|false|none|none|

<h2 id="tocS_AttributeNameListType">AttributeNameListType</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelisttype"></a>
<a id="schema_AttributeNameListType"></a>
<a id="tocSattributenamelisttype"></a>
<a id="tocsattributenamelisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringType">StringType</h2>
<!-- backwards compatibility -->
<a id="schemastringtype"></a>
<a id="schema_StringType"></a>
<a id="tocSstringtype"></a>
<a id="tocsstringtype"></a>

```json
"string"
```

<h2 id="tocS_ProviderUserIdentifierType">ProviderUserIdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaprovideruseridentifiertype"></a>
<a id="schema_ProviderUserIdentifierType"></a>
<a id="tocSprovideruseridentifiertype"></a>
<a id="tocsprovideruseridentifiertype"></a>

```json
{
  "ProviderName": {},
  "ProviderAttributeName": {},
  "ProviderAttributeValue": {}
}
```

A container for information about an IdP for a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderName|object|false|none|none|
|ProviderAttributeName|object|false|none|none|
|ProviderAttributeValue|object|false|none|none|

<h2 id="tocS_DeviceKeyType">DeviceKeyType</h2>
<!-- backwards compatibility -->
<a id="schemadevicekeytype"></a>
<a id="schema_DeviceKeyType"></a>
<a id="tocSdevicekeytype"></a>
<a id="tocsdevicekeytype"></a>

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
{
  "DeviceKey": {},
  "DeviceAttributes": {},
  "DeviceCreateDate": {},
  "DeviceLastModifiedDate": {},
  "DeviceLastAuthenticatedDate": {}
}
```

The device type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceKey|object|false|none|none|
|DeviceAttributes|object|false|none|none|
|DeviceCreateDate|object|false|none|none|
|DeviceLastModifiedDate|object|false|none|none|
|DeviceLastAuthenticatedDate|object|false|none|none|

<h2 id="tocS_DateType">DateType</h2>
<!-- backwards compatibility -->
<a id="schemadatetype"></a>
<a id="schema_DateType"></a>
<a id="tocSdatetype"></a>
<a id="tocsdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UserStatusType">UserStatusType</h2>
<!-- backwards compatibility -->
<a id="schemauserstatustype"></a>
<a id="schema_UserStatusType"></a>
<a id="tocSuserstatustype"></a>
<a id="tocsuserstatustype"></a>

```json
"UNCONFIRMED"
```

<h2 id="tocS_MFAOptionListType">MFAOptionListType</h2>
<!-- backwards compatibility -->
<a id="schemamfaoptionlisttype"></a>
<a id="schema_MFAOptionListType"></a>
<a id="tocSmfaoptionlisttype"></a>
<a id="tocsmfaoptionlisttype"></a>

```json
[
  {
    "DeliveryMedium": {},
    "AttributeName": {}
  }
]
```

<h2 id="tocS_UserMFASettingListType">UserMFASettingListType</h2>
<!-- backwards compatibility -->
<a id="schemausermfasettinglisttype"></a>
<a id="schema_UserMFASettingListType"></a>
<a id="tocSusermfasettinglisttype"></a>
<a id="tocsusermfasettinglisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClientIdType">ClientIdType</h2>
<!-- backwards compatibility -->
<a id="schemaclientidtype"></a>
<a id="schema_ClientIdType"></a>
<a id="tocSclientidtype"></a>
<a id="tocsclientidtype"></a>

```json
"password"
```

<h2 id="tocS_AuthFlowType">AuthFlowType</h2>
<!-- backwards compatibility -->
<a id="schemaauthflowtype"></a>
<a id="schema_AuthFlowType"></a>
<a id="tocSauthflowtype"></a>
<a id="tocsauthflowtype"></a>

```json
"USER_SRP_AUTH"
```

<h2 id="tocS_AuthParametersType">AuthParametersType</h2>
<!-- backwards compatibility -->
<a id="schemaauthparameterstype"></a>
<a id="schema_AuthParametersType"></a>
<a id="tocSauthparameterstype"></a>
<a id="tocsauthparameterstype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_AnalyticsMetadataType">AnalyticsMetadataType</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsmetadatatype"></a>
<a id="schema_AnalyticsMetadataType"></a>
<a id="tocSanalyticsmetadatatype"></a>
<a id="tocsanalyticsmetadatatype"></a>

```json
{
  "AnalyticsEndpointId": {}
}
```

<p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalyticsEndpointId|object|false|none|none|

<h2 id="tocS_ContextDataType">ContextDataType</h2>
<!-- backwards compatibility -->
<a id="schemacontextdatatype"></a>
<a id="schema_ContextDataType"></a>
<a id="tocScontextdatatype"></a>
<a id="tocscontextdatatype"></a>

```json
{
  "IpAddress": {},
  "ServerName": {},
  "ServerPath": {},
  "HttpHeaders": {},
  "EncodedData": {}
}
```

Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|true|none|none|
|ServerName|object|true|none|none|
|ServerPath|object|true|none|none|
|HttpHeaders|object|true|none|none|
|EncodedData|object|false|none|none|

<h2 id="tocS_ChallengeNameType">ChallengeNameType</h2>
<!-- backwards compatibility -->
<a id="schemachallengenametype"></a>
<a id="schema_ChallengeNameType"></a>
<a id="tocSchallengenametype"></a>
<a id="tocschallengenametype"></a>

```json
"SMS_MFA"
```

<h2 id="tocS_SessionType">SessionType</h2>
<!-- backwards compatibility -->
<a id="schemasessiontype"></a>
<a id="schema_SessionType"></a>
<a id="tocSsessiontype"></a>
<a id="tocssessiontype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ChallengeParametersType">ChallengeParametersType</h2>
<!-- backwards compatibility -->
<a id="schemachallengeparameterstype"></a>
<a id="schema_ChallengeParametersType"></a>
<a id="tocSchallengeparameterstype"></a>
<a id="tocschallengeparameterstype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_AuthenticationResultType">AuthenticationResultType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationresulttype"></a>
<a id="schema_AuthenticationResultType"></a>
<a id="tocSauthenticationresulttype"></a>
<a id="tocsauthenticationresulttype"></a>

```json
{
  "AccessToken": {},
  "ExpiresIn": {},
  "TokenType": {},
  "RefreshToken": {},
  "IdToken": {},
  "NewDeviceMetadata": {
    "DeviceKey": {},
    "DeviceGroupKey": {}
  }
}
```

The authentication result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|ExpiresIn|object|false|none|none|
|TokenType|object|false|none|none|
|RefreshToken|object|false|none|none|
|IdToken|object|false|none|none|
|NewDeviceMetadata|object|false|none|none|

<h2 id="tocS_QueryLimitType">QueryLimitType</h2>
<!-- backwards compatibility -->
<a id="schemaquerylimittype"></a>
<a id="schema_QueryLimitType"></a>
<a id="tocSquerylimittype"></a>
<a id="tocsquerylimittype"></a>

```json
0
```

<h2 id="tocS_SearchPaginationTokenType">SearchPaginationTokenType</h2>
<!-- backwards compatibility -->
<a id="schemasearchpaginationtokentype"></a>
<a id="schema_SearchPaginationTokenType"></a>
<a id="tocSsearchpaginationtokentype"></a>
<a id="tocssearchpaginationtokentype"></a>

```json
"string"
```

<h2 id="tocS_DeviceListType">DeviceListType</h2>
<!-- backwards compatibility -->
<a id="schemadevicelisttype"></a>
<a id="schema_DeviceListType"></a>
<a id="tocSdevicelisttype"></a>
<a id="tocsdevicelisttype"></a>

```json
[
  {
    "DeviceKey": {},
    "DeviceAttributes": {},
    "DeviceCreateDate": {},
    "DeviceLastModifiedDate": {},
    "DeviceLastAuthenticatedDate": {}
  }
]
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

<h2 id="tocS_GroupListType">GroupListType</h2>
<!-- backwards compatibility -->
<a id="schemagrouplisttype"></a>
<a id="schema_GroupListType"></a>
<a id="tocSgrouplisttype"></a>
<a id="tocsgrouplisttype"></a>

```json
[
  {
    "GroupName": {},
    "UserPoolId": {},
    "Description": {},
    "RoleArn": {},
    "Precedence": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_AuthEventsType">AuthEventsType</h2>
<!-- backwards compatibility -->
<a id="schemaautheventstype"></a>
<a id="schema_AuthEventsType"></a>
<a id="tocSautheventstype"></a>
<a id="tocsautheventstype"></a>

```json
[
  {
    "EventId": {},
    "EventType": {},
    "CreationDate": {},
    "EventResponse": {},
    "EventRisk": {
      "RiskDecision": {},
      "RiskLevel": {},
      "CompromisedCredentialsDetected": {}
    },
    "ChallengeResponses": {},
    "EventContextData": {
      "IpAddress": {},
      "DeviceName": {},
      "Timezone": {},
      "City": {},
      "Country": {}
    },
    "EventFeedback": {
      "FeedbackValue": {},
      "Provider": {},
      "FeedbackDate": {}
    }
  }
]
```

<h2 id="tocS_ChallengeResponsesType">ChallengeResponsesType</h2>
<!-- backwards compatibility -->
<a id="schemachallengeresponsestype"></a>
<a id="schema_ChallengeResponsesType"></a>
<a id="tocSchallengeresponsestype"></a>
<a id="tocschallengeresponsestype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_SMSMfaSettingsType">SMSMfaSettingsType</h2>
<!-- backwards compatibility -->
<a id="schemasmsmfasettingstype"></a>
<a id="schema_SMSMfaSettingsType"></a>
<a id="tocSsmsmfasettingstype"></a>
<a id="tocssmsmfasettingstype"></a>

```json
{
  "Enabled": {},
  "PreferredMfa": {}
}
```

The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|PreferredMfa|object|false|none|none|

<h2 id="tocS_SoftwareTokenMfaSettingsType">SoftwareTokenMfaSettingsType</h2>
<!-- backwards compatibility -->
<a id="schemasoftwaretokenmfasettingstype"></a>
<a id="schema_SoftwareTokenMfaSettingsType"></a>
<a id="tocSsoftwaretokenmfasettingstype"></a>
<a id="tocssoftwaretokenmfasettingstype"></a>

```json
{
  "Enabled": {},
  "PreferredMfa": {}
}
```

The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|PreferredMfa|object|false|none|none|

<h2 id="tocS_EventIdType">EventIdType</h2>
<!-- backwards compatibility -->
<a id="schemaeventidtype"></a>
<a id="schema_EventIdType"></a>
<a id="tocSeventidtype"></a>
<a id="tocseventidtype"></a>

```json
"string"
```

<h2 id="tocS_FeedbackValueType">FeedbackValueType</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackvaluetype"></a>
<a id="schema_FeedbackValueType"></a>
<a id="tocSfeedbackvaluetype"></a>
<a id="tocsfeedbackvaluetype"></a>

```json
"Valid"
```

<h2 id="tocS_DeviceRememberedStatusType">DeviceRememberedStatusType</h2>
<!-- backwards compatibility -->
<a id="schemadevicerememberedstatustype"></a>
<a id="schema_DeviceRememberedStatusType"></a>
<a id="tocSdevicerememberedstatustype"></a>
<a id="tocsdevicerememberedstatustype"></a>

```json
"remembered"
```

<h2 id="tocS_AdvancedSecurityModeType">AdvancedSecurityModeType</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsecuritymodetype"></a>
<a id="schema_AdvancedSecurityModeType"></a>
<a id="tocSadvancedsecuritymodetype"></a>
<a id="tocsadvancedsecuritymodetype"></a>

```json
"OFF"
```

<h2 id="tocS_AliasAttributeType">AliasAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaaliasattributetype"></a>
<a id="schema_AliasAttributeType"></a>
<a id="tocSaliasattributetype"></a>
<a id="tocsaliasattributetype"></a>

```json
"phone_number"
```

<h2 id="tocS_AliasAttributesListType">AliasAttributesListType</h2>
<!-- backwards compatibility -->
<a id="schemaaliasattributeslisttype"></a>
<a id="schema_AliasAttributesListType"></a>
<a id="tocSaliasattributeslisttype"></a>
<a id="tocsaliasattributeslisttype"></a>

```json
[
  "phone_number"
]
```

<h2 id="tocS_HexStringType">HexStringType</h2>
<!-- backwards compatibility -->
<a id="schemahexstringtype"></a>
<a id="schema_HexStringType"></a>
<a id="tocShexstringtype"></a>
<a id="tocshexstringtype"></a>

```json
"string"
```

<h2 id="tocS_ArnType">ArnType</h2>
<!-- backwards compatibility -->
<a id="schemaarntype"></a>
<a id="schema_ArnType"></a>
<a id="tocSarntype"></a>
<a id="tocsarntype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AnalyticsConfigurationType">AnalyticsConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsconfigurationtype"></a>
<a id="schema_AnalyticsConfigurationType"></a>
<a id="tocSanalyticsconfigurationtype"></a>
<a id="tocsanalyticsconfigurationtype"></a>

```json
{
  "ApplicationId": {},
  "ApplicationArn": {},
  "RoleArn": {},
  "ExternalId": {},
  "UserDataShared": {}
}
```

<p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.</p> <note> <p>In Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationId|object|false|none|none|
|ApplicationArn|object|false|none|none|
|RoleArn|object|false|none|none|
|ExternalId|object|false|none|none|
|UserDataShared|object|false|none|none|

<h2 id="tocS_TokenModelType">TokenModelType</h2>
<!-- backwards compatibility -->
<a id="schematokenmodeltype"></a>
<a id="schema_TokenModelType"></a>
<a id="tocStokenmodeltype"></a>
<a id="tocstokenmodeltype"></a>

```json
"password"
```

<h2 id="tocS_SecretCodeType">SecretCodeType</h2>
<!-- backwards compatibility -->
<a id="schemasecretcodetype"></a>
<a id="schema_SecretCodeType"></a>
<a id="tocSsecretcodetype"></a>
<a id="tocssecretcodetype"></a>

```json
"password"
```

<h2 id="tocS_AttributeDataType">AttributeDataType</h2>
<!-- backwards compatibility -->
<a id="schemaattributedatatype"></a>
<a id="schema_AttributeDataType"></a>
<a id="tocSattributedatatype"></a>
<a id="tocsattributedatatype"></a>

```json
"String"
```

<h2 id="tocS_AttributeType">AttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaattributetype"></a>
<a id="schema_AttributeType"></a>
<a id="tocSattributetype"></a>
<a id="tocsattributetype"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Specifies whether the attribute is standard or custom.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AttributeMappingKeyType">AttributeMappingKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaattributemappingkeytype"></a>
<a id="schema_AttributeMappingKeyType"></a>
<a id="tocSattributemappingkeytype"></a>
<a id="tocsattributemappingkeytype"></a>

```json
"string"
```

<h2 id="tocS_AttributeMappingType">AttributeMappingType</h2>
<!-- backwards compatibility -->
<a id="schemaattributemappingtype"></a>
<a id="schema_AttributeMappingType"></a>
<a id="tocSattributemappingtype"></a>
<a id="tocsattributemappingtype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_AttributeNameType">AttributeNameType</h2>
<!-- backwards compatibility -->
<a id="schemaattributenametype"></a>
<a id="schema_AttributeNameType"></a>
<a id="tocSattributenametype"></a>
<a id="tocsattributenametype"></a>

```json
"string"
```

<h2 id="tocS_AttributeValueType">AttributeValueType</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluetype"></a>
<a id="schema_AttributeValueType"></a>
<a id="tocSattributevaluetype"></a>
<a id="tocsattributevaluetype"></a>

```json
"password"
```

<h2 id="tocS_VerifiedAttributeType">VerifiedAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaverifiedattributetype"></a>
<a id="schema_VerifiedAttributeType"></a>
<a id="tocSverifiedattributetype"></a>
<a id="tocsverifiedattributetype"></a>

```json
"phone_number"
```

<h2 id="tocS_AttributesRequireVerificationBeforeUpdateType">AttributesRequireVerificationBeforeUpdateType</h2>
<!-- backwards compatibility -->
<a id="schemaattributesrequireverificationbeforeupdatetype"></a>
<a id="schema_AttributesRequireVerificationBeforeUpdateType"></a>
<a id="tocSattributesrequireverificationbeforeupdatetype"></a>
<a id="tocsattributesrequireverificationbeforeupdatetype"></a>

```json
[
  "phone_number"
]
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"SignIn"
```

<h2 id="tocS_EventResponseType">EventResponseType</h2>
<!-- backwards compatibility -->
<a id="schemaeventresponsetype"></a>
<a id="schema_EventResponseType"></a>
<a id="tocSeventresponsetype"></a>
<a id="tocseventresponsetype"></a>

```json
"Pass"
```

<h2 id="tocS_EventRiskType">EventRiskType</h2>
<!-- backwards compatibility -->
<a id="schemaeventrisktype"></a>
<a id="schema_EventRiskType"></a>
<a id="tocSeventrisktype"></a>
<a id="tocseventrisktype"></a>

```json
{
  "RiskDecision": {},
  "RiskLevel": {},
  "CompromisedCredentialsDetected": {}
}
```

The event risk type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RiskDecision|object|false|none|none|
|RiskLevel|object|false|none|none|
|CompromisedCredentialsDetected|object|false|none|none|

<h2 id="tocS_ChallengeResponseListType">ChallengeResponseListType</h2>
<!-- backwards compatibility -->
<a id="schemachallengeresponselisttype"></a>
<a id="schema_ChallengeResponseListType"></a>
<a id="tocSchallengeresponselisttype"></a>
<a id="tocschallengeresponselisttype"></a>

```json
[
  {
    "ChallengeName": {},
    "ChallengeResponse": {}
  }
]
```

<h2 id="tocS_EventContextDataType">EventContextDataType</h2>
<!-- backwards compatibility -->
<a id="schemaeventcontextdatatype"></a>
<a id="schema_EventContextDataType"></a>
<a id="tocSeventcontextdatatype"></a>
<a id="tocseventcontextdatatype"></a>

```json
{
  "IpAddress": {},
  "DeviceName": {},
  "Timezone": {},
  "City": {},
  "Country": {}
}
```

Specifies the user context data captured at the time of an event request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|false|none|none|
|DeviceName|object|false|none|none|
|Timezone|object|false|none|none|
|City|object|false|none|none|
|Country|object|false|none|none|

<h2 id="tocS_EventFeedbackType">EventFeedbackType</h2>
<!-- backwards compatibility -->
<a id="schemaeventfeedbacktype"></a>
<a id="schema_EventFeedbackType"></a>
<a id="tocSeventfeedbacktype"></a>
<a id="tocseventfeedbacktype"></a>

```json
{
  "FeedbackValue": {},
  "Provider": {},
  "FeedbackDate": {}
}
```

Specifies the event feedback type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeedbackValue|object|true|none|none|
|Provider|object|true|none|none|
|FeedbackDate|object|false|none|none|

<h2 id="tocS_AuthEventType">AuthEventType</h2>
<!-- backwards compatibility -->
<a id="schemaautheventtype"></a>
<a id="schema_AuthEventType"></a>
<a id="tocSautheventtype"></a>
<a id="tocsautheventtype"></a>

```json
{
  "EventId": {},
  "EventType": {},
  "CreationDate": {},
  "EventResponse": {},
  "EventRisk": {
    "RiskDecision": {},
    "RiskLevel": {},
    "CompromisedCredentialsDetected": {}
  },
  "ChallengeResponses": {},
  "EventContextData": {
    "IpAddress": {},
    "DeviceName": {},
    "Timezone": {},
    "City": {},
    "Country": {}
  },
  "EventFeedback": {
    "FeedbackValue": {},
    "Provider": {},
    "FeedbackDate": {}
  }
}
```

The authentication event type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventId|object|false|none|none|
|EventType|object|false|none|none|
|CreationDate|object|false|none|none|
|EventResponse|object|false|none|none|
|EventRisk|object|false|none|none|
|ChallengeResponses|object|false|none|none|
|EventContextData|object|false|none|none|
|EventFeedback|object|false|none|none|

<h2 id="tocS_AuthSessionValidityType">AuthSessionValidityType</h2>
<!-- backwards compatibility -->
<a id="schemaauthsessionvaliditytype"></a>
<a id="schema_AuthSessionValidityType"></a>
<a id="tocSauthsessionvaliditytype"></a>
<a id="tocsauthsessionvaliditytype"></a>

```json
3
```

<h2 id="tocS_IntegerType">IntegerType</h2>
<!-- backwards compatibility -->
<a id="schemaintegertype"></a>
<a id="schema_IntegerType"></a>
<a id="tocSintegertype"></a>
<a id="tocsintegertype"></a>

```json
0
```

<h2 id="tocS_NewDeviceMetadataType">NewDeviceMetadataType</h2>
<!-- backwards compatibility -->
<a id="schemanewdevicemetadatatype"></a>
<a id="schema_NewDeviceMetadataType"></a>
<a id="tocSnewdevicemetadatatype"></a>
<a id="tocsnewdevicemetadatatype"></a>

```json
{
  "DeviceKey": {},
  "DeviceGroupKey": {}
}
```

The new device metadata type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceKey|object|false|none|none|
|DeviceGroupKey|object|false|none|none|

<h2 id="tocS_BlockedIPRangeListType">BlockedIPRangeListType</h2>
<!-- backwards compatibility -->
<a id="schemablockediprangelisttype"></a>
<a id="schema_BlockedIPRangeListType"></a>
<a id="tocSblockediprangelisttype"></a>
<a id="tocsblockediprangelisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CSSType">CSSType</h2>
<!-- backwards compatibility -->
<a id="schemacsstype"></a>
<a id="schema_CSSType"></a>
<a id="tocScsstype"></a>
<a id="tocscsstype"></a>

```json
"string"
```

<h2 id="tocS_CSSVersionType">CSSVersionType</h2>
<!-- backwards compatibility -->
<a id="schemacssversiontype"></a>
<a id="schema_CSSVersionType"></a>
<a id="tocScssversiontype"></a>
<a id="tocscssversiontype"></a>

```json
"string"
```

<h2 id="tocS_RedirectUrlType">RedirectUrlType</h2>
<!-- backwards compatibility -->
<a id="schemaredirecturltype"></a>
<a id="schema_RedirectUrlType"></a>
<a id="tocSredirecturltype"></a>
<a id="tocsredirecturltype"></a>

```json
"string"
```

<h2 id="tocS_CallbackURLsListType">CallbackURLsListType</h2>
<!-- backwards compatibility -->
<a id="schemacallbackurlslisttype"></a>
<a id="schema_CallbackURLsListType"></a>
<a id="tocScallbackurlslisttype"></a>
<a id="tocscallbackurlslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ChallengeName">ChallengeName</h2>
<!-- backwards compatibility -->
<a id="schemachallengename"></a>
<a id="schema_ChallengeName"></a>
<a id="tocSchallengename"></a>
<a id="tocschallengename"></a>

```json
"Password"
```

<h2 id="tocS_ChallengeResponse">ChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemachallengeresponse"></a>
<a id="schema_ChallengeResponse"></a>
<a id="tocSchallengeresponse"></a>
<a id="tocschallengeresponse"></a>

```json
"Success"
```

<h2 id="tocS_ChallengeResponseType">ChallengeResponseType</h2>
<!-- backwards compatibility -->
<a id="schemachallengeresponsetype"></a>
<a id="schema_ChallengeResponseType"></a>
<a id="tocSchallengeresponsetype"></a>
<a id="tocschallengeresponsetype"></a>

```json
{
  "ChallengeName": {},
  "ChallengeResponse": {}
}
```

The challenge response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeName|object|false|none|none|
|ChallengeResponse|object|false|none|none|

<h2 id="tocS_ClientNameType">ClientNameType</h2>
<!-- backwards compatibility -->
<a id="schemaclientnametype"></a>
<a id="schema_ClientNameType"></a>
<a id="tocSclientnametype"></a>
<a id="tocsclientnametype"></a>

```json
"string"
```

<h2 id="tocS_ClientPermissionType">ClientPermissionType</h2>
<!-- backwards compatibility -->
<a id="schemaclientpermissiontype"></a>
<a id="schema_ClientPermissionType"></a>
<a id="tocSclientpermissiontype"></a>
<a id="tocsclientpermissiontype"></a>

```json
"string"
```

<h2 id="tocS_ClientPermissionListType">ClientPermissionListType</h2>
<!-- backwards compatibility -->
<a id="schemaclientpermissionlisttype"></a>
<a id="schema_ClientPermissionListType"></a>
<a id="tocSclientpermissionlisttype"></a>
<a id="tocsclientpermissionlisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClientSecretType">ClientSecretType</h2>
<!-- backwards compatibility -->
<a id="schemaclientsecrettype"></a>
<a id="schema_ClientSecretType"></a>
<a id="tocSclientsecrettype"></a>
<a id="tocsclientsecrettype"></a>

```json
"password"
```

<h2 id="tocS_CloudWatchLogsConfigurationType">CloudWatchLogsConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsconfigurationtype"></a>
<a id="schema_CloudWatchLogsConfigurationType"></a>
<a id="tocScloudwatchlogsconfigurationtype"></a>
<a id="tocscloudwatchlogsconfigurationtype"></a>

```json
{
  "LogGroupArn": {}
}
```

The CloudWatch logging destination of a user pool detailed activity logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroupArn|object|false|none|none|

<h2 id="tocS_CodeDeliveryDetailsType">CodeDeliveryDetailsType</h2>
<!-- backwards compatibility -->
<a id="schemacodedeliverydetailstype"></a>
<a id="schema_CodeDeliveryDetailsType"></a>
<a id="tocScodedeliverydetailstype"></a>
<a id="tocscodedeliverydetailstype"></a>

```json
{
  "Destination": {},
  "DeliveryMedium": {},
  "AttributeName": {}
}
```

The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|false|none|none|
|DeliveryMedium|object|false|none|none|
|AttributeName|object|false|none|none|

<h2 id="tocS_CodeDeliveryDetailsListType">CodeDeliveryDetailsListType</h2>
<!-- backwards compatibility -->
<a id="schemacodedeliverydetailslisttype"></a>
<a id="schema_CodeDeliveryDetailsListType"></a>
<a id="tocScodedeliverydetailslisttype"></a>
<a id="tocscodedeliverydetailslisttype"></a>

```json
[
  {
    "Destination": {},
    "DeliveryMedium": {},
    "AttributeName": {}
  }
]
```

<h2 id="tocS_DeliveryMediumType">DeliveryMediumType</h2>
<!-- backwards compatibility -->
<a id="schemadeliverymediumtype"></a>
<a id="schema_DeliveryMediumType"></a>
<a id="tocSdeliverymediumtype"></a>
<a id="tocsdeliverymediumtype"></a>

```json
"SMS"
```

<h2 id="tocS_CompletionMessageType">CompletionMessageType</h2>
<!-- backwards compatibility -->
<a id="schemacompletionmessagetype"></a>
<a id="schema_CompletionMessageType"></a>
<a id="tocScompletionmessagetype"></a>
<a id="tocscompletionmessagetype"></a>

```json
"string"
```

<h2 id="tocS_CompromisedCredentialsEventActionType">CompromisedCredentialsEventActionType</h2>
<!-- backwards compatibility -->
<a id="schemacompromisedcredentialseventactiontype"></a>
<a id="schema_CompromisedCredentialsEventActionType"></a>
<a id="tocScompromisedcredentialseventactiontype"></a>
<a id="tocscompromisedcredentialseventactiontype"></a>

```json
"BLOCK"
```

<h2 id="tocS_CompromisedCredentialsActionsType">CompromisedCredentialsActionsType</h2>
<!-- backwards compatibility -->
<a id="schemacompromisedcredentialsactionstype"></a>
<a id="schema_CompromisedCredentialsActionsType"></a>
<a id="tocScompromisedcredentialsactionstype"></a>
<a id="tocscompromisedcredentialsactionstype"></a>

```json
{
  "EventAction": {}
}
```

The compromised credentials actions type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventAction|object|true|none|none|

<h2 id="tocS_EventFiltersType">EventFiltersType</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilterstype"></a>
<a id="schema_EventFiltersType"></a>
<a id="tocSeventfilterstype"></a>
<a id="tocseventfilterstype"></a>

```json
[
  "SIGN_IN"
]
```

<h2 id="tocS_CompromisedCredentialsRiskConfigurationType">CompromisedCredentialsRiskConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemacompromisedcredentialsriskconfigurationtype"></a>
<a id="schema_CompromisedCredentialsRiskConfigurationType"></a>
<a id="tocScompromisedcredentialsriskconfigurationtype"></a>
<a id="tocscompromisedcredentialsriskconfigurationtype"></a>

```json
{
  "EventFilter": {},
  "Actions": {
    "EventAction": {}
  }
}
```

The compromised credentials risk configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventFilter|object|false|none|none|
|Actions|object|true|none|none|

<h2 id="tocS_DeviceSecretVerifierConfigType">DeviceSecretVerifierConfigType</h2>
<!-- backwards compatibility -->
<a id="schemadevicesecretverifierconfigtype"></a>
<a id="schema_DeviceSecretVerifierConfigType"></a>
<a id="tocSdevicesecretverifierconfigtype"></a>
<a id="tocsdevicesecretverifierconfigtype"></a>

```json
{
  "PasswordVerifier": {},
  "Salt": {}
}
```

The device verifier against which it is authenticated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordVerifier|object|false|none|none|
|Salt|object|false|none|none|

<h2 id="tocS_DeviceNameType">DeviceNameType</h2>
<!-- backwards compatibility -->
<a id="schemadevicenametype"></a>
<a id="schema_DeviceNameType"></a>
<a id="tocSdevicenametype"></a>
<a id="tocsdevicenametype"></a>

```json
"string"
```

<h2 id="tocS_SecretHashType">SecretHashType</h2>
<!-- backwards compatibility -->
<a id="schemasecrethashtype"></a>
<a id="schema_SecretHashType"></a>
<a id="tocSsecrethashtype"></a>
<a id="tocssecrethashtype"></a>

```json
"password"
```

<h2 id="tocS_ConfirmationCodeType">ConfirmationCodeType</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationcodetype"></a>
<a id="schema_ConfirmationCodeType"></a>
<a id="tocSconfirmationcodetype"></a>
<a id="tocsconfirmationcodetype"></a>

```json
"string"
```

<h2 id="tocS_UserContextDataType">UserContextDataType</h2>
<!-- backwards compatibility -->
<a id="schemausercontextdatatype"></a>
<a id="schema_UserContextDataType"></a>
<a id="tocSusercontextdatatype"></a>
<a id="tocsusercontextdatatype"></a>

```json
{
  "IpAddress": {},
  "EncodedData": {}
}
```

Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IpAddress|object|false|none|none|
|EncodedData|object|false|none|none|

<h2 id="tocS_HttpHeaderList">HttpHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemahttpheaderlist"></a>
<a id="schema_HttpHeaderList"></a>
<a id="tocShttpheaderlist"></a>
<a id="tocshttpheaderlist"></a>

```json
[
  {
    "headerName": {},
    "headerValue": {}
  }
]
```

<h2 id="tocS_DescriptionType">DescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemadescriptiontype"></a>
<a id="schema_DescriptionType"></a>
<a id="tocSdescriptiontype"></a>
<a id="tocsdescriptiontype"></a>

```json
"string"
```

<h2 id="tocS_PrecedenceType">PrecedenceType</h2>
<!-- backwards compatibility -->
<a id="schemaprecedencetype"></a>
<a id="schema_PrecedenceType"></a>
<a id="tocSprecedencetype"></a>
<a id="tocsprecedencetype"></a>

```json
0
```

<h2 id="tocS_GroupType">GroupType</h2>
<!-- backwards compatibility -->
<a id="schemagrouptype"></a>
<a id="schema_GroupType"></a>
<a id="tocSgrouptype"></a>
<a id="tocsgrouptype"></a>

```json
{
  "GroupName": {},
  "UserPoolId": {},
  "Description": {},
  "RoleArn": {},
  "Precedence": {},
  "LastModifiedDate": {},
  "CreationDate": {}
}
```

The group type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupName|object|false|none|none|
|UserPoolId|object|false|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|Precedence|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_ProviderNameTypeV1">ProviderNameTypeV1</h2>
<!-- backwards compatibility -->
<a id="schemaprovidernametypev1"></a>
<a id="schema_ProviderNameTypeV1"></a>
<a id="tocSprovidernametypev1"></a>
<a id="tocsprovidernametypev1"></a>

```json
"string"
```

<h2 id="tocS_IdentityProviderTypeType">IdentityProviderTypeType</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidertypetype"></a>
<a id="schema_IdentityProviderTypeType"></a>
<a id="tocSidentityprovidertypetype"></a>
<a id="tocsidentityprovidertypetype"></a>

```json
"SAML"
```

<h2 id="tocS_ProviderDetailsType">ProviderDetailsType</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdetailstype"></a>
<a id="schema_ProviderDetailsType"></a>
<a id="tocSproviderdetailstype"></a>
<a id="tocsproviderdetailstype"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|none|

<h2 id="tocS_IdpIdentifiersListType">IdpIdentifiersListType</h2>
<!-- backwards compatibility -->
<a id="schemaidpidentifierslisttype"></a>
<a id="schema_IdpIdentifiersListType"></a>
<a id="tocSidpidentifierslisttype"></a>
<a id="tocsidpidentifierslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdentityProviderType">IdentityProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidertype"></a>
<a id="schema_IdentityProviderType"></a>
<a id="tocSidentityprovidertype"></a>
<a id="tocsidentityprovidertype"></a>

```json
{
  "UserPoolId": {},
  "ProviderName": {},
  "ProviderType": {},
  "ProviderDetails": {
    "property1": "string",
    "property2": "string"
  },
  "AttributeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "IdpIdentifiers": {},
  "LastModifiedDate": {},
  "CreationDate": {}
}
```

A container for information about an IdP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|ProviderName|object|false|none|none|
|ProviderType|object|false|none|none|
|ProviderDetails|object|false|none|none|
|AttributeMapping|object|false|none|none|
|IdpIdentifiers|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_ResourceServerIdentifierType">ResourceServerIdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserveridentifiertype"></a>
<a id="schema_ResourceServerIdentifierType"></a>
<a id="tocSresourceserveridentifiertype"></a>
<a id="tocsresourceserveridentifiertype"></a>

```json
"string"
```

<h2 id="tocS_ResourceServerNameType">ResourceServerNameType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceservernametype"></a>
<a id="schema_ResourceServerNameType"></a>
<a id="tocSresourceservernametype"></a>
<a id="tocsresourceservernametype"></a>

```json
"string"
```

<h2 id="tocS_ResourceServerScopeListType">ResourceServerScopeListType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverscopelisttype"></a>
<a id="schema_ResourceServerScopeListType"></a>
<a id="tocSresourceserverscopelisttype"></a>
<a id="tocsresourceserverscopelisttype"></a>

```json
[
  {
    "ScopeName": {},
    "ScopeDescription": {}
  }
]
```

<h2 id="tocS_ResourceServerType">ResourceServerType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceservertype"></a>
<a id="schema_ResourceServerType"></a>
<a id="tocSresourceservertype"></a>
<a id="tocsresourceservertype"></a>

```json
{
  "UserPoolId": {},
  "Identifier": {},
  "Name": {},
  "Scopes": {}
}
```

A container for information about a resource server for a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|Identifier|object|false|none|none|
|Name|object|false|none|none|
|Scopes|object|false|none|none|

<h2 id="tocS_UserImportJobNameType">UserImportJobNameType</h2>
<!-- backwards compatibility -->
<a id="schemauserimportjobnametype"></a>
<a id="schema_UserImportJobNameType"></a>
<a id="tocSuserimportjobnametype"></a>
<a id="tocsuserimportjobnametype"></a>

```json
"string"
```

<h2 id="tocS_UserImportJobType">UserImportJobType</h2>
<!-- backwards compatibility -->
<a id="schemauserimportjobtype"></a>
<a id="schema_UserImportJobType"></a>
<a id="tocSuserimportjobtype"></a>
<a id="tocsuserimportjobtype"></a>

```json
{
  "JobName": {},
  "JobId": {},
  "UserPoolId": {},
  "PreSignedUrl": {},
  "CreationDate": {},
  "StartDate": {},
  "CompletionDate": {},
  "Status": {},
  "CloudWatchLogsRoleArn": {},
  "ImportedUsers": {},
  "SkippedUsers": {},
  "FailedUsers": {},
  "CompletionMessage": {}
}
```

The user import job type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobId|object|false|none|none|
|UserPoolId|object|false|none|none|
|PreSignedUrl|object|false|none|none|
|CreationDate|object|false|none|none|
|StartDate|object|false|none|none|
|CompletionDate|object|false|none|none|
|Status|object|false|none|none|
|CloudWatchLogsRoleArn|object|false|none|none|
|ImportedUsers|object|false|none|none|
|SkippedUsers|object|false|none|none|
|FailedUsers|object|false|none|none|
|CompletionMessage|object|false|none|none|

<h2 id="tocS_GenerateSecret">GenerateSecret</h2>
<!-- backwards compatibility -->
<a id="schemageneratesecret"></a>
<a id="schema_GenerateSecret"></a>
<a id="tocSgeneratesecret"></a>
<a id="tocsgeneratesecret"></a>

```json
true
```

<h2 id="tocS_RefreshTokenValidityType">RefreshTokenValidityType</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokenvaliditytype"></a>
<a id="schema_RefreshTokenValidityType"></a>
<a id="tocSrefreshtokenvaliditytype"></a>
<a id="tocsrefreshtokenvaliditytype"></a>

```json
0
```

<h2 id="tocS_IdTokenValidityType">IdTokenValidityType</h2>
<!-- backwards compatibility -->
<a id="schemaidtokenvaliditytype"></a>
<a id="schema_IdTokenValidityType"></a>
<a id="tocSidtokenvaliditytype"></a>
<a id="tocsidtokenvaliditytype"></a>

```json
1
```

<h2 id="tocS_TokenValidityUnitsType">TokenValidityUnitsType</h2>
<!-- backwards compatibility -->
<a id="schematokenvalidityunitstype"></a>
<a id="schema_TokenValidityUnitsType"></a>
<a id="tocStokenvalidityunitstype"></a>
<a id="tocstokenvalidityunitstype"></a>

```json
{
  "AccessToken": {},
  "IdToken": {},
  "RefreshToken": {}
}
```

The data type TokenValidityUnits specifies the time units you use when you set the duration of ID, access, and refresh tokens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|IdToken|object|false|none|none|
|RefreshToken|object|false|none|none|

<h2 id="tocS_ExplicitAuthFlowsListType">ExplicitAuthFlowsListType</h2>
<!-- backwards compatibility -->
<a id="schemaexplicitauthflowslisttype"></a>
<a id="schema_ExplicitAuthFlowsListType"></a>
<a id="tocSexplicitauthflowslisttype"></a>
<a id="tocsexplicitauthflowslisttype"></a>

```json
[
  "ADMIN_NO_SRP_AUTH"
]
```

<h2 id="tocS_SupportedIdentityProvidersListType">SupportedIdentityProvidersListType</h2>
<!-- backwards compatibility -->
<a id="schemasupportedidentityproviderslisttype"></a>
<a id="schema_SupportedIdentityProvidersListType"></a>
<a id="tocSsupportedidentityproviderslisttype"></a>
<a id="tocssupportedidentityproviderslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LogoutURLsListType">LogoutURLsListType</h2>
<!-- backwards compatibility -->
<a id="schemalogouturlslisttype"></a>
<a id="schema_LogoutURLsListType"></a>
<a id="tocSlogouturlslisttype"></a>
<a id="tocslogouturlslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OAuthFlowsType">OAuthFlowsType</h2>
<!-- backwards compatibility -->
<a id="schemaoauthflowstype"></a>
<a id="schema_OAuthFlowsType"></a>
<a id="tocSoauthflowstype"></a>
<a id="tocsoauthflowstype"></a>

```json
[
  "code"
]
```

<h2 id="tocS_ScopeListType">ScopeListType</h2>
<!-- backwards compatibility -->
<a id="schemascopelisttype"></a>
<a id="schema_ScopeListType"></a>
<a id="tocSscopelisttype"></a>
<a id="tocsscopelisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PreventUserExistenceErrorTypes">PreventUserExistenceErrorTypes</h2>
<!-- backwards compatibility -->
<a id="schemapreventuserexistenceerrortypes"></a>
<a id="schema_PreventUserExistenceErrorTypes"></a>
<a id="tocSpreventuserexistenceerrortypes"></a>
<a id="tocspreventuserexistenceerrortypes"></a>

```json
"LEGACY"
```

<h2 id="tocS_WrappedBooleanType">WrappedBooleanType</h2>
<!-- backwards compatibility -->
<a id="schemawrappedbooleantype"></a>
<a id="schema_WrappedBooleanType"></a>
<a id="tocSwrappedbooleantype"></a>
<a id="tocswrappedbooleantype"></a>

```json
true
```

<h2 id="tocS_UserPoolClientType">UserPoolClientType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolclienttype"></a>
<a id="schema_UserPoolClientType"></a>
<a id="tocSuserpoolclienttype"></a>
<a id="tocsuserpoolclienttype"></a>

```json
{
  "UserPoolId": {},
  "ClientName": {},
  "ClientId": {},
  "ClientSecret": {},
  "LastModifiedDate": {},
  "CreationDate": {},
  "RefreshTokenValidity": {},
  "AccessTokenValidity": {},
  "IdTokenValidity": {},
  "TokenValidityUnits": {
    "AccessToken": {},
    "IdToken": {},
    "RefreshToken": {}
  },
  "ReadAttributes": {},
  "WriteAttributes": {},
  "ExplicitAuthFlows": {},
  "SupportedIdentityProviders": {},
  "CallbackURLs": {},
  "LogoutURLs": {},
  "DefaultRedirectURI": {},
  "AllowedOAuthFlows": {},
  "AllowedOAuthScopes": {},
  "AllowedOAuthFlowsUserPoolClient": {},
  "AnalyticsConfiguration": {
    "ApplicationId": {},
    "ApplicationArn": {},
    "RoleArn": {},
    "ExternalId": {},
    "UserDataShared": {}
  },
  "PreventUserExistenceErrors": {},
  "EnableTokenRevocation": {},
  "EnablePropagateAdditionalUserContextData": {},
  "AuthSessionValidity": {}
}
```

Contains information about a user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|ClientName|object|false|none|none|
|ClientId|object|false|none|none|
|ClientSecret|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|
|RefreshTokenValidity|object|false|none|none|
|AccessTokenValidity|object|false|none|none|
|IdTokenValidity|object|false|none|none|
|TokenValidityUnits|object|false|none|none|
|ReadAttributes|object|false|none|none|
|WriteAttributes|object|false|none|none|
|ExplicitAuthFlows|object|false|none|none|
|SupportedIdentityProviders|object|false|none|none|
|CallbackURLs|object|false|none|none|
|LogoutURLs|object|false|none|none|
|DefaultRedirectURI|object|false|none|none|
|AllowedOAuthFlows|object|false|none|none|
|AllowedOAuthScopes|object|false|none|none|
|AllowedOAuthFlowsUserPoolClient|object|false|none|none|
|AnalyticsConfiguration|object|false|none|none|
|PreventUserExistenceErrors|object|false|none|none|
|EnableTokenRevocation|object|false|none|none|
|EnablePropagateAdditionalUserContextData|object|false|none|none|
|AuthSessionValidity|object|false|none|none|

<h2 id="tocS_DomainType">DomainType</h2>
<!-- backwards compatibility -->
<a id="schemadomaintype"></a>
<a id="schema_DomainType"></a>
<a id="tocSdomaintype"></a>
<a id="tocsdomaintype"></a>

```json
"string"
```

<h2 id="tocS_CustomDomainConfigType">CustomDomainConfigType</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomainconfigtype"></a>
<a id="schema_CustomDomainConfigType"></a>
<a id="tocScustomdomainconfigtype"></a>
<a id="tocscustomdomainconfigtype"></a>

```json
{
  "CertificateArn": {}
}
```

The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_UserPoolNameType">UserPoolNameType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolnametype"></a>
<a id="schema_UserPoolNameType"></a>
<a id="tocSuserpoolnametype"></a>
<a id="tocsuserpoolnametype"></a>

```json
"string"
```

<h2 id="tocS_UserPoolPolicyType">UserPoolPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolpolicytype"></a>
<a id="schema_UserPoolPolicyType"></a>
<a id="tocSuserpoolpolicytype"></a>
<a id="tocsuserpoolpolicytype"></a>

```json
{
  "PasswordPolicy": {
    "MinimumLength": {},
    "RequireUppercase": {},
    "RequireLowercase": {},
    "RequireNumbers": {},
    "RequireSymbols": {},
    "TemporaryPasswordValidityDays": {}
  }
}
```

The policy associated with a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PasswordPolicy|object|false|none|none|

<h2 id="tocS_DeletionProtectionType">DeletionProtectionType</h2>
<!-- backwards compatibility -->
<a id="schemadeletionprotectiontype"></a>
<a id="schema_DeletionProtectionType"></a>
<a id="tocSdeletionprotectiontype"></a>
<a id="tocsdeletionprotectiontype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_LambdaConfigType">LambdaConfigType</h2>
<!-- backwards compatibility -->
<a id="schemalambdaconfigtype"></a>
<a id="schema_LambdaConfigType"></a>
<a id="tocSlambdaconfigtype"></a>
<a id="tocslambdaconfigtype"></a>

```json
{
  "PreSignUp": {},
  "CustomMessage": {},
  "PostConfirmation": {},
  "PreAuthentication": {},
  "PostAuthentication": {},
  "DefineAuthChallenge": {},
  "CreateAuthChallenge": {},
  "VerifyAuthChallengeResponse": {},
  "PreTokenGeneration": {},
  "UserMigration": {},
  "CustomSMSSender": {
    "LambdaVersion": {},
    "LambdaArn": {}
  },
  "CustomEmailSender": {
    "LambdaVersion": {},
    "LambdaArn": {}
  },
  "KMSKeyID": {}
}
```

Specifies the configuration for Lambda triggers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreSignUp|object|false|none|none|
|CustomMessage|object|false|none|none|
|PostConfirmation|object|false|none|none|
|PreAuthentication|object|false|none|none|
|PostAuthentication|object|false|none|none|
|DefineAuthChallenge|object|false|none|none|
|CreateAuthChallenge|object|false|none|none|
|VerifyAuthChallengeResponse|object|false|none|none|
|PreTokenGeneration|object|false|none|none|
|UserMigration|object|false|none|none|
|CustomSMSSender|object|false|none|none|
|CustomEmailSender|object|false|none|none|
|KMSKeyID|object|false|none|none|

<h2 id="tocS_VerifiedAttributesListType">VerifiedAttributesListType</h2>
<!-- backwards compatibility -->
<a id="schemaverifiedattributeslisttype"></a>
<a id="schema_VerifiedAttributesListType"></a>
<a id="tocSverifiedattributeslisttype"></a>
<a id="tocsverifiedattributeslisttype"></a>

```json
[
  "phone_number"
]
```

<h2 id="tocS_UsernameAttributesListType">UsernameAttributesListType</h2>
<!-- backwards compatibility -->
<a id="schemausernameattributeslisttype"></a>
<a id="schema_UsernameAttributesListType"></a>
<a id="tocSusernameattributeslisttype"></a>
<a id="tocsusernameattributeslisttype"></a>

```json
[
  "phone_number"
]
```

<h2 id="tocS_SmsVerificationMessageType">SmsVerificationMessageType</h2>
<!-- backwards compatibility -->
<a id="schemasmsverificationmessagetype"></a>
<a id="schema_SmsVerificationMessageType"></a>
<a id="tocSsmsverificationmessagetype"></a>
<a id="tocssmsverificationmessagetype"></a>

```json
"string"
```

<h2 id="tocS_EmailVerificationMessageType">EmailVerificationMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationmessagetype"></a>
<a id="schema_EmailVerificationMessageType"></a>
<a id="tocSemailverificationmessagetype"></a>
<a id="tocsemailverificationmessagetype"></a>

```json
"string"
```

<h2 id="tocS_EmailVerificationSubjectType">EmailVerificationSubjectType</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationsubjecttype"></a>
<a id="schema_EmailVerificationSubjectType"></a>
<a id="tocSemailverificationsubjecttype"></a>
<a id="tocsemailverificationsubjecttype"></a>

```json
"string"
```

<h2 id="tocS_VerificationMessageTemplateType">VerificationMessageTemplateType</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmessagetemplatetype"></a>
<a id="schema_VerificationMessageTemplateType"></a>
<a id="tocSverificationmessagetemplatetype"></a>
<a id="tocsverificationmessagetemplatetype"></a>

```json
{
  "SmsMessage": {},
  "EmailMessage": {},
  "EmailSubject": {},
  "EmailMessageByLink": {},
  "EmailSubjectByLink": {},
  "DefaultEmailOption": {}
}
```

The template for verification messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmsMessage|object|false|none|none|
|EmailMessage|object|false|none|none|
|EmailSubject|object|false|none|none|
|EmailMessageByLink|object|false|none|none|
|EmailSubjectByLink|object|false|none|none|
|DefaultEmailOption|object|false|none|none|

<h2 id="tocS_UserPoolMfaType">UserPoolMfaType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolmfatype"></a>
<a id="schema_UserPoolMfaType"></a>
<a id="tocSuserpoolmfatype"></a>
<a id="tocsuserpoolmfatype"></a>

```json
"OFF"
```

<h2 id="tocS_UserAttributeUpdateSettingsType">UserAttributeUpdateSettingsType</h2>
<!-- backwards compatibility -->
<a id="schemauserattributeupdatesettingstype"></a>
<a id="schema_UserAttributeUpdateSettingsType"></a>
<a id="tocSuserattributeupdatesettingstype"></a>
<a id="tocsuserattributeupdatesettingstype"></a>

```json
{
  "AttributesRequireVerificationBeforeUpdate": {}
}
```

The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributesRequireVerificationBeforeUpdate|object|false|none|none|

<h2 id="tocS_DeviceConfigurationType">DeviceConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconfigurationtype"></a>
<a id="schema_DeviceConfigurationType"></a>
<a id="tocSdeviceconfigurationtype"></a>
<a id="tocsdeviceconfigurationtype"></a>

```json
{
  "ChallengeRequiredOnNewDevice": {},
  "DeviceOnlyRememberedOnUserPrompt": {}
}
```

<p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html"> DescribeUserPool</a> request returns a null value for this object when the user pool isn't configured to remember devices. When device remembering is active, you can remember a user's device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user's device to <code>remembered</code> or <code>not_remembered</code>.</p> <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the authentication parameters in your user's <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html"> InitiateAuth</a> request. If your app doesn't include a <code>DEVICE_KEY</code> parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store these values to use in future device-authentication requests.</p> <note> <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you activate the device remembering for the user pool.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChallengeRequiredOnNewDevice|object|false|none|none|
|DeviceOnlyRememberedOnUserPrompt|object|false|none|none|

<h2 id="tocS_EmailConfigurationType">EmailConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaemailconfigurationtype"></a>
<a id="schema_EmailConfigurationType"></a>
<a id="tocSemailconfigurationtype"></a>
<a id="tocsemailconfigurationtype"></a>

```json
{
  "SourceArn": {},
  "ReplyToEmailAddress": {},
  "EmailSendingAccount": {},
  "From": {},
  "ConfigurationSet": {}
}
```

<p>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</p> <note> <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceArn|object|false|none|none|
|ReplyToEmailAddress|object|false|none|none|
|EmailSendingAccount|object|false|none|none|
|From|object|false|none|none|
|ConfigurationSet|object|false|none|none|

<h2 id="tocS_SmsConfigurationType">SmsConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemasmsconfigurationtype"></a>
<a id="schema_SmsConfigurationType"></a>
<a id="tocSsmsconfigurationtype"></a>
<a id="tocssmsconfigurationtype"></a>

```json
{
  "SnsCallerArn": {},
  "ExternalId": {},
  "SnsRegion": {}
}
```

The SMS configuration type is the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnsCallerArn|object|true|none|none|
|ExternalId|object|false|none|none|
|SnsRegion|object|false|none|none|

<h2 id="tocS_UserPoolTagsType">UserPoolTagsType</h2>
<!-- backwards compatibility -->
<a id="schemauserpooltagstype"></a>
<a id="schema_UserPoolTagsType"></a>
<a id="tocSuserpooltagstype"></a>
<a id="tocsuserpooltagstype"></a>

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

<h2 id="tocS_SchemaAttributesListType">SchemaAttributesListType</h2>
<!-- backwards compatibility -->
<a id="schemaschemaattributeslisttype"></a>
<a id="schema_SchemaAttributesListType"></a>
<a id="tocSschemaattributeslisttype"></a>
<a id="tocsschemaattributeslisttype"></a>

```json
[
  {
    "Name": {},
    "AttributeDataType": {},
    "DeveloperOnlyAttribute": {},
    "Mutable": {},
    "Required": {},
    "NumberAttributeConstraints": {
      "MinValue": {},
      "MaxValue": {}
    },
    "StringAttributeConstraints": {
      "MinLength": {},
      "MaxLength": {}
    }
  }
]
```

<h2 id="tocS_UserPoolAddOnsType">UserPoolAddOnsType</h2>
<!-- backwards compatibility -->
<a id="schemauserpooladdonstype"></a>
<a id="schema_UserPoolAddOnsType"></a>
<a id="tocSuserpooladdonstype"></a>
<a id="tocsuserpooladdonstype"></a>

```json
{
  "AdvancedSecurityMode": {}
}
```

<p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdvancedSecurityMode|object|true|none|none|

<h2 id="tocS_UsernameConfigurationType">UsernameConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemausernameconfigurationtype"></a>
<a id="schema_UsernameConfigurationType"></a>
<a id="tocSusernameconfigurationtype"></a>
<a id="tocsusernameconfigurationtype"></a>

```json
{
  "CaseSensitive": {}
}
```

The username configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaseSensitive|object|true|none|none|

<h2 id="tocS_UserPoolType">UserPoolType</h2>
<!-- backwards compatibility -->
<a id="schemauserpooltype"></a>
<a id="schema_UserPoolType"></a>
<a id="tocSuserpooltype"></a>
<a id="tocsuserpooltype"></a>

```json
{
  "Id": {},
  "Name": {},
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": {},
      "RequireUppercase": {},
      "RequireLowercase": {},
      "RequireNumbers": {},
      "RequireSymbols": {},
      "TemporaryPasswordValidityDays": {}
    }
  },
  "DeletionProtection": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "Status": {},
  "LastModifiedDate": {},
  "CreationDate": {},
  "SchemaAttributes": {},
  "AutoVerifiedAttributes": {},
  "AliasAttributes": {},
  "UsernameAttributes": {},
  "SmsVerificationMessage": {},
  "EmailVerificationMessage": {},
  "EmailVerificationSubject": {},
  "VerificationMessageTemplate": {
    "SmsMessage": {},
    "EmailMessage": {},
    "EmailSubject": {},
    "EmailMessageByLink": {},
    "EmailSubjectByLink": {},
    "DefaultEmailOption": {}
  },
  "SmsAuthenticationMessage": {},
  "UserAttributeUpdateSettings": {
    "AttributesRequireVerificationBeforeUpdate": {}
  },
  "MfaConfiguration": {},
  "DeviceConfiguration": {
    "ChallengeRequiredOnNewDevice": {},
    "DeviceOnlyRememberedOnUserPrompt": {}
  },
  "EstimatedNumberOfUsers": {},
  "EmailConfiguration": {
    "SourceArn": {},
    "ReplyToEmailAddress": {},
    "EmailSendingAccount": {},
    "From": {},
    "ConfigurationSet": {}
  },
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  },
  "UserPoolTags": {
    "property1": "string",
    "property2": "string"
  },
  "SmsConfigurationFailure": {},
  "EmailConfigurationFailure": {},
  "Domain": {},
  "CustomDomain": {},
  "AdminCreateUserConfig": {
    "AllowAdminCreateUserOnly": {},
    "UnusedAccountValidityDays": {},
    "InviteMessageTemplate": {
      "SMSMessage": {},
      "EmailMessage": {},
      "EmailSubject": {}
    }
  },
  "UserPoolAddOns": {
    "AdvancedSecurityMode": {}
  },
  "UsernameConfiguration": {
    "CaseSensitive": {}
  },
  "Arn": {},
  "AccountRecoverySetting": {
    "RecoveryMechanisms": {}
  }
}
```

A container for information about the user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Policies|object|false|none|none|
|DeletionProtection|object|false|none|none|
|LambdaConfig|object|false|none|none|
|Status|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|
|SchemaAttributes|object|false|none|none|
|AutoVerifiedAttributes|object|false|none|none|
|AliasAttributes|object|false|none|none|
|UsernameAttributes|object|false|none|none|
|SmsVerificationMessage|object|false|none|none|
|EmailVerificationMessage|object|false|none|none|
|EmailVerificationSubject|object|false|none|none|
|VerificationMessageTemplate|object|false|none|none|
|SmsAuthenticationMessage|object|false|none|none|
|UserAttributeUpdateSettings|object|false|none|none|
|MfaConfiguration|object|false|none|none|
|DeviceConfiguration|object|false|none|none|
|EstimatedNumberOfUsers|object|false|none|none|
|EmailConfiguration|object|false|none|none|
|SmsConfiguration|object|false|none|none|
|UserPoolTags|object|false|none|none|
|SmsConfigurationFailure|object|false|none|none|
|EmailConfigurationFailure|object|false|none|none|
|Domain|object|false|none|none|
|CustomDomain|object|false|none|none|
|AdminCreateUserConfig|object|false|none|none|
|UserPoolAddOns|object|false|none|none|
|UsernameConfiguration|object|false|none|none|
|Arn|object|false|none|none|
|AccountRecoverySetting|object|false|none|none|

<h2 id="tocS_CustomAttributeNameType">CustomAttributeNameType</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributenametype"></a>
<a id="schema_CustomAttributeNameType"></a>
<a id="tocScustomattributenametype"></a>
<a id="tocscustomattributenametype"></a>

```json
"string"
```

<h2 id="tocS_SchemaAttributeType">SchemaAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaschemaattributetype"></a>
<a id="schema_SchemaAttributeType"></a>
<a id="tocSschemaattributetype"></a>
<a id="tocsschemaattributetype"></a>

```json
{
  "Name": {},
  "AttributeDataType": {},
  "DeveloperOnlyAttribute": {},
  "Mutable": {},
  "Required": {},
  "NumberAttributeConstraints": {
    "MinValue": {},
    "MaxValue": {}
  },
  "StringAttributeConstraints": {
    "MinLength": {},
    "MaxLength": {}
  }
}
```

<p>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a <code>custom:</code> prefix, and developer attributes with a <code>dev:</code> prefix. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool attributes</a>.</p> <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|AttributeDataType|object|false|none|none|
|DeveloperOnlyAttribute|object|false|none|none|
|Mutable|object|false|none|none|
|Required|object|false|none|none|
|NumberAttributeConstraints|object|false|none|none|
|StringAttributeConstraints|object|false|none|none|

<h2 id="tocS_CustomEmailSenderLambdaVersionType">CustomEmailSenderLambdaVersionType</h2>
<!-- backwards compatibility -->
<a id="schemacustomemailsenderlambdaversiontype"></a>
<a id="schema_CustomEmailSenderLambdaVersionType"></a>
<a id="tocScustomemailsenderlambdaversiontype"></a>
<a id="tocscustomemailsenderlambdaversiontype"></a>

```json
"V1_0"
```

<h2 id="tocS_CustomEmailLambdaVersionConfigType">CustomEmailLambdaVersionConfigType</h2>
<!-- backwards compatibility -->
<a id="schemacustomemaillambdaversionconfigtype"></a>
<a id="schema_CustomEmailLambdaVersionConfigType"></a>
<a id="tocScustomemaillambdaversionconfigtype"></a>
<a id="tocscustomemaillambdaversionconfigtype"></a>

```json
{
  "LambdaVersion": {},
  "LambdaArn": {}
}
```

A custom email sender Lambda configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaVersion|object|true|none|none|
|LambdaArn|object|true|none|none|

<h2 id="tocS_CustomSMSSenderLambdaVersionType">CustomSMSSenderLambdaVersionType</h2>
<!-- backwards compatibility -->
<a id="schemacustomsmssenderlambdaversiontype"></a>
<a id="schema_CustomSMSSenderLambdaVersionType"></a>
<a id="tocScustomsmssenderlambdaversiontype"></a>
<a id="tocscustomsmssenderlambdaversiontype"></a>

```json
"V1_0"
```

<h2 id="tocS_CustomSMSLambdaVersionConfigType">CustomSMSLambdaVersionConfigType</h2>
<!-- backwards compatibility -->
<a id="schemacustomsmslambdaversionconfigtype"></a>
<a id="schema_CustomSMSLambdaVersionConfigType"></a>
<a id="tocScustomsmslambdaversionconfigtype"></a>
<a id="tocscustomsmslambdaversionconfigtype"></a>

```json
{
  "LambdaVersion": {},
  "LambdaArn": {}
}
```

A custom SMS sender Lambda configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaVersion|object|true|none|none|
|LambdaArn|object|true|none|none|

<h2 id="tocS_DefaultEmailOptionType">DefaultEmailOptionType</h2>
<!-- backwards compatibility -->
<a id="schemadefaultemailoptiontype"></a>
<a id="schema_DefaultEmailOptionType"></a>
<a id="tocSdefaultemailoptiontype"></a>
<a id="tocsdefaultemailoptiontype"></a>

```json
"CONFIRM_WITH_LINK"
```

<h2 id="tocS_ProviderNameType">ProviderNameType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidernametype"></a>
<a id="schema_ProviderNameType"></a>
<a id="tocSprovidernametype"></a>
<a id="tocsprovidernametype"></a>

```json
"string"
```

<h2 id="tocS_RiskConfigurationType">RiskConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemariskconfigurationtype"></a>
<a id="schema_RiskConfigurationType"></a>
<a id="tocSriskconfigurationtype"></a>
<a id="tocsriskconfigurationtype"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "CompromisedCredentialsRiskConfiguration": {
    "EventFilter": {},
    "Actions": {
      "EventAction": {}
    }
  },
  "AccountTakeoverRiskConfiguration": {
    "NotifyConfiguration": {
      "From": {},
      "ReplyTo": {},
      "SourceArn": {},
      "BlockEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "NoActionEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      },
      "MfaEmail": {
        "Subject": {},
        "HtmlBody": {},
        "TextBody": {}
      }
    },
    "Actions": {
      "LowAction": {
        "Notify": {},
        "EventAction": {}
      },
      "MediumAction": {
        "Notify": {},
        "EventAction": {}
      },
      "HighAction": {
        "Notify": {},
        "EventAction": {}
      }
    }
  },
  "RiskExceptionConfiguration": {
    "BlockedIPRangeList": {},
    "SkippedIPRangeList": {}
  },
  "LastModifiedDate": {}
}
```

The risk configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|ClientId|object|false|none|none|
|CompromisedCredentialsRiskConfiguration|object|false|none|none|
|AccountTakeoverRiskConfiguration|object|false|none|none|
|RiskExceptionConfiguration|object|false|none|none|
|LastModifiedDate|object|false|none|none|

<h2 id="tocS_UserImportJobIdType">UserImportJobIdType</h2>
<!-- backwards compatibility -->
<a id="schemauserimportjobidtype"></a>
<a id="schema_UserImportJobIdType"></a>
<a id="tocSuserimportjobidtype"></a>
<a id="tocsuserimportjobidtype"></a>

```json
"string"
```

<h2 id="tocS_DomainDescriptionType">DomainDescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemadomaindescriptiontype"></a>
<a id="schema_DomainDescriptionType"></a>
<a id="tocSdomaindescriptiontype"></a>
<a id="tocsdomaindescriptiontype"></a>

```json
{
  "UserPoolId": {},
  "AWSAccountId": {},
  "Domain": {},
  "S3Bucket": {},
  "CloudFrontDistribution": {},
  "Version": {},
  "Status": {},
  "CustomDomainConfig": {
    "CertificateArn": {}
  }
}
```

A container for information about a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|AWSAccountId|object|false|none|none|
|Domain|object|false|none|none|
|S3Bucket|object|false|none|none|
|CloudFrontDistribution|object|false|none|none|
|Version|object|false|none|none|
|Status|object|false|none|none|
|CustomDomainConfig|object|false|none|none|

<h2 id="tocS_S3BucketType">S3BucketType</h2>
<!-- backwards compatibility -->
<a id="schemas3buckettype"></a>
<a id="schema_S3BucketType"></a>
<a id="tocSs3buckettype"></a>
<a id="tocss3buckettype"></a>

```json
"string"
```

<h2 id="tocS_DomainVersionType">DomainVersionType</h2>
<!-- backwards compatibility -->
<a id="schemadomainversiontype"></a>
<a id="schema_DomainVersionType"></a>
<a id="tocSdomainversiontype"></a>
<a id="tocsdomainversiontype"></a>

```json
"string"
```

<h2 id="tocS_DomainStatusType">DomainStatusType</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatustype"></a>
<a id="schema_DomainStatusType"></a>
<a id="tocSdomainstatustype"></a>
<a id="tocsdomainstatustype"></a>

```json
"CREATING"
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

<h2 id="tocS_EmailSendingAccountType">EmailSendingAccountType</h2>
<!-- backwards compatibility -->
<a id="schemaemailsendingaccounttype"></a>
<a id="schema_EmailSendingAccountType"></a>
<a id="tocSemailsendingaccounttype"></a>
<a id="tocsemailsendingaccounttype"></a>

```json
"COGNITO_DEFAULT"
```

<h2 id="tocS_SESConfigurationSet">SESConfigurationSet</h2>
<!-- backwards compatibility -->
<a id="schemasesconfigurationset"></a>
<a id="schema_SESConfigurationSet"></a>
<a id="tocSsesconfigurationset"></a>
<a id="tocssesconfigurationset"></a>

```json
"string"
```

<h2 id="tocS_EmailNotificationBodyType">EmailNotificationBodyType</h2>
<!-- backwards compatibility -->
<a id="schemaemailnotificationbodytype"></a>
<a id="schema_EmailNotificationBodyType"></a>
<a id="tocSemailnotificationbodytype"></a>
<a id="tocsemailnotificationbodytype"></a>

```json
"string"
```

<h2 id="tocS_EmailNotificationSubjectType">EmailNotificationSubjectType</h2>
<!-- backwards compatibility -->
<a id="schemaemailnotificationsubjecttype"></a>
<a id="schema_EmailNotificationSubjectType"></a>
<a id="tocSemailnotificationsubjecttype"></a>
<a id="tocsemailnotificationsubjecttype"></a>

```json
"string"
```

<h2 id="tocS_EmailVerificationMessageByLinkType">EmailVerificationMessageByLinkType</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationmessagebylinktype"></a>
<a id="schema_EmailVerificationMessageByLinkType"></a>
<a id="tocSemailverificationmessagebylinktype"></a>
<a id="tocsemailverificationmessagebylinktype"></a>

```json
"string"
```

<h2 id="tocS_EmailVerificationSubjectByLinkType">EmailVerificationSubjectByLinkType</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationsubjectbylinktype"></a>
<a id="schema_EmailVerificationSubjectByLinkType"></a>
<a id="tocSemailverificationsubjectbylinktype"></a>
<a id="tocsemailverificationsubjectbylinktype"></a>

```json
"string"
```

<h2 id="tocS_EventFilterType">EventFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaeventfiltertype"></a>
<a id="schema_EventFilterType"></a>
<a id="tocSeventfiltertype"></a>
<a id="tocseventfiltertype"></a>

```json
"SIGN_IN"
```

<h2 id="tocS_RiskDecisionType">RiskDecisionType</h2>
<!-- backwards compatibility -->
<a id="schemariskdecisiontype"></a>
<a id="schema_RiskDecisionType"></a>
<a id="tocSriskdecisiontype"></a>
<a id="tocsriskdecisiontype"></a>

```json
"NoRisk"
```

<h2 id="tocS_RiskLevelType">RiskLevelType</h2>
<!-- backwards compatibility -->
<a id="schemariskleveltype"></a>
<a id="schema_RiskLevelType"></a>
<a id="tocSriskleveltype"></a>
<a id="tocsriskleveltype"></a>

```json
"Low"
```

<h2 id="tocS_EventSourceName">EventSourceName</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcename"></a>
<a id="schema_EventSourceName"></a>
<a id="tocSeventsourcename"></a>
<a id="tocseventsourcename"></a>

```json
"userNotification"
```

<h2 id="tocS_ExplicitAuthFlowsType">ExplicitAuthFlowsType</h2>
<!-- backwards compatibility -->
<a id="schemaexplicitauthflowstype"></a>
<a id="schema_ExplicitAuthFlowsType"></a>
<a id="tocSexplicitauthflowstype"></a>
<a id="tocsexplicitauthflowstype"></a>

```json
"ADMIN_NO_SRP_AUTH"
```

<h2 id="tocS_ListOfStringTypes">ListOfStringTypes</h2>
<!-- backwards compatibility -->
<a id="schemalistofstringtypes"></a>
<a id="schema_ListOfStringTypes"></a>
<a id="tocSlistofstringtypes"></a>
<a id="tocslistofstringtypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IdpIdentifierType">IdpIdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaidpidentifiertype"></a>
<a id="schema_IdpIdentifierType"></a>
<a id="tocSidpidentifiertype"></a>
<a id="tocsidpidentifiertype"></a>

```json
"string"
```

<h2 id="tocS_LogDeliveryConfigurationType">LogDeliveryConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemalogdeliveryconfigurationtype"></a>
<a id="schema_LogDeliveryConfigurationType"></a>
<a id="tocSlogdeliveryconfigurationtype"></a>
<a id="tocslogdeliveryconfigurationtype"></a>

```json
{
  "UserPoolId": {},
  "LogConfigurations": {}
}
```

The logging parameters of a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|true|none|none|
|LogConfigurations|object|true|none|none|

<h2 id="tocS_UICustomizationType">UICustomizationType</h2>
<!-- backwards compatibility -->
<a id="schemauicustomizationtype"></a>
<a id="schema_UICustomizationType"></a>
<a id="tocSuicustomizationtype"></a>
<a id="tocsuicustomizationtype"></a>

```json
{
  "UserPoolId": {},
  "ClientId": {},
  "ImageUrl": {},
  "CSS": {},
  "CSSVersion": {},
  "LastModifiedDate": {},
  "CreationDate": {}
}
```

A container for the UI customization information for a user pool's built-in app UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserPoolId|object|false|none|none|
|ClientId|object|false|none|none|
|ImageUrl|object|false|none|none|
|CSS|object|false|none|none|
|CSSVersion|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_SmsMfaConfigType">SmsMfaConfigType</h2>
<!-- backwards compatibility -->
<a id="schemasmsmfaconfigtype"></a>
<a id="schema_SmsMfaConfigType"></a>
<a id="tocSsmsmfaconfigtype"></a>
<a id="tocssmsmfaconfigtype"></a>

```json
{
  "SmsAuthenticationMessage": {},
  "SmsConfiguration": {
    "SnsCallerArn": {},
    "ExternalId": {},
    "SnsRegion": {}
  }
}
```

The SMS text message multi-factor authentication (MFA) configuration type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmsAuthenticationMessage|object|false|none|none|
|SmsConfiguration|object|false|none|none|

<h2 id="tocS_SoftwareTokenMfaConfigType">SoftwareTokenMfaConfigType</h2>
<!-- backwards compatibility -->
<a id="schemasoftwaretokenmfaconfigtype"></a>
<a id="schema_SoftwareTokenMfaConfigType"></a>
<a id="tocSsoftwaretokenmfaconfigtype"></a>
<a id="tocssoftwaretokenmfaconfigtype"></a>

```json
{
  "Enabled": {}
}
```

The type used for enabling software token MFA at the user pool level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_HttpHeader">HttpHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpheader"></a>
<a id="schema_HttpHeader"></a>
<a id="tocShttpheader"></a>
<a id="tocshttpheader"></a>

```json
{
  "headerName": {},
  "headerValue": {}
}
```

The HTTP header.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headerName|object|false|none|none|
|headerValue|object|false|none|none|

<h2 id="tocS_ImageFileType">ImageFileType</h2>
<!-- backwards compatibility -->
<a id="schemaimagefiletype"></a>
<a id="schema_ImageFileType"></a>
<a id="tocSimagefiletype"></a>
<a id="tocsimagefiletype"></a>

```json
"string"
```

<h2 id="tocS_ImageUrlType">ImageUrlType</h2>
<!-- backwards compatibility -->
<a id="schemaimageurltype"></a>
<a id="schema_ImageUrlType"></a>
<a id="tocSimageurltype"></a>
<a id="tocsimageurltype"></a>

```json
"string"
```

<h2 id="tocS_ListProvidersLimitType">ListProvidersLimitType</h2>
<!-- backwards compatibility -->
<a id="schemalistproviderslimittype"></a>
<a id="schema_ListProvidersLimitType"></a>
<a id="tocSlistproviderslimittype"></a>
<a id="tocslistproviderslimittype"></a>

```json
0
```

<h2 id="tocS_PaginationKeyType">PaginationKeyType</h2>
<!-- backwards compatibility -->
<a id="schemapaginationkeytype"></a>
<a id="schema_PaginationKeyType"></a>
<a id="tocSpaginationkeytype"></a>
<a id="tocspaginationkeytype"></a>

```json
"string"
```

<h2 id="tocS_ProvidersListType">ProvidersListType</h2>
<!-- backwards compatibility -->
<a id="schemaproviderslisttype"></a>
<a id="schema_ProvidersListType"></a>
<a id="tocSproviderslisttype"></a>
<a id="tocsproviderslisttype"></a>

```json
[
  {
    "ProviderName": {},
    "ProviderType": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_ListResourceServersLimitType">ListResourceServersLimitType</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceserverslimittype"></a>
<a id="schema_ListResourceServersLimitType"></a>
<a id="tocSlistresourceserverslimittype"></a>
<a id="tocslistresourceserverslimittype"></a>

```json
1
```

<h2 id="tocS_ResourceServersListType">ResourceServersListType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverslisttype"></a>
<a id="schema_ResourceServersListType"></a>
<a id="tocSresourceserverslisttype"></a>
<a id="tocsresourceserverslisttype"></a>

```json
[
  {
    "UserPoolId": {},
    "Identifier": {},
    "Name": {},
    "Scopes": {}
  }
]
```

<h2 id="tocS_PoolQueryLimitType">PoolQueryLimitType</h2>
<!-- backwards compatibility -->
<a id="schemapoolquerylimittype"></a>
<a id="schema_PoolQueryLimitType"></a>
<a id="tocSpoolquerylimittype"></a>
<a id="tocspoolquerylimittype"></a>

```json
1
```

<h2 id="tocS_UserImportJobsListType">UserImportJobsListType</h2>
<!-- backwards compatibility -->
<a id="schemauserimportjobslisttype"></a>
<a id="schema_UserImportJobsListType"></a>
<a id="tocSuserimportjobslisttype"></a>
<a id="tocsuserimportjobslisttype"></a>

```json
[
  {
    "JobName": {},
    "JobId": {},
    "UserPoolId": {},
    "PreSignedUrl": {},
    "CreationDate": {},
    "StartDate": {},
    "CompletionDate": {},
    "Status": {},
    "CloudWatchLogsRoleArn": {},
    "ImportedUsers": {},
    "SkippedUsers": {},
    "FailedUsers": {},
    "CompletionMessage": {}
  }
]
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

<h2 id="tocS_UserPoolClientListType">UserPoolClientListType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolclientlisttype"></a>
<a id="schema_UserPoolClientListType"></a>
<a id="tocSuserpoolclientlisttype"></a>
<a id="tocsuserpoolclientlisttype"></a>

```json
[
  {
    "ClientId": {},
    "UserPoolId": {},
    "ClientName": {}
  }
]
```

<h2 id="tocS_UserPoolListType">UserPoolListType</h2>
<!-- backwards compatibility -->
<a id="schemauserpoollisttype"></a>
<a id="schema_UserPoolListType"></a>
<a id="tocSuserpoollisttype"></a>
<a id="tocsuserpoollisttype"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "LambdaConfig": {
      "PreSignUp": {},
      "CustomMessage": {},
      "PostConfirmation": {},
      "PreAuthentication": {},
      "PostAuthentication": {},
      "DefineAuthChallenge": {},
      "CreateAuthChallenge": {},
      "VerifyAuthChallengeResponse": {},
      "PreTokenGeneration": {},
      "UserMigration": {},
      "CustomSMSSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "CustomEmailSender": {
        "LambdaVersion": {},
        "LambdaArn": {}
      },
      "KMSKeyID": {}
    },
    "Status": {},
    "LastModifiedDate": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_UsersListType">UsersListType</h2>
<!-- backwards compatibility -->
<a id="schemauserslisttype"></a>
<a id="schema_UsersListType"></a>
<a id="tocSuserslisttype"></a>
<a id="tocsuserslisttype"></a>

```json
[
  {
    "Username": {},
    "Attributes": {},
    "UserCreateDate": {},
    "UserLastModifiedDate": {},
    "Enabled": {},
    "UserStatus": {},
    "MFAOptions": {}
  }
]
```

<h2 id="tocS_SearchedAttributeNamesListType">SearchedAttributeNamesListType</h2>
<!-- backwards compatibility -->
<a id="schemasearchedattributenameslisttype"></a>
<a id="schema_SearchedAttributeNamesListType"></a>
<a id="tocSsearchedattributenameslisttype"></a>
<a id="tocssearchedattributenameslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserFilterType">UserFilterType</h2>
<!-- backwards compatibility -->
<a id="schemauserfiltertype"></a>
<a id="schema_UserFilterType"></a>
<a id="tocSuserfiltertype"></a>
<a id="tocsuserfiltertype"></a>

```json
"string"
```

<h2 id="tocS_LogConfigurationType">LogConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemalogconfigurationtype"></a>
<a id="schema_LogConfigurationType"></a>
<a id="tocSlogconfigurationtype"></a>
<a id="tocslogconfigurationtype"></a>

```json
{
  "LogLevel": {},
  "EventSource": {},
  "CloudWatchLogsConfiguration": {
    "LogGroupArn": {}
  }
}
```

The logging parameters of a user pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevel|object|true|none|none|
|EventSource|object|true|none|none|
|CloudWatchLogsConfiguration|object|false|none|none|

<h2 id="tocS_LogConfigurationListType">LogConfigurationListType</h2>
<!-- backwards compatibility -->
<a id="schemalogconfigurationlisttype"></a>
<a id="schema_LogConfigurationListType"></a>
<a id="tocSlogconfigurationlisttype"></a>
<a id="tocslogconfigurationlisttype"></a>

```json
[
  {
    "LogLevel": {},
    "EventSource": {},
    "CloudWatchLogsConfiguration": {
      "LogGroupArn": {}
    }
  }
]
```

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"ERROR"
```

<h2 id="tocS_LongType">LongType</h2>
<!-- backwards compatibility -->
<a id="schemalongtype"></a>
<a id="schema_LongType"></a>
<a id="tocSlongtype"></a>
<a id="tocslongtype"></a>

```json
0
```

<h2 id="tocS_MFAOptionType">MFAOptionType</h2>
<!-- backwards compatibility -->
<a id="schemamfaoptiontype"></a>
<a id="schema_MFAOptionType"></a>
<a id="tocSmfaoptiontype"></a>
<a id="tocsmfaoptiontype"></a>

```json
{
  "DeliveryMedium": {},
  "AttributeName": {}
}
```

 <i>This data type is no longer supported.</i> Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMedium|object|false|none|none|
|AttributeName|object|false|none|none|

<h2 id="tocS_NotifyEmailType">NotifyEmailType</h2>
<!-- backwards compatibility -->
<a id="schemanotifyemailtype"></a>
<a id="schema_NotifyEmailType"></a>
<a id="tocSnotifyemailtype"></a>
<a id="tocsnotifyemailtype"></a>

```json
{
  "Subject": {},
  "HtmlBody": {},
  "TextBody": {}
}
```

The notify email type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subject|object|true|none|none|
|HtmlBody|object|false|none|none|
|TextBody|object|false|none|none|

<h2 id="tocS_NumberAttributeConstraintsType">NumberAttributeConstraintsType</h2>
<!-- backwards compatibility -->
<a id="schemanumberattributeconstraintstype"></a>
<a id="schema_NumberAttributeConstraintsType"></a>
<a id="tocSnumberattributeconstraintstype"></a>
<a id="tocsnumberattributeconstraintstype"></a>

```json
{
  "MinValue": {},
  "MaxValue": {}
}
```

The minimum and maximum values of an attribute that is of the number data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinValue|object|false|none|none|
|MaxValue|object|false|none|none|

<h2 id="tocS_OAuthFlowType">OAuthFlowType</h2>
<!-- backwards compatibility -->
<a id="schemaoauthflowtype"></a>
<a id="schema_OAuthFlowType"></a>
<a id="tocSoauthflowtype"></a>
<a id="tocsoauthflowtype"></a>

```json
"code"
```

<h2 id="tocS_PasswordPolicyMinLengthType">PasswordPolicyMinLengthType</h2>
<!-- backwards compatibility -->
<a id="schemapasswordpolicyminlengthtype"></a>
<a id="schema_PasswordPolicyMinLengthType"></a>
<a id="tocSpasswordpolicyminlengthtype"></a>
<a id="tocspasswordpolicyminlengthtype"></a>

```json
6
```

<h2 id="tocS_TemporaryPasswordValidityDaysType">TemporaryPasswordValidityDaysType</h2>
<!-- backwards compatibility -->
<a id="schematemporarypasswordvaliditydaystype"></a>
<a id="schema_TemporaryPasswordValidityDaysType"></a>
<a id="tocStemporarypasswordvaliditydaystype"></a>
<a id="tocstemporarypasswordvaliditydaystype"></a>

```json
0
```

<h2 id="tocS_PasswordPolicyType">PasswordPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapasswordpolicytype"></a>
<a id="schema_PasswordPolicyType"></a>
<a id="tocSpasswordpolicytype"></a>
<a id="tocspasswordpolicytype"></a>

```json
{
  "MinimumLength": {},
  "RequireUppercase": {},
  "RequireLowercase": {},
  "RequireNumbers": {},
  "RequireSymbols": {},
  "TemporaryPasswordValidityDays": {}
}
```

The password policy type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinimumLength|object|false|none|none|
|RequireUppercase|object|false|none|none|
|RequireLowercase|object|false|none|none|
|RequireNumbers|object|false|none|none|
|RequireSymbols|object|false|none|none|
|TemporaryPasswordValidityDays|object|false|none|none|

<h2 id="tocS_PreSignedUrlType">PreSignedUrlType</h2>
<!-- backwards compatibility -->
<a id="schemapresignedurltype"></a>
<a id="schema_PreSignedUrlType"></a>
<a id="tocSpresignedurltype"></a>
<a id="tocspresignedurltype"></a>

```json
"string"
```

<h2 id="tocS_PriorityType">PriorityType</h2>
<!-- backwards compatibility -->
<a id="schemaprioritytype"></a>
<a id="schema_PriorityType"></a>
<a id="tocSprioritytype"></a>
<a id="tocsprioritytype"></a>

```json
1
```

<h2 id="tocS_ProviderDescription">ProviderDescription</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdescription"></a>
<a id="schema_ProviderDescription"></a>
<a id="tocSproviderdescription"></a>
<a id="tocsproviderdescription"></a>

```json
{
  "ProviderName": {},
  "ProviderType": {},
  "LastModifiedDate": {},
  "CreationDate": {}
}
```

A container for IdP details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderName|object|false|none|none|
|ProviderType|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_RecoveryOptionType">RecoveryOptionType</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryoptiontype"></a>
<a id="schema_RecoveryOptionType"></a>
<a id="tocSrecoveryoptiontype"></a>
<a id="tocsrecoveryoptiontype"></a>

```json
{
  "Priority": {},
  "Name": {}
}
```

A map containing a priority as a key, and recovery method name as a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Priority|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_RecoveryOptionNameType">RecoveryOptionNameType</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryoptionnametype"></a>
<a id="schema_RecoveryOptionNameType"></a>
<a id="tocSrecoveryoptionnametype"></a>
<a id="tocsrecoveryoptionnametype"></a>

```json
"verified_email"
```

<h2 id="tocS_RegionCodeType">RegionCodeType</h2>
<!-- backwards compatibility -->
<a id="schemaregioncodetype"></a>
<a id="schema_RegionCodeType"></a>
<a id="tocSregioncodetype"></a>
<a id="tocsregioncodetype"></a>

```json
"string"
```

<h2 id="tocS_ResourceServerScopeDescriptionType">ResourceServerScopeDescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverscopedescriptiontype"></a>
<a id="schema_ResourceServerScopeDescriptionType"></a>
<a id="tocSresourceserverscopedescriptiontype"></a>
<a id="tocsresourceserverscopedescriptiontype"></a>

```json
"string"
```

<h2 id="tocS_ResourceServerScopeType">ResourceServerScopeType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverscopetype"></a>
<a id="schema_ResourceServerScopeType"></a>
<a id="tocSresourceserverscopetype"></a>
<a id="tocsresourceserverscopetype"></a>

```json
{
  "ScopeName": {},
  "ScopeDescription": {}
}
```

A resource server scope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScopeName|object|true|none|none|
|ScopeDescription|object|true|none|none|

<h2 id="tocS_ResourceServerScopeNameType">ResourceServerScopeNameType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverscopenametype"></a>
<a id="schema_ResourceServerScopeNameType"></a>
<a id="tocSresourceserverscopenametype"></a>
<a id="tocsresourceserverscopenametype"></a>

```json
"string"
```

<h2 id="tocS_RiskExceptionConfigurationType">RiskExceptionConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemariskexceptionconfigurationtype"></a>
<a id="schema_RiskExceptionConfigurationType"></a>
<a id="tocSriskexceptionconfigurationtype"></a>
<a id="tocsriskexceptionconfigurationtype"></a>

```json
{
  "BlockedIPRangeList": {},
  "SkippedIPRangeList": {}
}
```

The type of the configuration to override the risk decision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockedIPRangeList|object|false|none|none|
|SkippedIPRangeList|object|false|none|none|

<h2 id="tocS_SkippedIPRangeListType">SkippedIPRangeListType</h2>
<!-- backwards compatibility -->
<a id="schemaskippediprangelisttype"></a>
<a id="schema_SkippedIPRangeListType"></a>
<a id="tocSskippediprangelisttype"></a>
<a id="tocsskippediprangelisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringAttributeConstraintsType">StringAttributeConstraintsType</h2>
<!-- backwards compatibility -->
<a id="schemastringattributeconstraintstype"></a>
<a id="schema_StringAttributeConstraintsType"></a>
<a id="tocSstringattributeconstraintstype"></a>
<a id="tocsstringattributeconstraintstype"></a>

```json
{
  "MinLength": {},
  "MaxLength": {}
}
```

The constraints associated with a string attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinLength|object|false|none|none|
|MaxLength|object|false|none|none|

<h2 id="tocS_ScopeType">ScopeType</h2>
<!-- backwards compatibility -->
<a id="schemascopetype"></a>
<a id="schema_ScopeType"></a>
<a id="tocSscopetype"></a>
<a id="tocsscopetype"></a>

```json
"string"
```

<h2 id="tocS_SoftwareTokenMFAUserCodeType">SoftwareTokenMFAUserCodeType</h2>
<!-- backwards compatibility -->
<a id="schemasoftwaretokenmfausercodetype"></a>
<a id="schema_SoftwareTokenMFAUserCodeType"></a>
<a id="tocSsoftwaretokenmfausercodetype"></a>
<a id="tocssoftwaretokenmfausercodetype"></a>

```json
"string"
```

<h2 id="tocS_StatusType">StatusType</h2>
<!-- backwards compatibility -->
<a id="schemastatustype"></a>
<a id="schema_StatusType"></a>
<a id="tocSstatustype"></a>
<a id="tocsstatustype"></a>

```json
"Enabled"
```

<h2 id="tocS_TagKeysType">TagKeysType</h2>
<!-- backwards compatibility -->
<a id="schematagkeystype"></a>
<a id="schema_TagKeysType"></a>
<a id="tocStagkeystype"></a>
<a id="tocstagkeystype"></a>

```json
"string"
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

<h2 id="tocS_TimeUnitsType">TimeUnitsType</h2>
<!-- backwards compatibility -->
<a id="schematimeunitstype"></a>
<a id="schema_TimeUnitsType"></a>
<a id="tocStimeunitstype"></a>
<a id="tocstimeunitstype"></a>

```json
"seconds"
```

<h2 id="tocS_UserPoolTagsListType">UserPoolTagsListType</h2>
<!-- backwards compatibility -->
<a id="schemauserpooltagslisttype"></a>
<a id="schema_UserPoolTagsListType"></a>
<a id="tocSuserpooltagslisttype"></a>
<a id="tocsuserpooltagslisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserImportJobStatusType">UserImportJobStatusType</h2>
<!-- backwards compatibility -->
<a id="schemauserimportjobstatustype"></a>
<a id="schema_UserImportJobStatusType"></a>
<a id="tocSuserimportjobstatustype"></a>
<a id="tocsuserimportjobstatustype"></a>

```json
"Created"
```

<h2 id="tocS_UserPoolClientDescription">UserPoolClientDescription</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolclientdescription"></a>
<a id="schema_UserPoolClientDescription"></a>
<a id="tocSuserpoolclientdescription"></a>
<a id="tocsuserpoolclientdescription"></a>

```json
{
  "ClientId": {},
  "UserPoolId": {},
  "ClientName": {}
}
```

The description of the user pool client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|false|none|none|
|UserPoolId|object|false|none|none|
|ClientName|object|false|none|none|

<h2 id="tocS_UserPoolDescriptionType">UserPoolDescriptionType</h2>
<!-- backwards compatibility -->
<a id="schemauserpooldescriptiontype"></a>
<a id="schema_UserPoolDescriptionType"></a>
<a id="tocSuserpooldescriptiontype"></a>
<a id="tocsuserpooldescriptiontype"></a>

```json
{
  "Id": {},
  "Name": {},
  "LambdaConfig": {
    "PreSignUp": {},
    "CustomMessage": {},
    "PostConfirmation": {},
    "PreAuthentication": {},
    "PostAuthentication": {},
    "DefineAuthChallenge": {},
    "CreateAuthChallenge": {},
    "VerifyAuthChallengeResponse": {},
    "PreTokenGeneration": {},
    "UserMigration": {},
    "CustomSMSSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "CustomEmailSender": {
      "LambdaVersion": {},
      "LambdaArn": {}
    },
    "KMSKeyID": {}
  },
  "Status": {},
  "LastModifiedDate": {},
  "CreationDate": {}
}
```

A user pool description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|LambdaConfig|object|false|none|none|
|Status|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_UsernameAttributeType">UsernameAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemausernameattributetype"></a>
<a id="schema_UsernameAttributeType"></a>
<a id="tocSusernameattributetype"></a>
<a id="tocsusernameattributetype"></a>

```json
"phone_number"
```

<h2 id="tocS_VerifySoftwareTokenResponseType">VerifySoftwareTokenResponseType</h2>
<!-- backwards compatibility -->
<a id="schemaverifysoftwaretokenresponsetype"></a>
<a id="schema_VerifySoftwareTokenResponseType"></a>
<a id="tocSverifysoftwaretokenresponsetype"></a>
<a id="tocsverifysoftwaretokenresponsetype"></a>

```json
"SUCCESS"
```
