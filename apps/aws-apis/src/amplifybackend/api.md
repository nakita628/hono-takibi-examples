<h1 id="amplifybackend">AmplifyBackend v2020-08-11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AWS Amplify Admin API

Base URLs:

* <a href="http://amplifybackend.us-east-1.amazonaws.com">http://amplifybackend.us-east-1.amazonaws.com</a> - The AmplifyBackend multi-region endpoint

* <a href="https://amplifybackend.us-east-1.amazonaws.com">https://amplifybackend.us-east-1.amazonaws.com</a> - The AmplifyBackend multi-region endpoint

* <a href="http://amplifybackend.cn-north-1.amazonaws.com.cn">http://amplifybackend.cn-north-1.amazonaws.com.cn</a> - The AmplifyBackend endpoint for China (Beijing) and China (Ningxia)

* <a href="https://amplifybackend.cn-north-1.amazonaws.com.cn">https://amplifybackend.cn-north-1.amazonaws.com.cn</a> - The AmplifyBackend endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/amplifybackend/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amplifybackend-default">Default</h1>

## CloneBackend

<a id="opIdCloneBackend"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/environments/string/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "targetEnvironmentName": "string"
  }'
```

`POST /backend/{appId}/environments/{backendEnvironmentName}/clone`

This operation clones an existing backend.

> Body parameter

```json
{
  "targetEnvironmentName": "string"
}
```

<h3 id="clonebackend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» targetEnvironmentName|body|string|true|The name of the destination backend environment to be created.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="clonebackend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloneBackendResponse](#schemaclonebackendresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackend

<a id="opIdCreateBackend"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "appId": "string",
    "appName": "string",
    "backendEnvironmentName": "string",
    "resourceConfig": {},
    "resourceName": "string"
  }'
```

`POST /backend`

This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.

> Body parameter

```json
{
  "appId": "string",
  "appName": "string",
  "backendEnvironmentName": "string",
  "resourceConfig": {},
  "resourceName": "string"
}
```

<h3 id="createbackend-parameters">Parameters</h3>

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
|» appId|body|string|true|The app ID.|
|» appName|body|string|true|The name of the app.|
|» backendEnvironmentName|body|string|true|The name of the backend environment.|
|» resourceConfig|body|object|false|Defines the resource configuration for the data model in your Amplify project.|
|» resourceName|body|string|false|The name of the resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="createbackend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendResponse](#schemacreatebackendresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackendAPI

<a id="opIdCreateBackendAPI"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backendEnvironmentName": "string",
    "resourceConfig": {
      "AdditionalAuthTypes": {},
      "ApiName": {},
      "ConflictResolution": {
        "ResolutionStrategy": {}
      },
      "DefaultAuthType": {
        "Mode": {},
        "Settings": {
          "CognitoUserPoolId": {},
          "Description": {},
          "ExpirationTime": {},
          "OpenIDAuthTTL": {},
          "OpenIDClientId": {},
          "OpenIDIatTTL": {},
          "OpenIDIssueURL": {},
          "OpenIDProviderName": {}
        }
      },
      "Service": {},
      "TransformSchema": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api`

Creates a new backend API resource.

> Body parameter

```json
{
  "backendEnvironmentName": "string",
  "resourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "resourceName": "string"
}
```

<h3 id="createbackendapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backendEnvironmentName|body|string|true|The name of the backend environment.|
|» resourceConfig|body|object|true|The resource config for the data model, configured as a part of the Amplify project.|
|» » AdditionalAuthTypes|body|object|false|none|
|» » ApiName|body|object|false|none|
|» » ConflictResolution|body|object|false|none|
|» » » ResolutionStrategy|body|object|false|none|
|» » DefaultAuthType|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Settings|body|object|false|none|
|» » » » CognitoUserPoolId|body|object|false|none|
|» » » » Description|body|object|false|none|
|» » » » ExpirationTime|body|object|false|none|
|» » » » OpenIDAuthTTL|body|object|false|none|
|» » » » OpenIDClientId|body|object|false|none|
|» » » » OpenIDIatTTL|body|object|false|none|
|» » » » OpenIDIssueURL|body|object|false|none|
|» » » » OpenIDProviderName|body|object|false|none|
|» » Service|body|object|false|none|
|» » TransformSchema|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="createbackendapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendAPIResponse](#schemacreatebackendapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackendAuth

<a id="opIdCreateBackendAuth"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backendEnvironmentName": "string",
    "resourceConfig": {
      "AuthResources": {},
      "IdentityPoolConfigs": {
        "IdentityPoolName": {},
        "UnauthenticatedLogin": {}
      },
      "Service": {},
      "UserPoolConfigs": {
        "ForgotPassword": {
          "DeliveryMethod": {},
          "EmailSettings": {
            "EmailMessage": {},
            "EmailSubject": {}
          },
          "SmsSettings": {
            "SmsMessage": {}
          }
        },
        "Mfa": {
          "MFAMode": {},
          "Settings": {
            "MfaTypes": {},
            "SmsMessage": {}
          }
        },
        "OAuth": {
          "DomainPrefix": {},
          "OAuthGrantType": {},
          "OAuthScopes": {},
          "RedirectSignInURIs": {},
          "RedirectSignOutURIs": {},
          "SocialProviderSettings": {
            "Facebook": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "Google": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "LoginWithAmazon": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "SignInWithApple": {
              "ClientId": {},
              "KeyId": {},
              "PrivateKey": {},
              "TeamId": {}
            }
          }
        },
        "PasswordPolicy": {
          "AdditionalConstraints": {},
          "MinimumLength": {}
        },
        "RequiredSignUpAttributes": {},
        "SignInMethod": {},
        "UserPoolName": {},
        "VerificationMessage": {
          "DeliveryMethod": {},
          "EmailSettings": {
            "EmailMessage": {},
            "EmailSubject": {}
          },
          "SmsSettings": {
            "SmsMessage": {}
          }
        }
      }
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/auth`

Creates a new backend authentication resource.

> Body parameter

```json
{
  "backendEnvironmentName": "string",
  "resourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "IdentityPoolName": {},
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "RequiredSignUpAttributes": {},
      "SignInMethod": {},
      "UserPoolName": {},
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "resourceName": "string"
}
```

<h3 id="createbackendauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backendEnvironmentName|body|string|true|The name of the backend environment.|
|» resourceConfig|body|object|true|Defines the resource configuration when creating an auth resource in your Amplify project.|
|» » AuthResources|body|object|false|none|
|» » IdentityPoolConfigs|body|object|false|none|
|» » » IdentityPoolName|body|object|true|none|
|» » » UnauthenticatedLogin|body|object|true|none|
|» » Service|body|object|false|none|
|» » UserPoolConfigs|body|object|false|none|
|» » » ForgotPassword|body|object|false|none|
|» » » » DeliveryMethod|body|object|true|none|
|» » » » EmailSettings|body|object|false|none|
|» » » » » EmailMessage|body|object|false|none|
|» » » » » EmailSubject|body|object|false|none|
|» » » » SmsSettings|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» » » Mfa|body|object|false|none|
|» » » » MFAMode|body|object|true|none|
|» » » » Settings|body|object|false|none|
|» » » » » MfaTypes|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» » » OAuth|body|object|false|none|
|» » » » DomainPrefix|body|object|false|none|
|» » » » OAuthGrantType|body|object|true|none|
|» » » » OAuthScopes|body|object|true|none|
|» » » » RedirectSignInURIs|body|object|true|none|
|» » » » RedirectSignOutURIs|body|object|true|none|
|» » » » SocialProviderSettings|body|object|false|none|
|» » » » » Facebook|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » Google|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » LoginWithAmazon|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » SignInWithApple|body|[BackendAuthAppleProviderConfig](#schemabackendauthappleproviderconfig)|false|Describes Apple social federation configurations for allowing your app users to sign in using OAuth.|
|» » » PasswordPolicy|body|object|false|none|
|» » » » AdditionalConstraints|body|object|false|none|
|» » » » MinimumLength|body|object|true|none|
|» » » RequiredSignUpAttributes|body|object|true|none|
|» » » SignInMethod|body|object|true|none|
|» » » UserPoolName|body|object|true|none|
|» » » VerificationMessage|body|object|false|none|
|» » » » DeliveryMethod|body|object|true|none|
|» » » » EmailSettings|body|object|false|none|
|» » » » » EmailMessage|body|object|false|none|
|» » » » » EmailSubject|body|object|false|none|
|» » » » SmsSettings|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="createbackendauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendAuthResponse](#schemacreatebackendauthresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackendConfig

<a id="opIdCreateBackendConfig"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backendManagerAppId": "string"
  }'
```

`POST /backend/{appId}/config`

Creates a config object for a backend.

> Body parameter

```json
{
  "backendManagerAppId": "string"
}
```

<h3 id="createbackendconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backendManagerAppId|body|string|false|The app ID for the backend manager.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
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

<h3 id="createbackendconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendConfigResponse](#schemacreatebackendconfigresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBackendStorage

<a id="opIdCreateBackendStorage"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/storage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backendEnvironmentName": "string",
    "resourceConfig": {
      "BucketName": {},
      "Permissions": {
        "Authenticated": {},
        "UnAuthenticated": {}
      },
      "ServiceName": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/storage`

Creates a backend storage resource.

> Body parameter

```json
{
  "backendEnvironmentName": "string",
  "resourceConfig": {
    "BucketName": {},
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "resourceName": "string"
}
```

<h3 id="createbackendstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backendEnvironmentName|body|string|true|The name of the backend environment.|
|» resourceConfig|body|object|true|The resource configuration for creating backend storage.|
|» » BucketName|body|object|false|none|
|» » Permissions|body|object|false|none|
|» » » Authenticated|body|object|true|none|
|» » » UnAuthenticated|body|object|false|none|
|» » ServiceName|body|object|false|none|
|» resourceName|body|string|true|The name of the storage resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
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

<h3 id="createbackendstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBackendStorageResponse](#schemacreatebackendstorageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateToken

<a id="opIdCreateToken"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/challenge \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backend/{appId}/challenge`

Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.

<h3 id="createtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
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
  "AppId": {},
  "ChallengeCode": {},
  "SessionId": {},
  "Ttl": {}
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

<h3 id="createtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTokenResponse](#schemacreatetokenresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackend

<a id="opIdDeleteBackend"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/environments/string/remove \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backend/{appId}/environments/{backendEnvironmentName}/remove`

Removes an existing environment from your Amplify project.

<h3 id="deletebackend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
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
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="deletebackend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackendResponse](#schemadeletebackendresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackendAPI

<a id="opIdDeleteBackendAPI"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api/string/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceConfig": {
      "AdditionalAuthTypes": {},
      "ApiName": {},
      "ConflictResolution": {
        "ResolutionStrategy": {}
      },
      "DefaultAuthType": {
        "Mode": {},
        "Settings": {
          "CognitoUserPoolId": {},
          "Description": {},
          "ExpirationTime": {},
          "OpenIDAuthTTL": {},
          "OpenIDClientId": {},
          "OpenIDIatTTL": {},
          "OpenIDIssueURL": {},
          "OpenIDProviderName": {}
        }
      },
      "Service": {},
      "TransformSchema": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api/{backendEnvironmentName}/remove`

Deletes an existing backend API resource.

> Body parameter

```json
{
  "resourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "resourceName": "string"
}
```

<h3 id="deletebackendapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceConfig|body|object|false|The resource config for the data model, configured as a part of the Amplify project.|
|» » AdditionalAuthTypes|body|object|false|none|
|» » ApiName|body|object|false|none|
|» » ConflictResolution|body|object|false|none|
|» » » ResolutionStrategy|body|object|false|none|
|» » DefaultAuthType|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Settings|body|object|false|none|
|» » » » CognitoUserPoolId|body|object|false|none|
|» » » » Description|body|object|false|none|
|» » » » ExpirationTime|body|object|false|none|
|» » » » OpenIDAuthTTL|body|object|false|none|
|» » » » OpenIDClientId|body|object|false|none|
|» » » » OpenIDIatTTL|body|object|false|none|
|» » » » OpenIDIssueURL|body|object|false|none|
|» » » » OpenIDProviderName|body|object|false|none|
|» » Service|body|object|false|none|
|» » TransformSchema|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="deletebackendapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackendAPIResponse](#schemadeletebackendapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackendAuth

<a id="opIdDeleteBackendAuth"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/auth/string/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/auth/{backendEnvironmentName}/remove`

Deletes an existing backend authentication resource.

> Body parameter

```json
{
  "resourceName": "string"
}
```

<h3 id="deletebackendauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="deletebackendauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackendAuthResponse](#schemadeletebackendauthresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBackendStorage

<a id="opIdDeleteBackendStorage"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/storage/string/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string",
    "serviceName": "S3"
  }'
