import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z
        .object({
          success: z.boolean().exactOptional(),
          error: z.string().exactOptional(),
          errorType: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
      examples: {
        'Permission Error': {
          value: {
            success: false,
            error: 'User does not have the permissions required for this action',
            errorType: 'error-forbidden',
          },
        },
      },
    },
  },
}

const XUserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      example: 'CkCPNctrgCDfmWLqC',
      description: 'The user ID.',
    },
  })

const XAuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      example: '1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE',
      description: 'The authentication token.',
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const CountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'count',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      schema: {},
      description:
        'List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const X_2faCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'x-2fa-code',
      in: 'header',
      schema: { type: 'string' },
      description:
        'The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.',
      required: false,
    },
  })

const X_2faMethodParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'x-2fa-method',
      in: 'header',
      schema: { type: 'string' },
      description:
        'Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.',
      required: false,
    },
  })

export const getApiV1SettingsPublicRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings.public',
  tags: ['Settings'],
  summary: 'Get Public Settings',
  description:
    'List all public settings. Learn how this can be used in configuring your workspace in this <a href="https://docs.rocket.chat/docs/manage-settings-using-environmental-variables" target="_blank">guide</a>.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Removed the `fields` and `query` parameters.       |\n|7.0.0            | Added the `_id` query parameter for filtering.|',
  operationId: 'get-api-v1-settings.public',
  request: {
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description: 'Filter by the `_id` of the settings.',
            schema: { type: 'string' },
            example: 'Site_Url, LDAP_Enable',
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the settings in ascending or descending order. By default, settings are sorted by setting ID in ascending order. The sort options are:\n * `createdAt`: Sort by creation date. `sort={"createdAt": 1}` or `sort={"createdAt": -1}`\n * `_id`: Sort by setting ID. `sort={"_id": 1}` or `sort={"_id": -1}`',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      value: z.xor([z.boolean(), z.string()]).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                settings: [{ _id: 'API_Embed', value: true }],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1SettingsOauthRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings.oauth',
  tags: ['Settings'],
  summary: 'Get OAuth Settings',
  description:
    'Lists the <a href="https://docs.rocket.chat/docs/oauth" target="_blank">login service</a> configurations available to login clients. This public endpoint does not require authentication.\n\nFor SAML, the response contains the stored service configuration but excludes the `secret` object. `hideButtonOnMobile` is `true` for SAML: mobile and desktop apps can open SAML authentication in the system browser and receive the credential through the `rocketchat://auth` link.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Updated `hideButtonOnMobile` for the SAML system-browser login flow. |\n|0.64.0            | Renamed field `appId` to `clientId` and added flag `custom` to indicate whether the OAuth service is customized and fix `id` inconsistence (set all cases to `_id`)       |\n|0.63.0            | Added       |',
  operationId: 'get-api-v1-settings.oauth',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              services: z.array(
                z
                  .object({
                    _id: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    clientId: z.string().exactOptional(),
                    buttonLabelText: z.string().exactOptional(),
                    buttonColor: z.string().exactOptional(),
                    buttonLabelColor: z.string().exactOptional(),
                    custom: z.boolean().exactOptional(),
                    service: z.string().exactOptional(),
                    serverURL: z.string().exactOptional(),
                    tokenPath: z.string().exactOptional(),
                    identityPath: z.string().exactOptional(),
                    authorizePath: z.string().exactOptional(),
                    scope: z.string().exactOptional(),
                    loginStyle: z.string().exactOptional(),
                    tokenSentVia: z.string().exactOptional(),
                    identityTokenSentVia: z.string().exactOptional(),
                    usernameField: z.string().exactOptional(),
                    mergeUsers: z.boolean().exactOptional(),
                    hideButtonOnMobile: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          "Whether mobile clients should hide the service's login button. For SAML, this is always `true`.",
                      }),
                    clientConfig: z
                      .object({
                        provider: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The configured SAML provider name.' }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Client configuration for the login service.',
                        required: [],
                      }),
                    entryPoint: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The URL where Rocket.Chat sends SAML authentication requests.',
                      }),
                    idpSLORedirectURL: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The identity provider URL where Rocket.Chat sends SAML logout requests.',
                      }),
                    usernameNormalize: z.enum(['None', 'Lowercase']).exactOptional(),
                    immutableProperty: z.enum(['Username', 'EMail']).exactOptional(),
                    generateUsername: z.boolean().exactOptional(),
                    debug: z.boolean().exactOptional(),
                    nameOverwrite: z.boolean().exactOptional(),
                    mailOverwrite: z.boolean().exactOptional(),
                    issuer: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The SAML service provider issuer.' }),
                    logoutBehaviour: z.enum(['SAML', 'Local']).exactOptional(),
                    defaultUserRole: z.string().exactOptional(),
                    signatureValidationType: z
                      .enum(['All', 'Response', 'Assertion', 'Either', 'None'])
                      .exactOptional(),
                    validateLogoutRequestSignature: z.boolean().exactOptional(),
                    validateLogoutResponseSignature: z.boolean().exactOptional(),
                    userDataFieldMap: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'A JSON string that maps SAML user fields to Rocket.Chat user fields.',
                      }),
                    allowedClockDrift: z.number().exactOptional(),
                    channelsAttributeUpdate: z.boolean().exactOptional(),
                    includePrivateChannelsInUpdate: z.boolean().exactOptional(),
                    customAuthnContext: z.string().exactOptional(),
                    authnContextComparison: z
                      .enum(['better', 'exact', 'maximum', 'minimum'])
                      .exactOptional(),
                    identifierFormat: z.string().exactOptional(),
                    nameIDPolicyTemplate: z.string().exactOptional(),
                    authnContextTemplate: z.string().exactOptional(),
                    authRequestTemplate: z.string().exactOptional(),
                    logoutResponseTemplate: z.string().exactOptional(),
                    logoutRequestTemplate: z.string().exactOptional(),
                    metadataCertificateTemplate: z.string().exactOptional(),
                    metadataTemplate: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
              success: z.literal(true),
            })
            .openapi({ required: ['services', 'success'] }),
          examples: {
            'Success Example': {
              value: {
                services: [
                  {
                    _id: 'iJeY7x4wxnh2p3pLr',
                    name: 'github',
                    clientId: 'test',
                    buttonLabelText: '',
                    buttonColor: '',
                    buttonLabelColor: '',
                    custom: false,
                  },
                  {
                    _id: '5RQ4SBL3NuZKsqxaF',
                    service: 'test',
                    clientId: 'test',
                    custom: true,
                    serverURL: '/test/test',
                    tokenPath: '/oauth/token',
                    identityPath: '/me',
                    authorizePath: '/oauth/authorize',
                    scope: 'openid',
                    buttonLabelText: 'test',
                    buttonLabelColor: '#FFFFFF',
                    loginStyle: 'popup',
                    buttonColor: '#13679A',
                    tokenSentVia: 'payload',
                    identityTokenSentVia: 'default',
                    usernameField: 'dfsgdfgdfgdfgsd',
                    mergeUsers: true,
                  },
                  {
                    _id: '8kEcbW7Yz3zJnHgqL',
                    service: 'saml',
                    buttonLabelText: 'Sign in with SAML',
                    buttonColor: '#13679A',
                    buttonLabelColor: '#FFFFFF',
                    clientConfig: { provider: 'my-saml-provider' },
                    entryPoint: 'https://idp.example.com/sso/saml',
                    idpSLORedirectURL: 'https://idp.example.com/slo/saml',
                    issuer: 'https://chat.example.com/_saml/metadata/my-saml-provider',
                    userDataFieldMap: '{"username":"username","email":"email","name":"cn"}',
                    hideButtonOnMobile: true,
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1SettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings',
  tags: ['Settings'],
  summary: 'Get Private Settings',
  description:
    'List all private settings. Learn how this can be used in configuring your server in this <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">guide</a>.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Removed the `fields` and `query` parameters.       |',
  operationId: 'get-api-v1-settings',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      includeDefaults: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'includeDefaults',
            description:
              'When set to true, it fetches both the current value and the default value (packageValue) of the settings',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      value: z.xor([z.boolean(), z.string()]).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                settings: [
                  { _id: 'API_Allow_Infinite_Count', value: true },
                  { _id: 'API_CORS_Origin', value: '*' },
                ],
                count: 50,
                offset: 0,
                total: 299,
                success: true,
              },
            },
            'success example with query parameter': {
              value: {
                settings: [
                  {
                    _id: 'API_Allow_Infinite_Count',
                    value: true,
                    packageValue: true,
                    enterprise: false,
                  },
                  {
                    _id: 'API_Apply_permission_view-outside-room_on_users-list',
                    value: false,
                    packageValue: false,
                    enterprise: false,
                  },
                  { _id: 'API_CORS_Origin', value: '*', packageValue: '*', enterprise: false },
                ],
                count: 3,
                offset: 0,
                total: 10,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1SettingsRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings',
  tags: ['Settings'],
  summary: 'Update Settings in Bulk',
  description:
    'Updates multiple private workspace settings in a single request. \n\nPermission required: `edit-privileged-setting`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.6.0            | Added       |',
  operationId: 'post-api-v1-settings',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .array(
                  z
                    .object({
                      _id: z.string().openapi({ description: 'The unique ID of the setting.' }),
                      value: z
                        .any()
                        .openapi({
                          description:
                            'The value to set for the setting. The accepted type depends on the setting.',
                        }),
                    })
                    .openapi({ required: ['_id', 'value'] }),
                )
                .min(1)
                .openapi({ description: 'The list of settings to update.' }),
            })
            .openapi({ required: ['settings'] }),
          examples: {
            Example: {
              value: {
                settings: [
                  { _id: 'API_Allow_Infinite_Count', value: false },
                  { _id: 'API_CORS_Origin', value: 'https://example.com' },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'settings' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  settingIds: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'Editing settings is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: {
                  method: 'saveSettings',
                  settingIds: ['API_Allow_Infinite_Count', 'API_CORS_Origin'],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1SettingsAddCustomOAuthRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings.addCustomOAuth',
  tags: ['Settings'],
  summary: 'Add Custom OAuth',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nAdd a <a href="https://docs.rocket.chat/docs/oauth#add-custom-oauth" target="_blank">custom OAuth integration</a> to your workspace. Two-factor authentication is required.\n\nFrom Rocket.Chat 9.0.0, Custom OAuth is available on Starter workspaces and on all premium plans (Commercial, Government, and Defense). It is not available on Community workspaces, where this endpoint returns `error-action-not-allowed`. See <a href="https://docs.rocket.chat/docs/our-plans" target="_blank">Our Plans</a> for details.\n\n**Permission required**:\n- `add-oauth-service`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0            | Added premium plan availability details.       |',
  operationId: 'post-api-v1-settings.addCustomOAuth',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'The name of the custom OAuth method that you want to add.',
                  example: 'MyCustomOAuth',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing name param': {
              value: {
                success: false,
                error: 'The parameter "name" is required [error-name-param-not-provided]',
                errorType: 'error-name-param-not-provided',
              },
            },
            'Not available on Community workspaces': {
              value: {
                success: false,
                error: 'This is an enterprise feature [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1SettingsRemoveCustomOAuthRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings.removeCustomOAuth',
  tags: ['Settings'],
  summary: 'Remove Custom OAuth',
  description:
    'Remove a <a href=" https://docs.rocket.chat/docs/oauth#add-custom-oauth" target="_blank">custom OAuth integration</a> from your workspace. All the `Accounts_OAuth_Custom-<Name>-*` settings of the named service are deleted. This endpoint requires 2FA.\n\nIt replaces the `removeOAuthService` real-time method, which was removed in 9.0.0.\n\n**Permission required**:\n- `add-oauth-service`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added       |',
  operationId: 'post-api-v1-settings.removeCustomOAuth',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .openapi({
                  description: 'The name of the custom OAuth service that you want to remove.',
                  example: 'myProvider',
                }),
            })
            .openapi({ required: ['name'] }),
          examples: { Example: { value: { name: 'myProvider' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing name param': {
              value: {
                success: false,
                error: 'The parameter "name" is required [error-name-param-not-provided]',
                errorType: 'error-name-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1SettingsRefreshOAuthServicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings.refreshOAuthServices',
  tags: ['Settings'],
  summary: 'Refresh OAuth Services',
  description:
    'Reload the workspace <a href=" https://docs.rocket.chat/docs/oauth" target="_blank">OAuth service</a> configurations from the current settings. Use it after adding or removing a custom OAuth service so that the login services are rebuilt. This endpoint takes no body and requires 2FA.\n\nIt replaces the `refreshOAuthService` real-time method, which was removed in 9.0.0.\n\n**Permission required**:\n- `add-oauth-service`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added       |',
  operationId: 'post-api-v1-settings.refreshOAuthServices',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1SettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings/{_id}',
  tags: ['Settings'],
  summary: 'Get Setting',
  description:
    'Get details of a setting by ID.\nPermission required: `view-privileged-setting`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.42.0            | Added       |',
  operationId: 'get-api-v1-settings-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: '_id',
            in: 'path',
            required: true,
            description: 'The unique ID of the setting that you want to update or fetch.',
          },
        }),
    }),
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              value: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { _id: 'Livechat_enabled', value: false, success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1SettingsIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings/{_id}',
  tags: ['Settings'],
  summary: 'Update Setting',
  description:
    "Permission required: `edit-privileged-setting`\n\nThe `_id` of a setting is the first argument of the `RocketChat.settings.add` method used in `Rocket.Chat/packages/rocketchat-lib/server/startup/settings.js` (among other files).\n\nFor example, the following code in `settings.js` file:\n  ```json\n  this.add('Accounts_AllowAnonymousRead', false, {\n    type: 'boolean',\n    public: true  });\n  ```\n  This means that the setting labeled `Allow anonymous read` in the section `Accounts` has `_id` equal to `Accounts_AllowAnonymousRead`. The second argument is the default value (false). The third argument specifies the variable's type and whether it is public, hidden, and so on.\n\n  To set a color, you can send:\n  ```json\n  { value: '<color-code>',\n    editor: 'color' }\n  ```\n\n  And also to trigger a action-button, use:\n  ```json\n  { execute: true }\n  ```\n  ### Changelog\n  | Version      | Description |\n  | ---------------- | ------------|\n  |0.65.0            | Added option to set a color and trigger an action       |\n  |0.42.0            | Added       |",
  operationId: 'post-api-v1-settings-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: '_id',
            in: 'path',
            required: true,
            description: 'The unique ID of the setting that you want to update or fetch.',
          },
        }),
    }),
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z
                .string()
                .openapi({
                  description: 'The value to update the setting.',
                  example: 'My Workspace',
                }),
              color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The color code to update the setting.',
                  example: '#04436A',
                }),
              editor: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The editor key, with color value. Required, if color was set.',
                  example: 'color',
                }),
              execute: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'To trigger a action-button.', example: true }),
            })
            .openapi({ required: ['value'] }),
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1SetupWizardParametersRoute = createRoute({
  method: 'get',
  path: '/api/v1/setupWizard.parameters',
  tags: ['Settings'],
  summary: 'Get Setup Wizard Parameters',
  description:
    'Returns the settings used by the setup wizard and whether the workspace is already registered with Rocket.Chat Cloud.\n\nThis endpoint does not require authentication, because the setup wizard runs before the first administrator account exists. \nIf the setup wizard is completed, the endpoint returns a `403` response. \n\nThis endpoint replaces the `getSetupWizardParameters` Realtime API method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-setupWizard.parameters',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      value: z.any().exactOptional(),
                      values: z
                        .array(
                          z
                            .object({
                              key: z.string().exactOptional(),
                              i18nLabel: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      wizard: z
                        .object({ step: z.int().exactOptional(), order: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'The settings shown in the setup wizard.' }),
              serverAlreadyRegistered: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the workspace is already registered with Rocket.Chat Cloud.',
                }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                settings: [
                  {
                    _id: 'Organization_Name',
                    type: 'string',
                    value: '',
                    wizard: { step: 2, order: 1 },
                  },
                  {
                    _id: 'Organization_Type',
                    type: 'select',
                    value: '',
                    values: [
                      { key: 'community', i18nLabel: 'Community' },
                      { key: 'government', i18nLabel: 'Government' },
                      { key: 'nonprofit', i18nLabel: 'Nonprofit' },
                    ],
                    wizard: { step: 2, order: 0 },
                  },
                ],
                serverAlreadyRegistered: false,
                success: true,
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden. The setup wizard is already completed.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const getApiV1ServiceConfigurationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/service.configurations',
  tags: ['Settings'],
  summary: 'Get OAuth Service Configuration',
  description: 'List out all the active OAuth services configured with details.',
  operationId: 'get-api-v1-service.configurations',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              configurations: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      service: z.string().exactOptional(),
                      clientId: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                configurations: [
                  { _id: 'Hq5ahzz9MWWCdeDJ8', service: 'google', clientId: 'xxxxx' },
                  { _id: '57kavS22achLH33PE', service: 'apple', clientId: 'xxxxxx' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1CloudConnectWorkspaceRoute = createRoute({
  method: 'post',
  path: '/api/v1/cloud.connectWorkspace',
  tags: ['Cloud'],
  summary: 'Connect Workspace to Cloud',
  description:
    'Connect the workspace to <a href="https://docs.rocket.chat/docs/rocketchat-cloud" target="_blank">Rocket.Chat Cloud</a> using a registration token. To get a registration token, refer to [Registration via Token](https://docs.rocket.chat/docs/register-your-workspace#how-to-get-a-token).\n\nPermission required: `manage-cloud`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.7.0            | Added       |',
  operationId: 'post-api-v1-cloud.connectWorkspace',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  description: 'The registration token from your Rocket.Chat Cloud account.',
                  example: '5f03461b-9073-41e5-986d-e70f4d6ecbd1',
                }),
            })
            .openapi({ required: ['token'] }),
          examples: { Example: { value: { token: '5f03461b-9073-41e5-986d-e70f4d6ecbd1' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameter': {
              value: {
                success: false,
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Failed to Connect': {
              value: {
                success: false,
                error: 'Failed to connect the workspace with Rocket.Chat Cloud',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1CloudManualRegisterRoute = createRoute({
  method: 'post',
  path: '/api/v1/cloud.manualRegister',
  tags: ['Cloud'],
  summary: 'Manual Cloud Register',
  description:
    'Manually register a workspace on <a href="https://docs.rocket.chat/docs/rocketchat-cloud" target="_blank">Rocket.Chat Cloud</a>.\nPermission required: `register-on-cloud`.',
  operationId: 'post-api-v1-cloud.manualRegister',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cloudBlob: z.string().openapi({ description: 'Enter the workspace deployment ID.' }),
            })
            .openapi({ required: ['cloudBlob'] }),
          examples: { Example: { value: { cloudBlob: 'jfiscsm38urc3ujd' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            Example: { value: { success: false, error: 'Workspace is already registered' } },
            'Example 2': {
              value: { success: false, error: "Match error: Missing key 'cloudBlob'" },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CloudRegistrationStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/cloud.registrationStatus',
  tags: ['Cloud'],
  summary: 'Get Workspace Registration Status',
  description:
    "Returns the workspace's current Rocket.Chat Cloud registration status. \n\nPermission required: `manage-cloud`.",
  operationId: 'get-api-v1-cloud.registrationStatus',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              registrationStatus: z
                .object({
                  workspaceRegistered: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the workspace has an active Cloud Client ID and Secret configured.',
                    }),
                  workspaceId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The workspace's Rocket.Chat Cloud ID." }),
                  uniqueId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The workspace's unique installation ID." }),
                  token: z.string().exactOptional(),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The registered organization email on Rocket.Chat Cloud.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                registrationStatus: {
                  workspaceRegistered: true,
                  workspaceId: 'abc123-workspace-id',
                  uniqueId: 'xyz789-unique-id',
                  token: '',
                  email: 'admin@example.com',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1CloudWorkspaceRegisterDataRoute = createRoute({
  method: 'get',
  path: '/api/v1/cloud.workspaceRegisterData',
  tags: ['Cloud'],
  summary: 'Get Workspace Registration Data',
  description:
    'Returns the workspace registration payload used to register the workspace with Rocket.Chat Cloud offline. The `registerData` value is a base64-encoded JSON string.\n\nPermission required: `manage-cloud`.\n\nThis endpoint replaces the `cloud:getWorkspaceRegisterData` Realtime API method, which was removed in 9.0.0.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-cloud.workspaceRegisterData',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              registerData: z
                .string()
                .exactOptional()
                .openapi({ description: 'The base64-encoded workspace registration payload.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                registerData:
                  'eyJ1bmlxdWVJZCI6Ilp4N3FXbTNLcDlSdlQ0eUxiIiwid29ya3NwYWNlSWQiOiIiLCJhZGRyZXNzIjoiaHR0cHM6Ly9jaGF0LmV4YW1wbGUuY29tIn0=',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1DnsResolveTxtRoute = createRoute({
  method: 'post',
  path: '/api/v1/dns.resolve.txt',
  tags: ['DNS'],
  summary: 'Resolve DNS Text Records',
  description: 'Resolves DNS text records (TXT records) for a hostname.',
  operationId: 'post-api-v1-dns.resolve.txt',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'url',
            description: 'The hostname.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Query Not Found': {
              value: { success: false, error: 'querySrv ENOTFOUND .rocket.chat/' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DnsResolveSrvRoute = createRoute({
  method: 'post',
  path: '/api/v1/dns.resolve.srv',
  tags: ['DNS'],
  summary: 'Resolve DNS URL Records',
  description: 'Resolves DNS URL records for a hostname.',
  operationId: 'post-api-v1-dns.resolve.srv',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'url',
            description: 'The hostname.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Query Not Found': {
              value: { success: false, error: 'querySrv ENOTFOUND .rocket.chat/' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1E2eFetchMyKeysRoute = createRoute({
  method: 'get',
  path: '/api/v1/e2e.fetchMyKeys',
  tags: ['E2E'],
  summary: 'Get E2E Keys',
  description: 'Retrieves E2E keys of logged in user.',
  operationId: 'get-api-v1-e2e.fetchMyKeys',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              public_key: z.string().exactOptional(),
              private_key: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                public_key:
                  '{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt"],"kty":"RSA","n":"oP23XEagSGIdo18Yc7TUwsM1qoRDa-pMg64lEctMQ6Dx-Q"}',
                private_key:
                  '{"$binary":"2j5AaYO39PcQNK7lT3h5Zv7j7y3rVKsqlERVgty+Z2pjzuG5pCMnx63WFJCrt8Sx2KDwWvYycGs0V5TzXJhKFEpE3l5hpoP51wO1Xztnfl9TdVtCZ5ERSDhXp+t3ays0QLdD2EtZu9M+Ffgiy2gqTasB0UFXAZyDA=="}',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1E2eGetUsersOfRoomWithoutKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/e2e.getUsersOfRoomWithoutKey',
  tags: ['E2E'],
  summary: 'Get Users of Room Without E2E key',
  description: 'Retrieves user IDs Of room without E2E key.',
  operationId: 'get-api-v1-e2e.getUsersOfRoomWithoutKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'rid',
            description: 'The room ID.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      e2e: z
                        .object({ public_key: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                users: [
                  {
                    _id: 'XycfA5CetCPuEjqxw',
                    e2e: {
                      public_key:
                        '{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt"],"kty":"RSA","n":"oMO9ydjRxD3JzcAgMvyBZAc_pIOBIxOLVUChZ8mB3JNtLREC751hHT-WPZVZquWA6X4CihHejFfpIyAD_w-0MIToudTGO-f1aeE4Wc9-SBKjSQPphCuZMTwZ7iRtfUwHeGy5yM94uQPp07sEi9BmJSZqHscHc-6G520MyBhNU6uznQf-Sp85Q4etl4Ifs09khM-VMnBqKwh2QJx8w0880Vc3Zufve6udg0aSQ"}',
                    },
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Room': {
              value: {
                success: false,
                error: 'Invalid room [error-invalid-room]',
                errorType: 'error-invalid-room',
                details: { method: 'e2e.getUsersOfRoomWithoutKey' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eSetRoomKeyIDRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.setRoomKeyID',
  tags: ['E2E'],
  summary: 'Set Room E2E Key',
  operationId: 'post-api-v1-e2e.setRoomKeyID',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room ID.' }),
              keyID: z
                .string()
                .openapi({
                  description: 'The key that you want to set for the room. Enter a unique string.',
                }),
            })
            .openapi({ required: ['rid', 'keyID'] }),
          examples: { Example: { value: { rid: 'wCiXndNp5NqNY3uCc', keyID: 'my-UniQu3_ke4_Id' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'E2E Key Exists': {
              value: {
                success: false,
                error: 'E2E Key ID already exists [error-room-e2e-key-already-exists]',
                errorType: 'error-room-e2e-key-already-exists',
                details: { method: 'e2e.setRoomKeyID' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eSetUserPublicAndPrivateKeysRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.setUserPublicAndPrivateKeys',
  tags: ['E2E'],
  summary: 'Set User Key',
  operationId: 'post-api-v1-e2e.setUserPublicAndPrivateKeys',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              public_key: z
                .string()
                .openapi({ description: 'Enter a unique string as your public key.' }),
              private_key: z
                .string()
                .openapi({ description: 'Enter a unique string as your private key.' }),
            })
            .openapi({ required: ['public_key', 'private_key'] }),
          examples: {
            Example: { value: { public_key: 'My-9UbLiK-k34', private_key: '9R1V4t3_k3Y' } },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'public_key' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eUpdateGroupKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.updateGroupKey',
  tags: ['E2E'],
  summary: 'Update User E2E Key in Room',
  operationId: 'post-api-v1-e2e.updateGroupKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              uid: z.string().openapi({ description: 'The user ID whose key you want to update.' }),
              rid: z.string().openapi({ description: 'The room ID.' }),
              key: z.string().openapi({ description: 'The updated key.' }),
            })
            .openapi({ required: ['uid', 'rid', 'key'] }),
          examples: {
            Example: {
              value: { uid: 'd26x6zSkaPSe5gCyy', rid: '9R1V4t3_k3Y', key: 'M4-Ubd4T3d-k39' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eRequestSubscriptionKeysRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.requestSubscriptionKeys',
  tags: ['E2E'],
  summary: 'Request Subscription Keys',
  description:
    'Requests the E2E encryption keys for the rooms the authenticated user is subscribed to. Other room members are notified to share their keys with the requesting user. This endpoint replaces the `e2e.requestSubscriptionKeys` DDP method, which was removed in 9.0.0. \n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 8.6.0   | Added       |',
  operationId: 'post-api-v1-e2e.requestSubscriptionKeys',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1E2eAcceptSuggestedGroupKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.acceptSuggestedGroupKey',
  tags: ['E2E'],
  summary: 'Accept Suggested Group Key',
  description:
    "Accepts the E2E group key that another room member suggested for the authenticated user in an encrypted room. The suggested key becomes the user's room key, and the user is removed from the room's queue of users waiting for a key. If the user has no previous room keys, the suggested previous room keys are also saved.\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 6.0.0   | Added       |",
  operationId: 'post-api-v1-e2e.acceptSuggestedGroupKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'The room ID.', example: 'wCiXndNp5NqNY3uCc' }),
            })
            .openapi({ required: ['rid'] }),
          examples: { Example: { value: { rid: 'wCiXndNp5NqNY3uCc' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'rid'",
                errorType: 'error-invalid-params',
              },
            },
            'Subscription Not Found': {
              value: {
                success: false,
                error: 'Subscription not found [error-subscription-not-found]',
                errorType: 'error-subscription-not-found',
                details: { method: 'e2e.acceptSuggestedGroupKey' },
              },
            },
            'No Suggested Key': {
              value: {
                success: false,
                error: 'No suggested key available [error-no-suggested-key-available]',
                errorType: 'error-no-suggested-key-available',
                details: { method: 'e2e.acceptSuggestedGroupKey' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eRejectSuggestedGroupKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.rejectSuggestedGroupKey',
  tags: ['E2E'],
  summary: 'Reject Suggested Group Key',
  description:
    "Rejects the E2E group key that another room member suggested for the authenticated user in an encrypted room. The suggested key and suggested previous room keys are discarded, and the user is added back to the room's queue of users waiting for a key.\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 6.0.0   | Added       |",
  operationId: 'post-api-v1-e2e.rejectSuggestedGroupKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'The room ID.', example: 'wCiXndNp5NqNY3uCc' }),
            })
            .openapi({ required: ['rid'] }),
          examples: { Example: { value: { rid: 'wCiXndNp5NqNY3uCc' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'rid'",
                errorType: 'error-invalid-params',
              },
            },
            'Subscription Not Found': {
              value: {
                success: false,
                error: 'Subscription not found [error-subscription-not-found]',
                errorType: 'error-subscription-not-found',
                details: { method: 'e2e.rejectSuggestedGroupKey' },
              },
            },
            'No Suggested Key': {
              value: {
                success: false,
                error: 'No suggested key available [error-no-suggested-key-available]',
                errorType: 'error-no-suggested-key-available',
                details: { method: 'e2e.rejectSuggestedGroupKey' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1E2eFetchUsersWaitingForGroupKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/e2e.fetchUsersWaitingForGroupKey',
  tags: ['E2E'],
  summary: 'Get Users Waiting for Group Key',
  description:
    "Retrieves, for each of the specified encrypted rooms, the members who are waiting for the room's E2E key and have an E2E public key. Members who already have a room key or a suggested key are not returned, and the authenticated user is excluded. Up to 50 users are returned per room, and rooms with no waiting users are left out of the response.\n\nIf E2E encryption is disabled in the workspace, `usersWaitingForE2EKeys` is an empty object.\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 6.10.0  | Added       |",
  operationId: 'get-api-v1-e2e.fetchUsersWaitingForGroupKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      roomIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'roomIds',
            in: 'query',
            required: true,
            description:
              'The IDs of the rooms to check. To check several rooms, repeat the parameter, for example `roomIds=wCiXndNp5NqNY3uCc&roomIds=GENERAL`.',
            schema: { type: 'array', items: { type: 'string' } },
            example: ['wCiXndNp5NqNY3uCc'],
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              usersWaitingForE2EKeys: z
                .record(
                  z.string(),
                  z.array(
                    z
                      .object({
                        _id: z.string().exactOptional(),
                        public_key: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    "An object keyed by room ID. Each value lists the users waiting for that room's key.",
                }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                usersWaitingForE2EKeys: {
                  wCiXndNp5NqNY3uCc: [
                    {
                      _id: 'XycfA5CetCPuEjqxw',
                      public_key:
                        '{"alg":"RSA-OAEP-256","e":"AQAB","ext":true,"key_ops":["encrypt"],"kty":"RSA","n":"oMO9ydjRxD3JzcAgMvyBZAc_pIOBIxOLVUChZ8mB3JNtLREC751hHT"}',
                    },
                  ],
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'roomIds'",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eProvideUsersSuggestedGroupKeysRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.provideUsersSuggestedGroupKeys',
  tags: ['E2E'],
  summary: 'Provide Suggested Group Keys to Users',
  description:
    "Suggests E2E group keys to members of encrypted rooms who are waiting for a key. For each room, list the users and the room key encrypted with each user's public key. Each user then accepts or rejects the suggested key. The users are removed from the room's queue of users waiting for a key.\n\nRooms that the authenticated user can't access are skipped, and users who aren't members of a room are ignored. If E2E encryption is disabled in the workspace, the request succeeds without making any changes.\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n| 6.10.0  | Added       |",
  operationId: 'post-api-v1-e2e.provideUsersSuggestedGroupKeys',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              usersSuggestedGroupKeys: z
                .record(
                  z.string(),
                  z.array(
                    z
                      .object({
                        _id: z
                          .string()
                          .openapi({
                            description: 'The ID of the user to suggest the key to.',
                            example: 'XycfA5CetCPuEjqxw',
                          }),
                        key: z
                          .string()
                          .openapi({
                            description: "The room key, encrypted with the user's E2E public key.",
                            example: '8ee4c64e1012bm9lbmNyeXB0ZWQta2V5',
                          }),
                        oldKeys: z
                          .array(
                            z
                              .object({
                                e2eKeyId: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'The ID of the previous room key.',
                                    example: '3f2a9c1b7d4e',
                                  }),
                                ts: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The date and time the key was replaced, as an ISO 8601 string.',
                                    example: '2026-01-15T10:30:00.000Z',
                                  }),
                                E2EKey: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "The previous room key, encrypted with the user's E2E public key.",
                                    example: '3f2a9c1b7d4eb2xkLWVuY3J5cHRlZC1rZXk',
                                  }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              "Optional. The room's previous keys, encrypted for the user, so the user can read older messages.",
                          }),
                      })
                      .openapi({ required: ['_id', 'key'] }),
                  ),
                )
                .openapi({
                  description:
                    'An object keyed by room ID. Each value is an array of the users to suggest a key to in that room.',
                }),
            })
            .openapi({ required: ['usersSuggestedGroupKeys'] }),
          examples: {
            Example: {
              value: {
                usersSuggestedGroupKeys: {
                  wCiXndNp5NqNY3uCc: [
                    {
                      _id: 'XycfA5CetCPuEjqxw',
                      key: '8ee4c64e1012bm9lbmNyeXB0ZWQta2V5',
                      oldKeys: [
                        {
                          e2eKeyId: '3f2a9c1b7d4e',
                          ts: '2026-01-15T10:30:00.000Z',
                          E2EKey: '3f2a9c1b7d4eb2xkLWVuY3J5cHRlZC1rZXk',
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'usersSuggestedGroupKeys'",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1E2eResetRoomKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/e2e.resetRoomKey',
  tags: ['E2E'],
  summary: 'Reset Room E2E Key',
  description:
    "Resets the E2E key of an encrypted room. For every member who has a key for the room, the current key is moved to their previous room keys, and the latest 10 previous keys are kept. Members other than the authenticated user are added to the room's queue of users waiting for the new key, up to 50 members. The new key is set for the authenticated user.\n\nThe authenticated user must have E2E keys, and the room must already be encrypted. Only one reset can run for a room at a time.\n\nPermission required: `toggle-room-e2e-encryption`\n\n### Changelog\n| Version | Description |\n| ------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n| 8.3.0   | The `403` response returns `error-not-allowed` instead of `unauthorized` |\n| 7.0.0   | Added       |",
  operationId: 'post-api-v1-e2e.resetRoomKey',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'The room ID.', example: 'wCiXndNp5NqNY3uCc' }),
              e2eKey: z
                .string()
                .openapi({
                  description:
                    "The new room key, encrypted with the authenticated user's E2E public key.",
                  example: '9b7c2e4f1a6dbmV3LWVuY3J5cHRlZC1rZXk',
                }),
              e2eKeyId: z
                .string()
                .openapi({ description: 'The ID of the new room key.', example: '9b7c2e4f1a6d' }),
            })
            .openapi({ required: ['rid', 'e2eKey', 'e2eKeyId'] }),
          examples: {
            Example: {
              value: {
                rid: 'wCiXndNp5NqNY3uCc',
                e2eKey: '9b7c2e4f1a6dbmV3LWVuY3J5cHRlZC1rZXk',
                e2eKeyId: '9b7c2e4f1a6d',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Params': {
              value: {
                success: false,
                error: "must have required property 'e2eKeyId'",
                errorType: 'error-invalid-params',
              },
            },
            'Reset in Progress': {
              value: { success: false, error: 'error-e2e-key-reset-in-progress' },
            },
            'Reset Failed': { value: { success: false, error: 'error-e2e-key-reset-failed' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'No Room Access': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
            'Permission Error': {
              value: { success: false, error: 'error-not-allowed', errorType: 'error-forbidden' },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UploadImportFileRoute = createRoute({
  method: 'post',
  path: '/api/v1/uploadImportFile',
  tags: ['Import'],
  summary: 'Upload Import File',
  description:
    'This endpoint takes in the binary content of the imported file, along with additional information about its content, and stores it in a buffer. Permission required: `run-import`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'post-api-v1-uploadImportFile',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              binaryContent: z.string().openapi({ description: 'The uploaded file.' }),
              importerKey: z
                .string()
                .openapi({
                  description:
                    'It indicates how Rocket.Chat should handle the uploaded file. The accepted importer keys are:\n  * `csv`\n  * `hipchatenterprise`\n  * `pending-avatars`\n  * `pending-files`\n  * `slack`\n  * `slack-users`',
                }),
              fileName: z.string().openapi({ description: 'The name of the file to be imported.' }),
              contentType: z
                .string()
                .openapi({
                  description:
                    'The imported file [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).',
                }),
            })
            .openapi({ required: ['binaryContent', 'importerKey', 'fileName', 'contentType'] }),
          examples: {
            Example: {
              value: {
                binaryContent: '/testfile.csv',
                importerKey: 'csv',
                fileName: 'Testfile',
                contentType: 'text/csv',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Importer not Defined': {
              value: {
                success: false,
                error:
                  'The importer (png) has no import class defined. [error-importer-not-defined]',
                errorType: 'error-importer-not-defined',
                details: 'uploadImportFile',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1DownloadPublicImportFileRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadPublicImportFile',
  tags: ['Import'],
  summary: 'Download Public Import File',
  description:
    'Download the public import file.\nPermission required: `run-import`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'post-api-v1-downloadPublicImportFile',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileUrl: z
                .string()
                .openapi({
                  description: 'The url of the file. It must start with `http` or `https`.',
                }),
              importerKey: z
                .string()
                .openapi({
                  description:
                    'It indicates how Rocket.Chat should handle the uploaded file. The accepted importer keys are:\n  * `csv`\n  * `hipchatenterprise`\n  * `pending-avatars`\n  * `pending-files`\n  * `slack`\n  * `slack-users`',
                }),
            })
            .openapi({ required: ['fileUrl', 'importerKey'] }),
          examples: {
            Example: {
              value: {
                fileUrl: 'https://www.freepik.com/photos/dog',
                importerKey: 'pending-avatars',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Importer not Defined': {
              value: {
                success: false,
                error:
                  'The importer (png) has no import class defined. [error-importer-not-defined]',
                errorType: 'error-importer-not-defined',
                details: 'uploadImportFile',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1StartImportRoute = createRoute({
  method: 'post',
  path: '/api/v1/startImport',
  tags: ['Import'],
  summary: 'Start Import',
  description:
    'Triggers the process of importing users, rooms and messages to the workspace.\nPermission required: `run-import`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.0.0            | Remove required extra data from `users` and `channels` parameters. Use only record ID of the users or channels.   |\n|3.0.0            | Added       |',
  operationId: 'post-api-v1-startImport',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z
                .object({
                  users: z
                    .object({
                      all: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Set to `true` to import all users.' }),
                      list: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'When `all` is false, list the record IDs of users to be imported.',
                        }),
                    })
                    .openapi({
                      description:
                        'An object of the users to be imported. If `all` is true, `list` is ignored.',
                      required: [],
                    }),
                  channels: z
                    .object({
                      all: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Set to `true` to import all channels.' }),
                      list: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'When `all` is false, list the record IDs of channels to be imported.',
                        }),
                    })
                    .openapi({
                      description:
                        'An object of the channels to import. If `all` is true, `list` is ignored.',
                      required: [],
                    }),
                })
                .openapi({
                  required: ['users', 'channels'],
                  description: 'The input object contains two arrays: `users` and `channels`.',
                }),
            })
            .openapi({ required: ['input'] }),
          examples: {
            Example: {
              value: {
                input: {
                  users: { all: true, list: ['testbh'] },
                  channels: { all: false, list: ['WDuJLFkjwk6L7LdFC'] },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1GetImportFileDataRoute = createRoute({
  method: 'get',
  path: '/api/v1/getImportFileData',
  tags: ['Import'],
  summary: 'Get Import File Data',
  description:
    'Get the import file data.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'get-api-v1-getImportFileData',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z.array(z.looseObject({})).exactOptional(),
              channels: z.array(z.looseObject({})).exactOptional(),
              message_count: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: { value: { users: [], channels: [], message_count: 0, success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1GetImportProgressRoute = createRoute({
  method: 'get',
  path: '/api/v1/getImportProgress',
  tags: ['Import'],
  summary: 'Get Import Progress',
  description:
    'Get the progress of the import.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'get-api-v1-getImportProgress',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              key: z.string().exactOptional(),
              name: z.string().exactOptional(),
              step: z.string().exactOptional(),
              count: z
                .object({ completed: z.int().exactOptional(), total: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                key: 'pending-avatars',
                name: 'Pending Avatars',
                step: 'importer_user_selection',
                count: { completed: 0, total: 0 },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1GetLatestImportOperationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/getLatestImportOperations',
  tags: ['Import'],
  summary: 'Get Latest Import Operations',
  description:
    'Get latests import operations.\nPermission required: `view-import-operations`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'get-api-v1-getLatestImportOperations',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                _id: z.string().exactOptional(),
                type: z.string().exactOptional(),
                importerKey: z.string().exactOptional(),
                ts: z.int().exactOptional(),
                status: z.string().exactOptional(),
                valid: z.boolean().exactOptional(),
                user: z.string().exactOptional(),
                _updatedAt: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            Success: {
              value: [
                {
                  _id: 'MJxTRZsYdho8Ww2qq',
                  type: 'Pending Avatars',
                  importerKey: 'pending-avatars',
                  ts: 1635280600083,
                  status: 'importer_user_selection',
                  valid: false,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T11:26:24.430Z',
                },
                {
                  _id: 'YzSCu9WgqJ3wutF4T',
                  type: 'Pending Files',
                  importerKey: 'pending-files',
                  ts: 1635280596592,
                  status: 'importer_done',
                  valid: false,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T08:32:42.609Z',
                },
                {
                  _id: '96WJDaxXpwXC3fTD5',
                  type: 'Pending Files',
                  importerKey: 'pending-files',
                  ts: 1635277590992,
                  status: 'importer_user_selection',
                  valid: false,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T08:32:42.609Z',
                },
                {
                  _id: 'zYc5kuFRaszfqCegB',
                  type: 'Pending Avatars',
                  importerKey: 'pending-avatars',
                  ts: 1635277492185,
                  status: 'importer_done',
                  valid: false,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T08:32:42.609Z',
                },
                {
                  _id: 'XckCNn9ZsdywHso4f',
                  type: 'Pending Avatars',
                  importerKey: 'pending-avatars',
                  ts: 1635277452755,
                  status: 'importer_done',
                  valid: false,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T08:32:42.609Z',
                },
              ],
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1DownloadPendingFilesRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadPendingFiles',
  tags: ['Import'],
  summary: 'Download Pending Files',
  description:
    'Dowbload pending files.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'post-api-v1-downloadPendingFiles',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), count: z.int().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { success: true, count: 0 } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1DownloadPendingAvatarsRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadPendingAvatars',
  tags: ['Import'],
  summary: 'Download Pending Avatars',
  description:
    'Download pending avatars from the import.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'post-api-v1-downloadPendingAvatars',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), count: z.int().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { success: true, count: 0 } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1GetCurrentImportOperationRoute = createRoute({
  method: 'get',
  path: '/api/v1/getCurrentImportOperation',
  tags: ['Import'],
  summary: 'Get Current Import Operations',
  description:
    'Get the current import operation.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.0.0            | Added       |',
  operationId: 'get-api-v1-getCurrentImportOperation',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              operation: z
                .object({
                  _id: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  importerKey: z.string().exactOptional(),
                  ts: z.int().exactOptional(),
                  status: z.string().exactOptional(),
                  valid: z.boolean().exactOptional(),
                  user: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                success: true,
                operation: {
                  _id: '7PbvsnKJD9ZAqw38C',
                  type: 'Pending Avatars',
                  importerKey: 'pending-avatars',
                  ts: 1635337234169,
                  status: 'importer_done',
                  valid: true,
                  user: 'd26x6zSkaPSe5gCyy',
                  _updatedAt: '2021-10-27T12:20:34.184Z',
                },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ImportersListRoute = createRoute({
  method: 'get',
  path: '/api/v1/importers.list',
  tags: ['Import'],
  summary: 'Get List of Imports',
  description:
    'Use this endpoint to view the list of imports in the workspace. Permission required: `run-import`',
  operationId: 'get-api-v1-importers.list',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ key: z.string().exactOptional(), name: z.string().exactOptional() })
              .openapi({ required: [] }),
          ),
          examples: {
            'Example 1': {
              value: [
                { key: 'csv', name: 'CSV' },
                { key: 'slack', name: 'Slack' },
                { key: 'slack-users', name: 'Slack_Users' },
                { key: 'omnichannel_contact', name: 'omnichannel_contacts_importer' },
              ],
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ImportNewRoute = createRoute({
  method: 'post',
  path: '/api/v1/import.new',
  tags: ['Bulk User Import'],
  summary: 'Create New Import Operation',
  description:
    'Creates a new import operation; if an operation was already running, it will be aborted. Any data from previous imports will be cleared automatically.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.3.0            | Added       |',
  operationId: 'post-api-v1-import.new',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              operation: z
                .object({
                  _id: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  importerKey: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  valid: z.boolean().exactOptional(),
                  user: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                operation: {
                  _id: '64d69545ee8ae821983005f5',
                  type: 'api',
                  importerKey: 'api',
                  ts: '2023-08-11T20:08:37.655Z',
                  status: 'importer_new',
                  valid: true,
                  user: 'rbAXPnMktTFbNpwtJ',
                  _updatedAt: '2023-08-11T20:08:37.655Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ImportAddUsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/import.addUsers',
  tags: ['Bulk User Import'],
  summary: 'Add Users',
  description:
    'Adds user data to the import staging area. It requires the current import operation status to be either `new` or `ready`. If successful, it changes the operation state to `ready`.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.3.0            | Added       |',
  operationId: 'post-api-v1-import.addUsers',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      description:
        'Note:\n  1. A minimum of one email address and one import ID is required. If any user is missing those, the endpoint will fail and no user will be added to the operation.\n  2. Emails and usernames will not be validated, but they must be unique or the user creation will fail.\n  3. If roles are added, they must be valid Rocket.Chat roles, or the endpoint will fail and no user will be added to the operation.\n  4. The default roles will be added to all users automatically.\n  5. If no password is added, a temporary random password will be generated automatically.\n  6. Users flagged as `deleted` will be created as `Deactivated` on Rocket.Chat.\n  7. Avatar URLs will not be fetched automatically. The workspace administrator needs to use the **Download Pending Avatars** button in **Manage** > **Workspace** > **Import** on the workspace after the import is completed.\n  8. Import IDs will not be used as IDs by Rocket.Chat, but you can query users by their import ID with the  <a href="https://developer.rocket.chat/apidocs/get-users-info" target="_blank">users.info</a>.',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      username: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The user name.' }),
                      emails: z
                        .array(z.string())
                        .openapi({ description: 'The user email addresses.' }),
                      importIds: z
                        .array(z.string())
                        .openapi({ description: 'A list of IDs that can identify the user.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The user's display name." }),
                      password: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A password to assign to this user.' }),
                      utcOffset: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: "The user's timezone, in number of hours relative to UTC.",
                        }),
                      roles: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'A list of roles to assign to the user' }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The user type, must be either "user" or "bot".' }),
                      bio: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The user's profile bio." }),
                      deleted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Was the user deleted from the previous system?' }),
                      avatarUrl: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "A URL pointing to the user's avatar picture." }),
                    })
                    .openapi({ required: ['emails', 'importIds'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                users: [
                  {
                    username: 'john.doe',
                    emails: ['john.doe@example.com'],
                    importIds: ['1523'],
                    name: 'John Doe',
                    password: 'P@ssw0rd',
                  },
                  {
                    username: 'jane.doe',
                    emails: ['jane.doe@example.com'],
                    importIds: ['1524'],
                    name: 'Jane Doe',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ImportRunRoute = createRoute({
  method: 'post',
  path: '/api/v1/import.run',
  tags: ['Bulk User Import'],
  summary: 'Run Import Operation',
  description:
    "Process the data from the current import operation, creating the users on Rocket.Chat. It requires the current import operation state to be `ready` and it changes the operation state to `importing`. It will return success if the conditions to start the process are met, without waiting for the import to finish.\nPermission required: `run-import`\n\n1. If a user can not be imported successfully it'll be flagged but the operation will not stop.\n2. If a user's email or username is already in use, it will not be created.\n3. Only the users that were imported successfully will be removed from the staging area.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.3.0            | Added       |",
  operationId: 'post-api-v1-import.run',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ImportStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/import.status',
  tags: ['Bulk User Import'],
  summary: 'Get Import Operation Status',
  description:
    'Get the status of the current import operation.Permission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.3.0            | Added       |',
  operationId: 'get-api-v1-import.status',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description:
        'The following operation statuses are possible for the operation:\n  * `none`: No import operation was ever created.\n  * `new`: An operation was created but no data was added to it.\n  * `loading`: A traditional importer is currently loading data from a file to the import operation.\n  * `ready`: An operation was created and has data ready to import.\n  * `importing`: The import operation is running and the users are being created.\n  * `error`: An error caused the operation to stop running.\n  * `canceled`: The operation was interrupted by an administrator.\n  * `done`: The operation was completed successfully.\n\n  Note the following points:\n    1. The operation is considered successful if it processes every user in the staging area, even if no user is imported.\n    2. You can check how many users have been imported or failed to import with the `operation.count.completed` and `operation.count.error` attributes.\n    3. The data from users that failed to import will remain in the staging area after the operation is complete.\n    4. While the operation is running, the values on `operation.count` are only updated once after every 50 users are processed.',
      content: {
        'application/json': {
          schema: z
            .object({
              state: z.string().exactOptional(),
              operation: z
                .object({
                  _id: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  importerKey: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  valid: z.boolean().exactOptional(),
                  user: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  count: z
                    .object({ total: z.int().exactOptional(), users: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                state: 'ready',
                operation: {
                  _id: '64d51ea91558939980aab371',
                  type: 'api',
                  importerKey: 'api',
                  ts: '2023-08-10T17:30:17.519Z',
                  status: 'importer_user_selection',
                  valid: true,
                  user: '7TY57bBj3xQXvf2i2',
                  _updatedAt: '2023-08-10T17:41:20.052Z',
                  count: { total: 2, users: 2 },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ImportClearRoute = createRoute({
  method: 'post',
  path: '/api/v1/import.clear',
  tags: ['Bulk User Import'],
  summary: 'Abort Import Operation',
  description:
    'Abort any import operation currently in progress. Clear any remaining data that may have been left by any previous operation.\nPermission required: `run-import`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.3.0            | Added       |',
  operationId: 'post-api-v1-import.clear',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1InstancesGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/instances.get',
  tags: ['Instances'],
  summary: 'Get Instances',
  description:
    'Get the instances running for the workspace. Permission required: `view-statistics`',
  operationId: 'get-api-v1-instances.get',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              instances: z
                .array(
                  z
                    .object({
                      address: z.string().exactOptional(),
                      currentStatus: z
                        .object({
                          connected: z.boolean().exactOptional(),
                          lastHeartbeatTime: z.int().exactOptional(),
                          local: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      instanceRecord: z
                        .object({
                          _id: z.string().exactOptional(),
                          _createdAt: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                          extraInformation: z
                            .object({
                              host: z.string().exactOptional(),
                              port: z.string().exactOptional(),
                              tcpPort: z.int().exactOptional(),
                              os: z
                                .object({
                                  type: z.string().exactOptional(),
                                  platform: z.string().exactOptional(),
                                  arch: z.string().exactOptional(),
                                  release: z.string().exactOptional(),
                                  uptime: z.number().exactOptional(),
                                  loadavg: z.array(z.number()).exactOptional(),
                                  totalmem: z.int().exactOptional(),
                                  freemem: z.int().exactOptional(),
                                  cpus: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              nodeVersion: z.string().exactOptional(),
                              conns: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          name: z.string().exactOptional(),
                          pid: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      broadcastAuth: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({
              'x-examples': {
                Example: {
                  instances: [
                    {
                      address: 'localhost',
                      currentStatus: { connected: true, lastHeartbeatTime: 16, local: true },
                      instanceRecord: {
                        _id: '871f8be4-5fdb-45a8-868f-8d3e28a39148',
                        _createdAt: '2024-05-22T11:14:11.845Z',
                        _updatedAt: '2024-07-05T02:55:40.526Z',
                        extraInformation: {
                          host: 'localhost',
                          port: '3000',
                          tcpPort: 46443,
                          os: {
                            type: 'Linux',
                            platform: 'linux',
                            arch: 'x64',
                            release: '5.10.165-143.735.amzn2.x86_64',
                            uptime: 8455403.28,
                            loadavg: [0.41, 0.17, 0.15],
                            totalmem: 4110323712,
                            freemem: 198479872,
                            cpus: 2,
                          },
                          nodeVersion: 'v14.21.3',
                          conns: 1,
                        },
                        name: 'rocket.chat',
                        pid: 1,
                      },
                      broadcastAuth: true,
                    },
                  ],
                  success: true,
                },
              },
              required: [],
            }),
          examples: {
            'Get Instances': {
              value: {
                instances: [
                  {
                    address: 'localhost',
                    currentStatus: { connected: true, lastHeartbeatTime: 16, local: true },
                    instanceRecord: {
                      _id: '871f8be4-5fdb-45a8-868f-8d3e28a39148',
                      _createdAt: '2024-05-22T11:14:11.845Z',
                      _updatedAt: '2024-07-05T02:55:40.526Z',
                      extraInformation: {
                        host: 'localhost',
                        port: '3000',
                        tcpPort: 46443,
                        os: {
                          type: 'Linux',
                          platform: 'linux',
                          arch: 'x64',
                          release: '5.10.165-143.735.amzn2.x86_64',
                          uptime: 8455403.28,
                          loadavg: [0.41, 0.17, 0.15],
                          totalmem: 4110323712,
                          freemem: 198479872,
                          cpus: 2,
                        },
                        nodeVersion: 'v14.21.3',
                        conns: 1,
                      },
                      name: 'rocket.chat',
                      pid: 1,
                    },
                    broadcastAuth: true,
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ModerationReportsByUsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.reportsByUsers',
  tags: ['Moderation'],
  summary: 'Get Reported Messages',
  description:
    'Retrieves all the reported messages grouped by users.\nPermission required: `view-moderation-console`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'get-api-v1-moderation.reportsByUsers',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      oldest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '2021-09-30T09:33:15.621Z',
            in: 'query',
            name: 'oldest',
            description:
              'It represents the oldest point in time for which you want to retrieve moderation reports.',
            required: false,
          },
        }),
      latest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '2023-08-30T09:33:15.621Z',
            in: 'query',
            name: 'latest',
            description:
              'It represents the oldest point in time for which you want to retrieve moderation reports.',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              reports: z
                .array(
                  z
                    .object({
                      rooms: z
                        .array(
                          z
                            .object({
                              _id: z.string().exactOptional(),
                              t: z.string().exactOptional(),
                              federated: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      count: z.int().exactOptional(),
                      message: z.string().exactOptional(),
                      msgId: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      isUserDeleted: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                reports: [
                  {
                    rooms: [
                      { _id: '6423ce62c29657e5b3ba2675rbAXPnMktTFbNpwtJ', t: 'd', federated: true },
                    ],
                    count: 1,
                    message: 'hi',
                    msgId: 'tDNLALSFk2LET2JZH',
                    ts: '2023-08-30T09:38:38.792Z',
                    username: 'test.test',
                    name: 'test test',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    isUserDeleted: false,
                  },
                  {
                    rooms: [{ _id: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ', t: 'd' }],
                    count: 2,
                    message: 'himm',
                    msgId: 'xY8cN7yuPQfBgJ9xz',
                    ts: '2023-08-30T09:33:15.621Z',
                    username: 'test.test',
                    name: 'Testtest',
                    userId: '5fRTXMt7DMJbpPJfh',
                    isUserDeleted: false,
                  },
                ],
                count: 2,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ModerationUserReportedMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.user.reportedMessages',
  tags: ['Moderation'],
  summary: "Get User's Reported Messages",
  description:
    'Retrieve all reported messages of a user.\nPermission required: `view-moderation-console`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'get-api-v1-moderation.user.reportedMessages',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      userId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            description: 'The id of the user whose reported messages should be retrieved.',
            name: 'userId',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      message: z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          md: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z.string().exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      room: z
                        .object({ _id: z.string().exactOptional(), t: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
                messages: [
                  {
                    _id: '64ef0f992c26843a68c1f785',
                    message: {
                      _id: 'EbhcT4vjrCDyZuHKq',
                      rid: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ',
                      msg: 'hola',
                      ts: '2023-08-30T09:44:30.805Z',
                      u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
                      _updatedAt: '2023-08-30T09:44:30.968Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hola' }] }],
                    },
                    room: { _id: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ', t: 'd' },
                    ts: '2023-08-30T09:44:57.912Z',
                  },
                  {
                    _id: '64ef0cdb2c26843a68c1f780',
                    message: {
                      _id: 'xY8cN7yuPQfBgJ9xz',
                      rid: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ',
                      msg: 'himm',
                      ts: '2023-07-11T01:37:07.951Z',
                      u: { _id: '5fRTXMt7DMJbpPJfh', username: 'test.test', name: 'Testtest' },
                      _updatedAt: '2023-07-11T01:37:08.024Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'himm' }] }],
                    },
                    room: { _id: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ', t: 'd' },
                    ts: '2023-08-30T09:33:15.621Z',
                  },
                ],
                count: 2,
                total: 2,
                offset: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ModerationReportsRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.reports',
  tags: ['Moderation'],
  summary: 'Get Reports of a Message',
  description:
    'Retrieve all the reports of a single message. A message can have many reports.\nPermission required: `view-moderation-console`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'get-api-v1-moderation.reports',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      msgId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            description: 'The ID of the message to fetch reports for.',
            name: 'msgId',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              reports: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      reportedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          createdAt: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      room: z
                        .object({ _id: z.string().exactOptional(), t: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                reports: [
                  {
                    _id: '64ef0f992c26843a68c1f785',
                    description: 'test report\n',
                    reportedBy: {
                      _id: 'rbAXPnMktTFbNpwtJ',
                      username: 'test.test',
                      name: 'test test',
                      createdAt: '2023-02-20T13:42:07.119Z',
                    },
                    room: { _id: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ', t: 'd' },
                    ts: '2023-08-30T09:44:57.912Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ModerationReportInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.reportInfo',
  tags: ['Moderation'],
  summary: 'Get Report Information',
  description:
    'Get more details of a single report.\nPermission required: `view-moderation-console`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'get-api-v1-moderation.reportInfo',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      reportId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            description: 'The ID of the report to fetch details for.',
            name: 'reportId',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ModerationDismissReportsRoute = createRoute({
  method: 'post',
  path: '/api/v1/moderation.dismissReports',
  tags: ['Moderation'],
  summary: 'Dismiss Reports',
  description:
    'You can dismiss all the reports of a particular user by the `userId`. You can also dismiss the report of a message by the `msgId`.\nPermission required: `manage-moderation-actions`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'post-api-v1-moderation.dismissReports',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user whose reports to dismiss. This parameter is required if `msgId` is not provided.',
                  example: 'BsNr28znDkG8aeo7W',
                }),
              msgId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the message which reports to dismiss. This parameter is required if `userId` is not provided.',
                  example: '7aDSXtjMA3KPWxdt2',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ModerationUserDeleteReportedMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/moderation.user.deleteReportedMessages',
  tags: ['Moderation'],
  summary: 'Delete Reported Messages of a User',
  description:
    'Delete all the reports of messages that belongs to user. Permission required: `manage-moderation-actions`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.2.0            | Added       |',
  operationId: 'post-api-v1-moderation.user.deleteReportedMessages',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description: 'The ID of the user whose reports to dismiss.',
                  example: 'BsNr28znDkG8aeo7W',
                }),
            })
            .openapi({ required: ['userId'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1ModerationDismissUserReportsRoute = createRoute({
  method: 'post',
  path: '/api/v1/moderation.dismissUserReports',
  tags: ['Moderation'],
  summary: 'Dismiss User Reports',
  description:
    'Dismiss a specific reported user from the list of reported users. Permission required: `manage-moderation-actions`',
  operationId: 'post-api-v1-moderation.dismissUserReports',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  example: 'qHWhoJwwgk4bwcoNq',
                  description:
                    'Enter the user ID of the reported user that you want to dismiss. Make sure that the ID belongs to the reported user.',
                }),
              reason: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter a reason for dismissing the reported user.' }),
            })
            .openapi({ required: ['userId'] }),
          examples: {
            'Example 1': { value: { userId: 'qHWhoJwwgk4bwcoNq', reason: 'Description' } },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property 'msgId'\n must have required property 'userId'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ModerationUserReportsByUserIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.user.reportsByUserId',
  tags: ['Moderation'],
  summary: 'Get User Reports by User ID',
  description:
    "Get the details of a specific user's reports. Permission required: `view-moderation-console`",
  operationId: 'get-api-v1-moderation.user.reportsByUserId',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'Ahgf5k9Ca4YEdMjwX' },
            in: 'query',
            name: 'userId',
            description:
              'Enter the user ID for which you want to retrieve the reports. Make sure that the user ID belongs to the user whose reports you want to retrieve. Entering a user ID with no reports returns the user details, and an incorrect ID returns null results.',
            required: true,
          },
          example: 'Ahgf5k9Ca4YEdMjwX',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  roles: z.array(z.string()).exactOptional(),
                  active: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  avatarETag: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              reports: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      reportedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          createdAt: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      reportedUser: z
                        .object({
                          _id: z.string().exactOptional(),
                          createdAt: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          emails: z
                            .array(
                              z
                                .object({
                                  address: z.string().exactOptional(),
                                  verified: z.boolean().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                user: {
                  _id: 'J6Q87AnWP5aNc9xhx',
                  createdAt: '2025-02-04T13:02:39.356Z',
                  username: 'cat.kate',
                  emails: [{ address: 'testaz@example.com', verified: false }],
                  roles: ['user', 'livechat-agent', 'livechat-monitor'],
                  active: true,
                  name: 'cat kate',
                  avatarETag: 'pwJbBtoz47Zkf9myK',
                },
                reports: [
                  {
                    _id: '6969ea608de1f4fa0e7f62fa',
                    description: 'issue',
                    reportedBy: {
                      _id: 'C38WSSzrGd2NCjzqJ',
                      name: 'test cat',
                      username: 'test.cat',
                      createdAt: null,
                    },
                    reportedUser: {
                      _id: 'J6Q87AnWP5aNc9xhx',
                      createdAt: '2025-02-04T13:02:39.356Z',
                      username: 'cat.kate',
                      emails: [{ address: 'testaz@example.com', verified: false }],
                      name: 'cat kate',
                    },
                    ts: '2026-01-16T07:36:00.020Z',
                  },
                ],
                count: 1,
                total: 1,
                offset: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'userId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1ModerationUserReportsRoute = createRoute({
  method: 'get',
  path: '/api/v1/moderation.userReports',
  tags: ['Moderation'],
  summary: 'Get Reported Users',
  description: 'Get the list of reported users. Permission required: `view-moderation-console`',
  operationId: 'get-api-v1-moderation.userReports',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              reports: z
                .array(
                  z
                    .object({
                      count: z.int().exactOptional(),
                      reportedUser: z
                        .object({
                          _id: z.string().exactOptional(),
                          createdAt: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          emails: z
                            .array(
                              z
                                .object({
                                  address: z.string().exactOptional(),
                                  verified: z.boolean().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      ts: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                reports: [
                  {
                    count: 1,
                    reportedUser: {
                      _id: 'J6Q87AnWP5aNc9xhx',
                      createdAt: '2025-02-04T13:02:39.356Z',
                      username: 'cat.kate',
                      emails: [{ address: 'testaz@example.com', verified: false }],
                      name: 'cat kate',
                    },
                    ts: '2026-01-16T07:36:00.020Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1SessionsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/sessions/list',
  tags: ['Device Management'],
  summary: 'Get Current User Sessions',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieves all sessions of the authenticated user making the request.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.0.0            | Added       |',
  operationId: 'get-api-v1-sessions-list',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'windows',
            in: 'query',
            name: 'filter',
            description: 'Filter sessions list using regex.',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sessions: z
                .array(
                  z
                    .object({
                      sessionId: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      device: z
                        .object({
                          type: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          longVersion: z.string().exactOptional(),
                          os: z
                            .object({
                              name: z.string().exactOptional(),
                              version: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          version: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      host: z.string().exactOptional(),
                      ip: z.string().exactOptional(),
                      loginAt: z.string().exactOptional(),
                      _id: z.string().exactOptional(),
                      current: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether the session belongs to the device making the request.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                sessions: [
                  {
                    sessionId: 'QoYYFw2t9oKks2niG',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T16:33:45.202Z',
                    _id: 'QoYYFw2t9oKks2niG',
                    current: false,
                  },
                  {
                    sessionId: 'WJ2giBwm4B9mcojFi',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    device: {
                      type: 'mobile',
                      name: 'Chrome',
                      longVersion: '112.0.0.0',
                      os: { name: 'Android', version: '10' },
                      version: '112.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T12:43:52.023Z',
                    _id: 'WJ2giBwm4B9mcojFi',
                    current: false,
                  },
                ],
                total: 2,
                count: 50,
                offset: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1SessionsListAllRoute = createRoute({
  method: 'get',
  path: '/api/v1/sessions/list.all',
  tags: ['Device Management'],
  summary: 'Get All User Sessions',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve the sessions of all users on the workspace. This endpoint requires 2FA.\nPermission required: `view-device-management`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|5.0.0         | Added       |',
  operationId: 'get-api-v1-sessions-list.all',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'windows',
            in: 'query',
            name: 'filter',
            description: 'Filter sessions list using regex.',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sessions: z
                .array(
                  z
                    .object({
                      sessionId: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      device: z
                        .object({
                          type: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          longVersion: z.string().exactOptional(),
                          os: z
                            .object({
                              name: z.string().exactOptional(),
                              version: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          version: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      host: z.string().exactOptional(),
                      ip: z.string().exactOptional(),
                      loginAt: z.string().exactOptional(),
                      _user: z
                        .object({
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _id: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total: z.int().exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                sessions: [
                  {
                    sessionId: 'o94SveQp6fyPsoiNC',
                    userId: '2tTEqR7ZNMJ4HGGNa',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-24T00:25:54.234Z',
                    _user: { username: 'testroxie', name: 'Test' },
                    _id: 'o94SveQp6fyPsoiNC',
                  },
                  {
                    sessionId: 'BdSrCZXNKCbRi8Eqn',
                    userId: 'rbAXPnMktTFbNpwtJ',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-24T00:25:52.246Z',
                    _user: { username: 'test.test', name: 'test test' },
                    _id: 'BdSrCZXNKCbRi8Eqn',
                  },
                  {
                    sessionId: 'tTouumJMrHMjnedWf',
                    userId: 'GonjPyg3gB3Z9ur9s',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T19:14:29.865Z',
                    _user: { name: 'test', username: 'test.test' },
                    _id: 'tTouumJMrHMjnedWf',
                  },
                  {
                    sessionId: '7ykYEK3KWnk4EeA7s',
                    userId: '2tTEqR7ZNMJ4HGGNa',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T19:14:28.717Z',
                    _user: { username: 'testroxie', name: 'Test' },
                    _id: '7ykYEK3KWnk4EeA7s',
                  },
                  {
                    sessionId: 'jfD6mnHnrEJdPq9MF',
                    userId: 'stjxrXYBWy3EcDugH',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T15:21:57.188Z',
                    _user: { username: 'rocket.agent', name: 'Rocket Agent' },
                    _id: 'jfD6mnHnrEJdPq9MF',
                  },
                  {
                    sessionId: '2jQnfG74X3EZYL9tj',
                    userId: 'rYhzFRd2QZjNwAAXX',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.20.0.2',
                    loginAt: '2023-05-23T15:19:48.723Z',
                    _user: { name: 'Rodriq', username: 'rodriq' },
                    _id: '2jQnfG74X3EZYL9tj',
                  },
                  {
                    sessionId: 'fsfE772s78AmPxGKk',
                    userId: 'uZ5JvvioeHK8Coyqe',
                    device: {
                      type: 'browser',
                      name: 'Firefox',
                      longVersion: '112.0',
                      os: { name: 'Windows', version: '10' },
                      version: '112.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.18.0.4',
                    loginAt: '2023-05-16T20:50:33.608Z',
                    _user: { username: 'user-0' },
                    _id: 'fsfE772s78AmPxGKk',
                  },
                  {
                    sessionId: 'W4y9xkjyqFvbjENco',
                    userId: 'b66oZ8i9pkeSko33v',
                    device: {
                      type: 'browser',
                      name: 'Chrome',
                      longVersion: '113.0.0.0',
                      os: { name: 'Windows', version: '10' },
                      version: '113.0.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.18.0.4',
                    loginAt: '2023-05-16T12:46:09.469Z',
                    _user: { username: 'guester', name: 'Guester' },
                    _id: 'W4y9xkjyqFvbjENco',
                  },
                  {
                    sessionId: '94yTWFkADGBvE9t7P',
                    userId: 'aspKK7FHe7iQgzexX',
                    device: {
                      type: 'browser',
                      name: 'Firefox',
                      longVersion: '112.0',
                      os: { name: 'Windows', version: '10' },
                      version: '112.0',
                    },
                    host: 'localhost:3000',
                    ip: '172.18.0.4',
                    loginAt: '2023-05-11T18:47:13.865Z',
                    _user: { username: 'user-00', name: 'User 00' },
                    _id: '94yTWFkADGBvE9t7P',
                  },
                ],
                total: 13,
                count: 50,
                offset: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'TOTP Error': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1SessionsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/sessions/info',
  tags: ['Device Management'],
  summary: 'Get Current User Session Information',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve session information for sessions owned by the authenticated user. This endpoint provides detailed information about the user\'s sessions on the workspace. It does not grant access to the session information of other users on the workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.0.0            | Added       |',
  operationId: 'get-api-v1-sessions-info',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'windows',
            in: 'query',
            name: 'sessionId',
            description: 'The session ID.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              type: z.string().exactOptional(),
              sessionId: z.string().exactOptional(),
              instanceId: z.string().exactOptional(),
              loginToken: z.string().exactOptional(),
              ip: z.string().exactOptional(),
              host: z.string().exactOptional(),
              device: z
                .object({
                  type: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  longVersion: z.string().exactOptional(),
                  os: z
                    .object({
                      name: z.string().exactOptional(),
                      version: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  version: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              userId: z.string().exactOptional(),
              roles: z.array(z.string()).exactOptional(),
              mostImportantRole: z.string().exactOptional(),
              loginAt: z.string().exactOptional(),
              day: z.int().exactOptional(),
              month: z.int().exactOptional(),
              year: z.int().exactOptional(),
              searchTerm: z.string().exactOptional(),
              createdAt: z.string().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              closedAt: z.string().exactOptional(),
              lastActivityAt: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: '646ceae9a8c3a3ba32d0e897',
                type: 'session',
                sessionId: 'QoYYFw2t9oKks2niG',
                instanceId: 'f0313fa9-ebe6-4a84-8580-3104f6a09988',
                loginToken: 'orklPYtfnjnG6mG7OMuLbOBDzs8I9myfcLl2yzv7WoU=',
                ip: '172.20.0.2',
                host: 'localhost:3000',
                device: {
                  type: 'browser',
                  name: 'Chrome',
                  longVersion: '113.0.0.0',
                  os: { name: 'Windows', version: '10' },
                  version: '113.0.0',
                },
                userId: 'rbAXPnMktTFbNpwtJ',
                roles: ['user', 'admin', 'livechat-agent', 'livechat-manager'],
                mostImportantRole: 'admin',
                loginAt: '2023-05-23T16:33:45.202Z',
                day: 23,
                month: 5,
                year: 2023,
                searchTerm: 'ChromebrowserWindowsQoYYFw2t9oKks2niGrbAXPnMktTFbNpwtJ',
                createdAt: '2023-05-23T16:33:45.203Z',
                _updatedAt: '2023-05-23T17:56:31.599Z',
                closedAt: '2023-05-23T17:56:31.599Z',
                lastActivityAt: '2023-05-23T17:56:31.599Z',
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'sessionId'",
              },
            },
            'Session not found': { value: { success: false, error: 'Session not found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1SessionsInfoAdminRoute = createRoute({
  method: 'get',
  path: '/api/v1/sessions/info.admin',
  tags: ['Device Management'],
  summary: 'Get Session Information',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieve session information for any session on the workspace, regardless of the session owner. This endpoint allows authorized users to access session details across the workspace and requires 2FA.\nPermission required: `view-device-management`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|5.0.0         | Added       |',
  operationId: 'get-api-v1-sessions-info.admin',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    query: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'windows',
            in: 'query',
            name: 'sessionId',
            description: 'The session ID.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z.string().exactOptional(),
              userId: z.string().exactOptional(),
              device: z
                .object({
                  type: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  longVersion: z.string().exactOptional(),
                  os: z
                    .object({
                      name: z.string().exactOptional(),
                      version: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  version: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              host: z.string().exactOptional(),
              ip: z.string().exactOptional(),
              loginAt: z.string().exactOptional(),
              _user: z
                .object({ name: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              _id: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                sessionId: 'uBNL9dTjJ4s6Pjp4K',
                userId: 'rYhzFRd2QZjNwAAXX',
                device: {
                  type: 'browser',
                  name: 'Chrome',
                  longVersion: '113.0.0.0',
                  os: { name: 'Windows', version: '10' },
                  version: '113.0.0',
                },
                host: 'localhost:3000',
                ip: '172.20.0.2',
                loginAt: '2023-05-24T05:08:42.806Z',
                _user: { name: 'Rod', username: 'Rod' },
                _id: 'uBNL9dTjJ4s6Pjp4K',
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'sessionId'",
              },
            },
            'Session not found': { value: { success: false, error: 'Session not found' } },
            'TOTP Error': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1SessionsLogoutMeRoute = createRoute({
  method: 'post',
  path: '/api/v1/sessions/logout.me',
  tags: ['Device Management'],
  summary: 'Logout Current User Session',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nThis endpoint allows an authenticated user to log out of any of their sessions on the workspace. It is designed specifically for the user to terminate their sessions and cannot be used to log out sessions belonging to other users on the workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.0.0            | Added       |',
  operationId: 'post-api-v1-sessions-logout.me',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ sessionId: z.string().openapi({ description: 'The session ID.' }) })
            .openapi({ required: ['sessionId'] }),
          examples: { Example: { value: { sessionId: 'WJ2giBwm4B9mcojFi' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ sessionId: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { sessionId: 'WJ2giBwm4B9mcojFi', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Session not found': { value: { success: false, error: 'Session not found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1SessionsLogoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/sessions/logout',
  tags: ['Device Management'],
  summary: 'Logout Session',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nThis endpoint allows an authorized user to log out other user\'s session on the workspace and requires 2FA. It provides the capability to terminate sessions of other users, ensuring workspace security and management.\n\nPermission required: `logout-device-management`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|5.0.0         | Added       |',
  operationId: 'post-api-v1-sessions-logout',
  request: {
    headers: z.object({
      'X-User-Id': XUserIdParamsSchema,
      'X-Auth-Token': XAuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z
                .string()
                .openapi({ description: 'The session ID.', example: 'tTouumJMrHMjnedWf' }),
            })
            .openapi({ required: ['sessionId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ sessionId: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { sessionId: 'tTouumJMrHMjnedWf', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'TOTP Error': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1PwGetPolicyRoute = createRoute({
  method: 'get',
  path: '/api/v1/pw.getPolicy',
  tags: ['Password policy'],
  summary: 'Get Password Policy',
  description:
    'Get the current [password policy](https://docs.rocket.chat/v1/docs/accounts#password-policy) for users in your workspace.\nThe `pw.getPolicyReset` endpoint has been removed from 7.0. Use this endpoint instead.',
  operationId: 'get-pw.getPolicy',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.looseObject({}),
          examples: {
            Success: {
              value: {
                enabled: true,
                policy: [
                  ['get-password-policy-minLength', { minLength: 7 }],
                  ['get-password-policy-forbidRepeatingCharacters'],
                  [
                    'get-password-policy-forbidRepeatingCharactersCount',
                    { forbidRepeatingCharactersCount: 3 },
                  ],
                  ['get-password-policy-mustContainAtLeastOneLowercase'],
                  ['get-password-policy-mustContainAtLeastOneUppercase'],
                  ['get-password-policy-mustContainAtLeastOneNumber'],
                  ['get-password-policy-mustContainAtLeastOneSpecialCharacter'],
                ],
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1VideoConferenceCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-conference.capabilities',
  tags: ['Video Conference'],
  summary: 'Get Video Conference Capabilities',
  description:
    'Get details on the video call capabilities, such as the name of the provider, and whether Rocket.Chat can control the microphone and camera state. This endpoint is used for the video conference system to dynamically adapt the UI based on provider capabilities, ensuring users only see controls that are actually supported by the configured video conference provider.\n\nRate limiting: 3 requests per 1000ms',
  operationId: 'get-api-v1-video-conference.capabilities',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              providerName: z.string().exactOptional(),
              capabilities: z
                .object({
                  mic: z.boolean().exactOptional(),
                  cam: z.boolean().exactOptional(),
                  title: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                providerName: 'googlemeet',
                capabilities: { mic: false, cam: false, title: false },
                success: true,
              },
            },
            'Example 2': {
              value: {
                providerName: 'jitsi',
                capabilities: { mic: true, cam: true, title: true },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: 'no-active-video-conf-provider' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1VideoConferenceListRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-conference.list',
  tags: ['Video Conference'],
  summary: 'Get List of Video Conferences',
  description:
    'Use this endpoint to get the list of video calls for a specific room. Rate limiting: 3 requests per 1000ms.',
  operationId: 'get-api-v1-video-conference.list',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '674eca3e43725ce31dd9a2e8' },
            in: 'query',
            name: 'roomId',
            description:
              'Enter the room ID for which you want to view the list of video conferences. Make sure that you have access to the room.',
            required: true,
          },
          example: '674eca3e43725ce31dd9a2e8',
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      users: z
                        .array(
                          z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                              avatarETag: z.string().exactOptional(),
                              ts: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      messages: z
                        .object({ started: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z.int().exactOptional(),
                      anonymousUsers: z.int().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      providerName: z.string().exactOptional(),
                      ringing: z.boolean().exactOptional(),
                      title: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      url: z.string().exactOptional(),
                      endedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                data: [
                  {
                    _id: '69786d0ac8b05330207814bd',
                    type: 'videoconference',
                    users: [
                      {
                        _id: 'fRv4qm8ycWHXSA7af',
                        username: 'jane.doe',
                        name: 'jane',
                        avatarETag: null,
                        ts: '2026-01-27T07:45:14.977Z',
                      },
                    ],
                    messages: { started: '8AqsmsMXDePKfDbHv' },
                    status: 1,
                    anonymousUsers: 0,
                    createdAt: '2026-01-27T07:45:14.533Z',
                    providerName: 'googlemeet',
                    ringing: true,
                    title: 'ui-test',
                    rid: '674eca3e43725ce31dd9a2e8',
                    createdBy: { _id: 'fRv4qm8ycWHXSA7af', name: 'jane', username: 'jane.doe' },
                    _updatedAt: '2026-01-27T07:45:14.977Z',
                    url: 'http://g.co/meet/RocketChat_69786d0ac8b05330207814bd',
                  },
                  {
                    _id: '6772586c8dd061cca4edc998',
                    type: 'videoconference',
                    users: [
                      {
                        _id: 'fRv4qm8ycWHXSA7af',
                        username: 'jane.doe',
                        name: 'jane',
                        ts: '2024-12-30T08:23:11.130Z',
                      },
                    ],
                    messages: { started: 'sTDmP2WSH6Rwt89iw' },
                    status: 2,
                    anonymousUsers: 0,
                    createdAt: '2024-12-30T08:23:08.655Z',
                    providerName: 'jitsi',
                    rid: '674eca3e43725ce31dd9a2e8',
                    title: 'ui-test',
                    createdBy: { _id: 'fRv4qm8ycWHXSA7af', name: 'jane', username: 'jane.doe' },
                    _updatedAt: '2024-12-31T09:00:00.025Z',
                    url: 'https://meet.jit.si/RocketChat6772586c8dd061cca4edc998',
                    endedAt: '2024-12-31T09:00:00.025Z',
                  },
                ],
                offset: 0,
                count: 2,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1VideoConferenceInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-conference.info',
  tags: ['Video Conference'],
  summary: 'Get Video Conference Details',
  description:
    "Get details about a specific video conference. Rate limiting: 15 requests per 3000ms.\n\nYou must be a member of the conference or have access to the conference's room or discussion. The `chatAccess` object lists the members who cannot read the call chat; use `video-conference.share-chat` to give them access.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added `chatAccess` and member status fields in `users`. |",
  operationId: 'get-api-v1-video-conference.info',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      callId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '697866d5c8b053302078137a' },
            in: 'query',
            name: 'callId',
            description: 'Enter the call ID.',
            required: true,
          },
          example: '697866d5c8b053302078137a',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              type: z.string().exactOptional(),
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
                      ts: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'When the user became a member of the conference.',
                        }),
                      joined: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the member joined the call.' }),
                      joinedAt: z.string().exactOptional(),
                      declined: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether the member declined the call. A member can decline and join later.',
                        }),
                      declinedAt: z.string().exactOptional(),
                      leftAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'When the member last left the call. Cleared if the member rejoins.',
                        }),
                      leftReason: z
                        .enum(['reported', 'timeout'])
                        .exactOptional()
                        .openapi({
                          description:
                            "How the departure was recorded. `reported` means the member's client reported it; `timeout` means the member's presence heartbeat stopped.",
                        }),
                      lastSeenAt: z.string().exactOptional(),
                      ringingAt: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'When the member was last rung.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              messages: z
                .object({ started: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.int().exactOptional(),
              anonymousUsers: z.int().exactOptional(),
              createdAt: z.string().exactOptional(),
              providerName: z.string().exactOptional(),
              ringing: z.boolean().exactOptional(),
              title: z.string().exactOptional(),
              rid: z.string().exactOptional(),
              createdBy: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              _updatedAt: z.string().exactOptional(),
              url: z.string().exactOptional(),
              capabilities: z
                .object({
                  mic: z.boolean().exactOptional(),
                  cam: z.boolean().exactOptional(),
                  title: z.boolean().exactOptional(),
                  persistentChat: z.boolean().exactOptional(),
                  embedded: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the provider renders the call embedded in Rocket.Chat instead of opening an external URL.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              chatAccess: z
                .object({
                  rid: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The ID of the room that holds the call chat, either the conference's room or its discussion.",
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The display name of that room.' }),
                  type: z.string().exactOptional().openapi({ description: 'The room type.' }),
                  membersWithoutAccess: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The user IDs of conference members who cannot read the call chat.',
                    }),
                  canInvite: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the room can take new members. When `false`, use the `discussion` mode of `video-conference.share-chat`.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Where the call chat is and which conference members cannot read it.',
                  required: [],
                }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                _id: '697866d5c8b053302078137a',
                type: 'videoconference',
                users: [
                  {
                    _id: 'fRv4qm8ycWHXSA7af',
                    username: 'jane.doe',
                    name: 'jane',
                    avatarETag: null,
                    ts: '2026-01-27T07:18:46.491Z',
                  },
                ],
                messages: { started: 'RdiQLFktbFxtK2XTZ' },
                status: 1,
                anonymousUsers: 0,
                createdAt: '2026-01-27T07:18:45.956Z',
                providerName: 'googlemeet',
                ringing: true,
                title: 'testdiscussion',
                rid: '68c8071650223764573dd2dc',
                createdBy: { _id: 'fRv4qm8ycWHXSA7af', name: 'jane', username: 'jane.doe' },
                _updatedAt: '2026-01-27T07:18:46.491Z',
                url: 'http://g.co/meet/RocketChat_697866d5c8b053302078137a',
                capabilities: { mic: false, cam: false, title: false },
                chatAccess: {
                  rid: '68c8071650223764573dd2dc',
                  name: 'testdiscussion',
                  type: 'c',
                  membersWithoutAccess: [],
                  canInvite: true,
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1VideoConferenceProvidersRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-conference.providers',
  tags: ['Video Conference'],
  summary: 'Get Video Conference Providers',
  description:
    'Get the list of available video conference providers in your workspace, regardless of their active status. Rate limiting: 3 requests per 1000ms.',
  operationId: 'get-api-v1-video-conference.providers',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({ key: z.string().exactOptional(), label: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                data: [
                  { key: 'pexip', label: 'Pexip' },
                  { key: 'googlemeet', label: 'GoogleMeet' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1VideoConferenceStartRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.start',
  tags: ['Video Conference'],
  summary: 'Start Video Conference',
  description:
    'Use this endpoint to begin a video call in a specific room. Rate limiting: 3 requests per 60000ms. Permission required: `call-management`.',
  operationId: 'post-api-v1-video-conference.start',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: 'Enter the room ID where you want to start the video call.',
                  example: '674eca3e43725ce31dd9a2e8',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter a title for the video call.' }),
              allowRinging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to enable ringing for direct calls (requires `videoconf-ring-users` permission; by default admin, users, moderators, and owners have this permission).',
                }),
            })
            .openapi({ required: ['roomId'] }),
          examples: {
            'Example 1': {
              value: { roomId: '674eca3e43725ce31dd9a2e8', title: 'Test Call', allowRinging: true },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  type: z.string().exactOptional(),
                  callId: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  providerName: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                data: {
                  type: 'videoconference',
                  callId: '697887e3c8b0533020781a4a',
                  rid: '674eca3e43725ce31dd9a2e8',
                  providerName: 'googlemeet',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1VideoConferenceJoinRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.join',
  tags: ['Video Conference'],
  summary: 'Join a Video Conference',
  description:
    "Join a specific video conference. Rate limiting: 2 requests per 5000ms. This endpoint also allows anonymous access for guest users.\n\nMembers of the conference can join it even without access to the conference's room. For providers that render the call embedded in Rocket.Chat, `url` is returned empty.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added `callId` and `rid`, and an empty `url` for embedded providers. |",
  operationId: 'post-api-v1-video-conference.join',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              callId: z
                .string()
                .openapi({
                  example: '697887e3c8b0533020781a4a',
                  description: 'Enter the video conference call ID that you want to join.',
                }),
              state: z
                .object({
                  mic: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the microphone starts muted or unmuted.' }),
                  cam: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the camera starts enabled or disabled.' }),
                })
                .exactOptional()
                .openapi({ description: 'Object containing initial device states.', required: [] }),
            })
            .openapi({ required: ['callId'] }),
          examples: {
            'Example 1': {
              value: { callId: '697887e3c8b0533020781a4a', state: { mic: true, cam: true } },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL to open the call. Empty for providers that render the call embedded in Rocket.Chat.',
                }),
              providerName: z.string().exactOptional(),
              callId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The video conference call ID.' }),
              rid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the room the call belongs to.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                url: 'http://g.co/meet/RocketChat_697887e3c8b0533020781a4a',
                providerName: 'googlemeet',
                callId: '697887e3c8b0533020781a4a',
                rid: '68c8071650223764573dd2dc',
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1VideoConferenceCancelRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.cancel',
  tags: ['Video Conference'],
  summary: 'Cancel Video Conference',
  description:
    'Cancel a specific video conference call. You can only cancel a call that is in the calling state. Rate limiting: 3 requests per 60 seconds.',
  operationId: 'post-api-v1-video-conference.cancel',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              callId: z
                .string()
                .openapi({
                  example: '697887e3c8b0533020781a4a',
                  description: 'Enter the call ID that you want to cancel.',
                }),
            })
            .openapi({ required: ['callId'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'invalid-call' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1VideoConferenceDeclineRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.decline',
  tags: ['Video Conference'],
  summary: 'Decline a Video Conference',
  description:
    "Records that you declined the call. Only your own membership is updated; the call keeps running for everyone else, and you can still join it later.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 10 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.decline',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
            })
            .openapi({ required: ['callId'] }),
          examples: { Example: { value: { callId: '697887e3c8b0533020781a4a' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceLeaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.leave',
  tags: ['Video Conference'],
  summary: 'Leave a Video Conference',
  description:
    "Records that you left the call. The conference ends when no participant is left in it.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 20 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.leave',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
            })
            .openapi({ required: ['callId'] }),
          examples: { Example: { value: { callId: '697887e3c8b0533020781a4a' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceHeartbeatRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.heartbeat',
  tags: ['Video Conference'],
  summary: 'Renew Video Conference Presence',
  description:
    "Confirms that you are still in the call. The call window sends this request periodically. When these requests stop, for example because the client closed unexpectedly, the server records you as having left the call.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 20 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.heartbeat',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
            })
            .openapi({ required: ['callId'] }),
          examples: { Example: { value: { callId: '697887e3c8b0533020781a4a' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceRingRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.ring',
  tags: ['Video Conference'],
  summary: 'Ring a Video Conference Member',
  description:
    "Rings a conference member who is not in the call. The response field `rang` is `false` when no ring was sent, for example because the member is already in the call, is already being rung, or the call has ended.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.\n\nPermission required: `videoconf-ring-users`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.ring',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
              userId: z
                .string()
                .openapi({
                  description: 'The user ID (not the username) of the conference member to ring.',
                  example: 'kP3wQz8LmNvT5rXyB',
                }),
            })
            .openapi({ required: ['callId', 'userId'] }),
          examples: {
            Example: { value: { callId: '697887e3c8b0533020781a4a', userId: 'kP3wQz8LmNvT5rXyB' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              rang: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the member was rung.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { rang: true, success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceAddParticipantsRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.add-participants',
  tags: ['Video Conference'],
  summary: 'Add Video Conference Participants',
  description:
    "Adds users as members of the conference. Membership allows a user to join the call, but does not add them to the conference's room, so they might not be able to read the call chat. Use `video-conference.info` to check `chatAccess`, and `video-conference.share-chat` to give members access to the chat.\n\nThe response lists the user IDs of the members that were added. Users who are already members, usernames that do not exist, and calls that have ended result in no additions.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.add-participants',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
              users: z
                .array(z.string())
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'The usernames (not user IDs) of the people to add. Enter between 1 and 10 usernames.',
                  example: ['sam.okafor', 'lee.chen'],
                }),
              ring: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to ring the people being added. Defaults to `false`. Ringing also requires the `videoconf-ring-users` permission; without it, the users are added without being rung.',
                }),
            })
            .openapi({ required: ['callId', 'users'] }),
          examples: {
            Example: {
              value: {
                callId: '697887e3c8b0533020781a4a',
                users: ['sam.okafor', 'lee.chen'],
                ring: true,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              added: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user IDs of the members that were added.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { added: ['kP3wQz8LmNvT5rXyB', 'Hn4tYw9QeVb2LsJxR'], success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceRenameRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.rename',
  tags: ['Video Conference'],
  summary: 'Rename a Video Conference',
  description:
    "Changes the title of an ongoing group video conference. Only the user who started the call can rename it. Otherwise, the request fails with `error-not-allowed`. Calls that have ended and direct calls cannot be renamed and return `error-invalid-video-conf`.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 10 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.rename',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
              title: z
                .string()
                .min(1)
                .max(200)
                .openapi({
                  description: 'The new conference title. Leading and trailing spaces are removed.',
                  example: 'Sprint planning',
                }),
            })
            .openapi({ required: ['callId', 'title'] }),
          examples: {
            Example: { value: { callId: '697887e3c8b0533020781a4a', title: 'Sprint planning' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const postApiV1VideoConferenceShareChatRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference.share-chat',
  tags: ['Video Conference'],
  summary: 'Share Video Conference Chat',
  description:
    "Gives the conference members who cannot read the call chat access to it, and returns the ID of the room that holds the chat afterwards. If every member already has access, the current chat room ID is returned and nothing changes. When the selected `mode` is not allowed, the request fails with `error-not-allowed`.\n\nYou must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |",
  operationId: 'post-api-v1-video-conference.share-chat',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              callId: z
                .string()
                .openapi({
                  description: 'The video conference call ID.',
                  example: '697887e3c8b0533020781a4a',
                }),
              mode: z
                .enum(['invite', 'discussion'])
                .openapi({
                  description:
                    'How to give members access to the call chat:\n* `invite`: Add the members without access to the room that holds the chat. Not available for rooms that cannot take new members, such as direct messages.\n* `discussion`: Move the chat to a new discussion that includes the conference members. Requires discussions to be enabled and the `start-discussion` or `start-discussion-other-user` permission.',
                  example: 'discussion',
                }),
            })
            .openapi({ required: ['callId', 'mode'] }),
          examples: {
            Example: { value: { callId: '697887e3c8b0533020781a4a', mode: 'discussion' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the room that holds the call chat.' }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { rid: '7Tb3XkPq9WmRzL2cN', success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description:
        'Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const getApiV1VideoConferenceJoinableRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-conference.joinable',
  tags: ['Video Conference'],
  summary: 'Get Joinable Video Conferences',
  description:
    'Lists the video conferences running now that you can join, including calls you are already in and calls that are ringing for you. Empty calls are not listed. Requests are limited to 30 per minute per client IP address.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-video-conference.joinable',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              calls: z
                .array(
                  z
                    .object({
                      callId: z.string().exactOptional(),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The conference title, or the room name if the conference has no title.',
                        }),
                      createdAt: z.string().exactOptional(),
                      usersCount: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'The number of people in the call now.' }),
                      participants: z
                        .array(
                          z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Some of the people in the call. The list is capped by the server; use `usersCount` for the total.',
                        }),
                      joined: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether you are in the call.' }),
                      declined: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether you declined the call.' }),
                      ringingAt: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'When you were last rung for this call.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                calls: [
                  {
                    callId: '697887e3c8b0533020781a4a',
                    name: 'Sprint planning',
                    createdAt: '2026-09-23T10:00:00.000Z',
                    usersCount: 2,
                    participants: [
                      { _id: 'rbAXPnMktTFbNpwtJ', username: 'dana.reyes', name: 'Dana Reyes' },
                      { _id: 'kP3wQz8LmNvT5rXyB', username: 'sam.okafor', name: 'Sam Okafor' },
                    ],
                    joined: false,
                    declined: false,
                    ringingAt: '2026-09-23T10:00:02.000Z',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1MediaCallsStateRoute = createRoute({
  method: 'get',
  path: '/api/v1/media-calls.state',
  tags: ['Media Calls'],
  summary: 'Get Current Media Call State',
  description:
    "Returns ongoing media calls the authenticated user is part of. It shows call's latest server-side state — `ringing`, `active`, etc.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.4.0   | Added       |\n",
  operationId: 'post-api-v1-get-media-calls.state',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'The list of in-flight calls for the authenticated user.',
      content: {
        'application/json': {
          schema: z
            .object({
              calls: z
                .array(
                  z
                    .object({
                      _id: z
                        .uuid()
                        .exactOptional()
                        .openapi({
                          description: 'Unique identifier of the call.',
                          example: '9f44ec94-2046-4fac-976b-fa8b0e022b08',
                        }),
                      service: z
                        .literal('webrtc')
                        .exactOptional()
                        .openapi({
                          description: 'Underlying media service powering the call.',
                          example: 'webrtc',
                        }),
                      kind: z
                        .literal('direct')
                        .exactOptional()
                        .openapi({ description: 'Call topology.', example: 'direct' }),
                      state: z
                        .enum(['ringing', 'active'])
                        .exactOptional()
                        .openapi({
                          description:
                            'Current lifecycle state of the call.\n- `ringing` : invitation sent, callee has not yet answered.\n- `active` : call accepted and media is flowing.\n',
                          example: 'ringing',
                        }),
                      createdBy: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'user' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Rocket.Chat user id.',
                              example: 'aEGCdnFoBFCFNdiyX',
                            }),
                          contractId: z
                            .uuid()
                            .exactOptional()
                            .openapi({
                              description:
                                'Device/session contract id registered with the media-call service.',
                              example: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The actor who created the call.', required: [] }),
                      createdAt: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'When the call record was created on the server.',
                          example: '2026-04-30T13:30:53.165Z',
                        }),
                      caller: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'user' }),
                          id: z.string().exactOptional().openapi({ example: 'aEGCdnFoBFCFNdiyX' }),
                          contractId: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4' }),
                          displayName: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Funke Olasupo' }),
                          username: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'funke.olasupo' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The party initiating the call. Always carries `contractId`.',
                          required: [],
                        }),
                      callee: z
                        .object({
                          type: z.string().exactOptional().openapi({ example: 'user' }),
                          id: z.string().exactOptional().openapi({ example: 'iaZWAXecuCuBx4FnX' }),
                          contractId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Set once the call is accepted.',
                              example: '7488b84e-e096-46fb-8d62-1e6e3db479c9',
                            }),
                          displayName: z.string().exactOptional().openapi({ example: 'Agent1' }),
                          username: z.string().exactOptional().openapi({ example: 'agent1' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'The party being called. `contractId` is omitted while\nthe call is `ringing` (no device has answered yet)\nand populated once accepted.\n',
                          required: [],
                        }),
                      expiresAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'When the current state will expire if no further activity occurs.',
                          example: '2026-04-30T13:33:12.993Z',
                        }),
                      uids: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'User IDs of every participant in the call.',
                          example: ['aEGCdnFoBFCFNdiyX', 'iaZWAXecuCuBx4FnX'],
                        }),
                      ended: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Always `false` for entries returned by this endpoint.',
                          example: false,
                        }),
                      callerRequestedId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Client-supplied correlation id for the call request.',
                          example:
                            '7b96e74d-1e01-412a-8bcb-145db1bc9ac4-38b61a15-8c41-4ee4-be75-977c48cd94ea',
                        }),
                      features: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Feature flags negotiated for this call.',
                          example: ['audio', 'screen-share', 'transfer', 'hold'],
                        }),
                      _updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'When the call record was last updated.',
                          example: '2026-04-30T13:31:12.993Z',
                        }),
                      acceptedAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Set once the callee accepts. Absent while ringing.',
                          example: '2026-04-30T13:31:10.070Z',
                        }),
                      activatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Set once media becomes active. Absent while ringing.',
                          example: '2026-04-30T13:31:12.698Z',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'All in-flight calls the authenticated user participates in.',
                }),
              success: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
          examples: {
            ringing: {
              summary: 'Outbound call is still ringing',
              value: {
                calls: [
                  {
                    _id: '9f44ec94-2046-4fac-976b-fa8b0e022b08',
                    service: 'webrtc',
                    kind: 'direct',
                    state: 'ringing',
                    createdBy: {
                      type: 'user',
                      id: 'aEGCdnFoBFCFNdiyX',
                      contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                    },
                    createdAt: '2026-04-30T13:30:53.165Z',
                    caller: {
                      type: 'user',
                      id: 'aEGCdnFoBFCFNdiyX',
                      contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                      displayName: 'Funke Olasupo',
                      username: 'funke.olasupo',
                    },
                    callee: {
                      type: 'user',
                      id: 'iaZWAXecuCuBx4FnX',
                      displayName: 'Agent1',
                      username: 'agent1',
                    },
                    expiresAt: '2026-04-30T13:33:02.878Z',
                    uids: ['aEGCdnFoBFCFNdiyX', 'iaZWAXecuCuBx4FnX'],
                    ended: false,
                    callerRequestedId:
                      '7b96e74d-1e01-412a-8bcb-145db1bc9ac4-38b61a15-8c41-4ee4-be75-977c48cd94ea',
                    features: ['audio', 'screen-share', 'transfer', 'hold'],
                    _updatedAt: '2026-04-30T13:31:02.878Z',
                  },
                ],
                success: true,
              },
            },
            active: {
              summary: 'Call has been picked up and is active',
              value: {
                calls: [
                  {
                    _id: '9f44ec94-2046-4fac-976b-fa8b0e022b08',
                    service: 'webrtc',
                    kind: 'direct',
                    state: 'active',
                    createdBy: {
                      type: 'user',
                      id: 'aEGCdnFoBFCFNdiyX',
                      contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                    },
                    createdAt: '2026-04-30T13:30:53.165Z',
                    caller: {
                      type: 'user',
                      id: 'aEGCdnFoBFCFNdiyX',
                      contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                      displayName: 'Funke Olasupo',
                      username: 'funke.olasupo',
                    },
                    callee: {
                      type: 'user',
                      id: 'iaZWAXecuCuBx4FnX',
                      contractId: '7488b84e-e096-46fb-8d62-1e6e3db479c9',
                      displayName: 'Agent1',
                      username: 'agent1',
                    },
                    expiresAt: '2026-04-30T13:33:12.993Z',
                    uids: ['aEGCdnFoBFCFNdiyX', 'iaZWAXecuCuBx4FnX'],
                    ended: false,
                    callerRequestedId:
                      '7b96e74d-1e01-412a-8bcb-145db1bc9ac4-38b61a15-8c41-4ee4-be75-977c48cd94ea',
                    features: ['audio', 'screen-share', 'transfer', 'hold'],
                    _updatedAt: '2026-04-30T13:31:12.993Z',
                    acceptedAt: '2026-04-30T13:31:10.070Z',
                    activatedAt: '2026-04-30T13:31:12.698Z',
                  },
                ],
                success: true,
              },
            },
            empty: { summary: 'User has no in-flight calls', value: { calls: [], success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1MediaCallsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/media-calls.info',
  tags: ['Media Calls'],
  summary: 'Get Media Call Details',
  description:
    'Returns the stored record for a media call, including ended calls. The record includes the sipCallId for external (SIP) calls. Only participants of the call can access the record.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Added       |',
  operationId: 'get-api-v1-media-calls.info',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      callId: z
        .string()
        .openapi({
          param: {
            name: 'callId',
            in: 'query',
            description: 'The media call ID.',
            required: true,
            schema: { type: 'string' },
            example: '9f44ec94-2046-4fac-976b-fa8b0e022b08',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              call: z
                .object({
                  _id: z.string().exactOptional().openapi({ description: 'The media call ID.' }),
                  service: z.literal('webrtc').exactOptional(),
                  kind: z.literal('direct').exactOptional(),
                  state: z
                    .enum(['none', 'ringing', 'accepted', 'active', 'hangup'])
                    .exactOptional(),
                  createdBy: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({ description: 'The actor who created the call.' }),
                  createdAt: z.iso.datetime({ offset: true }).exactOptional(),
                  caller: z
                    .object({
                      type: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      contractId: z.string().exactOptional(),
                      displayName: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      sipExtension: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The party that started the call. `type` is `user` or `sip`.',
                      required: [],
                    }),
                  callee: z
                    .object({
                      type: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      contractId: z.string().exactOptional(),
                      displayName: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      sipExtension: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The party being called. `type` is `user` or `sip`.',
                      required: [],
                    }),
                  ended: z.boolean().exactOptional(),
                  endedBy: z.looseObject({}).exactOptional(),
                  endedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  hangupReason: z.string().exactOptional(),
                  expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
                  acceptedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  activatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  uids: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'The user IDs of the call participants.' }),
                  features: z.array(z.string()).exactOptional(),
                  sipCallId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The SIP Call-ID of an external call. Present only for calls that went through SIP.',
                    }),
                  _updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                call: {
                  _id: '9f44ec94-2046-4fac-976b-fa8b0e022b08',
                  service: 'webrtc',
                  kind: 'direct',
                  state: 'hangup',
                  createdBy: {
                    type: 'user',
                    id: 'aEGCdnFoBFCFNdiyX',
                    contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                  },
                  createdAt: '2026-09-23T13:30:53.165Z',
                  caller: {
                    type: 'user',
                    id: 'aEGCdnFoBFCFNdiyX',
                    contractId: '7b96e74d-1e01-412a-8bcb-145db1bc9ac4',
                    displayName: 'Dana Reyes',
                    username: 'dana.reyes',
                  },
                  callee: { type: 'sip', id: '+15550100123', displayName: 'Acme Support' },
                  ended: true,
                  endedBy: { type: 'user', id: 'aEGCdnFoBFCFNdiyX' },
                  endedAt: '2026-09-23T13:35:10.402Z',
                  expiresAt: '2026-09-23T13:36:10.402Z',
                  acceptedAt: '2026-09-23T13:31:02.118Z',
                  activatedAt: '2026-09-23T13:31:03.540Z',
                  uids: ['aEGCdnFoBFCFNdiyX'],
                  features: ['audio'],
                  sipCallId: '3c4f8a1e-92b7-4d6e@sip.example.com',
                  _updatedAt: '2026-09-23T13:35:10.402Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                error: "must have required property 'callId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    404: {
      description: 'Not Found. The call does not exist, or you are not a participant.',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Not Found': { value: { success: false, error: 'Resource not found' } } },
        },
      },
    },
  },
})

export const getApiV1AuditAuditionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/audit.auditions',
  tags: ['Audit'],
  summary: 'List Auditions',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nLists the audit searches performed during a specified period. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.\n\nThis endpoint replaces the `auditGetAuditions` real-time method, which was removed in 9.0.0.\n\n**Permission required**:\n- `can-audit-log`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added       |',
  operationId: 'get-api-v1-audit.auditions',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: true,
            description: 'The beginning of the period to list, as an ISO date string.',
            schema: { type: 'string', format: 'date-time' },
            example: '2026-08-01T00:00:00.000Z',
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: true,
            description: 'The end of the period to list, as an ISO date string.',
            schema: { type: 'string', format: 'date-time' },
            example: '2026-08-20T23:59:59.999Z',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              auditions: z
                .array(
                  z
                    .strictObject({
                      _id: z.string(),
                      _updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      ts: z.iso.datetime({ offset: true }),
                      results: z.number(),
                      u: z
                        .strictObject({
                          _id: z.string(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          avatarETag: z.string().exactOptional(),
                        })
                        .openapi({ required: ['_id'] }),
                      fields: z
                        .strictObject({
                          type: z.string(),
                          msg: z.string().nullable().exactOptional(),
                          startDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                          endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                          rids: z.array(z.string()).nullable().exactOptional(),
                          room: z.string().nullable().exactOptional(),
                          users: z.array(z.string()).nullable().exactOptional(),
                          visitor: z.string().nullable().exactOptional(),
                          agent: z.string().nullable().exactOptional(),
                          filters: z.string().nullable().exactOptional(),
                        })
                        .openapi({ required: ['type'] }),
                    })
                    .openapi({ required: ['_id', 'ts', 'results', 'u', 'fields'] }),
                )
                .openapi({
                  description: 'The audit log entries recorded in the requested period.',
                }),
              success: z.boolean(),
            })
            .openapi({ required: ['auditions', 'success'] }),
          examples: { 'Success Example': { value: { auditions: [], success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1AuditMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/audit.messages',
  tags: ['Audit'],
  summary: 'Audit Messages',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nSearches messages for an audit and records the search in the audit log. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.\n\nThis endpoint replaces the `auditGetMessages` real-time method, which was removed in 9.0.0.\n\n**Permission required**:\n- `can-audit`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added       |',
  operationId: 'post-api-v1-audit.messages',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              rid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ID of the room to search in. Optional.',
                  example: 'GENERAL',
                }),
              startDate: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The beginning of the period to search, as an ISO date string.',
                  example: '2026-08-01T00:00:00.000Z',
                }),
              endDate: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end of the period to search, as an ISO date string.',
                  example: '2026-08-20T23:59:59.999Z',
                }),
              users: z
                .array(z.string())
                .openapi({
                  description: 'The usernames whose messages are audited.',
                  example: ['dana.reyes'],
                }),
              msg: z
                .string()
                .nullable()
                .openapi({
                  description: 'The text to search for in the messages.',
                  example: 'incident report',
                }),
              type: z
                .string()
                .openapi({
                  description:
                    'The audit target. Use `u` for users, `d` for a direct message, or `l` for Omnichannel rooms. When `rid` is provided, the room ID determines the target.',
                  example: 'u',
                }),
              visitor: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The ID of the Omnichannel visitor to audit.',
                  example: '8f4c2d1e9a7b6c5d3e2f1a0b',
                }),
              agent: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The ID of the Omnichannel agent to audit.',
                  example: 'rbAXPnMktTFbNpwtJ',
                }),
            })
            .openapi({ required: ['startDate', 'endDate', 'users', 'msg', 'type'] }),
          examples: {
            Example: {
              value: {
                rid: 'GENERAL',
                startDate: '2026-08-01T00:00:00.000Z',
                endDate: '2026-08-20T23:59:59.999Z',
                users: ['dana.reyes'],
                msg: 'incident report',
                type: 'u',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'The messages matching the audit search.' }),
              success: z.boolean(),
            })
            .openapi({ required: ['messages', 'success'] }),
          examples: {
            'Success Example': {
              value: {
                messages: [
                  {
                    _id: '7aDSXtjMA3KPLxLjt',
                    rid: 'GENERAL',
                    msg: 'Please share the incident report',
                    ts: '2026-08-12T09:14:03.412Z',
                    u: { _id: 'rbAXPnMktTFbNpwtJ', username: 'dana.reyes', name: 'Dana Reyes' },
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1AuditOmnichannelMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/audit.omnichannelMessages',
  tags: ['Audit'],
  summary: 'Audit Omnichannel Messages',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nSearches <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">Omnichannel</a> messages for an audit and records the search in the audit log. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.\n\nThis endpoint replaces the `auditGetOmnichannelMessages` real-time method, which was removed in 9.0.0.\n\n**Permission required**:\n- `can-audit`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added       |',
  operationId: 'post-api-v1-audit.omnichannelMessages',
  request: {
    headers: z.object({ 'X-User-Id': XUserIdParamsSchema, 'X-Auth-Token': XAuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              startDate: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The beginning of the period to search, as an ISO date string.',
                  example: '2026-08-01T00:00:00.000Z',
                }),
              endDate: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end of the period to search, as an ISO date string.',
                  example: '2026-08-20T23:59:59.999Z',
                }),
              users: z
                .array(z.string())
                .openapi({
                  description: 'The usernames associated with the audit search.',
                  example: ['dana.reyes'],
                }),
              msg: z
                .string()
                .nullable()
                .openapi({
                  description: 'The text to search for in the messages.',
                  example: 'refund',
                }),
              type: z
                .string()
                .openapi({
                  description: 'The audit type recorded in the audit log.',
                  example: 'u',
                }),
              visitor: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The ID of the Omnichannel visitor to audit.',
                  example: '8f4c2d1e9a7b6c5d3e2f1a0b',
                }),
              agent: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The ID of the Omnichannel agent to audit.',
                  example: 'rbAXPnMktTFbNpwtJ',
                }),
            })
            .openapi({ required: ['startDate', 'endDate', 'users', 'msg', 'type'] }),
          examples: {
            Example: {
              value: {
                startDate: '2026-08-01T00:00:00.000Z',
                endDate: '2026-08-20T23:59:59.999Z',
                users: ['dana.reyes'],
                msg: 'refund',
                type: 'u',
                visitor: '8f4c2d1e9a7b6c5d3e2f1a0b',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'The Omnichannel messages matching the audit search.' }),
              success: z.boolean(),
            })
            .openapi({ required: ['messages', 'success'] }),
          examples: {
            'Success Example': {
              value: {
                messages: [
                  {
                    _id: '5RQ4SBL3NuZKsqxaF',
                    rid: 'pMtJcZDsvKLnGKQ2C',
                    msg: 'I would like to request a refund',
                    ts: '2026-08-14T16:02:51.006Z',
                    u: { _id: '8f4c2d1e9a7b6c5d3e2f1a0b', username: 'guest-482', name: 'Alex Doe' },
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})
