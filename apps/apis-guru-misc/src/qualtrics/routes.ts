import { createRoute, z } from '@hono/zod-openapi'

const CreateContactInMailingListSchema = z
  .object({
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    unsubscribed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateContactInMailingList')

const CreateDistributionLinksSchema = z
  .object({
    action: z.string().default('CreateDistribution').exactOptional(),
    description: z.string().exactOptional(),
    expirationDate: z.string().exactOptional().openapi({ example: '2021-01-21 00:00:00' }),
    linkType: z.string().exactOptional(),
    mailingListId: z.string().exactOptional(),
    surveyId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDistributionLinks')

const DistributionsResponseSchema = z
  .object({
    meta: z
      .object({ httpStatus: z.string().exactOptional(), requestId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    result: z
      .object({
        elements: z
          .array(
            z
              .object({
                createdDate: z.string(),
                customHeaders: z.object({}),
                embeddedData: z.any(),
                headers: z
                  .object({
                    fromEmail: z.any().exactOptional(),
                    fromName: z.any().exactOptional(),
                    replyToEmail: z.any().exactOptional(),
                  })
                  .openapi({ required: [] }),
                id: z.string(),
                message: z
                  .object({
                    libraryId: z.any().exactOptional(),
                    messageId: z.any().exactOptional(),
                    messageText: z.any().exactOptional(),
                  })
                  .openapi({ required: [] }),
                modifiedDate: z.string(),
                organizationId: z.string(),
                ownerId: z.string(),
                parentDistributionId: z.any(),
                recipients: z
                  .object({
                    contactId: z.any().exactOptional(),
                    libraryId: z.string().exactOptional(),
                    mailingListId: z.string().exactOptional(),
                    sampleId: z.any().exactOptional(),
                  })
                  .openapi({ required: [] }),
                requestStatus: z.string(),
                requestType: z.string(),
                sendDate: z.string(),
                stats: z
                  .object({
                    blocked: z.int().exactOptional(),
                    bounced: z.int().exactOptional(),
                    complaints: z.int().exactOptional(),
                    failed: z.int().exactOptional(),
                    finished: z.int().exactOptional(),
                    opened: z.int().exactOptional(),
                    sent: z.int().exactOptional(),
                    skipped: z.int().exactOptional(),
                    started: z.int().exactOptional(),
                  })
                  .openapi({ required: [] }),
                surveyLink: z
                  .object({
                    expirationDate: z.string().exactOptional(),
                    linkType: z.string().exactOptional(),
                    surveyId: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              })
              .openapi({
                required: [
                  'id',
                  'parentDistributionId',
                  'ownerId',
                  'organizationId',
                  'requestStatus',
                  'requestType',
                  'sendDate',
                  'createdDate',
                  'modifiedDate',
                  'customHeaders',
                  'headers',
                  'recipients',
                  'message',
                  'surveyLink',
                  'embeddedData',
                  'stats',
                ],
              }),
          )
          .exactOptional(),
        nextPage: z.any().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DistributionsResponse')

const EventSubscriptionHookSchemaSchema = z
  .object({
    $content: z
      .string()
      .default('x')
      .openapi({ 'x-ms-summary': 'Content', 'x-ms-visibility': 'internal' }),
    '$content-type': z
      .string()
      .default('application/x-www-form-urlencoded')
      .openapi({ 'x-ms-summary': 'Content type', 'x-ms-visibility': 'internal' }),
    $formdata: z
      .array(
        z
          .object({
            key: z.string().openapi({ 'x-ms-summary': ' : Question' }),
            value: z.string().openapi({ 'x-ms-summary': ': Answer' }),
          })
          .openapi({ required: ['key', 'value'] }),
      )
      .exactOptional()
      .openapi({ 'x-ms-summary': 'Questions and answers' }),
  })
  .openapi({ required: ['$content-type', '$content'] })
  .openapi('EventSubscriptionHookSchema')

const EventSubscriptionsResponseSchema = z
  .object({
    meta: z
      .object({ httpStatus: z.string().exactOptional(), requestId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    result: z
      .object({
        meta: z
          .object({ httpStatus: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        result: z
          .object({ id: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('EventSubscriptionsResponse')

const RetrieveDistributionLinksResponseSchema = z
  .object({
    meta: z
      .object({ httpStatus: z.string().exactOptional(), requestId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    result: z
      .object({
        elements: z
          .array(
            z
              .object({
                contactId: z.string(),
                email: z.string(),
                exceededContactFrequency: z.boolean(),
                externalDataReference: z.any(),
                firstName: z.string(),
                lastName: z.string(),
                link: z.string(),
                linkExpiration: z.string(),
                status: z.string(),
                transactionId: z.any(),
                unsubscribed: z.boolean(),
              })
              .openapi({
                required: [
                  'contactId',
                  'transactionId',
                  'link',
                  'exceededContactFrequency',
                  'linkExpiration',
                  'status',
                  'lastName',
                  'firstName',
                  'externalDataReference',
                  'email',
                  'unsubscribed',
                ],
              }),
          )
          .exactOptional(),
        nextPage: z.any().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('RetrieveDistributionLinksResponse')

const SubscribeToEventBodySchema = z
  .object({
    encrypt: z.boolean().exactOptional(),
    publicationUrl: z
      .string()
      .openapi({
        description: 'The internal publication URL - will be generated by PowerAutomate',
        'x-ms-notification-url': true,
        'x-ms-visibility': 'internal',
      }),
    topics: z
      .string()
      .default('surveyengine.completedResponse.<Insert SurveyID>')
      .openapi({
        description:
          'The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]',
      }),
  })
  .openapi({ required: ['topics', 'publicationUrl'] })
  .openapi('SubscribeToEventBody')

const SurveyResponseSchema = z.object({}).openapi('SurveyResponse')

const SubscribeToEventBodyRequestBody = {
  description: 'This is the request body of the webhook',
  content: { 'application/json': { schema: SubscribeToEventBodySchema } },
  required: true,
}

const ApiKeySecurityScheme = { in: 'header', name: 'X-API-TOKEN', type: 'apiKey' }

export const postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRoute = createRoute({
  method: 'post',
  path: '/directories/{DirectoryId}/mailinglists/{MailingListId}/contacts',
  summary: 'Create contact in mailing list',
  description: 'Creates a contact in a given mailing list',
  operationId: 'CreateContactInMailinglist',
  request: {
    params: z.object({
      DirectoryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the qualtrics directory to create the contact to',
            in: 'path',
            name: 'DirectoryId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Directory ID',
          },
        }),
      MailingListId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the mailing list',
            in: 'path',
            name: 'MailingListId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Mailing list ID',
          },
        }),
    }),
    body: {
      description: 'Contact data',
      content: { 'application/json': { schema: CreateContactInMailingListSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK - Contact created', headers: z.object({}) } },
})

export const getDistributionsRoute = createRoute({
  method: 'get',
  path: '/distributions',
  summary: 'Get distributions for survey',
  description: 'Gets all distributions for a given survey',
  operationId: 'GetDistributions',
  request: {
    query: z.object({
      surveyId: z
        .string()
        .openapi({
          param: {
            description: 'The survey for which to load the distributions',
            in: 'query',
            name: 'surveyId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Survey ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Distributions',
      content: { 'application/json': { schema: DistributionsResponseSchema } },
      headers: z.object({}),
    },
  },
})

export const postDistributionsRoute = createRoute({
  method: 'post',
  path: '/distributions',
  summary: 'Generate distribution links',
  description: 'Geneates links for individual distribution',
  operationId: 'GenerateDistributionLinks',
  request: {
    body: {
      description: 'Parameters for the link generation',
      content: { 'application/json': { schema: CreateDistributionLinksSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getDistributionsDistributionIdLinksRoute = createRoute({
  method: 'get',
  path: '/distributions/{DistributionId}/links',
  summary: 'Retrieve distribution links',
  description: 'Retrieves all the individual links for a given distribution',
  operationId: 'Retrievedistributionlinks',
  request: {
    query: z.object({
      surveyId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the survey (eg: SV_123)',
            in: 'query',
            name: 'surveyId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Survey ID',
          },
        }),
    }),
    params: z.object({
      DistributionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the distribution list',
            in: 'path',
            name: 'DistributionId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Distribution ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Generated list of links',
      content: { 'application/json': { schema: RetrieveDistributionLinksResponseSchema } },
      headers: z.object({}),
    },
  },
})

export const postEventsubscriptionsIndexRoute = createRoute({
  method: 'post',
  path: '/eventsubscriptions/',
  summary: 'Triggers when a response is submitted to a qualtrics survey',
  description: 'Subscribe to response event',
  operationId: 'WhenAResponseIsReceived',
  request: { body: SubscribeToEventBodyRequestBody },
  responses: {
    200: {
      description: 'OK - web hook registered',
      content: { 'application/json': { schema: EventSubscriptionsResponseSchema } },
      headers: z.object({}),
    },
  },
})

export const deleteEventsubscriptionsIndexRoute = createRoute({
  method: 'delete',
  path: '/eventsubscriptions/',
  summary: 'Remove subscription to response event',
  description: 'Remove event subscription',
  operationId: 'WebhookDelete',
  request: { body: SubscribeToEventBodyRequestBody },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventSubscriptionsResponseSchema } },
      headers: z.object({}),
    },
  },
})

export const getEventsubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/eventsubscriptions/{SubscriptionId}',
  summary: 'Get event subscriptions',
  description: 'Get event subscriptions',
  operationId: 'GetEventSubscriptions',
  request: {
    params: z.object({
      SubscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of event subscription - can be obtained from web hook response',
            in: 'path',
            name: 'SubscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Event subscriptions',
      content: { 'application/json': { schema: EventSubscriptionsResponseSchema } },
      headers: z.object({}),
    },
  },
})

export const getSurveyDefinitionsSurveyIdRoute = createRoute({
  method: 'get',
  path: '/survey-definitions/{SurveyId}',
  summary: 'Get survey',
  description: 'Gets a single Qualtrics survey speficied by its ID',
  operationId: 'GetSurvey',
  request: {
    params: z.object({
      SurveyId: z
        .string()
        .openapi({
          param: {
            description: 'ID of survey (eg. SV_123)',
            in: 'path',
            name: 'SurveyId',
            required: true,
            schema: { type: 'string' },
            'x-ms-summary': 'Survey ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Survey data',
      content: { 'application/json': { schema: SurveyResponseSchema } },
      headers: z.object({}),
    },
    default: { description: 'Operation Failed.' },
  },
})
