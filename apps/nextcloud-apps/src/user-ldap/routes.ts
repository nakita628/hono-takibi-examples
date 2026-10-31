import { createRoute, z } from '@hono/zod-openapi'

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const postOcsV2PhpAppsUserLdapApiV1ConfigRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config',
  tags: ['configapi'],
  summary: 'Create a new (empty) configuration and return the resulting prefix',
  description: 'This endpoint requires admin access',
  operationId: 'configapi-create',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Config created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ configID: z.string() }).openapi({ required: ['configID'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}',
  tags: ['configapi'],
  summary: 'Get a configuration',
  description:
    'Output can look like this: <?xml version="1.0"?> <ocs> <meta> <status>ok</status> <statuscode>200</statuscode> <message>OK</message> </meta> <data> <ldapHost>ldaps://my.ldap.server</ldapHost> <ldapPort>7770</ldapPort> <ldapBackupHost></ldapBackupHost> <ldapBackupPort></ldapBackupPort> <ldapBase>ou=small,dc=my,dc=ldap,dc=server</ldapBase> <ldapBaseUsers>ou=users,ou=small,dc=my,dc=ldap,dc=server</ldapBaseUsers> <ldapBaseGroups>ou=small,dc=my,dc=ldap,dc=server</ldapBaseGroups> <ldapAgentName>cn=root,dc=my,dc=ldap,dc=server</ldapAgentName> <ldapAgentPassword>clearTextWithShowPassword=1</ldapAgentPassword> <ldapTLS>1</ldapTLS> <turnOffCertCheck>0</turnOffCertCheck> <ldapIgnoreNamingRules/> <ldapUserActiveState>active</ldapUserActiveState> <ldapUserDisplayName>displayname</ldapUserDisplayName> <ldapUserDisplayName2>uid</ldapUserDisplayName2> <ldapUserFilterObjectclass>inetOrgPerson</ldapUserFilterObjectclass> <ldapUserFilterGroups></ldapUserFilterGroups> <ldapUserFilter>(&amp;(objectclass=nextcloudUser)(nextcloudEnabled=TRUE))</ldapUserFilter> <ldapUserFilterMode>1</ldapUserFilterMode> <ldapGroupFilter>(&amp;(|(objectclass=nextcloudGroup)))</ldapGroupFilter> <ldapGroupFilterMode>0</ldapGroupFilterMode> <ldapGroupFilterObjectclass>nextcloudGroup</ldapGroupFilterObjectclass> <ldapGroupFilterGroups></ldapGroupFilterGroups> <ldapGroupDisplayName>cn</ldapGroupDisplayName> <ldapGroupMemberAssocAttr>memberUid</ldapGroupMemberAssocAttr> <ldapLoginFilter>(&amp;(|(objectclass=inetOrgPerson))(uid=%uid))</ldapLoginFilter> <ldapLoginFilterMode>0</ldapLoginFilterMode> <ldapLoginFilterEmail>0</ldapLoginFilterEmail> <ldapLoginFilterUsername>1</ldapLoginFilterUsername> <ldapLoginFilterAttributes></ldapLoginFilterAttributes> <ldapQuotaAttribute></ldapQuotaAttribute> <ldapQuotaDefault></ldapQuotaDefault> <ldapEmailAttribute>mail</ldapEmailAttribute> <ldapCacheTTL>20</ldapCacheTTL> <ldapUuidUserAttribute>auto</ldapUuidUserAttribute> <ldapUuidGroupAttribute>auto</ldapUuidGroupAttribute> <ldapOverrideMainServer></ldapOverrideMainServer> <ldapConfigurationActive>1</ldapConfigurationActive> <ldapAttributesForUserSearch>uid;sn;givenname</ldapAttributesForUserSearch> <ldapAttributesForGroupSearch></ldapAttributesForGroupSearch> <ldapExperiencedAdmin>0</ldapExperiencedAdmin> <homeFolderNamingRule></homeFolderNamingRule> <hasMemberOfFilterSupport></hasMemberOfFilterSupport> <useMemberOfToDetectMembership>1</useMemberOfToDetectMembership> <ldapExpertUsernameAttr>uid</ldapExpertUsernameAttr> <ldapExpertUUIDUserAttr>uid</ldapExpertUUIDUserAttr> <ldapExpertUUIDGroupAttr></ldapExpertUUIDGroupAttr> <lastJpegPhotoLookup>0</lastJpegPhotoLookup> <ldapNestedGroups>0</ldapNestedGroups> <ldapPagingSize>500</ldapPagingSize> <turnOnPasswordChange>1</turnOnPasswordChange> <ldapDynamicGroupMemberURL></ldapDynamicGroupMemberURL> </data> </ocs>\nThis endpoint requires admin access',
  operationId: 'configapi-show',
  request: {
    params: z.object({
      configID: z
        .string()
        .regex(/^.*$/)
        .default('')
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the config',
            required: true,
            schema: { type: 'string', pattern: '^.*$', default: '' },
          },
        }),
    }),
    query: z.object({
      showPassword: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'showPassword',
            in: 'query',
            description: 'Whether to show the password',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Config returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.object({})) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Config not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}',
  tags: ['configapi'],
  summary: 'Modify a configuration',
  description: 'This endpoint requires admin access',
  operationId: 'configapi-modify',
  request: {
    params: z.object({
      configID: z
        .string()
        .regex(/^.*$/)
        .default('')
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the config',
            required: true,
            schema: { type: 'string', pattern: '^.*$', default: '' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configData: z.record(z.string(), z.object({})).openapi({ description: 'New config' }),
            })
            .openapi({ required: ['configData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Config returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.object({})) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Modifying config is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Config not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}',
  tags: ['configapi'],
  summary: 'Delete a LDAP configuration',
  description: 'This endpoint requires admin access',
  operationId: 'configapi-delete',
  request: {
    params: z.object({
      configID: z
        .string()
        .regex(/^.*$/)
        .default('')
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the config',
            required: true,
            schema: { type: 'string', pattern: '^.*$', default: '' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Config deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Config not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/test',
  tags: ['configapi'],
  summary: 'Test a configuration',
  description: 'This endpoint requires admin access',
  operationId: 'configapi-test-configuration',
  request: {
    params: z.object({
      configID: z
        .string()
        .regex(/^.*$/)
        .default('')
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the LDAP config',
            required: true,
            schema: { type: 'string', pattern: '^.*$', default: '' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Test was run and results are returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ success: z.boolean(), message: z.string() })
                    .openapi({ required: ['success', 'message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Config not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/config/{configID}/copy',
  tags: ['configapi'],
  summary: 'Copy a configuration',
  description: 'This endpoint requires admin access',
  operationId: 'configapi-copy-configuration',
  request: {
    params: z.object({
      configID: z
        .string()
        .regex(/^.*$/)
        .default('')
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the LDAP config',
            required: true,
            schema: { type: 'string', pattern: '^.*$', default: '' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Config was copied, new configID was returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ configID: z.string() }).openapi({ required: ['configID'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Config not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/wizard/{configID}/{wizardAction}',
  tags: ['wizard'],
  summary: 'Run a wizard action and returns the result',
  description: 'This endpoint requires admin access',
  operationId: 'wizard-action',
  request: {
    params: z.object({
      configID: z
        .string()
        .openapi({
          param: {
            name: 'configID',
            in: 'path',
            description: 'ID of the LDAP configuration',
            required: true,
            schema: { type: 'string' },
          },
        }),
      wizardAction: z
        .string()
        .openapi({
          param: {
            name: 'wizardAction',
            in: 'path',
            description: 'Wizard action to run',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              loginName: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Login name to test for testLoginName action' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Wizard action result',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      changes: z.record(
                        z.string(),
                        z.union([
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          z.string(),
                          z.array(
                            z
                              .preprocess(
                                (val) =>
                                  typeof val === 'number' && Number.isSafeInteger(val)
                                    ? BigInt(val)
                                    : typeof val === 'string' && /^-?\d+$/.test(val)
                                      ? BigInt(val)
                                      : val,
                                z.int64(),
                              )
                              .openapi({ type: 'integer', format: 'int64' }),
                          ),
                          z.array(z.string()),
                        ]),
                      ),
                      options: z.record(z.string(), z.array(z.string())).exactOptional(),
                    })
                    .openapi({ required: ['changes'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings',
  tags: ['wizard'],
  summary: 'Clear user or group mappings',
  description: 'This endpoint requires admin access',
  operationId: 'wizard-clear-mappings',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              subject: z
                .enum(['user', 'group'])
                .openapi({ description: 'Whether to clear group or user mappings' }),
            })
            .openapi({ required: ['subject'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Clearing was done successfuly',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
