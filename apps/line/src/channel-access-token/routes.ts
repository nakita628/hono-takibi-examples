import { createRoute, z } from '@hono/zod-openapi'

const IssueStatelessChannelTokenByJWTAssertionRequestSchema = z
  .object({
    grant_type: z.literal('client_credentials').openapi({ description: 'client_credentials' }),
    client_assertion_type: z
      .literal('urn:ietf:params:oauth:client-assertion-type:jwt-bearer')
      .openapi({
        description:
          'URL-encoded value of `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`',
      }),
    client_assertion: z
      .string()
      .openapi({
        description:
          'A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token',
    },
    description: 'Request body to issue a new token with JWT assertion',
    required: ['grant_type', 'client_assertion', 'client_assertion_type'],
  })
  .openapi('IssueStatelessChannelTokenByJWTAssertionRequest')

const IssueStatelessChannelTokenByClientSecretRequestSchema = z
  .object({
    grant_type: z.literal('client_credentials').openapi({ description: '`client_credentials`' }),
    client_id: z.string().openapi({ description: 'Channel ID.' }),
    client_secret: z.string().openapi({ description: 'Channel secret.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token',
    },
    description: 'Request body to issue a new token with `client_id` and `client_secret`',
    required: ['grant_type', 'client_id', 'client_secret'],
  })
  .openapi('IssueStatelessChannelTokenByClientSecretRequest')

const IssueStatelessChannelAccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description:
          'A stateless channel access token.\nThe token is an opaque string which means its format is an implementation detail\nand the consumer of this token should never try to use the data parsed from the token.\n',
      }),
    expires_in: z
      .int32()
      .openapi({ description: 'Duration in seconds after which the issued access token expires' }),
    token_type: z
      .string()
      .default('Bearer')
      .openapi({ description: 'Token type. The value is always `Bearer`.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token',
    },
    description: 'Issued stateless channel access token',
    required: ['access_token', 'expires_in', 'token_type'],
  })
  .openapi('IssueStatelessChannelAccessTokenResponse')

const ChannelAccessTokenKeyIdsResponseSchema = z
  .object({
    kids: z.array(z.string()).openapi({ description: 'Array of channel access token key IDs.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1',
    },
    description: 'Channel access token key IDs',
    required: ['kids'],
  })
  .openapi('ChannelAccessTokenKeyIdsResponse')

const IssueShortLivedChannelAccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description:
          'A short-lived channel access token. Valid for 30 days.\nNote: Channel access tokens cannot be refreshed.\n',
      }),
    expires_in: z
      .int32()
      .openapi({
        description:
          'Time until channel access token expires in seconds from time the token is issued.',
      }),
    token_type: z
      .string()
      .default('Bearer')
      .openapi({ description: 'Token type. The value is always `Bearer`.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token',
    },
    description: 'Issued short-lived channel access token',
    required: ['access_token', 'expires_in', 'token_type'],
  })
  .openapi('IssueShortLivedChannelAccessTokenResponse')

const IssueChannelAccessTokenResponseSchema = z
  .object({
    access_token: z.string().openapi({ description: 'Channel access token.\n' }),
    expires_in: z
      .int32()
      .openapi({
        description:
          'Amount of time in seconds from issue to expiration of the channel access token',
      }),
    token_type: z.string().default('Bearer').openapi({ description: 'A token type.' }),
    key_id: z
      .string()
      .openapi({ description: 'Unique key ID for identifying the channel access token.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1',
    },
    description: 'Issued channel access token',
    required: ['access_token', 'expires_in', 'token_type', 'key_id'],
  })
  .openapi('IssueChannelAccessTokenResponse')

const VerifyChannelAccessTokenResponseSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The channel ID for which the channel access token was issued.' }),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of seconds before the channel access token expires.',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'Permissions granted to the channel access token.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#verify-channel-access-token-v2-1',
    },
    description: 'Verification result',
    required: ['client_id', 'expires_in'],
  })
  .openapi('VerifyChannelAccessTokenResponse')

const ErrorResponseSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'Error summary' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details of the error. Not returned in certain situations.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
    },
    description: 'Error response of the Channel access token',
    required: [],
  })
  .openapi('ErrorResponse')

export const postOauth2V3TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/v3/token',
  tags: ['channel-access-token'],
  description:
    "Issues a new stateless channel access token, which doesn't have max active token limit\nunlike the other token types.\nThe newly issued token is only valid for 15 minutes but can not be revoked until it naturally expires.\n",
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token',
  },
  operationId: 'issueStatelessChannelToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.xor([
            IssueStatelessChannelTokenByJWTAssertionRequestSchema,
            IssueStatelessChannelTokenByClientSecretRequestSchema,
          ]),
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
          schema: IssueStatelessChannelAccessTokenResponseSchema,
          example: { token_type: 'Bearer', access_token: 'eyJhbGciOiJIUz.....', expires_in: 899 },
        },
      },
    },
  },
})

