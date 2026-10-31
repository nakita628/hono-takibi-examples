import { createRoute, z } from '@hono/zod-openapi'

const PetSchema = z
  .object({ name: z.string().exactOptional(), petType: z.enum(['Cat', 'Dog']).exactOptional() })
  .openapi({ required: [] })
  .openapi('Pet')

const PetsSchema = z.array(PetSchema).openapi('Pets')

const TagSchema = z
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TokenSchema = z
  .object({ access_token: z.int32(), token_type: z.string(), expires_in: z.int32() })
  .openapi({ title: 'Token', required: ['access_token', 'token_type', 'expires_in'] })
  .openapi('Token')

const UserSchema = z
  .object({
    id: z.number().exactOptional(),
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const UserExample = { value: { id: 12343354, email: 'test@example.com', name: 'Test user name' } }

export const getParameterExamplesParam1Param2Route = createRoute({
  method: 'get',
  path: '/parameterExamples/{param1}/{param2}',
  tags: ['Multiple examples'],
  summary: 'Within `examples` (parameters)',
  description:
    'This operation has several parameters with examples alongside separately maintained example within `examples` at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    params: z.object({
      param1: z
        .string()
        .openapi({
          param: {
            name: 'param1',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 1)',
                description: 'a lengthier example description (param 1)',
                value: 'param1-example',
              },
              yetAnotherParamExample: { value: 'param1-example-again' },
            },
          },
        }),
      param2: z
        .string()
        .openapi({
          param: {
            name: 'param2',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 2)',
                description: 'a lengthier example description (param 2)',
                value: 'param2-example',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            userRegistration: {
              value: {
                summary: 'example summary (response)',
                description: 'a lengthier example description (response)',
                id: 1234,
                email: 'test+response@example.com',
                name: 'Test user name (response)',
              },
            },
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
    400: { description: 'Validation failed', content: {} },
    default: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
  },
})

export const putParameterExamplesParam1Param2Route = createRoute({
  method: 'put',
  path: '/parameterExamples/{param1}/{param2}',
  tags: ['Single example'],
  summary: 'Within `example`',
  description:
    'This operation has a param example and `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    params: z.object({
      param1: z
        .string()
        .openapi({
          param: {
            name: 'param1',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'param1-example',
          },
        }),
      param2: z
        .string()
        .openapi({
          param: {
            name: 'param2',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            example: 'param2-example',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
    },
  },
})

export const patchParameterExamplesParam1Param2Route = createRoute({
  method: 'patch',
  path: '/parameterExamples/{param1}/{param2}',
  tags: ['Multiple examples'],
  summary: 'Within `examples` (mixed)',
  description:
    'This operation has parameter and body examples alongside separately maintained example within `examples` at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    params: z.object({
      param1: z
        .string()
        .openapi({
          param: {
            name: 'param1',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 1)',
                description: 'a lengthier example description (param 1)',
                value: 'param1-example',
              },
              yetAnotherParamExample: { value: 'param1-example-again' },
            },
          },
        }),
      param2: z
        .string()
        .openapi({
          param: {
            name: 'param2',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 2)',
                description: 'a lengthier example description (param 2)',
                value: 'param2-example',
              },
            },
          },
        }),
    }),
    query: z.object({
      param3: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'param3',
            in: 'query',
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 3)',
                description: 'a lengthier example description (param 3)',
                value: 'param3-example',
              },
            },
            required: false,
          },
        }),
      param4: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'param4',
            in: 'query',
            schema: { type: 'string' },
            example: 'param4-example',
            required: false,
          },
        }),
    }),
    headers: z.object({
      param5: z
        .string()
        .openapi({
          param: {
            name: 'param5',
            in: 'header',
            required: true,
            schema: { type: 'string' },
            examples: {
              userRegistration: {
                summary: 'example summary (param 5)',
                description: 'a lengthier example description (param 5)',
                value: 'param5-example',
              },
            },
          },
        }),
      param6: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'param6',
            in: 'header',
            schema: { type: 'string' },
            example: 'param6-example',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            userRegistration: {
              value: { id: 1234, email: 'test@example.com', name: 'Test user name' },
            },
            'userRegistration alt': {
              value: { id: 5678, email: 'test@example.com', name: 'Test user name' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            userRegistration: {
              value: {
                summary: 'example summary (response)',
                description: 'a lengthier example description (response)',
                id: 1234,
                email: 'test+response@example.com',
                name: 'Test user name (response)',
              },
            },
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
    400: { description: 'Validation failed', content: {} },
    default: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
  },
})

export const putRequestBodyRoute = createRoute({
  method: 'put',
  path: '/requestBody',
  tags: ['Single example'],
  summary: '`$ref` within `example`',
  description:
    'This operation has a `requestBody` with separately maintained example within a `$ref` in a simple `example` object at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
    },
  },
})

