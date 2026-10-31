import { createRoute, z } from '@hono/zod-openapi'

const NewPetSchema = z
  .object({ name: z.string(), tag: z.string().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('NewPet')

type PetType = z.infer<typeof NewPetSchema> & { id: bigint }

const PetSchema: z.ZodType<PetType> = z
  .lazy(() =>
    NewPetSchema.and(
      z
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
        })
        .openapi({ required: ['id'] }),
    ),
  )
  .openapi('Pet')

const ErrorSchema = z
  .object({ code: z.int32(), message: z.string() })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

export const getPetsRoute = createRoute({
  method: 'get',
  path: '/pets',
  description:
    'Returns all pets from the system that the user has access to\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\n\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\n',
  operationId: 'findPets',
  request: {
    query: z.object({
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            description: 'tags to filter by',
            required: false,
            style: 'form',
            schema: { type: 'array', items: { type: 'string' } },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'maximum number of results to return',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'pet response',
      content: { 'application/json': { schema: z.array(PetSchema) } },
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
  description: 'Creates a new pet in the store. Duplicates are allowed',
  operationId: 'addPet',
  request: {
    body: {
      description: 'Pet to add to the store',
      content: { 'application/json': { schema: NewPetSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'pet response', content: { 'application/json': { schema: PetSchema } } },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPetsIdRoute = createRoute({
  method: 'get',
  path: '/pets/{id}',
  description: 'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'find pet by id',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of pet to fetch',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'pet response', content: { 'application/json': { schema: PetSchema } } },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deletePetsIdRoute = createRoute({
  method: 'delete',
  path: '/pets/{id}',
  description: 'deletes a single pet based on the ID supplied',
  operationId: 'deletePet',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of pet to delete',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'pet deleted' },
    default: {
      description: 'unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
