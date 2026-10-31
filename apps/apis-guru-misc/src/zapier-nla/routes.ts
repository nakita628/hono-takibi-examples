import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponseSchema = z
  .object({ error: z.string().openapi({ description: 'Error message.', title: 'Error' }) })
  .openapi({ required: ['error'], title: 'ErrorResponse' })
  .openapi('ErrorResponse')

const ExecuteRequestSchema = z
  .object({
    instructions: z
      .string()
      .openapi({
        description: 'Plain english instructions. Provide as much detail as possible.',
        title: 'Instructions',
      }),
    preview_only: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, we will not execute the action, but will return the params of the preview.',
        title: 'Preview Only',
      }),
  })
  .openapi({
    description:
      'This extends from ExecuteRequestBase to add the preview_only option.\n\n(1) Providers who allow side effects or (2) actions that do not have a side effect should use this class.',
    required: ['instructions'],
    title: 'ExecuteRequest',
  })
  .openapi('ExecuteRequest')

const ExecuteResponseSchema = z
  .object({
    action_used: z
      .string()
      .openapi({ description: 'The name of the action that was executed.', title: 'Action Used' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message if the execution failed.', title: 'Error' }),
    id: z.string().openapi({ description: 'The id of the execution log.', title: 'Id' }),
    input_params: z
      .object({})
      .openapi({
        description: 'The params we used / will use to execute the action.',
        title: 'Input Params',
      }),
    result: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A trimmed down result of the first item of the full results. Ideal for humans and language models!',
        title: 'Result',
      }),
    review_url: z
      .string()
      .openapi({
        description:
          'The URL to run the action or review the AI choices the AI made for input_params given instructions.',
        title: 'Review Url',
      }),
    status: z
      .enum(['success', 'error', 'empty', 'preview'])
      .default('success')
      .exactOptional()
      .openapi({ description: 'The status of the execution.', title: 'Status' }),
  })
  .openapi({
    description: 'This is a summary of the results given the action that was executed.',
    required: ['id', 'action_used', 'input_params', 'review_url'],
    title: 'ExecuteResponse',
  })
  .openapi('ExecuteResponse')

const ExposedActionSchemaSchema = z
  .object({
    description: z
      .string()
      .openapi({ description: 'Description of the action.', title: 'Description' }),
    id: z.string().openapi({ description: 'The unique ID of the exposed action.', title: 'Id' }),
    operation_id: z
      .string()
      .openapi({ description: 'The operation ID of the exposed action.', title: 'Operation Id' }),
    params: z
      .object({})
      .openapi({ description: 'Available hint fields for the action.', title: 'Params' }),
  })
  .openapi({
    required: ['id', 'operation_id', 'description', 'params'],
    title: 'ExposedActionSchema',
  })
  .openapi('ExposedActionSchema')

const ExposedActionResponseSchemaSchema = z
  .object({
    configuration_link: z
      .string()
      .openapi({
        description: 'URL to configure and expose more actions.',
        title: 'Configuration Link',
      }),
    results: z.array(ExposedActionSchemaSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results', 'configuration_link'], title: 'ExposedActionResponseSchema' })
  .openapi('ExposedActionResponseSchema')

const AccessPointApiKeyHeaderSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const AccessPointApiKeyQuerySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

const AccessPointOAuthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: '/oauth/authorize/',
      scopes: { 'nla:exposed_actions:execute': 'Execute exposed actions' },
      tokenUrl: '/oauth/token/',
    },
  },
  type: 'oauth2',
}

const SessionAuthSecurityScheme = { in: 'cookie', name: 'sessionid', type: 'apiKey' }

export const getApiV1CheckIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/check/',
  summary: 'Check',
  description: 'Test that the API and auth are working.',
  operationId: 'check',
  responses: { 200: { description: 'OK' } },
  security: [
    { SessionAuth: [] },
    { AccessPointApiKeyHeader: [] },
    { AccessPointApiKeyQuery: [] },
    { AccessPointOAuth: [] },
  ],
})

export const getApiV1ConfigurationLinkIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/configuration-link/',
  summary: 'Get Configuration Link',
  description:
    'If the user wants to execute actions that are not exposed, they can\ngo here to configure and expose more.',
  operationId: 'get_configuration_link',
  responses: { 200: { description: 'OK' } },
  security: [
    { SessionAuth: [] },
    { AccessPointApiKeyHeader: [] },
    { AccessPointApiKeyQuery: [] },
    { AccessPointOAuth: [] },
  ],
})

export const getApiV1ExposedIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/exposed/',
  summary: 'List Exposed Actions',
  description: 'List all the currently exposed actions for the given account.',
  operationId: 'list_exposed_actions',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ExposedActionResponseSchemaSchema } },
    },
  },
  security: [
    { SessionAuth: [] },
    { AccessPointApiKeyHeader: [] },
    { AccessPointApiKeyQuery: [] },
    { AccessPointOAuth: [] },
  ],
})

export const postApiV1ExposedExposedAppActionIdExecuteIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/exposed/{exposed_app_action_id}/execute/',
  summary: 'Execute App Action Endpoint',
  description:
    'Give us a plain english description of exact action you want to do.\nThere should be dynamically generated documentation for this endpoint\nfor each action that is exposed.',
  operationId: 'execute_app_action_endpoint',
  request: {
    params: z.object({
      exposed_app_action_id: z
        .string()
        .regex(/^[A-Z0-9]{26}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'exposed_app_action_id',
            required: true,
            schema: {
              pattern: '^[A-Z0-9]{26}$',
              title: 'Exposed App Action Id',
              type: 'string',
              'x-examples': ['01ARZ3NDEKTSV4RRFFQ69G5FAV'],
            },
          },
          title: 'Exposed App Action Id',
          'x-examples': ['01ARZ3NDEKTSV4RRFFQ69G5FAV'],
        }),
    }),
    body: { content: { 'application/json': { schema: ExecuteRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ExecuteResponseSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [
    { SessionAuth: [] },
    { AccessPointApiKeyHeader: [] },
    { AccessPointApiKeyQuery: [] },
    { AccessPointOAuth: [] },
  ],
})