```

`POST /backend/{appId}/storage/{backendEnvironmentName}/remove`

Removes the specified backend storage resource.

> Body parameter

```json
{
  "resourceName": "string",
  "serviceName": "S3"
}
```

<h3 id="deletebackendstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of the storage resource.|
|» serviceName|body|string|true|The name of the storage service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» serviceName|S3|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
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

<h3 id="deletebackendstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBackendStorageResponse](#schemadeletebackendstorageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteToken

<a id="opIdDeleteToken"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/challenge/string/remove \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backend/{appId}/challenge/{sessionId}/remove`

Deletes the challenge token based on the given appId and sessionId.

<h3 id="deletetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|sessionId|path|string|true|The session ID.|
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
  "IsSuccess": {}
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

<h3 id="deletetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTokenResponse](#schemadeletetokenresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateBackendAPIModels

<a id="opIdGenerateBackendAPIModels"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api/string/generateModels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api/{backendEnvironmentName}/generateModels`

Generates a model schema for an existing backend API resource.

> Body parameter

```json
{
  "resourceName": "string"
}
```

<h3 id="generatebackendapimodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="generatebackendapimodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GenerateBackendAPIModelsResponse](#schemageneratebackendapimodelsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackend

<a id="opIdGetBackend"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "backendEnvironmentName": "string"
  }'
```

`POST /backend/{appId}/details`

Provides project-level details for your Amplify UI project.

> Body parameter

```json
{
  "backendEnvironmentName": "string"
}
```

<h3 id="getbackend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» backendEnvironmentName|body|string|false|The name of the backend environment.|

> Example responses

> 200 Response

```json
{
  "AmplifyFeatureFlags": {},
  "AmplifyMetaConfig": {},
  "AppId": {},
  "AppName": {},
  "BackendEnvironmentList": {},
  "BackendEnvironmentName": {},
  "Error": {}
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

<h3 id="getbackend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendResponse](#schemagetbackendresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendAPI

<a id="opIdGetBackendAPI"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api/string/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceConfig": {
      "AdditionalAuthTypes": {},
      "ApiName": {},
      "ConflictResolution": {
        "ResolutionStrategy": {}
      },
      "DefaultAuthType": {
        "Mode": {},
        "Settings": {
          "CognitoUserPoolId": {},
          "Description": {},
          "ExpirationTime": {},
          "OpenIDAuthTTL": {},
          "OpenIDClientId": {},
          "OpenIDIatTTL": {},
          "OpenIDIssueURL": {},
          "OpenIDProviderName": {}
        }
      },
      "Service": {},
      "TransformSchema": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api/{backendEnvironmentName}/details`

Gets the details for a backend API.

> Body parameter

```json
{
  "resourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "resourceName": "string"
}
```

<h3 id="getbackendapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceConfig|body|object|false|The resource config for the data model, configured as a part of the Amplify project.|
|» » AdditionalAuthTypes|body|object|false|none|
|» » ApiName|body|object|false|none|
|» » ConflictResolution|body|object|false|none|
|» » » ResolutionStrategy|body|object|false|none|
|» » DefaultAuthType|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Settings|body|object|false|none|
|» » » » CognitoUserPoolId|body|object|false|none|
|» » » » Description|body|object|false|none|
|» » » » ExpirationTime|body|object|false|none|
|» » » » OpenIDAuthTTL|body|object|false|none|
|» » » » OpenIDClientId|body|object|false|none|
|» » » » OpenIDIatTTL|body|object|false|none|
|» » » » OpenIDIssueURL|body|object|false|none|
|» » » » OpenIDProviderName|body|object|false|none|
|» » Service|body|object|false|none|
|» » TransformSchema|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
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

<h3 id="getbackendapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendAPIResponse](#schemagetbackendapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendAPIModels

<a id="opIdGetBackendAPIModels"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api/string/getModels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api/{backendEnvironmentName}/getModels`

Gets a model introspection schema for an existing backend API resource.

> Body parameter

```json
{
  "resourceName": "string"
}
```

<h3 id="getbackendapimodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "Models": {},
  "Status": {},
  "ModelIntrospectionSchema": {}
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

<h3 id="getbackendapimodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendAPIModelsResponse](#schemagetbackendapimodelsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendAuth

<a id="opIdGetBackendAuth"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/auth/string/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/auth/{backendEnvironmentName}/details`

Gets a backend auth details.

> Body parameter

```json
{
  "resourceName": "string"
}
```

<h3 id="getbackendauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "ResourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "IdentityPoolName": {},
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "RequiredSignUpAttributes": {},
      "SignInMethod": {},
      "UserPoolName": {},
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "ResourceName": {}
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

<h3 id="getbackendauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendAuthResponse](#schemagetbackendauthresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendJob

<a id="opIdGetBackendJob"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/job/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backend/{appId}/job/{backendEnvironmentName}/{jobId}`

Returns information about a specific job.

<h3 id="getbackendjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|jobId|path|string|true|The ID for the job.|
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
  "AppId": {},
  "BackendEnvironmentName": {},
  "CreateTime": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {},
  "UpdateTime": {}
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

<h3 id="getbackendjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendJobResponse](#schemagetbackendjobresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackendJob

<a id="opIdUpdateBackendJob"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/job/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "operation": "string",
    "status": "string"
  }'
```

`POST /backend/{appId}/job/{backendEnvironmentName}/{jobId}`

Updates a specific job.

> Body parameter

```json
{
  "operation": "string",
  "status": "string"
}
```

<h3 id="updatebackendjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|jobId|path|string|true|The ID for the job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» operation|body|string|false|Filters the list of response objects to include only those with the specified operation name.|
|» status|body|string|false|Filters the list of response objects to include only those with the specified status.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "CreateTime": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {},
  "UpdateTime": {}
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

<h3 id="updatebackendjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackendJobResponse](#schemaupdatebackendjobresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBackendStorage

<a id="opIdGetBackendStorage"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/storage/string/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/storage/{backendEnvironmentName}/details`

Gets details for a backend storage resource.

> Body parameter

```json
{
  "resourceName": "string"
}
```

<h3 id="getbackendstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceName|body|string|true|The name of the storage resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "ResourceConfig": {
    "BucketName": {},
    "Imported": {},
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "ResourceName": {}
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

<h3 id="getbackendstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBackendStorageResponse](#schemagetbackendstorageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetToken

<a id="opIdGetToken"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/challenge/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /backend/{appId}/challenge/{sessionId}`

Gets the challenge token based on the given appId and sessionId.

<h3 id="gettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|sessionId|path|string|true|The session ID.|
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
  "AppId": {},
  "ChallengeCode": {},
  "SessionId": {},
  "Ttl": {}
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

<h3 id="gettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTokenResponse](#schemagettokenresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportBackendAuth

<a id="opIdImportBackendAuth"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/auth/string/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identityPoolId": "string",
    "nativeClientId": "string",
    "userPoolId": "string",
    "webClientId": "string"
  }'
```

`POST /backend/{appId}/auth/{backendEnvironmentName}/import`

Imports an existing backend authentication resource.

> Body parameter

```json
{
  "identityPoolId": "string",
  "nativeClientId": "string",
  "userPoolId": "string",
  "webClientId": "string"
}
```

<h3 id="importbackendauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» identityPoolId|body|string|false|The ID of the Amazon Cognito identity pool.|
|» nativeClientId|body|string|true|The ID of the Amazon Cognito native client.|
|» userPoolId|body|string|true|The ID of the Amazon Cognito user pool.|
|» webClientId|body|string|true|The ID of the Amazon Cognito web client.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="importbackendauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportBackendAuthResponse](#schemaimportbackendauthresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportBackendStorage

<a id="opIdImportBackendStorage"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/storage/string/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "bucketName": "string",
    "serviceName": "S3"
  }'
```

`POST /backend/{appId}/storage/{backendEnvironmentName}/import`

Imports an existing backend storage resource.

> Body parameter

```json
{
  "bucketName": "string",
  "serviceName": "S3"
}
```

<h3 id="importbackendstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» bucketName|body|string|false|The name of the S3 bucket.|
|» serviceName|body|string|true|The name of the storage service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» serviceName|S3|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
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

<h3 id="importbackendstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportBackendStorageResponse](#schemaimportbackendstorageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBackendJobs

<a id="opIdListBackendJobs"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/job/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobId": "string",
    "maxResults": 1,
    "nextToken": "string",
    "operation": "string",
    "status": "string"
  }'
```

`POST /backend/{appId}/job/{backendEnvironmentName}`

Lists the jobs for the backend of an Amplify app.

> Body parameter

```json
{
  "jobId": "string",
  "maxResults": 1,
  "nextToken": "string",
  "operation": "string",
  "status": "string"
}
```

<h3 id="listbackendjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
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
|» jobId|body|string|false|The ID for the job.|
|» maxResults|body|integer|false|The maximum number of results that you want in the response.|
|» nextToken|body|string|false|The token for the next set of results.|
|» operation|body|string|false|Filters the list of response objects to include only those with the specified operation name.|
|» status|body|string|false|Filters the list of response objects to include only those with the specified status.|

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

> 483 Response

```json
null
```

<h3 id="listbackendjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBackendJobsResponse](#schemalistbackendjobsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListS3Buckets

<a id="opIdListS3Buckets"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/s3Buckets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string"
  }'
```

`POST /s3Buckets`

The list of S3 buckets in your account.

> Body parameter

```json
{
  "nextToken": "string"
}
```

<h3 id="lists3buckets-parameters">Parameters</h3>

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
|» nextToken|body|string|false|Reserved for future use.|

> Example responses

> 200 Response

```json
{
  "Buckets": {},
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

<h3 id="lists3buckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListS3BucketsResponse](#schemalists3bucketsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveAllBackends

<a id="opIdRemoveAllBackends"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cleanAmplifyApp": true
  }'
```

`POST /backend/{appId}/remove`

Removes all backend environments from your Amplify project.

> Body parameter

```json
{
  "cleanAmplifyApp": true
}
```

