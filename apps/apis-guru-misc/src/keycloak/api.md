<h1 id="keycloak-admin-rest-api">Keycloak Admin REST API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a REST API reference for the Keycloak Admin

Base URLs:

* <a href="http://keycloak.local">http://keycloak.local</a>

<a href="https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations">Schema source code</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="keycloak-admin-rest-api-root">Root</h1>

## Get themes, social providers, auth providers, and event listeners available on this server

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /`

> Example responses

> 2XX Response

```json
{
  "builtinProtocolMappers": {},
  "clientImporters": [
    {}
  ],
  "clientInstallations": {},
  "componentTypes": {},
  "enums": {},
  "identityProviders": [
    {}
  ],
  "memoryInfo": {
    "free": 0,
    "freeFormated": "string",
    "freePercentage": 0,
    "total": 0,
    "totalFormated": "string",
    "used": 0,
    "usedFormated": "string"
  },
  "passwordPolicies": [
    {
      "configType": "string",
      "defaultValue": "string",
      "displayName": "string",
      "id": "string",
      "multipleSupported": true
    }
  ],
  "profileInfo": {
    "disabledFeatures": [
      "string"
    ],
    "experimentalFeatures": [
      "string"
    ],
    "name": "string",
    "previewFeatures": [
      "string"
    ]
  },
  "protocolMapperTypes": {},
  "providers": {},
  "socialProviders": [
    {}
  ],
  "systemInfo": {
    "fileEncoding": "string",
    "javaHome": "string",
    "javaRuntime": "string",
    "javaVendor": "string",
    "javaVersion": "string",
    "javaVm": "string",
    "javaVmVersion": "string",
    "osArchitecture": "string",
    "osName": "string",
    "osVersion": "string",
    "serverTime": "string",
    "uptime": "string",
    "uptimeMillis": 0,
    "userDir": "string",
    "userLocale": "string",
    "userName": "string",
    "userTimezone": "string",
    "version": "string"
  },
  "themes": {}
}
```

<h3 id="get-themes-social-providers-auth-providers-and-event-listeners-available-on-this-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ServerInfoRepresentation](#schemaserverinforepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-realms-admin">Realms Admin</h1>

## Import a realm Imports a realm from a full representation of that realm.

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessCodeLifespan": 0,
    "accessCodeLifespanLogin": 0,
    "accessCodeLifespanUserAction": 0,
    "accessTokenLifespan": 0,
    "accessTokenLifespanForImplicitFlow": 0,
    "accountTheme": "string",
    "actionTokenGeneratedByAdminLifespan": 0,
    "actionTokenGeneratedByUserLifespan": 0,
    "adminEventsDetailsEnabled": true,
    "adminEventsEnabled": true,
    "adminTheme": "string",
    "attributes": {},
    "authenticationFlows": [
      {
        "alias": "string",
        "authenticationExecutions": [
          {
            "authenticator": "string",
            "authenticatorConfig": "string",
            "authenticatorFlow": true,
            "autheticatorFlow": true,
            "flowAlias": "string",
            "priority": 0,
            "requirement": "string",
            "userSetupAllowed": true
          }
        ],
        "builtIn": true,
        "description": "string",
        "id": "string",
        "providerId": "string",
        "topLevel": true
      }
    ],
    "authenticatorConfig": [
      {
        "alias": "string",
        "config": {},
        "id": "string"
      }
    ],
    "browserFlow": "string",
    "browserSecurityHeaders": {},
    "bruteForceProtected": true,
    "clientAuthenticationFlow": "string",
    "clientScopeMappings": {},
    "clientScopes": [
      {
        "attributes": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMappers": [
          {
            "config": {},
            "id": "string",
            "name": "string",
            "protocol": "string",
            "protocolMapper": "string"
          }
        ]
      }
    ],
    "clientSessionIdleTimeout": 0,
    "clientSessionMaxLifespan": 0,
    "clients": [
      {
        "access": {},
        "adminUrl": "string",
        "alwaysDisplayInConsole": true,
        "attributes": {},
        "authenticationFlowBindingOverrides": {},
        "authorizationServicesEnabled": true,
        "authorizationSettings": {
          "allowRemoteResourceManagement": true,
          "clientId": "string",
          "decisionStrategy": "AFFIRMATIVE",
          "id": "string",
          "name": "string",
          "policies": [
            {
              "config": {},
              "decisionStrategy": "AFFIRMATIVE",
              "description": "string",
              "id": "string",
              "logic": "POSITIVE",
              "name": "string",
              "owner": "string",
              "policies": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "resourcesData": [
                {}
              ],
              "scopes": [
                "string"
              ],
              "scopesData": [
                {}
              ],
              "type": "string"
            }
          ],
          "policyEnforcementMode": "ENFORCING",
          "resources": [
            {
              "attributes": {},
              "displayName": "string",
              "icon_uri": "string",
              "id": "string",
              "name": "string",
              "ownerManagedAccess": true,
              "scopes": [
                {}
              ],
              "type": "string",
              "uris": [
                "string"
              ]
            }
          ],
          "scopes": [
            {
              "displayName": "string",
              "iconUri": "string",
              "id": "string",
              "name": "string",
              "policies": [
                {}
              ],
              "resources": [
                {}
              ]
            }
          ]
        },
        "baseUrl": "string",
        "bearerOnly": true,
        "clientAuthenticatorType": "string",
        "clientId": "string",
        "consentRequired": true,
        "defaultClientScopes": [
          "string"
        ],
        "defaultRoles": [
          "string"
        ],
        "description": "string",
        "directAccessGrantsEnabled": true,
        "enabled": true,
        "frontchannelLogout": true,
        "fullScopeAllowed": true,
        "id": "string",
        "implicitFlowEnabled": true,
        "name": "string",
        "nodeReRegistrationTimeout": 0,
        "notBefore": 0,
        "optionalClientScopes": [
          "string"
        ],
        "origin": "string",
        "protocol": "string",
        "protocolMappers": [
          {
            "config": {},
            "id": "string",
            "name": "string",
            "protocol": "string",
            "protocolMapper": "string"
          }
        ],
        "publicClient": true,
        "redirectUris": [
          "string"
        ],
        "registeredNodes": {},
        "registrationAccessToken": "string",
        "rootUrl": "string",
        "secret": "string",
        "serviceAccountsEnabled": true,
        "standardFlowEnabled": true,
        "surrogateAuthRequired": true,
        "webOrigins": [
          "string"
        ]
      }
    ],
    "components": {
      "empty": true,
      "loadFactor": 0,
      "threshold": 0
    },
    "defaultDefaultClientScopes": [
      "string"
    ],
    "defaultGroups": [
      "string"
    ],
    "defaultLocale": "string",
    "defaultOptionalClientScopes": [
      "string"
    ],
    "defaultRoles": [
      "string"
    ],
    "defaultSignatureAlgorithm": "string",
    "directGrantFlow": "string",
    "displayName": "string",
    "displayNameHtml": "string",
    "dockerAuthenticationFlow": "string",
    "duplicateEmailsAllowed": true,
    "editUsernameAllowed": true,
    "emailTheme": "string",
    "enabled": true,
    "enabledEventTypes": [
      "string"
    ],
    "eventsEnabled": true,
    "eventsExpiration": 0,
    "eventsListeners": [
      "string"
    ],
    "failureFactor": 0,
    "federatedUsers": [
      {
        "access": {},
        "attributes": {},
        "clientConsents": [
          {
            "clientId": "string",
            "createdDate": 0,
            "grantedClientScopes": [
              "string"
            ],
            "lastUpdatedDate": 0
          }
        ],
        "clientRoles": {},
        "createdTimestamp": 0,
        "credentials": [
          {
            "createdDate": 0,
            "credentialData": "string",
            "id": "string",
            "priority": 0,
            "secretData": "string",
            "temporary": true,
            "type": "string",
            "userLabel": "string",
            "value": "string"
          }
        ],
        "disableableCredentialTypes": [
          "string"
        ],
        "email": "string",
        "emailVerified": true,
        "enabled": true,
        "federatedIdentities": [
          {
            "identityProvider": "string",
            "userId": "string",
            "userName": "string"
          }
        ],
        "federationLink": "string",
        "firstName": "string",
        "groups": [
          "string"
        ],
        "id": "string",
        "lastName": "string",
        "notBefore": 0,
        "origin": "string",
        "realmRoles": [
          "string"
        ],
        "requiredActions": [
          "string"
        ],
        "self": "string",
        "serviceAccountClientId": "string",
        "username": "string"
      }
    ],
    "groups": [
      {
        "access": {},
        "attributes": {},
        "clientRoles": {},
        "id": "string",
        "name": "string",
        "path": "string",
        "realmRoles": [
          "string"
        ],
        "subGroups": [
          {}
        ]
      }
    ],
    "id": "string",
    "identityProviderMappers": [
      {
        "config": {},
        "id": "string",
        "identityProviderAlias": "string",
        "identityProviderMapper": "string",
        "name": "string"
      }
    ],
    "identityProviders": [
      {
        "addReadTokenRoleOnCreate": true,
        "alias": "string",
        "config": {},
        "displayName": "string",
        "enabled": true,
        "firstBrokerLoginFlowAlias": "string",
        "internalId": "string",
        "linkOnly": true,
        "postBrokerLoginFlowAlias": "string",
        "providerId": "string",
        "storeToken": true,
        "trustEmail": true
      }
    ],
    "internationalizationEnabled": true,
    "keycloakVersion": "string",
    "loginTheme": "string",
    "loginWithEmailAllowed": true,
    "maxDeltaTimeSeconds": 0,
    "maxFailureWaitSeconds": 0,
    "minimumQuickLoginWaitSeconds": 0,
    "notBefore": 0,
    "offlineSessionIdleTimeout": 0,
    "offlineSessionMaxLifespan": 0,
    "offlineSessionMaxLifespanEnabled": true,
    "otpPolicyAlgorithm": "string",
    "otpPolicyDigits": 0,
    "otpPolicyInitialCounter": 0,
    "otpPolicyLookAheadWindow": 0,
    "otpPolicyPeriod": 0,
    "otpPolicyType": "string",
    "otpSupportedApplications": [
      "string"
    ],
    "passwordPolicy": "string",
    "permanentLockout": true,
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ],
    "quickLoginCheckMilliSeconds": 0,
    "realm": "string",
    "refreshTokenMaxReuse": 0,
    "registrationAllowed": true,
    "registrationEmailAsUsername": true,
    "registrationFlow": "string",
    "rememberMe": true,
    "requiredActions": [
      {
        "alias": "string",
        "config": {},
        "defaultAction": true,
        "enabled": true,
        "name": "string",
        "priority": 0,
        "providerId": "string"
      }
    ],
    "resetCredentialsFlow": "string",
    "resetPasswordAllowed": true,
    "revokeRefreshToken": true,
    "roles": {
      "client": {},
      "realm": [
        {
          "attributes": {},
          "clientRole": true,
          "composite": true,
          "composites": {
            "client": {},
            "realm": [
              "string"
            ]
          },
          "containerId": "string",
          "description": "string",
          "id": "string",
          "name": "string"
        }
      ]
    },
    "scopeMappings": [
      {
        "client": "string",
        "clientScope": "string",
        "roles": [
          "string"
        ],
        "self": "string"
      }
    ],
    "smtpServer": {},
    "sslRequired": "string",
    "ssoSessionIdleTimeout": 0,
    "ssoSessionIdleTimeoutRememberMe": 0,
    "ssoSessionMaxLifespan": 0,
    "ssoSessionMaxLifespanRememberMe": 0,
    "supportedLocales": [
      "string"
    ],
    "userFederationMappers": [
      {
        "config": {},
        "federationMapperType": "string",
        "federationProviderDisplayName": "string",
        "id": "string",
        "name": "string"
      }
    ],
    "userFederationProviders": [
      {
        "changedSyncPeriod": 0,
        "config": {},
        "displayName": "string",
        "fullSyncPeriod": 0,
        "id": "string",
        "lastSync": 0,
        "priority": 0,
        "providerName": "string"
      }
    ],
    "userManagedAccessAllowed": true,
    "users": [
      {
        "access": {},
        "attributes": {},
        "clientConsents": [
          {
            "clientId": "string",
            "createdDate": 0,
            "grantedClientScopes": [
              "string"
            ],
            "lastUpdatedDate": 0
          }
        ],
        "clientRoles": {},
        "createdTimestamp": 0,
        "credentials": [
          {
            "createdDate": 0,
            "credentialData": "string",
            "id": "string",
            "priority": 0,
            "secretData": "string",
            "temporary": true,
            "type": "string",
            "userLabel": "string",
            "value": "string"
          }
        ],
        "disableableCredentialTypes": [
          "string"
        ],
        "email": "string",
        "emailVerified": true,
        "enabled": true,
        "federatedIdentities": [
          {
            "identityProvider": "string",
            "userId": "string",
            "userName": "string"
          }
        ],
        "federationLink": "string",
        "firstName": "string",
        "groups": [
          "string"
        ],
        "id": "string",
        "lastName": "string",
        "notBefore": 0,
        "origin": "string",
        "realmRoles": [
          "string"
        ],
        "requiredActions": [
          "string"
        ],
        "self": "string",
        "serviceAccountClientId": "string",
        "username": "string"
      }
    ],
    "verifyEmail": true,
    "waitIncrementSeconds": 0,
    "webAuthnPolicyAcceptableAaguids": [
      "string"
    ],
    "webAuthnPolicyAttestationConveyancePreference": "string",
    "webAuthnPolicyAuthenticatorAttachment": "string",
    "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyCreateTimeout": 0,
    "webAuthnPolicyPasswordlessAcceptableAaguids": [
      "string"
    ],
    "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
    "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
    "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyPasswordlessCreateTimeout": 0,
    "webAuthnPolicyPasswordlessRequireResidentKey": "string",
    "webAuthnPolicyPasswordlessRpEntityName": "string",
    "webAuthnPolicyPasswordlessRpId": "string",
    "webAuthnPolicyPasswordlessSignatureAlgorithms": [
      "string"
    ],
    "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
    "webAuthnPolicyRequireResidentKey": "string",
    "webAuthnPolicyRpEntityName": "string",
    "webAuthnPolicyRpId": "string",
    "webAuthnPolicySignatureAlgorithms": [
      "string"
    ],
    "webAuthnPolicyUserVerificationRequirement": "string"
  }'
```

`POST /`

> Body parameter

```json
{
  "accessCodeLifespan": 0,
  "accessCodeLifespanLogin": 0,
  "accessCodeLifespanUserAction": 0,
  "accessTokenLifespan": 0,
  "accessTokenLifespanForImplicitFlow": 0,
  "accountTheme": "string",
  "actionTokenGeneratedByAdminLifespan": 0,
  "actionTokenGeneratedByUserLifespan": 0,
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "adminTheme": "string",
  "attributes": {},
  "authenticationFlows": [
    {
      "alias": "string",
      "authenticationExecutions": [
        {
          "authenticator": "string",
          "authenticatorConfig": "string",
          "authenticatorFlow": true,
          "autheticatorFlow": true,
          "flowAlias": "string",
          "priority": 0,
          "requirement": "string",
          "userSetupAllowed": true
        }
      ],
      "builtIn": true,
      "description": "string",
      "id": "string",
      "providerId": "string",
      "topLevel": true
    }
  ],
  "authenticatorConfig": [
    {
      "alias": "string",
      "config": {},
      "id": "string"
    }
  ],
  "browserFlow": "string",
  "browserSecurityHeaders": {},
  "bruteForceProtected": true,
  "clientAuthenticationFlow": "string",
  "clientScopeMappings": {},
  "clientScopes": [
    {
      "attributes": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ]
    }
  ],
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "components": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "defaultDefaultClientScopes": [
    "string"
  ],
  "defaultGroups": [
    "string"
  ],
  "defaultLocale": "string",
  "defaultOptionalClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "defaultSignatureAlgorithm": "string",
  "directGrantFlow": "string",
  "displayName": "string",
  "displayNameHtml": "string",
  "dockerAuthenticationFlow": "string",
  "duplicateEmailsAllowed": true,
  "editUsernameAllowed": true,
  "emailTheme": "string",
  "enabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ],
  "failureFactor": 0,
  "federatedUsers": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "id": "string",
  "identityProviderMappers": [
    {
      "config": {},
      "id": "string",
      "identityProviderAlias": "string",
      "identityProviderMapper": "string",
      "name": "string"
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "internationalizationEnabled": true,
  "keycloakVersion": "string",
  "loginTheme": "string",
  "loginWithEmailAllowed": true,
  "maxDeltaTimeSeconds": 0,
  "maxFailureWaitSeconds": 0,
  "minimumQuickLoginWaitSeconds": 0,
  "notBefore": 0,
  "offlineSessionIdleTimeout": 0,
  "offlineSessionMaxLifespan": 0,
  "offlineSessionMaxLifespanEnabled": true,
  "otpPolicyAlgorithm": "string",
  "otpPolicyDigits": 0,
  "otpPolicyInitialCounter": 0,
  "otpPolicyLookAheadWindow": 0,
  "otpPolicyPeriod": 0,
  "otpPolicyType": "string",
  "otpSupportedApplications": [
    "string"
  ],
  "passwordPolicy": "string",
  "permanentLockout": true,
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "quickLoginCheckMilliSeconds": 0,
  "realm": "string",
  "refreshTokenMaxReuse": 0,
  "registrationAllowed": true,
  "registrationEmailAsUsername": true,
  "registrationFlow": "string",
  "rememberMe": true,
  "requiredActions": [
    {
      "alias": "string",
      "config": {},
      "defaultAction": true,
      "enabled": true,
      "name": "string",
      "priority": 0,
      "providerId": "string"
    }
  ],
  "resetCredentialsFlow": "string",
  "resetPasswordAllowed": true,
  "revokeRefreshToken": true,
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "scopeMappings": [
    {
      "client": "string",
      "clientScope": "string",
      "roles": [
        "string"
      ],
      "self": "string"
    }
  ],
  "smtpServer": {},
  "sslRequired": "string",
  "ssoSessionIdleTimeout": 0,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespan": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "supportedLocales": [
    "string"
  ],
  "userFederationMappers": [
    {
      "config": {},
      "federationMapperType": "string",
      "federationProviderDisplayName": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "userFederationProviders": [
    {
      "changedSyncPeriod": 0,
      "config": {},
      "displayName": "string",
      "fullSyncPeriod": 0,
      "id": "string",
      "lastSync": 0,
      "priority": 0,
      "providerName": "string"
    }
  ],
  "userManagedAccessAllowed": true,
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "verifyEmail": true,
  "waitIncrementSeconds": 0,
  "webAuthnPolicyAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyAttestationConveyancePreference": "string",
  "webAuthnPolicyAuthenticatorAttachment": "string",
  "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessRequireResidentKey": "string",
  "webAuthnPolicyPasswordlessRpEntityName": "string",
  "webAuthnPolicyPasswordlessRpId": "string",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
  "webAuthnPolicyRequireResidentKey": "string",
  "webAuthnPolicyRpEntityName": "string",
  "webAuthnPolicyRpId": "string",
  "webAuthnPolicySignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyUserVerificationRequirement": "string"
}
```

