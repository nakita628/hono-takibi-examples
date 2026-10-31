import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudResourcesettingsV1ValueEnumValueSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'The value of this enum' }) })
  .openapi({
    description:
      'A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.',
    required: [],
  })
  .openapi('GoogleCloudResourcesettingsV1ValueEnumValue')

const GoogleCloudResourcesettingsV1ValueStringMapSchema = z
  .object({
    mappings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The key-value pairs in the map' }),
  })
  .openapi({
    description:
      'A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.',
    required: [],
  })
  .openapi('GoogleCloudResourcesettingsV1ValueStringMap')

const GoogleCloudResourcesettingsV1ValueStringSetSchema = z
  .object({
    values: z.array(z.string()).exactOptional().openapi({ description: 'The strings in the set' }),
  })
  .openapi({
    description:
      'A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.',
    required: [],
  })
  .openapi('GoogleCloudResourcesettingsV1ValueStringSet')

const GoogleCloudResourcesettingsV1ValueSchema = z
  .object({
    booleanValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines this value as being a boolean value.' }),
    durationValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines this value as being a Duration.' }),
    enumValue: GoogleCloudResourcesettingsV1ValueEnumValueSchema.exactOptional().openapi({
      description: 'Defines this value as being a Enum.',
    }),
    stringMapValue: GoogleCloudResourcesettingsV1ValueStringMapSchema.exactOptional().openapi({
      description: 'Defines this value as being a StringMap.',
    }),
    stringSetValue: GoogleCloudResourcesettingsV1ValueStringSetSchema.exactOptional().openapi({
      description: 'Defines this value as being a StringSet.',
    }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines this value as being a string value.' }),
  })
  .openapi({ description: 'The data in a setting value.', required: [] })
  .openapi('GoogleCloudResourcesettingsV1Value')

const GoogleCloudResourcesettingsV1SettingMetadataSchema = z
  .object({
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'BOOLEAN',
        'STRING',
        'STRING_SET',
        'ENUM_VALUE',
        'DURATION_VALUE',
        'STRING_MAP',
      ])
      .exactOptional()
      .openapi({ description: 'The data type for this setting.' }),
    defaultValue: GoogleCloudResourcesettingsV1ValueSchema.exactOptional().openapi({
      description:
        'The value provided by Setting.effective_value if no setting value is explicitly set. Note: not all settings have a default value.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed description of what this setting does.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name for this setting.' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons.',
      }),
  })
  .openapi({
    description: 'Metadata about a setting which is not editable by the end user.',
    required: [],
  })
  .openapi('GoogleCloudResourcesettingsV1SettingMetadata')

const GoogleCloudResourcesettingsV1SettingSchema = z
  .object({
    effectiveValue: GoogleCloudResourcesettingsV1ValueSchema.exactOptional().openapi({
      description:
        "Output only. The effective value of the setting at the given parent resource, evaluated based on the resource hierarchy The effective value evaluates to one of the following options, in this order. If an option is not valid or doesn't exist, then the next option is used: 1. The local setting value on the given resource: Setting.local_value 2. If one of the given resource's ancestors in the resource hierarchy have a local setting value, the local value at the nearest such ancestor. 3. The setting's default value: SettingMetadata.default_value 4. An empty value, defined as a `Value` with all fields unset. The data type of Value must always be consistent with the data type defined in Setting.metadata.",
      readOnly: true,
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A fingerprint used for optimistic concurrency. See UpdateSetting for more details.',
      }),
    localValue: GoogleCloudResourcesettingsV1ValueSchema.exactOptional().openapi({
      description:
        'The configured value of the setting at the given parent resource, ignoring the resource hierarchy. The data type of Value must always be consistent with the data type defined in Setting.metadata.',
    }),
    metadata: GoogleCloudResourcesettingsV1SettingMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata about a setting which is not editable by the end user.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"',
      }),
  })
  .openapi({ description: 'The schema for settings.', required: [] })
  .openapi('GoogleCloudResourcesettingsV1Setting')

const GoogleCloudResourcesettingsV1ListSettingsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unused. A page token used to retrieve the next page.' }),
    settings: z
      .array(GoogleCloudResourcesettingsV1SettingSchema)
      .exactOptional()
      .openapi({
        description: 'A list of settings that are available at the specified Cloud resource.',
      }),
  })
  .openapi({ description: 'The response from ListSettings.', required: [] })
  .openapi('GoogleCloudResourcesettingsV1ListSettingsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.',
  operationId: 'resourcesettings.projects.settings.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum([
          'SETTING_VIEW_UNSPECIFIED',
          'SETTING_VIEW_BASIC',
          'SETTING_VIEW_EFFECTIVE_VALUE',
          'SETTING_VIEW_LOCAL_VALUE',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The SettingView for this request.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'SETTING_VIEW_UNSPECIFIED',
                'SETTING_VIEW_BASIC',
                'SETTING_VIEW_EFFECTIVE_VALUE',
                'SETTING_VIEW_LOCAL_VALUE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the setting to get. See Setting for naming requirements.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudResourcesettingsV1SettingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.',
  operationId: 'resourcesettings.projects.settings.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudResourcesettingsV1SettingSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudResourcesettingsV1SettingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/settings',
  tags: ['projects'],
  description: 'Lists all the settings that are available on the Cloud resource `parent`.',
  operationId: 'resourcesettings.projects.settings.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description: 'Unused. The size of the page to be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Unused. A page token used to retrieve the next page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'SETTING_VIEW_UNSPECIFIED',
          'SETTING_VIEW_BASIC',
          'SETTING_VIEW_EFFECTIVE_VALUE',
          'SETTING_VIEW_LOCAL_VALUE',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The SettingView for this request.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'SETTING_VIEW_UNSPECIFIED',
                'SETTING_VIEW_BASIC',
                'SETTING_VIEW_EFFECTIVE_VALUE',
                'SETTING_VIEW_LOCAL_VALUE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project, folder, or organization that is the parent resource for this setting. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudResourcesettingsV1ListSettingsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