export const postRequestBodyRoute = createRoute({
  method: 'post',
  path: '/requestBody',
  tags: ['Multiple examples'],
  summary: 'Within `examples` (body)',
  description:
    'This operation has a `requestBody` with separately maintained examples within `examples` at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            userRegistration: {
              value: { id: 1234, email: 'test@example.com', name: 'Test user name' },
            },
            'userRegistration alt': {
              value: { id: 5678, email: 'test@example.com', name: 'Test user name' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            userRegistration: {
              summary: 'example summary (response)',
              description: 'a lengthier example description (response)',
              value: {
                id: 1234,
                email: 'test+response@example.com',
                name: 'Test user name (response)',
              },
            },
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
    400: { description: 'Validation failed', content: {} },
    default: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          examples: {
            response: { value: { id: 1234, email: 'test@example.com', name: 'Test user name' } },
          },
        },
      },
    },
  },
})

export const patchRequestBodyRoute = createRoute({
  method: 'patch',
  path: '/requestBody',
  tags: ['Single example'],
  summary: 'Within `example`',
  description:
    'This operation has a `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserSchema,
          example: { id: 12343354, email: 'test@example.com', name: 'Test user name' },
        },
      },
    },
  },
})

export const putRequestBodyPrimitiveExampleRoute = createRoute({
  method: 'put',
  path: '/requestBody-primitive-example',
  tags: ['Multiple examples'],
  summary: 'Stringified JSON arrays in an `examples` value',
  description:
    'This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing a stringified JSON array.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PetsSchema,
          examples: {
            cat: {
              summary: 'An example of a cat',
              value: '[\n  {\n    "name": "Fluffy",\n    "petType": "Cat"\n  }\n]',
            },
            dog: {
              summary: 'An example of a dog',
              value: '[\n  {\n    "name": "Buster",\n    "petType": "Dog"\n  }\n]',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PetsSchema,
          examples: {
            cat: {
              summary: 'An example of a cat',
              value: '[\n  {\n    "name": "Fluffy",\n    "petType": "Cat"\n  }\n]',
            },
            dog: {
              summary: 'An example of a dog',
              value: '[\n  {\n    "name": "Buster",\n    "petType": "Dog"\n  }\n]',
            },
          },
        },
      },
    },
  },
})

export const postRequestBodyPrimitiveExampleRoute = createRoute({
  method: 'post',
  path: '/requestBody-primitive-example',
  tags: ['Single example'],
  summary: 'Primitive `example`',
  description:
    'This operation has a `requestBody` with separately maintained **primitive** example within a simple `example` object at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': { schema: z.string(), example: 'column1,column2,column3,column4' },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string(), example: 'column1,column2,column3,column4' },
      },
    },
  },
})

export const patchRequestBodyPrimitiveExampleRoute = createRoute({
  method: 'patch',
  path: '/requestBody-primitive-example',
  tags: ['Multiple examples'],
  summary: 'Stringified JSON object in an `examples` value',
  description:
    'This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing stringified JSON object.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PetSchema,
          examples: {
            cat: {
              summary: 'An example of a cat',
              value: '{\n  "name": "Fluffy",\n  "petType": "Cat"\n}',
            },
            dog: {
              summary: 'An example of a dog',
              value: '{\n  "name": "Buster",\n  "petType": "Dog"\n}',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PetSchema,
          examples: {
            cat: {
              summary: 'An example of a cat',
              value: '{\n  "name": "Fluffy",\n  "petType": "Cat"\n}',
            },
            dog: {
              summary: 'An example of a dog',
              value: '{\n  "name": "Buster",\n  "petType": "Dog"\n}',
            },
          },
        },
      },
    },
  },
})

export const postRequestBodyMultiMediaTypesRoute = createRoute({
  method: 'post',
  path: '/requestBody-multi-media-types',
  tags: ['Multiple media types'],
  summary: 'Within `examples`',
  description:
    'This operation has a `requestBody` containing multiple media types with each containing a separately maintained example within `examples` at the Media Type Object level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)\n\n* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)',
  request: { body: { content: {}, required: true } },
  responses: {
    200: { description: 'OK', content: {} },
    400: { description: 'Validation failed', content: {} },
  },
})

export const postRequestBodyFormDataExampleRoute = createRoute({
  method: 'post',
  path: '/requestBody-form-data-example',
  summary: 'Demo handling of formData',
  operationId: 'demoFormData',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string(),
              client_secret: z.string(),
              scope: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .openapi({ required: ['client_id', 'client_secret'] }),
          examples: {
            auth_example: { value: { client_id: 'id123', client_secret: 'secret456', scope: 789 } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Valid Token',
      content: {
        'application/json': {
          schema: TokenSchema,
          examples: {
            auth_example: { value: { access_token: 123, token_type: 'type456', expires_in: 789 } },
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
  },
})
