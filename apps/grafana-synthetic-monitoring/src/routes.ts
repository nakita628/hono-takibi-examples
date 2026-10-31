import { createRoute, z } from '@hono/zod-openapi'

const LabelSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the label.', example: 'team' }),
    value: z.string().openapi({ description: 'The value of the label.', example: 'development' }),
  })
  .openapi({ required: ['name', 'value'] })
  .openapi('Label')

const CommonSecretPropertiesSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The name of the secret. Immutable after creation.',
        example: 'my_secret',
        'x-go-type-skip-optional-pointer': true,
      }),
    description: z
      .string()
      .openapi({
        example: 'My secret',
        description: 'The human readable description of the secret.',
        'x-go-type-skip-optional-pointer': true,
      }),
    labels: z
      .array(LabelSchema)
      .min(0)
      .max(10)
      .openapi({
        description: 'Key-value pairs associated with the secret.',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({ required: ['name', 'description', 'labels'] })
  .openapi('CommonSecretProperties')

const SecretMetadataSchema = z
  .object({
    uuid: z
      .uuid()
      .openapi({
        readOnly: true,
        description: 'The unique ID of the secret.',
        example: '01543325-00b3-4f69-b124-51f54835a245',
        'x-go-type-skip-optional-pointer': true,
      }),
    org_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        readOnly: true,
        description: 'The ID of the organization the secret belongs to.',
        'x-go-type-skip-optional-pointer': true,
      }),
    stack_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        readOnly: true,
        description: 'The ID of the stack the secret belongs to.',
        'x-go-type-skip-optional-pointer': true,
      }),
    created_by: z
      .string()
      .openapi({
        readOnly: true,
        description: 'The ID of the user who created the secret.',
        'x-go-type-skip-optional-pointer': true,
      }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 9223372036854776000,
        readOnly: true,
        description: 'The timestamp of secret creation.',
        'x-go-type-skip-optional-pointer': true,
      }),
    modified_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 9223372036854776000,
        readOnly: true,
        description: 'The timestamp of the last secret modification.',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({ required: ['uuid', 'org_id', 'stack_id', 'created_by', 'created_at', 'modified_at'] })
  .openapi('SecretMetadata')

const SecretSchema = CommonSecretPropertiesSchema.and(
  z
    .object({
      plaintext: z
        .string()
        .exactOptional()
        .openapi({
          example: 'my secret value',
          description: 'The secret value. Only used for creation and update, never returned.',
          writeOnly: true,
          'x-go-type-skip-optional-pointer': false,
        }),
    })
    .openapi({ required: [] }),
).openapi('Secret')

const SecretWithMetadataSchema =
  CommonSecretPropertiesSchema.and(SecretMetadataSchema).openapi('SecretWithMetadata')

const DecryptedSecretSchema = SecretWithMetadataSchema.and(
  z
    .object({
      plaintext: z
        .string()
        .exactOptional()
        .openapi({
          example: 'my secret value',
          description: 'The secret value.',
          readOnly: true,
          'x-go-type-skip-optional-pointer': true,
        }),
    })
    .openapi({ required: [] }),
).openapi('DecryptedSecret')

const ApiResponseSchema = z
  .object({
    message: z.string().openapi({ example: 'Operation succeeded' }),
    code: z.enum(['ok', 'invalid_name', 'invalid_label_name', 'invalid_label_value']),
  })
  .openapi({ required: ['message', 'code'] })
  .openapi('ApiResponse')

const SucessfulOperationResponse = {
  description: 'A successful operation',
  content: { 'application/json': { schema: ApiResponseSchema } },
}

const SecretWithMetadataResponse = {
  description: 'A single secret with metadata',
  content: { 'application/json': { schema: SecretWithMetadataSchema } },
}

const SecretsWithMetadataResponse = {
  description: 'A list of secrets with metadata',
  content: {
    'application/json': {
      schema: z
        .object({ secrets: z.array(SecretWithMetadataSchema) })
        .openapi({ required: ['secrets'] }),
    },
  },
}

