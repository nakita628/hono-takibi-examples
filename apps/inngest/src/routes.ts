import { createRoute, z } from '@hono/zod-openapi'

const EventSchema = z
  .object({
    internal_id: z
      .ulid()
      .openapi({
        'x-stoplight': { id: '2i8hq1l4nvnm6' },
        description: 'Unique identifier used to represent this event internally and to the API.',
      }),
    accountID: z
      .uuid()
      .openapi({ 'x-stoplight': { id: 'kmv8wmjzp3qnu' }, description: 'Your account ID' }),
    environmentID: z
      .uuid()
      .openapi({ 'x-stoplight': { id: 'at7qf8hg81gbg' }, description: 'Your environment ID' }),
    source: z
      .string()
      .openapi({
        'x-stoplight': { id: 'ztu0nmbuwdqjs' },
        description: 'The origin of the event, eg. "key" for an event key.',
      }),
    sourceID: z
      .uuid()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'irkn3jg7l9dht' },
        description: 'The ID of the key used to deliver the event',
      }),
    receivedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the event was received by Inngest',
        'x-stoplight': { id: 'nma118yk3yw4c' },
      }),
    id: z
      .string()
      .openapi({
        description: 'The `id` field specified in the event',
        'x-stoplight': { id: 'eaoe2lo1jf39w' },
      }),
    name: z
      .string()
      .openapi({
        'x-stoplight': { id: 'rlfpg5wrr3dd7' },
        description: 'The `name` field specified in the event',
      }),
    data: z
      .looseObject({})
      .openapi({
        'x-stoplight': { id: '5iwuppsvfvn24' },
        description: 'The `data` field specified in the event',
      }),
    user: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: '1rb5xbqsgrnb9' },
        description: 'The `user` field specified in the event',
      }),
    ts: z
      .int()
      .openapi({
        'x-stoplight': { id: 'fjnmbkpf82akl' },
        description: 'The `ts` field specified in the event',
      }),
    v: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'pxxjlbk2u5dd2' },
        description: 'The `v` field specified in the event',
      }),
  })
  .openapi({
    title: 'Event',
    'x-stoplight': { id: 'vv6knflmo5s46' },
    description: 'An event and metadata attached to the event returned from an API response',
    required: [
      'internal_id',
      'accountID',
      'environmentID',
      'source',
      'receivedAt',
      'id',
      'name',
      'data',
      'ts',
    ],
    'x-readme-ref-name': 'Event',
  })
  .openapi('Event')

const FunctionRunSchema = z
  .object({
    run_id: z.string().openapi({ description: 'The ID of the function run' }),
    run_started_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the function run was scheduled' }),
    ended_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the function has ended, the end time.  A function has ended if the status is not Running.',
      }),
    status: z.enum(['Running', 'Completed', 'Failed', 'Cancelled']).openapi({ readOnly: true }),
    output: z
      .union([z.looseObject({}), z.array(z.any()), z.number(), z.string(), z.boolean()])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Data returned from the function handler. The data structure returned will match what the function returns.',
      }),
    function_id: z.string(),
    function_version: z.int(),
    environment_id: z.string().openapi({ 'x-stoplight': { id: 'tehuc95fjew5q' } }),
    event_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The internal ID of the triggering event, if the function was initialized via an event',
      }),
    batch_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'u5c5r2msk8gcy' },
        description: 'The ID of the batch, if this function was initialized via a batch of events',
      }),
    original_run_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: '6en4jeah54ed6' },
        description: 'The run ID of the original run, if this is a replay',
      }),
    cron: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'myxg3892c1xef' },
        description:
          'The cron used to initialize this scheduled function, if the function was initialized via a cron',
      }),
  })
  .openapi({
    'x-stoplight': { id: '3h9yjyub9g8qd' },
    required: [
      'run_id',
      'run_started_at',
      'status',
      'function_id',
      'function_version',
      'environment_id',
    ],
    'x-readme-ref-name': 'Function-run',
  })
  .openapi('FunctionRun')

const JobSchema = z
  .object({
    at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'fh5ysw28856me' },
        description: 'The time the job is scheduled to run',
      }),
    position: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        'x-stoplight': { id: '872cgqill4kjv' },
        description: 'The position of the job within the function queue',
      }),
    attempt: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        'x-stoplight': { id: 'agtpbrz88affc' },
        description: 'The attempt number of the job',
      }),
  })
  .openapi({
    title: 'Job',
    'x-stoplight': { id: 'gmllq9oukuwph' },
    description: 'A single job returned when listing jobs within a run ID',
    'x-readme-ref-name': 'Job',
    required: [],
  })
  .openapi('Job')

const CancellationSchema = z
  .object({
    id: z.string().openapi({ 'x-stoplight': { id: 'z4c4aul5o74o4' } }),
    environment_id: z.string().openapi({ 'x-stoplight': { id: 'xwtp04ooqjllt' } }),
    function_internal_id: z.string().openapi({ 'x-stoplight': { id: '61id028kd3jl2' } }),
    function_id: z.string().openapi({ 'x-stoplight': { id: 'bo5lqt3gng88f' } }),
    started_before: z.iso
      .datetime({ offset: true })
      .openapi({ 'x-stoplight': { id: '9299swbsqdk0k' } }),
    started_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stoplight': { id: '7faml56thwmiv' } }),
    if: z
      .string()
      .exactOptional()
      .openapi({ 'x-stoplight': { id: '3gce6zim8zjku' } }),
  })
  .openapi({
    title: 'Cancellation',
    'x-stoplight': { id: 'fgdnng00sksxk' },
    required: ['id', 'environment_id', 'function_internal_id', 'function_id', 'started_before'],
    'x-readme-ref-name': 'Cancellation',
  })
  .openapi('Cancellation')

const WebhookSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom descripter for the webhook endpoint' }),
    transform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A JavaScript transform function that accepts the inbound request components and returns an object in the Inngest event payload format.',
      }),
  })
  .openapi({
    title: 'Webhook',
    examples: [
      {
        name: 'Clerk',
        transform:
          'function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }',
      },
    ],
    required: [],
  })
  .openapi('Webhook')

const EventListResponse = {
  description: 'The response when listing events.',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(
            z
              .object({
                internal_id: z
                  .ulid()
                  .openapi({
                    'x-stoplight': { id: '2i8hq1l4nvnm6' },
                    description:
                      'Unique identifier used to represent this event internally and to the API.',
                  }),
                accountID: z
                  .uuid()
                  .openapi({
                    'x-stoplight': { id: 'kmv8wmjzp3qnu' },
                    description: 'Your account ID',
                  }),
                environmentID: z
                  .uuid()
                  .openapi({
                    'x-stoplight': { id: 'at7qf8hg81gbg' },
                    description: 'Your environment ID',
                  }),
                source: z
                  .string()
                  .openapi({
                    'x-stoplight': { id: 'ztu0nmbuwdqjs' },
                    description: 'The origin of the event, eg. "key" for an event key.',
                  }),
                sourceID: z
                  .uuid()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'irkn3jg7l9dht' },
                    description: 'The ID of the key used to deliver the event',
                  }),
                receivedAt: z.iso
                  .datetime({ offset: true })
                  .openapi({
                    description: 'When the event was received by Inngest',
                    'x-stoplight': { id: 'nma118yk3yw4c' },
                  }),
                id: z
                  .string()
                  .openapi({
                    description: 'The `id` field specified in the event',
                    'x-stoplight': { id: 'eaoe2lo1jf39w' },
                  }),
                name: z
                  .string()
                  .openapi({
                    'x-stoplight': { id: 'rlfpg5wrr3dd7' },
                    description: 'The `name` field specified in the event',
                  }),
                data: z
                  .looseObject({})
                  .openapi({
                    'x-stoplight': { id: '5iwuppsvfvn24' },
                    description: 'The `data` field specified in the event',
                  }),
                user: z
                  .looseObject({})
                  .nullable()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: '1rb5xbqsgrnb9' },
                    description: 'The `user` field specified in the event',
                  }),
                ts: z
                  .int()
                  .openapi({
                    'x-stoplight': { id: 'fjnmbkpf82akl' },
                    description: 'The `ts` field specified in the event',
                  }),
                v: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'pxxjlbk2u5dd2' },
                    description: 'The `v` field specified in the event',
                  }),
              })
              .openapi({
                'x-stoplight': { id: 'na2zfnjuumzvu' },
                title: 'Event',
                description:
                  'An event and metadata attached to the event returned from an API response',
                required: [
                  'internal_id',
                  'accountID',
                  'environmentID',
                  'source',
                  'receivedAt',
                  'id',
                  'name',
                  'data',
                  'ts',
                ],
                'x-readme-ref-name': 'Event',
              }),
          ),
          metadata: z
            .object({ fetchedAt: z.string(), cachedUntil: z.string().nullable().exactOptional() })
            .openapi({ required: ['fetchedAt'] }),
        })
        .openapi({ required: ['data', 'metadata'] }),
    },
  },
}

const ErrorResponse = {
  description: 'An error from the API',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.string().exactOptional(),
          data: z
            .union([z.looseObject({}), z.string()])
            .nullable()
            .exactOptional(),
          status: z.int().exactOptional(),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
              data: null,
              status: 500,
            },
          },
          required: [],
        }),
    },
  },
}