export const getOauth2V21TokensKidRoute = createRoute({
  method: 'get',
  path: '/oauth2/v2.1/tokens/kid',
  tags: ['channel-access-token'],
  description: 'Gets all valid channel access token key IDs.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1',
  },
  operationId: 'getsAllValidChannelAccessTokenKeyIds',
  request: {
    query: z.object({
      client_assertion_type: z
        .string()
        .openapi({
          param: {
            name: 'client_assertion_type',
            in: 'query',
            required: true,
            description: '`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`',
            schema: { type: 'string' },
          },
        }),
      client_assertion: z
        .string()
        .openapi({
          param: {
            name: 'client_assertion',
            in: 'query',
            required: true,
            description:
              'A JSON Web Token (JWT) (opens new window)the client needs to create and sign with the private key.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ChannelAccessTokenKeyIdsResponseSchema,
          example: {
            kids: [
              'U_gdnFYKTWRxxxxDVZexGg',
              'sDTOzw5wIfWxxxxzcmeQA',
              '73hDyp3PxGfxxxxD6U5qYA',
              'FHGanaP79smDxxxxyPrVw',
              'CguB-0kxxxxdSM3A5Q_UtQ',
              'G82YP96jhHwyKSxxxx7IFA',
            ],
          },
        },
      },
    },
  },
})

export const postOauth2V21TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/v2.1/token',
  tags: ['channel-access-token'],
  description:
    'Issues a channel access token that allows you to specify a desired expiration date. This method lets you use JWT assertion for authentication.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1',
  },
  operationId: 'issueChannelTokenByJWT',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              grant_type: z.string().openapi({ description: 'client_credentials' }),
              client_assertion_type: z
                .string()
                .openapi({ description: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer' }),
              client_assertion: z
                .string()
                .openapi({
                  description:
                    'A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.',
                }),
            })
            .openapi({
              description: 'request of the issueChannelTokenByJWT',
              required: ['grant_type', 'client_assertion_type', 'client_assertion'],
            }),
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
          schema: IssueChannelAccessTokenResponseSchema,
          example: {
            access_token: 'eyJhbGciOiJIUz.....',
            token_type: 'Bearer',
            expires_in: 2592000,
            key_id: 'sDTOzw5wIfxxxxPEzcmeQA',
          },
        },
      },
    },
  },
})

export const getOauth2V21VerifyRoute = createRoute({
  method: 'get',
  path: '/oauth2/v2.1/verify',
  tags: ['channel-access-token'],
  description:
    'You can verify whether a Channel access token with a user-specified expiration (Channel Access Token v2.1) is valid.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#verify-channel-access-token-v2-1',
  },
  operationId: 'verifyChannelTokenByJWT',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            name: 'access_token',
            in: 'query',
            required: true,
            description:
              'Channel access token with a user-specified expiration (Channel Access Token v2.1).',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VerifyChannelAccessTokenResponseSchema,
          example: {
            client_id: '1573163733',
            expires_in: 2591659,
            scope: 'profile chat_message.write',
          },
        },
      },
    },
  },
})

export const postOauth2V21RevokeRoute = createRoute({
  method: 'post',
  path: '/oauth2/v2.1/revoke',
  tags: ['channel-access-token'],
  description: 'Revoke channel access token v2.1',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1',
  },
  operationId: 'revokeChannelTokenByJWT',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string().openapi({ description: 'Channel ID' }),
              client_secret: z.string().openapi({ description: 'Channel Secret' }),
              access_token: z.string().openapi({ description: 'Channel access token' }),
            })
            .openapi({
              description: 'Request of the revokeChannelTokenByJWT',
              required: ['client_id', 'client_secret', 'access_token'],
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2OauthAccessTokenRoute = createRoute({
  method: 'post',
  path: '/v2/oauth/accessToken',
  tags: ['channel-access-token'],
  description: 'Issue short-lived channel access token',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token',
  },
  operationId: 'issueChannelToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              grant_type: z
                .string()
                .openapi({ description: '`client_credentials`', example: 'client_credentials' }),
              client_id: z.string().openapi({ description: 'Channel ID.' }),
              client_secret: z.string().openapi({ description: 'Channel secret.' }),
            })
            .openapi({
              description: 'Request of the issueChannelToken',
              required: ['grant_type', 'client_id', 'client_secret'],
            }),
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
          schema: IssueShortLivedChannelAccessTokenResponseSchema,
          example: {
            access_token: 'W1TeHCgfH2Liwa.....',
            expires_in: 2592000,
            token_type: 'Bearer',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: {
            error: 'invalid_request',
            error_description: 'some parameters missed or invalid',
          },
        },
      },
    },
  },
})

export const postV2OauthVerifyRoute = createRoute({
  method: 'post',
  path: '/v2/oauth/verify',
  tags: ['channel-access-token'],
  description: 'Verify the validity of short-lived and long-lived channel access tokens',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#verify-channel-access-token',
  },
  operationId: 'verifyChannelToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({ description: 'A short-lived or long-lived channel access token.' }),
            })
            .openapi({
              description: 'request of the verifyChannelToken',
              required: ['access_token'],
            }),
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
          schema: VerifyChannelAccessTokenResponseSchema,
          example: { client_id: '1350031035', expires_in: 3138007490, scope: 'P CM' },
        },
      },
    },
  },
})

export const postV2OauthRevokeRoute = createRoute({
  method: 'post',
  path: '/v2/oauth/revoke',
  tags: ['channel-access-token'],
  description: 'Revoke short-lived or long-lived channel access token',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token',
  },
  operationId: 'revokeChannelToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({ description: 'A short-lived or long-lived channel access token.' }),
            })
            .openapi({
              description: 'Request of the revokeChannelToken.',
              required: ['access_token'],
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
