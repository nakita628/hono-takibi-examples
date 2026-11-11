import { createRoute, z } from '@hono/zod-openapi'

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#paginations) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const CountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'count',
      in: 'query',
      description:
        'The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: {},
    },
  })

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The `authToken` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The `userId` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'rbAXPnMktTFbNpwtJ',
    },
  })

export const getApiV1EmojiCustomAllRoute = createRoute({
  method: 'get',
  path: '/api/v1/emoji-custom.all',
  tags: ['Custom Emoji'],
  summary: 'List All Custom Emojis',
  description:
    'List all custom emojis.\n\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|7.11.0            | Added the `name` query parameter       |\n|0.63.0            | Added       |',
  operationId: 'get-api-v1-emoji-custom.all',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'emoji-one' },
            in: 'query',
            name: 'name',
            description: 'Enter the emoji name you want to find. This parameter is optional.',
            required: false,
          },
          example: 'emoji-one',
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              emojis: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      aliases: z.array(z.string()).exactOptional(),
                      extension: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                emojis: [
                  {
                    _id: '6542e83aa2f73c7460e18efb',
                    name: 'happy',
                    aliases: ['happy-gang'],
                    extension: 'png',
                    _updatedAt: '2023-11-02T00:07:22.433Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1EmojiCustomCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/emoji-custom.create',
  tags: ['Custom Emoji'],
  summary: 'Create an Emoji',
  description:
    'Upload a custom emoji to the workspace. Make sure that you have configured the storage system. For details, refer to the [Manage Custom Sounds and Emojis](https://docs.rocket.chat/docs/manage-custom-sounds-and-emojis) document.\n\nPermission required: `manage-emoji`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.74.0            | Added       |\n',
  operationId: 'post-api-v1-emoji-custom.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              emoji: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The image file to use as the new custom emoji.',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the new custom emoji.',
                  example: 'grinning_cat',
                }),
              aliases: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The alias of the new custom emoji. You can enter more than one alias as comma-separated values.',
                  example: 'happy_cat,smiley_cat',
                }),
            })
            .openapi({ required: ['emoji', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: 'Missing Content-Type' } },
            'Example 2': {
              value: { success: false, error: '[No file uploaded]', errorType: 'No file uploaded' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1EmojiCustomDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/emoji-custom.delete',
  tags: ['Custom Emoji'],
  summary: 'Delete a Custom Emoji',
  description:
    'Delete a custom emoji. Permission required: `manage-emoji`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.74.0            | Added       |',
  operationId: 'post-api-v1-emoji-custom.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emojiId: z.string().openapi({ description: 'Enter the emoji ID to delete.' }),
            })
            .openapi({ required: ['emojiId'] }),
          examples: { Example: { value: { emojiId: '6542e83aa2f73c7460e18efb' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: 'The "emojiId" params is required!' } },
            'Example 2': {
              value: {
                success: false,
                error: 'Invalid emoji [Custom_Emoji_Error_Invalid_Emoji]',
                errorType: 'Custom_Emoji_Error_Invalid_Emoji',
                details: { method: 'deleteEmojiCustom' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1EmojiCustomListRoute = createRoute({
  method: 'get',
  path: '/api/v1/emoji-custom.list',
  tags: ['Custom Emoji'],
  summary: 'Get Updated List of Custom Emojis',
  description:
    'Get a list of updated and removed emojis.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `query` parameter.       |\n|7.0.0            | Added  `_id` and  `_updatedAt` query parameter     |\n|0.75.0            | Added       |',
  operationId: 'get-api-v1-emoji-custom.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      updatedSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedSince',
            in: 'query',
            description:
              'Date since the emojis were updated. Format: ISO string. When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.',
            schema: { type: 'string' },
            example: '2017-11-25T15:08:17.248Z',
            required: false,
          },
        }),
      _updatedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: '_updatedAt',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            example: '2024-11-02T06:40:43.751Z',
            required: false,
          },
        }),
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description: 'Filter list by custom emoji id.',
            schema: { type: 'string' },
            example: '6725ca0a101755229a8cb3bf',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              emojis: z
                .object({
                  update: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          aliases: z.array(z.looseObject({})).exactOptional(),
                          extension: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  remove: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          aliases: z.array(z.looseObject({})).exactOptional(),
                          extension: z.string().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                emojis: {
                  update: [
                    {
                      _id: 'S5XvYppoLrLd9JvQm',
                      name: 'teste',
                      aliases: [],
                      extension: 'jpg',
                      _updatedAt: '2019-02-18T16:48:35.119Z',
                    },
                  ],
                  remove: [
                    {
                      _id: '2dbVBG434dnsdh23',
                      name: 'teste3',
                      aliases: [],
                      extension: 'jpg',
                      _updatedAt: '2019-02-18T16:48:35.119Z',
                    },
                  ],
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1EmojiCustomUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/emoji-custom.update',
  tags: ['Custom Emoji'],
  summary: 'Update a Custom Emoji',
  description:
    'Update a custom emoji. Permission required: `manage-emoji`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.74.0            | Added       |',
  operationId: 'post-api-v1-emoji-custom.update',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      description: '',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Upload the emoji file that you want to update as form-data.',
                }),
              name: z
                .string()
                .openapi({
                  description: 'Enter the name of the emoji that you want to update.',
                  example: 'my-custom-emoji',
                }),
              _id: z
                .string()
                .openapi({
                  description: 'Enter the emoji ID to be updated.',
                  example: 'AG7DSB2H32YHS',
                }),
              aliases: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The alias of the custom emoji. You can enter more than one alias as comma-separated values.',
                  example: 'emoji-alias',
                }),
            })
            .openapi({ required: ['name', '_id'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: '[The required "_id" query param is missing.]',
                errorType: 'The required "_id" query param is missing.',
              },
            },
            'Example 2': {
              value: { success: false, error: '[Emoji not found.]', errorType: 'Emoji not found.' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CustomSoundsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/custom-sounds.list',
  tags: ['Custom Sounds'],
  summary: 'List Custom Sounds',
  description:
    'List all custom sounds. \n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `query` parameter.       |\n| 2.4.0            | Added       |\n| 2.4.0            | Added `name` query parameter for filtering.      |',
  operationId: 'get-api-v1-custom-sounds.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter list by the name of the custom sound.',
            schema: { type: 'string' },
            example: 'drill',
            required: false,
          },
        }),
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the results in ascending (`1`) or descending (`-1`) order. The options are:\n * `name`: Sort the results by name. For example, `sort={"name": 1}` (default) or `sort={"name": -1}`.\n * `_id`: Sort by ID. For example, `sort={"_id": 1}` or `sort={"_id": -1}`.',
            required: false,
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
              sounds: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      extension: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                sounds: [
                  {
                    _id: '65462caea2f73c7460e18f83',
                    name: 'doremi',
                    extension: 'mp3',
                    _updatedAt: '2023-11-04T11:36:14.171Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CustomSoundsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-sounds.create',
  tags: ['Custom Sounds'],
  summary: 'Create Custom Sound',
  description:
    'Upload a new custom sound to the workspace.\n\n- The request must be sent as `multipart/form-data` and contain the audio file in the `sound` field and the display name in the `name` field.\n\n- The file size must not exceed `5 MB` (5242880 bytes), and the file MIME type must be one of `audio/mpeg`, `audio/mp3`, `audio/wav`, or `audio/x-wav`.\n\nThis endpoint replaces the DDP methods `insertOrUpdateSound` and `uploadCustomSound`, which were removed in 9.0.0.\n\nPermission required: `manage-sounds`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n| 8.5.0   | Added       |',
  operationId: 'post-api-v1-custom-sounds.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              sound: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The audio file to upload. Allowed MIME types are `audio/mpeg`, `audio/mp3`, `audio/wav`, and `audio/x-wav`. Maximum size is `5 MB` (5242880 bytes).',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The display name of the custom sound. Must be at least one character long and must not contain colons, whitespace, or the characters `,`, `>`, `<`, `&`, `"`, `\'`, `/`, `\\`, `(`, or `)`.',
                  example: 'doremi',
                }),
            })
            .openapi({ required: ['sound', 'name'] }),
          examples: { Example: { value: { name: 'doremi' } } },
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
              sound: z
                .object({ _id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { sound: { _id: '65462caea2f73c7460e18f83' }, success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'MIME type not allowed': { value: { success: false, error: 'MIME type not allowed' } },
            'File too large': { value: { success: false, error: '[error-file-too-large]' } },
            'Name already in use': {
              value: {
                success: false,
                error:
                  'The custom sound name is already in use [Custom_Sound_Error_Name_Already_In_Use]',
              },
            },
            'Invalid name': { value: { success: false, error: '<script> is not a valid name' } },
            'Missing required field': {
              value: {
                success: false,
                error: "must have required property 'name' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1CustomSoundsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-sounds.update',
  tags: ['Custom Sounds'],
  summary: 'Update Custom Sound',
  description:
    'Update an existing custom sound.\n\n- The request must be sent as `multipart/form-data`. The `_id` and `name` fields are required; the `sound` file field is optional and only required when replacing the audio file.\n\n- When a new file is provided, the file size must not exceed `5 MB` (5242880 bytes), and the file MIME type must be one of `audio/mpeg`, `audio/mp3`, `audio/wav`, or `audio/x-wav`.\n\nThis endpoint replaces the DDP methods `insertOrUpdateSound` and `uploadCustomSound`, which were removed in 9.0.0.\n\nPermission required: `manage-sounds`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n| 8.5.0   | Added       |',
  operationId: 'post-api-v1-custom-sounds.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _id: z
                .string()
                .openapi({
                  description: 'The ID of the custom sound to update.',
                  example: '65462caea2f73c7460e18f83',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The updated display name of the custom sound. Must be at least one character long and must not contain colons, whitespace, or the characters `,`, `>`, `<`, `&`, `"`, `\'`, `/`, `\\`, `(`, or `)`.',
                  example: 'doremi-v2',
                }),
              sound: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Optional. A new audio file to replace the existing one. If omitted, the current file is kept. Allowed MIME types are `audio/mpeg`, `audio/mp3`, `audio/wav`, and `audio/x-wav`. Maximum size is `5 MB` (5242880 bytes).',
                }),
            })
            .openapi({ required: ['_id', 'name'] }),
          examples: { Example: { value: { _id: '65462caea2f73c7460e18f83', name: 'doremi-v2' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Sound not found': { value: { success: false, error: 'Custom Sound not found.' } },
            'MIME type not allowed': { value: { success: false, error: 'MIME type not allowed' } },
            'File too large': { value: { success: false, error: '[error-file-too-large]' } },
            'Name already in use': {
              value: {
                success: false,
                error:
                  'The custom sound name is already in use [Custom_Sound_Error_Name_Already_In_Use]',
              },
            },
            'Invalid name': { value: { success: false, error: '<script> is not a valid name' } },
            'Missing required field': {
              value: {
                success: false,
                error: "must have required property '_id' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1CustomUserStatusListRoute = createRoute({
  method: 'get',
  path: '/api/v1/custom-user-status.list',
  tags: ['Custom User Status'],
  summary: 'List Custom User Status',
  description:
    "Lists all available custom user's status.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0   | Removed the `query` parameter.       |\n|7.0.0           | Added `name` and `_id` query parameters for filtering.      |\n|2.4.0            | Added       |",
  operationId: 'get-api-v1-custom-user-status.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter list by the name of the custom status.',
            schema: { type: 'string' },
            example: 'lunch',
            required: false,
          },
        }),
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description: 'Filter list by the _id of the custom status.',
            schema: { type: 'string' },
            example: '6731e2ce3b74d3c57d334d0f',
            required: false,
          },
        }),
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the order of custom user status in ascending (`1`) or descending (`-1`) order. The options are:\n * `name`: Sort by name. For example, `sort={"name": 1}` (default) or `sort={"name": -1}`.\n * `statusType`: Sort by status type. For example, `sort={"statusType": 1}` or sort=`{"statusType": -1}`.\n * You can also sort using both parameters. For example, `sort={"name": 1, "statusType": -1}`.',
            required: false,
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
              statuses: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      statusType: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                statuses: [
                  {
                    _id: '63f61be0b000b6b6d86704c8',
                    name: 'brb',
                    statusType: 'away',
                    _updatedAt: '2023-02-22T13:42:56.811Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CustomUserStatusCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-user-status.create',
  tags: ['Custom User Status'],
  summary: 'Create Custom Status',
  description:
    'Create a custom user status. Permission required: `manage-user-status`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|2.4.0            | Added       |\n',
  operationId: 'post-api-v1-custom-user-status.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the custom status.' }),
              statusType: z
                .string()
                .openapi({
                  description:
                    'The `statusType` of the custom status. Valid status type includes: `Online`, `Busy`, `Away`, `Offline`.',
                }),
            })
            .openapi({ required: ['name', 'statusType'] }),
          examples: { Example: { value: { name: 'caught up', statusType: 'busy' } } },
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
              customUserStatus: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  statusType: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                customUserStatus: {
                  _id: '65462e97a2f73c7460e18f84',
                  name: 'caught up',
                  statusType: 'busy',
                  _updatedAt: '2023-11-04T11:44:23.366Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Name Param': {
              value: {
                success: false,
                error: 'The field Name is required [error-the-field-is-required]',
                errorType: 'error-the-field-is-required',
                details: { method: 'insertOrUpdateUserStatus', field: 'Name' },
              },
            },
            'Status name already in use': {
              value: {
                success: false,
                error:
                  'The custom user status name is already in use [Custom_User_Status_Error_Name_Already_In_Use]',
                errorType: 'Custom_User_Status_Error_Name_Already_In_Use',
                details: { method: 'insertOrUpdateUserStatus' },
              },
            },
            'Invalid Status Type': {
              value: {
                success: false,
                error: 'Offline is not a valid status type [error-input-is-not-a-valid-field]',
                errorType: 'error-input-is-not-a-valid-field',
                details: {
                  method: 'insertOrUpdateUserStatus',
                  input: 'Offline',
                  field: 'StatusType',
                },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CustomUserStatusUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-user-status.update',
  tags: ['Custom User Status'],
  summary: 'Update Custom Status',
  description:
    'Update a custom status. Permission required: `manage-user-status`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'post-api-v1-custom-user-status.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().openapi({ description: 'The `_id` of the custom status.' }),
              name: z.string().openapi({ description: 'The updated name of the custom status.' }),
              statusType: z
                .string()
                .openapi({ description: 'The updated `statusType` of the custom status' }),
            })
            .openapi({ required: ['_id', 'name', 'statusType'] }),
          examples: {
            Example: {
              value: {
                _id: '65462e97a2f73c7460e18f84',
                name: 'caught up again',
                statusType: 'busy',
              },
            },
          },
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
              customUserStatus: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  statusType: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                customUserStatus: {
                  _id: '65462e97a2f73c7460e18f84',
                  name: 'caught up again',
                  statusType: 'busy',
                  _updatedAt: '2023-11-04T11:51:28.353Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'User status not found': {
              value: {
                success: false,
                error: 'No custom user status found with the id of "SeZHHb77QXWRbnDh".',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CustomUserStatusDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-user-status.delete',
  tags: ['Custom User Status'],
  summary: 'Delete Custom User Status',
  description:
    'Delete a custom user status. Permission required: `manage-user-status`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'post-api-v1-custom-user-status.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customUserStatusId: z
                .string()
                .openapi({ description: 'The `_id` of the custom status' }),
            })
            .openapi({ required: ['customUserStatusId'] }),
          examples: { Example: { value: { customUserStatusId: '65462e97a2f73c7460e18f84' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'User status Id is required:': {
              value: { success: false, error: 'The "customUserStatusId" params is required!' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1AssetsSetAssetRoute = createRoute({
  method: 'post',
  path: '/api/v1/assets.setAsset',
  tags: ['Assets'],
  summary: 'Set Asset',
  description:
    "Upload an <a href=\"https://docs.rocket.chat/docs/assets\" target=\"_blank\"> asset</a> by name. Permissions required: `manage-assets`. Make sure that the workspace's <a href='https://docs.rocket.chat/docs/file-upload' target='_blank'>file upload settings</a> are configured as required. The allowed file size and type depend on the file upload settings.\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.69.0           | Added       |",
  operationId: 'post-api-v1-assets.setAsset',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              asset: z.string().openapi({ description: 'Upload the file as form-data.' }),
              assetName: z
                .string()
                .openapi({
                  description:
                    'Type of asset to upload. The value can be one of the following:\n* `logo`\n* `background`\n* `favicon_ico`\n* `favicon`\n* `favicon_16`\n* `favicon_32`\n* `favicon_192`\n* `favicon_512`\n* `touchicon_180`\n* `touchicon_180_pre`\n* `tile_70`\n* `tile_144`\n* `tile_150`\n* `tile_310_square`\n* `tile_310_wide`\n* `safari_pinned`',
                  example: 'logo',
                }),
              refreshAllClients: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Set to true if all clients must be refreshed to immediately apply the changes.',
                  example: true,
                }),
            })
            .openapi({ required: ['asset', 'assetName'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'No asset name': { value: { success: false, error: 'Invalid asset' } },
            'Example 1': {
              value: { success: false, error: '[No file uploaded]', errorType: 'No file uploaded' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1AssetsUnsetAssetRoute = createRoute({
  method: 'post',
  path: '/api/v1/assets.unsetAsset',
  tags: ['Assets'],
  summary: 'Unset Asset',
  description:
    'Remove an asset by name. Permissions required: `manage-assets` .\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.69.0           | Added       |',
  operationId: 'post-api-v1-assets.unsetAsset',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetName: z
                .string()
                .openapi({
                  description:
                    'Type of asset to remove. The value can be one of the following:\n* `logo`\n* `background`\n* `favicon_ico`\n* `favicon`\n* `favicon_16`\n* `favicon_32`\n* `favicon_192`\n* `favicon_512`\n* `touchicon_180`\n* `touchicon_180_pre`\n* `tile_70`\n* `tile_144`\n* `tile_150`\n* `tile_310_square`\n* `tile_310_wide`\n* `safari_pinned`',
                }),
              refreshAllClients: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true if all clients must be refreshed to immediately apply the changes.',
                }),
            })
            .openapi({ required: ['assetName'] }),
          examples: { Example: { value: { assetName: 'logo', refreshAllClients: true } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'assetName' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CustomSoundsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/custom-sounds.delete',
  tags: ['Custom Sounds'],
  summary: 'Delete Custom Sound',
  description:
    'Delete a custom sound from the workspace by its `_id`. This also removes the associated audio file from storage. This endpoint replaces the DDP method `deleteCustomSound`, which was removed in 9.0.0.\n\nPermission required: `manage-sounds`\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n| 8.6.0   | Added       |',
  operationId: 'post-api-v1-custom-sounds.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z
                .string()
                .openapi({
                  description:
                    'The ID of the custom sound to delete. Must be at least one character long.',
                  example: '65462caea2f73c7460e18f83',
                }),
            })
            .openapi({ required: ['_id'] }),
          examples: { Example: { value: { _id: '65462caea2f73c7460e18f83' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid sound': {
              value: { success: false, error: 'Custom_Sound_Error_Invalid_Sound' },
            },
            'Missing required field': {
              value: {
                success: false,
                error: "must have required property '_id' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1CustomSoundsGetOneRoute = createRoute({
  method: 'get',
  path: '/api/v1/custom-sounds.getOne',
  tags: ['Custom Sounds'],
  summary: 'Get Custom Sound',
  description:
    '- Returns one custom sound record for the workspace. You must pass the sound’s `_id` as a query parameter.\n\n- Authentication is required. The response includes the sound’s metadata (`name`, `extension`, `_updatedAt`), not the binary file.\n\n### Changelog\n\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n| 8.3.0   | Added       |',
  operationId: 'get-api-v1-custom-sounds.getOne',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: '_id',
            required: true,
            description: 'ID of the custom sound',
            example: '65462caea2f73c7460e18f83',
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
              success: z.boolean().exactOptional(),
              sound: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Request succeeded; returns the sound metadata.': {
              value: {
                success: true,
                sound: {
                  _id: '65462caea2f73c7460e18f83',
                  name: 'doremi',
                  extension: 'mp3',
                  _updatedAt: '2023-11-04T11:36:14.171Z',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid or missing _id': {
              value: {
                success: false,
                error: '[The required "_id" query param is missing.]',
                errorType: 'The required "_id" query param is missing.',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Unauthorized login attempt': {
              value: { success: false, error: 'You must be logged in to do this.' },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'No permission': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Sound not found': { value: { success: false, error: 'Custom Sound not found.' } },
          },
        },
      },
    },
  },
})
