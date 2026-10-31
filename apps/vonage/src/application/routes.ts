import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySchema = z
  .string()
  .openapi({
    description:
      'You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)',
    example: 'ap1k3y',
  })
  .openapi('ApiKey')

const ApiSecretSchema = z
  .string()
  .openapi({
    description:
      'You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)',
    example: '230e6cf0709417176df1b4fc1e083adc',
  })
  .openapi('ApiSecret')

const LinksSchema = z
  .object({
    href: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The link URL.',
        example: '/v1/applications/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
  })
  .openapi({
    description:
      'A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).',
    required: [],
  })
  .openapi('Links')

const ApplicationBaseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID allocated to your application by Nexmo.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of your application', example: 'My Application' }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationBase')

const KeysSchema = z
  .object({
    public_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).',
        example: 'PUBLIC_KEY',
      }),
  })
  .openapi({
    description: 'The Nexmo product that you access with this application.',
    required: [],
  })
  .openapi('Keys')

const MessagesSchema = z
  .object({
    webhooks: z
      .array(
        z
          .object({
            endpoint: z
              .url()
              .openapi({
                description:
                  '`inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.',
                example: 'https://example.com/webhooks/status',
              }),
            endpoint_type: z.enum(['inbound_url', 'status_url']).openapi({ example: 'status_url' }),
            http_method: z
              .enum(['GET', 'POST'])
              .openapi({
                description:
                  'The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.',
                example: 'POST',
              }),
          })
          .openapi({ required: ['endpoint_type', 'endpoint', 'http_method'] }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'The Nexmo product that you access with this application.',
    required: [],
  })
  .openapi('Messages')

const VoiceSchema = z
  .object({
    webhooks: z
      .array(
        z
          .object({
            endpoint: z
              .url()
              .openapi({
                description:
                  '`answer_url`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. `event_url`: Nexmo sends event information asynchronously to this URL when status changes.',
                example: 'https://example.com/webhooks/answer',
              }),
            endpoint_type: z.enum(['answer_url', 'event_url']).openapi({ example: 'answer_url' }),
            http_method: z
              .enum(['GET', 'POST'])
              .openapi({
                description:
                  'The HTTP method used to send event information to the `event_url` or `answer_url`.',
                example: 'GET',
              }),
          })
          .openapi({ required: ['endpoint_type', 'endpoint', 'http_method'] }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'The Nexmo product that you access with this application.',
    required: [],
  })
  .openapi('Voice')

const ApplicationSchema = z
  .object({
    _links: LinksSchema.exactOptional(),
    id: z.lazy(() => ApplicationBaseSchema).exactOptional(),
    keys: KeysSchema.exactOptional(),
    messages: MessagesSchema,
    name: z.lazy(() => ApplicationBaseSchema),
    voice: VoiceSchema,
  })
  .openapi({ required: ['name', 'voice', 'messages'] })
  .openapi('Application')

const KeysWithPrivateKeySchema = KeysSchema.and(
  z
    .object({
      private_key: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API.',
          example: 'PRIVATE_KEY',
        }),
    })
    .openapi({ required: [] }),
).openapi('KeysWithPrivateKey')

const ApplicationCreatedSchema = ApplicationSchema.and(
  z.object({ keys: KeysWithPrivateKeySchema.exactOptional() }).openapi({ required: [] }),
).openapi('ApplicationCreated')

const ApplicationsBaseSchema = z
  .object({
    _embedded: z
      .object({
        applications: z
          .array(ApplicationSchema)
          .exactOptional()
          .openapi({
            description:
              'The collection of your applications. Each object contains information about an an individual application. The public_key is not included in the application information.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of items associated with your account.', example: 1 }),
    page_index: z
      .int()
      .exactOptional()
      .openapi({ description: 'The offset from the first page.', example: 1 }),
    page_size: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of items returned on each call to this endpoint. The default is 10 records.',
        example: 10,
      }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationsBase')

const ApplicationsSchema = z
  .object({
    _embedded: z.lazy(() => ApplicationsBaseSchema),
    _links: LinksSchema,
    count: z.lazy(() => ApplicationsBaseSchema),
    page_index: z.lazy(() => ApplicationsBaseSchema),
    page_size: z.lazy(() => ApplicationsBaseSchema),
  })
  .openapi({ required: ['count', 'page_size', 'page_index', '_embedded', '_links'] })
  .openapi('Applications')

const ApiKeyQueryStringParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)',
      in: 'query',
      name: 'api_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiSecretQueryStringParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)',
      in: 'query',
      name: 'api_secret',
      required: true,
      schema: { type: 'string' },
    },
  })

const AppIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID allocated to your application by Nexmo.',
      example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      in: 'path',
      name: 'app_id',
      required: true,
      schema: { type: 'string' },
    },
  })

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'Retrieve all Applications',
  description:
    'You use a `GET` request to retrieve details of all applications associated with your account.',
  operationId: 'retrieveApplications',
  request: {
    query: z.object({
      api_key: ApiKeyQueryStringParamsSchema,
      api_secret: ApiSecretQueryStringParamsSchema,
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the number of items returned on each call to this endpoint. The default is 10 records.',
            example: 10,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      page_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the offset from the first page. The default value is `0`.',
            example: 0,
            in: 'query',
            name: 'page_index',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApplicationsSchema } } },
  },
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  summary: 'Create Application',
  description: 'You use a `POST` request to create a new application.',
  operationId: 'createApplication',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              answer_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to make the request to `answer_url`. The default value is `GET`.',
                  example: 'GET',
                }),
              answer_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only.',
                  example: 'https://example.com/webhooks/answer',
                }),
              api_key: ApiKeySchema,
              api_secret: ApiSecretSchema,
              event_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only.',
                  example: 'POST',
                }),
              event_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications.',
                  example: 'https://example.com/webhooks/event',
                }),
              inbound_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only.',
                  example: 'POST',
                }),
              inbound_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only.',
                  example: 'https://example.com/webhooks/inbound',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of your application.',
                  example: 'My Application',
                }),
              status_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only.',
                  example: 'POST',
                }),
              status_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only.',
                  example: 'https://example.com/webhooks/status',
                }),
              type: z
                .enum(['voice', 'messages'])
                .openapi({
                  description:
                    'The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.',
                  example: 'voice',
                }),
            })
            .openapi({ required: ['api_key', 'api_secret', 'name', 'type'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ApplicationCreatedSchema } },
    },
  },
})

