import { createRoute, z } from '@hono/zod-openapi'

const _200OKSchema = z
  .looseObject({
    dkimKeys: z.array(z.any()).nullable().exactOptional(),
    status: z.enum(['emailNotFound', 'emailNotVerified', 'created']),
  })
  .openapi({ required: ['status'] })
  .openapi('_200OK')

const _401UnauthorizedSchema = z
  .looseObject({
    status: z.literal(401),
    title: z.literal('Unauthorized'),
    traceId: z.string().regex(/^00-[0-9a-f]{32}-[0-9a-f]{16}-00$/),
    type: z.literal('https://tools.ietf.org/html/rfc7235#section-3.1'),
  })
  .openapi({ required: ['type', 'title', 'status', 'traceId'] })
  .openapi('_401Unauthorized')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiMailServicePvtProvidersEmailProviderDkimRoute = createRoute({
  method: 'post',
  path: '/api/mail-service/pvt/providers/{EmailProvider}/dkim',
  tags: ['DKIM Configuration'],
  summary: 'Generate DKIM keys',
  description: 'Create DKIM keys for sender that was setup in VTEX mail servers',
  operationId: 'createDKIM',
  request: {
    params: z.object({
      EmailProvider: z
        .string()
        .default('help@valdie.co')
        .openapi({
          param: {
            description: 'E-mail address for sender that was setup in VTEX mail servers',
            in: 'path',
            name: 'EmailProvider',
            required: true,
            schema: { default: 'help@valdie.co', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: _200OKSchema,
          examples: {
            created: {
              summary: 'created summary',
              value: {
                dkimKeys: [
                  "'n3zbltwizctxpgcmqrars4bmfdd3zlyo._domainkey.valdie.co','CNAME','n3zbltwizctxpgcmqrars4bmfdd3zlyo.dkim.amazonses.com'",
                  "'sq4iae4be52fhqq3wm44btttvndeecfv._domainkey.valdie.co','CNAME','sq4iae4be52fhqq3wm44btttvndeecfv.dkim.amazonses.com'",
                  "'n4z6g2g7yfy4pnhjklfesxrrkt4o2ha4._domainkey.valdie.co','CNAME','n4z6g2g7yfy4pnhjklfesxrrkt4o2ha4.dkim.amazonses.com'",
                ],
                status: 'created',
              },
            },
            emailNotFound: {
              summary: 'emailNotFound summary',
              value: { dkimKeys: null, status: 'emailNotFound' },
            },
            emailNotVerified: {
              summary: 'emailNotVerified summary',
              value: { dkimKeys: null, status: 'emailNotVerified' },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _401UnauthorizedSchema,
          examples: {
            unauthorized: {
              summary: 'unauthorized summary',
              value: {
                status: 401,
                title: 'Unauthorized',
                traceId: '00-f8949e0e2a80ff4481b4375908349701-a6a7ecf8b50a2043-00',
                type: 'https://tools.ietf.org/html/rfc7235#section-3.1',
              },
            },
          },
        },
      },
    },
  },
})