const EventResponse = {
  description: 'The response when fetching an event',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .object({
              internal_id: z
                .ulid()
                .openapi({
                  'x-stoplight': { id: '2i8hq1l4nvnm6' },
                  description:
                    'Unique identifier used to represent this event internally and to the API.',
                }),
              accountID: z
                .uuid()
                .openapi({
                  'x-stoplight': { id: 'kmv8wmjzp3qnu' },
                  description: 'Your account ID',
                }),
              environmentID: z
                .uuid()
                .openapi({
                  'x-stoplight': { id: 'at7qf8hg81gbg' },
                  description: 'Your environment ID',
                }),
              source: z
                .string()
                .openapi({
                  'x-stoplight': { id: 'ztu0nmbuwdqjs' },
                  description: 'The origin of the event, eg. "key" for an event key.',
                }),
              sourceID: z
                .uuid()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'irkn3jg7l9dht' },
                  description: 'The ID of the key used to deliver the event',
                }),
              receivedAt: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'When the event was received by Inngest',
                  'x-stoplight': { id: 'nma118yk3yw4c' },
                }),
              id: z
                .string()
                .openapi({
                  description: 'The `id` field specified in the event',
                  'x-stoplight': { id: 'eaoe2lo1jf39w' },
                }),
              name: z
                .string()
                .openapi({
                  'x-stoplight': { id: 'rlfpg5wrr3dd7' },
                  description: 'The `name` field specified in the event',
                }),
              data: z
                .looseObject({})
                .openapi({
                  'x-stoplight': { id: '5iwuppsvfvn24' },
                  description: 'The `data` field specified in the event',
                }),
              user: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: '1rb5xbqsgrnb9' },
                  description: 'The `user` field specified in the event',
                }),
              ts: z
                .int()
                .openapi({
                  'x-stoplight': { id: 'fjnmbkpf82akl' },
                  description: 'The `ts` field specified in the event',
                }),
              v: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'pxxjlbk2u5dd2' },
                  description: 'The `v` field specified in the event',
                }),
            })
            .openapi({
              title: 'Event',
              'x-stoplight': { id: 'vv6knflmo5s46' },
              description:
                'An event and metadata attached to the event returned from an API response',
              required: [
                'internal_id',
                'accountID',
                'environmentID',
                'source',
                'receivedAt',
                'id',
                'name',
                'data',
                'ts',
              ],
              'x-readme-ref-name': 'Event',
            }),
          metadata: z
            .object({ fetchedAt: z.string(), cachedUntil: z.string().nullable().exactOptional() })
            .openapi({ required: ['fetchedAt'] }),
        })
        .openapi({ required: ['data', 'metadata'] }),
    },
  },
}

const FunctionRunResponse = {
  description: 'The response when fetching a function run',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .object({
              run_id: z.string().openapi({ description: 'The ID of the function run' }),
              run_started_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'When the function run was scheduled' }),
              ended_at: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If the function has ended, the end time.  A function has ended if the status is not Running.',
                }),
              status: z
                .enum(['Running', 'Completed', 'Failed', 'Cancelled'])
                .openapi({ readOnly: true }),
              output: z
                .union([z.looseObject({}), z.array(z.any()), z.number(), z.string(), z.boolean()])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Data returned from the function handler. The data structure returned will match what the function returns.',
                }),
              function_id: z.string(),
              function_version: z.int(),
              environment_id: z.string().openapi({ 'x-stoplight': { id: 'tehuc95fjew5q' } }),
              event_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The internal ID of the triggering event, if the function was initialized via an event',
                }),
              batch_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'u5c5r2msk8gcy' },
                  description:
                    'The ID of the batch, if this function was initialized via a batch of events',
                }),
              original_run_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: '6en4jeah54ed6' },
                  description: 'The run ID of the original run, if this is a replay',
                }),
              cron: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'myxg3892c1xef' },
                  description:
                    'The cron used to initialize this scheduled function, if the function was initialized via a cron',
                }),
            })
            .openapi({
              'x-stoplight': { id: '3h9yjyub9g8qd' },
              required: [
                'run_id',
                'run_started_at',
                'status',
                'function_id',
                'function_version',
                'environment_id',
              ],
              'x-readme-ref-name': 'Function-run',
            }),
          metadata: z
            .object({ fetchedAt: z.string(), cachedUntil: z.string().nullable().exactOptional() })
            .openapi({ required: ['fetchedAt'] }),
        })
        .openapi({ required: ['data', 'metadata'] }),
    },
  },
}

const FunctionRunListResponse = {
  description: 'The response when fetching function runs',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(
            z
              .object({
                run_id: z.string().openapi({ description: 'The ID of the function run' }),
                run_started_at: z.iso
                  .datetime({ offset: true })
                  .openapi({ description: 'When the function run was scheduled' }),
                ended_at: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'If the function has ended, the end time.  A function has ended if the status is not Running.',
                  }),
                status: z
                  .enum(['Running', 'Completed', 'Failed', 'Cancelled'])
                  .openapi({ readOnly: true }),
                output: z
                  .union([z.looseObject({}), z.array(z.any()), z.number(), z.string(), z.boolean()])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Data returned from the function handler. The data structure returned will match what the function returns.',
                  }),
                function_id: z.string(),
                function_version: z.int(),
                environment_id: z.string().openapi({ 'x-stoplight': { id: 'tehuc95fjew5q' } }),
                event_id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The internal ID of the triggering event, if the function was initialized via an event',
                  }),
                batch_id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'u5c5r2msk8gcy' },
                    description:
                      'The ID of the batch, if this function was initialized via a batch of events',
                  }),
                original_run_id: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: '6en4jeah54ed6' },
                    description: 'The run ID of the original run, if this is a replay',
                  }),
                cron: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'myxg3892c1xef' },
                    description:
                      'The cron used to initialize this scheduled function, if the function was initialized via a cron',
                  }),
              })
              .openapi({
                'x-stoplight': { id: 'sjhjyf006ycq3' },
                required: [
                  'run_id',
                  'run_started_at',
                  'status',
                  'function_id',
                  'function_version',
                  'environment_id',
                ],
                'x-readme-ref-name': 'Function-run',
              }),
          ),
          metadata: z
            .object({ fetchedAt: z.string(), cachedUntil: z.string().nullable().exactOptional() })
            .openapi({ required: ['fetchedAt'] }),
        })
        .openapi({ required: ['data', 'metadata'] }),
    },
  },
}