<h3 id="import-a-realm-imports-a-realm-from-a-full-representation-of-that-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RealmRepresentation](#schemarealmrepresentation)|true|JSON representation of the realm|
|» accessCodeLifespan|body|integer(int32)|false|none|
|» accessCodeLifespanLogin|body|integer(int32)|false|none|
|» accessCodeLifespanUserAction|body|integer(int32)|false|none|
|» accessTokenLifespan|body|integer(int32)|false|none|
|» accessTokenLifespanForImplicitFlow|body|integer(int32)|false|none|
|» accountTheme|body|string|false|none|
|» actionTokenGeneratedByAdminLifespan|body|integer(int32)|false|none|
|» actionTokenGeneratedByUserLifespan|body|integer(int32)|false|none|
|» adminEventsDetailsEnabled|body|boolean|false|none|
|» adminEventsEnabled|body|boolean|false|none|
|» adminTheme|body|string|false|none|
|» attributes|body|object|false|none|
|» authenticationFlows|body|[[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)]|false|none|
|» authenticatorConfig|body|[[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)]|false|none|
|» browserFlow|body|string|false|none|
|» browserSecurityHeaders|body|object|false|none|
|» bruteForceProtected|body|boolean|false|none|
|» clientAuthenticationFlow|body|string|false|none|
|» clientScopeMappings|body|object|false|none|
|» clientScopes|body|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|
|» clientSessionIdleTimeout|body|integer(int32)|false|none|
|» clientSessionMaxLifespan|body|integer(int32)|false|none|
|» clients|body|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|
|» components|body|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|
|» defaultDefaultClientScopes|body|[string]|false|none|
|» defaultGroups|body|[string]|false|none|
|» defaultLocale|body|string|false|none|
|» defaultOptionalClientScopes|body|[string]|false|none|
|» defaultRoles|body|[string]|false|none|
|» defaultSignatureAlgorithm|body|string|false|none|
|» directGrantFlow|body|string|false|none|
|» displayName|body|string|false|none|
|» displayNameHtml|body|string|false|none|
|» dockerAuthenticationFlow|body|string|false|none|
|» duplicateEmailsAllowed|body|boolean|false|none|
|» editUsernameAllowed|body|boolean|false|none|
|» emailTheme|body|string|false|none|
|» enabled|body|boolean|false|none|
|» enabledEventTypes|body|[string]|false|none|
|» eventsEnabled|body|boolean|false|none|
|» eventsExpiration|body|integer(int64)|false|none|
|» eventsListeners|body|[string]|false|none|
|» failureFactor|body|integer(int32)|false|none|
|» federatedUsers|body|[[UserRepresentation](#schemauserrepresentation)]|false|none|
|» groups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|
|» id|body|string|false|none|
|» identityProviderMappers|body|[[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)]|false|none|
|» identityProviders|body|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|
|» internationalizationEnabled|body|boolean|false|none|
|» keycloakVersion|body|string|false|none|
|» loginTheme|body|string|false|none|
|» loginWithEmailAllowed|body|boolean|false|none|
|» maxDeltaTimeSeconds|body|integer(int32)|false|none|
|» maxFailureWaitSeconds|body|integer(int32)|false|none|
|» minimumQuickLoginWaitSeconds|body|integer(int32)|false|none|
|» notBefore|body|integer(int32)|false|none|
|» offlineSessionIdleTimeout|body|integer(int32)|false|none|
|» offlineSessionMaxLifespan|body|integer(int32)|false|none|
|» offlineSessionMaxLifespanEnabled|body|boolean|false|none|
|» otpPolicyAlgorithm|body|string|false|none|
|» otpPolicyDigits|body|integer(int32)|false|none|
|» otpPolicyInitialCounter|body|integer(int32)|false|none|
|» otpPolicyLookAheadWindow|body|integer(int32)|false|none|
|» otpPolicyPeriod|body|integer(int32)|false|none|
|» otpPolicyType|body|string|false|none|
|» otpSupportedApplications|body|[string]|false|none|
|» passwordPolicy|body|string|false|none|
|» permanentLockout|body|boolean|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|
|» quickLoginCheckMilliSeconds|body|integer(int64)|false|none|
|» realm|body|string|false|none|
|» refreshTokenMaxReuse|body|integer(int32)|false|none|
|» registrationAllowed|body|boolean|false|none|
|» registrationEmailAsUsername|body|boolean|false|none|
|» registrationFlow|body|string|false|none|
|» rememberMe|body|boolean|false|none|
|» requiredActions|body|[[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)]|false|none|
|» resetCredentialsFlow|body|string|false|none|
|» resetPasswordAllowed|body|boolean|false|none|
|» revokeRefreshToken|body|boolean|false|none|
|» roles|body|[RolesRepresentation](#schemarolesrepresentation)|false|none|
|» scopeMappings|body|[[ScopeMappingRepresentation](#schemascopemappingrepresentation)]|false|none|
|» smtpServer|body|object|false|none|
|» sslRequired|body|string|false|none|
|» ssoSessionIdleTimeout|body|integer(int32)|false|none|
|» ssoSessionIdleTimeoutRememberMe|body|integer(int32)|false|none|
|» ssoSessionMaxLifespan|body|integer(int32)|false|none|
|» ssoSessionMaxLifespanRememberMe|body|integer(int32)|false|none|
|» supportedLocales|body|[string]|false|none|
|» userFederationMappers|body|[[UserFederationMapperRepresentation](#schemauserfederationmapperrepresentation)]|false|none|
|» userFederationProviders|body|[[UserFederationProviderRepresentation](#schemauserfederationproviderrepresentation)]|false|none|
|» userManagedAccessAllowed|body|boolean|false|none|
|» users|body|[[UserRepresentation](#schemauserrepresentation)]|false|none|
|» verifyEmail|body|boolean|false|none|
|» waitIncrementSeconds|body|integer(int32)|false|none|
|» webAuthnPolicyAcceptableAaguids|body|[string]|false|none|
|» webAuthnPolicyAttestationConveyancePreference|body|string|false|none|
|» webAuthnPolicyAuthenticatorAttachment|body|string|false|none|
|» webAuthnPolicyAvoidSameAuthenticatorRegister|body|boolean|false|none|
|» webAuthnPolicyCreateTimeout|body|integer(int32)|false|none|
|» webAuthnPolicyPasswordlessAcceptableAaguids|body|[string]|false|none|
|» webAuthnPolicyPasswordlessAttestationConveyancePreference|body|string|false|none|
|» webAuthnPolicyPasswordlessAuthenticatorAttachment|body|string|false|none|
|» webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister|body|boolean|false|none|
|» webAuthnPolicyPasswordlessCreateTimeout|body|integer(int32)|false|none|
|» webAuthnPolicyPasswordlessRequireResidentKey|body|string|false|none|
|» webAuthnPolicyPasswordlessRpEntityName|body|string|false|none|
|» webAuthnPolicyPasswordlessRpId|body|string|false|none|
|» webAuthnPolicyPasswordlessSignatureAlgorithms|body|[string]|false|none|
|» webAuthnPolicyPasswordlessUserVerificationRequirement|body|string|false|none|
|» webAuthnPolicyRequireResidentKey|body|string|false|none|
|» webAuthnPolicyRpEntityName|body|string|false|none|
|» webAuthnPolicyRpId|body|string|false|none|
|» webAuthnPolicySignatureAlgorithms|body|[string]|false|none|
|» webAuthnPolicyUserVerificationRequirement|body|string|false|none|

<h3 id="import-a-realm-imports-a-realm-from-a-full-representation-of-that-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the top-level representation of the realm It will not include nested information like User and Client representations.

> Code samples

```bash
curl https://example.com/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}`

<h3 id="get-the-top-level-representation-of-the-realm-it-will-not-include-nested-information-like-user-and-client-representations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{
  "accessCodeLifespan": 0,
  "accessCodeLifespanLogin": 0,
  "accessCodeLifespanUserAction": 0,
  "accessTokenLifespan": 0,
  "accessTokenLifespanForImplicitFlow": 0,
  "accountTheme": "string",
  "actionTokenGeneratedByAdminLifespan": 0,
  "actionTokenGeneratedByUserLifespan": 0,
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "adminTheme": "string",
  "attributes": {},
  "authenticationFlows": [
    {
      "alias": "string",
      "authenticationExecutions": [
        {
          "authenticator": "string",
          "authenticatorConfig": "string",
          "authenticatorFlow": true,
          "autheticatorFlow": true,
          "flowAlias": "string",
          "priority": 0,
          "requirement": "string",
          "userSetupAllowed": true
        }
      ],
      "builtIn": true,
      "description": "string",
      "id": "string",
      "providerId": "string",
      "topLevel": true
    }
  ],
  "authenticatorConfig": [
    {
      "alias": "string",
      "config": {},
      "id": "string"
    }
  ],
  "browserFlow": "string",
  "browserSecurityHeaders": {},
  "bruteForceProtected": true,
  "clientAuthenticationFlow": "string",
  "clientScopeMappings": {},
  "clientScopes": [
    {
      "attributes": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ]
    }
  ],
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "components": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "defaultDefaultClientScopes": [
    "string"
  ],
  "defaultGroups": [
    "string"
  ],
  "defaultLocale": "string",
  "defaultOptionalClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "defaultSignatureAlgorithm": "string",
  "directGrantFlow": "string",
  "displayName": "string",
  "displayNameHtml": "string",
  "dockerAuthenticationFlow": "string",
  "duplicateEmailsAllowed": true,
  "editUsernameAllowed": true,
  "emailTheme": "string",
  "enabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ],
  "failureFactor": 0,
  "federatedUsers": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "id": "string",
  "identityProviderMappers": [
    {
      "config": {},
      "id": "string",
      "identityProviderAlias": "string",
      "identityProviderMapper": "string",
      "name": "string"
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "internationalizationEnabled": true,
  "keycloakVersion": "string",
  "loginTheme": "string",
  "loginWithEmailAllowed": true,
  "maxDeltaTimeSeconds": 0,
  "maxFailureWaitSeconds": 0,
  "minimumQuickLoginWaitSeconds": 0,
  "notBefore": 0,
  "offlineSessionIdleTimeout": 0,
  "offlineSessionMaxLifespan": 0,
  "offlineSessionMaxLifespanEnabled": true,
  "otpPolicyAlgorithm": "string",
  "otpPolicyDigits": 0,
  "otpPolicyInitialCounter": 0,
  "otpPolicyLookAheadWindow": 0,
  "otpPolicyPeriod": 0,
  "otpPolicyType": "string",
  "otpSupportedApplications": [
    "string"
  ],
  "passwordPolicy": "string",
  "permanentLockout": true,
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "quickLoginCheckMilliSeconds": 0,
  "realm": "string",
  "refreshTokenMaxReuse": 0,
  "registrationAllowed": true,
  "registrationEmailAsUsername": true,
  "registrationFlow": "string",
  "rememberMe": true,
  "requiredActions": [
    {
      "alias": "string",
      "config": {},
      "defaultAction": true,
      "enabled": true,
      "name": "string",
      "priority": 0,
      "providerId": "string"
    }
  ],
  "resetCredentialsFlow": "string",
  "resetPasswordAllowed": true,
  "revokeRefreshToken": true,
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "scopeMappings": [
    {
      "client": "string",
      "clientScope": "string",
      "roles": [
        "string"
      ],
      "self": "string"
    }
  ],
  "smtpServer": {},
  "sslRequired": "string",
  "ssoSessionIdleTimeout": 0,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespan": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "supportedLocales": [
    "string"
  ],
  "userFederationMappers": [
    {
      "config": {},
      "federationMapperType": "string",
      "federationProviderDisplayName": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "userFederationProviders": [
    {
      "changedSyncPeriod": 0,
      "config": {},
      "displayName": "string",
      "fullSyncPeriod": 0,
      "id": "string",
      "lastSync": 0,
      "priority": 0,
      "providerName": "string"
    }
  ],
  "userManagedAccessAllowed": true,
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "verifyEmail": true,
  "waitIncrementSeconds": 0,
  "webAuthnPolicyAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyAttestationConveyancePreference": "string",
  "webAuthnPolicyAuthenticatorAttachment": "string",
  "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessRequireResidentKey": "string",
  "webAuthnPolicyPasswordlessRpEntityName": "string",
  "webAuthnPolicyPasswordlessRpId": "string",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
  "webAuthnPolicyRequireResidentKey": "string",
  "webAuthnPolicyRpEntityName": "string",
  "webAuthnPolicyRpId": "string",
  "webAuthnPolicySignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyUserVerificationRequirement": "string"
}
```

<h3 id="get-the-top-level-representation-of-the-realm-it-will-not-include-nested-information-like-user-and-client-representations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RealmRepresentation](#schemarealmrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the top-level information of the realm Any user, roles or client information in the representation will be ignored.

> Code samples

```bash
curl https://example.com/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessCodeLifespan": 0,
    "accessCodeLifespanLogin": 0,
    "accessCodeLifespanUserAction": 0,
    "accessTokenLifespan": 0,
    "accessTokenLifespanForImplicitFlow": 0,
    "accountTheme": "string",
    "actionTokenGeneratedByAdminLifespan": 0,
    "actionTokenGeneratedByUserLifespan": 0,
    "adminEventsDetailsEnabled": true,
    "adminEventsEnabled": true,
    "adminTheme": "string",
    "attributes": {},
    "authenticationFlows": [
      {
        "alias": "string",
        "authenticationExecutions": [
          {
            "authenticator": "string",
            "authenticatorConfig": "string",
            "authenticatorFlow": true,
            "autheticatorFlow": true,
            "flowAlias": "string",
            "priority": 0,
            "requirement": "string",
            "userSetupAllowed": true
          }
        ],
        "builtIn": true,
        "description": "string",
        "id": "string",
        "providerId": "string",
        "topLevel": true
      }
    ],
    "authenticatorConfig": [
      {
        "alias": "string",
        "config": {},
        "id": "string"
      }
    ],
    "browserFlow": "string",
    "browserSecurityHeaders": {},
    "bruteForceProtected": true,
    "clientAuthenticationFlow": "string",
    "clientScopeMappings": {},
    "clientScopes": [
      {
        "attributes": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMappers": [
          {
            "config": {},
            "id": "string",
            "name": "string",
            "protocol": "string",
            "protocolMapper": "string"
          }
        ]
      }
    ],
    "clientSessionIdleTimeout": 0,
    "clientSessionMaxLifespan": 0,
    "clients": [
      {
        "access": {},
        "adminUrl": "string",
        "alwaysDisplayInConsole": true,
        "attributes": {},
        "authenticationFlowBindingOverrides": {},
        "authorizationServicesEnabled": true,
        "authorizationSettings": {
          "allowRemoteResourceManagement": true,
          "clientId": "string",
          "decisionStrategy": "AFFIRMATIVE",
          "id": "string",
          "name": "string",
          "policies": [
            {
              "config": {},
              "decisionStrategy": "AFFIRMATIVE",
              "description": "string",
              "id": "string",
              "logic": "POSITIVE",
              "name": "string",
              "owner": "string",
              "policies": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "resourcesData": [
                {}
              ],
              "scopes": [
                "string"
              ],
              "scopesData": [
                {}
              ],
              "type": "string"
            }
          ],
          "policyEnforcementMode": "ENFORCING",
          "resources": [
            {
              "attributes": {},
              "displayName": "string",
              "icon_uri": "string",
              "id": "string",
              "name": "string",
              "ownerManagedAccess": true,
              "scopes": [
                {}
              ],
              "type": "string",
              "uris": [
                "string"
              ]
            }
          ],
          "scopes": [
            {
              "displayName": "string",
              "iconUri": "string",
              "id": "string",
              "name": "string",
              "policies": [
                {}
              ],
              "resources": [
                {}
              ]
            }
          ]
        },
        "baseUrl": "string",
        "bearerOnly": true,
        "clientAuthenticatorType": "string",
        "clientId": "string",
        "consentRequired": true,
        "defaultClientScopes": [
          "string"
        ],
        "defaultRoles": [
          "string"
        ],
        "description": "string",
        "directAccessGrantsEnabled": true,
        "enabled": true,
        "frontchannelLogout": true,
        "fullScopeAllowed": true,
        "id": "string",
        "implicitFlowEnabled": true,
        "name": "string",
        "nodeReRegistrationTimeout": 0,
        "notBefore": 0,
        "optionalClientScopes": [
          "string"
        ],
        "origin": "string",
        "protocol": "string",
        "protocolMappers": [
          {
            "config": {},
            "id": "string",
            "name": "string",
            "protocol": "string",
            "protocolMapper": "string"
          }
        ],
        "publicClient": true,
        "redirectUris": [
          "string"
        ],
        "registeredNodes": {},
        "registrationAccessToken": "string",
        "rootUrl": "string",
        "secret": "string",
        "serviceAccountsEnabled": true,
        "standardFlowEnabled": true,
        "surrogateAuthRequired": true,
        "webOrigins": [
          "string"
        ]
      }
    ],
    "components": {
      "empty": true,
      "loadFactor": 0,
      "threshold": 0
    },
    "defaultDefaultClientScopes": [
      "string"
    ],
    "defaultGroups": [
      "string"
    ],
    "defaultLocale": "string",
    "defaultOptionalClientScopes": [
      "string"
    ],
    "defaultRoles": [
      "string"
    ],
    "defaultSignatureAlgorithm": "string",
    "directGrantFlow": "string",
    "displayName": "string",
    "displayNameHtml": "string",
    "dockerAuthenticationFlow": "string",
    "duplicateEmailsAllowed": true,
    "editUsernameAllowed": true,
    "emailTheme": "string",
    "enabled": true,
    "enabledEventTypes": [
      "string"
    ],
    "eventsEnabled": true,
    "eventsExpiration": 0,
    "eventsListeners": [
      "string"
    ],
    "failureFactor": 0,
    "federatedUsers": [
      {
        "access": {},
        "attributes": {},
        "clientConsents": [
          {
            "clientId": "string",
            "createdDate": 0,
            "grantedClientScopes": [
              "string"
            ],
            "lastUpdatedDate": 0
          }
        ],
        "clientRoles": {},
        "createdTimestamp": 0,
        "credentials": [
          {
            "createdDate": 0,
            "credentialData": "string",
            "id": "string",
            "priority": 0,
            "secretData": "string",
            "temporary": true,
            "type": "string",
            "userLabel": "string",
            "value": "string"
          }
        ],
        "disableableCredentialTypes": [
          "string"
        ],
        "email": "string",
        "emailVerified": true,
        "enabled": true,
        "federatedIdentities": [
          {
            "identityProvider": "string",
            "userId": "string",
            "userName": "string"
          }
        ],
        "federationLink": "string",
        "firstName": "string",
        "groups": [
          "string"
        ],
        "id": "string",
        "lastName": "string",
        "notBefore": 0,
        "origin": "string",
        "realmRoles": [
          "string"
        ],
        "requiredActions": [
          "string"
        ],
        "self": "string",
        "serviceAccountClientId": "string",
        "username": "string"
      }
    ],
    "groups": [
      {
        "access": {},
        "attributes": {},
        "clientRoles": {},
        "id": "string",
        "name": "string",
        "path": "string",
        "realmRoles": [
          "string"
        ],
        "subGroups": [
          {}
        ]
      }
    ],
    "id": "string",
    "identityProviderMappers": [
      {
        "config": {},
        "id": "string",
        "identityProviderAlias": "string",
        "identityProviderMapper": "string",
        "name": "string"
      }
    ],
    "identityProviders": [
      {
        "addReadTokenRoleOnCreate": true,
        "alias": "string",
        "config": {},
        "displayName": "string",
        "enabled": true,
        "firstBrokerLoginFlowAlias": "string",
        "internalId": "string",
        "linkOnly": true,
        "postBrokerLoginFlowAlias": "string",
        "providerId": "string",
        "storeToken": true,
        "trustEmail": true
      }
    ],
    "internationalizationEnabled": true,
    "keycloakVersion": "string",
    "loginTheme": "string",
    "loginWithEmailAllowed": true,
    "maxDeltaTimeSeconds": 0,
    "maxFailureWaitSeconds": 0,
    "minimumQuickLoginWaitSeconds": 0,
    "notBefore": 0,
    "offlineSessionIdleTimeout": 0,
    "offlineSessionMaxLifespan": 0,
    "offlineSessionMaxLifespanEnabled": true,
    "otpPolicyAlgorithm": "string",
    "otpPolicyDigits": 0,
    "otpPolicyInitialCounter": 0,
    "otpPolicyLookAheadWindow": 0,
    "otpPolicyPeriod": 0,
    "otpPolicyType": "string",
    "otpSupportedApplications": [
      "string"
    ],
    "passwordPolicy": "string",
    "permanentLockout": true,
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ],
    "quickLoginCheckMilliSeconds": 0,
    "realm": "string",
    "refreshTokenMaxReuse": 0,
    "registrationAllowed": true,
    "registrationEmailAsUsername": true,
    "registrationFlow": "string",
    "rememberMe": true,
    "requiredActions": [
      {
        "alias": "string",
        "config": {},
        "defaultAction": true,
        "enabled": true,
        "name": "string",
        "priority": 0,
        "providerId": "string"
      }
    ],
    "resetCredentialsFlow": "string",
    "resetPasswordAllowed": true,
    "revokeRefreshToken": true,
    "roles": {
      "client": {},
      "realm": [
        {
          "attributes": {},
          "clientRole": true,
          "composite": true,
          "composites": {
            "client": {},
            "realm": [
              "string"
            ]
          },
          "containerId": "string",
          "description": "string",
          "id": "string",
          "name": "string"
        }
      ]
    },
    "scopeMappings": [
      {
        "client": "string",
        "clientScope": "string",
        "roles": [
          "string"
        ],
        "self": "string"
      }
    ],
    "smtpServer": {},
    "sslRequired": "string",
    "ssoSessionIdleTimeout": 0,
    "ssoSessionIdleTimeoutRememberMe": 0,
    "ssoSessionMaxLifespan": 0,
    "ssoSessionMaxLifespanRememberMe": 0,
    "supportedLocales": [
      "string"
    ],
    "userFederationMappers": [
      {
        "config": {},
        "federationMapperType": "string",
        "federationProviderDisplayName": "string",
        "id": "string",
        "name": "string"
      }
    ],
    "userFederationProviders": [
      {
        "changedSyncPeriod": 0,
        "config": {},
        "displayName": "string",
        "fullSyncPeriod": 0,
        "id": "string",
        "lastSync": 0,
        "priority": 0,
        "providerName": "string"
      }
    ],
    "userManagedAccessAllowed": true,
    "users": [
      {
        "access": {},
        "attributes": {},
        "clientConsents": [
          {
            "clientId": "string",
            "createdDate": 0,
            "grantedClientScopes": [
              "string"
            ],
            "lastUpdatedDate": 0
          }
        ],
        "clientRoles": {},
        "createdTimestamp": 0,
        "credentials": [
          {
            "createdDate": 0,
            "credentialData": "string",
            "id": "string",
            "priority": 0,
            "secretData": "string",
            "temporary": true,
            "type": "string",
            "userLabel": "string",
            "value": "string"
          }
        ],
        "disableableCredentialTypes": [
          "string"
        ],
        "email": "string",
        "emailVerified": true,
        "enabled": true,
        "federatedIdentities": [
          {
            "identityProvider": "string",
            "userId": "string",
            "userName": "string"
          }
        ],
        "federationLink": "string",
        "firstName": "string",
        "groups": [
          "string"
        ],
        "id": "string",
        "lastName": "string",
        "notBefore": 0,
        "origin": "string",
        "realmRoles": [
          "string"
        ],
        "requiredActions": [
          "string"
        ],
        "self": "string",
        "serviceAccountClientId": "string",
        "username": "string"
      }
    ],
    "verifyEmail": true,
    "waitIncrementSeconds": 0,
    "webAuthnPolicyAcceptableAaguids": [
      "string"
    ],
    "webAuthnPolicyAttestationConveyancePreference": "string",
    "webAuthnPolicyAuthenticatorAttachment": "string",
    "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyCreateTimeout": 0,
    "webAuthnPolicyPasswordlessAcceptableAaguids": [
      "string"
    ],
    "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
    "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
    "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyPasswordlessCreateTimeout": 0,
    "webAuthnPolicyPasswordlessRequireResidentKey": "string",
    "webAuthnPolicyPasswordlessRpEntityName": "string",
    "webAuthnPolicyPasswordlessRpId": "string",
    "webAuthnPolicyPasswordlessSignatureAlgorithms": [
      "string"
    ],
    "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
    "webAuthnPolicyRequireResidentKey": "string",
    "webAuthnPolicyRpEntityName": "string",
    "webAuthnPolicyRpId": "string",
    "webAuthnPolicySignatureAlgorithms": [
      "string"
    ],
    "webAuthnPolicyUserVerificationRequirement": "string"
  }'
```

`PUT /{realm}`

> Body parameter

```json
{
  "accessCodeLifespan": 0,
  "accessCodeLifespanLogin": 0,
  "accessCodeLifespanUserAction": 0,
  "accessTokenLifespan": 0,
  "accessTokenLifespanForImplicitFlow": 0,
  "accountTheme": "string",
  "actionTokenGeneratedByAdminLifespan": 0,
  "actionTokenGeneratedByUserLifespan": 0,
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "adminTheme": "string",
  "attributes": {},
  "authenticationFlows": [
    {
      "alias": "string",
      "authenticationExecutions": [
        {
          "authenticator": "string",
          "authenticatorConfig": "string",
          "authenticatorFlow": true,
          "autheticatorFlow": true,
          "flowAlias": "string",
          "priority": 0,
          "requirement": "string",
          "userSetupAllowed": true
        }
      ],
      "builtIn": true,
      "description": "string",
      "id": "string",
      "providerId": "string",
      "topLevel": true
    }
  ],
  "authenticatorConfig": [
    {
      "alias": "string",
      "config": {},
      "id": "string"
    }
  ],
  "browserFlow": "string",
  "browserSecurityHeaders": {},
  "bruteForceProtected": true,
  "clientAuthenticationFlow": "string",
  "clientScopeMappings": {},
  "clientScopes": [
    {
      "attributes": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ]
    }
  ],
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "components": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "defaultDefaultClientScopes": [
    "string"
  ],
  "defaultGroups": [
    "string"
  ],
  "defaultLocale": "string",
  "defaultOptionalClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "defaultSignatureAlgorithm": "string",
  "directGrantFlow": "string",
  "displayName": "string",
  "displayNameHtml": "string",
  "dockerAuthenticationFlow": "string",
  "duplicateEmailsAllowed": true,
  "editUsernameAllowed": true,
  "emailTheme": "string",
  "enabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ],
  "failureFactor": 0,
  "federatedUsers": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "id": "string",
  "identityProviderMappers": [
    {
      "config": {},
      "id": "string",
      "identityProviderAlias": "string",
      "identityProviderMapper": "string",
      "name": "string"
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "internationalizationEnabled": true,
  "keycloakVersion": "string",
  "loginTheme": "string",
  "loginWithEmailAllowed": true,
  "maxDeltaTimeSeconds": 0,
  "maxFailureWaitSeconds": 0,
  "minimumQuickLoginWaitSeconds": 0,
  "notBefore": 0,
  "offlineSessionIdleTimeout": 0,
  "offlineSessionMaxLifespan": 0,
  "offlineSessionMaxLifespanEnabled": true,
  "otpPolicyAlgorithm": "string",
  "otpPolicyDigits": 0,
  "otpPolicyInitialCounter": 0,
  "otpPolicyLookAheadWindow": 0,
  "otpPolicyPeriod": 0,
  "otpPolicyType": "string",
  "otpSupportedApplications": [
    "string"
  ],
  "passwordPolicy": "string",
  "permanentLockout": true,
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "quickLoginCheckMilliSeconds": 0,
  "realm": "string",
  "refreshTokenMaxReuse": 0,
  "registrationAllowed": true,
  "registrationEmailAsUsername": true,
  "registrationFlow": "string",
  "rememberMe": true,
  "requiredActions": [
    {
      "alias": "string",
      "config": {},
      "defaultAction": true,
      "enabled": true,
      "name": "string",
      "priority": 0,
      "providerId": "string"
    }
  ],
  "resetCredentialsFlow": "string",
  "resetPasswordAllowed": true,
  "revokeRefreshToken": true,
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "scopeMappings": [
    {
      "client": "string",
      "clientScope": "string",
      "roles": [
        "string"
      ],
      "self": "string"
    }
  ],
  "smtpServer": {},
  "sslRequired": "string",
  "ssoSessionIdleTimeout": 0,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespan": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "supportedLocales": [
    "string"
  ],
  "userFederationMappers": [
    {
      "config": {},
      "federationMapperType": "string",
      "federationProviderDisplayName": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "userFederationProviders": [
    {
      "changedSyncPeriod": 0,
      "config": {},
      "displayName": "string",
      "fullSyncPeriod": 0,
      "id": "string",
      "lastSync": 0,
      "priority": 0,
      "providerName": "string"
    }
  ],
  "userManagedAccessAllowed": true,
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "verifyEmail": true,
  "waitIncrementSeconds": 0,
  "webAuthnPolicyAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyAttestationConveyancePreference": "string",
  "webAuthnPolicyAuthenticatorAttachment": "string",
  "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessRequireResidentKey": "string",
  "webAuthnPolicyPasswordlessRpEntityName": "string",
  "webAuthnPolicyPasswordlessRpId": "string",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
  "webAuthnPolicyRequireResidentKey": "string",
  "webAuthnPolicyRpEntityName": "string",
  "webAuthnPolicyRpId": "string",
  "webAuthnPolicySignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyUserVerificationRequirement": "string"
}
```

<h3 id="update-the-top-level-information-of-the-realm-any-user-roles-or-client-information-in-the-representation-will-be-ignored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[RealmRepresentation](#schemarealmrepresentation)|true|none|
|» accessCodeLifespan|body|integer(int32)|false|none|
|» accessCodeLifespanLogin|body|integer(int32)|false|none|
|» accessCodeLifespanUserAction|body|integer(int32)|false|none|
|» accessTokenLifespan|body|integer(int32)|false|none|
|» accessTokenLifespanForImplicitFlow|body|integer(int32)|false|none|
|» accountTheme|body|string|false|none|
|» actionTokenGeneratedByAdminLifespan|body|integer(int32)|false|none|
|» actionTokenGeneratedByUserLifespan|body|integer(int32)|false|none|
|» adminEventsDetailsEnabled|body|boolean|false|none|
|» adminEventsEnabled|body|boolean|false|none|
|» adminTheme|body|string|false|none|
|» attributes|body|object|false|none|
|» authenticationFlows|body|[[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)]|false|none|
|» authenticatorConfig|body|[[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)]|false|none|
|» browserFlow|body|string|false|none|
|» browserSecurityHeaders|body|object|false|none|
|» bruteForceProtected|body|boolean|false|none|
|» clientAuthenticationFlow|body|string|false|none|
|» clientScopeMappings|body|object|false|none|
|» clientScopes|body|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|
|» clientSessionIdleTimeout|body|integer(int32)|false|none|
|» clientSessionMaxLifespan|body|integer(int32)|false|none|
|» clients|body|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|
|» components|body|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|
|» defaultDefaultClientScopes|body|[string]|false|none|
|» defaultGroups|body|[string]|false|none|
|» defaultLocale|body|string|false|none|
|» defaultOptionalClientScopes|body|[string]|false|none|
|» defaultRoles|body|[string]|false|none|
|» defaultSignatureAlgorithm|body|string|false|none|
|» directGrantFlow|body|string|false|none|
|» displayName|body|string|false|none|
|» displayNameHtml|body|string|false|none|
|» dockerAuthenticationFlow|body|string|false|none|
|» duplicateEmailsAllowed|body|boolean|false|none|
|» editUsernameAllowed|body|boolean|false|none|
|» emailTheme|body|string|false|none|
|» enabled|body|boolean|false|none|
|» enabledEventTypes|body|[string]|false|none|
|» eventsEnabled|body|boolean|false|none|
|» eventsExpiration|body|integer(int64)|false|none|
|» eventsListeners|body|[string]|false|none|
|» failureFactor|body|integer(int32)|false|none|
|» federatedUsers|body|[[UserRepresentation](#schemauserrepresentation)]|false|none|
|» groups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|
|» id|body|string|false|none|
|» identityProviderMappers|body|[[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)]|false|none|
|» identityProviders|body|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|
|» internationalizationEnabled|body|boolean|false|none|
|» keycloakVersion|body|string|false|none|
|» loginTheme|body|string|false|none|
|» loginWithEmailAllowed|body|boolean|false|none|
|» maxDeltaTimeSeconds|body|integer(int32)|false|none|
|» maxFailureWaitSeconds|body|integer(int32)|false|none|
|» minimumQuickLoginWaitSeconds|body|integer(int32)|false|none|
|» notBefore|body|integer(int32)|false|none|
|» offlineSessionIdleTimeout|body|integer(int32)|false|none|
|» offlineSessionMaxLifespan|body|integer(int32)|false|none|
|» offlineSessionMaxLifespanEnabled|body|boolean|false|none|
|» otpPolicyAlgorithm|body|string|false|none|
|» otpPolicyDigits|body|integer(int32)|false|none|
|» otpPolicyInitialCounter|body|integer(int32)|false|none|
|» otpPolicyLookAheadWindow|body|integer(int32)|false|none|
|» otpPolicyPeriod|body|integer(int32)|false|none|
|» otpPolicyType|body|string|false|none|
|» otpSupportedApplications|body|[string]|false|none|
|» passwordPolicy|body|string|false|none|
|» permanentLockout|body|boolean|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|
|» quickLoginCheckMilliSeconds|body|integer(int64)|false|none|
|» realm|body|string|false|none|
|» refreshTokenMaxReuse|body|integer(int32)|false|none|
|» registrationAllowed|body|boolean|false|none|
|» registrationEmailAsUsername|body|boolean|false|none|
|» registrationFlow|body|string|false|none|
|» rememberMe|body|boolean|false|none|
|» requiredActions|body|[[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)]|false|none|
|» resetCredentialsFlow|body|string|false|none|
|» resetPasswordAllowed|body|boolean|false|none|
|» revokeRefreshToken|body|boolean|false|none|
|» roles|body|[RolesRepresentation](#schemarolesrepresentation)|false|none|
|» scopeMappings|body|[[ScopeMappingRepresentation](#schemascopemappingrepresentation)]|false|none|
|» smtpServer|body|object|false|none|
|» sslRequired|body|string|false|none|
|» ssoSessionIdleTimeout|body|integer(int32)|false|none|
|» ssoSessionIdleTimeoutRememberMe|body|integer(int32)|false|none|
|» ssoSessionMaxLifespan|body|integer(int32)|false|none|
|» ssoSessionMaxLifespanRememberMe|body|integer(int32)|false|none|
|» supportedLocales|body|[string]|false|none|
|» userFederationMappers|body|[[UserFederationMapperRepresentation](#schemauserfederationmapperrepresentation)]|false|none|
|» userFederationProviders|body|[[UserFederationProviderRepresentation](#schemauserfederationproviderrepresentation)]|false|none|
|» userManagedAccessAllowed|body|boolean|false|none|
|» users|body|[[UserRepresentation](#schemauserrepresentation)]|false|none|
|» verifyEmail|body|boolean|false|none|
|» waitIncrementSeconds|body|integer(int32)|false|none|
|» webAuthnPolicyAcceptableAaguids|body|[string]|false|none|
|» webAuthnPolicyAttestationConveyancePreference|body|string|false|none|
|» webAuthnPolicyAuthenticatorAttachment|body|string|false|none|
|» webAuthnPolicyAvoidSameAuthenticatorRegister|body|boolean|false|none|
|» webAuthnPolicyCreateTimeout|body|integer(int32)|false|none|
|» webAuthnPolicyPasswordlessAcceptableAaguids|body|[string]|false|none|
|» webAuthnPolicyPasswordlessAttestationConveyancePreference|body|string|false|none|
|» webAuthnPolicyPasswordlessAuthenticatorAttachment|body|string|false|none|
|» webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister|body|boolean|false|none|
|» webAuthnPolicyPasswordlessCreateTimeout|body|integer(int32)|false|none|
|» webAuthnPolicyPasswordlessRequireResidentKey|body|string|false|none|
|» webAuthnPolicyPasswordlessRpEntityName|body|string|false|none|
|» webAuthnPolicyPasswordlessRpId|body|string|false|none|
|» webAuthnPolicyPasswordlessSignatureAlgorithms|body|[string]|false|none|
|» webAuthnPolicyPasswordlessUserVerificationRequirement|body|string|false|none|
|» webAuthnPolicyRequireResidentKey|body|string|false|none|
|» webAuthnPolicyRpEntityName|body|string|false|none|
|» webAuthnPolicyRpId|body|string|false|none|
|» webAuthnPolicySignatureAlgorithms|body|[string]|false|none|
|» webAuthnPolicyUserVerificationRequirement|body|string|false|none|

<h3 id="update-the-top-level-information-of-the-realm-any-user-roles-or-client-information-in-the-representation-will-be-ignored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the realm

> Code samples

```bash
curl https://example.com/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}`

<h3 id="delete-the-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="delete-the-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get admin events Returns all admin events, or filters events based on URL query parameters listed here

> Code samples

```bash
curl https://example.com/string/admin-events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/admin-events`

<h3 id="get-admin-events-returns-all-admin-events-or-filters-events-based-on-url-query-parameters-listed-here-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authClient|query|string|false|none|
|authIpAddress|query|string|false|none|
|authRealm|query|string|false|none|
|authUser|query|string|false|user id|
|dateFrom|query|string|false|none|
|dateTo|query|string|false|none|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|operationTypes|query|[string]|false|none|
|resourcePath|query|string|false|none|
|resourceTypes|query|[string]|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "authDetails": {
      "clientId": "string",
      "ipAddress": "string",
      "realmId": "string",
      "userId": "string"
    },
    "error": "string",
    "operationType": "string",
    "realmId": "string",
    "representation": "string",
    "resourcePath": "string",
    "resourceType": "string",
    "time": 0
  }
]
```

<h3 id="get-admin-events-returns-all-admin-events-or-filters-events-based-on-url-query-parameters-listed-here-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-admin-events-returns-all-admin-events-or-filters-events-based-on-url-query-parameters-listed-here-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminEventRepresentation](#schemaadmineventrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete all admin events

> Code samples

```bash
curl https://example.com/string/admin-events \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/admin-events`

<h3 id="delete-all-admin-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="delete-all-admin-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Clear cache of external public keys (Public keys of clients or Identity providers)

> Code samples

```bash
curl https://example.com/string/clear-keys-cache \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clear-keys-cache`

<h3 id="clear-cache-of-external-public-keys-public-keys-of-clients-or-identity-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="clear-cache-of-external-public-keys-public-keys-of-clients-or-identity-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Clear realm cache

> Code samples

```bash
curl https://example.com/string/clear-realm-cache \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clear-realm-cache`

<h3 id="clear-realm-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="clear-realm-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Clear user cache

> Code samples

```bash
curl https://example.com/string/clear-user-cache \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clear-user-cache`

<h3 id="clear-user-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="clear-user-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Base path for importing clients under this realm.

> Code samples

```bash
curl https://example.com/string/client-description-converter \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`POST /{realm}/client-description-converter`

> Body parameter

```text
string
```

<h3 id="base-path-for-importing-clients-under-this-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|string|true|none|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

<h3 id="base-path-for-importing-clients-under-this-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ClientRepresentation](#schemaclientrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get client session stats Returns a JSON map.

> Code samples

```bash
curl https://example.com/string/client-session-stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-session-stats`

<h3 id="get-client-session-stats-returns-a-json-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-client-session-stats-returns-a-json-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-session-stats-returns-a-json-map-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/credential-registrators

> Code samples

```bash
curl https://example.com/string/credential-registrators \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/credential-registrators`

<h3 id="getrealmcredential-registrators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  "string"
]
```

<h3 id="getrealmcredential-registrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="getrealmcredential-registrators-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm default client scopes.

> Code samples

```bash
curl https://example.com/string/default-default-client-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/default-default-client-scopes`

<h3 id="get-realm-default-client-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }
]
```

<h3 id="get-realm-default-client-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-default-client-scopes-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/default-default-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/default-default-client-scopes/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/default-default-client-scopes/{clientScopeId}`

<h3 id="putrealmdefault-default-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|clientScopeId|path|string|true|none|

<h3 id="putrealmdefault-default-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/default-default-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/default-default-client-scopes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/default-default-client-scopes/{clientScopeId}`

<h3 id="deleterealmdefault-default-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|clientScopeId|path|string|true|none|

<h3 id="deleterealmdefault-default-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get group hierarchy.

> Code samples

```bash
curl https://example.com/string/default-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/default-groups`

<h3 id="get-group-hierarchy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }
]
```

<h3 id="get-group-hierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-group-hierarchy-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/default-groups/{groupId}

> Code samples

```bash
curl https://example.com/string/default-groups/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/default-groups/{groupId}`

<h3 id="putrealmdefault-groupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|groupId|path|string|true|none|

<h3 id="putrealmdefault-groupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/default-groups/{groupId}

> Code samples

```bash
curl https://example.com/string/default-groups/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/default-groups/{groupId}`

<h3 id="deleterealmdefault-groupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|groupId|path|string|true|none|

<h3 id="deleterealmdefault-groupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm optional client scopes.

> Code samples

```bash
curl https://example.com/string/default-optional-client-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/default-optional-client-scopes`

<h3 id="get-realm-optional-client-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }
]
```

<h3 id="get-realm-optional-client-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-optional-client-scopes-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/default-optional-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/default-optional-client-scopes/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/default-optional-client-scopes/{clientScopeId}`

<h3 id="putrealmdefault-optional-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|clientScopeId|path|string|true|none|

<h3 id="putrealmdefault-optional-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/default-optional-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/default-optional-client-scopes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/default-optional-client-scopes/{clientScopeId}`

<h3 id="deleterealmdefault-optional-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|clientScopeId|path|string|true|none|

<h3 id="deleterealmdefault-optional-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get events Returns all events, or filters them based on URL query parameters listed here

> Code samples

```bash
curl https://example.com/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/events`

<h3 id="get-events-returns-all-events-or-filters-them-based-on-url-query-parameters-listed-here-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client|query|string|false|App or oauth client name|
|dateFrom|query|string|false|From date|
|dateTo|query|string|false|To date|
|first|query|integer(int32)|false|Paging offset|
|ipAddress|query|string|false|IP address|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|type|query|[string]|false|The types of events to return|
|user|query|string|false|User id|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "clientId": "string",
    "details": {},
    "error": "string",
    "ipAddress": "string",
    "realmId": "string",
    "sessionId": "string",
    "time": 0,
    "type": "string",
    "userId": "string"
  }
]
```

<h3 id="get-events-returns-all-events-or-filters-them-based-on-url-query-parameters-listed-here-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-events-returns-all-events-or-filters-them-based-on-url-query-parameters-listed-here-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventRepresentation](#schemaeventrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete all events

> Code samples

```bash
curl https://example.com/string/events \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/events`

<h3 id="delete-all-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="delete-all-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the events provider configuration Returns JSON object with events provider configuration

> Code samples

```bash
curl https://example.com/string/events/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/events/config`

<h3 id="get-the-events-provider-configuration-returns-json-object-with-events-provider-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ]
}
```

<h3 id="get-the-events-provider-configuration-returns-json-object-with-events-provider-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RealmEventsConfigRepresentation](#schemarealmeventsconfigrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the events provider Change the events provider and/or its configuration

> Code samples

```bash
curl https://example.com/string/events/config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminEventsDetailsEnabled": true,
    "adminEventsEnabled": true,
    "enabledEventTypes": [
      "string"
    ],
    "eventsEnabled": true,
    "eventsExpiration": 0,
    "eventsListeners": [
      "string"
    ]
  }'
```

`PUT /{realm}/events/config`

> Body parameter

```json
{
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ]
}
```

<h3 id="update-the-events-provider-change-the-events-provider-andor-its-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[RealmEventsConfigRepresentation](#schemarealmeventsconfigrepresentation)|true|none|
|» adminEventsDetailsEnabled|body|boolean|false|none|
|» adminEventsEnabled|body|boolean|false|none|
|» enabledEventTypes|body|[string]|false|none|
|» eventsEnabled|body|boolean|false|none|
|» eventsExpiration|body|integer(int64)|false|none|
|» eventsListeners|body|[string]|false|none|

<h3 id="update-the-events-provider-change-the-events-provider-andor-its-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/group-by-path/{path}

> Code samples

```bash
curl https://example.com/string/group-by-path/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/group-by-path/{path}`

