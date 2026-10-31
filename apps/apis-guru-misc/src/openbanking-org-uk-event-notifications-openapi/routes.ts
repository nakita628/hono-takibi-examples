import { createRoute, z } from '@hono/zod-openapi'

const OBEventLink1Schema = z
  .strictObject({
    link: z.string().openapi({ description: 'Resource link.' }),
    version: z.string().min(1).max(10).openapi({ description: 'Resource version.' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description: 'Resource links to other available versions of the resource.',
    required: ['version', 'link'],
  })
  .openapi('OBEventLink1')

const OBEventSubject1Schema = z
  .strictObject({
    'http://openbanking.org.uk/rid': z
      .string()
      .min(1)
      .max(128)
      .openapi({ description: 'Resource Id for the updated resource.' }),
    'http://openbanking.org.uk/rlk': z
      .array(OBEventLink1Schema)
      .min(1)
      .openapi({ description: 'Resource links to other available versions of the resource.' }),
    'http://openbanking.org.uk/rty': z
      .string()
      .min(1)
      .max(128)
      .openapi({ description: 'Resource Type for the updated resource.' }),
    subject_type: z
      .string()
      .min(1)
      .max(128)
      .openapi({ description: 'Subject type for the updated resource. ' }),
  })
  .openapi({
    description: 'The resource-update event.',
    required: [
      'subject_type',
      'http://openbanking.org.uk/rid',
      'http://openbanking.org.uk/rty',
      'http://openbanking.org.uk/rlk',
    ],
  })
  .openapi('OBEventSubject1')

const OBEventResourceUpdate1Schema = z
  .strictObject({ subject: OBEventSubject1Schema })
  .openapi({ description: 'Resource-Update Event.', required: ['subject'] })
  .openapi('OBEventResourceUpdate1')

const OBEvent1Schema = z
  .strictObject({ 'urn:uk:org:openbanking:events:resource-update': OBEventResourceUpdate1Schema })
  .openapi({ description: 'Events.', required: ['urn:uk:org:openbanking:events:resource-update'] })
  .openapi('OBEvent1')

const OBEventNotification1Schema = z
  .strictObject({
    aud: z.string().min(1).max(128).openapi({ description: 'Audience.' }),
    events: OBEvent1Schema,
    iat: z.int32().min(0).openapi({ description: 'Issued At. ' }),
    iss: z.string().openapi({ description: 'Issuer.' }),
    jti: z.string().min(1).max(128).openapi({ description: 'JWT ID.' }),
    sub: z.url().openapi({ description: 'Subject' }),
    toe: z.int32().min(0).openapi({ description: 'Time of Event.' }),
    txn: z.string().min(1).max(128).openapi({ description: 'Transaction Identifier.' }),
  })
  .openapi({
    description: 'The resource-update event.',
    required: ['iss', 'iat', 'jti', 'aud', 'sub', 'txn', 'toe', 'events'],
  })
  .openapi('OBEventNotification1')

const XFapiFinancialIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The unique id of the ASPSP to which the request is issued. The unique id will be issued by OB.',
      in: 'header',
      name: 'x-fapi-financial-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const XFapiInteractionIdParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'An RFC4122 UID used as a correlation id.',
      in: 'header',
      name: 'x-fapi-interaction-id',
      required: false,
      schema: { type: 'string' },
    },
  })

const TPPOAuth2SecuritySecurityScheme = {
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      scopes: {
        accounts: 'Ability to read Accounts information',
        fundsconfirmations: 'Ability to confirm funds',
        payments: 'Generic payment scope',
      },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

export const postEventNotificationsRoute = createRoute({
  method: 'post',
  path: '/event-notifications',
  tags: ['Event Notification'],
  summary: 'Send an event notification',
  operationId: 'CreateEventNotification',
  request: {
    headers: z.object({
      'x-fapi-financial-id': XFapiFinancialIdParamParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamParamsSchema,
    }),
    body: {
      description: 'Create an Callback URI',
      content: { 'application/jwt': { schema: z.base64() } },
      required: true,
    },
  },
  responses: { 202: { description: 'Accepted' } },
})
