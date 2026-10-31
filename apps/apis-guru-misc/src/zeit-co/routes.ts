import { createRoute, z } from '@hono/zod-openapi'

const DeploymentSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier of the deployment' }),
    meta: z
      .object({
        BK_JOB_ID: z.string().exactOptional(),
        BUILD_NUMBER: z.string().exactOptional(),
        CIRCLE_BUILD_URL: z.string().exactOptional(),
        CIRCLE_COMPARE_URL: z.string().exactOptional(),
        COMMIT: z.string().exactOptional(),
        GITHUB_SHA: z.string().exactOptional(),
        TRAVIS_BUILD_WEB_URL: z.string().exactOptional(),
        'created-by': z.string().exactOptional(),
        created_by: z.string().exactOptional(),
        deploymentPrefix: z.string().exactOptional(),
        gitSha: z.string().exactOptional(),
        githubCommitAuthorLogin: z.string().exactOptional(),
        githubCommitAuthorName: z.string().exactOptional(),
        githubCommitMessage: z.string().exactOptional(),
        githubCommitOrg: z.string().exactOptional(),
        githubCommitRef: z.string().exactOptional(),
        githubCommitRepo: z.string().exactOptional(),
        githubCommitSha: z.string().exactOptional(),
        githubDeployment: z.string().exactOptional(),
        githubDeploymentAuthorizedBy: z.string().exactOptional(),
        githubOrg: z.string().exactOptional(),
        githubPrId: z.string().exactOptional(),
        githubRepo: z.string().exactOptional(),
        gitlabCommitAuthorAvatar: z.string().exactOptional(),
        gitlabCommitAuthorLogin: z.string().exactOptional(),
        gitlabCommitAuthorName: z.string().exactOptional(),
        gitlabCommitMessage: z.string().exactOptional(),
        gitlabCommitRef: z.string().exactOptional(),
        gitlabCommitSha: z.string().exactOptional(),
        gitlabDeployment: z.string().exactOptional(),
        gitlabProjectId: z.string().exactOptional(),
        gitlabProjectName: z.string().exactOptional(),
        gitlabProjectNamespace: z.string().exactOptional(),
        gitlabProjectPath: z.string().exactOptional(),
        gl: z.string().exactOptional(),
        targetDomain: z.string().exactOptional(),
        useOldPipeline: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    name: z.string(),
    url: z.string(),
  })
  .openapi({ required: ['id', 'name', 'url', 'meta'] })
  .openapi('Deployment')

const EventSchema = z
  .object({
    created: z.int(),
    createdAt: z.int().exactOptional(),
    id: z.string(),
    ownerId: z.string(),
    region: z.string().exactOptional(),
    teamId: z.string().exactOptional(),
    userId: z.string(),
  })
  .openapi({ required: ['created', 'id', 'ownerId', 'type', 'userId'] })
  .openapi('Event')

const WebhookSchema = z
  .object({
    configurationId: z
      .string()
      .openapi({
        description:
          'An id that corresponds to the configuration that generated the token that was used to create the webhook',
      }),
    createdAt: z
      .int()
      .openapi({ description: 'Timestamp that tells when was the webhook created' }),
    events: z
      .array(z.string())
      .openapi({ description: 'An array with the event identifiers that the webhook can receive' }),
    id: z.string().openapi({ description: 'Id of the webhook' }),
    name: z
      .string()
      .openapi({ description: 'A name for the webhook that serves as a canonical description' }),
    ownerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the owner which can be a user or a team' }),
    url: z.string().openapi({ description: 'The URL where the POST request will be sent' }),
  })
  .openapi({
    description: 'A webhook subscription with an URL where ZEIT will POST events.',
    required: ['id', 'url', 'name', 'events', 'onwerId', 'createdAt', 'configurationId'],
  })
  .openapi('Webhook')

const TeamIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A team id in case you want to act on behalf of a team',
      in: 'query',
      name: 'teamId',
      required: false,
      schema: { type: 'string' },
    },
  })

const AliasEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({
                alias: z.string(),
                aliasId: z.string().exactOptional(),
                deployment: DeploymentSchema.exactOptional(),
                deploymentId: z.string().exactOptional(),
                deploymentUrl: z.string().exactOptional(),
                oldDeploymentId: z.string().exactOptional(),
                ruleCount: z.int().exactOptional(),
              })
              .openapi({ required: ['alias'] }),
            type: z.literal('alias'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DeploymentErrorEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({
                deployment: DeploymentSchema,
                deploymentId: z.string(),
                name: z.string(),
                plan: z.string(),
                project: z.string(),
                regions: z.array(z.string()).exactOptional(),
                type: z.enum(['NPM', 'STATIC', 'DOCKER', 'LAMBDA']),
                url: z.string(),
              })
              .openapi({
                required: ['deployment', 'deploymentId', 'name', 'plan', 'project', 'type', 'url'],
              }),
            type: z.literal('deployment-error'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DeploymentEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({
                deployment: DeploymentSchema.exactOptional(),
                deploymentId: z.string().exactOptional(),
                name: z.string(),
                plan: z.string().exactOptional(),
                project: z.string().exactOptional(),
                regions: z.array(z.string()).exactOptional(),
                scale: z
                  .object({
                    bru1: z
                      .object({
                        maxInstances: z.int().exactOptional(),
                        minInstances: z.int().exactOptional(),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: [] }),
                    iad1: z
                      .object({
                        maxInstances: z.int().exactOptional(),
                        minInstances: z.int().exactOptional(),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: [] }),
                    sfo1: z
                      .object({
                        maxInstances: z.int().exactOptional(),
                        minInstances: z.int().exactOptional(),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                type: z.enum(['NPM', 'STATIC', 'DOCKER', 'LAMBDA']).exactOptional(),
                url: z.string().exactOptional(),
              })
              .openapi({ required: ['name', 'string'] }),
            type: z.literal('deployment'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DeploymentReadyEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({
                deployment: DeploymentSchema,
                deploymentId: z.string(),
                name: z.string(),
                plan: z.string(),
                project: z.string(),
                regions: z.array(z.string()).exactOptional(),
                type: z.enum(['NPM', 'STATIC', 'DOCKER', 'LAMBDA']),
                url: z.string(),
              })
              .openapi({
                required: ['deployment', 'deploymentId', 'name', 'plan', 'project', 'type', 'url'],
              }),
            type: z.literal('deployment-ready'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DomainDeleteEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({ domainId: z.string().exactOptional(), name: z.string() })
              .openapi({ required: ['name'] }),
            type: z.literal('domain-delete'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DomainEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({
                domainId: z.string().exactOptional(),
                name: z.string(),
                zoneId: z.number().exactOptional(),
              })
              .openapi({ required: ['name'] }),
            type: z.literal('domain'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const DomainVerifyEventRequestBody = {
  content: {
    'application/json': {
      schema: EventSchema.and(
        z
          .object({
            payload: z
              .object({ domainId: z.string().exactOptional(), name: z.string() })
              .openapi({ required: ['name'] }),
            type: z.literal('domain-verify'),
          })
          .openapi({ required: ['type', 'payload'] }),
      ),
    },
  },
  required: true,
}

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

const OauthAuthenticationSecurityScheme = {
  description: 'This API uses OAuth 2 with the authorizationCode flow',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://zeit.co/oauth/authorize',
      scopes: {},
      tokenUrl: 'https://api.zeit.co/v2/oauth/access_token',
    },
  },
  type: 'oauth2',
}

export const getV1IntegrationsWebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/integrations/webhooks',
  tags: ['webhooks'],
  summary: 'Get a list of existent webhooks',
  operationId: 'getWebhooks',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'query',
            name: 'teamId',
            required: false,
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
          schema: z
            .array(WebhookSchema)
            .openapi({ description: 'An Array of webhooks for the given account' }),
        },
      },
    },
  },
})

export const postV1IntegrationsWebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/integrations/webhooks',
  tags: ['webhooks'],
  summary: 'Create a new webhook',
  operationId: 'createWebhook',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'query',
            name: 'teamId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'A name to assign to the webhook' }),
              url: z
                .string()
                .openapi({ description: 'The URL ZEIT will post to when events happen' }),
            })
            .openapi({ required: ['name', 'url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: WebhookSchema } } },
  },
  callbacks: {
    alias: {
      '{$request.body#/url}': {
        post: {
          operationId: 'aliasEvent',
          requestBody: AliasEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    deployment: {
      '{$request.body#/url}': {
        post: {
          operationId: 'deploymentEvent',
          requestBody: DeploymentEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    deploymentError: {
      '{$request.body#/url}': {
        post: {
          operationId: 'deploymentErrorEvent',
          requestBody: DeploymentErrorEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    deploymentReady: {
      '{$request.body#/url}': {
        post: {
          operationId: 'deploymentReadyEvent',
          requestBody: DeploymentReadyEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    domain: {
      '{$request.body#/url}': {
        post: {
          operationId: 'addDomainEvent',
          requestBody: DomainEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    domainDelete: {
      '{$request.body#/url}': {
        post: {
          operationId: 'domainDeletedEvent',
          requestBody: DomainDeleteEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
    domainVerify: {
      '{$request.body#/url}': {
        post: {
          operationId: 'domainVerifiedEvent',
          requestBody: DomainVerifyEventRequestBody,
          responses: { 200: { description: 'OK' } },
        },
      },
    },
  },
})

export const deleteV1IntegrationsWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/v1/integrations/webhooks/:id',
  tags: ['webhooks'],
  summary: 'Remove a webhook by id',
  operationId: 'deleteWebhooks',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'query',
            name: 'teamId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'OK' } },
})

export const getV4DomainsRoute = createRoute({
  method: 'get',
  path: '/v4/domains',
  tags: ['domains'],
  summary: 'Gets a list of domains registered for the authenticating user.',
  operationId: 'getDomains',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'query',
            name: 'teamId',
            required: false,
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
          schema: z
            .object({
              domains: z
                .array(
                  z
                    .object({
                      boughtAt: z
                        .int()
                        .nullable()
                        .openapi({
                          description:
                            'A timestamp to tell when the domain was purchase if it was purchased with ZEIT',
                        }),
                      cdnEnabled: z
                        .boolean()
                        .openapi({
                          description: 'Wether the Cloudfare CDN is enabled for the domain or not',
                        }),
                      createdAt: z
                        .int()
                        .nullable()
                        .openapi({
                          description: 'A timestamp that shows when the domain was created',
                        }),
                      expiresAt: z
                        .int()
                        .nullable()
                        .openapi({
                          description: "The expiration date for the domain in case it's in ZEIT",
                        }),
                      id: z
                        .string()
                        .openapi({ description: 'The unique identifier of the domain.' }),
                      intendedNameservers: z
                        .array(
                          z
                            .string()
                            .openapi({ description: 'An intended nameserver for the domain' }),
                        )
                        .openapi({
                          description:
                            'The set of nameservers ZEIT requires the user to set to verify the domain with Nameservers',
                        }),
                      name: z
                        .string()
                        .openapi({ description: 'The domain name including the TLD' }),
                      nameservers: z
                        .array(
                          z.string().openapi({ description: 'A nameserver the domain has set' }),
                        )
                        .openapi({
                          description: 'The current nameservers we have detected for the domain',
                        }),
                      nsVerifiedAt: z
                        .int()
                        .nullable()
                        .openapi({
                          description:
                            'The timestamp of the last time the domain was verified using Nameservers',
                        }),
                      orderedAt: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'A timestamp indicating when the domain was ordered if it was purchased with ZEIT',
                        }),
                      serviceType: z
                        .enum(['zeit.world', 'external', 'na'])
                        .openapi({
                          description: 'Indicates the current DNS service the domain is using',
                        }),
                      transferredAt: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'If the domain was transferred to ZEIT, it indicates the timestamp for when the transfer was started',
                        }),
                      txtVerifiedAt: z
                        .int()
                        .nullable()
                        .openapi({
                          description:
                            'The timestamp of the last time the domain was verified using a TXT record',
                        }),
                      verificationRecord: z
                        .string()
                        .openapi({
                          description:
                            'Indicates the verification record that should be used to verify the domain using a TXT record',
                        }),
                      verified: z
                        .boolean()
                        .openapi({
                          description: 'Indicates if the domain ownership was already verified',
                        }),
                    })
                    .openapi({
                      required: [
                        'boughtAt',
                        'cdnEnabled',
                        'createdAt',
                        'expiresAt',
                        'id',
                        'intendedNameservers',
                        'name',
                        'nameservers',
                        'nsVerifiedAt',
                        'serviceType',
                        'txtVerifiedAt',
                        'verificationRecord',
                        'verified',
                      ],
                    }),
                )
                .openapi({ description: 'An Array of domains for the given account' }),
            })
            .openapi({
              example: {
                domains: [
                  {
                    boughtAt: 1549492066000,
                    cdnEnabled: false,
                    createdAt: 1549492062697,
                    expiresAt: 1581033599000,
                    id: 'Qmf2RSrNz5sqt6nznp4JpAyXgT6pY65qwJJn8gESt2iKoi',
                    intendedNameservers: [
                      'b.zeit-world.co.uk',
                      'c.zeit-world.org',
                      'e.zeit-world.com',
                      'f.zeit-world.net',
                    ],
                    name: 'zeit.rocks',
                    nameservers: [
                      'f.zeit-world.net',
                      'e.zeit-world.com',
                      'b.zeit-world.co.uk',
                      'c.zeit-world.org',
                    ],
                    nsVerifiedAt: 1549492417256,
                    orderedAt: 1549492057859,
                    serviceType: 'zeit.world',
                    txtVerifiedAt: null,
                    verificationRecord: 'QmReErtvkKUkogSYEAFJCQVPboxRcrCygaFG8xUKinurD4',
                    verified: true,
                  },
                ],
              },
              required: ['domains'],
            }),
        },
      },
    },
  },
})

export const getV4DomainsNameRoute = createRoute({
  method: 'get',
  path: '/v4/domains/{name}',
  tags: ['domains'],
  summary: 'Get a domain for the authenticated user by name',
  operationId: 'getDomain',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A team id in case you want to act on behalf of a team',
            in: 'query',
            name: 'teamId',
            required: false,
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
          schema: z
            .object({
              domain: z
                .object({
                  aliases: z
                    .array(
                      z
                        .object({ alias: z.string(), created: z.int(), id: z.string() })
                        .openapi({ required: ['id', 'alias', 'created'] }),
                    )
                    .openapi({ description: 'Collection of aliases where the domain is used.' }),
                  boughtAt: z
                    .int()
                    .nullable()
                    .openapi({
                      description:
                        'A timestamp to tell when the domain was purchase if it was purchased with ZEIT',
                    }),
                  cdnEnabled: z
                    .boolean()
                    .openapi({
                      description: 'Wether the Cloudfare CDN is enabled for the domain or not',
                    }),
                  certs: z
                    .array(
                      z
                        .object({ cns: z.array(z.string()), created: z.int(), id: z.string() })
                        .openapi({ required: ['id', 'cns', 'created'] }),
                    )
                    .openapi({ description: 'Collection of certs for the domain' }),
                  createdAt: z
                    .int()
                    .nullable()
                    .openapi({ description: 'A timestamp that shows when the domain was created' }),
                  creator: z
                    .object({
                      customerId: z.string().exactOptional(),
                      email: z.string(),
                      id: z.string(),
                      isDomainReseller: z.boolean().exactOptional(),
                      username: z.string(),
                    })
                    .openapi({
                      description: 'Information about who added the domain',
                      required: ['id', 'email', 'username'],
                    }),
                  expiresAt: z
                    .int()
                    .nullable()
                    .openapi({
                      description: "The expiration date for the domain in case it's in ZEIT",
                    }),
                  id: z.string().openapi({ description: 'The unique identifier of the domain.' }),
                  intendedNameservers: z
                    .array(
                      z.string().openapi({ description: 'An intended nameserver for the domain' }),
                    )
                    .openapi({
                      description:
                        'The set of nameservers ZEIT requires the user to set to verify the domain with Nameservers',
                    }),
                  name: z.string().openapi({ description: 'The domain name including the TLD' }),
                  nameservers: z
                    .array(z.string().openapi({ description: 'A nameserver the domain has set' }))
                    .openapi({
                      description: 'The current nameservers we have detected for the domain',
                    }),
                  nsVerifiedAt: z
                    .int()
                    .nullable()
                    .openapi({
                      description:
                        'The timestamp of the last time the domain was verified using Nameservers',
                    }),
                  orderedAt: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'A timestamp indicating when the domain was ordered if it was purchased with ZEIT',
                    }),
                  serviceType: z
                    .enum(['zeit.world', 'external', 'na'])
                    .openapi({
                      description: 'Indicates the current DNS service the domain is using',
                    }),
                  suffix: z
                    .boolean()
                    .openapi({
                      description:
                        'Tells if the domain is being used as a custom suffix for the user or team',
                    }),
                  transferredAt: z
                    .int()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'If the domain was transferred to ZEIT, it indicates the timestamp for when the transfer was started',
                    }),
                  txtVerifiedAt: z
                    .int()
                    .nullable()
                    .openapi({
                      description:
                        'The timestamp of the last time the domain was verified using a TXT record',
                    }),
                  verificationRecord: z
                    .string()
                    .openapi({
                      description:
                        'Indicates the verification record that should be used to verify the domain using a TXT record',
                    }),
                  verified: z
                    .boolean()
                    .openapi({
                      description: 'Indicates if the domain ownership was already verified',
                    }),
                })
                .openapi({
                  description: 'The domain information',
                  required: [
                    'boughtAt',
                    'cdnEnabled',
                    'createdAt',
                    'expiresAt',
                    'id',
                    'intendedNameservers',
                    'name',
                    'nameservers',
                    'nsVerifiedAt',
                    'serviceType',
                    'txtVerifiedAt',
                    'verificationRecord',
                    'verified',
                    'suffix',
                    'aliases',
                    'certs',
                    'creator',
                  ],
                }),
            })
            .openapi({
              example: {
                domain: {
                  aliases: [],
                  boughtAt: null,
                  cdnEnabled: false,
                  certs: [],
                  createdAt: 1544658552174,
                  creator: {
                    customerId: 'cus_COxSxT1ysva5Xa',
                    email: 'demo@zeit.co',
                    id: 'ZspSRT4ljIEEmMHgoDwKWDei',
                    username: 'zeit_user',
                  },
                  expiresAt: null,
                  id: 'EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1',
                  intendedNameservers: [
                    'a.zeit-world.co.uk',
                    'c.zeit-world.org',
                    'd.zeit-world.com',
                    'f.zeit-world.net',
                  ],
                  name: 'my-zeit-domain.website',
                  nameservers: ['ns1.nameserver.net', 'ns2.nameserver.net'],
                  nsVerifiedAt: null,
                  serviceType: 'external',
                  suffix: false,
                  txtVerifiedAt: null,
                  verificationRecord: 'YMc9dEJKbAncYtTqSH8dp1j5NXycfEzyjkzBJ3m3UGwR43',
                  verified: false,
                },
              },
              required: ['domain'],
            }),
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({ code: z.literal('not_found'), message: z.string(), name: z.string() })
                .openapi({ required: ['code', 'message', 'name'] }),
            })
            .openapi({
              example: {
                error: {
                  code: 'not_found',
                  message: 'The domain with name zeit.rocks could not be found',
                  name: 'zeit.rocks',
                },
              },
              required: ['error'],
            }),
        },
      },
    },
  },
})
