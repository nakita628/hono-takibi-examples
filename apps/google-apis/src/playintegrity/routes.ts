import { createRoute, z } from '@hono/zod-openapi'

const AccountActivitySchema = z
  .object({
    activityLevel: z
      .enum([
        'ACTIVITY_LEVEL_UNSPECIFIED',
        'UNEVALUATED',
        'UNUSUAL',
        'UNKNOWN',
        'TYPICAL_BASIC',
        'TYPICAL_STRONG',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Indicates the activity level of the account.' }),
  })
  .openapi({
    description:
      'Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.',
    required: [],
  })
  .openapi('AccountActivity')

const AccountDetailsSchema = z
  .object({
    accountActivity: AccountActivitySchema.exactOptional().openapi({
      description: 'Details about the account activity for the user in the scope.',
    }),
    appLicensingVerdict: z
      .enum(['UNKNOWN', 'LICENSED', 'UNLICENSED', 'UNEVALUATED'])
      .exactOptional()
      .openapi({
        description:
          'Required. Details about the licensing status of the user for the app in the scope.',
      }),
  })
  .openapi({
    description:
      'Contains the account information such as the licensing status for the user in the scope.',
    required: [],
  })
  .openapi('AccountDetails')

const AppIntegritySchema = z
  .object({
    appRecognitionVerdict: z
      .enum(['UNKNOWN', 'PLAY_RECOGNIZED', 'UNRECOGNIZED_VERSION', 'UNEVALUATED'])
      .exactOptional()
      .openapi({ description: 'Required. Details about the app recognition verdict' }),
    certificateSha256Digest: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED.",
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED.',
      }),
    versionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version code of the application. Set iff app_recognition_verdict != UNEVALUATED.',
      }),
  })
  .openapi({ description: 'Contains the application integrity information.', required: [] })
  .openapi('AppIntegrity')

const DecodeIntegrityTokenRequestSchema = z
  .object({
    integrityToken: z.string().exactOptional().openapi({ description: 'Encoded integrity token.' }),
  })
  .openapi({ description: 'Request to decode the integrity token.', required: [] })
  .openapi('DecodeIntegrityTokenRequest')

const DeviceIntegritySchema = z
  .object({
    deviceRecognitionVerdict: z
      .array(
        z.enum([
          'UNKNOWN',
          'MEETS_BASIC_INTEGRITY',
          'MEETS_DEVICE_INTEGRITY',
          'MEETS_STRONG_INTEGRITY',
          'MEETS_VIRTUAL_INTEGRITY',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Details about the integrity of the device the app is running on' }),
  })
  .openapi({ description: 'Contains the device attestation information.', required: [] })
  .openapi('DeviceIntegrity')

const RequestDetailsSchema = z
  .object({
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Nonce that was provided in the request (which is base64 web-safe no-wrap).',
      }),
    requestHash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request hash that was provided in the request.' }),
    requestPackageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity.',
      }),
    timestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Timestamp, in milliseconds, of the integrity application request.',
      }),
  })
  .openapi({ description: 'Contains the integrity request information.', required: [] })
  .openapi('RequestDetails')

const TestingDetailsSchema = z
  .object({
    isTestingResponse: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester.',
      }),
  })
  .openapi({
    description: 'Contains additional information generated for testing responses.',
    required: [],
  })
  .openapi('TestingDetails')

const TokenPayloadExternalSchema = z
  .object({
    accountDetails: AccountDetailsSchema.exactOptional().openapi({
      description: 'Required. Details about the Play Store account.',
    }),
    appIntegrity: AppIntegritySchema.exactOptional().openapi({
      description: 'Required. Details about the application integrity.',
    }),
    deviceIntegrity: DeviceIntegritySchema.exactOptional().openapi({
      description: 'Required. Details about the device integrity.',
    }),
    requestDetails: RequestDetailsSchema.exactOptional().openapi({
      description: 'Required. Details about the integrity request.',
    }),
    testingDetails: TestingDetailsSchema.exactOptional().openapi({
      description:
        'Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status.',
    }),
  })
  .openapi({
    description:
      'Contains basic app information and integrity signals like device attestation and licensing details.',
    required: [],
  })
  .openapi('TokenPayloadExternal')

const DecodeIntegrityTokenResponseSchema = z
  .object({
    tokenPayloadExternal: TokenPayloadExternalSchema.exactOptional().openapi({
      description: 'Plain token payload generated from the decoded integrity token.',
    }),
  })
  .openapi({ description: 'Response containing the decoded integrity payload.', required: [] })
  .openapi('DecodeIntegrityTokenResponse')

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
        'https://www.googleapis.com/auth/playintegrity':
          'Private Service: https://www.googleapis.com/auth/playintegrity',
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
        'https://www.googleapis.com/auth/playintegrity':
          'Private Service: https://www.googleapis.com/auth/playintegrity',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1PackageNameDecodeIntegrityTokenRoute = createRoute({
  method: 'post',
  path: '/v1/{packageName}:decodeIntegrityToken',
  tags: ['v1'],
  description: 'Decodes the integrity token and returns the token payload.',
  operationId: 'playintegrity.decodeIntegrityToken',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: ' Package name of the app the attached integrity token belongs to.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DecodeIntegrityTokenRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DecodeIntegrityTokenResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/playintegrity'],
      Oauth2c: ['https://www.googleapis.com/auth/playintegrity'],
    },
  ],
})