const DecryptedSecretResponse = {
  description: 'A single secret with metadata and the secret value as plaintext.',
  content: { 'application/json': { schema: DecryptedSecretSchema } },
}

const UnauthorizedErrorResponse = { description: 'Unauthorized' }

const SecretRequestBody = {
  description: 'An object containing the secret to be added or updated.',
  content: { 'application/json': { schema: SecretSchema } },
  required: true,
}

const SecretAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'Grafana Cloud' }

export const getSecretsRoute = createRoute({
  method: 'get',
  path: '/secrets',
  tags: ['secrets'],
  summary: 'Retrieve all secrets',
  description: 'Returns a list of secrets',
  operationId: 'listSecrets',
  responses: {
    200: SecretsWithMetadataResponse,
    401: UnauthorizedErrorResponse,
    403: { description: 'Not allowed' },
  },
  security: [{ secret_auth: [] }],
})

export const postSecretsRoute = createRoute({
  method: 'post',
  path: '/secrets',
  tags: ['secrets'],
  summary: 'Add a new secret',
  description: 'Add a new secret',
  operationId: 'addSecret',
  request: { body: SecretRequestBody },
  responses: {
    201: SecretWithMetadataResponse,
    400: { description: 'Invalid input' },
    401: UnauthorizedErrorResponse,
    403: { description: 'Not allowed' },
    422: { description: 'Validation exception' },
  },
  security: [{ secret_auth: [] }],
})

export const getSecretsFindByLabelsRoute = createRoute({
  method: 'get',
  path: '/secrets/find_by_labels',
  tags: ['secrets'],
  summary: 'Finds secrets by labels',
  description: 'Multiple labels can be provided with comma separated strings.',
  operationId: 'findSecretsByLabels',
  responses: {
    200: SecretsWithMetadataResponse,
    400: { description: 'Invalid tag value' },
    401: UnauthorizedErrorResponse,
    403: { description: 'Not allowed' },
  },
  security: [{ secret_auth: [] }],
})

export const getSecretsIdRoute = createRoute({
  method: 'get',
  path: '/secrets/{id}',
  tags: ['secrets'],
  summary: 'Find secret by ID',
  description: 'Returns a single secret',
  operationId: 'getSecretById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of secret to return',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SecretWithMetadataResponse,
    400: { description: 'Invalid ID supplied' },
    401: UnauthorizedErrorResponse,
    403: { description: 'Not allowed' },
    404: { description: 'Secret not found' },
  },
  security: [{ secret_auth: [] }],
})

export const putSecretsIdRoute = createRoute({
  method: 'put',
  path: '/secrets/{id}',
  tags: ['secrets'],
  summary: 'Update an existing secret',
  description: 'Update an existing secret by Id',
  operationId: 'updateSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of secret to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: SecretRequestBody,
  },
  responses: {
    202: SecretWithMetadataResponse,
    400: { description: 'Invalid ID supplied' },
    401: UnauthorizedErrorResponse,
    403: { description: 'Not allowed' },
    404: { description: 'Secret not found' },
    422: { description: 'Validation exception' },
  },
  security: [{ secret_auth: [] }],
})

export const deleteSecretsIdRoute = createRoute({
  method: 'delete',
  path: '/secrets/{id}',
  tags: ['secrets'],
  summary: 'Deletes a secret',
  description: 'delete a secret',
  operationId: 'deleteSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Secret id to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SucessfulOperationResponse,
    400: { description: 'Invalid secret value' },
    401: { description: 'Unauthorized' },
    403: { description: 'Not allowed' },
  },
  security: [{ secret_auth: [] }],
})

export const getSecretsIdDecryptRoute = createRoute({
  method: 'get',
  path: '/secrets/{id}/decrypt',
  tags: ['secrets'],
  summary: 'Decrypt the specified secret',
  description: 'Returns the secret with the plaintext value set',
  operationId: 'decryptSecretById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of secret to decrypt',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: DecryptedSecretResponse,
    400: { description: 'Invalid ID supplied' },
    401: { description: 'Unauthorized' },
    403: { description: 'Not allowed' },
    404: { description: 'Secret not found' },
  },
  security: [{ secret_auth: [] }],
})