const JobListResponse = {
  description: 'The response when fetching function runs',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z.array(
            z
              .object({
                at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'fh5ysw28856me' },
                    description: 'The time the job is scheduled to run',
                  }),
                position: z
                  .int()
                  .min(0)
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: '872cgqill4kjv' },
                    description: 'The position of the job within the function queue',
                  }),
                attempt: z
                  .int()
                  .min(0)
                  .exactOptional()
                  .openapi({
                    'x-stoplight': { id: 'agtpbrz88affc' },
                    description: 'The attempt number of the job',
                  }),
              })
              .openapi({
                'x-stoplight': { id: '6z7yklx9w0j6j' },
                title: 'Job',
                description: 'A single job returned when listing jobs within a run ID',
                'x-readme-ref-name': 'Job',
                required: [],
              }),
          ),
          metadata: z
            .object({ fetchedAt: z.string(), cachedUntil: z.string().nullable().exactOptional() })
            .openapi({ required: ['fetchedAt'] }),
        })
        .openapi({ required: ['data', 'metadata'] }),
    },
  },
}

const CancellationListResponse = {
  description: 'The response when listing cancellations',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .array(
              z
                .object({
                  id: z.string().openapi({ 'x-stoplight': { id: 'z4c4aul5o74o4' } }),
                  environment_id: z.string().openapi({ 'x-stoplight': { id: 'xwtp04ooqjllt' } }),
                  function_internal_id: z
                    .string()
                    .openapi({ 'x-stoplight': { id: '61id028kd3jl2' } }),
                  function_id: z.string().openapi({ 'x-stoplight': { id: 'bo5lqt3gng88f' } }),
                  started_before: z.iso
                    .datetime({ offset: true })
                    .openapi({ 'x-stoplight': { id: '9299swbsqdk0k' } }),
                  started_after: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ 'x-stoplight': { id: '7faml56thwmiv' } }),
                  if: z
                    .string()
                    .exactOptional()
                    .openapi({ 'x-stoplight': { id: '3gce6zim8zjku' } }),
                })
                .openapi({
                  'x-stoplight': { id: 'cezczq07kjz7l' },
                  title: 'Cancellation',
                  required: [
                    'id',
                    'environment_id',
                    'function_internal_id',
                    'function_id',
                    'started_before',
                  ],
                  'x-readme-ref-name': 'Cancellation',
                }),
            )
            .exactOptional()
            .openapi({ 'x-stoplight': { id: 'bw7tac64zwywf' } }),
        })
        .openapi({ required: [] }),
    },
  },
}

const WebhookResponse = {
  description: 'A webhook endpoint configuration',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the webhook endpoint' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A custom descripter for the webhook endpoint' }),
              url: z.url().exactOptional().openapi({ description: 'Unique URL endpoint' }),
              transform: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JavaScript transform function that accepts the inbound request components and returns an object in the Inngest event payload format.',
                }),
              created_at: z.iso.datetime({ offset: true }).exactOptional(),
              updated_at: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const XInngestEnvParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'x-inngest-env',
      description: 'Branch environment name when using a branch signing key',
      in: 'header',
      required: false,
      schema: { type: 'string' },
    },
  })

const CreateOrUpdateWebhookRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .object({
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'Unique identifier of the webhook endpoint' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A custom descripter for the webhook endpoint' }),
              url: z.url().exactOptional().openapi({ description: 'Unique URL endpoint' }),
              transform: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JavaScript transform function that accepts the inbound request components and returns an object in the Inngest event payload format.',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const YourSigningKeySecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description: 'The signing key from your environment',
}

export const getV1EventsRoute = createRoute({
  method: 'get',
  path: '/v1/events',
  tags: ['Events'],
  summary: 'List events',
  description: 'Fetches recent events from your environment.',
  operationId: 'ListEvents',
  request: {
    query: z.object({
      received_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'received_before',
            description: 'List events received before this RFC3339 timestamp',
            required: false,
          },
        }),
      received_after: z
        .string()
        .default('1H ago, as an RFC3339 timestamp')
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', default: '1H ago, as an RFC3339 timestamp' },
            in: 'query',
            description: 'List events received after this RFC3339 timestamp',
            name: 'received_after',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', minimum: 1, maximum: 100 },
            in: 'query',
            name: 'limit',
            description: 'The number of events to list',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'name',
            description: 'The optional name of the event to filter by',
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'cursor',
            description:
              'The internal event ID used as a cursor to paginate through events within your time range',
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response when listing events.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    internal_id: z
                      .ulid()
                      .openapi({
                        'x-stoplight': { id: '2i8hq1l4nvnm6' },
                        description:
                          'Unique identifier used to represent this event internally and to the API.',
                      }),
                    accountID: z
                      .uuid()
                      .openapi({
                        'x-stoplight': { id: 'kmv8wmjzp3qnu' },
                        description: 'Your account ID',
                      }),
                    environmentID: z
                      .uuid()
                      .openapi({
                        'x-stoplight': { id: 'at7qf8hg81gbg' },
                        description: 'Your environment ID',
                      }),
                    source: z
                      .string()
                      .openapi({
                        'x-stoplight': { id: 'ztu0nmbuwdqjs' },
                        description: 'The origin of the event, eg. "key" for an event key.',
                      }),
                    sourceID: z
                      .uuid()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'irkn3jg7l9dht' },
                        description: 'The ID of the key used to deliver the event',
                      }),
                    receivedAt: z.iso
                      .datetime({ offset: true })
                      .openapi({
                        description: 'When the event was received by Inngest',
                        'x-stoplight': { id: 'nma118yk3yw4c' },
                      }),
                    id: z
                      .string()
                      .openapi({
                        description: 'The `id` field specified in the event',
                        'x-stoplight': { id: 'eaoe2lo1jf39w' },
                      }),
                    name: z
                      .string()
                      .openapi({
                        'x-stoplight': { id: 'rlfpg5wrr3dd7' },
                        description: 'The `name` field specified in the event',
                      }),
                    data: z
                      .looseObject({})
                      .openapi({
                        'x-stoplight': { id: '5iwuppsvfvn24' },
                        description: 'The `data` field specified in the event',
                      }),
                    user: z
                      .looseObject({})
                      .nullable()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: '1rb5xbqsgrnb9' },
                        description: 'The `user` field specified in the event',
                      }),
                    ts: z
                      .int()
                      .openapi({
                        'x-stoplight': { id: 'fjnmbkpf82akl' },
                        description: 'The `ts` field specified in the event',
                      }),
                    v: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'pxxjlbk2u5dd2' },
                        description: 'The `v` field specified in the event',
                      }),
                  })
                  .openapi({
                    'x-stoplight': { id: 'na2zfnjuumzvu' },
                    title: 'Event',
                    description:
                      'An event and metadata attached to the event returned from an API response',
                    required: [
                      'internal_id',
                      'accountID',
                      'environmentID',
                      'source',
                      'receivedAt',
                      'id',
                      'name',
                      'data',
                      'ts',
                    ],
                    'x-readme-ref-name': 'Event',
                  }),
              ),
              metadata: z
                .object({
                  fetchedAt: z.string(),
                  cachedUntil: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['fetchedAt'] }),
            })
            .openapi({ required: ['data', 'metadata'] }),
        },
      },
    },
    401: {
      description: 'An error from the API',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              data: z
                .union([z.looseObject({}), z.string()])
                .nullable()
                .exactOptional(),
              status: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
                  data: null,
                  status: 500,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getV1EventsInternalIDRoute = createRoute({
  method: 'get',
  path: '/v1/events/{internalID}',
  tags: ['Events'],
  summary: 'Get an event',
  description: 'Retrieve a single event within your environment, given its internal ID',
  operationId: 'GetEvent',
  request: {
    params: z.object({
      internalID: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'internalID', in: 'path', required: true },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: {} },
  },
  responses: {
    200: {
      description: 'The response when fetching an event',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  internal_id: z
                    .ulid()
                    .openapi({
                      'x-stoplight': { id: '2i8hq1l4nvnm6' },
                      description:
                        'Unique identifier used to represent this event internally and to the API.',
                    }),
                  accountID: z
                    .uuid()
                    .openapi({
                      'x-stoplight': { id: 'kmv8wmjzp3qnu' },
                      description: 'Your account ID',
                    }),
                  environmentID: z
                    .uuid()
                    .openapi({
                      'x-stoplight': { id: 'at7qf8hg81gbg' },
                      description: 'Your environment ID',
                    }),
                  source: z
                    .string()
                    .openapi({
                      'x-stoplight': { id: 'ztu0nmbuwdqjs' },
                      description: 'The origin of the event, eg. "key" for an event key.',
                    }),
                  sourceID: z
                    .uuid()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: 'irkn3jg7l9dht' },
                      description: 'The ID of the key used to deliver the event',
                    }),
                  receivedAt: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description: 'When the event was received by Inngest',
                      'x-stoplight': { id: 'nma118yk3yw4c' },
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The `id` field specified in the event',
                      'x-stoplight': { id: 'eaoe2lo1jf39w' },
                    }),
                  name: z
                    .string()
                    .openapi({
                      'x-stoplight': { id: 'rlfpg5wrr3dd7' },
                      description: 'The `name` field specified in the event',
                    }),
                  data: z
                    .looseObject({})
                    .openapi({
                      'x-stoplight': { id: '5iwuppsvfvn24' },
                      description: 'The `data` field specified in the event',
                    }),
                  user: z
                    .looseObject({})
                    .nullable()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: '1rb5xbqsgrnb9' },
                      description: 'The `user` field specified in the event',
                    }),
                  ts: z
                    .int()
                    .openapi({
                      'x-stoplight': { id: 'fjnmbkpf82akl' },
                      description: 'The `ts` field specified in the event',
                    }),
                  v: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: 'pxxjlbk2u5dd2' },
                      description: 'The `v` field specified in the event',
                    }),
                })
                .openapi({
                  title: 'Event',
                  'x-stoplight': { id: 'vv6knflmo5s46' },
                  description:
                    'An event and metadata attached to the event returned from an API response',
                  required: [
                    'internal_id',
                    'accountID',
                    'environmentID',
                    'source',
                    'receivedAt',
                    'id',
                    'name',
                    'data',
                    'ts',
                  ],
                  'x-readme-ref-name': 'Event',
                }),
              metadata: z
                .object({
                  fetchedAt: z.string(),
                  cachedUntil: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['fetchedAt'] }),
            })
            .openapi({ required: ['data', 'metadata'] }),
        },
      },
    },
    404: {
      description: 'An error from the API',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              data: z
                .union([z.looseObject({}), z.string()])
                .nullable()
                .exactOptional(),
              status: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
                  data: null,
                  status: 500,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getV1EventsInternalIDRunsRoute = createRoute({
  method: 'get',
  path: '/v1/events/{internalID}/runs',
  tags: ['Events'],
  summary: 'List event function runs',
  description: 'Returns function runs initialized by the given event',
  operationId: 'ListEventRuns',
  request: {
    params: z.object({
      internalID: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'internalID', in: 'path', required: true },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: {} },
  },
  responses: {
    200: {
      description: 'The response when fetching function runs',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    run_id: z.string().openapi({ description: 'The ID of the function run' }),
                    run_started_at: z.iso
                      .datetime({ offset: true })
                      .openapi({ description: 'When the function run was scheduled' }),
                    ended_at: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'If the function has ended, the end time.  A function has ended if the status is not Running.',
                      }),
                    status: z
                      .enum(['Running', 'Completed', 'Failed', 'Cancelled'])
                      .openapi({ readOnly: true }),
                    output: z
                      .union([
                        z.looseObject({}),
                        z.array(z.any()),
                        z.number(),
                        z.string(),
                        z.boolean(),
                      ])
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Data returned from the function handler. The data structure returned will match what the function returns.',
                      }),
                    function_id: z.string(),
                    function_version: z.int(),
                    environment_id: z.string().openapi({ 'x-stoplight': { id: 'tehuc95fjew5q' } }),
                    event_id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The internal ID of the triggering event, if the function was initialized via an event',
                      }),
                    batch_id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'u5c5r2msk8gcy' },
                        description:
                          'The ID of the batch, if this function was initialized via a batch of events',
                      }),
                    original_run_id: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: '6en4jeah54ed6' },
                        description: 'The run ID of the original run, if this is a replay',
                      }),
                    cron: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'myxg3892c1xef' },
                        description:
                          'The cron used to initialize this scheduled function, if the function was initialized via a cron',
                      }),
                  })
                  .openapi({
                    'x-stoplight': { id: 'sjhjyf006ycq3' },
                    required: [
                      'run_id',
                      'run_started_at',
                      'status',
                      'function_id',
                      'function_version',
                      'environment_id',
                    ],
                    'x-readme-ref-name': 'Function-run',
                  }),
              ),
              metadata: z
                .object({
                  fetchedAt: z.string(),
                  cachedUntil: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['fetchedAt'] }),
            })
            .openapi({ required: ['data', 'metadata'] }),
        },
      },
    },
    404: {
      description: 'An error from the API',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              data: z
                .union([z.looseObject({}), z.string()])
                .nullable()
                .exactOptional(),
              status: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
                  data: null,
                  status: 500,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getV1RunsRunIDRoute = createRoute({
  method: 'get',
  path: '/v1/runs/{runID}',
  tags: ['Function runs'],
  summary: 'Get a function run',
  description: 'Returns a single function run by its run ID',
  operationId: 'GetRun',
  request: {
    params: z.object({
      runID: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'runID', in: 'path', required: true },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response when fetching a function run',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  run_id: z.string().openapi({ description: 'The ID of the function run' }),
                  run_started_at: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'When the function run was scheduled' }),
                  ended_at: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'If the function has ended, the end time.  A function has ended if the status is not Running.',
                    }),
                  status: z
                    .enum(['Running', 'Completed', 'Failed', 'Cancelled'])
                    .openapi({ readOnly: true }),
                  output: z
                    .union([
                      z.looseObject({}),
                      z.array(z.any()),
                      z.number(),
                      z.string(),
                      z.boolean(),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Data returned from the function handler. The data structure returned will match what the function returns.',
                    }),
                  function_id: z.string(),
                  function_version: z.int(),
                  environment_id: z.string().openapi({ 'x-stoplight': { id: 'tehuc95fjew5q' } }),
                  event_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The internal ID of the triggering event, if the function was initialized via an event',
                    }),
                  batch_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: 'u5c5r2msk8gcy' },
                      description:
                        'The ID of the batch, if this function was initialized via a batch of events',
                    }),
                  original_run_id: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: '6en4jeah54ed6' },
                      description: 'The run ID of the original run, if this is a replay',
                    }),
                  cron: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      'x-stoplight': { id: 'myxg3892c1xef' },
                      description:
                        'The cron used to initialize this scheduled function, if the function was initialized via a cron',
                    }),
                })
                .openapi({
                  'x-stoplight': { id: '3h9yjyub9g8qd' },
                  required: [
                    'run_id',
                    'run_started_at',
                    'status',
                    'function_id',
                    'function_version',
                    'environment_id',
                  ],
                  'x-readme-ref-name': 'Function-run',
                }),
              metadata: z
                .object({
                  fetchedAt: z.string(),
                  cachedUntil: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['fetchedAt'] }),
            })
            .openapi({ required: ['data', 'metadata'] }),
        },
      },
    },
    404: {
      description: 'An error from the API',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              data: z
                .union([z.looseObject({}), z.string()])
                .nullable()
                .exactOptional(),
              status: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
                  data: null,
                  status: 500,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const deleteV1RunsRunIDRoute = createRoute({
  method: 'delete',
  path: '/v1/runs/{runID}',
  tags: ['Function runs'],
  summary: 'Cancel a function run',
  description:
    'Cancels a running function immediately.  No new steps will run after a function is cancelled.',
  operationId: 'CancelRun',
  request: {
    params: z.object({
      runID: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'runID', in: 'path', required: true },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 204: { description: 'No Content' } },
})

export const getV1RunsRunIDJobsRoute = createRoute({
  method: 'get',
  path: '/v1/runs/{runID}/jobs',
  tags: ['Function runs'],
  summary: 'Fetch function run jobs',
  description:
    "An endpoint to fetch a subset of the function run's jobs within the function_id queue, in order of earliest to latest. This primarily allows you to see the order of the run's jobs within the function queue.\n\nA single function enqueues all function run jobs wihtin the same queue.  This endpoint fetches a subset of jobs for a given function run.\n\nThis endpoint is rate limited and cached for 5 seconds.",
  operationId: 'GetRunJobs',
  request: {
    params: z.object({
      runID: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'runID', in: 'path', required: true },
        }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response when fetching function runs',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(
                z
                  .object({
                    at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'fh5ysw28856me' },
                        description: 'The time the job is scheduled to run',
                      }),
                    position: z
                      .int()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: '872cgqill4kjv' },
                        description: 'The position of the job within the function queue',
                      }),
                    attempt: z
                      .int()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        'x-stoplight': { id: 'agtpbrz88affc' },
                        description: 'The attempt number of the job',
                      }),
                  })
                  .openapi({
                    'x-stoplight': { id: '6z7yklx9w0j6j' },
                    title: 'Job',
                    description: 'A single job returned when listing jobs within a run ID',
                    'x-readme-ref-name': 'Job',
                    required: [],
                  }),
              ),
              metadata: z
                .object({
                  fetchedAt: z.string(),
                  cachedUntil: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['fetchedAt'] }),
            })
            .openapi({ required: ['data', 'metadata'] }),
        },
      },
    },
  },
})

