<h1 id="ory-identities-api">Ory Identities API</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more.

Email: <a href="mailto:office@ory.sh">office@ory.sh</a> 
License: Apache 2.0

# Authentication

* API Key (oryAccessToken)
    - Parameter Name: **Authorization**, in: header.

<h1 id="ory-identities-api-identity">identity</h1>

APIs for managing identities.

## List Identities

<a id="opIdlistIdentities"></a>

> Code samples

```bash
curl https://example.com/admin/identities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/identities`

Lists all [identities](https://www.ory.com/docs/kratos/concepts/identity-user-model) in the system. Note: filters cannot be combined.

<h3 id="list-identities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|integer(int64)|false|Deprecated Items per Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This is the number of items per page.|
|page|query|integer(int64)|false|Deprecated Pagination Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This value is currently an integer, but it is not sequential. The value is not the page number, but a<br>reference. The next page can be any number and some numbers might return an empty list.<br><br>For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.<br>The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the<br>`Link` header.|
|page_size|query|integer(int64)|false|Page Size<br><br>This is the number of items per page to return. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|consistency|query|string|false|Read Consistency Level (preview)<br><br>The read consistency level determines the consistency guarantee for reads:<br><br>strong (slow): The read is guaranteed to return the most recent data committed at the start of the read.<br>eventual (very fast): The result will return data that is about 4.8 seconds old.<br><br>The default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with<br>`ory patch project --replace '/previews/default_read_consistency_level="strong"'`.<br><br>Setting the default consistency level to `eventual` may cause regressions in the future as we add consistency<br>controls to more APIs. Currently, the following APIs will be affected by this setting:<br><br>`GET /admin/identities`<br><br>This feature is in preview and only available in Ory Network.<br> ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.<br>strong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.<br>eventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.|
|ids|query|[string]|false|Retrieve multiple identities by their IDs.<br><br>This parameter has the following limitations:<br><br>Duplicate or non-existent IDs are ignored.<br>The order of returned IDs may be different from the request.<br>This filter does not support pagination. You must implement your own pagination as the maximum number of items returned by this endpoint may not exceed a certain threshold (currently 500).|
|credentials_identifier|query|string|false|CredentialsIdentifier is the identifier (username, email) of the credentials to look up using exact match.<br>Only one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.|
|preview_credentials_identifier_similar|query|string|false|This is an EXPERIMENTAL parameter that WILL CHANGE. Do NOT rely on consistent, deterministic behavior.<br>THIS PARAMETER WILL BE REMOVED IN AN UPCOMING RELEASE WITHOUT ANY MIGRATION PATH.<br><br>CredentialsIdentifierSimilar is the (partial) identifier (username, email) of the credentials to look up using similarity search.<br>Only one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.|
|include_credential|query|[string]|false|Include Credentials in Response<br><br>Include any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return<br>the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.|
|organization_id|query|string|false|List identities that belong to a specific organization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|consistency|""|
|consistency|strong|
|consistency|eventual|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  }
]
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="list-identities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated Identity List Response|Inline|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<h3 id="list-identities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[identity](#schemaidentity)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Create an Identity

<a id="opIdcreateIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/identities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "credentials": {
      "lookup_secret": {
        "config": {
          "codes": [
            {
              "code": "string",
              "used_at": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "oidc": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string",
              "use_auto_link": true
            }
          ]
        }
      },
      "passkey": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      },
      "password": {
        "config": {
          "hashed_password": "string",
          "password": "string",
          "use_password_migration_hook": true
        }
      },
      "saml": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string"
            }
          ]
        }
      },
      "totp": {
        "config": {
          "totp_url": "string"
        }
      },
      "webauthn": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      }
    },
    "external_id": "string",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "state": "active",
    "traits": {},
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  }'
```

`POST /admin/identities`

Create an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to
[import credentials](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities)
for instance passwords, social sign in configurations, or multifactor methods.

> Body parameter

```json
{
  "credentials": {
    "lookup_secret": {
      "config": {
        "codes": [
          {
            "code": "string",
            "used_at": "1970-01-01T00:00:00Z"
          }
        ]
      }
    },
    "oidc": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string",
            "use_auto_link": true
          }
        ]
      }
    },
    "passkey": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    },
    "password": {
      "config": {
        "hashed_password": "string",
        "password": "string",
        "use_password_migration_hook": true
      }
    },
    "saml": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string"
          }
        ]
      }
    },
    "totp": {
      "config": {
        "totp_url": "string"
      }
    },
    "webauthn": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    }
  },
  "external_id": "string",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "state": "active",
  "traits": {},
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