<h3 id="getrealmgroup-by-pathpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|path|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {}
  ]
}
```

<h3 id="getrealmgroup-by-pathpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[GroupRepresentation](#schemagrouprepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Removes all user sessions.

> Code samples

```bash
curl https://example.com/string/logout-all \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/logout-all`

<h3 id="removes-all-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="removes-all-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Partial export of existing realm into a JSON file.

> Code samples

```bash
curl https://example.com/string/partial-export \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/partial-export`

<h3 id="partial-export-of-existing-realm-into-a-json-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportClients|query|boolean|false|none|
|exportGroupsAndRoles|query|boolean|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{
  "accessCodeLifespan": 0,
  "accessCodeLifespanLogin": 0,
  "accessCodeLifespanUserAction": 0,
  "accessTokenLifespan": 0,
  "accessTokenLifespanForImplicitFlow": 0,
  "accountTheme": "string",
  "actionTokenGeneratedByAdminLifespan": 0,
  "actionTokenGeneratedByUserLifespan": 0,
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "adminTheme": "string",
  "attributes": {},
  "authenticationFlows": [
    {
      "alias": "string",
      "authenticationExecutions": [
        {
          "authenticator": "string",
          "authenticatorConfig": "string",
          "authenticatorFlow": true,
          "autheticatorFlow": true,
          "flowAlias": "string",
          "priority": 0,
          "requirement": "string",
          "userSetupAllowed": true
        }
      ],
      "builtIn": true,
      "description": "string",
      "id": "string",
      "providerId": "string",
      "topLevel": true
    }
  ],
  "authenticatorConfig": [
    {
      "alias": "string",
      "config": {},
      "id": "string"
    }
  ],
  "browserFlow": "string",
  "browserSecurityHeaders": {},
  "bruteForceProtected": true,
  "clientAuthenticationFlow": "string",
  "clientScopeMappings": {},
  "clientScopes": [
    {
      "attributes": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ]
    }
  ],
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "components": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "defaultDefaultClientScopes": [
    "string"
  ],
  "defaultGroups": [
    "string"
  ],
  "defaultLocale": "string",
  "defaultOptionalClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "defaultSignatureAlgorithm": "string",
  "directGrantFlow": "string",
  "displayName": "string",
  "displayNameHtml": "string",
  "dockerAuthenticationFlow": "string",
  "duplicateEmailsAllowed": true,
  "editUsernameAllowed": true,
  "emailTheme": "string",
  "enabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ],
  "failureFactor": 0,
  "federatedUsers": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "id": "string",
  "identityProviderMappers": [
    {
      "config": {},
      "id": "string",
      "identityProviderAlias": "string",
      "identityProviderMapper": "string",
      "name": "string"
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "internationalizationEnabled": true,
  "keycloakVersion": "string",
  "loginTheme": "string",
  "loginWithEmailAllowed": true,
  "maxDeltaTimeSeconds": 0,
  "maxFailureWaitSeconds": 0,
  "minimumQuickLoginWaitSeconds": 0,
  "notBefore": 0,
  "offlineSessionIdleTimeout": 0,
  "offlineSessionMaxLifespan": 0,
  "offlineSessionMaxLifespanEnabled": true,
  "otpPolicyAlgorithm": "string",
  "otpPolicyDigits": 0,
  "otpPolicyInitialCounter": 0,
  "otpPolicyLookAheadWindow": 0,
  "otpPolicyPeriod": 0,
  "otpPolicyType": "string",
  "otpSupportedApplications": [
    "string"
  ],
  "passwordPolicy": "string",
  "permanentLockout": true,
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "quickLoginCheckMilliSeconds": 0,
  "realm": "string",
  "refreshTokenMaxReuse": 0,
  "registrationAllowed": true,
  "registrationEmailAsUsername": true,
  "registrationFlow": "string",
  "rememberMe": true,
  "requiredActions": [
    {
      "alias": "string",
      "config": {},
      "defaultAction": true,
      "enabled": true,
      "name": "string",
      "priority": 0,
      "providerId": "string"
    }
  ],
  "resetCredentialsFlow": "string",
  "resetPasswordAllowed": true,
  "revokeRefreshToken": true,
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "scopeMappings": [
    {
      "client": "string",
      "clientScope": "string",
      "roles": [
        "string"
      ],
      "self": "string"
    }
  ],
  "smtpServer": {},
  "sslRequired": "string",
  "ssoSessionIdleTimeout": 0,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespan": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "supportedLocales": [
    "string"
  ],
  "userFederationMappers": [
    {
      "config": {},
      "federationMapperType": "string",
      "federationProviderDisplayName": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "userFederationProviders": [
    {
      "changedSyncPeriod": 0,
      "config": {},
      "displayName": "string",
      "fullSyncPeriod": 0,
      "id": "string",
      "lastSync": 0,
      "priority": 0,
      "providerName": "string"
    }
  ],
  "userManagedAccessAllowed": true,
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "verifyEmail": true,
  "waitIncrementSeconds": 0,
  "webAuthnPolicyAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyAttestationConveyancePreference": "string",
  "webAuthnPolicyAuthenticatorAttachment": "string",
  "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessRequireResidentKey": "string",
  "webAuthnPolicyPasswordlessRpEntityName": "string",
  "webAuthnPolicyPasswordlessRpId": "string",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
  "webAuthnPolicyRequireResidentKey": "string",
  "webAuthnPolicyRpEntityName": "string",
  "webAuthnPolicyRpId": "string",
  "webAuthnPolicySignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyUserVerificationRequirement": "string"
}
```

<h3 id="partial-export-of-existing-realm-into-a-json-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RealmRepresentation](#schemarealmrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Partial import from a JSON file to an existing realm.

> Code samples

```bash
curl https://example.com/string/partialImport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clients": [
      {
        "access": {},
        "adminUrl": "string",
        "alwaysDisplayInConsole": true,
        "attributes": {},
        "authenticationFlowBindingOverrides": {},
        "authorizationServicesEnabled": true,
        "authorizationSettings": {
          "allowRemoteResourceManagement": true,
          "clientId": "string",
          "decisionStrategy": "AFFIRMATIVE",
          "id": "string",
          "name": "string",
          "policies": [
            {
              "config": {},
              "decisionStrategy": "AFFIRMATIVE",
              "description": "string",
              "id": "string",
              "logic": "POSITIVE",
              "name": "string",
              "owner": "string",
              "policies": [
                "string"
              ],
              "resources": [
                "string"
              ],
              "resourcesData": [
                {}
              ],
              "scopes": [
                "string"
              ],
              "scopesData": [
                {}
              ],
              "type": "string"
            }
          ],
          "policyEnforcementMode": "ENFORCING",
          "resources": [
            {
              "attributes": {},
              "displayName": "string",
              "icon_uri": "string",
              "id": "string",
              "name": "string",
              "ownerManagedAccess": true,
              "scopes": [
                {}
              ],
              "type": "string",
              "uris": [
                "string"
              ]
            }
          ],
          "scopes": [
            {
              "displayName": "string",
              "iconUri": "string",
              "id": "string",
              "name": "string",
              "policies": [
                {}
              ],
              "resources": [
                {}
              ]
            }
          ]
        },
        "baseUrl": "string",
        "bearerOnly": true,
        "clientAuthenticatorType": "string",
        "clientId": "string",
        "consentRequired": true,
        "defaultClientScopes": [
          "string"
        ],
        "defaultRoles": [
          "string"
        ],
        "description": "string",
        "directAccessGrantsEnabled": true,
        "enabled": true,
        "frontchannelLogout": true,
        "fullScopeAllowed": true,
        "id": "string",
        "implicitFlowEnabled": true,
        "name": "string",
        "nodeReRegistrationTimeout": 0,
        "notBefore": 0,
        "optionalClientScopes": [
          "string"
        ],
        "origin": "string",
        "protocol": "string",
        "protocolMappers": [
          {
            "config": {},
            "id": "string",
            "name": "string",
            "protocol": "string",
            "protocolMapper": "string"
          }
        ],
        "publicClient": true,
        "redirectUris": [
          "string"
        ],
        "registeredNodes": {},
        "registrationAccessToken": "string",
        "rootUrl": "string",
        "secret": "string",
        "serviceAccountsEnabled": true,
        "standardFlowEnabled": true,
        "surrogateAuthRequired": true,
        "webOrigins": [
          "string"
        ]
      }
    ],
    "groups": [
      {
        "access": {},
        "attributes": {},
        "clientRoles": {},
        "id": "string",
        "name": "string",
        "path": "string",
        "realmRoles": [
          "string"
        ],
        "subGroups": [
          {}
        ]
      }
    ],
    "identityProviders": [
      {
        "addReadTokenRoleOnCreate": true,
        "alias": "string",
        "config": {},
        "displayName": "string",
        "enabled": true,
        "firstBrokerLoginFlowAlias": "string",
        "internalId": "string",
        "linkOnly": true,
        "postBrokerLoginFlowAlias": "string",
        "providerId": "string",
        "storeToken": true,
        "trustEmail": true
      }
    ],
    "ifResourceExists": "string",
    "policy": "SKIP",
    "roles": {
      "client": {},
      "realm": [
        {
          "attributes": {},
          "clientRole": true,
          "composite": true,
          "composites": {
            "client": {},
            "realm": [
              "string"
            ]
          },
          "containerId": "string",
          "description": "string",
          "id": "string",
          "name": "string"
        }
      ]
    },
    "users": [
      {
        "access": {},
        "attributes": {},
        "clientConsents": [
          {
            "clientId": "string",
            "createdDate": 0,
            "grantedClientScopes": [
              "string"
            ],
            "lastUpdatedDate": 0
          }
        ],
        "clientRoles": {},
        "createdTimestamp": 0,
        "credentials": [
          {
            "createdDate": 0,
            "credentialData": "string",
            "id": "string",
            "priority": 0,
            "secretData": "string",
            "temporary": true,
            "type": "string",
            "userLabel": "string",
            "value": "string"
          }
        ],
        "disableableCredentialTypes": [
          "string"
        ],
        "email": "string",
        "emailVerified": true,
        "enabled": true,
        "federatedIdentities": [
          {
            "identityProvider": "string",
            "userId": "string",
            "userName": "string"
          }
        ],
        "federationLink": "string",
        "firstName": "string",
        "groups": [
          "string"
        ],
        "id": "string",
        "lastName": "string",
        "notBefore": 0,
        "origin": "string",
        "realmRoles": [
          "string"
        ],
        "requiredActions": [
          "string"
        ],
        "self": "string",
        "serviceAccountClientId": "string",
        "username": "string"
      }
    ]
  }'
```

`POST /{realm}/partialImport`

> Body parameter

```json
{
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "ifResourceExists": "string",
  "policy": "SKIP",
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ]
}
```

<h3 id="partial-import-from-a-json-file-to-an-existing-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[PartialImportRepresentation](#schemapartialimportrepresentation)|true|none|
|» clients|body|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|
|» groups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|
|» identityProviders|body|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|
|» ifResourceExists|body|string|false|none|
|» policy|body|string|false|none|
|» roles|body|[RolesRepresentation](#schemarolesrepresentation)|false|none|
|» users|body|[[UserRepresentation](#schemauserrepresentation)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» policy|SKIP|
|» policy|OVERWRITE|
|» policy|FAIL|

<h3 id="partial-import-from-a-json-file-to-an-existing-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Push the realm’s revocation policy to any client that has an admin url associated with it.

> Code samples

```bash
curl https://example.com/string/push-revocation \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/push-revocation`

<h3 id="push-the-realms-revocation-policy-to-any-client-that-has-an-admin-url-associated-with-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="push-the-realms-revocation-policy-to-any-client-that-has-an-admin-url-associated-with-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a specific user session.

> Code samples

```bash
curl https://example.com/string/sessions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/sessions/{session}`

<h3 id="remove-a-specific-user-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|session|path|string|true|none|

<h3 id="remove-a-specific-user-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Test LDAP connection

> Code samples

```bash
curl https://example.com/string/testLDAPConnection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "bindCredential": "string",
    "bindDn": "string",
    "componentId": "string",
    "connectionTimeout": "string",
    "connectionUrl": "string",
    "startTls": "string",
    "useTruststoreSpi": "string"
  }'
```

`POST /{realm}/testLDAPConnection`

> Body parameter

```json
{
  "action": "string",
  "bindCredential": "string",
  "bindDn": "string",
  "componentId": "string",
  "connectionTimeout": "string",
  "connectionUrl": "string",
  "startTls": "string",
  "useTruststoreSpi": "string"
}
```

<h3 id="test-ldap-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[TestLdapConnectionRepresentation](#schematestldapconnectionrepresentation)|true|none|
|» action|body|string|false|none|
|» bindCredential|body|string|false|none|
|» bindDn|body|string|false|none|
|» componentId|body|string|false|none|
|» connectionTimeout|body|string|false|none|
|» connectionUrl|body|string|false|none|
|» startTls|body|string|false|none|
|» useTruststoreSpi|body|string|false|none|

<h3 id="test-ldap-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## post/{realm}/testSMTPConnection

> Code samples

```bash
curl https://example.com/string/testSMTPConnection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/testSMTPConnection`

> Body parameter

```json
{}
```

<h3 id="postrealmtestsmtpconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|object|true|none|

<h3 id="postrealmtestsmtpconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/users-management-permissions

> Code samples

```bash
curl https://example.com/string/users-management-permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users-management-permissions`

<h3 id="getrealmusers-management-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="getrealmusers-management-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/users-management-permissions

> Code samples

```bash
curl https://example.com/string/users-management-permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/users-management-permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="putrealmusers-management-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="putrealmusers-management-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-user-storage-provider">User Storage Provider</h1>

## Need this for admin console to display simple name of provider when displaying client detail KEYCLOAK-4328

> Code samples

```bash
curl https://example.com/string/name \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{id}/name`

<h3 id="need-this-for-admin-console-to-display-simple-name-of-provider-when-displaying-client-detail-keycloak-4328-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="need-this-for-admin-console-to-display-simple-name-of-provider-when-displaying-client-detail-keycloak-4328-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Need this for admin console to display simple name of provider when displaying user detail KEYCLOAK-4328

> Code samples

```bash
curl https://example.com/string/user-storage/string/name \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/user-storage/{id}/name`

<h3 id="need-this-for-admin-console-to-display-simple-name-of-provider-when-displaying-user-detail-keycloak-4328-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="need-this-for-admin-console-to-display-simple-name-of-provider-when-displaying-user-detail-keycloak-4328-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove imported users

> Code samples

```bash
curl https://example.com/string/user-storage/string/remove-imported-users \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/user-storage/{id}/remove-imported-users`

<h3 id="remove-imported-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

<h3 id="remove-imported-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Trigger sync of users Action can be &quot;triggerFullSync&quot; or &quot;triggerChangedUsersSync&quot;

> Code samples

```bash
curl https://example.com/string/user-storage/string/sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/user-storage/{id}/sync`

<h3 id="trigger-sync-of-users-action-can-be-triggerfullsync-or-triggerchangeduserssync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "added": 0,
  "failed": 0,
  "ignored": true,
  "removed": 0,
  "status": "string",
  "updated": 0
}
```

<h3 id="trigger-sync-of-users-action-can-be-triggerfullsync-or-triggerchangeduserssync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[SynchronizationResult](#schemasynchronizationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Unlink imported users from a storage provider

> Code samples

```bash
curl https://example.com/string/user-storage/string/unlink-users \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/user-storage/{id}/unlink-users`

<h3 id="unlink-imported-users-from-a-storage-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

<h3 id="unlink-imported-users-from-a-storage-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Trigger sync of mapper data related to ldap mapper (roles, groups, …​) direction is &quot;fedToKeycloak&quot; or &quot;keycloakToFed&quot;

> Code samples

```bash
curl https://example.com/string/user-storage/string/mappers/string/sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/user-storage/{parentId}/mappers/{id}/sync`

<h3 id="trigger-sync-of-mapper-data-related-to-ldap-mapper-roles-groups-direction-is-fedtokeycloak-or-keycloaktofed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|parentId|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "added": 0,
  "failed": 0,
  "ignored": true,
  "removed": 0,
  "status": "string",
  "updated": 0
}
```

<h3 id="trigger-sync-of-mapper-data-related-to-ldap-mapper-roles-groups-direction-is-fedtokeycloak-or-keycloaktofed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[SynchronizationResult](#schemasynchronizationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-attack-detection">Attack Detection</h1>

## Clear any user login failures for all users This can release temporary disabled users

> Code samples

```bash
curl https://example.com/string/attack-detection/brute-force/users \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/attack-detection/brute-force/users`

<h3 id="clear-any-user-login-failures-for-all-users-this-can-release-temporary-disabled-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

<h3 id="clear-any-user-login-failures-for-all-users-this-can-release-temporary-disabled-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get status of a username in brute force detection

> Code samples

```bash
curl https://example.com/string/attack-detection/brute-force/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/attack-detection/brute-force/users/{userId}`

<h3 id="get-status-of-a-username-in-brute-force-detection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|userId|path|string|true|none|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="get-status-of-a-username-in-brute-force-detection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Clear any user login failures for the user This can release temporary disabled user

> Code samples

```bash
curl https://example.com/string/attack-detection/brute-force/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/attack-detection/brute-force/users/{userId}`

<h3 id="clear-any-user-login-failures-for-the-user-this-can-release-temporary-disabled-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|userId|path|string|true|none|

<h3 id="clear-any-user-login-failures-for-the-user-this-can-release-temporary-disabled-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-authentication-management">Authentication Management</h1>

## Get authenticator providers Returns a list of authenticator providers.

> Code samples

```bash
curl https://example.com/string/authentication/authenticator-providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/authenticator-providers`

<h3 id="get-authenticator-providers-returns-a-list-of-authenticator-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-authenticator-providers-returns-a-list-of-authenticator-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-authenticator-providers-returns-a-list-of-authenticator-providers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get client authenticator providers Returns a list of client authenticator providers.

> Code samples

```bash
curl https://example.com/string/authentication/client-authenticator-providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/client-authenticator-providers`

<h3 id="get-client-authenticator-providers-returns-a-list-of-client-authenticator-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-client-authenticator-providers-returns-a-list-of-client-authenticator-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-authenticator-providers-returns-a-list-of-client-authenticator-providers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get authenticator provider’s configuration description

> Code samples

```bash
curl https://example.com/string/authentication/config-description/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/config-description/{providerId}`

<h3 id="get-authenticator-providers-configuration-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|providerId|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "helpText": "string",
  "name": "string",
  "properties": [
    {
      "defaultValue": {},
      "helpText": "string",
      "label": "string",
      "name": "string",
      "options": [
        "string"
      ],
      "secret": true,
      "type": "string"
    }
  ],
  "providerId": "string"
}
```

<h3 id="get-authenticator-providers-configuration-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[AuthenticatorConfigInfoRepresentation](#schemaauthenticatorconfiginforepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get authenticator configuration

> Code samples

```bash
curl https://example.com/string/authentication/config/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/config/{id}`

<h3 id="get-authenticator-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Configuration id|

> Example responses

> 2XX Response

```json
{
  "alias": "string",
  "config": {},
  "id": "string"
}
```

<h3 id="get-authenticator-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update authenticator configuration

> Code samples

```bash
curl https://example.com/string/authentication/config/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "config": {},
    "id": "string"
  }'
```

`PUT /{realm}/authentication/config/{id}`

> Body parameter

```json
{
  "alias": "string",
  "config": {},
  "id": "string"
}
```

<h3 id="update-authenticator-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Configuration id|
|body|body|[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)|true|JSON describing new state of authenticator configuration|
|» alias|body|string|false|none|
|» config|body|object|false|none|
|» id|body|string|false|none|

<h3 id="update-authenticator-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete authenticator configuration

> Code samples

```bash
curl https://example.com/string/authentication/config/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/authentication/config/{id}`

<h3 id="delete-authenticator-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Configuration id|

<h3 id="delete-authenticator-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add new authentication execution

> Code samples

```bash
curl https://example.com/string/authentication/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authenticator": "string",
    "authenticatorConfig": "string",
    "authenticatorFlow": true,
    "autheticatorFlow": true,
    "flowId": "string",
    "id": "string",
    "parentFlow": "string",
    "priority": 0,
    "requirement": "string"
  }'
```

`POST /{realm}/authentication/executions`

> Body parameter

```json
{
  "authenticator": "string",
  "authenticatorConfig": "string",
  "authenticatorFlow": true,
  "autheticatorFlow": true,
  "flowId": "string",
  "id": "string",
  "parentFlow": "string",
  "priority": 0,
  "requirement": "string"
}
```

<h3 id="add-new-authentication-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[AuthenticationExecutionRepresentation](#schemaauthenticationexecutionrepresentation)|true|JSON model describing authentication execution|
|» authenticator|body|string|false|none|
|» authenticatorConfig|body|string|false|none|
|» authenticatorFlow|body|boolean|false|none|
|» autheticatorFlow|body|boolean|false|none|
|» flowId|body|string|false|none|
|» id|body|string|false|none|
|» parentFlow|body|string|false|none|
|» priority|body|integer(int32)|false|none|
|» requirement|body|string|false|none|

<h3 id="add-new-authentication-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get Single Execution

> Code samples

```bash
curl https://example.com/string/authentication/executions/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/executions/{executionId}`

<h3 id="get-single-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|executionId|path|string|true|Execution id|

<h3 id="get-single-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete execution

> Code samples

```bash
curl https://example.com/string/authentication/executions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/authentication/executions/{executionId}`

<h3 id="delete-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|executionId|path|string|true|Execution id|

<h3 id="delete-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update execution with new configuration

> Code samples

```bash
curl https://example.com/string/authentication/executions/string/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "config": {},
    "id": "string"
  }'
```

`POST /{realm}/authentication/executions/{executionId}/config`

> Body parameter

```json
{
  "alias": "string",
  "config": {},
  "id": "string"
}
```

<h3 id="update-execution-with-new-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|executionId|path|string|true|Execution id|
|body|body|[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)|true|JSON with new configuration|
|» alias|body|string|false|none|
|» config|body|object|false|none|
|» id|body|string|false|none|

<h3 id="update-execution-with-new-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Lower execution’s priority

> Code samples

```bash
curl https://example.com/string/authentication/executions/string/lower-priority \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/authentication/executions/{executionId}/lower-priority`

<h3 id="lower-executions-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|executionId|path|string|true|Execution id|

<h3 id="lower-executions-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Raise execution’s priority

> Code samples

```bash
curl https://example.com/string/authentication/executions/string/raise-priority \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/authentication/executions/{executionId}/raise-priority`

<h3 id="raise-executions-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|executionId|path|string|true|Execution id|

<h3 id="raise-executions-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get authentication flows Returns a list of authentication flows.

> Code samples

```bash
curl https://example.com/string/authentication/flows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/flows`

<h3 id="get-authentication-flows-returns-a-list-of-authentication-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "alias": "string",
    "authenticationExecutions": [
      {
        "authenticator": "string",
        "authenticatorConfig": "string",
        "authenticatorFlow": true,
        "autheticatorFlow": true,
        "flowAlias": "string",
        "priority": 0,
        "requirement": "string",
        "userSetupAllowed": true
      }
    ],
    "builtIn": true,
    "description": "string",
    "id": "string",
    "providerId": "string",
    "topLevel": true
  }
]
```

<h3 id="get-authentication-flows-returns-a-list-of-authentication-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-authentication-flows-returns-a-list-of-authentication-flows-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new authentication flow

> Code samples

```bash
curl https://example.com/string/authentication/flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "authenticationExecutions": [
      {
        "authenticator": "string",
        "authenticatorConfig": "string",
        "authenticatorFlow": true,
        "autheticatorFlow": true,
        "flowAlias": "string",
        "priority": 0,
        "requirement": "string",
        "userSetupAllowed": true
      }
    ],
    "builtIn": true,
    "description": "string",
    "id": "string",
    "providerId": "string",
    "topLevel": true
  }'
```

`POST /{realm}/authentication/flows`

> Body parameter

```json
{
  "alias": "string",
  "authenticationExecutions": [
    {
      "authenticator": "string",
      "authenticatorConfig": "string",
      "authenticatorFlow": true,
      "autheticatorFlow": true,
      "flowAlias": "string",
      "priority": 0,
      "requirement": "string",
      "userSetupAllowed": true
    }
  ],
  "builtIn": true,
  "description": "string",
  "id": "string",
  "providerId": "string",
  "topLevel": true
}
```

<h3 id="create-a-new-authentication-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)|true|Authentication flow representation|
|» alias|body|string|false|none|
|» authenticationExecutions|body|[[AuthenticationExecutionExportRepresentation](#schemaauthenticationexecutionexportrepresentation)]|false|none|
|» builtIn|body|boolean|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» providerId|body|string|false|none|
|» topLevel|body|boolean|false|none|

<h3 id="create-a-new-authentication-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Copy existing authentication flow under a new name The new name is given as 'newName' attribute of the passed JSON object

> Code samples

```bash
curl https://example.com/string/authentication/flows/string/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/authentication/flows/{flowAlias}/copy`

> Body parameter

```json
{}
```

<h3 id="copy-existing-authentication-flow-under-a-new-name-the-new-name-is-given-as-newname-attribute-of-the-passed-json-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|flowAlias|path|string|true|Name of the existing authentication flow|
|body|body|object|true|JSON containing 'newName' attribute|

<h3 id="copy-existing-authentication-flow-under-a-new-name-the-new-name-is-given-as-newname-attribute-of-the-passed-json-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get authentication executions for a flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string/executions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/flows/{flowAlias}/executions`

<h3 id="get-authentication-executions-for-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|flowAlias|path|string|true|Flow alias|

<h3 id="get-authentication-executions-for-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update authentication executions of a flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string/executions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "authenticationConfig": "string",
    "authenticationFlow": true,
    "configurable": true,
    "displayName": "string",
    "flowId": "string",
    "id": "string",
    "index": 0,
    "level": 0,
    "providerId": "string",
    "requirement": "string",
    "requirementChoices": [
      "string"
    ]
  }'
```

`PUT /{realm}/authentication/flows/{flowAlias}/executions`

> Body parameter

```json
{
  "alias": "string",
  "authenticationConfig": "string",
  "authenticationFlow": true,
  "configurable": true,
  "displayName": "string",
  "flowId": "string",
  "id": "string",
  "index": 0,
  "level": 0,
  "providerId": "string",
  "requirement": "string",
  "requirementChoices": [
    "string"
  ]
}
```

<h3 id="update-authentication-executions-of-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|flowAlias|path|string|true|Flow alias|
|body|body|[AuthenticationExecutionInfoRepresentation](#schemaauthenticationexecutioninforepresentation)|true|none|
|» alias|body|string|false|none|
|» authenticationConfig|body|string|false|none|
|» authenticationFlow|body|boolean|false|none|
|» configurable|body|boolean|false|none|
|» displayName|body|string|false|none|
|» flowId|body|string|false|none|
|» id|body|string|false|none|
|» index|body|integer(int32)|false|none|
|» level|body|integer(int32)|false|none|
|» providerId|body|string|false|none|
|» requirement|body|string|false|none|
|» requirementChoices|body|[string]|false|none|

<h3 id="update-authentication-executions-of-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add new authentication execution to a flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string/executions/execution \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/authentication/flows/{flowAlias}/executions/execution`

> Body parameter

```json
{}
```

<h3 id="add-new-authentication-execution-to-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|flowAlias|path|string|true|Alias of parent flow|
|body|body|object|true|New execution JSON data containing 'provider' attribute|

<h3 id="add-new-authentication-execution-to-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add new flow with new execution to existing flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string/executions/flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/authentication/flows/{flowAlias}/executions/flow`

> Body parameter

```json
{}
```

<h3 id="add-new-flow-with-new-execution-to-existing-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|flowAlias|path|string|true|Alias of parent authentication flow|
|body|body|object|true|New authentication flow / execution JSON data containing 'alias', 'type', 'provider', and 'description' attributes|

<h3 id="add-new-flow-with-new-execution-to-existing-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get authentication flow for id

> Code samples

```bash
curl https://example.com/string/authentication/flows/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/flows/{id}`

<h3 id="get-authentication-flow-for-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Flow id|

> Example responses

> 2XX Response

```json
{
  "alias": "string",
  "authenticationExecutions": [
    {
      "authenticator": "string",
      "authenticatorConfig": "string",
      "authenticatorFlow": true,
      "autheticatorFlow": true,
      "flowAlias": "string",
      "priority": 0,
      "requirement": "string",
      "userSetupAllowed": true
    }
  ],
  "builtIn": true,
  "description": "string",
  "id": "string",
  "providerId": "string",
  "topLevel": true
}
```

<h3 id="get-authentication-flow-for-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update an authentication flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "authenticationExecutions": [
      {
        "authenticator": "string",
        "authenticatorConfig": "string",
        "authenticatorFlow": true,
        "autheticatorFlow": true,
        "flowAlias": "string",
        "priority": 0,
        "requirement": "string",
        "userSetupAllowed": true
      }
    ],
    "builtIn": true,
    "description": "string",
    "id": "string",
    "providerId": "string",
    "topLevel": true
  }'
```

`PUT /{realm}/authentication/flows/{id}`

> Body parameter

```json
{
  "alias": "string",
  "authenticationExecutions": [
    {
      "authenticator": "string",
      "authenticatorConfig": "string",
      "authenticatorFlow": true,
      "autheticatorFlow": true,
      "flowAlias": "string",
      "priority": 0,
      "requirement": "string",
      "userSetupAllowed": true
    }
  ],
  "builtIn": true,
  "description": "string",
  "id": "string",
  "providerId": "string",
  "topLevel": true
}
```

<h3 id="update-an-authentication-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Flow id|
|body|body|[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)|true|Authentication flow representation|
|» alias|body|string|false|none|
|» authenticationExecutions|body|[[AuthenticationExecutionExportRepresentation](#schemaauthenticationexecutionexportrepresentation)]|false|none|
|» builtIn|body|boolean|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» providerId|body|string|false|none|
|» topLevel|body|boolean|false|none|

<h3 id="update-an-authentication-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete an authentication flow

> Code samples

```bash
curl https://example.com/string/authentication/flows/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/authentication/flows/{id}`

<h3 id="delete-an-authentication-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|Flow id|

<h3 id="delete-an-authentication-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get form action providers Returns a list of form action providers.

> Code samples

```bash
curl https://example.com/string/authentication/form-action-providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/form-action-providers`

<h3 id="get-form-action-providers-returns-a-list-of-form-action-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-form-action-providers-returns-a-list-of-form-action-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-form-action-providers-returns-a-list-of-form-action-providers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get form providers Returns a list of form providers.

> Code samples

```bash
curl https://example.com/string/authentication/form-providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/form-providers`

<h3 id="get-form-providers-returns-a-list-of-form-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-form-providers-returns-a-list-of-form-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-form-providers-returns-a-list-of-form-providers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get configuration descriptions for all clients

> Code samples

```bash
curl https://example.com/string/authentication/per-client-config-description \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/per-client-config-description`

<h3 id="get-configuration-descriptions-for-all-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="get-configuration-descriptions-for-all-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Register a new required actions

> Code samples

```bash
curl https://example.com/string/authentication/register-required-action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/authentication/register-required-action`

> Body parameter

```json
{}
```

<h3 id="register-a-new-required-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|object|true|JSON containing 'providerId', and 'name' attributes.|

<h3 id="register-a-new-required-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get required actions Returns a list of required actions.

> Code samples

```bash
curl https://example.com/string/authentication/required-actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/required-actions`

<h3 id="get-required-actions-returns-a-list-of-required-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "alias": "string",
    "config": {},
    "defaultAction": true,
    "enabled": true,
    "name": "string",
    "priority": 0,
    "providerId": "string"
  }
]
```

<h3 id="get-required-actions-returns-a-list-of-required-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-required-actions-returns-a-list-of-required-actions-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get required action for alias

> Code samples

```bash
curl https://example.com/string/authentication/required-actions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/required-actions/{alias}`