export const getAppIdRoute = createRoute({
  method: 'get',
  path: '/{app_id}',
  summary: 'Retrieve Application',
  description: 'You use a `GET` request to retrieve details about a single application.',
  operationId: 'retrieveApplication',
  request: {
    query: z.object({
      api_key: ApiKeyQueryStringParamsSchema,
      api_secret: ApiSecretQueryStringParamsSchema,
    }),
    params: z.object({ app_id: AppIdParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApplicationSchema } } },
  },
})

export const putAppIdRoute = createRoute({
  method: 'put',
  path: '/{app_id}',
  summary: 'Update Application',
  description: 'You use a `PUT` request to update an existing application.',
  operationId: 'updateApplication',
  request: {
    params: z.object({ app_id: AppIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              answer_method: z
                .string()
                .default('GET')
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to make the request to `answer_url`. The default value is `GET`.',
                  example: 'GET',
                }),
              answer_url: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`.',
                  example: 'https://example.com/webhooks/answer',
                }),
              api_key: ApiKeySchema,
              api_secret: ApiSecretSchema,
              event_method: z
                .string()
                .default('POST')
                .exactOptional()
                .openapi({
                  description:
                    'The HTTP method used to send event information to `event_url`. The default value is POST.',
                  example: 'POST',
                }),
              event_url: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'Nexmo sends event information asynchronously to this URL when status changes.',
                  example: 'https://example.com/webhooks/event',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of your application.',
                  example: 'UpdatedApplication',
                }),
              type: z
                .enum(['voice', 'messages'])
                .openapi({
                  description:
                    "The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.",
                  example: 'voice',
                }),
            })
            .openapi({ required: ['api_key', 'api_secret', 'name', 'type'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApplicationSchema } } },
  },
})

export const deleteAppIdRoute = createRoute({
  method: 'delete',
  path: '/{app_id}',
  summary: 'Destroy Application',
  description: 'You use a `DELETE` request to delete a single application.',
  operationId: 'deleteApplication',
  request: { params: z.object({ app_id: AppIdParamsSchema }) },
  responses: { 204: { description: 'No content' } },
})
