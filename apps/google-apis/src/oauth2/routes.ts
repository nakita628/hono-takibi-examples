import { createRoute, z } from '@hono/zod-openapi'

const TokeninfoSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Who is the intended audience for this token. In general the same as issued_to.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the user. Present only if the email scope is present in the request.',
      }),
    expires_in: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The expiry time of the token, as number of seconds left until expiry.',
      }),
    issued_to: z
      .string()
      .exactOptional()
      .openapi({
        description: 'To whom was the token issued to. In general the same as audience.',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'The space separated list of scopes granted to this token.' }),
    user_id: z.string().exactOptional().openapi({ description: 'The obfuscated user id.' }),
    verified_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Tokeninfo')

const UserinfoSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: "The user's email address." }),
    family_name: z.string().exactOptional().openapi({ description: "The user's last name." }),
    gender: z.string().exactOptional().openapi({ description: "The user's gender." }),
    given_name: z.string().exactOptional().openapi({ description: "The user's first name." }),
    hd: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hosted domain e.g. example.com if the user is Google apps user.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The obfuscated ID of the user.' }),
    link: z.string().exactOptional().openapi({ description: 'URL of the profile page.' }),
    locale: z.string().exactOptional().openapi({ description: "The user's preferred locale." }),
    name: z.string().exactOptional().openapi({ description: "The user's full name." }),
    picture: z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the user's picture image." }),
    verified_email: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Userinfo')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
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
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
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
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
        'https://www.googleapis.com/auth/userinfo.profile':
          "See your personal info, including any personal info you've made publicly available",
        openid: 'Associate you with your personal info on Google',
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
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
        'https://www.googleapis.com/auth/userinfo.profile':
          "See your personal info, including any personal info you've made publicly available",
        openid: 'Associate you with your personal info on Google',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postOauth2V2TokeninfoRoute = createRoute({
  method: 'post',
  path: '/oauth2/v2/tokeninfo',
  operationId: 'oauth2.tokeninfo',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'access_token', schema: { type: 'string' }, required: false },
        }),
      id_token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id_token', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TokeninfoSchema } },
    },
  },
})

export const getOauth2V2UserinfoRoute = createRoute({
  method: 'get',
  path: '/oauth2/v2/userinfo',
  tags: ['userinfo'],
  operationId: 'oauth2.userinfo.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserinfoSchema } },
    },
  },
  security: [
    { Oauth2: ['openid'], Oauth2c: ['openid'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.profile'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.profile'],
    },
  ],
})

export const getUserinfoV2MeRoute = createRoute({
  method: 'get',
  path: '/userinfo/v2/me',
  tags: ['userinfo'],
  operationId: 'oauth2.userinfo.v2.me.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserinfoSchema } },
    },
  },
  security: [
    { Oauth2: ['openid'], Oauth2c: ['openid'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.profile'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.profile'],
    },
  ],
})