export const postV1SignalsRoute = createRoute({
  method: 'post',
  path: '/v1/signals',
  tags: ['Signals'],
  summary: 'Resume signal',
  description: 'Sends data to resume a given signal',
  operationId: 'ResumeSignal',
  request: {
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Resume a function which is awaiting a signal via the `WaitForSignal` step.  The function run will resume with the given data and signal.',
      content: {
        'application/json': {
          schema: z
            .object({
              signal: z
                .string()
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'rwhwsgponyuso' },
                  description:
                    'The signal to resume.  This is a unique string, and represents a single run waiting for the signal via `step.waitForSignal`.',
                }),
              data: z
                .union([
                  z.looseObject({}),
                  z.array(z.any()),
                  z.int(),
                  z.number(),
                  z.string(),
                  z.boolean(),
                ])
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'vrxi3ez5xv0kh' },
                  description: 'The data to be sent to the waiting function run.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The run ID of the run resumed.',
      content: {
        'application/json': {
          schema: z
            .object({
              run_id: z
                .string()
                .exactOptional()
                .openapi({ 'x-stoplight': { id: 'cm1htmo8psht0' } }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'An error from the API',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              data: z
                .union([z.looseObject({}), z.string()])
                .nullable()
                .exactOptional(),
              status: z.int().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  error: 'Unable to load function run: 01HE8AM9DPK9N37V1RKY1DNQF5',
                  data: null,
                  status: 500,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  security: [{ 'your-signing-key': [] }],
})

export const getV1CancellationsRoute = createRoute({
  method: 'get',
  path: '/v1/cancellations',
  tags: ['Cancellations'],
  summary: 'List cancellations',
  description: 'Returns all cancellations in your environment',
  operationId: 'ListCancellations',
  request: {
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The response when listing cancellations',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      id: z.string().openapi({ 'x-stoplight': { id: 'z4c4aul5o74o4' } }),
                      environment_id: z
                        .string()
                        .openapi({ 'x-stoplight': { id: 'xwtp04ooqjllt' } }),
                      function_internal_id: z
                        .string()
                        .openapi({ 'x-stoplight': { id: '61id028kd3jl2' } }),
                      function_id: z.string().openapi({ 'x-stoplight': { id: 'bo5lqt3gng88f' } }),
                      started_before: z.iso
                        .datetime({ offset: true })
                        .openapi({ 'x-stoplight': { id: '9299swbsqdk0k' } }),
                      started_after: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ 'x-stoplight': { id: '7faml56thwmiv' } }),
                      if: z
                        .string()
                        .exactOptional()
                        .openapi({ 'x-stoplight': { id: '3gce6zim8zjku' } }),
                    })
                    .openapi({
                      'x-stoplight': { id: 'cezczq07kjz7l' },
                      title: 'Cancellation',
                      required: [
                        'id',
                        'environment_id',
                        'function_internal_id',
                        'function_id',
                        'started_before',
                      ],
                      'x-readme-ref-name': 'Cancellation',
                    }),
                )
                .exactOptional()
                .openapi({ 'x-stoplight': { id: 'bw7tac64zwywf' } }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postV1CancellationsRoute = createRoute({
  method: 'post',
  path: '/v1/cancellations',
  tags: ['Cancellations'],
  summary: 'Create a cancellation',
  description:
    'Creates a bulk cancellation, cancelling all functions in the given time range matching an optional expression',
  operationId: 'CreateCancellation',
  request: {
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
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
              app_id: z
                .string()
                .openapi({
                  'x-stoplight': { id: '61tkp2slirya1' },
                  description:
                    'The client ID specified via the SDK for the app, eg: `new Inngest({ id: "this-id" })`',
                }),
              function_id: z
                .string()
                .openapi({
                  'x-stoplight': { id: 'xazxs7v4fkflm' },
                  description: 'The function ID specified in the SDK',
                }),
              started_before: z.iso
                .datetime({ offset: true })
                .openapi({ 'x-stoplight': { id: 'vhbje6lq73a2x' } }),
              started_after: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ 'x-stoplight': { id: 'qzhioduxs1ezz' } }),
              if: z
                .string()
                .exactOptional()
                .openapi({ 'x-stoplight': { id: 'q0oiijdltd3sy' } }),
            })
            .openapi({ required: ['app_id', 'function_id', 'started_before'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  id: z.string().openapi({ 'x-stoplight': { id: 'z4c4aul5o74o4' } }),
                  environment_id: z.string().openapi({ 'x-stoplight': { id: 'xwtp04ooqjllt' } }),
                  function_internal_id: z
                    .string()
                    .openapi({ 'x-stoplight': { id: '61id028kd3jl2' } }),
                  function_id: z.string().openapi({ 'x-stoplight': { id: 'bo5lqt3gng88f' } }),
                  started_before: z.iso
                    .datetime({ offset: true })
                    .openapi({ 'x-stoplight': { id: '9299swbsqdk0k' } }),
                  started_after: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ 'x-stoplight': { id: '7faml56thwmiv' } }),
                  if: z
                    .string()
                    .exactOptional()
                    .openapi({ 'x-stoplight': { id: '3gce6zim8zjku' } }),
                })
                .exactOptional()
                .openapi({
                  'x-stoplight': { id: 'c894ng49cq5zt' },
                  title: 'Cancellation',
                  required: [
                    'id',
                    'environment_id',
                    'function_internal_id',
                    'function_id',
                    'started_before',
                  ],
                  'x-readme-ref-name': 'Cancellation',
                }),
              error: z
                .string()
                .exactOptional()
                .openapi({ 'x-stoplight': { id: '2iqq8aku7ia39' } }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteV1CancellationsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/cancellations/{id}',
  tags: ['Cancellations'],
  summary: 'Delete a cancellation',
  description:
    'Delete a cancellation, preventing the cancellation from stopping function runs between the given dates with a given expression.',
  operationId: 'DeleteCancellation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { schema: { type: 'string' }, name: 'id', in: 'path', required: true } }),
    }),
    headers: z.object({
      'x-inngest-env': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-inngest-env',
            description: 'Branch environment name when using a branch signing key',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Cancellation deleted' } },
})

export const getV1WebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks',
  tags: ['Webhooks'],
  summary: 'Get webhooks',
  description: 'Get all webhook endpoints in the given environment.',
  operationId: 'ListWebhooks',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookResponse,
          examples: {
            clerk: {
              value: {
                data: [
                  {
                    id: '5e627760-ce58-4068-861e-bcfe5161382e',
                    name: 'Clerk',
                    transform:
                      'function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }',
                    url: 'https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postV1WebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/webhooks',
  tags: ['Webhooks'],
  summary: 'Create webhook',
  description: 'Create a new webhook endpoint with the given configuration.',
  operationId: 'CreateWebhook',
  request: {
    body: { content: { 'application/json': { schema: CreateOrUpdateWebhookRequestBody } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookResponse,
          examples: {
            clerk: {
              value: {
                data: {
                  id: '5e627760-ce58-4068-861e-bcfe5161382e',
                  name: 'Clerk',
                  transform:
                    'function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }',
                  url: 'https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getV1WebhooksIdRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Get webhook',
  description: "Get a webhook endpoint's configuration",
  operationId: 'GetWebhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            description: 'uuid',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookResponse,
          examples: {
            clerk: {
              value: {
                data: {
                  id: '5e627760-ce58-4068-861e-bcfe5161382e',
                  name: 'Clerk',
                  transform:
                    'function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }',
                  url: 'https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putV1WebhooksIdRoute = createRoute({
  method: 'put',
  path: '/v1/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Update webhook',
  description: "Update a webhook endpoint's configuration",
  operationId: 'UpdateWebhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            description: 'uuid',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookResponse,
          examples: {
            clerk: {
              value: {
                data: {
                  id: '5e627760-ce58-4068-861e-bcfe5161382e',
                  name: 'Clerk',
                  transform:
                    'function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }',
                  url: 'https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteV1WebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/v1/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete webhook',
  description: 'Delete a webhook endpoint',
  operationId: 'DeleteWebhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            description: 'uuid',
            required: true,
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
              data: z
                .object({
                  id: z
                    .uuid()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier of the webhook endpoint' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { data: { id: '5e627760-ce58-4068-861e-bcfe5161382e' } },
        },
      },
    },
  },
})