<h3 id="removeallbackends-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» cleanAmplifyApp|body|boolean|false|Cleans up the Amplify Console app if this value is set to true.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="removeallbackends-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveAllBackendsResponse](#schemaremoveallbackendsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveBackendConfig

<a id="opIdRemoveBackendConfig"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/config/remove \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /backend/{appId}/config/remove`

Removes the AWS resources required to access the Amplify Admin UI.

<h3 id="removebackendconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
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
  "Error": {}
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

<h3 id="removebackendconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveBackendConfigResponse](#schemaremovebackendconfigresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackendAPI

<a id="opIdUpdateBackendAPI"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/api/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceConfig": {
      "AdditionalAuthTypes": {},
      "ApiName": {},
      "ConflictResolution": {
        "ResolutionStrategy": {}
      },
      "DefaultAuthType": {
        "Mode": {},
        "Settings": {
          "CognitoUserPoolId": {},
          "Description": {},
          "ExpirationTime": {},
          "OpenIDAuthTTL": {},
          "OpenIDClientId": {},
          "OpenIDIatTTL": {},
          "OpenIDIssueURL": {},
          "OpenIDProviderName": {}
        }
      },
      "Service": {},
      "TransformSchema": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/api/{backendEnvironmentName}`

Updates an existing backend API resource.

> Body parameter

```json
{
  "resourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "resourceName": "string"
}
```

<h3 id="updatebackendapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceConfig|body|object|false|The resource config for the data model, configured as a part of the Amplify project.|
|» » AdditionalAuthTypes|body|object|false|none|
|» » ApiName|body|object|false|none|
|» » ConflictResolution|body|object|false|none|
|» » » ResolutionStrategy|body|object|false|none|
|» » DefaultAuthType|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Settings|body|object|false|none|
|» » » » CognitoUserPoolId|body|object|false|none|
|» » » » Description|body|object|false|none|
|» » » » ExpirationTime|body|object|false|none|
|» » » » OpenIDAuthTTL|body|object|false|none|
|» » » » OpenIDClientId|body|object|false|none|
|» » » » OpenIDIatTTL|body|object|false|none|
|» » » » OpenIDIssueURL|body|object|false|none|
|» » » » OpenIDProviderName|body|object|false|none|
|» » Service|body|object|false|none|
|» » TransformSchema|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="updatebackendapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackendAPIResponse](#schemaupdatebackendapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackendAuth

<a id="opIdUpdateBackendAuth"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/auth/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceConfig": {
      "AuthResources": {},
      "IdentityPoolConfigs": {
        "UnauthenticatedLogin": {}
      },
      "Service": {},
      "UserPoolConfigs": {
        "ForgotPassword": {
          "DeliveryMethod": {},
          "EmailSettings": {
            "EmailMessage": {},
            "EmailSubject": {}
          },
          "SmsSettings": {
            "SmsMessage": {}
          }
        },
        "Mfa": {
          "MFAMode": {},
          "Settings": {
            "MfaTypes": {},
            "SmsMessage": {}
          }
        },
        "OAuth": {
          "DomainPrefix": {},
          "OAuthGrantType": {},
          "OAuthScopes": {},
          "RedirectSignInURIs": {},
          "RedirectSignOutURIs": {},
          "SocialProviderSettings": {
            "Facebook": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "Google": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "LoginWithAmazon": {
              "ClientId": {},
              "ClientSecret": {}
            },
            "SignInWithApple": {
              "ClientId": {},
              "KeyId": {},
              "PrivateKey": {},
              "TeamId": {}
            }
          }
        },
        "PasswordPolicy": {
          "AdditionalConstraints": {},
          "MinimumLength": {}
        },
        "VerificationMessage": {
          "DeliveryMethod": {},
          "EmailSettings": {
            "EmailMessage": {},
            "EmailSubject": {}
          },
          "SmsSettings": {
            "SmsMessage": {}
          }
        }
      }
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/auth/{backendEnvironmentName}`

Updates an existing backend authentication resource.

> Body parameter

```json
{
  "resourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "resourceName": "string"
}
```

<h3 id="updatebackendauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceConfig|body|object|true|Defines the resource configuration when updating an authentication resource in your Amplify project.|
|» » AuthResources|body|object|false|none|
|» » IdentityPoolConfigs|body|object|false|none|
|» » » UnauthenticatedLogin|body|object|false|none|
|» » Service|body|object|false|none|
|» » UserPoolConfigs|body|object|false|none|
|» » » ForgotPassword|body|object|false|none|
|» » » » DeliveryMethod|body|object|false|none|
|» » » » EmailSettings|body|object|false|none|
|» » » » » EmailMessage|body|object|false|none|
|» » » » » EmailSubject|body|object|false|none|
|» » » » SmsSettings|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» » » Mfa|body|object|false|none|
|» » » » MFAMode|body|object|false|none|
|» » » » Settings|body|object|false|none|
|» » » » » MfaTypes|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» » » OAuth|body|object|false|none|
|» » » » DomainPrefix|body|object|false|none|
|» » » » OAuthGrantType|body|object|false|none|
|» » » » OAuthScopes|body|object|false|none|
|» » » » RedirectSignInURIs|body|object|false|none|
|» » » » RedirectSignOutURIs|body|object|false|none|
|» » » » SocialProviderSettings|body|object|false|none|
|» » » » » Facebook|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » Google|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » LoginWithAmazon|body|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|» » » » » SignInWithApple|body|[BackendAuthAppleProviderConfig](#schemabackendauthappleproviderconfig)|false|Describes Apple social federation configurations for allowing your app users to sign in using OAuth.|
|» » » PasswordPolicy|body|object|false|none|
|» » » » AdditionalConstraints|body|object|false|none|
|» » » » MinimumLength|body|object|false|none|
|» » » VerificationMessage|body|object|false|none|
|» » » » DeliveryMethod|body|object|true|none|
|» » » » EmailSettings|body|object|false|none|
|» » » » » EmailMessage|body|object|false|none|
|» » » » » EmailSubject|body|object|false|none|
|» » » » SmsSettings|body|object|false|none|
|» » » » » SmsMessage|body|object|false|none|
|» resourceName|body|string|true|The name of this resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
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

<h3 id="updatebackendauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackendAuthResponse](#schemaupdatebackendauthresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackendConfig

<a id="opIdUpdateBackendConfig"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/config/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "loginAuthConfig": {
      "AwsCognitoIdentityPoolId": {},
      "AwsCognitoRegion": {},
      "AwsUserPoolsId": {},
      "AwsUserPoolsWebClientId": {}
    }
  }'
```

`POST /backend/{appId}/config/update`

Updates the AWS resources required to access the Amplify Admin UI.

> Body parameter

```json
{
  "loginAuthConfig": {
    "AwsCognitoIdentityPoolId": {},
    "AwsCognitoRegion": {},
    "AwsUserPoolsId": {},
    "AwsUserPoolsWebClientId": {}
  }
}
```

<h3 id="updatebackendconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» loginAuthConfig|body|object|false|The request object for this operation.|
|» » AwsCognitoIdentityPoolId|body|object|false|none|
|» » AwsCognitoRegion|body|object|false|none|
|» » AwsUserPoolsId|body|object|false|none|
|» » AwsUserPoolsWebClientId|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendManagerAppId": {},
  "Error": {},
  "LoginAuthConfig": {
    "AwsCognitoIdentityPoolId": {},
    "AwsCognitoRegion": {},
    "AwsUserPoolsId": {},
    "AwsUserPoolsWebClientId": {}
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

<h3 id="updatebackendconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackendConfigResponse](#schemaupdatebackendconfigresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBackendStorage

<a id="opIdUpdateBackendStorage"></a>

> Code samples

```bash
curl https://amplifybackend.us-east-1.amazonaws.com/backend/string/storage/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceConfig": {
      "Permissions": {
        "Authenticated": {},
        "UnAuthenticated": {}
      },
      "ServiceName": {}
    },
    "resourceName": "string"
  }'
```

`POST /backend/{appId}/storage/{backendEnvironmentName}`

Updates an existing backend storage resource.

> Body parameter

```json
{
  "resourceConfig": {
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "resourceName": "string"
}
```

<h3 id="updatebackendstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|
|backendEnvironmentName|path|string|true|The name of the backend environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceConfig|body|object|true|The resource configuration for updating backend storage.|
|» » Permissions|body|object|false|none|
|» » » Authenticated|body|object|true|none|
|» » » UnAuthenticated|body|object|false|none|
|» » ServiceName|body|object|false|none|
|» resourceName|body|string|true|The name of the storage resource.|

> Example responses

> 200 Response

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
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

<h3 id="updatebackendstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBackendStorageResponse](#schemaupdatebackendstorageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|GatewayTimeoutException|[GatewayTimeoutException](#schemagatewaytimeoutexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CloneBackendResponse">CloneBackendResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclonebackendresponse"></a>
<a id="schema_CloneBackendResponse"></a>
<a id="tocSclonebackendresponse"></a>
<a id="tocsclonebackendresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GatewayTimeoutException">GatewayTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytimeoutexception"></a>
<a id="schema_GatewayTimeoutException"></a>
<a id="tocSgatewaytimeoutexception"></a>
<a id="tocsgatewaytimeoutexception"></a>

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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_CreateBackendResponse">CreateBackendResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendresponse"></a>
<a id="schema_CreateBackendResponse"></a>
<a id="tocScreatebackendresponse"></a>
<a id="tocscreatebackendresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateBackendAPIResponse">CreateBackendAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendapiresponse"></a>
<a id="schema_CreateBackendAPIResponse"></a>
<a id="tocScreatebackendapiresponse"></a>
<a id="tocscreatebackendapiresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListOfBackendAPIAuthType">ListOfBackendAPIAuthType</h2>
<!-- backwards compatibility -->
<a id="schemalistofbackendapiauthtype"></a>
<a id="schema_ListOfBackendAPIAuthType"></a>
<a id="tocSlistofbackendapiauthtype"></a>
<a id="tocslistofbackendapiauthtype"></a>

```json
[
  {
    "Mode": {},
    "Settings": {
      "CognitoUserPoolId": {},
      "Description": {},
      "ExpirationTime": {},
      "OpenIDAuthTTL": {},
      "OpenIDClientId": {},
      "OpenIDIatTTL": {},
      "OpenIDIssueURL": {},
      "OpenIDProviderName": {}
    }
  }
]
```

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_BackendAPIConflictResolution">BackendAPIConflictResolution</h2>
<!-- backwards compatibility -->
<a id="schemabackendapiconflictresolution"></a>
<a id="schema_BackendAPIConflictResolution"></a>
<a id="tocSbackendapiconflictresolution"></a>
<a id="tocsbackendapiconflictresolution"></a>

```json
{
  "ResolutionStrategy": {}
}
```

Describes the conflict resolution configuration for your data model configured in your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResolutionStrategy|object|false|none|none|

<h2 id="tocS_BackendAPIAuthType">BackendAPIAuthType</h2>
<!-- backwards compatibility -->
<a id="schemabackendapiauthtype"></a>
<a id="schema_BackendAPIAuthType"></a>
<a id="tocSbackendapiauthtype"></a>
<a id="tocsbackendapiauthtype"></a>

```json
{
  "Mode": {},
  "Settings": {
    "CognitoUserPoolId": {},
    "Description": {},
    "ExpirationTime": {},
    "OpenIDAuthTTL": {},
    "OpenIDClientId": {},
    "OpenIDIatTTL": {},
    "OpenIDIssueURL": {},
    "OpenIDProviderName": {}
  }
}
```

Describes the auth types for your configured data models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_CreateBackendAuthResponse">CreateBackendAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthresponse"></a>
<a id="schema_CreateBackendAuthResponse"></a>
<a id="tocScreatebackendauthresponse"></a>
<a id="tocscreatebackendauthresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_AuthResources">AuthResources</h2>
<!-- backwards compatibility -->
<a id="schemaauthresources"></a>
<a id="schema_AuthResources"></a>
<a id="tocSauthresources"></a>
<a id="tocsauthresources"></a>

```json
"USER_POOL_ONLY"
```

<h2 id="tocS_CreateBackendAuthIdentityPoolConfig">CreateBackendAuthIdentityPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthidentitypoolconfig"></a>
<a id="schema_CreateBackendAuthIdentityPoolConfig"></a>
<a id="tocScreatebackendauthidentitypoolconfig"></a>
<a id="tocscreatebackendauthidentitypoolconfig"></a>

```json
{
  "IdentityPoolName": {},
  "UnauthenticatedLogin": {}
}
```

Describes authorization configurations for the auth resources, configured as a part of your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolName|object|true|none|none|
|UnauthenticatedLogin|object|true|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
"COGNITO"
```

<h2 id="tocS_CreateBackendAuthUserPoolConfig">CreateBackendAuthUserPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthuserpoolconfig"></a>
<a id="schema_CreateBackendAuthUserPoolConfig"></a>
<a id="tocScreatebackendauthuserpoolconfig"></a>
<a id="tocscreatebackendauthuserpoolconfig"></a>

```json
{
  "ForgotPassword": {
    "DeliveryMethod": {},
    "EmailSettings": {
      "EmailMessage": {},
      "EmailSubject": {}
    },
    "SmsSettings": {
      "SmsMessage": {}
    }
  },
  "Mfa": {
    "MFAMode": {},
    "Settings": {
      "MfaTypes": {},
      "SmsMessage": {}
    }
  },
  "OAuth": {
    "DomainPrefix": {},
    "OAuthGrantType": {},
    "OAuthScopes": {},
    "RedirectSignInURIs": {},
    "RedirectSignOutURIs": {},
    "SocialProviderSettings": {
      "Facebook": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "Google": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "LoginWithAmazon": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "SignInWithApple": {
        "ClientId": {},
        "KeyId": {},
        "PrivateKey": {},
        "TeamId": {}
      }
    }
  },
  "PasswordPolicy": {
    "AdditionalConstraints": {},
    "MinimumLength": {}
  },
  "RequiredSignUpAttributes": {},
  "SignInMethod": {},
  "UserPoolName": {},
  "VerificationMessage": {
    "DeliveryMethod": {},
    "EmailSettings": {
      "EmailMessage": {},
      "EmailSubject": {}
    },
    "SmsSettings": {
      "SmsMessage": {}
    }
  }
}
```

Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForgotPassword|object|false|none|none|
|Mfa|object|false|none|none|
|OAuth|object|false|none|none|
|PasswordPolicy|object|false|none|none|
|RequiredSignUpAttributes|object|true|none|none|
|SignInMethod|object|true|none|none|
|UserPoolName|object|true|none|none|
|VerificationMessage|object|false|none|none|

<h2 id="tocS_CreateBackendConfigResponse">CreateBackendConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendconfigresponse"></a>
<a id="schema_CreateBackendConfigResponse"></a>
<a id="tocScreatebackendconfigresponse"></a>
<a id="tocscreatebackendconfigresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateBackendStorageResponse">CreateBackendStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendstorageresponse"></a>
<a id="schema_CreateBackendStorageResponse"></a>
<a id="tocScreatebackendstorageresponse"></a>
<a id="tocscreatebackendstorageresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_BackendStoragePermissions">BackendStoragePermissions</h2>
<!-- backwards compatibility -->
<a id="schemabackendstoragepermissions"></a>
<a id="schema_BackendStoragePermissions"></a>
<a id="tocSbackendstoragepermissions"></a>
<a id="tocsbackendstoragepermissions"></a>

```json
{
  "Authenticated": {},
  "UnAuthenticated": {}
}
```

Describes the read, write, and delete permissions users have against your storage S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authenticated|object|true|none|none|
|UnAuthenticated|object|false|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"S3"
```

<h2 id="tocS_CreateTokenResponse">CreateTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenresponse"></a>
<a id="schema_CreateTokenResponse"></a>
<a id="tocScreatetokenresponse"></a>
<a id="tocscreatetokenresponse"></a>

```json
{
  "AppId": {},
  "ChallengeCode": {},
  "SessionId": {},
  "Ttl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|ChallengeCode|object|false|none|none|
|SessionId|object|false|none|none|
|Ttl|object|false|none|none|

<h2 id="tocS_DeleteBackendResponse">DeleteBackendResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendresponse"></a>
<a id="schema_DeleteBackendResponse"></a>
<a id="tocSdeletebackendresponse"></a>
<a id="tocsdeletebackendresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteBackendAPIResponse">DeleteBackendAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendapiresponse"></a>
<a id="schema_DeleteBackendAPIResponse"></a>
<a id="tocSdeletebackendapiresponse"></a>
<a id="tocsdeletebackendapiresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteBackendAuthResponse">DeleteBackendAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendauthresponse"></a>
<a id="schema_DeleteBackendAuthResponse"></a>
<a id="tocSdeletebackendauthresponse"></a>
<a id="tocsdeletebackendauthresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteBackendStorageResponse">DeleteBackendStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendstorageresponse"></a>
<a id="schema_DeleteBackendStorageResponse"></a>
<a id="tocSdeletebackendstorageresponse"></a>
<a id="tocsdeletebackendstorageresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteTokenResponse">DeleteTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetokenresponse"></a>
<a id="schema_DeleteTokenResponse"></a>
<a id="tocSdeletetokenresponse"></a>
<a id="tocsdeletetokenresponse"></a>

```json
{
  "IsSuccess": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsSuccess|object|false|none|none|

<h2 id="tocS_GenerateBackendAPIModelsResponse">GenerateBackendAPIModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratebackendapimodelsresponse"></a>
<a id="schema_GenerateBackendAPIModelsResponse"></a>
<a id="tocSgeneratebackendapimodelsresponse"></a>
<a id="tocsgeneratebackendapimodelsresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetBackendResponse">GetBackendResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendresponse"></a>
<a id="schema_GetBackendResponse"></a>
<a id="tocSgetbackendresponse"></a>
<a id="tocsgetbackendresponse"></a>

```json
{
  "AmplifyFeatureFlags": {},
  "AmplifyMetaConfig": {},
  "AppId": {},
  "AppName": {},
  "BackendEnvironmentList": {},
  "BackendEnvironmentName": {},
  "Error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmplifyFeatureFlags|object|false|none|none|
|AmplifyMetaConfig|object|false|none|none|
|AppId|object|false|none|none|
|AppName|object|false|none|none|
|BackendEnvironmentList|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_GetBackendAPIResponse">GetBackendAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendapiresponse"></a>
<a id="schema_GetBackendAPIResponse"></a>
<a id="tocSgetbackendapiresponse"></a>
<a id="tocsgetbackendapiresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|ResourceConfig|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_GetBackendAPIModelsResponse">GetBackendAPIModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendapimodelsresponse"></a>
<a id="schema_GetBackendAPIModelsResponse"></a>
<a id="tocSgetbackendapimodelsresponse"></a>
<a id="tocsgetbackendapimodelsresponse"></a>

```json
{
  "Models": {},
  "Status": {},
  "ModelIntrospectionSchema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Models|object|false|none|none|
|Status|object|false|none|none|
|ModelIntrospectionSchema|object|false|none|none|

<h2 id="tocS_GetBackendAuthResponse">GetBackendAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendauthresponse"></a>
<a id="schema_GetBackendAuthResponse"></a>
<a id="tocSgetbackendauthresponse"></a>
<a id="tocsgetbackendauthresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "ResourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "IdentityPoolName": {},
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "RequiredSignUpAttributes": {},
      "SignInMethod": {},
      "UserPoolName": {},
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|ResourceConfig|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_GetBackendJobResponse">GetBackendJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendjobresponse"></a>
<a id="schema_GetBackendJobResponse"></a>
<a id="tocSgetbackendjobresponse"></a>
<a id="tocsgetbackendjobresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "CreateTime": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|CreateTime|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|
|UpdateTime|object|false|none|none|

<h2 id="tocS_GetBackendStorageResponse">GetBackendStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendstorageresponse"></a>
<a id="schema_GetBackendStorageResponse"></a>
<a id="tocSgetbackendstorageresponse"></a>
<a id="tocsgetbackendstorageresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "ResourceConfig": {
    "BucketName": {},
    "Imported": {},
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "ResourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|ResourceConfig|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_GetTokenResponse">GetTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettokenresponse"></a>
<a id="schema_GetTokenResponse"></a>
<a id="tocSgettokenresponse"></a>
<a id="tocsgettokenresponse"></a>

```json
{
  "AppId": {},
  "ChallengeCode": {},
  "SessionId": {},
  "Ttl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|ChallengeCode|object|false|none|none|
|SessionId|object|false|none|none|
|Ttl|object|false|none|none|

<h2 id="tocS_ImportBackendAuthResponse">ImportBackendAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportbackendauthresponse"></a>
<a id="schema_ImportBackendAuthResponse"></a>
<a id="tocSimportbackendauthresponse"></a>
<a id="tocsimportbackendauthresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ImportBackendStorageResponse">ImportBackendStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportbackendstorageresponse"></a>
<a id="schema_ImportBackendStorageResponse"></a>
<a id="tocSimportbackendstorageresponse"></a>
<a id="tocsimportbackendstorageresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListBackendJobsResponse">ListBackendJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackendjobsresponse"></a>
<a id="schema_ListBackendJobsResponse"></a>
<a id="tocSlistbackendjobsresponse"></a>
<a id="tocslistbackendjobsresponse"></a>

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

<h2 id="tocS_ListS3BucketsResponse">ListS3BucketsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalists3bucketsresponse"></a>
<a id="schema_ListS3BucketsResponse"></a>
<a id="tocSlists3bucketsresponse"></a>
<a id="tocslists3bucketsresponse"></a>

```json
{
  "Buckets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Buckets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RemoveAllBackendsResponse">RemoveAllBackendsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveallbackendsresponse"></a>
<a id="schema_RemoveAllBackendsResponse"></a>
<a id="tocSremoveallbackendsresponse"></a>
<a id="tocsremoveallbackendsresponse"></a>

```json
{
  "AppId": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_RemoveBackendConfigResponse">RemoveBackendConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovebackendconfigresponse"></a>
<a id="schema_RemoveBackendConfigResponse"></a>
<a id="tocSremovebackendconfigresponse"></a>
<a id="tocsremovebackendconfigresponse"></a>

```json
{
  "Error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|false|none|none|

<h2 id="tocS_UpdateBackendAPIResponse">UpdateBackendAPIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendapiresponse"></a>
<a id="schema_UpdateBackendAPIResponse"></a>
<a id="tocSupdatebackendapiresponse"></a>
<a id="tocsupdatebackendapiresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthResponse">UpdateBackendAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthresponse"></a>
<a id="schema_UpdateBackendAuthResponse"></a>
<a id="tocSupdatebackendauthresponse"></a>
<a id="tocsupdatebackendauthresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthIdentityPoolConfig">UpdateBackendAuthIdentityPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthidentitypoolconfig"></a>
<a id="schema_UpdateBackendAuthIdentityPoolConfig"></a>
<a id="tocSupdatebackendauthidentitypoolconfig"></a>
<a id="tocsupdatebackendauthidentitypoolconfig"></a>

```json
{
  "UnauthenticatedLogin": {}
}
```

Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UnauthenticatedLogin|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthUserPoolConfig">UpdateBackendAuthUserPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthuserpoolconfig"></a>
<a id="schema_UpdateBackendAuthUserPoolConfig"></a>
<a id="tocSupdatebackendauthuserpoolconfig"></a>
<a id="tocsupdatebackendauthuserpoolconfig"></a>

```json
{
  "ForgotPassword": {
    "DeliveryMethod": {},
    "EmailSettings": {
      "EmailMessage": {},
      "EmailSubject": {}
    },
    "SmsSettings": {
      "SmsMessage": {}
    }
  },
  "Mfa": {
    "MFAMode": {},
    "Settings": {
      "MfaTypes": {},
      "SmsMessage": {}
    }
  },
  "OAuth": {
    "DomainPrefix": {},
    "OAuthGrantType": {},
    "OAuthScopes": {},
    "RedirectSignInURIs": {},
    "RedirectSignOutURIs": {},
    "SocialProviderSettings": {
      "Facebook": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "Google": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "LoginWithAmazon": {
        "ClientId": {},
        "ClientSecret": {}
      },
      "SignInWithApple": {
        "ClientId": {},
        "KeyId": {},
        "PrivateKey": {},
        "TeamId": {}
      }
    }
  },
  "PasswordPolicy": {
    "AdditionalConstraints": {},
    "MinimumLength": {}
  },
  "VerificationMessage": {
    "DeliveryMethod": {},
    "EmailSettings": {
      "EmailMessage": {},
      "EmailSubject": {}
    },
    "SmsSettings": {
      "SmsMessage": {}
    }
  }
}
```

Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForgotPassword|object|false|none|none|
|Mfa|object|false|none|none|
|OAuth|object|false|none|none|
|PasswordPolicy|object|false|none|none|
|VerificationMessage|object|false|none|none|

<h2 id="tocS_UpdateBackendConfigResponse">UpdateBackendConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendconfigresponse"></a>
<a id="schema_UpdateBackendConfigResponse"></a>
<a id="tocSupdatebackendconfigresponse"></a>
<a id="tocsupdatebackendconfigresponse"></a>

```json
{
  "AppId": {},
  "BackendManagerAppId": {},
  "Error": {},
  "LoginAuthConfig": {
    "AwsCognitoIdentityPoolId": {},
    "AwsCognitoRegion": {},
    "AwsUserPoolsId": {},
    "AwsUserPoolsWebClientId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendManagerAppId|object|false|none|none|
|Error|object|false|none|none|
|LoginAuthConfig|object|false|none|none|

<h2 id="tocS_UpdateBackendJobResponse">UpdateBackendJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendjobresponse"></a>
<a id="schema_UpdateBackendJobResponse"></a>
<a id="tocSupdatebackendjobresponse"></a>
<a id="tocsupdatebackendjobresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "CreateTime": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|CreateTime|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|
|UpdateTime|object|false|none|none|

<h2 id="tocS_UpdateBackendStorageResponse">UpdateBackendStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendstorageresponse"></a>
<a id="schema_UpdateBackendStorageResponse"></a>
<a id="tocSupdatebackendstorageresponse"></a>
<a id="tocsupdatebackendstorageresponse"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|false|none|none|
|BackendEnvironmentName|object|false|none|none|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_BackendAPIAppSyncAuthSettings">BackendAPIAppSyncAuthSettings</h2>
<!-- backwards compatibility -->
<a id="schemabackendapiappsyncauthsettings"></a>
<a id="schema_BackendAPIAppSyncAuthSettings"></a>
<a id="tocSbackendapiappsyncauthsettings"></a>
<a id="tocsbackendapiappsyncauthsettings"></a>

```json
{
  "CognitoUserPoolId": {},
  "Description": {},
  "ExpirationTime": {},
  "OpenIDAuthTTL": {},
  "OpenIDClientId": {},
  "OpenIDIatTTL": {},
  "OpenIDIssueURL": {},
  "OpenIDProviderName": {}
}
```

The authentication settings for accessing provisioned data models in your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CognitoUserPoolId|object|false|none|none|
|Description|object|false|none|none|
|ExpirationTime|object|false|none|none|
|OpenIDAuthTTL|object|false|none|none|
|OpenIDClientId|object|false|none|none|
|OpenIDIatTTL|object|false|none|none|
|OpenIDIssueURL|object|false|none|none|
|OpenIDProviderName|object|false|none|none|

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
"API_KEY"
```

<h2 id="tocS_ResolutionStrategy">ResolutionStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaresolutionstrategy"></a>
<a id="schema_ResolutionStrategy"></a>
<a id="tocSresolutionstrategy"></a>
<a id="tocsresolutionstrategy"></a>

```json
"OPTIMISTIC_CONCURRENCY"
```

<h2 id="tocS_BackendAPIResourceConfig">BackendAPIResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemabackendapiresourceconfig"></a>
<a id="schema_BackendAPIResourceConfig"></a>
<a id="tocSbackendapiresourceconfig"></a>
<a id="tocsbackendapiresourceconfig"></a>

```json
{
  "AdditionalAuthTypes": {},
  "ApiName": {},
  "ConflictResolution": {
    "ResolutionStrategy": {}
  },
  "DefaultAuthType": {
    "Mode": {},
    "Settings": {
      "CognitoUserPoolId": {},
      "Description": {},
      "ExpirationTime": {},
      "OpenIDAuthTTL": {},
      "OpenIDClientId": {},
      "OpenIDIatTTL": {},
      "OpenIDIssueURL": {},
      "OpenIDProviderName": {}
    }
  },
  "Service": {},
  "TransformSchema": {}
}
```

The resource config for the data model, configured as a part of the Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalAuthTypes|object|false|none|none|
|ApiName|object|false|none|none|
|ConflictResolution|object|false|none|none|
|DefaultAuthType|object|false|none|none|
|Service|object|false|none|none|
|TransformSchema|object|false|none|none|

<h2 id="tocS_BackendAuthAppleProviderConfig">BackendAuthAppleProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemabackendauthappleproviderconfig"></a>
<a id="schema_BackendAuthAppleProviderConfig"></a>
<a id="tocSbackendauthappleproviderconfig"></a>
<a id="tocsbackendauthappleproviderconfig"></a>

```json
{
  "ClientId": {},
  "KeyId": {},
  "PrivateKey": {},
  "TeamId": {}
}
```

Describes Apple social federation configurations for allowing your app users to sign in using OAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|false|none|none|
|KeyId|object|false|none|none|
|PrivateKey|object|false|none|none|
|TeamId|object|false|none|none|

<h2 id="tocS_BackendAuthSocialProviderConfig">BackendAuthSocialProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemabackendauthsocialproviderconfig"></a>
<a id="schema_BackendAuthSocialProviderConfig"></a>
<a id="tocSbackendauthsocialproviderconfig"></a>
<a id="tocsbackendauthsocialproviderconfig"></a>

```json
{
  "ClientId": {},
  "ClientSecret": {}
}
```

Describes third-party social federation configurations for allowing your app users to sign in using OAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|false|none|none|
|ClientSecret|object|false|none|none|

<h2 id="tocS_BackendJobRespObj">BackendJobRespObj</h2>
<!-- backwards compatibility -->
<a id="schemabackendjobrespobj"></a>
<a id="schema_BackendJobRespObj"></a>
<a id="tocSbackendjobrespobj"></a>
<a id="tocsbackendjobrespobj"></a>

```json
{
  "AppId": {},
  "BackendEnvironmentName": {},
  "CreateTime": {},
  "Error": {},
  "JobId": {},
  "Operation": {},
  "Status": {},
  "UpdateTime": {}
}
```

The response object for this operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|true|none|none|
|BackendEnvironmentName|object|true|none|none|
|CreateTime|object|false|none|none|
|Error|object|false|none|none|
|JobId|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|
|UpdateTime|object|false|none|none|

<h2 id="tocS_ListOfAuthenticatedElement">ListOfAuthenticatedElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofauthenticatedelement"></a>
<a id="schema_ListOfAuthenticatedElement"></a>
<a id="tocSlistofauthenticatedelement"></a>
<a id="tocslistofauthenticatedelement"></a>

```json
[
  "READ"
]
```

<h2 id="tocS_ListOfUnAuthenticatedElement">ListOfUnAuthenticatedElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofunauthenticatedelement"></a>
<a id="schema_ListOfUnAuthenticatedElement"></a>
<a id="tocSlistofunauthenticatedelement"></a>
<a id="tocslistofunauthenticatedelement"></a>

```json
[
  "READ"
]
```

<h2 id="tocS_CloneBackendRequest">CloneBackendRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclonebackendrequest"></a>
<a id="schema_CloneBackendRequest"></a>
<a id="tocSclonebackendrequest"></a>
<a id="tocsclonebackendrequest"></a>

```json
{
  "TargetEnvironmentName": {}
}
```

The request body for CloneBackend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetEnvironmentName|object|true|none|none|

<h2 id="tocS_CreateBackendAPIRequest">CreateBackendAPIRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendapirequest"></a>
<a id="schema_CreateBackendAPIRequest"></a>
<a id="tocScreatebackendapirequest"></a>
<a id="tocscreatebackendapirequest"></a>

```json
{
  "BackendEnvironmentName": {},
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
}
```

The request body for CreateBackendAPI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackendEnvironmentName|object|true|none|none|
|ResourceConfig|object|true|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_DeliveryMethod">DeliveryMethod</h2>
<!-- backwards compatibility -->
<a id="schemadeliverymethod"></a>
<a id="schema_DeliveryMethod"></a>
<a id="tocSdeliverymethod"></a>
<a id="tocsdeliverymethod"></a>

```json
"EMAIL"
```

The type of verification message to send.

<h2 id="tocS_EmailSettings">EmailSettings</h2>
<!-- backwards compatibility -->
<a id="schemaemailsettings"></a>
<a id="schema_EmailSettings"></a>
<a id="tocSemailsettings"></a>
<a id="tocsemailsettings"></a>

```json
{
  "EmailMessage": {},
  "EmailSubject": {}
}
```

The configuration for the email sent when an app user forgets their password.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailMessage|object|false|none|none|
|EmailSubject|object|false|none|none|

<h2 id="tocS_SmsSettings">SmsSettings</h2>
<!-- backwards compatibility -->
<a id="schemasmssettings"></a>
<a id="schema_SmsSettings"></a>
<a id="tocSsmssettings"></a>
<a id="tocssmssettings"></a>

```json
{
  "SmsMessage": {}
}
```

SMS settings for authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmsMessage|object|false|none|none|

<h2 id="tocS_CreateBackendAuthForgotPasswordConfig">CreateBackendAuthForgotPasswordConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthforgotpasswordconfig"></a>
<a id="schema_CreateBackendAuthForgotPasswordConfig"></a>
<a id="tocScreatebackendauthforgotpasswordconfig"></a>
<a id="tocscreatebackendauthforgotpasswordconfig"></a>

```json
{
  "DeliveryMethod": {},
  "EmailSettings": {
    "EmailMessage": {},
    "EmailSubject": {}
  },
  "SmsSettings": {
    "SmsMessage": {}
  }
}
```

<b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMethod|object|true|none|none|
|EmailSettings|object|false|none|none|
|SmsSettings|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_MFAMode">MFAMode</h2>
<!-- backwards compatibility -->
<a id="schemamfamode"></a>
<a id="schema_MFAMode"></a>
<a id="tocSmfamode"></a>
<a id="tocsmfamode"></a>

```json
"ON"
```

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "MfaTypes": {},
  "SmsMessage": {}
}
```

The settings of your MFA configuration for the backend of your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MfaTypes|object|false|none|none|
|SmsMessage|object|false|none|none|

<h2 id="tocS_CreateBackendAuthMFAConfig">CreateBackendAuthMFAConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthmfaconfig"></a>
<a id="schema_CreateBackendAuthMFAConfig"></a>
<a id="tocScreatebackendauthmfaconfig"></a>
<a id="tocscreatebackendauthmfaconfig"></a>

```json
{
  "MFAMode": {},
  "Settings": {
    "MfaTypes": {},
    "SmsMessage": {}
  }
}
```

Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MFAMode|object|true|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_OAuthGrantType">OAuthGrantType</h2>
<!-- backwards compatibility -->
<a id="schemaoauthgranttype"></a>
<a id="schema_OAuthGrantType"></a>
<a id="tocSoauthgranttype"></a>
<a id="tocsoauthgranttype"></a>

```json
"CODE"
```

<h2 id="tocS_ListOfOAuthScopesElement">ListOfOAuthScopesElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofoauthscopeselement"></a>
<a id="schema_ListOfOAuthScopesElement"></a>
<a id="tocSlistofoauthscopeselement"></a>
<a id="tocslistofoauthscopeselement"></a>

```json
[
  "PHONE"
]
```

<h2 id="tocS_ListOf__string">ListOf__string</h2>
<!-- backwards compatibility -->
<a id="schemalistof__string"></a>
<a id="schema_ListOf__string"></a>
<a id="tocSlistof__string"></a>
<a id="tocslistof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SocialProviderSettings">SocialProviderSettings</h2>
<!-- backwards compatibility -->
<a id="schemasocialprovidersettings"></a>
<a id="schema_SocialProviderSettings"></a>
<a id="tocSsocialprovidersettings"></a>
<a id="tocssocialprovidersettings"></a>

```json
{
  "Facebook": {
    "ClientId": {},
    "ClientSecret": {}
  },
  "Google": {
    "ClientId": {},
    "ClientSecret": {}
  },
  "LoginWithAmazon": {
    "ClientId": {},
    "ClientSecret": {}
  },
  "SignInWithApple": {
    "ClientId": {},
    "KeyId": {},
    "PrivateKey": {},
    "TeamId": {}
  }
}
```

The settings for using the social identity providers for access to your Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Facebook|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|none|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|Google|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|none|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|LoginWithAmazon|[BackendAuthSocialProviderConfig](#schemabackendauthsocialproviderconfig)|false|none|Describes third-party social federation configurations for allowing your app users to sign in using OAuth.|
|SignInWithApple|[BackendAuthAppleProviderConfig](#schemabackendauthappleproviderconfig)|false|none|Describes Apple social federation configurations for allowing your app users to sign in using OAuth.|

<h2 id="tocS_CreateBackendAuthOAuthConfig">CreateBackendAuthOAuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthoauthconfig"></a>
<a id="schema_CreateBackendAuthOAuthConfig"></a>
<a id="tocScreatebackendauthoauthconfig"></a>
<a id="tocscreatebackendauthoauthconfig"></a>

```json
{
  "DomainPrefix": {},
  "OAuthGrantType": {},
  "OAuthScopes": {},
  "RedirectSignInURIs": {},
  "RedirectSignOutURIs": {},
  "SocialProviderSettings": {
    "Facebook": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "Google": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "LoginWithAmazon": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "SignInWithApple": {
      "ClientId": {},
      "KeyId": {},
      "PrivateKey": {},
      "TeamId": {}
    }
  }
}
```

Creates the OAuth configuration for your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPrefix|object|false|none|none|
|OAuthGrantType|object|true|none|none|
|OAuthScopes|object|true|none|none|
|RedirectSignInURIs|object|true|none|none|
|RedirectSignOutURIs|object|true|none|none|
|SocialProviderSettings|object|false|none|none|

<h2 id="tocS_ListOfAdditionalConstraintsElement">ListOfAdditionalConstraintsElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofadditionalconstraintselement"></a>
<a id="schema_ListOfAdditionalConstraintsElement"></a>
<a id="tocSlistofadditionalconstraintselement"></a>
<a id="tocslistofadditionalconstraintselement"></a>

```json
[
  "REQUIRE_DIGIT"
]
```

<h2 id="tocS_CreateBackendAuthPasswordPolicyConfig">CreateBackendAuthPasswordPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthpasswordpolicyconfig"></a>
<a id="schema_CreateBackendAuthPasswordPolicyConfig"></a>
<a id="tocScreatebackendauthpasswordpolicyconfig"></a>
<a id="tocscreatebackendauthpasswordpolicyconfig"></a>

```json
{
  "AdditionalConstraints": {},
  "MinimumLength": {}
}
```

The password policy configuration for the backend to your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalConstraints|object|false|none|none|
|MinimumLength|object|true|none|none|

<h2 id="tocS_CreateBackendAuthResourceConfig">CreateBackendAuthResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthresourceconfig"></a>
<a id="schema_CreateBackendAuthResourceConfig"></a>
<a id="tocScreatebackendauthresourceconfig"></a>
<a id="tocscreatebackendauthresourceconfig"></a>

```json
{
  "AuthResources": {},
  "IdentityPoolConfigs": {
    "IdentityPoolName": {},
    "UnauthenticatedLogin": {}
  },
  "Service": {},
  "UserPoolConfigs": {
    "ForgotPassword": {
      "DeliveryMethod": {},
      "EmailSettings": {
        "EmailMessage": {},
        "EmailSubject": {}
      },
      "SmsSettings": {
        "SmsMessage": {}
      }
    },
    "Mfa": {
      "MFAMode": {},
      "Settings": {
        "MfaTypes": {},
        "SmsMessage": {}
      }
    },
    "OAuth": {
      "DomainPrefix": {},
      "OAuthGrantType": {},
      "OAuthScopes": {},
      "RedirectSignInURIs": {},
      "RedirectSignOutURIs": {},
      "SocialProviderSettings": {
        "Facebook": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "Google": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "LoginWithAmazon": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "SignInWithApple": {
          "ClientId": {},
          "KeyId": {},
          "PrivateKey": {},
          "TeamId": {}
        }
      }
    },
    "PasswordPolicy": {
      "AdditionalConstraints": {},
      "MinimumLength": {}
    },
    "RequiredSignUpAttributes": {},
    "SignInMethod": {},
    "UserPoolName": {},
    "VerificationMessage": {
      "DeliveryMethod": {},
      "EmailSettings": {
        "EmailMessage": {},
        "EmailSubject": {}
      },
      "SmsSettings": {
        "SmsMessage": {}
      }
    }
  }
}
```

Defines the resource configuration when creating an auth resource in your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthResources|object|true|none|none|
|IdentityPoolConfigs|object|false|none|none|
|Service|object|true|none|none|
|UserPoolConfigs|object|true|none|none|

<h2 id="tocS_CreateBackendAuthRequest">CreateBackendAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthrequest"></a>
<a id="schema_CreateBackendAuthRequest"></a>
<a id="tocScreatebackendauthrequest"></a>
<a id="tocscreatebackendauthrequest"></a>

```json
{
  "BackendEnvironmentName": {},
  "ResourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "IdentityPoolName": {},
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "RequiredSignUpAttributes": {},
      "SignInMethod": {},
      "UserPoolName": {},
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "ResourceName": {}
}
```

The request body for CreateBackendAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackendEnvironmentName|object|true|none|none|
|ResourceConfig|object|true|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_ListOfRequiredSignUpAttributesElement">ListOfRequiredSignUpAttributesElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofrequiredsignupattributeselement"></a>
<a id="schema_ListOfRequiredSignUpAttributesElement"></a>
<a id="tocSlistofrequiredsignupattributeselement"></a>
<a id="tocslistofrequiredsignupattributeselement"></a>

```json
[
  "ADDRESS"
]
```

<h2 id="tocS_SignInMethod">SignInMethod</h2>
<!-- backwards compatibility -->
<a id="schemasigninmethod"></a>
<a id="schema_SignInMethod"></a>
<a id="tocSsigninmethod"></a>
<a id="tocssigninmethod"></a>

```json
"EMAIL"
```

<h2 id="tocS_CreateBackendAuthVerificationMessageConfig">CreateBackendAuthVerificationMessageConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendauthverificationmessageconfig"></a>
<a id="schema_CreateBackendAuthVerificationMessageConfig"></a>
<a id="tocScreatebackendauthverificationmessageconfig"></a>
<a id="tocscreatebackendauthverificationmessageconfig"></a>

```json
{
  "DeliveryMethod": {},
  "EmailSettings": {
    "EmailMessage": {},
    "EmailSubject": {}
  },
  "SmsSettings": {
    "SmsMessage": {}
  }
}
```

Creates an email or SMS verification message for the auth resource configured for your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMethod|object|true|none|none|
|EmailSettings|object|false|none|none|
|SmsSettings|object|false|none|none|

<h2 id="tocS_CreateBackendConfigRequest">CreateBackendConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendconfigrequest"></a>
<a id="schema_CreateBackendConfigRequest"></a>
<a id="tocScreatebackendconfigrequest"></a>
<a id="tocscreatebackendconfigrequest"></a>

```json
{
  "BackendManagerAppId": {}
}
```

The request body for CreateBackendConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackendManagerAppId|object|false|none|none|

<h2 id="tocS_ResourceConfig">ResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconfig"></a>
<a id="schema_ResourceConfig"></a>
<a id="tocSresourceconfig"></a>
<a id="tocsresourceconfig"></a>

```json
{}
```

Defines the resource configuration for the data model in your Amplify project.

<h2 id="tocS_CreateBackendRequest">CreateBackendRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendrequest"></a>
<a id="schema_CreateBackendRequest"></a>
<a id="tocScreatebackendrequest"></a>
<a id="tocscreatebackendrequest"></a>

```json
{
  "AppId": {},
  "AppName": {},
  "BackendEnvironmentName": {},
  "ResourceConfig": {},
  "ResourceName": {}
}
```

The request body for CreateBackend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppId|object|true|none|none|
|AppName|object|true|none|none|
|BackendEnvironmentName|object|true|none|none|
|ResourceConfig|object|false|none|none|
|ResourceName|object|false|none|none|

<h2 id="tocS_CreateBackendStorageResourceConfig">CreateBackendStorageResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendstorageresourceconfig"></a>
<a id="schema_CreateBackendStorageResourceConfig"></a>
<a id="tocScreatebackendstorageresourceconfig"></a>
<a id="tocscreatebackendstorageresourceconfig"></a>

```json
{
  "BucketName": {},
  "Permissions": {
    "Authenticated": {},
    "UnAuthenticated": {}
  },
  "ServiceName": {}
}
```

The resource configuration for creating backend storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|Permissions|object|true|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS_CreateBackendStorageRequest">CreateBackendStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackendstoragerequest"></a>
<a id="schema_CreateBackendStorageRequest"></a>
<a id="tocScreatebackendstoragerequest"></a>
<a id="tocscreatebackendstoragerequest"></a>

```json
{
  "BackendEnvironmentName": {},
  "ResourceConfig": {
    "BucketName": {},
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "ResourceName": {}
}
```

The request body for CreateBackendStorage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackendEnvironmentName|object|true|none|none|
|ResourceConfig|object|true|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_CreateTokenRequest">CreateTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenrequest"></a>
<a id="schema_CreateTokenRequest"></a>
<a id="tocScreatetokenrequest"></a>
<a id="tocscreatetokenrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBackendAPIRequest">DeleteBackendAPIRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendapirequest"></a>
<a id="schema_DeleteBackendAPIRequest"></a>
<a id="tocSdeletebackendapirequest"></a>
<a id="tocsdeletebackendapirequest"></a>

```json
{
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
}
```

The request body for DeleteBackendAPI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceConfig|object|false|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_DeleteBackendAuthRequest">DeleteBackendAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendauthrequest"></a>
<a id="schema_DeleteBackendAuthRequest"></a>
<a id="tocSdeletebackendauthrequest"></a>
<a id="tocsdeletebackendauthrequest"></a>

```json
{
  "ResourceName": {}
}
```

The request body for DeleteBackendAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_DeleteBackendRequest">DeleteBackendRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendrequest"></a>
<a id="schema_DeleteBackendRequest"></a>
<a id="tocSdeletebackendrequest"></a>
<a id="tocsdeletebackendrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBackendStorageRequest">DeleteBackendStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebackendstoragerequest"></a>
<a id="schema_DeleteBackendStorageRequest"></a>
<a id="tocSdeletebackendstoragerequest"></a>
<a id="tocsdeletebackendstoragerequest"></a>

```json
{
  "ResourceName": {},
  "ServiceName": {}
}
```

The request body for DeleteBackendStorage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS_DeleteTokenRequest">DeleteTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetokenrequest"></a>
<a id="schema_DeleteTokenRequest"></a>
<a id="tocSdeletetokenrequest"></a>
<a id="tocsdeletetokenrequest"></a>

```json
{}
```

<h2 id="tocS_GenerateBackendAPIModelsRequest">GenerateBackendAPIModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratebackendapimodelsrequest"></a>
<a id="schema_GenerateBackendAPIModelsRequest"></a>
<a id="tocSgeneratebackendapimodelsrequest"></a>
<a id="tocsgeneratebackendapimodelsrequest"></a>

```json
{
  "ResourceName": {}
}
```

The request body for GenerateBackendAPIModels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_GetBackendAPIModelsRequest">GetBackendAPIModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendapimodelsrequest"></a>
<a id="schema_GetBackendAPIModelsRequest"></a>
<a id="tocSgetbackendapimodelsrequest"></a>
<a id="tocsgetbackendapimodelsrequest"></a>

```json
{
  "ResourceName": {}
}
```

The request body for GetBackendAPIModels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"LATEST"
```

<h2 id="tocS_GetBackendAPIRequest">GetBackendAPIRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendapirequest"></a>
<a id="schema_GetBackendAPIRequest"></a>
<a id="tocSgetbackendapirequest"></a>
<a id="tocsgetbackendapirequest"></a>

```json
{
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
}
```

The request body for GetBackendAPI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceConfig|object|false|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_GetBackendAuthRequest">GetBackendAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendauthrequest"></a>
<a id="schema_GetBackendAuthRequest"></a>
<a id="tocSgetbackendauthrequest"></a>
<a id="tocsgetbackendauthrequest"></a>

```json
{
  "ResourceName": {}
}
```

The request body for GetBackendAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_GetBackendJobRequest">GetBackendJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendjobrequest"></a>
<a id="schema_GetBackendJobRequest"></a>
<a id="tocSgetbackendjobrequest"></a>
<a id="tocsgetbackendjobrequest"></a>

```json
{}
```

<h2 id="tocS_GetBackendRequest">GetBackendRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendrequest"></a>
<a id="schema_GetBackendRequest"></a>
<a id="tocSgetbackendrequest"></a>
<a id="tocsgetbackendrequest"></a>

```json
{
  "BackendEnvironmentName": {}
}
```

The request body for GetBackend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackendEnvironmentName|object|false|none|none|

<h2 id="tocS_GetBackendStorageRequest">GetBackendStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendstoragerequest"></a>
<a id="schema_GetBackendStorageRequest"></a>
<a id="tocSgetbackendstoragerequest"></a>
<a id="tocsgetbackendstoragerequest"></a>

```json
{
  "ResourceName": {}
}
```

The request body for GetBackendStorage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceName|object|true|none|none|

<h2 id="tocS_GetBackendStorageResourceConfig">GetBackendStorageResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagetbackendstorageresourceconfig"></a>
<a id="schema_GetBackendStorageResourceConfig"></a>
<a id="tocSgetbackendstorageresourceconfig"></a>
<a id="tocsgetbackendstorageresourceconfig"></a>

```json
{
  "BucketName": {},
  "Imported": {},
  "Permissions": {
    "Authenticated": {},
    "UnAuthenticated": {}
  },
  "ServiceName": {}
}
```

The details for a backend storage resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|Imported|object|true|none|none|
|Permissions|object|false|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS_GetTokenRequest">GetTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettokenrequest"></a>
<a id="schema_GetTokenRequest"></a>
<a id="tocSgettokenrequest"></a>
<a id="tocsgettokenrequest"></a>

```json
{}
```

<h2 id="tocS_ImportBackendAuthRequest">ImportBackendAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportbackendauthrequest"></a>
<a id="schema_ImportBackendAuthRequest"></a>
<a id="tocSimportbackendauthrequest"></a>
<a id="tocsimportbackendauthrequest"></a>

```json
{
  "IdentityPoolId": {},
  "NativeClientId": {},
  "UserPoolId": {},
  "WebClientId": {}
}
```

The request body for ImportBackendAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityPoolId|object|false|none|none|
|NativeClientId|object|true|none|none|
|UserPoolId|object|true|none|none|
|WebClientId|object|true|none|none|

<h2 id="tocS_ImportBackendStorageRequest">ImportBackendStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportbackendstoragerequest"></a>
<a id="schema_ImportBackendStorageRequest"></a>
<a id="tocSimportbackendstoragerequest"></a>
<a id="tocsimportbackendstoragerequest"></a>

```json
{
  "BucketName": {},
  "ServiceName": {}
}
```

The request body for ImportBackendStorage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS___integerMin1Max25">__integerMin1Max25</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max25"></a>
<a id="schema___integerMin1Max25"></a>
<a id="tocS__integermin1max25"></a>
<a id="tocs__integermin1max25"></a>

```json
1
```

<h2 id="tocS_ListBackendJobsRequest">ListBackendJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbackendjobsrequest"></a>
<a id="schema_ListBackendJobsRequest"></a>
<a id="tocSlistbackendjobsrequest"></a>
<a id="tocslistbackendjobsrequest"></a>

```json
{
  "JobId": {},
  "MaxResults": {},
  "NextToken": {},
  "Operation": {},
  "Status": {}
}
```

The request body for ListBackendJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListOfBackendJobRespObj">ListOfBackendJobRespObj</h2>
<!-- backwards compatibility -->
<a id="schemalistofbackendjobrespobj"></a>
<a id="schema_ListOfBackendJobRespObj"></a>
<a id="tocSlistofbackendjobrespobj"></a>
<a id="tocslistofbackendjobrespobj"></a>

```json
[
  {
    "AppId": {},
    "BackendEnvironmentName": {},
    "CreateTime": {},
    "Error": {},
    "JobId": {},
    "Operation": {},
    "Status": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListS3BucketsRequest">ListS3BucketsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalists3bucketsrequest"></a>
<a id="schema_ListS3BucketsRequest"></a>
<a id="tocSlists3bucketsrequest"></a>
<a id="tocslists3bucketsrequest"></a>

```json
{
  "NextToken": {}
}
```

The request body for S3Buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOfS3BucketInfo">ListOfS3BucketInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistofs3bucketinfo"></a>
<a id="schema_ListOfS3BucketInfo"></a>
<a id="tocSlistofs3bucketinfo"></a>
<a id="tocslistofs3bucketinfo"></a>

```json
[
  {
    "CreationDate": {},
    "Name": {}
  }
]
```

<h2 id="tocS_LoginAuthConfigReqObj">LoginAuthConfigReqObj</h2>
<!-- backwards compatibility -->
<a id="schemaloginauthconfigreqobj"></a>
<a id="schema_LoginAuthConfigReqObj"></a>
<a id="tocSloginauthconfigreqobj"></a>
<a id="tocsloginauthconfigreqobj"></a>

```json
{
  "AwsCognitoIdentityPoolId": {},
  "AwsCognitoRegion": {},
  "AwsUserPoolsId": {},
  "AwsUserPoolsWebClientId": {}
}
```

The request object for this operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsCognitoIdentityPoolId|object|false|none|none|
|AwsCognitoRegion|object|false|none|none|
|AwsUserPoolsId|object|false|none|none|
|AwsUserPoolsWebClientId|object|false|none|none|

<h2 id="tocS_RemoveAllBackendsRequest">RemoveAllBackendsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveallbackendsrequest"></a>
<a id="schema_RemoveAllBackendsRequest"></a>
<a id="tocSremoveallbackendsrequest"></a>
<a id="tocsremoveallbackendsrequest"></a>

```json
{
  "CleanAmplifyApp": {}
}
```

The request body for RemoveAllBackends.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CleanAmplifyApp|object|false|none|none|

<h2 id="tocS_RemoveBackendConfigRequest">RemoveBackendConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovebackendconfigrequest"></a>
<a id="schema_RemoveBackendConfigRequest"></a>
<a id="tocSremovebackendconfigrequest"></a>
<a id="tocsremovebackendconfigrequest"></a>

```json
{}
```

<h2 id="tocS_S3BucketInfo">S3BucketInfo</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketinfo"></a>
<a id="schema_S3BucketInfo"></a>
<a id="tocSs3bucketinfo"></a>
<a id="tocss3bucketinfo"></a>

```json
{
  "CreationDate": {},
  "Name": {}
}
```

Describes the metadata of the S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_ListOfMfaTypesElement">ListOfMfaTypesElement</h2>
<!-- backwards compatibility -->
<a id="schemalistofmfatypeselement"></a>
<a id="schema_ListOfMfaTypesElement"></a>
<a id="tocSlistofmfatypeselement"></a>
<a id="tocslistofmfatypeselement"></a>

```json
[
  "SMS"
]
```

<h2 id="tocS_UpdateBackendAPIRequest">UpdateBackendAPIRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendapirequest"></a>
<a id="schema_UpdateBackendAPIRequest"></a>
<a id="tocSupdatebackendapirequest"></a>
<a id="tocsupdatebackendapirequest"></a>

```json
{
  "ResourceConfig": {
    "AdditionalAuthTypes": {},
    "ApiName": {},
    "ConflictResolution": {
      "ResolutionStrategy": {}
    },
    "DefaultAuthType": {
      "Mode": {},
      "Settings": {
        "CognitoUserPoolId": {},
        "Description": {},
        "ExpirationTime": {},
        "OpenIDAuthTTL": {},
        "OpenIDClientId": {},
        "OpenIDIatTTL": {},
        "OpenIDIssueURL": {},
        "OpenIDProviderName": {}
      }
    },
    "Service": {},
    "TransformSchema": {}
  },
  "ResourceName": {}
}
```

The request body for UpdateBackendAPI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceConfig|object|false|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_UpdateBackendAuthForgotPasswordConfig">UpdateBackendAuthForgotPasswordConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthforgotpasswordconfig"></a>
<a id="schema_UpdateBackendAuthForgotPasswordConfig"></a>
<a id="tocSupdatebackendauthforgotpasswordconfig"></a>
<a id="tocsupdatebackendauthforgotpasswordconfig"></a>

```json
{
  "DeliveryMethod": {},
  "EmailSettings": {
    "EmailMessage": {},
    "EmailSubject": {}
  },
  "SmsSettings": {
    "SmsMessage": {}
  }
}
```

<b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMethod|object|false|none|none|
|EmailSettings|object|false|none|none|
|SmsSettings|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthMFAConfig">UpdateBackendAuthMFAConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthmfaconfig"></a>
<a id="schema_UpdateBackendAuthMFAConfig"></a>
<a id="tocSupdatebackendauthmfaconfig"></a>
<a id="tocsupdatebackendauthmfaconfig"></a>

```json
{
  "MFAMode": {},
  "Settings": {
    "MfaTypes": {},
    "SmsMessage": {}
  }
}
```

Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MFAMode|object|false|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthOAuthConfig">UpdateBackendAuthOAuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthoauthconfig"></a>
<a id="schema_UpdateBackendAuthOAuthConfig"></a>
<a id="tocSupdatebackendauthoauthconfig"></a>
<a id="tocsupdatebackendauthoauthconfig"></a>

```json
{
  "DomainPrefix": {},
  "OAuthGrantType": {},
  "OAuthScopes": {},
  "RedirectSignInURIs": {},
  "RedirectSignOutURIs": {},
  "SocialProviderSettings": {
    "Facebook": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "Google": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "LoginWithAmazon": {
      "ClientId": {},
      "ClientSecret": {}
    },
    "SignInWithApple": {
      "ClientId": {},
      "KeyId": {},
      "PrivateKey": {},
      "TeamId": {}
    }
  }
}
```

The OAuth configurations for authenticating users into your Amplify app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPrefix|object|false|none|none|
|OAuthGrantType|object|false|none|none|
|OAuthScopes|object|false|none|none|
|RedirectSignInURIs|object|false|none|none|
|RedirectSignOutURIs|object|false|none|none|
|SocialProviderSettings|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthPasswordPolicyConfig">UpdateBackendAuthPasswordPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthpasswordpolicyconfig"></a>
<a id="schema_UpdateBackendAuthPasswordPolicyConfig"></a>
<a id="tocSupdatebackendauthpasswordpolicyconfig"></a>
<a id="tocsupdatebackendauthpasswordpolicyconfig"></a>

```json
{
  "AdditionalConstraints": {},
  "MinimumLength": {}
}
```

Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalConstraints|object|false|none|none|
|MinimumLength|object|false|none|none|

<h2 id="tocS_UpdateBackendAuthResourceConfig">UpdateBackendAuthResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthresourceconfig"></a>
<a id="schema_UpdateBackendAuthResourceConfig"></a>
<a id="tocSupdatebackendauthresourceconfig"></a>
<a id="tocsupdatebackendauthresourceconfig"></a>

```json
{
  "AuthResources": {},
  "IdentityPoolConfigs": {
    "UnauthenticatedLogin": {}
  },
  "Service": {},
  "UserPoolConfigs": {
    "ForgotPassword": {
      "DeliveryMethod": {},
      "EmailSettings": {
        "EmailMessage": {},
        "EmailSubject": {}
      },
      "SmsSettings": {
        "SmsMessage": {}
      }
    },
    "Mfa": {
      "MFAMode": {},
      "Settings": {
        "MfaTypes": {},
        "SmsMessage": {}
      }
    },
    "OAuth": {
      "DomainPrefix": {},
      "OAuthGrantType": {},
      "OAuthScopes": {},
      "RedirectSignInURIs": {},
      "RedirectSignOutURIs": {},
      "SocialProviderSettings": {
        "Facebook": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "Google": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "LoginWithAmazon": {
          "ClientId": {},
          "ClientSecret": {}
        },
        "SignInWithApple": {
          "ClientId": {},
          "KeyId": {},
          "PrivateKey": {},
          "TeamId": {}
        }
      }
    },
    "PasswordPolicy": {
      "AdditionalConstraints": {},
      "MinimumLength": {}
    },
    "VerificationMessage": {
      "DeliveryMethod": {},
      "EmailSettings": {
        "EmailMessage": {},
        "EmailSubject": {}
      },
      "SmsSettings": {
        "SmsMessage": {}
      }
    }
  }
}
```

Defines the resource configuration when updating an authentication resource in your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthResources|object|true|none|none|
|IdentityPoolConfigs|object|false|none|none|
|Service|object|true|none|none|
|UserPoolConfigs|object|true|none|none|

<h2 id="tocS_UpdateBackendAuthRequest">UpdateBackendAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthrequest"></a>
<a id="schema_UpdateBackendAuthRequest"></a>
<a id="tocSupdatebackendauthrequest"></a>
<a id="tocsupdatebackendauthrequest"></a>

```json
{
  "ResourceConfig": {
    "AuthResources": {},
    "IdentityPoolConfigs": {
      "UnauthenticatedLogin": {}
    },
    "Service": {},
    "UserPoolConfigs": {
      "ForgotPassword": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      },
      "Mfa": {
        "MFAMode": {},
        "Settings": {
          "MfaTypes": {},
          "SmsMessage": {}
        }
      },
      "OAuth": {
        "DomainPrefix": {},
        "OAuthGrantType": {},
        "OAuthScopes": {},
        "RedirectSignInURIs": {},
        "RedirectSignOutURIs": {},
        "SocialProviderSettings": {
          "Facebook": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "Google": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "LoginWithAmazon": {
            "ClientId": {},
            "ClientSecret": {}
          },
          "SignInWithApple": {
            "ClientId": {},
            "KeyId": {},
            "PrivateKey": {},
            "TeamId": {}
          }
        }
      },
      "PasswordPolicy": {
        "AdditionalConstraints": {},
        "MinimumLength": {}
      },
      "VerificationMessage": {
        "DeliveryMethod": {},
        "EmailSettings": {
          "EmailMessage": {},
          "EmailSubject": {}
        },
        "SmsSettings": {
          "SmsMessage": {}
        }
      }
    }
  },
  "ResourceName": {}
}
```

The request body for UpdateBackendAuth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceConfig|object|true|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_UpdateBackendAuthVerificationMessageConfig">UpdateBackendAuthVerificationMessageConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendauthverificationmessageconfig"></a>
<a id="schema_UpdateBackendAuthVerificationMessageConfig"></a>
<a id="tocSupdatebackendauthverificationmessageconfig"></a>
<a id="tocsupdatebackendauthverificationmessageconfig"></a>

```json
{
  "DeliveryMethod": {},
  "EmailSettings": {
    "EmailMessage": {},
    "EmailSubject": {}
  },
  "SmsSettings": {
    "SmsMessage": {}
  }
}
```

Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMethod|object|true|none|none|
|EmailSettings|object|false|none|none|
|SmsSettings|object|false|none|none|

<h2 id="tocS_UpdateBackendConfigRequest">UpdateBackendConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendconfigrequest"></a>
<a id="schema_UpdateBackendConfigRequest"></a>
<a id="tocSupdatebackendconfigrequest"></a>
<a id="tocsupdatebackendconfigrequest"></a>

```json
{
  "LoginAuthConfig": {
    "AwsCognitoIdentityPoolId": {},
    "AwsCognitoRegion": {},
    "AwsUserPoolsId": {},
    "AwsUserPoolsWebClientId": {}
  }
}
```

The request body for UpdateBackendConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoginAuthConfig|object|false|none|none|

<h2 id="tocS_UpdateBackendJobRequest">UpdateBackendJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendjobrequest"></a>
<a id="schema_UpdateBackendJobRequest"></a>
<a id="tocSupdatebackendjobrequest"></a>
<a id="tocsupdatebackendjobrequest"></a>

```json
{
  "Operation": {},
  "Status": {}
}
```

The request body for GetBackendJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operation|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateBackendStorageResourceConfig">UpdateBackendStorageResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendstorageresourceconfig"></a>
<a id="schema_UpdateBackendStorageResourceConfig"></a>
<a id="tocSupdatebackendstorageresourceconfig"></a>
<a id="tocsupdatebackendstorageresourceconfig"></a>

```json
{
  "Permissions": {
    "Authenticated": {},
    "UnAuthenticated": {}
  },
  "ServiceName": {}
}
```

The resource configuration for updating backend storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|true|none|none|
|ServiceName|object|true|none|none|

<h2 id="tocS_UpdateBackendStorageRequest">UpdateBackendStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebackendstoragerequest"></a>
<a id="schema_UpdateBackendStorageRequest"></a>
<a id="tocSupdatebackendstoragerequest"></a>
<a id="tocsupdatebackendstoragerequest"></a>

```json
{
  "ResourceConfig": {
    "Permissions": {
      "Authenticated": {},
      "UnAuthenticated": {}
    },
    "ServiceName": {}
  },
  "ResourceName": {}
}
```

The request body for UpdateBackendStorage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceConfig|object|true|none|none|
|ResourceName|object|true|none|none|

<h2 id="tocS_AdditionalConstraintsElement">AdditionalConstraintsElement</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalconstraintselement"></a>
<a id="schema_AdditionalConstraintsElement"></a>
<a id="tocSadditionalconstraintselement"></a>
<a id="tocsadditionalconstraintselement"></a>

```json
"REQUIRE_DIGIT"
```

<h2 id="tocS_AuthenticatedElement">AuthenticatedElement</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatedelement"></a>
<a id="schema_AuthenticatedElement"></a>
<a id="tocSauthenticatedelement"></a>
<a id="tocsauthenticatedelement"></a>

```json
"READ"
```

<h2 id="tocS_MfaTypesElement">MfaTypesElement</h2>
<!-- backwards compatibility -->
<a id="schemamfatypeselement"></a>
<a id="schema_MfaTypesElement"></a>
<a id="tocSmfatypeselement"></a>
<a id="tocsmfatypeselement"></a>

```json
"SMS"
```

<h2 id="tocS_OAuthScopesElement">OAuthScopesElement</h2>
<!-- backwards compatibility -->
<a id="schemaoauthscopeselement"></a>
<a id="schema_OAuthScopesElement"></a>
<a id="tocSoauthscopeselement"></a>
<a id="tocsoauthscopeselement"></a>

```json
"PHONE"
```

<h2 id="tocS_RequiredSignUpAttributesElement">RequiredSignUpAttributesElement</h2>
<!-- backwards compatibility -->
<a id="schemarequiredsignupattributeselement"></a>
<a id="schema_RequiredSignUpAttributesElement"></a>
<a id="tocSrequiredsignupattributeselement"></a>
<a id="tocsrequiredsignupattributeselement"></a>

```json
"ADDRESS"
```

<h2 id="tocS_UnAuthenticatedElement">UnAuthenticatedElement</h2>
<!-- backwards compatibility -->
<a id="schemaunauthenticatedelement"></a>
<a id="schema_UnAuthenticatedElement"></a>
<a id="tocSunauthenticatedelement"></a>
<a id="tocsunauthenticatedelement"></a>

```json
"READ"
```