<h3 id="create-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createIdentityBody](#schemacreateidentitybody)|false|none|
|» credentials|body|[identityWithCredentials](#schemaidentitywithcredentials)|false|Create Identity and Import Credentials|
|» external_id|body|string|false|ExternalID is an optional external ID of the identity. This is used to link<br>the identity to an external system. If set, the external ID must be unique<br>across all identities.|
|» metadata_admin|body|object|false|Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.|
|» metadata_public|body|object|false|Store metadata about the identity which the identity itself can see when calling for example the<br>session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.|
|» organization_id|body|[NullUUID](#schemanulluuid)|false|none|
|» recovery_addresses|body|[[recoveryIdentityAddress](#schemarecoveryidentityaddress)]|false|RecoveryAddresses contains all the addresses that can be used to recover an identity.<br><br>Use this structure to import recovery addresses for an identity. Please keep in mind<br>that the address needs to be represented in the Identity Schema or this field will be overwritten<br>on the next identity update.|
|» region|body|string|false|Region is the Ory Network region this identity will be created in.<br>Optional; defaults to the project home region if omitted. Only effective<br>on the Ory Network.<br>eu-central EUCentral<br>asia-northeast AsiaNorthEast<br>us-east USEast<br>us-west USWest<br>eu EU<br>asia Asia<br>us US<br>global Global|
|» schema_id|body|string|true|SchemaID is the ID of the JSON Schema to be used for validating the identity's traits.|
|» state|body|string|false|State is the identity's state.<br>active StateActive<br>inactive StateInactive|
|» traits|body|object|true|Traits represent an identity's traits. The identity is able to create, modify, and delete traits<br>in a self-service manner. The input will always be validated against the JSON Schema defined<br>in `schema_url`.|
|» verifiable_addresses|body|[[verifiableIdentityAddress](#schemaverifiableidentityaddress)]|false|VerifiableAddresses contains all the addresses that can be verified by the user.<br><br>Use this structure to import verified addresses for an identity. Please keep in mind<br>that the address needs to be represented in the Identity Schema or this field will be overwritten<br>on the next identity update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|eu-central|
|» region|asia-northeast|
|» region|us-east|
|» region|us-west|
|» region|eu|
|» region|asia|
|» region|us|
|» region|global|
|» state|active|
|» state|inactive|

> Example responses

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|identity|[identity](#schemaidentity)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|409|Conflict|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Create multiple identities

<a id="opIdbatchPatchIdentities"></a>

> Code samples

```bash
curl https://example.com/admin/identities \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identities": [
      {
        "create": {
          "credentials": {
            "lookup_secret": {
              "config": {
                "codes": [
                  {
                    "code": "string",
                    "used_at": "1970-01-01T00:00:00Z"
                  }
                ]
              }
            },
            "oidc": {
              "config": {
                "providers": [
                  {
                    "organization": "string",
                    "provider": "string",
                    "subject": "string",
                    "use_auto_link": true
                  }
                ]
              }
            },
            "passkey": {
              "config": {
                "credentials": [
                  {
                    "added_at": "1970-01-01T00:00:00Z",
                    "attestation": {
                      "authenticator_data": [
                        0
                      ],
                      "client_dataJSON": [
                        0
                      ],
                      "client_data_hash": [
                        0
                      ],
                      "object": [
                        0
                      ],
                      "public_key_algorithm": 0
                    },
                    "attestation_type": "string",
                    "authenticator": {
                      "aaguid": [
                        0
                      ],
                      "clone_warning": true,
                      "sign_count": 0
                    },
                    "display_name": "string",
                    "flags": {
                      "backup_eligible": true,
                      "backup_state": true,
                      "user_present": true,
                      "user_verified": true
                    },
                    "id": [
                      0
                    ],
                    "is_passwordless": true,
                    "public_key": [
                      0
                    ],
                    "transport": [
                      "string"
                    ]
                  }
                ],
                "user_handle": [
                  0
                ]
              }
            },
            "password": {
              "config": {
                "hashed_password": "string",
                "password": "string",
                "use_password_migration_hook": true
              }
            },
            "saml": {
              "config": {
                "providers": [
                  {
                    "organization": "string",
                    "provider": "string",
                    "subject": "string"
                  }
                ]
              }
            },
            "totp": {
              "config": {
                "totp_url": "string"
              }
            },
            "webauthn": {
              "config": {
                "credentials": [
                  {
                    "added_at": "1970-01-01T00:00:00Z",
                    "attestation": {
                      "authenticator_data": [
                        0
                      ],
                      "client_dataJSON": [
                        0
                      ],
                      "client_data_hash": [
                        0
                      ],
                      "object": [
                        0
                      ],
                      "public_key_algorithm": 0
                    },
                    "attestation_type": "string",
                    "authenticator": {
                      "aaguid": [
                        0
                      ],
                      "clone_warning": true,
                      "sign_count": 0
                    },
                    "display_name": "string",
                    "flags": {
                      "backup_eligible": true,
                      "backup_state": true,
                      "user_present": true,
                      "user_verified": true
                    },
                    "id": [
                      0
                    ],
                    "is_passwordless": true,
                    "public_key": [
                      0
                    ],
                    "transport": [
                      "string"
                    ]
                  }
                ],
                "user_handle": [
                  0
                ]
              }
            }
          },
          "external_id": "string",
          "metadata_admin": null,
          "metadata_public": null,
          "organization_id": "string",
          "recovery_addresses": [
            {
              "break_glass_for_organization": "string",
              "created_at": "1970-01-01T00:00:00Z",
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "updated_at": "1970-01-01T00:00:00Z",
              "value": "string",
              "via": "string"
            }
          ],
          "region": "eu-central",
          "schema_id": "string",
          "state": "active",
          "traits": {},
          "verifiable_addresses": [
            {
              "created_at": "2014-01-01T23:28:56.782Z",
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "status": "string",
              "updated_at": "2014-01-01T23:28:56.782Z",
              "value": "string",
              "verified": true,
              "verified_at": "1970-01-01T00:00:00Z",
              "via": "email"
            }
          ]
        },
        "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }'
```

`PATCH /admin/identities`

Creates multiple [identities](https://www.ory.com/docs/kratos/concepts/identity-user-model).

You can also use this endpoint to [import credentials](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities),
including passwords, social sign-in settings, and multi-factor authentication methods.

If the patch includes hashed passwords you can import up to 1,000 identities per request.

If the patch includes at least one plaintext password you can import up to 200 identities per request.

Avoid importing large batches with plaintext passwords. They can cause timeouts as the passwords need to be hashed before they are stored.

If at least one identity is imported successfully, the response status is 200 OK.
If all imports fail, the response is one of the following 4xx errors:
400 Bad Request: The request payload is invalid or improperly formatted.
409 Conflict: Duplicate identities or conflicting data were detected.

If you get a 504 Gateway Timeout:
Reduce the batch size
Avoid duplicate identities
Pre-hash passwords with BCrypt

If the issue persists, contact support.

> Body parameter

```json
{
  "identities": [
    {
      "create": {
        "credentials": {
          "lookup_secret": {
            "config": {
              "codes": [
                {
                  "code": "string",
                  "used_at": "1970-01-01T00:00:00Z"
                }
              ]
            }
          },
          "oidc": {
            "config": {
              "providers": [
                {
                  "organization": "string",
                  "provider": "string",
                  "subject": "string",
                  "use_auto_link": true
                }
              ]
            }
          },
          "passkey": {
            "config": {
              "credentials": [
                {
                  "added_at": "1970-01-01T00:00:00Z",
                  "attestation": {
                    "authenticator_data": [
                      0
                    ],
                    "client_dataJSON": [
                      0
                    ],
                    "client_data_hash": [
                      0
                    ],
                    "object": [
                      0
                    ],
                    "public_key_algorithm": 0
                  },
                  "attestation_type": "string",
                  "authenticator": {
                    "aaguid": [
                      0
                    ],
                    "clone_warning": true,
                    "sign_count": 0
                  },
                  "display_name": "string",
                  "flags": {
                    "backup_eligible": true,
                    "backup_state": true,
                    "user_present": true,
                    "user_verified": true
                  },
                  "id": [
                    0
                  ],
                  "is_passwordless": true,
                  "public_key": [
                    0
                  ],
                  "transport": [
                    "string"
                  ]
                }
              ],
              "user_handle": [
                0
              ]
            }
          },
          "password": {
            "config": {
              "hashed_password": "string",
              "password": "string",
              "use_password_migration_hook": true
            }
          },
          "saml": {
            "config": {
              "providers": [
                {
                  "organization": "string",
                  "provider": "string",
                  "subject": "string"
                }
              ]
            }
          },
          "totp": {
            "config": {
              "totp_url": "string"
            }
          },
          "webauthn": {
            "config": {
              "credentials": [
                {
                  "added_at": "1970-01-01T00:00:00Z",
                  "attestation": {
                    "authenticator_data": [
                      0
                    ],
                    "client_dataJSON": [
                      0
                    ],
                    "client_data_hash": [
                      0
                    ],
                    "object": [
                      0
                    ],
                    "public_key_algorithm": 0
                  },
                  "attestation_type": "string",
                  "authenticator": {
                    "aaguid": [
                      0
                    ],
                    "clone_warning": true,
                    "sign_count": 0
                  },
                  "display_name": "string",
                  "flags": {
                    "backup_eligible": true,
                    "backup_state": true,
                    "user_present": true,
                    "user_verified": true
                  },
                  "id": [
                    0
                  ],
                  "is_passwordless": true,
                  "public_key": [
                    0
                  ],
                  "transport": [
                    "string"
                  ]
                }
              ],
              "user_handle": [
                0
              ]
            }
          }
        },
        "external_id": "string",
        "metadata_admin": null,
        "metadata_public": null,
        "organization_id": "string",
        "recovery_addresses": [
          {
            "break_glass_for_organization": "string",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "updated_at": "1970-01-01T00:00:00Z",
            "value": "string",
            "via": "string"
          }
        ],
        "region": "eu-central",
        "schema_id": "string",
        "state": "active",
        "traits": {},
        "verifiable_addresses": [
          {
            "created_at": "2014-01-01T23:28:56.782Z",
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "status": "string",
            "updated_at": "2014-01-01T23:28:56.782Z",
            "value": "string",
            "verified": true,
            "verified_at": "1970-01-01T00:00:00Z",
            "via": "email"
          }
        ]
      },
      "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="create-multiple-identities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[patchIdentitiesBody](#schemapatchidentitiesbody)|false|none|
|» identities|body|[[identityPatch](#schemaidentitypatch)]|false|Identities holds the list of patches to apply<br><br>required|

> Example responses

> 200 Response

```json
{
  "identities": [
    {
      "action": "create",
      "error": null,
      "identity": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-multiple-identities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|batchPatchIdentitiesResponse|[batchPatchIdentitiesResponse](#schemabatchpatchidentitiesresponse)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|409|Conflict|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Get an Identity by its External ID

<a id="opIdgetIdentityByExternalID"></a>

> Code samples

```bash
curl https://example.com/admin/identities/by/external/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/identities/by/external/{externalID}`

Return an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) by its external ID. You can optionally
include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.

<h3 id="get-an-identity-by-its-external-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalID|path|string|true|ExternalID must be set to the ID of identity you want to get|
|include_credential|query|[string]|false|Include Credentials in Response<br><br>Include any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return<br>the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include_credential|password|
|include_credential|oidc|
|include_credential|totp|
|include_credential|lookup_secret|
|include_credential|webauthn|
|include_credential|code|
|include_credential|passkey|
|include_credential|profile|
|include_credential|saml|
|include_credential|deviceauthn|
|include_credential|identifier_first|
|include_credential|link_recovery|
|include_credential|code_recovery|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-an-identity-by-its-external-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|identity|[identity](#schemaidentity)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Get an Identity

<a id="opIdgetIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/identities/{id}`

Return an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) by its ID. You can optionally
include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.

<h3 id="get-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID must be set to the ID of identity you want to get|
|include_credential|query|[string]|false|Include Credentials in Response<br><br>Include any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return<br>the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token, and the OpenID Connect ID Token if available.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include_credential|password|
|include_credential|oidc|
|include_credential|totp|
|include_credential|lookup_secret|
|include_credential|webauthn|
|include_credential|code|
|include_credential|passkey|
|include_credential|profile|
|include_credential|saml|
|include_credential|deviceauthn|
|include_credential|identifier_first|
|include_credential|link_recovery|
|include_credential|code_recovery|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|identity|[identity](#schemaidentity)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Update an Identity

<a id="opIdupdateIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "credentials": {
      "lookup_secret": {
        "config": {
          "codes": [
            {
              "code": "string",
              "used_at": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "oidc": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string",
              "use_auto_link": true
            }
          ]
        }
      },
      "passkey": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      },
      "password": {
        "config": {
          "hashed_password": "string",
          "password": "string",
          "use_password_migration_hook": true
        }
      },
      "saml": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string"
            }
          ]
        }
      },
      "totp": {
        "config": {
          "totp_url": "string"
        }
      },
      "webauthn": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      }
    },
    "external_id": "string",
    "metadata_admin": null,
    "metadata_public": null,
    "region": "eu-central",
    "schema_id": "string",
    "state": "active",
    "traits": {}
  }'
```

`PUT /admin/identities/{id}`

This endpoint updates an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model). The full identity
payload (except credentials) is expected.

It is possible to update the identity's credentials as well. Using this operation, credentials will not be overwritten
but instead added to the list. For example, if a user has a social sign in connection set up, updating the credentials
will keep the social sign in connection and add the new credentials to the list. This prevents accidentally overwriting
credentials and locking out users. A complete view of all credential types is here:

`password`: The existing password credential will be completely replaced with the new configuration. You can provide either a hashed password, a plaintext password (which will be hashed), or enable the password migration hook.
`oidc`, `saml`: The existing OIDC and SAML credentials will be kept and the new credentials will be added to the list.
`totp`: The existing TOTP credentials will be replaced with the new configuration.
`lookup_secret`: The existing Lookup Secret codes will be kept and the new codes will be added to the list.
`webauthn`, `passkey`: The existing credentials are preserved, new credentials are added, and credentials with matching IDs are updated with new values. If a new `user_handle` is provided, it's added to the identity's identifiers list while preserving previous user handles.
`code`: To import code credentials, configure your identity schema to use one of the identity traits as an identifier source (`{"ory.sh/kratos":{"code":{"identifier":true", "via":"email"}}}`).

> Body parameter

```json
{
  "credentials": {
    "lookup_secret": {
      "config": {
        "codes": [
          {
            "code": "string",
            "used_at": "1970-01-01T00:00:00Z"
          }
        ]
      }
    },
    "oidc": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string",
            "use_auto_link": true
          }
        ]
      }
    },
    "passkey": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    },
    "password": {
      "config": {
        "hashed_password": "string",
        "password": "string",
        "use_password_migration_hook": true
      }
    },
    "saml": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string"
          }
        ]
      }
    },
    "totp": {
      "config": {
        "totp_url": "string"
      }
    },
    "webauthn": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    }
  },
  "external_id": "string",
  "metadata_admin": null,
  "metadata_public": null,
  "region": "eu-central",
  "schema_id": "string",
  "state": "active",
  "traits": {}
}
```

<h3 id="update-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID must be set to the ID of identity you want to update|
|body|body|[updateIdentityBody](#schemaupdateidentitybody)|false|none|
|» credentials|body|[identityWithCredentials](#schemaidentitywithcredentials)|false|Create Identity and Import Credentials|
|» external_id|body|string|false|ExternalID is an optional external ID of the identity. This is used to link<br>the identity to an external system. If set, the external ID must be unique<br>across all identities.|
|» metadata_admin|body|object|false|Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.|
|» metadata_public|body|object|false|Store metadata about the identity which the identity itself can see when calling for example the<br>session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.|
|» region|body|string|false|Region is the Ory Network region this identity is homed in. Optional;<br>omit to leave the current region unchanged.<br>eu-central EUCentral<br>asia-northeast AsiaNorthEast<br>us-east USEast<br>us-west USWest<br>eu EU<br>asia Asia<br>us US<br>global Global|
|» schema_id|body|string|true|SchemaID is the ID of the JSON Schema to be used for validating the identity's traits. If set<br>will update the Identity's SchemaID.|
|» state|body|string|true|State is the identity's state.<br>active StateActive<br>inactive StateInactive|
|» traits|body|object|true|Traits represent an identity's traits. The identity is able to create, modify, and delete traits<br>in a self-service manner. The input will always be validated against the JSON Schema defined<br>in `schema_id`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|eu-central|
|» region|asia-northeast|
|» region|us-east|
|» region|us-west|
|» region|eu|
|» region|asia|
|» region|us|
|» region|global|
|» state|active|
|» state|inactive|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="update-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|identity|[identity](#schemaidentity)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|409|Conflict|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Delete an Identity

<a id="opIddeleteIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /admin/identities/{id}`

Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone.
This endpoint returns 204 when the identity was deleted or 404 if the identity was not found.

<h3 id="delete-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the identity's ID.|

> Example responses

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="delete-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Patch an Identity

<a id="opIdpatchIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    {
      "from": "/name",
      "op": "replace",
      "path": "/name",
      "value": "foobar"
    }
  ]'
```

`PATCH /admin/identities/{id}`

Partially updates an [identity's](https://www.ory.com/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/).
The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.

> Body parameter

```json
[
  {
    "from": "/name",
    "op": "replace",
    "path": "/name",
    "value": "foobar"
  }
]
```

<h3 id="patch-an-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID must be set to the ID of identity you want to update|
|body|body|[jsonPatchDocument](#schemajsonpatchdocument)|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="patch-an-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|identity|[identity](#schemaidentity)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|409|Conflict|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Delete a credential for a specific identity

<a id="opIddeleteIdentityCredentials"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string/credentials/password \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /admin/identities/{id}/credentials/{type}`

Delete an [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) credential by its type.
You cannot delete passkeys or code auth credentials through this API.

<h3 id="delete-a-credential-for-a-specific-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the identity's ID.|
|type|path|string|true|Type is the type of credentials to delete.<br>password CredentialsTypePassword<br>oidc CredentialsTypeOIDC<br>totp CredentialsTypeTOTP<br>lookup_secret CredentialsTypeLookup<br>webauthn CredentialsTypeWebAuthn<br>code CredentialsTypeCodeAuth<br>passkey CredentialsTypePasskey<br>profile CredentialsTypeProfile<br>saml CredentialsTypeSAML<br>deviceauthn CredentialsTypeDeviceAuthn<br>identifier_first CredentialsTypeIdentifierFirst<br>link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.<br>code_recovery CredentialsTypeRecoveryCode|
|identifier|query|string|false|Identifier is the identifier of the credential to delete. It is required<br>for the `oidc`, `saml`, and `deviceauthn` credential types: for `oidc`<br>and `saml` it selects the provider link to remove, for `deviceauthn` it<br>is the `client_key_id` of the device key to revoke. Find the identifier<br>by calling the `GET /admin/identities/{id}?include_credential={type}`<br>endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|password|
|type|oidc|
|type|totp|
|type|lookup_secret|
|type|webauthn|
|type|code|
|type|passkey|
|type|profile|
|type|saml|
|type|deviceauthn|
|type|identifier_first|
|type|link_recovery|
|type|code_recovery|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="delete-a-credential-for-a-specific-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## List an Identity's Sessions

<a id="opIdlistIdentitySessions"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/identities/{id}/sessions`

This endpoint returns all sessions that belong to the given Identity.

<h3 id="list-an-identitys-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|integer(int64)|false|Deprecated Items per Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This is the number of items per page.|
|page|query|integer(int64)|false|Deprecated Pagination Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This value is currently an integer, but it is not sequential. The value is not the page number, but a<br>reference. The next page can be any number and some numbers might return an empty list.<br><br>For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.<br>The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the<br>`Link` header.|
|page_size|query|integer(int64)|false|Page Size<br><br>This is the number of items per page to return. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|id|path|string|true|ID is the identity's ID.|
|active|query|boolean|false|Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="list-an-identitys-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Identity Sessions Response|Inline|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<h3 id="list-an-identitys-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[session](#schemasession)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Delete &amp; Invalidate an Identity's Sessions

<a id="opIddeleteIdentitySessions"></a>

> Code samples

```bash
curl https://example.com/admin/identities/string/sessions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /admin/identities/{id}/sessions`

Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.

<h3 id="delete-invalidate-an-identitys-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the identity's ID.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="delete-invalidate-an-identitys-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Create a Recovery Code

<a id="opIdcreateRecoveryCodeForIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/recovery/code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "expires_in": "string",
    "flow_type": "string",
    "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /admin/recovery/code`

This endpoint creates a recovery code which should be given to the user in order for them to recover
(or activate) their account.

> Body parameter

```json
{
  "expires_in": "string",
  "flow_type": "string",
  "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-recovery-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createRecoveryCodeForIdentityBody](#schemacreaterecoverycodeforidentitybody)|false|none|
|» expires_in|body|string|false|Code Expires In<br><br>The recovery code will expire after that amount of time has passed. Defaults to the configuration value of<br>`selfservice.methods.code.config.lifespan`.|
|» flow_type|body|[selfServiceFlowType](#schemaselfserviceflowtype)|false|The flow type can either be `api` or `browser`.|
|» identity_id|body|string(uuid)|true|Identity to Recover<br><br>The identity's ID you wish to recover.|

> Example responses

> 201 Response

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "recovery_code": "string",
  "recovery_link": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-a-recovery-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|recoveryCodeForIdentity|[recoveryCodeForIdentity](#schemarecoverycodeforidentity)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Create a Recovery Link

<a id="opIdcreateRecoveryLinkForIdentity"></a>

> Code samples

```bash
curl https://example.com/admin/recovery/link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "expires_in": "string",
    "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /admin/recovery/link`

This endpoint creates a recovery link which should be given to the user in order for them to recover
(or activate) their account.

> Body parameter

```json
{
  "expires_in": "string",
  "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-recovery-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|none|
|body|body|[createRecoveryLinkForIdentityBody](#schemacreaterecoverylinkforidentitybody)|false|none|
|» expires_in|body|string|false|Link Expires In<br><br>The recovery link will expire after that amount of time has passed. Defaults to the configuration value of<br>`selfservice.methods.code.config.lifespan`.|
|» identity_id|body|string(uuid)|true|Identity to Recover<br><br>The identity's ID you wish to recover.|

> Example responses

> 200 Response

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "recovery_link": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-a-recovery-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|recoveryLinkForIdentity|[recoveryLinkForIdentity](#schemarecoverylinkforidentity)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## List All Sessions

<a id="opIdlistSessions"></a>

> Code samples

```bash
curl https://example.com/admin/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/sessions`

Listing all sessions that exist.

<h3 id="list-all-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|active|query|boolean|false|Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.|
|expand|query|[string]|false|ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session.<br>If no value is provided, the expandable properties are skipped.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|identity|
|expand|devices|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="list-all-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session List Response<br><br>The response given when listing sessions in an administrative context.|Inline|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<h3 id="list-all-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[session](#schemasession)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Manage sessions in bulk

<a id="opIdmanageSessions"></a>

> Code samples

```bash
curl https://example.com/admin/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "action": "disable",
    "identities": [
      "string"
    ],
    "sessions": [
      "string"
    ]
  }'
```

`POST /admin/sessions`

Disable or delete sessions for a list of identities or a list of sessions in
a single call. The `action` field selects the operation:

`disable` — deactivate matching sessions (sets `active = false`, preserves
audit data).
`delete` — permanently delete matching sessions.

Exactly one of `identities` or `sessions` must be provided. To scope the
operation to every session in the network, pass `identities: ["*"]`; the
wildcard is not accepted in the `sessions` field. Up to 500 explicit IDs
are accepted per call.

All requests return `200 OK` with `{processed, more}`. `processed` reports
how many rows the call affected; for `disable` it counts only sessions
that were active before the call. `more` is `true` only when a wildcard
request reached the per-call batch limit and additional rows may remain;
callers drain the network by re-issuing the same request while `more` is
`true`. Explicit-IDs requests always return `more: false`.

> Body parameter

```json
{
  "action": "disable",
  "identities": [
    "string"
  ],
  "sessions": [
    "string"
  ]
}
```

<h3 id="manage-sessions-in-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[manageSessionsBody](#schemamanagesessionsbody)|true|none|
|» action|body|string|true|Action to perform on the matching sessions.<br>disable ManageSessionsActionDisable<br>delete ManageSessionsActionDelete|
|» identities|body|[string]|false|Identity IDs whose sessions should be disabled or deleted, or `["*"]`<br>to operate on every session in the network. Mutually exclusive with<br>`sessions`.|
|» sessions|body|[string]|false|Session IDs to disable or delete. Mutually exclusive with `identities`.<br>The wildcard `["*"]` is not accepted in this field — pass<br>`identities: ["*"]` to scope the operation to every session in the<br>network.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|disable|
|» action|delete|

> Example responses

> 200 Response

```json
{
  "more": true,
  "processed": 0
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="manage-sessions-in-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|manageSessionsResponse|[manageSessionsResponse](#schemamanagesessionsresponse)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Get Session

<a id="opIdgetSession"></a>

> Code samples

```bash
curl https://example.com/admin/sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/sessions/{id}`

This endpoint is useful for:

Getting a session object with all specified expandables that exist in an administrative context.

<h3 id="get-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|[string]|false|ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session.<br>Example - ?expand=Identity&expand=Devices<br>If no value is provided, the expandable properties are skipped.|
|id|path|string|true|ID is the session's ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|identity|
|expand|devices|

> Example responses

> 200 Response

```json
{
  "active": true,
  "authenticated_at": "1970-01-01T00:00:00Z",
  "authentication_methods": [
    {
      "aal": "aal0",
      "completed_at": "1970-01-01T00:00:00Z",
      "method": "password",
      "organization": "string",
      "provider": "string",
      "upstream_acr": "string",
      "upstream_amr": [
        "string"
      ]
    }
  ],
  "authenticator_assurance_level": "aal0",
  "devices": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ip_address": "string",
      "location": "string",
      "user_agent": "string"
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "tokenized": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|session|[session](#schemasession)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Deactivate a Session

<a id="opIddisableSession"></a>

> Code samples

```bash
curl https://example.com/admin/sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /admin/sessions/{id}`

Calling this endpoint deactivates the specified session. Session data is not deleted.

<h3 id="deactivate-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the session's ID.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="deactivate-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Extend a Session

<a id="opIdextendSession"></a>

> Code samples

```bash
curl https://example.com/admin/sessions/string/extend \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /admin/sessions/{id}/extend`

Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it
will only extend the session after the specified time has passed.

This endpoint returns per default a 204 No Content response on success. Older Ory Network projects may
return a 200 OK response with the session in the body. Returning the session as part of the response
will be deprecated in the future and should not be relied upon.

This endpoint ignores consecutive requests to extend the same session and returns a 404 error in those
scenarios. This endpoint also returns 404 errors if the session does not exist.

Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.

<h3 id="extend-a-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the session's ID.|

> Example responses

> 200 Response

```json
{
  "active": true,
  "authenticated_at": "1970-01-01T00:00:00Z",
  "authentication_methods": [
    {
      "aal": "aal0",
      "completed_at": "1970-01-01T00:00:00Z",
      "method": "password",
      "organization": "string",
      "provider": "string",
      "upstream_acr": "string",
      "upstream_amr": [
        "string"
      ]
    }
  ],
  "authenticator_assurance_level": "aal0",
  "devices": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ip_address": "string",
      "location": "string",
      "user_agent": "string"
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "tokenized": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="extend-a-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|session|[session](#schemasession)|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Create a test OIDC login flow

<a id="opIdcreateTestLoginFlow"></a>

> Code samples

```bash
curl https://example.com/admin/test-login-flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "provider_id": "string"
  }'
```

`POST /admin/test-login-flows`

Creates a dry-run OIDC test login flow pre-scoped to one provider. The
returned flow carries a single-submit UI and a CSRF bearer token. No
identity is persisted and no session is issued when the flow completes;
the captured debug data is returned in the flow's test_context.

> Body parameter

```json
{
  "provider_id": "string"
}
```

<h3 id="create-a-test-oidc-login-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[createTestLoginFlowBody](#schemacreatetestloginflowbody)|true|none|
|» provider_id|body|string|true|ID of the OIDC provider to test. Must match a provider configured on<br>the project that serves this request.|

> Example responses

> 201 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-a-test-oidc-login-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|loginFlow|[loginFlow](#schemaloginflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all Identity Schemas

<a id="opIdlistIdentitySchemas"></a>

> Code samples

```bash
curl https://example.com/schemas \
  -H 'Accept: application/json'
```

`GET /schemas`

Returns a list of all identity schemas currently in use.

<h3 id="get-all-identity-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|integer(int64)|false|Deprecated Items per Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This is the number of items per page.|
|page|query|integer(int64)|false|Deprecated Pagination Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This value is currently an integer, but it is not sequential. The value is not the page number, but a<br>reference. The next page can be any number and some numbers might return an empty list.<br><br>For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.<br>The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the<br>`Link` header.|
|page_size|query|integer(int64)|false|Page Size<br><br>This is the number of items per page to return. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "schema": {}
  }
]
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-all-identity-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Identity JSON Schemas Response|[identitySchemas](#schemaidentityschemas)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Identity JSON Schema

<a id="opIdgetIdentitySchema"></a>

> Code samples

```bash
curl https://example.com/schemas/string \
  -H 'Accept: application/json'
```

`GET /schemas/{id}`

Return a specific identity schema.

<h3 id="get-identity-json-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID must be set to the ID of schema you want to get|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-identity-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|identitySchema|[identitySchema](#schemaidentityschema)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-identities-api-frontend">frontend</h1>

Endpoints used by frontend applications (e.g. Single-Page-App, Native Apps, Server Apps, ...) to manage a user's own profile.

## Change Password URL

<a id="opIdgetWellKnownChangePassword"></a>

> Code samples

```bash
curl https://example.com/.well-known/change-password \
  -H 'Accept: application/json'
```

`GET /.well-known/change-password`

This endpoint implements the W3C "change password URL" well-known location by
redirecting the browser to the configured settings UI. Password managers follow
this redirect to take users straight to the page where they can change their
password.

> Example responses

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="change-password-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get WebAuthn JavaScript

<a id="opIdgetWebAuthnJavaScript"></a>

> Code samples

```bash
curl https://example.com/.well-known/ory/webauthn.js \
  -H 'Accept: application/json'
```

`GET /.well-known/ory/webauthn.js`

This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.

If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:

```html
<script src="https://public-kratos.example.org/.well-known/ory/webauthn.js" type="script" async />
```

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-webauthn-javascript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|webAuthnJavaScript|[webAuthnJavaScript](#schemawebauthnjavascript)|

<aside class="success">
This operation does not require authentication
</aside>

## Get User-Flow Errors

<a id="opIdgetFlowError"></a>

> Code samples

```bash
curl 'https://example.com/self-service/errors?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/errors`

This endpoint returns the error associated with a user-facing self service errors.

This endpoint supports stub values to help you implement the error UI:

`?id=stub:500` - returns a stub 500 (Internal Server Error) error.

More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-facing-errors).

<h3 id="get-user-flow-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Error is the error's ID|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "error": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-user-flow-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|flowError|[flowError](#schemaflowerror)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|500|Internal Server Error|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get FedCM Parameters

<a id="opIdcreateFedcmFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/fed-cm/parameters \
  -H 'Accept: application/json'
```

`GET /self-service/fed-cm/parameters`

This endpoint returns a list of all available FedCM providers. It is only supported on the Ory Network.

> Example responses

> 200 Response

```json
{
  "csrf_token": "string",
  "providers": [
    {
      "client_id": "string",
      "config_url": "string",
      "domain_hint": "string",
      "fields": [
        "string"
      ],
      "login_hint": "string",
      "nonce": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-fedcm-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createFedcmFlowResponse|[createFedcmFlowResponse](#schemacreatefedcmflowresponse)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a FedCM token

<a id="opIdupdateFedcmFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/fed-cm/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "nonce": "string",
    "token": "string",
    "transient_payload": {}
  }'
```

`POST /self-service/fed-cm/token`

Use this endpoint to submit a token from a FedCM provider through
`navigator.credentials.get` and log the user in. The parameters from
`navigator.credentials.get` must have come from `GET
self-service/fed-cm/parameters`.

> Body parameter

```json
{
  "csrf_token": "string",
  "nonce": "string",
  "token": "string",
  "transient_payload": {}
}
```

<h3 id="submit-a-fedcm-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateFedcmFlowBody](#schemaupdatefedcmflowbody)|true|none|
|» csrf_token|body|string|true|CSRFToken is the anti-CSRF token.|
|» nonce|body|string|false|Nonce is the nonce that was used in the `navigator.credentials.get` call. If<br>specified, it must match the `nonce` claim in the token.|
|» token|body|string|true|Token contains the result of `navigator.credentials.get`.|
|» transient_payload|body|object|false|Transient data to pass along to any webhooks.|

> Example responses

> 200 Response

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

> 400 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="submit-a-fedcm-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successfulNativeLogin|[successfulNativeLogin](#schemasuccessfulnativelogin)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|loginFlow|[loginFlow](#schemaloginflow)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorBrowserLocationChangeRequired|[errorBrowserLocationChangeRequired](#schemaerrorbrowserlocationchangerequired)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a Login Flow

<a id="opIdupdateLoginFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/login?flow=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "identifier": "string",
    "method": "string",
    "password": "string",
    "password_identifier": "string",
    "transient_payload": {}
  }'
```

`POST /self-service/login`

Use this endpoint to complete a login flow. This endpoint
behaves differently for API and browser flows.

API flows expect `application/json` to be sent in the body and responds with
HTTP 200 and a application/json body with the session token on success;
HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body;
HTTP 400 on form validation errors.

Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with
a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded;
a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.

Browser flows with an accept header of `application/json` will not redirect but instead respond with
HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;
HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;
HTTP 400 on form validation errors.

If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!
`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.
Most likely used in Social Sign In flows.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

> Body parameter

```json
{
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "password": "string",
  "password_identifier": "string",
  "transient_payload": {}
}
```

<h3 id="submit-a-login-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flow|query|string|true|The Login Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/login?flow=abcde`).|
|X-Session-Token|header|string|false|The Session Token of the Identity performing the settings flow.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|body|body|[updateLoginFlowBody](#schemaupdateloginflowbody)|true|none|
|» *oneOf*|body|[updateLoginFlowWithPasswordMethod](#schemaupdateloginflowwithpasswordmethod)|false|Update Login Flow with Password Method|
|» *oneOf*|body|[updateLoginFlowWithOidcMethod](#schemaupdateloginflowwithoidcmethod)|false|Update Login Flow with OpenID Connect Method|
|» *oneOf*|body|[updateLoginFlowWithSamlMethod](#schemaupdateloginflowwithsamlmethod)|false|Update login flow using SAML|
|» *oneOf*|body|[updateLoginFlowWithTotpMethod](#schemaupdateloginflowwithtotpmethod)|false|Update Login Flow with TOTP Method|
|» *oneOf*|body|[updateLoginFlowWithWebAuthnMethod](#schemaupdateloginflowwithwebauthnmethod)|false|Update Login Flow with WebAuthn Method|
|» *oneOf*|body|[updateLoginFlowWithLookupSecretMethod](#schemaupdateloginflowwithlookupsecretmethod)|false|Update Login Flow with Lookup Secret Method|
|» *oneOf*|body|[updateLoginFlowWithCodeMethod](#schemaupdateloginflowwithcodemethod)|false|Update Login flow using the code method|
|» *oneOf*|body|[updateLoginFlowWithPasskeyMethod](#schemaupdateloginflowwithpasskeymethod)|false|Update Login Flow with Passkey Method|
|» *oneOf*|body|[updateLoginFlowWithIdentifierFirstMethod](#schemaupdateloginflowwithidentifierfirstmethod)|false|Update Login Flow with Multi-Step Method|

> Example responses

> 200 Response

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

> 400 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="submit-a-login-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successfulNativeLogin|[successfulNativeLogin](#schemasuccessfulnativelogin)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|loginFlow|[loginFlow](#schemaloginflow)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorBrowserLocationChangeRequired|[errorBrowserLocationChangeRequired](#schemaerrorbrowserlocationchangerequired)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Login Flow for Native Apps

<a id="opIdcreateNativeLoginFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/login/api \
  -H 'Accept: application/json'
```

`GET /self-service/login/api`

This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.

If a valid provided session cookie or session token is provided, a 400 Bad Request error
will be returned unless the URL query parameter `?refresh=true` is set.

To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.

You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server
Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make
you vulnerable to a variety of CSRF attacks, including CSRF login attacks.

In the case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.

This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="create-login-flow-for-native-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refresh|query|boolean|false|Refresh a login session<br><br>If set to true, this will refresh an existing login session by<br>asking the user to sign in again. This will reset the<br>authenticated_at time of the session.|
|aal|query|string|false|Request a Specific AuthenticationMethod Assurance Level<br><br>Use this parameter to upgrade an existing session's authenticator assurance level (AAL). This<br>allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password,<br>the AAL is 1. If you wish to "upgrade" the session's security by asking the user to perform TOTP / WebAuth/ ...<br>you would set this to "aal2".|
|X-Session-Token|header|string|false|The Session Token of the Identity performing the settings flow.|
|return_session_token_exchange_code|query|boolean|false|EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token<br>after the login flow has been completed.|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|organization|query|string|false|An optional organization ID that should be used for logging this user in.<br>This parameter is only effective in the Ory Network.|
|via|query|string|false|Via should contain the identity's credential the code should be sent to. Only relevant in aal2 flows.<br><br>DEPRECATED: This field is deprecated. Please remove it from your requests. The user will now see a choice<br>of MFA credentials to choose from to perform the second factor instead.|
|identity_schema|query|string|false|An optional identity schema to use for the login flow.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-login-flow-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|loginFlow|[loginFlow](#schemaloginflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Login Flow for Browsers

<a id="opIdcreateBrowserLoginFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/login/browser \
  -H 'Accept: application/json'
```

`GET /self-service/login/browser`

This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate
cookies and anti-CSRF measures required for browser-based flows.

If this endpoint is opened as a link in the browser, it will be redirected to
`selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session
exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter
`?refresh=true` was set.

If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!

The optional query parameter login_challenge is set when using Kratos with
Hydra in an OAuth2 flow. See the oauth2_provider.url configuration
option.

This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="create-login-flow-for-browsers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refresh|query|boolean|false|Refresh a login session<br><br>If set to true, this will refresh an existing login session by<br>asking the user to sign in again. This will reset the<br>authenticated_at time of the session.|
|aal|query|string|false|Request a Specific AuthenticationMethod Assurance Level<br><br>Use this parameter to upgrade an existing session's authenticator assurance level (AAL). This<br>allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password,<br>the AAL is 1. If you wish to "upgrade" the session's security by asking the user to perform TOTP / WebAuth/ ...<br>you would set this to "aal2".|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|login_challenge|query|string|false|An optional Hydra login challenge. If present, Kratos will cooperate with<br>Ory Hydra to act as an OAuth2 identity provider.<br><br>The value for this parameter comes from `login_challenge` URL Query parameter sent to your<br>application (e.g. `/login?login_challenge=abcde`).|
|organization|query|string|false|An optional organization ID that should be used for logging this user in.<br>This parameter is only effective in the Ory Network.|
|via|query|string|false|Via should contain the identity's credential the code should be sent to. Only relevant in aal2 flows.<br><br>DEPRECATED: This field is deprecated. Please remove it from your requests. The user will now see a choice<br>of MFA credentials to choose from to perform the second factor instead.|
|identity_schema|query|string|false|An optional identity schema to use for the login flow.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-login-flow-for-browsers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|loginFlow|[loginFlow](#schemaloginflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Login Flow

<a id="opIdgetLoginFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/login/flows?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/login/flows`

This endpoint returns a login flow's context with, for example, error details and other information.

Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.
For AJAX requests you must ensure that cookies are included in the request or requests will fail.

If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain
and you need to forward the incoming HTTP Cookie header to this endpoint:

```js
pseudo-code example
router.get('/login', async function (req, res) {
const flow = await client.getLoginFlow(req.header('cookie'), req.query['flow'])

res.render('login', flow)
})
```

This request may fail due to several reasons. The `error.id` can be one of:

`session_already_available`: The user is already signed in.
`self_service_flow_expired`: The flow is expired and you should request a new one.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="get-login-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The Login Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/login?flow=abcde`).|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-login-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|loginFlow|[loginFlow](#schemaloginflow)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a test OIDC login flow

<a id="opIddeleteTestLoginFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/login/test?id=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /self-service/login/test`

Deletes a dry-run OIDC test login flow. A flow whose debug payload has
been captured requires the HMAC cookie set by the OIDC callback; a flow
still in the initial choose-method state is deletable with just the flow
ID (it carries no PII, and the admin may want to abandon it).

<h3 id="delete-a-test-oidc-login-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|ID of the test login flow to delete.|
|Cookie|header|string|false|HTTP Cookies. A captured test flow requires the ory_kratos_test_flow<br>cookie set by the OIDC callback; a flow still in the initial<br>choose-method state does not.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="delete-a-test-oidc-login-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Logout Flow

<a id="opIdupdateLogoutFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/logout \
  -H 'Accept: application/json'
```

`GET /self-service/logout`

This endpoint logs out an identity in a self-service manner.

If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other)
to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.

If the `Accept` HTTP header is set to `application/json`, a 204 No Content response
will be sent on successful logout instead.

This endpoint is NOT INTENDED for API clients and only works
with browsers (Chrome, Firefox, ...). For API clients you can
call the `/self-service/logout/api` URL directly with the Ory Session Token.

More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.com/docs/next/kratos/self-service/flows/user-logout).

<h3 id="update-logout-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|A Valid Logout Token<br><br>If you do not have a logout token because you only have a session cookie,<br>call `/self-service/logout/browser` to generate a URL for this endpoint.|
|return_to|query|string|false|The URL to return to after the logout was completed.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|

> Example responses

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="update-logout-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Perform Logout for Native Apps

<a id="opIdperformNativeLogout"></a>

> Code samples

```bash
curl https://example.com/self-service/logout/api \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "session_token": "string"
  }'
```

`DELETE /self-service/logout/api`

Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully
revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when
the Ory Session Token has been revoked already before.

If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.

This endpoint does not remove any HTTP
Cookies - use the Browser-Based Self-Service Logout Flow instead.

> Body parameter

```json
{
  "session_token": "string"
}
```

<h3 id="perform-logout-for-native-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[performNativeLogoutBody](#schemaperformnativelogoutbody)|true|none|
|» session_token|body|string|true|The Session Token<br><br>Invalidate this session token.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="perform-logout-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Logout URL for Browsers

<a id="opIdcreateBrowserLogoutFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/logout/browser \
  -H 'Accept: application/json'
```

`GET /self-service/logout/browser`

This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.

This endpoint is NOT INTENDED for API clients and only works
with browsers (Chrome, Firefox, ...). For API clients you can
call the `/self-service/logout/api` URL directly with the Ory Session Token.

The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns
a 401 error.

When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.

<h3 id="create-a-logout-url-for-browsers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cookie|header|string|false|HTTP Cookies<br><br>If you call this endpoint from a backend, please include the<br>original Cookie header in the request.|
|return_to|query|string|false|Return to URL<br><br>The URL to which the browser should be redirected to after the logout<br>has been performed.|

> Example responses

> 200 Response

```json
{
  "logout_token": "string",
  "logout_url": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-a-logout-url-for-browsers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|logoutFlow|[logoutFlow](#schemalogoutflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|500|Internal Server Error|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Recovery Flow

<a id="opIdupdateRecoveryFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/recovery?flow=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "email": "string",
    "method": "link",
    "transient_payload": {}
  }'
```

`POST /self-service/recovery`

Use this endpoint to update a recovery flow. This endpoint
behaves differently for API and browser flows and has several states:

`choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent
and works with API- and Browser-initiated flows.
For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid.
and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired).
For Browser clients without HTTP Header `Accept` or with `Accept: text/*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended.
`sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It
works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state.
`passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow ("sending a recovery link")
does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL
(if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with
a new Recovery Flow ID which contains an error message that the recovery link was invalid.

More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).

> Body parameter

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

<h3 id="update-recovery-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flow|query|string|true|The Recovery Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/recovery?flow=abcde`).|
|token|query|string|false|Recovery Token<br><br>The recovery token which completes the recovery request. If the token<br>is invalid (e.g. expired) an error will be shown to the end-user.<br><br>This parameter is usually set in a link and not used by any direct API call.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|body|body|[updateRecoveryFlowBody](#schemaupdaterecoveryflowbody)|true|none|
|» *oneOf*|body|[updateRecoveryFlowWithLinkMethod](#schemaupdaterecoveryflowwithlinkmethod)|false|Update Recovery Flow with Link Method|
|» *oneOf*|body|[updateRecoveryFlowWithCodeMethod](#schemaupdaterecoveryflowwithcodemethod)|false|Update Recovery Flow with Code Method|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="update-recovery-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|recoveryFlow|[recoveryFlow](#schemarecoveryflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|recoveryFlow|[recoveryFlow](#schemarecoveryflow)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorBrowserLocationChangeRequired|[errorBrowserLocationChangeRequired](#schemaerrorbrowserlocationchangerequired)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Recovery Flow for Native Apps

<a id="opIdcreateNativeRecoveryFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/recovery/api \
  -H 'Accept: application/json'
```

`GET /self-service/recovery/api`

This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.

If a valid provided session cookie or session token is provided, a 400 Bad Request error.

On an existing recovery flow, use the `getRecoveryFlow` API endpoint.

You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server
Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make
you vulnerable to a variety of CSRF attacks.

This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).

More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-recovery-flow-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|recoveryFlow|[recoveryFlow](#schemarecoveryflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Recovery Flow for Browsers

<a id="opIdcreateBrowserRecoveryFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/recovery/browser \
  -H 'Accept: application/json'
```

`GET /self-service/recovery/browser`

This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to
`selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session
exists, the browser is returned to the configured return URL.

If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects
or a 400 bad request error if the user is already authenticated.

This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.

More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).

<h3 id="create-recovery-flow-for-browsers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|skip_settings|query|string|false|Skip redirection to the settings UI after the recovery flow was<br>completed. Instead, the user will be redirected to the URL specified in<br>`return_to` query parameter or the default return URL if `return_to` is<br>not set.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-recovery-flow-for-browsers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|recoveryFlow|[recoveryFlow](#schemarecoveryflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Recovery Flow

<a id="opIdgetRecoveryFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/recovery/flows?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/recovery/flows`

This endpoint returns a recovery flow's context with, for example, error details and other information.

Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.
For AJAX requests you must ensure that cookies are included in the request or requests will fail.

If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain
and you need to forward the incoming HTTP Cookie header to this endpoint:

```js
pseudo-code example
router.get('/recovery', async function (req, res) {
const flow = await client.getRecoveryFlow(req.header('Cookie'), req.query['flow'])

res.render('recovery', flow)
})
```

More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).

<h3 id="get-recovery-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The Flow ID<br><br>The value for this parameter comes from `request` URL Query parameter sent to your<br>application (e.g. `/recovery?flow=abcde`).|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-recovery-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|recoveryFlow|[recoveryFlow](#schemarecoveryflow)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Registration Flow

<a id="opIdupdateRegistrationFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/registration?flow=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "method": "string",
    "password": "string",
    "traits": {},
    "transient_payload": {}
  }'
```

`POST /self-service/registration`

Use this endpoint to complete a registration flow by sending an identity's traits and password. This endpoint
behaves differently for API and browser flows.

API flows expect `application/json` to be sent in the body and respond with
HTTP 200 and a application/json body with the created identity success - if the session hook is configured the
`session` and `session_token` will also be included;
HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body;
HTTP 400 on form validation errors.

Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with
a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded;
a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.

Browser flows with an accept header of `application/json` will not redirect but instead respond with
HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;
HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;
HTTP 400 on form validation errors.

If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!
`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.
Most likely used in Social Sign In flows.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

> Body parameter

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "traits": {},
  "transient_payload": {}
}
```

<h3 id="update-registration-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flow|query|string|true|The Registration Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/registration?flow=abcde`).|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|body|body|[updateRegistrationFlowBody](#schemaupdateregistrationflowbody)|true|none|
|» *oneOf*|body|[updateRegistrationFlowWithPasswordMethod](#schemaupdateregistrationflowwithpasswordmethod)|false|Update Registration Flow with Password Method|
|» *oneOf*|body|[updateRegistrationFlowWithOidcMethod](#schemaupdateregistrationflowwithoidcmethod)|false|Update Registration Flow with OpenID Connect Method|
|» *oneOf*|body|[updateRegistrationFlowWithSamlMethod](#schemaupdateregistrationflowwithsamlmethod)|false|Update registration flow using SAML|
|» *oneOf*|body|[updateRegistrationFlowWithWebAuthnMethod](#schemaupdateregistrationflowwithwebauthnmethod)|false|Update Registration Flow with WebAuthn Method|
|» *oneOf*|body|[updateRegistrationFlowWithCodeMethod](#schemaupdateregistrationflowwithcodemethod)|false|Update Registration Flow with Code Method|
|» *oneOf*|body|[updateRegistrationFlowWithPasskeyMethod](#schemaupdateregistrationflowwithpasskeymethod)|false|Update Registration Flow with Passkey Method|
|» *oneOf*|body|[updateRegistrationFlowWithProfileMethod](#schemaupdateregistrationflowwithprofilemethod)|false|Update Registration Flow with Profile Method|

> Example responses

> 200 Response

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

> 400 Response

```json
{
  "active": "password",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="update-registration-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successfulNativeRegistration|[successfulNativeRegistration](#schemasuccessfulnativeregistration)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|registrationFlow|[registrationFlow](#schemaregistrationflow)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorBrowserLocationChangeRequired|[errorBrowserLocationChangeRequired](#schemaerrorbrowserlocationchangerequired)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Registration Flow for Native Apps

<a id="opIdcreateNativeRegistrationFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/registration/api \
  -H 'Accept: application/json'
```

`GET /self-service/registration/api`

This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.

If a valid provided session cookie or session token is provided, a 400 Bad Request error
will be returned unless the URL query parameter `?refresh=true` is set.

To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.

You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server
Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make
you vulnerable to a variety of CSRF attacks.

In the case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.

This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="create-registration-flow-for-native-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_session_token_exchange_code|query|boolean|false|EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token<br>after the login flow has been completed.|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|organization|query|string|false|An optional organization ID that should be used to register this user.<br>This parameter is only effective in the Ory Network.|
|identity_schema|query|string|false|An optional identity schema to use for the registration flow.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-registration-flow-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|registrationFlow|[registrationFlow](#schemaregistrationflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Registration Flow for Browsers

<a id="opIdcreateBrowserRegistrationFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/registration/browser \
  -H 'Accept: application/json'
```

`GET /self-service/registration/browser`

This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate
cookies and anti-CSRF measures required for browser-based flows.

If this endpoint is opened as a link in the browser, it will be redirected to
`selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session
exists already, the browser will be redirected to `urls.default_redirect_url`.

If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`session_already_available`: The user is already signed in.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!

If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.

This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="create-registration-flow-for-browsers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|login_challenge|query|string|false|Ory OAuth 2.0 Login Challenge.<br><br>If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.<br><br>The value for this parameter comes from `login_challenge` URL Query parameter sent to your<br>application (e.g. `/registration?login_challenge=abcde`).<br><br>This feature is compatible with Ory Hydra when not running on the Ory Network.|
|after_verification_return_to|query|string|false|The URL to return the browser to after the verification flow was completed.<br><br>After the registration flow is completed, the user will be sent a verification email.<br>Upon completing the verification flow, this URL will be used to override the default<br>`selfservice.flows.verification.after.default_redirect_to` value.|
|organization|query|string|false|An optional organization ID that should be used to register this user.<br>This parameter is only effective in the Ory Network.|
|identity_schema|query|string|false|An optional identity schema to use for the registration flow.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-registration-flow-for-browsers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|registrationFlow|[registrationFlow](#schemaregistrationflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Registration Flow

<a id="opIdgetRegistrationFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/registration/flows?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/registration/flows`

This endpoint returns a registration flow's context with, for example, error details and other information.

Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.
For AJAX requests you must ensure that cookies are included in the request or requests will fail.

If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain
and you need to forward the incoming HTTP Cookie header to this endpoint:

```js
pseudo-code example
router.get('/registration', async function (req, res) {
const flow = await client.getRegistrationFlow(req.header('cookie'), req.query['flow'])

res.render('registration', flow)
})
```

This request may fail due to several reasons. The `error.id` can be one of:

`session_already_available`: The user is already signed in.
`self_service_flow_expired`: The flow is expired and you should request a new one.

More information can be found at [Ory Kratos User Login](https://www.ory.com/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.com/docs/kratos/self-service/flows/user-registration).

<h3 id="get-registration-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The Registration Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/registration?flow=abcde`).|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|

> Example responses

> 200 Response

```json
{
  "active": "password",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-registration-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|registrationFlow|[registrationFlow](#schemaregistrationflow)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Complete Settings Flow

<a id="opIdupdateSettingsFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/settings?flow=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "method": "string",
    "password": "string",
    "transient_payload": {}
  }'
```

`POST /self-service/settings`

Use this endpoint to complete a settings flow by sending an identity's updated password. This endpoint
behaves differently for API and browser flows.

API-initiated flows expect `application/json` to be sent in the body and respond with
HTTP 200 and an application/json body with the session token on success;
HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set;
HTTP 400 on form validation errors.
HTTP 401 when the endpoint is called without a valid session token.
HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low.
Implies that the user needs to re-authenticate.

Browser flows without HTTP Header `Accept` or with `Accept: text/*` respond with
a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded;
a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise.
a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low.

Browser flows with HTTP Header `Accept: application/json` respond with
HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success;
HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set;
HTTP 401 when the endpoint is called without a valid session cookie.
HTTP 403 when the page is accessed without a session cookie or the session's AAL is too low.
HTTP 400 on form validation errors.

Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator
Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn
credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user
to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.

If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect
the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`,
or initiate a refresh login flow otherwise.
`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`session_inactive`: No Ory Session was found - sign in a user first.
`security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other
identity logged in instead.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!
`browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL.
Most likely used in Social Sign In flows.

More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).

> Body parameter

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "transient_payload": {}
}
```

<h3 id="complete-settings-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flow|query|string|true|The Settings Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/settings?flow=abcde`).|
|X-Session-Token|header|string|false|The Session Token of the Identity performing the settings flow.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|body|body|[updateSettingsFlowBody](#schemaupdatesettingsflowbody)|true|none|
|» *oneOf*|body|[updateSettingsFlowWithPasswordMethod](#schemaupdatesettingsflowwithpasswordmethod)|false|Update Settings Flow with Password Method|
|» *oneOf*|body|[updateSettingsFlowWithProfileMethod](#schemaupdatesettingsflowwithprofilemethod)|false|Update Settings Flow with Profile Method|
|» *oneOf*|body|[updateSettingsFlowWithOidcMethod](#schemaupdatesettingsflowwithoidcmethod)|false|Update Settings Flow with OpenID Connect Method|
|» *oneOf*|body|[updateSettingsFlowWithSamlMethod](#schemaupdatesettingsflowwithsamlmethod)|false|Update settings flow using SAML|
|» *oneOf*|body|[updateSettingsFlowWithTotpMethod](#schemaupdatesettingsflowwithtotpmethod)|false|Update Settings Flow with TOTP Method|
|» *oneOf*|body|[updateSettingsFlowWithWebAuthnMethod](#schemaupdatesettingsflowwithwebauthnmethod)|false|Update Settings Flow with WebAuthn Method|
|» *oneOf*|body|[updateSettingsFlowWithLookupMethod](#schemaupdatesettingsflowwithlookupmethod)|false|Update Settings Flow with Lookup Method|
|» *oneOf*|body|[updateSettingsFlowWithPasskeyMethod](#schemaupdatesettingsflowwithpasskeymethod)|false|Update Settings Flow with Passkey Method|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="complete-settings-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|settingsFlow|[settingsFlow](#schemasettingsflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|settingsFlow|[settingsFlow](#schemasettingsflow)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorBrowserLocationChangeRequired|[errorBrowserLocationChangeRequired](#schemaerrorbrowserlocationchangerequired)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sessionToken
</aside>

## Create Settings Flow for Native Apps

<a id="opIdcreateNativeSettingsFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/settings/api \
  -H 'Accept: application/json'
```

`GET /self-service/settings/api`

This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on.
You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.

To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.

You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server
Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make
you vulnerable to a variety of CSRF attacks.

Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator
Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn
credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user
to sign in with the second factor or change the configuration.

In the case of an error, the `error.id` of the JSON response body can be one of:

`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`session_inactive`: No Ory Session was found - sign in a user first.

This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).

More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).

<h3 id="create-settings-flow-for-native-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Session-Token|header|string|false|The Session Token of the Identity performing the settings flow.|
|organization|query|string|false|An optional organization ID that scopes the settings flow to providers of that organization.<br>This parameter is only effective in the Ory Network.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-settings-flow-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|settingsFlow|[settingsFlow](#schemasettingsflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Settings Flow for Browsers

<a id="opIdcreateBrowserSettingsFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/settings/browser \
  -H 'Accept: application/json'
```

`GET /self-service/settings/browser`

This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to
`selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid
Ory Kratos Session Cookie is included in the request, a login flow will be initialized.

If this endpoint is opened as a link in the browser, it will be redirected to
`selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session
was set, the browser will be redirected to the login endpoint.

If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects
or a 401 forbidden error if no valid session was set.

Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator
Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn
credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user
to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.

If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`session_inactive`: No Ory Session was found - sign in a user first.
`security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!

This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.

More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).

<h3 id="create-settings-flow-for-browsers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|organization|query|string|false|An optional organization ID that scopes the settings flow to providers of that organization.<br>This parameter is only effective in the Ory Network.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-settings-flow-for-browsers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|settingsFlow|[settingsFlow](#schemasettingsflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Settings Flow

<a id="opIdgetSettingsFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/settings/flows?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/settings/flows`

When accessing this endpoint through Ory Kratos' Public API you must ensure that either the Ory Kratos Session Cookie
or the Ory Kratos Session Token are set.

Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator
Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn
credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user
to sign in with the second factor or change the configuration.

You can access this endpoint without credentials when using Ory Kratos' Admin API.

If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the
case of an error, the `error.id` of the JSON response body can be one of:

`security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.
`session_inactive`: No Ory Session was found - sign in a user first.
`security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other
identity logged in instead.

More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).

<h3 id="get-settings-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|ID is the Settings Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/settings?flow=abcde`).|
|X-Session-Token|header|string|false|The Session Token<br><br>When using the SDK in an app without a browser, please include the<br>session token here.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-settings-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|settingsFlow|[settingsFlow](#schemasettingsflow)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Complete Verification Flow

<a id="opIdupdateVerificationFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/verification?flow=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "csrf_token": "string",
    "email": "string",
    "method": "link",
    "transient_payload": {}
  }'
```

`POST /self-service/verification`

Use this endpoint to complete a verification flow. This endpoint
behaves differently for API and browser flows and has several states:

`choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent
and works with API- and Browser-initiated flows.
For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid
and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired).
For Browser clients without HTTP Header `Accept` or with `Accept: text/*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended.
`sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It
works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state.
`passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow ("sending a verification link")
does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL
(if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with
a new Verification Flow ID which contains an error message that the verification link was invalid.

More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).

> Body parameter

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

<h3 id="complete-verification-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flow|query|string|true|The Verification Flow ID<br><br>The value for this parameter comes from `flow` URL Query parameter sent to your<br>application (e.g. `/verification?flow=abcde`).|
|token|query|string|false|Verification Token<br><br>The verification token which completes the verification request. If the token<br>is invalid (e.g. expired) an error will be shown to the end-user.<br><br>This parameter is usually set in a link and not used by any direct API call.|
|Cookie|header|string|false|HTTP Cookies<br><br>When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header<br>sent by the client to your server here. This ensures that CSRF and session cookies are respected.|
|body|body|[updateVerificationFlowBody](#schemaupdateverificationflowbody)|true|none|
|» *oneOf*|body|[updateVerificationFlowWithLinkMethod](#schemaupdateverificationflowwithlinkmethod)|false|Update Verification Flow with Link Method|
|» *oneOf*|body|[updateVerificationFlowWithCodeMethod](#schemaupdateverificationflowwithcodemethod)|false|none|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="complete-verification-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|verificationFlow|[verificationFlow](#schemaverificationflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|verificationFlow|[verificationFlow](#schemaverificationflow)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Verification Flow for Native Apps

<a id="opIdcreateNativeVerificationFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/verification/api \
  -H 'Accept: application/json'
```

`GET /self-service/verification/api`

This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.

To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.

You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server
Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make
you vulnerable to a variety of CSRF attacks.

This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).

More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).

<h3 id="create-verification-flow-for-native-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|A URL contained in the return_to key of the verification flow.<br>This piece of data has no effect on the actual logic of the flow and is purely informational.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-verification-flow-for-native-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|verificationFlow|[verificationFlow](#schemaverificationflow)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Verification Flow for Browser Clients

<a id="opIdcreateBrowserVerificationFlow"></a>

> Code samples

```bash
curl https://example.com/self-service/verification/browser \
  -H 'Accept: application/json'
```

`GET /self-service/verification/browser`

This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to
`selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.

If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.

This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).

More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).

<h3 id="create-verification-flow-for-browser-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_to|query|string|false|The URL to return the browser to after the flow was completed.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="create-verification-flow-for-browser-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|verificationFlow|[verificationFlow](#schemaverificationflow)|
|303|See Other|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Verification Flow

<a id="opIdgetVerificationFlow"></a>

> Code samples

```bash
curl 'https://example.com/self-service/verification/flows?id=string' \
  -H 'Accept: application/json'
```

`GET /self-service/verification/flows`

This endpoint returns a verification flow's context with, for example, error details and other information.

Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header.
For AJAX requests you must ensure that cookies are included in the request or requests will fail.

If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain
and you need to forward the incoming HTTP Cookie header to this endpoint:

```js
pseudo-code example
router.get('/recovery', async function (req, res) {
const flow = await client.getVerificationFlow(req.header('cookie'), req.query['flow'])

res.render('verification', flow)
})
```

More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation).

<h3 id="get-verification-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The Flow ID<br><br>The value for this parameter comes from `request` URL Query parameter sent to your<br>application (e.g. `/verification?flow=abcde`).|
|cookie|header|string|false|HTTP Cookies<br><br>When using the SDK on the server side you must include the HTTP Cookie Header<br>originally sent to your HTTP handler here.|

> Example responses

> 200 Response

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-verification-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|verificationFlow|[verificationFlow](#schemaverificationflow)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Get My Active Sessions

<a id="opIdlistMySessions"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -H 'Accept: application/json'
```

`GET /sessions`

This endpoints returns all other active sessions that belong to the logged-in user.
The current session can be retrieved by calling the `/sessions/whoami` endpoint.

<h3 id="get-my-active-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|integer(int64)|false|Deprecated Items per Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This is the number of items per page.|
|page|query|integer(int64)|false|Deprecated Pagination Page<br><br>DEPRECATED: Please use `page_token` instead. This parameter will be removed in the future.<br><br>This value is currently an integer, but it is not sequential. The value is not the page number, but a<br>reference. The next page can be any number and some numbers might return an empty list.<br><br>For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.<br>The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the<br>`Link` header.|
|page_size|query|integer(int64)|false|Page Size<br><br>This is the number of items per page to return. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token. For details on pagination please head over to the<br>[pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|X-Session-Token|header|string|false|Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.|
|Cookie|header|string|false|Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that<br>scenario you must include the HTTP Cookie Header which originally was included in the request to your server.<br>An example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.<br><br>It is ok if more than one cookie are included here as all other cookies will be ignored.|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-my-active-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List My Session Response|Inline|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<h3 id="get-my-active-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[session](#schemasession)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Disable my other sessions

<a id="opIddisableMyOtherSessions"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sessions`

Calling this endpoint invalidates all except the current session that belong to the logged-in user.
Session data are not deleted.

<h3 id="disable-my-other-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Session-Token|header|string|false|Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.|
|Cookie|header|string|false|Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that<br>scenario you must include the HTTP Cookie Header which originally was included in the request to your server.<br>An example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.<br><br>It is ok if more than one cookie are included here as all other cookies will be ignored.|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="disable-my-other-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteMySessionsCount|[deleteMySessionsCount](#schemadeletemysessionscount)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange Session Token

<a id="opIdexchangeSessionToken"></a>

> Code samples

```bash
curl 'https://example.com/sessions/token-exchange?init_code=string&return_to_code=string' \
  -H 'Accept: application/json'
```

`GET /sessions/token-exchange`

<h3 id="exchange-session-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|init_code|query|string|true|The part of the code return when initializing the flow.|
|return_to_code|query|string|true|The part of the code returned by the return_to URL.|

> Example responses

> 200 Response

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 422 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="exchange-session-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successfulNativeLogin|[successfulNativeLogin](#schemasuccessfulnativelogin)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|404|Not Found|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|410|Gone|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|422|Unprocessable Entity|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Check Who the Current HTTP Session Belongs To

<a id="opIdtoSession"></a>

> Code samples

```bash
curl https://example.com/sessions/whoami \
  -H 'Accept: application/json'
```

`GET /sessions/whoami`

Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated.
Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent.
When the request it successful it adds the user ID to the 'X-Kratos-Authenticated-Identity-Id' header
in the response.

If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:

```js
pseudo-code example
router.get('/protected-endpoint', async function (req, res) {
const session = await client.toSession(undefined, req.header('cookie'))

console.log(session)
})
```

When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:

```js
pseudo-code example
...
const session = await client.toSession("the-session-token")

console.log(session)
```

When using a token template, the token is included in the `tokenized` field of the session.

```js
pseudo-code example
...
const session = await client.toSession("the-session-token", { tokenize_as: "example-jwt-template" })

console.log(session.tokenized) // The JWT
```

Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator
Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn
credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user
to sign in with the second factor or change the configuration.

This endpoint is useful for:

AJAX calls. Remember to send credentials and set up CORS correctly!
Reverse proxies and API Gateways
Server-side calls - use the `X-Session-Token` header!

This endpoint authenticates users by checking:

if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie;
if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token;
if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.

If none of these headers are set or the cookie or token are invalid, the endpoint returns a HTTP 401 status code.

As explained above, this request may fail due to several reasons. The `error.id` can be one of:

`session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token).
`session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.

<h3 id="check-who-the-current-http-session-belongs-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Session-Token|header|string|false|Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.|
|Cookie|header|string|false|Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that<br>scenario you must include the HTTP Cookie Header which originally was included in the request to your server.<br>An example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.<br><br>It is ok if more than one cookie are included here as all other cookies will be ignored.|
|tokenize_as|query|string|false|Returns the session additionally as a token (such as a JWT)<br><br>The value of this parameter has to be a valid, configured Ory Session token template. For more information head over to [the documentation](http://ory.sh/docs/identities/session-to-jwt-cors).|

> Example responses

> 200 Response

```json
{
  "active": true,
  "authenticated_at": "1970-01-01T00:00:00Z",
  "authentication_methods": [
    {
      "aal": "aal0",
      "completed_at": "1970-01-01T00:00:00Z",
      "method": "password",
      "organization": "string",
      "provider": "string",
      "upstream_acr": "string",
      "upstream_amr": [
        "string"
      ]
    }
  ],
  "authenticator_assurance_level": "aal0",
  "devices": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ip_address": "string",
      "location": "string",
      "user_agent": "string"
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "tokenized": "string"
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="check-who-the-current-http-session-belongs-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|session|[session](#schemasession)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|403|Forbidden|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

## Disable one of my sessions

<a id="opIddisableMySession"></a>

> Code samples

```bash
curl https://example.com/sessions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sessions/{id}`

Calling this endpoint invalidates the specified session. The current session cannot be revoked.
Session data are not deleted.

<h3 id="disable-one-of-my-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID is the session's ID.|
|X-Session-Token|header|string|false|Set the Session Token when calling from non-browser clients. A session token has a format of `MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj`.|
|Cookie|header|string|false|Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that<br>scenario you must include the HTTP Cookie Header which originally was included in the request to your server.<br>An example of a session in the HTTP Cookie Header is: `ory_kratos_session=a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f==`.<br><br>It is ok if more than one cookie are included here as all other cookies will be ignored.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="disable-one-of-my-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.|None|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|401|Unauthorized|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-identities-api-courier">courier</h1>

APIs for managing email and SMS message delivery.

## List Messages

<a id="opIdlistCourierMessages"></a>

> Code samples

```bash
curl https://example.com/admin/courier/messages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/courier/messages`

Lists all messages by given status and recipient.

<h3 id="list-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|status|query|[courierMessageStatus](#schemacouriermessagestatus)|false|Status filters out messages based on status.<br>If no value is provided, it doesn't take effect on filter.|
|recipient|query|string|false|Recipient filters out messages based on recipient.<br>If no value is provided, it doesn't take effect on filter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|sent|
|status|processing|
|status|abandoned|

> Example responses

> 200 Response

```json
[
  {
    "body": "string",
    "channel": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dispatches": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "error": {},
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "failed",
        "updated_at": "1970-01-01T00:00:00Z"
      }
    ],
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "recipient": "string",
    "send_count": 0,
    "status": "queued",
    "subject": "string",
    "template_type": "recovery_invalid",
    "type": "email",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="list-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated Courier Message List Response|Inline|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<h3 id="list-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[message](#schemamessage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

## Get a Message

<a id="opIdgetCourierMessage"></a>

> Code samples

```bash
curl https://example.com/admin/courier/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/courier/messages/{id}`

Gets a specific messages by the given ID.

<h3 id="get-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|MessageID is the ID of the message.|

> Example responses

> 200 Response

```json
{
  "body": "string",
  "channel": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "dispatches": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "error": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "failed",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "recipient": "string",
  "send_count": 0,
  "status": "queued",
  "subject": "string",
  "template_type": "recovery_invalid",
  "type": "email",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

> default Response

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

<h3 id="get-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|message|[message](#schemamessage)|
|400|Bad Request|errorGeneric|[errorGeneric](#schemaerrorgeneric)|
|default|Default|errorGeneric|[errorGeneric](#schemaerrorgeneric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oryAccessToken
</aside>

<h1 id="ory-identities-api-metadata">metadata</h1>

Server Metadata provides relevant information about the running server. Only available when self-hosting this service.

## Check HTTP Server Status

<a id="opIdisAlive"></a>

> Code samples

```bash
curl https://example.com/health/alive \
  -H 'Accept: application/json'
```

`GET /health/alive`

This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming
HTTP requests. This status does currently not include checks whether the database connection is working.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="check-http-server-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Kratos is ready to accept connections.|Inline|
|default|Default|Unexpected error|Inline|

<h3 id="check-http-server-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Always "ok".|

<aside class="success">
This operation does not require authentication
</aside>

## Check HTTP Server and Database Status

<a id="opIdisReady"></a>

> Code samples

```bash
curl https://example.com/health/ready \
  -H 'Accept: application/json'
```

`GET /health/ready`

This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g.
the database) are responsive as well.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of Ory Kratos, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 503 Response

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="check-http-server-and-database-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Kratos is ready to accept requests.|Inline|
|503|Service Unavailable|Ory Kratos is not yet ready to accept requests.|Inline|
|default|Default|Unexpected error|Inline|

<h3 id="check-http-server-and-database-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Always "ok".|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|true|none|Errors contains a list of errors that caused the not ready status.|
|» **additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return Running Software Version.

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl https://example.com/version \
  -H 'Accept: application/json'
```

`GET /version`

This endpoint returns the version of Ory Kratos.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the version will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "version": "string"
}
```

<h3 id="return-running-software-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Ory Kratos version.|Inline|

<h3 id="return-running-software-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|The version of Ory Kratos.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdminIdentityImportCredentialsLookupSecret">AdminIdentityImportCredentialsLookupSecret</h2>
<!-- backwards compatibility -->
<a id="schemaadminidentityimportcredentialslookupsecret"></a>
<a id="schema_AdminIdentityImportCredentialsLookupSecret"></a>
<a id="tocSadminidentityimportcredentialslookupsecret"></a>
<a id="tocsadminidentityimportcredentialslookupsecret"></a>

```json
{
  "config": {
    "codes": [
      {
        "code": "string",
        "used_at": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

Create Identity and Import Lookup Secret Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[AdminIdentityImportCredentialsLookupSecretConfig](#schemaadminidentityimportcredentialslookupsecretconfig)|false|none|Create Identity and Import Lookup Secret Credentials Configuration|

<h2 id="tocS_AdminIdentityImportCredentialsLookupSecretConfig">AdminIdentityImportCredentialsLookupSecretConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminidentityimportcredentialslookupsecretconfig"></a>
<a id="schema_AdminIdentityImportCredentialsLookupSecretConfig"></a>
<a id="tocSadminidentityimportcredentialslookupsecretconfig"></a>
<a id="tocsadminidentityimportcredentialslookupsecretconfig"></a>

```json
{
  "codes": [
    {
      "code": "string",
      "used_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Create Identity and Import Lookup Secret Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[[identityCredentialsLookupSecretCode](#schemaidentitycredentialslookupsecretcode)]|false|none|Codes is a list of "lookup secret" codes configured for the user.|

<h2 id="tocS_AuthenticatorTransport">AuthenticatorTransport</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatortransport"></a>
<a id="schema_AuthenticatorTransport"></a>
<a id="tocSauthenticatortransport"></a>
<a id="tocsauthenticatortransport"></a>

```json
"string"
```

Authenticators may implement various transports for communicating with clients. This enumeration defines hints as to
how clients might communicate with a particular authenticator in order to obtain an assertion for a specific
credential. Note that these hints represent the WebAuthn Relying Party's best belief as to how an authenticator may
be reached. A Relying Party will typically learn of the supported transports for a public key credential via
getTransports().

Specification: §5.8.4. Authenticator Transport Enumeration (https://www.w3.org/TR/webauthn/#enumdef-authenticatortransport)

<h2 id="tocS_CodeChannel">CodeChannel</h2>
<!-- backwards compatibility -->
<a id="schemacodechannel"></a>
<a id="schema_CodeChannel"></a>
<a id="tocScodechannel"></a>
<a id="tocscodechannel"></a>

```json
"string"
```

<h2 id="tocS_DefaultError">DefaultError</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterror"></a>
<a id="schema_DefaultError"></a>
<a id="tocSdefaulterror"></a>
<a id="tocsdefaulterror"></a>

```json
null
```

From https://go.dev/wiki/CodeReviewComments#receiver-type:
> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.
> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,
> prefer a pointer receiver, as it will make the intention clearer to the reader.
> Don’t mix receiver types. Choose either pointers or struct types for all available methods.

<h2 id="tocS_DeviceAuthnKey">DeviceAuthnKey</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthnkey"></a>
<a id="schema_DeviceAuthnKey"></a>
<a id="tocSdeviceauthnkey"></a>
<a id="tocsdeviceauthnkey"></a>

```json
{
  "attestation": {
    "android": {
      "attestation_security_level": 0,
      "attestation_version": 0,
      "keymaster_security_level": 0,
      "keymaster_version": 0,
      "software_enforced": {
        "active_date_time": 0,
        "algorithm": 0,
        "application_id": [
          0
        ],
        "attestation_application_id": [
          0
        ],
        "attestation_id_brand": [
          0
        ],
        "attestation_id_device": [
          0
        ],
        "attestation_id_imei": [
          0
        ],
        "attestation_id_manufacturer": [
          0
        ],
        "attestation_id_meid": [
          0
        ],
        "attestation_id_model": [
          0
        ],
        "attestation_id_product": [
          0
        ],
        "attestation_id_serial": [
          0
        ],
        "auth_timeout": 0,
        "boot_patch_level": 0,
        "creation_date_time": 0,
        "digest": [
          0
        ],
        "ec_curve": 0,
        "key_size": 0,
        "origin": 0,
        "origination_expire_date_time": 0,
        "os_patch_level": 0,
        "os_version": 0,
        "purpose": [
          0
        ],
        "root_of_trust": {
          "device_locked": true,
          "verified_boot_hash": [
            0
          ],
          "verified_boot_key": [
            0
          ],
          "verified_boot_state": 0
        },
        "usage_expire_date_time": 0,
        "user_auth_type": 0,
        "vendor_patch_level": 0
      },
      "tee_enforced": {
        "active_date_time": 0,
        "algorithm": 0,
        "application_id": [
          0
        ],
        "attestation_application_id": [
          0
        ],
        "attestation_id_brand": [
          0
        ],
        "attestation_id_device": [
          0
        ],
        "attestation_id_imei": [
          0
        ],
        "attestation_id_manufacturer": [
          0
        ],
        "attestation_id_meid": [
          0
        ],
        "attestation_id_model": [
          0
        ],
        "attestation_id_product": [
          0
        ],
        "attestation_id_serial": [
          0
        ],
        "auth_timeout": 0,
        "boot_patch_level": 0,
        "creation_date_time": 0,
        "digest": [
          0
        ],
        "ec_curve": 0,
        "key_size": 0,
        "origin": 0,
        "origination_expire_date_time": 0,
        "os_patch_level": 0,
        "os_version": 0,
        "purpose": [
          0
        ],
        "root_of_trust": {
          "device_locked": true,
          "verified_boot_hash": [
            0
          ],
          "verified_boot_key": [
            0
          ],
          "verified_boot_state": 0
        },
        "usage_expire_date_time": 0,
        "user_auth_type": 0,
        "vendor_patch_level": 0
      }
    },
    "ios": {
      "att_stmt": {
        "x5c": [
          [
            0
          ]
        ]
      },
      "auth_data": [
        0
      ],
      "fmt": "string"
    }
  },
  "client_key_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "device_name": "string",
  "device_type": "Android",
  "pin": {
    "created_at": "1970-01-01T00:00:00Z",
    "failed_attempts": 0,
    "pin_secret": "string",
    "rotated_at": "1970-01-01T00:00:00Z"
  },
  "public_key": "string",
  "relaxed_attestation_expires_at": "1970-01-01T00:00:00Z",
  "state": "initial",
  "user_verification": "pin",
  "version": 0
}
```

Represents a hardware-backed signing key enrolled from a mobile device.
The private key resides inside the device and never exists on the server.

To list the identity's enrolled keys, fetch a settings flow: each key's
remove button (a `ui.nodes` entry named `deviceauthn_remove` in group
`deviceauthn`) carries the key, with its PIN state redacted, in the node
label's `context`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[deviceAuthnAttestation](#schemadeviceauthnattestation)|false|none|Exactly one of `android` or `ios` is set, matching the key's device_type.|
|client_key_id|string|false|none|The key's stable id, unique per identity. Submit it as the<br>`client_key_id` when logging in with the key, deleting it, or rotating<br>its pin_secret.<br><br>The device can also compute the id without reading it back from the<br>server: it is the lowercase-hex SHA-256 of `public_key` (the key's<br>PKIX, ASN.1 DER encoding). Keys enrolled before the server derived the<br>id keep their original client-chosen value, so prefer reading this<br>field over recomputing it for older keys.|
|created_at|string(date-time)|false|none|When the key was enrolled. Only used for troubleshooting and UI.|
|device_name|string|false|none|A human-readable name for the device, helping the user tell this key<br>apart from others.|
|device_type|[DeviceType](#schemadevicetype)|false|none|"Android" and "iOS" use different attestation and signature encodings.|
|pin|[PINConfig](#schemapinconfig)|false|none|The pin_secret field holds only the at-rest ciphertext; the plaintext<br>exists transiently in server memory during verification and is invalidated<br>once the key locks.|
|public_key|string(byte)|false|none|The device's public key (an elliptic-curve key on P-224, P-256, P-384,<br>or P-521 in version 1) in PKIX, ASN.1 DER (SubjectPublicKeyInfo) form,<br>base64-encoded. Signatures are verified against this key.|
|relaxed_attestation_expires_at|string(date-time)|false|none|Set only when the key's attestation chain was accepted under relaxed<br>rules (software roots, expired certificates, software security level)<br>rather than strict hardware attestation. Such keys are refused at login<br>after this time, or immediately once relaxed attestation is turned off.<br>Absent for hardware-attested keys that pass strict validation.|
|state|[KeyState](#schemakeystate)|false|none|Only a "confirmed" key can be used to authenticate. A "locked" key was<br>disabled after too many wrong-PIN attempts; rotating its pin_secret unlocks<br>it.|
|user_verification|[UserVerification](#schemauserverification)|false|none|"pin" means the holder proves knowledge of a PIN via pin_proof at login;<br>"platform" means the device gates key use behind platform biometrics or an<br>equivalent lock screen; "none" marks a possession-only key, usable as a<br>second factor but never as the sole first factor. The empty value marks a<br>legacy key from before user verification existed; such keys are rejected at<br>login and must be re-enrolled.|
|version|integer(int64)|false|none|The cryptography version of the key. Version 1 uses ECDSA with SHA-256<br>on an elliptic curve (P-224, P-256, P-384, or P-521); further versions<br>are reserved for future signature suites.|

#### Enumerated Values

|Property|Value|
|---|---|
|device_type|Android|
|device_type|iOS|
|state|initial|
|state|confirmed|
|state|locked|
|user_verification|pin|
|user_verification|platform|
|user_verification|none|

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"Android"
```

"Android" and "iOS" use different attestation and signature encodings.

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
0
```

A Duration represents the elapsed time between two instants
as an int64 nanosecond count. The representation limits the
largest representable duration to approximately 290 years.

<h2 id="tocS_Enumerated">Enumerated</h2>
<!-- backwards compatibility -->
<a id="schemaenumerated"></a>
<a id="schema_Enumerated"></a>
<a id="tocSenumerated"></a>
<a id="tocsenumerated"></a>

```json
0
```

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
0
```

<h2 id="tocS_JSONRawMessage">JSONRawMessage</h2>
<!-- backwards compatibility -->
<a id="schemajsonrawmessage"></a>
<a id="schema_JSONRawMessage"></a>
<a id="tocSjsonrawmessage"></a>
<a id="tocsjsonrawmessage"></a>

```json
{}
```

<h2 id="tocS_KeyState">KeyState</h2>
<!-- backwards compatibility -->
<a id="schemakeystate"></a>
<a id="schema_KeyState"></a>
<a id="tocSkeystate"></a>
<a id="tocskeystate"></a>

```json
"initial"
```

Only a "confirmed" key can be used to authenticate. A "locked" key was
disabled after too many wrong-PIN attempts; rotating its pin_secret unlocks
it.

<h2 id="tocS_NullBool">NullBool</h2>
<!-- backwards compatibility -->
<a id="schemanullbool"></a>
<a id="schema_NullBool"></a>
<a id="tocSnullbool"></a>
<a id="tocsnullbool"></a>

```json
true
```

<h2 id="tocS_NullInt">NullInt</h2>
<!-- backwards compatibility -->
<a id="schemanullint"></a>
<a id="schema_NullInt"></a>
<a id="tocSnullint"></a>
<a id="tocsnullint"></a>

```json
0
```

<h2 id="tocS_NullString">NullString</h2>
<!-- backwards compatibility -->
<a id="schemanullstring"></a>
<a id="schema_NullString"></a>
<a id="tocSnullstring"></a>
<a id="tocsnullstring"></a>

```json
"string"
```

<h2 id="tocS_NullTime">NullTime</h2>
<!-- backwards compatibility -->
<a id="schemanulltime"></a>
<a id="schema_NullTime"></a>
<a id="tocSnulltime"></a>
<a id="tocsnulltime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NullUUID">NullUUID</h2>
<!-- backwards compatibility -->
<a id="schemanulluuid"></a>
<a id="schema_NullUUID"></a>
<a id="tocSnulluuid"></a>
<a id="tocsnulluuid"></a>

```json
"string"
```

<h2 id="tocS_OAuth2Client">OAuth2Client</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2client"></a>
<a id="schema_OAuth2Client"></a>
<a id="tocSoauth2client"></a>
<a id="tocsoauth2client"></a>

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": [
    "string"
  ],
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": [
    "string"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": null,
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": [
    "string"
  ],
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "string",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "string",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token_strategy|string|false|none|OAuth 2.0 Access Token Strategy  AccessTokenStrategy is the strategy used to generate access tokens. Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.sh/docs/hydra/advanced#json-web-tokens Setting the stragegy here overrides the global setting in `strategies.access_token`.|
|allowed_cors_origins|[string]|false|none|none|
|audience|[string]|false|none|none|
|authorization_code_grant_access_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_id_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_refresh_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|backchannel_logout_session_required|boolean|false|none|OpenID Connect Back-Channel Logout Session Required  Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout Token to identify the RP session with the OP when the backchannel_logout_uri is used. If omitted, the default value is false.|
|backchannel_logout_uri|string|false|none|OpenID Connect Back-Channel Logout URI  RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|client_credentials_grant_access_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|client_id|string|false|none|OAuth 2.0 Client ID  The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|client_name|string|false|none|OAuth 2.0 Client Name  The human-readable name of the client to be presented to the end-user during authorization.|
|client_secret|string|false|none|OAuth 2.0 Client Secret  The secret will be included in the create request as cleartext, and then never again. The secret is kept in hashed format and is not recoverable once lost.|
|client_secret_expires_at|integer(int64)|false|none|OAuth 2.0 Client Secret Expires At  The field is currently not supported and its value is always 0.|
|client_uri|string|false|none|OAuth 2.0 Client URI  ClientURI is a URL string of a web page providing information about the client. If present, the server SHOULD display this URL to the end-user in a clickable fashion.|
|contacts|[string]|false|none|none|
|created_at|string(date-time)|false|none|OAuth 2.0 Client Creation Date  CreatedAt returns the timestamp of the client's creation.|
|frontchannel_logout_session_required|boolean|false|none|OpenID Connect Front-Channel Logout Session Required  Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be included to identify the RP session with the OP when the frontchannel_logout_uri is used. If omitted, the default value is false.|
|frontchannel_logout_uri|string|false|none|OpenID Connect Front-Channel Logout URI  RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the request and to determine which of the potentially multiple sessions is to be logged out; if either is included, both MUST be.|
|grant_types|[string]|false|none|none|
|implicit_grant_access_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|implicit_grant_id_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|jwks|object|false|none|OAuth 2.0 Client JSON Web Key Set  Client's JSON Web Key Set [JWK] document, passed by value. The semantics of the jwks parameter are the same as the jwks_uri parameter, other than that the JWK Set is passed by value, rather than by reference. This parameter is intended only to be used by Clients that, for some reason, are unable to use the jwks_uri parameter, for instance, by native applications that might not have a location to host the contents of the JWK Set. If a Client can use jwks_uri, it MUST NOT use jwks. One significant downside of jwks is that it does not enable key rotation (which jwks_uri does, as described in Section 10 of OpenID Connect Core 1.0 [OpenID.Core]). The jwks_uri and jwks parameters MUST NOT be used together.|
|jwks_uri|string|false|none|OAuth 2.0 Client JSON Web Key Set URL  URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.|
|jwt_bearer_grant_access_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|logo_uri|string|false|none|OAuth 2.0 Client Logo URI  A URL string referencing the client's logo.|
|metadata|object|false|none|none|
|owner|string|false|none|OAuth 2.0 Client Owner  Owner is a string identifying the owner of the OAuth 2.0 Client.|
|policy_uri|string|false|none|OAuth 2.0 Client Policy URI  PolicyURI is a URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.|
|post_logout_redirect_uris|[string]|false|none|none|
|redirect_uris|[string]|false|none|none|
|refresh_token_grant_access_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_id_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_refresh_token_lifespan|string|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|registration_access_token|string|false|none|OpenID Connect Dynamic Client Registration Access Token  RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client using Dynamic Client Registration.|
|registration_client_uri|string|false|none|OpenID Connect Dynamic Client Registration URL  RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|request_object_signing_alg|string|false|none|OpenID Connect Request Object Signing Algorithm  JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects from this Client MUST be rejected, if not signed with this algorithm.|
|request_uris|[string]|false|none|none|
|response_types|[string]|false|none|none|
|scope|string|false|none|OAuth 2.0 Client Scope  Scope is a string containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.|
|sector_identifier_uri|string|false|none|OpenID Connect Sector Identifier URI  URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a file with a single JSON array of redirect_uri values.|
|skip_consent|boolean|false|none|SkipConsent skips the consent screen for this client. This field can only be set from the admin API.|
|skip_logout_consent|boolean|false|none|SkipLogoutConsent skips the logout consent screen for this client. This field can only be set from the admin API.|
|subject_type|string|false|none|OpenID Connect Subject Type  The `subject_types_supported` Discovery parameter contains a list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|token_endpoint_auth_method|string|false|none|OAuth 2.0 Token Endpoint Authentication Method  Requested Client Authentication method for the Token Endpoint. The options are:  `client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header. `client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body. `private_key_jwt`: Use JSON Web Tokens to authenticate the client. `none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|token_endpoint_auth_signing_alg|string|false|none|OAuth 2.0 Token Endpoint Signing Algorithm  Requested Client Authentication signing algorithm for the Token Endpoint.|
|tos_uri|string|false|none|OAuth 2.0 Client Terms of Service URI  A URL string pointing to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.|
|updated_at|string(date-time)|false|none|OAuth 2.0 Client Last Update Date  UpdatedAt returns the timestamp of the last update.|
|userinfo_signed_response_alg|string|false|none|OpenID Connect Request Userinfo Signed Response Algorithm  JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT [JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims as a UTF-8 encoded JSON object using the application/json content-type.|

<h2 id="tocS_OAuth2ConsentRequestOpenIDConnectContext">OAuth2ConsentRequestOpenIDConnectContext</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2consentrequestopenidconnectcontext"></a>
<a id="schema_OAuth2ConsentRequestOpenIDConnectContext"></a>
<a id="tocSoauth2consentrequestopenidconnectcontext"></a>
<a id="tocsoauth2consentrequestopenidconnectcontext"></a>

```json
{
  "acr_values": [
    "string"
  ],
  "display": "string",
  "id_token_hint_claims": {
    "property1": null,
    "property2": null
  },
  "login_hint": "string",
  "ui_locales": [
    "string"
  ]
}
```

OAuth2ConsentRequestOpenIDConnectContext struct for OAuth2ConsentRequestOpenIDConnectContext

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acr_values|[string]|false|none|ACRValues is the Authentication AuthorizationContext Class Reference requested in the OAuth 2.0 Authorization request. It is a parameter defined by OpenID Connect and expresses which level of authentication (e.g. 2FA) is required.  OpenID Connect defines it as follows: > Requested Authentication AuthorizationContext Class Reference values. Space-separated string that specifies the acr values that the Authorization Server is being requested to use for processing this Authentication Request, with the values appearing in order of preference. The Authentication AuthorizationContext Class satisfied by the authentication performed is returned as the acr Claim Value, as specified in Section 2. The acr Claim is requested as a Voluntary Claim by this parameter.|
|display|string|false|none|Display is a string value that specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User. The defined values are: page: The Authorization Server SHOULD display the authentication and consent UI consistent with a full User Agent page view. If the display parameter is not specified, this is the default display mode. popup: The Authorization Server SHOULD display the authentication and consent UI consistent with a popup User Agent window. The popup User Agent window should be of an appropriate size for a login-focused dialog and should not obscure the entire window that it is popping up over. touch: The Authorization Server SHOULD display the authentication and consent UI consistent with a device that leverages a touch interface. wap: The Authorization Server SHOULD display the authentication and consent UI consistent with a \"feature phone\" type display.  The Authorization Server MAY also attempt to detect the capabilities of the User Agent and present an appropriate display.|
|id_token_hint_claims|object|false|none|IDTokenHintClaims are the claims of the ID Token previously issued by the Authorization Server being passed as a hint about the End-User's current or past authenticated session with the Client.|
|login_hint|string|false|none|LoginHint hints about the login identifier the End-User might use to log in (if necessary). This hint can be used by an RP if it first asks the End-User for their e-mail address (or other identifier) and then wants to pass that value as a hint to the discovered authorization service. This value MAY also be a phone number in the format specified for the phone_number Claim. The use of this parameter is optional.|
|ui_locales|[string]|false|none|UILocales is the End-User'id preferred languages and scripts for the user interface, represented as a space-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For instance, the value \"fr-CA fr en\" represents a preference for French as spoken in Canada, then French (without a region designation), followed by English (without a region designation). An error SHOULD NOT result if some or all of the requested locales are not supported by the OpenID Provider.|

<h2 id="tocS_OAuth2LoginChallengeParams">OAuth2LoginChallengeParams</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2loginchallengeparams"></a>
<a id="schema_OAuth2LoginChallengeParams"></a>
<a id="tocSoauth2loginchallengeparams"></a>
<a id="tocsoauth2loginchallengeparams"></a>

```json
{}
```

<h2 id="tocS_OAuth2LoginRequest">OAuth2LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2loginrequest"></a>
<a id="schema_OAuth2LoginRequest"></a>
<a id="tocSoauth2loginrequest"></a>
<a id="tocsoauth2loginrequest"></a>

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": [
      "string"
    ],
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": [
      "string"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": null,
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": [
      "string"
    ],
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "string",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "string",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "oidc_context": {
    "acr_values": [
      "string"
    ],
    "display": "string",
    "id_token_hint_claims": {
      "property1": null,
      "property2": null
    },
    "login_hint": "string",
    "ui_locales": [
      "string"
    ]
  },
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ],
  "session_id": "string",
  "skip": true,
  "subject": "string"
}
```

OAuth2LoginRequest struct for OAuth2LoginRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|false|none|ID is the identifier (\"login challenge\") of the login request. It is used to identify the session.|
|client|[OAuth2Client](#schemaoauth2client)|false|none|none|
|oidc_context|[OAuth2ConsentRequestOpenIDConnectContext](#schemaoauth2consentrequestopenidconnectcontext)|false|none|OAuth2ConsentRequestOpenIDConnectContext struct for OAuth2ConsentRequestOpenIDConnectContext|
|request_url|string|false|none|RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.|
|requested_access_token_audience|[string]|false|none|none|
|requested_scope|[string]|false|none|none|
|session_id|string|false|none|SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the \"sid\" parameter in the ID Token and in OIDC Front-/Back- channel logout. It's value can generally be used to associate consecutive login requests by a certain user.|
|skip|boolean|false|none|Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.  This feature allows you to update / set session information.|
|subject|string|false|none|Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type when accepting the login request, or the request will fail.|

<h2 id="tocS_PINConfig">PINConfig</h2>
<!-- backwards compatibility -->
<a id="schemapinconfig"></a>
<a id="schema_PINConfig"></a>
<a id="tocSpinconfig"></a>
<a id="tocspinconfig"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "failed_attempts": 0,
  "pin_secret": "string",
  "rotated_at": "1970-01-01T00:00:00Z"
}
```

The pin_secret field holds only the at-rest ciphertext; the plaintext
exists transiently in server memory during verification and is invalidated
once the key locks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|When the pin_secret was first issued.|
|failed_attempts|integer(uint64)|false|none|The number of consecutive wrong-PIN attempts so far; the key locks when<br>it reaches the configured maximum (pin_max_attempts, default 5).|
|pin_secret|string|false|write-only|The at-rest ciphertext of the pin_secret. It never leaves the server and<br>is cleared once the key locks.|
|rotated_at|string(date-time)|false|none|When the pin_secret was last rotated. Omitted if the secret was never<br>rotated.|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "client_id": "string",
  "config_url": "string",
  "domain_hint": "string",
  "fields": [
    "string"
  ],
  "login_hint": "string",
  "nonce": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|The RP's client identifier, issued by the IdP.|
|config_url|string|false|none|A full path of the IdP config file.|
|domain_hint|string|false|none|By specifying one of domain_hints values provided by the accounts endpoints,<br>the FedCM dialog selectively shows the specified account.|
|fields|[string]|false|none|Array of strings that specifies the user information ("name", " email",<br>"picture") that RP needs IdP to share with them.<br><br>Note: Field API is supported by Chrome 132 and later.|
|login_hint|string|false|none|By specifying one of login_hints values provided by the accounts endpoints,<br>the FedCM dialog selectively shows the specified account.|
|nonce|string|false|none|A random string to ensure the response is issued for this specific request.<br>Prevents replay attacks.|
|parameters|object|false|none|Custom object that allows to specify additional key-value parameters:<br>scope: A string value containing additional permissions that RP needs to<br>request, for example " drive.readonly calendar.readonly"<br>nonce: A random string to ensure the response is issued for this specific<br>request. Prevents replay attacks.<br><br>Other custom key-value parameters.<br><br>Note: parameters is supported from Chrome 132.|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_UpdateFedcmFlowBody">UpdateFedcmFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefedcmflowbody"></a>
<a id="schema_UpdateFedcmFlowBody"></a>
<a id="tocSupdatefedcmflowbody"></a>
<a id="tocsupdatefedcmflowbody"></a>

```json
{
  "csrf_token": "string",
  "nonce": "string",
  "token": "string",
  "transient_payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|true|none|CSRFToken is the anti-CSRF token.|
|nonce|string|false|none|Nonce is the nonce that was used in the `navigator.credentials.get` call. If<br>specified, it must match the `nonce` claim in the token.|
|token|string|true|none|Token contains the result of `navigator.credentials.get`.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks.|

<h2 id="tocS_UserVerification">UserVerification</h2>
<!-- backwards compatibility -->
<a id="schemauserverification"></a>
<a id="schema_UserVerification"></a>
<a id="tocSuserverification"></a>
<a id="tocsuserverification"></a>

```json
"pin"
```

"pin" means the holder proves knowledge of a PIN via pin_proof at login;
"platform" means the device gates key use behind platform biometrics or an
equivalent lock screen; "none" marks a possession-only key, usable as a
second factor but never as the sole first factor. The empty value marks a
legacy key from before user verification existed; such keys are rejected at
login and must be re-enrolled.

<h2 id="tocS_authenticatorAssuranceLevel">authenticatorAssuranceLevel</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticatorassurancelevel"></a>
<a id="schema_authenticatorAssuranceLevel"></a>
<a id="tocSauthenticatorassurancelevel"></a>
<a id="tocsauthenticatorassurancelevel"></a>

```json
"aal0"
```

The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder
for an attacker to compromise the account.

Generally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.
password + TOTP) have been used.

To learn more about these levels please head over to: https://www.ory.com/kratos/docs/concepts/credentials

<h2 id="tocS_batchPatchIdentitiesResponse">batchPatchIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchpatchidentitiesresponse"></a>
<a id="schema_batchPatchIdentitiesResponse"></a>
<a id="tocSbatchpatchidentitiesresponse"></a>
<a id="tocsbatchpatchidentitiesresponse"></a>

```json
{
  "identities": [
    {
      "action": "create",
      "error": null,
      "identity": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

Patch identities response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identities|[[identityPatchResponse](#schemaidentitypatchresponse)]|false|none|The patch responses for the individual identities.|

<h2 id="tocS_consistencyRequestParameters">consistencyRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconsistencyrequestparameters"></a>
<a id="schema_consistencyRequestParameters"></a>
<a id="tocSconsistencyrequestparameters"></a>
<a id="tocsconsistencyrequestparameters"></a>

```json
{
  "consistency": ""
}
```

Control API consistency guarantees

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consistency|string|false|none|Read Consistency Level (preview)<br><br>The read consistency level determines the consistency guarantee for reads:<br><br>strong (slow): The read is guaranteed to return the most recent data committed at the start of the read.<br>eventual (very fast): The result will return data that is about 4.8 seconds old.<br><br>The default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with<br>`ory patch project --replace '/previews/default_read_consistency_level="strong"'`.<br><br>Setting the default consistency level to `eventual` may cause regressions in the future as we add consistency<br>controls to more APIs. Currently, the following APIs will be affected by this setting:<br><br>`GET /admin/identities`<br><br>This feature is in preview and only available in Ory Network.<br> ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level.<br>strong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level.<br>eventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.|

#### Enumerated Values

|Property|Value|
|---|---|
|consistency|""|
|consistency|strong|
|consistency|eventual|

<h2 id="tocS_continueWith">continueWith</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewith"></a>
<a id="schema_continueWith"></a>
<a id="tocScontinuewith"></a>
<a id="tocscontinuewith"></a>

```json
{
  "action": "show_verification_ui",
  "flow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "verifiable_address": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[continueWithVerificationUi](#schemacontinuewithverificationui)|false|none|Indicates, that the UI flow could be continued by showing a verification ui|
|*oneOf*|[continueWithSetOrySessionToken](#schemacontinuewithsetorysessiontoken)|false|none|Indicates that a session was issued, and the application should use this token for authenticated requests|
|*oneOf*|[continueWithSettingsUi](#schemacontinuewithsettingsui)|false|none|Indicates, that the UI flow could be continued by showing a settings ui|
|*oneOf*|[continueWithRecoveryUi](#schemacontinuewithrecoveryui)|false|none|Indicates, that the UI flow could be continued by showing a recovery ui|
|*oneOf*|[continueWithRedirectBrowserTo](#schemacontinuewithredirectbrowserto)|false|none|Indicates, that the UI flow could be continued by showing a recovery ui|
|*oneOf*|[continueWithDeviceAuthnPinEntryUi](#schemacontinuewithdeviceauthnpinentryui)|false|none|Returned after a PIN-protected DeviceAuthn enrollment or secret rotation.<br>It carries the one-time HPKE-sealed pin_secret, which the device opens with<br>the transport private key it generated for this enrollment and binds to the<br>user's PIN. The plaintext secret never leaves the device; the server only<br>ever stores its at-rest ciphertext.<br><br>The enrolled key's client_key_id is not included: it is the SHA-256 fingerprint<br>of the device's own public key, which the device derives locally. Non-PIN keys<br>need no client action at all and therefore produce no continue_with.|

<h2 id="tocS_continueWithDeviceAuthnPinEntryUi">continueWithDeviceAuthnPinEntryUi</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithdeviceauthnpinentryui"></a>
<a id="schema_continueWithDeviceAuthnPinEntryUi"></a>
<a id="tocScontinuewithdeviceauthnpinentryui"></a>
<a id="tocscontinuewithdeviceauthnpinentryui"></a>

```json
{
  "action": "show_pin_entry_ui",
  "data": {
    "ciphertext": "string",
    "enc": "string"
  }
}
```

Returned after a PIN-protected DeviceAuthn enrollment or secret rotation.
It carries the one-time HPKE-sealed pin_secret, which the device opens with
the transport private key it generated for this enrollment and binds to the
user's PIN. The plaintext secret never leaves the device; the server only
ever stores its at-rest ciphertext.

The enrolled key's client_key_id is not included: it is the SHA-256 fingerprint
of the device's own public key, which the device derives locally. Non-PIN keys
need no client action at all and therefore produce no continue_with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `show_pin_entry_ui`<br>show_pin_entry_ui ContinueWithActionShowPINEntryUIString|
|data|object|true|none|The one-time HPKE-sealed pin_secret material the device opens to bind the user's PIN after a PIN-protected DeviceAuthn enrollment or secret rotation.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|show_pin_entry_ui|

<h2 id="tocS_continueWithDeviceAuthnPinEntryUiData">continueWithDeviceAuthnPinEntryUiData</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithdeviceauthnpinentryuidata"></a>
<a id="schema_continueWithDeviceAuthnPinEntryUiData"></a>
<a id="tocScontinuewithdeviceauthnpinentryuidata"></a>
<a id="tocscontinuewithdeviceauthnpinentryuidata"></a>

```json
{
  "ciphertext": "string",
  "enc": "string"
}
```

Contains the encapsulated key and the sealed ciphertext that the device
opens with the X25519 transport private key it generated for this
enrollment or rotation. Open it with HPKE (RFC 9180) using the suite
DHKEM(X25519, HKDF-SHA256), HKDF-SHA256, AES-128-GCM, the ASCII info
string "ory/deviceauthn/pin-secret/v1", and the key's client_key_id (its
ASCII hex form) as the AAD.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphertext|string|true|none|The base64-encoded HPKE ciphertext of the sealed pin_secret.|
|enc|string|true|none|The base64-encoded HPKE encapsulated key (the `enc` output of the seal<br>operation).|

<h2 id="tocS_continueWithRecoveryUi">continueWithRecoveryUi</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithrecoveryui"></a>
<a id="schema_continueWithRecoveryUi"></a>
<a id="tocScontinuewithrecoveryui"></a>
<a id="tocscontinuewithrecoveryui"></a>

```json
{
  "action": "show_recovery_ui",
  "flow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string"
  }
}
```

Indicates, that the UI flow could be continued by showing a recovery ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `show_recovery_ui`<br>show_recovery_ui ContinueWithActionShowRecoveryUIString|
|flow|[continueWithRecoveryUiFlow](#schemacontinuewithrecoveryuiflow)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|show_recovery_ui|

<h2 id="tocS_continueWithRecoveryUiFlow">continueWithRecoveryUiFlow</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithrecoveryuiflow"></a>
<a id="schema_continueWithRecoveryUiFlow"></a>
<a id="tocScontinuewithrecoveryuiflow"></a>
<a id="tocscontinuewithrecoveryuiflow"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the recovery flow|
|url|string|false|none|The URL of the recovery flow<br><br>If this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.|

<h2 id="tocS_continueWithRedirectBrowserTo">continueWithRedirectBrowserTo</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithredirectbrowserto"></a>
<a id="schema_continueWithRedirectBrowserTo"></a>
<a id="tocScontinuewithredirectbrowserto"></a>
<a id="tocscontinuewithredirectbrowserto"></a>

```json
{
  "action": "redirect_browser_to",
  "redirect_browser_to": "string"
}
```

Indicates, that the UI flow could be continued by showing a recovery ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `redirect_browser_to`<br>redirect_browser_to ContinueWithActionRedirectBrowserToString|
|redirect_browser_to|string|true|none|The URL to redirect the browser to|

#### Enumerated Values

|Property|Value|
|---|---|
|action|redirect_browser_to|

<h2 id="tocS_continueWithSetOrySessionToken">continueWithSetOrySessionToken</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithsetorysessiontoken"></a>
<a id="schema_continueWithSetOrySessionToken"></a>
<a id="tocScontinuewithsetorysessiontoken"></a>
<a id="tocscontinuewithsetorysessiontoken"></a>

```json
{
  "action": "set_ory_session_token",
  "ory_session_token": "string"
}
```

Indicates that a session was issued, and the application should use this token for authenticated requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `set_ory_session_token`<br>set_ory_session_token ContinueWithActionSetOrySessionTokenString|
|ory_session_token|string|true|none|Token is the token of the session|

#### Enumerated Values

|Property|Value|
|---|---|
|action|set_ory_session_token|

<h2 id="tocS_continueWithSettingsUi">continueWithSettingsUi</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithsettingsui"></a>
<a id="schema_continueWithSettingsUi"></a>
<a id="tocScontinuewithsettingsui"></a>
<a id="tocscontinuewithsettingsui"></a>

```json
{
  "action": "show_settings_ui",
  "flow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string"
  }
}
```

Indicates, that the UI flow could be continued by showing a settings ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `show_settings_ui`<br>show_settings_ui ContinueWithActionShowSettingsUIString|
|flow|[continueWithSettingsUiFlow](#schemacontinuewithsettingsuiflow)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|show_settings_ui|

<h2 id="tocS_continueWithSettingsUiFlow">continueWithSettingsUiFlow</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithsettingsuiflow"></a>
<a id="schema_continueWithSettingsUiFlow"></a>
<a id="tocScontinuewithsettingsuiflow"></a>
<a id="tocscontinuewithsettingsuiflow"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the settings flow|
|url|string|false|none|The URL of the settings flow<br><br>If this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.|

<h2 id="tocS_continueWithVerificationUi">continueWithVerificationUi</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithverificationui"></a>
<a id="schema_continueWithVerificationUi"></a>
<a id="tocScontinuewithverificationui"></a>
<a id="tocscontinuewithverificationui"></a>

```json
{
  "action": "show_verification_ui",
  "flow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "url": "string",
    "verifiable_address": "string"
  }
}
```

Indicates, that the UI flow could be continued by showing a verification ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action will always be `show_verification_ui`<br>show_verification_ui ContinueWithActionShowVerificationUIString|
|flow|[continueWithVerificationUiFlow](#schemacontinuewithverificationuiflow)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|show_verification_ui|

<h2 id="tocS_continueWithVerificationUiFlow">continueWithVerificationUiFlow</h2>
<!-- backwards compatibility -->
<a id="schemacontinuewithverificationuiflow"></a>
<a id="schema_continueWithVerificationUiFlow"></a>
<a id="tocScontinuewithverificationuiflow"></a>
<a id="tocscontinuewithverificationuiflow"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "url": "string",
  "verifiable_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the verification flow|
|url|string|false|none|The URL of the verification flow<br><br>If this value is set, redirect the user's browser to this URL. This value is typically unset for native clients / API flows.|
|verifiable_address|string|true|none|The address that should be verified in this flow|

<h2 id="tocS_courierMessageStatus">courierMessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemacouriermessagestatus"></a>
<a id="schema_courierMessageStatus"></a>
<a id="tocScouriermessagestatus"></a>
<a id="tocscouriermessagestatus"></a>

```json
"queued"
```

A Message's Status

<h2 id="tocS_courierMessageType">courierMessageType</h2>
<!-- backwards compatibility -->
<a id="schemacouriermessagetype"></a>
<a id="schema_courierMessageType"></a>
<a id="tocScouriermessagetype"></a>
<a id="tocscouriermessagetype"></a>

```json
"email"
```

It can either be `email` or `phone`

<h2 id="tocS_createFedcmFlowResponse">createFedcmFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefedcmflowresponse"></a>
<a id="schema_createFedcmFlowResponse"></a>
<a id="tocScreatefedcmflowresponse"></a>
<a id="tocscreatefedcmflowresponse"></a>

```json
{
  "csrf_token": "string",
  "providers": [
    {
      "client_id": "string",
      "config_url": "string",
      "domain_hint": "string",
      "fields": [
        "string"
      ],
      "login_hint": "string",
      "nonce": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

Contains a list of all available FedCM providers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|none|
|providers|[[Provider](#schemaprovider)]|false|none|none|

<h2 id="tocS_createIdentityBody">createIdentityBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateidentitybody"></a>
<a id="schema_createIdentityBody"></a>
<a id="tocScreateidentitybody"></a>
<a id="tocscreateidentitybody"></a>

```json
{
  "credentials": {
    "lookup_secret": {
      "config": {
        "codes": [
          {
            "code": "string",
            "used_at": "1970-01-01T00:00:00Z"
          }
        ]
      }
    },
    "oidc": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string",
            "use_auto_link": true
          }
        ]
      }
    },
    "passkey": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    },
    "password": {
      "config": {
        "hashed_password": "string",
        "password": "string",
        "use_password_migration_hook": true
      }
    },
    "saml": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string"
          }
        ]
      }
    },
    "totp": {
      "config": {
        "totp_url": "string"
      }
    },
    "webauthn": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    }
  },
  "external_id": "string",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "state": "active",
  "traits": {},
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

Create Identity Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[identityWithCredentials](#schemaidentitywithcredentials)|false|none|Create Identity and Import Credentials|
|external_id|string|false|none|ExternalID is an optional external ID of the identity. This is used to link<br>the identity to an external system. If set, the external ID must be unique<br>across all identities.|
|metadata_admin|object|false|none|Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.|
|metadata_public|object|false|none|Store metadata about the identity which the identity itself can see when calling for example the<br>session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.|
|organization_id|[NullUUID](#schemanulluuid)|false|none|none|
|recovery_addresses|[[recoveryIdentityAddress](#schemarecoveryidentityaddress)]|false|none|RecoveryAddresses contains all the addresses that can be used to recover an identity.<br><br>Use this structure to import recovery addresses for an identity. Please keep in mind<br>that the address needs to be represented in the Identity Schema or this field will be overwritten<br>on the next identity update.|
|region|string|false|none|Region is the Ory Network region this identity will be created in.<br>Optional; defaults to the project home region if omitted. Only effective<br>on the Ory Network.<br>eu-central EUCentral<br>asia-northeast AsiaNorthEast<br>us-east USEast<br>us-west USWest<br>eu EU<br>asia Asia<br>us US<br>global Global|
|schema_id|string|true|none|SchemaID is the ID of the JSON Schema to be used for validating the identity's traits.|
|state|string|false|none|State is the identity's state.<br>active StateActive<br>inactive StateInactive|
|traits|object|true|none|Traits represent an identity's traits. The identity is able to create, modify, and delete traits<br>in a self-service manner. The input will always be validated against the JSON Schema defined<br>in `schema_url`.|
|verifiable_addresses|[[verifiableIdentityAddress](#schemaverifiableidentityaddress)]|false|none|VerifiableAddresses contains all the addresses that can be verified by the user.<br><br>Use this structure to import verified addresses for an identity. Please keep in mind<br>that the address needs to be represented in the Identity Schema or this field will be overwritten<br>on the next identity update.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|eu-central|
|region|asia-northeast|
|region|us-east|
|region|us-west|
|region|eu|
|region|asia|
|region|us|
|region|global|
|state|active|
|state|inactive|

<h2 id="tocS_createRecoveryCodeForIdentityBody">createRecoveryCodeForIdentityBody</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecoverycodeforidentitybody"></a>
<a id="schema_createRecoveryCodeForIdentityBody"></a>
<a id="tocScreaterecoverycodeforidentitybody"></a>
<a id="tocscreaterecoverycodeforidentitybody"></a>

```json
{
  "expires_in": "string",
  "flow_type": "string",
  "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Create Recovery Code for Identity Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_in|string|false|none|Code Expires In<br><br>The recovery code will expire after that amount of time has passed. Defaults to the configuration value of<br>`selfservice.methods.code.config.lifespan`.|
|flow_type|[selfServiceFlowType](#schemaselfserviceflowtype)|false|none|The flow type can either be `api` or `browser`.|
|identity_id|string(uuid)|true|none|Identity to Recover<br><br>The identity's ID you wish to recover.|

<h2 id="tocS_createRecoveryLinkForIdentityBody">createRecoveryLinkForIdentityBody</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecoverylinkforidentitybody"></a>
<a id="schema_createRecoveryLinkForIdentityBody"></a>
<a id="tocScreaterecoverylinkforidentitybody"></a>
<a id="tocscreaterecoverylinkforidentitybody"></a>

```json
{
  "expires_in": "string",
  "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Create Recovery Link for Identity Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_in|string|false|none|Link Expires In<br><br>The recovery link will expire after that amount of time has passed. Defaults to the configuration value of<br>`selfservice.methods.code.config.lifespan`.|
|identity_id|string(uuid)|true|none|Identity to Recover<br><br>The identity's ID you wish to recover.|

<h2 id="tocS_createTestLoginFlowBody">createTestLoginFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestloginflowbody"></a>
<a id="schema_createTestLoginFlowBody"></a>
<a id="tocScreatetestloginflowbody"></a>
<a id="tocscreatetestloginflowbody"></a>

```json
{
  "provider_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider_id|string|true|none|ID of the OIDC provider to test. Must match a provider configured on<br>the project that serves this request.|

<h2 id="tocS_deleteMySessionsCount">deleteMySessionsCount</h2>
<!-- backwards compatibility -->
<a id="schemadeletemysessionscount"></a>
<a id="schema_deleteMySessionsCount"></a>
<a id="tocSdeletemysessionscount"></a>
<a id="tocsdeletemysessionscount"></a>

```json
{
  "count": 0
}
```

Deleted Session Count

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|The number of sessions that were revoked.|

<h2 id="tocS_deviceAuthnAndroidAuthorizationList">deviceAuthnAndroidAuthorizationList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthnandroidauthorizationlist"></a>
<a id="schema_deviceAuthnAndroidAuthorizationList"></a>
<a id="tocSdeviceauthnandroidauthorizationlist"></a>
<a id="tocsdeviceauthnandroidauthorizationlist"></a>

```json
{
  "active_date_time": 0,
  "algorithm": 0,
  "application_id": [
    0
  ],
  "attestation_application_id": [
    0
  ],
  "attestation_id_brand": [
    0
  ],
  "attestation_id_device": [
    0
  ],
  "attestation_id_imei": [
    0
  ],
  "attestation_id_manufacturer": [
    0
  ],
  "attestation_id_meid": [
    0
  ],
  "attestation_id_model": [
    0
  ],
  "attestation_id_product": [
    0
  ],
  "attestation_id_serial": [
    0
  ],
  "auth_timeout": 0,
  "boot_patch_level": 0,
  "creation_date_time": 0,
  "digest": [
    0
  ],
  "ec_curve": 0,
  "key_size": 0,
  "origin": 0,
  "origination_expire_date_time": 0,
  "os_patch_level": 0,
  "os_version": 0,
  "purpose": [
    0
  ],
  "root_of_trust": {
    "device_locked": true,
    "verified_boot_hash": [
      0
    ],
    "verified_boot_key": [
      0
    ],
    "verified_boot_state": 0
  },
  "usage_expire_date_time": 0,
  "user_auth_type": 0,
  "vendor_patch_level": 0
}
```

Schema: https://source.android.com/docs/security/features/keystore/attestation#schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_date_time|integer(int64)|false|none|none|
|algorithm|integer(int64)|false|none|none|
|application_id|[integer(uint8)]|false|none|none|
|attestation_application_id|[integer(uint8)]|false|none|none|
|attestation_id_brand|[integer(uint8)]|false|none|none|
|attestation_id_device|[integer(uint8)]|false|none|none|
|attestation_id_imei|[integer(uint8)]|false|none|none|
|attestation_id_manufacturer|[integer(uint8)]|false|none|none|
|attestation_id_meid|[integer(uint8)]|false|none|none|
|attestation_id_model|[integer(uint8)]|false|none|none|
|attestation_id_product|[integer(uint8)]|false|none|none|
|attestation_id_serial|[integer(uint8)]|false|none|none|
|auth_timeout|integer(int64)|false|none|none|
|boot_patch_level|integer(int64)|false|none|none|
|creation_date_time|integer(int64)|false|none|none|
|digest|[integer(int64)]|false|none|none|
|ec_curve|integer(int64)|false|none|none|
|key_size|integer(int64)|false|none|none|
|origin|integer(int64)|false|none|none|
|origination_expire_date_time|integer(int64)|false|none|none|
|os_patch_level|integer(int64)|false|none|none|
|os_version|integer(int64)|false|none|none|
|purpose|[integer(int64)]|false|none|none|
|root_of_trust|[deviceAuthnAndroidRootOfTrust](#schemadeviceauthnandroidrootoftrust)|false|none|none|
|usage_expire_date_time|integer(int64)|false|none|none|
|user_auth_type|integer(int64)|false|none|none|
|vendor_patch_level|integer(int64)|false|none|none|

<h2 id="tocS_deviceAuthnAndroidKeyDescription">deviceAuthnAndroidKeyDescription</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthnandroidkeydescription"></a>
<a id="schema_deviceAuthnAndroidKeyDescription"></a>
<a id="tocSdeviceauthnandroidkeydescription"></a>
<a id="tocsdeviceauthnandroidkeydescription"></a>

```json
{
  "attestation_security_level": 0,
  "attestation_version": 0,
  "keymaster_security_level": 0,
  "keymaster_version": 0,
  "software_enforced": {
    "active_date_time": 0,
    "algorithm": 0,
    "application_id": [
      0
    ],
    "attestation_application_id": [
      0
    ],
    "attestation_id_brand": [
      0
    ],
    "attestation_id_device": [
      0
    ],
    "attestation_id_imei": [
      0
    ],
    "attestation_id_manufacturer": [
      0
    ],
    "attestation_id_meid": [
      0
    ],
    "attestation_id_model": [
      0
    ],
    "attestation_id_product": [
      0
    ],
    "attestation_id_serial": [
      0
    ],
    "auth_timeout": 0,
    "boot_patch_level": 0,
    "creation_date_time": 0,
    "digest": [
      0
    ],
    "ec_curve": 0,
    "key_size": 0,
    "origin": 0,
    "origination_expire_date_time": 0,
    "os_patch_level": 0,
    "os_version": 0,
    "purpose": [
      0
    ],
    "root_of_trust": {
      "device_locked": true,
      "verified_boot_hash": [
        0
      ],
      "verified_boot_key": [
        0
      ],
      "verified_boot_state": 0
    },
    "usage_expire_date_time": 0,
    "user_auth_type": 0,
    "vendor_patch_level": 0
  },
  "tee_enforced": {
    "active_date_time": 0,
    "algorithm": 0,
    "application_id": [
      0
    ],
    "attestation_application_id": [
      0
    ],
    "attestation_id_brand": [
      0
    ],
    "attestation_id_device": [
      0
    ],
    "attestation_id_imei": [
      0
    ],
    "attestation_id_manufacturer": [
      0
    ],
    "attestation_id_meid": [
      0
    ],
    "attestation_id_model": [
      0
    ],
    "attestation_id_product": [
      0
    ],
    "attestation_id_serial": [
      0
    ],
    "auth_timeout": 0,
    "boot_patch_level": 0,
    "creation_date_time": 0,
    "digest": [
      0
    ],
    "ec_curve": 0,
    "key_size": 0,
    "origin": 0,
    "origination_expire_date_time": 0,
    "os_patch_level": 0,
    "os_version": 0,
    "purpose": [
      0
    ],
    "root_of_trust": {
      "device_locked": true,
      "verified_boot_hash": [
        0
      ],
      "verified_boot_key": [
        0
      ],
      "verified_boot_state": 0
    },
    "usage_expire_date_time": 0,
    "user_auth_type": 0,
    "vendor_patch_level": 0
  }
}
```

Schema: https://source.android.com/docs/security/features/keystore/attestation#schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation_security_level|[Enumerated](#schemaenumerated)|false|none|none|
|attestation_version|integer(int64)|false|none|none|
|keymaster_security_level|[Enumerated](#schemaenumerated)|false|none|none|
|keymaster_version|integer(int64)|false|none|none|
|software_enforced|[deviceAuthnAndroidAuthorizationList](#schemadeviceauthnandroidauthorizationlist)|false|none|Schema: https://source.android.com/docs/security/features/keystore/attestation#schema|
|tee_enforced|[deviceAuthnAndroidAuthorizationList](#schemadeviceauthnandroidauthorizationlist)|false|none|Schema: https://source.android.com/docs/security/features/keystore/attestation#schema|

<h2 id="tocS_deviceAuthnAndroidRootOfTrust">deviceAuthnAndroidRootOfTrust</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthnandroidrootoftrust"></a>
<a id="schema_deviceAuthnAndroidRootOfTrust"></a>
<a id="tocSdeviceauthnandroidrootoftrust"></a>
<a id="tocsdeviceauthnandroidrootoftrust"></a>

```json
{
  "device_locked": true,
  "verified_boot_hash": [
    0
  ],
  "verified_boot_key": [
    0
  ],
  "verified_boot_state": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_locked|boolean|false|none|none|
|verified_boot_hash|[integer(uint8)]|false|none|none|
|verified_boot_key|[integer(uint8)]|false|none|none|
|verified_boot_state|[Enumerated](#schemaenumerated)|false|none|none|

<h2 id="tocS_deviceAuthnAttestation">deviceAuthnAttestation</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthnattestation"></a>
<a id="schema_deviceAuthnAttestation"></a>
<a id="tocSdeviceauthnattestation"></a>
<a id="tocsdeviceauthnattestation"></a>

```json
{
  "android": {
    "attestation_security_level": 0,
    "attestation_version": 0,
    "keymaster_security_level": 0,
    "keymaster_version": 0,
    "software_enforced": {
      "active_date_time": 0,
      "algorithm": 0,
      "application_id": [
        0
      ],
      "attestation_application_id": [
        0
      ],
      "attestation_id_brand": [
        0
      ],
      "attestation_id_device": [
        0
      ],
      "attestation_id_imei": [
        0
      ],
      "attestation_id_manufacturer": [
        0
      ],
      "attestation_id_meid": [
        0
      ],
      "attestation_id_model": [
        0
      ],
      "attestation_id_product": [
        0
      ],
      "attestation_id_serial": [
        0
      ],
      "auth_timeout": 0,
      "boot_patch_level": 0,
      "creation_date_time": 0,
      "digest": [
        0
      ],
      "ec_curve": 0,
      "key_size": 0,
      "origin": 0,
      "origination_expire_date_time": 0,
      "os_patch_level": 0,
      "os_version": 0,
      "purpose": [
        0
      ],
      "root_of_trust": {
        "device_locked": true,
        "verified_boot_hash": [
          0
        ],
        "verified_boot_key": [
          0
        ],
        "verified_boot_state": 0
      },
      "usage_expire_date_time": 0,
      "user_auth_type": 0,
      "vendor_patch_level": 0
    },
    "tee_enforced": {
      "active_date_time": 0,
      "algorithm": 0,
      "application_id": [
        0
      ],
      "attestation_application_id": [
        0
      ],
      "attestation_id_brand": [
        0
      ],
      "attestation_id_device": [
        0
      ],
      "attestation_id_imei": [
        0
      ],
      "attestation_id_manufacturer": [
        0
      ],
      "attestation_id_meid": [
        0
      ],
      "attestation_id_model": [
        0
      ],
      "attestation_id_product": [
        0
      ],
      "attestation_id_serial": [
        0
      ],
      "auth_timeout": 0,
      "boot_patch_level": 0,
      "creation_date_time": 0,
      "digest": [
        0
      ],
      "ec_curve": 0,
      "key_size": 0,
      "origin": 0,
      "origination_expire_date_time": 0,
      "os_patch_level": 0,
      "os_version": 0,
      "purpose": [
        0
      ],
      "root_of_trust": {
        "device_locked": true,
        "verified_boot_hash": [
          0
        ],
        "verified_boot_key": [
          0
        ],
        "verified_boot_state": 0
      },
      "usage_expire_date_time": 0,
      "user_auth_type": 0,
      "vendor_patch_level": 0
    }
  },
  "ios": {
    "att_stmt": {
      "x5c": [
        [
          0
        ]
      ]
    },
    "auth_data": [
      0
    ],
    "fmt": "string"
  }
}
```

Exactly one of `android` or `ios` is set, matching the key's device_type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|android|[deviceAuthnAndroidKeyDescription](#schemadeviceauthnandroidkeydescription)|false|none|Schema: https://source.android.com/docs/security/features/keystore/attestation#schema|
|ios|[deviceAuthnIOSAttestation](#schemadeviceauthniosattestation)|false|none|Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .|

<h2 id="tocS_deviceAuthnIOSAttStmt">deviceAuthnIOSAttStmt</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthniosattstmt"></a>
<a id="schema_deviceAuthnIOSAttStmt"></a>
<a id="tocSdeviceauthniosattstmt"></a>
<a id="tocsdeviceauthniosattstmt"></a>

```json
{
  "x5c": [
    [
      0
    ]
  ]
}
```

Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x5c|[[integer(uint8)]]|false|none|X5c is the leaf-first certificate chain encoded as base64(DER), per<br>the JOSE convention defined in RFC 7515 §4.1.6.|

<h2 id="tocS_deviceAuthnIOSAttestation">deviceAuthnIOSAttestation</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthniosattestation"></a>
<a id="schema_deviceAuthnIOSAttestation"></a>
<a id="tocSdeviceauthniosattestation"></a>
<a id="tocsdeviceauthniosattestation"></a>

```json
{
  "att_stmt": {
    "x5c": [
      [
        0
      ]
    ]
  },
  "auth_data": [
    0
  ],
  "fmt": "string"
}
```

Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|att_stmt|[deviceAuthnIOSAttStmt](#schemadeviceauthniosattstmt)|false|none|Defined in https://developer.apple.com/documentation/devicecheck/validating-apps-that-connect-to-your-server#Verify-the-attestation .|
|auth_data|[integer(uint8)]|false|none|none|
|fmt|string|false|none|none|

<h2 id="tocS_errorAuthenticatorAssuranceLevelNotSatisfied">errorAuthenticatorAssuranceLevelNotSatisfied</h2>
<!-- backwards compatibility -->
<a id="schemaerrorauthenticatorassurancelevelnotsatisfied"></a>
<a id="schema_errorAuthenticatorAssuranceLevelNotSatisfied"></a>
<a id="tocSerrorauthenticatorassurancelevelnotsatisfied"></a>
<a id="tocserrorauthenticatorassurancelevelnotsatisfied"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  },
  "redirect_browser_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|false|none|none|
|redirect_browser_to|string|false|none|Points to where to redirect the user to next.|

<h2 id="tocS_errorBrowserLocationChangeRequired">errorBrowserLocationChangeRequired</h2>
<!-- backwards compatibility -->
<a id="schemaerrorbrowserlocationchangerequired"></a>
<a id="schema_errorBrowserLocationChangeRequired"></a>
<a id="tocSerrorbrowserlocationchangerequired"></a>
<a id="tocserrorbrowserlocationchangerequired"></a>

```json
{
  "error": {
    "error": {
      "code": 404,
      "debug": "SQL field \"foo\" is not a bool.",
      "details": {},
      "id": "string",
      "message": "The resource could not be found",
      "reason": "User with ID 1234 does not exist.",
      "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
      "status": "Not Found"
    }
  },
  "redirect_browser_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[errorGeneric](#schemaerrorgeneric)|false|none|The standard Ory JSON API error format.|
|redirect_browser_to|string|false|none|Points to where to redirect the user to next.|

<h2 id="tocS_errorFlowReplaced">errorFlowReplaced</h2>
<!-- backwards compatibility -->
<a id="schemaerrorflowreplaced"></a>
<a id="schema_errorFlowReplaced"></a>
<a id="tocSerrorflowreplaced"></a>
<a id="tocserrorflowreplaced"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  },
  "use_flow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Is sent when a flow is replaced by a different flow of the same class

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|false|none|none|
|use_flow_id|string(uuid)|false|none|The flow ID that should be used for the new flow as it contains the correct messages.|

<h2 id="tocS_errorGeneric">errorGeneric</h2>
<!-- backwards compatibility -->
<a id="schemaerrorgeneric"></a>
<a id="schema_errorGeneric"></a>
<a id="tocSerrorgeneric"></a>
<a id="tocserrorgeneric"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  }
}
```

The standard Ory JSON API error format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|true|none|none|

<h2 id="tocS_flowError">flowError</h2>
<!-- backwards compatibility -->
<a id="schemaflowerror"></a>
<a id="schema_flowError"></a>
<a id="tocSflowerror"></a>
<a id="tocsflowerror"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "error": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|error|object|false|none|none|
|id|string(uuid)|true|none|ID of the error container.|
|updated_at|string(date-time)|false|none|UpdatedAt is a helper struct field for gobuffalo.pop.|

<h2 id="tocS_genericError">genericError</h2>
<!-- backwards compatibility -->
<a id="schemagenericerror"></a>
<a id="schema_genericError"></a>
<a id="tocSgenericerror"></a>
<a id="tocsgenericerror"></a>

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": {},
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|The status code|
|debug|string|false|none|Debug information<br><br>This field is often not exposed to protect against leaking<br>sensitive information.|
|details|object|false|none|Further error details|
|id|string|false|none|The error ID<br><br>Useful when trying to identify various errors in application logic.|
|message|string|true|none|Error message<br><br>The error's message.|
|reason|string|false|none|A human-readable reason for the error|
|request|string|false|none|The request ID<br><br>The request ID is often exposed internally in order to trace<br>errors across service architectures. This is often a UUID.|
|status|string|false|none|The status description|

<h2 id="tocS_healthNotReadyStatus">healthNotReadyStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthnotreadystatus"></a>
<a id="schema_healthNotReadyStatus"></a>
<a id="tocShealthnotreadystatus"></a>
<a id="tocshealthnotreadystatus"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Errors contains a list of errors that caused the not ready status.|

<h2 id="tocS_healthStatus">healthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_healthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status always contains "ok".|

<h2 id="tocS_identity">identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "credentials": {
    "property1": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    },
    "property2": {
      "config": {},
      "created_at": "1970-01-01T00:00:00Z",
      "identifiers": [
        "string"
      ],
      "type": "password",
      "updated_at": "1970-01-01T00:00:00Z",
      "version": 0
    }
  },
  "external_id": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata_admin": null,
  "metadata_public": null,
  "organization_id": "string",
  "recovery_addresses": [
    {
      "break_glass_for_organization": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "updated_at": "1970-01-01T00:00:00Z",
      "value": "string",
      "via": "string"
    }
  ],
  "region": "eu-central",
  "schema_id": "string",
  "schema_url": "string",
  "state": "active",
  "state_changed_at": "1970-01-01T00:00:00Z",
  "traits": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "verifiable_addresses": [
    {
      "created_at": "2014-01-01T23:28:56.782Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "updated_at": "2014-01-01T23:28:56.782Z",
      "value": "string",
      "verified": true,
      "verified_at": "1970-01-01T00:00:00Z",
      "via": "email"
    }
  ]
}
```

An [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|credentials|object|false|none|Credentials represents all credentials that can be used for authenticating this identity.|
|external_id|string|false|none|ExternalID is an optional external ID of the identity. This is used to link<br>the identity to an external system. If set, the external ID must be unique<br>across all identities.|
|id|string(uuid)|true|none|ID is the identity's unique identifier.<br><br>The Identity ID can not be changed and can not be chosen. This ensures future<br>compatibility and optimization for distributed stores such as CockroachDB.|
|metadata_admin|[nullJsonRawMessage](#schemanulljsonrawmessage)|false|none|NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-|
|metadata_public|[nullJsonRawMessage](#schemanulljsonrawmessage)|false|none|NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-|
|organization_id|[NullUUID](#schemanulluuid)|false|none|none|
|recovery_addresses|[[recoveryIdentityAddress](#schemarecoveryidentityaddress)]|false|none|RecoveryAddresses contains all the addresses that can be used to recover an identity.|
|region|string|false|none|Region is the Ory Network region this identity is homed in. Set by<br>the multi-region persister; empty on OSS and single-region deployments.<br>eu-central EUCentral<br>asia-northeast AsiaNorthEast<br>us-east USEast<br>us-west USWest<br>eu EU<br>asia Asia<br>us US<br>global Global|
|schema_id|string|true|none|SchemaID is the ID of the JSON Schema to be used for validating the identity's traits.|
|schema_url|string|true|none|SchemaURL is the URL of the endpoint where the identity's traits schema can be fetched from.<br><br>format: url|
|state|string|false|none|State is the identity's state.<br><br>This value has currently no effect.<br>active StateActive<br>inactive StateInactive|
|state_changed_at|[nullTime](#schemanulltime-1)|false|none|none|
|traits|[identityTraits](#schemaidentitytraits)|true|none|Traits represent an identity's traits. The identity is able to create, modify, and delete traits<br>in a self-service manner. The input will always be validated against the JSON Schema defined<br>in `schema_url`.|
|updated_at|string(date-time)|false|none|UpdatedAt is a helper struct field for gobuffalo.pop.|
|verifiable_addresses|[[verifiableIdentityAddress](#schemaverifiableidentityaddress)]|false|none|VerifiableAddresses contains all the addresses that can be verified by the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|eu-central|
|region|asia-northeast|
|region|us-east|
|region|us-west|
|region|eu|
|region|asia|
|region|us|
|region|global|
|state|active|
|state|inactive|

<h2 id="tocS_identityCredentials">identityCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentials"></a>
<a id="schema_identityCredentials"></a>
<a id="tocSidentitycredentials"></a>
<a id="tocsidentitycredentials"></a>

```json
{
  "config": {},
  "created_at": "1970-01-01T00:00:00Z",
  "identifiers": [
    "string"
  ],
  "type": "password",
  "updated_at": "1970-01-01T00:00:00Z",
  "version": 0
}
```

Credentials represents a specific credential type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|created_at|string(date-time)|false|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|identifiers|[string]|false|none|Identifiers represent a list of unique identifiers this credential type matches.|
|type|string|false|none|Type discriminates between different types of credentials.<br>password CredentialsTypePassword<br>oidc CredentialsTypeOIDC<br>totp CredentialsTypeTOTP<br>lookup_secret CredentialsTypeLookup<br>webauthn CredentialsTypeWebAuthn<br>code CredentialsTypeCodeAuth<br>passkey CredentialsTypePasskey<br>profile CredentialsTypeProfile<br>saml CredentialsTypeSAML<br>deviceauthn CredentialsTypeDeviceAuthn<br>identifier_first CredentialsTypeIdentifierFirst<br>link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.<br>code_recovery CredentialsTypeRecoveryCode|
|updated_at|string(date-time)|false|none|UpdatedAt is a helper struct field for gobuffalo.pop.|
|version|integer(int64)|false|none|Version refers to the version of the credential. Useful when changing the config schema.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|password|
|type|oidc|
|type|totp|
|type|lookup_secret|
|type|webauthn|
|type|code|
|type|passkey|
|type|profile|
|type|saml|
|type|deviceauthn|
|type|identifier_first|
|type|link_recovery|
|type|code_recovery|

<h2 id="tocS_identityCredentialsCode">identityCredentialsCode</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialscode"></a>
<a id="schema_identityCredentialsCode"></a>
<a id="tocSidentitycredentialscode"></a>
<a id="tocsidentitycredentialscode"></a>

```json
{
  "addresses": [
    {
      "address": "string",
      "channel": "string"
    }
  ]
}
```

CredentialsCode represents a one time login/registration code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[identityCredentialsCodeAddress](#schemaidentitycredentialscodeaddress)]|false|none|none|

<h2 id="tocS_identityCredentialsCodeAddress">identityCredentialsCodeAddress</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialscodeaddress"></a>
<a id="schema_identityCredentialsCodeAddress"></a>
<a id="tocSidentitycredentialscodeaddress"></a>
<a id="tocsidentitycredentialscodeaddress"></a>

```json
{
  "address": "string",
  "channel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address for this code|
|channel|[CodeChannel](#schemacodechannel)|false|none|none|

<h2 id="tocS_identityCredentialsLookupSecretCode">identityCredentialsLookupSecretCode</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialslookupsecretcode"></a>
<a id="schema_identityCredentialsLookupSecretCode"></a>
<a id="tocSidentitycredentialslookupsecretcode"></a>
<a id="tocsidentitycredentialslookupsecretcode"></a>

```json
{
  "code": "string",
  "used_at": "1970-01-01T00:00:00Z"
}
```

Recovery codes can be used once and are invalidated after use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|A recovery code|
|used_at|[nullTime](#schemanulltime-1)|false|none|none|

<h2 id="tocS_identityCredentialsOidc">identityCredentialsOidc</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialsoidc"></a>
<a id="schema_identityCredentialsOidc"></a>
<a id="tocSidentitycredentialsoidc"></a>
<a id="tocsidentitycredentialsoidc"></a>

```json
{
  "providers": [
    {
      "initial_access_token": "string",
      "initial_id_token": "string",
      "initial_refresh_token": "string",
      "organization": "string",
      "provider": "string",
      "subject": "string",
      "use_auto_link": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[identityCredentialsOidcProvider](#schemaidentitycredentialsoidcprovider)]|false|none|none|

<h2 id="tocS_identityCredentialsOidcProvider">identityCredentialsOidcProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialsoidcprovider"></a>
<a id="schema_identityCredentialsOidcProvider"></a>
<a id="tocSidentitycredentialsoidcprovider"></a>
<a id="tocsidentitycredentialsoidcprovider"></a>

```json
{
  "initial_access_token": "string",
  "initial_id_token": "string",
  "initial_refresh_token": "string",
  "organization": "string",
  "provider": "string",
  "subject": "string",
  "use_auto_link": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initial_access_token|string|false|none|none|
|initial_id_token|string|false|none|none|
|initial_refresh_token|string|false|none|none|
|organization|string|false|none|none|
|provider|string|false|none|none|
|subject|string|false|none|none|
|use_auto_link|boolean|false|none|none|

<h2 id="tocS_identityCredentialsPassword">identityCredentialsPassword</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialspassword"></a>
<a id="schema_identityCredentialsPassword"></a>
<a id="tocSidentitycredentialspassword"></a>
<a id="tocsidentitycredentialspassword"></a>

```json
{
  "hashed_password": "string",
  "use_password_migration_hook": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashed_password|string|false|none|HashedPassword is a hash-representation of the password.|
|use_password_migration_hook|boolean|false|none|UsePasswordMigrationHook is set to true if the password should be migrated<br>using the password migration hook. If set, and the HashedPassword is empty, a<br>webhook will be called during login to migrate the password.|

<h2 id="tocS_identityCredentialsWebAuthn">identityCredentialsWebAuthn</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialswebauthn"></a>
<a id="schema_identityCredentialsWebAuthn"></a>
<a id="tocSidentitycredentialswebauthn"></a>
<a id="tocsidentitycredentialswebauthn"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "attestation": {
    "authenticator_data": [
      0
    ],
    "client_dataJSON": [
      0
    ],
    "client_data_hash": [
      0
    ],
    "object": [
      0
    ],
    "public_key_algorithm": 0
  },
  "attestation_type": "string",
  "authenticator": {
    "aaguid": [
      0
    ],
    "clone_warning": true,
    "sign_count": 0
  },
  "display_name": "string",
  "flags": {
    "backup_eligible": true,
    "backup_state": true,
    "user_present": true,
    "user_verified": true
  },
  "id": [
    0
  ],
  "is_passwordless": true,
  "public_key": [
    0
  ],
  "transport": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|none|
|attestation|[identityCredentialsWebAuthnAttestation](#schemaidentitycredentialswebauthnattestation)|false|none|none|
|attestation_type|string|false|none|none|
|authenticator|[identityCredentialsWebAuthnAuthenticator](#schemaidentitycredentialswebauthnauthenticator)|false|none|none|
|display_name|string|false|none|none|
|flags|[identityCredentialsWebAuthnFlags](#schemaidentitycredentialswebauthnflags)|false|none|none|
|id|[integer(uint8)]|false|none|none|
|is_passwordless|boolean|false|none|none|
|public_key|[integer(uint8)]|false|none|none|
|transport|[[AuthenticatorTransport](#schemaauthenticatortransport)]|false|none|none|

<h2 id="tocS_identityCredentialsWebAuthnAttestation">identityCredentialsWebAuthnAttestation</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialswebauthnattestation"></a>
<a id="schema_identityCredentialsWebAuthnAttestation"></a>
<a id="tocSidentitycredentialswebauthnattestation"></a>
<a id="tocsidentitycredentialswebauthnattestation"></a>

```json
{
  "authenticator_data": [
    0
  ],
  "client_dataJSON": [
    0
  ],
  "client_data_hash": [
    0
  ],
  "object": [
    0
  ],
  "public_key_algorithm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticator_data|[integer(uint8)]|false|none|none|
|client_dataJSON|[integer(uint8)]|false|none|none|
|client_data_hash|[integer(uint8)]|false|none|none|
|object|[integer(uint8)]|false|none|none|
|public_key_algorithm|integer(int64)|false|none|none|

<h2 id="tocS_identityCredentialsWebAuthnAuthenticator">identityCredentialsWebAuthnAuthenticator</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialswebauthnauthenticator"></a>
<a id="schema_identityCredentialsWebAuthnAuthenticator"></a>
<a id="tocSidentitycredentialswebauthnauthenticator"></a>
<a id="tocsidentitycredentialswebauthnauthenticator"></a>

```json
{
  "aaguid": [
    0
  ],
  "clone_warning": true,
  "sign_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aaguid|[integer(uint8)]|false|none|none|
|clone_warning|boolean|false|none|none|
|sign_count|integer(uint32)|false|none|none|

<h2 id="tocS_identityCredentialsWebAuthnFlags">identityCredentialsWebAuthnFlags</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialswebauthnflags"></a>
<a id="schema_identityCredentialsWebAuthnFlags"></a>
<a id="tocSidentitycredentialswebauthnflags"></a>
<a id="tocsidentitycredentialswebauthnflags"></a>

```json
{
  "backup_eligible": true,
  "backup_state": true,
  "user_present": true,
  "user_verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup_eligible|boolean|false|none|none|
|backup_state|boolean|false|none|none|
|user_present|boolean|false|none|none|
|user_verified|boolean|false|none|none|

<h2 id="tocS_identityCredentialsWebAuthnList">identityCredentialsWebAuthnList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitycredentialswebauthnlist"></a>
<a id="schema_identityCredentialsWebAuthnList"></a>
<a id="tocSidentitycredentialswebauthnlist"></a>
<a id="tocsidentitycredentialswebauthnlist"></a>

```json
[
  {
    "added_at": "1970-01-01T00:00:00Z",
    "attestation": {
      "authenticator_data": [
        0
      ],
      "client_dataJSON": [
        0
      ],
      "client_data_hash": [
        0
      ],
      "object": [
        0
      ],
      "public_key_algorithm": 0
    },
    "attestation_type": "string",
    "authenticator": {
      "aaguid": [
        0
      ],
      "clone_warning": true,
      "sign_count": 0
    },
    "display_name": "string",
    "flags": {
      "backup_eligible": true,
      "backup_state": true,
      "user_present": true,
      "user_verified": true
    },
    "id": [
      0
    ],
    "is_passwordless": true,
    "public_key": [
      0
    ],
    "transport": [
      "string"
    ]
  }
]
```

<h2 id="tocS_identityPatch">identityPatch</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypatch"></a>
<a id="schema_identityPatch"></a>
<a id="tocSidentitypatch"></a>
<a id="tocsidentitypatch"></a>

```json
{
  "create": {
    "credentials": {
      "lookup_secret": {
        "config": {
          "codes": [
            {
              "code": "string",
              "used_at": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "oidc": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string",
              "use_auto_link": true
            }
          ]
        }
      },
      "passkey": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      },
      "password": {
        "config": {
          "hashed_password": "string",
          "password": "string",
          "use_password_migration_hook": true
        }
      },
      "saml": {
        "config": {
          "providers": [
            {
              "organization": "string",
              "provider": "string",
              "subject": "string"
            }
          ]
        }
      },
      "totp": {
        "config": {
          "totp_url": "string"
        }
      },
      "webauthn": {
        "config": {
          "credentials": [
            {
              "added_at": "1970-01-01T00:00:00Z",
              "attestation": {
                "authenticator_data": [
                  0
                ],
                "client_dataJSON": [
                  0
                ],
                "client_data_hash": [
                  0
                ],
                "object": [
                  0
                ],
                "public_key_algorithm": 0
              },
              "attestation_type": "string",
              "authenticator": {
                "aaguid": [
                  0
                ],
                "clone_warning": true,
                "sign_count": 0
              },
              "display_name": "string",
              "flags": {
                "backup_eligible": true,
                "backup_state": true,
                "user_present": true,
                "user_verified": true
              },
              "id": [
                0
              ],
              "is_passwordless": true,
              "public_key": [
                0
              ],
              "transport": [
                "string"
              ]
            }
          ],
          "user_handle": [
            0
          ]
        }
      }
    },
    "external_id": "string",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "state": "active",
    "traits": {},
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Payload for patching an identity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create|[createIdentityBody](#schemacreateidentitybody)|false|none|Create Identity Body|
|patch_id|string(uuid)|false|none|The ID of this patch.<br><br>The patch ID is optional. If specified, the ID will be returned in the<br>response, so consumers of this API can correlate the response with the<br>patch.|

<h2 id="tocS_identityPatchResponse">identityPatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypatchresponse"></a>
<a id="schema_identityPatchResponse"></a>
<a id="tocSidentitypatchresponse"></a>
<a id="tocsidentitypatchresponse"></a>

```json
{
  "action": "create",
  "error": null,
  "identity": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Response for a single identity patch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action for this specific patch<br>create ActionCreate  Create this identity.<br>error ActionError  Error indicates that the patch failed.|
|error|[DefaultError](#schemadefaulterror)|false|none|From https://go.dev/wiki/CodeReviewComments#receiver-type:<br>> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.<br>> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,<br>> prefer a pointer receiver, as it will make the intention clearer to the reader.<br>> Don’t mix receiver types. Choose either pointers or struct types for all available methods.|
|identity|string(uuid)|false|none|The identity ID payload of this patch|
|patch_id|string(uuid)|false|none|The ID of this patch response, if an ID was specified in the patch.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|error|

<h2 id="tocS_identitySchema">identitySchema</h2>
<!-- backwards compatibility -->
<a id="schemaidentityschema"></a>
<a id="schema_identitySchema"></a>
<a id="tocSidentityschema"></a>
<a id="tocsidentityschema"></a>

```json
{}
```

Raw JSON Schema

<h2 id="tocS_identitySchemaContainer">identitySchemaContainer</h2>
<!-- backwards compatibility -->
<a id="schemaidentityschemacontainer"></a>
<a id="schema_identitySchemaContainer"></a>
<a id="tocSidentityschemacontainer"></a>
<a id="tocsidentityschemacontainer"></a>

```json
{
  "id": "string",
  "schema": {}
}
```

An Identity JSON Schema Container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the Identity JSON Schema|
|schema|object|true|none|The actual Identity JSON Schema|

<h2 id="tocS_identitySchemas">identitySchemas</h2>
<!-- backwards compatibility -->
<a id="schemaidentityschemas"></a>
<a id="schema_identitySchemas"></a>
<a id="tocSidentityschemas"></a>
<a id="tocsidentityschemas"></a>

```json
[
  {
    "id": "string",
    "schema": {}
  }
]
```

List of Identity JSON Schemas

<h2 id="tocS_identityTraits">identityTraits</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytraits"></a>
<a id="schema_identityTraits"></a>
<a id="tocSidentitytraits"></a>
<a id="tocsidentitytraits"></a>

```json
null
```

Traits represent an identity's traits. The identity is able to create, modify, and delete traits
in a self-service manner. The input will always be validated against the JSON Schema defined
in `schema_url`.

<h2 id="tocS_identityVerifiableAddressStatus">identityVerifiableAddressStatus</h2>
<!-- backwards compatibility -->
<a id="schemaidentityverifiableaddressstatus"></a>
<a id="schema_identityVerifiableAddressStatus"></a>
<a id="tocSidentityverifiableaddressstatus"></a>
<a id="tocsidentityverifiableaddressstatus"></a>

```json
"string"
```

VerifiableAddressStatus must not exceed 16 characters as that is the limitation in the SQL Schema

<h2 id="tocS_identityWithCredentials">identityWithCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentials"></a>
<a id="schema_identityWithCredentials"></a>
<a id="tocSidentitywithcredentials"></a>
<a id="tocsidentitywithcredentials"></a>

```json
{
  "lookup_secret": {
    "config": {
      "codes": [
        {
          "code": "string",
          "used_at": "1970-01-01T00:00:00Z"
        }
      ]
    }
  },
  "oidc": {
    "config": {
      "providers": [
        {
          "organization": "string",
          "provider": "string",
          "subject": "string",
          "use_auto_link": true
        }
      ]
    }
  },
  "passkey": {
    "config": {
      "credentials": [
        {
          "added_at": "1970-01-01T00:00:00Z",
          "attestation": {
            "authenticator_data": [
              0
            ],
            "client_dataJSON": [
              0
            ],
            "client_data_hash": [
              0
            ],
            "object": [
              0
            ],
            "public_key_algorithm": 0
          },
          "attestation_type": "string",
          "authenticator": {
            "aaguid": [
              0
            ],
            "clone_warning": true,
            "sign_count": 0
          },
          "display_name": "string",
          "flags": {
            "backup_eligible": true,
            "backup_state": true,
            "user_present": true,
            "user_verified": true
          },
          "id": [
            0
          ],
          "is_passwordless": true,
          "public_key": [
            0
          ],
          "transport": [
            "string"
          ]
        }
      ],
      "user_handle": [
        0
      ]
    }
  },
  "password": {
    "config": {
      "hashed_password": "string",
      "password": "string",
      "use_password_migration_hook": true
    }
  },
  "saml": {
    "config": {
      "providers": [
        {
          "organization": "string",
          "provider": "string",
          "subject": "string"
        }
      ]
    }
  },
  "totp": {
    "config": {
      "totp_url": "string"
    }
  },
  "webauthn": {
    "config": {
      "credentials": [
        {
          "added_at": "1970-01-01T00:00:00Z",
          "attestation": {
            "authenticator_data": [
              0
            ],
            "client_dataJSON": [
              0
            ],
            "client_data_hash": [
              0
            ],
            "object": [
              0
            ],
            "public_key_algorithm": 0
          },
          "attestation_type": "string",
          "authenticator": {
            "aaguid": [
              0
            ],
            "clone_warning": true,
            "sign_count": 0
          },
          "display_name": "string",
          "flags": {
            "backup_eligible": true,
            "backup_state": true,
            "user_present": true,
            "user_verified": true
          },
          "id": [
            0
          ],
          "is_passwordless": true,
          "public_key": [
            0
          ],
          "transport": [
            "string"
          ]
        }
      ],
      "user_handle": [
        0
      ]
    }
  }
}
```

Create Identity and Import Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lookup_secret|[AdminIdentityImportCredentialsLookupSecret](#schemaadminidentityimportcredentialslookupsecret)|false|none|Create Identity and Import Lookup Secret Credentials|
|oidc|[identityWithCredentialsOidc](#schemaidentitywithcredentialsoidc)|false|none|Create Identity and Import Social Sign In Credentials|
|passkey|[identityWithCredentialsPasskey](#schemaidentitywithcredentialspasskey)|false|none|Create Identity and Import Passkey Credentials|
|password|[identityWithCredentialsPassword](#schemaidentitywithcredentialspassword)|false|none|Create Identity and Import Password Credentials|
|saml|[identityWithCredentialsSaml](#schemaidentitywithcredentialssaml)|false|none|Payload to import SAML credentials|
|totp|[identityWithCredentialsTotp](#schemaidentitywithcredentialstotp)|false|none|Create Identity and Import TOTP 2FA Credentials|
|webauthn|[identityWithCredentialsWebAuthn](#schemaidentitywithcredentialswebauthn)|false|none|Create Identity and Import WebAuthn Credentials|

<h2 id="tocS_identityWithCredentialsOidc">identityWithCredentialsOidc</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialsoidc"></a>
<a id="schema_identityWithCredentialsOidc"></a>
<a id="tocSidentitywithcredentialsoidc"></a>
<a id="tocsidentitywithcredentialsoidc"></a>

```json
{
  "config": {
    "providers": [
      {
        "organization": "string",
        "provider": "string",
        "subject": "string",
        "use_auto_link": true
      }
    ]
  }
}
```

Create Identity and Import Social Sign In Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsOidcConfig](#schemaidentitywithcredentialsoidcconfig)|false|none|none|

<h2 id="tocS_identityWithCredentialsOidcConfig">identityWithCredentialsOidcConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialsoidcconfig"></a>
<a id="schema_identityWithCredentialsOidcConfig"></a>
<a id="tocSidentitywithcredentialsoidcconfig"></a>
<a id="tocsidentitywithcredentialsoidcconfig"></a>

```json
{
  "providers": [
    {
      "organization": "string",
      "provider": "string",
      "subject": "string",
      "use_auto_link": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[identityWithCredentialsOidcConfigProvider](#schemaidentitywithcredentialsoidcconfigprovider)]|false|none|A list of OpenID Connect Providers|

<h2 id="tocS_identityWithCredentialsOidcConfigProvider">identityWithCredentialsOidcConfigProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialsoidcconfigprovider"></a>
<a id="schema_identityWithCredentialsOidcConfigProvider"></a>
<a id="tocSidentitywithcredentialsoidcconfigprovider"></a>
<a id="tocsidentitywithcredentialsoidcconfigprovider"></a>

```json
{
  "organization": "string",
  "provider": "string",
  "subject": "string",
  "use_auto_link": true
}
```

Create Identity and Import Social Sign In Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization|[NullUUID](#schemanulluuid)|false|none|none|
|provider|string|true|none|The OpenID Connect provider to link the subject to. Usually something like `google` or `github`.|
|subject|string|true|none|The subject (`sub`) of the OpenID Connect connection. Usually the `sub` field of the ID Token.|
|use_auto_link|boolean|false|none|If set, this credential allows the user to sign in using the OpenID Connect provider without setting the subject first.|

<h2 id="tocS_identityWithCredentialsPasskey">identityWithCredentialsPasskey</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialspasskey"></a>
<a id="schema_identityWithCredentialsPasskey"></a>
<a id="tocSidentitywithcredentialspasskey"></a>
<a id="tocsidentitywithcredentialspasskey"></a>

```json
{
  "config": {
    "credentials": [
      {
        "added_at": "1970-01-01T00:00:00Z",
        "attestation": {
          "authenticator_data": [
            0
          ],
          "client_dataJSON": [
            0
          ],
          "client_data_hash": [
            0
          ],
          "object": [
            0
          ],
          "public_key_algorithm": 0
        },
        "attestation_type": "string",
        "authenticator": {
          "aaguid": [
            0
          ],
          "clone_warning": true,
          "sign_count": 0
        },
        "display_name": "string",
        "flags": {
          "backup_eligible": true,
          "backup_state": true,
          "user_present": true,
          "user_verified": true
        },
        "id": [
          0
        ],
        "is_passwordless": true,
        "public_key": [
          0
        ],
        "transport": [
          "string"
        ]
      }
    ],
    "user_handle": [
      0
    ]
  }
}
```

Create Identity and Import Passkey Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsPasskeyConfig](#schemaidentitywithcredentialspasskeyconfig)|false|none|Create Identity and Import Passkey Credentials Configuration|

<h2 id="tocS_identityWithCredentialsPasskeyConfig">identityWithCredentialsPasskeyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialspasskeyconfig"></a>
<a id="schema_identityWithCredentialsPasskeyConfig"></a>
<a id="tocSidentitywithcredentialspasskeyconfig"></a>
<a id="tocsidentitywithcredentialspasskeyconfig"></a>

```json
{
  "credentials": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "attestation": {
        "authenticator_data": [
          0
        ],
        "client_dataJSON": [
          0
        ],
        "client_data_hash": [
          0
        ],
        "object": [
          0
        ],
        "public_key_algorithm": 0
      },
      "attestation_type": "string",
      "authenticator": {
        "aaguid": [
          0
        ],
        "clone_warning": true,
        "sign_count": 0
      },
      "display_name": "string",
      "flags": {
        "backup_eligible": true,
        "backup_state": true,
        "user_present": true,
        "user_verified": true
      },
      "id": [
        0
      ],
      "is_passwordless": true,
      "public_key": [
        0
      ],
      "transport": [
        "string"
      ]
    }
  ],
  "user_handle": [
    0
  ]
}
```

Create Identity and Import Passkey Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[identityCredentialsWebAuthnList](#schemaidentitycredentialswebauthnlist)|false|none|none|
|user_handle|[integer(uint8)]|false|none|UserHandle is the user handle of the webauthn credential.|

<h2 id="tocS_identityWithCredentialsPassword">identityWithCredentialsPassword</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialspassword"></a>
<a id="schema_identityWithCredentialsPassword"></a>
<a id="tocSidentitywithcredentialspassword"></a>
<a id="tocsidentitywithcredentialspassword"></a>

```json
{
  "config": {
    "hashed_password": "string",
    "password": "string",
    "use_password_migration_hook": true
  }
}
```

Create Identity and Import Password Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsPasswordConfig](#schemaidentitywithcredentialspasswordconfig)|false|none|Create Identity and Import Password Credentials Configuration|

<h2 id="tocS_identityWithCredentialsPasswordConfig">identityWithCredentialsPasswordConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialspasswordconfig"></a>
<a id="schema_identityWithCredentialsPasswordConfig"></a>
<a id="tocSidentitywithcredentialspasswordconfig"></a>
<a id="tocsidentitywithcredentialspasswordconfig"></a>

```json
{
  "hashed_password": "string",
  "password": "string",
  "use_password_migration_hook": true
}
```

Create Identity and Import Password Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashed_password|string|false|none|The hashed password in [PHC format](https://www.ory.com/docs/kratos/manage-identities/import-user-accounts-identities#hashed-passwords)|
|password|string|false|none|The password in plain text if no hash is available.|
|use_password_migration_hook|boolean|false|none|If set to true, the password will be migrated using the password migration hook.|

<h2 id="tocS_identityWithCredentialsSaml">identityWithCredentialsSaml</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialssaml"></a>
<a id="schema_identityWithCredentialsSaml"></a>
<a id="tocSidentitywithcredentialssaml"></a>
<a id="tocsidentitywithcredentialssaml"></a>

```json
{
  "config": {
    "providers": [
      {
        "organization": "string",
        "provider": "string",
        "subject": "string"
      }
    ]
  }
}
```

Payload to import SAML credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsSamlConfig](#schemaidentitywithcredentialssamlconfig)|false|none|Payload of SAML providers|

<h2 id="tocS_identityWithCredentialsSamlConfig">identityWithCredentialsSamlConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialssamlconfig"></a>
<a id="schema_identityWithCredentialsSamlConfig"></a>
<a id="tocSidentitywithcredentialssamlconfig"></a>
<a id="tocsidentitywithcredentialssamlconfig"></a>

```json
{
  "providers": [
    {
      "organization": "string",
      "provider": "string",
      "subject": "string"
    }
  ]
}
```

Payload of SAML providers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[identityWithCredentialsSamlConfigProvider](#schemaidentitywithcredentialssamlconfigprovider)]|false|none|A list of SAML Providers|

<h2 id="tocS_identityWithCredentialsSamlConfigProvider">identityWithCredentialsSamlConfigProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialssamlconfigprovider"></a>
<a id="schema_identityWithCredentialsSamlConfigProvider"></a>
<a id="tocSidentitywithcredentialssamlconfigprovider"></a>
<a id="tocsidentitywithcredentialssamlconfigprovider"></a>

```json
{
  "organization": "string",
  "provider": "string",
  "subject": "string"
}
```

Payload of specific SAML provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization|[NullUUID](#schemanulluuid)|false|none|none|
|provider|string|true|none|The SAML provider to link the subject to.|
|subject|string|true|none|The unique subject of the SAML connection. This value must be immutable at the source.|

<h2 id="tocS_identityWithCredentialsTotp">identityWithCredentialsTotp</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialstotp"></a>
<a id="schema_identityWithCredentialsTotp"></a>
<a id="tocSidentitywithcredentialstotp"></a>
<a id="tocsidentitywithcredentialstotp"></a>

```json
{
  "config": {
    "totp_url": "string"
  }
}
```

Create Identity and Import TOTP 2FA Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsTotpConfig](#schemaidentitywithcredentialstotpconfig)|false|none|Create Identity and Import TOTP 2FA Credentials Configuration|

<h2 id="tocS_identityWithCredentialsTotpConfig">identityWithCredentialsTotpConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialstotpconfig"></a>
<a id="schema_identityWithCredentialsTotpConfig"></a>
<a id="tocSidentitywithcredentialstotpconfig"></a>
<a id="tocsidentitywithcredentialstotpconfig"></a>

```json
{
  "totp_url": "string"
}
```

Create Identity and Import TOTP 2FA Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totp_url|string|false|none|TOTPURL is the TOTP URL<br><br>For more details see: https://github.com/google/google-authenticator/wiki/Key-Uri-Format|

<h2 id="tocS_identityWithCredentialsWebAuthn">identityWithCredentialsWebAuthn</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialswebauthn"></a>
<a id="schema_identityWithCredentialsWebAuthn"></a>
<a id="tocSidentitywithcredentialswebauthn"></a>
<a id="tocsidentitywithcredentialswebauthn"></a>

```json
{
  "config": {
    "credentials": [
      {
        "added_at": "1970-01-01T00:00:00Z",
        "attestation": {
          "authenticator_data": [
            0
          ],
          "client_dataJSON": [
            0
          ],
          "client_data_hash": [
            0
          ],
          "object": [
            0
          ],
          "public_key_algorithm": 0
        },
        "attestation_type": "string",
        "authenticator": {
          "aaguid": [
            0
          ],
          "clone_warning": true,
          "sign_count": 0
        },
        "display_name": "string",
        "flags": {
          "backup_eligible": true,
          "backup_state": true,
          "user_present": true,
          "user_verified": true
        },
        "id": [
          0
        ],
        "is_passwordless": true,
        "public_key": [
          0
        ],
        "transport": [
          "string"
        ]
      }
    ],
    "user_handle": [
      0
    ]
  }
}
```

Create Identity and Import WebAuthn Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[identityWithCredentialsWebAuthnConfig](#schemaidentitywithcredentialswebauthnconfig)|false|none|Create Identity and Import WebAuthn Credentials Configuration|

<h2 id="tocS_identityWithCredentialsWebAuthnConfig">identityWithCredentialsWebAuthnConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentitywithcredentialswebauthnconfig"></a>
<a id="schema_identityWithCredentialsWebAuthnConfig"></a>
<a id="tocSidentitywithcredentialswebauthnconfig"></a>
<a id="tocsidentitywithcredentialswebauthnconfig"></a>

```json
{
  "credentials": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "attestation": {
        "authenticator_data": [
          0
        ],
        "client_dataJSON": [
          0
        ],
        "client_data_hash": [
          0
        ],
        "object": [
          0
        ],
        "public_key_algorithm": 0
      },
      "attestation_type": "string",
      "authenticator": {
        "aaguid": [
          0
        ],
        "clone_warning": true,
        "sign_count": 0
      },
      "display_name": "string",
      "flags": {
        "backup_eligible": true,
        "backup_state": true,
        "user_present": true,
        "user_verified": true
      },
      "id": [
        0
      ],
      "is_passwordless": true,
      "public_key": [
        0
      ],
      "transport": [
        "string"
      ]
    }
  ],
  "user_handle": [
    0
  ]
}
```

Create Identity and Import WebAuthn Credentials Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[identityCredentialsWebAuthnList](#schemaidentitycredentialswebauthnlist)|false|none|none|
|user_handle|[integer(uint8)]|false|none|UserHandle is the user handle of the webauthn credential.|

<h2 id="tocS_jsonPatch">jsonPatch</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatch"></a>
<a id="schema_jsonPatch"></a>
<a id="tocSjsonpatch"></a>
<a id="tocsjsonpatch"></a>

```json
{
  "from": "/name",
  "op": "replace",
  "path": "/name",
  "value": "foobar"
}
```

A JSONPatch document as defined by RFC 6902

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|This field is used together with operation "move" and uses JSON Pointer notation.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|
|op|string|true|none|The operation to be performed. One of "add", "remove", "replace", "move", "copy", or "test".|
|path|string|true|none|The path to the target path. Uses JSON pointer notation.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|
|value|object|false|none|The value to be used within the operations.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|

<h2 id="tocS_jsonPatchDocument">jsonPatchDocument</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchdocument"></a>
<a id="schema_jsonPatchDocument"></a>
<a id="tocSjsonpatchdocument"></a>
<a id="tocsjsonpatchdocument"></a>

```json
[
  {
    "from": "/name",
    "op": "replace",
    "path": "/name",
    "value": "foobar"
  }
]
```

A JSONPatchDocument request

<h2 id="tocS_loginFlow">loginFlow</h2>
<!-- backwards compatibility -->
<a id="schemaloginflow"></a>
<a id="schema_loginFlow"></a>
<a id="tocSloginflow"></a>
<a id="tocsloginflow"></a>

```json
{
  "active": "password",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "refresh": true,
  "request_url": "string",
  "requested_aal": "aal0",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "test_context": {
    "debug_payload": {
      "error": {
        "message": "string",
        "reason": "string",
        "step": "string"
      },
      "id_token_claims": {
        "property1": null,
        "property2": null
      },
      "jsonnet_input": {
        "property1": null,
        "property2": null
      },
      "jsonnet_mapper_url": "string",
      "jsonnet_output": {
        "property1": null,
        "property2": null
      },
      "jsonnet_stderr": "string",
      "schema_validation_errors": [
        {
          "message": "string",
          "path": "string"
        }
      ],
      "userinfo": {
        "property1": null,
        "property2": null
      }
    },
    "provider_id": "string"
  },
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

This object represents a login flow. A login flow is initiated at the "Initiate Login API / Browser Flow"
endpoint by a client.

Once a login flow is completed successfully, a session cookie or session token will be issued.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|The active login method<br><br>If set contains the login method used. If the flow is new, it is unset.<br>password CredentialsTypePassword<br>oidc CredentialsTypeOIDC<br>totp CredentialsTypeTOTP<br>lookup_secret CredentialsTypeLookup<br>webauthn CredentialsTypeWebAuthn<br>code CredentialsTypeCodeAuth<br>passkey CredentialsTypePasskey<br>profile CredentialsTypeProfile<br>saml CredentialsTypeSAML<br>deviceauthn CredentialsTypeDeviceAuthn<br>identifier_first CredentialsTypeIdentifierFirst<br>link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.<br>code_recovery CredentialsTypeRecoveryCode|
|created_at|string(date-time)|false|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|expires_at|string(date-time)|true|none|ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in,<br>a new flow has to be initiated.|
|id|string(uuid)|true|none|ID represents the flow's unique ID. When performing the login flow, this<br>represents the id in the login UI's query parameter: http://<selfservice.flows.login.ui_url>/?flow=<flow_id>|
|identity_schema|string|false|none|IdentitySchema optionally holds the ID of the identity schema that is used<br>for this flow. This value can be set by the user when creating the flow and<br>should be retained when the flow is saved or converted to another flow.|
|issued_at|string(date-time)|true|none|IssuedAt is the time (UTC) when the flow started.|
|oauth2_login_challenge|string|false|none|Ory OAuth 2.0 Login Challenge.<br><br>This value is set using the `login_challenge` query parameter of the registration and login endpoints.<br>If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.|
|oauth2_login_request|[OAuth2LoginRequest](#schemaoauth2loginrequest)|false|none|OAuth2LoginRequest struct for OAuth2LoginRequest|
|organization_id|[NullUUID](#schemanulluuid)|false|none|none|
|refresh|boolean|false|none|Refresh stores whether this login flow should enforce re-authentication.|
|request_url|string|true|none|RequestURL is the initial URL that was requested from Ory Kratos. It can be used<br>to forward information contained in the URL's path or query for example.|
|requested_aal|[authenticatorAssuranceLevel](#schemaauthenticatorassurancelevel)|false|none|The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder<br>for an attacker to compromise the account.<br><br>Generally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.<br>password + TOTP) have been used.<br><br>To learn more about these levels please head over to: https://www.ory.com/kratos/docs/concepts/credentials|
|return_to|string|false|none|ReturnTo contains the requested return_to URL.|
|session_token_exchange_code|string|false|none|SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the login flow has been completed.<br>This is only set if the client has requested a session token exchange code, and if the flow is of type "api",<br>and only on creating the login flow.|
|state|object|true|none|State represents the state of this request:<br><br>choose_method: ask the user to choose a method to sign in with<br>sent_email: the email has been sent to the user<br>passed_challenge: the request was successful and the login challenge was passed.|
|test_context|[loginFlowTestContext](#schemaloginflowtestcontext)|false|none|Admin-test extension of a login flow. Populated only for flows created by<br>the admin test endpoint; included in the flow's API response so the admin<br>UI can render the pre-scoped provider and (once captured) the debug<br>round-trip result.|
|transient_payload|object|false|none|TransientPayload is used to pass data from the login to hooks and email templates|
|type|[selfServiceFlowType](#schemaselfserviceflowtype)|true|none|The flow type can either be `api` or `browser`.|
|ui|[uiContainer](#schemauicontainer)|true|none|Container represents a HTML Form. The container can work with both HTTP Form and JSON requests|
|updated_at|string(date-time)|false|none|UpdatedAt is a helper struct field for gobuffalo.pop.|

#### Enumerated Values

|Property|Value|
|---|---|
|active|password|
|active|oidc|
|active|totp|
|active|lookup_secret|
|active|webauthn|
|active|code|
|active|passkey|
|active|profile|
|active|saml|
|active|deviceauthn|
|active|identifier_first|
|active|link_recovery|
|active|code_recovery|
|requested_aal|aal0|
|requested_aal|aal1|
|requested_aal|aal2|
|requested_aal|aal3|

<h2 id="tocS_loginFlowState">loginFlowState</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowstate"></a>
<a id="schema_loginFlowState"></a>
<a id="tocSloginflowstate"></a>
<a id="tocsloginflowstate"></a>

```json
"choose_method"
```

The experimental state represents the state of a login flow. This field is EXPERIMENTAL and subject to change!

<h2 id="tocS_loginFlowTestContext">loginFlowTestContext</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowtestcontext"></a>
<a id="schema_loginFlowTestContext"></a>
<a id="tocSloginflowtestcontext"></a>
<a id="tocsloginflowtestcontext"></a>

```json
{
  "debug_payload": {
    "error": {
      "message": "string",
      "reason": "string",
      "step": "string"
    },
    "id_token_claims": {
      "property1": null,
      "property2": null
    },
    "jsonnet_input": {
      "property1": null,
      "property2": null
    },
    "jsonnet_mapper_url": "string",
    "jsonnet_output": {
      "property1": null,
      "property2": null
    },
    "jsonnet_stderr": "string",
    "schema_validation_errors": [
      {
        "message": "string",
        "path": "string"
      }
    ],
    "userinfo": {
      "property1": null,
      "property2": null
    }
  },
  "provider_id": "string"
}
```

Admin-test extension of a login flow. Populated only for flows created by
the admin test endpoint; included in the flow's API response so the admin
UI can render the pre-scoped provider and (once captured) the debug
round-trip result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug_payload|[loginFlowTestDebugPayload](#schemaloginflowtestdebugpayload)|false|none|Contains the parsed claims, the Jsonnet mapper input and output, and any<br>schema validation errors. Bearer tokens (id_token, access_token,<br>refresh_token) are intentionally excluded to limit the blast radius of<br>the debug payload leaking through audit logs or admin browsers.|
|provider_id|string|true|none|The ID of the OIDC provider this test flow targets.|

<h2 id="tocS_loginFlowTestDebugPayload">loginFlowTestDebugPayload</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowtestdebugpayload"></a>
<a id="schema_loginFlowTestDebugPayload"></a>
<a id="tocSloginflowtestdebugpayload"></a>
<a id="tocsloginflowtestdebugpayload"></a>

```json
{
  "error": {
    "message": "string",
    "reason": "string",
    "step": "string"
  },
  "id_token_claims": {
    "property1": null,
    "property2": null
  },
  "jsonnet_input": {
    "property1": null,
    "property2": null
  },
  "jsonnet_mapper_url": "string",
  "jsonnet_output": {
    "property1": null,
    "property2": null
  },
  "jsonnet_stderr": "string",
  "schema_validation_errors": [
    {
      "message": "string",
      "path": "string"
    }
  ],
  "userinfo": {
    "property1": null,
    "property2": null
  }
}
```

Contains the parsed claims, the Jsonnet mapper input and output, and any
schema validation errors. Bearer tokens (id_token, access_token,
refresh_token) are intentionally excluded to limit the blast radius of
the debug payload leaking through audit logs or admin browsers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[loginFlowTestStepError](#schemaloginflowteststeperror)|false|none|Populated when any step (token exchange, claims decode, Jsonnet<br>evaluation, schema validation) cannot complete.|
|id_token_claims|object|false|none|Claims extracted from the ID token.|
|jsonnet_input|object|false|none|Input JSON that was fed into the Jsonnet mapper.|
|jsonnet_mapper_url|string|false|none|URL of the Jsonnet mapper that was executed on the claims.|
|jsonnet_output|object|false|none|Output JSON returned by the Jsonnet mapper.|
|jsonnet_stderr|string|false|none|Anything the Jsonnet mapper wrote to standard error.|
|schema_validation_errors|[[loginFlowTestSchemaValidationError](#schemaloginflowtestschemavalidationerror)]|false|none|Identity-schema validation errors produced from the mapped traits.|
|userinfo|object|false|none|Claims returned from the provider's userinfo endpoint, if any.|

<h2 id="tocS_loginFlowTestSchemaValidationError">loginFlowTestSchemaValidationError</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowtestschemavalidationerror"></a>
<a id="schema_loginFlowTestSchemaValidationError"></a>
<a id="tocSloginflowtestschemavalidationerror"></a>
<a id="tocsloginflowtestschemavalidationerror"></a>

```json
{
  "message": "string",
  "path": "string"
}
```

One identity-schema validation failure recorded while evaluating the
traits produced by the Jsonnet mapper.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Human-readable description of the validation failure.|
|path|string|false|none|JSON pointer to the field that failed validation.|

<h2 id="tocS_loginFlowTestStepError">loginFlowTestStepError</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowteststeperror"></a>
<a id="schema_loginFlowTestStepError"></a>
<a id="tocSloginflowteststeperror"></a>
<a id="tocsloginflowteststeperror"></a>

```json
{
  "message": "string",
  "reason": "string",
  "step": "string"
}
```

Populated when any step (token exchange, claims decode, Jsonnet
evaluation, schema validation) cannot complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Human-readable message describing the failure.|
|reason|string|false|none|Short classification of the failure cause (for example,<br>"access_denied" or "traits_invalid").|
|step|string|false|none|Machine-readable identifier of the failed step (for example,<br>"token_exchange" or "schema_validate").|

<h2 id="tocS_logoutFlow">logoutFlow</h2>
<!-- backwards compatibility -->
<a id="schemalogoutflow"></a>
<a id="schema_logoutFlow"></a>
<a id="tocSlogoutflow"></a>
<a id="tocslogoutflow"></a>

```json
{
  "logout_token": "string",
  "logout_url": "string"
}
```

Logout Flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logout_token|string|true|none|LogoutToken can be used to perform logout using AJAX.|
|logout_url|string|true|none|LogoutURL can be opened in a browser to sign the user out.<br><br>format: uri|

<h2 id="tocS_manageSessionsBody">manageSessionsBody</h2>
<!-- backwards compatibility -->
<a id="schemamanagesessionsbody"></a>
<a id="schema_manageSessionsBody"></a>
<a id="tocSmanagesessionsbody"></a>
<a id="tocsmanagesessionsbody"></a>

```json
{
  "action": "disable",
  "identities": [
    "string"
  ],
  "sessions": [
    "string"
  ]
}
```

Body for the bulk session management endpoint. Exactly one of `identities`
or `sessions` must be provided. To operate on every session in the network,
pass `identities: ["*"]` — the wildcard must appear alone, never mixed with
explicit IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action to perform on the matching sessions.<br>disable ManageSessionsActionDisable<br>delete ManageSessionsActionDelete|
|identities|[string]|false|none|Identity IDs whose sessions should be disabled or deleted, or `["*"]`<br>to operate on every session in the network. Mutually exclusive with<br>`sessions`.|
|sessions|[string]|false|none|Session IDs to disable or delete. Mutually exclusive with `identities`.<br>The wildcard `["*"]` is not accepted in this field — pass<br>`identities: ["*"]` to scope the operation to every session in the<br>network.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|disable|
|action|delete|

<h2 id="tocS_manageSessionsResponse">manageSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagesessionsresponse"></a>
<a id="schema_manageSessionsResponse"></a>
<a id="tocSmanagesessionsresponse"></a>
<a id="tocsmanagesessionsresponse"></a>

```json
{
  "more": true,
  "processed": 0
}
```

Response body for the bulk session management endpoint. Reports how many
rows the call processed and, for the wildcard variant, whether the network
still has matching rows left. Explicit-IDs requests always return
`more: false`. Wildcard callers drain the network by re-issuing the same
request while `more` is `true`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|more|boolean|false|none|True when the call reached the per-call batch limit and additional<br>matching rows may remain. Always false for explicit-IDs requests.|
|processed|integer(int64)|false|none|Number of sessions processed in this call. For `disable`, counts only<br>sessions that were active before the call (already-inactive sessions<br>are skipped). For `delete`, counts every matching row removed.|

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "body": "string",
  "channel": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "dispatches": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "error": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "failed",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "recipient": "string",
  "send_count": 0,
  "status": "queued",
  "subject": "string",
  "template_type": "recovery_invalid",
  "type": "email",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|none|
|channel|string|false|none|none|
|created_at|string(date-time)|true|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|dispatches|[[messageDispatch](#schemamessagedispatch)]|false|none|Dispatches store information about the attempts of delivering a message<br>May contain an error if any happened, or just the `success` state.|
|id|string(uuid)|true|none|none|
|recipient|string|true|none|none|
|send_count|integer(int64)|true|none|none|
|status|[courierMessageStatus](#schemacouriermessagestatus)|true|none|A Message's Status|
|subject|string|true|none|none|
|template_type|string|true|none|<br>recovery_invalid TypeRecoveryInvalid<br>recovery_valid TypeRecoveryValid<br>recovery_code_invalid TypeRecoveryCodeInvalid<br>recovery_code_valid TypeRecoveryCodeValid<br>verification_invalid TypeVerificationInvalid<br>verification_valid TypeVerificationValid<br>verification_code_invalid TypeVerificationCodeInvalid<br>verification_code_valid TypeVerificationCodeValid<br>stub TypeTestStub<br>login_code_valid TypeLoginCodeValid<br>registration_code_valid TypeRegistrationCodeValid<br>verifiable_address_changed TypeVerifiableAddressChanged<br>authenticator_key_added TypeAuthenticatorKeyAdded|
|type|[courierMessageType](#schemacouriermessagetype)|true|none|It can either be `email` or `phone`|
|updated_at|string(date-time)|true|none|UpdatedAt is a helper struct field for gobuffalo.pop.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|sent|
|status|processing|
|status|abandoned|
|template_type|recovery_invalid|
|template_type|recovery_valid|
|template_type|recovery_code_invalid|
|template_type|recovery_code_valid|
|template_type|verification_invalid|
|template_type|verification_valid|
|template_type|verification_code_invalid|
|template_type|verification_code_valid|
|template_type|stub|
|template_type|login_code_valid|
|template_type|registration_code_valid|
|template_type|verifiable_address_changed|
|template_type|authenticator_key_added|
|type|email|
|type|phone|

<h2 id="tocS_messageDispatch">messageDispatch</h2>
<!-- backwards compatibility -->
<a id="schemamessagedispatch"></a>
<a id="schema_messageDispatch"></a>
<a id="tocSmessagedispatch"></a>
<a id="tocsmessagedispatch"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "error": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "message_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "failed",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

MessageDispatch represents an attempt of sending a courier message
It contains the status of the attempt (failed or successful) and the error if any occured

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|error|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|id|string(uuid)|true|none|The ID of this message dispatch|
|message_id|string(uuid)|true|none|The ID of the message being dispatched|
|status|string|true|none|The status of this dispatch<br>Either "failed" or "success"<br>failed CourierMessageDispatchStatusFailed<br>success CourierMessageDispatchStatusSuccess|
|updated_at|string(date-time)|true|none|UpdatedAt is a helper struct field for gobuffalo.pop.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|success|

<h2 id="tocS_needsPrivilegedSessionError">needsPrivilegedSessionError</h2>
<!-- backwards compatibility -->
<a id="schemaneedsprivilegedsessionerror"></a>
<a id="schema_needsPrivilegedSessionError"></a>
<a id="tocSneedsprivilegedsessionerror"></a>
<a id="tocsneedsprivilegedsessionerror"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  },
  "redirect_browser_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|false|none|none|
|redirect_browser_to|string|true|none|Points to where to redirect the user to next.|

<h2 id="tocS_nullInt64">nullInt64</h2>
<!-- backwards compatibility -->
<a id="schemanullint64"></a>
<a id="schema_nullInt64"></a>
<a id="tocSnullint64"></a>
<a id="tocsnullint64"></a>

```json
0
```

<h2 id="tocS_nullJsonRawMessage">nullJsonRawMessage</h2>
<!-- backwards compatibility -->
<a id="schemanulljsonrawmessage"></a>
<a id="schema_nullJsonRawMessage"></a>
<a id="tocSnulljsonrawmessage"></a>
<a id="tocsnulljsonrawmessage"></a>

```json
null
```

NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-

<h2 id="tocS_nullTime">nullTime</h2>
<!-- backwards compatibility -->
<a id="schemanulltime-1"></a>
<a id="schema_nullTime"></a>
<a id="tocSnulltime-1"></a>
<a id="tocsnulltime-1"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_patchIdentitiesBody">patchIdentitiesBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchidentitiesbody"></a>
<a id="schema_patchIdentitiesBody"></a>
<a id="tocSpatchidentitiesbody"></a>
<a id="tocspatchidentitiesbody"></a>

```json
{
  "identities": [
    {
      "create": {
        "credentials": {
          "lookup_secret": {
            "config": {
              "codes": [
                {
                  "code": "string",
                  "used_at": "1970-01-01T00:00:00Z"
                }
              ]
            }
          },
          "oidc": {
            "config": {
              "providers": [
                {
                  "organization": "string",
                  "provider": "string",
                  "subject": "string",
                  "use_auto_link": true
                }
              ]
            }
          },
          "passkey": {
            "config": {
              "credentials": [
                {
                  "added_at": "1970-01-01T00:00:00Z",
                  "attestation": {
                    "authenticator_data": [
                      0
                    ],
                    "client_dataJSON": [
                      0
                    ],
                    "client_data_hash": [
                      0
                    ],
                    "object": [
                      0
                    ],
                    "public_key_algorithm": 0
                  },
                  "attestation_type": "string",
                  "authenticator": {
                    "aaguid": [
                      0
                    ],
                    "clone_warning": true,
                    "sign_count": 0
                  },
                  "display_name": "string",
                  "flags": {
                    "backup_eligible": true,
                    "backup_state": true,
                    "user_present": true,
                    "user_verified": true
                  },
                  "id": [
                    0
                  ],
                  "is_passwordless": true,
                  "public_key": [
                    0
                  ],
                  "transport": [
                    "string"
                  ]
                }
              ],
              "user_handle": [
                0
              ]
            }
          },
          "password": {
            "config": {
              "hashed_password": "string",
              "password": "string",
              "use_password_migration_hook": true
            }
          },
          "saml": {
            "config": {
              "providers": [
                {
                  "organization": "string",
                  "provider": "string",
                  "subject": "string"
                }
              ]
            }
          },
          "totp": {
            "config": {
              "totp_url": "string"
            }
          },
          "webauthn": {
            "config": {
              "credentials": [
                {
                  "added_at": "1970-01-01T00:00:00Z",
                  "attestation": {
                    "authenticator_data": [
                      0
                    ],
                    "client_dataJSON": [
                      0
                    ],
                    "client_data_hash": [
                      0
                    ],
                    "object": [
                      0
                    ],
                    "public_key_algorithm": 0
                  },
                  "attestation_type": "string",
                  "authenticator": {
                    "aaguid": [
                      0
                    ],
                    "clone_warning": true,
                    "sign_count": 0
                  },
                  "display_name": "string",
                  "flags": {
                    "backup_eligible": true,
                    "backup_state": true,
                    "user_present": true,
                    "user_verified": true
                  },
                  "id": [
                    0
                  ],
                  "is_passwordless": true,
                  "public_key": [
                    0
                  ],
                  "transport": [
                    "string"
                  ]
                }
              ],
              "user_handle": [
                0
              ]
            }
          }
        },
        "external_id": "string",
        "metadata_admin": null,
        "metadata_public": null,
        "organization_id": "string",
        "recovery_addresses": [
          {
            "break_glass_for_organization": "string",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "updated_at": "1970-01-01T00:00:00Z",
            "value": "string",
            "via": "string"
          }
        ],
        "region": "eu-central",
        "schema_id": "string",
        "state": "active",
        "traits": {},
        "verifiable_addresses": [
          {
            "created_at": "2014-01-01T23:28:56.782Z",
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "status": "string",
            "updated_at": "2014-01-01T23:28:56.782Z",
            "value": "string",
            "verified": true,
            "verified_at": "1970-01-01T00:00:00Z",
            "via": "email"
          }
        ]
      },
      "patch_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

Patch Identities Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identities|[[identityPatch](#schemaidentitypatch)]|false|none|Identities holds the list of patches to apply<br><br>required|

<h2 id="tocS_performNativeLogoutBody">performNativeLogoutBody</h2>
<!-- backwards compatibility -->
<a id="schemaperformnativelogoutbody"></a>
<a id="schema_performNativeLogoutBody"></a>
<a id="tocSperformnativelogoutbody"></a>
<a id="tocsperformnativelogoutbody"></a>

```json
{
  "session_token": "string"
}
```

Perform Native Logout Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session_token|string|true|none|The Session Token<br><br>Invalidate this session token.|

<h2 id="tocS_recoveryCodeForIdentity">recoveryCodeForIdentity</h2>
<!-- backwards compatibility -->
<a id="schemarecoverycodeforidentity"></a>
<a id="schema_recoveryCodeForIdentity"></a>
<a id="tocSrecoverycodeforidentity"></a>
<a id="tocsrecoverycodeforidentity"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "recovery_code": "string",
  "recovery_link": "string"
}
```

Used when an administrator creates a recovery code for an identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|Expires At is the timestamp of when the recovery flow expires<br><br>The timestamp when the recovery code expires.|
|recovery_code|string|true|none|RecoveryCode is the code that can be used to recover the account|
|recovery_link|string|true|none|RecoveryLink with flow<br><br>This link opens the recovery UI with an empty `code` field.|

<h2 id="tocS_recoveryFlow">recoveryFlow</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryflow"></a>
<a id="schema_recoveryFlow"></a>
<a id="tocSrecoveryflow"></a>
<a id="tocsrecoveryflow"></a>

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

This request is used when an identity wants to recover their account.

We recommend reading the [Account Recovery Documentation](../self-service/flows/password-reset-account-recovery)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|Active, if set, contains the recovery method that is being used. It is initially<br>not set.|
|continue_with|[[continueWith](#schemacontinuewith)]|false|none|Contains possible actions that could follow this flow|
|expires_at|string(date-time)|true|none|ExpiresAt is the time (UTC) when the request expires. If the user still wishes to update the setting,<br>a new request has to be initiated.|
|id|string(uuid)|true|none|ID represents the request's unique ID. When performing the recovery flow, this<br>represents the id in the recovery ui's query parameter: http://<selfservice.flows.recovery.ui_url>?request=<id>|
|issued_at|string(date-time)|true|none|IssuedAt is the time (UTC) when the request occurred.|
|request_url|string|true|none|RequestURL is the initial URL that was requested from Ory Kratos. It can be used<br>to forward information contained in the URL's path or query for example.|
|return_to|string|false|none|ReturnTo contains the requested return_to URL.|
|state|object|true|none|State represents the state of this request:<br><br>choose_method: ask the user to choose a method (e.g. recover account via email)<br>sent_email: the email has been sent to the user<br>passed_challenge: the request was successful and the recovery challenge was passed.|
|transient_payload|object|false|none|TransientPayload is used to pass data from the recovery flow to hooks and email templates|
|type|[selfServiceFlowType](#schemaselfserviceflowtype)|true|none|The flow type can either be `api` or `browser`.|
|ui|[uiContainer](#schemauicontainer)|true|none|Container represents a HTML Form. The container can work with both HTTP Form and JSON requests|

<h2 id="tocS_recoveryFlowState">recoveryFlowState</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryflowstate"></a>
<a id="schema_recoveryFlowState"></a>
<a id="tocSrecoveryflowstate"></a>
<a id="tocsrecoveryflowstate"></a>

```json
"choose_method"
```

The experimental state represents the state of a recovery flow. This field is EXPERIMENTAL and subject to change!

<h2 id="tocS_recoveryIdentityAddress">recoveryIdentityAddress</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryidentityaddress"></a>
<a id="schema_recoveryIdentityAddress"></a>
<a id="tocSrecoveryidentityaddress"></a>
<a id="tocsrecoveryidentityaddress"></a>

```json
{
  "break_glass_for_organization": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "1970-01-01T00:00:00Z",
  "value": "string",
  "via": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|break_glass_for_organization|[NullUUID](#schemanulluuid)|false|none|none|
|created_at|string(date-time)|false|none|CreatedAt is a helper struct field for gobuffalo.pop.|
|id|string(uuid)|false|none|none|
|updated_at|string(date-time)|false|none|UpdatedAt is a helper struct field for gobuffalo.pop.|
|value|string|true|none|none|
|via|string|true|none|none|

<h2 id="tocS_recoveryLinkForIdentity">recoveryLinkForIdentity</h2>
<!-- backwards compatibility -->
<a id="schemarecoverylinkforidentity"></a>
<a id="schema_recoveryLinkForIdentity"></a>
<a id="tocSrecoverylinkforidentity"></a>
<a id="tocsrecoverylinkforidentity"></a>

```json
{
  "expires_at": "1970-01-01T00:00:00Z",
  "recovery_link": "string"
}
```

Used when an administrator creates a recovery link for an identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_at|string(date-time)|false|none|Recovery Link Expires At<br><br>The timestamp when the recovery link expires.|
|recovery_link|string|true|none|Recovery Link<br><br>This link can be used to recover the account.|

<h2 id="tocS_registrationFlow">registrationFlow</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationflow"></a>
<a id="schema_registrationFlow"></a>
<a id="tocSregistrationflow"></a>
<a id="tocsregistrationflow"></a>

```json
{
  "active": "password",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_schema": "string",
  "issued_at": "1970-01-01T00:00:00Z",
  "oauth2_login_challenge": "string",
  "oauth2_login_request": {
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": [
        "string"
      ],
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": null,
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": [
        "string"
      ],
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "string",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "string",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "session_id": "string",
    "skip": true,
    "subject": "string"
  },
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "session_token_exchange_code": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|Active, if set, contains the registration method that is being used. It is initially<br>not set.<br>password CredentialsTypePassword<br>oidc CredentialsTypeOIDC<br>totp CredentialsTypeTOTP<br>lookup_secret CredentialsTypeLookup<br>webauthn CredentialsTypeWebAuthn<br>code CredentialsTypeCodeAuth<br>passkey CredentialsTypePasskey<br>profile CredentialsTypeProfile<br>saml CredentialsTypeSAML<br>deviceauthn CredentialsTypeDeviceAuthn<br>identifier_first CredentialsTypeIdentifierFirst<br>link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.<br>code_recovery CredentialsTypeRecoveryCode|
|expires_at|string(date-time)|true|none|ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in,<br>a new flow has to be initiated.|
|id|string(uuid)|true|none|ID represents the flow's unique ID. When performing the registration flow, this<br>represents the id in the registration ui's query parameter: http://<selfservice.flows.registration.ui_url>/?flow=<id>|
|identity_schema|string|false|none|IdentitySchema optionally holds the ID of the identity schema that is used<br>for this flow. This value can be set by the user when creating the flow and<br>should be retained when the flow is saved or converted to another flow.|
|issued_at|string(date-time)|true|none|IssuedAt is the time (UTC) when the flow occurred.|
|oauth2_login_challenge|string|false|none|Ory OAuth 2.0 Login Challenge.<br><br>This value is set using the `login_challenge` query parameter of the registration and login endpoints.<br>If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.|
|oauth2_login_request|[OAuth2LoginRequest](#schemaoauth2loginrequest)|false|none|OAuth2LoginRequest struct for OAuth2LoginRequest|
|organization_id|[NullUUID](#schemanulluuid)|false|none|none|
|request_url|string|true|none|RequestURL is the initial URL that was requested from Ory Kratos. It can be used<br>to forward information contained in the URL's path or query for example.|
|return_to|string|false|none|ReturnTo contains the requested return_to URL.|
|session_token_exchange_code|string|false|none|SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the flow has been completed.<br>This is only set if the client has requested a session token exchange code, and if the flow is of type "api",<br>and only on creating the flow.|
|state|object|true|none|State represents the state of this request:<br><br>choose_method: ask the user to choose a method (e.g. registration with email)<br>sent_email: the email has been sent to the user<br>passed_challenge: the request was successful and the registration challenge was passed.|
|transient_payload|object|false|none|TransientPayload is used to pass data from the registration to a webhook|
|type|[selfServiceFlowType](#schemaselfserviceflowtype)|true|none|The flow type can either be `api` or `browser`.|
|ui|[uiContainer](#schemauicontainer)|true|none|Container represents a HTML Form. The container can work with both HTTP Form and JSON requests|

#### Enumerated Values

|Property|Value|
|---|---|
|active|password|
|active|oidc|
|active|totp|
|active|lookup_secret|
|active|webauthn|
|active|code|
|active|passkey|
|active|profile|
|active|saml|
|active|deviceauthn|
|active|identifier_first|
|active|link_recovery|
|active|code_recovery|

<h2 id="tocS_registrationFlowState">registrationFlowState</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationflowstate"></a>
<a id="schema_registrationFlowState"></a>
<a id="tocSregistrationflowstate"></a>
<a id="tocsregistrationflowstate"></a>

```json
"choose_method"
```

The experimental state represents the state of a registration flow. This field is EXPERIMENTAL and subject to change!

<h2 id="tocS_selfServiceFlowExpiredError">selfServiceFlowExpiredError</h2>
<!-- backwards compatibility -->
<a id="schemaselfserviceflowexpirederror"></a>
<a id="schema_selfServiceFlowExpiredError"></a>
<a id="tocSselfserviceflowexpirederror"></a>
<a id="tocsselfserviceflowexpirederror"></a>

```json
{
  "error": {
    "code": 404,
    "debug": "SQL field \"foo\" is not a bool.",
    "details": {},
    "id": "string",
    "message": "The resource could not be found",
    "reason": "User with ID 1234 does not exist.",
    "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
    "status": "Not Found"
  },
  "expired_at": "1970-01-01T00:00:00Z",
  "since": 0,
  "use_flow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Is sent when a flow is expired

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[genericError](#schemagenericerror)|false|none|none|
|expired_at|string(date-time)|false|none|When the flow has expired|
|since|[Duration](#schemaduration)|false|none|A Duration represents the elapsed time between two instants<br>as an int64 nanosecond count. The representation limits the<br>largest representable duration to approximately 290 years.|
|use_flow_id|string(uuid)|false|none|The flow ID that should be used for the new flow as it contains the correct messages.|

<h2 id="tocS_selfServiceFlowType">selfServiceFlowType</h2>
<!-- backwards compatibility -->
<a id="schemaselfserviceflowtype"></a>
<a id="schema_selfServiceFlowType"></a>
<a id="tocSselfserviceflowtype"></a>
<a id="tocsselfserviceflowtype"></a>

```json
"string"
```

The flow type can either be `api` or `browser`.

<h2 id="tocS_session">session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "active": true,
  "authenticated_at": "1970-01-01T00:00:00Z",
  "authentication_methods": [
    {
      "aal": "aal0",
      "completed_at": "1970-01-01T00:00:00Z",
      "method": "password",
      "organization": "string",
      "provider": "string",
      "upstream_acr": "string",
      "upstream_amr": [
        "string"
      ]
    }
  ],
  "authenticator_assurance_level": "aal0",
  "devices": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ip_address": "string",
      "location": "string",
      "user_agent": "string"
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "tokenized": "string"
}
```

A Session

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Active state. If false the session is no longer active.|
|authenticated_at|string(date-time)|false|none|The Session Authentication Timestamp<br><br>When this session was authenticated at. If multi-factor authentication was used this<br>is the time when the last factor was authenticated (e.g. the TOTP code challenge was completed).|
|authentication_methods|[sessionAuthenticationMethods](#schemasessionauthenticationmethods)|false|none|A list of authenticators which were used to authenticate the session.|
|authenticator_assurance_level|[authenticatorAssuranceLevel](#schemaauthenticatorassurancelevel)|false|none|The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder<br>for an attacker to compromise the account.<br><br>Generally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.<br>password + TOTP) have been used.<br><br>To learn more about these levels please head over to: https://www.ory.com/kratos/docs/concepts/credentials|
|devices|[[sessionDevice](#schemasessiondevice)]|false|none|Devices has history of all endpoints where the session was used|
|expires_at|string(date-time)|false|none|The Session Expiry<br><br>When this session expires at.|
|id|string(uuid)|true|none|Session ID|
|identity|[identity](#schemaidentity)|false|none|An [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.|
|issued_at|string(date-time)|false|none|The Session Issuance Timestamp<br><br>When this session was issued at. Usually equal or close to `authenticated_at`.|
|tokenized|string|false|none|Tokenized is the tokenized (e.g. JWT) version of the session.<br><br>It is only set when the `tokenize_as` query parameter was set to a valid tokenize template during calls to `/session/whoami`.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticator_assurance_level|aal0|
|authenticator_assurance_level|aal1|
|authenticator_assurance_level|aal2|
|authenticator_assurance_level|aal3|

<h2 id="tocS_sessionAuthenticationMethod">sessionAuthenticationMethod</h2>
<!-- backwards compatibility -->
<a id="schemasessionauthenticationmethod"></a>
<a id="schema_sessionAuthenticationMethod"></a>
<a id="tocSsessionauthenticationmethod"></a>
<a id="tocssessionauthenticationmethod"></a>

```json
{
  "aal": "aal0",
  "completed_at": "1970-01-01T00:00:00Z",
  "method": "password",
  "organization": "string",
  "provider": "string",
  "upstream_acr": "string",
  "upstream_amr": [
    "string"
  ]
}
```

A singular authenticator used during authentication / login.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aal|[authenticatorAssuranceLevel](#schemaauthenticatorassurancelevel)|false|none|The authenticator assurance level can be one of "aal1", "aal2", or "aal3". A higher number means that it is harder<br>for an attacker to compromise the account.<br><br>Generally, "aal1" implies that one authentication factor was used while AAL2 implies that two factors (e.g.<br>password + TOTP) have been used.<br><br>To learn more about these levels please head over to: https://www.ory.com/kratos/docs/concepts/credentials|
|completed_at|string(date-time)|false|none|When the authentication challenge was completed.|
|method|string|false|none|The method used in this authenticator.<br>password CredentialsTypePassword<br>oidc CredentialsTypeOIDC<br>totp CredentialsTypeTOTP<br>lookup_secret CredentialsTypeLookup<br>webauthn CredentialsTypeWebAuthn<br>code CredentialsTypeCodeAuth<br>passkey CredentialsTypePasskey<br>profile CredentialsTypeProfile<br>saml CredentialsTypeSAML<br>deviceauthn CredentialsTypeDeviceAuthn<br>identifier_first CredentialsTypeIdentifierFirst<br>link_recovery CredentialsTypeRecoveryLink  CredentialsTypeRecoveryLink is a special credential type linked to the link strategy (recovery flow).  It is not used within the credentials object itself.<br>code_recovery CredentialsTypeRecoveryCode|
|organization|string|false|none|The Organization id used for authentication|
|provider|string|false|none|OIDC or SAML provider id used for authentication|
|upstream_acr|string|false|none|UpstreamACR is the `acr` claim reported by the upstream OIDC<br>provider, if any. Populated only for OIDC login methods when the<br>upstream ID token contained an `acr` claim.|
|upstream_amr|[string]|false|none|UpstreamAMR is the `amr` claim reported by the upstream OIDC<br>provider, if any. Populated only for OIDC login methods when the<br>upstream ID token contained an `amr` claim.|

#### Enumerated Values

|Property|Value|
|---|---|
|aal|aal0|
|aal|aal1|
|aal|aal2|
|aal|aal3|
|method|password|
|method|oidc|
|method|totp|
|method|lookup_secret|
|method|webauthn|
|method|code|
|method|passkey|
|method|profile|
|method|saml|
|method|deviceauthn|
|method|identifier_first|
|method|link_recovery|
|method|code_recovery|

<h2 id="tocS_sessionAuthenticationMethods">sessionAuthenticationMethods</h2>
<!-- backwards compatibility -->
<a id="schemasessionauthenticationmethods"></a>
<a id="schema_sessionAuthenticationMethods"></a>
<a id="tocSsessionauthenticationmethods"></a>
<a id="tocssessionauthenticationmethods"></a>

```json
[
  {
    "aal": "aal0",
    "completed_at": "1970-01-01T00:00:00Z",
    "method": "password",
    "organization": "string",
    "provider": "string",
    "upstream_acr": "string",
    "upstream_amr": [
      "string"
    ]
  }
]
```

A list of authenticators which were used to authenticate the session.

<h2 id="tocS_sessionDevice">sessionDevice</h2>
<!-- backwards compatibility -->
<a id="schemasessiondevice"></a>
<a id="schema_sessionDevice"></a>
<a id="tocSsessiondevice"></a>
<a id="tocssessiondevice"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ip_address": "string",
  "location": "string",
  "user_agent": "string"
}
```

Device corresponding to a Session

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Device record ID|
|ip_address|string|false|none|IPAddress of the client|
|location|string|false|none|Geo Location corresponding to the IP Address|
|user_agent|string|false|none|UserAgent of the client|

<h2 id="tocS_settingsFlow">settingsFlow</h2>
<!-- backwards compatibility -->
<a id="schemasettingsflow"></a>
<a id="schema_settingsFlow"></a>
<a id="tocSsettingsflow"></a>
<a id="tocssettingsflow"></a>

```json
{
  "active": "string",
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "issued_at": "1970-01-01T00:00:00Z",
  "organization_id": "string",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

This flow is used when an identity wants to update settings
(e.g. profile data, passwords, ...) in a selfservice manner.

We recommend reading the [User Settings Documentation](../self-service/flows/user-settings)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|Active, if set, contains the registration method that is being used. It is initially<br>not set.|
|continue_with|[[continueWith](#schemacontinuewith)]|false|none|Contains a list of actions, that could follow this flow<br><br>It can, for example, contain a reference to the verification flow, created as part of the user's<br>registration.|
|expires_at|string(date-time)|true|none|ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to update the setting,<br>a new flow has to be initiated.|
|id|string(uuid)|true|none|ID represents the flow's unique ID. When performing the settings flow, this<br>represents the id in the settings ui's query parameter: http://<selfservice.flows.settings.ui_url>?flow=<id>|
|identity|[identity](#schemaidentity)|true|none|An [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.|
|issued_at|string(date-time)|true|none|IssuedAt is the time (UTC) when the flow occurred.|
|organization_id|[NullUUID](#schemanulluuid)|false|none|none|
|request_url|string|true|none|RequestURL is the initial URL that was requested from Ory Kratos. It can be used<br>to forward information contained in the URL's path or query for example.|
|return_to|string|false|none|ReturnTo contains the requested return_to URL.|
|state|object|true|none|State represents the state of this flow. It knows two states:<br><br>show_form: No user data has been collected, or it is invalid, and thus the form should be shown.<br>success: Indicates that the settings flow has been updated successfully with the provided data.<br>Done will stay true when repeatedly checking. If set to true, done will revert back to false only<br>when a flow with invalid (e.g. "please use a valid phone number") data was sent.|
|transient_payload|object|false|none|TransientPayload is used to pass data from the settings flow to hooks and email templates|
|type|[selfServiceFlowType](#schemaselfserviceflowtype)|true|none|The flow type can either be `api` or `browser`.|
|ui|[uiContainer](#schemauicontainer)|true|none|Container represents a HTML Form. The container can work with both HTTP Form and JSON requests|

<h2 id="tocS_settingsFlowState">settingsFlowState</h2>
<!-- backwards compatibility -->
<a id="schemasettingsflowstate"></a>
<a id="schema_settingsFlowState"></a>
<a id="tocSsettingsflowstate"></a>
<a id="tocssettingsflowstate"></a>

```json
"show_form"
```

The experimental state represents the state of a settings flow. This field is EXPERIMENTAL and subject to change!

<h2 id="tocS_successfulCodeExchangeResponse">successfulCodeExchangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulcodeexchangeresponse"></a>
<a id="schema_successfulCodeExchangeResponse"></a>
<a id="tocSsuccessfulcodeexchangeresponse"></a>
<a id="tocssuccessfulcodeexchangeresponse"></a>

```json
{
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

The Response for Registration Flows via API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[session](#schemasession)|true|none|A Session|
|session_token|string|false|none|The Session Token<br><br>A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization<br>Header:<br><br>Authorization: bearer ${session-token}<br><br>The session token is only issued for API flows, not for Browser flows!|

<h2 id="tocS_successfulNativeLogin">successfulNativeLogin</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulnativelogin"></a>
<a id="schema_successfulNativeLogin"></a>
<a id="tocSsuccessfulnativelogin"></a>
<a id="tocssuccessfulnativelogin"></a>

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

The Response for Login Flows via API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continue_with|[[continueWith](#schemacontinuewith)]|false|none|Contains a list of actions, that could follow this flow<br><br>It can, for example, this will contain a reference to the verification flow, created as part of the user's<br>registration or the token of the session.|
|session|[session](#schemasession)|true|none|A Session|
|session_token|string|false|none|The Session Token<br><br>A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization<br>Header:<br><br>Authorization: bearer ${session-token}<br><br>The session token is only issued for API flows, not for Browser flows!|

<h2 id="tocS_successfulNativeRegistration">successfulNativeRegistration</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulnativeregistration"></a>
<a id="schema_successfulNativeRegistration"></a>
<a id="tocSsuccessfulnativeregistration"></a>
<a id="tocssuccessfulnativeregistration"></a>

```json
{
  "continue_with": [
    {
      "action": "show_verification_ui",
      "flow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "url": "string",
        "verifiable_address": "string"
      }
    }
  ],
  "identity": {
    "created_at": "1970-01-01T00:00:00Z",
    "credentials": {
      "property1": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      },
      "property2": {
        "config": {},
        "created_at": "1970-01-01T00:00:00Z",
        "identifiers": [
          "string"
        ],
        "type": "password",
        "updated_at": "1970-01-01T00:00:00Z",
        "version": 0
      }
    },
    "external_id": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "metadata_admin": null,
    "metadata_public": null,
    "organization_id": "string",
    "recovery_addresses": [
      {
        "break_glass_for_organization": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "updated_at": "1970-01-01T00:00:00Z",
        "value": "string",
        "via": "string"
      }
    ],
    "region": "eu-central",
    "schema_id": "string",
    "schema_url": "string",
    "state": "active",
    "state_changed_at": "1970-01-01T00:00:00Z",
    "traits": null,
    "updated_at": "1970-01-01T00:00:00Z",
    "verifiable_addresses": [
      {
        "created_at": "2014-01-01T23:28:56.782Z",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "updated_at": "2014-01-01T23:28:56.782Z",
        "value": "string",
        "verified": true,
        "verified_at": "1970-01-01T00:00:00Z",
        "via": "email"
      }
    ]
  },
  "session": {
    "active": true,
    "authenticated_at": "1970-01-01T00:00:00Z",
    "authentication_methods": [
      {
        "aal": "aal0",
        "completed_at": "1970-01-01T00:00:00Z",
        "method": "password",
        "organization": "string",
        "provider": "string",
        "upstream_acr": "string",
        "upstream_amr": [
          "string"
        ]
      }
    ],
    "authenticator_assurance_level": "aal0",
    "devices": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "ip_address": "string",
        "location": "string",
        "user_agent": "string"
      }
    ],
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identity": {
      "created_at": "1970-01-01T00:00:00Z",
      "credentials": {
        "property1": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        },
        "property2": {
          "config": {},
          "created_at": "1970-01-01T00:00:00Z",
          "identifiers": [
            "string"
          ],
          "type": "password",
          "updated_at": "1970-01-01T00:00:00Z",
          "version": 0
        }
      },
      "external_id": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata_admin": null,
      "metadata_public": null,
      "organization_id": "string",
      "recovery_addresses": [
        {
          "break_glass_for_organization": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "updated_at": "1970-01-01T00:00:00Z",
          "value": "string",
          "via": "string"
        }
      ],
      "region": "eu-central",
      "schema_id": "string",
      "schema_url": "string",
      "state": "active",
      "state_changed_at": "1970-01-01T00:00:00Z",
      "traits": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "verifiable_addresses": [
        {
          "created_at": "2014-01-01T23:28:56.782Z",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "updated_at": "2014-01-01T23:28:56.782Z",
          "value": "string",
          "verified": true,
          "verified_at": "1970-01-01T00:00:00Z",
          "via": "email"
        }
      ]
    },
    "issued_at": "1970-01-01T00:00:00Z",
    "tokenized": "string"
  },
  "session_token": "string"
}
```

The Response for Registration Flows via API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continue_with|[[continueWith](#schemacontinuewith)]|false|none|Contains a list of actions, that could follow this flow<br><br>It can, for example, this will contain a reference to the verification flow, created as part of the user's<br>registration or the token of the session.|
|identity|[identity](#schemaidentity)|true|none|An [identity](https://www.ory.com/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.|
|session|[session](#schemasession)|false|none|A Session|
|session_token|string|false|none|The Session Token<br><br>This field is only set when the session hook is configured as a post-registration hook.<br><br>A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization<br>Header:<br><br>Authorization: bearer ${session-token}<br><br>The session token is only issued for API flows, not for Browser flows!|

<h2 id="tocS_tokenPagination">tokenPagination</h2>
<!-- backwards compatibility -->
<a id="schematokenpagination"></a>
<a id="schema_tokenPagination"></a>
<a id="tocStokenpagination"></a>
<a id="tocstokenpagination"></a>

```json
{
  "page_size": 250,
  "page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_size|integer(int64)|false|none|Items per page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|string|false|none|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|

<h2 id="tocS_tokenPaginationHeaders">tokenPaginationHeaders</h2>
<!-- backwards compatibility -->
<a id="schematokenpaginationheaders"></a>
<a id="schema_tokenPaginationHeaders"></a>
<a id="tocStokenpaginationheaders"></a>
<a id="tocstokenpaginationheaders"></a>

```json
{
  "link": "string",
  "x-total-count": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|The link header contains pagination links.<br><br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).<br><br>in: header|
|x-total-count|string|false|none|The total number of clients.<br><br>in: header|

<h2 id="tocS_uiContainer">uiContainer</h2>
<!-- backwards compatibility -->
<a id="schemauicontainer"></a>
<a id="schema_uiContainer"></a>
<a id="tocSuicontainer"></a>
<a id="tocsuicontainer"></a>

```json
{
  "action": "string",
  "messages": [
    {
      "context": {},
      "id": 0,
      "text": "string",
      "type": "info"
    }
  ],
  "method": "string",
  "nodes": [
    {
      "attributes": {
        "autocomplete": "email",
        "disabled": true,
        "label": {
          "context": {},
          "id": 0,
          "text": "string",
          "type": "info"
        },
        "maxlength": 0,
        "name": "string",
        "node_type": "input",
        "onclick": "string",
        "onclickTrigger": "oryWebAuthnRegistration",
        "onload": "string",
        "onloadTrigger": "oryWebAuthnRegistration",
        "options": [
          {
            "value": null
          }
        ],
        "pattern": "string",
        "required": true,
        "type": "text",
        "value": null
      },
      "group": "default",
      "messages": [
        {
          "context": {},
          "id": 0,
          "text": "string",
          "type": "info"
        }
      ],
      "meta": {
        "label": {
          "context": {},
          "id": 0,
          "text": "string",
          "type": "info"
        }
      },
      "type": "text"
    }
  ]
}
```

Container represents a HTML Form. The container can work with both HTTP Form and JSON requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|Action should be used as the form action URL `<form action="{{ .Action }}" method="post">`.|
|messages|[uiTexts](#schemauitexts)|false|none|none|
|method|string|true|none|Method is the form method (e.g. POST)|
|nodes|[uiNodes](#schemauinodes)|true|none|none|

<h2 id="tocS_uiNode">uiNode</h2>
<!-- backwards compatibility -->
<a id="schemauinode"></a>
<a id="schema_uiNode"></a>
<a id="tocSuinode"></a>
<a id="tocsuinode"></a>

```json
{
  "attributes": {
    "autocomplete": "email",
    "disabled": true,
    "label": {
      "context": {},
      "id": 0,
      "text": "string",
      "type": "info"
    },
    "maxlength": 0,
    "name": "string",
    "node_type": "input",
    "onclick": "string",
    "onclickTrigger": "oryWebAuthnRegistration",
    "onload": "string",
    "onloadTrigger": "oryWebAuthnRegistration",
    "options": [
      {
        "value": null
      }
    ],
    "pattern": "string",
    "required": true,
    "type": "text",
    "value": null
  },
  "group": "default",
  "messages": [
    {
      "context": {},
      "id": 0,
      "text": "string",
      "type": "info"
    }
  ],
  "meta": {
    "label": {
      "context": {},
      "id": 0,
      "text": "string",
      "type": "info"
    }
  },
  "type": "text"
}
```

Nodes are represented as HTML elements or their native UI equivalents. For example,
a node can be an `<img>` tag, or an `<input element>` but also `some plain text`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[uiNodeAttributes](#schemauinodeattributes)|true|none|none|
|group|string|true|none|Group specifies which group (e.g. password authenticator) this node belongs to.<br>default DefaultGroup<br>password PasswordGroup<br>oidc OpenIDConnectGroup<br>profile ProfileGroup<br>link LinkGroup<br>code CodeGroup<br>totp TOTPGroup<br>lookup_secret LookupGroup<br>webauthn WebAuthnGroup<br>passkey PasskeyGroup<br>identifier_first IdentifierFirstGroup<br>captcha CaptchaGroup<br>saml SAMLGroup<br>deviceauthn DeviceAuthnGroup|
|messages|[uiTexts](#schemauitexts)|true|none|none|
|meta|[uiNodeMeta](#schemauinodemeta)|true|none|This might include a label and other information that can optionally<br>be used to render UIs.|
|type|string|true|none|The node's type<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|

#### Enumerated Values

|Property|Value|
|---|---|
|group|default|
|group|password|
|group|oidc|
|group|profile|
|group|link|
|group|code|
|group|totp|
|group|lookup_secret|
|group|webauthn|
|group|passkey|
|group|identifier_first|
|group|captcha|
|group|saml|
|group|deviceauthn|
|type|text|
|type|input|
|type|img|
|type|a|
|type|script|
|type|div|

<h2 id="tocS_uiNodeAnchorAttributes">uiNodeAnchorAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodeanchorattributes"></a>
<a id="schema_uiNodeAnchorAttributes"></a>
<a id="tocSuinodeanchorattributes"></a>
<a id="tocsuinodeanchorattributes"></a>

```json
{
  "href": "string",
  "id": "string",
  "node_type": "a",
  "title": {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The link's href (destination) URL.<br><br>format: uri|
|id|string|true|none|A unique identifier|
|node_type|string|true|none|NodeType represents this node's types. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "a".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|
|title|[uiText](#schemauitext)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|node_type|a|

<h2 id="tocS_uiNodeAttributes">uiNodeAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodeattributes"></a>
<a id="schema_uiNodeAttributes"></a>
<a id="tocSuinodeattributes"></a>
<a id="tocsuinodeattributes"></a>

```json
{
  "autocomplete": "email",
  "disabled": true,
  "label": {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  },
  "maxlength": 0,
  "name": "string",
  "node_type": "input",
  "onclick": "string",
  "onclickTrigger": "oryWebAuthnRegistration",
  "onload": "string",
  "onloadTrigger": "oryWebAuthnRegistration",
  "options": [
    {
      "value": null
    }
  ],
  "pattern": "string",
  "required": true,
  "type": "text",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[uiNodeInputAttributes](#schemauinodeinputattributes)|false|none|InputAttributes represents the attributes of an input node|
|*oneOf*|[uiNodeTextAttributes](#schemauinodetextattributes)|false|none|none|
|*oneOf*|[uiNodeImageAttributes](#schemauinodeimageattributes)|false|none|none|
|*oneOf*|[uiNodeAnchorAttributes](#schemauinodeanchorattributes)|false|none|none|
|*oneOf*|[uiNodeScriptAttributes](#schemauinodescriptattributes)|false|none|none|
|*oneOf*|[uiNodeDivisionAttributes](#schemauinodedivisionattributes)|false|none|Division sections are used for interactive widgets that require a hook in the DOM / view.|

<h2 id="tocS_uiNodeDivisionAttributes">uiNodeDivisionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodedivisionattributes"></a>
<a id="schema_uiNodeDivisionAttributes"></a>
<a id="tocSuinodedivisionattributes"></a>
<a id="tocsuinodedivisionattributes"></a>

```json
{
  "class": "string",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "node_type": "div"
}
```

Division sections are used for interactive widgets that require a hook in the DOM / view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|false|none|A classname that should be rendered into the DOM.|
|data|object|false|none|Data is a map of key-value pairs that are passed to the division.<br><br>They may be used for `data-...` attributes.|
|id|string|true|none|A unique identifier|
|node_type|string|true|none|NodeType represents this node's type. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is "script".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|

#### Enumerated Values

|Property|Value|
|---|---|
|node_type|div|

<h2 id="tocS_uiNodeImageAttributes">uiNodeImageAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodeimageattributes"></a>
<a id="schema_uiNodeImageAttributes"></a>
<a id="tocSuinodeimageattributes"></a>
<a id="tocsuinodeimageattributes"></a>

```json
{
  "height": 0,
  "id": "string",
  "node_type": "img",
  "src": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int64)|true|none|Height of the image|
|id|string|true|none|A unique identifier|
|node_type|string|true|none|NodeType represents this node's types. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "img".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|
|src|string|true|none|The image's source URL.<br><br>format: uri|
|width|integer(int64)|true|none|Width of the image|

#### Enumerated Values

|Property|Value|
|---|---|
|node_type|img|

<h2 id="tocS_uiNodeInputAttributes">uiNodeInputAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodeinputattributes"></a>
<a id="schema_uiNodeInputAttributes"></a>
<a id="tocSuinodeinputattributes"></a>
<a id="tocsuinodeinputattributes"></a>

```json
{
  "autocomplete": "email",
  "disabled": true,
  "label": {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  },
  "maxlength": 0,
  "name": "string",
  "node_type": "input",
  "onclick": "string",
  "onclickTrigger": "oryWebAuthnRegistration",
  "onload": "string",
  "onloadTrigger": "oryWebAuthnRegistration",
  "options": [
    {
      "value": null
    }
  ],
  "pattern": "string",
  "required": true,
  "type": "text",
  "value": null
}
```

InputAttributes represents the attributes of an input node

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autocomplete|string|false|none|The autocomplete attribute for the input.<br>email InputAttributeAutocompleteEmail<br>tel InputAttributeAutocompleteTel<br>url InputAttributeAutocompleteUrl<br>current-password InputAttributeAutocompleteCurrentPassword<br>new-password InputAttributeAutocompleteNewPassword<br>one-time-code InputAttributeAutocompleteOneTimeCode<br>username InputAttributeAutocompleteUsername<br>username webauthn InputAttributeAutocompleteUsernameWebauthn|
|disabled|boolean|true|none|Sets the input's disabled field to true or false.|
|label|[uiText](#schemauitext)|false|none|none|
|maxlength|integer(int64)|false|none|MaxLength may contain the input's maximum length.|
|name|string|true|none|The input's element name.|
|node_type|string|true|none|NodeType represents this node's types. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "input".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|
|onclick|string|false|none|OnClick may contain javascript which should be executed on click. This is primarily<br>used for WebAuthn.<br><br>Deprecated: Using OnClick requires the use of eval() which is a security risk. Use OnClickTrigger instead.|
|onclickTrigger|string|false|none|OnClickTrigger may contain a WebAuthn trigger which should be executed on click.<br><br>The trigger maps to a JavaScript function provided by Ory, which triggers actions such as PassKey registration or login.<br>oryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration<br>oryWebAuthnLogin WebAuthnTriggersWebAuthnLogin<br>oryPasskeyLogin WebAuthnTriggersPasskeyLogin<br>oryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit<br>oryPasskeyRegistration WebAuthnTriggersPasskeyRegistration<br>oryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration|
|onload|string|false|none|OnLoad may contain javascript which should be executed on load. This is primarily<br>used for WebAuthn.<br><br>Deprecated: Using OnLoad requires the use of eval() which is a security risk. Use OnLoadTrigger instead.|
|onloadTrigger|string|false|none|OnLoadTrigger may contain a WebAuthn trigger which should be executed on load.<br><br>The trigger maps to a JavaScript function provided by Ory, which triggers actions such as PassKey registration or login.<br>oryWebAuthnRegistration WebAuthnTriggersWebAuthnRegistration<br>oryWebAuthnLogin WebAuthnTriggersWebAuthnLogin<br>oryPasskeyLogin WebAuthnTriggersPasskeyLogin<br>oryPasskeyLoginAutocompleteInit WebAuthnTriggersPasskeyLoginAutocompleteInit<br>oryPasskeyRegistration WebAuthnTriggersPasskeyRegistration<br>oryPasskeySettingsRegistration WebAuthnTriggersPasskeySettingsRegistration|
|options|[[uiNodeInputAttributesOption](#schemauinodeinputattributesoption)]|false|none|The allowed values for the input when the underlying JSON schema<br>defines an `enum`. When present, clients should render the field as a<br>select/dropdown rather than a free-form text input. When absent,<br>clients continue to render a plain text input, so this field is<br>backward compatible with UIs that do not look at it.|
|pattern|string|false|none|The input's pattern.|
|required|boolean|false|none|Mark this input field as required.|
|type|string|true|none|The input's element type.<br>text InputAttributeTypeText<br>password InputAttributeTypePassword<br>number InputAttributeTypeNumber<br>checkbox InputAttributeTypeCheckbox<br>hidden InputAttributeTypeHidden<br>email InputAttributeTypeEmail<br>tel InputAttributeTypeTel<br>submit InputAttributeTypeSubmit<br>button InputAttributeTypeButton<br>datetime-local InputAttributeTypeDateTimeLocal<br>date InputAttributeTypeDate<br>url InputAttributeTypeURI|
|value|object \| null|false|none|The input's value.|

#### Enumerated Values

|Property|Value|
|---|---|
|autocomplete|email|
|autocomplete|tel|
|autocomplete|url|
|autocomplete|current-password|
|autocomplete|new-password|
|autocomplete|one-time-code|
|autocomplete|username|
|autocomplete|username webauthn|
|node_type|input|
|onclickTrigger|oryWebAuthnRegistration|
|onclickTrigger|oryWebAuthnLogin|
|onclickTrigger|oryPasskeyLogin|
|onclickTrigger|oryPasskeyLoginAutocompleteInit|
|onclickTrigger|oryPasskeyRegistration|
|onclickTrigger|oryPasskeySettingsRegistration|
|onloadTrigger|oryWebAuthnRegistration|
|onloadTrigger|oryWebAuthnLogin|
|onloadTrigger|oryPasskeyLogin|
|onloadTrigger|oryPasskeyLoginAutocompleteInit|
|onloadTrigger|oryPasskeyRegistration|
|onloadTrigger|oryPasskeySettingsRegistration|
|type|text|
|type|password|
|type|number|
|type|checkbox|
|type|hidden|
|type|email|
|type|tel|
|type|submit|
|type|button|
|type|datetime-local|
|type|date|
|type|url|

<h2 id="tocS_uiNodeInputAttributesOption">uiNodeInputAttributesOption</h2>
<!-- backwards compatibility -->
<a id="schemauinodeinputattributesoption"></a>
<a id="schema_uiNodeInputAttributesOption"></a>
<a id="tocSuinodeinputattributesoption"></a>
<a id="tocsuinodeinputattributesoption"></a>

```json
{
  "value": null
}
```

Represents a single selectable value for an input whose JSON schema
defined an `enum`. The value is always a scalar JSON type (string, number,
or boolean) serialized verbatim from the schema. When present, clients
should render the parent input as a select/dropdown.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|The value that will be submitted when this option is picked.<br>It is serialized verbatim from the JSON schema `enum` entry, so it is<br>always a scalar JSON value (string, number, or boolean).|

<h2 id="tocS_uiNodeMeta">uiNodeMeta</h2>
<!-- backwards compatibility -->
<a id="schemauinodemeta"></a>
<a id="schema_uiNodeMeta"></a>
<a id="tocSuinodemeta"></a>
<a id="tocsuinodemeta"></a>

```json
{
  "label": {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  }
}
```

This might include a label and other information that can optionally
be used to render UIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|[uiText](#schemauitext)|false|none|none|

<h2 id="tocS_uiNodeScriptAttributes">uiNodeScriptAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodescriptattributes"></a>
<a id="schema_uiNodeScriptAttributes"></a>
<a id="tocSuinodescriptattributes"></a>
<a id="tocsuinodescriptattributes"></a>

```json
{
  "async": true,
  "crossorigin": "string",
  "id": "string",
  "integrity": "string",
  "node_type": "script",
  "nonce": "string",
  "referrerpolicy": "string",
  "src": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|async|boolean|true|none|The script async type|
|crossorigin|string|true|none|The script cross origin policy|
|id|string|true|none|A unique identifier|
|integrity|string|true|none|The script's integrity hash|
|node_type|string|true|none|NodeType represents this node's types. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is "script".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|
|nonce|string|true|none|Nonce for CSP<br><br>A nonce you may want to use to improve your Content Security Policy.<br>You do not have to use this value but if you want to improve your CSP<br>policies you may use it. You can also choose to use your own nonce value!|
|referrerpolicy|string|true|none|The script referrer policy|
|src|string|true|none|The script source|
|type|string|true|none|The script MIME type|

#### Enumerated Values

|Property|Value|
|---|---|
|node_type|script|

<h2 id="tocS_uiNodeTextAttributes">uiNodeTextAttributes</h2>
<!-- backwards compatibility -->
<a id="schemauinodetextattributes"></a>
<a id="schema_uiNodeTextAttributes"></a>
<a id="tocSuinodetextattributes"></a>
<a id="tocsuinodetextattributes"></a>

```json
{
  "id": "string",
  "node_type": "text",
  "text": {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique identifier|
|node_type|string|true|none|NodeType represents this node's types. It is a mirror of `node.type` and<br>is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is "text".<br>text Text<br>input Input<br>img Image<br>a Anchor<br>script Script<br>div Division|
|text|[uiText](#schemauitext)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|node_type|text|

<h2 id="tocS_uiNodes">uiNodes</h2>
<!-- backwards compatibility -->
<a id="schemauinodes"></a>
<a id="schema_uiNodes"></a>
<a id="tocSuinodes"></a>
<a id="tocsuinodes"></a>

```json
[
  {
    "attributes": {
      "autocomplete": "email",
      "disabled": true,
      "label": {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      },
      "maxlength": 0,
      "name": "string",
      "node_type": "input",
      "onclick": "string",
      "onclickTrigger": "oryWebAuthnRegistration",
      "onload": "string",
      "onloadTrigger": "oryWebAuthnRegistration",
      "options": [
        {
          "value": null
        }
      ],
      "pattern": "string",
      "required": true,
      "type": "text",
      "value": null
    },
    "group": "default",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "meta": {
      "label": {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    },
    "type": "text"
  }
]
```

<h2 id="tocS_uiText">uiText</h2>
<!-- backwards compatibility -->
<a id="schemauitext"></a>
<a id="schema_uiText"></a>
<a id="tocSuitext"></a>
<a id="tocsuitext"></a>

```json
{
  "context": {},
  "id": 0,
  "text": "string",
  "type": "info"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|The message's context. Useful when customizing messages.|
|id|[ID](#schemaid)|true|none|none|
|text|string|true|none|The message text. Written in american english.|
|type|string|true|none|The message type.<br>info Info<br>error Error<br>success Success|

#### Enumerated Values

|Property|Value|
|---|---|
|type|info|
|type|error|
|type|success|

<h2 id="tocS_uiTexts">uiTexts</h2>
<!-- backwards compatibility -->
<a id="schemauitexts"></a>
<a id="schema_uiTexts"></a>
<a id="tocSuitexts"></a>
<a id="tocsuitexts"></a>

```json
[
  {
    "context": {},
    "id": 0,
    "text": "string",
    "type": "info"
  }
]
```

<h2 id="tocS_unexpectedError">unexpectedError</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectederror"></a>
<a id="schema_unexpectedError"></a>
<a id="tocSunexpectederror"></a>
<a id="tocsunexpectederror"></a>

```json
"string"
```

<h2 id="tocS_updateIdentityBody">updateIdentityBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateidentitybody"></a>
<a id="schema_updateIdentityBody"></a>
<a id="tocSupdateidentitybody"></a>
<a id="tocsupdateidentitybody"></a>

```json
{
  "credentials": {
    "lookup_secret": {
      "config": {
        "codes": [
          {
            "code": "string",
            "used_at": "1970-01-01T00:00:00Z"
          }
        ]
      }
    },
    "oidc": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string",
            "use_auto_link": true
          }
        ]
      }
    },
    "passkey": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    },
    "password": {
      "config": {
        "hashed_password": "string",
        "password": "string",
        "use_password_migration_hook": true
      }
    },
    "saml": {
      "config": {
        "providers": [
          {
            "organization": "string",
            "provider": "string",
            "subject": "string"
          }
        ]
      }
    },
    "totp": {
      "config": {
        "totp_url": "string"
      }
    },
    "webauthn": {
      "config": {
        "credentials": [
          {
            "added_at": "1970-01-01T00:00:00Z",
            "attestation": {
              "authenticator_data": [
                0
              ],
              "client_dataJSON": [
                0
              ],
              "client_data_hash": [
                0
              ],
              "object": [
                0
              ],
              "public_key_algorithm": 0
            },
            "attestation_type": "string",
            "authenticator": {
              "aaguid": [
                0
              ],
              "clone_warning": true,
              "sign_count": 0
            },
            "display_name": "string",
            "flags": {
              "backup_eligible": true,
              "backup_state": true,
              "user_present": true,
              "user_verified": true
            },
            "id": [
              0
            ],
            "is_passwordless": true,
            "public_key": [
              0
            ],
            "transport": [
              "string"
            ]
          }
        ],
        "user_handle": [
          0
        ]
      }
    }
  },
  "external_id": "string",
  "metadata_admin": null,
  "metadata_public": null,
  "region": "eu-central",
  "schema_id": "string",
  "state": "active",
  "traits": {}
}
```

Update Identity Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[identityWithCredentials](#schemaidentitywithcredentials)|false|none|Create Identity and Import Credentials|
|external_id|string|false|none|ExternalID is an optional external ID of the identity. This is used to link<br>the identity to an external system. If set, the external ID must be unique<br>across all identities.|
|metadata_admin|object|false|none|Store metadata about the user which is only accessible through admin APIs such as `GET /admin/identities/<id>`.|
|metadata_public|object|false|none|Store metadata about the identity which the identity itself can see when calling for example the<br>session endpoint. Do not store sensitive information (e.g. credit score) about the identity in this field.|
|region|string|false|none|Region is the Ory Network region this identity is homed in. Optional;<br>omit to leave the current region unchanged.<br>eu-central EUCentral<br>asia-northeast AsiaNorthEast<br>us-east USEast<br>us-west USWest<br>eu EU<br>asia Asia<br>us US<br>global Global|
|schema_id|string|true|none|SchemaID is the ID of the JSON Schema to be used for validating the identity's traits. If set<br>will update the Identity's SchemaID.|
|state|string|true|none|State is the identity's state.<br>active StateActive<br>inactive StateInactive|
|traits|object|true|none|Traits represent an identity's traits. The identity is able to create, modify, and delete traits<br>in a self-service manner. The input will always be validated against the JSON Schema defined<br>in `schema_id`.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|eu-central|
|region|asia-northeast|
|region|us-east|
|region|us-west|
|region|eu|
|region|asia|
|region|us|
|region|global|
|state|active|
|state|inactive|

<h2 id="tocS_updateLoginFlowBody">updateLoginFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowbody"></a>
<a id="schema_updateLoginFlowBody"></a>
<a id="tocSupdateloginflowbody"></a>
<a id="tocsupdateloginflowbody"></a>

```json
{
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "password": "string",
  "password_identifier": "string",
  "transient_payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[updateLoginFlowWithPasswordMethod](#schemaupdateloginflowwithpasswordmethod)|false|none|Update Login Flow with Password Method|
|*oneOf*|[updateLoginFlowWithOidcMethod](#schemaupdateloginflowwithoidcmethod)|false|none|Update Login Flow with OpenID Connect Method|
|*oneOf*|[updateLoginFlowWithSamlMethod](#schemaupdateloginflowwithsamlmethod)|false|none|Update login flow using SAML|
|*oneOf*|[updateLoginFlowWithTotpMethod](#schemaupdateloginflowwithtotpmethod)|false|none|Update Login Flow with TOTP Method|
|*oneOf*|[updateLoginFlowWithWebAuthnMethod](#schemaupdateloginflowwithwebauthnmethod)|false|none|Update Login Flow with WebAuthn Method|
|*oneOf*|[updateLoginFlowWithLookupSecretMethod](#schemaupdateloginflowwithlookupsecretmethod)|false|none|Update Login Flow with Lookup Secret Method|
|*oneOf*|[updateLoginFlowWithCodeMethod](#schemaupdateloginflowwithcodemethod)|false|none|Update Login flow using the code method|
|*oneOf*|[updateLoginFlowWithPasskeyMethod](#schemaupdateloginflowwithpasskeymethod)|false|none|Update Login Flow with Passkey Method|
|*oneOf*|[updateLoginFlowWithIdentifierFirstMethod](#schemaupdateloginflowwithidentifierfirstmethod)|false|none|Update Login Flow with Multi-Step Method|

<h2 id="tocS_updateLoginFlowWithCodeMethod">updateLoginFlowWithCodeMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithcodemethod"></a>
<a id="schema_updateLoginFlowWithCodeMethod"></a>
<a id="tocSupdateloginflowwithcodemethod"></a>
<a id="tocsupdateloginflowwithcodemethod"></a>

```json
{
  "address": "string",
  "code": "string",
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "resend": "string",
  "transient_payload": {}
}
```

Update Login flow using the code method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address is the address to send the code to, in case that there are multiple addresses. This field<br>is only used in two-factor flows and is ineffective for passwordless flows.|
|code|string|false|none|Code is the 6 digits code sent to the user|
|csrf_token|string|true|none|CSRFToken is the anti-CSRF token|
|identifier|string|false|none|Identifier is the code identifier<br>The identifier requires that the user has already completed the registration or settings with code flow.|
|method|string|true|none|Method should be set to "code" when logging in using the code strategy.|
|resend|string|false|none|Resend is set when the user wants to resend the code|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateLoginFlowWithIdentifierFirstMethod">updateLoginFlowWithIdentifierFirstMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithidentifierfirstmethod"></a>
<a id="schema_updateLoginFlowWithIdentifierFirstMethod"></a>
<a id="tocSupdateloginflowwithidentifierfirstmethod"></a>
<a id="tocsupdateloginflowwithidentifierfirstmethod"></a>

```json
{
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "transient_payload": {}
}
```

Update Login Flow with Multi-Step Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|identifier|string|true|none|Identifier is the email or username of the user trying to log in.|
|method|string|true|none|Method should be set to "password" when logging in using the identifier and password strategy.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateLoginFlowWithLookupSecretMethod">updateLoginFlowWithLookupSecretMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithlookupsecretmethod"></a>
<a id="schema_updateLoginFlowWithLookupSecretMethod"></a>
<a id="tocSupdateloginflowwithlookupsecretmethod"></a>
<a id="tocsupdateloginflowwithlookupsecretmethod"></a>

```json
{
  "csrf_token": "string",
  "lookup_secret": "string",
  "method": "string"
}
```

Update Login Flow with Lookup Secret Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|lookup_secret|string|true|none|The lookup secret.|
|method|string|true|none|Method should be set to "lookup_secret" when logging in using the lookup_secret strategy.|

<h2 id="tocS_updateLoginFlowWithOidcMethod">updateLoginFlowWithOidcMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithoidcmethod"></a>
<a id="schema_updateLoginFlowWithOidcMethod"></a>
<a id="tocSupdateloginflowwithoidcmethod"></a>
<a id="tocsupdateloginflowwithoidcmethod"></a>

```json
{
  "csrf_token": "string",
  "id_token": "string",
  "id_token_nonce": "string",
  "method": "string",
  "provider": "string",
  "traits": {},
  "transient_payload": {},
  "upstream_parameters": {}
}
```

Update Login Flow with OpenID Connect Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|id_token|string|false|none|IDToken is an optional id token provided by an OIDC provider<br><br>If submitted, it is verified using the OIDC provider's public key set and the claims are used to populate<br>the OIDC credentials of the identity.<br>If the OIDC provider does not store additional claims (such as name, etc.) in the IDToken itself, you can use<br>the `traits` field to populate the identity's traits. Note, that Apple only includes the users email in the IDToken.<br><br>Supported providers are<br>Apple<br>Google|
|id_token_nonce|string|false|none|IDTokenNonce is the nonce, used when generating the IDToken.<br>If the provider supports nonce validation, the nonce will be validated against this value and required.|
|method|string|true|none|Method to use<br><br>This field must be set to `oidc` when using the oidc method.|
|provider|string|true|none|The provider to register with|
|traits|object|false|none|The identity traits. This is a placeholder for the registration flow.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|upstream_parameters|object|false|none|UpstreamParameters are the parameters that are passed to the upstream identity provider.<br><br>These parameters are optional and depend on what the upstream identity provider supports.<br>Supported parameters are:<br>`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.<br>`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.<br>`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.|

<h2 id="tocS_updateLoginFlowWithPasskeyMethod">updateLoginFlowWithPasskeyMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithpasskeymethod"></a>
<a id="schema_updateLoginFlowWithPasskeyMethod"></a>
<a id="tocSupdateloginflowwithpasskeymethod"></a>
<a id="tocsupdateloginflowwithpasskeymethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "passkey_login": "string"
}
```

Update Login Flow with Passkey Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|method|string|true|none|Method should be set to "passkey" when logging in using the Passkey strategy.|
|passkey_login|string|false|none|Login a WebAuthn Security Key<br><br>This must contain the ID of the WebAuthN connection.|

<h2 id="tocS_updateLoginFlowWithPasswordMethod">updateLoginFlowWithPasswordMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithpasswordmethod"></a>
<a id="schema_updateLoginFlowWithPasswordMethod"></a>
<a id="tocSupdateloginflowwithpasswordmethod"></a>
<a id="tocsupdateloginflowwithpasswordmethod"></a>

```json
{
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "password": "string",
  "password_identifier": "string",
  "transient_payload": {}
}
```

Update Login Flow with Password Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|identifier|string|true|none|Identifier is the email or username of the user trying to log in.|
|method|string|true|none|Method should be set to "password" when logging in using the identifier and password strategy.|
|password|string|true|none|The user's password.|
|password_identifier|string|false|none|Identifier is the email or username of the user trying to log in.<br>This field is deprecated!|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateLoginFlowWithSamlMethod">updateLoginFlowWithSamlMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithsamlmethod"></a>
<a id="schema_updateLoginFlowWithSamlMethod"></a>
<a id="tocSupdateloginflowwithsamlmethod"></a>
<a id="tocsupdateloginflowwithsamlmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "provider": "string",
  "transient_payload": {}
}
```

Update login flow using SAML

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|method|string|true|none|Method to use<br><br>This field must be set to `saml` when using the saml method.|
|provider|string|true|none|The provider to register with|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateLoginFlowWithTotpMethod">updateLoginFlowWithTotpMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithtotpmethod"></a>
<a id="schema_updateLoginFlowWithTotpMethod"></a>
<a id="tocSupdateloginflowwithtotpmethod"></a>
<a id="tocsupdateloginflowwithtotpmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "totp_code": "string",
  "transient_payload": {}
}
```

Update Login Flow with TOTP Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|method|string|true|none|Method should be set to "totp" when logging in using the TOTP strategy.|
|totp_code|string|true|none|The TOTP code.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateLoginFlowWithWebAuthnMethod">updateLoginFlowWithWebAuthnMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateloginflowwithwebauthnmethod"></a>
<a id="schema_updateLoginFlowWithWebAuthnMethod"></a>
<a id="tocSupdateloginflowwithwebauthnmethod"></a>
<a id="tocsupdateloginflowwithwebauthnmethod"></a>

```json
{
  "csrf_token": "string",
  "identifier": "string",
  "method": "string",
  "transient_payload": {},
  "webauthn_login": "string"
}
```

Update Login Flow with WebAuthn Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|identifier|string|true|none|Identifier is the email or username of the user trying to log in.|
|method|string|true|none|Method should be set to "webAuthn" when logging in using the WebAuthn strategy.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|webauthn_login|string|false|none|Login a WebAuthn Security Key<br><br>This must contain the ID of the WebAuthN connection.|

<h2 id="tocS_updateRecoveryFlowBody">updateRecoveryFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecoveryflowbody"></a>
<a id="schema_updateRecoveryFlowBody"></a>
<a id="tocSupdaterecoveryflowbody"></a>
<a id="tocsupdaterecoveryflowbody"></a>

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

Update Recovery Flow Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[updateRecoveryFlowWithLinkMethod](#schemaupdaterecoveryflowwithlinkmethod)|false|none|Update Recovery Flow with Link Method|
|*oneOf*|[updateRecoveryFlowWithCodeMethod](#schemaupdaterecoveryflowwithcodemethod)|false|none|Update Recovery Flow with Code Method|

<h2 id="tocS_updateRecoveryFlowWithCodeMethod">updateRecoveryFlowWithCodeMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecoveryflowwithcodemethod"></a>
<a id="schema_updateRecoveryFlowWithCodeMethod"></a>
<a id="tocSupdaterecoveryflowwithcodemethod"></a>
<a id="tocsupdaterecoveryflowwithcodemethod"></a>

```json
{
  "code": "string",
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "recovery_address": "string",
  "recovery_confirm_address": "string",
  "recovery_select_address": "string",
  "screen": "string",
  "transient_payload": {}
}
```

Update Recovery Flow with Code Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code from the recovery email<br><br>If you want to submit a code, use this field, but make sure to _not_ include the email field, as well.|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|email|string|false|none|The email address of the account to recover<br><br>If the email belongs to a valid account, a recovery email will be sent.<br><br>If you want to notify the email address if the account does not exist, see<br>the [notify_unknown_recipients flag](https://www.ory.com/docs/kratos/self-service/flows/account-recovery-password-reset#attempted-recovery-notifications)<br><br>If a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.<br><br>format: email|
|method|string|true|none|Method is the method that should be used for this recovery flow<br><br>Allowed values are `link` and `code`.<br>link RecoveryStrategyLink<br>code RecoveryStrategyCode|
|recovery_address|string|false|none|A recovery address that is registered for the user.<br>It can be an email, a phone number (to receive the code via SMS), etc.<br>Used in RecoveryV2.|
|recovery_confirm_address|string|false|none|If there are multiple recovery addresses registered for the user, and the initially provided address<br>is different from the address chosen when the choice (of masked addresses) is presented, then we need to make sure<br>that the user actually knows the full address to avoid information exfiltration, so we ask for the full address.<br>Used in RecoveryV2.|
|recovery_select_address|string|false|none|If there are multiple addresses registered for the user, a choice is presented and this field<br>stores the result of this choice.<br>Addresses are 'masked' (never sent in full to the client and shown partially in the UI) since at this point in the recovery flow,<br>the user has not yet proven that it knows the full address and we want to avoid<br>information exfiltration.<br>So for all intents and purposes, the value of this field should be treated as an opaque identifier.<br>Used in RecoveryV2.|
|screen|string|false|none|Set to "previous" to go back in the flow, meaningfully.<br>Used in RecoveryV2.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

#### Enumerated Values

|Property|Value|
|---|---|
|method|link|
|method|code|

<h2 id="tocS_updateRecoveryFlowWithLinkMethod">updateRecoveryFlowWithLinkMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecoveryflowwithlinkmethod"></a>
<a id="schema_updateRecoveryFlowWithLinkMethod"></a>
<a id="tocSupdaterecoveryflowwithlinkmethod"></a>
<a id="tocsupdaterecoveryflowwithlinkmethod"></a>

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

Update Recovery Flow with Link Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|email|string|true|none|Email to Recover<br><br>Needs to be set when initiating the flow. If the email is a registered<br>recovery email, a recovery link will be sent. If the email is not known,<br>an email with details on what happened will be sent instead.<br><br>format: email|
|method|string|true|none|Method is the method that should be used for this recovery flow<br><br>Allowed values are `link` and `code`<br>link RecoveryStrategyLink<br>code RecoveryStrategyCode|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

#### Enumerated Values

|Property|Value|
|---|---|
|method|link|
|method|code|

<h2 id="tocS_updateRegistrationFlowBody">updateRegistrationFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowbody"></a>
<a id="schema_updateRegistrationFlowBody"></a>
<a id="tocSupdateregistrationflowbody"></a>
<a id="tocsupdateregistrationflowbody"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update Registration Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[updateRegistrationFlowWithPasswordMethod](#schemaupdateregistrationflowwithpasswordmethod)|false|none|Update Registration Flow with Password Method|
|*oneOf*|[updateRegistrationFlowWithOidcMethod](#schemaupdateregistrationflowwithoidcmethod)|false|none|Update Registration Flow with OpenID Connect Method|
|*oneOf*|[updateRegistrationFlowWithSamlMethod](#schemaupdateregistrationflowwithsamlmethod)|false|none|Update registration flow using SAML|
|*oneOf*|[updateRegistrationFlowWithWebAuthnMethod](#schemaupdateregistrationflowwithwebauthnmethod)|false|none|Update Registration Flow with WebAuthn Method|
|*oneOf*|[updateRegistrationFlowWithCodeMethod](#schemaupdateregistrationflowwithcodemethod)|false|none|Update Registration Flow with Code Method|
|*oneOf*|[updateRegistrationFlowWithPasskeyMethod](#schemaupdateregistrationflowwithpasskeymethod)|false|none|Update Registration Flow with Passkey Method|
|*oneOf*|[updateRegistrationFlowWithProfileMethod](#schemaupdateregistrationflowwithprofilemethod)|false|none|Update Registration Flow with Profile Method|

<h2 id="tocS_updateRegistrationFlowWithCodeMethod">updateRegistrationFlowWithCodeMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithcodemethod"></a>
<a id="schema_updateRegistrationFlowWithCodeMethod"></a>
<a id="tocSupdateregistrationflowwithcodemethod"></a>
<a id="tocsupdateregistrationflowwithcodemethod"></a>

```json
{
  "code": "string",
  "csrf_token": "string",
  "method": "string",
  "resend": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update Registration Flow with Code Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The OTP Code sent to the user|
|csrf_token|string|false|none|The CSRF Token|
|method|string|true|none|Method to use<br><br>This field must be set to `code` when using the code method.|
|resend|string|false|none|Resend restarts the flow with a new code|
|traits|object|true|none|The identity's traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateRegistrationFlowWithOidcMethod">updateRegistrationFlowWithOidcMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithoidcmethod"></a>
<a id="schema_updateRegistrationFlowWithOidcMethod"></a>
<a id="tocSupdateregistrationflowwithoidcmethod"></a>
<a id="tocsupdateregistrationflowwithoidcmethod"></a>

```json
{
  "csrf_token": "string",
  "id_token": "string",
  "id_token_nonce": "string",
  "method": "string",
  "provider": "string",
  "traits": {},
  "transient_payload": {},
  "upstream_parameters": {}
}
```

Update Registration Flow with OpenID Connect Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|id_token|string|false|none|IDToken is an optional id token provided by an OIDC provider<br><br>If submitted, it is verified using the OIDC provider's public key set and the claims are used to populate<br>the OIDC credentials of the identity.<br>If the OIDC provider does not store additional claims (such as name, etc.) in the IDToken itself, you can use<br>the `traits` field to populate the identity's traits. Note, that Apple only includes the users email in the IDToken.<br><br>Supported providers are<br>Apple<br>Google|
|id_token_nonce|string|false|none|IDTokenNonce is the nonce, used when generating the IDToken.<br>If the provider supports nonce validation, the nonce will be validated against this value and is required.|
|method|string|true|none|Method to use<br><br>This field must be set to `oidc` when using the oidc method.|
|provider|string|true|none|The provider to register with|
|traits|object|false|none|The identity traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|upstream_parameters|object|false|none|UpstreamParameters are the parameters that are passed to the upstream identity provider.<br><br>These parameters are optional and depend on what the upstream identity provider supports.<br>Supported parameters are:<br>`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.<br>`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.<br>`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.|

<h2 id="tocS_updateRegistrationFlowWithPasskeyMethod">updateRegistrationFlowWithPasskeyMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithpasskeymethod"></a>
<a id="schema_updateRegistrationFlowWithPasskeyMethod"></a>
<a id="tocSupdateregistrationflowwithpasskeymethod"></a>
<a id="tocsupdateregistrationflowwithpasskeymethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "passkey_register": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update Registration Flow with Passkey Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to "passkey" when trying to add, update, or remove a Passkey.|
|passkey_register|string|false|none|Register a WebAuthn Security Key<br><br>It is expected that the JSON returned by the WebAuthn registration process<br>is included here.|
|traits|object|true|none|The identity's traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateRegistrationFlowWithPasswordMethod">updateRegistrationFlowWithPasswordMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithpasswordmethod"></a>
<a id="schema_updateRegistrationFlowWithPasswordMethod"></a>
<a id="tocSupdateregistrationflowwithpasswordmethod"></a>
<a id="tocsupdateregistrationflowwithpasswordmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update Registration Flow with Password Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|method|string|true|none|Method to use<br><br>This field must be set to `password` when using the password method.|
|password|string|true|none|Password to sign the user up with|
|traits|object|true|none|The identity's traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateRegistrationFlowWithProfileMethod">updateRegistrationFlowWithProfileMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithprofilemethod"></a>
<a id="schema_updateRegistrationFlowWithProfileMethod"></a>
<a id="tocSupdateregistrationflowwithprofilemethod"></a>
<a id="tocsupdateregistrationflowwithprofilemethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "screen": "credential-selection",
  "traits": {},
  "transient_payload": {}
}
```

Update Registration Flow with Profile Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The Anti-CSRF Token<br><br>This token is only required when performing browser flows.|
|method|string|true|none|Method<br><br>Should be set to profile when trying to update a profile.|
|screen|string|false|none|Screen requests navigation to a previous screen.<br><br>This must be set to credential-selection to go back to the credential<br>selection screen.<br>credential-selection RegistrationScreenCredentialSelection nolint:gosec // not a credential<br>previous RegistrationScreenPrevious|
|traits|object|true|none|Traits<br><br>The identity's traits.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

#### Enumerated Values

|Property|Value|
|---|---|
|screen|credential-selection|
|screen|previous|

<h2 id="tocS_updateRegistrationFlowWithSamlMethod">updateRegistrationFlowWithSamlMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithsamlmethod"></a>
<a id="schema_updateRegistrationFlowWithSamlMethod"></a>
<a id="tocSupdateregistrationflowwithsamlmethod"></a>
<a id="tocsupdateregistrationflowwithsamlmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "provider": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update registration flow using SAML

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|method|string|true|none|Method to use<br><br>This field must be set to `saml` when using the saml method.|
|provider|string|true|none|The provider to register with|
|traits|object|false|none|The identity traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateRegistrationFlowWithWebAuthnMethod">updateRegistrationFlowWithWebAuthnMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistrationflowwithwebauthnmethod"></a>
<a id="schema_updateRegistrationFlowWithWebAuthnMethod"></a>
<a id="tocSupdateregistrationflowwithwebauthnmethod"></a>
<a id="tocsupdateregistrationflowwithwebauthnmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "traits": {},
  "transient_payload": {},
  "webauthn_register": "string",
  "webauthn_register_displayname": "string"
}
```

Update Registration Flow with WebAuthn Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.|
|traits|object|true|none|The identity's traits|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|webauthn_register|string|false|none|Register a WebAuthn Security Key<br><br>It is expected that the JSON returned by the WebAuthn registration process<br>is included here.|
|webauthn_register_displayname|string|false|none|Name of the WebAuthn Security Key to be Added<br><br>A human-readable name for the security key which will be added.|

<h2 id="tocS_updateSettingsFlowBody">updateSettingsFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowbody"></a>
<a id="schema_updateSettingsFlowBody"></a>
<a id="tocSupdatesettingsflowbody"></a>
<a id="tocsupdatesettingsflowbody"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "transient_payload": {}
}
```

Update Settings Flow Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[updateSettingsFlowWithPasswordMethod](#schemaupdatesettingsflowwithpasswordmethod)|false|none|Update Settings Flow with Password Method|
|*oneOf*|[updateSettingsFlowWithProfileMethod](#schemaupdatesettingsflowwithprofilemethod)|false|none|Update Settings Flow with Profile Method|
|*oneOf*|[updateSettingsFlowWithOidcMethod](#schemaupdatesettingsflowwithoidcmethod)|false|none|Update Settings Flow with OpenID Connect Method|
|*oneOf*|[updateSettingsFlowWithSamlMethod](#schemaupdatesettingsflowwithsamlmethod)|false|none|Update settings flow using SAML|
|*oneOf*|[updateSettingsFlowWithTotpMethod](#schemaupdatesettingsflowwithtotpmethod)|false|none|Update Settings Flow with TOTP Method|
|*oneOf*|[updateSettingsFlowWithWebAuthnMethod](#schemaupdatesettingsflowwithwebauthnmethod)|false|none|Update Settings Flow with WebAuthn Method|
|*oneOf*|[updateSettingsFlowWithLookupMethod](#schemaupdatesettingsflowwithlookupmethod)|false|none|Update Settings Flow with Lookup Method|
|*oneOf*|[updateSettingsFlowWithPasskeyMethod](#schemaupdatesettingsflowwithpasskeymethod)|false|none|Update Settings Flow with Passkey Method|

<h2 id="tocS_updateSettingsFlowWithLookupMethod">updateSettingsFlowWithLookupMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithlookupmethod"></a>
<a id="schema_updateSettingsFlowWithLookupMethod"></a>
<a id="tocSupdatesettingsflowwithlookupmethod"></a>
<a id="tocsupdatesettingsflowwithlookupmethod"></a>

```json
{
  "csrf_token": "string",
  "lookup_secret_confirm": true,
  "lookup_secret_disable": true,
  "lookup_secret_regenerate": true,
  "lookup_secret_reveal": true,
  "method": "string",
  "transient_payload": {}
}
```

Update Settings Flow with Lookup Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|lookup_secret_confirm|boolean|false|none|If set to true will save the regenerated lookup secrets|
|lookup_secret_disable|boolean|false|none|Disables this method if true.|
|lookup_secret_regenerate|boolean|false|none|If set to true will regenerate the lookup secrets|
|lookup_secret_reveal|boolean|false|none|If set to true will reveal the lookup secrets|
|method|string|true|none|Method<br><br>Should be set to "lookup" when trying to add, update, or remove a lookup pairing.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateSettingsFlowWithOidcMethod">updateSettingsFlowWithOidcMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithoidcmethod"></a>
<a id="schema_updateSettingsFlowWithOidcMethod"></a>
<a id="tocSupdatesettingsflowwithoidcmethod"></a>
<a id="tocsupdatesettingsflowwithoidcmethod"></a>

```json
{
  "flow": "string",
  "link": "string",
  "method": "string",
  "traits": {},
  "transient_payload": {},
  "unlink": "string",
  "upstream_parameters": {}
}
```

Update Settings Flow with OpenID Connect Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flow|string|false|none|Flow ID is the flow's ID.<br><br>in: query|
|link|string|false|none|Link this provider<br><br>Either this or `unlink` must be set.<br><br>type: string<br>in: body|
|method|string|true|none|Method<br><br>Should be set to profile when trying to update a profile.|
|traits|object|false|none|The identity's traits<br><br>in: body|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|unlink|string|false|none|Unlink this provider<br><br>Either this or `link` must be set.<br><br>type: string<br>in: body|
|upstream_parameters|object|false|none|UpstreamParameters are the parameters that are passed to the upstream identity provider.<br><br>These parameters are optional and depend on what the upstream identity provider supports.<br>Supported parameters are:<br>`hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`.<br>`prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.<br>`acr_values` (string): The `acr_values` specifies the Authentication Context Class Reference values for the authorization request.|

<h2 id="tocS_updateSettingsFlowWithPasskeyMethod">updateSettingsFlowWithPasskeyMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithpasskeymethod"></a>
<a id="schema_updateSettingsFlowWithPasskeyMethod"></a>
<a id="tocSupdatesettingsflowwithpasskeymethod"></a>
<a id="tocsupdatesettingsflowwithpasskeymethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "passkey_remove": "string",
  "passkey_settings_register": "string"
}
```

Update Settings Flow with Passkey Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to "passkey" when trying to add, update, or remove a webAuthn pairing.|
|passkey_remove|string|false|none|Remove a WebAuthn Security Key<br><br>This must contain the ID of the WebAuthN connection.|
|passkey_settings_register|string|false|none|Register a WebAuthn Security Key<br><br>It is expected that the JSON returned by the WebAuthn registration process<br>is included here.|

<h2 id="tocS_updateSettingsFlowWithPasswordMethod">updateSettingsFlowWithPasswordMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithpasswordmethod"></a>
<a id="schema_updateSettingsFlowWithPasswordMethod"></a>
<a id="tocSupdatesettingsflowwithpasswordmethod"></a>
<a id="tocsupdatesettingsflowwithpasswordmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "password": "string",
  "transient_payload": {}
}
```

Update Settings Flow with Password Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to password when trying to update a password.|
|password|string|true|none|Password is the updated password|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateSettingsFlowWithProfileMethod">updateSettingsFlowWithProfileMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithprofilemethod"></a>
<a id="schema_updateSettingsFlowWithProfileMethod"></a>
<a id="tocSupdatesettingsflowwithprofilemethod"></a>
<a id="tocsupdatesettingsflowwithprofilemethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "traits": {},
  "transient_payload": {}
}
```

Update Settings Flow with Profile Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The Anti-CSRF Token<br><br>This token is only required when performing browser flows.|
|method|string|true|none|Method<br><br>Should be set to profile when trying to update a profile.|
|traits|object|true|none|Traits<br><br>The identity's traits.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateSettingsFlowWithSamlMethod">updateSettingsFlowWithSamlMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithsamlmethod"></a>
<a id="schema_updateSettingsFlowWithSamlMethod"></a>
<a id="tocSupdatesettingsflowwithsamlmethod"></a>
<a id="tocsupdatesettingsflowwithsamlmethod"></a>

```json
{
  "csrf_token": "string",
  "flow": "string",
  "link": "string",
  "method": "string",
  "traits": {},
  "transient_payload": {},
  "unlink": "string"
}
```

Update settings flow using SAML

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|The CSRF Token|
|flow|string|false|none|Flow ID is the flow's ID.<br><br>in: query|
|link|string|false|none|Link this provider<br><br>Either this or `unlink` must be set.<br><br>type: string<br>in: body|
|method|string|true|none|Method<br><br>Should be set to saml when trying to update a profile.|
|traits|object|false|none|The identity's traits<br><br>in: body|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|unlink|string|false|none|Unlink this provider<br><br>Either this or `link` must be set.<br><br>type: string<br>in: body|

<h2 id="tocS_updateSettingsFlowWithTotpMethod">updateSettingsFlowWithTotpMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithtotpmethod"></a>
<a id="schema_updateSettingsFlowWithTotpMethod"></a>
<a id="tocSupdatesettingsflowwithtotpmethod"></a>
<a id="tocsupdatesettingsflowwithtotpmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "totp_code": "string",
  "totp_unlink": true,
  "transient_payload": {}
}
```

Update Settings Flow with TOTP Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to "totp" when trying to add, update, or remove a totp pairing.|
|totp_code|string|false|none|ValidationTOTP must contain a valid TOTP based on the|
|totp_unlink|boolean|false|none|UnlinkTOTP if true will remove the TOTP pairing,<br>effectively removing the credential. This can be used<br>to set up a new TOTP device.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

<h2 id="tocS_updateSettingsFlowWithWebAuthnMethod">updateSettingsFlowWithWebAuthnMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesettingsflowwithwebauthnmethod"></a>
<a id="schema_updateSettingsFlowWithWebAuthnMethod"></a>
<a id="tocSupdatesettingsflowwithwebauthnmethod"></a>
<a id="tocsupdatesettingsflowwithwebauthnmethod"></a>

```json
{
  "csrf_token": "string",
  "method": "string",
  "transient_payload": {},
  "webauthn_register": "string",
  "webauthn_register_displayname": "string",
  "webauthn_remove": "string"
}
```

Update Settings Flow with WebAuthn Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|CSRFToken is the anti-CSRF token|
|method|string|true|none|Method<br><br>Should be set to "webauthn" when trying to add, update, or remove a webAuthn pairing.|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|
|webauthn_register|string|false|none|Register a WebAuthn Security Key<br><br>It is expected that the JSON returned by the WebAuthn registration process<br>is included here.|
|webauthn_register_displayname|string|false|none|Name of the WebAuthn Security Key to be Added<br><br>A human-readable name for the security key which will be added.|
|webauthn_remove|string|false|none|Remove a WebAuthn Security Key<br><br>This must contain the ID of the WebAuthN connection.|

<h2 id="tocS_updateVerificationFlowBody">updateVerificationFlowBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateverificationflowbody"></a>
<a id="schema_updateVerificationFlowBody"></a>
<a id="tocSupdateverificationflowbody"></a>
<a id="tocsupdateverificationflowbody"></a>

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

Update Verification Flow Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[updateVerificationFlowWithLinkMethod](#schemaupdateverificationflowwithlinkmethod)|false|none|Update Verification Flow with Link Method|
|*oneOf*|[updateVerificationFlowWithCodeMethod](#schemaupdateverificationflowwithcodemethod)|false|none|none|

<h2 id="tocS_updateVerificationFlowWithCodeMethod">updateVerificationFlowWithCodeMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateverificationflowwithcodemethod"></a>
<a id="schema_updateVerificationFlowWithCodeMethod"></a>
<a id="tocSupdateverificationflowwithcodemethod"></a>
<a id="tocsupdateverificationflowwithcodemethod"></a>

```json
{
  "code": "string",
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code from the recovery email<br><br>If you want to submit a code, use this field, but make sure to _not_ include the email field, as well.|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|email|string|false|none|The email address or phone number to verify<br><br>If the provided address belongs to a valid account, a verification email or SMS will be sent.<br><br>If you want to notify the email address if the account does not exist, see<br>the [notify_unknown_recipients flag](https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation#attempted-verification-notifications)<br><br>If a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.|
|method|string|true|none|Method is the method that should be used for this verification flow<br><br>Allowed values are `link` and `code`.<br>link VerificationStrategyLink<br>code VerificationStrategyCode|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

#### Enumerated Values

|Property|Value|
|---|---|
|method|link|
|method|code|

<h2 id="tocS_updateVerificationFlowWithLinkMethod">updateVerificationFlowWithLinkMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupdateverificationflowwithlinkmethod"></a>
<a id="schema_updateVerificationFlowWithLinkMethod"></a>
<a id="tocSupdateverificationflowwithlinkmethod"></a>
<a id="tocsupdateverificationflowwithlinkmethod"></a>

```json
{
  "csrf_token": "string",
  "email": "string",
  "method": "link",
  "transient_payload": {}
}
```

Update Verification Flow with Link Method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|Sending the anti-csrf token is only required for browser login flows.|
|email|string|true|none|Email to Verify<br><br>Needs to be set when initiating the flow. If the email is a registered<br>verification email, a verification link will be sent. If the email is not known,<br>a email with details on what happened will be sent instead.<br><br>format: email|
|method|string|true|none|Method is the method that should be used for this verification flow<br><br>Allowed values are `link` and `code`<br>link VerificationStrategyLink<br>code VerificationStrategyCode|
|transient_payload|object|false|none|Transient data to pass along to any webhooks|

#### Enumerated Values

|Property|Value|
|---|---|
|method|link|
|method|code|

<h2 id="tocS_verifiableIdentityAddress">verifiableIdentityAddress</h2>
<!-- backwards compatibility -->
<a id="schemaverifiableidentityaddress"></a>
<a id="schema_verifiableIdentityAddress"></a>
<a id="tocSverifiableidentityaddress"></a>
<a id="tocsverifiableidentityaddress"></a>

```json
{
  "created_at": "2014-01-01T23:28:56.782Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "updated_at": "2014-01-01T23:28:56.782Z",
  "value": "string",
  "verified": true,
  "verified_at": "1970-01-01T00:00:00Z",
  "via": "email"
}
```

VerifiableAddress is an identity's verifiable address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|When this entry was created|
|id|string(uuid)|false|none|The ID|
|status|[identityVerifiableAddressStatus](#schemaidentityverifiableaddressstatus)|true|none|VerifiableAddressStatus must not exceed 16 characters as that is the limitation in the SQL Schema|
|updated_at|string(date-time)|false|none|When this entry was last updated|
|value|string|true|none|The address value<br><br>example foo@user.com|
|verified|boolean|true|none|Indicates if the address has already been verified|
|verified_at|[nullTime](#schemanulltime-1)|false|none|none|
|via|string|true|none|The delivery method|

#### Enumerated Values

|Property|Value|
|---|---|
|via|email|
|via|sms|

<h2 id="tocS_verificationFlow">verificationFlow</h2>
<!-- backwards compatibility -->
<a id="schemaverificationflow"></a>
<a id="schema_verificationFlow"></a>
<a id="tocSverificationflow"></a>
<a id="tocsverificationflow"></a>

```json
{
  "active": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issued_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "return_to": "string",
  "state": null,
  "transient_payload": {},
  "type": "string",
  "ui": {
    "action": "string",
    "messages": [
      {
        "context": {},
        "id": 0,
        "text": "string",
        "type": "info"
      }
    ],
    "method": "string",
    "nodes": [
      {
        "attributes": {
          "autocomplete": "email",
          "disabled": true,
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          },
          "maxlength": 0,
          "name": "string",
          "node_type": "input",
          "onclick": "string",
          "onclickTrigger": "oryWebAuthnRegistration",
          "onload": "string",
          "onloadTrigger": "oryWebAuthnRegistration",
          "options": [
            {
              "value": null
            }
          ],
          "pattern": "string",
          "required": true,
          "type": "text",
          "value": null
        },
        "group": "default",
        "messages": [
          {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        ],
        "meta": {
          "label": {
            "context": {},
            "id": 0,
            "text": "string",
            "type": "info"
          }
        },
        "type": "text"
      }
    ]
  }
}
```

Used to verify an out-of-band communication
channel such as an email address or a phone number.

For more information head over to: https://www.ory.com/docs/kratos/self-service/flows/verify-email-account-activation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|Active, if set, contains the registration method that is being used. It is initially<br>not set.|
|expires_at|string(date-time)|false|none|ExpiresAt is the time (UTC) when the request expires. If the user still wishes to verify the address,<br>a new request has to be initiated.|
|id|string(uuid)|true|none|ID represents the request's unique ID. When performing the verification flow, this<br>represents the id in the verify ui's query parameter: http://<selfservice.flows.verification.ui_url>?request=<id><br><br>type: string<br>format: uuid|
|issued_at|string(date-time)|false|none|IssuedAt is the time (UTC) when the request occurred.|
|request_url|string|false|none|RequestURL is the initial URL that was requested from Ory Kratos. It can be used<br>to forward information contained in the URL's path or query for example.|
|return_to|string|false|none|ReturnTo contains the requested return_to URL.|
|state|object|true|none|State represents the state of this request:<br><br>choose_method: ask the user to choose a method (e.g. verify your email)<br>sent_email: the email has been sent to the user<br>passed_challenge: the request was successful and the verification challenge was passed.|
|transient_payload|object|false|none|TransientPayload is used to pass data from the verification flow to hooks and email templates|
|type|[selfServiceFlowType](#schemaselfserviceflowtype)|true|none|The flow type can either be `api` or `browser`.|
|ui|[uiContainer](#schemauicontainer)|true|none|Container represents a HTML Form. The container can work with both HTTP Form and JSON requests|

<h2 id="tocS_verificationFlowState">verificationFlowState</h2>
<!-- backwards compatibility -->
<a id="schemaverificationflowstate"></a>
<a id="schema_verificationFlowState"></a>
<a id="tocSverificationflowstate"></a>
<a id="tocsverificationflowstate"></a>

```json
"choose_method"
```

The experimental state represents the state of a verification flow. This field is EXPERIMENTAL and subject to change!

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Version is the service's version.|

<h2 id="tocS_webAuthnJavaScript">webAuthnJavaScript</h2>
<!-- backwards compatibility -->
<a id="schemawebauthnjavascript"></a>
<a id="schema_webAuthnJavaScript"></a>
<a id="tocSwebauthnjavascript"></a>
<a id="tocswebauthnjavascript"></a>

```json
"string"
```