<h3 id="get-required-action-for-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|Alias of required action|

> Example responses

> 2XX Response

```json
{
  "alias": "string",
  "config": {},
  "defaultAction": true,
  "enabled": true,
  "name": "string",
  "priority": 0,
  "providerId": "string"
}
```

<h3 id="get-required-action-for-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update required action

> Code samples

```bash
curl https://example.com/string/authentication/required-actions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "config": {},
    "defaultAction": true,
    "enabled": true,
    "name": "string",
    "priority": 0,
    "providerId": "string"
  }'
```

`PUT /{realm}/authentication/required-actions/{alias}`

> Body parameter

```json
{
  "alias": "string",
  "config": {},
  "defaultAction": true,
  "enabled": true,
  "name": "string",
  "priority": 0,
  "providerId": "string"
}
```

<h3 id="update-required-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|Alias of required action|
|body|body|[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)|true|JSON describing new state of required action|
|» alias|body|string|false|none|
|» config|body|object|false|none|
|» defaultAction|body|boolean|false|none|
|» enabled|body|boolean|false|none|
|» name|body|string|false|none|
|» priority|body|integer(int32)|false|none|
|» providerId|body|string|false|none|

<h3 id="update-required-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete required action

> Code samples

```bash
curl https://example.com/string/authentication/required-actions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/authentication/required-actions/{alias}`

<h3 id="delete-required-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|Alias of required action|

<h3 id="delete-required-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Lower required action’s priority

> Code samples

```bash
curl https://example.com/string/authentication/required-actions/string/lower-priority \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/authentication/required-actions/{alias}/lower-priority`

<h3 id="lower-required-actions-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|Alias of required action|

<h3 id="lower-required-actions-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Raise required action’s priority

> Code samples

```bash
curl https://example.com/string/authentication/required-actions/string/raise-priority \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/authentication/required-actions/{alias}/raise-priority`

<h3 id="raise-required-actions-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|Alias of required action|

<h3 id="raise-required-actions-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get unregistered required actions Returns a list of unregistered required actions.

> Code samples

```bash
curl https://example.com/string/authentication/unregistered-required-actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/authentication/unregistered-required-actions`

<h3 id="get-unregistered-required-actions-returns-a-list-of-unregistered-required-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-unregistered-required-actions-returns-a-list-of-unregistered-required-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-unregistered-required-actions-returns-a-list-of-unregistered-required-actions-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-client-registration-policy">Client Registration Policy</h1>

## Base path for retrieve providers with the configProperties properly filled

> Code samples

```bash
curl https://example.com/string/client-registration-policy/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-registration-policy/providers`

<h3 id="base-path-for-retrieve-providers-with-the-configproperties-properly-filled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "helpText": "string",
    "id": "string",
    "metadata": {},
    "properties": [
      {
        "defaultValue": {},
        "helpText": "string",
        "label": "string",
        "name": "string",
        "options": [
          "string"
        ],
        "secret": true,
        "type": "string"
      }
    ]
  }
]
```

<h3 id="base-path-for-retrieve-providers-with-the-configproperties-properly-filled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="base-path-for-retrieve-providers-with-the-configproperties-properly-filled-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ComponentTypeRepresentation](#schemacomponenttyperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-client-scopes">Client Scopes</h1>

## Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm

> Code samples

```bash
curl https://example.com/string/client-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes`

<h3 id="get-client-scopes-belonging-to-the-realm-returns-a-list-of-client-scopes-belonging-to-the-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }
]
```

<h3 id="get-client-scopes-belonging-to-the-realm-returns-a-list-of-client-scopes-belonging-to-the-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-scopes-belonging-to-the-realm-returns-a-list-of-client-scopes-belonging-to-the-realm-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new client scope Client Scope’s name must be unique!

> Code samples

```bash
curl https://example.com/string/client-scopes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }'
```

`POST /{realm}/client-scopes`

> Body parameter

```json
{
  "attributes": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]
}
```

<h3 id="create-a-new-client-scope-client-scopes-name-must-be-unique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[ClientScopeRepresentation](#schemaclientscoperepresentation)|true|none|
|» attributes|body|object|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|

<h3 id="create-a-new-client-scope-client-scopes-name-must-be-unique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get representation of the client scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}`

<h3 id="get-representation-of-the-client-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
{
  "attributes": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]
}
```

<h3 id="get-representation-of-the-client-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ClientScopeRepresentation](#schemaclientscoperepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the client scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }'
```

`PUT /{realm}/client-scopes/{id}`

> Body parameter

```json
{
  "attributes": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]
}
```

<h3 id="update-the-client-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|body|body|[ClientScopeRepresentation](#schemaclientscoperepresentation)|true|none|
|» attributes|body|object|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|

<h3 id="update-the-client-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the client scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/client-scopes/{id}`

<h3 id="delete-the-client-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

<h3 id="delete-the-client-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-protocol-mappers">Protocol Mappers</h1>

## Get mapper by id

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}`

<h3 id="get-mapper-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="get-mapper-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the mapper

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/models/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }'
```

`PUT /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="update-the-mapper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|
|body|body|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMapper|body|string|false|none|

<h3 id="update-the-mapper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the mapper

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/models/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}`

<h3 id="delete-the-mapper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|

<h3 id="delete-the-mapper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create multiple mappers

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/add-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]'
```

`POST /{realm}/client-scopes/{id}/protocol-mappers/add-models`

> Body parameter

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="create-multiple-mappers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|body|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|true|none|

<h3 id="create-multiple-mappers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mappers

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/protocol-mappers/models`

<h3 id="get-mappers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="get-mappers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-mappers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a mapper

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }'
```

`POST /{realm}/client-scopes/{id}/protocol-mappers/models`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="create-a-mapper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|body|body|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMapper|body|string|false|none|

<h3 id="create-a-mapper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mappers by name for a specific protocol

> Code samples

```bash
curl https://example.com/string/client-scopes/string/protocol-mappers/protocol/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}`

<h3 id="get-mappers-by-name-for-a-specific-protocol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|protocol|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="get-mappers-by-name-for-a-specific-protocol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-mappers-by-name-for-a-specific-protocol-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mapper by id

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id1}/protocol-mappers/models/{id2}`

<h3 id="get-mapper-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="get-mapper-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the mapper

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/models/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }'
```

`PUT /{realm}/clients/{id1}/protocol-mappers/models/{id2}`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="update-the-mapper-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|
|body|body|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMapper|body|string|false|none|

<h3 id="update-the-mapper-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the mapper

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/models/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id1}/protocol-mappers/models/{id2}`

<h3 id="delete-the-mapper-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id1|path|string|true|none|
|id2|path|string|true|none|

<h3 id="delete-the-mapper-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create multiple mappers

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/add-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]'
```

`POST /{realm}/clients/{id}/protocol-mappers/add-models`

> Body parameter

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="create-multiple-mappers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|true|none|

<h3 id="create-multiple-mappers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mappers

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/protocol-mappers/models`

<h3 id="get-mappers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="get-mappers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-mappers-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a mapper

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }'
```

`POST /{realm}/clients/{id}/protocol-mappers/models`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

<h3 id="create-a-mapper-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMapper|body|string|false|none|

<h3 id="create-a-mapper-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mappers by name for a specific protocol

> Code samples

```bash
curl https://example.com/string/clients/string/protocol-mappers/protocol/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/protocol-mappers/protocol/{protocol}`

<h3 id="get-mappers-by-name-for-a-specific-protocol-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|protocol|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "config": {},
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="get-mappers-by-name-for-a-specific-protocol-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-mappers-by-name-for-a-specific-protocol-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-scope-mappings">Scope Mappings</h1>

## Get all scope mappings for the client

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings`

<h3 id="get-all-scope-mappings-for-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
{
  "clientMappings": {},
  "realmMappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-all-scope-mappings-for-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[MappingsRepresentation](#schemamappingsrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the roles associated with a client’s scope Returns roles for the client.

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/clients/{client}`

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add client-level roles to the client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/clients/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/client-scopes/{id}/scope-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-client-level-roles-to-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-client-level-roles-to-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove client-level roles from the client’s scope.

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/clients/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/client-scopes/{id}/scope-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-client-level-roles-from-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="remove-client-level-roles-from-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## The available client-level roles Returns the roles for the client that can be associated with the client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/clients/string/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available`

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective client roles Returns the roles for the client that are associated with the client’s scope.

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/clients/string/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite`

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles associated with the client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/realm`

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a set of realm-level roles to the client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/realm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/client-scopes/{id}/scope-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-a-set-of-realm-level-roles-to-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-a-set-of-realm-level-roles-to-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a set of realm-level roles from the client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/realm \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/client-scopes/{id}/scope-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-a-set-of-realm-level-roles-from-the-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="remove-a-set-of-realm-level-roles-from-the-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles that are available to attach to this client’s scope

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/realm/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/realm/available`

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective realm-level roles associated with the client’s scope What this does is recurse any composite roles associated with the client’s scope and adds the roles to this lists.

> Code samples

```bash
curl https://example.com/string/client-scopes/string/scope-mappings/realm/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/client-scopes/{id}/scope-mappings/realm/composite`

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client scope (not name)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get all scope mappings for the client

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings`

<h3 id="get-all-scope-mappings-for-the-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "clientMappings": {},
  "realmMappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-all-scope-mappings-for-the-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[MappingsRepresentation](#schemamappingsrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the roles associated with a client’s scope Returns roles for the client.

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/clients/{client}`

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-the-roles-associated-with-a-clients-scope-returns-roles-for-the-client-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add client-level roles to the client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/clients/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/clients/{id}/scope-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-client-level-roles-to-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-client-level-roles-to-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove client-level roles from the client’s scope.

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/clients/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/clients/{id}/scope-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-client-level-roles-from-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="remove-client-level-roles-from-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## The available client-level roles Returns the roles for the client that can be associated with the client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/clients/string/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/clients/{client}/available`

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="the-available-client-level-roles-returns-the-roles-for-the-client-that-can-be-associated-with-the-clients-scope-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective client roles Returns the roles for the client that are associated with the client’s scope.

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/clients/string/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/clients/{client}/composite`

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-client-roles-returns-the-roles-for-the-client-that-are-associated-with-the-clients-scope-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles associated with the client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/realm`

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-associated-with-the-clients-scope-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a set of realm-level roles to the client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/realm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/clients/{id}/scope-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-a-set-of-realm-level-roles-to-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-a-set-of-realm-level-roles-to-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a set of realm-level roles from the client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/realm \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/clients/{id}/scope-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-a-set-of-realm-level-roles-from-the-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="remove-a-set-of-realm-level-roles-from-the-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles that are available to attach to this client’s scope

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/realm/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/realm/available`

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-that-are-available-to-attach-to-this-clients-scope-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective realm-level roles associated with the client’s scope What this does is recurse any composite roles associated with the client’s scope and adds the roles to this lists.

> Code samples

```bash
curl https://example.com/string/clients/string/scope-mappings/realm/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/scope-mappings/realm/composite`

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-realm-level-roles-associated-with-the-clients-scope-what-this-does-is-recurse-any-composite-roles-associated-with-the-clients-scope-and-adds-the-roles-to-this-lists-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-clients">Clients</h1>

## Get clients belonging to the realm Returns a list of clients belonging to the realm

> Code samples

```bash
curl https://example.com/string/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients`

<h3 id="get-clients-belonging-to-the-realm-returns-a-list-of-clients-belonging-to-the-realm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|query|string|false|filter by clientId|
|first|query|integer(int32)|false|the first result|
|max|query|integer(int32)|false|the max results to return|
|search|query|boolean|false|whether this is a search query or a getClientById query|
|viewableOnly|query|boolean|false|filter clients that cannot be viewed in full by admin|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "adminUrl": "string",
    "alwaysDisplayInConsole": true,
    "attributes": {},
    "authenticationFlowBindingOverrides": {},
    "authorizationServicesEnabled": true,
    "authorizationSettings": {
      "allowRemoteResourceManagement": true,
      "clientId": "string",
      "decisionStrategy": "AFFIRMATIVE",
      "id": "string",
      "name": "string",
      "policies": [
        {
          "config": {},
          "decisionStrategy": "AFFIRMATIVE",
          "description": "string",
          "id": "string",
          "logic": "POSITIVE",
          "name": "string",
          "owner": "string",
          "policies": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "resourcesData": [
            {}
          ],
          "scopes": [
            "string"
          ],
          "scopesData": [
            {}
          ],
          "type": "string"
        }
      ],
      "policyEnforcementMode": "ENFORCING",
      "resources": [
        {
          "attributes": {},
          "displayName": "string",
          "icon_uri": "string",
          "id": "string",
          "name": "string",
          "ownerManagedAccess": true,
          "scopes": [
            {}
          ],
          "type": "string",
          "uris": [
            "string"
          ]
        }
      ],
      "scopes": [
        {
          "displayName": "string",
          "iconUri": "string",
          "id": "string",
          "name": "string",
          "policies": [
            {}
          ],
          "resources": [
            {}
          ]
        }
      ]
    },
    "baseUrl": "string",
    "bearerOnly": true,
    "clientAuthenticatorType": "string",
    "clientId": "string",
    "consentRequired": true,
    "defaultClientScopes": [
      "string"
    ],
    "defaultRoles": [
      "string"
    ],
    "description": "string",
    "directAccessGrantsEnabled": true,
    "enabled": true,
    "frontchannelLogout": true,
    "fullScopeAllowed": true,
    "id": "string",
    "implicitFlowEnabled": true,
    "name": "string",
    "nodeReRegistrationTimeout": 0,
    "notBefore": 0,
    "optionalClientScopes": [
      "string"
    ],
    "origin": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ],
    "publicClient": true,
    "redirectUris": [
      "string"
    ],
    "registeredNodes": {},
    "registrationAccessToken": "string",
    "rootUrl": "string",
    "secret": "string",
    "serviceAccountsEnabled": true,
    "standardFlowEnabled": true,
    "surrogateAuthRequired": true,
    "webOrigins": [
      "string"
    ]
  }
]
```

<h3 id="get-clients-belonging-to-the-realm-returns-a-list-of-clients-belonging-to-the-realm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-clients-belonging-to-the-realm-returns-a-list-of-clients-belonging-to-the-realm-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new client Client’s client_id must be unique!

> Code samples

```bash
curl https://example.com/string/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "adminUrl": "string",
    "alwaysDisplayInConsole": true,
    "attributes": {},
    "authenticationFlowBindingOverrides": {},
    "authorizationServicesEnabled": true,
    "authorizationSettings": {
      "allowRemoteResourceManagement": true,
      "clientId": "string",
      "decisionStrategy": "AFFIRMATIVE",
      "id": "string",
      "name": "string",
      "policies": [
        {
          "config": {},
          "decisionStrategy": "AFFIRMATIVE",
          "description": "string",
          "id": "string",
          "logic": "POSITIVE",
          "name": "string",
          "owner": "string",
          "policies": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "resourcesData": [
            {}
          ],
          "scopes": [
            "string"
          ],
          "scopesData": [
            {}
          ],
          "type": "string"
        }
      ],
      "policyEnforcementMode": "ENFORCING",
      "resources": [
        {
          "attributes": {},
          "displayName": "string",
          "icon_uri": "string",
          "id": "string",
          "name": "string",
          "ownerManagedAccess": true,
          "scopes": [
            {}
          ],
          "type": "string",
          "uris": [
            "string"
          ]
        }
      ],
      "scopes": [
        {
          "displayName": "string",
          "iconUri": "string",
          "id": "string",
          "name": "string",
          "policies": [
            {}
          ],
          "resources": [
            {}
          ]
        }
      ]
    },
    "baseUrl": "string",
    "bearerOnly": true,
    "clientAuthenticatorType": "string",
    "clientId": "string",
    "consentRequired": true,
    "defaultClientScopes": [
      "string"
    ],
    "defaultRoles": [
      "string"
    ],
    "description": "string",
    "directAccessGrantsEnabled": true,
    "enabled": true,
    "frontchannelLogout": true,
    "fullScopeAllowed": true,
    "id": "string",
    "implicitFlowEnabled": true,
    "name": "string",
    "nodeReRegistrationTimeout": 0,
    "notBefore": 0,
    "optionalClientScopes": [
      "string"
    ],
    "origin": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ],
    "publicClient": true,
    "redirectUris": [
      "string"
    ],
    "registeredNodes": {},
    "registrationAccessToken": "string",
    "rootUrl": "string",
    "secret": "string",
    "serviceAccountsEnabled": true,
    "standardFlowEnabled": true,
    "surrogateAuthRequired": true,
    "webOrigins": [
      "string"
    ]
  }'
```

`POST /{realm}/clients`

> Body parameter

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

<h3 id="create-a-new-client-clients-clientid-must-be-unique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[ClientRepresentation](#schemaclientrepresentation)|true|none|
|» access|body|object|false|none|
|» adminUrl|body|string|false|none|
|» alwaysDisplayInConsole|body|boolean|false|none|
|» attributes|body|object|false|none|
|» authenticationFlowBindingOverrides|body|object|false|none|
|» authorizationServicesEnabled|body|boolean|false|none|
|» authorizationSettings|body|[ResourceServerRepresentation](#schemaresourceserverrepresentation)|false|none|
|» baseUrl|body|string|false|none|
|» bearerOnly|body|boolean|false|none|
|» clientAuthenticatorType|body|string|false|none|
|» clientId|body|string|false|none|
|» consentRequired|body|boolean|false|none|
|» defaultClientScopes|body|[string]|false|none|
|» defaultRoles|body|[string]|false|none|
|» description|body|string|false|none|
|» directAccessGrantsEnabled|body|boolean|false|none|
|» enabled|body|boolean|false|none|
|» frontchannelLogout|body|boolean|false|none|
|» fullScopeAllowed|body|boolean|false|none|
|» id|body|string|false|none|
|» implicitFlowEnabled|body|boolean|false|none|
|» name|body|string|false|none|
|» nodeReRegistrationTimeout|body|integer(int32)|false|none|
|» notBefore|body|integer(int32)|false|none|
|» optionalClientScopes|body|[string]|false|none|
|» origin|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|
|» publicClient|body|boolean|false|none|
|» redirectUris|body|[string]|false|none|
|» registeredNodes|body|object|false|none|
|» registrationAccessToken|body|string|false|none|
|» rootUrl|body|string|false|none|
|» secret|body|string|false|none|
|» serviceAccountsEnabled|body|boolean|false|none|
|» standardFlowEnabled|body|boolean|false|none|
|» surrogateAuthRequired|body|boolean|false|none|
|» webOrigins|body|[string]|false|none|

<h3 id="create-a-new-client-clients-clientid-must-be-unique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get representation of the client

> Code samples

```bash
curl https://example.com/string/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}`

<h3 id="get-representation-of-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

<h3 id="get-representation-of-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ClientRepresentation](#schemaclientrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the client

> Code samples

```bash
curl https://example.com/string/clients/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "adminUrl": "string",
    "alwaysDisplayInConsole": true,
    "attributes": {},
    "authenticationFlowBindingOverrides": {},
    "authorizationServicesEnabled": true,
    "authorizationSettings": {
      "allowRemoteResourceManagement": true,
      "clientId": "string",
      "decisionStrategy": "AFFIRMATIVE",
      "id": "string",
      "name": "string",
      "policies": [
        {
          "config": {},
          "decisionStrategy": "AFFIRMATIVE",
          "description": "string",
          "id": "string",
          "logic": "POSITIVE",
          "name": "string",
          "owner": "string",
          "policies": [
            "string"
          ],
          "resources": [
            "string"
          ],
          "resourcesData": [
            {}
          ],
          "scopes": [
            "string"
          ],
          "scopesData": [
            {}
          ],
          "type": "string"
        }
      ],
      "policyEnforcementMode": "ENFORCING",
      "resources": [
        {
          "attributes": {},
          "displayName": "string",
          "icon_uri": "string",
          "id": "string",
          "name": "string",
          "ownerManagedAccess": true,
          "scopes": [
            {}
          ],
          "type": "string",
          "uris": [
            "string"
          ]
        }
      ],
      "scopes": [
        {
          "displayName": "string",
          "iconUri": "string",
          "id": "string",
          "name": "string",
          "policies": [
            {}
          ],
          "resources": [
            {}
          ]
        }
      ]
    },
    "baseUrl": "string",
    "bearerOnly": true,
    "clientAuthenticatorType": "string",
    "clientId": "string",
    "consentRequired": true,
    "defaultClientScopes": [
      "string"
    ],
    "defaultRoles": [
      "string"
    ],
    "description": "string",
    "directAccessGrantsEnabled": true,
    "enabled": true,
    "frontchannelLogout": true,
    "fullScopeAllowed": true,
    "id": "string",
    "implicitFlowEnabled": true,
    "name": "string",
    "nodeReRegistrationTimeout": 0,
    "notBefore": 0,
    "optionalClientScopes": [
      "string"
    ],
    "origin": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ],
    "publicClient": true,
    "redirectUris": [
      "string"
    ],
    "registeredNodes": {},
    "registrationAccessToken": "string",
    "rootUrl": "string",
    "secret": "string",
    "serviceAccountsEnabled": true,
    "standardFlowEnabled": true,
    "surrogateAuthRequired": true,
    "webOrigins": [
      "string"
    ]
  }'
```

`PUT /{realm}/clients/{id}`

> Body parameter

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

<h3 id="update-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[ClientRepresentation](#schemaclientrepresentation)|true|none|
|» access|body|object|false|none|
|» adminUrl|body|string|false|none|
|» alwaysDisplayInConsole|body|boolean|false|none|
|» attributes|body|object|false|none|
|» authenticationFlowBindingOverrides|body|object|false|none|
|» authorizationServicesEnabled|body|boolean|false|none|
|» authorizationSettings|body|[ResourceServerRepresentation](#schemaresourceserverrepresentation)|false|none|
|» baseUrl|body|string|false|none|
|» bearerOnly|body|boolean|false|none|
|» clientAuthenticatorType|body|string|false|none|
|» clientId|body|string|false|none|
|» consentRequired|body|boolean|false|none|
|» defaultClientScopes|body|[string]|false|none|
|» defaultRoles|body|[string]|false|none|
|» description|body|string|false|none|
|» directAccessGrantsEnabled|body|boolean|false|none|
|» enabled|body|boolean|false|none|
|» frontchannelLogout|body|boolean|false|none|
|» fullScopeAllowed|body|boolean|false|none|
|» id|body|string|false|none|
|» implicitFlowEnabled|body|boolean|false|none|
|» name|body|string|false|none|
|» nodeReRegistrationTimeout|body|integer(int32)|false|none|
|» notBefore|body|integer(int32)|false|none|
|» optionalClientScopes|body|[string]|false|none|
|» origin|body|string|false|none|
|» protocol|body|string|false|none|
|» protocolMappers|body|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|
|» publicClient|body|boolean|false|none|
|» redirectUris|body|[string]|false|none|
|» registeredNodes|body|object|false|none|
|» registrationAccessToken|body|string|false|none|
|» rootUrl|body|string|false|none|
|» secret|body|string|false|none|
|» serviceAccountsEnabled|body|boolean|false|none|
|» standardFlowEnabled|body|boolean|false|none|
|» surrogateAuthRequired|body|boolean|false|none|
|» webOrigins|body|[string]|false|none|

<h3 id="update-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the client

> Code samples

```bash
curl https://example.com/string/clients/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id}`

<h3 id="delete-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

<h3 id="delete-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the client secret

> Code samples

```bash
curl https://example.com/string/clients/string/client-secret \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/client-secret`

<h3 id="get-the-client-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "createdDate": 0,
  "credentialData": "string",
  "id": "string",
  "priority": 0,
  "secretData": "string",
  "temporary": true,
  "type": "string",
  "userLabel": "string",
  "value": "string"
}
```

<h3 id="get-the-client-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CredentialRepresentation](#schemacredentialrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Generate a new secret for the client

> Code samples

```bash
curl https://example.com/string/clients/string/client-secret \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/client-secret`

<h3 id="generate-a-new-secret-for-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "createdDate": 0,
  "credentialData": "string",
  "id": "string",
  "priority": 0,
  "secretData": "string",
  "temporary": true,
  "type": "string",
  "userLabel": "string",
  "value": "string"
}
```

<h3 id="generate-a-new-secret-for-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CredentialRepresentation](#schemacredentialrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get default client scopes.

> Code samples

```bash
curl https://example.com/string/clients/string/default-client-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/default-client-scopes`

<h3 id="get-default-client-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }
]
```

<h3 id="get-default-client-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-default-client-scopes-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/clients/{id}/default-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/clients/string/default-client-scopes/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/clients/{id}/default-client-scopes/{clientScopeId}`

<h3 id="putrealmclientsiddefault-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|clientScopeId|path|string|true|none|

<h3 id="putrealmclientsiddefault-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/clients/{id}/default-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/clients/string/default-client-scopes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id}/default-client-scopes/{clientScopeId}`

<h3 id="deleterealmclientsiddefault-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|clientScopeId|path|string|true|none|

<h3 id="deleterealmclientsiddefault-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create JSON with payload of example access token

> Code samples

```bash
curl https://example.com/string/clients/string/evaluate-scopes/generate-example-access-token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/evaluate-scopes/generate-example-access-token`

<h3 id="create-json-with-payload-of-example-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|userId|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "acr": "string",
  "address": {
    "country": "string",
    "formatted": "string",
    "locality": "string",
    "postal_code": "string",
    "region": "string",
    "street_address": "string"
  },
  "allowed-origins": [
    "string"
  ],
  "at_hash": "string",
  "auth_time": 0,
  "authorization": {
    "permissions": [
      {
        "claims": {},
        "rsid": "string",
        "rsname": "string",
        "scopes": [
          "string"
        ]
      }
    ]
  },
  "azp": "string",
  "birthdate": "string",
  "c_hash": "string",
  "category": "INTERNAL",
  "claims_locales": "string",
  "cnf": {
    "x5t#S256": "string"
  },
  "email": "string",
  "email_verified": true,
  "exp": 0,
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "iat": 0,
  "iss": "string",
  "jti": "string",
  "locale": "string",
  "middle_name": "string",
  "name": "string",
  "nbf": 0,
  "nickname": "string",
  "nonce": "string",
  "otherClaims": {},
  "phone_number": "string",
  "phone_number_verified": true,
  "picture": "string",
  "preferred_username": "string",
  "profile": "string",
  "realm_access": {
    "roles": [
      "string"
    ],
    "verify_caller": true
  },
  "s_hash": "string",
  "scope": "string",
  "session_state": "string",
  "sub": "string",
  "trusted-certs": [
    "string"
  ],
  "typ": "string",
  "updated_at": 0,
  "website": "string",
  "zoneinfo": "string"
}
```

<h3 id="create-json-with-payload-of-example-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[AccessToken](#schemaaccesstoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return list of all protocol mappers, which will be used when generating tokens issued for particular client.

> Code samples

```bash
curl https://example.com/string/clients/string/evaluate-scopes/protocol-mappers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/evaluate-scopes/protocol-mappers`

<h3 id="return-list-of-all-protocol-mappers-which-will-be-used-when-generating-tokens-issued-for-particular-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "containerId": "string",
    "containerName": "string",
    "containerType": "string",
    "mapperId": "string",
    "mapperName": "string",
    "protocolMapper": "string"
  }
]
```

<h3 id="return-list-of-all-protocol-mappers-which-will-be-used-when-generating-tokens-issued-for-particular-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-list-of-all-protocol-mappers-which-will-be-used-when-generating-tokens-issued-for-particular-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeEvaluateResource-ProtocolMapperEvaluationRepresentation](#schemaclientscopeevaluateresource-protocolmapperevaluationrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.

> Code samples

```bash
curl https://example.com/string/clients/string/evaluate-scopes/scope-mappings/string/granted \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted`

<h3 id="get-effective-scope-mapping-of-all-roles-of-particular-role-container-which-this-client-is-defacto-allowed-to-have-in-the-accesstoken-issued-for-him-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|roleContainerId|path|string|true|either realm name OR client UUID|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-scope-mapping-of-all-roles-of-particular-role-container-which-this-client-is-defacto-allowed-to-have-in-the-accesstoken-issued-for-him-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-scope-mapping-of-all-roles-of-particular-role-container-which-this-client-is-defacto-allowed-to-have-in-the-accesstoken-issued-for-him-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.

> Code samples

```bash
curl https://example.com/string/clients/string/evaluate-scopes/scope-mappings/string/not-granted \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted`

<h3 id="get-roles-which-this-client-doesnt-have-scope-for-and-cant-have-them-in-the-accesstoken-issued-for-him-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|roleContainerId|path|string|true|either realm name OR client UUID|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-roles-which-this-client-doesnt-have-scope-for-and-cant-have-them-in-the-accesstoken-issued-for-him-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-roles-which-this-client-doesnt-have-scope-for-and-cant-have-them-in-the-accesstoken-issued-for-him-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/clients/{id}/installation/providers/{providerId}

> Code samples

```bash
curl https://example.com/string/clients/string/installation/providers/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/installation/providers/{providerId}`

<h3 id="getrealmclientsidinstallationprovidersproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|providerId|path|string|true|none|

<h3 id="getrealmclientsidinstallationprovidersproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/clients/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/management/permissions`

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/clients/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/clients/{id}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Register a cluster node with the client Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle by sending registration request to Keycloak

> Code samples

```bash
curl https://example.com/string/clients/string/nodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{realm}/clients/{id}/nodes`

> Body parameter

```json
{}
```

<h3 id="register-a-cluster-node-with-the-client-manually-register-cluster-node-to-this-client---usually-its-not-needed-to-call-this-directly-as-adapter-should-handle-by-sending-registration-request-to-keycloak-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|object|true|none|

<h3 id="register-a-cluster-node-with-the-client-manually-register-cluster-node-to-this-client---usually-its-not-needed-to-call-this-directly-as-adapter-should-handle-by-sending-registration-request-to-keycloak-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Unregister a cluster node from the client

> Code samples

```bash
curl https://example.com/string/clients/string/nodes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id}/nodes/{node}`

<h3 id="unregister-a-cluster-node-from-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|node|path|string|true|none|

<h3 id="unregister-a-cluster-node-from-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get application offline session count Returns a number of offline user sessions associated with this client { &quot;count&quot;: number }

> Code samples

```bash
curl https://example.com/string/clients/string/offline-session-count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/offline-session-count`

<h3 id="get-application-offline-session-count-returns-a-number-of-offline-user-sessions-associated-with-this-client-count-number--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="get-application-offline-session-count-returns-a-number-of-offline-user-sessions-associated-with-this-client-count-number--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get offline sessions for client Returns a list of offline user sessions associated with this client

> Code samples

```bash
curl https://example.com/string/clients/string/offline-sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/offline-sessions`

<h3 id="get-offline-sessions-for-client-returns-a-list-of-offline-user-sessions-associated-with-this-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first|query|integer(int32)|false|Paging offset|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "clients": {},
    "id": "string",
    "ipAddress": "string",
    "lastAccess": 0,
    "start": 0,
    "userId": "string",
    "username": "string"
  }
]
```

<h3 id="get-offline-sessions-for-client-returns-a-list-of-offline-user-sessions-associated-with-this-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-offline-sessions-for-client-returns-a-list-of-offline-user-sessions-associated-with-this-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserSessionRepresentation](#schemausersessionrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get optional client scopes.

> Code samples

```bash
curl https://example.com/string/clients/string/optional-client-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/optional-client-scopes`

<h3 id="get-optional-client-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "id": "string",
    "name": "string",
    "protocol": "string",
    "protocolMappers": [
      {
        "config": {},
        "id": "string",
        "name": "string",
        "protocol": "string",
        "protocolMapper": "string"
      }
    ]
  }
]
```

<h3 id="get-optional-client-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-optional-client-scopes-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/clients/string/optional-client-scopes/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/clients/{id}/optional-client-scopes/{clientScopeId}`

