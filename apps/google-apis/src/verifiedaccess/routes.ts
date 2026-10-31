import { createRoute, z } from '@hono/zod-openapi'

const ChallengeSchema = z
  .object({
    alternativeChallenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Challenge generated with the old signing key, the bytes representation of SignedData (this will only be present during key rotation).',
      }),
    challenge: z
      .string()
      .exactOptional()
      .openapi({ description: 'Generated challenge, the bytes representation of SignedData.' }),
  })
  .openapi({ description: 'Result message for VerifiedAccess.GenerateChallenge.', required: [] })
  .openapi('Challenge')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const VerifyChallengeResponseRequestSchema = z
  .object({
    challengeResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The generated response to the challenge, the bytes representation of SignedData.',
      }),
    expectedIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.",
      }),
  })
  .openapi({ description: 'Signed ChallengeResponse.', required: [] })
  .openapi('VerifyChallengeResponseRequest')

const VerifyChallengeResponseResultSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers',
      }),
    devicePermanentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device permanent id is returned in this field (for the machine response only).',
      }),
    deviceSignal: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device signal in json string representation.' }),
    keyTrustLevel: z
      .enum([
        'KEY_TRUST_LEVEL_UNSPECIFIED',
        'CHROME_OS_VERIFIED_MODE',
        'CHROME_OS_DEVELOPER_MODE',
        'CHROME_BROWSER_HW_KEY',
        'CHROME_BROWSER_OS_KEY',
      ])
      .exactOptional()
      .openapi({ description: 'Device attested key trust level.' }),
    signedPublicKeyAndChallenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)',
      }),
    virtualDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Virtual device id of the device. The definition of virtual device id is platform-specific.',
      }),
  })
  .openapi({
    description: 'Result message for VerifiedAccess.VerifyChallengeResponse.',
    required: [],
  })
  .openapi('VerifyChallengeResponseResult')

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
        'https://www.googleapis.com/auth/verifiedaccess': 'Verify your enterprise credentials',
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
        'https://www.googleapis.com/auth/verifiedaccess': 'Verify your enterprise credentials',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV2ChallengeGenerateRoute = createRoute({
  method: 'post',
  path: '/v2/challenge:generate',
  tags: ['challenge'],
  description: 'Generates a new challenge.',
  operationId: 'verifiedaccess.challenge.generate',
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
    body: { content: { 'application/json': { schema: EmptySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChallengeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/verifiedaccess'],
      Oauth2c: ['https://www.googleapis.com/auth/verifiedaccess'],
    },
  ],
})

export const postV2ChallengeVerifyRoute = createRoute({
  method: 'post',
  path: '/v2/challenge:verify',
  tags: ['challenge'],
  description: 'Verifies the challenge response.',
  operationId: 'verifiedaccess.challenge.verify',
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
    body: { content: { 'application/json': { schema: VerifyChallengeResponseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerifyChallengeResponseResultSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/verifiedaccess'],
      Oauth2c: ['https://www.googleapis.com/auth/verifiedaccess'],
    },
  ],
})
