import { createRoute, z } from '@hono/zod-openapi'

const SiteVerificationWebResourceGettokenRequestSchema = z
  .object({
    site: z
      .object({
        identifier: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name).',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The site for which a verification token will be generated.',
        required: [],
      }),
    verificationMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.",
      }),
  })
  .openapi({ required: [] })
  .openapi('SiteVerificationWebResourceGettokenRequest')

const SiteVerificationWebResourceGettokenResponseSchema = z
  .object({
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The verification token. The token must be placed appropriately in order for verification to succeed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SiteVerificationWebResourceGettokenResponse')

const SiteVerificationWebResourceResourceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.',
      }),
    owners: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses of all verified owners.' }),
    site: z
      .object({
        identifier: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The site type. Can be SITE or INET_DOMAIN (domain name).' }),
      })
      .exactOptional()
      .openapi({
        description: 'The address and type of a site that is verified or will be verified.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('SiteVerificationWebResourceResource')

const SiteVerificationWebResourceListResponseSchema = z
  .object({
    items: z
      .array(SiteVerificationWebResourceResourceSchema)
      .exactOptional()
      .openapi({ description: 'The list of sites that are owned by the authenticated user.' }),
  })
  .openapi({ required: [] })
  .openapi('SiteVerificationWebResourceListResponse')

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
        'https://www.googleapis.com/auth/siteverification':
          'Manage the list of sites and domains you control',
        'https://www.googleapis.com/auth/siteverification.verify_only':
          'Manage your new site verifications with Google',
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
        'https://www.googleapis.com/auth/siteverification':
          'Manage the list of sites and domains you control',
        'https://www.googleapis.com/auth/siteverification.verify_only':
          'Manage your new site verifications with Google',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  tags: ['webResource'],
  description: 'Get a verification token for placing on a website or domain.',
  operationId: 'siteVerification.webResource.getToken',
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
    body: {
      content: { 'application/json': { schema: SiteVerificationWebResourceGettokenRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: SiteVerificationWebResourceGettokenResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification.verify_only'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification.verify_only'],
    },
  ],
})

export const getWebResourceRoute = createRoute({
  method: 'get',
  path: '/webResource',
  tags: ['webResource'],
  description: 'Get the list of your verified websites and domains.',
  operationId: 'siteVerification.webResource.list',
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
      content: { 'application/json': { schema: SiteVerificationWebResourceListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
  ],
})

export const postWebResourceRoute = createRoute({
  method: 'post',
  path: '/webResource',
  tags: ['webResource'],
  description: 'Attempt verification of a website or domain.',
  operationId: 'siteVerification.webResource.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      verificationMethod: z
        .string()
        .openapi({
          param: {
            description: 'The method to use for verifying a site or domain.',
            in: 'query',
            name: 'verificationMethod',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification.verify_only'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification.verify_only'],
    },
  ],
})

export const getWebResourceIdRoute = createRoute({
  method: 'get',
  path: '/webResource/{id}',
  tags: ['webResource'],
  description: 'Get the most current data for a website or domain.',
  operationId: 'siteVerification.webResource.get',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a verified site or domain.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
  ],
})

export const putWebResourceIdRoute = createRoute({
  method: 'put',
  path: '/webResource/{id}',
  tags: ['webResource'],
  description: 'Modify the list of owners for your website or domain.',
  operationId: 'siteVerification.webResource.update',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a verified site or domain.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
  ],
})

export const deleteWebResourceIdRoute = createRoute({
  method: 'delete',
  path: '/webResource/{id}',
  tags: ['webResource'],
  description: 'Relinquish ownership of a website or domain.',
  operationId: 'siteVerification.webResource.delete',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a verified site or domain.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
  ],
})

export const patchWebResourceIdRoute = createRoute({
  method: 'patch',
  path: '/webResource/{id}',
  tags: ['webResource'],
  description:
    'Modify the list of owners for your website or domain. This method supports patch semantics.',
  operationId: 'siteVerification.webResource.patch',
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
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a verified site or domain.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteVerificationWebResourceResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/siteverification'],
      Oauth2c: ['https://www.googleapis.com/auth/siteverification'],
    },
  ],
})
