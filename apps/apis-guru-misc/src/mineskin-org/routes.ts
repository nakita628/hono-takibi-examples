import { createRoute, z } from '@hono/zod-openapi'

const GenerateOptionsSchema = z
  .object({
    model: z.enum(['steve', 'slim']).default('steve').exactOptional().openapi({ deprecated: true }),
    name: z.string().max(20).exactOptional(),
    variant: z
      .enum(['classic', 'slim'])
      .exactOptional()
      .openapi({
        description: 'Skin variant - automatically determined based on the image if not specified',
      }),
    visibility: z
      .union([z.literal(0), z.literal(1)])
      .default(0)
      .exactOptional()
      .openapi({ description: 'Visibility of the generated skin. 0 for public, 1 for private' }),
  })
  .openapi({ required: [] })
  .openapi('GenerateOptions')

const PartialSkinInfoSchema = z
  .object({ id: z.int(), name: z.string(), time: z.int(), url: z.string() })
  .openapi({ required: ['id', 'name', 'url', 'time'] })
  .openapi('PartialSkinInfo')

const TextureInfoSchema = z
  .object({
    signature: z.string().exactOptional(),
    url: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TextureInfo')

const SkinDataSchema = z
  .object({ texture: TextureInfoSchema.exactOptional(), uuid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SkinData')

const SkinInfoSchema = z
  .object({
    account: z.int().exactOptional(),
    accountId: z.int().exactOptional().openapi({ deprecated: true }),
    data: SkinDataSchema,
    duration: z.number().exactOptional(),
    id: z.int(),
    idStr: z.string().exactOptional(),
    model: z.enum(['slim', 'steve', 'unknown']).openapi({ deprecated: true }),
    name: z.string().exactOptional(),
    private: z.boolean().exactOptional(),
    server: z.string().exactOptional(),
    timestamp: z.number().exactOptional(),
    uuid: z.string().exactOptional(),
    variant: z.enum(['classic', 'slim']).exactOptional(),
    views: z.number().exactOptional(),
  })
  .openapi({ required: ['id', 'model', 'data'] })
  .openapi('SkinInfo')

const StatsSchema = z
  .object({ delay: z.number().exactOptional(), server: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Stats')

const UserValidationSchema = z
  .object({
    name: z.string().exactOptional(),
    uuid: z.string().exactOptional(),
    valid: z.boolean(),
  })
  .openapi({ required: ['valid'] })
  .openapi('UserValidation')

const DelayInfoResponse = {
  description: 'Delay info for the requesting client',
  content: {
    'application/json': {
      schema: z
        .object({
          delay: z.int().exactOptional(),
          next: z.int().exactOptional(),
          nextRelative: z.int().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ErrorResponseResponse = {
  description: 'Response if an error occured',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.string().openapi({ description: 'Error message' }),
          errorCode: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Consistent error code, see [AuthError](https://github.com/MineSkin/api.mineskin.org/blob/793a926cbe4b90887ed8164c9eccfcb542fdeadb/src/generator/Authentication.ts#L580) & [GenError](https://github.com/MineSkin/api.mineskin.org/blob/47a5f51dc664e0f730b0073f70b2fc295e14ca3b/src/generator/Generator.ts#L1093)',
            }),
        })
        .openapi({ required: ['error'] }),
    },
  },
}

const GeneratedSkinResponse = {
  description: 'Successfully generated skin info',
  content: {
    'application/json': {
      schema: SkinInfoSchema.and(
        z
          .object({ duplicate: z.boolean().exactOptional(), nextRequest: z.int().exactOptional() })
          .openapi({ required: [] }),
      ),
    },
  },
}

const RateLimitResponseResponse = {
  description: 'Response if the client sent a request too soon',
  content: {
    'application/json': {
      schema: z
        .object({
          delay: z
            .int()
            .exactOptional()
            .openapi({ description: "The API's current delay in seconds" }),
          error: z.string().openapi({ description: 'Error message' }),
          nextRequest: z
            .int()
            .exactOptional()
            .openapi({ description: 'Unix timestamp when the next request is allowed' }),
        })
        .openapi({ required: ['error'] }),
    },
  },
}

const UserAgentParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples',
      example: 'ExampleApp/v1.0',
      in: 'header',
      name: 'User-Agent',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description: 'Get your key from https://mineskin.org/apikey',
  in: 'query',
  name: 'key',
  type: 'apiKey',
}

const BearerAuthSecurityScheme = {
  description: 'Get your key from https://mineskin.org/apikey',
  scheme: 'bearer',
  type: 'http',
}

export const postGenerateUploadRoute = createRoute({
  method: 'post',
  path: '/generate/upload',
  tags: ['generate'],
  request: {
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              model: z
                .enum(['steve', 'slim'])
                .default('steve')
                .exactOptional()
                .openapi({ deprecated: true }),
              name: z.string().max(20).exactOptional(),
              variant: z
                .enum(['classic', 'slim'])
                .exactOptional()
                .openapi({
                  description:
                    'Skin variant - automatically determined based on the image if not specified',
                }),
              visibility: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([z.literal(0), z.literal(1)]),
                )
                .default(0)
                .exactOptional()
                .openapi({
                  description: 'Visibility of the generated skin. 0 for public, 1 for private',
                }),
            })
            .openapi({ required: [] })
            .and(
              z
                .object({
                  file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: GeneratedSkinResponse,
    400: ErrorResponseResponse,
    429: RateLimitResponseResponse,
    500: ErrorResponseResponse,
  },
  security: [{ apiKey: [], bearerAuth: [] }],
})

export const postGenerateUrlRoute = createRoute({
  method: 'post',
  path: '/generate/url',
  tags: ['generate'],
  request: {
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: GenerateOptionsSchema.and(
            z.object({ url: z.string().exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: GeneratedSkinResponse,
    400: ErrorResponseResponse,
    429: RateLimitResponseResponse,
    500: ErrorResponseResponse,
  },
  security: [{ apiKey: [], bearerAuth: [] }],
})

export const postGenerateUserRoute = createRoute({
  method: 'post',
  path: '/generate/user',
  tags: ['generate'],
  request: {
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: GenerateOptionsSchema.and(
            z
              .object({ uuid: z.string().min(32).max(36).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: GeneratedSkinResponse,
    400: ErrorResponseResponse,
    429: RateLimitResponseResponse,
    500: ErrorResponseResponse,
  },
  security: [{ apiKey: [], bearerAuth: [] }],
})

export const getGetDelayRoute = createRoute({
  method: 'get',
  path: '/get/delay',
  tags: ['get'],
  request: { headers: z.object({ 'User-Agent': UserAgentParamsSchema }) },
  responses: { 200: DelayInfoResponse },
  security: [{ apiKey: [], bearerAuth: [] }],
})

export const getGetIdIdRoute = createRoute({
  method: 'get',
  path: '/get/id/{id}',
  tags: ['get'],
  description: 'Deprecated. Use /get/uuid instead.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'integer', type: 'number' },
          },
        }),
    }),
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
  },
  responses: {
    200: { description: 'Skin Info', content: { 'application/json': { schema: SkinInfoSchema } } },
  },
})

export const getGetListPageRoute = createRoute({
  method: 'get',
  path: '/get/list/{page}',
  tags: ['get'],
  request: {
    params: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              "For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.",
            in: 'path',
            name: 'page',
            required: true,
            schema: { format: 'integer', type: 'number' },
          },
        }),
    }),
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
  },
  responses: {
    200: {
      description: 'Skin Info List',
      content: {
        'application/json': {
          schema: z
            .object({
              filter: z.string().exactOptional(),
              page: z
                .object({
                  amount: z.int().exactOptional(),
                  index: z.int().exactOptional(),
                  total: z.int().exactOptional(),
                })
                .openapi({ required: [] }),
              skins: z.array(PartialSkinInfoSchema),
            })
            .openapi({ required: ['skins', 'page'] }),
        },
      },
    },
  },
})

export const getGetUuidUuidRoute = createRoute({
  method: 'get',
  path: '/get/uuid/{uuid}',
  tags: ['get'],
  request: {
    params: z.object({
      uuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
  },
  responses: {
    200: { description: 'Skin Info', content: { 'application/json': { schema: SkinInfoSchema } } },
  },
})

export const getValidateNameNameRoute = createRoute({
  method: 'get',
  path: '/validate/name/{name}',
  tags: ['util'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
  },
  responses: {
    200: {
      description: 'Validation info about the requested user',
      content: { 'application/json': { schema: UserValidationSchema } },
    },
  },
})

export const getValidateUuidUuidRoute = createRoute({
  method: 'get',
  path: '/validate/uuid/{uuid}',
  tags: ['util'],
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'User-Agent': UserAgentParamsSchema }),
  },
  responses: {
    200: {
      description: 'Validation info about the requested user',
      content: { 'application/json': { schema: UserValidationSchema } },
    },
  },
})