<h3 id="putrealmclientsidoptional-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|clientScopeId|path|string|true|none|

<h3 id="putrealmclientsidoptional-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}

> Code samples

```bash
curl https://example.com/string/clients/string/optional-client-scopes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id}/optional-client-scopes/{clientScopeId}`

<h3 id="deleterealmclientsidoptional-client-scopesclientscopeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|clientScopeId|path|string|true|none|

<h3 id="deleterealmclientsidoptional-client-scopesclientscopeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Push the client’s revocation policy to its admin URL If the client has an admin URL, push revocation policy to it.

> Code samples

```bash
curl https://example.com/string/clients/string/push-revocation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/push-revocation`

<h3 id="push-the-clients-revocation-policy-to-its-admin-url-if-the-client-has-an-admin-url-push-revocation-policy-to-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "failedRequests": [
    "string"
  ],
  "successRequests": [
    "string"
  ]
}
```

<h3 id="push-the-clients-revocation-policy-to-its-admin-url-if-the-client-has-an-admin-url-push-revocation-policy-to-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[GlobalRequestResult](#schemaglobalrequestresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Generate a new registration access token for the client

> Code samples

```bash
curl https://example.com/string/clients/string/registration-access-token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/registration-access-token`

<h3 id="generate-a-new-registration-access-token-for-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

<h3 id="generate-a-new-registration-access-token-for-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ClientRepresentation](#schemaclientrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get a user dedicated to the service account

> Code samples

```bash
curl https://example.com/string/clients/string/service-account-user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/service-account-user`

<h3 id="get-a-user-dedicated-to-the-service-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "attributes": {},
  "clientConsents": [
    {
      "clientId": "string",
      "createdDate": 0,
      "grantedClientScopes": [
        "string"
      ],
      "lastUpdatedDate": 0
    }
  ],
  "clientRoles": {},
  "createdTimestamp": 0,
  "credentials": [
    {
      "createdDate": 0,
      "credentialData": "string",
      "id": "string",
      "priority": 0,
      "secretData": "string",
      "temporary": true,
      "type": "string",
      "userLabel": "string",
      "value": "string"
    }
  ],
  "disableableCredentialTypes": [
    "string"
  ],
  "email": "string",
  "emailVerified": true,
  "enabled": true,
  "federatedIdentities": [
    {
      "identityProvider": "string",
      "userId": "string",
      "userName": "string"
    }
  ],
  "federationLink": "string",
  "firstName": "string",
  "groups": [
    "string"
  ],
  "id": "string",
  "lastName": "string",
  "notBefore": 0,
  "origin": "string",
  "realmRoles": [
    "string"
  ],
  "requiredActions": [
    "string"
  ],
  "self": "string",
  "serviceAccountClientId": "string",
  "username": "string"
}
```

<h3 id="get-a-user-dedicated-to-the-service-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[UserRepresentation](#schemauserrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get application session count Returns a number of user sessions associated with this client { &quot;count&quot;: number }

> Code samples

```bash
curl https://example.com/string/clients/string/session-count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/session-count`

<h3 id="get-application-session-count-returns-a-number-of-user-sessions-associated-with-this-client-count-number--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="get-application-session-count-returns-a-number-of-user-sessions-associated-with-this-client-count-number--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Test if registered cluster nodes are available Tests availability by sending 'ping' request to all cluster nodes.

> Code samples

```bash
curl https://example.com/string/clients/string/test-nodes-available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/test-nodes-available`

<h3 id="test-if-registered-cluster-nodes-are-available-tests-availability-by-sending-ping-request-to-all-cluster-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
{
  "failedRequests": [
    "string"
  ],
  "successRequests": [
    "string"
  ]
}
```

<h3 id="test-if-registered-cluster-nodes-are-available-tests-availability-by-sending-ping-request-to-all-cluster-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[GlobalRequestResult](#schemaglobalrequestresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get user sessions for client Returns a list of user sessions associated with this client

> Code samples

```bash
curl https://example.com/string/clients/string/user-sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/user-sessions`

<h3 id="get-user-sessions-for-client-returns-a-list-of-user-sessions-associated-with-this-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first|query|integer(int32)|false|Paging offset|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "clients": {},
    "id": "string",
    "ipAddress": "string",
    "lastAccess": 0,
    "start": 0,
    "userId": "string",
    "username": "string"
  }
]
```

<h3 id="get-user-sessions-for-client-returns-a-list-of-user-sessions-associated-with-this-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-user-sessions-for-client-returns-a-list-of-user-sessions-associated-with-this-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserSessionRepresentation](#schemausersessionrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-client-initial-access">Client Initial Access</h1>

## get/{realm}/clients-initial-access

> Code samples

```bash
curl https://example.com/string/clients-initial-access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients-initial-access`

<h3 id="getrealmclients-initial-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "count": 0,
    "expiration": 0,
    "id": "string",
    "remainingCount": 0,
    "timestamp": 0,
    "token": "string"
  }
]
```

<h3 id="getrealmclients-initial-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="getrealmclients-initial-access-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientInitialAccessPresentation](#schemaclientinitialaccesspresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new initial access token.

> Code samples

```bash
curl https://example.com/string/clients-initial-access \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "count": 0,
    "expiration": 0
  }'
```

`POST /{realm}/clients-initial-access`

> Body parameter

```json
{
  "count": 0,
  "expiration": 0
}
```

<h3 id="create-a-new-initial-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[ClientInitialAccessCreatePresentation](#schemaclientinitialaccesscreatepresentation)|true|none|
|» count|body|integer(int32)|false|none|
|» expiration|body|integer(int32)|false|none|

> Example responses

> 2XX Response

```json
{
  "count": 0,
  "expiration": 0,
  "id": "string",
  "remainingCount": 0,
  "timestamp": 0,
  "token": "string"
}
```

<h3 id="create-a-new-initial-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ClientInitialAccessPresentation](#schemaclientinitialaccesspresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/clients-initial-access/{id}

> Code samples

```bash
curl https://example.com/string/clients-initial-access/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients-initial-access/{id}`

<h3 id="deleterealmclients-initial-accessid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

<h3 id="deleterealmclients-initial-accessid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-client-attribute-certificate">Client Attribute Certificate</h1>

## Get key info

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/certificates/{attr}`

<h3 id="get-key-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "certificate": "string",
  "kid": "string",
  "privateKey": "string",
  "publicKey": "string"
}
```

<h3 id="get-key-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CertificateRepresentation](#schemacertificaterepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get a keystore file for the client, containing private key and public certificate

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string/download \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "format": "string",
    "keyAlias": "string",
    "keyPassword": "string",
    "realmAlias": "string",
    "realmCertificate": true,
    "storePassword": "string"
  }'
```

`POST /{realm}/clients/{id}/certificates/{attr}/download`

> Body parameter

```json
{
  "format": "string",
  "keyAlias": "string",
  "keyPassword": "string",
  "realmAlias": "string",
  "realmCertificate": true,
  "storePassword": "string"
}
```

<h3 id="get-a-keystore-file-for-the-client-containing-private-key-and-public-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|
|body|body|[KeyStoreConfig](#schemakeystoreconfig)|true|Keystore configuration as JSON|
|» format|body|string|false|none|
|» keyAlias|body|string|false|none|
|» keyPassword|body|string|false|none|
|» realmAlias|body|string|false|none|
|» realmCertificate|body|boolean|false|none|
|» storePassword|body|string|false|none|

<h3 id="get-a-keystore-file-for-the-client-containing-private-key-and-public-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Generate a new certificate with new key pair

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string/generate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/certificates/{attr}/generate`

<h3 id="generate-a-new-certificate-with-new-key-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "certificate": "string",
  "kid": "string",
  "privateKey": "string",
  "publicKey": "string"
}
```

<h3 id="generate-a-new-certificate-with-new-key-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CertificateRepresentation](#schemacertificaterepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Generate a new keypair and certificate, and get the private key file Generates a keypair and certificate and serves the private key in a specified keystore format.

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string/generate-and-download \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "format": "string",
    "keyAlias": "string",
    "keyPassword": "string",
    "realmAlias": "string",
    "realmCertificate": true,
    "storePassword": "string"
  }'
```

`POST /{realm}/clients/{id}/certificates/{attr}/generate-and-download`

> Body parameter

```json
{
  "format": "string",
  "keyAlias": "string",
  "keyPassword": "string",
  "realmAlias": "string",
  "realmCertificate": true,
  "storePassword": "string"
}
```

<h3 id="generate-a-new-keypair-and-certificate-and-get-the-private-key-file-generates-a-keypair-and-certificate-and-serves-the-private-key-in-a-specified-keystore-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|
|body|body|[KeyStoreConfig](#schemakeystoreconfig)|true|Keystore configuration as JSON|
|» format|body|string|false|none|
|» keyAlias|body|string|false|none|
|» keyPassword|body|string|false|none|
|» realmAlias|body|string|false|none|
|» realmCertificate|body|boolean|false|none|
|» storePassword|body|string|false|none|

<h3 id="generate-a-new-keypair-and-certificate-and-get-the-private-key-file-generates-a-keypair-and-certificate-and-serves-the-private-key-in-a-specified-keystore-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Upload certificate and eventually private key

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/certificates/{attr}/upload`

<h3 id="upload-certificate-and-eventually-private-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "certificate": "string",
  "kid": "string",
  "privateKey": "string",
  "publicKey": "string"
}
```

<h3 id="upload-certificate-and-eventually-private-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CertificateRepresentation](#schemacertificaterepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Upload only certificate, not private key

> Code samples

```bash
curl https://example.com/string/clients/string/certificates/string/upload-certificate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/clients/{id}/certificates/{attr}/upload-certificate`

<h3 id="upload-only-certificate-not-private-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|attr|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "certificate": "string",
  "kid": "string",
  "privateKey": "string",
  "publicKey": "string"
}
```

<h3 id="upload-only-certificate-not-private-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[CertificateRepresentation](#schemacertificaterepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-roles">Roles</h1>

## Get all roles for the realm or client

> Code samples

```bash
curl https://example.com/string/clients/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles`

<h3 id="get-all-roles-for-the-realm-or-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|none|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|search|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-all-roles-for-the-realm-or-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-all-roles-for-the-realm-or-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new role for the realm or client

> Code samples

```bash
curl https://example.com/string/clients/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }'
```

`POST /{realm}/clients/{id}/roles`

> Body parameter

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="create-a-new-role-for-the-realm-or-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|body|body|[RoleRepresentation](#schemarolerepresentation)|true|none|
|» attributes|body|object|false|none|
|» clientRole|body|boolean|false|none|
|» composite|body|boolean|false|none|
|» composites|body|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|
|» containerId|body|string|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|

<h3 id="create-a-new-role-for-the-realm-or-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get a role by name

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}`

<h3 id="get-a-role-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="get-a-role-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RoleRepresentation](#schemarolerepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update a role by name

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }'
```

`PUT /{realm}/clients/{id}/roles/{role-name}`

> Body parameter

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="update-a-role-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[RoleRepresentation](#schemarolerepresentation)|true|none|
|» attributes|body|object|false|none|
|» clientRole|body|boolean|false|none|
|» composite|body|boolean|false|none|
|» composites|body|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|
|» containerId|body|string|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|

<h3 id="update-a-role-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete a role by name

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/clients/{id}/roles/{role-name}`

<h3 id="delete-a-role-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|

<h3 id="delete-a-role-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get composites of the role

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/composites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/composites`

<h3 id="get-composites-of-the-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-composites-of-the-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-composites-of-the-role-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a composite to the role

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/composites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/clients/{id}/roles/{role-name}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-a-composite-to-the-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-a-composite-to-the-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove roles from the role’s composite

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/composites \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/clients/{id}/roles/{role-name}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-roles-from-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|roles to remove|

<h3 id="remove-roles-from-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## An app-level roles for the specified app for the role’s composite

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/composites/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}`

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles of the role’s composite

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/composites/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/composites/realm`

<h3 id="get-realm-level-roles-of-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-of-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-of-the-roles-composite-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return List of Groups that have the specified role name

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/groups`

<h3 id="return-list-of-groups-that-have-the-specified-role-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|if false, return a full representation of the GroupRepresentation objects|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }
]
```

<h3 id="return-list-of-groups-that-have-the-specified-role-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-list-of-groups-that-have-the-specified-role-name-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/management/permissions`

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/clients/{id}/roles/{role-name}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|none|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return List of Users that have the specified role name

> Code samples

```bash
curl https://example.com/string/clients/string/roles/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/clients/{id}/roles/{role-name}/users`

<h3 id="return-list-of-users-that-have-the-specified-role-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|id of client (not client-id)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }
]
```

<h3 id="return-list-of-users-that-have-the-specified-role-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-list-of-users-that-have-the-specified-role-name-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get all roles for the realm or client

> Code samples

```bash
curl https://example.com/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles`

<h3 id="get-all-roles-for-the-realm-or-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|none|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|search|query|string|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-all-roles-for-the-realm-or-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-all-roles-for-the-realm-or-client-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new role for the realm or client

> Code samples

```bash
curl https://example.com/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }'
```

`POST /{realm}/roles`

> Body parameter

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="create-a-new-role-for-the-realm-or-client-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[RoleRepresentation](#schemarolerepresentation)|true|none|
|» attributes|body|object|false|none|
|» clientRole|body|boolean|false|none|
|» composite|body|boolean|false|none|
|» composites|body|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|
|» containerId|body|string|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|

<h3 id="create-a-new-role-for-the-realm-or-client-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get a role by name

> Code samples

```bash
curl https://example.com/string/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}`

<h3 id="get-a-role-by-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="get-a-role-by-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RoleRepresentation](#schemarolerepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update a role by name

> Code samples

```bash
curl https://example.com/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }'
```

`PUT /{realm}/roles/{role-name}`

> Body parameter

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="update-a-role-by-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[RoleRepresentation](#schemarolerepresentation)|true|none|
|» attributes|body|object|false|none|
|» clientRole|body|boolean|false|none|
|» composite|body|boolean|false|none|
|» composites|body|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|
|» containerId|body|string|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|

<h3 id="update-a-role-by-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete a role by name

> Code samples

```bash
curl https://example.com/string/roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/roles/{role-name}`

<h3 id="delete-a-role-by-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|

<h3 id="delete-a-role-by-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get composites of the role

> Code samples

```bash
curl https://example.com/string/roles/string/composites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/composites`

<h3 id="get-composites-of-the-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-composites-of-the-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-composites-of-the-role-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a composite to the role

> Code samples

```bash
curl https://example.com/string/roles/string/composites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/roles/{role-name}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-a-composite-to-the-role-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-a-composite-to-the-role-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove roles from the role’s composite

> Code samples

```bash
curl https://example.com/string/roles/string/composites \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/roles/{role-name}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-roles-from-the-roles-composite-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|roles to remove|

<h3 id="remove-roles-from-the-roles-composite-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## An app-level roles for the specified app for the role’s composite

> Code samples

```bash
curl https://example.com/string/roles/string/composites/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/composites/clients/{client}`

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="an-app-level-roles-for-the-specified-app-for-the-roles-composite-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles of the role’s composite

> Code samples

```bash
curl https://example.com/string/roles/string/composites/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/composites/realm`

<h3 id="get-realm-level-roles-of-the-roles-composite-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|role’s name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-of-the-roles-composite-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-of-the-roles-composite-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return List of Groups that have the specified role name

> Code samples

```bash
curl https://example.com/string/roles/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/groups`

<h3 id="return-list-of-groups-that-have-the-specified-role-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|if false, return a full representation of the GroupRepresentation objects|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }
]
```

<h3 id="return-list-of-groups-that-have-the-specified-role-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-list-of-groups-that-have-the-specified-role-name-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/roles/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/management/permissions`

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/roles/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/roles/{role-name}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|none|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return List of Users that have the specified role name

> Code samples

```bash
curl https://example.com/string/roles/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles/{role-name}/users`

<h3 id="return-list-of-users-that-have-the-specified-role-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|realm|path|string|true|realm name (not id!)|
|role-name|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }
]
```

<h3 id="return-list-of-users-that-have-the-specified-role-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-list-of-users-that-have-the-specified-role-name-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-component">Component</h1>

## get/{realm}/components

> Code samples

```bash
curl https://example.com/string/components \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/components`

<h3 id="getrealmcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|parent|query|string|false|none|
|type|query|string|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "config": {
      "empty": true,
      "loadFactor": 0,
      "threshold": 0
    },
    "id": "string",
    "name": "string",
    "parentId": "string",
    "providerId": "string",
    "providerType": "string",
    "subType": "string"
  }
]
```

<h3 id="getrealmcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="getrealmcomponents-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ComponentRepresentation](#schemacomponentrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## post/{realm}/components

> Code samples

```bash
curl https://example.com/string/components \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "empty": true,
      "loadFactor": 0,
      "threshold": 0
    },
    "id": "string",
    "name": "string",
    "parentId": "string",
    "providerId": "string",
    "providerType": "string",
    "subType": "string"
  }'
```

`POST /{realm}/components`

> Body parameter

```json
{
  "config": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "id": "string",
  "name": "string",
  "parentId": "string",
  "providerId": "string",
  "providerType": "string",
  "subType": "string"
}
```

<h3 id="postrealmcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[ComponentRepresentation](#schemacomponentrepresentation)|true|none|
|» config|body|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» parentId|body|string|false|none|
|» providerId|body|string|false|none|
|» providerType|body|string|false|none|
|» subType|body|string|false|none|

<h3 id="postrealmcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/components/{id}

> Code samples

```bash
curl https://example.com/string/components/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/components/{id}`

<h3 id="getrealmcomponentsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "config": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "id": "string",
  "name": "string",
  "parentId": "string",
  "providerId": "string",
  "providerType": "string",
  "subType": "string"
}
```

<h3 id="getrealmcomponentsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ComponentRepresentation](#schemacomponentrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/components/{id}

> Code samples

```bash
curl https://example.com/string/components/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "empty": true,
      "loadFactor": 0,
      "threshold": 0
    },
    "id": "string",
    "name": "string",
    "parentId": "string",
    "providerId": "string",
    "providerType": "string",
    "subType": "string"
  }'
```

`PUT /{realm}/components/{id}`

> Body parameter

```json
{
  "config": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "id": "string",
  "name": "string",
  "parentId": "string",
  "providerId": "string",
  "providerType": "string",
  "subType": "string"
}
```

<h3 id="putrealmcomponentsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[ComponentRepresentation](#schemacomponentrepresentation)|true|none|
|» config|body|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» parentId|body|string|false|none|
|» providerId|body|string|false|none|
|» providerType|body|string|false|none|
|» subType|body|string|false|none|

<h3 id="putrealmcomponentsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/components/{id}

> Code samples

```bash
curl https://example.com/string/components/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/components/{id}`

<h3 id="deleterealmcomponentsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

<h3 id="deleterealmcomponentsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## List of subcomponent types that are available to configure for a particular parent component.

> Code samples

```bash
curl https://example.com/string/components/string/sub-component-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/components/{id}/sub-component-types`

<h3 id="list-of-subcomponent-types-that-are-available-to-configure-for-a-particular-parent-component-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "helpText": "string",
    "id": "string",
    "metadata": {},
    "properties": [
      {
        "defaultValue": {},
        "helpText": "string",
        "label": "string",
        "name": "string",
        "options": [
          "string"
        ],
        "secret": true,
        "type": "string"
      }
    ]
  }
]
```

<h3 id="list-of-subcomponent-types-that-are-available-to-configure-for-a-particular-parent-component-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="list-of-subcomponent-types-that-are-available-to-configure-for-a-particular-parent-component-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ComponentTypeRepresentation](#schemacomponenttyperepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-groups">Groups</h1>

## Get group hierarchy.

> Code samples

```bash
curl https://example.com/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups`

<h3 id="get-group-hierarchy-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|none|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|search|query|string|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }
]
```

<h3 id="get-group-hierarchy-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-group-hierarchy-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## create or add a top level realm groupSet or create child.

> Code samples

```bash
curl https://example.com/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }'
```

`POST /{realm}/groups`

> Body parameter

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {}
  ]
}
```

<h3 id="create-or-add-a-top-level-realm-groupset-or-create-child-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[GroupRepresentation](#schemagrouprepresentation)|true|none|
|» access|body|object|false|none|
|» attributes|body|object|false|none|
|» clientRoles|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» path|body|string|false|none|
|» realmRoles|body|[string]|false|none|
|» subGroups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|

<h3 id="create-or-add-a-top-level-realm-groupset-or-create-child-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Returns the groups counts.

> Code samples

```bash
curl https://example.com/string/groups/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/count`

<h3 id="returns-the-groups-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|top|query|boolean|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="returns-the-groups-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/groups/{id}

> Code samples

```bash
curl https://example.com/string/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}`

<h3 id="getrealmgroupsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {}
  ]
}
```

<h3 id="getrealmgroupsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[GroupRepresentation](#schemagrouprepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update group, ignores subgroups.

> Code samples

```bash
curl https://example.com/string/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }'
```

`PUT /{realm}/groups/{id}`

> Body parameter

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {}
  ]
}
```

<h3 id="update-group-ignores-subgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[GroupRepresentation](#schemagrouprepresentation)|true|none|
|» access|body|object|false|none|
|» attributes|body|object|false|none|
|» clientRoles|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» path|body|string|false|none|
|» realmRoles|body|[string]|false|none|
|» subGroups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|

<h3 id="update-group-ignores-subgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/groups/{id}

> Code samples

```bash
curl https://example.com/string/groups/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/groups/{id}`

<h3 id="deleterealmgroupsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

<h3 id="deleterealmgroupsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Set or create child.

> Code samples

```bash
curl https://example.com/string/groups/string/children \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }'
```

`POST /{realm}/groups/{id}/children`

> Body parameter

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {}
  ]
}
```

<h3 id="set-or-create-child-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[GroupRepresentation](#schemagrouprepresentation)|true|none|
|» access|body|object|false|none|
|» attributes|body|object|false|none|
|» clientRoles|body|object|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» path|body|string|false|none|
|» realmRoles|body|[string]|false|none|
|» subGroups|body|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|

<h3 id="set-or-create-child-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/groups/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/management/permissions`

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/groups/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/groups/{id}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get users Returns a list of users, filtered according to query parameters

> Code samples

```bash
curl https://example.com/string/groups/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/members`

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|Only return basic information (only guaranteed to return id, username, created, first and last name,<br> email, enabled state, email verification state, federation link, and access.<br> Note that it means that namely user attributes, required actions, and not before are not returned.)|
|first|query|integer(int32)|false|Pagination offset|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }
]
```

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-role-mapper">Role Mapper</h1>

## Get role mappings

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings`

<h3 id="get-role-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "clientMappings": {},
  "realmMappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-role-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[MappingsRepresentation](#schemamappingsrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level role mappings

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/realm`

<h3 id="get-realm-level-role-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-role-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-role-mappings-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add realm-level role mappings to the user

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/realm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/groups/{id}/role-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-realm-level-role-mappings-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|Roles to add|

<h3 id="add-realm-level-role-mappings-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete realm-level role mappings

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/realm \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/groups/{id}/role-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="delete-realm-level-role-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="delete-realm-level-role-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles that can be mapped

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/realm/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/realm/available`

<h3 id="get-realm-level-roles-that-can-be-mapped-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-that-can-be-mapped-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-that-can-be-mapped-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective realm-level role mappings This will recurse all composite roles to get the result.

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/realm/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/realm/composite`

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get role mappings

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings`

<h3 id="get-role-mappings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
{
  "clientMappings": {},
  "realmMappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-role-mappings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[MappingsRepresentation](#schemamappingsrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level role mappings

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/realm`

<h3 id="get-realm-level-role-mappings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-role-mappings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-role-mappings-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add realm-level role mappings to the user

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/realm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/users/{id}/role-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-realm-level-role-mappings-to-the-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|Roles to add|

<h3 id="add-realm-level-role-mappings-to-the-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete realm-level role mappings

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/realm \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/users/{id}/role-mappings/realm`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="delete-realm-level-role-mappings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="delete-realm-level-role-mappings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles that can be mapped

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/realm/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/realm/available`

<h3 id="get-realm-level-roles-that-can-be-mapped-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-that-can-be-mapped-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-that-can-be-mapped-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective realm-level role mappings This will recurse all composite roles to get the result.

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/realm/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/realm/composite`

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-realm-level-role-mappings-this-will-recurse-all-composite-roles-to-get-the-result-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-client-role-mappings">Client Role Mappings</h1>

## Get client-level role mappings for the user, and the app

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/clients/{client}`

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add client-level roles to the user role mapping

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/clients/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/groups/{id}/role-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-client-level-roles-to-the-user-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-client-level-roles-to-the-user-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete client-level roles from user role mapping

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/clients/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/groups/{id}/role-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="delete-client-level-roles-from-user-role-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="delete-client-level-roles-from-user-role-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get available client-level roles that can be mapped to the user

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/clients/string/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/clients/{client}/available`

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective client-level role mappings This recurses any composite roles

> Code samples

```bash
curl https://example.com/string/groups/string/role-mappings/clients/string/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/groups/{id}/role-mappings/clients/{client}/composite`

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|none|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get client-level role mappings for the user, and the app

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/clients/{client}`

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-level-role-mappings-for-the-user-and-the-app-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add client-level roles to the user role mapping

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/clients/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/users/{id}/role-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="add-client-level-roles-to-the-user-role-mapping-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="add-client-level-roles-to-the-user-role-mapping-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete client-level roles from user role mapping

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/clients/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/users/{id}/role-mappings/clients/{client}`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="delete-client-level-roles-from-user-role-mapping-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|none|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="delete-client-level-roles-from-user-role-mapping-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get available client-level roles that can be mapped to the user

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/clients/string/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/clients/{client}/available`

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-available-client-level-roles-that-can-be-mapped-to-the-user-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get effective client-level role mappings This recurses any composite roles

> Code samples

```bash
curl https://example.com/string/users/string/role-mappings/clients/string/composite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/role-mappings/clients/{client}/composite`

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-effective-client-level-role-mappings-this-recurses-any-composite-roles-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-identity-providers">Identity Providers</h1>

## Import identity provider from uploaded JSON file

> Code samples

```bash
curl https://example.com/string/identity-provider/import-config \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/identity-provider/import-config`

<h3 id="import-identity-provider-from-uploaded-json-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="import-identity-provider-from-uploaded-json-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get identity providers

> Code samples

```bash
curl https://example.com/string/identity-provider/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances`

<h3 id="get-identity-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "addReadTokenRoleOnCreate": true,
    "alias": "string",
    "config": {},
    "displayName": "string",
    "enabled": true,
    "firstBrokerLoginFlowAlias": "string",
    "internalId": "string",
    "linkOnly": true,
    "postBrokerLoginFlowAlias": "string",
    "providerId": "string",
    "storeToken": true,
    "trustEmail": true
  }
]
```

<h3 id="get-identity-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-identity-providers-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addReadTokenRoleOnCreate": true,
    "alias": "string",
    "config": {},
    "displayName": "string",
    "enabled": true,
    "firstBrokerLoginFlowAlias": "string",
    "internalId": "string",
    "linkOnly": true,
    "postBrokerLoginFlowAlias": "string",
    "providerId": "string",
    "storeToken": true,
    "trustEmail": true
  }'
```

`POST /{realm}/identity-provider/instances`

> Body parameter

```json
{
  "addReadTokenRoleOnCreate": true,
  "alias": "string",
  "config": {},
  "displayName": "string",
  "enabled": true,
  "firstBrokerLoginFlowAlias": "string",
  "internalId": "string",
  "linkOnly": true,
  "postBrokerLoginFlowAlias": "string",
  "providerId": "string",
  "storeToken": true,
  "trustEmail": true
}
```

<h3 id="create-a-new-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)|true|JSON body|
|» addReadTokenRoleOnCreate|body|boolean|false|none|
|» alias|body|string|false|none|
|» config|body|object|false|none|
|» displayName|body|string|false|none|
|» enabled|body|boolean|false|none|
|» firstBrokerLoginFlowAlias|body|string|false|none|
|» internalId|body|string|false|none|
|» linkOnly|body|boolean|false|none|
|» postBrokerLoginFlowAlias|body|string|false|none|
|» providerId|body|string|false|none|
|» storeToken|body|boolean|false|none|
|» trustEmail|body|boolean|false|none|

<h3 id="create-a-new-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}`

<h3 id="get-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "addReadTokenRoleOnCreate": true,
  "alias": "string",
  "config": {},
  "displayName": "string",
  "enabled": true,
  "firstBrokerLoginFlowAlias": "string",
  "internalId": "string",
  "linkOnly": true,
  "postBrokerLoginFlowAlias": "string",
  "providerId": "string",
  "storeToken": true,
  "trustEmail": true
}
```

<h3 id="get-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addReadTokenRoleOnCreate": true,
    "alias": "string",
    "config": {},
    "displayName": "string",
    "enabled": true,
    "firstBrokerLoginFlowAlias": "string",
    "internalId": "string",
    "linkOnly": true,
    "postBrokerLoginFlowAlias": "string",
    "providerId": "string",
    "storeToken": true,
    "trustEmail": true
  }'
```

`PUT /{realm}/identity-provider/instances/{alias}`

> Body parameter

```json
{
  "addReadTokenRoleOnCreate": true,
  "alias": "string",
  "config": {},
  "displayName": "string",
  "enabled": true,
  "firstBrokerLoginFlowAlias": "string",
  "internalId": "string",
  "linkOnly": true,
  "postBrokerLoginFlowAlias": "string",
  "providerId": "string",
  "storeToken": true,
  "trustEmail": true
}
```

<h3 id="update-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|body|body|[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)|true|none|
|» addReadTokenRoleOnCreate|body|boolean|false|none|
|» alias|body|string|false|none|
|» config|body|object|false|none|
|» displayName|body|string|false|none|
|» enabled|body|boolean|false|none|
|» firstBrokerLoginFlowAlias|body|string|false|none|
|» internalId|body|string|false|none|
|» linkOnly|body|boolean|false|none|
|» postBrokerLoginFlowAlias|body|string|false|none|
|» providerId|body|string|false|none|
|» storeToken|body|boolean|false|none|
|» trustEmail|body|boolean|false|none|

<h3 id="update-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/identity-provider/instances/{alias}`

<h3 id="delete-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

<h3 id="delete-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Export public broker configuration for identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/export \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}/export`

<h3 id="export-public-broker-configuration-for-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Format to use|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

<h3 id="export-public-broker-configuration-for-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}/management/permissions`

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether client Authorization permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/identity-provider/instances/{alias}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-client-authorization-permissions-have-been-initialized-or-not-and-a-reference-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mapper types for identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mapper-types \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}/mapper-types`

<h3 id="get-mapper-types-for-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

<h3 id="get-mapper-types-for-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mappers for identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mappers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}/mappers`

<h3 id="get-mappers-for-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "config": {},
    "id": "string",
    "identityProviderAlias": "string",
    "identityProviderMapper": "string",
    "name": "string"
  }
]
```

<h3 id="get-mappers-for-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-mappers-for-identity-provider-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a mapper to identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mappers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "identityProviderAlias": "string",
    "identityProviderMapper": "string",
    "name": "string"
  }'
```

`POST /{realm}/identity-provider/instances/{alias}/mappers`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "identityProviderAlias": "string",
  "identityProviderMapper": "string",
  "name": "string"
}
```

<h3 id="add-a-mapper-to-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|body|body|[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» identityProviderAlias|body|string|false|none|
|» identityProviderMapper|body|string|false|none|
|» name|body|string|false|none|

<h3 id="add-a-mapper-to-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get mapper by id for the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mappers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/instances/{alias}/mappers/{id}`

<h3 id="get-mapper-by-id-for-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|id|path|string|true|Mapper id|

