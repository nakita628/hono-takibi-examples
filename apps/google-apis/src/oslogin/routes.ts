import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const PosixAccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A POSIX account identifier.', readOnly: true }),
    gecos: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GECOS (user information) entry for this account.' }),
    gid: z.string().exactOptional().openapi({ description: 'The default group ID.' }),
    homeDirectory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the home directory for this account.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The canonical resource name.', readOnly: true }),
    operatingSystemType: z
      .enum(['OPERATING_SYSTEM_TYPE_UNSPECIFIED', 'LINUX', 'WINDOWS'])
      .exactOptional()
      .openapi({ description: 'The operating system type where this account applies.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only one POSIX account can be marked as primary.' }),
    shell: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the logic shell for this account.' }),
    systemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System identifier for which account the username or uid applies to. By default, the empty value is used.',
      }),
    uid: z.string().exactOptional().openapi({ description: 'The user ID.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username of the POSIX account.' }),
  })
  .openapi({
    description: 'The POSIX account information associated with a Google account.',
    required: [],
  })
  .openapi('PosixAccount')

const UniversalTwoFactorSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Application ID for the U2F protocol.' }),
  })
  .openapi({ description: 'Security key information specific to the U2F protocol.', required: [] })
  .openapi('UniversalTwoFactor')

const WebAuthnSchema = z
  .object({
    rpId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Relying party ID for Web Authentication.' }),
  })
  .openapi({
    description: 'Security key information specific to the Web Authentication protocol.',
    required: [],
  })
  .openapi('WebAuthn')

const SecurityKeySchema = z
  .object({
    privateKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hardware-backed private key text in SSH format.' }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6.',
      }),
    universalTwoFactor: UniversalTwoFactorSchema.exactOptional().openapi({
      description: 'The U2F protocol type.',
    }),
    webAuthn: WebAuthnSchema.exactOptional().openapi({
      description: 'The Web Authentication protocol type.',
    }),
  })
  .openapi({
    description: 'The credential information for a Google registered security key.',
    required: [],
  })
  .openapi('SecurityKey')

const SshPublicKeySchema = z
  .object({
    expirationTimeUsec: z
      .string()
      .exactOptional()
      .openapi({ description: 'An expiration time in microseconds since epoch.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The SHA-256 fingerprint of the SSH public key.',
        readOnly: true,
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public key text in SSH format, defined by RFC4253 section 6.6.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The canonical resource name.', readOnly: true }),
  })
  .openapi({
    description: 'The SSH public key information associated with a Google account.',
    required: [],
  })
  .openapi('SshPublicKey')

const LoginProfileSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Required. A unique user ID.' }),
    posixAccounts: z
      .array(PosixAccountSchema)
      .exactOptional()
      .openapi({ description: 'The list of POSIX accounts associated with the user.' }),
    securityKeys: z
      .array(SecurityKeySchema)
      .exactOptional()
      .openapi({ description: 'The registered security key credentials for a user.' }),
    sshPublicKeys: z
      .record(z.string(), SshPublicKeySchema)
      .exactOptional()
      .openapi({
        description: 'A map from SSH public key fingerprint to the associated key object.',
      }),
  })
  .openapi({
    description:
      'The user profile information used for logging in to a virtual machine on Google Compute Engine.',
    required: [],
  })
  .openapi('LoginProfile')

const ImportSshPublicKeyResponseSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed information about import results.' }),
    loginProfile: LoginProfileSchema.exactOptional().openapi({
      description: 'The login profile information for the user.',
    }),
  })
  .openapi({ description: 'A response message for importing an SSH public key.', required: [] })
  .openapi('ImportSshPublicKeyResponse')

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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/compute':
          'View and manage your Google Compute Engine resources',
        'https://www.googleapis.com/auth/compute.readonly':
          'View your Google Compute Engine resources',
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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/compute':
          'View and manage your Google Compute Engine resources',
        'https://www.googleapis.com/auth/compute.readonly':
          'View your Google Compute Engine resources',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['users'],
  description: 'Retrieves an SSH public key.',
  operationId: 'oslogin.users.sshPublicKeys.get',
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
              'Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.',
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
      content: { 'application/json': { schema: SshPublicKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
  ],
})

export const deleteV1betaNameRoute = createRoute({
  method: 'delete',
  path: '/v1beta/{name}',
  tags: ['users'],
  description: 'Deletes an SSH public key.',
  operationId: 'oslogin.users.sshPublicKeys.delete',
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
              'Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
  ],
})

export const patchV1betaNameRoute = createRoute({
  method: 'patch',
  path: '/v1beta/{name}',
  tags: ['users'],
  description:
    'Updates an SSH public key and returns the profile information. This method supports patch semantics.',
  operationId: 'oslogin.users.sshPublicKeys.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mask to control which fields get updated. Updates all if not present.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
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
              'Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SshPublicKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SshPublicKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
  ],
})

export const getV1betaNameLoginProfileRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}/loginProfile',
  tags: ['users'],
  description:
    'Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.',
  operationId: 'oslogin.users.getLoginProfile',
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
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project ID of the Google Cloud Platform project.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      systemId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A system ID for filtering the results of the request.',
            in: 'query',
            name: 'systemId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['LOGIN_PROFILE_VIEW_UNSPECIFIED', 'BASIC', 'SECURITY_KEY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The view configures whether to retrieve security keys information.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['LOGIN_PROFILE_VIEW_UNSPECIFIED', 'BASIC', 'SECURITY_KEY'],
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
            description: 'Required. The unique ID for the user in format `users/{user}`.',
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
      content: { 'application/json': { schema: LoginProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
  ],
})

export const postV1betaParentSshPublicKeysRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/sshPublicKeys',
  tags: ['users'],
  description: 'Create an SSH public key',
  operationId: 'oslogin.users.sshPublicKeys.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The unique ID for the user in format `users/{user}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SshPublicKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SshPublicKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
  ],
})

export const postV1betaParentImportSshPublicKeyRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}:importSshPublicKey',
  tags: ['users'],
  description:
    'Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.',
  operationId: 'oslogin.users.importSshPublicKey',
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
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The project ID of the Google Cloud Platform project.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['LOGIN_PROFILE_VIEW_UNSPECIFIED', 'BASIC', 'SECURITY_KEY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The view configures whether to retrieve security keys information.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['LOGIN_PROFILE_VIEW_UNSPECIFIED', 'BASIC', 'SECURITY_KEY'],
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
            description: 'The unique ID for the user in format `users/{user}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SshPublicKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImportSshPublicKeyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
  ],
})
