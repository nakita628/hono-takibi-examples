import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ code: z.int32(), message: z.string() })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const PetSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string(),
    tag: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Pet')

const PetsSchema = z.array(PetSchema).openapi('Pets')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getPetsRoute = createRoute({
  method: 'get',
  path: '/pets',
  tags: ['pets'],
  summary: 'List all pets',
  operationId: 'listPets',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'How many items to return at one time (max 100)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An paged array of pets',
      content: { 'application/json': { schema: PetsSchema } },
      headers: z.object({
        'x-next': {
          description: 'A link to the next page of responses',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A link to the next page of responses',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPetsRoute = createRoute({
  method: 'post',
  path: '/pets',
  tags: ['pets'],
  summary: 'Create a pet',
  operationId: 'createPets',
  responses: {
    201: { description: 'Null response' },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPetsPetIdRoute = createRoute({
  method: 'get',
  path: '/pets/{petId}',
  tags: ['pets'],
  summary: 'Info for a specific pet',
  operationId: 'showPetById',
  request: {
    params: z.object({
      petId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the pet to retrieve',
            in: 'path',
            name: 'petId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Expected response to a valid request',
      content: { 'application/json': { schema: PetsSchema } },
    },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