> Example responses

> 2XX Response

```json
{
  "config": {},
  "id": "string",
  "identityProviderAlias": "string",
  "identityProviderMapper": "string",
  "name": "string"
}
```

<h3 id="get-mapper-by-id-for-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update a mapper for the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mappers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {},
    "id": "string",
    "identityProviderAlias": "string",
    "identityProviderMapper": "string",
    "name": "string"
  }'
```

`PUT /{realm}/identity-provider/instances/{alias}/mappers/{id}`

> Body parameter

```json
{
  "config": {},
  "id": "string",
  "identityProviderAlias": "string",
  "identityProviderMapper": "string",
  "name": "string"
}
```

<h3 id="update-a-mapper-for-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|id|path|string|true|Mapper id|
|body|body|[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)|true|none|
|» config|body|object|false|none|
|» id|body|string|false|none|
|» identityProviderAlias|body|string|false|none|
|» identityProviderMapper|body|string|false|none|
|» name|body|string|false|none|

<h3 id="update-a-mapper-for-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete a mapper for the identity provider

> Code samples

```bash
curl https://example.com/string/identity-provider/instances/string/mappers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/identity-provider/instances/{alias}/mappers/{id}`

<h3 id="delete-a-mapper-for-the-identity-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|alias|path|string|true|none|
|id|path|string|true|Mapper id|

<h3 id="delete-a-mapper-for-the-identity-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get identity providers

> Code samples

```bash
curl https://example.com/string/identity-provider/providers/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/identity-provider/providers/{provider_id}`

<h3 id="get-identity-providers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|provider_id|path|string|true|Provider id|

<h3 id="get-identity-providers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-key">Key</h1>

## get/{realm}/keys

> Code samples

```bash
curl https://example.com/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/keys`

<h3 id="getrealmkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
{
  "active": {},
  "keys": [
    {
      "algorithm": "string",
      "certificate": "string",
      "kid": "string",
      "providerId": "string",
      "providerPriority": 0,
      "publicKey": "string",
      "status": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="getrealmkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[KeysMetadataRepresentation](#schemakeysmetadatarepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-roles-by-id">Roles (by ID)</h1>

## Get a specific role’s representation

> Code samples

```bash
curl https://example.com/string/roles-by-id/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles-by-id/{role-id}`

<h3 id="get-a-specific-roles-representation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|id of role|

> Example responses

> 2XX Response

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="get-a-specific-roles-representation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[RoleRepresentation](#schemarolerepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the role

> Code samples

```bash
curl https://example.com/string/roles-by-id/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }'
```

`PUT /{realm}/roles-by-id/{role-id}`

> Body parameter

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="update-the-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|id of role|
|body|body|[RoleRepresentation](#schemarolerepresentation)|true|none|
|» attributes|body|object|false|none|
|» clientRole|body|boolean|false|none|
|» composite|body|boolean|false|none|
|» composites|body|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|
|» containerId|body|string|false|none|
|» description|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|

<h3 id="update-the-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the role

> Code samples

```bash
curl https://example.com/string/roles-by-id/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/roles-by-id/{role-id}`

<h3 id="delete-the-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|id of role|

<h3 id="delete-the-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get role’s children Returns a set of role’s children provided the role is a composite.

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/composites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles-by-id/{role-id}/composites`

<h3 id="get-roles-children-returns-a-set-of-roles-children-provided-the-role-is-a-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|Role id|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-roles-children-returns-a-set-of-roles-children-provided-the-role-is-a-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-roles-children-returns-a-set-of-roles-children-provided-the-role-is-a-composite-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Make the role a composite role by associating some child roles

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/composites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`POST /{realm}/roles-by-id/{role-id}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="make-the-role-a-composite-role-by-associating-some-child-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|Role id|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|none|

<h3 id="make-the-role-a-composite-role-by-associating-some-child-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a set of roles from the role’s composite

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/composites \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]'
```

`DELETE /{realm}/roles-by-id/{role-id}/composites`

> Body parameter

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="remove-a-set-of-roles-from-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|Role id|
|body|body|[[RoleRepresentation](#schemarolerepresentation)]|true|A set of roles to be removed|

<h3 id="remove-a-set-of-roles-from-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get client-level roles for the client that are in the role’s composite

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/composites/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles-by-id/{role-id}/composites/clients/{client}`

<h3 id="get-client-level-roles-for-the-client-that-are-in-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|none|
|client|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-client-level-roles-for-the-client-that-are-in-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-client-level-roles-for-the-client-that-are-in-the-roles-composite-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get realm-level roles that are in the role’s composite

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/composites/realm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles-by-id/{role-id}/composites/realm`

<h3 id="get-realm-level-roles-that-are-in-the-roles-composite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": {
      "client": {},
      "realm": [
        "string"
      ]
    },
    "containerId": "string",
    "description": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get-realm-level-roles-that-are-in-the-roles-composite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-realm-level-roles-that-are-in-the-roles-composite-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/management/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/roles-by-id/{role-id}/management/permissions`

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return object stating whether role Authoirzation permissions have been initialized or not and a reference

> Code samples

```bash
curl https://example.com/string/roles-by-id/string/management/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "resource": "string",
    "scopePermissions": {}
  }'
```

`PUT /{realm}/roles-by-id/{role-id}/management/permissions`

> Body parameter

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|role-id|path|string|true|none|
|body|body|[ManagementPermissionReference](#schemamanagementpermissionreference)|true|none|
|» enabled|body|boolean|false|none|
|» resource|body|string|false|none|
|» scopePermissions|body|object|false|none|

> Example responses

> 2XX Response

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

<h3 id="return-object-stating-whether-role-authoirzation-permissions-have-been-initialized-or-not-and-a-reference-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[ManagementPermissionReference](#schemamanagementpermissionreference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

<h1 id="keycloak-admin-rest-api-users">Users</h1>

## Get users Returns a list of users, filtered according to query parameters

> Code samples

```bash
curl https://example.com/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users`

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|none|
|email|query|string|false|none|
|first|query|integer(int32)|false|none|
|firstName|query|string|false|none|
|lastName|query|string|false|none|
|max|query|integer(int32)|false|Maximum results size (defaults to 100)|
|search|query|string|false|A String contained in username, first or last name, or email|
|username|query|string|false|none|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }
]
```

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-users-returns-a-list-of-users-filtered-according-to-query-parameters-1-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Create a new user Username must be unique.

> Code samples

```bash
curl https://example.com/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }'
```

`POST /{realm}/users`

> Body parameter

```json
{
  "access": {},
  "attributes": {},
  "clientConsents": [
    {
      "clientId": "string",
      "createdDate": 0,
      "grantedClientScopes": [
        "string"
      ],
      "lastUpdatedDate": 0
    }
  ],
  "clientRoles": {},
  "createdTimestamp": 0,
  "credentials": [
    {
      "createdDate": 0,
      "credentialData": "string",
      "id": "string",
      "priority": 0,
      "secretData": "string",
      "temporary": true,
      "type": "string",
      "userLabel": "string",
      "value": "string"
    }
  ],
  "disableableCredentialTypes": [
    "string"
  ],
  "email": "string",
  "emailVerified": true,
  "enabled": true,
  "federatedIdentities": [
    {
      "identityProvider": "string",
      "userId": "string",
      "userName": "string"
    }
  ],
  "federationLink": "string",
  "firstName": "string",
  "groups": [
    "string"
  ],
  "id": "string",
  "lastName": "string",
  "notBefore": 0,
  "origin": "string",
  "realmRoles": [
    "string"
  ],
  "requiredActions": [
    "string"
  ],
  "self": "string",
  "serviceAccountClientId": "string",
  "username": "string"
}
```

<h3 id="create-a-new-user-username-must-be-unique-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|body|body|[UserRepresentation](#schemauserrepresentation)|true|none|
|» access|body|object|false|none|
|» attributes|body|object|false|none|
|» clientConsents|body|[[UserConsentRepresentation](#schemauserconsentrepresentation)]|false|none|
|» clientRoles|body|object|false|none|
|» createdTimestamp|body|integer(int64)|false|none|
|» credentials|body|[[CredentialRepresentation](#schemacredentialrepresentation)]|false|none|
|» disableableCredentialTypes|body|[string]|false|none|
|» email|body|string|false|none|
|» emailVerified|body|boolean|false|none|
|» enabled|body|boolean|false|none|
|» federatedIdentities|body|[[FederatedIdentityRepresentation](#schemafederatedidentityrepresentation)]|false|none|
|» federationLink|body|string|false|none|
|» firstName|body|string|false|none|
|» groups|body|[string]|false|none|
|» id|body|string|false|none|
|» lastName|body|string|false|none|
|» notBefore|body|integer(int32)|false|none|
|» origin|body|string|false|none|
|» realmRoles|body|[string]|false|none|
|» requiredActions|body|[string]|false|none|
|» self|body|string|false|none|
|» serviceAccountClientId|body|string|false|none|
|» username|body|string|false|none|

<h3 id="create-a-new-user-username-must-be-unique-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Returns the number of users that match the given criteria.

> Code samples

```bash
curl https://example.com/string/users/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/count`

<h3 id="returns-the-number-of-users-that-match-the-given-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|email filter|
|firstName|query|string|false|first name filter|
|lastName|query|string|false|last name filter|
|search|query|string|false|arbitrary search string for all the fields below|
|username|query|string|false|username filter|
|realm|path|string|true|realm name (not id!)|

> Example responses

> 2XX Response

```json
0
```

<h3 id="returns-the-number-of-users-that-match-the-given-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get representation of the user

> Code samples

```bash
curl https://example.com/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}`

<h3 id="get-representation-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
{
  "access": {},
  "attributes": {},
  "clientConsents": [
    {
      "clientId": "string",
      "createdDate": 0,
      "grantedClientScopes": [
        "string"
      ],
      "lastUpdatedDate": 0
    }
  ],
  "clientRoles": {},
  "createdTimestamp": 0,
  "credentials": [
    {
      "createdDate": 0,
      "credentialData": "string",
      "id": "string",
      "priority": 0,
      "secretData": "string",
      "temporary": true,
      "type": "string",
      "userLabel": "string",
      "value": "string"
    }
  ],
  "disableableCredentialTypes": [
    "string"
  ],
  "email": "string",
  "emailVerified": true,
  "enabled": true,
  "federatedIdentities": [
    {
      "identityProvider": "string",
      "userId": "string",
      "userName": "string"
    }
  ],
  "federationLink": "string",
  "firstName": "string",
  "groups": [
    "string"
  ],
  "id": "string",
  "lastName": "string",
  "notBefore": 0,
  "origin": "string",
  "realmRoles": [
    "string"
  ],
  "requiredActions": [
    "string"
  ],
  "self": "string",
  "serviceAccountClientId": "string",
  "username": "string"
}
```

<h3 id="get-representation-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|[UserRepresentation](#schemauserrepresentation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update the user

> Code samples

```bash
curl https://example.com/string/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access": {},
    "attributes": {},
    "clientConsents": [
      {
        "clientId": "string",
        "createdDate": 0,
        "grantedClientScopes": [
          "string"
        ],
        "lastUpdatedDate": 0
      }
    ],
    "clientRoles": {},
    "createdTimestamp": 0,
    "credentials": [
      {
        "createdDate": 0,
        "credentialData": "string",
        "id": "string",
        "priority": 0,
        "secretData": "string",
        "temporary": true,
        "type": "string",
        "userLabel": "string",
        "value": "string"
      }
    ],
    "disableableCredentialTypes": [
      "string"
    ],
    "email": "string",
    "emailVerified": true,
    "enabled": true,
    "federatedIdentities": [
      {
        "identityProvider": "string",
        "userId": "string",
        "userName": "string"
      }
    ],
    "federationLink": "string",
    "firstName": "string",
    "groups": [
      "string"
    ],
    "id": "string",
    "lastName": "string",
    "notBefore": 0,
    "origin": "string",
    "realmRoles": [
      "string"
    ],
    "requiredActions": [
      "string"
    ],
    "self": "string",
    "serviceAccountClientId": "string",
    "username": "string"
  }'
```

`PUT /{realm}/users/{id}`

> Body parameter

```json
{
  "access": {},
  "attributes": {},
  "clientConsents": [
    {
      "clientId": "string",
      "createdDate": 0,
      "grantedClientScopes": [
        "string"
      ],
      "lastUpdatedDate": 0
    }
  ],
  "clientRoles": {},
  "createdTimestamp": 0,
  "credentials": [
    {
      "createdDate": 0,
      "credentialData": "string",
      "id": "string",
      "priority": 0,
      "secretData": "string",
      "temporary": true,
      "type": "string",
      "userLabel": "string",
      "value": "string"
    }
  ],
  "disableableCredentialTypes": [
    "string"
  ],
  "email": "string",
  "emailVerified": true,
  "enabled": true,
  "federatedIdentities": [
    {
      "identityProvider": "string",
      "userId": "string",
      "userName": "string"
    }
  ],
  "federationLink": "string",
  "firstName": "string",
  "groups": [
    "string"
  ],
  "id": "string",
  "lastName": "string",
  "notBefore": 0,
  "origin": "string",
  "realmRoles": [
    "string"
  ],
  "requiredActions": [
    "string"
  ],
  "self": "string",
  "serviceAccountClientId": "string",
  "username": "string"
}
```

<h3 id="update-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[UserRepresentation](#schemauserrepresentation)|true|none|
|» access|body|object|false|none|
|» attributes|body|object|false|none|
|» clientConsents|body|[[UserConsentRepresentation](#schemauserconsentrepresentation)]|false|none|
|» clientRoles|body|object|false|none|
|» createdTimestamp|body|integer(int64)|false|none|
|» credentials|body|[[CredentialRepresentation](#schemacredentialrepresentation)]|false|none|
|» disableableCredentialTypes|body|[string]|false|none|
|» email|body|string|false|none|
|» emailVerified|body|boolean|false|none|
|» enabled|body|boolean|false|none|
|» federatedIdentities|body|[[FederatedIdentityRepresentation](#schemafederatedidentityrepresentation)]|false|none|
|» federationLink|body|string|false|none|
|» firstName|body|string|false|none|
|» groups|body|[string]|false|none|
|» id|body|string|false|none|
|» lastName|body|string|false|none|
|» notBefore|body|integer(int32)|false|none|
|» origin|body|string|false|none|
|» realmRoles|body|[string]|false|none|
|» requiredActions|body|[string]|false|none|
|» self|body|string|false|none|
|» serviceAccountClientId|body|string|false|none|
|» username|body|string|false|none|

<h3 id="update-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Delete the user

> Code samples

```bash
curl https://example.com/string/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/users/{id}`

<h3 id="delete-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

<h3 id="delete-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Return credential types, which are provided by the user storage where user is stored.

> Code samples

```bash
curl https://example.com/string/users/string/configured-user-storage-credential-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/configured-user-storage-credential-types`

<h3 id="return-credential-types-which-are-provided-by-the-user-storage-where-user-is-stored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  "string"
]
```

<h3 id="return-credential-types-which-are-provided-by-the-user-storage-where-user-is-stored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="return-credential-types-which-are-provided-by-the-user-storage-where-user-is-stored-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get consents granted by the user

> Code samples

```bash
curl https://example.com/string/users/string/consents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/consents`

<h3 id="get-consents-granted-by-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {}
]
```

<h3 id="get-consents-granted-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-consents-granted-by-the-user-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Revoke consent and offline tokens for particular client from user

> Code samples

```bash
curl https://example.com/string/users/string/consents/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/users/{id}/consents/{client}`

<h3 id="revoke-consent-and-offline-tokens-for-particular-client-from-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|client|path|string|true|Client id|

<h3 id="revoke-consent-and-offline-tokens-for-particular-client-from-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/users/{id}/credentials

> Code samples

```bash
curl https://example.com/string/users/string/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/credentials`

<h3 id="getrealmusersidcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "createdDate": 0,
    "credentialData": "string",
    "id": "string",
    "priority": 0,
    "secretData": "string",
    "temporary": true,
    "type": "string",
    "userLabel": "string",
    "value": "string"
  }
]
```

<h3 id="getrealmusersidcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="getrealmusersidcredentials-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CredentialRepresentation](#schemacredentialrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a credential for a user

> Code samples

```bash
curl https://example.com/string/users/string/credentials/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/users/{id}/credentials/{credentialId}`

<h3 id="remove-a-credential-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|credentialId|path|string|true|none|

<h3 id="remove-a-credential-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Move a credential to a position behind another credential

> Code samples

```bash
curl https://example.com/string/users/string/credentials/string/moveAfter/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}`

<h3 id="move-a-credential-to-a-position-behind-another-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|credentialId|path|string|true|The credential to move|
|newPreviousCredentialId|path|string|true|The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list.|

<h3 id="move-a-credential-to-a-position-behind-another-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Move a credential to a first position in the credentials list of the user

> Code samples

```bash
curl https://example.com/string/users/string/credentials/string/moveToFirst \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/users/{id}/credentials/{credentialId}/moveToFirst`

<h3 id="move-a-credential-to-a-first-position-in-the-credentials-list-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|credentialId|path|string|true|The credential to move|

<h3 id="move-a-credential-to-a-first-position-in-the-credentials-list-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Update a credential label for a user

> Code samples

```bash
curl https://example.com/string/users/string/credentials/string/userLabel \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`PUT /{realm}/users/{id}/credentials/{credentialId}/userLabel`

> Body parameter

```text
string
```

<h3 id="update-a-credential-label-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|credentialId|path|string|true|none|
|body|body|string|true|none|

<h3 id="update-a-credential-label-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Disable all credentials for a user of a specific type

> Code samples

```bash
curl https://example.com/string/users/string/disable-credential-types \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /{realm}/users/{id}/disable-credential-types`

> Body parameter

```json
[
  "string"
]
```

<h3 id="disable-all-credentials-for-a-user-of-a-specific-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[string]|true|none|

<h3 id="disable-all-credentials-for-a-user-of-a-specific-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Send a update account email to the user An email contains a link the user can click to perform a set of required actions.

> Code samples

```bash
curl https://example.com/string/users/string/execute-actions-email \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /{realm}/users/{id}/execute-actions-email`

> Body parameter

```json
[
  "string"
]
```

<h3 id="send-a-update-account-email-to-the-user-an-email-contains-a-link-the-user-can-click-to-perform-a-set-of-required-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Client id|
|lifespan|query|integer(int32)|false|Number of seconds after which the generated token expires|
|redirect_uri|query|string|false|Redirect uri|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[string]|true|required actions the user needs to complete|

<h3 id="send-a-update-account-email-to-the-user-an-email-contains-a-link-the-user-can-click-to-perform-a-set-of-required-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get social logins associated with the user

> Code samples

```bash
curl https://example.com/string/users/string/federated-identity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/federated-identity`

<h3 id="get-social-logins-associated-with-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "identityProvider": "string",
    "userId": "string",
    "userName": "string"
  }
]
```

<h3 id="get-social-logins-associated-with-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-social-logins-associated-with-the-user-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FederatedIdentityRepresentation](#schemafederatedidentityrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Add a social login provider to the user

> Code samples

```bash
curl https://example.com/string/users/string/federated-identity/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "identityProvider": "string",
    "userId": "string",
    "userName": "string"
  }'
```

`POST /{realm}/users/{id}/federated-identity/{provider}`

> Body parameter

```json
{
  "identityProvider": "string",
  "userId": "string",
  "userName": "string"
}
```

<h3 id="add-a-social-login-provider-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|provider|path|string|true|Social login provider id|
|body|body|[FederatedIdentityRepresentation](#schemafederatedidentityrepresentation)|true|none|
|» identityProvider|body|string|false|none|
|» userId|body|string|false|none|
|» userName|body|string|false|none|

<h3 id="add-a-social-login-provider-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove a social login provider from user

> Code samples

```bash
curl https://example.com/string/users/string/federated-identity/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/users/{id}/federated-identity/{provider}`

<h3 id="remove-a-social-login-provider-from-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|provider|path|string|true|Social login provider id|

<h3 id="remove-a-social-login-provider-from-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/users/{id}/groups

> Code samples

```bash
curl https://example.com/string/users/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/groups`

<h3 id="getrealmusersidgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|briefRepresentation|query|boolean|false|none|
|first|query|integer(int32)|false|none|
|max|query|integer(int32)|false|none|
|search|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "access": {},
    "attributes": {},
    "clientRoles": {},
    "id": "string",
    "name": "string",
    "path": "string",
    "realmRoles": [
      "string"
    ],
    "subGroups": [
      {}
    ]
  }
]
```

<h3 id="getrealmusersidgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="getrealmusersidgroups-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## get/{realm}/users/{id}/groups/count

> Code samples

```bash
curl https://example.com/string/users/string/groups/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/groups/count`

<h3 id="getrealmusersidgroupscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="getrealmusersidgroupscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## put/{realm}/users/{id}/groups/{groupId}

> Code samples

```bash
curl https://example.com/string/users/string/groups/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/users/{id}/groups/{groupId}`

<h3 id="putrealmusersidgroupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|groupId|path|string|true|none|

<h3 id="putrealmusersidgroupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## delete/{realm}/users/{id}/groups/{groupId}

> Code samples

```bash
curl https://example.com/string/users/string/groups/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{realm}/users/{id}/groups/{groupId}`

<h3 id="deleterealmusersidgroupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|groupId|path|string|true|none|

<h3 id="deleterealmusersidgroupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Impersonate the user

> Code samples

```bash
curl https://example.com/string/users/string/impersonation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/users/{id}/impersonation`

<h3 id="impersonate-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
{}
```

<h3 id="impersonate-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Remove all user sessions associated with the user Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.

> Code samples

```bash
curl https://example.com/string/users/string/logout \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{realm}/users/{id}/logout`

<h3 id="remove-all-user-sessions-associated-with-the-user-also-send-notification-to-all-clients-that-have-an-admin-url-to-invalidate-the-sessions-for-the-particular-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

<h3 id="remove-all-user-sessions-associated-with-the-user-also-send-notification-to-all-clients-that-have-an-admin-url-to-invalidate-the-sessions-for-the-particular-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get offline sessions associated with the user and client

> Code samples

```bash
curl https://example.com/string/users/string/offline-sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/offline-sessions/{clientId}`

<h3 id="get-offline-sessions-associated-with-the-user-and-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|clientId|path|string|true|none|

> Example responses

> 2XX Response

```json
[
  {
    "clients": {},
    "id": "string",
    "ipAddress": "string",
    "lastAccess": 0,
    "start": 0,
    "userId": "string",
    "username": "string"
  }
]
```

<h3 id="get-offline-sessions-associated-with-the-user-and-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-offline-sessions-associated-with-the-user-and-client-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserSessionRepresentation](#schemausersessionrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Set up a new password for the user.

> Code samples

```bash
curl https://example.com/string/users/string/reset-password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createdDate": 0,
    "credentialData": "string",
    "id": "string",
    "priority": 0,
    "secretData": "string",
    "temporary": true,
    "type": "string",
    "userLabel": "string",
    "value": "string"
  }'
```

`PUT /{realm}/users/{id}/reset-password`

> Body parameter

```json
{
  "createdDate": 0,
  "credentialData": "string",
  "id": "string",
  "priority": 0,
  "secretData": "string",
  "temporary": true,
  "type": "string",
  "userLabel": "string",
  "value": "string"
}
```

