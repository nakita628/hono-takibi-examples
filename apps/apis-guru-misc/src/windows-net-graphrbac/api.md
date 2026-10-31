<h1 id="graphrbacmanagementclient">GraphRbacManagementClient v1.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Graph RBAC Management Client

Base URLs:

* <a href="https://graph.windows.net">https://graph.windows.net</a>

# Authentication

- oAuth2 authentication. Azure Active Directory OAuth2 Flow

    - Flow: implicit
    - Authorization URL = [https://login.microsoftonline.com/common/oauth2/authorize](https://login.microsoftonline.com/common/oauth2/authorize)

|Scope|Scope Description|
|---|---|
|user_impersonation|impersonate your user account|

<h1 id="graphrbacmanagementclient-application">Application</h1>

## Applications_List

<a id="opIdApplications_List"></a>

> Code samples

```bash
curl 'https://example.com/string/applications?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/applications`

Lists applications by filter parameters.

<h3 id="applicationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filters to apply to the operation.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "allowGuestsSignIn": true,
      "allowPassthroughUsers": true,
      "appId": "string",
      "appLogoUrl": "string",
      "appPermissions": [
        "string"
      ],
      "appRoles": [
        {
          "allowedMemberTypes": [
            "string"
          ],
          "description": "string",
          "displayName": "string",
          "id": "string",
          "isEnabled": true,
          "value": "string"
        }
      ],
      "availableToOtherTenants": true,
      "displayName": "string",
      "errorUrl": "string",
      "groupMembershipClaims": "None",
      "homepage": "string",
      "identifierUris": [
        "string"
      ],
      "informationalUrls": {
        "marketing": "string",
        "privacy": "string",
        "support": "string",
        "termsOfService": "string"
      },
      "isDeviceOnlyAuthSupported": true,
      "keyCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "type": "string",
          "usage": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "knownClientApplications": [
        "string"
      ],
      "logoutUrl": "string",
      "oauth2AllowImplicitFlow": true,
      "oauth2AllowUrlPathMatching": true,
      "oauth2Permissions": [
        {
          "adminConsentDescription": "string",
          "adminConsentDisplayName": "string",
          "id": "string",
          "isEnabled": true,
          "type": "string",
          "userConsentDescription": "string",
          "userConsentDisplayName": "string",
          "value": "string"
        }
      ],
      "oauth2RequirePostResponse": true,
      "optionalClaims": {
        "accessToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "idToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "samlToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ]
      },
      "orgRestrictions": [
        "string"
      ],
      "passwordCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "preAuthorizedApplications": [
        {
          "appId": "string",
          "extensions": [
            {
              "conditions": [
                "string"
              ]
            }
          ],
          "permissions": [
            {
              "accessGrants": [
                "string"
              ],
              "directAccessGrant": true
            }
          ]
        }
      ],
      "publicClient": true,
      "publisherDomain": "string",
      "replyUrls": [
        "string"
      ],
      "requiredResourceAccess": [
        {
          "resourceAccess": [
            {
              "id": "string",
              "type": "string",
              "property1": {},
              "property2": {}
            }
          ],
          "resourceAppId": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "samlMetadataUrl": "string",
      "signInAudience": "string",
      "wwwHomepage": "string"
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[ApplicationListResult](#schemaapplicationlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_Create

<a id="opIdApplications_Create"></a>

> Code samples

```bash
curl 'https://example.com/string/applications?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowGuestsSignIn": true,
    "allowPassthroughUsers": true,
    "appLogoUrl": "string",
    "appPermissions": [
      "string"
    ],
    "appRoles": [
      {
        "allowedMemberTypes": [
          "string"
        ],
        "description": "string",
        "displayName": "string",
        "id": "string",
        "isEnabled": true,
        "value": "string"
      }
    ],
    "availableToOtherTenants": true,
    "errorUrl": "string",
    "groupMembershipClaims": "None",
    "homepage": "string",
    "informationalUrls": {
      "marketing": "string",
      "privacy": "string",
      "support": "string",
      "termsOfService": "string"
    },
    "isDeviceOnlyAuthSupported": true,
    "keyCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "knownClientApplications": [
      "string"
    ],
    "logoutUrl": "string",
    "oauth2AllowImplicitFlow": true,
    "oauth2AllowUrlPathMatching": true,
    "oauth2Permissions": [
      {
        "adminConsentDescription": "string",
        "adminConsentDisplayName": "string",
        "id": "string",
        "isEnabled": true,
        "type": "string",
        "userConsentDescription": "string",
        "userConsentDisplayName": "string",
        "value": "string"
      }
    ],
    "oauth2RequirePostResponse": true,
    "optionalClaims": {
      "accessToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ],
      "idToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ],
      "samlToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ]
    },
    "orgRestrictions": [
      "string"
    ],
    "passwordCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "preAuthorizedApplications": [
      {
        "appId": "string",
        "extensions": [
          {
            "conditions": [
              "string"
            ]
          }
        ],
        "permissions": [
          {
            "accessGrants": [
              "string"
            ],
            "directAccessGrant": true
          }
        ]
      }
    ],
    "publicClient": true,
    "publisherDomain": "string",
    "replyUrls": [
      "string"
    ],
    "requiredResourceAccess": [
      {
        "resourceAccess": [
          {
            "id": "string",
            "type": "string",
            "property1": {},
            "property2": {}
          }
        ],
        "resourceAppId": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "samlMetadataUrl": "string",
    "signInAudience": "string",
    "wwwHomepage": "string",
    "displayName": "string",
    "identifierUris": [
      "string"
    ]
  }'
```

`POST /{tenantID}/applications`

Create a new application.

> Body parameter

```json
{
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string",
  "displayName": "string",
  "identifierUris": [
    "string"
  ]
}
```

<h3 id="applicationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[ApplicationCreateParameters](#schemaapplicationcreateparameters)|true|The parameters for creating an application.|
|» allowGuestsSignIn|body|boolean|false|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|» allowPassthroughUsers|body|boolean|false|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|» appLogoUrl|body|string|false|The url for the application logo image stored in a CDN.|
|» appPermissions|body|[string]|false|The application permissions.|
|» appRoles|body|[[AppRole](#schemaapprole)]|false|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|» availableToOtherTenants|body|boolean|false|Whether the application is available to other tenants.|
|» errorUrl|body|string|false|A URL provided by the author of the application to report errors when using the application.|
|» groupMembershipClaims|body|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|» homepage|body|string|false|The home page of the application.|
|» informationalUrls|body|[InformationalUrl](#schemainformationalurl)|false|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|» isDeviceOnlyAuthSupported|body|boolean|false|Specifies whether this application supports device authentication without a user. The default is false.|
|» keyCredentials|body|[[KeyCredential](#schemakeycredential)]|false|A collection of KeyCredential objects.|
|» knownClientApplications|body|[string]|false|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|» logoutUrl|body|string|false|the url of the logout page|
|» oauth2AllowImplicitFlow|body|boolean|false|Whether to allow implicit grant flow for OAuth2|
|» oauth2AllowUrlPathMatching|body|boolean|false|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|» oauth2Permissions|body|[[OAuth2Permission](#schemaoauth2permission)]|false|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|» oauth2RequirePostResponse|body|boolean|false|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|» optionalClaims|body|[OptionalClaims](#schemaoptionalclaims)|false|Specifying the claims to be included in the token.|
|» orgRestrictions|body|[string]|false|A list of tenants allowed to access application.|
|» passwordCredentials|body|[[PasswordCredential](#schemapasswordcredential)]|false|A collection of PasswordCredential objects|
|» preAuthorizedApplications|body|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|list of pre-authorized applications.|
|» publicClient|body|boolean|false|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|» publisherDomain|body|string|false|Reliable domain which can be used to identify an application.|
|» replyUrls|body|[string]|false|A collection of reply URLs for the application.|
|» requiredResourceAccess|body|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|» samlMetadataUrl|body|string|false|The URL to the SAML metadata for the application.|
|» signInAudience|body|string|false|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|» wwwHomepage|body|string|false|The primary Web page.|
|» displayName|body|string|true|The display name of the application.|
|» identifierUris|body|[string]|false|A collection of URIs for the application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» groupMembershipClaims|None|
|» groupMembershipClaims|SecurityGroup|
|» groupMembershipClaims|All|

> Example responses

> 201 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appId": "string",
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "displayName": "string",
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "identifierUris": [
    "string"
  ],
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The application was created successfully.|[Application](#schemaapplication)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_Get

<a id="opIdApplications_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/applications/{applicationObjectId}`

Get an application by object ID.

<h3 id="applicationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appId": "string",
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "displayName": "string",
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "identifierUris": [
    "string"
  ],
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[Application](#schemaapplication)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_Delete

<a id="opIdApplications_Delete"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/applications/{applicationObjectId}`

Delete an application.

<h3 id="applicationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_Patch

<a id="opIdApplications_Patch"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowGuestsSignIn": true,
    "allowPassthroughUsers": true,
    "appLogoUrl": "string",
    "appPermissions": [
      "string"
    ],
    "appRoles": [
      {
        "allowedMemberTypes": [
          "string"
        ],
        "description": "string",
        "displayName": "string",
        "id": "string",
        "isEnabled": true,
        "value": "string"
      }
    ],
    "availableToOtherTenants": true,
    "errorUrl": "string",
    "groupMembershipClaims": "None",
    "homepage": "string",
    "informationalUrls": {
      "marketing": "string",
      "privacy": "string",
      "support": "string",
      "termsOfService": "string"
    },
    "isDeviceOnlyAuthSupported": true,
    "keyCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "knownClientApplications": [
      "string"
    ],
    "logoutUrl": "string",
    "oauth2AllowImplicitFlow": true,
    "oauth2AllowUrlPathMatching": true,
    "oauth2Permissions": [
      {
        "adminConsentDescription": "string",
        "adminConsentDisplayName": "string",
        "id": "string",
        "isEnabled": true,
        "type": "string",
        "userConsentDescription": "string",
        "userConsentDisplayName": "string",
        "value": "string"
      }
    ],
    "oauth2RequirePostResponse": true,
    "optionalClaims": {
      "accessToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ],
      "idToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ],
      "samlToken": [
        {
          "additionalProperties": {},
          "essential": true,
          "name": "string",
          "source": "string"
        }
      ]
    },
    "orgRestrictions": [
      "string"
    ],
    "passwordCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "preAuthorizedApplications": [
      {
        "appId": "string",
        "extensions": [
          {
            "conditions": [
              "string"
            ]
          }
        ],
        "permissions": [
          {
            "accessGrants": [
              "string"
            ],
            "directAccessGrant": true
          }
        ]
      }
    ],
    "publicClient": true,
    "publisherDomain": "string",
    "replyUrls": [
      "string"
    ],
    "requiredResourceAccess": [
      {
        "resourceAccess": [
          {
            "id": "string",
            "type": "string",
            "property1": {},
            "property2": {}
          }
        ],
        "resourceAppId": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "samlMetadataUrl": "string",
    "signInAudience": "string",
    "wwwHomepage": "string",
    "displayName": "string",
    "identifierUris": [
      "string"
    ]
  }'
```

`PATCH /{tenantID}/applications/{applicationObjectId}`

Update an existing application.

> Body parameter

```json
{
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string",
  "displayName": "string",
  "identifierUris": [
    "string"
  ]
}
```

<h3 id="applicationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[ApplicationUpdateParameters](#schemaapplicationupdateparameters)|true|Parameters to update an existing application.|
|» allowGuestsSignIn|body|boolean|false|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|» allowPassthroughUsers|body|boolean|false|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|» appLogoUrl|body|string|false|The url for the application logo image stored in a CDN.|
|» appPermissions|body|[string]|false|The application permissions.|
|» appRoles|body|[[AppRole](#schemaapprole)]|false|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|» availableToOtherTenants|body|boolean|false|Whether the application is available to other tenants.|
|» errorUrl|body|string|false|A URL provided by the author of the application to report errors when using the application.|
|» groupMembershipClaims|body|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|» homepage|body|string|false|The home page of the application.|
|» informationalUrls|body|[InformationalUrl](#schemainformationalurl)|false|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|» isDeviceOnlyAuthSupported|body|boolean|false|Specifies whether this application supports device authentication without a user. The default is false.|
|» keyCredentials|body|[[KeyCredential](#schemakeycredential)]|false|A collection of KeyCredential objects.|
|» knownClientApplications|body|[string]|false|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|» logoutUrl|body|string|false|the url of the logout page|
|» oauth2AllowImplicitFlow|body|boolean|false|Whether to allow implicit grant flow for OAuth2|
|» oauth2AllowUrlPathMatching|body|boolean|false|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|» oauth2Permissions|body|[[OAuth2Permission](#schemaoauth2permission)]|false|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|» oauth2RequirePostResponse|body|boolean|false|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|» optionalClaims|body|[OptionalClaims](#schemaoptionalclaims)|false|Specifying the claims to be included in the token.|
|» orgRestrictions|body|[string]|false|A list of tenants allowed to access application.|
|» passwordCredentials|body|[[PasswordCredential](#schemapasswordcredential)]|false|A collection of PasswordCredential objects|
|» preAuthorizedApplications|body|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|list of pre-authorized applications.|
|» publicClient|body|boolean|false|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|» publisherDomain|body|string|false|Reliable domain which can be used to identify an application.|
|» replyUrls|body|[string]|false|A collection of reply URLs for the application.|
|» requiredResourceAccess|body|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|» samlMetadataUrl|body|string|false|The URL to the SAML metadata for the application.|
|» signInAudience|body|string|false|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|» wwwHomepage|body|string|false|The primary Web page.|
|» displayName|body|string|false|The display name of the application.|
|» identifierUris|body|[string]|false|A collection of URIs for the application.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» groupMembershipClaims|None|
|» groupMembershipClaims|SecurityGroup|
|» groupMembershipClaims|All|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## DeletedApplications_HardDelete

<a id="opIdDeletedApplications_HardDelete"></a>

> Code samples

```bash
curl 'https://example.com/string/deletedApplications/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/deletedApplications/{applicationObjectId}`

Hard-delete an application.

<h3 id="deletedapplicationsharddelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="deletedapplicationsharddelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-applicationowners">ApplicationOwners</h1>

## Applications_AddOwner

<a id="opIdApplications_AddOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/$links/owners?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "string",
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/applications/{applicationObjectId}/$links/owners`

Add an owner to an application.

> Body parameter

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="applicationsaddowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|The object ID of the application to which to add the owner.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[AddOwnerParameters](#schemaaddownerparameters)|true|The URL of the owner object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.|
|» url|body|string|true|A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsaddowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_RemoveOwner

<a id="opIdApplications_RemoveOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/$links/owners/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}`

Remove a member from owners.

<h3 id="applicationsremoveowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|The object ID of the application from which to remove the owner.|
|ownerObjectId|path|string|true|Owner object id|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsremoveowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Directory objects that are owners of the application.

<a id="opIdApplications_ListOwners"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/owners?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/applications/{applicationObjectId}/owners`

The owners are a set of non-admin users who are allowed to modify this object.

<h3 id="directory-objects-that-are-owners-of-the-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|The object ID of the application for which to get owners.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="directory-objects-that-are-owners-of-the-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-applicationkeycredentials">ApplicationKeyCredentials</h1>

## Applications_ListKeyCredentials

<a id="opIdApplications_ListKeyCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/keyCredentials?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/applications/{applicationObjectId}/keyCredentials`

Get the keyCredentials associated with an application.

<h3 id="applicationslistkeycredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationslistkeycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[KeyCredentialListResult](#schemakeycredentiallistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_UpdateKeyCredentials

<a id="opIdApplications_UpdateKeyCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/keyCredentials?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ]
  }'
```

`PATCH /{tenantID}/applications/{applicationObjectId}/keyCredentials`

Update the keyCredentials associated with an application.

> Body parameter

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="applicationsupdatekeycredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[KeyCredentialsUpdateParameters](#schemakeycredentialsupdateparameters)|true|Parameters to update the keyCredentials of an existing application.|
|» value|body|[[KeyCredential](#schemakeycredential)]|true|A collection of KeyCredentials.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsupdatekeycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-applicationpasswordcredentials">ApplicationPasswordCredentials</h1>

## Applications_ListPasswordCredentials

<a id="opIdApplications_ListPasswordCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/passwordCredentials?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/applications/{applicationObjectId}/passwordCredentials`

Get the passwordCredentials associated with an application.

<h3 id="applicationslistpasswordcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationslistpasswordcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[PasswordCredentialListResult](#schemapasswordcredentiallistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Applications_UpdatePasswordCredentials

<a id="opIdApplications_UpdatePasswordCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/applications/string/passwordCredentials?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ]
  }'
```

`PATCH /{tenantID}/applications/{applicationObjectId}/passwordCredentials`

Update passwordCredentials associated with an application.

> Body parameter

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="applicationsupdatepasswordcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationObjectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[PasswordCredentialsUpdateParameters](#schemapasswordcredentialsupdateparameters)|true|Parameters to update passwordCredentials of an existing application.|
|» value|body|[[PasswordCredential](#schemapasswordcredential)]|true|A collection of PasswordCredentials.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsupdatepasswordcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-deletedapplications">deletedApplications</h1>

## DeletedApplications_List

<a id="opIdDeletedApplications_List"></a>

> Code samples

```bash
curl 'https://example.com/string/deletedApplications?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/deletedApplications`

Gets a list of deleted applications in the directory.

<h3 id="deletedapplicationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filter to apply to the operation.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "allowGuestsSignIn": true,
      "allowPassthroughUsers": true,
      "appId": "string",
      "appLogoUrl": "string",
      "appPermissions": [
        "string"
      ],
      "appRoles": [
        {
          "allowedMemberTypes": [
            "string"
          ],
          "description": "string",
          "displayName": "string",
          "id": "string",
          "isEnabled": true,
          "value": "string"
        }
      ],
      "availableToOtherTenants": true,
      "displayName": "string",
      "errorUrl": "string",
      "groupMembershipClaims": "None",
      "homepage": "string",
      "identifierUris": [
        "string"
      ],
      "informationalUrls": {
        "marketing": "string",
        "privacy": "string",
        "support": "string",
        "termsOfService": "string"
      },
      "isDeviceOnlyAuthSupported": true,
      "keyCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "type": "string",
          "usage": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "knownClientApplications": [
        "string"
      ],
      "logoutUrl": "string",
      "oauth2AllowImplicitFlow": true,
      "oauth2AllowUrlPathMatching": true,
      "oauth2Permissions": [
        {
          "adminConsentDescription": "string",
          "adminConsentDisplayName": "string",
          "id": "string",
          "isEnabled": true,
          "type": "string",
          "userConsentDescription": "string",
          "userConsentDisplayName": "string",
          "value": "string"
        }
      ],
      "oauth2RequirePostResponse": true,
      "optionalClaims": {
        "accessToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "idToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "samlToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ]
      },
      "orgRestrictions": [
        "string"
      ],
      "passwordCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "preAuthorizedApplications": [
        {
          "appId": "string",
          "extensions": [
            {
              "conditions": [
                "string"
              ]
            }
          ],
          "permissions": [
            {
              "accessGrants": [
                "string"
              ],
              "directAccessGrant": true
            }
          ]
        }
      ],
      "publicClient": true,
      "publisherDomain": "string",
      "replyUrls": [
        "string"
      ],
      "requiredResourceAccess": [
        {
          "resourceAccess": [
            {
              "id": "string",
              "type": "string",
              "property1": {},
              "property2": {}
            }
          ],
          "resourceAppId": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "samlMetadataUrl": "string",
      "signInAudience": "string",
      "wwwHomepage": "string"
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="deletedapplicationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The applications were retrieved successfully.|[ApplicationListResult](#schemaapplicationlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## DeletedApplications_Restore

<a id="opIdDeletedApplications_Restore"></a>

> Code samples

```bash
curl 'https://example.com/string/deletedApplications/string/restore?api-version=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{tenantID}/deletedApplications/{objectId}/restore`

Restores the deleted application in the directory.

<h3 id="deletedapplicationsrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|Application object ID.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appId": "string",
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "displayName": "string",
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "identifierUris": [
    "string"
  ],
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="deletedapplicationsrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The application was restored successfully.|[Application](#schemaapplication)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-domain">Domain</h1>

## Domains_List

<a id="opIdDomains_List"></a>

> Code samples

```bash
curl 'https://example.com/string/domains?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/domains`

Gets a list of domains for the current tenant.

<h3 id="domainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filter to apply to the operation.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "authenticationType": "string",
      "isDefault": true,
      "isVerified": true,
      "name": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="domainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DomainListResult](#schemadomainlistresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Domains_Get

<a id="opIdDomains_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/domains/string?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/domains/{domainName}`

Gets a specific domain in the current tenant.

<h3 id="domainsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|name of the domain.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "authenticationType": "string",
  "isDefault": true,
  "isVerified": true,
  "name": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="domainsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[Domain](#schemadomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-objects">Objects</h1>

## Objects_GetObjectsByObjectIds

<a id="opIdObjects_GetObjectsByObjectIds"></a>

> Code samples

```bash
curl 'https://example.com/string/getObjectsByObjectIds?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "includeDirectoryObjectReferences": true,
    "objectIds": [
      "string"
    ],
    "types": [
      "string"
    ],
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/getObjectsByObjectIds`

Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.

> Body parameter

```json
{
  "includeDirectoryObjectReferences": true,
  "objectIds": [
    "string"
  ],
  "types": [
    "string"
  ],
  "property1": {},
  "property2": {}
}
```

<h3 id="objectsgetobjectsbyobjectids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[GetObjectsParameters](#schemagetobjectsparameters)|true|Objects filtering parameters.|
|» includeDirectoryObjectReferences|body|boolean|false|If true, also searches for object IDs in the partner tenant.|
|» objectIds|body|[string]|false|The requested object IDs.|
|» types|body|[string]|false|The requested object types.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="objectsgetobjectsbyobjectids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-group">Group</h1>

## Groups_List

<a id="opIdGroups_List"></a>

> Code samples

```bash
curl 'https://example.com/string/groups?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/groups`

Gets list of groups for the current tenant.

<h3 id="groupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filter to apply to the operation.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "displayName": "string",
      "mail": "string",
      "mailEnabled": true,
      "mailNickname": "string",
      "securityEnabled": true
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[GroupListResult](#schemagrouplistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_Create

<a id="opIdGroups_Create"></a>

> Code samples

```bash
curl 'https://example.com/string/groups?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "mailEnabled": false,
    "mailNickname": "string",
    "securityEnabled": true,
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/groups`

Create a group in the directory.

> Body parameter

```json
{
  "displayName": "string",
  "mailEnabled": false,
  "mailNickname": "string",
  "securityEnabled": true,
  "property1": {},
  "property2": {}
}
```

<h3 id="groupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[GroupCreateParameters](#schemagroupcreateparameters)|true|The parameters for the group to create.|
|» displayName|body|string|true|Group display name|
|» mailEnabled|body|boolean|true|Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.|
|» mailNickname|body|string|true|Mail nickname|
|» securityEnabled|body|boolean|true|Whether the group is a security group. Must be true. This is because only pure security groups can be created using the Graph API.|
|» **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mailEnabled|false|
|» securityEnabled|true|

> Example responses

> 201 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "displayName": "string",
  "mail": "string",
  "mailEnabled": true,
  "mailNickname": "string",
  "securityEnabled": true
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ADGroup](#schemaadgroup)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_AddMember

<a id="opIdGroups_AddMember"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/$links/members?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "string",
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/groups/{groupObjectId}/$links/members`

Add a member to a group.

> Body parameter

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupsaddmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupObjectId|path|string|true|The object ID of the group to which to add the member.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[GroupAddMemberParameters](#schemagroupaddmemberparameters)|true|The URL of the member object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.|
|» url|body|string|true|A member object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user, application, servicePrincipal, group) to be added.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsaddmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_RemoveMember

<a id="opIdGroups_RemoveMember"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/$links/members/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}`

Remove a member from a group.

<h3 id="groupsremovemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupObjectId|path|string|true|The object ID of the group from which to remove the member.|
|memberObjectId|path|string|true|Member object id|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsremovemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_Get

<a id="opIdGroups_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/groups/{objectId}`

Gets group information from the directory.

<h3 id="groupsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the user for which to get group information.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "displayName": "string",
  "mail": "string",
  "mailEnabled": true,
  "mailNickname": "string",
  "securityEnabled": true
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[ADGroup](#schemaadgroup)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_Delete

<a id="opIdGroups_Delete"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/groups/{objectId}`

Delete a group from the directory.

<h3 id="groupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the group to delete.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_GetMemberGroups

<a id="opIdGroups_GetMemberGroups"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/getMemberGroups?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "securityEnabledOnly": true,
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/groups/{objectId}/getMemberGroups`

Gets a collection of object IDs of groups of which the specified group is a member.

> Body parameter

```json
{
  "securityEnabledOnly": true,
  "property1": {},
  "property2": {}
}
```

<h3 id="groupsgetmembergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the group for which to get group membership.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[GroupGetMemberGroupsParameters](#schemagroupgetmembergroupsparameters)|true|Group filtering parameters.|
|» securityEnabledOnly|body|boolean|true|If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "value": [
    "string"
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsgetmembergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[GroupGetMemberGroupsResult](#schemagroupgetmembergroupsresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_GetGroupMembers

<a id="opIdGroups_GetGroupMembers"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/members?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/groups/{objectId}/members`

Gets the members of a group.

<h3 id="groupsgetgroupmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the group whose members should be retrieved.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsgetgroupmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_IsMemberOf

<a id="opIdGroups_IsMemberOf"></a>

> Code samples

```bash
curl 'https://example.com/string/isMemberOf?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "groupId": "string",
    "memberId": "string",
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/isMemberOf`

Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.

> Body parameter

```json
{
  "groupId": "string",
  "memberId": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupsismemberof-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[CheckGroupMembershipParameters](#schemacheckgroupmembershipparameters)|true|The check group membership parameters.|
|» groupId|body|string|true|The object ID of the group to check.|
|» memberId|body|string|true|The object ID of the contact, group, user, or service principal to check for membership in the specified group.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "value": true,
  "property1": {},
  "property2": {}
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsismemberof-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Indicates success. Returns true if the user, contact, group, or service principal is a direct or a transitive member of the specified group; otherwise, false.|[CheckGroupMembershipResult](#schemacheckgroupmembershipresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-groupsowners">GroupsOwners</h1>

## Groups_AddOwner

<a id="opIdGroups_AddOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/$links/owners?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "string",
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/groups/{objectId}/$links/owners`

Add an owner to a group.

> Body parameter

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupsaddowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the application to which to add the owner.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[AddOwnerParameters](#schemaaddownerparameters)|true|The URL of the owner object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.|
|» url|body|string|true|A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsaddowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Groups_RemoveOwner

<a id="opIdGroups_RemoveOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/$links/owners/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}`

Remove a member from owners.

<h3 id="groupsremoveowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the group from which to remove the owner.|
|ownerObjectId|path|string|true|Owner object id|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="groupsremoveowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-groupowners">GroupOwners</h1>

## Directory objects that are owners of the group.

<a id="opIdGroups_ListOwners"></a>

> Code samples

```bash
curl 'https://example.com/string/groups/string/owners?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/groups/{objectId}/owners`

The owners are a set of non-admin users who are allowed to modify this object.

<h3 id="directory-objects-that-are-owners-of-the-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the group for which to get owners.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="directory-objects-that-are-owners-of-the-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-signedinuser">SignedInUser</h1>

## SignedInUser_Get

<a id="opIdSignedInUser_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/me?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/me`

Gets the details for the currently logged-in user.

<h3 id="signedinuserget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "givenName": "string",
  "immutableId": "string",
  "mail": "string",
  "mailNickname": "string",
  "signInNames": [
    {
      "type": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "surname": "string",
  "usageLocation": "string",
  "userPrincipalName": "string",
  "userType": "Member"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="signedinuserget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[User](#schemauser)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## SignedInUser_ListOwnedObjects

<a id="opIdSignedInUser_ListOwnedObjects"></a>

> Code samples

```bash
curl 'https://example.com/string/me/ownedObjects?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/me/ownedObjects`

Get the list of directory objects that are owned by the user.

<h3 id="signedinuserlistownedobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="signedinuserlistownedobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-oauth2permissiongrantlist">OAuth2PermissionGrant_List</h1>

## OAuth2PermissionGrant_List

<a id="opIdOAuth2PermissionGrant_List"></a>

> Code samples

```bash
curl 'https://example.com/string/oauth2PermissionGrants?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/oauth2PermissionGrants`

Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

<h3 id="oauth2permissiongrantlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|This is the Service Principal ObjectId associated with the app|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "clientId": "clientId",
      "consentType": "consentType",
      "expiryTime": "expiryTime",
      "odata.type": "odata.type",
      "principalId": "",
      "resourceId": "resourceId",
      "scope": "scope",
      "startTime": "startTime"
    }
  ]
}
```

<h3 id="oauth2permissiongrantlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[OAuth2PermissionGrantListResult](#schemaoauth2permissiongrantlistresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-oauth2permissiongrantcreate">OAuth2PermissionGrant_Create</h1>

## OAuth2PermissionGrant_Create

<a id="opIdOAuth2PermissionGrant_Create"></a>

> Code samples

```bash
curl 'https://example.com/string/oauth2PermissionGrants?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "clientId",
    "consentType": "consentType",
    "expiryTime": "expiryTime",
    "odata.type": "odata.type",
    "principalId": "",
    "resourceId": "resourceId",
    "scope": "scope",
    "startTime": "startTime"
  }'
```

`POST /{tenantID}/oauth2PermissionGrants`

Grants OAuth2 permissions for the relevant resource Ids of an app.

> Body parameter

```json
{
  "clientId": "clientId",
  "consentType": "consentType",
  "expiryTime": "expiryTime",
  "odata.type": "odata.type",
  "principalId": "",
  "resourceId": "resourceId",
  "scope": "scope",
  "startTime": "startTime"
}
```

<h3 id="oauth2permissiongrantcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[OAuth2PermissionGrant](#schemaoauth2permissiongrant)|false|The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant.|
|» clientId|body|string|false|The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).|
|» consentType|body|string|false|Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.|
|» expiryTime|body|string|false|Expiry time for TTL|
|» objectId|body|string|false|The id of the permission grant|
|» odata.type|body|string|false|Microsoft.DirectoryServices.OAuth2PermissionGrant|
|» principalId|body|string|false|When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.|
|» resourceId|body|string|false|Object Id of the resource you want to grant|
|» scope|body|string|false|Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read|
|» startTime|body|string|false|Start time for TTL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» consentType|AllPrincipals|
|» consentType|Principal|

> Example responses

> 201 Response

```json
{
  "clientId": "clientId",
  "consentType": "consentType",
  "expiryTime": "expiryTime",
  "odata.type": "odata.type",
  "principalId": "",
  "resourceId": "resourceId",
  "scope": "scope",
  "startTime": "startTime"
}
```

<h3 id="oauth2permissiongrantcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK. The operation was successful.|[OAuth2PermissionGrant](#schemaoauth2permissiongrant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-oauth2permissiongrantdelete">OAuth2PermissionGrant_delete</h1>

## OAuth2PermissionGrant_Delete

<a id="opIdOAuth2PermissionGrant_Delete"></a>

> Code samples

```bash
curl 'https://example.com/string/oauth2PermissionGrants/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/oauth2PermissionGrants/{objectId}`

Delete a OAuth2 permission grant for the relevant resource Ids of an app.

<h3 id="oauth2permissiongrantdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of a permission grant.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="oauth2permissiongrantdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipal">ServicePrincipal</h1>

## ServicePrincipals_List

<a id="opIdServicePrincipals_List"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals`

Gets a list of service principals from the current tenant.

<h3 id="serviceprincipalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filter to apply to the operation.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "accountEnabled": true,
      "alternativeNames": [
        "string"
      ],
      "appDisplayName": "string",
      "appId": "string",
      "appOwnerTenantId": "string",
      "appRoleAssignmentRequired": true,
      "appRoles": [
        {
          "allowedMemberTypes": [
            "string"
          ],
          "description": "string",
          "displayName": "string",
          "id": "string",
          "isEnabled": true,
          "value": "string"
        }
      ],
      "displayName": "string",
      "errorUrl": "string",
      "homepage": "string",
      "keyCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "type": "string",
          "usage": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "logoutUrl": "string",
      "oauth2Permissions": [
        {
          "adminConsentDescription": "string",
          "adminConsentDisplayName": "string",
          "id": "string",
          "isEnabled": true,
          "type": "string",
          "userConsentDescription": "string",
          "userConsentDisplayName": "string",
          "value": "string"
        }
      ],
      "passwordCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "preferredTokenSigningKeyThumbprint": "string",
      "publisherName": "string",
      "replyUrls": [
        "string"
      ],
      "samlMetadataUrl": "string",
      "servicePrincipalNames": [
        "string"
      ],
      "servicePrincipalType": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[ServicePrincipalListResult](#schemaserviceprincipallistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_Create

<a id="opIdServicePrincipals_Create"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountEnabled": true,
    "appRoleAssignmentRequired": true,
    "keyCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "passwordCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "servicePrincipalType": "string",
    "tags": [
      "string"
    ],
    "appId": "string"
  }'
```

`POST /{tenantID}/servicePrincipals`

Creates a service principal in the directory.

> Body parameter

```json
{
  "accountEnabled": true,
  "appRoleAssignmentRequired": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ],
  "appId": "string"
}
```

<h3 id="serviceprincipalscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[ServicePrincipalCreateParameters](#schemaserviceprincipalcreateparameters)|true|Parameters to create a service principal.|
|» accountEnabled|body|boolean|false|whether or not the service principal account is enabled|
|» appRoleAssignmentRequired|body|boolean|false|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|» keyCredentials|body|[[KeyCredential](#schemakeycredential)]|false|The collection of key credentials associated with the service principal.|
|» passwordCredentials|body|[[PasswordCredential](#schemapasswordcredential)]|false|The collection of password credentials associated with the service principal.|
|» servicePrincipalType|body|string|false|the type of the service principal|
|» tags|body|[string]|false|Optional list of tags that you can apply to your service principals. Not nullable.|
|» appId|body|string|true|The application ID.|

> Example responses

> 201 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "alternativeNames": [
    "string"
  ],
  "appDisplayName": "string",
  "appId": "string",
  "appOwnerTenantId": "string",
  "appRoleAssignmentRequired": true,
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "displayName": "string",
  "errorUrl": "string",
  "homepage": "string",
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "logoutUrl": "string",
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preferredTokenSigningKeyThumbprint": "string",
  "publisherName": "string",
  "replyUrls": [
    "string"
  ],
  "samlMetadataUrl": "string",
  "servicePrincipalNames": [
    "string"
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The service principal was created successfully.|[ServicePrincipal](#schemaserviceprincipal)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_Get

<a id="opIdServicePrincipals_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}`

Gets service principal information from the directory. Query by objectId or pass a filter to query by appId

<h3 id="serviceprincipalsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal to get.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "alternativeNames": [
    "string"
  ],
  "appDisplayName": "string",
  "appId": "string",
  "appOwnerTenantId": "string",
  "appRoleAssignmentRequired": true,
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "displayName": "string",
  "errorUrl": "string",
  "homepage": "string",
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "logoutUrl": "string",
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preferredTokenSigningKeyThumbprint": "string",
  "publisherName": "string",
  "replyUrls": [
    "string"
  ],
  "samlMetadataUrl": "string",
  "servicePrincipalNames": [
    "string"
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[ServicePrincipal](#schemaserviceprincipal)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_Delete

<a id="opIdServicePrincipals_Delete"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/servicePrincipals/{objectId}`

Deletes a service principal from the directory.

<h3 id="serviceprincipalsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal to delete.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_Update

<a id="opIdServicePrincipals_Update"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountEnabled": true,
    "appRoleAssignmentRequired": true,
    "keyCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "passwordCredentials": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ],
    "servicePrincipalType": "string",
    "tags": [
      "string"
    ]
  }'
```

`PATCH /{tenantID}/servicePrincipals/{objectId}`

Updates a service principal in the directory.

> Body parameter

```json
{
  "accountEnabled": true,
  "appRoleAssignmentRequired": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="serviceprincipalsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal to delete.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[ServicePrincipalUpdateParameters](#schemaserviceprincipalupdateparameters)|true|Parameters to update a service principal.|
|» accountEnabled|body|boolean|false|whether or not the service principal account is enabled|
|» appRoleAssignmentRequired|body|boolean|false|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|» keyCredentials|body|[[KeyCredential](#schemakeycredential)]|false|The collection of key credentials associated with the service principal.|
|» passwordCredentials|body|[[PasswordCredential](#schemapasswordcredential)]|false|The collection of password credentials associated with the service principal.|
|» servicePrincipalType|body|string|false|the type of the service principal|
|» tags|body|[string]|false|Optional list of tags that you can apply to your service principals. Not nullable.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalowners">ServicePrincipalOwners</h1>

## ServicePrincipals_AddOwner

<a id="opIdServicePrincipals_AddOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/$links/owners?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "string",
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/servicePrincipals/{objectId}/$links/owners`

Add an owner to a service principal.

> Body parameter

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="serviceprincipalsaddowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal to which to add the owner.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[AddOwnerParameters](#schemaaddownerparameters)|true|The URL of the owner object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.|
|» url|body|string|true|A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsaddowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_RemoveOwner

<a id="opIdServicePrincipals_RemoveOwner"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/$links/owners/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/servicePrincipals/{objectId}/$links/owners/{ownerObjectId}`

Remove a member from owners.

<h3 id="serviceprincipalsremoveowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal from which to remove the owner.|
|ownerObjectId|path|string|true|Owner object id|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsremoveowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. Indicates success. No response body is returned.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Directory objects that are owners of this service principal.

<a id="opIdServicePrincipals_ListOwners"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/owners?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}/owners`

The owners are a set of non-admin users who are allowed to modify this object.

<h3 id="directory-objects-that-are-owners-of-this-service-principal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal for which to get owners.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="directory-objects-that-are-owners-of-this-service-principal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[DirectoryObjectListResult](#schemadirectoryobjectlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalapproleassignedto">ServicePrincipalAppRoleAssignedTo</h1>

## Principals (users, groups, and service principals) that are assigned to this service principal.

<a id="opIdServicePrincipals_ListAppRoleAssignedTo"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/appRoleAssignedTo?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo`

<h3 id="principals-users-groups-and-service-principals-that-are-assigned-to-this-service-principal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal for which to get owners.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "id": "string",
      "principalDisplayName": "string",
      "principalId": "string",
      "principalType": "string",
      "resourceDisplayName": "string",
      "resourceId": "string"
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="principals-users-groups-and-service-principals-that-are-assigned-to-this-service-principal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[AppRoleAssignmentListResult](#schemaapproleassignmentlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalapproleassignments">ServicePrincipalAppRoleAssignments</h1>

## Applications that the service principal is assigned to.

<a id="opIdServicePrincipals_ListAppRoleAssignments"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/appRoleAssignments?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}/appRoleAssignments`

<h3 id="applications-that-the-service-principal-is-assigned-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal for which to get owners.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "id": "string",
      "principalDisplayName": "string",
      "principalId": "string",
      "principalType": "string",
      "resourceDisplayName": "string",
      "resourceId": "string"
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applications-that-the-service-principal-is-assigned-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[AppRoleAssignmentListResult](#schemaapproleassignmentlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalkeycredentials">ServicePrincipalKeyCredentials</h1>

## ServicePrincipals_ListKeyCredentials

<a id="opIdServicePrincipals_ListKeyCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/keyCredentials?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}/keyCredentials`

Get the keyCredentials associated with the specified service principal.

<h3 id="serviceprincipalslistkeycredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal for which to get keyCredentials.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalslistkeycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[KeyCredentialListResult](#schemakeycredentiallistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_UpdateKeyCredentials

<a id="opIdServicePrincipals_UpdateKeyCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/keyCredentials?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "type": "string",
        "usage": "string",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ]
  }'
```

`PATCH /{tenantID}/servicePrincipals/{objectId}/keyCredentials`

Update the keyCredentials associated with a service principal.

> Body parameter

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="serviceprincipalsupdatekeycredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID for which to get service principal information.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[KeyCredentialsUpdateParameters](#schemakeycredentialsupdateparameters)|true|Parameters to update the keyCredentials of an existing service principal.|
|» value|body|[[KeyCredential](#schemakeycredential)]|true|A collection of KeyCredentials.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsupdatekeycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalpasswordcredentials">ServicePrincipalPasswordCredentials</h1>

## ServicePrincipals_ListPasswordCredentials

<a id="opIdServicePrincipals_ListPasswordCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/passwordCredentials?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipals/{objectId}/passwordCredentials`

Gets the passwordCredentials associated with a service principal.

<h3 id="serviceprincipalslistpasswordcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalslistpasswordcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[PasswordCredentialListResult](#schemapasswordcredentiallistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## ServicePrincipals_UpdatePasswordCredentials

<a id="opIdServicePrincipals_UpdatePasswordCredentials"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipals/string/passwordCredentials?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": [
      {
        "customKeyIdentifier": "string",
        "endDate": "1970-01-01T00:00:00Z",
        "keyId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "value": "string",
        "property1": {},
        "property2": {}
      }
    ]
  }'
```

`PATCH /{tenantID}/servicePrincipals/{objectId}/passwordCredentials`

Updates the passwordCredentials associated with a service principal.

> Body parameter

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

<h3 id="serviceprincipalsupdatepasswordcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the service principal.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[PasswordCredentialsUpdateParameters](#schemapasswordcredentialsupdateparameters)|true|Parameters to update the passwordCredentials of an existing service principal.|
|» value|body|[[PasswordCredential](#schemapasswordcredential)]|true|A collection of PasswordCredentials.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="serviceprincipalsupdatepasswordcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-serviceprincipalsbyappid">ServicePrincipalsByAppId</h1>

## Applications_GetServicePrincipalsIdByAppId

<a id="opIdApplications_GetServicePrincipalsIdByAppId"></a>

> Code samples

```bash
curl 'https://example.com/string/servicePrincipalsByAppId/string/objectId?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId`

Gets an object id for a given application id from the current tenant.

<h3 id="applicationsgetserviceprincipalsidbyappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|applicationID|path|string|true|The application ID.|

> Example responses

> 200 Response

```json
{
  "odata.metadata": "string",
  "value": "string"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="applicationsgetserviceprincipalsidbyappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[ServicePrincipalObjectResult](#schemaserviceprincipalobjectresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

<h1 id="graphrbacmanagementclient-user">User</h1>

## Users_List

<a id="opIdUsers_List"></a>

> Code samples

```bash
curl 'https://example.com/string/users?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/users`

Gets list of users for the current tenant.

<h3 id="userslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$filter|query|string|false|The filter to apply to the operation.|
|$expand|query|string|false|The expand value for the operation result.|
|$top|query|integer|false|(Optional) Set the maximum number of results per response.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "accountEnabled": true,
      "displayName": "string",
      "givenName": "string",
      "immutableId": "string",
      "mail": "string",
      "mailNickname": "string",
      "signInNames": [
        {
          "type": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "surname": "string",
      "usageLocation": "string",
      "userPrincipalName": "string",
      "userType": "Member"
    }
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="userslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[UserListResult](#schemauserlistresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Users_Create

<a id="opIdUsers_Create"></a>

> Code samples

```bash
curl 'https://example.com/string/users?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "givenName": "string",
    "immutableId": "string",
    "surname": "string",
    "usageLocation": "string",
    "userType": "Member",
    "property1": {},
    "property2": {},
    "accountEnabled": true,
    "displayName": "string",
    "mail": "string",
    "mailNickname": "string",
    "passwordProfile": {
      "forceChangePasswordNextLogin": true,
      "password": "string",
      "property1": {},
      "property2": {}
    },
    "userPrincipalName": "string"
  }'
```

`POST /{tenantID}/users`

Create a new user.

> Body parameter

```json
{
  "givenName": "string",
  "immutableId": "string",
  "surname": "string",
  "usageLocation": "string",
  "userType": "Member",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "mail": "string",
  "mailNickname": "string",
  "passwordProfile": {
    "forceChangePasswordNextLogin": true,
    "password": "string",
    "property1": {},
    "property2": {}
  },
  "userPrincipalName": "string"
}
```

<h3 id="userscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[UserCreateParameters](#schemausercreateparameters)|true|Parameters to create a user.|
|» givenName|body|string|false|The given name for the user.|
|» immutableId|body|string|false|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|» surname|body|string|false|The user's surname (family name or last name).|
|» usageLocation|body|string|false|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|» userType|body|string|false|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|
|» **additionalProperties**|body|object|false|none|
|» accountEnabled|body|boolean|true|Whether the account is enabled.|
|» displayName|body|string|true|The display name of the user.|
|» mail|body|string|false|The primary email address of the user.|
|» mailNickname|body|string|true|The mail alias for the user.|
|» passwordProfile|body|[PasswordProfile](#schemapasswordprofile)|true|The password profile associated with a user.|
|» userPrincipalName|body|string|true|The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» userType|Member|
|» userType|Guest|

> Example responses

> 201 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "givenName": "string",
  "immutableId": "string",
  "mail": "string",
  "mailNickname": "string",
  "signInNames": [
    {
      "type": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "surname": "string",
  "usageLocation": "string",
  "userPrincipalName": "string",
  "userType": "Member"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="userscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created. Indicates success. The new user is returned in the response body.|[User](#schemauser)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Users_GetMemberGroups

<a id="opIdUsers_GetMemberGroups"></a>

> Code samples

```bash
curl 'https://example.com/string/users/string/getMemberGroups?api-version=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "securityEnabledOnly": true,
    "property1": {},
    "property2": {}
  }'
```

`POST /{tenantID}/users/{objectId}/getMemberGroups`

Gets a collection that contains the object IDs of the groups of which the user is a member.

> Body parameter

```json
{
  "securityEnabledOnly": true,
  "property1": {},
  "property2": {}
}
```

<h3 id="usersgetmembergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The object ID of the user for which to get group membership.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[UserGetMemberGroupsParameters](#schemausergetmembergroupsparameters)|true|User filtering parameters.|
|» securityEnabledOnly|body|boolean|true|If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "value": [
    "string"
  ]
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="usersgetmembergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[UserGetMemberGroupsResult](#schemausergetmembergroupsresult)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Users_Get

<a id="opIdUsers_Get"></a>

> Code samples

```bash
curl 'https://example.com/string/users/string?api-version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{tenantID}/users/{upnOrObjectId}`

Gets user information from the directory.

<h3 id="usersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upnOrObjectId|path|string|true|The object ID or principal name of the user for which to get information.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> 200 Response

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "givenName": "string",
  "immutableId": "string",
  "mail": "string",
  "mailNickname": "string",
  "signInNames": [
    {
      "type": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "surname": "string",
  "usageLocation": "string",
  "userPrincipalName": "string",
  "userType": "Member"
}
```

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="usersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. The operation was successful.|[User](#schemauser)|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Users_Delete

<a id="opIdUsers_Delete"></a>

> Code samples

```bash
curl 'https://example.com/string/users/string?api-version=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{tenantID}/users/{upnOrObjectId}`

Delete a user.

<h3 id="usersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upnOrObjectId|path|string|true|The object ID or principal name of the user to delete.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="usersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

## Users_Update

<a id="opIdUsers_Update"></a>

> Code samples

```bash
curl 'https://example.com/string/users/string?api-version=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "givenName": "string",
    "immutableId": "string",
    "surname": "string",
    "usageLocation": "string",
    "userType": "Member",
    "property1": {},
    "property2": {},
    "accountEnabled": true,
    "displayName": "string",
    "mail": "string",
    "mailNickname": "string",
    "passwordProfile": {
      "forceChangePasswordNextLogin": true,
      "password": "string",
      "property1": {},
      "property2": {}
    },
    "userPrincipalName": "string"
  }'
```

`PATCH /{tenantID}/users/{upnOrObjectId}`

Updates a user.

> Body parameter

```json
{
  "givenName": "string",
  "immutableId": "string",
  "surname": "string",
  "usageLocation": "string",
  "userType": "Member",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "mail": "string",
  "mailNickname": "string",
  "passwordProfile": {
    "forceChangePasswordNextLogin": true,
    "password": "string",
    "property1": {},
    "property2": {}
  },
  "userPrincipalName": "string"
}
```

<h3 id="usersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upnOrObjectId|path|string|true|The object ID or principal name of the user to update.|
|api-version|query|string|true|Client API version.|
|tenantID|path|string|true|The tenant ID.|
|body|body|[UserUpdateParameters](#schemauserupdateparameters)|true|Parameters to update an existing user.|
|» givenName|body|string|false|The given name for the user.|
|» immutableId|body|string|false|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|» surname|body|string|false|The user's surname (family name or last name).|
|» usageLocation|body|string|false|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|» userType|body|string|false|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|
|» **additionalProperties**|body|object|false|none|
|» accountEnabled|body|boolean|false|Whether the account is enabled.|
|» displayName|body|string|false|The display name of the user.|
|» mail|body|string|false|The primary email address of the user.|
|» mailNickname|body|string|false|The mail alias for the user.|
|» passwordProfile|body|[PasswordProfile](#schemapasswordprofile)|false|The password profile associated with a user.|
|» userPrincipalName|body|string|false|The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» userType|Member|
|» userType|Guest|

> Example responses

> default Response

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

<h3 id="usersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content.|None|
|default|Default|Error response describing why the operation failed.|[GraphError](#schemagrapherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
azure_auth ( Scopes: user_impersonation )
</aside>

# Schemas

<h2 id="tocS_ADGroup">ADGroup</h2>
<!-- backwards compatibility -->
<a id="schemaadgroup"></a>
<a id="schema_ADGroup"></a>
<a id="tocSadgroup"></a>
<a id="tocsadgroup"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "displayName": "string",
  "mail": "string",
  "mailEnabled": true,
  "mailNickname": "string",
  "securityEnabled": true
}
```

Active Directory group information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|
|displayName|string|false|none|The display name of the group.|
|mail|string|false|none|The primary email address of the group.|
|mailEnabled|boolean|false|none|Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.|
|mailNickname|string|false|none|The mail alias for the group. |
|securityEnabled|boolean|false|none|Whether the group is security-enable.|

<h2 id="tocS_AddOwnerParameters">AddOwnerParameters</h2>
<!-- backwards compatibility -->
<a id="schemaaddownerparameters"></a>
<a id="schema_AddOwnerParameters"></a>
<a id="tocSaddownerparameters"></a>
<a id="tocsaddownerparameters"></a>

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

Request parameters for adding a owner to an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_AppRole">AppRole</h2>
<!-- backwards compatibility -->
<a id="schemaapprole"></a>
<a id="schema_AppRole"></a>
<a id="tocSapprole"></a>
<a id="tocsapprole"></a>

```json
{
  "allowedMemberTypes": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "id": "string",
  "isEnabled": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedMemberTypes|[string]|false|none|Specifies whether this app role definition can be assigned to users and groups by setting to 'User', or to other applications (that are accessing this application in daemon service scenarios) by setting to 'Application', or to both. |
|description|string|false|none|Permission help text that appears in the admin app assignment and consent experiences.|
|displayName|string|false|none|Display name for the permission that appears in the admin consent and app assignment experiences.|
|id|string|false|none|Unique role identifier inside the appRoles collection.|
|isEnabled|boolean|false|none|When creating or updating a role definition, this must be set to true (which is the default). To delete a role, this must first be set to false. At that point, in a subsequent call, this role may be removed.|
|value|string|false|none|Specifies the value of the roles claim that the application should expect in the authentication and access tokens.|

<h2 id="tocS_AppRoleAssignment">AppRoleAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaapproleassignment"></a>
<a id="schema_AppRoleAssignment"></a>
<a id="tocSapproleassignment"></a>
<a id="tocsapproleassignment"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "id": "string",
  "principalDisplayName": "string",
  "principalId": "string",
  "principalType": "string",
  "resourceDisplayName": "string",
  "resourceId": "string"
}
```

AppRoleAssignment information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|
|id|string|false|none|The role id that was assigned to the principal. This role must be declared by the target resource application resourceId in its appRoles property.|
|principalDisplayName|string|false|none|The display name of the principal that was granted the access.|
|principalId|string|false|none|The unique identifier (objectId) for the principal being granted the access.|
|principalType|string|false|none|The type of principal. This can either be "User", "Group" or "ServicePrincipal".|
|resourceDisplayName|string|false|none|The display name of the resource to which the assignment was made.|
|resourceId|string|false|none|The unique identifier (objectId) for the target resource (service principal) for which the assignment was made.|

<h2 id="tocS_AppRoleAssignmentListResult">AppRoleAssignmentListResult</h2>
<!-- backwards compatibility -->
<a id="schemaapproleassignmentlistresult"></a>
<a id="schema_AppRoleAssignmentListResult"></a>
<a id="tocSapproleassignmentlistresult"></a>
<a id="tocsapproleassignmentlistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "id": "string",
      "principalDisplayName": "string",
      "principalId": "string",
      "principalType": "string",
      "resourceDisplayName": "string",
      "resourceId": "string"
    }
  ]
}
```

AppRoleAssignment list operation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|The URL to get the next set of results.|
|value|[[AppRoleAssignment](#schemaapproleassignment)]|false|none|A collection of AppRoleAssignment.|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appId": "string",
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "displayName": "string",
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "identifierUris": [
    "string"
  ],
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string"
}
```

Active Directory application information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|
|allowGuestsSignIn|boolean|false|none|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|allowPassthroughUsers|boolean|false|none|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|appId|string|false|none|The application ID.|
|appLogoUrl|string|false|none|The url for the application logo image stored in a CDN.|
|appPermissions|[string]|false|none|The application permissions.|
|appRoles|[[AppRole](#schemaapprole)]|false|none|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|availableToOtherTenants|boolean|false|none|Whether the application is available to other tenants.|
|displayName|string|false|none|The display name of the application.|
|errorUrl|string|false|none|A URL provided by the author of the application to report errors when using the application.|
|groupMembershipClaims|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|none|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|homepage|string|false|none|The home page of the application.|
|identifierUris|[string]|false|none|A collection of URIs for the application.|
|informationalUrls|[InformationalUrl](#schemainformationalurl)|false|none|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|isDeviceOnlyAuthSupported|boolean|false|none|Specifies whether this application supports device authentication without a user. The default is false.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|A collection of KeyCredential objects.|
|knownClientApplications|[string]|false|none|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|logoutUrl|string|false|none|the url of the logout page|
|oauth2AllowImplicitFlow|boolean|false|none|Whether to allow implicit grant flow for OAuth2|
|oauth2AllowUrlPathMatching|boolean|false|none|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|oauth2Permissions|[[OAuth2Permission](#schemaoauth2permission)]|false|none|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|oauth2RequirePostResponse|boolean|false|none|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|optionalClaims|[OptionalClaims](#schemaoptionalclaims)|false|none|Specifying the claims to be included in the token.|
|orgRestrictions|[string]|false|none|A list of tenants allowed to access application.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|A collection of PasswordCredential objects|
|preAuthorizedApplications|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|none|list of pre-authorized applications.|
|publicClient|boolean|false|none|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|publisherDomain|string|false|none|Reliable domain which can be used to identify an application.|
|replyUrls|[string]|false|none|A collection of reply URLs for the application.|
|requiredResourceAccess|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|none|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|samlMetadataUrl|string|false|none|The URL to the SAML metadata for the application.|
|signInAudience|string|false|none|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|wwwHomepage|string|false|none|The primary Web page.|

#### Enumerated Values

|Property|Value|
|---|---|
|groupMembershipClaims|None|
|groupMembershipClaims|SecurityGroup|
|groupMembershipClaims|All|

<h2 id="tocS_ApplicationBase">ApplicationBase</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationbase"></a>
<a id="schema_ApplicationBase"></a>
<a id="tocSapplicationbase"></a>
<a id="tocsapplicationbase"></a>

```json
{
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string"
}
```

Active Directive Application common properties shared among GET, POST and PATCH

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGuestsSignIn|boolean|false|none|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|allowPassthroughUsers|boolean|false|none|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|appLogoUrl|string|false|none|The url for the application logo image stored in a CDN.|
|appPermissions|[string]|false|none|The application permissions.|
|appRoles|[[AppRole](#schemaapprole)]|false|none|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|availableToOtherTenants|boolean|false|none|Whether the application is available to other tenants.|
|errorUrl|string|false|none|A URL provided by the author of the application to report errors when using the application.|
|groupMembershipClaims|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|none|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|homepage|string|false|none|The home page of the application.|
|informationalUrls|[InformationalUrl](#schemainformationalurl)|false|none|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|isDeviceOnlyAuthSupported|boolean|false|none|Specifies whether this application supports device authentication without a user. The default is false.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|A collection of KeyCredential objects.|
|knownClientApplications|[string]|false|none|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|logoutUrl|string|false|none|the url of the logout page|
|oauth2AllowImplicitFlow|boolean|false|none|Whether to allow implicit grant flow for OAuth2|
|oauth2AllowUrlPathMatching|boolean|false|none|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|oauth2Permissions|[[OAuth2Permission](#schemaoauth2permission)]|false|none|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|oauth2RequirePostResponse|boolean|false|none|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|optionalClaims|[OptionalClaims](#schemaoptionalclaims)|false|none|Specifying the claims to be included in the token.|
|orgRestrictions|[string]|false|none|A list of tenants allowed to access application.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|A collection of PasswordCredential objects|
|preAuthorizedApplications|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|none|list of pre-authorized applications.|
|publicClient|boolean|false|none|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|publisherDomain|string|false|none|Reliable domain which can be used to identify an application.|
|replyUrls|[string]|false|none|A collection of reply URLs for the application.|
|requiredResourceAccess|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|none|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|samlMetadataUrl|string|false|none|The URL to the SAML metadata for the application.|
|signInAudience|string|false|none|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|wwwHomepage|string|false|none|The primary Web page.|

#### Enumerated Values

|Property|Value|
|---|---|
|groupMembershipClaims|None|
|groupMembershipClaims|SecurityGroup|
|groupMembershipClaims|All|

<h2 id="tocS_ApplicationCreateParameters">ApplicationCreateParameters</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcreateparameters"></a>
<a id="schema_ApplicationCreateParameters"></a>
<a id="tocSapplicationcreateparameters"></a>
<a id="tocsapplicationcreateparameters"></a>

```json
{
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string",
  "displayName": "string",
  "identifierUris": [
    "string"
  ]
}
```

Request parameters for creating a new application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGuestsSignIn|boolean|false|none|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|allowPassthroughUsers|boolean|false|none|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|appLogoUrl|string|false|none|The url for the application logo image stored in a CDN.|
|appPermissions|[string]|false|none|The application permissions.|
|appRoles|[[AppRole](#schemaapprole)]|false|none|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|availableToOtherTenants|boolean|false|none|Whether the application is available to other tenants.|
|errorUrl|string|false|none|A URL provided by the author of the application to report errors when using the application.|
|groupMembershipClaims|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|none|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|homepage|string|false|none|The home page of the application.|
|informationalUrls|[InformationalUrl](#schemainformationalurl)|false|none|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|isDeviceOnlyAuthSupported|boolean|false|none|Specifies whether this application supports device authentication without a user. The default is false.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|A collection of KeyCredential objects.|
|knownClientApplications|[string]|false|none|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|logoutUrl|string|false|none|the url of the logout page|
|oauth2AllowImplicitFlow|boolean|false|none|Whether to allow implicit grant flow for OAuth2|
|oauth2AllowUrlPathMatching|boolean|false|none|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|oauth2Permissions|[[OAuth2Permission](#schemaoauth2permission)]|false|none|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|oauth2RequirePostResponse|boolean|false|none|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|optionalClaims|[OptionalClaims](#schemaoptionalclaims)|false|none|Specifying the claims to be included in the token.|
|orgRestrictions|[string]|false|none|A list of tenants allowed to access application.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|A collection of PasswordCredential objects|
|preAuthorizedApplications|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|none|list of pre-authorized applications.|
|publicClient|boolean|false|none|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|publisherDomain|string|false|none|Reliable domain which can be used to identify an application.|
|replyUrls|[string]|false|none|A collection of reply URLs for the application.|
|requiredResourceAccess|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|none|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|samlMetadataUrl|string|false|none|The URL to the SAML metadata for the application.|
|signInAudience|string|false|none|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|wwwHomepage|string|false|none|The primary Web page.|
|displayName|string|true|none|The display name of the application.|
|identifierUris|[string]|false|none|A collection of URIs for the application.|

#### Enumerated Values

|Property|Value|
|---|---|
|groupMembershipClaims|None|
|groupMembershipClaims|SecurityGroup|
|groupMembershipClaims|All|

<h2 id="tocS_ApplicationListResult">ApplicationListResult</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationlistresult"></a>
<a id="schema_ApplicationListResult"></a>
<a id="tocSapplicationlistresult"></a>
<a id="tocsapplicationlistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "allowGuestsSignIn": true,
      "allowPassthroughUsers": true,
      "appId": "string",
      "appLogoUrl": "string",
      "appPermissions": [
        "string"
      ],
      "appRoles": [
        {
          "allowedMemberTypes": [
            "string"
          ],
          "description": "string",
          "displayName": "string",
          "id": "string",
          "isEnabled": true,
          "value": "string"
        }
      ],
      "availableToOtherTenants": true,
      "displayName": "string",
      "errorUrl": "string",
      "groupMembershipClaims": "None",
      "homepage": "string",
      "identifierUris": [
        "string"
      ],
      "informationalUrls": {
        "marketing": "string",
        "privacy": "string",
        "support": "string",
        "termsOfService": "string"
      },
      "isDeviceOnlyAuthSupported": true,
      "keyCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "type": "string",
          "usage": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "knownClientApplications": [
        "string"
      ],
      "logoutUrl": "string",
      "oauth2AllowImplicitFlow": true,
      "oauth2AllowUrlPathMatching": true,
      "oauth2Permissions": [
        {
          "adminConsentDescription": "string",
          "adminConsentDisplayName": "string",
          "id": "string",
          "isEnabled": true,
          "type": "string",
          "userConsentDescription": "string",
          "userConsentDisplayName": "string",
          "value": "string"
        }
      ],
      "oauth2RequirePostResponse": true,
      "optionalClaims": {
        "accessToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "idToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ],
        "samlToken": [
          {
            "additionalProperties": {},
            "essential": true,
            "name": "string",
            "source": "string"
          }
        ]
      },
      "orgRestrictions": [
        "string"
      ],
      "passwordCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "preAuthorizedApplications": [
        {
          "appId": "string",
          "extensions": [
            {
              "conditions": [
                "string"
              ]
            }
          ],
          "permissions": [
            {
              "accessGrants": [
                "string"
              ],
              "directAccessGrant": true
            }
          ]
        }
      ],
      "publicClient": true,
      "publisherDomain": "string",
      "replyUrls": [
        "string"
      ],
      "requiredResourceAccess": [
        {
          "resourceAccess": [
            {
              "id": "string",
              "type": "string",
              "property1": {},
              "property2": {}
            }
          ],
          "resourceAppId": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "samlMetadataUrl": "string",
      "signInAudience": "string",
      "wwwHomepage": "string"
    }
  ]
}
```

Application list operation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|The URL to get the next set of results.|
|value|[[Application](#schemaapplication)]|false|none|A collection of applications.|

<h2 id="tocS_ApplicationUpdateParameters">ApplicationUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationupdateparameters"></a>
<a id="schema_ApplicationUpdateParameters"></a>
<a id="tocSapplicationupdateparameters"></a>
<a id="tocsapplicationupdateparameters"></a>

```json
{
  "allowGuestsSignIn": true,
  "allowPassthroughUsers": true,
  "appLogoUrl": "string",
  "appPermissions": [
    "string"
  ],
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "availableToOtherTenants": true,
  "errorUrl": "string",
  "groupMembershipClaims": "None",
  "homepage": "string",
  "informationalUrls": {
    "marketing": "string",
    "privacy": "string",
    "support": "string",
    "termsOfService": "string"
  },
  "isDeviceOnlyAuthSupported": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "knownClientApplications": [
    "string"
  ],
  "logoutUrl": "string",
  "oauth2AllowImplicitFlow": true,
  "oauth2AllowUrlPathMatching": true,
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "oauth2RequirePostResponse": true,
  "optionalClaims": {
    "accessToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "idToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ],
    "samlToken": [
      {
        "additionalProperties": {},
        "essential": true,
        "name": "string",
        "source": "string"
      }
    ]
  },
  "orgRestrictions": [
    "string"
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preAuthorizedApplications": [
    {
      "appId": "string",
      "extensions": [
        {
          "conditions": [
            "string"
          ]
        }
      ],
      "permissions": [
        {
          "accessGrants": [
            "string"
          ],
          "directAccessGrant": true
        }
      ]
    }
  ],
  "publicClient": true,
  "publisherDomain": "string",
  "replyUrls": [
    "string"
  ],
  "requiredResourceAccess": [
    {
      "resourceAccess": [
        {
          "id": "string",
          "type": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "resourceAppId": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "samlMetadataUrl": "string",
  "signInAudience": "string",
  "wwwHomepage": "string",
  "displayName": "string",
  "identifierUris": [
    "string"
  ]
}
```

Request parameters for updating a new application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGuestsSignIn|boolean|false|none|A property on the application to indicate if the application accepts other IDPs or not or partially accepts.|
|allowPassthroughUsers|boolean|false|none|Indicates that the application supports pass through users who have no presence in the resource tenant.|
|appLogoUrl|string|false|none|The url for the application logo image stored in a CDN.|
|appPermissions|[string]|false|none|The application permissions.|
|appRoles|[[AppRole](#schemaapprole)]|false|none|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|availableToOtherTenants|boolean|false|none|Whether the application is available to other tenants.|
|errorUrl|string|false|none|A URL provided by the author of the application to report errors when using the application.|
|groupMembershipClaims|[GroupMembershipClaims](#schemagroupmembershipclaims)|false|none|Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.|
|homepage|string|false|none|The home page of the application.|
|informationalUrls|[InformationalUrl](#schemainformationalurl)|false|none|Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.|
|isDeviceOnlyAuthSupported|boolean|false|none|Specifies whether this application supports device authentication without a user. The default is false.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|A collection of KeyCredential objects.|
|knownClientApplications|[string]|false|none|Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).|
|logoutUrl|string|false|none|the url of the logout page|
|oauth2AllowImplicitFlow|boolean|false|none|Whether to allow implicit grant flow for OAuth2|
|oauth2AllowUrlPathMatching|boolean|false|none|Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.|
|oauth2Permissions|[[OAuth2Permission](#schemaoauth2permission)]|false|none|The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.|
|oauth2RequirePostResponse|boolean|false|none|Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.|
|optionalClaims|[OptionalClaims](#schemaoptionalclaims)|false|none|Specifying the claims to be included in the token.|
|orgRestrictions|[string]|false|none|A list of tenants allowed to access application.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|A collection of PasswordCredential objects|
|preAuthorizedApplications|[[PreAuthorizedApplication](#schemapreauthorizedapplication)]|false|none|list of pre-authorized applications.|
|publicClient|boolean|false|none|Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.|
|publisherDomain|string|false|none|Reliable domain which can be used to identify an application.|
|replyUrls|[string]|false|none|A collection of reply URLs for the application.|
|requiredResourceAccess|[[RequiredResourceAccess](#schemarequiredresourceaccess)]|false|none|Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.|
|samlMetadataUrl|string|false|none|The URL to the SAML metadata for the application.|
|signInAudience|string|false|none|Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).|
|wwwHomepage|string|false|none|The primary Web page.|
|displayName|string|false|none|The display name of the application.|
|identifierUris|[string]|false|none|A collection of URIs for the application.|

#### Enumerated Values

|Property|Value|
|---|---|
|groupMembershipClaims|None|
|groupMembershipClaims|SecurityGroup|
|groupMembershipClaims|All|

<h2 id="tocS_CheckGroupMembershipParameters">CheckGroupMembershipParameters</h2>
<!-- backwards compatibility -->
<a id="schemacheckgroupmembershipparameters"></a>
<a id="schema_CheckGroupMembershipParameters"></a>
<a id="tocScheckgroupmembershipparameters"></a>
<a id="tocscheckgroupmembershipparameters"></a>

```json
{
  "groupId": "string",
  "memberId": "string",
  "property1": {},
  "property2": {}
}
```

Request parameters for IsMemberOf API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|string|true|none|The object ID of the group to check.|
|memberId|string|true|none|The object ID of the contact, group, user, or service principal to check for membership in the specified group.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_CheckGroupMembershipResult">CheckGroupMembershipResult</h2>
<!-- backwards compatibility -->
<a id="schemacheckgroupmembershipresult"></a>
<a id="schema_CheckGroupMembershipResult"></a>
<a id="tocScheckgroupmembershipresult"></a>
<a id="tocscheckgroupmembershipresult"></a>

```json
{
  "value": true,
  "property1": {},
  "property2": {}
}
```

Server response for IsMemberOf API call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|boolean|false|none|True if the specified user, group, contact, or service principal has either direct or transitive membership in the specified group; otherwise, false.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_DirectoryObject">DirectoryObject</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryobject"></a>
<a id="schema_DirectoryObject"></a>
<a id="tocSdirectoryobject"></a>
<a id="tocsdirectoryobject"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {}
}
```

Represents an Azure Active Directory object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_DirectoryObjectListResult">DirectoryObjectListResult</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryobjectlistresult"></a>
<a id="schema_DirectoryObjectListResult"></a>
<a id="tocSdirectoryobjectlistresult"></a>
<a id="tocsdirectoryobjectlistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

DirectoryObject list operation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|The URL to get the next set of results.|
|value|[[DirectoryObject](#schemadirectoryobject)]|false|none|A collection of DirectoryObject.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "authenticationType": "string",
  "isDefault": true,
  "isVerified": true,
  "name": "string",
  "property1": {},
  "property2": {}
}
```

Active Directory Domain information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|string|false|read-only|the type of the authentication into the domain.|
|isDefault|boolean|false|read-only|if this is the default domain in the tenant.|
|isVerified|boolean|false|read-only|if this domain's ownership is verified.|
|name|string|true|none|the domain name.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_DomainListResult">DomainListResult</h2>
<!-- backwards compatibility -->
<a id="schemadomainlistresult"></a>
<a id="schema_DomainListResult"></a>
<a id="tocSdomainlistresult"></a>
<a id="tocsdomainlistresult"></a>

```json
{
  "value": [
    {
      "authenticationType": "string",
      "isDefault": true,
      "isVerified": true,
      "name": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

Server response for Get tenant domains API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[Domain](#schemadomain)]|false|none|the list of domains.|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "value": "string"
}
```

Active Directory error message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Error message value.|

<h2 id="tocS_GetObjectsParameters">GetObjectsParameters</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectsparameters"></a>
<a id="schema_GetObjectsParameters"></a>
<a id="tocSgetobjectsparameters"></a>
<a id="tocsgetobjectsparameters"></a>

```json
{
  "includeDirectoryObjectReferences": true,
  "objectIds": [
    "string"
  ],
  "types": [
    "string"
  ],
  "property1": {},
  "property2": {}
}
```

Request parameters for the GetObjectsByObjectIds API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeDirectoryObjectReferences|boolean|false|none|If true, also searches for object IDs in the partner tenant.|
|objectIds|[string]|false|none|The requested object IDs.|
|types|[string]|false|none|The requested object types.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_GraphError">GraphError</h2>
<!-- backwards compatibility -->
<a id="schemagrapherror"></a>
<a id="schema_GraphError"></a>
<a id="tocSgrapherror"></a>
<a id="tocsgrapherror"></a>

```json
{
  "odata.error": {
    "code": "string",
    "message": {
      "value": "string"
    }
  }
}
```

Active Directory error information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.error|[OdataError](#schemaodataerror)|false|none|Active Directory OData error information.|

<h2 id="tocS_GroupAddMemberParameters">GroupAddMemberParameters</h2>
<!-- backwards compatibility -->
<a id="schemagroupaddmemberparameters"></a>
<a id="schema_GroupAddMemberParameters"></a>
<a id="tocSgroupaddmemberparameters"></a>
<a id="tocsgroupaddmemberparameters"></a>

```json
{
  "url": "string",
  "property1": {},
  "property2": {}
}
```

Request parameters for adding a member to a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|A member object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user, application, servicePrincipal, group) to be added.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_GroupCreateParameters">GroupCreateParameters</h2>
<!-- backwards compatibility -->
<a id="schemagroupcreateparameters"></a>
<a id="schema_GroupCreateParameters"></a>
<a id="tocSgroupcreateparameters"></a>
<a id="tocsgroupcreateparameters"></a>

```json
{
  "displayName": "string",
  "mailEnabled": false,
  "mailNickname": "string",
  "securityEnabled": true,
  "property1": {},
  "property2": {}
}
```

Request parameters for creating a new group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|Group display name|
|mailEnabled|boolean|true|none|Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.|
|mailNickname|string|true|none|Mail nickname|
|securityEnabled|boolean|true|none|Whether the group is a security group. Must be true. This is because only pure security groups can be created using the Graph API.|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mailEnabled|false|
|securityEnabled|true|

<h2 id="tocS_GroupGetMemberGroupsParameters">GroupGetMemberGroupsParameters</h2>
<!-- backwards compatibility -->
<a id="schemagroupgetmembergroupsparameters"></a>
<a id="schema_GroupGetMemberGroupsParameters"></a>
<a id="tocSgroupgetmembergroupsparameters"></a>
<a id="tocsgroupgetmembergroupsparameters"></a>

```json
{
  "securityEnabledOnly": true,
  "property1": {},
  "property2": {}
}
```

Request parameters for GetMemberGroups API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityEnabledOnly|boolean|true|none|If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_GroupGetMemberGroupsResult">GroupGetMemberGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupgetmembergroupsresult"></a>
<a id="schema_GroupGetMemberGroupsResult"></a>
<a id="tocSgroupgetmembergroupsresult"></a>
<a id="tocsgroupgetmembergroupsresult"></a>

```json
{
  "value": [
    "string"
  ]
}
```

Server response for GetMemberGroups API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[string]|false|none|A collection of group IDs of which the group is a member.|

<h2 id="tocS_GroupListResult">GroupListResult</h2>
<!-- backwards compatibility -->
<a id="schemagrouplistresult"></a>
<a id="schema_GroupListResult"></a>
<a id="tocSgrouplistresult"></a>
<a id="tocsgrouplistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "displayName": "string",
      "mail": "string",
      "mailEnabled": true,
      "mailNickname": "string",
      "securityEnabled": true
    }
  ]
}
```

Server response for Get tenant groups API call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|The URL to get the next set of results.|
|value|[[ADGroup](#schemaadgroup)]|false|none|A collection of Active Directory groups.|

<h2 id="tocS_GroupMembershipClaims">GroupMembershipClaims</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembershipclaims"></a>
<a id="schema_GroupMembershipClaims"></a>
<a id="tocSgroupmembershipclaims"></a>
<a id="tocsgroupmembershipclaims"></a>

```json
"None"
```

Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.

<h2 id="tocS_InformationalUrl">InformationalUrl</h2>
<!-- backwards compatibility -->
<a id="schemainformationalurl"></a>
<a id="schema_InformationalUrl"></a>
<a id="tocSinformationalurl"></a>
<a id="tocsinformationalurl"></a>

```json
{
  "marketing": "string",
  "privacy": "string",
  "support": "string",
  "termsOfService": "string"
}
```

Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketing|string|false|none|The marketing URI|
|privacy|string|false|none|The privacy policy URI|
|support|string|false|none|The support URI|
|termsOfService|string|false|none|The terms of service URI|

<h2 id="tocS_KeyCredential">KeyCredential</h2>
<!-- backwards compatibility -->
<a id="schemakeycredential"></a>
<a id="schema_KeyCredential"></a>
<a id="tocSkeycredential"></a>
<a id="tocskeycredential"></a>

```json
{
  "customKeyIdentifier": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "keyId": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "type": "string",
  "usage": "string",
  "value": "string",
  "property1": {},
  "property2": {}
}
```

Active Directory Key Credential information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customKeyIdentifier|string|false|none|Custom Key Identifier|
|endDate|string(date-time)|false|none|End date.|
|keyId|string|false|none|Key ID.|
|startDate|string(date-time)|false|none|Start date.|
|type|string|false|none|Type. Acceptable values are 'AsymmetricX509Cert' and 'Symmetric'.|
|usage|string|false|none|Usage. Acceptable values are 'Verify' and 'Sign'.|
|value|string|false|none|Key value.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_KeyCredentialListResult">KeyCredentialListResult</h2>
<!-- backwards compatibility -->
<a id="schemakeycredentiallistresult"></a>
<a id="schema_KeyCredentialListResult"></a>
<a id="tocSkeycredentiallistresult"></a>
<a id="tocskeycredentiallistresult"></a>

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

KeyCredential list operation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[KeyCredential](#schemakeycredential)]|false|none|A collection of KeyCredentials.|

<h2 id="tocS_KeyCredentialsUpdateParameters">KeyCredentialsUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemakeycredentialsupdateparameters"></a>
<a id="schema_KeyCredentialsUpdateParameters"></a>
<a id="tocSkeycredentialsupdateparameters"></a>
<a id="tocskeycredentialsupdateparameters"></a>

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

Request parameters for a KeyCredentials update operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[KeyCredential](#schemakeycredential)]|true|none|A collection of KeyCredentials.|

<h2 id="tocS_OAuth2Permission">OAuth2Permission</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2permission"></a>
<a id="schema_OAuth2Permission"></a>
<a id="tocSoauth2permission"></a>
<a id="tocsoauth2permission"></a>

```json
{
  "adminConsentDescription": "string",
  "adminConsentDisplayName": "string",
  "id": "string",
  "isEnabled": true,
  "type": "string",
  "userConsentDescription": "string",
  "userConsentDisplayName": "string",
  "value": "string"
}
```

Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminConsentDescription|string|false|none|Permission help text that appears in the admin consent and app assignment experiences.|
|adminConsentDisplayName|string|false|none|Display name for the permission that appears in the admin consent and app assignment experiences.|
|id|string|false|none|Unique scope permission identifier inside the oauth2Permissions collection.|
|isEnabled|boolean|false|none|When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false. At that point, in a subsequent call, the permission may be removed. |
|type|string|false|none|Specifies whether this scope permission can be consented to by an end user, or whether it is a tenant-wide permission that must be consented to by a Company Administrator. Possible values are "User" or "Admin".|
|userConsentDescription|string|false|none|Permission help text that appears in the end user consent experience.|
|userConsentDisplayName|string|false|none|Display name for the permission that appears in the end user consent experience.|
|value|string|false|none|The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.|

<h2 id="tocS_OAuth2PermissionGrant">OAuth2PermissionGrant</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2permissiongrant"></a>
<a id="schema_OAuth2PermissionGrant"></a>
<a id="tocSoauth2permissiongrant"></a>
<a id="tocsoauth2permissiongrant"></a>

```json
{
  "clientId": "clientId",
  "consentType": "consentType",
  "expiryTime": "expiryTime",
  "odata.type": "odata.type",
  "principalId": "",
  "resourceId": "resourceId",
  "scope": "scope",
  "startTime": "startTime"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).|
|consentType|string|false|none|Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.|
|expiryTime|string|false|none|Expiry time for TTL|
|objectId|string|false|none|The id of the permission grant|
|odata.type|string|false|none|Microsoft.DirectoryServices.OAuth2PermissionGrant|
|principalId|string|false|none|When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.|
|resourceId|string|false|none|Object Id of the resource you want to grant|
|scope|string|false|none|Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read|
|startTime|string|false|none|Start time for TTL|

#### Enumerated Values

|Property|Value|
|---|---|
|consentType|AllPrincipals|
|consentType|Principal|

<h2 id="tocS_OAuth2PermissionGrantListResult">OAuth2PermissionGrantListResult</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2permissiongrantlistresult"></a>
<a id="schema_OAuth2PermissionGrantListResult"></a>
<a id="tocSoauth2permissiongrantlistresult"></a>
<a id="tocsoauth2permissiongrantlistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "clientId": "clientId",
      "consentType": "consentType",
      "expiryTime": "expiryTime",
      "odata.type": "odata.type",
      "principalId": "",
      "resourceId": "resourceId",
      "scope": "scope",
      "startTime": "startTime"
    }
  ]
}
```

Server response for get oauth2 permissions grants

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|the URL to get the next set of results.|
|value|[[OAuth2PermissionGrant](#schemaoauth2permissiongrant)]|false|none|the list of oauth2 permissions grants|

<h2 id="tocS_OdataError">OdataError</h2>
<!-- backwards compatibility -->
<a id="schemaodataerror"></a>
<a id="schema_OdataError"></a>
<a id="tocSodataerror"></a>
<a id="tocsodataerror"></a>

```json
{
  "code": "string",
  "message": {
    "value": "string"
  }
}
```

Active Directory OData error information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Error code.|
|message|[ErrorMessage](#schemaerrormessage)|false|none|Active Directory error message.|

<h2 id="tocS_OptionalClaim">OptionalClaim</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalclaim"></a>
<a id="schema_OptionalClaim"></a>
<a id="tocSoptionalclaim"></a>
<a id="tocsoptionalclaim"></a>

```json
{
  "additionalProperties": {},
  "essential": true,
  "name": "string",
  "source": "string"
}
```

Specifying the claims to be included in a token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|object|false|none|none|
|essential|boolean|false|none|Is this a required claim.|
|name|string|false|none|Claim name.|
|source|string|false|none|Claim source.|

<h2 id="tocS_OptionalClaims">OptionalClaims</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalclaims"></a>
<a id="schema_OptionalClaims"></a>
<a id="tocSoptionalclaims"></a>
<a id="tocsoptionalclaims"></a>

```json
{
  "accessToken": [
    {
      "additionalProperties": {},
      "essential": true,
      "name": "string",
      "source": "string"
    }
  ],
  "idToken": [
    {
      "additionalProperties": {},
      "essential": true,
      "name": "string",
      "source": "string"
    }
  ],
  "samlToken": [
    {
      "additionalProperties": {},
      "essential": true,
      "name": "string",
      "source": "string"
    }
  ]
}
```

Specifying the claims to be included in the token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|[[OptionalClaim](#schemaoptionalclaim)]|false|none|Optional claims requested to be included in the access token.|
|idToken|[[OptionalClaim](#schemaoptionalclaim)]|false|none|Optional claims requested to be included in the id token.|
|samlToken|[[OptionalClaim](#schemaoptionalclaim)]|false|none|Optional claims requested to be included in the saml token.|

<h2 id="tocS_PasswordCredential">PasswordCredential</h2>
<!-- backwards compatibility -->
<a id="schemapasswordcredential"></a>
<a id="schema_PasswordCredential"></a>
<a id="tocSpasswordcredential"></a>
<a id="tocspasswordcredential"></a>

```json
{
  "customKeyIdentifier": "string",
  "endDate": "1970-01-01T00:00:00Z",
  "keyId": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "value": "string",
  "property1": {},
  "property2": {}
}
```

Active Directory Password Credential information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customKeyIdentifier|string(byte)|false|none|Custom Key Identifier|
|endDate|string(date-time)|false|none|End date.|
|keyId|string|false|none|Key ID.|
|startDate|string(date-time)|false|none|Start date.|
|value|string|false|none|Key value.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_PasswordCredentialListResult">PasswordCredentialListResult</h2>
<!-- backwards compatibility -->
<a id="schemapasswordcredentiallistresult"></a>
<a id="schema_PasswordCredentialListResult"></a>
<a id="tocSpasswordcredentiallistresult"></a>
<a id="tocspasswordcredentiallistresult"></a>

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

PasswordCredential list operation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[PasswordCredential](#schemapasswordcredential)]|false|none|A collection of PasswordCredentials.|

<h2 id="tocS_PasswordCredentialsUpdateParameters">PasswordCredentialsUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemapasswordcredentialsupdateparameters"></a>
<a id="schema_PasswordCredentialsUpdateParameters"></a>
<a id="tocSpasswordcredentialsupdateparameters"></a>
<a id="tocspasswordcredentialsupdateparameters"></a>

```json
{
  "value": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ]
}
```

Request parameters for a PasswordCredentials update operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[PasswordCredential](#schemapasswordcredential)]|true|none|A collection of PasswordCredentials.|

<h2 id="tocS_PasswordProfile">PasswordProfile</h2>
<!-- backwards compatibility -->
<a id="schemapasswordprofile"></a>
<a id="schema_PasswordProfile"></a>
<a id="tocSpasswordprofile"></a>
<a id="tocspasswordprofile"></a>

```json
{
  "forceChangePasswordNextLogin": true,
  "password": "string",
  "property1": {},
  "property2": {}
}
```

The password profile associated with a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forceChangePasswordNextLogin|boolean|false|none|Whether to force a password change on next login.|
|password|string|true|none|Password|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_PreAuthorizedApplication">PreAuthorizedApplication</h2>
<!-- backwards compatibility -->
<a id="schemapreauthorizedapplication"></a>
<a id="schema_PreAuthorizedApplication"></a>
<a id="tocSpreauthorizedapplication"></a>
<a id="tocspreauthorizedapplication"></a>

```json
{
  "appId": "string",
  "extensions": [
    {
      "conditions": [
        "string"
      ]
    }
  ],
  "permissions": [
    {
      "accessGrants": [
        "string"
      ],
      "directAccessGrant": true
    }
  ]
}
```

Contains information about pre authorized client application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|Represents the application id.|
|extensions|[[PreAuthorizedApplicationExtension](#schemapreauthorizedapplicationextension)]|false|none|Collection of extensions from the resource application.|
|permissions|[[PreAuthorizedApplicationPermission](#schemapreauthorizedapplicationpermission)]|false|none|Collection of required app permissions/entitlements from the resource application.|

<h2 id="tocS_PreAuthorizedApplicationExtension">PreAuthorizedApplicationExtension</h2>
<!-- backwards compatibility -->
<a id="schemapreauthorizedapplicationextension"></a>
<a id="schema_PreAuthorizedApplicationExtension"></a>
<a id="tocSpreauthorizedapplicationextension"></a>
<a id="tocspreauthorizedapplicationextension"></a>

```json
{
  "conditions": [
    "string"
  ]
}
```

Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[string]|false|none|The extension's conditions.|

<h2 id="tocS_PreAuthorizedApplicationPermission">PreAuthorizedApplicationPermission</h2>
<!-- backwards compatibility -->
<a id="schemapreauthorizedapplicationpermission"></a>
<a id="schema_PreAuthorizedApplicationPermission"></a>
<a id="tocSpreauthorizedapplicationpermission"></a>
<a id="tocspreauthorizedapplicationpermission"></a>

```json
{
  "accessGrants": [
    "string"
  ],
  "directAccessGrant": true
}
```

Contains information about the pre-authorized permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessGrants|[string]|false|none|The list of permissions.|
|directAccessGrant|boolean|false|none|Indicates whether the permission set is DirectAccess or impersonation.|

<h2 id="tocS_RequiredResourceAccess">RequiredResourceAccess</h2>
<!-- backwards compatibility -->
<a id="schemarequiredresourceaccess"></a>
<a id="schema_RequiredResourceAccess"></a>
<a id="tocSrequiredresourceaccess"></a>
<a id="tocsrequiredresourceaccess"></a>

```json
{
  "resourceAccess": [
    {
      "id": "string",
      "type": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "resourceAppId": "string",
  "property1": {},
  "property2": {}
}
```

Specifies the set of OAuth 2.0 permission scopes and app roles under the specified resource that an application requires access to. The specified OAuth 2.0 permission scopes may be requested by client applications (through the requiredResourceAccess collection) when calling a resource application. The requiredResourceAccess property of the Application entity is a collection of RequiredResourceAccess.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceAccess|[[ResourceAccess](#schemaresourceaccess)]|true|none|The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.|
|resourceAppId|string|false|none|The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_ResourceAccess">ResourceAccess</h2>
<!-- backwards compatibility -->
<a id="schemaresourceaccess"></a>
<a id="schema_ResourceAccess"></a>
<a id="tocSresourceaccess"></a>
<a id="tocsresourceaccess"></a>

```json
{
  "id": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

Specifies an OAuth 2.0 permission scope or an app role that an application requires. The resourceAccess property of the RequiredResourceAccess type is a collection of ResourceAccess.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes.|
|type|string|false|none|Specifies whether the id property references an OAuth2Permission or an AppRole. Possible values are "scope" or "role".|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_ServicePrincipal">ServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipal"></a>
<a id="schema_ServicePrincipal"></a>
<a id="tocSserviceprincipal"></a>
<a id="tocsserviceprincipal"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "alternativeNames": [
    "string"
  ],
  "appDisplayName": "string",
  "appId": "string",
  "appOwnerTenantId": "string",
  "appRoleAssignmentRequired": true,
  "appRoles": [
    {
      "allowedMemberTypes": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "isEnabled": true,
      "value": "string"
    }
  ],
  "displayName": "string",
  "errorUrl": "string",
  "homepage": "string",
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "logoutUrl": "string",
  "oauth2Permissions": [
    {
      "adminConsentDescription": "string",
      "adminConsentDisplayName": "string",
      "id": "string",
      "isEnabled": true,
      "type": "string",
      "userConsentDescription": "string",
      "userConsentDisplayName": "string",
      "value": "string"
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "preferredTokenSigningKeyThumbprint": "string",
  "publisherName": "string",
  "replyUrls": [
    "string"
  ],
  "samlMetadataUrl": "string",
  "servicePrincipalNames": [
    "string"
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

Active Directory service principal information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|
|accountEnabled|boolean|false|none|whether or not the service principal account is enabled|
|alternativeNames|[string]|false|none|alternative names|
|appDisplayName|string|false|read-only|The display name exposed by the associated application.|
|appId|string|false|none|The application ID.|
|appOwnerTenantId|string|false|read-only|none|
|appRoleAssignmentRequired|boolean|false|none|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|appRoles|[[AppRole](#schemaapprole)]|false|none|The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.|
|displayName|string|false|none|The display name of the service principal.|
|errorUrl|string|false|none|A URL provided by the author of the associated application to report errors when using the application.|
|homepage|string|false|none|The URL to the homepage of the associated application.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|The collection of key credentials associated with the service principal.|
|logoutUrl|string|false|none|A URL provided by the author of the associated application to logout|
|oauth2Permissions|[[OAuth2Permission](#schemaoauth2permission)]|false|read-only|The OAuth 2.0 permissions exposed by the associated application.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|The collection of password credentials associated with the service principal.|
|preferredTokenSigningKeyThumbprint|string|false|none|The thumbprint of preferred certificate to sign the token|
|publisherName|string|false|none|The publisher's name of the associated application|
|replyUrls|[string]|false|none|The URLs that user tokens are sent to for sign in with the associated application.  The redirect URIs that the oAuth 2.0 authorization code and access tokens are sent to for the associated application.|
|samlMetadataUrl|string|false|none|The URL to the SAML metadata of the associated application|
|servicePrincipalNames|[string]|false|none|A collection of service principal names.|
|servicePrincipalType|string|false|none|the type of the service principal|
|tags|[string]|false|none|Optional list of tags that you can apply to your service principals. Not nullable.|

<h2 id="tocS_ServicePrincipalBase">ServicePrincipalBase</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipalbase"></a>
<a id="schema_ServicePrincipalBase"></a>
<a id="tocSserviceprincipalbase"></a>
<a id="tocsserviceprincipalbase"></a>

```json
{
  "accountEnabled": true,
  "appRoleAssignmentRequired": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

Active Directory service principal common properties shared among GET, POST and PATCH

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEnabled|boolean|false|none|whether or not the service principal account is enabled|
|appRoleAssignmentRequired|boolean|false|none|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|The collection of key credentials associated with the service principal.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|The collection of password credentials associated with the service principal.|
|servicePrincipalType|string|false|none|the type of the service principal|
|tags|[string]|false|none|Optional list of tags that you can apply to your service principals. Not nullable.|

<h2 id="tocS_ServicePrincipalCreateParameters">ServicePrincipalCreateParameters</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipalcreateparameters"></a>
<a id="schema_ServicePrincipalCreateParameters"></a>
<a id="tocSserviceprincipalcreateparameters"></a>
<a id="tocsserviceprincipalcreateparameters"></a>

```json
{
  "accountEnabled": true,
  "appRoleAssignmentRequired": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ],
  "appId": "string"
}
```

Request parameters for creating a new service principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEnabled|boolean|false|none|whether or not the service principal account is enabled|
|appRoleAssignmentRequired|boolean|false|none|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|The collection of key credentials associated with the service principal.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|The collection of password credentials associated with the service principal.|
|servicePrincipalType|string|false|none|the type of the service principal|
|tags|[string]|false|none|Optional list of tags that you can apply to your service principals. Not nullable.|
|appId|string|true|none|The application ID.|

<h2 id="tocS_ServicePrincipalListResult">ServicePrincipalListResult</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipallistresult"></a>
<a id="schema_ServicePrincipalListResult"></a>
<a id="tocSserviceprincipallistresult"></a>
<a id="tocsserviceprincipallistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "accountEnabled": true,
      "alternativeNames": [
        "string"
      ],
      "appDisplayName": "string",
      "appId": "string",
      "appOwnerTenantId": "string",
      "appRoleAssignmentRequired": true,
      "appRoles": [
        {
          "allowedMemberTypes": [
            "string"
          ],
          "description": "string",
          "displayName": "string",
          "id": "string",
          "isEnabled": true,
          "value": "string"
        }
      ],
      "displayName": "string",
      "errorUrl": "string",
      "homepage": "string",
      "keyCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "type": "string",
          "usage": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "logoutUrl": "string",
      "oauth2Permissions": [
        {
          "adminConsentDescription": "string",
          "adminConsentDisplayName": "string",
          "id": "string",
          "isEnabled": true,
          "type": "string",
          "userConsentDescription": "string",
          "userConsentDisplayName": "string",
          "value": "string"
        }
      ],
      "passwordCredentials": [
        {
          "customKeyIdentifier": "string",
          "endDate": "1970-01-01T00:00:00Z",
          "keyId": "string",
          "startDate": "1970-01-01T00:00:00Z",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "preferredTokenSigningKeyThumbprint": "string",
      "publisherName": "string",
      "replyUrls": [
        "string"
      ],
      "samlMetadataUrl": "string",
      "servicePrincipalNames": [
        "string"
      ],
      "servicePrincipalType": "string",
      "tags": [
        "string"
      ]
    }
  ]
}
```

Server response for get tenant service principals API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|the URL to get the next set of results.|
|value|[[ServicePrincipal](#schemaserviceprincipal)]|false|none|the list of service principals.|

<h2 id="tocS_ServicePrincipalObjectResult">ServicePrincipalObjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipalobjectresult"></a>
<a id="schema_ServicePrincipalObjectResult"></a>
<a id="tocSserviceprincipalobjectresult"></a>
<a id="tocsserviceprincipalobjectresult"></a>

```json
{
  "odata.metadata": "string",
  "value": "string"
}
```

Service Principal Object Result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.metadata|string|false|none|The URL representing edm equivalent.|
|value|string|false|none|The Object ID of the service principal with the specified application ID.|

<h2 id="tocS_ServicePrincipalUpdateParameters">ServicePrincipalUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipalupdateparameters"></a>
<a id="schema_ServicePrincipalUpdateParameters"></a>
<a id="tocSserviceprincipalupdateparameters"></a>
<a id="tocsserviceprincipalupdateparameters"></a>

```json
{
  "accountEnabled": true,
  "appRoleAssignmentRequired": true,
  "keyCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "type": "string",
      "usage": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "passwordCredentials": [
    {
      "customKeyIdentifier": "string",
      "endDate": "1970-01-01T00:00:00Z",
      "keyId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "servicePrincipalType": "string",
  "tags": [
    "string"
  ]
}
```

Request parameters for update an existing service principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEnabled|boolean|false|none|whether or not the service principal account is enabled|
|appRoleAssignmentRequired|boolean|false|none|Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.|
|keyCredentials|[[KeyCredential](#schemakeycredential)]|false|none|The collection of key credentials associated with the service principal.|
|passwordCredentials|[[PasswordCredential](#schemapasswordcredential)]|false|none|The collection of password credentials associated with the service principal.|
|servicePrincipalType|string|false|none|the type of the service principal|
|tags|[string]|false|none|Optional list of tags that you can apply to your service principals. Not nullable.|

<h2 id="tocS_SignInName">SignInName</h2>
<!-- backwards compatibility -->
<a id="schemasigninname"></a>
<a id="schema_SignInName"></a>
<a id="tocSsigninname"></a>
<a id="tocssigninname"></a>

```json
{
  "type": "string",
  "value": "string",
  "property1": {},
  "property2": {}
}
```

Contains information about a sign-in name of a local account user in an Azure Active Directory B2C tenant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A string value that can be used to classify user sign-in types in your directory, such as 'emailAddress' or 'userName'.|
|value|string|false|none|The sign-in used by the local account. Must be unique across the company/tenant. For example, 'johnc@example.com'.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "deletionTimestamp": "1970-01-01T00:00:00Z",
  "objectId": "string",
  "objectType": "string",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "givenName": "string",
  "immutableId": "string",
  "mail": "string",
  "mailNickname": "string",
  "signInNames": [
    {
      "type": "string",
      "value": "string",
      "property1": {},
      "property2": {}
    }
  ],
  "surname": "string",
  "usageLocation": "string",
  "userPrincipalName": "string",
  "userType": "Member"
}
```

Active Directory user information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionTimestamp|string(date-time) \| null|false|read-only|The time at which the directory object was deleted.|
|objectId|string|false|read-only|The object ID.|
|objectType|string|true|none|The object type.|
|**additionalProperties**|object|false|none|none|
|accountEnabled|boolean|false|none|Whether the account is enabled.|
|displayName|string|false|none|The display name of the user.|
|givenName|string|false|none|The given name for the user.|
|immutableId|string|false|none|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|mail|string|false|none|The primary email address of the user.|
|mailNickname|string|false|none|The mail alias for the user.|
|signInNames|[[SignInName](#schemasigninname)]|false|none|The sign-in names of the user.|
|surname|string|false|none|The user's surname (family name or last name).|
|usageLocation|string|false|none|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|userPrincipalName|string|false|none|The principal name of the user.|
|userType|string|false|none|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|Member|
|userType|Guest|

<h2 id="tocS_UserBase">UserBase</h2>
<!-- backwards compatibility -->
<a id="schemauserbase"></a>
<a id="schema_UserBase"></a>
<a id="tocSuserbase"></a>
<a id="tocsuserbase"></a>

```json
{
  "givenName": "string",
  "immutableId": "string",
  "surname": "string",
  "usageLocation": "string",
  "userType": "Member",
  "property1": {},
  "property2": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|givenName|string|false|none|The given name for the user.|
|immutableId|string|false|none|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|surname|string|false|none|The user's surname (family name or last name).|
|usageLocation|string|false|none|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|userType|string|false|none|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|Member|
|userType|Guest|

<h2 id="tocS_UserCreateParameters">UserCreateParameters</h2>
<!-- backwards compatibility -->
<a id="schemausercreateparameters"></a>
<a id="schema_UserCreateParameters"></a>
<a id="tocSusercreateparameters"></a>
<a id="tocsusercreateparameters"></a>

```json
{
  "givenName": "string",
  "immutableId": "string",
  "surname": "string",
  "usageLocation": "string",
  "userType": "Member",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "mail": "string",
  "mailNickname": "string",
  "passwordProfile": {
    "forceChangePasswordNextLogin": true,
    "password": "string",
    "property1": {},
    "property2": {}
  },
  "userPrincipalName": "string"
}
```

Request parameters for creating a new work or school account user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|givenName|string|false|none|The given name for the user.|
|immutableId|string|false|none|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|surname|string|false|none|The user's surname (family name or last name).|
|usageLocation|string|false|none|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|userType|string|false|none|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|
|**additionalProperties**|object|false|none|none|
|accountEnabled|boolean|true|none|Whether the account is enabled.|
|displayName|string|true|none|The display name of the user.|
|mail|string|false|none|The primary email address of the user.|
|mailNickname|string|true|none|The mail alias for the user.|
|passwordProfile|[PasswordProfile](#schemapasswordprofile)|true|none|The password profile associated with a user.|
|userPrincipalName|string|true|none|The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|Member|
|userType|Guest|

<h2 id="tocS_UserGetMemberGroupsParameters">UserGetMemberGroupsParameters</h2>
<!-- backwards compatibility -->
<a id="schemausergetmembergroupsparameters"></a>
<a id="schema_UserGetMemberGroupsParameters"></a>
<a id="tocSusergetmembergroupsparameters"></a>
<a id="tocsusergetmembergroupsparameters"></a>

```json
{
  "securityEnabledOnly": true,
  "property1": {},
  "property2": {}
}
```

Request parameters for GetMemberGroups API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityEnabledOnly|boolean|true|none|If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_UserGetMemberGroupsResult">UserGetMemberGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemausergetmembergroupsresult"></a>
<a id="schema_UserGetMemberGroupsResult"></a>
<a id="tocSusergetmembergroupsresult"></a>
<a id="tocsusergetmembergroupsresult"></a>

```json
{
  "value": [
    "string"
  ]
}
```

Server response for GetMemberGroups API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[string]|false|none|A collection of group IDs of which the user is a member.|

<h2 id="tocS_UserListResult">UserListResult</h2>
<!-- backwards compatibility -->
<a id="schemauserlistresult"></a>
<a id="schema_UserListResult"></a>
<a id="tocSuserlistresult"></a>
<a id="tocsuserlistresult"></a>

```json
{
  "odata.nextLink": "string",
  "value": [
    {
      "deletionTimestamp": "1970-01-01T00:00:00Z",
      "objectId": "string",
      "objectType": "string",
      "property1": {},
      "property2": {},
      "accountEnabled": true,
      "displayName": "string",
      "givenName": "string",
      "immutableId": "string",
      "mail": "string",
      "mailNickname": "string",
      "signInNames": [
        {
          "type": "string",
          "value": "string",
          "property1": {},
          "property2": {}
        }
      ],
      "surname": "string",
      "usageLocation": "string",
      "userPrincipalName": "string",
      "userType": "Member"
    }
  ]
}
```

Server response for Get tenant users API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|odata.nextLink|string|false|none|The URL to get the next set of results.|
|value|[[User](#schemauser)]|false|none|the list of users.|

<h2 id="tocS_UserUpdateParameters">UserUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemauserupdateparameters"></a>
<a id="schema_UserUpdateParameters"></a>
<a id="tocSuserupdateparameters"></a>
<a id="tocsuserupdateparameters"></a>

```json
{
  "givenName": "string",
  "immutableId": "string",
  "surname": "string",
  "usageLocation": "string",
  "userType": "Member",
  "property1": {},
  "property2": {},
  "accountEnabled": true,
  "displayName": "string",
  "mail": "string",
  "mailNickname": "string",
  "passwordProfile": {
    "forceChangePasswordNextLogin": true,
    "password": "string",
    "property1": {},
    "property2": {}
  },
  "userPrincipalName": "string"
}
```

Request parameters for updating an existing work or school account user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|givenName|string|false|none|The given name for the user.|
|immutableId|string|false|none|This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.|
|surname|string|false|none|The user's surname (family name or last name).|
|usageLocation|string|false|none|A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".|
|userType|string|false|none|A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.|
|**additionalProperties**|object|false|none|none|
|accountEnabled|boolean|false|none|Whether the account is enabled.|
|displayName|string|false|none|The display name of the user.|
|mail|string|false|none|The primary email address of the user.|
|mailNickname|string|false|none|The mail alias for the user.|
|passwordProfile|[PasswordProfile](#schemapasswordprofile)|false|none|The password profile associated with a user.|
|userPrincipalName|string|false|none|The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|Member|
|userType|Guest|