<h3 id="set-up-a-new-password-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|
|body|body|[CredentialRepresentation](#schemacredentialrepresentation)|true|The representation must contain a rawPassword with the plain-text password|
|» createdDate|body|integer(int64)|false|none|
|» credentialData|body|string|false|none|
|» id|body|string|false|none|
|» priority|body|integer(int32)|false|none|
|» secretData|body|string|false|none|
|» temporary|body|boolean|false|none|
|» type|body|string|false|none|
|» userLabel|body|string|false|none|
|» value|body|string|false|none|

<h3 id="set-up-a-new-password-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Send an email-verification email to the user An email contains a link the user can click to verify their email address.

> Code samples

```bash
curl https://example.com/string/users/string/send-verify-email \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /{realm}/users/{id}/send-verify-email`

<h3 id="send-an-email-verification-email-to-the-user-an-email-contains-a-link-the-user-can-click-to-verify-their-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Client id|
|redirect_uri|query|string|false|Redirect uri|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

<h3 id="send-an-email-verification-email-to-the-user-an-email-contains-a-link-the-user-can-click-to-verify-their-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

## Get sessions associated with the user

> Code samples

```bash
curl https://example.com/string/users/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{realm}/users/{id}/sessions`

<h3 id="get-sessions-associated-with-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|path|string|true|realm name (not id!)|
|id|path|string|true|User id|

> Example responses

> 2XX Response

```json
[
  {
    "clients": {},
    "id": "string",
    "ipAddress": "string",
    "lastAccess": 0,
    "start": 0,
    "userId": "string",
    "username": "string"
  }
]
```

<h3 id="get-sessions-associated-with-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|success|Inline|

<h3 id="get-sessions-associated-with-the-user-responseschema">Response Schema</h3>

Status Code **2XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserSessionRepresentation](#schemausersessionrepresentation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access_token
</aside>

# Schemas

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
{
  "acr": "string",
  "address": {
    "country": "string",
    "formatted": "string",
    "locality": "string",
    "postal_code": "string",
    "region": "string",
    "street_address": "string"
  },
  "allowed-origins": [
    "string"
  ],
  "at_hash": "string",
  "auth_time": 0,
  "authorization": {
    "permissions": [
      {
        "claims": {},
        "rsid": "string",
        "rsname": "string",
        "scopes": [
          "string"
        ]
      }
    ]
  },
  "azp": "string",
  "birthdate": "string",
  "c_hash": "string",
  "category": "INTERNAL",
  "claims_locales": "string",
  "cnf": {
    "x5t#S256": "string"
  },
  "email": "string",
  "email_verified": true,
  "exp": 0,
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "iat": 0,
  "iss": "string",
  "jti": "string",
  "locale": "string",
  "middle_name": "string",
  "name": "string",
  "nbf": 0,
  "nickname": "string",
  "nonce": "string",
  "otherClaims": {},
  "phone_number": "string",
  "phone_number_verified": true,
  "picture": "string",
  "preferred_username": "string",
  "profile": "string",
  "realm_access": {
    "roles": [
      "string"
    ],
    "verify_caller": true
  },
  "s_hash": "string",
  "scope": "string",
  "session_state": "string",
  "sub": "string",
  "trusted-certs": [
    "string"
  ],
  "typ": "string",
  "updated_at": 0,
  "website": "string",
  "zoneinfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acr|string|false|none|none|
|address|[AddressClaimSet](#schemaaddressclaimset)|false|none|none|
|allowed-origins|[string]|false|none|none|
|at_hash|string|false|none|none|
|auth_time|integer(int64)|false|none|none|
|authorization|[AccessToken-Authorization](#schemaaccesstoken-authorization)|false|none|none|
|azp|string|false|none|none|
|birthdate|string|false|none|none|
|c_hash|string|false|none|none|
|category|string|false|none|none|
|claims_locales|string|false|none|none|
|cnf|[AccessToken-CertConf](#schemaaccesstoken-certconf)|false|none|none|
|email|string|false|none|none|
|email_verified|boolean|false|none|none|
|exp|integer(int64)|false|none|none|
|family_name|string|false|none|none|
|gender|string|false|none|none|
|given_name|string|false|none|none|
|iat|integer(int64)|false|none|none|
|iss|string|false|none|none|
|jti|string|false|none|none|
|locale|string|false|none|none|
|middle_name|string|false|none|none|
|name|string|false|none|none|
|nbf|integer(int64)|false|none|none|
|nickname|string|false|none|none|
|nonce|string|false|none|none|
|otherClaims|object|false|none|none|
|phone_number|string|false|none|none|
|phone_number_verified|boolean|false|none|none|
|picture|string|false|none|none|
|preferred_username|string|false|none|none|
|profile|string|false|none|none|
|realm_access|[AccessToken-Access](#schemaaccesstoken-access)|false|none|none|
|s_hash|string|false|none|none|
|scope|string|false|none|none|
|session_state|string|false|none|none|
|sub|string|false|none|none|
|trusted-certs|[string]|false|none|none|
|typ|string|false|none|none|
|updated_at|integer(int64)|false|none|none|
|website|string|false|none|none|
|zoneinfo|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|INTERNAL|
|category|ACCESS|
|category|ID|
|category|ADMIN|
|category|USERINFO|

<h2 id="tocS_AccessToken-Access">AccessToken-Access</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken-access"></a>
<a id="schema_AccessToken-Access"></a>
<a id="tocSaccesstoken-access"></a>
<a id="tocsaccesstoken-access"></a>

```json
{
  "roles": [
    "string"
  ],
  "verify_caller": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[string]|false|none|none|
|verify_caller|boolean|false|none|none|

<h2 id="tocS_AccessToken-Authorization">AccessToken-Authorization</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken-authorization"></a>
<a id="schema_AccessToken-Authorization"></a>
<a id="tocSaccesstoken-authorization"></a>
<a id="tocsaccesstoken-authorization"></a>

```json
{
  "permissions": [
    {
      "claims": {},
      "rsid": "string",
      "rsname": "string",
      "scopes": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[[Permission](#schemapermission)]|false|none|none|

<h2 id="tocS_AccessToken-CertConf">AccessToken-CertConf</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken-certconf"></a>
<a id="schema_AccessToken-CertConf"></a>
<a id="tocSaccesstoken-certconf"></a>
<a id="tocsaccesstoken-certconf"></a>

```json
{
  "x5t#S256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x5t#S256|string|false|none|none|

<h2 id="tocS_AddressClaimSet">AddressClaimSet</h2>
<!-- backwards compatibility -->
<a id="schemaaddressclaimset"></a>
<a id="schema_AddressClaimSet"></a>
<a id="tocSaddressclaimset"></a>
<a id="tocsaddressclaimset"></a>

```json
{
  "country": "string",
  "formatted": "string",
  "locality": "string",
  "postal_code": "string",
  "region": "string",
  "street_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|formatted|string|false|none|none|
|locality|string|false|none|none|
|postal_code|string|false|none|none|
|region|string|false|none|none|
|street_address|string|false|none|none|

<h2 id="tocS_AdminEventRepresentation">AdminEventRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaadmineventrepresentation"></a>
<a id="schema_AdminEventRepresentation"></a>
<a id="tocSadmineventrepresentation"></a>
<a id="tocsadmineventrepresentation"></a>

```json
{
  "authDetails": {
    "clientId": "string",
    "ipAddress": "string",
    "realmId": "string",
    "userId": "string"
  },
  "error": "string",
  "operationType": "string",
  "realmId": "string",
  "representation": "string",
  "resourcePath": "string",
  "resourceType": "string",
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authDetails|[AuthDetailsRepresentation](#schemaauthdetailsrepresentation)|false|none|none|
|error|string|false|none|none|
|operationType|string|false|none|none|
|realmId|string|false|none|none|
|representation|string|false|none|none|
|resourcePath|string|false|none|none|
|resourceType|string|false|none|none|
|time|integer(int64)|false|none|none|

<h2 id="tocS_AuthDetailsRepresentation">AuthDetailsRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthdetailsrepresentation"></a>
<a id="schema_AuthDetailsRepresentation"></a>
<a id="tocSauthdetailsrepresentation"></a>
<a id="tocsauthdetailsrepresentation"></a>

```json
{
  "clientId": "string",
  "ipAddress": "string",
  "realmId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|ipAddress|string|false|none|none|
|realmId|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_AuthenticationExecutionExportRepresentation">AuthenticationExecutionExportRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationexecutionexportrepresentation"></a>
<a id="schema_AuthenticationExecutionExportRepresentation"></a>
<a id="tocSauthenticationexecutionexportrepresentation"></a>
<a id="tocsauthenticationexecutionexportrepresentation"></a>

```json
{
  "authenticator": "string",
  "authenticatorConfig": "string",
  "authenticatorFlow": true,
  "autheticatorFlow": true,
  "flowAlias": "string",
  "priority": 0,
  "requirement": "string",
  "userSetupAllowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticator|string|false|none|none|
|authenticatorConfig|string|false|none|none|
|authenticatorFlow|boolean|false|none|none|
|autheticatorFlow|boolean|false|none|none|
|flowAlias|string|false|none|none|
|priority|integer(int32)|false|none|none|
|requirement|string|false|none|none|
|userSetupAllowed|boolean|false|none|none|

<h2 id="tocS_AuthenticationExecutionInfoRepresentation">AuthenticationExecutionInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationexecutioninforepresentation"></a>
<a id="schema_AuthenticationExecutionInfoRepresentation"></a>
<a id="tocSauthenticationexecutioninforepresentation"></a>
<a id="tocsauthenticationexecutioninforepresentation"></a>

```json
{
  "alias": "string",
  "authenticationConfig": "string",
  "authenticationFlow": true,
  "configurable": true,
  "displayName": "string",
  "flowId": "string",
  "id": "string",
  "index": 0,
  "level": 0,
  "providerId": "string",
  "requirement": "string",
  "requirementChoices": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|authenticationConfig|string|false|none|none|
|authenticationFlow|boolean|false|none|none|
|configurable|boolean|false|none|none|
|displayName|string|false|none|none|
|flowId|string|false|none|none|
|id|string|false|none|none|
|index|integer(int32)|false|none|none|
|level|integer(int32)|false|none|none|
|providerId|string|false|none|none|
|requirement|string|false|none|none|
|requirementChoices|[string]|false|none|none|

<h2 id="tocS_AuthenticationExecutionRepresentation">AuthenticationExecutionRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationexecutionrepresentation"></a>
<a id="schema_AuthenticationExecutionRepresentation"></a>
<a id="tocSauthenticationexecutionrepresentation"></a>
<a id="tocsauthenticationexecutionrepresentation"></a>

```json
{
  "authenticator": "string",
  "authenticatorConfig": "string",
  "authenticatorFlow": true,
  "autheticatorFlow": true,
  "flowId": "string",
  "id": "string",
  "parentFlow": "string",
  "priority": 0,
  "requirement": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticator|string|false|none|none|
|authenticatorConfig|string|false|none|none|
|authenticatorFlow|boolean|false|none|none|
|autheticatorFlow|boolean|false|none|none|
|flowId|string|false|none|none|
|id|string|false|none|none|
|parentFlow|string|false|none|none|
|priority|integer(int32)|false|none|none|
|requirement|string|false|none|none|

<h2 id="tocS_AuthenticationFlowRepresentation">AuthenticationFlowRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationflowrepresentation"></a>
<a id="schema_AuthenticationFlowRepresentation"></a>
<a id="tocSauthenticationflowrepresentation"></a>
<a id="tocsauthenticationflowrepresentation"></a>

```json
{
  "alias": "string",
  "authenticationExecutions": [
    {
      "authenticator": "string",
      "authenticatorConfig": "string",
      "authenticatorFlow": true,
      "autheticatorFlow": true,
      "flowAlias": "string",
      "priority": 0,
      "requirement": "string",
      "userSetupAllowed": true
    }
  ],
  "builtIn": true,
  "description": "string",
  "id": "string",
  "providerId": "string",
  "topLevel": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|authenticationExecutions|[[AuthenticationExecutionExportRepresentation](#schemaauthenticationexecutionexportrepresentation)]|false|none|none|
|builtIn|boolean|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|providerId|string|false|none|none|
|topLevel|boolean|false|none|none|

<h2 id="tocS_AuthenticatorConfigInfoRepresentation">AuthenticatorConfigInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatorconfiginforepresentation"></a>
<a id="schema_AuthenticatorConfigInfoRepresentation"></a>
<a id="tocSauthenticatorconfiginforepresentation"></a>
<a id="tocsauthenticatorconfiginforepresentation"></a>

```json
{
  "helpText": "string",
  "name": "string",
  "properties": [
    {
      "defaultValue": {},
      "helpText": "string",
      "label": "string",
      "name": "string",
      "options": [
        "string"
      ],
      "secret": true,
      "type": "string"
    }
  ],
  "providerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|helpText|string|false|none|none|
|name|string|false|none|none|
|properties|[[ConfigPropertyRepresentation](#schemaconfigpropertyrepresentation)]|false|none|none|
|providerId|string|false|none|none|

<h2 id="tocS_AuthenticatorConfigRepresentation">AuthenticatorConfigRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatorconfigrepresentation"></a>
<a id="schema_AuthenticatorConfigRepresentation"></a>
<a id="tocSauthenticatorconfigrepresentation"></a>
<a id="tocsauthenticatorconfigrepresentation"></a>

```json
{
  "alias": "string",
  "config": {},
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|config|object|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_CertificateRepresentation">CertificateRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacertificaterepresentation"></a>
<a id="schema_CertificateRepresentation"></a>
<a id="tocScertificaterepresentation"></a>
<a id="tocscertificaterepresentation"></a>

```json
{
  "certificate": "string",
  "kid": "string",
  "privateKey": "string",
  "publicKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|none|
|kid|string|false|none|none|
|privateKey|string|false|none|none|
|publicKey|string|false|none|none|

<h2 id="tocS_ClientInitialAccessCreatePresentation">ClientInitialAccessCreatePresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientinitialaccesscreatepresentation"></a>
<a id="schema_ClientInitialAccessCreatePresentation"></a>
<a id="tocSclientinitialaccesscreatepresentation"></a>
<a id="tocsclientinitialaccesscreatepresentation"></a>

```json
{
  "count": 0,
  "expiration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|expiration|integer(int32)|false|none|none|

<h2 id="tocS_ClientInitialAccessPresentation">ClientInitialAccessPresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientinitialaccesspresentation"></a>
<a id="schema_ClientInitialAccessPresentation"></a>
<a id="tocSclientinitialaccesspresentation"></a>
<a id="tocsclientinitialaccesspresentation"></a>

```json
{
  "count": 0,
  "expiration": 0,
  "id": "string",
  "remainingCount": 0,
  "timestamp": 0,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|expiration|integer(int32)|false|none|none|
|id|string|false|none|none|
|remainingCount|integer(int32)|false|none|none|
|timestamp|integer(int32)|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_ClientMappingsRepresentation">ClientMappingsRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientmappingsrepresentation"></a>
<a id="schema_ClientMappingsRepresentation"></a>
<a id="tocSclientmappingsrepresentation"></a>
<a id="tocsclientmappingsrepresentation"></a>

```json
{
  "client": "string",
  "id": "string",
  "mappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|string|false|none|none|
|id|string|false|none|none|
|mappings|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<h2 id="tocS_ClientRepresentation">ClientRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientrepresentation"></a>
<a id="schema_ClientRepresentation"></a>
<a id="tocSclientrepresentation"></a>
<a id="tocsclientrepresentation"></a>

```json
{
  "access": {},
  "adminUrl": "string",
  "alwaysDisplayInConsole": true,
  "attributes": {},
  "authenticationFlowBindingOverrides": {},
  "authorizationServicesEnabled": true,
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "clientId": "string",
    "decisionStrategy": "AFFIRMATIVE",
    "id": "string",
    "name": "string",
    "policies": [
      {
        "config": {},
        "decisionStrategy": "AFFIRMATIVE",
        "description": "string",
        "id": "string",
        "logic": "POSITIVE",
        "name": "string",
        "owner": "string",
        "policies": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "resourcesData": [
          {}
        ],
        "scopes": [
          "string"
        ],
        "scopesData": [
          {}
        ],
        "type": "string"
      }
    ],
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "attributes": {},
        "displayName": "string",
        "icon_uri": "string",
        "id": "string",
        "name": "string",
        "ownerManagedAccess": true,
        "scopes": [
          {}
        ],
        "type": "string",
        "uris": [
          "string"
        ]
      }
    ],
    "scopes": [
      {
        "displayName": "string",
        "iconUri": "string",
        "id": "string",
        "name": "string",
        "policies": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    ]
  },
  "baseUrl": "string",
  "bearerOnly": true,
  "clientAuthenticatorType": "string",
  "clientId": "string",
  "consentRequired": true,
  "defaultClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "description": "string",
  "directAccessGrantsEnabled": true,
  "enabled": true,
  "frontchannelLogout": true,
  "fullScopeAllowed": true,
  "id": "string",
  "implicitFlowEnabled": true,
  "name": "string",
  "nodeReRegistrationTimeout": 0,
  "notBefore": 0,
  "optionalClientScopes": [
    "string"
  ],
  "origin": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "publicClient": true,
  "redirectUris": [
    "string"
  ],
  "registeredNodes": {},
  "registrationAccessToken": "string",
  "rootUrl": "string",
  "secret": "string",
  "serviceAccountsEnabled": true,
  "standardFlowEnabled": true,
  "surrogateAuthRequired": true,
  "webOrigins": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|object|false|none|none|
|adminUrl|string|false|none|none|
|alwaysDisplayInConsole|boolean|false|none|none|
|attributes|object|false|none|none|
|authenticationFlowBindingOverrides|object|false|none|none|
|authorizationServicesEnabled|boolean|false|none|none|
|authorizationSettings|[ResourceServerRepresentation](#schemaresourceserverrepresentation)|false|none|none|
|baseUrl|string|false|none|none|
|bearerOnly|boolean|false|none|none|
|clientAuthenticatorType|string|false|none|none|
|clientId|string|false|none|none|
|consentRequired|boolean|false|none|none|
|defaultClientScopes|[string]|false|none|none|
|defaultRoles|[string]|false|none|none|
|description|string|false|none|none|
|directAccessGrantsEnabled|boolean|false|none|none|
|enabled|boolean|false|none|none|
|frontchannelLogout|boolean|false|none|none|
|fullScopeAllowed|boolean|false|none|none|
|id|string|false|none|none|
|implicitFlowEnabled|boolean|false|none|none|
|name|string|false|none|none|
|nodeReRegistrationTimeout|integer(int32)|false|none|none|
|notBefore|integer(int32)|false|none|none|
|optionalClientScopes|[string]|false|none|none|
|origin|string|false|none|none|
|protocol|string|false|none|none|
|protocolMappers|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|
|publicClient|boolean|false|none|none|
|redirectUris|[string]|false|none|none|
|registeredNodes|object|false|none|none|
|registrationAccessToken|string|false|none|none|
|rootUrl|string|false|none|none|
|secret|string|false|none|none|
|serviceAccountsEnabled|boolean|false|none|none|
|standardFlowEnabled|boolean|false|none|none|
|surrogateAuthRequired|boolean|false|none|none|
|webOrigins|[string]|false|none|none|

<h2 id="tocS_ClientScopeEvaluateResource-ProtocolMapperEvaluationRepresentation">ClientScopeEvaluateResource-ProtocolMapperEvaluationRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientscopeevaluateresource-protocolmapperevaluationrepresentation"></a>
<a id="schema_ClientScopeEvaluateResource-ProtocolMapperEvaluationRepresentation"></a>
<a id="tocSclientscopeevaluateresource-protocolmapperevaluationrepresentation"></a>
<a id="tocsclientscopeevaluateresource-protocolmapperevaluationrepresentation"></a>

```json
{
  "containerId": "string",
  "containerName": "string",
  "containerType": "string",
  "mapperId": "string",
  "mapperName": "string",
  "protocolMapper": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerId|string|false|none|none|
|containerName|string|false|none|none|
|containerType|string|false|none|none|
|mapperId|string|false|none|none|
|mapperName|string|false|none|none|
|protocolMapper|string|false|none|none|

<h2 id="tocS_ClientScopeRepresentation">ClientScopeRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaclientscoperepresentation"></a>
<a id="schema_ClientScopeRepresentation"></a>
<a id="tocSclientscoperepresentation"></a>
<a id="tocsclientscoperepresentation"></a>

```json
{
  "attributes": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|protocol|string|false|none|none|
|protocolMappers|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|

<h2 id="tocS_ComponentExportRepresentation">ComponentExportRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacomponentexportrepresentation"></a>
<a id="schema_ComponentExportRepresentation"></a>
<a id="tocScomponentexportrepresentation"></a>
<a id="tocscomponentexportrepresentation"></a>

```json
{
  "config": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "id": "string",
  "name": "string",
  "providerId": "string",
  "subComponents": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "subType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|providerId|string|false|none|none|
|subComponents|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|none|
|subType|string|false|none|none|

<h2 id="tocS_ComponentRepresentation">ComponentRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacomponentrepresentation"></a>
<a id="schema_ComponentRepresentation"></a>
<a id="tocScomponentrepresentation"></a>
<a id="tocscomponentrepresentation"></a>

```json
{
  "config": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "id": "string",
  "name": "string",
  "parentId": "string",
  "providerId": "string",
  "providerType": "string",
  "subType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|parentId|string|false|none|none|
|providerId|string|false|none|none|
|providerType|string|false|none|none|
|subType|string|false|none|none|

<h2 id="tocS_ComponentTypeRepresentation">ComponentTypeRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacomponenttyperepresentation"></a>
<a id="schema_ComponentTypeRepresentation"></a>
<a id="tocScomponenttyperepresentation"></a>
<a id="tocscomponenttyperepresentation"></a>

```json
{
  "helpText": "string",
  "id": "string",
  "metadata": {},
  "properties": [
    {
      "defaultValue": {},
      "helpText": "string",
      "label": "string",
      "name": "string",
      "options": [
        "string"
      ],
      "secret": true,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|helpText|string|false|none|none|
|id|string|false|none|none|
|metadata|object|false|none|none|
|properties|[[ConfigPropertyRepresentation](#schemaconfigpropertyrepresentation)]|false|none|none|

<h2 id="tocS_ConfigPropertyRepresentation">ConfigPropertyRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaconfigpropertyrepresentation"></a>
<a id="schema_ConfigPropertyRepresentation"></a>
<a id="tocSconfigpropertyrepresentation"></a>
<a id="tocsconfigpropertyrepresentation"></a>

```json
{
  "defaultValue": {},
  "helpText": "string",
  "label": "string",
  "name": "string",
  "options": [
    "string"
  ],
  "secret": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|object|false|none|none|
|helpText|string|false|none|none|
|label|string|false|none|none|
|name|string|false|none|none|
|options|[string]|false|none|none|
|secret|boolean|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_CredentialRepresentation">CredentialRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacredentialrepresentation"></a>
<a id="schema_CredentialRepresentation"></a>
<a id="tocScredentialrepresentation"></a>
<a id="tocscredentialrepresentation"></a>

```json
{
  "createdDate": 0,
  "credentialData": "string",
  "id": "string",
  "priority": 0,
  "secretData": "string",
  "temporary": true,
  "type": "string",
  "userLabel": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|integer(int64)|false|none|none|
|credentialData|string|false|none|none|
|id|string|false|none|none|
|priority|integer(int32)|false|none|none|
|secretData|string|false|none|none|
|temporary|boolean|false|none|none|
|type|string|false|none|none|
|userLabel|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_EventRepresentation">EventRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaeventrepresentation"></a>
<a id="schema_EventRepresentation"></a>
<a id="tocSeventrepresentation"></a>
<a id="tocseventrepresentation"></a>

```json
{
  "clientId": "string",
  "details": {},
  "error": "string",
  "ipAddress": "string",
  "realmId": "string",
  "sessionId": "string",
  "time": 0,
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|details|object|false|none|none|
|error|string|false|none|none|
|ipAddress|string|false|none|none|
|realmId|string|false|none|none|
|sessionId|string|false|none|none|
|time|integer(int64)|false|none|none|
|type|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_FederatedIdentityRepresentation">FederatedIdentityRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemafederatedidentityrepresentation"></a>
<a id="schema_FederatedIdentityRepresentation"></a>
<a id="tocSfederatedidentityrepresentation"></a>
<a id="tocsfederatedidentityrepresentation"></a>

```json
{
  "identityProvider": "string",
  "userId": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProvider|string|false|none|none|
|userId|string|false|none|none|
|userName|string|false|none|none|

<h2 id="tocS_GlobalRequestResult">GlobalRequestResult</h2>
<!-- backwards compatibility -->
<a id="schemaglobalrequestresult"></a>
<a id="schema_GlobalRequestResult"></a>
<a id="tocSglobalrequestresult"></a>
<a id="tocsglobalrequestresult"></a>

```json
{
  "failedRequests": [
    "string"
  ],
  "successRequests": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedRequests|[string]|false|none|none|
|successRequests|[string]|false|none|none|

<h2 id="tocS_GroupRepresentation">GroupRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemagrouprepresentation"></a>
<a id="schema_GroupRepresentation"></a>
<a id="tocSgrouprepresentation"></a>
<a id="tocsgrouprepresentation"></a>

```json
{
  "access": {},
  "attributes": {},
  "clientRoles": {},
  "id": "string",
  "name": "string",
  "path": "string",
  "realmRoles": [
    "string"
  ],
  "subGroups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|object|false|none|none|
|attributes|object|false|none|none|
|clientRoles|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|realmRoles|[string]|false|none|none|
|subGroups|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|

<h2 id="tocS_IdentityProviderMapperRepresentation">IdentityProviderMapperRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidermapperrepresentation"></a>
<a id="schema_IdentityProviderMapperRepresentation"></a>
<a id="tocSidentityprovidermapperrepresentation"></a>
<a id="tocsidentityprovidermapperrepresentation"></a>

```json
{
  "config": {},
  "id": "string",
  "identityProviderAlias": "string",
  "identityProviderMapper": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|id|string|false|none|none|
|identityProviderAlias|string|false|none|none|
|identityProviderMapper|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_IdentityProviderRepresentation">IdentityProviderRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderrepresentation"></a>
<a id="schema_IdentityProviderRepresentation"></a>
<a id="tocSidentityproviderrepresentation"></a>
<a id="tocsidentityproviderrepresentation"></a>

```json
{
  "addReadTokenRoleOnCreate": true,
  "alias": "string",
  "config": {},
  "displayName": "string",
  "enabled": true,
  "firstBrokerLoginFlowAlias": "string",
  "internalId": "string",
  "linkOnly": true,
  "postBrokerLoginFlowAlias": "string",
  "providerId": "string",
  "storeToken": true,
  "trustEmail": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addReadTokenRoleOnCreate|boolean|false|none|none|
|alias|string|false|none|none|
|config|object|false|none|none|
|displayName|string|false|none|none|
|enabled|boolean|false|none|none|
|firstBrokerLoginFlowAlias|string|false|none|none|
|internalId|string|false|none|none|
|linkOnly|boolean|false|none|none|
|postBrokerLoginFlowAlias|string|false|none|none|
|providerId|string|false|none|none|
|storeToken|boolean|false|none|none|
|trustEmail|boolean|false|none|none|

<h2 id="tocS_KeyStoreConfig">KeyStoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemakeystoreconfig"></a>
<a id="schema_KeyStoreConfig"></a>
<a id="tocSkeystoreconfig"></a>
<a id="tocskeystoreconfig"></a>

```json
{
  "format": "string",
  "keyAlias": "string",
  "keyPassword": "string",
  "realmAlias": "string",
  "realmCertificate": true,
  "storePassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|keyAlias|string|false|none|none|
|keyPassword|string|false|none|none|
|realmAlias|string|false|none|none|
|realmCertificate|boolean|false|none|none|
|storePassword|string|false|none|none|

<h2 id="tocS_KeysMetadataRepresentation">KeysMetadataRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemakeysmetadatarepresentation"></a>
<a id="schema_KeysMetadataRepresentation"></a>
<a id="tocSkeysmetadatarepresentation"></a>
<a id="tocskeysmetadatarepresentation"></a>

```json
{
  "active": {},
  "keys": [
    {
      "algorithm": "string",
      "certificate": "string",
      "kid": "string",
      "providerId": "string",
      "providerPriority": 0,
      "publicKey": "string",
      "status": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|object|false|none|none|
|keys|[[KeysMetadataRepresentation-KeyMetadataRepresentation](#schemakeysmetadatarepresentation-keymetadatarepresentation)]|false|none|none|

<h2 id="tocS_KeysMetadataRepresentation-KeyMetadataRepresentation">KeysMetadataRepresentation-KeyMetadataRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemakeysmetadatarepresentation-keymetadatarepresentation"></a>
<a id="schema_KeysMetadataRepresentation-KeyMetadataRepresentation"></a>
<a id="tocSkeysmetadatarepresentation-keymetadatarepresentation"></a>
<a id="tocskeysmetadatarepresentation-keymetadatarepresentation"></a>

```json
{
  "algorithm": "string",
  "certificate": "string",
  "kid": "string",
  "providerId": "string",
  "providerPriority": 0,
  "publicKey": "string",
  "status": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|certificate|string|false|none|none|
|kid|string|false|none|none|
|providerId|string|false|none|none|
|providerPriority|integer(int64)|false|none|none|
|publicKey|string|false|none|none|
|status|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_ManagementPermissionReference">ManagementPermissionReference</h2>
<!-- backwards compatibility -->
<a id="schemamanagementpermissionreference"></a>
<a id="schema_ManagementPermissionReference"></a>
<a id="tocSmanagementpermissionreference"></a>
<a id="tocsmanagementpermissionreference"></a>

```json
{
  "enabled": true,
  "resource": "string",
  "scopePermissions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|resource|string|false|none|none|
|scopePermissions|object|false|none|none|

<h2 id="tocS_MappingsRepresentation">MappingsRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemamappingsrepresentation"></a>
<a id="schema_MappingsRepresentation"></a>
<a id="tocSmappingsrepresentation"></a>
<a id="tocsmappingsrepresentation"></a>

```json
{
  "clientMappings": {},
  "realmMappings": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientMappings|object|false|none|none|
|realmMappings|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<h2 id="tocS_MemoryInfoRepresentation">MemoryInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemamemoryinforepresentation"></a>
<a id="schema_MemoryInfoRepresentation"></a>
<a id="tocSmemoryinforepresentation"></a>
<a id="tocsmemoryinforepresentation"></a>

```json
{
  "free": 0,
  "freeFormated": "string",
  "freePercentage": 0,
  "total": 0,
  "totalFormated": "string",
  "used": 0,
  "usedFormated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|free|integer(int64)|false|none|none|
|freeFormated|string|false|none|none|
|freePercentage|integer(int64)|false|none|none|
|total|integer(int64)|false|none|none|
|totalFormated|string|false|none|none|
|used|integer(int64)|false|none|none|
|usedFormated|string|false|none|none|

<h2 id="tocS_MultivaluedHashMap">MultivaluedHashMap</h2>
<!-- backwards compatibility -->
<a id="schemamultivaluedhashmap"></a>
<a id="schema_MultivaluedHashMap"></a>
<a id="tocSmultivaluedhashmap"></a>
<a id="tocsmultivaluedhashmap"></a>

```json
{
  "empty": true,
  "loadFactor": 0,
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|empty|boolean|false|none|none|
|loadFactor|number(float)|false|none|none|
|threshold|integer(int32)|false|none|none|

<h2 id="tocS_PartialImportRepresentation">PartialImportRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemapartialimportrepresentation"></a>
<a id="schema_PartialImportRepresentation"></a>
<a id="tocSpartialimportrepresentation"></a>
<a id="tocspartialimportrepresentation"></a>

```json
{
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "ifResourceExists": "string",
  "policy": "SKIP",
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|none|
|groups|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|
|identityProviders|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|none|
|ifResourceExists|string|false|none|none|
|policy|string|false|none|none|
|roles|[RolesRepresentation](#schemarolesrepresentation)|false|none|none|
|users|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|SKIP|
|policy|OVERWRITE|
|policy|FAIL|

<h2 id="tocS_PasswordPolicyTypeRepresentation">PasswordPolicyTypeRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemapasswordpolicytyperepresentation"></a>
<a id="schema_PasswordPolicyTypeRepresentation"></a>
<a id="tocSpasswordpolicytyperepresentation"></a>
<a id="tocspasswordpolicytyperepresentation"></a>

```json
{
  "configType": "string",
  "defaultValue": "string",
  "displayName": "string",
  "id": "string",
  "multipleSupported": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configType|string|false|none|none|
|defaultValue|string|false|none|none|
|displayName|string|false|none|none|
|id|string|false|none|none|
|multipleSupported|boolean|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "claims": {},
  "rsid": "string",
  "rsname": "string",
  "scopes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claims|object|false|none|none|
|rsid|string|false|none|none|
|rsname|string|false|none|none|
|scopes|[string]|false|none|none|

<h2 id="tocS_PolicyRepresentation">PolicyRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemapolicyrepresentation"></a>
<a id="schema_PolicyRepresentation"></a>
<a id="tocSpolicyrepresentation"></a>
<a id="tocspolicyrepresentation"></a>

```json
{
  "config": {},
  "decisionStrategy": "AFFIRMATIVE",
  "description": "string",
  "id": "string",
  "logic": "POSITIVE",
  "name": "string",
  "owner": "string",
  "policies": [
    "string"
  ],
  "resources": [
    "string"
  ],
  "resourcesData": [
    {
      "attributes": {},
      "displayName": "string",
      "icon_uri": "string",
      "id": "string",
      "name": "string",
      "ownerManagedAccess": true,
      "scopes": [
        {}
      ],
      "type": "string",
      "uris": [
        "string"
      ]
    }
  ],
  "scopes": [
    "string"
  ],
  "scopesData": [
    {
      "displayName": "string",
      "iconUri": "string",
      "id": "string",
      "name": "string",
      "policies": [
        {}
      ],
      "resources": [
        {}
      ]
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|decisionStrategy|string|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|logic|string|false|none|none|
|name|string|false|none|none|
|owner|string|false|none|none|
|policies|[string]|false|none|none|
|resources|[string]|false|none|none|
|resourcesData|[[ResourceRepresentation](#schemaresourcerepresentation)]|false|none|none|
|scopes|[string]|false|none|none|
|scopesData|[[ScopeRepresentation](#schemascoperepresentation)]|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|decisionStrategy|AFFIRMATIVE|
|decisionStrategy|UNANIMOUS|
|decisionStrategy|CONSENSUS|
|logic|POSITIVE|
|logic|NEGATIVE|

<h2 id="tocS_ProfileInfoRepresentation">ProfileInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaprofileinforepresentation"></a>
<a id="schema_ProfileInfoRepresentation"></a>
<a id="tocSprofileinforepresentation"></a>
<a id="tocsprofileinforepresentation"></a>

```json
{
  "disabledFeatures": [
    "string"
  ],
  "experimentalFeatures": [
    "string"
  ],
  "name": "string",
  "previewFeatures": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledFeatures|[string]|false|none|none|
|experimentalFeatures|[string]|false|none|none|
|name|string|false|none|none|
|previewFeatures|[string]|false|none|none|

<h2 id="tocS_ProtocolMapperRepresentation">ProtocolMapperRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolmapperrepresentation"></a>
<a id="schema_ProtocolMapperRepresentation"></a>
<a id="tocSprotocolmapperrepresentation"></a>
<a id="tocsprotocolmapperrepresentation"></a>

```json
{
  "config": {},
  "id": "string",
  "name": "string",
  "protocol": "string",
  "protocolMapper": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|protocol|string|false|none|none|
|protocolMapper|string|false|none|none|

<h2 id="tocS_ProviderRepresentation">ProviderRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaproviderrepresentation"></a>
<a id="schema_ProviderRepresentation"></a>
<a id="tocSproviderrepresentation"></a>
<a id="tocsproviderrepresentation"></a>

```json
{
  "operationalInfo": {},
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationalInfo|object|false|none|none|
|order|integer(int32)|false|none|none|

<h2 id="tocS_RealmEventsConfigRepresentation">RealmEventsConfigRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemarealmeventsconfigrepresentation"></a>
<a id="schema_RealmEventsConfigRepresentation"></a>
<a id="tocSrealmeventsconfigrepresentation"></a>
<a id="tocsrealmeventsconfigrepresentation"></a>

```json
{
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminEventsDetailsEnabled|boolean|false|none|none|
|adminEventsEnabled|boolean|false|none|none|
|enabledEventTypes|[string]|false|none|none|
|eventsEnabled|boolean|false|none|none|
|eventsExpiration|integer(int64)|false|none|none|
|eventsListeners|[string]|false|none|none|

<h2 id="tocS_RealmRepresentation">RealmRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemarealmrepresentation"></a>
<a id="schema_RealmRepresentation"></a>
<a id="tocSrealmrepresentation"></a>
<a id="tocsrealmrepresentation"></a>

```json
{
  "accessCodeLifespan": 0,
  "accessCodeLifespanLogin": 0,
  "accessCodeLifespanUserAction": 0,
  "accessTokenLifespan": 0,
  "accessTokenLifespanForImplicitFlow": 0,
  "accountTheme": "string",
  "actionTokenGeneratedByAdminLifespan": 0,
  "actionTokenGeneratedByUserLifespan": 0,
  "adminEventsDetailsEnabled": true,
  "adminEventsEnabled": true,
  "adminTheme": "string",
  "attributes": {},
  "authenticationFlows": [
    {
      "alias": "string",
      "authenticationExecutions": [
        {
          "authenticator": "string",
          "authenticatorConfig": "string",
          "authenticatorFlow": true,
          "autheticatorFlow": true,
          "flowAlias": "string",
          "priority": 0,
          "requirement": "string",
          "userSetupAllowed": true
        }
      ],
      "builtIn": true,
      "description": "string",
      "id": "string",
      "providerId": "string",
      "topLevel": true
    }
  ],
  "authenticatorConfig": [
    {
      "alias": "string",
      "config": {},
      "id": "string"
    }
  ],
  "browserFlow": "string",
  "browserSecurityHeaders": {},
  "bruteForceProtected": true,
  "clientAuthenticationFlow": "string",
  "clientScopeMappings": {},
  "clientScopes": [
    {
      "attributes": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ]
    }
  ],
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clients": [
    {
      "access": {},
      "adminUrl": "string",
      "alwaysDisplayInConsole": true,
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "authorizationServicesEnabled": true,
      "authorizationSettings": {
        "allowRemoteResourceManagement": true,
        "clientId": "string",
        "decisionStrategy": "AFFIRMATIVE",
        "id": "string",
        "name": "string",
        "policies": [
          {
            "config": {},
            "decisionStrategy": "AFFIRMATIVE",
            "description": "string",
            "id": "string",
            "logic": "POSITIVE",
            "name": "string",
            "owner": "string",
            "policies": [
              "string"
            ],
            "resources": [
              "string"
            ],
            "resourcesData": [
              {}
            ],
            "scopes": [
              "string"
            ],
            "scopesData": [
              {}
            ],
            "type": "string"
          }
        ],
        "policyEnforcementMode": "ENFORCING",
        "resources": [
          {
            "attributes": {},
            "displayName": "string",
            "icon_uri": "string",
            "id": "string",
            "name": "string",
            "ownerManagedAccess": true,
            "scopes": [
              {}
            ],
            "type": "string",
            "uris": [
              "string"
            ]
          }
        ],
        "scopes": [
          {
            "displayName": "string",
            "iconUri": "string",
            "id": "string",
            "name": "string",
            "policies": [
              {}
            ],
            "resources": [
              {}
            ]
          }
        ]
      },
      "baseUrl": "string",
      "bearerOnly": true,
      "clientAuthenticatorType": "string",
      "clientId": "string",
      "consentRequired": true,
      "defaultClientScopes": [
        "string"
      ],
      "defaultRoles": [
        "string"
      ],
      "description": "string",
      "directAccessGrantsEnabled": true,
      "enabled": true,
      "frontchannelLogout": true,
      "fullScopeAllowed": true,
      "id": "string",
      "implicitFlowEnabled": true,
      "name": "string",
      "nodeReRegistrationTimeout": 0,
      "notBefore": 0,
      "optionalClientScopes": [
        "string"
      ],
      "origin": "string",
      "protocol": "string",
      "protocolMappers": [
        {
          "config": {},
          "id": "string",
          "name": "string",
          "protocol": "string",
          "protocolMapper": "string"
        }
      ],
      "publicClient": true,
      "redirectUris": [
        "string"
      ],
      "registeredNodes": {},
      "registrationAccessToken": "string",
      "rootUrl": "string",
      "secret": "string",
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": true,
      "surrogateAuthRequired": true,
      "webOrigins": [
        "string"
      ]
    }
  ],
  "components": {
    "empty": true,
    "loadFactor": 0,
    "threshold": 0
  },
  "defaultDefaultClientScopes": [
    "string"
  ],
  "defaultGroups": [
    "string"
  ],
  "defaultLocale": "string",
  "defaultOptionalClientScopes": [
    "string"
  ],
  "defaultRoles": [
    "string"
  ],
  "defaultSignatureAlgorithm": "string",
  "directGrantFlow": "string",
  "displayName": "string",
  "displayNameHtml": "string",
  "dockerAuthenticationFlow": "string",
  "duplicateEmailsAllowed": true,
  "editUsernameAllowed": true,
  "emailTheme": "string",
  "enabled": true,
  "enabledEventTypes": [
    "string"
  ],
  "eventsEnabled": true,
  "eventsExpiration": 0,
  "eventsListeners": [
    "string"
  ],
  "failureFactor": 0,
  "federatedUsers": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "groups": [
    {
      "access": {},
      "attributes": {},
      "clientRoles": {},
      "id": "string",
      "name": "string",
      "path": "string",
      "realmRoles": [
        "string"
      ],
      "subGroups": [
        {}
      ]
    }
  ],
  "id": "string",
  "identityProviderMappers": [
    {
      "config": {},
      "id": "string",
      "identityProviderAlias": "string",
      "identityProviderMapper": "string",
      "name": "string"
    }
  ],
  "identityProviders": [
    {
      "addReadTokenRoleOnCreate": true,
      "alias": "string",
      "config": {},
      "displayName": "string",
      "enabled": true,
      "firstBrokerLoginFlowAlias": "string",
      "internalId": "string",
      "linkOnly": true,
      "postBrokerLoginFlowAlias": "string",
      "providerId": "string",
      "storeToken": true,
      "trustEmail": true
    }
  ],
  "internationalizationEnabled": true,
  "keycloakVersion": "string",
  "loginTheme": "string",
  "loginWithEmailAllowed": true,
  "maxDeltaTimeSeconds": 0,
  "maxFailureWaitSeconds": 0,
  "minimumQuickLoginWaitSeconds": 0,
  "notBefore": 0,
  "offlineSessionIdleTimeout": 0,
  "offlineSessionMaxLifespan": 0,
  "offlineSessionMaxLifespanEnabled": true,
  "otpPolicyAlgorithm": "string",
  "otpPolicyDigits": 0,
  "otpPolicyInitialCounter": 0,
  "otpPolicyLookAheadWindow": 0,
  "otpPolicyPeriod": 0,
  "otpPolicyType": "string",
  "otpSupportedApplications": [
    "string"
  ],
  "passwordPolicy": "string",
  "permanentLockout": true,
  "protocolMappers": [
    {
      "config": {},
      "id": "string",
      "name": "string",
      "protocol": "string",
      "protocolMapper": "string"
    }
  ],
  "quickLoginCheckMilliSeconds": 0,
  "realm": "string",
  "refreshTokenMaxReuse": 0,
  "registrationAllowed": true,
  "registrationEmailAsUsername": true,
  "registrationFlow": "string",
  "rememberMe": true,
  "requiredActions": [
    {
      "alias": "string",
      "config": {},
      "defaultAction": true,
      "enabled": true,
      "name": "string",
      "priority": 0,
      "providerId": "string"
    }
  ],
  "resetCredentialsFlow": "string",
  "resetPasswordAllowed": true,
  "revokeRefreshToken": true,
  "roles": {
    "client": {},
    "realm": [
      {
        "attributes": {},
        "clientRole": true,
        "composite": true,
        "composites": {
          "client": {},
          "realm": [
            "string"
          ]
        },
        "containerId": "string",
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "scopeMappings": [
    {
      "client": "string",
      "clientScope": "string",
      "roles": [
        "string"
      ],
      "self": "string"
    }
  ],
  "smtpServer": {},
  "sslRequired": "string",
  "ssoSessionIdleTimeout": 0,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespan": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "supportedLocales": [
    "string"
  ],
  "userFederationMappers": [
    {
      "config": {},
      "federationMapperType": "string",
      "federationProviderDisplayName": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "userFederationProviders": [
    {
      "changedSyncPeriod": 0,
      "config": {},
      "displayName": "string",
      "fullSyncPeriod": 0,
      "id": "string",
      "lastSync": 0,
      "priority": 0,
      "providerName": "string"
    }
  ],
  "userManagedAccessAllowed": true,
  "users": [
    {
      "access": {},
      "attributes": {},
      "clientConsents": [
        {
          "clientId": "string",
          "createdDate": 0,
          "grantedClientScopes": [
            "string"
          ],
          "lastUpdatedDate": 0
        }
      ],
      "clientRoles": {},
      "createdTimestamp": 0,
      "credentials": [
        {
          "createdDate": 0,
          "credentialData": "string",
          "id": "string",
          "priority": 0,
          "secretData": "string",
          "temporary": true,
          "type": "string",
          "userLabel": "string",
          "value": "string"
        }
      ],
      "disableableCredentialTypes": [
        "string"
      ],
      "email": "string",
      "emailVerified": true,
      "enabled": true,
      "federatedIdentities": [
        {
          "identityProvider": "string",
          "userId": "string",
          "userName": "string"
        }
      ],
      "federationLink": "string",
      "firstName": "string",
      "groups": [
        "string"
      ],
      "id": "string",
      "lastName": "string",
      "notBefore": 0,
      "origin": "string",
      "realmRoles": [
        "string"
      ],
      "requiredActions": [
        "string"
      ],
      "self": "string",
      "serviceAccountClientId": "string",
      "username": "string"
    }
  ],
  "verifyEmail": true,
  "waitIncrementSeconds": 0,
  "webAuthnPolicyAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyAttestationConveyancePreference": "string",
  "webAuthnPolicyAuthenticatorAttachment": "string",
  "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [
    "string"
  ],
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "string",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "string",
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessRequireResidentKey": "string",
  "webAuthnPolicyPasswordlessRpEntityName": "string",
  "webAuthnPolicyPasswordlessRpId": "string",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "string",
  "webAuthnPolicyRequireResidentKey": "string",
  "webAuthnPolicyRpEntityName": "string",
  "webAuthnPolicyRpId": "string",
  "webAuthnPolicySignatureAlgorithms": [
    "string"
  ],
  "webAuthnPolicyUserVerificationRequirement": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessCodeLifespan|integer(int32)|false|none|none|
|accessCodeLifespanLogin|integer(int32)|false|none|none|
|accessCodeLifespanUserAction|integer(int32)|false|none|none|
|accessTokenLifespan|integer(int32)|false|none|none|
|accessTokenLifespanForImplicitFlow|integer(int32)|false|none|none|
|accountTheme|string|false|none|none|
|actionTokenGeneratedByAdminLifespan|integer(int32)|false|none|none|
|actionTokenGeneratedByUserLifespan|integer(int32)|false|none|none|
|adminEventsDetailsEnabled|boolean|false|none|none|
|adminEventsEnabled|boolean|false|none|none|
|adminTheme|string|false|none|none|
|attributes|object|false|none|none|
|authenticationFlows|[[AuthenticationFlowRepresentation](#schemaauthenticationflowrepresentation)]|false|none|none|
|authenticatorConfig|[[AuthenticatorConfigRepresentation](#schemaauthenticatorconfigrepresentation)]|false|none|none|
|browserFlow|string|false|none|none|
|browserSecurityHeaders|object|false|none|none|
|bruteForceProtected|boolean|false|none|none|
|clientAuthenticationFlow|string|false|none|none|
|clientScopeMappings|object|false|none|none|
|clientScopes|[[ClientScopeRepresentation](#schemaclientscoperepresentation)]|false|none|none|
|clientSessionIdleTimeout|integer(int32)|false|none|none|
|clientSessionMaxLifespan|integer(int32)|false|none|none|
|clients|[[ClientRepresentation](#schemaclientrepresentation)]|false|none|none|
|components|[MultivaluedHashMap](#schemamultivaluedhashmap)|false|none|none|
|defaultDefaultClientScopes|[string]|false|none|none|
|defaultGroups|[string]|false|none|none|
|defaultLocale|string|false|none|none|
|defaultOptionalClientScopes|[string]|false|none|none|
|defaultRoles|[string]|false|none|none|
|defaultSignatureAlgorithm|string|false|none|none|
|directGrantFlow|string|false|none|none|
|displayName|string|false|none|none|
|displayNameHtml|string|false|none|none|
|dockerAuthenticationFlow|string|false|none|none|
|duplicateEmailsAllowed|boolean|false|none|none|
|editUsernameAllowed|boolean|false|none|none|
|emailTheme|string|false|none|none|
|enabled|boolean|false|none|none|
|enabledEventTypes|[string]|false|none|none|
|eventsEnabled|boolean|false|none|none|
|eventsExpiration|integer(int64)|false|none|none|
|eventsListeners|[string]|false|none|none|
|failureFactor|integer(int32)|false|none|none|
|federatedUsers|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|
|groups|[[GroupRepresentation](#schemagrouprepresentation)]|false|none|none|
|id|string|false|none|none|
|identityProviderMappers|[[IdentityProviderMapperRepresentation](#schemaidentityprovidermapperrepresentation)]|false|none|none|
|identityProviders|[[IdentityProviderRepresentation](#schemaidentityproviderrepresentation)]|false|none|none|
|internationalizationEnabled|boolean|false|none|none|
|keycloakVersion|string|false|none|none|
|loginTheme|string|false|none|none|
|loginWithEmailAllowed|boolean|false|none|none|
|maxDeltaTimeSeconds|integer(int32)|false|none|none|
|maxFailureWaitSeconds|integer(int32)|false|none|none|
|minimumQuickLoginWaitSeconds|integer(int32)|false|none|none|
|notBefore|integer(int32)|false|none|none|
|offlineSessionIdleTimeout|integer(int32)|false|none|none|
|offlineSessionMaxLifespan|integer(int32)|false|none|none|
|offlineSessionMaxLifespanEnabled|boolean|false|none|none|
|otpPolicyAlgorithm|string|false|none|none|
|otpPolicyDigits|integer(int32)|false|none|none|
|otpPolicyInitialCounter|integer(int32)|false|none|none|
|otpPolicyLookAheadWindow|integer(int32)|false|none|none|
|otpPolicyPeriod|integer(int32)|false|none|none|
|otpPolicyType|string|false|none|none|
|otpSupportedApplications|[string]|false|none|none|
|passwordPolicy|string|false|none|none|
|permanentLockout|boolean|false|none|none|
|protocolMappers|[[ProtocolMapperRepresentation](#schemaprotocolmapperrepresentation)]|false|none|none|
|quickLoginCheckMilliSeconds|integer(int64)|false|none|none|
|realm|string|false|none|none|
|refreshTokenMaxReuse|integer(int32)|false|none|none|
|registrationAllowed|boolean|false|none|none|
|registrationEmailAsUsername|boolean|false|none|none|
|registrationFlow|string|false|none|none|
|rememberMe|boolean|false|none|none|
|requiredActions|[[RequiredActionProviderRepresentation](#schemarequiredactionproviderrepresentation)]|false|none|none|
|resetCredentialsFlow|string|false|none|none|
|resetPasswordAllowed|boolean|false|none|none|
|revokeRefreshToken|boolean|false|none|none|
|roles|[RolesRepresentation](#schemarolesrepresentation)|false|none|none|
|scopeMappings|[[ScopeMappingRepresentation](#schemascopemappingrepresentation)]|false|none|none|
|smtpServer|object|false|none|none|
|sslRequired|string|false|none|none|
|ssoSessionIdleTimeout|integer(int32)|false|none|none|
|ssoSessionIdleTimeoutRememberMe|integer(int32)|false|none|none|
|ssoSessionMaxLifespan|integer(int32)|false|none|none|
|ssoSessionMaxLifespanRememberMe|integer(int32)|false|none|none|
|supportedLocales|[string]|false|none|none|
|userFederationMappers|[[UserFederationMapperRepresentation](#schemauserfederationmapperrepresentation)]|false|none|none|
|userFederationProviders|[[UserFederationProviderRepresentation](#schemauserfederationproviderrepresentation)]|false|none|none|
|userManagedAccessAllowed|boolean|false|none|none|
|users|[[UserRepresentation](#schemauserrepresentation)]|false|none|none|
|verifyEmail|boolean|false|none|none|
|waitIncrementSeconds|integer(int32)|false|none|none|
|webAuthnPolicyAcceptableAaguids|[string]|false|none|none|
|webAuthnPolicyAttestationConveyancePreference|string|false|none|none|
|webAuthnPolicyAuthenticatorAttachment|string|false|none|none|
|webAuthnPolicyAvoidSameAuthenticatorRegister|boolean|false|none|none|
|webAuthnPolicyCreateTimeout|integer(int32)|false|none|none|
|webAuthnPolicyPasswordlessAcceptableAaguids|[string]|false|none|none|
|webAuthnPolicyPasswordlessAttestationConveyancePreference|string|false|none|none|
|webAuthnPolicyPasswordlessAuthenticatorAttachment|string|false|none|none|
|webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister|boolean|false|none|none|
|webAuthnPolicyPasswordlessCreateTimeout|integer(int32)|false|none|none|
|webAuthnPolicyPasswordlessRequireResidentKey|string|false|none|none|
|webAuthnPolicyPasswordlessRpEntityName|string|false|none|none|
|webAuthnPolicyPasswordlessRpId|string|false|none|none|
|webAuthnPolicyPasswordlessSignatureAlgorithms|[string]|false|none|none|
|webAuthnPolicyPasswordlessUserVerificationRequirement|string|false|none|none|
|webAuthnPolicyRequireResidentKey|string|false|none|none|
|webAuthnPolicyRpEntityName|string|false|none|none|
|webAuthnPolicyRpId|string|false|none|none|
|webAuthnPolicySignatureAlgorithms|[string]|false|none|none|
|webAuthnPolicyUserVerificationRequirement|string|false|none|none|

<h2 id="tocS_RequiredActionProviderRepresentation">RequiredActionProviderRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemarequiredactionproviderrepresentation"></a>
<a id="schema_RequiredActionProviderRepresentation"></a>
<a id="tocSrequiredactionproviderrepresentation"></a>
<a id="tocsrequiredactionproviderrepresentation"></a>

```json
{
  "alias": "string",
  "config": {},
  "defaultAction": true,
  "enabled": true,
  "name": "string",
  "priority": 0,
  "providerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|config|object|false|none|none|
|defaultAction|boolean|false|none|none|
|enabled|boolean|false|none|none|
|name|string|false|none|none|
|priority|integer(int32)|false|none|none|
|providerId|string|false|none|none|

<h2 id="tocS_ResourceRepresentation">ResourceRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerepresentation"></a>
<a id="schema_ResourceRepresentation"></a>
<a id="tocSresourcerepresentation"></a>
<a id="tocsresourcerepresentation"></a>

```json
{
  "attributes": {},
  "displayName": "string",
  "icon_uri": "string",
  "id": "string",
  "name": "string",
  "ownerManagedAccess": true,
  "scopes": [
    {
      "displayName": "string",
      "iconUri": "string",
      "id": "string",
      "name": "string",
      "policies": [
        {}
      ],
      "resources": [
        {}
      ]
    }
  ],
  "type": "string",
  "uris": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|displayName|string|false|none|none|
|icon_uri|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|ownerManagedAccess|boolean|false|none|none|
|scopes|[[ScopeRepresentation](#schemascoperepresentation)]|false|none|none|
|type|string|false|none|none|
|uris|[string]|false|none|none|

<h2 id="tocS_ResourceServerRepresentation">ResourceServerRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserverrepresentation"></a>
<a id="schema_ResourceServerRepresentation"></a>
<a id="tocSresourceserverrepresentation"></a>
<a id="tocsresourceserverrepresentation"></a>

```json
{
  "allowRemoteResourceManagement": true,
  "clientId": "string",
  "decisionStrategy": "AFFIRMATIVE",
  "id": "string",
  "name": "string",
  "policies": [
    {
      "config": {},
      "decisionStrategy": "AFFIRMATIVE",
      "description": "string",
      "id": "string",
      "logic": "POSITIVE",
      "name": "string",
      "owner": "string",
      "policies": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "resourcesData": [
        {}
      ],
      "scopes": [
        "string"
      ],
      "scopesData": [
        {}
      ],
      "type": "string"
    }
  ],
  "policyEnforcementMode": "ENFORCING",
  "resources": [
    {
      "attributes": {},
      "displayName": "string",
      "icon_uri": "string",
      "id": "string",
      "name": "string",
      "ownerManagedAccess": true,
      "scopes": [
        {}
      ],
      "type": "string",
      "uris": [
        "string"
      ]
    }
  ],
  "scopes": [
    {
      "displayName": "string",
      "iconUri": "string",
      "id": "string",
      "name": "string",
      "policies": [
        {}
      ],
      "resources": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowRemoteResourceManagement|boolean|false|none|none|
|clientId|string|false|none|none|
|decisionStrategy|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|policies|[[PolicyRepresentation](#schemapolicyrepresentation)]|false|none|none|
|policyEnforcementMode|string|false|none|none|
|resources|[[ResourceRepresentation](#schemaresourcerepresentation)]|false|none|none|
|scopes|[[ScopeRepresentation](#schemascoperepresentation)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|decisionStrategy|AFFIRMATIVE|
|decisionStrategy|UNANIMOUS|
|decisionStrategy|CONSENSUS|
|policyEnforcementMode|ENFORCING|
|policyEnforcementMode|PERMISSIVE|
|policyEnforcementMode|DISABLED|

<h2 id="tocS_RoleRepresentation">RoleRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemarolerepresentation"></a>
<a id="schema_RoleRepresentation"></a>
<a id="tocSrolerepresentation"></a>
<a id="tocsrolerepresentation"></a>

```json
{
  "attributes": {},
  "clientRole": true,
  "composite": true,
  "composites": {
    "client": {},
    "realm": [
      "string"
    ]
  },
  "containerId": "string",
  "description": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|clientRole|boolean|false|none|none|
|composite|boolean|false|none|none|
|composites|[RoleRepresentation-Composites](#schemarolerepresentation-composites)|false|none|none|
|containerId|string|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_RoleRepresentation-Composites">RoleRepresentation-Composites</h2>
<!-- backwards compatibility -->
<a id="schemarolerepresentation-composites"></a>
<a id="schema_RoleRepresentation-Composites"></a>
<a id="tocSrolerepresentation-composites"></a>
<a id="tocsrolerepresentation-composites"></a>

```json
{
  "client": {},
  "realm": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|object|false|none|none|
|realm|[string]|false|none|none|

<h2 id="tocS_RolesRepresentation">RolesRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemarolesrepresentation"></a>
<a id="schema_RolesRepresentation"></a>
<a id="tocSrolesrepresentation"></a>
<a id="tocsrolesrepresentation"></a>

```json
{
  "client": {},
  "realm": [
    {
      "attributes": {},
      "clientRole": true,
      "composite": true,
      "composites": {
        "client": {},
        "realm": [
          "string"
        ]
      },
      "containerId": "string",
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|object|false|none|none|
|realm|[[RoleRepresentation](#schemarolerepresentation)]|false|none|none|

<h2 id="tocS_ScopeMappingRepresentation">ScopeMappingRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemascopemappingrepresentation"></a>
<a id="schema_ScopeMappingRepresentation"></a>
<a id="tocSscopemappingrepresentation"></a>
<a id="tocsscopemappingrepresentation"></a>

```json
{
  "client": "string",
  "clientScope": "string",
  "roles": [
    "string"
  ],
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|string|false|none|none|
|clientScope|string|false|none|none|
|roles|[string]|false|none|none|
|self|string|false|none|none|

<h2 id="tocS_ScopeRepresentation">ScopeRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemascoperepresentation"></a>
<a id="schema_ScopeRepresentation"></a>
<a id="tocSscoperepresentation"></a>
<a id="tocsscoperepresentation"></a>

```json
{
  "displayName": "string",
  "iconUri": "string",
  "id": "string",
  "name": "string",
  "policies": [
    {
      "config": {},
      "decisionStrategy": "AFFIRMATIVE",
      "description": "string",
      "id": "string",
      "logic": "POSITIVE",
      "name": "string",
      "owner": "string",
      "policies": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "resourcesData": [
        {}
      ],
      "scopes": [
        "string"
      ],
      "scopesData": [
        {}
      ],
      "type": "string"
    }
  ],
  "resources": [
    {
      "attributes": {},
      "displayName": "string",
      "icon_uri": "string",
      "id": "string",
      "name": "string",
      "ownerManagedAccess": true,
      "scopes": [
        {}
      ],
      "type": "string",
      "uris": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|iconUri|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|policies|[[PolicyRepresentation](#schemapolicyrepresentation)]|false|none|none|
|resources|[[ResourceRepresentation](#schemaresourcerepresentation)]|false|none|none|

<h2 id="tocS_ServerInfoRepresentation">ServerInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaserverinforepresentation"></a>
<a id="schema_ServerInfoRepresentation"></a>
<a id="tocSserverinforepresentation"></a>
<a id="tocsserverinforepresentation"></a>

```json
{
  "builtinProtocolMappers": {},
  "clientImporters": [
    {}
  ],
  "clientInstallations": {},
  "componentTypes": {},
  "enums": {},
  "identityProviders": [
    {}
  ],
  "memoryInfo": {
    "free": 0,
    "freeFormated": "string",
    "freePercentage": 0,
    "total": 0,
    "totalFormated": "string",
    "used": 0,
    "usedFormated": "string"
  },
  "passwordPolicies": [
    {
      "configType": "string",
      "defaultValue": "string",
      "displayName": "string",
      "id": "string",
      "multipleSupported": true
    }
  ],
  "profileInfo": {
    "disabledFeatures": [
      "string"
    ],
    "experimentalFeatures": [
      "string"
    ],
    "name": "string",
    "previewFeatures": [
      "string"
    ]
  },
  "protocolMapperTypes": {},
  "providers": {},
  "socialProviders": [
    {}
  ],
  "systemInfo": {
    "fileEncoding": "string",
    "javaHome": "string",
    "javaRuntime": "string",
    "javaVendor": "string",
    "javaVersion": "string",
    "javaVm": "string",
    "javaVmVersion": "string",
    "osArchitecture": "string",
    "osName": "string",
    "osVersion": "string",
    "serverTime": "string",
    "uptime": "string",
    "uptimeMillis": 0,
    "userDir": "string",
    "userLocale": "string",
    "userName": "string",
    "userTimezone": "string",
    "version": "string"
  },
  "themes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtinProtocolMappers|object|false|none|none|
|clientImporters|[object]|false|none|none|
|clientInstallations|object|false|none|none|
|componentTypes|object|false|none|none|
|enums|object|false|none|none|
|identityProviders|[object]|false|none|none|
|memoryInfo|[MemoryInfoRepresentation](#schemamemoryinforepresentation)|false|none|none|
|passwordPolicies|[[PasswordPolicyTypeRepresentation](#schemapasswordpolicytyperepresentation)]|false|none|none|
|profileInfo|[ProfileInfoRepresentation](#schemaprofileinforepresentation)|false|none|none|
|protocolMapperTypes|object|false|none|none|
|providers|object|false|none|none|
|socialProviders|[object]|false|none|none|
|systemInfo|[SystemInfoRepresentation](#schemasysteminforepresentation)|false|none|none|
|themes|object|false|none|none|

<h2 id="tocS_SpiInfoRepresentation">SpiInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaspiinforepresentation"></a>
<a id="schema_SpiInfoRepresentation"></a>
<a id="tocSspiinforepresentation"></a>
<a id="tocsspiinforepresentation"></a>

```json
{
  "internal": true,
  "providers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internal|boolean|false|none|none|
|providers|object|false|none|none|

<h2 id="tocS_SynchronizationResult">SynchronizationResult</h2>
<!-- backwards compatibility -->
<a id="schemasynchronizationresult"></a>
<a id="schema_SynchronizationResult"></a>
<a id="tocSsynchronizationresult"></a>
<a id="tocssynchronizationresult"></a>

```json
{
  "added": 0,
  "failed": 0,
  "ignored": true,
  "removed": 0,
  "status": "string",
  "updated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|integer(int32)|false|none|none|
|failed|integer(int32)|false|none|none|
|ignored|boolean|false|none|none|
|removed|integer(int32)|false|none|none|
|status|string|false|none|none|
|updated|integer(int32)|false|none|none|

<h2 id="tocS_SystemInfoRepresentation">SystemInfoRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemasysteminforepresentation"></a>
<a id="schema_SystemInfoRepresentation"></a>
<a id="tocSsysteminforepresentation"></a>
<a id="tocssysteminforepresentation"></a>

```json
{
  "fileEncoding": "string",
  "javaHome": "string",
  "javaRuntime": "string",
  "javaVendor": "string",
  "javaVersion": "string",
  "javaVm": "string",
  "javaVmVersion": "string",
  "osArchitecture": "string",
  "osName": "string",
  "osVersion": "string",
  "serverTime": "string",
  "uptime": "string",
  "uptimeMillis": 0,
  "userDir": "string",
  "userLocale": "string",
  "userName": "string",
  "userTimezone": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileEncoding|string|false|none|none|
|javaHome|string|false|none|none|
|javaRuntime|string|false|none|none|
|javaVendor|string|false|none|none|
|javaVersion|string|false|none|none|
|javaVm|string|false|none|none|
|javaVmVersion|string|false|none|none|
|osArchitecture|string|false|none|none|
|osName|string|false|none|none|
|osVersion|string|false|none|none|
|serverTime|string|false|none|none|
|uptime|string|false|none|none|
|uptimeMillis|integer(int64)|false|none|none|
|userDir|string|false|none|none|
|userLocale|string|false|none|none|
|userName|string|false|none|none|
|userTimezone|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_TestLdapConnectionRepresentation">TestLdapConnectionRepresentation</h2>
<!-- backwards compatibility -->
<a id="schematestldapconnectionrepresentation"></a>
<a id="schema_TestLdapConnectionRepresentation"></a>
<a id="tocStestldapconnectionrepresentation"></a>
<a id="tocstestldapconnectionrepresentation"></a>

```json
{
  "action": "string",
  "bindCredential": "string",
  "bindDn": "string",
  "componentId": "string",
  "connectionTimeout": "string",
  "connectionUrl": "string",
  "startTls": "string",
  "useTruststoreSpi": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|bindCredential|string|false|none|none|
|bindDn|string|false|none|none|
|componentId|string|false|none|none|
|connectionTimeout|string|false|none|none|
|connectionUrl|string|false|none|none|
|startTls|string|false|none|none|
|useTruststoreSpi|string|false|none|none|

<h2 id="tocS_UserConsentRepresentation">UserConsentRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemauserconsentrepresentation"></a>
<a id="schema_UserConsentRepresentation"></a>
<a id="tocSuserconsentrepresentation"></a>
<a id="tocsuserconsentrepresentation"></a>

```json
{
  "clientId": "string",
  "createdDate": 0,
  "grantedClientScopes": [
    "string"
  ],
  "lastUpdatedDate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|createdDate|integer(int64)|false|none|none|
|grantedClientScopes|[string]|false|none|none|
|lastUpdatedDate|integer(int64)|false|none|none|

<h2 id="tocS_UserFederationMapperRepresentation">UserFederationMapperRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemauserfederationmapperrepresentation"></a>
<a id="schema_UserFederationMapperRepresentation"></a>
<a id="tocSuserfederationmapperrepresentation"></a>
<a id="tocsuserfederationmapperrepresentation"></a>

```json
{
  "config": {},
  "federationMapperType": "string",
  "federationProviderDisplayName": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|federationMapperType|string|false|none|none|
|federationProviderDisplayName|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_UserFederationProviderRepresentation">UserFederationProviderRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemauserfederationproviderrepresentation"></a>
<a id="schema_UserFederationProviderRepresentation"></a>
<a id="tocSuserfederationproviderrepresentation"></a>
<a id="tocsuserfederationproviderrepresentation"></a>

```json
{
  "changedSyncPeriod": 0,
  "config": {},
  "displayName": "string",
  "fullSyncPeriod": 0,
  "id": "string",
  "lastSync": 0,
  "priority": 0,
  "providerName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changedSyncPeriod|integer(int32)|false|none|none|
|config|object|false|none|none|
|displayName|string|false|none|none|
|fullSyncPeriod|integer(int32)|false|none|none|
|id|string|false|none|none|
|lastSync|integer(int32)|false|none|none|
|priority|integer(int32)|false|none|none|
|providerName|string|false|none|none|

<h2 id="tocS_UserRepresentation">UserRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemauserrepresentation"></a>
<a id="schema_UserRepresentation"></a>
<a id="tocSuserrepresentation"></a>
<a id="tocsuserrepresentation"></a>

```json
{
  "access": {},
  "attributes": {},
  "clientConsents": [
    {
      "clientId": "string",
      "createdDate": 0,
      "grantedClientScopes": [
        "string"
      ],
      "lastUpdatedDate": 0
    }
  ],
  "clientRoles": {},
  "createdTimestamp": 0,
  "credentials": [
    {
      "createdDate": 0,
      "credentialData": "string",
      "id": "string",
      "priority": 0,
      "secretData": "string",
      "temporary": true,
      "type": "string",
      "userLabel": "string",
      "value": "string"
    }
  ],
  "disableableCredentialTypes": [
    "string"
  ],
  "email": "string",
  "emailVerified": true,
  "enabled": true,
  "federatedIdentities": [
    {
      "identityProvider": "string",
      "userId": "string",
      "userName": "string"
    }
  ],
  "federationLink": "string",
  "firstName": "string",
  "groups": [
    "string"
  ],
  "id": "string",
  "lastName": "string",
  "notBefore": 0,
  "origin": "string",
  "realmRoles": [
    "string"
  ],
  "requiredActions": [
    "string"
  ],
  "self": "string",
  "serviceAccountClientId": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|object|false|none|none|
|attributes|object|false|none|none|
|clientConsents|[[UserConsentRepresentation](#schemauserconsentrepresentation)]|false|none|none|
|clientRoles|object|false|none|none|
|createdTimestamp|integer(int64)|false|none|none|
|credentials|[[CredentialRepresentation](#schemacredentialrepresentation)]|false|none|none|
|disableableCredentialTypes|[string]|false|none|none|
|email|string|false|none|none|
|emailVerified|boolean|false|none|none|
|enabled|boolean|false|none|none|
|federatedIdentities|[[FederatedIdentityRepresentation](#schemafederatedidentityrepresentation)]|false|none|none|
|federationLink|string|false|none|none|
|firstName|string|false|none|none|
|groups|[string]|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|notBefore|integer(int32)|false|none|none|
|origin|string|false|none|none|
|realmRoles|[string]|false|none|none|
|requiredActions|[string]|false|none|none|
|self|string|false|none|none|
|serviceAccountClientId|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_UserSessionRepresentation">UserSessionRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemausersessionrepresentation"></a>
<a id="schema_UserSessionRepresentation"></a>
<a id="tocSusersessionrepresentation"></a>
<a id="tocsusersessionrepresentation"></a>

```json
{
  "clients": {},
  "id": "string",
  "ipAddress": "string",
  "lastAccess": 0,
  "start": 0,
  "userId": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|object|false|none|none|
|id|string|false|none|none|
|ipAddress|string|false|none|none|
|lastAccess|integer(int64)|false|none|none|
|start|integer(int64)|false|none|none|
|userId|string|false|none|none|
|username|string|false|none|none|
